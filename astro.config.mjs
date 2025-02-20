import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwindcss from "@tailwindcss/vite";
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [mdx({
    remarkPlugins: [],
    rehypePlugins: [],
    extendDefaultPlugins: true,
  }), sitemap() ],
  markdown: {
    shikiConfig: {
      theme: 'dracula',
      wrap: true
    },
  },
  site: "https://uayebcaballero.dev"
});