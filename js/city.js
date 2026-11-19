/* 🏙️ CarmenCity: alt menüdeki "Şehir" sekmesi (#/sehir). Canvas üzerinde kuşbakışı canlı şehir.
 * app.js renderCity → Stories.City.mount(el, api): api.plan(h) karakterlerin h saatindeki yerini verir (ccPlan → ccWhere).
 * Yollar ROADS kontrol noktalarından Catmull-Rom ile örneklenir; aynı noktayı paylaşan yollar kavşak olur (graf düğümü, A*).
 * Yürüyenler kaldırımdan (düğümün yol yarı genişliği hw + SW/2 kadar sağda: offPath), arabalar sağ şeritten gider.
 * BLD = önemli binalar (ccWhere anahtarı + site), FILL = yol boyunca otomatik dizilen dolgu binalar (dükkan, ev, bar…).
 * 👥 Kayıtlı karakterler saatine göre (api.plan), 🙋‍♀️ yabancılar (api.strangers: kaydedilmemiş ilanlar) kendi kafasına göre gezer.
 * 🗣️ Ayaküstü konuşma (Faz 2): yanına git → İltifat / Espri / Davet / Cesur; 💗 ilgi 100 olursa numarasını verir → api.meet ile sohbet.
 * localStorage amor-stories:city { gm, at, sp, px, py, met: { id: { n, ilgi, cool } } } (sp: 60 = 1 sn → 1 dk) */
Stories.City = (() => {
  const KEY = 'amor-stories:city';
  // dünya sınırları: X0..W, Y0..H (batı mahallesi ve kuzey tepeleri eksi koordinatlarda)
  const W = 3000, H = 2200, X0 = -1300, Y0 = -900, CS = 20, SW = 16;
  const tr = s => (Stories.I18n ? Stories.I18n.t(s) : s);
  const rng = seed => () => { seed = seed + 0x6D2B79F5 | 0; let t = Math.imul(seed ^ seed >>> 15, 1 | seed); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; };
  const hash = s => { s = String(s); let h = 5381; for (let i = 0; i < s.length; i++) h = (h * 33 + s.charCodeAt(i)) | 0; return h >>> 0; };
  const ell = (x, y, cx, cy, rx, ry) => ((x - cx) / rx) ** 2 + ((y - cy) / ry) ** 2 <= 1;
  const pickA = a => a[(Math.random() * a.length) | 0];
  const EMO = '"Apple Color Emoji","Segoe UI Emoji","Noto Color Emoji",sans-serif';

  /* 🗺️ harita: kıyı (deniz güneyde ve doğuda), yol kontrol noktaları, binalar */
  const COAST = [[-1300, 1745], [-800, 1790], [-400, 1775], [0, 1760], [400, 1800], [800, 1760], [1200, 1820], [1600, 1880], [2000, 1840], [2350, 1700], [2600, 1450], [2700, 1100], [2760, 700], [2820, 300], [2860, 0], [2890, -450], [2920, -900]];
  const P = {
    C0: [0, 1560], C1: [420, 1600], C2: [820, 1570], C3: [1200, 1630], C4: [1600, 1690], C5: [2000, 1650], C6: [2300, 1500], C7: [2470, 1300], C8: [2560, 1050], C9: [2610, 700], C10: [2650, 330], C11: [2680, 0],
    B0: [560, 260], B1: [880, 500], B2: [1150, 690], B3: [1600, 1080], B4: [1850, 1300], B5: [1980, 1480],
    A0: [0, 860], A1: [380, 830], A2: [800, 860], A3: [1050, 840], A4: [1700, 860], A5: [1980, 820], A6: [2250, 780],
    N1: [1340, 560], N2: [1380, 330], N3: [1400, 0], S1: [1330, 1150], S2: [1290, 1400],
    X1: [2080, 1040], X2: [2200, 1240], X3: [1960, 560], X4: [2020, 300], X5: [2200, 130],
    R1: [330, 640], R2: [400, 470], R3: [520, 330], R4: [760, 620], R5: [600, 660], R6: [220, 380], R7: [130, 200],
    D2: [1600, 520], D3: [1800, 560], D5: [1080, 1080], D6: [1480, 1130], D7: [1020, 1380],
    P1: [780, 1100], P2: [700, 1350], P3: [400, 1100], P4: [450, 1380],
    // 🏘️ batı mahallesi
    W0: [-1200, 880], W1: [-400, 840], Q0: [-380, 200], Q1: [-400, 520], Q2: [-450, 1200], Q3: [-950, 300], Q4: [-900, 620], Q5: [-900, 870], Q6: [-950, 1150], Q7: [-950, 1570],
    Q8: [-650, 560], Q9: [-700, 1180], QB: [-100, 300], QC: [-650, 250], QD: [-800, -200], CW0: [-1250, 1540], CW1: [-500, 1580],
    // 🏔️ kuzey tepeleri
    NN1: [1420, -400], NN2: [1380, -850], CN1: [2720, -880], K0: [300, -350], K1: [800, -420], K2: [2000, -380], K3: [2700, -420], K5: [620, -60], K6: [2150, -120], K7: [-150, -250],
    K8: [600, -800], K9: [1000, -760], K10: [2000, -800]
  };
  // 🔄 Meydan göbeği: 16 nokta (RG0 doğu, RG4 güney, RG8 batı, RG12 kuzey)
  for (let i = 0; i < 16; i++) P['RG' + i] = [1350 + 90 * Math.cos(i * Math.PI / 8), 850 + 90 * Math.sin(i * Math.PI / 8)];
  const ROAD_W = { coast: 60, main: 52, ring: 46, st: 40 };
  const ROADS = [
    ['coast', 'C0 C1 C2 C3 C4 C5 C6 C7 C8 C9 C10 C11'],
    ['main', 'B0 B1 B2 RG10'], ['main', 'RG2 B3 B4 B5 C5'],
    ['main', 'A0 A1 A2 A3 RG8'], ['main', 'RG0 A4 A5 A6 C9'],
    ['main', 'RG12 N1 N2 N3'], ['main', 'RG4 S1 S2 C3'],
    ['ring', Array.from({ length: 17 }, (_, i) => 'RG' + (i % 16)).join(' ')],
    ['st', 'A5 X1 X2 C6'], ['st', 'A5 X3 X4 X5 C10'],
    ['st', 'A1 R1 R2 R3 B0'], ['st', 'B1 R4 R5 R1'], ['st', 'R2 R6 R7'],
    ['st', 'N1 D2 D3 X3'], ['st', 'A3 D5 S1'], ['st', 'S1 D6 B3'], ['st', 'D5 D7 C3'],
    ['st', 'A2 P1 P2 C2'], ['st', 'A1 P3 P4 C1'],
    // 🏘️ batı mahallesi
    ['main', 'W0 Q5 W1 A0'], ['coast', 'CW0 Q7 CW1 C0'], ['st', 'Q0 Q1 W1 Q2 CW1'], ['st', 'Q3 Q4 Q5 Q6 Q7'], ['st', 'Q1 Q8 Q4'], ['st', 'Q2 Q9 Q6'],
    ['st', 'Q0 QB R6'], ['st', 'Q3 QC Q0'], ['st', 'Q3 QD K7'],
    // 🏔️ kuzey tepeleri
    ['main', 'N3 NN1 NN2'], ['coast', 'C11 K3 CN1'], ['main', 'K0 K1 NN1 K2 K3'], ['st', 'B0 K5 K1'], ['st', 'X5 K6 K2'], ['st', 'Q0 K7 K0'],
    ['st', 'K8 K9 NN2 K10'], ['st', 'K8 K0'], ['st', 'K10 K2']
  ];
  // k = app.js ccWhere anahtarı; t: ev (beşik çatı) / kule (düz çatı + klima) / duz; fx: özel çatı; s/sn: binanın sitesi
  const BLD = [
    { k: 'ev1', n: 'Mavi Ev', ic: '🏠', x: 240, y: 530, w: 80, h: 64, c: '#5b8fd8', t: 'ev' },
    { k: 'ev2', n: 'Bahçeli Ev', ic: '🏡', x: 470, y: 565, w: 86, h: 60, c: '#5fa36a', t: 'ev', yard: 1 },
    { k: 'ev3', n: 'Kırmızı Ev', ic: '🏠', x: 715, y: 545, w: 76, h: 60, c: '#cc5a50', t: 'ev' },
    { k: 'ev4', n: 'Köşk', ic: '🏡', x: 320, y: 320, w: 110, h: 84, c: '#d79a5e', t: 'ev', yard: 1 },
    { k: 'ev5', n: 'Müstakil Ev', ic: '🏠', x: 610, y: 470, w: 80, h: 62, c: '#9a6cc8', t: 'ev' },
    { k: 'apt', n: 'Apartman', ic: '🏢', x: 190, y: 735, w: 96, h: 110, c: '#8a96ab', t: 'kule' },
    { k: 'benim', n: 'Senin Evin', ic: '🏡', x: 575, y: 748, w: 92, h: 62, c: '#ff5c9a', t: 'ev', fx: 'heart', mine: 1 },
    { k: 'ciftlik', n: 'Çiftlik', ic: '🚜', x: 150, y: 85, w: 100, h: 66, c: '#b5443a', t: 'ev', s: '#/ciftlik', sn: 'CarmenFarm' },
    { k: 'okul', n: 'Okul', ic: '🏫', x: 990, y: 750, w: 150, h: 90, c: '#e89a3c', t: 'duz', s: '#/okul', sn: 'CarmenSchool' },
    { k: 'kafe', n: 'Kafe', ic: '☕', x: 1185, y: 515, w: 80, h: 60, c: '#8d6e63', t: 'duz', s: '#/amor', sn: 'CarmenAmor' },
    { k: 'ofis', n: 'Ofis', ic: '🏢', x: 1530, y: 685, w: 110, h: 110, c: '#4f86c6', t: 'kule', s: '#/is/ofis', sn: 'CarmenJobs' },
    { k: 'studyo', n: 'Stüdyo', ic: '🎬', x: 1700, y: 415, w: 120, h: 76, c: '#9c5fc0', t: 'duz', s: '#/fans', sn: 'CarmenFans' },
    { k: 'spor', n: 'Spor Salonu', ic: '🏋️', x: 1790, y: 700, w: 110, h: 70, c: '#e0603f', t: 'duz', s: '#/is/spor', sn: 'CarmenJobs' },
    { k: 'hastane', n: 'Hastane', ic: '🏥', x: 1195, y: 1000, w: 136, h: 100, c: '#e8eef2', t: 'kule', fx: 'heli', s: '#/klinik', sn: 'CarmenKlinik' },
    { k: 'karakol', n: 'Karakol', ic: '🚓', x: 1615, y: 943, w: 88, h: 60, c: '#5c6bc0', t: 'duz' },
    { k: 'magaza', n: 'AVM', ic: '🛍️', x: 885, y: 1000, w: 100, h: 70, c: '#ec6fa0', t: 'duz', s: '#/shop', sn: 'CarmenShop' },
    { k: 'masaj', n: 'Masaj Salonu', ic: '💆', x: 900, y: 1440, w: 104, h: 66, c: '#f08bb0', t: 'duz', s: '#/masaj', sn: 'CarmenMassage' },
    { k: 'pub', n: 'Pub', ic: '🍺', x: 1880, y: 965, w: 90, h: 70, c: '#b8862e', t: 'duz', fx: 'neon', glow: '#ffcc55' },
    { k: 'kulup', n: 'Gece Kulübü', ic: '🪩', x: 1935, y: 1150, w: 116, h: 76, c: '#5e35b1', t: 'duz', fx: 'beams', glow: '#c77dff', s: '#/parti', sn: 'CarmenParty' },
    { k: 'gazino', n: 'Gazino', ic: '🎰', x: 2235, y: 960, w: 140, h: 104, c: '#b8902a', t: 'duz', fx: 'bulbs', glow: '#ffd54f', s: '#/gasino', sn: 'CarmenGasino' },
    { k: 'sinema', n: 'Sinema', ic: '🍿', x: 2135, y: 625, w: 104, h: 76, c: '#a33a4a', t: 'duz', fx: 'bulbs', glow: '#ff8a80', s: '#/flix', sn: 'CarmenFlix' },
    { k: 'otel', n: 'Otel', ic: '🏨', x: 2350, y: 1150, w: 104, h: 116, c: '#e9e2d0', t: 'kule', fx: 'pool', s: '#/otel', sn: 'CarmenStay' },
    { k: 'kilise', n: 'Kilise', ic: '⛪', x: 2400, y: 75, w: 96, h: 96, c: '#cfc6b8', t: 'duz', fx: 'cross', s: '#/kilise', sn: 'CarmenChurch' },
    { k: 'motel', n: 'Motel', ic: '🏩', x: 1510, y: 165, w: 100, h: 64, c: '#3a3550', t: 'duz', fx: 'neon', glow: '#ff4fa3', s: '#/gizli', sn: 'CarmenSecret' }
  ];
  // açık alanlar: karakterler içeride kaybolmaz, alanda dolaşır
  const AREAS = [
    { k: 'park', n: 'Park', ic: '🌳', x: 600, y: 1150, rx: 200, ry: 260, area: 1 },
    { k: 'lunapark', n: 'Lunapark', ic: '🎡', x: 2140, y: 1450, rx: 105, ry: 105, area: 1 },
    { k: 'sahil', n: 'Sahil', ic: '🏖️', x: 1600, y: 1790, area: 1, beach: [1150, 2050] }
  ];
  // 🏠 ek hane evleri (dolgu evlerden seçilir): [anahtar, ad, ikon]; app.js CC_HOMES ile aynı sıra
  const HOME_X = [['ev6', 'Beyaz Villa', '🏡'], ['ev7', 'Taş Ev', '🏠'], ['ev8', 'Sarı Ev', '🏠'], ['ev9', 'Yalı', '🏡'], ['ev10', 'Bahçeli Villa', '🏡'], ['ev11', 'Çatı Katı', '🏠'],
    ['ev12', 'Mavi Panjurlu Ev', '🏠'], ['ev13', 'Güllü Ev', '🏡'], ['ev14', 'Ahşap Ev', '🏠'], ['ev15', 'Tepe Evi', '🏡'], ['ev16', 'Limon Ağaçlı Ev', '🏡'], ['ev17', 'Kırmızı Kapılı Ev', '🏠']];
  const FIELDS = [[240, 20, 170, 100, '#d9c27a', '#c9ae5f'], [430, 40, 110, 80, '#a9c96c', '#93b458']];
  // 🏘️ dolgu binalar: bölgeye göre tür [ad, ikon, yüksek mi]; çatı renkleri
  const FT = {
    ev: [['Ev', '🏠'], ['Villa', '🏡'], ['Dubleks', '🏠'], ['Bahçeli Ev', '🏡'], ['Müstakil Ev', '🏠'], ['Bakkal', '🏪']],
    dt: [['Apartman', '🏢', 1], ['Plaza', '🏬', 1], ['Market', '🛒'], ['Eczane', '💊'], ['Fırın', '🥐'], ['Butik', '👗'], ['Kuaför', '💇‍♀️'], ['Berber', '💈'], ['Kitapçı', '📚'], ['Çiçekçi', '💐'], ['Banka', '🏦', 1], ['Restoran', '🍝'], ['Pastane', '🍰'], ['İç Çamaşırı Butiği', '👙'], ['Parfümeri', '🌸']],
    ex: [['Kokteyl Bar', '🍹'], ['Bar', '🍸'], ['Karaoke', '🎤'], ['Restoran', '🍽️'], ['Burgerci', '🍔'], ['Pizzacı', '🍕'], ['Dövme Stüdyosu', '✒️'], ['Butik Otel', '🛎️', 1], ['Striptiz Kulübü', '💃'], ['Kumarhane', '🃏'], ['Shisha Lounge', '💨']],
    cs: [['Dondurmacı', '🍦'], ['Balıkçı', '🐟'], ['Plaj Barı', '🍹'], ['Sörf Dükkanı', '🏄'], ['Pansiyon', '🛏️'], ['Kafe', '☕'], ['Mayo Butiği', '👙']]
  };
  const ROOF = { ev: ['#c9574f', '#d79a5e', '#7b8fd1', '#8bb174', '#b67fc9', '#e0a96d', '#6fa3b8'], dt: ['#9aa5b8', '#b8a99a', '#7f8ea3', '#c2b59b', '#a7b4c2', '#d1c4a8', '#b0a2c4'], ex: ['#6b4a8a', '#8a3b5a', '#3e5a8a', '#9a6b2a', '#5a3a6b'], cs: ['#f3c6a5', '#a8d8ea', '#f6e3b4', '#ffd1dc', '#c5e1a5'] };
  const AWN = ['#e53935', '#1e88e5', '#43a047', '#fb8c00', '#8e24aa', '#00897b', '#d81b60'];
  const ZONE_N = { ev: '🏘️ Mahalle', dt: '🏙️ Şehir merkezi', ex: '🌃 Eğlence caddesi', cs: '🏖️ Sahil şeridi' };

  /* 🧱 dünya: örnekleme, yol grafı, dolgu binalar, ağaçlar, lambalar… (bir kez kurulur) */
  let WD = null;
  function sample(pts, curve, step) {
    const out = [pts[0]];
    for (let i = 0; i < pts.length - 1; i++) {
      const p0 = pts[i - 1] || pts[i], p1 = pts[i], p2 = pts[i + 1], p3 = pts[i + 2] || p2;
      const n = curve ? Math.max(1, Math.ceil(Math.hypot(p2[0] - p1[0], p2[1] - p1[1]) / step)) : 1;
      for (let j = 1; j <= n; j++) {
        const t = j / n, t2 = t * t, t3 = t2 * t;
        out.push(j === n ? p2 : [0, 1].map(k => .5 * (2 * p1[k] + (-p0[k] + p2[k]) * t + (2 * p0[k] - 5 * p1[k] + 4 * p2[k] - p3[k]) * t2 + (-p0[k] + 3 * p1[k] - 3 * p2[k] + p3[k]) * t3)));
      }
    }
    return out;
  }
  const path2 = (pts, close) => { const p = new Path2D(); pts.forEach((q, i) => (i ? p.lineTo(q[0], q[1]) : p.moveTo(q[0], q[1]))); if (close) p.closePath(); return p; };
  function inPoly(x, y, poly) {
    let c = false;
    for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
      const [xi, yi] = poly[i], [xj, yj] = poly[j];
      if ((yi > y) !== (yj > y) && x < (xj - xi) * (y - yi) / (yj - yi) + xi) c = !c;
    }
    return c;
  }
  // döndürülmüş dikdörtgen: { x, y, w, d, a } (yerel x yol boyunca, yerel +y yoldan dışarı)
  const corners = o => { const c = Math.cos(o.a), s = Math.sin(o.a), hw = o.w / 2, hd = o.d / 2; return [[-hw, -hd], [hw, -hd], [hw, hd], [-hw, hd]].map(([u, v]) => [o.x + u * c - v * s, o.y + u * s + v * c]); };
  function sat(A, B) {
    const pa = corners(A), pb = corners(B);
    for (const Q of [pa, pb]) for (let i = 0; i < 4; i++) {
      const [x1, y1] = Q[i], [x2, y2] = Q[(i + 1) % 4], nx = y1 - y2, ny = x2 - x1;
      let a0 = 1e12, a1 = -1e12, b0 = 1e12, b1 = -1e12;
      pa.forEach(([x, y]) => { const v = x * nx + y * ny; a0 = Math.min(a0, v); a1 = Math.max(a1, v); });
      pb.forEach(([x, y]) => { const v = x * nx + y * ny; b0 = Math.min(b0, v); b1 = Math.max(b1, v); });
      if (a1 < b0 || b1 < a0) return false;
    }
    return true;
  }
  const inRect = (o, x, y) => { const dx = x - o.x, dy = y - o.y, c = Math.cos(o.a), s = Math.sin(o.a); return Math.abs(dx * c + dy * s) < o.w / 2 && Math.abs(-dx * s + dy * c) < o.d / 2; };
  function world() {
    if (WD) return WD;
    // düğüm: hw = yol yarı genişliği, foot = sadece yaya yolu düğümü; kenar: [komşu, uzunluk, yaya yolu mu]
    const nodes = [], nIdx = new Map();
    const node = (p, hw, foot) => { const key = Math.round(p[0]) + ',' + Math.round(p[1]); let i = nIdx.get(key); if (i == null) { i = nodes.length; nIdx.set(key, i); nodes.push({ x: p[0], y: p[1], adj: [], hw, foot: !!foot }); } else { nodes[i].hw = Math.max(nodes[i].hw, hw); if (!foot) nodes[i].foot = false; } return i; };
    const link = (a, b, foot) => { if (a === b || nodes[a].adj.some(e => e[0] === b)) return; const d = Math.hypot(nodes[a].x - nodes[b].x, nodes[a].y - nodes[b].y); nodes[a].adj.push([b, d, foot ? 1 : 0]); nodes[b].adj.push([a, d, foot ? 1 : 0]); };
    const roads = ROADS.map(([t, s]) => {
      const pts = sample(s.split(' ').map(k => P[k]), t !== 'ring', 45), hw = ROAD_W[t] / 2;
      for (let i = 1; i < pts.length; i++) link(node(pts[i - 1], hw), node(pts[i], hw));
      return { t, pts, path: path2(pts) };
    });
    const coast = sample(COAST, true, 40);
    const seaPoly = [...coast, [W, Y0], [W, H], [X0, H]];
    // kıyı yönleri: sol normal = kara, sağ normal = deniz
    const coastN = coast.map((p, i) => { const q = coast[Math.min(i + 1, coast.length - 1)], o = coast[Math.max(i - 1, 0)], a = Math.atan2(q[1] - o[1], q[0] - o[0]); return { x: p[0], y: p[1], a, lx: Math.sin(a), ly: -Math.cos(a) }; });
    const coastDist = (x, y) => coast.reduce((m, p) => Math.min(m, Math.hypot(p[0] - x, p[1] - y)), 1e9);
    const inSea = (x, y) => inPoly(x, y, seaPoly);
    const nearest = (x, y, road) => { let bi = 0, bd = 1e18; nodes.forEach((n, i) => { if (road && n.foot) return; const d = (n.x - x) ** 2 + (n.y - y) ** 2; if (d < bd) { bd = d; bi = i; } }); return bi; };
    // 📍 yerler: bina + alan, kapı düğümü (araç yolunda)
    const PL = {};
    BLD.forEach(b => { PL[b.k] = { ...b, node: nearest(b.x, b.y, 1) }; });
    AREAS.forEach(a => { PL[a.k] = { ...a, node: nearest(a.x, a.y, 1) }; });
    // yol yakınlığı ızgarası: [x, y, hw, tür] tür 0 araç yolu · 1 kapı yolu · 2 yaya yolu
    const grid = new Map();
    const addSeg = (x0, y0, x1, y1, hw, kind) => {
      const n = Math.max(1, Math.ceil(Math.hypot(x1 - x0, y1 - y0) / 12));
      for (let j = 0; j <= n; j++) {
        const x = x0 + (x1 - x0) * j / n, y = y0 + (y1 - y0) * j / n, g = ((x / 60) | 0) + ',' + ((y / 60) | 0);
        if (!grid.has(g)) grid.set(g, []);
        grid.get(g).push([x, y, hw, kind]);
      }
    };
    roads.forEach(r => { for (let i = 1; i < r.pts.length; i++) addSeg(...r.pts[i - 1], ...r.pts[i], ROAD_W[r.t] / 2, 0); });
    BLD.forEach(b => { const n = nodes[PL[b.k].node]; addSeg(b.x, b.y, n.x, n.y, 8, 1); });
    // m: araç / kapı yolundan pay, mf: yaya yolundan pay (yoksa m), only0: sadece araç yolları
    const nearRoad = (x, y, m, mf, only0) => {
      const gx = (x / 60) | 0, gy = (y / 60) | 0;
      for (let i = -1; i <= 1; i++) for (let j = -1; j <= 1; j++) for (const [px, py, hw, k] of grid.get((gx + i) + ',' + (gy + j)) || []) {
        if (only0 && k) continue;
        if (Math.hypot(px - x, py - y) < hw + (k === 2 && mf != null ? mf : m)) return true;
      }
      return false;
    };
    const inBld = (x, y, m) => BLD.some(b => Math.abs(x - b.x) < b.w / 2 + m && Math.abs(y - b.y) < b.h / 2 + m);
    const inField = (x, y, m) => FIELDS.some(f => x > f[0] - m && x < f[0] + f[2] + m && y > f[1] - m && y < f[1] + f[3] + m);
    const freeZone = (x, y) => !ell(x, y, 600, 1150, 222, 282) && !ell(x, y, 2140, 1450, 128, 128) && !ell(x, y, 1350, 850, 70, 70) && !inField(x, y, 10);
    const R = rng(11), bRects = BLD.map(b => ({ x: b.x, y: b.y, w: b.w + (b.yard ? 44 : 22), d: b.h + (b.yard ? 40 : 22), a: 0 }));
    // 🚶 yaya yolları: bir caddenin kaldırımından dik çıkıp blok içinden karşıdaki caddeye varan ara yollar (araç girmez)
    const foots = [], FOOT_HW = 7;
    const blocked = (x, y) => x < X0 + 8 || x > W - 8 || y < Y0 + 8 || y > H - 8 || inSea(x, y) || coastDist(x, y) < 150 || !freeZone(x, y) || bRects.some(b => Math.abs(x - b.x) < b.w / 2 && Math.abs(y - b.y) < b.d / 2);
    const nearFoot = (x, y, m) => {
      const gx = (x / 60) | 0, gy = (y / 60) | 0;
      for (let i = -1; i <= 1; i++) for (let j = -1; j <= 1; j++) for (const [px, py, hw, k] of grid.get((gx + i) + ',' + (gy + j)) || []) if (k === 2 && Math.hypot(px - x, py - y) < hw + m) return true;
      return false;
    };
    const nearestFoot = (x, y) => { let bi = -1, bd = 1e18; nodes.forEach((n, i) => { if (!n.foot) return; const d = (n.x - x) ** 2 + (n.y - y) ** 2; if (d < bd) { bd = d; bi = i; } }); return bi; };
    // yolun kenarından (d0) dik ilerle: karşıdaki caddeye ya da başka bir yaya yoluna varınca bağlan
    function tryFoot(x, y, a, s, d0, fromFoot) {
      const nx = -Math.sin(a) * s, ny = Math.cos(a) * s;
      let end = 0, toFoot = false;
      for (let d = d0 + 10; d < 640; d += 8) {
        const qx = x + nx * d, qy = y + ny * d;
        if (blocked(qx, qy)) return;
        if (d > d0 + 40 && nearRoad(qx, qy, SW, null, true)) { end = d; break; }
        if (d > d0 + 24 && nearFoot(qx, qy, 3)) { end = d; toFoot = true; break; }
      }
      if (!end || end - d0 < 60) return;
      const sp = [x + nx * d0, y + ny * d0], ep = [x + nx * end, y + ny * end], mid = [(sp[0] + ep[0]) / 2, (sp[1] + ep[1]) / 2];
      if (foots.some(f => Math.hypot(f.mid[0] - mid[0], f.mid[1] - mid[1]) < 85)) return;
      const pts = sample([sp, ep], true, 40);
      foots.push({ mid, pts, path: path2(pts) });
      const ids = pts.map(p => node(p, FOOT_HW, true));
      for (let i = 1; i < ids.length; i++) link(ids[i - 1], ids[i], 1);
      const st = fromFoot ? nearestFoot(sp[0], sp[1]) : nearest(sp[0], sp[1], 1), en = toFoot ? nearestFoot(ep[0], ep[1]) : nearest(ep[0], ep[1], 1);
      if (st >= 0 && st !== ids[0]) link(st, ids[0], 1);
      if (en >= 0 && en !== ids[ids.length - 1]) link(ids[ids.length - 1], en, 1);
      addSeg(...sp, ...ep, FOOT_HW, 2);
    }
    const ribs = (pts, d0, gap, fromFoot) => {
      let acc = 0, next = gap * .6;
      for (let i = 1; i < pts.length; i++) {
        const [x0, y0] = pts[i - 1], [x1, y1] = pts[i], L = Math.hypot(x1 - x0, y1 - y0), a = Math.atan2(y1 - y0, x1 - x0);
        while (acc + L >= next) {
          const t = (next - acc) / L;
          tryFoot(x0 + (x1 - x0) * t, y0 + (y1 - y0) * t, a, 1, d0, fromFoot);
          tryFoot(x0 + (x1 - x0) * t, y0 + (y1 - y0) * t, a, -1, d0, fromFoot);
          next += gap + R() * gap * .6;
        }
        acc += L;
      }
    };
    roads.forEach(r => { if (r.t !== 'ring') ribs(r.pts, ROAD_W[r.t] / 2 + SW, 95, false); });
    foots.slice().forEach(f => ribs(f.pts, FOOT_HW + 2, 120, true));
    // 🪧 reklam panoları: ana yollar ve sahil yolu boyunca kaldırım kenarında, yola dönük (binalar bunlara çakışmaz)
    const bills = [];
    roads.forEach(r => {
      if (r.t !== 'main' && r.t !== 'coast') return;
      const hw = ROAD_W[r.t] / 2;
      let acc = 0, next = 160 + R() * 120;
      for (let i = 1; i < r.pts.length; i++) {
        const [x0, y0] = r.pts[i - 1], [x1, y1] = r.pts[i], L = Math.hypot(x1 - x0, y1 - y0), a = Math.atan2(y1 - y0, x1 - x0);
        while (acc + L >= next) {
          const t = (next - acc) / L, x = x0 + (x1 - x0) * t, y = y0 + (y1 - y0) * t;
          for (const s of [1, -1]) {
            const off = hw + SW + 4 + 14, o = { x: x - Math.sin(a) * off * s, y: y + Math.cos(a) * off * s, w: 112, d: 28, a: s > 0 ? a : a + Math.PI };
            const pts = [...corners(o), [o.x, o.y]];
            if (pts.some(([px, py]) => inSea(px, py) || coastDist(px, py) < 150 || !freeZone(px, py) || nearRoad(px, py, SW + 1, 3))) continue;
            if (bRects.some(b => sat(b, o)) || bills.some(b => sat(b, { ...o, w: o.w + 40 }))) continue;
            bills.push({ ...o, id: 'b' + bills.length });
            break;
          }
          next += 330 + R() * 220;
        }
        acc += L;
      }
    });
    // 🏘️ dolgu binalar: her araç yolunun ve yaya yolunun iki yanına, yola dönük (her binanın önünde yol var)
    const fill = [];
    const zoneOf = (x, y) => coastDist(x, y) < 380 ? 'cs' : (x < 950 && y < 1000) || x < 0 || y < 0 ? 'ev' : x > 1830 && y < 1500 ? 'ex' : ell(x, y, 1650, 860, 820, 540) ? 'dt' : R() < .5 ? 'ev' : 'dt';
    // gap: yol kenarından binaya boşluk (araç yolunda kaldırım + 7, yaya yolunda 6)
    function tryPlace(x, y, a, s, hw, gap) {
      const z = zoneOf(x, y), types = FT[z], ty = types[(R() * types.length) | 0], tall = !!ty[2];
      const w = z === 'ev' ? 44 + R() * 24 : tall ? 56 + R() * 26 : 38 + R() * 30, d = z === 'ev' ? 40 + R() * 18 : tall ? 60 + R() * 30 : 40 + R() * 26;
      const off = hw + gap + d / 2, o = { x: x - Math.sin(a) * off * s, y: y + Math.cos(a) * off * s, w, d, a: s > 0 ? a : a + Math.PI };
      const pts = [...corners(o), [o.x, o.y]];
      if (pts.some(([px, py]) => px < X0 + 8 || px > W - 8 || py < Y0 + 8 || py > H - 8 || inSea(px, py) || coastDist(px, py) < 150 || !freeZone(px, py) || nearRoad(px, py, SW + 2, 3))) return;
      if (bRects.some(b => sat(b, o)) || bills.some(b => sat(b, { ...o, w: w + 6, d: d + 6 }))) return;
      const big = { ...o, w: w + 8, d: d + 8 };
      if (fill.some(f => Math.abs(f.x - o.x) < 140 && Math.abs(f.y - o.y) < 140 && sat(f, big))) return;
      const pal = ROOF[z];
      fill.push({ ...o, id: 'f' + fill.length, z, n: ty[0], ic: ty[1], tall, c: pal[(R() * pal.length) | 0], aw: AWN[(R() * AWN.length) | 0] });
    }
    const along = (pts, hw, gap) => {
      let acc = 0, next = 24;
      for (let i = 1; i < pts.length; i++) {
        const [x0, y0] = pts[i - 1], [x1, y1] = pts[i], L = Math.hypot(x1 - x0, y1 - y0), a = Math.atan2(y1 - y0, x1 - x0);
        while (acc + L >= next) {
          const t = (next - acc) / L;
          tryPlace(x0 + (x1 - x0) * t, y0 + (y1 - y0) * t, a, 1, hw, gap);
          tryPlace(x0 + (x1 - x0) * t, y0 + (y1 - y0) * t, a, -1, hw, gap);
          next += 20 + R() * 18;
        }
        acc += L;
      }
    };
    roads.forEach(r => { if (r.t !== 'ring') along(r.pts, ROAD_W[r.t] / 2, SW + 7); });
    foots.forEach(f => along(f.pts, FOOT_HW, 6));
    const inFill = (x, y, m) => fill.some(f => Math.abs(f.x - x) < 90 && Math.abs(f.y - y) < 90 && inRect({ ...f, w: f.w + m * 2, d: f.d + m * 2 }, x, y));
    // 🌳 ağaçlar: parkta sık, boşluklarda orta
    const trees = [];
    for (let i = 0; i < 5400; i++) {
      const x = X0 + R() * (W - X0), y = Y0 + R() * (H - Y0);
      const park = ell(x, y, 600, 1150, 195, 255);
      let p = park ? .9 : x < 950 && y < 1000 ? .45 : ell(x, y, 1650, 850, 780, 500) ? .12 : .3;
      if (park && (ell(x, y, 600, 1150, 110, 140) || (ell(x, y, 600, 1150, 146, 184) && !ell(x, y, 600, 1150, 114, 154)))) p = 0;
      if (ell(x, y, 2140, 1450, 120, 120) || ell(x, y, 1350, 850, 60, 60)) p = 0;
      if (R() > p) continue;
      if (inSea(x, y) || coastDist(x, y) < 150 || nearRoad(x, y, SW + 8) || inBld(x, y, 14) || inField(x, y, 8) || inFill(x, y, 10)) continue;
      trees.push([x, y, 10 + R() * 8, R() < .5 ? 0 : 1]);
    }
    // 🌴 palmiyeler + ⛱️ şemsiyeler kıyı boyunca, 💡 lambalar kaldırım kenarında
    const palms = [], umbs = [], lamps = [];
    coastN.forEach((c, i) => {
      if (i % 3 === 0) { const x = c.x + c.lx * 140, y = c.y + c.ly * 140; if (!nearRoad(x, y, SW + 4) && !inBld(x, y, 10) && !inFill(x, y, 6) && !ell(x, y, 2140, 1450, 120, 120)) palms.push([x, y, R() * 6]); }
      if (c.x > 1150 && c.x < 2050 && i % 2 === 0) { const d = 45 + R() * 40; umbs.push([c.x + c.lx * d, c.y + c.ly * d, ['#ff6b6b', '#ffd93d', '#4dabf7', '#ff8cc6', '#69db7c'][i % 5]]); }
    });
    roads.forEach(r => r.t !== 'ring' && r.pts.forEach((p, i) => {
      if (i % 2) return;
      const q = r.pts[Math.min(i + 1, r.pts.length - 1)], o = r.pts[Math.max(i - 1, 0)], a = Math.atan2(q[1] - o[1], q[0] - o[0]), s = (i / 2) % 2 ? 1 : -1, d = ROAD_W[r.t] / 2 + SW - 3;
      lamps.push([p[0] - Math.sin(a) * d * s, p[1] + Math.cos(a) * d * s]);
    }));
    const beachPts = coastN.filter(c => c.x > PL.sahil.beach[0] && c.x < PL.sahil.beach[1]);
    const FM = {};
    fill.forEach(f => { FM[f.id] = f; });
    // 🏠 hane evleri ev6…: mahallelerdeki dolgu evlerden birbirinden uzak olanlar (app.js CC_HOMES aynı anahtarlar); karakterler buralarda oturur
    const homes = [];
    fill.filter(f => f.z === 'ev' && !f.tall && f.n !== 'Bakkal').sort((p, q) => hash(p.id + 'h') - hash(q.id + 'h')).forEach(f => {
      if (homes.length >= HOME_X.length || homes.some(h => Math.hypot(h.x - f.x, h.y - f.y) < 260)) return;
      const [k, n, ic] = HOME_X[homes.length], fx = f.x + Math.sin(f.a) * (f.d / 2 + 14), fy = f.y - Math.cos(f.a) * (f.d / 2 + 14);
      f.home = k; f.n = n; f.ic = ic;
      homes.push(f);
      PL[k] = { k, n, ic, x: f.x, y: f.y, w: f.w, h: f.d, fill: f.id, node: nearest(fx, fy) };
    });
    const roadNodes = nodes.map((n, i) => i).filter(i => !nodes[i].foot);
    // 🧱 bina var mı (yol dışı düz yürüyüşlerde binanın üstünden geçmesin)
    const solid = (x, y) => inBld(x, y, 3) || inFill(x, y, 3) || bills.some(b => Math.abs(b.x - x) < 70 && Math.abs(b.y - y) < 70 && inRect(b, x, y));
    const segFree = (x0, y0, x1, y1) => { const n = Math.ceil(Math.hypot(x1 - x0, y1 - y0) / 8); for (let i = 0; i <= n; i++) if (solid(x0 + (x1 - x0) * i / n, y0 + (y1 - y0) * i / n)) return false; return true; };
    WD = { bills, solid, segFree, nodes, roadNodes, roads, foots, coast, coastN, seaPath: path2(seaPoly, true), coastPath: path2(coast), inSea, coastDist, nearest, nearRoad, trees, palms, umbs, lamps, PL, fill, FM, beachPts };
    return WD;
  }
  // A* (düğüm listesi küçük: düz dizi yeterli); car: yaya yollarına girmez
  function route(a, b, car) {
    const { nodes } = WD;
    if (a === b) return [a];
    const g = new Float64Array(nodes.length).fill(Infinity), from = new Int32Array(nodes.length).fill(-1), done = new Uint8Array(nodes.length);
    const h = i => Math.hypot(nodes[i].x - nodes[b].x, nodes[i].y - nodes[b].y);
    // ikili yığın (en küçük f önce)
    const hp = [], push = (f, v) => { hp.push([f, v]); let i = hp.length - 1; while (i) { const p = (i - 1) >> 1; if (hp[p][0] <= hp[i][0]) break; [hp[p], hp[i]] = [hp[i], hp[p]]; i = p; } };
    const pop = () => { const top = hp[0], last = hp.pop(); if (hp.length) { hp[0] = last; let i = 0; for (;;) { const l = i * 2 + 1, r = l + 1; let m = i; if (l < hp.length && hp[l][0] < hp[m][0]) m = l; if (r < hp.length && hp[r][0] < hp[m][0]) m = r; if (m === i) break; [hp[m], hp[i]] = [hp[i], hp[m]]; i = m; } } return top; };
    push(h(a), a);
    g[a] = 0;
    while (hp.length) {
      const u = pop()[1];
      if (done[u]) continue;
      done[u] = 1;
      if (u === b) break;
      for (const [v, d, f] of nodes[u].adj) { if (car && f) continue; const ng = g[u] + d; if (ng < g[v]) { g[v] = ng; from[v] = u; push(ng + h(v), v); } }
    }
    if (from[b] < 0) return [a, b];
    const out = [];
    for (let u = b; u !== -1; u = from[u]) out.unshift(u);
    return out;
  }
  // düğüm yolunu kenara kaydır: f(düğüm) > 0 → gidiş yönünün sağı (kaldırım / sağ şerit)
  function offPath(ids, f) {
    const n = ids.map(i => WD.nodes[i]);
    return n.map((p, i) => {
      const a = n[Math.max(0, i - 1)], b = n[Math.min(n.length - 1, i + 1)];
      let dx = b.x - a.x, dy = b.y - a.y;
      const L = Math.hypot(dx, dy) || 1, o = f(p);
      dx /= L; dy /= L;
      return [p.x - dy * o, p.y + dx * o];
    });
  }
  const walkSide = n => n.foot ? 0 : n.hw + SW / 2;
  // 🚶 hangi kaldırım: (x, y) ilk yol parçasının sağındaysa +1, solundaysa -1 → yürüyen bulunduğu kaldırımda kalır, gereksiz karşıya geçmez
  const sideOf = (ids, x, y) => { if (ids.length < 2) return 1; const a = WD.nodes[ids[0]], b = WD.nodes[ids[1]]; return (b.x - a.x) * (y - a.y) - (b.y - a.y) * (x - a.x) >= 0 ? 1 : -1; };
  const walkPath = (ids, x, y) => { const s = sideOf(ids, x, y); return offPath(ids, n => walkSide(n) * s); };
  // binanın kapısı: düğümden binaya doğru kaldırımdaki nokta (binanın tarafı)
  const towardB = (i, bx, by) => { const n = WD.nodes[i], dx = bx - n.x, dy = by - n.y, L = Math.hypot(dx, dy) || 1, o = walkSide(n); return [n.x + dx / L * o, n.y + dy / L * o]; };
  // düğümün kaldırımdaki noktası (tek düğümde yön komşudan alınır)
  const sidePt = i => { const j = (WD.nodes[i].adj[0] || [i])[0]; return offPath(j === i ? [i] : [i, j], walkSide)[0]; };
  // alan içinde rastgele dolaşma noktası; from verilirse oradan düz çizgide bina olmayan bir nokta (parkta gölün çevresinde komşu açı)
  function areaPt(pl, from) {
    for (let k = 0; k < 10; k++) {
      const r = Math.random();
      let a = Math.random() * Math.PI * 2, p;
      if (pl.k === 'park' && from) a = Math.atan2((from[1] - pl.y) / pl.ry, (from[0] - pl.x) / pl.rx) + (Math.random() - .5) * 1.6;
      if (pl.k === 'sahil') { const c = WD.beachPts[(Math.random() * WD.beachPts.length) | 0], d = 30 + r * 70; p = [c.x + c.lx * d, c.y + c.ly * d]; }
      else { const f = pl.k === 'park' ? .58 + r * .14 : .35 + r * .5; p = [pl.x + Math.cos(a) * pl.rx * f, pl.y + Math.sin(a) * pl.ry * f]; }
      if (!WD.solid(...p) && (!from || WD.segFree(...from, ...p))) return p;
    }
    return from || [pl.x, pl.y];
  }
  // yol takibi: o.path noktalarına sırayla, dist kadar ilerle; vardıysa true
  function follow(o, dist) {
    while (dist > 0 && o.pi < o.path.length) {
      const [tx, ty] = o.path[o.pi], dx = tx - o.x, dy = ty - o.y, d = Math.hypot(dx, dy);
      if (d > .01) o.a = Math.atan2(dy, dx);
      if (d <= dist) { o.x = tx; o.y = ty; o.pi++; dist -= d; } else { o.x += dx / d * dist; o.y += dy / d * dist; dist = 0; }
    }
    return o.pi >= o.path.length;
  }
  const load = () => { try { return JSON.parse(localStorage.getItem(KEY)) || null; } catch (e) { return null; } };
  const SPEEDS = [[60, '⏩ 60×'], [240, '⏩ 240×'], [1, '▶️ 1×'], [0, '⏸️']];
  const glowCache = {};
  function glow(col) {
    if (glowCache[col]) return glowCache[col];
    const c = document.createElement('canvas'); c.width = c.height = 64;
    const g = c.getContext('2d'), gr = g.createRadialGradient(32, 32, 0, 32, 32, 32);
    gr.addColorStop(0, col); gr.addColorStop(.35, col + '88'); gr.addColorStop(1, col + '00');
    g.fillStyle = gr; g.fillRect(0, 0, 64, 64);
    return (glowCache[col] = c);
  }
  const imgs = {};
  function imgOf(src) {
    if (!src) return null;
    if (!imgs[src]) { const im = new Image(); im.src = src; imgs[src] = im; }
    const im = imgs[src];
    return im.complete && im.naturalWidth ? im : null;
  }

  /* 🗣️ ayaküstü konuşma metinleri: me = senin cümlen (tür), ok / bad = onun cevabı, hi = selam (yabancı / tanıdık) */
  const TALK_T = [['iltifat', '😊 İltifat'], ['espri', '😂 Espri'], ['davet', '☕ Davet'], ['cesur', '😏 Cesur']];
  const TK = {
    hi: ['Efendim? 🙂', 'Bir şey mi soracaktın?', 'Hı? Bana mı dedin?', 'Selam… tanışıyor muyuz? 🤨', 'Merhaba 😊', 'Evet? Seni dinliyorum 👀'],
    hiK: ['Aa, sen! Burada ne arıyorsun? 😊', 'Seni gördüğüme sevindim 💕', 'Tesadüfe bak 😏', 'Hey! Beni mi takip ediyorsun? 😄', 'Tam da seni düşünüyordum 🙈'],
    me: {
      iltifat: ['Gülüşün bütün caddeyi aydınlattı', 'Bu kadar güzel birini burada görmeyi beklemiyordum', 'Gözlerin bir saniye nefesimi kesti', 'O kıyafet sana çok yakışmış', 'Kokun daha yanından geçerken başımı döndürdü'],
      espri: ['Kayboldum, beni evine kadar götürür müsün?', 'Pardon, burada en güzel kız yarışması mı var? Kazanmışsın', 'Sana bakarken iki kere kırmızıda geçtim 🚦', 'Telefonumda bir sorun var: senin numaran yok 📱', 'Haritada seni arıyordum, sonunda buldum 🗺️'],
      davet: ['Bir kahve içelim mi? ☕', 'Yakında güzel bir yer biliyorum, gelsene', 'Bu akşam boş musun? 🍷', 'Biraz yürüyelim mi beraber?', 'Sana bir içki ısmarlayabilir miyim? 🍸'],
      cesur: ['Açık konuşayım: seni öpmek istiyorum', 'Gözlerimi senden alamıyorum, sen de fark ettin bence', 'Bu gece seninle bitsin istiyorum 🔥', 'Şu an aklımdan geçenleri bilsen kızarırdın 😈', 'Numaranı ver, gerisini mesajda konuşalım 😏']
    },
    ok: {
      iltifat: ['Aww, teşekkür ederim 😊', 'Kızardım şu an, görüyor musun? ☺️', 'Bunu her kıza söylüyorsundur… ama hoşuma gitti 😏', 'Tatlısın 💕'],
      espri: ['Hahaha 😂 tamam bu iyiydi', 'Komiksin 😄', 'Gülmemek için kendimi zor tutuyorum 😂', 'Bu kadar kötü bir espriye ancak gülünür 😆'],
      davet: ['Olur, neden olmasın 😊', 'Bunu bekliyordum 😏', 'Tamam ama sen ısmarlıyorsun ☕', 'Peki, ikna oldum 💕'],
      cesur: ['Ooo, cesursun 😈 hoşuma gitti', 'Böyle direkt erkekleri severim 🔥', 'Kalbim hızlandı şu an 😳', 'Belki… dene bakalım 😏']
    },
    bad: {
      iltifat: ['Hı hı, klasik 🙄', 'Bunu daha önce duymuştum', 'Sağ ol… sanırım 😐', 'Biraz fazla olmadı mı?'],
      espri: ['…Bu espri miydi? 😶', 'Hmm. Hayır 😐', 'Gülsem mi ağlasam mı bilemedim', 'Çok kötüydü 🙄'],
      davet: ['Daha tanışalı iki dakika oldu 😅', 'Şimdi olmaz, acelem var', 'Belki başka zaman', 'Hmm, bilemedim… biraz erken'],
      cesur: ['Hop! Biraz yavaş 😠', 'Pardon?! 😳', 'Bu kadarı fazla', 'Ciddi misin sen? 🙄']
    },
    name: 'Bu arada ben {ad} 😊',
    leave: ['Benim gitmem lazım 🙄', 'Neyse, iyi günler', 'Arkadaşım bekliyor, görüşürüz', 'Bence burada bitirelim 😐'],
    win: ['Tamam, al numaramı 📱 yaz bana', 'Numaramı kaydet… ama hemen yaz 😘', 'Bu gece mesajını bekliyorum 💋', 'Seninle konuşmak güzeldi, devamını mesajda yapalım 😏'],
    first: ['Selam, az önce tanıştık 😊 ben {ad}', 'Numaramı kaydetmişsin 😏 yazmanı bekliyordum', 'Hâlâ gülümsüyorum, senin yüzünden 😄', 'Demin çok tatlıydın 💋 şimdi ne yapıyorsun?'],
    firstK: ['Az önce seni görmek çok güzeldi 😊 devam edelim mi?', 'Hâlâ aklımdasın, demin çok tatlıydın 💕', 'Karşılaşmamız tesadüf değildi bence 😏'],
    bye: 'Görüşürüz 👋'
  };
  const NIGHT_PL = ['kulup', 'gazino', 'pub', 'sinema'], SOCIAL_PL = ['kafe', 'park', 'sahil', 'lunapark', 'magaza'];
  // ✋ durdurma mesafesi: bundan uzaktaki karakter durmaz, peşinden gidersin (yaklaşınca durur)
  const STOP_R = 240;
  /* 🎭 konuşma tarzı: kişilik özelliği → tarz. p = tür başına şans farkı, i = başlangıç ilgisi farkı, hi / ok / bad = tarzın kendi cümleleri (%65) */
  const STYLE_OF = { 'Utangaç': 'utangac', 'Güvensiz': 'utangac', 'Alçakgönüllü': 'utangac', 'Flörtöz': 'flort', 'Özgüvenli': 'flort', 'Şımarık': 'flort', 'Asi': 'flort',
    'Alaycı': 'alayci', 'Kibirli': 'alayci', 'Manipülatif': 'alayci', 'İnatçı': 'alayci', 'Soğuk': 'soguk', 'Ciddi': 'soguk', 'Mantıklı': 'soguk', 'Gizemli': 'soguk', 'Olgun': 'soguk',
    'Neşeli': 'nese', 'Komik': 'nese', 'Çocuksu': 'nese', 'Meraklı': 'nese', 'Romantik': 'romantik', 'Duygusal': 'romantik', 'Sadık': 'romantik', 'Dürüst': 'romantik' };
  const STYLE = {
    utangac: { l: '🙈 Utangaç', p: { iltifat: .1, espri: .05, davet: -.05, cesur: -.25 }, i: -4,
      hi: ['Ş-şey… merhaba 🙈', 'Bana mı baktın? 😳', '*gözlerini kaçırır* Selam…'],
      ok: { iltifat: ['*kızarır* T-teşekkür ederim 🙈', 'Kimse bana böyle söylememişti 😳'], espri: ['*kıkırdar* Komiksin 🙈', 'Hihi… güldürdün beni 😳'], davet: ['O-olur… ama sadece biraz 🙈'], cesur: ['*yüzü kıpkırmızı* Ne diyeceğimi bilmiyorum 😳'] },
      bad: { iltifat: ['*bakışlarını kaçırır*'], espri: ['…anlamadım galiba 😶'], davet: ['B-ben… şimdi olmaz 😣'], cesur: ['*geri çekilir* Ç-çok hızlı gidiyorsun 😰'] } },
    flort: { l: '😘 Flörtöz', p: { iltifat: .05, espri: 0, davet: .05, cesur: .2 }, i: 6,
      hi: ['Bakıyordun, gördüm 😏', 'Selam yakışıklı 😘', 'Sonunda biri cesaret etti 😉'],
      ok: { iltifat: ['Biliyorum 😘 ama senden duymak güzel', 'Devam et, hoşuma gidiyor 😏'], espri: ['Haha, eğlencelisin 😉'], davet: ['Sandığından da hızlı kabul ediyorum 😏'], cesur: ['İşte böyle erkekleri severim 🔥', 'Gel o zaman 😈'] },
      bad: { iltifat: ['Daha iyisini yapabilirsin 😏'], espri: ['Komik olmaya çalışma, seksi ol 😉'], davet: ['O kadar kolay değilim tatlım 😘'], cesur: ['Hmm, önce biraz ısıt beni 😏'] } },
    alayci: { l: '😏 Alaycı', p: { iltifat: -.15, espri: .15, davet: -.05, cesur: .05 }, i: -2,
      hi: ['Ne o, kayboldun mu? 🙄', 'Bakalım ne diyeceksin 😏', 'Evet? Sıkılıyordum zaten 🙃'],
      ok: { iltifat: ['…tamam, kabul, hoştu 🙄'], espri: ['Ha! Bu iyiydi, itiraf ediyorum 😏', 'Vay, mizah anlayışın varmış 😏'], davet: ['Peki, bir şans veriyorum. Sakın sıkma 🙄'], cesur: ['Cesaretine puan veriyorum 😏'] },
      bad: { iltifat: ['Vay, ne orijinal 🙄', 'Bunu internetten mi buldun? 😏'], espri: ['Alkışlıyorum 👏🙄'], davet: ['Hayal kurmak serbest 🙃'], cesur: ['Tabii tabii, sıradaki 🙄'] } },
    soguk: { l: '🧊 Soğuk', p: { iltifat: -.08, espri: -.1, davet: .05, cesur: -.12 }, i: -8,
      hi: ['Evet?', 'Ne istiyorsun?', 'Acelem var. Söyle.'],
      ok: { iltifat: ['…teşekkürler.', 'Hm. Nazik.'], espri: ['*hafifçe gülümser*'], davet: ['…belki. Bir kahve olabilir.'], cesur: ['…ilginç. Devam et.'] },
      bad: { iltifat: ['İlgilenmiyorum.'], espri: ['Komik değil.'], davet: ['Hayır.'], cesur: ['Haddini aşma.'] } },
    nese: { l: '😄 Neşeli', p: { iltifat: .05, espri: .2, davet: .05, cesur: -.05 }, i: 4,
      hi: ['Selaaam! 😄', 'Hey hey! Nasılsın? 🌞', 'Ooo, merhaba! 😁'],
      ok: { iltifat: ['Ayy çok tatlısın 🥰'], espri: ['HAHAHA 😂 dur karnım ağrıdı', 'Sen çok komiksin ya 😆'], davet: ['Evet evet evet! 🎉'], cesur: ['Hihi, cüretkârsın 😆💕'] },
      bad: { iltifat: ['Hihi, sağ ol ama abartma 😅'], espri: ['Hmm, bu tutmadı 😅'], davet: ['Bugün olmaz ama yarın belki! 😄'], cesur: ['Vay vay, sakin ol 😅'] } },
    romantik: { l: '🌹 Romantik', p: { iltifat: .15, espri: 0, davet: .1, cesur: -.1 }, i: 2,
      hi: ['Merhaba… 🌹', 'Ne güzel bir gün, değil mi? ✨', 'Selam 😊'],
      ok: { iltifat: ['Kalbim eridi 🥺💕', 'Bunu duymaya ihtiyacım varmış 🌹'], espri: ['Gülüşün de güzelmiş 😊'], davet: ['Çok isterim… yıldızların altında mı? ✨'], cesur: ['Bu biraz hızlı ama… kalbim hızlandı 💓'] },
      bad: { iltifat: ['Bunu herkese söylüyorsun bence 😔'], espri: ['Ben daha ciddi bir şey bekliyordum'], davet: ['Önce birbirimizi tanıyalım…'], cesur: ['Romantizm nerede? 😕'] } }
  };
  /* 💞 tanışıklık: yeni (hiç tanışmadın) · tanis (şehirde tanıştın ya da az yazıştınız) · yakin (15+ mesaj) · sevgili (60+ mesaj); i = başlangıç ilgisi, p = şans farkı */
  const TIER = {
    yeni: { l: '🆕 İlk kez', i: 22, p: 0 },
    tanis: { l: '👋 Tanışıyorsunuz', i: 34, p: .05, hi: ['Aa, yine mi sen? 😄', 'Seni hatırlıyorum 😊 nasılsın?', 'Tekrar karşılaştık bak 😏'] },
    yakin: { l: '💬 Yakınsınız', i: 48, p: .12 },
    sevgili: { l: '💕 Sevgilin', i: 64, p: .2, hi: ['Aşkım! 😍 burada ne işin var?', 'Bebeğim 💕 tam seni özlemiştim', 'Sürpriz! 😘 beni mi arıyordun?'],
      me: { iltifat: ['Bugün her zamankinden güzelsin', 'Seni görünce günüm güzelleşti'], espri: ['Beni takip etmekten vazgeçmiyorsun 😄', 'Yine mi sen? Kader bu 😄'], davet: ['Hadi bize gidelim', 'Bu akşamı beraber geçirelim mi? 🍷'], cesur: ['Seni hemen burada öpmek istiyorum', 'Şu an sana sarılmak istiyorum 🔥'] },
      win: ['Hadi gidelim o zaman 😘', 'Akşama sende miyim? 💋', 'Mesajlaşalım, sana bir sürprizim var 😏'] }
  };
  const WED_T = { bad: ['Kocam buralarda olabilir 😳', 'Evliyim, unuttun mu? 😅'], ok: ['Kocam duymasın ama… 😏', 'Yüzüğüme bakma 🤫'] };
  /* 🎉 şehir etkinlikleri: her gün 5 tanesi (gün + id hash); h = [başlangıç, bitiş) saat (24+ = ertesi gece). Boştaki karakterler ve yabancılar oraya akar, tavlama şansı artar */
  const EVENTS = [
    { id: 'konser', k: 'sahil', ic: '🎸', n: 'Sahil konseri', h: [20, 24], doing: 'konserde dans ediyor 🎸' },
    { id: 'quiz', k: 'pub', ic: '🧠', n: 'Quiz gecesi', h: [20, 23], doing: 'quiz gecesinde 🧠' },
    { id: 'kopuk', k: 'kulup', ic: '🫧', n: 'Köpük partisi', h: [22, 27], doing: 'köpük partisinde 🫧' },
    { id: 'jackpot', k: 'gazino', ic: '🎰', n: 'Jackpot gecesi', h: [21, 26], doing: 'jackpot gecesinde 🎰' },
    { id: 'fisek', k: 'lunapark', ic: '🎆', n: 'Havai fişek gösterisi', h: [20, 23], doing: 'havai fişekleri izliyor 🎆' },
    { id: 'yoga', k: 'park', ic: '🧘‍♀️', n: 'Açık hava yogası', h: [8, 11], doing: 'parkta yoga yapıyor 🧘‍♀️' },
    { id: 'brunch', k: 'kafe', ic: '🥞', n: 'Brunch günü', h: [9, 13], doing: 'brunch yapıyor 🥞' },
    { id: 'indirim', k: 'magaza', ic: '🏷️', n: 'Büyük indirim', h: [11, 19], doing: 'indirimde alışveriş yapıyor 🏷️' },
    { id: 'gala', k: 'sinema', ic: '🎬', n: 'Film galası', h: [19, 23], doing: 'galada kırmızı halıda 🎬' },
    { id: 'voleybol', k: 'sahil', ic: '🏐', n: 'Plaj voleybolu turnuvası', h: [13, 18], doing: 'plaj voleybolu oynuyor 🏐' },
    { id: 'spin', k: 'spor', ic: '🚴‍♀️', n: 'Spin maratonu', h: [7, 10], doing: 'spin maratonunda 🚴‍♀️' },
    { id: 'piknik', k: 'park', ic: '🧺', n: 'Piknik şenliği', h: [12, 17], doing: 'piknikte 🧺' }
  ];
  /* 🚪 iç mekânlar: 560×400 oda, kapı altta ortada. it: [ikon, x, y, w, h, renk] mobilya (üstüne yürünmez), sp: içerideki kişilerin yerleri.
   * IN_OF: bina → oda tipi; dolgu binalar bölgesine göre (ev / dukkan / bar / kafe, yüksekler ofis) */
  const IN = {
    ev: { f: '#ead9c0', w: '#9c7a5a', it: [['🛋️', 50, 40, 170, 60, '#9b8ec4'], ['📺', 70, 140, 130, 18, '#37474f'], ['🛏️', 390, 30, 140, 160, '#f3b6c8'], ['🍳', 370, 310, 170, 60, '#cfd8dc'], ['🪴', 20, 320, 44, 44, '#7cb342'], ['🛁', 240, 20, 90, 60, '#bde0fe']], sp: [[140, 200], [300, 190], [460, 230], [290, 290], [170, 290]] },
    kafe: { f: '#f1e3cf', w: '#8d6e63', it: [['☕', 30, 30, 210, 50, '#795548'], ['🍰', 300, 80, 60, 60, '#c8a27a'], ['🥐', 430, 80, 60, 60, '#c8a27a'], ['🍰', 300, 220, 60, 60, '#c8a27a'], ['🧁', 430, 220, 60, 60, '#c8a27a'], ['🪴', 30, 320, 44, 44, '#7cb342']], sp: [[280, 110], [385, 110], [515, 110], [280, 250], [385, 250], [515, 250], [130, 120]] },
    bar: { f: '#5d4037', w: '#3e2723', it: [['🍺', 30, 25, 500, 50, '#8d6e63'], ['🍻', 70, 200, 70, 70, '#a1887f'], ['🍻', 245, 200, 70, 70, '#a1887f'], ['🍻', 420, 200, 70, 70, '#a1887f'], ['🎯', 500, 310, 40, 40, '#c62828']], sp: [[110, 110], [250, 110], [390, 110], [105, 300], [280, 300], [455, 300]] },
    kulup: { f: '#1a1033', w: '#4a148c', it: [['🪩', 140, 100, 280, 190, '#3b1f6b'], ['🎧', 210, 15, 140, 50, '#212121'], ['🥂', 20, 300, 130, 70, '#8e24aa'], ['🍸', 420, 300, 120, 70, '#6a1b9a']], sp: [[210, 160], [350, 160], [280, 240], [190, 250], [370, 250], [85, 270], [480, 270]] },
    gazino: { f: '#4a0e0e', w: '#b8902a', it: [['🎰', 50, 50, 130, 80, '#1b5e20'], ['🃏', 230, 50, 130, 80, '#1b5e20'], ['🎰', 420, 30, 120, 44, '#b8902a'], ['🃏', 230, 220, 130, 80, '#1b5e20'], ['🍸', 30, 300, 150, 60, '#4e342e']], sp: [[115, 160], [295, 160], [480, 110], [295, 325], [115, 250], [470, 250]] },
    ofis: { f: '#eceff1', w: '#607d8b', it: [['💻', 50, 50, 100, 50, '#90a4ae'], ['💻', 200, 50, 100, 50, '#90a4ae'], ['💻', 350, 50, 100, 50, '#90a4ae'], ['💻', 50, 190, 100, 50, '#90a4ae'], ['💻', 200, 190, 100, 50, '#90a4ae'], ['💼', 460, 230, 80, 110, '#795548']], sp: [[100, 125], [250, 125], [400, 125], [100, 265], [250, 265], [400, 270], [500, 200]] },
    sinif: { f: '#fff3e0', w: '#e89a3c', it: [['📚', 140, 15, 280, 24, '#2e7d32'], ['🍎', 240, 60, 80, 40, '#8d6e63'], ['✏️', 60, 150, 90, 40, '#ffcc80'], ['✏️', 235, 150, 90, 40, '#ffcc80'], ['✏️', 410, 150, 90, 40, '#ffcc80'], ['✏️', 60, 260, 90, 40, '#ffcc80'], ['✏️', 235, 260, 90, 40, '#ffcc80'], ['✏️', 410, 260, 90, 40, '#ffcc80']], sp: [[280, 120], [105, 210], [280, 210], [455, 210], [105, 320], [280, 320], [455, 320]] },
    hastane: { f: '#f5fbff', w: '#4db6ac', it: [['🛏️', 40, 50, 90, 130, '#e3f2fd'], ['🛏️', 170, 50, 90, 130, '#e3f2fd'], ['🛏️', 300, 50, 90, 130, '#e3f2fd'], ['🩺', 420, 50, 120, 60, '#b0bec5'], ['💊', 420, 290, 120, 60, '#cfd8dc']], sp: [[85, 215], [215, 215], [345, 215], [480, 150], [300, 300]] },
    spor: { f: '#cfd8dc', w: '#e0603f', it: [['🏃‍♀️', 40, 40, 60, 110, '#455a64'], ['🏃‍♀️', 120, 40, 60, 110, '#455a64'], ['🏃‍♀️', 200, 40, 60, 110, '#455a64'], ['🏋️‍♀️', 330, 40, 180, 70, '#37474f'], ['🧘‍♀️', 300, 200, 220, 130, '#a5d6a7']], sp: [[70, 180], [150, 180], [230, 180], [420, 140], [360, 260], [460, 290], [120, 290]] },
    masaj: { f: '#fce4ec', w: '#f08bb0', it: [['💆', 50, 50, 80, 150, '#f8bbd0'], ['💆', 190, 50, 80, 150, '#f8bbd0'], ['💆', 330, 50, 80, 150, '#f8bbd0'], ['♨️', 420, 260, 120, 100, '#bcaaa4'], ['🕯️', 40, 300, 40, 40, '#ffe082']], sp: [[150, 120], [290, 120], [430, 120], [300, 280], [160, 290]] },
    sinema: { f: '#2a0d12', w: '#a33a4a', it: [['🎬', 30, 15, 500, 26, '#111'], ['💺', 60, 100, 440, 34, '#b71c1c'], ['💺', 60, 160, 440, 34, '#b71c1c'], ['💺', 60, 220, 440, 34, '#b71c1c'], ['🍿', 420, 300, 120, 50, '#ffca28']], sp: [[150, 117], [330, 117], [220, 177], [420, 177], [140, 237], [330, 237]] },
    lobi: { f: '#efe8dc', w: '#a1887f', it: [['🛎️', 180, 30, 200, 50, '#8d6e63'], ['🛋️', 30, 180, 130, 60, '#5c6bc0'], ['🛋️', 400, 180, 130, 60, '#5c6bc0'], ['🏊', 190, 250, 180, 90, '#4fc3f7']], sp: [[280, 120], [95, 270], [465, 270], [160, 330], [400, 330]] },
    kilise: { f: '#e8e0d5', w: '#8d7b62', it: [['⛪', 220, 15, 120, 50, '#d7ccc8'], ['🙏', 50, 110, 190, 28, '#795548'], ['🙏', 320, 110, 190, 28, '#795548'], ['🙏', 50, 180, 190, 28, '#795548'], ['🙏', 320, 180, 190, 28, '#795548'], ['🕯️', 30, 20, 40, 40, '#ffe082']], sp: [[280, 90], [140, 155], [410, 155], [140, 225], [410, 225]] },
    magaza: { f: '#fff0f6', w: '#ec6fa0', it: [['👗', 40, 50, 34, 220, '#ec407a'], ['👙', 150, 50, 34, 220, '#ec407a'], ['👠', 260, 50, 34, 220, '#ec407a'], ['🚪', 410, 30, 130, 120, '#f8bbd0'], ['💳', 400, 280, 140, 50, '#90a4ae']], sp: [[105, 160], [215, 160], [330, 160], [470, 190], [330, 320]] },
    studyo: { f: '#2b2140', w: '#9c5fc0', it: [['🎬', 110, 30, 340, 170, '#6a1b9a'], ['🎥', 260, 260, 44, 44, '#212121'], ['💡', 40, 40, 40, 40, '#ffe082'], ['💡', 480, 40, 40, 40, '#ffe082']], sp: [[230, 120], [330, 120], [180, 240], [400, 240], [280, 330]] },
    motel: { f: '#3a2035', w: '#ff4fa3', it: [['🛏️', 170, 40, 220, 170, '#c2185b'], ['📺', 30, 60, 30, 110, '#212121'], ['🚿', 420, 270, 120, 90, '#b3e5fc'], ['🍾', 420, 40, 60, 60, '#5d4037']], sp: [[280, 240], [120, 260], [470, 200], [300, 320]] },
    dukkan: { f: '#f6efe3', w: '#a1887f', it: [['🛍️', 60, 30, 440, 50, '#a1887f'], ['📦', 30, 150, 34, 200, '#8d6e63'], ['📦', 496, 150, 34, 200, '#8d6e63'], ['🪴', 240, 200, 50, 50, '#7cb342']], sp: [[200, 120], [360, 120], [140, 260], [420, 260]] }
  };
  const IN_OF = { ev1: 'ev', ev2: 'ev', ev3: 'ev', ev4: 'ev', ev5: 'ev', apt: 'ev', benim: 'ev', ciftlik: 'ev', okul: 'sinif', kafe: 'kafe', ofis: 'ofis', studyo: 'studyo', spor: 'spor', hastane: 'hastane',
    karakol: 'ofis', magaza: 'magaza', masaj: 'masaj', pub: 'bar', kulup: 'kulup', gazino: 'gazino', sinema: 'sinema', otel: 'lobi', kilise: 'kilise', motel: 'motel' };
  const RW = 560, RH = 400;
  // 🏡 eve davet: gelenin ilk mesajı
  const INVITE_T = ['Geldim 😊 kapıyı açar mısın?', 'Evin çok güzelmiş 😍', 'Davetin için teşekkürler 💕 ne içiyoruz?', 'Kapındayım… içeri alacak mısın? 😏'];
  const evOn = (e, h) => (h >= e.h[0] && h < e.h[1]) || (e.h[1] > 24 && h < e.h[1] - 24);
  // 🧴 ikon çerçevesi = ten rengi (api.skin → app.js ccSkin, cmBody'deki Ten değeri)
  const SKIN_C = { Porselen: '#f7e3d6', Beyaz: '#f0cfb6', 'Buğday': '#d9a77c', Bronz: '#c38959', Esmer: '#99633e', 'Koyu esmer': '#6a4027' };

  /* ▶️ ekrana kur */
  function mount(root, api) {
    const wd = world(), PL = wd.PL, esc = api.esc;
    root.innerHTML = `<canvas class="ct-cv"></canvas>
      <div class="ct-top"><span class="ct-brand">🏙️ Carmen<i>City</i></span><span class="ct-clock"><b id="ctClk">--:--</b><small id="ctPh"></small></span><button type="button" class="ct-btn" id="ctSp"></button></div>
      <button type="button" class="ct-tick" id="ctTick"><span></span></button>
      <div class="ct-side"><button type="button" class="ct-btn" data-ct="me" title="Bana odaklan">🎯</button><button type="button" class="ct-btn" data-ct="in">＋</button><button type="button" class="ct-btn" data-ct="out">－</button></div>
      <button type="button" class="ct-btn ct-exit" id="ctExit" hidden>🚪 Dışarı çık</button>
      <div class="ct-card" id="ctCard" hidden></div>`;
    const cv = root.querySelector('.ct-cv'), ctx = cv.getContext('2d'), card = root.querySelector('#ctCard'), clk = root.querySelector('#ctClk'), phEl = root.querySelector('#ctPh'), spBtn = root.querySelector('#ctSp');
    const sv = load() || {}, met = sv.met || {};
    let sp = SPEEDS.some(s => s[0] === sv.sp) ? sv.sp : 60;
    const nowMin = () => { const d = new Date(); return d.getHours() * 60 + d.getMinutes(); };
    let gm = sv.gm != null ? (sv.gm + (Date.now() - (sv.at || Date.now())) / 1000 * sp / 60) % 1440 : nowMin();
    const hourOf = () => Math.floor(gm / 60) % 24;
    // 🏡 ilk açılışta evinin önünde başlarsın
    const home0 = sidePt(PL.benim.node);
    const me = { x: sv.px || home0[0], y: sv.py || home0[1], a: 0, path: null, pi: 0, dest: null, chase: null, tries: 0, ix: RW / 2, iy: RH - 30, itx: RW / 2, ity: RH - 30 };
    let cw = 0, ch = 0, dpr = 1, follow0 = true, sel = null, lastH = -1, t0 = performance.now(), tNow = 0, savedAt = 0, alive = true, talk = null;
    const cam = { x: me.x, y: me.y, z: 1.5 };

    // 👥 karakterler (saatine göre) + 🙋‍♀️ yabancılar (kendi kafasına göre)
    const homes = api.homes();
    const mkAg = (c, str) => ({ id: c.id, c, str, skin: SKIN_C[api.skin(c)] || '#e0b48e', w: null, k: null, to: null, st: 'in', x: 0, y: 0, a: 0, path: null, pi: 0, sp: 40 + hash(c.id + 's') % 16, leaveAt: 0, idle: 0, next: 0, hold: false });
    const day = Math.floor(Date.now() / 864e5);
    const strs = api.strangers().filter(x => x.photo).sort((a, b) => hash([a.id, day]) - hash([b.id, day])).slice(0, 32);
    const ag = [...api.chars().map(c => mkAg(c, false)), ...strs.map(c => mkAg(c, true))];
    // 🎉 bugünün etkinlikleri (5 tane, saate göre sıralı) + 🪧 pano reklamları
    const evDay = EVENTS.slice().sort((p, q) => hash([p.id, day]) - hash([q.id, day])).slice(0, 5).sort((p, q) => p.h[0] - q.h[0]);
    const evNow = h => evDay.filter(e => evOn(e, h));
    const evAt = (k, h) => evDay.find(e => e.k === k && evOn(e, h));
    const ads = api.ads();
    const adOf = (b, i) => ads.length ? ads[(Math.floor(tNow / 12000) + i * 7) % ads.length] : null;
    const plOf = k => PL[k] || PL.sahil;
    function placeAt(a, k) {
      const pl = plOf(k);
      a.k = pl.k; a.path = null; a.leaveAt = 0;
      if (pl.area) { [a.x, a.y] = areaPt(pl, sidePt(pl.node)); a.st = 'wander'; a.idle = tNow + Math.random() * 4000; }
      else { [a.x, a.y] = towardB(pl.node, pl.x, pl.y); a.st = 'in'; }
    }
    // alandan çıkarken önce girdiği kapıya döner (düz çizgide bina olmasın), yoksa en yakın düğümden yola çıkar
    const exitOf = a => { const cur = PL[a.k]; return a.st === 'wander' && cur && cur.area ? { s: cur.node, pre: [sidePt(cur.node)] } : { s: wd.nearest(a.x, a.y), pre: [] }; };
    // a.k = şu an bulunduğu / yürüdüğü yer, a.to = gideceği yer
    function depart(a) {
      const ex = exitOf(a);
      a.k = a.to; a.to = null;
      const pl = plOf(a.k), ids = route(ex.s, pl.node), from = ex.pre[0] || [a.x, a.y], pts = [...ex.pre, ...walkPath(ids, ...from)];
      if (!pl.area) pts[pts.length - 1] = towardB(pl.node, pl.x, pl.y);
      if (pl.area) pts.push(areaPt(pl, pts[pts.length - 1]));
      a.path = pts; a.pi = 0; a.st = 'walk';
    }
    function replan(h, instant) {
      api.plan(h).forEach(w => {
        const a = ag.find(x => x.id === w.c.id);
        if (!a) return;
        a.w = w;
        let k = plOf(w.k).k;
        // boştaysa bazen etkinliğe gider
        const ev = !w.job && !w.nurse && evNow(h).find(e => hash([a.id, e.id, day]) % 100 < 35);
        if (ev) { k = ev.k; a.w = { ...w, k: ev.k, doing: ev.doing, ev: ev.id }; }
        if (instant) { a.to = null; placeAt(a, k); return; }
        if (k === (a.to || a.k)) return;
        if (k === a.k) { a.to = null; a.leaveAt = 0; return; }
        a.to = k; a.leaveAt = tNow + 1 + hash(a.id + ':' + h) % 9000;
      });
    }
    if (gm % 60 < 20) { replan((hourOf() + 23) % 24, true); lastH = hourOf(); replan(lastH, false); ag.forEach(a => { if (a.leaveAt) a.leaveAt = 1 + Math.random() * 2500; }); }
    else { lastH = hourOf(); replan(lastH, true); }
    // yabancı: bir yere gider (çoğu açık alan ya da sokakta gezinti), biraz kalır, başka yere geçer
    const STR_DAY = ['sahil', 'sahil', 'park', 'park', 'lunapark', 'kafe', 'magaza', 'spor', 'masaj'], STR_NIGHT = ['kulup', 'gazino', 'pub', 'sinema', 'sahil', 'lunapark'];
    function strNext(a) {
      const h = hourOf();
      if (Math.random() < .35) { const ex = exitOf(a); a.k = '~'; a.to = null; a.path = [...ex.pre, ...walkPath(route(ex.s, (Math.random() * wd.nodes.length) | 0), ...(ex.pre[0] || [a.x, a.y]))]; a.pi = 0; a.st = 'walk'; a.w = { doing: 'sokakta yürüyor 🚶‍♀️' }; return; }
      const evs = evNow(h), ev = evs.length && Math.random() < .55 ? pickA(evs) : null;
      a.to = ev ? ev.k : pickA(h >= 20 || h < 5 ? STR_NIGHT : STR_DAY);
      a.w = { doing: ev ? ev.doing : api.doing(a.to) };
      depart(a);
    }
    ag.forEach(a => {
      if (!a.str) return;
      if (Math.random() < .5) { [a.x, a.y] = sidePt((Math.random() * wd.nodes.length) | 0); a.st = 'stand'; a.k = '~'; a.w = { doing: 'sokakta yürüyor 🚶‍♀️' }; a.next = Math.random() * 3000; }
      else { const k = pickA(hourOf() >= 20 || hourOf() < 5 ? STR_NIGHT : STR_DAY); placeAt(a, k); a.w = { doing: api.doing(k) }; a.next = 5000 + Math.random() * 30000; }
    });

    // 🚗 arabalar, 🚶 yayalar, ⛵ tekneler
    const R = rng(hash(Date.now()));
    const CAR_C = ['#e53935', '#1e88e5', '#fdd835', '#43a047', '#f5f5f5', '#212121', '#8e24aa', '#fb8c00'];
    const rndRoad = () => wd.roadNodes[(R() * wd.roadNodes.length) | 0];
    const newTrip = o => {
      const from = wd.nearest(o.x, o.y, o.car), to = o.car ? rndRoad() : (R() * wd.nodes.length) | 0;
      o.path = offPath(route(from, to, o.car), o.car ? n => n.hw * .5 : n => walkSide(n) * o.side); o.pi = 0;
    };
    const cars = Array.from({ length: 32 }, (_, i) => { const n = wd.nodes[rndRoad()], o = { car: 1, x: n.x, y: n.y, a: 0, sa: 0, sp: 95 + R() * 45, col: CAR_C[i % CAR_C.length], taxi: i % 5 === 0 }; newTrip(o); return o; });
    const PED_C = ['#ef9a9a', '#90caf9', '#a5d6a7', '#ffe082', '#ce93d8', '#ffab91', '#80cbc4', '#f48fb1'];
    const peds = Array.from({ length: 90 }, (_, i) => { const n = wd.nodes[(R() * wd.nodes.length) | 0], o = { x: n.x, y: n.y, a: 0, sa: 0, sp: 24 + R() * 16, col: PED_C[i % PED_C.length], side: R() < .5 ? 1 : -1 }; newTrip(o); return o; });
    const boats = [[900, 2040, 260, 60, .05], [2250, 1990, 200, 70, -.07], [2880, 950, 50, 260, .04]].map(([cx, cy, rx, ry, s], i) => ({ cx, cy, rx, ry, s, ph: i * 2 }));

    /* 🎨 çizim */
    const rr = (x, y, w, h, r) => { ctx.beginPath(); if (ctx.roundRect) ctx.roundRect(x, y, w, h, r); else ctx.rect(x, y, w, h); };
    const darkAt = hf => hf >= 6.5 && hf < 17.5 ? 0 : hf >= 17.5 && hf < 20.5 ? (hf - 17.5) / 3 * .58 : hf >= 5 && hf < 6.5 ? (6.5 - hf) / 1.5 * .58 : .58;
    const vis = (x, y, m) => Math.abs(x - cam.x) * cam.z < cw / 2 + m * cam.z && Math.abs(y - cam.y) * cam.z < ch / 2 + m * cam.z;
    const tagK = () => 1.15 / Math.pow(cam.z, .65);
    function drawGround(t) {
      ctx.fillStyle = '#d3e4bb'; ctx.fillRect(X0 - 400, Y0 - 400, W - X0 + 800, H - Y0 + 800);
      ctx.fillStyle = '#cfe5b3'; ctx.beginPath(); ctx.ellipse(-650, 820, 720, 820, 0, 0, Math.PI * 2); ctx.fill(); ctx.beginPath(); ctx.ellipse(1300, -470, 1550, 470, 0, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = '#e6e0d5'; ctx.beginPath(); ctx.ellipse(1650, 860, 820, 540, -.08, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = '#cfe5b3'; ctx.beginPath(); ctx.ellipse(430, 470, 470, 430, 0, 0, Math.PI * 2); ctx.fill();
      FIELDS.forEach(([x, y, w, h, a, b]) => { ctx.fillStyle = a; ctx.fillRect(x, y, w, h); ctx.strokeStyle = b; ctx.lineWidth = 4; ctx.beginPath(); for (let i = 8; i < w; i += 14) { ctx.moveTo(x + i, y + 4); ctx.lineTo(x + i, y + h - 4); } ctx.stroke(); });
      // 🌳 park + göl
      ctx.fillStyle = '#a7d38b'; ctx.beginPath(); ctx.ellipse(600, 1150, 205, 265, 0, 0, Math.PI * 2); ctx.fill();
      ctx.strokeStyle = '#efe3c4'; ctx.lineWidth = 14; ctx.beginPath(); ctx.ellipse(600, 1150, 130, 169, 0, 0, Math.PI * 2); ctx.stroke();
      ctx.fillStyle = '#7cc3e8'; ctx.beginPath(); ctx.ellipse(600, 1150, 88, 118, 0, 0, Math.PI * 2); ctx.fill();
      ctx.strokeStyle = 'rgba(255,255,255,.5)'; ctx.lineWidth = 2; ctx.beginPath(); ctx.ellipse(600, 1150, 60 + (t * 6) % 24, 85 + (t * 8) % 30, 0, 0, Math.PI * 2); ctx.stroke();
      // 🏖️ kum + deniz
      ctx.lineJoin = ctx.lineCap = 'round';
      ctx.strokeStyle = '#f1dea6'; ctx.lineWidth = 260; ctx.stroke(wd.coastPath);
      const sg = ctx.createLinearGradient(1500, 1700, 2600, 2400); sg.addColorStop(0, '#4fb0e0'); sg.addColorStop(1, '#2a77b3');
      ctx.fillStyle = sg; ctx.fill(wd.seaPath);
      ctx.strokeStyle = 'rgba(255,255,255,.55)'; ctx.lineWidth = 3;
      ctx.beginPath();
      wd.coastN.forEach((c, i) => {
        if (i % 2 || !vis(c.x, c.y, 120)) return;
        const d = 14 + ((t * 14 + i * 7) % 46), x = c.x - c.lx * d, y = c.y - c.ly * d;
        ctx.moveTo(x - Math.cos(c.a) * 16, y - Math.sin(c.a) * 16); ctx.quadraticCurveTo(x - c.lx * 4, y - c.ly * 4, x + Math.cos(c.a) * 16, y + Math.sin(c.a) * 16);
      });
      ctx.stroke();
      // iskele
      ctx.fillStyle = '#a47148'; ctx.fillRect(1395, 1840, 30, 230); ctx.fillRect(1370, 2050, 80, 26);
      ctx.strokeStyle = '#7d5232'; ctx.lineWidth = 2; ctx.beginPath(); for (let y = 1850; y < 2070; y += 12) { ctx.moveTo(1395, y); ctx.lineTo(1425, y); } ctx.stroke();
    }
    function drawRoads() {
      ctx.lineJoin = ctx.lineCap = 'round';
      // kapı yolları
      ctx.strokeStyle = '#d9d3c7'; ctx.lineWidth = 16; ctx.beginPath();
      BLD.forEach(b => { const n = wd.nodes[PL[b.k].node]; ctx.moveTo(b.x, b.y); ctx.lineTo(n.x, n.y); });
      ctx.stroke();
      // 🚶 yaya yolları (kenar + taş döşeme)
      wd.foots.forEach(f => { ctx.strokeStyle = '#c9bb9c'; ctx.lineWidth = 18; ctx.stroke(f.path); });
      wd.foots.forEach(f => { ctx.strokeStyle = '#f1e7d0'; ctx.lineWidth = 14; ctx.stroke(f.path); });
      if (cam.z >= .8) { ctx.setLineDash([2, 7]); ctx.strokeStyle = 'rgba(120,100,70,.18)'; ctx.lineWidth = 12; wd.foots.forEach(f => ctx.stroke(f.path)); ctx.setLineDash([]); }
      // kaldırım (kenar çizgisi + taş), asfalt, şerit çizgisi
      wd.roads.forEach(r => { ctx.strokeStyle = '#b9b1a3'; ctx.lineWidth = ROAD_W[r.t] + SW * 2 + 3; ctx.stroke(r.path); });
      wd.roads.forEach(r => { ctx.strokeStyle = '#ddd6ca'; ctx.lineWidth = ROAD_W[r.t] + SW * 2; ctx.stroke(r.path); });
      wd.roads.forEach(r => { ctx.strokeStyle = '#8f8a82'; ctx.lineWidth = ROAD_W[r.t] + 3; ctx.stroke(r.path); });
      wd.roads.forEach(r => { ctx.strokeStyle = r.t === 'coast' ? '#565c6b' : '#4b4f5c'; ctx.lineWidth = ROAD_W[r.t]; ctx.stroke(r.path); });
      ctx.setLineDash([18, 18]); ctx.strokeStyle = '#f2c94c'; ctx.lineWidth = 3;
      wd.roads.forEach(r => { if (r.t !== 'ring') ctx.stroke(r.path); });
      ctx.setLineDash([]);
      // 🦓 yaya geçitleri: kavşak düğümlerinin dalları üstünde
      if (cam.z < .6) return;
      ctx.fillStyle = 'rgba(255,255,255,.85)';
      wd.nodes.forEach(n => {
        if (n.foot || n.adj.filter(e => !e[2]).length < 3 || !vis(n.x, n.y, 80)) return;
        n.adj.forEach(([j, , f]) => {
          if (f) return;
          const m = wd.nodes[j], a = Math.atan2(m.y - n.y, m.x - n.x), d = n.hw + 22;
          const cx = n.x + Math.cos(a) * d, cy = n.y + Math.sin(a) * d;
          ctx.save(); ctx.translate(cx, cy); ctx.rotate(a);
          for (let k = -n.hw + 4; k < n.hw - 4; k += 9) ctx.fillRect(-6, k, 12, 5);
          ctx.restore();
        });
      });
    }
    function drawPlaza(t) {
      ctx.fillStyle = '#b5d99a'; ctx.beginPath(); ctx.arc(1350, 850, 48, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = '#e9e2d2'; ctx.beginPath(); ctx.arc(1350, 850, 30, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = '#6ec6ff'; ctx.beginPath(); ctx.arc(1350, 850, 23, 0, Math.PI * 2); ctx.fill();
      ctx.strokeStyle = 'rgba(255,255,255,.8)'; ctx.lineWidth = 2;
      for (let i = 0; i < 2; i++) { ctx.beginPath(); ctx.arc(1350, 850, 4 + ((t * 10 + i * 10) % 19), 0, Math.PI * 2); ctx.stroke(); }
    }
    function drawLuna(t) {
      const L = PL.lunapark;
      ctx.fillStyle = '#f7d6e6'; ctx.beginPath(); ctx.arc(L.x, L.y, 108, 0, Math.PI * 2); ctx.fill();
      ctx.setLineDash([8, 8]); ctx.strokeStyle = '#e57399'; ctx.lineWidth = 3; ctx.stroke(); ctx.setLineDash([]);
      const wx = 2100, wy = 1425, wr = 52, a0 = t * .35;
      ctx.strokeStyle = '#6d6d7a'; ctx.lineWidth = 3; ctx.beginPath(); ctx.arc(wx, wy, wr, 0, Math.PI * 2);
      for (let i = 0; i < 8; i++) { const a = a0 + i * Math.PI / 4; ctx.moveTo(wx, wy); ctx.lineTo(wx + Math.cos(a) * wr, wy + Math.sin(a) * wr); }
      ctx.stroke();
      for (let i = 0; i < 8; i++) { const a = a0 + i * Math.PI / 4; ctx.fillStyle = ['#ff6b6b', '#ffd93d', '#4dabf7', '#69db7c'][i % 4]; rr(wx + Math.cos(a) * wr - 7, wy + Math.sin(a) * wr - 6, 14, 12, 3); ctx.fill(); }
      ctx.fillStyle = '#555'; ctx.beginPath(); ctx.arc(wx, wy, 6, 0, Math.PI * 2); ctx.fill();
      const cx = 2192, cy = 1488;
      for (let i = 0; i < 8; i++) { ctx.fillStyle = i % 2 ? '#ff8cc6' : '#fff3b0'; ctx.beginPath(); ctx.moveTo(cx, cy); ctx.arc(cx, cy, 28, t * .8 + i * Math.PI / 4, t * .8 + (i + 1) * Math.PI / 4); ctx.fill(); }
      ctx.fillStyle = '#e53935'; ctx.beginPath(); ctx.arc(cx, cy, 7, 0, Math.PI * 2); ctx.fill();
      ctx.strokeStyle = '#e53935'; ctx.lineWidth = 4; ctx.beginPath();
      for (let i = 0; i <= 40; i++) { const a = i / 40 * Math.PI * 2, r = 88 + Math.sin(a * 5) * 6, x = L.x + Math.cos(a) * r, y = L.y + Math.sin(a) * r; i ? ctx.lineTo(x, y) : ctx.moveTo(x, y); }
      ctx.stroke();
      const ca = t * .9; ctx.fillStyle = '#ffd93d'; rr(L.x + Math.cos(ca) * 88 - 6, L.y + Math.sin(ca) * 88 - 6, 12, 12, 3); ctx.fill();
    }
    function drawTrees() {
      const T = wd.trees.filter(p => vis(p[0], p[1], 30));
      ctx.fillStyle = 'rgba(0,0,0,.14)'; ctx.beginPath(); T.forEach(([x, y, r]) => { ctx.moveTo(x + 5 + r, y + 6); ctx.arc(x + 5, y + 6, r, 0, Math.PI * 2); }); ctx.fill();
      ['#5f9e4c', '#4c8a43'].forEach((c, s) => { ctx.fillStyle = c; ctx.beginPath(); T.forEach(([x, y, r, k]) => { if (k !== s) return; ctx.moveTo(x + r, y); ctx.arc(x, y, r, 0, Math.PI * 2); }); ctx.fill(); });
      ctx.fillStyle = 'rgba(255,255,255,.16)'; ctx.beginPath(); T.forEach(([x, y, r]) => { ctx.moveTo(x - r * .25 + r * .45, y - r * .3); ctx.arc(x - r * .25, y - r * .3, r * .45, 0, Math.PI * 2); }); ctx.fill();
      ctx.strokeStyle = '#3f8f45'; ctx.lineWidth = 5; ctx.lineCap = 'round'; ctx.beginPath();
      wd.palms.forEach(([x, y, r]) => { if (!vis(x, y, 30)) return; for (let i = 0; i < 5; i++) { const a = r + i * 1.26; ctx.moveTo(x, y); ctx.quadraticCurveTo(x + Math.cos(a) * 12, y + Math.sin(a) * 12 - 4, x + Math.cos(a) * 20, y + Math.sin(a) * 20); } });
      ctx.stroke();
      ctx.fillStyle = '#8d6e3f'; ctx.beginPath(); wd.palms.forEach(([x, y]) => { if (vis(x, y, 30)) { ctx.moveTo(x + 4, y); ctx.arc(x, y, 4, 0, Math.PI * 2); } }); ctx.fill();
      wd.umbs.forEach(([x, y, c]) => {
        if (!vis(x, y, 30)) return;
        ctx.fillStyle = '#fff'; ctx.fillRect(x + 6, y + 2, 16, 8);
        ctx.fillStyle = c; ctx.beginPath(); ctx.arc(x, y, 13, 0, Math.PI * 2); ctx.fill();
        ctx.strokeStyle = 'rgba(255,255,255,.7)'; ctx.lineWidth = 1.5; ctx.beginPath(); for (let i = 0; i < 4; i++) { const a = i * Math.PI / 4; ctx.moveTo(x - Math.cos(a) * 13, y - Math.sin(a) * 13); ctx.lineTo(x + Math.cos(a) * 13, y + Math.sin(a) * 13); } ctx.stroke();
      });
    }
    function drawFill(f) {
      if (!vis(f.x, f.y, 70)) return;
      const lo = cam.z < .6;
      ctx.save(); ctx.translate(f.x, f.y); ctx.rotate(f.a);
      const x = -f.w / 2, y = -f.d / 2;
      ctx.fillStyle = 'rgba(20,20,40,.2)'; ctx.fillRect(x + 5, y + 7, f.w, f.d);
      ctx.fillStyle = f.c; rr(x, y, f.w, f.d, 4); ctx.fill();
      if (!lo) {
        if (f.z === 'ev') {
          ctx.fillStyle = 'rgba(255,255,255,.18)'; ctx.fillRect(x, y, f.w, f.d / 2);
          ctx.strokeStyle = 'rgba(0,0,0,.25)'; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(x + 5, 0); ctx.lineTo(-x - 5, 0); ctx.stroke();
        } else {
          ctx.strokeStyle = 'rgba(255,255,255,.3)'; ctx.lineWidth = 2; rr(x + 5, y + 5, f.w - 10, f.d - 10, 3); ctx.stroke();
          if (f.tall) { ctx.fillStyle = 'rgba(0,0,0,.16)'; ctx.fillRect(x + 8, y + 10, 10, 8); ctx.fillRect(-x - 20, -y - 18, 12, 9); }
          else for (let i = 0; i * 8 < f.w; i++) { ctx.fillStyle = i % 2 ? '#fff' : f.aw; ctx.fillRect(x + i * 8, y - 3, Math.min(8, f.w - i * 8), 10); }
        }
      }
      if (sel === f.id || (f.home && sel === f.home)) { ctx.strokeStyle = '#ff3d8b'; ctx.lineWidth = 4; ctx.setLineDash([8, 5]); rr(x - 6, y - 6, f.w + 12, f.d + 12, 8); ctx.stroke(); ctx.setLineDash([]); }
      ctx.restore();
      if (!lo && cam.z >= .9) { ctx.font = `${Math.round(Math.min(f.w, f.d) * .42)}px ${EMO}`; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText(f.ic, f.x, f.y + 2); }
    }
    // 🪧 pano: ayak gölgesi, çerçeve, reklamın fotoğrafı + adı (yazı hep düz okunur)
    function drawBills() {
      wd.bills.forEach((b, i) => {
        if (!vis(b.x, b.y, 80)) return;
        const ad = adOf(b, i);
        let a = b.a; if (a > Math.PI / 2) a -= Math.PI * 2; if (a < -Math.PI / 2 || a > Math.PI / 2) a += Math.PI;
        ctx.save(); ctx.translate(b.x, b.y); ctx.rotate(a);
        const w = b.w, d = b.d;
        ctx.fillStyle = 'rgba(20,20,40,.25)'; ctx.fillRect(-w / 2 + 5, -d / 2 + 7, w, d);
        ctx.fillStyle = '#2b2140'; rr(-w / 2 - 3, -d / 2 - 3, w + 6, d + 6, 5); ctx.fill();
        const g = ctx.createLinearGradient(-w / 2, 0, w / 2, 0); g.addColorStop(0, '#ff3d8b'); g.addColorStop(1, '#7b2ff7');
        ctx.fillStyle = g; rr(-w / 2, -d / 2, w, d, 3); ctx.fill();
        if (ad) {
          const im = imgOf(ad.photo);
          if (im) { const r = Math.min(im.naturalWidth, im.naturalHeight); ctx.save(); rr(-w / 2 + 2, -d / 2 + 2, d - 4, d - 4, 3); ctx.clip(); ctx.drawImage(im, (im.naturalWidth - r) / 2, (im.naturalHeight - r) * .2, r, r, -w / 2 + 2, -d / 2 + 2, d - 4, d - 4); ctx.restore(); }
          else { ctx.font = `${d * .6}px ${EMO}`; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText(ad.ic, -w / 2 + d / 2, 1); }
          if (cam.z >= .55) {
            ctx.fillStyle = '#fff'; ctx.textAlign = 'left'; ctx.textBaseline = 'middle';
            ctx.font = `900 11px Nunito,${EMO}`; ctx.fillText(String(ad.n).slice(0, 18), -w / 2 + d + 2, -5);
            ctx.font = `700 8px Nunito,${EMO}`; ctx.fillStyle = 'rgba(255,255,255,.85)'; ctx.fillText(String(ad.d).slice(0, 26), -w / 2 + d + 2, 7);
          }
        }
        if (sel === b.id) { ctx.strokeStyle = '#ffd400'; ctx.lineWidth = 3; ctx.setLineDash([8, 5]); rr(-w / 2 - 8, -d / 2 - 8, w + 16, d + 16, 8); ctx.stroke(); ctx.setLineDash([]); }
        ctx.restore();
      });
    }
    // 🎉 etkinlik: mekânın çevresinde nabız halkası + sallanan rozet; sahnede ışık / kulüpte köpük
    function drawEvents(t) {
      evNow(lastH).forEach(e => {
        const p = PL[e.k];
        if (!p || !vis(p.x, p.y, 300)) return;
        const g = (t * 40) % 40, rx = (p.k === 'sahil' ? 260 : p.rx || Math.max(p.w, p.h) / 2 + 20) + g, ry = (p.k === 'sahil' ? 50 : p.ry || p.rx || Math.max(p.w, p.h) / 2 + 20) + g;
        ctx.strokeStyle = `rgba(255,61,139,${.6 - g / 70})`; ctx.lineWidth = 4;
        ctx.beginPath(); ctx.ellipse(p.x, p.y, rx, ry, 0, 0, Math.PI * 2); ctx.stroke();
        if (e.id === 'kopuk') { ctx.fillStyle = 'rgba(255,255,255,.75)'; for (let i = 0; i < 14; i++) { const q = (t * .4 + i * .13) % 1, ang = i * 2.4; ctx.beginPath(); ctx.arc(p.x + Math.cos(ang) * (30 + q * 60), p.y + Math.sin(ang) * (20 + q * 40) - q * 30, 4 + (i % 3) * 2, 0, Math.PI * 2); ctx.fill(); } }
        if (e.id === 'konser') { ctx.fillStyle = '#2b2140'; rr(1480, 1745, 90, 34, 6); ctx.fill(); ['#ff4fd8', '#4fc3ff', '#ffd400'].forEach((c, i) => { ctx.fillStyle = c; ctx.beginPath(); ctx.arc(1495 + i * 30, 1752 + Math.sin(t * 6 + i) * 2, 5, 0, Math.PI * 2); ctx.fill(); }); }
        const by = p.rx ? p.y - (p.ry || p.rx) - 26 : p.k === 'sahil' ? p.y - 70 : p.y - p.h / 2 - 34, k = tagK();
        ctx.font = `${26 * k}px ${EMO}`; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
        ctx.fillStyle = '#fff'; ctx.beginPath(); ctx.arc(p.x, by + Math.sin(t * 3) * 4, 18 * k, 0, Math.PI * 2); ctx.fill();
        ctx.strokeStyle = '#ff3d8b'; ctx.lineWidth = 3; ctx.stroke();
        ctx.fillText(e.ic, p.x, by + Math.sin(t * 3) * 4 + 1);
      });
    }
    function drawBld(b, t, dk) {
      if (!vis(b.x, b.y, Math.max(b.w, b.h))) return;
      const x = b.x - b.w / 2, y = b.y - b.h / 2;
      if (b.yard) { ctx.fillStyle = '#bfe3a5'; rr(x - 14, y - 12, b.w + 28, b.h + 24, 10); ctx.fill(); ctx.strokeStyle = '#fff'; ctx.lineWidth = 2; ctx.stroke(); }
      ctx.fillStyle = 'rgba(20,20,40,.22)'; rr(x + 7, y + 9, b.w, b.h, 8); ctx.fill();
      ctx.fillStyle = b.c; rr(x, y, b.w, b.h, b.t === 'ev' ? 5 : 8); ctx.fill();
      if (b.t === 'ev') {
        const hor = b.w >= b.h;
        ctx.fillStyle = 'rgba(255,255,255,.18)'; hor ? ctx.fillRect(x, y, b.w, b.h / 2) : ctx.fillRect(x, y, b.w / 2, b.h);
        ctx.strokeStyle = 'rgba(0,0,0,.25)'; ctx.lineWidth = 2; ctx.beginPath();
        hor ? (ctx.moveTo(x + 6, b.y), ctx.lineTo(x + b.w - 6, b.y)) : (ctx.moveTo(b.x, y + 6), ctx.lineTo(b.x, y + b.h - 6)); ctx.stroke();
      } else {
        ctx.strokeStyle = 'rgba(255,255,255,.35)'; ctx.lineWidth = 3; rr(x + 6, y + 6, b.w - 12, b.h - 12, 5); ctx.stroke();
        if (b.t === 'kule') { ctx.fillStyle = 'rgba(0,0,0,.18)'; [[.12, .12], [.75, .15]].forEach(([fx, fy]) => ctx.fillRect(x + b.w * fx, y + b.h * fy, 12, 10)); }
      }
      if (b.fx === 'heli') { ctx.strokeStyle = '#e53935'; ctx.lineWidth = 3; ctx.beginPath(); ctx.arc(x + b.w - 30, y + b.h - 30, 18, 0, Math.PI * 2); ctx.stroke(); ctx.fillStyle = '#e53935'; ctx.font = 'bold 18px Nunito,sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText('H', x + b.w - 30, y + b.h - 29); ctx.fillRect(x + 16, y + 24, 26, 8); ctx.fillRect(x + 25, y + 15, 8, 26); }
      if (b.fx === 'heart') { const s = 9, hx = b.x + b.w / 2 - 16, hy = y + 14; ctx.fillStyle = '#fff'; ctx.beginPath(); ctx.moveTo(hx, hy + s); ctx.bezierCurveTo(hx - s * 1.6, hy - s * .2, hx - s * .6, hy - s * 1.3, hx, hy - s * .3); ctx.bezierCurveTo(hx + s * .6, hy - s * 1.3, hx + s * 1.6, hy - s * .2, hx, hy + s); ctx.fill(); }
      if (b.fx === 'pool') { ctx.fillStyle = '#4fc3f7'; rr(x + 14, y + b.h - 38, b.w - 28, 24, 6); ctx.fill(); }
      if (b.fx === 'cross') { ctx.fillStyle = '#8d7b62'; ctx.fillRect(b.x - 4, y + 10, 8, 30); ctx.fillRect(b.x - 12, y + 18, 24, 7); }
      if (b.fx === 'bulbs') {
        const on = Math.floor(t * 4) % 2, step = 14;
        for (let i = 0, per = 2 * (b.w + b.h); i < per; i += step) {
          let px, py;
          if (i < b.w) { px = x + i; py = y; } else if (i < b.w + b.h) { px = x + b.w; py = y + i - b.w; } else if (i < 2 * b.w + b.h) { px = x + b.w - (i - b.w - b.h); py = y + b.h; } else { px = x; py = y + b.h - (i - 2 * b.w - b.h); }
          ctx.fillStyle = (i / step) % 2 === on ? '#fff7c2' : '#a07818';
          ctx.beginPath(); ctx.arc(px, py, 3, 0, Math.PI * 2); ctx.fill();
        }
      }
      if (b.fx === 'neon' || b.fx === 'beams') { ctx.strokeStyle = b.glow; ctx.lineWidth = dk > .1 ? 4 : 2.5; rr(x + 3, y + 3, b.w - 6, b.h - 6, 6); ctx.stroke(); }
      if (sel === b.k) { ctx.strokeStyle = '#ff3d8b'; ctx.lineWidth = 4; ctx.setLineDash([10, 6]); rr(x - 8, y - 8, b.w + 16, b.h + 16, 12); ctx.stroke(); ctx.setLineDash([]); }
      ctx.font = `${Math.round(Math.min(b.w, b.h) * .42)}px ${EMO}`; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillText(b.ic, b.x, b.y + 2);
    }
    function drawVehicles() {
      cars.forEach(o => {
        if (!vis(o.x, o.y, 30)) return;
        ctx.save(); ctx.translate(o.x, o.y); ctx.rotate(o.sa);
        ctx.fillStyle = 'rgba(0,0,0,.25)'; rr(-13, -5, 28, 15, 4); ctx.fill();
        ctx.fillStyle = o.taxi ? '#ffd400' : o.col; rr(-14, -7.5, 28, 15, 4); ctx.fill();
        ctx.fillStyle = 'rgba(30,40,60,.7)'; ctx.fillRect(4, -5.5, 5, 11); ctx.fillRect(-10, -5.5, 4, 11);
        ctx.restore();
      });
      boats.forEach(b => {
        const a = tNow / 1000 * b.s + b.ph, x = b.cx + Math.cos(a) * b.rx, y = b.cy + Math.sin(a) * b.ry, dir = a + (b.s > 0 ? Math.PI / 2 : -Math.PI / 2);
        if (!vis(x, y, 40)) return;
        ctx.save(); ctx.translate(x, y); ctx.rotate(dir);
        ctx.strokeStyle = 'rgba(255,255,255,.5)'; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(-18, -6); ctx.lineTo(-40, -12); ctx.moveTo(-18, 6); ctx.lineTo(-40, 12); ctx.stroke();
        ctx.fillStyle = '#fff'; ctx.beginPath(); ctx.moveTo(20, 0); ctx.lineTo(-16, -9); ctx.lineTo(-16, 9); ctx.closePath(); ctx.fill();
        ctx.fillStyle = '#ff7043'; ctx.beginPath(); ctx.moveTo(4, 0); ctx.lineTo(-10, -6); ctx.lineTo(-10, 6); ctx.closePath(); ctx.fill();
        ctx.restore();
      });
      ctx.lineWidth = 2; ctx.strokeStyle = 'rgba(0,0,0,.35)';
      peds.forEach(o => {
        if (!vis(o.x, o.y, 20)) return;
        ctx.fillStyle = o.col; ctx.beginPath(); ctx.arc(o.x, o.y, 4, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
      });
    }
    function drawNight(dk, hf, t) {
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const eve = hf >= 16.5 && hf < 20 ? Math.sin((hf - 16.5) / 3.5 * Math.PI) * .14 : 0;
      if (eve) { ctx.fillStyle = `rgba(255,120,60,${eve})`; ctx.fillRect(0, 0, cw, ch); }
      if (dk > 0) { ctx.fillStyle = `rgba(12,18,48,${dk})`; ctx.fillRect(0, 0, cw, ch); }
      setCam();
      if (dk < .12) return;
      const k = Math.min(1, dk / .58);
      ctx.globalCompositeOperation = 'lighter';
      ctx.globalAlpha = .55 * k;
      const lg = glow('#ffd27a');
      wd.lamps.forEach(([x, y]) => { if (vis(x, y, 40)) ctx.drawImage(lg, x - 30, y - 30, 60, 60); });
      ctx.globalAlpha = .28 * k;
      const wg = glow('#ffcf80');
      wd.fill.forEach(f => { if (vis(f.x, f.y, 60) && hash(f.id) % 3) ctx.drawImage(wg, f.x - f.w * .6, f.y - f.d * .6, f.w * 1.2, f.d * 1.2); });
      BLD.forEach(b => {
        if (!vis(b.x, b.y, 200)) return;
        const g = glow(b.glow || '#ffcf80'), s = Math.max(b.w, b.h) * (b.glow ? 2.2 : 1.3);
        ctx.globalAlpha = (b.glow ? .75 : .35) * k * (b.fx === 'bulbs' ? .85 + Math.sin(t * 5) * .15 : 1);
        ctx.drawImage(g, b.x - s / 2, b.y - s / 2, s, s);
      });
      ctx.globalAlpha = .5 * k;
      cars.forEach(o => { if (!vis(o.x, o.y, 60)) return; ctx.drawImage(glow('#fff6d0'), o.x + Math.cos(o.sa) * 30 - 22, o.y + Math.sin(o.sa) * 30 - 22, 44, 44); });
      ctx.globalAlpha = .7 * k; const L = PL.lunapark; ctx.drawImage(glow('#ff8cc6'), L.x - 140, L.y - 140, 280, 280);
      // 🪧 panolar gece ışıklı
      ctx.globalAlpha = .45 * k; wd.bills.forEach(b => { if (vis(b.x, b.y, 80)) ctx.drawImage(glow('#ffb3dd'), b.x - 80, b.y - 50, 160, 100); });
      // 🎆 havai fişek
      if (evAt('lunapark', lastH) && evAt('lunapark', lastH).id === 'fisek') {
        ctx.globalAlpha = 1;
        for (let i = 0; i < 4; i++) {
          const q = (t * .45 + i * .27) % 1, cx = L.x + ((hash('fx' + i + Math.floor(t * .45 + i * .27)) % 240) - 120), cy = L.y - 60 - (hash('fy' + i + Math.floor(t * .45 + i * .27)) % 140);
          ctx.fillStyle = ['#ff4fd8', '#ffd400', '#4fc3ff', '#7CFC00'][i];
          for (let j = 0; j < 14; j++) { const ang = j / 14 * Math.PI * 2; ctx.globalAlpha = 1 - q; ctx.beginPath(); ctx.arc(cx + Math.cos(ang) * q * 70, cy + Math.sin(ang) * q * 70 + q * q * 20, 3, 0, Math.PI * 2); ctx.fill(); }
        }
      }
      const kb = PL.kulup;
      ctx.globalAlpha = .22 * k;
      ['#ff4fd8', '#4fc3ff', '#b6ff4f'].forEach((c, i) => {
        const a = t * (.9 + i * .3) + i * 2.1;
        ctx.fillStyle = c; ctx.beginPath(); ctx.moveTo(kb.x, kb.y); ctx.lineTo(kb.x + Math.cos(a - .12) * 260, kb.y + Math.sin(a - .12) * 260); ctx.lineTo(kb.x + Math.cos(a + .12) * 260, kb.y + Math.sin(a + .12) * 260); ctx.closePath(); ctx.fill();
      });
      ctx.globalAlpha = 1; ctx.globalCompositeOperation = 'source-over';
    }
    function drawSquare(x, y, s, c, photo, border, bw) {
      ctx.fillStyle = 'rgba(0,0,0,.28)'; rr(x - s / 2 + 3, y - s / 2 + 4, s, s, 6); ctx.fill();
      ctx.save(); rr(x - s / 2, y - s / 2, s, s, 6); ctx.clip();
      const im = imgOf(photo);
      if (im) { const r = Math.min(im.naturalWidth, im.naturalHeight); ctx.drawImage(im, (im.naturalWidth - r) / 2, (im.naturalHeight - r) * .2, r, r, x - s / 2, y - s / 2, s, s); }
      else { const g = ctx.createLinearGradient(x - s / 2, y - s / 2, x + s / 2, y + s / 2), cl = c.colors || ['#a65ebb', '#d77baf']; g.addColorStop(0, cl[0]); g.addColorStop(1, cl[1]); ctx.fillStyle = g; ctx.fillRect(x - s / 2, y - s / 2, s, s); ctx.fillStyle = '#fff'; ctx.font = `bold ${Math.round(s * .5)}px Nunito,sans-serif`; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText((c.name || '?').charAt(0).toLocaleUpperCase('tr'), x, y + 1); }
      ctx.restore();
      ctx.strokeStyle = border; ctx.lineWidth = bw; rr(x - s / 2, y - s / 2, s, s, 6); ctx.stroke();
    }
    const emoOf = s => { const m = String(s || '').match(/\p{Extended_Pictographic}/gu); return m ? m[m.length - 1] : ''; };
    const first = a => String((a.c || a).name || '').split(' ')[0];
    const shownName = a => (!a.str || (met[a.id] || {}).n || (talk && talk.a === a && talk.named)) ? first(a) : '';
    const borderOf = a => a.skin;
    function drawPeople(t) {
      const lbl = cam.z >= .7;
      ag.forEach(a => {
        if (a.st === 'in') return;
        if (!vis(a.x, a.y, 40)) return;
        const bob = a.st === 'walk' ? Math.abs(Math.sin(t * 9 + a.sp)) * 2 : 0;
        if (talk && talk.a === a) { ctx.strokeStyle = 'rgba(255,61,139,.7)'; ctx.lineWidth = 2.5; ctx.beginPath(); ctx.arc(a.x, a.y, CS * .8 + Math.sin(t * 4) * 2, 0, Math.PI * 2); ctx.stroke(); }
        drawSquare(a.x, a.y - bob, CS, a.c, a.c.photo, borderOf(a), 2.5);
        if (a.st !== 'walk' && a.w) { ctx.font = `10px ${EMO}`; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText(emoOf(a.w.doing), a.x + CS / 2, a.y - CS / 2); }
        if (lbl) nameTag(shownName(a) || '❔', a.x, a.y + CS / 2 + 9 * tagK());
      });
      const u = api.user(), bob = me.path ? Math.abs(Math.sin(t * 9)) * 1.5 : 0;
      ctx.strokeStyle = 'rgba(255,61,139,.6)'; ctx.lineWidth = 2.5; ctx.beginPath(); ctx.arc(me.x, me.y, CS * .75 + (t * 10) % 7, 0, Math.PI * 2); ctx.stroke();
      drawSquare(me.x, me.y - bob, CS + 3, { name: u.name || 'Sen', colors: u.colors || ['#0089c4', '#c2185b'] }, u.photo, '#ff3d8b', 3);
      if (lbl) nameTag(tr('Sen'), me.x, me.y + CS / 2 + 11 * tagK(), '#ff3d8b');
      if (me.dest) { const { x, y } = me.dest; ctx.fillStyle = '#ff3d8b'; ctx.beginPath(); ctx.arc(x, y - 18, 8, Math.PI, 0); ctx.lineTo(x, y - 4); ctx.closePath(); ctx.fill(); ctx.fillStyle = '#fff'; ctx.beginPath(); ctx.arc(x, y - 18, 3, 0, Math.PI * 2); ctx.fill(); }
    }
    function nameTag(s, x, y, bg) {
      const k = tagK();
      ctx.font = `800 ${11 * k}px Nunito,${EMO}`; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      const w = ctx.measureText(s).width + 10 * k;
      ctx.fillStyle = bg || 'rgba(20,16,36,.78)'; rr(x - w / 2, y - 8 * k, w, 16 * k, 8 * k); ctx.fill();
      ctx.fillStyle = '#fff'; ctx.fillText(s, x, y + .5 * k);
    }
    // 🏷️ ad sadece seçilen binada; içerideki karakterler binanın üstünde küçük kare
    function drawLabels() {
      const inside = {};
      ag.forEach(a => { if (a.st === 'in') (inside[a.k] = inside[a.k] || []).push(a); });
      Object.values(PL).forEach(b => {
        if (b.area) return;
        const L = inside[b.k];
        if (!L || !vis(b.x, b.y, 100)) return;
        const s = 14, n = Math.min(4, L.length), x0 = b.x - b.w / 2 + 4, y0 = b.y - b.h / 2 - s / 2 - 3;
        L.slice(0, n).forEach((a, i) => drawSquare(x0 + s / 2 + i * (s + 3), y0, s, a.c, a.c.photo, '#fff', 2));
        if (L.length > n) nameTag('+' + (L.length - n), x0 + n * (s + 3) + 10, y0);
      });
      const b = sel && (PL[sel] || wd.FM[sel]);
      if (!b) return;
      const by = b.area ? (b.k === 'sahil' ? b.y + 40 : b.y + (b.ry || 0) + 14) : b.y + (b.h || b.d) / 2 + 22;
      const k = tagK(), s = `${b.ic} ${tr(b.n)}`;
      ctx.font = `800 ${14 * k}px Nunito,${EMO}`; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      const w = ctx.measureText(s).width + 18 * k;
      ctx.fillStyle = '#ff3d8b'; rr(b.x - w / 2, by - 12 * k, w, 24 * k, 12 * k); ctx.fill();
      ctx.fillStyle = '#fff'; ctx.fillText(s, b.x, by + k);
    }
    function setCam() { ctx.setTransform(dpr * cam.z, 0, 0, dpr * cam.z, dpr * (cw / 2 - cam.x * cam.z), dpr * (ch / 2 - cam.y * cam.z)); }

    /* 🚪 iç mekân: binaya girince harita yerine oda çizilir; şehir saati ve herkes akmaya devam eder.
     * İçeridekiler (st 'in', aynı bina) odanın sp yerlerinde; dokun → kartı, konuşmak için mesafe yok. Sen odada dokunduğun yere yürürsün (mobilyanın üstüne değil) */
    let inside = null;
    const exitBtn = root.querySelector('#ctExit');
    const inType = k => IN_OF[k] || (wd.FM[k] ? (wd.FM[k].tall ? 'ofis' : { ev: 'ev', dt: 'dukkan', ex: 'bar', cs: 'kafe' }[wd.FM[k].z]) : 'ev');
    const placeOf = k => PL[k] || wd.FM[k];
    const doorOf = k => { const p = placeOf(k); if (PL[k]) return towardB(PL[k].node, PL[k].x, PL[k].y); return [p.x + Math.sin(p.a) * (p.d / 2 + 14), p.y - Math.cos(p.a) * (p.d / 2 + 14)]; };
    function enterB(k) {
      const p = placeOf(k);
      if (!p || p.area) return;
      closeCard();
      inside = { k, L: IN[inType(k)] };
      me.path = null; me.dest = null; me.chase = null;
      me.ix = me.itx = RW / 2; me.iy = me.ity = RH - 30; me.ipath = null;
      [me.x, me.y] = doorOf(k); me.node = null;
      exitBtn.hidden = false; root.querySelector('.ct-side').style.display = 'none';
      api.notify(`${p.ic} ${tr(p.n)} · ${tr('içeridesin')}`, '🚪');
    }
    function exitB() { if (talk) endTalk(); closeCard(); inside = null; exitBtn.hidden = true; root.querySelector('.ct-side').style.display = ''; follow0 = true; }
    exitBtn.onclick = exitB;    const inAgents = () => inside ? ag.filter(a => a.k === inside.k && (a.st === 'in' || (talk && talk.a === a && a.st !== 'walk'))) : [];
    const inBlocked = (x, y) => inside.L.it.some(([, ix, iy, w, h]) => x > ix - 8 && x < ix + w + 8 && y > iy - 8 && y < iy + h + 8);
    // 🧭 odada yürüme: duvar içi + mobilya dışı; gidilemeyen yere dokununca en yakın boş nokta, düz gidilemiyorsa bir ara noktadan dolaş
    const inFree = (x, y) => x >= 16 && x <= RW - 16 && y >= 16 && y <= RH - 16 && !inBlocked(x, y);
    const inSeg = (x0, y0, x1, y1) => { const n = Math.ceil(Math.hypot(x1 - x0, y1 - y0) / 6); for (let i = 1; i <= n; i++) if (!inFree(x0 + (x1 - x0) * i / n, y0 + (y1 - y0) * i / n)) return false; return true; };
    function nearFree(x, y) {
      x = Math.max(16, Math.min(RW - 16, x)); y = Math.max(16, Math.min(RH - 16, y));
      if (inFree(x, y)) return [x, y];
      for (let r = 8; r <= 260; r += 8) {
        let best = null;
        for (let k = 0; k < 24; k++) { const a = k / 24 * Math.PI * 2, px = x + Math.cos(a) * r, py = y + Math.sin(a) * r; if (inFree(px, py)) { const d = Math.hypot(px - me.ix, py - me.iy); if (!best || d < best[2]) best = [px, py, d]; } }
        if (best) return [best[0], best[1]];
      }
      return null;
    }
    function inRoute(tx, ty) {
      if (inSeg(me.ix, me.iy, tx, ty)) return [[tx, ty]];
      let best = null;
      for (let gx = 20; gx < RW; gx += 20) for (let gy = 20; gy < RH; gy += 20) {
        if (!inFree(gx, gy)) continue;
        const L = Math.hypot(gx - me.ix, gy - me.iy) + Math.hypot(tx - gx, ty - gy);
        if (best && L >= best[0]) continue;
        if (inSeg(me.ix, me.iy, gx, gy) && inSeg(gx, gy, tx, ty)) best = [L, gx, gy];
      }
      return best ? [[best[1], best[2]], [tx, ty]] : [[tx, ty]];
    }
    const room = () => { const s = Math.min((cw - 24) / RW, (ch - 190) / RH), ox = (cw - RW * s) / 2, oy = 100 + Math.max(0, (ch - 190 - RH * s) / 2); return { s, ox, oy }; };
    function drawInside(t, dk) {
      const L = inside.L, { s, ox, oy } = room();
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.fillStyle = '#1d1630'; ctx.fillRect(0, 0, cw, ch);
      ctx.setTransform(dpr * s, 0, 0, dpr * s, dpr * ox, dpr * oy);
      // duvar + zemin (fayans çizgileri) + kapı
      ctx.fillStyle = L.w; rr(-16, -16, RW + 32, RH + 32, 14); ctx.fill();
      ctx.fillStyle = L.f; ctx.fillRect(0, 0, RW, RH);
      ctx.strokeStyle = 'rgba(0,0,0,.06)'; ctx.lineWidth = 1; ctx.beginPath();
      for (let x = 40; x < RW; x += 40) { ctx.moveTo(x, 0); ctx.lineTo(x, RH); } for (let y = 40; y < RH; y += 40) { ctx.moveTo(0, y); ctx.lineTo(RW, y); } ctx.stroke();
      ctx.fillStyle = L.f; ctx.fillRect(RW / 2 - 34, RH - 2, 68, 20);
      ctx.fillStyle = 'rgba(0,0,0,.25)'; ctx.fillRect(RW / 2 - 34, RH + 12, 68, 4);
      // 🪩 kulüpte dönen ışıklar
      if (inside.L === IN.kulup) ['#ff4fd8', '#4fc3ff', '#b6ff4f'].forEach((c, i) => { ctx.globalAlpha = .18; ctx.fillStyle = c; const a = t * (1 + i * .3) + i * 2; ctx.beginPath(); ctx.moveTo(280, 40); ctx.lineTo(280 + Math.cos(a - .2) * 420, 40 + Math.sin(a - .2) * 420); ctx.lineTo(280 + Math.cos(a + .2) * 420, 40 + Math.sin(a + .2) * 420); ctx.fill(); ctx.globalAlpha = 1; });
      L.it.forEach(([ic, x, y, w, h, c]) => {
        ctx.fillStyle = 'rgba(0,0,0,.18)'; rr(x + 4, y + 5, w, h, 8); ctx.fill();
        ctx.fillStyle = c; rr(x, y, w, h, 8); ctx.fill();
        ctx.strokeStyle = 'rgba(255,255,255,.25)'; ctx.lineWidth = 2; rr(x + 3, y + 3, w - 6, h - 6, 6); ctx.stroke();
        ctx.font = `${Math.min(30, Math.max(16, Math.min(w, h) * .6))}px ${EMO}`; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText(ic, x + w / 2, y + h / 2 + 1);
      });
      // 👥 içeridekiler
      const list = inAgents().sort((p, q) => (p.id > q.id ? 1 : -1)), S2 = 34;
      list.forEach((a, i) => {
        const [sx, sy] = L.sp[i % L.sp.length], k2 = Math.floor(i / L.sp.length);
        a.ix = sx + k2 * 30 + Math.sin(t * 1.3 + i) * 3; a.iy = sy + k2 * 12 + Math.cos(t * 1.1 + i) * 2;
        if (talk && talk.a === a) { ctx.strokeStyle = 'rgba(255,61,139,.7)'; ctx.lineWidth = 3; ctx.beginPath(); ctx.arc(a.ix, a.iy, S2 * .8, 0, Math.PI * 2); ctx.stroke(); }
        drawSquare(a.ix, a.iy, S2, a.c, a.c.photo, a.skin, 3);
        if (a.w) { ctx.font = `14px ${EMO}`; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText(emoOf(a.w.doing), a.ix + S2 / 2, a.iy - S2 / 2); }
        nameTagAt(shownName(a) || '❔', a.ix, a.iy + S2 / 2 + 10);
      });
      // 🧍 sen: yürürken yaylanır ve hafif yalpalar (dışarıdaki gibi); gideceğin yerde 📍 işaret
      const u = api.user(), moving = Math.hypot(me.itx - me.ix, me.ity - me.iy) > 1 || !!(me.ipath && me.ipath.length);
      const bob = moving ? Math.abs(Math.sin(t * 10)) * 4 : 0, tilt = moving ? Math.sin(t * 10) * .08 : 0;
      if (moving) {
        const [gx, gy] = me.ipath && me.ipath.length ? me.ipath[me.ipath.length - 1] : [me.itx, me.ity];
        ctx.fillStyle = '#ff3d8b'; ctx.beginPath(); ctx.arc(gx, gy - 14, 7, Math.PI, 0); ctx.lineTo(gx, gy - 2); ctx.closePath(); ctx.fill();
        ctx.fillStyle = '#fff'; ctx.beginPath(); ctx.arc(gx, gy - 14, 2.5, 0, Math.PI * 2); ctx.fill();
      }
      ctx.fillStyle = 'rgba(0,0,0,.18)'; ctx.beginPath(); ctx.ellipse(me.ix, me.iy + S2 / 2 + 3, S2 / 2 - bob, 5, 0, 0, Math.PI * 2); ctx.fill();
      ctx.save(); ctx.translate(me.ix, me.iy - bob); ctx.rotate(tilt);
      drawSquare(0, 0, S2 + 4, { name: u.name || 'Sen', colors: u.colors || ['#0089c4', '#c2185b'] }, u.photo, '#ff3d8b', 4);
      ctx.restore();
      nameTagAt(tr('Sen'), me.ix, me.iy + S2 / 2 + 12, '#ff3d8b');
      if (dk > .2 && inside.L !== IN.kulup) { ctx.setTransform(dpr, 0, 0, dpr, 0, 0); ctx.fillStyle = `rgba(255,190,110,${dk * .12})`; ctx.fillRect(0, 0, cw, ch); }
      // oda adı
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const p = placeOf(inside.k), title = `${p.ic} ${tr(p.n)} · ${list.length} ${tr('kişi')}`;
      ctx.font = `900 15px Nunito,${EMO}`; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      const tw = ctx.measureText(title).width + 24; ctx.fillStyle = 'rgba(22,16,40,.8)'; rr(cw / 2 - tw / 2, oy - 34 - 14, tw, 28, 8); ctx.fill();
      ctx.fillStyle = '#fff'; ctx.fillText(title, cw / 2, oy - 34);
    }
    function nameTagAt(s, x, y, bg) {
      ctx.font = `800 12px Nunito,${EMO}`; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      const w = ctx.measureText(s).width + 12;
      ctx.fillStyle = bg || 'rgba(20,16,36,.78)'; rr(x - w / 2, y - 9, w, 18, 9); ctx.fill();
      ctx.fillStyle = '#fff'; ctx.fillText(s, x, y + 1);
    }
    function tapInside(cx, cy) {
      const r = cv.getBoundingClientRect(), { s, ox, oy } = room(), x = (cx - r.left - ox) / s, y = (cy - r.top - oy) / s;
      const hit = inAgents().find(a => a.ix != null && Math.abs(a.ix - x) < 24 && Math.abs(a.iy - y) < 24);
      if (hit) { openChar(hit); return; }
      if (talk) return;
      closeCard();
      if (y > RH - 4 && Math.abs(x - RW / 2) < 50) { exitB(); return; }
      const p = nearFree(x, y);
      if (!p) return;
      me.ipath = inRoute(p[0], p[1]);
      [me.itx, me.ity] = me.ipath.shift();
    }

    /* ⏱️ döngü */
    function step(dt) {
      gm = (gm + dt * sp / 60) % 1440;
      const h = hourOf();
      if (h !== lastH) { lastH = h; replan(h, false); drawTick(); if (sel && PL[sel]) openCard(sel); }
      ag.forEach(a => {
        if (a.hold) return;
        if (a.leaveAt && tNow >= a.leaveAt) { a.leaveAt = 0; depart(a); }
        if (a.str && a.st !== 'walk' && tNow > a.next && !(a.st === 'wander' && a.path)) strNext(a);
        if (a.st === 'walk') {
          if (follow(a, a.sp * dt)) {
            a.path = null;
            if (a.k === '~') { a.st = 'stand'; a.next = tNow + 1500 + Math.random() * 4000; }
            else if (plOf(a.k).area) { a.st = 'wander'; a.idle = tNow + 1500 + Math.random() * 4000; a.next = tNow + 20000 + Math.random() * 30000; }
            else { a.st = 'in'; a.next = tNow + 15000 + Math.random() * 25000; }
          }
        } else if (a.st === 'wander') {
          if (a.path) { if (follow(a, 18 * dt)) { a.path = null; a.idle = tNow + 2000 + Math.random() * 6000; } }
          else if (tNow > a.idle) { a.path = [areaPt(plOf(a.k), [a.x, a.y])]; a.pi = 0; }
        }
      });
      [...cars, ...peds].forEach(o => {
        if (follow(o, o.sp * dt)) newTrip(o);
        let d = o.a - o.sa; d = Math.atan2(Math.sin(d), Math.cos(d)); o.sa += d * Math.min(1, dt * 8);
      });
      if (me.path && follow(me, 95 * dt)) {
        me.path = null;
        const k = me.dest && me.dest.k, ch2 = me.chase;
        me.dest = null;
        if (ch2) {
          me.chase = null;
          if (Math.hypot(ch2.x - me.x, ch2.y - me.y) < 110) { if (me.chaseTalk) startTalk(ch2); else openChar(ch2); }
          else if (me.tries++ < 8) chase(ch2, me.chaseTalk); else { ch2.hold = false; held = null; }
        } else if (k && me.enter === k) { me.enter = null; enterB(k); }
        else if (k) { const p = PL[k] || wd.FM[k]; api.notify(`${p.ic} ${tr(p.n)}`, '📍'); openCard(k); }
      }
      // 🏃 peşinden gidiyorsan: durmadıysa yolu tazele, durdurma mesafesine girince durur
      const cz = me.chase;
      if (cz && !cz.hold) {
        if (Math.hypot(cz.x - me.x, cz.y - me.y) <= STOP_R) { cz.hold = true; held = cz; }
        else if (tNow > (me.rp || 0)) { me.rp = tNow + 1500; walkTo(cz.x, cz.y, null, CS + 10); }
      }
      if (inside) {
        const dx = me.itx - me.ix, dy = me.ity - me.iy, d = Math.hypot(dx, dy);
        if (d > 1) { const m = Math.min(d, 140 * dt); me.ix += dx / d * m; me.iy += dy / d * m; }
        else if (me.ipath && me.ipath.length) [me.itx, me.ity] = me.ipath.shift();
      }
      if (follow0) { cam.x += (me.x - cam.x) * Math.min(1, dt * 4); cam.y += (me.y - cam.y) * Math.min(1, dt * 4); }
      if (tNow - savedAt > 2000) persist();
    }
    function persist() { savedAt = tNow; try { localStorage.setItem(KEY, JSON.stringify({ gm, at: Date.now(), sp, px: Math.round(me.x), py: Math.round(me.y), met })); } catch (e) {} }
    let lastClk = '';
    function hud() {
      const m = Math.floor(gm), s = `${String(Math.floor(m / 60) % 24).padStart(2, '0')}:${String(m % 60).padStart(2, '0')}`;
      if (s === lastClk) return;
      lastClk = s; clk.textContent = s;
      const hf = gm / 60, ph = hf >= 5 && hf < 8 ? '🌅 Sabah' : hf >= 8 && hf < 17 ? '☀️ Gündüz' : hf >= 17 && hf < 20 ? '🌇 Akşam' : '🌙 Gece';
      if (phEl.dataset.ph !== ph) { phEl.dataset.ph = ph; phEl.textContent = ph; }
    }
    function frame(now) {
      if (!alive) return;
      if (!root.isConnected) { stop(); return; }
      const dt = Math.min(.1, (now - t0) / 1000);
      t0 = now; tNow += dt * 1000;
      step(dt);
      const t = tNow / 1000, hf = gm / 60, dk = darkAt(hf);
      ctx.setTransform(1, 0, 0, 1, 0, 0); ctx.clearRect(0, 0, cv.width, cv.height);
      if (inside) { drawInside(t, dk); hud(); requestAnimationFrame(frame); return; }
      setCam();
      drawGround(t); drawRoads(); drawPlaza(t); drawLuna(t); drawTrees();
      wd.fill.forEach(drawFill);
      drawBills();
      BLD.forEach(b => drawBld(b, t, dk));
      drawEvents(t);
      drawVehicles();
      drawNight(dk, hf, t);
      drawPeople(t);
      drawLabels();
      hud();
      requestAnimationFrame(frame);
    }
    function stop() { alive = false; if (talk) talk.a.hold = false; persist(); ro.disconnect(); }
    function resize() {
      const d2 = Math.min(2, window.devicePixelRatio || 1);
      if (cv.width && cw === root.clientWidth && ch === root.clientHeight && dpr === d2) return;
      dpr = d2; cw = root.clientWidth; ch = root.clientHeight;
      cv.width = Math.round(cw * dpr); cv.height = Math.round(ch * dpr);
      cv.style.width = cw + 'px'; cv.style.height = ch + 'px';
    }
    const ro = new ResizeObserver(resize);
    ro.observe(root);
    resize();
    cam.z = cw < 600 ? 1.9 : 2.2;
    const clampCam = () => { cam.z = Math.max(.35, Math.min(4, cam.z)); cam.x = Math.max(X0, Math.min(W, cam.x)); cam.y = Math.max(Y0, Math.min(H, cam.y)); };

    /* 👆 dokunma: sürükle, iki parmakla yakınlaş, dokun → kişi / bina / yürü */
    const ptrs = new Map();
    let drag = null, pinch = null, tap = null;
    const pdist = () => { const [a, b] = [...ptrs.values()]; return Math.hypot(a[0] - b[0], a[1] - b[1]) || 1; };
    const toWorld = (cx, cy) => { const r = cv.getBoundingClientRect(); return [cam.x + (cx - r.left - cw / 2) / cam.z, cam.y + (cy - r.top - ch / 2) / cam.z]; };
    cv.onpointerdown = e => {
      cv.setPointerCapture(e.pointerId);
      ptrs.set(e.pointerId, [e.clientX, e.clientY]);
      if (ptrs.size === 1) { tap = { x: e.clientX, y: e.clientY, t: performance.now() }; drag = { x: e.clientX, y: e.clientY, cx: cam.x, cy: cam.y }; }
      else { tap = null; pinch = { d: pdist(), z: cam.z }; }
    };
    cv.onpointermove = e => {
      if (!ptrs.has(e.pointerId)) return;
      ptrs.set(e.pointerId, [e.clientX, e.clientY]);
      if (pinch && ptrs.size >= 2) { cam.z = pinch.z * pdist() / pinch.d; clampCam(); return; }
      if (!drag) return;
      const dx = e.clientX - drag.x, dy = e.clientY - drag.y;
      if (tap && Math.hypot(dx, dy) > 8) tap = null;
      if (!tap) { follow0 = false; cam.x = drag.cx - dx / cam.z; cam.y = drag.cy - dy / cam.z; clampCam(); }
    };
    const up = e => {
      ptrs.delete(e.pointerId);
      if (tap && e.type === 'pointerup' && performance.now() - tap.t < 600) { if (inside) tapInside(e.clientX, e.clientY); else onTap(...toWorld(e.clientX, e.clientY)); }
      tap = null;
      if (ptrs.size < 2) pinch = null;
      if (ptrs.size === 1) { const [p] = ptrs.values(); drag = { x: p[0], y: p[1], cx: cam.x, cy: cam.y }; } else if (!ptrs.size) drag = null;
    };
    cv.onpointerup = up; cv.onpointercancel = up;
    cv.onwheel = e => {
      e.preventDefault();
      const [wx, wy] = toWorld(e.clientX, e.clientY), z0 = cam.z;
      cam.z *= e.deltaY < 0 ? 1.12 : 1 / 1.12; clampCam();
      if (!follow0) { cam.x = wx - (wx - cam.x) * z0 / cam.z; cam.y = wy - (wy - cam.y) * z0 / cam.z; clampCam(); }
    };
    // 🚶 kaldırımdan yürü; k = varınca açılacak yer (bina / alan / dolgu)
    // yol dışına dokunduysan: hedefe bina olmadan düz gidilebilen en yakın düğümden oraya; yoksa en yakın düğümde durur
    // gap: hedefin üstüne değil, bu kadar önünde dur (birinin yanına giderken)
    function walkTo(x, y, k, gap) {
      const a = !me.path && me.node != null ? me.node : wd.nearest(me.x, me.y);
      let b = wd.nearest(x, y), leg = false;
      if (!k && !wd.inSea(x, y) && !wd.solid(x, y)) {
        const near = wd.nodes.map((n, i) => [(n.x - x) ** 2 + (n.y - y) ** 2, i]).sort((p, q) => p[0] - q[0]).slice(0, 8).find(([, i]) => wd.segFree(wd.nodes[i].x, wd.nodes[i].y, x, y));
        if (near) { b = near[1]; leg = true; }
      }
      const ids = route(a, b), pts = walkPath(ids, me.x, me.y);
      // binaya / dolguya gidiyorsan son nokta binanın tarafındaki kaldırım
      const kp = k && (PL[k] || wd.FM[k]);
      if (kp && !kp.area && pts.length) pts[pts.length - 1] = towardB(b, kp.x, kp.y);
      if (leg) pts.push([x, y]);
      if (gap) {
        // son noktayı hedefe gap kalana kadar kısalt (çok kısaysa son noktayı at)
        while (pts.length) {
          const [lx, ly] = pts[pts.length - 1], [px, py] = pts.length > 1 ? pts[pts.length - 2] : [me.x, me.y];
          if (Math.hypot(lx - x, ly - y) >= gap) break;
          const L = Math.hypot(x - px, y - py);
          if (L > gap) { pts[pts.length - 1] = [x - (x - px) / L * gap, y - (y - py) / L * gap]; break; }
          pts.pop();
        }
        if (!pts.length) pts.push([me.x, me.y]);
      }
      me.node = b;
      me.path = pts; me.pi = 0;
      const last = pts[pts.length - 1];
      me.dest = { x: last[0], y: last[1], k };
    }
    function onTap(x, y) {
      if (talk) return;
      const hit = ag.filter(a => a.st !== 'in').find(a => Math.abs(a.x - x) < CS / 2 + 8 && Math.abs(a.y - y) < CS / 2 + 8);
      if (hit) { if (me.chase && me.chase !== hit) { me.chase.hold = false; me.chase = null; me.path = null; me.dest = null; } openChar(hit); return; }
      const bl = wd.bills.find(b => Math.abs(b.x - x) < 80 && Math.abs(b.y - y) < 80 && inRect({ ...b, w: b.w + 12, d: b.d + 12 }, x, y));
      if (bl) { openBill(bl); return; }
      const b = BLD.find(b => Math.abs(x - b.x) < b.w / 2 + 6 && Math.abs(y - b.y) < b.h / 2 + 6)
        || wd.fill.find(f => Math.abs(f.x - x) < 80 && Math.abs(f.y - y) < 80 && inRect(f, x, y))
        || AREAS.find(a => a.k === 'sahil' ? !wd.inSea(x, y) && wd.coastDist(x, y) < 140 && x > a.beach[0] && x < a.beach[1] : ell(x, y, a.x, a.y, a.rx, a.ry));
      // 🏖️ açık alana (sahil, park, lunapark) dokununca oraya yürürsün; aynı yere ikinci kez dokununca kartı açılır
      if (b && b.area) {
        if (sel === b.k && !me.path) { openCard(b.k); return; }
        me.chase = null; me.enter = null; closeCard(); sel = b.k; walkTo(x, y);
        return;
      }
      if (b) { openCard(b.k || b.home || b.id); return; }
      if (me.chase) { me.chase = null; }
      me.enter = null;
      closeCard();
      walkTo(x, y);
    }

    /* 🪪 kartlar */
    const hh = () => `${String(lastH).padStart(2, '0')}:00`;
    const nameOf = a => shownName(a) ? esc(a.c.name) : tr('Yabancı kız');
    function row(a) {
      const w = a.w || {};
      return `<a class="ct-row" href="#/sehir" data-ag="${esc(a.id)}">${api.avatar(shownName(a) ? a.c : { name: '?', photo: a.c.photo, colors: a.c.colors }, 42)}<span class="ct-rin"><b>${nameOf(a)}${shownName(a) && a.c.age ? `<small>, ${esc(a.c.age)}</small>` : ''}</b>
        <small>${a.str ? '🙋‍♀️ yabancı' : w.job ? '💼 iş başında' : '🌿 boş zaman'}${!a.str && a.c.job ? ` · ${esc(a.c.job)}` : ''}</small><small>${esc(w.doing || '')}</small><small class="ct-wear">${esc(api.wear(a.c, a.to || a.k, !!w.job, lastH))}${(sz => sz ? ` <b class="ct-size">${esc(sz)}</b>` : '')(api.size(a.c))}</small></span><i class="ct-go">›</i></a>`;
    }
    // ✋ dokunulan karakter yolda durur (kart açıkken, konuşurken ya da yanına giderken); başka yere dokununca yoluna devam eder
    let held = null;
    function release() { if (held && !(talk && talk.a === held) && me.chase !== held) held.hold = false; held = null; }
    function holdA(a) { if (held !== a) release(); a.hold = true; held = a; }
    function openCard(k) {
      const b = PL[k] || wd.FM[k];
      if (!b) return;
      release();
      sel = k;
      if (!PL[k]) {
        card.innerHTML = `<button type="button" class="ct-x" data-x aria-label="Kapat">✕</button><h3>${b.ic} ${esc(b.n)}</h3><p>${ZONE_N[b.z]}</p>
          <div class="ct-acts"><button type="button" class="btn sm" data-enter="${k}">🚪 İçeri gir</button><button type="button" class="btn ghost sm" data-walk="${k}">🚶 Buraya yürü</button></div>`;
        card.hidden = false;
        return;
      }
      const here = ag.filter(a => a.k === k && a.st !== 'walk'), coming = ag.filter(a => a.k === k && a.st === 'walk');
      let home = '';
      if (/^ev\d|^apt$/.test(k)) {
        const hs = homes.hs.filter(x => x.k === k), fn = c => esc(c.name.split(' ')[0]);
        const line = x => `${k === 'apt' ? `<b>🚪 Daire ${x.flat}</b> · ` : ''}${x.koca ? `💍 ${fn(x.m[0])} kocasıyla yaşıyor` : x.m.length === 1 ? `🧍 ${fn(x.m[0])} tek yaşıyor` : `👭 Ev arkadaşları: ${x.m.map(fn).join(', ')}`}`;
        home = hs.length ? `<ul class="ct-ul">${hs.map(x => `<li>${line(x)}</li>`).join('')}</ul>` : '<p>🪧 Boş ev · satılık</p>';
      }
      const ev = evAt(k, lastH), evLater = !ev && evDay.find(e => e.k === k && e.h[0] > lastH);
      card.innerHTML = `<button type="button" class="ct-x" data-x aria-label="Kapat">✕</button>
        <h3>${b.ic} ${esc(b.n)} <small>· ${hh()} · ${here.length} kişi</small></h3>${home}
        ${ev ? `<p class="ct-ev">🎉 Şimdi: ${ev.ic} ${esc(ev.n)} · tavlama şansı yüksek</p>` : evLater ? `<p class="ct-ev soon">🗓️ ${String(evLater.h[0] % 24).padStart(2, '0')}:00 · ${evLater.ic} ${esc(evLater.n)}</p>` : ''}
        ${b.mine ? '<p>🏡 Burası senin evin. İçeri girebilir ya da tanıdığın birini davet edebilirsin; sohbet evinde başlar.</p>' : ''}
        <div class="ct-acts">${b.area ? '' : `<button type="button" class="btn sm" data-enter="${k}">🚪 İçeri gir</button>`}${b.mine ? '<button type="button" class="btn sm" data-invite>💌 Eve davet et</button>' : ''}<button type="button" class="btn ghost sm" data-walk="${k}">🚶 Buraya yürü</button>${b.s ? `<a class="btn ghost sm" href="${b.s}">🌐 Siteye git <b>${esc(b.sn)}</b></a>` : ''}</div>
        ${here.length ? `<div class="ct-list">${here.map(row).join('')}</div>` : home ? '' : '<p>Şu an burada kimse yok.</p>'}
        ${coming.length ? `<p class="ct-coming">🚶 Yolda: ${coming.map(a => shownName(a) ? esc(first(a)) : '❔').join(', ')}</p>` : ''}`;
      card.hidden = false;
    }
    // 🪧 pano kartı: dönen reklam + siteye git
    function openBill(b) {
      release();
      sel = b.id;
      const ad = adOf(b, wd.bills.indexOf(b));
      if (!ad) return;
      card.innerHTML = `<button type="button" class="ct-x" data-x aria-label="Kapat">✕</button><h3>🪧 Reklam panosu</h3>
        <div class="ct-th">${ad.photo ? api.avatar({ name: ad.n, photo: ad.photo }, 44) : `<span class="ct-adic">${ad.ic}</span>`}<span><b>${esc(ad.n)}</b><small>${esc(ad.d)}</small></span></div>
        <div class="ct-acts"><a class="btn sm" href="${esc(ad.href)}">🌐 Reklama git</a></div>`;
      card.hidden = false;
    }
    const styleOf = a => { for (const t of api.pers(a.c)) if (STYLE_OF[t]) return STYLE_OF[t]; return ''; };
    const tierOf = a => { if (a.str) return (met[a.id] || {}).n ? 'tanis' : 'yeni'; const m = api.rel(a.c).msgs; return m >= 60 ? 'sevgili' : m >= 15 ? 'yakin' : 'tanis'; };
    const distTo = a => Math.hypot(a.x - me.x, a.y - me.y);
    // ✋ yakınsa (STOP_R) durur; tanıdığını durdurduysan doğrudan sohbete geçebilirsin, uzaktaysa peşinden gidersin
    function openChar(a) {
      sel = null;
      const far = !inside && distTo(a) > STOP_R;
      if (far) { if (held !== a) release(); } else holdA(a);
      const w = a.w || {}, pl = a.k === '~' ? null : plOf(a.k), m = met[a.id] || {}, cool = m.cool && Date.now() < m.cool, tier = tierOf(a), st = STYLE[styleOf(a)];
      const where = a.st === 'walk' ? (pl ? `🚶 ${pl.ic} ${esc(pl.n)} yolunda` : '🚶 sokakta yürüyor') : pl ? `📍 ${pl.ic} ${esc(pl.n)}` : '📍 sokakta';
      const direct = !a.str && !far;
      card.innerHTML = `<button type="button" class="ct-x" data-x aria-label="Kapat">✕</button>
        <div class="ct-list">${row(a).replace('data-ag', 'data-noop')}</div>
        <div class="ct-chips"><em>${TIER[tier].l}</em>${st && tier !== 'yeni' ? `<em>${st.l}</em>` : ''}${far ? '<em class="far">🔭 Uzakta · durduramazsın</em>' : '<em class="stop">✋ Durdu, seni bekliyor</em>'}</div>
        <p>${where}${m.ilgi ? ` · 💗 ${Math.round(m.ilgi)}` : ''}${cool ? ' · 😒 Seninle konuşmak istemiyor' : ''}</p>
        <div class="ct-acts">${direct ? `<button type="button" class="btn sm" data-direct="${esc(a.id)}">💬 Sohbete geç</button>` : ''}<button type="button" class="btn ${direct ? 'ghost ' : ''}sm" data-talk="${esc(a.id)}"${cool ? ' disabled' : ''}>${far ? '🏃 Peşinden git' : '🗣️ Ayaküstü konuş'}</button>${a.str || direct ? '' : `<button type="button" class="btn ghost sm" data-ccc="${esc(a.id)}"${w.nurse ? ' data-ccn="1"' : ''}>💬 Mesaj at</button>`}${far || inside ? '' : `<button type="button" class="btn ghost sm" data-near="${esc(a.id)}">🚶 Yanına git</button>`}</div>`;
      card.hidden = false;
    }
    // 💬 tanıdığına doğrudan: sohbetine mekân kartı + onun selamıyla geçilir
    function directChat(a) {
      const pl = a.k === '~' ? null : plOf(a.k), tier = tierOf(a), st = STYLE[styleOf(a)];
      const hi = st && st.hi && Math.random() < .5 ? pickA(st.hi) : pickA(TIER[tier].hi || TK.hiK);
      a.hold = false; held = null; persist();
      api.meet(a.c, pl ? pl.k : '', pl ? `${pl.ic} ${pl.n}` : '📍 Sokakta', Math.floor(gm), hi, true);
    }
    const tick = root.querySelector('#ctTick span');
    function drawTick() {
      const s = `📣 ${tr('Bugün')}:   ` + evDay.map(e => `${e.ic} ${String(e.h[0] % 24).padStart(2, '0')}:00 ${tr(e.n)}${evOn(e, lastH) ? ' 🔴' : ''}`).join('     ·     ');
      tick.textContent = `${s}          ${s}          `;
    }
    root.querySelector('#ctTick').onclick = () => { const e = evNow(lastH)[0] || evDay.find(x => x.h[0] > lastH) || evDay[0]; if (e) openCard(e.k); };
    drawTick();
    function closeCard() { if (talk) endTalk(); release(); card.hidden = true; card.innerHTML = ''; sel = null; }

    /* 🗣️ ayaküstü konuşma: yakınsan başlar, değilsen yanına yürürsün (o seni bekler); toTalk false → varınca kartı açılır */
    function chase(a, toTalk = true) {
      if (Math.hypot(a.x - me.x, a.y - me.y) <= STOP_R) { a.hold = true; held = a; }
      walkTo(a.x, a.y, null, CS + 10); me.chase = a; me.chaseTalk = toTalk; me.rp = tNow + 1500; follow0 = true;
    }
    function wantTalk(a) {
      const m = met[a.id] || {};
      if (m.cool && Date.now() < m.cool) return;
      card.hidden = true;
      if (inside || distTo(a) < 110) startTalk(a);
      else { me.tries = 0; chase(a); api.notify(`${shownName(a) || tr('Yabancı kız')} ${tr(a.hold ? 'seni bekliyor' : '· peşinden gidiyorsun')}`, a.hold ? '✋' : '🏃'); }
    }
    // tarz cümlesi %65, yoksa genel havuz
    const lineOf = (own, gen) => own && own.length && Math.random() < .65 ? pickA(own) : pickA(gen);
    function startTalk(a) {
      me.path = null; me.dest = null; me.chase = null;
      a.hold = true; held = a; sel = null;
      const m = met[a.id] || {}, tier = tierOf(a), TI = TIER[tier], st = STYLE[styleOf(a)], ev = evAt(a.k, lastH), wed = !a.str && api.rel(a.c).wed;
      talk = { a, tier, TI, st, ev, wed, known: tier !== 'yeni', last: '', bad: 0, log: [], done: '', wait: false,
        ilgi: Math.max(5, Math.min(90, TI.i + (st ? st.i : 0) + (tier === 'tanis' ? (m.ilgi || 0) * .3 : 0) + (ev ? 6 : 0))),
        mood: (hash(a.id + ':' + day) % 35 - 15) / 100, named: !a.str || !!m.n };
      talk.log.push(['her', lineOf(st && st.hi, TI.hi || (tier === 'yeni' ? TK.hi : TK.hiK))]);
      follow0 = true;
      drawTalk();
    }
    function drawTalk() {
      const T = talk, a = T.a, pl = a.k === '~' ? null : plOf(a.k);
      const opts = T.done === 'win' ? `<button type="button" class="btn sm" data-meet>💬 Sohbete geç</button><button type="button" class="btn ghost sm" data-bye>👋 Sonra yazarım</button>`
        : T.done === 'lose' ? `<button type="button" class="btn ghost sm" data-bye>👋 Tamam</button>`
        : `${TALK_T.map(([k, l]) => `<button type="button" class="btn sm ct-opt" data-say="${k}"${T.wait ? ' disabled' : ''}>${l}</button>`).join('')}<button type="button" class="btn ghost sm" data-bye>👋 Vedalaş</button>`;
      card.innerHTML = `<button type="button" class="ct-x" data-x aria-label="Kapat">✕</button>
        <div class="ct-th">${api.avatar(T.named ? a.c : { name: '?', photo: a.c.photo, colors: a.c.colors }, 44)}<span><b>${T.named ? esc(a.c.name) : tr('Yabancı kız')}</b><small>${pl ? `${pl.ic} ${esc(pl.n)}` : '📍 sokakta'} · ${hh()}</small></span></div>
        <div class="ct-chips"><em>${T.TI.l}</em>${T.st && T.known ? `<em>${T.st.l}</em>` : ''}${T.wed ? '<em>💍 Evli</em>' : ''}${T.ev ? `<em class="ev">🎉 ${esc(T.ev.n)}</em>` : ''}</div>
        <div class="ct-love${T.done === 'win' ? ' win' : ''}"><i style="width:${Math.round(T.ilgi)}%"></i><span>💗 İlgi ${Math.round(T.ilgi)}</span></div>
        <div class="ct-log">${T.log.slice(-6).map(([w, s]) => `<p class="ct-b ${w}">${esc(s)}</p>`).join('')}${T.wait ? '<p class="ct-b her typing">…</p>' : ''}</div>
        <div class="ct-acts ct-opts">${opts}</div>`;
      card.hidden = false;
      const lg = card.querySelector('.ct-log');
      if (lg) lg.scrollTop = lg.scrollHeight;
    }
    function choose(type) {
      const T = talk;
      if (!T || T.done || T.wait) return;
      const k = T.a.k;
      T.log.push(['me', pickA(T.TI.me ? T.TI.me[type] : TK.me[type])]);
      // şans: ruh hali + tanışıklık + kişilik + etkinlik + mekân + ilgi; evliyken cesur riskli
      let p = .52 + T.mood + T.TI.p + (T.st ? T.st.p[type] : 0) + (T.ev ? .1 : 0) - (T.wed && type === 'cesur' ? .1 : 0);
      if (NIGHT_PL.includes(k)) p += { cesur: .2, davet: .1, iltifat: 0, espri: 0 }[type];
      if (SOCIAL_PL.includes(k)) p += { espri: .12, iltifat: k === 'sahil' ? .15 : .08, davet: .05, cesur: -.08 }[type];
      if (T.a.w && T.a.w.job) p -= .12;
      if (type === 'davet') p += (T.ilgi - 50) / 140;
      if (type === 'cesur') p += (T.ilgi - 60) / 110;
      if (type === T.last) p -= .2;
      T.last = type;
      const ok = Math.random() < Math.max(.05, Math.min(.95, p));
      const g = { iltifat: [10, 16], espri: [9, 15], davet: [16, 24], cesur: [20, 30] }[type], l = type === 'cesur' ? [14, 20] : [7, 13];
      T.ilgi = Math.max(0, Math.min(100, T.ilgi + (ok ? g[0] + Math.random() * (g[1] - g[0]) : -(l[0] + Math.random() * (l[1] - l[0])))));
      T.bad = ok ? 0 : T.bad + 1;
      T.wait = true;
      drawTalk();
      setTimeout(() => {
        if (talk !== T) return;
        T.wait = false;
        T.log.push(['her', T.wed && Math.random() < .35 ? pickA(WED_T[ok ? 'ok' : 'bad']) : lineOf(T.st && T.st[ok ? 'ok' : 'bad'][type], TK[ok ? 'ok' : 'bad'][type])]);
        if (ok && !T.named) { T.named = true; T.log.push(['her', TK.name.replace('{ad}', first(T.a))]); }
        if (T.ilgi >= 100 || (ok && type === 'davet' && T.ilgi >= 70)) { T.ilgi = 100; T.done = 'win'; T.log.push(['her', pickA(T.TI.win || TK.win)]); }
        else if (T.ilgi <= 0 || T.bad >= 3) { T.done = 'lose'; T.log.push(['her', pickA(TK.leave)]); }
        met[T.a.id] = { n: T.named ? first(T.a) : '', ilgi: Math.round(T.ilgi), cool: T.done === 'lose' ? Date.now() + (T.known ? 10 : 20) * 60000 : 0 };
        persist();
        drawTalk();
      }, 700);
    }
    function endTalk() {
      const T = talk;
      talk = null;
      if (!T) return;
      T.a.hold = false;
      if (T.a.str && T.done === 'lose') strNext(T.a);
    }
    card.onclick = e => {
      const t = e.target;
      if (t.closest('[data-x]') || t.closest('[data-bye]')) { closeCard(); return; }
      const sy = t.closest('[data-say]');
      if (sy) { choose(sy.dataset.say); return; }
      if (t.closest('[data-meet]') && talk) {
        const a = talk.a, pl = a.k === '~' ? null : plOf(a.k);
        e.preventDefault(); endTalk(); persist();
        api.meet(a.c, pl ? pl.k : '', pl ? `${pl.ic} ${pl.n}` : '📍 Sokakta', Math.floor(gm), pickA(a.str ? TK.first : TK.firstK).replace('{ad}', first(a)), !a.str);
        return;
      }
      const en = t.closest('[data-enter]');
      if (en) {
        const k = en.dataset.enter, [dx, dy] = doorOf(k);
        if (Math.hypot(dx - me.x, dy - me.y) < 150) enterB(k);
        else { walkTo(dx, dy, k); me.enter = k; follow0 = true; card.hidden = true; }
        return;
      }
      // 💌 eve davet: tanıdıklarından birini seç → sohbet evinde, onun mesajıyla başlar (saat = şehir saati)
      if (t.closest('[data-invite]')) {
        const L = ag.filter(a => !a.str);
        card.innerHTML = `<button type="button" class="ct-x" data-x aria-label="Kapat">✕</button><h3>💌 Eve davet et</h3>
          ${L.length ? `<div class="ct-list">${L.map(a => `<a class="ct-row" href="#/sehir" data-inv="${esc(a.id)}">${api.avatar(a.c, 42)}<span class="ct-rin"><b>${esc(a.c.name)}</b><small>${TIER[tierOf(a)].l}</small></span><i class="ct-go">›</i></a>`).join('')}</div>` : '<p>Henüz tanıdığın kimse yok.</p>'}`;
        return;
      }
      const iv = t.closest('[data-inv]');
      if (iv) { e.preventDefault(); const a = ag.find(x => x.id === iv.dataset.inv); if (a) { persist(); api.meet(a.c, 'benim', '🏡 Senin evin', Math.floor(gm), pickA(INVITE_T), true); } return; }
      const dc = t.closest('[data-direct]');
      if (dc) { e.preventDefault(); const a = ag.find(x => x.id === dc.dataset.direct); if (a) directChat(a); return; }
      const g = t.closest('[data-ag]');
      if (g) { e.preventDefault(); const a = ag.find(x => x.id === g.dataset.ag); if (a) openChar(a); return; }
      if (t.closest('[data-noop]')) { e.preventDefault(); return; }
      const tk = t.closest('[data-talk]');
      if (tk) { const a = ag.find(x => x.id === tk.dataset.talk); if (a) wantTalk(a); return; }
      const wk = t.closest('[data-walk]');
      if (wk) { const k = wk.dataset.walk, p = PL[k] || wd.FM[k]; walkTo(p.x, p.y, k); follow0 = true; card.hidden = true; return; }
      const nr = t.closest('[data-near]');
      if (nr) { const a = ag.find(x => x.id === nr.dataset.near); if (a) { me.tries = 0; chase(a, false); card.hidden = true; } return; }
      const c = t.closest('[data-ccc]');
      if (c) { e.preventDefault(); persist(); const ch2 = api.byId(c.dataset.ccc); if (ch2 && c.dataset.ccn) api.ccNurse(ch2, lastH, Math.floor(gm)); else if (ch2) api.textAt(ch2, Math.floor(gm)); }
    };
    root.querySelector('.ct-side').onclick = e => {
      const b = e.target.closest('[data-ct]');
      if (!b) return;
      if (b.dataset.ct === 'me') follow0 = true;
      else { cam.z *= b.dataset.ct === 'in' ? 1.3 : 1 / 1.3; clampCam(); }
    };
    const spLbl = () => { spBtn.textContent = (SPEEDS.find(s => s[0] === sp) || SPEEDS[0])[1]; };
    spBtn.onclick = () => { const i = SPEEDS.findIndex(s => s[0] === sp); sp = SPEEDS[(i + 1) % SPEEDS.length][0]; spLbl(); persist(); };
    spLbl();
    requestAnimationFrame(n => { t0 = n; requestAnimationFrame(frame); });
  }
  // 📚 Şehir Kitabı tabloları canlı veriden okur
  return { mount, world, BLD, AREAS, EVENTS, STYLE, STYLE_OF, TIER, STOP_R };
})();
