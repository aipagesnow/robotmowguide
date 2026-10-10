# Page recipes

Shapes for each page type. Copy follows VOICE.md and AUDIENCE.md. Every page must give a real decision and carry at least one original artifact (a computed number, a diagram, an owner-report tally, a tool, or a dated manufacturer answer). If a page can't help someone choose, it doesn't ship.

Vary the order and section headings where the decision story differs. Review bodies must not read like one template filled in ten times; only the shared blocks below (meta row, disclosure, researched box, key numbers, owner reports) keep a fixed shape.

## Shared blocks

### Meta row (under H1, every page)
- **Byline:** "By the RobotMowGuide editors" linking to /about.
- **Fact-check line:** "Edited and fact-checked by the RobotMowGuide editors at Aivora Digital. Specs checked against manufacturer pages on {date}." The date comes from the data (the oldest `checked` date used on the page).
- **Updated {date}**, with a one-line **"What changed"** note under it (e.g. "Nov 2026: added the WR344 4WD variant"). Change the date only for substantive changes. Visible date = `dateModified` = sitemap `lastmod`.
- Disclosure line (VOICE.md) on any page with Amazon links, before the first link.

### Quick-pick box (/best and best-for pages)
Right after the direct answer, inside the first two mobile screens (390 px wide):
- 3–5 lines, one per yard type: "Up to 1 acre with slopes: Segway Navimow X430."
- Each line: model name linked to its review (jump link on /best), plus a CTA "See Navimow X430 on Amazon" (or the no-link line).
- One short finder entry line below: "Not sure? Answer five questions" → `/tools/mower-finder`.

### Key numbers for your yard (every review and every pick block)
A compact box computed from products.json, not prose:
- Rated area, and realistic area for a stated case (e.g. "with heavy trees and two zones, plan on about {rated ÷ 1.25} acres"). Label the case and the rule as ours.
- Slope in %, ° and rise per 10 ft, and **which figure it is** (interior or boundary). Link to the converter.
- Passage width needed (body width or published minimum gap), where published.
- Navigation type in plain words (antenna RTK, network RTK, LiDAR, vision, wire) and what it needs (sky view, cell coverage, nothing external).
- Connectivity after the free period, where published.
Any figure that is `n/s` is shown as "Not published" with no guess.

### What owners report (every review and every pick block)
- 2–4 themes from `ownerReports` in products.json, each with a link to the thread(s) and the month read.
- Counted honestly ("in the threads we read between Jun and Oct 2026, several owners said…"). Never percentages, never "fails often".
- Balance praise and complaints. If too few reports exist, say so in one sentence.
- No first-person use claims, no quoting Amazon reviews, no Amazon star ratings, no paraphrased ratings.

### How this page was researched (every review, vs and /best page)
A small box near the end, with real numbers from the build: sources consulted (count, linked in the Sources list), manuals read, owner threads read and their date range, manufacturer questions asked and answered (when any), spec check date. Links to /how-picks-are-chosen. No testing language.

### Status line (every review and every pick)
"Status: on sale in the US as of {statusDate}" or the superseded/discontinued wording (VOICE.md). Includes the FCC line when relevant: "Already FCC-authorized; eligible for updates until at least Jan 1, 2029."

### CTA rules
- Labels: "See {model} on Amazon" in pick blocks and verdicts; "See on Amazon" only in tight table cells, with an `aria-label` that names the model.
- Budget: review 2–4 Amazon links; /best about 1 per pick + quick-pick + table row (10–15 total); guides only where a model is recommended; vs pages 4 (two at the top, two at the end).
- A short disclosure repeat ("Paid links: see disclosure") next to every CTA cluster on long pages.
- Null ASIN: the no-link line (VOICE.md) instead of the button. Discontinued: no button.
- Direct `amazon.com/dp/{ASIN}?tag=` links only, built from `AMAZON_ASSOCIATE_TAG`. Never a redirect route.
- Optional, behind a flag, round 5 or later: a slim sticky CTA bar on single reviews only (≤56 px, dismissible, appears after the first CTA leaves view, includes the disclosure link, no layout shift). Never on /best, best-for pages or guides.

### Every page
- H1 that matches the question people search. Answer-first: the first sentence under each H2 states the fact, with its source and checked date inline where it is a spec.
- Breadcrumbs (visible) + BreadcrumbList schema on nested pages.
- Article schema with `datePublished`, `dateModified`, `author` = Organization "RobotMowGuide editors" (url: /about), `publisher` = Organization Aivora Digital. If Chris later becomes the named editor, switch `author` to a Person with a ProfilePage author page.
- Visible FAQ (2–5 real questions from BUYER-QUESTIONS.md phrasing). **No FAQPage schema** (Google stopped showing FAQ rich results on May 7, 2026).
- Related links block (descriptive anchors).
- **Never:** Review, AggregateRating, Rating, Product/Offer schema; star ratings or scores; "how we tested", testing notes; Amazon prices; Amazon images.

## /best (pillar)
1. H1 "Best robot lawn mowers for US yards". Meta row. Disclosure.
2. Direct answer (2–3 sentences).
3. Quick-pick box + finder entry line.
4. "On this page" jump list (collapsible on mobile).
5. Ladder drawing (rated area × max slope) with picks highlighted; text equivalent below.
6. Comparison table: model, best for, rated area (ac + sq ft), max slope (% and °, interior/boundary), navigation, cutting height, edge approach, CTA as the last row. Real `<table>` with caption and `<th scope>`; sticky header and first column on mobile; at most 5–6 columns visible.
7. Picks (about 5): role sentence, key numbers box, why, who it's not for (from `notFor`), what owners report, what changed since the last model, status line, CTA.
8. How to choose in five steps linking to the guides and tools.
9. FAQ. Researched box. Sources.

## Best-for page (/best/…)
Same shape as /best, scoped to one decision. Lead with the decision logic that only this page has (area maths, slope converter, canopy diagram, grass height chart), then the picks. 3–5 picks; include a "doesn't fit" note for popular models that fail the test (e.g. eufy says the E15 isn't suitable for St. Augustine).

## Review (one per model family)
1. H1 "{Family} review: {the yard it suits}". Meta row. Disclosure. Status line.
2. Verdict in two full sentences.
3. Who it suits / who it's not for (from `notFor` and the owner themes).
4. **Primary CTA** for the primary variant (or the no-link line). This must sit inside the first two mobile screens.
5. Key numbers for your yard.
6. Variant table: every variant with rated area, slope, the differences that matter, status, and its own CTA or no-link line.
7. Spec table of decision figures, each with source link and checked date; each row links to its guide or tool.
8. What the numbers mean for your yard (size, slope, trees, zones and passages, edges, grass height). Vary the order by what matters most for this model.
9. What owners report.
10. Honest limits (required).
11. Running costs and connectivity; support outlook (FCC waiver to at least Jan 1, 2029; brand's Conditional Approval status).
12. Two alternatives (ladder neighbors), each with a sentence on why.
13. FAQ. Researched box.
14. End CTA block (primary + the two alternatives). Sources.

## Head-to-head (/vs)
1. H1 "{A} vs {B}". Meta row. Disclosure.
2. Direct answer: which yard suits which model.
3. **Verdict table** of the 3–5 rows where they differ, with a "Better for" column, and two CTAs side by side under it.
4. Sections on real differences only. Optional "show differences only" toggle on the full table.
5. "Choose {A} if…" / "Choose {B} if…" in full sentences.
6. What owners report for each. FAQ. Researched box. Two CTAs again. Links to both reviews and /best.

## Decision guide
1. H1 phrased as the buyer's question. Meta row. Disclosure if Amazon links appear.
2. Direct answer, and a "short answer" table where the concept allows (e.g. slope % → ° → rise per 10 ft → which models).
3. The diagram (IMAGES.md) with a full text equivalent.
4. Embedded tool where one exists (slope converter, area estimator, cost calculator).
5. Explanation in plain steps with US examples from AUDIENCE.md.
6. "What this means when you choose" with 2–4 ladder models (linked reviews).
7. FAQ. Related guides.

## FCC tracker (/guides/fcc-robot-mower-ban)
Built as a tracker, not a news post: "Last checked {date}" at the top; a short answer ("You can still buy and use mowers already on sale; new foreign-made models need approval"); what the rule says; a dated Conditional Approvals table; brand-by-brand status table; how to check an FCC ID; what it means for updates (Jan 1, 2029); open questions; changelog. Facts only from docs/FCC_RULE_FACTS.md. Re-check monthly and on every FCC table change, then ping IndexNow.

## Tools
See docs/TOOLS.md. Tool pages and embeds follow the decision-guide shape around the tool.

## Superseded and discontinued models
- Superseded but still sold: banner "Replaced by {successor} in {month year}: here's what changed", keep the CTA while the ASIN is live, add the successor CTA.
- Discontinued: keep the page live, remove the Amazon button, link the successor and ladder neighbors, move it to "Previous models" on /reviews and out of /best lists, ping IndexNow. 301 only if the page has no unique value. Never 404 a page with links.
- Not importable under the FCC rule: "No longer importable; existing stock only, as of {date}."

## Trust pages
Plain, specific, written for this site only.
- /about: Aivora Digital as publisher; why the site exists; that reviews are research-based and the mowers have not been tested; the "RobotMowGuide editors" byline means the people at Aivora Digital who research and check each page; a real contact route; when the site started.
- /how-picks-are-chosen: sources, the ladder and the 1.25× rule, how owner reports are gathered and counted, why there are no star ratings, the 90-day re-check, corrections, and the AI-assistance disclosure: "Drafts are written with AI assistance. A person checks every figure against the linked source before a page is published or updated." Plus a sentence on images: yard photos are AI-generated scenes, not photos of tested mowers; diagrams are our own.
