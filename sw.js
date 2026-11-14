/*
 * Amor Stories - Service worker (ÃƒÂ§evrimdÃ„Â±Ã…Å¸Ã„Â± ÃƒÂ§alÃ„Â±Ã…Å¸ma)
 * Uygulama dosyalarÃ„Â± kurulumda ÃƒÂ¶nbelleÃ„Å¸e alÃ„Â±nÃ„Â±r; aÃƒÂ§Ã„Â±lÃ„Â±Ã…Å¸ta ÃƒÂ¶nbellekten gelir,
 * arka planda gÃƒÂ¼ncellenir (stale-while-revalidate). FotoÃ„Å¸raflar ilk gÃƒÂ¶rÃƒÂ¼ldÃƒÂ¼klerinde saklanÃ„Â±r.
 * Yeni sÃƒÂ¼rÃƒÂ¼m yayÃ„Â±nlarken VERSION'Ã„Â± artÃ„Â±r, eski ÃƒÂ¶nbellek silinir.
 */
const VERSION = 'amor-stories-v833';
const CORE = [
  './', './index.html', './manifest.json', './css/style.css', './css/stories.css', './css/dark.css',
  './js/store.js', './js/i18n.js', './js/data/i18n-en.js', './js/data/i18n-en-ads.js', './js/data/i18n-en-ads2.js', './js/data/i18n-en-ads3.js', './js/data/i18n-en-labels.js', './js/data/i18n-en-ui2.js', './js/data/i18n-en-sites.js', './js/data/i18n-en-books.js', './js/data/i18n-en-misc.js', './js/data/i18n-en-events.js', './js/data/i18n-en-bot.js', './js/data/i18n-en-chat.js', './js/data/bot-en.js','./js/data/traits.js', './js/data/amor-pools.js', './js/data/pools.js', './js/data/world.js', './js/data/photos.js', './js/data/mod-photos.js', './js/data/mods.js', './js/data/themes.js', './js/data/me-lines.js', './js/data/user-lines.js', './js/data/fant-interrupts.js','./js/data/places.js', './js/data/monia.js', './js/data/effects.js', './js/data/emojis.js', './js/data/bot-rules.js', './js/data/clothes.js', './js/data/fiery.js','./js/bot.js', './js/gallery.js', './js/music.js','./js/data/system.js', './js/app.js',
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
  // yerel dÃƒÂ¼zenleme (yerel-duzenleme.bat, localhost): ÃƒÂ¶nbellek yok, her Ã…Å¸ey diskten taze gelir
  if (/^(localhost|127\.0\.0\.1)$/.test(location.hostname)) return;
  if (url.pathname.includes('/tools/') || url.pathname.startsWith('/api/')) return;
  // Ã°Å¸Å½Â§ Music/ mp3'leri: tarayÃ„Â±cÃ„Â±nÃ„Â±n kendi ÃƒÂ¶nbelleÃ„Å¸i (parÃƒÂ§a parÃƒÂ§a istenir, burada saklanmaz)
  if (url.pathname.includes('/Music/')) return;

  // Ã°Å¸â€“Â¼Ã¯Â¸Â Lara Gallery (js/gallery.js): albums.json her zaman aÃ„Å¸dan; fotoÃ„Å¸raflarÃ„Â±n adÃ„Â± deÃ„Å¸iÃ…Å¸mez, ÃƒÂ¶nce ÃƒÂ¶nbellek
  const gallery = url.pathname.includes('/lara-gallery/');
  if (gallery && url.pathname.endsWith('.json')) return;

  // Karakter ve mod fotoÃ„Å¸raflarÃ„Â±: ÃƒÂ¶nce ÃƒÂ¶nbellek
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
