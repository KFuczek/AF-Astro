// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.firma.pl',
  output: 'static',

  // Generate flat .html files (about.html) instead of directories (about/index.html).
  // Any basic HTTP server (Apache, Nginx, S3, GitHub Pages) can serve these directly
  // without needing to configure directory index rules.
  build: {
    format: 'file',
  },
  integrations: [sitemap()],
  vite: {
    resolve: {
      alias: {
        '@': new URL('./src', import.meta.url).pathname,
      },
    },
  },
  trailingSlash: 'never',
});
