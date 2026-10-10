# SHIP-SCAN.md — visitor-only text check (run after every build round)

Nothing ships unless this scan is clean. It catches text a visitor isn't meant to see: dev notes, placeholders, sample content, prompt leftovers, untagged or search-style Amazon links.

## When
- After every Grok Build round, before merging/promoting.
- Again on the live production URL after each round goes live.

## How (round 1 builds `scripts/ship-scan.mjs` to do this)
1. `npm run build` must pass.
2. Scan the rendered HTML of every page (static output under `.next/server/app/**/*.html`, or crawl every URL in the preview's `/sitemap.xml`) plus `/llms.txt`, `/robots.txt` and image alt text.
3. Strip tags and scan visible text + attributes (`alt`, `title`, `aria-label`, meta description, OG tags, JSON-LD) for the patterns below, case-insensitive.
4. Fail with file/URL + matching line. Zero matches = pass.

## Patterns that fail the scan
```
TODO|FIXME|XXX|TBD|TK\b|lorem|ipsum|placeholder|sample (content|text|data|product)|dummy|example\.com|coming soon|under construction|insert (here|image|link)|replace (this|me|before)|add (copy|content) here
\{\{|\}\}|\[\[|\]\]|\bundefined\b|\bNaN\b|\bnull\b|\[object Object\]
as an AI|language model|Grok|Vora|prompt|Chris\b|Aivora internal|dev note|note to (self|editor|builder)|for the builder|do not publish|draft\b
we tested|in our testing|hands-on|our test lawn|lab test|tested by us
\b\d(\.\d)?/10\b|★|☆|stars? rating|editor'?s choice
amazon\.com/s\?|tag=yourtag|tag=\$\{|tag=undefined|tag=&|tag=$|amazon\.co\.uk
localhost|vercel\.app|127\.0\.0\.1
```
Notes:
- "Aivora Digital" as the publisher name on About/footer is allowed; the pattern targets internal notes.
- `null` may appear legitimately inside JSON-LD; the script should ignore JSON-LD `null` values but flag visible "null".
- Check every Amazon `href` separately: it must match `^https://www\.amazon\.com/dp/[A-Z0-9]{10}\?tag=<the production tag>$` on production, and every product with `asin: null` must render no Amazon link.

## Manual pass (5 minutes, every round)
- Open each new or changed page on a phone-width window and read it top to bottom.
- Check image slots: only approved images render; no empty frames.
- Check the footer, 404 page, OG preview and llms.txt.
- Record "Ship scan: pass" with the date in the round's notes in NEXT-PROMPTS.md.
