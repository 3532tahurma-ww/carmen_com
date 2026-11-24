/* 🌱 Yaşayan karakter (v1108; v1120 +16 gündem, ✨ değişim gündemleri): gündem, gündelik olay cümleleri, derin sorular, ikilemler, yedek cevap havuzları, planlar, duygusal hafıza, kişilik gelişimi.
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
      { say: L([['Bilet fiyatlarına baktım… seninle gitsek? ✈️', 'I looked at ticket prices… what if we went together? ✈️']]), ev: 'Plan A Trip' }] },
    { k: 'mulakat', icon: '💼', name: T('Hayalindeki iş', 'Her dream job'), end: T('Hayalindeki işe girdi', 'She landed her dream job'), steps: [
      { say: L([['Hayalimdeki şirketten mülakat daveti geldi! 😱', 'My dream company invited me to an interview! 😱']]), ask: L([['Mülakatta ne sorarlar sence?', 'What do you think they\'ll ask?']]) },
      { say: L([['Mülakat bitti, sanırım iyi geçti… ama ya almazlarsa? 😬', 'The interview is over, I think it went well… but what if they don\'t take me? 😬']]) },
      { say: L([['İŞE ALINDIM! 🥳 Pazartesi başlıyorum', 'I GOT THE JOB! 🥳 I start on Monday']]), ev: 'Celebration Dinner' }] },
    { k: 'komsu', icon: '🔊', name: T('Gürültücü komşu', 'The noisy neighbour'), end: T('Gürültücü komşusuyla arkadaş oldu', 'She made friends with her noisy neighbour'), steps: [
      { say: L([['Üst kattaki komşu her gece mobilya taşıyor sanki 😤', 'The upstairs neighbour seems to move furniture every night 😤']]), ask: L([['Sence kapısını çalayım mı?', 'Should I knock on their door?']]) },
      { say: L([['Kapısını çaldım, meğer yeni doğmuş bebekleri varmış 🥹 Kızamadım', 'I knocked, turns out they have a newborn 🥹 I couldn\'t be mad']]) },
      { say: L([['Komşuyla arkadaş olduk, bana kurabiye getirdi 🍪', 'The neighbour and I are friends now, she brought me cookies 🍪']]) }] },
    { k: 'gitar', icon: '🎸', name: T('Gitar dersi', 'Guitar lessons'), end: T('Gitar çalmayı öğrendi', 'She learned to play the guitar'), steps: [
      { say: L([['Gitar dersine başladım, parmaklarım acıyor 🎸', 'I started guitar lessons, my fingers hurt 🎸']]), ask: L([['Sen bir enstrüman çalar mısın?', 'Do you play an instrument?']]) },
      { say: L([['İlk şarkımı çalabildim! Yavaş ama oldu 🎶', 'I played my first song! Slowly, but I did it 🎶']]) },
      { say: L([['Sana bir şarkı çalmak istiyorum… birlikte söyler miyiz? 🎸', 'I want to play you a song… shall we sing together? 🎸']]), ev: 'Karaoke Duet' }] },
    { k: 'bitki', icon: '🌱', name: T('Balkon bahçesi', 'Balcony garden'), end: T('Balkonunda küçük bir bahçe yetiştirdi', 'She grew a little garden on her balcony'), steps: [
      { say: L([['Balkona domates ve fesleğen ektim 🌱', 'I planted tomatoes and basil on the balcony 🌱']]), ask: L([['Senin hiç bitkin oldu mu?', 'Have you ever had a plant?']]) },
      { say: L([['İlk domatesim kızardı! Bebeğim gibi bakıyorum 🍅', 'My first tomato turned red! I look after it like a baby 🍅']]) },
      { say: L([['Balkon cennet gibi oldu, akşam gel yıldızlara bakalım 🌌', 'The balcony is like paradise now, come over tonight and let\'s look at the stars 🌌']]), ev: 'Stargazing' }] },
    { k: 'kitap', icon: '📚', name: T('Kitap kulübü', 'Book club'), end: T('Kitap kulübüne katıldı', 'She joined a book club'), steps: [
      { say: L([['Bir kitap kulübüne katıldım, bu ay bir aşk romanı okuyoruz 📚', 'I joined a book club, we\'re reading a love story this month 📚']]), ask: L([['En son hangi kitabı okudun?', 'What was the last book you read?']]) },
      { say: L([['Kulüpte romanın sonunu tartıştık, herkes ağladı 😭', 'We discussed the ending at the club, everyone cried 😭']]) },
      { say: L([['Kitabı bitirdim ve aklıma hep sen geldin… biraz konuşalım mı? 🌙', 'I finished the book and kept thinking of you… shall we talk for a bit? 🌙']]), ev: 'Deep Talk' }] },
    { k: 'dogum', icon: '🎂', name: T('Doğum günü partisi', 'Birthday party'), end: T('Doğum gününü kutladı', 'She celebrated her birthday'), steps: [
      { say: L([['Doğum günüm yaklaşıyor, parti mi yapsam yoksa sessiz mi geçirsem? 🎂', 'My birthday is coming, should I throw a party or keep it quiet? 🎂']]), ask: L([['Sen hangisini seçerdin?', 'Which would you pick?']]) },
      { say: L([['Pastayı ısmarladım, çilekli 🍓', 'I ordered the cake, strawberry 🍓']]) },
      { say: L([['Mumları üflerken bir dilek tuttum… sen de vardın içinde 🥺', 'I made a wish blowing out the candles… you were in it 🥺']]), ev: 'Surprise Gift' }] },

    /* ✨ Değişim gündemleri (v1120): need { has: [biri], not: [hiçbiri] } şartı (Relationship seçili değilse Single, evliyse Married sayılır).
     * Adım alanları: vote (evet / hayır sorusu: "hayır" dersen fx adımında vazgeçer, no cümlesini söyler; İnatçı / Asi / Şımarık / Kibirli %40 yine yapar),
     * color (cevabındaki saç rengini seçer), fx (karakteri değiştirir): set { Grup: değer } · up [Grup, ±adım] · add 'Özellik' · hair 1 (yeni saç rengi).
     * Yer tutucular: {renk} yeni saç rengi · {eski} / {yeni} değişen değer. endNo: vazgeçince anılar defterine giden cümle.
     * v1121: need.ask (❤️ Aşk en az) · vote sorusu kişiliğe göre VOTE_TONE ile sarılır · ph { k: photo-texts türü, lv: en az seviye, t, d }: değişimden sonra 📸 fotoğraf */
    { k: 'sac', icon: '💇‍♀️', name: T('Saç boyatma', 'Dyeing her hair'), end: T('Saçlarını {renk} boyattı', 'She dyed her hair {renk}'), ph: { k: 'yuz', t: L([['Yeni saçım: {renk} 💇‍♀️', 'My new hair: {renk} 💇‍♀️']]), d: L([['Kuaförden çıkar çıkmaz çekilmiş; {renk} saçları ışıkta parlıyor, parmaklarıyla bir tutamı yüzüne doğru tutuyor.', 'Taken right after the salon; her {renk} hair shines in the light, she holds a strand up to her face.']]) }, steps: [
      { say: L([['Saçlarımdan sıkıldım, rengini değiştirmek istiyorum 💇‍♀️', 'I\'m bored of my hair, I want to change the colour 💇‍♀️']]), ask: L([['Sence hangi renk yakışır bana?', 'Which colour do you think would suit me?']]), color: 1 },
      { say: L([['Kuaförden randevu aldım, yarın koltuğa oturuyorum… heyecanlıyım 😬', 'I booked the hairdresser, I\'m in the chair tomorrow… I\'m nervous 😬']]) },
      { say: L([['Saçlarımı {renk} boyattım! 💇‍♀️ Görsen bayılırsın', 'I dyed my hair {renk}! 💇‍♀️ You\'ll love it'], ['Yeni saçım {renk}… aynada kendimi tanıyamadım 😳💇‍♀️', 'My new hair is {renk}… I didn\'t recognise myself in the mirror 😳💇‍♀️']]), fx: { hair: 1 }, ev: 'Evening Walk' }] },
    { k: 'sackes', icon: '✂️', name: T('Saç kestirme', 'A new haircut'), end: T('Saçlarını kestirdi ({eski} → {yeni})', 'She cut her hair ({eski} → {yeni})'), endNo: T('Saçlarını kestirmekten vazgeçti', 'She decided not to cut her hair'), need: { not: ['Hair Length: Pixie', 'Hair Length: Short'] }, ph: { k: 'yuz', t: L([['Kısa saçlı ben ✂️', 'Me with short hair ✂️']]), d: L([['Ensesi açıkta, saçları artık {yeni}; başını hafifçe yana eğmiş, yeni kesimini gösteriyor.', 'Her neck is bare, her hair is {yeni} now; she tilts her head to show off the new cut.']]) }, steps: [
      { say: L([['Saçlarım çok uzadı, kestirmeyi düşünüyorum ✂️', 'My hair got so long, I\'m thinking of cutting it ✂️']]), ask: L([['Kısa yakışır mı bana, kestireyim mi?', 'Would short hair suit me, should I cut it?']]), vote: 1 },
      { say: L([['İnternette yüz tane kesim kaydettim, karar veremiyorum 🙈', 'I saved a hundred haircuts online, I can\'t decide 🙈']]) },
      { say: L([['Kestirdim! Artık saçlarım {yeni} ✂️ Kafam hafifledi', 'I cut it! My hair is {yeni} now ✂️ My head feels so light']]), no: L([['Vazgeçtim, uzun kalsın; sen de öyle seviyorsun ya 😌', 'I changed my mind, it stays long; you like it that way anyway 😌']]), fx: { up: ['Hair Length', -2] } }] },
    { k: 'gogus', icon: '🍒', name: T('Göğüs estetiği', 'Breast implants'), end: T('Göğüs estetiği yaptırdı ({eski} → {yeni})', 'She got breast implants ({eski} → {yeni})'), endNo: T('Göğüs estetiğinden vazgeçti', 'She decided against breast implants'), need: { not: ['Breast Implants', 'Boob Size: 95'] }, ph: { k: 'gogus', lv: 2, t: L([['Yeni göğüslerim 🍒', 'My new breasts 🍒']]), d: L([['Sargılar çıkmış; aynanın karşısında {yeni} göğüslerini avuçlarıyla kaldırıp ilk kez poz veriyor.', 'The bandages are off; in front of the mirror she lifts her {yeni} breasts in her palms and poses for the first time.']]) }, steps: [
      { say: L([['Kimseye söylemedim ama… göğüs estetiği yaptırmayı düşünüyorum 🫣', 'I haven\'t told anyone but… I\'m thinking of getting breast implants 🫣']]), ask: L([['Sen ne dersin, yaptırayım mı?', 'What do you say, should I do it?']]), vote: 1 },
      { say: L([['Doktorla görüştüm, silikonları elime verdi, ne kadar ağırlar 😳 Ameliyat günü belli oldu', 'I met the doctor, she put the implants in my hand, they\'re so heavy 😳 The surgery date is set']]) },
      { say: L([['Ameliyat bitti, sargılar çıktı… {eski} bedenden {yeni} oldum 😳🍒 Sütyenlerimin hepsi küçük geliyor', 'The surgery is over, the bandages are off… I went from {eski} to {yeni} 😳🍒 None of my bras fit'], ['Silikonlarım yerine oturdu 🍒 Artık {yeni} bedenim, sence nasıl olmuş?', 'My implants have settled 🍒 I\'m a {yeni} now, how do they look?']]),
        no: L([['Vazgeçtim… sen haklısın, ben böyle de güzelim 🥰', 'I changed my mind… you\'re right, I\'m beautiful as I am 🥰']]), fx: { add: 'Breast Implants', up: ['Boob Size', 2] } }] },
    { k: 'kalca', icon: '🍑', name: T('Kalça estetiği', 'Butt implants'), end: T('Kalça estetiği yaptırdı ({eski} → {yeni})', 'She got butt implants ({eski} → {yeni})'), endNo: T('Kalça estetiğinden vazgeçti', 'She decided against butt implants'), need: { not: ['Butt Implants', 'Butt Size: XL'] }, ph: { k: 'kalca', t: L([['Yeni kalçam 🍑', 'My new butt 🍑']]), d: L([['Omzunun üstünden geriye bakıyor; {yeni} beden kalçası dar şortun içinde yuvarlak ve dimdik.', 'She looks back over her shoulder; her size {yeni} butt is round and firm in tight shorts.']]) }, steps: [
      { say: L([['Spor salonunda kalça çalışmaktan yoruldum… silikon yaptırsam mı diyorum 🍑', 'I\'m tired of glute days at the gym… I\'m thinking of getting implants 🍑']]), ask: L([['Yaptırayım mı sence?', 'Do you think I should?']]), vote: 1 },
      { say: L([['Kliniğe gittim, doktor iki beden büyütebiliriz dedi 😬 Üç hafta düzgün oturamayacakmışım!', 'I went to the clinic, the doctor said we can go two sizes up 😬 I won\'t be able to sit properly for three weeks!']]) },
      { say: L([['Oldu! Kalçam {eski} bedenden {yeni} oldu 🍑 Kotlarım artık kapanmıyor 😂', 'Done! My butt went from {eski} to {yeni} 🍑 My jeans won\'t close anymore 😂'], ['Oturmak hâlâ biraz acıtıyor ama aynada arkama bakmaktan kendimi alamıyorum 🍑 {yeni} beden!', 'Sitting still hurts a bit but I can\'t stop looking at my behind in the mirror 🍑 Size {yeni}!']]),
        no: L([['Vazgeçtim, squat yapmaya devam 😤🍑 Sen de böyle seviyorsun zaten', 'I changed my mind, back to squats 😤🍑 You like it this way anyway']]), fx: { add: 'Butt Implants', up: ['Butt Size', 2] } }] },
    { k: 'dudak', icon: '💋', name: T('Dudak dolgusu', 'Lip filler'), end: T('Dudak dolgusu yaptırdı', 'She got lip filler'), endNo: T('Dudak dolgusundan vazgeçti', 'She decided against lip filler'), need: { not: ['Lip Shape: Filler'] }, ph: { k: 'yuz', t: L([['Dolgulu dudaklarım 💋', 'My filled lips 💋']]), d: L([['Kameraya öpücük atıyor; dudakları hâlâ biraz şiş, parlak rujla dolgunluğu daha da belli.', 'She blows a kiss at the camera; her lips are still a little swollen, glossy lipstick makes them look even fuller.']]) }, steps: [
      { say: L([['Dudaklarımı biraz dolgunlaştırmak istiyorum 💋', 'I want to make my lips a little fuller 💋']]), ask: L([['Dolgu yaptırayım mı, ne dersin?', 'Should I get filler, what do you say?']]), vote: 1 },
      { say: L([['Yarın randevum var, iğneden korkuyorum ama 😬💉', 'My appointment is tomorrow, but I\'m scared of needles 😬💉']]) },
      { say: L([['Dolgu yaptırdım! Biraz şiş ama çok güzel olmuş 💋💉', 'I got the filler! A bit swollen but it looks so good 💋💉'], ['Dudaklarım artık dolgulu 💋 Öpünce farkı anlarsın 😏', 'My lips are filled now 💋 You\'ll feel the difference when you kiss me 😏']]),
        no: L([['Vazgeçtim, kendi dudaklarım kalsın 😌💋', 'I changed my mind, I\'ll keep my own lips 😌💋']]), fx: { set: { 'Lip Shape': 'Filler' } } }] },
    { k: 'dovme', icon: '🖋️', name: T('İlk dövme', 'Her first tattoo'), end: T('İlk dövmesini yaptırdı', 'She got her first tattoo'), need: { not: ['Tattoo'] }, ph: { k: 'ayna', t: L([['İlk dövmem 🖋️', 'My first tattoo 🖋️']]), d: L([['Streç filmin altında taze mürekkep; dövmeyi göstermek için kıyafetini kenara çekmiş, yüzünde gururlu bir gülüş.', 'Fresh ink under cling film; she pulls her clothes aside to show it, a proud smile on her face.']]) }, steps: [
      { say: L([['Yıllardır bir dövme yaptırmak istiyorum, küçük bir şey 🖋️', 'I\'ve wanted a tattoo for years, something small 🖋️']]), ask: L([['Sence nereye yaptırayım?', 'Where do you think I should get it?']]) },
      { say: L([['Dövmeciyle konuştum, çizimi hazırladı. Çok tatlı oldu 🥹', 'I talked to the tattoo artist, the design is ready. It\'s so cute 🥹']]) },
      { say: L([['Yaptırdım! 🖋️ Biraz acıdı ama değdi, görmek ister misin? 😏', 'I got it! 🖋️ It hurt a bit but it was worth it, want to see? 😏']]), fx: { add: 'Tattoo' } }] },
    { k: 'piercing', icon: '💎', name: T('Burun piercingi', 'Nose piercing'), end: T('Burnuna piercing taktırdı', 'She got her nose pierced'), endNo: T('Burun piercinginden vazgeçti', 'She decided against a nose piercing'), need: { not: ['Nose Piercing'] }, ph: { k: 'yuz', t: L([['Burnumdaki taş 💎', 'The stone in my nose 💎']]), d: L([['Yüzünü kameraya yaklaştırmış; burnundaki minik taş flaşta parlıyor.', 'She brings her face close to the camera; the tiny stone in her nose sparkles in the flash.']]) }, steps: [
      { say: L([['Burnuma piercing taktırsam nasıl olur? 💎', 'What if I got my nose pierced? 💎']]), ask: L([['Yakışır mı sence, taktırayım mı?', 'Would it suit me, should I do it?']]), vote: 1 },
      { say: L([['Taktırdım! Minicik bir taş, ışıkta parlıyor 💎', 'I did it! A tiny stone, it sparkles in the light 💎']]), no: L([['Taktırmadım, annem duysa kıyamet kopardı zaten 😅', 'I didn\'t do it, my mom would have lost it anyway 😅']]), fx: { add: 'Nose Piercing' } },
      { say: L([['Piercingim iyileşti, artık değiştirebilirim; altın mı gümüş mü? 😊', 'My piercing healed, I can change it now; gold or silver? 😊']]) }] },
    { k: 'sevgili', icon: '💘', name: T('Bir teklif aldı', 'Someone asked her out'), end: T('Bir sevgilisi oldu', 'She got a boyfriend'), endNo: T('Gelen teklifi geri çevirdi', 'She turned down the offer'), need: { has: ['Relationship: Single', 'Relationship: Divorced'] }, steps: [
      { say: L([['İş yerinde biri bana çıkma teklif etti… 😳', 'Someone at work asked me out… 😳']]), ask: L([['Sence kabul edeyim mi?', 'Do you think I should say yes?']]), vote: 1 },
      { say: L([['Onunla kahve içtik. Tatlı biri ama seninle konuşmak gibi değil 🙈', 'We had coffee. He\'s sweet but it\'s not like talking to you 🙈']]) },
      { say: L([['Resmi oldu, artık bir sevgilim var 💘 Ama sen yine benim sırdaşımsın 😏', 'It\'s official, I have a boyfriend now 💘 But you\'re still my confidant 😏']]), no: L([['Ona hayır dedim… kalbim başka yerde galiba 😳', 'I told him no… I think my heart is somewhere else 😳']]), fx: { set: { Relationship: 'Has Boyfriend' } } }] },
    { k: 'evlilik', icon: '💍', name: T('Evlilik teklifi', 'The proposal'), end: T('Sevgilisiyle evlendi', 'She married her boyfriend'), endNo: T('Evlilik teklifini geri çevirdi', 'She turned down the proposal'), need: { has: ['Relationship: Has Boyfriend'] }, ph: { k: 'kiyafet', t: L([['Gelinliğimle 👰', 'In my wedding dress 👰']]), d: L([['Beyaz gelinliğin içinde aynaya dönmüş; elinde buket, parmağında yeni yüzüğü.', 'In a white wedding dress, turned to the mirror; a bouquet in her hand, the new ring on her finger.']]) }, steps: [
      { say: L([['Sevgilimin çekmecesinde bir yüzük kutusu gördüm… 😳💍', 'I saw a ring box in my boyfriend\'s drawer… 😳💍']]), ask: L([['Teklif ederse evet demeli miyim?', 'If he proposes, should I say yes?']]), vote: 1 },
      { say: L([['Etti! Diz çöktü, herkes bize bakıyordu… cevabımı yarın vereceğim dedim 🙈', 'He did it! He got down on one knee, everyone was watching… I said I\'d answer tomorrow 🙈']]) },
      { say: L([['Evlendik! 💍👰 Nikâh küçüktü ama çok güzeldi… artık evli bir kadınım 😏', 'We got married! 💍👰 It was a small ceremony but beautiful… I\'m a married woman now 😏']]), no: L([['Ona hayır dedim… hazır değilim. Sen de haklıydın 😔', 'I told him no… I\'m not ready. You were right 😔']]), fx: { set: { Relationship: 'Married' } } }] },
    { k: 'bosanma', icon: '💔', name: T('Boşanma', 'Divorce'), end: T('Kocasından boşandı', 'She divorced her husband'), endNo: T('Evliliğine bir şans daha verdi', 'She gave her marriage another chance'), need: { has: ['Relationship: Married'] }, steps: [
      { say: L([['Kocamla aramız çok kötü… her gece kavga ediyoruz 😞', 'Things with my husband are so bad… we fight every night 😞']]), ask: L([['Sen olsan ne yapardın?', 'What would you do?']]) },
      { say: L([['Bir avukatla konuştum. Boşanmayı düşünüyorum… 😔', 'I talked to a lawyer. I\'m thinking about a divorce… 😔']]), ask: L([['Sence boşanayım mı?', 'Do you think I should divorce him?']]), vote: 1 },
      { say: L([['Boşandım. Garip… hem üzgünüm hem de yıllardır ilk kez özgürüm 🕊️', 'I\'m divorced. Strange… I\'m sad but free for the first time in years 🕊️']]), no: L([['Kocamla konuştuk, bir şans daha vereceğiz… umarım doğru karardır 💍', 'My husband and I talked, we\'ll give it another chance… I hope it\'s the right call 💍']]), fx: { set: { Relationship: 'Divorced' } } }] },
    // v1121: 🌈 yönelim · 🔥 isteklilik (↑ / ↓) · 🎓 deneyim · 💎 göbek / dil / meme ucu piercing (need.ask: ❤️ Aşk en az)
    { k: 'yonelim', icon: '🌈', name: T('Bir kıza ilgi', 'Drawn to a girl'), end: T('Kızlardan da hoşlandığını keşfetti', 'She discovered she likes girls too'), endNo: T('Bir kıza duyduğu ilgiyi geçici saydı', 'She decided her crush on a girl was a phase'), need: { not: ['Orientation: Bisexual'] }, steps: [
      { say: L([['Spor salonunda bir kız var… ona bakınca kalbim hızlanıyor, garip değil mi? 😳', 'There\'s a girl at the gym… my heart races when I look at her, isn\'t that weird? 😳']]), ask: L([['Sence bu ne demek?', 'What do you think it means?']]) },
      { say: L([['Onunla kahve içtik, elimi tuttuğunda titredim… 🌈', 'We had coffee, I trembled when she held my hand… 🌈']]), ask: L([['Kızlardan da hoşlanıyorsam… bunu kabul etmeli miyim?', 'If I like girls too… should I accept it?']]), vote: 1 },
      { say: L([['Artık saklamıyorum: kızlardan da hoşlanıyorum 🌈 Bunu ilk sana söyledim 💗', 'I\'m not hiding it anymore: I like girls too 🌈 You\'re the first one I told 💗']]), no: L([['Belki sadece bir hevesti… unutalım bunu 😔', 'Maybe it was just a crush… let\'s forget it 😔']]), fx: { set: { Orientation: 'Bisexual' } } }] },
    { k: 'arzu', icon: '🔥', name: T('Arzusu arttı', 'Her desire grew'), end: T('Arzusu arttı ({eski} → {yeni})', 'Her desire grew ({eski} → {yeni})'), need: { not: ['İsteklilik: Çok Yüksek'] }, steps: [
      { say: L([['Son zamanlarda aklım hep bir yerde… hormonlarım mı ne 🥵', 'Lately my mind is always in one place… must be my hormones 🥵']]), ask: L([['Sende de oluyor mu böyle?', 'Does that happen to you too?']]) },
      { say: L([['Bir roman okudum, sayfalarca sevişme sahnesi… gece uyuyamadım 😳📖', 'I read a novel with pages of sex scenes… I couldn\'t sleep last night 😳📖']]) },
      { say: L([['Eskisi gibi değilim artık; seni düşündükçe istiyorum 😈🔥', 'I\'m not like I used to be; the more I think of you the more I want it 😈🔥']]), fx: { up: ['İsteklilik', -1] } }] },
    { k: 'yorgun', icon: '😮‍💨', name: T('Arzusu azaldı', 'Her desire faded'), end: T('Bir süre arzusu azaldı ({eski} → {yeni})', 'Her desire faded for a while ({eski} → {yeni})'), endNo: T('Yorgunluğa rağmen arzusunu kaybetmedi', 'She kept her desire despite being tired'), need: { not: ['İsteklilik: İstemiyor', 'İsteklilik: Düşük'] }, steps: [
      { say: L([['Bu ara çok yorgunum, eve gelince direkt yatağa düşüyorum… uyumak için 😴', 'I\'m so tired lately, I collapse into bed when I get home… to sleep 😴']]), ask: L([['Bir süre yavaşlasak kızar mısın?', 'Would you be upset if we slowed down for a while?']]), vote: 1 },
      { say: L([['Doktor stres dedi, biraz dinlenmem lazımmış 😮‍💨', 'The doctor said it\'s stress, I need some rest 😮‍💨']]) },
      { say: L([['Bir süre sakin takılalım mı? Sarılmak yeter bana şimdilik 🫂', 'Can we keep it calm for a while? Cuddling is enough for me for now 🫂']]), no: L([['Yorgunum ama sen yanımdayken uykum kaçıyor 😏', 'I\'m tired, but when you\'re with me I can\'t sleep 😏']]), fx: { up: ['İsteklilik', 1] } }] },
    { k: 'deneyim', icon: '🎓', name: T('Yeni şeyler öğrendi', 'She learned new things'), end: T('Daha deneyimli oldu ({eski} → {yeni})', 'She became more experienced ({eski} → {yeni})'), need: { not: ['Experience: Great', 'Experience: Virgo'] }, steps: [
      { say: L([['Kızlar gecesi yaptık, herkes yatak hikâyesini anlattı… meğer en masumu benmişim 🙈', 'We had a girls\' night, everyone told their bedroom stories… turns out I\'m the most innocent 🙈']]), ask: L([['Sen hiç çılgın bir şey yaptın mı?', 'Have you ever done something crazy?']]) },
      { say: L([['Gizlice bir kitap aldım: "Yatakta 100 teknik" 😳📕 Not alıyorum', 'I secretly bought a book: "100 techniques in bed" 😳📕 I\'m taking notes']]) },
      { say: L([['Bilmediğim çok şey öğrendim… bu gece göstermemi ister misin? 😏', 'I learned so many things I didn\'t know… want me to show you tonight? 😏']]), fx: { up: ['Experience', 1] } }] },
    { k: 'gobek', icon: '✨', name: T('Göbek piercingi', 'Navel piercing'), end: T('Göbeğine piercing taktırdı', 'She got her navel pierced'), endNo: T('Göbek piercinginden vazgeçti', 'She decided against a navel piercing'), need: { not: ['Navel Piercing'] },
      ph: { k: 'ayna', t: L([['Göbeğimdeki taş ✨', 'The stone in my navel ✨']]), d: L([['Kısa bluzunu kaldırmış; göbeğindeki küçük sallantılı taş karnının üstünde parlıyor.', 'She lifts her crop top; the little dangling stone in her navel sparkles on her belly.']]) }, steps: [
      { say: L([['Yazın bikiniyle çok yakışır diye göbek piercingi düşünüyorum ✨', 'I\'m thinking of a navel piercing, it would look great with a bikini in summer ✨']]), ask: L([['Taktırayım mı sence?', 'Should I get it?']]), vote: 1 },
      { say: L([['Taktırdım! Sallantılı minik bir taş, her adımda hafifçe sallanıyor ✨', 'I got it! A tiny dangling stone, it sways with every step ✨']]), no: L([['Vazgeçtim, karnıma iğne batırmaya kıyamadım 😅', 'I changed my mind, I couldn\'t bear a needle in my belly 😅']]), fx: { add: 'Navel Piercing' } }] },
    { k: 'dil', icon: '👅', name: T('Dil piercingi', 'Tongue piercing'), end: T('Diline piercing taktırdı', 'She got her tongue pierced'), endNo: T('Dil piercinginden vazgeçti', 'She decided against a tongue piercing'), need: { not: ['Tongue Piercing'] },
      ph: { k: 'yuz', t: L([['Dilimdeki top 👅', 'The ball in my tongue 👅']]), d: L([['Dilini kameraya uzatmış; ortasındaki küçük metal top ışıkta parlıyor, gözleri yaramaz.', 'She sticks her tongue out at the camera; the little metal ball in the middle shines, her eyes mischievous.']]) }, steps: [
      { say: L([['Dil piercingi taktırsam… öpüşürken hissedersin 😏', 'If I got my tongue pierced… you\'d feel it when we kiss 😏']]), ask: L([['Ne dersin, taktırayım mı?', 'What do you say, should I get it?']]), vote: 1 },
      { say: L([['Taktırdım! İki gün peltek konuştum ama değdi 👅', 'I got it! I lisped for two days but it was worth it 👅']]), no: L([['Taktırmadım, konuşamazsam sana nasıl laf sokarım 😂', 'I didn\'t, how would I tease you if I couldn\'t talk 😂']]), fx: { add: 'Tongue Piercing' } },
      { say: L([['Dilim iyileşti… şimdi neler yapabildiğini görmek ister misin? 😈', 'My tongue has healed… want to see what it can do now? 😈']]) }] },
    { k: 'memeucu', icon: '💎', name: T('Meme ucu piercingi', 'Nipple piercing'), end: T('Meme uçlarına piercing taktırdı', 'She got her nipples pierced'), endNo: T('Meme ucu piercinginden vazgeçti', 'She decided against nipple piercings'), need: { not: ['Nipple Piercing'], ask: 50 },
      ph: { k: 'gogus', lv: 2, t: L([['Halkalarım 💎', 'My rings 💎']]), d: L([['Sütyenini indirmiş; iki meme ucunda da ince gümüş halkalar, cildi hâlâ hafif pembe.', 'She pulls her bra down; thin silver rings in both nipples, her skin still a little pink.']]) }, steps: [
      { say: L([['Sana bir şey itiraf edeyim… meme uçlarıma piercing taktırmak istiyorum 🫣💎', 'Let me confess something… I want to get my nipples pierced 🫣💎']]), ask: L([['Sence seksi olur mu, taktırayım mı?', 'Do you think it would be sexy, should I get it?']]), vote: 1 },
      { say: L([['Randevu aldım. Biraz acıyacakmış ama hassasiyeti artırıyormuş 😳', 'I booked it. It will hurt a bit but they say it makes them more sensitive 😳']]) },
      { say: L([['Taktırdım 💎 İkisine de… şimdi tişörtün altından belli oluyorlar 😈', 'I did it 💎 Both of them… now they show through my t-shirt 😈']]), no: L([['Vazgeçtim, acıdan korktum 🙈 Böyle de hassaslar zaten', 'I changed my mind, I was scared of the pain 🙈 They\'re sensitive enough already']]), fx: { add: 'Nipple Piercing' } }] },
    // 👁️👓💅🚬 v1162: yeni özellikleri değiştiren gündemler (fx.rm: kaldırılan çoklu özellikler, app.js lfGFx)
    { k: 'lens', icon: '👁️', name: T('Renkli lens', 'Colored lenses'), end: T('Renkli lens taktı, gözleri artık {yeni}', 'She got colored lenses, her eyes are {yeni} now'), endNo: T('Renkli lensten vazgeçti', 'She decided against colored lenses'), need: { not: ['Eye Color: Green'] },
      ph: { k: 'yuz', t: L([['Yeni gözlerim 💚', 'My new eyes 💚']]), d: L([['Kameraya iyice yaklaşmış; yeşil lensler flaşta cam gibi parlıyor, kirpiklerini kırpıştırıyor.', 'She leans in close to the camera; the green lenses shine like glass in the flash as she flutters her lashes.']]) }, steps: [
      { say: L([['Optikte yeşil lensler gördüm, takınca bambaşka biri oluyorum 👁️', 'I saw green lenses at the optician, I look like a different person with them 👁️']]), ask: L([['Yeşil göz yakışır mı bana, alayım mı?', 'Would green eyes suit me, should I get them?']]), vote: 1 },
      { say: L([['Aldım! Gözlerim artık {yeni} 💚 Aynada kendimi tanımadım', 'I got them! My eyes are {yeni} now 💚 I didn\'t recognise myself in the mirror'], ['Lensleri taktım, {yeni} gözlerle sana bakmayı bekleyemiyorum 💚', 'I put the lenses in, I can\'t wait to look at you with {yeni} eyes 💚']]),
        no: L([['Almadım; sen gerçek gözlerimi seviyorsun, biliyorum 🥰', 'I didn\'t get them; you love my real eyes, I know 🥰']]), fx: { set: { 'Eye Color': 'Green' } } },
      { say: L([['Lensle ilk gün herkes bana baktı, en çok da sen bak ama 😏', 'On my first day with the lenses everyone stared, but you\'re the one who should look 😏']]) }] },
    { k: 'choker', icon: '⭕', name: T('İlk choker', 'Her first choker'), end: T('Bir choker aldı', 'She bought a choker'), endNo: T('Choker almaktan vazgeçti', 'She decided against a choker'), need: { not: ['Choker'] },
      ph: { k: 'yuz', t: L([['Choker\'ım ⭕', 'My choker ⭕']]), d: L([['Saçlarını bir yana toplamış; boynundaki siyah kadife choker\'ın ortasındaki küçük halka ışıkta parlıyor.', 'She sweeps her hair to one side; the small ring at the front of her black velvet choker glints in the light.']]) }, steps: [
      { say: L([['Vitrinde halkalı, siyah kadife bir choker gördüm ⭕ Bana çok yakışırmış gibi geldi', 'I saw a black velvet choker with a ring in a shop window ⭕ I feel like it would really suit me']]), ask: L([['Alayım mı sence?', 'Do you think I should buy it?']]), vote: 1 },
      { say: L([['Aldım ⭕ Halkası tam önde, parmağını geçirebilirsin 😈', 'I bought it ⭕ The ring is right at the front, you can hook a finger through it 😈']]),
        no: L([['Almadım… boynumu sana bırakayım, choker gereksiz 😏', 'I didn\'t buy it… I\'ll leave my neck to you, a choker is unnecessary 😏']]), fx: { add: 'Choker' } }] },
    { k: 'halhal', icon: '🦶', name: T('Halhal', 'Anklet'), end: T('Ayak bileğine halhal taktı', 'She started wearing an anklet'), endNo: T('Halhal takmaktan vazgeçti', 'She decided against an anklet'), need: { not: ['Anklet'] }, steps: [
      { say: L([['Yaz geliyor, ayak bileğime ince bir gümüş halhal takmak istiyorum 🦶✨', 'Summer is coming, I want to wear a thin silver anklet ✨🦶']]), ask: L([['Sence yakışır mı?', 'Do you think it would suit me?']]), vote: 1 },
      { say: L([['Taktım! Her adımda hafifçe şıngırdıyor, beni duyarsın 🦶✨', 'I put it on! It jingles softly with every step, you\'ll hear me coming 🦶✨']]),
        no: L([['Takmadım, ayaklarım böyle de güzel 😌', 'I didn\'t, my feet are pretty enough like this 😌']]), fx: { add: 'Anklet' } }] },
    { k: 'kirpik', icon: '👁️‍🗨️', name: T('Kirpik uzatma', 'Lash extensions'), end: T('Kirpik uzatma yaptırdı', 'She got lash extensions'), endNo: T('Kirpik uzatmadan vazgeçti', 'She decided against lash extensions'), need: { not: ['Lash Extensions', 'No Makeup'] },
      ph: { k: 'yuz', t: L([['Yeni kirpiklerim 👁️', 'My new lashes 👁️']]), d: L([['Gözlerini yarı kapatmış; upuzun kirpikleri yanaklarına gölge düşürüyor.', 'Her eyes are half closed; her long lashes cast shadows on her cheeks.']]) }, steps: [
      { say: L([['Kirpik uzatma yaptırmayı düşünüyorum, her sabah rimel sürmekten bıktım 👁️', 'I\'m thinking of getting lash extensions, I\'m tired of putting on mascara every morning 👁️']]), ask: L([['Yaptırayım mı, ne dersin?', 'Should I do it, what do you say?']]), vote: 1 },
      { say: L([['Yaptırdım! Göz kırpınca rüzgâr esiyor sanki 😂👁️', 'I did it! It\'s like a breeze every time I blink 😂👁️']]),
        no: L([['Vazgeçtim, kendi kirpiklerim yeter 😌', 'I changed my mind, my own lashes are enough 😌']]), fx: { add: 'Lash Extensions' } }] },
    { k: 'manikur', icon: '💅', name: T('Manikür alışkanlığı', 'A manicure habit'), end: T('Düzenli manikür yaptırmaya başladı', 'She started getting regular manicures'), endNo: T('Doğal tırnaklarından vazgeçmedi', 'She kept her natural nails'), need: { not: ['Manicure'] }, steps: [
      { say: L([['Arkadaşım her hafta manikür yaptırıyor, ellerine bakınca kıskandım 💅', 'My friend gets a manicure every week, I got jealous looking at her hands 💅']]), ask: L([['Ben de başlayayım mı?', 'Should I start too?']]), vote: 1 },
      { say: L([['Başladım! Bu hafta bordo, sırtında nasıl duracak merak ediyorum 😈💅', 'I started! Burgundy this week, I wonder how it will look on your back 😈💅']]),
        no: L([['Başlamadım, kısa tırnaklar daha pratik 😌', 'I didn\'t start, short nails are more practical 😌']]), fx: { rm: ['Natural Nails'], add: 'Manicure' } }] },
    { k: 'makyajsiz', icon: '🌿', name: T('Makyajı bırakma', 'Going makeup-free'), end: T('Makyajı bıraktı', 'She stopped wearing makeup'), endNo: T('Makyajından vazgeçmedi', 'She kept her makeup'), need: { has: ['Heavy Makeup', 'Light Makeup'] }, steps: [
      { say: L([['Bir aydır makyajsız dolaşmayı düşünüyorum 🌿 Cildim nefes alsın', 'I\'ve been thinking about going without makeup for a month 🌿 Let my skin breathe']]), ask: L([['Beni makyajsız da beğenir misin, bırakayım mı?', 'Would you like me without makeup too, should I stop?']]), vote: 1 },
      { say: L([['Bıraktım! Sabahları on dakikada çıkıyorum, kendimi hafif hissediyorum 🌿', 'I stopped! I\'m out the door in ten minutes in the morning, I feel so light 🌿']]),
        no: L([['Bırakmadım, rujsuz kendimi çıplak hissediyorum 💄', 'I didn\'t stop, I feel naked without lipstick 💄']]), fx: { rm: ['Heavy Makeup', 'Light Makeup', 'Lash Extensions'], add: 'No Makeup' } },
      { say: L([['Makyajsız ilk fotoğrafımı bile sana attım… bu ne demek biliyorsun 🙈', 'I even sent you my first photo without makeup… you know what that means 🙈']]) }] },
    { k: 'sigarabirak', icon: '🚭', name: T('Sigarayı bırakma', 'Quitting smoking'), end: T('Sigarayı bıraktı', 'She quit smoking'), endNo: T('Sigarayı bırakamadı', 'She couldn\'t quit smoking'), need: { has: ['Smoker', 'Vaper'] }, steps: [
      { say: L([['Bu sefer ciddiyim, sigarayı bırakmak istiyorum 🚭', 'This time I\'m serious, I want to quit smoking 🚭']]), ask: L([['Bana destek olur musun, bırakayım mı?', 'Will you support me, should I quit?']]), vote: 1 },
      { say: L([['Üç gündür içmiyorum 😤 Sinirliysem kusura bakma', 'I haven\'t smoked for three days 😤 Sorry if I\'m grumpy']]) },
      { say: L([['Bıraktım! Bir aydır tek bir tane bile yok 🚭 Öpücüklerim artık sadece nane kokuyor 😏', 'I quit! Not a single one in a month 🚭 My kisses only taste of mint now 😏']]),
        no: L([['Olmadı… yine başladım 😔 Ama azalttım, söz', 'It didn\'t work… I started again 😔 But I cut down, I promise']]), fx: { rm: ['Smoker', 'Vaper'] } }] },
    { k: 'ickibirak', icon: '🍊', name: T('İçkiyi bırakma', 'Quitting drinking'), end: T('İçkiyi bıraktı', 'She stopped drinking'), endNo: T('Kadehinden vazgeçmedi', 'She kept her glass of wine'), need: { has: ['Social Drinker'] }, steps: [
      { say: L([['Son partiden sonra hiçbir şey hatırlamıyorum 🙈 Bir süre içkiyi bırakmak istiyorum', 'I don\'t remember anything after the last party 🙈 I want to stop drinking for a while']]), ask: L([['Sence bırakayım mı?', 'Do you think I should stop?']]), vote: 1 },
      { say: L([['Bıraktım! Artık portakal suyuyla dans ediyorum 🍊💃', 'I stopped! I dance with orange juice now 🍊💃']]),
        no: L([['Bırakmadım, ama bir kadehle sınırlıyorum kendimi 🍷', 'I didn\'t stop, but I keep it to one glass 🍷']]), fx: { rm: ['Social Drinker'], add: 'Non-Drinker' } }] },
    { k: 'salon', icon: '💪', name: T('Spor salonu', 'The gym'), end: T('Spor salonuna yazıldı', 'She joined a gym'), endNo: T('Spor salonuna yazılmadı', 'She didn\'t join a gym'), need: { not: ['Gym Regular'] },
      ph: { k: 'ayna', t: L([['Spordan sonra 💪', 'After the gym 💪']]), d: L([['Soyunma odasının aynasında; tayt ve spor sütyeni terden koyulaşmış, yanakları kızarık.', 'In the locker room mirror; her leggings and sports bra darkened with sweat, her cheeks flushed.']]) }, steps: [
      { say: L([['Evin yanında bir spor salonu açılmış, üyelik indirimliymiş 💪', 'A gym opened next to my place, the membership is on sale 💪']]), ask: L([['Yazılayım mı sence?', 'Do you think I should sign up?']]), vote: 1 },
      { say: L([['Yazıldım! İlk gün bacak günüydü, merdivenleri çıkamıyorum 😂', 'I signed up! The first day was leg day, I can\'t climb the stairs 😂']]),
        no: L([['Yazılmadım; sporumu seninle yaparım zaten 😏', 'I didn\'t sign up; I get my exercise with you anyway 😏']]), fx: { add: 'Gym Regular' } },
      { say: L([['Haftada beş gün gidiyorum artık 💪 Kondisyonuma bir bak bu gece 😈', 'I go five days a week now 💪 Check out my stamina tonight 😈']]) }] },
    { k: 'kitapkulubu', icon: '📚', name: T('Kitap kulübü', 'Book club'), end: T('Bir kitap kulübüne katıldı', 'She joined a book club'), endNo: T('Kitap kulübüne katılmadı', 'She didn\'t join the book club'), need: { not: ['Bookworm'] }, steps: [
      { say: L([['Mahalledeki kafede bir kitap kulübü varmış, ayda bir roman okuyorlarmış 📚', 'There\'s a book club at the café nearby, they read a novel a month 📚']]), ask: L([['Katılayım mı?', 'Should I join?']]), vote: 1 },
      { say: L([['Katıldım! İlk kitap bir aşk romanı, bazı sahnelerini sana okuyacağım 😏📖', 'I joined! The first book is a love story, I\'ll read you some of the scenes 😏📖']]),
        no: L([['Katılmadım, dizi izlemek daha çok bana göre 🙈', 'I didn\'t, watching series is more my thing 🙈']]), fx: { add: 'Bookworm' } }] }
  ];

  /* 🎭 v1121 değişim sorusunun tarzı (kişiliğe göre): {q} konunun sorusu. Sıra: ilk uyan grup. yes / no: oyuna tepki */
  const VOTE_TONE = [
    { k: 'shy', tr: ['Utangaç', 'Gergin', 'Güvensiz'], q: L([['Çok utanıyorum ama… {q} 🙈', 'I\'m so embarrassed but… {q} 🙈'], ['Gülme ama… {q} 😳', 'Don\'t laugh but… {q} 😳'], ['Kimseye soramadım, sadece sana… {q} 🥺', 'I couldn\'t ask anyone, only you… {q} 🥺']]),
      yes: L([['Gerçekten mi? İçim rahatladı 🥺', 'Really? I feel so relieved 🥺']]), no: L([['Tamam… haklısın galiba 🥺', 'Okay… you\'re probably right 🥺']]) },
    { k: 'stub', tr: ['İnatçı', 'Asi', 'Şımarık', 'Kibirli'], q: L([['Aslında kararımı verdim ama yine de soruyorum: {q}', 'I\'ve actually made up my mind, but I\'ll ask anyway: {q}'], ['Ne dersen de yapabilirim, bilesin 😤 Ama… {q}', 'I might do it whatever you say, just so you know 😤 But… {q}']]),
      yes: L([['Tabii ki evet, biliyordum 😌', 'Of course it\'s a yes, I knew it 😌']]), no: L([['Hmm. Göreceğiz 😤', 'Hmm. We\'ll see 😤'], ['Bunu düşüneceğim… ama söz vermiyorum 😏', 'I\'ll think about it… but no promises 😏']]) },
    { k: 'dom', tr: ['Dominance: Dominant'], q: L([['Ben yapmayı düşünüyorum. İtirazın var mı? {q}', 'I\'m planning to do it. Any objections? {q}'], ['Fikrini alıyorum, emrini değil 😈 {q}', 'I\'m asking for your opinion, not your permission 😈 {q}']]),
      yes: L([['Güzel. Doğru cevap 😈', 'Good. Right answer 😈']]), no: L([['Not ettim. Son kararı ben veririm 😏', 'Noted. I make the final call 😏']]) },
    { k: 'cold', tr: ['Soğuk', 'Ciddi', 'Mantıklı', 'Olgun'], q: L([['Kısaca söyle: {q}', 'Just tell me briefly: {q}'], ['Artılarını eksilerini tarttım. Senin fikrin? {q}', 'I weighed the pros and cons. Your opinion? {q}']]),
      yes: L([['Peki. Not ettim.', 'Fine. Noted.']]), no: L([['Anlaşıldı. Yeniden düşüneceğim.', 'Understood. I\'ll reconsider.']]) },
    { k: 'flirt', tr: ['Flörtöz', 'Özgüvenli'], q: L([['Biraz da senin için düşünüyorum aslında 😏 {q}', 'I\'m partly thinking of you, actually 😏 {q}'], ['{q} Sonucu ilk sen göreceksin 😈', '{q} You\'ll be the first to see the result 😈']]),
      yes: L([['Biliyordum hoşuna gideceğini 😏', 'I knew you\'d like that 😏']]), no: L([['Hmm, beni böyle mi seviyorsun yoksa? 😏', 'Hmm, so you like me just as I am? 😏']]) },
    { k: 'sly', tr: ['Alaycı', 'Manipülatif', 'Gizemli'], q: L([['Bana gerçekten değer veriyorsan doğru cevabı bilirsin… {q} 😇', 'If you really care about me you know the right answer… {q} 😇'], ['Biliyorum, yine mi diyeceksin… {q} 🙄', 'I know, you\'ll say "again?"… {q} 🙄']]),
      yes: L([['Aferin sana, öğreniyorsun 😇', 'Good for you, you\'re learning 😇']]), no: L([['Vay, demek öyle… peki 🙄', 'Wow, so that\'s how it is… fine 🙄']]) },
    { k: 'warm', tr: ['Romantik', 'Duygusal', 'Sadık', 'Anaç'], q: L([['Senin fikrin benim için çok önemli 🥺 {q}', 'Your opinion means so much to me 🥺 {q}'], ['Sana sormadan bir şey yapmak istemem 💗 {q}', 'I don\'t want to do anything without asking you 💗 {q}']]),
      yes: L([['Yanımda olduğunu bilmek her şey 💗', 'Knowing you\'re with me is everything 💗']]), no: L([['Peki aşkım, senin için vazgeçerim 🥺', 'Okay my love, I\'ll give it up for you 🥺']]) },
    { k: 'fun', tr: ['Neşeli', 'Komik', 'Çocuksu', 'Meraklı'], q: L([['{q} Hadi ama, eğlenceli olur! 😜', '{q} Come on, it\'ll be fun! 😜'], ['Çılgın bir fikrim var! {q} 🤪', 'I have a crazy idea! {q} 🤪']]),
      yes: L([['Yaşasın! 🥳', 'Yay! 🥳']]), no: L([['Offf, sen hiç eğlenmiyorsun 😝', 'Ugh, you\'re no fun 😝']]) }
  ];
  // 📸 değişimden sonra kendiliğinden fotoğraf: önceki mesajı (photo-texts.js kişilik grupları shy / bold / warm / def)
  const CHG_PH_LEAD = {
    shy: L([['Kimseye göstermedim… ilk sen gör 🙈', 'I haven\'t shown anyone… you see it first 🙈'], ['Çok utanıyorum ama merak ettin diye… 📸😳', 'I\'m so shy but since you were curious… 📸😳']]),
    bold: L([['Yeni halimi görmek ister misin? Al bakalım 😏📸', 'Want to see the new me? Here you go 😏📸'], ['Fotoğrafını çektim, bak ve eri 😈📸', 'I took a picture, look and melt 😈📸']]),
    warm: L([['Sana göstermeden duramadım 🥰📸', 'I couldn\'t wait to show you 🥰📸']]),
    def: L([['Bak nasıl oldu 📸', 'Look how it turned out 📸'], ['Sence nasıl? 📸', 'What do you think? 📸']])
  };

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
    { k: 'biz', t: 3, q: L([['Bizi bir kelimeyle anlatsan hangisi olurdu?', 'If you described us in one word, what would it be?']]), her: L([['Benim kelimem: ev 🏡', 'My word: home 🏡']]) },
    // 👁️👓💅🚬 özelliğe bağlı (tr: karakterde bu özelliklerden biri varsa sorulur)
    { k: 'gozacik', t: 1, tr: ['Eye Color: Blue', 'Eye Color: Green'], q: L([['Birinde ilk neye bakarsın?', 'What\'s the first thing you notice in someone?']]), her: L([['Herkes önce gözlerime bakıyor, ben de gözlere bakarım. Seninkiler bana ne anlatıyor acaba? 👀', 'Everyone looks at my eyes first, so I look at eyes too. I wonder what yours tell me 👀']]) },
    { k: 'gozkoyu', t: 1, tr: ['Eye Color: Brown', 'Eye Color: Black', 'Eye Color: Hazel', 'Eye Color: Honey'], q: L([['Sence gözler yalan söyler mi?', 'Do you think eyes can lie?']]), her: L([['Benim gözlerim söyleyemez. Güneşte rengi değişiyor, sinirlenince koyulaşıyor, herkes anlıyor 😅', 'Mine can\'t. They change color in the sun and get darker when I\'m angry, everyone can tell 😅']]) },
    { k: 'taki', t: 1, tr: ['Earrings', 'Hoop Earrings', 'Necklace', 'Choker', 'Bracelet', 'Anklet', 'Rings'], q: L([['Hiç çıkarmadığın, anlamı olan bir eşyan var mı?', 'Do you have something meaningful you never take off?']]), her: L([['Benimki bir takı. İlk maaşımla almıştım, onsuz kendimi çıplak hissediyorum 💍', 'Mine is a piece of jewelry. I bought it with my first paycheck, I feel naked without it 💍']]) },
    { k: 'saat', t: 1, tr: ['Watch'], q: L([['Hep geç kalan biri misin, hep erken gelen mi?', 'Are you always late or always early?']]), her: L([['Bende saat hep bilekte. Geç kalanlara sinir oluyorum, sen geç kalma 😤⌚', 'I always wear a watch. Late people drive me crazy, don\'t be late 😤⌚']]) },
    { k: 'makyaj', t: 2, tr: ['Heavy Makeup', 'Lash Extensions'], q: L([['Beni hiç makyajsız görmek ister misin?', 'Would you ever want to see me without makeup?']]), her: L([['Makyaj benim zırhım. Onsuz çok az kişi gördü beni… belki sen görürsün 🙈', 'Makeup is my armor. Very few people have seen me without it… maybe you will 🙈']]) },
    { k: 'dogal', t: 1, tr: ['No Makeup', 'Natural Nails', 'Skincare Routine'], q: L([['Sabah hazırlanman kaç dakika sürüyor?', 'How long does it take you to get ready in the morning?']]), her: L([['Bende on dakika. Yüzümü yıkarım, kremimi sürerim, çıkarım. Doğallık her zaman kazanır 😌', 'Ten minutes for me. Wash my face, put on my cream, out the door. Natural always wins 😌']]) },
    { k: 'tirnak', t: 1, tr: ['Manicure', 'Long Nails'], q: L([['Kendine ayırdığın en sevdiğin vakit hangisi?', 'What\'s your favorite time just for yourself?']]), her: L([['Manikür günüm. Telefonu kapatırım, iki saat kimse karışamaz 💅', 'My manicure day. I turn off my phone, nobody bothers me for two hours 💅']]) },
    { k: 'parfum', t: 1, tr: ['Perfume Lover'], q: L([['Hangi koku sana birini hatırlatır?', 'Which scent reminds you of someone?']]), her: L([['Benim parfüm koleksiyonum var, her anıma bir koku bağlı. Senin kokunu da bir gün bulacağım 🌸', 'I have a perfume collection, every memory has a scent. One day I\'ll find yours 🌸']]) },
    { k: 'sigara', t: 2, tr: ['Smoker', 'Vaper'], q: L([['Bırakmak istediğin ama bırakamadığın bir şey var mı?', 'Is there something you want to quit but can\'t?']]), her: L([['Benimki belli 🚬 Her pazartesi bırakıyorum, her salı yeniden başlıyorum… beni yargılama 😅', 'Mine\'s obvious 🚬 I quit every Monday and start again every Tuesday… don\'t judge me 😅']]) },
    { k: 'icki', t: 1, tr: ['Social Drinker', 'Party Lover'], q: L([['Seni en iyi anlatan gece nasıl bir geceydi?', 'What kind of night describes you best?']]), her: L([['Benimki: kalabalık bir masa, bir kadeh şarap, sonra dansa kalkılır 🍷💃', 'Mine: a crowded table, a glass of wine, then everyone gets up to dance 🍷💃']]) },
    { k: 'icmez', t: 1, tr: ['Non-Drinker'], q: L([['Eğlenmek için neye ihtiyacın var?', 'What do you need to have fun?']]), her: L([['Ben hiç içmem, ama en çok ben dans ederim. Kimse inanmıyor 😂', 'I never drink, but I dance the most. Nobody believes it 😂']]) },
    { k: 'kahve', t: 1, tr: ['Coffee Addict'], q: L([['Güne neyle başlarsın?', 'What do you start your day with?']]), her: L([['Kahve olmadan insan değilim. İlk fincandan önce benimle konuşma ☕', 'I\'m not human without coffee. Don\'t talk to me before the first cup ☕']]) },
    { k: 'spor', t: 1, tr: ['Gym Regular'], q: L([['Kafanı boşaltmak için ne yaparsın?', 'What do you do to clear your head?']]), her: L([['Ben salona giderim. Bir saat ağırlık kaldırınca bütün dertler gidiyor 💪', 'I go to the gym. An hour of lifting and every worry is gone 💪']]) },
    { k: 'oyun', t: 1, tr: ['Gamer'], q: L([['Bir gün bir oyunun içinde yaşasan hangisi olurdu?', 'If you could live inside a game for a day, which one?']]), her: L([['Bende liste uzun 🎮 Ama bir gün beraber oynarız, seni yenersem bana yemek ısmarlarsın 😏', 'My list is long 🎮 But one day we\'ll play together, and if I beat you, you buy me dinner 😏']]) },
    { k: 'kitapq', t: 1, tr: ['Bookworm'], q: L([['Seni en çok etkileyen kitap hangisi?', 'Which book affected you the most?']]), her: L([['Benimki bir aşk romanı, sonunu üç kez okudum ve üçünde de ağladım 📚', 'Mine is a love story, I read the ending three times and cried every time 📚']]) },
    { k: 'sabahci', t: 1, tr: ['Early Bird'], q: L([['Gün doğumunu en son ne zaman izledin?', 'When did you last watch the sunrise?']]), her: L([['Ben her sabah izliyorum, altıda kalkarım. Bir sabah seni de kaldırırım 🌅', 'I watch it every morning, I wake up at six. One morning I\'ll wake you up too 🌅']]) },
    { k: 'gececi', t: 1, tr: ['Night Owl'], q: L([['Gece üçte aklına neler gelir?', 'What comes to your mind at 3 a.m.?']]), her: L([['Bende gece üç en dürüst saattir. Bazen sana yazıp siliyorum, haberin yok 🌙', 'For me 3 a.m. is the most honest hour. Sometimes I write to you and delete it, you don\'t even know 🌙']]) },
    // 💼 meslek grubuna bağlı (jg: pools.js jobGroups id)
    { k: 'is_saglik', t: 2, jg: ['saglik'], q: L([['Hiç birinin hayatına dokunduğunu hissettin mi?', 'Have you ever felt you really touched someone\'s life?']]), her: L([['Nöbette bir hastanın elini tuttum, sabah iyileşmişti. O gün mesleğimi seçtiğim için mutluydum 🩺', 'On a night shift I held a patient\'s hand, by morning they were better. That day I was glad I chose my job 🩺']]) },
    { k: 'is_egitim', t: 1, jg: ['egitim', 'ogrenci'], q: L([['Okulda en sevdiğin ders hangisiydi?', 'What was your favorite subject at school?']]), her: L([['Benimki edebiyat. Hâlâ kenarlara not alırım, eski alışkanlık 📖', 'Mine was literature. I still write notes in margins, old habit 📖']]) },
    { k: 'is_ofis', t: 1, jg: ['ofis', 'teknoloji'], q: L([['İşini bıraksan yerine ne yapardın?', 'If you quit your job, what would you do instead?']]), her: L([['Ben bir sahil kasabasında küçük bir kafe açardım. Toplantı yok, rapor yok ☕', 'I\'d open a little café in a seaside town. No meetings, no reports ☕']]) },
    { k: 'is_sanat', t: 1, jg: ['sanat', 'sahne'], q: L([['Sana ilham veren şey ne?', 'What inspires you?']]), her: L([['Bende insanlar. Bir yüz, bir bakış… bazen bir mesaj. Mesela seninkiler 🎨', 'For me it\'s people. A face, a look… sometimes a message. Like yours 🎨']]) },
    { k: 'is_hizmet', t: 1, jg: ['hizmet', 'guzellik'], q: L([['Bugüne kadar gördüğün en tuhaf insan kimdi?', 'Who\'s the strangest person you\'ve ever met?']]), her: L([['İşte her gün başka biri geliyor, bir gün biri bana evlenme teklif etti, hem de ilk görüşte 😂', 'Someone new comes in every day at work, once a guy proposed to me at first sight 😂']]) },
    { k: 'is_guvenlik', t: 2, jg: ['guvenlik'], q: L([['Seni gerçekten ne korkutur?', 'What really scares you?']]), her: L([['İş yüzünden çok şey gördüm, artık az şey korkutuyor. Ama sevdiğim birinin üzülmesi korkutur 🚓', 'I\'ve seen a lot because of work, not much scares me anymore. But someone I love getting hurt does 🚓']]) }
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
  // 🗳️ değişim sorusuna evet / hayır · 🎨 saç rengi önerin · 😤 hayır dediğin hâlde yaptı
  const G_VOTE_YES = L([['Destekleyeceğini biliyordum 🥰', 'I knew you\'d support me 🥰'], ['Tamam, cesaretim geldi! 😤', 'Okay, now I feel brave! 😤'], ['Sen evet deyince içim rahatladı 😌', 'Now that you said yes I feel calmer 😌']]);
  const G_VOTE_NO = L([['Hmm… haklı olabilirsin, biraz daha düşüneyim 🤔', 'Hmm… you might be right, let me think some more 🤔'], ['Demek istemiyorsun… peki, aklımda tutacağım 😔', 'So you don\'t want me to… okay, I\'ll keep it in mind 😔']]);
  const G_COLOR = L([['{renk} mı? Aklıma yattı 😏', '{renk}? I like that idea 😏'], ['{renk}… cesur seçim, bayıldım 💇‍♀️', '{renk}… bold choice, I love it 💇‍♀️']]);
  const G_STUBBORN = L([['Biliyorum, hayır demiştin… ama yaptım işte 🙈', 'I know you said no… but I did it anyway 🙈'], ['Sen istemedin ama ben istedim 😤', 'You didn\'t want it, but I did 😤']]);
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

  Stories.LIFE = { GUNDEM, EV, DEEP, DILEMMA, DIL_Q, DIL_SAME, DIL_DIFF, DIL_NONE, REACT, HER_LEAD, G_THANKS, G_NAME, G_OFFER_YES, G_OFFER_NO, G_OFFER_Q, G_REMIND, G_VOTE_YES, G_VOTE_NO, G_COLOR, G_STUBBORN, VOTE_TONE, CHG_PH_LEAD,
    PLAN_WHEN, PLAN_ACK, PLAN_ASK, PLAN_GOOD, PLAN_BAD, PLAN_MID, EMO, KABA_RE, OZUR_RE, GOOD_RE, BAD_RE, WARM_RE, FB, FB_STOP, FB_SEXW,
    JOKE_NEW, JOKE_BACK, LAKAP, LAKAP_Q, LAKAP_YES, LAKAP_NO, RUMOR, GROW, GROW_SAY, EVOLVE };
  if (Stories.I18n) Stories.I18n.add(EN);
})();
