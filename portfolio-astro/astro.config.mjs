// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sanity from '@sanity/astro';
import react from '@astrojs/react';
import icon from "astro-icon";
import { loadEnv } from 'vite';

import vercel from '@astrojs/vercel';

import sitemap from '@astrojs/sitemap';
import seoGraph from '@jdevalk/astro-seo-graph/integration';

const { PUBLIC_SANITY_PROJECT_ID, PUBLIC_SANITY_DATASET } = loadEnv(
  process.env.NODE_ENV || "development",
  process.cwd(),
  ""
);

const isProductionBuild = process.env.VERCEL_ENV === 'production';

export default defineConfig({
  site: 'https://lucasaraya.com.ar',
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [
    react(), 
    icon(), 
    sanity({
      projectId: PUBLIC_SANITY_PROJECT_ID,
      dataset: PUBLIC_SANITY_DATASET,
      useCdn: false,
      studioBasePath: '/admin',
    }), 
    sitemap({
      filter: (page) => !page.includes('/admin')
    }),
    seoGraph({
      validateH1: true,
      validateUniqueMetadata: true,
      validateImageAlt: true,
      validateMetadataLength: true,
      llmsTxt: {
        title: 'Lucas Araya Portfolio',
        siteUrl: 'https://lucasaraya.com.ar',
      },
      ...(isProductionBuild && process.env.INDEXNOW_KEY && {
        indexNow: {
          key: process.env.INDEXNOW_KEY,
          host: 'lucasaraya.com.ar',
          siteUrl: 'https://lucasaraya.com.ar',
        },
      }),
    })
  ],

  adapter: vercel()
});