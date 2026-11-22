/* 🚀 Carmen 3.0 verisi (Stories.C3): mevsimler, hava, haftalık görevler, rozetler, 🔎 arama grupları, 📚 Carmen 3.0 Kitabı metinleri.
 * Mantık js/app.js'teki "🚀 Carmen 3.0" bölümünde; veri burada durur (app.js'i küçültmenin ilk adımı: yeni sistemin verisi ayrı dosyada). */
Stories.C3 = {
  // [id, emoji, ad, aylar (0–11)]
  SEASONS: [['kis', '❄️', 'Kış', [11, 0, 1]], ['ilk', '🌸', 'İlkbahar', [2, 3, 4]], ['yaz', '☀️', 'Yaz mevsimi', [5, 6, 7]], ['son', '🍂', 'Sonbahar', [8, 9, 10]]],
  // hava türü → [emoji, ad]
  WX: { sun: ['☀️', 'Güneşli'], hot: ['🥵', 'Sıcak'], cloud: ['⛅', 'Parçalı bulutlu'], rain: ['🌧️', 'Yağmurlu'], storm: ['⛈️', 'Fırtına'], snow: ['❄️', 'Karlı'], fog: ['🌫️', 'Sisli'] },
  // mevsime göre havanın ağırlığı (gün başına bir kez, tarihe göre sabit seçilir)
  WX_W: {
    kis: { sun: 2, cloud: 3, rain: 2, storm: 1, snow: 3, fog: 2 },
    ilk: { sun: 4, cloud: 3, rain: 3, storm: 1, fog: 1 },
    yaz: { sun: 6, hot: 4, cloud: 2, storm: 1 },
    son: { sun: 3, cloud: 4, rain: 3, storm: 1, fog: 2 }
  },
  // mevsim sıcaklık aralığı (°C)
  TEMP: { kis: [-2, 9], ilk: [11, 21], yaz: [24, 36], son: [9, 20] },
  // ☀️ Günün kızı: havaya göre onun ağzından cümle
  WX_SAY: {
    sun: ['Hava çok güzel, dışarı çıkalım mı? ☀️', 'Güneşte yanmaya hazırım, kremimi sürer misin? 😏', 'Böyle havada evde durulmaz'],
    hot: ['Çok sıcak… üstümde neredeyse hiçbir şey yok 🥵', 'Buz gibi bir şey içelim mi? Ya da duş 😈', 'Klima bozuk, terliyorum…'],
    cloud: ['Kapalı bir gün, battaniye altı havası ⛅', 'Gri gökyüzü, sıcak bir kahve ve sen', 'Ne yağıyor ne açıyor… bari sen gel'],
    rain: ['Yağmur camda… içeride ne yapsak? 🌧️', 'Şemsiyemi unuttum, sırılsıklam oldum', 'Yağmurda öpüşmek ister misin?'],
    storm: ['Gök gürültüsünden korkuyorum, yanıma gelir misin? ⛈️', 'Elektrikler gidebilir… mum yakalım mı?', 'Bu gece dışarı çıkılmaz, bende kal'],
    snow: ['Kar yağıyor! Isıt beni ❄️', 'Kardan adam mı yapalım, yoksa yatakta mı kalalım?', 'Parmaklarım dondu, ellerini ver'],
    fog: ['Sis her yeri kapladı, kimse bizi görmez 🌫️', 'Sisli sabahlar gizemli, değil mi?', 'Sahil sisten görünmüyor… yürüyelim mi?']
  },
  // 📰 bugünün manşeti (havaya göre)
  WX_NEWS: {
    sun: 'Güneşli gün: sahil ve parklar dolu', hot: 'Sıcak alarmı: havuzlar ve plaj kalabalık', cloud: 'Kapalı hava: kafeler ve sinema doldu',
    rain: 'Sağanak: şehir kapalı mekânlara sığındı', storm: 'Fırtına uyarısı: dışarı çıkmayın, evde kalın', snow: 'Kar yağışı: şehir beyaza büründü', fog: 'Yoğun sis: sahil yolu görünmüyor'
  },
  // 🎟️ haftalık görevler: [id, emoji, başlık, açıklama, ölçü, hedef, ödül ₺]; her hafta tarihe göre 3 tanesi seçilir.
  // ölçü: msg = yazdığın mesaj · ev = farklı olay · site = site ziyareti · shift = şehir vardiyası · page = kitap sayfası · zone = semt değişimi · meet = şehir sohbeti · char = karakter
  WEEKLY: [
    ['w_msg50', '💬', 'Sohbet haftası', '50 mesaj yaz', 'msg', 50, 1500],
    ['w_msg150', '✉️', 'Dilin çözüldü', '150 mesaj yaz', 'msg', 150, 3500],
    ['w_ev5', '🎬', 'Yeni deneyimler', '5 yeni olay yaşa', 'ev', 5, 2000],
    ['w_ev12', '🔥', 'Keşif haftası', '12 yeni olay yaşa', 'ev', 12, 4000],
    ['w_site10', '🌐', 'Sörfçü', '10 kez bir siteye gir', 'site', 10, 1200],
    ['w_shift3', '💼', 'Mesai', 'Şehirde 3 vardiya yap', 'shift', 3, 2500],
    ['w_page15', '📚', 'Okur', '15 kitap sayfası oku', 'page', 15, 1500],
    ['w_zone6', '🗺️', 'Semt semt', 'Şehirde 6 kez semt değiştir', 'zone', 6, 1200],
    ['w_meet2', '🏙️', 'Sokakta tanıştık', 'Şehirde 2 sohbete geç', 'meet', 2, 2000],
    ['w_char1', '👩', 'Yeni yüz', 'Bir karakter daha edin', 'char', 1, 1500]
  ],
  // 🏅 3.0 rozetleri: [emoji, ad, açıklama, ölçü, hedef] (ölçü app.js c3Stats())
  BADGES: [
    ['📅', 'Müdavim', 'Carmen\'i 7 farklı gün aç', 'days', 7],
    ['⛅', 'Meteorolog', '4 farklı hava gör', 'wx', 4],
    ['🗺️', 'Semt semt', 'Şehrin 4 semtini gez', 'zones', 4],
    ['💼', 'Mesai', 'Şehirde 5 vardiya yap', 'shifts', 5],
    ['🎂', 'Doğum günü', 'Bir karakterinin doğum gününde Carmen\'de ol', 'bdays', 1],
    ['📚', 'Kitap kurdu', '30 kitap sayfası oku', 'pages', 30],
    ['🎟️', 'Haftanın yıldızı', 'Bir haftanın 3 görevini de bitir', 'weeks', 1],
    ['🔎', 'Arayan bulur', 'Global aramayı kullan', 'search', 1]
  ],
  // 💞 ilişki aşamaları (🌟 profil özeti, 📇 Rehber): [emoji, ad, en az mesaj, en az "ilk" sayısı, en az gün]
  ARC: [['🌱', 'Tanışma', 0, 0, 0], ['😊', 'Arkadaşlık', 10, 0, 0], ['💕', 'Flört', 30, 1, 0], ['❤️', 'İlişki', 80, 3, 2], ['💞', 'Derin bağ', 200, 5, 7]],
  // 🕸️ ilişki ağı (#/ag): karakterler arası ilişki türleri; arkadas = c.knows (kıskançlık / söylenti / grup buna bakar)
  REL3: { arkadas: ['🤝', 'Arkadaş'], ev: ['🏠', 'Ev arkadaşı'], akraba: ['👪', 'Akraba'], rakip: ['⚔️', 'Rakip'], eski: ['💔', 'Eski sevgili'] },
  // ✨ hayaller: [id, emoji, hayal, maliyet ₺]; her karakterin bir hayali (karaktere göre sabit), 💝 Destekle ile ilerler
  DREAMS: [['tatil', '🏝️', 'Deniz kenarında bir hafta tatil', 3000], ['ev', '🏡', 'Kendine ait bir ev', 6000], ['kopek', '🐶', 'Bir köpek sahiplenmek', 1500], ['dans', '💃', 'Salsa kursuna yazılmak', 1200],
    ['araba', '🚗', 'Kendi arabası', 5000], ['paris', '✈️', 'Paris\'i görmek', 4000], ['atolye', '🎨', 'Küçük bir atölye açmak', 3500], ['konser', '🎤', 'Sevdiği grubun konserine gitmek', 800],
    ['ehliyet', '🪪', 'Ehliyet almak', 1800], ['diploma', '🎓', 'Yarım kalan okulunu bitirmek', 2500]],
  // ⏩ sohbette Sabaha geç notunun ikinci satırı ({o} = karakterin adı)
  SKIP: ['😴 Gece boyunca {o} sana sarılıp uyudu', '☕ Kahve kokusu odaya doluyor, {o} çoktan uyanmış', '🌤️ Güneş perdeden süzülüyor, {o} hâlâ uykulu', '🍳 {o} mutfakta kahvaltı hazırlıyor', '📱 {o} sabah ilk iş sana bakıyor'],
  // ⌨️ yazma hızı kişiliğe göre (1 = normal; büyük = yavaş)
  TYPE_K: { 'Utangaç': 1.3, 'Sakin': 1.25, 'Gergin': 1.15, 'Romantik': 1.1, 'Neşeli': .85, 'Asi': .9, 'Özgüvenli': .9, 'Kıskanç': .9 },
  // 🏠 ana sayfa bölümleri (⚙️ Ana sayfayı düzenle): [id, ad]
  HOME_SECS: [['c3', '📅 Bugün başlığı'], ['cont', '💬 Kaldığın yerden'], ['sug', '💡 Şimdi ne yapsam?'], ['spot', '☀️ Günün kızı / 🌙 Gecenin kızı'], ['meet', '🔥 Tinder / Bumble / Fans'],
    ['media', '📰 Haber · Dergi · Flix'], ['hot', '🔥 Slogan kartları'], ['vit', '🪧 İlan vitrini'], ['vip', '👑 VIP vitrin'], ['feed', '🌹 İlan akışı']]
};
