/*
 * Carmen müzikleri: ses dosyası yok, Web Audio ile çalarken üretilir.
 * Bir parça birkaç ayardan oluşur: tempo (bpm), ton (root, MIDI), dizi (scale), akor yürüyüşü (prog, dizinin
 * basamakları), tarz (style) ve tohum (seed). Aynı tohum hep aynı melodiyi verir; 8 ölçülük cümle döngüyle çalar.
 * 🎲 generate() yeni bir parça üretir; ürettiklerin bu tarayıcıda saklanır (Ben → 🔊 Ses).
 */
window.Stories = window.Stories || {};

Stories.Music = (() => {
  const KEY = 'amor-stories:music';
  const SCALES = {
    major: [0, 2, 4, 5, 7, 9, 11], minor: [0, 2, 3, 5, 7, 8, 10], dorian: [0, 2, 3, 5, 7, 9, 10],
    lydian: [0, 2, 4, 6, 7, 9, 11], harm: [0, 2, 3, 5, 7, 8, 11], penta: [0, 2, 4, 7, 9, 12, 14], minpenta: [0, 3, 5, 7, 10, 12, 15]
  };
  const SCALE_NAMES = { major: 'majör', minor: 'minör', dorian: 'doryen', lydian: 'lidyen', harm: 'armonik minör', penta: 'pentatonik', minpenta: 'minör pentatonik' };
  // pad: akor sesi · lead: melodi · drums / bass: kalıp · swing: 8'liklerin gecikmesi · density: melodi yoğunluğu
  const STYLES = {
    lofi: { label: 'Lo-fi', pad: 'tri', lead: 'pluck', drums: 'lofi', bass: 'roots', swing: .2, density: .42, cutoff: 1300 },
    jazzy: { label: 'Caz', pad: 'saw', lead: 'pluck', drums: 'brush', bass: 'walk', swing: .24, density: .52, cutoff: 1700, seventh: true },
    ambient: { label: 'Ambiyans', pad: 'saw', lead: 'bell', drums: '', bass: 'drone', swing: 0, density: .2, cutoff: 850 },
    pop: { label: 'Pop', pad: 'saw', lead: 'pluck', drums: 'pop', bass: 'eighths', swing: 0, density: .58, cutoff: 2300 },
    bells: { label: 'Çan', pad: 'sine', lead: 'bell', drums: '', bass: 'drone', swing: 0, density: .34, cutoff: 1100 },
    drive: { label: 'Tutku', pad: 'saw', lead: 'lead', drums: 'drive', bass: 'eighths', swing: 0, density: .48, cutoff: 2600 },
    tango: { label: 'Tango', pad: 'tri', lead: 'pluck', drums: 'tango', bass: 'habanera', swing: 0, density: .5, cutoff: 1600 },
    pulse: { label: 'Kalp atışı', pad: 'tri', lead: 'bell', drums: 'heart', bass: 'roots', swing: 0, density: .3, cutoff: 1000 }
  };
  const PRESETS = [
    { id: 'carmen', name: 'Carmen Teması', icon: '💙', bpm: 92, root: 50, scale: 'harm', prog: [0, 3, 4, 0], style: 'tango', seed: 1875 },
    { id: 'gece', name: 'Gece Yarısı Mesajı', icon: '🌙', bpm: 72, root: 57, scale: 'minor', prog: [0, 5, 2, 6], style: 'lofi', seed: 23 },
    { id: 'kahve', name: 'Kafede İlk Buluşma', icon: '☕', bpm: 96, root: 53, scale: 'dorian', prog: [0, 3, 1, 4], style: 'jazzy', seed: 7 },
    { id: 'yagmur', name: 'Yağmurlu Pencere', icon: '🌧️', bpm: 60, root: 55, scale: 'lydian', prog: [0, 1, 0, 5], style: 'ambient', seed: 404 },
    { id: 'sahil', name: 'Sahilde Gün Batımı', icon: '🌅', bpm: 104, root: 55, scale: 'major', prog: [0, 4, 5, 3], style: 'pop', seed: 88 },
    { id: 'kalp', name: 'Kalp Atışı', icon: '💓', bpm: 66, root: 52, scale: 'minor', prog: [0, 3, 5, 4], style: 'pulse', seed: 14 },
    { id: 'ruya', name: 'Pembe Rüya', icon: '✨', bpm: 64, root: 60, scale: 'penta', prog: [0, 3, 1, 4], style: 'bells', seed: 512 },
    { id: 'tutku', name: 'Tutku', icon: '🔥', bpm: 118, root: 50, scale: 'minor', prog: [0, 5, 3, 6], style: 'drive', seed: 66 }
  ];
  // 🎧 Music/ klasöründeki kayıtlı parçalar (yeni dosya ekleyince buraya bir satır ekle)
  const FILES = [
    { id: 'f:paperbacks', name: 'Paperbacks and Rain', icon: '📚', src: 'Music/Paperbacks_and_Rain.mp3', file: true },
    { id: 'f:bookmarks', name: 'Late Night Bookmarks', icon: '🔖', src: 'Music/Late_Night_Bookmarks.mp3', file: true },
    // 🔥 Fiery Passions oyununun parçaları (Music/fp); oyunda mekana göre çalar, burada da seçilebilir
    ...[['main_menu', 'Ana menü', '🔥'], ['house', 'Ev', '🏡'], ['market', 'Pazar', '🧺'], ['park', 'Park', '🌳'], ['college', 'Kolej', '🏫'], ['hospital', 'Hastane', '🏥'], ['office', 'Ofis', '🗂️'],
      ['house_ava', 'Ava\'nın evi', '🍷'], ['beach', 'Sahil', '🏖️'], ['forest', 'Orman', '🌲'], ['action', 'Aksiyon', '⚡'], ['sex1', 'Tutku I', '💋'], ['sex2', 'Tutku II', '💋'], ['sex3', 'Tutku III', '💋'], ['sex4', 'Tutku IV', '💋'], ['sex5', 'Tutku V', '💋']]
      .map(([f, n, i]) => ({ id: 'f:fp-' + f, name: 'Fiery Passions · ' + n, icon: i, src: `Music/fp/${f}.ogg`, file: true }))
  ];
  const PROGS = [[0, 4, 5, 3], [0, 5, 3, 4], [0, 3, 4, 0], [0, 5, 2, 6], [0, 3, 1, 4], [5, 3, 0, 4], [0, 1, 3, 4], [0, 6, 5, 4]];
  const STYLE_SCALES = { lofi: ['minor', 'dorian', 'major'], jazzy: ['dorian', 'major'], ambient: ['lydian', 'penta', 'major'], pop: ['major', 'minor'],
    bells: ['penta', 'minpenta', 'lydian'], drive: ['minor', 'harm'], tango: ['harm', 'minor'], pulse: ['minor', 'minpenta'] };
  const STYLE_BPM = { lofi: [66, 84], jazzy: [86, 108], ambient: [56, 70], pop: [96, 120], bells: [58, 76], drive: [108, 128], tango: [84, 100], pulse: [60, 72] };
  const STYLE_ICONS = { lofi: ['🌙', '📻', '🕯️'], jazzy: ['☕', '🎷', '🍷'], ambient: ['🌧️', '🌫️', '🌊'], pop: ['🌅', '💃', '🎈'], bells: ['✨', '🔔', '🌸'],
    drive: ['🔥', '⚡', '🏍️'], tango: ['🌹', '💃', '💙'], pulse: ['💓', '💗', '🫀'] };
  const WORDS_A = ['Mavi', 'Pembe', 'Sessiz', 'Gizli', 'Son', 'İlk', 'Uzak', 'Tatlı', 'Yarım', 'Gece', 'Sıcak', 'Kırık', 'Parlak', 'Sonsuz', 'Kayıp'];
  const WORDS_B = ['Mektup', 'Rüya', 'Vals', 'Bakış', 'Sır', 'Yağmur', 'Dans', 'Fısıltı', 'Şehir', 'Yaz', 'Hatıra', 'Mesaj', 'Sahil', 'Yıldız', 'Kalp'];
  const NOTE = ['Do', 'Do#', 'Re', 'Re#', 'Mi', 'Fa', 'Fa#', 'Sol', 'Sol#', 'La', 'La#', 'Si'];

  const rng = seed => () => { seed |= 0; seed = seed + 0x6D2B79F5 | 0; let t = Math.imul(seed ^ seed >>> 15, 1 | seed); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; };
  const pickR = (r, a) => a[Math.floor(r() * a.length)];
  const hz = m => 440 * Math.pow(2, (m - 69) / 12);

  /* ---------- kayıt: ürettiğin parçalar, ses düzeyi, arka plan müziği ---------- */
  // bg / bgOn: 🏠 menü müziği (ana menüde ve sohbet dışı sayfalarda çalar)
  const DEF = { mine: [], vol: .6, bg: 'f:paperbacks', bgOn: true };
  function load() { try { return Object.assign({}, DEF, JSON.parse(localStorage.getItem(KEY) || '{}')); } catch (e) { return { ...DEF }; } }
  function store(v) { try { localStorage.setItem(KEY, JSON.stringify(v)); } catch (e) { /* dolu / kapalı */ } }
  const cfg = load();
  const list = () => [...FILES, ...PRESETS, ...cfg.mine];
  const byId = id => list().find(t => t.id === id);
  const info = t => t.file ? '🎧 kayıtlı parça' : `${(STYLES[t.style] || {}).label || t.style} · ${t.bpm} bpm · ${NOTE[t.root % 12]} ${SCALE_NAMES[t.scale] || t.scale}`;

  function generate() {
    const seed = Math.floor(Math.random() * 1e9), r = rng(seed);
    const style = pickR(r, Object.keys(STYLES)), [lo, hi] = STYLE_BPM[style];
    const t = {
      id: 'g:' + seed.toString(36), name: `${pickR(r, WORDS_A)} ${pickR(r, WORDS_B)}`, icon: pickR(r, STYLE_ICONS[style]),
      bpm: Math.round(lo + r() * (hi - lo)), root: 50 + Math.floor(r() * 11), scale: pickR(r, STYLE_SCALES[style]),
      prog: pickR(r, PROGS), style, seed, gen: true, created: Date.now()
    };
    cfg.mine.unshift(t);
    store(cfg);
    return t;
  }
  function remove(id) {
    cfg.mine = cfg.mine.filter(t => t.id !== id);
    if (cfg.bg === id) cfg.bg = '';
    store(cfg);
    if (cur && cur.tr.id === id) stop();
  }
  function rename(id, name) { const t = cfg.mine.find(x => x.id === id); if (t && name) { t.name = name; store(cfg); } }

  /* ---------- ses motoru ---------- */
  let ctx = null, out = null, comp = null, verb = null, analyser = null, noise = null, cur = null, timer = null;
  const subs = new Set();
  const emit = () => subs.forEach(f => { try { f(cur ? cur.tr : null); } catch (e) { /* abone hatası çalmayı durdurmasın */ } });

  function ensure() {
    if (ctx) return true;
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return false;
    ctx = new AC();
    out = ctx.createGain(); out.gain.value = cfg.vol * .7;
    analyser = ctx.createAnalyser(); analyser.fftSize = 64; analyser.smoothingTimeConstant = .8;
    ({ comp, verb, noise } = fxChain(ctx, out));
    out.connect(analyser); analyser.connect(ctx.destination);
    return true;
  }
  // sıkıştırıcı + yankı + gürültü (canlı çalma ve dosyaya işleme aynı sesi versin)
  function fxChain(c, dest) {
    const cp = c.createDynamicsCompressor(); cp.threshold.value = -16; cp.ratio.value = 4; cp.connect(dest);
    // yankı: üretilmiş, sönen gürültüden darbe tepkisi
    const vb = c.createConvolver();
    const len = c.sampleRate * 2.4, ir = c.createBuffer(2, len, c.sampleRate);
    for (let ch = 0; ch < 2; ch++) { const d = ir.getChannelData(ch); for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 2.6); }
    vb.buffer = ir;
    const vg = c.createGain(); vg.gain.value = .32; vb.connect(vg); vg.connect(cp);
    const nz = c.createBuffer(1, c.sampleRate, c.sampleRate);
    const nd = nz.getChannelData(0); for (let i = 0; i < nd.length; i++) nd[i] = Math.random() * 2 - 1;
    return { comp: cp, verb: vb, noise: nz };
  }

  function env(g, t, a, peak, d, sus, rel) {
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(peak, t + a);
    if (sus != null) { g.gain.setTargetAtTime(peak * sus, t + a, d / 3); g.gain.setTargetAtTime(0.0001, t + a + d, rel / 4); }
    else g.gain.exponentialRampToValueAtTime(0.0001, t + a + d);
  }
  // tek nota: bus = parçanın kuru çıkışı, wet = yankıya giden pay
  function tone(type, freq, t, dur, vel, cutoff, wet) {
    const b = cur.bus, g = ctx.createGain(), f = ctx.createBiquadFilter();
    f.type = 'lowpass'; f.frequency.value = cutoff; f.Q.value = .6;
    f.connect(g); g.connect(b);
    if (wet) { const w = ctx.createGain(); w.gain.value = wet; g.connect(w); w.connect(cur.wet); }
    const oscs = [];
    const add = (wave, fr, det, lvl) => { const o = ctx.createOscillator(), og = ctx.createGain(); o.type = wave; o.frequency.value = fr; o.detune.value = det; og.gain.value = lvl; o.connect(og); og.connect(f); oscs.push(o); };
    let end = t + dur;
    if (type === 'pluck') { add('triangle', freq, 0, 1); add('sine', freq * 2, 0, .18); env(g, t, .005, vel, Math.min(1.4, dur * 1.6)); end = t + Math.min(1.4, dur * 1.6) + .05; }
    else if (type === 'bell') { add('sine', freq, 0, 1); add('sine', freq * 2.76, 0, .22); add('sine', freq * 5.4, 0, .06); env(g, t, .004, vel, 2.2); end = t + 2.3; }
    else if (type === 'lead') { add('sawtooth', freq, -6, .5); add('square', freq, 6, .25); env(g, t, .015, vel, dur, .7, .2); end = t + dur + .3; }
    else if (type === 'bass') { add('triangle', freq, 0, 1); add('sine', freq / 2, 0, .5); env(g, t, .01, vel, dur, .6, .15); end = t + dur + .25; }
    else { // pad: saw / tri / sine
      const w = type === 'saw' ? 'sawtooth' : type === 'tri' ? 'triangle' : 'sine';
      add(w, freq, -7, .5); add(w, freq, 7, .5);
      g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(vel, t + Math.min(.8, dur / 3));
      g.gain.setValueAtTime(vel, t + dur - .05); g.gain.exponentialRampToValueAtTime(0.0001, t + dur + .9);
      end = t + dur + 1;
    }
    oscs.forEach(o => { o.start(t); o.stop(end); });
  }
  function drum(kind, t, vel) {
    const g = ctx.createGain(); g.connect(cur.bus);
    if (kind === 'kick') {
      const o = ctx.createOscillator(); o.type = 'sine';
      o.frequency.setValueAtTime(140, t); o.frequency.exponentialRampToValueAtTime(42, t + .14);
      env(g, t, .003, vel, .32); o.connect(g); o.start(t); o.stop(t + .4);
      return;
    }
    const n = ctx.createBufferSource(), f = ctx.createBiquadFilter();
    n.buffer = noise; n.connect(f); f.connect(g);
    if (kind === 'hat') { f.type = 'highpass'; f.frequency.value = 7000; env(g, t, .002, vel, .05); n.start(t, Math.random() * .5, .08); }
    else if (kind === 'brush') { f.type = 'bandpass'; f.frequency.value = 5000; f.Q.value = .5; env(g, t, .02, vel, .16); n.start(t, Math.random() * .5, .22); }
    else { // snare / rim
      f.type = 'bandpass'; f.frequency.value = kind === 'rim' ? 2600 : 1800; f.Q.value = kind === 'rim' ? 4 : .8;
      env(g, t, .002, vel, kind === 'rim' ? .06 : .18); n.start(t, Math.random() * .5, .25);
      const o = ctx.createOscillator(), og = ctx.createGain(); o.type = 'triangle'; o.frequency.value = 190;
      env(og, t, .002, vel * .5, .08); o.connect(og); og.connect(cur.bus); o.start(t); o.stop(t + .12);
    }
  }
  const DRUMS = {
    lofi: { kick: [0, 7, 10], snare: [4, 12], hat: [0, 2, 4, 6, 8, 10, 12, 14], v: .55 },
    brush: { kick: [0, 10], brush: [0, 4, 8, 12], rim: [12], v: .4 },
    pop: { kick: [0, 8, 11], snare: [4, 12], hat: [0, 2, 4, 6, 8, 10, 12, 14], v: .6 },
    drive: { kick: [0, 4, 8, 12], snare: [4, 12], hat: [...Array(16).keys()], v: .62 },
    tango: { kick: [0, 8], rim: [6, 12, 14], brush: [4], v: .5 },
    heart: { kick: [0, 3], v: .5 }
  };
  const BASS = { roots: [0, 8], eighths: [0, 2, 4, 6, 8, 10, 12, 14], walk: [0, 4, 8, 12], drone: [0], habanera: [0, 6, 8, 12] };

  // scale basamağı -> MIDI (oct: oktav kaydırma)
  function note(tr, deg, oct) {
    const sc = SCALES[tr.scale] || SCALES.minor, n = 7, i = ((deg % n) + n) % n;
    return tr.root + sc[i] + 12 * (Math.floor(deg / n) + oct);
  }
  // 8 ölçülük melodi cümlesi (tohumdan): ölçü -> { adım: { deg, len } }
  function phrase(tr, st) {
    const r = rng(tr.seed), bars = [];
    let prev = 4;
    for (let b = 0; b < 8; b++) {
      const ch = tr.prog[b % tr.prog.length], bar = {};
      // ikinci yarı ilk yarının hafif değişmiş tekrarı: kulakta kalsın
      if (b >= 4 && r() < .6) { Object.entries(bars[b - 4]).forEach(([s, n]) => { bar[s] = { ...n, deg: n.deg + (ch - tr.prog[(b - 4) % tr.prog.length]) }; }); bars.push(bar); continue; }
      for (let s = 0; s < 16; s += 2) {
        const strong = s % 4 === 0;
        if (r() > st.density + (strong ? .2 : -.1)) continue;
        const tones = [ch, ch + 2, ch + 4];
        prev = strong && r() < .7 ? pickR(r, tones) + 7 : prev + pickR(r, [-2, -1, -1, 1, 1, 2]);
        prev = Math.max(2, Math.min(13, prev));
        bar[s] = { deg: prev, len: strong && r() < .4 ? 4 : 2 };
      }
      bars.push(bar);
    }
    return bars;
  }
  function schedule(step, t) {
    const { tr, st, ph } = cur, spb = 60 / tr.bpm / 4, s = step % 16, b = Math.floor(step / 16) % 8;
    const ch = tr.prog[b % tr.prog.length], tt = t + (s % 4 === 2 ? st.swing * spb : 0);
    if (s === 0) {
      const degs = [ch, ch + 2, ch + 4].concat(st.seventh ? [ch + 6] : []);
      degs.forEach(d => tone(st.pad, hz(note(tr, d, 0)), t, spb * 16, .045, st.cutoff, .5));
    }
    const bp = BASS[st.bass] || [];
    if (bp.includes(s)) {
      const walk = st.bass === 'walk' ? [0, 2, 4, 5][bp.indexOf(s)] : st.bass === 'habanera' && s === 6 ? 4 : 0;
      const len = st.bass === 'drone' ? spb * 15 : st.bass === 'eighths' ? spb * 1.6 : spb * (s === 6 ? 2 : 3.5);
      tone('bass', hz(note(tr, ch + walk, -1)), tt, len, .32, 700, 0);
    }
    const n = ph[b][s];
    if (n) tone(st.lead, hz(note(tr, n.deg, 0)), tt, spb * n.len, st.lead === 'bell' ? .14 : .16, st.cutoff * 1.8, .45);
    const dp = DRUMS[st.drums];
    if (dp) ['kick', 'snare', 'hat', 'brush', 'rim'].forEach(k => { if ((dp[k] || []).includes(s)) drum(k, tt, dp.v * (k === 'hat' ? (s % 4 ? .25 : .4) : k === 'kick' ? 1 : .55)); });
  }
  function tick() {
    if (!cur) return;
    const spb = 60 / cur.tr.bpm / 4;
    while (cur.next < ctx.currentTime + .18) { schedule(cur.step, cur.next); cur.next += spb; cur.step++; }
  }

  // 🎧 dosya parçası: <audio> döngüde; Web Audio varsa ses düzeyi ve görselleştirici için ona bağlanır
  // iOS: Web Audio'ya bağlanan <audio> sessiz kalabiliyor (sessiz anahtarı, askıdaki bağlam) → orada doğrudan çalar
  const IOS = /iP(hone|ad|od)/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  let audio = null, media = null, fileGain = null;
  function playFile(tr) {
    if (!audio) { audio = new Audio(); audio.loop = true; audio.preload = 'auto'; audio.setAttribute('playsinline', ''); }
    if (!IOS && ensure() && !media) {
      try { media = ctx.createMediaElementSource(audio); fileGain = ctx.createGain(); media.connect(fileGain); fileGain.connect(out); }
      catch (e) { media = null; }
    }
    if (ctx && ctx.state !== 'running') ctx.resume();
    if (!audio.src.endsWith(tr.src)) audio.src = tr.src;
    try { audio.currentTime = 0; } catch (e) { /* henüz yüklenmedi */ }
    if (fileGain) { const t = ctx.currentTime; fileGain.gain.cancelScheduledValues(t); fileGain.gain.setValueAtTime(0.0001, t); fileGain.gain.exponentialRampToValueAtTime(1, t + .8); }
    else audio.volume = cfg.vol;
    cur = { tr, file: true };
    const p = audio.play();
    // tarayıcı dokunmadan çaldırmazsa: çalmıyor say (uygulama ilk dokunuşta yeniden dener)
    if (p && p.catch) p.catch(() => { if (cur && cur.tr === tr) { cur = null; emit(); } });
    emit();
    return true;
  }

  function play(tr) {
    if (typeof tr === 'string') tr = byId(tr);
    if (!tr) return false;
    if (tr.file) { stop(true); return playFile(tr); }
    if (!ensure()) return false;
    stop(true);
    if (ctx.state !== 'running') ctx.resume();
    const bus = ctx.createGain(), wet = ctx.createGain();
    bus.gain.setValueAtTime(0.0001, ctx.currentTime); bus.gain.exponentialRampToValueAtTime(1, ctx.currentTime + .6);
    bus.connect(comp); wet.connect(verb); wet.gain.value = 1;
    const st = STYLES[tr.style] || STYLES.lofi;
    cur = { tr, st, ph: phrase(tr, st), bus, wet, step: 0, next: ctx.currentTime + .08 };
    clearInterval(timer);
    timer = setInterval(tick, 25);
    tick();
    emit();
    return true;
  }
  function stop(quiet) {
    clearInterval(timer); timer = null;
    if (cur && cur.file) {
      const a = audio;
      if (fileGain) { const t = ctx.currentTime; fileGain.gain.cancelScheduledValues(t); fileGain.gain.setValueAtTime(Math.max(fileGain.gain.value, .0001), t); fileGain.gain.exponentialRampToValueAtTime(0.0001, t + .5); }
      // bu arada başka bir dosya parçası başladıysa aynı <audio> çalıyordur, durdurma
      setTimeout(() => { if (!cur || !cur.file) a.pause(); }, fileGain ? 520 : 0);
    } else if (cur) {
      const { bus, wet } = cur, t = ctx.currentTime;
      bus.gain.cancelScheduledValues(t); bus.gain.setValueAtTime(Math.max(bus.gain.value, .0001), t); bus.gain.exponentialRampToValueAtTime(0.0001, t + .5);
      setTimeout(() => { try { bus.disconnect(); wet.disconnect(); } catch (e) { /* zaten ayrılmış */ } }, 3200);
    }
    cur = null;
    if (!quiet) emit();
  }
  function volume(v) {
    if (v == null) return cfg.vol;
    cfg.vol = Math.max(0, Math.min(1, +v)); store(cfg);
    if (out) out.gain.setTargetAtTime(cfg.vol * .7, ctx.currentTime, .05);
    if (audio && !fileGain) audio.volume = cfg.vol;
    return cfg.vol;
  }
  // görselleştirici: n çubuk, 0..1
  function levels(n) {
    if (!analyser || !cur) return Array(n).fill(0);
    const d = new Uint8Array(analyser.frequencyBinCount); analyser.getByteFrequencyData(d);
    return Array.from({ length: n }, (_, i) => d[Math.min(d.length - 1, 1 + Math.floor(i * (d.length - 2) / n))] / 255);
  }
  /* ⬇️ indirme: dosya parçası olduğu gibi; üretilen parça sessizce (OfflineAudioContext) iki tur çalınıp WAV'a işlenir.
   * Dönüş: Promise<{ blob, name }> ya da null */
  async function exportTrack(tr) {
    if (typeof tr === 'string') tr = byId(tr);
    if (!tr) return null;
    const safe = String(tr.name || 'parca').replace(/[\\/:*?"<>|]+/g, '').trim() || 'parca';
    if (tr.file) { const r = await fetch(tr.src); if (!r.ok) throw new Error('Dosya okunamadı'); return { blob: await r.blob(), name: tr.src.split('/').pop() }; }
    const OAC = window.OfflineAudioContext || window.webkitOfflineAudioContext;
    if (!OAC) throw new Error('Tarayıcı ses işlemeyi desteklemiyor');
    const st = STYLES[tr.style] || STYLES.lofi, spb = 60 / tr.bpm / 4, steps = 16 * 8 * 2, rate = 44100, dur = steps * spb + 3;
    const oc = new OAC(2, Math.ceil(dur * rate), rate);
    // çalma fonksiyonları ctx / cur / comp / verb / noise'u kullanır: işleme süresince geçici olarak bu bağlama geçilir
    const saved = { ctx, cur, comp, verb, noise };
    try {
      const master = oc.createGain(); master.gain.value = .7; master.connect(oc.destination);
      ctx = oc;
      ({ comp, verb, noise } = fxChain(oc, master));
      const bus = oc.createGain(), wet = oc.createGain();
      bus.connect(comp); wet.connect(verb);
      cur = { tr, st, ph: phrase(tr, st), bus, wet };
      for (let s = 0; s < steps; s++) schedule(s, .05 + s * spb);
      // sonda yumuşak kapanış
      master.gain.setValueAtTime(.7, dur - 3); master.gain.linearRampToValueAtTime(0, dur - .2);
    } finally { ({ ctx, cur, comp, verb, noise } = saved); }
    const buf = await oc.startRendering();
    return { blob: wav(buf), name: `${safe}.wav` };
  }
  // 16 bit stereo WAV
  function wav(buf) {
    const n = buf.length, chs = buf.numberOfChannels, data = new DataView(new ArrayBuffer(44 + n * chs * 2));
    const str = (o, s) => [...s].forEach((c, i) => data.setUint8(o + i, c.charCodeAt(0)));
    str(0, 'RIFF'); data.setUint32(4, 36 + n * chs * 2, true); str(8, 'WAVE'); str(12, 'fmt ');
    data.setUint32(16, 16, true); data.setUint16(20, 1, true); data.setUint16(22, chs, true); data.setUint32(24, buf.sampleRate, true);
    data.setUint32(28, buf.sampleRate * chs * 2, true); data.setUint16(32, chs * 2, true); data.setUint16(34, 16, true);
    str(36, 'data'); data.setUint32(40, n * chs * 2, true);
    const ch = [...Array(chs).keys()].map(i => buf.getChannelData(i));
    let o = 44;
    for (let i = 0; i < n; i++) for (let c = 0; c < chs; c++) { const v = Math.max(-1, Math.min(1, ch[c][i])); data.setInt16(o, v < 0 ? v * 0x8000 : v * 0x7fff, true); o += 2; }
    return new Blob([data], { type: 'audio/wav' });
  }

  // 🏠 menü müziği: ne zaman çalacağına uygulama karar verir (app.js syncMusic)
  function background(id, on) {
    if (id !== undefined) cfg.bg = id || '';
    if (on !== undefined) cfg.bgOn = !!on;
    store(cfg);
    return { id: cfg.bg, on: cfg.bgOn };
  }

  return {
    list, byId, info, generate, remove, rename, play, stop, volume, levels, background, exportTrack,
    playing: () => cur ? cur.tr : null,
    onChange: f => { subs.add(f); return () => subs.delete(f); },
    styles: STYLES
  };
})();
