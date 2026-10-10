# Deployment Notes

## Vercel
1. Connect GitHub repo to Vercel project.
2. Framework preset: Astro
3. Build command: `npm run build`
4. Output directory: `dist`
5. Set environment variables if needed (none required initially).

## Domain
- Add robotmowguide.com in Vercel Domains
- Update DNS at registrar to point to Vercel
- Enable HTTPS

## Post-Deploy
- Submit sitemap to Google Search Console
- Verify ownership
- Monitor Core Web Vitals
- Set up analytics (optional: Plausible, GA4, or Vercel Analytics)
