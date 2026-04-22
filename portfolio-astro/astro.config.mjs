// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sanity from '@sanity/astro';
import react from '@astrojs/react';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [
    react(),
    sanity({
      projectId: 'jxtyookq',
      dataset: 'production',
      useCdn: false,
      studioBasePath: '/admin',
    }),
  ],
});


