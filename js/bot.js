/*
 * Amor Stories - Bot modu motoru (uygulama ve tools/bot-editor.html birlikte kullanır)
 *
 * Veri (js/data/bot-rules.js → Stories.BOT_RULES):
 *   rules : [{ id, name, category, when: [...], reply: [...], traits: [], chars: [], note }]
 *   groups: [{ name: 'selam', words: ['selam', 'merhaba', 'slm'] }]          → kuralda "@selam"
 *   verbs : [{ verb: 'gitmek', stems: ['git', 'gid'] }]                      → kuralda "+gitmek"
 *   addons: [{ ..., when, add: [...], mode, chance }]  🪄 karakterin mesajına otomatik ek (aşağıda addons())
 *   en    : [['Selam {sen}!', 'Hi {sen}!'], ...]   editörün İngilizce sekmesi: sözlük anahtarı → çeviri, js/data/i18n-en-*.js üstüne yazılır (enDict)
 *
 * Kuraldaki bir kelime (when öğesi) şunlardan biri olabilir; "|" ile alternatifler yazılır:
 *   kahve      → mesajda geçmesi yeterli (ekler olur: "kahveyi")
 *   yap-       → kelime başında bu kök ("yap", "yapmak", "yapabiliyorum", "yaptım")
 *   =sa        → sadece tam kelime ("sa" evet, "saat"/"masa" hayır)
 *   +yapmak    → fiil listesindeki tüm kökleri (kelime başında)
 *   @selam     → kelime grubundaki herhangi bir kelime (grupta da yap- ve +fiil kullanılabilir)
 * when sırası önemlidir: "X, Y" ile "Y, X" farklı kurallardır. when boşsa kural "yedek cevap"tır.
 * reply: seçeneklerden biri rastgele; "||" ayrı baloncuk; {sen} kullanıcının, {ben} karakterin adı.
 * traits: karakterde HEPSİ olmalı; bir öğede "|" ile alternatifler (ör. "Pussy Size: Tight|Pussy Size: Very Tight" = biri yeter).
 *   Yaştan gelen özellik de sayılır: "Yaş: Genç" (18–22), "Yaş: Yirmili", "Yaş: Otuzlu", "Yaş: Olgun" (40+); bkz. ageTrait.
 *   Şehirden gelen memleket de: "Memleket: Türk", "Memleket: Latin", "Memleket: Akdeniz"… (js/data/world.js); bkz. originTrait.
 * chars: sadece bu adlar (tam ad ya da ilk ad).
 * Eşleşenler arasında en özel kural kazanır: daha çok kelime > kişilik şartı > karakter şartı. Eşitlikte rastgele.
 * best(..., loose) ile sırası farklı ya da (3+ kelimede) bir kelimesi eksik kurallar da düşük puanla yarışır.
 */
window.Stories = window.Stories || {};

Stories.Bot = (() => {
  // Küçük harf, noktalama yok, uzatılmış harfler tek ("selaaam" → "selam"); başta ve sonda boşluk (kelime başı araması için)
  const norm = s => ' ' + String(s || '').toLocaleLowerCase('tr')
    .replace(/[^\p{L}\p{N}\s]/gu, ' ')
    .replace(/(\p{L})\1{2,}/gu, '$1')
    .replace(/\s+/g, ' ').trim() + ' ';
  const clean = s => norm(s).trim();
  const lower = s => String(s || '').toLocaleLowerCase('tr').trim();

  // 🌐 İngilizce yazılan mesaj: kurallar Türkçe okuduğu için eşleşmeden önce Türkçe tetikleyicilere çevrilir (js/data/bot-en.js).
  // Türkçe harf varsa ya da hiçbir ifade tutmazsa metin aynen döner; saklanan mesaj değişmez
  let enRe = null;
  function fromEn(text) {
    const src = String(text || '');
    if (!Stories.BOT_EN || /[çğıöşü]/i.test(src)) return src;
    if (!enRe) enRe = Stories.BOT_EN.map(([e, tr]) => [new RegExp(`\\b(?:${e})\\b`, 'g'), ` ${tr} `]);
    const low = src.toLowerCase().replace(/['’]/g, '');
    let s = low;
    enRe.forEach(([re, tr]) => { s = s.replace(re, tr); });
    return s === low ? src : s.replace(/\s+/g, ' ').trim();
  }

  // Bir kuralı kelimesini eşleştiricilere çevirir: [{ s: 'yap', start: true }, ...]
  function expand(term, data, depth = 0) {
    const out = [];
    String(term || '').split('|').map(t => t.trim()).filter(Boolean).forEach(t => {
      if (t[0] === '@' && depth < 3) {
        const g = (data.groups || []).find(x => lower(x.name) === lower(t.slice(1)));
        if (g) (g.words || []).forEach(w => out.push(...expand(w, data, depth + 1)));
      } else if (t[0] === '+') {
        const v = (data.verbs || []).find(x => lower(x.verb) === lower(t.slice(1)));
        const stems = v ? v.stems : [lower(t.slice(1)).replace(/m[ae]k$/, '')];
        stems.map(clean).filter(Boolean).forEach(s => out.push({ s, start: true }));
      } else if (t[0] === '=') {
        const s = clean(t.slice(1));
        if (s) out.push({ s, start: true, whole: true });
      } else if (t.endsWith('-')) {
        const s = clean(t.slice(0, -1));
        if (s) out.push({ s, start: true });
      } else {
        const s = clean(t);
        if (s) out.push({ s, start: false });
      }
    });
    return out;
  }

  // ⚡ best()/addons() süresince açılmış terimler saklanır (aynı @grup yüzlerce kuralda tekrar açılmasın)
  let memo = null;
  const expandC = (term, data) => {
    if (!memo) return expand(term, data);
    let v = memo.get(term);
    if (!v) memo.set(term, v = expand(term, data));
    return v;
  };

  // Kelimeler mesajda bu sırayla geçiyor mu?
  function inOrder(msg, when, data) {
    let from = 0;
    for (const term of when) {
      let best = -1, end = 0;
      for (const m of expandC(term, data)) {
        let i, e;
        if (m.start) {
          const k = msg.indexOf(' ' + m.s + (m.whole ? ' ' : ''), Math.max(0, from - 1));
          i = k === -1 ? -1 : k + 1;
        } else i = msg.indexOf(m.s, from);
        if (i === -1) continue;
        e = i + m.s.length;
        if (best === -1 || i < best) { best = i; end = e; }
      }
      if (best === -1) return false;
      from = end;
    }
    return true;
  }

  // 🎂 Yaş da bir özellik gibi eşleşir (kullanıcı ~20 yaşında varsayılır): "Yaş: Genç" 18–22 (yaşıt), "Yaş: Yirmili" 23–29,
  // "Yaş: Otuzlu" 30–39, "Yaş: Olgun" 40+. Yaşı yoksa ya da 18'den küçükse yaş özelliği yok
  const ageTrait = age => { const a = parseInt(age, 10); return !(a >= 18) ? '' : a <= 22 ? 'Yaş: Genç' : a <= 29 ? 'Yaş: Yirmili' : a <= 39 ? 'Yaş: Otuzlu' : 'Yaş: Olgun'; };
  // 🌍 Memleket de bir özellik: şehrin ülkesinin kültür bölgesi ("Memleket: Latin", "Memleket: Doğu Asya"…; bkz. js/data/world.js)
  const originTrait = city => { const r = Stories.World && Stories.World.regionOf(city); return r ? 'Memleket: ' + r : ''; };
  // 🛡️ korunma seçiminden gelenler: "Kondom: Var", "İçe: İzin yok", "Hap: Alıyor"… (app.js protTraits)
  const haveOf = ch => new Set([...(ch.traits || []), ageTrait(ch.age), originTrait(ch.city), ...(Stories.protTraits ? Stories.protTraits(ch) : [])].filter(Boolean).map(lower));
  function fits(rule, ch, have) {
    const traits = (rule.traits || []).filter(Boolean);
    if (traits.length) {
      have = have || haveOf(ch);
      if (!traits.every(t => String(t).split('|').some(a => have.has(lower(a))))) return false;
    }
    const names = (rule.chars || []).map(lower).filter(Boolean);
    if (names.length) {
      const full = lower(ch.name), first = full.split(' ')[0];
      if (!names.some(n => n === full || n === first)) return false;
    }
    return true;
  }

  const words = r => (r.when || []).filter(Boolean);
  const score = r => words(r).length * 100 + (r.traits || []).filter(Boolean).length * 10 + ((r.chars || []).filter(Boolean).length ? 20 : 0);
  const pick = a => a[Math.floor(Math.random() * a.length)];
  const asData = d => (Array.isArray(d) ? { rules: d } : (d || { rules: [] }));

  // 🔓 Gevşek eşleşme (kullanıcının yazdığı mesajda): kelimeler başka sırada da olabilir (−30 puan), 3+ kelimelik
  // kuralda biri eksik olabilir (eksik kelimenin puanı yok, −60). İç sorgu kuralları (=evt, =durum, =sor, =cevap) hariç
  const INNER = ['=evt', '=durum', '=sor', '=cevap', '=memleket'];
  function looseScore(msg, r, data) {
    const w = words(r);
    if (w.some(t => INNER.includes(t))) return -1;
    const got = w.filter(t => inOrder(msg, [t], data)).length;
    if (got === w.length) return score(r) - 30;
    if (w.length >= 3 && got === w.length - 1) return score(r) - 160;
    return -1;
  }

  // Mesaja ve karaktere göre en iyi kural: { rule, score, fallback, loose } ya da null.  data: BOT_RULES (ya da sadece kural dizisi)
  // loose: true → tam tutmayan kurallar da gevşek puanıyla yarışır
  function best(data, text, ch, loose) {
    memo = new Map();
    try { return bestOf(data, text, ch, loose); } finally { memo = null; }
  }
  function bestOf(data, text, ch, loose) {
    data = asData(data);
    const msg = norm(text), have = ch && haveOf(ch);
    const usable = (data.rules || []).filter(r => (r.reply || []).some(x => String(x).trim()) && fits(r, ch, have));
    const hit = usable.filter(r => words(r).length && inOrder(msg, words(r), data)).map(r => ({ r, s: score(r) }));
    if (loose) usable.forEach(r => {
      if (!words(r).length || hit.some(x => x.r === r)) return;
      const s = looseScore(msg, r, data);
      if (s > 0) hit.push({ r, s, loose: true });
    });
    const pool = hit.length ? hit : usable.filter(r => !words(r).length).map(r => ({ r, s: score(r) }));
    if (!pool.length) return null;
    const top = Math.max(...pool.map(x => x.s));
    const w = pick(pool.filter(x => x.s === top));
    return { rule: w.r, score: top, fallback: !hit.length, loose: !!w.loose };
  }

  /* 🪄 Otomatik ekler: karakterin yazdığı mesaja göre ek.
   * Ek: { id, name, category, when: [...], add: ['😏', ...], mode, chance: 0-100, traits, chars, note }
   *   mode: 'prepend' başına ekle · 'append' sonuna ekle · 'before' önce ayrı mesaj · 'message' sonra ayrı mesaj
   *   when boşsa her mesaja uygulanır. Her moddan en özel olan seçilir; olasılık uygulamada zarla bakılır.
   * Dönüş: { prepend, append, before, message } (her biri ek ya da null) */
  const ADD_MODES = ['prepend', 'append', 'before', 'message'];
  function addons(data, text, ch) {
    data = asData(data);
    const msg = norm(text), have = ch && haveOf(ch);
    const out = { prepend: null, append: null, before: null, message: null };
    memo = new Map();
    let hit;
    try {
      hit = (data.addons || []).filter(a => (a.add || []).some(x => String(x).trim()) && fits(a, ch, have) &&
        (!words(a).length || inOrder(msg, words(a), data)));
    } finally { memo = null; }
    ADD_MODES.forEach(mode => {
      const pool = hit.filter(a => (a.mode || 'append') === mode);
      if (!pool.length) return;
      const top = Math.max(...pool.map(score));
      out[mode] = pick(pool.filter(a => score(a) === top));
    });
    return out;
  }
  const addText = (a, vars) => pick((a.add || []).map(String).filter(x => x.trim()))
    .replace(/\{sen\}/gi, vars.sen || 'sen').replace(/\{ben\}/gi, vars.ben || '');

  /* 🔁 Yönlendirici (yedek cevaptan önce): hiçbir kural tutmayınca mesaj kurallara bulanık puanlanır.
   * Türkçe harfsiz yazım (gogus → göğüs) tam sayılır (1), ek farkı (dönsene → =dön) 0.9, 5+ harfli kelimede 1 harf hata 0.7.
   * Kelime sırası önemsiz; 3+ kelimelik kuralda biri eksik olabilir (0 puan, gerisi tam tutmalı). sim = ortalama.
   * Dönüş: { rule, sim, typo: [düzeltilen kelimeler] } ya da null.  skip(rule): true → yarışmaz */
  const fold = s => String(s || '').replace(/[çğıöşü]/g, c => ({ ç: 'c', ğ: 'g', ı: 'i', ö: 'o', ş: 's', ü: 'u' })[c]);
  function lev1(a, b) {
    if (a === b) return true;
    if (Math.abs(a.length - b.length) > 1) return false;
    let i = 0;
    while (i < a.length && a[i] === b[i]) i++;
    if (a.length === b.length) return a.slice(i + 1) === b.slice(i + 1) || (a[i] === b[i + 1] && a[i + 1] === b[i] && a.slice(i + 2) === b.slice(i + 2));
    return a.length > b.length ? a.slice(i + 1) === b.slice(i) : a.slice(i) === b.slice(i + 1);
  }
  const SUFF = ['misin', 'musun', 'sana', 'sene', 'alim', 'elim', 'sin', 'sun', 'lim', 'lar', 'ler', 'dan', 'den', 'yi', 'ya', 'ye', 'da', 'de', 'ta', 'te', 'la', 'le', 'in', 'un', 'i', 'u', 'a', 'e'];
  // tok (mesaj kelimesi) w'yi (kural kelimesi) karşılıyor mu: 1 tam · 0.9 ek farkı · 0.7 yazım hatası · 0
  function wordHit(tok, w, kind) {
    if (kind === 'whole' ? tok === w : kind === 'start' ? tok.startsWith(w) : tok.includes(w)) return 1;
    if (kind === 'whole' && w.length >= 3 && SUFF.some(x => tok.endsWith(x) && tok.length - x.length >= 3 && tok.slice(0, -x.length) === w)) return .9;
    if (w.length < 5 || tok.slice(0, 2) !== w.slice(0, 2)) return 0;   // hata ilk 2 harfte sayılmaz (aldım ≠ azdım)
    if (kind === 'whole') return lev1(tok, w) ? .7 : 0;
    return [w.length - 1, w.length, w.length + 1].some(n => tok.length >= n && lev1(tok.slice(0, n), w)) ? .7 : 0;
  }
  // terimin en iyi karşılığı: { v, typo, at, n } (çok kelimeli terimde kelimeler art arda olmalı; en zayıfı sayılır).
  // used: başka terimin aldığı kelimeler (bir kelime iki terimi karşılamaz)
  function termHit(toks, term, data, used) {
    let best = { v: 0, typo: '' };
    for (const m of expandC(term, data)) {
      const pw = fold(m.s).split(' ').filter(Boolean), kind = m.whole ? 'whole' : m.start ? 'start' : 'sub';
      for (let i = 0; i + pw.length <= toks.length; i++) {
        let v = 1;
        for (let j = 0; j < pw.length && v; j++) v = used.has(i + j) ? 0 : Math.min(v, wordHit(toks[i + j], pw[j], j < pw.length - 1 && kind === 'sub' ? 'start' : kind));
        if (v > best.v) best = { v, typo: v < 1 ? m.s : '', at: i, n: pw.length };
        if (best.v === 1) return best;
      }
    }
    return best;
  }
  function near(data, text, ch, skip) {
    data = asData(data);
    const toks = fold(clean(text)).split(' ').filter(Boolean);
    if (!toks.length) return null;
    const have = ch && haveOf(ch);
    let out = [], top = 0;
    memo = new Map();
    try {
      (data.rules || []).forEach(r => {
        const w = words(r);
        if (!w.length || (skip && skip(r)) || !(r.reply || []).some(x => String(x).trim()) || !fits(r, ch, have)) return;
        const used = new Set(), hits = w.map(t => {
          const h = termHit(toks, t, data, used);
          for (let j = 0; h.v && j < h.n; j++) used.add(h.at + j);
          return h;
        }), miss = hits.filter(h => !h.v).length;
        if (miss > (w.length >= 3 ? 1 : 0) || (miss && hits.some(h => h.v && h.v < 1))) return;   // eksik kelime varsa gerisi tam
        const sim = hits.reduce((a, h) => a + h.v, 0) / w.length;
        if (sim < top) return;
        const x = { rule: r, sim, s: score(r), typo: hits.map(h => h.typo).filter(Boolean) };
        if (sim > top) { top = sim; out = [x]; } else out.push(x);
      });
    } finally { memo = null; }
    if (!out.length) return null;
    const s = Math.max(...out.map(x => x.s)), w = pick(out.filter(x => x.s === s));
    return { rule: w.rule, sim: Math.round(w.sim * 100) / 100, typo: w.typo };
  }

  // Bir kelime/mesaj bir terimi yakalıyor mu? (editördeki "dene" kutuları için)
  const catches = (text, term, data) => inOrder(norm(text), [term], asData(data));

  // Kuraldan cevap: baloncuk dizisi. recent (isteğe bağlı): bu kuralın son seçilen cevapları; onlar tekrar seçilmez
  // (en fazla 10, cevapların yarısından fazlası dışlanmaz) ve seçilen sona eklenir
  function reply(rule, vars, recent) {
    const opts = (rule.reply || []).map(String).filter(x => x.trim());
    const fresh = recent ? opts.filter(x => !recent.includes(x)) : opts;
    const raw = pick(fresh.length ? fresh : opts);
    if (recent) {
      recent.push(raw);
      const keep = Math.min(10, Math.floor(opts.length / 2));
      while (recent.length > keep) recent.shift();
    }
    const txt = raw.replace(/\{sen\}/gi, vars.sen || 'sen').replace(/\{ben\}/gi, vars.ben || '');
    return txt.split('||').map(s => s.trim()).filter(Boolean);
  }

  // data.en çiftlerini sözlüğe çevirir; {sen} gibi adlar sıra numarası olur, çeviride yerleri değişebilir
  function enDict(pairs) {
    const out = {};
    (pairs || []).forEach(([tr, en]) => {
      const names = String(tr).match(/\{\w*\}/g) || [];
      out[tr] = String(en).replace(/\{\w+\}/g, m => (names.includes(m) ? `{${names.indexOf(m)}}` : m));
    });
    return out;
  }

  return { norm, fromEn, expand, inOrder, fits, ageTrait, originTrait, best, reply, score, looseScore, catches, addons, addText, ADD_MODES, enDict, near, fold };
})();

if (Stories.BOT_RULES && Stories.I18n) Stories.I18n.add(Stories.Bot.enDict(Stories.BOT_RULES.en));
