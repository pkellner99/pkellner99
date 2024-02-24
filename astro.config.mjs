import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';
import keystatic from '@keystatic/astro';

import node from '@astrojs/node';

export default defineConfig({
  integrations: [react(), markdoc(), keystatic()],
  output: 'hybrid',
  adapter: node({
    mode: 'middleware',
  }),
});