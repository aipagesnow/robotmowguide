# MARK-IMAGINE.md — RobotMowGuide mark and Imagine brief

Read with STYLE.md and IMAGES.md. IMAGES.md is the binding page-by-page image map and review gate; this file covers the brand mark and the Imagine style rules.

## Brand mark
- **Site name:** RobotMowGuide (wordmark), domain robotmowguide.com
- **Meaning in one line:** a plain guide to choosing a robot mower that fits your yard.
- **Mood words:** Measured, plotted, crisp, daylight, civic.
- **Must not look like:** aivora.digital, Trailkit Outdoor (no blaze bars, no topo lines), any soft Amazon guide, a cartoon robot, a leaf or grass blade, a lawnmower silhouette clip-art, Amazon's smile or orange.
- **Direction:** geometric SVG symbol + wordmark.

### Mark concept: "mow path"
A square tile in Cyanotype `#123a63` containing a single continuous white stroke that runs in three parallel lanes joined by two U-turns (a serpentine, the way a systematic robot mows a lawn in stripes). The end of the stroke finishes in a small Flag pink `#e2186f` square, like a survey flag marking where the mower is.

Geometry guide (32-unit grid, `viewBox="0 0 32 32"`):
- Tile: full 32×32 square, corner radius 0–2 (square, not a rounded app tile).
- Stroke: Linework `#dbe7f3` or white, width 3, square caps, path roughly `M8 8 H24 V16 H8 V24 H22` (three lanes, two turns). Adjust so spacing is even and it reads at 16px.
- Flag: 4×4 Flag pink square at the end of the path (around x 22–26, y 22–26).
- Must read as a sharp serpentine at 16×16. Test at 16, 32 and 180 px before shipping.

Wordmark: "RobotMowGuide" in Archivo, expanded width (~118), weight 650, slightly open tracking. Optional: "Mow" in weight 800 for rhythm. No tagline in the lockup.

### Process (locked)
1. This brief.
2. Optional: 3–5 Grok Imagine explorations for mark ideas only. Do not ship an Imagine raster as the logo.
3. Ship a clean SVG mark component and SVG file.
4. Build the static favicon + OG pack from that SVG (see LAUNCH-CHECKLIST.md and the favicon-og-pack rules): `app/favicon.ico` (16/32/48), `app/icon.png` 32×32, `app/apple-icon.png` 180×180, `public/apple-touch-icon.png` 180×180, rewrites for `/icon` and `/apple-icon` only, branded `opengraph-image` + `twitter-image`.

### OG card
1200×630. Cyanotype ground with a faint drawing grid, the mark at left, the wordmark, and one plain line: "Robot mowers ranked by lawn size and slope". White linework, one small Flag-pink accent. No product images, no prices, no stars.

## Imagine style rules (all photos on this site)
- **Generic US suburban yards in daylight**, mid-morning or late-afternoon light, clear or lightly overcast. Real-looking lawns with ordinary imperfections. Not golf-course perfect.
- **Mower-free compositions by default.** Where a page needs a mower in the scene, it must be a small, distant, unbranded, generic low shape that cannot be mistaken for any real model, and only if Vora approves. Never a close-up robot, never a recognisable Navimow, LUBA, Worx, Dreame, Ecovacs or Husqvarna shape or color scheme (orange/gray Worx, white Mammotion, etc.).
- **No text in pixels:** no signs, no logos, no house numbers, no labels.
- **No people's faces**; hands or a distant figure only if needed.
- **No AI tells:** melted fences, impossible trees, duplicated houses, warped gates, grass growing on paving, floating shadows. Regenerate rather than ship.
- **Color grading:** natural greens are fine in photographs; keep them slightly cool and true, never neon or oversaturated. Photos sit inside STYLE.md chrome, which carries the brand color.
- **Composition:** leave clear space for the H1 on hero images (left or lower third). Shoot from a person's eye height or a low drone-ish angle that shows the yard's layout.
- **Format:** generate large (at least 2400px wide for heroes), export to AVIF/WebP at the sizes listed in IMAGES.md.

## Anti-spam
Do not wallpaper sections with filler photos. Each image must help the reader understand a yard situation (slope, trees, zones, size). Diagrams usually explain better than photos on guides.
