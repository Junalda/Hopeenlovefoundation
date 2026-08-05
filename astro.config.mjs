// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://hopeandlovefoundation.org',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
});
