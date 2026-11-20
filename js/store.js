/*
 * Amor Stories - Kalıcı veri (localStorage)
 * Sunucu yok: her şey kullanıcının tarayıcısında saklanır.
 *
 * user:       { name, age, city, photo }
 * characters: [{ id, name, gender, age, city, job, zodiac, bio, traits: [], about,
 *                photo, album: [], colors: [renk1, renk2], created }]
 *   photo / album: data URL (yüklenen fotoğraf) ya da dosya yolu
 * threads:    [{ id, charId, title, created, opened }]  bir karakterin birden çok adlı sohbeti olabilir
 * chats:      sohbet id -> [{ id, from: 'me' | 'her' | 'sys', text, ts,
 *                             type?: 'photo', src?, reply?: mesaj id, react?: emoji,
 *                             effect?: efekt id ya da 'none' (yoksa anahtar kelimeden gelir) }]
 * side:       sohbet id -> şu an kim yazıyor ('me' | 'her')
 * turns:      sohbet id -> her mesajdan sonra taraf otomatik değişsin mi
 * pinned:     mesaj listesinde sabitlenen karakter id'leri (en fazla 4)
 * monia:      Monia Paneli senaryoları ve kalıp olayları (aşağıda)
 * accounts:   [{ id, user, threads, chats, side, turns, pinned }] diğer hesaplar; aktif hesabın verisi üst seviyededir (accId).
 *             Karakterler, Monia ve ayarlar tüm hesaplarda ortak.
 */
window.Stories = window.Stories || {};

Stories.Store = (() => {
  const KEY = 'amor-stories:v2';
  const defaults = () => ({
    user: { name: '', age: '', city: '', photo: '' },
    characters: [],
    threads: [],
    chats: {},
    side: {},
    turns: {},
    pinned: [],
    keywords: [],  // [{ id, word, effect }] sayılan anahtar kelimeler; effect varsa geçtiği mesaja uygulanır
    // Monia Paneli: events = kendi kalıp olayların [{ id, title, text, cat }],
    // scenarios = [{ id, title, desc, cover (resim), chars: [], part, day, season, timeNote, place, placeName, placeIcon, events: [{ id, title, text }], created }]
    // places = eklediğin mekanlar [{ id, icon, name, tags: [etiket id], hints: [] }], groups = kendi etiketlerin [{ id, icon, name }]
    // events: { title, cat, text, steps: [], opener, starter, tones: [], note, part, when, place (olayın kendi zamanı / mekanı), base? (değiştirdiğin hazır olayın id'si) }
    monia: { events: [], scenarios: [], places: [], groups: [] },
    accId: '',
    accounts: []
  });
  // Hesaba özel alanlar (geri kalanı ortak)
  const ACC_KEYS = ['user', 'threads', 'chats', 'side', 'turns', 'pinned'];
  const accBlank = () => { const d = defaults(); return ACC_KEYS.reduce((o, k) => (o[k] = d[k], o), {}); };

  const read = k => { try { return JSON.parse(localStorage.getItem(k)); } catch (e) { return null; } };

  const uid = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 7);

  // Eski sürüm: karakter başına tek sohbet (chats[karakter id]) -> "Sohbet 1" adlı sohbet kaydı
  function migrate(s) {
    if (s.threads) return s;
    s.threads = [];
    const map = {};
    Object.keys(s.chats || {}).forEach(cid => {
      const msgs = s.chats[cid];
      delete s.chats[cid];
      if (!msgs.length || !s.characters.some(c => c.id === cid)) return;
      const id = map[cid] = uid();
      s.threads.push({ id, charId: cid, title: 'Sohbet 1', created: msgs[0].ts, opened: 0 });
      s.chats[id] = msgs;
    });
    ['side', 'turns'].forEach(k => {
      const old = s[k] || {};
      s[k] = {};
      Object.keys(old).forEach(cid => { if (map[cid]) s[k][map[cid]] = old[cid]; });
    });
    return s;
  }

  // "yeni-set" modunun adı "carmen" oldu: kayıtlı karakterlerdeki mod/set adları ve resim yolları çevrilir
  const renameMod = data => {
    if (!data) return data;
    const s = JSON.stringify(data);
    return s.includes('yeni-set') ? JSON.parse(s.split('mods/yeni-set/').join('mods/carmen/')
      .split('"yeni-set:').join('"carmen:').split('"mod":"yeni-set"').join('"mod":"carmen"')) : data;
  };
  /* ⚡ Bölünmüş kayıt: aktif hesabın sohbetleri ayrı anahtarlarda (KEY:c:<sohbet id>), ana kayıtta chats yok + __split listesi.
   * Kayıtta sadece metni değişen anahtarlar yazılır (written: anahtar → son yazılan metin).
   * __split yoksa (eski format / eski sürüm yazdı) ayrı anahtarlardaki mesajlar id'ye göre birleştirilir: veri kaybolmaz. */
  const CPRE = KEY + ':c:';
  // büyük ve sohbette nadiren değişen alanlar da ayrı anahtarda (KEY:p:<alan>); ana kayıtta null
  const PARTS = ['monia'], PPRE = KEY + ':p:';
  const written = new Map();
  const chatKeys = () => { const a = []; try { for (let i = 0; i < localStorage.length; i++) { const k = localStorage.key(i); if (k && k.startsWith(CPRE)) a.push(k); } } catch (e) {} return a; };
  function readSplit() {
    let raw = null;
    try { raw = localStorage.getItem(KEY); } catch (e) {}
    let data = null;
    try { data = JSON.parse(raw); } catch (e) {}
    if (!data) return data;
    const split = Array.isArray(data.__split);
    data.chats = data.chats || {};
    chatKeys().forEach(k => {
      const id = k.slice(CPRE.length);
      let s = null;
      try { s = localStorage.getItem(k); } catch (e) {}
      const msgs = (() => { try { return JSON.parse(s); } catch (e) { return null; } })();
      if (!Array.isArray(msgs)) return;
      if (split) { if (data.__split.includes(id)) { data.chats[id] = msgs; written.set(k, s); } return; }
      // eski format: satır içi mesajlarla birleştir (aynı id bir kez, zamana göre)
      const have = data.chats[id] || [], ids = new Set(have.map(m => m.id));
      data.chats[id] = [...have, ...msgs.filter(m => !ids.has(m.id))].sort((a, b) => (a.ts || 0) - (b.ts || 0));
    });
    if (split) {
      written.set(KEY, raw);
      PARTS.forEach(p => {
        if (data[p] != null) return;   // eski format alanı ana kayıtta
        let s = null;
        try { s = localStorage.getItem(PPRE + p); } catch (e) {}
        try { const v = JSON.parse(s); if (v != null) { data[p] = v; written.set(PPRE + p, s); } else delete data[p]; } catch (e) { delete data[p]; }
      });
    }
    delete data.__split;
    return data;
  }
  const fill = data => migrate(Object.assign(defaults(), renameMod(data), data && !data.threads ? { threads: undefined } : {}));
  let state = fill(readSplit());

  // ❤️/💔 en fazla 7 sevdiği / 3 sevmediği olay; fazlası kayıtta eskiden başlayarak atılır
  const FEEL_MAX = { likes: 7, dislikes: 3 };
  const capFeels = () => (state.characters || []).forEach(c => Object.keys(FEEL_MAX).forEach(k => {
    if (Array.isArray(c[k]) && c[k].length > FEEL_MAX[k]) c[k] = c[k].slice(-FEEL_MAX[k]);
  }));

  // Kota dolarsa false döner
  function save() {
    capFeels();
    try {
      const chats = state.chats || {}, ids = Object.keys(chats), keep = new Set([KEY]);
      // önce sohbetler, sonra ana kayıt (yarıda kota dolarsa ana kayıt eski listeyi gösterir)
      ids.forEach(id => {
        const k = CPRE + id, s = JSON.stringify(chats[id] || []);
        keep.add(k);
        if (written.get(k) !== s) { localStorage.setItem(k, s); written.set(k, s); }
      });
      const nul = {};
      PARTS.forEach(p => {
        const k = PPRE + p, s = JSON.stringify(state[p] == null ? null : state[p]);
        keep.add(k); nul[p] = null;
        if (written.get(k) !== s) { localStorage.setItem(k, s); written.set(k, s); }
      });
      const main = JSON.stringify(Object.assign({}, state, nul, { chats: {}, __split: ids }));
      if (written.get(KEY) !== main) { localStorage.setItem(KEY, main); written.set(KEY, main); }
      // silinen sohbetlerin anahtarları
      [...written.keys()].forEach(k => { if (!keep.has(k)) { localStorage.removeItem(k); written.delete(k); } });
      if (!save.swept) { save.swept = true; chatKeys().forEach(k => { if (!keep.has(k)) localStorage.removeItem(k); }); }
      return true;
    } catch (e) { return false; }
  }

  function replace(data) {
    state = fill(data);
    return save();
  }

  function reset() {
    const user = state.user, accId = state.accId;
    state = defaults();
    state.user = user;
    state.accId = accId;
    save();
  }

  /* 👥 Hesaplar: liste aktif hesap dahil [{ id, user, active }]; geçince aktif hesabın alanları accounts'a,
   * seçilenin alanları üst seviyeye taşınır */
  const ensureId = () => { if (!state.accId) state.accId = uid(); };
  function accounts() {
    ensureId();
    return [{ id: state.accId, user: state.user, active: true }, ...state.accounts.map(a => ({ id: a.id, user: a.user, active: false }))];
  }
  function stash() {
    ensureId();
    const cur = { id: state.accId };
    ACC_KEYS.forEach(k => cur[k] = state[k]);
    state.accounts.push(cur);
  }
  function load(acc) {
    state.accounts = state.accounts.filter(a => a.id !== acc.id);
    ACC_KEYS.forEach(k => state[k] = acc[k] != null ? acc[k] : accBlank()[k]);
    state.accId = acc.id;
  }
  function switchAccount(id) {
    const acc = state.accounts.find(a => a.id === id);
    if (!acc) return false;
    stash(); load(acc);
    return save();
  }
  function addAccount(user) {
    stash();
    load(Object.assign(accBlank(), { id: uid(), user }));
    return save();
  }
  // Aktif hesap silinirse sıradaki hesaba geçilir; tek hesapsa boş yeni hesap açılır (adı olmadığı için kayıt ekranı gelir)
  function removeAccount(id) {
    if (id === state.accId) load(state.accounts[0] || Object.assign(accBlank(), { id: uid() }));
    else state.accounts = state.accounts.filter(a => a.id !== id);
    return save();
  }

  return { get state() { return state; }, save, replace, reset, uid, accounts, switchAccount, addAccount, removeAccount };
})();
