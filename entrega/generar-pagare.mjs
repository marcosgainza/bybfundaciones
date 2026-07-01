// =============================================================
// Generador de Recibo + Pagarés — B&B Ingeniería
// -------------------------------------------------------------
// Editá el objeto CONFIG y ejecutá:  node entrega/generar-pagare.mjs
// Genera, en esta misma carpeta, HTML imprimible + Markdown de:
//   - recibo-anticipo   (USD 150 cobrados ahora)
//   - pagare-usd        (saldo desarrollo, USD 500)
//   - pagare-ars        (hosting + dominio, en pesos)
//
// NOTAS LEGALES:
//  * Un pagaré es por UNA suma y UNA moneda -> por eso hay dos pagarés.
//  * El vencimiento de un pagaré no puede condicionarse a un evento; se emite
//    "A la vista" (pagadero al presentarlo) con una referencia a la finalización.
//    Si querés fecha fija, cambiá CONFIG.vencimiento por, p.ej., '30/09/2026'.
// =============================================================

import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));

// ------------------------- CONFIG ----------------------------
const CONFIG = {
  lugar: 'Paraná, Entre Ríos',
  fechaLibramiento: '02/07/2026', // fecha de la firma
  lugarPago: 'Paraná, Entre Ríos',
  vencimiento: 'A la vista', // o una fecha fija: '30/09/2026'
  referenciaFinalizacion:
    'A presentar al cobro a la finalización del sistema de gestión.',

  // Beneficiario = vos (quien cobra). Firma el recibo.
  beneficiario: {
    nombre: 'Marcos Gainza',
    dni: '__________', // completar
    domicilio: '__________', // completar
  },

  // Librador / deudor = el cliente (quien firma los pagarés).
  librador: {
    nombre: 'B&B Ingeniería',
    firmantes: 'Bruno Barbagelata y Fausto Barbagelata',
    dniCuit: '__________', // completar
    domicilio: '__________', // completar
  },

  // Anticipo cobrado ahora
  anticipo: { moneda: 'USD', monto: 150 },

  // Pagarés a firmar (uno por moneda)
  pagares: [
    {
      id: 'usd',
      moneda: 'USD',
      monto: 500,
      concepto: 'Saldo por el desarrollo del sitio web (total USD 650, menos anticipo de USD 150).',
    },
    {
      id: 'ars',
      moneda: 'ARS',
      monto: 104988,
      concepto: 'Hosting anual ($ 89.988) y dominio anual ($ 15.000) del sitio web.',
    },
  ],
};
// ------------------------------------------------------------

// ---------- utilidades ----------
const miles = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
const simbolo = (m) => (m === 'USD' ? 'USD' : '$');
const fmt = (m, n) => `${simbolo(m)} ${miles(n)}`;
const monedaLetra = (m) => (m === 'USD' ? 'dólares estadounidenses' : 'pesos argentinos');

function centenas(n) {
  if (n === 0) return '';
  if (n === 100) return 'cien';
  const CENT = ['', 'ciento', 'doscientos', 'trescientos', 'cuatrocientos', 'quinientos', 'seiscientos', 'setecientos', 'ochocientos', 'novecientos'];
  const DIEZ = ['', 'diez', 'veinte', 'treinta', 'cuarenta', 'cincuenta', 'sesenta', 'setenta', 'ochenta', 'noventa'];
  const UNI = ['', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve'];
  const ESP = { 11: 'once', 12: 'doce', 13: 'trece', 14: 'catorce', 15: 'quince', 16: 'dieciséis', 17: 'diecisiete', 18: 'dieciocho', 19: 'diecinueve', 21: 'veintiuno', 22: 'veintidós', 23: 'veintitrés', 24: 'veinticuatro', 25: 'veinticinco', 26: 'veintiséis', 27: 'veintisiete', 28: 'veintiocho', 29: 'veintinueve' };
  const c = Math.floor(n / 100);
  const resto = n % 100;
  let out = CENT[c];
  if (resto > 0) {
    if (out) out += ' ';
    if (resto === 10) out += 'diez';
    else if (resto === 20) out += 'veinte';
    else if (ESP[resto]) out += ESP[resto];
    else if (resto < 10) out += UNI[resto];
    else {
      const d = Math.floor(resto / 10), u = resto % 10;
      out += DIEZ[d] + (u ? ' y ' + UNI[u] : '');
    }
  }
  return out;
}

function numeroALetras(n) {
  n = Math.floor(n);
  if (n === 0) return 'cero';
  const millones = Math.floor(n / 1000000);
  const mil = Math.floor((n % 1000000) / 1000);
  const resto = n % 1000;
  const partes = [];
  if (millones > 0) partes.push(millones === 1 ? 'un millón' : centenas(millones) + ' millones');
  if (mil > 0) partes.push(mil === 1 ? 'mil' : centenas(mil) + ' mil');
  if (resto > 0) partes.push(centenas(resto));
  return partes.join(' ').trim();
}

const enLetras = (m, n) =>
  `${monedaLetra(m)} ${numeroALetras(n)}`.toUpperCase();

// ---------- estilos comunes ----------
const CSS = `
  :root { --navy:#0d2b5b; --gray:#5a616e; --line:#c9cfd8; --mist:#f4f6f9; }
  * { box-sizing:border-box; }
  body { margin:0; background:#e9edf2; color:#20262f;
    font-family:-apple-system,"Segoe UI",Roboto,Helvetica,Arial,sans-serif; }
  .print-bar { max-width:800px; margin:16px auto 0; text-align:right; }
  .print-bar button { background:var(--navy); color:#fff; border:0; border-radius:6px;
    padding:10px 18px; font-size:14px; font-weight:700; cursor:pointer; }
  .sheet { max-width:800px; margin:20px auto; background:#fff; padding:46px 52px;
    box-shadow:0 10px 40px rgba(13,43,91,.15); }
  header { display:flex; justify-content:space-between; align-items:flex-start;
    border-bottom:3px solid var(--navy); padding-bottom:14px; margin-bottom:8px; }
  .brand { font-size:22px; font-weight:800; color:var(--navy); }
  .brand small { display:block; font-size:11px; font-weight:600; color:var(--gray);
    letter-spacing:.14em; text-transform:uppercase; margin-top:3px; }
  .doc-title { font-size:30px; font-weight:800; color:var(--navy); letter-spacing:.04em;
    text-align:right; }
  .toprow { display:flex; justify-content:space-between; gap:18px; margin:22px 0 8px; }
  .field { font-size:13px; }
  .field span { display:block; color:var(--gray); font-size:11px; text-transform:uppercase;
    letter-spacing:.08em; margin-bottom:2px; }
  .field b { font-size:14px; }
  .importe-box { border:2px solid var(--navy); border-radius:8px; padding:8px 18px;
    text-align:center; min-width:150px; }
  .importe-box span { display:block; font-size:10px; color:var(--gray); text-transform:uppercase;
    letter-spacing:.1em; }
  .importe-box b { font-size:24px; color:var(--navy); font-variant-numeric:tabular-nums; }
  .body-text { font-size:15px; line-height:1.7; margin:22px 0; }
  .body-text .letras { font-weight:700; text-transform:uppercase; }
  .ref { background:var(--mist); border-left:4px solid var(--navy); border-radius:0 6px 6px 0;
    padding:12px 16px; font-size:13px; color:#33404f; margin:18px 0; }
  .datos { display:grid; grid-template-columns:1fr 1fr; gap:6px 40px; margin:18px 0 4px;
    font-size:13px; }
  .datos div { border-bottom:1px dotted var(--line); padding:5px 0; display:flex;
    justify-content:space-between; }
  .datos div span { color:var(--gray); }
  .firma { margin-top:56px; text-align:center; }
  .firma .line { border-top:1px solid #333; width:280px; margin:0 auto; padding-top:8px;
    font-size:13px; }
  .firma .sub { font-size:11px; color:var(--gray); margin-top:2px; }
  footer { margin-top:30px; padding-top:14px; border-top:1px solid var(--line);
    font-size:11px; color:var(--gray); text-align:center; }
  @media print {
    body { background:#fff; }
    .print-bar { display:none; }
    .sheet { box-shadow:none; margin:0; max-width:none; padding:0; }
  }
`;

const wrapHtml = (titulo, inner) => `<!doctype html>
<html lang="es-AR"><head><meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${titulo}</title><style>${CSS}</style></head>
<body>
  <div class="print-bar"><button onclick="window.print()">Imprimir / Guardar PDF</button></div>
  <div class="sheet">${inner}</div>
</body></html>`;

const brandHeader = (docTitle) => `
    <header>
      <div class="brand">${CONFIG.librador.nombre}<small>Ingeniería de fundaciones</small></div>
      <div class="doc-title">${docTitle}</div>
    </header>`;

// ---------- PAGARÉ ----------
function pagareHtml(p) {
  const inner = `${brandHeader('PAGARÉ')}
    <div class="toprow">
      <div>
        <div class="field"><span>Lugar y fecha de libramiento</span><b>${CONFIG.lugar} — ${CONFIG.fechaLibramiento}</b></div>
        <div class="field" style="margin-top:10px;"><span>Vencimiento</span><b>${CONFIG.vencimiento}</b></div>
      </div>
      <div class="importe-box"><span>Importe</span><b>${fmt(p.moneda, p.monto)}</b></div>
    </div>

    <p class="body-text">
      Por igual valor recibido, me obligo a pagar incondicionalmente a la orden de
      <b>${CONFIG.beneficiario.nombre}</b> la cantidad de
      <span class="letras">${enLetras(p.moneda, p.monto)}</span> (${fmt(p.moneda, p.monto)}),
      pagaderos en ${CONFIG.lugarPago}. Sin protesto (art. 50, Dec. Ley 5965/63).
    </p>

    <div class="ref"><b>Concepto:</b> ${p.concepto}<br />${CONFIG.referenciaFinalizacion}</div>

    <div class="datos">
      <div><span>Librador (deudor)</span><b>${CONFIG.librador.nombre}</b></div>
      <div><span>DNI / CUIT</span><b>${CONFIG.librador.dniCuit}</b></div>
      <div><span>Firmantes</span><b>${CONFIG.librador.firmantes}</b></div>
      <div><span>Domicilio</span><b>${CONFIG.librador.domicilio}</b></div>
    </div>

    <div class="firma">
      <div class="line">Firma y aclaración del librador
        <div class="sub">${CONFIG.librador.firmantes} — ${CONFIG.librador.nombre}</div>
      </div>
    </div>

    <footer>Pagaré a favor de ${CONFIG.beneficiario.nombre} · ${CONFIG.lugar}, ${CONFIG.fechaLibramiento}</footer>`;
  return wrapHtml(`Pagaré ${fmt(p.moneda, p.monto)} — ${CONFIG.librador.nombre}`, inner);
}

function pagareMd(p) {
  return `# PAGARÉ

**Lugar y fecha de libramiento:** ${CONFIG.lugar} — ${CONFIG.fechaLibramiento}
**Vencimiento:** ${CONFIG.vencimiento}
**Importe:** ${fmt(p.moneda, p.monto)}

Por igual valor recibido, me obligo a pagar incondicionalmente a la orden de
**${CONFIG.beneficiario.nombre}** la cantidad de **${enLetras(p.moneda, p.monto)}**
(${fmt(p.moneda, p.monto)}), pagaderos en ${CONFIG.lugarPago}. Sin protesto (art. 50, Dec. Ley 5965/63).

**Concepto:** ${p.concepto}
${CONFIG.referenciaFinalizacion}

| | |
|---|---|
| **Librador (deudor)** | ${CONFIG.librador.nombre} |
| **DNI / CUIT** | ${CONFIG.librador.dniCuit} |
| **Firmantes** | ${CONFIG.librador.firmantes} |
| **Domicilio** | ${CONFIG.librador.domicilio} |

<br>

Firma y aclaración del librador: ____________________________________

_${CONFIG.librador.firmantes} — ${CONFIG.librador.nombre}_
`;
}

// ---------- RECIBO ----------
function reciboHtml() {
  const a = CONFIG.anticipo;
  const inner = `${brandHeader('RECIBO')}
    <div class="toprow">
      <div class="field"><span>Lugar y fecha</span><b>${CONFIG.lugar} — ${CONFIG.fechaLibramiento}</b></div>
      <div class="importe-box"><span>Importe recibido</span><b>${fmt(a.moneda, a.monto)}</b></div>
    </div>

    <p class="body-text">
      Recibí de <b>${CONFIG.librador.nombre}</b> la suma de
      <span class="letras">${enLetras(a.moneda, a.monto)}</span> (${fmt(a.moneda, a.monto)}),
      en concepto de <b>anticipo a cuenta</b> del desarrollo del sitio web
      (total del desarrollo: USD 650). Saldo restante: USD 500, documentado en pagaré aparte.
    </p>

    <div class="firma">
      <div class="line">Firma y aclaración
        <div class="sub">${CONFIG.beneficiario.nombre} — DNI ${CONFIG.beneficiario.dni}</div>
      </div>
    </div>

    <footer>Recibo emitido por ${CONFIG.beneficiario.nombre} · ${CONFIG.lugar}, ${CONFIG.fechaLibramiento}</footer>`;
  return wrapHtml(`Recibo ${fmt(a.moneda, a.monto)} — anticipo`, inner);
}

function reciboMd() {
  const a = CONFIG.anticipo;
  return `# RECIBO

**Lugar y fecha:** ${CONFIG.lugar} — ${CONFIG.fechaLibramiento}
**Importe recibido:** ${fmt(a.moneda, a.monto)}

Recibí de **${CONFIG.librador.nombre}** la suma de **${enLetras(a.moneda, a.monto)}**
(${fmt(a.moneda, a.monto)}), en concepto de **anticipo a cuenta** del desarrollo del
sitio web (total del desarrollo: USD 650). Saldo restante: USD 500, documentado en pagaré aparte.

<br>

Firma y aclaración: ____________________________________

_${CONFIG.beneficiario.nombre} — DNI ${CONFIG.beneficiario.dni}_
`;
}

// ---------- escribir archivos ----------
const out = [];
function guardar(nombre, html, md) {
  const h = join(__dirname, nombre + '.html');
  const m = join(__dirname, nombre + '.md');
  writeFileSync(h, html, 'utf8');
  writeFileSync(m, md, 'utf8');
  out.push(h, m);
}

guardar('recibo-anticipo', reciboHtml(), reciboMd());
for (const p of CONFIG.pagares) {
  guardar('pagare-' + p.id, pagareHtml(p), pagareMd(p));
}

console.log('Documentos generados:');
for (const f of out) console.log('  ' + f);
console.log('\nResumen:');
console.log('  Recibo (anticipo):  ' + fmt(CONFIG.anticipo.moneda, CONFIG.anticipo.monto));
for (const p of CONFIG.pagares) {
  console.log('  Pagaré ' + p.moneda + ':         ' + fmt(p.moneda, p.monto) + '  (' + enLetras(p.moneda, p.monto) + ')');
}
