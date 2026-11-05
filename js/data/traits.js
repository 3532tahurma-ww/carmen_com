/*
 * Karakter oluşturma seçenekleri: hazır kişilik ve yazım tarzı özellikleri, burçlar, renkler
 * Listeye yeni özellik eklemek için ilgili gruba yazman yeterli.
 */
window.Stories = window.Stories || {};

Stories.Traits = (() => {
  const groups = [
    {
      id: 'personality', label: '💫 Kişilik',
      items: ['Neşeli', 'Utangaç', 'Alaycı', 'Soğuk', 'Flörtöz', 'Romantik', 'Kıskanç', 'Asi', 'Sakin', 'Gergin',
        'Meraklı', 'Gizemli', 'Dürüst', 'Sadık', 'İnatçı', 'Şımarık', 'Olgun', 'Çocuksu', 'Kibirli', 'Alçakgönüllü',
        'Duygusal', 'Mantıklı', 'Komik', 'Ciddi', 'Korumacı', 'Manipülatif', 'Güvensiz', 'Özgüvenli']
    },
    {
      id: 'style', label: '⌨️ Yazım tarzı',
      items: ['Kısa yazar', 'Uzun yazar', 'Hep küçük harf', 'Emoji sever', 'Emoji kullanmaz', 'Harf uzatır (canımmm)',
        'Noktalama kullanmaz', 'Resmi konuşur', 'Argo kullanır', 'Çok güler (sjsjsj)', 'Geç cevap verir', 'Sesli mesaj sever']
    },
    // Kendi gruplarını ekleyebilirsin: { id: 'benzersiz-id', label: '🌟 Başlık', items: ['A', 'B'] }
    // (🌟 Ekstra listesi Monia olay havuzuna taşındı: js/data/monia.js)
    // 👑 emirlere itaat eder mi, kendisi emreder mi (bkz. app.js DOM_*): Dominant + deneyimli / Şehvet 60+ ise Strap-On ister
    {
      id: 'dominance', label: '👑 Dominance', single: true,
      items: ['Submissive', 'Switch', 'Dominant']
    },
    {
      id: 'experience', label: 'Experience', single: true,
      items: ['Virgo' , 'Little','Some','Medium','Much','A lot','Great']
    },
    // 🔥 sevişme isteği, sadece 🌿 Gerçekçi Mod'da geçerli (bkz. app.js willOf); ilan kızları hep Yüksek ya da üstü
    {
      id: 'willing', label: '🔥 İsteklilik', single: true,
      items: ['Çok Yüksek', 'Yüksek', 'Orta', 'Düşük', 'İstemiyor']
    },
    // single: true -> bu gruptan tek seçim yapılır, karakterde "Pussy Size: Tight" diye saklanır
    // (böylece farklı gruplarda aynı seçenek, ör. 'Tight', karışmaz)
    {
      id: 'pussy', label: '🌸 Pussy Size', single: true,
      items: ['Extremely Tight','Very Tight','Tight','Average','Relaxed','Loose','Very Loose']
    },
    {
      id: 'anal', label: '🍑 Anal Size', single: true,
      items: ['Extremely Tight','Very Tight','Tight','Average','Relaxed','Loose','Very Loose']
    },
    // kilo, Boob / Butt Size'tan önce gelir: 🎲 rastgele önce kiloyu seçer, beden ona uyar (bkz. rules)
    {
      id: 'weight', label: '⚖️ Weight', single: true,
      items: ['Very Thin', 'Thin', 'Slim', 'Average', 'Curvy', 'Chubby', 'Overweight']
    },
    {
      id: 'boob', label: '🍒 Boob Size', single: true,
      items: ['70','75','80','85','90','95']
    },
    {
      id: 'butt', label: '🍑 Butt Size', single: true,
      items: ['XS','S','M','M/L','L','XL']
    },
  ];

  // aynı id iki kez yazılırsa ikincisi ayrı grup olarak kalsın
  const seen = new Set();
  groups.forEach((g, i) => {
    if (seen.has(g.id)) g.id = `${g.id}-${i}`;
    seen.add(g.id);
    g.items = [...new Set(g.items)];
  });

  // karakterde saklanan değer (single gruplarda başına grup adı eklenir)
  const value = (g, t) => g.single ? `${g.label.replace(/^[^\p{L}\p{N}]+/u, '').trim()}: ${t}` : t;
  groups.forEach(g => { g.values = g.items.map(t => value(g, t)); });

  const zodiacs = ['Koç', 'Boğa', 'İkizler', 'Yengeç', 'Aslan', 'Başak', 'Terazi', 'Akrep', 'Yay', 'Oğlak', 'Kova', 'Balık'];

  // Avatar ve profil kapağı için renk çiftleri
  const colors = [
    ['#ff6fa8', '#ff3d8b'], ['#a78bfa', '#7b5cff'], ['#5fb4ff', '#2f6bff'], ['#34e3a8', '#0e9f8e'],
    ['#ffb72b', '#ff7a3d'], ['#c86bff', '#ff5fb0'], ['#8b9bb4', '#4b5670'], ['#ff8a65', '#e0334f']
  ];

  const all = groups.reduce((a, g) => a.concat(g.values), []);

  // 📏 hep geçerli kurallar (📏 Kurallar sayfasındakilere eklenir): kiloya göre olamayacak göğüs / kalça bedenleri
  const W_RULES = {
    'Very Thin': ['Boob Size: 90', 'Boob Size: 95', 'Butt Size: L', 'Butt Size: XL'],
    'Thin': ['Boob Size: 95', 'Butt Size: XL'],
    'Curvy': ['Boob Size: 70', 'Butt Size: XS'],
    'Chubby': ['Boob Size: 70', 'Boob Size: 75', 'Butt Size: XS', 'Butt Size: S'],
    'Overweight': ['Boob Size: 70', 'Boob Size: 75', 'Boob Size: 80', 'Butt Size: XS', 'Butt Size: S', 'Butt Size: M']
  };
  const rules = Object.entries(W_RULES).map(([w, not]) => ({ id: 'w_' + w.replace(/\s/g, ''), ifs: ['Weight: ' + w], not }));

  return { groups, zodiacs, colors, all, rules };
})();
