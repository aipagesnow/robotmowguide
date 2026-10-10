# Site structure — robotmowguide.com

Skeleton: **ladder**. Products are ranked by manufacturer-rated lawn area, with maximum slope as the second axis, and honest caveats: rated area is measured under ideal conditions (Husqvarna quotes ±20%; Navimow lets the map run to 1.2× the rating), so trees, zones and slopes cut into it. Our editorial rule of thumb, labelled as ours: for a complex yard, pick a model rated at least 1.25× your real mowable area.

Market: US only, amazon.com only, US English, acres/sq ft/inches, slope in % and ° (and rise per 10 ft).

Launch target: **Nov–Dec 2026**, so pages are indexed and aged before the Mar–May 2027 peak. Full model refresh in **Feb 2027**. Updates only (no structural changes) during Mar–May.

Rules for every round:
- **Never link to a page that isn't built yet, and never show "coming soon".** Nav and hubs list only live pages.
- **One review page per model family**, with a variant table (e.g. LUBA 3 AWD 1500/3000/5000 and H versions). No sibling-SKU pages. A variant only gets its own page if it changes the decision and has its own search demand, and only through REVIEW-ADD.
- **No thin pages.** Every page needs at least one original artifact: a computed number, a diagram, an owner-report tally, a tool, or a dated manufacturer answer.
- **No indexable tool-result URLs.** Tools keep their state on the page.

## Page map (launch set, ranked by the research pack's top-10 opportunities)

### Core and tools
| URL | Page | Job | Round |
|---|---|---|---|
| `/` | Home | Quick answer to "which robot mower fits my yard?": hero, short finder, the ladder drawing, entry points by yard (size, hills, trees, grass), latest guides. | 1 |
| `/best` | Best robot lawn mowers (pillar) | Quick-pick box, short finder, ladder, comparison table (merged; "Best for" row, CTA row), about 5 picks. | 1 (final in 4) |
| `/tools/mower-finder` | Which mower fits my yard? | Full finder (docs/TOOLS.md). Works without JavaScript as a decision table. | 2 (alpha), 4 (final) |
| `/reviews` | Reviews index | Live family reviews as plan-sheet cards, sorted by rated area; "Previous models" section when needed. | 1 |
| `/vs` | Head-to-head index | Live vs pages. | 2 |
| `/guides` | Guides hub | Live guides grouped: choosing, your yard, costs and rules. | 1 |

### Best-for pages (money pages, each with its own decision logic)
| URL | Decision it answers | Original artifact | Round |
|---|---|---|---|
| `/best/robot-mower-1-acre` | Which mowers really handle about an acre, and which need a size up? | Rated-vs-realistic area table; ±20% / 1.25× rule applied per pick | 2 |
| `/best/robot-mower-for-hills` | What can climb my yard, inside the lawn and at the edges? | **Slope converter** embedded; interior vs boundary slope table | 2 |
| `/best/robot-mower-half-acre` | Best picks for about 0.5 acre (the most common suburban size in the audience) | Same area logic, half-acre scale | 3 |
| `/best/robot-mower-small-yard` | Quarter acre and under, and budget picks (wire-free and two wire options) | Cost-per-feature table without prices on the page; MSRP context only with dates | 3 |
| `/best/robot-mower-under-trees` | Which navigation survives canopy? | Canopy dead-zone diagram; RTK vs LiDAR owner tally | 3 |
| `/best/robot-mower-st-augustine` | Which mowers cut high enough, and which brands say not to use theirs on St. Augustine | Cut-height vs grass chart (extension-service heights) | 4 |
| `/best/robot-mower-bermuda` | Which mowers cut low enough for Bermuda | Same chart, low end | 4 |

Later grass spokes (REVIEW-ADD): zoysia, tall fescue, centipede.

### Reviews (one per family; 10 at launch)
| URL | Family (primary variant) | Verified ASINs | Round |
|---|---|---|---|
| `/reviews/segway-navimow-x4` | Navimow X4 (X430; X450 in the variant table) | X430 | 1 |
| `/reviews/mammotion-luba-3-awd` | LUBA 3 AWD (3000; 1500/5000/H in the table) | 3000 | 1 |
| `/reviews/worx-landroid-vision-cloud` | Landroid Vision Cloud (WR340; WR310/WR320 and the 4WD WR344 in the table) | WR310, WR340, WR344 | 2 |
| `/reviews/dreame-a3-awd-pro` | A3 AWD Pro (2500; 3500/5000) | 2500 | 2 |
| `/reviews/mammotion-luba-mini-2-awd` | LUBA mini 2 AWD (1500H; 1500) | 1500H | 3 |
| `/reviews/mova-lidax-ultra` | LiDAX Ultra (2000; 1000 and 3000 AWD) | 1000, 2000, 3000 AWD | 3 |
| `/reviews/roborock-rockneo-q110h` | RockNeo Q110H | Q110H | 3 |
| `/reviews/segway-navimow-i-series` | Navimow i2 AWD (i210; i206), with i105N/i110N as the previous generation | i210, i105N | 3 |
| `/reviews/worx-landroid-m-wr147` | Landroid M WR147 (boundary wire) | WR147 | 4 |
| `/reviews/husqvarna-automower-iq` | Automower iQ (420 iQ; 410/440/435 iQ AWD) plus 435X AWD | 435X AWD only; iQ models get the no-link line | 4 |

Post-launch candidates (REVIEW-ADD only): ECOVACS GOAT (O1000 RTK verified; LiDAR PRO line), Airseekers TRON SE (ASIN null), Navimow X3, Greenworks AiMowbot, Sunseeker X5/S4, eufy E15/E18, Lymow One Plus (no Amazon listing: review on merit, no button). Excluded: Ryobi (no current US robot mower found), little-known Amazon-only brands without verifiable support and FCC IDs.

### Head-to-head (3 at launch; only pairs with real search demand)
| URL | Why this pair | Round |
|---|---|---|
| `/vs/navimow-x430-vs-luba-3-awd-3000` | The two most-tested premium wire-free picks; network RTK + vision vs LiDAR + network RTK + vision | 2 |
| `/vs/dreame-a3-awd-pro-vs-luba-3-awd` | LiDAR with no RTK vs LiDAR with RTK; tree-heavy yards | 3 |
| `/vs/worx-vision-cloud-wr340-vs-navimow-x430` | Wirecutter's top pick vs Bob Vila's top pick; cloud RTK, 30% vs 84% | 4 |

Later candidates: Husqvarna 420 iQ vs Navimow X430; Dreame A3 vs LUBA mini 2; MOVA LiDAX Ultra 3000 AWD vs Dreame A3 AWD Pro.

### Guides
| URL | Question it answers | Round |
|---|---|---|
| `/guides/rtk-vs-lidar-vs-vision` | Which navigation fits my yard, including boundary wire, antenna RTK vs network RTK, and what weakens each. Owners' #1 pain point. | 1 |
| `/guides/how-big-a-robot-mower-do-i-need` | Rated vs real area, map limits, the 1.25× rule, **area estimator** (round 4). | 1 (estimator 4) |
| `/guides/fcc-robot-mower-ban` | **Kept-updated tracker** of the Jul 28, 2026 FCC rule: what changed, the Conditional Approvals table, how to check an FCC ID, changelog. | 2 |
| `/guides/robot-mower-winter-storage` | Seasonal: storing the mower and battery, leaving the dock out, garages (metal blocks GNSS). Must be live by late Nov. | 3 |
| `/guides/robot-mower-front-and-back-yard` | Separate zones, passages and gates, dual maps and second docks, published passage widths. | 3 |
| `/guides/robot-mower-cost-to-own` | Five-year cost: blades, connectivity after free periods, battery, garage. **Running-cost calculator.** Subscriptions table. | 4 |
| `/guides/are-robot-mowers-worth-it` | Honest version, including who should not buy one (sandy soil, heavy canopy, steep banks, unfenced front yards). | 4 |
| `/guides/robot-mower-theft-protection` | Theft features by brand; what survives power-off; 4G costs; AirTag slots. | 4 |

Later (REVIEW-ADD): robot mower without Wi-Fi, edges, safety with kids and pets, rain, problems and fixes, "Does Ryobi make a robot mower?".

### Trust pages (round 1)
| URL | Page | Must include |
|---|---|---|
| `/about` | About | Publisher (Aivora Digital), why the site exists, what it does and doesn't do (reviews are research-based; it has not tested the mowers), the "RobotMowGuide editors" byline explained, a real contact route, launch date. Written fresh. |
| `/how-picks-are-chosen` | Method | Sources used, how the ladder and 1.25× rule work, how owner reports are gathered and counted, why no star ratings, re-check schedule, corrections policy, **AI-assistance disclosure**, image provenance. |
| `/affiliate-disclosure` | Affiliate disclosure | Amazon Associates statement (verbatim wording), what it means for the reader, links are direct and tagged, rankings not paid, no other programs at launch. |
| `/privacy` | Privacy and cookies | GA4 and the `amazon_click` event, Vercel logs, cookies, opt-out, contact. |
| 404 | Not found | Real 404 status; links to /best, /tools/mower-finder, /guides. |

### Technical routes (round 1)
`/sitemap.xml`, `/robots.txt`, `/llms.txt` (minimal), `/<indexnow-key>.txt`, `POST /api/indexnow`, `/opengraph-image`, `/twitter-image`, static favicon pack. No `/go/` or other redirect routes for Amazon links.

## Navigation
Header: Best · Find my mower (from round 2) · Reviews · Head-to-head (from round 2) · Guides · How picks are chosen.
Footer: About · How picks are chosen · Affiliate disclosure · Privacy · contact · disclosure line · © Aivora Digital.

## Internal linking rules
- Every review links to: /best, the best-for pages it appears on, its two ladder neighbors, its vs pages, and **each spec row links to the guide or tool that explains it** (slope row → hills page converter; navigation row → RTK guide; area row → size guide).
- Every best-for page links to: each pick's review, the finder, the matching guide, and /best.
- Every guide links to: its tool (if any), 2–4 ladder models, /best and one related guide.
- Every vs page links to both reviews, /best and the most relevant guide.
- Home links to /best, the finder, every best-for page and every live review via the ladder.
- Anchors are descriptive. No orphans. No cross-links to other Aivora sites.

## Data
- `content/products.json` (schema v2): one record per family, variants with their own specs, ASINs and `status`/`statusDate`. Pages read from it.
- `content/costs.json`: dated connectivity and running-cost figures for the cost guide and calculator.
- `content/images.json`: image review manifest (approved only).
- Page copy lives in typed content files in the app, never in planning docs.

## Stack
Next.js (App Router) + TypeScript + Tailwind on Vercel, team aipagesnow. Static generation for every page; tools are small client islands on static pages, with a no-JS fallback.
