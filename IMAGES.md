# IMAGES.md — image map, provenance and review gate

This is the binding image plan for robotmowguide.com. Every page has a planned image (photo, diagram or both). No image goes live until Vora has checked it and marked it **approved** in `content/images.json`.

Read with MARK-IMAGINE.md (style rules) and STYLE.md (colors, type).

## Allowed sources
1. **Grok Imagine (grok.com)** photographs of generic US yards, made for this site. Mower-free by default.
2. **SVG diagrams built in code** for this site (blueprint style per STYLE.md), drawn from the numbers in `content/products.json`, `content/costs.json` and the guides. Concepts are redrawn from first principles: never trace or adapt a brand-made diagram. Where a diagram needs a mower, use the **generic archetype glyph**: a plain rounded-rectangle body with two wheels and an optional generic antenna puck, no logo, no colourway, no distinctive shape (never the X4's, the LUBA's or Husqvarna orange).
3. Nothing else at launch. No manufacturer press images, no stock, no Amazon images (Creators API/PA-API access needs qualifying sales first; revisit after launch), no Amazon CDN images, no screenshots of apps or listings.

US cues in photos: wide front yards, sidewalks, curbside mailboxes (no numbers or names), US house styles, warm-season grasses for Southern pages. Never a European garden.

**AI labelling:** every Imagine photo carries IPTC `DigitalSourceType = trainedAlgorithmicMedia` in its file metadata (set at export, e.g. `exiftool -XMP-iptcExt:DigitalSourceType=http://cv.iptc.org/newscodes/digitalsourcetype/trainedAlgorithmicMedia`). Photos are decorative mood images; diagrams carry the information. They are never presented as photos of tested mowers or of readers' yards, and the method page says they are AI-generated.

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
- [ ] Photos: IPTC DigitalSourceType set (check with `exiftool`).
- [ ] Diagrams: `<title>` and `<desc>` present, and the page has a full text equivalent of what the diagram shows.
- [ ] Any mower glyph is the generic archetype only.

## Export sizes and budgets
| Kind | Aspect | Master | Exports (AVIF + WebP) | Budget |
|---|---|---|---|---|
| Hero photo | 16:9 (mobile crop 4:5 via `object-position`) | 2400×1350 | 640, 1024, 1600, 2400 | ≤ 180 KB AVIF at 1600 |
| Card photo | 4:3 | 1600×1200 | 480, 800, 1200 | ≤ 90 KB AVIF at 800 |
| Diagram | as drawn | SVG | inline SVG or `.svg` | ≤ 30 KB, no embedded raster |
| OG card | 1200×630 | generated | PNG | ≤ 300 KB |

Hero: `priority`, `fetchpriority="high"`, explicit sizes. Everything else lazy-loaded with width/height to protect CLS.

## Page-by-page image map
Slot IDs are stable. Paths: `public/images/<slot-id>-<width>.avif|webp`. Every page in docs/SITE_STRUCTURE.md has at least one slot; pages with a decision diagram carry the information in the diagram and use the photo as a mood image. The round column says when the slot must be made and approved.

### Round 1
| Slot | Kind | Page(s) | Brief | Alt text (draft) |
|---|---|---|---|---|
| `hero-home` | Imagine photo | `/` | Recognisably American front yard seen from the public sidewalk: a wide front lawn, a concrete walk to a two-story house with mixed siding and brick, a curbside mailbox with no numbers or name, one street tree. Morning light, lawn real and slightly imperfect. No mower, no people, no car plates. Clear space at left for the H1. | Wide front lawn of a two-story house seen from the sidewalk, with a walk to the door and a street tree |
| `dia-ladder` | SVG diagram | `/`, `/best` | The ladder: acres scale 0 → 2 ac, each current family's primary variant plotted at its rated area, angle glyph with max slope %, line style for wire-free vs boundary wire, and a text label (not colour alone) for highlighted picks. Built from products.json. | Diagram ranking robot mowers by rated lawn area, with each model's maximum slope |
| `dia-yard-quarter` | SVG diagram | `/`, `/tools/mower-finder`, `/best/robot-mower-small-yard` | Top-down yard archetype 1: a quarter-acre flat suburban lot, house footprint, drive, front and back lawn. Blueprint linework, dimensions in ft and sq ft. | Plan of a flat quarter-acre suburban lot with front and back lawns |
| `dia-yard-half-zones` | SVG diagram | `/`, `/tools/mower-finder`, `/best/robot-mower-half-acre`, `/guides/robot-mower-front-and-back-yard` | Archetype 2: a half-acre lot with front and back lawns joined by a side passage, passage width dimensioned. | Plan of a half-acre lot whose front and back lawns are joined by a narrow side passage |
| `dia-yard-acre` | SVG diagram | `/`, `/tools/mower-finder`, `/best/robot-mower-1-acre` | Archetype 3: a one-acre open lot with a long drive and a few beds. | Plan of an open one-acre lot with a long driveway |
| `dia-yard-wooded` | SVG diagram | `/`, `/tools/mower-finder`, `/best/robot-mower-under-trees` | Archetype 4: a wooded lot, canopy circles over a third of the lawn. | Plan of a wooded lot with tree canopy over a third of the lawn |
| `dia-yard-hillside` | SVG diagram | `/`, `/tools/mower-finder`, `/best/robot-mower-for-hills` | Archetype 5: a hillside lot with contour lines and the steepest bank marked in % and °. | Plan of a hillside lot with contour lines and the steepest bank marked |
| `dia-yard-florida` | SVG diagram | `/`, `/tools/mower-finder`, `/best/robot-mower-st-augustine` | Archetype 6: a Florida yard with St. Augustine lawn, two palms and a screened pool cage. | Plan of a Florida yard with a pool cage, palms and St. Augustine lawn |
| `hero-best` | Imagine photo | `/best` | Back yard of a two-story suburban house: lawn sloping gently from a patio toward mature trees, a wooden fence and a side gate at one edge. No mower, no people. | Back yard lawn sloping down from a patio toward mature trees and a side gate |
| `card-x4` | Imagine photo | `/reviews/segway-navimow-x4` | About one acre of open back yard behind a two-story house, with a steep grassy bank down to a lower lawn. Wide, bright, uncluttered. | Open back yard of about an acre with a steep grassy bank to a lower lawn |
| `plate-x4` | SVG diagram | `/reviews/segway-navimow-x4` | Spec plate (title-block diagram) for the family's primary variant with a variant strip: rated area on the acres scale, slope triangle with % and °, navigation icons, cut width and height. From products.json, no product drawing. | Spec diagram for the Segway Navimow X4 series |
| `card-luba3` | Imagine photo | `/reviews/mammotion-luba-3-awd` | Three-quarter-acre yard with two mature oaks shading part of the lawn, dappled light, a mulch ring around one trunk. | Three-quarter-acre lawn partly shaded by two mature oaks |
| `plate-luba3` | SVG diagram | `/reviews/mammotion-luba-3-awd` | Spec plate as above. | Spec diagram for the Mammotion LUBA 3 AWD series |
| `dia-nav-four` | SVG diagram | `/guides/rtk-vs-lidar-vs-vision`, all reviews (small) | One yard, four panels: boundary wire / antenna RTK / network RTK (cell tower + cloud) / LiDAR or camera only. Under each, what it needs (buried wire, antenna with sky view, cell coverage, nothing external) and what weakens it. Redrawn from first principles, no brand diagrams. | Four plan views of one yard showing boundary wire, antenna RTK, network RTK and LiDAR or camera navigation |
| `dia-antenna` | SVG diagram | `/guides/rtk-vs-lidar-vs-vision` | Antenna placement do's and don'ts: roofline vs open pole vs under eaves vs against a wall; a sky-view cone; the height note from Husqvarna's EPOS support guidance (cite on the page). Generic antenna shape. | Diagram of good and bad places to mount an RTK antenna |
| `photo-lot-sizes` | Imagine photo | `/guides/how-big-a-robot-mower-do-i-need` | Elevated view of a residential street with lots of different sizes, no text, no readable signs. | Residential street with front lawns of different sizes |
| `dia-acres` | SVG diagram | `/guides/how-big-a-robot-mower-do-i-need` | Squares for 0.125, 0.25, 0.5, 0.75 and 1 acre with sq ft labels, and a 'lot minus house, drive and beds' helper. | Squares comparing lawn sizes from an eighth of an acre to one acre |
| `photo-about` | Imagine photo | `/about` | A quiet residential street in late afternoon with several front lawns of different sizes and slopes. No text, no people, no mowers. | Quiet residential street with front lawns of different sizes |
| `dia-method` | SVG diagram | `/how-picks-are-chosen` | Flow: manufacturer US spec page + manual → owner threads and independent reviews (cited) → amazon.com listing check (exact model, ASIN) → placed on the ladder → dated and re-checked every 90 days. States 'Research-based: we have not tested these mowers' in plain words. | Flow of how picks are researched, checked and dated |
| `dia-affiliate` | SVG diagram | `/affiliate-disclosure` | You click a See on Amazon link → Amazon → a qualifying purchase may pay this site a commission → your price is the same. | How an Amazon paid link works for the reader |
| `mark` | SVG diagram | sitewide | Per MARK-IMAGINE.md. | RobotMowGuide |
| `og-default` | SVG diagram | sitewide | Per MARK-IMAGINE.md OG card. | RobotMowGuide |

### Round 2
| Slot | Kind | Page(s) | Brief | Alt text (draft) |
|---|---|---|---|---|
| `hero-finder` | Imagine photo | `/tools/mower-finder` | Overhead-ish view from an upstairs window of a back yard with a lawn, a few beds and a fence line, flat light. No mower, no people. | Back yard lawn with planting beds and a fence seen from an upstairs window |
| `photo-acre` | Imagine photo | `/best/robot-mower-1-acre` | About one acre of open lawn on an edge-of-town lot, split-rail fence, a long gravel or asphalt drive, a farmhouse-style house in the distance. | Large open lawn of about an acre beside a long driveway and split-rail fence |
| `dia-rated-vs-real` | SVG diagram | `/best/robot-mower-1-acre`, `/guides/how-big-a-robot-mower-do-i-need` | Bars: brand-rated area vs effective area for a complex yard (minus about 20%) vs 'buy one size up' (our 1.25× rule, labelled as ours). Cites Husqvarna ±20% and Navimow map max 1.2× in the caption text on the page. | Bar diagram comparing rated area with realistic area for a complex yard |
| `photo-slope` | Imagine photo | `/best/robot-mower-for-hills` | Back yard bank dropping toward a lower lawn, seen side-on so the grade is visible, retaining wall at the bottom. | Grassy back yard bank dropping to a lower lawn and a short retaining wall |
| `dia-slope` | SVG diagram | `/best/robot-mower-for-hills` | Slope ruler: 15% ≈ 8.5°, 30% ≈ 16.7°, 45% ≈ 24.2°, 80% ≈ 38.7°, 84% ≈ 40°, 100% = 45°, with rise per 10 ft. Inset: interior vs boundary slope (why Husqvarna lists 45% inside and 15% at the edge). Mini panel: measuring with a phone level on a straight board. Our own maths. | Slope ruler converting percent to degrees and rise per 10 feet, with interior and boundary limits |
| `card-worx-vision-cloud` | Imagine photo | `/reviews/worx-landroid-vision-cloud` | One-acre yard with many edges: curved planting beds, a paver path crossing the lawn, a patio edge. | Lawn with curved planting beds and a paver path crossing it |
| `plate-worx-vision-cloud` | SVG diagram | `/reviews/worx-landroid-vision-cloud` | Spec plate with variant strip WR310 / WR320 / WR340 / WR344 4WD. | Spec diagram for the Worx Landroid Vision Cloud series |
| `card-dreame-a3-pro` | Imagine photo | `/reviews/dreame-a3-awd-pro` | Half-acre back yard closed in by tall trees and a wooden privacy fence, sky partly blocked, strong afternoon sun on the open part. | Back yard enclosed by tall trees and a privacy fence |
| `plate-dreame-a3-pro` | SVG diagram | `/reviews/dreame-a3-awd-pro` | Spec plate as above. | Spec diagram for the Dreame A3 AWD Pro series |
| `dia-vs-x430-luba3` | SVG diagram | `/vs/navimow-x430-vs-luba-3-awd-3000` | Two spec plates on one sheet, shared acres scale, slope triangles overlaid, navigation inset (network RTK + vision vs LiDAR + network RTK + vision). | Side-by-side spec diagram of the Navimow X430 and LUBA 3 AWD 3000 |
| `dia-fcc-timeline` | SVG diagram | `/guides/fcc-robot-mower-ban` | Two lanes: authorized before Jul 28, 2026 → still sold and updated to at least Jan 1, 2029; new foreign-produced model → needs Conditional Approval (Husqvarna platforms approved Sep 9, 2026). Text-light; dated on the page. | Timeline of the 2026 FCC rule for robot mowers already on sale and for new models |

### Round 3
| Slot | Kind | Page(s) | Brief | Alt text (draft) |
|---|---|---|---|---|
| `photo-half-acre` | Imagine photo | `/best/robot-mower-half-acre` | Half-acre suburban back yard with a patio, a play lawn and a vegetable bed, privacy fence. No toys with brand marks, no people. | Half-acre back yard with a patio, open lawn and a vegetable bed |
| `photo-small-yard` | Imagine photo | `/best/robot-mower-small-yard` | Small flat front lawn of a bungalow with a straight concrete walk and low shrubs. | Small flat front lawn with a straight walk to a bungalow |
| `photo-trees` | Imagine photo | `/best/robot-mower-under-trees` | Lawn under a mature oak and maple canopy with dappled shade and visible roots near one trunk. | Lawn under mature oaks with dappled shade |
| `dia-canopy` | SVG diagram | `/best/robot-mower-under-trees`, `/guides/rtk-vs-lidar-vs-vision` | Top-down yard with an oak canopy shaded as 'weak satellite fix' and a generic mower glyph switching to camera/LiDAR fallback. Callout: the mower needs sky view too, not just the antenna. | Plan showing where tree canopy weakens satellite positioning and how other navigation takes over |
| `card-luba-mini2` | Imagine photo | `/reviews/mammotion-luba-mini-2-awd` | Small, steep back yard with a terraced slope and a short retaining wall, grass kept tall. | Small terraced back yard with a short retaining wall |
| `plate-luba-mini2` | SVG diagram | `/reviews/mammotion-luba-mini-2-awd` | Spec plate as above. | Spec diagram for the Mammotion LUBA mini 2 AWD |
| `card-mova-lidax` | Imagine photo | `/reviews/mova-lidax-ultra` | Half-acre back yard with raised garden beds, a young tree and a stone path, mixed sun and shade. | Back yard with raised garden beds, a young tree and a stone path |
| `plate-mova-lidax` | SVG diagram | `/reviews/mova-lidax-ultra` | Spec plate with variant strip 1000 / 2000 / 3000 AWD. | Spec diagram for the MOVA LiDAX Ultra series |
| `card-q110h` | Imagine photo | `/reviews/roborock-rockneo-q110h` | Small, open corner-lot front lawn with sidewalk on two sides and low shrubs. | Small open front lawn on a corner lot with sidewalks on two sides |
| `plate-q110h` | SVG diagram | `/reviews/roborock-rockneo-q110h` | Spec plate as above. | Spec diagram for the Roborock RockNeo Q110H |
| `card-navimow-i` | Imagine photo | `/reviews/segway-navimow-i-series` | Small flat back lawn behind a townhouse with a short wooden fence and a patio slab. | Small flat back lawn behind a townhouse |
| `plate-navimow-i` | SVG diagram | `/reviews/segway-navimow-i-series` | Spec plate with variant strip i206 / i210 and previous-generation i105N / i110N marked as such. | Spec diagram for the Segway Navimow i series |
| `dia-vs-dreame-luba3` | SVG diagram | `/vs/dreame-a3-awd-pro-vs-luba-3-awd` | Same pattern, navigation inset LiDAR + vision vs LiDAR + network RTK + vision. | Side-by-side spec diagram of the Dreame A3 AWD Pro and LUBA 3 AWD |
| `photo-winter` | Imagine photo | `/guides/robot-mower-winter-storage` | Late-fall back lawn with scattered leaves, bare trees, a closed garden shed. No mower. | Late-fall lawn with scattered leaves and bare trees beside a shed |
| `dia-seasons` | SVG diagram | `/guides/robot-mower-winter-storage` | Seasonal timeline: spring setup → summer daily → fall leaves → winter storage (battery charge level and indoor storage per manuals, cited on the page). | Timeline of a robot mower's year from spring setup to winter storage |
| `photo-side-passage` | Imagine photo | `/guides/robot-mower-front-and-back-yard` | Narrow side yard between house and fence, looking toward the back yard. | Narrow side yard between a house and a fence leading to the back yard |
| `dia-zones` | SVG diagram | `/guides/robot-mower-front-and-back-yard` | Multi-zone map: front and back zones, a transit path across a driveway, a no-go flower bed, an isolated zone that needs carrying. App-style but generic, not a copy of any brand app. | Map of a yard with front and back zones, a transit path and a no-go bed |
| `dia-passage-width` | SVG diagram | `/guides/robot-mower-front-and-back-yard` | Passage-width gauge: published body widths and minimum gaps (from products.json) against common gate and side-passage widths. Dimension lines only. | Gauge comparing mower widths with gate and side-passage widths |

### Round 4
| Slot | Kind | Page(s) | Brief | Alt text (draft) |
|---|---|---|---|---|
| `photo-st-augustine` | Imagine photo | `/best/robot-mower-st-augustine` | Florida yard with thick, tall St. Augustine grass, a palm, a screened pool cage at the edge, bright sun. | Thick St. Augustine lawn in a Florida yard with a palm and a screened pool |
| `photo-bermuda` | Imagine photo | `/best/robot-mower-bermuda` | Texas ranch-house front yard with low, dense Bermuda grass, a live oak and a wide driveway, hard sun. | Low, dense Bermuda lawn in front of a Texas ranch house |
| `dia-grass-heights` | SVG diagram | `/best/robot-mower-st-augustine`, `/best/robot-mower-bermuda` | Cut-height chart: recommended height bands for St. Augustine, Bermuda, zoysia, centipede and tall fescue (from extension services: sources to collect) overlaid on each current model's min–max cut range. | Chart of recommended mowing heights by grass type against each mower's cutting range |
| `dia-edges` | SVG diagram | `/best/robot-mower-st-augustine`, `/reviews/dreame-a3-awd-pro`, `/guides/are-robot-mowers-worth-it` | Cross-section of a lawn edge: uncut strip widths for an offset disc, a straddling deck and a fixed-low edge pass that scalps a band on tall lawns. Generic, with figures cited on the page. | Cross-section of a lawn edge showing the uncut strip left by different edge-cutting designs |
| `card-wr147` | Imagine photo | `/reviews/worx-landroid-m-wr147` | Small rectangular back lawn with a picket fence, simple and flat. No visible wire. | Small rectangular back lawn with a picket fence |
| `plate-wr147` | SVG diagram | `/reviews/worx-landroid-m-wr147` | Spec plate with boundary-wire icon. | Spec diagram for the Worx Landroid M WR147 |
| `card-husqvarna-iq` | Imagine photo | `/reviews/husqvarna-automower-iq` | Large, gently rolling open lawn beside a long driveway, a few young trees, wide sky. | Large gently rolling lawn beside a long driveway under open sky |
| `plate-husqvarna-iq` | SVG diagram | `/reviews/husqvarna-automower-iq` | Spec plate with variant strip 410 / 420 / 440 iQ, 435 iQ AWD, 435X AWD; shows interior and boundary slope separately. | Spec diagram for the Husqvarna Automower iQ series |
| `dia-vs-wr340-x430` | SVG diagram | `/vs/worx-vision-cloud-wr340-vs-navimow-x430` | Same pattern, plus slope overlay 30% vs 84% and an edge-detail inset. | Side-by-side spec diagram of the Worx WR340 and Navimow X430 |
| `dia-costs` | SVG diagram | `/guides/robot-mower-cost-to-own` | Five-year stacked bars per family: blades, connectivity after the free period, battery, accessories; purchase shown only as dated MSRP if used. Generated from costs.json. | Stacked bars of five-year running costs by mower family |
| `photo-worth-it` | Imagine photo | `/guides/are-robot-mowers-worth-it` | Patio chairs and a small table overlooking an even back lawn on a Saturday morning. No people, no mower. | Empty patio chairs overlooking a back lawn in the morning |
| `dia-worth-it` | SVG diagram | `/guides/are-robot-mowers-worth-it` | Decision flow: yard size, soil, canopy, slope, theft exposure, grass height → 'good fit' / 'think twice' / 'not yet'. | Decision flow for whether a robot mower suits your yard |
| `photo-front-street` | Imagine photo | `/guides/robot-mower-theft-protection` | Open front yard with no fence beside a quiet street. No mower, no people. | Open front lawn with no fence beside a quiet street |
| `dia-theft` | SVG diagram | `/guides/robot-mower-theft-protection` | Theft protection flow: lift alarm → PIN lock → geofence alert → GPS (needs power and 4G) → separate tracker backup. Highlight that built-in tracking stops when the battery is pulled (owner reports). | Flow of theft protection layers from lift alarm to a separate tracker |

### Reused or pattern-only
- `/reviews`, `/vs`, `/guides` index cards reuse each page's card photo or diagram.
- `/privacy` and the 404 page use the blueprint header band (CSS pattern), no image file.
- Small `dia-nav-four` panel reused in each review's navigation row.

**Spec plate (`plate-*`)**: a blueprint title-block diagram for the family's primary variant with a variant strip: rated area on the acres scale, slope triangle with % and ° (interior and boundary where both are published), navigation icons (wire / antenna RTK / network RTK / LiDAR / vision), cutting width and height range. Generated from products.json; no product drawing.

**Later slots (with their pages, via REVIEW-ADD):** safety illustration (blade recess, lift stop, pet zone: calm, no injuries), grass-type spokes (zoysia, fescue, centipede), edges guide, problem photo series once real units are owned (edge strip left uncut, a rut from turning on wet turf, a mower stuck at a curb: only real photos, never AI).

## Manifest
`content/images.json` lists every slot above with `status` (`not-made` → `made` → `approved` or `rejected`), file paths, alt text, and Vora's check notes. Code must only render `approved` slots.

## Provenance note (ships with the repo)
All photographs on robotmowguide.com are AI-generated with Grok Imagine and show generic yards; they do not depict any specific product, property or person. Diagrams are original SVG drawings. No Amazon or manufacturer images are used. Visitors see this as one plain sentence on the How picks are chosen page.
