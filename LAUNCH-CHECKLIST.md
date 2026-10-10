# LAUNCH-CHECKLIST.md — robotmowguide.com

Owner key: **Chris** (needs his accounts), **Vora** (ops and QA), **Build** (a Grok Build round). Tick each item with a date. The site is "launched" only when every section is done and every BLOCKER/HIGH from QA is fixed.

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
- [ ] **Vora:** **verify live:** open one CTA of each type (primary, table, alternative) on home, /best, a review, a vs page and a guide. Every link is `https://www.amazon.com/dp/{ASIN}?tag=<new tag>`. The i110N (null ASIN) page shows no Amazon link.
- [ ] **Vora:** ship scan run on production (SHIP-SCAN.md) finds no untagged, search-style or `.co.uk` links.

## 4. ASIN lookup step (before every round and at launch)
- [ ] **Vora:** for every product with an ASIN in content/products.json, open `https://www.amazon.com/dp/{ASIN}` and confirm the title names the exact model and version (e.g. 3000 vs 3000H, WR344 vs WR340) and the listing is live. Update `asinCheck.checked`.
- [ ] **Vora:** for every product with `asin: null`, try to find an exact listing. Only add an ASIN after the /dp page shows the exact model. Never invent or guess. Go slowly; stop at any captcha and leave it null.
- [ ] **Vora:** if a listing disappears or changes model, set `asin` to null (the page loses its button automatically) and note it.

## 5. GA4
- [ ] **Chris:** create a GA4 property "RobotMowGuide" under the **Amazon Websites** account; web stream for `https://robotmowguide.com`.
- [ ] **Chris/Vora:** set `NEXT_PUBLIC_GA_ID` in Vercel and redeploy.
- [ ] **Vora:** in DebugView, `amazon_click` fires on every CTA type with `asin`, `product_slug`, `page_type`, `link_position`; mark `amazon_click` as a key event.
- [ ] **Vora:** add the property to the weekly GA4 pull and the Amazon click dashboard feed.

## 6. Google Search Console
- [ ] **Chris:** add a **Domain property** `sc-domain:robotmowguide.com` (DNS TXT record in Vercel DNS).
- [ ] **Chris:** add **gsc-reader@getaipages.iam.gserviceaccount.com** as a user on the property (same permission level as the other keepers).
- [ ] **Vora:** submit `https://robotmowguide.com/sitemap.xml`; confirm the API pull can read the property.
- [ ] **Vora:** URL Inspection on home, /best and one review; request indexing for those.

## 7. Bing Webmaster Tools and IndexNow
- [ ] **Chris:** add the site in Bing Webmaster Tools (import from GSC is quickest; otherwise `BING_SITE_VERIFICATION` meta tag).
- [ ] **Vora:** submit the sitemap in Bing.
- [ ] **Vora:** confirm `https://robotmowguide.com/<indexnow-key>.txt` returns the key; set `INDEXNOW_SUBMIT_SECRET` in Vercel; send the first submission through `POST /api/indexnow` (all live URLs) and confirm a 200/202 response.
- [ ] **Vora:** check Bing's **AI Performance** report (Copilot/AI citations) is available for the site and note the baseline (likely zero at launch); add it to the weekly Bing pull.

## 8. Crawl and AI-readiness checks (production)
- [ ] `robots.txt` allows all crawlers including the main AI crawlers listed in docs/SEO_AND_QUALITY.md; disallows only `/api/`; lists the sitemap.
- [ ] `sitemap.xml` lists only live, indexable pages with real `lastmod`.
- [ ] `llms.txt` lists every live hub, review, vs page, guide and trust page with one-line summaries.
- [ ] Canonicals are absolute and point at `https://robotmowguide.com/...` on every page (no preview domains).
- [ ] Schema validates (Article, FAQPage, BreadcrumbList, Organization, WebSite); no Review/Product/AggregateRating.
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

## 15. Final
- [ ] Production deploy for the launch commit is READY.
- [ ] Email Chris the launch summary: live URL, tag check result, GA4/GSC/Bing status, QA outcomes, what's queued next.
