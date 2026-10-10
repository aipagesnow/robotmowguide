# FIRST-PROMPT.md — round 1 prompt for Grok Build

How to use: open the dedicated Grok Project for RobotMowGuide only (close other site sessions). Add STYLE.md, VOICE.md, AUDIENCE.md, MARK-IMAGINE.md and IMAGES.md as project files. `cd` into this repo folder on Vora's computer, start `grok`, and paste everything between the lines below. Put any Imagine photos Vora has already approved into `public/images/` and mark them `approved` in `content/images.json` first (none are required).

---

Hey, this is RobotMowGuide (robotmowguide.com), a brand-new site: a calm, useful US guide to choosing a robot lawn mower, ranked by the lawn size each model is rated for, with slope as the second axis. Readers are US homeowners with roughly a quarter acre to an acre, front and back yards, slopes and trees. It earns through Amazon links on amazon.com. Reviews are research-based; we don't test mowers and the site says so.

The repo has planning docs and data only. Please build round 1 as a fresh Next.js (App Router) + TypeScript + Tailwind project for Vercel.

Your rails, read them before writing anything:
- STYLE.md: the "cyanotype site plan" look. Its own thing: no green-on-cream soft cards, nothing that looks like another Aivora site.
- VOICE.md: clear reviewer voice, US English, the fixed microcopy.
- AUDIENCE.md: who we write for, what owners report, the words they use.
- MARK-IMAGINE.md: the "mow path" SVG mark, favicon/OG pack.
- IMAGES.md: the image map and the review gate.

For structure and facts use docs/SITE_STRUCTURE.md, docs/PAGE_RECIPES.md, docs/TOOLS.md, docs/SEO_AND_QUALITY.md, docs/AFFILIATE_COMPLIANCE.md and content/products.json. docs/research/ is background; never copy planning wording onto pages.

Round 1 scope:
1. Foundation: layout, header/footer, nav (only to live pages), fonts via next/font, the SVG mark, favicon pack, branded OG/twitter images.
2. Pages: home, /best (quick-pick box, ladder, comparison table, about 5 picks), /reviews and /guides indexes, the family reviews /reviews/segway-navimow-x4 and /reviews/mammotion-luba-3-awd, the guides /guides/rtk-vs-lidar-vs-vision and /guides/how-big-a-robot-mower-do-i-need, and /about, /how-picks-are-chosen, /affiliate-disclosure, /privacy, plus a real 404.
3. The shared blocks from PAGE_RECIPES.md, built once as components: byline + fact-check line, Updated + What changed, quick-pick box, key numbers, variant table, what owners report, status line, researched box, CTA with disclosure repeat.
4. SVG diagrams from products.json for the round-1 slots in IMAGES.md.
5. Launch tech from day one: absolute canonicals, sitemap, robots.txt per SEO_AND_QUALITY.md, a minimal llms.txt, IndexNow key file and protected submit route, Article + BreadcrumbList schema (Organization and WebSite on home; no FAQPage), GA4 with amazon_click by placement.
6. Content as data so later rounds add pages easily, plus scripts/ship-scan.mjs doing the checks in SHIP-SCAN.md.

Images: render a slot only when content/images.json marks it approved and the files exist (preview may also show "made" for Vora to check). Never an empty frame or stand-in.

Hard rules, once:
- Nothing on a public page that a visitor isn't meant to read: no placeholders, sample content, TODOs, dev notes or prompt text. If something isn't ready, don't build it or link to it.
- No invented specs, prices, ratings, owner reports or testing. Specs come from products.json with source and checked date shown. No star ratings (not even paraphrased), no Review/Product/AggregateRating schema, no Amazon prices.
- Amazon links: built on the server as https://www.amazon.com/dp/{ASIN}?tag= plus process.env.AMAZON_ASSOCIATE_TAG, direct (no redirect routes), rel="nofollow sponsored noopener", labelled with the model name. Null ASIN = no button, just the plain line. Disclosure before the first link. The first CTA sits in the first two mobile screens.
- Byline is "RobotMowGuide editors"; never invent a person.
- npm run build must pass and the ship scan must be clean.
- Commit as Aivora Digital <aipages.now@gmail.com> (git -c user.name="Aivora Digital" -c user.email="aipages.now@gmail.com" commit ...) and push to main. Never force-push.

When you're done, tell me what you built, the routes, the build result, the ship-scan result, and anything you left out.

---
