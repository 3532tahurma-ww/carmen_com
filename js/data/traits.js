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
        'Duygusal', 'Mantıklı', 'Komik', 'Ciddi', 'Korumacı', 'Manipülatif', 'Güvensiz', 'Özgüvenli', 'Anaç']
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
    // 🌈 yönelim: cevaplara ek (app.js ORIENT_LINES); grupta iki Bisexual kız birbirine lezbiyen olay yapabilir (biLesExtra)
    {
      id: 'orientation', label: '🌈 Orientation', single: true,
      items: ['Straight', 'Bisexual']
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
    // 🏠 kiminle yaşıyor: şehirdeki hanesiyle aynı (app.js liveOf / setupLive); Kocasıyla Yaşıyor = 💍 Evli
    {
      id: 'living', label: '🏠 Yaşam', single: true,
      items: ['Tek Yaşıyor', 'Ev Arkadaşıyla', 'Kocasıyla Yaşıyor']
    },
    // 💍 ilişki durumu: Married = 💍 Evli anahtarı ve Kocasıyla Yaşıyor ile eşit (app.js setupLive)
    {
      id: 'relationship', label: '💍 Relationship', single: true,
      items: ['Single', 'Has Boyfriend', 'Married', 'Divorced']
    },
    // 🎂 yaş aralığı: 🎲 rastgele yaşla uyumlu seçer (app.js AGE_R)
    {
      id: 'agerange', label: '🎂 Age', single: true,
      items: ['18–21', '22–25', '26–30', '31–35', '36+']
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
    // 💉 estetik (çoklu, değer olduğu gibi saklanır): silikonluysa kilo kuralı göğüs / kalça bedenini engellemez, vücut soruları silikon cevaplarına döner.
    // Dolgulu dudak: 💋 Lip Shape → Filler. 🎲 rastgele %15 (app.js). 📅 gündemle sonradan da eklenebilir (life.js gogus / kalca)
    {
      id: 'aesthetic', label: '💉 Aesthetic',
      items: ['Breast Implants', 'Butt Implants']
    },
    // 📏 boy / vücut / saç / ten: profil vücut kartında (app.js cmBody) rastgele değer yerine bunlar gösterilir
    {
      id: 'height', label: '📏 Height', single: true,
      items: ['Very Short', 'Short', 'Average', 'Tall', 'Very Tall']
    },
    {
      id: 'bodytype', label: '🧬 Body Type', single: true,
      items: ['Petite', 'Athletic', 'Toned', 'Hourglass', 'Pear', 'Muscular']
    },
    {
      id: 'haircolor', label: '💇 Hair Color', single: true,
      items: ['Black', 'Brown', 'Blonde', 'Red', 'Ginger', 'Platinum', 'Dyed']
    },
    {
      id: 'hairlength', label: '✂️ Hair Length', single: true,
      items: ['Pixie', 'Short', 'Shoulder', 'Long', 'Very Long']
    },
    {
      id: 'skin', label: '🎨 Skin Tone', single: true,
      items: ['Pale', 'Fair', 'Olive', 'Tan', 'Brown', 'Dark']
    },
    {
      id: 'lips', label: '💋 Lip Shape', single: true,
      items: ['Thin', 'Natural', 'Full', 'Plump', 'Heart-shaped', 'Wide', 'Filler']
    },
    {
      id: 'legs', label: '🦵 Legs', single: true,
      items: ['Slim', 'Toned', 'Thick Thighs', 'Long']
    },
    {
      id: 'waist', label: '⏳ Waist', single: true,
      items: ['Tiny', 'Slim', 'Average', 'Wide']
    },
    {
      id: 'fashion', label: '👗 Style', single: true,
      items: ['Casual', 'Elegant', 'Sporty', 'Goth', 'Girly', 'Business']
    },
    // çoklu seçim: değer olduğu gibi saklanır ("Freckles")
    {
      id: 'marks', label: '✨ Marks',
      items: ['Freckles', 'Dimples', 'Beauty Mark', 'Tattoo', 'Nose Piercing', 'Navel Piercing', 'Nipple Piercing', 'Tongue Piercing', 'Glasses', 'Braces']
    },
    // 👁️ sıra app.js CM_EYE / ORIGIN_LOOK eye ağırlıklarıyla aynı (🎲 rastgele memlekete göre)
    {
      id: 'eyecolor', label: '👁️ Eye Color', single: true,
      items: ['Brown', 'Hazel', 'Green', 'Blue', 'Black', 'Honey']
    },
    // 👓💅🚬 çoklu: profil kartı (app.js cmBody) + 💭 derin sorular (life.js DEEP tr) + 💍 koca sohbeti (HB_TOPICS tr)
    {
      id: 'accessory', label: '👓 Accessory',
      items: ['Earrings', 'Hoop Earrings', 'Necklace', 'Choker', 'Bracelet', 'Anklet', 'Rings', 'Watch', 'Hair Clip']
    },
    {
      id: 'care', label: '💅 Care',
      items: ['Manicure', 'Long Nails', 'Natural Nails', 'Heavy Makeup', 'Light Makeup', 'No Makeup', 'Lash Extensions', 'Skincare Routine', 'Perfume Lover']
    },
    {
      id: 'habit', label: '🚬 Habit',
      items: ['Smoker', 'Vaper', 'Social Drinker', 'Non-Drinker', 'Coffee Addict', 'Gym Regular', 'Gamer', 'Bookworm', 'Party Lover', 'Early Bird', 'Night Owl']
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
    'Very Thin': ['Boob Size: 90', 'Boob Size: 95', 'Butt Size: L', 'Butt Size: XL', 'Body Type: Hourglass', 'Body Type: Pear', 'Body Type: Muscular', 'Legs: Thick Thighs', 'Waist: Wide'],
    'Thin': ['Boob Size: 95', 'Butt Size: XL', 'Body Type: Muscular', 'Legs: Thick Thighs', 'Waist: Wide'],
    'Curvy': ['Boob Size: 70', 'Butt Size: XS'],
    'Chubby': ['Boob Size: 70', 'Boob Size: 75', 'Butt Size: XS', 'Butt Size: S', 'Body Type: Petite', 'Body Type: Athletic', 'Body Type: Toned', 'Body Type: Muscular', 'Legs: Slim', 'Waist: Tiny'],
    'Overweight': ['Boob Size: 70', 'Boob Size: 75', 'Boob Size: 80', 'Butt Size: XS', 'Butt Size: S', 'Butt Size: M', 'Body Type: Petite', 'Body Type: Athletic', 'Body Type: Toned', 'Body Type: Muscular', 'Legs: Slim', 'Waist: Tiny', 'Waist: Slim']
  };
  // uzun boylu minyon olamaz (Height, Body Type'tan önce seçilir)
  const H_RULES = { 'Tall': ['Body Type: Petite'], 'Very Tall': ['Body Type: Petite'] };
  // 🧬 vücut ölçüleri birbirine uysun (iki yönlü: önce seçilen diğerini engeller)
  const BODY_PAIRS = [
    ['Body Type: Petite', ['Boob Size: 90', 'Boob Size: 95', 'Butt Size: L', 'Butt Size: XL', 'Legs: Thick Thighs', 'Legs: Long', 'Waist: Wide']],
    ['Body Type: Hourglass', ['Boob Size: 70', 'Butt Size: XS', 'Butt Size: S', 'Waist: Wide']],
    ['Body Type: Pear', ['Butt Size: XS', 'Butt Size: S', 'Legs: Slim']],
    ['Body Type: Athletic', ['Waist: Wide']], ['Body Type: Toned', ['Waist: Wide']], ['Body Type: Muscular', ['Waist: Tiny', 'Height: Very Short']],
    ['Legs: Thick Thighs', ['Butt Size: XS']], ['Legs: Long', ['Height: Very Short']],
    ['Waist: Tiny', ['Weight: Average']], ['Waist: Wide', ['Butt Size: XS']],
    ['Boob Size: 95', ['Butt Size: XS']], ['Boob Size: 70', ['Butt Size: XL']]];
  const pairRules = BODY_PAIRS.flatMap(([a, bs], i) => [{ id: `b_${i}`, ifs: [a], not: bs }, ...bs.map((b, j) => ({ id: `b_${i}_${j}`, ifs: [b], not: [a] }))]);
  const rules = [...Object.entries(W_RULES).map(([w, not]) => ({ id: 'w_' + w.replace(/\s/g, ''), ifs: ['Weight: ' + w], not })),
    ...Object.entries(H_RULES).map(([h, not]) => ({ id: 'h_' + h.replace(/\s/g, ''), ifs: ['Height: ' + h], not })),
    ...pairRules,
    // 💅🚬 çelişenler (tek yönlü: ilk seçilen kalır, rastgelede ikincisi düşer)
    { id: 'c_heavy', ifs: ['Heavy Makeup'], not: ['Light Makeup', 'No Makeup'] },
    { id: 'c_light', ifs: ['Light Makeup'], not: ['No Makeup'] },
    { id: 'c_nails', ifs: ['Manicure'], not: ['Natural Nails'] },
    { id: 'c_long', ifs: ['Long Nails'], not: ['Natural Nails'] },
    { id: 'h_drink', ifs: ['Social Drinker'], not: ['Non-Drinker'] },
    { id: 'h_party', ifs: ['Party Lover'], not: ['Early Bird'] },
    { id: 'h_early', ifs: ['Early Bird'], not: ['Night Owl'] },
    // 💍 kocasıyla yaşayan evlidir
    { id: 'r_koca', ifs: ['Yaşam: Kocasıyla Yaşıyor'], not: ['Relationship: Single', 'Relationship: Has Boyfriend', 'Relationship: Divorced'] },
    // 💉 silikon küçük beden olmaz
    { id: 'imp_boob', ifs: ['Breast Implants'], not: ['Boob Size: 70', 'Boob Size: 75'] },
    { id: 'imp_butt', ifs: ['Butt Implants'], not: ['Butt Size: XS', 'Butt Size: S'] },
    // 🌸 bakire tutarlılığı (iki yönlü: önce seçilen diğerini engeller): evli / boşanmış / hamile bakire olamaz, bakire bol olamaz
    ...['Relationship: Married', 'Relationship: Divorced', 'Yaşam: Kocasıyla Yaşıyor', 'f:evli', 'f:hotwife', 'f:hamile']
      .map(x => ({ id: 'v_' + x.replace(/^.*[:]\s*/, '').replace(/\W/g, ''), ifs: [x], not: ['Experience: Virgo', 'f:bakire'] })),
    ...['Experience: Virgo', 'f:bakire'].map(x => ({ id: x === 'f:bakire' ? 'v_bakire' : 'v_virgo', ifs: [x],
      not: ['Relationship: Married', 'Relationship: Divorced', 'Yaşam: Kocasıyla Yaşıyor', 'f:evli', 'f:hotwife', 'f:hamile',
        'Pussy Size: Relaxed', 'Pussy Size: Loose', 'Pussy Size: Very Loose', 'Anal Size: Loose', 'Anal Size: Very Loose',
        ...(x === 'f:bakire' ? ['Experience: Medium', 'Experience: Much', 'Experience: A lot', 'Experience: Great'] : [])] }))];

  return { groups, zodiacs, colors, all, rules };
})();
