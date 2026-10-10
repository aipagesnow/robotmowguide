# Tools

Four small tools. All are client islands on static pages, read only from `content/products.json` and `content/costs.json`, and follow the same rules:
- **Works without JavaScript.** The server-rendered page shows the full decision table (or worked examples) the tool is built on; JavaScript adds the interactive version on top.
- **No indexable result URLs.** State lives in the component (or in a URL hash that the server never renders). No result routes, no query-string pages in the sitemap. The tool page has one canonical.
- **No email gate,** no sign-up, no saved results.
- **Accessible:** labeled inputs, keyboard operable, results announced with `aria-live="polite"`, never colour alone.
- **Honest output:** always explain the match, show "what to watch", and offer a "nothing here fits" result that says why (e.g. "Over 2 acres: consider two mowers or a commercial unit").
- GA4: `tool_use` event with `tool` and `step` (no personal data). Result CTAs fire `amazon_click` with `placement: finder`.

## 1. Mower finder — `/tools/mower-finder` (round 2 alpha, round 4 final)
Short embed on home and /best (first two questions, then "see full results" anchor to the tool page).

Inputs (5, sensible defaults):
1. Lawn area: acres or sq ft, with a lot-size helper ("lot minus house, drive and beds").
2. Steepest slope: %, ° or "rise over 10 ft", with a link to the converter.
3. Tree cover: open / some / heavy.
4. Separate zones: none / connected by a passage (width in inches) / not connected.
5. Wire tolerance: happy to lay wire / wire-free only.

Logic (documented on the page and on /how-picks-are-chosen):
- Area filter: rated area ≥ lawn area × 1.25 for heavy trees or multiple zones, × 1.0 for open single lawns.
- Slope filter: the model's interior slope figure ≥ the steepest slope; flag when the steepest slope is at an edge and the model publishes a lower boundary figure.
- Trees: heavy → prefer LiDAR or vision-led navigation; RTK-only shows a "what to watch: satellite fix under canopy" note.
- Passage: published body width or minimum gap ≤ passage width; unknown → "check the manual" note.
- Output: 1–3 current models from the ladder, each with why, what to watch, review link and CTA (or the no-link line). Superseded/discontinued models never appear.

No-JS fallback: a static table of yard types (size band × slope band × trees) with the matching models.

## 2. Slope converter — embedded in `/best/robot-mower-for-hills` (round 2)
- Converts % ↔ ° ↔ rise per 10 ft (rise = 10 ft × % ÷ 100; ° = atan(%/100)).
- "How to measure with a phone": level app on a straight board, or a 10 ft string line and tape.
- Compares the result with every current model's interior and boundary figures, labelled which is which.
- No-JS fallback: a printed table (10%, 15%, 20%, 25%, 30%, 35%, 45%, 50%, 60%, 70%, 80%, 84%, 100%).
- Every review's slope row links here.

## 3. Running-cost calculator — embedded in `/guides/robot-mower-cost-to-own` (round 4)
- Inputs: model family (current only), years (1–5), mowing season length (months).
- Lines: blades per season (from manuals), connectivity after the free period (costs.json), battery replacement where the brand publishes a price, garage/accessories optional.
- Electricity is shown only if computed from published battery Wh and documented assumptions; otherwise left out with a note.
- Every figure dated and sourced; anything not published is shown as "Not published", never guessed.
- **No Amazon prices.** Purchase price is shown only as a dated manufacturer list price, labeled MSRP, or left out.
- No-JS fallback: a 5-year table per family with the same figures.

## 4. Realistic-area estimator — inside `/guides/how-big-a-robot-mower-do-i-need` (round 4, optional)
- Rated area × documented adjustment factors for trees, zones and layout complexity, labeled as an estimate with the assumptions visible.
- Cites the manufacturer fine print it is built on (Husqvarna ±20% and irregular vs systematic; Navimow map limit 1.2×).
- Skip it if the assumptions can't be stated honestly; the guide still ships with the 1.25× rule.
