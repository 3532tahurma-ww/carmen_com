/*
 * Amor Stories - Service worker (ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â§evrimdÃƒÆ’Ã¢â‚¬Å¾Ãƒâ€šÃ‚Â±ÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€¦Ã‚Â¸ÃƒÆ’Ã¢â‚¬Å¾Ãƒâ€šÃ‚Â± ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â§alÃƒÆ’Ã¢â‚¬Å¾Ãƒâ€šÃ‚Â±ÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€¦Ã‚Â¸ma)
 * Uygulama dosyalarÃƒÆ’Ã¢â‚¬Å¾Ãƒâ€šÃ‚Â± kurulumda ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¶nbelleÃƒÆ’Ã¢â‚¬Å¾Ãƒâ€¦Ã‚Â¸e alÃƒÆ’Ã¢â‚¬Å¾Ãƒâ€šÃ‚Â±nÃƒÆ’Ã¢â‚¬Å¾Ãƒâ€šÃ‚Â±r; aÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â§ÃƒÆ’Ã¢â‚¬Å¾Ãƒâ€šÃ‚Â±lÃƒÆ’Ã¢â‚¬Å¾Ãƒâ€šÃ‚Â±ÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€¦Ã‚Â¸ta ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¶nbellekten gelir,
 * arka planda gÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¼ncellenir (stale-while-revalidate). FotoÃƒÆ’Ã¢â‚¬Å¾Ãƒâ€¦Ã‚Â¸raflar ilk gÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¶rÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¼ldÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¼klerinde saklanÃƒÆ’Ã¢â‚¬Å¾Ãƒâ€šÃ‚Â±r.
 * Yeni sÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¼rÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¼m yayÃƒÆ’Ã¢â‚¬Å¾Ãƒâ€šÃ‚Â±nlarken VERSION'ÃƒÆ’Ã¢â‚¬Å¾Ãƒâ€šÃ‚Â± artÃƒÆ’Ã¢â‚¬Å¾Ãƒâ€šÃ‚Â±r, eski ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¶nbellek silinir.
 */
const VERSION = 'amor-stories-v1168';
const CORE = [
  './', './index.html', './manifest.json', './css/style.css', './css/stories.css', './css/dark.css', './css/city.css', './js/city.js',
  './js/store.js', './js/i18n.js', './js/data/i18n-en.js', './js/data/i18n-en-ads.js', './js/data/i18n-en-ads2.js', './js/data/i18n-en-ads3.js', './js/data/i18n-en-labels.js', './js/data/i18n-en-ui2.js', './js/data/i18n-en-sites.js', './js/data/i18n-en-books.js', './js/data/i18n-en-mags.js', './js/data/i18n-en-misc.js', './js/data/i18n-en-events.js', './js/data/i18n-en-stories.js', './js/data/i18n-en-bot.js', './js/data/i18n-en-chat.js', './js/data/i18n-en-c3.js', './js/data/c3.js', './js/data/bot-en.js','./js/data/traits.js', './js/data/amor-pools.js', './js/data/pools.js', './js/data/world.js', './js/data/photos.js', './js/data/mod-photos.js', './js/data/mods.js', './js/data/themes.js', './js/data/me-lines.js', './js/data/photo-texts.js', './js/data/life.js', './js/data/user-lines.js', './js/data/fant-interrupts.js','./js/data/places.js', './js/data/scenes.js', './js/data/episodes.js', './js/data/mags.js', './js/data/flix.js','./js/data/monia.js', './js/data/subcats.js', './js/data/effects.js', './js/data/emojis.js', './js/data/bot-rules.js', './js/data/clothes.js', './js/data/fiery.js','./js/bot.js', './js/gallery.js', './js/music.js','./js/data/system.js', './js/app.js',
  './icons/icon-192.png', './icons/icon-512.png', './icons/apple-touch-icon.png'
];
const IMG_CACHE = 'amor-stories-img';

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(CORE)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== VERSION && k !== IMG_CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  // yerel dÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¼zenleme (yerel-duzenleme.bat, localhost): ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¶nbellek yok, her ÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€¦Ã‚Â¸ey diskten taze gelir
  if (/^(localhost|127\.0\.0\.1)$/.test(location.hostname)) return;
  if (url.pathname.includes('/tools/') || url.pathname.startsWith('/api/')) return;
  // ÃƒÆ’Ã‚Â°Ãƒâ€¦Ã‚Â¸Ãƒâ€¦Ã‚Â½Ãƒâ€šÃ‚Â§ Music/ mp3'leri: tarayÃƒÆ’Ã¢â‚¬Å¾Ãƒâ€šÃ‚Â±cÃƒÆ’Ã¢â‚¬Å¾Ãƒâ€šÃ‚Â±nÃƒÆ’Ã¢â‚¬Å¾Ãƒâ€šÃ‚Â±n kendi ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¶nbelleÃƒÆ’Ã¢â‚¬Å¾Ãƒâ€¦Ã‚Â¸i (parÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â§a parÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â§a istenir, burada saklanmaz)
  if (url.pathname.includes('/Music/')) return;

  // ÃƒÆ’Ã‚Â°Ãƒâ€¦Ã‚Â¸ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Å“Ãƒâ€šÃ‚Â¼ÃƒÆ’Ã‚Â¯Ãƒâ€šÃ‚Â¸Ãƒâ€šÃ‚Â Lara Gallery (js/gallery.js): albums.json her zaman aÃƒÆ’Ã¢â‚¬Å¾Ãƒâ€¦Ã‚Â¸dan; fotoÃƒÆ’Ã¢â‚¬Å¾Ãƒâ€¦Ã‚Â¸raflarÃƒÆ’Ã¢â‚¬Å¾Ãƒâ€šÃ‚Â±n adÃƒÆ’Ã¢â‚¬Å¾Ãƒâ€šÃ‚Â± deÃƒÆ’Ã¢â‚¬Å¾Ãƒâ€¦Ã‚Â¸iÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€¦Ã‚Â¸mez, ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¶nce ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¶nbellek
  const gallery = url.pathname.includes('/lara-gallery/');
  if (gallery && url.pathname.endsWith('.json')) return;

  // Karakter ve mod fotoÃƒÆ’Ã¢â‚¬Å¾Ãƒâ€¦Ã‚Â¸raflarÃƒÆ’Ã¢â‚¬Å¾Ãƒâ€šÃ‚Â±: ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¶nce ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¶nbellek
  if (gallery || (url.origin === location.origin && (url.pathname.includes('/characters/') || url.pathname.includes('/mods/')))) {
    e.respondWith(caches.open(IMG_CACHE).then(async cache => {
      const hit = await cache.match(req);
      if (hit) return hit;
      const res = await fetch(req);
      if (res.ok) cache.put(req, res.clone());
      return res;
    }));
    return;
  }

  if (url.origin === location.origin || url.host.endsWith('googleapis.com') || url.host.endsWith('gstatic.com')) {
    e.respondWith(caches.open(VERSION).then(async cache => {
      const hit = await cache.match(req, { ignoreSearch: true });
      const net = fetch(req).then(res => {
        if (res.ok || res.type === 'opaque') cache.put(req, res.clone());
        return res;
      }).catch(() => hit || (req.mode === 'navigate' ? cache.match('./index.html') : undefined));
      return hit || net;
    }));
  }
});
