# B&B Ingeniería — Sitio web

Landing page de **B&B Ingeniería** (refuerzo de fundaciones y mejoramiento de suelos, Paraná, Entre Ríos), construida con [Astro](https://astro.build). HTML estático, responsive y optimizada para SEO y GEO.

## Requisitos

- Node.js 18+ (probado con v22)

## Puesta en marcha

```bash
npm install       # instala dependencias (solo la primera vez)
npm run dev       # servidor de desarrollo -> http://localhost:4321
npm run build     # genera el sitio estático en /dist
npm run preview   # previsualiza el build de producción
```

## Estructura

```
byb-web/
├── astro.config.mjs        # config (dominio, sitemap)
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   └── assets/
│       ├── logo/           # logos y piezas de la animación (ya incluidos)
│       └── images/         # FOTOS reales -> ver assets/images/LEEME.txt
└── src/
    ├── data/
    │   ├── site.ts         # datos del negocio (contacto, zona, servicios)
    │   └── faq.ts          # preguntas frecuentes
    ├── layouts/
    │   └── Base.astro      # <head>, SEO, Open Graph y JSON-LD
    ├── components/         # una sección por componente
    │   ├── Header.astro    (con menú móvil)
    │   ├── Hero.astro
    │   ├── Pillars.astro
    │   ├── Problems.astro
    │   ├── Services.astro
    │   ├── Methodology.astro
    │   ├── WhyUs.astro
    │   ├── Cases.astro
    │   ├── Faq.astro
    │   ├── About.astro
    │   ├── LogoAnim.astro
    │   ├── Contact.astro   (envía por WhatsApp)
    │   ├── Footer.astro
    │   ├── WhatsappFloat.astro
    │   └── ImageSlot.astro (placeholder / foto reutilizable)
    ├── styles/
    │   └── global.css      # tokens de diseño, base y utilidades
    └── pages/
        └── index.astro     # arma la página
```

## Qué editar habitualmente

| Quiero cambiar…                        | Archivo                          |
|----------------------------------------|----------------------------------|
| Teléfono, email, WhatsApp, zona        | `src/data/site.ts`               |
| Preguntas frecuentes                   | `src/data/faq.ts`                |
| Servicios                              | `src/data/site.ts` (`services`)  |
| Colores / tipografía                   | `src/styles/global.css` (`:root`)|
| Dominio final (SEO/sitemap)            | `astro.config.mjs` y `site.ts`   |
| Fotos                                  | `public/assets/images/` (ver LEEME) |

## SEO y GEO incluidos

- HTML estático (renderizado en el servidor) → indexable sin ejecutar JS.
- `<title>`, meta description, canonical y `robots`.
- Open Graph + Twitter Card para compartir en redes/WhatsApp.
- JSON-LD `ProfessionalService` (negocio local: ciudad, zona, fundadores).
- JSON-LD `FAQPage` (las 10 preguntas) → rich results y citado por motores de IA.
- `sitemap-index.xml` automático + `robots.txt`.
- Metadatos geográficos (`geo.region`, `geo.placename`).

> Antes de publicar: reemplazar el teléfono/WhatsApp reales en `src/data/site.ts`,
> confirmar el dominio en `astro.config.mjs`, y agregar `public/assets/og-image.jpg`.

## Pendientes / próximos pasos

- [ ] Cargar fotos reales (hero, 3 casos, equipo) y `og-image.jpg`.
- [ ] Datos de contacto reales (teléfono, redes).
- [ ] Deploy (recomendado: Vercel, Netlify o Cloudflare Pages — gratis para estáticos).
- [ ] (Futuro) Panel de gestión / sistema: se integra como app aparte o con islas React.
```
