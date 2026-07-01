// =============================================================
// Generador del Reporte de Entrega — B&B Ingeniería
// -------------------------------------------------------------
// Editá el objeto CONFIG y ejecutá:  node entrega/generar-reporte.mjs
// Genera dos archivos en esta misma carpeta:
//   - reporte-entrega.html  (abrir en el navegador -> Imprimir -> Guardar como PDF)
//   - reporte-entrega.md     (Markdown editable)
//
// Cuando termines el "sistema", cambiá los montos / el bloque de saldo
// y volvé a correr el script para generar el reporte de esa etapa.
// =============================================================

import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));

// ------------------------- CONFIG ----------------------------
const CONFIG = {
  etapa: 'Etapa 1 — Sitio web institucional',
  fechaEntrega: '02/07/2026', // <-- fecha en que entregás / mandás el link

  proveedor: {
    nombre: 'Marcos Gainza',
    contacto: 'gainza.marcos47@gmail.com',
  },
  cliente: {
    nombre: 'B&B Ingeniería',
    detalle: 'Ing. Bruno Barbagelata e Ing. Fausto Barbagelata',
  },

  sitioUrl: 'https://marcosgainza.github.io/bybfundaciones',
  pagareRef: '', // n.º de pagaré, si corresponde (dejar vacío si no)

  // Alcance entregado (lo que figura como trabajo realizado)
  entregables: [
    'Diseño y desarrollo del sitio web institucional (sitio de una página con múltiples secciones).',
    'Diseño responsive: se adapta a celular, tablet y escritorio.',
    'Secciones: Inicio, Servicios, Metodología, Problemas que resolvemos, Por qué elegirnos, Casos, La marca (logo animado), Quiénes somos, Preguntas frecuentes y Contacto.',
    'Logo institucional con animación.',
    'Formulario de contacto con envío directo a WhatsApp.',
    'Botón flotante de WhatsApp en todo el sitio.',
    'Optimización SEO y GEO: metadatos, Open Graph, datos estructurados de negocio local (JSON-LD) y sitemap.',
    'Publicación en producción con despliegue automático (cada cambio se publica solo).',
    'Código fuente versionado en repositorio Git.',
  ],

  // Costos. Cada ítem con su moneda (USD o ARS).
  costos: [
    { concepto: 'Desarrollo del sitio web', moneda: 'USD', monto: 650 },
    { concepto: 'Hosting (1 año)', moneda: 'ARS', monto: 89988 },
    { concepto: 'Dominio (1 año)', moneda: 'ARS', monto: 15000 },
  ],

  // Trabajo / saldo que queda pendiente para más adelante
  saldoPendiente:
    'La presente entrega comprende el sitio web institucional. Queda pendiente el ' +
    'desarrollo del sistema de gestión, cuyo alcance e importe se acordarán por ' +
    'separado y se facturarán una vez finalizado.',
};
// ------------------------------------------------------------

// Formato de miles con puntos (es-AR): 89988 -> "89.988"
const miles = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
const fmt = (moneda, monto) =>
  moneda === 'USD' ? `USD ${miles(monto)}` : `$ ${miles(monto)}`;

// Totales por moneda
const totales = {};
for (const c of CONFIG.costos) {
  totales[c.moneda] = (totales[c.moneda] || 0) + c.monto;
}
const totalesTexto = Object.entries(totales).map(([m, v]) => fmt(m, v));

// --------------------------- HTML ----------------------------
const filasCostos = CONFIG.costos
  .map(
    (c) => `        <tr>
          <td>${c.concepto}</td>
          <td class="mon">${c.moneda}</td>
          <td class="num">${fmt(c.moneda, c.monto)}</td>
        </tr>`
  )
  .join('\n');

const filasTotales = Object.entries(totales)
  .map(
    ([m, v]) => `        <tr class="total">
          <td colspan="2">Total en ${m === 'USD' ? 'dólares' : 'pesos'}</td>
          <td class="num">${fmt(m, v)}</td>
        </tr>`
  )
  .join('\n');

const entregablesLi = CONFIG.entregables
  .map((e) => `        <li>${e}</li>`)
  .join('\n');

const pagareLinea = CONFIG.pagareRef
  ? `<div class="meta-row"><span>Pagaré N.º</span><b>${CONFIG.pagareRef}</b></div>`
  : '';

const html = `<!doctype html>
<html lang="es-AR">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Reporte de Entrega — ${CONFIG.cliente.nombre}</title>
<style>
  :root { --navy:#0d2b5b; --gray:#5a616e; --line:#d7dbe2; --mist:#f4f6f9; }
  * { box-sizing: border-box; }
  body { margin:0; background:#e9edf2; color:#20262f;
    font-family: -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; }
  .sheet { max-width:820px; margin:24px auto; background:#fff; padding:48px 54px;
    box-shadow:0 10px 40px rgba(13,43,91,.15); }
  .print-bar { max-width:820px; margin:16px auto 0; text-align:right; }
  .print-bar button { background:var(--navy); color:#fff; border:0; border-radius:6px;
    padding:10px 18px; font-size:14px; font-weight:700; cursor:pointer; }
  header { display:flex; justify-content:space-between; align-items:flex-start;
    border-bottom:3px solid var(--navy); padding-bottom:18px; }
  .brand { font-size:26px; font-weight:800; color:var(--navy); letter-spacing:-.01em; }
  .brand small { display:block; font-size:12px; font-weight:600; color:var(--gray);
    letter-spacing:.14em; text-transform:uppercase; margin-top:4px; }
  .doc-type { text-align:right; font-size:12px; color:var(--gray);
    letter-spacing:.12em; text-transform:uppercase; font-weight:700; }
  h1 { font-size:21px; color:var(--navy); margin:28px 0 4px; }
  .stage { color:var(--gray); font-size:14px; margin:0 0 22px; }
  .meta { display:grid; grid-template-columns:1fr 1fr; gap:6px 40px; margin:0 0 26px;
    font-size:14px; }
  .meta-row { display:flex; justify-content:space-between; border-bottom:1px dotted var(--line);
    padding:6px 0; }
  .meta-row span { color:var(--gray); }
  h2 { font-size:13px; text-transform:uppercase; letter-spacing:.1em; color:var(--navy);
    margin:26px 0 12px; padding-bottom:6px; border-bottom:1px solid var(--line); }
  ul { margin:0; padding-left:20px; }
  li { margin:7px 0; font-size:14px; line-height:1.5; }
  table { width:100%; border-collapse:collapse; font-size:14px; margin-top:4px; }
  th, td { text-align:left; padding:10px 8px; border-bottom:1px solid var(--line); }
  th { font-size:11px; text-transform:uppercase; letter-spacing:.08em; color:var(--gray); }
  td.num, th.num { text-align:right; white-space:nowrap; font-variant-numeric:tabular-nums; }
  td.mon { color:var(--gray); }
  tr.total td { border-top:2px solid var(--navy); border-bottom:none; font-weight:800;
    color:var(--navy); padding-top:12px; }
  .note { background:var(--mist); border-left:4px solid var(--navy); border-radius:0 6px 6px 0;
    padding:14px 18px; font-size:13.5px; line-height:1.55; color:#33404f; }
  .status { display:inline-block; background:#e6f4ea; color:#1f7a3d; font-weight:700;
    font-size:12px; padding:4px 12px; border-radius:100px; }
  footer { margin-top:34px; padding-top:16px; border-top:1px solid var(--line);
    font-size:12px; color:var(--gray); }
  .sign { display:grid; grid-template-columns:1fr 1fr; gap:50px; margin-top:46px; }
  .sign div { border-top:1px solid #333; padding-top:8px; font-size:12px; color:var(--gray);
    text-align:center; }
  @media print {
    body { background:#fff; }
    .print-bar { display:none; }
    .sheet { box-shadow:none; margin:0; max-width:none; padding:0; }
  }
</style>
</head>
<body>
  <div class="print-bar"><button onclick="window.print()">Imprimir / Guardar PDF</button></div>
  <div class="sheet">
    <header>
      <div class="brand">${CONFIG.cliente.nombre}<small>Ingeniería de fundaciones</small></div>
      <div class="doc-type">Reporte de entrega<br />Adjunto a pagaré</div>
    </header>

    <h1>Reporte de Entrega de Trabajo</h1>
    <p class="stage">${CONFIG.etapa}</p>

    <div class="meta">
      <div class="meta-row"><span>Cliente</span><b>${CONFIG.cliente.nombre}</b></div>
      <div class="meta-row"><span>Fecha de entrega</span><b>${CONFIG.fechaEntrega}</b></div>
      <div class="meta-row"><span>Proveedor</span><b>${CONFIG.proveedor.nombre}</b></div>
      <div class="meta-row"><span>Estado</span><span class="status">Entregado y publicado</span></div>
      <div class="meta-row"><span>A la atención de</span><b>${CONFIG.cliente.detalle}</b></div>
      ${pagareLinea}
    </div>

    <h2>Sitio publicado</h2>
    <p style="font-size:14px;margin:0 0 4px;">El sitio se encuentra en línea y accesible en:</p>
    <p style="font-size:15px;font-weight:700;"><a href="${CONFIG.sitioUrl}">${CONFIG.sitioUrl}</a></p>

    <h2>Trabajo entregado</h2>
    <ul>
${entregablesLi}
    </ul>

    <h2>Detalle de costos</h2>
    <table>
      <thead>
        <tr><th>Concepto</th><th class="mon">Moneda</th><th class="num">Importe</th></tr>
      </thead>
      <tbody>
${filasCostos}
${filasTotales}
      </tbody>
    </table>
    <p style="font-size:12px;color:var(--gray);margin-top:8px;">
      El desarrollo se cotiza en dólares (USD); el hosting y el dominio, en pesos argentinos (ARS).
      No se aplica conversión entre monedas: cada total corresponde a su moneda.
    </p>

    <h2>Saldo pendiente</h2>
    <div class="note">${CONFIG.saldoPendiente}</div>

    <div class="sign">
      <div>Firma proveedor<br />${CONFIG.proveedor.nombre}</div>
      <div>Firma / conformidad cliente<br />${CONFIG.cliente.nombre}</div>
    </div>

    <footer>
      Documento generado el ${CONFIG.fechaEntrega} · ${CONFIG.proveedor.nombre} · ${CONFIG.proveedor.contacto}
    </footer>
  </div>
</body>
</html>
`;

// -------------------------- Markdown -------------------------
const md = `# Reporte de Entrega de Trabajo

**${CONFIG.etapa}**

| | |
|---|---|
| **Cliente** | ${CONFIG.cliente.nombre} (${CONFIG.cliente.detalle}) |
| **Proveedor** | ${CONFIG.proveedor.nombre} — ${CONFIG.proveedor.contacto} |
| **Fecha de entrega** | ${CONFIG.fechaEntrega} |
| **Estado** | Entregado y publicado |${
  CONFIG.pagareRef ? `\n| **Pagaré N.º** | ${CONFIG.pagareRef} |` : ''
}

## Sitio publicado

El sitio se encuentra en línea y accesible en:

**${CONFIG.sitioUrl}**

## Trabajo entregado

${CONFIG.entregables.map((e) => `- ${e}`).join('\n')}

## Detalle de costos

| Concepto | Moneda | Importe |
|---|:---:|---:|
${CONFIG.costos.map((c) => `| ${c.concepto} | ${c.moneda} | ${fmt(c.moneda, c.monto)} |`).join('\n')}
${Object.entries(totales)
  .map(([m, v]) => `| **Total en ${m === 'USD' ? 'dólares' : 'pesos'}** | **${m}** | **${fmt(m, v)}** |`)
  .join('\n')}

> El desarrollo se cotiza en dólares (USD); el hosting y el dominio, en pesos argentinos (ARS).
> No se aplica conversión entre monedas: cada total corresponde a su moneda.

## Saldo pendiente

${CONFIG.saldoPendiente}

---

Firma proveedor: ______________________     Conformidad cliente: ______________________

_Documento generado el ${CONFIG.fechaEntrega} · ${CONFIG.proveedor.nombre}_
`;

// --------------------------- Escribir ------------------------
const outHtml = join(__dirname, 'reporte-entrega.html');
const outMd = join(__dirname, 'reporte-entrega.md');
writeFileSync(outHtml, html, 'utf8');
writeFileSync(outMd, md, 'utf8');

console.log('Reporte generado:');
console.log('  ' + outHtml);
console.log('  ' + outMd);
console.log('\nTotales por moneda: ' + totalesTexto.join('  +  '));
