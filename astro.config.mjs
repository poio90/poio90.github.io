import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';

// https://astro.build/config
export default defineConfig({
  // site: 'https://astronaut.github.io',
  // base: '/mi-repo',
  experimental: {
    viewTransitions: true,
  },
  integrations: [tailwind(), compress()],
});
