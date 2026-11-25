/* 📜 Hikâye Modu: "Carmen'e Hoş Geldin" (Prolog + Bölüm I). Taréque Carmen'e üniversite okumaya gelir.
 * Mevcut Stories.SCENES / Stories.EPISODES'tan AYRI veridir: kısayollara, seçiciye, CarmenEvents'e girmez.
 * GTA gibi: görev adımları şehirde (go: bina anahtarı, city.js PL; h: [başlangıç, bitiş] saat penceresi) ve sohbette (sc: sahne) ilerler.
 * Sahneler karakterlerin gerçek sohbetinde akar (who: 1 kişi → onun sohbeti, 2+ → hikâye grubu); seçimler ve olaylar sohbet çubuğunda.
 * Sahne adımları:
 *   ['n', metin]            anlatım
 *   ['m', metin]            Taréque konuşur
 *   [<karakterId>, metin]   karakter konuşur (CHARS anahtarı)
 *   ['cut', metin]          📱 kesinti
 *   { q, o: [{ x, a, h, hm, f, r }] }  seçim: a = yakınlık +, h = arzu +, hm = arzu en az, f = bayrak, r = sonraki adımlar
 *   { when: { f } | { h: [id, n] } | { a: [id, n] }, s: [...], e: [...] }  koşullu dal
 *   { fx: { a, h, hm, f } }  doğrudan etki
 *   { ev: 'Olay Başlığı', x: 'çubuk metni', a, h, r: [...] }  olay teklifi (system.js başlığı): seçilirse sohbete olay kartı düşer,
 *     ardından r satırları ve a/h etkileri. Olay sistemi çalışmaz (bot cevabı, mekân, sahne, kesinti yok); hikâye kendi içinde kalır
 *   CHARS.hold: sahne sırasında senin yazdığına verdiği kısa cevaplar (bot kuralları yerine)
 * Durum: S().user.story (app.js hkSt). Öneri dokümanı: ProjectMemory/proposals/hikaye-modu.md */
(function () {
  const S = window.Stories = window.Stories || {};

  const CHARS = {
    marte: { n: 'Marte', age: 26, ic: '🏠', role: 'Komşu · gece vardiyalı hemşire', col: '#c2185b',
      pers: ['Sıcak', 'Alaycı', 'Anaç', 'Yalnız'], talk: 'Kısa, takılan cümleler; sana "çocuk" der.',
      about: 'Karşı kapıda oturur. Acil serviste gece vardiyası yapar, eve sabaha karşı döner. Turuncu kedisi Pimiento ondan daha çok sevilir. Güldüğünde bütün apartman duyar; yalnız kaldığında balkonda sessizce sigara içer.',
      heat: 'Olgun ve yönlendiren: "ben göstereyim" der. Gece, yorgunluk ve dar merdivenler onu yumuşatır.',
      knot: 'Ayrıldığı sevgilisi Andrés hâlâ arıyor. Vardiyalar yüzünden kimseye bağlanamıyor.',
      hold: ['Hı-hı, çocuk. Önce şunu bitirelim 😏', 'Sonra konuşuruz… şimdi buradayım.', 'Gülme, ciddiyim 😄', 'Sus da dinle, çocuk.'] },
    salma: { n: 'Salma', age: 31, ic: '☕', role: 'İK uzmanı · Halden & Ward', col: '#37474f',
      pers: ['Disiplinli', 'Keskin', 'Hırslı', 'Gizli oyuncu'], talk: 'Resmî ve net; sonra beklenmedik, kuru espriler.',
      about: 'Şehrin en büyük danışmanlık firmasında işe alım yöneticisi. Takım elbisesi kusursuz, topuzu hiç bozulmaz. Herkes ondan çekinir; o ise çekinmeyen tek kişiyi arar.',
      heat: 'Kontrollü ve kurallı; güç oyunlarını sever. Yasak olan, toplantı arası ve masanın altı onu tutuşturur.',
      knot: 'İş ile özel hayatı asla karıştırmama kuralı. Terfi baskısı.',
      hold: ['Not aldım. Şimdi konuya dönelim.', 'Bunu sonra tartışırız, Taréque.', 'İlginç. Devam.', 'Cümlelerini seç. Dinliyorum.'] },
    elisa: { n: 'Elisa', age: 20, ic: '📐', role: 'Mimarlık · sınıf arkadaşı', col: '#1565c0',
      pers: ['Mükemmeliyetçi', 'Rekabetçi', 'Utangaç', 'İnatçı'], talk: 'Düzgün cümleler, emoji yok; çoğu cümleye "aslında" ile başlar.',
      about: 'Sınıfın birincisi olmaya kararlı. Maketleri milimetrik, notları renk kodlu. Gözlüğünün arkasında kimsenin görmesine izin vermediği bir merak saklıyor.',
      heat: 'Utangaç başlar, keşfettikçe açgözlü olur. "Kimse bilmeyecek" fikri ve övülmek onu çözer; inlemesini saklamaya çalışır.',
      knot: 'Ailesinin beklentileri. Leire\'yi kaybetme korkusu.',
      hold: ['Aslında… bunu sonra konuşsak?', 'Odaklanalım lütfen.', 'Hmm. Tamam. Not ettim.', 'Aslında komikti. Biraz.'] },
    leire: { n: 'Leire', age: 20, ic: '🎉', role: 'Mimarlık · Elisa\'nın en yakın arkadaşı', col: '#d84315',
      pers: ['Dışa dönük', 'Dürtüsel', 'Gösterişçi', 'Sadık'], talk: 'Hızlı, bol emoji, lakap takar: sana "Tarek-o" der.',
      about: 'Her partinin ortasında, her dedikodunun kaynağında. Kırmızı elbiseler, kıvırcık saçlar, yüksek kahkaha. Derslere pek gelmez ama nedense herkes onu sever.',
      heat: 'Ateşli ve risk sever. Alkol, dans ve birinin görme ihtimali onu daha da cesur yapar.',
      knot: 'Ders kaçırıyor, dönemi kaybetme riski var. Elisa ile gizli bir kıskançlık.',
      hold: ['Hahaha Tarek-o 😂 sonra sonra!', 'Konuşma, eğlen 💃', 'Sen ne tatlısın ya 😘', 'Şşş, en güzel yerindeyiz 🤫'] },
    may: { n: 'May', age: 21, ic: '🎨', role: 'Güzel Sanatlar · resim, 3. sınıf', col: '#6a1b9a',
      pers: ['Hayalperest', 'İçe dönük', 'Özgür ruhlu', 'Gözlemci'], talk: 'Yavaş ve şiirsel; uzun sessizlikler bırakır.',
      about: 'Boyalı tulumu ve kömür lekeli parmaklarıyla kampüsün arka bahçesinde çizer. İnsanlara konuşmadan bakar; baktığı şeyi kimsenin görmediği gibi görür.',
      heat: 'Yavaş ve duyusal. Poz vermek, boya ve ışık; çıplaklık onun için sanattır, ama sadece başta.',
      knot: 'Sergi için ilham bulamıyor; kendini göstermekten korkuyor.',
      hold: ['…sonra anlatırsın.', 'Kıpırdama. Işık kaçıyor.', 'Hmm… güzel bir cümle.', 'Şşş. Bak sadece.'] },
    /* ---------- Bölüm II'de gelenler ---------- */
    clara: { n: 'Clara', age: 22, ic: '📷', role: 'Güzel Sanatlar, fotoğraf · May\'in ev arkadaşı', col: '#455a64',
      pers: ['Korumacı', 'Alaycı', 'Provokatif', 'Dürüst'], talk: 'Sert şakalar, "dinle bak" diye başlar; fotoğraf terimleriyle konuşur.',
      about: 'May\'in ev arkadaşı ve en eski dostu. Kısa saç, deri ceket, boynunda hep bir film kamerası. May ne kadar sessizse o kadar gürültülü; herkesi kadrajın içinden görür, kendini hiç kadraja sokmaz.',
      heat: 'Röntgenci ve yönetmen: bakmayı ve baktırmayı sever. Kırmızı ışık, "poz ver" komutu ve May\'in yakınlığı onu çözer.',
      knot: 'Yıllardır May\'e söyleyemediği bir his. Taréque\'yi önce rakip görür.',
      hold: ['Dinle bak, sonra konuşuruz.', 'Kıpırdama, odaklıyorum.', 'Hah. Not aldım. Kontrastsız ama tatlı.', 'Sus da çekeyim.'] },
    viola: { n: 'Viola', age: 22, ic: '🇫🇷', role: 'Fransız Dili ve Edebiyatı · Lyon\'dan Erasmus', col: '#880e4f',
      pers: ['Romantik', 'Flörtöz', 'Şiirsel', 'Anı yaşayan'], talk: 'Aksanlı Türkçe, cümle ortasında Fransızca kelimeler: "mon petit", "voilà".',
      about: 'Lyon\'dan bir dönemlik Erasmus için gelmiş. Bordo bere, uzun trençkot, çantasında hep bir şiir kitabı. Kuralları sevmez, anı sever; Ocak\'ta dönecek ve bunu hiç unutmaz.',
      heat: 'Romantik ve oyunbaz: yavaş öpüşmeler, kelimelerle oyun, şarap ve yağmur.',
      knot: 'Erasmus Ocak\'ta bitiyor. Dönünce her şey biter mi? Bağlanmaktan bu yüzden kaçar.',
      hold: ['Chut… sonra, mon petit.', 'Ah, Türkçen çok tatlı. Devam edelim.', 'Voilà. Şimdi dinle.', 'Bunu Fransızca söyle, belki anlarım 😏'] },
    liberta: { n: 'Liberta', age: 34, ic: '🛋️', role: 'İç mimar · Studio Liberta', col: '#6d4c41',
      pers: ['Özgür ruhlu', 'Kendinden emin', 'Bohem', 'Dokunmacı'], talk: 'Yavaş, kadife bir ses; her şeyi malzemeyle anlatır: "sen meşe gibisin, ham ama sağlam".',
      about: 'Şehrin en çok konuşulan iç mimarlarından. Tulumu, alet kemeri ve saçına sıkıştırdığı kalemiyle Kestane Sokak 14\'ün çatı katını yeniliyor. Gece çalışır; duvarların gece daha dürüst olduğuna inanır.',
      heat: 'Olgun ve dokunmacı: mekânı da bedeni de aynı dille anlar. Boş odalar ve "burada kimse yaşamıyor" fikri onu tutuşturur.',
      knot: 'Yeni boşanmış, kimseye ait olmak istemiyor. Elisa onu idolü olarak görüyor.',
      hold: ['Sabır. Sıva kurumadan dokunulmaz.', 'Hmm. Sonra çizeriz bunu.', 'Ölç önce, sonra konuş.', 'Güzel. Ham ama güzel.'] },
    alisa: { n: 'Alisa', age: 30, ic: '🍷', role: 'Vinoteca\'nın sahibi · Salma\'nın en yakın arkadaşı', col: '#b71c1c',
      pers: ['Oyunbaz', 'Kışkırtıcı', 'Sırdaş', 'Anı yaşayan'], talk: 'Hızlı ve imalı, şarap benzetmeleri ("taze ama gövdeli"); Salma\'ya "Buz Kraliçe" der.',
      about: 'Salma\'nın üniversiteden beri en yakın arkadaşı; şehrin en iyi şarap barı Vinoteca onun. Dalgalı kızıl saçlar, deri ceket ve her şeyi bilen bir gülümseme. Salma\'nın kurallarını yıkmaya kararlı.',
      heat: 'Kışkırtıcı ve sınayan: yasak olan, rekabet ve "bunu ona anlatma" onu cesur yapar.',
      knot: 'Salma\'nın eski nişanlısının hikâyesini bilir. Arkadaşını korumak ile Taréque\'ye duyduğu çekim arasında kalır.',
      hold: ['Tatlım, sonra. Şarabın nefes alsın.', 'Hmm, taze ama gövdeli bir cümle.', 'Bunu Salma\'ya anlatma 😏', 'Sus da tat.'] }
  };

  // 🌡️ arzu basamakları (0–6); yakınlık 0–10
  const HEAT = [['Yabancı', '🧊'], ['Kıvılcım', '✨'], ['Gerilim', '🌡️'], ['Öpücük', '💋'], ['Ön sevişme', '🔥'], ['Sevişme', '💞'], ['Bağ', '🔗']];

  const CH = [
    // cap: bu bölümde arzunun çıkabileceği en yüksek basamak
    { id: 0, n: 'Prolog', t: 'Bavul ve Anahtar', ic: '🧳', sub: 'Carmen\'e varış, ilk komşu, ilk kahve, ilk parti', cap: 2 },
    { id: 1, n: 'Bölüm I', t: 'Yeni Şehir, Yeni Ben', ic: '🌆', sub: 'Eylül: ilk ders, ilk iş, ilk gece kaçamağı', cap: 3 },
    // capc: karakter başına sınır (yeni gelenler bu bölümde en fazla Ön sevişme)
    { id: 2, n: 'Bölüm II', t: 'Vize Haftası', ic: '📚', sub: 'Ekim–Kasım: dört yeni kadın, vizeler ve ilk geceler', cap: 5, capc: { clara: 4, viola: 4, liberta: 4, alisa: 4 } },
    { id: 3, n: 'Bölüm III', t: 'Sergi Gecesi', ic: '🖼️', sub: 'yakında', soon: true }
  ];

  const QUESTS = [
    { id: 'p1', ch: 0, ic: '🧳', t: 'Yeni Ev', who: 'marte', pay: 200, need: [], steps: [{ go: 'benim', t: 'Yeni evine git: Kestane Sokak 14' }, { sc: 'hk_merdiven' }],
      d: 'Şehre gel, Kestane Sokak 14\'ü bul, kutuları dördüncü kata taşı.',
      story: 'Bir bavul, bir sırt çantası ve cebinde bir anahtar. Taréque Carmen\'e mimarlık okumaya geldi ve burada kimseyi tanımıyor. Kiraladığı daire eski bir apartmanın dördüncü katında; asansör yok, merdiven daracık. Karşı kapıda kimin oturduğunu henüz bilmiyor.' },
    { id: 'p2', ch: 0, ic: '☕', t: 'Kafe Karışıklığı', who: 'salma', pay: 200, need: ['p1'], steps: [{ go: 'kafe', t: 'Café Lumière\'e git, sabah kahveni al', h: [6, 13], hn: 'Café Lumière\'in sabah kalabalığı 06:00–13:00 arası' }, { sc: 'hk_yanliskahve' }],
      d: 'Köşedeki Café Lumière\'de sabah kahvesi. Sıra uzun, bardaklar karışık.',
      story: 'İlk sabah, ilk kahve. Café Lumière mahallenin en kalabalık kafesi; kuyrukta takım elbiseli, telefonda sert konuşan bir kadın var. Bardaklar karıştığında Taréque\'nin hayatı da biraz karışacak.' },
    { id: 'p3', ch: 0, ic: '🎓', t: 'Oryantasyon', who: 'leire', pay: 200, need: ['p2'], steps: [{ go: 'okul', t: 'Üniversiteye git: kayıt ve oryantasyon' }, { sc: 'hk_oryantasyon' }],
      d: 'Fakülteye kayıt yaptır, akşam oryantasyon partisine git.',
      story: 'Carmen Üniversitesi Mimarlık Fakültesi. Gündüz formlar ve imzalar, akşam bahçede ışıklar ve ucuz sangria. Sınıf arkadaşlarıyla ilk kez tanışacak: biri kurallara, biri kuralsızlığa âşık.' },
    { id: 'i1', ch: 1, ic: '📐', t: 'İlk Ders', who: 'elisa', pay: 300, need: ['p3'], steps: [{ go: 'okul', t: 'Fakülteye git: ilk stüdyo dersi', h: [8, 18], hn: 'Dersler 08:00–18:00 arası' }, { sc: 'hk_maket' }],
      d: 'İlk stüdyo dersi: Elisa ile aynı masa, aynı proje.',
      story: 'Profesör Ines Varga öğrencileri çiftlere ayırır ve Taréque\'nin ortağı sınıfın en titiz öğrencisi olur. Elisa\'nın kibrit çöplerinden yaptığı köprü milimetrik; dokunmaya bile korkulacak kadar.' },
    { id: 'i2', ch: 1, ic: '💼', t: 'Kahve ve CV', who: 'salma', pay: 500, need: ['i1'], steps: [{ go: 'ofis', t: 'Halden & Ward\'a git: 23. kat, mülakat', h: [9, 19], hn: 'Mülakat mesai saatinde: 09:00–19:00' }, { sc: 'hk_gorusme' }],
      d: 'Halden & Ward, 23. kat, pazartesi 17:00. Geç kalma.',
      story: 'Salma\'nın kartı hâlâ cebinde: Halden & Ward, İnsan Kaynakları. Yarı zamanlı bir iş, bir maaş ve masanın karşısında, bacak bacak üstüne atmış, gözünü kırpmayan bir kadın.' },
    { id: 'i3', ch: 1, ic: '🐈', t: 'Duvarın Öbür Yanı', who: 'marte', pay: 300, need: ['i1'], steps: [{ go: 'benim', t: 'Gece evine dön', h: [22, 5], hn: 'Marte vardiyadan gece döner: 22:00\'den sonra gel' }, { sc: 'hk_pimiento' }, { sc: 'hk_balkon' }],
      d: 'Gece yarısı kapın çalınıyor: Pimiento kaçtı.',
      story: 'Duvarlar ince; Taréque her gece Marte\'nin vardiyadan dönüşünü, duşunu, kedisiyle konuşmasını duyuyor. Bu gece ise kapısı yumruklanıyor. Pimiento kaçtı ve Marte\'nin üstünde sadece bir gecelik var.' },
    { id: 'i4', ch: 1, ic: '🎨', t: 'Bahçedeki Ressam', who: 'may', pay: 300, need: ['i1'], steps: [{ go: 'park', t: 'Kampüs parkına git, ders notlarını oku', h: [10, 19], hn: 'May gün ışığında çizer: 10:00–19:00' }, { sc: 'hk_eskiz' }],
      d: 'Kampüsün arka bahçesinde biri seni çiziyor.',
      story: 'Güzel Sanatlar binasının gölgesinde bir çınar ağacı. Taréque ders notlarını okurken birinin ona baktığını hisseder. Bakış değil aslında; çizgi. Biri onu çiziyor.' },
    { id: 'i5', ch: 1, ic: '🍸', t: 'İlk Cuma', who: 'leire', pay: 500, need: ['i2', 'i3', 'i4'], steps: [{ go: 'pub', t: 'Bar Medusa\'ya git (Pub)', h: [21, 4], hn: 'Leire 22:00 dedi: 21:00\'den sonra gel' }, { sc: 'hk_ilkcuma' }, { sc: 'hk_tuvalet' }],
      d: 'Leire herkesi Bar Medusa\'ya topluyor. Gelmeyen dönemi tekrar etsin.',
      story: 'Carmen\'deki ilk haftanın sonu. Leire grup sohbetine yazdı, Elisa itiraz etti, May sessizce "belki" dedi. Bar Medusa\'da kırmızı neonlar, "hiç yapmadım" oyunu ve arkada, kilitlenebilen bir kapı.' },

    /* ---------- Bölüm II: Vize Haftası. ii1 açılış; sonra üç kol: 🏫 okul (ii2 → ii3 → ii4), 💼 iş (ii5 → ii6), 🏠 ev ve sanat (ii7 → ii8); ii9 hepsi bitince ---------- */
    { id: 'ii1', ch: 2, ic: '🇫🇷', t: 'Bonjour, Carmen', who: 'viola', pay: 400, need: ['i5'],
      steps: [{ go: 'okul', t: 'Fakülteye git: seçmeli Fransızca', h: [8, 18], hn: 'Ders 08:00–18:00 arası' }, { sc: 'hk_bonjour' }, { go: 'apt', t: 'Viola\'nın yurduna git (Apartman)', h: [19, 1], hn: 'Viola akşam bekliyor: 19:00\'dan sonra' }, { sc: 'hk_kelime' }],
      d: 'Seçmeli Fransızca dersinde bir konuşma eşi: Lyon\'dan gelen Viola.',
      story: 'Ekim. Vizelere üç hafta var ve Taréque\'nin programında boş bir seçmeli ders kalmış: Fransızca A1. Sınıfın kapısından bordo bereli, trençkotlu bir kız giriyor ve listede onun adının üstüne kalemle bir kalp çiziyor.' },
    { id: 'ii2', ch: 2, ic: '🛋️', t: 'Çatı Katı', who: 'liberta', pay: 400, need: ['ii1'],
      steps: [{ go: 'benim', t: 'Gece evine dön: tavandan matkap sesi', h: [22, 3], hn: 'Matkap gece yarısı çalışıyor: 22:00\'den sonra' }, { sc: 'hk_matkap' }, { sc: 'hk_olcu' }],
      d: 'Üst kattaki boş çatı katında gece yarısı biri duvar deliyor.',
      story: 'Kestane Sokak 14\'ün çatı katı yıllardır boştu. Bu hafta her gece yarısı tavandan matkap sesi geliyor; Marte süpürge sapıyla tavana vuruyor, ses susmuyor. Taréque yukarı çıkmaya karar veriyor.' },
    { id: 'ii3', ch: 2, ic: '📚', t: 'Sabaha Kadar', who: 'elisa', pay: 400, need: ['ii2'],
      steps: [{ go: 'okul', t: 'Gece fakülte kütüphanesine git', h: [20, 3], hn: 'Elisa kütüphanede gece çalışıyor: 20:00\'den sonra' }, { sc: 'hk_gececalisma' }],
      d: 'Vize öncesi son gece: Elisa\'yla kütüphanede. Leire yine gelmedi.',
      story: 'Vizeye iki gün kaldı ve Elisa\'nın bir planı var: sabaha kadar yapı statiği. Leire söz verdi, gelmedi. Kütüphane gece yarısı kapanıyor ama Elisa\'nın bir anahtarı var ve nereden bulduğunu söylemiyor.' },
    { id: 'ii4', ch: 2, ic: '🆘', t: 'Leire Kayıp', who: 'leire', pay: 500, need: ['ii3'],
      steps: [{ go: 'apt', t: 'Leire\'nin dairesine git (Apartman)', h: [7, 13], hn: 'Vize sabahı: 07:00–13:00' }, { sc: 'hk_leirebul' }, { go: 'okul', t: 'Fakülteye git: Prof. Varga\'nın odası', h: [9, 18], hn: 'Mesai saati: 09:00–18:00' }, { sc: 'hk_hocaikna' }],
      d: 'Leire vizeyi kaçırdı. Onu bul, sonra hocayı ikna et.',
      story: 'Vize sabahı Leire sınava gelmiyor, telefonu kapalı. Elisa tek kelimelik bir mesaj atıyor: "BUL." Leire dönemi kaybederse bursu da gider; ve Profesör Varga\'nın telafiye hiç izin vermediği söylenir.' },
    { id: 'ii5', ch: 2, ic: '🌃', t: 'Fazla Mesai', who: 'salma', pay: 700, need: ['ii1'],
      steps: [{ go: 'ofis', t: 'Halden & Ward\'a git: kriz var', h: [19, 24], hn: 'Kriz mesaiden sonra: 19:00–24:00' }, { sc: 'hk_mesai' }],
      d: 'Bir sunum çöktü. Salma herkesi eve yolladı; seni hariç.',
      story: 'Perşembe akşamı Salma\'dan tek satırlık bir mesaj: "Ofise gel. Şimdi." Yarın sabah büyük bir müşteri sunumu var ve slaytlar felaket. Bütün kat boşalıyor; 23. katta sadece iki masa lambası yanık kalıyor.' },
    { id: 'ii6', ch: 2, ic: '🥐', t: 'Kahvaltıda Misafir', who: 'alisa', pay: 500, need: ['ii5'],
      steps: [{ go: 'ev3', t: 'Salma\'nın evine git (Kırmızı Ev)', h: [7, 12], hn: 'Cumartesi kahvaltısı: 07:00–12:00' }, { sc: 'hk_kahvalti' }, { go: 'pub', t: 'Vinoteca\'ya git (Pub): şarap tadımı', h: [20, 3], hn: 'Vinoteca akşam açılır: 20:00\'den sonra' }, { sc: 'hk_tadim' }],
      d: 'Salma\'nın mutfağında anahtarla açılan bir kapı: Alisa.',
      story: 'Salma bir gece Taréque\'yi evine götürdü ve hiçbir şey söylemedi. Sabah o duştayken kapı anahtarla açılıyor. Elinde kruvasanlar ve bir torba dedikoduyla Salma\'nın en yakın arkadaşı, Vinoteca\'nın sahibi Alisa.' },
    { id: 'ii7', ch: 2, ic: '🚑', t: 'Gece Vardiyası', who: 'marte', pay: 400, need: ['ii1'],
      steps: [{ go: 'hastane', t: 'Şafakta hastaneye git, Marte\'yi al', h: [5, 9], hn: 'Marte\'nin vardiyası 06:00\'da biter: 05:00–09:00' }, { sc: 'hk_vardiyadonus' }],
      d: 'Marte\'den gece yarısı mesaj: "Kötü bir gece. Gelebilir misin?"',
      story: 'Acil serviste uzun bir gece. Marte gece yarısı tek bir mesaj atıyor ve sonra hiç yazmıyor. Taréque şafakta hastanenin önüne gittiğinde onu sigara içmeden, sadece dururken buluyor. Kapının önünde ise başka biri bekliyor olacak.' },
    { id: 'ii8', ch: 2, ic: '📷', t: 'Karanlık Oda', who: 'may', pay: 500, need: ['ii7'],
      steps: [{ go: 'sahil', t: 'Sahile git: May ve Clara', h: [10, 19], hn: 'Gün ışığında çekim: 10:00–19:00' }, { sc: 'hk_ilhamturu' }, { go: 'studyo', t: 'Gece Clara\'nın karanlık odasına git (Stüdyo)', h: [20, 3], hn: 'Banyo gece yapılır: 20:00\'den sonra' }, { sc: 'hk_karanlikoda' }],
      d: 'May\'in tuvali hâlâ boş. Ev arkadaşı Clara\'nın bir fikri var.',
      story: 'Sergiye üç hafta kala May\'in tuvali hâlâ bomboş. Ev arkadaşı fotoğrafçı Clara bir gün şehri gezip ilham avlamayı öneriyor: kumsal, yağmur, sokaklar. Gece de kırmızı ışıklı karanlık odada filmler banyo edilecek; ve fotoğraflar bazen insanların saklamak istediklerini de gösterir.' },
    { id: 'ii9', ch: 2, ic: '🥂', t: 'Vize Gecesi', who: 'leire', pay: 800, need: ['ii4', 'ii6', 'ii8'],
      steps: [{ go: 'pub', t: 'Vinoteca\'ya git (Pub): vize kutlaması', h: [21, 4], hn: 'Kutlama 22:00\'de: 21:00\'den sonra gel' }, { sc: 'hk_kutlama' }],
      d: 'Vizeler bitti. Leire herkesi topluyor: herkesi.',
      story: 'Vizeler bitti ve Leire telafiyi geçti. Kutlama Alisa\'nın Vinoteca\'sında: Leire, Elisa, May, Clara, Viola ve barın arkasında Alisa. İlk kez bütün çevren aynı odada. Herkes kimin kime nasıl baktığını görüyor ve gece bitmeden telefonun birkaç kez titreyecek.' }
  ];

  const SCENES = {
    /* ---------- Prolog ---------- */
    hk_merdiven: { ic: '🪜', t: 'Dar Merdiven', who: ['marte'], at: '🪜 Apartman merdiveni', time: 'Akşamüstü', bg: '#4e342e, #a1887f', s: [
      ['n', 'Kestane Sokak 14. Dar, eski bir apartman; sarmaşıklı cephe, kırık bir zil. Asansör yok. Senin dairen dördüncü katta.'],
      ['n', 'Kutuları taşımaya başlarsın. Üçüncü seferde kolların titrer; dördüncü katın sahanlığında en ağır kutu elinden kayar.'],
      ['n', 'Kutu yere değmeden bir çift el onu yakalar. Önünde eşofman altı ve bol bir tişörtle bir kadın duruyor: saçları dağınık bir topuz, gözlerinin altında gece vardiyasının yorgunluğu.'],
      ['marte', 'Hop! Kitap mı taşıyorsun, taş mı?'],
      ['marte', 'Ben Marte. Karşı kapı. Sen de yeni çocuksun herhalde.'],
      { q: 'Ne dersin?', o: [
        { x: 'Çocuk değilim, Taréque. Memnun oldum.', a: { marte: 1 }, r: [['marte', 'Taréque… tamam, Taréque. Ama kutuyu ben taşıyorum, çocuk.']] },
        { x: 'Kurtarıcım! Sana bir kahve borçluyum.', a: { marte: 1 }, h: { marte: 1 }, f: 'marte_kahve', r: [['marte', 'Kahveyi unutmam, ona göre. Vardiyadan çıkınca kapını çalarım.']] },
        { x: 'Gülümse, kutuyu geri almak için uzan', h: { marte: 1 }, r: [['n', 'Kutuya uzandığında parmakların onunkilere değer. Bırakmaz; bir an ikiniz de kutuyu tutarsınız. "Güçlü kollar," der, "ama dengesiz."']] }] },
      ['n', 'Son kutuyu birlikte çıkarırsınız. Merdiven o kadar dar ki yan yana sığmıyorsunuz; Marte önden çıkar, sen arkasından. Her basamakta eşofmanın altındaki kalçası tam göz hizanda sallanıyor.'],
      { ev: 'Stair Tease', x: 'Merdivende önden çıkıyor', h: { marte: 1 }, r: [['n', 'Marte bir basamak yukarıda durup bilerek yavaşlar. Kalçası yüzünün hizasında, eşofmanın kumaşı her adımda gerilir; kutuyu kalçasının üstüne dayayıp omzunun üstünden sana bakar.'], ['marte', 'Acele etme. Manzaranın tadını çıkar, çocuk 😏']] },
      ['n', 'Sahanlıkta birden döner ve seni yakalar. Bakışlarının nerede olduğunu gördü.'],
      ['marte', 'Manzara güzel mi bari?'],
      { q: 'Yakalandın.', o: [
        { x: 'Çok güzel.', h: { marte: 1 }, r: [['marte', 'Hah! Dürüst. Beğendim.'], ['n', 'Yanından geçerken göğsü bir an sırtına yaslanır; dar sahanlıkta başka yer yok. Kahve ve hastane sabunu kokuyor.']] },
        { x: 'Pardon… kutuya bakıyordum.', a: { marte: 1 }, r: [['marte', 'Tabii tabii. Kutuya.'], ['n', 'Gülerek kapısını açar.']] }] },
      ['n', 'Kapının aralığından turuncu bir kedi başını uzatır, sana tepeden bakar.'],
      ['marte', 'Bu Pimiento. Kapıyı açık bırakma, kaçmaya bayılır.'],
      ['marte', 'Bir de… duvarlar incedir, haberin olsun. Gece gürültü yaparsan duyarım. Ben yaparsam… sen duyarsın.'],
      ['n', 'Kapısını kapatır. Arkasından bir kahkaha, sonra duş sesi. Yeni dairende ilk gecen ve duvarın öbür yanında su akıyor.'],
      { fx: { a: { marte: 1 } } }] },

    hk_yanliskahve: { ic: '☕', t: 'Yanlış Kahve', who: ['salma'], at: '☕ Café Lumière', time: 'Sabah 08:40', bg: '#3e2723, #8d6e63', s: [
      ['n', 'Ertesi sabah köşedeki Café Lumière\'e girersin. Kuyruk uzun. Önünde krem rengi takım elbiseli, topuzu kusursuz bir kadın telefonda kısa ve sert konuşuyor.'],
      ['salma', 'Hayır. Toplantı dokuzda. Dokuzu bir geçe değil. Teşekkürler.'],
      ['n', 'Barista iki kahveyi aynı anda bırakır: biri yulaf sütlü latte, biri sade filtre. İkiniz de aynı bardağa uzanırsınız.'],
      { q: 'Bardak ikinizin elinde.', o: [
        { x: 'Buyurun, sizinki olsun.', a: { salma: 1 }, r: [['salma', 'Kibarlık. Bu şehirde nadir bulunur.']] },
        { x: 'Latte benim. Ama sizin için yalan söyleyebilirim.', h: { salma: 1 }, r: [['salma', 'Cesur. Yanlış, ama cesur.'], ['n', 'Dudağının kenarı bir milim kıpırdar. Onun için bu bir kahkaha sayılır.']] }] },
      ['n', 'Bardaklar ayrılırken kapak yerinden fırlar; kahve beyaz gömleğinin göğsüne sıçrar. İnce kumaş bir anda şeffaflaşır, altındaki dantel sütyenin çizgisi belirir.'],
      ['salma', '…Harika. Dokuzda sunumum var.'],
      { q: 'Ne yaparsın?', o: [
        { x: 'Peçeteyle yardım etmeyi teklif et', h: { salma: 1 }, f: 'salma_dokun', r: [['n', 'Peçeteyi uzatırsın; almaz. Bileğini tutar ve elini peçeteyle birlikte göğsündeki lekeye bastırır.'], ['salma', 'Bastır. Sürtme, yayılır.'], ['n', 'Kalbinin atışını avucunda hissedersin. Üç saniye. Sonra elini çeker, sanki hiçbir şey olmamış gibi.']] },
        { x: 'Ceketini omzuna koy', a: { salma: 2 }, f: 'salma_ceket', r: [['n', 'Ceketini omzuna bırakırsın. Bir an şaşırır, sonra ceketi lekenin üstüne kadar iliklerinden kapatır.'], ['salma', 'Bunu geri getirmek zorunda kalacağım. Farkındasın, değil mi?']] }] },
      ['n', 'Masana döndüğünde açık bıraktığın dizüstünde CV\'n görünüyor: "Mimarlık 1. sınıf, yarı zamanlı iş arıyor." Salma ekrana uzun bir bakış atar.'],
      ['salma', 'Halden & Ward, İnsan Kaynakları. Salma.'],
      ['n', 'Kartını gömleğinin cebine kendisi yerleştirir ve parmağıyla iki kez, yavaşça vurur.'],
      ['salma', 'Pazartesi, 17:00. Geç kalma. Geç kalanları sevmem.'],
      ['n', 'Topukları kafenin taşlarında tıkırdayarak çıkar. Kartın arkasında kurşun kalemle yazılmış: "Kahve borcu: 1."']] },

    hk_oryantasyon: { ic: '🎉', t: 'Oryantasyon Gecesi', who: ['elisa', 'leire'], at: '🎓 Mimarlık Fakültesi bahçesi', time: 'Gündüz → gece', bg: '#311b92, #d84315', s: [
      ['n', 'Carmen Üniversitesi, Mimarlık Fakültesi. Kayıt masasında gözlüklü, saçlarını sıkı bir at kuyruğu yapmış bir kız formları kontrol ediyor; her imzayı cetvelle hizalıyor.'],
      ['elisa', 'Doğum tarihini yanlış kutuya yazmışsın. Aslında… sorun değil. Düzelttim.'],
      ['m', 'Teşekkürler. Ben Taréque.'],
      ['elisa', 'Elisa. Aynı sınıftayız. Sanırım.'],
      ['n', 'Formu uzatırken göz göze gelirsiniz. Hemen bakışını kaçırır; kulaklarının ucu kızarmış.'],
      ['n', 'Akşam fakültenin bahçesinde oryantasyon partisi: ağaçlara asılı ışıklar, yüksek müzik, plastik bardaklarda ucuz sangria.'],
      ['n', 'Kalabalığın içinden kırmızı elbiseli, kıvırcık saçlı bir kız doğruca sana yürür; elinde iki bardak.'],
      ['leire', 'Yeni çocuk! Sen şu yeni çocuksun. Ben Leire. Bu senin. İç. Şimdi dans. 💃'],
      { q: 'Leire elini uzatıyor.', o: [
        { x: '💃 Dans et', h: { leire: 2 }, r: [['n', 'Seni pistin ortasına çeker. Şarkı yavaşlamaz ama o yavaşlar: sırtını göğsüne yaslar, kalçasını ritimle sana bastırır. Elbisesinin ince kumaşından tenini hissediyorsun.'], ['leire', 'Rahatla, Tarek-o. Isırmam. İlk gün.'], { ev: 'Dance Floor Grind', x: 'Pistte ona ayak uydur', h: { leire: 1 }, r: [['n', 'Ritim hızlanınca Leire tamamen sana yaslanır; kalçasını önce yavaşça, sonra daha sert sana bastırır. Bahçenin ortasında kimse fark etmiyor. Ya da herkes fark ediyor ve kimsenin umurunda değil.'], ['leire', 'Hissediyorum seni, Tarek-o 😈 İlk gün için fena değil.']] }] },
        { x: '🍷 Önce içkini bitir', a: { leire: 1 }, r: [['leire', 'Sıkıcı! Ama tatlı sıkıcı. 😏'], ['n', 'Kendi bardağını tek dikişte bitirir, sonra seninkini de. Dudağında bir damla sangria kalır; diliyle yavaşça yalar.']] }] },
      ['n', 'Gözünün ucuyla Elisa\'yı görürsün: bahçenin kenarında, elinde bir kitap. Partiye gelmiş ama gelmemiş gibi. Kitaba değil, size bakıyor.'],
      ['leire', 'Ah, Elisa! En yakın arkadaşım. Partide kitap okuyan tek insan. 🙄'],
      { q: 'Ne yaparsın?', o: [
        { x: 'Elisa\'yı da çağır', a: { elisa: 1, leire: 1 }, r: [['n', 'Elisa gönülsüzce gelir. Leire üçünüzü bir halkaya sokar; bir dönüşte Elisa\'nın eteği bacağına sürtünür. Kızarır, eteğini düzeltir ama halkadan çıkmaz.'], ['elisa', 'Aslında dans etmem. Bu… bir istisna.']] },
        { x: 'Leire\'yle dansa devam et', h: { leire: 1 }, f: 'elisa_kiskanc', r: [['n', 'Leire kollarını boynuna dolar. Elisa kitabını kapatıp gider; kapıda bir kez dönüp bakar.']] }] },
      ['n', 'Gece yarısı Leire telefonunu elinden alır, kendi numarasını kaydeder: "Leire 💋🔥".'],
      ['leire', 'Pazartesi ilk ders. Elisa\'nın yanına otur. Sonra bana teşekkür edersin. 😘']] },

    /* ---------- Bölüm I ---------- */
    hk_maket: { ic: '📐', t: 'Kırık Köprü', who: ['elisa'], at: '📐 Stüdyo, masa 4', time: 'Pazartesi 10:00', bg: '#0d47a1, #90caf9', s: [
      ['n', 'İlk stüdyo dersi. Profesör Ines Varga sınıfa kısa bir bakış atar: "Çiftler halinde çalışacaksınız. Elisa, Taréque. Masa dört."'],
      ['elisa', 'Aslında yalnız çalışmayı tercih ederim. Ama… peki.'],
      ['n', 'Elisa kendi getirdiği maketi masaya koyar: kibrit çöplerinden bir köprü, milimetrik. Sen çantanı masaya bırakırken askısı maketin köşesine takılır.'],
      ['n', 'Çıt. Köprünün bir ayağı kırılır.'],
      ['elisa', '…'],
      { q: 'Elisa donup kalmış.', o: [
        { x: 'Özür dile, onarmayı teklif et', a: { elisa: 2 }, r: [['elisa', 'Yapıştırıcı çantamda. Ben tutarım, sen yapıştırırsın. Ve titreme.']] },
        { x: 'Şaka yap: "Yıkım da bir tasarımdır."', h: { elisa: 1 }, r: [['elisa', 'Bu… komik değil.'], ['n', 'Ama dudağı kıpırdıyor. Kahkahasını tutmak için alt dudağını ısırıyor ve bunu fark etmeni hiç istemiyor.']] }] },
      ['n', 'Maketin üstüne eğilirsiniz. Elisa parçayı tutar, sen yapıştırırsın. Aynı cetvele aynı anda uzanırsınız; parmakların parmaklarının üstüne kapanır. Çekmez.'],
      ['n', 'Eğildikçe ekose eteği uyluklarının yarısına kayıyor, gözlüğü burnunun ucuna iniyor. Nefesini yanağında hissedecek kadar yakınsınız.'],
      ['elisa', 'Aslında… yakın durma demeyecektim. Sadece… ışığı kesiyorsun.'],
      { q: 'Ne yaparsın?', o: [
        { x: 'Biraz geri çekil', a: { elisa: 1 }, r: [['n', 'Geri çekilirsin. Rahatladığını sanırsın; ama bir dakika sonra sandalyesini fark ettirmeden sana doğru kaydırır.']] },
        { x: 'Olduğun yerde kal', h: { elisa: 1 }, r: [['n', 'Kalırsın. Bir şey demez. Sadece yapıştırıcının kapağını açamıyor; parmakları titriyor. Kapağı sen açıp avucuna bırakırsın. Avucu ılık ve nemli.']] }] },
      ['n', 'Ders bitince Elisa çantasını toplar, kapıda durur.'],
      ['elisa', 'Teslim üç hafta sonra. Kütüphanede çalışırız. Perşembe. Geç kalma.'],
      ['n', 'Koridorda Leire\'den mesaj gelir: "Eee? 😏 Maket mi kırdın, kalp mi?"']] },

    hk_gorusme: { ic: '💼', t: 'Mülakat', who: ['salma'], at: '🏢 Halden & Ward, 23. kat', time: 'Pazartesi 16:58', bg: '#212121, #78909c', s: [
      ['n', 'Halden & Ward, 23. kat. Saat 16:58. Cam duvarlı ofisler, beyaz mermer; koridorda yalnızca topuk sesleri.'],
      { when: { f: 'salma_ceket' }, s: [['salma', 'Ceketin. Kuru temizlemeden geldi. Borcum kalmadı.'], ['n', 'Ceketi uzatırken fark edersin: üstünde onun parfümü kalmış.']],
        e: [['salma', 'Gömleğim kurtuldu, merak ediyorsan. Bakalım sen kurtulabilecek misin.']] },
      ['n', 'Toplantı odası. Uzun bir masa, karşılıklı iki sandalye. Salma bacak bacak üstüne atar; dar etek dizinin üstünde gerilir.'],
      ['salma', 'Neden Halden & Ward?'],
      { q: 'Cevabın?', o: [
        { x: 'Öğrenmek istiyorum. Maaş ikinci planda.', a: { salma: 1 }, r: [['salma', 'Klişe. Ama gözlerin yalan söylemiyor.']] },
        { x: 'Kahve borcumu ödemek için.', h: { salma: 1 }, r: [['salma', 'Burada flörtle iş bulunmaz, Taréque.'], ['n', 'Söylerken kaleminin ucunu dudağına bastırır. Not almıyor.']] }] },
      ['n', 'Sorular hızlı ve keskin gelir. Bir ara masanın altında bir şey bacağına değer: Salma\'nın topuklu ayakkabısının burnu, baldırından yavaşça yukarı çıkıyor.'],
      ['n', 'Yüzünde tek bir kas oynamıyor. Bir sonraki soruyu okuyor.'],
      { q: 'Topuk hâlâ bacağında.', o: [
        { x: 'Hiçbir şey olmamış gibi cevap ver', a: { salma: 1 }, h: { salma: 1 }, f: 'salma_sakin', r: [['n', 'Sesin titremez. Topuk dizine kadar çıkar, sonra çekilir. Salma kâğıdına bir şey yazar: ilk kez.'], ['salma', 'Soğukkanlı. İyi.']] },
        { x: 'Göz göze gel ve gülümse', h: { salma: 2 }, r: [['salma', '…Yanlışlıkla oldu.'], ['n', 'Ama ayağını çekmez. Bir saniye daha kalır, sonra yavaşça, bir okşayış gibi iner.']] }] },
      ['salma', 'Yarı zamanlı stajyer. Salı ve perşembe, 15:00–19:00. Doğrudan bana bağlı çalışacaksın.'],
      ['n', 'Kalkar, elini uzatır. Sıkarken bir an fazla tutar.'],
      ['salma', 'Bir kuralım var: bu binada ben Salma Hanım\'ım. Dışarıda… dışarısı yok. Anlaşıldı mı?'],
      ['m', 'Anlaşıldı, Salma Hanım.'],
      ['salma', 'Güzel. Bunu söylemen hoşuma gitti.']] },

    hk_pimiento: { ic: '🐈', t: 'Kayıp Kedi', who: ['marte'], at: '🧺 Bodrum çamaşırhanesi', time: 'Gece 01:40', bg: '#1a237e, #5c6bc0', s: [
      ['n', 'Gece 01:40. Kapın yumruklanır. Açtığında Marte: ince askılı bir gecelik, üstünde hırka, ayakları çıplak, telaşlı.'],
      ['marte', 'Pimiento kaçtı! Kapıyı açık bırakmışım, vardiyadan yeni geldim, kafam yok…'],
      { q: 'Ne yaparsın?', o: [
        { x: 'Feneri al, merdivenlere koş', a: { marte: 1 } },
        { x: 'Önce sakinleştir: ellerini tut', h: { marte: 1 }, r: [['n', 'Ellerini tutarsın. Buz gibi. Bir an gözlerini kapatır, derin bir nefes alır.'], ['marte', 'Tamam. Tamam. Sen iyi bir çocuksun.']] }] },
      ['n', 'Merdivenleri, çatıyı, bodrumu ararsınız. Çamaşırhanede makinelerin arkasından bir miyavlama gelir. Marte dizlerinin üstüne çöker, makinenin arkasına uzanır; gecelik kalçalarının üstüne sıyrılır.'],
      ['marte', 'Gördüm onu! Kolum yetmiyor… Gel, belimi tut, çekersin.'],
      { q: 'Marte dar boşluğa sıkışmış.', o: [
        { x: 'Belinden tut', h: { marte: 1 }, r: [['n', 'Ellerini beline koyarsın. Gecelik ince, teni sıcak.'], ['marte', 'Daha aşağıdan… kalçamdan tut, kaymasın.'], ['n', 'Duymadığını sanarak kıkırdar. Kurtarma biraz uzun sürer. Belki de gereğinden uzun.']] },
        { x: 'Makineyi itmeyi öner', a: { marte: 1 }, r: [['n', 'Makineyi birlikte itersiniz; omuz omuza, nefes nefese. Marte\'nin göğsü koluna yaslanıyor. Sonunda Pimiento fırlar ve doğruca kucağına atlar.']] }] },
      ['n', 'Pimiento kurtarılır. Marte kediyi göğsüne bastırıp sana döner. Gözleri nemli.'],
      ['marte', 'Teşekkür ederim. Balkona gel. Bir sigara içeceğim, sonra uyuyacağım. Belki.']] },

    hk_balkon: { ic: '🌇', t: 'Alçak Duvar', who: ['marte'], at: '🌇 Bitişik balkonlar', time: 'Gece 02:30', bg: '#0d1b2a, #415a77', s: [
      ['n', 'Marte\'nin balkonu seninkine bitişik; arada sadece diz boyu, alçak bir duvar var. Şehrin ışıkları, uzakta bir siren.'],
      ['marte', 'Acildeyim. Bütün gece insanları ayakta tutuyorum, sonra eve geliyorum ve… kimse yok. Kedi var.'],
      { q: 'Ne dersin?', o: [
        { x: 'Artık bir komşun var.', a: { marte: 2 }, r: [['marte', 'Komşu. Hı-hı.'], ['n', 'Sigarasını sana uzatır. Filtrede dudaklarının sıcaklığı hâlâ duruyor.']] },
        { x: 'Neden kimse yok?', a: { marte: 1 }, f: 'marte_eski', r: [['marte', 'Uzun hikâye. Biri vardı. Artık yok. Ama hâlâ arıyor.']] }] },
      ['n', 'Rüzgâr geceliğinin eteğini havalandırır; tutmaz. Hırkasını çıkarıp duvara bırakır, omuzları çıplak kalır.'],
      ['marte', 'Üşüdüm. Ama içeri girmek istemiyorum.'],
      { when: { h: ['marte', 2] }, s: [
        ['n', 'Duvarın üstünden ona yaklaşırsın. Başını omzuna yaslar. Sonra kaldırır. Yüzleriniz bir nefes uzaklıkta.'],
        { q: 'Marte gözlerini kapatıyor.', o: [
          { x: '💋 Öp', h: { marte: 1 }, r: [['n', 'Dudakları yumuşak; sigara ve nane. Bir eli enseni bulur, seni kendine çeker; geceliğin ince kumaşının altında göğsü göğsüne bastırıyor…'], { ev: 'Kissing', x: 'Öpücüğü uzat', h: { marte: 1 }, r: [['n', 'Öpücüğü bırakmazsın. Marte dudaklarını aralar, dilinin ucu dudağını bulur; eli ensende kenetlenir ve öpücük gittikçe açlaşır. Gecelik omzundan kayar, tutmaz.'], ['marte', 'Mmm… bunu kaç zamandır istiyordum, biliyor musun?']] }] },
          { x: 'Bekle, o öpsün', a: { marte: 1 }, h: { marte: 1 }, r: [['n', 'Beklersin. O da bekler. Sonunda gülümser ve dudaklarını dudağının kenarına bastırır; sonra ortasına. Parmakları tişörtünün altına kayıyor…']] }] },
        { fx: { hm: { marte: 3 } } }],
        e: [['n', 'Omzunu omzuna yaslar. Bir süre konuşmadan şehri izlersiniz. Sonra yüzünü sana çevirir; dudakları aralık, bir şey söyleyecek gibi…'], { fx: { h: { marte: 1 } } }] },
      ['cut', 'İçeride Marte\'nin telefonu çalıyor. Ekranda tek bir isim: "Andrés".'],
      ['marte', '…Açmayacağım. Ama açmayınca da susmayacak.'],
      ['marte', 'İyi geceler, Taréque. Bu… olmadı. Henüz.'],
      ['n', 'Balkon kapısı kapanır. Duvarın öbür yanında telefon susana kadar çalar. Hırkası duvarda unutulmuş; hâlâ sıcak.'],
      { fx: { f: 'marte_kesik' } }] },

    hk_eskiz: { ic: '🎨', t: 'Kömür ve Işık', who: ['may'], at: '🌳 Arka bahçe → 🎨 Atölye', time: 'Öğleden sonra', bg: '#4a148c, #ce93d8', s: [
      ['n', 'Kampüsün arka bahçesi. Güzel Sanatlar binasının gölgesinde bir çınar. Bankta ders notlarını okuyorsun.'],
      ['n', 'Bir süre sonra birinin sana baktığını hissedersin. Karşı bankta, kucağında eskiz defteri, boyalı tulumlu bir kız. Kalemi durmadan oynuyor; gözleri sende.'],
      { q: 'Ne yaparsın?', o: [
        { x: 'Yanına git, defterine bak', h: { may: 1 }, r: [['n', 'Defteri kapatmaya çalışır ama yetişemez. Sayfada sen varsın; ama tişörtsüz. Omuzların ve göğsün özenle gölgelenmiş.'], ['may', '…Hayal gücü. Sanatçının hakkı.']] },
        { x: 'Pozunu bozma, okumaya devam et', a: { may: 1 }, r: [['n', 'Kımıldamazsın. Yirmi dakika sonra yanına gelir, sayfayı yırtıp eline verir: sen, bankta, ama bütün çizgilerin daha yumuşak.'], ['may', 'Kımıldamadın. Çok az insan kımıldamaz.']] }] },
      ['may', 'May. Güzel Sanatlar, resim. Üçüncü yıl.'],
      ['may', 'Bir sergi hazırlıyorum. Bedenler… ve ışık. Modele ihtiyacım var. Para veremem. Ama kahve yapabilirim.'],
      ['n', 'Konuşurken parmak uçlarındaki kömür tozu yanağına bulaşıyor; farkında değil.'],
      { q: 'May\'in teklifi', o: [
        { x: 'Kabul et', a: { may: 1 }, f: 'may_model' },
        { x: 'Önce yanağındaki kömürü sil', h: { may: 1 }, f: 'may_model', r: [['n', 'Başparmağınla yanağını silersin. Gözlerini kapatır; geri çekilmez. Sonra başparmağındaki kömür izine bakar.'], ['may', 'Şimdi sen de lekelisin. Kabul ettin sayılır.']] }] },
      ['n', 'Seni atölyesine götürür: kuzey ışığı alan geniş pencereler, terebentin kokusu, duvarlarda yarım kalmış çıplak figürler.'],
      ['may', 'Gömleğini çıkarır mısın? Işık için. Sadece ışık için.'],
      { q: 'Ne yaparsın?', o: [
        { x: 'Çıkar', h: { may: 1 }, r: [['n', 'Gömleği sandalyeye bırakırsın. May hemen çizmeye başlamaz; önce yaklaşır, kömürlü parmaklarıyla omzunu biraz çevirir ve göğsünde bir çizgiyi takip eder.'], ['may', 'Burası. Gölge burada kırılıyor.'], ['n', 'Parmağının izi teninde siyah bir çizgi olarak kalır.']] },
        { x: '"Önce sen bir şeyini çıkar. Adil olsun."', h: { may: 2 }, r: [['n', 'Bir an düşünür. Sonra tulumunun askılarını omuzlarından düşürür; altında yalnızca ince, boyalı bir atlet var. Sütyen yok.'], ['may', 'Adil mi?'], ['n', 'Gömleğini çıkarırsın. Çizmeye başlar; ama iki dakikada bir kalemini bırakıp sana bakıyor. Sadece bakıyor.']] }] },
      ['n', 'Akşam güneşi pencereden çekilene kadar çizer. Çıkarken defterden bir sayfa koparıp cebine sokar: sen ve altında tek bir kelime. "Yine."']] },

    hk_ilkcuma: { ic: '🍸', t: 'Hiç Yapmadım', who: ['leire', 'elisa', 'may'], at: '🍸 Bar Medusa', time: 'Cuma 22:00', bg: '#4a0000, #e53935', s: [
      ['n', 'Cuma gecesi. Leire grup sohbetine yazar: "BU GECE. Bar Medusa. 22:00. Gelmeyen dönemi tekrar etsin 💃". Elisa: "Aslında yarın çalışacaktık." Leire: "Yarın. Bu gece değil."'],
      ['n', 'Bar Medusa: kırmızı neonlar, kalabalık, göğsünde titreyen bas. Leire mini siyah elbisesiyle bara oturmuş. Elisa ilk kez saçlarını açmış; gözlüğü yok, lens takmış ve sürekli gözünü kırpıştırıyor.'],
      { when: { f: 'may_model' }, s: [['n', 'Kapıdan May girer, boya lekeli ceketiyle. Seni görünce bir el kaldırır, tek kelime etmeden gelip yanına oturur. Dizi dizine değiyor.'], { fx: { a: { may: 1 } } }],
        e: [['n', 'Barın köşesinde bir kız eskiz defterine bir şeyler çiziyor: May. Leire onu da masaya çeker: "Sanatçı! Bizimle iç."']] },
      ['leire', 'Oyun zamanı! "Hiç yapmadım." Yaptıysan içersin. 🥃'],
      ['leire', 'Hiç… bir yabancıyla öpüşmedim.'],
      ['n', 'Leire içer. May bir an düşünür, içer. Elisa içmez; ama sana bakıyor.'],
      ['leire', 'Hiç… bu masadaki birini çıplak görmedim.'],
      { when: { f: 'may_model' }, s: [['n', 'Kimse kıpırdamaz. Sonra May bardağını yavaşça kaldırır ve gözlerini sana dikerek içer. Leire çığlık atar.'], ['leire', 'MAY! 😱']],
        e: [['n', 'Kimse içmez.'], ['leire', 'Henüz. 😏']] },
      ['leire', 'Sıra sende, Tarek-o.'],
      { q: 'Senin "hiç yapmadım"ın?', o: [
        { x: '"Hiç bu kadar güzel üç kızla aynı masada oturmadım."', a: { leire: 1, elisa: 1, may: 1 }, r: [['leire', 'Klişe ama içiyoruz! 🥂'], ['n', 'Üçü de içer. Elisa\'nın yanakları alev alev.']] },
        { x: '"Hiç bir arkadaşımın en yakın arkadaşını öpmedim."', h: { leire: 1, elisa: 1 }, f: 'gerginlik', r: [['n', 'Masada bir sessizlik. Leire bardağını yavaşça kaldırır; içmez, Elisa\'ya bakar. Elisa bardağını masaya sertçe bırakır.'], ['elisa', 'Aslında… lavaboya gidiyorum.']] },
        { x: '"Hiç birinin tablosuna model olmadım." (May\'e göz kırp)', a: { may: 1 }, h: { may: 1 }, r: [['may', 'Artık oldun.'], ['n', 'May içer. Leire ikinize bakıp gözlerini kısar: "Bir şey mi kaçırdım?"']] }] },
      ['n', 'Saatler ilerler. Shotlar, dans, ter. Leire seni pistin ortasına çeker, sonra kulağına eğilir; dudakları kulak memene değiyor.'],
      { ev: 'Dance Floor Grind', x: 'Leire\'yle pistte', h: { leire: 1 }, r: [['n', 'Pistin ortasında Leire sırtını göğsüne yapıştırır, ellerini kendi beline koyar ve kalçasını ritimle sana sürter. Masadan Elisa ve May izliyor; Leire bunu biliyor ve daha da yavaş dans ediyor.'], ['leire', 'Bırak baksınlar 💃'], ['elisa', 'Aslında… çok da umurumda değil.'], ['may', '…ışık tam üstünüzde.']] },
      ['leire', 'Bana bir şey göster. Tuvaletler arkada. Bir dakika sonra gel.'],
      { q: 'Ne yaparsın?', o: [
        { x: '🚪 Bir dakika sonra git', h: { leire: 1 }, f: 'leire_gitti' },
        { x: 'Masada kal', a: { elisa: 1, may: 1 }, r: [['n', 'Masada kalırsın. Elisa başını omzuna yaslar, May masanın altında çıplak ayağını ayağına dayar. Ama Leire Leire\'dir; beklemeyi bilmez.']] }] }] },

    hk_tuvalet: { ic: '🚪', t: 'Kilitli Kapı', who: ['leire', 'elisa'], at: '🚪 Bar Medusa, arka koridor', time: 'Gece 01:15', bg: '#1b5e20, #212121', s: [
      { when: { f: 'leire_gitti' }, s: [['n', 'Arka koridor; neon yeşili bir ışık, uzaktan boğuk bas. Leire tuvaletin kapısına yaslanmış bekliyor.'], ['leire', 'Geldin. Tamam, cesursun. 😈']],
        e: [['n', 'Lavaboya gittiğinde Leire arkandan girer ve kapıyı kilitler.'], ['leire', 'Gelmedin. O yüzden ben geldim.']] },
      ['n', 'Seni duvara iter. Elbisesi o kadar kısa ki dizini bacaklarının arasına soktuğunda kumaş beline kadar sıyrılıyor. Nefesi votka ve çilek kokuyor.'],
      ['leire', 'Bütün gece bana baktın. Elisa\'ya da baktın. May\'e de. Ama şimdi bana bakıyorsun.'],
      { q: 'Leire seni duvara sıkıştırdı.', o: [
        { x: 'Belinden tutup kendine çek', h: { leire: 1 }, r: [['n', 'Elini beline koyarsın; o elini daha aşağı, kalçasına iter. Kalçasını avucuna bastırıp inler gibi güler.'], { ev: 'Kissing Grab', x: 'Kalçasını kavra', h: { leire: 1 }, r: [['n', 'Öpüşürken avuçların kalçasını bulur ve sıkıca kavrar. Leire dudağını ısırarak inler, kendini ellerine daha çok bastırır; elbisenin kumaşı parmaklarının altında kayıyor.'], ['leire', 'Daha sıkı… kimse duymaz 😏']] }] },
        { x: '"Sarhoşsun, Leire."', a: { leire: 2 }, r: [['leire', 'Biraz. Ama ayıkken de seni seçerdim.'], ['n', 'Alnını alnına dayar. Bir an hiç Leire\'ye benzemeyecek kadar ciddi.']] }] },
      ['n', 'Dudakları dudaklarına iner. Bu kez kesinti yok: dili dudağını bulur, elleri gömleğinin içine kayar, tırnakları sırtında. Kalçasını bacağına sürtüyor, nefesi hızlanıyor…'],
      { fx: { hm: { leire: 3 } } },
      ['cut', 'Kapı vurulur. Üç kez, sert. "Leire? Orada mısın? …Taréque\'yi gördün mü?" Elisa.'],
      ['leire', '(fısıldar) Sus. Sus sus sus. 🤫'],
      { q: 'Elisa kapıda.', o: [
        { x: 'Sessiz kal', h: { leire: 1 }, f: 'leire_sir', r: [['n', 'Leire elini ağzına kapatır, gözleri gülüyor. Elisa bir süre bekler, sonra ayak sesleri uzaklaşır. Leire elini çeker ve dudağını ısırır.'], ['leire', 'Bu bizim sırrımız. 💋']] },
        { x: 'Kapıyı aç', a: { elisa: 1 }, f: 'elisa_gordu', r: [['n', 'Kapıyı açarsın. Elisa önce Leire\'ye, sonra yakandaki ruj izine bakar. Tek kelime etmeden döner. Leire omuz silker.'], ['leire', 'Ona anlatırım. Belki.']] }] },
      ['n', 'Gece biter. Taksi Kestane Sokak\'ta durduğunda saat dört. Marte\'nin balkon ışığı yanıyor; sigara içiyor, seni görünce gülümsüyor.'],
      ['marte', 'İyi gece miydi, çocuk? Yakanda ruj var.'],
      ['n', 'Telefonun titrer. Üç mesaj, üç farklı isim. Carmen\'deki ilk haftan bitti.']] },

    /* ---------- Bölüm II: 🏫 okul kolu ---------- */
    hk_bonjour: { ic: '🥐', t: 'Bonjour', who: ['viola'], at: '🎓 Seçmeli ders → kampüs kafesi', time: 'Salı 11:00', bg: '#880e4f, #f8bbd0', s: [
      ['n', 'Seçmeli dersin ilk günü: Fransızca A1. Profesör Dumas sınıfı ikişerli konuşma eşlerine ayırırken kapıdan bir kız girer: bordo bere, uzun bir trençkot, yanaklarında soğuktan bir pembelik.'],
      ['n', 'Listeyi hocanın elinden alır, göz gezdirir ve bir ismin üstüne kalemle küçük bir kalp çizer. Seninkinin.'],
      ['viola', 'Taréque? Voilà. Sen benimsin. Yani… konuşma eşim. Ben Viola. Lyon\'dan, Erasmus.'],
      ['m', 'Bonjour… doğru mu söyledim?'],
      ['viola', 'Neredeyse. Dudakların çok gergin. Bonjour. Bak: dudakları öne, sanki öpecekmiş gibi.'],
      ['n', 'Ders bitince seni kampüs kafesine sürükler. Kruvasanını ikiye böler, yarısını ağzına kendisi uzatır.'],
      { q: 'Viola kruvasanı dudaklarına uzatıyor.', o: [
        { x: 'Elinden ısır', h: { viola: 1 }, r: [['n', 'Isırırken dudakların parmaklarına değer. Çekmez; parmağındaki tereyağını yavaşça kendi dudağına götürür.'], ['viola', 'Ders bir: Fransızlar yemekle flört eder. Hızlı öğreniyorsun, mon petit.']] },
        { x: 'Teşekkür et, kendin al', a: { viola: 1 }, r: [['viola', 'Ah, centilmen. Çok… Türk. Seviyorum bunu.']] }] },
      ['viola', 'Anlaşma: ben bir kelime öğretirim, sen bir kelime. Bisou. Öpücük demek. Söyle.'],
      { q: '"Bisou"', o: [
        { x: 'Doğru söylemeye çalış', a: { viola: 1 }, r: [['n', '"Bisou." Viola alkışlar, masanın üstünden eğilip yanağına hızlı bir öpücük kondurur.'], ['viola', 'Doğru cevap ödülü. Yanlışta… dudağa.']] },
        { x: 'Bilerek yanlış söyle', h: { viola: 2 }, f: 'viola_yanlis', r: [['n', '"Bizu?" Viola gözlerini kısar, sonra güler. Masanın üstünden eğilir ve dudaklarına bir saniyelik, tüy gibi bir öpücük bırakır.'], ['viola', 'Kopya çektin. Ama kural kural.']] }] },
      ['viola', 'Senin sıran. Bana Türkçe bir kelime öğret.'],
      { q: 'Hangi kelime?', o: [
        { x: '"Özlemek."', a: { viola: 2 }, r: [['viola', 'Özlemek… Fransızcada tam karşılığı yok. "Tu me manques": sen bende eksiksin. Güzel bir kelime seçtin. Tehlikeli de.']] },
        { x: '"Ateş."', h: { viola: 1 }, r: [['viola', 'Ateş. Feu. Hmm… bunu bu akşam kullanabiliriz.']] }] },
      ['viola', 'Akşam yurduma gel. Telaffuz çalışırız. Şarap da var. Fransız usulü ders.']] },

    hk_kelime: { ic: '🍷', t: 'Le Corps', who: ['viola'], at: '🛏️ Viola\'nın yurt odası', time: 'Akşam 20:30', bg: '#4a148c, #880e4f', s: [
      ['n', 'Yurdun üçüncü katı, koridorun sonunda bir kapı; üstünde bir not: "Entrez sans frapper." Çalmadan gir.'],
      ['n', 'Oda mum ışığında. Viola yatağın üstünde bağdaş kurmuş; üstünde büyük bir kazak, altında yalnızca siyah çoraplar. Yerde iki kadeh ve açılmış bir şişe Bordeaux.'],
      ['viola', 'Bugünkü ders: vücut. Le corps. Ben söylerim, sen dokunursun. Yanlış yere dokunursan… ceza.'],
      { q: 'Ders başlıyor.', o: [
        { x: 'Kabul et', h: { viola: 1 }, r: [['viola', 'Les lèvres.'], ['n', 'Parmağınla dudaklarına dokunursun. Dudakları parmağının altında aralanır.'], ['viola', 'Le cou.'], ['n', 'Boynuna. Nabzı parmak uçlarında hızlanıyor.'], ['viola', 'Et… ici.'], ['n', 'Elini tutup kazağın altından kalbinin üstüne koyar. Kazağın altında hiçbir şey yok.']] },
        { x: '"Önce şarap."', a: { viola: 1 }, r: [['n', 'Kadehleri doldurursun. Viola kadehini seninkine değdirir, gözlerini kaçırmadan içer.'], ['viola', 'Santé. Sağlığına. Şimdi ders.']] }] },
      ['n', 'Mumun ışığı duvarda ikinizin gölgesini tek bir şekle çeviriyor. Viola fısıldamaya başlıyor; her cümle biraz daha yakından.'],
      { ev: 'Whisper Wishes', x: 'Kulağına fısıldasın', h: { viola: 1 }, r: [['n', 'Dudakları kulağına değecek kadar yakın. Fransızca cümleler kuruyor, sonra her birini yavaşça Türkçeye çeviriyor; çevirdikçe yanakların yanıyor.'], ['viola', 'Anladın mı? Hayır mı? O zaman tekrar ederim. Bütün gece.']] },
      ['viola', 'Bisou. Bu sefer doğru söyle.'],
      { q: 'Viola dudaklarını uzatıyor.', o: [
        { x: '💋 "Bisou" de ve öp', h: { viola: 1 }, r: [['n', 'Öpücük yavaş, şarap tadında. Viola kazağının yakasından seni kendine çeker, yatağa geriye doğru yaslanır; çorapları bacaklarına sürtünüyor.']] },
        { x: 'Fransızca bir şey fısılda', a: { viola: 2 }, r: [['m', 'Tu me manques.'], ['viola', '…Daha gitmedim bile. Ama evet. Doğru kullandın.'], ['n', 'Alnını alnına dayar. Sonra öper; ama sanki bir şeyi saklar gibi, yarım.']] }] },
      ['cut', 'Koridorda bir kapı çarpar, yurt görevlisinin sesi: "Ziyaret saati bitti! 23:00!"'],
      ['viola', 'Merde. Kuralları sevmem. Ama kural kural… bu sefer.'],
      ['viola', 'Ocak\'ta dönüyorum, Taréque. Bilmeni istedim. Sonra bana kızma.'],
      { fx: { hm: { viola: 3 }, f: 'viola_ocak' } }] },

    hk_matkap: { ic: '🔨', t: 'Gece Yarısı Matkap', who: ['liberta'], at: '🏚️ Çatı katı', time: 'Gece 00:40', bg: '#3e2723, #bcaaa4', s: [
      ['n', 'Gece yarısını geçmiş. Tavandan bir matkap sesi; sonra çekiç, sonra yine matkap. Kestane Sokak 14\'ün boş çatı katında biri çalışıyor.'],
      ['n', 'Merdivenleri çıkarsın. Çatı katının kapısı aralık: toz, plastik örtüler, yeni sıvanmış duvarlar ve ortada, iskelenin üstünde bir kadın.'],
      ['n', 'Dar bir tulum, belinde alet kemeri, saçları bir kalemle tutturulmuş. Ensesinde ter parlıyor. Matkabı kapatıp döner.'],
      ['liberta', 'Uyandırdım mı seni? Pardon. Gündüz müşteriler, gece duvarlar. Ben Liberta. Bu katı ben yeniliyorum.'],
      { q: 'Ne dersin?', o: [
        { x: '"Gece yarısı tadilat mı?"', a: { liberta: 1 }, r: [['liberta', 'Duvarlar gece daha dürüst. Gündüz herkes konuşur; gece sadece taş.']] },
        { x: '"Yardım edeyim mi?"', h: { liberta: 1 }, f: 'liberta_yardim', r: [['liberta', 'Bir mimarlık öğrencisi, gece yarısı, yardım teklif ediyor. Kader mi bu?']] }] },
      ['n', 'Sana bir metre uzatır. Birlikte duvarı ölçersiniz; o iskeleden iner, sen metrenin ucunu tutarsın. Metre aranızda gerilir, sonra kısalır, sonra neredeyse hiç kalmaz.'],
      ['liberta', 'Kumaş gibi. Bir şeyi ölçmeden bilemezsin.'],
      ['n', 'Metreyi beline dolar, ucunu sana verir.'],
      { q: 'Metrenin ucu elinde.', o: [
        { x: 'Çek', h: { liberta: 1 }, r: [['n', 'Metreyi çekersin; Liberta bir adım yaklaşır, sonra bir adım daha. Göğsü göğsüne değiyor; tulumun fermuarı göğüs çizgisinin altına kadar açık.'], ['liberta', 'Seksen dört. Kalçayı… onu sen ölç.']] },
        { x: 'Bırak, gülümse', a: { liberta: 1 }, r: [['liberta', 'Sabırlı. Mimarlar sabırlı olmalı. İyi.']] }] },
      { ev: 'Pinned To The Wall', x: 'Yeni sıvanmış duvara', h: { liberta: 1 }, r: [['n', 'Onu duvara yaslarsın; sıva hâlâ ılık ve nemli. Bilekleri başının üstünde, nefesi hızlanıyor; tozlu parmakları enseni buluyor.'], ['liberta', 'Duvarı mahvedeceğiz… umurumda değil.']] },
      ['n', 'Dudakları bir nefes uzakta…'],
      ['cut', 'Aşağı kattan bir süpürge sapı tavana vuruyor. Marte\'nin sesi: "Saat bir buçuk! Bazılarımız uyuyor!"'],
      ['liberta', 'Komşun kıskanç mı, yoksa sadece uykusuz mu?'],
      ['liberta', 'Yarın öğlen gel. Çizimlerim var, ellerine ihtiyacım var. Para da veririm. Ve bir dahaki sefere matkap yok.']] },

    hk_olcu: { ic: '📐', t: 'Ölçü', who: ['liberta'], at: '☀️ Çatı katı, gün ışığı', time: 'Ertesi gün 12:30', bg: '#6d4c41, #ffe0b2', s: [
      ['n', 'Gün ışığında çatı katı bambaşka bir yer: geniş tavan pencereleri, açık kirişler, her yere düşen beyaz ışık. Liberta masaya kâğıtları sermiş; gözlüğü başında, bir kalem dişlerinin arasında.'],
      ['liberta', 'Yatak odası burada olacak. Pencerenin altında. Sabah ışığı yüzüne düşsün diye.'],
      ['liberta', 'Ölçüleri sen al, ben çizeyim. Saati üç yüz.'],
      ['n', 'Çalışırken omzunun üstünden bakar; nefesi ensende, saçı yanağına değiyor. Bir ara elini senin elinin üstüne koyup çizgiyi düzeltir.'],
      { q: 'Liberta elini bırakmıyor.', o: [
        { x: '"Çizgi mi düzeldi, ben mi?"', h: { liberta: 1 }, r: [['liberta', 'İkisi de. Ama sen daha çok uğraştırıyorsun.'], ['n', 'Kâğıdın üstünde parmakları parmaklarının arasına giriyor.']] },
        { x: 'Çizime odaklan', a: { liberta: 2 }, r: [['liberta', 'İyi bir göz. Ham ama sağlam. Meşe gibi.']] }] },
      ['liberta', 'Boşandım. Altı ay oldu. Yeni bir ev çiziyorum ama kendime değil. Kendime ait olmayan evleri seviyorum. Kimse kimseye ait değil, Taréque. Bunu baştan bil.'],
      { q: 'Ne dersin?', o: [
        { x: '"Ben de kimseye ait değilim."', h: { liberta: 1 }, r: [['liberta', 'Yalan. Ama güzel bir yalan.']] },
        { x: '"Belki biri sana ait olmak ister."', a: { liberta: 2 }, f: 'liberta_ait', r: [['n', 'Uzun bir sessizlik. Kalemi bırakır.'], ['liberta', 'Bunu bir daha söyleme. Ya da… söyle. Bilmiyorum.']] }] },
      ['n', 'Çıkarken merdivende telefonun titrer.'],
      ['cut', 'Elisa: "Aslında… bugün Liberta Moreau\'nun çatı katında olduğunu duydum. LİBERTA MOREAU. Bana neden söylemedin?"'],
      ['n', 'Liberta, Elisa\'nın idolü; yurt odasının duvarında projelerinin posteri asılı. Ve sen onun çatı katından gömleğin tozlu, ensende parmak izleriyle çıkıyorsun.'],
      { fx: { f: 'elisa_liberta' } }] },

    hk_gececalisma: { ic: '📚', t: 'Kütüphanede Gece', who: ['elisa'], at: '📚 Fakülte kütüphanesi', time: 'Gece 23:50', bg: '#0d47a1, #263238', s: [
      ['n', 'Vizeye iki gün. Kütüphane gece yarısı kapanıyor; güvenlik ışıkları söndürüyor ama Elisa\'nın bir anahtarı var.'],
      ['n', 'Masada iki termos kahve, renk kodlu notlar ve Leire\'den yirmi okunmamış mesaj. Leire gelmedi.'],
      { when: { f: 'elisa_liberta' }, s: [
        ['elisa', 'Aslında Liberta\'yı sormayacağım. Sormuyorum. …Nasıl biri?'],
        { q: 'Elisa Liberta\'yı soruyor.', o: [
          { x: '"Senin kadar yetenekli değil."', a: { elisa: 2 }, r: [['elisa', 'Bu… saçma. Ama… teşekkür ederim.'], ['n', 'Kulakları kızarıyor; gözlüğünü düzeltir ama gülümsemesini saklayamıyor.']] },
          { x: '"Dokunarak çalışıyor. Her şeye."', h: { elisa: 1 }, r: [['elisa', 'Her şeye mi.'], ['n', 'Kalemini masaya bırakır. Sesi bir ton düşmüş.']] }] }],
        e: [['elisa', 'Aslında bu gece sadece yapı statiği. Başka hiçbir şey. Anlaştık mı?']] },
      ['n', 'Saat ikiyi geçer. Elisa esner, gözlüğünü çıkarır ve başını omzuna bırakır. "Beş dakika," der. Beş dakika yarım saate döner.'],
      ['n', 'Uyanınca seni izlediğini görürsün. Bu sefer utanmıyor.'],
      ['elisa', 'Aslında… hep merak ediyordum. Kucağına oturmak nasıl bir şey.'],
      { q: 'Elisa sandalyesini geri itiyor.', o: [
        { x: 'Kollarını aç', h: { elisa: 1 }, r: [['n', 'Kucağına oturur; önce yan, sonra yüz yüze. Ekose eteği uyluklarına kadar sıyrılıyor. Kollarını boynuna dolar, alnını alnına dayar.']] },
        { x: '"Emin misin?"', a: { elisa: 1 }, h: { elisa: 1 }, r: [['elisa', 'Hayır. Ama ilk kez bir şeyden emin olmamak hoşuma gidiyor.'], ['n', 'Kucağına oturur, dizleri sandalyenin iki yanında.']] }] },
      { ev: 'Lap Kissing', x: 'Kucağında öpüş', h: { elisa: 1 }, r: [['n', 'Öpüşmesi beceriksiz başlıyor, sonra hızla öğreniyor. Ellerin sırtında, gömleğinin altında; tenine her dokunduğunda titreyip kendini sana daha çok bastırıyor.'], ['elisa', 'Şşş… ses çıkarmayalım. Güvenlik…']] },
      { ev: 'Jeans Lap Grind', x: 'Ritmi o tutsun', h: { elisa: 1 }, r: [['n', 'Kalçasını önce yavaşça, sonra daha kararlı hareket ettiriyor. Dudağını ısırıp inlemesini yutuyor; nefesi kulağında kısa ve sıcak.'], ['elisa', 'Aslında… çok… iyi…']] },
      ['n', 'Rafların arasından bir el feneri ışığı geçer. Elisa donar, nefesini tutar; ışık uzaklaşır. Sonra ikiniz de sessizce gülmeye başlıyorsunuz.'],
      ['elisa', 'Kimse bilmeyecek. Leire bile. Söz ver.'],
      { q: 'Elisa söz istiyor.', o: [
        { x: 'Söz ver', a: { elisa: 2 }, f: 'elisa_sir', r: [['elisa', 'Teşekkür ederim. Aslında… bu benim için çok önemli.']] },
        { x: 'Sözsüz bir öpücükle cevap ver', h: { elisa: 1 }, r: [['n', 'Öpersin. Bir şey söylemez; sadece gömleğinin yakasını iki eliyle kavrayıp bırakmaz.']] }] },
      { fx: { hm: { elisa: 4 } } }] },

    hk_leirebul: { ic: '🆘', t: 'Dünkü Elbise', who: ['leire'], at: '🏢 Leire\'nin dairesi', time: 'Sabah 09:40', bg: '#b71c1c, #ffab91', s: [
      ['n', 'Vize sabahı, 09:00. Leire sınava gelmedi. Telefonu kapalı.'],
      ['n', 'Leire\'nin dairesi: kapı aralık, içeride müzik hâlâ çalıyor. Yerde ayakkabılar; kanepede dünkü kırmızı elbisesiyle uyuyan Leire, maskarası yanaklarına akmış.'],
      ['leire', 'Tarek-o? …Saat kaç? Neden her şey bu kadar parlak?'],
      ['m', 'Vizeyi kaçırdın.'],
      ['leire', '…Hayır. Hayır hayır hayır. Annem beni öldürür. Dönemi kaybedersem burs gider 😭'],
      ['n', 'Ağlamaya başlıyor; ama Leire Leire\'dir, ağlarken bile dramatik ve güzel.'],
      { q: 'Leire paniklemiş.', o: [
        { x: 'Sarıl, sakinleştir', a: { leire: 2 }, r: [['n', 'Sarılırsın. Elbisesi hâlâ dün gecenin parfümü ve sigarası kokuyor. Başını göğsüne bastırıp hıçkırıyor.'], ['leire', 'Neden hep beni kurtaran sen oluyorsun?']] },
        { x: '"Hocayla konuşuruz. Bir yolu var."', a: { leire: 1 }, r: [['leire', 'Profesör Varga. Taş kalpli. Ama… sen konuşursan belki.']] }] },
      ['leire', 'Bir anlaşma yapalım. Sen beni kurtarırsın, ben de… sana teşekkür ederim. Leire usulü 😈'],
      ['n', 'Kucağına oturur; elbisenin fermuarı sırtında yarı açık.'],
      { ev: 'Lap Strip', x: 'Teşekkürü kabul et', h: { leire: 1 }, r: [['n', 'Fermuarı sen indirirsin; elbise omuzlarından kayıp beline kadar düşer. Altında dünden kalma dantel, tenine izini bırakmış. Her parçayı senin ellerin çıkarıyor; o sadece gözlerinin içine bakıp gülümsüyor.'], ['leire', 'Ders bir: Leire\'ye asla "hayır" denmez 😘']] },
      { q: 'Ne yaparsın?', o: [
        { x: '"Önce hoca. Sonra bu."', a: { leire: 2 }, f: 'leire_soz', r: [['leire', 'Ugh. Sorumlu Tarek-o. …Tamam. Ama sözünü tut.'], ['n', 'Elbisesini toplayıp banyoya gidiyor; kapıyı açık bırakıyor.']] },
        { x: 'Onu kendine çek', h: { leire: 1 }, r: [['n', 'Kanepeye devriliyorsunuz. Leire\'nin kahkahası öpücüğünün içinde kayboluyor; elleri her yerde, sabırsız, aç.'], ['leire', 'Beş dakika… sonra hoca. Söz.']] }] },
      ['n', 'Yarım saat sonra fakülteye yürürken Leire koluna girmiş, saçları hâlâ ıslak.'],
      { fx: { hm: { leire: 4 } } }] },

    hk_hocaikna: { ic: '📝', t: 'Telafi', who: ['viola', 'leire'], at: '🎓 Prof. Varga\'nın odası', time: 'Öğle 13:00', bg: '#1a237e, #880e4f', s: [
      ['n', 'Profesör Varga\'nın odasında hoca yok; masada Viola oturuyor. Yakasında bir asistan kartı.'],
      ['viola', 'Surprise! Bu dönem Varga\'nın Erasmus asistanıyım. Bütün telafi dilekçeleri benden geçer.'],
      ['leire', 'Sen… onun Fransızca konuşma eşi misin? Tarek-o, bunu neden bilmiyorum?!'],
      ['viola', 'Bence pek çok şeyi bilmiyorsun, chérie.'],
      ['n', 'İki kız birbirini süzüyor. Odanın sıcaklığı bir derece artıyor.'],
      ['viola', 'Dilekçeyi Varga\'ya ben götürürüm, bir telafi sınavı ayarlarım. Ama bir bedeli var.'],
      { q: 'Viola\'nın bedeli?', o: [
        { x: '"Ne istiyorsun?"', h: { viola: 1 }, f: 'viola_yemek', r: [['viola', 'Bu akşam beni yemeğe çıkar. Sadece ikimiz.'], ['leire', 'Ciddi misin?!'], ['viola', 'Çok ciddiyim.']] },
        { x: '"Leire için her şey."', a: { leire: 2 }, r: [['leire', '…Tarek-o 🥺'], ['viola', 'Romantik. O zaman bedeli: Leire bana bir ders verecek. Türkçe argo. Tamamını.'], ['leire', 'Anlaştık! O konuda çok iyiyim 😏']] }] },
      ['n', 'Leire koridora çıkıp annesini arıyor. Viola seni kapının arkasında tutuyor.'],
      { ev: 'Lick Neck', x: 'Kapının arkasında', h: { viola: 1 }, r: [['n', 'Kapı aralık; koridorda Leire telefonla konuşuyor. Viola boynuna eğilir, dudakları kulağının arkasından köprücük kemiğine iniyor, dilinin ucu tenine yavaşça bir iz çiziyor.'], ['viola', 'Bu da benim payım. Kimseye söyleme… surtout pas à elle.']] },
      ['leire', 'Tarek-o! Telafi Perşembe! Seni seviyorum! Yani… arkadaşça! Neyse! 💃']] },

    /* ---------- Bölüm II: 💼 iş kolu ---------- */
    hk_mesai: { ic: '🌃', t: '23. Kat', who: ['salma'], at: '🏢 Halden & Ward, 23. kat', time: 'Perşembe 22:10', bg: '#212121, #455a64', s: [
      ['n', 'Bir müşteri sunumu çöktü ve Salma bütün ekibi eve gönderdi. Seni hariç.'],
      ['salma', 'Sunum yarın 08:00\'de. Slaytlar felaket. Kahve yap. Şekersiz. Biliyorsun.'],
      ['n', 'Saat on bir. Kat boş; sadece ikinizin masa lambası yanıyor. Salma ceketini çıkarmış, gömleğinin ilk iki düğmesi açık, topuzu ilk kez dağılmış.'],
      ['n', 'Gece yarısı son slayt kaydedilir. Salma sandalyesinde arkasına yaslanıp ayakkabılarını çıkarır, çıplak ayağını masanın kenarına, kolunun hemen yanına koyar.'],
      ['salma', 'Kuralı hatırlıyor musun?'],
      ['m', 'Bu binada siz Salma Hanım\'sınız.'],
      ['salma', 'Saat kaç, Taréque?'],
      ['m', 'Gece yarısı.'],
      ['salma', 'Mesai bitti. Bina… teknik olarak boş.'],
      { ev: 'Desk Tease', x: 'Raporu uzatırken', h: { salma: 1 }, r: [['n', 'Kalkıp masana eğilir, son raporu önüne bırakır. Dekoltesi tam önünde; gözlerini kaldırmanı bekliyor, kaldırınca bakışını hiç kaçırmıyor.'], ['salma', 'İmzala. Burası. Ve burası.']] },
      { q: 'Salma masanın kenarına oturuyor.', o: [
        { x: 'Kalk ve önüne geç', h: { salma: 1 }, r: [['n', 'Önüne geçersin. Düğmeleri sen açmıyorsun; o açıyor, birer birer, gözlerini senden ayırmadan. Altında siyah dantel. Bu sefer kahve lekesi yok.'], ['salma', 'Bu sefer bastırabilirsin. Sürterek.']] },
        { x: '"Emin misiniz, Salma Hanım?"', a: { salma: 2 }, h: { salma: 1 }, r: [['salma', 'Bunu sorman… işte tam da bu yüzden.'], ['n', 'Kravatından tutup seni kendine çekiyor.']] }] },
      { ev: 'On The Desk', x: 'Masanın üstünde', h: { salma: 1 }, r: [['n', 'Onu masanın üstüne oturtursun; bacakları beline dolanıyor, klavye kalçasının altında tuşlara basıyor. Ekrandaki slayt sonsuz bir "aaaaaa" yazmaya başlıyor; ikiniz de gülüyorsunuz, sonra gülmek kesiliyor.'], ['salma', 'Yavaş… Hayır. Yavaş değil.'], ['n', 'Şehrin ışıkları cam duvardan içeri vuruyor. 23. kattan bütün Carmen görünüyor ve Salma ilk kez kontrolü bırakıyor.']] },
      ['n', 'Sonra masada yan yana; senin gömleğin onun omzunda. Salma tavana bakıyor.'],
      ['salma', 'Bu olmadı.'],
      { q: 'Ne dersin?', o: [
        { x: '"Olmadı. Anlaşıldı, Salma Hanım."', a: { salma: 2 }, r: [['salma', '…Bunu bu kadar kolay kabul etmen de hoşuma gitmedi.'], ['n', 'Gömleğini geri vermiyor.']] },
        { x: '"Bence oldu. İki kere."', h: { salma: 1 }, r: [['n', 'İlk kez gerçekten gülüyor: sesli, başını geriye atarak.'], ['salma', 'Dışarı. Taksini ben çağırıyorum. Sabah 07:00\'de burada ol.']] }] },
      { fx: { hm: { salma: 5 }, f: 'salma_gece' } }] },

    hk_kahvalti: { ic: '🥐', t: 'Anahtarlı Misafir', who: ['salma', 'alisa'], at: '🏡 Salma\'nın mutfağı', time: 'Cumartesi 08:00', bg: '#eceff1, #b71c1c', s: [
      ['n', 'Cumartesi sabahı. Salma\'nın evi: beyaz, minimal, her şey yerli yerinde. Dün gece seni buraya getirdi ve tek kelime etmedi. Şimdi duşta.'],
      ['n', 'Sen mutfakta, üstünde onun beyaz gömleği, kahve yapıyorsun. Kapı açılıyor. Anahtarla.'],
      ['alisa', 'Buz Kraliçe! Kruvasan getirdim, dedikodu da… oh.'],
      ['n', 'Kapıda bir kadın: dalgalı kızıl saçlar, deri ceket, elinde bir kese kâğıdı. Gözleri önce gömleğe, sonra bacaklarına, sonra yüzüne.'],
      ['alisa', 'Bak sen. Salma\'nın gömleği. Salma\'nın mutfağı. Salma\'nın… stajyeri mi?'],
      { q: 'Ne dersin?', o: [
        { x: '"Ben Taréque. Kahve?"', a: { alisa: 1 }, r: [['alisa', 'Soğukkanlı. Salma soğukkanlıları sever. Sütlü, şekersiz. Ben Alisa: en yakın arkadaşı, sırdaşı ve şu an çok, çok mutlu bir tanık.']] },
        { x: '"Bu… göründüğü gibi değil."', h: { alisa: 1 }, r: [['alisa', 'Tatlım, tam olarak göründüğü gibi. Ve görünen güzel.']] }] },
      ['n', 'Salma duştan çıkıyor, saçları ıslak, üstünde bir havlu. Alisa\'yı görünce donuyor.'],
      ['salma', '…Anahtarı geri vermeni istemiştim.'],
      ['alisa', 'Ben de mesajlarıma cevap vermeni istemiştim. Görünüşe göre meşguldün.'],
      ['salma', 'Alisa. Bu konuşulmayacak. Hiçbir yerde. Ofiste hiç.'],
      ['alisa', 'Konuşulmayacak. Tek bir şartla.'],
      ['n', 'Alisa kruvasanı ikiye bölüp yarısını sana uzatıyor; gözü Salma\'da.'],
      ['alisa', 'Taréque bu akşam Vinoteca\'ya gelir. Şarap tadımı. Onu tanıyayım; arkadaşımı kime emanet ettiğimi bileyim.'],
      ['salma', 'Alisa.'],
      ['alisa', 'Ya da herkes duyar. Seçim senin, Buz Kraliçe.'],
      { q: 'Salma sana bakıyor.', o: [
        { x: '"Giderim. Saklayacak bir şeyimiz yok."', a: { salma: 1 }, r: [['salma', '…Her şeyimiz var. Ama git. Ve onun söylediği hiçbir şeye inanma.']] },
        { x: '"Salma Hanım ne derse."', a: { salma: 2 }, r: [['salma', 'Git. Ama erken dön.'], ['alisa', 'Ooo, "Salma Hanım". Bayıldım.']] }] },
      { fx: { h: { alisa: 1 } } }] },

    hk_tadim: { ic: '🍷', t: 'Kör Tadım', who: ['alisa'], at: '🍷 Vinoteca, mahzen', time: 'Gece 21:30', bg: '#3e0000, #8d6e63', s: [
      ['n', 'Vinoteca: taş duvarlar, mum ışığı, raflarda yüzlerce şişe. Alisa barı kapatmış, kapıya "Özel tadım" yazmış.'],
      ['alisa', 'Mahzene. Gerçek şaraplar aşağıda.'],
      ['n', 'Dar, serin bir merdiven. Aşağıda tek bir masa, beş kadeh, bir mum ve ipek bir bant.'],
      ['alisa', 'Kural basit: gözlerin kapalı. Ben veririm, sen tahmin edersin. Bilirsen sen bir soru sorarsın; bilemezsen ben sorarım.'],
      { ev: 'Blindfold', x: 'Bandı takmasına izin ver', h: { alisa: 1 }, r: [['n', 'İpek bant gözlerinin üstüne iniyor. Dünya bir nefese, bir parfüme, kadehin cama değen sesine küçülüyor. Alisa\'nın parmakları bandı bağlarken saçlarının arasında fazla uzun kalıyor.'], ['alisa', 'Şimdi sadece dinle. Ve tat.']] },
      ['alisa', 'Birinci kadeh.'],
      { q: 'Şarap dilinde.', o: [
        { x: '"Kırmızı. Kiraz. Biraz da… sen."', h: { alisa: 1 }, r: [['alisa', 'Flörtle puan alınmaz. Ama… doğru. Benim en sevdiğim.']] },
        { x: '"Bilmiyorum."', a: { alisa: 1 }, r: [['alisa', 'Dürüst. O zaman ben sorarım: Salma\'yı seviyor musun?'], ['n', 'Cevabını beklerken nefesini tutuyor; bandın arkasından bile duyuluyor.']] }] },
      ['alisa', 'Salma\'nın bir nişanlısı vardı. Düğüne bir hafta kala gitti. O günden beri kural koyuyor; kural koyarsa kimse gidemez sanıyor.'],
      ['alisa', 'Onu üzersen seni bu mahzene kilitlerim. Şaka değil.'],
      ['alisa', 'Son kadeh. Bu sefer kadehten değil.'],
      { ev: 'Wine Kiss', x: 'Son yudum', h: { alisa: 1 }, r: [['n', 'Dudakları dudaklarını buluyor; ağzındaki şarap ağzına akıyor, ılık ve ağır. Bir saniye. İki. Sonra geri çekiliyor.'], ['alisa', '…Bunu yapmamalıydım. Bu da konuşulmayacak.']] },
      { q: 'Bant hâlâ gözlerinde.', o: [
        { x: 'Bandı çıkar, gözlerine bak', h: { alisa: 1 }, f: 'alisa_opucuk', r: [['n', 'Bandı çıkarırsın. Alisa\'nın yanakları şaraptan değil, başka bir şeyden kızarmış.'], ['alisa', 'Sınavı geçtin. Ya da kaldın. Henüz karar vermedim.']] },
        { x: '"Salma\'ya söyleyeceğim."', a: { alisa: 2 }, f: 'alisa_durust', r: [['alisa', '…Söyle. Belki de bu yüzden ona layıksın.'], ['n', 'Bandı kendisi çözüyor, alnına bir öpücük bırakıyor. Arkadaşça. Neredeyse.']] }] }] },

    /* ---------- Bölüm II: 🏠 ev ve sanat kolu ---------- */
    hk_vardiyadonus: { ic: '🚑', t: 'Şafakta', who: ['marte'], at: '🏥 Hastane → 🏠 Marte\'nin dairesi', time: 'Sabah 06:10', bg: '#263238, #ffccbc', s: [
      ['n', 'Sabah 06:00. Marte gece yarısı yazmıştı: "Kötü bir gece. Gelebilir misin?" Şimdi acil servisin önünde, sigara içmeden, sadece duruyor.'],
      ['marte', 'Bir çocuk. Kurtaramadık. …Konuşmak istemiyorum. Eve götür beni.'],
      ['n', 'Taksi Kestane Sokak\'ta duruyor. Dördüncü kata çıkarken Marte\'nin eli elinde; merdivenler hiç bu kadar uzun gelmemişti.'],
      ['n', 'Kapının önünde biri bekliyor: uzun boylu, sakallı, elinde çiçek. Andrés.'],
      ['Andrés', 'Marte. Sadece konuşalım. Beş dakika.'],
      ['marte', 'Andrés, git. Lütfen. Bugün değil.'],
      { q: 'Andrés sana bakıyor.', o: [
        { x: 'Marte\'nin önüne geç', a: { marte: 2 }, f: 'marte_andres', r: [['m', 'Duydun onu. Bugün değil.'], ['n', 'Andrés bir süre bakıyor, sonra çiçeği kapının önüne bırakıp merdivenlerden iniyor. Marte\'nin parmakları sırtında, gömleğini sıkıyor.']] },
        { x: 'Marte\'ye bırak, yanında dur', a: { marte: 1 }, r: [['marte', 'Bitti, Andrés. Gerçekten bitti. Ben… artık başka birini bekliyorum.'], ['n', 'Andrés gidiyor. Marte sana bakmadan elini sıkıyor.']] }] },
      ['n', 'İçeride Marte üniformasını çıkarmadan kanepeye çöküyor. Pimiento kucağına atlıyor.'],
      ['marte', 'Sırtım. On iki saat ayaktaydım. Ellerin… sıcak mı?'],
      { ev: 'Warm Oil Massage', x: 'Sırtını ov', a: { marte: 1 }, r: [['n', 'Üniformanın fermuarını indiriyorsun; sırtı çıplak, omuzları taş gibi. Ilık yağla her düğümü yavaşça çözüyorsun. Marte\'nin nefesi yavaşlıyor, sonra bir iç çekişe dönüşüyor.'], ['marte', 'Kimse bana böyle bakmaz. Hep ben bakarım herkese.']] },
      ['marte', 'Küveti doldur. Benimle gir. Konuşma.'],
      { ev: 'Warm Tub Sex', x: 'Küvete', h: { marte: 2 }, r: [['n', 'Küvette kucağına oturuyor; ılık su ikinizi örtüyor, köpük göğüslerine yapışıyor. Hiç acele etmiyor. Alnını alnına dayamış, gözleri kapalı ve bu sefer hiçbir telefon çalmıyor.'], ['marte', 'Burada kal. Biraz daha.']] },
      { ev: 'Sleepy Spoon', x: 'Yatakta uyu', a: { marte: 1 }, r: [['n', 'Yatağına geçiyorsunuz. Marte sırtını göğsüne yaslıyor, kalçasını sana itiyor; yarı uykulu, yavaş. Güneş perdeden sızarken uyuyakalıyor; Pimiento ayak ucunuzda.']] },
      ['n', 'Öğlen uyandığında Marte mutfakta, senin tişörtünle kahve yapıyor. İlk kez sabah gibi gülümsüyor.'],
      ['marte', 'Kahve borcunu ödedim, çocuk. Faiziyle.'],
      { fx: { hm: { marte: 5 } } }] },

    hk_ilhamturu: { ic: '🏖️', t: 'İlham Avı', who: ['may', 'clara'], at: '🏖️ Sahil → 🌧️ yağmurlu sokak', time: 'Öğleden sonra', bg: '#006064, #b0bec5', s: [
      ['n', 'Sergiye üç hafta var ve May\'in tuvali hâlâ boş. Bir sabah atölyeden mesaj geliyor: "Clara diyor ki ilham dışarıda. Sahile gel."'],
      ['n', 'Sahilde May\'in yanında kamerasını boynuna asmış, kısa saçlı, deri ceketli bir kız. Seni görünce objektifi kaldırıp deklanşöre basıyor.'],
      ['clara', 'Demek gömleksiz çocuk sensin. Kontrast yok sende. Düzeltiriz.'],
      ['may', 'Clara. Ev arkadaşım. Fotoğrafçı. Çok konuşur.'],
      ['clara', 'Biri konuşmalı; sen konuşmuyorsun. Dinle bak: bugün şehri gezeceğiz, ben çekeceğim, May bakacak. Sen de yine model olacaksın.'],
      ['n', 'Kumda, rüzgârda, deniz kenarında. Clara komut veriyor; May hiçbir şey söylemeden izliyor.'],
      { ev: 'Lies On The Sand', x: 'May kuma uzanıyor', h: { may: 1 }, r: [['n', 'May havlusunu kuma serip uzanıyor; dalgalar ayak bileklerine kadar geliyor. Yanına uzanmanı işaret ediyor. Clara tepenizde, deklanşör art arda.'], ['clara', 'Daha yakın. Daha. Tamam, şimdi May, ona bak. Öyle değil… gerçekten bak.']] },
      ['n', 'Akşamüstü yağmur başlıyor. Üçünüz bir saçağın altına sığınıyorsunuz; May\'in ince elbisesi sırılsıklam, tenine yapışmış.'],
      { q: 'May titriyor.', o: [
        { x: 'Ceketini ona ver', a: { may: 2 }, r: [['n', 'Ceketini omzuna koyuyorsun. May ceketin yakasını burnuna götürüp kokluyor.'], ['may', '…senin kokun. Bunu boyayabilirim.'], ['clara', 'Tamam, bu çok romantik, midem bulandı. Çekiyorum.']] },
        { x: 'Ona sarıl', h: { may: 1 }, r: [['n', 'May\'i kollarının arasına alıyorsun; ıslak elbisenin altında kalbi hızlı atıyor. Clara bir an kamerayı indiriyor. Sonra yine kaldırıyor, ama elleri titriyor.']] }] },
      ['clara', 'Bu gece karanlık odada bunları basacağım. İkiniz de gelin. Görmeniz lazım.'],
      ['n', 'Clara önden yürürken May fısıldıyor.'],
      ['may', 'Clara beni çok sever. Bazen… fazla.'],
      { fx: { h: { clara: 1 } } }] },

    hk_karanlikoda: { ic: '📷', t: 'Karanlık Oda', who: ['may', 'clara'], at: '📷 Clara\'nın karanlık odası', time: 'Gece 23:00', bg: '#4a0000, #e53935', s: [
      ['n', 'Atölyenin arkasında küçük bir oda: kırmızı bir ampul, kimyasal kokusu, iplere mandallarla asılmış ıslak fotoğraflar.'],
      ['clara', 'Hiçbir şeye dokunmayın. Ben hariç.'],
      ['n', 'Banyonun içinde görüntüler yavaşça beliriyor: kumda yan yana ikiniz. Saçağın altında sarılmış ikiniz. Her karede May sana bakıyor. Ve her karede, kadrajın kenarındaki bir vitrin camında objektife değil May\'e bakan bir yansıma: Clara.'],
      ['may', '…Clara. Bu sensin. Camda.'],
      ['n', 'Clara bir süre konuşmuyor. Kırmızı ışıkta yüzü daha da kızarıyor.'],
      ['clara', 'Dinle bak. Yıllardır. Tamam mı? Yıllardır. Sonra bu çocuk geliyor, gömleğini çıkarıyor ve sen ilk kez resim yapıyorsun.'],
      { q: 'Odada sessizlik.', o: [
        { x: '"Clara, aranıza girmek istemem."', a: { clara: 2 }, r: [['clara', 'Girdin bile. Sorun bu değil. Sorun… bunun hoşuma gitmesi.']] },
        { x: 'May\'e bak, onun konuşmasını bekle', a: { may: 1 }, r: [['may', '…Ben ikinizi de çizmek istiyorum. Aynı tuvalde.'], ['clara', 'May…']] }] },
      ['may', 'Boya getirdim. Burada. Şimdi.'],
      { ev: 'Paint Together', x: 'Üçünüz aynı kâğıtta', h: { may: 1, clara: 1 }, r: [['n', 'May yere büyük bir kâğıt seriyor. Boya önce kâğıda, sonra ellere, sonra tenlere. May parmağıyla göğsüne bir çizgi çiziyor; Clara\'nın yanağına da. Kırmızı ışıkta her renk aynı renge dönüşüyor.'], ['may', 'İşte. İlham. Buldum.']] },
      ['n', 'May gömleğini çıkarmanı istiyor, sonra kendi elbisesini başının üstünden sıyırıyor. Clara kamerayı kaldırıyor ama deklanşöre basmıyor.'],
      ['clara', 'Poz verin. İkiniz de. Aynanın önünde.'],
      { q: 'May elini tutup aynaya çekiyor.', o: [
        { x: 'May\'le aynanın önüne geç', h: { may: 1 }, r: [['n', 'Boyalı ellerinizi aynaya dayıyorsunuz; camda parmak izleri renk renk.']] },
        { x: '"Clara da gelsin."', h: { clara: 1 }, f: 'uclu_ayna', r: [['clara', '…Ben fotoğrafçıyım. Ben… izlerim.'], ['n', 'Ama yaklaşıyor. May elini uzatıyor; Clara tutuyor.']] }] },
      { ev: 'Studio Mirror', x: 'Aynanın önünde', h: { may: 1 }, r: [['n', 'Aynanın önünde May önde, sen arkasında. Boyalı elleri camda kayıyor, nefesi aynayı buğuluyor. Clara\'nın nefesi arkada; deklanşör bir kez, sonra hiç. Kamerayı indirmiş, sadece bakıyor.'], ['may', 'Bak… bizi görüyor musun? İşte resim bu.']] },
      ['n', 'Sonra yerde, boyalı kâğıdın üstünde üçünüz yan yana uzanıyorsunuz. Kırmızı ampul cızırdıyor.'],
      ['clara', 'Bu fotoğraf hiç basılmayacak. Ama ben hep hatırlayacağım.'],
      { fx: { hm: { may: 5 } } }] },

    /* ---------- Bölüm II finali ---------- */
    hk_kutlama: { ic: '🥂', t: 'Vize Gecesi', who: ['leire', 'elisa', 'may', 'clara', 'viola', 'alisa'], at: '🍷 Vinoteca', time: 'Cuma 22:30', bg: '#4a0000, #ffb300', s: [
      ['n', 'Vizeler bitti. Leire herkese yazdı ve herkes geldi. Alisa Vinoteca\'yı açtı, bütün masaları birleştirdi.'],
      ['leire', 'VİZELER BİTTİ! Ve telafiyi GEÇTİM! Tarek-o sayesinde! Herkes içsin! 🥂'],
      ['elisa', 'Aslında 72 aldın. Geçtin ama…'],
      ['leire', 'GEÇTİM, Elisa.'],
      ['n', 'Masanın etrafında Leire, Elisa, May, Clara, Viola ve barın arkasında Alisa. İlk kez bütün çevren aynı odada; kimin kime nasıl baktığını herkes görüyor.'],
      ['viola', 'Demek bunlar "arkadaşların". Çok… kalabalık bir hayatın var, mon petit.'],
      ['clara', 'Dinle bak, Fransız: kalabalık iyidir. Kimse fark edilmez.'],
      { when: { h: ['elisa', 4] }, s: [['n', 'Elisa masanın altından eline dokunuyor; sonra çekiyor, sonra yine dokunuyor. Leire\'nin gözü ellerinizde.']] },
      { when: { f: 'uclu_ayna' }, s: [['n', 'May ile Clara yan yana oturuyor, omuz omuza. Bir ara Clara May\'in saçındaki kurumuş bir boya parçasını alıyor; May gülümsüyor.']] },
      { ev: 'Leans On The Bar', x: 'Alisa barda', h: { alisa: 1 }, r: [['n', 'Alisa bara yaslanıyor, kadehini dudağına götürüp sana bakıyor. Salma burada değil ve bu bakış onun yokluğunda fazlasıyla cesur.'], ['alisa', 'Bu gece Salma gelmeyecek. Onu ben ikna ettim. Neden ettim, bilmiyorum.']] },
      ['n', 'Gece ilerliyor. Şarap, kahkahalar; bir ara Leire masanın üstünde dans ediyor, Viola Fransızca şarkı söylüyor, May peçetelere herkesi çiziyor.'],
      ['n', 'Saat ikiye geliyor. Herkes ceketini alıyor; telefonun bir kez, iki kez, üç kez titriyor.'],
      { q: 'Gecenin sonunda kiminle çıkarsın?', o: [
        { x: '🎉 Leire\'yle taksi paylaş', w: { h: ['leire', 4] }, h: { leire: 1 }, r: [['n', 'Taksinin arka koltuğunda Leire başını omzuna koyuyor, sonra kucağına kayıyor; şoför dikiz aynasını bilerek çeviriyor.'],
          { ev: 'Steamy Windows', x: 'Arka koltukta', h: { leire: 1 }, r: [['n', 'Kestane Sokak\'ın köşesinde inip arabanın arkasında öpüşmeye devam ediyorsunuz; camlar buğulanıyor ve Leire buğulu cama parmağıyla bir kalp çiziyor.'], ['leire', 'Bu sefer kimse kapıyı çalmayacak, Tarek-o.']] }] },
        { x: '📐 Elisa\'yı yurduna bırak', w: { h: ['elisa', 4] }, a: { elisa: 2 }, r: [['n', 'Elisa yurdun kapısında duruyor, gözlüğünü çıkarıyor.'], ['elisa', 'Aslında… yukarı gelmek ister misin? Oda arkadaşım yok. Aslında… bunu sormak için iki saat bekledim.']] },
        { x: '🎨 May ve Clara\'yla atölyeye', w: { h: ['may', 4] }, h: { may: 1, clara: 1 }, r: [['n', 'Atölyede boyalı kâğıt hâlâ yerde. Clara kapıyı kilitliyor; May yeni bir tuval kuruyor.'], ['clara', 'Bu sefer basacağım.']] },
        { x: '🇫🇷 Viola\'yı yurduna yürüt', a: { viola: 2 }, r: [['n', 'Yağmur yine başlıyor. Viola şemsiyeyi kapatıp yüzünü yağmura kaldırıyor.'], ['viola', 'Lyon\'da da böyle yağar. Ocak\'a kadar… her yağmurda beni hatırla.']] },
        { x: '🍷 Kapanışta Alisa\'ya yardım et', w: { h: ['alisa', 3] }, h: { alisa: 1 }, r: [
          { ev: 'Bar Counter', x: 'Kapanıştan sonra', h: { alisa: 1 }, r: [['n', 'Kepenkler iniyor. Alisa bar tezgâhının üstüne oturuyor; bardaklar şıngırdıyor, neon ışık tenine vuruyor. Sonra duruyor.'], ['alisa', 'Hayır. Salma. …Bu gece değil. Belki hiç. Git, Taréque. Hemen git, yoksa gitmene izin vermem.']] }] },
        { x: '🏠 Eve dön', r: [['n', 'Kestane Sokak\'ta Marte\'nin balkon ışığı yanıyor. Alçak duvarın üstünde iki kupa sıcak çay bekliyor.'], ['marte', 'Biliyordum geleceğini, çocuk. Otur. Anlat bakalım… kaç tane?'], ['n', 'Telefonun titriyor: Salma. "Pazartesi 07:00. Bir teklifim var."']] }] },
      ['n', 'Bölüm II\'nin son gecesi. Ocak geliyor: jüri, sergi ve bir veda.']] }
  };

  S.STORY = { CHARS, HEAT, CH, QUESTS, SCENES, hero: 'Taréque' };
})();
