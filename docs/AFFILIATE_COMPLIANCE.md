# Affiliate compliance — Amazon Associates (US)

## Program and tag
- Program: Amazon Associates US (amazon.com), under Chris's US account (holdlab-20, OneLink global earning already on).
- Commission: Lawn & Garden is **3.00%** on Amazon's official rate table (some third-party sites say 2%; use 3% in any planning maths). The cookie lasts 24 hours from the click (90 days for items added to the cart).
- Tracking ID for this site: `robotmowguide-20` (created). It lives **only** in the Vercel env var `AMAZON_ASSOCIATE_TAG`. Never in git, never in `content/products.json`, never hardcoded.
- Marketplace: amazon.com only. Never amazon.co.uk or other marketplaces; OneLink handles non-US visitors.

## Links
- Format: `https://www.amazon.com/dp/{ASIN}?tag={AMAZON_ASSOCIATE_TAG}`. No search URLs, no shortened links.
- **No redirect routes of any kind** (no `/go/`, `/out/`, `/recommends/`), not even for tracking. Amazon forbids cloaking or obscuring Special Links, including redirecting links. Click tracking uses the GA4 beacon event instead.
- Attributes: `rel="nofollow sponsored noopener"`, `target="_blank"`.
- Button text: "See {model} on Amazon" (or "See on Amazon" in table cells with a model-specific `aria-label`). No "Buy now", no Amazon logo, no Amazon-orange lookalike buttons.
- Built server-side; client components receive the finished href.
- Products with `asin: null` get no link at all, only the plain line from VOICE.md.

## Disclosure
- Every page with Amazon links shows, before the first link, the Agreement's exact wording: "As an Amazon Associate I earn from qualifying purchases." followed by a short plain line and a link to /affiliate-disclosure (VOICE.md).
- A short repeat ("Paid links: see disclosure") sits next to every CTA cluster on long pages (quick-pick box, comparison table, end CTA block) and inside any sticky bar. The FTC wants the disclosure close to the claim and seen before the click.
- Short line in the footer of every page.
- Full page at /affiliate-disclosure explaining what it means for the reader (same price, rankings not paid).

## Content rules tied to the program
- No Amazon prices on the site (no scraped or frozen prices, no "price drop" claims).
- No Amazon star ratings or review counts on the site, **including paraphrases** ("4.3 stars on Amazon", "highly rated on Amazon", "thousands of reviews"). Amazon's AI "Customers say" summary is also Amazon review content: don't quote or paraphrase it.
- No Amazon product images without PA-API approval (and none at launch at all; see IMAGES.md).
- No Amazon trademarks in the domain, logo, favicon or social handles.
- Don't encourage people to click for reasons other than reading the product (no "click to support us").
- **No Amazon links in email or offline material** (newsletters, PDFs, printed material, SMS, attachments). Any newsletter links only to pages on the site.
- No misleading availability: a discontinued model loses its button; status lines are dated.
- No fake urgency or deal banners. No "under $X" claims tied to Amazon listings.

## Checks at launch and after each round
- Every Amazon href on production includes `?tag=` with the live tracking ID (SHIP-SCAN.md).
- Disclosure appears above the first Amazon link on every page that has one.
- GA4 `amazon_click` fires with the right `placement` on each CTA type.
- No redirecting links: every Amazon href in the HTML starts with `https://www.amazon.com/dp/`.
