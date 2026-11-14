import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://jichangtuijan.top',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      priority: 0.8,
      // Only changed guide pages receive a new modification date.
      serialize: (item) => ({ ...item, lastmod: item.url.includes('/guides/') ? new Date('2026-11-14') : undefined }),
    }),
  ],
  build: {
    format: 'directory',
  },
});
