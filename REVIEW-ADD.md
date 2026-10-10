# REVIEW-ADD — [Product or page name] → RobotMowGuide

**Purpose:** one research-complete brief so a Grok Build round in the RobotMowGuide Grok Project can ship one new page that fits the live site (ladder skeleton, cyanotype site plan look, clear reviewer voice). Do not start a Build until every **Required** block is filled.

**Project files that must already exist:** STYLE.md, VOICE.md, AUDIENCE.md, IMAGES.md (this site only).

US English. amazon.com only. Tag from `AMAZON_ASSOCIATE_TAG` only.

---

## Required — page choice (long-tail first)
- Target query / yard problem (from the latest Search Console pull for robotmowguide.com, or "no Search Console data this run" plus the yard constraint chosen: lawn size, slope, trees, front/back zones, narrow passage, grass type and cut height, edges, theft/4G, no Wi-Fi):
- Page type, in this order of preference: (1) vs page between two models already reviewed / (2) family review / (3) decision guide or best-for page with its own decision logic / (4) broad "best" page only with query evidence:
- **One page per model family.** If the model is a size or height variant of a family already reviewed, add it to that family's variant table in products.json instead of creating a page. A separate page only if the variant changes the decision and has its own search demand (say which):
- Page shape (from this site's family: ladder review / vs sheet / decision guide with diagram / cost or spec table page / FAQ-led explainer):
- Last 2–3 new pages on this site and their shapes (this one must differ):
- Nearest existing page, and how this one is not a restatement of it:

## Required — product identity (skip for guides without a new product)
- Display name:
- Brand, family and exact model/version as on amazon.com (e.g. 3000 vs 3000H, WR344 vs WR340):
- Variants in the family (rated area, slope, what differs, ASIN or null for each):
- ASIN (verified on `https://www.amazon.com/dp/{ASIN}`: the page shows the same ASIN, no redirect, title names the exact model; date checked):
- Status + statusDate (current / superseded / discontinued / not-importable / legacy) and successor if any:
- If no exact listing could be confirmed: ASIN stays `null` and the page has no Amazon button.
- Wire-free or boundary wire; navigation type (RTK antenna / network or cloud RTK / vision / LiDAR / combinations):
- Manufacturer US list price + source + date (research only, never shown on the page):

## Required — facts (cite every one; add to content/products.json with `src` and `checked`)
Sources (manufacturer US product page, owner's manual PDF, amazon.com listing, independent long-term review):
1.
2.

Specs that matter to this site's reader:
- Rated lawn area (acres + sq ft):
- Max slope inside the work area (% and °), and at the boundary if published:
- Cutting width and cutting height range (and standard vs H version):
- Edge approach (edge disc, offset blade, cut-to-edge, distance to wall if published):
- Narrowest passage / body width:
- Connectivity (Wi-Fi, Bluetooth, 4G; free period and cost after; optional modules):
- Theft protection (PIN, lift alarm, GPS/4G tracking):
- Multi-zone / multi-map handling (second charging station needed?):
- FCC note: model was on sale in the US before Jul 28, 2026 / has an FCC ID (look it up if the page says so); brand's Conditional Approval status:
- Support outlook line (waiver to at least Jan 1, 2029; which features need the brand's cloud or 4G):

### Key numbers for your yard (required; computed, not prose)
- Rated area → realistic area for a stated case (1.25× rule):
- Slope % / ° / rise per 10 ft, interior or boundary:
- Passage width needed:
- Navigation in plain words and what it needs:
- Connectivity after the free period:

### What owners report (required)
Themes with links and the month read (re-open each in a browser; never Amazon reviews or ratings; no percentages). Balance praise and complaints. If fewer than two independent reports exist, say so:
1.
2.
3.

### How this page was researched (required numbers)
- Sources consulted: · Manuals read: · Owner threads read (date range): · Manufacturer questions asked/answered: · Spec check date:

### Who it suits / who it's not for (feed `notFor`; draw on AUDIENCE.md owner themes)
-
-

### Where it sits on the ladder (neighbors above and below)
-

## Required — site incorporation
- URL: `/reviews/...` · `/vs/...` · `/guides/...`
- Add to /best? yes/no — which role:
- Ladder diagram update (new point; check labels don't collide):
- vs page to create or update:
- Internal links FROM (at least one hub or guide):
- Internal links TO (two ladder neighbors, 1–2 guides):
- Sitemap, llms.txt and /reviews or /guides index updated:
- Tools: add the model to the finder, slope converter and cost calculator data in the same ship (current models only).
- Amazon CTAs: "See {model} on Amazon", direct `amazon.com/dp/{ASIN}?tag=` from env (no redirect), `rel="nofollow sponsored noopener"`, disclosure repeat beside each cluster, GA4 `amazon_click` with `placement`. Primary CTA inside the first two mobile screens.

## Required — SEO packaging
- Title:
- Meta description:
- H1:
- Primary intent:
- Search Console query/page it matches, or "thin / no data this run":

## Required — images (IMAGES.md gate)
- Photo slot id + Imagine brief (generic US yard, mower-free, no text; IPTC AI tag at export):
- Diagram slot id (spec plate / vs sheet / guide diagram) + data it draws:
- Vora check done and marked `approved` in content/images.json: yes/no

## Required — voice and honesty
- VOICE.md and AUDIENCE.md followed; US English.
- Direct answer in the first 100 words; honest limits; who should skip it.
- No testing claims, no star ratings (not even paraphrased), no Amazon prices, spare "we". Byline "RobotMowGuide editors" + fact-check line; Updated + What changed.
- No FAQPage schema; visible FAQ only.

## Done when
- [ ] Page built and linked as specified; no orphan
- [ ] ASIN verified (or null with no button); tag check on production passed
- [ ] `amazon_click` fires on the new CTAs with the right placement
- [ ] Original artifact present (key numbers, owner tally, diagram, tool data or manufacturer answer)
- [ ] Build passes; ship scan clean; look unchanged
- [ ] Ellis Crowe pass on the live URL; BLOCKER/HIGH fixed

Ready for Vora sign-off: [ ] yes — blockers:
