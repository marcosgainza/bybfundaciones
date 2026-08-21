# Prompt para video IA — "Inyección controlada" (B&B Ingeniería)

Para cuando quieras generar el video real con Sora o Runway (ver costos en la
conversación con Claude Code del 21/8/2026: Sora 2 ronda $2-14 USD para un
clip de 20-30s según calidad; Runway con el plan Standard $15/mes alcanza
para un clip corto).

## Prompt principal (Sora / texto-a-video)

```
Cinematic 3D render, architectural visualization style, cross-section cutaway
of the ground beneath a house foundation. Camera starts wide on a small
residential building with a visible crack on its exterior wall, then smoothly
dollies down and into an underground cross-section view, like a technical
Blender animation.

Show a slim steel injection rod drilling at a controlled angle from ground
level down to the foundation footing. Once in position, a viscous grout
(mortar) is injected under low pressure: visualize it as an expanding amber-
colored bulb spreading through the soil, filling voids and consolidating
loose, saturated ground around the footing.

Cut to a close-up of a small pressure gauge needle sweeping smoothly to a
controlled low value, then a subtle readout line showing millimeter-level
settlement control stabilizing flat.

Final shot: camera pulls back up through the ground to the house exterior,
where the crack visibly closes/heals and the structure settles into a level,
stable position. Soft daylight, clean studio-like lighting, no people, no
text overlays.

Color palette: deep navy blue (#0d2b5b) for structural elements and steel,
warm amber/orange (#f5a623) for the grout/injection material, warm neutral
sand and off-white tones (#f4efe4, #fcfaf6) for soil and background — matte,
professional, engineering-brand look, not flashy or sci-fi.

Style: precise, technical, minimal, high-end architectural visualization
(Blender/Cinema 4D render aesthetic) — not photorealistic documentary
footage. Smooth camera moves, no jump cuts, no on-screen text.

Duration: 20-24 seconds. Aspect ratio: 16:9 (landscape), loopable if possible.
```

## Versión corta (Runway image-to-video, por escena)

Si preferís generar por escenas cortas (5-6 clips de 4-5s) y unirlas en
edición, usá estas variantes del prompt, una por escena:

1. **Diagnóstico:** "3D cutaway render, house wall with a thin crack, camera
   slowly pushes in, warm sand-toned soil below, navy blue structural
   elements, clean engineering visualization style, no text, no people."
2. **Perforación:** "3D cutaway render, slim steel rod drilling at an angle
   into the ground toward a foundation footing, precise controlled motion,
   navy blue steel, sand-colored soil, minimal architectural viz style."
3. **Inyección:** "3D cutaway render, amber-colored viscous grout expanding
   as a smooth bulb through soil around a foundation footing, filling voids,
   low-pressure controlled injection, engineering visualization style."
4. **Monitoreo:** "3D render close-up, small analog pressure gauge needle
   sweeping smoothly to a low controlled value, clean studio lighting,
   navy and amber color palette, minimal technical style."
5. **Resultado:** "3D cutaway render, camera pulls up from underground to a
   house exterior where a wall crack visibly closes and the structure
   settles level and stable, warm daylight, clean architectural viz style."

## Notas técnicas

- Paleta de marca a repetir en cada prompt: navy `#0d2b5b`, ámbar `#f5a623`,
  fondos cálidos `#fcfaf6` / `#f4efe4`.
- Pedir siempre "no text overlays" y "no people" salvo que quieras mostrar al
  operario — en ese caso agregar una descripción física simple (casco blanco,
  camisa azul, sin marcas ni logos, para evitar inconsistencias faciales).
- Si el resultado sale con acento fotorrealista en vez de render 3D limpio,
  agregar al final del prompt: `"clean 3D render, not live-action footage"`.
- Formato final para el sitio: exportar en MP4 (H.264), livianito (<8MB si es
  posible) para que cargue rápido en el Hero, y opcionalmente un WebM como
  respaldo.
