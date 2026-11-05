/*
 * 🌐 Uygulama dili (English | Türkçe). Varsayılan İngilizce; Ben → Ayarlar → 🌐 Dil (localStorage amor-stories:lang).
 * Kaynak metinler Türkçe kalır; ekrana gelen metin sözlükten (js/data/i18n-*.js, Stories.I18n.add) çevrilir:
 *   - MutationObserver her eklenen düğümü işler: metin düğümleri + placeholder / title / aria-label
 *   - etkin dil = en yakın [data-lang] (ilan sayfaları: karakterin memleketi) ya da uygulama dili; 'en' ise çevrilir
 *   - SKIP içindekiler hiç çevrilmez (sohbet mesajları / bot cevapları, yazı alanları)
 * Sözlük anahtarı: baştaki / sondaki emoji ve noktalama atılmış Türkçe metin. {} ya da {ad} gibi yer tutucular
 * desen olur (sırayla doldurulur; çeviride {0} {1} ile sıra değiştirilebilir). Bulunamazsa cümlelere bölünüp parça parça denenir.
 * Kodda: Stories.I18n.t('Türkçe metin') (alert / confirm / prompt da kendiliğinden çevrilir).
 */
window.Stories = window.Stories || {};

Stories.I18n = (() => {
  const KEY = 'amor-stories:lang';
  let cur = 'en';
  try { cur = localStorage.getItem(KEY) || 'en'; } catch (e) {}
  if (cur !== 'tr') cur = 'en';
  document.documentElement.lang = cur;
  const lang = v => {
    if (v === 'en' || v === 'tr') { cur = v; try { localStorage.setItem(KEY, v); } catch (e) {} document.documentElement.lang = v; }
    return cur;
  };

  // D: tam metin → çeviri · DL: küçük harfli anahtar → çeviri (balonlarda "hep küçük harf" yazım tarzı için) · P: desenler { re, tok, out }
  // main: ekran çevirisi · side: sadece line() okur (bot editörü: çipler ve kural adları bot sözlüğünden etkilenmesin)
  const main = { D: new Map(), DL: new Map(), P: [], K: new Map() }, side = { D: new Map(), DL: new Map(), P: [], K: new Map() };
  let S = main, T = main;              // S: okunan depo · T: add'in yazdığı depo
  const lc = s => s.toLocaleLowerCase('tr');
  let ci = false;                      // true: balon çevriliyor, küçük harfli eşleşme serbest
  const PH = /\{\w*\}/g;
  const norm = s => String(s).replace(/\s+/g, ' ').trim();
  const reEsc = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  function add(dict) {
    Object.keys(dict).forEach(k => {
      const key = norm(k), out = dict[k];
      if (!key || out == null) return;
      if (PH.test(key)) {
        PH.lastIndex = 0;
        if (!/\p{L}/u.test(key.replace(PH, ''))) return;   // sadece yer tutucu: her şeye uyardı
        const old = T.K.get(key);
        if (old) { old.out = out; return; }   // aynı anahtar yeniden gelirse çeviri güncellenir (bot editörünün İngilizce sekmesi)
        const lits = key.split(PH), tok = lits.reduce((a, b) => (b.length > a.length ? b : a), '');
        const p = { re: new RegExp('^' + lits.map(reEsc).join('(.+?)') + '$', 'u'), tok, out, w: lits.join('').length, b: key.includes('{v}') };
        T.K.set(key, p); T.P.push(p);
      } else { T.D.set(key, out); T.DL.set(lc(key), out); }
      PH.lastIndex = 0;
    });
    T.P.sort((a, b) => b.w - a.w);     // en özel (en çok sabit metinli) desen önce
    schedule(document.body);
  }
  const fill = (out, vals) => {
    let i = 0;
    return out.replace(/\{(\d*)\w*\}/g, (m, n) => { const v = n !== '' ? vals[+n] : vals[i++]; return v == null ? m : v; });
  };
  function exact(core) {
    const d = S.D.get(core) ?? (ci ? S.DL.get(lc(core)) : null);
    if (d != null) return d;
    for (const p of S.P) {
      if (p.b && !ci) continue;        // {v}: sadece sohbet balonu ("Bana {v} yap" arayüzdeki metne uymasın)
      if (p.tok && !core.includes(p.tok)) continue;
      const m = p.re.exec(core);
      if (m) return fill(p.out, m.slice(1).map(v => look(v) || v.split(' ve ').map(x => look(x) || x).join(' and ')));
    }
    return null;
  }
  // baş / son: emoji, boşluk, noktalama (anahtarlarda yok)
  const SPLIT = /^([^\p{L}\p{N}{]*)([\s\S]*?)([^\p{L}\p{N}}.!?…)]*)$/u;
  // metni [baş, sözlük anahtarı, son] diye böler
  const keyOf = s => { const m = SPLIT.exec(s); return m ? [m[1], norm(m[2]), m[3]] : [s, '', '']; };
  function look(s) {
    const m = SPLIT.exec(s);
    if (!m || !m[2]) return null;
    const core = norm(m[2]), r = exact(core);
    return r == null ? null : m[1] + r + m[3];
  }
  // cümlelere böl; ardışık parçaları en uzundan kısaya birleştirip dene
  function sentences(s) {
    const parts = s.split(/(?<=[.!?…])\s+/u);
    if (parts.length < 2) return null;
    const out = [];
    let hit = false;
    for (let i = 0; i < parts.length;) {
      let j = parts.length, r = null;
      for (; j > i; j--) { r = look(parts.slice(i, j).join(' ')); if (r != null) break; }
      if (r != null && j > i) { out.push(r); hit = true; i = j; } else { out.push(parts[i]); i++; }
    }
    return hit ? out.join(' ') : null;
  }
  function translate(s) {
    if (!s || !/\p{L}/u.test(s)) return null;
    const lead = s.match(/^\s*/)[0], tail = s.match(/\s*$/)[0], body = s.trim();
    let r = look(body) || sentences(body);
    // "a · b · c" gibi birleşik satırlar: parça parça
    if (r == null && body.includes(' · ')) {
      let hit = false;
      const parts = body.split(' · ').map(p => { const x = look(p) || sentences(p); if (x != null) hit = true; return x == null ? p : x; });
      if (hit) r = parts.join(' · ');
    }
    return r == null ? null : lead + r + tail;
  }
  const t = s => (cur === 'en' && translate(s)) || s;
  // bot editörü: toSide(true) iken yüklenen sözlükler ekrana karışmaz, sadece line() ile okunur (balon kurallarıyla; yoksa null)
  const toSide = v => { T = v ? side : main; };
  const line = s => { S = side; ci = true; try { return translate(s); } finally { S = main; ci = false; } };

  // ---------- DOM ----------
  // sohbet balonu: sadece data-lang taşıyanlar çevrilir (karakterin dili; app.js itemHtml)
  const SKIP = 'script,style,textarea,code,[contenteditable],.no-i18n,.msg .bubble:not(.ev-bubble):not(.oc-bubble):not([data-lang]),.evb-t,.ocb-t,.sys,.sc-body>span,.cap,.quote>span,.sc-out p,.typing';
  const ATTRS = ['placeholder', 'title', 'aria-label'];
  const done = new WeakMap();          // düğüm → son çevirdiğimiz değer
  const effLang = el => { const x = el && el.closest && el.closest('[data-lang]'); return x ? x.getAttribute('data-lang') : cur; };
  function doText(n) {
    const p = n.parentElement;
    if (!p || done.get(n) === n.data || p.closest(SKIP) || effLang(p) !== 'en') return;
    ci = !!p.closest('.bubble[data-lang]');
    const r = translate(n.data);
    ci = false;
    if (r != null && r !== n.data) n.data = r;
    done.set(n, n.data);
  }
  function doEl(el) {
    if (el.closest(SKIP) || effLang(el) !== 'en') return;
    ATTRS.forEach(a => { const v = el.getAttribute(a); if (v) { const r = translate(v); if (r != null && r !== v) el.setAttribute(a, r); } });
  }
  function walk(root) {
    if (!root) return;
    if (root.nodeType === 3) return doText(root);
    if (root.nodeType !== 1) return;
    // Türkçe modda sadece data-lang="en" alanları
    if (cur !== 'en' && !root.closest('[data-lang="en"]')) { root.querySelectorAll('[data-lang="en"]').forEach(walk); return; }
    if (root.closest(SKIP)) return;
    doEl(root);
    root.querySelectorAll('[placeholder],[title],[aria-label]').forEach(doEl);
    const tw = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    const list = [];
    while (tw.nextNode()) list.push(tw.currentNode);
    list.forEach(doText);
  }
  let queue = new Set(), timer = 0;
  function schedule(n) { if (!n) return; queue.add(n); if (!timer) timer = requestAnimationFrame(flush); }
  function flush() {
    timer = 0;
    const q = [...queue]; queue = new Set();
    q.forEach(n => { if (n.isConnected) walk(n); });
  }
  const mo = new MutationObserver(ms => {
    for (const m of ms) {
      if (m.type === 'characterData') schedule(m.target);
      else m.addedNodes.forEach(schedule);
    }
    flush();             // aynı karede: çevrilmemiş hâl görünmesin
  });
  mo.observe(document.documentElement, { childList: true, subtree: true, characterData: true });

  // ---------- tarayıcı pencereleri ----------
  const wrap = name => { const f = window[name]; if (f) window[name] = function (msg, ...rest) { return f.call(window, msg == null ? msg : t(String(msg)), ...rest); }; };
  ['alert', 'confirm', 'prompt'].forEach(wrap);

  return { lang, add, t, translate, toSide, line, keyOf, refresh: () => schedule(document.body) };
})();
