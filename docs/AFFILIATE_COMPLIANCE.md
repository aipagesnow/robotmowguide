# Affiliate compliance — Amazon Associates (US)

## Program and tag
- Program: Amazon Associates US (amazon.com), under Chris's US account (holdlab-20, OneLink global earning already on).
- Tracking ID for this site: a new one to be created by Chris, probably `robotmowguide-20`. It lives **only** in the Vercel env var `AMAZON_ASSOCIATE_TAG`. Never in git, never in `content/products.json`, never hardcoded.
- Marketplace: amazon.com only. Never amazon.co.uk or other marketplaces; OneLink handles non-US visitors.

## Links
- Format: `https://www.amazon.com/dp/{ASIN}?tag={AMAZON_ASSOCIATE_TAG}`. No search URLs, no shortened links, no cloaking redirects.
- Attributes: `rel="nofollow sponsored noopener"`, `target="_blank"`.
- Button text: "See on Amazon" or "Check price on Amazon". No "Buy now", no Amazon logo, no Amazon-orange lookalike buttons.
- Built server-side; client components receive the finished href.
- Products with `asin: null` get no link at all, only the plain line from VOICE.md.

## Disclosure
- Every page with Amazon links shows, before the first link: "As an Amazon Associate we earn from qualifying purchases." with a link to /affiliate-disclosure.
- Short line in the footer of every page.
- Full page at /affiliate-disclosure explaining what it means for the reader (same price, rankings not paid).

## Content rules tied to the program
- No Amazon prices on the site (no scraped or frozen prices, no "price drop" claims).
- No Amazon star ratings or review counts copied onto the site.
- No Amazon product images without PA-API approval (and none at launch at all; see IMAGES.md).
- No Amazon trademarks in the domain, logo, favicon or social handles.
- Don't encourage people to click for reasons other than reading the product (no "click to support us").
- No links in emails or offline material.

## Checks at launch and after each round
- Every Amazon href on production includes `?tag=` with the live tracking ID (SHIP-SCAN.md).
- Disclosure appears above the first Amazon link on every page that has one.
- GA4 `amazon_click` fires on each CTA type (primary, table, alternative).
