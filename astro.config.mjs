// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

export default defineConfig({
  output: 'static',
  adapter: vercel({
    imageService: true,
  }),
  site: 'https://realitycheck.tools',
  compressHTML: true,
  build: {
    assets: '_assets'
  },
  vite: {
    esbuild: {
      target: 'es2022'
    }
  }
});
