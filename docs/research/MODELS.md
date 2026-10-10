# Robot mower models for the US market, 2025–2026

All data checked on **10 Oct 2026** (London time). The row-level data with sources is in `models.csv` (40 rows).

What the source labels mean:
- **official**: read on the brand's US page.
- **via search snippet**: we only saw it in a search snippet of the official page, because the price loads with JavaScript and our fetch couldn't see it. Re-check it in a browser before publishing.
- **secondary**: from a manual mirror or a retailer.
- **n/s**: not stated on the source we checked. Never fill these in by guessing.

ASIN rule: an ASIN appears only if we loaded `amazon.com/dp/<ASIN>` on 10 Oct 2026 and the ASIN shown on the page matched the product. Several ASINs from search results redirected to a different variant; we record what the page actually showed (for example, LUBA 3 `B0GKNQKJJQ` loads `B0H1R15D83`, and Husqvarna 430X `B01HR4XGYS` loads `B07WLMRMJS`). Raw checks are in `_amz_verified.txt`. We did not record Amazon prices because they change daily, and Amazon's affiliate rules restrict showing stale prices.

## Key structural findings
1. **The US market has moved to wire-free in 2026.** Every major brand's US lineup leads with RTK+vision, network RTK (no antenna) or LiDAR. Wire models still sold: Husqvarna 435X AWD, Worx Landroid S, Gardena SILENO, Greenworks Optimow.
2. **There are three navigation camps.** We'll need an explainer page for this.
   - **Antenna RTK + vision**: Navimow i1/X3, Greenworks AiMowbot, Sunseeker X5, Husqvarna EPOS with a reference station.
   - **Network/cloud RTK, no antenna** (needs cellular coverage): Navimow X4 and i2 (NRTK), Worx Vision Cloud, Husqvarna EPOS via Husqvarna Cloud (in select locations), Mammotion LUBA 3 (iNavi NetRTK).
   - **LiDAR or vision only, no satellites**: Mammotion LUBA mini 2 and YUKA mini 2, Dreame A3, MOVA LiDAX, Ecovacs GOAT LiDAR PRO, Navimow i215 LiDAR, Sunseeker S4, eufy E15/E18 (camera only).
3. **Product generations turn over fast.** Superseded US models still appear on Amazon and in competitor lists:
   - Dreame A1/A2 are gone from Dreame's US store, which lists "all five" US wireless models as A3 AWD and A3 AWD Pro.
   - Mammotion LUBA 2 shows as sold out ("upgraded to LUBA 3").
   - Navimow i105N's Amazon listing says "newer version available: i206 AWD".
   - **Implication:** every model page needs a "status" line and a "last verified" date.
4. **Brands mean different things by "slope".** Husqvarna gives **two** numbers: inside the work area vs at the boundary (for example, 410 iQ is 45% inside and 15% at the boundary). Navimow X3 states 25% (14°) at the boundary in its spec table, while marketing copy on the same page says 27°. Always state % and degrees, and say which figure it is.
5. **Subscriptions are a hidden running cost.**
   - Navimow X4 Connect+: 1 yr free (X430) or 2 yrs (X450), then **$32.90/yr**.
   - Mammotion LUBA 3 and mini 2: 3 years of free 4G, then "a subscription is required" (price n/s).
   - Dreame A3: 1 yr of 4G data (Pro: 3 yrs).
   - eufy: 4G is a paid subscription in the app.
   - Greenworks: anti-theft tracking needs 4G service.
   - Navimow i105N: the 4G anti-theft module is an optional add-on.

## Brand summaries
(Specs are in the CSV. These are the points that matter for editorial.)

### Segway Navimow
- **i1 (i105N/i110N):** entry RTK+vision with an antenna. 30% slope.
- **i2 AWD (i206 / i210):** $999 / $1,299. 3-wheel AWD, 45%.
- **i215 LiDAR:** $1,599. No antenna.
- **X3 (X330/X350/X390):** 1–2.5 ac, $2,299–$4,499.
- **X4 (X430 / X450):** $2,499 / $2,999. AWD, **84% (40°)**, 17" dual deck, free lifetime network RTK, built-in 4G, and the PR mentions St. Augustine explicitly.
- **H2:** announced at CES 2026, but we saw no US price.
- On 10 Oct, X4 and X390 were sold out on navimow.com.
- Sources: navimow.com pages; CES PR, 6 Jan 2026.

### Mammotion
- **LUBA 3 AWD (1500/3000/5000, plus H variants):** 0.37–1.25 ac, 80%, LiDAR + NetRTK + vision.
- **LUBA mini 2 AWD:** 0.37 ac, LiDAR, 80%, $1,999 list.
- **YUKA mini 2 1000H:** 0.25 ac, $1,559 list.
- The LUBA 3 US page shows **conflicting zone counts** (50 vs 100), and several advertised features are listed as "launching late 2026". **Don't review features that haven't shipped.**

### Husqvarna (US naming is "iQ"; NERA/EPOS are the EU/global names)
- US lineup on husqvarna.com/us: 410 iQ, 420 iQ, 440 iQ, 435 iQ AWD, 435X AWD (wire), 535 AWD EPOS, plus CEORA (pro).
- Prices: $2,599.99 to $4,999.99 MSRP.
- 4-year warranty and US phone support (833-991-ROBO).
- **The only mower brand with FCC Conditional Approval** (see FCC-RULE.md).

### Worx
- **Landroid Vision Cloud WR310.1 / WR320.1:** cloud RTK, no antenna. 30% slope.
- **Landroid S WR165:** wire, 1/8 ac, $599.
- Note: US model numbers differ from EU numbers (WR308E/WR312E are EU-only).

### ECOVACS GOAT
- US "LiDAR PRO" line: O1000 ($1,499.99), A2000 ($1,999.99), A3000 ($2,499.99).
- Built-in automated string trimmer.
- The official FAQ says basic operation works without Wi-Fi.

### Dreame
- US store lists only A3 AWD (0.25 / 0.5 ac) and A3 AWD Pro (0.62–1.2 ac). Both are 80%, LiDAR, no RTK.
- **A1/A2 are legacy in the US.** Use them only on comparison or "what replaced it" pages.

### MOVA
- LiDAX Ultra 1000 / 2000: 0.25 / 0.5 ac, 45%, LiDAR. Low sale prices ($999 / $1,199).
- LiDAX Pro 800 also exists.

### eufy (Anker)
- E15 / E18: 0.2 / 0.3 ac, **vision only**, 18° slope.
- Eufy itself says the E15 is "**Not suitable for St. Augustine and dense Zoysia**". It also requires flat lawns (height difference under 1.2") and grass under 3.5".
- This is a great honesty hook for our grass-type pages.

### Sunseeker
- V3 (0.15 ac), S4 (LiDAR, 0.25 ac), X3 Plus, X5 AWD (0.5 ac, 60%), X7 Gen2 / X7 Plus Gen2 (0.75 / 1.5 ac AWD).
- Big gap between MSRP and sale prices.

### Greenworks
- AiMowbot C20 / C20Z / C30Z / C40: 0.5–1 ac, RTK+vision with an antenna, 45%. From $999.99.
- Optimow 50: wire.

### Ryobi
- **No current US robotic mower found** on ryobitools.com. The only trace is an EU software-support PDF (RY18LMRX supported to 20 Jun 2027).
- Don't build Ryobi product pages. A "Does Ryobi make a robot mower?" answer page is fine.

### Cheap boundary-wire models
- Gardena SILENO Minimo / City / Flex (Husqvarna Group; Flex is $599.98 at Home Depot) and Worx Landroid S WR165 ($599).
- Yard Force NX100i is about $799 (secondary source, mowerbotlab).
- Amazon also carries little-known brands (ANTHBOT M5, NovorikX X3). **Exclude these** unless we can verify support and FCC authorization.

## Rated area: honest framing
Brands rate area under ideal conditions. Navimow says map storage is up to 1.2× the recommended area. Husqvarna quotes ±20% and separates "irregular" from "systematic" capacity (420 iQ: 0.5 ac irregular, 1 ac systematic). An Amazon reviewer noted the i105N's "1/8 acre" is actually 500 m² (about 0.124 ac).
**Our rule:** recommend models rated at ≥1.25× the real mowable area for complex yards. This is our editorial heuristic, not a manufacturer claim.

## To verify before publishing
- Ecovacs and E18 prices (JS-loaded).
- LUBA 3 cut heights (manual mirror only).
- Worx cut heights (manual mirror only).
- Navimow X3 slope conflict.
- Whether H2 and Terranox are sold in the US.
- Amazon availability (in stock vs "currently unavailable") on the day of publishing.

## Added after the competitor review: models that top sites recommend, which our brief didn't name
These are in `models.csv`, marked as secondary where applicable. **They must be covered**, because the leading reviews pick them.
- **Worx Landroid Vision Cloud WR340** (1 ac per Worx; 30% slope; cloud RTK with free lifetime 4G, per Wirecutter). It's **Wirecutter's top pick** (updated 3 Aug 2026). worx.com shows $1,199.99 in a search snippet, while Wirecutter saw $1,750 at Amazon. Re-verify.
- **Lymow One Plus** (tracked; 45° (100%) slope; 16" dual mulching blades; 1.2–4.0" cut height; $2,799 sale / $3,199). It's Wirecutter's upgrade pick, and owners praise its cut quality. Not on Amazon as far as we saw, so there's no affiliate path. Mention it anyway; doing so is what builds trust.
- **Roborock RockNeo Q110H** ($1,299; 0.25 ac; RTK+VSLAM) is the Verge's budget pick. **RockMow X1 LiDAR** (from $2,299; 80% slope; 4WD) is coming to Wirecutter's tests.
- **Airseekers Tron SE** and **MOVA LiDAX Ultra 3000 AWD** are Bob Vila picks. Specs not yet collected.
- **LawnMaster OcuMow** appears in autocomplete and has a smartlawnbots review, and **EcoFlow Blade** appears in X posts. Both are unresearched.
