import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Configuración de publicación.
// HOY: GitHub Pages -> el sitio vive en https://marcosgainza.github.io/bybfundaciones/
//   site = origen del dominio, base = subcarpeta del repo.
// CUANDO HAYA DOMINIO PROPIO (ej. bybingenieria.com.ar):
//   site: 'https://www.bybingenieria.com.ar', base: '/'
//   y actualizar también `url`/`base` en src/data/site.ts y public/robots.txt.
export default defineConfig({
  site: 'https://marcosgainza.github.io',
  base: '/bybfundaciones',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  build: {
    inlineStylesheets: 'auto',
  },
});
