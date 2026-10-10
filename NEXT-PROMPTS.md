# NEXT-PROMPTS.md — build plan in reviewed rounds

RobotMowGuide is built in reviewed rounds on Vora's computer, one Grok Build session per round, taking as many days as needed. No blind loop: each round ends with checks, and the next round starts only when every check passes. Round 1 is FIRST-PROMPT.md.

Each prompt below is a starting point. Before pasting, adjust it to what the previous round's review found. Keep prompts short and casual; the rails files carry the detail.

## Gate checks (run at the end of every round)
1. `npm run build` passes locally and the Vercel preview deploy is READY (commit author Aivora Digital).
2. **Ship scan clean** (SHIP-SCAN.md): automated script plus the 5-minute manual read on phone width.
3. **Image gate:** every image or diagram that renders on the preview has been checked by Vora and marked `approved` in content/images.json; production shows approved only.
4. **Facts:** every spec on new pages matches content/products.json, with source and checked date visible. No prices on product pages, no ratings, no testing language.
5. **Amazon links:** preview builds show tagged links only when a preview tag is set; on production every href matches `amazon.com/dp/{ASIN}?tag=<tag>`; null-ASIN products show the plain line and no button.
6. **Quality:** each new page answers a real decision (no thin pages), has a direct answer in the first 100 words, an updated date, breadcrumbs, the right schema, and links in and out per docs/SITE_STRUCTURE.md. No orphans, no links to unbuilt pages.
7. **Look:** still the cyanotype site plan (STYLE.md). If it drifted toward soft cards or green/cream, fix it before adding pages.
8. Record the result in the round log at the bottom of this file.

---

## Round 0 — prep (no build)
- Chris starts his to-dos in LAUNCH-CHECKLIST.md (tracking ID, Vercel project, DNS, GA4 property).
- Create the dedicated Grok Project "RobotMowGuide" and add the five rails files.
- Make round 1 Imagine photos per IMAGES.md: `hero-home`, `hero-best`, `card-x430`, `card-luba3-3000`, `photo-lot-sizes`, `photo-about`. Vora checks each; approved files go into `public/images/` and the manifest.
- Re-check that the two round-1 ASINs (B0G8Y8CNH7, B0GK116TR5) still show the exact models on amazon.com.

**Gate:** rails in the project, at least the two hero photos approved (round 1 can ship without the others; layouts must not depend on them).

## Round 1 — foundation and first slice
Prompt: FIRST-PROMPT.md.

Extra checks for this round:
- Mark reads at 16px; favicon pack and OG card render; `/icon` and `/apple-icon` rewrites work; `/favicon.ico` is a real ICO.
- robots.txt, sitemap.xml, llms.txt, the IndexNow key file and `/api/indexnow` (rejects requests without the secret) all work on preview.
- GA4 `amazon_click` fires in GA4 DebugView with asin, product_slug, page_type, link_position.
- About and method pages read as written for this site, state "no hands-on testing" plainly, and name Aivora Digital.
- Diagrams (ladder, two plates, nav types, acres) checked by Vora against products.json.

## Round 2 — mid-ladder reviews, first head-to-head, slope and tree guides
Before: Imagine photos `card-wr344`, `card-dreame-a3-2500`, `card-luba-mini2-1500h`, `photo-slope`, `photo-trees` made and checked. Re-check ASINs B0GQ9XK7FK, B0GT5CBH8H, B0GL7WVJK2. Confirm the WR344 cutting width and height from a WR344-specific source (products.json notes the gap).

Prompt:
> Round 2 for RobotMowGuide. Same rails as round 1 (STYLE, VOICE, AUDIENCE, MARK-IMAGINE, IMAGES), same hard rules. Add three reviews from products.json: Worx Landroid Vision Cloud WR344, Dreame A3 AWD Pro 2500 and Mammotion LUBA mini 2 AWD 1500H, each with its spec plate. Add the first head-to-head, /vs/navimow-x430-vs-luba-3-awd-3000, with its diagram, plus the /vs index and "Head-to-head" in the nav. Add two guides: /guides/robot-mowers-for-slopes (dia-slope) and /guides/mowing-under-trees (dia-sky-view). Update internal links so every new page is linked from a hub and links out to its ladder neighbors, and add the new pages to the sitemap and llms.txt. Show only approved images (preview may show "made"). Build must pass and the ship scan must be clean. Commit as Aivora Digital and push to main. Tell me what changed and the scan result.

Extra checks: slope figures shown as % and ° exactly as in products.json; boundary-vs-interior slope limits explained where the data has them.

## Round 3 — small-yard and boundary-wire picks, second head-to-head, wire and zones guides
Before: Imagine photos `card-goat-o1000`, `card-115h`, `card-wr147`, `card-i110n`, `photo-side-passage`, `photo-bed-edge` checked. Re-check ASINs B0DRG2HMD2, B07PGBSGXQ, B097NJ37R7. Try again to confirm an exact amazon.com listing for the Navimow i110N; if found and verified, add the ASIN to products.json with the check date before the round, otherwise it stays null.

Prompt:
> Round 3 for RobotMowGuide. Same rails and hard rules. Add four reviews: ECOVACS GOAT O1000 RTK, Worx Landroid M WR147, Husqvarna Automower 115H and Segway Navimow i110N. The i110N has a null ASIN in products.json, so it gets no Amazon button, only the plain line from VOICE.md. Add /vs/worx-wr344-vs-navimow-x430 and two guides: /guides/wire-free-vs-boundary-wire (dia-boundary) and /guides/front-and-back-yards (dia-zones, using the published body widths and gap figures). Update the ladder, /reviews, internal links, sitemap and llms.txt. Approved images only on production. Build must pass, ship scan clean, commit as Aivora Digital and push to main. Report changes and the scan result.

Extra checks: the null-ASIN page has no Amazon link anywhere (including tables and alternatives on other pages); boundary-wire models are clearly marked on the ladder.

## Round 4 — costs, the FCC explainer, third head-to-head, /best finalized
Before: re-verify every source in docs/FCC_RULE_FACTS.md on the day (FCC FAQ, fact sheet, DA 26-786 on fcc.gov, the Conditional Approvals list, Husqvarna's original release). Gather dated, sourced cost figures for the running-costs guide (blade packs, 4G/connectivity after free periods, garages) from manufacturer US pages; add them to a `content/costs.json` with sources and dates.

Prompt:
> Round 4 for RobotMowGuide. Same rails and hard rules. Add /guides/running-costs (dia-costs, figures only from content/costs.json with sources and dates) and /guides/fcc-robot-mower-rule using only the facts and sources in docs/FCC_RULE_FACTS.md, written neutrally for buyers, with dia-fcc-timeline. Add /vs/dreame-a3-awd-pro-2500-vs-luba-3-awd-3000. Then finalize /best: about 5 picks across the whole ladder now that all nine reviews exist, each with who it suits and who should skip it, and refresh the home page summary. Update sitemap, llms.txt and internal links. Build must pass, ship scan clean, commit as Aivora Digital and push to main. Report changes and the scan result.

Extra checks: FCC page cites the FCC directly for every rule statement; nothing speculative; "Facts checked" date present.

## Round 5 — quality pass (no new pages)
Before: Vora reads every page on a phone and lists issues. Run Lighthouse (mobile) on home, /best, one review, one guide. Run the Rich Results Test on one page of each type.

Prompt:
> Round 5 for RobotMowGuide is a quality pass, no new pages. Fix this list: [paste Vora's issues]. Then: check every page has a direct answer up top, a real updated date, breadcrumbs and correct schema; tighten internal links so each review links to its two ladder neighbors, one or two guides and its vs pages; make sure no two reviews share template sentences; fix any Lighthouse issues on mobile (LCP, CLS, accessibility); confirm every rendered image is approved in content/images.json. Don't change the look or add pages. Build must pass, ship scan clean, commit as Aivora Digital and push to main.

Extra checks: Lighthouse mobile performance and accessibility both 90+ on the sampled pages; no validator errors.

## Round 6 — launch
Run LAUNCH-CHECKLIST.md top to bottom: domain on Vercel, `AMAZON_ASSOCIATE_TAG` set and verified live, GA4, GSC (sc-domain + service account), Bing + IndexNow, Bing AI Performance check, routines joined, REVIEW-ADD set up. Then the QA passes: Jude Mercer (ship score), Cass Quinn (honesty/trust), Ellis Crowe (search-visibility suppress risk), Blair Moss (clarity).

Prompt (only if code changes are needed for launch):
> Round 6 for RobotMowGuide: launch fixes only. [Paste the specific fixes from the launch checklist and QA.] Same rails and hard rules. Build must pass, ship scan clean on the production URL, commit as Aivora Digital and push to main.

**Gate:** every BLOCKER and HIGH from Jude, Cass, Ellis and Blair fixed; live tag check passed; production deploy READY.

## Round 7 — post-launch fixes (if needed)
Fix MED items from QA, submit changed URLs through IndexNow, confirm GSC and Bing have the sitemap, and hand the site to the regular routines (weekly pulls, Monday SEO pulse and AEO, weekend keeper refresh, nightly indexing, Monday clarity review). New pages after this go through REVIEW-ADD.md.

---

## Round log
| Round | Date | Commit | Build | Ship scan | Images approved | Notes |
|---|---|---|---|---|---|---|
| 0 | | | n/a | n/a | | |
| 1 | | | | | | |
| 2 | | | | | | |
| 3 | | | | | | |
| 4 | | | | | | |
| 5 | | | | | | |
| 6 | | | | | | |
| 7 | | | | | | |
