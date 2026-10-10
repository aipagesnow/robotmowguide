# Project brief — robotmowguide.com

## What it is
A plain, well-organized US guide to choosing a robot lawn mower, ranked by the lawn size and slope each model is rated for. It explains what the specs mean for a real yard (trees, slopes, front and back zones, edges, grass height) and links to amazon.com for the models it covers. It is a long-term **keeper** site in the Aivora Digital Amazon portfolio, not a site built to sell.

## Decisions (locked Oct 10, 2026)
| Topic | Decision |
|---|---|
| Market | US only. amazon.com only. US English. Acres, sq ft, inches; slope in % and °. Prices in $ only where a dated source is cited (running-costs guide). |
| Stack | Next.js (App Router) + TypeScript + Tailwind on Vercel, team aipagesnow. Replaces the earlier Astro plan. |
| Site type | Keeper. Joins the GSC/Bing/GA4 pulls, nightly indexing, Monday SEO pulse, Monday AEO, weekend keeper refresh and Monday clarity review at launch; REVIEW-ADD loop once GSC data appears (or at launch if Chris asks, as with Trailkit). |
| Range | Mainly wire-free (RTK, vision, LiDAR), plus a couple of cheaper or boundary-wire picks for small yards. |
| Skeleton | `ladder`: ranked by rated lawn area, slope as the second axis. |
| Look | "Cyanotype site plan" (STYLE.md). Not green-on-cream soft cards. |
| Voice | Clear reviewer (VOICE.md) for the reader described in AUDIENCE.md. |
| Tag | `robotmowguide-20` (created Oct 10, 2026) under the US holdlab-20 account; set only via `AMAZON_ASSOCIATE_TAG` in Vercel. Lawn & Garden commission 3%. |
| Images | Grok Imagine generic yard scenes (mower-free) + SVG diagrams. Every image checked by Vora before it ships (IMAGES.md). |
| Testing | None. Reviews are labelled research-based. Original value comes from key-numbers boxes, owner-report tallies, diagrams, tools and dated manufacturer answers. |
| Byline | Organization: "RobotMowGuide editors" + fact-check line + real contact route. Chris may become the named editor later. Never a fake persona. |
| Pages | One review per model family; best-for pages by size, slope, trees and grass; vs pairs with real demand; FCC tracker; tools. Ranked by the research pack's top 10 (docs/research/SUMMARY.md). |
| Timing | Launch Nov–Dec 2026. Feb 2027 refresh. Updates only during Mar–May 2027. |
| Commits | Aivora Digital <aipages.now@gmail.com>, push to main, never force-push. |
| Build process | Reviewed rounds (NEXT-PROMPTS.md), run on Vora's computer, as many days as needed. No blind loop. |

## Why this niche can work, honestly
- High-value products ($800–$3,000) with heavy research before purchase.
- Real decision axes that a calm explainer can own: navigation type, lawn size, slope, tree cover, zones, edges, connectivity, running costs, and the 2026 FCC rule.
- Gaps the big testers leave (docs/research/COMPETITORS.md): each tested one yard; nobody maps picks to yard size × slope × trees × grass; FCC coverage is thin or wrong everywhere; no one has a complete subscription and running-cost table; warm-season grasses get one line.
- Hard parts: head terms are held by hands-on testers and big publications; many new spec-comparison sites exist, some overclaiming testing; the Amazon cookie is 24 hours and many buyers purchase direct or at Home Depot/Lowe's; some good models (Lymow, Husqvarna iQ) have no verified Amazon listing; the FCC rule may freeze or shrink the US lineup. Expect a slow build, with real search signal likely from spring (US demand peaks March–June).
- Biggest risk: being read as a "derivative" spec-summary or AI content site (docs/research/RISKS.md). Every page must carry an original artifact and honest attribution.

## Files to read
- Rails: STYLE.md, VOICE.md, AUDIENCE.md, MARK-IMAGINE.md, IMAGES.md
- Plan: docs/SITE_STRUCTURE.md, docs/PAGE_RECIPES.md, docs/TOOLS.md, docs/SEO_AND_QUALITY.md, docs/AFFILIATE_COMPLIANCE.md, docs/FCC_RULE_FACTS.md
- Data: content/products.json, content/costs.json, content/images.json
- Background: docs/research/
- Process: FIRST-PROMPT.md, NEXT-PROMPTS.md, SHIP-SCAN.md, LAUNCH-CHECKLIST.md, REVIEW-ADD.md
