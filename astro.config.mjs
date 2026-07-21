// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://pjb0811.github.io',

  vite: {
    plugins: [tailwindcss()],
    preview: {
      allowedHosts: true
    }
  },

  integrations: [react()]
});