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
  // SC: dünya ölçeği (konumlar/mesafeler büyür, bina/yol/karakter boyutu aynı kalır)
  const SC = 1.4, sc = p => [p[0] * SC, p[1] * SC];
  const W = 3000 * SC, H = 2200 * SC, X0 = -1300 * SC, Y0 = -900 * SC, CS = 14, SW = 34;
  const PKX = 600 * SC, PKY = 1150 * SC, LNX = 2140 * SC, LNY = 1450 * SC, RGX = 1350 * SC, RGY = 850 * SC;
  const tr = s => (Stories.I18n ? Stories.I18n.t(s) : s);
  const rng = seed => () => { seed = seed + 0x6D2B79F5 | 0; let t = Math.imul(seed ^ seed >>> 15, 1 | seed); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; };
  const hash = s => { s = String(s); let h = 5381; for (let i = 0; i < s.length; i++) h = (h * 33 + s.charCodeAt(i)) | 0; return h >>> 0; };
  const ell = (x, y, cx, cy, rx, ry) => ((x - cx) / rx) ** 2 + ((y - cy) / ry) ** 2 <= 1;
  const pickA = a => a[(Math.random() * a.length) | 0];
  const EMO = '"Apple Color Emoji","Segoe UI Emoji","Noto Color Emoji",sans-serif';

  /* 🗺️ harita: kıyı (deniz güneyde ve doğuda), yol kontrol noktaları, binalar */
  const COAST = [[-1300, 1745], [-800, 1790], [-400, 1775], [0, 1760], [400, 1800], [800, 1760], [1200, 1820], [1600, 1880], [2000, 1840], [2350, 1700], [2600, 1450], [2700, 1100], [2760, 700], [2820, 300], [2860, 0], [2890, -450], [2920, -900]].map(sc);
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
  for (const k in P) P[k] = sc(P[k]);
  for (let i = 0; i < 16; i++) P['RG' + i] = [RGX + 90 * Math.cos(i * Math.PI / 8), RGY + 90 * Math.sin(i * Math.PI / 8)];
  const ROAD_W = { coast: 80, main: 70, ring: 62, st: 54 };
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
  // 🪧 cadde / sokak adları (ROADS sırasıyla) + türe göre ek (tr ile çevrilir)
  const RN = ['Sahil', 'Lale', 'Menekşe', 'Çınar', 'Akasya', 'Yıldız', 'Liman', 'Cumhuriyet', 'Zeytin', 'Defne', 'Papatya', 'Kiraz', 'Nar', 'Gül', 'Ihlamur', 'Leylak', 'Badem', 'Söğüt', 'Erik',
    'Batı', 'Kumsal', 'Manolya', 'Kestane', 'Ayva', 'Fesleğen', 'Mimoza', 'Sardunya', 'Lavanta', 'Tepe', 'Kuzey', 'Bağ', 'Çam', 'Yamaç', 'Pınar', 'Kayalık', 'Bayır', 'Gökyüzü'];
  const RS = { coast: 'Bulvarı', main: 'Caddesi', ring: 'Meydanı', st: 'Sokak' };
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
    { k: 'kulup', n: 'Gece Kulübü', ic: '🪩', x: 1935, y: 1150, w: 116, h: 76, c: '#5e35b1', t: 'duz', fx: 'beams', glow: '#c77dff', s: '#/parti', sn: 'CarmenParty', party: 1 },
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
    { k: 'sahil', n: 'Sahil', ic: '🏖️', x: 1600, y: 1790, area: 1, beach: [700, 2320] }
  ];
  [...BLD, ...AREAS].forEach(b => { b.x *= SC; b.y *= SC; if (b.beach) b.beach = b.beach.map(v => v * SC); });
  BLD.forEach(b => { b.w = Math.round(b.w * 1.3); b.h = Math.round(b.h * 1.3); });
  // 🏠 ek hane evleri (dolgu evlerden seçilir): [anahtar, ad, ikon]; app.js CC_HOMES ile aynı sıra
  const HOME_X = [['ev6', 'Beyaz Villa', '🏡'], ['ev7', 'Taş Ev', '🏠'], ['ev8', 'Sarı Ev', '🏠'], ['ev9', 'Yalı', '🏡'], ['ev10', 'Bahçeli Villa', '🏡'], ['ev11', 'Çatı Katı', '🏠'],
    ['ev12', 'Mavi Panjurlu Ev', '🏠'], ['ev13', 'Güllü Ev', '🏡'], ['ev14', 'Ahşap Ev', '🏠'], ['ev15', 'Tepe Evi', '🏡'], ['ev16', 'Limon Ağaçlı Ev', '🏡'], ['ev17', 'Kırmızı Kapılı Ev', '🏠']];
  const FIELDS = [[240 * SC, 20 * SC, 170, 100, '#d9c27a', '#c9ae5f'], [430 * SC, 40 * SC, 110, 80, '#a9c96c', '#93b458']];
  // 🏘️ dolgu binalar: bölgeye göre tür [ad, ikon, yüksek mi]; çatı renkleri
  const FT = {
    ev: [['Ev', '🏠'], ['Villa', '🏡'], ['Dubleks', '🏠'], ['Bahçeli Ev', '🏡'], ['Müstakil Ev', '🏠'], ['Bakkal', '🏪']],
    dt: [['Apartman', '🏢', 1], ['Plaza', '🏬', 1], ['Market', '🛒'], ['Eczane', '💊'], ['Fırın', '🥐'], ['Butik', '👗'], ['Kuaför', '💇‍♀️'], ['Berber', '💈'], ['Kitapçı', '📚'], ['Çiçekçi', '💐'], ['Banka', '🏦', 1], ['Restoran', '🍝'], ['Pastane', '🍰'], ['İç Çamaşırı Butiği', '👙'], ['Parfümeri', '🌸']],
    ex: [['Kokteyl Bar', '🍹'], ['Bar', '🍸'], ['Karaoke', '🎤'], ['Restoran', '🍽️'], ['Burgerci', '🍔'], ['Pizzacı', '🍕'], ['Dövme Stüdyosu', '✒️'], ['Butik Otel', '🛎️', 1], ['Striptiz Kulübü', '💃'], ['Kumarhane', '🃏'], ['Shisha Lounge', '💨']],
    cs: [['Dondurmacı', '🍦'], ['Balıkçı', '🐟'], ['Plaj Barı', '🍹'], ['Sörf Dükkanı', '🏄'], ['Pansiyon', '🛏️'], ['Kafe', '☕'], ['Mayo Butiği', '👙']]
  };
  const ROOF = { ev: ['#b5553c', '#a3482f', '#c2694a', '#5f6872', '#8e5a44', '#9c6b4e', '#6d7178'], dt: ['#a9aaa5', '#9ea3a8', '#b4ada2', '#8f969d', '#bdb6aa', '#a39e95', '#979ba3'], ex: ['#5e5568', '#6b5a5a', '#4f5966', '#776655', '#5a4f60'], cs: ['#d9c7a8', '#c9d6d8', '#e3d3b5', '#d6c2b8', '#c8d0b0'] };
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
    const roads = ROADS.map(([t, s], ri) => {
      const pts = sample(s.split(' ').map(k => P[k]), t !== 'ring', 45), hw = ROAD_W[t] / 2;
      for (let i = 1; i < pts.length; i++) link(node(pts[i - 1], hw), node(pts[i], hw));
      return { t, pts, path: path2(pts), nm: RN[ri % RN.length] };
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
    const freeZone = (x, y) => !ell(x, y, PKX, PKY, 222, 282) && !ell(x, y, LNX, LNY, 128, 128) && !ell(x, y, RGX, RGY, 70, 70) && !inField(x, y, 10);
    const R = rng(11), bRects = BLD.map(b => ({ x: b.x, y: b.y, w: b.w + (b.yard ? 44 : 22), d: b.h + (b.yard ? 40 : 22), a: 0 }));
    // 🚶 yaya yolları: bir caddenin kaldırımından dik çıkıp blok içinden karşıdaki caddeye varan ara yollar (araç girmez)
    const foots = [], FOOT_HW = 15;
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
            const off = hw + SW + 4 + 9, o = { x: x - Math.sin(a) * off * s, y: y + Math.cos(a) * off * s, w: 58, d: 17, a: s > 0 ? a : a + Math.PI };
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
    const zoneOf = (x, y) => coastDist(x, y) < 380 ? 'cs' : (x < 950 * SC && y < 1000 * SC) || x < 0 || y < 0 ? 'ev' : x > 1830 * SC && y < 1500 * SC ? 'ex' : ell(x, y, 1650 * SC, 860 * SC, 820 * SC, 540 * SC) ? 'dt' : R() < .5 ? 'ev' : 'dt';
    // gap: yol kenarından binaya boşluk (araç yolunda kaldırım + 7, yaya yolunda 6)
    function tryPlace(x, y, a, s, hw, gap) {
      const z = zoneOf(x, y), types = FT[z], ty = types[(R() * types.length) | 0], tall = !!ty[2];
      const w = (z === 'ev' ? 44 + R() * 24 : tall ? 56 + R() * 26 : 38 + R() * 30) * 1.35, d = (z === 'ev' ? 40 + R() * 18 : tall ? 60 + R() * 30 : 40 + R() * 26) * 1.35;
      const off = hw + gap + d / 2, o = { x: x - Math.sin(a) * off * s, y: y + Math.cos(a) * off * s, w, d, a: s > 0 ? a : a + Math.PI };
      const pts = [...corners(o), [o.x, o.y]];
      if (pts.some(([px, py]) => px < X0 + 8 || px > W - 8 || py < Y0 + 8 || py > H - 8 || inSea(px, py) || coastDist(px, py) < 150 || !freeZone(px, py) || nearRoad(px, py, SW + 2, 3))) return;
      if (bRects.some(b => sat(b, o)) || bills.some(b => sat(b, { ...o, w: w + 6, d: d + 6 }))) return;
      const big = { ...o, w: w + 8, d: d + 8 };
      if (fill.some(f => Math.abs(f.x - o.x) < 190 && Math.abs(f.y - o.y) < 190 && sat(f, big))) return;
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
    const inFill = (x, y, m) => fill.some(f => Math.abs(f.x - x) < 120 && Math.abs(f.y - y) < 120 && inRect({ ...f, w: f.w + m * 2, d: f.d + m * 2 }, x, y));
    // 🌳 ağaçlar: parkta sık, boşluklarda orta
    const trees = [];
    for (let i = 0; i < 5400 * SC * SC; i++) {
      const x = X0 + R() * (W - X0), y = Y0 + R() * (H - Y0);
      const park = ell(x, y, PKX, PKY, 195, 255);
      let p = park ? .9 : x < 950 * SC && y < 1000 * SC ? .45 : ell(x, y, 1650 * SC, 850 * SC, 780 * SC, 500 * SC) ? .12 : .3;
      if (park && (ell(x, y, PKX, PKY, 110, 140) || (ell(x, y, PKX, PKY, 146, 184) && !ell(x, y, PKX, PKY, 114, 154)))) p = 0;
      if (ell(x, y, LNX, LNY, 120, 120) || ell(x, y, RGX, RGY, 60, 60)) p = 0;
      if (R() > p) continue;
      if (inSea(x, y) || coastDist(x, y) < 195 || nearRoad(x, y, SW + 8) || inBld(x, y, 14) || inField(x, y, 8) || inFill(x, y, 10)) continue;
      trees.push([x, y, 10 + R() * 8, R() < .5 ? 0 : 1]);
    }
    // 🌴 palmiyeler + ⛱️ şemsiyeler kıyı boyunca, 💡 lambalar kaldırım kenarında
    const palms = [], umbs = [], lamps = [];
    coastN.forEach((c, i) => {
      if (i % 3 === 0) { const x = c.x + c.lx * 140, y = c.y + c.ly * 140; if (!nearRoad(x, y, SW + 4) && !inBld(x, y, 10) && !inFill(x, y, 6) && !ell(x, y, LNX, LNY, 120, 120)) palms.push([x, y, R() * 6]); }
      if (c.x > PL.sahil.beach[0] && c.x < PL.sahil.beach[1] && i % 2 === 0) [45 + R() * 35, 105 + R() * 50].forEach((d, j) => { if (!nearRoad(c.x + c.lx * d, c.y + c.ly * d, SW)) umbs.push([c.x + c.lx * d, c.y + c.ly * d, ['#ff6b6b', '#ffd93d', '#4dabf7', '#ff8cc6', '#69db7c'][(i + j * 2) % 5]]); });
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
  // ln: kaldırımda şerit kayması (herkes aynı çizgide yürümesin)
  const walkPath = (ids, x, y, ln = 0) => { const s = sideOf(ids, x, y); return offPath(ids, n => (walkSide(n) + ln) * s); };
  const laneOf = a => (hash(a.id + ':ln') % 21) - 10;
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
      if (pl.k === 'sahil') { const c = WD.beachPts[(Math.random() * WD.beachPts.length) | 0], d = 30 + r * 130; p = [c.x + c.lx * d, c.y + c.ly * d]; }
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
  /* 👀 süzünce tepkisi: tanışıklığa göre, %50 tarzın kendi cümlesi */
  const SUZ = {
    yeni: ['Bir şey mi kaybettin? 😏', 'Fotoğraf çeksene, daha uzun sürer 📸', 'Gözlerin yukarıda kalsın lütfen 🙄', 'Beğendin mi bari? 😏', 'Bakışın baya cesur 😳', 'Tepeden tırnağa süzdün beni 👀'],
    tanis: ['Yine mi süzüyorsun? 😄', 'Bugün nasıl görünüyorum, onaylıyor musun? 😏', 'Gördüm ama, bakıyordun 👀', 'Hmm, beğenmişe benziyorsun 😊'],
    yakin: ['Bu bakışları tanıyorum 😏', 'Bakmaya doyamadın galiba 😊', 'Senin için giyindim belki de 😉', 'Gözlerinle soyuyorsun beni 🙈'],
    sevgili: ['Hep böyle bak bana 😍', 'Beğendin mi aşkım? Senin için 💋', 'Evde daha fazlasını görürsün 😈', 'Utandırma beni bebeğim 🙈💕']
  };
  const SUZ_ST = {
    utangac: ['*kızarıp bakışlarını kaçırır* 🙈', 'N-neden öyle bakıyorsun? 😳'], flort: ['*saçını savurur* Beğendin 😏', 'Bakmakla yetinecek misin? 😘'],
    alayci: ['Müze mi burası? 🙄', 'Bitirdin mi incelemeyi? 😏'], soguk: ['Bakmayı bırak.', '…bir şey mi var?'],
    nese: ['Hihi, ne oldu? Üstüme bir şey mi döktüm? 😄', 'Yeni elbisemi fark ettin! 🥰'], romantik: ['Öyle bakınca kalbim hızlanıyor 🥺', 'Gözlerin… ne düşünüyorsun? 🌹']
  };
  /* 💬 ayaküstü sohbet (yazarak): TQ = senin sorun → onun bilgisiyle cevap; TALK_RE = cümle türü (ilgi şansı choose ile); HQ = onun sana sorusu, HR = cevabına tepkisi. Olay tetiklenmez */
  const TQ = [
    ['ad', /ad[ıi]n ne|ismin ne|ad[ıi]n[ıi] |kimsin|tanışalım/], ['yas', /kaç yaş|yaşın/], ['is', /ne iş|meslek|çalışıyor mu|işin ne|ne okuyorsun|öğrenci mi/],
    ['nasil', /nasılsın|naber|ne haber|iyi misin|keyfin/], ['nereye', /nereye/], ['ne', /ne yapıyorsun|napıyorsun|napıyon|ne yapıyon|burada ne|ne arıyorsun/],
    ['sevgili', /sevgilin|erkek arkadaş|evli mi|bekar|bekâr|yalnız mısın|kocan/], ['hobi', /hobi|ne seversin|neler sever|boş zaman|ne dinler|müzik|film/],
    ['nereli', /nereli|nerede otur|nerede yaşı|evin nerede|kiminle yaşı|ev arkadaşın/]
  ];
  const TALK_RE = [
    ['kaba', /(^|[\s,.!?])(aptal|salak|gerizekal|çirkin|şişko|siktir|orospu|kaşar|sürtük|pislik)/],
    ['cesur', /(^|[\s,.!?])öp|seksi|yatak|seviş|sarıl|ateşli|vücud|göğüs|meme|kalça|popo|bacak|dudak|🔥|😈|💋/],
    ['davet', /kahve|içelim|içki|gidelim|çıkalım|yemeğe|yemek ye|buluşalım|gelsene|gelir misin|ısmarla|davet|numara|telefon|instagram|akşam boş/],
    ['iltifat', /güzel|tatlı|harika|muhteşem|yakışmış|yakışıyor|gözlerin|gülüş|hoş|şirin|çekici|zarif|alımlı/],
    ['espri', /haha|😂|🤣|şaka|espri|komik|😜/]
  ];
  const TK_RUDE = ['Ne dedin sen?! 😠', 'Terbiyesiz 😤', 'Kendine gel 🙄', 'Bununla konuşmayı bitirdik bence 😒'];
  const TK_Q = ['Hmm, iyi soru 🤔', 'Bunu neden merak ettin? 😏', 'Söylesem inanmazsın 😄', 'Belki bir gün anlatırım 😉'];
  const TK_HI = ['Selam 😊', 'Merhaba 🙂', 'Selam sana da 😄'];
  const TK_NEU = ['Hmm 🙂', 'Öyle mi? 😊', 'Anlat bakalım 👀', 'İlginç 😄', 'Hı hı 🙂', 'Devam et, dinliyorum 😊'];
  const TK_DULL = ['Biraz sıkıldım galiba 😐', 'Hmm… başka konu yok mu? 🙄'];
  const TK_HOBI = ['Dans etmeyi seviyorum 💃', 'Kitap okurum, bir de sahilde yürürüm 🌊', 'Film izlemeye bayılırım 🍿', 'Spor yapıyorum, belli olmuyor mu? 😏', 'Müzik… her şey müzik 🎧', 'Yemek yapmayı severim 🍝'];
  // 💗 ayaküstü konuşmada olumlu ilgi kazancı çarpanı · 💡 öneri cümleleri (dokununca yazı kutusuna gelir; TQ / TALK_RE ile eşleşir)
  const TALK_UP = 1.6;
  // 🏡 eve beraber yürürken: buluşunca · yolda · kapıda (sohbetin ilk mesajı)
  const ESC_HI = ['Geldim! Hadi gidelim 😊', 'Yolu sen göster 😏', 'Evin uzak mı? 🙈', 'Sabırsızlanıyorum 😘'];
  const ESC_WALK = ['Daha çok var mı? 😄', 'Elimi tutsana 🤭', 'Bu sokak çok güzelmiş', 'Evin nasıl, dağınık mı? 😏', 'Yavaş yürü, topuklularım var 👠', 'Heyecanlandım biraz 🙈', 'Komşuların bizi görecek 😳'];
  // 👫 sohbetten sonra yanında yürürken
  const WITH_WALK = ['Nereye gidiyoruz? 😊', 'Seninle yürümek güzel 💕', 'Bir şeyler içelim mi? 🍹', 'Sohbetimiz çok güzeldi 😊', 'Elimi bırakma 🤭', 'Bugün bana ayırdığın için teşekkürler 🥰', 'Hadi bana bir şey ısmarla 😏'];
  const WITH_HI = ['Ben buradayım 😊', 'Hadi biraz dolaşalım 💕', 'Nereye gidiyoruz şimdi? 😏'];
  const ESC_DOOR = ['Demek burada oturuyorsun 😊 içeri girelim mi?', 'Evin çok tatlıymış 🏡', 'Yürüyüş güzeldi… şimdi ne yapıyoruz? 😏', 'Kapıyı açsana, üşüdüm 🙈'];
  const SUG = {
    q: ['Adın ne?', 'Kaç yaşındasın?', 'Ne iş yapıyorsun?', 'Nereye gidiyorsun?', 'Sevgilin var mı? 😏', 'Boş zamanlarında ne yaparsın?', 'Nasılsın bugün?', 'Nerede oturuyorsun?'],
    ilt: ['Gülüşün çok güzel 😊', 'Bu elbise sana çok yakışmış', 'Gözlerin harika', 'Bugün çok tatlısın'],
    esp: ['Haritada seni arıyordum, sonunda buldum 😂', 'Sana bakarken kırmızıda geçtim, şaka şaka 😄', 'Telefonumda bir sorun var: senin numaran yok 😂'],
    dav: ['Bir kahve içelim mi? ☕', 'Bu akşam yemeğe çıkalım mı?', 'Numaranı alabilir miyim? 📱', 'Sana bir içki ısmarlayayım 🍸'],
    ces: ['Seni öpmek istiyorum 💋', 'Çok seksisin 🔥', 'Sana sarılmak istiyorum'],
    ans: ['Evet 😊 ya sen?', 'Hmm, aslında hayır 😄', 'Seni görünce dayanamadım 😏', 'Uzun hikâye, sonra anlatırım 😉', 'Bence evet, kesinlikle 😊']
  };
  const HQ = ['Peki sen ne iş yapıyorsun?', 'Sen bu şehirde mi yaşıyorsun?', 'Buraya sık gelir misin?', 'Kaç yaşındasın sen?', 'Senin adın ne bu arada?', 'Bugün günün nasıl geçti?', 'Sevgilin var mı? 😏', 'Ne tür müzik dinlersin?', 'Beni neden durdurdun? 😄', 'Boş zamanlarında ne yaparsın?', 'İlk görüşte aşka inanır mısın? 💕', 'Benim hakkımda ilk ne düşündün? 👀'];
  const HR = ['Hmm, ilginç 😊', 'Vay, öyle mi? 😄', 'Hoşuma gitti bu 😏', 'Anladım 🙂 seni tanımak güzel', 'Aa, ben de! 😄', 'Bunu beklemiyordum 😳'];
  const HR_SHORT = ['Bu kadar mı? 😒', 'Biraz daha açsana 🙄'];
  const NIGHT_PL = ['kulup', 'gazino', 'pub', 'sinema'], SOCIAL_PL = ['kafe', 'park', 'sahil', 'lunapark', 'magaza'];
  // ✋ durdurma mesafesi: bundan uzaktaki karakter durmaz, peşinden gidersin (yaklaşınca durur)
  const STOP_R = 240;
  /* 🎭 konuşma tarzı: kişilik özelliği → tarz. p = tür başına şans farkı, i = başlangıç ilgisi farkı, hi / ok / bad = tarzın kendi cümleleri (%65) */
  const STYLE_OF = { 'Utangaç': 'utangac', 'Güvensiz': 'utangac', 'Alçakgönüllü': 'utangac', 'Flörtöz': 'flort', 'Özgüvenli': 'flort', 'Şımarık': 'flort', 'Asi': 'flort',
    'Alaycı': 'alayci', 'Kibirli': 'alayci', 'Manipülatif': 'alayci', 'İnatçı': 'alayci', 'Soğuk': 'soguk', 'Ciddi': 'soguk', 'Mantıklı': 'soguk', 'Gizemli': 'soguk', 'Olgun': 'soguk',
    'Neşeli': 'nese', 'Komik': 'nese', 'Çocuksu': 'nese', 'Meraklı': 'nese', 'Romantik': 'romantik', 'Duygusal': 'romantik', 'Sadık': 'romantik', 'Dürüst': 'romantik', 'Anaç': 'romantik' };
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
  /* 📣 laf atma: yakınından (LAF_R) geçen karakter bazen sana laf atar (baloncuk); tanışıklığa, tarzına, geceye, evliliğe göre. Dokunup karşılık verirsen konuşma o sözle ve +LAF_I ilgiyle başlar */
  const LAF_R = 170, LAF_I = 10;
  const LAF = {
    yeni: ['Hey yakışıklı, kaybolmuş gibisin 😏', 'Bakmaya devam edersen ücret alırım 😉', 'Psst! Evet, sen 👀', 'Bu kadar tatlı yürümek yasak olmalı 😘', 'Saat kaç biliyor musun? Yoksa numaranı mı versen 😏', 'Ooo, kim bu böyle? 😳', 'Gülümse biraz, çok ciddisin 😄', 'Yolun buradan mı geçiyordu, yoksa benden mi? 😏',
      'Bu mahallede yenisin galiba 👀', 'Kokun buraya kadar geldi 😏', 'Bir dakika… sen çok mu yakışıklısın, yoksa güneş mi gözümü aldı? ☀️', 'Hey! Bana el sallamayacak mısın? 👋', 'O yürüyüş ne öyle, podyumda mısın? 😏', 'Kalbimi çalıp kaçamazsın 😘', 'Benimle tanışmak istiyorsan şimdi tam zamanı 😉', 'Aa, ayakkabın çok güzelmiş… sahibi de 😏', 'Bu tarafa bakmasan da olurdu, kızardım 🙈', 'Yalnız yürümek yakışmıyor sana 😏'],
    tanis: ['Yine mi sen? Beni takip ediyorsun bence 😏', 'Heey! Selam vermeden mi geçiyorsun? 😤', 'Tanıdık bir yüz 😊 gel buraya!', 'Bak sen kimi gördüm 😄',
      'Geçen sefer yarım kalmıştı konuşmamız 😏', 'Bugün de mi buralardasın? 😄', 'Selam bile yok mu? Ayıp ayıp 😤', 'Seni uzaktan tanıdım, yürüyüşünden 😊', 'Hâlâ numaramı istemedin 😒'],
    yakin: ['Bana yazmayı unuttun mu? 😒', 'Gel bir sarılayım! 🤗', 'Seni burada görmek ne güzel 💕', 'Hey! Bu akşam ne yapıyorsun? 😏',
      'Mesajıma cevap vermedin ama 😤', 'Bugün çok yakışıklısın, söylemem lazımdı 😘', 'Beni özledin mi? Ben özledim 🥺', 'Hadi bir kahve içelim, beş dakika ☕', 'Gel, sana bir sır vereceğim 🤫'],
    sevgili: ['Aşkııım! 😍 buraya gel!', 'Bebeğim! Öpücük vermeden geçemezsin 😘', 'Sevgilim! Beni mi arıyordun? 💋', 'Hey! Görmezden mi geliyorsun beni? 😤💕',
      'Akşam bize mi geliyorsun? 😏', 'Seni burada görünce kalbim hopladı 💓', 'Elimi tutmadan gidersen küserim 😤', 'Bugün iç çamaşırımı senin için seçtim 🙈', 'Hayatım, eve erken gel 😘']
  };
  const LAF_ST = {
    utangac: ['*sana bakıp kızarır* M-merhaba… 🙈', '*el sallar, sonra saklanır* 😳', '*gülümser, hemen önüne bakar* 🙈', 'S-selam… 😳'], flort: ['Bakıyordun, yakaladım 😘', 'Bu tarafa gel yakışıklı 😏', 'Bana bakarken çok tatlı oluyorsun 😉', '*göz kırpar* 😉', 'Benimle yürümek ister misin? 😏'],
    alayci: ['Ne o, yolunu mu kaybettin? 🙄', 'Çok bakıyorsun, fotoğraf çek istersen 😏', 'Ağzın açık kaldı, kapat istersen 🙃', 'Vay, kendine güveniyorsun bakıyorum 😏'], soguk: ['…sen. Evet, sen. Bakıp durma.', 'Hm. Fena değilsin.', 'Yolumdan çekilir misin.', '*sana kısa bir bakış atar*'],
    nese: ['Heeey! 😄 neşeni nereye bıraktın?', 'Selaaam yabancı! 🌞', 'Güzel bir gün değil mi? 😁', 'Hey! Gülümse, hayat güzel 😄'], romantik: ['Ne güzel bir gün, değil mi? ✨', 'Gözlerin… çok güzel 🌹', 'Gün batımını beraber izlesek mi? 🌅', 'Sende bir şey var… 🌹']
  };
  const LAF_NIGHT = ['Gece daha yeni başlıyor, katılsana 🍸', 'Yalnız mısın bu gece? 😏', 'Dans etmeyi biliyor musun? 💃', 'Bir içki ısmarlasana 🍹', 'Bu gece eve erken gitmek yok 😈', 'Kulübe mi gidiyorsun? Beni de al 🪩', 'Gece bu kadar güzel olmamalı… sen de 😏'];
  const LAF_WED = ['Kocam görmeden geç yanımdan 🤫', 'Psst… yüzüğüme bakma, bana bak 😏', 'Kocam şehir dışında bu akşam… 😏', 'Evliyim ama kör değilim 😉'];
  // ✋ seni durduruşu: yanına gelip konuşmayı o başlatır
  const STOP_L = {
    yeni: ['Pardon, bir saniye! Saat kaç biliyor musun? 🙂', 'Hey, dur! Seni bir yerden tanıyor muyum? 🤔', 'Bekle! Az önce bir şey düşürdün sanırım 😊', 'Affedersin, kafeye nasıl gidilir? ☕', 'Dur bir saniye… çok tatlısın, söylemem lazımdı 🙈', 'Hey! Çakmağın var mı? 😏'],
    tanis: ['Heey! Kaçma, dur! 😄', 'Seni gördüm, selam vermeden geçemezsin 😏', 'Dur dur! Sana bir şey anlatacağım 😆'],
    yakin: ['Dur! Seni özledim 🥺', 'Bekle, nereye böyle acele? 😏', 'Hey! Beni görmedin mi yoksa? 😤'],
    sevgili: ['Aşkım! Dur, öpmeden gitme 😘', 'Bebeğim, beni bekle! 💕', 'Hayatım dur, sana sarılayım 🤗']
  };
  // 👥 toplanıp kendi aralarında sohbet (sırayla konuşurlar) · 📱 telefonda konuşma (tek taraf)
  const CONV = [
    ['Dün akşam nereye kayboldun? 😏', 'Sorma, sabaha kadar dans ettik 💃', 'Ben de gelmek istiyordum ya!', 'Bir dahakine beraber gideriz 😄'],
    ['Şu kafedeki garsonu gördün mü? 😍', 'Görmez olur muyum, çok yakışıklı', 'Bugün numarasını isteyeceğim 😈', 'Cesaretine hayranım 😂'],
    ['Yeni elbisem nasıl olmuş?', 'Bayıldım! Nereden aldın?', 'AVM\'deki butikten, indirimdeydi 🛍️', 'Yarın beraber gidelim mi?'],
    ['Hafta sonu sahile mi gitsek? 🏖️', 'Olur, yeni bikinimi denemem lazım 👙', 'Ben de güneş kremi alayım', 'Kokteyller benden 🍹'],
    ['Duydun mu, komşunun kızı ayrılmış!', 'Hayır yaa, ne zaman? 😱', 'Dün gece, mesajla bitirmiş', 'Vay be… hiç beklemiyordum'],
    ['İşte bugün çok yoruldum 😩', 'Hadi bir şeyler içelim, kafan dağılsın', 'Pub\'a mı gidelim?', 'Tamam, saat 9\'da orada 🍺'],
    ['Şu adam bize bakıyor bence 👀', 'Hangisi? Aa, fena değil 😏', 'Gidip konuşsana', 'Yok yok, önce o gelsin 😌'],
    ['Akşam sinemaya gidiyor muyuz? 🍿', 'Hangi film?', 'Romantik bir şey olsun 💕', 'Yine ağlayacaksın biliyorum 😂'],
    ['Spor salonuna yeni hoca gelmiş 💪', 'Gördüm, çok sert ama', 'Bence tam ihtiyacımız olan 😏', 'Sen hocaya mı bakıyorsun egzersize mi 😂'],
    ['Kocam bu akşam geç gelecekmiş', 'Kızlar gecesi o zaman! 🍷', 'Bizde toplanalım', 'Ben cips getiririm 😄'],
    ['Masaj salonunu denedin mi? 💆‍♀️', 'Evet, eller sihirli resmen', 'Randevu alayım o zaman', 'Benim adımı ver, indirim yaparlar 😉'],
    ['Gece kulübünde bu cuma parti var 🪩', 'Ne giyeceğimi bilmiyorum hâlâ', 'Kırmızı elbiseni giy, olay olur 🔥', 'Tamam, ama sen de topuklu giy 😄'],
    ['Saçımı kestirdim, fark ettin mi? 💇‍♀️', 'Aa evet! Çok yakışmış', 'Kuaför biraz kısa kesti ama', 'Hiç de değil, harika olmuş 😍'],
    ['Diyete başladım bu hafta 🥗', 'Yine mi? 😂', 'Bu sefer ciddiyim!', 'Pastaneyi görene kadar 😆']
  ];
  // 🗺️ bölgeye göre sohbetler (ev mahalle · dt merkez · ex eğlence caddesi · cs sahil şeridi) + 🌙 gece; convAt seçer, yoksa genel CONV
  const CONV_Z = {
    ev: [['Komşunun köpeği yine bütün gece havladı 🐶', 'Bizim apartmanda da aynı dert', 'Yönetime şikâyet edelim', 'Ben dilekçeyi yazarım 😤'],
      ['Bahçedeki domatesler kızardı 🍅', 'Bana da getir, salata yaparım', 'Akşama bize gel o zaman', 'Şarabı ben getiririm 🍷'],
      ['Yan eve yeni biri taşınmış 👀', 'Gördüm, yakışıklı mı?', 'Çok! Kek götürsek mi? 🍰', 'Hemen şimdi 😂'],
      ['Kocam yine geç gelecek 🙄', 'Bizimki de maçta', 'Kızlar gecesi o zaman 🍿', 'Pijamalarla! 😄'],
      ['Bakkalda indirim varmış 🛒', 'Ne indirimi?', 'Çikolatada! 🍫', 'Diyet yarına kaldı 😂'],
      ['Kedim yine kaçtı 🐱', 'Dün bizim balkondaydı', 'Ciddi mi? Bana söylesene!', 'Sana mama bıraktım bile 😄']],
    dt: [['Toplantı yine uzadı 😩', 'Patron hiç susmadı değil mi?', 'İki saat! Kahve şart ☕', 'Kafeye gidelim, ben ısmarlıyorum'],
      ['Bankada sıra bitmiyor 🏦', 'Online yapsana', 'Şifremi unuttum 😅', 'Klasik sen 😂'],
      ['Şu butikte yeni sezon gelmiş 👗', 'İçeri bakalım mı?', 'Sadece bakacağız ama!', 'Tabii tabii 😏'],
      ['Öğle yemeğine ne yesek? 🍝', 'Restoranda makarna?', 'Dün de makarna yedik', 'Pizza o zaman 🍕'],
      ['Ofisteki yeni çocuk sana bakıyor 😏', 'Saçmalama', 'Valla! Asansörde de baktı', 'Belki kahveye çağırırım ☕'],
      ['Eczaneden vitamin aldım 💊', 'Yine mi yorgunsun?', 'İş beni bitirdi', 'Hafta sonu spa yapalım 💆‍♀️']],
    ex: [['Karaokede ne söyleyeceğiz? 🎤', 'Tabii ki eski aşk şarkıları', 'Sen yine ağlarsın 😂', 'Bu sefer dans ederim 💃'],
      ['Kokteyl barda happy hour başladı 🍹', 'Koşun kızlar!', 'İlk tur benden', 'İkinci tur da senden 😄'],
      ['Dövme yaptırmaya karar verdim ✒️', 'Nereye?', 'Belime, küçük bir kalp ❤️', 'Ben de yaptırırım, ikiz olsun!'],
      ['Kumarhanede dün 500 kazandım 🃏', 'Yalan!', 'Valla, hepsini ayakkabıya harcadım 👠', 'Tam senlik 😂'],
      ['Kulübün kapısındaki koruma bana yürüyor 😏', 'Hangisi, iri olan mı?', 'Evet, beni sırasız aldı', 'VIP misin artık 😂'],
      ['Burgerci mi pizzacı mı? 🍔', 'İkisi de!', 'Yarın spor salonunda ağlarız', 'Değer ama 😋']],
    cs: [['Dondurma mı alsak? 🍦', 'Çilekli olsun', 'Ben limonlu', 'Sahilde yiyelim 🏖️'],
      ['Rüzgâr saçımı mahvetti 😩', 'Yine de çok güzelsin', 'Yalancı 😄', 'Selfie çekelim 📸'],
      ['Akşam balık yiyelim mi? 🐟', 'Balıkçıda yer ayırtırım', 'Bir de tatlı olsun', 'Tamam ama ben ödüyorum 😏'],
      ['Sörf dersi alacağım 🏄‍♀️', 'Hoca yakışıklıymış', 'Ondan alacağım zaten 😂', 'Ben de geliyorum!'],
      ['Mayo butiğinde indirim var 👙', 'Gidelim mi?', 'Kırmızı olanı alacağım', 'Herkes sana bakacak 🔥']],
    night: [['Bu gece eve dönmüyorum 😈', 'Nereye gidiyoruz?', 'Önce kulüp, sonra kim bilir', 'Ben varım! 🪩'],
      ['Topuklularım beni öldürüyor 👠', 'Çıkar, yalınayak yürü', 'Delirdin mi 😂', 'Taksi çağıralım 🚕'],
      ['Şu adam numaramı istedi 😳', 'Verdin mi?', 'Yanlış numara verdim 😂', 'Kötüsün sen 😆'],
      ['Gece daha yeni başlıyor 🌙', 'Bir shot daha mı?', 'Son olsun ama', 'Her seferinde öyle diyorsun 😂'],
      ['Ayy rujum dağıldı mı? 💄', 'Biraz, gel düzelteyim', 'Sen olmasan ne yapardım', 'Kulübe rezil girerdin 😂']]
  };
  const PHONE_NIGHT = [
    ['Neredesin? Kulübün önündeyim 🪩', 'Listeye adımı yazmamışlar!', 'Gel de beni kurtar 😩'],
    ['Aşkım bu gece kızlarla çıkıyorum 💃', 'Merak etme, erken gelirim', '…belki 😏'],
    ['Taksi çağırdım, beş dakikaya oradayım 🚕', 'Bana bir içki söyle', 'Sek olsun 🍸'],
    ['Hâlâ uyumadın mı? 🌙', 'Ben de seni düşünüyordum…', 'Gelsene 😏']
  ];
  // 🚗 araba içi sohbet (yolcular sırayla); otobüs ayrı
  const CAR_CONV = ['Şu şarkıyı aç! 🎶', 'Sağdan dön, sağdan!', 'Klimayı kıssana 🥶', 'Benzin bitmek üzere ⛽', 'Bu trafik bitmeyecek 😩', 'Camı açayım mı?', 'Şu adama bak, korna çalıyor 😂', 'Yavaş git, midem bulandı 🤢', 'Navigasyon yine saçmaladı 🗺️', 'Yol boyunca şarkı söyleyelim 🎤', 'Akşam nereye gidiyoruz? 😏', 'Park yeri bulamayacağız 🅿️', 'Kemerini tak! 🚗', 'Sahil yolundan gidelim 🌊', 'Gaza bas biraz 😈', 'Kırmızı ışıktı o! 🚦', 'Rujumu aynada düzelteyim 💄', 'Kim cips getirdi? 🥨'];
  const BUS_CONV = ['Durakta inecek var! 🚌', 'Pardon, burası boş mu?', 'Of, çok kalabalık 😩', 'Şoför bey, sahilde iner miyim?', 'Biri ayağıma bastı 😤', 'Yer verir misiniz? 🙏'];
  // 🚗 senin araban (5 kişilik pembe SUV)
  const CAR_ME = { kind: 'suv', col: '#ff3d8b', sp: 210 };
  const CAR_WITH = ['Araban çok güzelmiş 😍', 'Müziği açsana 🎶', 'Yavaş sür, korkuyorum 🙈', 'Camı biraz açar mısın?', 'Seninle gece gezmesi yapmalıyız 🌙', 'Elini dizimden çek… şaka şaka 😏'];
  const CAR_SEAT = { sedan: 4, hatch: 4, suv: 5, spor: 2, van: 6, pickup: 2, cabrio: 2, polis: 2, bus: 8 };
  // 👥 gruba katılınca: diğerlerinin karşılaması ve araya girişleri
  const GJ_HI = ['Aa, aramıza biri katıldı 😄', 'Hoş geldin! Biz de tam dedikodu yapıyorduk 🤭', 'Kimmiş bu yakışıklı? 😏', 'Kızlar, bakın kim geldi 👀', 'Selam! Tanışıyor muyuz? 😊'];
  const GJ_OK = ['Hihi, hoşuma gitti bu 😄', 'Bana da söyle bunu 😏', '*kıkırdar*', 'Bak sen, cesur çıktı 👀', 'Kızım, bu sana yürüyor 😂', 'Ben gitsem mi, sizi yalnız mı bıraksam? 😏', 'Vay, çok tatlı 🥰'];
  const GJ_BAD = ['Hadi ya 🙄', '*gözlerini devirir*', 'Bu biraz fazlaydı 😅', 'Kızım, gidelim mi? 😒', 'Ayy, utandım senin yerine 🙈', 'Başka bir şey dene istersen 😂'];
  // 🏖️ sahilde toplananlar (isimsiz)
  const BEACH_CONV = ['Kumdan kale yapalım 🏰', 'Sırtıma krem sürer misin? 🧴', 'Cankurtaran çok yakışıklı 😍', 'Su soğuk mu? 🥶', 'Martılar simidimi kaptı! 🐦', 'Güneş gözlüğümü gördün mü? 🕶️', 'Bir tur daha yüzelim 🏊‍♀️', 'Bronzlaşmışım bak! ☀️', 'Su çok güzel bugün! 🌊', 'Güneş kremini verir misin? 🧴', 'Voleybol oynayalım mı? 🏐', 'Şu cankurtaran bakıyor bize 👀', 'Bikinim nasıl olmuş? 👙', 'Bir kokteyl daha alalım 🍹', 'Yanmışım galiba 😩', 'Akşam plaj partisi var 🎶', 'Dondurma isteyen? 🍦', 'Fotoğraf çekelim, ışık harika 📸', 'Denize kim önce girecek? 😄', 'Şu dalgalara bak! 🏄‍♀️'];
  const PHONE = [
    ['Alo anne? Evet, yoldayım…', 'Hayır yemek yedim, merak etme', 'Tamam, akşam ararım 😘'],
    ['Kızım sen deli misin? 😂', 'Gerçekten öyle mi dedi?', 'Bayıldım, anlat anlat!'],
    ['Aşkım neredesin? 😒', 'Yarım saattir bekliyorum…', 'Tamam, hemen gel ama 💕'],
    ['Evet efendim, toplantıya yetişirim', 'Dosyalar masanızda', 'İyi günler 🙂'],
    ['Bu akşam boş musun? 😏', 'Bizde film izleriz…', 'Şarabı sen getir 🍷'],
    ['Alo? Seni duyamıyorum!', 'Şimdi? Şimdi duyuyor musun?', 'Of, çekmiyor burası 📶'],
    ['Pizza siparişi vermek istiyorum 🍕', 'Bol peynirli olsun', 'Adres sahil yolu, teşekkürler'],
    ['Of, yine mi sen? 🙄', 'Sana söyledim, bitti', 'Arama bir daha!'],
    ['Kanka bu akşam kulübe gidiyoruz 🪩', 'Listeye adımı yazdırdın mı?', 'Süper, 11\'de kapıdayım'],
    ['Doktor bey, randevumu değiştirebilir miyiz?', 'Yarın öğleden sonra olur', 'Çok teşekkürler 🙏'],
    ['Biliyor musun, bugün biriyle tanıştım 😳', 'Çok tatlıydı ya…', 'Sonra anlatırım, şimdi sokaktayım 🙈'],
    ['Hayatım, kargon geldi mi? 📦', 'O elbise senin için değil, benim için 😏', 'Akşam görürsün 😘']
  ];
  // 🚗 arabadan laf / 📯 korna / 💡 selektör
  const LAF_CAR = ['Atla da gezdireyim 😏🚗', 'Yürümekten yorulmadın mı? Bin hadi 😉', 'Bu kadar güzel yürüme, kaza yapacağım 😳', 'Nereye böyle? Bırakayım seni 😘', 'Camı açtım sırf senin için 😏', 'Yan koltuk boş, haberin olsun 💋'];
  const LAF_HONK = ['📯 Düt düt! 😏', '📯 Bip bip! Bakar mısın? 😘', '📯 Düüüt! Hey, sana diyorum 😄', '📯 *iki kez korna çalar* 😉'];
  const LAF_FLASH = ['💡💡 *selektör yapar* 😏', '💡 *farları yakıp söndürür* Hey sen! 😉', '💡💡 *göz kırpar gibi selektör* 😘'];
  // araç türleri: [uzunluk, genişlik]
  const CAR_K = { sedan: [38, 20], hatch: [31, 19], suv: [42, 23], spor: [40, 19], van: [46, 23], pickup: [43, 22], cabrio: [38, 20], polis: [39, 20], bus: [70, 24] };
  const CAR_MIX = ['sedan', 'sedan', 'sedan', 'hatch', 'hatch', 'suv', 'suv', 'spor', 'van', 'pickup', 'cabrio', 'polis', 'bus'];
  const OWN_K = ['sedan', 'hatch', 'suv', 'spor', 'cabrio', 'pickup', 'van'];
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
      <div class="ct-side"><button type="button" class="ct-btn ct-phone" data-ct="phone" title="Şehir sohbetleri">📱<i class="ct-dot" hidden></i></button><button type="button" class="ct-btn" data-ct="car" title="Araban">🚗</button><button type="button" class="ct-btn" data-ct="me" title="Bana odaklan">🎯</button><button type="button" class="ct-btn" data-ct="in">＋</button><button type="button" class="ct-btn" data-ct="out">－</button></div>
      <button type="button" class="ct-btn ct-exit" id="ctExit" hidden>🚪 Dışarı çık</button>
      <div class="ct-card" id="ctCard" hidden></div>`;
    const cv = root.querySelector('.ct-cv'), ctx = cv.getContext('2d'), card = root.querySelector('#ctCard'), clk = root.querySelector('#ctClk'), phEl = root.querySelector('#ctPh'), spBtn = root.querySelector('#ctSp');
    const sv = load() || {}, met = sv.met || {};
    // 👫 sohbete geçtiğin kişi(ler): sohbetten dönünce yanında olur (3 saat içinde dönersen)
    let withIds = Array.isArray(sv.wth) ? sv.wth : [], wthAt = sv.wthAt || 0;
    let sp = SPEEDS.some(s => s[0] === sv.sp) ? sv.sp : 60;
    const nowMin = () => { const d = new Date(); return d.getHours() * 60 + d.getMinutes(); };
    let gm = sv.gm != null ? (sv.gm + (Date.now() - (sv.at || Date.now())) / 1000 * sp / 60) % 1440 : nowMin();
    const hourOf = () => Math.floor(gm / 60) % 24;
    // 🏡 ilk açılışta evinin önünde başlarsın
    const home0 = sidePt(PL.benim.node);
    const svK = SC / (sv.sc || 1);
    const me = { x: sv.px ? sv.px * svK : home0[0], y: sv.py ? sv.py * svK : home0[1], a: 0, path: null, pi: 0, dest: null, chase: null, tries: 0, ix: RW / 2, iy: RH - 30, itx: RW / 2, ity: RH - 30 };
    let cw = 0, ch = 0, dpr = 1, follow0 = true, sel = null, lastH = -1, t0 = performance.now(), tNow = 0, savedAt = 0, alive = true, talk = null;
    const cam = { x: me.x, y: me.y, z: 1.5 };
    // 🚗 araban: ilk açılışta evinin önündeki yolda park hâlinde; sürüyorsan (dr) seninle
    const myCar = (() => {
      if (Array.isArray(sv.car)) return { x: sv.car[0] * svK, y: sv.car[1] * svK, sa: +sv.car[2] || 0 };
      const n = wd.nodes[wd.nearest(home0[0], home0[1], 1)], m = wd.nodes[(n.adj[0] || [wd.nodes.indexOf(n)])[0]] || n, sa = Math.atan2(m.y - n.y, m.x - n.x);
      return { x: n.x - Math.sin(sa) * n.hw * .8, y: n.y + Math.cos(sa) * n.hw * .8, sa };
    })();
    me.drive = !!sv.dr; me.sa = me.a;

    // 👥 karakterler (saatine göre) + 🙋‍♀️ yabancılar (kendi kafasına göre)
    const homes = api.homes();
    const mkAg = (c, str) => ({ id: c.id, c, str, skin: SKIN_C[api.skin(c)] || '#e0b48e', w: null, k: null, to: null, st: 'in', x: 0, y: 0, a: 0, path: null, pi: 0, sp: 40 + hash(c.id + 's') % 16, leaveAt: 0, idle: 0, next: 0, hold: false });
    const day = Math.floor(Date.now() / 864e5);
    const strs = api.strangers().filter(x => x.photo).sort((a, b) => hash([a.id, day]) - hash([b.id, day])).slice(0, 56);
    const ag = [...api.chars().map(c => mkAg(c, false)), ...strs.map(c => mkAg(c, true))];
    // 🚶 rutinsiz yayalar da carmen.com kızları (fotoğraflı); dokununca yabancı karaktere dönüşür (promote)
    const pedPool = api.strangers().filter(x => x.photo && !ag.some(a => a.id === x.id)).sort((a, b) => hash([a.id, day, 'p']) - hash([b.id, day, 'p']));
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
      const pl = plOf(a.k), from = ex.pre[0] || [a.x, a.y];
      // 🚗 arabası olan uzak yere arabayla gider (alana varınca iner, yürür)
      a.drive = !!a.car && Math.hypot(pl.x - a.x, pl.y - a.y) > 650;
      let pts;
      if (a.drive) {
        pts = [...ex.pre, ...carPath(roadOf(ex.s), roadOf(pl.node))];
        pts.push(pl.area ? sidePt(pl.node) : towardB(pl.node, pl.x, pl.y));
      } else {
        pts = [...ex.pre, ...walkPath(route(ex.s, pl.node), ...from, laneOf(a))];
        if (!pl.area) pts[pts.length - 1] = towardB(pl.node, pl.x, pl.y);
        if (pl.area) pts.push(areaPt(pl, pts[pts.length - 1]));
      }
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
      if (Math.random() < .35) { const ex = exitOf(a); a.k = '~'; a.to = null; a.path = [...ex.pre, ...walkPath(route(ex.s, (Math.random() * wd.nodes.length) | 0), ...(ex.pre[0] || [a.x, a.y]), laneOf(a))]; a.pi = 0; a.st = 'walk'; a.w = { doing: 'sokakta yürüyor 🚶‍♀️' }; return; }
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
    // ⚡ yaya / araba yeni rotası: yayalar yakındaki bir düğüme gider (kısa A*); kare başına en çok ROUTE_N rota, gerisi sırada bekler
    const ROUTE_N = 10;
    let routeLeft = ROUTE_N;
    const newTrip = o => {
      // 🚗 kameradan çok uzaktaki araba da ekranın dışındaki yakın bir yoldan yeniden başlar (trafik hep çevrende)
      if (o.car && tNow > 0 && Math.hypot(o.x - cam.x, o.y - cam.y) > 1800) {
        const j = nearCamNode();
        if (j >= 0) { const n = wd.nodes[wd.nearest(wd.nodes[j].x, wd.nodes[j].y, 1)]; if (!vis(n.x, n.y, 40)) { o.x = n.x; o.y = n.y; } }
      }
      if (!o.car && tNow > 0 && Math.hypot(o.x - cam.x, o.y - cam.y) > 1500) {
        const j = nearCamNode();
        if (j >= 0) {
          [o.x, o.y] = sidePt(j);
          // karaktere dönüşmüş yayanın yerine yeni bir kız
          if (o.gone && pedPool.length) { const c = pedPool[(R() * pedPool.length) | 0]; if (!ag.some(a => a.id === c.id)) { o.c = c; o.skin = SKIN_C[api.skin(c)] || '#e0b48e'; o.gone = false; } }
        }
      }
      const from = wd.nearest(o.x, o.y, o.car);
      let to = o.car ? rndRoad() : (R() * wd.nodes.length) | 0;
      if (!o.car) for (let k = 0; k < 6; k++) { const j = (R() * wd.nodes.length) | 0; if (Math.hypot(wd.nodes[j].x - o.x, wd.nodes[j].y - o.y) < 700) { to = j; break; } }
      o.path = offPath(route(from, to, o.car), o.car ? n => n.hw * .5 : n => (walkSide(n) + o.lane) * o.side); o.pi = 0;
    };
    // 🚗 öndeki araca yaklaşınca yavaşla / dur; 2,5 sn'den uzun beklerse geçer (kavşak kilitlenmesin)
    let drvs = [];
    const carLen = o => (CAR_K[o.kind || (o.car && o.car.kind)] || CAR_K.sedan)[0];
    function carFactor(o, dt) {
      const an = o.sa || 0, ca = Math.cos(an), sn = Math.sin(an), L = carLen(o);
      let f = 1;
      for (const q of drvs) {
        if (q === o) continue;
        const dx = q.x - o.x, dy = q.y - o.y;
        if (Math.abs(dx) > 90 || Math.abs(dy) > 90) continue;
        const ahead = dx * ca + dy * sn, side = -dx * sn + dy * ca;
        if (ahead <= 0 || Math.abs(side) > 14) continue;
        const gap = ahead - (L + carLen(q)) / 2;
        if (gap < 30) f = Math.min(f, Math.max(0, (gap - 6) / 24));
      }
      if (f < .05) { o.wt = (o.wt || 0) + dt; if (o.wt > 2.5) return 1; } else o.wt = 0;
      return f;
    }
    // 🚶 yayalar üst üste binmesin: ekrandakilerden çok yakın ikisini birbirinden it (sen ve duranlar itilmez, binaya girilmez)
    function separate(dt) {
      const C = 16, R2 = CS * .9, g = new Map(), L = [];
      const add = (o, fix) => { if (!vis(o.x, o.y, 60)) return; const k = Math.floor(o.x / C) + ',' + Math.floor(o.y / C); let c = g.get(k); if (!c) g.set(k, c = []); c.push(o); L.push(o); o.fx = fix; };
      peds.forEach(o => { if (!o.gone) add(o, false); });
      ag.forEach(a => { if (a.st !== 'in' && !a.drive && !a.inCar) add(a, !!a.hold || !!a.grp || a.st === 'stand'); });
      if (!inside && !me.taxi && !me.drive) add(me, true);
      const m = Math.min(1, dt * 10);
      for (const o of L) {
        if (o.fx) continue;
        const gx = Math.floor(o.x / C), gy = Math.floor(o.y / C);
        for (let i = -1; i <= 1; i++) for (let j = -1; j <= 1; j++) for (const q of g.get((gx + i) + ',' + (gy + j)) || []) {
          if (q === o) continue;
          const dx = o.x - q.x, dy = o.y - q.y, d = Math.hypot(dx, dy);
          if (d >= R2 || d < .01) continue;
          const push = (R2 - d) * (q.fx ? 1 : .5) * m, nx = o.x + dx / d * push, ny = o.y + dy / d * push;
          if (!wd.solid(nx, ny)) { o.x = nx; o.y = ny; }
        }
      }
    }
    const cars = Array.from({ length: 150 }, (_, i) => {
      const n = wd.nodes[rndRoad()], taxi = i % 6 === 0, kind = taxi ? 'sedan' : CAR_MIX[(R() * CAR_MIX.length) | 0];
      const o = { car: 1, x: n.x, y: n.y, a: 0, sa: 0, sp: kind === 'bus' ? 70 + R() * 15 : kind === 'spor' ? 140 + R() * 40 : 95 + R() * 45, col: CAR_C[i % CAR_C.length], taxi, kind };
      // 🧑‍🤝‍🧑 yolcular (şoför dahil): koltuk sayısı kadar, çoğu 1–3 kişi; otobüs kalabalık
      if (pedPool.length) o.pax = Array.from({ length: Math.min(CAR_SEAT[kind] || 4, 1 + ((R() * (kind === 'bus' ? 8 : 3.4)) | 0)) }, () => pedPool[(R() * pedPool.length) | 0]);
      newTrip(o); return o;
    });
    // 🚘 bazı karakterlerin arabası var (id'ye göre sabit: tanıdıklar %40, yabancılar %25)
    ag.forEach(a => {
      const h = hash(a.id + ':car');
      a.car = h % 100 < (a.str ? 25 : 40) ? { kind: OWN_K[(h >>> 7) % OWN_K.length], col: CAR_C[(h >>> 11) % CAR_C.length], sp: 110 + (h >>> 3) % 40 } : null;
    });
    const PED_C = ['#ef9a9a', '#90caf9', '#a5d6a7', '#ffe082', '#ce93d8', '#ffab91', '#80cbc4', '#f48fb1'];
    const peds = Array.from({ length: 520 }, (_, i) => { const n = wd.nodes[(R() * wd.nodes.length) | 0], o = { x: n.x, y: n.y, a: 0, sa: 0, sp: 24 + R() * 16, col: PED_C[i % PED_C.length], side: R() < .5 ? 1 : -1, lane: (R() - .5) * 20, path: [], pi: 0 };
      const c = pedPool.length ? pedPool[i % pedPool.length] : null;
      if (c) { o.c = c; o.skin = SKIN_C[api.skin(c)] || '#e0b48e'; } return o; });
    const pedBy = PED_C.map(c => peds.filter(o => o.col === c));
    const movers = [...cars, ...peds];
    // 🏖️ sahilde güneşlenenler (havlu üstünde uzanır, 08–19) + ayakta toplanan küçük gruplar (isimsiz, 08–21, ara ara baloncuk)
    const pickR = L => L[(R() * L.length) | 0], beachOn = h2 => { const h = hourOf(); return h >= 8 && h < h2; };
    const SUN_C = ['#ff6b6b', '#4dabf7', '#ffd93d', '#ff8cc6', '#69db7c', '#b197fc', '#ffa94d'], SKN = ['#f0cfb6', '#d9a77c', '#c38959', '#99633e', '#f7e3d6'];
    const sunb = [], bgrp = [];
    wd.beachPts.forEach((c, i) => {
      for (let j = 0; j < 2; j++) if (R() < .6) { const d = 35 + R() * 140, x = c.x + c.lx * d + (R() - .5) * 20, y = c.y + c.ly * d + (R() - .5) * 20; if (!wd.nearRoad(x, y, SW) && !wd.inSea(x, y)) sunb.push({ x, y, a: c.a + (R() - .5) * .7, tw: pickR(SUN_C), sk: pickR(SKN), bk: pickR(SUN_C) }); }
      if (i % 4 === 1) {
        const d = 55 + R() * 110, x = c.x + c.lx * d, y = c.y + c.ly * d, n = 2 + ((R() * 3) | 0);
        if (!wd.nearRoad(x, y, SW + 10) && !wd.inSea(x, y)) bgrp.push({ x, y, who: 0, txt: '', t: 0, next: 2000 + R() * 9000, m: Array.from({ length: n }, (_, j) => { const an = j / n * Math.PI * 2 + R(), c = pedPool.length ? pickR(pedPool) : null; return { x: x + Math.cos(an) * 15, y: y + Math.sin(an) * 15, col: pickR(PED_C), c, skin: c ? SKIN_C[api.skin(c)] || '#e0b48e' : '' }; }) });
      }
    });
    // 🚗 araba içi sohbet: 2+ yolculu ekrandaki arabalarda ara ara baloncuk
    function carChat() {
      for (const o of cars) {
        if (!o.pax || o.pax.length < 2 || tNow < (o.ctN || 0)) continue;
        o.ctN = tNow + 4000 + Math.random() * 7000;
        if (!vis(o.x, o.y, 80) || Math.random() > .5) continue;
        o.ctTxt = pickA(o.kind === 'bus' ? BUS_CONV : CAR_CONV); o.ctT = tNow;
      }
    }
    function beachStep() {
      if (!beachOn(21)) return;
      bgrp.forEach(g => { if (tNow > g.next) { g.who = (g.who + 1) % g.m.length; g.txt = pickA(BEACH_CONV); g.t = tNow; g.next = tNow + 4000 + Math.random() * 8000; } });
    }
    // 🚶 sokaklar dolu kalsın: işi biten yaya kameradan uzaktaysa ekranın hemen dışındaki bir düğümde yeniden başlar
    // dokunulan yaya gerçek yabancı karakter olur (kart, süz, ayaküstü konuşma); yayanın yerini alır
    function promote(o) {
      if (ag.some(a => a.id === o.c.id)) return null;
      const a = mkAg(o.c, true);
      a.x = o.x; a.y = o.y; a.k = '~'; a.st = 'stand'; a.w = { doing: 'sokakta yürüyor 🚶‍♀️' }; a.next = tNow + 4000; a.car = null;
      ag.push(a); o.gone = true;
      return a;
    }
    function nearCamNode() {
      for (let k = 0; k < 14; k++) { const i = (R() * wd.nodes.length) | 0, n = wd.nodes[i]; if (Math.hypot(n.x - cam.x, n.y - cam.y) < 1100 && !vis(n.x, n.y, 30)) return i; }
      return -1;
    }
    // 🚕 taksi: kartta "Taksiyle git" → yakındaki bir yoldan sarı taksi gelir, binersin, hedefin önünde inersin (yürümekten ~2,5× hızlı)
    let taxi = null;
    const TAXI_SP = 240;
    const carPath = (a, b) => offPath(route(a, b, 1), n => n.hw * .5);
    const roadOf = i => (wd.nodes[i].foot ? wd.nearest(wd.nodes[i].x, wd.nodes[i].y, 1) : i);
    const pathLen = P => P.reduce((s, q, i) => (i ? s + Math.hypot(q[0] - P[i - 1][0], q[1] - P[i - 1][1]) : 0), 0);
    function taxiGo() { if (!taxi) return; taxi.st = 'leave'; taxi.path = carPath(wd.nearest(taxi.x, taxi.y, 1), rndRoad()); taxi.pi = 0; }
    function callTaxi(k) {
      const p = PL[k] || wd.FM[k];
      if (!p || inside || (taxi && taxi.st === 'ride')) return;
      if (taxi) taxiGo();
      closeCard(); me.chase = null; me.enter = null; me.path = null; me.dest = null; follow0 = true;
      const at = wd.nearest(me.x, me.y, 1), to = PL[k] ? roadOf(PL[k].node) : wd.nearest(p.x, p.y, 1);
      if (at === to) { walkTo(p.x, p.y, k); return; }
      let from = rndRoad();
      for (let i = 0; i < 16; i++) { const j = rndRoad(), d = Math.hypot(wd.nodes[j].x - me.x, wd.nodes[j].y - me.y); if (d > 250 && d < 700) { from = j; break; } }
      const n = wd.nodes[from];
      taxi = { car: 1, x: n.x, y: n.y, a: 0, sa: 0, path: carPath(from, at), pi: 0, st: 'come', k, at, to };
      api.notify(`🚕 ${tr('Taksi çağrıldı')} · ${p.ic} ${tr(p.n)}`, '🚕');
    }
    function stepTaxi(dt) {
      const T = taxi;
      if (!T) return;
      const done = follow(T, (T.st === 'leave' ? 130 : TAXI_SP) * dt);
      let d = T.a - T.sa; d = Math.atan2(Math.sin(d), Math.cos(d)); T.sa += d * Math.min(1, dt * 8);
      if (T.st === 'ride') { me.x = T.x; me.y = T.y; }
      if (!done) return;
      if (T.st === 'come') { T.st = 'ride'; me.taxi = true; me.x = T.x; me.y = T.y; T.path = carPath(T.at, T.to); T.pi = 0; T.len = pathLen(T.path); api.notify(tr('🚕 Taksiye bindin'), '🚕'); return; }
      if (T.st === 'ride') {
        const k = T.k, p = PL[k] || wd.FM[k];
        me.taxi = false; me.node = null;
        [me.x, me.y] = PL[k] ? (p.area ? sidePt(p.node) : towardB(p.node, p.x, p.y)) : doorOf(k);
        api.notify(`🚕 ${p.ic} ${tr(p.n)} · ${(T.len / 1000).toFixed(1)} km`, '📍');
        taxiGo(); openCard(k);
        return;
      }
      taxi = null;
    }
    function drawTaxi() {
      const T = taxi;
      if (!T || !vis(T.x, T.y, 40)) return;
      if (T.st === 'ride') { ctx.strokeStyle = 'rgba(255,61,139,.7)'; ctx.lineWidth = 2.5; ctx.beginPath(); ctx.arc(T.x, T.y, 24 + (tNow / 100) % 7, 0, Math.PI * 2); ctx.stroke(); }
      ctx.save(); ctx.translate(T.x, T.y); ctx.rotate(T.sa);
      ctx.fillStyle = 'rgba(0,0,0,.25)'; rr(-15, -6, 32, 17, 4); ctx.fill();
      ctx.fillStyle = '#ffd400'; rr(-16, -8.5, 32, 17, 4); ctx.fill();
      ctx.fillStyle = '#222'; for (let i = 0; i < 6; i++) { ctx.fillRect(-12 + i * 4, i % 2 ? -8.5 : -6.5, 4, 2); ctx.fillRect(-12 + i * 4, i % 2 ? 6.5 : 4.5, 4, 2); }
      ctx.fillStyle = 'rgba(30,40,60,.75)'; ctx.fillRect(5, -5.5, 5, 11); ctx.fillRect(-11, -5.5, 4, 11);
      ctx.fillStyle = '#fff'; rr(-3, -3, 6, 6, 1.5); ctx.fill();
      ctx.restore();
      if (cam.z >= .7) nameTag(T.st === 'ride' ? `🚕 ${tr('Sen')}` : '🚕', T.x, T.y - 22 * tagK(), T.st === 'ride' ? '#ff3d8b' : undefined);
    }
    const boats = [[900, 2040, 260, 60, .05], [2250, 1990, 200, 70, -.07], [2880, 950, 50, 260, .04]].map(([cx, cy, rx, ry, s], i) => ({ cx, cy, rx, ry, s, ph: i * 2 }));

    /* 🎨 çizim */
    const rr = (x, y, w, h, r) => { ctx.beginPath(); if (ctx.roundRect) ctx.roundRect(x, y, w, h, r); else ctx.rect(x, y, w, h); };
    const darkAt = hf => hf >= 6.5 && hf < 17.5 ? 0 : hf >= 17.5 && hf < 20.5 ? (hf - 17.5) / 3 * .58 : hf >= 5 && hf < 6.5 ? (6.5 - hf) / 1.5 * .58 : .58;
    const vis = (x, y, m) => Math.abs(x - cam.x) * cam.z < cw / 2 + m * cam.z && Math.abs(y - cam.y) * cam.z < ch / 2 + m * cam.z;
    const tagK = () => 1.15 / Math.pow(cam.z, .65);
    function drawGround(t) {
      ctx.fillStyle = '#b9c99b'; ctx.fillRect(X0 - 400, Y0 - 400, W - X0 + 800, H - Y0 + 800);
      ctx.save(); ctx.scale(SC, SC);
      ctx.fillStyle = '#aec290'; ctx.beginPath(); ctx.ellipse(-650, 820, 720, 820, 0, 0, Math.PI * 2); ctx.fill(); ctx.beginPath(); ctx.ellipse(1300, -470, 1550, 470, 0, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = '#d6d2c9'; ctx.beginPath(); ctx.ellipse(1650, 860, 820, 540, -.08, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = '#b3c695'; ctx.beginPath(); ctx.ellipse(430, 470, 470, 430, 0, 0, Math.PI * 2); ctx.fill();
      ctx.restore();
      FIELDS.forEach(([x, y, w, h, a, b]) => { ctx.fillStyle = a; ctx.fillRect(x, y, w, h); ctx.strokeStyle = b; ctx.lineWidth = 4; ctx.beginPath(); for (let i = 8; i < w; i += 14) { ctx.moveTo(x + i, y + 4); ctx.lineTo(x + i, y + h - 4); } ctx.stroke(); });
      // 🌳 park + göl
      ctx.fillStyle = '#8fb873'; ctx.beginPath(); ctx.ellipse(PKX, PKY, 205, 265, 0, 0, Math.PI * 2); ctx.fill();
      ctx.strokeStyle = '#ddd0ae'; ctx.lineWidth = 14; ctx.beginPath(); ctx.ellipse(PKX, PKY, 130, 169, 0, 0, Math.PI * 2); ctx.stroke();
      ctx.fillStyle = '#5ea9cf'; ctx.beginPath(); ctx.ellipse(PKX, PKY, 88, 118, 0, 0, Math.PI * 2); ctx.fill();
      ctx.strokeStyle = 'rgba(255,255,255,.5)'; ctx.lineWidth = 2; ctx.beginPath(); ctx.ellipse(PKX, PKY, 60 + (t * 6) % 24, 85 + (t * 8) % 30, 0, 0, Math.PI * 2); ctx.stroke();
      // 🏖️ kum + deniz
      ctx.lineJoin = ctx.lineCap = 'round';
      ctx.strokeStyle = '#e6d3a1'; ctx.lineWidth = 390; ctx.stroke(wd.coastPath);
      ctx.strokeStyle = '#d9c38d'; ctx.lineWidth = 60; ctx.stroke(wd.coastPath);
      const sg = ctx.createLinearGradient(1500 * SC, 1700 * SC, 2600 * SC, 2400 * SC); sg.addColorStop(0, '#3f9cc9'); sg.addColorStop(1, '#1d5a8c');
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
      ctx.save(); ctx.translate(1410 * (SC - 1), 1840 * (SC - 1));
      ctx.fillStyle = '#a47148'; ctx.fillRect(1395, 1840, 30, 230); ctx.fillRect(1370, 2050, 80, 26);
      ctx.strokeStyle = '#7d5232'; ctx.lineWidth = 2; ctx.beginPath(); for (let y = 1850; y < 2070; y += 12) { ctx.moveTo(1395, y); ctx.lineTo(1425, y); } ctx.stroke(); ctx.restore();
    }
    function drawRoads() {
      ctx.lineJoin = ctx.lineCap = 'round';
      // kapı yolları
      ctx.strokeStyle = '#cbc6bc'; ctx.lineWidth = 30; ctx.beginPath();
      BLD.forEach(b => { const n = wd.nodes[PL[b.k].node]; ctx.moveTo(b.x, b.y); ctx.lineTo(n.x, n.y); });
      ctx.stroke();
      // 🚶 yaya yolları (kenar + taş döşeme)
      wd.foots.forEach(f => { ctx.strokeStyle = '#b3a68a'; ctx.lineWidth = 34; ctx.stroke(f.path); });
      wd.foots.forEach(f => { ctx.strokeStyle = '#e2d7bf'; ctx.lineWidth = 30; ctx.stroke(f.path); });
      if (cam.z >= .8) { ctx.setLineDash([2, 7]); ctx.strokeStyle = 'rgba(120,100,70,.18)'; ctx.lineWidth = 26; wd.foots.forEach(f => ctx.stroke(f.path)); ctx.setLineDash([]); }
      // kaldırım (kenar çizgisi + taş), asfalt, kenar şeritleri, orta şerit
      wd.roads.forEach(r => { ctx.strokeStyle = '#9f998f'; ctx.lineWidth = ROAD_W[r.t] + SW * 2 + 3; ctx.stroke(r.path); });
      wd.roads.forEach(r => { ctx.strokeStyle = '#ccc7be'; ctx.lineWidth = ROAD_W[r.t] + SW * 2; ctx.stroke(r.path); });
      if (cam.z >= .8) { ctx.setLineDash([1.5, 9]); ctx.strokeStyle = 'rgba(90,85,78,.22)'; wd.roads.forEach(r => { ctx.lineWidth = ROAD_W[r.t] + SW * 2 - 4; ctx.stroke(r.path); }); ctx.setLineDash([]); }
      wd.roads.forEach(r => { ctx.strokeStyle = '#7a7772'; ctx.lineWidth = ROAD_W[r.t] + 3; ctx.stroke(r.path); });
      wd.roads.forEach(r => { ctx.strokeStyle = r.t === 'coast' ? '#4b4e55' : '#424449'; ctx.lineWidth = ROAD_W[r.t]; ctx.stroke(r.path); });
      if (cam.z >= .6) {
        wd.roads.forEach(r => { if (r.t === 'st') return; ctx.strokeStyle = 'rgba(235,235,230,.6)'; ctx.lineWidth = ROAD_W[r.t] - 8; ctx.stroke(r.path); });
        wd.roads.forEach(r => { if (r.t === 'st') return; ctx.strokeStyle = r.t === 'coast' ? '#4b4e55' : '#424449'; ctx.lineWidth = ROAD_W[r.t] - 11; ctx.stroke(r.path); });
      }
      ctx.setLineDash([18, 18]); ctx.strokeStyle = '#e8bd3f'; ctx.lineWidth = 3;
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
      ctx.fillStyle = '#b5d99a'; ctx.beginPath(); ctx.arc(RGX, RGY, 48, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = '#e9e2d2'; ctx.beginPath(); ctx.arc(RGX, RGY, 30, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = '#6ec6ff'; ctx.beginPath(); ctx.arc(RGX, RGY, 23, 0, Math.PI * 2); ctx.fill();
      ctx.strokeStyle = 'rgba(255,255,255,.8)'; ctx.lineWidth = 2;
      for (let i = 0; i < 2; i++) { ctx.beginPath(); ctx.arc(RGX, RGY, 4 + ((t * 10 + i * 10) % 19), 0, Math.PI * 2); ctx.stroke(); }
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
      ['#4f8a3f', '#3e7334'].forEach((c, s) => { ctx.fillStyle = c; ctx.beginPath(); T.forEach(([x, y, r, k]) => { if (k !== s) return; ctx.moveTo(x + r, y); ctx.arc(x, y, r, 0, Math.PI * 2); }); ctx.fill(); });
      ctx.fillStyle = 'rgba(255,255,255,.16)'; ctx.beginPath(); T.forEach(([x, y, r]) => { ctx.moveTo(x - r * .25 + r * .45, y - r * .3); ctx.arc(x - r * .25, y - r * .3, r * .45, 0, Math.PI * 2); }); ctx.fill();
      ctx.strokeStyle = '#3f8f45'; ctx.lineWidth = 5; ctx.lineCap = 'round'; ctx.beginPath();
      wd.palms.forEach(([x, y, r]) => { if (!vis(x, y, 30)) return; for (let i = 0; i < 5; i++) { const a = r + i * 1.26; ctx.moveTo(x, y); ctx.quadraticCurveTo(x + Math.cos(a) * 12, y + Math.sin(a) * 12 - 4, x + Math.cos(a) * 20, y + Math.sin(a) * 20); } });
      ctx.stroke();
      ctx.fillStyle = '#8d6e3f'; ctx.beginPath(); wd.palms.forEach(([x, y]) => { if (vis(x, y, 30)) { ctx.moveTo(x + 4, y); ctx.arc(x, y, 4, 0, Math.PI * 2); } }); ctx.fill();
      // 🏖️ güneşlenenler: havlu + uzanmış beden + mayo
      if (beachOn(19)) sunb.forEach(s => {
        if (!vis(s.x, s.y, 30)) return;
        ctx.save(); ctx.translate(s.x, s.y); ctx.rotate(s.a);
        ctx.fillStyle = s.tw; ctx.fillRect(-15, -7, 30, 14);
        ctx.fillStyle = 'rgba(255,255,255,.35)'; ctx.fillRect(-15, -2, 30, 2);
        ctx.fillStyle = s.sk; ctx.beginPath(); ctx.ellipse(-1, 0, 10, 3.6, 0, 0, Math.PI * 2); ctx.moveTo(14.6, 0); ctx.arc(11, 0, 3.6, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = s.bk; ctx.fillRect(2, -3.4, 3, 6.8); ctx.fillRect(-6, -3.4, 3.5, 6.8);
        ctx.restore();
      });
      wd.umbs.forEach(([x, y, c]) => {
        if (!vis(x, y, 30)) return;
        ctx.fillStyle = '#fff'; ctx.fillRect(x + 6, y + 2, 16, 8);
        ctx.fillStyle = c; ctx.beginPath(); ctx.arc(x, y, 13, 0, Math.PI * 2); ctx.fill();
        ctx.strokeStyle = 'rgba(255,255,255,.7)'; ctx.lineWidth = 1.5; ctx.beginPath(); for (let i = 0; i < 4; i++) { const a = i * Math.PI / 4; ctx.moveTo(x - Math.cos(a) * 13, y - Math.sin(a) * 13); ctx.lineTo(x + Math.cos(a) * 13, y + Math.sin(a) * 13); } ctx.stroke();
      });
    }
    // 🏠 kırma çatı: 4 yüz (ışık kuzeybatıdan), mahya + köşe çizgileri, kiremit sırası, baca / güneş paneli
    function hipRoof(x, y, w, d, s) {
      const hor = w >= d, r = (hor ? d : w) / 2, q = Math.min(r, (hor ? w : d) / 2);
      const [ax, ay, bx, by] = hor ? [x + q, y + r, x + w - q, y + r] : [x + r, y + q, x + r, y + d - q];
      const face = (pts, c) => { ctx.fillStyle = c; ctx.beginPath(); pts.forEach(([px, py], i) => (i ? ctx.lineTo(px, py) : ctx.moveTo(px, py))); ctx.closePath(); ctx.fill(); };
      const A = [ax, ay], B = [bx, by], c00 = [x, y], c10 = [x + w, y], c01 = [x, y + d], c11 = [x + w, y + d];
      if (hor) { face([c00, c10, B, A], 'rgba(255,255,255,.2)'); face([c01, c11, B, A], 'rgba(0,0,0,.16)'); face([c00, c01, A], 'rgba(0,0,0,.05)'); face([c10, c11, B], 'rgba(255,255,255,.08)'); }
      else { face([c00, c01, B, A], 'rgba(255,255,255,.2)'); face([c10, c11, B, A], 'rgba(0,0,0,.16)'); face([c00, c10, A], 'rgba(255,255,255,.08)'); face([c01, c11, B], 'rgba(0,0,0,.05)'); }
      if (cam.z >= 1.1) {
        ctx.strokeStyle = 'rgba(0,0,0,.08)'; ctx.lineWidth = 1; ctx.beginPath();
        for (let i = 4; i < r - 1; i += 4) {
          if (hor) { ctx.moveTo(x + i, y + i); ctx.lineTo(x + w - i, y + i); ctx.moveTo(x + i, y + d - i); ctx.lineTo(x + w - i, y + d - i); }
          else { ctx.moveTo(x + i, y + i); ctx.lineTo(x + i, y + d - i); ctx.moveTo(x + w - i, y + i); ctx.lineTo(x + w - i, y + d - i); }
        }
        ctx.stroke();
      }
      ctx.strokeStyle = 'rgba(0,0,0,.3)'; ctx.lineWidth = 1.3; ctx.beginPath();
      ctx.moveTo(ax, ay); ctx.lineTo(bx, by);
      ctx.moveTo(x, y); ctx.lineTo(ax, ay); ctx.lineTo(hor ? x : x + w, hor ? y + d : y);
      ctx.moveTo(hor ? x + w : x, hor ? y : y + d); ctx.lineTo(bx, by); ctx.lineTo(x + w, y + d);
      ctx.stroke();
      ctx.strokeStyle = 'rgba(0,0,0,.32)'; ctx.lineWidth = 1.5; ctx.strokeRect(x + .75, y + .75, w - 1.5, d - 1.5);
      if (cam.z < .8) return;
      if (s % 3 === 0) { const cx = x + w * .27, cy = y + d * .3; ctx.fillStyle = 'rgba(0,0,0,.25)'; ctx.fillRect(cx + 1.5, cy + 2, 6, 6); ctx.fillStyle = '#7a4b3c'; ctx.fillRect(cx, cy, 6, 6); ctx.fillStyle = '#2f2420'; ctx.fillRect(cx + 1.5, cy + 1.5, 3, 3); }
      if (s % 5 === 1) {
        const px = hor ? x + w * .32 : x + w * .6, py = hor ? y + d * .6 : y + d * .32, pw = hor ? w * .36 : w * .26, ph = hor ? d * .26 : d * .36;
        ctx.fillStyle = '#26365a'; ctx.fillRect(px, py, pw, ph);
        ctx.strokeStyle = 'rgba(200,220,255,.35)'; ctx.lineWidth = .6; ctx.beginPath();
        for (let i = 4; i < pw; i += 4) { ctx.moveTo(px + i, py); ctx.lineTo(px + i, py + ph); }
        for (let i = 4; i < ph; i += 4) { ctx.moveTo(px, py + i); ctx.lineTo(px + pw, py + i); }
        ctx.stroke();
      }
    }
    // 🏢 düz çatı: parapet, klima üniteleri; yüksek binada asansör odası + su deposu
    function flatRoof(x, y, w, d, s, tall, shop, bare) {
      ctx.strokeStyle = 'rgba(0,0,0,.24)'; ctx.lineWidth = 3; rr(x + 1.5, y + 1.5, w - 3, d - 3, 3); ctx.stroke();
      ctx.strokeStyle = 'rgba(255,255,255,.22)'; ctx.lineWidth = 1; rr(x + 4, y + 4, w - 8, d - 8, 2); ctx.stroke();
      if (bare || cam.z < .8) return;
      if (tall) {
        const ex = x + w * .12, ey = y + d * .14, ew = w * .3, eh = d * .24;
        ctx.fillStyle = 'rgba(0,0,0,.18)'; ctx.fillRect(ex + 3, ey + 4, ew, eh);
        ctx.fillStyle = 'rgba(255,255,255,.25)'; ctx.fillRect(ex, ey, ew, eh);
        ctx.strokeStyle = 'rgba(0,0,0,.28)'; ctx.lineWidth = 1; ctx.strokeRect(ex, ey, ew, eh);
        ctx.fillStyle = '#c9ced3'; ctx.beginPath(); ctx.arc(x + w * .78, y + d * .74, Math.min(w, d) * .09, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
      }
      const sp = tall ? [[.8, .22], [.25, .78], [.56, .2]] : shop ? [[.2, .78], [.8, .78], [.5, .82]] : [[.78, .22], [.22, .8], [.8, .78]];
      for (let i = 0, n = 1 + s % 3; i < n; i++) {
        const [u, v] = sp[(i + (s >> 4)) % 3], cx = x + w * u, cy = y + d * v;
        ctx.fillStyle = 'rgba(0,0,0,.2)'; ctx.fillRect(cx - 3, cy - 2.5, 8, 8);
        ctx.fillStyle = '#dfe2e5'; ctx.fillRect(cx - 4, cy - 4, 8, 8);
        ctx.fillStyle = '#8d949b'; ctx.beginPath(); ctx.arc(cx, cy, 2.4, 0, Math.PI * 2); ctx.fill();
      }
    }
    function drawFill(f) {
      if (!vis(f.x, f.y, 70)) return;
      const lo = cam.z < .6, s = hash(f.id);
      ctx.save(); ctx.translate(f.x, f.y); ctx.rotate(f.a);
      const x = -f.w / 2, y = -f.d / 2;
      ctx.fillStyle = 'rgba(20,20,40,.22)'; ctx.fillRect(x + (f.tall ? 9 : 5), y + (f.tall ? 12 : 7), f.w, f.d);
      ctx.fillStyle = f.c; rr(x, y, f.w, f.d, f.z === 'ev' ? 3 : 4); ctx.fill();
      if (!lo) {
        if (f.z === 'ev') hipRoof(x, y, f.w, f.d, s);
        else {
          flatRoof(x, y, f.w, f.d, s, f.tall, !f.tall);
          if (!f.tall) {
            for (let i = 0; i * 8 < f.w; i++) { ctx.fillStyle = i % 2 ? '#f4f1ea' : f.aw; ctx.fillRect(x + i * 8, y - 3, Math.min(8, f.w - i * 8), 10); }
            ctx.fillStyle = 'rgba(0,0,0,.18)'; ctx.fillRect(x, y + 7, f.w, 2);
            const pw = Math.min(f.w * .45, 30); ctx.fillStyle = '#22262e'; rr(-pw / 2, y + 8, pw, 7, 2); ctx.fill();
            ctx.fillStyle = f.aw; ctx.fillRect(-pw / 2 + 3, y + 10.5, pw - 6, 2);
          }
        }
      }
      if (sel === f.id || (f.home && sel === f.home)) { ctx.strokeStyle = '#ff3d8b'; ctx.lineWidth = 4; ctx.setLineDash([8, 5]); rr(x - 6, y - 6, f.w + 12, f.d + 12, 8); ctx.stroke(); ctx.setLineDash([]); }
      ctx.restore();
      if (!lo && cam.z >= .9) { ctx.font = `${Math.round(Math.min(f.w, f.d) * .42)}px ${EMO}`; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText(f.ic, f.x, f.y + 2); }
    }
    // 🪧 pano: küçük, iki ayaklı; üstünde reklamın fotoğrafı + yazı izi. Yazısı yaklaşınca baloncukta (drawBubbles)
    function drawBills() {
      wd.bills.forEach((b, i) => {
        if (!vis(b.x, b.y, 50)) return;
        const ad = adOf(b, i);
        let a = b.a; if (a > Math.PI / 2) a -= Math.PI * 2; if (a < -Math.PI / 2 || a > Math.PI / 2) a += Math.PI;
        ctx.save(); ctx.translate(b.x, b.y); ctx.rotate(a);
        const w = b.w, d = b.d;
        ctx.fillStyle = 'rgba(20,20,40,.25)'; ctx.fillRect(-w / 2 + 4, -d / 2 + 5, w, d);
        ctx.fillStyle = '#5a5f66'; ctx.fillRect(-w / 4 - 1.5, d / 2, 3, 4); ctx.fillRect(w / 4 - 1.5, d / 2, 3, 4);
        ctx.fillStyle = '#2b2140'; rr(-w / 2 - 2, -d / 2 - 2, w + 4, d + 4, 3); ctx.fill();
        const g = ctx.createLinearGradient(-w / 2, 0, w / 2, 0); g.addColorStop(0, '#d9346f'); g.addColorStop(1, '#5e2bb8');
        ctx.fillStyle = g; rr(-w / 2, -d / 2, w, d, 2); ctx.fill();
        if (ad) {
          const im = imgOf(ad.photo), s = d - 2;
          if (im) { const r = Math.min(im.naturalWidth, im.naturalHeight); ctx.save(); rr(-w / 2 + 1, -d / 2 + 1, s, s, 2); ctx.clip(); ctx.drawImage(im, (im.naturalWidth - r) / 2, (im.naturalHeight - r) * .2, r, r, -w / 2 + 1, -d / 2 + 1, s, s); ctx.restore(); }
          else { ctx.font = `${d * .6}px ${EMO}`; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText(ad.ic, -w / 2 + d / 2, 1); }
          const tx = -w / 2 + d + 2, tw = w - d - 6;
          ctx.fillStyle = 'rgba(255,255,255,.9)'; ctx.fillRect(tx, -3.5, tw * .9, 2.4);
          ctx.fillStyle = 'rgba(255,255,255,.55)'; ctx.fillRect(tx, 1.5, tw * .6, 1.8);
        }
        if (sel === b.id) { ctx.strokeStyle = '#ffd400'; ctx.lineWidth = 2.5; ctx.setLineDash([6, 4]); rr(-w / 2 - 6, -d / 2 - 6, w + 12, d + 12, 6); ctx.stroke(); ctx.setLineDash([]); }
        ctx.restore();
      });
    }
    // 🛣️ cadde / sokak adları asfaltın üstünde, yol boyunca (yazı hep düz okunur)
    function drawStreetNames() {
      if (cam.z < .5) return;
      ctx.font = '800 13px Nunito,sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.lineJoin = 'round';
      wd.roads.forEach(r => {
        if (r.t === 'ring') return;
        if (!r.lbl) {
          r.lbl = [];
          let acc = 0, next = 240;
          for (let i = 1; i < r.pts.length; i++) {
            const [x0, y0] = r.pts[i - 1], [x1, y1] = r.pts[i], L = Math.hypot(x1 - x0, y1 - y0);
            let a = Math.atan2(y1 - y0, x1 - x0); if (a > Math.PI / 2 || a < -Math.PI / 2) a += Math.PI;
            while (acc + L >= next) { const t = (next - acc) / L; r.lbl.push([x0 + (x1 - x0) * t, y0 + (y1 - y0) * t, a]); next += 820; }
            acc += L;
          }
        }
        const s = `${r.nm} ${tr(RS[r.t])}`;
        r.lbl.forEach(([x, y, a]) => {
          if (!vis(x, y, 120)) return;
          ctx.save(); ctx.translate(x, y); ctx.rotate(a);
          ctx.strokeStyle = 'rgba(40,42,48,.95)'; ctx.lineWidth = 4; ctx.strokeText(s, 0, 0);
          ctx.fillStyle = 'rgba(255,255,255,.9)'; ctx.fillText(s, 0, 0);
          ctx.restore();
        });
      });
    }
    // 💬 baloncuk: tabela / pano yazısı, sen yaklaşınca yükselerek belirir; kuyruk yere bakar
    function bubble(x, y, al, ic, im, t1, t2, col) {
      const k = tagK(), pad = 6 * k, ps = (t2 ? 30 : 20) * k;
      ctx.save(); ctx.globalAlpha = al;
      ctx.font = `900 ${12 * k}px Nunito,${EMO}`; const w1 = ctx.measureText(t1).width;
      ctx.font = `700 ${10 * k}px Nunito,${EMO}`; const w2 = t2 ? ctx.measureText(t2).width : 0;
      const bw = pad * 3 + ps + Math.max(w1, w2), bh = ps + pad * 2, bx = x - bw / 2, by = y - bh - 9 * k - (1 - al) * 10 * k;
      ctx.fillStyle = 'rgba(0,0,0,.22)'; rr(bx + 2 * k, by + 3 * k, bw, bh, 10 * k); ctx.fill();
      ctx.fillStyle = '#fff'; rr(bx, by, bw, bh, 10 * k); ctx.fill();
      ctx.beginPath(); ctx.moveTo(x - 6 * k, by + bh - 1); ctx.lineTo(x, by + bh + 8 * k); ctx.lineTo(x + 6 * k, by + bh - 1); ctx.closePath(); ctx.fill();
      ctx.strokeStyle = col; ctx.lineWidth = 2 * k; rr(bx, by, bw, bh, 10 * k); ctx.stroke();
      const ix = bx + pad, iy = by + pad;
      if (im) { const r = Math.min(im.naturalWidth, im.naturalHeight); ctx.save(); rr(ix, iy, ps, ps, 6 * k); ctx.clip(); ctx.drawImage(im, (im.naturalWidth - r) / 2, (im.naturalHeight - r) * .2, r, r, ix, iy, ps, ps); ctx.restore(); }
      else { ctx.font = `${ps * .8}px ${EMO}`; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText(ic, ix + ps / 2, iy + ps / 2 + k); }
      ctx.textAlign = 'left'; ctx.textBaseline = 'middle';
      ctx.font = `900 ${12 * k}px Nunito,${EMO}`; ctx.fillStyle = '#1e1a2e'; ctx.fillText(t1, ix + ps + pad, t2 ? iy + ps * .3 : iy + ps / 2 + k);
      if (t2) { ctx.font = `700 ${10 * k}px Nunito,${EMO}`; ctx.fillStyle = '#6b6680'; ctx.fillText(t2, ix + ps + pad, iy + ps * .76); }
      ctx.restore();
    }
    // en yakın 4 tabela / pano: ana binalar, dükkânlar, hane evleri ve reklam panoları
    const SIGN_FILL = f => f.home || f.z !== 'ev' || f.n === 'Bakkal';
    function drawBubbles() {
      if (me.taxi || inside) return;
      const L = [], near = (x, y, r) => { const d = Math.hypot(x - me.x, y - me.y); return d < r ? [Math.min(1, (r - d) / 45), d] : null; };
      wd.bills.forEach((b, i) => { const n = near(b.x, b.y, 190), ad = n && adOf(b, i); if (ad) L.push([n, b.x, b.y - 12, ad.ic, imgOf(ad.photo), String(ad.n).slice(0, 24), String(ad.d).slice(0, 34), '#ff3d8b']); });
      BLD.forEach(b => { const n = near(b.x, b.y, Math.max(b.w, b.h) / 2 + 110); if (n) L.push([n, b.x, b.y - b.h / 2 - 2, b.ic, null, tr(b.n), b.sn || '', '#5b4bd6']); });
      wd.fill.forEach(f => {
        if (!SIGN_FILL(f) || Math.abs(f.x - me.x) > 200 || Math.abs(f.y - me.y) > 200) return;
        const fx = f.x + Math.sin(f.a) * f.d / 2, fy = f.y - Math.cos(f.a) * f.d / 2, n = near(fx, fy, 120);
        if (n) L.push([n, fx, fy - 4, f.ic, null, tr(f.n), f.home ? '' : tr(ZONE_N[f.z]), f.home ? '#ff5c9a' : f.aw]);
      });
      L.sort((p, q) => q[0][1] - p[0][1]).slice(-4).forEach(([n, x, y, ic, im, t1, t2, col]) => { if (vis(x, y, 120)) bubble(x, y, n[0], ic, im, t1, t2, col); });
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
        if (e.id === 'konser') { ctx.fillStyle = '#2b2140'; rr(1525 * SC - 45, 1762 * SC - 17, 90, 34, 6); ctx.fill(); ['#ff4fd8', '#4fc3ff', '#ffd400'].forEach((c, i) => { ctx.fillStyle = c; ctx.beginPath(); ctx.arc(1525 * SC - 30 + i * 30, 1762 * SC - 10 + Math.sin(t * 6 + i) * 2, 5, 0, Math.PI * 2); ctx.fill(); }); }
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
      if (b.yard) { ctx.fillStyle = '#a3c584'; rr(x - 14, y - 12, b.w + 28, b.h + 24, 10); ctx.fill(); ctx.strokeStyle = 'rgba(120,92,64,.7)'; ctx.lineWidth = 2; ctx.setLineDash([4, 3]); ctx.stroke(); ctx.setLineDash([]); }
      const tall = b.t === 'kule';
      ctx.fillStyle = 'rgba(20,20,40,.24)'; rr(x + (tall ? 12 : 7), y + (tall ? 15 : 9), b.w, b.h, 8); ctx.fill();
      ctx.fillStyle = b.c; rr(x, y, b.w, b.h, b.t === 'ev' ? 5 : 8); ctx.fill();
      if (b.t === 'ev') hipRoof(x, y, b.w, b.h, hash(b.k));
      else flatRoof(x, y, b.w, b.h, hash(b.k), tall, false, !!b.fx);
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
    function drawCar(x, y, sa, kind, col, taxi) {
      const [L, Wd] = CAR_K[kind] || CAR_K.sedan, l = L / 2, w = Wd / 2, gl = 'rgba(30,40,60,.72)';
      ctx.save(); ctx.translate(x, y); ctx.rotate(sa);
      ctx.fillStyle = 'rgba(0,0,0,.25)'; rr(-l + 1, -w + 2.5, L, Wd, 4); ctx.fill();
      ctx.fillStyle = kind === 'polis' ? '#f5f5f5' : col; rr(-l, -w, L, Wd, kind === 'bus' || kind === 'van' ? 3 : 4.5); ctx.fill();
      if (kind === 'bus') {
        ctx.fillStyle = gl; ctx.fillRect(l - 6, -w + 2, 4, Wd - 4);
        ctx.fillStyle = 'rgba(200,230,255,.8)'; for (let i = -l + 4; i < l - 10; i += 7) { ctx.fillRect(i, -w + 1, 5, 2.5); ctx.fillRect(i, w - 3.5, 5, 2.5); }
      } else if (kind === 'pickup') {
        ctx.fillStyle = gl; ctx.fillRect(l * .3, -w + 2, 5, Wd - 4);
        ctx.fillStyle = 'rgba(0,0,0,.3)'; ctx.fillRect(-l + 2.5, -w + 2.5, l * .95, Wd - 5);
      } else if (kind === 'cabrio') {
        ctx.fillStyle = gl; ctx.fillRect(l * .3, -w + 2, 3, Wd - 4);
        ctx.fillStyle = '#4e342e'; rr(-l * .5, -w + 2.5, l * .75, Wd - 5, 2); ctx.fill();
      } else {
        ctx.fillStyle = gl; ctx.fillRect(kind === 'van' ? l - 8 : l * .28, -w + 2, kind === 'spor' ? 6 : 5, Wd - 4);
        if (kind !== 'van') ctx.fillRect(-l + 3.5, -w + 2, kind === 'spor' ? 3 : 4, Wd - 4);
      }
      if (kind === 'spor') { ctx.fillStyle = 'rgba(255,255,255,.85)'; ctx.fillRect(-l + 2, -1.5, L - 4, 3); }
      if (kind === 'suv' || kind === 'van') { ctx.strokeStyle = 'rgba(0,0,0,.25)'; ctx.lineWidth = 1; ctx.strokeRect(-l * .4, -w + 3, l * .8, Wd - 6); }
      if (kind === 'polis') {
        ctx.fillStyle = '#1a237e'; ctx.fillRect(-l + 4, -w, L - 10, 2.5); ctx.fillRect(-l + 4, w - 2.5, L - 10, 2.5);
        const on = ((tNow / 250) | 0) % 2; ctx.fillStyle = on ? '#e53935' : '#1e88e5'; ctx.fillRect(-2, -w + 2, 3, w - 2); ctx.fillStyle = on ? '#1e88e5' : '#e53935'; ctx.fillRect(-2, 0, 3, w - 2);
      }
      if (taxi) { ctx.fillStyle = '#fff'; rr(-3, -3, 6, 6, 1.5); ctx.fill(); }
      ctx.restore();
    }
    // 🚘 karakterin arabası: araba + üstünde küçük fotoğrafı; 💡 selektör ve 📯 korna efekti
    function drawDriver(a, t) {
      const fa = a.flashT ? tNow - a.flashT : 1e9, ha = a.honkT ? tNow - a.honkT : 1e9, cx = Math.cos(a.sa || 0), sy = Math.sin(a.sa || 0), l = (CAR_K[a.car.kind] || CAR_K.sedan)[0] / 2;
      if (ha < 1400) {
        ctx.strokeStyle = 'rgba(255,61,139,.75)'; ctx.lineWidth = 2;
        for (let i = 0; i < 3; i++) { const r = 12 + ((ha / 9 + i * 14) % 42); ctx.globalAlpha = Math.max(0, 1 - r / 54); ctx.beginPath(); ctx.arc(a.x + cx * l, a.y + sy * l, r, (a.sa || 0) - .7, (a.sa || 0) + .7); ctx.stroke(); }
        ctx.globalAlpha = 1;
      }
      drawCar(a.x, a.y, a.sa || 0, a.car.kind, a.car.col);
      if (fa < 1600 && ((fa / 200) | 0) % 2 === 0) {
        ctx.globalCompositeOperation = 'lighter';
        const g = glow('#fff6d0'), px = -sy * 5, py = cx * 5, fx = a.x + cx * (l + 10), fy = a.y + sy * (l + 10);
        ctx.drawImage(g, fx + px - 14, fy + py - 14, 28, 28); ctx.drawImage(g, fx - px - 14, fy - py - 14, 28, 28);
        ctx.drawImage(g, a.x + cx * (l + 34) - 26, a.y + sy * (l + 34) - 26, 52, 52);
        ctx.globalCompositeOperation = 'source-over';
      }
      drawSquare(a.x, a.y, CS * .8, a.c, a.c.photo, borderOf(a), 2);
    }
    // 🧑‍🤝‍🧑 yolcular: ikili sıralar halinde küçük fotoğraflar (öndeki sol koltuk şoför)
    function drawPax(o) {
      const [L, Wd] = CAR_K[o.kind] || CAR_K.sedan, l = L / 2, w = Wd / 2, s = Math.min(Wd * .42, 9), step = o.kind === 'bus' ? 8.5 : l * .6;
      ctx.save(); ctx.translate(o.x, o.y); ctx.rotate(o.sa);
      ctx.strokeStyle = 'rgba(255,255,255,.85)'; ctx.lineWidth = 1;
      o.pax.forEach((c, i) => {
        const u = (o.kind === 'bus' ? l * .55 : l * .2) - (i >> 1) * step, v = (i & 1 ? 1 : -1) * w * .45;
        ctx.drawImage(thumbOf(c, c.photo), u - s / 2, v - s / 2, s, s); ctx.strokeRect(u - s / 2, v - s / 2, s, s);
      });
      ctx.restore();
    }
    function drawVehicles() {
      const seats = cam.z >= .9;
      // 🅿️ park etmiş araban
      if (!me.drive && vis(myCar.x, myCar.y, 40)) { drawCar(myCar.x, myCar.y, myCar.sa, CAR_ME.kind, CAR_ME.col); if (cam.z >= .7) nameTag(`🚗 ${tr('Araban')}`, myCar.x, myCar.y + 18 * tagK(), '#ff3d8b'); }
      cars.forEach(o => {
        if (!vis(o.x, o.y, 40)) return;
        drawCar(o.x, o.y, o.sa, o.kind, o.taxi ? '#ffd400' : o.col, o.taxi);
        if (seats && o.pax) drawPax(o);
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
      if (!me.taxi) drawTaxi();
      // ⚡ yayalar renk başına tek yol: 8 fill + 8 stroke (çok uzaktayken kenarsız)
      ctx.lineWidth = 2; ctx.strokeStyle = 'rgba(0,0,0,.35)';
      const far = cam.z < .6, pr = far ? 5 : 4;
      // fotoğrafı olan yaya karakter gibi (kare foto + ten çerçevesi, yürürken sallanır); olmayan eskisi gibi nokta
      pedBy.forEach((L, i) => {
        ctx.beginPath();
        for (const o of L) if (!o.c && !o.gone && vis(o.x, o.y, 20)) { ctx.moveTo(o.x + pr, o.y); ctx.arc(o.x, o.y, pr, 0, Math.PI * 2); }
        ctx.fillStyle = PED_C[i]; ctx.fill(); if (!far) ctx.stroke();
      });
      const tt = tNow / 1000;
      for (const o of peds) if (o.c && !o.gone && vis(o.x, o.y, 20)) drawSquare(o.x, o.y - (o.pi < o.path.length ? Math.abs(Math.sin(tt * 9 + o.sp)) * 2 : 0), CS, o.c, o.c.photo, o.skin, 2);
      if (beachOn(21)) bgrp.forEach(g => { if (!vis(g.x, g.y, 30)) return; g.m.forEach(p => { if (p.c) { drawSquare(p.x, p.y, CS, p.c, p.c.photo, p.skin, 2); return; } ctx.fillStyle = p.col; ctx.beginPath(); ctx.arc(p.x, p.y, pr + 1, 0, Math.PI * 2); ctx.fill(); if (!far) ctx.stroke(); }); });
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
      [...cars, ...ag.filter(a => a.drive)].forEach(o => { if (!vis(o.x, o.y, 60)) return; const l = (CAR_K[o.kind || o.car.kind] || CAR_K.sedan)[0] / 2 + 16; ctx.drawImage(glow('#fff6d0'), o.x + Math.cos(o.sa || 0) * l - 22, o.y + Math.sin(o.sa || 0) * l - 22, 44, 44); });
      ctx.globalAlpha = .7 * k; const L = PL.lunapark; ctx.drawImage(glow('#ff8cc6'), L.x - 140, L.y - 140, 280, 280);
      // 🪧 panolar gece ışıklı
      ctx.globalAlpha = .45 * k; wd.bills.forEach(b => { if (vis(b.x, b.y, 50)) ctx.drawImage(glow('#ffb3dd'), b.x - 45, b.y - 30, 90, 60); });
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
    // ⚡ avatar bir kez yuvarlak köşeli küçük tuvale kırpılır (her karede clip + kırpma yok); foto yüklenince yenisi yapılır
    const thumbs = new Map(), TS = 96;
    function thumbOf(c, photo) {
      const im = imgOf(photo), key = im ? photo : `${(c.name || '?').charAt(0)}|${(c.colors || []).join()}`;
      let t = thumbs.get(key);
      if (t) return t;
      t = document.createElement('canvas'); t.width = t.height = TS;
      const g = t.getContext('2d');
      g.beginPath(); if (g.roundRect) g.roundRect(0, 0, TS, TS, TS * .3); else g.rect(0, 0, TS, TS); g.clip();
      if (im) { const r = Math.min(im.naturalWidth, im.naturalHeight); g.drawImage(im, (im.naturalWidth - r) / 2, (im.naturalHeight - r) * .2, r, r, 0, 0, TS, TS); }
      else { const gr = g.createLinearGradient(0, 0, TS, TS), cl = c.colors || ['#a65ebb', '#d77baf']; gr.addColorStop(0, cl[0]); gr.addColorStop(1, cl[1]); g.fillStyle = gr; g.fillRect(0, 0, TS, TS); g.fillStyle = '#fff'; g.font = `bold ${TS / 2}px Nunito,sans-serif`; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText((c.name || '?').charAt(0).toLocaleUpperCase('tr'), TS / 2, TS / 2 + 2); }
      thumbs.set(key, t);
      return t;
    }
    function drawSquare(x, y, s, c, photo, border, bw) {
      ctx.fillStyle = 'rgba(0,0,0,.28)'; rr(x - s / 2 + 3, y - s / 2 + 4, s, s, 6); ctx.fill();
      ctx.drawImage(thumbOf(c, photo), x - s / 2, y - s / 2, s, s);
      ctx.strokeStyle = border; ctx.lineWidth = bw; rr(x - s / 2, y - s / 2, s, s, 6); ctx.stroke();
    }
    const emoOf = s => { const m = String(s || '').match(/\p{Extended_Pictographic}/gu); return m ? m[m.length - 1] : ''; };
    const first = a => String((a.c || a).name || '').split(' ')[0];
    const shownName = a => (!a.str || (met[a.id] || {}).n || (talk && talk.a === a && talk.named)) ? first(a) : '';
    const borderOf = a => a.skin;
    function drawPeople(t) {
      const lbl = cam.z >= .7;
      ag.forEach(a => {
        if (a.st === 'in' || a.inCar) return;
        if (!vis(a.x, a.y, 40)) return;
        const bob = a.st === 'walk' ? Math.abs(Math.sin(t * 9 + a.sp)) * 2 : 0;
        if (talk && talk.a === a) { ctx.strokeStyle = 'rgba(255,61,139,.7)'; ctx.lineWidth = 2.5; ctx.beginPath(); ctx.arc(a.x, a.y, CS * .8 + Math.sin(t * 4) * 2, 0, Math.PI * 2); ctx.stroke(); }
        if (a.drive) { drawDriver(a, t); if (lbl) nameTag(`🚗 ${shownName(a) || '❔'}`, a.x, a.y + CS / 2 + 9 * tagK()); return; }
        drawSquare(a.x, a.y - bob, CS, a.c, a.c.photo, borderOf(a), 2.5);
        if (a.st !== 'walk' && a.w) { ctx.font = `10px ${EMO}`; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText(emoOf(a.w.doing), a.x + CS / 2, a.y - CS / 2); }
        if (lbl) nameTag(shownName(a) || '❔', a.x, a.y + CS / 2 + 9 * tagK());
      });
      drawLaf();
      if (me.taxi) { drawTaxi(); return; }
      const u = api.user(), bob = me.path || (me.hw && me.hw.mv) ? Math.abs(Math.sin(t * 9)) * 1.5 : 0;
      ctx.strokeStyle = 'rgba(255,61,139,.6)'; ctx.lineWidth = 2.5; ctx.beginPath(); ctx.arc(me.x, me.y, (me.drive ? CS * 1.6 : CS * .75) + (t * 10) % 7, 0, Math.PI * 2); ctx.stroke();
      const meC = { name: u.name || 'Sen', colors: u.colors || ['#0089c4', '#c2185b'], photo: u.photo };
      if (me.drive) {
        // 🚗 sürüyorsun: araban + şoför koltuğunda sen, yanında binen kızlar
        drawCar(me.x, me.y, me.sa || 0, CAR_ME.kind, CAR_ME.col);
        drawPax({ x: me.x, y: me.y, sa: me.sa || 0, kind: CAR_ME.kind, pax: [meC, ...(escort ? escort.L.filter(a => a.inCar).map(a => a.c) : [])] });
        if (lbl) nameTag(`🚗 ${tr('Sen')}`, me.x, me.y + 18 * tagK(), '#ff3d8b');
      } else {
        drawSquare(me.x, me.y - bob, CS + 3, meC, u.photo, '#ff3d8b', 3);
        if (lbl) nameTag(tr('Sen'), me.x, me.y + CS / 2 + 11 * tagK(), '#ff3d8b');
      }
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
      if (me.drive) exitCar(true);
      const p = placeOf(k);
      if (!p || p.area) return;
      closeCard();
      inside = { k, L: IN[inType(k)] };
      me.path = null; me.dest = null; me.chase = null;
      me.ix = me.itx = RW / 2; me.iy = me.ity = RH - 30; me.ipath = null;
      [me.x, me.y] = doorOf(k); me.node = null;
      exitBtn.hidden = false; root.querySelector('.ct-side').style.display = 'none';
      api.notify(`${p.ic} ${tr(p.n)} · ${tr('içeridesin')}`, '🚪');
      if (p.party && api.party) openParty();
    }
    // 🎉 kulüpte parti paneli: dans eden kartlar şehrin üstünde açılır, ✕ kulüpten çıkarır
    function openParty() {
      let box = root.querySelector('.ct-party');
      if (!box) { box = document.createElement('div'); box.className = 'ct-party'; root.appendChild(box); }
      box.onclick = e => { if (e.target.closest('[data-ptclose]')) { box.remove(); exitB(); } };
      api.party(box);
    }
    function exitB() {if (talk) endTalk(); closeCard(); inside = null; exitBtn.hidden = true; root.querySelector('.ct-side').style.display = ''; follow0 = true; }
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
      drvs = cars.concat(ag.filter(a => a.drive && a.st === 'walk'));
      if (me.drive) drvs.push(me);
      ag.forEach(a => {
        if (a.hold || a.esc) return;
        if (a.seek) { seekStep(a, dt); return; }
        if (a.grp) return;
        if (a.leaveAt && tNow >= a.leaveAt) { a.leaveAt = 0; depart(a); }
        if (a.str && a.st !== 'walk' && tNow > a.next && !(a.st === 'wander' && a.path)) strNext(a);
        if (a.st === 'walk') {
          const done = follow(a, (a.drive ? a.car.sp * carFactor(a, dt) : a.sp * (a.phone ? .6 : 1)) * dt);
          if (a.drive) { let d = a.a - (a.sa || 0); d = Math.atan2(Math.sin(d), Math.cos(d)); a.sa = (a.sa || 0) + d * Math.min(1, dt * 8); }
          if (done) {
            a.path = null; a.drive = false;
            if (a.k === '~') { a.st = 'stand'; a.next = tNow + 1500 + Math.random() * 4000; }
            else if (plOf(a.k).area) { a.st = 'wander'; a.idle = tNow + 1500 + Math.random() * 4000; a.next = tNow + 20000 + Math.random() * 30000; }
            else { a.st = 'in'; a.next = tNow + 15000 + Math.random() * 25000; }
          }
        } else if (a.st === 'wander') {
          if (a.path) { if (follow(a, 18 * dt)) { a.path = null; a.idle = tNow + 2000 + Math.random() * 6000; } }
          else if (tNow > a.idle) { a.path = [areaPt(plOf(a.k), [a.x, a.y])]; a.pi = 0; }
        }
      });
      routeLeft = ROUTE_N;
      for (const o of movers) {
        if (o.pi >= o.path.length) { if (routeLeft > 0) { routeLeft--; newTrip(o); } continue; }
        follow(o, o.sp * dt * (o.car ? carFactor(o, dt) : 1));
        if (o.car) { let d = o.a - o.sa; d = Math.atan2(Math.sin(d), Math.cos(d)); o.sa += d * Math.min(1, dt * 8); }
      }
      stepTaxi(dt);
      grpStep(dt);
      phoneStep();
      beachStep();
      carChat();
      escortStep(dt);
      if (!inside) separate(dt);
      lafStep();
      // 👆 basılı tutunca parmağın yönüne yürü (binaların / denizin içine girmez, kenarda kayar)
      if (tap && !me.hw && ptrs.size === 1 && !inside && !talk && !me.taxi && performance.now() - tap.t > 280) {
        const [p] = ptrs.values();
        tap = null; me.hw = { cx: p[0], cy: p[1] };
        if (me.chase) { me.chase.hold = false; me.chase = null; }
        me.path = null; me.dest = null; me.enter = null; me.joinG = null; follow0 = true;
      }
      if (me.hw) {
        const [wx, wy] = toWorld(me.hw.cx, me.hw.cy), dx = wx - me.x, dy = wy - me.y, d = Math.hypot(dx, dy);
        me.hw.mv = d > CS;
        if (me.hw.mv) {
          const m = (me.drive ? CAR_ME.sp * .85 : 95) * dt, ux = dx / d * m, uy = dy / d * m, stuck = wd.solid(me.x, me.y);
          const ok = (px, py) => px > X0 && px < W && py > Y0 && py < H && !wd.inSea(px, py) && (stuck || !wd.solid(px, py));
          me.a = Math.atan2(dy, dx);
          if (ok(me.x + ux, me.y + uy)) { me.x += ux; me.y += uy; } else if (ok(me.x + ux, me.y)) me.x += ux; else if (ok(me.x, me.y + uy)) me.y += uy;
        }
      }
      if (me.drive) { let d = (me.a || 0) - (me.sa || 0); d = Math.atan2(Math.sin(d), Math.cos(d)); me.sa = (me.sa || 0) + d * Math.min(1, dt * 8); }
      if (me.path && follow(me, (me.drive ? CAR_ME.sp : 95) * dt)) {
        me.path = null;
        // 🚗 sürerek bir binaya / kişiye geldin: park et, in, gerisini yürü
        let redo = false;
        if (me.drive && me.driveTo) {
          const D = me.driveTo; me.driveTo = null;
          exitCar(true);
          me.dest = null;
          walkTo(D.x, D.y, D.k, D.gap);
          redo = !!me.path;
        }
        const k = me.dest && me.dest.k, ch2 = me.chase, jg = me.joinG;
        if (!redo) { me.dest = null; me.joinG = null; }
        if (redo) {}
        else if (me.toCar) { me.toCar = false; enterCar(); }
        else if (jg) joinGroup(jg[0], jg[1]);
        else if (ch2) {
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
    function persist() { savedAt = tNow; try { localStorage.setItem(KEY, JSON.stringify({ gm, at: Date.now(), sp, px: Math.round(me.x), py: Math.round(me.y), sc: SC, met, wth: withIds, wthAt, car: [Math.round(myCar.x), Math.round(myCar.y), +(myCar.sa || 0).toFixed(2)], dr: me.drive ? 1 : 0 })); } catch (e) {} }
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
      drawGround(t); drawRoads(); drawStreetNames(); drawPlaza(t); drawLuna(t); drawTrees();
      wd.fill.forEach(drawFill);
      drawBills();
      BLD.forEach(b => drawBld(b, t, dk));
      drawEvents(t);
      drawVehicles();
      drawNight(dk, hf, t);
      drawPeople(t);
      drawLabels();
      drawBubbles();
      hud();
      requestAnimationFrame(frame);
    }
    function stop() { alive = false; if (talk) talk.a.hold = false; persist(); ro.disconnect(); if (actx) actx.close().catch(() => {}); }
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
    cam.z = cw < 600 ? 2.7 : 3.1;
    const clampCam = () => { cam.z = Math.max(.25, Math.min(4, cam.z)); cam.x = Math.max(X0, Math.min(W, cam.x)); cam.y = Math.max(Y0, Math.min(H, cam.y)); };

    /* 👆 dokunma: sürükle, iki parmakla yakınlaş, dokun → kişi / bina / yürü */
    const ptrs = new Map();
    let drag = null, pinch = null, tap = null;
    const pdist = () => { const [a, b] = [...ptrs.values()]; return Math.hypot(a[0] - b[0], a[1] - b[1]) || 1; };
    const toWorld = (cx, cy) => { const r = cv.getBoundingClientRect(); return [cam.x + (cx - r.left - cw / 2) / cam.z, cam.y + (cy - r.top - ch / 2) / cam.z]; };
    cv.onpointerdown = e => {
      cv.setPointerCapture(e.pointerId);
      ptrs.set(e.pointerId, [e.clientX, e.clientY]);
      if (ptrs.size === 1) { tap = { x: e.clientX, y: e.clientY, t: performance.now() }; drag = { x: e.clientX, y: e.clientY, cx: cam.x, cy: cam.y }; }
      else { tap = null; me.hw = null; pinch = { d: pdist(), z: cam.z }; }
    };
    cv.onpointermove = e => {
      if (!ptrs.has(e.pointerId)) return;
      ptrs.set(e.pointerId, [e.clientX, e.clientY]);
      if (me.hw) { me.hw.cx = e.clientX; me.hw.cy = e.clientY; return; }
      if (pinch && ptrs.size >= 2) { cam.z = pinch.z * pdist() / pinch.d; clampCam(); return; }
      if (!drag) return;
      const dx = e.clientX - drag.x, dy = e.clientY - drag.y;
      if (tap && Math.hypot(dx, dy) > 8) tap = null;
      if (!tap) { follow0 = false; cam.x = drag.cx - dx / cam.z; cam.y = drag.cy - dy / cam.z; clampCam(); }
    };
    const up = e => {
      ptrs.delete(e.pointerId);
      if (me.hw) { me.hw = null; me.node = null; }
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
      if (me.taxi) return;
      if (taxi && taxi.st === 'come') { taxiGo(); api.notify(tr('🚕 Taksi iptal'), '🚕'); }
      // 🚗 arabadaysan yollardan sürersin; hedef bir bina / kişiyse varınca park edip inersin, kalanını yürürsün
      if (me.drive) {
        const ids = route(wd.nearest(me.x, me.y, 1), wd.nearest(x, y, 1), 1), pts = offPath(ids, n => n.hw * .5);
        while (pts.length > 1) { const [x0, y0] = pts[0], [x1, y1] = pts[1]; if ((me.x - x0) * (x1 - x0) + (me.y - y0) * (y1 - y0) <= 0) break; pts.shift(); }
        me.path = pts; me.pi = 0; me.node = null;
        me.driveTo = k || gap || me.chase || me.joinG ? { x, y, k, gap } : null;
        const last = pts[pts.length - 1];
        me.dest = { x: last[0], y: last[1], k };
        return;
      }
      // en yakın, arada bina olmadan düz gidilebilen düğüm
      const reach = (px, py) => { const r = wd.nodes.map((n, i) => [(n.x - px) ** 2 + (n.y - py) ** 2, i]).sort((p, q) => p[0] - q[0]).slice(0, 8).find(([, i]) => wd.segFree(wd.nodes[i].x, wd.nodes[i].y, px, py)); return r ? r[1] : wd.nearest(px, py); };
      const a = !me.path && me.node != null ? me.node : reach(me.x, me.y);
      let b = wd.nearest(x, y), leg = false;
      if (!k && !wd.inSea(x, y) && !wd.solid(x, y)) {
        const near = wd.nodes.map((n, i) => [(n.x - x) ** 2 + (n.y - y) ** 2, i]).sort((p, q) => p[0] - q[0]).slice(0, 8).find(([, i]) => wd.segFree(wd.nodes[i].x, wd.nodes[i].y, x, y));
        if (near) { b = near[1]; leg = true; }
      }
      const ids = route(a, b), pts = walkPath(ids, me.x, me.y);
      // başta geri dönme: ilk noktayı geçmişsen (ikinci noktaya düz yol varsa) atla
      while (pts.length > 1) { const [x0, y0] = pts[0], [x1, y1] = pts[1]; if ((me.x - x0) * (x1 - x0) + (me.y - y0) * (y1 - y0) <= 0 || !wd.segFree(me.x, me.y, x1, y1)) break; pts.shift(); }
      // binaya / dolguya gidiyorsan son nokta binanın tarafındaki kaldırım
      const kp = k && (PL[k] || wd.FM[k]);
      if (kp && !kp.area && pts.length) pts[pts.length - 1] = towardB(b, kp.x, kp.y);
      if (leg) {
        // sonda geri dönme: hedef son düğümden önceyse o düğüme kadar gitme
        while (pts.length > 1) { const [x0, y0] = pts[pts.length - 1], [x1, y1] = pts[pts.length - 2]; if ((x - x0) * (x1 - x0) + (y - y0) * (y1 - y0) <= 0 || !wd.segFree(x1, y1, x, y)) break; pts.pop(); }
        pts.push([x, y]);
      }
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
      me.joinG = null;
      if (me.taxi) { api.notify(tr('🚕 Taksidesin, varınca inersin'), '🚕'); return; }
      if (!me.drive && Math.hypot(x - myCar.x, y - myCar.y) < 26) { openMyCar(); return; }
      const hit = ag.filter(a => a.st !== 'in' && !a.inCar).find(a => Math.abs(a.x - x) < CS / 2 + 8 && Math.abs(a.y - y) < CS / 2 + 8);
      if (hit) { if (me.chase && me.chase !== hit) { me.chase.hold = false; me.chase = null; me.path = null; me.dest = null; } openChar(hit); return; }
      const ph = peds.find(o => o.c && !o.gone && Math.abs(o.x - x) < CS / 2 + 8 && Math.abs(o.y - y) < CS / 2 + 8), pa = ph && promote(ph);
      if (pa) { if (me.chase) { me.chase.hold = false; me.chase = null; me.path = null; me.dest = null; } openChar(pa); return; }
      const bl = wd.bills.find(b => Math.abs(b.x - x) < 80 && Math.abs(b.y - y) < 80 && inRect({ ...b, w: b.w + 12, d: b.d + 12 }, x, y));
      if (bl) { openBill(bl); return; }
      const b = BLD.find(b => Math.abs(x - b.x) < b.w / 2 + 6 && Math.abs(y - b.y) < b.h / 2 + 6)
        || wd.fill.find(f => Math.abs(f.x - x) < 80 && Math.abs(f.y - y) < 80 && inRect(f, x, y))
        || AREAS.find(a => a.k === 'sahil' ? !wd.inSea(x, y) && wd.coastDist(x, y) < 200 && x > a.beach[0] && x < a.beach[1] : ell(x, y, a.x, a.y, a.rx, a.ry));
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
    // eye: kıyafet + beden satırı (👀 Süz'e basınca)
    function row(a, eye) {
      const w = a.w || {};
      return `<a class="ct-row" href="#/sehir" data-ag="${esc(a.id)}">${api.avatar(shownName(a) ? a.c : { name: '?', photo: a.c.photo, colors: a.c.colors }, 42)}<span class="ct-rin"><b>${nameOf(a)}${shownName(a) && a.c.age ? `<small>, ${esc(a.c.age)}</small>` : ''}</b>
        <small>${a.str ? '🙋‍♀️ yabancı' : w.job ? '💼 iş başında' : '🌿 boş zaman'}${!a.str && a.c.job ? ` · ${esc(a.c.job)}` : ''}</small><small>${esc(w.doing || '')}</small>${eye ? `<small class="ct-wear">${esc(api.wear(a.c, a.to || a.k, !!w.job, lastH))}${(sz => sz ? String(sz).split('\n').map((s, i) => `${i ? '<br>' : ' '}<b class="ct-size${i ? ' ct-size2' : ''}">${esc(s)}</b>`).join('') : '')(api.size(a.c))}</small>` : ''}</span><i class="ct-go">›</i></a>`;
    }
    // ✋ dokunulan karakter yolda durur (kart açıkken, konuşurken ya da yanına giderken); başka yere dokununca yoluna devam eder
    let held = null;
    function release() { if (held && !(talk && talk.a === held) && me.chase !== held) held.hold = false; held = null; }
    function holdA(a) { if (held !== a) release(); a.hold = true; held = a; }
    const taxiBtn = (b, k) => (!inside && !me.taxi && !me.drive && Math.hypot(b.x - me.x, b.y - me.y) > 450 ? `<button type="button" class="btn ghost sm" data-taxi="${k}">🚕 Taksiyle git</button>` : '');
    function openCard(k) {
      const b = PL[k] || wd.FM[k];
      if (!b) return;
      release();
      sel = k;
      if (!PL[k]) {
        card.innerHTML = `<button type="button" class="ct-x" data-x aria-label="Kapat">✕</button><h3>${b.ic} ${esc(b.n)}</h3><p>${ZONE_N[b.z]}</p>
          <div class="ct-acts"><button type="button" class="btn sm" data-enter="${k}">🚪 İçeri gir</button><button type="button" class="btn ghost sm" data-walk="${k}">🚶 Buraya yürü</button>${taxiBtn(b, k)}</div>`;
        card.hidden = false;
        return;
      }
      const here = ag.filter(a => a.k === k && a.st !== 'walk'), coming = ag.filter(a => a.k === k && a.st === 'walk');
      let home = '';
      if (/^ev\d|^apt$/.test(k)) {
        const hs = homes.hs.filter(x => x.k === k), fn = c => esc(c.name.split(' ')[0]);
        const line = x => `${k === 'apt' ? `<b>🚪 Daire ${x.flat}</b> · ` : ''}${x.koca ? `💍 ${fn(x.m[0])} kocasıyla yaşıyor` : x.mate ? `👭 ${fn(x.m[0])} ev arkadaşıyla yaşıyor` : x.m.length === 1 ? `🧍 ${fn(x.m[0])} tek yaşıyor` : `👭 Ev arkadaşları: ${x.m.map(fn).join(', ')}`}`;
        home = hs.length ? `<ul class="ct-ul">${hs.map(x => `<li>${line(x)}</li>`).join('')}</ul>` : '<p>🪧 Boş ev · satılık</p>';
      }
      const ev = evAt(k, lastH), evLater = !ev && evDay.find(e => e.k === k && e.h[0] > lastH);
      card.innerHTML = `<button type="button" class="ct-x" data-x aria-label="Kapat">✕</button>
        <h3>${b.ic} ${esc(b.n)} <small>· ${hh()} · ${here.length} kişi</small></h3>${home}
        ${ev ? `<p class="ct-ev">🎉 Şimdi: ${ev.ic} ${esc(ev.n)} · tavlama şansı yüksek</p>` : evLater ? `<p class="ct-ev soon">🗓️ ${String(evLater.h[0] % 24).padStart(2, '0')}:00 · ${evLater.ic} ${esc(evLater.n)}</p>` : ''}
        ${b.mine ? '<p>🏡 Burası senin evin. İçeri girebilir ya da tanıdığın birini davet edebilirsin; sohbet evinde başlar.</p>' : ''}
        <div class="ct-acts">${b.area ? '' : `<button type="button" class="btn sm" data-enter="${k}">${b.party ? '🎉 Partiye katıl' : '🚪 İçeri gir'}</button>`}${b.mine ? '<button type="button" class="btn sm" data-invite>💌 Eve davet et</button>' : ''}<button type="button" class="btn ghost sm" data-walk="${k}">🚶 Buraya yürü</button>${taxiBtn(b, k)}${b.s && !b.party ?`<a class="btn ghost sm" href="${b.s}">🌐 Siteye git <b>${esc(b.sn)}</b></a>` : ''}</div>
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
    function openChar(a, eye) {
      sel = null;
      const far = !inside && distTo(a) > STOP_R;
      if (far) { if (held !== a) release(); } else holdA(a);
      const w = a.w || {}, pl = a.k === '~' ? null : plOf(a.k), m = met[a.id] || {}, cool = m.cool && Date.now() < m.cool, tier = tierOf(a), st = STYLE[styleOf(a)];
      const where = a.st === 'walk' ? (pl ? `🚶 ${pl.ic} ${esc(pl.n)} yolunda` : '🚶 sokakta yürüyor') : pl ? `📍 ${pl.ic} ${esc(pl.n)}` : '📍 sokakta';
      const direct = !a.str && !far;
      card.innerHTML = `<button type="button" class="ct-x" data-x aria-label="Kapat">✕</button>
        <div class="ct-list">${row(a, eye).replace('data-ag', 'data-noop')}</div>
        <div class="ct-chips"><em>${TIER[tier].l}</em>${st && tier !== 'yeni' ? `<em>${st.l}</em>` : ''}${far ? '<em class="far">🔭 Uzakta · durduramazsın</em>' : '<em class="stop">✋ Durdu, seni bekliyor</em>'}</div>
        <p>${where}${m.ilgi ? ` · 💗 ${Math.round(m.ilgi)}` : ''}${cool ? ' · 😒 Seninle konuşmak istemiyor' : ''}</p>
        ${lafRecent(a) ? `<p class="ct-ev">📣 “${esc(a.lafTxt)}” · karşılık verirsen 💗 +${LAF_I}</p>` : ''}
        <div class="ct-acts">${direct ? `<button type="button" class="btn sm" data-direct="${esc(a.id)}">💬 Sohbete geç</button>` : ''}<button type="button" class="btn ${direct && !lafRecent(a) ? 'ghost ' : ''}sm" data-talk="${esc(a.id)}"${cool ? ' disabled' : ''}>${far ? '🏃 Peşinden git' : lafRecent(a) ? '😏 Karşılık ver' : '🗣️ Ayaküstü konuş'}</button>${a.grp && !a.grp.joined ? `<button type="button" class="btn sm" data-gjoin="${esc(a.id)}">👥 Sohbete katıl</button>` : ''}${a.esc && escort && escort.ph === 'with' ? `<button type="button" class="btn sm" data-home="${esc(a.id)}">🏡 Eve davet et</button><button type="button" class="btn ghost sm" data-escx>👋 Vedalaş</button>` : a.esc ? `<button type="button" class="btn ghost sm" data-escx>👋 Davetten vazgeç</button>` : !a.str && !far && !inside && tier !== 'yeni' ? `<button type="button" class="btn sm" data-home="${esc(a.id)}">🏡 Eve davet et</button>` : ''}${eye ? '' : `<button type="button" class="btn ghost sm" data-suz="${esc(a.id)}">👀 Süz</button>`}${far || inside ? '' : `<button type="button" class="btn ghost sm" data-near="${esc(a.id)}">🚶 Yanına git</button>`}</div>`;
      card.hidden = false;
    }
    // 💬 tanıdığına doğrudan: sohbetine mekân kartı + onun selamıyla geçilir
    // sohbete geçmeden önce: dönünce yanında olacak kişileri kaydet
    function meetWith(L) { withIds = L.map(a => a.id); wthAt = Date.now(); persist(); }
    function directChat(a) {
      const pl = a.k === '~' ? null : plOf(a.k), tier = tierOf(a), st = STYLE[styleOf(a)];
      const hi = st && st.hi && Math.random() < .5 ? pickA(st.hi) : pickA(TIER[tier].hi || TK.hiK);
      a.hold = false; held = null; meetWith(escort && escort.L.includes(a) ? escort.L : [a]);
      api.meet(a.c, pl ? pl.k : '', pl ? `${pl.ic} ${pl.n}` : '📍 Sokakta', Math.floor(gm), hi, true);
    }
    let invSel = []; // 💌 eve davet seçimi (en fazla 2)
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
      if (me.drive) exitCar(true);
      if (Math.hypot(a.x - me.x, a.y - me.y) <= STOP_R) { a.hold = true; held = a; }
      walkTo(a.x, a.y, null, CS + 10); me.chase = a; me.chaseTalk = toTalk; me.rp = tNow + 1500; follow0 = true;
    }
    function wantTalk(a) {
      const m = met[a.id] || {};
      if (m.cool && Date.now() < m.cool) return;
      card.hidden = true;
      if (me.drive) exitCar(true);
      if (inside || distTo(a) < 110) startTalk(a);
      else { me.tries = 0; chase(a); api.notify(`${shownName(a) || tr('Yabancı kız')} ${tr(a.hold ? 'seni bekliyor' : '· peşinden gidiyorsun')}`, a.hold ? '✋' : '🏃'); }
    }
    // 📣 laf: 5–12 sn'de bir yakındaki (LAF_R) bir karakter %55 (gece / etkinlikte daha sık) şansla laf atar; aynı kişi 60 sn'de bir
    let lafNext = 4000;
    const lafRecent = a => a.lafT && tNow - a.lafT < 30000;
    function lafLine(a) {
      const tier = tierOf(a), st = styleOf(a), h = hourOf(), ev = evAt(a.k, lastH), g = (api.user() || {}).gender;
      const pools = [LAF[tier] || LAF.yeni];
      if (st && LAF_ST[st]) pools.push(LAF_ST[st]);
      if (h >= 20 || h < 4 || NIGHT_PL.includes(a.k)) pools.push(LAF_NIGHT);
      if (api.rel(a.c).wed) pools.push(LAF_WED);
      if (ev) pools.push([`${ev.ic} ${ev.n} başladı, gelsene! 😄`]);
      if (a.drive) pools.push(LAF_CAR, LAF_CAR, LAF_CAR);
      const s = pickA(pickA(pools));
      return g === '♀' || g === '⚧♀' ? s.replace(/yakışıklı/g, 'güzelim') : s;
    }
    function lafStep() {
      if (inside || talk || me.taxi || tNow < lafNext) return;
      lafNext = tNow + 5000 + Math.random() * 7000;
      const h = hourOf(), p = .55 + (h >= 20 || h < 4 ? .2 : 0) + (evNow(h).length ? .1 : 0);
      if (Math.random() > p) return;
      const near = ag.filter(a => a.st !== 'in' && !a.hold && !a.esc && !a.seek && !a.grp && !a.phone && !(a.lafT && tNow - a.lafT < 60000) && !((met[a.id] || {}).cool > Date.now()) && (d => d > 25 && d < (a.drive ? LAF_R + 90 : LAF_R))(distTo(a)));
      if (!near.length) return;
      const drv = near.filter(a => a.drive), a = drv.length && Math.random() < .6 ? pickA(drv) : pickA(near), r = Math.random();
      a.lafT = tNow;
      // 🚗 arabadakiler: korna / selektör / camdan laf
      if (a.drive && r < .35) { a.honkT = tNow; a.lafTxt = pickA(LAF_HONK); honk(); }
      else if (a.drive && r < .65) { a.flashT = tNow; a.lafTxt = pickA(LAF_FLASH); }
      // ✋ yürüyen biri %18 yanına gelip seni durdurur
      else if (!a.drive && !me.drive && r < .18 && freeA(a) && !talk) { const tier = tierOf(a); a.seek = { t: tNow, rp: 0, txt: pickA(STOP_L[tier] || STOP_L.yeni) }; a.lafTxt = pickA(['Hey! Dur bir saniye! ✋', 'Bekle! 🏃‍♀️', 'Psst, dur! 👋']); }
      else a.lafTxt = lafLine(a);
    }
    // bekletilen / toplanan / durduran karakter kaldığı yerden hedefine devam eder
    function resume(a) {
      a.path = null; a.leaveAt = 0;
      if (a.to && PL[a.to]) depart(a);
      else if (a.k && a.k !== '~' && PL[a.k]) { a.to = a.k; depart(a); }
      else { a.k = '~'; a.st = 'stand'; a.next = tNow + 1500 + Math.random() * 3000; }
    }
    const freeA = a => !a.hold && !a.esc && !a.seek && !a.grp && !a.phone && !a.drive && (a.st === 'walk' || a.st === 'stand' || a.st === 'wander') && !(talk && talk.a === a);
    // ✋ seni durdurmaya gelen: yolu tazeleyerek yanına koşar, yetişince konuşmayı o başlatır (20 sn'de yetişemezse vazgeçer)
    function seekStep(a, dt) {
      const S = a.seek, d = distTo(a);
      if (inside || me.taxi || tNow - S.t > 20000) { a.seek = null; resume(a); return; }
      if (d < CS + 18) {
        if (talk || !card.hidden) return;
        a.seek = null; resume(a);
        me.path = null; me.dest = null; me.chase = null; me.hw = null;
        a.lafTxt = S.txt; a.lafT = tNow;
        api.notify(`${shownName(a) || tr('Yabancı kız')} ${tr('seni durdurdu')}`, '✋');
        startTalk(a);
        return;
      }
      if (!a.path || tNow > S.rp) { S.rp = tNow + 1200; a.path = [...walkPath(route(wd.nearest(a.x, a.y), wd.nearest(me.x, me.y)), a.x, a.y), [me.x, me.y]]; a.pi = 0; }
      follow(a, a.sp * 2.2 * dt);
    }
    // 👥 toplanma: ekrandaki yürüyen 2–3 kişi kaldırımda bir noktada buluşur, sırayla konuşur, sonra yollarına devam eder (aynı anda en çok 2 grup)
    const grps = [];
    let grpNext = 6000;
    const isNight = () => { const h = hourOf(); return h >= 20 || h < 5; };
    const zoneAt = (x, y) => wd.coastDist(x, y) < 380 ? 'cs' : (x < 950 * SC && y < 1000 * SC) || x < 0 || y < 0 ? 'ev' : x > 1830 * SC && y < 1500 * SC ? 'ex' : ell(x, y, 1650 * SC, 860 * SC, 820 * SC, 540 * SC) ? 'dt' : 'ev';
    const convAt = (x, y) => { const r = Math.random(); return isNight() && r < .5 ? pickA(CONV_Z.night) : r < .8 ? pickA(CONV_Z[zoneAt(x, y)]) : pickA(CONV); };
    function grpEnd(g) { const i = grps.indexOf(g); if (i < 0) return; grps.splice(i, 1); g.mem.forEach(a => { a.grp = null; resume(a); }); }
    // 👥 sohbete katıl: yakınsan hemen, değilsen yanlarına yürürsün; konuşma dokunduğun kişiyle, diğerleri araya girer
    function joinAsk(a) {
      const g = a.grp;
      if (!g) return;
      g.joined = true; g.joinT = tNow;
      card.hidden = true;
      if (me.drive) exitCar(true);
      if (inside || Math.hypot(g.x - me.x, g.y - me.y) < 80) joinGroup(g, a);
      else { walkTo(g.x, g.y, null, 28); me.joinG = [g, a]; follow0 = true; }
    }
    function joinGroup(g, a) {
      if (!grps.includes(g)) return;
      startTalk(a);
      talk.g = g;
      const o = g.mem.filter(x => x !== a);
      if (o.length) { const s = pickA(o), l = pickA(GJ_HI); talk.log.push(['her', l, first(s)]); s.chatTxt = l; s.chatT = tNow; }
      drawTalk();
    }
    /* 🏡 eve beraber yürüme: davet ettiğin 1–2 kişi önce yanına gelir (uzaktaysa yakına taksiyle), sonra senin peşinden eve yürür; kapıya varınca sohbet evde başlar.
       Sen haritada istediğin gibi yürüyebilirsin, peşinden gelirler; ona dokunup 👋 Davetten vazgeç ile bitirirsin */
    let escort = null;
    function startEscort(L) {
      L = L.filter(Boolean);
      if (!L.length) return;
      if (escort) stopEscort(false);
      closeCard();
      L.forEach(a => {
        if (a.grp) grpEnd(a.grp);
        a.seek = null; a.phone = null; a.drive = false; a.hold = false; a.esc = true; a.st = 'walk'; a.path = null; a.leaveAt = 0;
        if (Math.hypot(a.x - me.x, a.y - me.y) > 900) { const j = nearCamNode(); if (j >= 0) [a.x, a.y] = sidePt(j); }
      });
      escort = { L, ph: 'come', t0: tNow, rp: 0 };
      api.notify(`${L.map(a => shownName(a) || tr('Yabancı kız')).join(' & ')} ${tr('yanına geliyor, beraber eve yürüyeceksiniz')}`, '🏡');
    }
    /* 🚗 araban: 🚗 düğmesi / park etmiş arabana dokun → yanındaysan binersin (uzaksa önce yürürsün); yanındaki kızlar (eşlik edenler) da biner.
       Sürerken haritaya dokun → yollardan gidersin (bina / kişi hedefse varınca park edip inersin), basılı tut → o yöne sürersin. 🅿️ ile park edip inersin */
    function carBtn() { const b = root.querySelector('[data-ct="car"]'); if (b) { b.textContent = me.drive ? '🅿️' : '🚗'; b.title = tr(me.drive ? 'Park et, in' : 'Araban'); } }
    function enterCar() {
      if (me.drive || inside || me.taxi) return;
      if (Math.hypot(myCar.x - me.x, myCar.y - me.y) > 140) { closeCard(); walkTo(myCar.x, myCar.y); me.toCar = true; follow0 = true; api.notify(tr('🚗 Arabana yürüyorsun'), '🚶'); return; }
      closeCard();
      me.drive = true; me.x = myCar.x; me.y = myCar.y; me.sa = me.a = myCar.sa; me.path = null; me.dest = null; me.hw = null; me.toCar = false;
      const inn = escort ? escort.L.filter(a => Math.hypot(a.x - me.x, a.y - me.y) < 220) : [];
      inn.forEach(a => { a.inCar = true; });
      api.notify(inn.length ? `🚗 ${inn.map(a => shownName(a) || tr('Yabancı kız')).join(' & ')} ${tr('de bindi')}` : tr('🚗 Arabana bindin'), '🚗');
      if (inn.length) { const a = inn[0]; a.chatTxt = pickA(CAR_WITH); a.chatT = tNow; }
      carBtn(); persist(); follow0 = true;
      if (escort && escort.ph === 'go') { const [dx, dy] = homeDoor(); walkTo(dx, dy); me.escHome = true; }
    }
    function exitCar(quiet) {
      if (!me.drive) return;
      const n = wd.nodes[wd.nearest(me.x, me.y, 1)], sa = me.sa || 0, sx = -Math.sin(sa), sy = Math.cos(sa);
      myCar.x = me.x + sx * n.hw * .35; myCar.y = me.y + sy * n.hw * .35; myCar.sa = sa;
      const ox = me.x + sx * (n.hw * .5 + SW / 2), oy = me.y + sy * (n.hw * .5 + SW / 2);
      if (!wd.solid(ox, oy) && !wd.inSea(ox, oy)) { me.x = ox; me.y = oy; }
      me.drive = false; me.path = null; me.node = null;
      if (escort) escort.L.forEach((a, i) => { if (a.inCar) { a.inCar = false; a.x = me.x + Math.cos(sa) * (i ? -18 : 18); a.y = me.y + Math.sin(sa) * (i ? -18 : 18); } });
      carBtn(); persist();
      if (!quiet) api.notify(tr('🅿️ Arabanı park ettin'), '🅿️');
    }
    function openMyCar() {
      if (talk) endTalk();
      release(); sel = null;
      const d = Math.hypot(myCar.x - me.x, myCar.y - me.y), inn = escort ? escort.L : [];
      card.innerHTML = `<button type="button" class="ct-x" data-x aria-label="Kapat">✕</button><h3>🚗 ${tr('Senin araban')}</h3>
        <p>${tr('Pembe SUV · 5 kişilik')}${inn.length ? ` · ${inn.map(a => esc(shownName(a) || '❔')).join(' & ')} ${tr('seninle binecek')}` : ''}</p>
        <div class="ct-acts"><button type="button" class="btn sm" data-car>${d > 140 ? '🚶 ' + tr('Arabana yürü') : '🔑 ' + tr('Bin')}</button></div>`;
      card.hidden = false;
    }
    // 📱 şehir telefonu: şehirde başlayan sohbetler ve gruplar (en yeni önce); dokununca o sohbet açılır
    function openPhone() {
      if (talk) endTalk();
      release(); sel = null;
      const L = api.chats ? api.chats() : [], ago = ts => { const d = Date.now() - ts; return d < 6e4 ? tr('şimdi') : d < 36e5 ? `${Math.floor(d / 6e4)} dk` : d < 864e5 ? `${Math.floor(d / 36e5)} sa` : `${Math.floor(d / 864e5)} g`; };
      card.innerHTML = `<button type="button" class="ct-x" data-x aria-label="Kapat">✕</button><h3>📱 ${tr('Şehir sohbetleri')}</h3>
        ${L.length ? `<div class="ct-list">${L.map(x => `<a class="ct-row" href="#/chat/${esc(x.id)}" data-chat="${esc(x.id)}">${api.avatar(x.c, 42)}<span class="ct-rin"><b>${x.group ? '👥 ' : ''}${esc(x.n)}${x.unread ? ' <i class="ct-new">●</i>' : ''}</b><small>${esc(x.last)}</small></span><i class="ct-go">${ago(x.ts)}</i></a>`).join('')}</div>`
          : `<p>${tr('Henüz şehirde başlayan bir sohbetin yok. Biriyle ayaküstü konuş ya da eve davet et.')}</p>`}`;
      card.hidden = false;
    }
    function stopEscort(note) {
      if (!escort) return;
      const w = escort.ph === 'with';
      escort.L.forEach((a, i) => { if (a.inCar) { a.inCar = false; a.x = me.x + (i ? -24 : 24); a.y = me.y; } a.esc = false; resume(a); });
      escort = null; me.escHome = false; withIds = []; persist();
      if (note) api.notify(tr(w ? '👋 Vedalaştınız' : '🏡 Davetten vazgeçtin'), '👋');
    }
    const homeDoor = () => doorOf('benim');
    // engelde kayarak düz git (peşinden gelirken)
    function stepTo(a, tx, ty, sp, dt) {
      const dx = tx - a.x, dy = ty - a.y, d = Math.hypot(dx, dy);
      if (d < 1) return;
      const m = Math.min(d, sp * dt), ux = dx / d * m, uy = dy / d * m, ok = (x, y) => !wd.inSea(x, y) && !wd.solid(x, y);
      a.a = Math.atan2(dy, dx);
      if (ok(a.x + ux, a.y + uy)) { a.x += ux; a.y += uy; } else if (ok(a.x + ux, a.y)) a.x += ux; else if (ok(a.x, a.y + uy)) a.y += uy; else { a.x += ux; a.y += uy; }
    }
    function escortStep(dt) {
      const E = escort;
      if (!E) return;
      if (inside) return;
      if (E.ph === 'come') {
        let all = true;
        E.L.forEach(a => {
          if (a.inCar) { a.x = me.x; a.y = me.y; return; }
          const dd = Math.hypot(a.x - me.x, a.y - me.y);
          if (me.drive && dd < 60) { a.inCar = true; api.notify(`🚗 ${shownName(a) || tr('Yabancı kız')} ${tr('de bindi')}`, '🚗'); return; }
          if (!me.drive && dd < 45) return;
          all = false;
          if (!a.path || tNow > E.rp) a.path = [...walkPath(route(wd.nearest(a.x, a.y), wd.nearest(me.x, me.y)), a.x, a.y), [me.x, me.y]], a.pi = 0;
          if (follow(a, a.sp * 2.4 * dt)) a.path = null;
        });
        if (tNow > E.rp) E.rp = tNow + 1200;
        if (all || tNow - E.t0 > 40000) {
          E.ph = 'go';
          const [dx, dy] = homeDoor();
          if (!talk) { closeCard(); walkTo(dx, dy); me.escHome = true; follow0 = true; }
          const a = E.L[0], l = pickA(ESC_HI);
          a.chatTxt = l; a.chatT = tNow;
        }
        return;
      }
      // peşinden: senin arkanda sıra sıra (yürürken), dururken yanında
      const moving = !!(me.path || (me.hw && me.hw.mv)), bx = Math.cos(me.a), by = Math.sin(me.a);
      E.L.forEach((a, i) => {
        if (a.inCar) { a.x = me.x; a.y = me.y; return; }
        const back = moving ? 20 + i * 18 : 0, side = moving ? (i ? -9 : 9) : (i ? -20 : 20);
        const tx = me.x - bx * back - by * side, ty = me.y - by * back + bx * side;
        if (Math.hypot(tx - a.x, ty - a.y) > 4) stepTo(a, tx, ty, Math.max(60, Math.hypot(tx - a.x, ty - a.y) * 3), dt);
      });
      if (tNow > (E.say || 0)) { E.say = tNow + 7000 + Math.random() * 6000; if (moving && Math.random() < .6) { const a = pickA(E.L); a.chatTxt = pickA(a.inCar ? CAR_WITH : E.ph === 'with' ? WITH_WALK : ESC_WALK); a.chatT = tNow; } }
      if (E.ph !== 'go') return;
      const [dx, dy] = homeDoor();
      if (Math.hypot(dx - me.x, dy - me.y) < (me.drive ? 170 : 70) && !talk) {
        if (me.drive) exitCar(true);
        const L = E.L;
        L.forEach(a => { a.esc = false; resume(a); });
        escort = null; me.escHome = false; me.path = null; me.dest = null;
        meetWith(L);
        if (L.length === 2 && api.meetGroup) api.meetGroup(L[0].c, L[1].c, 'benim', '🏡 Senin evin', Math.floor(gm));
        else api.meet(L[0].c, 'benim', '🏡 Senin evin', Math.floor(gm), pickA(ESC_DOOR), !L[0].str);
      }
    }
    // grubun diğerleri araya girer (%55): cevabın iyi / kötü gitmesine göre
    function grpChime(T, ok) {
      const o = T.g ? T.g.mem.filter(x => x !== T.a) : [];
      if (!o.length || Math.random() > .55) return;
      const s = pickA(o), l = pickA(ok ? GJ_OK : GJ_BAD);
      T.log.push(['her', l, first(s)]); s.chatTxt = l; s.chatT = tNow;
    }
    function grpStep(dt) {
      if (!inside && tNow > grpNext && grps.length < 2) {
        grpNext = tNow + 9000 + Math.random() * 12000;
        const c = ag.filter(a => freeA(a) && vis(a.x, a.y, 250)), A = c.length > 1 && pickA(c);
        const near = A ? c.filter(b => b !== A && Math.hypot(b.x - A.x, b.y - A.y) < 320).sort((p, q) => Math.hypot(p.x - A.x, p.y - A.y) - Math.hypot(q.x - A.x, q.y - A.y)).slice(0, Math.random() < .4 ? 2 : 1) : [];
        if (near.length) {
          const mem = [A, ...near], n = wd.nearest(mem.reduce((s, a) => s + a.x, 0) / mem.length, mem.reduce((s, a) => s + a.y, 0) / mem.length), [gx, gy] = sidePt(n);
          const g = { mem, x: gx, y: gy, conv: convAt(gx, gy), i: 0, next: 0, t0: tNow };
          mem.forEach((a, i) => {
            const an = i / mem.length * Math.PI * 2, slot = [gx + Math.cos(an) * 13, gy + Math.sin(an) * 13];
            a.grp = g; a.path = [...walkPath(route(wd.nearest(a.x, a.y), n), a.x, a.y), slot]; a.pi = 0;
          });
          grps.push(g);
        }
      }
      grps.slice().forEach(g => {
        // 👥 katıldıysan grup dağılmaz, sana döner; yanına gelmezsen 25 sn sonra dağılır
        if (g.joined) {
          if (talk && talk.g === g) { g.mem.forEach(a => { a.a = Math.atan2(me.y - a.y, me.x - a.x); }); return; }
          if (tNow - g.joinT > 25000) grpEnd(g);
          return;
        }
        if (g.mem.some(a => talk && talk.a === a)) { grpEnd(g); return; }
        g.mem.forEach(a => { if (!a.hold && a.pi < a.path.length) follow(a, a.sp * 1.3 * dt); });
        if (g.mem.some(a => a.pi < a.path.length)) { if (tNow - g.t0 > 30000) grpEnd(g); return; }
        g.mem.forEach(a => { a.a = Math.atan2(g.y - a.y, g.x - a.x); });
        if (tNow < g.next) return;
        if (g.i >= g.conv.length) { grpEnd(g); return; }
        const s = g.mem[g.i % g.mem.length];
        s.chatTxt = g.conv[g.i]; s.chatT = tNow; g.i++; g.next = tNow + 2600 + s.chatTxt.length * 25;
      });
    }
    // 📱 telefonda konuşan: yürürken yavaşlar, baloncukta konuşmasının bir tarafı görünür (aynı anda en çok 2)
    let phNext = 4000;
    function phoneStep() {
      if (!inside && tNow > phNext) {
        phNext = tNow + 6000 + Math.random() * 8000;
        if (ag.filter(a => a.phone).length < 2 && Math.random() < .6) { const c = ag.filter(a => a.st === 'walk' && freeA(a) && vis(a.x, a.y, 200)); if (c.length) pickA(c).phone = { L: pickA(isNight() && Math.random() < .5 ? PHONE_NIGHT : PHONE), i: 0, next: tNow + 500 }; }
      }
      ag.forEach(a => {
        const p = a.phone;
        if (!p || tNow < p.next) return;
        if (p.i >= p.L.length || a.st !== 'walk' || a.hold) { a.phone = null; return; }
        a.chatTxt = '📱 ' + p.L[p.i++]; a.chatT = tNow; p.next = tNow + 3300;
      });
    }
    // 📯 kısa çift korna sesi (WebAudio, kısık)
    let actx = null;
    function honk() {
      try {
        actx = actx || new (window.AudioContext || window.webkitAudioContext)();
        if (actx.state === 'suspended') actx.resume();
        const t = actx.currentTime;
        [0, .24].forEach(d => {
          const o = actx.createOscillator(), g = actx.createGain();
          o.type = 'square'; o.frequency.value = 392;
          g.gain.setValueAtTime(.0001, t + d); g.gain.exponentialRampToValueAtTime(.04, t + d + .02); g.gain.exponentialRampToValueAtTime(.0001, t + d + .17);
          o.connect(g); g.connect(actx.destination); o.start(t + d); o.stop(t + d + .2);
        });
      } catch (e) {}
    }
    function drawLaf() {
      const k = tagK();
      ctx.font = `700 ${11 * k}px Nunito,${EMO}`; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      const bub = (x, y, txt, age, dur, cht) => {
        const s = tr(txt), w = ctx.measureText(s).width + 16 * k, h2 = 20 * k, pop = Math.min(1, age / 180);
        ctx.globalAlpha = Math.min(1, (dur - age) / 600);
        ctx.save(); ctx.translate(x, y); ctx.scale(pop, pop);
        ctx.fillStyle = '#fff'; rr(-w / 2, -h2, w, h2, 9 * k); ctx.fill();
        ctx.beginPath(); ctx.moveTo(-5 * k, -1); ctx.lineTo(0, 6 * k); ctx.lineTo(5 * k, -1); ctx.closePath(); ctx.fill();
        ctx.strokeStyle = cht ? '#9aa3b5' : '#ff3d8b'; ctx.lineWidth = 1.5 * k; rr(-w / 2, -h2, w, h2, 9 * k); ctx.stroke();
        ctx.fillStyle = '#2a1636'; ctx.fillText(s, 0, -h2 / 2 + .5 * k);
        ctx.restore();
      };
      ag.forEach(a => {
        // 📣 laf / 👀 süzme tepkisi / 👥 sohbet + 📱 telefon: en yenisi gösterilir (sohbet baloncuğu gri, daha kısa)
        const b = [[a.lafT, a.lafTxt, 0], [a.suzT, a.suzTxt, 0], [a.chatT, a.chatTxt, 1]].filter(x => x[0]).sort((p, q) => q[0] - p[0])[0];
        if (!b) return;
        const age = tNow - b[0], cht = b[2], dur = cht ? 3000 : 5500;
        if (age > dur || a.st === 'in' || !vis(a.x, a.y, 120)) return;
        bub(a.x, a.y - CS / 2 - 8 * k, b[1], age, dur, cht);
      });
      cars.forEach(o => { const age = o.ctT ? tNow - o.ctT : 1e9; if (age < 3000 && vis(o.x, o.y, 120)) bub(o.x, o.y - 14 * k, o.ctTxt, age, 3000, 1); });
      // 🏖️ sahil grupları
      if (beachOn(21)) bgrp.forEach(g => { const age = tNow - g.t; if (g.t && age < 3000 && vis(g.x, g.y, 120)) { const p = g.m[g.who]; bub(p.x, p.y - CS / 2 - 8 * k, g.txt, age, 3000, 1); } });
      ctx.globalAlpha = 1;
    }
    // tarz cümlesi %65, yoksa genel havuz
    const lineOf = (own, gen) => own && own.length && Math.random() < .65 ? pickA(own) : pickA(gen);
    function startTalk(a) {
      me.path = null; me.dest = null; me.chase = null;
      a.hold = true; held = a; sel = null;
      const m = met[a.id] || {}, tier = tierOf(a), TI = TIER[tier], st = STYLE[styleOf(a)], ev = evAt(a.k, lastH), rl = api.rel(a.c), wed = !!rl.wed;
      talk = { a, tier, TI, st, ev, wed, rel: rl.rel || 'Single', live: rl.live || '', known: tier !== 'yeni', last: '', bad: 0, log: [], done: '', wait: false,
        ilgi: Math.max(5, Math.min(90, TI.i + (st ? st.i : 0) + (tier === 'tanis' ? (m.ilgi || 0) * .3 : 0) + (ev ? 6 : 0))),
        mood: (hash(a.id + ':' + day) % 35 - 15) / 100, named: !a.str || !!m.n };
      // 📣 sana laf attıysa konuşma o sözle ve daha yüksek ilgiyle başlar
      if (lafRecent(a)) { talk.ilgi = Math.min(90, talk.ilgi + LAF_I); talk.log.push(['her', a.lafTxt]); a.lafT = 0; }
      else talk.log.push(['her', lineOf(st && st.hi, TI.hi || (tier === 'yeni' ? TK.hi : TK.hiK))]);
      follow0 = true;
      drawTalk();
    }
    function drawTalk() {
      const T = talk, a = T.a, pl = a.k === '~' ? null : plOf(a.k);
      // 💡 öneriler: her yeni cümlede yenilenir (onun sorusu varsa cevap önerisi, ilgi arttıkça davet / cesur)
      if (!T.done && T.sugAt !== T.log.length) {
        T.sugAt = T.log.length;
        const P = T.ask ? [SUG.ans, SUG.ans, SUG.q] : [SUG.q, Math.random() < .5 ? SUG.ilt : SUG.esp, T.ilgi >= 70 ? SUG.ces : T.ilgi >= 45 ? SUG.dav : SUG.ilt];
        T.sug = [];
        P.forEach(L => { const c = L.filter(s => !T.sug.includes(s) && !T.log.some(x => x[1] === s)); if (c.length) T.sug.push(pickA(c)); });
      }
      const sugH = !T.done && T.sug && T.sug.length ? `<div class="ct-sug">${T.sug.map(s => `<button type="button" class="ct-sg" data-sg="${esc(s)}">${esc(s)}</button>`).join('')}</div>` : '';
      const opts = T.done === 'win' ? `<button type="button" class="btn sm" data-meet>💬 Sohbete geç</button>${inside ? '' : '<button type="button" class="btn sm" data-gohome>🏡 Eve götür</button>'}<button type="button" class="btn ghost sm" data-bye>👋 Sonra yazarım</button>`
        : T.done === 'lose' ? `<button type="button" class="btn ghost sm" data-bye>👋 Tamam</button>`
        : `<form class="ct-say" data-sayf><input type="text" name="m" maxlength="200" autocomplete="off" enterkeyhint="send" placeholder="${esc(tr('Bir şey yaz ya da sor…'))}"><button type="submit" class="btn sm" aria-label="Gönder">➤</button></form><button type="button" class="btn ghost sm" data-bye>👋 Vedalaş</button>`;
      // yeniden çizerken yazdığın ve odak kaybolmasın
      const inp0 = card.querySelector('.ct-say input'), keep = inp0 ? [inp0.value, document.activeElement === inp0] : null;
      card.innerHTML = `<button type="button" class="ct-x" data-x aria-label="Kapat">✕</button>
        <div class="ct-th">${api.avatar(T.named ? a.c : { name: '?', photo: a.c.photo, colors: a.c.colors }, 44)}<span><b>${T.named ? esc(a.c.name) : tr('Yabancı kız')}</b><small>${pl ? `${pl.ic} ${esc(pl.n)}` : '📍 sokakta'} · ${hh()}</small></span></div>
        <div class="ct-chips"><em>${T.TI.l}</em>${T.st && T.known ? `<em>${T.st.l}</em>` : ''}${T.wed ? '<em>💍 Evli</em>' : ''}${T.g ? `<em>👥 ${T.g.mem.filter(x => x !== a).map(x => esc(shownName(x) || '❔')).join(', ')}</em>` : ''}${T.ev ? `<em class="ev">🎉 ${esc(T.ev.n)}</em>` : ''}</div>
        <div class="ct-love${T.done === 'win' ? ' win' : ''}"><i style="width:${Math.round(T.ilgi)}%"></i><span>💗 İlgi ${Math.round(T.ilgi)}</span></div>
        <div class="ct-log">${T.log.slice(-12).map(([w, s, n]) => `<p class="ct-b ${w}">${n ? `<small class="ct-bn">${esc(n)}</small>` : ''}${esc(s)}</p>`).join('')}${T.wait ? '<p class="ct-b her typing">…</p>' : ''}</div>
        ${sugH}<div class="ct-acts ct-opts">${opts}</div>`;
      card.hidden = false;
      const lg = card.querySelector('.ct-log');
      if (lg) lg.scrollTop = lg.scrollHeight;
      const inp = card.querySelector('.ct-say input');
      if (inp && keep) { inp.value = keep[0]; if (keep[1]) inp.focus(); }
    }
    // 💬 yazdığın cümle: soru → bilgisiyle cevap; tür (iltifat / espri / davet / cesur) → choose; onun sorusuna cevap → tepki; kaba → ilgi düşer
    function tAns(T, q) {
      const a = T.a, c = a.c, w = a.w || {}, pl = a.k === '~' ? null : plOf(a.k), nm = first(a);
      if (q === 'ad') {
        if (T.named && T.known) return `Adımı unuttun mu? 😤 ${nm}`;
        if (a.str && T.ilgi < 30) return 'Önce sen söyle bakalım 😏';
        T.named = true; return `Ben ${nm} 😊`;
      }
      if (q === 'yas') return c.age ? pickA([`${c.age} yaşındayım 😊`, `${c.age}… ama kimseye söyleme 🤫`]) : 'Kadınlara yaş sorulmaz 😏';
      if (q === 'is') return (c.job ? `${c.job} olarak çalışıyorum` : 'Şu an çalışmıyorum, keyfime bakıyorum 😌') + (w.job ? ', şu an da iş başındayım 😅' : '');
      if (q === 'nasil') return pickA(T.mood > 0 ? ['İyiyim, sen sorunca daha iyi oldum 😊', 'Harika! Güzel bir gün 🌞'] : ['Eh, idare eder 😕', 'Biraz yorgunum ama iyiyim']);
      if (q === 'nereye') { const p = a.to && a.to !== '~' ? plOf(a.to) : null; return p ? `${p.ic} ${p.n} tarafına gidiyorum` : 'Hiçbir yere, öylesine dolaşıyorum 😊'; }
      if (q === 'ne') return w.job ? 'Çalışıyorum, mola verdim biraz 😅' : pl ? `${pl.ic} ${pl.n} civarındayım, öylesine 😊` : 'Biraz yürüyüş yapıyorum 🚶‍♀️';
      // 💍 profildeki Relationship / Yaşam ile aynı (evliyse evli der)
      if (q === 'sevgili') return T.wed ? (T.tier === 'sevgili' ? 'Evliyim biliyorsun 💍… ama kalbim sende 😘' : pickA(['Evliyim 💍… ama bu konuşmayı kocam bilmek zorunda değil 🤫', 'Evliyim, yüzüğü görmedin mi? 💍😏', 'Kocam var… ama şu an burada değil 😏']))
        : T.tier === 'sevgili' ? 'Sen varsın ya 😘 unuttun mu?'
        : T.rel === 'Has Boyfriend' ? pickA(['Sevgilim var… ama o burada değil 😏', 'Bir erkek arkadaşım var, neden sordun? 🤭', 'Var ama işler biraz karışık 🙄'])
        : T.rel === 'Divorced' ? pickA(['Boşandım, şimdilik yalnızım 😌', 'Bir kere evlendim, bir daha mı? 😅 Şu an bekarım']) : pickA(['Bekarım 😏 neden sordun?', 'Şu an kimse yok… henüz 😉', 'Bekarım ama seçiciyim 😌']);
      if (q === 'hobi') return TK_HOBI[hash(a.id + ':hb') % TK_HOBI.length];
      const lv = T.live === 'koca' ? 'kocamla yaşıyorum 💍' : T.live === 'tek' ? 'tek başıma yaşıyorum 😏' : T.live === 'ev' ? 'ev arkadaşımla yaşıyorum' : '';
      return `Bu şehirde yaşıyorum${lv ? `, ${lv}` : `, ${a.str ? 'şehrin öbür ucunda 😊' : 'evim yakında 🏡'}`}`;
    }
    function say(text) {
      const T = talk;
      text = String(text || '').trim().slice(0, 200);
      if (!T || T.done || T.wait || !text) return;
      const s = text.toLocaleLowerCase('tr'), q = TQ.find(([, re]) => re.test(s)), ty = (TALK_RE.find(([, re]) => re.test(s)) || [])[0], asked = T.ask;
      T.ask = null;
      if (ty && ty !== 'kaba' && !q) { T.dull = 0; choose(ty, text); return; }
      T.log.push(['me', text]);
      let r, dI;
      if (ty === 'kaba') { r = pickA(TK_RUDE); dI = -(15 + Math.random() * 8); }
      else if (q) { r = tAns(T, q[0]); dI = 3 + Math.random() * 3; T.dull = 0; }
      else if (asked) { const sh = s.length < 3; r = pickA(sh ? HR_SHORT : HR); dI = sh ? -3 : 6 + Math.random() * 5; T.dull = 0; }
      else if (/\?\s*$/.test(s) || /\s(mi|mı|mu|mü)(sin|sun|yim|siniz)?\s*$/.test(s)) { r = pickA(TK_Q); dI = 2; }
      else if (/^(selam|merhaba|hey|sa|slm|mrb)\b/.test(s)) { r = pickA(TK_HI); dI = 2; }
      else { T.dull = (T.dull || 0) + 1; r = T.dull >= 3 ? pickA(TK_DULL) : pickA(TK_NEU); dI = T.dull >= 3 ? -5 : 1 + Math.random() * 2; }
      T.wait = true;
      drawTalk();
      setTimeout(() => {
        if (talk !== T) return;
        T.wait = false;
        T.log.push(['her', r]);
        T.ilgi = Math.max(0, Math.min(100, T.ilgi + (dI > 0 ? dI * TALK_UP : dI)));
        T.bad = dI < 0 ? T.bad + 1 : 0;
        finish(T, dI >= 0, false, ty === 'kaba' ? 1 : .4);
      }, 700);
    }
    // ilgi sonucu: kazan / kaybet, kayıt; bazen o da sana soru sorar (ask = ihtimal)
    function finish(T, ok, invite, ask) {
      if (T.g) {
        const lh = T.log.filter(x => x[0] === 'her' && !x[2]).pop();
        if (lh) { T.a.chatTxt = lh[1]; T.a.chatT = tNow; }
        grpChime(T, ok);
      }
      if (T.ilgi >= 100 || (ok && invite && T.ilgi >= 70)) { T.ilgi = 100; T.done = 'win'; T.log.push(['her', pickA(T.TI.win || TK.win)]); }
      else if (T.ilgi <= 0 || T.bad >= 3) { T.done = 'lose'; T.log.push(['her', pickA(TK.leave)]); }
      else if (ask < 1 && Math.random() < ask) {
        const left = HQ.filter(x => !(T.asked || []).includes(x));
        if (left.length) { T.ask = pickA(left); (T.asked = T.asked || []).push(T.ask); T.log.push(['her', T.ask]); }
      }
      met[T.a.id] = { n: T.named ? first(T.a) : '', ilgi: Math.round(T.ilgi), cool: T.done === 'lose' ? Date.now() + (T.known ? 10 : 20) * 60000 : 0 };
      persist();
      drawTalk();
    }
    function choose(type, text) {
      const T = talk;
      if (!T || T.done || T.wait) return;
      const k = T.a.k;
      T.log.push(['me', text || pickA(T.TI.me ? T.TI.me[type] : TK.me[type])]);
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
      T.ilgi = Math.max(0, Math.min(100, T.ilgi + (ok ? (g[0] + Math.random() * (g[1] - g[0])) * TALK_UP : -(l[0] + Math.random() * (l[1] - l[0])))));
      T.bad = ok ? 0 : T.bad + 1;
      T.wait = true;
      drawTalk();
      setTimeout(() => {
        if (talk !== T) return;
        T.wait = false;
        T.log.push(['her', T.wed && Math.random() < .35 ? pickA(WED_T[ok ? 'ok' : 'bad']) : lineOf(T.st && T.st[ok ? 'ok' : 'bad'][type], TK[ok ? 'ok' : 'bad'][type])]);
        if (ok && !T.named) { T.named = true; T.log.push(['her', TK.name.replace('{ad}', first(T.a))]); }
        finish(T, ok, type === 'davet', ok ? .35 : .15);
      }, 700);
    }
    function endTalk() {
      const T = talk;
      talk = null;
      if (!T) return;
      T.a.hold = false;
      if (T.g) grpEnd(T.g);
      if (T.a.str && T.done === 'lose') strNext(T.a);
    }
    card.onsubmit = e => {
      const f = e.target.closest('[data-sayf]');
      if (!f) return;
      e.preventDefault();
      const i = f.querySelector('input');
      if (talk && !talk.wait && !talk.done && i.value.trim()) { const v = i.value; i.value = ''; say(v); }
    };
    card.onclick = e => {
      const t = e.target;
      if (t.closest('[data-x]') || t.closest('[data-bye]')) { closeCard(); return; }
      const sy = t.closest('[data-say]');
      if (sy) { choose(sy.dataset.say); return; }
      const sg = t.closest('[data-sg]');
      if (sg) { const i = card.querySelector('.ct-say input'); if (i) { i.value = sg.dataset.sg; i.focus(); } return; }
      if (t.closest('[data-sayf]')) return;
      if (t.closest('[data-gohome]') && talk) { const a = talk.a; endTalk(); startEscort([a]); return; }
      const hm = t.closest('[data-home]');
      if (hm) { const a = ag.find(x => x.id === hm.dataset.home); if (a) { release(); startEscort(escort && escort.ph === 'with' && escort.L.includes(a) ? escort.L.slice() : [a]); } return; }
      if (t.closest('[data-chat]')) { persist(); return; }
      if (t.closest('[data-car]')) { enterCar(); return; }
      if (t.closest('[data-escx]')) { closeCard(); stopEscort(true); return; }
      if (t.closest('[data-meet]') && talk) {
        const a = talk.a, pl = a.k === '~' ? null : plOf(a.k);
        e.preventDefault(); endTalk(); meetWith([a]);
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
      // 💌 eve davet: tanıdıklarından 1 ya da 2 kişi seç → 1: sohbet evinde, onun mesajıyla; 2: 👥 grup sohbeti (saat = şehir saati)
      if (t.closest('[data-invite]')) {
        const L = ag.filter(a => !a.str);
        invSel = [];
        card.innerHTML = `<button type="button" class="ct-x" data-x aria-label="Kapat">✕</button><h3>💌 Eve davet et</h3>
          ${L.length ? `<p>${tr('1 kişi: baş başa · 2 kişi: grup sohbeti')}</p><div class="ct-list">${L.map(a => `<a class="ct-row" href="#/sehir" data-inv="${esc(a.id)}">${api.avatar(a.c, 42)}<span class="ct-rin"><b>${esc(a.c.name)}</b><small>${TIER[tierOf(a)].l}</small></span><i class="ct-go">○</i></a>`).join('')}</div>
          <div class="ct-acts"><button type="button" class="btn sm" data-invgo disabled>🏡 ${tr('Davet et')}</button></div>` : '<p>Henüz tanıdığın kimse yok.</p>'}`;
        return;
      }
      const iv = t.closest('[data-inv]');
      if (iv) {
        e.preventDefault();
        const id = iv.dataset.inv;
        invSel = invSel.includes(id) ? invSel.filter(x => x !== id) : [...invSel, id].slice(-2);
        card.querySelectorAll('[data-inv]').forEach(r => { const on = invSel.includes(r.dataset.inv); r.classList.toggle('on', on); r.querySelector('.ct-go').textContent = on ? '✓' : '○'; });
        const go = card.querySelector('[data-invgo]');
        go.disabled = !invSel.length;
        go.textContent = invSel.length === 2 ? `👥 ${tr('İkisini davet et')}` : `🏡 ${tr('Davet et')}`;
        return;
      }
      if (t.closest('[data-invgo]')) {
        e.preventDefault();
        const L = invSel.map(id => ag.find(x => x.id === id)).filter(Boolean);
        if (!L.length) return;
        // 🏡 dışarıdaysan önce yanına gelir, beraber eve yürürsünüz; içerideysen sohbet hemen başlar
        if (!inside) { startEscort(L); return; }
        meetWith(L);
        if (L.length === 2 && api.meetGroup) api.meetGroup(L[0].c, L[1].c, 'benim', '🏡 Senin evin', Math.floor(gm));
        else api.meet(L[0].c, 'benim', '🏡 Senin evin', Math.floor(gm), pickA(INVITE_T), true);
        return;
      }
      const dc = t.closest('[data-direct]');
      if (dc) { e.preventDefault(); const a = ag.find(x => x.id === dc.dataset.direct); if (a) { if ((a.w || {}).nurse) { meetWith([a]); api.ccNurse(a.c, lastH, Math.floor(gm)); } else directChat(a); } return; }
      const g = t.closest('[data-ag]');
      if (g) { e.preventDefault(); const a = ag.find(x => x.id === g.dataset.ag); if (a) openChar(a); return; }
      if (t.closest('[data-noop]')) { e.preventDefault(); return; }
      const tk = t.closest('[data-talk]');
      if (tk) { const a = ag.find(x => x.id === tk.dataset.talk); if (a) wantTalk(a); return; }
      const tx = t.closest('[data-taxi]');
      if (tx) { callTaxi(tx.dataset.taxi); return; }
      const wk = t.closest('[data-walk]');
      if (wk) { const k = wk.dataset.walk, p = PL[k] || wd.FM[k]; walkTo(p.x, p.y, k); follow0 = true; card.hidden = true; return; }
      const gj = t.closest('[data-gjoin]');
      if (gj) { const a = ag.find(x => x.id === gj.dataset.gjoin); if (a) { release(); joinAsk(a); } return; }
      const sz = t.closest('[data-suz]');
      if (sz) {
        const a = ag.find(x => x.id === sz.dataset.suz);
        if (a) { const st = styleOf(a); a.suzTxt = st && SUZ_ST[st] && Math.random() < .5 ? pickA(SUZ_ST[st]) : pickA(SUZ[tierOf(a)] || SUZ.yeni); a.suzT = tNow; openChar(a, true); }
        return;
      }
      const nr = t.closest('[data-near]');
      if (nr) { const a = ag.find(x => x.id === nr.dataset.near); if (a) { me.tries = 0; chase(a, false); card.hidden = true; } return; }
      const c = t.closest('[data-ccc]');
      if (c) { e.preventDefault(); persist(); const ch2 = api.byId(c.dataset.ccc); if (ch2 && c.dataset.ccn) api.ccNurse(ch2, lastH, Math.floor(gm)); else if (ch2) api.textAt(ch2, Math.floor(gm)); }
    };
    root.querySelector('.ct-side').onclick = e => {
      const b = e.target.closest('[data-ct]');
      if (!b) return;
      if (b.dataset.ct === 'phone') openPhone();
      else if (b.dataset.ct === 'car') { if (me.drive) exitCar(); else enterCar(); }
      else if (b.dataset.ct === 'me') follow0 = true;
      else { cam.z *= b.dataset.ct === 'in' ? 1.3 : 1 / 1.3; clampCam(); }
    };
    const spLbl = () => { spBtn.textContent = (SPEEDS.find(s => s[0] === sp) || SPEEDS[0])[1]; };
    spBtn.onclick = () => { const i = SPEEDS.findIndex(s => s[0] === sp); sp = SPEEDS[(i + 1) % SPEEDS.length][0]; spLbl(); persist(); };
    spLbl();
    // 👫 sohbetten döndün: sohbet ettiğin kişi(ler) yanında, peşinden gelir (kartından 🏡 Eve davet et ya da 👋 Vedalaş)
    if (withIds.length && Date.now() - wthAt < 3 * 36e5) {
      const L = withIds.map(id => ag.find(a => a.id === id)).filter(Boolean);
      L.forEach((a, i) => {
        if (a.grp) grpEnd(a.grp);
        a.seek = null; a.phone = null; a.drive = false; a.hold = false; a.esc = true; a.st = 'walk'; a.path = null; a.leaveAt = 0;
        a.x = me.x + (i ? -20 : 20); a.y = me.y + 6;
        if (me.drive) a.inCar = true;
      });
      if (L.length) { escort = { L, ph: 'with', t0: 0, rp: 0 }; L[0].chatTxt = pickA(WITH_HI); L[0].chatT = .001; }
      else withIds = [];
    } else withIds = [];
    { const d = root.querySelector('.ct-dot'); if (d && api.chats) d.hidden = !api.chats().some(x => x.unread); }
    carBtn();
    requestAnimationFrame(n => { t0 = n; requestAnimationFrame(frame); });
  }
  // 📚 Şehir Kitabı tabloları canlı veriden okur
  return { mount, world, BLD, AREAS, EVENTS, STYLE, STYLE_OF, TIER, STOP_R, LAF_R, LAF_I };
})();
