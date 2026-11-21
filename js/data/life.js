/* 🌱 Yaşayan karakter (v1108): gündem, gündelik olay cümleleri, derin sorular, ikilemler, yedek cevap havuzları, planlar, duygusal hafıza, kişilik gelişimi.
 * Motor app.js'te (lfOf / lfHear / lfAnswer / lfFallback / lfOffer / lfEvSay). Cümleler [tr, en] çiftleri: tr kullanılır, en sözlüğe eklenir (Stories.I18n).
 * Yer tutucular: {sen} hitap · {x} konu / bilgi · {d} arkadaşın adı · {w} kelime · {o} seçenek · {isim} kedinin adı · {l} lakap */
window.Stories = window.Stories || {};
(() => {
  const EN = {};
  const k = s => (Stories.I18n && Stories.I18n.keyOf ? Stories.I18n.keyOf(s)[1] : s);
  const L = a => a.map(([tr, en]) => { if (en) { const kk = k(tr); if (kk) EN[kk] = k(en); } return tr; });
  const T = (tr, en) => L([[tr, en]])[0];

  /* 📅 Gündem: karakterin kendi hayatındaki konu. 3 adım; her adım say (anlatır), bazen ask (açık soru: fikrini sorar) ya da ev (gündelik olay teklif eder).
   * end: konu bitince anılar defterine giden cümle */
  const GUNDEM = [
    { k: 'is', icon: '💼', name: T('İşte zor hafta', 'A hard week at work'), end: T('İşte zor bir haftadan geçti, projeyi bitirdi', 'She got through a hard week at work and finished the project'), steps: [
      { say: L([['Patron bu hafta beni çok sıkıştırıyor, rapor üstüne rapor… 😮‍💨', 'My boss is squeezing me so hard this week, report after report… 😮‍💨'], ['İş yerinde berbat bir hafta geçiriyorum, herkes benden bir şey istiyor 😩', 'I\'m having an awful week at work, everyone wants something from me 😩']]), ask: L([['Sen olsan ne yapardın?', 'What would you do?']]) },
      { say: L([['Bugün toplantıda herkesin önünde fikrimi savundum… kalbim hâlâ çarpıyor 😳', 'Today I defended my idea in front of everyone in the meeting… my heart is still racing 😳']]), ask: L([['Doğru mu yaptım sence?', 'Do you think I did the right thing?']]) },
      { say: L([['Proje bitti! Patron herkesin önünde bana teşekkür etti, inanabiliyor musun? 🥳', 'The project is done! My boss thanked me in front of everyone, can you believe it? 🥳']]), ev: 'Celebration Dinner' }] },
    { k: 'anne', icon: '👩', name: T('Annesiyle küslük', 'Fight with her mom'), end: T('Annesiyle küstü, sonra barıştı', 'She fell out with her mom, then made up'), steps: [
      { say: L([['Annemle yine tartıştık… hep aynı konu, ne zaman yerleşeceğim 😒', 'Mom and I argued again… always the same thing, when will I settle down 😒']]), ask: L([['Senin ailen de böyle karışır mı?', 'Does your family meddle like this too?']]) },
      { say: L([['Annem aradı ama açmadım. Kötü biri miyim? 🥺', 'Mom called but I didn\'t pick up. Am I a bad person? 🥺']]), ask: L([['Sence onu arayayım mı?', 'Do you think I should call her?']]) },
      { say: L([['Annemle barıştık 🥹 Bana börek yapmış, sana da bir dilim ayırdı', 'Mom and I made up 🥹 She baked me a pastry and saved a slice for you too']]) }] },
    { k: 'sinav', icon: '🚗', name: T('Ehliyet sınavı', 'Driving test'), end: T('Ehliyet sınavını geçti', 'She passed her driving test'), steps: [
      { say: L([['Haftaya ehliyet sınavım var, şimdiden midem bulanıyor 😬', 'My driving test is next week, I already feel sick 😬']]), ask: L([['Sen ilk sınavında geçmiş miydin?', 'Did you pass on your first try?']]) },
      { say: L([['Bugün deneme sürüşünde park edemedim, hoca güldü 🙈', 'I couldn\'t park in today\'s practice drive, the instructor laughed 🙈']]), ask: L([['Bana bir taktik verir misin?', 'Can you give me a trick?']]) },
      { say: L([['GEÇTİM! 🚗 Ehliyetimi aldım!', 'I PASSED! 🚗 I got my license!']]), ev: 'Drive Together' }] },
    { k: 'tasinma', icon: '📦', name: T('Ev taşıma', 'Moving house'), end: T('Yeni evine taşındı', 'She moved into her new place'), steps: [
      { say: L([['Ev sahibi kirayı yine artırdı, taşınmayı düşünüyorum 😤', 'My landlord raised the rent again, I\'m thinking of moving 😤']]), ask: L([['Sence ev mi önemli, mahalle mi?', 'What matters more, the flat or the neighbourhood?']]) },
      { say: L([['Bugün üç ev gezdim, biri tam bana göre ama biraz pahalı 🏠', 'I saw three flats today, one is perfect for me but a bit pricey 🏠']]) },
      { say: L([['Taşındım! Kutular her yerde ama burası artık benim evim 📦', 'I moved! Boxes everywhere but this is my home now 📦']]), ev: 'Unpacking Boxes' }] },
    { k: 'hasta', icon: '🤒', name: T('Hastalandı', 'She got sick'), end: T('Hastalandı, ona sen baktın', 'She got sick and you took care of her'), steps: [
      { say: L([['Boğazım ağrıyor, galiba hasta oluyorum 🤧', 'My throat hurts, I think I\'m getting sick 🤧']]) },
      { say: L([['Ateşim çıktı, battaniyenin altındayım 🥶', 'I have a fever, I\'m under the blanket 🥶']]), ev: 'Sick Day Care' },
      { say: L([['İyileştim! Bana bakman çok tatlıydı, unutmayacağım 🥰', 'I\'m better! You taking care of me was so sweet, I won\'t forget it 🥰']]) }] },
    { k: 'arkadas', icon: '👯', name: T('Arkadaşıyla kırgınlık', 'Hurt by a friend'), end: T('En yakın arkadaşına kırıldı, sonra barıştılar', 'She got hurt by her best friend, then they made up'), steps: [
      { say: L([['En yakın arkadaşım doğum günümü unuttu… çok kırıldım 😞', 'My best friend forgot my birthday… I\'m so hurt 😞']]), ask: L([['Sen olsan ona söyler miydin?', 'Would you tell her if you were me?']]) },
      { say: L([['Konuştuk, meğer başı dertteymiş. Ben de hemen kızdım, ayıp ettim 😔', 'We talked, turns out she\'s in trouble. And I got mad right away, that was unfair of me 😔']]) },
      { say: L([['Barıştık, beraber kahve içtik ☕ Sana da selamı var', 'We made up and had coffee ☕ She says hi to you']]) }] },
    { k: 'resim', icon: '🎨', name: T('Resim kursu', 'Painting class'), end: T('Resim kursuna başladı, ilk tablosunu bitirdi', 'She started a painting class and finished her first painting'), steps: [
      { say: L([['Resim kursuna yazıldım! İlk derste elma çizdik 🍎', 'I signed up for a painting class! We drew an apple in the first lesson 🍎']]), ask: L([['Senin hiç denemek istediğin bir hobi var mı?', 'Is there a hobby you always wanted to try?']]) },
      { say: L([['Bugün ilk manzaramı bitirdim. Çok kötü ama benim 😅', 'I finished my first landscape today. It\'s terrible but it\'s mine 😅']]) },
      { say: L([['Senin için bir resim yaptım 🎨 Birlikte bir tane daha yapalım mı?', 'I painted something for you 🎨 Shall we make one together?']]), ev: 'Paint Together' }] },
    { k: 'kedi', icon: '🐱', name: T('Sokak kedisi', 'The stray cat'), end: T('Bir sokak kedisini sahiplendi, adını sen koydun', 'She adopted a stray cat and you named it'), steps: [
      { say: L([['Kapımın önüne her gün bir kedi geliyor, ona mama aldım 🐱', 'A cat comes to my door every day, I bought it food 🐱']]) },
      { say: L([['Kediyi veterinere götürdüm, aşılarını yaptırdım. Sanırım artık benim 🥹', 'I took the cat to the vet for its shots. I think it\'s mine now 🥹']]), ask: L([['Ona bir isim koyar mısın?', 'Will you give it a name?']]), name: 1 },
      { say: L([['{isim} bugün kucağımda uyudu, sana çok benziyor 😹', '{isim} slept on my lap today, it\'s so much like you 😹']]) }] },
    { k: 'kosu', icon: '🏃', name: T('Koşu hedefi', 'Running goal'), end: T('Koşmaya başladı, ilk 10K yarışını bitirdi', 'She started running and finished her first 10K'), steps: [
      { say: L([['Sabahları koşmaya başladım, iki kilometrede nefesim kesiliyor 😮‍💨', 'I started running in the mornings, I\'m out of breath after two kilometres 😮‍💨']]), ev: 'Morning Run' },
      { say: L([['Bugün beş kilometre koştum, durmadan! 🏃‍♀️', 'I ran five kilometres today without stopping! 🏃‍♀️']]) },
      { say: L([['10K yarışını bitirdim 🏅 Bacaklarım yok ama mutluyum', 'I finished the 10K 🏅 My legs are gone but I\'m happy']]) }] },
    { k: 'tarif', icon: '🍳', name: T('Anneannesinin tarifi', 'Grandma\'s recipe'), end: T('Anneannesinin tarifini sonunda tutturdu', 'She finally nailed her grandma\'s recipe'), steps: [
      { say: L([['Anneannemin mantı tarifini deniyorum, bir türlü tutturamıyorum 😩', 'I\'m trying my grandma\'s dumpling recipe and I just can\'t get it right 😩']]), ask: L([['Sen yemek yapmayı sever misin?', 'Do you like cooking?']]) },
      { say: L([['Üçüncü deneme… hamur yine yapıştı 🙈', 'Third try… the dough stuck again 🙈']]) },
      { say: L([['Sonunda oldu! Tadına bakar mısın? Birlikte yapalım', 'Finally! Will you taste it? Let\'s make it together']]), ev: 'Cook Together' }] },
    { k: 'kardes', icon: '👧', name: T('Kardeşinin derdi', 'Her sister\'s heartbreak'), end: T('Kardeşinin ayrılığında yanında oldu', 'She stood by her sister through a breakup'), steps: [
      { say: L([['Kız kardeşim sevgilisinden ayrıldı, bütün gece ağladı 😢', 'My sister broke up with her boyfriend, she cried all night 😢']]), ask: L([['Ona ne desem sence?', 'What should I tell her?']]) },
      { say: L([['Kardeşimi dondurma yemeye götürdüm, biraz güldü sonunda 🍦', 'I took my sister out for ice cream, she finally laughed a little 🍦']]) },
      { say: L([['Kardeşim toparlandı, sana selam söyledi 😊 Senden çok bahsettim de', 'My sister is better, she says hi 😊 I talked about you a lot']]) }] },
    { k: 'tatil', icon: '✈️', name: T('Tatil hayali', 'Dream trip'), end: T('Kumbarasını doldurdu, birlikte bir yolculuk planladınız', 'She filled her piggy bank and you planned a trip together'), steps: [
      { say: L([['Para biriktiriyorum, bir gün İtalya\'ya gideceğim 🇮🇹', 'I\'m saving money, one day I\'ll go to Italy 🇮🇹']]), ask: L([['Sen nereye gitmek isterdin?', 'Where would you want to go?']]) },
      { say: L([['Bugün kumbarayı saydım… yarısı oldu 🐷', 'I counted my piggy bank today… halfway there 🐷']]) },
      { say: L([['Bilet fiyatlarına baktım… seninle gitsek? ✈️', 'I looked at ticket prices… what if we went together? ✈️']]), ev: 'Plan A Trip' }] }
  ];

  /* ☕ Gündelik olay cümleleri (system.js c:mvdaily01x). id → onun cevabı; mood: olaydan sonra duygusal hafızaya ne yazılır */
  const EV = {
    mvdl01cook: { say: L([['Soğanı sen doğra, ağlayan sen ol 😂', 'You chop the onions, you be the one crying 😂'], ['Bu yemek ikimizin oldu, en güzeli 🍳', 'This dish is ours now, the best one 🍳']]) },
    mvdl02movie: { say: L([['Korkunç sahnede gözümü kapatırsam gülme ama 🙈', 'Don\'t laugh if I close my eyes at the scary part 🙈'], ['Patlamış mısırın yarısı benim, haberin olsun 🍿', 'Half the popcorn is mine, just so you know 🍿']]) },
    mvdl03walk: { say: L([['Böyle yürüyünce dünya yavaşlıyor sanki 🌆', 'When we walk like this the world slows down 🌆'], ['Elimi bırakma, soğuk 🥶', 'Don\'t let go of my hand, it\'s cold 🥶']]) },
    mvdl04market: { say: L([['Sepete çikolata koydum, görmedin say 🍫', 'I put chocolate in the cart, pretend you didn\'t see 🍫'], ['Evli çiftler gibiyiz, fark ettin mi? 😳', 'We\'re like a married couple, did you notice? 😳']]) },
    mvdl05game: { say: L([['Yine kazandım! Rövanş ister misin? 😏', 'I won again! Want a rematch? 😏'], ['Hile yaptın, gördüm seni 😤', 'You cheated, I saw you 😤']]) },
    mvdl06karaoke: { say: L([['Sesim berbat ama seninle söylerken umurumda değil 🎤', 'My voice is awful but I don\'t care when I sing with you 🎤']]), grow: { cesur: 3 } },
    mvdl07asleep: { say: L([['Uyandım, hâlâ kolundayım… kıpırdama 😴', 'I woke up and I\'m still in your arms… don\'t move 😴']]), mood: 'mutlu' },
    mvdl08talk: { say: L([['Bunu kimseye anlatmamıştım… dinlediğin için teşekkür ederim 🥺', 'I\'d never told anyone that… thank you for listening 🥺']]), grow: { acik: 4, guven: 3 } },
    mvdl09fight: { say: L([['Bazen beni hiç dinlemiyorsun! 😠', 'Sometimes you don\'t listen to me at all! 😠'], ['Şu an seninle konuşmak istemiyorum 😤', 'I don\'t want to talk to you right now 😤']]), mood: 'kirgin' },
    mvdl10makeup: { say: L([['Tamam… ben de haksızdım. Barışalım mı? 🥺', 'Okay… I was wrong too. Shall we make up? 🥺'], ['Kavga etmekten nefret ediyorum, gel buraya 🫂', 'I hate fighting, come here 🫂']]), mood: 'baris' },
    mvdl11gift: { say: L([['Bu benim için mi? Hiç beklemiyordum 😭💝', 'This is for me? I didn\'t expect it at all 😭💝']]), mood: 'mutlu' },
    mvdl12sick: { say: L([['Çorban ilaç gibi geldi… iyi ki varsın 🥣', 'Your soup was like medicine… I\'m so glad you exist 🥣']]), grow: { bag: 4 } },
    mvdl13comfort: { say: L([['Sarıl bana biraz, sadece sarıl 🫂', 'Just hold me for a while, just hold me 🫂']]), grow: { guven: 4 } },
    mvdl14celebrate: { say: L([['Şerefe! Bu gece bizim gecemiz 🥂', 'Cheers! Tonight is our night 🥂']]), mood: 'mutlu' },
    mvdl15breakfast: { say: L([['Yatakta kahvaltı mı? Beni çok şımartıyorsun 🥞', 'Breakfast in bed? You spoil me too much 🥞']]), mood: 'mutlu' },
    mvdl16paint: { say: L([['Yanağına boya bulaşmış, dur sileyim… ay daha kötü oldu 😂', 'You\'ve got paint on your cheek, let me wipe it… oh it got worse 😂']]) },
    mvdl17boxes: { say: L([['Bu kutuda ne var bilmiyorum, ben de şaşırıyorum 📦', 'I don\'t know what\'s in this box, I\'m surprised too 📦']]) },
    mvdl18run: { say: L([['Bekle beni! Sen koşmuyorsun, uçuyorsun 😮‍💨', 'Wait for me! You\'re not running, you\'re flying 😮‍💨']]), grow: { cesur: 2 } },
    mvdl19trip: { say: L([['Haritaya rotamızı çizdim, ilk durak deniz kenarı ✈️', 'I drew our route on the map, first stop is the seaside ✈️']]), grow: { bag: 3 } },
    mvdl20album: { say: L([['Bu benim yedi yaşımda… gülme! 📷', 'This is me at seven… don\'t laugh! 📷']]), grow: { acik: 3 } },
    mvdl21dance: { say: L([['Müzik yok ama biz dans ediyoruz, deliyiz 💃', 'There\'s no music but we\'re dancing, we\'re crazy 💃']]), mood: 'mutlu', grow: { cesur: 2 } },
    mvdl22stars: { say: L([['Şuradaki yıldız bizim olsun 🌌', 'Let that star over there be ours 🌌']]), grow: { bag: 3 } },
    mvdl23drive: { say: L([['Camı aç, müziği aç, sadece sür 🚗', 'Roll down the window, turn up the music, just drive 🚗']]), grow: { cesur: 2 } },
    mvdl24gossip: { say: L([['Bunu kimseye söyleme ama… 🤭', 'Don\'t tell anyone but… 🤭']]), grow: { acik: 2 } }
  };

  /* 💭 Derin sorular: kademe 1 her zaman · 2: ❤️ Aşk ≥ 30 · 3: Aşk ≥ 60 ve 🌱 Açıklık ≥ 40. her: onun kendi cevabı (fikri c.life.views'e yazılır) */
  const DEEP = [
    { k: 'cocuk', t: 1, q: L([['Çocukken ne olmak isterdin?', 'What did you want to be as a kid?']]), her: L([['Ben veteriner olmak isterdim, bütün sokak kedilerini eve taşırdım 🐾', 'I wanted to be a vet, I used to bring every stray cat home 🐾']]) },
    { k: 'sabah', t: 1, q: L([['Sabah insanı mısın, gece insanı mı?', 'Are you a morning person or a night owl?']]), her: L([['Ben kesin gece insanıyım, sabahları konuşma benimle 😴', 'I\'m definitely a night owl, don\'t talk to me in the morning 😴']]) },
    { k: 'sarki', t: 1, q: L([['Şu an kafanda dönen şarkı hangisi?', 'Which song is stuck in your head right now?']]), her: L([['Benimkinde eski, romantik bir şarkı var, sebebini tahmin et 😏', 'Mine is an old romantic song, guess why 😏']]) },
    { k: 'yemek', t: 1, q: L([['Son yemeğin olsa ne yerdin?', 'If it were your last meal, what would you eat?']]), her: L([['Ben annemin sarması derdim, tartışmaya kapalı 🍃', 'I\'d say my mom\'s stuffed vine leaves, no discussion 🍃']]) },
    { k: 'super', t: 1, q: L([['Bir süper gücün olsa ne olurdu?', 'If you had one superpower, what would it be?']]), her: L([['Ben zamanı durdururdum… güzel anlarda 🕰️', 'I\'d stop time… during the good moments 🕰️']]) },
    { k: 'korku', t: 2, q: L([['En çok neyden korkarsın?', 'What are you most afraid of?']]), her: L([['Ben yalnız kalmaktan korkuyorum… kimseye söylemedim bunu 🥺', 'I\'m afraid of being alone… I never told anyone that 🥺']]) },
    { k: 'mutlu', t: 2, q: L([['Hayatındaki en mutlu anı anlatır mısın?', 'Will you tell me about the happiest moment of your life?']]), her: L([['Benimki küçük bir an: yağmurda babamla eve koşmuştuk, ikimiz de gülüyorduk ☔', 'Mine is a small one: running home in the rain with my dad, both of us laughing ☔']]) },
    { k: 'aile', t: 2, q: L([['Ailende en çok kime benziyorsun?', 'Who do you take after most in your family?']]), her: L([['Ben babaanneme benziyormuşum, inatçılığım ondan 😤', 'They say I take after my grandma, that\'s where my stubbornness comes from 😤']]) },
    { k: 'hayal', t: 2, q: L([['Beş yıl sonra kendini nerede görüyorsun?', 'Where do you see yourself in five years?']]), her: L([['Denize bakan küçük bir ev, bir kedi… ve belki biri 😳', 'A little house by the sea, a cat… and maybe someone 😳']]) },
    { k: 'ders', t: 2, q: L([['Hayatın sana öğrettiği en büyük ders ne?', 'What\'s the biggest lesson life taught you?']]), her: L([['Herkese her şeyi anlatmamayı öğrendim… sana anlatıyorum ama 🤫', 'I learned not to tell everyone everything… but I tell you 🤫']]) },
    { k: 'pisman', t: 3, q: L([['Geri dönüp değiştirmek istediğin bir şey var mı?', 'Is there anything you\'d go back and change?']]), her: L([['Bir arkadaşıma hiç özür dilemedim, hâlâ içimde 😔', 'I never apologized to a friend, it still weighs on me 😔']]) },
    { k: 'iliski', t: 3, q: L([['Bir ilişkide senin için en önemli şey ne?', 'What matters most to you in a relationship?']]), her: L([['Benim için dürüstlük. Gerisi zamanla öğrenilir 💗', 'For me it\'s honesty. The rest you learn with time 💗']]) },
    { k: 'sir', t: 3, q: L([['Kimseye söylemediğin bir şeyi bana söyler misin?', 'Will you tell me something you\'ve never told anyone?']]), her: L([['Benimki: ilk mesajını üç kez silip yeniden yazdım 🙈', 'Mine: I deleted and rewrote my first message to you three times 🙈']]) },
    { k: 'kalp', t: 3, q: L([['Hiç kalbin gerçekten kırıldı mı?', 'Has your heart ever really been broken?']]), her: L([['Bir kez… o yüzden bazen temkinliyim, kusura bakma 🥀', 'Once… that\'s why I\'m careful sometimes, I\'m sorry 🥀']]) },
    { k: 'biz', t: 3, q: L([['Bizi bir kelimeyle anlatsan hangisi olurdu?', 'If you described us in one word, what would it be?']]), her: L([['Benim kelimem: ev 🏡', 'My word: home 🏡']]) }
  ];

  // 🔀 İkilemler: a / b (en); karakterin seçimi id'sine göre sabit
  // tek kelimeler sözlüğe girmez ("Yaz" başka yerde "yaz" fiili): sadece "a / b" çifti
  const D = (id, a, b) => { T(`${a[0]} / ${b[0]}`, `${a[1]} / ${b[1]}`); return [id, a[0], b[0]]; };
  const DILEMMA = [
    D('deniz', ['Deniz', 'Sea'], ['Dağ', 'Mountain']), D('kahve', ['Kahve', 'Coffee'], ['Çay', 'Tea']), D('kedi', ['Kedi', 'Cat'], ['Köpek', 'Dog']),
    D('yaz', ['Yaz', 'Summer'], ['Kış', 'Winter']), D('film', ['Film', 'Movie'], ['Dizi', 'Series']), D('sehir', ['Şehir', 'City'], ['Köy', 'Village']),
    D('sabah', ['Gün doğumu', 'Sunrise'], ['Gün batımı', 'Sunset']), D('tatli', ['Tatlı', 'Sweet'], ['Tuzlu', 'Salty']), D('kitap', ['Kitap', 'Book'], ['Oyun', 'Game']),
    D('ev', ['Evde kalmak', 'Staying in'], ['Dışarı çıkmak', 'Going out'])
  ];
  const DIL_Q = L([['Hızlı soru: {o}?', 'Quick question: {o}?'], ['Bir seçim yap, düşünmeden: {o}?', 'Pick one, don\'t think: {o}?'], ['Merak ettim… {o}?', 'I\'m curious… {o}?']]);
  const DIL_SAME = L([['Ben de! Anlaşıyoruz işte 😍', 'Me too! See, we get each other 😍'], ['Aynı şeyi seçtik, bu bir işaret 😏', 'We picked the same thing, that\'s a sign 😏']]);
  const DIL_DIFF = L([['Ben {o} derdim ama seninkine de saygım var 😌', 'I\'d say {o} but I respect yours 😌'], ['Hmm, ben {o} seçerdim… bunu tartışacağız 😏', 'Hmm, I\'d pick {o}… we\'ll argue about this 😏']]);
  const DIL_NONE = L([['İkisi de olmaz mı? Kaçamak cevap 😂', 'Both? That\'s a dodge 😂']]);

  // 💬 açık cevabına tepki (kategori: kaba · kisa · sicak · normal)
  const REACT = {
    kaba: L([['Bunu hiç hak etmedim 😞', 'I really didn\'t deserve that 😞'], ['Sana açılmaya çalışıyordum… 😔', 'I was trying to open up to you… 😔']]),
    kisa: L([['Hepsi bu mu? 🙄 Biraz anlat ama', 'That\'s it? 🙄 Tell me a bit more'], ['Kısa kestin, sonra yine soracağım 😏', 'You kept it short, I\'ll ask again later 😏']]),
    sicak: L([['Bunu söylemen çok güzel 🥺', 'It\'s so nice that you said that 🥺'], ['Seni her gün biraz daha tanıyorum, bayılıyorum 💗', 'I get to know you a little more every day, I love it 💗']]),
    normal: L([['Hmm, düşündürdün beni 🤔', 'Hmm, you got me thinking 🤔'], ['Bunu bilmiyordum, not ettim 😌', 'I didn\'t know that, noted 😌'], ['İlginç… sende hep bir şey çıkıyor 😏', 'Interesting… there\'s always something more with you 😏']])
  };
  const HER_LEAD = L([['Benimki mi?', 'Mine?'], ['Ben de söyleyeyim:', 'Let me say mine too:'], ['Sıra bende:', 'My turn:']]);
  // 📅 gündem sorusuna cevabın (destek)
  const G_THANKS = L([['Haklısın… iyi ki sana sordum 🥺', 'You\'re right… I\'m glad I asked you 🥺'], ['Sağ ol, biraz rahatladım 😮‍💨', 'Thanks, I feel a bit better 😮‍💨'], ['Seninle konuşunca her şey daha kolay 💗', 'Everything is easier when I talk to you 💗']]);
  const G_NAME = L([['{isim}… çok yakıştı! Artık adı bu 🐱', '{isim}… it suits it! That\'s its name now 🐱']]);
  const G_OFFER_YES = L([['Yaşasın! Hadi o zaman 🥰', 'Yay! Come on then 🥰'], ['Biliyordum evet diyeceğini 😊', 'I knew you\'d say yes 😊']]);
  const G_OFFER_NO = L([['Peki… başka zaman 😔', 'Okay… another time 😔'], ['Tamam, ısrar etmiyorum 😌', 'Okay, I won\'t push 😌']]);
  const G_OFFER_Q = L([['Bunu birlikte kutlayalım mı?', 'Shall we celebrate together?'], ['Gelir misin?', 'Will you come?'], ['Benimle yapar mısın?', 'Will you do it with me?']]);
  const G_REMIND = L([['Bu arada {x} konusu… hâlâ aklımda', 'By the way, the {x} thing… it\'s still on my mind'], ['{x} diye bir derdim vardı ya, anlatayım mı?', 'Remember my {x} thing? Shall I tell you?']]);

  /* 🗓️ Planların: "yarın sınavım var", "bu akşam maç var", "haftaya mülakatım var", "cumartesi düğüne gideceğim".
   * h: kaç saat sonra sorar. ack: hemen; ask: sonra "nasıl geçti?" (açık soru) */
  const PLAN_WHEN = [['bu akşam', 5], ['bu gece', 6], ['yarın', 16], ['öbür gün', 40], ['hafta sonu', 60], ['cumartesi', 60], ['pazar', 72], ['pazartesi', 72], ['haftaya', 140], ['gelecek hafta', 140]];
  const PLAN_ACK = L([['{x} demek… Bol şans! Sonra anlat bana 🤞', '{x}… Good luck! Tell me about it after 🤞'], ['{x}… aklımda, sonra soracağım 😌', '{x}… I\'ll remember, I\'ll ask later 😌']]);
  const PLAN_ASK = L([['{x} nasıl geçti? Merak ettim 🥺', 'How did the {x} go? I\'ve been wondering 🥺'], ['Hani {x} vardı… anlatsana, nasıldı?', 'You had the {x}… tell me, how was it?'], ['{x} bitti mi? Bütün gün düşündüm 😳', 'Is the {x} over? I thought about it all day 😳']]);
  const PLAN_GOOD = L([['Biliyordum! Seninle gurur duyuyorum 🥳', 'I knew it! I\'m so proud of you 🥳'], ['Harika! Bunu kutlamamız lazım 🥂', 'Amazing! We have to celebrate 🥂']]);
  const PLAN_BAD = L([['Üzüldüm… gel sarılayım 🫂', 'I\'m sorry… come here, let me hug you 🫂'], ['Olsun, bir dahakine olur. Ben yanındayım 💗', 'It\'s okay, next time. I\'m here for you 💗']]);
  const PLAN_MID = L([['Anlattığın için sağ ol, unutmadım bak 😌', 'Thanks for telling me, see, I didn\'t forget 😌']]);

  // 💔 / 💞 duygusal hafıza: kırgınken soğuk ek, özür, mutluyken ek, hatırlatma
  const EMO = {
    soguk: L([['Hı.', 'Mhm.'], ['Neyse.', 'Whatever.'], ['Hâlâ biraz kırgınım, bilesin 😒', 'I\'m still a bit hurt, just so you know 😒'], ['Tamam ama dünkü şeyi unutmadım 😒', 'Fine, but I haven\'t forgotten what happened 😒']]),
    affet: L([['Tamam… affettim ama bir daha yapma 😒💗', 'Okay… I forgive you, but don\'t do it again 😒💗'], ['Özür dilemen yetti. Gel buraya 🫂', 'Your apology is enough. Come here 🫂']]),
    ozurYok: L([['Neden özür diliyorsun? Bir şey mi yaptın? 🤨', 'Why are you apologizing? Did you do something? 🤨']]),
    mutlu: L([['Bugün çok mutluyum, hâlâ gülümsüyorum 😊', 'I\'m so happy today, I\'m still smiling 😊'], ['Az önceki an aklımdan çıkmıyor 🥰', 'I can\'t stop thinking about that moment 🥰']]),
    anKirgin: L([['{x} günü kavga etmiştik, hatırlıyor musun? Barışmamız güzeldi ama 🥺', 'We fought on {x}, remember? Making up was nice though 🥺']]),
    anMutlu: L([['{x} günü ne mutluydum… tekrar yaşayalım mı? 🥰', 'I was so happy on {x}… shall we do it again? 🥰']]),
    kaba: L([['Bu çok kırıcıydı 😠', 'That was really hurtful 😠'], ['Benimle böyle konuşma 😤', 'Don\'t talk to me like that 😤']])
  };
  // \b Türkçe harflerde çalışmaz: kelime sınırı \p{L} ile (lookbehind yok, eski iOS)
  const wRe = (ws, end) => new RegExp(`(?:^|[^\\p{L}])(${ws.join('|')})${end ? '(?![\\p{L}])' : ''}`, 'u');
  const KABA_RE = wRe(['salak', 'aptal', 'gerizekalı', 'geri zekalı', 'siktir', 'defol', 'sus be', 'lanet olası', 'şerefsiz', 'ahmak', 'beyinsiz', 'aşağılık', 'çirkinsin', 'senden nefret ediyorum', 'seni sevmiyorum'], 1);
  const OZUR_RE = wRe(['özür dilerim', 'özür diliyorum', 'kusura bakma', 'affet beni', 'affedersin', 'haksızlık ettim', 'hata yaptım'], 0);
  const BAD_RE = wRe(['kötü', 'berbat', 'kaldım', 'kaybettim', 'olmadı', 'rezalet', 'batırdım', 'felaket', 'iptal', 'iyi değil', 'pek iyi değil'], 0);
  const GOOD_RE = wRe(['iyi', 'güzel', 'harika', 'süper', 'mükemmel', 'geçtim', 'kazandım', 'başardım', 'muhteşem', 'fena değil', 'mutlu', 'çok iyi'], 0);
  const WARM_RE = wRe(['seni', 'seninle', 'sevgi', 'aşk', 'ben de', 'aynen', 'kesinlikle', 'özledim', 'güzel', 'mutlu', 'huzur', 'aile', 'beraber', 'birlikte', 'hayal'], 0);

  // 🔁 Yedek cevap havuzları (anlamadığında): bağlam (chat / flirt / sex / after) × gece · {w}: mesajından bir kelime (yankı)
  const FB = {
    echo: L([['{w} mi? Biraz daha anlat, merak ettim 🤔', '{w}? Tell me more, I\'m curious 🤔'], ['{w} dedin ve aklım takıldı 😏', 'You said {w} and now I can\'t stop thinking 😏'], ['Hmm, {w}… bunu hiç böyle düşünmemiştim', 'Hmm, {w}… I never thought of it like that'], ['“{w}”… bunu sonra uzun uzun konuşalım, şimdi sana bakmak istiyorum 😌', '“{w}”… let\'s talk about that properly later, right now I just want to look at you 😌']]),
    chat: L([['Bazen ne dediğini anlamıyorum ama seni dinlemek hoşuma gidiyor 😊', 'Sometimes I don\'t get what you mean, but I like listening to you 😊'], ['Dur, kafam karıştı… tekrar söyler misin? 🙈', 'Wait, I\'m confused… can you say that again? 🙈'], ['Bunu biraz açar mısın {sen}?', 'Can you explain that a bit {sen}?'], ['Ha? 😅 Ben başka bir şey düşünüyordum, pardon', 'Huh? 😅 I was thinking of something else, sorry']]),
    flirt: L([['Ne dediğini unuttum, sana bakarken dalıp gittim 😳', 'I forgot what you said, I got lost looking at you 😳'], ['Ne dersen de, sesin güzel {sen} 💗', 'Whatever you say, your voice is lovely {sen} 💗'], ['Bunu söyleyip duruyorsun ama asıl ne istiyorsun? 😏', 'You keep saying that, but what do you really want? 😏']]),
    sex: L([['Ahh… ne dedin? Kafam bulanık 🥵', 'Ahh… what did you say? My head is foggy 🥵'], ['Şşş, konuşma, devam et 😩', 'Shh, don\'t talk, keep going 😩'], ['Kelimeler yetmiyor şu an… 🫦', 'Words aren\'t enough right now… 🫦']]),
    after: L([['Hâlâ nefes nefeseyim, sonra anlat 😮‍💨', 'I\'m still out of breath, tell me later 😮‍💨'], ['Kafam bomboş, sadece sarıl bana 🫂', 'My head is empty, just hold me 🫂']]),
    gece: L([['Gecenin bu saatinde kafam pek çalışmıyor 😴', 'My head doesn\'t really work at this hour 😴'], ['Uykum geldi galiba, ne dedin? 🥱', 'I think I\'m sleepy, what did you say? 🥱']])
  };
  const FB_STOP = ['ama', 'gibi', 'şimdi', 'sonra', 'bence', 'neden', 'nasıl', 'nereye', 'nerede', 'bunu', 'şunu', 'onun', 'senin', 'benim', 'bizim', 'çünkü', 'hadi', 'evet', 'hayır', 'tamam', 'yani', 'falan', 'filan', 'işte', 'kadar', 'daha', 'biraz', 'gerçekten', 'galiba', 'herhalde', 'belki', 'zaten', 'artık', 'diye', 'olur', 'oldu', 'olsun', 'şey', 'bişey', 'birşey', 'hiçbir', 'hepsi', 'seni', 'beni', 'sana', 'bana', 'seninle', 'benimle',
    'bugün', 'yarın', 'akşam', 'sabah', 'gece', 'öğlen', 'yine', 'burada', 'orada', 'şurada', 'birlikte', 'beraber', 'gerçek', 'sadece', 'hemen', 'bazen', 'herkes', 'hiçbir', 'bilmiyorum', 'merhaba', 'günaydın', 'iyiyim', 'nasılsın', 'teşekkürler', 'teşekkür', 'lütfen', 'canım', 'aşkım', 'tatlım', 'bebeğim'];
  const FB_SEXW = /^(am|sik|yarra|göt|meme|amcı|sok|boşal|azd|sevi|seks|çıplak|soyun|yala|em|osur|işe)/u;

  // 😂 iç şaka (aynı kelime 4. kez) ve 🏷️ lakap (Aşk ≥ 70, Bağlılık ≥ 50)
  const JOKE_NEW = L([['Yine mi {w}? 😂 Bu artık bizim şakamız oldu', '{w} again? 😂 That\'s our inside joke now'], ['{w} kelimesini her duyduğumda seni düşüneceğim 😂', 'Every time I hear {w} I\'ll think of you 😂']]);
  const JOKE_BACK = L([['Aklıma {w} geldi, gülmeden duramadım 😂', '{w} popped into my head and I couldn\'t stop laughing 😂'], ['Bugün biri {w} dedi, sana yazmadan duramadım 😂', 'Someone said {w} today, I had to text you 😂']]);
  const LAKAP = L([['ayıcık', 'teddy'], ['minnoş', 'cutie'], ['kaptan', 'captain'], ['tatlı bela', 'sweet trouble'], ['yıldızım', 'my star'], ['şekerim', 'sugar'], ['kuzum', 'my lamb'], ['prensim', 'my prince']]);
  const LAKAP_Q = L([['Sana bir lakap taktım: {l} 🥰 Olur mu?', 'I gave you a nickname: {l} 🥰 Is that okay?']]);
  const LAKAP_YES = L([['Artık sana hep {l} diyeceğim 🥰', 'From now on I\'ll always call you {l} 🥰']]);
  const LAKAP_NO = L([['Peki, daha iyisini bulurum 😅', 'Okay, I\'ll find a better one 😅']]);

  // 👭 söylenti: arkadaşı senin hakkında bir şey anlatmış (onun hafızasından)
  const RUMOR = {
    hobi: L([['{d} bana senin {x} ile uğraştığını söyledi 😏 Bana neden anlatmadın?', '{d} told me you\'re into {x} 😏 Why didn\'t you tell me?']]),
    is: L([['{d} senin {x} olduğunu söyledi… etkileyici 😏', '{d} said you work as {x}… impressive 😏']]),
    sehir: L([['{d} senin {x} yaşadığını söyledi, doğru mu? 📍', '{d} said you live in {x}, is that true? 📍']]),
    pet: L([['{d} senin {x} olduğunu söyledi! Neden benden sakladın? 🐾', '{d} said you have a {x}! Why did you hide it from me? 🐾']])
  };

  // 🌱 kişilik gelişimi: eksenler (Güven, Açıklık, Bağlılık, Cesaret) 0–100, başlangıç 20. Eşikte bir kez cümle; 80'de kişilik özelliği değişebilir
  const GROW = [
    ['guven', '🤝', T('Güven', 'Trust')], ['acik', '🔓', T('Açıklık', 'Openness')], ['bag', '💞', T('Bağlılık', 'Attachment')], ['cesur', '🔥', T('Cesaret', 'Boldness')]
  ];
  const GROW_SAY = {
    guven: { 50: L([['Sana güvenmeye başladım, bunu biliyor musun? 🥺', 'I\'ve started to trust you, do you know that? 🥺']]), 80: L([['Sana her şeyimi emanet ederim 💗', 'I\'d trust you with everything 💗']]) },
    acik: { 50: L([['Seninle konuşurken kendimi saklamıyorum artık 😌', 'I don\'t hide myself when I talk to you anymore 😌']]), 80: L([['Eskiden kimseye açılmazdım… sen değiştirdin bunu 🌱', 'I used to open up to no one… you changed that 🌱']]) },
    bag: { 50: L([['Bir gün yazmasan özlüyorum, fark ettim 🥺', 'If you don\'t text for a day I miss you, I noticed 🥺']]), 80: L([['Sensiz bir gün düşünemiyorum artık 💞', 'I can\'t imagine a day without you anymore 💞']]) },
    cesur: { 50: L([['Senin yanında daha cesurum 😏', 'I\'m braver when I\'m with you 😏']]), 80: L([['Artık ne istediğimi söylemekten korkmuyorum 🔥', 'I\'m not afraid to say what I want anymore 🔥']]) }
  };
  // 80'de: bu özelliği varsa şuna dönüşür
  const EVOLVE = { acik: [['Utangaç', 'Neşeli'], ['Gizemli', 'Dürüst']], guven: [['Güvensiz', 'Özgüvenli'], ['Gergin', 'Sakin']], bag: [['Soğuk', 'Romantik'], ['Asi', 'Sadık']], cesur: [['Utangaç', 'Flörtöz'], ['Alçakgönüllü', 'Özgüvenli']] };

  Stories.LIFE = { GUNDEM, EV, DEEP, DILEMMA, DIL_Q, DIL_SAME, DIL_DIFF, DIL_NONE, REACT, HER_LEAD, G_THANKS, G_NAME, G_OFFER_YES, G_OFFER_NO, G_OFFER_Q, G_REMIND,
    PLAN_WHEN, PLAN_ACK, PLAN_ASK, PLAN_GOOD, PLAN_BAD, PLAN_MID, EMO, KABA_RE, OZUR_RE, GOOD_RE, BAD_RE, WARM_RE, FB, FB_STOP, FB_SEXW,
    JOKE_NEW, JOKE_BACK, LAKAP, LAKAP_Q, LAKAP_YES, LAKAP_NO, RUMOR, GROW, GROW_SAY, EVOLVE };
  if (Stories.I18n) Stories.I18n.add(EN);
})();
