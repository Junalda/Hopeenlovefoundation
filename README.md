# Hope & Love Foundation — Website

A premium, one-page website for **Stichting Hope & Love Foundation** —
_"Bringers of hope, carriers of love."_

Built with [Astro](https://astro.build/): fast, static, minimal JavaScript,
accessible and SEO-ready.

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
npm run preview  # preview the production build
```

## ✏️ Editing content

Nearly all editable content lives in **`src/config.ts`**. You can update the
foundation's details there without touching layout or styling.

### ⚠️ Placeholders to replace before going live

The following are **not yet supplied** and currently render as clearly marked
"coming soon / to be confirmed" states. Nothing has been invented as fact.
Fill them in inside `src/config.ts`:

| Item | Field in `src/config.ts` |
| --- | --- |
| Official GoFundMe campaign URL | `donation.gofundmeUrl` |
| Bank IBAN | `donation.bank.iban` |
| Bank BIC / SWIFT (optional) | `donation.bank.bic` |
| General email address | `contact.email` |
| Phone number (optional) | `contact.phone` |
| Social media links (optional) | `contact.social.*` |
| Transparency documents (Policy Plan, Annual Reports, etc.) | `src/components/Transparency.astro` → add a `href` to each doc |

Once a value is filled in, its section automatically switches from the
placeholder state to the live version (e.g. the GoFundMe button activates, the
IBAN gets a working **Copy** button, the email becomes a `mailto:` link).

### Confirmed content already in place

- **Next mission:** Curaçao, **October 2026** (from the official flyer)
- **Founder:** Esther Macnack
- **Board:** Chair — Roxana Stephanie Telgt · Secretary — David Anema ·
  Treasurer — Bianca Patricia Derveld-Macnack · Board Member — Conor Peter Oisin Lont
- **Faith:** 1 Corinthians 13:13

## Assets

Brand assets live in `public/images/` (logo, founder portrait, mission flyer,
Open Graph image), all pre-optimised. The brand palette (royal purple + warm
gold) is defined as CSS variables in `src/styles/global.css`, extracted from
the foundation logo.

## Structure

```
src/
├── config.ts              # editable content + placeholders
├── layouts/Layout.astro   # <head>, SEO, structured data, global scripts
├── pages/index.astro      # composes the one-page site
├── styles/global.css      # design system (tokens, buttons, utilities)
└── components/            # Nav, Hero, Mission, Story, Faith, NextMission,
                            # Donate, Support, Leadership, Transparency,
                            # Contact, FinalCTA, Footer, Pillars
```
