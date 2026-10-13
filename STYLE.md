# STYLE.md — RobotMowGuide visual rails

Read with VOICE.md, AUDIENCE.md, MARK-IMAGINE.md, IMAGES.md, and IMAGERY.md. This file sets the look of this site only. Photo direction is IMAGERY.md. Do not borrow from any other site.

## Mood (5 words, chosen to look wrong on aivora.digital)
**Measured. Plotted. Crisp. Daylight. Civic.**

## One named archetype (locked)
**Cyanotype site plan.**

Think of a landscape contractor's plan sheet printed as a blueprint: plan-view yard drawings in fine white linework on deep cyanotype blue, measured dimensions, a title block in the corner, and surveyor's pink flagging tape marking the one thing that matters. Pages are cool white paper with blueprint panels for diagrams and the ladder. Square corners. Thin, exact rules. Numbers set like dimensions on a drawing.

The site skeleton is the **ladder**: products are ranked by rated lawn area, with slope as the second axis. The look should make that ladder feel like a measured drawing, not a leaderboard.

## Anti-references (do not ship)
- Green-on-cream soft cards, lawn-green page washes, grass textures, leaf icons. This is a lawn niche and the build will drift there unless stopped. Photographs follow IMAGERY.md, so greens, sky, and lawns belong in photos. Page chrome stays Paper, Sheet, Ink, and Cyanotype.
- aivora.digital cream, parchment, soft teal or sage, pillowy rounded "package" cards, copper `#C45C2A`.
- Trailkit Outdoor (the last Amazon launch): paper `#f7f6f2`, charcoal, blaze orange `#ff5a1f`, IBM Plex Sans Condensed, topographic contour lines. No contour-line backgrounds here either.
- Lock Desk, Best Dehumidifier UK, Best Dash Cam UK, Hold Lab, Pack Current chrome and palettes. No "desk" anywhere in the brand.
- Gamer/tech-dark neon, glassmorphism, gradient blobs, cartoon robots, star ratings, score dials, "Editor's Choice" rosettes.
- Soft AI raster logos. Amazon logos, smile marks or Amazon-orange buttons.

## Colour tokens
| Token | Hex | Use |
|---|---|---|
| Paper | `#f4f6f8` | Page background (cool white, never cream) |
| Sheet | `#ffffff` | Content panels and tables |
| Cyanotype | `#123a63` | Blueprint panels for diagrams, the ladder, and finder visuals. Small accents only: a header rule, the mark, or an active-nav underline. Not a header bar. |
| Cyanotype deep | `#0b2643` | Hover on blueprint panels only. Not the header. Not the footer. Not the hero. |
| Linework | `#dbe7f3` | Lines and labels drawn on cyanotype |
| Ink | `#14202b` | Body text and headings on paper |
| Graphite | `#566472` | Meta text, captions-in-UI (never under photos), dates |
| Rule | `#c9d3dc` | Hairlines, table borders, card edges |
| Flag pink | `#e2186f` | Surveyor flagging tape: the single "this one" marker on the ladder and diagram highlights. Not for text. |
| Flag ink | `#c8125f` | Amazon CTA fill (white text on it measures 5.7:1; `#e2186f` only reaches 4.6:1, too close to the 4.5:1 floor). Hover: `#a90f50`. |
| On-flag | `#ffffff` | Text on pink buttons |
| Caution yellow | `#f2c230` | Rare inline warnings in diagrams only (for example "boundary slope limit"). Not for buttons or headings. |

Grass green is not a brand colour. If a diagram needs to show lawn, use a cyanotype tint (`#1d4f80`) with a fine hatch.

## Type
- **Display / headings:** Archivo (variable), using the expanded width axis around 112–125 and weight 600–700. Headings feel like drawing titles: wide, plain, slightly tracked.
- **Body:** Public Sans, 17–18px on mobile, measure about 66ch.
- **Numbers and specs:** DM Mono for acres, square feet, slope %, degrees, inches and dates. Set them like dimensions (for example `0.75 ac`, `80% · 38.7°`).
- **Labels:** Archivo semi-expanded, uppercase, small, Graphite. Not pink.
- Load through `next/font`. Do not use Inter, Fraunces, IBM Plex, Barlow, Figtree, or a soft editorial serif.

## Layout rules
1. **Cards are plan sheets:** square corners, 1px Rule border, no soft shadows. A small title block strip at the bottom of each card holds the model name and two dimensions (rated area, max slope).
2. **The ladder is the spine.** On home and /best, a horizontal or vertical scale in acres (0 → 1+ ac) with each model plotted at its rated area; slope shown as a small angle glyph next to it. It is a drawing with measurements, not a chart with bars racing each other.
3. **Blueprint panels** (cyanotype ground, linework diagrams) are used for diagrams, the ladder, and picker or finder visuals only. Body copy sits on Paper or Sheet. The hero and the header are not blueprint panels.
4. **Picks** are numbered with drawing-style callout tags (a circle with a leader line, or a square tag), in Ink or Linework. No medals, no stars, no score badges.
5. **Tables:** hairline rules, DM Mono for figures, sticky first column on mobile, horizontal scroll only inside the table with a visible scroll cue. Never a full-width nav scrollbar.
6. **Disclosure:** one slim line under the H1 meta row (wording in VOICE.md) plus a link to the full disclosure page, and a short "Paid links: see disclosure" repeat in Graphite beside each CTA cluster. Full text lives on the disclosure page and as a short footer line.
7. **Amazon CTA:** Flag-ink fill, square corners, label **See {model} on Amazon** (table cells: "See on Amazon" with a model-specific `aria-label`), white text, 44px minimum tap height, `rel="nofollow sponsored noopener"`. One primary CTA per product block.
7a. **Quick-pick box:** a title-block strip on Sheet with one row per yard type (yard label in Archivo caps, model name, CTA). Sits directly under the direct answer so the first CTA is inside the first two mobile screens.
7b. **Key-numbers box:** a small dimensioned panel (DM Mono figures, hairline rules) styled like a drawing's dimension table. **Owner-report block:** plain list with linked sources in Graphite; no quote marks styling, no avatars, no stars.
7c. **Researched box:** a quiet Sheet panel with a thin Rule border near the end of the page.
7d. **Tools:** form controls look like a plan sheet's input boxes (square, 1px Rule, DM Mono values). Results appear in a blueprint panel. Visible focus ring in Linework on Paper and in white on Cyanotype.
7e. **Sticky CTA bar** (optional, reviews only, behind a flag): ≤56px, Sheet background, model name + Flag-ink button + disclosure link, dismissible, never covers focused elements, no layout shift.
8. **Products with no verified ASIN** show no button at all. They show a plain line in Graphite instead (wording in VOICE.md). Never a disabled button.
9. **Updated dates** sit in the meta row under each H1 in DM Mono ("Updated 14 Oct 2026" style, US order is fine: "Updated Oct 14, 2026").
10. **Hero:** a bright daylight yard photo once that slot is `approved` in `content/images.json` (photo direction in IMAGERY.md). Until then, a light, fresh background: Paper, Sheet, or a very light sky or lawn tint. No deep cyanotype band. The H1 stays visible on mobile without scrolling. No vanity counters ("9 mowers compared") as decoration.
11. **Header:** light, same family as the hero and the footer. Sheet or Paper background, Ink text. No deep cyanotype bar. A thin Cyanotype accent is allowed: a bottom rule, the mark, or the active-nav underline. Focus rings stay visible and meet WCAG AA on that light ground. Wraps on small screens; tap targets stay at least 44px. Not Linework text on a light ground.
12. **Navigation:** Best · Find my mower · Reviews · Head-to-head · Guides · How picks are chosen (only items whose pages are live). Wraps on small screens; no horizontal scroll strip.
13. **Spacing:** generous but orderly, like a drawing sheet with margins. Align to a visible 8px grid; hairline dividers instead of big coloured blocks.
14. **Footer:** light. Sheet or Paper background, Ink text, Cyanotype links, a hairline along the top. Graphite only where it still clears WCAG AA on that background. Not Cyanotype deep. Not Linework text on a light ground.

## Mobile
- H1 and the first answer visible on a 390px-wide screen without scrolling past a giant image; the first CTA (quick-pick box or review primary CTA) within the first two screens.
- Tables stack or scroll cleanly; never crush 6 columns.
- Sticky header stays slim (56px or less).

## Hard must-nots
- No grass-green brand chrome, no cream, no rounded soft cards. A very light lawn or sky tint is allowed on the hero only, until a photo is approved.
- No product packshots, no scraped Amazon images, no Amazon branding.
- No star ratings or scores of any kind.
- No captions printed under photos (alt text only). No words baked into images.
- No dev text, notes, TODOs or sample content on any public page.
- No shared templates, components or footers copied from other Aivora sites.
- Ladder highlights never rely on colour alone (add a tag or label).
