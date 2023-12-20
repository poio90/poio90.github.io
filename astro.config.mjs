import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';

// https://astro.build/config
export default defineConfig({
  site: 'https://poio90.github.io',
  base: '/altacostura',
  experimental: {
    viewTransitions: true,
  },
  integrations: [tailwind(), compress()],
});
