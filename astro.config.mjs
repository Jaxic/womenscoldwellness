// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { rehypeTargetBlank } from './src/plugins/targetBlank.js';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.womenscoldwellness.com',
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      entryLimit: 45000,
    })
  ],
  markdown: {
    rehypePlugins: [
      rehypeTargetBlank
    ]
  },
  vite: {
    plugins: [tailwindcss()]
  }
});