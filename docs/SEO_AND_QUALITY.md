# SEO and quality — robotmowguide.com

Google quality comes first. The aim is a site a careful person would bookmark: honest, sourced, clearly organized, and useful on every page. Rankings come slowly for a new domain in a crowded niche; this file is about earning them, not shortcuts.

## Helpful content and E-E-A-T signals (build these in, not on)
1. **Real About page:** names Aivora Digital as the publisher, explains why the site exists and what it does not do (no hands-on testing), gives a working contact route, and says when the site launched.
2. **Real method page (/how-picks-are-chosen):** exact sources used, how the ladder works, why there are no star ratings, the re-check schedule (specs re-checked at least every 90 days and before any edit), how corrections are handled, and the image provenance sentence.
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
| llms.txt | `/llms.txt` (static or route): one-paragraph description of the site, then links to /best, every live review, vs page and guide, and the method/about/disclosure pages, each with a one-line summary. Plain visitor-grade wording. Update it when pages are added. |
| IndexNow | A key (32 hex chars) generated once and served at `/<key>.txt` with the key as the body (static file in `public/` is fine; the key is public by design). A protected route `POST /api/indexnow` (secret in `INDEXNOW_SUBMIT_SECRET`) that submits changed URLs to `https://api.indexnow.org/indexnow` with `host`, `key`, `keyLocation`, `urlList`. Used after each round goes live. |
| Structured data | Article, FAQPage, BreadcrumbList, plus Organization and WebSite on the home page. No Review, Product-with-offers, AggregateRating or Rating. Validate with the Rich Results Test and Schema.org validator. |
| OG and favicon pack | Static favicon pack + branded `/opengraph-image` and `/twitter-image` (MARK-IMAGINE.md). Sitewide images point at `/opengraph-image`. |
| Performance | Static pages, AVIF/WebP images with sizes, hero preloaded, fonts via `next/font` with `display: swap`. Target LCP < 2.5 s, CLS < 0.1, INP < 200 ms on mobile. |
| Accessibility | Semantic headings, alt text, visible focus, contrast AA on Paper and Cyanotype, tables with headers, 44px tap targets. |
| Status codes | Real 404 for unknown URLs, no soft-404s, no redirect chains. |
| Analytics | GA4 via `NEXT_PUBLIC_GA_ID`; `amazon_click` event on every Amazon CTA (see below). |

### robots.txt allow list (explicit groups, all `Allow: /`, `Disallow: /api/`)
`*`, Googlebot, Bingbot, GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, Claude-SearchBot, Claude-User, PerplexityBot, Perplexity-User, Google-Extended, Applebot, Applebot-Extended, DuckAssistBot, Amazonbot, CCBot, meta-externalagent. Re-check the list against current crawler docs at launch.

### GA4 `amazon_click`
Fire on click of every Amazon link (server-built href, client handler only sends the event):
```
gtag('event', 'amazon_click', {
  asin: 'B0G8Y8CNH7',
  product_slug: 'segway-navimow-x430',
  page_type: 'review' | 'best' | 'vs' | 'guide' | 'home',
  link_position: 'primary' | 'table' | 'alt',
});
```
Mark `amazon_click` as a key event in GA4. The event must not block navigation.

### Amazon links
- Built on the server: `https://www.amazon.com/dp/${asin}?tag=${process.env.AMAZON_ASSOCIATE_TAG}`.
- Any client component receives the finished href (or `associateTag`) as a prop; never reads the env in the browser.
- `rel="nofollow sponsored noopener"`, `target="_blank"`.
- If `AMAZON_ASSOCIATE_TAG` is missing at build, fail the build in production (so an untagged site can't ship), and render no Amazon links in preview builds.
- Never `/s?k=` search URLs. Never a hardcoded tag.

## Environment variables (Vercel, production + preview)
| Name | Purpose |
|---|---|
| `AMAZON_ASSOCIATE_TAG` | Amazon tracking ID (Chris to create, e.g. `robotmowguide-20`). Server only. |
| `NEXT_PUBLIC_SITE_URL` | `https://robotmowguide.com` |
| `NEXT_PUBLIC_GA_ID` | GA4 measurement ID |
| `INDEXNOW_SUBMIT_SECRET` | Protects `POST /api/indexnow` |
| `BING_SITE_VERIFICATION` | Optional, only if Bing is not verified by importing from GSC |

Google verification uses a DNS TXT record for the `sc-domain:` property, so no meta tag is needed.

## Search reality (for expectations, not for the site)
Head terms such as "best robot lawn mower" are held by hands-on testers and established publications. This site's realistic openings are decision explainers (navigation type, slopes, trees, zones, the FCC rule), head-to-heads between covered models, and constraint long-tail. US search demand peaks March–June; launching in October gives time to be indexed before spring.
