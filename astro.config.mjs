import {
  defineConfig
} from 'astro/config';
import netlify from '@astrojs/netlify/functions';

import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [svelte(), tailwind()],
  output: 'server',
  adapter: netlify(),
  server: {
    port: 3000,
    host: true
  }
});