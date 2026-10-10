# Image ideas: what visitors expect, and original visuals that don't copy real products

## What visitors expect (evidence)
- **Navigation explainer graphics.** The Verge used a Mammotion-made graphic, "how antenna-based RTK works versus network RTK", in its 2026 review. Publishers are borrowing brand diagrams because neutral ones don't exist. https://www.theverge.com/tech/978664/robot-lawnmower-review-segway-mammotion-husqvarna-roborock-dreame
- **Real-yard photos with problems visible:** torn turf from turns, sandpits, mowing lines, lineups of mowers (Verge). Own photos credited "Photo: Paul Rankin for Bob Vila". Wirecutter photo credits "Grant Clauser/NYT Wirecutter".
- **Search demand that implies visuals:** "rtk vs lidar" (8+ autocomplete variants), "robot mower under trees", "steep slopes", "multiple zones", "front and back yard", "rain", "winter storage", "dog poop", "edges" (see BUYER-QUESTIONS.md, `_autocomplete.txt`).
- **Pain points that are easier to show than to tell** (OWNER-VOICE.md): antenna sky view, tree-canopy dead zones, fixed-height edge bands, narrow passages and gates, curbs.

## Ground rules
- **Never reproduce a real product's design**, logo, colourway or distinctive shape (Navimow X4's "Darth Vader dog" look, the LUBA's shape, the Husqvarna orange). Use a **generic, neutral mower archetype**: rounded grey/white body, no logos, a generic antenna puck, a generic dock.
- **No brand-made diagrams.** Redraw concepts from first principles.
- Product images on review pages should come from the **Amazon PA-API / SiteStripe image** (allowed under Associates rules), or from our own photos once we have units. Don't use brand press images without permission.
- Label any AI-generated or illustrative image as an "Illustration". Never present it as a test photo.
- Put text in images as HTML captions or overlays (good for accessibility and SEO), and give every image alt text.

## Diagram set (priority order)

| # | Image | Use on | Notes |
|---|---|---|---|
| 1 | **Four navigation methods side by side:** boundary wire / antenna RTK / network RTK (cell tower + cloud) / LiDAR or camera only. One yard, four panels. | RTK vs LiDAR guide, every review | Show what each needs: a buried wire, an antenna with sky view, cell coverage, nothing external. |
| 2 | **Tree-canopy dead zone:** a top-down yard with an oak canopy shaded as "weak satellite fix" and a mower switching to camera/LiDAR fallback. | Under-trees page, RTK guide | Owners' #1 pain point. Add a "mower needs sky too, not just the antenna" callout. |
| 3 | **Antenna placement do's and don'ts:** roofline vs open pole vs under eaves vs against a wall; a 135° sky-view cone; the 6.5 ft height note (Husqvarna support guidance). | Setup guide, RTK guide | Cite the Husqvarna EPOS troubleshooting page. Generic antenna shape. |
| 4 | **Slope illustration:** % vs degrees ruler (15% ≈ 8.5°, 30% ≈ 17°, 45% ≈ 24°, 80% ≈ 38.7°, 100% = 45°). A boundary-slope vs inside-slope inset (why Husqvarna lists 15% vs 45%). | Hills page, every review spec box | Our own maths; include a "how to measure your slope with a phone" mini-panel. |
| 5 | **Yard-type archetypes** (6 illustrated top-down yards): ¼-acre suburban flat; ½-acre with front + back connected by a side passage; 1-acre open; wooded lot; sloped hillside; Florida St. Augustine yard with palms and pool. | Hub pages, "which mower for my yard" quiz | These become our visual brand. Reuse them across best-of pages as the "best for this yard" card. |
| 6 | **Rated area vs real area:** a bar showing "brand rating" vs "complex yard effective" (−20%) and "buy one size up". | Sizing guide | Note: Husqvarna ±20%, Navimow map max 1.2×. |
| 7 | **Edge-cutting comparison:** cross-section of a lawn edge showing the uncut strip widths (offset disc vs straddle vs fixed-low edge pass scalping a band). | Edges guide | Generic. Cite tester measurements (i215 6–7" gap per Wirecutter). |
| 8 | **Multi-zone map:** front and back zones, a transit path across a driveway, a no-go flower bed, an isolated zone needing a carry. | Multi-zone page | App-style but generic UI, not a copy of a brand app. |
| 9 | **Passage-width gauge:** body width vs gate/side-passage widths (27.6" LUBA 3 min gap; 39" Navimow i passage; 24" X4 body). | Gates/narrow-paths page | Plain dimension lines; no product likeness. |
| 10 | **Grass-type cut-height chart:** St. Augustine, Bermuda, Zoysia, centipede, tall fescue, with the recommended height band overlaid on mower min/max ranges. | Grass hub | Heights must come from extension services (to source). |
| 11 | **Cost-of-ownership stacked bar:** purchase, blades, electricity, 4G subscription after the free period, battery replacement, over 5 years. | Cost page | Generated from our data table. |
| 12 | **Theft protection flow:** lift alarm → PIN lock → geofence alert → GPS (needs power and 4G) → AirTag backup. | Theft page | Highlight "tracking stops when the battery is pulled" (owner reports). |
| 13 | **Safety illustration:** blade recess under the deck, lift/tilt stop, a child/pet avoidance zone. | Safety page | Calm and non-alarming; no injuries shown. |
| 14 | **Seasonal timeline:** spring setup → summer daily → autumn leaves → winter storage (battery at ~50%, indoors). | Winter page | Battery advice to be sourced from manuals. |
| 15 | **FCC explainer graphic:** "authorized before 28 Jul 2026 → still sold and updated to ≥1 Jan 2029" vs "new foreign-made model → needs Conditional Approval". | FCC page | Text-light; dated in the caption. |

## Photo-style ideas (for when we have units, or for staged stock)
- Mowing-line close-ups on the specific grass types (St. Augustine blades vs Bermuda).
- An honest "problem" photo series: edge strip left uncut, a rut from turning on wet turf, a mower stuck at a curb. These are high-trust and rarely shown by affiliates.
- Dock placement in shade (a LiDAR heat tip) vs open sky (RTK).
- Scale shots: the mower next to a standard 36" gate.

## Hero images
- Use a generic robot mower on a recognisably **American** lawn (wide front yard, sidewalk, mailbox), not a European garden. This helps US-intent relevance.
- Mix in the yard archetype illustrations on the homepage, using a quiz entry ("What's your yard like?").
