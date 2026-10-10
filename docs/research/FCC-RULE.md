# FCC rule: foreign-produced "advanced robotic devices" (28 Jul 2026), and what it means for robot mowers

Research date: 10 Oct 2026 (all sources checked 10 Oct 2026 unless noted). Primary sources come first. Secondary sources are labelled as such.
This is not legal advice. It's a buyer-facing reading of public FCC documents.

## 1. What happened (primary sources)

| Date | Action | Primary source |
|---|---|---|
| 28 Jul 2026 | The FCC Public Safety & Homeland Security Bureau (PSHSB) public notice **DA 26-786** added "Foreign-produced advanced robotic devices, except advanced robotic devices which have been granted a Conditional Approval by DoW" to the Covered List. It also added connected power inverters. | Fact sheet: https://docs.fcc.gov/public/attachments/DOC-423682A1.pdf · Covered List: https://www.fcc.gov/supplychain/coveredlist · DA 26-786 text (third-party mirror; the FCC copy is linked from the Covered List page): https://static.poder360.com.br/uploads/2026/07/fcc-robots.pdf |
| 28 Jul 2026 | OET public notice **DA 26-789**: devices **authorized before 28 Jul 2026** "may continue to receive software and firmware updates that mitigate harm to U.S. consumers **at least until January 1, 2029**", including vulnerability patches and OS-compatibility updates. | https://docs.fcc.gov/public/attachments/DA-26-789A1.pdf |
| 9 Sep 2026 | The first robotics Conditional Approval: **Husqvarna AB 305v IQ, 310v IQ, 420v IQ and 440v IQ robotic platforms** (order DA 26-957, which also covered ASUS and Comtrend routers). No termination date is listed. | FCC Covered List, Conditional Approvals table: https://www.fcc.gov/supplychain/coveredlist |
| 18 Sep 2026 | ANSCER Robotics AR250/AR650/AR1250 (industrial AMRs, not mowers). DA 26-996. | same |
| 2 Oct 2026 | Matic Robots floor cleaner 4MA0001 plus its dock (not a mower). DA 26-1063. | same |
| 2 Oct 2026 | FCC FAQ last updated. | https://www.fcc.gov/covered-list-faqs-robots-inverters |

When checked on 10 Oct 2026, the FCC robotics Conditional Approvals table listed **only three entities: Husqvarna, ANSCER and Matic. Husqvarna is the only robot-mower brand.** Source: https://www.fcc.gov/supplychain/coveredlist (table "Updated October 9, 2026").

## 2. The definition (FCC FAQ, quoting the National Security Determination)
An "advanced robotic device" is a mechanical mobile device that meets all of the following:
- (i) it is capable of locomotion, obstacle avoidance, navigation or movement on the ground
- (ii) it operates at a distance from a human operator, based on commands and/or sensor data
- (iii) the device plus its dock or ground station weighs **more than 4.4 lb**
- (iv) it contains **all** of these:
  - a sensor capable of perceiving its environment
  - network connectivity (wired or wireless, including **Bluetooth/Wi-Fi, cellular or satellite**) of **at least 200 kbps** in either direction
  - software or firmware that controls autonomous navigation, perception, data collection or remote command-and-control

Exclusions: connected vehicles, rail vehicles, drones, UUVs, FDA medical devices, and fixed industrial or medical arms. Source: https://www.fcc.gov/covered-list-faqs-robots-inverters

**Robot mowers are in scope.** The FCC confirmed to PCMag that the ban "covers both robot vacuums and robot lawn mowers" (secondary, PCMag, 29 Jul 2026): https://www.pcmag.com/news/fcc-ban-on-foreign-made-robots-includes-robot-vacuums

## 3. "Foreign-produced" means where it's made, not who owns the brand
- The FCC uses the Buy American "domestic end product" test (48 CFR 25.101(a)). The product must be **manufactured in the US**, and **domestic component cost must be more than 65%** (2024–2028), rising to **75% from 2029**. COTS components count. FAQ: https://www.fcc.gov/covered-list-faqs-robots-inverters
- "The nationality of the entity … is not relevant." The action is "country neutral." (same FAQ)
- So a US brand that builds in China (likely Ryobi, Greenworks, Worx; country of manufacture **unconfirmed** for each) is treated the same as a Chinese brand. A Swedish brand with European or other factories (Husqvarna) is also foreign-produced. **We found no robot mower currently sold in the US that clearly qualifies as a domestic end product (unconfirmed; we found no counter-example).**

## 4. What it means in practice

| Question | Answer | Source |
|---|---|---|
| Can I keep using a mower I already own? | Yes. "Consumers can continue to use the devices they lawfully purchased." | FAQ |
| Can stores (including Amazon) keep selling existing models? | Yes, if the model already holds an FCC equipment authorization (an FCC ID, or SDoC). | Fact sheet; FAQ |
| Will my mower still get firmware updates? | Updates that keep devices working or patch vulnerabilities are allowed **at least until 1 Jan 2029** under a waiver. The FAQ also says basic software/firmware updates may continue. | DA 26-789; FAQ |
| Can I get it repaired? | Yes. Repairs and replacement with **identical** parts are not prohibited. | FAQ |
| Can a brand launch a brand-new model in the US? | Not unless the model was authorized before 28 Jul 2026, is US-made (domestic end product), or gets DoW Conditional Approval. | FAQ; fact sheet |
| Can I import a new overseas model myself? | Generally no. An unauthorized covered device cannot be operated in the US. | FAQ ("If someone buys a 'covered' … outside the United States…") |
| Deadline to apply for Conditional Approval? | PCMag reports the guidelines say applications must be in by **1 Jan 2028** (secondary; **unconfirmed** against the guidance PDF). | PCMag CA (headline/snippet via search, 10 Oct 2026): https://ca.pcmag.com/smart-lawn-mowers/18033/fcc-cuts-swedish-smart-mower-maker-a-break-with-first-exemption-to-robot-ban |
| What does approval require? | Disclosure of ownership, a full BOM with countries of origin, and a time-bound **US onshoring plan** with quarterly updates. | Skadden summary (secondary): https://www.skadden.com/insights/publications/2026/08/fcc-updates-covered-list-to-include-foreign-produced-advanced-robotic-devices |

### How to check a model's FCC status (useful for a "How to check" page)
- Certified devices are listed in the FCC EAS database by FCC ID: https://apps.fcc.gov/oetcf/eas/reports/GenericSearch.cfm (FAQ)
- Examples found: Segway Navimow X3 series, FCC ID **2BAXN-MR0005** (third-party mirror https://fccid.io/2BAXN-MR0005). Mammotion filings 2BVPU-LUBAMN2 (https://fccid.io/2BVPU-LUBAMN2) and a LUBA 3 grant (https://fccid.ai/2BFWS-LUBA3SH). These are **third-party mirrors; verify in the FCC EAS before quoting.**

## 5. Brand-by-brand impact (status on 10 Oct 2026)

| Brand | Made where (best evidence) | Status | Notes |
|---|---|---|---|
| Husqvarna Automower (incl. NERA, EPOS) | Sweden-HQ; factory locations **unconfirmed** | **Conditional Approval, 9 Sep 2026**, for 305V iQ, 310V iQ, 420V iQ and 440V iQ platforms (expected to launch in the US in 2027). Husqvarna says "already approved models currently available on the market" are also exempt. | FCC table; Husqvarna PR 11 Sep 2026: https://www.inderes.se/en/releases/husqvarna-group-first-to-receive-fcc-conditional-approval-for-foreign-manufactured-advanced-robotic-lawn-mowers-in-the-us |
| Segway Navimow | China (per SpecsLib, secondary) | No Conditional Approval listed. Segway statement: "no immediate impact … all Navimow models currently sold in the U.S. have already received FCC equipment authorization"; it is "evaluating compliance pathways for future products". | Quoted by SpecsLib (secondary; original statement not located): https://specslib.com/en/news/fcc-robot-mower-import-ban/ |
| Mammotion (LUBA, YUKA) | China | No Conditional Approval listed. Existing models hold FCC IDs (see §4). A Reddit mod/user said Mammotion "has yet to comment". | https://www.reddit.com/r/MammotionTechnology/comments/1vati8t/recent_fcc_decision_impact_on_robot_mowers/ |
| Ecovacs GOAT, Dreame, MOVA, Eufy (Anker), Sunseeker | China (generally; per model **unconfirmed**) | No Conditional Approval listed. | FCC table |
| Worx (Positec), Greenworks, Ryobi (TTI) | Likely China/Asia (**unconfirmed**) | No Conditional Approval listed. US/foreign brand nationality is irrelevant. | FAQ |
| Cheap boundary-wire mowers with **no** app/radio | — | **Possibly outside the definition**, because it requires ≥200 kbps network connectivity. A wire mower with Bluetooth/Wi-Fi app control very likely qualifies. **This is our interpretation, not FCC guidance.** | FAQ definition (iv)(ii) |

## 6. Related pending risk
- On 10 Aug 2026 the FCC proposed (comment period) to ban **continued importation and marketing of previously authorized** covered equipment. The **named targets were NDAA §1709 equipment / Anzu Robotics (drones)**, not robot mowers. Still, a mechanism exists (47 CFR 2.939(e), 30-day comment plus public-interest analysis) that could one day be applied to previously authorized robots. Sources: https://www.benton.org/headlines/fcc-proposes-prohibit-import-marketing-covered-equipment ; Covered List page, "Importation/Marketing Prohibitions". **No such proposal exists for robot mowers as of 10 Oct 2026.**

## 7. What it means for robotmowguide.com
1. **Buyers today:** buy on merit. Existing authorized models stay legal to sell and use, and they get firmware updates until at least 1 Jan 2029. Say this calmly. Avoid scare framing.
2. **Our model lists:** only list models that are **actually on sale in the US now**, with a "sold in US since" date where possible. Treat any 2027 "coming soon" model as **unconfirmed for the US** unless it is on the Conditional Approval list or has an FCC ID. Husqvarna's 305V/310V/420V/440V iQ are the only ones cleared so far.
3. **Long-term support is a real buying factor.** Firmware updates are guaranteed by the waiver only to 1 Jan 2029. After that it depends on further FCC action (unknown). Put a "support outlook" line in each review. Prefer models with offline/local functionality, and note which features need cloud/4G.
4. **Grey imports / EU-only models** (for example some Mammotion, Dreame, Sunseeker and Stiga EU models): tell readers they can't lawfully be operated in the US without FCC authorization. Don't link to them.
5. **Content opportunity:** a dated, sourced explainer, "Robot mower FCC ban 2026: what it means if you're buying," with an FAQ, a brand table and a "how to check an FCC ID" walkthrough. Update it whenever the FCC table changes. Competitors mostly cover this badly (see COMPETITORS.md).
6. **Wording to avoid:** "banned brand", "illegal to buy", "Chinese ban". The rule is country-neutral and doesn't stop existing models being sold.
