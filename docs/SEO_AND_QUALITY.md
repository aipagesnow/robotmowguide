# SEO and quality — robotmowguide.com

Google quality comes first. The aim is a site a careful person would bookmark: honest, sourced, clearly organized, and useful on every page. Rankings come slowly for a new domain in a crowded niche; this file is about earning them, not shortcuts.

## Helpful content and E-E-A-T signals (build these in, not on)
1. **Real About page:** names Aivora Digital as the publisher, explains why the site exists and what it does not do (no hands-on testing: reviews are research-based), explains the "RobotMowGuide editors" byline, gives a working contact route, and says when the site launched.
2. **Real method page (/how-picks-are-chosen):** exact sources used, how the ladder and the 1.25× rule work, how owner reports are gathered and counted, why there are no star ratings, the re-check schedule (specs re-checked at least every 90 days and before any edit), how corrections are handled, the image provenance sentence, and the **AI-assistance disclosure** ("Drafts are written with AI assistance. A person checks every figure against the linked source before a page is published or updated.").
- **Byline and fact-check line on every page:** "By the RobotMowGuide editors" (Organization author, url /about) plus "Edited and fact-checked by the RobotMowGuide editors at Aivora Digital. Specs checked against manufacturer pages on {date}." Never a made-up person, never an AI headshot. If Chris decides to be the named editor, switch to a Person author with a true short bio and a ProfilePage author page.
- **Original artifacts on every page:** key-numbers box, owner-report tally, a diagram, a tool, or a dated manufacturer answer. Pages that only restate spec sheets are what the 2025–2026 core updates demoted hardest.
- **"How this page was researched" box** on reviews, vs pages and /best (PAGE_RECIPES.md).
- **"What changed" note** under every Updated date.
3. **Sourced specs with checked dates:** every figure on a review comes from `content/products.json` with its source link and checked date shown on the page.
4. **Updated dates:** a visible "Updated" date in the meta row that changes only when content really changes; matching `dateModified` in Article schema and `lastmod` in the sitemap. Never auto-bump dates on deploy.
5. **Strong internal linking:** see SITE_STRUCTURE.md rules. No orphans, descriptive anchors, ladder neighbors linked.
6. **No thin pages:** every page must give real decision value. Before shipping a page, answer: "What decision does this help with that no other page on this site already covers?" If there's no good answer, merge it or don't build it. No tag pages, no author archives, no near-duplicate "best X for Y" stubs.
7. **First-hand honesty instead of fake experience:** the site's experience is research and explanation. Say so. Cite independent long-term reviews where they add evidence, and never paraphrase them into "we found".
8. **No AI-spam tells:** no padded intros, no repeated template sentences across reviews, no listicle filler, no keyword stuffing. Each review must read as written for that model.
9. **Visitor-only text:** nothing on any page that a visitor isn't meant to read (see SHIP-SCAN.md).

## Technical SEO (all in round 1, verified at launch)
| Item | Requirement |
|---|---|
| Canonical URLs | Absolute, self-referencing, `https://robotmowguide.com/...` (no `www`, no trailing-slash duplicates, no preview domains). Set `metadataBase` from `NEXT_PUBLIC_SITE_URL`. Pick one host (apex) and 308-redirect the other. |
| Titles and meta | Unique per page, match the search question, no "2026" unless the page has a refresh owner (Chris/Vora monthly refresh). |
| Sitemap | `app/sitemap.ts` listing only live, indexable pages with real `lastmod` from content dates. |
| robots.txt | `app/robots.ts`: allow all crawlers including the main AI crawlers (below); disallow `/api/`; point to the sitemap. |
| llms.txt | Minimal static `/llms.txt`: site name, one-sentence description, and links to /best, /tools/mower-finder, /guides, /how-picks-are-chosen and /about. No per-page descriptions to maintain. Google ignores llms.txt; it is a nice-to-have, not a tactic. |
| IndexNow | A key (32 hex chars) generated once and served at `/<key>.txt` with the key as the body (static file in `public/` is fine; the key is public by design). A protected route `POST /api/indexnow` (secret in `INDEXNOW_SUBMIT_SECRET`) that submits changed URLs to `https://api.indexnow.org/indexnow` with `host`, `key`, `keyLocation`, `urlList`. Used after each round goes live. |
| Structured data | Article (author = Organization "RobotMowGuide editors", publisher = Aivora Digital), BreadcrumbList, plus Organization and WebSite on the home page. **No FAQPage** (FAQ rich results ended May 7, 2026; keep the visible FAQs). No Review, Product-with-offers, AggregateRating or Rating. ProfilePage only if a real named editor page exists. Validate with the Rich Results Test and Schema.org validator. |
| OG and favicon pack | Static favicon pack + branded `/opengraph-image` and `/twitter-image` (MARK-IMAGINE.md). Sitewide images point at `/opengraph-image`. |
| Performance | Static generation for every page (no ISR unless live Amazon API prices are ever added, then ≤24 h). `next/image` with `formats: ['image/avif','image/webp']`, correct `sizes`, `priority` on the hero only. Diagrams as inline SVG with `<title>`/`<desc>`. Fonts via `next/font` with `display: swap`. Target LCP < 2.5 s, CLS < 0.1, INP < 200 ms on mobile. `web-vitals` RUM sent to GA4. |
| Images | AI-generated photos carry IPTC `DigitalSourceType = trainedAlgorithmicMedia` in their metadata; decorative only. Diagrams carry the information. |
| Accessibility | WCAG 2.2 AA from round 1, audited in round 5: semantic headings, alt text, visible focus not hidden by sticky elements, text contrast ≥4.5:1 (CTA fill uses `--flag-ink`, see STYLE.md), real tables with `<th scope>` and captions, 44px tap targets, finder results in `aria-live`, diagram text equivalents, link purpose (model name in CTA labels), never colour alone on the ladder. |
| Portfolio separation | No shared templates, footers, boilerplate, analytics properties or cross-links with other Aivora sites. Distinct design, voice and author setup. |
| Status codes | Real 404 for unknown URLs, no soft-404s, no redirect chains. |
| Analytics | GA4 via `NEXT_PUBLIC_GA_ID`; `amazon_click` on every Amazon CTA with its placement, `tool_use` on tools, web-vitals (see below). |

### robots.txt allow list (explicit groups, all `Allow: /`, `Disallow: /api/`)
Search and answer crawlers (always allowed): `*`, Googlebot, Bingbot, OAI-SearchBot, ChatGPT-User, Claude-SearchBot, Claude-User, PerplexityBot, Perplexity-User, Applebot, DuckAssistBot.
Training crawlers (a conscious choice; it does not affect search citations): GPTBot, ClaudeBot, Google-Extended, Applebot-Extended, CCBot, meta-externalagent, Amazonbot. **Default: allowed** (Chris decision; see LAUNCH-CHECKLIST.md). Re-check the list against current crawler docs at launch.

### AI answers (AI Overviews, AI Mode, Copilot, ChatGPT search)
- Answer-first sentence under each H2, with the source and checked date inline for specs.
- Exact US model names everywhere (e.g. "Automower 420 iQ", never the EU "NERA" name).
- Tools and decision steps that an AI answer can't complete on its own.
- Track GSC's generative AI performance report and Bing's AI Performance report from launch (LAUNCH-CHECKLIST.md).

### GA4 `amazon_click` (by placement)
Fire on click of every Amazon link (server-built href; the client handler only sends the event, using `transport_type: 'beacon'`):
```
gtag('event', 'amazon_click', {
  asin: 'B0G8Y8CNH7',
  product_slug: 'segway-navimow-x4',
  variant: 'X430',
  placement: 'quick_pick' | 'verdict' | 'pick_block' | 'table' | 'variant_table' | 'vs_top' | 'end_block' | 'finder' | 'inline' | 'sticky',
  page_type: 'home' | 'best' | 'best_for' | 'review' | 'vs' | 'guide' | 'tool',
  transport_type: 'beacon',
});
```
Mark `amazon_click` as a key event; register `placement`, `page_type` and `asin` as custom dimensions. The event must not block navigation. **No redirect or `/go/` route for tracking**: Amazon forbids cloaked or redirecting links. Optional later: separate Amazon tracking IDs per placement type (Chris decision) for revenue by placement.

### Amazon links
- Built on the server: `https://www.amazon.com/dp/${asin}?tag=${process.env.AMAZON_ASSOCIATE_TAG}`.
- Any client component receives the finished href (or `associateTag`) as a prop; never reads the env in the browser.
- `rel="nofollow sponsored noopener"`, `target="_blank"`.
- If `AMAZON_ASSOCIATE_TAG` is missing at build, fail the build in production (so an untagged site can't ship), and render no Amazon links in preview builds.
- Never `/s?k=` search URLs. Never a hardcoded tag.

## Environment variables (Vercel, production + preview)
| Name | Purpose |
|---|---|
| `AMAZON_ASSOCIATE_TAG` | Amazon tracking ID `robotmowguide-20` (created). Server only. |
| `NEXT_PUBLIC_SITE_URL` | `https://robotmowguide.com` |
| `NEXT_PUBLIC_GA_ID` | GA4 measurement ID |
| `INDEXNOW_SUBMIT_SECRET` | Protects `POST /api/indexnow` |
| `BING_SITE_VERIFICATION` | Optional, only if Bing is not verified by importing from GSC |

Google verification uses a DNS TXT record for the `sc-domain:` property, so no meta tag is needed.

## Search reality (for expectations, not for the site)
Head terms such as "best robot lawn mower" are held by hands-on testers (Wirecutter, The Verge, Consumer Reports, Bob Vila). Each of them tested one yard. This site's openings are the gaps they leave: a maintained FCC tracker, warm-season grass guidance, subscription and running-cost data, "will RTK work in my yard?" decisions, honest owner-issue reporting, size and slope best-for pages, and vs pairs. Expect indexing in weeks 0–4 (Bing/Copilot often first), long-tail impressions in months 2–4, some long-tail page-one spots in months 4–9, head terms only after 12+ months with links. US demand peaks Mar–Jun; launch Nov–Dec 2026, refresh in Feb 2027, and make no structural changes during Mar–May.

## Earning links honestly (round 7 onward)
- PR push for the FCC tracker and the running-cost calculator: tech and lawn-and-garden reporters, local news "what this means for buyers" angles. No affiliate links in outreach.
- Manufacturer Q&A: ask US support/PR 3–5 decision questions per model, publish dated answers (question, date asked, date answered, quote).
- Forums and Reddit only as a real, disclosed person: answer in the comment, link only to a tool or guide that adds something, follow each subreddit's rules, never affiliate links, never multiple accounts.
- Later options: a public CC-BY spec dataset (CSV) linked from /best and the method page; diagram explainers on YouTube; a small Pinterest test with diagram pins linking to guides.
- Never: bought links, guest-post swaps, link exchanges, links between Aivora sites.
