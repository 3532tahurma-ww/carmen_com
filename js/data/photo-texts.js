/*
 * 📸 Metin fotoğraflar: sohbette karakter resim yerine anlatımlı bir "fotoğraf" atar (CarmenFans satırları gibi).
 * kinds: tür (istekte geçen kelime → tür), shots: türün kareleri (lv 1 giyinik / iç çamaşırı, 2 üstsüz / açık, 3 çıplak / açık seçik),
 * pl: karenin çekilebileceği mekanlar (yoksa türün şartına uyan her mekan),
 * places: mekan + dekor cümleleri (tags: ayna, su, dis), body: bedenine göre eklenen cümleler, lead: fotoğraftan önceki mesajı.
 * Jetonlar: {göğüs} 85B, {kalça} L beden, {saç} sarı, {saçboyu} uzun, {ten} buğday, {göz} yeşil, {vücut} kum saati, {boy} 168 cm,
 * {bacak} uzun, {bel} ince, {yer} mekan ("mutfak masasında"). Boş kalan jeton silinir.
 */
window.Stories = window.Stories || {};
Stories.PHOTO_TXT = {
  kinds: {
    ayna: { ic: '🪞', n: 'Ayna', re: 'ayna|aynada|selfie', req: 'ayna' },
    ic: { ic: '👙', n: 'İç çamaşırı', re: 'sütyen|sutyen|külot|kulot|tanga|iç çamaşır|ic camasir|jartiyer|dantel|lingerie|korse|babydoll' },
    gogus: { ic: '🍒', n: 'Göğüs', re: 'meme|göğüs|gogus|boob|tit|frikik|dekolte' },
    kalca: { ic: '🍑', n: 'Kalça', re: 'kalça|kalca|popo|göt|got|kıç|kic|ass|arkadan' },
    ciplak: { ic: '🔞', n: 'Çıplak', re: 'çıplak|ciplak|nude|soyun|üstsüz|ustsuz|hiçbir şey giymeden|kıyafetsiz' },
    vajina: { ic: '🌸', n: 'Bacak arası', re: 'amcık|amcik|vajina|pussy|bacak ara|bacaklarının ara|aşağısı|asagisi' },
    bacak: { ic: '🦵', n: 'Bacak ve ayak', re: 'bacak|ayak|çorap|corap|topuklu|külotlu çorap|file çorap' },
    dus: { ic: '🚿', n: 'Duş ve küvet', re: 'duş|dus|banyo|küvet|kuvet|ıslak|islak|köpük', req: 'su' },
    kiyafet: { ic: '👗', n: 'Kıyafet', re: 'kıyafet|kiyafet|elbise|etek|kombin|ne giydin|ne giyiyorsun|üstündeki|ustundeki' },
    yuz: { ic: '💋', n: 'Yüz ve dudak', re: 'yüz|yuz|surat|dudak|gülüş|gulus|gözlerin|gozlerin|yüzünü' }
  },
  shots: {
    ayna: [
      { lv: 1, t: 'Aynada sütyenimle poz verdim', d: 'Telefonu göğüs hizasında tuttum, sütyenimin dantelleri ekranın yarısını kaplıyor; diğer elimle saçımı ensemden topladım.' },
      { lv: 1, t: 'Boy aynasında baştan aşağı ben', d: 'Bir bacağımı hafifçe büktüm, kalçamı yana verdim; üstümde sadece bol bir tişört var, altından külotumun kenarı görünüyor.' },
      { lv: 1, t: 'Aynaya yan dönüp çektim', d: 'Yan durdum, karnımı içeri çektim; {bel} belimden kalçama inen kıvrım aynada tam ortada kaldı.' },
      { lv: 2, t: '{göğüs} göğüslerimi gösterdiğim ayna karşısında fotom', d: 'Sütyenimi yere bıraktım, bir elimle telefonu tutup diğer kolumu göğüslerimin altından geçirdim; meme uçlarım kolumun üstünden taşıyor.' },
      { lv: 2, t: 'Aynada arkamı döndüm', d: 'Omzumun üstünden aynaya baktım, tangam kalçamın arasında kaybolmuş; sırtımdaki çukura ışık düşüyor.' },
      { lv: 3, t: 'Aynada çırılçıplak, filtresiz', d: 'Hiçbir şey giymeden aynanın tam karşısına geçtim, ayaklarım omuz genişliğinde açık; telefon yüzümün yarısını kapatıyor, gerisini kapatmadım.' },
      { lv: 3, t: 'Ayna önünde dizlerimin üstünde', d: 'Aynanın önünde dizlerimin üstüne çöktüm, bacaklarımı araladım; aynada hem yüzümü hem bacaklarımın arasını görebiliyorsun.' }
    ],
    ic: [
      { lv: 1, t: 'Kırmızı jartiyerli fotom', d: 'Kırmızı dantel takımımı giydim, jartiyer askıları siyah çoraplarımın üstüne gerili; bir ayağımı sandalyeye koyup çorabımı düzeltirken çektim.' },
      { lv: 1, t: 'Yeni siyah dantel takımım', d: 'Siyah dantel sütyen ve aynı takımın tangası; dantelin arasından tenim seçiliyor, askıyı bir omzumdan kaydırdım.' },
      { lv: 1, pl: ['yatak', 'otel'], t: 'Beyaz iç çamaşırımla yatakta', d: 'Beyaz pamuklu sütyen ve külot, saf görünüyorum ama bakışım öyle değil; dizlerimi göğsüme çektim, ayak bileklerimi çaprazladım.' },
      { lv: 1, t: 'Saten babydoll altında hiçbir şey', d: 'Pembe saten babydoll giydim, kumaş tenime yapışıyor; ışığa karşı durunca altında hiçbir şey olmadığı belli oluyor.' },
      { lv: 2, t: 'Sütyenimi yarıya kadar indirdim', d: 'Sütyenimin kaplarını aşağı çektim, dantel göğüslerimin altında kaldı; {göğüs} göğüslerim yukarı itilmiş, meme uçlarım dimdik.' },
      { lv: 2, t: 'Korsem sıkı, külotum yok', d: 'Bordo korsemin bağcıklarını iyice sıktım, belim incecik oldu; altına külot giymedim, jartiyer askıları çıplak tenimde.' },
      { lv: 3, t: 'Tangamı kenara çektim', d: 'Bacaklarımı açıp oturdum, tangamın ağını iki parmağımla yana çektim; dantel ıslanmış, kumaşın altında kalan her şey kadrajda.' }
    ],
    gogus: [
      { lv: 1, t: 'Dekoltemden bir kare', d: 'Bluzumun üç düğmesini açtım, öne eğildim; {göğüs} göğüslerimin arasındaki çizgi kameranın tam ortasında.' },
      { lv: 1, t: 'Sütyenimin içinden fotom', d: 'Telefonu yukarıdan tuttum, sütyenimin içine doğru çektim; kaplar göğüslerimi zor tutuyor, dantelin kenarında tenim taşıyor.' },
      { lv: 2, t: '{göğüs} göğüslerim, sütyensiz', d: 'Sütyenimi tamamen çıkardım, kollarımı başımın arkasında birleştirdim; göğüslerim yukarı kalktı, meme uçlarım soğuktan sertleşmiş.' },
      { lv: 2, t: 'Ellerimle kapattım ama tam değil', d: 'Çıplak göğüslerimi avuçlarımla kapatmaya çalıştım, parmaklarımın arasından meme uçlarım görünüyor; dudağımı ısırıyorum.' },
      { lv: 2, t: 'Islak tişört, altı çıplak', d: 'Beyaz tişörtümü bardaktaki suyla ıslattım; kumaş göğüslerime yapıştı, meme uçlarımın rengi ve şekli tamamen belli.' },
      { lv: 3, t: 'Göğüslerimi yağladım', d: 'Göğüslerime bebek yağı döktüm, avuçlarımla aşağıdan yukarı sıvazladım; ışıkta parlıyorlar, meme uçlarım parmaklarımın arasından kayıyor.' },
      { lv: 3, t: 'İki elimle sıkıp kameraya uzattım', d: 'Göğüslerimi iki yandan birleştirip kameraya doğru kaldırdım, arasına bir şey koysan kaybolur; meme uçlarımı başparmaklarımla sıkıştırdım.' }
    ],
    kalca: [
      { lv: 1, t: 'Taytımın arkasından', d: 'Dar taytımla arkamı döndüm, hafifçe eğildim; kumaş kalçama yapıştı, dikiş tam ortadan geçiyor.' },
      { lv: 1, t: 'Eteğimi biraz kaldırdım', d: 'Kısa eteğimin arkasını iki parmakla kaldırdım, kalçamın alt kıvrımı göründü; külotum hâlâ yerinde.' },
      { lv: 2, pl: ['yatak', 'salon', 'otel', 'somine'], t: '{kalça} kalçam, tangayla', d: 'Yüzüstü uzandım, karnımın altına bir yastık koydum; kalçam havada, tangam iyice içine gömülmüş.' },
      { lv: 2, t: 'Şaplağın izi kalçamda', d: 'Kendi kalçama iki şaplak attım, kızarıklığı çektim; beş parmağımın izi tek tek seçiliyor, tangam kenarda.' },
      { lv: 3, t: 'Kalçamı iki elimle araladım', d: 'Dört ayak üstündeyim, iki elimle kalçamı açtım; arkam da önüm de kadrajda, utanmadım.' },
      { lv: 3, t: 'Çırılçıplak arkadan', d: 'Hiçbir şey giymeden arkamı döndüm, bir dizimi yükseğe koydum; kalçamın arasından bacaklarımın arası görünüyor.' }
    ],
    ciplak: [
      { lv: 2, pl: ['yatak', 'otel'], t: 'Çarşafın altında çıplağım', d: 'İnce beyaz çarşafa sarındım, kumaş göğüslerimin üstünden kaydı; bir bacağım tamamen dışarıda, gerisini çarşafın şeklinden tahmin et.' },
      { lv: 2, t: 'Sadece kollarım ve bacaklarımla örtündüm', d: 'Çıplak oturdum, dizlerimi göğsüme çektim, kollarımı dizlerime doladım; her şey gizli ama hiçbir şey giymediğim apaçık.' },
      { lv: 3, t: '{yer} çıplak fotom', d: 'Üstümde tek bir parça yok; ayaklarımı yere bastım, ellerimi iki yana bıraktım; saklamadım, saklamak da istemedim.' },
      { lv: 3, t: 'Baştan aşağı, hiçbir şey saklamadan', d: 'Telefonu karşıya yasladım, zamanlayıcıyla geri çekildim; {boy} boyumun tamamı kadrajda, ayak parmaklarımdan saçlarıma kadar çırılçıplak.' },
      { lv: 3, pl: ['yatak', 'salon', 'otel', 'somine', 'mutfak'], t: 'Sırtüstü, bacaklarım açık', d: 'Sırtüstü uzandım, bir kolumu başımın üstüne attım, bacaklarımı yavaşça araladım; kamera tavandan bakıyormuş gibi tuttum.' }
    ],
    vajina: [
      { lv: 3, t: 'Bacaklarımın arası, yakından', d: 'Bacaklarımı açıp telefonu iyice yaklaştırdım; dudaklarım ıslak, parmaklarımla biraz araladım.' },
      { lv: 3, t: 'İki parmağım içimde', d: 'Bir dizimi kaldırdım, iki parmağımı içime soktum, başparmağım klitorisimde; çekerken elim titredi.' },
      { lv: 3, t: 'Külotum dizlerimde', d: 'Külotumu dizlerime kadar indirdim, bacaklarımı külotun gerdiği kadar açtım; kumaşın ortasındaki ıslaklık da kadrajda.' }
    ],
    bacak: [
      { lv: 1, t: 'Bacak bacak üstüne', d: 'Kısa elbisemle bacak bacak üstüne attım, eteğim uyluğumun yarısına kaydı; {bacak} bacaklarım kadrajın tamamını kaplıyor.' },
      { lv: 1, t: 'File çoraplarım ve topuklularım', d: 'Siyah file çorap ve rugan topuklular; ayaklarımı öne uzattım, çorabın ağları dizlerimde geriliyor.' },
      { lv: 1, t: 'Yeni ojem ve çıplak ayaklarım', d: 'Ayaklarımı kameraya uzattım, ayak parmaklarımı kıvırdım; kırmızı ojem yeni sürüldü, tabanlarımda losyon parlıyor.' },
      { lv: 2, t: 'Çoraplarımı tek tek çıkarırken', d: 'Bir çorabımı dizime kadar sıyırdım, diğeri yerinde; eteğim belime toplanmış, külotum görünüyor.' }
    ],
    dus: [
      { lv: 1, pl: ['banyo', 'dus'], t: 'Duştan yeni çıktım', d: 'Havluyu göğüslerimin üstünde sıkıştırdım, saçlarımdan omuzlarıma su damlıyor; ayna buğulu, yüzümü zar zor seçiyorsun.' },
      { lv: 2, pl: ['dus'], t: 'Duş camına yaslandım', d: 'Göğüslerimi buğulu duş camına bastırdım, camda iki yuvarlak iz kaldı; arkamdan sıcak su akıyor.' },
      { lv: 2, pl: ['kuvet'], t: 'Köpüğün arasından', d: 'Küvette köpüklerin arasından sadece göğüslerimin üstü ve bir bacağım çıkıyor; köpük meme uçlarımın tam sınırında.' },
      { lv: 3, pl: ['dus'], t: 'Suyu bacaklarımın arasına tuttum', d: 'Duş başlığını çıkardım, suyu bacaklarımın arasına tuttum; dizlerim büküldü, bir elimle duvara tutundum.' },
      { lv: 3, pl: ['dus'], t: 'Köpüklü, çıplak, kalçam sana dönük', d: 'Duşta arkamı döndüm, kalçamı köpükledim; köpük bacaklarımdan aşağı süzülüyor, iki elimle kalçamı araladım.' }
    ],
    kiyafet: [
      { lv: 1, t: 'Bugünkü kombinim', d: 'Dar kot, kısa bir bluz ve göbeğim açıkta; ellerimi arka ceplerime soktum, kalçamı biraz yana verdim.' },
      { lv: 1, t: 'Kısa siyah elbisem', d: 'Askılı kısa siyah elbise; altında sütyen yok, askı inceliğinden belli. Eteği uyluğumun ortasında bitiyor.' },
      { lv: 1, t: 'Senin gömleğini giydim', d: 'Sadece senin büyük beyaz gömleğin; düğmelerin yarısı açık, kollarını kıvırdım, altında külotum var mı yok mu sen bul.' },
      { lv: 2, t: 'Fermuarımı yarıya kadar açtım', d: 'Dar elbisemin arka fermuarını yarıya kadar indirdim, elbise omuzlarımdan kaydı; sütyensiz sırtım ve göğsümün yanı açıkta.' }
    ],
    yuz: [
      { lv: 1, t: 'Dudaklarımı ısırırken', d: 'Yakın çekim: {göz} gözlerim kamerada, alt dudağımı dişlerimin arasına aldım; rujum yeni sürüldü.' },
      { lv: 1, pl: ['yatak', 'otel'], t: 'Uyanır uyanmaz', d: 'Makyajsız, {saç} saçlarım yastığa dağılmış; yorganı burnuma kadar çektim, sadece gözlerim gülüyor.' },
      { lv: 2, t: 'Dilimi çıkardım', d: 'Ağzımı açıp dilimi çıkardım, gözlerim yukarı bakıyor; dudaklarımın kenarından tükürüğüm parlıyor, aklımdakini tahmin et.' }
    ]
  },
  // 🏠 mekanlar: at = "… mutfak masasında", d = dekor; tags: ayna (aynası var), su (ıslak), dis (dışarı / riskli)
  places: [
    { id: 'salon', ic: '🛋️', n: 'Salon kanepesi', at: 'salonumdaki kanepede', d: ['Salonumdaki gri keten kanepedeyim; arkada kitaplık, sehpada yarım kalmış bir kadeh şarap, perdeler yarı kapalı.', 'Salonda koyu yeşil kadife kanepenin üstündeyim; yerde kalın bir halı, televizyon kapalı, tek ışık abajurdan.'] },
    { id: 'mutfak', ic: '🍳', n: 'Mutfak masası', at: 'mutfak masasının üstünde', d: ['Mutfak masasının üstüne oturdum; ahşap masa soğuk, yanımda kahve kupası ve dağılmış kahvaltı tabakları, pencereden sabah ışığı vuruyor.', 'Mutfakta, mermer desenli masanın üstündeyim; arkada asılı tavalar, tezgâhta yarım kesilmiş bir limon.'] },
    { id: 'tezgah', ic: '🔪', n: 'Mutfak tezgâhı', at: 'mutfak tezgâhında', d: ['Mutfak tezgâhına çıkıp oturdum; beyaz fayanslar, yanımda kaynamayı bekleyen çaydanlık, buzdolabında mıknatıslar.'] },
    { id: 'yatak', ic: '🛏️', n: 'Yatak odası', at: 'yatağımda', d: ['Yatak odamdayım; beyaz nevresimler dağınık, komodinde tek bir lamba yanıyor, perdeden sokak ışığı süzülüyor.', 'Yatağımın ortasındayım; saten çarşaf, başucunda yastık yığını, duvarda loş bir şerit led.'] },
    { id: 'boyayna', ic: '🪞', n: 'Boy aynası', at: 'yatak odamdaki boy aynasının karşısında', tags: ['ayna'], d: ['Yatak odamdaki boy aynasının karşısındayım; arkada dağınık yatak, sandalyeye atılmış kıyafetler, tavandan sarı bir ışık.', 'Dolabımın kapağındaki boy aynasının önündeyim; arkamda askıda elbiseler, yerde çıkarılmış topuklular.'] },
    { id: 'banyo', ic: '🧼', n: 'Banyo aynası', at: 'banyo aynasının önünde', tags: ['ayna'], d: ['Banyodayım; lavabonun üstünde parfüm şişeleri ve rujlar, ayna kenarları buğulu, beyaz fayanslarda damlalar.'] },
    { id: 'dus', ic: '🚿', n: 'Duş', at: 'duşta', tags: ['su'], d: ['Cam duşakabinin içindeyim; sıcak su açık, cam buğulanmış, raflarda şampuan ve vücut köpüğü.'] },
    { id: 'kuvet', ic: '🛁', n: 'Küvet', at: 'küvette', tags: ['su'], d: ['Köpüklü küvetteyim; kenarda mumlar yanıyor, bir kadeh şarap fayansın üstünde, su ılık.'] },
    { id: 'balkon', ic: '🌇', n: 'Balkon', at: 'balkonda', tags: ['dis'], d: ['Balkondayım; karşı apartmanın ışıkları yanıyor, saksılardaki sardunyalar arkamda, rüzgâr tenimi ürpertiyor.'] },
    { id: 'pencere', ic: '🪟', n: 'Pencere önü', at: 'pencerenin önünde', d: ['Salon penceresinin önündeyim; tül perde arkamda, gün batımı tenime turuncu bir ışık vuruyor, perdeyi kapatmadım.'] },
    { id: 'somine', ic: '🔥', n: 'Şömine önü', at: 'şöminenin önündeki halıda', d: ['Şöminenin önündeki yumuşak beyaz halıdayım; ateşin ışığı tenimde titriyor, yanımda bir battaniye ve sıcak çikolata.'] },
    { id: 'masa', ic: '💻', n: 'Çalışma masası', at: 'çalışma masamda', d: ['Çalışma masamdayım; laptop açık, kenarda kalem kutusu ve post-it\'ler, masa lambasının ışığı sadece bana düşüyor.'] },
    { id: 'gardirop', ic: '👗', n: 'Giyinme köşesi', at: 'dolabımın önünde', tags: ['ayna'], d: ['Dolabımın önündeyim; kapaklar açık, askılarda elbiseler, yerde denenip bırakılmış iç çamaşırları.'] },
    { id: 'koridor', ic: '🚪', n: 'Koridor', at: 'koridorda, kapının arkasında', d: ['Evin koridorundayım; giriş kapısının hemen arkası, askıda montlar, ayakkabılar dağınık; biri zili çalsa…'] },
    { id: 'araba', ic: '🚗', n: 'Arabanın arka koltuğu', at: 'arabanın arka koltuğunda', tags: ['dis'], d: ['Arabamın arka koltuğundayım; camlar hafif buğulu, otoparkın floresan ışıkları içeri vuruyor, deri koltuk tenime yapışıyor.'] },
    { id: 'otel', ic: '🏨', n: 'Otel odası', at: 'otel odasında', tags: ['ayna'], d: ['Otel odasındayım; kocaman beyaz yatak, pencereden şehrin ışıkları, kapıda "Rahatsız etmeyin" kartı asılı.'] },
    { id: 'soyunma', ic: '🏋️', n: 'Spor salonu soyunma odası', at: 'spor salonunun soyunma odasında', tags: ['ayna', 'dis'], d: ['Spor salonunun soyunma odasındayım; dolapların kapakları metal, bank ıslak, içeriden duş sesi geliyor.'] }
  ],
  // 🧬 bedenine göre eklenen cümle (türe göre): big / small / mid; anahtar türün kendisi
  body: {
    gogus: { big: ['Göğüslerim avucuma sığmıyor, aralarındaki gölge kadrajın yarısını kaplıyor.', 'Sütyensiz olunca göğüslerim ağırlığıyla hafifçe yana düşüyor, alttaki kıvrımları bile belli.'],
      small: ['Küçük göğüslerim tek avucuma sığıyor, meme uçlarım minicik ve dimdik.', 'Göğüslerim küçük ama dik; sütyen giymeye pek gerek duymuyorum zaten.'],
      mid: ['Göğüslerim tam avucumu dolduruyor, yuvarlak ve dik duruyorlar.'] },
    kalca: { big: ['Kalçam kadraja sığmadı, kenarları ekrandan taşıyor.', 'Kalçam o kadar dolgun ki tangam aradan hiç görünmüyor.'],
      small: ['Küçük, sıkı kalçam; iki avucuna tam oturur.'],
      mid: ['Kalçam yuvarlak ve sıkı, belimden keskin bir kıvrımla iniyor.'] },
    tall: ['{boy} boyumla bacaklarım kadraja zor sığdı.'],
    short: ['Minyonum, {boy}; telefonu yukarıdan tutunca daha da küçük görünüyorum.'],
    hair: ['{saç} saçlarım omuzlarımdan göğüslerime dökülüyor.', '{saç} saçlarım dağınık, birkaç tutam yüzüme düşmüş.'],
    skin: ['{ten} tenim ışıkta parlıyor, tek bir bikini izi yok.', '{ten} tenimde soğuktan küçük ürpertiler var.'],
    marks: { 'Çil': 'Çillerim omuzlarımdan göğsüme kadar iniyor, yakından say.', 'Dövme': 'Kasığımın hemen üstündeki dövmem de kadrajda.', 'Göbek piercing': 'Göbek piercingim ışıkta parlıyor.', 'Meme piercing': 'Meme piercinglerim sertleşmiş uçlarımda parlıyor.', 'Güzellik beni': 'Güzellik benim de kadrajda, bulabilirsen.', 'Gözlük': 'Gözlüklerimi çıkarmadım, üstümde başka bir şey olmasa da.', 'Gamze': 'Gülünce gamzem çıktı, onu da yakaladım.' }
  },
  // 💬 fotoğraftan önceki mesajı; {ad} = senin adın / hitabın. shy / bold / warm kişilik grupları, def herkes
  lead: {
    ask: { def: ['Al bakalım 📸', 'Tamam, ama sadece senin için 😏', 'Bekle, ışığı ayarlayayım… şimdi 📸', 'Şu an çektim, sıcacık 🔥'],
      shy: ['Ş-şey… tamam ama kimseye gösterme 🙈', 'Elim titredi çekerken, fazla bakma 😳', 'Bunu sana atıyorum diye inanamıyorum 🙈'],
      bold: ['İstediğin buysa, al 😈', 'Sadece bunu mu? Kolay 💅', 'Bak ama dokunamazsın… henüz 😏'],
      warm: ['Senin için çektim, beğen lütfen 💗', 'Seni düşünerek çektim 🥰', 'Al, yanında olamadığım için 💌'] },
    soft: { def: ['O kadarı için biraz erken {ad} 😌 Ama şunu alabilirsin:', 'Henüz o kadar değil… şimdilik bununla idare et 😏', 'Önce biraz daha yakınlaşalım; şimdilik bu 🤭'],
      shy: ['O-o kadarı olmaz şimdilik 🙈 Ama bak, bunu çektim…', 'Utanırım… daha hafif bir tane atsam? 😳'],
      bold: ['Hak etmen lazım onu 😈 Şimdilik bu kadar.', 'Biraz daha uğraş, sonra bakarız 💅 Al bu sana yeter.'],
      warm: ['Sana güveniyorum ama biraz zaman ver 💗 Şunu al şimdilik.'] },
    surprise: { def: ['Sürpriz mi istedin? 😏', 'Gözlerini kapat… tamam aç 🎁', 'Bunu beklemiyordun bence 😈'],
      shy: ['Sürpriz… ş-şey, bu oldu 🙈', 'Çok düşündüm, sonunda bunu çektim 😳'],
      bold: ['Sürprizin hazır, nefesini tut 😈', 'Beni şaşırtacağını sanma, ben seni şaşırtırım 💅'],
      warm: ['Sana küçük bir hediye 🎁💗', 'Günün güzel geçsin diye 🥰'] },
    praise: { def: ['Öyle mi diyorsun? Bir de buna bak 😏', 'İltifatın için teşekkür hediyesi 📸', 'O zaman bunu da görmelisin 😌'],
      shy: ['Gerçekten mi? 🙈 O zaman… bunu da atayım', 'Kızardım… al bakalım 😳'],
      bold: ['Biliyorum 💅 Kanıtı da burada', 'Daha görmedin ki 😈'],
      warm: ['Çok tatlısın 💗 Bu senin için', 'Günümü güzelleştirdin, ben de seninkini 🥰'] },
    spont: { def: ['Seni düşündüm, dayanamadım 📸', 'Sıkıldım… bak ne yaptım 😏', 'Bu sana gitsin diye çektim 🔥'],
      shy: ['Sormadan attım, kızma 🙈', 'Bunu göndermeyi üç kere sildim, dördüncüde attım 😳'],
      bold: ['Hediyen geldi, teşekkür etmeyi unutma 😈', 'Bugün kendimi çok beğendim, sen de beğen 💅'],
      warm: ['Seni özledim, bir parçamı yolluyorum 💗', 'Aklıma geldin, sana bir kare 🥰'] }
  }
};
