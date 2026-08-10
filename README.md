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

## 🌍 Languages

The site is bilingual — **Dutch is the primary language** (served at `/`) and
**English is the option** (served at `/en/`). A language switch sits in the
navigation on every page.

- All visitor-facing text lives in **`src/i18n/ui.ts`**, with a `nl` and an `en`
  block that mirror each other. Edit the text there; both languages stay in sync
  structurally.
- Factual, language-neutral data (bank details, contact, GoFundMe link, names)
  stays in `src/config.ts` and is shared by both languages.
- Board **roles** are translated in `ui.ts` (`leadership.roles`) and matched to
  the board members in `config.ts` by order.

## ✏️ Editing content

Editable text lives in **`src/i18n/ui.ts`** (per language). Factual details live
in **`src/config.ts`**. You can update either without touching layout or styling.

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
