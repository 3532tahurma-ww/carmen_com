/*
 * 🗣️ Olay mesajlarım: sen bir olayı tetikleyince (sohbet ⋮ → 🗣️ Olay mesajlarım açıkken)
 * olay kartının altına senin ağzından rastgele bir mesaj yazılır. Anahtar = olay başlığı.
 * {o} = karşıdaki karakterin adı. Bütün olaylar, her birine en az 10 mesaj (zincirle kendiliğinden gelenlerde de yazılır).
 */
window.Stories = window.Stories || {};

/* 🎾 Vajinal olaylarda kondom durumuna göre ek mesajlar (Condom / Tight Condom bu ilişkide olduysa "condom", yoksa "raw").
 * pos: pozisyon olaylarında olayın kendi mesajlarına karışır · cum: boşalma olaylarında (kondomluyken olayın kendi mesajları yerine bunlar) */
Stories.ME_VAG_LINES = {
  condom: {
    pos: [
      'Kondomluyum ama seni yine de her santiminde hissediyorum… ahhh 😩',
      'Lastik bile engel olamıyor, offf çok sıkısın 🔥',
      'Güvendeyiz, o yüzden hiç çekinmeden sertçe hızlanıyorum… ahh {o} 🥵',
      'Kondom kaygan, kayıp kayıp derine giriyorum offf 😮‍💨',
      'Korunuyoruz, kafam rahat; sadece sana odaklanıyorum… ahhh 💗',
      'İnce lastiğin arkasından bile sıcaklığın geliyor… offf 🥵',
      'Kondomu kontrol edip tekrar içine gömülüyorum… ahh 😏',
      'Kaygan lastikle durmadan önden vuruyorum offf 🔥',
      'Dikkatli olmaya gerek yok, kondom var… ahhh {o} 😈',
      'Lastik gerildikçe daha da sertleşiyorum… offf 😮‍💨'
    ],
    cum: [
      'Kondomun içine boşalıyorum… ahhhh 😩💦',
      'İçindeyim ama hepsi lastikte kalıyor offf 🔥',
      'Zonkluyorum, kondom doluyor… ahhh {o} 🥵',
      'Derine bastırıp kondomu dolduruyorum offf 😮‍💨',
      'Güvenle bitirdim, hepsi lastiğin ucunda… ahhh 💦',
      'Yavaşça çıkarıyorum, kondom ağzına kadar dolu offf 😏',
      'Kondomu çıkarıp düğümlüyorum, bak ne kadar çok… ahh 💦',
      'İçinde boşaldım ama içine bir damla bile kaçmadı… ahhh 😌',
      'Lastiğin içinde sıcacık doldu offf 🥵',
      'Kondomu karnına boşaltıp gösteriyorum… ahhh {o} 😈'
    ]
  },
  tight: {
    pos: [
      'Dar kondom beni sımsıkı sıkıyor, offf içinde daha da şişiyorum 😣',
      'Lastik boğuyor ama sen daha dar… ahhh 😩',
      'Her vuruşta dar kondom gerilip çatırdıyor offf 🔥',
      'Sıkıştıkça daha sert, daha kalın giriyorum… ahh {o} 🥵',
      'Patlamasın diye yavaşlıyorum, sonra yine hızlanıyorum offf 😅',
      'Dar lastik dibimi sıkıyor, sanki halka gibi… ahhh 😮‍💨',
      'Bu kadar sıkıyken boşalmak zor, daha uzun sürecek offf 😈',
      'Kondom iki kat dar, sen iki kat sıcak… ahh 🥵',
      'Gerilen lastik her kıvrımını daha keskin hissettiriyor offf 🔥',
      'Sıkıyor ama çıkarmıyorum, güvende kalalım… ahhh {o} 😩'
    ],
    cum: [
      'Dar kondom sıkarken zorla boşalıyorum… ahhhh 😣💦',
      'Lastik öyle dar ki her damla zonklayarak çıkıyor offf 🔥',
      'Kondomun ucu balon gibi şişti… ahhh {o} 🥵',
      'Patlamadı değil mi? Kontrol ediyorum… offf 😅',
      'Uzun tuttu, dar kondomda biriken hepsi çıktı… ahhh 💦',
      'Sıkı lastiğin içinde boşalmak yarı acı yarı zevk offf 😩',
      'Çıkarırken lastik zor sıyrılıyor, ağzına kadar dolu… ahh 😏',
      'Dar kondom her kasılmayı iki katına çıkardı offf 😮‍💨',
      'Lastik sağlam kaldı, içine bir damla geçmedi… ahhh 😌',
      'Dar kondomu çıkarınca nefes aldım, bak ne kadar dolmuş… offf {o} 😈'
    ]
  },
  raw: {
    pos: [
      'Kondomsuz, tenim teninde… ahhhh 😩',
      'Arada hiçbir şey yok, offf her kıvrımını hissediyorum 🔥',
      'Çıplak içine giriyorum, sıcacıksın… ahh {o} 🥵',
      'Lastiksiz bambaşka, offf aklım gidiyor 😮‍💨',
      'Islaklığın doğrudan beni sarıyor… ahhh 💦',
      'Kondom yok, dikkatli olmalıyım ama durmak istemiyorum… offf 😈',
      'Tenimizin sürtünmesi deli ediyor beni… ahh 🥵',
      'Çıplak ve derin, durmadan önden vuruyorum offf 🔥',
      'Böyle hissettikçe dayanmak zorlaşıyor… ahhh {o} 😩',
      'Riskli ama bu kadar güzeli yok… offf 😮‍💨'
    ],
    cum: [
      'Kondom yok, doğrudan içine boşalıyorum… ahhhh 😩💦',
      'Çıkarmadım, hepsi rahmine offf 🔥',
      'Çıplak içinde zonkluyorum, dolduruyorum… ahhh {o} 🥵',
      'Riski umursamadan en derine bırakıyorum offf 😮‍💨',
      'Sıcacık doldun, bir damla bile dışarı kaçmadı… ahhh 💦',
      'Bacaklarını kaldırıyorum, içinde kalsın… offf 😈',
      'Lastiksiz bitirmek bambaşka… ahhh 🥵',
      'Çıkarınca içinden süzülüyor offf 💦',
      'Seni doğrudan tohumladım {o}… ahhh 😩',
      'Hap içiyor musun? Çünkü hepsi içinde… offf 😏'
    ]
  }
};

/* 🍒🍑 Karakterin göğüs / kalça boyutuna göre ek mesajlar: events listesindeki olaylarda olayın kendi mesajlarına karışır.
 * trait: karakter özelliği (traits.js) · size: değer → small / mid / big */
Stories.ME_BODY_LINES = {
  boob: {
    label: '🍒 Göğüs', trait: 'Boob Size',
    size: { '70': 'small', '75': 'small', '80': 'mid', '85': 'mid', '90': 'big', '95': 'big' },
    events: ['Show Tits', 'Titfuck', 'Reverse Titfuck', 'Lick Tits', 'Boob Grab', 'Slap Boob', 'Tit Cumshot', 'Dressed Tit Cumshot',
      'Chalice', 'Chalice Cumshot', 'Crystal Ball', 'Slime Hug', 'Slime Coat', 'Cowgirl', 'Jelly Ride', 'Front Hugging', 'Breastfeeding',
      'Double Titfuck', 'Double Tit Cumshot', 'Ride and Facesit', 'Cowgirl Kiss', 'Stacked Missionary'],
    small: [
      'Minik göğüslerin avucuma tam oturuyor… mmm 😍',
      'Küçük ama ne kadar hassas, hafif dokunsam titriyorsun offf 🥵',
      'Göğsünü tamamen ağzıma alabiliyorum… ahh {o} 😋',
      'Sivri uçların küçük göğsünde daha da belirgin offf 🔥',
      'Kim demiş büyük olmalı diye, seninkiler mükemmel… 💗',
      'Avucumun içinde kayboluyorlar, bayılıyorum ahh 😏',
      'Küçük göğüslerin her nefeste kalkıp iniyor… mmm 😮‍💨',
      'Parmak uçlarımla bütün göğsünü dolaşıyorum offf 🥵',
      'Utanma, küçük göğüslerin beni deli ediyor {o} 😈',
      'Zarif ve sıkı, tam bana göre… ahh 💗'
    ],
    mid: [
      'Göğüslerin avucumu tam dolduruyor… mmm 😍',
      'Ne büyük ne küçük, tam kıvamında offf 🔥',
      'Sıkınca parmaklarımın arasından hafifçe taşıyor… ahh {o} 🥵',
      'Dolgun ve dik, gözümü alamıyorum offf 😮‍💨',
      'Birini ağzıma alıp diğerini avuçluyorum… mmm 😋',
      'Her hareketinde güzelce sallanıyorlar ahh 😏',
      'Mükemmel orantı, tam elime göre {o} 💗',
      'Yumuşak ama sıkı, offf 🥵',
      'Göğüslerini birleştirince derin bir çizgi oluyor… ahh 🔥',
      'Hayalimdeki göğüsler bunlar… mmm 😍'
    ],
    big: [
      'Kocaman göğüslerin avuçlarıma sığmıyor… offf 😍',
      'İki elimle bile tutamıyorum, taşıyorlar ahh 🥵',
      'Yüzümü aralarına gömüyorum, nefessiz kalıyorum… mmm {o} 😮‍💨',
      'Her hareketinde ağır ağır sallanıyorlar offf 🔥',
      'Bu göğüslerin ağırlığı bile beni tahrik ediyor… ahh 😈',
      'Aralarında kaybolmak istiyorum… mmm 😩',
      'Dev göğüslerin göğsüme yaslanınca eriyorum offf 💗',
      'Sıktıkça parmaklarımın arasından taşıyor… ahhh 🥵',
      'Bu kadar büyükleri hiç görmemiştim {o} offf 😍',
      'Göğüslerin dalgalanırken gözümü kırpamıyorum… ahh 🔥'
    ]
  },
  butt: {
    label: '🍑 Kalça', trait: 'Butt Size',
    size: { 'XS': 'small', 'S': 'small', 'M': 'mid', 'M/L': 'mid', 'L': 'big', 'XL': 'big' },
    events: ['Show Ass', 'Slap Ass', 'Ass Grab', 'Buttjob', 'Hotdogging', 'Lick Ass', 'Ass Cumshot', 'Dressed Ass Cumshot',
      'Doggy', 'Standing doggy', 'Wobble Doggy', 'Full Moon Doggy', 'Dry Doggy', 'Intimate Doggy', 'Spooning', 'Spooning Anal',
      'Cowgirl Anal', 'Standing Anal', 'Rough Anal', 'Anal Creampie', 'Bottoms Up', 'Bottoms Up Finish', 'Facesitting', 'Ghost Ride',
      'Pumpkin Grind', 'Face Smothering', 'Asshole Fingering', 'Lap Sex',
      'Side by Side Doggy', 'Stacked Missionary', 'Spooning Sandwich', 'Doggy Lick', 'Taking Turns', 'Ride and Facesit'],
    small: [
      'Küçük kalçan avuçlarıma tam oturuyor… mmm 😍',
      'Sıkı ve minik, her vuruşta çarpışını hissediyorum offf 🔥',
      'Bu küçük kalça bu kadar dar olunca aklım gidiyor… ahh {o} 🥵',
      'Kalçanı tek elimle kavrayabiliyorum offf 😏',
      'İnce belinle küçük kalçan kusursuz… 💗',
      'Şaplak atınca bütün kalçan kızarıyor ahh 😈',
      'Minik kalçanı kaldırıp kendime çekiyorum… offf 🥵',
      'Sıkı kalçan hiç sallanmıyor, taş gibi ahh 😮‍💨',
      'Küçük ama ne kadar sıkı {o}… mmm 🔥',
      'Kalçanın kıvrımını parmaklarımla ölçüyorum… ahh 😍'
    ],
    mid: [
      'Kalçan avuçlarımı tam dolduruyor… mmm 😍',
      'Yuvarlak ve sıkı, tam kıvamında offf 🔥',
      'Her vuruşta güzelce dalgalanıyor… ahh {o} 🥵',
      'Kalçanı sıkınca parmaklarım gömülüyor offf 😏',
      'Mükemmel bir kavis, gözümü alamıyorum… 💗',
      'Şaplak atınca hoş bir sesle titriyor ahh 😈',
      'Kalçanı açıp kapatmak oyun gibi… offf 🥵',
      'Ne fazla ne az, tam ellerime göre ahh 😮‍💨',
      'Bu kalça için her şeyi yaparım {o}… mmm 🔥',
      'Dolgun kalçana bastırdıkça geri itiyor… ahh 😍'
    ],
    big: [
      'Kocaman kalçan iki elime sığmıyor… offf 😍',
      'Her vuruşta dalga dalga sallanıyor, izlemeye doyamıyorum ahh 🔥',
      'Bu kalçanın arasında kayboluyorum… mmm {o} 🥵',
      'Şaplak atınca bütün kalçan titreşiyor offf 😈',
      'Dolgun kalçan bana çarptıkça yankılanıyor… ahhh 😩',
      'Yüzümü bu kalçaya gömmek istiyorum offf 😮‍💨',
      'Kalçanın ağırlığı üstüme çökünce eriyorum… ahh 💗',
      'Parmaklarım yumuşacık etine gömülüyor offf 🥵',
      'Bu kadar büyük kalçayı ilk defa tutuyorum {o}… ahh 😍',
      'Kalçan tek başına bir şölen… offf 🔥'
    ]
  }
};

/* 🤗 Tam sarılma mesajları: Doggy / Missionary sırasında %50 ihtimalle bunlardan biri yazılır.
 * events: hangi olaylarda · lines: şablonlar. Yer tutucular boyuta göre doldurulur (ME_BODY_WORDS, boyut yoksa orta):
 * {gogus} / {kalca} = sıfat ("kocaman"), {gogusHis} / {kalcaHis} = boyuta özel his cümlesi */
Stories.ME_BODY_WORDS = {
  gogus: {
    small: ['minik', 'avucuma sığan küçük', 'sivri uçlu küçük', 'sıkı, minik'],
    mid: ['dolgun', 'avucumu dolduran', 'dik ve dolgun', 'yumuşacık'],
    big: ['kocaman', 'avuçlarıma sığmayan', 'ağır, iri', 'dev gibi']
  },
  kalca: {
    small: ['minik', 'sıkı, küçük', 'avucuma sığan', 'taş gibi sıkı'],
    mid: ['yuvarlak', 'dolgun', 'kusursuz yuvarlak', 'sıkı ve dolgun'],
    big: ['kocaman', 'dalga dalga sallanan koca', 'yumuşacık iri', 'dolgun, ağır']
  },
  gogusHis: {
    small: ['parmaklarımın arasında sertleşen uçlarını hissediyorum', 'küçük göğüslerin avuçlarımda kayboluyor', 'her nefesinde minik göğüslerinin avucumda kalkıp indiğini hissediyorum'],
    mid: ['avuçlarımı tam doldurduklarını hissediyorum', 'parmaklarımın arasından hafifçe taştıklarını hissediyorum', 'her vuruşta avuçlarımda güzelce sallanıyorlar'],
    big: ['ağırlıklarının avuçlarımdan taştığını hissediyorum', 'iki elimle bile tutamıyorum, parmaklarımın arasından fışkırıyorlar', 'her vuruşta ağır ağır avuçlarımda dalgalanıyorlar']
  },
  kalcaHis: {
    small: ['sıkı kalçan her vuruşta karnıma tak tak çarpıyor', 'küçük kalçan kasıklarıma sımsıkı oturuyor', 'minik kalçanın sertliğini her çarpışta hissediyorum'],
    mid: ['yuvarlak kalçan karnıma çarpıp geri sekiyor', 'dolgun kalçan her vuruşta hoş bir sesle çarpıyor', 'kalçanın yumuşaklığı kasıklarımı sarıyor'],
    big: ['koca kalçan her vuruşta dalga dalga karnıma çarpıyor', 'iri kalçan kasıklarımı yastık gibi karşılıyor', 'kalçanın her çarpışı odada şaklıyor, dalgası sırtına kadar yayılıyor']
  }
};
/* 🍆 senin Dick Size'ına göre (Ben → Profil; seçilmemişse orta): size: değer → small / mid / big / huge
 * {sik} = sıfat, {sikHis} = his cümlesi (her mesajda kullanılabilir)
 * hug: 🤗 sarılma mesajlarına her zaman eklenen vurgu cümlesi · his: içerideyken (vajinal / anal) %35 eklenen cümle
 * cum: 💦 içeride boşalırken (Creampie, vajinal / anal boşalma) her zaman eklenen cümle: dölün taşaklardan uca hücumu, içine akışı
 * rub: 💦 sürtünmeli / dışarı boşalırken (Titfuck, Buttjob, Hotdogging, … Cumshot) her zaman eklenen cümle; {yer} = rubSpots'tan (pozisyona göre)
 * hold / ring: ✋ Holding, Hard Holding / 💍 Cock Ring olunca her zaman: döl uca kadar gelip tutuluyor
 * prot: 🛡️ korunma olayı olunca her zaman · protOf: olay → grup (condom, tight, raw, pullout) */
Stories.ME_DICK = {
  size: { 'Very Small': 'small', Small: 'small', Average: 'mid', Large: 'big', 'Very Large': 'big', Huge: 'huge', Massive: 'huge' },
  words: {
    small: ['minik', 'küçük ama sert', 'taş gibi sert küçük', 'ufak tefek', 'kısa ama dimdik', 'avuç içi kadar', 'sevimli küçük', 'mini mini', 'küçük ama inatçı', 'kısacık sert'],
    mid: ['sertleşmiş', 'zonklayan', 'dimdik', 'sapasağlam', 'kaskatı', 'tam kıvamında', 'sıcacık sert', 'seğiren', 'gergin', 'demir gibi'],
    big: ['kocaman', 'kalın', 'damarları kabarmış iri', 'iri', 'dolgun', 'uzun ve kalın', 'koca', 'ağır', 'heybetli', 'kalın damarlı'],
    huge: ['devasa', 'canavar gibi', 'kolun kadar kalın', 'dev', 'ürkütücü büyüklükte', 'bilek kalınlığında', 'insanüstü', 'korkutucu derecede iri', 'sığmayacak kadar büyük', 'dev gibi damarlı']
  },
  his: {
    small: ['küçük sikim içinde sımsıkı sarılıyor', 'minik sikimin her santimini sıkıca kavrıyorsun', 'küçük ama sapasağlam sikim içinde zonkluyor',
      'ufak sikim içinde hızlı hızlı kayıyor', 'minik sikim seni gıdıklar gibi okşuyor', 'küçük sikimi tamamen yutuyorsun, hiçbir yeri dışarıda kalmıyor',
      'kısa ama sert sikim girişini durmadan uyarıyor', 'minik sikim içinde titredikçe sen gülümseyip inliyorsun', 'küçük sikim içinde kaybolsa da sıcaklığını hissediyorum', 'ufak sikimin her vuruşu seni tatlı tatlı sarsıyor'],
    mid: ['sikim içinde tam oturuyor', 'sertleşmiş sikim içini güzelce dolduruyor', 'her vuruşta sikimin içinde kaydığını hissediyorum',
      'sikim tam sana göre, ne eksik ne fazla', 'kaskatı sikim içinde ritimle gidip geliyor', 'sikimin her santimi ıslak sıcaklığında kayboluyor',
      'zonklayan sikim içinde nabız gibi atıyor', 'sikim en sevdiğin noktana tam denk geliyor', 'sertleşmiş sikimi sıktıkça içinde daha da kabarıyor', 'sikim içinde kayarken ikimiz de aynı anda inliyoruz'],
    big: ['kocaman sikim içini sonuna kadar dolduruyor', 'kalın sikim seni iyice açıyor', 'iri sikimin her damarını içinde hissediyorsun',
      'koca sikim her girişte seni gerdiriyor', 'kalın sikim içinde hiç boşluk bırakmıyor', 'uzun sikim en dibine çarptıkça gözlerin kayıyor',
      'iri sikimi her çekişimde sen boşluğunu özlüyorsun', 'kocaman sikim girdikçe nefesin kesiliyor', 'kalın sikimin başı en derinini zorluyor', 'koca sikim içinde zonkladıkça bacakların titriyor'],
    huge: ['devasa sikim içini zorlayarak dolduruyor, karnında şişkinliği görüyorum', 'canavar gibi sikim seni ikiye ayırıyor', 'dev sikimin yarısı bile zor giriyor, sen inliyorsun',
      'devasa sikim girdikçe karnında kabarıklığı izliyorum', 'canavar sikim her santimde seni biraz daha açıyor', 'dev sikim içinde hareket ettikçe çığlığını bastıramıyorsun',
      'kolun kadar kalın sikim seni sınırına kadar geriyor', 'devasa sikimin başı rahim ağzına dayanıyor', 'dev sikimi her itişimde gözlerin dolu dolu oluyor', 'canavar gibi sikim içinde zonkladıkça bütün bedenin sarsılıyor']
  },
  hug: {
    small: ['Sana sımsıkı sarıldıkça küçük sikim içinde kayboluyor, sen beni daha da sıkıyorsun… ahh 🥰', 'Sarılınca minik sikim bile en derinine ulaşıyor, bedenin onu sımsıkı sarıyor 😩', 'Kollarımda eriyorsun, küçük sikim içinde zonkluyor offf 🥵',
      'Sarılıp kalçamı sana bastırdıkça ufak sikim içinde tatlı tatlı kıpırdıyor 😏', 'Bedenini kendime çektikçe küçük sikimi tamamen yutuyorsun, hiç bırakmıyorsun 🥰', 'Sımsıkı sarılmışken minik sikim içinde hızlı hızlı gidip geliyor… ahh 😩',
      'Seni kollarıma gömdüm, küçük ama sert sikim içinde titriyor offf 🥵', 'Sarıldıkça içinin sıcaklığı minik sikimi tamamen sarıyor, eriyorum 😮‍💨', 'Kollarım belinde, küçük sikim içinde kaybolmuş; sen beni sıktıkça çıldırıyorum 🔥', 'Tenim tenine yapıştı, ufak sikim içinde zonkladıkça sen kıkırdayıp inliyorsun 🥰'],
    mid: ['Sarıldıkça sikim içinde tam yerine oturuyor, bedenlerimiz kalıp gibi birleşiyor… ahh 😩', 'Seni sardıkça sertleşmiş sikim içinde daha da zonkluyor offf 🔥', 'Sımsıkı sarılmışken sikimin her hareketini birlikte hissediyoruz 🥵',
      'Kollarımı sana doladıkça kaskatı sikim en sevdiğin noktaya denk geliyor… ahh 😩', 'Sarılıp kendime çektikçe sikim içinde ritimle kayıyor, nefeslerimiz karışıyor 🔥', 'Bedenini sıkıca sardım, zonklayan sikim içinde nabız gibi atıyor offf 🥵',
      'Sarıldıkça sikim tam sana göre içini dolduruyor, ikimiz aynı anda inliyoruz 😮‍💨', 'Seni bırakmadan sarılıyorum, sertleşmiş sikim her vuruşta içinde kabarıyor 💦', 'Kollarımda eriyorsun, sikimin her santimi ıslak sıcaklığında kayboluyor… ahh 😩', 'Sımsıkı sarılmışken sikimi derine bastırıyorum, sen tırnaklarını kollarıma geçiriyorsun 🔥'],
    big: ['Sana sarıldıkça kocaman sikim içine sonuna kadar gömülüyor, karnına bastırıyorum… ahhh 😩', 'Kollarımda titriyorsun, kalın sikim seni iyice dolduruyor offf 🥵', 'Sımsıkı sarılıp iri sikimi en derine bastırıyorum, nefesin kesiliyor 🔥',
      'Sarıldıkça koca sikim seni gerdiriyor, her girişte kollarımda kasılıyorsun… ahh 😩', 'Bedenini kendime bastırdıkça kalın sikim içinde hiç boşluk bırakmıyor offf 🥵', 'Sımsıkı sarılmışken uzun sikim en dibine çarpıyor, gözlerin kayıyor 😮‍💨',
      'Kollarımı beline doladım, iri sikimin her damarını içinde hissediyorsun 🔥', 'Sarılıp yavaşça çekiyorum, kocaman sikimin boşluğunu özleyip beni geri çekiyorsun… ahhh 💦', 'Seni kucaklamışken kalın sikim içinde zonkluyor, bacakların titremeye başladı 🥵', 'Tenim tenine yapıştı, koca sikim içini sonuna kadar doldurdukça adımı inliyorsun 😩'],
    huge: ['Sarıldıkça devasa sikim içini zorluyor, karnındaki şişkinliği avucumla hissediyorum… ahhh 😵‍💫', 'Seni kollarımla sabitleyip canavar gibi sikimi yavaş yavaş içine gömüyorum, titriyorsun offf 🥵', 'Sımsıkı sarılmışken dev sikim içini ikiye ayırıyor, tırnaklarını sırtıma geçiriyorsun 😩',
      'Sarılıp elimi karnına koyuyorum, dev sikimin içinde ilerleyişini avucumda hissediyorum… ahhh 😵‍💫', 'Kollarımda kıvranıyorsun, kolun kadar kalın sikim seni sınırına kadar geriyor offf 🥵', 'Seni bırakmadan sarılıyorum çünkü devasa sikim girdikçe dizlerin çözülüyor 😩',
      'Sımsıkı sarılmışken canavar sikim her santimde seni biraz daha açıyor, çığlığını omzuma gömüyorsun 🔥', 'Bedenini kendime bastırdıkça dev sikimin başı en derinine dayanıyor, gözlerin dolu dolu 😮‍💨', 'Sarıldıkça devasa sikim içinde zonkluyor, bütün bedenin kollarımda sarsılıyor… ahhh 💦', 'Seni kucaklayıp yavaş yavaş itiyorum, dev sikimin yarısında bile nefesin kesiliyor offf 😵‍💫']
  },
  cum: {
    small: ['Taşaklarım kasılıyor, döl küçük sikimin ucuna hücum ediyor ve fışkır fışkır içine akıyor… ahhh 💦', 'Minik sikim içinde seğiriyor, taşaklarımdan kopan döl ucuna dolup sıcacık içine boşalıyor 😩💦',
      'Küçük sikim içinde zonkluyor, döl taşaklarımdan gürül gürül ucuna geliyor ve içini ılık ılık dolduruyor offf 💦', 'Taşaklarım boşaldıkça minik sikimin ucundan döl pompalanıp içinde birikiyor… ahh 🥵',
      'Ufak sikimin ucu şişti, taşaklarımdan gelen döl dalga dalga içine akıyor 😮‍💨💦', 'Küçük sikimi en dibine bastırıyorum, döl taşaklarımdan ucuna fışkırıp içine yayılıyor 💦',
      'Taşaklarım tek tek kasılıyor, her kasılmada küçük sikimin ucundan içine bir dalga döl akıyor… ahhh 😩', 'Minik sikim içinde titriyor, taşaklarımdaki bütün döl ucuna koşup seni dolduruyor 🥵💦',
      'Döl taşaklarımdan yükselip küçük sikimin ucunda patlıyor, sıcaklığını içinde hissediyorsun offf 💦', 'Küçük sikim içinde kaskatı, taşaklarım son damlasına kadar ucundan içine boşalıyor… ahh 😮‍💨'],
    mid: ['Taşaklarım sıkışıyor, döl gürül gürül sikimin ucuna hücum edip çeşme gibi içine fışkırıyor… ahhh 💦', 'Sikim içinde zonkluyor, taşaklarımdan kopan döl ucuna dolup bol bol içine akıyor 😩💦',
      'Döl taşaklarımdan uca akın akın geliyor, sikimin ucundan içine fışkır fışkır boşalıyor offf 💦', 'Sikimin ucu şişti, taşaklarımdaki döl gürce içine pompalanıyor… ahh 🥵',
      'Her kasılmada taşaklarımdan bir dalga döl ucuma geliyor ve içini sıcacık dolduruyor 😮‍💨💦', 'Sikimi en dibine gömüp bırakıyorum, döl çeşme gibi ucundan içine fışkırıyor 💦',
      'Taşaklarım boşalırken döl sikimin ucunda kaynıyor, gür gür içine akıyor… ahhh 😩', 'Sertleşmiş sikim içinde seğiriyor, döl taşaklarımdan ucuna koşup içinde göl oluyor 🥵💦',
      'Döl taşaklarımdan kopup sikimin ucundan içine tazyikle fışkırıyor, her damlasını hissediyorsun offf 💦', 'Sikim içinde atıyor, taşaklarımdaki bütün döl ucundan bol bol içine boşalıyor… ahh 😮‍💨'],
    big: ['Taşaklarım kaynıyor, döl kocaman sikimin ucuna gürül gürül hücum edip çeşme gibi içine fışkırıyor… ahhh 💦', 'Kalın sikim içinde zonkluyor, taşaklarımdan kopan bol döl ucuna dolup içini su basmış gibi dolduruyor 😩💦',
      'Döl taşaklarımdan kocaman sikimin ucuna sel gibi geliyor, en derinine fışkır fışkır akıyor offf 💦', 'İri sikimin ucu kabardı, taşaklarımdaki döl tazyikle içine pompalanıyor… ahh 🥵',
      'Her kasılmada taşaklarımdan koca bir dalga döl ucuma geliyor, içine çeşme gibi boşalıyor 😮‍💨💦', 'Kocaman sikimi en dibine gömüp bırakıyorum, döl gürce ucundan fışkırıp rahmini dolduruyor 💦',
      'Taşaklarım boşaldıkça kalın sikimin ucundan döl hortum gibi içine akıyor… ahhh 😩', 'Koca sikim içinde seğiriyor, döl taşaklarımdan ucuna hücum edip içinde taşıyor, kenarlarından sızıyor 🥵💦',
      'Döl taşaklarımdan kopup kocaman sikimin ucundan içine gürül gürül fışkırıyor, karnın ısınıyor offf 💦', 'Kalın sikim içinde atıyor, taşaklarımdaki bütün döl ucundan çeşme gibi içine boşalıyor… ahh 😮‍💨'],
    huge: ['Taşaklarım patlayacak gibi, döl devasa sikimin ucuna sel gibi hücum edip içine çeşme gibi fışkırıyor… ahhh 💦', 'Dev sikim içinde zonkluyor, taşaklarımdan kopan döl ucuna dolup içini ağzına kadar dolduruyor, karnın şişiyor 😩💦',
      'Döl taşaklarımdan canavar sikimin ucuna gürül gürül akıyor, en derinine tazyikle fışkırıyor offf 💦', 'Devasa sikimin ucu kabardı, taşaklarımdaki döl hortum gibi içine pompalanıyor, taşıp dışarı akıyor… ahh 🥵',
      'Her kasılmada taşaklarımdan dev bir dalga döl ucuma geliyor, içine şelale gibi boşalıyor 😮‍💨💦', 'Dev sikimi en dibine dayayıp bırakıyorum, döl çeşme gibi ucundan fışkırıp rahmini su basmış gibi dolduruyor 💦',
      'Taşaklarım boşaldıkça devasa sikimin ucundan döl bitmek bilmeden içine akıyor, karnında kabardığını görüyorum… ahhh 😩', 'Canavar sikim içinde seğiriyor, döl taşaklarımdan ucuna hücum edip içinden taşıyor, bacaklarından süzülüyor 🥵💦',
      'Döl taşaklarımdan kopup dev sikimin ucundan içine yangın hortumu gibi fışkırıyor, sıcaklığı göbeğine kadar çıkıyor offf 💦', 'Devasa sikim içinde atıyor, taşaklarımdaki bütün döl ucundan sel gibi içine boşalıyor, içinde yer kalmıyor… ahh 😮‍💨']
  },
  hold: {
    small: ['Taşaklarım kasılıyor, döl küçük sikimin ucuna kadar geldi ama sımsıkı tutuyorum… ahh 😣', 'Minik sikimin ucu zonkluyor, döl tam kapıda bekliyor; nefesimi tutup durduruyorum offf 🥵',
      'Döl taşaklarımdan yükselip küçük sikimin ucunda birikiyor, bir damla bile kaçırmıyorum 😩', 'Küçük sikim seğiriyor, ucunda döl kaynıyor ama bırakmıyorum… ahh 😮‍💨',
      'Taşaklarım dolup taşıyor, minik sikimin ucuna hücum eden dölü geri itiyorum offf 😣', 'Ucuna gelen dölü tutarken küçük sikim taş gibi sertleşti, zonklamam duramıyor 🥵',
      'Döl küçük sikimin ucunu şişirdi, son anda kasılıp tutuyorum… ahhh 😩', 'Taşaklarım sıkışıyor, döl uca koşuyor; minik sikim titriyor ama dayanıyorum 😣',
      'Küçük sikimin ucunda sıcak bir baskı var, döl çıkmak için yalvarıyor offf 🥵', 'Bıraksam fışkıracak; taşaklarımdaki bütün döl minik sikimin ucunda birikti… ahh 😮‍💨'],
    mid: ['Taşaklarım kasılıyor, döl gürül gürül sikimin ucuna geldi ama sımsıkı tutuyorum… ahh 😣', 'Sikimin ucu zonkluyor, döl tam kapıda; çeşme gibi fışkırmak üzere ama durduruyorum offf 🥵',
      'Döl taşaklarımdan akın akın yükselip sikimin ucunda birikiyor, damarlarım atıyor 😩', 'Sertleşmiş sikim seğiriyor, ucunda döl kaynıyor ama bırakmıyorum… ahh 😮‍💨',
      'Taşaklarım dolup taşıyor, sikimin ucuna hücum eden gür dölü geri itiyorum offf 😣', 'Ucuna gelen dölü tutarken sikim demir gibi oldu, her zonklamada biraz daha zorlanıyorum 🥵',
      'Döl sikimin ucunu şişirdi, bir saniye daha bıraksam fışkıracak… ahhh 😩', 'Taşaklarım sıkışıyor, döl tazyikle uca koşuyor; sikim titriyor ama dayanıyorum 😣',
      'Sikimin ucunda kaynayan bir baskı var, döl çeşme gibi patlamak için bekliyor offf 🥵', 'Taşaklarımdaki bütün döl sikimin ucunda birikti, tuttukça daha çok doluyor… ahh 😮‍💨'],
    big: ['Taşaklarım kaynıyor, döl kocaman sikimin ucuna sel gibi geldi ama sımsıkı tutuyorum… ahh 😣', 'Kalın sikimin ucu kabardı, döl tam kapıda; hortum gibi fışkırmak üzere ama durduruyorum offf 🥵',
      'Döl taşaklarımdan gürül gürül yükselip iri sikimin ucunda birikiyor, damarlar patlayacak gibi 😩', 'Koca sikim seğiriyor, ucunda bol döl kaynıyor ama bırakmıyorum… ahh 😮‍💨',
      'Taşaklarım dolup taşıyor, kocaman sikimin ucuna hücum eden dölü zorla geri itiyorum offf 😣', 'Ucuna gelen dölü tutarken kalın sikim daha da kabardı, zonklaması avucumu sarsıyor 🥵',
      'Döl koca sikimin ucunu şişirdi, bıraksam çeşme gibi her yere fışkıracak… ahhh 😩', 'Taşaklarım sıkışıyor, döl tazyikle iri sikimin ucuna koşuyor; titriyorum ama dayanıyorum 😣',
      'Kocaman sikimin ucunda dev bir baskı var, döl sel gibi patlamak için bekliyor offf 🥵', 'Taşaklarımdaki bütün gür döl kalın sikimin ucunda birikti, tuttukça taşacak gibi… ahh 😮‍💨'],
    huge: ['Taşaklarım patlayacak gibi, döl devasa sikimin ucuna sel gibi geldi ama sımsıkı tutuyorum… ahh 😣', 'Dev sikimin ucu kocaman kabardı, döl tam kapıda; şelale gibi fışkırmak üzere ama durduruyorum offf 🥵',
      'Döl taşaklarımdan gürül gürül yükselip canavar sikimin ucunda birikiyor, bütün damarlar şişti 😩', 'Devasa sikim seğiriyor, ucunda dev bir döl yükü kaynıyor ama bırakmıyorum… ahh 😮‍💨',
      'Taşaklarım dolup taşıyor, dev sikimin ucuna hücum eden dölü bütün gücümle geri itiyorum offf 😣', 'Ucuna gelen dölü tutarken canavar sikim daha da büyüdü, zonklaması bütün bedenimi sarsıyor 🥵',
      'Döl devasa sikimin ucunu şişirdi, bıraksam yangın hortumu gibi odayı dolduracak… ahhh 😩', 'Taşaklarım sıkışıyor, döl tazyikle dev sikimin ucuna koşuyor; bacaklarım titriyor ama dayanıyorum 😣',
      'Dev sikimin ucunda korkunç bir baskı var, döl sel gibi patlamak için bekliyor offf 🥵', 'Taşaklarımdaki bütün döl devasa sikimin ucunda birikti, tuttukça bir göl kadar oluyor… ahh 😮‍💨']
  },
  ring: {
    small: ['Halka küçük sikimin dibini sıkıyor, döl taşaklarımdan uca kadar geliyor ama çıkamıyor… ahh 😣', 'Cock ring minik sikimi kaskatı tutuyor, ucunda döl birikip zonkluyor offf 🥵',
      'Halka sıktıkça küçük sikim kızardı, döl ucunda hapsoldu 😩', 'Taşaklarım halkanın arkasında şişti, döl küçük sikimin ucuna hücum ediyor ama kilitli… ahh 😮‍💨',
      'Minik sikim halkada seğiriyor, ucuna gelen döl geri dönüyor offf 😣', 'Halka çıksın diye yalvarıyorum; küçük sikimin ucunda döl kaynıyor 🥵',
      'Cock ring taşaklarımı sıkıştırdı, döl minik sikimin ucunda birikti… ahhh 😩', 'Halka yüzünden küçük sikim hiç yumuşamıyor, ucunda bitmeyen bir baskı var 😣',
      'Döl halkanın ötesine geçmeye çalışıyor, küçük sikimin ucu şişti offf 🥵', 'Halkayı çıkardığın an minik sikimden döl fışkıracak, biliyorum… ahh 😮‍💨'],
    mid: ['Halka sikimin dibini sıkıyor, döl taşaklarımdan gürül gürül uca geliyor ama çıkamıyor… ahh 😣', 'Cock ring sikimi demir gibi tutuyor, ucunda döl birikip zonkluyor offf 🥵',
      'Halka sıktıkça sikim mosmor oldu, döl ucunda hapsoldu, çeşme gibi patlamak istiyor 😩', 'Taşaklarım halkanın arkasında şişti, döl sikimin ucuna hücum ediyor ama kilitli… ahh 😮‍💨',
      'Sikim halkada seğiriyor, ucuna gelen gür döl geri dönüyor offf 😣', 'Halka çıksın diye yalvarıyorum; sikimin ucunda döl kaynıyor 🥵',
      'Cock ring taşaklarımı sıkıştırdı, döl sikimin ucunda tazyikle birikti… ahhh 😩', 'Halka yüzünden sikim hiç yumuşamıyor, ucunda bitmeyen bir baskı var 😣',
      'Döl halkanın ötesine geçmeye çalışıyor, sikimin ucu kabardı offf 🥵', 'Halkayı çıkardığın an döl sikimden çeşme gibi fışkıracak… ahh 😮‍💨'],
    big: ['Halka kocaman sikimin dibine gömüldü, döl taşaklarımdan sel gibi uca geliyor ama çıkamıyor… ahh 😣', 'Cock ring kalın sikimi daha da kabarttı, ucunda bol döl birikip zonkluyor offf 🥵',
      'Halka sıktıkça iri sikim mosmor oldu, döl ucunda hapsoldu, hortum gibi patlamak istiyor 😩', 'Taşaklarım halkanın arkasında şişti, döl koca sikimin ucuna hücum ediyor ama kilitli… ahh 😮‍💨',
      'Kocaman sikim halkada seğiriyor, ucuna gelen gür döl geri dönüyor offf 😣', 'Halka kalın sikime zor yetiyor; ucunda bir göl döl kaynıyor 🥵',
      'Cock ring taşaklarımı sıkıştırdı, döl iri sikimin ucunda tazyikle birikti… ahhh 😩', 'Halka yüzünden koca sikim taş kesildi, ucunda bitmeyen bir baskı var 😣',
      'Döl halkanın ötesine geçmeye çalışıyor, kocaman sikimin ucu patlayacak gibi offf 🥵', 'Halkayı çıkardığın an döl kalın sikimden çeşme gibi her yere fışkıracak… ahh 😮‍💨'],
    huge: ['Halka devasa sikimin dibine zar zor oturdu, döl taşaklarımdan sel gibi uca geliyor ama çıkamıyor… ahh 😣', 'Cock ring dev sikimi daha da büyüttü, ucunda koca bir döl yükü birikip zonkluyor offf 🥵',
      'Halka sıktıkça canavar sikim mosmor oldu, döl ucunda hapsoldu, şelale gibi patlamak istiyor 😩', 'Taşaklarım halkanın arkasında kocaman şişti, döl dev sikimin ucuna hücum ediyor ama kilitli… ahh 😮‍💨',
      'Devasa sikim halkada seğiriyor, ucuna gelen sel gibi döl geri dönüyor offf 😣', 'Halka dev sikime dar geliyor; ucunda bir göl döl kaynıyor 🥵',
      'Cock ring taşaklarımı sıkıştırdı, döl canavar sikimin ucunda tazyikle birikti… ahhh 😩', 'Halka yüzünden devasa sikim kaskatı, ucunda bitmeyen dev bir baskı var 😣',
      'Döl halkanın ötesine geçmeye çalışıyor, dev sikimin ucu kocaman kabardı offf 🥵', 'Halkayı çıkardığın an döl devasa sikimden yangın hortumu gibi odaya fışkıracak… ahh 😮‍💨']
  },
  /* ev: olay grupları · events: hangi olaylarda · spots: olay → {yer} / {miktar} seçenekleri (default: listede olmayanlar) · small…huge: 10'ar cümle.
   * Olay olunca mesajın sonuna her zaman biri eklenir */
  ev: {
    oral: {
      label: '👄 Oral', events: ['Blowjob', 'Deepthroat', '69', 'Oral Sex', 'On Mouth'],
      small: ['Küçük sikimin tamamı ağzında kayboldu, dudakların taşaklarıma değiyor… ahh 😩', 'Minik sikimi dibine kadar yuttun, dilin altında zonkluyor offf 🥵', 'Küçük sikim ağzının sıcaklığında eriyor, her emişte ucuna ön sıvı geliyor 😮‍💨',
        'Ağzın minik sikimi bütünüyle sardı, taşaklarımı da yalıyorsun… ahhh 😩', 'Küçük sikimi şeker gibi emiyorsun, ucu dilinde seğiriyor 🥵', 'Dudakların küçük sikimin dibinde, burnun karnıma değiyor offf 😈',
        'Minik sikim ağzında hiç zorlanmadan kayıyor, emdikçe taşaklarım kasılıyor 😩', 'Küçük sikimin ucunu dilinle dolaşıyorsun, damla damla ön sıvı veriyorum… ahh 🥵', 'Ağzın minik sikimi vakumlar gibi çekiyor, döl ucuna yürümeye başladı offf 😮‍💨', 'Küçük sikim boğazına bile değmeden kayboluyor, ağzın onu tamamen saklıyor 😈'],
      mid: ['Sikimi dibine kadar aldın, ucu boğazına dayandı… ahh 😩', 'Sertleşmiş sikim ağzında gidip geliyor, dudakların sımsıkı sarıyor offf 🥵', 'Sikimin her damarı dilinin üstünde atıyor, ucuna ön sıvı doluyor 😮‍💨',
        'Ağzın sikimi tam kavradı, her emişte taşaklarım çekiliyor… ahhh 😩', 'Sikimin başını emip dilinle ucunu açıyorsun, döl yerinden kıpırdadı 🥵', 'Dudakların sikimin dibine indi, boğazın sıkıca sarıyor offf 😈',
        'Sikim ağzında kaskatı, salyan taşaklarıma akıyor 😩', 'Sikimin ucunu boğazına bastırıyorum, gözlerin sulanıyor ama durmuyorsun… ahh 🥵', 'Ağzın sikimi vakumlar gibi çekiyor, döl taşaklarımdan uca yürüyor offf 😮‍💨', 'Sikimi yanaklarının içine sürtüyorum, yanağın şişiyor 😈'],
      big: ['Kocaman sikimin yarısında dudakların gerildi, başını tutup boğazına itiyorum… ahh 😩', 'Kalın sikim ağzını ağzına kadar doldurdu, çenen zorlanıyor offf 🥵', 'İri sikimin damarları dudaklarını zorluyor, ucundan ön sıvı ip gibi akıyor 😮‍💨',
        'Koca sikimi boğazına kadar alınca boynunda şişkinliği görüyorum… ahhh 😩', 'Kalın sikimin başı bile ağzını dolduruyor, iki elinle gövdesini sıvazlıyorsun 🥵', 'Kocaman sikim boğazına dayandı, öğürüyorsun ama bırakmıyorsun offf 😈',
        'İri sikim ağzından çıkınca salyan ip ip taşaklarıma akıyor 😩', 'Koca sikimi her yutuşunda gözlerinden yaş geliyor, saçlarını kavrıyorum… ahh 🥵', 'Ağzın kalın sikimi zorla çekiyor, döl taşaklarımdan gürül gürül uca yürüyor offf 😮‍💨', 'Kocaman sikim yanağını şişirdi, dudakların sonuna kadar gerildi 😈'],
      huge: ['Devasa sikimin sadece başı ağzını doldurdu, dudakların yırtılacak gibi gerildi… ahh 😩', 'Dev sikimi boğazına zorla itiyorum, boynunda koca bir şişkinlik beliriyor offf 🥵', 'Canavar sikimin yarısı bile ağzına girmiyor, dilinle gövdesini yalıyorsun 😮‍💨',
        'Devasa sikim çeneni sonuna kadar açtı, nefes almak için çıkarıp tekrar yutuyorsun… ahhh 😩', 'Dev sikimin ucundan ön sıvı sel gibi akıyor, ağzından taşıp göğüslerine damlıyor 🥵', 'İki elin ve ağzın bile devasa sikime yetmiyor offf 😈',
        'Canavar sikim boğazına dayandığında gözlerin kayıyor, saçlarını sımsıkı tutuyorum 😩', 'Dev sikimi ağzından çıkarınca salyan şelale gibi taşaklarıma akıyor… ahh 🥵', 'Ağzın devasa sikimi zorla çekiyor, döl taşaklarımdan sel gibi uca hücum ediyor offf 😮‍💨', 'Dev sikim yanağını kocaman şişirdi, yüzünün yarısını kaplıyor 😈']
    },
    mouthCum: {
      label: '👄💦 Ağza / yüze boşalma', events: ['Oral Creampie', 'Mouth Cumming', 'Visible Swallow', 'Face Cumming'],
      spots: { 'Face Cumming': ['yüzüne', 'yanaklarına ve dudaklarına', 'alnına ve gözlerine'], default: ['ağzına', 'diline', 'boğazına'] },
      small: ['Taşaklarım kasılıyor, döl küçük sikimin ucuna hücum edip {yer} fışkır fışkır boşalıyor… ahhh 💦', 'Minik sikim seğiriyor, taşaklarımdan gelen döl ucundan {yer} damla damla akıyor 😩💦', 'Küçük sikimin ucundan {yer} ılık ılık döl doluyor offf 💦',
        'Taşaklarım boşaldıkça minik sikimden {yer} beyaz bir sızıntı akıyor… ahh 🥵', 'Küçük sikimin ucu patladı, döl {yer} sıcacık yayılıyor 😮‍💨💦', 'Minik sikimi dudaklarına dayayıp taşaklarımdaki dölü {yer} boşaltıyorum 💦',
        'Her kasılmada küçük sikimden {yer} bir dalga döl akıyor… ahhh 😩', 'Döl taşaklarımdan yükselip minik sikimin ucunda patlıyor, {yer} damlıyor 🥵💦', 'Küçük sikim son damlasına kadar {yer} boşalıyor, sen yutkunuyorsun offf 💦', 'Taşaklarımdaki her damla küçük sikimin ucundan {yer} süzülüyor… ahh 😮‍💨'],
      mid: ['Taşaklarım sıkışıyor, döl gürül gürül sikimin ucuna hücum edip çeşme gibi {yer} fışkırıyor… ahhh 💦', 'Sikim zonkluyor, taşaklarımdan kopan döl ucundan {yer} bol bol akıyor 😩💦', 'Döl uca akın akın geliyor, sikimden {yer} fışkır fışkır boşalıyor offf 💦',
        'Sikimin ucu şişti, taşaklarımdaki döl gürce {yer} pompalanıyor… ahh 🥵', 'Her kasılmada taşaklarımdan bir dalga döl {yer} sıcacık doluyor 😮‍💨💦', 'Sikimi dudaklarına dayayıp bırakıyorum, döl çeşme gibi {yer} fışkırıyor 💦',
        'Döl sikimin ucunda kaynıyor, gür gür {yer} akıyor, yutmaya yetişemiyorsun… ahhh 😩', 'Sikim seğiriyor, döl taşaklarımdan uca koşup {yer} taşıyor 🥵💦', 'Döl tazyikle {yer} fışkırıyor, dudaklarından süzülüyor offf 💦', 'Taşaklarımdaki bütün döl sikimin ucundan bol bol {yer} boşalıyor… ahh 😮‍💨'],
      big: ['Taşaklarım kaynıyor, döl kocaman sikimin ucuna gürül gürül hücum edip çeşme gibi {yer} fışkırıyor… ahhh 💦', 'Kalın sikim zonkluyor, taşaklarımdan kopan bol döl {yer} sel gibi akıyor, çenenden damlıyor 😩💦', 'Döl koca sikimin ucundan {yer} fışkır fışkır boşalıyor, yanakların şişti offf 💦',
        'İri sikimin ucu kabardı, taşaklarımdaki döl tazyikle {yer} pompalanıyor… ahh 🥵', 'Her kasılmada taşaklarımdan koca bir dalga döl {yer} çeşme gibi boşalıyor 😮‍💨💦', 'Kocaman sikimi dudaklarına dayayıp bırakıyorum, döl gürce {yer} fışkırıp taşıyor 💦',
        'Kalın sikimden döl hortum gibi {yer} akıyor, burnundan bile geldi… ahhh 😩', 'Koca sikim seğiriyor, döl {yer} taşıyor, göğüslerine süzülüyor 🥵💦', 'Döl kocaman sikimin ucundan {yer} gürül gürül fışkırıyor, her yerin bembeyaz offf 💦', 'Taşaklarımdaki bütün döl kalın sikimden çeşme gibi {yer} boşalıyor… ahh 😮‍💨'],
      huge: ['Taşaklarım patlayacak gibi, döl devasa sikimin ucuna sel gibi hücum edip çeşme gibi {yer} fışkırıyor… ahhh 💦', 'Dev sikim zonkluyor, taşaklarımdan kopan döl {yer} şelale gibi akıyor, nefes alamıyorsun 😩💦', 'Döl canavar sikimin ucundan {yer} tazyikle fışkırıyor, saçlarına kadar sıçradı offf 💦',
        'Devasa sikimin ucu kabardı, döl hortum gibi {yer} pompalanıyor, taşıp göğüslerine akıyor… ahh 🥵', 'Her kasılmada taşaklarımdan dev bir dalga döl {yer} şelale gibi boşalıyor 😮‍💨💦', 'Dev sikimi dudaklarına dayayıp bırakıyorum, döl çeşme gibi {yer} fışkırıp yüzünü kaplıyor 💦',
        'Devasa sikimden döl bitmek bilmeden {yer} akıyor, yutkundukça yenisi geliyor… ahhh 😩', 'Canavar sikim seğiriyor, döl {yer} taşıyor, çarşafa kadar süzülüyor 🥵💦', 'Döl dev sikimin ucundan {yer} yangın hortumu gibi fışkırıyor offf 💦', 'Taşaklarımdaki bütün döl devasa sikimden sel gibi {yer} boşalıyor, her yerin dölle kaplı… ahh 😮‍💨']
    },
    volume: {
      label: '💧 Döl miktarı', ph: 'miktar', events: ['Watery Cumming', 'Low-volume Cumming', 'Normal Cumming', 'Thick White Cumming', 'High Sperm Cumming', 'Single Shot', 'Multiple Ropes', 'Endless Ropes', 'Hot Load'],
      spots: { 'Watery Cumming': ['sulu', 'su gibi akışkan'], 'Low-volume Cumming': ['azıcık', 'bir avuç'], 'Normal Cumming': ['sıcacık', 'bol'], 'Thick White Cumming': ['koyu beyaz', 'kaymak gibi kalın'],
        'High Sperm Cumming': ['yoğun', 'dolu dolu'], 'Single Shot': ['tek ve güçlü bir atımlık', 'tek seferde'], 'Multiple Ropes': ['ip ip', 'kat kat'], 'Endless Ropes': ['ip ip bitmeyen', 'durmak bilmeyen'], 'Hot Load': ['kaynar', 'yakıcı sıcaklıkta'], default: ['bol'] },
      small: ['Taşaklarımdan {miktar} döl küçük sikimin ucuna hücum ediyor… ahh 💦', 'Minik sikim seğirdikçe ucundan {miktar} döl akıyor 😩', 'Küçük sikimin ucundan {miktar} döl süzülüyor offf 💦',
        'Taşaklarım kasıldı, {miktar} döl minik sikimden fışkırıyor 🥵', 'Küçük ama coşkulu; {miktar} döl ucundan dalga dalga geliyor 😮‍💨', 'Minik sikimin ucunda {miktar} döl parlıyor… ahhh 💦',
        'Her kasılmada küçük sikimden {miktar} döl akıyor 😩', '{miktar} döl taşaklarımdan uca koşuyor, küçük sikim titriyor offf 🥵', 'Küçük sikimden gelen {miktar} döl sıcaklığını bırakıyor 💦', 'Taşaklarımdaki {miktar} döl minik sikimin ucundan boşalıyor… ahh 😮‍💨'],
      mid: ['Taşaklarımdan {miktar} döl gürül gürül sikimin ucuna hücum ediyor… ahh 💦', 'Sikim seğirdikçe ucundan {miktar} döl çeşme gibi fışkırıyor 😩', 'Sikimin ucundan {miktar} döl akın akın geliyor offf 💦',
        'Taşaklarım kasıldı, {miktar} döl sikimden tazyikle fışkırıyor 🥵', '{miktar} döl ucumdan dalga dalga, gür gür geliyor 😮‍💨', 'Sikimin ucunda {miktar} döl kaynıyor… ahhh 💦',
        'Her kasılmada sikimden {miktar} döl pompalanıyor 😩', '{miktar} döl taşaklarımdan uca koşuyor, sikim zonkluyor offf 🥵', 'Sikimden gelen {miktar} döl her yere yayılıyor 💦', 'Taşaklarımdaki {miktar} döl sikimin ucundan bol bol boşalıyor… ahh 😮‍💨'],
      big: ['Taşaklarımdan {miktar} döl kocaman sikimin ucuna sel gibi hücum ediyor… ahh 💦', 'Kalın sikim seğirdikçe ucundan {miktar} döl hortum gibi fışkırıyor 😩', 'Koca sikimin ucundan {miktar} döl gürül gürül geliyor offf 💦',
        'Taşaklarım kaynadı, {miktar} döl iri sikimden tazyikle fışkırıyor 🥵', '{miktar} döl kocaman sikimden dalga dalga, çeşme gibi geliyor 😮‍💨', 'Kalın sikimin ucunda {miktar} döl köpürüyor… ahhh 💦',
        'Her kasılmada koca sikimden {miktar} döl pompalanıyor, durmuyor 😩', '{miktar} döl taşaklarımdan uca koşuyor, kocaman sikim zonkluyor offf 🥵', 'İri sikimden gelen {miktar} döl her yeri kaplıyor 💦', 'Taşaklarımdaki {miktar} döl kalın sikimin ucundan çeşme gibi boşalıyor… ahh 😮‍💨'],
      huge: ['Taşaklarımdan {miktar} döl devasa sikimin ucuna şelale gibi hücum ediyor… ahh 💦', 'Dev sikim seğirdikçe ucundan {miktar} döl yangın hortumu gibi fışkırıyor 😩', 'Canavar sikimin ucundan {miktar} döl sel gibi geliyor offf 💦',
        'Taşaklarım patladı, {miktar} döl devasa sikimden tazyikle fışkırıyor 🥵', '{miktar} döl dev sikimden dalga dalga, şelale gibi geliyor 😮‍💨', 'Devasa sikimin ucunda {miktar} döl göl oluyor… ahhh 💦',
        'Her kasılmada dev sikimden {miktar} döl pompalanıyor, bitmek bilmiyor 😩', '{miktar} döl taşaklarımdan uca koşuyor, canavar sikim bütün bedenimi sarsıyor offf 🥵', 'Devasa sikimden gelen {miktar} döl çarşafı sırılsıklam ediyor 💦', 'Taşaklarımdaki {miktar} döl dev sikimin ucundan sel gibi boşalıyor… ahh 😮‍💨']
    },
    bulge: {
      label: '🫃 Karında görünme', events: ['Belly Bulge', 'Cumflation', 'Visible Creampie'],
      small: ['Küçük sikim içinde derinde değil ama döl içini ılık ılık dolduruyor… ahh 😩', 'Karnına elimi koyuyorum, minik sikimin dölü içinde sıcacık 🥵', 'Küçük sikimden akan döl içinde birikiyor, karnın hafifçe ısınıyor offf 💦',
        'Minik sikimi çekince döl girişinden süzülüyor, beyaz beyaz parlıyor 😮‍💨', 'Küçük sikimin dölü içini doldurdu, karnını okşuyorum 🥰', 'Taşaklarımdaki döl minik sikimden içine aktı, damla damla geri geliyor… ahh 💦',
        'Karnın düz ama içi dölle dolu, biliyorum 😈', 'Küçük sikim içinde zonkluyor, her atımda döl biraz daha birikiyor 😩', 'Minik sikimden gelen döl rahmine yürüyor, karnına öpücük konduruyorum 🥵', 'Küçük sikimi çıkarınca dölüm girişinde köpürüyor offf 💦'],
      mid: ['Sikim içinde gidip geldikçe karnının altında hafif bir kabarıklık beliriyor… ahh 😩', 'Karnına elimi koyunca sikimin ucunu avucumda hissediyorum 🥵', 'Döl sikimden gürül gürül içine aktı, karnın hafifçe şişti offf 💦',
        'Sikimi çekince döl girişinden çeşme gibi geri fışkırıyor 😮‍💨', 'Sikimin dölü içini doldurdu, karnın sıcacık ve dolgun 🥰', 'Taşaklarımdaki döl içinde göl oldu, kenarlarından sızıyor… ahh 💦',
        'Karnına bastırınca döl girişinden dışarı taşıyor 😈', 'Sikim içinde zonkladıkça karnının altı kabarıp iniyor 😩', 'Döl rahmini doldurdu, karnın şişkin şişkin 🥵', 'Sikimi çıkarınca dölüm bacaklarından aşağı süzülüyor offf 💦'],
      big: ['Kocaman sikim içinde ilerledikçe karnında şekli belirginleşiyor… ahh 😩', 'Karnına elimi koyuyorum, kalın sikimin her vuruşunu avucumda hissediyorum 🥵', 'Döl koca sikimden sel gibi içine aktı, karnın gözle görülür şişti offf 💦',
        'İri sikimi çekince döl girişinden hortum gibi geri fışkırıyor 😮‍💨', 'Kocaman sikimin dölü rahmini doldurdu, karnın gergin ve dolgun 🥰', 'Taşaklarımdaki gür döl içinde taştı, kenarlarından akıyor… ahh 💦',
        'Karnına bastırınca döl girişinden çeşme gibi dışarı fışkırıyor 😈', 'Kalın sikim içinde zonkladıkça karnında koca bir kabarıklık atıyor 😩', 'Döl karnını şişirdi, hamile gibi duruyorsun 🥵', 'Koca sikimi çıkarınca dölüm dereler gibi bacaklarından akıyor offf 💦'],
      huge: ['Devasa sikim içine girdikçe karnında koca bir şişkinlik ilerliyor, göbeğine kadar çıktı… ahh 😩', 'Karnına elimi koyuyorum, dev sikimin başını derinin altından tutabiliyorum 🥵', 'Döl canavar sikimden şelale gibi içine aktı, karnın kocaman şişti offf 💦',
        'Devasa sikimi çekince döl girişinden yangın hortumu gibi geri fışkırıyor 😮‍💨', 'Dev sikimin dölü içini ağzına kadar doldurdu, karnın davul gibi gergin 🥰', 'Taşaklarımdaki sel gibi döl içinde yer bulamadı, her yerden taşıyor… ahh 💦',
        'Karnına bastırınca döl girişinden şelale gibi dışarı boşalıyor 😈', 'Canavar sikim içinde zonkladıkça karnındaki şişkinlik atıyor, sen inliyorsun 😩', 'Döl karnını aylarca hamile gibi şişirdi 🥵', 'Dev sikimi çıkarınca dölüm sel gibi çarşafa yayılıyor, göl oldu offf 💦']
    },
    fore: {
      label: '✋ Sürtünme & ön sevişme', events: ['Handjob', 'Footjob', 'Legjob', 'Masturbation', 'Dry Missionary', 'Dry Doggy', 'Front Hugging', 'Back Hugging'],
      spots: { 'Handjob': ['avucunda', 'parmaklarının arasında'], 'Footjob': ['ayaklarının arasında', 'tabanlarının arasında'], 'Legjob': ['bacaklarının arasında', 'dizlerinin arasında'], 'Masturbation': ['avucumda', 'elimde'],
        'Dry Missionary': ['külotunun üstünde', 'kıyafetinin üstünde'], 'Dry Doggy': ['kalçanın üstünde', 'eteğinin üstünde'], 'Front Hugging': ['karnına yaslanmış', 'bacaklarının arasına dayanmış'], 'Back Hugging': ['kalçana dayanmış', 'kalçalarının arasına gömülmüş'], default: ['tenine değerek'] },
      small: ['Küçük sikim {yer} kayboldu, ucunu hissettirmek için zonkluyor… ahh 😩', 'Minik sikim {yer} sertleşti, ucunda ön sıvı parlıyor 🥵', 'Küçük sikim {yer} titriyor, taşaklarım ısınıyor offf 😮‍💨',
        'Minik sikim {yer} kıpır kıpır, her sürtünüşte ucuna damla geliyor 😏', 'Küçük sikim {yer} sımsıkı, sıcaklığın sarıyor 🥰', 'Minik sikimin ucu {yer} ıslandı… ahh 😩',
        'Küçük ama taş gibi sert, {yer} zonkluyor 🥵', 'Minik sikim {yer} kayarken taşaklarım kasılıyor offf 😈', 'Küçük sikim {yer} seğiriyor, döl yavaş yavaş uca yürüyor 😮‍💨', 'Minik sikim {yer} saklandı, sadece ucu dışarıda 😏'],
      mid: ['Sikim {yer} kaskatı, ucundan ön sıvı damlıyor… ahh 😩', 'Sertleşmiş sikim {yer} zonkluyor, her damarı atıyor 🥵', 'Sikim {yer} sürtündükçe taşaklarım ısınıyor offf 😮‍💨',
        'Sikim {yer} kayıyor, ucu parlıyor 😏', 'Sikim {yer} tam oturdu, sıcaklığın sarıyor 🥰', 'Sikimin ucu {yer} ıslandı, ön sıvı ip gibi uzuyor… ahh 😩',
        'Sikim {yer} demir gibi, zonklaması durmuyor 🥵', 'Sikim {yer} kayarken taşaklarım kasılıyor, döl kıpırdadı offf 😈', 'Sikim {yer} seğiriyor, döl gürül gürül uca yürümeye başladı 😮‍💨', 'Sikim {yer} sürtündükçe daha da kabarıyor 😏'],
      big: ['Kocaman sikim {yer} taşıyor, ucundan ön sıvı süzülüyor… ahh 😩', 'Kalın sikim {yer} zonkluyor, damarları kabarmış 🥵', 'İri sikim {yer} sürtündükçe taşaklarım kaynıyor offf 😮‍💨',
        'Koca sikim {yer} ağır ağır kayıyor, başı parlıyor 😏', 'Kalın sikim {yer} sığmıyor, başı dışarı fırlıyor 😳', 'Kocaman sikimin ucu {yer} ıslandı, ön sıvı ip gibi akıyor… ahh 😩',
        'İri sikim {yer} demir gibi, her zonklaması seni sarsıyor 🥵', 'Koca sikim {yer} kayarken taşaklarım kasılıyor, döl gürül gürül kıpırdadı offf 😈', 'Kalın sikim {yer} seğiriyor, döl uca hücum etmeye hazır 😮‍💨', 'Kocaman sikim {yer} sürtündükçe daha da büyüyor 😏'],
      huge: ['Devasa sikim {yer} taşıp göbeğine kadar uzanıyor, ucundan ön sıvı akıyor… ahh 😩', 'Dev sikim {yer} zonkluyor, damarları seni titretiyor 🥵', 'Canavar sikim {yer} sürtündükçe taşaklarım patlayacak gibi offf 😮‍💨',
        'Devasa sikim {yer} ağır ağır kayıyor, ağırlığını hissediyorsun 😏', 'Dev sikim {yer} hiç sığmıyor, yarısından fazlası dışarıda 😳', 'Devasa sikimin ucu {yer} sırılsıklam, ön sıvı sel gibi… ahh 😩',
        'Canavar sikim {yer} taş kesildi, her zonklaması bedenini sarsıyor 🥵', 'Dev sikim {yer} kayarken taşaklarım kasılıyor, döl sel gibi kıpırdadı offf 😈', 'Devasa sikim {yer} seğiriyor, döl uca şelale gibi hücum etmeye hazır 😮‍💨', 'Dev sikim {yer} sürtündükçe daha da kabarıyor, korkutucu 😏']
    },
    femdom: {
      label: '👑 Femdom', events: ['Cock Squeeze', 'Cock Crush', 'Ball Squeeze', 'Ball Crush', 'Death Grip', 'Orgasm Denial'],
      spots: { 'Ball Squeeze': ['taşaklarımı', 'dolu taşaklarımı', 'şişmiş taşaklarımı', 'iki taşağımı birden', 'döl dolu taşaklarımı'],
        'Ball Crush': ['taşaklarımı', 'kasılan taşaklarımı', 'şişmiş taşaklarımı', 'iki taşağımı birden', 'ağırlaşmış taşaklarımı'],
        'Death Grip': ['sikimin dibini', 'sikimin kökünü', 'sikimi dibinden', 'sikimin gövdesini', 'zonklayan sikimin dibini'],
        'Cock Squeeze': ['sikimi', 'sikimin başını', 'zonklayan sikimi', 'sikimin gövdesini', 'sertleşmiş sikimi'],
        'Cock Crush': ['sikimi', 'sikimin gövdesini', 'kaskatı sikimi', 'damarlı sikimi', 'sikimin başını'],
        'Orgasm Denial': ['sikimi', 'sikimin ucunu', 'boşalmak üzere olan sikimi', 'sikimin başını', 'seğiren sikimi'],
        default: ['sikimi', 'sikimin başını', 'zonklayan sikimi', 'sikimin gövdesini', 'sertleşmiş sikimi'] },
      small: ['{yer} sıktıkça döl küçük sikimin ucuna kadar geliyor ama çıkamıyor… ahh 😣', 'Avucun {yer} kavradı, minik sikim çırpınıyor offf 🥵', '{yer} ezdikçe küçük sikimin ucundan tek damla ön sıvı kaçıyor 😩',
        'Küçük sikim elinde kaybolmuş, {yer} sıkıyorsun ve döl geri dönüyor 😣', '{yer} sıkınca taşaklarım kasılıyor, minik sikim zonkluyor… ahhh 🥵', 'Minik sikimin ucu kızardı, {yer} bırakmıyorsun offf 😩',
        '{yer} sıkarak döl yolunu kapattın, küçük sikim titriyor 😣', 'Döl minik sikimin ucunda birikti, {yer} sıkıp gülümsüyorsun 🥵', '{yer} sıkıştırdıkça küçük sikim taş kesiliyor… ahh 😩', 'İzin vermiyorsun; {yer} sıkıyorsun, döl uçta bekliyor offf 😣'],
      mid: ['{yer} sıktıkça döl gürül gürül sikimin ucuna geliyor ama çıkamıyor… ahh 😣', 'Avucun {yer} kavradı, sikim avucunda çırpınıyor offf 🥵', '{yer} ezdikçe sikimin ucundan ön sıvı sızıyor 😩',
        'Sikim elinde kaskatı, {yer} sıkıyorsun ve döl geri dönüyor 😣', '{yer} sıkınca taşaklarım kasılıyor, sikim zonkluyor… ahhh 🥵', 'Sikimin ucu mosmor oldu, {yer} bırakmıyorsun offf 😩',
        '{yer} sıkarak döl yolunu kapattın, sikim çeşme gibi patlamak istiyor 😣', 'Döl sikimin ucunda kaynıyor, {yer} sıkıp gözlerime bakıyorsun 🥵', '{yer} sıkıştırdıkça sikim demir kesiliyor… ahh 😩', 'İzin vermiyorsun; {yer} sıkıyorsun, gür döl uçta bekliyor offf 😣'],
      big: ['{yer} sıktıkça döl kocaman sikimin ucuna sel gibi geliyor ama çıkamıyor… ahh 😣', 'İki elin {yer} zar zor kavradı, kalın sikim çırpınıyor offf 🥵', '{yer} ezdikçe iri sikimin ucundan ön sıvı ip gibi akıyor 😩',
        'Koca sikim ellerinde zonkluyor, {yer} sıkıyorsun ve gür döl geri dönüyor 😣', '{yer} sıkınca taşaklarım kaynıyor, kocaman sikim atıyor… ahhh 🥵', 'Kalın sikimin ucu mosmor oldu, {yer} bırakmıyorsun offf 😩',
        '{yer} sıkarak döl yolunu kapattın, iri sikim hortum gibi patlamak istiyor 😣', 'Döl koca sikimin ucunda köpürüyor, {yer} sıkıp gülüyorsun 🥵', '{yer} sıkıştırdıkça kocaman sikim daha da kabarıyor… ahh 😩', 'İzin vermiyorsun; {yer} sıkıyorsun, sel gibi döl uçta bekliyor offf 😣'],
      huge: ['{yer} sıktıkça döl devasa sikimin ucuna şelale gibi geliyor ama çıkamıyor… ahh 😣', 'İki elin bile {yer} kavramaya yetmiyor, dev sikim çırpınıyor offf 🥵', '{yer} ezdikçe canavar sikimin ucundan ön sıvı sel gibi akıyor 😩',
        'Devasa sikim ellerinde atıyor, {yer} sıkıyorsun ve dev döl yükü geri dönüyor 😣', '{yer} sıkınca taşaklarım patlayacak gibi, dev sikim bütün bedenimi sarsıyor… ahhh 🥵', 'Devasa sikimin ucu mosmor kabardı, {yer} bırakmıyorsun offf 😩',
        '{yer} sıkarak döl yolunu kapattın, dev sikim yangın hortumu gibi patlamak istiyor 😣', 'Döl devasa sikimin ucunda göl oldu, {yer} sıkıp kahkaha atıyorsun 🥵', '{yer} sıkıştırdıkça canavar sikim korkutucu derecede kabarıyor… ahh 😩', 'İzin vermiyorsun; {yer} sıkıyorsun, şelale gibi döl uçta bekliyor offf 😣']
    },
    precum: {
      label: '💧 Ön sıvı', ph: 'miktar', events: ['Low-volume Pre-cumming', 'Normal Pre-cumming', 'High-volume Pre-cumming'],
      spots: { 'Low-volume Pre-cumming': ['bir damla', 'incecik bir'], 'Normal Pre-cumming': ['parlak', 'ip gibi uzayan'], 'High-volume Pre-cumming': ['bol', 'durmadan sızan'], default: ['ılık'] },
      small: ['Küçük sikimin ucunda {miktar} ön sıvı parlıyor… ahh 😩', 'Minik sikimin ucundan {miktar} ön sıvı damlıyor, taşaklarım ısınıyor 🥵', '{miktar} ön sıvı küçük sikimin ucunda boncuk gibi birikti 💧',
        'Minik sikim seğirdikçe ucundan {miktar} ön sıvı sızıyor offf 😮‍💨', 'Küçük sikimin ucunu parmağınla silince {miktar} ön sıvı ip gibi uzuyor 😏', 'Taşaklarım kıpırdadı, minik sikimin ucu {miktar} ön sıvıyla ıslandı 💧',
        'Küçük sikimin ucunda {miktar} ön sıvı titriyor, düşmek üzere… ahh 🥵', 'Minik sikimin ucundaki {miktar} ön sıvı tenine değip parlıyor 😩', '{miktar} ön sıvı küçük sikimin ucundan yavaşça süzülüyor offf 💧', 'Daha boşalmadım ama minik sikimin ucu {miktar} ön sıvıyla sırılsıklam 😈'],
      mid: ['Sikimin ucunda {miktar} ön sıvı birikti, ip gibi uzayıp damlıyor… ahh 😩', 'Sertleşmiş sikimin ucundan {miktar} ön sıvı sızıyor, taşaklarım kaynamaya başladı 🥵', '{miktar} ön sıvı sikimin ucunda boncuk boncuk 💧',
        'Sikim zonkladıkça ucundan {miktar} ön sıvı fışkırıyor offf 😮‍💨', 'Sikimin ucunu parmağınla sildin, {miktar} ön sıvı aranızda ip gibi uzadı 😏', 'Taşaklarım kasılmaya başladı, sikimin ucu {miktar} ön sıvıyla parlıyor 💧',
        'Sikimin ucundan {miktar} ön sıvı damla damla tenine düşüyor… ahh 🥵', 'Sikimin başı {miktar} ön sıvıyla kaplandı, kayganlaştı 😩', '{miktar} ön sıvı sikimin ucundan gövdesine süzülüyor offf 💧', 'Daha boşalmadım ama sikimin ucundan {miktar} ön sıvı akıyor, döl yolda 😈'],
      big: ['Kocaman sikimin ucunda {miktar} ön sıvı birikti, kalın bir ip gibi uzayıp damlıyor… ahh 😩', 'Kalın sikimin ucundan {miktar} ön sıvı sızıyor, taşaklarım kaynıyor 🥵', '{miktar} ön sıvı iri sikimin başını tamamen kapladı 💧',
        'Koca sikim zonkladıkça ucundan {miktar} ön sıvı fışkırıyor offf 😮‍💨', 'Kocaman sikimin ucunu parmağınla sildin, {miktar} ön sıvı bileğine kadar ip gibi uzadı 😏', 'Taşaklarım kasılıyor, kalın sikimin ucu {miktar} ön sıvıyla damlıyor 💧',
        'İri sikimin ucundan {miktar} ön sıvı dere gibi tenine akıyor… ahh 🥵', 'Koca sikimin başı {miktar} ön sıvıyla sırılsıklam, damarlarından süzülüyor 😩', '{miktar} ön sıvı kalın sikimin ucundan taşaklarıma kadar akıyor offf 💧', 'Daha boşalmadım ama kocaman sikimden {miktar} ön sıvı akıyor, sel yolda 😈'],
      huge: ['Devasa sikimin ucunda {miktar} ön sıvı göl oldu, kalın ipler halinde sarkıyor… ahh 😩', 'Dev sikimin ucundan {miktar} ön sıvı sızıntı gibi akıyor, taşaklarım patlayacak gibi 🥵', '{miktar} ön sıvı canavar sikimin başından gövdesine yayıldı 💧',
        'Devasa sikim zonkladıkça ucundan {miktar} ön sıvı fışkırıyor, sanki boşalıyorum offf 😮‍💨', 'Dev sikimin ucunu avucunla sildin, {miktar} ön sıvı avucunu doldurdu 😏', 'Taşaklarım kasılıyor, devasa sikimin ucundan {miktar} ön sıvı damlamıyor, akıyor 💧',
        'Canavar sikimin ucundan {miktar} ön sıvı çarşafa ıslak bir iz bırakıyor… ahh 🥵', 'Dev sikimin başı {miktar} ön sıvıyla parlıyor, her damarından süzülüyor 😩', '{miktar} ön sıvı devasa sikimin ucundan taşaklarıma, oradan bacaklarıma akıyor offf 💧', 'Daha boşalmadım ama dev sikimden {miktar} ön sıvı sel gibi geliyor, şelale yolda 😈']
    },
    tempo: {
      label: '🎚️ Tempo', ph: 'tempo', events: ['Gentle', 'Passionate', 'Assertive', 'Rough', 'Brutal'],
      spots: { 'Gentle': ['yavaş ve nazik', 'usul usul', 'şefkatle', 'ağır ağır, öperek', 'tüy gibi hafif'],
        'Passionate': ['tutkuyla', 'aşkla, derin derin', 'gözlerine bakarak', 'arzuyla, nefes nefese', 'kalbim çarparak'],
        'Assertive': ['kararlı ve sert', 'kendinden emin', 'kontrolü elime alarak', 'belinden sıkıca tutup', 'hiç tereddüt etmeden'],
        'Rough': ['hoyratça', 'sert ve hızlı', 'saçlarını çekerek', 'şaplak atarak', 'yatağı sarsarak'],
        'Brutal': ['acımasızca', 'hiç durmadan, vahşice', 'çığlığına aldırmadan', 'bütün gücümle', 'bir hayvan gibi'],
        default: ['ritimle', 'tempomu bozmadan', 'durmadan', 'derin derin', 'kendi hızımda'] },
      small: ['Küçük sikimi {tempo} gidip getiriyorum, eksiğini hızla telafi ediyorum… ahh 😏', 'Minik sikim {tempo} içinde kayıyor, her vuruşu en hassas yerine denk getiriyorum 🥵', '{tempo} vurdukça küçük sikim kaybolup çıkıyor, sen hızımı seviyorsun offf 😩',
        'Küçük sikimi {tempo} sürerken taşaklarım kalçana şaklıyor 😈', 'Boyutunu hızımla kapatıyorum; minik sikim {tempo} içinde gidip geliyor… ahhh 🔥', '{tempo} her vuruşta küçük sikimin ucu girişini oynatıyor 😮‍💨',
        'Minik sikimi {tempo} itiyorum, bacakların belime dolanıyor 🥵', 'Küçük sikim {tempo} içinde zonkluyor, döl yavaş yavaş uca yürüyor offf 😩', '{tempo} giderken küçük sikimin her santimini sımsıkı kavrıyorsun 😏', 'Küçük ama durmak bilmiyor; {tempo} sürüyorum… ahh 🔥'],
      mid: ['Sikimi {tempo} gidip getiriyorum, her vuruş tam yerine oturuyor… ahh 😏', 'Sertleşmiş sikim {tempo} içinde kayıyor, damarları içini okşuyor 🥵', '{tempo} vurdukça sikim en dibine çarpıyor offf 😩',
        'Sikimi {tempo} sürerken taşaklarım kalçana şaklıyor 😈', 'Sikim {tempo} içinde gidip geldikçe inlemen yükseliyor… ahhh 🔥', '{tempo} her vuruşta sikimin ucu en hassas noktana sürtünüyor 😮‍💨',
        'Sikimi {tempo} itiyorum, tırnakların sırtıma geçiyor 🥵', 'Sikim {tempo} içinde zonkluyor, döl gürül gürül uca yürüyor offf 😩', '{tempo} giderken sikimin her santimini sımsıkı sarıyorsun 😏', 'Ritmimi bozmadan sikimi {tempo} sürüyorum… ahh 🔥'],
      big: ['Kocaman sikimi {tempo} içine gömüyorum; acıtıyor ama durma diyorsun… ahh 😩', 'Kalın sikim {tempo} içinde gidip geldikçe seni sonuna kadar açıyor 🥵', '{tempo} vurdukça iri sikim karnına kadar dayanıyor offf 😵‍💫',
        'Koca sikimi {tempo} sürerken taşaklarım kalçana şak şak çarpıyor 😈', 'Kocaman sikim {tempo} her girişte seni gerdiriyor, çığlığın odayı dolduruyor… ahhh 🔥', '{tempo} her vuruşta kalın sikimin başı en derinini zorluyor 😮‍💨',
        'İri sikimi {tempo} itiyorum; "yavaş" diyorsun ama bırakmıyorsun 🥵', 'Kocaman sikim {tempo} içinde zonkluyor, döl sel gibi uca hücum etmeye hazır offf 😩', '{tempo} giderken koca sikimin boşluğunu her çekişte özlüyorsun 😏', 'Kalın sikimi {tempo} sürüyorum, bacakların titremekten duramıyor… ahh 🔥'],
      huge: ['Devasa sikimi {tempo} içine gömüyorum; ikiye ayrılıyorsun ama durma diye yalvarıyorsun… ahh 😩', 'Dev sikim {tempo} içinde gidip geldikçe karnındaki şişkinlik inip kalkıyor 🥵', '{tempo} vurdukça canavar sikim seni sınırına kadar zorluyor offf 😵‍💫',
        'Devasa sikimi {tempo} sürerken bütün yatak sarsılıyor 😈', 'Dev sikim {tempo} her girişte gözlerini kaydırıyor, sesin kısıldı… ahhh 🔥', '{tempo} her vuruşta canavar sikimin başı rahim ağzına dayanıyor 😮‍💨',
        'Devasa sikimi {tempo} itiyorum; acıdan ve zevkten ağlıyorsun ama bacakların beni çekiyor 🥵', 'Dev sikim {tempo} içinde zonkluyor, döl şelale gibi uca hücum etmeye hazır offf 😩', '{tempo} giderken devasa sikimin yarısında bile nefesin kesiliyor 😏', 'Canavar sikimi {tempo} sürüyorum, bedenin kontrolsüzce titriyor… ahh 🔥']
    },
    slime: {
      label: '🫠 Slime', events: ['Slime Growth', 'Absorption', 'Slime Coat'],
      small: ['Jöle bedenin küçük sikimi tamamen yuttu, döl içinde süzülüp kayboluyor… ahh 🫠💦', 'Minik sikimin dölü yarı saydam teninde parlıyor, hafifçe büyüdüğünü görüyorum 😳', 'Slime bedenin küçük sikimi emiyor, taşaklarımdaki her damlayı içine çekiyor offf 🥵',
        'Dölüm jölenin içinde beyaz bir bulut gibi dağılıyor 🫠', 'Küçük sikimi saran jöle titreşiyor, döl ucundan içine akıyor… ahhh 💦', 'Yarı saydam karnında minik sikimin dölünü izliyorum 😮‍💨',
        'Slime teninin üstüne damlayan döl yavaşça içine emiliyor 🫠', 'Küçük sikimden gelen dölle jölen biraz daha parladı offf 😳', 'Jöle bedenin minik sikimi sıvazlıyor, döl uca hücum ediyor 🥵', 'Dölümü emdikçe slime bedenin tatlı tatlı şişiyor… ahh 💦'],
      mid: ['Jöle bedenin sikimi tamamen yuttu, döl içinde gürül gürül süzülüp dağılıyor… ahh 🫠💦', 'Sikimin dölü yarı saydam teninde çeşme gibi fışkırıyor, büyüdüğünü görüyorum 😳', 'Slime bedenin sikimi sağıyor, taşaklarımdaki dölü içine çekiyor offf 🥵',
        'Dölüm jölenin içinde koca bir beyaz bulut oldu 🫠', 'Sikimi saran jöle titreşiyor, döl ucundan gür gür içine akıyor… ahhh 💦', 'Yarı saydam karnında sikimin dölünün yayılışını izliyorum 😮‍💨',
        'Slime teninin üstüne fışkıran döl hızla içine emiliyor 🫠', 'Sikimden gelen dölle jölen gözle görülür büyüdü offf 😳', 'Jöle bedenin sikimi vakumlar gibi çekiyor, döl uca hücum ediyor 🥵', 'Dölümü emdikçe slime bedenin dolgunlaşıp parlıyor… ahh 💦'],
      big: ['Jöle bedenin kocaman sikimi zar zor yuttu, döl içinde sel gibi süzülüyor… ahh 🫠💦', 'Kalın sikimin dölü yarı saydam teninde hortum gibi fışkırıyor, kabardığını görüyorum 😳', 'Slime bedenin koca sikimi sağıyor, taşaklarımdaki bol dölü içine çekiyor offf 🥵',
        'Dölüm jölenin içinde dev bir beyaz bulut oldu, her yanına yayıldı 🫠', 'Kocaman sikimi saran jöle gerildi, döl ucundan çeşme gibi içine akıyor… ahhh 💦', 'Yarı saydam karnında kalın sikimin şeklini ve dölünü izliyorum 😮‍💨',
        'Slime teninin üstüne fışkıran bol döl dalga dalga içine emiliyor 🫠', 'Koca sikimden gelen dölle jölen bir beden büyüdü offf 😳', 'Jöle bedenin iri sikimi vakumlar gibi çekiyor, döl sel gibi uca hücum ediyor 🥵', 'Dölümü emdikçe slime bedenin şişip ağırlaşıyor… ahh 💦'],
      huge: ['Jöle bedenin devasa sikimi yutmak için esnedi, döl içinde şelale gibi süzülüyor… ahh 🫠💦', 'Dev sikimin dölü yarı saydam teninde yangın hortumu gibi fışkırıyor, kocaman büyüdüğünü görüyorum 😳', 'Slime bedenin canavar sikimi sağıyor, taşaklarımdaki sel gibi dölü içine çekiyor offf 🥵',
        'Dölüm jölenin içini tamamen beyaza boyadı 🫠', 'Devasa sikimi saran jöle incelip gerildi, döl ucundan şelale gibi içine akıyor… ahhh 💦', 'Yarı saydam bedeninde dev sikimin şekli ve dölü apaçık görünüyor 😮‍💨',
        'Slime teninin üstüne fışkıran sel gibi döl içine emildikçe dalgalanıyorsun 🫠', 'Dev sikimden gelen dölle jölen iki kat büyüdü, odayı dolduruyorsun offf 😳', 'Jöle bedenin devasa sikimi vakumlar gibi çekiyor, döl şelale gibi uca hücum ediyor 🥵', 'Dölümü emdikçe slime bedenin dev bir dalga gibi kabarıyor… ahh 💦']
    },
    vampire: {
      label: '🧛 Vampir', events: ['Vampire Kiss Finish'],
      small: ['Soğuk dudakların boynumda, küçük sikimden döl içine ılık ılık akıyor… ahh 🧛💦', 'Minik sikimin dölü buz gibi teninde sıcacık kalıyor 🩸', 'Dişlerin boynuma geçerken taşaklarım kasılıyor, küçük sikim boşalıyor offf 😩',
        'Kanımı içtikçe dölüm minik sikimden damla damla akıyor 🧛', 'Soğuk bedenin küçük sikimi sımsıkı sarıyor, döl uca hücum ediyor… ahhh 💦', 'Vampir öpücüğünle minik sikim seğiriyor 🩸',
        'Küçük sikimden gelen döl ölümsüz bedenini ısıtıyor 😮‍💨', 'Boynumdan içerken minik sikimin son damlasını da alıyorsun 🧛', 'Dişlerin derinleştikçe küçük sikimin ucunda döl patlıyor offf 💦', 'Soğuk tenine yayılan dölüm sana hayat veriyor gibi… ahh 🩸'],
      mid: ['Soğuk dudakların boynumda, sikimden döl gürül gürül içine akıyor… ahh 🧛💦', 'Sikimin dölü buz gibi teninde çeşme gibi sıcacık fışkırıyor 🩸', 'Dişlerin boynuma geçerken taşaklarım kasılıyor, sikim bol bol boşalıyor offf 😩',
        'Kanımı içtikçe dölüm sikimden akın akın akıyor 🧛', 'Soğuk bedenin sikimi sımsıkı sarıyor, döl tazyikle uca hücum ediyor… ahhh 💦', 'Vampir öpücüğünle sikim zonkluyor, her yudumda bir dalga döl 🩸',
        'Sikimden gelen gür döl ölümsüz bedenini ısıtıyor 😮‍💨', 'Boynumdan içerken sikimin son damlasına kadar sağıyorsun 🧛', 'Dişlerin derinleştikçe sikimin ucunda döl çeşme gibi patlıyor offf 💦', 'Soğuk tenine yayılan dölüm yanaklarına renk getirdi… ahh 🩸'],
      big: ['Soğuk dudakların boynumda, kocaman sikimden döl sel gibi içine akıyor… ahh 🧛💦', 'Kalın sikimin dölü buz gibi teninde hortum gibi sıcacık fışkırıyor 🩸', 'Dişlerin boynuma geçerken taşaklarım kaynıyor, koca sikim gürül gürül boşalıyor offf 😩',
        'Kanımı içtikçe dölüm iri sikimden çeşme gibi akıyor 🧛', 'Soğuk bedenin kocaman sikimi zorla sarıyor, döl sel gibi uca hücum ediyor… ahhh 💦', 'Vampir öpücüğünle kalın sikim atıyor, her yudumda koca bir dalga döl 🩸',
        'Koca sikimden gelen bol döl ölümsüz bedenini kaynatıyor 😮‍💨', 'Boynumdan içerken kocaman sikimi son damlasına kadar sağıyorsun 🧛', 'Dişlerin derinleştikçe iri sikimin ucunda döl hortum gibi patlıyor offf 💦', 'Soğuk tenine taşan dölüm seni yeniden canlandırıyor… ahh 🩸'],
      huge: ['Soğuk dudakların boynumda, devasa sikimden döl şelale gibi içine akıyor… ahh 🧛💦', 'Dev sikimin dölü buz gibi teninde yangın hortumu gibi sıcacık fışkırıyor 🩸', 'Dişlerin boynuma geçerken taşaklarım patlayacak gibi, canavar sikim sel gibi boşalıyor offf 😩',
        'Kanımı içtikçe dölüm devasa sikimden bitmek bilmeden akıyor 🧛', 'Soğuk bedenin dev sikimi zar zor sarıyor, döl şelale gibi uca hücum ediyor… ahhh 💦', 'Vampir öpücüğünle devasa sikim bütün bedenimi sarsıyor, her yudumda dev bir dalga döl 🩸',
        'Dev sikimden gelen sel gibi döl ölümsüz bedenini taşırıyor 😮‍💨', 'Boynumdan içerken devasa sikimi son damlasına kadar sağıyorsun, hâlâ bitmedi 🧛', 'Dişlerin derinleştikçe canavar sikimin ucunda döl yangın hortumu gibi patlıyor offf 💦', 'Soğuk tenine taşan dölüm tabuta kadar aktı… ahh 🩸']
    },
    klinik: {
      label: '🩺 Klinik', events: ['Prostate Exam', 'Milking Therapy', 'Semen Sample'],
      spots: { 'Semen Sample': ['numune kabına', 'steril kaba'], 'Milking Therapy': ['doktorun avucuna', 'sağım kabına'], 'Prostate Exam': ['muayene örtüsüne', 'doktorun eldivenli avucuna'], default: ['kaba'] },
      small: ['Doktor küçük sikimi iki parmağıyla tutup ölçüyor, ucuna gelen dölü {yer} sağıyor… ahh 😳💦', 'Prostatıma bastırdıkça minik sikimin ucundan döl damla damla {yer} akıyor 😩', 'Küçük sikimden gelen döl {yer} ancak dibini kaplıyor, doktor not alıyor 📋',
        'Eldivenli parmaklar minik sikimi okşadıkça taşaklarım kasılıyor, döl {yer} süzülüyor offf 🥵', 'Doktor "küçük ama verimli" diyor, döl ucundan {yer} fışkırıyor 😳', 'Minik sikimin ucu kızardı, taşaklarımdaki döl {yer} damlıyor… ahh 💦',
        'Doktor küçük sikimi sıvazlayıp son damlayı da {yer} alıyor 😩', 'Prostatıma her dokunuşta küçük sikim seğiriyor, döl {yer} akıyor 🥵', 'Minik sikimden gelen döl {yer} birikiyor, doktor gülümseyip ölçüyor 📋', 'Taşaklarım boşaldıkça küçük sikimin ucundan {yer} ılık ılık döl doluyor offf 💦'],
      mid: ['Doktor sikimi avucuna alıp ölçüyor, ucuna gürül gürül gelen dölü {yer} sağıyor… ahh 😳💦', 'Prostatıma bastırdıkça sikimin ucundan döl çeşme gibi {yer} fışkırıyor 😩', 'Sikimden gelen döl {yer} yarıya kadar doldurdu, doktor not alıyor 📋',
        'Eldivenli eller sikimi sağdıkça taşaklarım kasılıyor, döl gür gür {yer} akıyor offf 🥵', 'Doktor "tam normal değerler" diyor, döl ucundan {yer} tazyikle fışkırıyor 😳', 'Sikimin ucu şişti, taşaklarımdaki döl {yer} pompalanıyor… ahh 💦',
        'Doktor sikimi sıvazlayıp son damlasına kadar {yer} sağıyor 😩', 'Prostatıma her dokunuşta sikim zonkluyor, döl {yer} akın akın akıyor 🥵', 'Sikimden gelen döl {yer} doluyor, doktor kabı ışığa tutuyor 📋', 'Taşaklarım boşaldıkça sikimin ucundan {yer} bol bol döl doluyor offf 💦'],
      big: ['Doktor kocaman sikimi iki eliyle zar zor tutup ölçüyor, ucuna sel gibi gelen dölü {yer} sağıyor… ahh 😳💦', 'Prostatıma bastırdıkça kalın sikimin ucundan döl hortum gibi {yer} fışkırıyor 😩', 'Koca sikimden gelen döl {yer} ağzına kadar doldurdu, doktor şaşkınlıkla not alıyor 📋',
        'Eldivenli eller iri sikimi sağdıkça taşaklarım kaynıyor, döl gürül gürül {yer} akıyor offf 🥵', 'Doktor "bu ölçüler çok üstünde" diyor, döl ucundan {yer} çeşme gibi fışkırıyor 😳', 'Kalın sikimin ucu kabardı, taşaklarımdaki döl {yer} taşıyor… ahh 💦',
        'Doktor kocaman sikimi sıvazlayıp ikinci kaba geçmek zorunda kalıyor 😩', 'Prostatıma her dokunuşta koca sikim atıyor, döl {yer} sel gibi akıyor 🥵', 'İri sikimden gelen döl {yer} taştı, doktorun önlüğüne sıçradı 📋', 'Taşaklarım boşaldıkça kalın sikimin ucundan {yer} çeşme gibi döl doluyor offf 💦'],
      huge: ['Doktor devasa sikimi ölçmeye mezura yetmiyor, ucuna şelale gibi gelen dölü {yer} sağıyor… ahh 😳💦', 'Prostatıma bastırdıkça dev sikimin ucundan döl yangın hortumu gibi {yer} fışkırıyor 😩', 'Canavar sikimden gelen döl {yer} bir anda taşırdı, doktor yeni kap arıyor 📋',
        'Eldivenli eller devasa sikimi sağdıkça taşaklarım patlayacak gibi, döl sel gibi {yer} akıyor offf 🥵', 'Doktor "tıbbi literatürde böylesi yok" diyor, döl ucundan {yer} şelale gibi fışkırıyor 😳', 'Dev sikimin ucu kocaman kabardı, döl {yer} taşıp yere akıyor… ahh 💦',
        'Doktor devasa sikimi iki eliyle sıvazlıyor, üç kap doldu hâlâ geliyor 😩', 'Prostatıma her dokunuşta canavar sikim bütün bedenimi sarsıyor, döl {yer} sel gibi akıyor 🥵', 'Dev sikimden gelen döl {yer} taştı, doktorun yüzüne ve önlüğüne sıçradı 📋', 'Taşaklarım boşaldıkça devasa sikimin ucundan {yer} şelale gibi döl doluyor, muayene odası göl oldu offf 💦']
    }
  },
  protOf: { 'Condom': 'condom', 'Tight Condom': 'tight', 'Nothing': 'raw', 'Control Pill': 'raw', 'Morning-After Pill': 'raw', 'Pull-Out Method': 'pullout' },
  prot: {
    condom: {
      small: ['Kondom küçük sikime bol geldi, ucunda koca bir boşluk; döl oraya dolacak 😏', 'Lastiği minik sikime geçirdim, ucunda döl için yer var 😌', 'Kondom küçük sikimi sardı, taşaklarım şimdiden dolu 🥵',
        'Minik sikimin ucuna bıraktığım boşluk birazdan sıcak dölle dolacak 😈', 'Kondomlu küçük sikim seğiriyor, ucunda damla damla ön sıvı birikiyor 😩', 'Lastik küçük sikimde kayıyor ama taşaklarımdaki dölü tutmaya yeter 😏',
        'Kondomun ucu boş boş sallanıyor, döl gelince şişecek 🥵', 'Küçük sikimi lastikle sardım, taşaklarım uca döl pompalamaya hazır 😈', 'Kondom bol ama sorun değil, döl ucuna gürül gürül dolacak 😏', 'Minik sikim lastiğin içinde zonkluyor, haznesi birazdan dolacak 😩'],
      mid: ['Kondomu sikime geçirdim, tam oturdu; ucundaki hazne birazdan dölle dolacak 😏', 'Lastik sertleşmiş sikimi sardı, taşaklarım dolu dolu 🥵', 'Kondomun ucunu sıkıp havasını aldım, döl için yer açtım 😌',
        'Sikimin ucundaki boşluk birazdan gür gür dolacak 😈', 'Kondomlu sikim seğiriyor, ucunda ön sıvı birikmeye başladı 😩', 'Lastik tam kıvamında oturdu, taşaklarımdaki döl uca hazır 😏',
        'Kondomun haznesi çeşme gibi dolacak, söz 🥵', 'Sikimi lastikle sardım, taşaklarım uca döl pompalamak için sabırsız 😈', 'Kondom gergin, sikimin her damarı içinden belli oluyor 😏', 'Sikim lastiğin içinde zonkluyor, hazne şimdiden ısınıyor 😩'],
      big: ['Kondom kocaman sikime zor indi, gerildi; ucundaki hazne bu dölü almaz gibi 😳', 'Lastik kalın sikimi sımsıkı sardı, taşaklarım dolup taşıyor 🥵', 'Kondomun ucunu sıktım ama koca sikimin dölü için yetmeyecek 😏',
        'İri sikimin ucundaki boşluk birazdan sel gibi dolacak 😈', 'Kondomlu kocaman sikim seğiriyor, ucunda ön sıvı birikiyor 😩', 'Lastik koca sikimin yarısına kadar indi, damarları içinden fışkırıyor 😳',
        'Kondomun haznesi döl gelince balon gibi şişecek 🥵', 'Kalın sikimi lastikle sardım, taşaklarım uca gürül gürül döl pompalamaya hazır 😈', 'Kondom gergin, iri sikimin her damarı belli oluyor 😏', 'Kocaman sikim lastiğin içinde zonkluyor, hazne patlayacak gibi 😩'],
      huge: ['Kondom devasa sikimin sadece başını kapladı, gerilip inceldi; bu dölü almaz 😳', 'Lastik dev sikimde jartiyer gibi duruyor, taşaklarım dolup taşıyor 🥵', 'Kondomun ucunu sıktım ama canavar sikimin dölü için yer yok 😏',
        'Devasa sikimin ucundaki hazne birazdan şelale gibi dolup taşacak 😈', 'Kondomlu dev sikim seğiriyor, ucunda ön sıvı birikip lastiği zorluyor 😩', 'Lastik dev sikimin üçte birine indi, yırtılacak gibi gerildi 😳',
        'Kondomun haznesi döl gelince patlayacak, biliyorum 🥵', 'Canavar sikimi lastikle sardım, taşaklarım uca sel gibi döl pompalamaya hazır 😈', 'Kondom saydamlaştı, devasa sikimin her damarı içinden fışkırıyor 😏', 'Dev sikim lastiğin içinde zonkluyor, hazne şimdiden gerildi 😩']
    },
    tight: {
      small: ['Dar kondom küçük sikime tam oturdu, sımsıkı sarıyor 😏', 'Dar lastik minik sikimi kavradı, her zonklamamı hissediyorum 😩', 'Küçük sikime dar kondom bile rahat indi, ucunda döl için yer var 😌',
        'Dar lastik minik sikimi sıktıkça taşaklarım daha çok doluyor 🥵', 'Dar kondomlu küçük sikim seğiriyor, ucunda ön sıvı birikti 😈', 'Lastik küçük sikime yapıştı, döl ucuna gelince sımsıkı tutacak 😏',
        'Dar kondom minik sikimi kızarttı, taşaklarım kaynıyor 🥵', 'Küçük sikim dar lastikte zonkluyor, döl uca koşmaya hazır 😩', 'Dar lastik ikinci bir ten gibi, küçük sikimin her santimini sarıyor 😌', 'Dar kondomun ucu birazdan sıcak dölle şişecek 😈'],
      mid: ['Dar kondom sikime zor indi, sımsıkı sarıyor offf 😣', 'Dar lastik sertleşmiş sikimi boğuyor, her zonklamam iki kat 😩', 'Dar kondom sikimin damarlarını ezdi, taşaklarım dolup taşıyor 🥵',
        'Lastik sıktıkça döl ucuna daha da hücum ediyor 😈', 'Dar kondomlu sikim seğiriyor, ucundaki hazne gerildi 😩', 'Dar lastik sikimi kavradı, döl gelince gür gür hazneyi şişirecek 😏',
        'Dar kondom sikimi kızarttı, ucunda baskı birikiyor 🥵', 'Sikim dar lastikte zonkluyor, taşaklarım uca çeşme gibi döl pompalamaya hazır 😩', 'Dar lastik yüzünden sikim taş gibi, her damarı belli 😣', 'Dar kondomun ucu birazdan dolup taşacak 😈'],
      big: ['Dar kondom kocaman sikime yarıya kadar zar zor indi, boğuyor offf 😣', 'Dar lastik kalın sikimi sıkıştırdı, damarlar patlayacak gibi 😩', 'Dar kondom koca sikimi mosmor yaptı, taşaklarım kaynıyor 🥵',
        'Lastik sıktıkça döl iri sikimin ucuna sel gibi hücum ediyor 😈', 'Dar kondomlu kocaman sikim seğiriyor, hazne şimdiden gerildi 😩', 'Dar lastik kalın sikimde inceldi, yırtılacak gibi 😳',
        'Dar kondom iri sikimi kızarttı, ucunda dev bir baskı var 🥵', 'Koca sikim dar lastikte zonkluyor, taşaklarım uca hortum gibi döl pompalamaya hazır 😩', 'Dar lastik yüzünden kocaman sikim daha da kabardı 😣', 'Dar kondomun haznesi koca sikimin dölüne yetmeyecek 😈'],
      huge: ['Dar kondom devasa sikimin sadece başına geçti, kopacak gibi offf 😣', 'Dar lastik dev sikimin başını boğuyor, zonklamam lastiği titretiyor 😩', 'Dar kondom canavar sikimi mosmor yaptı, taşaklarım patlayacak gibi 🥵',
        'Lastik sıktıkça döl dev sikimin ucuna şelale gibi hücum ediyor 😈', 'Dar kondomlu devasa sikim seğiriyor, hazne şimdiden yırtılacak gibi 😩', 'Dar lastik dev sikimde saydamlaştı, her an patlayabilir 😳',
        'Dar kondom devasa sikimi kızarttı, ucunda korkunç bir baskı var 🥵', 'Canavar sikim dar lastikte zonkluyor, taşaklarım uca sel gibi döl pompalamaya hazır 😩', 'Dar lastik yüzünden dev sikim daha da büyüdü 😣', 'Dar kondomun haznesi devasa sikimin dölüyle patlayacak 😈']
    },
    raw: {
      small: ['Aramızda hiçbir şey yok, küçük sikim çıplak tenine değiyor 😈', 'Kondomsuz minik sikimin ucunda ön sıvı parlıyor 😏', 'Taşaklarım dolu, küçük sikim çıplak; döl doğrudan içine akacak 🥵',
        'Minik sikimin çıplak ucu sıcaklığını hissediyor 😩', 'Kondomsuz küçük sikim seğiriyor, döl ucuna hücum etmeye hazır 😈', 'Lastik yok, küçük sikimden gelen her damla senin olacak 😏',
        'Çıplak minik sikim ıslaklığına değdikçe taşaklarım kasılıyor 🥵', 'Küçük sikim kondomsuz, ucundaki döl sana ılık ılık akacak 😩', 'Arada hiçbir şey yok, minik sikimin her zonklamasını hissedeceksin 😈', 'Kondomsuz küçük sikimin ucu döl doluyor 😏'],
      mid: ['Aramızda hiçbir şey yok, sikim çıplak tenine değiyor 😈', 'Kondomsuz sikimin ucunda ön sıvı damlıyor 😏', 'Taşaklarım dolu, sikim çıplak; döl gürül gürül doğrudan içine akacak 🥵',
        'Sikimin çıplak ucu ıslak sıcaklığını hissediyor, offf 😩', 'Kondomsuz sikim seğiriyor, döl ucuna hücum etmeye hazır 😈', 'Lastik yok, sikimden çeşme gibi gelen her damla senin olacak 😏',
        'Çıplak sikim ıslaklığına sürtündükçe taşaklarım kasılıyor 🥵', 'Sikim kondomsuz, ucundaki gür döl içine fışkıracak 😩', 'Arada hiçbir şey yok, sikimin her damarını tenimde hissedeceksin 😈', 'Kondomsuz sikimin ucu dölle dolup taşmak üzere 😏'],
      big: ['Aramızda hiçbir şey yok, kocaman sikim çıplak tenine dayandı 😈', 'Kondomsuz kalın sikimin ucundan ön sıvı süzülüyor 😏', 'Taşaklarım kaynıyor, koca sikim çıplak; döl sel gibi doğrudan içine akacak 🥵',
        'İri sikimin çıplak ucu ıslak sıcaklığına gömülmeye hazır, offf 😩', 'Kondomsuz kocaman sikim seğiriyor, döl ucuna gürül gürül hücum etmeye hazır 😈', 'Lastik yok, kalın sikimden hortum gibi gelen her damla senin olacak 😏',
        'Çıplak koca sikim ıslaklığına sürtündükçe taşaklarım kasılıyor 🥵', 'Kocaman sikim kondomsuz, ucundaki bol döl içini dolduracak 😩', 'Arada hiçbir şey yok, iri sikimin her damarı içinde atacak 😈', 'Kondomsuz kalın sikimin ucu dölle şişti 😏'],
      huge: ['Aramızda hiçbir şey yok, devasa sikim çıplak tenine dayandı 😈', 'Kondomsuz dev sikimin ucundan ön sıvı ip gibi akıyor 😏', 'Taşaklarım patlayacak gibi, canavar sikim çıplak; döl şelale gibi doğrudan içine akacak 🥵',
        'Devasa sikimin çıplak ucu ıslak girişine dayandı, offf 😩', 'Kondomsuz dev sikim seğiriyor, döl ucuna sel gibi hücum etmeye hazır 😈', 'Lastik yok, canavar sikimden yangın hortumu gibi gelen her damla senin olacak 😏',
        'Çıplak devasa sikim ıslaklığına sürtündükçe taşaklarım kasılıyor 🥵', 'Dev sikim kondomsuz, ucundaki dev döl yükü karnını şişirecek 😩', 'Arada hiçbir şey yok, devasa sikimin her damarı içini zorlayacak 😈', 'Kondomsuz canavar sikimin ucu dölle kocaman şişti 😏']
    },
    pullout: {
      small: ['Son anda küçük sikimi çekeceğim, döl ucundan üstüne fışkıracak 😏', 'Söz, minik sikimin ucuna döl gelince çıkaracağım 🤞', 'Taşaklarım kasılınca küçük sikimi çekip karnına boşaltacağım 😈',
        'Küçük sikimin ucunda döl birikince hemen çıkarım 😌', 'Çektiğim an minik sikimden döl tenine fışkır fışkır akacak 🥵', 'Kenara gelince küçük sikimi çekip göbeğine bitireceğim 😏',
        'Minik sikimi son saniyede çıkarıp dölü kalçana boşaltacağım 😈', 'Taşaklarım hazır, küçük sikimin ucuna döl hücum edince çekiyorum 😩', 'Küçük sikimi çekince döl ucundan ılık ılık üstüne damlayacak 🥵', 'Dikkatli olacağım; minik sikimden gelen döl içine değil üstüne 😌'],
      mid: ['Son anda sikimi çekeceğim, döl ucundan çeşme gibi üstüne fışkıracak 😏', 'Söz, sikimin ucuna döl gürül gürül gelince çıkaracağım 🤞', 'Taşaklarım kasılınca sikimi çekip karnına bol bol boşaltacağım 😈',
        'Sikimin ucunda döl kaynamaya başlayınca hemen çıkarım 😌', 'Çektiğim an sikimden döl tenine gür gür fışkıracak 🥵', 'Kenara gelince sikimi çekip göbeğine çeşme gibi bitireceğim 😏',
        'Sikimi son saniyede çıkarıp dölü kalçana fışkırtacağım 😈', 'Taşaklarım hazır, sikimin ucuna döl hücum edince çekiyorum 😩', 'Sikimi çekince döl ucundan tazyikle göğüslerine kadar sıçrayacak 🥵', 'Dikkatli olacağım; sikimden gelen gür döl içine değil üstüne 😌'],
      big: ['Son anda kocaman sikimi çekeceğim, döl ucundan hortum gibi üstüne fışkıracak 😏', 'Söz, kalın sikimin ucuna döl sel gibi gelince çıkaracağım 🤞', 'Taşaklarım kasılınca koca sikimi çekip karnını dölle kaplayacağım 😈',
        'İri sikimin ucunda döl kaynamaya başlayınca hemen çıkarım, zor olacak 😣', 'Çektiğim an kocaman sikimden döl tenine gürül gürül fışkıracak 🥵', 'Kenara gelince kalın sikimi çekip göbeğinden göğüslerine kadar bitireceğim 😏',
        'Koca sikimi son saniyede çıkarıp dölü kalçana çeşme gibi boşaltacağım 😈', 'Taşaklarım kaynıyor, iri sikimin ucuna döl hücum edince çekiyorum 😩', 'Kocaman sikimi çekince döl ucundan çenene kadar sıçrayacak 🥵', 'Dikkatli olacağım; kalın sikimden gelen sel gibi döl içine değil üstüne 😌'],
      huge: ['Son anda devasa sikimi çekeceğim, döl ucundan yangın hortumu gibi üstüne fışkıracak 😏', 'Söz, dev sikimin ucuna döl şelale gibi gelince çıkaracağım 🤞', 'Taşaklarım kasılınca canavar sikimi çekip bütün bedenini dölle kaplayacağım 😈',
        'Devasa sikimi içinden çekmek bile zaman alıyor, döl ucuna gelmeden başlamalıyım 😣', 'Çektiğim an dev sikimden döl tenine sel gibi fışkıracak 🥵', 'Kenara gelince canavar sikimi çekip göbeğinden yüzüne kadar bitireceğim 😏',
        'Devasa sikimi son saniyede çıkarıp dölü kalçana şelale gibi boşaltacağım 😈', 'Taşaklarım patlayacak gibi, dev sikimin ucuna döl hücum edince çekiyorum 😩', 'Dev sikimi çekince döl ucundan saçlarına kadar sıçrayacak 🥵', 'Dikkatli olacağım; devasa sikimden gelen sel içine değil üstüne, çarşaf da sırılsıklam olacak 😌']
    }
  },
  // tits: göğüs olayları (Titfuck, Tit Cumshot…) · ass: kalça olayları (Buttjob, Hotdogging, Ass Cumshot…) · body: diğerleri
  rubSpots: {
    tits: ['göğüslerinin arasına', 'memelerinin üstüne', 'göğüs çatalına', 'boynuna ve göğüslerine'],
    ass: ['kalçalarının arasına', 'kalçana', 'beline ve kalçana', 'kalça çukuruna'],
    body: ['tenine', 'üstüne', 'karnına', 'bacaklarına']
  },
  rub: {
    small: ['Sürtündükçe taşaklarım kasılıyor, döl küçük sikimin ucuna hücum edip {yer} fışkır fışkır boşalıyor… ahhh 💦', 'Minik sikim tenine sürtünürken seğiriyor, taşaklarımdan gelen döl ucundan {yer} damla damla akıyor 😩💦',
      'Küçük sikimi sana sürtüp bırakıyorum, döl taşaklarımdan ucuna gelip {yer} ılık ılık yayılıyor offf 💦', 'Taşaklarım boşaldıkça minik sikimin ucundan {yer} beyaz bir iz çiziliyor… ahh 🥵',
      'Ufak sikimin ucu sürtünmekten kızardı, döl taşaklarımdan fışkırıp {yer} parlıyor 😮‍💨💦', 'Küçük sikim tenin arasında zonkluyor, taşaklarımdaki döl ucuna koşup {yer} boşalıyor 💦',
      'Her sürtünüşte taşaklarım biraz daha sıkışıyor, sonunda küçük sikimin ucundan {yer} fışkırıyor… ahhh 😩', 'Minik sikim yumuşaklığında kayarken taşaklarım boşalıyor, döl {yer} süzülüyor 🥵💦',
      'Döl taşaklarımdan yükselip küçük sikimin ucunda patlıyor, {yer} sıcacık damlıyor offf 💦', 'Küçük sikim sürtünmeden kaskatı, taşaklarım son damlasına kadar ucundan {yer} boşalıyor… ahh 😮‍💨'],
    mid: ['Sürtündükçe taşaklarım sıkışıyor, döl gürül gürül sikimin ucuna hücum edip çeşme gibi {yer} fışkırıyor… ahhh 💦', 'Sikim tenine sürtünürken zonkluyor, taşaklarımdan kopan döl ucundan {yer} bol bol akıyor 😩💦',
      'Döl taşaklarımdan uca akın akın geliyor, sikimin ucundan {yer} fışkır fışkır boşalıyor offf 💦', 'Sikimin ucu sürtünmekten şişti, taşaklarımdaki döl gürce {yer} pompalanıyor… ahh 🥵',
      'Her sürtünüşte taşaklarımdan bir dalga döl ucuma geliyor, {yer} sıcacık yayılıyor 😮‍💨💦', 'Sikimi aralarına bastırıp bırakıyorum, döl çeşme gibi ucundan {yer} fışkırıyor 💦',
      'Taşaklarım boşalırken döl sikimin ucunda kaynıyor, gür gür {yer} akıyor… ahhh 😩', 'Sertleşmiş sikim yumuşaklığında seğiriyor, döl taşaklarımdan ucuna koşup {yer} göl oluyor 🥵💦',
      'Döl taşaklarımdan kopup sikimin ucundan {yer} tazyikle fışkırıyor, tenin parlıyor offf 💦', 'Sikim sürtünmeden atıyor, taşaklarımdaki bütün döl ucundan bol bol {yer} boşalıyor… ahh 😮‍💨'],
    big: ['Sürtündükçe taşaklarım kaynıyor, döl kocaman sikimin ucuna gürül gürül hücum edip çeşme gibi {yer} fışkırıyor… ahhh 💦', 'Kalın sikim tenine sürtünürken zonkluyor, taşaklarımdan kopan bol döl ucundan {yer} sel gibi akıyor 😩💦',
      'Döl taşaklarımdan kocaman sikimin ucuna sel gibi geliyor, {yer} fışkır fışkır boşalıyor, çenene kadar sıçrıyor offf 💦', 'İri sikimin ucu sürtünmekten kabardı, taşaklarımdaki döl tazyikle {yer} pompalanıyor… ahh 🥵',
      'Her sürtünüşte taşaklarımdan koca bir dalga döl ucuma geliyor, {yer} çeşme gibi boşalıyor 😮‍💨💦', 'Kocaman sikimi aralarına gömüp bırakıyorum, döl gürce ucundan fışkırıp {yer} kaplıyor 💦',
      'Taşaklarım boşaldıkça kalın sikimin ucundan döl hortum gibi {yer} akıyor… ahhh 😩', 'Koca sikim yumuşaklığında seğiriyor, döl taşaklarımdan ucuna hücum edip {yer} taşıyor, aşağı süzülüyor 🥵💦',
      'Döl taşaklarımdan kopup kocaman sikimin ucundan {yer} gürül gürül fışkırıyor, her yerin bembeyaz offf 💦', 'Kalın sikim sürtünmeden atıyor, taşaklarımdaki bütün döl ucundan çeşme gibi {yer} boşalıyor… ahh 😮‍💨'],
    huge: ['Sürtündükçe taşaklarım patlayacak gibi, döl devasa sikimin ucuna sel gibi hücum edip çeşme gibi {yer} fışkırıyor… ahhh 💦', 'Dev sikim tenine sürtünürken zonkluyor, taşaklarımdan kopan döl ucundan {yer} şelale gibi akıyor, saçlarına kadar sıçrıyor 😩💦',
      'Döl taşaklarımdan canavar sikimin ucuna gürül gürül akıyor, {yer} tazyikle fışkırıyor, her yanın sırılsıklam offf 💦', 'Devasa sikimin ucu sürtünmekten kabardı, taşaklarımdaki döl hortum gibi {yer} pompalanıyor, taşıp yere damlıyor… ahh 🥵',
      'Her sürtünüşte taşaklarımdan dev bir dalga döl ucuma geliyor, {yer} şelale gibi boşalıyor 😮‍💨💦', 'Dev sikimi aralarına dayayıp bırakıyorum, döl çeşme gibi ucundan fışkırıp {yer} su basmış gibi kaplıyor 💦',
      'Taşaklarım boşaldıkça devasa sikimin ucundan döl bitmek bilmeden {yer} akıyor, tenin bembeyaz… ahhh 😩', 'Canavar sikim yumuşaklığında seğiriyor, döl taşaklarımdan ucuna hücum edip {yer} taşıyor, çarşafa kadar süzülüyor 🥵💦',
      'Döl taşaklarımdan kopup dev sikimin ucundan {yer} yangın hortumu gibi fışkırıyor, yüzüne kadar sıçrıyor offf 💦', 'Devasa sikim sürtünmeden atıyor, taşaklarımdaki bütün döl ucundan sel gibi {yer} boşalıyor, her yerin dölle kaplı… ahh 😮‍💨']
  }
};
Stories.ME_HUG_LINES = {
  bullPos: {
    label: '🤗 Sarılma · Bull · pozisyon',
    events: ['Bull Doggy', 'Husband In Room'],
    lines: [
      'Sırtına kapandım, alyanslı elin çarşafı sıkıyor; {gogus} göğüslerin avuçlarımda… ahh 😩',
      'Kollarımı beline doladım, {kalca} kalçan bana çarpıyor offf 🥵',
      'Arkandan sımsıkı sarıldım, kulağına "benimsin şimdilik" diye fısıldıyorum 😮‍💨',
      '{kalcaHis}, seni kendime çektikçe nefesin kesiliyor ahh 🔥',
      '{gogusHis}, yüzüğün tenimde serin kalıyor… offf 😩',
      'Yüzünü bana çevirdim, ıslak ıslak öpüyorum {o} 🥵',
      'Ellerimi ellerinin üstüne koydum, parmaklarımız yüzüğünün etrafında birleşti 🔥',
      'Omzuna dudaklarımı bastırıp sana yaslanıyorum, sen geriye geliyorsun 😮‍💨',
      'Başka bir adamın karısı kollarımda eriyor, seni bırakmıyorum ahh 😩',
      'Sımsıkı sarılmışken kalbinin deli gibi attığını duyuyorum {o} 🤍'
    ]
  },
  bullFinish: {
    label: '🤗 Sarılma · Bull · bitiş',
    events: ['Bull Creampie', 'Ring Cumshot', 'Marked Wife', 'Condom Trophy'],
    lines: [
      'Seni sımsıkı sardım, titreyerek boşalıyorum… ahhh 😩💦',
      'Boynuna gömüldüm, her atışta kollarım kasılıyor offf 🥵',
      'Geldi {o}, seni bırakmıyorum, sen de bana sımsıkı sarıldın… ahh 💦',
      '{gogus} göğüslerin göğsüme bastırmışken bütün bedenim boşalıyor offf 😮‍💨',
      'Alyanslı elin sırtımda geziyor, nefesimiz bir türlü düzelmiyor ahh 😩',
      '{kalca} kalçanı kavrayıp son damlaya kadar sana bastırıyorum 🔥',
      'Dizlerim titriyor, sana yaslanıyorum; sen beni tutuyorsun {o} 🥰',
      'Boşalırken alnımı omzuna dayadım, "eve böyle gideceksin" diye fısıldıyorum 💦',
      'Bitti; bırakmadan öpüyorum, saçlarını yüzünden çekiyorum 🤍',
      'Bir süre sarılı duruyoruz; birazdan eve, kocana döneceksin 😮‍💨'
    ],
    rub: [
      'Seni sımsıkı sardım, lastiğin içine titreyerek boşalıyorum… ahhh 😩',
      'Boynuna gömüldüm, kondom her atışta ısınıyor offf 🥵',
      'Geldi {o}, hepsi kondomda; sen bana sımsıkı sarıldın… ahh 💦',
      'Sarılı kalıyoruz, hazne ağırlaştı offf 😮‍💨',
      'Bitti; kondomu çıkarmadan önce seni bir kez daha öpüyorum 🤍'
    ]
  },
  bullTalk: {
    label: '🤗 Sarılma · Bull · sohbet',
    events: ['Husband Approved', 'Compare Talk', 'Husband Thanks'],
    lines: [
      'Telefonunu bıraktın, başını göğsüme yasladın; seni sarıyorum 🤍',
      'Kollarımı beline doladım, kulağıma fısıldadığın şeyi duyunca gülümsedim 😏',
      'Sana sarılınca alyansın tenime değiyor, ikimiz de susuyoruz 😮‍💨',
      'Saçlarını okşuyorum, kocan hakkında anlattıklarını dinliyorum {o} 🤍',
      'Alnından öpüp seni kendime çekiyorum 🥰',
      'Heyecandan titriyorsun, seni sıkıca tutuyorum 🤍',
      'Parmaklarını parmaklarımın arasına aldım, yüzüğün üstünde durdum 😏',
      'Başını omzuma koydun, nefesin yavaşlıyor 😮‍💨',
      'Sarılmışken sırrımızı fısıldıyorsun, gülmemek için dudağımı ısırıyorum 😏',
      'Bu an sadece bizim, seni bırakmıyorum {o} 🥰'
    ]
  },
  saunaHug: {
    label: '🤗 Sarılma · Sauna · ısınma',
    events: ['Towel Drop', 'Sweaty Hug'],
    lines: [
      'Terli tenin bana yapıştı, kollarımı sıkıca beline doluyorum… ahh 😩',
      '{gogus} göğüslerin göğsüme bastırıyor, sıcaklık ikimizi de eritiyor offf 🥵',
      'Sekide sımsıkı sarıldım, ter sırtından süzülüyor 😮‍💨',
      '{kalca} kalçanı ellerimle kavradım, tenin parmaklarımın altında kayıyor ahh 🔥',
      'Başını omzuma yasladın, nefesin boynumda sıcacık {o} 🤍',
      '{gogusHis}, buhar tenimize siniyor… offf 🥵',
      'Alnımız birbirine dayalı, tuzlu ter dudaklarımıza iniyor 😮‍💨',
      '{kalcaHis}, tahta sekide sana daha çok sokuluyorum ahh 🔥',
      'Bu sıcakta bile bırakmak istemiyorum seni {o} 🥰',
      'Sımsıkı sarılmışken kalbinin deli gibi attığını duyuyorum 🤍'
    ]
  },
  saunaRub: {
    label: '🤗 Sarılma · Sauna · sürtünme',
    events: ['Sweaty Titjob', 'Bench Hotdogging'],
    lines: [
      'Üstüne eğilip omuzlarını kavradım, terli tenin ellerimde kayıyor… ahh 😩',
      'Kollarım belinde, {kalca} kalçan terle üstümde gidip geliyor offf 🥵',
      'Sırtın ıslak ıslak parlıyor, alnımı omzuna dayadım 😮‍💨',
      'Sıcaklık başıma vuruyor; seni kendime çektikçe kayganlık artıyor ahh 🔥',
      '{kalcaHis}, ter her hareketi kolaylaştırıyor offf 🥵',
      'Ensene dudaklarımı bastırıyorum, tuzunu tadıyorum {o} 😮‍💨',
      '{gogusHis}, tenim tenine yapışıp ayrılıyor… ahh 😩',
      'Ahşap gıcırdıyor, kollarım seni bırakmıyor 🔥',
      'İçeri girmiyorum ama sana sarıldıkça zonkluyorum offf 🥵',
      'Saçlarını yüzünden çekip alnından öpüyorum {o} 🥰'
    ]
  },
  saunaFinish: {
    label: '🤗 Sarılma · Sauna · bitiş',
    events: ['Sauna Cumshot'],
    lines: [
      'Seni sımsıkı sardım, titreyerek tenine boşalıyorum… ahhh 😩💦',
      'Boynuna gömüldüm, her atışta kollarım kasılıyor offf 🥵',
      'Geldi {o}, seni bırakmıyorum, sen de bana yapıştın… ahh 💦',
      'Terli bedenin bana bastırmışken bitiyorum offf 😮‍💨',
      'Nefesim kesildi, sıcaktan mı senden mi bilmiyorum ahh 😩',
      '{kalca} kalçanı kavrayıp son damlaya kadar sana bastırıyorum 🔥',
      'Dizlerim titriyor, sekiye çöküp seni de yanıma çekiyorum {o} 🥰',
      'Boşalırken alnımı omzuna dayadım, ter sırtımdan akıyor… offf 💦',
      'Bitti; bırakmadan öpüyorum, ıslak saçlarını yüzünden çekiyorum 🤍',
      'Sarılı duruyoruz, sadece taşların tıkırtısı kalıyor 😮‍💨'
    ]
  },
  saunaCool: {
    label: '🤗 Sarılma · Sauna · soğuk mola',
    events: ['Cold Plunge', 'Ice Tease', 'Snow Roll'],
    lines: [
      'Soğuktan titriyorsun, seni kendime çekip kollarımla sarıyorum 🥰',
      'Sıcak tenim soğuk tenine değince ikimiz de ürperdik offf 😳',
      'Göğsüme sokuldun, dişlerin birbirine vuruyor; daha sıkı sarılıyorum {o} 🤍',
      'Kahkahan boynumda titriyor, seni bırakmıyorum 😂',
      'Tenin diken diken, avuçlarımla ısıtıyorum 😮‍💨',
      '{gogus} göğüslerin soğuktan ürpermiş, göğsüme bastırıp ısıtıyorum ahh 🥵',
      'Soğuk ile sıcak aynı anda; kollarımda eriyorsun offf 🔥',
      'Burnun buz gibi, boynuma gömüyorsun {o} 🥰',
      'Nefesimiz buhar buhar karışıyor, seni daha da çekiyorum 😮‍💨',
      'Isınana kadar bırakmıyorum, söz {o} 🤍'
    ]
  },
  saunaRest: {
    label: '🤗 Sarılma · Sauna · dinlenme',
    events: ['Rest Room'],
    lines: [
      'Havluya sarınmış, kollarımdasın; başın göğsümde 🥰',
      'Sessizce sarılıyoruz, nefesimiz yavaş yavaş düzeliyor 😮‍💨',
      'Saçların nemli, burnumu içlerine gömüyorum {o} 🤍',
      'Elini tuttum, parmaklarımız birbirine geçti 🤍',
      'Tenin hâlâ sıcak, ama bu sıcak başka 🥰',
      'Bir yudum su verip seni yine kollarıma alıyorum 💧',
      'Bacakların bacaklarıma dolandı, kıpırdamak istemiyorum 😮‍💨',
      'Alnından öpüyorum, gözlerin kapanıyor {o} 🥰',
      'Havlunun altından belini okşuyorum, gülümsüyorsun 🤍',
      'Burada böyle kalsak, dünya dursa olur {o} 🥰'
    ]
  },
  showerSoap: {
    label: '🤗 Sarılma · Duş · köpük',
    events: ['Soapy Hug', 'Soap Her', 'Wash Me', 'Body Slide'],
    lines: [
      'Köpüklü bedenin bana kayıyor, kollarımı sıkıca beline doluyorum… ahh 😩',
      '{gogus} göğüslerin göğsümde kayıyor, köpük aramızda ılık ılık eriyor offf 🥵',
      'Suyun altında sımsıkı sarıldım, tenin ellerimden kayıp duruyor 😮‍💨',
      '{kalca} kalçanı avuçlarıma aldım, köpükten bir türlü tutamıyorum ahh 🔥',
      'Başını omzuma yasladın, su sırtından akıyor; seni bırakmıyorum {o} 🤍',
      '{gogusHis}, köpük tenimize yapışıyor… offf 🥵',
      'Alnımı alnına dayadım, damlalar dudaklarımıza süzülüyor 😮‍💨',
      '{kalcaHis}, ellerim köpüğün üstünde kayıyor ahh 🔥',
      'Kollarımda sabun gibi kayıyorsun, seni daha sıkı çekiyorum 🥰',
      'Sımsıkı sarılmışken kalbinin atışını köpüğün altından duyuyorum {o} 🤍'
    ]
  },
  showerRub: {
    label: '🤗 Sarılma · Duş · sürtünme',
    events: ['Soapy Handjob', 'Soapy Hotdogging', 'Soapy Thighjob'],
    lines: [
      'Arkandan sarıldım, köpüklü tenin bana kayarken sertliğim sana sürtünüyor… ahh 😩',
      'Kollarım belinde, {kalca} kalçan köpükle üstümde gidip geliyor offf 🥵',
      'Ellerim {gogus} göğüslerinde kayıyor, sen beni sıkıştırıyorsun 😮‍💨',
      'Su ikimizden akıyor; sımsıkı sarılıp kayganlığın içinde gidip geliyorum ahh 🔥',
      '{kalcaHis}, köpük her hareketi daha da kolaylaştırıyor offf 🥵',
      'Başını omzuma attın, kulağına nefesimi bırakıyorum {o} 😮‍💨',
      '{gogusHis}, kayganlık aklımı başımdan alıyor… ahh 😩',
      'Bedenini kendime çektikçe köpük aramızda ince ince eriyor 🔥',
      'İçeri girmiyorum ama sarıldıkça aynı yerde zonkluyorum offf 🥵',
      'Ensene dudaklarımı bastırıp seni bırakmadan sürtünüyorum {o} 🥰'
    ]
  },
  showerKneel: {
    label: '🤗 Sarılma · Duş · diz çökmüş',
    events: ['Soapy Titjob', 'Shower Blowjob'],
    lines: [
      'Eğilip başını karnıma yaslıyorum, ıslak saçlarını avuçlarımda topluyorum… ahh 😩',
      'Ellerimi yanaklarına koydum, su yüzünden süzülüyor; gözlerin bende offf 🥵',
      'Saçlarının arasında parmaklarım, başını şefkatle sana doğru tutuyorum 😮‍💨',
      'Omuzlarını kavradım, su ikimizin üstüne dökülüyor ahh 🔥',
      '{gogus} göğüslerin ıslak ıslak parlıyor, sana eğilip alnından öpüyorum {o} 🤍',
      'Sırtını suyun altında okşuyorum, dizlerin üşümesin diye havluyu altına serdim 🥰',
      '{gogusHis}, ellerim omuzlarında dinleniyor… offf 🥵',
      'Başını karnıma bastırıp saçlarını okşuyorum, nefesin tenimde 😮‍💨',
      'Damlalar kirpiklerinden düşüyor, yüzünü iki avucumun arasına alıyorum ahh 🔥',
      'Bitince seni kaldırıp sımsıkı sarılacağım {o}, şimdiden bekleyemiyorum 🥰'
    ]
  },
  showerLift: {
    label: '🤗 Sarılma · Duş · kucakta',
    events: ['Shower Lift'],
    lines: [
      'Seni kucağıma aldım, bacakların belimde; sırtın duvarda, bütün ağırlığın kollarımda… ahh 😩',
      'Boynuma sımsıkı sarıldın, her hareketimde {gogus} göğüslerin göğsüme bastırıyor offf 🥵',
      '{kalca} kalçanı avuçlarımla tutup yukarı kaldırıyorum, sonra kendime çekiyorum 😮‍💨',
      'Su ikimizin arasından akıyor, alnın alnımda, nefeslerimiz karışıyor ahh 🔥',
      '{kalcaHis}, seni duvara yaslayıp daha sıkı tutuyorum offf 🥵',
      'Kaymıyorsun, bırakmıyorum; kollarımda güvendesin {o} 🤍',
      '{gogusHis}, duvarla bedenimin arasında sıkıştın… ahh 😩',
      'Bacaklarını belimde kilitledin, derinleştikçe tırnakların sırtımda 🔥',
      'Kulağımda inliyorsun, su sesini bastırıyor; seni daha da kendime çekiyorum offf 🥵',
      'Sımsıkı sarılmışken ayaklarını yerden kesiyorum, bütünüyle benimlesin {o} 🥰'
    ]
  },
  showerBack: {
    label: '🤗 Sarılma · Duş · arkadan',
    events: ['Shower Doggy', 'Shower Anal'],
    lines: [
      'Sırtına kapandım, ellerin fayansta, ellerim {gogus} göğüslerinde… ahh 😩',
      'Su ensenden aşağı akıyor, göğsüm sırtına yapıştı; arkandan sımsıkı sarıldım offf 🥵',
      'Kollarımı beline dolayıp {kalca} kalçana bastırıyorum 😮‍💨',
      '{kalcaHis}, buhar içinde duvara doğru itiliyorsun ahh 🔥',
      'Çeneni tutup yüzünü bana çeviriyorum, ıslak ıslak öpüyorum {o} 🥵',
      '{gogusHis}, tenin suyun altında kayıyor… offf 😩',
      'Ellerimi ellerinin üstüne koydum, fayansta parmaklarımız birbirine geçti 🤍',
      'Omzuna dudaklarımı bastırıp yavaş yavaş gidip geliyorum ahh 😮‍💨',
      'Seni kendime çektikçe su aramızda kayboluyor offf 🔥',
      'Kulağına "seni bırakmıyorum" diye fısıldıyorum, sen geriye yaslanıyorsun {o} 🥰'
    ]
  },
  showerFinish: {
    label: '🤗 Sarılma · Duş · bitiş',
    events: ['Shower Creampie', 'Shower Cumshot'],
    lines: [
      'Seni sımsıkı sardım, titreyerek boşalıyorum; su üstümüze akmaya devam ediyor… ahhh 😩💦',
      'Boynuna gömüldüm, her atışta kollarım daha çok kasılıyor offf 🥵',
      'Geldi {o}, seni bırakmıyorum, sen de bana sımsıkı sarıldın… ahh 💦',
      '{gogus} göğüslerin göğsüme bastırmışken bütün bedenim boşalıyor offf 😮‍💨',
      'Sarılı kalıyoruz, su ikimizi de yıkıyor, nefesimiz bir türlü düzelmiyor ahh 😩',
      '{kalca} kalçanı kavrayıp son damlaya kadar seni kendime çekiyorum 🔥',
      'Dizlerim titriyor, sana yaslanıyorum; sen beni tutuyorsun {o} 🥰',
      'Boşalırken alnımı omzuna dayadım, su sırtımdan akıyor… offf 💦',
      'Bitti; bırakmadan öpüyorum, ıslak saçlarını yüzünden çekiyorum 🤍',
      'Bir süre öylece sarılı duruyoruz, sadece suyun sesi kalıyor 😮‍💨'
    ],
    rub: [
      'Seni sımsıkı sardım, lastiğin içine titreyerek boşalıyorum… ahhh 😩',
      'Boynuna gömüldüm, kondom her atışta ısınıyor offf 🥵',
      'Geldi {o}, hepsi kondomda; sen bana sımsıkı sarıldın… ahh 💦',
      'Sarılı kalıyoruz, su ikimizi de yıkıyor, hazne ağırlaştı offf 😮‍💨',
      'Bitti; kondomu dikkatle çıkarmadan önce seni bir kez daha öpüyorum 🤍'
    ]
  },
  peeHer: {
    label: '🤗 Sarılma · Pee · o işerken',
    events: ['Islak Fantezi', 'Golden Shower', 'Wet Panties'],
    lines: [
      'Sana sımsıkı sarıldım, bedenin gevşedikçe sıcaklığın bana yayılıyor… ahh 😩',
      'Kollarımda bırakıyorsun kendini; {gogus} göğüslerin göğsüme yapışmış, ikimiz de ıslağız offf 🥵',
      'Sarılıp kulağına "bırak gelsin" diye fısıldıyorum, titreyerek bırakıyorsun 😮‍💨',
      '{kalca} kalçanı ellerimle kavradım, sıcaklığın bacağımdan aşağı süzülüyor ahh 🔥',
      'Yüzünü boynuma gömdün, utancın tenimde; seni daha sıkı sarıyorum {o} 🤍',
      'Islak bedenin bana yapıştı, {gogusHis}; bırakmıyorum seni… offf 😩',
      'Kollarımı beline doladım, sen rahatladıkça ben sertleşiyorum ahh 🥵',
      'Sımsıkı sarılmışken karnımda sıcacık akışını hissediyorum offf 😮‍💨',
      '{kalcaHis}, bir yandan da ıslaklığın tenime yayılıyor… ahh 🔥',
      'Bitti mi {o}? Bırakmıyorum, ıslak ıslak sarılıyoruz böyle 🥰'
    ]
  },
  peeMe: {
    label: '🤗 Sarılma · Pee · sen işerken',
    events: ['Pee On Her'],
    lines: [
      'Seni kendime çektim, sıcaklık tenlerimizin arasından süzülüyor… ahh 😩',
      'Sarılmışken bırakıyorum, sen başını göğsüme yaslayıp gülümsüyorsun offf 🥵',
      'Kollarım belinde, {gogus} göğüslerin ıslanıyor; "devam et" diye fısıldıyorsun 😮‍💨',
      'İstediğin için bırakıyorum {o}; seni sımsıkı tutuyorum, hiçbir yere gitmiyorum 🤍',
      '{kalca} kalçanı avuçlarıma aldım, sıcaklık karnından aşağı iniyor ahh 🔥',
      'Bedenini bana bastırıyorsun, ıslanmaktan kaçmıyorsun; bu beni bitiriyor offf 😩',
      '{gogusHis}, tenin sıcacık ve ıslak… ahh 🥵',
      'Alnını alnıma dayadın, gözlerin bende; son damlaya kadar sarılıyoruz 😮‍💨',
      'Titrediğini hissedip daha sıkı sarılıyorum {o} 🥰',
      'Bitti; ıslak bedenini bırakmadan saçlarını öpüyorum, birazdan seni ben yıkayacağım 🚿'
    ]
  },
  peeShower: {
    label: '🤗 Sarılma · Pee · duşta',
    events: ['Shower Pee'],
    lines: [
      'Suyun altında sana sarıldım, sıcaklığın bacağıma iniyor… ahh 😩',
      'Kollarımda sırılsıklamsın, {gogus} göğüslerin göğsümde kayıyor offf 🥵',
      'Sımsıkı sarılmışken aynı anda bırakıyoruz, su hepsini alıp götürüyor 😮‍💨',
      'Seni duvara yaslayıp sarıldım, gülüşün boynumda titriyor {o} 🔥',
      '{kalca} kalçan ellerimde kayıyor, buhar ikimizi sarıyor ahh 😩',
      'Sıcak su sırtından akarken bir sıcaklık da bacaklarımızın arasından süzülüyor offf 🥵',
      '{gogusHis}, su tenlerimizin arasından süzülüyor… ahh 🚿',
      'Başını omzuma koydun, gözlerin kapalı; bırakıyorsun kendini {o} 🤍',
      '{kalcaHis}, duşun altında birbirimizden ayrılmıyoruz offf 🔥',
      'Bitince de bırakmıyorum; ıslak saçlarını geriye atıp seni öpüyorum 🥰'
    ]
  },
  peeHotdog: {
    label: '🤗 Sarılma · Pee · hotdogging',
    events: ['Hotdogging Pee'],
    lines: [
      'Sana arkadan sarıldım, {kalca} kalçanın arasında sıcaklık süzülüyor… ahh 😩',
      'Kollarım belinde, kalçalarını sıkıp bana yaslanıyorsun offf 🥵',
      'Göğsüm sırtına yapıştı; "bırak" diye fısıldıyorsun, bırakıyorum 😮‍💨',
      '{kalcaHis}, sıcaklık bacaklarından aşağı iniyor ahh 🔥',
      'Ellerim {gogus} göğüslerinde, sen kalçanı bana bastırıyorsun offf 😩',
      'Arkandan sımsıkı sarılmışken ensene öpücükler bırakıyorum {o} 🤍',
      '{gogusHis}, yanakların arasında ıslak bir sıcaklık… ahh 🥵',
      'Başını omzuma attın, gözlerin kapalı; son damlaya kadar sarılıyorum 😮‍💨',
      'Titrediğini hissedip belini daha sıkı tutuyorum {o} 🥰',
      'Bitti; bırakmadan seni kollarımda duşa taşıyorum 🚿'
    ]
  },
  peeWatch: {
    label: '🤗 Sarılma · Pee · izlerken',
    events: ['Watching Her Pee'],
    lines: [
      'Yanına çömelip sana sarıldım, başını omzuma yasladın; sesini dinliyorum 😮‍💨',
      'Kollarımı boynuna doladım {o}, utancın yanağımda sıcacık 😳',
      'Dizlerine sarılıp gözlerine bakıyorum, bakışını kaçırmıyorsun offf 🥵',
      'Alnından öpüyorum, sen de gülümseyip bırakıyorsun 🤍',
      'Kapıyı açık bırakman yetti, şimdi kollarımdasın ahh 🔥',
      'Bana bu kadar güvenmene dayanamıyorum, seni sıkıca sarıyorum 🥰',
      'Elimi tuttun, parmaklarını sıkıyorsun; kıpırdamadan yanındayım 😮‍💨',
      'Kulağına "çok güzelsin" diye fısıldıyorum, yanakların kızarıyor 😳',
      'Bitince kalkmana yardım edip seni kucaklıyorum, {kalca} kalçanı tutuyorum offf 🥵',
      'Seni kollarımda kaldırıp yatağa götürüyorum {o}, daha yeni başlıyoruz 😈'
    ]
  },
  doggy: {
    label: '🤗 Sarılma · Doggy', events: ['Doggy'], rp: 'pos',
    lines: [
      'Sana arkadan sarılıp {kalca} kalçana çarparak doggy yapıyorum, sarılırken {gogus} memelerini sıkıyorum; bedenin pamuk gibi yumuşak… ahhh 😩',
      'Göğsüm yumuşacık sırtına gömüldü, kollarım seni sarıyor; {kalcaHis}, zevkten başım dönüyor offf 🔥',
      'Arkandan tamamen üstüne kapandım, ellerim {gogus} göğüslerinde, {gogusHis}; her yerin yumuşacık… ahh {o} 🥵',
      'Seni kollarımla sarıp o yumuşaklığa gömülüyorum, zevkin doruğundayım; {kalcaHis} offf 😮‍💨',
      'Bütün bedenimle sırtına yaslandım, tenin ipek gibi; {gogus} memelerini avuçlayıp {kalca} kalçana gömülüyorum… ahhh 💦',
      'Yumuşak karnını avuçlayıp kendime çekiyorum, sarıldıkça zevk tepeme vuruyor; {gogusHis} offf 😩',
      'Tenim tenine yapışmış, sıcak ve yumuşak bedenin beni sarıyor; {kalca} kalçanın her çarpışı eriyerek geliyor… ahh 🔥',
      'Sarılınca bedenin bana kalıp gibi oturuyor, bu yumuşaklık aklımı alıyor; {kalcaHis} offf 🥵',
      'Boynunu öperken arkandan sımsıkı sarıldım, {gogus} göğüslerin avuçlarımda eriyor; zevkten titriyorum… ahhh {o} 😮‍💨',
      'Üstüne kapanıp yumuşacık bedenini tamamen sarıyorum; {kalcaHis}, {gogusHis}… doruktayım offf 💦',
      'Sırtının yumuşaklığına yüzümü gömdüm, {kalca} kalçana derin derin vururken memelerini sıkıyorum; dayanılmaz ahh 😩',
      'Seni arkadan kucaklayıp her santimindeki yumuşaklığı hissediyorum: sıcak sırtın, {gogus} göğüslerin, {kalca} kalçan… zevkin tepesindeyim ahhh 🔥'
    ]
  },
  missionary: {
    label: '🤗 Sarılma · Missionary', events: ['Missionary'], rp: 'pos',
    lines: [
      'Üstüne tamamen kapanıp sana sımsıkı sarıldım, {gogus} göğüslerin göğsüme yumuşacık eziliyor… ahhh 😩',
      'Kollarımı sırtının altından geçirip yumuşak bedenini kendime bastırıyorum, zevkten gözlerim kararıyor offf 🔥',
      'Göğüs göğüse, karın karına; {gogus} memelerinin yumuşaklığı her vuruşta göğsüme yayılıyor… ahh {o} 🥵',
      'Ellerimi {kalca} kalçanın altına koydum, avuçlarım yumuşacık etine gömülüyor; {kalcaHis} offf 😮‍💨',
      'Tamamen sarıldık, sıcacık ve yumuşacıksın; zevkin doruğunda seni her yerinle hissediyorum… ahhh 💦',
      'Bacakların belime, kollarım sırtına dolandı; {gogus} göğüslerin aramızda yastık gibi sıkışmış offf 😩',
      'Alnım alnında, yumuşak bedenine gömülüp derine iniyorum; zevk tepeme çıktı… ahh 🔥',
      'Üstünde kıpırdamadan sarılıyorum, bütün o yumuşaklık altımda eriyor; {gogus} göğüslerinin sıcaklığı göğsüme yayılıyor offf 🥵',
      'Seni kendime öyle bastırdım ki aramızdan hava geçmiyor, bedenin bana uyuyor; {kalca} kalçanı sıkarak vuruyorum… ahhh {o} 😮‍💨',
      'Yumuşacık boynuna gömüldüm, kollarım seni sarıyor; {gogus} memelerinin uçları göğsüme sürtünüyor, doruktayım ahh 💦',
      'Tamamen üstündeyim, tenimiz tek parça gibi; bir elim {kalca} kalçanda, {kalcaHis}; bu yumuşaklık beni bitiriyor… offf 😩',
      'Sana sarılıp yavaş ve derin vuruyorum; yumuşak göğüslerin, sıcak karnın, titreyen bacakların… zevkin en tepesinde her şeyini hissediyorum ahhh 🔥'
    ]
  },

  hotdog: {
    label: '🤗 Sarılma · Hotdogging', events: ['Hotdogging'],
    lines: [
      'Arkandan sımsıkı sarılıp {kalca} kalçanın arasına yerleştim; yumuşacık kalçan beni iki yandan sarıyor… ahhh 😩',
      'Göğsüm yumuşak sırtına yapışık, {gogus} memelerini sıkarken kalçanın arasında yukarı aşağı kayıyorum offf 🔥',
      'Kollarımla belini sarıp kendime bastırıyorum; {kalcaHis}, bu yumuşaklık aklımı alıyor… ahh {o} 🥵',
      'Kalçalarını iki yanımdan sıkıştırdın, seni kucaklarken aralarında eriyorum; zevkin doruğundayım offf 😮‍💨',
      'Ensene gömülüp yumuşacık kalçana sürtünüyorum; {gogusHis}… ahhh 💦',
      'Bir elim göğsünde bir elim karnında, seni kendime çekerek kalçanın kıvrımında kayıyorum; tenin ipek gibi offf 😩',
      'Bütün bedenimle sırtına yaslandım, {kalca} kalçan beni sıcacık sarıyor; içine girmeden bile doruktayım… ahh 🔥',
      'Sarıldıkça kalçan bana daha çok yapışıyor, her kaydığımda o yumuşaklığı baştan sona hissediyorum offf 🥵',
      'Kulağına inleyerek yumuşak kalçanın arasında hızlanıyorum, kollarım seni bırakmıyor… ahhh {o} 😮‍💨',
      'Seni arkadan kucaklayıp her santimini hissediyorum: sıcak sırtın, {gogus} göğüslerin, beni saran {kalca} kalçan… ahhh 💦',
      'Zevke rağmen kasılıyorum; kalçanın arasında taşaklarımdan yükselen dölü sıka sıka geri tutuyorum… offf 😣',
      'O kadar uzun tuttum ki sarılıyken kalçanın arasına bıraktığımda bütün yük akıp gidiyor; rahatladım… ahhhh 😌💦'
    ]
  },

  /* 💦 boşalırken sarılma · pos: o anki pozisyon bunlardan biriyse · rub: vajinal ve kondomluyken bunlar */
  cumBack: {
    label: '🤗💦 Sarılma · arkadan boşalma · Vaginal Creampie',
    events: ['Vaginal Creampie'], rp: 'in',
    pos: ['Doggy', 'Standing doggy', 'Spooning', 'Spooning Anal', 'Standing Anal', 'Rough Anal', 'Wobble Doggy', 'Full Moon Doggy', 'Vampire Bite', 'Intimate Doggy', 'Full Body Wrap', 'Neck Feast'],
    lines: [
      'Arkandan sımsıkı sarılıp {kalca} kalçana son kez çarptım; o kadar birikmişti ki içine boşalırken bütün gerginliğim akıp gidiyor… ahhhh 😩💦',
      'Yumuşacık sırtına yapışık, {gogus} memelerini sıkarak en derine bastırıyorum; tuttuğum her şey bir anda boşalıyor, rahatlıyorum offf 🔥',
      'Seni kollarımla sarıp bırakıyorum kendimi; dakikalardır biriken döl dalga dalga içine akıyor… ahhh {o} 🥵',
      'Ensene gömülüp inleyerek boşalıyorum, {kalcaHis}; içimdeki baskı boşaldıkça hafifliyorum… offf 💦',
      'Bütün ağırlığımla yumuşak sırtına kapandım, birikenin hepsi içine fışkırıyor; bacaklarımdaki kasılma çözülüyor… ahhh 😮‍💨',
      'Bir elim göğsünde bir elim karnında, o kadar çok birikmiş ki durmadan doluyorsun; {gogusHis}, rahatlama tarifsiz ahh 😩',
      'Çıkmıyorum, arkandan sarılı kalıp son damlaya kadar boşaltıyorum; sanki içimdeki bütün yük kalkıyor… offf 💦',
      'Kulağına adını fısıldayarak bırakıyorum kendimi; uzun tutmanın karşılığı bu taşkınlık… ahhh {o} 🔥',
      'Titreyen yumuşak bedenini kollarımda tutarken boşalmam bitmek bilmiyor, her zonklamada biraz daha rahatlıyorum… ahh 💦',
      'Boşaldıktan sonra bedenim gevşedi, arkandan sarılı derin nefes alıyorum; o birikmişlik gitti, hafiflik kaldı… mmm 😌'
    ],
    rub: [
      'Arkandan sımsıkı sarılıp {kalca} kalçana son kez çarptım; birikenin hepsi kondomun içine boşalıyor, rahatlıyorum… ahhhh 😩💦',
      'Yumuşak sırtına yapışık, {gogus} memelerini sıkarak bırakıyorum kendimi; lastik o kadar çok doluyor ki… offf 🔥',
      'Seni kollarımla sarıp zonkluyorum; dakikalardır tuttuğum döl kondomun ucuna akıyor… ahhh {o} 🥵',
      'Ensene gömülüp boşalıyorum, {kalcaHis}; içimdeki baskı lastiğe boşaldıkça hafifliyorum… offf 💦',
      'Sırtına kapanmış halde kondomu dolduruyorum; bacaklarımdaki kasılma yavaş yavaş çözülüyor… ahh 😮‍💨',
      'Bir elim göğsünde, o kadar çok birikmiş ki kondom şişiyor; {gogusHis}, rahatlama tarifsiz ahhh 😩',
      'Arkandan sarılı kalıp son damlaya kadar boşaltıyorum, bütün yük kalktı… offf 💦',
      'Kulağına fısıldayarak bırakıyorum kendimi; uzun tutmanın karşılığı ağzına kadar dolu bir kondom… ahhh {o} 🔥',
      'Yumuşacık bedenin kollarımda titrerken boşalmam bitmiyor, her zonklamada biraz daha rahatlıyorum… ahh 💦',
      'Bedenim gevşedi, sarılı kalıp kondomu yavaşça çıkarıyorum; ne kadar birikmiş, bak… mmm 😌'
    ]
  },
  cumFront: {
    label: '🤗💦 Sarılma · önden boşalma · Vaginal Creampie',
    events: ['Vaginal Creampie'], rp: 'in',
    pos: ['Missionary', 'Standing Missionary', 'Lap Sex', 'Cowgirl', 'Cowgirl Anal', 'Standing', 'Coffin Missionary', 'Spider Web', 'Wrist Offering', 'Blood Bath', 'Blood Pact', 'Milk Bath', 'Intimate Therapy', 'Bareback Therapy', 'Jugular Ride', 'Jelly Ride'],
    lines: [
      'Seni sımsıkı sarıp alnımı alnına dayadım; o kadar uzun tuttum ki içine boşalırken bütün bedenim rahatlıyor… ahhhh 😩💦',
      '{gogus} göğüslerin yumuşacık göğsüme ezilmiş, biriken her şey dalga dalga içine akıyor; nihayet… offf 🔥',
      'Bacakların belime kilitli, kollarım seni sarıyor; dakikalardır kasarak tuttuğum döl bir anda boşalıyor… ahhh {o} 🥵',
      'Dudaklarını öperek bırakıyorum kendimi, içimdeki baskı akıp gittikçe inlememiz karışıyor… offf 💦',
      'Ellerim {kalca} kalçanın altında, seni kendime çekip en derinde boşaltıyorum; o yük kalktı, hafifledim… ahhh 😮‍💨',
      'Karın karına, yumuşak bedenine sarılıyken o kadar çok geliyor ki durmuyor; her zonklamada biraz daha rahatlıyorum ahh 😩',
      'Boynuna gömülüp sarılarak doluyorum, uzun birikmenin taşkını bu… offf 💦',
      'Seni bırakmıyorum, kollarımda titriyorsun ve ben hâlâ boşalıyorum; bacaklarımdaki kasılma çözülüyor… ahhh {o} 🔥',
      'Kalbimiz aynı anda çarpıyor, sımsıkı sarılı bırakıyorum; içimde düğümlenen her şey çözüldü… ahh 💗💦',
      'Boşaldıktan sonra yumuşacık bedenine gömülüp gevşiyorum; o birikmişlik gitti, sadece huzur kaldı… mmm 😌'
    ],
    rub: [
      'Seni sımsıkı sarıp gözlerine bakarak bırakıyorum; o kadar uzun tuttum ki kondom bir anda doluyor… ahhhh 😩💦',
      '{gogus} göğüslerin yumuşacık göğsüme ezilmiş, biriken her şey lastiğe akıyor; nihayet… offf 🔥',
      'Bacakların belime kilitli, kasarak tuttuğum döl kondomun ucunu şişiriyor… ahhh {o} 🥵',
      'Dudaklarını öperek boşalıyorum, içimdeki baskı akıp gidiyor; güvendeyiz… offf 💦',
      'Ellerim {kalca} kalçanın altında, derine bastırıp kondomu dolduruyorum; o yük kalktı… ahhh 😮‍💨',
      'Yumuşak bedenine sarılıyken lastik ısınıyor, durmadan geliyor; her zonklamada rahatlıyorum ahh 😩',
      'Boynuna gömülüp sarılarak bitiriyorum, uzun birikmenin hepsi kondomda… offf 💦',
      'Kollarımda titriyorsun, ben boşalmaya devam ediyorum; kasılmalarım yavaş yavaş çözülüyor… ahhh {o} 🔥',
      'Sımsıkı sarılı bıraktım kendimi, içimde düğümlenen her şey çözüldü… ahh 💗',
      'Gevşemiş halde sarılı kalıp kondomu dikkatlice çıkarıyorum; bak ne kadar birikmiş… mmm 😌'
    ]
  },
  cumOut: {
    label: '🤗💦 Sarılma · dışarı boşalma · Ass Cumshot',
    events: ['Ass Cumshot'], rp: 'out',
    lines: [
      'Arkandan sarılıyken son anda çıktım; o kadar birikmişti ki {kalca} kalçana fışkırırken bütün bedenim gevşiyor… ahhhh 😩💦',
      'Seni kendime bastırıp yumuşak kalçanın kıvrımına bırakıyorum; tuttuğum her şey akıp gidiyor, rahatladım offf 🔥',
      'Göğsüm sırtında, {gogus} memelerini sıkarken dakikalardır biriken döl kalçanı boyuyor… ahhh {o} 🥵',
      'Sımsıkı sarılı halde kalçanın arasına sürtünerek boşalıyorum; içimdeki baskı dalga dalga çıkıyor… offf 💦',
      'Ensende inleyerek bırakıyorum kendimi, sıcaklık beline yayılıyor, kasılmam çözülüyor ahh 😮‍💨',
      'Çıkıp yumuşacık kalçana yapıştım, o kadar çok geliyor ki durmuyor; her fışkırışta hafifliyorum… ahhh 😩',
      'Bir elim karnında seni tutuyor, uzun tutmanın bütün birikimi kalçana akıyor… offf 💦',
      'Uyluklarına kadar süzülüyor, sarılmayı bırakmadan son damlayı da boşaltıyorum; yük kalktı… ahh {o} 🔥',
      'Kalçan ve sırtın ıslandı, ikimiz nefes nefese; bu rahatlama tarifsiz… ahhh 💦',
      'Bitirince bedenim gevşedi, arkandan sarılıp yumuşak sırtını öpüyorum… mmm 😌'
    ]
  },
  cumHold: {
    label: '🤗 Sarılma · tutma · Holding',
    events: ['Holding'], rp: 'hold',
    lines: [
      'Seni sımsıkı sarıp bütün bedenimi kasıyorum; taşaklarımdan yükselen dölü sıka sıka geri tutuyorum… offf 😣',
      'Yumuşacık bedenin bu kadar güzelken tutmak işkence; karnımı, kalçamı kasıp boşalmayı engelliyorum ahh 😩',
      'Sarılırken {gogus} göğüslerinin yumuşaklığı beni bitiriyor; penisimin dibine dayanan dölü kasılarak geri itiyorum… offf {o} 🥵',
      'Zevkin doruğundayım ama bırakmıyorum; her kas lifim gergin, sıkıyorum, sıkıyorum… ahh 😮‍💨',
      'Kalçanı tutup sabitledim, kıpırdama; taşaklarım kasılıyor, yükselen her damlayı aşağı bastırıyorum… offf 😣',
      'Kulağına "bekle" diye fısıldayıp dişlerimi sıkıyorum; döl ucuma kadar geldi, kasılarak tutuyorum ahh 😳',
      'Kollarımda o yumuşaklık, içimde dayanılmaz baskı; bacaklarımı kasıp boşalmayı geri itiyorum… offf 😩',
      '{kalca} kalçan hafifçe kıpırdayınca az kalsın bitiyordum; kasıklarımı sıka sıka dölü geri tuttum… ahh 🥵',
      'Tenine yapıştım, kalbim deli gibi atıyor; taşaklarımdan penisime akmak isteyen her şeyi kasılarak durduruyorum offf 🔥',
      'Bu zevke rağmen tutuyorum; biriktikçe şişiyor, zonkluyor… hepsini sana saklıyorum ahh 💗',
      'Yumuşak bedenine gömülüp nefesimi tutuyorum; dibimden yükselen sıcaklığı sıkarak geri gönderiyorum… offf 😣',
      'Sarılı ve kıpırdamadan; her kasılmayla taşaklarım biraz daha doluyor, ama bırakmıyorum ahhh 😩'
    ]
  }
};

/* 🤗 olay başına ayrı sarılma grupları (her olay kendi mesajlarıyla) · rp: süren rolde ME_RP_HUG_LINES grubu (pos / in / out / hold) */
(H => Object.assign(H, {
  standDoggy: {
    label: '🤗 Sarılma · Standing doggy', events: ['Standing doggy'], rp: 'pos',
    lines: [
      'Ayakta arkandan sımsıkı sarıldım, sırtın göğsüme yapıştı; {kalca} kalçan her vuruşta kasıklarıma çarpıyor… ahhh 😩',
      'Seni duvara yaslayıp arkandan kucaklıyorum, {gogus} göğüslerin avuçlarımda; {gogusHis} offf 🔥',
      'Dizlerin titriyor, düşmeyesin diye belinden sarıp kendime bastırıyorum; {kalcaHis}… ahh {o} 🥵',
      'Ayakta bütün bedenimle sana yaslandım, ensene gömülüp derine iniyorum; yumuşacıksın offf 😮‍💨',
      'Bir kolum göğüslerinin altında, bir kolum karnında; seni ayakta kalıp gibi tutup vuruyorum… ahhh 💦',
      'Sırtını göğsüme çektim, başın omzuma düştü; {kalca} kalçana sertçe çarparken kulağına inliyorum offf 😩',
      'Ayakta sarılıyken her vuruşta parmak uçlarına kalkıyorsun; {kalcaHis}… ahh 🔥',
      'Ellerimi {gogus} memelerine kapattım, seni ayakta sımsıkı sarıp zevkin doruğunda tutuyorum offf 🥵',
      'Sırtın terli ve sıcak, göğsüme kayıyor; arkandan sarılıp boynunu öperek derine gömülüyorum… ahhh {o} 😮‍💨',
      'Ayakta kollarımda eriyorsun, bütün ağırlığını bana verdin; her santimindeki yumuşaklığı hissediyorum ahhh 💦'
    ]
  },
  standMissionary: {
    label: '🤗 Sarılma · Standing Missionary', events: ['Standing Missionary'], rp: 'pos',
    lines: [
      'Seni ayakta karşıdan sımsıkı sardım, {gogus} göğüslerin göğsüme eziliyor; bir bacağın belimde… ahhh 😩',
      'Sırtın duvarda, kollarım seni sarıyor; gözlerine bakarak önden derine iniyorum offf 🔥',
      'Seni kaldırıp bacaklarını belime doluyorum, sarılı halde {kalca} kalçanı avuçlarımla taşıyorum… ahh {o} 🥵',
      'Ayakta göğüs göğüse sarıldık, nefesin boynumda; {gogusHis} offf 😮‍💨',
      'Kollarını boynuma doladın, ben belini sardım; ayakta tek beden gibi sallanıyoruz… ahhh 💦',
      'Duvara yaslanmış yumuşak bedenini kendime bastırıyorum, {kalcaHis}; doruktayım offf 😩',
      'Seni ayakta kucaklayıp dudaklarını öperken önden vuruyorum, bacakların titremeye başladı… ahh 🔥',
      'Ellerim {kalca} kalçanın altında, seni havada sarılı tutuyorum; her inişte en derine oturuyorsun offf 🥵',
      'Alnım alnında, ayakta sımsıkı sarılıyız; {gogus} memelerinin uçları göğsüme sürtünüyor… ahhh {o} 😮‍💨',
      'Ayakta sarılıp yavaşça vuruyorum; sıcak karnın, yumuşak göğüslerin, belime dolanan bacağın… her şeyini hissediyorum ahhh 💦'
    ]
  },
  cumBackAnal: {
    label: '🤗💦 Sarılma · arkadan boşalma · Anal Creampie', events: ['Anal Creampie'], pos: H.cumBack.pos, rp: 'in',
    lines: [
      'Arkandan sımsıkı sarılıp {kalca} kalçana son kez bastırdım; o dar sıcaklığın içine boşalırken bütün gerginliğim akıyor… ahhhh 😩💦',
      'Sırtına yapışık, {gogus} memelerini sıkarak en derine gömülüyorum; tuttuğum her şey arkana fışkırıyor offf 🔥',
      'Dar kalçan beni sıktıkça bırakıyorum kendimi; dakikalardır biriken döl dalga dalga içine doluyor… ahhh {o} 🥵',
      'Ensene inleyerek boşalıyorum, {kalcaHis}; arkandaki sımsıkı sıcaklık son damlamı sağıyor… offf 💦',
      'Bütün ağırlığımla sırtına kapandım, kalçalarının arasına sonuna kadar gömülüp doluyorum; kasılmam çözülüyor ahhh 😮‍💨',
      'Bir elim göğsünde bir elim karnında, o kadar çok birikmiş ki arkan taşıyor; {gogusHis}, rahatlama tarifsiz ahh 😩',
      'Çıkmıyorum, arkandan sarılı kalıp dar içine son damlaya kadar boşaltıyorum… offf 💦',
      'Kulağına adını fısıldayarak kalçana bastırıyorum; uzun tutmanın karşılığı bu taşkınlık… ahhh {o} 🔥',
      'Titreyen bedenini kollarımda tutarken arkan beni sıkıp bırakmıyor, her zonklamada biraz daha hafifliyorum… ahh 💦',
      'Boşaldıktan sonra arkandan sarılı kalıyorum; yavaşça çıktığımda kalçalarının arasından süzülüyor… mmm 😌'
    ]
  },
  cumBackLegs: {
    label: '🤗💦 Sarılma · arkadan boşalma · Legs Creampie', events: ['Legs Creampie'], pos: H.cumBack.pos, rp: 'in', rub: H.cumBack.rub,
    lines: [
      'Arkandan sarılıp bacaklarının arasına sıkıştım, uyluklarını birleştirdin; o yumuşaklığın arasına boşalırken bütün yüküm akıyor… ahhhh 😩💦',
      'Sırtına yapışık, {gogus} memelerini sıkıyorum; bacaklarının arasında zonklayıp sıcacık boşalıyorum offf 🔥',
      'Uyluklarını sımsıkı kapattın, beni sağıyorsun; dakikalardır biriken döl bacaklarının arasına doluyor… ahhh {o} 🥵',
      'Ensene gömülüp inliyorum, {kalcaHis}; döl uyluklarının iç tarafından aşağı süzülüyor… offf 💦',
      'Bütün bedenimle arkana yaslandım, bacaklarının arasında kayarak boşalıyorum; kasılmam çözülüyor ahhh 😮‍💨',
      'Bir elim karnında seni kendime çekiyor, o kadar çok geliyor ki dizlerine kadar akıyor; rahatlama tarifsiz ahh 😩',
      'Sarılmayı bırakmadan bacaklarının arasında son damlaya kadar boşaltıyorum, yük kalktı… offf 💦',
      'Kulağına fısıldayarak bırakıyorum kendimi; sıcak dölüm uyluklarını yapış yapış ediyor… ahhh {o} 🔥',
      'Yumuşacık bacakların beni sıktıkça zonkluyorum, her atışta biraz daha hafifliyorum… ahh 💦',
      'Bitirince arkandan sarılı kalıp nefesleniyoruz; bacaklarının arası sıcacık ve ıslak… mmm 😌'
    ]
  },
  cumBackVisible: {
    label: '🤗💦 Sarılma · arkadan boşalma · Visible Creampie', events: ['Visible Creampie'], pos: H.cumBack.pos, rp: 'in', rub: H.cumBack.rub,
    lines: [
      'Arkandan sımsıkı sarılıp içine boşalıyorum; yarı saydam bedeninde beyaz bir bulut yayılıyor, görüyorum… ahhhh 😳💦',
      'Sırtına yapışık, {gogus} memelerini sıkarken boşalıyorum; dölüm şeffaf içinde süzülüyor offf 🔥',
      'Seni kollarımla sarıp bırakıyorum kendimi; biriken her şey içinde beyaz dalgalar halinde görünüyor… ahhh {o} 🥵',
      'Omzunun üstünden bakıyorum: karnının içinde dölüm parlıyor; {kalcaHis}… offf 💦',
      'Bütün ağırlığımla sırtına kapandım, her zonklamada içindeki beyaz bulut büyüyor… ahhh 😮‍💨',
      'Bir elim karnında, avucumun altında dolduğunu hem hissediyor hem görüyorum; rahatlama tarifsiz ahh 😩',
      'Çıkmıyorum, sarılı kalıp son damlayı da veriyorum; yarı saydam tenin bembeyaz oldu… offf 💦',
      'Kulağına fısıldıyorum: bak, ne kadar birikmiş; içinde süzülüşünü birlikte izliyoruz… ahhh {o} 🔥',
      'Titreyen jöle bedenin kollarımda dalgalanıyor, içindeki dölüm de onunla salınıyor… ahh 💦',
      'Boşaldıktan sonra arkandan sarılı kalıp karnını okşuyorum; içinde hâlâ beyaz bir bulut görünüyor… mmm 😌'
    ]
  },
  cumFrontAnal: {
    label: '🤗💦 Sarılma · önden boşalma · Anal Creampie', events: ['Anal Creampie'], pos: H.cumFront.pos, rp: 'in',
    lines: [
      'Seni sımsıkı sarıp alnımı alnına dayadım; dar sıcaklığın içine boşalırken bütün bedenim rahatlıyor… ahhhh 😩💦',
      '{gogus} göğüslerin göğsüme ezilmiş, bacakların omuzlarımda; biriken her şey arkana akıyor offf 🔥',
      'Gözlerine bakarak en derine bastırıyorum, kasarak tuttuğum döl dar içini dolduruyor… ahhh {o} 🥵',
      'Dudaklarını öperek bırakıyorum kendimi, arkan beni sıktıkça inlememiz karışıyor… offf 💦',
      'Ellerim {kalca} kalçanın altında, seni kendime çekip sonuna kadar gömülerek doluyorum; hafifledim… ahhh 😮‍💨',
      'Karın karına sarılıyken o kadar çok geliyor ki durmuyor; dar kalçan her zonklamamı sağıyor ahh 😩',
      'Boynuna gömülüp sarılarak boşalıyorum, uzun birikmenin taşkını arkanda… offf 💦',
      'Seni bırakmıyorum, kollarımda titriyorsun ve ben hâlâ doluyorum… ahhh {o} 🔥',
      'Kalbimiz aynı anda çarpıyor, sımsıkı sarılı içine bırakıyorum; içimde düğümlenen her şey çözüldü… ahh 💗💦',
      'Boşaldıktan sonra yumuşacık bedenine gömülüp gevşiyorum; yavaşça çıkınca kalçalarının arasından süzülüyor… mmm 😌'
    ]
  },
  cumFrontLegs: {
    label: '🤗💦 Sarılma · önden boşalma · Legs Creampie', events: ['Legs Creampie'], pos: H.cumFront.pos, rp: 'in', rub: H.cumFront.rub,
    lines: [
      'Seni karşıdan sarıp uyluklarının arasına sıkıştım; o yumuşaklığa boşalırken bütün yüküm akıyor… ahhhh 😩💦',
      '{gogus} göğüslerin göğsüme ezilmiş, bacaklarını birleştirip beni sağıyorsun; sıcacık boşalıyorum offf 🔥',
      'Gözlerine bakarak bacaklarının arasında zonkluyorum, döl iç uyluklarına doluyor… ahhh {o} 🥵',
      'Dudaklarını öperek bırakıyorum kendimi; dölüm bacaklarının arasından çarşafa süzülüyor… offf 💦',
      'Ellerim {kalca} kalçanda, seni kendime çekip uyluklarının arasına son kez kayıyorum; hafifledim… ahhh 😮‍💨',
      'Karın karına sarılıyken o kadar çok geliyor ki dizlerine kadar akıyor; rahatlama tarifsiz ahh 😩',
      'Boynuna gömülüp bacaklarının arasında boşalıyorum, uzun birikmenin hepsi tenine… offf 💦',
      'Seni bırakmıyorum, kollarımda titriyorsun, uyluklarının arası sıcacık doldu… ahhh {o} 🔥',
      'Sımsıkı sarılı bırakıyorum kendimi, yumuşak bacakların beni son damlaya kadar sıkıyor… ahh 💗💦',
      'Bitirince gevşeyip sana sarılı kalıyorum; bacaklarının arası ıslak ve sıcak… mmm 😌'
    ]
  },
  cumFrontVisible: {
    label: '🤗💦 Sarılma · önden boşalma · Visible Creampie', events: ['Visible Creampie'], pos: H.cumFront.pos, rp: 'in', rub: H.cumFront.rub,
    lines: [
      'Seni sımsıkı sarıp içine boşalıyorum; yarı saydam karnında beyaz bir bulut yayılıyor, gözlerimin önünde… ahhhh 😳💦',
      '{gogus} göğüslerin göğsüme ezilmiş, aşağı bakınca dölümün içinde süzüldüğünü görüyorum offf 🔥',
      'Bacakların belime kilitli, her zonklamada içindeki beyaz bulut büyüyor… ahhh {o} 🥵',
      'Dudaklarını öperken bırakıyorum kendimi, sen de karnına bakıp kızarıyorsun… offf 💦',
      'Ellerim {kalca} kalçanın altında, en derine bastırıp doldurduğumu izliyorum… ahhh 😮‍💨',
      'Karın karına sarılıyken bile şeffaf teninin arasından dölümü görüyorum; rahatlama tarifsiz ahh 😩',
      'Boynuna gömülüp boşalıyorum, içinde bembeyaz bir iz bıraktım… offf 💦',
      'Kollarımda titreyen jöle bedeninde dölüm dalga dalga salınıyor… ahhh {o} 🔥',
      'Sımsıkı sarılı bıraktım kendimi, yarı saydam karnın sütlü bir renge döndü… ahh 💗💦',
      'Boşaldıktan sonra karnını okşuyorum; içinde hâlâ beyaz bir bulut parlıyor… mmm 😌'
    ]
  },
  cumFrontRed: {
    label: '🤗💦 Sarılma · önden boşalma · Red Bath Creampie', events: ['Red Bath Creampie'], pos: H.cumFront.pos, rp: 'in', rub: H.cumFront.rub,
    lines: [
      'Kırmızı suyun içinde sana sımsıkı sarıldım; içine boşalırken su etrafımızda dalgalanıyor… ahhhh 😩💦',
      '{gogus} göğüslerin ıslak göğsüme ezilmiş, sıcak kırmızı suda biriken her şey içine akıyor offf 🔥',
      'Bacakların belime kilitli, küvetin kenarına yaslanıp seni kendime bastırarak doluyorum… ahhh {o} 🥵',
      'Islak dudaklarını öperek bırakıyorum kendimi, su taşıp yere dökülüyor… offf 💦',
      'Ellerim suyun altında {kalca} kalçanda, seni kendime çekip en derinde boşaltıyorum… ahhh 😮‍💨',
      'Kırmızı suda karın karına sarılıyken o kadar çok geliyor ki durmuyor; her zonklamada hafifliyorum ahh 😩',
      'Boynuna gömülüp sıcak suyun içinde doluyorum, buhar yüzümüze vuruyor… offf 💦',
      'Kollarımda titriyorsun, kırmızı su tenine yapışmış; ben hâlâ boşalıyorum… ahhh {o} 🔥',
      'Sımsıkı sarılı bırakıyorum kendimi, küvetin içinde kalbimiz aynı anda çarpıyor… ahh 💗💦',
      'Boşaldıktan sonra sıcak kırmızı suda sana sarılı gevşiyorum… mmm 😌'
    ]
  },
  cumOutDressed: {
    label: '🤗💦 Sarılma · dışarı boşalma · Dressed Ass Cumshot', events: ['Dressed Ass Cumshot'], rp: 'out',
    lines: [
      'Arkandan sarılıyken son anda çıktım; eteğinin üstüne, {kalca} kalçana fışkırırken bütün bedenim gevşiyor… ahhhh 😩💦',
      'Seni kendime bastırıp kıyafetinin üstüne bırakıyorum; kumaş ıslanıp tenine yapışıyor offf 🔥',
      'Göğsüm sırtında, {gogus} memelerini sıkarken dakikalardır biriken döl eteğini boyuyor… ahhh {o} 🥵',
      'Sımsıkı sarılı halde külotunun üstüne sürtünerek boşalıyorum; kumaşın arasından sızıyor… offf 💦',
      'Ensende inleyerek bırakıyorum kendimi, kıyafetinin üstü sıcacık ıslandı ahh 😮‍💨',
      'O kadar çok geliyor ki eteğinden aşağı süzülüyor; her fışkırışta hafifliyorum… ahhh 😩',
      'Bir elim karnında seni tutuyor, uzun tutmanın bütün birikimi kıyafetine akıyor… offf 💦',
      'Kalçandaki kumaşa son damlayı da bırakıyorum; giyinikken bile işaretledim seni… ahh {o} 🔥',
      'Eteğin ve sırtın ıslandı, ikimiz nefes nefese; bu rahatlama tarifsiz… ahhh 💦',
      'Bitirince arkandan sarılıp ıslak eteğini düzeltiyorum; böyle dışarı çıkamazsın… mmm 😏'
    ]
  },
  cumOutLeg: {
    label: '🤗💦 Sarılma · dışarı boşalma · Leg Cumshot', events: ['Leg Cumshot'], rp: 'out',
    lines: [
      'Arkandan sarılıyken son anda çıktım; o kadar birikmişti ki uyluklarına fışkırırken bütün bedenim gevşiyor… ahhhh 😩💦',
      'Seni kendime bastırıp yumuşak bacaklarına bırakıyorum; döl dizlerine doğru süzülüyor offf 🔥',
      'Göğsüm sırtında, {gogus} memelerini sıkarken dakikalardır biriken döl bacaklarını boyuyor… ahhh {o} 🥵',
      'Sımsıkı sarılı halde uyluğuna sürtünerek boşalıyorum; içimdeki baskı dalga dalga çıkıyor… offf 💦',
      'Ensende inleyerek bırakıyorum kendimi, sıcaklık bacaklarından aşağı yayılıyor ahh 😮‍💨',
      'O kadar çok geliyor ki baldırlarına kadar akıyor; her fışkırışta hafifliyorum… ahhh 😩',
      'Bir elim karnında seni tutuyor, uzun tutmanın bütün birikimi bacaklarına akıyor… offf 💦',
      'İç uyluklarına son damlayı da bırakıyorum, sarılmayı bırakmadan; yük kalktı… ahh {o} 🔥',
      'Bacakların ıslandı, ikimiz nefes nefese; bu rahatlama tarifsiz… ahhh 💦',
      'Bitirince arkandan sarılıp ıslak bacaklarını okşuyorum… mmm 😌'
    ]
  },
  holdHard: {
    label: '🤗 Sarılma · tutma · Hard Holding', events: ['Hard Holding'], rp: 'hold',
    lines: [
      'Seni sımsıkı sarıp kendi dibimi parmaklarımla sıkıyorum; döl ucuma dayandı ama geri itiyorum… offf 😣',
      'Bedenin o kadar yumuşak ki dayanmak imkânsız; bütün kaslarımı kasıp sertçe tutuyorum ahh 😩',
      'Sarılırken {gogus} göğüslerin göğsüme sürtünüyor, dişlerimi sıkıp boşalmayı zorla durduruyorum… offf {o} 🥵',
      'Bu sefer daha sıkı tutuyorum; taşaklarım şişiyor, zonkluyor ama bırakmıyorum… ahh 😮‍💨',
      'Kalçanı tutup kıpırdatmıyorum, nefesimi kesip yükselen her damlayı aşağı bastırıyorum… offf 😣',
      'Kulağına "kıpırdama" diye fısıldıyorum, sınırdayım; kasılarak tutuyorum ahh 😳',
      'Kollarımda o yumuşaklık, içimde patlamak üzere bir baskı; daha sert sıkıyorum… offf 😩',
      '{kalca} kalçan bir kez kıpırdasa biter; ter içinde, kasıklarımı kilitleyip tutuyorum… ahh 🥵',
      'Tenine yapıştım, kalbim göğsümden fırlayacak; biriken dölü geri gönderiyorum offf 🔥',
      'Zor tutuyorum ama değecek; biriktikçe kocaman bir yük oluyor, hepsi senin için ahh 💗'
    ]
  },
  holdRing: {
    label: '🤗 Sarılma · tutma · Cock Ring', events: ['Cock Ring'], rp: 'hold',
    lines: [
      'Seni sımsıkı sarıyorum, halka dibimi sıkıyor; döl içimde birikiyor ama çıkamıyor… offf 😣',
      'Halka yüzünden daha da sertim, yumuşak bedenine sarıldıkça zonkluyorum ahh 😩',
      'Sarılırken {gogus} göğüslerin göğsüme eziliyor, halka boşalmama izin vermiyor… offf {o} 🥵',
      'Halka sımsıkı, ben kıpkırmızı; kollarımda eriyorsun, ben patlayamıyorum… ahh 😮‍💨',
      'Kalçanı kendime bastırıyorum, halka her zonklamayı içimde hapsediyor… offf 😣',
      'Kulağına inliyorum, halka yüzünden sınırda asılı kaldım ahh 😳',
      'Kollarımda o yumuşaklık, dibimde halkanın baskısı; taşaklarım dolup dolup taşıyor… offf 😩',
      '{kalca} kalçan bana sürtündükçe halka daha da sıkıyor gibi… ahh 🥵',
      'Tenine yapıştım, halka her şeyi tutuyor; çıkardığında sel gibi olacak offf 🔥',
      'Sarılı ve kıpırdamadan; halka sayesinde her şey sana saklanıyor ahhh 💗'
    ]
  },
  holdGrip: {
    label: '🤗 Sarılma · tutma · Death Grip', events: ['Death Grip'], rp: 'hold',
    lines: [
      'Sana sımsıkı sarıldım ama sen dibimi bütün gücünle sıkıyorsun; boşalamıyorum… offf 😣',
      'Yumuşacık bedenine gömüldüm, elin dibimde mengene gibi; izin vermeden bitiremem ahh 😩',
      'Sarılırken {gogus} göğüslerin göğsüme eziliyor, sen gülümseyip sıkmaya devam ediyorsun… offf {o} 🥵',
      'Kulağına yalvarıyorum ama elin gevşemiyor; döl ucumda kapana kısıldı ahh 😮‍💨',
      'Kalçanı kendime çekiyorum, sen daha sert sıkıyorsun; titreyerek sana sarılıyorum… offf 😣',
      'Lütfen {o}… sarılıyorum, öpüyorum, ama bırakmıyorsun ahh 😳',
      'Kollarımda o yumuşaklık, dibimde senin demir gibi elin; deliriyorum… offf 😩',
      '{kalca} kalçana sürtündükçe zonkluyorum, ama parmakların her şeyi geri itiyor… ahh 🥵',
      'Tenine yapıştım, sana teslim oldum; ne zaman istersen o zaman… offf 💗',
      'Seni bırakmadan sarılıyorum, izin vermeni bekliyorum; biriktikçe kocaman şişiyor ahhh 😩'
    ]
  }
}))(Stories.ME_HUG_LINES);

/* 🎭🤗 Rolde sarılma: süren rol (fantKey) bu listedeyse sarılma mesajı o rolün ağzından gelir (🎭 Role-play açıkken %70, değilse %45).
 * Grup sarılma olayının rp alanından: pos (Doggy / Missionary …) · in (içine boşalma) · out (dışarı boşalma) · hold (tutma); kondomluyken yok */
Stories.ME_RP_HUG_LINES = {
  fxrpklinik: {
    pos: [
      'Doktor hanım, size sımsıkı sarıldım; önlüğünüzün altındaki {gogus} göğüsleriniz göğsüme eziliyor… ahhh 🩺😩',
      'Muayene masasında arkanızdan sarılıyorum, stetoskop sallanıyor; {kalcaHis} offf 🥵',
      'Nabzımı ölçmek ister misiniz? Size sarılınca kalbim deli gibi atıyor… ahh 💓',
      'Önlüğünüz açıldı, sıcak teninize yapıştım; bu tedavi hiç bitmesin doktor hanım 😩',
      'Sarıldıkça soğuk masa ısınıyor, {kalca} kalçanız kasıklarıma çarpıyor offf 🔥',
      'Kapı kilitli değil ama sizi bırakamıyorum, sımsıkı sarılıp derine iniyorum… ahhh 😳',
      'Gözlüğünüz kaydı, ben boynunuza gömüldüm; reçeteye sarılmayı yazın ahh 🥼',
      'Hemşire girerse ne deriz? Umurumda değil, size sarılı kalıyorum offf 🙈',
      'Yumuşacık bedeninizi kollarıma aldım doktor hanım, {gogusHis}… ahh 💗',
      'Bu muayene en sevdiğim tedavi; size sarılıp her vuruşta inliyorum ahhh 😮‍💨'
    ],
    in: [
      'Doktor hanım, size sımsıkı sarılıp içinize boşalıyorum… numune kabına gerek kalmadı ahhhh 😩💦',
      'Önlüğünüzün altında sarılı kalıp biriken her şeyi içinize bırakıyorum; tedavi tamamlandı offf 🩺',
      'Kollarımda titriyorsunuz, ben hâlâ doluyorum; bunu dosyaya yazmayın… ahhh 🙈💦',
      'Stetoskopu göğsüme koyun, boşalırken kalbimin nasıl attığını duyun ahh 💓',
      'Muayene masasında size kapanıp en derine bırakıyorum, bütün şikayetim geçti… offf 😮‍💨',
      'Size sarılıp doldurdum doktor hanım; kontrol randevusu yarın mı? 😏💦',
      'Boynunuza gömülüp inleyerek boşalıyorum, gözlüğünüz buğulandı… ahhh 🥼',
      'Biriken her şeyi içinize akıttım, kendimi hiç bu kadar sağlıklı hissetmemiştim ahh 💗',
      'Hasta tamamen rahatladı, doktoru da doldurdu… size sarılı kalıyorum offf 😳💦',
      'Boşaldıktan sonra önlüğünüze sarılıp nefesleniyorum… mmm iyileştim 😌'
    ],
    out: [
      'Doktor hanım, size sarılıyken son anda çıktım; önlüğünüzün üstüne fışkırıyor… özür dilerim ahhhh 😩💦',
      'Arkanızdan sarılıp {kalca} kalçanıza boşalıyorum, muayene masasına damlıyor offf 🩺',
      'Önlüğünüz bembeyaz oldu ama bambaşka bir beyaz… ahh 😳💦',
      'Sımsıkı sarılı halde teninize bırakıyorum, numune almak ister misiniz? 😏',
      'Kollarımda tutarken bacaklarınıza akıyor doktor hanım, bütün gerginliğim gitti… offf 😮‍💨',
      'Size sarılıp sırtınıza boşalıyorum, stetoskopunuz bile ıslandı ahhh 🙈',
      'Biriken her şey teninize aktı, tedavi işe yaradı… ahh 💗',
      'Muayene kâğıdı sırılsıklam oldu, hemşire görmesin offf 😆💦',
      'Sarılmayı bırakmadan son damlayı da kalçanıza bırakıyorum… ahhh 🥵',
      'Bitirince arkanızdan sarılıp kulağınıza fısıldıyorum: teşekkürler doktor hanım… mmm 😌'
    ],
    hold: [
      'Doktor hanım, size sarılıyım ama tutmam gerekiyor; bu da tedavinin parçası mı? offf 😣',
      'Sabırlı olun dediniz; dişlerimi sıkıp boşalmayı geri itiyorum… ahh 🩺',
      'Sarılırken {gogus} göğüsleriniz göğsüme eziliyor, nasıl tutayım? offf 😩',
      'Nabzım 180, ama talimatınıza uyuyorum, bırakmıyorum ahh 💓',
      'Önlüğünüze sımsıkı sarılıp kasıklarımı kilitliyorum, biriktir diyorsunuz… offf 🥵',
      'Kulağıma "daha değil" diye fısıldadınız, titreyerek tutuyorum ahh 😳',
      'Muayene masası sallanıyor, ben sınırdayım ama bırakmıyorum doktor hanım… offf 😣',
      'Size sarıldıkça zonkluyorum, biriken numune büyüyor… ahh 😮‍💨',
      'Tedavi bitince hepsini size vereceğim, söz; şimdilik tutuyorum offf 💗',
      'Gözlerinize bakıp kasılarak tutuyorum, aferin dediğinizi duymak istiyorum ahh 🥼'
    ]
  },
  fxrpvampir: {
    pos: [
      'Soğuk bedenine sımsıkı sarıldım kontesim, {gogus} göğüslerin göğsüme buz gibi eziliyor… ahhh 🧛‍♀️😩',
      'Pelerininin altında arkandan sarılıyorum, şatonun duvarları inlemeni yansıtıyor offf 🏰',
      'Boynumu dudaklarına uzatıp sana sarılıyorum, {kalcaHis}… ahh 🩸',
      'Soğuk tenin kollarımda ısınıyor, her vuruşta biraz daha canlanıyorsun offf 🥵',
      'Mum ışığında sana sarıldım, kırmızı gözlerin gözlerimde… ahhh 🕯️',
      'Tabutun kenarında sımsıkı sarılıyız, {kalca} kalçan kasıklarıma çarpıyor offf 🖤',
      'Dişlerini omzumda hissediyorum, ben seni daha sıkı sarıyorum… ahh 😈',
      'Ölümsüz bedenini kendime bastırıyorum, kalbim ikimiz için atıyor offf 💓',
      'Şafağa kadar sarılı kalacağım kontes, {gogusHis}… ahhh 🌙',
      'Saçların siyah ipek gibi yüzüme dökülüyor, sana gömülüp derine iniyorum… ahh 🦇'
    ],
    in: [
      'Soğuk bedenine sımsıkı sarılıp içine boşalıyorum kontesim; sıcaklığım içine yayılıyor… ahhhh 🧛‍♀️💦',
      'Dişlerin boynumda, kollarım sende; biriken her şeyi ölümsüz içine bırakıyorum offf 🩸',
      'Şafak sökmeden seni doldurdum, sarılı kalıyorum… ahhh 🌙',
      'Buz gibi için benimle ısınıyor, her zonklamada biraz daha canlanıyorsun ahh 🥵',
      'Pelerinine sarılıp en derinde boşaltıyorum, mumlar titriyor… offf 🕯️',
      'Kanımı değil, başka bir şeyimi aldın; hepsini içine verdim kontes ahhh 😈💦',
      'Kollarımda titreyen soğuk bedenin ilk kez sıcak… ahh 🖤',
      'Boynuna gömülüp inleyerek doluyorum, şato yankılanıyor offf 🏰',
      'Ölümlü misafirin her şeyini içine akıttı, sımsıkı sarılıyım ahh 💗💦',
      'Boşaldıktan sonra soğuk tenine sarılı gevşiyorum… mmm sıcaklığım sende kaldı 😌'
    ],
    out: [
      'Arkandan sarılıyken son anda çıktım kontes; soğuk kalçana sıcacık fışkırıyor… ahhhh 🧛‍♀️💦',
      'Pelerinine, bembeyaz tenine boşalıyorum; şatoda ilk kez böyle bir iz offf 🏰',
      'Buz gibi tenin dölümle ısınıyor, sana sarılıp son damlayı da bırakıyorum… ahh 🥵',
      'Mum ışığında {kalca} kalçan parlıyor, ben hâlâ fışkırıyorum offf 🕯️',
      'Sımsıkı sarılı halde sırtına boşalıyorum, siyah saçlarına bile sıçradı ahhh 🖤',
      'Kırmızı gözlerin omzunun üstünden bana bakıyor, tenine akıttım her şeyi… ahh 😈',
      'Soğuk bacaklarından süzülüyor, sarılmayı bırakmıyorum offf 💦',
      'Ölümsüz bedenini işaretledim kontes, şafak bile silemez ahh 🌙',
      'Tabutun kadife örtüsü de ıslandı, pardon… offf 😆',
      'Bitirince arkandan sarılıp boynunu öpüyorum, bu sefer ben ısırmadım… mmm 😌'
    ],
    hold: [
      'Soğuk bedenine sarılıyım ama tutmam gerek kontes; boşalmama izin ver diye yalvarıyorum… offf 😣',
      'Dişlerin boynumda, döl ucumda; ikisine birden dayanamıyorum ahh 🩸',
      'Sarılırken {gogus} göğüslerin buz gibi göğsüme eziliyor, kasılarak tutuyorum… offf 🥵',
      'Şafağa kadar dayanmamı istiyorsun, dişlerimi sıkıp geri itiyorum ahh 🌙',
      'Pelerinine sımsıkı sarılıp kasıklarımı kilitliyorum, yükseleni geri gönderiyorum… offf 😩',
      'Kırmızı gözlerin bana "daha değil" diyor, titreyerek tutuyorum ahh 🧛‍♀️',
      'Ölümsüz sabrın var ama benim yok; yine de bırakmıyorum offf 😣',
      'Soğuk tenine yapıştım, kalbim deli gibi atıyor, biriken yük büyüyor… ahh 💓',
      'Hepsini sana saklıyorum kontes, şafak sökünce vereceğim offf 🖤',
      'Mum ışığında ter içinde sana sarılı tutuyorum, aferin dediğini duymak istiyorum ahh 🕯️'
    ]
  },
  fxrpcadi: {
    pos: [
      'Hocam, size sımsıkı sarıldım; cübbenizin altındaki {gogus} göğüsleriniz göğsüme eziliyor… ahhh 🧙‍♀️😩',
      'Kazanın yanında arkanızdan sarılıyorum, buhar etrafımızı sarıyor; {kalcaHis} offf 🫕',
      'Şapkanız düştü, saçlarınıza gömülüp sarılıyorum; bu hangi büyü? ahh 🔮',
      'Sarıldıkça bedenim yanıyor, iksir mi içirdiniz bana? offf 🥵',
      'Mum ışığında sımsıkı sarılıyız, {kalca} kalçanız kasıklarıma çarpıyor… ahhh 🕯️',
      'Büyü kitabı yere düştü, ben size sarılı derine iniyorum offf 📖',
      'Kulağıma büyü fısıldıyorsunuz, ben daha sıkı sarılıyorum… ahh 😈',
      'Çırağınız sizi bırakamıyor hocam, lanetlendim herhalde offf 😩',
      'Kristal küre parlıyor, size sarılıyım; {gogusHis}… ahhh 🔮',
      'Ay ışığında yumuşacık bedeninize sarılıp her vuruşta inliyorum ahh 🌙'
    ],
    in: [
      'Hocam, size sımsıkı sarılıp içinize boşalıyorum; iksirin son malzemesi bu… ahhhh 🧪💦',
      'Cübbenizin altında sarılı kalıp biriken her şeyi içinize akıtıyorum offf 🧙‍♀️',
      'Kazan taştı, ben de taştım; sizi kollarımda tutarken doluyorsunuz… ahhh 🫕',
      'Büyü tuttu mu? İçinize bıraktıkça bedeniniz parlıyor ahh 🔮',
      'Boynunuza gömülüp inleyerek boşalıyorum, mumlar söndü… offf 🕯️',
      'Çırağınız görevini yaptı hocam, hepsi içinizde ahhh 😈💦',
      'Kollarımda titriyorsunuz, ben hâlâ doluyorum; lanet bu mu? ahh 😩',
      'Ay ışığında sarılı en derine bırakıyorum, büyü tamamlandı… offf 🌙',
      'Biriken her şeyi verdim, beni kurbağaya çevirmeyin ahh 😆💦',
      'Boşaldıktan sonra cübbenize sarılı gevşiyorum… mmm büyülendim 😌'
    ],
    out: [
      'Hocam, sarılıyken son anda çıktım; cübbenize fışkırıyor… ahhhh 🧙‍♀️💦',
      'Arkanızdan sarılıp {kalca} kalçanıza boşalıyorum, iksir şişesine bile damladı offf 🧪',
      'Büyü kitabının üstüne aktı, sayfalar yapıştı… ahh 📖😳',
      'Sımsıkı sarılı halde teninize bırakıyorum, iksire koyacak mısınız? 😏💦',
      'Kazanın başında bacaklarınıza akıyor, buhar yükseliyor offf 🫕',
      'Sırtınıza boşalıyorum, saçlarınıza kadar sıçradı hocam ahhh 🔮',
      'Biriken her şey teninize aktı, büyü bozuldu mu? ahh 😈',
      'Süpürgenin sapına bile bulaştı, pardon offf 🧹😆',
      'Sarılmayı bırakmadan son damlayı da kalçanıza bırakıyorum… ahhh 🥵',
      'Bitirince arkanızdan sarılıp kulağınıza fısıldıyorum: ders bitti mi? mmm 😌'
    ],
    hold: [
      'Hocam, size sarılıyım ama tutmam lazım; bu da büyünün parçası mı? offf 😣',
      'İksir için biriktirmem gerek dediniz, dişlerimi sıkıp geri itiyorum… ahh 🧪',
      'Sarılırken {gogus} göğüsleriniz göğsüme eziliyor, nasıl dayanayım? offf 😩',
      'Kulağıma bir büyü fısıldıyorsunuz, döl ucumda donup kalıyor ahh 🔮',
      'Cübbenize sımsıkı sarılıp kasıklarımı kilitliyorum offf 🥵',
      'Kazan kaynıyor, ben de; ama bırakmıyorum hocam… ahh 🫕',
      'Lanet beni tutuyor sanki, sınırdayım ama gelmiyor offf 😣',
      'Size sarıldıkça zonkluyorum, biriken yük iksiri güçlendirecek… ahh 😮‍💨',
      'Ay dolunca hepsini vereceğim, şimdilik tutuyorum offf 🌙',
      'Çırağınız sabırlı, ter içinde sarılı tutuyorum; aferin deyin ahh 💗'
    ]
  },
  fxrpofis: {
    pos: [
      'Masanın başında arkandan sımsıkı sarıldım, gömleğinin altındaki {gogus} göğüslerini avuçluyorum… ahhh 💼😩',
      'Etek kalemin yukarı sıyrıldı, seni kendime bastırıyorum; {kalcaHis} offf 🔥',
      'Kapı kilitli, sana sarılıp ensene inliyorum; muhasebe duymasın… ahh 🤫',
      'Masaya eğilmişsin, ben sırtına kapandım; dosyalar yere döküldü offf 📂',
      'Saten gömleğin açıldı, sıcak tenine yapıştım; mesai bitmesin ahhh 👔',
      'Koltuğumda seni kucaklayıp sarılıyorum, {kalca} kalçan kucağımda… offf 🥵',
      'Telefon çalıyor, açmıyorum; sana sımsıkı sarılıp derine iniyorum ahh 📞',
      'Jartiyerin göründü, sarıldıkça çıldırıyorum… offf 😈',
      'Asansörden beri bunu bekliyordum, sana sarılıyım; {gogusHis}… ahhh 💗',
      'Pencerenin önünde sana sarılıyım, bütün şehir izliyor gibi… ahh 🏙️'
    ],
    in: [
      'Masanın üstünde sana sımsıkı sarılıp içine boşalıyorum; mesai resmen bitti… ahhhh 💼💦',
      'Gömleğinin altında sarılı kalıp biriken her şeyi içine bırakıyorum offf 👔',
      'Kollarımda titriyorsun, ben hâlâ doluyorum; bunu kimse öğrenmeyecek… ahhh 🤫💦',
      'Koltuğumda kucağımda sarılıyken en derine bıraktım, terfiyi hak ettin ahh 😏',
      'Ensene gömülüp inleyerek boşalıyorum, yan odadakiler duydu mu? offf 😳',
      'Toplantıya geç kalıyoruz ama seni doldurmadan bırakmam ahhh 😈',
      'Dosyaların arasında sarılı kalıp son damlaya kadar veriyorum… ahh 📂',
      'Biriken bütün stresimi içine akıttım, sekreterim harika offf 💗💦',
      'Jartiyerin yerinde, ama içine taşan her şey benim… ahh 🥵',
      'Boşaldıktan sonra sana sarılı koltukta gevşiyorum… mmm rapor yarına kalsın 😌'
    ],
    out: [
      'Arkandan sarılıyken son anda çıktım; etek kaleminin üstüne fışkırıyor… ahhhh 💼💦',
      'Seni masaya bastırıp {kalca} kalçana boşalıyorum, raporlara damlıyor offf 📂',
      'Saten gömleğinin sırtı ıslandı, kuru temizleme benden… ahh 😏',
      'Sımsıkı sarılı halde çoraplarına akıyor, jartiyerine kadar… offf 🥵',
      'Ensende inleyerek bırakıyorum kendimi, sıcaklık beline yayılıyor ahh 😮‍💨',
      'Klavyeye bile sıçradı, o mail gönderilmesin offf 😆',
      'Biriken her şey kalçana aktı, bütün stres gitti… ahhh 💦',
      'Sarılmayı bırakmadan son damlayı da eteğine bırakıyorum… ahh 🔥',
      'Böyle çıkarsan herkes anlar, biraz daha odamda kal offf 🤫',
      'Bitirince arkandan sarılıp boynunu öpüyorum, mesai sonu… mmm 😌'
    ],
    hold: [
      'Sana sarılıyım ama toplantıdan önce bitiremem; dişlerimi sıkıp tutuyorum… offf 😣',
      'Telefon çalıyor, sen kıpırdama; boşalmayı geri itiyorum ahh 📞',
      'Sarılırken {gogus} göğüslerin gömleğinin altından göğsüme eziliyor, zor tutuyorum… offf 😩',
      'Kapının önünden biri geçti, sınırdayım ama sessizce tutuyorum ahh 🤫',
      'Koltukta sana sımsıkı sarılıp kasıklarımı kilitliyorum offf 🥵',
      'Mesai bitene kadar biriktireceğim, hepsi akşam senin… ahh 💼',
      'Jartiyerine dokundukça patlayacağım ama bırakmıyorum offf 😣',
      'Sana sarıldıkça zonkluyorum, biriken yük büyüyor… ahh 😮‍💨',
      'Patron sabırlıdır; ter içinde sarılı tutuyorum offf 👔',
      'Gözlerine bakıp kasılarak tutuyorum, sen gülümsüyorsun ahh 😈'
    ]
  },
  fxinek: {
    pos: [
      'Arkandan sımsıkı sarılıp {gogus} göğüslerini sıkıyorum, sütün parmaklarımdan fışkırıyor… ahhh 🐮🍼',
      'Sana sarıldıkça çanın şıngırdıyor, {kalcaHis} offf 🔔',
      'Benekli tenine yapıştım, sütün göğsüme akıyor; bırakmıyorum seni… ahh 🍼😩',
      'Boynuzlarını tutup sarılıyorum, sütün çarşafı ıslattı offf 🥵',
      'Seni kucaklayıp ucunu ağzıma alıyorum, emerken derine iniyorum… ahhh 🍼',
      'Sımsıkı sarılıyım, süt kokun her yerde; {gogusHis} offf 😩',
      'Göğüslerin aramızda eziliyor, ikimiz de sütüne bulandık… ahh 🐮💦',
      'Kollarımda möölüyorsun, ben daha sıkı sarılıyorum offf 😆',
      'Sana sarılıp sağıyorum, bir yandan da {kalca} kalçana vuruyorum… ahhh 🍼🔥',
      'Yumuşacık, sıcacık, süt kokulu… sana gömülüp eriyorum ahh 💗'
    ],
    in: [
      'Sana sımsıkı sarılıp içine boşalıyorum, göğüslerinden süt fışkırıyor… ahhhh 🐮💦🍼',
      'Ucunu emerken sarılı kalıp biriken her şeyi içine bırakıyorum offf 🍼',
      'Çanın şıngırdıyor, ben seni dolduruyorum… ahhh 🔔💦',
      'Sütün göğsüme akarken sarılı en derine boşaltıyorum ahh 🥵',
      'İkimizin sütü karıştı, sana sarılı kalıyorum offf 😳💦',
      'Kollarımda titriyorsun, göğüslerin taşıyor, ben de içine taşıyorum ahhh 🍼',
      'Boynuzlarına tutunup son damlaya kadar veriyorum… ahh 🐮',
      'Sen süt verdin, ben içine verdim; sarılı ödeştik offf 😈💦',
      'Sütüne bulanmış bedenine sarılıyım, boşalmam bitmiyor… ahhh 🥵',
      'Boşaldıktan sonra göğsüne gömülüp sütünü emerek gevşiyorum… mmm 🍼😌'
    ],
    out: [
      'Arkandan sarılıyken son anda çıktım; benekli kalçana fışkırıyor… ahhhh 🐮💦',
      'Senin sütün göğsünden, benimki {kalca} kalçana… her yer bembeyaz offf 🍼',
      'Sımsıkı sarılı halde sırtına boşalıyorum, çanın hâlâ şıngırdıyor ahh 🔔',
      'Bacaklarına akıyor, sütünle karışıyor… offf 😳💦',
      'Göğüslerini sıkarken boşalıyorum, ikimiz aynı anda fışkırıyoruz ahhh 🍼',
      'Benekli tenin beyaz beneklerle doldu… ahh 😆',
      'Biriken her şey tenine aktı, süt kokusuna karıştı offf 💦',
      'Sarılmayı bırakmadan son damlayı da kalçana bırakıyorum… ahhh 🐮',
      'Saman bile ıslandı, çiftlik sahibi görmesin ahh 😆',
      'Bitirince arkandan sarılıp göğüslerini okşuyorum, sütün hâlâ damlıyor… mmm 🍼😌'
    ],
    hold: [
      'Sana sarılıyım, sütün göğsüme akıyor; ama tutuyorum… offf 😣🍼',
      'Ucunu emerken boşalmamak işkence, dişlerimi sıkıyorum ahh 🐮',
      'Sarılırken {gogus} göğüslerin sütle eziliyor, nasıl tutayım? offf 😩',
      'Çanın her şıngırtısında az kalsın bitiyorum, kasılarak tutuyorum ahh 🔔',
      'Benekli tenine sımsıkı sarılıp kasıklarımı kilitliyorum offf 🥵',
      'Sen sağılıyorsun, ben biriktiriyorum… ahh 🍼',
      'Süt kokusu aklımı alıyor ama bırakmıyorum offf 😣',
      'Sana sarıldıkça zonkluyorum, biriken yük senin sütün kadar bol… ahh 😮‍💨',
      'Hepsini sana saklıyorum ineğim, şimdilik tutuyorum offf 🐮',
      'Ter ve süt içinde sarılı tutuyorum, möö deyip gülüyorsun ahh 😆'
    ]
  },
  fxrplimon: {
    pos: [
      'Arkandan sımsıkı sarıldım, jöle bedenin bana kalıp gibi oturdu; ekşi suyun karnıma akıyor… ahhh 🍋😩',
      'Sana sarıldıkça sıkılıyorsun, limon suyun fışkırıyor; {kalcaHis} offf 💦',
      'Yarı saydam tenine yapıştım, parmaklarım limon kokuyor… ahh 💛',
      '{gogus} göğüslerini avuçlayınca ekşi damlalar parmaklarımdan süzülüyor offf 🍋',
      'Seni kucaklayıp boynunu yalıyorum, dilim karıncalanıyor… ahhh 😆',
      'Sımsıkı sarılıyım, yumuşacık bedenin her vuruşta dalgalanıyor; {gogusHis} offf 🥵',
      'Sana gömüldükçe yüzüm buruşuyor ama bırakmıyorum… ahh 😖',
      'Kollarımda sapsarı parlıyorsun, limon kokun odayı sardı offf 🍋',
      'Jöle kalçan bana yapıştı, sarıldıkça içine daha çok çekiyorsun… ahhh 🫠',
      'Serin ve ekşi bedenine sarılıp ısınıyorum, limonata gibi köpürüyoruz ahh 💦'
    ],
    in: [
      'Sana sımsıkı sarılıp içine boşalıyorum; yarı saydam karnında beyaz bir bulut yayılıyor… ahhhh 🍋💦',
      'Ekşi için beni sağıyor, sarılı kalıp her şeyi bırakıyorum offf 💛',
      'Limonlu krema oldun, kollarımda titriyorsun… ahhh 😳',
      'Jöle bedenin beni sarıyor, son damlaya kadar içine akıyor ahh 🫠',
      'Sıktıkça suyun fışkırıyor, ben de içine fışkırıyorum offf 🍋💦',
      'Tuzlu ve ekşi karıştı, sana sarılı tekila gibi olduk… ahhh 🧂',
      'Ensene gömülüp boşalıyorum, limon kokusu başımı döndürüyor ahh 😩',
      'Biriken her şeyi ekşi içine verdim, sımsıkı sarılıyım offf 💗💦',
      'İçindeki beyazlık sarı teninden görünüyor, okşuyorum… ahh 👀',
      'Boşaldıktan sonra serin jöle bedenine sarılı gevşiyorum… mmm 🍋😌'
    ],
    out: [
      'Arkandan sarılıyken son anda çıktım; sarı kalçana fışkırıyor, limonlu krema oldun… ahhhh 🍋💦',
      'Yarı saydam sırtına boşalıyorum, damlalar teninde inci gibi parlıyor offf 💛',
      'Sımsıkı sarılı halde jöle bedenine akıyor, yavaşça emiliyor… ahh 🫠',
      'Ekşi suyunla benimki karıştı, her yer yapış yapış offf 😆',
      'Bacaklarına süzülüyor, limon kokusuna karışıyor… ahhh 💦',
      'Limon turtası gibi oldun, üstü kremalı ahh 🥧',
      'Biriken her şey teninde parlıyor, sarılmayı bırakmıyorum offf 🍋',
      'Kalçanı sıkınca suyun da fışkırdı, ikimiz aynı anda ahhh 💦',
      'Tezgâh limonata gölü oldu… ahh 😆',
      'Bitirince arkandan sarılıp yapış yapış sırtını öpüyorum… mmm ekşi 😌'
    ],
    hold: [
      'Sana sarılıyım, jöle bedenin beni sıkıyor; ama tutuyorum… offf 😣🍋',
      'Ekşi içinde boşalmamak işkence, dişlerimi sıkıyorum ahh 💛',
      'Sarılırken {gogus} göğüslerin göğsüme eziliyor, limon suyun akıyor; nasıl tutayım? offf 😩',
      'Sıktıkça sen fışkırıyorsun, ben biriktiriyorum… ahh 💦',
      'Yarı saydam tenine yapıştım, kasıklarımı kilitliyorum offf 🥵',
      'Yüzüm buruşuyor ama ekşiden değil, tutmaktan… ahh 😖',
      'Limon kokusu aklımı alıyor, bırakmıyorum offf 😣',
      'Sana sarıldıkça zonkluyorum, biriken yük limonlu kremadan bol olacak… ahh 😮‍💨',
      'Son damlana kadar sıkacağım dedin, ben de son anıma kadar tutuyorum offf 🍋',
      'Ter ve limon suyu içinde sarılı tutuyorum ahh 💗'
    ]
  },
  fxrpcilek: {
    pos: [
      'Arkandan sımsıkı sarıldım, kıpkırmızı jöle bedenin bana yapıştı; reçel gibi akıyorsun… ahhh 🍓😩',
      'Sana sarıldıkça daha da kızarıyorsun, {kalcaHis} offf 💗',
      'Yumuşacık tenine yapıştım, ezmemek için yavaş sarılıyorum… ahh 🥺',
      '{gogus} göğüslerini avuçladım, tatlı suyun parmaklarımdan süzülüyor offf 🍓',
      'Minik tohumların göğsümü gıdıklıyor, gülüyorsun ama inliyorsun… ahhh 😆',
      'Sımsıkı sarılıyım, çilek reçeli kokun başımı döndürüyor; {gogusHis} offf 🥵',
      'Kollarımda utanıp yüzünü saklıyorsun, ben daha sıkı sarılıyorum… ahh 🙈',
      'Pembe tenin terle parlıyor, sana gömülüp derine iniyorum offf 💗',
      'Jöle kalçan bana kalıp gibi oturdu, sarıldıkça eriyorsun… ahhh 🫠',
      'Tatlı mı tatlı bedenine sarılıp her vuruşta biraz daha eziliyoruz ahh 🍓'
    ],
    in: [
      'Sana sımsıkı sarılıp içine boşalıyorum; çilekli milkshake oldun… ahhhh 🍓💦',
      'Pembe teninin ardından dölüm görünüyor, sarılı kalıp her şeyi bırakıyorum offf 💗',
      'Utançtan kızardın ama bırakmıyorsun, içine doluyorum… ahhh 🙈',
      'Jöle bedenin beni sarıyor, son damlaya kadar içine akıyor ahh 🫠',
      'Çilekle krema, klasik tatlı… kollarımda titriyorsun offf 🍦',
      'Tohumlarına kadar titriyorsun, ben hâlâ doluyorum ahhh 🍓',
      'Ensene gömülüp boşalıyorum, reçel kokusu her yerde ahh 😩',
      'Biriken her şeyi tatlı içine verdim, sımsıkı sarılıyım offf 💗💦',
      'Kıpkırmızı karnında beyaz bir parıltı, okşuyorum… ahh 👀',
      'Boşaldıktan sonra yumuşacık pembe bedenine sarılı gevşiyorum… mmm 🍓😌'
    ],
    out: [
      'Arkandan sarılıyken son anda çıktım; kırmızı kalçana kremalı süsleme yaptım… ahhhh 🍓💦',
      'Pembe sırtına boşalıyorum, pasta gibi oldun offf 🎂',
      'Sımsıkı sarılı halde jöle tenine akıyor, sen kızarıyorsun… ahh 🙈',
      'Çilekli sundae, üstü bol kremalı… offf 🍨',
      'Bacaklarına süzülüyor, reçel kokusuna karışıyor… ahhh 💦',
      'Utanıyorsun ama kalçanı geri itiyorsun, son damlayı da bırakıyorum ahh 😳',
      'Biriken her şey kırmızı teninde bembeyaz parlıyor offf 💗',
      'Kremayı sen istedin, ben sıktım… ahhh 😏',
      'Çarşaflar pembe beyaz oldu ahh 😆',
      'Bitirince arkandan sarılıp tatlı sırtını öpüyorum… mmm 🍓😌'
    ],
    hold: [
      'Sana sarılıyım, tatlı bedenin beni eritiyor; ama tutuyorum… offf 😣🍓',
      'Bu kadar tatlıyken boşalmamak işkence, dişlerimi sıkıyorum ahh 🥺',
      'Sarılırken {gogus} göğüslerin göğsüme eziliyor, nasıl tutayım? offf 😩',
      'Utanarak "daha değil" dedin, kasılarak tutuyorum ahh 🙈',
      'Pembe tenine sımsıkı sarılıp kasıklarımı kilitliyorum offf 🥵',
      'Kremayı sonra sıkacağım, şimdilik biriktiriyorum… ahh 🍦',
      'Reçel kokusu aklımı alıyor ama bırakmıyorum offf 😣',
      'Sana sarıldıkça zonkluyorum, biriken yük büyüyor… ahh 😮‍💨',
      'Tatlıya son dokunuşu bekletiyorum, söz hepsi senin offf 🍓',
      'Ter içinde sarılı tutuyorum, kızaran yanaklarını öpüyorum ahh 💗'
    ]
  },
  fxrpportakal: {
    pos: [
      'Arkandan sımsıkı sarıldım, turuncu jöle bedenin güneş gibi sıcak; suyun karnıma akıyor… ahhh 🍊😩',
      'Sana sarıldıkça sıkılıyorsun, taze suyun fışkırıyor; {kalcaHis} offf 💦',
      'Portakal çiçeği kokan tenine yapıştım, enerjin bana geçiyor… ahh 🌼',
      '{gogus} göğüslerini avuçladım, sulu sulu parmaklarımdan taşıyor offf 🍊',
      'Kıpır kıpırsın, sarılı tutmakta zorlanıyorum… ahhh 😆',
      'Sımsıkı sarılıyım, güneş gibi ısıtıyorsun; {gogusHis} offf 🥵',
      'Kabuğunu soyar gibi sırtını öpüyorum, sarıldıkça parlıyorsun… ahh 🧡',
      'Dilim dilim ayrılıyorsun kollarımda, ben daha sıkı sarılıyorum offf 🍊',
      'Jöle kalçan bana kalıp gibi oturdu, enerjinle bana çarpıyorsun… ahhh ☀️',
      'Sulu ve sıcak bedenine sarılıp her vuruşta taze sıkılıyoruz ahh 💦'
    ],
    in: [
      'Sana sımsıkı sarılıp içine boşalıyorum; portakallı milkshake oldun… ahhhh 🍊💦',
      'Turuncu teninin ardından dölüm görünüyor, sarılı kalıp her şeyi bırakıyorum offf 🧡',
      'Güneş içinde doğdu sanki, kollarımda titriyorsun… ahhh ☀️',
      'Jöle bedenin beni sarıyor, son damlaya kadar içine akıyor ahh 🫠',
      'Sıktıkça suyun fışkırıyor, ben de içine fışkırıyorum offf 🍊💦',
      'Vitamin takviyesi içten, sana sarılıyım… ahhh 😆',
      'Ensene gömülüp boşalıyorum, portakal çiçeği kokusu başımı döndürüyor ahh 🌼',
      'Biriken her şeyi sulu içine verdim, sımsıkı sarılıyım offf 💗💦',
      'Turuncu karnında beyaz bir güneş, okşuyorum… ahh 👀',
      'Boşaldıktan sonra sıcacık bedenine sarılı gevşiyorum… mmm 🍊😌'
    ],
    out: [
      'Arkandan sarılıyken son anda çıktım; turuncu kalçana fışkırıyor, glazürlü kek oldun… ahhhh 🍊💦',
      'Güneş gibi parlayan sırtına boşalıyorum offf ☀️',
      'Sımsıkı sarılı halde jöle tenine akıyor, portakal suyuna karışıyor… ahh 🫠',
      'Taze sıkılmış, ikimiz de… offf 😆',
      'Bacaklarına süzülüyor, portakal kokusuna karışıyor… ahhh 💦',
      'Enerjinle kalçanı geri itiyorsun, son damlayı da bırakıyorum ahh 🧡',
      'Biriken her şey turuncu teninde bembeyaz parlıyor offf 🍊',
      'Kahvaltı masası gibi her yer meyve suyu ve krema… ahhh 🥐',
      'Hamak sallandı, ikimiz taştık ahh 😆',
      'Bitirince arkandan sarılıp sıcak sırtını öpüyorum… mmm 🍊😌'
    ],
    hold: [
      'Sana sarılıyım, enerjik bedenin beni zorluyor; ama tutuyorum… offf 😣🍊',
      'Bu kadar kıpır kıpırken boşalmamak işkence, dişlerimi sıkıyorum ahh ☀️',
      'Sarılırken {gogus} göğüslerin göğsüme eziliyor, nasıl tutayım? offf 😩',
      'Kıpırdama dedim ama enerjin durmuyor, kasılarak tutuyorum ahh 😆',
      'Turuncu tenine sımsıkı sarılıp kasıklarımı kilitliyorum offf 🥵',
      'Taze sıkılmış finali bekletiyorum, biriktiriyorum… ahh 🍊',
      'Portakal çiçeği kokusu aklımı alıyor ama bırakmıyorum offf 😣',
      'Sana sarıldıkça zonkluyorum, biriken yük büyüyor… ahh 😮‍💨',
      'Güneş batana kadar dayanacağım, söz offf 🌅',
      'Ter ve meyve suyu içinde sarılı tutuyorum ahh 💗'
    ]
  },
  fxrpsarap: {
    pos: [
      'Arkandan sımsıkı sarıldım, bordo jöle bedenin mum ışığında parlıyor; şarap kokuyorsun… ahhh 🍷😩',
      'Sana sarıldıkça kadehin çalkalanıyor, {kalcaHis} offf 🥂',
      'Yarı saydam bordo tenine yapıştım, başım dönüyor… ahh 🍇',
      '{gogus} göğüslerini avuçladım, parmaklarım bordo oldu offf 🍷',
      'Acele etmeden sarılıyorum, iyi şarap beklemeyi sever… ahhh 😏',
      'Sımsıkı sarılıyım, sarhoş eden kokun başımı döndürüyor; {gogusHis} offf 🥵',
      'Boynundan bir yudum alıp sana gömülüyorum… ahh 💋',
      'Kollarımda ağırbaşlı ama sıcacıksın, daha sıkı sarılıyorum offf 🕯️',
      'Jöle kalçan bana kalıp gibi oturdu, fıçı gibi çalkalanıyoruz… ahhh 🍷',
      'Sarhoş edici bedenine sarılıp her vuruşta daha derin bir tat alıyorum ahh 🍇'
    ],
    in: [
      'Sana sımsıkı sarılıp içine boşalıyorum; kırmızıyla beyaz karıştı, rosé olduk… ahhhh 🍷💦',
      'Bordo teninin ardından dölüm görünüyor, sarılı kalıp her şeyi bırakıyorum offf 🥂',
      'Kadehini ağzına kadar doldurdum, kollarımda titriyorsun… ahhh 🍷',
      'Jöle bedenin beni sarıyor, son damlaya kadar içine akıyor ahh 🫠',
      'İçinde yıllanmaya bırakıyorum, sımsıkı sarılıyım offf 🍇',
      'Sarhoş oldum, sen de; içine doluyorum… ahhh 🥴',
      'Ensene gömülüp boşalıyorum, şarap kokusu başımı döndürüyor ahh 😩',
      'Biriken her şeyi bordo içine verdim, şerefe… offf 🥂💦',
      'Bordo karnında beyaz bir dalga, okşuyorum… ahh 👀',
      'Boşaldıktan sonra mum ışığında sana sarılı gevşiyorum… mmm 🍷😌'
    ],
    out: [
      'Arkandan sarılıyken son anda çıktım; bordo kalçana fışkırıyor, tablo gibi oldun… ahhhh 🍷💦',
      'Mum ışığında parlayan sırtına boşalıyorum offf 🕯️',
      'Sımsıkı sarılı halde jöle tenine akıyor, şaraba karışıyor… ahh 🫠',
      'Rosé lekesi çarşafa da geçti… offf 😆',
      'Bacaklarına süzülüyor, üzüm kokusuna karışıyor… ahhh 💦',
      'Ağır ağır kalçanı geri itiyorsun, son damlayı da bırakıyorum ahh 😏',
      'Biriken her şey bordo teninde bembeyaz parlıyor offf 🍷',
      'Fıçıdan taşan bu sefer bendim… ahhh 🍇',
      'Şerefe, tenine… ahh 🥂',
      'Bitirince arkandan sarılıp şarap kokulu sırtını öpüyorum… mmm 😌'
    ],
    hold: [
      'Sana sarılıyım, sarhoş edici bedenin beni zorluyor; ama tutuyorum… offf 😣🍷',
      'Acele etme dedin, iyi şarap gibi bekletiyorum ahh 🍇',
      'Sarılırken {gogus} göğüslerin göğsüme eziliyor, nasıl tutayım? offf 😩',
      'Başım dönüyor, sınırdayım ama kasılarak tutuyorum ahh 🥴',
      'Bordo tenine sımsıkı sarılıp kasıklarımı kilitliyorum offf 🥵',
      'Yıllanmış bir final için biriktiriyorum… ahh 🍷',
      'Mum ışığında ter içindeyim, bırakmıyorum offf 🕯️',
      'Sana sarıldıkça zonkluyorum, kadeh doluyor ama taşmıyor… ahh 😮‍💨',
      'Tıpayı açmadan önce biraz daha bekleyelim offf 🍾',
      'Kadehimi kaldırıp tutuyorum, gülümsüyorsun ahh 😏'
    ]
  },
  fxrpvodka: {
    pos: [
      'Arkandan sımsıkı sarıldım, buz gibi şeffaf bedenin göğsüme yapıştı; ürperdim… ahhh 🍸😩',
      'Sana sarıldıkça eriyorsun, {kalcaHis} offf ❄️',
      'Şeffaf tenine yapıştım, nefesimle ısıtıyorum… ahh 🔥',
      '{gogus} göğüslerini avuçladım, buz gibi uçları parmaklarımda sertleşti offf 🧊',
      'Davay diye fısıldıyorsun, ben daha sıkı sarılıyorum… ahhh 🇷🇺',
      'Sımsıkı sarılıyım, soğuk tenin benim sıcaklığımla eriyor; {gogusHis} offf 🥵',
      'Kürk battaniyenin altında sana gömülüyorum… ahh 🧸',
      'Kollarımda Rusça inliyorsun, anlamıyorum ama durmuyorum offf 😆',
      'Jöle kalçan bana kalıp gibi oturdu, buz gibi çarpıyor… ahhh 🍸',
      'Soğuk ve yakıcı bedenine sarılıp her vuruşta biraz daha ısınıyoruz ahh 🔥'
    ],
    in: [
      'Sana sımsıkı sarılıp içine boşalıyorum; şeffaf içinde kar fırtınası gibi yayılıyor… ahhhh 🍸💦',
      'Buz gibi içine sıcacık akıyor, sarılı kalıp her şeyi bırakıyorum offf 🔥',
      'Beyaz Rus oldun, kollarımda titriyorsun… ahhh 🥛',
      'Jöle bedenin beni sarıyor, son damlaya kadar içine akıyor ahh 🫠',
      'Da, da diye inliyorsun, ben içine doluyorum offf 🇷🇺',
      'Buzun eridi, için de benimle ısındı… ahhh ❄️',
      'Ensene gömülüp boşalıyorum, vodka kokusu başımı yakıyor ahh 😩',
      'Biriken her şeyi şeffaf içine verdim, na zdorovye… offf 🥃💦',
      'Şeffaf karnında beyaz bir bulut, okşuyorum… ahh 👀',
      'Boşaldıktan sonra kürk battaniyenin altında sana sarılı gevşiyorum… mmm 🍸😌'
    ],
    out: [
      'Arkandan sarılıyken son anda çıktım; buz gibi kalçana sıcacık fışkırıyor… ahhhh 🍸💦',
      'Şeffaf sırtına boşalıyorum, buhar yükseliyor offf ❄️',
      'Sımsıkı sarılı halde jöle tenine akıyor, kristal gibi parlıyor… ahh 🧊',
      'Beyaz Rus kokteyli teninde… offf 🥛',
      'Bacaklarına süzülüyor, soğukla sıcak karışıyor… ahhh 💦',
      'Davay deyip kalçanı geri itiyorsun, son damlayı da bırakıyorum ahh 🇷🇺',
      'Biriken her şey şeffaf teninde bembeyaz parlıyor offf 🍸',
      'Kar gibi beyaz oldun… ahhh 😆',
      'Na zdorovye, tenine… ahh 🥃',
      'Bitirince arkandan sarılıp buz gibi sırtını öpüyorum… mmm 😌'
    ],
    hold: [
      'Sana sarılıyım, buz gibi bedenin beni zorluyor; ama tutuyorum… offf 😣🍸',
      'Rus kızları sabırlı adam sever dedin, dişlerimi sıkıyorum ahh 🇷🇺',
      'Sarılırken {gogus} göğüslerin göğsüme buz gibi eziliyor, nasıl tutayım? offf 😩',
      'Soğuk tenin beni ürpertiyor, ürperti tutmama yardım ediyor ahh ❄️',
      'Şeffaf tenine sımsıkı sarılıp kasıklarımı kilitliyorum offf 🥵',
      'Bir shot daha içmeden bitirmeyeceğim, biriktiriyorum… ahh 🥃',
      'Davay diye zorluyorsun ama bırakmıyorum offf 😣',
      'Sana sarıldıkça zonkluyorum, biriken yük büyüyor… ahh 😮‍💨',
      'Sibirya kadar dayanıklıyım, şimdilik tutuyorum offf 🧊',
      'Ter içinde sarılı tutuyorum, horosho dediğini duymak istiyorum ahh 😏'
    ]
  },
  fxrpbal: {
    pos: [
      'Arkandan sımsıkı sarıldım, bal gibi yapış yapış bedenin göğsüme yapıştı… ahhh 🍯😩',
      'Sana sarıldıkça ayrılamıyoruz, tenlerimiz yapıştı offf 🐝',
      'Altın sarısı tenine yapıştım, boynunu yalıyorum, tatlısın… ahh 💛',
      '{gogus} göğüslerini avuçladım, parmaklarım bala battı offf 🍯',
      'Yavaş diye fısıldıyorsun, ben ağır ağır sarılıyorum… ahhh 🐢',
      'Sımsıkı sarılıyım, her vuruşta balın karnıma akıyor offf 💦',
      'Jöle kalçan bana yapıştı, çekince geri geliyor… ahh 😆',
      'Kollarımda vızıldıyorsun, kulağım gıdıklanıyor offf 🐝',
      'Yapış yapış bedenine gömülüyorum, ayrılmak istemiyorum ahh 🍯',
      'Tatlı kokun başımı döndürüyor, daha sıkı sarılıyorum… offf 🥵'
    ],
    in: [
      'Sana sımsıkı sarılıp içine boşalıyorum; altın içinde beyaz bir damla gibi yayılıyor… ahhhh 🍯💦',
      'Ballı süt oldun, kollarımda titriyorsun offf 🥛',
      'Yapış yapış bedenine yapışık halde her şeyi bırakıyorum… ahhh 😩',
      'Kavanozunu ağzına kadar doldurdum ahh 🫙',
      'Tatlım diye inliyorsun, ben içine doluyorum offf 💛',
      'Ensene gömülüp boşalıyorum, bal kokusu başımı döndürüyor ahh 🐝',
      'Peteklerini doldurdum, damla bırakmadan… offf 🍯',
      'Yarı saydam karnında beyaz bir bulut, okşuyorum ahh 👀',
      'Yapıştık, ayrılmadan son damlayı da veriyorum… ahhh 💦',
      'Boşaldıktan sonra yapış yapış sana sarılı gevşiyorum… mmm 🍯😌'
    ],
    out: [
      'Arkandan sarılıyken son anda çıktım; altın kalçana fışkırıyor, bala karışıyor… ahhhh 🍯💦',
      'Yapış yapış sırtına boşalıyorum offf 🐝',
      'Sımsıkı sarılı halde tenine akıyor, ballı süt gibi… ahh 🥛',
      'Altın tenin bembeyaz damlalarla süslendi offf ✨',
      'Bacaklarına süzülüyor, balla karışıp ağır ağır akıyor… ahhh 💦',
      'Yavaş yavaş kalçanı geri itiyorsun, son damlayı da bırakıyorum ahh 😏',
      'Biriken her şey altın teninde parlıyor offf 🍯',
      'Petek gibi damlıyorsun… ahhh 😆',
      'Tatlının üstüne krema… ahh 😈',
      'Bitirince arkandan sarılıp bal kokulu sırtını öpüyorum… mmm 😌'
    ],
    hold: [
      'Sana sarılıyım, yapışkan bedenin beni zorluyor; ama tutuyorum… offf 😣🍯',
      'Bal acele sevmez dedin, ağır ağır bekletiyorum ahh 🐢',
      'Sarılırken {gogus} göğüslerin göğsüme yapışıyor, nasıl tutayım? offf 😩',
      'Tatlılığın sınırda tutuyor beni, kasılarak bekliyorum ahh 🥴',
      'Altın tenine sımsıkı sarılıp kasıklarımı kilitliyorum offf 🥵',
      'Kavanozu doldurmadan önce biraz daha biriktiriyorum… ahh 🫙',
      'Vızıldıyorsun, ben dişlerimi sıkıyorum offf 🐝',
      'Sana sarıldıkça zonkluyorum, biriken yük büyüyor… ahh 😮‍💨',
      'Yapıştık, ama bitirmiyorum, daha değil offf 🍯',
      'Bir kaşık daha diyorsun, tutuyorum ahh 😏'
    ]
  },
  fxrptekila: {
    pos: [
      'Arkandan sımsıkı sarıldım, ateşli bedenin göğsüme yapıştı… ahhh 🌵😩',
      'Sana sarıldıkça yanıyorum, ¡ándale! diye bağırıyorsun offf 🔥',
      'Tuzlu boynunu yalıyorum, sarılı halde… ahh 🧂',
      '{gogus} göğüslerini avuçladım, tenin ateş gibi offf 🥵',
      '¡Más! diye fısıldıyorsun, ben daha sıkı sarılıyorum… ahhh 💃',
      'Sımsıkı sarılıyım, salsa yapar gibi kalçan bana çarpıyor offf 🌵',
      'Kollarımda İspanyolca inliyorsun, anlamıyorum ama durmuyorum ahh 😆',
      'Jöle kalçan bana kalıp gibi oturdu, sıcacık… offf 🔥',
      'Limon kokulu dudaklarını öpüyorum, sarılı halde ahh 🍋',
      'Ateşli bedenine sarılıp her vuruşta biraz daha yanıyoruz offf 🥃'
    ],
    in: [
      'Sana sımsıkı sarılıp içine boşalıyorum; ateşin seninle karışıyor… ahhhh 🌵💦',
      'Sıcacık içine akıyor, sarılı kalıp her şeyi bırakıyorum offf 🔥',
      '¡Sí, sí! diye inliyorsun, kollarımda titriyorsun… ahhh 💃',
      'Jöle bedenin beni sarıyor, son damlaya kadar içine akıyor ahh 🫠',
      'Margarita oldun, ¡salud! offf 🍸',
      'Ensene gömülüp boşalıyorum, tuz ve limon kokusu… ahh 🧂🍋',
      'Biriken her şeyi içine verdim, tek dikiş… offf 🥃💦',
      'Yarı saydam karnında beyaz bir bulut, okşuyorum ahh 👀',
      'Ay caramba diyorsun, ben içine doluyorum offf 😩',
      'Boşaldıktan sonra sana sarılı gevşiyorum, kantina sessiz… mmm 🌵😌'
    ],
    out: [
      'Arkandan sarılıyken son anda çıktım; ateşli kalçana fışkırıyor… ahhhh 🌵💦',
      'Tuzlu sırtına boşalıyorum offf 🧂',
      'Sımsıkı sarılı halde tenine akıyor, margarita köpüğü gibi… ahh 🍸',
      'Altın tenin bembeyaz damlalarla süslendi offf 🔥',
      'Bacaklarına süzülüyor… ahhh 💦',
      '¡Ándale! deyip kalçanı geri itiyorsun, son damlayı da bırakıyorum ahh 💃',
      'Biriken her şey teninde parlıyor offf 🥃',
      'Çöle yağmur yağdı… ahhh 😆',
      '¡Salud!, tenine… ahh 🥃',
      'Bitirince arkandan sarılıp tuzlu sırtını öpüyorum… mmm 😌'
    ],
    hold: [
      'Sana sarılıyım, ateşli bedenin beni zorluyor; ama tutuyorum… offf 😣🌵',
      '¡Más! diye zorluyorsun ama bırakmıyorum ahh 🔥',
      'Sarılırken {gogus} göğüslerin göğsüme eziliyor, nasıl tutayım? offf 😩',
      'Başım tekila içmiş gibi dönüyor, ama kasılarak tutuyorum ahh 🥴',
      'Ateşli tenine sımsıkı sarılıp kasıklarımı kilitliyorum offf 🥵',
      'Bir shot daha içmeden bitirmeyeceğim… ahh 🥃',
      'Salsa yapar gibi kalçanı çeviriyorsun, dişlerimi sıkıyorum offf 💃',
      'Sana sarıldıkça zonkluyorum, biriken yük büyüyor… ahh 😮‍💨',
      'Çöl kadar dayanıklıyım, şimdilik tutuyorum offf 🌵',
      'Ter içinde sarılı tutuyorum, olé dediğini duymak istiyorum ahh 😏'
    ]
  },
  fxrpsampanya: {
    pos: [
      'Arkandan sımsıkı sarıldım, kabarcıklı bedenin göğsüme yapıştı, gıdıklandım… ahhh 🍾😩',
      'Sana sarıldıkça köpürüyorsun, kıkır kıkır gülüyorsun offf 😆',
      'Altın tenine yapıştım, kabarcıklar tenime geçiyor… ahh ✨',
      '{gogus} göğüslerini avuçladım, avucumda köpürüyorlar offf 🥂',
      'Şerefe diye fısıldıyorsun, ben daha sıkı sarılıyorum… ahhh 🍾',
      'Sımsıkı sarılıyım, her vuruşta biraz daha köpürüyorsun offf 💦',
      'Jöle kalçan bana çarptıkça kabarcıklar yükseliyor… ahh 😏',
      'Kollarımda kıkırdıyorsun, ben durmuyorum offf 😆',
      'Işıltılı bedenine gömülüyorum, başım dönüyor ahh 🥴',
      'Köpüklü bedenine sarılıp her vuruşta biraz daha sallıyorum offf 🥵'
    ],
    in: [
      'Sana sımsıkı sarılıp içine boşalıyorum; altın içinde beyaz köpük yayılıyor… ahhhh 🍾💦',
      'Pop! İçinde patladım, sarılı kalıp her şeyi bırakıyorum offf 🎉',
      'Şerefe diye inliyorsun, kollarımda titriyorsun… ahhh 🥂',
      'Jöle bedenin beni sarıyor, son damlaya kadar içine akıyor ahh 🫠',
      'Şişeni doldurdum, köpük taştı offf 💦',
      'Ensene gömülüp boşalıyorum, kabarcıklar tenimi gıdıklıyor ahh 😆',
      'Biriken her şeyi içine verdim, kutlama tamam… offf ✨',
      'Yarı saydam karnında beyaz köpük, okşuyorum ahh 👀',
      'Kıkır kıkır gülerken içine doluyorum offf 😈',
      'Boşaldıktan sonra konfetilerin arasında sana sarılı gevşiyorum… mmm 🍾😌'
    ],
    out: [
      'Arkandan sarılıyken son anda çıktım; altın kalçana fışkırıyor, köpük gibi… ahhhh 🍾💦',
      'Işıltılı sırtına boşalıyorum offf ✨',
      'Sımsıkı sarılı halde tenine akıyor, kabarcıklarla karışıyor… ahh 🥂',
      'Altın tenin bembeyaz köpükle süslendi offf 😆',
      'Bacaklarına süzülüyor… ahhh 💦',
      'Kıkırdayıp kalçanı geri itiyorsun, son damlayı da bırakıyorum ahh 😏',
      'Biriken her şey teninde parlıyor offf 🍾',
      'Yarış sonu gibi, her yere fışkırttım… ahhh 🏆',
      'Şerefe, tenine… ahh 🥂',
      'Bitirince arkandan sarılıp ışıltılı sırtını öpüyorum… mmm 😌'
    ],
    hold: [
      'Sana sarılıyım, köpüklü bedenin beni zorluyor; ama tutuyorum… offf 😣🍾',
      'Sallama dedin, kıpırdamadan tutuyorum ahh 🥂',
      'Sarılırken {gogus} göğüslerin göğsüme eziliyor, nasıl tutayım? offf 😩',
      'Kabarcıkların gıdıklıyor, gülerek tutuyorum ahh 😆',
      'Altın tenine sımsıkı sarılıp kasıklarımı kilitliyorum offf 🥵',
      'Mantarı patlatmadan önce biraz daha biriktiriyorum… ahh 🍾',
      'Kıkırdayıp zorluyorsun ama bırakmıyorum offf 😣',
      'Sana sarıldıkça zonkluyorum, biriken basınç büyüyor… ahh 😮‍💨',
      'Şişe çalkalandı, ama mantar yerinde offf 🍾',
      'Ter içinde sarılı tutuyorum, şerefe dediğini duymak istiyorum ahh 😏'
    ]
  },
  fxrpsut: {
    pos: [
      'Arkandan sımsıkı sarıldım, kremamsı bedenin göğsüme yapıştı, vanilya kokuyorsun… ahhh 🥛😩',
      'Sana sarıldıkça göğüslerinden süt damlıyor, kolumu ıslatıyor offf 💧',
      'Bembeyaz tenine yapıştım, ılık ılık… ahh 🤍',
      '{gogus} göğüslerini avuçladım, parmaklarımın arasından süt sızıyor offf 🥛',
      'Ensene burnumu gömdüm, ılık süt kokuyorsun… ahhh 🐄',
      'Sımsıkı sarılıyım, her vuruşta göğüslerin biraz daha damlıyor offf 💦',
      'Jöle kalçan bana çarptıkça çarşafa süt sıçrıyor… ahh 😏',
      'Kollarımda inliyorsun, ben durmuyorum offf 😈',
      'Kremamsı bedenine gömülüyorum, kaymak gibi eriyorsun ahh 🫠',
      'Damlayan göğüslerini sıkıp her vuruşta biraz daha sağıyorum offf 🥵'
    ],
    in: [
      'Sana sımsıkı sarılıp içine boşalıyorum; beyaz beyaza karışıyor… ahhhh 🥛💦',
      'İçini sürahi gibi dolduruyorum, sarılı kalıp her şeyi bırakıyorum offf 😩',
      'Göğüslerini sıkarken boşalıyorum, ikimiz de akıyoruz… ahhh 💧',
      'Jöle bedenin beni sarıyor, son damlaya kadar içine akıyor ahh 🫠',
      'Kremamı kremana kattım, taştı offf 🤍',
      'Ensene gömülüp boşalıyorum, vanilya kokun başımı döndürüyor ahh 🍦',
      'Biriken her şeyi içine verdim, ağzına kadar dolusun… offf 🥛',
      'Yarı saydam karnında beyaz bir bulut, okşuyorum ahh 👀',
      'İnlerken içine doluyorum, göğüslerin hâlâ damlıyor offf 😈',
      'Boşaldıktan sonra süt kokulu çarşaflarda sana sarılı gevşiyorum… mmm 🐄😌'
    ],
    out: [
      'Arkandan sarılıyken son anda çıktım; bembeyaz kalçana fışkırıyor… ahhhh 🥛💦',
      'Kremamsı sırtına boşalıyorum offf 🤍',
      'Sımsıkı sarılı halde tenine akıyor, sütünle karışıyor… ahh 💧',
      'Beyaz tenin daha da beyazladı offf 😆',
      'Bacaklarına süzülüyor… ahhh 💦',
      'Kalçanı geri itiyorsun, son damlayı da bırakıyorum ahh 😏',
      'Biriken her şey teninde parlıyor offf 🥛',
      'Göğüslerine de sıçradı, süt ve krema… ahhh 🍦',
      'Kaymak gibi kaplandın… ahh 🫠',
      'Bitirince arkandan sarılıp vanilya kokulu sırtını öpüyorum… mmm 😌'
    ],
    hold: [
      'Sana sarılıyım, kremamsı bedenin beni zorluyor; ama tutuyorum… offf 😣🥛',
      'Nazik ol dedin, yavaşlayıp tutuyorum ahh 🐄',
      'Sarılırken {gogus} göğüslerin göğsüme eziliyor, süt akıyor, nasıl tutayım? offf 😩',
      'Vanilya kokun başımı döndürüyor, ama kasılarak tutuyorum ahh 🍦',
      'Bembeyaz tenine sımsıkı sarılıp kasıklarımı kilitliyorum offf 🥵',
      'Kaynamadan önce biraz daha biriktiriyorum… ahh 🥛',
      'İnleyip zorluyorsun ama bırakmıyorum offf 😣',
      'Sana sarıldıkça zonkluyorum, biriken yük büyüyor… ahh 😮‍💨',
      'Süt taşmak üzere, ama kapağı tutuyorum offf 😆',
      'Ter içinde sarılı tutuyorum, "doldur beni" dediğini duymak istiyorum ahh 😏'
    ]
  },
  // 👯 Threesome sarılma satırları (iki kız)
  trioHug: {
    label: '🤗 Sarılma · Threesome · ısınma',
    events: ['Girls Kissing', 'Girls Licking', 'Scissoring Show'],
    lines: [
      'İkinizi birden kollarıma aldım; biriniz sağımda, biriniz solumda… ahh 😩',
      'Öpüşürken ikinize de sarıldım, dudaklarınız yanağımda buluşuyor offf 🥵',
      'Ellerim iki belde birden, sizi kendime çekiyorum 🔥',
      '{gogus} göğüsler göğsüme bastırıyor, hangisi kimin bilmiyorum bile 😮‍💨',
      'Ortanızda kaldım, iki sıcak beden bana sokuluyor ahh 😩',
      'Saçlarınız yüzüme dökülüyor, ikinizi de koklıyorum {o} 🤍',
      'Biri boynumu, diğeri kulağımı öpüyor; ben ikinizi sıkıca sarıyorum 🥵',
      'Kollarımda iki kız… bundan güzel bir şey olamaz 🥰'
    ]
  },
  trioPos: {
    label: '🤗 Sarılma · Threesome · pozisyon',
    events: ['Ride and Facesit', 'Side by Side Doggy', 'Stacked Missionary', 'Spooning Sandwich', 'Cowgirl Kiss', 'Taking Turns', 'Doggy Lick', 'Double Blowjob', 'Double Handjob', 'Double Titfuck'],
    lines: [
      'Birine sarılmışken öbürü arkamdan bana yapıştı ahh 😩',
      'Kollarım ikinizin belinde, sırayla kendime çekiyorum offf 🥵',
      '{kalca} kalçayı kavradım, öbür elim diğerinin göğsünde 🔥',
      'Üçümüz birbirimize dolandık, kimin kolu kimin bilmiyorum 😮‍💨',
      'Sırtına kapandım, yanındaki eliyle yüzümü okşuyor ahh 😩',
      '{gogusHis}, öbürü de omzumu öpüyor offf 🥵',
      'İkinizi de sımsıkı tutuyorum, kaçmak yok {o} 🔥',
      'Sarılırken üç kalp birden çarpıyor 🤍'
    ],
    hold: [
      'İkinize birden sarılıp kasıklarımı kilitledim, tutuyorum offf 😣',
      'Biri "bırak artık" diyor, öbürü "dayan" diyor ahh 😩',
      'Kollarımda iki beden, zonkluyorum ama tutuyorum 🥵',
      'Sarılı kalıyorum, biriken yük ikinize yetecek ahh 😮‍💨'
    ]
  },
  trioFinish: {
    label: '🤗 Sarılma · Threesome · bitiş',
    events: ['Double Facial', 'Cum Sharing Kiss', 'Double Tit Cumshot', 'Creampie Lick'],
    lines: [
      'İkinizi birden kollarıma alıp titreyerek boşalıyorum… ahhh 😩💦',
      'Biriniz boynumda, biriniz göğsümde; her atışta ikinizi sıkıyorum offf 🥵',
      'Geldi {o}, ikiniz de bana sımsıkı sarıldınız… ahh 💦',
      'Bitti; üçümüz yatağa yığıldık, nefeslerimiz birbirine karıştı 😮‍💨',
      'İkinizin alnından öpüyorum, sarılı kalıyoruz 🤍',
      'Kollarımda iki yorgun kız, gülümsüyorum 🥰'
    ]
  }
};

Stories.ME_EV_LINES = {
  'Missionary': [
    'Üstüne çıktım, gözlerine bakarak yavaşça içine giriyorum… ahhh 😩',
    'Bacaklarını omuzlarıma aldım, sertçe önden hızlanıyorum offf 🔥',
    'Ellerini başının üstünde tuttum, her vuruşta daha derine… ahh {o} 😮‍💨',
    'Dudaklarını öperken kalçamı bastırıyorum, offf çok sıcaksın 🥵',
    'Durmadan hızlanıyorum, yatak gıcırdıyor… ahhh bayılıyorum buna 💦'
  ],
  'Standing Missionary': [
    'Seni duvara yasladım, bir bacağını kaldırıp önden giriyorum… ahh 😩',
    'Ayakta sımsıkı sarıldım, kalçanı tutup hızlanıyorum offf 🔥',
    'Sırtın duvarda, her vuruşta biraz daha kaldırıyorum seni… ahhh 🥵',
    'Boynunu öperken sertçe önden vuruyorum, offf {o} 😮‍💨',
    'Bacakların belimde, durmadan içine gömülüyorum… ahh çok iyi 💦'
  ],
  'Cowgirl': [
    'Sırtüstü uzandım, kalçanı tutup aşağı bastırıyorum… ahhh 😩',
    'Üstümde zıplarken göğüslerini avuçluyorum, offf {o} 🔥',
    'Belinden kavrayıp alttan sertçe vuruyorum… ahh böyle devam 🥵',
    'Hızını ben belirliyorum, kalçanı daha hızlı oynatıyorum offf 😮‍💨',
    'Seni kendime çekip öpüyorum, alttan durmadan hızlanıyorum… ahhh 💦'
  ],
  'Ondesk': [
    'Seni masaya oturttum, bacaklarını açıp önden giriyorum… ahh 😩',
    'Masadakileri yere döktüm, belinden tutup sertçe hızlanıyorum offf 🔥',
    'Masa sallanıyor, her vuruşta seni kendime çekiyorum… ahhh 🥵',
    'Sırtüstü yatırdım, bileklerini masaya bastırıp vuruyorum offf {o} 😮‍💨',
    'Kenarına iyice çektim, durmadan derine gömülüyorum… ahh 💦'
  ],
  'Lap Sex': [
    'Kucağıma oturttum, kalçanı tutup kendime bastırıyorum… ahhh 😩',
    'Göğüslerini yüzüme bastırdım, alttan hızlanıyorum offf 🔥',
    'Belinden sarıp seni yukarı aşağı oynatıyorum… ahh {o} 🥵',
    'Dudakların dudaklarımda, kucağımda sertçe vuruyorum offf 😮‍💨',
    'Sımsıkı sarılıp derine itiyorum, bırakmıyorum seni… ahhh 💦'
  ],
  'Spooning': [
    'Arkana yanaştım, yan yatmış halde yavaşça giriyorum… ahh 😩',
    'Göğsünü avuçlarken arkandan hızlanıyorum offf 🔥',
    'Boynunu öpüp bacağını kaldırdım, derine itiyorum… ahhh {o} 🥵',
    'Kulağına inleyerek sertçe vuruyorum, offf çok sıkısın 😮‍💨',
    'Belinden sımsıkı sarıldım, durmadan hızlanıyorum… ahh 💦'
  ],
  'Standing': [
    'Ayakta seni kaldırdım, bacakların belimde… ahhh 😩',
    'Kalçandan tutup havada sertçe vuruyorum offf 🔥',
    'Seni duvara dayayıp her vuruşta hızlanıyorum… ahh {o} 🥵',
    'Kollarım titriyor ama durmuyorum, offf çok iyisin 😮‍💨',
    'Sımsıkı tutup derine gömülüyorum, inlemeni duymak istiyorum… ahhh 💦'
  ],
  'Doggy': [
    'Dizlerinin üstüne aldım, arkandan saçını çekerek hızlandım… ahhh 😩',
    'Kalçanı avuçlayıp arkadan sertçe vuruyorum offf 🔥',
    'Belini aşağı bastırdım, her vuruşta daha derine… ahh {o} 🥵',
    'Kalçana bir şaplak attım, durmadan hızlanıyorum offf 😮‍💨',
    'Bileklerini arkada tutup kendime çekiyorum… ahhh bayılıyorum 💦'
  ],
  'Standing doggy': [
    'Seni öne eğdim, ayakta arkadan giriyorum… ahh 😩',
    'Saçını tutup başını geri çektim, sertçe hızlanıyorum offf 🔥',
    'Kalçanı kendime bastırıp ayakta durmadan vuruyorum… ahhh {o} 🥵',
    'Ellerin duvarda, belinden tutup derine itiyorum offf 😮‍💨',
    'Bacakların titriyor ama bırakmıyorum, daha hızlı… ahh 💦'
  ],
  'Full Nelson': [
    'Kollarını arkadan kilitledim, bacaklarını açıp giriyorum… ahhh 😩',
    'Tamamen kontrolümdesin, alttan sertçe hızlanıyorum offf 🔥',
    'Kıpırdayamıyorsun, her vuruşta derine… ahh {o} 🥵',
    'Kulağına fısıldıyorum, durmadan vuruyorum offf 😮‍💨',
    'Seni sımsıkı kilitli tutup en derine gömülüyorum… ahhh 💦'
  ],
  'Spooning Anal': [
    'Arkana yanaştım, yavaşça arkandan zorluyorum… ahh 😩',
    'Belinden sarıldım, yan yatarken yavaş yavaş hızlanıyorum offf 🔥',
    'Boynunu öperken arkandan derine itiyorum… ahhh {o} 🥵',
    'Çok dar, offf her vuruşta aklım gidiyor 😮‍💨',
    'Göğsünü sıkıp arkandan durmadan vuruyorum… ahh 💦'
  ],
  'Cowgirl Anal': [
    'Kalçanı tutup üstüme yavaşça oturtuyorum, arkadan… ahhh 😩',
    'Üstümde yavaş yavaş iniyorsun, offf çok sıkı 🔥',
    'Belinden kavrayıp alttan hızlanıyorum… ahh {o} 🥵',
    'Kalçana şaplak atıp daha hızlı oynatıyorum offf 😮‍💨',
    'Seni sonuna kadar bastırıyorum, bırakmıyorum… ahhh 💦'
  ],
  'Standing Anal': [
    'Seni duvara yasladım, ayakta arkandan giriyorum… ahh 😩',
    'Kalçanı açıp sertçe arkadan hızlanıyorum offf 🔥',
    'Saçını çekip başını geri yatırdım, derine itiyorum… ahhh {o} 🥵',
    'Bacakların titriyor, belinden tutup vuruyorum offf 😮‍💨',
    'Ayakta durmadan hızlanıyorum, çok darsın… ahh 💦'
  ],
  'Rough Anal': [
    'Yüzünü yastığa bastırdım, arkandan sertçe giriyorum… ahhh 😩',
    'Saçını çekerek arkadan hızlandım, offf durmuyorum 🔥',
    'Kalçana şaplak üstüne şaplak, her vuruşta daha sert… ahh {o} 🥵',
    'Bileklerini arkada kilitleyip vahşice vuruyorum offf 😮‍💨',
    'Bütün ağırlığımla bastırıp en derine gömülüyorum… ahhh 💦'
  ],

  /* ---------- 🔥 Forward · temalı ---------- */
  'Coffin Missionary': [
    'Kıpırdayacak yer yok, üstüne sıkışıp yavaşça giriyorum… ahh 😩',
    'Tenimiz tenimize yapışık, dar yerde kalçamı bastırıyorum offf 🔥',
    'Nefesin yüzümde, her vuruşta daha derine… ahhh {o} 🥵',
    'Sıkışık karanlıkta durmadan hızlanıyorum offf 😮‍💨',
    'Tabut gibi daracık ama bırakmıyorum seni… ahh 💦'
  ],
  'Spider Web': [
    'Bileklerini başının üstünde tuttum, bacakların dört yana açık… ahhh 😩',
    'Ağıma düştün, önden sertçe hızlanıyorum offf 🔥',
    'Kıpırdayamıyorsun, her vuruşta derine… ahh {o} 🥵',
    'Bileklerini bastırıp gözlerine bakarak vuruyorum offf 😮‍💨',
    'Açık bacaklarının arasında durmadan gömülüyorum… ahhh 💦'
  ],
  'Tombstone': [
    'Sırtın soğuk taşta, bacağını kaldırıp önden giriyorum… ahh 😩',
    'Taş buz gibi, sen alev alevsin offf 🔥',
    'Kalçandan tutup taşa bastırarak hızlanıyorum… ahhh {o} 🥵',
    'Her vuruşta biraz daha kaldırıyorum seni offf 😮‍💨',
    'Mezarlığın sessizliğinde inlemen yankılanıyor… ahh 💦'
  ],
  'Coffin Lid': [
    'Bacaklarını birleşik tutup dimdik kaldırdım, giriyorum… ahhh 😩',
    'Böyle çok dar oluyorsun, offf hızlanıyorum 🔥',
    'Bileklerini kavrayıp bacaklarını göğsüme yasladım… ahh {o} 🥵',
    'Her vuruşta kapak gibi kapanıyorsun üstüme offf 😮‍💨',
    'Durmadan sertçe vuruyorum, bacakların titriyor… ahhh 💦'
  ],
  'Neck Feast': [
    'Arkandan sarıldım, girerken boynuna kapandım… ahh 😩',
    'Dişlerimi boynuna geçirip arkandan hızlanıyorum offf 🔥',
    'Tadın dudaklarımda, her vuruşta daha derine… ahhh {o} 🥵',
    'Belinden sımsıkı tutup boynunu emerken vuruyorum offf 😮‍💨',
    'Boynundan bırakmadan durmadan gömülüyorum… ahh 💦'
  ],
  'Jugular Ride': [
    'Üstüme oturdun, boynumu sana uzatıyorum… ahhh 😩',
    'Dişlerin boynumda, alttan sertçe vuruyorum offf 🔥',
    'Sen içerken kalçanı bastırıyorum… ahh {o} 🥵',
    'Başım dönüyor ama alttan hızlanmaya devam offf 😮‍💨',
    'Boynumdan bırakma, ben de seni bırakmıyorum… ahhh 💦'
  ],
  'Wrist Offering': [
    'Bileğimi dudaklarına uzattım, içine giriyorum… ahh 😩',
    'Sen bileğimi emerken önden hızlanıyorum offf 🔥',
    'Dudakların bileğimde, her vuruşta daha derine… ahhh {o} 🥵',
    'Gözlerin kızarıyor, ben durmadan vuruyorum offf 😮‍💨',
    'İç bakalım, ben de seni doldurayım… ahh 💦'
  ],
  'Shoulder Mark': [
    'Seni duvara yasladım, girerken omzuna dişlerimi geçirdim… ahhh 😩',
    'Omzunda izim kalacak, sertçe hızlanıyorum offf 🔥',
    'Her vuruşta biraz daha ısırıyorum… ahh {o} 🥵',
    'Benimsin, işaretimi taşıyacaksın offf 😮‍💨',
    'Duvara bastırıp durmadan vuruyorum… ahhh 💦'
  ],
  'Blood Bath': [
    'Kırmızı suyun içinde kucağıma aldım seni… ahh 😩',
    'Su taşıyor, kalçanı bastırıp alttan hızlanıyorum offf 🔥',
    'Kırmızı damlalar göğsünden akıyor, yalıyorum… ahhh {o} 🥵',
    'Küvette dalgalar, durmadan vuruyorum offf 😮‍💨',
    'Sımsıkı sarılıp derine itiyorum… ahh 💦'
  ],
  'Sacrifice': [
    'Bağlısın, damlalar göğsüne düşerken içine giriyorum… ahhh 😩',
    'Kurbanımsın bu gece, önden sertçe hızlanıyorum offf 🔥',
    'Göğsündeki kırmızıyı yalayıp vuruyorum… ahh {o} 🥵',
    'Kıpırdayamıyorsun, her vuruşta daha derine offf 😮‍💨',
    'Ritüel tamamlanana kadar durmuyorum… ahhh 💦'
  ],
  'Blood Pact': [
    'Avuçlarımız birleşti, kucağıma oturttum seni… ahh 😩',
    'Ahdimiz mühürlendi, alttan hızlanıyorum offf 🔥',
    'Ellerimiz kenetli, gözlerine bakarak vuruyorum… ahhh {o} 🥵',
    'Artık birbirimize bağlıyız, durmadan offf 😮‍💨',
    'Seni kendime bastırıp derine itiyorum… ahh 💦'
  ],
  'Jelly Ride': [
    'Üstüme oturdun, her inişte bedenin dalgalanıyor… ahhh 😩',
    'Titreyen kalçanı tutup alttan vuruyorum offf 🔥',
    'Jöle gibi sarıyorsun beni, çok garip çok güzel… ahh {o} 🥵',
    'Her vuruşta dalga dalga titriyorsun offf 😮‍💨',
    'Belinden kavrayıp durmadan hızlanıyorum… ahhh 💦'
  ],
  'Shapeshift': [
    'Önden girerken bedenin değişiyor… ahh 😩',
    'Göğüslerin avucumda büyüyor, sertçe hızlanıyorum offf 🔥',
    'İçin bana göre daralıyor, aklım gidiyor… ahhh {o} 🥵',
    'Her vuruşta yeni bir sen, durmadan offf 😮‍💨',
    'Kalçan büyüdü, sımsıkı tutup vuruyorum… ahh 💦'
  ],
  'Intimate Therapy': [
    'Sedyede uzandım, doktorum yavaşça üstüme oturuyor… ahhh 😩',
    'Tedavi buysa hiç iyileşmek istemiyorum offf 🔥',
    'Kalçanı tutup alttan nazikçe vuruyorum… ahh {o} 🥵',
    'Önlüğün açık, durmadan hızlanıyorum offf 😮‍💨',
    'Doktor, bu tedaviye her gün gelirim… ahhh 💦'
  ],
  'Bareback Therapy': [
    'Kondomsuz, yavaşça üstüme iniyorsun doktor… ahh 😩',
    'Tenin tenimde, çok sıcaksın offf 🔥',
    'Şefkatle sarılıp alttan hızlanıyorum… ahhh {o} 🥵',
    'Bu tedavinin ilacı sensin, durmadan offf 😮‍💨',
    'İzin verdin, içinde bitireceğim… ahh 💦'
  ],
  'Bareback Pull Out': [
    'Kondomsuz giriyorum, dikkatli olacağım söz… ahhh 😩',
    'Çok iyi hissettiriyor, yavaş yavaş hızlanıyorum offf 🔥',
    'Sınırda durup tekrar derine… ahh {o} 🥵',
    'Gelmek üzereyim, son ana kadar vuruyorum offf 😮‍💨',
    'Tam zamanında çekiyorum, dışarıda bitiriyorum… ahhh 💦'
  ],
  'Milk Bath': [
    'Süt dolu küvette kucağıma aldım seni… ahh 😩',
    'Beyaz dalgalar arasında alttan hızlanıyorum offf 🔥',
    'Göğüslerinden süt akıyor, yalıyorum… ahhh {o} 🥵',
    'Küvet taşıyor, durmadan vuruyorum offf 😮‍💨',
    'Sımsıkı sarılıp derine itiyorum… ahh 💦'
  ],

  /* ---------- 🍑 Backward · temalı ---------- */
  'Vampire Bite': [
    'Arkandan girerken boynuna dişlerimi geçirdim… ahhh 😩',
    'Ayakta arkandan sertçe hızlanıyorum offf 🔥',
    'Boynunu emerken kalçanı kendime bastırıyorum… ahh {o} 🥵',
    'Her vuruşta biraz daha ısırıyorum offf 😮‍💨',
    'Kanının tadı ve senin inlemen… ahhh 💦'
  ],
  'Full Moon Doggy': [
    'Dolunay altında saçını çekip arkadan giriyorum… ahhh 😩',
    'Vahşileşiyorum, arkandan sertçe hızlanıyorum offf 🔥',
    'Kalçana şaplak, belini aşağı bastırıyorum… ahh {o} 🥵',
    'Ay ışığında uluyacak gibiyim, durmadan offf 😮‍💨',
    'Hayvan gibi arkandan derine itiyorum… ahhh 💦'
  ],
  'Ghost Ride': [
    'Tülün altında üstüme sırtın dönük oturdun… ahh 😩',
    'Hayalet gibi süzülüyorsun, kalçanı tutuyorum offf 🔥',
    'Tülün altından alttan sertçe vuruyorum… ahhh {o} 🥵',
    'Kalçanın inişini izliyorum, durmadan offf 😮‍💨',
    'Belinden çekip derine bastırıyorum… ahh 💦'
  ],
  'Full Body Wrap': [
    'Arkandan girerken bütün bedeninle sarıldın bana… ahhh 😩',
    'Her yerimi kaplıyorsun, sertçe hızlanıyorum offf 🔥',
    'Kaygan bedenin üstümde, durmadan vuruyorum… ahh {o} 🥵',
    'Kaçamıyorum, kaçmak da istemiyorum offf 😮‍💨',
    'Seninle tek beden olmuş gibiyim… ahhh 💦'
  ],
  'Wobble Doggy': [
    'Dört ayak üstündesin, arkandan giriyorum… ahh 😩',
    'Her vuruşta kalçan sallanıyor offf 🔥',
    'Titreyen kalçanı avuçlayıp hızlanıyorum… ahhh {o} 🥵',
    'Şaplak atınca dalga dalga titriyor offf 😮‍💨',
    'Belinden tutup durmadan vuruyorum… ahh 💦'
  ],
  'Intimate Doggy': [
    'Sedyeye eğildin doktor, arkandan yavaşça giriyorum… ahhh 😩',
    'Yüzünü görmesem de kızardığını biliyorum offf 🔥',
    'Önlüğünü kaldırıp kalçanı tutuyorum… ahh {o} 🥵',
    'Tedavi için hızlanıyorum, sedye gıcırdıyor offf 😮‍💨',
    'Utanma doktor, durmadan vuruyorum… ahhh 💦'
  ],

  /* ---------- 💋 Foreplay ---------- */
  'Kissing': [
    'Ensenden tutup dudaklarına kapandım… mmm 😘',
    'Dilim dilinde, bırakmıyorum seni offf 🔥',
    'Alt dudağını ısırıp çekiyorum… ahh {o} 🥵',
    'Seni duvara yaslayıp derin derin öpüyorum 💋',
    'Nefesimiz karıştı, durmadan öpüyorum… mmm 😮‍💨'
  ],
  'Back Hugging': [
    'Arkandan sımsıkı sarıldım, boynunu kokluyorum… mmm 😌',
    'Ellerim karnında, kulağına fısıldıyorum 🔥',
    'Kendime bastırıyorum, hissediyor musun? offf 😏',
    'Boynunu öperek arkandan sarılıyorum… ahh {o} 🥵',
    'Ellerim yavaşça aşağı kayıyor… mmm 😮‍💨'
  ],
  'Front Hugging': [
    'Seni kendime çekip sımsıkı sarıldım… mmm 🤗',
    'Göğüslerin göğsümde, kalbin hızlanıyor 🔥',
    'Belinden sarıp alnını öpüyorum… {o} 💗',
    'Kalçana uzanıp seni kendime bastırıyorum offf 😏',
    'Bırakmıyorum, kokunu içime çekiyorum… ahh 😮‍💨'
  ],
  'Show Tits': [
    'Göğüslerini görünce nefesim kesildi… offf 😍',
    'Göz alamıyorum, çok güzeller ahh 🥵',
    'Ellerimi uzatıp avuçluyorum… mmm {o} 🔥',
    'Uçlarını parmaklarımla okşuyorum offf 😮‍💨',
    'Biraz daha göster, bayılıyorum… ahhh 😏'
  ],
  'Show Ass': [
    'Kalçanı görünce dayanamadım… offf 😍',
    'Ne kalça bu, gözlerimi alamıyorum ahh 🥵',
    'Avuçlarımla sıkıyorum… mmm {o} 🔥',
    'Biraz eğil, daha iyi göreyim offf 😏',
    'Kalçana bir öpücük kondurdum… ahh 😮‍💨'
  ],
  'Lap Kissing': [
    'Kucağıma oturttum, dudaklarına kapandım… mmm 😘',
    'Kalçanı tutup kendime çekerek öpüyorum offf 🔥',
    'Kucağımda kıpırdadıkça çıldırıyorum… ahh {o} 🥵',
    'Boynundan dudaklarına öpe öpe çıkıyorum 💋',
    'Bırakmıyorum, derin derin öpüyorum… offf 😮‍💨'
  ],
  'Communion': [
    'Kadehten bir yudum alıp ağzına aktardım… mmm 🍷',
    'Şarap dudaklarından süzülüyor, yalıyorum offf 🔥',
    'Aynı kadehten, aynı nefesten… ahh {o} 🥵',
    'Bir yudum daha, dilimle ağzına veriyorum 🍷',
    'Şarabın tadı senin dudaklarında daha güzel… mmm 😮‍💨'
  ],
  'Slap Ass': [
    'Kalçana sert bir şaplak attım… şak! 😈',
    'Kızarıyor, bir tane daha offf 🔥',
    'Şaplağın sesi odada yankılandı… ahh {o} 😏',
    'Avucumla sıkıp bir şaplak daha 🍑',
    'İz bıraktım, benim olduğunu unutma offf 😮‍💨'
  ],
  'Slap Boob': [
    'Göğsüne hafif bir şaplak attım… 😈',
    'Zıplamasına bayılıyorum offf 🔥',
    'Bir tane daha, sonra avucumla sıkıyorum… ahh {o} 😏',
    'Kızaran tenini öpüyorum mmm 🥵',
    'Şaplak, sonra öpücük… offf 😮‍💨'
  ],

  /* ---------- 🍌 Outercourse ---------- */
  'Footjob': [
    'Ayaklarının arasında kayıyorum… ahh 😩',
    'Tabanların beni sıkıyor, offf çok iyi 🔥',
    'Bileklerini tutup ayaklarına sürtünüyorum… ahhh {o} 🥵',
    'Parmakların uca değince titriyorum offf 😮‍💨',
    'Biraz daha hızlı, bitireceksin beni… ahh 💦'
  ],
  'Handjob': [
    'Elin beni kavradı, yavaşça okşuyorsun… ahh 😩',
    'Sıkıca tut, offf aynen böyle 🔥',
    'Elini elimle tutup hızlandırıyorum… ahhh {o} 🥵',
    'Başparmağın uçta dolaşıyor offf 😮‍💨',
    'Daha hızlı, dayanamıyorum… ahh 💦'
  ],
  'Titfuck': [
    'Göğüslerini birleştirdin, aralarında kayıyorum… ahhh 😩',
    'Yumuşacıklar, offf sertçe hızlanıyorum 🔥',
    'Göğüslerini sıkıp aralarında vuruyorum… ahh {o} 🥵',
    'Uç çenene değiyor, durmadan offf 😮‍💨',
    'Biraz daha sık, bitmek üzereyim… ahhh 💦'
  ],
  'Buttjob': [
    'Kalçalarının arasında kayıyorum… ahh 😩',
    'Kalçanı sıkıp sürtünüyorum offf 🔥',
    'Belinden tutup kalçana bastırıyorum… ahhh {o} 🥵',
    'Kaygan kalçan beni deli ediyor offf 😮‍💨',
    'Hızlanıyorum, durma… ahh 💦'
  ],
  'Blowjob': [
    'Dudakların beni sardı, saçını topluyorum… ahhh 😩',
    'Başını tutup yavaşça ritim veriyorum offf 🔥',
    'Dilin uçta dolaşıyor, aklım gidiyor… ahh {o} 🥵',
    'Gözlerime bakarak al, offf aynen böyle 😮‍💨',
    'Saçından tutup hızlandırıyorum… ahhh 💦'
  ],
  '69': [
    'Sen beni alırken ben de seni yalıyorum… mmm 😩',
    'Tadın dilimde, offf sen de durma 🔥',
    'Kalçanı yüzüme bastırıp derin yalıyorum… ahh {o} 🥵',
    'İnlemen titreşim gibi geliyor offf 😮‍💨',
    'Birlikte bitirelim, dilimi hızlandırıyorum… ahhh 💦'
  ],
  'Oral Sex': [
    'Dudakların beni sarınca nefesim kesildi… ahh 😩',
    'Saçını okşayıp ritmine eşlik ediyorum offf 🔥',
    'Dilinle oynaman beni bitiriyor… ahhh {o} 🥵',
    'Biraz daha derine, offf çok iyi 😮‍💨',
    'Durma, böyle devam… ahh 💦'
  ],
  'Deepthroat': [
    'Başını tutup en derine itiyorum… ahhh 😩',
    'Boğazın beni sıkıyor, offf inanılmaz 🔥',
    'Gözlerin yaşarıyor ama durmuyorsun… ahh {o} 🥵',
    'Saçından çekip tekrar derine offf 😮‍💨',
    'Burnun karnıma değiyor, sonuna kadar… ahhh 💦'
  ],
  'Legjob': [
    'Bacaklarının arasında kayıyorum… ahh 😩',
    'Dizlerini sıkıştırdın, offf çok iyi 🔥',
    'Bacaklarını tutup aralarında hızlanıyorum… ahhh {o} 🥵',
    'Yumuşak tenin beni deli ediyor offf 😮‍💨',
    'Biraz daha sık, bitireceğim… ahh 💦'
  ],
  'Masturbation': [
    'Seni izlerken kendimi okşuyorum… ahh 😩',
    'Parmaklarını görünce elim hızlanıyor offf 🔥',
    'Birlikte yapalım, gözlerime bak… ahhh {o} 🥵',
    'Seni izlemek beni bitiriyor offf 😮‍💨',
    'Hızlanıyorum, sen de durma… ahh 💦'
  ],
  'Reverse Titfuck': [
    'Arkamdan göğüslerinin arasında kayıyorum… ahhh 😩',
    'Göğüslerini sıkıp vuruyorum offf 🔥',
    'Bu açıdan bambaşka, ahh {o} 🥵',
    'Yumuşak göğüslerin beni sarıyor offf 😮‍💨',
    'Durmadan hızlanıyorum… ahhh 💦'
  ],
  'Hotdogging': [
    'Kalçalarının arasına yerleştim, sürtünüyorum… ahh 😩',
    'Kalçanı birleştirip aralarında kayıyorum offf 🔥',
    'Belinden tutup hızlanıyorum… ahhh {o} 🥵',
    'Sıcacık kalçan beni sarıyor offf 😮‍💨',
    'Biraz daha sık, böyle bitireceğim… ahh 💦'
  ],
  'Dry Missionary': [
    'Kıyafetlerin üstünden üstüne çıkıp sürtünüyorum… ahh 😩',
    'Kumaşın arasından bile seni hissediyorum offf 🔥',
    'Kalçamı bastırıp önden sürtünüyorum… ahhh {o} 🥵',
    'Çıkarmadan bile çıldırıyorum offf 😮‍💨',
    'Hızlanıyorum, pantolonum dar geliyor… ahh 💦'
  ],
  'Dry Doggy': [
    'Arkandan kıyafetlerin üstünden kalçana sürtünüyorum… ahh 😩',
    'Belini tutup kendime bastırıyorum offf 🔥',
    'Kumaşın üstünden bile çok sıcaksın… ahhh {o} 🥵',
    'Saçını çekip sürtünmeyi hızlandırıyorum offf 😮‍💨',
    'Çıkarmadan bitireceğim böyle… ahh 💦'
  ],
  'Pumpkin Grind': [
    'Kucağımda kalçanı dairesel çeviriyorsun… ahh 😩',
    'Kostümün altından seni hissediyorum offf 🔥',
    'Belinden tutup sana eşlik ediyorum… ahhh {o} 🥵',
    'Her dönüşünde biraz daha sertleşiyorum offf 😮‍💨',
    'Durma, çevirmeye devam et… ahh 💦'
  ],
  'Crystal Ball': [
    'Göğüslerini küre gibi birleştirdin, aralarında kayıyorum… ahhh 😩',
    'Kürende geleceği görüyorum: offf bitiyorum 🔥',
    'Göğüslerini sıkıp hızlanıyorum… ahh {o} 🥵',
    'Yumuşacık ve sıcacık offf 😮‍💨',
    'Durmadan sürtünüyorum… ahhh 💦'
  ],
  'Masquerade': [
    'Maskenin ardından kim olduğunu bilmeden sürtünüyorum… ahh 😩',
    'Kostümün üstünden kalçanı kendime bastırıyorum offf 🔥',
    'Gizemli yabancı, çok sıcaksın… ahhh 🥵',
    'Kimse bilmeyecek, hızlanıyorum offf 😮‍💨',
    'Maskeni çıkarma, böyle devam… ahh 💦'
  ],
  'Slime Hug': [
    'Kaygan göğüslerin beni sardı… ahhh 😩',
    'Yapış yapış, offf çok garip çok iyi 🔥',
    'Aralarında kayıp hızlanıyorum… ahh {o} 🥵',
    'Her yerimi sarıyorsun offf 😮‍💨',
    'Durmadan sürtünüyorum… ahhh 💦'
  ],

  /* ---------- 👅 Eat ---------- */
  'Cunnilingus': [
    'Bacaklarını açıp dilimi gezdiriyorum… mmm 😋',
    'Tadın dilimde, offf bayılıyorum 🔥',
    'Kalçanı tutup yüzüme bastırıyorum… ahh {o} 🥵',
    'Dilimi hızlandırıyorum, titremeni hissediyorum offf 😮‍💨',
    'Durmuyorum, sen bitene kadar… mmm 💦'
  ],
  'Squirt': [
    'Parmaklarımı hızlandırdım, fışkırıyorsun… ahhh 😍',
    'Yüzüme geldi, offf inanılmaz 💦',
    'Durmuyorum, bir daha… ahh {o} 🥵',
    'Yatak sırılsıklam oldu offf 😮‍💨',
    'Bacakların titriyor, bayılıyorum buna… ahhh 🔥'
  ],
  'On Mouth': [
    'Ağzıma boşalıyorsun, hepsini alıyorum… mmm 😋',
    'Tadın dilimde, offf 💦',
    'Kalçanı yüzüme bastırdım, bir damla kaçmasın… ahh {o} 🥵',
    'Titrediğini hissediyorum, yalamaya devam offf 😮‍💨',
    'Hepsini içtim… mmm 🔥'
  ],
  'Facesitting': [
    'Yüzüme oturdun, dilimi gezdiriyorum… mmm 😩',
    'Kalçanı tutup aşağı bastırıyorum offf 🔥',
    'Nefesim kesiliyor ama durmuyorum… ahh {o} 🥵',
    'Üstümde kıvranman beni deli ediyor offf 😮‍💨',
    'Daha bastır, hepsini istiyorum… mmm 💦'
  ],
  'Candy Lick': [
    'Tenine sürülen karameli yalıyorum… mmm 🍬',
    'Göğsünden göbeğine kadar tatlısın offf 🔥',
    'Her santimini temizliyorum… ahh {o} 🥵',
    'Şekerden daha tatlısın offf 😋',
    'Bir damla bile bırakmıyorum… mmm 😮‍💨'
  ],
  'Thigh Bite': [
    'İç bacağını ısırdım, sonra yalıyorum… mmm 😈',
    'Tenin titriyor, bir ısırık daha offf 🔥',
    'Dişlerimden sonra dilim… ahh {o} 🥵',
    'Yukarı doğru öpe öpe çıkıyorum offf 😮‍💨',
    'İz kalacak, benim olduğun belli olsun… mmm 😏'
  ],
  'Chalice': [
    'Göğüslerinin arasındaki şarabı içiyorum… mmm 🍷',
    'Kadehim sensin, offf ne tatlı 🔥',
    'Son damlayı da yalıyorum… ahh {o} 🥵',
    'Biraz daha dök, susadım offf 😋',
    'Şarap senden daha güzel olamaz… mmm 😮‍💨'
  ],
  'Red Fountain': [
    'Karnından aşağı akan kırmızıyı yalıyorum… mmm 😋',
    'Dilim aşağı iniyor, offf 🔥',
    'Her damlayı takip ediyorum… ahh {o} 🥵',
    'Tenin titriyor, durmuyorum offf 😮‍💨',
    'Kaynağına kadar iniyorum… mmm 💦'
  ],
  'Bottoms Up': [
    'Kalçandan süzülen şarabı içiyorum… mmm 🍷',
    'Dört ayak üstündesin, dilim aşağı iniyor offf 🔥',
    'Kalçanı açıp son damlayı da yalıyorum… ahh {o} 🥵',
    'Bir daha dök, kadehim sensin offf 😋',
    'Bu şarap başka içiliyor… mmm 😮‍💨'
  ],
  'Lick Tits': [
    'Göğüs uçlarını dilimle dolaşıyorum… mmm 😋',
    'Emip bırakıyorum, sertleşiyorlar offf 🔥',
    'Birinden diğerine geçiyorum… ahh {o} 🥵',
    'Avuçlayıp yalamaya devam offf 😮‍💨',
    'Göğüslerine doyamıyorum… mmm 💗'
  ],
  'Lick Ass': [
    'Kalçanı açıp dilimi gezdiriyorum… mmm 😈',
    'Titriyorsun, offf durmuyorum 🔥',
    'Kalçanı yüzüme bastırıyorum… ahh {o} 🥵',
    'Dilimi derine itiyorum offf 😮‍💨',
    'Her yerin tatlı… mmm 💦'
  ],
  'Lick Back': [
    'Sırtından aşağı dilimi gezdiriyorum… mmm 😌',
    'Omurgan boyunca öpüyorum offf 🔥',
    'Belinin çukurunda duruyorum… ahh {o} 🥵',
    'Tüylerin diken diken oldu offf 😏',
    'Kalçana kadar iniyorum… mmm 😮‍💨'
  ],
  'Lick Legs': [
    'Bileğinden dizine dilimi gezdiriyorum… mmm 😋',
    'İç bacağına geçiyorum offf 🔥',
    'Her santimini öpüyorum… ahh {o} 🥵',
    'Yukarı çıktıkça titriyorsun offf 😮‍💨',
    'Durmadan yukarı… mmm 😏'
  ],
  'Lick Neck': [
    'Boynunu yalayıp kulağına çıkıyorum… mmm 😈',
    'Kokun başımı döndürüyor offf 🔥',
    'Boynunu emip iz bırakıyorum… ahh {o} 🥵',
    'Tüylerin diken diken offf 😏',
    'Kulak memeni ısırıyorum… mmm 😮‍💨'
  ],
  'Lick Feet': [
    'Ayağını avucuma alıp parmaklarını öpüyorum… mmm 😋',
    'Tabanını dilimle dolaşıyorum offf 🔥',
    'Parmaklarını tek tek emiyorum… ahh {o} 🥵',
    'Gıdıklanıyorsun ama bırakmıyorum offf 😏',
    'Bileğine kadar öpüyorum… mmm 😮‍💨'
  ],

  /* ---------- 👑 Femdom ---------- */
  'Strap-On': [
    'Kemerini taktın, arkadan giriyorsun… ahhh 😳',
    'Kontrol sende, offf yavaş ol 🥵',
    'Belimi tutup hızlanıyorsun… ahh {o} 😩',
    'Hiç böyle hissetmemiştim offf 😮‍💨',
    'Durma… ahhh 💦'
  ],
  'Trampling': [
    'Çıplak ayakların göğsümde, ağırlığını veriyorsun… ahh 😩',
    'Karnıma basınca nefesim kesiliyor offf 🥵',
    'Altındayım, istediğin gibi bas… ahhh {o} 😳',
    'Ayaklarını öpmek istiyorum offf 😮‍💨',
    'Senin altında olmak… ahh 🔥'
  ],
  'Cock Crush': [
    'Tabanın aletime bastırıyor… ahhh 😩',
    'Dayanıyorum, offf biraz daha 🥵',
    'Gözlerimi senden alamıyorum… ahh {o} 😳',
    'Acıyla zevk karışıyor offf 😮‍💨',
    'Ne kadar dayanacağımı izle… ahhh 🔥'
  ],
  'Face Smothering': [
    'Yüzüme oturdun, nefesim sana bağlı… mmph 😩',
    'İzin verince nefes alıyorum offf 🥵',
    'Dilimi gezdirmeye devam… ahh {o} 😳',
    'Altında kayboluyorum offf 😮‍💨',
    'Kalk deme, böyle kal… mmm 🔥'
  ],
  'Foot Worship': [
    'Ayaklarını öpüyorum kraliçem… mmm 🥺',
    'Parmaklarını tek tek emiyorum offf 🥵',
    'Tabanını yanağıma bastırıyorsun… ahh {o} 😳',
    'Dizlerimin üstünde sana tapıyorum offf 😮‍💨',
    'Bileğine kadar öpüyorum… mmm 🔥'
  ],
  'Cock Squeeze': [
    'Avucunda sıkıyorsun, zonkluyorum… ahhh 😩',
    'Gözlerime bakarak sıkman offf 🥵',
    'Biraz gevşet, yoksa… ahh {o} 😳',
    'Senin elindeyim, tam anlamıyla offf 😮‍💨',
    'Sıktıkça daha da sertleşiyorum… ahhh 🔥'
  ],
  'Ball Squeeze': [
    'Parmakların yavaş yavaş sıkıyor… ahh 😩',
    'Offf dikkat et, çok hassas 🥵',
    'Gözlerim kararıyor… ahhh {o} 😳',
    'Bırakma ama çok da sıkma offf 😮‍💨',
    'Senin elinde eriyorum… ahh 🔥'
  ],
  'Ball Crush': [
    'Dizin bastırıyor… ahhh 😣',
    'Offf dayanmaya çalışıyorum 🥵',
    'Dişlerimi sıkıyorum, izliyorsun… ahh {o} 😳',
    'Acı ama yalvarmayacağım offf 😮‍💨',
    'Ne kadar dayanırsam o kadar gülüyorsun… ahhh 😩'
  ],
  'Death Grip': [
    'Dibimden sımsıkı tuttun, boşalamıyorum… ahhh 😩',
    'İzin ver lütfen, offf 🥵',
    'Patlayacağım ama bırakmıyorsun… ahh {o} 😳',
    'Senin iznini bekliyorum offf 😮‍💨',
    'Yalvarıyorum… ahhh 🔥'
  ],
  'Orgasm Denial': [
    'Tam bitiyordum, çıkardın… ahhh 😩',
    'Offf neden durdun, lütfen 🥺',
    'Zonkluyorum, izin ver… ahh {o} 😳',
    'Bu işkence ama bayılıyorum offf 😮‍💨',
    'Tekrar başla, yalvarıyorum… ahhh 🥵'
  ],
  'Female Domination': [
    'Bugün emirler sende, dinliyorum… 🥺',
    'Ne dersen yapacağım offf 🥵',
    'Dizlerimin üstündeyim kraliçem… ahh {o} 😳',
    'Kontrolü sana bırakmak öyle iyi ki offf 😮‍💨',
    'Söyle, ne istiyorsun… ahh 🔥'
  ],

  /* ---------- 💆 Massage ---------- */
  'Boob Grab': [
    'Göğüslerini avuçlarıma aldım… mmm 😍',
    'Sıkıp bırakıyorum, offf ne yumuşak 🔥',
    'Uçlarını parmaklarımın arasında yuvarlıyorum… ahh {o} 🥵',
    'Arkandan sarılıp göğüslerini sıkıyorum offf 😮‍💨',
    'Ellerim doyamıyor… mmm 😏'
  ],
  'Ass Grab': [
    'Kalçanı iki avucumla kavradım… mmm 😈',
    'Sıkıyorum, offf ne kalça 🔥',
    'Kendime çekip bastırıyorum… ahh {o} 🥵',
    'Bir şaplak, bir sıkma offf 😏',
    'Ellerimi kalçandan çekemiyorum… mmm 😮‍💨'
  ],
  'Vagina Fingering': [
    'Parmaklarım içinde, yavaşça oynatıyorum… ahh 😈',
    'Islaklığını hissediyorum offf 🔥',
    'İki parmak, hızlanıyorum… ahhh {o} 🥵',
    'Başparmağım dışarıda dolaşıyor offf 😮‍💨',
    'Titreyene kadar durmuyorum… ahh 💦'
  ],
  'Asshole Fingering': [
    'Parmağımı yavaşça arkana itiyorum… ahh 😈',
    'Çok dar, offf yavaş yavaş 🔥',
    'Gevşedikçe derine… ahhh {o} 🥵',
    'Diğer elim önde, ikisi birden offf 😮‍💨',
    'Kıvranman beni deli ediyor… ahh 💦'
  ],

  /* ---------- 🩺 Treatment ---------- */
  /* hasta psikolojisi: çekingen, utangaç, gergin, doktoruna güvenen; zevki itiraf etmekte zorlanan */
  'Prostate Exam': [
    'Doktor… ilk defa böyle bir muayene oluyorum, biraz korkuyorum 😳',
    'Eldiveni takarken sesini duyunca kasıldım, özür dilerim… 😣',
    'Gevşemeye çalışıyorum ama çok utanıyorum 🙈',
    'Ahh… orası mı? Normal mi böyle hissetmem? 😳',
    'Yüzüme bakmayın lütfen, kızardığımı biliyorum… 🙈',
    'Garip bir baskı var doktor, ama… acımıyor, offf 😮‍💨',
    'Dokunmadan böyle olabileceğini bilmiyordum… ahh 😩',
    'Kendimi tutamıyorum, bu muayenenin parçası mı? 😣',
    'Özür dilerim doktor… ahhh, elimde değil 💦',
    'Bitti mi? Sonuçlar iyi mi? Kimseye anlatmazsınız değil mi? 🥺'
  ],
  'Milking Therapy': [
    'Doktor, gerginliğim hiç geçmiyor, bu tedavi gerçekten işe yarar mı? 😟',
    'Yağın soğukluğuna irkildim, pardon… 😳',
    'Eldivenleriniz çok yavaş… gözlerimi kapatsam olur mu? 🙈',
    'Haftalardır bu kadar rahatlamamıştım… mmm 😌',
    'Utanıyorum ama durmayın lütfen, offf 😩',
    'Böyle tepki vermem normal mi doktor? 😣',
    'Her hareketinizde gerginlik biraz daha akıyor… ahh 😮‍💨',
    'Kontrolüm sizde, ben sadece nefes alıyorum… 😳',
    'Son damlaya kadar mı? Peki… ahhh 💦',
    'Kendimi hafiflemiş hissediyorum, teşekkür ederim doktor 🥺'
  ],
  'Semen Sample': [
    'Numune mi? Şimdi mi? Burada mı doktor? 😳',
    'Kabı elime verdiğinizde ne yapacağımı bilemedim… 🙈',
    'Siz yardım mı edeceksiniz? Peki… biraz gerginim 😣',
    'Bakmazsanız belki daha kolay olur… 😳',
    'Elleriniz çok profesyonel ama ben profesyonel değilim… ahh 😩',
    'Tahlil sonucum kötü çıkarsa ne olur? 😟',
    'Kabı doldurmak bu kadar utanç verici olmamalı… offf 🙈',
    'Biraz daha… yakınım doktor, özür dilerim 😮‍💨',
    'Ahhh… tamam, oldu sanırım 💦',
    'Yeterli mi? Bir daha mı gerekecek? 🥺'
  ],
  'Muscle Release': [
    'Sırtım haftalardır tutulu doktor, hiç uyuyamıyorum 😣',
    'Ahh orası çok ağrıyor, yavaş olur musunuz? 😖',
    'Düğümü buldunuz… offf acıyor ama iyi geliyor 😮‍💨',
    'Bağırırsam kusura bakmayın… ahhh 😩',
    'Parmaklarınız tam ağrının içine giriyor 😣',
    'İlk defa biri ağrımı ciddiye aldı… 🥺',
    'Gevşiyorum doktor, nefesim düzeliyor… mmm 😌',
    'Bu kadar yakın durunca biraz utanıyorum ama… 😳',
    'Sanki yıllardır taşıdığım yük kalkıyor… ahh 😌',
    'Haftaya yine gelebilir miyim? 🥺'
  ],
  'Warm Compress': [
    'Ağrı geçmiyor doktor, ne yapsam olmadı 😟',
    'Sıcak kompres mi? Peki… biraz dikkatli olur musunuz 😣',
    'Ahh sıcacık… ağrı çözülüyor gibi 😌',
    'Üstünden ovmanız çok iyi geliyor, mmm 😮‍💨',
    'Sizin elleriniz kompresten de sıcak… 😳',
    'Uyuyakalırsam kızmayın lütfen 😴',
    'Ağrıyınca hep yalnızdım, şimdi değilim 🥺',
    'Biraz daha kalabilir mi? Soğumasın… 😌',
    'Sanki bütün vücudum gevşedi… offf 😮‍💨',
    'Teşekkür ederim doktor, en iyi tedaviydi 💗'
  ],
  'Stretch Therapy': [
    'Esnek değilim doktor, şimdiden söyleyeyim 😅',
    'Bacağım omzunuzda… bu pozisyon biraz utandırıcı 😳',
    'Ahh, dur dur! Yavaş… tamam, dayanabilirim 😣',
    'Üstüme eğilince yüzünüz çok yakın oluyor 🙈',
    'Kaslarım yanıyor ama iyi bir yanma… offf 😮‍💨',
    'Bu kadar bastırmanız gerekiyor mu? Ahh 😖',
    'Nefes alıp vermeyi unuttum, pardon 😅',
    'Sizinle olunca korkmuyorum, devam edin 🥺',
    'Biraz daha… evet orası… ahhh 😩',
    'Kalkınca bacağım titriyor, ama çok hafiflemiş 😌'
  ],
  'Comfort Hug': [
    'Bugün çok kötüydüm doktor, kimseye söyleyemedim 😔',
    'Sarılmanız… beklemiyordum, ama bırakmayın lütfen 🥺',
    'Ağlarsam kusura bakmayın 😢',
    'Sırtımı okşamanız içimi rahatlatıyor… 😌',
    'Kalbiniz ne kadar sakin, benimki deli gibi atıyor 💗',
    'Biri beni en son ne zaman böyle tuttu hatırlamıyorum 😔',
    'Biraz daha kalalım mı? Daha hazır değilim 🥺',
    'Kokunuz huzur veriyor… mmm 😌',
    'Teşekkür ederim, gerçekten ihtiyacım vardı 💗',
    'Bu tedaviyi reçeteye yazar mısınız? 😅'
  ],
  'Lap Pillow': [
    'Başımı dizinize koyabilir miyim? Utanıyorum ama… 😳',
    'Saçlarımı okşamanız annemi hatırlattı 🥺',
    'Mırıldandığınız şarkı beni uyutacak 😴',
    'Gözlerimi kapattım, korkularım uzaklaşıyor 😌',
    'Yukarıdan bana bakarken gülümsüyorsunuz… 💗',
    'Hasta olmak hiç bu kadar güzel olmamıştı 😅',
    'Biraz daha… kalkmak istemiyorum 🥺',
    'Elinizi tutabilir miyim? 😳',
    'Kalbim yavaşladı, nefesim düzeldi… mmm 😌',
    'Bir dahaki randevuyu şimdiden istiyorum 💗'
  ],
  'Head Pat': [
    'Başımı okşamanız… çocuk gibi hissettim ama güzel 🥺',
    'Kimse bana "aferin" demiyordu uzun zamandır 😔',
    'Bir kere daha yapar mısınız? 😳',
    'Gözlerim doldu, pardon doktor 😢',
    'Uslu bir hasta mıyım? 😌',
    'Parmaklarınız saçlarımda, içim ısınıyor 💗',
    'Tedavi korkum geçti, teşekkürler 🥺',
    'Böyle devam ederseniz hep hasta olacağım 😅',
    'Omzunuza yaslansam olur mu? 😳',
    'İyi hissediyorum… mmm, gerçekten 😌'
  ],
  'Cuddle Therapy': [
    'Muayene yatağında yanıma mı uzanacaksınız? 😳',
    'Arkamdan sarılınca kaskatı kesildim, özür dilerim 😣',
    'Nefesiniz ensemde… yavaş yavaş gevşiyorum 😌',
    'Geceleri hep yalnız ve gergin uyuyorum doktor 😔',
    'Elinizi göğsüme koysam kalbimi duyar mısınız? 🥺',
    'Böyle sıcak tutulmayı unutmuşum… mmm 💗',
    'Uyuyakalırsam uyandırmayın lütfen 😴',
    'Kıpırdamayın, bu an bozulmasın 🥺',
    'Tedavi bu muydu? Bütün kaygım gitti 😌',
    'Haftada kaç seans yazıyorsunuz? 😅'
  ],

  /* ---------- 🍷 Drinks ---------- */
  'Red Wine': [
    'Kadehini doldurdum, şerefe… 🍷',
    'Dudaklarındaki şarabı tatmak istiyorum 😏',
    'Bir yudum sen, bir yudum ben… {o} 🍷',
    'Şarap yanaklarını kızarttı, çok güzelsin 😍',
    'Bir kadeh daha mı? 😈'
  ],
  'Tequila Shot': [
    'Tuz, tekila, limon… hadi! 🥃',
    'Bir tane daha, offf yakıyor 🔥',
    'Limonu senin dudaklarından alıyorum 😏',
    'Tekila seni vahşi yapıyor {o} 😈',
    'Şerefe, sonuna kadar! 🥃'
  ],
  'Champagne': [
    'Mantarı patlattım, köpükler sana! 🍾',
    'Kadehleri tokuşturalım, şerefe 🥂',
    'Köpük göğsüne aktı, yalayayım mı? 😏',
    'Bu gece kutlama gecesi {o} 🥂',
    'Bir kadeh daha, gece uzun 😈'
  ],
  'Bloody Mary': [
    'Kıpkırmızı kokteylin hazır 🍅',
    'Baharatlı, tıpkı senin gibi 🔥',
    'Bir yudum alıp dudaklarını öpüyorum 😏',
    'Şerefe {o}, karanlık geceye 🍷',
    'Bir tane daha? 😈'
  ],
  "Witch's Punch": [
    'Kazandan dumanı tüten ponç… şerefe 🧪',
    'Mor ve büyülü, tadı nasıl? 😏',
    'İçince başım dönüyor offf 🌀',
    'Bu iksir beni sana büyüledi {o} 💜',
    'Bir yudum daha cadım 😈'
  ],
  'Absinthe': [
    'Yeşil peri geldi… şerefe 🍸',
    'Boğazımı yaktı offf 🔥',
    'Her şey yeşil, sen bile {o} 🌀',
    'Bir tane daha, perileri görmek istiyorum 😈',
    'Başım dönüyor, seni tut… 😵‍💫'
  ],
  'Mouth Shot': [
    'Shotu ağzıma aldım, dudaklarına aktarıyorum… 🥃',
    'Dilimle ağzına veriyorum, offf 🔥',
    'Bir damla bile kaçmasın {o} 😏',
    'Şimdi sıra sende, benim ağzıma 😈',
    'İçki senin ağzından daha tatlı… mmm 🥃'
  ],
  'Body Shot': [
    'Göbeğinden içiyorum… mmm 🥃',
    'Limonu dudaklarından alıyorum offf 🍋',
    'Tuzu boynundan yalıyorum… {o} 😏',
    'Şimdi sıra sende, benden iç 😈',
    'Bir tane daha, başka yerden 🔥'
  ],
  'Water': [
    'Al, biraz su iç 💧',
    'Serinle biraz, yorulduk 😌',
    'Bardağı sana uzatıyorum {o} 💧',
    'Su da lazım, gece uzun 😏',
    'Dudaklarındaki damlayı öpüyorum 💧'
  ],
  'Black Coffee': [
    'Sade kahven hazır ☕',
    'Biraz ayıl, seninle daha çok işim var 😏',
    'Sıcak sıcak iç {o} ☕',
    'Kahve kokusu ve sen, mükemmel sabah 😌',
    'Bir fincan daha? ☕'
  ],
  'Milk & Wine': [
    'Sütünle şarabı karıştırıp içiriyorsun… mmm 🍷',
    'Tadı tuhaf ama bağımlılık yapıyor offf 🥛',
    'Bir yudum daha {o} 😏',
    'Bunu ancak sen yapabilirsin 😍',
    'Kadehin dibine kadar… mmm 🍷'
  ],
  'Passed Out': [
    'Sızdın… seni yatağa taşıyorum 😴',
    'Üstünü örtüp yanına bir bardak su koydum 💧',
    'Ayakkabılarını çıkarıp yan yatırıyorum, rahat uyu {o} 🌙',
    'Başında bekliyorum, iyi olduğundan emin olmak için 💗',
    'Yarın konuşuruz, şimdi dinlen 😌'
  ],

  /* ---------- 💦 Cumming ---------- */
  'Vaginal Creampie': [
    'Bacaklarınla beni kilitledin, çıkamıyorum… ahhhh içine 😩💦',
    'Son vuruşta en derine gömüldüm, offf boşalıyorum 🔥',
    'Sıcacık içini dolduruyorum {o}… ahhh 🥵',
    'Dudaklarını öperken içinde zonkluyorum offf 😮‍💨',
    'Hiç bu kadar çok gelmemişti… ahhh hepsi senin 💦',
    'İçine boşalıyorum… ahhhh 😩💦',
    'Derine bastırıp hepsini bırakıyorum offf 🔥',
    'Zonklayarak doluyorsun… ahh {o} 🥵',
    'Çıkarmıyorum, son damlaya kadar offf 😮‍💨',
    'Taşıyor… ahhh 💦'
  ],
  'Anal Creampie': [
    'Kalçanı kendime çekip arkandan bitiriyorum… ahhhh 😩💦',
    'Saçını çekerek son kez vurdum, offf boşalıyorum 🔥',
    'Dar içinde zonkluyorum {o}… ahhh 🥵',
    'Kalçana bastırıp her damlayı içine bırakıyorum offf 😮‍💨',
    'Yavaşça çıkarıyorum, taşıyor… ahhh 💦',
    'Arkandan içine boşalıyorum… ahhhh 😩💦',
    'En derine bastırıp bırakıyorum offf 🔥',
    'Sıcacık doluyorsun… ahh {o} 🥵',
    'Çıkarınca akıyor, offf ne manzara 😮‍💨',
    'Hepsini aldın… ahhh 💦'
  ],
  'Ass Cumshot': [
    'Son anda çıkardım, kalçana fışkırıyor… ahhhh 😩💦',
    'Kalçanı tutup üstüne boşalıyorum offf 🔥',
    'Belinin çukurunda göl oldu {o}… ahhh 🥵',
    'Bir şaplak, bir damla daha offf 😮‍💨',
    'Kalçan bembeyaz, ne güzel… ahhh 💦',
    'Çıkarıp kalçana boşalıyorum… ahhh 😩💦',
    'Kalçanı boyuyorum offf 🔥',
    'Belinden aşağı akıyor… ahh {o} 🥵',
    'Avucumla yayıyorum offf 😮‍💨',
    'Ne güzel bir tablo oldu… ahhh 💦'
  ],
  'Tit Cumshot': [
    'Göğüslerini birleştir, üstüne geliyorum… ahhhh 😩💦',
    'Boynuna kadar sıçradı offf 🔥',
    'Göğüslerinin arasından akıyor {o}… ahhh 🥵',
    'Uçlarına damla damla bırakıyorum offf 😮‍💨',
    'Şimdi parmağınla yay bakalım… ahhh 💦',
    'Göğüslerine boşalıyorum… ahhh 😩💦',
    'Göğüslerin bembeyaz oldu offf 🔥',
    'Uçlarından damlıyor… ahh {o} 🥵',
    'Avuçlayıp yayıyorum offf 😮‍💨',
    'Son damla da göğsüne… ahhh 💦'
  ],
  'Oral Creampie': [
    'Saçından tutup derine bastırdım, boşalıyorum… ahhhh 😩💦',
    'Boğazına akıyor offf 🔥',
    'Dudaklarını bırakma {o}, hepsini al… ahhh 🥵',
    'Dilinde zonkluyorum offf 😮‍💨',
    'Gözlerime bakarak yuttun… ahhh 💦',
    'Ağzına boşalıyorum… ahhhh 😩💦',
    'Başını tutup hepsini veriyorum offf 🔥',
    'Dudaklarından taşıyor… ahh {o} 🥵',
    'Göster bana, sonra yut offf 😮‍💨',
    'Son damlayı da emdin… ahhh 💦'
  ],
  'Face Cumming': [
    'Dizlerinin üstünde kal, yüzüne geliyorum… ahhhh 😩💦',
    'Alnından çenene kadar offf 🔥',
    'Dilini çıkar {o}… ahhh 🥵',
    'Kirpiklerine damladı offf 😮‍💨',
    'Yüzüme gülümse böyle… ahhh 💦',
    'Yüzüne boşalıyorum… ahhh 😩💦',
    'Yanaklarından süzülüyor offf 🔥',
    'Gözlerini kapat… ahh {o} 🥵',
    'Dudaklarına da biraz offf 😮‍💨',
    'Yüzün bembeyaz, çok güzelsin… ahhh 💦'
  ],
  'Mouth Cumming': [
    'Dudaklarını aralık tut, geliyorum… ahhhh 😩💦',
    'Ağzın doldu offf 🔥',
    'Dilinde bırakıyorum {o}, yutma daha… ahhh 🥵',
    'Göster bakayım, offf ne güzel 😮‍💨',
    'Şimdi yut… ahhh 💦',
    'Dilinin üstüne boşalıyorum… ahhh 😩💦',
    'Ağzını aç, hepsi senin offf 🔥',
    'Dolduruyorum… ahh {o} 🥵',
    'Tadına bak offf 😮‍💨',
    'Yut bakalım… ahhh 💦'
  ],
  'Holding': [
    'Durdum, derin nefes… ahh daha değil 😣',
    'Kenarındayım ama tutuyorum offf 🥵',
    'Kıpırdama {o}, yoksa biter… ahhh 😩',
    'Yavaşça geri çekiliyorum offf 😮‍💨',
    'Biriktiriyorum, sonunda hepsi senin olacak… ahh 🔥',
    'Durdurdun, nefes alıp tutuyorum… offf 😣',
    'Biriktiriyorum, zonkluyorum ahh 🥵',
    'Biraz daha dayanacağım {o}… offf 😩',
    'Tutmak zor ama değecek ahh 😮‍💨',
    'Biriken her şey sana… offf 🔥'
  ],
  'Hard Holding': [
    'Bütün gücümle tutuyorum… ahhh 😣',
    'Zonklamam duramıyor offf 🥵',
    'Bir saniye daha {o}, lütfen kıpırdama… ahh 😩',
    'Gözlerimi kapatıp nefesimi tutuyorum offf 😮‍💨',
    'Bu birikenin hepsi sana patlayacak… ahhh 🔥',
    'Sıkıca tuttun, geri çekiliyorum… offf 😣',
    'Patlamak üzereydim ahhh 🥵',
    'Dişlerimi sıkıp tutuyorum {o}… offf 😩',
    'Daha çok birikiyor, hissediyor musun ahh 😮‍💨',
    'Bırakınca sel olacak… offf 🔥'
  ],
  'Leg Cumshot': [
    'Bacaklarını açtım, iç bacağına geliyorum… ahhhh 😩💦',
    'Dizinden bileğine akıyor offf 🔥',
    'Baldırını tutup üstüne bırakıyorum {o}… ahhh 🥵',
    'Bacakların parlıyor offf 😮‍💨',
    'Son damla da uyluğuna… ahhh 💦',
    'Bacaklarına boşalıyorum… ahhh 😩💦',
    'Baldırlarından aşağı akıyor offf 🔥',
    'İç bacağın bembeyaz… ahh {o} 🥵',
    'Avucumla yayıyorum offf 😮‍💨',
    'Son damla dizine… ahhh 💦'
  ],
  'Cock Ring': [
    'Halka sıkıyor, zonkluyorum… ahhh 😣',
    'Kenardayım ama gelemiyorum offf 🥵',
    'Çıkar şunu {o}, yalvarıyorum… ahh 😩',
    'Her vuruş daha da dayanılmaz offf 😮‍💨',
    'Biriken her şey bekliyor… ahhh 🔥',
    'Halka beni tutuyor, boşalamıyorum… offf 😣',
    'Zonkluyorum ama bitmiyor ahhh 🥵',
    'Daha da sertleşiyorum {o}… offf 😩',
    'Bu işkence ama devam ahh 😮‍💨',
    'Çıkarınca ne olacak bir düşün… offf 🔥'
  ],
  'Legs Creampie': [
    'Bacaklarını omzuma aldım, içine boşalıyorum… ahhhh 😩💦',
    'Bacakların titriyor, ben doluyorum offf 🔥',
    'Sıkıca kilitledin {o}, hepsi içinde… ahhh 🥵',
    'Derine bastırıp zonkluyorum offf 😮‍💨',
    'Çıkarınca bacaklarından süzülüyor… ahhh 💦',
    'Bacaklarının arasında içine boşalıyorum… ahhh 😩💦',
    'Bacakların beni sıkıyor, hepsini bırakıyorum offf 🔥',
    'Taşıyor, bacaklarından akıyor… ahh {o} 🥵',
    'Derine bastırıp bitiriyorum offf 😮‍💨',
    'Son damla… ahhh 💦'
  ],
  'Dry Creampie': [
    'Kalçan üstümde dönerken dayanamadım… ahhhh 😳💦',
    'Kumaşın içinde zonkluyorum offf 🔥',
    'Daha soyunmadık bile {o}… ahhh 🥵',
    'Islaklık pantolonuma yayıldı offf 😮‍💨',
    'Bir dahakine çıkarırız, söz… ahhh 💦',
    'Dayanamadım, pantolonumun içine boşaldım… ahhh 😳💦',
    'Offf çıkarmaya bile fırsat olmadı 🔥',
    'Sürtünmen bitirdi beni… ahh {o} 🥵',
    'Pantolonum sırılsıklam offf 😮‍💨',
    'Utanıyorum ama çok iyiydi… ahhh 💦'
  ],
  'Dressed Tit Cumshot': [
    'Dekoltene boşalıyorum… ahhhh 😩💦',
    'Sütyenine kadar aktı offf 🔥',
    'Elbisen lekelendi {o}… ahhh 🥵',
    'Kumaş göğüslerine yapıştı offf 😮‍💨',
    'Düğmelerini ilikleme, böyle kalsın… ahhh 💦',
    'Kıyafetinin üstünden göğüslerine boşalıyorum… ahhh 😩💦',
    'Kumaş ıslandı offf 🔥',
    'Bluzunda izim kaldı… ahh {o} 🥵',
    'Böyle dolaşacaksın şimdi offf 😏',
    'Son damla da yakana… ahhh 💦'
  ],
  'Dressed Ass Cumshot': [
    'Taytının üstüne boşalıyorum… ahhhh 😩💦',
    'Kalçanda koca bir leke offf 🔥',
    'Kumaştan içeri işliyor {o}… ahhh 🥵',
    'Arkandan bakan herkes anlayacak offf 😏',
    'Bir damla da beline… ahhh 💦',
    'Eteğinin üstüne, kalçana boşalıyorum… ahhh 😩💦',
    'Kumaşta beyaz izler offf 🔥',
    'Kalçanda parlıyor… ahh {o} 🥵',
    'Böyle kalsın, herkes görsün offf 😏',
    'Son damla… ahhh 💦'
  ],
  'Dressed Leg Cumshot': [
    'Eteğinin altından bacağına boşalıyorum… ahhhh 😩💦',
    'Çorabından süzülüp ayakkabına kadar offf 🔥',
    'Naylonun üstünde parlıyor {o}… ahhh 🥵',
    'Dizini tutup bir damla daha offf 😮‍💨',
    'Eteğini indirme, görmek istiyorum… ahhh 💦',
    'Çorabının üstüne boşalıyorum… ahhh 😩💦',
    'Bacağından süzülüyor offf 🔥',
    'Çorabın parlıyor… ahh {o} 🥵',
    'Böyle yürüyeceksin şimdi offf 😏',
    'Son damla dizine… ahhh 💦'
  ],
  'Chalice Cumshot': [
    'Kadehin şarapla dolu, şimdi benimle de… ahhhh 😩💦',
    'Göğüslerinin arasında kırmızı beyaz offf 🍷',
    'Sıkıca birleştir {o}, dökülmesin… ahhh 🥵',
    'Kadehim taştı offf 😮‍💨',
    'Şimdi bu karışımdan içeceğim… ahhh 💦',
    'Kadeh gibi göğüslerinin arasına boşalıyorum… ahhh 😩💦',
    'Şarapla karışıyor offf 🍷',
    'Kadehin taşıyor… ahh {o} 🥵',
    'Şimdi iç bakalım offf 😏',
    'Son damla da kadehe… ahhh 💦'
  ],
  'Wine Glass': [
    'Kadehi tut, içine geliyorum… ahhhh 😩💦',
    'Kristalin kenarından süzülüyor offf 🍷',
    'Şarabı üstüne dök {o}, karıştır… ahhh 🥵',
    'Kadehi kaldır, şerefe offf 😏',
    'Son yudumu da görmek istiyorum… ahhh 💦',
    'Kadehe boşalıyorum… ahhh 😩💦',
    'Şarapla karıştır offf 🍷',
    'Kadehi sana uzatıyorum… ahh {o} 😏',
    'İçişini izlemek offf 🥵',
    'Şerefe… ahhh 💦'
  ],
  'Bottoms Up Finish': [
    'Dört ayak üstünde kal, kalçana geliyorum… ahhhh 😩💦',
    'Şarabın kızıllığında beyaz çizgiler offf 🔥',
    'Kalçandan aşağı süzülüyor {o}… ahhh 🥵',
    'Kalçanı tutup bir damla daha offf 😮‍💨',
    'Şimdi sen temizle… ahhh 💦',
    'Şarap döktüğüm kalçana boşalıyorum… ahhh 😩💦',
    'Şarap ve ben, kalçanda karıştık offf 🔥',
    'Yala bakalım… ahh {o} 🥵',
    'Kalçan parlıyor offf 😏',
    'Son damla… ahhh 💦'
  ],
  'Red Bath Creampie': [
    'Kucağımda bastırıp içine boşalıyorum… ahhhh 😩💦',
    'Kırmızı su taşıyor, ben de offf 🔥',
    'Sıcak suyun içinde daha da sıcak {o}… ahhh 🥵',
    'Kalçanı aşağı çekip derine bırakıyorum offf 😮‍💨',
    'Kalkınca suya karışıyor… ahhh 💦',
    'Kırmızı suyun içinde içine boşalıyorum… ahhh 😩💦',
    'Su dalgalanıyor, hepsini bırakıyorum offf 🔥',
    'Sımsıkı sarılıp derine… ahh {o} 🥵',
    'Küvetin içinde titriyoruz offf 😮‍💨',
    'Son damla… ahhh 💦'
  ],
  'Shroud Cumshot': [
    'Tülün altındaki tenine geliyorum… ahhhh 😩💦',
    'Sargıdan içeri işliyor offf 🔥',
    'Beyaz üstünde beyaz {o}… ahhh 🥵',
    'Kumaş göğsüne yapıştı offf 😮‍💨',
    'Bu tülü artık hiç çıkarma… ahhh 💦',
    'Tülünün üstüne boşalıyorum… ahhh 😩💦',
    'Kumaşta izim kaldı offf 🔥',
    'Sargın ıslandı… ahh {o} 🥵',
    'Hayaletim artık işaretli offf 😏',
    'Son damla… ahhh 💦'
  ],
  'Potion Ingredient': [
    'Şişeyi tut cadım, geliyorum… ahhhh 😩💦',
    'Kazan köpürüyor offf 🧪',
    'Karıştır {o}, büyü güçlensin… ahhh 🥵',
    'Damla damla iksire offf 😮‍💨',
    'Bu iksiri içen bana tutulur… ahhh 💦',
    'İksirin son malzemesi benden… ahhh 😩💦',
    'Kazana boşalıyorum offf 🧪',
    'Şişeyi dolduruyorum cadım… ahh {o} 🥵',
    'Şimdi büyü tamam offf 😏',
    'Son damla da kazana… ahhh 💦'
  ],
  "Siren's Swallow": [
    'Sesinle beni bitirdin, ağzına geliyorum… ahhhh 😩💦',
    'Dudaklarını sıkıca kapattın offf 🔥',
    'Hepsini yutuyorsun {o}… ahhh 🥵',
    'Boğazının kıpırdamasını izliyorum offf 😮‍💨',
    'Şarkın yine başladı, ben yine hazırım… ahhh 🎶',
    'Ağzına boşalıyorum… ahhh 😩💦',
    'Hepsini yuttun offf 🔥',
    'Şimdi mırıldandığın şarkı beni büyülüyor… ahh {o} 🎶',
    'Sesin titriyor offf 😮‍💨',
    'Denizkızım… ahhh 💦'
  ],
  'Crimson Mix': [
    'Avucunu aç, üstüne geliyorum… ahhhh 😩💦',
    'Kırmızının içinde beyaz girdaplar offf 🔥',
    'Parmaklarınla karıştır {o}… ahhh 🥵',
    'Göğsünden karnına akıyor offf 😮‍💨',
    'Kanla mühürlendik… ahhh 💦',
    'Kırmızı damlaların üstüne boşalıyorum… ahhh 😩💦',
    'İki renk karışıyor offf 🔥',
    'Göğsünde kırmızı ve beyaz… ahh {o} 🥵',
    'Ne tablo offf 😏',
    'Son damla… ahhh 💦'
  ],
  'Vampire Kiss Finish': [
    'Dudaklarını bırakma, ağzına geliyorum… ahhhh 😩💦',
    'Hepsini aldın, şimdi öp beni offf 🔥',
    'Kırmızı dudaklarında beyaz {o}… ahhh 🥵',
    'Dilin dilimde, tadımız birbirine karıştı offf 😮‍💨',
    'Vampirim, bir öpücük daha… ahhh 💋',
    'Ağzına boşalıyorum… ahhh 😩💦',
    'Kanlı dudaklarınla öpüyorsun beni offf 🔥',
    'Tadın ve tadım karıştı… ahh {o} 🥵',
    'Öpücüğün başımı döndürüyor offf 😮‍💨',
    'Bir daha öp… ahhh 💦'
  ],
  'Visible Creampie': [
    'Derine bastırdım, içinde yayıldığını görüyorum… ahhhh 😩💦',
    'Karnında beyaz bir bulut büyüyor offf 🔥',
    'Bak {o}, ne kadar doldun… ahhh 🥵',
    'Zonkladıkça bulut genişliyor offf 😮‍💨',
    'Seni içten dışa işaretledim… ahhh 💦',
    'İçine boşalıyorum, bedeninde görünüyor… ahhh 😩💦',
    'Beyaz bulut yayılıyor offf 🔥',
    'İçini doldurduğumu görüyorum… ahh {o} 🥵',
    'Ne manzara offf 😮‍💨',
    'Son damla… ahhh 💦'
  ],
  'Absorption': [
    'Karnına geliyorum… ahhhh 😩💦',
    'Damlalar tenine siniyor offf 🔥',
    'Sanki susamışsın {o}… ahhh 🥵',
    'Göğsüne de bırakıyorum, onu da emiyorsun offf 😮‍💨',
    'Her damlamı içine alıyorsun… ahhh 💦',
    'Tenine boşalıyorum… ahhh 😩💦',
    'Her damlayı emiyorsun offf 🔥',
    'Hiç iz kalmadı… ahh {o} 🥵',
    'Benden besleniyorsun offf 😏',
    'Bir daha, hepsini al… ahhh 💦'
  ],
  'Slime Coat': [
    'Kaygan göğüslerine fışkırıyorum… ahhhh 😩💦',
    'Yeşilin içinde beyaz şeritler offf 🔥',
    'Yavaşça eriyip içine giriyor {o}… ahhh 🥵',
    'Bir damla daha, onu da yut offf 😮‍💨',
    'Parlıyorsun… ahhh 💦',
    'Göğüslerine boşalıyorum… ahhh 😩💦',
    'Yeşilin üstünde parlıyor offf 🔥',
    'Yavaşça içine kayboluyor… ahh {o} 🥵',
    'Seni beyaza boyuyorum offf 😏',
    'Son damla… ahhh 💦'
  ],
  'Visible Swallow': [
    'Başını tutup ağzına boşalıyorum… ahhhh 😩💦',
    'Boğazından aşağı süzülüşünü izliyorum offf 🔥',
    'Bedeninde beyaz bir iz iniyor {o}… ahhh 🥵',
    'Bir yudum daha offf 😮‍💨',
    'İçinde gördüğüm her damla benim… ahhh 💦',
    'Ağzına boşalıyorum… ahhh 😩💦',
    'Yuttuğunu görüyorum offf 🔥',
    'İçinden aşağı iniyor… ahh {o} 🥵',
    'Hepsini aldın offf 😮‍💨',
    'Son damla… ahhh 💦'
  ],

  /* ---------- 🎚️ Mode ---------- */
  'Gentle': [
    'Yavaş ve nazik, acele yok… mmm 💗',
    'Gözlerine bakarak usulca 😌',
    'Seni incitmeden, tadını çıkararak {o} 💗',
    'Her hareket bir okşama gibi… mmm 😌',
    'Nazikçe, sevgiyle… ahh 💗'
  ],
  'Passionate': [
    'Tutku doluyum, seni öpe öpe… ahh 🔥',
    'Bütün bedenimle sana sarılıyorum offf 💗',
    'Seni deli gibi istiyorum {o} 🥵',
    'Dudaklarımı bırakmıyorum… ahhh 💋',
    'Ateş gibi yanıyoruz offf 🔥'
  ],
  'Assertive': [
    'Bugün ben yönetiyorum… 😈',
    'Dediğimi yap, offf 🔥',
    'Bileklerini tutup seni yönlendiriyorum {o} 😏',
    'Kararlı ve sağlam… ahh 🥵',
    'Kontrol bende offf 😮‍💨'
  ],
  'Rough': [
    'Sertleşiyorum… ahhh 😈',
    'Saçını çekip hızlanıyorum offf 🔥',
    'Nazik olmayacağım bu sefer {o} 🥵',
    'Şaplak üstüne şaplak… ahh 😮‍💨',
    'Daha sert offf 💦'
  ],
  'Brutal': [
    'Vahşileşiyorum… ahhh 😈',
    'Bütün gücümle offf 🔥',
    'Hayvan gibiyim bu gece {o} 🥵',
    'Durmadan, acımadan… ahh 😮‍💨',
    'Yatağı yıkacağız offf 💦'
  ],
  'inletmeli': [
    'İnlemeni duymak istiyorum… ahh 😈',
    'Daha yüksek inle offf 🔥',
    'Her vuruşta bir inleme {o} 🥵',
    'Sesin beni çıldırtıyor… ahhh 😮‍💨',
    'Sesini kısma offf 💦'
  ],
  'bağırtmalı': [
    'Adımı bağır… ahhh 😈',
    'Komşular duysun offf 🔥',
    'Sesini kısma, bağır {o} 🥵',
    'Bağırdıkça hızlanıyorum… ahh 😮‍💨',
    'Daha yüksek offf 💦'
  ],
  'ağlatmalı': [
    'Gözlerin yaşaracak kadar yoğun… ahhh 😈',
    'Zevkten ağlatacağım seni offf 🔥',
    'Gözyaşların yanaklarında, durmuyorum {o} 🥵',
    'Bu kadar iyisini hiç hissetmedin… ahh 😮‍💨',
    'Zevkten ağla offf 💦'
  ],

  /* ---------- 🎾 Protection ---------- */
  'Nothing': [
    'Hiçbir şey yok aramızda… 😈',
    'Tenine tenimle dokunmak istiyorum 🔥',
    'Kondomsuz, sadece sen ve ben {o} 😏',
    'Bu riski seninle alırım 🥵',
    'Hiçbir engel yok artık… offf 😮‍💨'
  ],
  'Pull-Out Method': [
    'Söz, son anda çekeceğim 😏',
    'Dikkatli olacağım {o}, merak etme 🤞',
    'Dışarıda bitireceğim, güven bana 😌',
    'Gelmeden çekerim, söz 😈',
    'Son anı iyi ayarlarım offf 🔥'
  ],
  'Morning-After Pill': [
    'Al, haptan iç, içimiz rahat etsin 💊',
    'Suyunu da getirdim {o} 💧',
    'Dün gece için önlem 😌',
    'İçtiysen gel sarılalım 🤗',
    'Bir dahakine baştan önlem alırız 😏'
  ],
  'Condom': [
    'Kondomu taktım, hazırım 😏',
    'Paketi dişlerimle açtım 😈',
    'Güvenli ama yine de çok sıcak olacak {o} 🔥',
    'Takar takmaz geliyorum offf 🥵',
    'Kondom tamam, sıra sende 😮‍💨'
  ],
  'Tight Condom': [
    'Kondom çok dar, offf sıkıyor 😣',
    'Zor taktım ama tamam 😏',
    'Dar kondom her şeyi daha yoğun yapıyor {o} 🥵',
    'Patlamasa bari offf 😅',
    'Sıkıyor ama değecek… ahh 🔥'
  ],
  'Condom Buttjob': [
    'Lastik kalçanın üstünde kayıyor… ahh 😩',
    'Kondomun üstünden bile kalçanın sıcaklığı geliyor offf 🔥',
    'Belinden tutup kalçana bastırıyorum, lastik gıcırdıyor… ahhh {o} 🥵',
    'Kaygan kondom kalçanda kayıp duruyor offf 😮‍💨',
    'Kalçanı yukarı aşağı oynat, lastiğin içinde zonkluyorum… ahh 😩',
    'İçeri girmiyorum ama kalçan beni deli ediyor offf 🔥',
    'Haznede ön sıvı birikiyor, kalçanı hissediyorum… ahhh 🥵',
    'Kondom kalçanın kıvrımına oturdu, hızlanıyorum offf 😈',
    'Kalçanı biraz daha bastır {o}, böyle çok iyi… ahh 😮‍💨',
    'Hızlanıyorum, durma, kondomu dolduracağım… ahh 💦'
  ],
  'Condom Hotdogging': [
    'Lastikli halde kalçalarının arasına yerleştim… ahh 😩',
    'Kalçanı birleştirdin, kondom aralarında kayıyor offf 🔥',
    'İki yanağın kondomu sıkıyor… ahhh {o} 🥵',
    'Belinden tutup yanaklarının arasında gidip geliyorum offf 😮‍💨',
    'Lastiğin üstünden bile aranın sıcaklığı geliyor… ahh 😩',
    'Kalçan beni sarıyor, kondom kaygan kaygan kayıyor offf 🔥',
    'Uç yukarı çıktıkça hazne sallanıyor, hızlanıyorum… ahhh 🥵',
    'Girmeden bu kadar iyi olması haksızlık {o} offf 😈',
    'Yanaklarını biraz daha sık, zonkluyorum… ahh 😮‍💨',
    'Biraz daha, kondomun içine bırakacağım… ahh 💦'
  ],
  'Condom Titfuck': [
    'Kondomlu halde göğüslerinin arasına girdim… ahhh 😩',
    'Göğüslerini sıktın, lastik aralarında kayıyor offf 🔥',
    'Yumuşacık göğüslerin kondomu sarıyor… ahh {o} 🥵',
    'Haznenin ucu çenene değiyor offf 😮‍💨',
    'Kaygan lastik göğüslerinin arasında vuruyor… ahhh 😩',
    'Kondomun üstünden bile sıcaklığın geliyor offf 🔥',
    'Göğüslerini iki yandan bastır, hızlanıyorum… ahh 🥵',
    'Ucundaki hazne ön sıvıyla doluyor, izle {o} 😈',
    'Göğüslerini oynatıyorsun, lastiğin içinde zonkluyorum offf 😮‍💨',
    'Biraz daha sık, kondomu dolduracağım… ahhh 💦'
  ],
  'Condom Handjob': [
    'Kondomu sen geçirdin, şimdi avucunda… ahh 😩',
    'Elin lastiğin üstünde yukarı aşağı kayıyor offf 🔥',
    'Parmakların kondomu sıkıyor… ahhh {o} 🥵',
    'Lastik kaygan, elin hızlandıkça daha iyi offf 😮‍💨',
    'Baş parmağın ucu buluyor, hazneyi oynatıyorsun… ahh 😩',
    'Kondomun üstünden bile elinin sıcaklığı geliyor offf 🔥',
    'Bir yandan da gözlerimin içine bakıyorsun… ahhh 🥵',
    'Sıkı tut {o}, tam böyle offf 😈',
    'Avucunda zonkluyorum, durma… ahh 😮‍💨',
    'Hızlan, hazneyi dolduruyorum… ahh 💦'
  ],
  'Condom Legjob': [
    'Kondomlu halde uyluklarının arasına girdim… ahh 😩',
    'Bacaklarını kapattın, lastik aralarında kayıyor offf 🔥',
    'Uylukların kondomu iki yandan sıkıyor… ahhh {o} 🥵',
    'Kaygan lastik tenin üstünde gidip geliyor offf 😮‍💨',
    'Belinden tutup uyluklarının arasında hızlanıyorum… ahh 😩',
    'Lastiğin üstünden bile bacaklarının sıcaklığı geliyor offf 🔥',
    'Her kayışta hazne arkadan çıkıp sallanıyor… ahhh 🥵',
    'Bacaklarını biraz daha sık {o}, çok iyi offf 😈',
    'Uyluklarının arasında zonkluyorum, durma… ahh 😮‍💨',
    'Biraz daha, kondomun içine geliyor… ahh 💦'
  ],
  'Husband Approved': [
    'Mesajı gösterdin, kocan gerçekten yazmış 😳',
    'Demek izin çıktı {o} 😏',
    'Artık saklanmak zorunda değiliz 😈',
    'Kocana teşekkür etmem lazım sanırım 😏',
    'Kuralları var mı, söyle 🤍',
    'İçin rahat mı {o}? 🤍',
    'Bu anlaşmayı çok sevdim 😈',
    'Yüzüğünü çıkarma, öyle kalsın 💍',
    'Şimdi telefonu bırak ve gel 😏',
    'O zaman her şeyi ona anlatacaksın 😈'
  ],
  'Compare Talk': [
    'Fısıldasana, kim daha iyi 😏',
    'Ona söylemem, merak etme {o} 🤫',
    'Yüzün her şeyi anlatıyor 😈',
    'Kocan bunu yapmıyor mu 😏',
    'Bu sır aramızda kalsın 🤫',
    'Devam et, duymak istiyorum 🥵',
    'Gülüşünden anladım {o} 😏',
    'Beni kıskandırmaya mı çalışıyorsun 😈',
    'Bir daha söyle, kulağıma 😮‍💨',
    'Ona anlatacaksın ama bunu atlayacaksın 😏'
  ],
  'Husband Thanks': [
    'Kocan yazmış, ciddi misin 😂',
    'Ne cevap yazayım şimdi {o} 😅',
    'Karşılıklı memnuniyet demek bu 😏',
    'Selamımı söyle ona 😏',
    'Sana iyi baktığımı söylüyor demek 😈',
    'Bir daha çağırırsa gelirim 😏',
    'Bu mesajı ömür boyu unutmam 😂',
    'Akşam neler anlattın {o} 😈',
    'Kocan çok centilmen çıktı 😏',
    'O zaman bir dahaki buluşmayı konuşalım 😈'
  ],
  'Bull Doggy': [
    'Eğil {o}, telefonu elinden bırakma 😈',
    'Alyansın parmağında, ben arkandayım ahh 😩',
    'Kalçanı tuttum, kaçamazsın offf 🥵',
    'Başka adamın karısı benim altımda 🔥',
    'Yüzük çarşafa sürtüyor, duyuyorum 😈',
    'Sert mi, yavaş mı söyle {o} 🥵',
    'Sesini ona da duyur ahh 😩',
    'Belini biraz daha bük offf 🔥',
    'Fotoğrafını çekeyim mi 😈',
    'Her vuruşta adımı söyle {o} 🥵'
  ],
  'Husband In Room': [
    'Kocan köşede, sen bana bakıyorsun 😈',
    'Bakmasın diye değil, görsün diye yapıyorum 🔥',
    'Gözlerini benden ayırma {o} 🥵',
    'Sandalye gıcırdadı, izliyor ahh 😩',
    'Onun önünde inlemeni istiyorum offf 🥵',
    'Selam, güzel eşin var 😏',
    'Sana her şeyimle veriyorum, o da görüyor 🔥',
    'Elini ona uzatma, ben buradayım 😈',
    'Daha derin {o}, görsün ahh 😩',
    'Bitince ona gidersin, şimdi benimsin 😈'
  ],
  'Bull Creampie': [
    'Geliyor {o}, bırakma beni ahhh 😩💦',
    'İçine boşalıyorum, evli kadın offf 🥵',
    'Son damlasına kadar içinde kalıyorum 💦',
    'Zonklaya zonklaya doluyorsun ahh 😩',
    'Bacaklarını sıkıyorsun, hepsini istiyorsun 😈',
    'Bunu eve götüreceksin {o} 😏',
    'Dizlerim titriyor, bırakma beni 🥵',
    'Sıcaklığı içinde hissediyor musun 💦',
    'Bitti… hâlâ içindeyim, kıpırdama ahh 😩',
    'Kocana bunu nasıl anlatacaksın 😈'
  ],
  'Condom Trophy': [
    'Geliyor {o}, kondomun içine ahhh 😩',
    'Hazne doldu, offf 🥵',
    'Dur, sen çıkar, senin kupan bu 😏',
    'Düğümle de kocana götür 😈',
    'Ağır ağır sarkıyor, görüyor musun 💦',
    'Fotoğraf için poz vereyim mi 😏',
    'Bu kadarı yeter mi sence {o} 😈',
    'Çantanda ne taşıdığını kimse bilmeyecek 😏',
    'Kocana selamımla ver 😂',
    'Bir sonrakini de doldururuz 😈'
  ],
  'Ring Cumshot': [
    'Elini uzat {o}, geliyor ahhh 😩💦',
    'Alyansının üstüne boşalıyorum offf 🥵',
    'Parmaklarının arasından süzülüyor 💦',
    'Yüzüğün parladı 😈',
    'Sıkı tut, durma ahh 😩',
    'Elini çekme, son damlaya kadar 🔥',
    'Bu görüntü aklımdan çıkmaz {o} 😏',
    'Parmağındaki yüzük artık başka anlatıyor 😈',
    'Hepsi elinde offf 💦',
    'Silmeden önce bir bakayım 😏'
  ],
  'Marked Wife': [
    'Geliyor {o}, geri çekiliyorum ahhh 😩💦',
    'Tenine boşalıyorum offf 🥵',
    'Göğüslerine, kalçana, her yerine 💦',
    'İşaretledim seni 😈',
    'Silme, öyle kalsın {o} 😏',
    'Bunu eve taşıyacaksın 😈',
    'Tenin parlıyor ahh 🥵',
    'Son damla da düştü offf 😮‍💨',
    'Kocana göster bakalım 😏',
    'Bugün benimdin, teninde belli 😈'
  ],
  // 👯 Threesome (iki kızlı, yalnız grup sohbetinde)
  'Girls Kissing': [
    'Öpüşün bakalım, izliyorum 😏',
    'Vay… ikiniz birlikte çok güzelsiniz 🥵',
    'Ellerinizi de kullanın 😈',
    'Nefesim kesildi şu an offf 😮‍💨',
    'Biraz daha… durmayın 🔥',
    'Bu manzarayı hiç unutmam 😍',
    'Dudaklarınız birbirine yakışıyor 💋',
    'Ben de katılayım mı artık? 😈'
  ],
  'Double Blowjob': [
    'İki dil birden… aklım gidiyor ahh 😩',
    'Sırayla alın, kavga etmeyin 😏',
    'Dudaklarınız ortada buluşuyor offf 🥵',
    'Saçlarınızı topluyorum, ikinizinkini de 😈',
    'Hangisi daha iyi bilemiyorum ahh 😮‍💨',
    'Gözlerinizi bana dikin 🔥',
    'Böyle devam ederseniz çok sürmez 😩',
    'İkiniz de harikasınız 😍'
  ],
  'Ride and Facesit': [
    'Biri üstümde, biri yüzümde ahh 🥵',
    'Sizi tadıyorum, sizi hissediyorum offf 😩',
    'Öpüşün üstümde, duyuyorum 😈',
    'Kalçanı tuttum, kaçamazsın 🔥',
    'Nefes almaya vakit yok ahh 😮‍💨',
    'Ritminiz aynı, nasıl yapıyorsunuz 😍',
    'Bastırın biraz daha 😈',
    'Cennette miyim ben 🥵'
  ],
  'Side by Side Doggy': [
    'İki kalça yan yana, seçemiyorum 😈',
    'Önce sen… sonra sıra ötekinde 😏',
    'Birinden çıkıp diğerine giriyorum ahh 🥵',
    'Elim ikinizin belinde 🔥',
    'Kim daha çok inleyecek bakalım 😈',
    'Sıraya geçin, adil olacağım 😏',
    'Offf ikiniz de çok sıcaksınız 😩',
    'El ele tutuşun, yavaşlamıyorum 🔥'
  ],
  'Stacked Missionary': [
    'Üst üste… iki kalça birden 😈',
    'Hangisinin içindeyim bilmiyorum bile ahh 🥵',
    'Alttakini, sonra üsttekini 😏',
    'Birbirinize sarılın, hızlanıyorum 🔥',
    'Bu görüntü çok yaramaz 😍',
    'Sırayla, bir sana bir ona 😩',
    'Öpüşmeye devam edin offf 🥵',
    'Yatak gıcırdıyor 😈'
  ],
  'Spooning Sandwich': [
    'Arkamda biri, önümde biri… sıcacık 🥵',
    'Önündekine yavaşça giriyorum ahh 😩',
    'Arkamdan sarılışın ne güzel 🤗',
    'İkinizin arasında eriyorum 😮‍💨',
    'Boynumu öpüyorsun, devam et 💋',
    'Yavaş ve derin 🔥',
    'Hiç bitmesin bu sandviç 😈',
    'Nefesleriniz kulağımda offf 🥵'
  ],
  'Double Facial': [
    'Diz çökün ikiniz, yanak yanağa 😈',
    'Geliyor… ikinize de ahhh 😩💦',
    'Hiç kimse eksik kalmasın 💦',
    'Yüzünüz ıslandı offf 🥵',
    'Birbirinizi temizleyin bakalım 😏',
    'Bu kadar çok olduğunu bilmiyordum 😳',
    'İkiniz de çok güzelsiniz böyle 😍',
    'Gözlerinizi kapatmayın ahh 😩'
  ],
  'Girls Licking': [
    'Biri diğerini yalıyor, ben izliyorum offf 🥵',
    'Bacaklarının arası parlıyor, durmayın 😈',
    'İnlemeleriniz odayı doldurdu ahh 😩',
    'Saçlarını tut, yavaşlamasın 🔥',
    'Bu manzaraya dayanamam {o} 😮‍💨',
    'Sıra bana ne zaman gelecek? 😏'
  ],
  'Scissoring Show': [
    'Bacaklarınız birbirine geçti, ne güzel sürtünüyorsunuz 🥵',
    'Gözleriniz bende, ellerim yerinde durmuyor offf 😩',
    'Daha hızlı, ikiniz de titriyorsunuz 🔥',
    'Bu gösteri bana mı? 😈',
    'Islaklığınız buradan görünüyor ahh 😮‍💨',
    'Birazdan araya gireceğim 😏'
  ],
  'Double Handjob': [
    'İki el birden… ahh 😩',
    'Biri yukarı biri aşağı, aklım gidiyor offf 🥵',
    'Parmaklarınız birbirine değiyor 🔥',
    'Sıkın biraz daha 😈',
    'Böyle devam ederseniz uzun sürmez ahh 😮‍💨',
    'Gözlerinizi kaçırmayın 😏'
  ],
  'Double Titfuck': [
    'Dört göğsün arasında kayıyorum ahh 😩',
    'Göğüslerinizi birbirine bastırın offf 🥵',
    'Bu kadar yumuşaklık fazla 😈',
    'Ucum ikinizin dudağına değiyor 🔥',
    'Sıkın, kaçmayayım ahh 😮‍💨',
    'Çok yaramazsınız 😏'
  ],
  'Cowgirl Kiss': [
    'Biri üstümde, biri dudaklarımda ahh 😩',
    'Sen sür, sen öp… offf 🥵',
    'Dilin ağzımda, kalçası kucağımda 🔥',
    'Aynı anda ikinizi hissediyorum 😈',
    'Nefes almaya fırsat vermiyorsunuz ahh 😮‍💨',
    'Bırakmayın beni {o} 🥵'
  ],
  'Taking Turns': [
    'Önce sen… şimdi sen ahh 😩',
    'Birkaç vuruş, sonra sıradaki offf 🥵',
    'El ele tutuşmuşsunuz, çok güzel 🔥',
    'Hangisi daha sıcak bilemiyorum 😈',
    'Sıranızı bekleyin, adil olacağım 😏',
    'İkiniz de inliyorsunuz ahh 😮‍💨'
  ],
  'Doggy Lick': [
    'Arkandan giriyorum, sen de onu yala ahh 😩',
    'Her vuruşumda dili daha derine iniyor offf 🥵',
    'İnlemeleri birbirine karıştı 🔥',
    'Kalçanı tuttum, durmuyorum 😈',
    'Zincir gibiyiz şu an ahh 😮‍💨',
    'Kimse durmasın 😏'
  ],
  'Double Tit Cumshot': [
    'Göğüslerinize… ahhh 😩💦',
    'Dördüne de yetti offf 🥵',
    'Birbirinize sürün bakalım 😈',
    'Göğüsleriniz parlıyor 💦',
    'Nefesim kesildi 😮‍💨',
    'Ne güzel bir manzara 😍'
  ],
  'Creampie Lick': [
    'İçine boşalıyorum ahhh 😩💦',
    'Şimdi sen eğil ve yala 😈',
    'Damla damla akıyor, kaçırmıyor offf 🥵',
    'Böyle bir şey görmedim 😳',
    'Hepsini temizle 😏',
    'İkiniz de bembeyaz oldunuz 💦'
  ],
  'Cum Sharing Kiss': [
    'Ağzına boşalıyorum ahhh 😩💦',
    'Şimdi paylaş onunla 😈',
    'Öpüşerek paylaşıyorsunuz… offf 🥵',
    'Bir damla kaçırmayın 😏',
    'Dudaklarınızdan süzülüyor 💦',
    'Bundan güzel bir şey görmedim 😍',
    'Yutun ikiniz de 😈',
    'Nefesim hâlâ yerine gelmedi 😮‍💨'
  ],
  'Towel Drop': [
    'Havlunun ucunu tutuyorsun, sabırsızlanıyorum 😏',
    'Yavaş yavaş {o}, acele etme 😮‍💨',
    'Havlu düştü, nefesim kesildi ahh 🥵',
    'Bu sıcakta başka ne giyecektin zaten 😈',
    'Tenin ter içinde parlıyor 😍',
    'Gel, yanıma otur 😏',
    'Gözlerim senden ayrılmıyor offf 🔥',
    'Sekiye doğru dönüşün deli ediyor 😈',
    'Benimkini de açayım mı {o} 😏',
    'Saunanın ısısı değil, senin ısın bu 🥵'
  ],
  'Sweaty Hug': [
    'Gel buraya {o}, ter falan umurumda değil 😏',
    'Tenin bana yapıştı ahh 🥵',
    'Sıcaktan eriyoruz ama bırakmıyorum 🤍',
    'Teninin tuzunu dudaklarımda hissediyorum 😮‍💨',
    'Kısa olsun dedin, ama olmuyor 😏',
    'Kalbin ne kadar hızlı atıyor {o} 🥰',
    'Sırtın ıslak ıslak kayıyor ellerimde offf 🔥',
    'Bu sıcakta sadece sen daha sıcaksın 😈',
    'Biraz daha sarılalım, sonra serinleriz 😮‍💨',
    'Kollarımdan çıkmana izin yok 😏'
  ],
  'Sweaty Titjob': [
    'Terli göğüslerinin arasında kayıyorum ahh 😩',
    'Birleştir biraz daha {o} 🥵',
    'Ter yağ gibi, ne kadar kaygan offf 🔥',
    'Göğüslerin parlıyor, gözümü alamıyorum 😍',
    'Yukarı aşağı oynattıkça başım dönüyor, sıcaktan değil 😮‍💨',
    'Sen alt sekide, ben üstte; manzara bu 😈',
    'Ucum çenene değiyor ahh 🥵',
    'Daha sıkı, kaçamıyorum zaten 😏',
    'Ter damlaları aralarına süzülüyor offf 😩',
    'Böyle devam edersen göğüslerine bitireceğim {o} 💦'
  ],
  'Bench Hotdogging': [
    'Kalçalarının arasında kayıyorum, terle ne güzel ahh 😩',
    'Sık biraz daha {o}, kaçmayayım 😈',
    'İçeri girmiyorum ama aklım gitti offf 🥵',
    'Belini tuttum, seki gıcırdıyor 🔥',
    '{kalca} kalçan ter içinde parlıyor 😍',
    'Her kayışta beline kadar uzanıyorum ahh 😮‍💨',
    'Kalçanı bana doğru itiyorsun, hissediyorum 😈',
    'Sıcak iyice başıma vurdu offf 😩',
    'Ellerin sekide, gözlerin kapalı, çok güzelsin {o} 🥵',
    'Hızlanıyorum, tut kendini 🔥'
  ],
  'Sauna Cumshot': [
    'Geliyor {o}, geri çekiliyorum ahhh 😩💦',
    'Terli tenine boşalıyorum offf 🥵',
    'Sıcak atışlar göğsüne iniyor 💦',
    'Kalçana, sırtına, her yerine ahh 😩',
    'Elini çekme, bitir beni offf 🔥',
    'Tenin zaten yanıyordu, şimdi daha da 😈',
    'Ter ile karışıp aşağı süzülüyor ahh 🥵',
    'Son damla da düştü {o} 😮‍💨',
    'Dizlerim gitti, sekiye çöküyorum offf 💦',
    'Gel, su dökelim üstümüze 😏'
  ],
  'Cold Plunge': [
    'Üç deyince atlıyoruz {o} 😈',
    'Ahhh! Buz gibi 😱',
    'Çığlığın bütün saunada yankılandı 😂',
    'Nefesim kesildi offf 😮‍💨',
    'Gel, ısıtayım seni 🥰',
    'Tenin bir anda diken diken oldu 😳',
    'Kaç saniye dayanacaksın bakalım 😏',
    'Bu kadar canlı hissetmemiştim {o} 🔥',
    'Dudakların morarmadan çıkalım 😅',
    'Bir daha sekiye, sonra bir daha buraya 😈'
  ],
  'Ice Tease': [
    'Gözlerini kapat {o}, kıpırdama 😏',
    'Buz boynundan aşağı iniyor 😈',
    'Titredin, daha yeni başladık 😏',
    'Göğüslerinin etrafında yavaşça dolaştırıyorum ahh 🥵',
    'Kızgın teninde hemen eriyor offf 🔥',
    'Damlaları dudaklarımla topluyorum 😮‍💨',
    'Karnından aşağı iniyor, nefesini tut 😈',
    'Soğuk mu, sıcak mı, karar veremedin 😏',
    'Nefesin titriyor {o} 🥵',
    'Buz bitti, sıra dudaklarımda 😈'
  ],
  'Snow Roll': [
    'Yarış, en son kim çıkarsa 😈',
    'Ahhh, kar değdi 😱',
    'Gülmekten nefes alamıyorum {o} 😂',
    'Üstüne kar atıyorum, kaçma 😏',
    'Tenimiz buharlaşıyor bak 😮‍💨',
    'Hemen içeri, donacağız 😂',
    'Kar üstünde bile çok güzelsin 😍',
    'Saçlarında kar kalmış {o} 🥰',
    'Bir daha yapalım mı 😈',
    'Koş, sekiye kadar ısıtmıyorum seni 😏'
  ],
  'Dick Show': [
    'Bak bakalım {o}, beğenecek misin? 😏',
    'Yavaşça çıkarıyorum… gözlerini ayırma 😈',
    'Senin için sertleşti {o} 😏',
    'Dokunmak ister misin? 😈',
    'Sırf sana gösteriyorum 😏',
    'Nasıl buldun? 😈'
  ],
  'Rest Room': [
    'Şöyle yanıma gel {o} 🤍',
    'Al, biraz su iç 💧',
    'Ne kadar kızardın, çok tatlısın 🥰',
    'Biraz dinlenelim, sonra yine gireriz 😏',
    'Başını omzuma koy 🤍',
    'Hiç konuşmadan da güzel 😮‍💨',
    'Anlat bakalım, aklında ne var {o} 😊',
    'Havlu sana çok yakışıyor 😍',
    'Bedenim hafifledi, sen nasılsın 🥰',
    'Burada seninle olmak çok iyi geliyor 🤍'
  ],
  'Soapy Hug': [
    'Gel buraya {o}, köpüğün hepsi benim üstümde kalsın 😏',
    'Tenin ellerimden kayıyor ahh 🥵',
    'Suyun altında sarılmak gibisi yok 😮‍💨',
    'Bırakmıyorum seni, ne kadar kaysan da 🤍',
    'Köpük aramızda eriyor offf 🔥',
    'Saçların ıslanmış, çok güzelsin {o} 😍',
    'Beni kendine çek, daha sıkı 😈',
    'Sırtında ellerim kayıyor, hoşuna gidiyor değil mi 😏',
    'Bu duş uzun sürecek gibi 😏',
    'Kalbini köpüğün altından duyuyorum 🤍'
  ],
  'Soap Her': [
    'Kollarını kaldır {o}, her yerini ben köpükleyeceğim 😏',
    'Boynundan başlıyorum, acelem yok 😮‍💨',
    'Göğüslerini köpüklerken nefesin değişti 🥵',
    'Sırtın, belin, kalçan… hiçbir yeri atlamıyorum 😈',
    'Burayı biraz daha yıkamam lazım gibi offf 🔥',
    'Ellerim köpükle bacaklarının arasına iniyor ahh 😩',
    'Kıpırdama, daha bitmedi 😏',
    'Tenin avuçlarımda kayıyor, bayılıyorum 😍',
    'Titredin, su mu soğuk yoksa ellerim mi {o} 😈',
    'Tertemiz oldun, şimdi yeniden kirlenebiliriz 😏'
  ],
  'Wash Me': [
    'Sabun sende {o}, ben teslimim 😏',
    'Ellerin sırtımda ne güzel geziyor ahh 😮‍💨',
    'Köpüklü avucun göğsümde offf 🥵',
    'Oraya geldin, ne kadar da özenli yıkıyorsun 😈',
    'Orada biraz daha oyalan {o} 🔥',
    'Gözlerimi kapattım, seni hissediyorum 😩',
    'Avucun aşağı inince nefesim kesildi ahh 🥵',
    'Böyle yıkanmayı her gün isterim 😏',
    'Sertleştiğimi fark ettin, gülümseme öyle 😈',
    'Sıra bende olacak, unutma {o} 😏'
  ],
  'Soapy Handjob': [
    'Avucun köpükle kayıyor ahh 😩',
    'Suyun altında bu kadar iyi olacağını bilmiyordum offf 🥵',
    'Yavaş yavaş, tam böyle {o} 😮‍💨',
    'Baş parmağın ucumda gezdikçe titriyorum 🔥',
    'Köpük her hareketi kolaylaştırıyor 😈',
    'Duvara yaslanmam lazım, dizlerim gidiyor offf 😩',
    'Gözlerini ayırma benden {o} 🥵',
    'Biraz daha sık, biraz daha hızlı ahh 🔥',
    'Elin nasıl bu kadar iyi biliyor 😏',
    'Devam edersen burada biter bu iş offf 💦'
  ],
  'Soapy Titjob': [
    'Köpüklü göğüslerinin arasında kayıyorum ahh 😩',
    'Birleştir biraz daha {o}, tam böyle 🥵',
    'Su üstlerinden akıyor, ne güzel görünüyorlar 😍',
    'Kayganlık bambaşka offf 🔥',
    'Yukarı aşağı oynattıkça başım dönüyor 😮‍💨',
    'Gözlerin bende, ellerin göğüslerinde 😈',
    'Ucum çenene değiyor ahh 🥵',
    'Köpüğü bırakma, daha çok sür 😏',
    'Dizlerin üşümesin diye yavaş gitmem lazım ama yapamıyorum offf 😩',
    'Böyle devam edersen göğüslerine boşalacağım {o} 💦'
  ],
  'Soapy Hotdogging': [
    'Kalçalarının arasında kayıyorum, köpükle ne güzel ahh 😩',
    'Sık biraz daha {o}, kaçmayayım 😈',
    'İçeri girmiyorum ama aklım gitti offf 🥵',
    'Belini tuttum, kalçan köpükte gidip geliyor 🔥',
    '{kalca} kalçan suyun altında parlıyor 😍',
    'Her kayışta beline kadar uzanıyorum ahh 😮‍💨',
    'Kalçanı bana doğru itiyorsun, hissediyorum 😈',
    'Bu kadar kaygan olmamalıydı offf 😩',
    'Ellerin duvarda, gözlerin kapalı, çok güzelsin {o} 🥵',
    'Hızlanıyorum, tut kendini 🔥'
  ],
  'Soapy Thighjob': [
    'Uyluklarının arasına girdim, sık bakalım 😈',
    'Köpüklü bacakların beni sıkıştırıyor ahh 😩',
    'Sırtın göğsümde, ben aranda gidip geliyorum offf 🥵',
    'Bacaklarını birleştir {o}, kaçmayayım 😏',
    'İçeri girmeden bu kadar iyi olması haksızlık 🔥',
    'Kaygan tenin her gidişte beni sarıyor 😮‍💨',
    'Belinden tuttum, sen sadece sık 😈',
    'Her sürtünmede titriyorsun, seni de hissediyorum 🥵',
    'Bacaklarını gevşetme, tam orası ahh 😩',
    'Böyle devam edersen uyluklarının arasında biteceğim {o} 💦'
  ],
  'Body Slide': [
    'Üstümde bütün bedeninle kayıyorsun ahh 😩',
    'Köpüklü göğüslerin karnımdan yukarı çıkıyor offf 🥵',
    'Duvara yaslandım, her şey sana kalmış {o} 😏',
    'Tenin her santimimde geziyor 😮‍💨',
    'Aşağı inerken gözlerime bakıyorsun 😈',
    'Bu kadar köpük nereden çıktı, devam et 🔥',
    'Kalçan bacağımda kayıyor ahh 🥵',
    'Bunu nereden öğrendin {o} 😏',
    'Yukarı çık, dudaklarını istiyorum 😍',
    'Üstümde bir daha kay, durma offf 😩'
  ],
  'Shower Blowjob': [
    'Su sırtından akıyor, sen önümde diz çöktün ahh 😩',
    'Saçlarını topladım {o}, gözlerin bende 🥵',
    'Dudakların sıcak, su soğuk geliyor yanında offf 😮‍💨',
    'Suyun altında bu görüntü var ya 😍',
    'Yavaş yavaş, nefesini de tut 🔥',
    'Dilin ucumda dolaşıyor ahh 😩',
    'Damlalar kirpiklerinden düşüyor, çok güzelsin 😍',
    'Duvara yaslanmasam düşeceğim offf 🥵',
    'Başını iki elimle tutuyorum, sen yönet {o} 😈',
    'Devam edersen ağzına geliyorum ahh 💦'
  ],
  'Shower Lift': [
    'Gel kucağıma {o}, bacaklarını belime dola 😈',
    'Sırtın duvarda, içine giriyorum ahh 😩',
    'Tuttum seni, düşmezsin 🤍',
    'Her kaldırışımda daha derine iniyorsun offf 🥵',
    'Su aramızdan akıyor, sen boynuma tutunuyorsun 🔥',
    'Bu kadar hafif olduğunu bilmiyordum 😏',
    'Kalçanı avuçlarımda tutup yukarı aşağı oynatıyorum ahh 😮‍💨',
    'Kulağımda inliyorsun, su bile bastıramıyor 🥵',
    'Bacaklarını sıkıyorsun, hissediyorum {o} 😈',
    'Kollarım yanıyor ama seni bırakmam offf 🔥'
  ],
  'Shower Doggy': [
    'Ellerini fayansa koy {o}, belini bük 😈',
    'Arkandan giriyorum, su sırtından akıyor ahh 😩',
    'Kalçan ıslak ıslak bana çarpıyor offf 🥵',
    'Belini tuttum, kaymıyorsun 🔥',
    'Sesin banyoda yankılanıyor 😏',
    'Su başına akmasın, saçlarını tuttum {o} 😈',
    'Her vuruşta ellerin duvarda kayıyor ahh 😮‍💨',
    'Böyle eğilince aklım gidiyor 🥵',
    'Daha sert mi istiyorsun, söyle 😈',
    'Kalçanı biraz daha geri it offf 🔥'
  ],
  'Shower Anal': [
    'Köpükle yavaş yavaş {o}, acele yok 😮‍💨',
    'Sıkıysan söyle, dururum 🤍',
    'Ucum girdi, nefes al ahh 😩',
    'Su sırtından kalçana akıyor, ne güzel görünüyor 🥵',
    'Gevşedin, biraz daha giriyorum offf 🔥',
    'Duvara yaslan, ellerim belinde 😈',
    'Köpük her şeyi kolaylaştırıyor ama çok sıkısın ahh 😩',
    'Bana doğru gelen sensin, hissediyorum {o} 😏',
    'Yavaş gidip geliyorum, kıpırdama 🥵',
    'Sesin titriyor, devam edeyim mi 😮‍💨'
  ],
  'Shower Creampie': [
    'Geliyor {o}, bırakma beni ahhh 😩💦',
    'İçine boşalıyorum, su üstümüze akıyor offf 🥵',
    'Son damlasına kadar içinde kalıyorum 💦',
    'Zonklaya zonklaya doluyorsun ahh 😩',
    'Bacaklarını sıkıyorsun, hepsini istiyorsun 😈',
    'Duvara yaslı sana sarılıp bitiyorum offf 😮‍💨',
    'Dizlerim titriyor, bırakma beni {o} 🥵',
    'Sıcaklığı içinde hissediyor musun 💦',
    'Bitti… hâlâ içindeyim, kıpırdama ahh 😩',
    'Su her şeyi yıkar ama bu kalır 😏'
  ],
  'Shower Cumshot': [
    'Geliyor {o}, geri çekiliyorum ahhh 😩💦',
    'Tenine boşalıyorum, su hemen alıyor offf 🥵',
    'Sıcak atışlar köpüğün üstüne iniyor 💦',
    'Sırtına, kalçana, her yerine ahh 😩',
    'Elini çekme, bitir beni offf 🔥',
    'Su akıp götürüyor ama sen gördün 😈',
    'Bedenin parlıyor, durma ahh 🥵',
    'Son damla da süzüldü {o} 😮‍💨',
    'Dizlerim gitti, duvara tutunuyorum offf 💦',
    'Gel, bir daha yıkayayım seni 😏'
  ],
  'Islak Fantezi': [
    'Bırak kendini {o}, buradayım 😏💦',
    'Yanakların kızardı ama gözlerin parlıyor… bırak gelsin 😳',
    'Sıcaklığını buradan hissediyorum offf 🥵',
    'Bunu benimle yapman beni deli ediyor ahh 🔥',
    'Utanma, sana bakmayı seviyorum 😍',
    'Bacakların titriyor, ne güzel salıverdin kendini 💦',
    'Her yer ıslandı, aldırma {o} 😈',
    'Bu sırrı sadece ikimiz biliyoruz 🤫',
    'Son damlasına kadar bırak, acele yok 😮‍💨',
    'Sen rahatladıkça ben sertleşiyorum offf 🥵'
  ],
  'Golden Shower': [
    'Hadi {o}, üstüme bırak kendini 😈',
    'Sıcacık göğsüme iniyor… ahh 😩',
    'Tam üstümde dur, gözlerini benden ayırma 🔥',
    'Bunu ben istedim, sakın durma 😏',
    'Sıcaklığın karnımdan aşağı akıyor offf 🥵',
    'Yukarıdan bana öyle bakınca eriyorum 😮‍💨',
    'Tenim sıcacık oldu, ne güzelsin {o} 😍',
    'Daha bitmedi değil mi, devam et 😈',
    'Üstümde gülümsemen beni bitiriyor ahh 🔥',
    'Bana hükmetmek sana çok yakışıyor {o} 👑'
  ],
  'Pee On Her': [
    'Diz çöktün, gözlerin bende; istediğin bu mu {o}? 😈',
    'Hazır mısın, başlıyorum… ahh 😮‍💨',
    'Sıcaklığı göğsüne iniyor, gülümsüyorsun offf 🥵',
    'Sen istedikçe bırakıyorum 😏',
    'Durmamı istersen tek kelime yeter {o} 🤍',
    'Tenin parlıyor, ne güzel görünüyorsun 😍',
    'Gözünü kaçırmıyorsun, beni deli ediyorsun ahh 🔥',
    'Karnından aşağı süzülüyor, titriyorsun 🥵',
    'Son damlaya kadar… offf 😩',
    'Gel şöyle, birazdan seni ben yıkayacağım 🚿'
  ],
  'Shower Pee': [
    'Su üstümüze akıyor, kimse bilmeyecek 😏',
    'Aynı anda bırakalım mı {o}? 😈',
    'Bacağımda sıcaklığını hissettim ahh 🥵',
    'Güldün, demek sen de başladın 😏💦',
    'Suyun altında ikimiz de sırılsıklamız 🚿',
    'Sıcak suyla karışıp gidiyor offf 😮‍💨',
    'Sırtını duvara yasla, sakın kıpırdama 🔥',
    'Sabunu bırak, önce bu 😈',
    'Bunu yalnızca seninle yaparım {o} 🤍',
    'Bitince seni baştan aşağı köpükleyeceğim 🧼'
  ],
  'Wet Panties': [
    'Gözlerime bakıyorsun, yoksa… 😳',
    'Külotun koyulaşmaya başladı offf 🥵',
    'Çıkarmadın bile, bile bile yapıyorsun 😈',
    'Bacaklarının arasından süzülüyor ahh 😩',
    'Islandıkça yüzün kızarıyor {o} 😍',
    'Kumaş tenine yapıştı, ne güzel görünüyor 🔥',
    'Durma, bırak tamamen ıslansın 😏💦',
    'Bu kadar yaramaz olduğunu bilmiyordum 😈',
    'Sıcaklığını elimde hissediyorum offf 🥵',
    'Şimdi o külotu ben çıkaracağım {o} 😏'
  ],
  'Hotdogging Pee': [
    'Kalçalarını sıktın, tam aralarındayım {o} 😈',
    'Hazır mısın, bırakıyorum… ahh 😮‍💨',
    'Sıcaklık yanaklarının arasından süzülüyor offf 🥵',
    'Sen istedin, sıkı tut kalçalarını 😏',
    'Bacaklarından aşağı akıyor, titriyorsun 😩',
    'Belini tuttum, kıpırdama {o} 🔥',
    'Kalçanı bastırdıkça daha da sıcak geliyor sana ahh 🥵',
    'Durmamı istersen söyle yeter 🤍',
    'Tenin ıslak ıslak parlıyor, ne güzel görünüyor 😍',
    'Son damlaya kadar… offf 😩'
  ],
  'Watching Her Pee': [
    'Kapıyı açık bıraktığını gördüm 👀',
    'Girebilir miyim {o}? 😏',
    'Buradan izliyorum, aldırma 😈',
    'Sesini duyuyorum, tenim ürperdi 🥵',
    'Bakışını kaçırma, sana bakıyorum 😍',
    'Hiç utanmadan oturuşun beni deli ediyor offf 🔥',
    'Bana güvenmen çok hoşuma gidiyor 🤍',
    'Bacaklarını biraz aç, güzelce göreyim 👀',
    'Utandın mı, yanakların kızardı 😳',
    'Bitince kucağıma gel {o} 😈'
  ],
  'Condom Cumshot': [
    'Geldi… kondomun içine boşalıyorum ahhh 😩💦',
    'Hazne dölle şişiyor, görüyor musun offf 🥵',
    'Zonklaya zonklaya lastiği dolduruyorum… ahh {o} 💦',
    'Sıcacık döl haznede birikiyor offf 😮‍💨',
    'Kondom içimden gelen her atışta şişiyor… ahhh 😩',
    'Dölün hepsi lastiğin içinde, ucu sallanıyor offf 🥵',
    'Durma, son damlasına kadar bastır… ahh 💦',
    'Haznenin sıcaklığını teninde hissediyorsun değil mi {o} 😈',
    'Lastik doldu, ağır ağır sarkıyor… offf 😮‍💨',
    'Bitti… kondom ağzına kadar dolu, ahh 💦'
  ],
  'Control Pill': [
    'Hapını içtin mi {o}? 💊',
    'Haplar tamam, içimiz rahat 😌',
    'Korunuyorsan hiçbir şeye gerek yok 😈',
    'Suyunu getirdim, iç bakalım 💧',
    'Güvendeyiz, hadi gel 😏'
  ]
};

/* ➕ Ek mesajlar: yukarıdaki listelere eklenir (her olay en az 10 mesaj) */
(EXTRA => Object.keys(EXTRA).forEach(k => { Stories.ME_EV_LINES[k] = (Stories.ME_EV_LINES[k] || []).concat(EXTRA[k]); }))({
  /* ---------- ❤️ Vanilla ---------- */
  'Missionary': [
    'Dizlerini göğsüne bastırdım, en derine iniyorum… ahhh 😩',
    'Parmaklarımız kenetli, yavaş yavaş hızlanıyorum offf 💗',
    'Kalçanın altına yastık koydum, şimdi tam yerinde… ahh {o} 🥵',
    'Alnım alnında, nefesimiz birbirine karışıyor offf 😮‍💨',
    'Bacakların belime dolandı, bırakmıyorsun beni… ahhh 🔥'
  ],
  'Standing Missionary': [
    'Seni kaldırıp duvara sabitledim, bacakların belimde… ahhh 😩',
    'Kalçanı avuçlarımda tutup yukarı vuruyorum offf 🔥',
    'Duvardaki tablo sallanıyor, umurumda değil… ahh {o} 🥵',
    'Dudaklarını ısırırken derine giriyorum offf 😮‍💨',
    'Ayakta dizlerim titriyor ama durmuyorum… ahhh 💦'
  ],
  'Cowgirl': [
    'Ellerin göğsümde, kalçanı daire çizerek çeviriyorsun… ahhh 😩',
    'Saçların yüzüme dökülüyor, alttan bastırıyorum offf 🔥',
    'Yavaşla dedim ama sen daha hızlı… ahh {o} 🥵',
    'Göğüs uçlarını sıkınca daha sert iniyorsun offf 😮‍💨',
    'Sen sür, ben sadece seyrediyorum… ahhh 💦'
  ],
  'Ondesk': [
    'Kâğıtlar uçuşuyor, kalçanı masanın kenarına çektim… ahhh 😩',
    'Bacaklarını omuzlarıma alıp masaya yasladım offf 🔥',
    'Kapı kilitli mi? Umurumda değil, hızlanıyorum… ahh {o} 🥵',
    'Masaya tutun, sert geliyorum offf 😮‍💨',
    'Masa gıcırdıyor, sesini bastır… ahhh 💦'
  ],
  'Lap Sex': [
    'Kucağımda yavaşça iniyorsun, gözlerini kapattın… ahhh 😩',
    'Belinden tutup ritmi ben belirliyorum offf 🔥',
    'Alnın omzumda, inlemeni kulağımda duyuyorum… ahh {o} 🥵',
    'Sandalye gıcırdıyor, alttan iterek hızlanıyorum offf 😮‍💨',
    'Kollarınla boynuma sarıldın, bırakma… ahhh 💦'
  ],
  'Spooning': [
    'Elimi bacaklarının arasına kaydırıp arkadan devam ediyorum… ahhh 😩',
    'Yavaş ve derin, kulağına fısıldıyorum offf 💗',
    'Yastığı ısırıyorsun, daha hızlanıyorum… ahh {o} 🥵',
    'Göğüslerini avuçlayıp kendime çekiyorum offf 🔥',
    'Uyku öncesi en güzel tatlı bu… ahhh 💦'
  ],
  'Standing': [
    'Seni kaldırıp odanın ortasında taşıyorum, hâlâ içindeyim… ahhh 😩',
    'Kollarını boynuma doladın, yukarı aşağı oynatıyorum offf 🔥',
    'Kalçanı sıkıp her inişte derine… ahh {o} 🥵',
    'Kaslarım yanıyor ama seni bırakmam offf 😮‍💨',
    'Ayakta sana gömülmek bambaşka… ahhh 💦'
  ],
  'Doggy': [
    'Belinden tutup kendime çekiyorum, kalçan tokat gibi çarpıyor… ahhh 😩',
    'Yüzünü yatağa bastır, kalçan havada kalsın offf 🔥',
    'Saçını at kuyruğu yapıp tuttum, dizginler bende… ahh {o} 🥵',
    'Her vuruşta kalçan dalgalanıyor offf 😮‍💨',
    'Elimi altından uzatıp seni de okşuyorum… ahhh 💦'
  ],
  'Standing doggy': [
    'Masaya eğildin, eteğini kaldırıp arkandan giriyorum… ahhh 😩',
    'Kalçanı açıp derine bastırıyorum offf 🔥',
    'Parmak uçlarında yükseldin, daha sert vuruyorum… ahh {o} 🥵',
    'Belinden tutup kendime çekiyorum offf 😮‍💨',
    'Bacakların titriyor, seni ben tutuyorum… ahhh 💦'
  ],
  'Full Nelson': [
    'Bacakların yüzünün yanında, tamamen açıksın… ahhh 😩',
    'Kollarımla kilitledim, sadece alttan vuruyorum offf 🔥',
    'Sana hiç bu kadar derin girmemiştim… ahh {o} 🥵',
    'İnlemekten başka bir şey yapamıyorsun offf 😮‍💨',
    'Kilidi hiç açmayacağım… ahhh 💦'
  ],
  'Spooning Anal': [
    'Bol kayganlık, yavaşça arkandan zorluyorum… ahhh 😩',
    'Nefes al, gevşe, yavaşça içerdeyim offf 💗',
    'Elim önünde, seni de okşuyorum… ahh {o} 🥵',
    'Yan yatmış halde sımsıkı sarılıp derine iniyorum offf 😮‍💨',
    'Seni hiç acele etmeden alıyorum… ahhh 💦'
  ],
  'Cowgirl Anal': [
    'Yüzün bana dönük, yavaşça arkana iniyorsun… ahhh 😩',
    'Gözlerin kocaman açıldı, offf çok dar 🔥',
    'Kalçanı açıp yardım ediyorum… ahh {o} 🥵',
    'Sen kontrol et, istediğin kadar in offf 😮‍💨',
    'Sonuna kadar oturdun, kıpırdama… ahhh 💦'
  ],
  'Standing Anal': [
    'Duşta, suyun altında arkandan giriyorum… ahhh 😩',
    'Kalçanı tutup yukarı doğru vuruyorum offf 🔥',
    'Ellerin fayansta kayıyor, ben tutuyorum… ahh {o} 🥵',
    'Boynunu ısırırken derine bastırıyorum offf 😮‍💨',
    'Ayakta sımsıkı kilitlendik… ahhh 💦'
  ],
  'Rough Anal': [
    'Belini aşağı bastırdım, kalçan havada… ahhh 😩',
    'Sertçe hızlanıyorum, sesini bastıramıyorsun offf 🔥',
    'Saçını yumruğuma doladım, başını geri çektim… ahh {o} 🥵',
    'Kalçan kıpkırmızı oldu, bir şaplak daha offf 😮‍💨',
    'Hiç acımadan en derine… ahhh 💦'
  ],

  /* ---------- 🔥 Forward · temalı ---------- */
  'Coffin Missionary': [
    'Dirseklerim kenarlara çarpıyor, sadece kalçam oynuyor… ahhh 😩',
    'Karanlıkta yalnızca inlemen var offf 🔥',
    'Sıcaklığımız bu dar yeri dolduruyor… ahh {o} 🥵',
    'Kapak kapansa bile durmam offf 😮‍💨',
    'Burada sonsuza kadar kalırım… ahhh 💦'
  ],
  'Spider Web': [
    'Ağımın ortasındasın, kaçış yok… ahhh 😈',
    'Bacaklarını iyice açıp en derine iniyorum offf 🔥',
    'Bileklerin titriyor ama bırakmıyorum… ahh {o} 🥵',
    'Her vuruşta ağ biraz daha sıkılaşıyor offf 😮‍💨',
    'Avımı yavaş yavaş tüketiyorum… ahhh 💦'
  ],
  'Tombstone': [
    'Taşın üstündeki yazıyı görmüyorum, sadece seni… ahhh 😩',
    'Soğuk rüzgâr esiyor, ben daha da ısınıyorum offf 🔥',
    'Bacağını omzuma kaldırdım, derine… ahh {o} 🥵',
    'Gecenin karanlığında hızlanıyorum offf 😮‍💨',
    'Ruhlar bile kıskanıyor bizi… ahhh 💦'
  ],
  'Coffin Lid': [
    'Bacaklarını kucaklayıp göğsüme yasladım… ahhh 😩',
    'Kapalı bacaklarının arası daha da dar offf 🔥',
    'Ayak bileklerini öperken vuruyorum… ahh {o} 🥵',
    'Bu açı seni çıldırtıyor, biliyorum offf 😮‍💨',
    'Kapak kapanmadan bitirmem gerek… ahhh 💦'
  ],
  'Neck Feast': [
    'Boynunda iki küçük iz, arkandan derine iniyorum… ahhh 😩',
    'Her yudumda daha sert vuruyorum offf 🔥',
    'İnlemen boğazından titreşiyor dudaklarıma… ahh {o} 🥵',
    'Ziyafetim sensin bu gece offf 😮‍💨',
    'Doymadım, biraz daha… ahhh 💦'
  ],
  'Jugular Ride': [
    'Dişlerin derime geçince kalçamı yukarı ittim… ahhh 😩',
    'Kanım sende, sen bende offf 🔥',
    'Saçlarını tutup başını boynumda tutuyorum… ahh {o} 🥵',
    'Gözlerim kararıyor, alttan durmadan offf 😮‍💨',
    'Beni sonuna kadar iç… ahhh 💦'
  ],
  'Wrist Offering': [
    'Bileğim dudaklarında, kalçam bacaklarında… ahhh 😩',
    'Emdikçe daha derine iniyorum offf 🔥',
    'Gözlerin parlıyor, açlığını hissediyorum… ahh {o} 🥵',
    'Diğer elimle saçını okşarken vuruyorum offf 😮‍💨',
    'Benden beslen, ben de senden… ahhh 💦'
  ],
  'Shoulder Mark': [
    'Omzunda dişlerimin izi kızarıyor… ahhh 😈',
    'Seni duvara sabitleyip yukarı vuruyorum offf 🔥',
    'Diğer omzuna da bir iz bırakıyorum… ahh {o} 🥵',
    'İz her vuruşta biraz daha belirginleşiyor offf 😮‍💨',
    'Yarın aynada beni hatırlayacaksın… ahhh 💦'
  ],
  'Blood Bath': [
    'Kırmızı su saçlarına bulaştı, çok güzel görünüyorsun… ahhh 😩',
    'Küvetin kenarına tutun, alttan sert geliyorum offf 🔥',
    'Sıcak su ve sen, nefesim kesiliyor… ahh {o} 🥵',
    'Dalgalar yere taşıyor offf 😮‍💨',
    'Seni kırmızı suyun içinde sımsıkı tutuyorum… ahhh 💦'
  ],
  'Sacrifice': [
    'Mumlar titriyor, sen altımda kıvranıyorsun… ahhh 😩',
    'Avucundaki damlayı yalayıp derine iniyorum offf 🔥',
    'Bağların gergin, kalçan bana kalkıyor… ahh {o} 🥵',
    'Sunağın üstünde durmadan vuruyorum offf 😮‍💨',
    'Bu gece bana adandın… ahhh 💦'
  ],
  'Blood Pact': [
    'Avuçlarımız birbirine yapıştı, kalçan kucağımda dönüyor… ahhh 😩',
    'Sözümüzü bedenimizle mühürlüyoruz offf 🔥',
    'Alnın alnımda, alttan yavaşça vuruyorum… ahh {o} 🥵',
    'Bu ahit asla bozulmaz offf 💗',
    'Kanımız ve nefesimiz bir… ahhh 💦'
  ],
  'Jelly Ride': [
    'Göğüslerin jöle gibi titriyor, gözüm onlarda… ahhh 😩',
    'Kalçanın dalgasını avuçlarımla durduruyorum offf 🔥',
    'Her inişte içinde titreşim yayılıyor… ahh {o} 🥵',
    'Bu kadar yumuşak bir şey olamaz offf 😮‍💨',
    'Üstümde erimeye devam et… ahhh 💦'
  ],
  'Shapeshift': [
    'Bir an daha dar, bir an daha yumuşak… ahhh 😩',
    'Her şekline ayrı âşığım offf 🔥',
    'Değişirken içinde dalgalanma hissediyorum… ahh {o} 🥵',
    'Bana göre kalıplandın, mükemmel uyuyoruz offf 😮‍💨',
    'Bir daha değiş, bir daha… ahhh 💦'
  ],
  'Intimate Therapy': [
    'Doktor, bu tedavi gerçekten gerekli mi? Ahh… 😳',
    'Sedyenin kâğıdı hışırdıyor, utanıyorum… offf 🙈',
    'Yavaş inişiniz bütün gerginliğimi alıyor… ahhh 😩',
    'Elimi nereye koyacağımı bilemiyorum doktor offf 😮‍💨',
    'Bu reçeteyi kimseye göstermeyeceğim… ahhh 💦'
  ],
  'Bareback Therapy': [
    'Kondomsuz olduğunu söyleyince kalbim hızlandı… ahhh 😳',
    'Bu kadar yakın olmak bana iyi geliyor doktor offf 💗',
    'Şefkatiniz gerginliğimi eritiyor… ahh {o} 😩',
    'Yavaş yavaş, acele etmeden offf 😮‍💨',
    'İçinizde bitirmek sorun değil mi gerçekten? Ahhh 💦'
  ],
  'Bareback Pull Out': [
    'Kenardayım ama sözümü tutacağım… ahhh 😣',
    'Biraz daha… biraz daha… offf 🔥',
    'Gözlerime bakıyorsun, uyarı veriyorsun… ahh {o} 🥵',
    'Son saniyede çıkıp karnına bırakıyorum offf 💦',
    'Tam zamanında, güven bana… ahhh 😮‍💨'
  ],
  'Milk Bath': [
    'Süt ten rengine karıştı, seni zor seçiyorum… ahhh 😩',
    'Kalçanı sütün içinde avuçluyorum offf 🔥',
    'Göğüslerinden süzülen damlalar dudaklarımda… ahh {o} 🥵',
    'Beyaz dalgalar arasında derine iniyorum offf 😮‍💨',
    'Bu banyodan hiç çıkmayalım… ahhh 💦'
  ],

  /* ---------- 🍑 Backward · temalı ---------- */
  'Vampire Bite': [
    'Dişlerimi geçirdiğim an içinde kasıldın… ahhh 😩',
    'Boynundan içerken kalçanı kendime çekiyorum offf 🔥',
    'Tadın başımı döndürüyor, daha sert… ahh {o} 🥵',
    'Seni ölümsüz yapacağım bu gece offf 😈',
    'Hem kanın hem bedenin benim… ahhh 💦'
  ],
  'Full Moon Doggy': [
    'Ay tam tepemizde, içimdeki kurt uyandı… ahhh 😈',
    'Belini kavrayıp vahşice vuruyorum offf 🔥',
    'Hırlıyorum, sen inliyorsun… ahh {o} 🥵',
    'Ensende dişlerim, kalçan bana çarpıyor offf 😮‍💨',
    'Şafak sökene kadar durmayacağım… ahhh 💦'
  ],
  'Ghost Ride': [
    'Tül kalçana yapıştı, her şeyi görüyorum… ahhh 😩',
    'Süzülüşün o kadar hafif ki uçuyor gibisin offf 🔥',
    'Belinden tutup aşağı çekiyorum… ahh {o} 🥵',
    'Hayaletim, beni ele geçir offf 😮‍💨',
    'Tülün altında titriyorsun… ahhh 💦'
  ],
  'Full Body Wrap': [
    'Kolların, bacakların, her yerin üstümde… ahhh 😩',
    'Sıcak ve yapışkan, arkandan derine offf 🔥',
    'Nefesimi bile sen kontrol ediyorsun… ahh {o} 🥵',
    'Seninle kaynaşmış gibiyim offf 😮‍💨',
    'Bu kucaklaşmadan hiç çıkmam… ahhh 💦'
  ],
  'Wobble Doggy': [
    'Kalçanın sallanışını izlemeye doyamıyorum… ahhh 😩',
    'İki elimle tutup sallanmayı durduruyorum offf 🔥',
    'Bıraktım, yine dalgalanıyor… ahh {o} 🥵',
    'Her vuruş titreyen bir dalga offf 😮‍💨',
    'Jöle kalçana sertçe çarpıyorum… ahhh 💦'
  ],
  'Intimate Doggy': [
    'Doktor, yüzünüzü görmeyince daha az utanıyorum… ahhh 😳',
    'Sedyenin kenarına tutunmuşsunuz, ben de size… offf 🙈',
    'Tedavi bu kadar iyi hissettirmemeli… ahh {o} 😩',
    'Önlüğünüz sırtınıza kaydı, yavaş yavaş hızlanıyorum offf 😮‍💨',
    'Bu seansın kaydını tutmayın lütfen… ahhh 💦'
  ],

  /* ---------- 💋 Foreplay ---------- */
  'Kissing': [
    'Yanağını avuçlayıp yavaşça öpüyorum, acele yok… mmm 💗',
    'Dudaklarından boynuna, boynundan kulağına… offf 😈',
    'Öpüşürken parmaklarım saçlarında… ahh {o} 😮‍💨',
    'Bir öpücük daha, sonra bir tane daha… mmm 💋',
    'Dudakların şişmiş, hâlâ bırakmıyorum… offf 🥵'
  ],
  'Back Hugging': [
    'Çenemi omzuna koydum, ikimiz aynaya bakıyoruz… mmm 😌',
    'Kollarım belinde kilitli, kaçamazsın 😏',
    'Kulağına "çok güzelsin" diye fısıldıyorum… {o} 💗',
    'Kalçana bastırdıkça nefesin değişiyor offf 🔥',
    'Parmaklarım bluzunun altına kayıyor… ahh 😮‍💨'
  ],
  'Front Hugging': [
    'Ayaklarını yerden kesip havada döndürüyorum… 🤗',
    'Yüzünü göğsüme gömdün, saçlarını okşuyorum 💗',
    'Sarılırken kalbinin hızlandığını hissediyorum… {o} 😌',
    'Ellerim beline, sonra biraz daha aşağı… offf 😏',
    'Bırakmam için bir sebep söyle… mmm 🥵'
  ],
  'Show Tits': [
    'Bluzunu yavaşça açman beni öldürüyor… offf 🥵',
    'Dur, kıpırdama, sadece bakmak istiyorum… 😍',
    'Ellerinle kapatma, hepsini göreyim {o} 😏',
    'Tenine dokunmadan önce nefesimi tutuyorum… ahh 😮‍💨',
    'Bu manzara için her şeyi veririm… mmm 🔥'
  ],
  'Show Ass': [
    'Arkanı dönüp eteğini kaldırdın… offf 🥵',
    'Kalçanı biraz salla, izliyorum 😏',
    'Parmaklarımla kıvrımını takip ediyorum… ahh {o} 🔥',
    'Bu kalçayı ısırmak istiyorum… mmm 😈',
    'Eğil biraz daha, daha da… offf 😮‍💨'
  ],
  'Lap Kissing': [
    'Bacaklarını iki yanıma açıp oturdun, kalbim durdu… mmm 😍',
    'Öpüşürken kalçan yavaşça oynuyor offf 🔥',
    'Ellerim sırtından kalçana iniyor… ahh {o} 🥵',
    'Dudaklarını emiyorum, kucağımda kıvranıyorsun… offf 😮‍💨',
    'Bu öpücük başka bir şeye dönüşecek… mmm 😈'
  ],
  'Communion': [
    'Şarap dudaklarımızın arasından çenene süzüldü… mmm 🍷',
    'Damlayı boynundan aşağı takip ediyorum offf 😈',
    'Senin ağzından içtiğim şarap sarhoş ediyor… ahh {o} 🥵',
    'Kadeh boşaldı ama öpüşmek bitmedi… mmm 💋',
    'Şarabın tadı dilimizde, bir yudum daha… offf 😮‍💨'
  ],
  'Slap Ass': [
    'Geçerken kalçana bir şaplak, kıkırdadın… 😏',
    'Avucumun izi kalçanda belirdi offf 🔥',
    'Şaplaktan sonra okşuyorum, sonra yine şak! ahh {o} 😈',
    'Her şaplakta biraz daha kalçanı uzatıyorsun… offf 🥵',
    'Kızarmış yeri öpüyorum… mmm 🍑'
  ],
  'Slap Boob': [
    'Göğsün avucumda zıpladı, inledin… offf 🥵',
    'Hafifçe, sonra biraz daha sert… ahh 😈',
    'Uçları sertleşti, şaplaklara bayılıyorsun {o} 😏',
    'Şaplak, sonra dilimle serinletiyorum… mmm 🔥',
    'İki göğsüne birden… offf 😮‍💨'
  ],

  /* ---------- 🍌 Outercourse ---------- */
  'Footjob': [
    'Ayak tabanların yağlı, kaygan kaygan kayıyor… ahhh 😩',
    'Ayak parmaklarınla uca dokunman offf 🔥',
    'Bileklerini öpüp ayaklarına bastırıyorum… ahh {o} 🥵',
    'Seni izlerken ayakların beni bitiriyor offf 😮‍💨',
    'Biraz daha sık, ayaklarına boşalacağım… ahhh 💦'
  ],
  'Handjob': [
    'Yağlı elin baştan sona kayıyor… ahhh 😩',
    'İki elinle birden, offf aklım gidiyor 🔥',
    'Bileğini çevirmen beni deli ediyor… ahh {o} 🥵',
    'Gözlerime bakıp yavaşlıyorsun, işkence bu offf 😮‍💨',
    'Kulağıma fısıldarken hızlan… ahhh 💦'
  ],
  'Titfuck': [
    'Göğüslerine yağ döktüm, kaygan kaygan kayıyorum… ahhh 😩',
    'Dilinle uca dokunuyorsun, offf 🔥',
    'Göğüslerini ben tutuyorum, sen sadece bak… ahh {o} 🥵',
    'Aralarından çıkıp girerken izliyorum offf 😮‍💨',
    'Göğüslerine boşalmak üzereyim… ahhh 💦'
  ],
  'Buttjob': [
    'Kalçanın kıvrımında yukarı aşağı kayıyorum… ahhh 😩',
    'Kalçalarını sıkıştırdın, offf çok iyi 🔥',
    'Yağ döküp hızlanıyorum… ahh {o} 🥵',
    'Kalçanı bana doğru itiyorsun offf 😮‍💨',
    'Sırtına boşalacağım böyle devam edersen… ahhh 💦'
  ],
  'Blowjob': [
    'Dilini aşağıdan yukarı gezdirmen… ahhh 😩',
    'Elinle dibimi tutup ağzınla ucu alıyorsun offf 🔥',
    'Yanakların içe çöktü, emiyorsun… ahh {o} 🥵',
    'Saçını yumruğumda toplayıp ritim veriyorum offf 😮‍💨',
    'Durma, ağzında bitireceğim… ahhh 💦'
  ],
  '69': [
    'Kalçan yüzümde, ağzın aşağıda… ahhh 😩',
    'Sen inledikçe ben daha derin yalıyorum offf 🔥',
    'Kim önce bitirecek bakalım {o}… ahh 🥵',
    'Kalçanı tutup dilimi içine itiyorum offf 😮‍💨',
    'İkimiz birden titriyoruz… ahhh 💦'
  ],
  'Oral Sex': [
    'Dilinin sıcaklığı beni sardı… ahhh 😩',
    'Yavaş yavaş, tadını çıkararak… offf 💗',
    'Saçlarını yüzünden çekip izliyorum… ahh {o} 🥵',
    'Ağzın beni çıldırtıyor offf 🔥',
    'Çok yakınım, uyarıyorum… ahhh 💦'
  ],
  'Deepthroat': [
    'Nefes al, şimdi tekrar sonuna kadar… ahhh 😩',
    'Boğazının kasılmasını hissediyorum offf 🔥',
    'Gözyaşların yanağından süzülüyor, durmuyorsun… ahh {o} 🥵',
    'Başını tutup bir süre öyle bekletiyorum offf 😮‍💨',
    'Boğazına bırakacağım… ahhh 💦'
  ],
  'Legjob': [
    'Çoraplı bacaklarının arasında kayıyorum… ahhh 😩',
    'Naylonun sürtünmesi offf 🔥',
    'Bacaklarını göğsüme yaslayıp aralarında vuruyorum… ahh {o} 🥵',
    'Uyluklarını sıkıştır, daha dar offf 😮‍💨',
    'Bacaklarına boşalacağım… ahhh 💦'
  ],
  'Masturbation': [
    'Karşımda bacaklarını açtın, izliyorum… ahhh 😩',
    'Senin parmakların, benim elim, aynı ritim offf 🔥',
    'İnlemeni duydukça hızlanıyorum… ahh {o} 🥵',
    'Gözlerimi senden alamıyorum offf 😮‍💨',
    'Birlikte bitirelim, şimdi… ahhh 💦'
  ],
  'Reverse Titfuck': [
    'Göğüslerin arkamdan sarıyor, sıcacık… ahhh 😩',
    'Kalçanı bana bastırıyorsun, göğüslerin kayıyor offf 🔥',
    'Bu açıdan seni göremesem de hissediyorum… ahh {o} 🥵',
    'Yağ döktün, kaygan kaygan offf 😮‍💨',
    'Bitirmek üzereyim… ahhh 💦'
  ],
  'Hotdogging': [
    'Kalçanı sıkıp beni aralarına hapsettin… ahhh 😩',
    'Yağlı kalçanda yukarı aşağı offf 🔥',
    'Belinden tutup kendime çekerek sürtünüyorum… ahh {o} 🥵',
    'Kalçanın arasında kaybolmak offf 😮‍💨',
    'Sırtına boşalacağım… ahhh 💦'
  ],
  'Dry Missionary': [
    'Kotun kotuma sürtünüyor, sesler çıkıyor… ahhh 😩',
    'Bacaklarını belime doladın, bastırıyorum offf 🔥',
    'Öpüşürken kalçamı oynatıyorum… ahh {o} 🥵',
    'Çıkarmak istiyorum ama böyle de iyi offf 😮‍💨',
    'Pantolonumun içinde patlayacağım… ahhh 💦'
  ],
  'Dry Doggy': [
    'Eteğinin üstünden kalçana bastırıyorum… ahhh 😩',
    'Kumaş kayıyor, sen geri itiyorsun offf 🔥',
    'Saçını çekip boynunu öpüyorum… ahh {o} 🥵',
    'Kalçanın kıvrımında sürtünüyorum offf 😮‍💨',
    'Kıyafetler engel değil, bitireceğim… ahhh 💦'
  ],
  'Pumpkin Grind': [
    'Balkabağı kostümünün altında kalçan çok sıcak… ahhh 😩',
    'Dairesel dönüşün kafamı döndürüyor offf 🔥',
    'Belinden tutup daha sert bastırıyorum… ahh {o} 🥵',
    'Parti sesi uzakta, biz buradayız offf 😮‍💨',
    'Biraz daha, kostümümün içine boşalacağım… ahhh 💦'
  ],
  'Crystal Ball': [
    'Kürenin içinde ne görüyorsun? Ben seni… ahhh 😩',
    'Göğüslerin avuçlarında parlıyor offf 🔥',
    'Aralarında kayarken gözlerime bakıyorsun… ahh {o} 🥵',
    'Kehanet: birazdan bitiyorum offf 😮‍💨',
    'Kürene boşalıyorum… ahhh 💦'
  ],
  'Masquerade': [
    'Maskenin ardındaki gözlerin parlıyor… ahhh 😩',
    'Kalabalığın ortasında gizlice sürtünüyoruz offf 🔥',
    'Elbisenin üstünden kalçanı sıkıyorum… ahh 🥵',
    'Kimse kim olduğumuzu bilmiyor offf 😈',
    'Maskeler düşmeden bitireceğim… ahhh 💦'
  ],
  'Slime Hug': [
    'Kaygan göğüslerin beni yutuyor gibi… ahhh 😩',
    'Her hareketinde yapışıp bırakıyor offf 🔥',
    'Sıcak ve ıslak, aralarında kayıyorum… ahh {o} 🥵',
    'Bu his başka hiçbir şeye benzemiyor offf 😮‍💨',
    'İçinde kayboluyorum… ahhh 💦'
  ],

  /* ---------- 👅 Eat ---------- */
  'Cunnilingus': [
    'Dilimi düz yapıp yavaşça yukarı çekiyorum… mmm 😋',
    'İki parmağımı da ekledim, dilim dışarıda offf 🔥',
    'Bacaklarını omuzlarıma attım, kaçamazsın… ahh {o} 🥵',
    'Emerek yavaşlıyorum, sonra yine hızlı offf 😮‍💨',
    'Uyluklarını yanaklarıma bastırıyorsun… mmm 💦'
  ],
  'Squirt': [
    'Parmaklarımı kıvırıp tam o noktaya bastırıyorum… ahhh 😍',
    'Bırak kendini, tutma offf 💦',
    'Fışkırdıkça çığlık atıyorsun… ahh {o} 🥵',
    'Göğsüm bile ıslandı offf 😮‍💨',
    'Durma, bir dalga daha geliyor… ahhh 🔥'
  ],
  'On Mouth': [
    'Ağzımı açıp bekliyorum, bırak kendini… mmm 😋',
    'Dilimin üstüne aktın, offf 💦',
    'Kalçanı yüzüme bastırıp son damlayı da alıyorum… ahh {o} 🥵',
    'Çenemden süzülüyor, umurumda değil offf 😮‍💨',
    'Tadın hâlâ dilimde… mmm 🔥'
  ],
  'Facesitting': [
    'Kalçan yüzümü kapattı, dünya karardı… mmm 😩',
    'Dilimi dik tutuyorum, sen sür offf 🔥',
    'Saçlarımı tutup yüzüme bastırıyorsun… ahh {o} 🥵',
    'Kalçanı avuçlayıp aşağı çekiyorum offf 😮‍💨',
    'Burada boğulmak istiyorum… mmm 💦'
  ],
  'Candy Lick': [
    'Göbek deliğinde biriken karamel benim… mmm 🍬',
    'Göğüs uçlarındaki şekeri emiyorum offf 🔥',
    'İç bacağında yapış yapış bir iz, takip ediyorum… ahh {o} 🥵',
    'Senden tatlı şeker yok offf 😋',
    'Her yer temizlenene kadar devam… mmm 😮‍💨'
  ],
  'Thigh Bite': [
    'Dişlerimi geçirince bacağın titredi… mmm 😈',
    'Isırık izini dilimle yatıştırıyorum offf 🔥',
    'Diğer bacağına geçiyorum, adil olayım… ahh {o} 😏',
    'Yaklaştıkça nefesin hızlanıyor offf 🥵',
    'Son ısırık, sonra asıl yere… mmm 😮‍💨'
  ],
  'Chalice': [
    'Şarap göğüslerinin arasında dalgalanıyor… mmm 🍷',
    'Dudaklarımı daldırıp içiyorum offf 🔥',
    'Taşan damlalar karnına akıyor, onları da… ahh {o} 🥵',
    'Kutsal kadehim sensin offf 😋',
    'Bir daha doldur… mmm 😮‍💨'
  ],
  'Red Fountain': [
    'Kırmızı damla göbeğinde birikti, dilimle alıyorum… mmm 😋',
    'Aşağı doğru akıyor, ben de onunla offf 🔥',
    'Karnın titriyor, damlalar kayıyor… ahh {o} 🥵',
    'Çeşme kurumasın, bir daha dök offf 😮‍💨',
    'Son damla tam bacaklarının arasında… mmm 💦'
  ],
  'Bottoms Up': [
    'Şarap belinin çukurunda birikti… mmm 🍷',
    'Dilimle kalçanın arasından takip ediyorum offf 🔥',
    'Kalçanı açıp son damlayı yakalıyorum… ahh {o} 🥵',
    'Bu kadehten içmek bambaşka offf 😋',
    'Şerefe, kalçana… mmm 😮‍💨'
  ],
  'Lick Tits': [
    'Dilimle uçlarının etrafında daireler çiziyorum… mmm 😋',
    'Hafifçe ısırıp çekiyorum, inledin offf 🔥',
    'İki göğsünü birleştirip ikisini birden… ahh {o} 🥵',
    'Altlarındaki kıvrımı da unutmadım offf 😮‍💨',
    'Islak göğüslerine üflüyorum, ürperdin… mmm 💗'
  ],
  'Lick Ass': [
    'Kalçanı iki elimle açtım, dilim yavaşça… mmm 😈',
    'Yastığı ısırıyorsun, devam ediyorum offf 🔥',
    'Dilimi daire çizer gibi gezdiriyorum… ahh {o} 🥵',
    'Kalçan geri itiyor, istiyorsun biliyorum offf 😮‍💨',
    'Kalçanı yüzüme bastır… mmm 💦'
  ],
  'Lick Back': [
    'Omzundan başlayıp her omurga kemiğini öpüyorum… mmm 😌',
    'Dilim belinin çukurunda daireler çiziyor offf 🔥',
    'Sırtın kavis yaptı, kalçan kalktı… ahh {o} 🥵',
    'Kürek kemiklerini ısırıyorum hafifçe offf 😏',
    'Islak sırtına üflüyorum… mmm 😮‍💨'
  ],
  'Lick Legs': [
    'Dizinin arkasını yalayınca kıkırdadın… mmm 😏',
    'Baldırından yukarı, yavaş yavaş offf 🔥',
    'Uyluğunun içinde duruyorum, bekletiyorum… ahh {o} 🥵',
    'Bir bacağı bitirdim, sıra diğerinde offf 😋',
    'Sonunda tam ortaya varıyorum… mmm 😮‍💨'
  ],
  'Lick Neck': [
    'Boynunun damarını dilimle takip ediyorum… mmm 😈',
    'Ensende nefesim, tüylerin ürperdi offf 🔥',
    'Çenenin altını öpüp emiyorum… ahh {o} 🥵',
    'Morluk kalacak, saklayamayacaksın offf 😏',
    'Kulağına inleyerek fısıldıyorum… mmm 😮‍💨'
  ],
  'Lick Feet': [
    'Ayak bileğini öpüp kemerine kadar yalıyorum… mmm 😋',
    'Başparmağını ağzıma alıp emiyorum offf 🔥',
    'Parmaklarının arasında dilim… ahh {o} 🥵',
    'Ayağını yanağıma bastırıyorsun offf 😏',
    'Topuğundan parmak ucuna… mmm 😮‍💨'
  ],

  /* ---------- 👑 Femdom ---------- */
  'Strap-On': [
    'Saçımı çekip daha derine itiyorsun… ahhh 😩',
    'Bu kez inleyen benim, offf 😳',
    'Kalçama şaplak atıp hızlandın… ahh {o} 🥵',
    'Sana teslim oldum tamamen offf 😮‍💨',
    'Durma kraliçem… ahhh 💦'
  ],
  'Trampling': [
    'Topuğun göğsümde dönüyor… ahh 😣',
    'Ağırlığını verdikçe nefesim kesiliyor offf 🥵',
    'Yukarıdan bana gülümsemen… ahhh {o} 😳',
    'Ayak tabanını yüzüme koyunca öpüyorum offf 😮‍💨',
    'Senin halın olmak şeref… ahh 🔥'
  ],
  'Cock Crush': [
    'Ayağını yavaşça döndürüyorsun, inliyorum… ahhh 😩',
    'Bastırdıkça daha da sertleşiyorum offf 🥵',
    'Acıyor ama çekme ayağını… ahh {o} 😳',
    'Tabanının altında zonkluyorum offf 😮‍💨',
    'İzin verirsen ayağına boşalacağım… ahhh 💦'
  ],
  'Face Smothering': [
    'Kalçan yüzümün her yerini kaplıyor… mmph 😩',
    'Ciğerlerim yanıyor, sonra izin veriyorsun… offf 🥵',
    'Tekrar oturdun, dilim çalışmaya devam… ahh {o} 😳',
    'Senin altında nefessiz kalmak offf 😮‍💨',
    'Kalkma, yalvarırım… mmm 🔥'
  ],
  'Foot Worship': [
    'Topuğundan başlayıp her parmağı öpüyorum… mmm 🥺',
    'Ayağını ağzıma itiyorsun, emiyorum offf 🥵',
    'Kraliçemin ayakları kutsal… ahh {o} 😳',
    'Diğer ayağın göğsümde, ezilmeye razıyım offf 😮‍💨',
    'Bitirmemi istemiyorsan bitirmem… mmm 🔥'
  ],
  'Cock Squeeze': [
    'Parmakların halka gibi dibimi sıkıyor… ahhh 😩',
    'Kızarıp mosmor oldu, gülüyorsun offf 🥵',
    'Yavaşça sıkıp bırakıyorsun, yine sıkıyorsun… ahh {o} 😳',
    'Ellerinde oyuncak gibiyim offf 😮‍💨',
    'Lütfen biraz okşa… ahhh 💦'
  ],
  'Ball Squeeze': [
    'Avucunda tartıyor gibisin… ahh 😳',
    'Biraz sıkıp gözlerime bakıyorsun offf 🥵',
    'Kıvranmama gülüyorsun… ahhh {o} 😩',
    'Bırakınca rahatladım, sonra yine… offf 😮‍💨',
    'Bunlar senin, istediğini yap… ahh 🔥'
  ],
  'Ball Crush': [
    'Dişlerim kenetli, bağırmıyorum… ahhh 😣',
    'Ağırlığını biraz daha verdin, gözüm karardı offf 🥵',
    'Yalvarmamı mı bekliyorsun {o}? Ahh 😳',
    'Çektiğinde nefes aldım, teşekkür ederim offf 😮‍💨',
    'Senin için dayanıyorum… ahhh 😩'
  ],
  'Death Grip': [
    'Parmakların bembeyaz, o kadar sıkıyorsun… ahhh 😩',
    'Her şey birikiyor ama çıkamıyor offf 🥵',
    'Kulağıma "henüz değil" diye fısıldıyorsun… ahh {o} 😳',
    'Titriyorum, bacaklarım kasılıyor offf 😮‍💨',
    'Bıraktığında patlayacağım… ahhh 💦'
  ],
  'Orgasm Denial': [
    'Üçüncü kez durdurdun, ağlayacağım… ahhh 😩',
    'Zonklarken izliyorsun, gülümsüyorsun offf 🥵',
    'Ne yaparsam izin verirsin? Söyle… ahh {o} 🥺',
    'Kenarda bekletilmek bu kadar tatlı işkence olamaz offf 😮‍💨',
    'Bir kere daha başla, bu sefer lütfen… ahhh 😳'
  ],
  'Female Domination': [
    'Tasma boynumda, ipi sen tutuyorsun… 🥺',
    'Emrini bekleyen köleyim offf 🥵',
    'Gözlerimi indirdim, izin verirsen bakarım… ahh {o} 😳',
    'Her "aferin" dediğinde eriyorum offf 😮‍💨',
    'Bugün bütün kurallar senin… ahh 🔥'
  ],

  /* ---------- 💆 Massage ---------- */
  'Boob Grab': [
    'Avuçlarımı yağladım, göğüslerinde daireler çiziyorum… mmm 😍',
    'Alttan kaldırıp tartar gibi tutuyorum offf 🔥',
    'Parmaklarımın arasından taşıyorlar… ahh {o} 🥵',
    'Uçlarını çekince sırtın kavis yaptı offf 😮‍💨',
    'Masaj bitti dedim ama ellerim gitmiyor… mmm 😏',
    'Arkandan sarılıp ikisini birden sıkıyorum… ahhh 🔥',
    'Yavaşça yoğuruyorum, gözlerin kapandı… mmm 😌',
    'Biraz sert sıktım, inlemen hoşuma gitti offf 😈',
    'Başparmaklarım uçlarında, sen kıvranıyorsun… ahh 🥵',
    'Bu göğüslere masaj yapmak ödül gibi… mmm 💗'
  ],
  'Ass Grab': [
    'Yağı kalçana döküp iki elimle yoğuruyorum… mmm 😈',
    'Kalçalarını açıp kapatıyorum, ürperdin offf 🔥',
    'Başparmaklarım kıvrımında geziyor… ahh {o} 🥵',
    'Sıkıp bıraktıkça dalgalanıyor offf 😏',
    'Masaj bahane, ellerimi çekemiyorum… mmm 😮‍💨',
    'Bir şaplak, sonra yine yoğurma… ahhh 🍑',
    'Kalçanın altından kavrayıp kaldırıyorum offf 😈',
    'Yağlı tenin parlıyor, gözüm ondan ayrılmıyor… ahh 🥵',
    'Parmak uçlarımla kalçanın ortasından aşağı… mmm 😏',
    'Kalçana masaj yapmak en sevdiğim iş… offf 💗'
  ],
  'Vagina Fingering': [
    'Önce dışarıda yavaş daireler, sonra bir parmak… ahh 😈',
    'Parmağımı kıvırıp tam o noktayı buldum offf 🔥',
    'Kalçan parmaklarıma doğru geliyor… ahhh {o} 🥵',
    'Avucum dışarıda bastırıyor, parmaklarım içeride offf 😮‍💨',
    'Dudaklarını öperken parmaklarımı hızlandırıyorum… ahh 💦'
  ],
  'Asshole Fingering': [
    'Bol yağ, sabırla, milim milim… ahh 😈',
    'Halkanın gevşediğini hissediyorum offf 🔥',
    'Parmağımı yavaşça döndürüyorum… ahhh {o} 🥵',
    'Kalçan kasılıp bırakıyor, istiyorsun offf 😮‍💨',
    'Bir parmak daha mı? Yavaşça… ahh 💦'
  ],

  /* ---------- 🍷 Drinks ---------- */
  'Red Wine': [
    'Şarabı yavaşça çevirip kokluyorum, sonra seni 🍷',
    'Dudağında kalan damlayı öpüyorum 😏',
    'Bu şarap seni daha da güzel yaptı {o} 😍',
    'Kadehini bitir, sonra masayı boşaltırız 😈',
    'Bir yudum bende, bir yudum dudaklarında 🍷'
  ],
  'Tequila Shot': [
    'Tuzu boynundan yaladım, shotu içtim, limon dudaklarında 🍋',
    'Üçüncü shot, gözlerin parlıyor 🥃',
    'Hadi kafaya dikelim {o}! 🔥',
    'Tekila yaktı, öpücüğün söndürdü 😏',
    'Bir tur daha, gece daha yeni başladı 😈'
  ],
  'Champagne': [
    'Kadehten taşan köpüğü parmağından emiyorum 🥂',
    'Şampanyayı göğüslerine dökersem? 😏',
    'Kabarcıklar burnunu gıdıkladı, gülüşüne bayıldım {o} 😍',
    'Bu şişe bitince başka bir şeyi kutlarız 😈',
    'Şerefe, bize! 🍾'
  ],
  'Bloody Mary': [
    'Kerevizle karıştırıp sana uzatıyorum 🍅',
    'Kırmızı dudakların kokteyle karıştı 💋',
    'Biraz acı, biraz tuzlu, tam kıvamında {o} 🔥',
    'Bu içki gece yarısı için 🌙',
    'Bir yudum, bir öpücük 😈'
  ],
  "Witch's Punch": [
    'Kazandan kepçeyle doldurdum, dumanı tütüyor 🧪',
    'Tadı böğürtlen ve büyü gibi 💜',
    'Bu ponçta ne var cadım? Başım dönüyor 😵‍💫',
    'İçtikçe sana daha çok tutuluyorum {o} 😍',
    'Bir kepçe daha, büyü tazelensin 😈'
  ],
  'Absinthe': [
    'Şekeri yaktım, kaşıktan damlıyor 🔥',
    'Yeşil sıvı dilimi uyuşturdu offf 🍸',
    'Duvarlardaki gölgeler dans ediyor {o} 🌀',
    'Perilerin arasında en güzeli sensin 😍',
    'Bir yudum daha, sonra seni öpeceğim 😈'
  ],
  'Mouth Shot': [
    'Dudaklarımız mühürlü, içki aramızda akıyor 🥃',
    'Bir damla çenene kaçtı, yalıyorum 😏',
    'İçki sıcak, dilin daha sıcak {o} 🔥',
    'Bu shotu hiç böyle içmemiştim offf 😈',
    'Bir tane daha, bu sefer daha yavaş 🥃'
  ],
  'Body Shot': [
    'Tuzu iç bacağından yaladım 😈',
    'Göbeğindeki shotu son damlasına kadar içtim 🥃',
    'Limonu göğüslerinin arasından aldım {o} 🍋',
    'Senin tenin en güzel kadeh 😏',
    'Şimdi sıra sende, nereden içmek istersin? 🔥'
  ],
  'Water': [
    'Bir yudum sen, bir yudum ben 💧',
    'Soğuk bardağı ensene değdirdim, ürperdin 😏',
    'Susuz kalmayalım, daha bitmedi {o} 😈',
    'Suyu dudaklarından içiyorum 💧',
    'Nefeslen biraz, sonra devam 😌'
  ],
  'Black Coffee': [
    'Kahveni yatağa getirdim ☕',
    'İlk yudumdan sonra gözlerin açıldı 😌',
    'Kahve acı, sen tatlı {o} ☕',
    'Uyanık kal, gece daha bitmedi 😏',
    'Kahve kokulu bir öpücük ☕'
  ],
  'Milk & Wine': [
    'Pembe karışım kadehte dönüyor… mmm 🍷',
    'Senden gelen her şey ayrı lezzet offf 🥛',
    'Kadehi dudaklarıma sen tutuyorsun {o} 😍',
    'Bu tarif sadece bizim sırrımız 😏',
    'Bir kadeh daha karıştır… mmm 🍷'
  ],
  'Passed Out': [
    'Yanına oturup saçlarını yüzünden çekiyorum 🌙',
    'Nefesini dinliyorum, düzenli, içim rahatladı 😌',
    'Kova ve havlu yatağın yanında, her ihtimale karşı 💧',
    'Sabah için ağrı kesici ve su hazırladım {o} 💊',
    'İyi uyu, sabah seni kahvaltıyla uyandıracağım ☕'
  ],

  /* ---------- 💦 Cumming · tutma ---------- */
  'Holding': [
    'Durdurduğun an bütün kaslarım kasıldı… offf 😣',
    'Gözlerimi kapatıp başka şeyler düşünüyorum, işe yaramıyor ahh 😩',
    'Elin dibimde, nabzımı sayıyorsun {o}… offf 🥵',
    'Bir nefes… iki nefes… tamam, geçti ahh 😮‍💨',
    'Tam kenarda, kıl payı… offf 😳',
    'Kıpırdamadan bekliyoruz, sadece zonkluyorum ahhh 😣',
    'Gülümseyerek bekletmen işkence {o}… offf 😈',
    'Her durduruşta daha çok birikiyor, hissediyorum ahh 🔥',
    'Yavaşça tekrar başlıyorum ama dikkatle… offf 😮‍💨',
    'Söz veriyorum, ancak sen izin verince… ahh 🥺'
  ],
  'Hard Holding': [
    'Sımsıkı kavradın, damarlarım atıyor… ahhh 😣',
    'Tam patlarken durdurdun, bacaklarım titriyor offf 🥵',
    'Dişlerimi sıktım, terim alnımdan akıyor {o}… ahh 😩',
    'Kenardan geri çekilmek bu kadar zor olmamıştı offf 😮‍💨',
    'Biriken her şey içimde kaynıyor… ahhh 🔥',
    'Nefesimi tutup saniyeleri sayıyorum… offf 😣',
    'Bırakma ama sıkma da, ikisi de bitiriyor beni {o} ahh 😳',
    'Bu kadar dolu hissetmemiştim hiç… offf 🥵',
    'Bir daha tutarsan gözümden yaş gelecek ahhh 🥺',
    'İzin verdiğinde ölçülemeyecek kadar çok gelecek… offf 💦'
  ],

  /* ---------- 🎚️ Mode ---------- */
  'Gentle': [
    'Her hareketten önce gözlerine bakıyorum… 💗',
    'Acele yok, bütün gece bizim 😌',
    'Parmak uçlarımla tenini okşayarak {o} 💗',
    'Yumuşacık öpücükler, yavaş nefesler… mmm 😌',
    'Seni bir çiçek gibi tutuyorum… ahh 💗'
  ],
  'Passionate': [
    'Saçlarına tutunup derin derin öpüyorum… ahh 🔥',
    'Nefes nefese, ter içinde… offf 💗',
    'Sana olan açlığım bitmiyor {o} 🥵',
    'Seni kendime bastırıp bırakmıyorum… ahhh 💋',
    'Her dokunuşta yeniden alev alıyoruz offf 🔥'
  ],
  'Assertive': [
    'Çeneni tutup yüzünü bana çeviriyorum 😈',
    '"Bana bak" diyorum, bakıyorsun offf 🔥',
    'Bacaklarını ben açıyorum {o} 😏',
    'Ne zaman, nasıl, ben söyleyeceğim… ahh 🥵',
    'Sözümü dinlediğin için aferin offf 😮‍💨'
  ],
  'Rough': [
    'Boğazına hafifçe elimi koydum… ahhh 😈',
    'Seni yatağa fırlattım offf 🔥',
    'Kalçana ardı ardına şaplak {o} 🥵',
    'Saçını çekip başını geri yatırıyorum… ahh 😮‍💨',
    'Kontrolü bırak, ben alıyorum offf 💦'
  ],
  'Brutal': [
    'Yatak başlığı duvara vuruyor… ahhh 😈',
    'Seni kaldırıp atıyorum, tekrar alıyorum offf 🔥',
    'Hiç yavaşlamıyorum {o} 🥵',
    'Izler kalacak, yarın göreceksin… ahh 😮‍💨',
    'Bütün sınırları zorluyoruz offf 💦'
  ],
  'inletmeli': [
    'Yavaşlayınca inlemen değişiyor, hızlanınca yine… ahh 😈',
    'Her inlemen bir ödül offf 🔥',
    'Dudaklarını ısırma, bırak duyayım {o} 🥵',
    'İnlemelerin müzik gibi… ahhh 😮‍💨',
    'Bir daha inle, daha uzun offf 💦'
  ],
  'bağırtmalı': [
    'Yastığı çektim, bağırmanı istiyorum… ahhh 😈',
    'Sesin duvarlarda yankılanıyor offf 🔥',
    'Adımı daha yüksek söyle {o} 🥵',
    'Bağırdıkça daha sert… ahh 😮‍💨',
    'Bütün bina duysun offf 💦'
  ],
  'ağlatmalı': [
    'Gözyaşlarını öpüyorum ama durmuyorum… ahhh 😈',
    'Zevkten hıçkırıyorsun offf 🔥',
    'Bu kadar yoğun olmasını sen istedin {o} 🥵',
    'Titreyen dudaklarını öpüp devam… ahh 😮‍💨',
    'Bir dalga daha, dayan offf 💦'
  ],

  /* ---------- 🎾 Protection ---------- */
  'Nothing': [
    'Kondomu kenara attım, bu gece istemiyoruz 😈',
    'Tenin tenimde olacak, sadece bu 🔥',
    'Riskini biliyorum, umurumda değil {o} 😏',
    'Hiçbir engel olmadan seni hissetmek istiyorum 🥵',
    'Çıplak, saf, sadece biz… offf 😮‍💨'
  ],
  'Pull-Out Method': [
    'Kenara geldiğimde haber vereceğim 😏',
    'Karnına bitireceğim, söz {o} 🤞',
    'Kontrol bende, merak etme 😌',
    'Son saniyeye kadar içindeyim, sonra dışarı 😈',
    'Biraz riskli ama heyecanlı offf 🔥'
  ],
  'Morning-After Pill': [
    'Eczaneden aldım, sakin ol 💊',
    'Dün gece çok güzeldi, bu da tedbir 😌',
    'Yanında kahvaltı da hazırladım {o} ☕',
    'Mide bulantısı olursa söyle, yanındayım 🤗',
    'Bir dahaki sefere baştan dikkat ederiz 😏'
  ],
  'Condom': [
    'Kondomu sen tak, ellerin daha güzel 😏',
    'Ağzınla mı takacaksın? Offf 😈',
    'Yerine oturdu, şimdi hazırım {o} 🔥',
    'Güvendeyiz, sınırsız olabiliriz 🥵',
    'Kaygan kondomu yavaşça aşağı sıyırıyorum 😮‍💨'
  ],
  'Tight Condom': [
    'Dar kondom beni sıkıca kavradı, offf 😣',
    'Takarken zar zor indi, ahh 😅',
    'Bu kadar sıkıyken daha uzun dayanırım {o} 😈',
    'Dar lastik daha da sertleştirdi offf 🥵',
    'Sıkı ama güvenli, gel bakalım 🔥'
  ],
  'Control Pill': [
    'Hapını her gün aynı saatte içiyorsun değil mi? 💊',
    'Haplar sayesinde aramızda hiçbir şey olmayacak 😈',
    'Alarmını kurdum, unutmazsın {o} ⏰',
    'Korunmalı ve özgür, en iyisi 😏',
    'Bugünküsünü de içtin, aferin 😌'
  ]
});

/* ➕ Zincirle gelen ve fantezi olayları (Cumming Size, Pre-cumming, Lactation, Fantesy) */
Object.entries({
  /* ---------- 💦 Cumming Size ---------- */
  'Watery Cumming': [
    'Sulu sulu geldi, bu sefer çok akışkan… ahh 😮‍💨',
    'Su gibi süzülüyor tenden offf 💧',
    'Yoğun değil ama bol, ahh {o} 💦',
    'Sıcak ve akışkan, her yere yayıldı… offf 😩',
    'Bugün çok sulu geldim, fazla mı zorladık? 😅',
    'Damlalar hızla aşağı kayıyor… ahh 💦',
    'İnce ve sıcak, tenine sinip gidiyor offf 🥵',
    'Sulu ama dur durak bilmedi… ahhh 😮‍💨',
    'Peş peşe çok boşaldık, ondan sulu galiba 😏',
    'Akışkan ama bitmek bilmiyor… offf 💦'
  ],
  'Low-volume Cumming': [
    'Bu sefer azıcık geldi… offf 😅',
    'Birkaç damla, hepsi bu kadar ahh 😮‍💨',
    'Son kez boşalmıştım, tank boş galiba {o} 😏',
    'Az ama zevki tam yerindeydi… ahh 💦',
    'Biraz dinlenmem lazım, depo boşaldı offf 😩',
    'Küçük bir damla, büyük bir titreme… ahhh 🥵',
    'Az geldi ama o an aklım gitti offf 😮‍💨',
    'Bir dahakine daha çok biriktiririm, söz 😈',
    'Damla damla, son kalanlar… ahh 💦',
    'Az ama sıcacık… offf 😌'
  ],
  'Normal Cumming': [
    'Tam kıvamında, olması gerektiği gibi… ahhh 💦',
    'Sıcak ve dolu dolu geldi offf 😩',
    'Her zamanki gibi hepsi senin {o}… ahh 🥵',
    'Zonkladıkça birkaç kez fışkırdı offf 😮‍💨',
    'Tam yerinde, tam zamanında… ahhh 💦',
    'Güzel bir boşalma, nefesim düzeliyor 😌',
    'Ne az ne çok, kıvamında offf 🔥',
    'Sıcaklığı hâlâ hissediyorum… ahh 😩',
    'Böyle boşalmak her seferinde ayrı güzel offf 💦',
    'Hepsini bıraktım, rahatladım… mmm 😌'
  ],
  'Thick White Cumming': [
    'Koyu ve bembeyaz, ağır ağır akıyor… ahhh 😩💦',
    'Krema gibi kıvamlı geldi offf 🔥',
    'Bu kadar yoğunu az görülür {o}… ahh 🥵',
    'Tenine yapışıp kalıyor, akmıyor bile offf 😮‍💨',
    'Uzun biriktirdim, bak ne kadar koyu… ahhh 😈',
    'Bembeyaz ve kalın ipler halinde offf 💦',
    'Parmaklarının arasında uzayıp kopmuyor… ahh 🥵',
    'Bu kıvam çok güçlü bir boşalmanın işareti offf 😩',
    'Kalın kalın fışkırdı, hâlâ titriyorum… ahhh 😮‍💨',
    'Bembeyaz izler her yerinde… offf 💦'
  ],
  'High Sperm Cumming': [
    'Çok güçlü geldi, bu sefer gerçekten dolu… ahhh 😩💦',
    'Sperm sayım tavan yaptı galiba offf 😈',
    'Bu kadar dolu bir boşalma riskli {o}… ahh 🥵',
    'Her damlası canlı, hissediyorum offf 😮‍💨',
    'Bugün çok verimliyim, dikkat… ahhh 🔥',
    'Yoğun ve bol, ağır geldi offf 💦',
    'Böyle dolu boşalınca bacaklarım titriyor… ahh 😩',
    'Gücümün hepsini bıraktım offf 😈',
    'Bu boşalmadan sonra bir şey olursa şaşırma… ahhh 😏',
    'Dopdolu, ağır ve sıcak… offf 💦'
  ],
  'Azoospermia (0/4)': [
    'Bu boşalmada hiç sperm yok, endişe etme 😌',
    'Sadece sıvı, tamamen güvenli… ahh 💦',
    'Zevki tam ama tohumsuz {o} 😏',
    'Doktorun dediği gibi sıfır, rahat ol 😌',
    'İstediğin kadar içine bırakabilirim… offf 😈',
    'Risk yok, sadece zevk ahh 🥵',
    'Kısır ama tutkulu… offf 😮‍💨',
    'Bebek korkusu yok, bırakıyorum kendimi… ahhh 💦',
    'Boş ama sıcacık geldi offf 🔥',
    'Bu boşalmanın hiçbir sonucu olmayacak, sadece keyif 😌'
  ],
  'Normozoospermia (2/4)': [
    'Normal değerler, sağlıklı bir boşalma… ahh 💦',
    'Ne az ne çok, tam ortalama offf 😌',
    'Dikkatli olmak lazım, sperm var {o} 😏',
    'Sağlıklı ve sıcak geldi… ahhh 🥵',
    'Normal ama risk taşıyor offf 😮‍💨',
    'Tam olması gerektiği gibi… ahh 💦',
    'Korunmadıysak biraz dikkat 😅',
    'Her zamanki gücümle offf 🔥',
    'Sağlıklı bir boşalma, rahatladım… ahh 😌',
    'Normal değerler, normal riskler 😏'
  ],
  'Oligospermia (1/4)': [
    'Bu sefer sperm az, risk düşük 😌',
    'Az tohum, bol zevk… ahh 💦',
    'Düşük değerler ama his aynı {o} 😏',
    'Pek verimli değilim bugün offf 😅',
    'Risk az, yine de dikkat… ahh 😮‍💨',
    'Zayıf ama sıcacık geldi offf 🥵',
    'Belki biraz dinlenmem gerek… ahh 😩',
    'Az sperm, ama boşalma güçlüydü offf 🔥',
    'Şansımız düşük, ya da yüksek 😏',
    'İçine bıraktım, büyük ihtimalle bir şey olmaz… ahh 💦'
  ],
  'Polyzoospermia (3/4)': [
    'Bu boşalma çok güçlü, sperm dolu… ahhh 😩💦',
    'Değerler yüksek, dikkat {o} 😈',
    'Çok verimliyim bugün offf 🔥',
    'İçine bıraktıysam şansımız yüksek… ahh 🥵',
    'Dolu dolu, canlı canlı offf 😮‍💨',
    'Bu boşalma bir şey başarabilir… ahhh 😏',
    'Yoğun ve güçlü geldi offf 💦',
    'Risk büyük ama zevk daha büyük… ahh 😩',
    'Her damlası iş görür offf 😈',
    'Bu kadar verimli olmamalıydım belki… ahhh 😅'
  ],
  'Hyper-concentrated (4/4)': [
    'Aşırı yoğun, en güçlü halim bu… ahhhh 😩💦',
    'Tek bir damla bile yeter {o}… offf 😈',
    'Bu boşalma kesin iz bırakır… ahh 🔥',
    'Konsantre ve ağır geldi, dikkat offf 🥵',
    'İçine bıraktıysam hazırlıklı ol… ahhh 😏',
    'Bu kadar güçlüsünü hiç yaşamamıştım offf 😮‍💨',
    'Her damlası tohum dolu… ahh 💦',
    'Şimdi bir şey olmazsa hiç olmaz offf 😈',
    'Yoğunluk tavan, bacaklarım titriyor… ahhh 😩',
    'Bu boşalma bir başlangıç olabilir {o}… offf 💗'
  ],
  'Slime Growth': [
    'Beni emdikçe büyüyorsun… ahhh 😳',
    'Göğüslerin dolgunlaşıyor, görüyorum offf 😍',
    'Kalçan genişledi, benden besleniyorsun {o}… ahh 🥵',
    'Ne kadar verirsem o kadar büyüyorsun offf 😮‍💨',
    'Jöle bedenin şişip parlıyor… ahhh 💦',
    'Beni bitirdin ama sen tazelendin offf 😩',
    'Avuçlarıma sığmıyorsun artık… ahh 😍',
    'Bir daha emersen ne olacak? 😏',
    'Büyüdükçe daha yumuşak oluyorsun… mmm 🥵',
    'Sen büyüdün, ben bittim… offf 😵‍💫'
  ],
  'Ectoplasm': [
    'Parlak ve yapış yapış geldi… ahhh 😳💦',
    'Karanlıkta parlıyor offf 👻',
    'Tenine yapıştı, hiç gitmiyor {o}… ahh 🥵',
    'Bu sıvı bu dünyadan değil offf 😮‍💨',
    'Ruhani bir boşalma… ahhh 💦',
    'Parmaklarının arasında ışıldıyor offf ✨',
    'Saatlerce tende kalacak, iz bırakacak… ahh 😈',
    'Yapışkan ve soğuk ışıltılı offf 👻',
    'Hayaletime yakışan bir boşalma… ahhh 😏',
    'Parıltısı hâlâ üstünde… offf 💦'
  ],
  'Blood Moon Load': [
    'Dolunayın etkisi, iki kat geldi… ahhhh 😩💦',
    'Ay kıpkırmızı, ben taşıyorum offf 🌕',
    'Bu gece normalin iki katı {o}… ahh 🥵',
    'Durmadan fışkırıyor, ay beni çıldırttı offf 😮‍💨',
    'Kurt gibi uludum, boşaldım… ahhh 🐺',
    'Bu kadar çok olmamalıydı offf 💦',
    'Kanlı ayın altında taştım… ahh 🔥',
    'Her yer bembeyaz oldu offf 😈',
    'Dolunay her ay olsa… ahhh 😩',
    'Ayın gücü bende, hepsi senin offf 💦'
  ],
  'Vampire Feast': [
    'Çok bol geldi, vampirim doyacak… ahhh 😩💦',
    'Ziyafet çektim sana offf 🧛',
    'İç bakalım {o}, hepsi senin… ahh 🥵',
    'Bu kadar bol beklemiyordun değil mi offf 😮‍💨',
    'Taşıyor, damla damla iç… ahhh 💦',
    'Açlığını doyuracak kadar offf 😈',
    'Vampir ziyafeti, bitmek bilmiyor… ahh 🔥',
    'Dudaklarından taşıyor offf 💦',
    'Bir ömür yetecek kadar… ahhh 😩',
    'Doydun mu? Daha var offf 😏'
  ],
  'Cauldron Overflow': [
    'O kadar çok geldi ki taşıyor… ahhhh 😩💦',
    'Kazan doldu, taştı offf 🧪',
    'Kadehten, göğüslerinden, her yerden akıyor {o}… ahh 🥵',
    'Durmuyor, sel gibi offf 😮‍💨',
    'Bu kadarını hiç bırakmamıştım… ahhh 💦',
    'Her şey bembeyaz oldu offf 😈',
    'Küvet bile yetmez bu kadarına… ahh 🔥',
    'Taşkın bir boşalma, bacaklarım titriyor offf 😩',
    'Kazanın kenarından süzülüyor… ahhh 💦',
    'Bu taşkını büyü yaptı, eminim offf 😏'
  ],
  "Witch's Brew": [
    'Koyu ve yoğun, iksir kıvamında… ahhh 😩💦',
    'Cadım, bu tam aradığın malzeme offf 🧪',
    'Kazanına mükemmel bir ekleme {o}… ahh 🥵',
    'Kalın ve ağır, büyü için ideal offf 😮‍💨',
    'Bu kıvamla her iksir tutar… ahhh 😈',
    'Koyu koyu akıyor offf 💦',
    'Yoğunluğu büyülü… ahh ✨',
    'İksirin gücü benden geliyor offf 😏',
    'Karıştır bakalım, ne olacak… ahhh 🧪',
    'Cadının en sevdiği malzeme benim offf 💦'
  ],
  'Single Shot': [
    'Tek bir güçlü atış… ahhh 😩💦',
    'Bir kerede hepsi offf 🔥',
    'Tek ama sert {o}… ahh 🥵',
    'Bir fışkırma, sonra sessizlik offf 😮‍💨',
    'Kısa ve keskin… ahhh 💦',
    'Bir atışta bitti offf 😅',
    'Tek ama tam isabet… ahh 🎯',
    'Güçlü bir atış, nefesim kesildi offf 😩',
    'Bir kez ama dolu dolu… ahhh 💦',
    'Tek atış, büyük titreme offf 🥵'
  ],
  'Multiple Ropes': [
    'Bir, iki, üç… art arda fışkırıyor… ahhh 😩💦',
    'Her zonklamada bir ip daha offf 🔥',
    'Saymayı bıraktım {o}… ahh 🥵',
    'Peş peşe beş atış offf 😮‍💨',
    'Her biri bir öncekinden sıcak… ahhh 💦',
    'İp ip her yerine yayıldı offf 😈',
    'Bitmedi, bir tane daha… ahh 😩',
    'Art arda gelen dalgalar offf 🌊',
    'Her atışta bacaklarım titriyor… ahhh 🥵',
    'Beyaz çizgiler tenini süslüyor offf 💦'
  ],
  'Endless Ropes': [
    'Durmuyor, bitmek bilmiyor… ahhhh 😩💦',
    'Atış atış, hâlâ geliyor offf 🔥',
    'Bu kadar çok nereden çıktı {o}? Ahh 🥵',
    'Saydım, onu geçti offf 😮‍💨',
    'Kontrol edemiyorum, akmaya devam… ahhh 💦',
    'Her yerin bembeyaz oldu offf 😈',
    'Sonsuz gibi, bacaklarım tutmuyor… ahh 😩',
    'Bitti sandım, bir tane daha offf 🌊',
    'Bu boşalma hiç bitmeyecek… ahhh 😵‍💫',
    'Nihayet bitti… offf 💦'
  ],
  'Hot Load': [
    'Yakıcı sıcaklıkta geldi… ahhh 🔥💦',
    'Tenini yakıyor, hissediyor musun offf 🥵',
    'Lav gibi sıcak {o}… ahh 😩',
    'İçini ısıttım offf 😮‍💨',
    'Bu sıcaklık hiç sönmeyecek… ahhh 🔥',
    'Kaynar gibi aktı offf 💦',
    'Sıcaklığı bütün bedenine yayılıyor… ahh 🥵',
    'Yanıyorum, sen de yanıyorsun offf 😈',
    'Ateş gibi bir boşalma… ahhh 🔥',
    'Hâlâ sıcacık… offf 💦'
  ],
  'Cold Shiver': [
    'Ürperten bir serinlikte geldi… ahh 🥶💦',
    'Tenin diken diken oldu offf 😳',
    'Serin damlalar seni titretti {o}… ahh 😮‍💨',
    'Garip bir soğukluk, ama hoş offf ❄️',
    'Bu serinlik bu dünyadan değil… ahhh 👻',
    'Ürpermene bayıldım offf 😈',
    'Serin ve tuhaf… ahh 🥶',
    'Soğuk bir dalga gibi offf 💦',
    'Sırtından aşağı ürperti indi… ahhh 😳',
    'Serin ama tatlı… offf 😌'
  ],
  'Sweet': [
    'Bu sefer tadı tatlı… mmm 😋',
    'Tadına bak, şaşıracaksın offf 🍯',
    'Tatlı mı? Söyle {o} 😏',
    'Meyve yedim, işe yaradı galiba… ahh 🍓',
    'Şeker gibi geldi offf 😋',
    'Dilinde tatlı bir iz… mmm 💦',
    'Bir yudum daha istersin artık 😈',
    'Tatlı ve sıcak… ahh 🍯',
    'Bu tatla bağımlılık yapar offf 😏',
    'Tatlı bir son… mmm 😌'
  ],
  'Salty': [
    'Bu sefer tadı tuzlu… mmm 😅',
    'Deniz gibi tuzlu offf 🌊',
    'Tuzlu mu? Yüzünü buruşturdun {o} 😏',
    'Kahve içmiştim, ondan galiba ahh ☕',
    'Tuzlu ama sıcacık offf 💦',
    'Dudağında tuzlu bir iz… mmm 😋',
    'Alışırsın, söz 😈',
    'Tuzlu bir boşalma, ama yoğun… ahh 🥵',
    'Su iç, tadı gitsin 💧',
    'Tuzlu ama zevkli… offf 😌'
  ],
  'Succubus Curse': [
    'Son boşalmam kırmızı geldi… ahhh 😳💦',
    'Enerjimi fazla emdin succubus offf 😈',
    'Lanetlendim galiba {o}… ahh 🩸',
    'Kırmızı damlalar, garip bir güç offf 😮‍💨',
    'Ruhumu da mı aldın? Ahhh 😵‍💫',
    'Bitmiş hissediyorum, ama tatlı bir bitiş offf 😩',
    'Lanetin içime işledi… ahh 🔥',
    'Kırmızı iz bıraktı tenimde offf 🩸',
    'Beni kurutmaya mı geldin? Ahhh 😈',
    'Lanetli ama mutlu… offf 💦'
  ],

  /* ---------- 💧 Pre-cumming ---------- */
  'Low-volume Pre-cumming': [
    'Ucunda küçük bir damla belirdi… mmm 😳',
    'Azıcık ön sıvı, heyecanlandım offf 🥵',
    'Bir damla, sadece bir damla {o} 😏',
    'Parmağınla al istersen… ahh 😈',
    'Hazırlanıyorum, işareti bu offf 😮‍💨',
    'Minik bir damla, büyük bir istek… mmm 🔥',
    'Parlıyor ucunda ahh 💧',
    'Daha yeni başlıyoruz offf 😏',
    'Sessizce damladı… mmm 😳',
    'Seni gördükçe geliyor… ahh 🥵'
  ],
  'Normal Pre-cumming': [
    'Ucumdan ön sıvı süzülüyor… ahh 😩',
    'Kaygan kaygan oldu offf 🥵',
    'Ne kadar istediğimi gösteriyor {o}… ahh 😈',
    'Damlalar uca birikti offf 💧',
    'Hazırım, bak ne kadar ıslandım… ahhh 😮‍💨',
    'Kayganlık kendiliğinden geldi offf 🔥',
    'Elinle yay istersen… mmm 😏',
    'Seni düşündükçe akıyor ahh 💦',
    'Kalbim hızlandıkça damlıyor offf 😩',
    'İşte bu kadar tahrik ettin beni… ahh 🥵'
  ],
  'High-volume Pre-cumming': [
    'Ön sıvım sel gibi akıyor… ahhh 😩💧',
    'Daha boşalmadım bile, bak ne kadar ıslak offf 🥵',
    'Bu kadar tahrik olmamıştım {o}… ahh 😈',
    'Damlalar ipliğe dönüştü offf 😮‍💨',
    'Kaygan kaygan, her yerin ıslandı… ahhh 💦',
    'Bu ön sıvı bile sorun olabilir, dikkat offf 😅',
    'Durmadan akıyor, kontrol edemiyorum… ahh 😩',
    'Sırılsıklam oldum offf 🔥',
    'Bu kadar çok gelmesi seni ne kadar istediğimi gösteriyor… ahhh 🥵',
    'Damla damla değil, akarak… offf 💦'
  ],

  /* ---------- 🍼 Lactation · su (onun ıslaklığı) ---------- */
  'Drops Woter': [
    'Birkaç damla ıslaklık parmaklarımda… mmm 😏',
    'Ufak ufak ıslanıyorsun offf 🥵',
    'Damlalar başladı {o}… ahh 💧',
    'Isınıyorsun, belli oluyor offf 😈',
    'Parmağımı yalayıp tadına bakıyorum… mmm 😋',
    'Daha yeni başlıyor ahh 💦',
    'Birkaç damla, ama ne kadar sıcak offf 🔥',
    'Bedenin cevap veriyor… mmm 😮‍💨',
    'Daha çok istiyorum offf 😏',
    'Islaklığın ilk işaretleri… ahh 💧'
  ],
  'Low-volume Woter': [
    'Hafifçe ıslandın… mmm 😏',
    'Parmaklarım kayganlaştı offf 🥵',
    'Azıcık ama sıcacık {o}… ahh 💦',
    'Bacaklarının arası nemlendi offf 😈',
    'Bu daha başlangıç… mmm 🔥',
    'Islaklığını avucumda hissediyorum ahh 😮‍💨',
    'Tenin parlıyor offf 💧',
    'Biraz daha uğraşırsam… ahh 😏',
    'Kayganlığın arttı offf 🥵',
    'Islaklık yayılıyor… mmm 💦'
  ],
  'Normal Woter': [
    'Sırılsıklam oldun… ahh 😍',
    'Parmaklarımdan süzülüyor offf 🥵',
    'Bu kadar ıslandığını görmek {o}… ahh 😈',
    'Kalçanın altı ıslandı offf 💦',
    'Kaygan kaygan kayıyorum… ahhh 😮‍💨',
    'Bedenin hazır, belli offf 🔥',
    'Islaklığın bacaklarına aktı… ahh 💧',
    'Tadın dilimde offf 😋',
    'Böyle ıslakken çok güzelsin… mmm 😍',
    'Seni ıslatan benim offf 😏'
  ],
  'High-volume Woter': [
    'Sel gibi ıslandın… ahhh 😍💦',
    'Çarşaf bile ıslandı offf 🥵',
    'Bu kadar ıslak olabileceğini bilmiyordum {o}… ahh 😈',
    'Uyluklarından aşağı akıyor offf 💧',
    'Parmaklarım sırılsıklam… ahhh 😮‍💨',
    'Her dokunuşta daha çok geliyor offf 🔥',
    'Yatak su içinde ahh 💦',
    'Bedenin taşıyor… mmm 😩',
    'Böyle ıslatabildiğim için gururluyum offf 😏',
    'Islaklığına bayılıyorum… ahhh 💦'
  ],
  'Squirt Woter': [
    'Fışkırdın! Ahhh 😍💦',
    'Yüzüme kadar geldi offf 🥵',
    'Durma, bırak kendini {o}… ahh 😈',
    'Her yer sırılsıklam offf 💧',
    'Bir dalga daha… ahhh 😮‍💨',
    'Göğsüme fışkırdı, offf sıcacık 🔥',
    'Bacakların titreyerek fışkırıyorsun… ahh 💦',
    'Bu manzara için her şeyi yaparım offf 😍',
    'Yatak göl oldu… ahhh 😏',
    'Bir daha yapalım bunu… offf 💦'
  ],

  /* ---------- 🍼 Lactation · süt ---------- */
  'Drops Milk': [
    'Göğüs ucunda bir damla süt belirdi… mmm 😳',
    'Dilimle alıyorum o damlayı offf 😋',
    'Sütün geliyor {o}… ahh 🍼',
    'Tadı ılık ve tatlı… mmm 💗',
    'Bir damla daha, parmağımla sıktım offf 😏',
    'Göğsün sütle parlıyor… ahh 😍',
    'Damla damla, nazikçe… mmm 🍼',
    'Ucunu emince bir damla daha offf 😮‍💨',
    'Bu damlalar beni deli ediyor… ahh 🥵',
    'Sütünün ilk damlaları… mmm 💗'
  ],
  'Low-volume Milk': [
    'Emdikçe azıcık süt geliyor… mmm 😋',
    'Ilık süt dilimde offf 🍼',
    'Az ama tatlı {o}… ahh 💗',
    'Göğsünü avuçlayıp nazikçe sıkıyorum offf 😏',
    'Damlalar ipliğe dönüşüyor… mmm 🥵',
    'Biraz daha emeyim mi? 😈',
    'Sütünün tadı tatlı offf 😍',
    'Göğüs ucundan süzülüyor… ahh 😮‍💨',
    'Az ama yetiyor bana… mmm 🍼',
    'Emzirirken saçlarımı okşuyorsun… 💗'
  ],
  'Normal Milk': [
    'Emdikçe süt doluyor ağzıma… mmm 😋',
    'Ilık ve tatlı, durmadan geliyor offf 🍼',
    'Göğsün bana besin oluyor {o}… ahh 💗',
    'Diğer göğsünden de süzülüyor offf 😍',
    'Yudum yudum içiyorum… mmm 🥵',
    'Göğsünü sıkınca fışkırıyor ahh 😮‍💨',
    'Sütünün tadına doyamıyorum offf 😈',
    'Dudaklarımdan çeneme akıyor… mmm 🍼',
    'Emzirmen içimi ısıtıyor… 💗',
    'Bir yudum daha… mmm 😋'
  ],
  'High-volume Milk': [
    'Süt durmadan akıyor, yetişemiyorum… mmm 😍',
    'Ağzım doldu, taşıyor offf 🍼',
    'Göğüslerin dolu dolu {o}… ahh 🥵',
    'Göğsümden aşağı akıyor süt offf 😮‍💨',
    'İki göğsünden birden… mmm 😈',
    'Sıktıkça fışkırıyor ahh 💦',
    'Bu kadar dolu göğüsler offf 😍',
    'Doyamıyorum, emmeye devam… mmm 🍼',
    'Süt her yere bulaştı offf 😏',
    'Göğüslerin taşıyor… ahh 💗'
  ],
  'Squirt Milk': [
    'Göğsünden süt fışkırdı! Ahhh 😍',
    'Yüzüme geldi offf 🍼',
    'Sıktıkça fışkırıyor {o}… ahh 🥵',
    'Göğsüm sütle ıslandı offf 💦',
    'Bir fışkırma daha… mmm 😈',
    'Ağzımı açıp yakalıyorum offf 😋',
    'İki göğsünden birden fışkırıyor… ahhh 😮‍💨',
    'Bu manzara inanılmaz offf 😍',
    'Süt yağmuru gibi… mmm 🍼',
    'Hepsini içeceğim… offf 💗'
  ],
  'Crimson Milk': [
    'Sütün pembe-kırmızı geldi… mmm 😳',
    'Lanetin izi bu offf 🩸',
    'Tadı tuhaf ama bağımlılık yapıyor {o}… ahh 🥵',
    'Kırmızı damlalar dudaklarımda offf 😈',
    'Bu süt beni değiştiriyor… ahhh 😵‍💫',
    'Pembe süt göğsünden süzülüyor offf 😍',
    'Lanetli ama tatlı… mmm 🩸',
    'Bir yudum daha, içimde ateş gibi offf 🔥',
    'Bu rengi hiç görmemiştim… ahh 😳',
    'Kanlı ayın sütü… mmm 🌕'
  ],
  'Warm Milk': [
    'Sıcacık süt ağzıma doluyor… mmm 😌',
    'İçimi ısıtıyor offf 🍼',
    'Ilık ve yumuşak {o}… ahh 💗',
    'Emdikçe sıcaklık yayılıyor offf 😮‍💨',
    'Sıcacık göğsün, sıcacık sütün… mmm 😍',
    'Kışın en güzel içeceği ahh ☕',
    'Göğsüne yaslanıp içiyorum offf 😌',
    'Sıcaklığı boğazımdan aşağı iniyor… mmm 🍼',
    'Sana sarılmış gibi hissettiriyor… 💗',
    'Bir yudum daha… mmm 😋'
  ],
  'Cold Milk': [
    'Serin süt ürpertti beni… mmm 🥶',
    'Ferahlatıcı offf 🍼',
    'Serin ve tatlı {o}… ahh 😳',
    'Dilimde buz gibi bir ferahlık offf ❄️',
    'Tuhaf ama hoş… mmm 😏',
    'Emdikçe tüylerim diken diken offf 😮‍💨',
    'Serinliği boğazımda… ahh 🍼',
    'Sıcak tenin, serin sütün… mmm 😍',
    'Bu kontrast beni deli ediyor offf 🥵',
    'Bir yudum daha, ferahlayayım 😋'
  ],
  'Sweet Milk': [
    'Tatlı mı? Hem de nasıl… mmm 😋',
    'Şeker gibi süt offf 🍼',
    'Tadını soruyorsun {o}: tatlı, çok tatlı 😍',
    'Bal gibi değil ama yakın… mmm 🍯',
    'Bu tatla doyamam offf 😈',
    'Dilimde tatlı bir iz… mmm 💗',
    'Tatlı sütün sırrı ne? 😏',
    'Yudum yudum tatlı ahh 🍼',
    'Tadı damağımda kaldı offf 😋',
    'En tatlı süt seninki… mmm 💗'
  ],
  'Honey Milk': [
    'Bal gibi koyu ve tatlı… mmm 🍯',
    'Tadını mı soruyorsun? Bal {o} 😋',
    'Koyu koyu akıyor offf 🍼',
    'Dudaklarıma yapışıyor… mmm 😍',
    'Bu bal sütü beni sarhoş ediyor offf 😵‍💫',
    'Yoğun ve tatlı ahh 🍯',
    'Parmağınla dudaklarıma sürüyorsun… mmm 😈',
    'Arı gibi emiyorum offf 🐝',
    'Bu tat başka yerde yok… mmm 💗',
    'Bir kaşık daha bal… ahh 😋'
  ],
  'Milk Spray': [
    'Göğsüne dokununca süt fışkırdı… ahh 😳',
    'Bir daha dokunayım offf 😏',
    'Göğsüme sıçradı {o}… mmm 🍼',
    'Her sıkışta bir fışkırma offf 😈',
    'Yüzüme geldi, kıkırdadın… ahh 😍',
    'Bu oyuna bayıldım offf 💦',
    'İki elimle iki göğsüne… mmm 🥵',
    'Süt yağmuru başladı offf 🍼',
    'Ağzımı açıp bekliyorum… ahh 😋',
    'Dokundukça fışkıran göğüslerin… mmm 💗'
  ],
  'Milk Drip': [
    'Göğüslerinden kendiliğinden süt damlıyor… mmm 😳',
    'Bluzun ıslandı offf 😏',
    'Kumaşta iki ıslak iz {o}… ahh 🥵',
    'Dur, ben temizlerim… mmm 😋',
    'Damladıkça kıyafetin yapışıyor offf 😍',
    'Islak bluzun çok seksi ahh 😈',
    'Damlaları dilimle yakalıyorum… mmm 🍼',
    'Bluzunu açayım mı? offf 😏',
    'Süt karnına süzülüyor… ahh 💦',
    'Böyle damlarken dayanamıyorum… mmm 🥵'
  ],
  'Let-down': [
    'Emmeye başlayınca süt birden boşaldı… ahh 😳',
    'İrkildin, sonra rahatladın offf 😌',
    'Ağzım bir anda doldu {o}… mmm 🍼',
    'Göğsünün gevşediğini hissettim offf 💗',
    'Süt dalga dalga geliyor… mmm 😮‍💨',
    'İnledin, hoşuna gitti ahh 😏',
    'Sıcacık doldu ağzım offf 😋',
    'Bir anda boşalan süt… mmm 🥵',
    'Rahatlamana bayıldım… 💗',
    'Diğer göğsün de mi? Peki… mmm 😈'
  ],

  /* ---------- 🦄 Fantesy ---------- */
  'Exhibitionism': [
    'Perdeler açık, karşıdan görebilirler… ahh 😳',
    'Biri izliyor olabilir, umurumda değil offf 😈',
    'Pencereye yasladım seni {o}, herkes görsün… ahh 🥵',
    'Görülme korkusu beni daha da azdırıyor offf 🔥',
    'Balkonda, gecenin ortasında… ahhh 🌙',
    'Arabanın camları buğulandı, ama dışarıda insanlar var offf 😏',
    'Sessiz ol, yan masadakiler duyacak… ahh 🤫',
    'Bırak baksınlar, sen benimsin offf 😈',
    'Kalabalığın ortasında gizlice dokunuyorum… mmm 🥵',
    'Yakalanırsak ne olur? Hadi devam… ahhh 😮‍💨'
  ],
  'Belly Bulge': [
    'O kadar derindeyim ki karnında şişkinlik görüyorum… ahhh 😳',
    'Elimi karnına koydum, beni hissediyorum offf 🥵',
    'Her vuruşta karnın kabarıyor {o}… ahh 😩',
    'Bu kadar derine girdiğimi görmek offf 😈',
    'Karnının üstünden kendimi okşuyorum… ahhh 😮‍💨',
    'Sen de dokun, bak ne kadar derindeyim offf 🔥',
    'Şişkinlik gelip gidiyor… ahh 🥵',
    'Böyle bir manzara hiç görmedim offf 😍',
    'Seni tamamen dolduruyorum… ahhh 💦',
    'Karnın benim şeklimi alıyor… offf 😈'
  ],
  'Sex toys 🍆': [
    'Oyuncak kutusunu açtım, hangisini seçiyorsun? 😈',
    'Titreşimi en yükseğe aldım… ahh 🔥',
    'Oyuncak sende, ben seyrediyorum offf 🥵',
    'Bir yandan oyuncak, bir yandan ben {o}… ahhh 😩',
    'Vibratörü göğüslerinde gezdiriyorum… mmm 😏',
    'Uzaktan kumandayla seni titretiyorum offf 😈',
    'Oyuncağı yavaşça içine itiyorum… ahh 🥵',
    'Titreşim hızlandıkça inlemen artıyor offf 😮‍💨',
    'Hangisi daha iyi, ben mi oyuncak mı? 😏',
    'Bütün oyuncakları deneyeceğiz bu gece… ahhh 🔥'
  ],
  'Bondage': [
    'Bileklerini başlığa bağladım… 😈',
    'Kıpırdayamıyorsun, tamamen benimsin offf 🔥',
    'Gözlerini bağladım, her dokunuşum sürpriz {o}… ahh 🥵',
    'İpler tenine iz bırakıyor offf 😏',
    'Çaresizliğin beni deli ediyor… ahhh 😮‍💨',
    'Bağlıyken istediğimi yapacağım… ahh 😈',
    'Bacaklarını da bağladım, açık kaldın offf 🥵',
    'Kurtulmaya çalışma, boşuna… ahhh 😏',
    'Bağlı bedenini öpe öpe dolaşıyorum… mmm 🔥',
    'Güvenli kelimemizi hatırlıyorsun değil mi? 💗'
  ],
  'Cheating': [
    'Biri gelirse diye kulağımız kapıda… ahh 😳',
    'Yasak olan daha tatlı offf 😈',
    'Onun haberi yok {o}… ahhh 🥵',
    'Telefonun çalıyor, açma… offf 😏',
    'Sessiz ol, duyulmasın… ahh 🤫',
    'Bu sır ikimizin arasında offf 🔥',
    'Yakalanma korkusu daha da azdırıyor… ahhh 😮‍💨',
    'Eve dönünce hiçbir şey olmamış gibi yap offf 😈',
    'Kokumu üstünde taşıyacaksın… ahh 😏',
    'Bir kere daha, son kez… söz offf 🥵'
  ],
  'Doggy Girl ( Submission )': [
    'Aferin kızım, otur… 😈',
    'Tasmanı taktım, ipini tutuyorum offf 🐶',
    'Dört ayak üstünde bana gel {o}… ahh 🥵',
    'İyi kız, ödülünü hak ettin offf 😏',
    'Başını okşuyorum, kuyruğunu sallıyorsun… mmm 🐶',
    'Emrimi bekliyorsun, ne güzel… ahh 😈',
    'Yere yatıp karnını gösterdin offf 😍',
    'Havla bakalım, sonra ödül… ahhh 🔥',
    'Sadık köpeğim benim offf 🐶',
    'Bugün tamamen bana teslimsin… ahh 💗'
  ],
  'Cat Girl': [
    'Kedim mırıldanıyor… mmm 🐱',
    'Kulaklarını okşuyorum, mırlaman artıyor offf 😍',
    'Pençelerin sırtımda {o}… ahh 😼',
    'Kucağıma kıvrıldın, sıcacıksın… mmm 💗',
    'Kuyruğunu çekince tısladın offf 😈',
    'Süt ister misin pisi? 🥛',
    'Yalayarak temizliyorsun beni… ahhh 🥵',
    'Kedi gibi geriniyorsun, ne kalça offf 😏',
    'Miyavlaman beni azdırıyor… ahh 🐱',
    'Bu gece benim kedimsin offf 😼'
  ],
  'Bunny Girl': [
    'Tavşan kulakların ne tatlı… 🐰',
    'Pamuk kuyruğuna dokunuyorum offf 😍',
    'Zıplayarak kucağıma geldin {o}… ahh 🥵',
    'Havuç ister misin tavşanım? 😏',
    'Burnunu kıpırdatman offf 😍',
    'Tavşanlar ne kadar çabuk ürer biliyorsun değil mi? 😈',
    'Kucağımda zıplamaya devam… ahhh 🐰',
    'Kulaklarını tutup kendime çekiyorum offf 🥵',
    'Ürkek tavşanım benim… mmm 💗',
    'Bu gece seni yakaladım tavşan offf 🐰'
  ],
  'Unicorn Girl': [
    'Boynuzun ışıldıyor… ✨',
    'Büyülü tenin parlıyor offf 🦄',
    'Bir unicorn yakaladım {o}… ahh 😍',
    'Yelesini okşuyorum, gökkuşağı gibi mmm 🌈',
    'Büyün bana da geçiyor offf ✨',
    'Masallardaki gibi güzelsin… ahh 🦄',
    'Bu gece büyü bizim offf 😈',
    'Boynuzuna dokununca titredin… mmm 😏',
    'Efsanevi bir gece ahhh 🌙',
    'Seni kimseyle paylaşmam unicornum offf 💗'
  ],
  'Fox Girl ( Cunning )': [
    'Kurnaz tilkim yine ne planlıyor? 🦊',
    'Kabarık kuyruğunu okşuyorum offf 😍',
    'Beni kandırdın ama hoşuma gitti {o}… ahh 😏',
    'Sinsi gülüşün offf 😈',
    'Tuzağına düştüm, bilerek… ahhh 🦊',
    'Kulaklarını kaşıyorum, gözlerin kısıldı mmm 😌',
    'Bu oyunun kuralını sen koyuyorsun offf 🥵',
    'Kurnazlığına âşığım… ahh 💗',
    'Kuyruğunu belime doladın offf 😈',
    'Bu sefer kim kimi avladı? 😏'
  ],
  'Cumflation': [
    'O kadar doldurdum ki karnın şişti… ahhh 😳💦',
    'Elimi karnına koydum, dopdolu offf 🥵',
    'Her boşalmada biraz daha kabarıyor {o}… ahh 😈',
    'Bu kadarını içine nasıl sığdırdın? Offf 😮‍💨',
    'Karnın yuvarlandı, bayılıyorum… ahhh 😍',
    'Durmadan dolduruyorum offf 💦',
    'Kıpırdayınca içinde çalkalanıyor… ahh 😩',
    'Tamamen benimle doldun offf 😈',
    'Karnını okşuyorum, sıcacık… mmm 🥵',
    'Bir tur daha, daha da şişsin… ahhh 💦'
  ],
  'Patron – Sekreter': [
    'Kapıyı kilitle, mesai bitti 😈',
    'Bu raporlar beklesin, önce sen offf 🔥',
    'Masama eğil {o}… ahh 🥵',
    'Terfi istiyorsan ikna etmen lazım 😏',
    'Eteğini düzelt, toplantıya geç kaldık… sonra offf 😈',
    'Gözlüğünü çıkarma, böyle daha seksi… ahh 😍',
    'Bütün ofis gitti, sadece biz kaldık offf 🥵',
    'Not al: bu gece fazla mesai var… ahhh 😏',
    'Kucağıma otur, imza bekleyen evraklar var offf 🔥',
    'Bu konuşma aramızda kalsın… ahh 🤫'
  ],
  'Hoca – Öğrenci (Üniversite)': [
    'Ofis saatime geldin, notunu mu konuşacağız? 😏',
    'Kapıyı kapat, bu ders özel offf 🔥',
    'Bu ödevin üstünden geçelim {o}… ahh 🥵',
    'Kürsünün arkasına gel… 😈',
    'Final için ekstra puan mı istiyorsun? 😏',
    'Defterini bırak, uygulamalı ders başlıyor… ahh 🔥',
    'Sessiz ol, koridorda biri var offf 🤫',
    'Bu konuyu iyi öğrendin, aferin… ahhh 😍',
    'Bir sonraki ofis saatini de bekliyorum offf 😈',
    'Bu konuşma kampüste kalmasın… ahh 🤫'
  ],
  'Doktor – Hasta': [
    'Muayene masasına uzan lütfen 🩺',
    'Nerede ağrıyor, göster bakalım offf 😏',
    'Kalbin çok hızlı atıyor {o}… ahh 🥵',
    'Derin nefes al, şimdi daha yakından bakacağım 😈',
    'Bu muayene biraz özel olacak offf 🔥',
    'Steteskobu göğsünde gezdiriyorum… mmm 😍',
    'Tedavi planın: benim ellerim… ahh 😏',
    'Rahatla, doktoruna güven offf 💗',
    'Ateşin var gibi, iyice bakalım… ahhh 🥵',
    'Kontrole haftaya yine gel 😈'
  ],
  'Polis – Şüpheli': [
    'Ellerini duvara koy, aranacaksın 🚔',
    'Kelepçeleri taktım, kaçış yok offf 😈',
    'Sorguya başlıyoruz {o}… ahh 🥵',
    'Suçunu itiraf et, belki hafifletirim 😏',
    'Üstünü arıyorum, her yerini… offf 🔥',
    'Sessiz kalma hakkın var… ama inleyebilirsin ahh 😈',
    'Bu sorgu uzun sürecek offf 😏',
    'İşbirliği yaparsan serbestsin… ahhh 🥵',
    'Kameraları kapattım, sadece biz offf 🤫',
    'Seni gözaltında tutacağım bu gece… ahh 🚔'
  ],
  'Yeni Komşu': [
    'Şeker mi istemiştin? İçeri gel 🍬',
    'Yeni taşındın demek, hoş geldin offf 😏',
    'Kapıda öyle durma {o}, gir içeri… 😈',
    'Şekerden fazlasını vereyim mi? 😏',
    'Komşuluk ilişkilerini geliştirelim… ahh 🔥',
    'Kocan evde mi? Değil mi… offf 🥵',
    'Bir çay içeriz, sonra bakarız 😏',
    'Duvarlar ince, sessiz olmalıyız… ahh 🤫',
    'Her gün şekerin biterse gel offf 😈',
    'Yeni komşum en tatlısı çıktı… mmm 🍬'
  ],
  'Hizmetçi – Ev Sahibi': [
    'Buraları iyi temizlememişsin 😏',
    'Eğil de şu köşeyi sil bakalım offf 😈',
    'Önlüğün ne kadar kısa {o}… ahh 🥵',
    'Bugünkü görevin ben olacağım 😏',
    'Toz bezini bırak, yanıma gel offf 🔥',
    'Yatağı yap… benimle birlikte ahh 😈',
    'İyi çalışırsan maaşına zam var offf 😏',
    'Efendim de bana… ahhh 🥵',
    'Bu evde tek kuralım var: itaat offf 😈',
    'Bugün işin erken bitti… ya da yeni başladı ahh 🔥'
  ],
  'Masöz – Müşteri': [
    'Havlunun altında hiçbir şey yok… 😏',
    'Yağı sırtıma dök, sıcacık offf 😌',
    'Ellerin sihirli {o}… ahh 🥵',
    'Biraz daha aşağı, evet orası… offf 😮‍💨',
    'Mutlu son da paket dahil mi? 😈',
    'Ters dönmemi ister misin? Ahh 😏',
    'Bu masaj beni gevşetmiyor, tam tersi offf 🔥',
    'Bahşişi hak ediyorsun… ahhh 💸',
    'Seansı uzatalım mı? offf 😏',
    'Haftalık abonelik alıyorum… ahh 😌'
  ],
  'Kadın Hoca – Öğrenci (Üniversite)': [
    'Hocam, ofis saatinizdeyim… sorularım var 😳',
    'Notum için ne yapmam gerekiyor hocam? 🙈',
    'Kapıyı mı kapatayım? Peki… offf 😳',
    'Masanızın yanına gelmemi mi istiyorsunuz? 🥵',
    'Bu konuyu hiç böyle anlatmamıştınız {o}… ahh 😮‍💨',
    'Sizi derste izlerken hep bunu düşünüyordum 😳',
    'Gözlüğünüzü çıkarınca bambaşkasınız hocam… ahh 😍',
    'Ekstra ödev olarak bunu mu yapacağım? offf 😏',
    'Kimseye söylemem hocam, söz… ahhh 🤫',
    'Bir sonraki ofis saatinizi kaçırmam 😈'
  ],
  'Klinik Doktoru – Hasta': [
    'Doktor… biraz gerginim, ilk defa geliyorum 😟',
    'Nereden başlayacağımı bilemiyorum, utanıyorum 🙈',
    'Elleriniz çok şefkatli, rahatladım biraz 🥺',
    'Bu muayene böyle mi olur? Ahh 😳',
    'Gözlerime bakınca daha az korkuyorum 😌',
    'Ağrım geçiyor gibi doktor… offf 😮‍💨',
    'Kızardığımı görmeyin lütfen 🙈',
    'Size güveniyorum, devam edin 🥺',
    'Böyle hissetmem normal mi doktor? Ahh 😳',
    'Bir dahaki randevuyu şimdiden alabilir miyim? 💗'
  ],
  'Vampir Kontes – Misafir': [
    'Kontesim, kapınızı çalan yorgun bir yolcuyum 🦇',
    'Şatonuz çok soğuk, ama siz… sıcak 😳',
    'Gözleriniz kıpkırmızı parlıyor {o}… ahh 🥵',
    'Boynumu size uzatıyorum, kontes 😈',
    'Dişleriniz tenime değince titredim offf 😮‍💨',
    'Bu gece misafiriniz, yarın köleniz… ahh 🩸',
    'Şamdanların ışığında daha da güzelsiniz 🕯️',
    'Kanımdan bir yudum, sonra ben sizden offf 😏',
    'Şafak sökmeden gitmemeliyim… ya da hiç gitmem ahhh 🌙',
    'Ölümsüzlük bu kadar tatlıysa razıyım… offf 🦇'
  ],
  'Cadı – Çırak': [
    'Ustam, iksirin bedelini ödemeye geldim 🧙',
    'Kazandan yükselen duman başımı döndürüyor… 😵‍💫',
    'Bedel olarak ne istiyorsunuz {o}? 😳',
    'Büyünüzü tenimde hissediyorum offf ✨',
    'Çırağınız her emrinize hazır… ahh 😈',
    'Bu iksir beni size bağladı offf 🧪',
    'Süpürgenizi bırakın, beni alın… ahhh 🥵',
    'Kazanın başında öğreteceğiniz ders bu mu? 😏',
    'Büyü kitabınızda bunu da yazın offf 📖',
    'Bedeli ödedim mi ustam? Bir daha mı? Ahh 😈'
  ],
  'Falcı – Müşteri': [
    'Kristal kürede ne görüyorsun? 🔮',
    'Geleceğimde sen var mısın? 😏',
    'Elimi avucunda tutman bile titretti {o}… ahh 😳',
    'Mum ışığında gözlerin büyülü offf 🕯️',
    'Falıma göre bu gece ne olacak? 😈',
    'Kartları bırak, beni oku… ahh 🥵',
    'Kehanetin gerçekleşiyor offf 🔮',
    'Bu çadırdan çıkmak istemiyorum… ahh 😍',
    'Ücretini başka türlü ödeyebilir miyim? 😏',
    'Geleceğim senin ellerinde offf 💗'
  ],
  'Perili Ev Rehberi – Ziyaretçi': [
    'Tur bitti ama kapılar kilitlendi… 😳',
    'Sen de mi buradasın? Korkmaya başladım 👻',
    'Gıcırdayan merdivenler… elimi bırakma {o} 😨',
    'Karanlıkta sana yaslanıyorum offf 🥵',
    'Bu evin hikâyesini sen anlat, ben dinleyeyim… ahh 😏',
    'Bir ses duydum! Sarıl bana 😳',
    'Korku ve heyecan birbirine karıştı offf 😈',
    'Sabaha kadar burada kalacağız demek… ahhh 🌙',
    'Hayaletler izliyor olabilir, umurumda değil offf 👻',
    'En güzel turun sonu bu… ahh 💗'
  ],
  'Maskeli Yabancı – Kostüm Partisi': [
    'Adını söylemeyecek misin? Peki… 🎭',
    'Seni kalabalıktan çekip götürüyorum offf 😈',
    'Maskenin altındaki dudaklar {o}… ahh 🥵',
    'Kimse nereye gittiğimizi bilmiyor 🤫',
    'Kostümünün fermuarı nerede? 😏',
    'Müzik uzakta, biz karanlık bir odada… offf 🔥',
    'Maskeni çıkarma, gizem kalsın ahh 🎭',
    'Yarın tanışmamış gibi davranırız… offf 😈',
    'Bu gecenin tek kuralı: isim yok ahh 😏',
    'Seni bir daha nasıl bulacağım? 🎭'
  ],
  'Kara Kedi – Sahibi': [
    'Yeni sahibinim, gel bakalım kara kedim 🐈‍⬛',
    'Sarı gözlerin karanlıkta parlıyor offf 😍',
    'Bacaklarıma sürtünüyorsun {o}… mmm 🥵',
    'Cadılar gecesinde şanssızlık değil, şans getirdin 😏',
    'Kucağıma atla, sıcacıksın… mmm 💗',
    'Mırlaman büyü gibi offf 🐈‍⬛',
    'Tüylerini okşadıkça kıvrılıyorsun… ahh 😍',
    'Pençelerini sakla, sadece sev… mmm 😈',
    'Bu gece insan mı kedi mi olacaksın? 😏',
    'Kara kedim benimle uyuyacak… offf 💗'
  ],
  'Mumya Kraliçe – Kâşif': [
    'Lahdin kapağını açtım… gözlerini açtın 😳',
    'Bin yıllık uykudan uyandırdım seni kraliçem 👑',
    'Sargıların çözülüyor {o}… ahh 🥵',
    'Altın takıların teninde parlıyor offf ✨',
    'Lanetinden korkmuyorum, yaklaş… ahh 😈',
    'Bin yıldır kimse sana dokunmadı mı? 😏',
    'Sargıları tek tek açıyorum offf 🔥',
    'Bu keşif tarihe geçecek… ahhh 😍',
    'Firavunun kraliçesi şimdi benim offf 👑',
    'Bir daha uyumana izin vermem… ahh 💗'
  ],
  'Succubus – Rüya': [
    'Yine rüyama geldin… 😳',
    'Uyanmak istiyorum ama bırakmıyorsun offf 😵‍💫',
    'Kanatların beni sarıyor {o}… ahh 🥵',
    'Rüyada mıyım gerçekte mi bilmiyorum offf 😈',
    'Enerjimi emiyorsun, hissediyorum… ahhh 😩',
    'Her gece seni bekliyorum aslında 😏',
    'Uyku bu kadar tatlı olmamalı offf 🌙',
    'Kuyruğun bacağıma dolandı… ahh 😈',
    'Sabah uyandığımda yine yorgun olacağım offf 😵‍💫',
    'Bırak, rüya bitmesin… ahhh 💗'
  ],
  'Hayalet – Evin Yeni Sahibi': [
    'Bu evde yalnız olmadığımı biliyordum 👻',
    'Soğuk bir el ensemde… sen misin? 😳',
    'Korkmuyorum, yaklaş {o}… ahh 🥵',
    'Yıllardır yalnız mıydın? Artık değilsin 💗',
    'Serin dokunuşun tüylerimi diken diken etti offf 😮‍💨',
    'Yarı saydam bedenine dokunabiliyorum… ahh 😍',
    'Bu ev artık ikimizin offf 😏',
    'Gece yarısı yatağıma gel… ahhh 🌙',
    'Seni kimse kovamaz buradan offf 👻',
    'Hayaletimle yaşamak güzelmiş… ahh 💗'
  ],
  'Peri – Ormandaki Gezgin': [
    'Yolumu kaybettim, ama seni buldum 🧚',
    'Mantar halkasının içindeyiz, büyü başladı mı? ✨',
    'Kanatların ışıl ışıl {o}… ahh 😍',
    'Peri tozu başımı döndürüyor offf 😵‍💫',
    'Ormanın en güzel sırrı sensin… ahh 🌿',
    'Bana yolu göster, ya da burada kalayım 😏',
    'Minicik ellerin tenimde geziyor offf 🥵',
    'Bu ormanda zaman durmuş gibi… ahhh 🌙',
    'Seni yakalarsam dileğimi gerçekleştirir misin? 😈',
    'Hiç geri dönmek istemiyorum… offf 🧚'
  ],
  'Deniz Kızı – Denizci': [
    'Ağıma bir deniz kızı takıldı… 🧜‍♀️',
    'Ay ışığında pulların parlıyor offf ✨',
    'Şarkın beni büyüledi {o}… ahh 😍',
    'Kayalıklarda yanıma uzan… mmm 🌊',
    'Islak saçların göğsüme dökülüyor offf 🥵',
    'Seni denize geri bırakmalı mıyım? Hayır… ahh 😈',
    'Tuzlu dudaklarını öpüyorum offf 💋',
    'Dalgalar bizi izliyor… ahhh 🌊',
    'Denizcinin en güzel ganimeti sensin offf 😏',
    'Beni de derinlere götür… ahh 🧜‍♀️'
  ],
  'Slime Girl – Laborant': [
    'Kavanoz çatladı ve sen… serbestsin 🧪',
    'Jöle bedenin parlıyor, dokunabilir miyim? 😳',
    'Elim içine gömüldü {o}… ahh 🥵',
    'Kaygan ve serin, çok tuhaf çok güzel offf 😮‍💨',
    'Laboratuvar kayıtlarına bunu nasıl yazacağım? 😅',
    'Bedenin beni sarıyor, yapışıyorsun… ahhh 😩',
    'Benden besleniyor musun? offf 😈',
    'Yarı saydamsın, içini görüyorum… ahh 😍',
    'Deney sonucu: bayıldım offf 🧪',
    'Seni kavanoza geri koymayacağım… ahh 💗'
  ]
}).forEach(([k, v]) => { Stories.ME_EV_LINES[k] = (Stories.ME_EV_LINES[k] || []).concat(v); });

/* 🤗 Yeni sarılma grupları (aynı kurallar: %50, boyut yer tutucuları, yumuşaklık / doruk / tutma / rahatlama) */
Object.assign(Stories.ME_HUG_LINES, {
  spoon: {
    label: '🤗 Sarılma · Spooning', events: ['Spooning', 'Spooning Anal', 'Neck Feast'],
    lines: [
      'Yan yatmış halde arkandan kaşık gibi sarıldım; yumuşacık bedenin bana kalıp gibi oturuyor… ahhh 😩',
      'Göğsüm sırtına, karnım kalçana yapışık; {kalcaHis}, zevkten gözlerimi kapatıyorum offf 🔥',
      'Kolumu başının altından geçirip seni kendime çektim, diğer elim {gogus} göğüslerinde; {gogusHis}… ahh {o} 🥵',
      'Yavaş ve derin, sımsıkı sarılı; tenin ipek gibi kayıyor tenimde offf 😮‍💨',
      'Bacağını bacağımın üstüne aldım, bütün bedenimle sarıyorum seni; bu yumuşaklık beni bitiriyor… ahhh 💦',
      'Ensene gömülüp kokunu içime çekiyorum, {kalca} kalçan kasıklarıma eriyerek yaslanıyor offf 😩',
      'Kaşık gibi iç içeyiz, nefesimiz aynı ritimde; zevkin tepesindeyim… ahh 🔥',
      'Yumuşak karnını okşayarak arkandan derine iniyorum, kollarım seni hiç bırakmıyor offf 🥵',
      'Seni öyle sardım ki aramızda boşluk yok; her vuruşta {gogus} memelerin avucumda dalgalanıyor… ahhh {o} 😮‍💨',
      'Zevke rağmen kasılıp duruyorum; arkandan sarılı halde taşaklarımdan yükselen dölü sıka sıka geri tutuyorum… offf 😣',
      'Yorganın altında sımsıcak, sana sarılıp yavaşça vuruyorum; dünya durdu… mmm 💗',
      'Uzun tuttum, sonunda arkandan sarılıyken bırakıyorum; birikenin hepsi akıp gidiyor, rahatladım… ahhhh 😌💦'
    ]
  },
  lap: {
    label: '🤗 Sarılma · Kucak', events: ['Lap Sex', 'Blood Bath', 'Milk Bath', 'Blood Pact'],
    lines: [
      'Kucağımdasın, kollarım beline, kolların boynuma dolandı; yumuşacık bedenin üstüme eriyor… ahhh 😩',
      '{gogus} göğüslerin yüzüme bastırıyor, aralarına gömülüp nefes alıyorum; {gogusHis} offf 🔥',
      'Ellerim {kalca} kalçanın altında, seni yukarı aşağı oynatırken {kalcaHis}… ahh {o} 🥵',
      'Göğüs göğüse, alın alına; kucağımda sımsıkı sarılı inip kalkıyorsun, zevkin doruğundayım offf 😮‍💨',
      'Sırtını okşayıp seni kendime bastırıyorum, tenin pamuk gibi yumuşak… ahhh 💦',
      'Kucağımda titriyorsun, sarılmayı bırakmıyorum; her inişte o yumuşaklık beni sarıyor offf 😩',
      'Dudaklarını öperken kalçanı aşağı çekiyorum; bütün bedenin üstümde, sıcacık… ahh 🔥',
      'Kollarımda o kadar yumuşaksın ki seni kucağımda eritmek istiyorum offf 🥵',
      'Başını omzuma koydun, inlemen kulağımda; sarılıp alttan derine itiyorum… ahhh {o} 😮‍💨',
      'Kucağımda bu kadar güzelken tutmak işkence; karnımı kasıp yükselen dölü sıka sıka geri itiyorum… offf 😣',
      'Seni hiç bırakmayacak gibi sarıldım, kalbin göğsümde küt küt atıyor… mmm 💗',
      'Kucağımda sımsıkı sarılıyken bırakıyorum kendimi; o kadar birikmişti ki boşaldıkça bütün yük kalkıyor… ahhhh 😌💦'
    ]
  },
  stand: {
    label: '🤗 Sarılma · Ayakta', events: ['Standing', 'Tombstone', 'Shoulder Mark', 'Standing Anal'],
    lines: [
      'Seni ayakta kucaklayıp kendime bastırdım, bacakların belimde; yumuşacık bedenin bütün ağırlığıyla bana yaslanıyor… ahhh 😩',
      '{gogus} göğüslerin göğsüme ezilmiş, ellerim {kalca} kalçanı taşıyor; {kalcaHis} offf 🔥',
      'Kolların boynumda kilitli, ayakta sımsıkı sarılı vuruyorum; {gogusHis}… ahh {o} 🥵',
      'Bütün bedenin üstümde, bir tüy gibi değil bir bulut gibi yumuşak; zevkten dizlerim titriyor offf 😮‍💨',
      'Duvara yaslanmadan, sadece sana sarılarak taşıyorum seni; tenin tenime yapışık… ahhh 💦',
      'Yüzünü boynuma gömdün, ben de seni daha sıkı sarıyorum; doruktayım offf 😩',
      'Avuçlarım yumuşak kalçana gömülü, her kaldırışta seni biraz daha kendime çekiyorum… ahh 🔥',
      'Ayakta sarılmak bütün bedenini hissettiriyor: göğüslerin, karnın, bacakların… offf 🥵',
      'Seni sımsıkı tutup yürüyorum, hâlâ içindeyim; her adımda inliyorsun… ahhh {o} 😮‍💨',
      'Kollarım titriyor, zevk tepeme çıktı ama bırakmıyorum; kasıklarımı kasıp dölü sıka sıka geri tutuyorum… offf 😣',
      'Seni bırakmadan duvara yaslanıp nefes alıyorum, sarılı kalıyoruz… mmm 💗',
      'Ayakta sımsıkı sarılıyken bıraktım kendimi; uzun birikmenin hepsi akıp gitti, dizlerim çözüldü… ahhhh 😌💦'
    ]
  },
  cowgirl: {
    label: '🤗 Sarılma · Cowgirl', events: ['Cowgirl', 'Jelly Ride', 'Jugular Ride'],
    lines: [
      'Seni üstümden kendime çekip sımsıkı sarıldım; {gogus} göğüslerin göğsüme yumuşacık yayılıyor… ahhh 😩',
      'Kollarım sırtında kilitli, sen kalçanı oynatırken ben alttan vuruyorum; {kalcaHis} offf 🔥',
      'Göğsüme kapandın, saçların yüzüme döküldü; yumuşak bedenin bütün ağırlığıyla üstümde… ahh {o} 🥵',
      'Ellerim {kalca} kalçanda, seni sarılı tutup alttan derine itiyorum; {gogusHis} offf 😮‍💨',
      'Üstümde eriyorsun, sarıldıkça o yumuşaklık her yerimi kaplıyor; doruktayım… ahhh 💦',
      'Yüzün boynumda, inlemen tenimde titreşiyor; seni bırakmıyorum offf 😩',
      'Sarılı halde yavaşladın, sadece kalçan dönüyor; bu yumuşaklık işkence gibi güzel… ahh 🔥',
      'Bütün bedeninle üstüme kapandın, sıcacık ve yumuşacık; kalbim deli gibi atıyor offf 🥵',
      'Sırtını okşayıp seni kendime bastırıyorum, göğüs uçların göğsüme sürtünüyor… ahhh {o} 😮‍💨',
      'Üstümde bu kadar yumuşakken dayanmak zor; bütün kaslarımı kasıp taşaklarımdan gelen dölü sıka sıka tutuyorum… offf 😣',
      'Kollarımda kıvrıldın, nefesimiz karışıyor; böyle kalalım… mmm 💗',
      'Seni üstümde sımsıkı sarıp bıraktım kendimi; o kadar birikmişti ki boşaldıkça hafifliyorum… ahhhh 😌💦'
    ]
  }
});

/* 🤗 Yeni sarılma grupları · 2 */
Object.assign(Stories.ME_HUG_LINES, {
  backTheme: {
    label: '🤗 Sarılma · Arkadan (sert & temalı)', events: ['Full Nelson', 'Rough Anal', 'Wobble Doggy', 'Full Moon Doggy', 'Vampire Bite', 'Intimate Doggy', 'Full Body Wrap'],
    lines: [
      'Arkandan bütün bedenimle sarıldım, kollarım seni kilitli tutuyor; yumuşacık sırtın göğsümde eriyor… ahhh 😩',
      'Sert vuruyorum ama sarılmayı bırakmıyorum; {kalcaHis}, zevkten gözüm kararıyor offf 🔥',
      'Kollarımı göğüslerinin altından geçirip seni kendime yapıştırdım; {gogusHis}… ahh {o} 🥵',
      'Ensene gömüldüm, sımsıkı sarılı; her vuruşta {kalca} kalçanın yumuşaklığı kasıklarıma yayılıyor offf 😮‍💨',
      'Seni çepeçevre sardım, kaçış yok; bedenin pamuk gibi, ben taş gibi… ahhh 💦',
      'Bir kolum belinde bir kolum göğsünde, seni kendime bastırarak derine iniyorum; doruktayım offf 😩',
      'Sarıldıkça kalçan bana daha çok yapışıyor, {gogus} memelerin avuçlarımda dalgalanıyor… ahh 🔥',
      'Sertliğimle senin yumuşaklığın birbirine karışıyor; bu zevke dayanamıyorum offf 🥵',
      'Kulağına hırlayarak arkandan sarılıyorum, titreyen bedenin kollarımda… ahhh {o} 😮‍💨',
      'Bu kadar sert vururken bile kasılıp duruyorum; taşaklarımdan yükselen dölü sıka sıka geri tutuyorum… offf 😣',
      'Bir an durup sadece sarıldım; sıcak, yumuşak, terli sırtın göğsümde… mmm 💗',
      'Arkandan sımsıkı sarılıyken bıraktım kendimi; o kadar birikmişti ki boşaldıkça bütün sertliğim çözülüyor… ahhhh 😌💦'
    ]
  },
  frontTheme: {
    label: '🤗 Sarılma · Önden (temalı)', events: ['Ondesk', 'Coffin Missionary', 'Spider Web', 'Coffin Lid', 'Wrist Offering', 'Sacrifice', 'Shapeshift', 'Bareback Pull Out'],
    lines: [
      'Üstüne kapanıp sımsıkı sarıldım, {gogus} göğüslerin göğsüme yumuşacık eziliyor… ahhh 😩',
      'Kollarımı sırtının altından geçirip seni kendime kaldırdım; yumuşak bedenin bana kalıp gibi oturuyor offf 🔥',
      'Göğüs göğüse sarılıyken {gogusHis}; zevkten nefesim kesiliyor… ahh {o} 🥵',
      'Ellerim {kalca} kalçanın altında, seni kendime çekip sarılarak vuruyorum; {kalcaHis} offf 😮‍💨',
      'Boynuna gömüldüm, tenin ipek gibi yumuşak; doruktayım… ahhh 💦',
      'Bacakların belime dolandı, kollarım seni sarıyor; aramızdan hava bile geçmiyor offf 😩',
      'Alnım alnında, yumuşacık karnın karnıma yapışık; her vuruşta biraz daha eriyorum… ahh 🔥',
      'Sarılı halde yavaşladım, sadece bedeninin yumuşaklığını hissetmek için… offf 🥵',
      'Dudaklarını öperken seni bütün bedenimle sarıyorum; inlemen ağzımda titreşiyor… ahhh {o} 😮‍💨',
      'Göğüs göğüse dururken bütün kaslarımı kasıyorum; penisime dayanan dölü sıka sıka geri itiyorum… offf 😣',
      'Kalbin göğsümde küt küt atıyor, seni bırakmak istemiyorum… mmm 💗',
      'Sana sımsıkı sarılıp bıraktım kendimi; uzun tutmanın bütün yükü akıp gitti, hafifledim… ahhhh 😌💦'
    ]
  },
  onTop: {
    label: '🤗 Sarılma · Üstümde', events: ['Cowgirl Anal', 'Ghost Ride', 'Intimate Therapy', 'Bareback Therapy'],
    lines: [
      'Üstümde oturuyorsun, doğrulup sana sımsıkı sarıldım; yumuşacık bedenin kollarımda… ahhh 😩',
      'Kollarımı beline dolayıp seni aşağı bastırıyorum; {kalcaHis} offf 🔥',
      'Göğsüm sana yapışık, {gogus} memelerini avuçlarımda tutuyorum; {gogusHis}… ahh {o} 🥵',
      'Sarılınca bütün ağırlığın üstüme çöküyor, o yumuşaklık beni eritiyor offf 😮‍💨',
      'Kalçanın inişini kollarımla yavaşlatıyorum, tadını çıkarayım diye; doruktayım… ahhh 💦',
      'Boynunu öperken sarılıyorum, saçların yüzüme dökülüyor; ne kadar yumuşaksın offf 😩',
      '{kalca} kalçan kucağımda dönüyor, ben seni sımsıkı sarıp alttan itiyorum… ahh 🔥',
      'Sarılı kalıyoruz, sadece kalçan oynuyor; bu yavaşlık beni bitiriyor offf 🥵',
      'Yanağın yanağımda, inlemen kulağımda; seni daha sıkı sarıyorum… ahhh {o} 😮‍💨',
      'Üstümde bu kadar yumuşakken dayanmak zor; karnımı kasıp yükselen dölü sıka sıka tutuyorum… offf 😣',
      'Kollarımda kıvrılıp kaldın, nefesimiz bir… mmm 💗',
      'Seni üstümde sımsıkı sarıp bıraktım kendimi; o kadar birikmişti ki her zonklamada hafifliyorum… ahhhh 😌💦'
    ]
  },
  dry: {
    label: '🤗 Sarılma · Kıyafetli sürtme', events: ['Dry Missionary', 'Dry Doggy', 'Pumpkin Grind', 'Masquerade'],
    lines: [
      'Kıyafetlerimiz üstümüzde, sana sımsıkı sarılıp sürtünüyorum; kumaşın altından bile yumuşacıksın… ahhh 😩',
      'Kollarım seni sarıyor, {gogus} göğüslerin bluzunun altından göğsüme bastırıyor offf 🔥',
      'Ellerim {kalca} kalçanda, kumaşın üstünden kendime çekiyorum; {kalcaHis}… ahh {o} 🥵',
      'Sarılı halde sürtünmek, tenine dokunamamak beni daha da azdırıyor offf 😮‍💨',
      'Kumaşın sıcaklığı ve senin yumuşaklığın… doruktayım, hâlâ giyiniğiz ahhh 💦',
      'Boynuna gömülüp sarılıyorum, kalçam kalçanda yavaşça dönüyor offf 😩',
      'Bedenin kollarımda eriyor, kıyafetlerin arasından bile her kıvrımını hissediyorum… ahh 🔥',
      'Kulağına fısıldayarak sarılıyorum, sen kalçanı bana bastırıyorsun offf 🥵',
      'Kumaşlar kayıyor, sımsıkı sarılı sürtünmeye devam… ahhh {o} 😮‍💨',
      'Pantolonumun içinde patlamamak için kasılıyorum; dibimde biriken dölü sıka sıka tutuyorum… offf 😣',
      'Bir an durup sadece sarılıyorum, kalbin göğsümde atıyor… mmm 💗',
      'Dayanamadım, sarılıyken bıraktım kendimi; kıyafetlerin içinde bütün birikim boşaldı, rahatladım… ahhhh 😌💦'
    ]
  },
  warm: {
    label: '🤗 Sarılma · Isınma', events: ['Front Hugging', 'Back Hugging', 'Lap Kissing', 'Kissing'],
    lines: [
      'Seni kollarıma alıp sımsıkı sarıldım; yumuşacık bedenin bana kalıp gibi oturuyor… mmm 💗',
      'Göğsüne yaslandım, {gogus} göğüslerinin yumuşaklığı içimi ısıtıyor 🥰',
      'Belinden sarıp kendime çektim, saçlarının kokusu başımı döndürüyor… mmm {o} 😌',
      'Arkandan sarılıp çenemi omzuna koydum, tenin pamuk gibi 💗',
      'Ellerim sırtında, sen de bana sokuluyorsun; bırakmak istemiyorum… mmm 🤗',
      'Seni öyle sardım ki kalp atışlarımız birbirine karıştı 💓',
      'Kucaklarken ellerim {kalca} kalçana kayıyor, yumuşacık… offf 😏',
      'Sarılırken dudaklarını buldum, öpüşmemiz hiç bitmesin… mmm 💋',
      'Yanağın yanağımda, nefesin boynumda; dünyada başka bir şey yok 😌',
      'Sana sarıldıkça içimde bir şey kıpırdıyor, hissediyor musun? 😈',
      'Bedenin kollarımda eriyor, bu yumuşaklığa doyamıyorum… mmm 🥵',
      'Sımsıkı sarılı kalalım biraz daha, acele yok 💗'
    ]
  },
  comfort: {
    label: '🤗 Sarılma · Terapi (hasta)', events: ['Comfort Hug', 'Cuddle Therapy', 'Lap Pillow', 'Head Pat'],
    lines: [
      'Doktor… bana böyle sarılınca içimdeki düğüm çözülüyor 🥺',
      'Kollarınızın yumuşaklığı… uzun zamandır kimse beni böyle tutmamıştı 😔',
      'Başımı göğsünüze koyabilir miyim? Kalbinizi duymak istiyorum 💗',
      'Sarılmanız bütün kaygımı alıyor, nefesim düzeliyor… mmm 😌',
      'Biraz daha kalalım mı doktor? Bırakmayın lütfen 🥺',
      'Bedeniniz o kadar sıcak ve yumuşak ki uyuyakalacağım 😴',
      'Sırtımı okşamanız annemin sarılmasını hatırlattı… 😢',
      'Utanıyorum ama sarılmanızı her gün isterim 🙈',
      'Kollarınızdayken hiçbir şey canımı acıtmıyor 💗',
      'Elinizi tutarak sarılsam olur mu? 😳',
      'Bu terapiden sonra kendimi yeniden doğmuş gibi hissediyorum 😌',
      'Teşekkür ederim doktor… bu sarılmaya gerçekten ihtiyacım vardı 🥺'
    ]
  }
});
// boşalırken sarılma: yeni pozisyonlarda da
['Full Nelson', 'Ghost Ride'].forEach(t => Stories.ME_HUG_LINES.cumBack.pos.push(t));
['Ondesk', 'Coffin Lid', 'Sacrifice', 'Shapeshift', 'Tombstone', 'Shoulder Mark'].forEach(t => Stories.ME_HUG_LINES.cumFront.pos.push(t));

/* ➕ Mevcut sarılma gruplarına ek mesajlar */
Object.entries({
  doggy: { lines: [
    'Arkandan bütün ağırlığımla sarıldım, yumuşacık sırtın göğsümün altında eriyor; {kalcaHis}… ahhh 😩',
    'Kollarımı göğüslerinin altından geçirip seni dik kaldırdım, sırtın göğsümde; {gogusHis} offf 🔥',
    'Sarılı halde yavaşlıyorum, sadece {kalca} kalçanın yumuşaklığını hissetmek için… ahh {o} 🥵',
    'Yanağım yanağında, kollarım seni sarıyor; zevk o kadar yüksek ki nefesim kesildi offf 😮‍💨',
    'Göğüslerini avuçlayıp seni kendime bastırıyorum, kalçan kasıklarıma yapışmış; doruktayım… ahhh 💦',
    'Zevke rağmen sarılı halde duruyorum; kalçamı kasıp yükselen dölü sıka sıka geri tutuyorum… offf 😣',
    'Saçlarını yana çekip boynunu öpüyorum, yumuşak bedenin kollarımda titriyor… ahh 🔥',
    'Her santimin bana değiyor: sırtın, kalçan, {gogus} göğüslerin; bu yumuşaklığa doyamıyorum offf 🥵'
  ] },
  missionary: { lines: [
    'Seni kollarımla sarıp yuvarlandım, sımsıkı sarılı kalıyoruz; yumuşacık bedenin altımda eriyor… ahhh 😩',
    'Kollarımı başının altına koydum, yüzümüz yüz yüze; {gogusHis} offf 🔥',
    'Bütün ağırlığımı vermeden sarılıyorum, sadece tenimizin yumuşaklığı; zevk tavan yaptı… ahh {o} 🥵',
    'Ellerin sırtımda, tırnakların tenimde; ben de seni daha sıkı sarıyorum offf 😮‍💨',
    'Göğüs göğüse sarılı halde durdum; bütün bedenimi kasıp penisime dayanan dölü sıka sıka geri itiyorum… offf 😣',
    'Yumuşak karnın karnıma, {gogus} göğüslerin göğsüme yapışık; her nefeste daha çok eriyorum… ahhh 💦',
    'Bacaklarını belime doladın, kollarım sırtında; ikimiz tek beden gibi sallanıyoruz offf 😩',
    'Boynuna gömülüp kokunu içime çekiyorum, {kalca} kalçan avuçlarımda; doruktayım… ahh 🔥'
  ] },
  hotdog: { lines: [
    'Yumuşacık kalçanın arasında yavaşladım, sadece sarılıp o sıcaklığı hissediyorum… ahhh 😩',
    'Kollarım göğüslerinin altında kilitli, {gogusHis}; kalçanın arasında kayıyorum offf 🔥',
    'Belini sarıp kalçanı kendime bastırdım; {kalcaHis}, zevkin doruğundayım… ahh {o} 🥵',
    'Yanağım saçlarında, bedenin kollarımda eriyor; bu yumuşaklık bambaşka offf 😮‍💨',
    'Kalçalarının arasında durdum, kasılıp dölü sıka sıka geri tutuyorum; daha değil… offf 😣',
    'Seni arkadan kucakladıkça {kalca} kalçan beni daha da sıkı sarıyor… ahhh 💦',
    'Ensene öpücükler bırakarak yavaşça kayıyorum, kollarım seni bırakmıyor offf 😩',
    'Sırtının yumuşaklığı göğsümde, kalçanın sıcaklığı kasıklarımda… ahh 🔥'
  ] },
  cumBack: {
    lines: [
      'Arkandan sımsıkı sarılı halde patladım; o kadar uzun tuttum ki içine akarken bütün kaslarım çözülüyor… ahhhh 😩💦',
      'Yumuşacık bedenine kapanıp bırakıyorum, biriken her şey dalga dalga içine boşalıyor offf 😌',
      'Kollarımda titriyorsun, ben her zonklamada biraz daha hafifliyorum; uzun bekleyişin ödülü… ahhh {o} 🔥',
      '{gogus} memelerini sıkarak son kez bastırdım; içimdeki baskı akıp gidiyor, nefesim düzeliyor offf 💦',
      'Kalçana yapışık, sarılı halde dolduruyorum; bu kadar rahatlamayı hiç hatırlamıyorum… ahh 😮‍💨',
      'Ensende derin bir nefes; tuttuğum her şey içinde, bedenim tüy gibi hafif… mmm 😌',
      'Boşalmam bitmek bilmiyor, sarılmayı bırakmıyorum; her damlada biraz daha gevşiyorum… ahhh 💦',
      'Sonunda bıraktım kendimi; arkandan sarılı kalıp yumuşak sırtına yanağımı koyuyorum… mmm 💗'
    ],
    rub: [
      'Arkandan sımsıkı sarılı halde patladım; o kadar uzun tuttum ki kondom bir anda doluyor… ahhhh 😩💦',
      'Yumuşacık bedenine kapanıp bırakıyorum, biriken her şey lastiğe akıyor offf 😌',
      'Kollarımda titriyorsun, ben her zonklamada hafifliyorum; kondom şişiyor… ahhh {o} 🔥',
      '{gogus} memelerini sıkarak son kez bastırdım; içimdeki baskı lastiğe akıp gidiyor offf 💦',
      'Kalçana yapışık, sarılı halde kondomu dolduruyorum; ne büyük rahatlama… ahh 😮‍💨',
      'Ensende derin bir nefes; tuttuğum her şey lastikte, bedenim tüy gibi hafif… mmm 😌',
      'Boşalmam bitmiyor, kondom ağırlaşıyor; sarılmayı bırakmıyorum… ahhh 💦',
      'Sonunda bıraktım kendimi; sarılı kalıp kondomu yavaşça çıkarıyorum, ne kadar birikmiş… mmm 💗'
    ]
  },
  cumFront: {
    lines: [
      'Seni kollarımda sımsıkı tutarken patladım; dakikalardır tuttuğum her şey içine akıyor, bütün bedenim gevşiyor… ahhhh 😩💦',
      'Yumuşacık göğüslerine gömülüp bırakıyorum, her zonklamada bir yük daha kalkıyor offf 😌',
      'Gözlerine bakarak boşalıyorum, o kadar birikmiş ki durmuyor; rahatlama dalga dalga… ahhh {o} 🔥',
      'Kollarım sırtında kilitli, içinde zonklarken nefesim yavaş yavaş düzeliyor offf 💦',
      '{kalca} kalçanı kendime çekip en derinde bırakıyorum; uzun tutmanın taşkını bu… ahh 😮‍💨',
      'Alnım alnında, sımsıkı sarılı; içimdeki bütün gerginlik sana akıp gitti… mmm 😌',
      'Boşaldıkça bacaklarımın kasılması çözülüyor, seni daha da sıkı sarıyorum… ahhh 💦',
      'Bitirdim, yumuşak bedenine gömülüp kalbimin yavaşlamasını dinliyorum… mmm 💗'
    ],
    rub: [
      'Seni kollarımda sımsıkı tutarken patladım; tuttuğum her şey kondoma akıyor, bedenim gevşiyor… ahhhh 😩💦',
      'Yumuşacık göğüslerine gömülüp bırakıyorum, kondom her zonklamada doluyor offf 😌',
      'Gözlerine bakarak boşalıyorum, o kadar birikmiş ki lastik şişiyor… ahhh {o} 🔥',
      'Kollarım sırtında kilitli, kondomda zonklarken nefesim düzeliyor offf 💦',
      '{kalca} kalçanı kendime çekip derinde bırakıyorum; hepsi lastikte, güvendeyiz… ahh 😮‍💨',
      'Alnım alnında, sımsıkı sarılı; içimdeki gerginlik akıp gitti… mmm 😌',
      'Boşaldıkça kasılmam çözülüyor, seni daha sıkı sarıyorum… ahhh 💦',
      'Bitirdim; sarılı kalıp kondomu dikkatlice çıkarıyorum, ağzına kadar dolu… mmm 💗'
    ]
  },
  cumOut: { lines: [
    'Son saniyede çıkıp sana daha sıkı sarıldım; uzun birikmenin hepsi kalçana fışkırıyor, gevşiyorum… ahhhh 😩💦',
    'Yumuşak kalçana yapışık boşalıyorum, her fışkırışta içimdeki baskı azalıyor offf 😌',
    'Kollarım belinde, {kalca} kalçan bembeyaz oluyor; bu rahatlama tarifsiz… ahhh {o} 🔥',
    'Göğüslerini sıkarak bırakıyorum kendimi; dakikalardır tuttuğum döl dalga dalga çıkıyor offf 💦',
    'Bacaklarım titriyor ama sarılmayı bırakmıyorum, son damla da çıktı… ahh 😮‍💨',
    'Kalçanın arasına süzülüyor, ben sırtına yanağımı koyup nefes alıyorum… mmm 😌',
    'O kadar çoktu ki beline kadar yayıldı; birikmişliğin hepsi gitti offf 💦',
    'Bitirince arkandan sarılı kalıp yumuşacık tenini okşuyorum… mmm 💗'
  ] },
  cumHold: { lines: [
    'Seni kollarımda sıkıyorum ki ben de kendimi sıkabileyim; dibimde biriken dölü kasılarak geri itiyorum… offf 😣',
    'Yumuşacık tenin her yerime değiyor, bu zevke dayanmak imkânsız; ama kasıklarımı kasıp tutuyorum ahh 😩',
    'Taşaklarım kasılıp gevşiyor, her seferinde biraz daha doluyor; sarılı halde nefesimi tutuyorum… offf {o} 🥵',
    'Penisimin içinde yükselen sıcaklığı hissediyorum, kalçamı sıkıp geri gönderiyorum ahh 😮‍💨',
    '{gogus} göğüslerin göğsüme bastırınca az kalsın bırakıyordum; dişlerimi sıkıp tuttum… offf 😣',
    'Kıpırdama, sadece sarıl; kenardan geri dönmeye çalışıyorum… ahh 😳',
    'Her kas lifim gergin, alnımda ter; ama yumuşacık bedenine sarılmayı bırakmıyorum offf 🔥',
    'Biriktikçe zonklama sertleşiyor; bıraktığımda sel olacak, biliyorum… ahh 💗'
  ] }
}).forEach(([k, v]) => { const h = Stories.ME_HUG_LINES[k]; if (h) Object.keys(v).forEach(f => { h[f] = (h[f] || []).concat(v[f]); }); });

/* 🔤 Yer tutucu ekleri (her biri en az 10; yumuşaklık ve zevk) */
Object.entries({
  gogus: {
    small: ['yumuşacık minik', 'pamuk gibi küçük', 'avucumda eriyen minik', 'tatlı, küçücük', 'ipek tenli minik', 'dokundukça titreyen küçük'],
    mid: ['pamuk gibi dolgun', 'avucumda eriyen', 'sıcacık dolgun', 'kadife gibi yumuşak', 'tam avucuma göre yumuşacık', 'dokundukça kabaran dolgun'],
    big: ['pamuk gibi kocaman', 'avuçlarımdan taşan yumuşacık', 'yastık gibi iri', 'sıcacık, ağır', 'parmaklarımın gömüldüğü kocaman', 'her hareketinde dalgalanan dev']
  },
  kalca: {
    small: ['yumuşacık minik', 'pamuk gibi küçük', 'sıkı ama yumuşak', 'avucumda eriyen minik', 'tatlı, küçücük', 'kadife tenli minik'],
    mid: ['pamuk gibi yuvarlak', 'avucumda eriyen dolgun', 'kadife gibi yumuşak', 'sıcacık yuvarlak', 'dokundukça titreyen dolgun', 'parmaklarımın gömüldüğü yuvarlak'],
    big: ['pamuk gibi kocaman', 'yastık gibi yumuşacık', 'parmaklarımın gömüldüğü iri', 'her çarpışta dalgalanan koca', 'sıcacık, ağır', 'jöle gibi titreyen kocaman']
  },
  gogusHis: {
    small: [
      'minik göğüslerin avuçlarımda pamuk gibi eriyor',
      'küçücük göğüslerinin yumuşaklığı parmak uçlarımı karıncalandırıyor',
      'her dokunuşumda minik uçların sertleşip inliyorsun',
      'avucumun içinde sımsıcak ve yumuşacık duruyorlar, zevkten başım dönüyor',
      'küçük göğüslerini sıktıkça tenin ipek gibi kayıyor parmaklarımda',
      'minik göğüslerinin sıcaklığı avuçlarımdan bütün bedenime yayılıyor',
      'yumuşacık küçük göğüslerin her nefesinde avucumda kıpırdıyor'
    ],
    mid: [
      'dolgun göğüslerin avuçlarımda pamuk gibi eziliyor',
      'yumuşaklıkları parmaklarımın arasından tatlı tatlı taşıyor',
      'sıktıkça avuçlarımda eriyip yeniden kabarıyorlar',
      'kadife gibi yumuşak göğüslerin zevkten aklımı alıyor',
      'her vuruşta avuçlarımda yumuşacık sallanıp göğsüme değiyorlar',
      'sıcacık göğüslerinin yumuşaklığına parmaklarım gömülüyor',
      'avuçlarımı öyle güzel dolduruyorlar ki bırakmak istemiyorum'
    ],
    big: [
      'kocaman göğüslerin avuçlarımda yastık gibi eziliyor',
      'parmaklarım yumuşacık etine gömülüyor, taşıyorlar',
      'ağırlıkları ve yumuşaklıkları zevkten nefesimi kesiyor',
      'her vuruşta pamuk gibi dalgalanıp kollarıma çarpıyorlar',
      'iri göğüslerin sıcacık, yumuşacık; yüzümü aralarına gömmek istiyorum',
      'sıktıkça avuçlarımdan taşan yumuşaklık beni bitiriyor',
      'kocaman göğüslerinin yumuşaklığı bütün göğsüme yayılıyor'
    ]
  },
  kalcaHis: {
    small: [
      'minik kalçan kasıklarıma yumuşacık oturuyor, her çarpış zevk dalgası',
      'küçük kalçanın sıcaklığı karnıma yayılıyor',
      'sıkı ama yumuşacık kalçan her vuruşta tenime eriyor',
      'avuçlarıma sığan kalçan her çarpışta titreyerek bana yapışıyor',
      'minik kalçanın pürüzsüz yumuşaklığı aklımı alıyor',
      'küçük kalçan karnıma değdikçe zevkten inliyorum',
      'yumuşacık minik kalçanı her vuruşta daha çok hissediyorum'
    ],
    mid: [
      'yuvarlak kalçan kasıklarıma yumuşacık çarpıp eriyor',
      'dolgun kalçanın pamuk gibi yumuşaklığı her vuruşta karnımı sarıyor',
      'kalçanın sıcaklığı ve yumuşaklığı zevkten gözlerimi kapattırıyor',
      'her çarpışta yuvarlak kalçan tatlı tatlı dalgalanıyor',
      'kadife gibi kalçan kasıklarıma yapışıp bırakmıyor',
      'yumuşacık kalçana gömüldükçe zevk tepeme çıkıyor',
      'dolgun kalçanın her kıvrımını karnımda hissediyorum'
    ],
    big: [
      'kocaman kalçan kasıklarımı yastık gibi yumuşacık karşılıyor',
      'iri kalçanın dalgası her vuruşta karnımdan bütün bedenime yayılıyor',
      'pamuk gibi koca kalçana gömüldükçe zevkten titriyorum',
      'yumuşacık etin karnıma çarpıp eriyor, sonra geri sekiyor',
      'kalçanın ağırlığı ve yumuşaklığı beni deli ediyor',
      'her çarpışta koca kalçan jöle gibi dalgalanıp tenime yapışıyor',
      'sıcacık iri kalçanın yumuşaklığına bütün bedenimle gömülüyorum'
    ]
  }
}).forEach(([k, v]) => { const w = Stories.ME_BODY_WORDS[k]; if (w) Object.keys(v).forEach(s => { w[s] = (w[s] || []).concat(v[s]); }); });

/* 🛏️ Yatakta: üstünden sarılıp onu yatağa bastırma · bed / bedRub alanları; ME_BED_SKIP'teki olaylarda (ayakta, masada, sedyede) yazılmaz */
Stories.ME_BED_SKIP = ['Standing Missionary', 'Standing doggy', 'Standing', 'Standing Anal', 'Ondesk', 'Intimate Doggy', 'Intimate Therapy', 'Tombstone', 'Shoulder Mark', 'Blood Bath', 'Milk Bath', 'Red Bath Creampie', 'Coffin Missionary', 'Shower Lift', 'Shower Doggy', 'Shower Anal', 'Shower Creampie', 'Shower Cumshot', 'Sweaty Titjob', 'Bench Hotdogging', 'Sauna Cumshot', 'Cold Plunge', 'Snow Roll', 'Husband In Room'];
Object.entries({
  missionary: { bed: [
    'Bütün ağırlığımla üstüne kapandım, sımsıkı sarılıp seni yatağa gömüyorum; yumuşacık bedenin şiltenin içine batıyor… ahhh 😩',
    'Kollarımı sırtının altından geçirip seni kendime, kalçamı da seni yatağa bastırıyorum; {gogus} göğüslerin aramızda eziliyor offf 🔥',
    'Bileklerini başının üstünde yatağa bastırdım, göğsüm göğsünde; kıpırdayamıyorsun, sadece hissediyorsun… ahh {o} 🥵',
    'Seni yatakla aramda sıkıştırdım, her vuruşta şilte biraz daha çöküyor; {kalcaHis} offf 😮‍💨',
    'Üstünde tamamen yayıldım, tenimiz yapışık; seni yumuşacık yatağa bastırıp derine iniyorum… ahhh 💦',
    'Bacaklarını göğsüne katlayıp üstüne kapandım, sarılı halde seni yatağa çiviliyorum; doruktayım offf 😩',
    'Ağırlığımı verdikçe yumuşak bedenin altımda eriyor, yatak bizi yutuyor… ahh 🔥',
    'Seni yatağa bastırmışken durdum; bütün bedenimi kasıp yükselen dölü sıka sıka geri tutuyorum… offf 😣'
  ] },
  doggy: { bed: [
    'Seni yüzüstü yatağa yatırıp üstüne kapandım; arkandan sımsıkı sarılı, bütün ağırlığımla bastırıyorum… ahhh 😩',
    'Göğsüm sırtında, seni şilteye gömüyorum; {kalca} kalçan kasıklarımın altında yumuşacık eziliyor offf 🔥',
    'Kollarımı altından geçirip {gogus} göğüslerini avuçladım, üstünden yatağa bastırarak vuruyorum; {gogusHis}… ahh {o} 🥵',
    'Yüzün yastığa gömülü, ben ensende; seni yatakla aramda sıkıştırıp derine iniyorum offf 😮‍💨',
    'Dümdüz yatıyorsun, ben üstünde yayılmış sarılıyorum; {kalcaHis} ahhh 💦',
    'Ellerimi ellerinin üstüne koyup yatağa bastırdım, parmaklarımız kenetli; kıpırdayamıyorsun… offf 😩',
    'Bütün ağırlığım yumuşak sırtında, seni şiltenin içine itiyorum; zevkten başım dönüyor… ahh 🔥',
    'Seni yatağa bastırmışken kalçamı kasıp duruyorum; taşaklarımdan gelen dölü sıka sıka geri tutuyorum… offf 😣'
  ] },
  spoon: { bed: [
    'Yan yatarken seni yüzüstü çevirip üstüne kapandım, sarılı halde yatağa bastırıyorum… ahhh 😩',
    'Arkandan sarılıp bütün ağırlığımı verdim, yumuşacık bedenin şilteye gömülüyor offf 🔥',
    'Kolumu altından geçirip {gogus} göğsünü avuçladım, diğer elimle kalçanı yatağa bastırıyorum… ahh {o} 🥵',
    'Seni yatakla göğsüm arasında sıkıştırdım, nefesin yastıkta; {kalcaHis} offf 😮‍💨',
    'Üstüne yayılıp sarıldım, yavaş ve derin; yatak bizi yutuyor… ahhh 💦',
    'Seni yatağa bastırmışken kasılıp duruyorum, dölü sıka sıka geri tutuyorum… offf 😣'
  ] },
  backTheme: { bed: [
    'Seni yüzüstü yatağa bastırıp üstüne kapandım; kollarım seni sarıyor, kaçacak yerin yok… ahhh 😩',
    'Bütün ağırlığımla sırtına yayıldım, {kalca} kalçan altımda yumuşacık eziliyor offf 🔥',
    'Bileklerini yatağa bastırdım, ensene gömüldüm; seni şilteye çiviliyorum… ahh {o} 🥵',
    'Yatakla aramda sıkışmış yumuşak bedenin her vuruşta titriyor; {kalcaHis} offf 😮‍💨',
    'Üstünden sımsıkı sarılı vuruyorum, yatak gıcırdıyor, sen inliyorsun… ahhh 💦',
    'Seni yatağa bastırmışken bile kasılıp tutuyorum; dibimde biriken dölü sıka sıka geri itiyorum… offf 😣'
  ] },
  frontTheme: { bed: [
    'Seni sırtüstü yatağa bastırıp üstüne kapandım, kollarım seni sarıyor; şilteye gömülüyorsun… ahhh 😩',
    'Bütün ağırlığımla üstündeyim, {gogus} göğüslerin göğsümün altında yumuşacık eziliyor offf 🔥',
    'Bileklerini başının üstünde yatağa bastırdım, alnım alnında; kıpırdayamıyorsun… ahh {o} 🥵',
    'Seni yatakla aramda sıkıştırıp derine iniyorum, bedenin altımda eriyor offf 😮‍💨',
    'Sarılı halde bastırdıkça yatak çöküyor, sen bana daha çok yapışıyorsun… ahhh 💦',
    'Üstünde bastırmışken kasılıp duruyorum; penisime yükselen dölü sıka sıka geri tutuyorum… offf 😣'
  ] },
  cumFront: {
    bed: [
      'Seni yatağa bastırıp üstüne kapandım ve bıraktım kendimi; bütün ağırlığım üstünde, içine boşaldıkça rahatlıyorum… ahhhh 😩💦',
      'Yumuşacık bedenini şilteye gömüp en derinde boşaltıyorum; uzun tutmanın bütün yükü akıp gidiyor offf 😌',
      'Bileklerini yatağa bastırmışken patladım, her zonklamada seni biraz daha şilteye itiyorum… ahhh {o} 🔥',
      'Üstünde yayılmış, sarılı halde dolduruyorum; boşaldıkça kaslarım çözülüyor, üstüne yığılıyorum… mmm 💦'
    ],
    bedRub: [
      'Seni yatağa bastırıp üstüne kapandım ve bıraktım kendimi; bütün ağırlığım üstünde, kondom doluyor… ahhhh 😩💦',
      'Yumuşacık bedenini şilteye gömüp derinde boşaltıyorum; birikenin hepsi lastikte offf 😌',
      'Bileklerini yatağa bastırmışken patladım, kondom her zonklamada şişiyor… ahhh {o} 🔥',
      'Üstünde yayılmış, sarılı halde bitirdim; kaslarım çözülüyor, üstüne yığılıyorum… mmm 💦'
    ]
  },
  cumBack: {
    bed: [
      'Seni yüzüstü yatağa bastırıp üstüne kapandım ve bıraktım kendimi; içine boşaldıkça bütün yük kalkıyor… ahhhh 😩💦',
      'Bütün ağırlığımla sırtına yayılmışken dolduruyorum, {kalca} kalçan kasıklarımın altında eziliyor offf 😌',
      'Ellerin yatağa bastırılı, ensende inleyerek boşalıyorum; o kadar birikmişti ki durmuyor… ahhh {o} 🔥',
      'Boşaldıktan sonra üstünde kaldım, yumuşak sırtına yığılıp nefesimi topluyorum… mmm 💦'
    ],
    bedRub: [
      'Seni yüzüstü yatağa bastırıp üstüne kapandım ve bıraktım kendimi; kondom bir anda doluyor… ahhhh 😩💦',
      'Bütün ağırlığımla sırtına yayılmışken bitiriyorum, {kalca} kalçan altımda eziliyor; hepsi lastikte offf 😌',
      'Ellerin yatağa bastırılı, ensende inleyerek boşalıyorum; kondom şişiyor… ahhh {o} 🔥',
      'Bitirdikten sonra üstünde kaldım, yumuşak sırtına yığılıp nefesimi topluyorum… mmm 💦'
    ]
  }
}).forEach(([k, v]) => { const h = Stories.ME_HUG_LINES[k]; if (h) Object.keys(v).forEach(f => { h[f] = (h[f] || []).concat(v[f]); }); });

/* ➕ Eksik olaylar: onun orgazmı, Halloween boşalması / kıvamı ve içkisi */
(EXTRA => Object.keys(EXTRA).forEach(k => { Stories.ME_EV_LINES[k] = (Stories.ME_EV_LINES[k] || []).concat(EXTRA[k]); }))({
  'Orgazm': [
    'Titremeni hissediyorum… durma, gel benim için {o} 😩',
    'Bacakların omuzlarımı sıkıyor, geliyorsun değil mi? Bırak kendini 💗',
    'İçin beni sımsıkı kavradı offf… hissediyorum, geliyorsun 🥵',
    'Yüzüne bakıyorum, gözlerini kapattın… işte bu, gel 😈',
    'Sesin titriyor {o}, durmuyorum, sonuna kadar götürüyorum seni 🔥',
    'Kalçan kendiliğinden kalkıyor… tut beni, gel aşkım 💞',
    'Nefesin kesildi, sırtın kavislendi… ne güzel geliyorsun 😮‍💨',
    'İnlemen odayı doldurdu, seni böyle görmeye bayılıyorum 😏',
    'Tırnakların sırtımda… bırak, ben buradayım, gel 🤍',
    'Bütün bedenin dalga dalga sarsılıyor, sarılıyorum sana, geç bırakmıyorum 💗',
    'Islaklığın her yere yayıldı… sen gelirken ben de deliriyorum ahhh 💦',
    'Adımı söyledin geldiğin an… bir daha söyle {o} 😩'
  ],
  "Siren's Swallow": [
    'Dudakların sımsıkı, hepsini ağzına bırakıyorum… ahhh {o} 😩💦',
    'Yutuşunu izliyorum, sonra o şarkıyı mırıldanmaya başladın 🧜‍♀️',
    'Sesin bile tuzlu deniz gibi… her damlayı yuttun offf 🌊',
    'Gözlerin dalga gibi parlıyor, bir yudum daha alıyorsun 😈',
    'Şarkın kulaklarımda, bacaklarım titriyor… ahhh 💦',
    'Denizci olsam gemiyi kayalara sürerdim senin için 😮‍💨',
    'Son damlayı da dilinle aldın, sonra gülümsedin 🧜‍♀️',
    'Boğazından inen her yudumu hissediyorum… offf {o} 🥵',
    'Mırıltın tenimde titreşiyor, hâlâ zonkluyorum 😩',
    'Sirenler böyle mi yutar? Bir daha olsa bir daha veririm 🌊💦'
  ],
  "Witch's Brew": [
    'Koyu ve yoğun geldi… iksirin için tam kıvam {o} 🧪',
    'Bak ne kadar ağır akıyor, kazan bunu sever 🧙‍♀️',
    'Bu kıvamda biriktirmek uzun sürdü, hepsi senin 😈',
    'Yoğun bir damla bile yerinden kıpırdamıyor offf 🥵',
    'Büyü tutacak bu sefer, malzeme fazlasıyla güçlü 🔮',
    'Koyu koyu tenine yapıştı… ahhh 😩',
    'İksire bir kaşık yeter, gerisi sana kalsın 😏',
    'Bu kadar yoğun olmamıştı hiç, sen ne büyü yaptın bana? 🧪',
    'Kazanın kenarından ağır ağır süzülüyor 🫕',
    'Çırağın görevini yaptı hocam… tam istediğin kıvamda 🧙‍♀️💦'
  ],
  "Witch's Punch": [
    'Kazandan dumanı tüten mor ponç… şerefe {o} 🧪',
    'Mor bir yudum, sonra seninle bir öpücük 😏🟣',
    'Tadı böğürtlen ve büyü gibi, başım hafifçe dönüyor 😵‍💫',
    'Bir bardak daha doldur, bu gece kimse uyumuyor 🎃',
    'Dudağında mor iz kaldı, yalayıp alıyorum 💋',
    'Bu ponçun içinde ne var? Sana daha çok yakınlaşmak istiyorum 😈',
    'Duman yüzüne vuruyor, gözlerin mor parlıyor 🔮',
    'Kadehleri tokuşturalım, sonra kazanın başına dönelim 🧙‍♀️',
    'Sıcacık indi boğazımdan, şimdi sıra sende 🥂',
    'İkinci bardaktan sonra cadı sen misin ben mi, karıştı 😆'
  ]
});

/* 🎭 Rol katmanı: süren rol (🦄 Fantesy, fantKey) bu listedeyse pozisyon / boşalma mesajın o rolün ağzından gelir
 * (🎭 Role-play açıkken %70, değilse %45; sarılma mesajı seçildiyse yok). pos: pozisyonlar · cum: 💦 Cumming */
Stories.ME_RP_LINES = {
  fxrpklinik: {
    pos: [
      'Doktor hanım… bu da tedavinin parçası mı? 😳',
      'Muayene masası soğuk ama siz çok sıcaksınız… ahh 😩',
      'Nabzım yükseldi galiba, ölçmek ister misiniz? 🩺',
      'Bunu dosyama yazmayacaksınız değil mi? 🙈',
      'Kapı kilitli mi? Hemşire girerse… offf, durmayın ama 😳',
      'Şikayetim geçiyor sanki… bir doz daha lütfen 😮‍💨',
      'Önlüğünüz açıldı doktor hanım, gözümü alamıyorum 🥼',
      'Böyle tedavi görsem her gün hasta olurum 😏',
      'Utanıyorum ama… çok iyi geliyor, ahhh 💗',
      'Reçeteye ne yazacaksınız? "Her akşam tekrar" mı? 😆',
      'Stetoskopu bırakın, kalbimi zaten duyuyorsunuzdur 🩺💓',
      'Gözlerimi kapattım, sadece söylediklerinizi yapıyorum… 😌'
    ],
    cum: [
      'Doktor hanım… sanırım tedavi tamamlandı, ahhhh 😩💦',
      'Özür dilerim, tutamadım… numune gibi oldu 😳',
      'Bütün gerginliğim aktı gitti, siz harikasınız 🩺',
      'Bunu kontrole yazın: hasta tamamen rahatladı 😮‍💨',
      'Nefesim düzene girsin, sonra kontrol randevusu alalım mı? 😏',
      'Ahh… hiçbir ilaç bu kadar iyi gelmemişti 💗',
      'Önlüğünüze bulaştı galiba… özür dilerim 🙈',
      'Utancımdan yüzüm kızardı ama pişman değilim 😳💦',
      'Muayene masası titriyor mu yoksa ben mi? 😵‍💫',
      'Doktor hanım, iyileştim sanırım… ama yarın yine gelirim 😈'
    ]
  },
  fxrpvampir: {
    pos: [
      'Boynum sende, ama önce ben seni alıyorum 🩸',
      'Şatonun duvarları bile inlemeni duyuyor kontesim 🏰',
      'Dişlerini hissetmeden önce beni hisset… offf 😈',
      'Ölümsüz olabilirsin ama bu gece benimsin 🧛‍♀️',
      'Soğuk tenin altımda ısınıyor, hissediyorum 🥵',
      'Mum ışığında gözlerin kıpkırmızı, durmuyorum 🕯️',
      'Bir yudum al istersen, ben de seni sonuna kadar alacağım 🩸',
      'Misafirliğim uzun sürecek kontes, şafağa kadar 🌙',
      'Kalbim deli gibi atıyor, kanımı tatlandırıyor mu? 😏',
      'Pelerinini sırtımda hissediyorum, sarılıyorsun bana… ahhh 🖤'
    ],
    cum: [
      'Kanımı alamadın ama başka bir şeyimi aldın kontesim… ahhh 🩸💦',
      'Şafak sökmeden doldurdum seni 🌙',
      'Ölümlü misafirin her şeyini sana verdi 🧛‍♀️',
      'Dişlerin boynumda, ben içinde… patlıyorum offf 😩',
      'Bu gece ölümsüzlüğe en çok yaklaştığım an buydu 🖤',
      'Sıcağım soğuk tenine yayılıyor, hissediyor musun? 🥵',
      'Kırmızı dudaklarına bak… hepsini aldın 💋',
      'Mumlar söndü, ben de söndüm… ahhh 🕯️',
      'Şatonda kalmak istiyorum, her gece böyle 🏰',
      'Kanım değil, sütüm sana kaldı kontes 😈💦'
    ]
  },
  fxrpcadi: {
    pos: [
      'Hocam, büyü böyle mi yapılıyordu? 🧙‍♀️',
      'Kazan kaynıyor, ben de kaynıyorum offf 🫕',
      'Bu iksirin tarifi sende mi bende mi? 😏',
      'Süpürgen köşede kaldı, bu gece başka şeye biniyorsun 😈',
      'Bir büyü daha söyle kulağıma… ahhh 🔮',
      'Çırağın çok hızlı öğreniyor, değil mi? 🧪',
      'Mum ışığında şapkan düştü, umurumda değil 🕯️',
      'Lanetlendim galiba, senden kopamıyorum 😩',
      'Kristal küre bunu gördü mü? Göstermeyelim kimseye 🙈',
      'Ders bitmedi hocam, devam ediyorum 🥵'
    ],
    cum: [
      'İksirin son malzemesi bu muydu hocam? Ahhh 🧪💦',
      'Kazan taştı, ben de taştım 🫕',
      'Büyü tamam… ben bittim 😩',
      'Çırağın görevini yaptı, hepsi senin 🧙‍♀️',
      'Ay ışığında patladım, büyü tuttu mu? 🌙',
      'Şimdi beni kurbağaya çevirme lütfen 😆',
      'Bir damlası bile israf olmadı, iksire ya da sana 😈',
      'Kazanın dumanı gibi uçuyorum… ahhh 😮‍💨',
      'Lanetin bu muydu? Her gece olsun 🔮',
      'Sihirli değneğin ben miyim artık? 😏💦'
    ]
  },
  fxrpofis: {
    pos: [
      'Toplantı bekleyebilir, sen buraya gel 💼',
      'Etek kalemin kırışacak, umurumda değil 😈',
      'Kapıyı kilitledin mi? Telefon çalarsa açma… offf 😩',
      'Masadaki dosyaları yere itiyorum, yer aç bana 📂',
      'Bunu performans değerlendirmene yazıyorum, çok iyisin 😏',
      'Jartiyerin göründü, mesai bitti sayılır 🥵',
      'Asansörde gördüğümden beri bunu bekliyordum 💗',
      'Sessiz ol, yan odada muhasebe var 🤫',
      'Saten gömleğin açıldı, toparlarız sonra 👔',
      'Terfi istiyorsan devam et… şaka şaka, sadece devam et 😆'
    ],
    cum: [
      'Mesai bitti… ben de bittim, ahhh 💼💦',
      'Masanın üstünde dağıttım her şeyi, seni de 😩',
      'Bunu kimse öğrenmeyecek, değil mi? 🤫',
      'Rapor yarına kalsın, bugün yeterince çalıştık 😮‍💨',
      'Eteğine bak… kuru temizleme bizden 😏',
      'Bir dahaki toplantıya da geç kal 😈',
      'Patronun sana bayılıyor, bilmiş ol 💗',
      'Kravatım nerede? Neyse, sende kalsın 👔',
      'Ahhh… bu ofis bir daha aynı olmayacak 🥵',
      'Fazla mesai ücreti ödüyorum, söz 😆💦'
    ]
  }
};

/* 🎚️ Mode katmanı: sohbetteki son Mode (Gentle, Rough, ağlatmalı…) pozisyon mesajlarına karışır (boşalmada yok) */
Stories.ME_MODE_LINES = {
  gentle: [
    'Yavaş yavaş, her santimini hissederek… acele yok 🤍',
    'Alnını öpüyorum, ritmi hiç bozmadan 💗',
    'Nefesini dinleyip ona göre hareket ediyorum 😌',
    'Sanki ilk kezmiş gibi, nazikçe… 🌸',
    'Saçlarını okşuyorum, yavaşça devam ediyorum 🤍',
    'Seni incitmeden, en tatlı haliyle {o} 💞',
    'Usul usul, sadece ikimiz ve nefesimiz 😮‍💨',
    'Yumuşacık, dalga gibi geliyorum sana 🌊'
  ],
  passionate: [
    'Dudaklarımı bırakmadan sana daha sıkı sarılıyorum 🔥',
    'Her hareketle biraz daha tutkuyla {o} 💋',
    'Kalbim göğsünde atıyor, sen de hissediyor musun? 💓',
    'Gözlerimi senden ayıramıyorum, deli gibi istiyorum seni 😩',
    'Öpüşerek, inleyerek, birbirimize gömülerek 🥵',
    'Adını fısıldıyorum, sonra bir daha, bir daha 💗',
    'Ellerimiz kenetli, tutkuyla hızlanıyorum 🔥',
    'Bu gece bitmesin istiyorum {o} 💞'
  ],
  assertive: [
    'Bileklerini tutuyorum, ritmi ben belirliyorum 😈',
    'Bana bak {o}, söylediğimi yap 😏',
    'Kalçanı kavrayıp kendime çekiyorum 🔥',
    'Kontrol bende, sen sadece hisset 🥵',
    'Kararlı ve derin, hiç tereddüt etmeden 😤',
    'Çeneni tutup gözlerime bakmanı istiyorum 😈',
    'Nerede duracağını ben söyleyeceğim 😏',
    'Ritmimi bozma, böyle kal 💪'
  ],
  rough: [
    'Saçlarını kavrayıp sertçe çekiyorum 😤',
    'Yatak duvara vuruyor, durmuyorum 🔥',
    'Sert ve hızlı, nefes almana fırsat vermeden 🥵',
    'Kalçana bir şaplak, sonra daha da sert 👋',
    'Bastırıyorum, kaçamazsın {o} 😈',
    'Her vuruşta biraz daha derine, biraz daha sert 💥',
    'Tırnaklarım teninde iz bırakıyor 😩',
    'İnlemen çığlığa dönüyor, hızlanıyorum 🔥'
  ],
  brutal: [
    'Hiç acımadan, bütün gücümle 💥',
    'Seni yatağa çiviliyorum, kıpırdayamıyorsun 😤',
    'Vahşi gibiyim, kendimi tutamıyorum {o} 🔥',
    'Bütün ağırlığımla bastırıp durmadan vuruyorum 😈',
    'Nefesin kesiliyor, ben daha da hızlanıyorum 🥵',
    'Odada sadece ten sesi ve çığlıkların var 💥',
    'Sınırını zorluyorum, dayan biraz daha 😩',
    'Bu gece seni dağıtacağım 😤'
  ],
  inletmeli: [
    'Her vuruşta inlemeni dinliyorum, bir daha 😩',
    'O sesi tekrar duymak için yavaşlayıp derine iniyorum 😮‍💨',
    'İnle {o}, kimse duymuyor 😈',
    'Sesin kulaklarımda müzik gibi, durmuyorum 🎶',
    'Bir inleme daha… işte böyle 💗',
    'Dudağını ısırma, bırak sesin çıksın 😏',
    'İnledikçe ben de daha çok istiyorum 🥵',
    'Kulağına eğilip inlememi duyuruyorum… ahhh 😩'
  ],
  'bağırtmalı': [
    'Bağır {o}, bütün bina duysun 😈',
    'Çığlığın duvarlarda yankılanıyor, durmuyorum 🔥',
    'Sesin kısılana kadar devam 😤',
    'Komşular ne düşünürse düşünsün, bağır 😏',
    'Her vuruşta çığlığın daha yüksek 💥',
    'Yastığa gömme yüzünü, bağır bana 🥵',
    'Adımı bağır, bir daha 😩',
    'Bu sesi bir ay unutmayacağım 🔥'
  ],
  'ağlatmalı': [
    'Gözlerin yaşardı… durayım mı? Hayır mı? Devam 😈',
    'Gözyaşını öpüyorum, sonra daha derine 💧',
    'Ağlarken bile bana daha sıkı sarılıyorsun 😩',
    'Yanağından süzülen yaşı başparmağımla siliyorum 🤍',
    'Hıçkırıkla inlemen karışıyor, deliriyorum 🥵',
    'Ağla {o}, ama bırakma beni 💧',
    'Islak kirpiklerinle bana bakışın… offf 😮‍💨',
    'Bu kadar hissettiğin için ağlıyorsun, biliyorum 💗'
  ]
};

/* 📊 Değer katmanı: pozisyondayken (boşalmada değil) değere göre %40 bu mesajlardan biri gelir
 * zevk: senin 🥴 Zevk'in 60+ · aci: onun 😣 Acı'sı 30+ · uyarilma: onun 💗 Uyarılma'sı 60+ (birden çoğu tutarsa karışır) */
Stories.ME_STATE_LINES = {
  zevk: [
    'Yaklaşıyorum… tutamayacağım 😩',
    'Az kaldı {o}, çok az… offf 🥵',
    'Böyle devam edersen gelirim, haberin olsun 😮‍💨',
    'Kasıklarım geriliyor, sınırdayım 😩',
    'Bir dakika… yoksa şimdi bitiririm 🔥',
    'Dayanamıyorum, sen çok iyisin ahhh 💦',
    'Gözlerim kararıyor, geliyor… 😵‍💫',
    'Nereye istiyorsun? Çabuk söyle 😈'
  ],
  aci: [
    'Acıttım mı? Yavaşlıyorum 🤍',
    'Yüzünü buruşturdun, biraz duralım mı? 🥺',
    'Söyle bana, fazla mı geldi? 💗',
    'Nefes al {o}, ben bekliyorum 😌',
    'Daha nazik olacağım, söz 🤍',
    'Acırsa elimi sık, hemen dururum 🫂',
    'Yavaşça, alışana kadar böyle kalıyorum 🌸',
    'Alnını öpüp ritmi düşürüyorum, rahatla 💞'
  ],
  uyarilma: [
    'Gelmek üzeresin, hissediyorum 😈',
    'Titremeye başladın {o}… biraz daha 🥵',
    'İçin beni sıkıştırıyor, az kaldı değil mi? 😩',
    'Durmayacağım, seni oraya götürüyorum 🔥',
    'Nefesin hızlandı, yüzün kızardı… gel bana 💗',
    'Bacakların titriyor, hissediyorum seni 😏',
    'Bırak kendini, ben tutuyorum seni 🤍',
    'Sesin değişti… geliyorsun, biliyorum 😮‍💨'
  ]
};

/* 🐮 Cow Girl: fantezi olayının kendisi ve süren fantezide pozisyon / boşalma mesajların (rol katmanı, fantKey 'fxinek') */
Stories.ME_EV_LINES['Cow Girl'] = [
  'Boynuzlu bandını taktın, çanın şıngırdıyor… benim ineğim geldi {o} 🐮🔔',
  'Benekli üstün göğüslerini zor tutuyor, uçlarından süt damlıyor bile 🍼😳',
  'Göğüslerin sütten şişmiş… sağmamı mı bekliyorsun? 😏🍼',
  'Çanının sesini duyunca deliriyorum, gel buraya 🔔',
  'Bir damla süt göbeğine süzüldü, dilimle yakalıyorum 👅🍼',
  'Bu gece seni sağacağım, sen de beni emzireceksin 😈',
  'Benekli kostüm sana çok yakışmış, göğüslerin taşıyor 🐮',
  'Avuçlarıma alıyorum, ağırlar… dolu dolu 🍼🥵',
  'Möö mü dedin? Bir daha de {o} 😆🐮',
  'Göğüslerine dokunur dokunmaz süt fışkırdı, ellerim ıslandı 😳🍼',
  'Çiftliğin en güzel ineği benim kucağımda 🐮💗',
  'Süt kokuyorsun… bütün gece bırakmam seni 😈'
];
Stories.ME_RP_LINES.fxinek = {
  pos: [
    'Her vuruşta göğüslerin sallanıyor, sütün göğsüme sıçrıyor… ahhh {o} 🍼😩',
    'Sütün karnına akıyor, ben içindeyim… offf 🥵',
    'Göğüslerini sıkıyorum, süt fışkırıyor, durmuyorum 🍼🔥',
    'Çanın her itişte şıngırdıyor, sütün çarşafa damlıyor 🔔💦',
    'Eğilip ucunu ağzıma alıyorum, emerken hızlanıyorum 😩🍼',
    'Sütün sıcacık tenime akıyor, seni böyle görmeye bayılıyorum 🥵',
    'Emzir beni {o}… içindeyken emzir 🍼😈',
    'Göğüslerin dudaklarımda, sütün boğazımdan iniyor, kalçan bana çarpıyor 😮‍💨',
    'Uçlarından süt damlıyor, her damla bir inleme gibi 🍼',
    'Sağıyorum seni, bir yandan da derine iniyorum… ahhh 🐮🔥',
    'Yatak süt kokuyor, sen sırılsıklamsın, ben deliriyorum 🥵',
    'Sütünle ıslanmış göğsüne yüzümü gömüyorum 😩🍼'
  ],
  cum: [
    'Sen beni emzirirken içine boşalıyorum… ahhhh {o} 😩💦🍼',
    'Sütün dudaklarımda, benimki içinde… ikimiz de taştık 🥵',
    'Göğsünü emerken patladım, durmuyor offf 🍼💦',
    'Sen süt verdin, ben de sana verdim 😈💦',
    'Göğüslerinden süt fışkırırken doldurdum seni ahhh 🐮',
    'Boşalırken ucunu bırakmadım, sütün ağzımı doldurdu 😮‍💨🍼',
    'Çanın şıngırdadı, ben bittim… ahhh 🔔💦',
    'Sütüne bulanmış bedenine sarılıp bitiriyorum 🥵',
    'İkimizin sütü karıştı, her yer bembeyaz 😳💦',
    'Bir damla bile bırakmadım: ne seninkini ne benimkini 😏🍼'
  ]
};

/* 🍓 Meisove kızları: rol olayının kendisi ve süren rolde pozisyon / boşalma mesajların (rol katmanı, fantKey 'fxrp…') */
Object.assign(Stories.ME_EV_LINES, {
  'Limon Kız': [
    'Sapsarı, yarı saydam tenin parlıyor… dokunuyorum, parmaklarım limon kokuyor 🍋',
    'Bastırınca jöle gibi geri geliyorsun {o}, çok yumuşaksın 💛',
    'Dudaklarını öptüm, dilim karıncalandı… ekşisin 😆🍋',
    'Seni hafifçe sıkıyorum, ekşi suyun bileğime akıyor 💦',
    'Boynuna biraz tuz serpip yalıyorum 🧂😈',
    'Yüzümü buruşturdum ama bırakmıyorum seni 😏',
    'Limon kokun bütün odayı sardı {o} 🍋',
    'Bu gece seni son damlana kadar sıkacağım 😈'
  ],
  'Çilek Kız': [
    'Kıpkırmızı tenin parlıyor {o}, yanakların daha da kızardı 🍓😳',
    'Seni avuçluyorum, jöle gibi yumuşacıksın, ezmekten korkuyorum 💗',
    'Çilek reçeli kokuyorsun, ısırmamak için zor duruyorum 🍓',
    'Göğüslerine biraz krema sıkıyorum 🍦😈',
    'Dudaklarını öptüm, tatlı mı tatlı 💋',
    'Minik tohumların parmaklarımı gıdıklıyor 😆',
    'Utandın mı {o}? Kırmızılığın her yerine yayıldı 😏',
    'Tatlım hazır, krema da bende 🍓🍦'
  ],
  'Portakal Kız': [
    'Turuncu tenin güneş gibi parlıyor {o} 🍊☀️',
    'Kabuğunu yavaşça soyuyorum, içinden portakal çiçeği kokusu yayılıyor 😏',
    'Seni sıkıyorum, tatlı suyun avucuma doluyor 💦',
    'Jöle gibi yumuşacık belini kavrıyorum 🧡',
    'Dudaklarını öptüm, taze sıkılmış gibisin 💋🍊',
    'Enerjin bana da geçti, deli gibi istiyorum seni 😈',
    'Bir dilimini ısırdım, sulu sulu {o} 🍊',
    'Sıcacık tenine yaslanıyorum, güneş gibisin 🧡'
  ],
  'Şarap Kız': [
    'Bordo, yarı saydam tenin mum ışığında parlıyor {o} 🍷',
    'Seni kadeh gibi çeviriyorum, kokunu içime çekiyorum 😏',
    'Boynundan bir yudum aldım, başım döndü bile 🥂',
    'Jöle gibi yumuşacıksın, parmaklarım bordo oldu 🍷',
    'Dudakların şarap lekesi bıraktı dudaklarımda 💋',
    'Acele etmiyorum {o}, iyi şarap beklemeyi sever 😈',
    'Şerefe… sana 🍷',
    'Bu gece sarhoş olacağım, ama senden 😏'
  ],
  'Vodka Kız': [
    'Privet {o}… buz gibi, şeffaf tenine dokunuyorum, ürperdim ❄️',
    'Seni bir shot gibi dudaklarıma götürüyorum, boğazım yanıyor 🍸🔥',
    'Jöle gibi yumuşacıksın ama soğuksun… ısıtacağım seni 😈',
    'Na zdorovye! Kadehimi tenine tokuşturuyorum 🥃',
    '"Da, moy dorogoy" deyişine bayılıyorum 🇷🇺',
    'Buz gibi göğüslerini avuçluyorum, uçları sertleşti 🧊😏',
    'Rus kızı… bu gece Sibirya\'yı erittim sanırım 🔥',
    'Bir yudum daha {o}, sonra bir yudum daha 🍸'
  ],
  'Bal Kız': [
    'Altın sarısı, yarı saydam tenin parlıyor {o}… dokunuyorum, parmağım yapıştı 🍯',
    'Parmağımı tenine batırıp yalıyorum, süzme bal gibisin 😋',
    'Dudaklarını öptüm, dudaklarımız birbirine yapıştı 💋',
    'Bal kokun bütün odayı sardı {o} 🐝',
    'Jöle gibi yumuşacıksın, ağır ağır akıyorsun 💛',
    'Göğüslerine bir damla bal daha damlatıyorum 😈',
    'Yapıştım {o}, ayrılmak da istemiyorum 🍯',
    'Bir kaşık sen, bir kaşık daha sen 😏'
  ],
  'Tekila Kız': [
    '¡Hola {o}! Boynundaki tuzu yalıyorum 🧂😈',
    'Seni bir shot gibi tek dikişte içiyorum, boğazım yanıyor 🥃🔥',
    'Dudağındaki limonu dişlerimle alıyorum 🍋💋',
    'Jöle gibi yumuşacıksın ama ateş gibisin 🌵',
    '"¡Salud, mi amor!" deyişine bayılıyorum 😏',
    'Belini tutup seni kendime çekiyorum, salsa gibi 💃',
    'Sombreronu çıkarıyorum {o}, sıra kıyafetlerinde 😈',
    'Bir shot daha {o}, sonra bir shot daha 🥃'
  ],
  'Şampanya Kız': [
    'Altın pullu elbisen ışıl ışıl {o}… tenine dokunuyorum, kabarcıklar parmağımı gıdıklıyor 🍾😆',
    'Kadehimi kadehine tokuşturuyorum: şerefe 🥂',
    'Dudaklarını öptüm, köpüklü ve tatlı 💋',
    'Jöle gibi yumuşacıksın, içinde altın kabarcıklar dolaşıyor ✨',
    'Seni hafifçe sallıyorum, kıkır kıkır köpürüyorsun 😈',
    'Göğüslerine biraz köpük akıttım, yalıyorum 😏',
    'Mantarını patlatmaya hazırım {o} 🍾',
    'Bu gece seni kutluyorum 🎉'
  ],
  'Süt Kız': [
    'İnek desenli bikinin çok yakışmış {o}… tenine dokunuyorum, ılık ve yumuşacık 🥛🐄',
    'Göğüslerini hafifçe sıkıyorum, bir damla süt parmağıma akıyor 💧',
    'Dudaklarını öptüm, vanilya tadında 💋',
    'Jöle gibi yumuşacıksın, bembeyaz ve kremamsı 🤍',
    'Damlayan sütü göğsünden yalıyorum 😈',
    'Bir kurabiyeyi göğsüne bandırıyorum 🍪😏',
    'Seni nazikçe sağmaya hazırım {o} 🥛',
    'Bu sabah kahvaltım sensin 🐄'
  ]
});
Object.assign(Stories.ME_RP_LINES, {
  fxrplimon: {
    pos: [
      'Her vuruşta ekşi suyun fışkırıyor, karnıma akıyor… ahhh {o} 🍋💦',
      'Jöle gibi titriyorsun, seni daha sıkı kavrıyorum 💛',
      'İçin serin ve ekşi, ben sıcacığım… offf 🥵',
      'Kalçanı sıkıyorum, suyun parmaklarımdan süzülüyor 🍋',
      'Yarı saydam tenin altında kendimi görüyorum 👀',
      'Limon kokun her nefesimde, deliriyorum 😩',
      'Boynunu yalıyorum, ekşi tadın dilimde 😈🍋',
      'Yumuşacık bedenin bana göre şekil alıyor, durmuyorum 💛',
      'Sıktıkça daha çok akıyorsun {o}, böyle devam 💦',
      'Yüzümü buruşturdum ama hızlanıyorum 😆🔥'
    ],
    cum: [
      'Limonumu sıkarken içine boşalıyorum… ahhhh {o} 🍋💦',
      'Ekşi suyunla benimki karıştı, tekila gibi 🧂😈',
      'Sarı tenin bembeyaz oldu, offf 💛',
      'Son damlama kadar sıktın beni 😩💦',
      'Yarı saydam içinde görünüyor, bak 👀🍋',
      'Limon kokulu bedenine sarılıp bitiriyorum 🥵',
      'Sen fışkırdın, ben fışkırdım… her yer sırılsıklam 😳',
      'Dilim karıncalanırken bitirdim seni 🍋'
    ]
  },
  fxrpcilek: {
    pos: [
      'Kıpkırmızı oldun, her vuruşta daha da kızarıyorsun… ahhh {o} 🍓',
      'Yavaşça giriyorum, ezilmeni istemem 💗',
      'Tatlı suyun çarşafa akıyor, reçel gibi 🍓💦',
      'Jöle gibi yumuşacık göğüslerine yüzümü gömüyorum 😩',
      'Çilek kokun her nefesimde 🍓',
      'Dudaklarını öpüyorum, tatlı tatlı inliyorsun 💋',
      'Minik tohumların tenimi gıdıklıyor, gülme {o} 😆',
      'Kremalı göğüslerini yalıyorum, durmuyorum 🍦😈',
      'Utancından titriyorsun ama bırakmıyorsun beni 😏',
      'Seni yiyecek gibi öpüyorum, çok tatlısın 🍓🥵'
    ],
    cum: [
      'Kremamı çileğime sıkıyorum… ahhhh {o} 🍓🍦',
      'İçin çilekli milkshake oldu 😳💦',
      'Kırmızı tenin bembeyaz damlalarla kaplandı 🍓',
      'Ezilmeden, tatlı tatlı bitirdim seni 💗',
      'Pembe tenin ardından görünüyor, bak 👀',
      'Reçel kokulu bedenine sarılıp boşalıyorum 🥵',
      'Kıpkırmızı yanaklarını öperken bittim 💋',
      'Tatlıma son dokunuşu yaptım 😈🍓'
    ]
  },
  fxrpportakal: {
    pos: [
      'Her vuruşta tatlı suyun fışkırıyor… ahhh {o} 🍊💦',
      'Sıcacık, güneş gibi içindeyim 🧡🥵',
      'Kabuğunu tamamen soydum, şimdi yiyorum seni 😈',
      'Jöle gibi titriyorsun, kalçan bana çarpıyor 🍊',
      'Portakal çiçeği kokun başımı döndürüyor 😩',
      'Enerjin bitmiyor, ben de durmuyorum 🔥',
      'Sulu tenine dudaklarımı bastırıyorum 💋',
      'Seni sıktıkça daha çok akıyorsun {o} 💦',
      'Turuncu tenin ter içinde parlıyor 🧡',
      'Dilim dilim titriyorsun, offf 🍊'
    ],
    cum: [
      'Taze sıkılmış seni doldururken bitiyorum… ahhhh {o} 🍊💦',
      'İçin portakallı krema oldu 🍦😳',
      'Turuncu tenin bembeyaz damlalarla kaplandı 🧡',
      'Güneşim battı, sıcacık boşaldım 🥵',
      'Turuncu tenin ardından görünüyor, bak 👀',
      'Suyun ve benimki karıştı, her yer sırılsıklam 💦',
      'Sulu bedenine sarılıp bitiriyorum 🍊',
      'Vitamin depomu boşalttım sana 😆😈'
    ]
  },
  fxrpsarap: {
    pos: [
      'Kadeh gibi çalkalanıyorsun, her vuruşta… ahhh {o} 🍷',
      'Yavaş ve derin, iyi şarap gibi 😏',
      'Bordo tenin titriyor, başım dönüyor 🥵',
      'Şarap kokun bütün odayı sardı 🍇',
      'Dudaklarını öptüm, sarhoş oldum 💋🍷',
      'Jöle gibi yumuşacık beline sarılıyorum 😩',
      'Yarı saydam bordo içinde kendimi görüyorum 👀',
      'Sarhoş gibi sallanıyoruz, durmuyorum 🥂',
      'Seni yudum yudum içiyorum {o} 🍷😈',
      'Yıllanmış tadın her nefesimde, offf 🍷'
    ],
    cum: [
      'Kadehini dolduruyorum… ahhhh {o} 🍷💦',
      'Kırmızın beyazla karıştı, rosé olduk 🥂😈',
      'Bordo tenin bembeyaz damlalarla kaplandı 🍷',
      'Başım dönerek içine boşaldım 🥵',
      'Şerefe… ikimize 🍷',
      'Şarap kokulu bedenine sarılıp bitiriyorum 😩',
      'İçinde yıllansın diye bıraktım 😏',
      'Sarhoş gibi titreyerek bittim 🍷💦'
    ]
  },
  fxrpvodka: {
    pos: [
      'Buz gibi içinde yanıyorum… davay, davay {o} 🍸🔥',
      'Şeffaf tenin titriyor, buzun eriyor 🧊💦',
      '"Da, da" diye inledikçe hızlanıyorum 🇷🇺😩',
      'Soğuk göğüslerin sıcak göğsüme yapıştı ❄️',
      'Boğazım yanıyor gibi, sen beni yakıyorsun 🔥',
      'Jöle gibi yumuşacık, buz gibi kalçanı sıkıyorum 😈',
      'Sibirya kadar sert istiyorsun, veriyorum 🍸',
      'Şeffaf içinde kendimi görüyorum, offf 👀',
      'Bozhe moy diye bağırdın, durmuyorum {o} 🥵',
      'Seni shot gibi tek dikişte istiyorum 🥃😈'
    ],
    cum: [
      'Na zdorovye… içine boşalıyorum ahhhh {o} 🍸💦',
      'Şeffaf içinde bembeyaz, beyaz Rus oldun 🥛🍸',
      'Buzunu tamamen erittim, sıcacık doldurdum 🔥',
      '"Horosho" dedin, ben de bittim 🇷🇺😩',
      'Soğuk tenin bembeyaz damlalarla kaplandı ❄️',
      'Buz gibi bedenine sarılıp boşalıyorum 🥵',
      'Boğazım yanıyor gibi, ama bu sefer senden 🔥',
      'Bir shot daha, moy dorogaya 🥃😈'
    ]
  },
  fxrpbal: {
    pos: [
      'Ağır ağır, bal gibi içindeyim… ahhh {o} 🍯',
      'Yapış yapış tenimiz birbirine yapıştı, ayrılmıyoruz 🐝',
      'Her vuruşta balın akıyor, karnıma bulaşıyor 💦',
      'Altın sarısı tenin titriyor, yalıyorum 😈',
      'Bal kokun her nefesimde, deliriyorum 😩',
      'Jöle gibi yumuşacık kalçanı sıkıyorum, parmaklarım yapıştı 🍯',
      'Vızıldar gibi inliyorsun {o}, durmuyorum 🐝',
      'Yarı saydam içinde kendimi görüyorum, offf 👀',
      'Dudaklarını öpüyorum, yapıştık 💋',
      'Kavanozun dibine kadar iniyorum 🥵'
    ],
    cum: [
      'Ballı süt yapıyorum seni… ahhhh {o} 🍯💦',
      'Altın içinde bembeyaz, karıştı 🥛',
      'Kavanozunu ağzına kadar doldurdum 🫙',
      'Tatlının üstüne krema 😈',
      'Altın tenin bembeyaz damlalarla kaplandı 🍯',
      'Yapış yapış bedenine sarılıp boşalıyorum 🥵',
      'Peteklerini doldurdum 🐝',
      'Damla damla, son damlama kadar 💛'
    ]
  },
  fxrptekila: {
    pos: [
      'Ateş gibi içindeyim… ¡ándale, ándale! {o} 🌵🔥',
      '¡Más! dedikçe hızlanıyorum 🥵',
      'Tuzlu boynunu yalıyorum, durmuyorum 🧂',
      'Salsa yapar gibi kalçan bana çarpıyor 💃',
      'Ay caramba diye bağırdın, offf 😩',
      'Jöle gibi yumuşacık ama yakıcı kalçanı sıkıyorum 😈',
      'Tekila gibi boğazıma kadar yanıyorum 🥃',
      'Yarı saydam içinde kendimi görüyorum 👀',
      'Limon kokulu dudaklarını öpüyorum 🍋💋',
      'Seni shot gibi tek dikişte istiyorum {o} 🔥'
    ],
    cum: [
      '¡Salud!… içine boşalıyorum ahhhh {o} 🥃💦',
      'Margarita oldun, kremalı 🍸',
      'Ateşini söndürdüm, sıcacık doldurdum 🔥',
      '"¡Sí, sí!" dedin, ben de bittim 😩',
      'Altın tenin bembeyaz damlalarla kaplandı 🌵',
      'Ateşli bedenine sarılıp boşalıyorum 🥵',
      'Çöle yağmur yağdırdım 😆',
      'Tuz, limon ve ben… ¡olé! 🧂🍋'
    ]
  },
  fxrpsampanya: {
    pos: [
      'Seni sallıyorum, köpürüyorsun… ahhh {o} 🍾',
      'Kabarcıkların tenimi gıdıklıyor, gülerek devam ediyorum 😆',
      'Altın tenin ışıl ışıl titriyor ✨',
      'Kıkır kıkır inliyorsun, hızlanıyorum 😈',
      'Şampanya kokun başımı döndürüyor 🥴',
      'Jöle gibi yumuşacık kalçanı sıkıyorum, köpürüyor 🥂',
      'Yarı saydam içinde kabarcıklar ve ben 👀',
      'Dudaklarını öpüyorum, köpüklü 💋',
      'Mantarın patlamak üzere {o}, biliyorum 🍾',
      'Kutlama gibi sevişiyoruz 🎉'
    ],
    cum: [
      'Pop! İçinde patlıyorum… ahhhh {o} 🍾💦',
      'İçin köpürdü, bembeyaz 🥂',
      'Şişeni ağzına kadar doldurdum 😈',
      'Şerefe… ikimize 🥂',
      'Altın tenin bembeyaz köpükle kaplandı ✨',
      'Işıltılı bedenine sarılıp boşalıyorum 🥵',
      'Konfeti yağmuru gibi bittim 🎉',
      'Köpüğün taştı, benimki de 😆'
    ]
  },
  fxrpsut: {
    pos: [
      'Her vuruşta göğüslerinden süt damlıyor… ahhh {o} 🥛',
      'Sallanan göğüslerin göğsüme süt sıçratıyor 💧',
      'Kremamsı tenin ışıl ışıl titriyor 🤍',
      'İnledikçe hızlanıyorum 😈',
      'Vanilya kokun başımı döndürüyor 🍦',
      'Jöle gibi yumuşacık kalçanı sıkıyorum 🥛',
      'Yarı saydam içinde kendimi görüyorum 👀',
      'Dudaklarını öpüyorum, süt tadında 💋',
      'Göğüslerini sağarken içinde gidip geliyorum {o} 🐄',
      'Çarşaflar süt gölüne döndü 😆'
    ],
    cum: [
      'İçine boşalıyorum… ahhhh {o} 🥛💦',
      'Beyaz beyaza karıştı 🤍',
      'Sürahini ağzına kadar doldurdum 😈',
      'Kaymak tuttun 😆',
      'Kremamsı tenin bembeyaz damlalarla kaplandı 🥛',
      'Damlayan göğüslerine sarılıp boşalıyorum 🥵',
      'Milkshake oldun 🍦',
      'Çiftliğin en dolu kızı sensin 🐄'
    ]
  }
});

/* 🕯️ Rahibe – Günahkâr: rol olayının kendisi, süren rolde pozisyon / boşalma ve sarılma satırların */
Stories.ME_EV_LINES['Rahibe – Günahkâr'] = [
  'Gece yarısı manastırın kapısını çalıyorum; mum ışığında sen açıyorsun {o} 🕯️',
  '"Günah çıkarmaya geldim" diyorum, gözlerin tespihinden bana kayıyor 😏',
  'Başörtünün kenarından bir tutam saç kaçmış, parmağımla geri itiyorum 😳',
  'Elini tutuyorum; titriyor, ama çekmiyorsun 🥺',
  'Kulağına en büyük günahımı fısıldıyorum: sen 😈',
  'Cübbenin düğmelerine bakıyorum, sen de bakışımı yakalıyorsun 👀',
  'İtiraf odasının perdesini açıp yanına giriyorum 🤫',
  'Mumu üflüyorum; karanlıkta sadece nefesin kalıyor {o} 🕯️'
];
Stories.ME_RP_LINES.fxrprahibe = {
  pos: [
    'Cübben belinde toplandı, her vuruşta tespihin şıkırdıyor… ahhh {o} 📿',
    'Dar yatağın gıcırdıyor, sesini bastırmaya çalışıyorsun 🤫',
    'Başörtün kaydı, saçlarını avuçluyorum 😩',
    'Mum ışığında yüzün kıpkırmızı, gözlerin kapalı 🕯️',
    'Dua eder gibi fısıldıyorsun ama dua değil bu 😈',
    'Koridorda ayak sesleri; duruyorum, sen "devam" diyorsun 😳',
    'Haç kolyen göğüslerinin arasında sallanıyor 🥵',
    'Yeminlerin tek tek bozuluyor, ben bozuyorum {o} 🔥',
    'Masum yüzünle bana bakıyorsun, deliriyorum 😩',
    '"Günahkâr" diye inliyorsun, hızlanıyorum 😈'
  ],
  cum: [
    'Kefaretimi içine bırakıyorum… ahhh {o} 🕯️💦',
    'Tespihini sıkarken boşalıyorum, taneler avucuma batıyor 📿',
    'Cübbene, tenine… her yere 😩',
    'Mumlar söndü, biz bittik 🥵',
    'İtiraf edemeyeceğin bir günah daha 😈',
    'Masum yüzün titriyor, alnını öpüyorum 🤍',
    'Başrahibe duymadan bitirdim 🤫',
    'Seni lekeledim rahibem, affet beni 😏'
  ]
};
Stories.ME_RP_HUG_LINES.fxrprahibe = {
  pos: [
    'Arkandan sımsıkı sarıldım, cübbenin kumaşı tenime sürtünüyor… ahhh 🕯️😩',
    'Sana sarıldıkça titriyorsun; {kalcaHis} offf 📿',
    'Başörtüne yüzümü gömdüm, saçlarının kokusu başımı döndürüyor… ahh 😮‍💨',
    '{gogus} göğüslerini cübbenin altından avuçladım, nefesin kesildi offf 🥵',
    'Kulağına "günahkâr" diye fısıldıyorum, daha sıkı sarılıyorsun… ahhh 😈',
    'Sımsıkı sarılıyım, kalbin dua eder gibi hızlı atıyor; {gogusHis} offf 🥺',
    'Mum ışığında gölgemiz duvarda tek kişi gibi… ahh 🕯️',
    'Tespihin ikimizin arasında sıkıştı, umurumda değil offf 📿',
    'Ellerin göğsümde birleşmiş, dua eder gibi; ben durmuyorum ahhh 🙏',
    'Masum bedenine sarılıp her vuruşta yeminlerini biraz daha bozuyorum ahh 🔥'
  ],
  in: [
    'Sana sımsıkı sarılıp içine boşalıyorum; titriyorsun, ellerin cübbemde… ahhhh 🕯️💦',
    'Kulağına "affet beni" diye fısıldayarak bırakıyorum offf 😩',
    'Tespihini avucumda sıkarken içine doluyorum… ahhh 📿',
    'Başörtüne gömülüp son damlaya kadar veriyorum ahh 🥵',
    'Kefaretin içinde, sıcacık… offf 😈',
    'Sımsıkı sarılıyız, ikimiz de nefes nefese… ahhh 🥺',
    'Masum bedeninin derinliklerine bırakıyorum ahh 🔥',
    'Biriken her şey içinde; bunu hiçbir itiraf odası duymayacak offf 🤫',
    'Titreyen dudaklarını öperken boşalıyorum… ahh 💋',
    'Boşaldıktan sonra mum ışığında sana sarılı kalıyorum… mmm 🕯️😌'
  ],
  out: [
    'Arkandan sarılıyken son anda çıktım; cübbenin üstüne fışkırıyor… ahhhh 🕯️💦',
    'Beyaz tenine boşalıyorum, mum ışığında parlıyor offf ✨',
    'Sımsıkı sarılı halde kalçana akıyor, cübben kapatacak… ahh 🤫',
    'Haç kolyenin üstüne damlıyor offf 📿',
    'Bacaklarına süzülüyor… ahhh 💦',
    'Kalçanı geri itiyorsun, son damlayı da bırakıyorum ahh 😈',
    'Siyah cübbende bembeyaz izler offf 🥵',
    'Günahın izi teninde kaldı… ahhh 😳',
    'Affet beni, tenine… ahh 🙏',
    'Bitirince arkandan sarılıp ensendeki başörtüyü öpüyorum… mmm 😌'
  ],
  hold: [
    'Sana sarılıyım, masumiyetin beni zorluyor; ama tutuyorum… offf 😣🕯️',
    '"Sabırlı ol evladım" dedin, dişlerimi sıkıyorum ahh 🙏',
    'Sarılırken {gogus} göğüslerin göğsüme eziliyor, nasıl tutayım? offf 😩',
    'Tespih tanelerini sayar gibi nefes alıyorum, tutuyorum ahh 📿',
    'Cübbene sımsıkı sarılıp kasıklarımı kilitliyorum offf 🥵',
    'Kefaret uzun olsun diye biriktiriyorum… ahh 😈',
    'Koridordan ses geldi, donup kalıyoruz, ben de tutuyorum offf 🤫',
    'Sana sarıldıkça zonkluyorum, biriken günah büyüyor… ahh 😮‍💨',
    'Mumun sönmesini bekliyorum, sonra bırakacağım offf 🕯️',
    'Ter içinde sarılı tutuyorum, "affet" dediğini duymak istiyorum ahh 😏'
  ]
};

/* 🛁🏖️🚗🛗🏕️🍳🎥 mekân kategorileri: senin olay satırların, sarılma grupları, yatak dışı olaylar */
Object.assign(Stories.ME_EV_LINES, {
  'Bubble Bath': ['Köpüklerin arasından ayağını göğsüme aldım, ovuyorum {o} 🫧', 'Karşımda köpüğe gömülmüşsün, sadece gözlerin görünüyor 😏', 'Suyun altında bacaklarımız dolanıyor 🛁', 'Burnuna köpük kondurdum 😂', 'Mum ışığında ıslak saçların parlıyor 🕯️', 'Ayağın nereye kaydı öyle {o} 😈'],
  'Jacuzzi Jets': ['Arkandan tuttum, jetler tam oraya vuruyor 💦', 'Bacakların titriyor, seni bırakmıyorum 😈', 'Kabarcıklar ikimizi de sarıyor 🫧', 'Kulağına "dayan" diye fısıldıyorum {o} 😏', 'Belini sıkıca kavradım, kaymıyorsun 🤍', 'Yüzündeki ifadeye bayıldım 🥵'],
  'Tub Ride': ['Kucağımda suyun içinde kayıyorsun… ahh {o} 🛁', 'Su küvetten taşıyor, umurumda değil 😈', 'Belini tutup indiriyorum 🥵', 'Köpükler göğüslerine yapıştı 🫧', 'Her inişinde su dalgalanıyor 🌊', 'Sıcak su ve sen, offf 😩'],
  'Tub Spooning': ['Sırtın göğsümde, suyun içinde yavaşça giriyorum 🥰', 'Kulağına nefes veriyorum {o} 😏', 'Köpüklü göğüslerini avuçladım 🫧', 'Hiç acele etmiyoruz ahh 😩', 'Boynunu öpüyorum, su sıcacık 💋', 'Sana daha sıkı sarılıyorum 🤍'],
  'Bubble Titjob': ['Köpüklü göğüslerinin arasında kayıyorum ahh 😩', 'Kenarda oturuyorum, sen sudan bana uzanıyorsun {o} 😈', 'Ne kadar kaygan offf 🥵', 'Köpük ucuma yapıştı 😂', 'Sık biraz daha 😏', 'Göğüslerine bitireceğim {o} 💦'],
  'Tub Creampie': ['Suyun içinde içine boşalıyorum… ahhh {o} 😩💦', 'Sana sımsıkı sarılıp bırakıyorum 🥵', 'Sıcak su ve sıcak sen 🛁', 'Son damlama kadar içinde kalıyorum 😈', 'Köpüklerin altında kimse görmedi 😏', 'Titriyoruz ikimiz de 🤍'],
  'Bath Cumshot': ['Geri çekiliyorum, köpüklerin arasına boşalıyorum ahhh 😩💦', 'Göğsüne iniyor, suya süzülüyor 🫧', 'Tenine, köpüğe karışıyor offf 🥵', 'Hepsini sana bıraktım {o} 😈', 'Su hemen götürüyor 😂', 'Sana sarılıp gevşiyorum 🤍'],
  'Skinny Dip': ['Çırılçıplak suya atladık, ay ışığı tenimizde 🌙', 'Suyun altında seni yakaladım {o} 😈', 'Islak saçların omuzlarına yapışmış 💦', 'Ürperdin, sarılıyorum 🥺', 'Biri görecek diye kalbim atıyor 😳', 'Havuz bu gece bizim 🏖️'],
  'Pool Edge': ['Kenarda oturuyorsun, ben sudan sana giriyorum ahh {o} 😩', 'Su her vuruşta şapırdıyor 💦', 'Bacakların omuzlarımda 🥵', 'Taş soğuk, sen sıcaksın 😈', 'Ay ışığında parlıyorsun 🌙', 'Biri balkona çıkmasın 😳'],
  'Floating Sex': ['Suyun içinde kucağımdasın, hafif gibisin 🌊', 'Bacakların belimde, boynuma sarıldın {o} 🤍', 'Dalgalar ikimizi sallıyor ahh 😩', 'Seni taşıyorum, bırakmıyorum 😈', 'Islak dudaklarını öpüyorum 💋', 'Ayaklarımız yere değmiyor 🥵'],
  'Sunbed Doggy': ['Şezlonga eğildin, ıslak kalçan bana dönük 😈', 'Belini tutuyorum, şezlong gıcırdıyor 😳', 'Islak tenine çarpıyorum ahh {o} 🥵', 'Havlu yere düştü 😂', 'Saçını tuttum 🔥', 'Güneş doğmadan bitireceğim 😏'],
  'Poolside Blowjob': ['Kenarda oturuyorum, sen sudan bana uzanıyorsun 😈', 'Islak dudakların beni sarıyor ahh {o} 💋', 'Su damlaları saçlarından süzülüyor 💦', 'Kenarı sıkıca tutuyorum 😩', 'Gözlerin bende 👀', 'Biri gelirse suya dalacaksın 😂'],
  'Pool Creampie': ['Suyun içinde içine boşalıyorum… ahhh {o} 😩💦', 'Sana sımsıkı sarılıyorum 🤍', 'Su soğuk, için sıcacık 🥵', 'Son damlama kadar 😈', 'Ay ışığında titriyoruz 🌙', 'Kimse görmedi 🤫'],
  'Pool Cumshot': ['Kenarda geri çekilip ıslak tenine boşalıyorum ahhh 😩💦', 'Göğsünden suya süzülüyor 😳', 'Ay ışığında parlıyor 🌙', 'Hepsini sana bıraktım {o} 😈', 'Şimdi tekrar suya gireceksin 😂', 'Sana havlu uzatıp sarılıyorum 🤍'],
  'Steamy Windows': ['Öpüştükçe camlar buğulanıyor 🌫️', 'Elim dizinde, yavaşça yukarı {o} 😏', 'Radyoyu açtım, sesimiz duyulmasın 🎶', 'Cama kalp çizdin 💗', 'Arka koltuk bizi çağırıyor 😈', 'Kalbim deli gibi atıyor 😳'],
  'Front Seat Ride': ['Kucağımdasın, direksiyon sırtına batıyor 😩', 'Kornaya bastın 😂', 'Belini tutup indiriyorum ahh {o} 🥵', 'Tavan alçak, eğiliyorsun 😈', 'Koltuk gıcırdıyor 🔥', 'Camlar tamamen buğulandı 🌫️'],
  'Backseat Missionary': ['Arka koltukta üstündeyim, ayağın cama dayalı 😈', 'Araba sallanıyor ahh {o} 🥵', 'Başın kapıya çarptı, öptüm 😂', 'Dar ama yetiyor 😏', 'Camda ayak izin kalacak 😅', 'Daha hızlı 🔥'],
  'Hood Doggy': ['Kaputa eğildin, ellerin kaputta 😈', 'Ilık kaputun üstünde kalçan bana dönük ahh {o} 🥵', 'Gece rüzgârı tenimizde 🌙', 'Saçını tuttum 🔥', 'Farlar yanarsa yakalanırız 😳', 'Bacakların titriyor 😩'],
  'Backseat Blowjob': ['Kucağıma eğildin, kemerimi çözdün 😈', 'Dudakların beni sarıyor ahh {o} 💋', 'Koltuğu geri yatırdım 😏', 'Saçlarını yüzünden çekiyorum 🤍', 'Biri geçerse başını kaldırma 😂', 'Zonkluyorum, hissediyorsun 😩'],
  'Backseat Creampie': ['Arka koltukta içine boşalıyorum… ahhh {o} 😩💦', 'Sımsıkı sarılıyorum 🤍', 'Koltuk kurtuldu en azından 😂', 'Son damlama kadar 😈', 'Camları açıyorum, nefes alalım 😅', 'Titriyoruz ikimiz de 🥵'],
  'Car Cumshot': ['Son anda çekip tenine boşalıyorum ahhh 😩💦', 'Koltuklara değil, sana 😈', 'Göğsünden aşağı akıyor 😳', 'Mendil arıyoruz 😂', 'Hepsini sana bıraktım {o} 🥵', 'Sarılıp camları açıyorum 🤍'],
  'Emergency Stop': ['Kırmızı düğmeye bastın, asansör durdu 😈', 'Katlar arasında kaldık {o} 😏', 'Kamera var mı diye tavana baktım 😳', 'Aynada ikimizi görüyorum 👀', 'Teknisyen gelmeden 😂', 'Seni kendime çekiyorum 🔥'],
  'Elevator Kiss': ['Seni aynalı duvara yaslayıp öpüyorum 💋', 'Kat numaraları akıyor, bakmıyorum {o} 😏', 'Ellerim belinde 🤍', 'Nefesin kesildi 🥵', 'Kapı açılırsa ne yaparız 😳', 'Bir kat daha 😈'],
  'Elevator Quickie': ['Bacağın belimde, sırtın aynada, hızlıyım ahh {o} 😩', 'Kat göstergesine bakıyorum 😳', 'Ding gelmeden 😈', 'Ses çıkarma 🤫', 'Aynada yüzünü görüyorum 🥵', 'Sıkı tut beni 🔥'],
  'Elevator Blowjob': ['Önümde diz çöktün, gözün kat göstergesinde 😈', 'Acele et {o} 😏', 'Kamera tavanda, sırtın ona dönük 🙈', 'Derin ve hızlı ahh 😩', 'Kapı açılırsa fırlayacaksın 😂', 'Zonkluyorum 🥵'],
  'Elevator Cumshot': ['Son saniyede boşalıyorum ahhh 😩💦', 'Aynada iz kaldı 😂', 'Kapı açılıyor, toparlan {o} 😳', 'Hepsini sana bıraktım 😈', 'Kalbim duracak 🥵', 'Kimse anlamadı 🤫'],
  'Campfire Cuddle': ['Başını omzuma koydun, ateş çıtırdıyor 🔥', 'Tek battaniyenin altındayız {o} 🥰', 'Ellerini ısıtıyorum 🤍', 'Yıldızlara bakıyoruz 🌌', 'Marshmallow\'unu yaktım, özür 😂', 'Elim battaniyenin altında kaydı 😈'],
  'Sleeping Bag Spooning': ['Tek tulumdayız, arkandan sarıldım 🥰', 'Yavaşça giriyorum, çadır sallanmasın ahh {o} 😩', 'Fermuar sıkıştı 😂', 'Kulağına fısıldıyorum 😏', 'Sıcacık oldu birden 🥵', 'Komşu çadır duymasın 🤫'],
  'Tent Cowgirl': ['Üstümdesin, başın çadırın tavanına değiyor 😂', 'Fener kapalı, gölgemiz dışarıdan görünüyor mu 😳', 'Kalçanı tutuyorum ahh {o} 🥵', 'Çadır sallanıyor 😈', 'Kazıklar sökülecek 😅', 'Daha hızlı 🔥'],
  'Under The Stars': ['Battaniyede üstündeyim, yıldızlar üstümüzde 🌌', 'Gözlerinde yıldızlar yansıyor {o} 🥰', 'Yavaşça, gece uzun ahh 😩', 'Bir yıldız kaydı 🌠', 'Çimenler tenini gıdıklıyor 😂', 'Dünyada sadece ikimiz varız 💫'],
  'Camp Creampie': ['Yıldızların altında içine boşalıyorum… ahhh {o} 😩💦', 'Sımsıkı sarılıyorum 🤍', 'Gece serin, sen sıcaksın 🥵', 'Son damlama kadar 😈', 'Tulumun içinde kalalım 😏', 'Kimse duymadı 🤫'],
  'Campfire Cumshot': ['Ateşin ışığında tenine boşalıyorum ahhh 😩💦', 'Göğsünde parlıyor 🔥', 'Hepsini sana bıraktım {o} 😈', 'Derede yıkanacaksın 😂', 'Battaniyeye sarıp sarılıyorum 🤍', 'Ateş söndü, biz değil 🥵'],
  'Apron Only': ['Arkandan geldim, sadece önlük var üstünde 😏', 'İplerini parmağımla çekiyorum {o} 😈', 'Yemek yanıyor, ben de 🔥', 'Kaşıktan tattım, sonra seni 😋', 'Boynunu öpüyorum, karıştırmaya devam et 🥰', 'Tezgâhta un var, dikkat 😂'],
  'Whipped Cream': ['Göğüslerindeki kremayı yalıyorum 🍦', 'Bir damla bile bırakmıyorum {o} 😈', 'Soğuk dedin, dilimle ısıtıyorum 🥵', 'Uçlarında kaldı, temizliyorum 😋', 'Biraz da karnına sıkıyorum 😏', 'Tatlının en iyisi sensin 💋'],
  'Counter Sex': ['Tezgâha oturdun, bacakların belimde ahh {o} 😩', 'Tabaklar şıngırdıyor 😂', 'Tezgâh sağlam, sert gidiyorum 🥵', 'Buzdolabı uğulduyor, sen inliyorsun 😈', 'Un her yere bulaştı 😅', 'Akşam yemeği bekleyebilir 🔥'],
  'Counter Doggy': ['Tezgâha eğildin, önlüğün iplerini tutuyorum 😈', 'Kalçana çarpıyorum ahh {o} 🥵', 'Tencereler sallanıyor 😂', 'Saçını çekiyorum 🔥', 'Buzdolabının kapısında yansımamız 👀', 'Tatlı servisi başladı 😏'],
  'Counter Creampie': ['Tezgâhta içine boşalıyorum… ahhh {o} 😩💦', 'Sımsıkı sarılıyorum 🤍', 'Krema yerine ben 😈', 'Son damlama kadar 🥵', 'Tezgâhı silmemiz lazım 😂', 'Titriyorsun, tutuyorum 🤍'],
  'Kitchen Cumshot': ['Önlüğüne, tenine boşalıyorum ahhh 😩💦', 'Krema gibi süzülüyor 🍦', 'Hepsini sana bıraktım {o} 😈', 'Önlüğü yıkaman lazım 😂', 'Göğsünden aşağı akıyor 🥵', 'Sarılıp alnından öpüyorum 🤍'],
  'Start Recording': ['Kırmızı ışık yandı, kameraya göz kırptın 😉', 'Sadece bizim için {o} 🤫', 'Açıyı sen ayarladın 😏', 'Kameraya değil bana bak 💋', 'Heyecandan ellerim titriyor 😳', 'Kayıt sürüyor 🔴'],
  'POV Blowjob': ['Telefon elimde, gözlerin kamerada 👀', 'Ekranda ne kadar güzelsin {o} 😈', 'Telefonu titretmemeye çalışıyorum ahh 😩', 'Zoom yaptım 😂', 'Dudakların kadrajda 💋', 'Zonkluyorum, kamera da görüyor 🥵'],
  'POV Cowgirl': ['Telefonu tutuyorum, üstümde zıplıyorsun 😈', 'Ekranda her hareketin görünüyor ahh {o} 🥵', 'Göğüslerin kadrajda 😏', 'Bulanık çıkacak, hızlısın 😂', 'Kalçanı tutuyorum, kadraja girsin 🔥', 'Kayıt sürüyor 🔴'],
  'Selfie Doggy': ['Telefonu sen tutuyorsun, omzunun üstünden ikimizi çekiyorsun 🤳', 'Yüzüm de çıksın diyorsun 😏', 'Selfie bozuldu, saçını çektim 😅', 'Video moduna aldın ahh {o} 🥵', 'Kalçan kadrajda 🍑', 'Bu kimseye gitmez 🤫'],
  'Watch It Together': ['Yatakta videoyu birlikte izliyoruz 📱', 'Bu kısmında yüzünü kapattın 🙈', 'Gerçekten böyle mi yapıyoruz {o} 😂', 'Saklamaya sen karar ver 🤍', 'İzledikçe yine istedim 😈', 'Sildin, ama aklımda kaldı 😏'],
  'Camera Cumshot': ['Kameraya bakarken boşalıyorum ahhh 😩💦', 'Göğsünde, kayıtta her şey 😳', 'Hepsini sana bıraktım {o} 😈', 'Kaydı durdurdum 🔴', 'Zoom yapma dedin 😂', 'Sana sarılıyorum, kamera kapalı 🤍']
});
Object.assign(Stories.ME_HUG_LINES, {
  waterHug: {
    label: '🤗 Sarılma · Küvet / havuz',
    events: ['Bubble Bath', 'Jacuzzi Jets', 'Tub Ride', 'Tub Spooning', 'Skinny Dip', 'Floating Sex', 'Pool Edge'],
    lines: [
      'Suyun içinde sana sımsıkı sarıldım, ıslak tenin göğsüme yapıştı… ahh 😩',
      'Kollarımı beline doladım, su ikimizi taşıyor offf 🌊',
      '{gogusHis}, köpükler aramızda eriyor 🫧',
      'Islak saçlarını yüzünden çekip alnından öpüyorum {o} 🥰',
      'Arkandan sarıldım, {kalca} kalçan suyun altında bana bastırıyor ahh 🥵',
      'Sana sarıldıkça su dalgalanıyor 😮‍💨',
      'Ensene dudaklarımı bastırıyorum, tenin ılık ve ıslak 💦',
      'Bırakmıyorum seni, su soğusa bile 🤍'
    ]
  },
  carHug: {
    label: '🤗 Sarılma · Araba / asansör',
    events: ['Steamy Windows', 'Front Seat Ride', 'Backseat Missionary', 'Hood Doggy', 'Emergency Stop', 'Elevator Kiss', 'Elevator Quickie'],
    lines: [
      'Dar yerde sana sımsıkı sarıldım, nefesimiz birbirine karıştı… ahh 😩',
      'Kollarım belinde, {kalca} kalçan bana bastırıyor offf 🥵',
      '{gogusHis}, kıpırdayacak yer yok 😮‍💨',
      'Kulağına "biri görecek" diye fısıldıyorum {o} 😈',
      'Seni kendime çektim, alnımı alnına dayadım 🥰',
      'Sarılırken kalbimin sesini duyuyor musun 🔥',
      'Boynuna gömüldüm, kokun başımı döndürüyor ahh 😩',
      'Bırakmıyorum, kapı açılsa bile 🤍'
    ]
  },
  campHug: {
    label: '🤗 Sarılma · Kamp / mutfak',
    events: ['Campfire Cuddle', 'Sleeping Bag Spooning', 'Tent Cowgirl', 'Under The Stars', 'Apron Only', 'Counter Sex', 'Counter Doggy'],
    lines: [
      'Arkandan sımsıkı sarıldım, sıcacıksın… ahh 🥰',
      'Kollarımı beline doladım, {kalca} kalçan bana bastırıyor offf 🥵',
      '{gogusHis}, seni bırakmak istemiyorum 😮‍💨',
      'Boynunu öpüyorum, tenin ateş gibi {o} 🔥',
      'Sana sarıldıkça kalbim hızlanıyor ahh 😩',
      'Saçlarını yüzünden çekip alnından öpüyorum 🤍',
      'Kulağına fısıldıyorum, gülümsüyorsun 😏',
      'Sımsıkı sarılı kalıyoruz, gece uzun 🌙'
    ]
  },
  placeFinish: {
    label: '🤗 Sarılma · Mekân bitişleri',
    events: ['Tub Creampie', 'Bath Cumshot', 'Pool Creampie', 'Pool Cumshot', 'Backseat Creampie', 'Car Cumshot', 'Elevator Cumshot', 'Camp Creampie', 'Campfire Cumshot', 'Counter Creampie', 'Kitchen Cumshot', 'Camera Cumshot'],
    lines: [
      'Seni sımsıkı sardım, titreyerek boşalıyorum… ahhh 😩💦',
      'Boynuna gömüldüm, her atışta kollarım kasılıyor offf 🥵',
      'Geldi {o}, seni bırakmıyorum, sen de bana yapıştın… ahh 💦',
      '{kalca} kalçanı kavrayıp son damlaya kadar sana bastırıyorum 🔥',
      'Nefesim kesildi, alnımı omzuna dayadım 😮‍💨',
      'Bitti; bırakmadan öpüyorum, saçlarını yüzünden çekiyorum 🤍',
      'Dizlerim titriyor, seni de yanıma çekiyorum {o} 🥰',
      'Sarılı duruyoruz, sadece nefeslerimiz kalıyor 😮‍💨'
    ]
  }
});
Stories.ME_BED_SKIP.push('Bubble Bath', 'Jacuzzi Jets', 'Tub Ride', 'Tub Spooning', 'Bubble Titjob', 'Tub Creampie', 'Bath Cumshot',
  'Skinny Dip', 'Pool Edge', 'Floating Sex', 'Sunbed Doggy', 'Poolside Blowjob', 'Pool Creampie', 'Pool Cumshot',
  'Steamy Windows', 'Front Seat Ride', 'Backseat Missionary', 'Hood Doggy', 'Backseat Blowjob', 'Backseat Creampie', 'Car Cumshot',
  'Emergency Stop', 'Elevator Kiss', 'Elevator Quickie', 'Elevator Blowjob', 'Elevator Cumshot',
  'Campfire Cuddle', 'Sleeping Bag Spooning', 'Tent Cowgirl', 'Under The Stars', 'Camp Creampie', 'Campfire Cumshot',
  'Apron Only', 'Whipped Cream', 'Counter Sex', 'Counter Doggy', 'Counter Creampie', 'Kitchen Cumshot');

/* 🎭 2. set roller + 🪞 ayna: rol olayının kendisi, süren rolde pozisyon / boşalma ve sarılma satırların */
Object.assign(Stories.ME_EV_LINES, {
  'Melek – Ölümlü': [
    'Yaralı kanadını sarıyorum, tüylerin parmaklarımın arasından kayıyor {o} 🪽',
    'Halenin ışığı yüzüme vuruyor, gözlerimi kısıp sana bakıyorum ✨',
    'Elini tutuyorum; "ölümlüler hep bu kadar sıcak mı?" diye soruyorsun 🥺',
    'Beyaz tuniğinin omzu kaydı, geri çekmiyorum 😏',
    'Sana ilk öpücüğün ne olduğunu gösteriyorum 💋',
    'Kanatlarınla ikimizi sarıyorsun, dünya kayboluyor 🪶',
    '"Yukarıda bunu bilmiyorduk" diye fısıldıyorsun 😳',
    'Gökyüzüne bakıp "bu gece benimsin" diyorum {o} 😈'
  ],
  'Kaptan Kadın – Tayfa': [
    'Kamaranın kapısını çalıyorum: "Emriniz kaptanım?" ⚓',
    'Haritaların üstüne eğilmişsin, omzunun üstünden bakıyorum {o} 🗺️',
    'Kaptan şapkanı çıkarıp masaya bırakıyorsun, saçların dökülüyor 😏',
    'Gemi sallanıyor, belinden tutup düşmeni engelliyorum 🌊',
    '"Tayfa kaptana dokunmaz" diyorsun ama elimi itmiyorsun 😈',
    'Rom şişesini açıp iki kadeh dolduruyorum 🥃',
    'Pusulan masadan düştü; ikimiz de eğiliyoruz, yüzlerimiz yakın 😳',
    'Lumbozdan ay ışığı vuruyor, ceketinin düğmelerini çözüyorum {o} 🌙'
  ],
  'Kraliçe – Hizmetkâr': [
    'Tahtının önünde diz çöküyorum: "Emredin majesteleri" 👑',
    'Elini uzatıyorsun, yüzüğünü öpüyorum {o} 💍',
    'Pelerinini omuzlarından alıyorum, ensene nefesim değiyor 😏',
    'Şarap kadehini sana sunuyorum, parmaklarımız değiyor 🍷',
    '"Bakmak yasak" diyorsun; gözlerimi indirmiyorum 😈',
    'Ayakkabılarını çıkarıp ayaklarını ovuyorum 👠',
    'Tacını yavaşça çıkarıp yastığa koyuyorum 👑',
    '"Bu gece hizmetin başka olacak" diyorsun, kalbim hızlanıyor {o} 🥵'
  ],
  'Android – Komutan': [
    'Göz bandını yavaşça kaldırıyorum; gözlerin mavi mavi parlıyor {o} 🤖',
    'Ensendeki bağlantı noktasına parmağımı koyuyorum, sistemin titriyor ⚡',
    '"Komutan, işlemcim ısınıyor" diyorsun 🥵',
    'Siyah elbisenin fermuarını indiriyorum, tenin insandan farksız 🖤',
    '"Duygular yasak" diyorsun; elini göğsüme koyuyorum 😏',
    'Yeni bir emir veriyorum: "Beni öp" 💋',
    'Kılıcını yere bırakıyorsun, ilk defa silahsızsın 😳',
    'Harabelerin arasında sana sarılıyorum, sistemin "hata" veriyor {o} 😈'
  ],
  'Elf Prensesi – Şövalye': [
    'Kılıcımı önüne bırakıp diz çöküyorum: "Prensesim" 🗡️',
    'Sivri kulağının ucunu öpüyorum, ürperiyorsun {o} 🧝‍♀️',
    'Ay ışığı gümüş saçlarında parlıyor, parmaklarımı geçiriyorum 🌙',
    'Zırhımı tek tek çıkarıyorsun, "ölümlüler ne kadar sıcak" diyorsun 🔥',
    'Tapınağın sütununa yaslanıyorsun, ben yaklaşıyorum 😏',
    'Elfçe bir şey fısıldıyorsun, anlamıyorum ama anlıyorum 😈',
    'Yay ipini çözüyorum, elbisenin bağcıklarına geçiyorum 🏹',
    '"Bin yıldır kimse bana böyle bakmadı" diyorsun {o} 🥺'
  ],
  'Hostes – Yolcu': [
    'Çağrı düğmesine basıyorum; koridordan sen geliyorsun {o} ✈️',
    '"Bir isteğiniz var mı efendim?" diye eğiliyorsun, gözüm yakana kayıyor 😏',
    'Battaniyeyi dizlerime örtüyorsun, elin battaniyenin altında kalıyor 😈',
    'Fularını parmağıma doluyorum 🧣',
    'Işıklar sönük, herkes uyuyor; sadece ikimiz uyanığız 🌙',
    'Kemer işaretinin sesi geliyor, sen gülümsüyorsun 🔔',
    'Seni lavaboya doğru takip ediyorum 🤫',
    'Kırmızı rujunu bardağımda bırakıyorsun {o} 💄'
  ],
  'Ayna Karşısında': [
    'Boy aynasının önünde arkana geçiyorum, ikimizi izliyoruz {o} 🪞',
    'Aynada gözlerimiz buluşuyor, kızarıyorsun 😳',
    'Elbiseni yavaşça indiriyorum, aynadaki sen nefesini tutuyor 😏',
    'Çeneni tutup aynaya çeviriyorum: "Bak kendine" 😈',
    'Ellerim göğüslerinde, aynada ellerimi izliyorsun 👀',
    'Aynadaki yansımana göz kırpıyorum 😉',
    'Boynunu öperken aynada gözlerini kapatıyorsun 💋',
    '"Gözünü ayırma" diyorum {o} 🪞'
  ]
});
Object.assign(Stories.ME_RP_LINES, {
  fxrpmelek: {
    pos: [
      'Kanatların her vuruşta açılıp kapanıyor, tüyler etrafımıza saçılıyor… ahhh {o} 🪽',
      'Halen titreşiyor, ışığı yatağa yayılıyor ✨',
      'Saf tenine her dokunuşumda bir yemin bozuluyor 😈',
      '"Bu ne?" diye inliyorsun, ilk defa hissediyorsun 😩',
      'Göğe uzanan kanatların yatağın kenarını süpürüyor 🪶',
      'Işıl ışıl gözlerin bana bakıyor, deliriyorum 🥵',
      'Cennet bu kadar güzel değildi diyorsun {o} 😇',
      'Kanatlarını avuçlayıp seni kendime çekiyorum 🔥',
      'Melek sesin inlerken bir ilahi gibi 🎶',
      'Halen söndü söneceği, daha hızlı 😈'
    ],
    cum: [
      'İçine boşalıyorum, halen bir an parlıyor… ahhhh {o} ✨💦',
      'Kanatların titreyerek etrafımı sarıyor 🪽',
      'Saflığını tamamen benim yaptım 😈',
      'Tüyler havada süzülürken bittim 🪶',
      'Gökyüzünden yıldırım düştü sanki ⚡',
      'Yukarıdakiler duydu mu? Umurumda değil 😏',
      'Işıltılı tenine sarılıp boşalıyorum 🥵',
      'Artık sen de bir ölümlü kadar sıcaksın 🤍'
    ]
  },
  fxrpkaptan: {
    pos: [
      'Gemi sallandıkça daha derine giriyorum… ahhh kaptanım {o} ⚓',
      'Harita masasının üstündesin, pusula yere düştü 🧭',
      '"Tam yol ileri!" diye emrediyorsun, hızlanıyorum 🌊',
      'Kaptan şapkan hâlâ başında, çıkarmana izin vermiyorum 😏',
      'Dalgalar kamaraya çarpıyor, biz de çarpışıyoruz 🌊',
      'Tayfa olduğumu unuttun, emirleri ben veriyorum 😈',
      'Ceketinin düğmeleri koptu, göğüslerin hür 🥵',
      'Lumbozdan ay ışığı tenine vuruyor 🌙',
      'Rom kokulu dudaklarını öpüyorum 🥃',
      '"Fırtına geliyor" diyorsun, fırtına benim {o} ⛈️'
    ],
    cum: [
      'Fırtına koptu, içine boşalıyorum… ahhhh kaptanım {o} ⚓💦',
      'Gemi bir dalgayla sarsıldı, ben de 🌊',
      'Limana vardık 😏',
      'Kaptan şapkan yere düştü, sen titriyorsun 🥵',
      'Seyir defterine bu geceyi yaz 📜',
      'Tayfa görevini yaptı, kaptanım 😈',
      'Kamarada sadece nefeslerimiz 😩',
      'Bir rom daha, sonra bir sefer daha 🥃'
    ]
  },
  fxrpkral: {
    pos: [
      'Kraliçemin emriyle, daha derine… ahhh majesteleri {o} 👑',
      'Tahtın üstündesin, ben önünde diz çökmüş değilim artık 😈',
      'Tacın yamuldu, düzeltmiyorum 👑',
      '"Daha hızlı hizmetkâr" diye emrediyorsun 🥵',
      'Kadife pelerinin altımızda buruşuyor 🟣',
      'Kibirli bakışın her vuruşta biraz daha eriyor 😩',
      'Mücevherlerin göğüslerinde şıkırdıyor 💎',
      'Saraydakiler duymasın diye dudağını ısırıyorsun 🤫',
      'Bu gece kraliçe benim emrimde {o} 😏',
      'Yüzüğünü öptüğüm el şimdi sırtımı tırmalıyor 🔥'
    ],
    cum: [
      'Kraliçemin içine boşalıyorum… ahhhh majesteleri {o} 👑💦',
      'Hizmetimden memnun kaldınız mı? 😏',
      'Tacın yere yuvarlandı 👑',
      'Kraliyet yatağı ıslandı 😈',
      'Kibirli yüzün titriyor, elini öpüyorum 💍',
      'Varisini taşıyacaksın belki 🥵',
      'Kadife pelerine, tenine… her yere 😩',
      'Yarın da emret, majesteleri 😏'
    ]
  },
  fxrprobot: {
    pos: [
      'Sistemin aşırı ısınıyor, tenin sıcacık… ahhh {o} 🤖',
      'Gözlerin her vuruşta mavi mavi yanıp sönüyor 💙',
      '"Hata… hata…" diye inliyorsun 😩',
      'Göz bandın kaydı, bakışın artık insan gibi 👁️',
      'Ensendeki bağlantı noktasını okşuyorum, titriyorsun ⚡',
      'Siyah elbisen yırtıldı, umurunda değil 🖤',
      '"Komutan, duygu protokolü devre dışı" diyorsun 🥵',
      'Mekanik bir hassasiyetle kalçanı bana itiyorsun 😈',
      'Yeni bir emir: "Durma" {o} 😏',
      'Fanların tam güçte çalışıyor, ben de 🔥'
    ],
    cum: [
      'İçine boşalıyorum, sistemin yeniden başlıyor… ahhhh {o} 🤖💦',
      '"Görev tamamlandı" diye fısıldıyorsun 😏',
      'Gözlerin bir an karardı, sonra parladı 💙',
      'Belleğine bu anı kaydet 💾',
      'Yasak duygular artık serbest 🖤',
      'Devrelerin titriyor, sana sarılıyorum 🥵',
      'Sıcak sıvı soğutma sistemine karıştı 😆',
      'Yeni görev: bir tur daha komutanım 😈'
    ]
  },
  fxrpelf: {
    pos: [
      'Sivri kulaklarını ısırıyorum, elfçe inliyorsun… ahhh {o} 🧝‍♀️',
      'Gümüş saçların yosunların üstüne dağılmış 🌿',
      'Ay ışığında tenin parlıyor, her vuruşta titriyor 🌙',
      'Ölümsüz bedenin ilk defa böyle yoruluyor 😩',
      'Tapınağın taşları sırtını soğutuyor, ben ısıtıyorum 🔥',
      'Bacaklarını belime doluyorsun, elf çevikliğiyle 😈',
      '"Şövalyem" diye fısıldıyorsun, hızlanıyorum 🗡️',
      'Ormanın tüm sesleri sustu, bir tek senin inlemen var 🌲',
      'Bin yıllık sabrın tükendi {o} 🥵',
      'Yay gibi geriliyorsun 🏹'
    ],
    cum: [
      'İçine boşalıyorum, prensesim… ahhhh {o} 🧝‍♀️💦',
      'Ormanın çiçekleri açtı sanki 🌸',
      'Elfçe bir dua fısıldıyorsun 🌙',
      'Yeminimi bozdum, seni korumak yerine aldım 😈',
      'Gümüş saçlarına bembeyaz damlalar 🤍',
      'Ölümsüz bedenin titriyor 🥵',
      'Ay şahidimiz oldu 🌕',
      'Bin yıl sonra da bunu hatırlayacaksın 😏'
    ]
  },
  fxrphostes: {
    pos: [
      'Lavabonun daracık duvarına yasladım seni… ahhh {o} ✈️',
      'Türbülans! Her sarsıntıda daha derine 😈',
      'Üniforma eteğin beline sıyrılmış 🥵',
      'Fuların kaydı, boynunu öpüyorum 🧣',
      'Kapıyı biri çalıyor, dudağını ısırıyorsun 🤫',
      'Kırmızı rujun her yerimde 💄',
      '"Kemerinizi bağlayın" diye fısıldıyorsun 😏',
      '30 bin fit yükseklikte inliyorsun 😩',
      'Taytın yırtıldı, umurunda değil {o} 🔥',
      'Kokpitten anons geliyor, biz durmuyoruz 🔔'
    ],
    cum: [
      'İçine boşalıyorum, türbülans tam o anda… ahhhh {o} ✈️💦',
      'Mil Yüksek Kulübü\'ne hoş geldin 😏',
      'Üniformana bulaştı, iniş öncesi temizlemen lazım 😈',
      'Ruj izlerin tenimde kaldı 💄',
      'Kimse fark etmedi… sanırım 🤫',
      'İnişe geçiyoruz, ben de geçtim 😆',
      'Fularını hatıra olarak alıyorum 🧣',
      'Dönüş uçuşunda da bu koltuktayım 😈'
    ]
  },
  fxayna: {
    pos: [
      'Aynada her vuruşu izliyoruz… ahhh {o} 🪞',
      'Göğüslerin aynada sallanıyor, gözlerimi ayıramıyorum 👀',
      'Çeneni tutup yüzünü aynaya çeviriyorum: "Bak" 😈',
      'Aynadaki sen, benden daha çok inliyor 😩',
      'Nefesin aynayı buğuladı, silip devam ediyorum 💨',
      'Yansımanda yüzün kıpkırmızı 😳',
      'Aynada göz göze geliyoruz, sen kaçırmıyorsun 😏',
      'Elim boğazında, aynada kendini izliyorsun 🥵',
      'İki sen var, ikisini de istiyorum {o} 🔥',
      'Ayna titriyor, sen de 🪞'
    ],
    cum: [
      'Aynada kendini izlerken içine boşalıyorum… ahhhh {o} 🪞💦',
      'Yansımandaki ifadeye bak 😈',
      'Aynada titreyen sen 😩',
      'Damlalar aynaya da sıçradı 😆',
      'Gözünü ayırmadın, aferin 😏',
      'İkimizi izledin, beğendin mi? 👀',
      'Buğulu aynaya kalp çiziyorum 💗',
      'Yarın da aynanın önünde 🔥'
    ]
  }
});
Object.assign(Stories.ME_RP_HUG_LINES, {
  fxrpmelek: {
    pos: ['Arkandan sımsıkı sarıldım, kanatların göğsüme yaslanıyor… ahhh 🪽😩', 'Sana sarıldıkça halen titreşiyor offf ✨', 'Tüylerine yüzümü gömdüm, gökyüzü kokuyorsun… ahh 🪶', '{gogus} göğüslerini avuçladım, ilk defa böyle dokunuluyor offf 🥵', 'Kanatlarını kollarımın arasına alıp her vuruşta sıkıyorum ahhh 😈', 'Saf bedenine sarılıp yeminlerini bozuyorum offf 🔥', 'Kulağına "benimsin" diye fısıldıyorum… ahh 😇', 'Işıltılı tenin kollarımda sıcacık offf 🤍'],
    in: ['Sana sımsıkı sarılıp içine boşalıyorum; kanatların titriyor… ahhhh 🪽💦', 'Halen bir an parlayıp sönüyor, ben bırakıyorum offf ✨', 'Tüylerine gömülüp son damlaya kadar veriyorum ahh 🪶', 'Saflığını tamamen doldurdum… offf 😈', 'Boşaldıktan sonra kanatların ikimizi örtüyor… mmm 😌'],
    out: ['Son anda çıktım; bembeyaz kanatlarına fışkırıyor… ahhhh 🪽💦', 'Işıltılı sırtına boşalıyorum offf ✨', 'Tüylerin damlalarla ıslandı… ahh 🪶', 'Bitirince ensendeki halenin altını öpüyorum… mmm 😌'],
    hold: ['Sana sarılıyım, saflığın beni zorluyor; ama tutuyorum… offf 😣🪽', 'Kanatların beni gıdıklıyor, dişlerimi sıkıyorum ahh 😆', 'Halenin ışığına bakıp nefesimi tutuyorum offf ✨', 'Cennet beklesin, ben biriktiriyorum… ahh 😈']
  },
  fxrpkaptan: {
    pos: ['Arkandan sımsıkı sarıldım, gemi sallandıkça bana çarpıyorsun… ahhh ⚓😩', 'Ceketinin altından {gogus} göğüslerini avuçladım offf 🥵', 'Dalgaların ritmiyle sarılı sarılı gidip geliyoruz ahh 🌊', 'Kaptan şapkanın altından enseni öpüyorum offf 😏', 'Harita masasına yaslanmışsın, belinden sımsıkı tutuyorum ahhh 🗺️', 'Rom kokulu nefesin yüzüme vuruyor… offf 🥃', 'Emir veren sesin kollarımda inliyor ahh 😈', 'Sımsıkı sarılıyım, fırtınaya rağmen bırakmıyorum offf ⛈️'],
    in: ['Sana sımsıkı sarılıp içine boşalıyorum; gemi sarsılıyor… ahhhh ⚓💦', 'Dalga vurdu, ben de içine bıraktım offf 🌊', 'Kaptanımın derinliklerine demir attım ahh ⚓', 'Ensene gömülüp son damlaya kadar veriyorum offf 😩', 'Boşaldıktan sonra sallanan ranzada sana sarılı kalıyorum… mmm 😌'],
    out: ['Son anda çıktım; kaptan ceketine fışkırıyor… ahhhh ⚓💦', 'Kalçana boşalıyorum, gemi sallanıyor offf 🌊', 'Haritanın üstüne damladı… ahh 🗺️', 'Bitirince arkandan sarılıp enseni öpüyorum… mmm 😌'],
    hold: ['Sana sarılıyım, gemi sallandıkça zorlanıyorum; ama tutuyorum… offf 😣⚓', '"Henüz değil tayfa" dedin, dişlerimi sıkıyorum ahh 😈', 'Dalga geçene kadar bekliyorum offf 🌊', 'Fırtına dinene kadar biriktiriyorum… ahh ⛈️']
  },
  fxrpkral: {
    pos: ['Arkandan sımsıkı sarıldım, kadife pelerinin tenime sürtünüyor… ahhh 👑😩', '{gogus} göğüslerini mücevherlerinin arasından avuçladım offf 💎', 'Tacın kulağıma değiyor, ensene gömülüyorum ahh 👑', 'Kibirli bedenin kollarımda eriyor offf 🥵', 'Kulağına "majesteleri" diye fısıldıyorum, daha sıkı sarılıyorsun ahhh 😈', 'Tahtın önünde sımsıkı sarılı gidip geliyoruz offf 🔥', 'Emir veren dudakların şimdi inliyor ahh 😏', 'Hizmetkârın seni bırakmıyor offf 🤍'],
    in: ['Sana sımsıkı sarılıp içine boşalıyorum, majesteleri… ahhhh 👑💦', 'Kraliyet bedenini son damlaya kadar dolduruyorum offf 😈', 'Pelerinine gömülüp bırakıyorum ahh 🟣', 'Mücevherlerin şıkırdarken içine doluyorum offf 💎', 'Boşaldıktan sonra kraliyet yatağında sana sarılı kalıyorum… mmm 😌'],
    out: ['Son anda çıktım; kadife pelerinine fışkırıyor… ahhhh 👑💦', 'Kraliyet kalçana boşalıyorum offf 😈', 'Mücevherlerine damladı… ahh 💎', 'Bitirince arkandan sarılıp elini öpüyorum… mmm 😌'],
    hold: ['Sana sarılıyım, kraliçemin emri olmadan bırakmıyorum… offf 😣👑', '"İzin vermedim" dedin, dişlerimi sıkıyorum ahh 😈', 'Hizmetkâr sabırlı olur, biriktiriyorum offf 🤍', 'Emrini bekliyorum, majesteleri… ahh 🥵']
  },
  fxrprobot: {
    pos: ['Arkandan sımsıkı sarıldım, sistemin sıcacık… ahhh 🤖😩', 'Ensendeki bağlantı noktasını öpüyorum, titriyorsun offf ⚡', '{gogus} göğüslerini avuçladım, gözlerin mavi yanıp sönüyor ahh 💙', 'Mekanik ritimle bana çarpıyorsun offf 😈', 'Kulağına yeni bir emir fısıldıyorum… ahhh 🖤', 'Fanların hızlandı, sana daha sıkı sarılıyorum offf 🥵', '"Hata" diye inliyorsun ahh 😏', 'Duygu protokolün kollarımda çöküyor offf 🔥'],
    in: ['Sana sımsıkı sarılıp içine boşalıyorum; sistemin yeniden başlıyor… ahhhh 🤖💦', 'Gözlerin karardı, ben bıraktım offf 💙', 'Belleğine kaydederken içine doluyorum ahh 💾', 'Devrelerin titriyor, son damlaya kadar offf ⚡', 'Boşaldıktan sonra harabelerde sana sarılı kalıyorum… mmm 😌'],
    out: ['Son anda çıktım; siyah elbisene fışkırıyor… ahhhh 🖤💦', 'Sentetik tenine boşalıyorum offf 🤖', 'Bağlantı noktana damladı, kısa devre yapma… ahh ⚡', 'Bitirince ensendeki seri numarasını öpüyorum… mmm 😌'],
    hold: ['Sana sarılıyım, işlemcin ısındıkça zorlanıyorum; ama tutuyorum… offf 😣🤖', '"Komutan, bekleme modunda" dedin, dişlerimi sıkıyorum ahh 😈', 'Geri sayım bitene kadar biriktiriyorum offf ⏳', 'Sistemin aşırı ısınmasın diye yavaşlıyorum… ahh 🥵']
  },
  fxrpelf: {
    pos: ['Arkandan sımsıkı sarıldım, gümüş saçların yüzüme dökülüyor… ahhh 🧝‍♀️😩', 'Sivri kulağını ısırıyorum, elfçe inliyorsun offf 🌙', '{gogus} göğüslerini avuçladım, ölümsüz tenin titriyor ahh 🥵', 'Yosunların üstünde sarılı gidip geliyoruz offf 🌿', 'Kulağına "prensesim" diye fısıldıyorum… ahhh 😈', 'Çevik bedenin kollarımda kıvrılıyor offf 🏹', 'Ay ışığında sımsıkı sarılıyız ahh 🌕', 'Şövalyen seni bırakmıyor offf 🗡️'],
    in: ['Sana sımsıkı sarılıp içine boşalıyorum; elfçe bir şey fısıldıyorsun… ahhhh 🧝‍♀️💦', 'Gümüş saçlarına gömülüp bırakıyorum offf 🌙', 'Ölümsüz bedenini son damlaya kadar dolduruyorum ahh 😈', 'Ormanın sessizliğinde içine doluyorum offf 🌲', 'Boşaldıktan sonra yosunların üstünde sana sarılı kalıyorum… mmm 😌'],
    out: ['Son anda çıktım; ay ışığında parlayan tenine fışkırıyor… ahhhh 🌙💦', 'Gümüş saçlarına damladı offf 🤍', 'Elf elbisene boşalıyorum… ahh 🧝‍♀️', 'Bitirince sivri kulağının ucunu öpüyorum… mmm 😌'],
    hold: ['Sana sarılıyım, elf büyün beni zorluyor; ama tutuyorum… offf 😣🧝‍♀️', '"Ölümlü sabırsızdır" dedin, sana kanıtlıyorum ahh 😏', 'Ay bulutun arkasından çıkana kadar bekliyorum offf 🌙', 'Şövalye yemini gibi tutuyorum… ahh 🗡️']
  },
  fxrphostes: {
    pos: ['Arkandan sımsıkı sarıldım, üniforman tenime sürtünüyor… ahhh ✈️😩', 'Daracık lavaboda sana yapıştım offf 🚻', '{gogus} göğüslerini gömleğinin altından avuçladım ahh 🥵', 'Türbülansta sımsıkı tutuyorum seni offf 😈', 'Fularını çözüp boynunu öpüyorum… ahhh 🧣', 'Kulağına "kemerini bağla" diye fısıldıyorum offf 😏', 'Kapı çalınıyor, daha sıkı sarılıyorum ahh 🤫', 'Ruj izlerin boynumda offf 💄'],
    in: ['Sana sımsıkı sarılıp içine boşalıyorum; uçak sarsılıyor… ahhhh ✈️💦', 'Ağzını kapatıp bırakıyorum, kimse duymasın offf 🤫', 'Üniformanın altında içine doluyorum ahh 😈', 'Ensene gömülüp son damlaya kadar offf 😩', 'Boşaldıktan sonra lavaboda nefes nefese sarılıyız… mmm 😌'],
    out: ['Son anda çıktım; üniforma eteğine fışkırıyor… ahhhh ✈️💦', 'Taytına boşalıyorum offf 😈', 'Fularına damladı, sakla onu… ahh 🧣', 'Bitirince arkandan sarılıp boynunu öpüyorum… mmm 😌'],
    hold: ['Sana sarılıyım, türbülans beni zorluyor; ama tutuyorum… offf 😣✈️', 'Kemer işareti yanıyor, bekliyorum ahh 🔔', 'Kapının önündeki ayak sesleri geçene kadar duruyorum offf 🤫', 'İnişe kadar biriktiriyorum… ahh 😈']
  },
  fxayna: {
    pos: ['Arkandan sımsıkı sarıldım, aynada ikimizi izliyoruz… ahhh 🪞😩', 'Aynada {gogus} göğüslerini avuçlayan ellerimi görüyorsun offf 👀', 'Çeneni aynaya çeviriyorum, sarılı gidip geliyoruz ahh 😈', 'Yansımanda gözlerin yarı kapalı offf 🥵', 'Kulağına "bak kendine" diye fısıldıyorum… ahhh 🪞', 'Nefesimiz aynayı buğuluyor offf 💨', 'Aynada kıpkırmızı yüzünü görüyorum ahh 😳', 'Sımsıkı sarılıyız, aynada tek beden gibi offf 🔥'],
    in: ['Aynada gözlerine bakarak içine boşalıyorum… ahhhh 🪞💦', 'Yansımanın titrediğini izliyorum, ben bırakıyorum offf 😩', 'Sarılı halde son damlaya kadar, aynada her şey görünüyor ahh 👀', 'Aynadaki yüzün eriyor offf 🥵', 'Boşaldıktan sonra aynanın önünde sana sarılı kalıyorum… mmm 😌'],
    out: ['Son anda çıktım; aynada sırtına fışkırdığını izliyorsun… ahhhh 🪞💦', 'Kalçana boşalıyorum, yansımanda görüyorsun offf 😈', 'Aynaya da sıçradı… ahh 😆', 'Bitirince aynada gözlerine bakıp enseni öpüyorum… mmm 😌'],
    hold: ['Aynada kendini izleyişin beni zorluyor; ama tutuyorum… offf 😣🪞', 'Gözünü aynadan ayırma, ben dayanıyorum ahh 👀', 'Yansımana bakıp nefesimi tutuyorum offf 😮‍💨', 'Aynada sen gelene kadar biriktiriyorum… ahh 😈']
  }
});

/* 🍯🌵🍾🥛 yeni Meisove kızları: ek satırlar (çeşitlilik) */
[['Bal Kız', 'fxrpbal', [
  'Bir kaşık bal alıp dudaklarına sürüyorum, sonra öpüyorum {o} 🍯',
  'Petekten bir parça koparıp ağzına veriyorum 🐝',
  'Parmağım koluna yapıştı, ayıramıyorum 😆',
  'Yavaş yavaş akan balı göbeğinden yalıyorum 😈'], [
  'Her vuruşta bal gibi uzayıp geri geliyorsun 🍯',
  'Çarşafa yapıştın, ben de sana 😆',
  'Arı gibi vızıldıyorum kulağına, kıkırdıyorsun 🐝',
  'Bal kokun her nefeste daha yoğun {o} 😩',
  'Ellerim kalçana yapıştı, bırakamıyorum 🥵',
  'Dudakların yapış yapış, öpüşmeyi bırakamıyoruz 💋'], [
  'Bal ve krema… yeni bir tarif 🍯💦',
  'Kavanozu ağzına kadar doldurdum 😈',
  'Yapışıp kaldık, ayrılamıyoruz 😆',
  'Altın balına beyaz karıştı {o} 🤍']],
['Tekila Kız', 'fxrptekila', [
  'Göbeğine tekila döküp body shot yapıyorum {o} 🥃',
  'Sombreronu kendi başıma takıyorum, gülüyorsun 😆',
  'Seninle kantinada salsa yapıyoruz, kalçan bana sürtünüyor 💃',
  'Limon dilimini dişlerinle uzatıyorsun, alıyorum 🍋'], [
  'Bir shot daha diye inliyorsun, hızlanıyorum 🥃',
  'Mariachi müziği gibi ritmin 🎺',
  'Kalçan salsa yapar gibi dönüyor 💃',
  'Tuzlu tenin dudaklarımda {o} 🧂',
  'Çöl sıcağı gibi yanıyorsun 🌵',
  '"Ándale!" dedikçe daha hızlı 😈'], [
  'Tekila gibi bir dikişte bittim 🥃',
  'Çölün ortasında vaha oldun 🌴',
  'Ateşine krema döktüm, tısladı 🔥',
  '¡Olé! diye bağırdın {o} 😆']],
['Şampanya Kız', 'fxrpsampanya', [
  'Kadehten bir yudum alıp ağzına veriyorum {o} 🥂',
  'Pullu elbisenin askısını omzundan indiriyorum ✨',
  'Konfetiler saçına takılmış, tek tek alıyorum 🎉',
  'Şişeyi sallayıp göğüslerine köpük sıçratıyorum 😈'], [
  'Kadeh tokuşturur gibi çarpışıyoruz 🥂',
  'Pullu elbisen yatağa saçıldı ✨',
  'Konfeti yağmurunda sevişiyoruz 🎉',
  'Her vuruşta kıkır kıkır gülüyorsun 😆',
  'Köpüğün çarşaflara taşıyor {o} 🍾',
  'Yılbaşı gecesi gibi, geri sayım başladı 🎆'], [
  'Gece yarısı, havai fişekler ve ben 🎆',
  'Kadehini ağzına kadar doldurdum 🥂',
  'Pullu elbisene beyaz konfeti 😈',
  'Bir şişe daha açalım mı {o}? 🍾']],
['Süt Kız', 'fxrpsut', [
  'Sürahiden bir bardak doldurup sana uzatıyorum, sen gülüyorsun {o} 🥛',
  'İnek desenli bikininin bağcığını çözüyorum 🐄',
  'Samanların arasına uzanıyoruz 🌾',
  'Dudağının kenarındaki süt bıyığını öpüyorum 😆'], [
  'Samanlar her vuruşta etrafa saçılıyor 🌾',
  'Bikinin kaydı, göğüslerin damlıyor 🥛',
  'Sabah güneşi kremamsı tenine vuruyor ☀️',
  'Vanilya kokulu boynunu öpüyorum {o} 🍦',
  'Çiftlik evinin tahta yatağı gıcırdıyor 😈',
  'Kaymak gibi yumuşacık kalçanı sıkıyorum 🤍'], [
  'Sürahini taşırdım {o} 🥛',
  'Samanların üstünde bembeyaz bir kahvaltı 🌾',
  'Kurabiyesiz bile doydum 🍪',
  'Göğüslerinden damlayanla benimki karıştı 💦']]
].forEach(([ev, k, evL, pos, cum]) => {
  (Stories.ME_EV_LINES[ev] = Stories.ME_EV_LINES[ev] || []).push(...evL);
  const r = Stories.ME_RP_LINES[k];
  if (r) { r.pos.push(...pos); r.cum.push(...cum); }
});

/* ✨ Genshin: Yelan, Clorinde, Mavuika, Xianyun (karakter başına 2 olay; rol satırları fantKey'e göre) */
Object.assign(Stories.ME_EV_LINES, {
  'Yelan – Çayevi Sorgusu': [
    'Arka odanın kapısı arkamdan kilitleniyor, sen masanın ucunda oturuyorsun {o} 🎲',
    'Çayımı uzatıyorsun, parmağın bileğimde nabzımı sayıyor 💧',
    '"Bildiğin her şeyi anlatacaksın" diyorsun, gülümsemen tehlikeli 😏',
    'Su mavisi iplerin bileklerime dolanıyor, karşı koymuyorum 💠',
    'Kürkün omzundan kayıyor, sorgunun yönü değişiyor 😈'
  ],
  'Yelan – Zar Bahsi': [
    'Zarları avucuna bırakıyorum, "kaybeden soyunur" diyorsun 🎲',
    'Yine çift altı attın; gömleğimi çıkarıyorum {o} 😏',
    'Bileziğin şıngırdıyor, zarlar masada dönüyor 💧',
    'Son elde her şeyimi ortaya koyuyorum, sen dudağını ısırıyorsun 😈',
    'Masayı itip seni kucağıma çekiyorum, zarlar yere saçılıyor 🎲'
  ],
  'Clorinde – Düello': [
    'Boş salonda kılıcımı çekiyorum, sen şapkanı düzeltiyorsun ⚔️',
    'Kılıcının ucu çeneme dayanıyor, gözlerin sakin {o} ⚡',
    'Bir hamlede arkana geçip belini kavrıyorum 😏',
    'Şapkan yere düşüyor; "bir dileğin var" diyorsun 🎩',
    'Kılıçlar yerde, sırtın duvarda, nefesin hızlı 😈'
  ],
  'Clorinde – Masa Oyunu Gecesi': [
    'Mum ışığında zarı atıyorum, sen kural kitabının üstünden bakıyorsun 🎲',
    '"Karakterin bana yaklaşıyor" diyorsun, ben de yaklaşıyorum {o} 🕯️',
    'Zar bir geldi; ceketimi çıkarıyorum 😏',
    'Oyun yöneticisinin eldivenini dişlerimle çekiyorum 🧤',
    'Haritayı kenara itip seni masaya oturtuyorum 😈'
  ],
  'Mavuika – Zafer Gecesi': [
    'Kamp ateşinin başında zırhımı çözüyorsun {o} 🔥',
    'Yaramı öpüyorsun, "iyi dövüştün savaşçım" diyorsun ☀️',
    'Kızıl saçların ateş ışığında parlıyor, elimi geçiriyorum 😏',
    'Çadırın perdesini kapatıyorsun, kutlama sesleri dışarıda kalıyor 🥁',
    'Beni postların üstüne itip üstüme çıkıyorsun 😈'
  ],
  'Mavuika – Motor Gezintisi': [
    'Arkana atlayıp beline sarılıyorum, motor kükrüyor 🏍️',
    'Virajda sana daha sıkı yapışıyorum {o} 🔥',
    'Gözlüğünü bana takıyorsun, gülüyorsun 😎',
    'Volkanın yamacında duruyoruz, motor hâlâ sıcak ☀️',
    'Seni selenin üstüne oturtup fermuarını indiriyorum 😈'
  ],
  'Xianyun – Dağ Zirvesi': [
    'Nefes nefese zirveye varıyorum, sen çay koyuyorsun ☁️',
    'Hikâyene başlıyorsun, dudaklarına bakmaktan dinleyemiyorum {o} 😏',
    'Gözlüğünü yavaşça çıkarıyorum, susuyorsun 👓',
    'Saç tokanı çözüyorum, saçların tüy gibi dökülüyor 🕊️',
    'Bulutların üstünde seni taş masaya yaslıyorum 😈'
  ],
  'Xianyun – Yeni İcat': [
    'Atölyende masaya uzanıyorum, sen dişlileri ayarlıyorsun ⚙️',
    '"Kıpırdama, ölçüm alıyorum" diyorsun, elin göğsümde {o} 📈',
    'Mekanizma vızıldıyor, sen not alıyorsun 😏',
    'İcadını kapatıp bileğinden tutuyorum: "seni deneyeceğim" 😈',
    'Gözlüğün buğulanıyor, defterin elinden düşüyor 👓'
  ]
});
Object.assign(Stories.ME_RP_LINES, {
  fxrpyelan: {
    pos: ['Zarlar her vuruşta masada zıplıyor {o} 🎲', 'Bileziğin kulağımın dibinde şıngırdıyor 💧', 'İplerin bileklerimde, ama ritmi ben belirliyorum 😈', 'Kürkün yere düşmüş, üstündeyiz 🤍',
      'Kulağıma "itiraf et" diyorsun, inleyerek 😏', 'Kısa saçların terden alnına yapışmış 🥵', 'Seni çayevinin duvarına yaslıyorum, nefesin kesiliyor 😩', 'Gözlerin hâlâ beni okuyor, ama bulanık 💠'],
    cum: ['İçine boşalıyorum, bahsi kazandım… ahhhh {o} 🎲💦', 'İplerin gevşeyip yere düşüyor 💠', '"Bu sır bende" diye fısıldıyorsun 🤫', 'Bileziğin son kez şıngırdıyor 💧', 'Kürkünün üstüne yığılıyoruz 🤍', 'Soğukkanlı ajanın dizleri titriyor 😈']
  },
  fxrpclorinde: {
    pos: ['Her hamleme bir karşılık veriyorsun {o} ⚔️', 'Şapkan çoktan düştü, saçların dağıldı 🎩', 'Tenin elektrik gibi, dokundukça ürperiyorum ⚡', 'Eldivenli elin sırtımı çiziyor 🧤',
      'Sakin yüzün ilk kez kızarıyor 😳', 'Çizmeli bacakların belimde kilitlendi 😈', 'Seni duvara yasladım, kılıçlar ayak ucumuzda 🥵', 'Dişlerini sıkıp sesini tutuyorsun, bırakmıyorum 😩'],
    cum: ['İçine boşalıyorum, şampiyon… ahhhh {o} ⚔️💦', '"Yenildim" diyorsun, ilk kez ⚡', 'Bütün bedenin elektrik çarpmış gibi titriyor 😩', 'Şapkanı başıma takıp gülümsüyorsun 🎩', 'Alnın alnımda, nefesin kesik 🥵', 'Rövanş istiyorsun, hemen 😈']
  },
  fxrpmavuika: {
    pos: ['Kızıl saçların her vuruşta alev gibi savruluyor {o} 🔥', 'Tenin kor gibi, terliyorum ☀️', 'Üstümdesin, lider gibi sürüyorsun 😈', 'Kalçanı kavrıyorum, kasların gerilmiş 🥵',
      '"Daha sert savaşçım" diye bağırıyorsun 😩', 'Gözlüğün yastığın yanında, gözlerin gözlerimde 😎', 'Motorun selesinde seni kendime çekiyorum 🏍️', 'Göğsündeki ter ateş ışığında parlıyor 🔥'],
    cum: ['İçine boşalıyorum, ateşin beni yutuyor… ahhhh {o} 🔥💦', 'Saçların bir an alev aldı sanki ☀️', '"Bir tur daha" diyorsun, nefes bile almadan 😈', 'Sıcak tenine yığılıyorum 🥵', 'Zafer çığlığın çadırı aşıyor 🥁', 'Beni göğsüne bastırıyorsun 😌']
  },
  fxrpxianyun: {
    pos: ['Konuşmayı kestin, sadece inliyorsun {o} ☁️', 'Gözlüğün buğulandı, çıkarıp kenara koyuyorum 👓', 'Uzun saçların taş masaya yayılmış 🕊️', '"Bu adeptus…" diye başlıyorsun, bitiremiyorsun 😩',
      'Binlerce yıllık sabrın bir ölümlüde tükendi 😈', 'Bulutlar pencerenin altında, biz üstündeyiz 🥵', 'Bacakların belimde, tüy kadar hafifsin 🕊️', 'Mekanizma köşede vızıldıyor, bakan yok ⚙️'],
    cum: ['İçine boşalıyorum, adeptusum… ahhhh {o} ☁️💦', 'Turna gibi ince bir ses çıkarıyorsun 🕊️', '"Deney sonucu… olağanüstü" diye fısıldıyorsun ⚙️', 'Dağ yankılanıyor 😩', 'Başını göğsüme koyup ilk kez susuyorsun 😌', 'Tekrar istiyorsun, "bilimsel" diyorsun 😈']
  }
});
Object.assign(Stories.ME_RP_HUG_LINES, {
  fxrpyelan: {
    pos: ['Arkandan sımsıkı sarıldım, kürkün yüzüme değiyor… ahhh 🎲😩', '{gogus} göğüslerini avuçladım, bileziğin şıngırdıyor offf 💧', 'Kulağına "sorgu bitmedi" diye fısıldıyorum… ahh 😈', 'İplerin ikimizi birbirine bağladı, sarılı gidip geliyoruz offf 💠', 'Ensendeki kısa saçları öpüyorum ahh 🥵', 'Zar masasına yaslanmış sarılıyız offf 🎲'],
    in: ['Sana sımsıkı sarılıp içine boşalıyorum; nabzın avucumda… ahhhh 🎲💦', 'Ensene gömülüp bırakıyorum, sırrımız olsun offf 🤫', 'Son damlaya kadar içine doluyorum ahh 😈', 'Boşaldıktan sonra kürkünün altında sana sarılı kalıyorum… mmm 😌'],
    out: ['Son anda çıktım; açık sırtına fışkırıyor… ahhhh 💧💦', 'Kalçana boşalıyorum, zarlar yere düşüyor offf 🎲', 'Bitirince ensenden öpüyorum… mmm 😌'],
    hold: ['Sana sarılıyım, bakışın beni zorluyor; ama tutuyorum… offf 😣🎲', '"Kim önce pes edecek" dedin, dişlerimi sıkıyorum ahh 😏', 'Zar durana kadar bekliyorum offf 🎲']
  },
  fxrpclorinde: {
    pos: ['Arkandan sımsıkı sarıldım, şapkan düştü… ahhh ⚔️😩', '{gogus} göğüslerini avuçladım, nefesin bozuldu offf ⚡', 'Kulağına "teslim ol" diye fısıldıyorum… ahh 😈', 'Eldivenli ellerin ellerimin üstünde offf 🧤', 'Düello duruşun kollarımda çözülüyor ahh 🥵', 'Boynundaki teri öpüyorum offf 😳'],
    in: ['Sana sımsıkı sarılıp içine boşalıyorum; bedenin kıvılcım gibi… ahhhh ⚡💦', 'Ensene gömülüp bırakıyorum, sesini tutamıyorsun offf 😩', 'Yenilmez düellocuyu son damlaya kadar dolduruyorum ahh 😈', 'Boşaldıktan sonra sana sarılı kalıyorum, kalbin hızlı… mmm 😌'],
    out: ['Son anda çıktım; beline fışkırıyor… ahhhh ⚔️💦', 'Çoraplı bacaklarına boşalıyorum offf 😈', 'Bitirince omzunu öpüyorum… mmm 😌'],
    hold: ['Sana sarılıyım, disiplinin beni zorluyor; ama tutuyorum… offf 😣⚔️', '"İlk bırakan kaybeder" dedin, dayanıyorum ahh 😏', 'Nefesimi düelloda adım sayar gibi sayıyorum offf ⚡']
  },
  fxrpmavuika: {
    pos: ['Arkandan sımsıkı sarıldım, kızıl saçların yüzümü yakıyor… ahhh 🔥😩', '{gogus} göğüslerini avuçladım, tenin kor gibi offf ☀️', 'Kulağına "liderim" diye fısıldıyorum… ahh 😈', 'Güçlü belini kavrayıp kendime çekiyorum offf 🥵', 'Sırtındaki ter ateş ışığında parlıyor ahh 🔥', 'Motorun selesinde sana yapıştım offf 🏍️'],
    in: ['Sana sımsıkı sarılıp içine boşalıyorum; ateşin içimi yakıyor… ahhhh 🔥💦', 'Saçlarına gömülüp bırakıyorum offf ☀️', 'Son damlaya kadar veriyorum, hepsini alıyorsun ahh 😈', 'Boşaldıktan sonra sıcacık tenine sarılı kalıyorum… mmm 😌'],
    out: ['Son anda çıktım; terli sırtına fışkırıyor… ahhhh 🔥💦', 'Kalçana boşalıyorum, tenin o kadar sıcak ki offf 🥵', 'Bitirince omzundan öpüyorum… mmm 😌'],
    hold: ['Sana sarılıyım, sıcaklığın beni zorluyor; ama tutuyorum… offf 😣🔥', '"Dayan savaşçım" dedin, dişlerimi sıkıyorum ahh 😈', 'Sen "şimdi" diyene kadar bekliyorum offf ☀️']
  },
  fxrpxianyun: {
    pos: ['Arkandan sımsıkı sarıldım, uzun saçların tüy gibi… ahhh 🕊️😩', '{gogus} göğüslerini avuçladım, cümlen yarım kaldı offf ☁️', 'Kulağına "sus, adeptusum" diye fısıldıyorum… ahh 😈', 'İnce belini sarıp kendime çekiyorum offf 🥵', 'Gözlüğün burnundan kaydı, düzeltmiyorsun ahh 👓', 'Bulutlara bakan pencerede sarılıyız offf ☁️'],
    in: ['Sana sımsıkı sarılıp içine boşalıyorum; turna gibi inliyorsun… ahhhh 🕊️💦', 'Saçlarına gömülüp bırakıyorum offf ☁️', 'Binlerce yıllık bedeni son damlaya kadar dolduruyorum ahh 😈', 'Boşaldıktan sonra sana sarılı kalıyorum, hiç konuşmuyorsun… mmm 😌'],
    out: ['Son anda çıktım; ipek elbisene fışkırıyor… ahhhh ☁️💦', 'Sırtına boşalıyorum, ürperiyorsun offf 🕊️', 'Bitirince ensenden öpüyorum… mmm 😌'],
    hold: ['Sana sarılıyım, sesin beni zorluyor; ama tutuyorum… offf 😣☁️', '"Ölümlüler sabırsızdır" dedin, tersini kanıtlıyorum ahh 😏', 'Hikâyen bitene kadar bekliyorum… bitmiyor offf 😩']
  }
});
