import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://jichangtuijan.top',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      priority: 0.8,
      lastmod: new Date('2026-11-08'),
    }),
  ],
  build: {
    format: 'directory',
  },
});
