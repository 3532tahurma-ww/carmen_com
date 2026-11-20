/*
 * Amor Stories - Service worker (ÃƒÆ’Ã‚Â§evrimdÃƒâ€žÃ‚Â±Ãƒâ€¦Ã…Â¸Ãƒâ€žÃ‚Â± ÃƒÆ’Ã‚Â§alÃƒâ€žÃ‚Â±Ãƒâ€¦Ã…Â¸ma)
 * Uygulama dosyalarÃƒâ€žÃ‚Â± kurulumda ÃƒÆ’Ã‚Â¶nbelleÃƒâ€žÃ…Â¸e alÃƒâ€žÃ‚Â±nÃƒâ€žÃ‚Â±r; aÃƒÆ’Ã‚Â§Ãƒâ€žÃ‚Â±lÃƒâ€žÃ‚Â±Ãƒâ€¦Ã…Â¸ta ÃƒÆ’Ã‚Â¶nbellekten gelir,
 * arka planda gÃƒÆ’Ã‚Â¼ncellenir (stale-while-revalidate). FotoÃƒâ€žÃ…Â¸raflar ilk gÃƒÆ’Ã‚Â¶rÃƒÆ’Ã‚Â¼ldÃƒÆ’Ã‚Â¼klerinde saklanÃƒâ€žÃ‚Â±r.
 * Yeni sÃƒÆ’Ã‚Â¼rÃƒÆ’Ã‚Â¼m yayÃƒâ€žÃ‚Â±nlarken VERSION'Ãƒâ€žÃ‚Â± artÃƒâ€žÃ‚Â±r, eski ÃƒÆ’Ã‚Â¶nbellek silinir.
 */
const VERSION = 'amor-stories-v1094';
const CORE = [
  './', './index.html', './manifest.json', './css/style.css', './css/stories.css', './css/dark.css', './css/city.css', './js/city.js',
  './js/store.js', './js/i18n.js', './js/data/i18n-en.js', './js/data/i18n-en-ads.js', './js/data/i18n-en-ads2.js', './js/data/i18n-en-ads3.js', './js/data/i18n-en-labels.js', './js/data/i18n-en-ui2.js', './js/data/i18n-en-sites.js', './js/data/i18n-en-books.js', './js/data/i18n-en-misc.js', './js/data/i18n-en-events.js', './js/data/i18n-en-stories.js', './js/data/i18n-en-bot.js', './js/data/i18n-en-chat.js', './js/data/bot-en.js','./js/data/traits.js', './js/data/amor-pools.js', './js/data/pools.js', './js/data/world.js', './js/data/photos.js', './js/data/mod-photos.js', './js/data/mods.js', './js/data/themes.js', './js/data/me-lines.js', './js/data/photo-texts.js', './js/data/user-lines.js', './js/data/fant-interrupts.js','./js/data/places.js', './js/data/scenes.js', './js/data/episodes.js','./js/data/monia.js', './js/data/subcats.js', './js/data/effects.js', './js/data/emojis.js', './js/data/bot-rules.js', './js/data/clothes.js', './js/data/fiery.js','./js/bot.js', './js/gallery.js', './js/music.js','./js/data/system.js', './js/app.js',
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
  // yerel dÃƒÆ’Ã‚Â¼zenleme (yerel-duzenleme.bat, localhost): ÃƒÆ’Ã‚Â¶nbellek yok, her Ãƒâ€¦Ã…Â¸ey diskten taze gelir
  if (/^(localhost|127\.0\.0\.1)$/.test(location.hostname)) return;
  if (url.pathname.includes('/tools/') || url.pathname.startsWith('/api/')) return;
  // ÃƒÂ°Ã…Â¸Ã…Â½Ã‚Â§ Music/ mp3'leri: tarayÃƒâ€žÃ‚Â±cÃƒâ€žÃ‚Â±nÃƒâ€žÃ‚Â±n kendi ÃƒÆ’Ã‚Â¶nbelleÃƒâ€žÃ…Â¸i (parÃƒÆ’Ã‚Â§a parÃƒÆ’Ã‚Â§a istenir, burada saklanmaz)
  if (url.pathname.includes('/Music/')) return;

  // ÃƒÂ°Ã…Â¸Ã¢â‚¬â€œÃ‚Â¼ÃƒÂ¯Ã‚Â¸Ã‚Â Lara Gallery (js/gallery.js): albums.json her zaman aÃƒâ€žÃ…Â¸dan; fotoÃƒâ€žÃ…Â¸raflarÃƒâ€žÃ‚Â±n adÃƒâ€žÃ‚Â± deÃƒâ€žÃ…Â¸iÃƒâ€¦Ã…Â¸mez, ÃƒÆ’Ã‚Â¶nce ÃƒÆ’Ã‚Â¶nbellek
  const gallery = url.pathname.includes('/lara-gallery/');
  if (gallery && url.pathname.endsWith('.json')) return;

  // Karakter ve mod fotoÃƒâ€žÃ…Â¸raflarÃƒâ€žÃ‚Â±: ÃƒÆ’Ã‚Â¶nce ÃƒÆ’Ã‚Â¶nbellek
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
