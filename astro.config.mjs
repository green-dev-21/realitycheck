// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  output: 'static',
  adapter: cloudflare(),
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
