# Site structure — robotmowguide.com

Skeleton: **ladder**. Products are ranked by manufacturer-rated lawn area, with maximum slope as the second axis, and honest caveats: rated area is not real-world area, and trees, zones and slopes cut into it. The ladder is the spine of the home page and /best. Reviews, head-to-heads and guides hang off it.

Market: US only, amazon.com only, US English, acres/sq ft/inches, % and °.

Rule for every round: **never link to a page that isn't built yet, and never show "coming soon".** Nav and hubs list only live pages.

## Page map (launch set)

### Core
| URL | Page | Job | Round |
|---|---|---|---|
| `/` | Home | Answer "which robot mower fits my yard?" fast: hero, the ladder drawing, three yard-type entry points (size, slope, trees), latest guides, short /best summary. | 1 |
| `/best` | Best robot lawn mowers (pillar) | About 5 picks across the ladder, each with who it suits and who should skip it. **Includes the full comparison table** (the old separate "comparison" page is merged here, to avoid two pages competing for the same search). | 1 (5 picks), updated in 4 |
| `/reviews` | Reviews index | Every live review as plan-sheet cards, sorted by rated area. | 1 |
| `/vs` | Head-to-head index | Every live vs page. Built when the first vs page ships. | 2 |
| `/guides` | Guides hub | Every live guide grouped: choosing, your yard, costs and rules. | 1 |

### Reviews (9 planned; 6–10 required at launch)
| URL | Model (exact) | ASIN status | Round |
|---|---|---|---|
| `/reviews/segway-navimow-x430` | Segway Navimow X430 | verified | 1 |
| `/reviews/mammotion-luba-3-awd-3000` | Mammotion LUBA 3 AWD 3000 | verified | 1 |
| `/reviews/worx-landroid-vision-cloud-wr344` | Worx Landroid Vision Cloud 4WD WR344 | verified | 2 |
| `/reviews/dreame-a3-awd-pro-2500` | Dreame A3 AWD Pro 2500 | verified | 2 |
| `/reviews/mammotion-luba-mini-2-awd-1500h` | Mammotion LUBA mini 2 AWD 1500H | verified | 2 |
| `/reviews/ecovacs-goat-o1000-rtk` | ECOVACS GOAT O1000 RTK | verified | 3 |
| `/reviews/worx-landroid-m-wr147` | Worx Landroid M WR147 (boundary wire) | verified | 3 |
| `/reviews/husqvarna-automower-115h` | Husqvarna Automower 115H (boundary wire) | verified | 3 |
| `/reviews/segway-navimow-i110n` | Segway Navimow i110N | **null: no buy button** | 3 |

Range: mainly wire-free (RTK, vision, LiDAR), plus two boundary-wire picks and two lower-cost wire-free picks for small yards.

### Head-to-head (2+ required; 3 planned)
| URL | Why this pair | Round |
|---|---|---|
| `/vs/navimow-x430-vs-luba-3-awd-3000` | The two most-searched premium wire-free models; RTK + vision vs LiDAR + RTK + vision; 1 acre vs 0.75 acre. | 2 |
| `/vs/worx-wr344-vs-navimow-x430` | Both 1 acre and 84%: cloud RTK with no antenna and an edge blade vs network RTK and a wider deck. | 3 |
| `/vs/dreame-a3-awd-pro-2500-vs-luba-3-awd-3000` | LiDAR with no RTK vs LiDAR with RTK; tree-heavy yards. | 4 |

### Decision guides
| URL | Question it answers | Round |
|---|---|---|
| `/guides/rtk-vs-vision-vs-lidar` | Which navigation type suits my yard? Includes network RTK vs a base antenna, and what weakens each. | 1 |
| `/guides/what-size-robot-mower` | What rated area do I need? Acre/sq ft ladder, rated vs real area, how zones and trees reduce capacity. | 1 |
| `/guides/robot-mowers-for-slopes` | What does 30% / 45% / 80% mean in degrees and on my lawn? Interior vs boundary slope limits, how to measure. | 2 |
| `/guides/mowing-under-trees` | Will a wire-free mower work under trees? Sky view, LiDAR vs RTK, practical layout tips. | 2 |
| `/guides/wire-free-vs-boundary-wire` | Is a boundary wire still worth it? Install effort, reliability, cost, edges. | 3 |
| `/guides/front-and-back-yards` | How do mowers handle separate zones, side passages and two maps? Body widths and gap figures. | 3 |
| `/guides/running-costs` | What does it cost after purchase? Blades, 4G after free periods, garage/shelter, battery, winter storage. Dated manufacturer figures only. | 4 |
| `/guides/fcc-robot-mower-rule` | What the Jul 28, 2026 FCC rule changed for buyers. Facts in docs/FCC_RULE_FACTS.md. | 4 |

Later candidates (REVIEW-ADD loop or round 6+, only with real decision value): cutting height and grass type (St. Augustine, Bermuda, fescue); theft protection and 4G; robot mowers without Wi-Fi.

### Trust pages (all in round 1)
| URL | Page | Must include |
|---|---|---|
| `/about` | About | Who runs the site (Aivora Digital), why it exists, what it does and doesn't do (no hands-on testing), how to get in touch (real contact route once Chris confirms an address), when the site started. Written fresh; no wording copied from other Aivora sites. |
| `/how-picks-are-chosen` | Method | Sources used (manufacturer US pages and manuals, independent long-term reviews, amazon.com listing checks), how the ladder is built, why no star ratings, how often facts are re-checked, how products are added or dropped, image provenance sentence, corrections policy. |
| `/affiliate-disclosure` | Affiliate disclosure | Amazon Associates statement, what that means for the reader, that links are tagged, that rankings are not paid, no other affiliate programs at launch. |
| `/privacy` | Privacy and cookies | GA4 (what is collected, the amazon_click event), Vercel hosting logs, cookies, how to opt out, contact. |
| 404 | Not found | Plain message, links to /best, /guides, /reviews. Returns a real 404 status. |

### Technical routes (round 1)
`/sitemap.xml`, `/robots.txt`, `/llms.txt`, `/<indexnow-key>.txt`, `/opengraph-image`, `/twitter-image`, static favicon pack. See docs/SEO_AND_QUALITY.md.

## Navigation
Header: Best · Reviews · Head-to-head (from round 2) · Guides · How picks are chosen.
Footer: About · How picks are chosen · Affiliate disclosure · Privacy · short disclosure line · © Aivora Digital.

## Internal linking rules
- Every review links to: /best, 2 other reviews (nearest neighbors on the ladder), 1–2 guides that match its strengths or limits, and its vs page(s) when live.
- Every guide links to: at least 2 reviews and /best, plus 1 related guide.
- Every vs page links to both reviews, /best and the most relevant guide.
- Home links to /best, the two ladder-entry guides, and every live review via the ladder.
- Anchors are descriptive ("robot mowers for steep slopes"), never "click here" or "read more".
- No orphans: every new page gets at least one link from a hub or guide in the same round.

## Data
- `content/products.json` is the only source of product facts. Pages read from it. Each displayed spec shows its source and checked date on review pages.
- Page copy lives in typed content files (MDX or TS) in the app, never in planning docs.
- `content/images.json` decides which images may render (approved only).

## Stack
Next.js (App Router) + TypeScript + Tailwind on Vercel, team aipagesnow. Static generation for every page. Minimal client JS (none needed for the ladder; it's SVG).
