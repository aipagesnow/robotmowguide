# Page recipes

Shapes for each page type. Copy follows VOICE.md and AUDIENCE.md. Every page must give a real decision: if a page can't help someone choose, it doesn't ship.

## Common to every page
- H1 that matches the question people search.
- Meta row under H1: updated date (real content change date), reading time optional.
- Disclosure line before the first Amazon link (VOICE.md wording) on any page with Amazon links.
- Direct answer in the first 100 words.
- Breadcrumbs (visible) + BreadcrumbList schema on nested pages.
- Article schema with `datePublished`, `dateModified`, `author` and `publisher` as the organization (Aivora Digital / RobotMowGuide), not a fake person.
- FAQ block (2–5 questions with real answers) + FAQPage schema where a FAQ exists.
- Related links block (descriptive anchors).
- **Never:** Review, AggregateRating, Rating or Offer/Product-with-price schema; star ratings; scores; "how we tested"; testing notes; prices on product pages.

## /best (pillar, ladder-led)
1. H1 "Best robot lawn mowers for US yards" (or close). Meta row. Disclosure line.
2. Direct answer: 2–3 sentences naming the pick for small, mid and large/steep yards.
3. The ladder drawing (rated area × max slope) with the picks highlighted.
4. Comparison table (merged from the old comparison page): model, rated area (ac + sq ft), max slope (% and °), navigation, wire-free or wire, cutting height range, edge approach, "See on Amazon" (or the no-link line). No ratings column, no price column.
5. Picks (about 5), each: role in one plain sentence, why (from specs, with the key figure explained), who should skip it, one honest limit, link to the review (if live), See on Amazon.
6. How to choose in 5 short steps linking to guides (size, slope, trees, zones, wire).
7. How picks are chosen: two sentences and a link to the method page.
8. FAQ.

## Review (single model)
1. H1 "[Exact model] review: [the yard it suits]" or similar. Meta row. Disclosure line.
2. One-line verdict in a full sentence (explain, don't announce).
3. Who it suits / who should skip it (plain sentences, not stamped headers).
4. Spec plate diagram and a spec table of the figures that change the decision, each with source link and checked date.
5. What the numbers mean for your yard: size (rated vs real), slope, trees/navigation, zones and passages, edges, grass height.
6. Honest limits (required).
7. Running costs and connectivity notes (free periods, optional modules).
8. Two alternatives on this site (ladder neighbors) with a sentence on why you'd pick each.
9. FAQ (2–4).
10. CTA block: primary See on Amazon + two alternative CTAs (generated links). If ASIN is null: the no-link line instead of the primary button.
11. Sources list.

## Head-to-head (/vs)
1. H1 "[A] vs [B]". Meta row. Disclosure line.
2. Direct answer: which yard suits which model, in 2–3 sentences.
3. Side-by-side diagram + table (same columns as /best).
4. Sections on the real differences only (navigation, slope, size, edges, connectivity, setup). Skip specs that are the same.
5. "Choose A if…" / "Choose B if…" written as full sentences.
6. FAQ. Links to both reviews and /best.

## Decision guide
1. H1 phrased as the buyer's question. Meta row. Disclosure line if Amazon links appear.
2. Direct answer.
3. Diagram that explains the concept (IMAGES.md).
4. Explanation in plain steps, with US examples from AUDIENCE.md.
5. "What this means when you choose a mower" with 2–4 product examples from the ladder (linked reviews).
6. FAQ. Related guides.

## Trust pages
Plain, specific, written for this site only. The method page states, in normal words, that the site does not test mowers and how it decides instead. The About page names the business and says when the site started. No stock "our team of experts" language.
