# Starter Prompt for Grok Build

Copy and paste the following into your Grok Build / AI coding tool after cloning the repo:

---

You are building an Amazon affiliate website called RobotMowGuide.com focused on high-ticket robotic lawn mowers.

**Domain**: robotmowguide.com
**Framework**: Astro
**Hosting**: Vercel (deploy from this GitHub repo)
**Styling**: Tailwind CSS

Key requirements:
- Hub-and-spoke SEO architecture (pillar page + cluster content)
- Strong conversion elements on money pages: quick verdict/summary box, comparison tables, who-it's-for, pros/cons, FAQs, clear CTAs, affiliate disclosures near the top
- Original images only (placeholders or generated to match products)
- Fast, SEO-optimized, excellent Core Web Vitals
- Schema markup for reviews/products/FAQ
- Responsive design
- Mix of informational supporting content and commercial money pages

Please:
1. Initialize the Astro project in this repository (if not already present).
2. Set up the basic site layout (header, footer with disclosure, navigation).
3. Create the homepage and the main pillar page "Best Robotic Lawn Mowers" following the money page structure in docs/.
4. Build reusable components for comparison tables, product cards, pros/cons, summary boxes, and CTAs.
5. Add sample content for products using the updated data in content/products.json and insights in docs/2026_PRODUCT_INSIGHTS.md.
6. Include clear Amazon affiliate disclosure site-wide.
7. Make it ready for Vercel deployment (proper config, sitemap, etc.).

Refer to ALL files in /docs/ (especially PROJECT_BRIEF, SITE_STRUCTURE, MONEY_PAGE_STRUCTURE, CONTENT_STRATEGY, 2026_PRODUCT_INSIGHTS, SEO_CHECKLIST, IMAGE_GUIDELINES, COMPONENT_SPECS) and content/products.json. Follow those specs closely for SEO, conversion, and accuracy.

Start by scaffolding the Astro project, core layout, and main pages.

---
