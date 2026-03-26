// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: "https://KFuczek.github.io",
  base: "/AF-Astro",
  output: 'static',
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
