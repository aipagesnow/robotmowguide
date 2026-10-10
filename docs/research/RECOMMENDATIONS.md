# RobotMowGuide: ranked recommendations (format, CTA, tech, growth)

Changes and additions to the plan in `/workspace/robotmowguide/` (STYLE.md, docs/SITE_STRUCTURE.md, docs/PAGE_RECIPES.md, docs/SEO_AND_QUALITY.md, docs/AFFILIATE_COMPLIANCE.md, NEXT-PROMPTS.md). Evidence is in `FORMAT-RESEARCH.md` (§ refs); risks are in `RISKS.md`.

**Tags:**
- **MUST**: do it, or there's real ranking, compliance or conversion risk.
- **SHOULD**: a clear expected win.
- **COULD**: optional, or test it later.

**Effort:**
- S: under 2 h.
- M: half a day to a day.
- L: more than a day.

**Round** uses the NEXT-PROMPTS.md rounds (0 prep, 1 foundation, 2–4 content, 5 quality, 6 launch, 7+ post-launch).

## Top 10
| # | Recommendation | Tag | Effort | Round | Why (§) |
|---|---|---|---|---|---|
| 1 | **Build a "Which mower fits my yard?" finder** (4–6 inputs: area, steepest slope, trees, zones/passage width, wire tolerance; output 1–3 ladder models with why / what to watch / review + See on Amazon). Client island on a static page, works without JS as a decision table, no indexable result URLs. Embed a short version on home and /best; full version at `/tools/mower-finder`. | MUST | L | 2 (alpha), 4 (final) | Tools are main content; they're non-commodity, link-earning and task-completion. It's the strongest honest substitute for hands-on testing. §1.6, §2.7, §1.5 |
| 2 | **Add original-analysis blocks to every review and pick:** "Key numbers for your yard" (realistic area for a stated case, slope % / ° / rise per 10 ft, passage width, RTK type) and "What owners report" (counted, dated, linked threads; no first-person use claims). Add both to PAGE_RECIPES and the REVIEW-ADD template. | MUST | M per page; S template | 1 (template), 2–4 | The reviews system demotes spec summaries. These are the honest "original research" Google asks for. §1.2, §1.5, §1.6 |
| 3 | **Drop FAQPage JSON-LD everywhere; keep visible FAQs.** Update PAGE_RECIPES line 12, SEO_AND_QUALITY "Structured data", FCC_RULE_FACTS "Article + FAQPage". | MUST | S | 1 | FAQ rich results ended 7 May 2026 and the docs were removed. §2.8, §4.5 |
| 4 | **Put a quick-pick box + first CTA in the first two mobile screens** on /best (one line per yard type, with See on Amazon + jump link) and on reviews (move the primary CTA up under verdict + suits/skip; keep the end CTA block). vs pages get a top verdict table with two CTAs. | MUST | M | 1 | 74% of viewing time is in the first two screens (NN/g); the quick-pick box is the main affiliate conversion element. §2.1, §2.3–2.5, §3.3 |
| 5 | **Name a real human editor, or make the organization byline strong.** Best: a real person (Chris or whoever checks the facts) with a true bio, role, contact, and a ProfilePage-marked author page linked from `author.url`. If no one will be named, keep the organization author but add an "Edited and fact-checked by the RobotMowGuide desk at Aivora Digital" line plus a real contact route. Never invent a persona or use an AI headshot. | MUST (one of the two) | S–M | 1 | "Who" is a core trust question; fabricated profiles are deception. §1.3, §1.7, §6.1 |
| 6 | **Add a "How this page was researched" box** to every review, vs and /best page (sources count, manuals read, owner threads reviewed with date range, manufacturer questions asked, spec check date), plus an **AI-assistance disclosure** on /how-picks-are-chosen. | MUST | S template + S per page | 1 | Google's "How" question asks about AI disclosure; this replaces "how we tested" honestly. §1.3, §1.6 |
| 7 | **Ship launch content before Feb 2027 and do a full model refresh in Feb 2027** (2027 models, FCC status, superseded flags); updates only during Mar–May peak. Add to the routines. | MUST | M | 6–7 + routine | Pages need to be indexed and aged before the season; core updates often hit in March. §5.1, §5.6 |
| 8 | **Add the FCC-rule explainer and the running-cost calculator as link assets, with a PR push** (reporters, owner forums, Reddit answers with substance; no affiliate links in outreach). Consider moving the FCC explainer from round 4 to round 2–3 while it's newsworthy (rule dated 28 Jul 2026). | MUST (FCC), SHOULD (calc) | M + M | 2–3 (FCC), 4 (calc), 7 (PR) | Calculators and data earn links; the FCC rule is timely and US-specific. §5.4 |
| 9 | **Add a slope converter tool** (% ↔ ° ↔ rise per 10 ft; how to measure with a phone; compare to interior *and* boundary limits per model) embedded in `/guides/robot-mowers-for-slopes` and linked from every review's slope row. | SHOULD | M | 2 | Slope is the #1 confusing spec; the tool answers fan-out sub-questions for AI Overviews. §2.7, §4.8 |
| 10 | **Instrument CTA clicks by placement** (GA4 `affiliate_click` with asin / placement / page_type via beacon; optionally separate Amazon tracking IDs per placement type). No redirect routes. | MUST | S | 1 | You can't optimize CTA placement without data, and redirects risk the cloaking rule. §3.1, §3.6 |

## Further recommendations (ranked)
| # | Recommendation | Tag | Effort | Round | § |
|---|---|---|---|---|---|
| 11 | Specific CTA labels with the model name ("See Navimow X430 on Amazon") or an `aria-label` that includes the model. Keep "See on Amazon" as the visible short form in tables. | SHOULD | S | 1 | §3.3, §6.6 |
| 12 | Repeat a short disclosure next to CTA clusters on long pages ("Paid link — disclosure") and in any sticky bar. Consider the exact Agreement wording "As an Amazon Associate I earn from qualifying purchases" (the plan uses "we"; low risk, but "I" is verbatim). | SHOULD | S | 1 | §3.1, §3.2 |
| 13 | Sticky mobile CTA bar on **single reviews only**: appears after the first CTA leaves view, ≤56 px, dismissible, no CLS, disclosure link. Behind a flag; A/B it once there's traffic. Never on /best or guides. | COULD | M | 5 or 7 | §3.3 |
| 14 | Comparison tables: sticky header row (model names) and sticky first column on mobile, ≤5–6 columns visible, "Best for" row, CTA as the last row, real `<table>` with `<th scope>` and caption. Optional "show differences only" toggle on vs pages. | SHOULD | M | 1 | §2.1 |
| 15 | "What changed" changelog under the Updated date on every page; date bumps only for substantive changes (already a rule). Keep `dateModified` = visible date = sitemap `lastmod`. | SHOULD | S | 1 | §6.3 |
| 16 | **One review per model family** with a variant table (e.g. LUBA 3 AWD 1500/3000/5000; Navimow X4 series). Don't create sibling-SKU pages. Update the REVIEW-ADD rule. | MUST | S (rule) | 1 | §6.2 |
| 17 | Discontinued/superseded pattern: banner + successor link; remove the Amazon button when the ASIN is dead; move to "previous models"; keep the URL live; IndexNow ping; 301 only if no unique value. Add `status` (current / superseded / discontinued / not-importable) and `statusDate` to products.json. | SHOULD | M | 4–5 | §6.4 |
| 18 | Mark AI-generated photos with IPTC `DigitalSourceType: trainedAlgorithmicMedia`. Keep them decorative; give diagrams the information load. | SHOULD | S | 0–1 | §1.3, §4.2 |
| 19 | Search Console + Bing from launch: domain property, sitemaps, Bing import, URL Inspection requests for home, /best and the top 2 reviews; enable the GSC **Generative AI performance report** and Bing **AI Performance** in the Monday pulse. Leave the GSC Search generative AI control **on** (opt-in). | MUST | S | 6 | §4.6, §4.8, §5.3 |
| 20 | robots.txt: allow Googlebot, Bingbot, OAI-SearchBot, PerplexityBot, ClaudeBot-search. Make the training-bot choice (GPTBot, Google-Extended, CCBot) consciously; it doesn't affect search citations. | SHOULD | S | 1 | §4.8 |
| 21 | Downgrade llms.txt to "nice to have": keep the simple file, don't maintain per-page descriptions, and don't cite it as an AI-visibility tactic. | COULD (keep minimal) | S | 1 | §4.7 |
| 22 | Answer-first sentences under each H2 with the source and checked date inline (an extractable fact sentence). Exact US model names everywhere. | SHOULD | S per page | 1–5 | §4.8 |
| 23 | Spec-to-guide internal links: each spec row in a review links to the guide explaining it; each guide links to the tool and 2–4 ladder models. | SHOULD | S | 2–4 | §4.4 |
| 24 | Realistic-area estimator (rated area × trees/zones/complexity factors with documented assumptions, labeled an estimate) inside the size guide. | COULD | M | 3–4 | §2.7 |
| 25 | Public spec dataset (CSV of US models with checked dates, CC-BY) linked from /best and the method page. | COULD | S–M | 5–7 | §5.4 |
| 26 | Manufacturer Q&A: email US support/PR 3–5 decision questions per model and publish dated answers (quote, date asked, date answered). | SHOULD | M (ongoing) | 2–7 | §1.6, §5.4 |
| 27 | Reddit/forum participation as a real, disclosed person: answer first, link only to a tool or guide that adds value, follow each subreddit's link rules, never affiliate links, never multiple accounts. | SHOULD | ongoing | 7+ | §5.4 |
| 28 | YouTube diagram explainers (slope %, RTK vs vision vs LiDAR, measure your yard). Only if done well; no fake testing. | COULD | L | post-launch | §5.5 |
| 29 | Pinterest test with 5–10 diagram pins linking to guides (not to Amazon). | COULD | S–M | post-launch | §5.5 |
| 30 | Later: a manufacturer-store link beside the Amazon CTA (a multi-seller signal; survives Amazon delistings). | COULD | M | post-launch | §3.8 |
| 31 | Newsletter, if any: links to site pages only; **no Amazon links in email** (Policies, offline/email). Add to AFFILIATE_COMPLIANCE.md. | MUST (if email) | S | any | §3.1 |
| 32 | Accessibility pass in round 5: contrast check on Flag-pink + white and the blueprint palette (≥4.5:1), focus not obscured by sticky header/bar, finder `aria-live`, diagram text equivalents, link purpose. | MUST | M | 1 (build in), 5 (audit) | §6.6 |
| 33 | Portfolio separation: no shared templates, boilerplate or cross-links between Aivora sites; distinct design and author setup per site. | MUST | S (rule) | 0 | §1.4, §6.1 |
| 34 | `next/image` with `formats: ['image/avif','image/webp']`, `priority` on the hero, correct `sizes`; diagrams as inline SVG with `<title>`/`<desc>`; `web-vitals` RUM into GA4. | SHOULD | S | 1 | §4.1, §4.2 |
| 35 | Stay SSG; add ISR/on-demand revalidation only if Creators API prices are added later (then ≤24 h refresh). | SHOULD (keep) | — | — | §4.3 |

## Plan items that should change
| Current plan (file) | Change | Rec # |
|---|---|---|
| PAGE_RECIPES.md §shared: "FAQ block + FAQPage schema where a FAQ exists"; SEO_AND_QUALITY.md: "Article, FAQPage, BreadcrumbList…"; FCC_RULE_FACTS.md: "Article + FAQPage + BreadcrumbList" | Remove FAQPage; keep visible FAQ. | 3 |
| PAGE_RECIPES.md /best: direct answer → ladder → table → picks | Insert a quick-pick box with CTAs + jump links right after the direct answer; finder entry line; "Best for" row in the table. | 4, 14 |
| PAGE_RECIPES.md review: CTA block only at step 10 | Add the primary CTA after "who it suits / skip"; add "Key numbers for your yard", "What owners report", a "Status" line and a "How this page was researched" box. | 2, 4, 6 |
| PAGE_RECIPES.md vs: direct answer → diagram + table | Add a top verdict table with the 3–5 differing rows and two CTAs. | 4 |
| SITE_STRUCTURE.md: no tools | Add `/tools/mower-finder` (and embeds), the slope converter in the slopes guide, the cost calculator in running-costs; add a "Tools" entry to the nav once live. | 1, 9 |
| SITE_STRUCTURE.md: FCC explainer round 4 | Consider round 2–3 (timeliness, link asset). | 8 |
| PAGE_RECIPES.md: author = organization "not a fake person" | Keep the "no fake person" rule; prefer a real named editor with a ProfilePage author page, or strengthen the organization byline + contact. | 5 |
| SEO_AND_QUALITY.md: llms.txt with per-page descriptions | Keep it minimal; Google ignores it and 97% of llms.txt files get zero requests. | 21 |
| AFFILIATE_COMPLIANCE.md | Add: no redirect/`/go/` links (cloaking rule); no Amazon links in email/offline; no paraphrased Amazon star ratings; commission is 3% Lawn & Garden; a disclosure near CTA clusters. | 10, 12, 31 |
| REVIEW-ADD template | One page per model family; required owner-report tally + key-numbers block; a status field. | 2, 16, 17 |
| STYLE.md CTA "See on Amazon" | Keep; add a model-specific accessible name. Sticky bar rule: reviews only, optional. | 11, 13 |
| NEXT-PROMPTS.md round 6/7 | Add GSC gen-AI report + Bing AI Performance baseline; the Feb 2027 refresh as a scheduled routine. | 7, 19 |

## Things in the plan that are already right (keep)
- No prices, no Amazon star ratings, no Amazon images, no Review/Rating schema, no testing language.
- Real dates only; `lastmod` = `dateModified`.
- Direct answer up top; "who should skip it"; honest limits.
- Merging the comparison page into /best (avoids cannibalization).
- `rel="nofollow sponsored"`, disclosure before the first link.
- Static rendering; IndexNow (for Bing/Copilot); BreadcrumbList / Organization / WebSite schema.
- Sticky first column for mobile tables; 44 px tap targets.
- "Never link to unbuilt pages"; shape rotation in the REVIEW-ADD loop.
