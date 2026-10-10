# robotmowguide.com research summary (10 Oct 2026)

Files in this folder:
- MODELS.md and models.csv (46 model rows with sources)
- OWNER-VOICE.md
- BUYER-QUESTIONS.md
- COMPETITORS.md
- FCC-RULE.md
- IMAGE-IDEAS.md
- Scratch files: `_notes_models.md`, `_amz_verified.txt`, `_autocomplete.txt`, scripts `_*.py`

## Short summary
- **The US market went wire-free in 2026.** Every brand now leads with antenna RTK, network RTK (no antenna) or LiDAR/vision.
- **The 28 Jul 2026 FCC rule doesn't stop current models being sold.** Existing FCC-authorized models stay on sale and get updates until at least 1 Jan 2029. Brand-new foreign-made models need a Conditional Approval, and **Husqvarna is the only mower brand that has one** (9 Sep 2026).
- **Big publishers test, but each tests one yard.** Niche affiliate sites are databases or syntheses, and some overclaim testing.
- **Our winnable ground:**
  - a correct, maintained FCC tracker
  - grass-type guidance for warm-season US lawns
  - subscription and running-cost data
  - "will RTK work in my yard?" decision content
  - honest owner-issue reporting, labelled "research-based" until we test

## Top 10 page opportunities (ranked)
How we ranked them: estimated demand (autocomplete presence), competitor weakness, affiliate intent and our ability to be uniquely accurate. No volume data yet.

1. **Best robot mower for 1 acre (plus a ½-acre sibling).** High commercial intent. Autocomplete has 10 variants. Competitors list without sizing logic, so add the "rated area vs real" calculator. → `/best/robot-mower-1-acre`
2. **Best robot mower for hills / steep slopes.** Clear spec differentiation: X4 84%, LUBA 3 / mini 2 / Dreame A3 / Roborock X1 80%, Husqvarna 435 iQ AWD 70%, Lymow 45° (100%). We'll explain boundary slope vs inside slope, which nobody does. → `/best/robot-mower-for-hills`
3. **RTK vs LiDAR vs vision (vs wire) explainer, plus "best under trees".** Big autocomplete cluster, and it's owners' #1 pain point. Publishers borrow brand diagrams. → `/guides/rtk-vs-lidar-vs-vision`, `/best/robot-mower-under-trees`
4. **FCC robot mower ban explained, maintained as a tracker.** Autocomplete shows "are robot lawn mowers banned" and "fcc robot mower ban". Every competitor is thin, stale or wrong. → `/news/fcc-robot-mower-ban`
5. **Best robot mower for St. Augustine grass.** Florida/Texas/Gulf demand. eufy says the E15 is not suitable for St. Augustine, Bob Vila and Reddit say the X430 works, and max cut height matters. → `/best/robot-mower-st-augustine`, then the Bermuda/Zoysia spokes
6. **Robot mower cost of ownership and subscriptions compared.** A unique data table (Navimow Connect+ $32.90/yr after 1–2 yrs; MOVA GPS $50/yr after year 1 per Wirecutter; Mammotion 4G "subscription required" after 3 yrs, price not stated; Worx tracker about $100 one-off; Husqvarna 4G free for life per the Verge). → `/guides/robot-mower-cost-to-own`
7. **Are robot lawn mowers worth it? (including who should NOT buy one).** Huge informational query. Reddit-heavy SERP. An honest version builds trust and feeds the money pages. → `/guides/are-robot-mowers-worth-it`
8. **Best small-yard / budget robot mower (¼ acre, under $1,000–$1,500).** Lots of sub-$1,300 options: Navimow i105N/i206, MOVA Ultra 1000, Roborock Q110H, Sunseeker V3/S4, Worx WR310, and wire models (Gardena, Worx S). → `/best/robot-mower-small-yard`
9. **Head-to-head /vs/ pages.** Navimow X430 vs Mammotion LUBA 3; Dreame A3 Pro vs LUBA 3; Husqvarna 420 iQ vs X430; Navimow i215 vs MOVA Ultra 2000. Low competition except programmatic sites, and strong buy intent. → `/vs/...`
10. **Robot mower theft protection by brand (plus winter storage as a seasonal page).** Autocomplete: "theft prevention / insurance / stolen reddit". Owner evidence that tracking dies when the mower is powered off. → `/guides/robot-mower-theft-protection`, `/guides/robot-mower-winter-storage` (publish in Oct/Nov)

## Key facts we must get right
- **FCC:**
  - Notice DA 26-786 is dated **28 Jul 2026**.
  - Covered devices weigh more than 4.4 lb with their dock, have network connectivity of at least 200 kbps, plus sensors and autonomy software.
  - "Foreign-produced" is decided by where the product is made, not by brand nationality. The domestic-content test is more than 65% domestic component cost, rising to **75% from 2029** (one competitor says 70%, which is wrong).
  - Existing authorized models keep getting updates until **at least 1 Jan 2029** (DA 26-789).
  - **Husqvarna 305V/310V/420V/440V iQ** platforms got Conditional Approval on 9 Sep 2026, with a US launch expected in 2027.
  - Primary sources are in FCC-RULE.md.
- **Slope:** always give % and degrees, and say whether it's the boundary or inside figure. 100% = 45°. Navimow X3's page has conflicting figures (25%/14° vs 27°).
- **Rated area is under ideal conditions.** Husqvarna ±20%; irregular vs systematic yards.
- **Current vs legacy models:**
  - Dreame A1/A2 are not on Dreame's US store. A3 / A3 Pro replaced them.
  - LUBA 2 is sold out and was upgraded to LUBA 3.
  - The i105N's Amazon listing points to the i206 AWD as its newer version.
  - **Ryobi has no US robot mower** (unconfirmed absence).
- **US naming:** Husqvarna "iQ" models (410/420/440 iQ, 435 iQ AWD, 435X AWD). NERA is the EU name. US Worx models are WR310/WR320/WR340.
- **ASINs:** only use the ones verified in `_amz_verified.txt` and models.csv. Re-check availability on the day of publishing. Don't show stale Amazon prices; use PA-API.
- **Subscriptions:** "free for life" NetRTK claims depend on the cloud. Say so.

## Risks
1. **Regulatory churn:** the FCC table changes (updated 9 Oct). A 10 Aug 2026 proposal on banning import/marketing of *previously authorized* covered gear targets drones for now, but the mechanism exists. → Date-stamp the FCC page, check it monthly, and avoid "banned brand" language.
2. **Model churn and stock-outs:** X4, X390, LUBA 3 3000 and YUKA mini 2 were sold out on brand stores on 10 Oct, and new models are blocked from launching. → Show a "status / last verified" line and keep alternates in every list.
3. **Trust/FTC risk:** competitors overclaim testing. We must not. → Label content "research-based" and disclose clearly. Don't use brand press photos without rights.
4. **Data gaps:**
  - Ecovacs and eufy E18 prices only came from JS-loaded pages (seen via search snippets).
  - LUBA 3 and Worx cut heights come from manual mirrors.
  - Lymow, Roborock, Airseekers and MOVA 3000 specs are secondary.
  - No search volume data.
  - People Also Ask boxes are inferred, not scraped.
  - Reddit threads were read through search-index text, not direct fetches.
  → Verify before publishing.
5. **Affiliate gaps:** Lymow (a Wirecutter pick) doesn't appear on Amazon. Husqvarna iQ ASINs weren't verified. A US Amazon-only site will have holes. → Consider non-Amazon programs later. Recommend on merit anyway.
6. **Owner-voice bias:** Reddit skews toward problems. → Present it as "owners report", balance it with praise, link threads and give dates.
7. **Long-term support:** firmware updates are only guaranteed by the waiver until 1 Jan 2029. → Add a "support outlook" line to every review.

## Surprises
- **Husqvarna is the only robot-mower brand with FCC Conditional Approval.** Navimow, Mammotion, Dreame, Ecovacs and others have none, though their existing models remain legal.
- **Wirecutter's top pick is the Worx Landroid Vision Cloud WR340**, and its upgrade pick is **Lymow One Plus**, which isn't on Amazon. Both were outside our original brand list.
- **eufy's own page says the E15 isn't suitable for St. Augustine or dense Zoysia**, and it's limited to 18° on flat lawns.
- **Dreame A3 EdgeMaster cuts at a fixed ~3 cm (1.2")**, which scalps a band around tall-cut lawns. Owners and testers turn it off. LiDAR units overheat in Florida sun.
- **Mammotion's Android app is rated 2.2★ vs Navimow's 4.6★** (per search snippets; re-check), and LUBA 3 firmware 2.3.30.26 drew a wave of blade-cutout complaints.
- **Competitor mowerbotlab** claims to be "independently yard-tested" but says its reviews use "tested data from TechRadar, Tom's Guide…". Its FCC guide has the 2029 threshold wrong and is stale.
- **Ryobi has no current US robot mower** that we could find.
