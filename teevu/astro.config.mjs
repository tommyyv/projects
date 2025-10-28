import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

import partytown from "@astrojs/partytown";
import sitemap from "@astrojs/sitemap";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  // site: "", TODO: Register custom domain
  integrations: [
    tailwind(),
    icon(),
    sitemap(),
    partytown({ config: { forward: ["dataLayer.push"] } }),
  ],

  markdown: {
    syntaxHighlight: "shiki",
    shikiConfig: {
      theme: "houston",
      wrap: false,
    },
  },

  output: "hybrid",

  vite: {
    resolve: {
      alias: {
        "@styles": "/src/styles",
      },
    },
  },

  cacheOnDemandPages: true,
  adapter: netlify(),
});
