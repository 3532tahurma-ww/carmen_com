/*
 * 🌙 Koyu tema üretici: css/style.css ve css/stories.css içindeki sabit açık renkleri (beyaz / açık gri / pastel zeminler,
 * koyu yazılar, açık kenarlıklar) bulur ve html[data-theme="dark"] altında koyu karşılıklarıyla css/dark.css'e yazar.
 * Elle yazılan kısım (değişkenler, ince ayarlar) css/dark-base.css'tedir ve dosyanın başına eklenir.
 * Çalıştırma (bilgisayarda node yoksa VS Code ile):
 *   $env:ELECTRON_RUN_AS_NODE=1; & "$env:LOCALAPPDATA\Programs\Microsoft VS Code\Code.exe" tools/build-dark.js
 */
const fs = require('fs'), path = require('path');
const root = path.join(__dirname, '..');
const SRC = ['css/style.css', 'css/stories.css'];
const P = 'html[data-theme="dark"]';
const BASE = [20, 23, 40];           // koyu zemin (#141728)

const hex2 = n => n.toString(16).padStart(2, '0');
const toHex = ([r, g, b]) => '#' + [r, g, b].map(v => hex2(Math.max(0, Math.min(255, Math.round(v))))).join('');
const NAMED = { white: [255, 255, 255], black: [0, 0, 0] };
function parse(c) {
  c = c.trim().toLowerCase();
  if (NAMED[c]) return { rgb: NAMED[c], a: 1 };
  let m = c.match(/^#([0-9a-f]{3,8})$/);
  if (m) {
    let h = m[1];
    if (h.length === 3 || h.length === 4) h = h.split('').map(x => x + x).join('');
    return { rgb: [0, 2, 4].map(i => parseInt(h.substr(i, 2), 16)), a: h.length === 8 ? parseInt(h.substr(6, 2), 16) / 255 : 1 };
  }
  m = c.match(/^rgba?\(([^)]+)\)$/);
  if (m) { const p = m[1].split(/[\s,/]+/).filter(Boolean).map(parseFloat); return { rgb: p.slice(0, 3), a: p[3] == null ? 1 : p[3] }; }
  return null;
}
const lum = ([r, g, b]) => (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
const sat = ([r, g, b]) => (Math.max(r, g, b) - Math.min(r, g, b)) / 255;
const mix = (c, base, k) => c.map((v, i) => v * (1 - k) + base[i] * k);
const COLOR_RE = /#[0-9a-fA-F]{3,8}\b|rgba?\([^)]*\)|\bwhite\b/g;

// zemin rengi: beyaz → kart, açık gri → çip, pastel → rengini koruyarak koyu ton
function darkBg(tok) {
  const c = parse(tok);
  if (!c) return null;
  const L = lum(c.rgb), S = sat(c.rgb);
  if (L < 0.8) return null;
  if (c.a < 0.6) return null;                        // fotoğraf üstündeki yarı saydam beyazlar kalır
  const out = S < 0.08 ? (L > 0.985 ? [24, 28, 46] : L > 0.94 ? [32, 37, 60] : [40, 45, 70]) : mix(c.rgb, BASE, 0.8);
  return c.a < 1 ? `rgba(${out.map(Math.round).join(', ')}, ${c.a})` : toHex(out);
}
// yazı rengi: koyu → açık, orta gri → soluk açık
function darkText(tok) {
  const c = parse(tok);
  if (!c) return null;
  const L = lum(c.rgb), S = sat(c.rgb);
  if (L < 0.3 && S < 0.35) return '#e9ebf5';
  if (L < 0.3) return toHex(mix(c.rgb, [255, 255, 255], 0.55));
  if (L < 0.6 && S < 0.15) return '#a4a9c4';
  return null;
}
// kenarlık: açık → koyu çizgi
function darkLine(tok) {
  const c = parse(tok);
  if (!c || lum(c.rgb) < 0.75 || c.a < 0.5) return null;
  return sat(c.rgb) < 0.1 ? '#2c3150' : toHex(mix(c.rgb, BASE, 0.7));
}
const mapTokens = (val, fn) => { let changed = false; const v = val.replace(COLOR_RE, t => { const r = fn(t); if (r) { changed = true; return r; } return t; }); return changed ? v : null; };

function convertDecl(prop, val) {
  prop = prop.trim().toLowerCase();
  if (/^--/.test(prop) || /url\(/.test(val)) return null;
  if (prop === 'background' || prop === 'background-color' || prop === 'background-image') return mapTokens(val, darkBg);
  if (prop === 'color' || prop === '-webkit-text-fill-color' || prop === 'caret-color') return mapTokens(val, darkText);
  if (/^border(-(top|right|bottom|left))?(-color)?$/.test(prop) || prop === 'outline' || prop === 'outline-color') return mapTokens(val, darkLine);
  return null;
}

// basit CSS ayrıştırıcı: yorumlar atılır, @media içine girilir, @keyframes / @font-face atlanır
function rules(css) {
  css = css.replace(/\/\*[\s\S]*?\*\//g, '');
  const out = [];
  let i = 0;
  function block(media) {
    while (i < css.length) {
      const open = css.indexOf('{', i), close = css.indexOf('}', i);
      if (close !== -1 && (open === -1 || close < open)) { i = close + 1; return; }
      if (open === -1) { i = css.length; return; }
      const head = css.slice(i, open).trim();
      i = open + 1;
      if (/^@media/i.test(head)) { block(head); continue; }
      if (/^@/.test(head)) { let d = 1; while (i < css.length && d) { if (css[i] === '{') d++; else if (css[i] === '}') d--; i++; } continue; }
      const end = css.indexOf('}', i);
      out.push({ media, sel: head, body: css.slice(i, end) });
      i = end + 1;
    }
  }
  block(null);
  return out;
}
const prefix = sel => sel.split(',').map(s => s.trim()).filter(Boolean).map(s => /^:root\b/.test(s) ? null : /^html\b/.test(s) ? s.replace(/^html/, P) : `${P} ${s}`).filter(Boolean).join(',\n');

const groups = new Map();
let count = 0;
SRC.forEach(f => rules(fs.readFileSync(path.join(root, f), 'utf8')).forEach(r => {
  const decls = r.body.split(';').map(d => { const k = d.indexOf(':'); if (k < 0) return null; const prop = d.slice(0, k), raw = d.slice(k + 1).trim(), imp = /!important\s*$/.test(raw), val = raw.replace(/!important\s*$/, '').trim(); const nv = convertDecl(prop, val); return nv ? `${prop.trim()}: ${nv}${imp ? ' !important' : ''}` : null; }).filter(Boolean);
  // 📖 kitap sayfası (deri + parşömen) kendi temasında kalır
  if (/\.book-page|(^|[\s,])\.bk-(body|head|t|cb|cn|cev|chat)\b/.test(r.sel)) return;
  // 🍋 oyun ekranı kendi cozy temasında kalır
  if (/(^|[\s,])\.(ps-|ga-|hl-game|fp-)/.test(r.sel)) return;
  const sel = prefix(r.sel);
  if (!decls.length || !sel) return;
  const key = r.media || '';
  if (!groups.has(key)) groups.set(key, []);
  groups.get(key).push(`${sel} { ${decls.join('; ')}; }`);
  count += decls.length;
}));

const base = fs.readFileSync(path.join(root, 'css/dark-base.css'), 'utf8');
let gen = '';
groups.forEach((list, media) => { gen += media ? `${media} {\n${list.join('\n')}\n}\n` : list.join('\n') + '\n'; });
fs.writeFileSync(path.join(root, 'css/dark.css'), `/* 🌙 Koyu tema: OTOMATİK ÜRETİLDİ (tools/build-dark.js). Elle değişiklik için css/dark-base.css'i düzenle, sonra yeniden üret. */\n${base}\n/* ---------- üretilen karşılıklar (${count} bildirim) ---------- */\n${gen}`);
console.log('css/dark.css yazıldı:', count, 'bildirim');
