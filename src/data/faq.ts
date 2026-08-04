// Preguntas frecuentes.
// Se usan tanto en la sección visible como en el JSON-LD FAQPage
// (muy valioso para SEO y GEO: los motores de IA citan estas respuestas).

export interface FaqItem {
  q: string;
  a: string;
}

export const faqs: FaqItem[] = [
  {
    q: '¿Cómo sé si las grietas de mi vivienda son un problema de fundación?',
    a: 'No todas las grietas tienen el mismo origen. Algunas son superficiales y se relacionan con retracciones o movimientos propios de los materiales, mientras que otras pueden indicar asentamientos de la fundación. Una evaluación técnica permite determinar la causa y definir si es necesaria una intervención.',
  },
  {
    q: '¿Es posible reparar una fundación sin demoler la vivienda?',
    a: 'En muchos casos sí. Las técnicas de inyección controlada permiten intervenir el terreno de apoyo con una afectación mínima de la estructura existente, reduciendo la necesidad de demoliciones y acortando los tiempos de obra.',
  },
  {
    q: '¿Cómo determinan dónde realizar las inyecciones?',
    a: 'Cada proyecto comienza con una evaluación técnica. A partir del análisis de la estructura, las características del terreno y los daños observados, se define la ubicación de los puntos de intervención y la metodología más adecuada.',
  },
  {
    q: '¿Cuánto tiempo demora una intervención?',
    a: 'Depende de las características y dimensiones de cada obra. En viviendas particulares la ejecución suele completarse en pocos días, aunque el plazo definitivo se determina luego de la evaluación técnica.',
  },
  {
    q: '¿Es necesario abandonar la vivienda durante los trabajos?',
    a: 'Generalmente no. La mayoría de las intervenciones pueden realizarse con la vivienda habitada, ya que son procedimientos localizados y con una afectación reducida sobre la estructura existente.',
  },
  {
    q: '¿Las grietas desaparecen después del refuerzo de fundaciones?',
    a: 'El objetivo principal es estabilizar la estructura y detener los movimientos que originan las fisuras. Una vez lograda la estabilización, las grietas existentes pueden repararse mediante trabajos de terminación, evitando que vuelvan a aparecer por la misma causa.',
  },
  {
    q: '¿La solución es definitiva?',
    a: 'Cada intervención se diseña para resolver el problema identificado en la evaluación técnica. Cuando se actúa sobre la causa que origina los asentamientos y las condiciones de la estructura lo permiten, se obtiene una solución estable y duradera.',
  },
  {
    q: '¿Realizan la evaluación técnica antes de presupuestar?',
    a: 'Sí. Antes de definir una propuesta de intervención realizamos una evaluación del problema para comprender su origen y determinar la solución más adecuada para cada caso.',
  },
  {
    q: '¿Trabajan únicamente en viviendas?',
    a: 'Si bien gran parte de nuestras intervenciones se realizan en viviendas particulares, también desarrollamos soluciones para edificios, estructuras industriales, galpones y otras construcciones que requieran estabilización de fundaciones o mejoramiento de suelos.',
  },
  {
    q: '¿En qué zonas trabajan?',
    a: 'Actualmente desarrollamos obras principalmente en la ciudad de Paraná, el resto de la provincia de Entre Ríos y la ciudad de Santa Fe.',
  },
];
