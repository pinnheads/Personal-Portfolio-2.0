import {
  defineConfig
} from 'astro/config';
import netlify from '@astrojs/netlify';
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
import prefetch from "@astrojs/prefetch";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  devToolbar: {
    enabled: true,
  },
  site: 'https://utsavdeep.com/',
  integrations: [svelte(), tailwind(), prefetch({
    selector: "a[href^='/']",
    selector: "a[href^='/project']",
    selector: "a[href^='/contact']",
    selector: "a[href^='/work']"
  }), sitemap({
    customPages: ['https://utsavdeep.com/', 'https://utsavdeep.com/work', 'https://utsavdeep.com/project', 'https://utsavdeep.com/contact'],
    changefreq: 'weekly',
    priority: 0.7,
  })],
  output: 'server',
  adapter: netlify(),
  server: {
    port: 4321,
    host: true
  }
});