import { defineConfig } from 'astro/config';
import postcss from '@astrojs/postcss';

export default defineConfig({
  integrations: [postcss()],
});





