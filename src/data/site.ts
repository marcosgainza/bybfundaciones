// =============================================================
// Datos centrales del negocio.
// Fuente única de verdad: se reutiliza en la UI y en el SEO/GEO
// (meta tags, Open Graph y JSON-LD de negocio local).
// Editá acá los datos de contacto reales cuando estén confirmados.
// =============================================================

export const site = {
  name: 'B&B Fundaciones',
  legalName: 'B&B Fundaciones',
  tagline: 'Especialistas en refuerzo de fundaciones y mejoramiento de suelos.',
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
    instagram: 'https://www.instagram.com/bybfundaciones/',
    linkedin: 'https://www.linkedin.com/company/135333899/',
    facebook: 'https://www.facebook.com/profile.php?id=61592205231987',
  },

  founders: ['B. Barbagelata', 'F. Barbagelata'],
};

export const services = [
  {
    id: '01',
    title: 'Estabilización y refuerzo de fundaciones',
    text: 'Intervenciones destinadas a recuperar o mejorar la estabilidad de fundaciones existentes que presentan movimientos, asentamientos o pérdida de capacidad de apoyo. La solución se diseña de acuerdo con las características de la construcción, el tipo de fundación y las condiciones particulares del suelo.',
  },
  {
    id: '02',
    title: 'Detención de asentamientos',
    text: 'Soluciones orientadas a detener procesos de asentamiento que pueden manifestarse mediante fisuras, desniveles, separaciones o movimientos en distintos sectores de una construcción. La intervención busca estabilizar el conjunto suelo-fundación y evitar que el proceso continúe evolucionando y generando nuevos daños.',
  },
  {
    id: '03',
    title: 'Mejoramiento de la capacidad portante del suelo',
    text: 'Intervenciones destinadas a suelos blandos o de baja capacidad portante que, por sus características, pueden requerir soluciones de fundación de mayor complejidad y costo, como plateas de gran rigidez o fundaciones profundas. El mejoramiento previo del terreno permite aumentar las tensiones admisibles y optimizar el diseño de las fundaciones, reduciendo en muchos casos el volumen de hormigón y la complejidad de la solución necesaria.',
  },
  {
    id: '04',
    title: 'Relleno de oquedades y vacíos',
    text: 'Relleno controlado de cavidades, huecos o sectores que han perdido contacto con el terreno, ya sea debajo de fundaciones, plateas, pisos u otros elementos. La intervención permite restablecer el apoyo y mejorar la continuidad del terreno en las zonas afectadas.',
  },
  {
    id: '05',
    title: 'Estabilización de piscinas',
    text: 'Intervenciones para piscinas que presentan asentamientos, movimientos, desniveles o pérdida de apoyo como consecuencia del comportamiento del suelo circundante o ubicado debajo de su estructura. El objetivo es estabilizar el terreno y recuperar condiciones adecuadas de apoyo.',
  },
  {
    id: '06',
    title: 'Estabilización de pisos y plateas',
    text: 'Soluciones para pisos, contrapisos y plateas que presentan hundimientos, desniveles o pérdida de apoyo debido al asentamiento del terreno o a la formación de vacíos bajo su superficie. Se intervienen los sectores afectados buscando restablecer el contacto con el suelo y estabilizar su comportamiento.',
  },
];
