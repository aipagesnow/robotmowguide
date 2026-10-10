# FIRST-PROMPT.md — round 1 prompt for Grok Build

How to use: open a dedicated Grok Project for RobotMowGuide only (close other site sessions). Add STYLE.md, VOICE.md, AUDIENCE.md, MARK-IMAGINE.md and IMAGES.md as project files. `cd` into this repo folder, start `grok`, and paste everything between the lines below. Before pasting, put any Imagine photos Vora has already approved into `public/images/` and mark them `approved` in `content/images.json` (none are required for round 1).

---

Hey, this is RobotMowGuide (robotmowguide.com), a brand-new site. It's a calm, useful US guide to choosing a robot lawn mower, ranked by the lawn size each model is rated for, with slope as the second axis. Readers are US homeowners with roughly a quarter acre to an acre, front and back yards, slopes and trees (AUDIENCE.md has the detail). It earns through Amazon links on amazon.com.

The repo has planning docs and data only. Please build round 1 as a fresh Next.js (App Router) + TypeScript + Tailwind project, deployed on Vercel.

Follow these as your rails, and read them before writing anything:
- STYLE.md: the "cyanotype site plan" look. It has to be its own thing: no green-on-cream soft cards, nothing that looks like aivora.digital or Trailkit, no rounded package cards.
- VOICE.md: clear reviewer voice, US English.
- AUDIENCE.md: who we're writing for and the words they use.
- MARK-IMAGINE.md: the "mow path" SVG mark, the favicon/OG pack, and the Imagine rules.
- IMAGES.md: the page-by-page image map and the review gate.

For structure and facts use docs/SITE_STRUCTURE.md, docs/PAGE_RECIPES.md, docs/SEO_AND_QUALITY.md, docs/AFFILIATE_COMPLIANCE.md and content/products.json. The other docs are background; don't copy planning wording onto pages.

Round 1 scope:
1. Foundation: layout, header/footer, nav (only to pages that exist), fonts via next/font (Archivo, Public Sans, DM Mono), the SVG mark, the static favicon pack and branded opengraph/twitter images.
2. Pages: home (ladder-led), /best (about 5 picks plus the merged comparison table), /reviews index, /guides hub, two reviews (/reviews/segway-navimow-x430 and /reviews/mammotion-luba-3-awd-3000), two guides (/guides/rtk-vs-vision-vs-lidar and /guides/what-size-robot-mower), and the trust pages: /about, /how-picks-are-chosen, /affiliate-disclosure, /privacy, plus a real 404.
3. Diagrams as SVG components from products.json: the ladder, the two spec plates, dia-nav-types and dia-acres.
4. Launch basics from day one: absolute canonicals, sitemap, robots.txt allowing the main AI crawlers, llms.txt, the IndexNow key file and protected submit route, Article/FAQPage/BreadcrumbList schema (Organization and WebSite on home), GA4 from NEXT_PUBLIC_GA_ID with the amazon_click event on every Amazon CTA.
5. A content-driven setup so later rounds add pages as data, plus scripts/ship-scan.mjs that does the checks in SHIP-SCAN.md.

Images: render a slot only when content/images.json marks it approved and the files exist. On preview builds, also render slots marked "made" so Vora can check them; production shows approved only. Never draw an empty frame or a stand-in.

Hard rules, once:
- Nothing on any public page that a visitor isn't meant to read: no placeholders, sample or lorem content, TODOs, dev notes or prompt text. If a page or section isn't ready, don't build it or link to it.
- No invented specs, prices, ratings or testing. Every spec comes from products.json with its source and checked date shown. No star ratings, no Review/Product/AggregateRating schema, no prices on product pages.
- Amazon links are built on the server as https://www.amazon.com/dp/{ASIN}?tag= plus process.env.AMAZON_ASSOCIATE_TAG, passed into any client component as a finished href, with rel="nofollow sponsored noopener". The tag only ever comes from that env var. A product with a null ASIN gets no button, just the plain line in VOICE.md. Disclosure line goes before the first Amazon link.
- Real hero with the H1 visible on mobile, the site's own font pair and colors, sharp SVG mark.
- npm run build must pass, and the ship scan must be clean.
- Commit as Aivora Digital <aipages.now@gmail.com> (git -c user.name="Aivora Digital" -c user.email="aipages.now@gmail.com" commit ...) and push to main. Never force-push.

When you're done, tell me what you built, the routes, the build result, the ship-scan result, and anything you left out.

---
