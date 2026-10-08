# Zahbro Sports — Minimum-Phase Development Roadmap

## Phase 0 — Foundation + Staging Deployment
- Repository hygiene, Node 22, Next.js/React/TypeScript/Tailwind/GSAP.
- GitHub Actions: lint, typecheck and production build.
- Hostinger temporary domain connected to `main`.
- Environment variables and health endpoint.
- Exit gate: CI green + Hostinger deployment green + `/api/health` returns `ok: true`.

## Phase 1 — Design System + Global Experience
- Approved Zahbro Sports palette and typography.
- 3-row responsive header, search layer, sticky/condensed state.
- Footer, announcement UI, WhatsApp, back-to-top, accessibility.
- Global hover language, Z/clip-path geometry, smooth scrolling and reusable GSAP entrance system.
- Exit gate: desktop/tablet/mobile shell approved before storefront sections begin.

## Phase 2 — Complete Storefront
- Advanced creative hero slider with GSAP.
- Homepage sections: categories, best sellers, featured, new arrivals, deals/countdown, equipment spotlight, training setup, performance/technology, quality/process, lifestyle banner, reviews, dual-row marquee gallery, guides/blog, newsletter, final CTA.
- Shop/collection, product, search, deals and content pages.
- Product filters, sorting, variants, media gallery and responsive UX.
- Exit gate: every public route linked; no dead links; storefront visual QA complete.

## Phase 3 — Commerce + Customer System
- Database schema, products, inventory, categories and pricing.
- Cart, persistent cart, checkout integration, shipping/tax rules and order lifecycle.
- Customer auth, profile, addresses, order history, wish list.
- UK/USA market behavior and transactional events.
- Exit gate: test purchase from product -> cart -> checkout -> order -> customer account.

## Phase 4 — Admin + Operations + Marketing
- Admin dashboard and role-based access.
- Product/category/media management, barcode/stock controls, orders/customers, review approval.
- Promotions/coupons/deals/countdowns, homepage content controls, blog/guides, newsletter and popup controls.
- SEO fields, analytics hooks, PPC/social campaign helpers and audit logs.
- Exit gate: non-developer can operate day-to-day store from admin UI.

## Phase 5 — Production Hardening + Go-Live
- Technical SEO, schema, metadata, sitemap/robots/canonicals.
- Core Web Vitals, image/font optimization, caching and bundle review.
- Security headers, input validation, rate limiting, auth/permissions review and backups.
- Cross-browser/mobile QA, accessibility QA, error states, monitoring and regression pass.
- Temporary Hostinger staging -> final zahbrosports.co.uk domain cutover.
- Exit gate: release checklist fully green and rollback path documented.

## Branching rule
- `main` = deployable staging branch.
- Each phase uses `phase/<number>-<name>`.
- No direct feature work on `main`.
- Pull request must have green CI before merge.
