// =============================================================
// Datos centrales del negocio.
// Fuente única de verdad: se reutiliza en la UI y en el SEO/GEO
// (meta tags, Open Graph y JSON-LD de negocio local).
// Editá acá los datos de contacto reales cuando estén confirmados.
// =============================================================

export const site = {
  name: 'B&B Ingeniería',
  legalName: 'B&B Ingeniería',
  tagline: 'Ingeniería aplicada a la estabilización de fundaciones.',
  description:
    'Soluciones de ingeniería para el mejoramiento de suelos y la estabilización de fundaciones mediante inyección controlada en Paraná, Entre Ríos y Santa Fe.',
  // URL pública (dominio propio en Hostinger).
  url: 'https://bybfundaciones.com.ar',
  locale: 'es-AR',

  // --- Contacto (reemplazar por los datos reales) ---
  phoneDisplay: '+54 9 343 454-7846',
  // Para los links wa.me de Argentina conviene el número SIN el "9" (549 → 54).
  // Con el 9 el chat no abría; sin el 9 funciona. El display de arriba sí lleva el 9.
  whatsapp: '543434547846', // solo números, formato internacional sin + y sin el 9
  email: 'info@bybingenieria.com.ar',

  // --- Ubicación / zona de trabajo (clave para SEO local y GEO) ---
  city: 'Paraná',
  region: 'Entre Ríos',
  country: 'AR',
  areaServed: ['Paraná', 'Entre Ríos', 'Santa Fe'],

  // --- Redes (agregar URLs reales cuando existan) ---
  social: {
    instagram: '#',
    linkedin: '#',
    facebook: '#',
  },

  founders: ['Bruno Barbagelata', 'Fausto Barbagelata'],
};

export const services = [
  {
    id: '01',
    title: 'Diagnóstico y Evaluación Técnica',
    text: 'Inspeccionamos en obra para identificar el origen del problema, evaluar el estado de la estructura y del terreno, y definir la estrategia de intervención. Es el punto de partida para evitar soluciones improvisadas.',
  },
  {
    id: '02',
    title: 'Refuerzo de Fundaciones',
    text: 'Aplicamos técnicas de inyección controlada para mejorar el terreno de apoyo y recuperar la estabilidad de fundaciones afectadas por asentamientos diferenciales, con la menor afectación posible sobre la construcción.',
  },
  {
    id: '03',
    title: 'Mejoramiento de Suelos',
    text: 'Intervenciones orientadas a mejorar la capacidad portante del terreno y reducir asentamientos, optimizando el comportamiento del suelo de apoyo en viviendas, edificios, plateas y estructuras existentes.',
  },
  {
    id: '04',
    title: 'Relleno de Oquedades',
    text: 'Corregimos cavidades y vacíos bajo pisos, plateas y fundaciones mediante inyecciones controladas, restableciendo el contacto entre el terreno y la estructura y reduciendo el riesgo de nuevos hundimientos.',
  },
];
