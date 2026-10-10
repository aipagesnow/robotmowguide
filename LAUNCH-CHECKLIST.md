# LAUNCH-CHECKLIST.md — robotmowguide.com

Owner key: **Chris** (needs his accounts), **Vora** (ops and QA), **Build** (a Grok Build round). Tick each item with a date. The site is "launched" only when every section is done and every BLOCKER/HIGH from QA is fixed.

**Launch target: Nov–Dec 2026** (round 6 window Dec 3–10; first half of December at the latest), so pages are indexed and aged before the Mar–May 2027 season. Feb 2027 refresh is scheduled (NEXT-PROMPTS.md round 8).

## 0. Decisions for Chris (before or during round 1)
- [ ] **Byline:** default is the organization byline "RobotMowGuide editors" with the fact-check line and a real contact route. Chris may choose to be the named editor later (true short bio, his real role, a ProfilePage author page). Never a made-up persona or AI headshot. If he opts in, update VOICE.md, PAGE_RECIPES.md and SHIP-SCAN.md in one commit.
- [ ] **Contact route:** choose a real address for /about and /privacy (e.g. a robotmowguide.com mailbox via email forwarding, or an existing Aivora address). It must be monitored.
- [ ] **Training crawlers:** keep GPTBot, ClaudeBot, Google-Extended, Applebot-Extended, CCBot and others allowed (current default), or block them. Search and answer crawlers stay allowed either way.
- [ ] **Disclosure wording:** the plan uses Amazon's exact Agreement sentence ("As an Amazon Associate I earn from qualifying purchases."). Keep, or switch to the "we" variant.
- [ ] **Extra tracking IDs (optional):** separate IDs per placement type (e.g. quick-pick vs table) for revenue by placement in Amazon reports. GA4 placement events work without them.
- [ ] **Non-Amazon picks:** Lymow One Plus (Wirecutter's upgrade pick) and the Husqvarna iQ models have no verified Amazon listing. Default: cover them on merit with no button. Later option: a manufacturer-store link program.
- [ ] **Sales clock:** confirm holdlab-20's sales history is healthy (Amazon closes accounts with no qualifying sales in 180 days; the Creators API also needs sales before product images or prices can be used).

## 1. Accounts, repo and Vercel
- [ ] **Chris:** Vercel project on the **aipagesnow** team, imported from `github.com/aipagesnow/robotmowguide`, framework Next.js.
- [ ] **Vora:** every commit authored as **Aivora Digital <aipages.now@gmail.com>**; production deploys show **READY**, not BLOCKED (vercel-deploy-author). Never force-push.
- [ ] **Vora:** preview deploys work per round (NEXT-PROMPTS.md gate).

## 2. Domain: GoDaddy to Vercel
robotmowguide.com was registered at GoDaddy on Oct 10, 2026 (nameservers ns27/ns28.domaincontrol.com, parked).
- [ ] **Chris:** confirm which GoDaddy account holds it and turn on auto-renew (expires Oct 10, 2027 unless renewed).
- [ ] **Chris:** add `robotmowguide.com` and `www.robotmowguide.com` to the Vercel project. Apex is canonical; `www` 308-redirects to apex.
- [ ] **Chris:** at GoDaddy, change nameservers to Vercel (`ns1.vercel-dns.com`, `ns2.vercel-dns.com`) so DNS is managed in Vercel. (Alternative: keep GoDaddy DNS and add Vercel's A/CNAME records.)
- [ ] **Chris (later, optional):** move the registration itself to Vercel. New registrations are locked against registrar transfer for 60 days, so this can't happen before about **Dec 9, 2026**.
- [ ] **Vora:** HTTPS certificate issued; `https://robotmowguide.com` returns 200; `http://` and `www` redirect in one hop.

## 3. Amazon tag
- [x] **Chris (10 Oct 2026):** tracking ID `robotmowguide-20` created under the US Associates account (holdlab-20, OneLink on). Still to do: confirm robotmowguide.com is in the account's website list.
- [ ] **Chris/Vora:** set `AMAZON_ASSOCIATE_TAG` in Vercel (Production; Preview optional) and redeploy.
- [ ] **Vora:** **verify live:** open one CTA of each placement (quick-pick, verdict, pick block, table, variant table, vs top, end block, finder) on home, /best, a best-for page, a review, a vs page, a guide and the finder. Every link is a direct `https://www.amazon.com/dp/{ASIN}?tag=robotmowguide-20` with no redirect in between. Null-ASIN variants (e.g. Husqvarna iQ, Navimow i110N, LUBA 3 AWD 5000) show no Amazon link.
- [ ] **Vora:** no Amazon links in any email, newsletter, PDF or offline material.
- [ ] **Vora:** ship scan run on production (SHIP-SCAN.md) finds no untagged, search-style or `.co.uk` links.

## 4. ASIN lookup step (before every round and at launch)
Oct 10, 2026: 17 variant ASINs verified across 13 families (content/products.json). No redirects found on the ones in use; `B0GKNQKJJQ` (LUBA 3) now redirects to the cleaning-stand bundle and is not used.
- [ ] **Vora:** for every variant with an ASIN, open `https://www.amazon.com/dp/{ASIN}` and confirm the page shows the **same ASIN** (no redirect to another variant) and a title naming the exact model and version (e.g. 3000 vs 3000H, WR340 vs WR344). Update `asinCheck.checked`.
- [ ] **Vora:** for every variant with `asin: null`, try to find an exact listing. Only add an ASIN after the /dp page shows the exact model and a credible seller. Never invent or guess. Go slowly; stop at any captcha and leave it null. Open questions: Navimow X450, i110N; LUBA 3 AWD 1500/5000/H; Dreame A3 AWD Pro 3500/5000; WR320; Husqvarna iQ models; Airseekers TRON SE (several conflicting listings).
- [ ] **Vora:** if a listing disappears, redirects or changes model, set `asin` to null (the page loses its button automatically), set `status`/`statusDate` if the model is gone, and note it.

## 5. GA4
- [ ] **Chris:** create a GA4 property "RobotMowGuide" under the **Amazon Websites** account; web stream for `https://robotmowguide.com`.
- [ ] **Chris/Vora:** set `NEXT_PUBLIC_GA_ID` in Vercel and redeploy.
- [ ] **Vora:** in DebugView, `amazon_click` fires on every placement with `asin`, `product_slug`, `variant`, `placement`, `page_type` (beacon transport); mark `amazon_click` as a key event; register `placement`, `page_type` and `asin` as custom dimensions. `tool_use` fires on the finder and calculators. web-vitals events arrive.
- [ ] **Vora:** add the property to the weekly GA4 pull and the Amazon click dashboard feed.

## 6. Google Search Console
- [ ] **Chris:** add a **Domain property** `sc-domain:robotmowguide.com` (DNS TXT record in Vercel DNS).
- [ ] **Chris:** add **gsc-reader@getaipages.iam.gserviceaccount.com** as a user on the property (same permission level as the other keepers).
- [ ] **Vora:** submit `https://robotmowguide.com/sitemap.xml`; confirm the API pull can read the property.
- [ ] **Vora:** URL Inspection on home, /best and the two strongest reviews; request indexing for those.
- [ ] **Vora:** leave Search's generative AI controls at their default (on). Two to four weeks after launch, record a baseline from the **generative AI performance report** and add it to the Monday pulse.

## 7. Bing Webmaster Tools and IndexNow
- [ ] **Chris:** add the site in Bing Webmaster Tools (import from GSC is quickest; otherwise `BING_SITE_VERIFICATION` meta tag).
- [ ] **Vora:** submit the sitemap in Bing.
- [ ] **Vora:** confirm `https://robotmowguide.com/<indexnow-key>.txt` returns the key; set `INDEXNOW_SUBMIT_SECRET` in Vercel; send the first submission through `POST /api/indexnow` (all live URLs) and confirm a 200/202 response.
- [ ] **Vora:** check Bing's **AI Performance** report (citations, cited pages, grounding queries) is available and note the baseline (likely zero at launch); record the first real numbers in round 7 and add it to the weekly Bing pull.
- [ ] **Vora:** after every round that goes live and every FCC tracker update, submit changed URLs through IndexNow.

## 8. Crawl and AI-readiness checks (production)
- [ ] `robots.txt` allows the search and answer crawlers listed in docs/SEO_AND_QUALITY.md, applies Chris's training-crawler decision, disallows only `/api/`, and lists the sitemap.
- [ ] `sitemap.xml` lists only live, indexable pages with real `lastmod`; no tool-result URLs.
- [ ] `llms.txt` is the minimal version (site description + key hubs).
- [ ] No redirect routes exist for Amazon links (`/go/`, `/out/` and similar return 404).
- [ ] Canonicals are absolute and point at `https://robotmowguide.com/...` on every page (no preview domains).
- [ ] Schema validates (Article, BreadcrumbList, Organization, WebSite); no FAQPage, Review, Product or AggregateRating. Visible FAQs present.
- [ ] Byline, fact-check line, Updated date and What changed note on every page; researched box on reviews, vs and /best; AI-assistance disclosure on /how-picks-are-chosen.
- [ ] WCAG 2.2 AA spot check: CTA contrast, focus visible, finder keyboard and `aria-live`, table markup.
- [ ] Real 404 status on an unknown URL.

## 9. Favicon and OG pack (live-checked)
- [ ] `/favicon.ico` → 200, real ICO (16/32/48).
- [ ] `/icon.png` → 200, PNG 32×32; `/apple-icon.png` → 200, PNG 180×180; `/apple-touch-icon.png` → 200, PNG 180×180.
- [ ] `/icon` and `/apple-icon` → 200 via rewrites; `/favicon.ico` is not rewritten.
- [ ] `/opengraph-image` and `/twitter-image` → 200, branded card (not a product photo). Share-preview check on one messaging app.

## 10. Images
- [ ] Every image rendering on production is `approved` in content/images.json with Vora's check date.
- [ ] No mower in any photo unless the brief allowed a tiny generic shape; nothing resembling a real model; no text in pixels; no captions under photos.
- [ ] Provenance sentence present on /how-picks-are-chosen.
- [ ] Every Imagine photo on production carries IPTC `DigitalSourceType = trainedAlgorithmicMedia` (exiftool check on a sample).

## 11. Visitor-only text scan
- [ ] Automated ship scan on production: clean.
- [ ] Manual phone-width read of every page, the footer, 404, OG preview and llms.txt: clean.

## 12. QA passes (fix BLOCKER and HIGH before calling it launched)
- [ ] **Jude Mercer:** ship-ready score.
- [ ] **Cass Quinn:** honest trust pass (overclaims, testing implications, thin trust pages).
- [ ] **Ellis Crowe:** search-visibility suppress-risk pass (thin/doorway, AI-spam tells, About/method/disclosure/privacy, soft-404s, crawl traps, affiliate honesty).
- [ ] **Blair Moss:** Monday clarity review of home, /best and one review.

## 13. Join the keeper routines
- [ ] Weekly GSC pull and weekly Bing pull (add robotmowguide.com).
- [ ] Weekly GA4 pull and Amazon click dashboard feed.
- [ ] Monday SEO pulse.
- [ ] Monday AEO check.
- [ ] Weekend keeper refresh.
- [ ] Nightly indexing routine.
- [ ] Monday clarity review (Blair Moss).

## 14. REVIEW-ADD loop
- [ ] **Chris:** create the Grok Automation "RobotMowGuide — weekly REVIEW-ADD" on grok.com using docs/REVIEW-ADD-AUTOMATION.md (Expert/Auto research only, never Build), attached to the RobotMowGuide Grok Project with STYLE, VOICE, AUDIENCE and REVIEW-ADD.md.
- [ ] **Vora:** add the site to the keeper roster and the Mon/Thu intake once GSC data appears (or at launch if Chris asks, as with Trailkit).
- [ ] **Vora:** copy the automation pack into `grok-project-packs/amazon/automations/robotmowguide.md` so it sits with the others.

## 15. After launch (routines)
- [ ] FCC tracker re-checked monthly and on every FCC table change (docs/FCC_RULE_FACTS.md).
- [ ] Specs and ASINs re-checked every 90 days and before any edit; status fields kept current.
- [ ] **Feb 2027 refresh** scheduled (NEXT-PROMPTS.md round 8): 2027 models, FCC status, superseded flags. No structural changes Mar–May 2027.
- [ ] Link earning only by honest routes (SEO_AND_QUALITY.md): FCC tracker and calculator PR, manufacturer Q&A, disclosed forum answers. No affiliate links in outreach, no cross-links between Aivora sites.

## 16. Final
- [ ] Production deploy for the launch commit is READY.
- [ ] Email Chris the launch summary: live URL, tag check result, GA4/GSC/Bing status, QA outcomes, what's queued next.
