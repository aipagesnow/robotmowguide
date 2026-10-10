# IMAGES.md — image map, provenance and review gate

This is the binding image plan for robotmowguide.com. Every page has a planned image (photo, diagram or both). No image goes live until Vora has checked it and marked it **approved** in `content/images.json`.

Read with MARK-IMAGINE.md (style rules) and STYLE.md (colors, type).

## Allowed sources
1. **Grok Imagine (grok.com)** photographs of generic US yards, made for this site. Mower-free by default.
2. **SVG diagrams built in code** for this site (blueprint style per STYLE.md), drawn from the numbers in `content/products.json` and the guides.
3. Nothing else at launch. No manufacturer press images, no stock, no PA-API images (not approved), no Amazon CDN images, no screenshots of apps or listings.

## Never
- Photoreal renders or Imagine images that copy or resemble a real mower model (shape, color scheme, logo, antenna, wheel layout). This includes "inspired by" renders.
- Product packshots of any kind.
- Text, logos, signs or house numbers inside image pixels.
- Captions printed under photos. Alt text only.
- Fake test scenes (a mower on a "test lawn", measuring tapes on a mower, lab setups).
- Grey boxes, blurred stand-ins, "image coming soon" or empty frames. If an image is not approved, the layout renders without it.

## Review gate (hard rule)
1. **Make:** Imagine prompt from the brief below → pick the best 1–2 outputs. Diagrams: build the SVG in a round.
2. **Save:** masters in `images-src/<slot-id>.png` (not deployed) and exports in `public/images/<slot-id>-<width>.avif|webp`.
3. **Check (Vora):** open each image at full size and at phone width. Pass all of the checks below. Record the result in `content/images.json`: `status`, `checkedBy: "Vora"`, `checkedOn`, `notes`.
4. **Approve:** only `status: "approved"` images may be rendered. Code reads the manifest and skips any slot that is not approved or whose files are missing, so no frame or gap appears.
5. **Re-check** after any regeneration, crop or diagram change. A changed file goes back to `status: "made"`.

### Vora's checks (all must pass)
- [ ] Matches the brief for its slot and helps the reader understand that yard situation.
- [ ] Looks like the US: house style, siding/brick mix, fences, driveways, grass types. Not a UK or European garden.
- [ ] No mower, or (only if the brief allows) a tiny distant unbranded generic shape that cannot be mistaken for any real model.
- [ ] No text, logos, signs, plates, numbers or watermarks.
- [ ] No AI tells: warped fences or gates, impossible trees, melted roofs, duplicated windows, odd shadows, grass on paving, extra limbs on any figure.
- [ ] Hero crops leave the H1 readable on a 390px-wide phone.
- [ ] Diagram numbers match `content/products.json` and the page text exactly (units, % and °, acres and sq ft).
- [ ] Diagram labels are visitor-facing words only (no variable names, no "TBD").
- [ ] File sizes within budget; width/height set; alt text written and accurate.

## Export sizes and budgets
| Kind | Aspect | Master | Exports (AVIF + WebP) | Budget |
|---|---|---|---|---|
| Hero photo | 16:9 (mobile crop 4:5 via `object-position`) | 2400×1350 | 640, 1024, 1600, 2400 | ≤ 180 KB AVIF at 1600 |
| Card photo | 4:3 | 1600×1200 | 480, 800, 1200 | ≤ 90 KB AVIF at 800 |
| Diagram | as drawn | SVG | inline SVG or `.svg` | ≤ 30 KB, no embedded raster |
| OG card | 1200×630 | generated | PNG | ≤ 300 KB |

Hero: `priority`, `fetchpriority="high"`, explicit sizes. Everything else lazy-loaded with width/height to protect CLS.

## Page-by-page image map
Slot IDs are stable. Paths: `public/images/<slot-id>-<width>.avif`.

### Core pages
| Page | Slot | Kind | Brief | Alt text (draft) |
|---|---|---|---|---|
| `/` home | `hero-home` | Imagine photo | Wide view of a two-story suburban back yard in morning light: lawn sloping gently down from a patio toward a line of mature trees, a fence and a side gate visible at one edge. Lawn real and slightly imperfect. No mower, no people. Clear space at left for the H1. | Back yard lawn sloping down from a patio toward mature trees and a side fence |
| `/` home | `dia-ladder` | SVG diagram | The ladder: acres scale 0 → 1.25 ac, each model plotted at its rated area, small angle glyph for max slope, wire-free vs boundary-wire marked with line style. Data from products.json. | Diagram ranking robot mowers by rated lawn area, with maximum slope shown for each |
| `/best` | `hero-best` | Imagine photo | Front yard of a single-story ranch house from the sidewalk edge: front lawn, driveway, a narrow side yard leading to a back gate, one ornamental tree. No mower, no house number, no car plate. | Front lawn beside a driveway with a narrow side yard leading to the back gate |
| `/best` | `dia-ladder` | SVG (reuse) | Same ladder, with the /best picks highlighted. | as above |
| `/reviews` index | card photos | reuse | Uses each review's `card-*` photo. | per card |
| `/vs` index | `dia-vs-*` | reuse | Uses each vs page's diagram as the card visual. | per card |
| `/guides` index | guide visuals | reuse | Uses each guide's lead photo or diagram. | per card |

### Reviews (card photo doubles as review hero; spec plate is a generated diagram)
| Page | Photo slot | Photo brief (mower-free) | Diagram slot |
|---|---|---|---|
| `/reviews/segway-navimow-x430` | `card-x430` | About one acre of open back yard behind a two-story house, with a noticeable grassy bank down to a lower lawn. Wide, bright, uncluttered. | `plate-x430` |
| `/reviews/mammotion-luba-3-awd-3000` | `card-luba3-3000` | Three-quarter-acre yard with two mature oaks shading part of the lawn, dappled light, a mulch ring around one trunk. | `plate-luba3-3000` |
| `/reviews/worx-landroid-vision-cloud-wr344` | `card-wr344` | One-acre yard with many edges: curved planting beds, a paver path crossing the lawn, a patio edge. Shows why edge cutting matters. | `plate-wr344` |
| `/reviews/dreame-a3-awd-pro-2500` | `card-dreame-a3-2500` | Half-acre back yard closed in by tall trees and a wooden privacy fence, sky partly blocked. | `plate-dreame-a3-2500` |
| `/reviews/mammotion-luba-mini-2-awd-1500h` | `card-luba-mini2-1500h` | Small, steep back yard with a terraced slope and a short retaining wall, grass kept tall. | `plate-luba-mini2-1500h` |
| `/reviews/segway-navimow-i110n` | `card-i110n` | Small, flat, open front lawn (about a quarter acre) with a straight concrete walk to the door. | `plate-i110n` |
| `/reviews/ecovacs-goat-o1000-rtk` | `card-goat-o1000` | Small back yard reached through a narrow side passage between house and fence, about 3 ft wide. | `plate-goat-o1000` |
| `/reviews/husqvarna-automower-115h` | `card-115h` | Small, neat back lawn with crisp bed edges and a simple shape. No visible wire. | `plate-115h` |
| `/reviews/worx-landroid-m-wr147` | `card-wr147` | Small rectangular back lawn with a chain-link or picket fence, simple and flat. | `plate-wr147` |

**Spec plate (`plate-*`)**: a blueprint "title block" diagram showing the model's rated area on the acres scale, max slope as a drawn triangle with % and °, navigation type icons (RTK / vision / LiDAR / boundary wire), cutting width and height range. Generated from products.json; no product drawing.

### Head-to-head pages
| Page | Slot | Kind | Brief |
|---|---|---|---|
| `/vs/navimow-x430-vs-luba-3-awd-3000` | `dia-vs-x430-luba3` | SVG | Two spec plates side by side on one sheet, shared acres scale and slope triangles overlaid. |
| `/vs/worx-wr344-vs-navimow-x430` | `dia-vs-wr344-x430` | SVG | Same pattern, plus an edge-detail inset showing published edge-cutting approach for each. |
| `/vs/dreame-a3-awd-pro-2500-vs-luba-3-awd-3000` | `dia-vs-dreame-luba3` | SVG | Same pattern, plus a navigation inset (LiDAR + vision vs LiDAR + network RTK + vision). |

### Guides
| Page | Photo slot (Imagine) | Diagram slot (SVG) |
|---|---|---|
| `/guides/rtk-vs-vision-vs-lidar` | none | `dia-nav-types`: three plan-view panels. RTK: satellites plus a correction source (base antenna or network). Vision: camera field of view reading lawn edges. LiDAR: 360° scan rings off fences, trunks and walls. One line under each panel naming what weakens it. |
| `/guides/what-size-robot-mower` | `photo-lot-sizes` (aerial-ish view of a residential street with lots of different sizes, no text) | `dia-acres`: squares for 0.125, 0.25, 0.5, 0.75 and 1 acre with sq ft labels, plus a "rated area vs your yard" bar showing how zones, trees and slopes eat into rated area. |
| `/guides/robot-mowers-for-slopes` | `photo-slope` (back yard bank dropping toward a lower lawn, side-on so the grade is visible) | `dia-slope`: right triangles for 30%, 45%, 80% and 84% with degrees; a note that boundary slope limits are often lower than interior limits. |
| `/guides/mowing-under-trees` | `photo-trees` (lawn under a mature canopy with dappled shade) | `dia-sky-view`: plan view showing open sky vs canopy and house shadow, and how RTK, vision and LiDAR each respond. |
| `/guides/front-and-back-yards` | `photo-side-passage` (narrow side yard between house and fence, looking toward the back) | `dia-zones`: plan of a lot with front and back zones, a side passage marked in feet, and which models' published widths or gap figures fit. |
| `/guides/wire-free-vs-boundary-wire` | `photo-bed-edge` (lawn meeting a mulched bed and a paver path, close-ish, no wire visible) | `dia-boundary`: same yard twice. Left, a perimeter wire loop with a guide wire; right, a virtual boundary on a map. |
| `/guides/running-costs` | none | `dia-costs`: a 5-year sheet: purchase, blades (yearly), connectivity after any free period, garage or shelter, battery. Labels only, values in the page table with sources. |
| `/guides/fcc-robot-mower-rule` | none | `dia-fcc-timeline`: Jul 27–28, 2026 determination and Covered List update → existing authorized models keep selling and getting basic updates → new foreign-produced models need DoW Conditional Approval → Sep 9, 2026 first Conditional Approvals (Husqvarna, per company release; confirm on the FCC list before publishing). |

### Trust pages
| Page | Slot | Kind | Brief |
|---|---|---|---|
| `/about` | `photo-about` | Imagine photo | A quiet residential street in late afternoon with several front lawns of different sizes and slopes, no text, no people, no mowers. |
| `/how-picks-are-chosen` | `dia-method` | SVG | Flow: manufacturer US spec page + owner's manual → independent long-term reviews (cited) → amazon.com listing check (exact model, ASIN) → placed on the ladder → dated and re-checked. States "no hands-on testing" in plain words. |
| `/affiliate-disclosure` | `dia-affiliate` | SVG | Simple flow: you click "See on Amazon" → Amazon → a qualifying purchase may pay this site a commission → your price is the same. |
| `/privacy` | none | pattern | Uses the blueprint header band (CSS pattern), no image file. |
| 404 | none | pattern | Blueprint header band and links to /best and /guides. |

### Sitewide
| Slot | Kind | Notes |
|---|---|---|
| `mark` | SVG | Per MARK-IMAGINE.md. |
| favicon pack | PNG/ICO from `mark` | `app/favicon.ico`, `app/icon.png`, `app/apple-icon.png`, `public/apple-touch-icon.png`. |
| `og-default` | generated | Per MARK-IMAGINE.md OG card. Sitewide `openGraph.images` and `twitter.images` point at `/opengraph-image`. |

## Manifest
`content/images.json` lists every slot above with `status` (`not-made` → `made` → `approved` or `rejected`), file paths, alt text, and Vora's check notes. Code must only render `approved` slots.

## Provenance note (ships with the repo)
All photographs on robotmowguide.com are AI-generated with Grok Imagine and show generic yards; they do not depict any specific product, property or person. Diagrams are original SVG drawings. No Amazon or manufacturer images are used. Visitors see this as one plain sentence on the How picks are chosen page.
