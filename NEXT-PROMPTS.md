# NEXT-PROMPTS.md — build plan in reviewed rounds

RobotMowGuide is built in reviewed rounds on Vora's computer, one Grok Build session per round, taking as many days as each round needs. No blind loop: each round ends with checks, and the next round starts only when every check passes. Round 1 is FIRST-PROMPT.md.

**Launch target: Nov–Dec 2026** (aim for the first half of December at the latest), so pages are indexed and aged before the Mar–May 2027 season. **Feb 2027:** full model refresh. **Mar–May 2027:** updates only, no structural changes.

| Round | Target window | What |
|---|---|---|
| 0 | Oct 12–16 | Prep: rails in the Grok Project, round-1 images, ASIN re-check |
| 1 | Oct 19–25 | Foundation: home, /best, X4 + LUBA 3 reviews, RTK and size guides, trust pages, all launch tech |
| 2 | Oct 26–Nov 3 | Finder (alpha), FCC tracker, 1-acre and hills pages + slope converter, Worx and Dreame reviews, first vs |
| 3 | Nov 4–13 | Half-acre, small-yard and under-trees pages; four reviews; winter storage and front/back guides; second vs |
| 4 | Nov 14–24 | Grass pages, cost-to-own + calculator, worth-it, theft, last two reviews, third vs, finder final, /best final, status handling |
| 5 | Nov 25–Dec 2 | Quality pass, accessibility audit (no new pages) |
| 6 | Dec 3–10 | Launch: domain, tag live, GSC, GA4, Bing + IndexNow, QA passes |
| 7 | Dec 2026–Jan 2027 | Post-launch: fixes, AI-report baselines, PR push for the FCC tracker and calculator |
| 8 | Feb 2027 | Scheduled refresh: 2027 models, FCC status, superseded flags |

Each prompt below is a starting point. Before pasting, adjust it to what the previous round's review found. Keep prompts short and casual; the rails files carry the detail. If a round runs long, split it (4a/4b) rather than rushing it.

## Gate checks (end of every round)
1. `npm run build` passes and the Vercel preview deploy is READY (commit author Aivora Digital).
2. **Ship scan clean** (SHIP-SCAN.md): script plus the 5-minute manual read at phone width.
3. **Image gate:** every rendered image or diagram is checked by Vora and `approved` in content/images.json; photos carry the IPTC AI tag.
4. **Facts:** every spec matches content/products.json with source and checked date visible; owner-report links re-opened in a browser and still say what we say; status lines dated. No Amazon prices, no ratings (including paraphrases), no testing language.
5. **Amazon links:** every href is a direct `https://www.amazon.com/dp/{ASIN}?tag=` link (no redirect routes); null-ASIN and discontinued variants show no button; CTA labels name the model; the disclosure repeat sits by each CTA cluster.
6. **Conversion layout:** on a 390 px screen the first CTA (quick-pick box or review primary CTA) is inside the first two screens.
7. **Quality:** each new page has a real decision and at least one original artifact (key numbers, owner tally, diagram, tool, dated manufacturer answer), a direct answer up top, byline + fact-check line, Updated date with "What changed", breadcrumbs, Article + BreadcrumbList schema (no FAQPage), the researched box where required, and links in and out per docs/SITE_STRUCTURE.md. No orphans, no links to unbuilt pages.
8. **GA4:** `amazon_click` fires in DebugView with the right `placement` and `page_type` for each new CTA type.
9. **Look:** still the cyanotype site plan (STYLE.md). If it drifted, fix it before adding pages.
10. Record the result in the round log at the bottom.

---

## Round 0 — prep (no build)
- Chris: LAUNCH-CHECKLIST.md to-dos (Vercel project, DNS plan, GA4 property, contact address, decisions list).
- Create the Grok Project "RobotMowGuide" and add the five rails files.
- Imagine photos for round 1 (IMAGES.md "Round 1"): `hero-home`, `hero-best`, `card-x4`, `card-luba3`, `photo-lot-sizes`, `photo-about`. Vora checks each.
- Re-check ASINs B0G8Y8CNH7 (X430) and B0GK116TR5 (LUBA 3 AWD 3000).
- Re-open the owner threads listed for the X4 and LUBA 3 in products.json.

**Gate:** rails in the project; at least the two hero photos approved (layouts must not depend on the rest).

## Round 1 — foundation and first slice
Prompt: FIRST-PROMPT.md.

Extra checks:
- Mark reads at 16px; favicon pack and OG card render; `/favicon.ico` is a real ICO.
- robots.txt (search crawlers allowed; training-crawler choice as decided), sitemap.xml, minimal llms.txt, IndexNow key file and `/api/indexnow` (rejects requests without the secret).
- Review template has: status line, primary CTA in the first two screens, key numbers, variant table, what owners report, honest limits, support outlook, researched box, end CTA block.
- /best has the quick-pick box and the comparison table with a "Best for" row and CTA row.
- About and method pages: Aivora Digital named, "research-based; we have not tested these mowers" stated plainly, byline explained, real contact route, AI-assistance disclosure, image provenance.
- WCAG basics in place (contrast, focus, table markup, CTA labels).

## Round 2 — finder alpha, FCC tracker, 1-acre and hills
Before: photos `hero-finder`, `photo-acre`, `photo-slope`, `card-worx-vision-cloud`, `card-dreame-a3-pro` checked. Re-check ASINs B0GN98XMPM, B0GNZHMD9Q, B0GQ9XK7FK, B0GT5CBH8H. Confirm the WR344 cutting width and height and the WR340 Find My Landroid question. Re-verify every source in docs/FCC_RULE_FACTS.md on the day.

Prompt:
> Round 2 for RobotMowGuide. Same rails and hard rules as round 1. Build the mower finder at /tools/mower-finder per docs/TOOLS.md (works without JS as a decision table, no result URLs, aria-live results) and a short embed on home and /best. Add the FCC tracker at /guides/fcc-robot-mower-ban using only docs/FCC_RULE_FACTS.md (last-checked date, approvals table, brand table, how to check an FCC ID, changelog). Add /best/robot-mower-1-acre and /best/robot-mower-for-hills with the slope converter. Add the Worx Landroid Vision Cloud and Dreame A3 AWD Pro family reviews, and /vs/navimow-x430-vs-luba-3-awd-3000 with the top verdict table, plus the /vs index and nav items. Link everything per SITE_STRUCTURE.md, update the sitemap. Approved images only. Build must pass, ship scan clean, commit as Aivora Digital and push to main. Tell me what changed and the scan result.

Extra checks: slope shown as %, ° and rise per 10 ft, labelled interior or boundary; finder never shows superseded models and has a "nothing fits" result; FCC page cites the FCC directly for every rule statement.

## Round 3 — half-acre, small yard, under trees, four reviews
Before: photos for round 3 checked. Re-check ASINs B0GL7WVJK2, B0G3CMJ78Q, B0G3CBW2H8, B0GGR6NJBK, B0GRVYN12B, B0G8173C6Y, B0CX8LL2PC. Resolve the Q110H cutting-height conflict from Roborock's US manual. Re-open the owner threads for these families.

Prompt:
> Round 3 for RobotMowGuide. Same rails and hard rules. Add /best/robot-mower-half-acre, /best/robot-mower-small-yard and /best/robot-mower-under-trees (dia-canopy). Add four family reviews: Mammotion LUBA mini 2 AWD, MOVA LiDAX Ultra, Roborock RockNeo Q110H and Segway Navimow i series (i2 AWD, with the i1 models shown as the previous generation). Add /guides/robot-mower-winter-storage and /guides/robot-mower-front-and-back-yard (zones map and passage-width gauge), and /vs/dreame-a3-awd-pro-vs-luba-3-awd. Update the ladder, /reviews, internal links and the sitemap. Approved images only. Build must pass, ship scan clean, commit as Aivora Digital and push to main. Report changes and the scan result.

Extra checks: variant tables show each variant's own CTA or the no-link line; superseded i1 variants carry the superseded status line; MOVA page says plainly that few owner reports exist yet.

## Round 4 — grass, costs, worth-it, theft, last reviews, finals
Before: collect extension-service mowing heights (UF/IFAS, Texas A&M AgriLife, NC State) for St. Augustine and Bermuda with links; re-check every row in content/costs.json and fill what the brands publish; ask manufacturers the open questions (Mammotion 4G price after year 3, Worx Find My Landroid) and log dated answers. Re-check ASINs B097NJ37R7, B0HKC6J3PH.

Prompt:
> Round 4 for RobotMowGuide. Same rails and hard rules. Add /best/robot-mower-st-augustine and /best/robot-mower-bermuda with the grass-height chart; /guides/robot-mower-cost-to-own with the running-cost calculator and subscriptions table from content/costs.json; /guides/are-robot-mowers-worth-it (including who shouldn't buy one, from AUDIENCE.md); /guides/robot-mower-theft-protection. Add the Worx Landroid M WR147 and Husqvarna Automower iQ reviews (iQ models have null ASINs: plain line, no button; 435X AWD gets its CTA) and /vs/worx-vision-cloud-wr340-vs-navimow-x430. Finish the finder, add the area estimator to the size guide if its assumptions can be stated honestly, and finalize /best and home now that all ten reviews exist. Implement status handling (superseded banner, discontinued = no button and a "Previous models" section). Update links and the sitemap. Build must pass, ship scan clean, commit as Aivora Digital and push to main. Report changes and the scan result.

Extra checks: calculator shows "Not published" rather than guesses and no Amazon prices; grass heights cite extension services; Husqvarna pages say "iQ", never "NERA".

## Round 5 — quality pass (no new pages)
Before: Vora reads every page on a phone and lists issues. Lighthouse (mobile) on home, /best, a best-for page, a review, a guide and the finder. Rich Results Test on one page of each type. Keyboard-only run through the finder and a review.

Prompt:
> Round 5 for RobotMowGuide is a quality pass, no new pages. Fix this list: [paste Vora's issues]. Then run a WCAG 2.2 AA pass (contrast on Flag-ink buttons and blueprint panels, focus not hidden by the sticky header, finder aria-live, diagram text equivalents, link purpose); make sure no two reviews share template sentences; check every page has the byline, fact-check line, Updated date with What changed, and the researched box where required; fix Lighthouse issues. Optional: add the review-only sticky CTA bar behind a flag, off by default. Don't change the look or add pages. Build must pass, ship scan clean, commit as Aivora Digital and push to main.

Extra checks: Lighthouse mobile performance and accessibility 90+ on the sampled pages; no validator errors; axe shows no serious issues.

## Round 6 — launch (target first half of December 2026)
Run LAUNCH-CHECKLIST.md top to bottom, then the QA passes: Jude Mercer (ship score), Cass Quinn (honesty and trust), Ellis Crowe (search-visibility suppress risk), Blair Moss (clarity).

Prompt (only if code changes are needed):
> Round 6 for RobotMowGuide: launch fixes only. [Paste the specific fixes from the launch checklist and QA.] Same rails and hard rules. Build must pass, ship scan clean on the production URL, commit as Aivora Digital and push to main.

**Gate:** every BLOCKER and HIGH from QA fixed; live tag check passed; production deploy READY; sitemaps submitted; URL Inspection requested for home, /best and the two strongest reviews.

## Round 7 — post-launch (Dec 2026–Jan 2027)
- Fix MED items from QA; IndexNow the changed URLs.
- **AI-report baselines** two to four weeks after launch: GSC generative AI performance report, Bing AI Performance (citations, cited pages, grounding queries). Record the first numbers in the round log and add both to the Monday pulse.
- PR push for the FCC tracker and the cost calculator (no affiliate links in outreach); manufacturer Q&A answers published with dates.
- Hand over to the routines (weekly pulls, Monday SEO pulse and AEO, weekend keeper refresh, nightly indexing, Monday clarity review). New pages go through REVIEW-ADD.md, 1–2 substantial pages a week through winter.

## Round 8 — Feb 2027 refresh (scheduled)
Prompt:
> Round 8 for RobotMowGuide: the February refresh. Same rails and hard rules. Using the updated content/products.json (2027 models, statuses, re-checked ASINs and specs) and docs/FCC_RULE_FACTS.md, refresh /best, every best-for page, every review's status and variant table, the finder data and the FCC tracker. Add "new for 2027" notes where a model changed; mark superseded or discontinued models per PAGE_RECIPES.md. Update dates and What changed lines only where content changed. No structural or design changes. Build must pass, ship scan clean, commit as Aivora Digital and push to main.

Before: re-check every ASIN and spec, the FCC Conditional Approvals table, CES 2027 announcements (US availability only if authorized), subscription prices. Afterwards: updates only until June.

---

## Round log
| Round | Date | Commit | Build | Ship scan | Images approved | Notes |
|---|---|---|---|---|---|---|
| 0 | | | n/a | n/a | | |
| 1 | 2026-10-13 | 2f0352a | pass | pass | 0 approved; 14 diagrams made, not approved | Ship scan: pass. Photos not made. Production hides diagrams until they are approved. |
| 2 | 2026-10-13 | 0651d6d | pass | pass | 0 approved; dia-slope and dia-rated-vs-real made, not approved | Ship scan: pass. Light hero and footer. Finder, FCC tracker, 1-acre, hills, Worx and Dreame reviews, X430 vs LUBA. Photos not made. Production hides diagrams until they are approved. |
| 3 | | | | | | |
| 4 | | | | | | |
| 5 | | | | | | |
| 6 | | | | | | |
| 7 | | | | | | GSC gen-AI baseline: · Bing AI Performance baseline: |
| 8 | | | | | | |
