/*
 * Rastgele karakter havuzları (🎲 düğmeleri buradan seçer)
 * Kadın isimleri, şehirler, meslekler ve isim süsleri Amor'un havuzundan gelir: js/data/amor-pools.js
 * (Amor/js/data/pools.js'in kopyası; Amor'da güncellersen dosyayı tekrar kopyalaman yeterli).
 *   eras   : isim dönemi → isimler (trend, modern, klasik, olgun); eraAge: dönem → yaş aralığı
 *   jobObjs: { title, min, max } meslekler (yaşa uygun olan seçilir)
 *   decos / styles / brackets / nicknames: 🎀 süslü isim için
 * Aşağıdaki listeler Amor havuzu yoksa ya da erkek karakterler için kullanılır; kendin de ekleme yapabilirsin.
 */
window.Stories = window.Stories || {};

Stories.Pools = (() => {
  const A = window.Amor || {};
  const own = {
  names: {
    '♀': ['Elif', 'Zeynep', 'Defne', 'Ece', 'Azra', 'Duru', 'Nehir', 'Melis', 'Ceren', 'Selin', 'İpek', 'Derin',
      'Asya', 'Lara', 'Ada', 'Su', 'Buse', 'Gizem', 'Yaren', 'Damla', 'Irmak', 'Naz', 'Beren', 'Esila'],
    '♂': ['Mert', 'Emir', 'Kerem', 'Arda', 'Can', 'Deniz', 'Ege', 'Kaan', 'Alp', 'Barış', 'Efe', 'Yiğit',
      'Onur', 'Burak', 'Doruk', 'Aras', 'Tuna', 'Umut', 'Ozan', 'Batu', 'Emre', 'Cem', 'Volkan', 'Serkan', 'Tolga', 'Koray',
      'Berk', 'Çağan', 'Kuzey', 'Atlas', 'Görkem', 'Selim', 'Hakan', 'Murat', 'Oğuz', 'Eren', 'Baran', 'Furkan', 'Sarp', 'Tarık',
      'Ali', 'Mehmet', 'Ahmet', 'Yusuf', 'Ömer', 'Kemal', 'Cenk', 'Erdem', 'Levent', 'Sinan', 'Uğur', 'Gökhan', 'Taylan', 'Berkay',
      'Alper', 'Anıl', 'Bora', 'Çınar', 'Utku', 'Tuncay', 'Engin', 'Ercan', 'Harun', 'İlker', 'Kağan', 'Mustafa', 'Okan', 'Rüzgar', 'Taner', 'Yavuz']
  },
  age: [18, 32],
  cities: ['İstanbul', 'İzmir', 'Ankara', 'Antalya', 'Bursa', 'Eskişehir', 'Muğla', 'Trabzon', 'Mersin', 'Çanakkale',
    'Kocaeli', 'Adana', 'Samsun', 'Konya', 'Denizli', 'Tekirdağ'],
  jobs: ['Öğrenci', 'Mimar', 'Grafik tasarımcı', 'Hemşire', 'Avukat', 'Barista', 'Yazılımcı', 'Fotoğrafçı',
    'Öğretmen', 'Psikolog', 'Diş hekimi', 'DJ', 'Model', 'Kuaför', 'Muhasebeci', 'Pilot', 'Veteriner',
    'Aşçı', 'İç mimar', 'Sosyal medya uzmanı', 'Doktor', 'Mühendis'],
  bios: ['kahvesiz konuşmam ☕', 'gece kuşu 🌙', 'bir gün her şey güzel olacak', 'deniz kokusu > her şey',
    'az konuşur çok düşünür', 'playlistim ruh halimdir 🎧', 'kitap, kedi, yağmur', 'hayat kısa, tatlı ye 🍰',
    'kendi filminin başrolü 🎬', 'ne olursan ol yine gel', 'sessiz ama derin', 'bugün de güneşi bekliyorum ☀️',
    'yolculuklar ve fotoğraflar 📸', 'dramaya yer yok', 'önce kahve sonra dünya', 'kalbim kırık ama makyajım yerinde 💄',
    // +100
    'gülüşüm bedava, kalbim değil 😌', 'bugün kendimi seçiyorum 💅', 'pazartesi sendromu kronik', 'yağmurda yürümeyi seven tek kişi ☔', 'çay demlendi, sen neredesin? 🫖',
    'kedimden izin aldım, yazabilirsin 🐈', 'gün batımı koleksiyoncusu 🌅', 'ruh eşimi playlistinden tanırım', 'sabahları konuşma, akşamları susma', 'biraz kaos, biraz huzur',
    'tatlı ama acı da sever 🌶️', 'kahve + kitap + yağmur = ben', 'kalbim yolda, ben evde', 'sessiz sinema sever 🎬', 'gece 3 düşünceleri 🌌',
    'kendime not: daha çok gül', 'bir bavul hayal 🧳', 'deniz görmeden uyuyamam 🌊', 'çiçek alana kalbimi veririm 🌷', 'aşk mı? önce bir kahve içelim',
    'mutluluk küçük şeylerde ✨', 'bugün yine kendimden yanayım', 'sarılmak terapidir 🫂', 'konser kaçırmam 🎤', 'hayallerim cebimden büyük',
    'yalnızlık bazen iyidir', 'pizza her zaman cevaptır 🍕', 'bir gün Paris 🗼', 'sabır da bir yetenek', 'cümlelerimi şarkılarla kurarım 🎶',
    'aynı anda hem melek hem şeytan 😇😈', 'kahkaham yüksek, kalbim yumuşak', 'en sevdiğim renk gün batımı', 'sınırlarım net, kalbim açık', 'sana uzaktan bakıyorum 👀',
    'film önerisi bekliyorum 🍿', 'yorgunum ama mutluyum', 'yeni başlangıçlar 🌱', 'eski şarkılar, yeni hikayeler', 'mavi her şeye bayılırım 💙',
    'göründüğüm kadar masum değilim 😏', 'kitap kokusuna aşığım 📚', 'dans etmeden geçen gün kayıptır 💃', 'hayat bir kez, cesur ol', 'kimse mükemmel değil, ben hariç 💅',
    'dağ havası, kamp ateşi 🏕️', 'sevdiğim insanlar azdır ama özdür', 'bugün yine erken uyuyamadım', 'kalbimin şifresi basit: ilgi', 'romantik komedi bağımlısı 💘',
    'pembe gözlüklerle bakarım 🌸', 'çikolata krizi geçiriyorum 🍫', 'ateş burcu, dikkat 🔥', 'iyi ki varsın diyene iyi ki varım', 'yürüyüşler ve uzun sohbetler',
    'resim yaparım, ruhumu boyarım 🎨', 'kalbim tatil modunda 🏝️', 'ben buradayım, sen neredesin?', 'kafam güzel, kalbim temiz', 'gece yarısı mesajları en dürüstüdür 🌙',
    'denize sıfır, dertlere uzak', 'uçak bileti alırken mutluyum ✈️', 'herkes bir şey arıyor, ben huzur', 'kahverengi gözler, siyah kahve ☕', 'mum ışığı ve caz 🕯️',
    'bazen kaybolmak gerekir', 'sabah koşuları ve smoothie 🍓', 'sıcak bir battaniye kadar sevilmek', 'sessizliğimi de dinle', 'dünyayı gezmek istiyorum 🌍',
    'ilk adımı sen at 😌', 'gerçek dostlar, iyi şarap 🍷', 'kalbim çiçek açıyor 🌼', 'cumartesi sabahları kutsaldır', 'kuralları sevmem 😈',
    'şiir okuyan kızlardan 📖', 'bu hafta çok çalıştım, hak ettim', 'aynada her gün yeni biri', 'bir şarkı kadar kısa, bir film kadar uzun', 'tatlı tatlı kızarım 😤',
    'biraz huysuz, çokça tatlı', 'gülümse, belki birine iyi gelir', 'denemeden bilemezsin', 'sahilde kitap, elimde dondurma 🍦', 'uykumu kimse bölemez 😴',
    'dizilerin baş kızı', 'kalbin sesi her şeyden yüksek', 'telefonumda bin fotoğraf 📸', 'hayat bir macera, ben de kahramanı', 'gözlerim konuşur, dinle',
    'kahve falıma sen çıktın ☕', 'aşk şarkılarına inanırım', 'en güzel günler henüz gelmedi', 'tatlı dilli, yüreği güzel', 'hep bir adım önde 👠',
    'ruhumu besleyen müzik 🎧', 'yolum açık, kalbim de', 'bir gülümseme bin kelime', 'hem çok kibar hem çok aksi', 'masallara hâlâ inanırım 🧚'],
  // 📍 ek şehirler (+100; Amor havuzundakilere eklenir)
  moreCities: ['Afyonkarahisar', 'Amasya', 'Artvin', 'Aydın', 'Balıkesir', 'Bartın', 'Batman', 'Bilecik', 'Bingöl', 'Bitlis', 'Bolu', 'Burdur', 'Çankırı', 'Çorum',
    'Diyarbakır', 'Düzce', 'Edirne', 'Elazığ', 'Erzincan', 'Erzurum', 'Gaziantep', 'Giresun', 'Hatay', 'Isparta', 'Kahramanmaraş', 'Karabük', 'Karaman', 'Kars', 'Kastamonu',
    'Kayseri', 'Kırıkkale', 'Kırklareli', 'Kırşehir', 'Kütahya', 'Malatya', 'Manisa', 'Mardin', 'Nevşehir', 'Niğde', 'Ordu', 'Osmaniye', 'Rize', 'Sakarya', 'Siirt', 'Sinop',
    'Sivas', 'Şanlıurfa', 'Tokat', 'Uşak', 'Van', 'Yalova', 'Yozgat', 'Zonguldak', 'Bodrum', 'Fethiye', 'Kaş', 'Alanya', 'Kuşadası', 'Çeşme', 'Marmaris', 'Ayvalık',
    'Safranbolu', 'Kapadokya', 'Datça', 'Göcek', 'Urla', 'Berlin', 'Münih', 'Hamburg', 'Köln', 'Viyana', 'Amsterdam', 'Brüksel', 'Paris', 'Lyon', 'Londra', 'Roma',
    'Milano', 'Barselona', 'Madrid', 'Lizbon', 'Prag', 'Budapeşte', 'Varşova', 'Atina', 'Selanik', 'Kopenhag', 'Stockholm', 'Oslo', 'Zürih', 'Dublin', 'Bakü', 'Tiflis',
    'Saraybosna', 'Üsküp', 'Lefkoşa', 'Girne', 'Dubai', 'New York', 'Los Angeles', 'Hakkari', 'Muş', 'Ağrı', 'Iğdır', 'Ardahan', 'Bayburt', 'Gümüşhane',
    'Tunceli', 'Kilis', 'Şırnak', 'Aksaray'],
  // 💼 ek meslekler (+100; 22 yaş ve üstü için Amor havuzuna karışır)
  moreJobs: ['Hostes', 'Pilates eğitmeni', 'Yoga hocası', 'Fitness antrenörü', 'Diyetisyen', 'Eczacı', 'Fizyoterapist', 'Ebe', 'Anestezi teknikeri', 'Radyolog',
    'Kardiyolog', 'Dermatolog', 'Plastik cerrah', 'Çocuk doktoru', 'Göz doktoru', 'Laborant', 'Moda tasarımcısı', 'Stilist', 'Makyaj artisti', 'Nail art uzmanı',
    'Estetisyen', 'Dövme sanatçısı', 'Butik sahibi', 'Mağaza müdürü', 'Satış danışmanı', 'Emlakçı', 'Bankacı', 'Finans analisti', 'Borsa danışmanı', 'Sigortacı',
    'İnsan kaynakları uzmanı', 'Pazarlama müdürü', 'Marka yöneticisi', 'Reklamcı', 'Metin yazarı', 'Editör', 'Gazeteci', 'Muhabir', 'Haber spikeri', 'Radyo programcısı',
    'Podcast yapımcısı', 'YouTuber', 'İçerik üreticisi', 'Influencer', 'Oyuncu', 'Tiyatrocu', 'Dansçı', 'Bale sanatçısı', 'Şarkıcı', 'Piyanist',
    'Kemancı', 'Müzik öğretmeni', 'Ressam', 'Heykeltıraş', 'Seramik sanatçısı', 'Kuyumcu', 'Çiçekçi', 'Pastacı', 'Şef', 'Sommelier',
    'Barmen', 'Garson', 'Otel resepsiyonisti', 'Turist rehberi', 'Seyahat acentesi', 'Kabin amiri', 'Kaptan', 'Yat kaptanı', 'Dalış eğitmeni', 'Kayak hocası',
    'Arkeolog', 'Tarihçi', 'Kütüphaneci', 'Akademisyen', 'Araştırmacı', 'Kimyager', 'Biyolog', 'Genetik mühendisi', 'Veri bilimci', 'Yapay zeka mühendisi',
    'Oyun tasarımcısı', 'UX tasarımcısı', 'Web tasarımcısı', 'Siber güvenlik uzmanı', 'Sistem yöneticisi', 'Proje yöneticisi', 'Mimar asistanı', 'Peyzaj mimarı', 'Şehir plancısı', 'İnşaat mühendisi',
    'Hakim', 'Savcı', 'Noter', 'Diplomat', 'Tercüman', 'Polis', 'Asker', 'İtfaiyeci', 'Psikiyatrist', 'Sosyolog', 'Eğitim koordinatörü', 'Kreş öğretmeni', 'Dil öğretmeni', 'Matematik öğretmeni',
    'Kitap editörü', 'Ses teknisyeni', 'Kameraman', 'Yönetmen', 'Senarist', 'Kostüm tasarımcısı', 'Sahne tasarımcısı'],
  // 🧩 genel meslek grupları: Oluştur sadece bunlardan seçer (🎲 yaşa uygun grup → meslek).
  //   re: eski / elle yazılmış meslekleri gruba bağlar; doing: şu an ne yapıyor; talk: sohbette mesleğinden bahsetmesi
  jobGroups: [
    { id: 'saglik', name: 'Sağlık', ic: '🩺', min: 22, jobs: ['Hemşire', 'Doktor', 'Eczacı', 'Psikolog'],
      re: /hemşire|doktor|hekim|eczacı|ebe|diyetisyen|fizyoterap|psikolog|psikiyatr|veteriner|cerrah|laborant|radyolog|anestezi|kardiyolog|dermatolog|tıp/,
      doing: ['nöbetteyim', 'nöbetten yeni çıktım', 'hastaneden çıktım, ayaklarım koptu'],
      talk: ['Bugün nöbette çok yoruldum, biraz şımart beni 🩺', 'Önlüğü çıkardım, artık sadece seninim 😏', 'Doktor gözüyle söylüyorum: bana iyi geliyorsun 🩺', 'Vardiya arasında seni düşündüm 🙈'] },
    { id: 'egitim', name: 'Eğitim', ic: '👩‍🏫', min: 23, jobs: ['Öğretmen', 'Akademisyen', 'Dil öğretmeni'],
      re: /öğretmen|akademisyen|profesör|hoca|okutman|eğitim|araştırma/,
      doing: ['ödev okuyorum', 'yarınki derse hazırlanıyorum', 'sınav kağıdı okuyorum'],
      talk: ['Bugün sınıf beni çok yordu 👩‍🏫', 'Yine kağıt okuyorum… biraz ara verdim senin için 😌', 'Hoca olarak not veriyorum: bugün 10 üzerinden 10 sin 😏', 'Derste aklım hep sendeydi, ayıp 🙈'] },
    { id: 'ogrenci', name: 'Öğrenci', ic: '🎒', max: 25, jobs: ['Üniversite öğrencisi', 'Tıp öğrencisi', 'Hukuk öğrencisi'],
      re: /öğrenci|stajyer/,
      doing: ['ders çalışıyorum güya', 'kütüphanedeyim', 'vize çalışıyorum'],
      talk: ['Vizeler kapıda, sen beni oyalıyorsun 🙈', 'Kütüphanede gizlice yazıyorum sana 🤫', 'Ödev bitmedi ama sana yazmak daha güzel 😌', 'Bu dönem tek sevdiğim ders sensin 😏'] },
    { id: 'ofis', name: 'Ofis', ic: '💼', min: 22, jobs: ['Sekreter', 'Bankacı', 'Avukat', 'Muhasebeci', 'İnsan kaynakları uzmanı'],
      re: /sekreter|asistan|bankacı|avukat|hakim|savcı|noter|muhasebe|finans|borsa|sigorta|insan kaynak|pazarlama|marka|reklam|yönetici|müdür|emlak|danışman|satış|ofis/,
      doing: ['ofisteyim', 'toplantıdan yeni çıktım', 'rapor hazırlıyorum'],
      talk: ['Toplantılar bitmek bilmedi 💼', 'Patron yine fazla mesai istedi, kaçtım sana 😏', 'Masamda gizlice telefonla yazıyorum 🙈', 'Ofiste etek giydim bugün, herkes baktı 😌'] },
    { id: 'sanat', name: 'Sanat & Tasarım', ic: '🎨', min: 20, jobs: ['Grafik tasarımcı', 'Fotoğrafçı', 'Mimar', 'İç mimar'],
      re: /tasarım|fotoğraf|mimar|ressam|heykel|seramik|sanatçı|kuyumcu|stilist|editör|yazar|senarist|yönetmen|kamera/,
      doing: ['çizim yapıyorum', 'fotoğraf düzenliyorum', 'müşteri revizesiyle uğraşıyorum'],
      talk: ['Bugün ilhamım sendin 🎨', 'Seni çizmek istiyorum… modelim olur musun? 😏', 'Müşteri yine revize istedi, sinirim bozuk 😤', 'Gözüm hep güzel şeylere bakar, şu an sana 😌'] },
    { id: 'sahne', name: 'Sahne & Medya', ic: '🎤', max: 40, jobs: ['Model', 'Oyuncu', 'DJ', 'İçerik üreticisi'],
      re: /model|oyuncu|tiyatro|dj|içerik|influencer|youtuber|şarkıcı|dansçı|bale|spiker|muhabir|gazeteci|podcast|radyo|sosyal medya|piyanist|kemancı|müzik/,
      doing: ['çekimdeyim', 'provadan çıktım', 'video kurguluyorum'],
      talk: ['Çekimden yeni çıktım, makyajım hâlâ üstümde 📸', 'Bugün herkes bana baktı ama ben seni düşündüm 😏', 'Takipçilerim seni bilmiyor, sırrımızsın 🤫', 'Sahnede değilken de rol yaparım, dikkat et 😈'] },
    { id: 'guzellik', name: 'Güzellik & Spor', ic: '💆', min: 20, jobs: ['Kuaför', 'Makyaj artisti', 'Masöz', 'Pilates eğitmeni'],
      re: /kuaför|makyaj|masöz|masaj|spa|estetisyen|güzellik|nail|dövme|yoga|pilates|fitness|antrenör|eğitmen/,
      doing: ['salondayım, müşterim var', 'dersim yeni bitti', 'randevular arasındayım'],
      talk: ['Bütün gün başkalarını güzelleştirdim, şimdi sıra bende 💅', 'Ellerim çok yetenekli, bir gün göstereyim 😏', 'Bugün çok terledim, duşa giriyorum 🙈', 'Esnemem çok iyidir, bilesin 😈'] },
    { id: 'hizmet', name: 'Hizmet & Seyahat', ic: '☕', min: 18, jobs: ['Barista', 'Garson', 'Kabin memuru', 'Otel resepsiyonisti'],
      re: /barista|garson|barmen|aşçı|şef|pastacı|kabin|hostes|otel|resepsiyon|rehber|seyahat|kaptan|çiçekçi|butik|restoran|kafe/,
      doing: ['vardiyadayım', 'uçuştan yeni indim', 'kafede yoğunluk var'],
      talk: ['Vardiya bitti, ayaklarım ağrıyor ☕', 'Bugün bir müşteri bana asıldı ama aklım sendeydi 😏', 'Gel de sana özel bir kahve yapayım ☕😌', 'Üniformamı çıkarmadan yazıyorum 🙈'] },
    { id: 'teknoloji', name: 'Teknoloji', ic: '💻', min: 22, jobs: ['Yazılımcı', 'Mühendis', 'Veri bilimci'],
      re: /yazılım|mühendis|veri|yapay zeka|siber|sistem|oyun|ux|web|proje yönetici|teknisyen/,
      doing: ['kod yazıyorum', 'bug çözüyorum', 'toplantıdayım'],
      talk: ['Kod derlenirken sana yazıyorum 💻', 'Bugün bir bug beni deli etti 😤', 'Sen de bir bug gibisin, aklımdan çıkmıyorsun 😏', 'Mesaiden sonra bilgisayarı kapatıp sana döndüm 😌'] },
    { id: 'guvenlik', name: 'Güvenlik', ic: '🚓', min: 22, jobs: ['Polis', 'Asker'],
      re: /polis|güvenlik|asker|bekçi|dedektif|komiser|itfaiye/,
      doing: ['devriyedeyim', 'nöbetten yeni çıktım', 'karakoldayım'],
      talk: ['Bugün devriye çok uzun sürdü 🚓', 'Kelepçelerim hâlâ belimde 😏', 'Kuralları ben koyarım, haberin olsun 😈', 'Üniformayı çıkardım ama sertliğim yerinde 😌'] }
  ]
  };

  const eras = A.NAMES || null;
  const allAmor = eras ? Object.values(eras).reduce((a, l) => a.concat(l), []) : [];
  // mesleğin grubu: önce listedeki ad, sonra anahtar kelime (eski / elle yazılmış meslekler için)
  const jobGroupOf = job => {
    const j = String(job || '').toLocaleLowerCase('tr');
    if (!j) return null;
    return own.jobGroups.find(g => g.jobs.some(x => x.toLocaleLowerCase('tr') === j)) || own.jobGroups.find(g => g.re.test(j)) || null;
  };
  return Object.assign(own, {
    jobGroupOf,
    names: { '♀': allAmor.length ? allAmor : own.names['♀'], '♂': own.names['♂'] },
    eras,
    eraAge: A.NAME_AGE || {},
    cities: [...new Set([...(A.CITIES ? A.CITIES.map(c => c.name) : own.cities), ...own.moreCities])],
    cityObjs: A.CITIES || [],
    jobs: [...new Set([...(A.JOBS ? A.JOBS.map(j => j.title) : []), ...own.jobs, ...own.moreJobs])],
    extraJobs: [...new Set([...own.jobs.filter(j => j !== 'Öğrenci'), ...own.moreJobs])],
    jobObjs: A.JOBS || [],
    decos: A.NAME_DECOS || [],
    styles: A.NAME_STYLES || [['', 1]],
    brackets: A.NAME_BRACKETS || [['(', ')']],
    nicknames: A.NICKNAMES || []
  });
})();
