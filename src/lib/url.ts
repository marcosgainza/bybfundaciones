// Antepone el `base` del sitio a una ruta de asset.
// Necesario porque en GitHub Pages el sitio vive en un subpath (/bybfundaciones/).
// Uso: withBase('/assets/logo/logo.png')  ->  '/bybfundaciones/assets/logo/logo.png'
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, ''); // sin barra final
  return `${base}/${path.replace(/^\//, '')}`;
}
