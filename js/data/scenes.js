/*
 * 🎬 Sahneler (alt olaylar): bir açılış olayı sahneyi başlatır, adımlar sohbetin ⚡ şeridinde sırayla / serbestçe yapılır.
 * Olaylar system.js'teki başlıklarla eşleşir (büyük-küçük harf önemsiz). app.js: actStep (motor), actBar (şerit), hafiza kitabı 🎬 Sahneler.
 * mode: 'free' = need kadar adım (sıra serbest) · 'seq' = bütün adımlar sırayla (karışırsa ödül yarım).
 * fin: adımlar dolunca açılan 🏁 bitiş olayı (yoksa ödül hemen) · tag: sahnenin mekân etiketi (başka mekânın olayı bozar)
 * fx / fail: [parametre adı (küçük harf), değişim] · ttl: sahneye dönmeden yazılabilecek olay sayısı · end: tamamlanınca yazılan cümle
 */
window.Stories = window.Stories || {};
Stories.SCENES = [
  { id: 'dus', icon: '🚿', name: 'Birlikte Duş', tag: 'duş', mode: 'free', need: 3, ttl: 4,
    open: 'Soapy Hug', steps: ['Soap Her', 'Wash Me', 'Body Slide', 'Shower Lift', 'Shower Doggy'], fin: 'Shower Cumshot',
    fx: [['şehvet', 10], ['samimiyet', 2], ['güven', 1]], fail: [['güven', -1]],
    desc: 'Köpüklü sarılmayla başlar; üç adım, sonra duşun bitişi.', end: 'Su soğumadan bitirdiniz, buhar hâlâ camda 🚿' },
  { id: 'sauna', icon: '🧖‍♀️', name: 'Sauna Seansı', tag: 'sauna', mode: 'free', need: 2, ttl: 4,
    open: 'Towel Drop', steps: ['Sweaty Hug', 'Sweaty Titjob', 'Bench Hotdogging'], fin: 'Sauna Cumshot',
    fx: [['şehvet', 8], ['samimiyet', 2], ['aşk', 1]], fail: [['güven', -1]],
    desc: 'Havlu düşer; iki terli adım ve saunanın bitişi. Sonra ❄️ Cool Down iyi gider.', end: 'Nefes nefese, ter içinde… şimdi serinleme vakti ❄️' },
  { id: 'bagli', icon: '🔗', name: 'Yatağa Bağlı', tag: '', mode: 'seq', ttl: 4,
    open: 'Tied To Bed', steps: ['Blindfold', 'Feather Tease', 'Ice Cube', 'Hot Wax', 'Edging'], fin: 'Permission to Come',
    fx: [['güven', 3], ['aşk', 2], ['şehvet', 6]], fail: [['güven', -2]],
    desc: 'Bileklerinden bağlanır; göz bağı, tüy, buz, mum ve sınırda tutma, en sonda izin.', end: 'Çözdüğünde bileklerini öptün; sana her şeyiyle güvendi 🔗' },
  { id: 'mesai', icon: '🏢', name: 'Mesai Sonrası', tag: 'ofis', mode: 'seq', ttl: 4,
    open: 'Late Night Overtime', steps: ['Desk Tease', 'Under The Desk', 'On The Desk'], fin: 'Office Cumshot',
    fx: [['şehvet', 10], ['uyarılma', 8], ['samimiyet', 1]], fail: [['güven', -1]],
    desc: 'Ofis boşalınca: masada kışkırtma, masanın altı, masanın üstü ve ofisin bitişi.', end: 'Işıkları kapatıp çıktınız; yarın o masaya bakamayacak 🏢' },
  { id: 'plaj', icon: '🏖️', name: 'Gün Batımı Plajı', tag: 'plaj', mode: 'free', need: 2, ttl: 4,
    open: 'Sunscreen Rub', steps: ['Beach Towel Sex', 'Wave Sex', 'Sunbed Cowgirl', 'Sunset Missionary'], fin: 'Beach Cumshot',
    fx: [['aşk', 2], ['samimiyet', 2], ['şehvet', 6]], fail: [['güven', -1]],
    desc: 'Güneş kremiyle başlar; kumda, dalgada ya da şezlongda iki adım, sonra plajın bitişi.', end: 'Güneş denize gömülürken sarıldınız 🌅' },
  { id: 'gunah', icon: '⛪', name: 'Günah Çıkarma', tag: 'kilise', mode: 'seq', ttl: 4,
    open: 'Confession Lap', steps: ['Rosary Bead Tease', 'Kneeler Doggy', 'Altar Missionary'],
    fx: [['güven', 4], ['aşk', 2], ['şehvet', 4]], fail: [['güven', -2]],
    desc: 'Günah çıkarma odasında kucağında başlar; tespih, diz çökme yeri ve sunak. Bitiş yok, ödül güven ağırlıklı.', end: 'Bütün günahlarını sana söyledi; artık sırrınız ortak ⛪' },
  { id: 'vip', icon: '🎰', name: 'VIP Masası', tag: 'gazino', mode: 'seq', ttl: 4,
    open: 'Gazino Bunny – Kokteyl Servisi', steps: ['Gazino Bunny – Rulet Masası', 'Gazino Bunny – Blackjack', 'Gazino Bunny – Strip Poker'], fin: 'Gazino Bunny – Sahne Arkası',
    fx: [['şehvet', 8], ['samimiyet', 2], ['aşk', 1]], fail: [['güven', -1]],
    desc: 'Bunny kokteyl getirir; rulet, blackjack, strip poker ve sahne arkası.', end: 'Kasa da gece de senin oldu 🎰' }
];
