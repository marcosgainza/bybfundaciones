# Guía de fotos reales — B&B Fundaciones

Mientras no haya fotos, la web muestra **diagramas SVG de cemento** como stand-in
(hero + 3 casos). Cuando el cliente mande fotos reales, reemplazan a los diagramas.

Referencia de estilo: https://ficonstrucciones.com — pero **ojo**: ellos inyectan
resina y tienen +30 obras y premios. B&B recién arranca e **inyecta cemento**.
No copiar reclamos de trayectoria; mostrar lo que realmente hay, prolijo y honesto.

Cómo activar una foto: dejá el archivo en esta carpeta y en el componente
correspondiente cambiá el `src` del `<ImageSlot>` al nombre del archivo
(ej: `src="/assets/images/hero.jpg"`). El diagrama SVG queda de respaldo.

---

## Fotos a pedirle al cliente (Bruno y Fausto)

Priorizadas. Con que consigan las 3 primeras, la web ya sube un escalón.

### 1) HERO — la foto principal  ⭐ prioridad máxima
- **Qué**: el equipo trabajando en obra — la lanza/perforadora inyectando, o el
  equipo de bombeo de cemento en funcionamiento. Que se vea acción y equipamiento.
- **Encuadre**: horizontal (apaisado), la acción a un costado para que respire.
- **Archivo**: `hero.jpg` → componente `src/components/Hero.astro`
- Alternativa si no hay foto de inyección: fachada de una obra terminada + operario.

### 2) TRES CASOS — una foto por obra  ⭐ prioridad alta
Para cada caso, idealmente un par **antes / durante**:
- **Caso 1** (vivienda, fisuras): foto de las fisuras en el muro + foto de la
  inyección en el perímetro. Archivo `caso-1.jpg` → `src/components/Cases.astro`.
- **Caso 2** (oquedad bajo contrapiso): foto del piso hundido o del punto de
  inyección de mortero en el contrapiso. Archivo `caso-2.jpg`.
- **Caso 3** (mejoramiento de suelo): foto de la grilla de puntos de inyección
  marcados en el terreno, o del equipo mezclando/bombeando. Archivo `caso-3.jpg`.

### 3) EQUIPO — Bruno y Fausto  ⭐ prioridad alta (genera confianza)
- **Qué**: los dos, con ropa de trabajo, en obra. Cara visible, prolijos.
- **Encuadre**: vertical u horizontal, fondo de obra real (no estudio).
- **Archivo**: `equipo.jpg` → componente `src/components/About.astro`

### 4) OG-IMAGE — la que aparece al compartir por WhatsApp/redes
- **Qué**: la mejor foto de obra o el logo sobre una foto, con el nombre.
- **Medida exacta**: 1200 × 630 px.
- **Archivo**: `public/assets/og-image.jpg` (ya está referenciada en el SEO).

---

## Detalles fotográficos que sí importan
- **Luz de día**, natural. Evitar contraluz fuerte y flash directo.
- **Horizontal** para hero y casos; celular en horizontal, bien firme.
- **Nítidas y bien expuestas**: mejor pocas buenas que muchas movidas.
- **Cascos / ropa de trabajo / cartel de B&B** visibles = suma profesionalismo.
- **Sin datos privados** en cuadro (patentes, direcciones, documentos).
- Formato `.jpg` o `.webp`, ancho ~1600 px, peso < 300 KB. Nombres sin acentos ni espacios.

## Qué mandar por WhatsApp para pedirlas
> "Che, para la web necesito fotos reales de obra: (1) una del equipo inyectando o
> de la máquina de bombeo en acción, (2) una por cada obra —si tenés antes/después
> mejor—, y (3) una de ustedes dos en obra con ropa de trabajo. De día, horizontales
> y nítidas. Con esas ya reemplazo los dibujos."
