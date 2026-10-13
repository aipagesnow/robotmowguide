# RobotMowGuide.com

A US guide to choosing a robot lawn mower, ranked by the lawn size and slope each model is rated for. It explains what the specs mean for a real yard and links to amazon.com for the models it covers. Published by Aivora Digital as a long-term keeper site.

The Next.js site lives in this repo. Add a public page by adding its path to content/routes.json and a matching file under app/. Planning docs and the round log are in NEXT-PROMPTS.md.

## Decisions
- **Market:** US only, amazon.com only, US English, acres/sq ft/inches, slope in % and °.
- **Stack:** Next.js (App Router) + TypeScript + Tailwind, deployed on Vercel (aipagesnow team).
- **Skeleton:** ladder, ranked by rated lawn area with slope as the second axis.
- **Look:** cyanotype site plan (STYLE.md).
- **Voice:** clear reviewer (VOICE.md), written for the reader in AUDIENCE.md.
- **Affiliate tag:** `robotmowguide-20`, set only through the `AMAZON_ASSOCIATE_TAG` env var in Vercel. Never committed. Direct links only, no redirect routes.
- **Honesty:** research-based reviews, stated plainly; no testing claims, no star ratings, no invented specs or prices. Every spec has a source and a checked date. Byline "RobotMowGuide editors" with a fact-check line; AI assistance disclosed on the method page.
- **Pages:** one review per model family (variant tables), best-for pages by yard size, slope, trees and grass, three vs pages, decision guides, an FCC tracker, and tools (mower finder, slope converter, running-cost calculator).
- **Timing:** launch Nov–Dec 2026; full refresh Feb 2027.
- **Images:** Grok Imagine yard scenes (no copies of real mowers) and SVG diagrams, each checked by Vora before it ships.

## Files
| File | Role |
|---|---|
| STYLE.md, VOICE.md, AUDIENCE.md, MARK-IMAGINE.md, IMAGES.md | Rails for every build round (add to the Grok Project) |
| FIRST-PROMPT.md | Round 1 prompt for Grok Build |
| NEXT-PROMPTS.md | Rounds 0–8 with checks between rounds, and the round log |
| SHIP-SCAN.md | Visitor-only text check after every round |
| LAUNCH-CHECKLIST.md | Domain, tag, GA4, GSC, Bing/IndexNow, routines, QA |
| REVIEW-ADD.md | Template for new pages after launch |
| docs/PROJECT_BRIEF.md | Decisions and context |
| docs/SITE_STRUCTURE.md | Page map, nav and internal-link rules |
| docs/PAGE_RECIPES.md | Shape of each page type |
| docs/SEO_AND_QUALITY.md | Helpful-content signals and technical SEO |
| docs/AFFILIATE_COMPLIANCE.md | Amazon Associates rules for this site |
| docs/TOOLS.md | Mower finder, slope converter, running-cost calculator, area estimator |
| docs/FCC_RULE_FACTS.md | Sourced facts for the FCC tracker |
| docs/research/ | Oct 2026 research packs: models, owner voice, buyer questions, competitors, FCC, image ideas, format/SEO/conversion recommendations and risks (background only) |
| docs/REVIEW-ADD-AUTOMATION.md | Grok Automation paste pack |
| content/products.json | One record per model family: variants, sourced specs with checked dates, ASINs, status, owner-report themes, who it's not for |
| content/costs.json | Dated connectivity and running-cost figures |
| content/images.json | Image review manifest (only approved images render) |

## Environment variables (Vercel)
`AMAZON_ASSOCIATE_TAG`, `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_GA_ID`, `INDEXNOW_SUBMIT_SECRET`, optional `BING_SITE_VERIFICATION`. Details in docs/SEO_AND_QUALITY.md.

## Commits
Author every commit as Aivora Digital <aipages.now@gmail.com> and push to main. Never force-push.
