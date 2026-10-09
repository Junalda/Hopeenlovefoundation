// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Canonical production origin. All absolute URLs (canonical, Open Graph,
  // Twitter, JSON-LD, sitemap) are derived from this.
  site: 'https://www.hopelovefoundation.nl',
  compressHTML: true,
  i18n: {
    defaultLocale: 'nl',
    locales: ['nl', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [sitemap()],
  build: {
    inlineStylesheets: 'auto',
  },
});
