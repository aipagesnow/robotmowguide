import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const tag = process.env.AMAZON_ASSOCIATE_TAG || "";
const failures = [];

const banned = new RegExp(
  [
    "TODO|FIXME|XXX|TBD|(?<![A-Za-z])TK\\b|lorem|ipsum|placeholder|sample (content|text|data|product)|dummy|example\\.com|coming soon|under construction|insert (here|image|link)|replace (this|me|before)|add (copy|content) here",
    "\\{\\{|\\}\\}|\\[\\[|\\]\\]|\\bundefined\\b|\\bNaN\\b|\\bnull\\b|\\[object Object\\]",
    "as an AI|language model|Grok|Vora|prompt|Chris\\b|Aivora internal|dev note|note to (self|editor|builder)|for the builder|do not publish|draft\\b",
    "we tested|in our testing|hands-on|our test lawn|lab test|tested by us",
    "\\b\\d(\\.\\d)?/10\\b|★|☆|stars? rating|editor'?s choice",
    "amazon\\.com/s\\?|tag=yourtag|tag=\\$\\{|tag=undefined|tag=&|tag=$|amazon\\.co\\.uk",
    "localhost|vercel\\.app|127\\.0\\.0\\.1",
    "/go/|/out/|/recommends/",
    "stars? on amazon|rated on amazon|amazon rating|customers say|\\d[\\d,]* (ratings|reviews) on amazon",
    "banned brand|illegal to buy|chinese ban",
    "coming in (late )?20\\d\\d|launching (late )?20\\d\\d",
  ].join("|"),
  "i",
);

const forbiddenTypes = new Set(["FAQPage", "Review", "AggregateRating", "Rating", "Product", "Offer"]);
const amazonHref = tag
  ? new RegExp(`^https://www\\.amazon\\.com/dp/[A-Z0-9]{10}\\?tag=${tag.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}$`)
  : null;

function fail(where, detail) {
  failures.push(`${where}: ${detail}`);
}

function walk(dir, out = []) {
  if (!existsSync(dir)) return out;
  for (const name of readdirSync(dir)) {
    const full = path.join(dir, name);
    const stat = statSync(full);
    if (stat.isDirectory()) walk(full, out);
    else out.push(full);
  }
  return out;
}

function decode(text) {
  return text
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&nbsp;/g, " ");
}

function neutralize(text) {
  return text
    .replace(/vora\+robotmow@mail\.grokbot\.com/gi, " ")
    .replace(/aivora/gi, " ")
    .replace(/have not tested/gi, " ")
    .replace(/haven['’]t tested/gi, " ")
    .replace(/\bnot tested\b/gi, " ")
    .replace(/no hands-on testing/gi, " ")
    .replace(/research-based/gi, " ");
}

function scanText(where, text) {
  const cleaned = neutralize(decode(text));
  const match = cleaned.match(banned);
  if (match) fail(where, `banned text “${match[0]}”`);
}

function collectAttrs(html) {
  const bits = [];
  for (const match of html.matchAll(/\b(?:alt|title|aria-label)\s*=\s*"([^"]*)"/gi)) bits.push(match[1]);
  for (const match of html.matchAll(/\b(?:alt|title|aria-label)\s*=\s*'([^']*)'/gi)) bits.push(match[1]);
  for (const tag of html.matchAll(/<meta\b[^>]*>/gi)) {
    const tagText = tag[0];
    if (!/name=["']description["']|property=["']og:|name=["']twitter:/i.test(tagText)) continue;
    const content = tagText.match(/content=["']([^"']*)["']/i);
    if (content) bits.push(content[1]);
  }
  return bits.join("\n");
}

function visibleText(html) {
  const without = html
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, " ")
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, " ");
  return decode(without.replace(/<[^>]+>/g, " "));
}

function jsonLdBlocks(html) {
  return [...html.matchAll(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)].map(
    (match) => match[1],
  );
}

function collectStrings(value, out) {
  if (typeof value === "string") out.push(value);
  else if (Array.isArray(value)) value.forEach((item) => collectStrings(item, out));
  else if (value && typeof value === "object") {
    for (const child of Object.values(value)) collectStrings(child, out);
  }
}

function walkTypes(value, found) {
  if (!value || typeof value !== "object") return;
  if (Array.isArray(value)) {
    value.forEach((item) => walkTypes(item, found));
    return;
  }
  if (typeof value["@type"] === "string") found.push(value["@type"]);
  if (Array.isArray(value["@type"])) found.push(...value["@type"]);
  for (const child of Object.values(value)) walkTypes(child, found);
}

function extractClusters(html) {
  const clusters = [];
  const open = /<([a-z0-9]+)([^>]*\sdata-cta-cluster=["']true["'][^>]*)>/gi;
  let match;
  while ((match = open.exec(html))) {
    const tag = match[1].toLowerCase();
    let index = open.lastIndex;
    let depth = 1;
    const token = new RegExp(`<\\/?${tag}\\b[^>]*>`, "gi");
    token.lastIndex = index;
    let end = html.length;
    let tokenMatch;
    while ((tokenMatch = token.exec(html))) {
      if (tokenMatch[0].startsWith("</")) depth -= 1;
      else if (!tokenMatch[0].endsWith("/>")) depth += 1;
      if (depth === 0) {
        end = tokenMatch.index + tokenMatch[0].length;
        break;
      }
    }
    clusters.push(html.slice(match.index, end));
    open.lastIndex = match.index + 1;
  }
  return clusters;
}

function routeFromFile(file) {
  const rel = path.relative(path.join(root, ".next/server/app"), file).replace(/\\/g, "/");
  if (rel.endsWith(".html")) {
    const bare = rel.replace(/\.html$/, "").replace(/\/index$/, "");
    if (bare === "index" || bare === "") return "/";
    return `/${bare}`;
  }
  return null;
}

function priceRoute(route) {
  return /^\/(best|reviews|vs|tools)(\/|$)/.test(route || "");
}

function scanHtml(where, html, route) {
  scanText(where, visibleText(html));
  scanText(where, collectAttrs(html));

  for (const block of jsonLdBlocks(html)) {
    let data;
    try {
      data = JSON.parse(decode(block));
    } catch {
      fail(where, "JSON-LD did not parse");
      continue;
    }
    const types = [];
    walkTypes(data, types);
    for (const type of types) {
      if (forbiddenTypes.has(type)) fail(where, `forbidden JSON-LD @type ${type}`);
    }
    const strings = [];
    collectStrings(data, strings);
    scanText(`${where} json-ld`, strings.join("\n"));
  }

  const hrefs = [...html.matchAll(/\bhref=["']([^"']+)["']/gi)].map((match) => decode(match[1]));
  const amazon = hrefs.filter((href) => /amazon\.com/i.test(href));
  for (const href of amazon) {
    if (!amazonHref || !amazonHref.test(href)) {
      fail(where, `Amazon href does not match the tagged product pattern: ${href}`);
    }
  }

  if (amazon.length) {
    const disclosureAt = html.indexOf("As an Amazon Associate I earn from qualifying purchases.");
    const firstLink = html.search(/href=["']https:\/\/www\.amazon\.com\/dp\//i);
    if (disclosureAt === -1 || firstLink === -1 || disclosureAt > firstLink) {
      fail(where, "disclosure sentence is missing or sits after the first Amazon link");
    }
  }

  for (const cluster of extractClusters(html)) {
    if (!/Paid links/i.test(cluster)) fail(where, "CTA cluster is missing “Paid links”");
    const anchors = [...cluster.matchAll(/<a\b[^>]*href=["']https:\/\/www\.amazon\.com\/dp\/[^"']+["'][^>]*>[\s\S]*?<\/a>/gi)];
    for (const anchor of anchors) {
      const tagText = anchor[0];
      const aria = tagText.match(/aria-label=["']([^"']*)["']/i);
      const inner = tagText.replace(/<[^>]+>/g, " ");
      const name = `${aria ? aria[1] : ""} ${inner}`;
      if (!/See .+ on Amazon/i.test(name) || /^\s*See on Amazon\s*$/i.test(name.trim())) {
        fail(where, `Amazon link name does not include the model: ${name.trim()}`);
      }
      if (!/rel=["'][^"']*nofollow[^"']*sponsored/i.test(tagText)) {
        fail(where, "Amazon link is missing nofollow sponsored");
      }
    }
  }

  const reports = [...html.matchAll(/<li\b[^>]*data-owner-report=["']true["'][^>]*>[\s\S]*?<\/li>/gi)];
  for (const report of reports) {
    const links = [...report[0].matchAll(/href=["'](https?:\/\/[^"']+)["']/gi)].map((match) => match[1]);
    if (!links.some((href) => !/amazon\.com/i.test(href))) {
      fail(where, "owner report is missing an external non-Amazon link");
    }
  }

  if (priceRoute(route) && /\$\d/.test(visibleText(html))) {
    fail(where, "a price-like $ amount is visible");
  }
}

const htmlFiles = walk(path.join(root, ".next/server/app")).filter((file) => file.endsWith(".html"));
if (!htmlFiles.length) fail("build", "no HTML files under .next/server/app");

const seenRoutes = new Set();
for (const file of htmlFiles) {
  const route = routeFromFile(file);
  if (route) seenRoutes.add(route);
  scanHtml(route || file, readFileSync(file, "utf8"), route);
}

const routes = JSON.parse(readFileSync(path.join(root, "content/routes.json"), "utf8"));
for (const page of routes) {
  if (!seenRoutes.has(page.path)) fail(page.path, "expected route was not in the built HTML");
}

const extraText = [];
const llms = path.join(root, "public/llms.txt");
if (!existsSync(llms)) fail("llms.txt", "missing");
else extraText.push(["public/llms.txt", readFileSync(llms, "utf8")]);

const key = "2b3fd7045f9cfd3978efbb9fb48e8fc1";
const keyFile = path.join(root, "public", `${key}.txt`);
if (!existsSync(keyFile)) fail("indexnow key", "missing");
else {
  const body = readFileSync(keyFile, "utf8").trim();
  if (body !== key) fail("indexnow key", "body does not match the key");
  extraText.push(["indexnow", body]);
}

for (const name of ["robots.txt.body", "sitemap.xml.body"]) {
  const file = path.join(root, ".next/server/app", name);
  if (!existsSync(file)) fail(name, "missing built file");
  else extraText.push([name, readFileSync(file, "utf8")]);
}

for (const [where, text] of extraText) scanText(where, text);

const products = JSON.parse(readFileSync(path.join(root, "content/products.json"), "utf8"));
const discontinued = [];
for (const family of products.products || []) {
  for (const variant of family.variants || []) {
    if (variant.status === "discontinued" && variant.asin) discontinued.push(variant.asin);
  }
}
const allHtml = htmlFiles.map((file) => readFileSync(file, "utf8")).join("\n");
for (const asin of discontinued) {
  if (allHtml.includes(asin)) fail(asin, "discontinued ASIN is present in HTML");
}

if (!tag) {
  console.log("Ship scan note: AMAZON_ASSOCIATE_TAG is unset, so any Amazon href fails the pattern.");
}

if (failures.length) {
  console.error(`Ship scan: fail (${failures.length})`);
  for (const line of failures) console.error(line);
  process.exit(1);
}

console.log("Ship scan: pass");
