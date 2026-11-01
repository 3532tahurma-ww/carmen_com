/*
 * Monia Paneli: senaryo üretmek için zamanlar ve hazır olay havuzu.
 * Mekanlar js/data/places.js'ten gelir.
 *
 * Olay metninde kullanılabilenler: {ben} = karakterin adı, {sen} = senin adın, {mekan}, {zaman}
 * cats: olay kategorileri. items: 'Başlık' ya da { title, text }. tags: kategori etiketleri.
 * Uygulamadan eklediğin kalıp olaylar tarayıcıda saklanır (Monia → Olay havuzu → ➕).
 */
window.Stories = window.Stories || {};

Stories.MONIA = {
  parts: [
    { id: 'sabah', icon: '🌅', label: 'Sabah', hour: 9 },
    { id: 'ogle', icon: '☀️', label: 'Öğle', hour: 13 },
    { id: 'aksam', icon: '🌇', label: 'Akşam', hour: 19 },
    { id: 'gece', icon: '🌙', label: 'Gece', hour: 23 },
    { id: 'geceyarisi', icon: '🌌', label: 'Gece yarısı', hour: 2 }
  ],
  days: ['Hafta içi', 'Hafta sonu', 'Tatil günü', 'Doğum günü', 'Yılbaşı', 'Sevgililer Günü'],
  seasons: ['İlkbahar', 'Yaz', 'Sonbahar', 'Kış'],
  // senaryo etiketleri (kendi etiketlerini senaryo düzenleyicide ekleyebilirsin)
  scTags: ['Romantik', 'Tutkulu', 'Komik', 'Dram', 'Gerilim', 'Gizem', 'Günlük', 'Fantastik', 'Ofis', 'Tatil'],
  // olay dereceleri: vivid = rengin canlılığı (0 sönük gri … 100 tam renk). Uygulamada 📶 Dereceler'den değiştirilebilir
  // 5 kademe, azdan çoka
  levels: [
    { id: 'vlow', label: 'Very low-volume', vivid: 20 },
    { id: 'low', label: 'Low-volume', vivid: 40 },
    { id: 'mid', label: 'Volume', vivid: 60 },
    { id: 'high', label: 'High-volume', vivid: 80 },
    { id: 'vhigh', label: 'Very high-volume', vivid: 100 }
  ],
  // 📊 parametreler: her karakterin sana karşı değerleri (0 … max). Sebep-sonuçlar artırır / azaltır;
  // ⚡ eşik olayları bir değer sınırı geçince olay tetikler. Uygulamada Monia → 🎲 Sebep-sonuç'tan değiştirilebilir
  params: [
    { id: 'guven', icon: '🤝', label: 'Güven', min: 0, max: 100, start: 20 },
    { id: 'samimiyet', icon: '🫂', label: 'Samimiyet', min: 0, max: 100, start: 10 },
    { id: 'ask', icon: '❤️', label: 'Aşk', min: 0, max: 100, start: 0 },
    { id: 'sehvet', icon: '🔥', label: 'Şehvet', min: 0, max: 100, start: 0 },
    { id: 'kiskanclik', icon: '😤', label: 'Kıskançlık', min: 0, max: 100, start: 0 }
  ],
  // olay etiketleri (olay editöründe kendi etiketini de yazabilirsin)
  evTags: ['Başlangıç', 'Doruk', 'Final', 'Sürpriz', 'Yakınlaşma', 'Kavga', 'Barışma'],
  // olay editöründeki ton seçenekleri
  tones: ['Romantik', 'Tutkulu', 'Tatlı', 'Komik', 'Utangaç', 'Gergin', 'Kıskanç', 'Dramatik', 'Gizemli', 'Cesur', 'Hüzünlü'],
  cats: [
    // tags: kategori etiketleri ('if' -> şartlarda üstte). Olayların kendi 'event' etiketi: sohbette üstte, sevdiği / sevmediği olaylarda seçilebilir
    // (eski 💫 Genel ve 🌟 Ekstra kaldırıldı; olaylar Monia → Olay havuzundaki kategorilerde)
  ]
};
