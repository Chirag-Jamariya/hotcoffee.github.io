import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import react from '@astrojs/react';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), icon()],
  site: 'https://Chirag-Jamariya.github.io',
  base: '/hotcoffee.github.io/',
  trailingSlash: 'always',
});