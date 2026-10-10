# Buyer questions, grouped into topic clusters and mapped to pages

Collected 10 Oct 2026. Sources:
- **(AC)** Google US autocomplete (`suggestqueries.google.com`, hl=en, gl=us). Raw output is in `_autocomplete.txt`.
- **(R)** Reddit threads collected for OWNER-VOICE.md.
- **(B)** Brand FAQ pages (the questions brands themselves answer).
- **(PAA-style)** Questions phrased the way Google's People Also Ask box phrases them. **We couldn't scrape the real PAA boxes**, so these are inferred from autocomplete and brand FAQs. Check them in a real SERP before finalizing.

We have **no search volumes**, so the priority (P1–P3) below is our judgement. Size it later with Keyword Planner or Ahrefs.

---

## Cluster A: Yard size / acreage (money cluster)
Queries:
- robot lawn mower 1 acre (+ price, reviews, gps, reddit)
- robot mower for 2 acres / 3 / 5 / 10 acres
- best robot mower for 1/2 acre
- robot lawn mower for large yards
- robot mower for small yard
- husqvarna robot mower 2 acres
- robot lawn mower no wire 1 acre (AC)

Questions:
- How big a mower do I need for 1 acre?
- Is "rated area" the real area?
- Can one mower do 2+ acres?

Pages:
- `/best/robot-mower-1-acre` (P1)
- `/best/robot-mower-half-acre` (P1)
- `/best/robot-mower-small-yard` (quarter acre and under) (P1)
- `/best/robot-mower-2-acres` (P2). Few consumer options: Husqvarna 440 iQ (2 ac), Navimow X390 (2.5 ac). Be honest that 3+ acres means commercial units or two mowers.
- `/guides/how-big-a-robot-mower-do-i-need` (P1). Explain map limits (Navimow 1.2×, Husqvarna ±20%, irregular vs systematic) and give a calculator.

## Cluster B: Slopes and hills
Queries:
- robot lawn mower for hills / hillside / steep hills / steep banks / steep incline
- best robot mower for steep slopes
- do robot mowers work on hills
- can robot mowers work on hills (AC)

Questions:
- What % slope can a robot handle?
- % vs degrees?
- Why does the boundary limit differ? (Husqvarna 15% at boundary vs 45% inside.)
- Is AWD necessary?

Pages:
- `/best/robot-mower-for-hills` (P1). Candidates: Navimow X4 84%, Mammotion LUBA 3/mini 2 80%, Dreame A3 80%, Husqvarna 435 iQ AWD 70%.
- `/guides/slope-percent-vs-degrees` (P2), with a slope-measuring how-to (phone app / level + string).

## Cluster C: Navigation tech (RTK vs LiDAR vs vision vs wire)
Queries:
- rtk vs lidar (robot mower / mower)
- net rtk vs lidar
- navimow rtk vs lidar
- rtk vslam vs lidar
- robot lawn mower without wire / without perimeter wire / without boundary wire
- best robot mower under trees / around trees (AC)

Questions:
- Will RTK work under my trees?
- Do I need an antenna?
- What is network RTK and does it need cell coverage?
- Is LiDAR affected by heat or sun? (R)
- Are wire mowers obsolete?

Pages:
- `/guides/rtk-vs-lidar-vs-vision` (P1, flagship explainer with diagrams)
- `/best/robot-mower-under-trees` (P1)
- `/guides/network-rtk-explained` (P2)
- `/best/wire-free-robot-mower` (P1)

## Cluster D: Grass types (US-specific gap)
Queries:
- robot mower st augustine (grass / in florida)
- best robot mower for st augustine grass
- robot mower bermuda grass / best robot mower for bermuda grass
- robot mower zoysia / best robot mower for zoysia
- robot mower tall fescue / best robot mower for fescue (AC)

Questions:
- Can a robot cut thick St. Augustine at 3.5–4"?
- Bermuda at 1"?
- Which brands say *not* for St. Augustine? Eufy E15: "Not suitable for St. Augustine and dense Zoysia" (B).
- Is a minimum cut height a problem for Bermuda? Max cut height for St. Aug matters: Navimow X4 0.75–4", Husqvarna iQ 1–4", LUBA 3 std 1.0–2.7" vs H 2.2–4.0", eufy 1–3".

Pages:
- `/best/robot-mower-st-augustine` (P1)
- `/best/robot-mower-bermuda` (P1)
- `/best/robot-mower-zoysia` (P2)
- `/best/robot-mower-fescue` (P3)
- Build a **cut-height-range table by grass type** (P1 asset). Recommended heights come from extension services. **Find NC State / UF IFAS / Texas A&M sources; not yet collected.**

## Cluster E: Connectivity, apps and subscriptions
Queries:
- robot lawn mower without wifi / no wifi
- do robot mowers need wifi
- robot mower subscription
- do robot mowers require a subscription (AC)

Questions:
- Does it work with no Wi-Fi in the yard? Ecovacs says basic ops work without Wi-Fi (B). Sunseeker X5 needs Wi-Fi only at the dock (B). eufy recommends 4G if Wi-Fi doesn't cover the yard (B).
- What do 4G plans cost after the free period? Navimow Connect+ is $32.90/yr; Mammotion's price isn't stated.
- What still works if the company's cloud goes away?

Pages:
- `/guides/robot-mower-without-wifi` (P1)
- `/guides/robot-mower-subscriptions-compared` (P1, unique, data table)

## Cluster F: Cost, value and running costs
Queries:
- robot lawn mower price
- how much do robot lawn mowers cost
- how much do robot mowers cost to run
- robot lawn mower worth it (reddit)
- are robot lawn mowers worth the money
- robot lawn mower vs riding mower / push mower / zero turn
- robot lawn mower costco
- what is the cheapest robotic lawn mower (AC)

Questions:
- Electricity cost per year? (Mammotion claims EcoSleep saves 100 kWh/yr, which implies dock standby draw matters (B). Calculate from battery Wh × cycles. **Not yet computed.**)
- Blades cost? (Husqvarna includes a year of blades (B). Third-party blades run about $13–30 per 24–36 pcs on Amazon (search results).)
- 4G subscriptions?
- Battery replacement?
- Payback vs a lawn service? (Noah Kagan's $100/mo framing (X).)

Pages:
- `/guides/robot-mower-cost-to-own` (P1, calculator)
- `/guides/are-robot-mowers-worth-it` (P1)
- `/vs/robot-mower-vs-riding-mower` (P2)
- `/best/cheap-robot-mower` (P2)

## Cluster G: Weather, seasons, storage
Queries:
- robot mower rain / rain sensor / wet grass / after rain / rain cover
- robot mower winter / winter storage
- can robot mowers cut wet grass (AC)

Questions:
- Can it run in rain? (IP ratings: Navimow IP66, Husqvarna IPX5, Mammotion IPX6.)
- Does it auto-pause? (Weather-forecast pause: Navimow. Rain sensors: X4, Mammotion.)
- Can I leave it out over winter?
- How do I store the battery? (LUBA mini 2 has battery preheating (B). A Navimow Amazon review mentions a battery dying over winter.)
- Do I need a garage? (Navimow says no metal garages, because they block GNSS (B).)

Pages:
- `/guides/robot-mower-in-rain` (P2)
- `/guides/robot-mower-winter-storage` (P1, seasonal)
- `/best/robot-mower-garage` (P3, accessory affiliate)

## Cluster H: Safety: kids, pets, wildlife, dog poop
Queries:
- robot mower pets
- are robot lawn mowers safe / dangerous
- robot lawn mower vs dog poop
- can robot mowers avoid dog poop
- can robot mowers mow at night (AC)

Questions:
- Will it hit my dog or kid?
- Does it stop when lifted?
- Hedgehog/wildlife night modes? (Navimow Animal-Friendly, Mammotion Wildlife Safety (B).)
- Can it avoid dog poop?
- Should I avoid night mowing? (vision-based models generally weaker in the dark; brand statement **unverified**.)

Pages:
- `/guides/robot-mower-safety-kids-pets` (P1)
- `/guides/robot-mower-dog-poop` (P2, high-curiosity query)

## Cluster I: Theft and security
Queries:
- robot mower theft (prevention / insurance)
- robot mower stolen (reddit)
- do robot mowers get stolen
- robot mower anti theft (AC)

Questions:
- Does GPS tracking work if the mower is turned off? (Not on Navimow per owners (R).)
- AirTag / Find My?
- PIN locks?
- Insurance?

Pages:
- `/guides/robot-mower-theft-protection` (P1, comparison of anti-theft features by brand)

## Cluster J: Layout: multiple zones, front and back, narrow paths
Queries:
- robot mower multiple zones / multi zone
- robot lawn mower for front and backyard
- husqvarna robot mower multiple zones (AC)

Questions:
- Can it cross a driveway or sidewalk? (Husqvarna and others support transport paths; feature names per brand **unverified**.)
- Minimum passage width? (Navimow i: 100 cm wide × 40 cm high; LUBA 3: 70 cm; X4 body 24" (B).)
- Separate unconnected lawns? (Navimow 'Isolated Zone' / Mammotion 'DropMow' features: names seen in research, **unverified**.)
- Gates? (Navimow sells the MowGate accessory, $449.99 on navimow.com (B, verified 10 Oct); the X post about a DIY gate.)

Pages:
- `/guides/robot-mower-front-and-back-yard` (P1)
- `/guides/narrow-paths-and-gates` (P3)

## Cluster K: Mowing performance basics
Queries:
- do robot mowers collect grass / mulch / pick up grass
- can robot mowers do edges / edge
- can robot mowers cut long grass
- can robot mowers mulch leaves (AC)

Pages:
- `/guides/do-robot-mowers-edge` (P1). Owner pain point; cover Dreame EdgeMaster's 3 cm fixed cut and Ecovacs' trimmer.
- `/guides/robot-mower-tall-grass` (P2)
- An FAQ block on mulching / no clippings.

## Cluster L: Reliability, problems, lifespan
Queries:
- robot lawn mower problems
- how long do robot mowers last
- are robot lawn mowers reliable
- robot lawn mower reddit / reviews (AC)

Pages:
- `/guides/robot-mower-problems-fixes` (P2). Covers stuck, docking, RTK loss, error codes.
- `/guides/how-long-do-robot-mowers-last` (P2)
- Brand-specific troubleshooting (P3 later; good long-tail).

## Cluster M: Regulation / FCC (timely, low competition)
Queries:
- robot mower fcc
- fcc robot mower ban
- are robot lawn mowers banned (AC)

Questions:
- Can I still buy one?
- Will mine stop getting updates?
- Which brands are approved?

Page:
- `/news/fcc-robot-mower-ban-explained` (P1, see FCC-RULE.md). Keep it dated and updated.

## Cluster N: Brand / model navigational (affiliate reviews)
Queries:
- segway robot mower amazon
- mammotion robot mower amazon
- husqvarna robot mower amazon
- eufy robot mower amazon discount
- lawnmaster robot mower amazon
- robot lawn mower consumer reports (AC)

Pages:
- Model reviews for the top ~12 current US models in MODELS.md.
- `/vs/` pages: Navimow X430 vs LUBA 3 3000; Dreame A3 vs Mammotion mini 2; Husqvarna 420 iQ vs Navimow X430; eufy E15 vs Worx Vision Cloud.
- "LawnMaster robot mower" appeared in autocomplete; **we haven't researched it.**

## Cluster O: HOA / renting / installation (light)
Little autocomplete data (HOA and "kids safe" returned nothing). Dreame's copy pitches wire-free mowers to renters and HOA members (B).
Use this as an FAQ section only, not a standalone page.


---
Verification note (10 Oct 2026):
- Verified on the brand pages: Navimow 100 cm passage, metal-free garage, Animal Friendly Mode and Weather Monitoring (navimow.com/products/navimow-i110); Mammotion EcoSleep 100 kWh/yr, 70 cm gap and Wildlife Safety (LUBA 3 page); LUBA mini 2 Low-Temperature Preheating.
- Anything marked **unverified** above still needs a source before publishing.
