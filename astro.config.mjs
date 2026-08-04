import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Configuración de publicación.
// Hosting: Hostinger, dominio propio en la raíz (apex).
//   site = dominio propio, base = '/' (sirve desde la raíz, sin subcarpeta).
// (Histórico) GitHub Pages usaba site: 'https://marcosgainza.github.io', base: '/bybfundaciones'.
export default defineConfig({
  site: 'https://bybfundaciones.com.ar',
  base: '/',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  build: {
    inlineStylesheets: 'auto',
  },
});
