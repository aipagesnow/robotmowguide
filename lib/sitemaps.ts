import routes from "@/content/routes.json";
import { families } from "@/lib/products";
import { absoluteUrl, SITE_URL } from "@/lib/site";

export const BASE = SITE_URL.replace(/\/$/, "");

export const CHILD_SITEMAP_PATHS = [
  "/sitemap-reviews.xml",
  "/sitemap-guides.xml",
  "/sitemap-best.xml",
  "/sitemap-vs.xml",
  "/sitemap-core.xml",
] as const;

function escapeXml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function wrapUrlset(entries: string[]): string {
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries.join("\n")}\n</urlset>\n`;
}

export function sitemapIndexXml(childPaths: readonly string[], base: string): string {
  const entries = childPaths.map(
    (path) =>
      `  <sitemap>\n    <loc>${escapeXml(`${base}${path}`)}</loc>\n  </sitemap>`
  );
  return `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries.join("\n")}\n</sitemapindex>\n`;
}

export function xmlResponse(body: string): Response {
  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
}

function urlTag(loc: string, extras: string[] = []): string {
  const parts = [`    <loc>${escapeXml(loc)}</loc>`, ...extras.map((e) => `    ${e}`)];
  return `  <url>\n${parts.join("\n")}\n  </url>`;
}

type RouteRow = { path: string; lastmod: string };

const ROUTE_ROWS = routes as RouteRow[];

function under(prefix: string): RouteRow[] {
  return ROUTE_ROWS.filter(
    (row) => row.path === prefix || row.path.startsWith(`${prefix}/`)
  );
}

const SECTION_PREFIXES = ["/reviews", "/guides", "/best", "/vs"] as const;

export function reviewsPaths(): string[] {
  return under("/reviews").map((r) => r.path);
}
export function guidesPaths(): string[] {
  return under("/guides").map((r) => r.path);
}
export function bestPaths(): string[] {
  return under("/best").map((r) => r.path);
}
export function vsPaths(): string[] {
  return under("/vs").map((r) => r.path);
}
export function corePaths(): string[] {
  return ROUTE_ROWS.filter(
    (row) =>
      !SECTION_PREFIXES.some(
        (prefix) => row.path === prefix || row.path.startsWith(`${prefix}/`)
      )
  ).map((r) => r.path);
}

export function allPaths(): string[] {
  return [
    ...reviewsPaths(),
    ...guidesPaths(),
    ...bestPaths(),
    ...vsPaths(),
    ...corePaths(),
  ];
}

function lastmodFor(path: string): string {
  return ROUTE_ROWS.find((r) => r.path === path)?.lastmod ?? "";
}

function urlsetFromPaths(paths: string[]): string {
  return wrapUrlset(
    paths.map((path) => {
      const lastmod = lastmodFor(path);
      return urlTag(absoluteUrl(path), lastmod ? [`<lastmod>${lastmod}</lastmod>`] : []);
    })
  );
}

export function reviewsUrlset(): string {
  return urlsetFromPaths(reviewsPaths());
}
export function guidesUrlset(): string {
  return urlsetFromPaths(guidesPaths());
}
export function bestUrlset(): string {
  return urlsetFromPaths(bestPaths());
}
export function vsUrlset(): string {
  return urlsetFromPaths(vsPaths());
}
export function coreUrlset(): string {
  return urlsetFromPaths(corePaths());
}
export function indexXml(): string {
  return sitemapIndexXml(CHILD_SITEMAP_PATHS, BASE);
}

export type SitemapLink = { href: string; label: string };
export type SitemapGroup = { heading: string; links: SitemapLink[] };

const LABELS: Record<string, string> = {
  "/": "Home",
  "/reviews": "Reviews",
  "/guides": "Guides",
  "/best": "Best robot mowers",
  "/vs": "Comparisons",
  "/tools/mower-finder": "Mower finder",
  "/about": "About",
  "/how-picks-are-chosen": "How picks are chosen",
  "/affiliate-disclosure": "Affiliate disclosure",
  "/privacy": "Privacy",
  "/sitemap": "All pages",
  "/vs/luba-mini-2-awd-1500h-vs-dreame-a3-awd-pro-3500": "LUBA mini 2 AWD 1500H vs Dreame A3 AWD Pro 3500",
};

function titleCaseSlug(slug: string): string {
  return slug
    .split("-")
    .map((word) => {
      if (word.toLowerCase() === "vs") return "vs";
      if (word.toLowerCase() === "rtk") return "RTK";
      if (word.toLowerCase() === "fcc") return "FCC";
      if (word.toUpperCase() === word && word.length <= 4) return word;
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
}

function labelFor(path: string): string {
  if (LABELS[path]) return LABELS[path];
  const review = path.match(/^\/reviews\/(.+)$/);
  if (review) {
    const family = families.find((item) => item.slug === review[1]);
    if (family) return family.family;
  }
  const slug = path.split("/").filter(Boolean).pop();
  return slug ? titleCaseSlug(slug) : path;
}

function linksFor(paths: string[]): SitemapLink[] {
  return paths.map((href) => ({ href, label: labelFor(href) }));
}

/** Grouped indexable pages for the HTML sitemap. Same set as the XML sitemaps. */
export function htmlSitemapGroups(): SitemapGroup[] {
  return [
    { heading: "Reviews", links: linksFor(reviewsPaths()) },
    { heading: "Guides", links: linksFor(guidesPaths()) },
    { heading: "Best of", links: linksFor(bestPaths()) },
    { heading: "Comparisons", links: linksFor(vsPaths()) },
    { heading: "This site", links: linksFor(corePaths()) },
  ];
}
