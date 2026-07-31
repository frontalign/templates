# FrontPress Starter

A clean, responsive **Next.js blog starter** built with FrontAlign. This free starter is intentionally lightweight: it includes the essentials needed to launch a modern blog while leaving advanced publishing features for a premium/pro version.

## What's included

- Next.js App Router setup
- Responsive homepage
- Blog index page
- Single article pages
- Category index and category archive pages
- About, Contact, Privacy and Terms pages
- Mock posts, authors and categories in `lib/data.ts`
- SEO-ready metadata examples
- FrontAlign-powered UI classes
- Remote image support for `picsum.photos`

## Not included in the starter

These features are intentionally reserved for the premium version:

- WordPress adapter
- Custom API / CMS adapter
- Advanced search page and API route
- Newsletter page and subscribe panels
- Author archive pages
- Advanced editorial hero sections
- Trending/sidebar modules
- Advanced social sharing logic
- Monetization/ad placements
- Full integration documentation

## Getting started

```bash
npm install
npm run dev
```

Open `http://localhost:3000` in your browser.

## Edit content

All starter content lives in:

```txt
lib/data.ts
```

Edit the `authors`, `categories` and `mockPosts` arrays to customize the blog.

## Project structure

```txt
app/
  about/
  blog/
  categories/
  contact/
  privacy/
  terms/
components/
  ArticleCard.tsx
  Navbar.tsx
  RelatedArticles.tsx
  SiteFooter.tsx
  SiteHeader.tsx
lib/
  data.ts
```

## Deployment

This project is ready for Vercel:

```bash
npm run build
```

Then deploy with Vercel, Netlify or any Node-compatible hosting provider.

## Upgrade idea

Use this starter as the free entry product. Keep CMS integrations, search, newsletter, authors, advanced editorial layouts and richer SEO tooling for the premium version.
