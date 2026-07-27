# MD Bulbul Islam — Premium Portfolio

Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion + Lenis.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000

Build for production:

```bash
npm run build
npm run start
```

## What's inside

- Sticky glass navbar, animated hero with mouse-parallax profile card, animated counters, infinite logo marquee, about/timeline, services grid, "why choose me" stats, masonry ad-results gallery with a click-to-zoom lightbox, auto-sliding testimonials, animated process steps, FAQ accordion, contact section (WhatsApp / Facebook / LinkedIn / email form), and footer.
- Lenis for inertia smooth-scrolling, Framer Motion for all scroll reveals, hover states, and the hero parallax — this single stack replaces the GSAP + AOS combination from the brief since they'd otherwise animate the same elements twice.
- SEO: per-page metadata, Open Graph + Twitter cards, a Person JSON-LD schema, `app/robots.ts` and `app/sitemap.ts` (Next's built-in equivalents of `robots.txt` / `sitemap.xml`), and a generated favicon (`app/icon.tsx`).
- Images are pulled directly from the URLs you provided (`next.config.js` whitelists `sbadssolutionsagency.com`) and served through `next/image` for lazy-loading and optimization.

## Things you'll want to swap in before launch

- **Testimonials** (`lib/data.ts` → `testimonials`): no real client quotes or names were provided, so these are placeholder copy in a realistic tone. Replace with real reviews.
- **Client logos**: the brief asked for automatic background removal — that needs real image editing (not something CSS alone can do reliably on JPEGs with busy backgrounds). The marquee currently applies a white-silhouette filter as a CSS-only approximation. For a clean transparent look, run the 13 logo files through a background remover (e.g. remove.bg) and swap in the resulting PNGs in `lib/data.ts` → `clientLogos`.
- **Contact form**: submits via `mailto:` on the client (no backend). Wire it to an API route + email service (Resend, SendGrid, etc.) if you want submissions sent without opening the visitor's mail client.
- **Map**: left as a labeled placeholder per the brief ("Google Map Placeholder") — drop in a Google Maps embed/iframe with your real business location if needed.
- **Domain**: `siteUrl` in `app/layout.tsx`, and the URLs in `app/sitemap.ts` / `app/robots.ts`, use a placeholder `https://mdbulbulislam.com` — update to your real domain.
