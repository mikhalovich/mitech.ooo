# Project Context & AI Rules

## Tech Stack

- Framework: Nuxt 3 (Vue 3, `<script setup>`)
- Styling: Tailwind CSS (`@nuxtjs/tailwindcss`)
- CMS: Prismic (`@nuxtjs/prismic`) — used ONLY for blog posts (`Post` custom type: `uid`, `img`, `title`, `date`, `content`) for SEO. All other content is hardcoded/local in Vue components.
- Forms & Validation: `@vuelidate/core`, `@vuelidate/validators`, `vue-recaptcha`
- Sliders: `nuxt-swiper`
- Analytics: `@zadigetvoltaire/nuxt-gtm`

## Strict Rules for Code Generation

1. **Prismic Blog Contract:** On blog list and post pages, preserve Prismic queries (`usePrismic`) and field bindings (`uid`, `img`, `title`, `date`, `content`). Do not modify `customtypes/`.
2. **Logic & SEO Preservation:** Do NOT delete or alter form validation rules (`v$`), reCAPTCHA logic, GTM tracking events, Swiper configurations, or SEO meta tags (`useHead` / `useSeoMeta`).
3. **Styling:** Use ONLY Tailwind CSS utility classes and design tokens defined in `tailwind.config`. Avoid arbitrary values (e.g., `mt-[37px]`, `text-[#123456]`) unless no token exists.
4. **Scope:** Only modify the specific page or component requested in the prompt. Do not refactor unrelated files.

## Directory Structure

- `/pages` — Nuxt pages and blog routes
- `/components` — Reusable UI components, page sections, header, footer, forms
- `/layouts` — Page layouts
- `/assets/css` — Global styles and Tailwind imports

## Design System Tokens (Tailwind)

- **Fonts:** `font-primary` (Open Sans — default), `font-logo` (Baumans — only for MITech logo).
- **Containers:** `max-w-container` (1312px default), `max-w-container-service` (1158px), `max-w-container-blog` (1044px), `max-w-container-narrow` (960px).
- **Breakpoints:** `mobile` (440px), `tablet` (768px), `laptop` (1024px), `desktop` (1440px).
- **Colors:**
  - Backgrounds: `bg-bg-main` (#FFFFFF), `bg-bg-subtle` (#FCFCFC), `bg-surface-cream` (#FEF6DB), `bg-surface-blue` (#F2F5FB), `bg-surface-blue-alt` (#E8F0FE), `bg-surface-green` (#C7E7D0), `bg-surface-beige` (#F4F2E9).
  - Text: `text-content-main` (#202124), `text-content-muted` (#5F6368), `text-content-light` (#969696), `text-content-blog` (#2C373F).
  - Accents: `bg-primary` / `hover:bg-primary-hover` (#FFBB00 / #ECAD00), `bg-amber` (#FBB406), `bg-yellow-soft` (#FFE795), `bg-accent-blue` (#1967D2), `bg-accent-green` (#177531).
  - Borders & Errors: `border-border` (#DADCE0), `border-border-light` (#EBEBEB), `text-error` / `border-error` (#E31111).
