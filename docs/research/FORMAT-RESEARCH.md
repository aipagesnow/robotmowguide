# RobotMowGuide: format, ranking and conversion research (Oct 2026)

Research date: Sat 10 Oct 2026 (Europe/London). Scope: site format, page layouts, CTA/CTR practice, technical SEO, growth and risk for robotmowguide.com, a new US Amazon-affiliate guide to robot mowers built in Next.js. This work does **not** cover models, owner voice or competitors; those are in `/workspace/robotmowguide-research/` (MODELS.md, FCC-RULE.md and the other worker's files).

Companion files: `RECOMMENDATIONS.md` (ranked changes to the plan) and `RISKS.md`. Raw fetched source text is in `_src/` (one `.txt` per source) so every quote can be checked.

## How to read the evidence tags
| Tag | Meaning |
|---|---|
| **[E1]** | Primary source: Google Search Central docs or blog, the Google Search Status Dashboard, Bing Webmaster docs or blog, the Amazon Associates Operating Agreement or Program Policies, FTC, Next.js docs, web.dev. Read on 10 Oct 2026. |
| **[E2]** | Large independent study with a stated method (Pew, Ahrefs, NN/g eyetracking, UsableNet). |
| **[E3]** | Practitioner analysis, vendor data or a single A/B test. Directional only. |
| **[O]** | Opinion or inference: mine, or a practitioner's view. Treat it as a judgement call, not a fact. |

A warning about the 2025–2026 core update write-ups: the same "71% of affiliate sites were hit" figure shows up in analyses of the December 2025, March 2026 and May 2026 updates (ALM Corp, growingsearch, relevantaudience, monstermegs, and many X posts). A figure that repeats exactly across three different updates is almost certainly recycled. Practitioners have mocked the pattern too ([@tehseowner on X, 27 Apr 2026](https://x.com/tehseowner/status/2048576936515940540): "it's pretty much just a coin toss"). I use those write-ups only for qualitative patterns, and only when better sources (SISTRIX, Aleyda Solis, Amsive/Lily Ray, Glenn Gabe) back them up.

---

## 1. What Google rewards and punishes for affiliate review sites, 2025–2026

### 1.1 The update timeline [E1]
From the [Google Search Status Dashboard, Ranking history](https://status.search.google.com/products/rGHU1u87FJnkP6W2GwMi/history) (`_src/ranking-history.txt`):

| Start (US/Pacific) | Update | Duration |
|---|---|---|
| 13 Mar 2025 | March 2025 core update | 13 d 21 h |
| 30 Jun 2025 | June 2025 core update | 16 d 18 h |
| 26 Aug 2025 | August 2025 spam update | 26 d 15 h |
| 11 Dec 2025 | December 2025 core update | 18 d 2 h |
| 5 Feb 2026 | February 2026 Discover update | 21 d 17 h |
| 24 Mar 2026 | March 2026 spam update | 19 h 30 m |
| 27 Mar 2026 | March 2026 core update | 12 d 4 h |
| 21 May 2026 | May 2026 core update | 11 d 21 h |
| 24 Jun 2026 | June 2026 spam update | 2 d 1 h |
| 18 Aug 2026 | August 2026 spam update | 2 d 16 h |
| 24 Sep 2026 | September 2026 spam update | 13 d 16 h |

There has been **no standalone "reviews update" since November 2023**. The reviews system "is improved at a regular and ongoing pace" ([reviews system doc](https://developers.google.com/search/docs/appearance/reviews-system)), and the helpful content system was folded into core ranking in March 2024 ([ranking systems guide](https://developers.google.com/search/docs/appearance/ranking-systems-guide), "Retired systems"). In practice, the product-review and helpful-content standards now arrive through core updates (2–3 a year) and spam updates (3–4 a year). **[E1]** Expect at least one core update during spring 2027, which is the site's first real season. **[O]**

### 1.2 The reviews system and Google's review guidance [E1]
The [reviews system](https://developers.google.com/search/docs/appearance/reviews-system) rewards "insightful analysis and original research… written by experts or enthusiasts who know the topic well… rather than thin content that simply summarizes a bunch of products". It covers single reviews, head-to-heads and ranked lists. It works mainly page by page, but "for sites that have a substantial amount of review content, any content within a site might be evaluated."

[Write high quality reviews](https://developers.google.com/search/docs/specialty/ecommerce/write-high-quality-reviews) (updated 10 Dec 2025) lists the best practices. Here is each one, and whether a site that does no testing can honestly meet it:

| Google best practice | Honest for a non-tester? | How RobotMowGuide can do it |
|---|---|---|
| Evaluate from a user's perspective | Yes | The ladder is organized around the yard (size, slope, trees, zones). |
| Demonstrate you are knowledgeable | Yes | Explain RTK and LiDAR, boundary vs interior slope, and rated vs real area. |
| Provide evidence of your own experience | **No**, not as first-hand use | Don't fake it. Substitute documented research evidence: linked manuals, spec sources with checked dates, owner reports with links, and manufacturer answers to emailed questions. |
| Share quantitative measurements | Partly | Computed measurements: area after zones and trees, slope in degrees and rise per 10 ft, deck vs passage width. |
| Explain what sets it apart | Yes | Ladder neighbors, plus a "what's different" paragraph on each review. |
| Comparable things / best for which use | Yes | "Who it suits / who should skip it", plus the vs pages. |
| Benefits and drawbacks from your own original research | Yes, if the research is genuinely original | Owner-report tallies, manual-based limits, manufacturer Q&A. |
| How it evolved from earlier models | Yes | Generation notes (LUBA 2 → 3, A1/A2 → A3, i105 → i206). MODELS.md already found these. |
| Focus on the key decision factors | Yes | This is the core of the ladder concept. |
| Design choices and effects beyond the maker's claims | Partly | Manuals and owner reports: edge gaps, boundary slope limits, 4G after free periods. |
| Link to other useful resources | Yes | Sources, manuals, independent long-term reviews. |
| Consider links to multiple sellers | Later | Amazon-only at launch. See §3.8. |
| "Best for X" with first-hand evidence | **Weakest point** | Base each pick on a stated, reproducible rule plus documented owner evidence. Never claim use. |
| Ranked lists must stand on their own | Yes | /best has to give enough per pick, not just links. |

What this means: a non-testing site can honestly meet about 10 of the 14 practices. It misses first-hand evidence and first-hand "best" justification, which are exactly what Google emphasizes most. **[O]** Fill that gap with things testers usually don't do well: decision tools, rigorous spec normalization, owner-report synthesis and fresh status tracking.

### 1.3 Helpful content, E-E-A-T and authorship [E1]
From [Creating helpful, reliable, people-first content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content) (`_src/helpful.txt`):
- Self-assessment: "Does the content provide original information, reporting, research, or analysis?"; "If the content draws on other sources, does it avoid simply copying or rewriting those sources, and instead provide substantial additional value and originality?"; "Does your content clearly demonstrate first-hand expertise… (for example, expertise that comes from having actually used a product…)".
- Warning signs: "extensive automation to produce content on many topics"; "mainly summarizing what others have to say"; "writing to a particular word count… (No, we don't [have one])"; "changing the date of pages to make them seem fresh when the content has not substantially changed"; entering a niche "without any real expertise… mainly because you thought you'd get search traffic".
- **E-E-A-T:** "trust is most important… content doesn't necessarily have to demonstrate all of them… some content might be helpful based on the experience it demonstrates, while other content might be helpful because of the expertise it shares." That is the official basis for an expertise-led site that doesn't test.
- **Main content explicitly includes "Interactive features: Built-in functionality such as calculators, online tools…"**
- **Who:** "Do pages carry a byline, where one might be expected? Do bylines lead to further information about the author…?" Also: "Fabricating creator profiles (such as by using AI-generated headshots, made-up names, or false credentials…) is a form of deception."
- **How:** For reviews, readers trust "the number of products that were tested, what the test results were, and how the tests were conducted." For automation: "Is the use of automation, including AI-generation, self-evident to visitors through disclosures…? … AI or automation disclosures are useful for content where someone might think 'How was this created?'"
- **Why:** "If you use automation, including AI-generation, to produce content for the primary purpose of manipulating search rankings, that's a violation of our spam policies."

[Using generative AI content](https://developers.google.com/search/docs/fundamentals/using-gen-ai-content) (updated 1 Oct 2026): "It is critical to manually factcheck and review all AI-generated content… This review also applies to metadata like `<title>` elements, meta description elements, structured data, and alternate texts for images." It points to rater guideline sections 4.6.5 (scaled content abuse) and 4.6.6 (little effort, originality or added value), and suggests image metadata for AI imagery (IPTC `DigitalSourceType` `TrainedAlgorithmicMedia` is mandatory only in Merchant Center, but it's the stated mechanism). **[E1]** The current [Quality Rater Guidelines](https://static.googleusercontent.com/media/guidelines.raterhub.com/en/en/searchqualityevaluatorguidelines.pdf) edition is 11 Sep 2025. I found no 2026 revision.

### 1.4 Spam policies that touch this site [E1]
From [Spam policies for Google web search](https://developers.google.com/search/docs/essentials/spam-policies):
- **Scaled content abuse:** "many pages are generated for the primary purpose of manipulating search rankings… no matter how it's created", including "Using generative AI tools… to generate many pages without adding value", "Stitching or combining content from different web pages without adding value", and "**Creating multiple sites with the intent of hiding the scaled nature of the content**". That last point matters for a portfolio operator. See RISKS R3.
- **Thin affiliation:** content "copied directly from the original merchant without any original content or added value", and "cookie-cutter sites or templates with the same or similar content replicated within the same site or across multiple domains". Good affiliates offer "original product reviews, rigorous testing and ratings, navigation of products or categories, and product comparisons."
- **Doorway abuse:** "substantially similar pages that are closer to search results than a clearly defined, browseable hierarchy." That rules out per-state pages and an indexable page for every finder result.
- **Site reputation abuse:** this concerns third-party content riding a host's signals, so it doesn't apply to a single-publisher site unless guest or sponsored content is accepted. It lists "Using affiliate links throughout a page, with links treated appropriately" as **not** a violation. EEA enforcement changed on 28 Aug 2026 ([changelog](https://developers.google.com/search/updates)).
- **New in 2026** ([changelog](https://developers.google.com/search/updates), `_src/docs-updates.txt`):
  - 13 Apr: **back button hijacking** became a spam policy.
  - 14–23 Apr: Google **may use spam reports to take manual action**.
  - 15 May: spam policies explicitly apply to **generative AI responses**.
- **Link spam:** "Excessive link exchanges… or partner pages exclusively for the sake of cross-linking." This bears directly on cross-links between Aivora sites. Paid or affiliate links must be `sponsored`/`nofollow`, which is already planned.

### 1.5 What the 2025–2026 core updates rewarded (analyses) [E3, with caveats]
- **December 2025:** Amsive: "eCommerce and retail brands emerged as some of the biggest winners," while Wikipedia, health and news lost ([Amsive](https://www.amsive.com/insights/seo/googles-december-2025-core-update-winners-losers-analysis/)). SE Ranking: "nearly 15% of pages that ranked in the Top 10 before the update disappeared entirely from the Top 100" ([via SEOptimer](https://www.seoptimer.com/blog/december-2025-core-update/)). Write-ups say affiliate pages built on "manufacturer specifications, rewritten descriptions, or summaries pulled from other reviews" lost. That is this site's default risk.
- **March and May 2026:** SISTRIX and Aleyda Solis's tracking, as reported by [rexultz](https://rexultz.com/blog/may-2026-core-update-affiliate-sites/) and [techseo.es](https://www.techseo.es/en/blog/google-may-2026-core-update), found:
  - SISTRIX: "authority and editorial quality are the consistent winners";
  - "derivative layer" tools that repackage others' data fell hardest (YouGlish −69.6%, GoodRx −80% UK);
  - canonical references and task-completion sites gained;
  - "domains showing the wrong market to the wrong searcher (US .com sites turning up in the UK index…) fell 55 to 59%";
  - forums fell (Reddit −23.8%, Quora −31.3% in the UK sample).
  - [Licheo](https://www.licheo.com/blog/google-may-2026-core-update-what-to-do/): comparison pages "without independent testing methodology… exposed again."
- **Discover (May 2026):** Glenn Gabe spotted Google asking users whether content "feels too focused on selling products/services" ([X](https://x.com/glenngabe/status/2059244903813591111)). It's evidence that sales-heavy presentation is measured. **[E3]**
- **Counter-evidence:** Aleyda Solis: RunRepeat, Pack Hacker and CleverHiker are "still growing YoY, even though AI Overviews now appear on 81–95% of their top non-branded queries" ([X](https://x.com/aleyda/status/2074965088956538940)). All three are testers with unique data. **[E3]**

My synthesis **[O]**: a spec-only site gets read as a "derivative layer" unless it becomes the best source for something. The candidates are:
1. **Normalized, dated spec data** (boundary vs interior slope, rated vs realistic area, passage vs body width, network vs antenna RTK).
2. **Decision tools**.
3. **Status tracking** (superseded models, FCC status, subscriptions after free periods).
4. **Owner-report synthesis with counts and links**.

### 1.6 E-E-A-T without hands-on testing: what's honest and what helps
Google allows expertise-led helpfulness (§1.3) and asks for "**non-commodity content**", meaning "unique expert or experienced takes that go beyond common knowledge". It warns against content that "could easily be produced by a generative AI model" ([AI optimization guide](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide), 15 May 2026). **[E1]**

| Signal | Honest? | Evidence | Notes |
|---|---|---|---|
| Sourced specs with links and checked dates (planned) | Yes | [E1] "clear sourcing"; Bing: "Ensure content can be verified independently" ([Bing guidelines](https://www.bing.com/webmasters/help/webmaster-guidelines-30fba23a)) | Show the source next to each figure. |
| Spec normalization (units, boundary vs interior slope, degrees, rise per 10 ft) | Yes | [O] original analysis, "beyond the obvious" | Turns copied specs into added value. |
| Owner-report synthesis: tallies from public threads, with links, sample size and date range | Yes, if every claim is attributed | [E1] original research; FTC: "You can't talk about your experience with a product if you haven't tried it" ([FTC FAQ](https://www.ftc.gov/business-guidance/resources/ftcs-endorsement-guides)) | "In 38 owner threads, Mar–Sep 2026, the most-reported problem was…". Never "we found". Short quotes, linked. |
| Manufacturer Q&A: email US support or PR and publish dated answers | Yes | [O] original reporting | Cheap, honest, quotable. Record asked and answered dates. |
| Original diagrams | Yes | [E1] Google: "Add high-quality images"; Bing: images "reinforce the primary text" | Planned. Give each diagram a text equivalent. |
| Calculators and finders | Yes | [E1] main content; [E2/E3] top link-earning formats ([BuzzSumo](https://buzzsumo.com/blog/magical-content-gets-links-shares-new-research-buzzsumo-majestic/), [Backlinko](https://backlinko.com/content-study)) | §2.6. |
| A real, named editor with a true bio | Yes, if the person is real | [E1] bylines "where one might be expected"; fabricated personas are deception | Plan uses an organization byline. See R3. |
| "How this page was researched" box | Yes | [E1] the "How" question; [E3] "methodology layer" | Replaces "how we tested". |
| AI-assistance disclosure on the method page | Yes | [E1] "How was this created?" | Short, with the human checks named. |
| Links out to independent hands-on reviews | Yes | [E1] "links to other useful resources" | Summarize their consensus with attribution. |

What not to do: testing language, invented "team", AI headshots, "tested" badges, or Amazon star ratings (which Amazon forbids anyway, §3.1). **[E1]**

### 1.7 Author pages and new-domain realities
**Author markup [E1]:** [Article structured data](https://developers.google.com/search/docs/appearance/structured-data/article) recommends `author` with `@type` and `url`. A person links to a bio page; an organization links to its home page. Put only the name in `author.name`. An internal author page should use [ProfilePage](https://developers.google.com/search/docs/appearance/structured-data/profile-page) markup. An organization author is valid markup. A real person is a stronger "Who" signal, but only if real.

**Sandbox [E1/E3]:** Google has never confirmed one. Mueller describes Google estimating signals for new sites and adjusting them as data arrives ([SEJ](https://www.searchenginejournal.com/google-new-site-ranking-algorithm/345342/)). The spam policy text says Google "generally applies a presumption that individual pages (including new pages) match the overall quality of other pages on the domain" **[E1]**, so the first 20–30 pages set the domain's baseline.

**Timelines [E2]:** Ahrefs (May 2025, 1M random URLs from Sep 2023): "Only 1.74% of newly published pages rank in the top 10 within a year"; for non-empty English pages, 6.11%. "72.9% of pages in Google's top 10 are more than 3 years old"; "average #1 ranking page is 5 years old"; "After ~6 months, you may want to look at updating your content" ([Ahrefs](https://ahrefs.com/blog/how-long-does-it-take-to-rank-in-google-and-how-old-are-top-ranking-pages/)).

**AI Overview citations don't need top-10 rankings [E2]:** Ahrefs (Mar 2026, 863K SERPs, 4M AI Overview URLs): only ~37–38% of cited pages rank in the top 10; ~26% rank 11–100 and ~37% don't rank in the top 100, because citations come from "fan out query SERPs" ([Ahrefs](https://ahrefs.com/blog/ai-overview-citations-top-10/)). That's an opening for a new domain that answers precise sub-questions well ("what does 45% slope mean", "can RTK work under trees", "gate width for a LUBA"). **[O, from E2]**

---

## 2. Page formats that rank and convert

### 2.1 What the evidence says about attention and layout
- **The fold still matters, but people scroll.** NN/g eyetracking: "users spent about 57% of their page-viewing time above the fold. 74% of the viewing time was spent in the first two screenfuls" ([NN/g, Scrolling and attention](https://www.nngroup.com/articles/scrolling-and-attention/)). **[E2]** The answer, the pick and the first CTA belong in the first two mobile screens. The full table can come after.
- **Comparison tables:** NN/g says "consistent content, scannability, and a simple layout are some of the most important qualities of successful comparison tables" ([Comparison tables](https://www.nngroup.com/articles/comparison-tables/), Feb 2024). Their advice: limit to about 5 products, keep row labels consistent, put the most decision-relevant rows first, give a "highlight differences" option, and make the column headers (product names) sticky on long tables. **[E2]**
- **Tables on mobile:** NN/g ([Mobile tables](https://www.nngroup.com/articles/mobile-tables/)) recommends freezing the first column (the row labels) when scrolling horizontally, or turning each product into a card. Keep the scroll inside the table. **[E2]** The plan already says "sticky first column on mobile" (STYLE.md §5). That fits.
- **State the difference explicitly:** NN/g: "Explicitly state the difference between options… users shouldn't have to figure out the differences themselves" ([NN/g](https://www.nngroup.com/articles/explicit-differences/), Aug 2024). **[E2]** The plan's "choose A if…" lines and "who should skip it" match this.

### 2.2 Ideal length and depth
Google: "there's no preferred word count" and "writing to a particular word count" is a warning sign ([helpful content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)). **[E1]** Practitioner correlation studies (Backlinko, SEMrush) link longer pages to more links, not to higher rankings as such. **[E3]** The working rule **[O]**: length should follow the decision. Rough ranges:
- /best: 2,500–4,000 words including the table.
- Review: 1,500–2,500.
- vs page: 1,200–2,000.
- Guide: 1,200–2,500.
- Tool page: 300–800 words of explanation around the tool.

The cap is "nothing the reader would skip". The bigger risk for this site is near-duplicate review bodies (§6.2), not length.

### 2.3 /best (pillar), recommended order
1. H1, meta row (updated date, "researched by", sources count), disclosure line.
2. **Direct answer + quick-pick box** with 3–5 lines, one per yard type: "Small, flat yard under ¼ acre: X. Up to 1 acre with slopes: Y. Lots of trees: Z." Each line gets a "See on Amazon" link and a jump link to its pick. This is the main above-the-fold conversion element on affiliate pillars **[E3: Wirecutter, RTINGS, Outdoor Gear Lab pattern; Lasso/affiliate CRO write-ups]**, and it also gives AI answers a clean extractable summary **[E1: Bing "clear, extractable answers"]**.
3. **Fit finder entry**: one line, "Not sure? Answer 4 questions" (§2.7).
4. Jump-link list (pick names + "Compare all" + "How to choose").
5. The ladder drawing.
6. Comparison table (plan as is, plus a "Best for" row, sticky header with model names, and CTA in the last row).
7. Picks with the planned structure. Add "**What owners report**" (2–3 attributed points with links) and "**What changed since the last model**".
8. How to choose, FAQ (visible, no FAQPage schema; §4.5), method summary, sources.

### 2.4 Single review
The plan order works. Changes:
- Move the **primary CTA up** under the verdict and suits/skip (so it's in the first two screens), and keep the final CTA block too. That makes 2–3 Amazon links per review.
- Add a **"Key numbers for your yard" box**: rated area → realistic area for a stated tree/zone case, slope in % / ° / rise per 10 ft, passage width needed, and RTK type. Spec-only rivals rarely do this, so it's the unique-value element. **[O]**
- Add **"What owners report"** (counted and linked; §1.6) and a **"Status" line** (current / superseded / FCC-authorized as of a date).
- Keep "Honest limits" as a required section.

### 2.5 X vs Y
The plan order works. Add:
- a **verdict table at the top** with 3–5 rows where they differ, and a "Better for" column;
- **two CTAs side by side** under the direct answer and again at the end.

Name pairs the way people search them ("Navimow X430 vs LUBA 3"), but only pairs with real search demand. vs pages are ideal fan-out targets for AI Overviews (§4.8). **[O]**

### 2.6 Decision guides
The plan order works. Add a **"Short answer" table** where the concept allows it (slope % → degrees → rise per 10 ft → which models). Let **guides embed the relevant tool** (the slope converter in the slope guide, the area estimator in the size guide). The diagram should have a full text equivalent. **[E1: Bing — images reinforce text; WCAG 1.1.1]**

### 2.7 Interactive tools (not in the current plan)
Evidence that tools help:
- Google counts calculators and tools as main content. **[E1]**
- Tools and data are reliably among the formats that earn the most links ([BuzzSumo × Majestic](https://buzzsumo.com/blog/magical-content-gets-links-shares-new-research-buzzsumo-majestic/); [Backlinko content study](https://backlinko.com/content-study)). **[E2/E3]**
- Task-completion pages gained in the 2026 updates (§1.5). **[E3]**
- A tool can't be "easily produced by a generative AI model", which is the non-commodity test. **[O]**

Recommended tools, all client-side on static pages:
1. **"Which mower fits my yard?" finder** (`/tools/mower-finder` or embedded in /best and home). Inputs: lawn area (sq ft or acres, with a lot-size helper), steepest slope (%, °, or "rise over 10 ft"), tree cover (open / some / heavy), separate zones (yes/no + passage width), budget band (optional, no prices shown), wire tolerance. Output: 1–3 ladder models with *why* and *what to watch*, each linking to the review + See on Amazon. Results should **not** generate indexable URLs; use query state with `noindex` or no route at all (doorway policy, §1.4).
2. **Slope converter + "can it climb my yard"** (% ↔ ° ↔ rise per 10 ft; measuring with a phone or level; compare to each model's interior *and* boundary limit).
3. **Realistic area estimator**: rated area × adjustments for trees, zones and complexity. Show the assumptions and label it an estimate. **[O]** This needs its own documented methodology to stay honest.
4. **Running-cost calculator** (round 4; dated figures from costs.json: blades per season, 4G after free period, battery replacement amortized). This is the best PR/link asset alongside the FCC explainer.

**Finder UX [E2/E3/O]:**
- At most 4–6 questions with sensible defaults.
- Show the result on the same page without a reload.
- Explain the match.
- Always give a "nothing fits" outcome.
- Work without JavaScript as a static decision table (progressive enhancement, which also keeps it crawlable).
- Accessible labels.
- No email gate. Amazon forbids using links in email anyway (§3.1).

### 2.8 FAQs
Google retired the FAQ rich result: no longer shown from 7 May 2026, and the documentation was removed ([changelog](https://developers.google.com/search/updates)). **[E1]** Visible FAQs still serve readers, featured snippets and AI answer extraction. **[E1: Bing — Q&A and headings help grounding]** So keep 2–5 *real* questions per page, phrased the way people ask them (People Also Ask, Reddit, BUYER-QUESTIONS.md), and drop FAQPage JSON-LD. It's harmless but useless for Google, and dropping it simplifies validation.

---

## 3. Conversion and CTR for Amazon links

### 3.1 What Amazon requires and forbids [E1]
Sources: [Associates Program Policies](https://affiliate-program.amazon.com/help/operating/policies) (`_src/amz-pol-flat.txt`) and the [Operating Agreement](https://affiliate-program.amazon.com/help/operating/agreement) (`_src/amz-agr-flat.txt`), both read 10 Oct 2026.

| Rule | Text / effect | Plan status |
|---|---|---|
| Required disclosure | "As an Amazon Associate I earn from qualifying purchases." (Agreement). "we earn" is a common variant; the agreement wording is "I". | Plan uses "we". This is OK in practice, but the exact Agreement wording is the safest. |
| Prices | "your Site may only show prices and availability if: (a) we serve the link in which that price and availability data are displayed, or (b) you obtain [it] via Creators API or PA API". Non-image content can be cached up to 24 h and must then be refreshed. Comparison displays against other stores must show lowest new (and used) Amazon price. | Plan: no prices. **Correct.** Also avoid "under $1,000" claims tied to Amazon listings. Use dated MSRP from the manufacturer if needed, labeled as MSRP. |
| Star ratings / reviews | "You will not display or otherwise use any of our customer reviews or star ratings, in part or in whole… unless… obtained through Creators API or PA API". | Plan: none. **Correct.** This also rules out paraphrasing "4.3 stars on Amazon". |
| Images | Program images only via the provided tools or API. Images may be resized only proportionally. Image links may be stored ≤24 h. | Plan: no Amazon images. **Correct.** |
| Link clarity | "You will not use a link shortening service, button, hyperlink or other ad placement in a manner that makes it unclear that you are linking to an Amazon Site." | "See on Amazon" makes the destination clear. **Correct.** |
| Cloaking | "You will not cloak, hide, spoof, or otherwise obscure the URL of your Site containing Special Links (including by use of Redirecting Links)". | Use direct `amazon.com/dp/ASIN?tag=…` links. **Avoid `/go/` redirect routes.** Check the plan doesn't add one for tracking. |
| Offline / email | No Special Links "in offline material or email (e.g., any printed material, mailing, SMS, MMS, attachment to email…)". | Any newsletter must link to the site, never to Amazon. |
| Don't modify Amazon features | "You will not modify, redirect, suppress, or substitute the operation of any button, link…" | — |
| Misleading claims | No misleading claims about products, prices or promotions (the 64 GB/128 GB example). | Matches the products.json/ASIN verification gate. |
| Cookie | 24 h from click, or until the cart is added (90 days for cart). | Explains why clicking from decision content matters. |
| Commission | Lawn & Garden: **3.00%** on the official rate table (`_src/amz-rates.txt`). | Some third-party sources say 2%; use 3%. |
| API access | The Creators API (replacing PA-API) needs qualifying sales before access, as reported. **[E1 policy references the Creators API; eligibility from Amazon docs/announcements, E3]** | No live prices, images or ratings at launch. Design must not depend on them. |

### 3.2 FTC disclosure [E1]
From the [FTC Endorsement Guides FAQ](https://www.ftc.gov/business-guidance/resources/ftcs-endorsement-guides):
- A disclosure must be "clear and conspicuous", close to the claims, and seen before the reader clicks. A footer-only disclosure isn't enough.
- "**You can't talk about your experience with a product if you haven't tried it**."
- The 2024 rule on fake reviews ([16 CFR 465](https://www.ftc.gov/legal-library/browse/rules/rule-banning-fake-reviews-testimonials)) bans fake or misrepresented reviews, including AI-written testimonials, with civil penalties.

The plan's disclosure line under H1 is correct. **Add [O/E1]:** a short repeat ("Paid link: see disclosure") next to the CTA cluster in long pages (FTC: disclosure "close to the claim"), and in the sticky bar if one is used.

### 3.3 CTA wording, design and frequency
- **Wording:** Amazon allows "See on Amazon", "Check price on Amazon" and "View on Amazon" (the destination is clear). "Buy now" isn't forbidden, but it implies a transaction on your site, and the plan bans it. That's fine. Specific, low-commitment wording ("See X430 on Amazon") typically beats generic wording in affiliate A/B write-ups. **[E3, e.g. Lasso/AffiliateWP blog tests]** The product name in the label also helps screen-reader users (WCAG 2.4.4 link purpose). **[E1]**
- **Placement:** Put a CTA where the decision is made: quick-pick box, each pick after "who it suits", table final row, verdict box, and end of page. **[E3/O]** Practitioner affiliate data (Lasso, AAWP and others) consistently says **in-content product boxes and tables get most affiliate clicks, and plain inline text links get high CTR per impression** at decision moments. **[E3]** No independent study isolates this for Amazon specifically, so treat it as directional.
- **How many:** No evidence of a ranking penalty for multiple *relevant* affiliate links (Google: affiliate links "treated appropriately" are fine). **[E1]** The cost is perception: Google's Discover survey asks whether content "feels too focused on selling" (§1.5). **[E3]** Rule **[O]**:
  - review: one CTA per product mention cluster, 2–4 Amazon links total;
  - /best: ~1 per pick + table row + quick-pick, roughly 10–15 links across 5 products;
  - guides: CTAs only where a model is recommended.
- **Sticky mobile bar:** GrowthRock's ecommerce test (14 days) found a sticky add-to-cart lifted orders **7.9%** (99% significance), but "not all instances of making add to cart controls sticky have increased conversion rate" ([GrowthRock](https://growthrock.co/sticky-add-to-cart-button-example/)). **[E3]** For reviews of a single product, a slim sticky bar ("Segway Navimow X430 · See on Amazon") appearing after the first CTA scrolls out of view is reasonable. **Don't** use one on /best or guides (too many products; feels salesy). Keep it ≤56 px, dismissible, not covering content, with no layout shift (CLS). Build it behind a flag and A/B it once traffic allows. **[O]**
- **Visual:** The plan's Flag-pink square button is distinct from Amazon orange, as required. Fine. Ensure contrast ≥4.5:1 for white text (§6.6).

### 3.4 Trust signals that lift clicks honestly [E3/O]
- A visible "Updated [date]" with a "what changed" note.
- Source counts and links.
- "Who should skip it" (honest negatives raise credibility; NN/g-style findings on credibility **[E2]**).
- The method link, a real About page with a business name and contact.
- No fake scarcity or "price drop" banners (Amazon misleading-claims rule plus FTC).

### 3.5 Mobile-first
Most US product-research traffic is mobile. **[E3]** Patterns:
- The H1 + direct answer + first CTA should sit on a 390 px screen within 1–2 screens.
- Tap targets ≥24×24 CSS px (WCAG 2.2 2.5.8 minimum); the plan's 44 px is better.
- The table becomes cards or gets a sticky first column.
- Jump links collapse into a "On this page" disclosure.

### 3.6 Measuring CTR
- GA4 event `affiliate_click` with `asin`, `placement` (quick_pick / table / pick_block / verdict / sticky / inline), `page_type`. Send via `navigator.sendBeacon` or a GA4 `transport_type: beacon` setting. No redirect needed (the cloaking rule).
- Amazon reports by tracking ID; consider separate tracking IDs per placement type for a revenue-by-placement view. Amazon allows multiple tracking IDs. **[E1]**
- Benchmarks **[E3]**: affiliate-review EPC (earnings per click) data is unreliable across sources. Measure your own after ~1,000 sessions.

### 3.7 OneLink and international visitors
OneLink, already on per AFFILIATE_COMPLIANCE.md, redirects non-US visitors to their local Amazon store and credits linked accounts. **[E1: Amazon OneLink help]** Caveats:
- Model and ASIN availability differs by country.
- The May 2026 core update analysis hit "US .com sites turning up in the UK index". **[E3]**

Keep the site clearly US: US units, and US references (FCC, US availability). Don't chase UK/CA queries; consider `hreflang` only if separate localized pages are ever built.

### 3.8 Multi-seller links
Google's review guidance suggests "links to multiple sellers" so readers can choose. **[E1]** This is *not* required. Amazon-only is fine at launch. Later: add a manufacturer-store link (non-affiliate or via its program) next to the Amazon button. It costs some Amazon clicks, but it raises trust and survives models that leave Amazon. **[O]**

---

## 4. Technical SEO for a new Next.js site

### 4.1 Core Web Vitals [E1]
Targets at the 75th percentile, mobile and desktop separately: **LCP ≤ 2.5 s, INP ≤ 200 ms, CLS ≤ 0.1** ([web.dev](https://web.dev/articles/vitals)). Google: "good Core Web Vitals" is part of page experience, but "great page experience" doesn't override relevance ([page experience](https://developers.google.com/search/docs/appearance/page-experience)). In practice CWV is a tiebreaker and a conversion factor, not a ranking lever. **[E1/O]** A new site has no CrUX field data until it has traffic, so use lab data (Lighthouse, PageSpeed Insights) and add `web-vitals` RUM into GA4. The plan's targets are correct.

Next.js specifics **[E1: Next.js docs]**:
- Make the hero `next/image` `priority` (or `preload` in Next 16) with correct `sizes`.
- Use `next/font` with self-hosted subsets (Archivo variable, DM Mono). Limit axes and weights.
- Keep the finder a small client island. Server components elsewhere.
- No third-party widgets above the fold.
- Load GA4 with `next/script` `afterInteractive` or via `@next/third-parties`.
- Reserve space for the sticky bar to avoid CLS.

### 4.2 Images
- `next/image` serves AVIF/WebP when configured (`images.formats: ['image/avif','image/webp']`) ([Next.js Image](https://nextjs.org/docs/app/api-reference/components/image)). **[E1]**
- Diagrams should be **inline SVG or SVG files**: tiny, sharp, accessible with `<title>`/`<desc>`, and their text is crawlable.
- Google Images: use descriptive filenames and alt text, and put the image near relevant text ([image SEO](https://developers.google.com/search/docs/appearance/google-images)). **[E1]**
- AI-generated yard photos: add IPTC `DigitalSourceType = trainedAlgorithmicMedia` metadata (Google's stated mechanism, §1.3), and don't present them as photos of real customers' yards. **[E1/O]**
- Mower-free photos are good for compliance, but they're decorative. Diagrams carry the unique value. **[O]**

### 4.3 SSG vs ISR
- Fully static (SSG via `generateStaticParams`) is the right default for ~25–40 pages: fastest TTFB, nothing to break.
- Content changes ship by rebuild (Vercel deploy on commit), which also fits the reviewed-round workflow.
- ISR (`revalidate`) is only needed if live data arrives (Creators API prices later). Even then, Amazon's 24 h cache limit (§3.1) means `revalidate ≤ 86400` *and* a client-side or edge refresh for displayed prices. **[E1/O]**
- On-demand revalidation (`revalidatePath`) plus an IndexNow ping is the clean pattern for later updates.

### 4.4 Internal linking and cluster architecture
Google: "make your links crawlable" (`<a href>`), use descriptive anchor text, and link related pages ([link best practices](https://developers.google.com/search/docs/crawling-indexing/links-crawlable)). **[E1]** Doorway policy prefers a "clearly defined, browseable hierarchy". **[E1]**

The plan's hub structure (/best, /reviews, /vs, /guides) is right. Add **[O]**:
- **Spec-to-guide links**: each spec row in a review links to the guide that explains it (slope → slopes guide, navigation → RTK/vision/LiDAR guide).
- **Ladder-neighbor links**: already planned.
- **Tool links** from every relevant guide and review.
- **Breadcrumbs**: already planned.
- Don't cross-link to other Aivora sites (link spam / scaled-content concerns, §1.4).

### 4.5 Structured data that still works in 2026 [E1]
| Type | Rich result in 2026? | Recommendation |
|---|---|---|
| FAQPage | **No** (gone from 7 May 2026; docs removed) | Drop the JSON-LD. Keep visible FAQs. |
| HowTo | No (retired 2023) | Don't use. |
| Article / BlogPosting | Helps article understanding, dates and bylines (no special rich result for most sites) | Keep. `datePublished`, `dateModified`, `author` (Organization or real Person with `url`), `publisher`. |
| BreadcrumbList | Yes (breadcrumb display, still documented) | Keep. |
| Organization (home or about) | Logo / knowledge panel signals | Keep, with `url`, `logo`, `contactPoint`, `sameAs` (real profiles only). |
| WebSite (home) | Site name in results ([site names](https://developers.google.com/search/docs/appearance/site-names)) | Keep, with `name` and `alternateName`. |
| ProfilePage | Yes (for author pages) | Use only if a real person author page exists. |
| Product + Review (editorial) with `positiveNotes`/`negativeNotes` | Pros/cons snippets are documented for **editorial product reviews** ([product snippets](https://developers.google.com/search/docs/appearance/structured-data/product-snippet)). Review snippets need a `reviewRating`. | The plan bans Review/Rating schema because there's no testing and no scores. That's **correct**. A rating without testing invites "self-serving / unsubstantiated" problems. Pros and cons without a rating aren't a documented path either. **Keep the ban.** |
| Product with `offers` / price | Merchant listings are for sellers | No (and Amazon price rules apply). |
| ItemList | Only carousel use on summary pages for supported types (recipes, courses, movies, restaurants) | Not for mowers. Skip. |
| VideoObject | Yes, if real videos are embedded later | Later. |

The Rich Results Test validates eligibility, not display. **[E1]**

### 4.6 Sitemaps, IndexNow, crawl budget
- **Sitemap:** list only canonical, indexable, 200 URLs, with a true `lastmod`. Google ignores `priority` and `changefreq` ([sitemaps](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)). **[E1]** Bing (2025 blog): "lastmod Still Matters for AI Powered Indexing… freshness signals directly influence how quickly updates are reflected in search results and AI generated answers" ([Bing, Jul 2025](https://blogs.bing.com/webmaster/July-2025/Keeping-Content-Discoverable-with-Sitemaps-in-AI-Powered-Search)). **[E1]** The plan already has this right.
- **IndexNow:** supported by Bing, Yandex, Seznam, Naver and Yep; **Google does not use it** ([indexnow.org](https://www.indexnow.org/searchengines)). **[E1]** It's still worth it for Bing/Copilot (and ChatGPT search, which uses Bing's index **[E3]**). The plan already includes it. Submit on publish, real update, and removal.
- **Google discovery:** sitemap submitted in Search Console, internal links from the home page, and the URL Inspection "Request indexing" for key pages (manual, limited quota). **[E1]** The Indexing API is only for JobPosting/BroadcastEvent pages. Using it for other pages breaks its terms. **[E1]**
- **Crawl budget:** Google says crawl budget matters for sites with >1M pages or very fast-changing >10k pages ([crawl budget guide](https://developers.google.com/search/docs/crawling-indexing/large-site-managing-crawl-budget)). **[E1]** It's irrelevant at 40 pages. What matters is **crawl demand** (quality, links), so don't create parameter/faceted URLs (finder results) that waste it.

### 4.7 llms.txt: does it matter?
- Google: "LLMS.txt files and other 'special' markup: You don't need to create new machine readable files… Google Search ignores them" ([AI optimization guide](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide), note added 15 Jun 2026). **[E1]**
- Ahrefs (Jun 2026, 137K sites): "97% of llms.txt files receive zero requests"; 96% of requests come from bots, mostly not AI tools ([Ahrefs](https://ahrefs.com/blog/llmstxt-study/)). **[E2]**

Verdict: harmless, near-zero benefit. Keep it only because it's already planned and costs five minutes. Don't spend round time on it, and don't treat it as an AI-visibility strategy. **[O]**

### 4.8 AI Overviews, AI Mode and Bing Copilot: citation tactics
Primary-source facts **[E1]**:
- Google: "no additional requirements to appear in AI Overviews or AI Mode, nor other special optimizations… no special schema" ([AI features](https://developers.google.com/search/docs/appearance/ai-features)).
- Both use **query fan-out**, "issuing multiple related searches across subtopics". Chunking content isn't needed.
- Controls: `nosnippet`, `data-nosnippet`, `max-snippet`, and since 31 Aug 2026 a **Search generative AI control** in Search Console. Search Console also has **Generative AI performance reports** (all sites from 31 Aug 2026) ([Search Central blog](https://developers.google.com/search/blog/2026/06/gen-ai-performance-reports)).
- Bing Webmaster Tools has **AI Performance**, which shows Copilot citations by URL ([Bing, Feb 2026](https://blogs.bing.com/webmaster/February-2026/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview)). The plan already includes the Bing AI Performance check.
- Bing guidelines: content clarity, headings, factual and verifiable statements, Q&A, and fresh `lastmod`.

Evidence on impact **[E2]**:
- Ahrefs: AI Overviews correlate with **58% lower CTR** for the top result (Dec 2025 data, published Feb 2026). Pew (Jul 2025) found people clicked a result 8% of the time with an AI summary vs 15% without ([Pew](https://www.pewresearch.org/short-reads/2025/07/22/google-users-are-less-likely-to-click-on-links-when-an-ai-summary-appears-in-the-results/)).
- 62% of AI Overview citations come from outside the top 10 (§1.7).

Tactics **[O, grounded in above]**:
1. Put **one-sentence factual answers** near each H2 ("The Navimow X430 is rated for 1 acre and 84% (40°) slope, per Segway's US spec page, checked 2026-10-01").
2. Write **entity-precise model names** that match the US listing exactly (STYLE/MODELS already enforce this).
3. Publish **sub-question pages and sections** that fan-out queries hit (slope conversion, gate width, under trees, 4G costs, FCC status).
4. Use **original numbers** that AI answers must cite (normalized spec tables, owner-report tallies, cost calculator outputs).
5. Keep **fresh, true `lastmod`** for Bing.
6. Make sure the page isn't blocked: allow Googlebot, Bingbot, OAI-SearchBot and PerplexityBot. Allowing training bots (GPTBot, Google-Extended) is a separate business choice; it doesn't affect search citations.
7. Measure through GSC generative AI reports and Bing AI Performance from launch.

---

## 5. Growth plan for a new domain

### 5.1 Realistic timelines [E2/O]
Ahrefs: 1.74% of new pages hit the top 10 within a year (6.11% for non-empty English pages); top pages average ~5 years old (§1.7). **[E2]** For a new domain with 30–40 strong pages and few links, expect **[O]**:
- **Weeks 0–4:** indexing; Bing and Copilot often show first impressions earlier than Google.
- **Months 2–4:** long-tail impressions (model-specific questions, vs pairs, slope conversions).
- **Months 4–9:** some page-1 positions on long tail. "best robot lawn mower" stays out of reach.
- **12+ months:** head terms only with links and brand signals.

The site launches in autumn, the off-season, which is good: it gets indexed and aged before March–May 2027 demand. **[O]**

### 5.2 Publishing cadence
Google warns against producing lots of content just for search, and against date-faking. **[E1]** Recommend **[O]**:
- Launch with the planned ~25 pages (9 reviews, 3 vs, 8 guides, hubs, trust).
- Then add **1–2 substantial pages a week** through winter. The REVIEW-ADD loop fits.
- **Front-load updates in Feb–Mar 2027** (2027 models, price-season, FCC status) rather than new thin pages.

Quality per page matters more than count: the domain-level presumption (§1.7) means a few weak pages drag down the rest.

### 5.3 Getting indexed fast [E1]
1. Verify the GSC domain property and Bing Webmaster (import from GSC).
2. Submit sitemaps to both.
3. Turn on IndexNow.
4. Link every page from a hub, and the hubs from the home page.
5. Use URL Inspection → Request indexing for /best, the home page and the 2 strongest reviews.
6. Get 2–5 real external links/mentions in the first month (§5.4); discovery through links is still the main way crawlers find new domains.

### 5.4 Earning first links honestly
Spam policy: buying links, excessive exchanges and PBNs are link spam. **[E1]** Honest routes, ranked by fit **[O, with E2/E3 support]**:
1. **FCC robot-mower rule explainer** (round 4; FCC-RULE.md by the other worker has the facts). It's timely, US-specific and journalists/forums need a plain explainer. Pitch tech and lawn/garden reporters and local news "what this means for buyers" angles once it's live. Update it on each FCC change.
2. **Running-cost calculator + a short data study** ("What a robot mower really costs over 5 years, by brand", dated manufacturer figures). Calculators and data are the formats that earn links (§2.7).
3. **Normalized spec dataset** (downloadable CSV of US models: rated area, interior and boundary slope, passage width, RTK type, checked dates). "Linkable data" for bloggers and Reddit answers. Credit requested, CC-BY.
4. **Manufacturer Q&A responses**: brands sometimes share or link pages that quote them accurately.
5. **HARO-style requests** (Qwoted, Featured, Source of Sources). Answer only on genuine expertise topics (FCC rule, slope, mower choice), and only as a real named person.
6. **Forums and Reddit:** Reddit's self-promotion guidance says to be a community member first, disclose affiliation, and follow each subreddit's rules ([Reddit self-promotion wiki](https://www.reddit.com/wiki/selfpromotion/)). **[E1]** r/RobotLawnMowers, r/lawncare, r/homeowners, the Mammotion/Segway/Worx owner subreddits and Facebook groups. Answer questions with the substance in the comment, and link only when the page adds something (calculator, slope converter). Some subs ban links entirely. Never post affiliate links. Never astroturf or use multiple accounts. (FTC 16 CFR 465 also covers undisclosed insider reviews.)

### 5.5 Channels
- **YouTube [O/E3]:** robot mower search is heavily video-led (setup, slopes, mapping). Low-cost formats that don't fake testing: animated diagram explainers (slope %, RTK vs vision vs LiDAR), "how to measure your yard" screen-recording with a satellite map, FCC rule explainer. A video carousel can also rank in Google for vs/how queries. Optional, and only if someone can do it well.
- **Pinterest [E3/O]:** suited to the home/garden visual audience, but conversion for $1,000–$3,000 tech is weak and Pinterest favors fresh image pins. Worth a small test with diagram pins (slope chart, yard-size chart) linking to guides. Never pin Amazon links directly (affiliate-link pins are allowed on Pinterest, but they're low-value here, and disclosure is needed). Low priority.
- **Bing/Copilot and ChatGPT search:** "free" channels via IndexNow and clean content (§4.8).
- **Email newsletter:** fine for updates, but **no Amazon links in email** (§3.1). Link to the site's pages.
- **X:** the X tools showed little consumer-buyer chatter for robot mowers. Mostly brands and deals. Low priority. **[E3]**

### 5.6 Seasonality: what to publish by when (US)
US interest peaks Mar–Jun, with a secondary bump around Black Friday / Prime Big Deal Days (Oct) and Prime Day (Jul). **[E3: Google Trends pattern for "robot lawn mower" in US, typical for mowing equipment; verify in Trends before planning]**

| Window | Do | Why |
|---|---|---|
| Oct–Nov 2026 (now) | Launch the core set (rounds 1–6). Sitemaps, IndexNow, first links. | Index and age before the season. Black Friday deal traffic is a bonus, not a goal. |
| Dec 2026–Jan 2027 | FCC explainer + cost calculator PR push. Add winter-storage and "buy now or wait" guides. CES (Jan) new-model watch. | Reporters' slow season; CES news. |
| Feb 2027 | Refresh /best and every review with 2027 models and status. Publish "new for 2027". Make sure the finder and slope tools are live. | Google needs 4–8 weeks to reflect updates before March demand. **[O]** |
| Mar–May 2027 | Peak: updates only, no structural changes. Answer seasonal questions (first mow, setup, mapping). Monitor GSC daily. | Peak demand; core updates often land in March. |
| Jun–Aug 2027 | Owner-report synthesis refresh. Prime Day (Jul). | Owner threads peak mid-season. |
| Sep–Oct 2027 | Discontinued-model handling, end-of-season deals, winter storage. | Model turnover. |

---

## 6. Other make-or-break factors

### 6.1 Looking like an AI content farm
This is the biggest risk for this build model (AI-drafted rounds, an operator running a portfolio, organization byline, AI imagery).

Google's tests: "extensive automation… on many topics", "mainly summarizing", "could easily be produced by a generative AI model", "fabricating creator profiles", and "creating multiple sites with the intent of hiding the scaled nature". Spam reports can now trigger manual action (Apr 2026). **[E1]**

Mitigations **[O]**:
- **A named, real human editor** (Chris, or whoever actually checks the facts) with a true short bio and the actual role ("checks every spec against the manufacturer page"). If no one will be named, the organization byline is acceptable, but it's weaker.
- **An AI-use disclosure** on the method page ("Drafts are written with AI assistance; every figure is checked by a person against the linked source before publishing").
- **Original artifacts on every page**: a diagram, a computed number, an owner tally, a manufacturer answer.
- **Varied page shapes**: the REVIEW-ADD loop's shape rotation already does this.
- **A distinct design and voice per portfolio site.** No shared templates, footers or boilerplate across Aivora sites, and no cross-linking network.
- **No auto-generated pages** (e.g. a page per state or per yard size).
- **A real contact route.**

### 6.2 Duplicate-model and near-duplicate pages
- Variants (LUBA 3 AWD 1500/3000/5000, Navimow X420/X430/X450, i105/i110/i206) should get **one review per family** covering the size variants, with a variant table. One page per SKU only when the variants differ in a way that changes the decision. **[E1: thin affiliation / doorway; O]**
- The plan currently picks one SKU per review (LUBA 3 AWD 3000, X430). Fine, but **name the siblings on the page** and point the canonical at it rather than creating sibling pages.
- Review bodies built from one template risk "cookie-cutter" similarity. Vary the structure where the model's decision story differs, and keep the shared boilerplate (method blurb, disclosure) short. **[O]**
- vs pages: only pairs with real demand. Don't create every permutation. **[E1 doorway]**

### 6.3 Freshness signals
- Show a visible "Updated" date and keep `dateModified` and `lastmod` in sync ([byline dates](https://developers.google.com/search/docs/appearance/publication-dates)). **[E1]**
- Change the date only when content substantially changes. Date-faking is named as a warning sign. **[E1]** The plan already says this.
- Add a short **"What changed"** changelog under the date (e.g. "Oct 2026: added FCC status; i110N now listed on Amazon"). It's honest freshness and helps readers trust it. **[O]**
- Specs re-checked every 90 days (planned). Show the checked date per spec (planned).

### 6.4 Discontinued and superseded models
Recommended pattern **[O, grounded in E1 guidance on 404/redirects]**:
- **Superseded, but the old one is still sold:** keep the page with a banner ("Replaced by X in 2027; here's what changed"), keep the link while the ASIN is live, and add the successor CTA.
- **Discontinued, no longer sold:** keep the page live (it still answers owners' questions and holds links). Remove the Amazon button (no misleading availability) and link the successor and the ladder neighbors. Move it out of /best and hub "current" lists into a "previous models" section. Ping IndexNow.
- **Merge into the successor** (301) only if the old page has no unique value.
- Never 404 a page that has links.
- FCC angle: models that can't get authorization should be marked "no longer importable; existing stock only" with a date (see FCC-RULE.md).

### 6.5 International visitors and OneLink
See §3.7. Keep the US focus explicit. OneLink only redirects the click; it doesn't make US content relevant to UK buyers. Don't add `hreflang` without localized pages. **[E1/O]**

### 6.6 Accessibility (WCAG 2.2 AA)
- Text contrast ≥4.5:1 (large text 3:1); UI components ≥3:1. Check Flag-pink with white text, and the blueprint palette on light/dark.
- Target size ≥24×24 CSS px (2.5.8). 44 px is planned.
- Link purpose: "See X430 on Amazon" or an `aria-label` that includes the model.
- Tables: real `<table>` with `<th scope>` and a caption.
- Diagrams: `<title>`/`<desc>` plus a text equivalent.
- Finder: labeled inputs, keyboard-operable, results announced with `aria-live`.
- Sticky bar mustn't obscure focus (2.4.11 Focus Not Obscured).
- Don't rely on color alone for ladder highlights.

Legal exposure for US e-commerce/affiliate sites is real: UsableNet tracks thousands of ADA web lawsuits a year. **[E2]** This is good UX and low effort if built in from round 1.

---

## Appendix A — source list (all read 10 Oct 2026 unless noted; raw text in `_src/`)
**Google [E1]:**
- [Search Status Dashboard ranking history](https://status.search.google.com/products/rGHU1u87FJnkP6W2GwMi/history)
- [Ranking systems guide](https://developers.google.com/search/docs/appearance/ranking-systems-guide)
- [Reviews system](https://developers.google.com/search/docs/appearance/reviews-system)
- [Write high quality reviews](https://developers.google.com/search/docs/specialty/ecommerce/write-high-quality-reviews)
- [Helpful content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)
- [Using gen-AI content](https://developers.google.com/search/docs/fundamentals/using-gen-ai-content)
- [AI optimization guide](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)
- [AI features](https://developers.google.com/search/docs/appearance/ai-features)
- [Spam policies](https://developers.google.com/search/docs/essentials/spam-policies)
- [Site reputation abuse blog](https://developers.google.com/search/blog/2024/11/site-reputation-abuse)
- [Docs changelog](https://developers.google.com/search/updates)
- [Article schema](https://developers.google.com/search/docs/appearance/structured-data/article)
- [Profile page](https://developers.google.com/search/docs/appearance/structured-data/profile-page)
- [Product snippet](https://developers.google.com/search/docs/appearance/structured-data/product-snippet)
- [Review snippet](https://developers.google.com/search/docs/appearance/structured-data/review-snippet)
- [Search gallery](https://developers.google.com/search/docs/appearance/structured-data/search-gallery)
- [Site names](https://developers.google.com/search/docs/appearance/site-names)
- [Byline dates](https://developers.google.com/search/docs/appearance/publication-dates)
- [Sitemaps](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)
- [Snippets](https://developers.google.com/search/docs/appearance/snippet)
- [Page experience](https://developers.google.com/search/docs/appearance/page-experience)
- [Preferred sources](https://developers.google.com/search/docs/appearance/preferred-sources)
- [Gen-AI performance reports](https://developers.google.com/search/blog/2026/06/gen-ai-performance-reports)
- [Search gen-AI control](https://support.google.com/webmasters/answer/16908024)
- [Third-party SEO guidance](https://developers.google.com/search/docs/fundamentals/third-party-seo)
- [SEO starter guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)
- [Quality Rater Guidelines, Sep 2025](https://static.googleusercontent.com/media/guidelines.raterhub.com/en/en/searchqualityevaluatorguidelines.pdf)
- [web.dev Vitals](https://web.dev/articles/vitals)

**Bing / IndexNow [E1]:**
- [Bing Webmaster Guidelines](https://www.bing.com/webmasters/help/webmaster-guidelines-30fba23a)
- [Bing AI Performance announcement, Feb 2026](https://blogs.bing.com/webmaster/February-2026/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview)
- [Bing sitemaps/lastmod post, Jul 2025](https://blogs.bing.com/webmaster/July-2025/Keeping-Content-Discoverable-with-Sitemaps-in-AI-Powered-Search)
- [IndexNow docs](https://www.indexnow.org/documentation)
- [IndexNow search engines](https://www.indexnow.org/searchengines)

**Amazon / FTC [E1]:**
- [Associates Operating Agreement](https://affiliate-program.amazon.com/help/operating/agreement)
- [Program Policies](https://affiliate-program.amazon.com/help/operating/policies)
- [Commission rates](https://affiliate-program.amazon.com/help/node/topic/GRXPHT8U84RAYDXZ)
- [OneLink help](https://affiliate-program.amazon.com/help/node/topic/G4PJJGHZPT6A33UG)
- [FTC Endorsement Guides FAQ](https://www.ftc.gov/business-guidance/resources/ftcs-endorsement-guides)
- [FTC fake reviews rule](https://www.ftc.gov/legal-library/browse/rules/rule-banning-fake-reviews-testimonials)

**Next.js [E1]:**
- [Image component](https://nextjs.org/docs/app/api-reference/components/image)
- [generateStaticParams / ISR](https://nextjs.org/docs/app/guides/incremental-static-regeneration)

**Studies [E2]:**
- [Ahrefs: how long to rank](https://ahrefs.com/blog/how-long-does-it-take-to-rank-in-google-and-how-old-are-top-ranking-pages/)
- [Ahrefs: AI Overview citations vs top 10](https://ahrefs.com/blog/ai-overview-citations-top-10/)
- [Ahrefs: AIO reduce clicks 58%](https://ahrefs.com/blog/ai-overviews-reduce-clicks-update/)
- [Ahrefs: llms.txt study](https://ahrefs.com/blog/llmstxt-study/)
- [Pew: AI summaries and clicks](https://www.pewresearch.org/short-reads/2025/07/22/google-users-are-less-likely-to-click-on-links-when-an-ai-summary-appears-in-the-results/)
- NN/g: [scrolling](https://www.nngroup.com/articles/scrolling-and-attention/), [comparison tables](https://www.nngroup.com/articles/comparison-tables/), [mobile tables](https://www.nngroup.com/articles/mobile-tables/), [explicit differences](https://www.nngroup.com/articles/explicit-differences/)
- [BuzzSumo × Majestic](https://buzzsumo.com/blog/magical-content-gets-links-shares-new-research-buzzsumo-majestic/)
- [Backlinko content study](https://backlinko.com/content-study)

**Practitioner [E3]:**
- [Amsive Dec 2025](https://www.amsive.com/insights/seo/googles-december-2025-core-update-winners-losers-analysis/)
- [SEOptimer/SE Ranking Dec 2025](https://www.seoptimer.com/blog/december-2025-core-update/)
- [rexultz May 2026](https://rexultz.com/blog/may-2026-core-update-affiliate-sites/)
- [techseo.es May 2026](https://www.techseo.es/en/blog/google-may-2026-core-update)
- [Licheo May 2026](https://www.licheo.com/blog/google-may-2026-core-update-what-to-do/)
- [GrowthRock sticky ATC test](https://growthrock.co/sticky-add-to-cart-button-example/)
- [SEJ on new-site ranking](https://www.searchenginejournal.com/google-new-site-ranking-algorithm/345342/)
- X posts: [@glenngabe](https://x.com/glenngabe/status/2059244903813591111), [@aleyda](https://x.com/aleyda/status/2074965088956538940), [@tehseowner](https://x.com/tehseowner/status/2048576936515940540)
- [Reddit self-promotion wiki](https://www.reddit.com/wiki/selfpromotion/)

*Caveat:* URLs for Pew, BuzzSumo, Backlinko, Licheo, SEJ, the FTC rule page and the Next.js ISR guide were taken from search results rather than saved to `_src/`. Everything else has its fetched text in `_src/`.
