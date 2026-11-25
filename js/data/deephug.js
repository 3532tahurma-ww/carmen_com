/*
 * 🫂 DeepHugging: daha etkili / betimlemeli mesajlar üreten yuvalı kalıplar (site #/deephug, sohbet ⋮ → 🫂 Derin mesajlar).
 * K: kalıplar · side 'me' (senin ağzından) / 'her' (karakterin ağzından) · ph: fp ön sevişme / pos seks / cum boşalma / af sonrası
 * sp (yalnız cum): in içine · out dışarı (ten / göğüs / kalça) · oral ağız · th: tema (TH) · t: şablonlar
 * Şablonda {yuva} → S[yuva] (bir mesajda aynı yuvadan tekrar yok); {o} onun adı, {sen} hitap, {gogus} {kalca} {gogusHis} {kalcaHis} bedenine göre, {saat} dünya saati.
 * Sadece Türkçe (EN sürümü yok).
 */
window.Stories = window.Stories || {};

Stories.DH = {
  PH: { fp: '👅 Ön sevişme', pos: '🔥 Seks', cum: '💦 Boşalma', af: '🌙 Sonrası' },
  SP: { in: '🍑 İçine', out: '🌊 Dışarı', oral: '👄 Ağza' },
  TH: {
    betim: ['🎨', 'Betimleme', 'Duyular: ten, koku, ses, sıcaklık'],
    akis: ['💦', 'Boşalma akışı', 'Atım atım akış, sıcaklık, dolma, taşma'],
    his: ['💗', 'Hisler', 'Titreme, nefes, kasılma, baş dönmesi'],
    sarilma: ['🫂', 'Sımsıkı sarılıp boşalma', 'Kollar kilitli, aramızda nefes bile yok'],
    dalga: ['🌊', 'Boşaldıkça sarılma', 'Her atımda sarılma bir kat daha sıkılaşır'],
    yakin: ['🕯️', 'Yakınlık', 'Sonrası: ter, fısıltı, birlikte soluklanma']
  },

  S: {
    /* ── ortak betimleme ── */
    dokunus: ['parmaklarım belinin kıvrımında yavaşça geziniyor', 'avuçlarım sırtından kalçasına doğru ağır ağır iniyor', 'dudaklarım boynunun en ince yerine değiyor',
      'başparmağım alt dudağının üstünde duruyor', 'ellerim {kalca} kalçasını sıkıca kavrıyor', 'göğsümü sırtına yaslayıp bütün tenimle ona değiyorum',
      'parmak uçlarım omurgası boyunca bir bir aşağı sayıyor', 'avucumu {gogus} göğsünün altına koyup ağırlığını hissediyorum', 'burnumu saçlarına gömüp yavaşça soluyorum',
      'dilim kulak memesinin kıvrımını izliyor', 'iç bacağında parmaklarım daireler çiziyor', 'boynundaki nabzın atışını dudaklarımla sayıyorum'],
    duyu: ['teninin sıcaklığı avuçlarıma işliyor', 'saçlarındaki şampuan kokusu başımı döndürüyor', 'boğazından kaçan küçük inilti kulağımda yankılanıyor',
      'teni tuzlu ve sıcak, dudaklarımda kalıyor', 'nefesi boynuma kesik kesik çarpıyor', 'kalbi göğsüme vuruyor, benimkiyle aynı hızda',
      'ipek gibi teni parmaklarımın altında ürperiyor', 'teninde ter damlaları ışığa yakalanıyor', 'her dokunuşta tüyleri diken diken oluyor',
      'parfümüyle terinin karışımı odaya yayılıyor', 'dudakları yumuşacık, biraz da titrek'],
    nefes: ['nefesim boğazımda düğümleniyor', 'göğsüm hızla inip kalkıyor', 'soluğum kulağına sıcak sıcak dökülüyor', 'nefes almayı unutuyorum bir an',
      'ağzımdan yarım bir inilti kaçıyor', 'kesik kesik soluyorum, ciğerlerim yetmiyor'],
    an: ['{saat} oda sadece ikimizin sesiyle dolu', 'zaman yavaşlıyor, saniyeler uzuyor', 'dünyada başka hiçbir şey kalmıyor', '{saat} perdelerden sızan ışık tenine düşüyor',
      'çarşafların hışırtısı, nefeslerimiz ve başka hiçbir şey', 'aramızdaki havanın bile ısındığını hissediyorum'],
    bakis: ['gözlerimi gözlerinden ayıramıyorum', 'kirpiklerinin arasından bana bakıyor', 'gözbebekleri büyümüş, bakışı bulanık', 'yanakları al al, dudakları aralık',
      'bakışlarımız kilitleniyor, kaçmıyor'],
    ritim: ['yavaş, derin ve kararlı bir ritimle', 'her vuruşta biraz daha derine', 'önce ağır ağır, sonra durdurulamaz bir tempoyla', 'kalçalarımız aynı ritimde buluşuyor',
      'her gidiş gelişte içi beni biraz daha sıkıyor', 'ıslak teninin sesi odayı dolduruyor', 'sonuna kadar çekip yavaşça yeniden gömülüyorum'],
    iceri: ['sıcacık ve kaygan içi beni sarıyor', 'içi bana tam oturuyor, santim santim', 'her santimde içinin daraldığını hissediyorum', 'derinlerinde onun kalp atışını duyuyorum sanki',
      'beni içine çeker gibi kasılıyor'],

    /* ── 💦 boşalma akışı (senin) ── */
    yaklas: ['karnımın altında bir düğüm sıkılaşıyor', 'belimden yukarı bir sıcaklık tırmanıyor', 'durmaya çalışıyorum ama artık geri dönüş yok', 'bütün bedenim tek bir noktaya toplanıyor',
      'dizlerimin bağı çözülmek üzere', 'kasıklarımda bir baraj taşmak üzere'],
    akisIc: ['ilk dalga ucumdan fışkırıp en derinine çarpıyor', 'her kasılmada sıcak bir atım daha içine boşalıyor', 'dölüm nabız gibi, atım atım derinlerine akıyor',
      'kalın, sıcak akış onu içten dolduruyor', 'bir atım, bir atım daha… her biri öncekinden derine', 'sıcaklığım en dibinde toplanıp yayılıyor',
      'zonklayarak boşalıyorum, her zonklamada içi beni biraz daha sağıyor', 'içi doldukça sıcaklık aramızdan sızmaya başlıyor', 'son atımlar daha yavaş ama daha ağır geliyor',
      'durmuyor; ikinci, üçüncü, dördüncü atım ardı ardına içine dökülüyor', 'en derinde kalıp son damlaya kadar akıtıyorum', 'taşan döl kalçalarından çarşafa süzülüyor'],
    akisDis: ['sıcak şeritler {yer} üstüne çizgi çizgi düşüyor', 'ilk atım {yer} üstüne sıcacık yayılıyor', 'her zonklamada bir şerit daha teninde parlıyor',
      'dölüm teninde ağır ağır aşağı süzülüyor', 'beyaz damlalar {yer} kıvrımında toplanıyor', 'atım atım boşalıyorum, teni sıcaklığımla kaplanıyor',
      'son damlalar ucumdan tenine damlıyor', 'teninden kayan sıcaklık çarşafa kadar iniyor'],
    akisAgiz: ['ilk atım dilinin üstüne sıcacık doluyor', 'dudaklarını sıkıca kapatıp her atımı içine alıyor', 'boğazı her yudumda kıpırdıyor', 'atım atım ağzını dolduruyorum',
      'dudaklarının kenarından bir damla taşıyor', 'son damlayı da emerek alıyor'],
    hisMe: ['belimden enseme elektrik gibi bir titreme yayılıyor', 'dizlerim çözülüyor, ayakta zor duruyorum', 'gözlerimin önü kararıyor, sadece onun sıcaklığı kalıyor',
      'boğazımdan derin, kesik bir inilti kopuyor', 'her atımda bütün kaslarım kasılıp gevşiyor', 'kalbim kulaklarımda gümbürdüyor', 'başım dönüyor, dünya bir an duruyor',
      'parmak uçlarıma kadar karıncalanıyorum', 'kendimi bırakıyorum, bütün ağırlığımla', 'tüm bedenim titriyor, duramıyorum',
      'zevkten gözlerim kararıyor', 'zevkten ellerim titriyor', 'zevkten bacaklarım titriyor', 'zevkten nefesim kesiliyor', 'her atımda zevkten titriyorum',
      'zevkten başım dönüyor, kendimi kaybediyorum', 'zevkten dizlerim boşalıyor'],
    zevkMe: ['her sokuşumda zevkten titriyorum', 'zevkten gözlerim kararıyor', 'zevkten ellerim titriyor, kalçasını zor tutuyorum', 'zevkten bacaklarım titriyor',
      'her gidiş gelişte zevkten inliyorum', 'zevkten nefesim kesik kesik', 'zevkten kendimi kaybediyorum', 'her vuruşta zevk belimden enseme vuruyor',
      'zevkten dişlerimi sıkıyorum', 'zevkten tüylerim diken diken'],

    /* ── 🗣️ sesler / inleme / çığlık ── */
    ses: ['ahhh', 'offff', 'ohhh', 'ahh ahh', 'ufff', 'of of of', 'aahhh', 'mmmh', 'offf offf'],
    inle: ['inliyorum, kendimi tutamıyorum', 'boğazımdan derin bir inilti kopuyor', 'hırlar gibi inliyorum', 'kendimi tutamayıp bağırıyorum', 'adını inleyerek söylüyorum',
      'dişlerimin arasından inliyorum', 'zevkten bağırıyorum, sesim duvarlarda yankılanıyor'],
    onunSes: ['{o} zevkten çığlık atıyor', '{o} inliyor, sesi odayı dolduruyor', '"Ahhh!" diye bağırıyor {o}', '{o} yastığa gömülüp çığlık atıyor', '{o} her vuruşta "ah ah ah" diye inliyor',
      '{o} kesik kesik inliyor, sesi titriyor', '{o} zevkten çığlık çığlığa', '{o} adımı bağırıyor'],

    /* ── 🍆 aletin hissi (boyuttan bağımsız) ── */
    aletHis: ['her sürtüşümde daha çok sertleşiyor', 'damarlarım patlayacak kadar şişti', 'aletim kazık gibi oldu, zonkluyor', 'taş gibi sertleşti, sızlıyor', 'ucumdan damla damla akıyor',
      'her dokunuşunda aletim seğiriyor', 'aletim zonklaya zonklaya kabarıyor', 'öyle sertim ki acıyor', 'kafası şişip kıpkırmızı oldu', 'damarları kabarmış, avucunda atıyor'],
    aletCum: ['aletim içinde zonklayarak kabarıyor', 'damarlarım şişip her atımda seğiriyor', 'kazık gibi aletim her atımda bir kez daha zıplıyor', 'aletim son damlaya kadar zonkluyor'],

    /* ── 🍆 Dick Size'a göre (ME_DICK.size: small / mid / big / huge) ── */
    aletVur: {
      small: ['küçük ama taş gibi aletimle her vuruşta en hassas yerine sürtüyorum', 'kısa ama sert vuruşlarla {gogus} memelerin titriyor', 'sert küçük aletim durmadan içinde gidip geliyor',
        'küçük aletim hızlı hızlı gidip geliyor, kalçan her vuruşta titriyor'],
      mid: ['her vuruşumda {gogus} memelerin sallanıyor', 'aletim içinde tam yerini buluyor, her sokuşta kalçan titriyor', 'sert aletimle her girişimde içini dolduruyorum',
        'her sokuşumda {kalca} kalçan dalgalanıyor'],
      big: ['koca aletimle her vuruşumda {gogus} memelerin sallanıyor', 'iri aletim seni sonuna kadar dolduruyor, karnında hissediyorsun', 'kalın aletim her girişte içini açıyor',
        'büyük aletimle her vuruşta {kalca} kalçan dalgalanıyor'],
      huge: ['dev aletimle her vuruşumda bütün bedenin sarsılıyor', 'kazık gibi aletim seni ikiye bölecek gibi', 'devasa aletim karnında kabarıyor, her sokuşta görünüyor',
        'koca aletimle her vuruşumda {gogus} memelerin deli gibi sallanıyor']
    },
    /* ── 🌸🍑 Pussy / Anal Size'a göre (vag|anal + tight / mid / loose) ── */
    delik: {
      vagtight: ['daracık amında sıkıştım, her sokuşumda daha çok kuduruyorum', 'öyle darsın ki her santimde zorlanıyorum, içi beni mengene gibi sıkıyor', 'dar amın aletimi sımsıkı kavrıyor, çıkarmak bile zor',
        'daracık içi her vuruşta beni sağıyor'],
      vagmid: ['ıslak amın bana tam oturmuş, her sokuşta kayarak gömülüyorum', 'sıcacık amın beni sarıp sarmalıyor', 'kaygan amına her girişimde biraz daha kuduruyorum'],
      vagloose: ['açılmış amına sonuna kadar gömülüyorum, hiçbir şey durdurmuyor', 'rahat amın beni yutar gibi içine alıyor', 'ıslacık amında köküne kadar kayıyorum'],
      analtight: ['daracık kalçanda sıkıştım, her sokuşumda daha çok kuduruyorum', 'dar deliğin beni boğacak gibi sıkıyor', 'öyle darsın ki her santimde inliyorum, içi beni bırakmıyor',
        'sıkı kalçan her girişimde aletimi kavrıyor'],
      analmid: ['kalçanın arasına ağır ağır gömülüyorum, içi sıcacık', 'arka deliğin beni tam kavrıyor', 'kalçana her girişimde sıcaklığın beni sarıyor'],
      analloose: ['alışkın kalçana köküne kadar kayıyorum', 'açılmış deliğin beni yutuyor, sonuna kadar gömülüyorum', 'rahat kalçanda hiç durmadan vuruyorum']
    },
    hisOnun: ['{o} altımda titriyor, içi beni sağar gibi kasılıyor', '{o} tırnaklarını sırtıma geçiriyor', '{o} başını geriye atıp sessizce inliyor', '{o} bacaklarını belime kilitleyip bırakmıyor',
      '{o} her atımı hissedip küçük küçük irkiliyor', '{o} gözlerini kapatıp dudağını ısırıyor', '{o} kulağıma adımı fısıldıyor', '{o} göğsüme yapışmış, nefesi kesik kesik'],

    /* ── 🫂 sarılma ── */
    saril: ['kollarımı ona dolayıp göğsüme gömüyorum', 'onu öyle sıkı sarıyorum ki aramızda nefes bile kalmıyor', 'bir kolum belinde, öbürü ensesinde; kendime kilitliyorum',
      'bütün bedenimle sarıp altıma, kollarımın arasına hapsediyorum', 'yüzümü boynuna gömüp sımsıkı tutuyorum', 'kollarım onu kemer gibi sarmış, bırakmıyor',
      '{gogus} göğüsleri göğsüme yapışmış, sımsıkı sarılıyorum', 'onu kendime bastırıyorum, kalbi kalbimin üstünde'],
    dalga: ['her atımda kollarım biraz daha sıkılaşıyor', 'bir atım, bir sıkma; bir atım daha, daha sıkı', 'akış güçlendikçe onu kendime daha çok çekiyorum',
      'her zonklamada sarılışım bir kat daha kenetleniyor', 'atımlar seyreldikçe sarılışım derinleşiyor', 'dalga geldikçe ona tutunuyorum, sanki düşeceğim',
      'her sıcak atımla onu biraz daha içime, kollarıma gömüyorum', 'boşaldıkça sarılıyorum, sarıldıkça boşalıyorum'],
    son: ['bırakmıyorum; son damlaya kadar içinde, kollarımın arasında', 'titremesi geçene kadar öyle kalıyoruz', 'kollarımı gevşetmiyorum, nefeslerimiz yavaş yavaş birleşiyor',
      'son atım da bitiyor ama ben hâlâ sımsıkı sarılıyorum', 'alnımı alnına dayayıp gözlerimi kapatıyorum', 'kalplerimiz yavaşlayana kadar tek beden gibi kalıyoruz'],
    fisilti: ['"Bırakma beni…" diye fısıldıyorum', '"Buradayım, seninleyim…" diyorum kulağına', '"Hissediyor musun?" diye soluyorum', '"Bu kadar derin hiç olmamıştı…" diye mırıldanıyorum',
      '"Sakın kıpırdama…" diyorum, sesim titriyor'],

    /* ── karakterin ağzından ── */
    herDokun: ['parmaklarımı saçlarının arasına geçiriyorum', 'tırnaklarımı sırtında hafifçe gezdiriyorum', 'dudaklarımı köprücük kemiğine bastırıyorum', 'bacağımı bacağına dolayıp seni kendime çekiyorum',
      'avuçlarımı göğsüne koyup kalbini dinliyorum', 'boynuna küçük küçük öpücükler bırakıyorum'],
    herDuyu: ['kokun başımı döndürüyor', 'ellerinin sıcaklığı tenimi yakıyor', 'sesin kulağımda titreşiyor', 'teninin altında kalbin hızlanıyor, hissediyorum', 'tenim seninkine değdikçe ürperiyorum'],
    herIc: ['seni içimde santim santim hissediyorum', 'içim seni sıkıca sarıyor, bırakmak istemiyor', 'her vuruşunda nefesim kesiliyor', 'öyle derindesin ki karnımda hissediyorum',
      'içim yanıyor, sızlıyor, istiyor', 'her gidişinde içim boşluyor, her gelişinde doluyorum'],
    herAkisIc: ['içime atım atım boşaldığını hissediyorum', 'sıcaklığın en derinime kadar yayılıyor', 'her zonklamanı içimde sayıyorum: bir… iki… üç…', 'doluyorum {sen}, içim sıcaklığınla taşıyor',
      'ilk dalgan içime çarpınca bütün bedenim irkiliyor', 'sıcacık akıyorsun içime, durmadan', 'içimde zonkladıkça ben de seninle kasılıyorum', 'taşıyor, bacaklarımın arasından süzüldüğünü hissediyorum'],
    herAkisDis: ['sıcaklığın {yer} üstüne yayılıyor', 'her atımın tenime düşüşünü hissediyorum', 'tenimde sıcacık şeritler bırakıyorsun', 'akışın tenimden aşağı süzülüyor, ürperiyorum'],
    herAkisAgiz: ['dilimin üstüne sıcacık doluyorsun', 'her atımını yutuyorum, bırakmıyorum', 'ağzım seninle doluyor, gözlerim yaşarıyor', 'son damlana kadar emiyorum'],
    herHis: ['bacaklarım titriyor, kendimi tutamıyorum', 'içim seni sağar gibi kasılıyor', 'gözlerim yaşardı, öyle derin ki', 'nefesim boynunda kesik kesik', 'ayak parmaklarım kıvrılıyor',
      'başım dönüyor, sadece seni hissediyorum', 'bütün bedenim seninle birlikte titriyor', 'boğazımdan inlemeler kopuyor, susamıyorum',
      'zevkten gözlerim kararıyor', 'zevkten ellerim titriyor', 'zevkten bacaklarım titriyor', 'zevkten kendimi kaybediyorum'],
    herZevk: ['her sokuşunda zevkten titriyorum', 'zevkten gözlerim kararıyor', 'zevkten ellerim titriyor, çarşafı sıkıyorum', 'zevkten bacaklarım titriyor',
      'her vuruşunda zevkten inliyorum', 'zevkten nefesim kesiliyor', 'zevkten ayak parmaklarım kıvrılıyor', 'zevkten aklım gidiyor',
      'zevkten dudağımı ısırıyorum', 'her girişinde zevkten irkiliyorum'],
    herSes: ['ahhh', 'ohhh', 'ahh ahh ahh', 'mmmh', 'aaah', 'offf', 'ayyy', 'ohh ohh'],
    herInle: ['zevkten çığlık atıyorum', 'inlememi tutamıyorum', 'yastığa gömülüp çığlık atıyorum', 'sesim titriyor, inliyorum', 'boğazımdan çığlıklar kopuyor', 'adını bağırıyorum',
      'komşular duyacak, umurumda değil', 'çığlık çığlığayım'],
    herAletHis: ['elimde daha da sertleşiyorsun', 'damarların avucumda zonkluyor', 'kazık gibi oldun {sen}', 'öyle sertsin ki avucuma sığmıyorsun', 'her sürtüşümde biraz daha kabarıyorsun',
      'ucundan damla damla akıyor, hissediyorum'],
    herAlet: {
      small: ['küçük ama taş gibi sertsin, tam hassas yerime sürtüyorsun', 'sert aletin içimde durmadan gidip geliyor', 'hızlı hızlı vuruyorsun, her yerim titriyor'],
      mid: ['aletin içime tam oturuyor, her vuruşunda memelerim sallanıyor', 'sert aletin beni dolduruyor', 'her sokuşunda kalçam titriyor'],
      big: ['koca aletin beni sonuna kadar dolduruyor', 'öyle kalınsın ki her girişinde açılıyorum', 'koca aletinle her vuruşunda memelerim sallanıyor'],
      huge: ['dev aletin karnıma kadar geliyor, ikiye bölünüyorum', 'kazık gibi aletin beni parçalayacak', 'öyle büyüksün ki her sokuşunda nefesim kesiliyor']
    },
    herDelik: {
      vagtight: ['öyle darım ki her sokuşunda yırtılacak gibi oluyorum', 'daracık amım seni sımsıkı sarıyor, hissediyor musun?', 'amım sana dar geliyor, her santimde inliyorum'],
      vagmid: ['amım seni tam sarıyor, her sokuşunda ıslanıyorum', 'sıcacık amımda kayıyorsun'],
      vagloose: ['amım seni sonuna kadar yutuyor, daha derine gel', 'açıldım sana, köküne kadar gir'],
      analtight: ['daracık kalçam seni sıkıyor, her girişinde gözlerim kararıyor', 'arkam öyle dar ki her santimde titriyorum'],
      analmid: ['kalçam seni içine çekiyor, durma', 'arkamdan sıcacık doluyorum'],
      analloose: ['alışkın kalçam seni köküne kadar alıyor', 'arkamdan sonuna kadar gir, hiç durma']
    },
    herSaril: ['kollarımı boynuna kilitliyorum, bacaklarımı beline doluyorum', 'seni öyle sıkı sarıyorum ki tırnaklarım sırtına geçiyor', 'yüzümü boynuna gömüp sımsıkı tutunuyorum',
      'bütün gücümle sana yapışıyorum', 'kollarım da bacaklarım da seni bırakmıyor'],
    herDalga: ['her atımında sana biraz daha sıkı sarılıyorum', 'sen zonkladıkça kollarım daha da kenetleniyor', 'her dalgada sana tutunuyorum, sanki düşeceğim', 'boşaldıkça seni kendime daha çok çekiyorum'],
    herSon: ['son damlana kadar içimde kal', 'böyle kalalım, sen içimde ben kollarında', 'bırakma beni, daha değil', 'kalbinin yavaşlamasını göğsümde dinliyorum', 'hiç kıpırdama, böyle sımsıkı kal'],

    /* ── 🌙 sonrası ── */
    sonra: ['terli tenlerimiz hâlâ birbirine yapışık', 'nefeslerimiz yavaş yavaş normale dönüyor', 'parmaklarım sırtında tembel daireler çiziyor', 'başı göğsümde, saçları çenemi gıdıklıyor',
      'çarşafın serinliği sıcak tenlerimize iyi geliyor', 'odada hâlâ ikimizin kokusu var', '{saat} sessizlik bile tatlı geliyor'],
    herSonra: ['göğsünde uzanıp kalbini dinliyorum', 'hâlâ titriyorum, ama güzel bir titreme bu', 'parmaklarımla göğsünde anlamsız şekiller çiziyorum', 'bacaklarım hâlâ kendime gelmedi',
      'tenimde hâlâ ellerinin izini hissediyorum', 'gözlerim kapanıyor, kollarında uyuyabilirim']
  },

  /* dışarı boşalmada {yer}: olay adından (göğüs / kalça / bacak), yoksa ten */
  YER: { gogus: ['göğüslerinin', 'göğüs aralığının','göğüs uçlarının'], kalca: ['kalçalarının', 'belinin çukurunun', 'kalçasının kıvrımının'], bacak: ['bacaklarının', 'uyluklarının'], ten: ['karnının', 'teninin', 'göbeğinin'] },
  /* 🧩 Parçalar sayfası: yuva → [grup, ikon, ad] (listede olmayan yuva "Diğer"e düşer) */
  SL: {
    dokunus: ['me', '🪶', 'Dokunuş'], duyu: ['me', '✨', 'Duyular'], nefes: ['me', '😮‍💨', 'Nefes'], an: ['me', '🕯️', 'An'], bakis: ['me', '👁️', 'Bakış'],
    ritim: ['me', '🥁', 'Ritim'], iceri: ['me', '🔥', 'İçinde'], zevkMe: ['me', '⚡', 'Zevkten titreme'], ses: ['me', '🗣️', 'Sesler'], inle: ['me', '😩', 'İnleme'],
    onunSes: ['me', '📣', 'Onun sesi (senin mesajında)'], aletHis: ['me', '🍆', 'Aletin hissi'], aletCum: ['me', '🍆', 'Aletin hissi (boşalırken)'],
    aletVur: ['me', '🍆', 'Dick Size\'a göre vuruş'], delik: ['me', '🌸', 'Pussy / Anal Size\'a göre'],
    yaklas: ['me', '⏳', 'Boşalmaya yaklaşma'], akisIc: ['me', '💦', 'Akış: içine'], akisDis: ['me', '🌊', 'Akış: tene'], akisAgiz: ['me', '👄', 'Akış: ağza'],
    hisMe: ['me', '💗', 'Hisler (boşalırken)'], hisOnun: ['me', '💞', 'Onun tepkisi'], saril: ['me', '🫂', 'Sarılma'], dalga: ['me', '🌊', 'Boşaldıkça sarılma'],
    son: ['me', '🤍', 'Son'], fisilti: ['me', '💬', 'Fısıltı'], sonra: ['me', '🌙', 'Sonrası'],
    herDokun: ['her', '💋', 'Dokunuş'], herDuyu: ['her', '✨', 'Duyular'], herIc: ['her', '🌹', 'İçimde'], herZevk: ['her', '⚡', 'Zevkten titreme'], herSes: ['her', '🗣️', 'Sesler'],
    herInle: ['her', '😩', 'İnleme ve çığlık'], herAletHis: ['her', '🍆', 'Aletin (elimde)'], herAlet: ['her', '🍆', 'Dick Size\'a göre'], herDelik: ['her', '🌸', 'Pussy / Anal Size\'a göre'],
    herAkisIc: ['her', '💦', 'Akış: içime'], herAkisDis: ['her', '🌊', 'Akış: tenime'], herAkisAgiz: ['her', '👄', 'Akış: ağzıma'], herHis: ['her', '💗', 'Hisler'],
    herSaril: ['her', '🫂', 'Sarılma'], herDalga: ['her', '🌊', 'Boşaldıkça sarılma'], herSon: ['her', '🤍', 'Son'], herSonra: ['her', '🌙', 'Sonrası']
  },
  SZL: { small: '🍆 Küçük', mid: '🍆 Orta', big: '🍆 Büyük', huge: '🍆 Dev', vagtight: '🌸 Vajinal · dar', vagmid: '🌸 Vajinal · orta', vagloose: '🌸 Vajinal · geniş',
    analtight: '🍑 Anal · dar', analmid: '🍑 Anal · orta', analloose: '🍑 Anal · geniş' },
  /* boyuta göre yuvalar: dk = senin Dick Size'ın (ME_DICK.size, yoksa mid) · hole = vag|anal + onun Pussy / Anal Size'ı (tight / mid / loose). hole: true kalıplar delikli olay ister */
  SZK: { aletVur: 'dk', herAlet: 'dk', delik: 'hole', herDelik: 'hole' },
  HOLE_SZ: { 'Extremely Tight': 'tight', 'Very Tight': 'tight', Tight: 'tight', Average: 'mid', Relaxed: 'loose', Loose: 'loose', 'Very Loose': 'loose' },
  YER_HER: { gogus: ['göğüslerimin'], kalca: ['kalçalarımın', 'belimin'], bacak: ['bacaklarımın'], ten: ['karnımın', 'tenimin'] },

  K: [
    /* ── 👅 ön sevişme ── */
    { id: 'dh_fp_dokunus', n: 'Ağır dokunuş', ic: '🪶', side: 'me', ph: ['fp'], th: 'betim',
      t: ['{dokunus}… {duyu}. {nefes} 🥵', '{an}. {dokunus}, {duyu}, {o} 😮‍💨', '{dokunus}. {bakis}… {duyu} 🔥'] },
    { id: 'dh_fp_his', n: 'Ürperti', ic: '✨', side: 'me', ph: ['fp'], th: 'his',
      t: ['{duyu}… {nefes}. {dokunus} 😩', '{bakis}. {dokunus} ve {duyu} 💗'] },
    { id: 'dh_fp_her', n: 'Onun dokunuşu', ic: '💋', side: 'her', ph: ['fp'], th: 'betim',
      t: ['{herDokun}… {herDuyu}, {sen} 🥵', '{herDuyu}. {herDokun}, daha yavaş… 😮‍💨', 'Gel buraya {sen}… {herDokun}. {herDuyu} 💗'] },
    { id: 'dh_fp_alet', n: 'Sertleşme', ic: '🍆', side: 'me', ph: ['fp'], th: 'his',
      t: ['{ses}… {dokunus}; {aletHis}. {aletHis} 🥵', '{duyu}, {o}… {aletHis}. {ses} 😩', '{ses}! {aletHis}; {aletHis} 🔥'] },
    { id: 'dh_fp_her_alet', n: 'Elimde sertleşiyorsun', ic: '🍆', side: 'her', ph: ['fp'], th: 'his',
      t: ['{herSes}… {herAletHis}, {sen}. {herAletHis} 🥵', 'Mmmh {sen}… {herDokun}; {herAletHis} 😏', '{herAletHis}… {herSes} 🔥'] },

    /* ── 🔥 seks ── */
    { id: 'dh_pos_ritim', n: 'Derin ritim', ic: '🥁', side: 'me', ph: ['pos'], th: 'betim',
      t: ['{ses}… {ritim}, {iceri}. {inle} 🔥', '{iceri}, {o}. {ritim}; {onunSes} 🥵', '{an}. {ritim}, {iceri}… {ses} 😩'] },
    { id: 'dh_pos_delik', n: 'Daracık içinde', ic: '🌸', side: 'me', ph: ['pos'], th: 'his', hole: true,
      t: ['{ses}… {delik}. {zevkMe} 🥵', '{delik}, {o}! {aletHis}; {inle} 😩', '{ses}! {delik}… {onunSes} 🔥', '{delik}. {aletVur}; {ses} 🥵'] },
    { id: 'dh_pos_alet', n: 'Her vuruşta', ic: '🍆', side: 'me', ph: ['pos'], th: 'his',
      t: ['{ses}! {aletVur}… {aletHis}; {onunSes} 🔥', '{aletVur}, {o}. {zevkMe}; {ses} 😩', '{ritim}… {aletVur}. {inle} 🥵'] },
    { id: 'dh_pos_ses', n: 'İnleme ve çığlık', ic: '🗣️', side: 'me', ph: ['pos'], th: 'his',
      t: ['{ses}… {ses}! {onunSes}; {inle} 🔥', '{onunSes}… {ritim}; {ses} 😩', '{inle}, {o}. {onunSes} 🥵'] },
    { id: 'dh_pos_bakis', n: 'Göz göze', ic: '👁️', side: 'me', ph: ['pos'], th: 'his',
      t: ['{bakis}. {ritim}… {zevkMe} 💗', '{iceri}. {bakis}, {o}; {zevkMe} 😮‍💨'] },
    { id: 'dh_pos_zevk', n: 'Zevkten titreme', ic: '⚡', side: 'me', ph: ['pos'], th: 'his',
      t: ['{ritim}… {zevkMe}. {zevkMe} 🥵', '{iceri}, {o}. {zevkMe}; {zevkMe} 😩', '{zevkMe}… {ritim}, {zevkMe} 🔥'] },
    { id: 'dh_pos_her_zevk', n: 'Zevkten titriyorum', ic: '⚡', side: 'her', ph: ['pos'], th: 'his',
      t: ['{herSes}… {herZevk}, {sen}. {herInle} 😩', 'Ahh {sen}… {herIc}; {herZevk} 🥵', '{herZevk}. {herSes}, durma 🔥'] },
    { id: 'dh_pos_her_delik', n: 'Daracığım', ic: '🌸', side: 'her', ph: ['pos'], th: 'his', hole: true,
      t: ['{herSes}… {herDelik}! {herInle} 😩', '{herDelik}, {sen}… {herZevk} 🥵', '{herSes}! {herDelik}; {herAlet} 🔥'] },
    { id: 'dh_pos_her_alet', n: 'Koca aletin', ic: '🍆', side: 'her', ph: ['pos'], th: 'his',
      t: ['{herSes} {sen}… {herAlet}; {herInle} 🥵', '{herAlet}! {herSes}… {herZevk} 😩', '{herInle}… {herAlet} 🔥'] },
    { id: 'dh_pos_saril', n: 'Sarılarak', ic: '🫂', side: 'me', ph: ['pos'], th: 'sarilma',
      t: ['{saril}; {ritim}. {duyu} 🫂', '{saril}… {iceri}, {nefes} 🥵'] },
    { id: 'dh_pos_her', n: 'İçimde', ic: '🌹', side: 'her', ph: ['pos'], th: 'his',
      t: ['{herIc}, {sen}… {herZevk} 😩', '{herIc}. {herDokun}, durma 🔥', 'Ahh {sen}… {herIc}; {herZevk} 🥵'] },

    /* ── 💦 boşalma: akış ── */
    { id: 'dh_cum_akis_ic', n: 'Atım atım içine', ic: '💦', side: 'me', ph: ['cum'], sp: ['in'], th: 'akis',
      t: ['{yaklas}… ve geliyor: {akisIc}. {akisIc}. {hisMe} 😩💦', '{ses}… {akisIc}, {o}! {aletCum}; {onunSes} 💦', '{yaklas}. {akisIc}, {akisIc}… {inle} 🥵💦',
        '{ses}! {aletCum}… {akisIc}. {hisOnun} 💦'] },
    { id: 'dh_cum_akis_dis', n: 'Tenine akış', ic: '🌊', side: 'me', ph: ['cum'], sp: ['out'], th: 'akis',
      t: ['{yaklas}… {akisDis}. {akisDis}; {hisMe} 💦', '{akisDis}, {o}. {akisDis}… {nefes} 😩💦'] },
    { id: 'dh_cum_akis_agiz', n: 'Dilinin üstüne', ic: '👄', side: 'me', ph: ['cum'], sp: ['oral'], th: 'akis',
      t: ['{yaklas}… {akisAgiz}. {akisAgiz}; {hisMe} 💦', '{akisAgiz}, {o}… {akisAgiz} 😩💦'] },
    { id: 'dh_cum_his', n: 'Bedenin titreyişi', ic: '⚡', side: 'me', ph: ['cum'], th: 'his',
      t: ['{ses}… {hisMe}. {hisMe}; {onunSes} 💦', '{yaklas}. {hisMe}; {inle}, {o} 😩', '{ses}! {aletCum}, {hisMe} 💦'] },

    /* ── 🫂 sımsıkı sarılıp boşalma ── */
    { id: 'dh_cum_saril_ic', n: 'Sımsıkı sarılıp içine', ic: '🫂', side: 'me', ph: ['cum'], sp: ['in'], th: 'sarilma',
      t: ['{saril}… {akisIc}. {hisMe}; {son} 🫂💦', '{yaklas}; {saril}. {akisIc}, {hisOnun}. {fisilti} 🫂', '{saril}, {o}. {akisIc}… {akisIc}. {son} 💦'] },
    { id: 'dh_cum_saril_dis', n: 'Sarılıp tenine', ic: '🤍', side: 'me', ph: ['cum'], sp: ['out', 'oral'], th: 'sarilma',
      t: ['{saril}… {hisMe}. {akisDis}; {son} 🫂💦', '{saril}, {o}. {hisMe}, {fisilti} 💦'] },

    /* ── 🌊 boşaldıkça sarılma ── */
    { id: 'dh_cum_dalga_ic', n: 'Boşaldıkça sarılma', ic: '🌊', side: 'me', ph: ['cum'], sp: ['in'], th: 'dalga',
      t: ['{akisIc}; {dalga}. {akisIc}; {dalga}. {akisIc}… {son} 🫂💦', 'Bir: {akisIc}, {dalga}. İki: {akisIc}, {dalga}. Üç… {hisOnun} 🌊💦',
        '{yaklas}. {akisIc} ve {dalga}… {akisIc}, {dalga}. {fisilti} 🫂'] },
    { id: 'dh_cum_dalga_dis', n: 'Her atımda bir sarılma', ic: '🌀', side: 'me', ph: ['cum'], sp: ['out', 'oral'], th: 'dalga',
      t: ['{akisDis}; {dalga}. {akisDis}; {dalga}… {son} 🫂💦', '{hisMe}. {dalga}, {dalga}… {o} 🌊'] },

    /* ── 💦 karakterin ağzından boşalma ── */
    { id: 'dh_cum_her_ic', n: 'İçime aktığında', ic: '💞', side: 'her', ph: ['cum'], sp: ['in'], th: 'akis',
      t: ['{herSes}… {herAkisIc}. {herInle} 😩💦', 'Ahhh {sen}… {herAkisIc}; {herHis} 💦', '{herAkisIc}. {herSes}! {herSon} 🥵', '{herSes}… {herDelik}; {herAkisIc}. {herInle} 💦'] },
    { id: 'dh_cum_her_dis', n: 'Tenimde', ic: '🌊', side: 'her', ph: ['cum'], sp: ['out'], th: 'akis',
      t: ['{herAkisDis}… {herHis}, {sen} 💦', '{herAkisDis}; {herAkisDis} 😩'] },
    { id: 'dh_cum_her_agiz', n: 'Ağzımda', ic: '👄', side: 'her', ph: ['cum'], sp: ['oral'], th: 'akis',
      t: ['Mmmh… {herAkisAgiz}. {herAkisAgiz} 💦', '{herAkisAgiz}, {sen}… {herHis} 🥵'] },
    { id: 'dh_cum_her_saril', n: 'Sımsıkı sarıl', ic: '🫂', side: 'her', ph: ['cum'], th: 'sarilma',
      t: ['{herSaril}… {herAkisIc}. {herSon} 🫂💦', '{herSaril}, {sen}! {herHis}; {herSon} 🫂', 'Sarıl bana… {herSaril}. {herAkisIc} 💦'], sp: ['in'] },
    { id: 'dh_cum_her_dalga', n: 'Boşaldıkça sarılırım', ic: '🌊', side: 'her', ph: ['cum'], sp: ['in'], th: 'dalga',
      t: ['{herAkisIc}; {herDalga}. {herAkisIc}; {herDalga}… {herSon} 🫂💦', '{herDalga}, {sen}… {herAkisIc}. {herHis} 🌊'] },

    /* ── 🌙 sonrası ── */
    { id: 'dh_af_yakin', n: 'Birlikte soluklanma', ic: '🕯️', side: 'me', ph: ['af'], th: 'yakin',
      t: ['{sonra}. {sonra}… {fisilti} 🫂', '{sonra}; {saril}. {an} 💗'] },
    { id: 'dh_af_her', n: 'Kollarında', ic: '🌙', side: 'her', ph: ['af'], th: 'yakin',
      t: ['{herSonra}… {herSonra}, {sen} 💗', '{herSonra}. Böyle kalalım biraz 🫂'] }
  ]
};

/* ➕ v1183: her havuza +10 (boyutlu havuzlarda alt listelere dağıtılmış), 🐕 Doggy / 🛏️ Misyoner / 🍑 Anal Doggy havuzları,
 * 🫂 üstünde sımsıkı sarılma (Misyoner) + arkasında sımsıkı sarılma (Anal): 🛏️ yatakta / 🧱 ayakta (duvara dayayarak).
 * Kalıpta pk: pozisyon (doggy / mis / analdoggy, app.js dhPosK) · st: yatak / ayakta (dhStand) · t: dizi ya da { pos: [], cum: [] } */
(function (D) {
  const ADD = {
    dokunus: ['parmaklarım kaburgalarının üstünde tek tek geziniyor', 'avuçlarımla yüzünü çerçeveleyip dudaklarına eğiliyorum', 'dudaklarım omzundan boynuna doğru yavaşça tırmanıyor',
      'ellerim bluzunun altından sıcak tenine kayıyor', 'başparmaklarım kalça kemiklerinin üstünde küçük daireler çiziyor', 'parmaklarım dizinin arkasından uyluğuna doğru süzülüyor',
      'avucumu karnına yaslayıp onu kendime çekiyorum', 'dudaklarımı köprücük kemiğinin çukuruna bastırıyorum', 'parmaklarımı saçlarına geçirip başını hafifçe geriye yatırıyorum',
      'dilimle göğüs ucunun etrafında yavaş bir daire çiziyorum'],
    duyu: ['teninden yayılan sıcaklık yüzüme vuruyor', 'nefesindeki tatlı şarap kokusu dudaklarıma değiyor', 'ensesindeki ince tüyler dudaklarımın altında ürperiyor',
      'göğüs uçları avucuma sertleşerek bastırıyor', 'ıslak dudaklarının sesi kulağımda kalıyor', 'teni kadife gibi, parmaklarım kayıp gidiyor', 'kalbinin hızlandığını avucumda hissediyorum',
      'boynundaki parfüm sıcaklıkla birlikte yükseliyor', 'bacaklarının arasından yayılan sıcaklığı hissediyorum', 'ıslaklığı parmak uçlarıma bulaşıyor'],
    nefes: ['nefesim titreyerek çıkıyor', 'derin bir nefes alıp kokusunu içime çekiyorum', 'nefeslerimiz birbirine karışıyor', 'soluğum ensesinde sıcacık dolaşıyor',
      'nefesimi tutuyorum, kıpırdamaya korkuyorum', 'her nefeste kokusunu biraz daha içime çekiyorum', 'göğsüm sıkışıyor, nefes yetmiyor', 'soluk soluğayım, konuşamıyorum',
      'nefesim dudaklarına çarpıp geri dönüyor', 'kesik bir soluk dudaklarımdan kaçıyor'],
    an: ['dışarıda yağmur, içeride sadece ikimiz', 'saatin tik takları bile sustu sanki', '{saat} lambanın sarı ışığı tenini altına boyuyor', 'odanın havası ağırlaştı, sıcak ve tatlı',
      'dünya kapının dışında kaldı', 'sadece tenlerimizin sesi var', 'perdeler kıpırdıyor, kimse bilmiyor', 'zaman parmaklarımızın arasından eriyip akıyor',
      '{saat} şehrin uğultusu çok uzakta kalıyor', 'her şey yavaşladı, sadece kalplerimiz hızlı'],
    bakis: ['bakışları dudaklarıma kayıyor', 'gözlerinde yarı utanç, yarı açlık', 'gözlerini kapatıp kendini bırakıyor', 'bana bakarken dudağını ısırıyor', 'göz göze geldikçe yanakları kızarıyor',
      'bakışlarıyla daha fazlasını istiyor', 'kirpikleri titreyerek kapanıyor', 'gözleri buğulanmış, beni süzüyor', 'bakışını kaçırmıyor, meydan okuyor', 'gözlerinin içi gülüyor ama sesi titriyor'],
    ritim: ['her vuruşta kalçaları bana çarpıyor', 'temposu giderek hızlanıyor', 'ağır, uzun, derin gidiş gelişlerle', 'birden hızlanıp sonra yavaşlıyorum, onu bekletiyorum',
      'kalçalarımı dairesel döndürerek derine bastırıyorum', 'her itişte yatak gıcırdıyor', 'ritmimiz tek bir nefes gibi', 'kalçasını tutup kendime doğru çekerek vuruyorum',
      'hızım arttıkça sesi de yükseliyor', 'ucuna kadar çıkıp bir hamlede gömülüyorum'],
    iceri: ['içi sıcacık bir eldiven gibi beni sarıyor', 'her girişte ıslaklığı aletime bulaşıyor', 'içinde kayarken bütün damarlarımı hissediyorum', 'içi kasıldıkça beni daha da içeri çekiyor',
      'en dibine dayandıkça titriyor', 'sıcaklığı köküme kadar yayılıyor', 'içi beni bırakmak istemiyor, her çıkışta tutuyor', 'kaygan ve dar, tam benim için', 'içinde her santim ayrı bir zevk',
      'içinin her kıvrımını ezbere biliyorum artık'],
    zevkMe: ['zevkten kalçalarım kendiliğinden hızlanıyor', 'zevkten gözlerimi açamıyorum', 'zevkten parmaklarım tenine gömülüyor', 'her sokuşumda zevk belimi kesiyor', 'zevkten midem kasılıyor',
      'zevkten dudaklarım uyuşuyor', 'zevkten başımı geriye atıyorum', 'zevkten bacaklarımın bağı çözülüyor', 'zevkten sesim kısılıyor', 'her vuruşta zevk tepeme vuruyor'],
    ses: ['ahhh ahhh', 'ohhh offf', 'hhhh', 'ah… ah…', 'offf be', 'ahhhhh', 'ufff ufff', 'ohhhh', 'mmmhhh', 'aahh offf'],
    inle: ['derin derin inliyorum', 'boğuk bir inilti göğsümden yükseliyor', 'inlememi boynuna gömüyorum', 'ağzımı kapatamıyorum, inliyorum', 'kendimi tutamıyorum, sesim titreyerek yükseliyor',
      'adını inilti arasında söylüyorum', 'hırıltıyla inliyorum', 'kesik kesik inliyorum', 'bir inilti, bir küfür kaçıyor ağzımdan', 'sesimi kısamıyorum, inliyorum'],
    onunSes: ['{o} inlemesini yastığa gömüyor', '{o} "daha, daha!" diye çığlık atıyor', '{o} ince ince inliyor, sesi kırılıyor', '{o} her vuruşta küçük bir çığlık atıyor',
      '{o} "ahhh!" diye inleyip başını geriye atıyor', '{o} hızlandıkça inlemeleri yükseliyor', '{o} dudağını ısırıp inlemesini bastırmaya çalışıyor, beceremiyor', '{o} adımı inleye inleye söylüyor',
      '{o} çığlık atıp çarşafı avuçluyor', '{o} hıçkırır gibi inliyor'],
    aletHis: ['aletim tenine değdikçe zonkluyor', 'kafası sızlıyor, dokunsa patlayacak', 'damarlarım kabardıkça sertleşiyor', 'aletim demir gibi, yerinde duramıyor', 'her sürtünmede ucundan ıslaklık süzülüyor',
      'aletim kendi kendine seğiriyor', 'öyle kabardı ki kafası parlıyor', 'kökünden ucuna kadar sızlıyor', 'aletimdeki nabzı sayabiliyorum', 'sertliğim gitgide acıya dönüyor'],
    aletCum: ['aletim içinde son kez kabarıp boşalıyor', 'her kasılmada aletim biraz daha sertleşip fışkırıyor', 'damarlarım boşalırken kabarıyor', 'aletim zonkladıkça içi de seğiriyor',
      'kökümden ucuma kadar bir dalga geçiyor', 'aletim durmadan atıyor, duramıyor', 'boşaldıkça aletim içinde seğiriyor', 'aletim kazık gibi, boşalırken bile yumuşamıyor',
      'her atımda aletim içinde zıplıyor', 'boşalırken aletim sızlayarak zonkluyor'],
    yaklas: ['artık dayanamıyorum, geliyor', 'aletim kabardı, son noktadayım', 'kalçalarım kontrolsüz hızlanıyor', 'karnımın altı yanıyor', 'nefesim hızlandı, geliyorum',
      'son birkaç vuruş, daha fazla tutamam', 'bacaklarım kasılıyor, geliyor', 'içimde bir şey kopmak üzere', '"Geliyorum…" diye fısıldıyorum', 'bütün kaslarım geriliyor'],
    akisIc: ['sıcak bir fışkırma en dibine çarpıyor', 'dölüm içinde sıcak bir göl gibi toplanıyor', 'her atımda biraz daha doluyor', 'içi sıcaklığımla ağırlaşıyor',
      'atımlar arasında bile akmaya devam ediyor', 'dölüm en derinine kadar yol alıyor', 'koyu sıcaklık içini kaplıyor', 'her fışkırma onu biraz daha titretiyor', 'içine boşaldıkça kasılıyor, beni sağıyor',
      'aramızdan sızan döl bacaklarından süzülüyor'],
    akisDis: ['kalın şeritler {yer} üstünde parlıyor', 'sıcak damlalar {yer} kıvrımından süzülüyor', 'dölüm {yer} üstüne yağmur gibi yağıyor', 'her atımda tenine bir şerit daha çiziyorum',
      '{yer} üstünde sıcacık bir iz kalıyor', 'teni dölümle parlıyor', 'damlalar teninde birleşip akıyor', 'sıcaklık teninde yayılınca ürperiyor', 'ilk şerit uzağa, son damlalar {yer} üstüne',
      'dölüm tenine yapışıp ağır ağır kayıyor'],
    akisAgiz: ['ağzı sıcaklığımla doluyor', 'yutkundukça boğazı titriyor', 'dilini uzatıp her damlayı alıyor', 'dudakları dölümle parlıyor', 'ağzında tutup bana bakıyor', 'yutmak için gözlerini kapatıyor',
      'dudağının kenarından süzülen damlayı parmağıyla alıyor', 'her atımda ağzını biraz daha açıyor', 'dili ucumda dolaşıp son damlayı topluyor', 'dolu ağzıyla gülümsüyor'],
    hisMe: ['zevkten bütün bedenim kasılıyor', 'gözlerimin önünde ışıklar patlıyor', 'kalçalarım kendiliğinden ileri itiyor', 'zevkten tırnaklarımı tenine geçiriyorum',
      'nefesim kesiliyor, sonra hıçkırır gibi geri geliyor', 'bütün gücüm akıp gidiyor', 'zevkten kulaklarım uğulduyor', 'omurgamdan aşağı sıcak bir dalga iniyor', 'zevkten sesim çatlıyor',
      'bedenim titreye titreye boşalıyor'],
    hisOnun: ['{o} bacakları titreye titreye kasılıyor', '{o} içiyle beni sıkıyor, sağıyor', '{o} "içime, içime…" diye fısıldıyor', '{o} sırtını yay gibi geriyor', '{o} zevkten ağlamaklı inliyor',
      '{o} parmaklarını saçlarıma geçirip çekiyor', '{o} gözleri yaşlı, gülümsüyor', '{o} beni bırakmamak için kalçasını bastırıyor', '{o} ayak parmakları kıvrılmış, titriyor', '{o} her atımda irkilip inliyor'],
    saril: ['kollarımı beline dolayıp onu bana yapıştırıyorum', 'bütün ağırlığımla üstüne kapanıp sarılıyorum', 'onu kollarıma gömüp başımı omzuna yaslıyorum',
      'kollarım onu öyle sarıyor ki kemiklerini hissediyorum', 'ensesini avuçlayıp alnımı alnına dayıyorum', 'kollarımın arasında küçücük kalıyor', 'onu sıkıca sarıp nefesini boynumda hissediyorum',
      'aramızda bir milim bile boşluk bırakmıyorum', 'onu sarıp kendime kilitliyorum, kaçamaz', 'göğsü göğsüme ezilmiş, sımsıkı sarılıyoruz'],
    dalga: ['ilk atımda sarılıyorum, ikincide sıkılaşıyor, üçüncüde kilitleniyorum', 'her fışkırmada kollarım biraz daha kenetleniyor', 'akış durdukça değil, aktıkça sarılıyorum',
      'dalgalar geldikçe onu kemiklerine kadar sarıyorum', 'her zonklamada bir kez daha kendime çekiyorum', 'akış yavaşladıkça sarılışım yumuşamıyor, derinleşiyor',
      'her atımda yüzümü boynuna biraz daha gömüyorum', 'boşaldıkça onu daha çok istiyorum, daha sıkı sarıyorum', 'atımlarla birlikte kollarım da titriyor ama bırakmıyor', 'son atımda en sıkı sarılışım geliyor'],
    son: ['son damla da içinde, ben hâlâ sarılıyorum', 'kalplerimiz aynı ritme oturuyor', 'nefesimiz yavaşlıyor ama kollarım gevşemiyor', 'onu bırakmadan saçlarını öpüyorum', 'öylece kalıyoruz, kıpırdamadan',
      'içinde yumuşayana kadar çıkmıyorum', 'sıcaklığımızın içinde eriyip gidiyoruz', 'son titremesi geçerken kulağına öpücük bırakıyorum', 'kollarımda uyuyakalacak gibi', 'bir süre konuşmuyoruz, sadece sarılıyoruz'],
    fisilti: ['"Hepsini al…" diye fısıldıyorum', '"Benimsin…" diyorum kulağına', '"Seni hissediyorum, en derinde…" diye mırıldanıyorum', '"Kal böyle, kıpırdama…" diye soluyorum',
      '"Daha önce böyle olmamıştı…" diyorum', '"Sana doymuyorum…" diye fısıldıyorum', '"Gözlerime bak…" diyorum', '"Bırakmayacağım…" diye fısıldıyorum', '"Nefesim kesildi…" diye gülüyorum',
      '"Sadece sen varsın…" diye mırıldanıyorum'],
    sonra: ['yanağını göğsüme koymuş, saçlarını okşuyorum', 'tenimizdeki ter yavaşça soğuyor', 'parmaklarımız birbirine kenetli', 'bacakları bacaklarıma dolanmış', 'yorgun, mutlu bir sessizlik',
      'alnına küçük bir öpücük bırakıyorum', 'çarşaf yarı üstümüzde, yarı yerde', 'kalbinin yavaşlamasını kulağımla dinliyorum', 'tembel tembel sırtını okşuyorum', '{saat} pencereden giren serinlik terimizi kurutuyor'],

    herDokun: ['parmaklarımı göğsünde aşağı doğru kaydırıyorum', 'kulağına dudaklarımı değdiriyorum', 'kalçanı avuçlayıp kendime bastırıyorum', 'tırnaklarımla enseni hafifçe kazıyorum',
      'dudaklarımı çenenin çizgisinde gezdiriyorum', 'elimi karnından aşağı indiriyorum', 'göğüslerimi göğsüne sürtüyorum', 'bacaklarımı açıp seni aramıza çekiyorum', 'parmak uçlarımla dudaklarını izliyorum',
      'boynunu ısırıp yalıyorum'],
    herDuyu: ['nefesin tenimi yakıyor', 'sesinin titremesi içimi eritiyor', 'kokunu içime çekiyorum, başım dönüyor', 'ellerin her yerimde, yetmiyor', 'tenin terli ve sıcak, bayılıyorum',
      'parmaklarının izi tenimde kalıyor', 'öpücüklerin dudaklarımda karıncalanıyor', 'kalp atışın göğsüme vuruyor', 'sıcaklığın bacaklarımın arasına yayılıyor', 'her dokunuşunda içim kıpır kıpır'],
    herIc: ['içimi sonuna kadar dolduruyorsun', 'her girişinde ıslaklığım artıyor', 'içim seni sıkıca kavrıyor, hissediyor musun?', 'derinlere dayandıkça titriyorum', 'içimde gidip geldikçe aklım gidiyor',
      'seni en dibimde hissediyorum', 'içim seni istemsizce sağıyor', 'öyle doluyum ki nefes alamıyorum', 'her çıkışında boşluğun beni deli ediyor', 'içimde zonkluyorsun, sayıyorum'],
    herZevk: ['zevkten kalçalarımı sana bastırıyorum', 'zevkten tırnaklarımı sırtına geçiriyorum', 'zevkten bacaklarım kendiliğinden açılıyor', 'zevkten başım yastıktan kayıyor',
      'her vuruşunda zevkten gözlerim kayıyor', 'zevkten karnım kasılıyor', 'zevkten ağlayacağım', 'zevkten parmaklarım uyuşuyor', 'zevkten belim yay gibi geriliyor', 'zevkten konuşamıyorum'],
    herSes: ['ahhh ahhh', 'ohhh {sen}', 'aahhh', 'mmmhhh', 'ayyy ayyy', 'ahh… ahh…', 'offf offf', 'ohhhh', 'ah ah ah', 'hhhh'],
    herInle: ['inlememi yastığa gömüyorum', 'sesim çatlayarak inliyorum', 'çığlığımı tutamıyorum', '"Daha!" diye bağırıyorum', 'hıçkırır gibi inliyorum', 'inlemelerim odada yankılanıyor',
      'adını çığlık çığlığa söylüyorum', 'kendimi tutamayıp bağırıyorum', 'dudağımı ısırıyorum ama inlemem kaçıyor', 'çığlık atıp çarşafları avuçluyorum'],
    herAletHis: ['avucumda zonkluyorsun', 'öyle kalınsın ki parmaklarım birleşmiyor', 'dilimin altında seğiriyorsun', 'kafası şişmiş, kıpkırmızı', 'damarların parmaklarımın altında atıyor',
      'taş gibi oldun {sen}', 'her okşayışımda biraz daha büyüyorsun', 'ucundan akan ıslaklığı parmağımla yayıyorum', 'sertliğin beni deli ediyor', 'avucumda sıcacık ve demir gibi'],
    herAkisIc: ['içime fışkırdığını hissediyorum, sıcacık', 'içim seninle doldu, ağırlaştı', 'her atımında içim kasılıyor', 'sıcaklığın karnıma kadar yayılıyor', 'içimde zonkladıkça ben de geliyorum',
      'dolup taşıyorum, bacaklarımdan akıyor', 'son damlana kadar içime bırak', 'içime boşaldıkça titriyorum', 'öyle çok ki içim taşıyor', 'sıcacık akışın içimi yakıyor'],
    herAkisDis: ['sıcak damlaların {yer} üstünde', 'tenimde parlıyorsun', 'akışın tenimden kayıyor, ürperiyorum', 'her atımda tenime bir şerit daha', 'iz bıraktığın yer yanıyor',
      'sıcaklığın {yer} kıvrımında toplanıyor', 'parmağımla tenimdeki dölünü yayıyorum', 'damlalar tenimden aşağı süzülüyor', 'sıcacık yağıyorsun üstüme', 'tenim seninle kaplandı'],
    herAkisAgiz: ['ağzım seninle doldu', 'yutkunuyorum, bir damla bile kaçmasın', 'dilimin üstünde sıcacıksın', 'dudaklarımdan taşıyor', 'her atımını dilimle karşılıyorum', 'yutarken gözlerimi kapatıyorum',
      'son damlanı emerek alıyorum', 'ağzımı açıp gösteriyorum, sonra yutuyorum', 'tadın dilimde kalıyor', 'boğazımdan sıcacık iniyorsun'],
    herHis: ['zevkten bütün bedenim kasılıyor', 'içim seni sağar gibi titriyor', 'gözlerimin önü bembeyaz', 'kalçalarım kendiliğinden titriyor', 'nefesim kesiliyor, sonra hıçkırıyorum',
      'zevkten karnım kasılıyor', 'bacaklarım hâlâ titriyor', 'içimde patlıyorsun, ben de seninle', 'parmak uçlarıma kadar karıncalanıyorum', 'zevkten gözlerim yaşarıyor'],
    herSaril: ['kollarımı sırtına doluyorum, bırakmıyorum', 'bacaklarımla seni kendime kilitliyorum', 'yüzümü göğsüne gömüp sarılıyorum', 'seni öyle sıkı sarıyorum ki nefesim kesiliyor',
      'tırnaklarımı sırtına geçirip tutunuyorum', 'kollarımı boynuna dolayıp seni kendime çekiyorum', 'aramızda boşluk bırakmıyorum', 'bütün bedenimle sana yapışıyorum', 'kollarımın arasında kal',
      'seni kendime gömüyorum'],
    herDalga: ['her atımında bacaklarımı daha sıkı kilitliyorum', 'sen fışkırdıkça kollarım kenetleniyor', 'her dalganda tırnaklarım daha derine', 'boşaldıkça seni daha derine çekiyorum',
      'her zonklamanda biraz daha sıkı sarılıyorum', 'atımların hızlandıkça sarılışım da sıkılaşıyor', 'her sıcak dalgada sana daha çok yapışıyorum', 'son atımına kadar bacaklarım çözülmüyor',
      'aktıkça kollarımı sıkıyorum', 'her atımında "daha" diye fısıldayıp sarılıyorum'],
    herSon: ['çıkma, içimde kal', 'kollarında uyuyacağım', 'böyle kal, kalbini dinliyorum', 'son damlana kadar içimde', 'bırakma beni, bitmesin', 'içimde yumuşayana kadar böyle kalalım',
      'nefesimiz birleşsin', 'içim öyle sıcak ki, kıpırdama', 'beni hep böyle sar', 'hiçbir yere gitme'],
    herSonra: ['göğsünde parmaklarımla daireler çiziyorum', 'bacaklarım hâlâ titriyor, gülüyorum', 'içimden akıyor, umurumda değil', 'kollarında mışıl mışıl', 'saçlarımı okşamana bayılıyorum',
      'tenimde hâlâ kokun var', 'yüzümü boynuna gömüp nefesini dinliyorum', 'bir daha… ama biraz sonra', 'gözlerim kapanıyor, mutluyum', 'teninin sıcaklığında eriyorum'],

    /* boyutlu havuzlar: Dick Size alt listelerine +3, delik alt listelerine +2 (havuz başına +12) */
    aletVur: {
      small: ['küçük ama hızlı aletimle seni durmadan dürtüyorum', 'kısa vuruşlarla en hassas noktana sürtünüyorum', 'sert küçük aletimle her vuruşta {kalca} kalçan titriyor'],
      mid: ['her girişimde {gogus} memelerin yukarı aşağı oynuyor', 'tam boy aletimle en dibine dokunuyorum', 'her vuruşumda kalçan kalçama çarpıyor'],
      big: ['kalın aletim içini her sokuşta genişletiyor', 'koca aletimle her vuruşta karnına kadar doluyorsun', 'iri aletimle her girişimde {gogus} memelerin zıplıyor'],
      huge: ['dev aletim her sokuşta karnında kabarıyor', 'kazık gibi aletimle her vuruşumda yatak sarsılıyor', 'devasa aletimle seni sonuna kadar germek için ağır ağır giriyorum']
    },
    herAlet: {
      small: ['küçük ama durmadan vuruyorsun, ritmin beni deli ediyor', 'tam hassas yerime değiyorsun, durma', 'hızlı hızlı gidip geliyorsun, nefesim kesiliyor'],
      mid: ['tam ölçümsün, her yerime dokunuyorsun', 'her vuruşunda kalçam titriyor', 'içimi tam dolduruyorsun'],
      big: ['koca aletin içimi genişletiyor', 'her vuruşunda karnımda hissediyorum', 'kalın aletinle her girişinde açılıyorum'],
      huge: ['dev aletin beni parçalıyor, durma', 'öyle büyüksün ki karnım kabarıyor', 'kazık gibisin, her sokuşunda gözlerim kararıyor']
    },
    delik: {
      vagtight: ['daracık amın beni sağıyor, kudurtuyor', 'öyle darsın ki her girişimde inliyorum'], vagmid: ['ıslacık amında kayıp gidiyorum', 'amın beni tam yerinden kavrıyor'],
      vagloose: ['açılmış amına bir hamlede gömülüyorum', 'kaygan amın beni köküne kadar yutuyor'], analtight: ['daracık kalçan aletimi boğuyor, kuduruyorum', 'öyle sıkısın ki her sokuşumda zorlanıyorum'],
      analmid: ['kalçana kayarak gömülüyorum', 'deliğin beni sıcacık sarıyor'], analloose: ['açılmış kalçana köküne kadar dalıyorum', 'rahat deliğinde hızlanıyorum']
    },
    herDelik: {
      vagtight: ['daracık amım seni sıkıyor, yırtılacağım', 'öyle darım ki her santimini hissediyorum'], vagmid: ['ıslacık amım seni içine çekiyor', 'amım sana tam oturdu'],
      vagloose: ['amım seni köküne kadar yutuyor', 'açıldım sana, daha sert'], analtight: ['daracık kalçam seni boğuyor, hissediyor musun?', 'arkam öyle sıkı ki her girişinde inliyorum'],
      analmid: ['kalçam seni sıcacık sarıyor', 'arkamdan doluyorum, durma'], analloose: ['arkam seni köküne kadar alıyor', 'açılmış kalçama sonuna kadar gir']
    },

    /* ── 🐕 Doggy / 🛏️ Misyoner / 🍑 Anal Doggy ── */
    posDoggy: ['kalçasını iki elimle kavrayıp arkasından gömülüyorum', 'dört ayak üstünde, kalçası havada, her vuruşta bana geri itiyor', 'belinin çukuruna bastırıp kalçasını daha da kaldırıyorum',
      'saçlarını avucuma dolayıp başını geriye çekiyorum', '{kalca} kalçası her vuruşta dalgalanıyor', 'arkasından derine, en derine vuruyorum', 'kalçaları kasıklarıma şaklıyor',
      'sırtının kavisi önümde, parmaklarım omurgasında', 'dizlerinin üstünde titriyor, yüzü yastıkta', 'kalçasına bir şaplak atıp yeniden gömülüyorum', 'belini kavrayıp kendime doğru çekerek vuruyorum',
      'arkasından {gogus} göğüslerine uzanıp avuçluyorum'],
    herPosDoggy: ['dört ayak üstündeyim, kalçamı sana uzatıyorum', 'arkamdan her vuruşunda öne savruluyorum', 'kalçamı sana geri itiyorum, daha derine', 'saçlarımı çek, başımı geriye yatır',
      'yüzüm yastıkta, kalçam havada', 'kalçama şaplak at, ne olur', 'belimi bastır, daha da kaldırayım', 'arkamdan öyle derinsin ki dizlerim kayıyor', 'kalçalarım kasıklarına çarptıkça inliyorum',
      'göğüslerim her vuruşunda sallanıyor', 'beni belimden tutup kendine çek', 'arkamdan böyle almana bayılıyorum'],
    posMis: ['üstüne kapanıp gözlerinin içine bakarak giriyorum', 'bacakları belime dolanmış, beni içine çekiyor', 'dirseklerime yaslanıp yüzünü izleyerek vuruyorum', 'dizlerini göğsüne doğru itip derine giriyorum',
      'bileklerini başının üstünde tutup ağır ağır gömülüyorum', 'alnım alnında, her vuruşta nefesi yüzüme çarpıyor', '{gogus} göğüsleri her vuruşta göğsümün altında kayıyor',
      'bacaklarını omuzlarıma alıp en derine iniyorum', 'onu yatağa gömüp kalçalarımı ağır ağır döndürüyorum', 'dudaklarını öperken içinde gidip geliyorum', 'altımda kıvranıyor, gözlerini benden ayırmıyor',
      'kalçasının altına yastık koyup daha derine giriyorum'],
    herPosMis: ['altındayım, gözlerinin içine bakıyorum', 'bacaklarımı beline dolayıp seni içime çekiyorum', 'ağırlığın üstümde, bayılıyorum', 'bileklerimi tut, kıpırdayamayayım',
      'dizlerimi göğsüme it, daha derine gel', 'bacaklarımı omzuna al', 'yüzünü görerek gelmek istiyorum', 'öp beni, içimdeyken öp', 'yatağa göm beni', 'her vuruşunda göğüslerim göğsüne sürtünüyor',
      'kalçamı kaldırıp sana açılıyorum', 'tırnaklarım sırtında, sen içimde'],
    posAnalDoggy: ['kalçasını iki yana açıp arka deliğine ağır ağır giriyorum', 'arkasından kalçasına gömülüyorum, daracık', 'dört ayak üstünde, kalçası açık, her santimde inliyor',
      'belini bastırıp kalçasını havaya kaldırıyorum, sonra derine', 'kayganlaştırıcı parlıyor, her girişimde kalçası titriyor', 'kalçasını avuçlayıp kendime açarak vuruyorum',
      'yüzü yastıkta, kalçasının arasına gömülüyorum', 'arka deliği her çıkışımda beni tutuyor', 'kalçası kasıklarıma her çarpışta dalgalanıyor', 'saçlarını çekip arkasından sertçe giriyorum',
      'kalçasına şaplak atıp arkasına yeniden gömülüyorum', 'ağır ağır başlayıp arkasında hızlanıyorum'],
    herPosAnalDoggy: ['kalçamı açıyorum, arkamdan gir', 'arkamdan ağır ağır, sonra sert', 'dört ayak üstündeyim, arkam sana açık', 'kalçama her girişinde inliyorum', 'arkam öyle dolu ki nefes alamıyorum',
      'belimi bastır, kalçamı kaldırayım', 'kalçalarımı avuçlayıp aç', 'yüzüm yastıkta, arkamda sen', 'arkamdan böyle derin, ilk kez', 'kalçama şaplak at, arkamdan vur', 'saçlarımı çek, arkamdan sertleş',
      'her çıkışında arkam seni geri istiyor'],

    /* ── 🫂 üstünde sımsıkı sarılma (Misyoner) / arkasında sımsıkı sarılma (Anal) · 🛏️ yatakta / 🧱 ayakta, duvara dayayarak ── */
    sarMisYatak: ['üstüne kapanıp bütün ağırlığımla sarılıyorum, şilteye gömülüyor', 'kollarımı sırtının altından geçirip onu kendime kilitliyorum', 'göğsüm göğsünde, kollarım altında; yatakla aramda sıkıştı',
      'yüzümü boynuna gömüp altımda sımsıkı tutuyorum', 'bacakları belimde, kollarım sırtında; tek beden olduk', 'omuzlarını altından kavrayıp kendime bastırarak vuruyorum',
      'çarşafla kollarım arasında kıpırdayamıyor', 'üstünde sımsıkı sarılmışım, sadece kalçalarım hareket ediyor', 'kollarımı başının altına alıp yüzünü yüzüme yapıştırıyorum',
      'bütün bedenimle onu örtüyorum, nefesi kulağımda', 'yatağa gömüp sarılıyorum, kalbi kalbimin altında', 'kollarımın altında kilitli, her vuruşta şilteye batıyor'],
    sarMisAyakta: ['sırtını duvara dayayıp bacaklarını belime doluyorum, sımsıkı sarılıyorum', 'onu duvara yaslayıp kucağımda kaldırıyorum, kollarım sırtında', 'duvarla göğsüm arasında sıkıştırıp sarılıyorum',
      'kalçasının altından kavrayıp duvara bastırarak giriyorum', 'sırtı duvarda, bacakları belimde, kollarım onu kilitlemiş', 'duvara yaslanmış, kollarımın arasında havada duruyor',
      'onu duvara dayayıp yüzümü boynuna gömüyorum', 'her vuruşta sırtı duvara çarpıyor, kollarım bırakmıyor', 'duvarla aramda ezilmiş göğüsleri göğsüme yapışıyor',
      'kucağımda, sırtı duvarda; sımsıkı sarılıp derine iniyorum', 'kollarım sırtıyla duvar arasında, onu korur gibi sarıyorum', 'onu duvara kilitleyip alnımı alnına dayıyorum'],
    sarAnalYatak: ['arkasından üstüne kapanıp kollarımı göğsüne doluyorum', 'yüzüstü yatarken bütün ağırlığımla sırtına yapışıp sarılıyorum', 'kaşık gibi arkasına sokulup kollarımla onu kendime kilitliyorum',
      'kollarım göğsünün altından geçmiş, sırtı göğsüme yapışık', 'arkasından sarılıp ensesine gömülüyorum, kalçasına derin derin giriyorum', 'onu yatağa yüzüstü bastırıp kollarımla sarmalıyorum',
      'bir kolum boynunda, bir kolum belinde; arkasından kilitledim', 'arkasından sımsıkı sarılmışım, sadece kalçalarım hareket ediyor', 'sırtını göğsüme yapıştırıp {gogus} göğüslerini avuçlarımla sarıyorum',
      'yan yatmış, arkasından sarılıp kulağına soluyorum', 'şilteyle göğsüm arasında, kalçasına gömülüyüm', 'arkasından sarıp kendime çekiyorum, her vuruşta inliyor'],
    sarAnalAyakta: ['onu duvara dayayıp arkasından sımsıkı sarılıyorum', 'göğsünü duvara yaslatıp arkasından kollarımı beline doluyorum', 'onu duvarla göğsüm arasında sıkıştırıp kalçasına giriyorum',
      'avuçları duvarda, kollarım belinde, arkasından gömülüyorum', 'yanağı duvarda, ensesi dudaklarımda; arkasından sarılıyorum', 'bir kolumla göğsünü sarıp onu duvara bastırıyorum',
      'duvara yaslanmış, parmak uçlarında; arkasından kilitledim', 'kollarımla onu duvara mıhlayıp derin derin vuruyorum', 'arkasından sımsıkı sarılıp duvara dayıyorum, kaçamaz',
      'duvarla aramda ezilmiş, her vuruşta inliyor', 'kollarımı karnına dolayıp onu duvara bastırarak giriyorum', 'arkasından sarılıp çenesini omzuma yaslatıyorum, önümüzde duvar'],
    herSarMisYatak: ['altında kollarımı sırtına doluyorum, ağırlığın bana iyi geliyor', 'bacaklarımı beline kilitleyip seni kendime gömüyorum', 'yatakla göğsün arasında sıkıştım, bayılıyorum',
      'kollarımı boynuna dolayıp seni dudaklarıma çekiyorum', 'bütün ağırlığınla üstümde ol, sımsıkı sar', 'altında kıpırdayamıyorum, kollarım sende', 'bacaklarım sende kilitli, kaçamazsın',
      'yüzümü boynuna gömüp sarılıyorum', 'şilteye gömülüyorum, sen beni sarıyorsun', 'sırtını tırnaklıyorum, daha sıkı sar', 'kalbin göğsümün üstünde, bırakma', 'tek beden olduk, ayırma'],
    herSarMisAyakta: ['sırtım duvarda, bacaklarım belinde, sımsıkı sarılıyorum', 'beni duvara daya, kollarımla seni tutuyorum', 'kucağındayım, sırtım duvarda; bırakma', 'duvarla göğsün arasında eziliyorum, bayılıyorum',
      'kollarımı boynuna doladım, havadayım', 'her vuruşunda sırtım duvara çarpıyor', 'bacaklarımı beline kilitledim, duvara bastır', 'duvara yasla beni, daha derine', 'kollarınla kalçamı tut, duvara daya',
      'havada, sana tutunarak titriyorum', 'duvar soğuk, sen sıcaksın', 'beni duvara mıhla, kaçmam'],
    herSarAnalYatak: ['arkamdan üstüme kapan, sımsıkı sar', 'kollarını göğsüme dola, kalçama gir', 'yüzüstüyüm, ağırlığın sırtımda, bayılıyorum', 'kaşık gibi sarıl bana, arkamdan',
      'arkamdan sarılırken ensemi öp', 'kollarının arasında kıpırdayamıyorum', 'yatağa bastır beni, arkamdan sar', 'göğüslerimi avuçla, arkamdan sımsıkı', 'arkamdan sarılınca daha derinsin',
      'nefesin kulağımda, sen arkamda', 'şilteyle aranda eziliyorum, devam', 'arkamdan sarıp kendine çek'],
    herSarAnalAyakta: ['beni duvara daya, arkamdan sar', 'göğsüm duvarda, kolların belimde', 'avuçlarım duvarda, sen arkamda', 'yanağım duvarda, arkamdan sımsıkı sar', 'duvarla aranda sıkıştım, arkamdan gir',
      'parmak uçlarımdayım, arkamdan kilitledin', 'kollarınla beni duvara mıhla', 'arkamdan sarılıp duvara bastır', 'duvar soğuk, arkam sıcacık', 'her vuruşunda duvara yaslanıyorum', 'karnımı sar, duvara daya',
      'arkamdan sarılırken çenemi omzuna yasla']
  };
  Object.entries(ADD).forEach(([k, v]) => {
    if (Array.isArray(v)) D.S[k] = (D.S[k] || []).concat(v);
    else { D.S[k] = D.S[k] || {}; Object.entries(v).forEach(([z, a]) => { D.S[k][z] = (D.S[k][z] || []).concat(a); }); }
  });
  Object.assign(D.SL, {
    posDoggy: ['me', '🐕', 'Doggy'], posMis: ['me', '🛏️', 'Misyoner'], posAnalDoggy: ['me', '🍑', 'Anal Doggy'],
    sarMisYatak: ['me', '🫂', 'Üstünde sımsıkı sarılma · Misyoner · 🛏️ yatakta'], sarMisAyakta: ['me', '🧱', 'Üstünde sımsıkı sarılma · Misyoner · ayakta, duvara'],
    sarAnalYatak: ['me', '🫂', 'Arkasında sımsıkı sarılma · Anal · 🛏️ yatakta'], sarAnalAyakta: ['me', '🧱', 'Arkasında sımsıkı sarılma · Anal · ayakta, duvara'],
    herPosDoggy: ['her', '🐕', 'Doggy'], herPosMis: ['her', '🛏️', 'Misyoner'], herPosAnalDoggy: ['her', '🍑', 'Anal Doggy'],
    herSarMisYatak: ['her', '🫂', 'Üstümde sımsıkı sarılma · Misyoner · 🛏️ yatakta'], herSarMisAyakta: ['her', '🧱', 'Sımsıkı sarılma · Misyoner · ayakta, duvara'],
    herSarAnalYatak: ['her', '🫂', 'Arkamda sımsıkı sarılma · Anal · 🛏️ yatakta'], herSarAnalAyakta: ['her', '🧱', 'Arkamda sımsıkı sarılma · Anal · ayakta, duvara']
  });
  D.PK = { doggy: '🐕 Doggy', mis: '🛏️ Misyoner', analdoggy: '🍑 Anal Doggy' };
  D.ST = { yatak: '🛏️ Yatakta', ayakta: '🧱 Ayakta (duvara)' };
  const sar = (id, n, ic, side, pk, st, pool, cum) => ({ id, n, ic, side, ph: ['pos', 'cum'], sp: ['in'], th: 'sarilma', pk, st, t: side === 'me'
    ? { pos: [`{${pool}}… {ritim}. {zevkMe} 🫂`, `{ses}, {o}… {${pool}}; {onunSes} 🥵`, `{${pool}}. {iceri}, {inle} 🫂`, `{${pool}}; {aletVur}. {ses} 🔥`],
        cum: [`{${pool}}… {akisIc}. {akisIc}; {son} 🫂💦`, `{yaklas}; {${pool}}. {ses}! {akisIc}, {hisOnun} 💦`, `{${pool}}, {o}. {akisIc}; {dalga}. {fisilti} 🫂`, `{ses}… {${pool}}; {aletCum}. {son} 💦`] }
    : { pos: [`{${pool}}… {herZevk} 🫂`, `{herSes} {sen}… {${pool}}; {herInle} 🥵`, `{${pool}}. {herIc} 🫂`, `{${pool}}; {herAlet} 🔥`],
        cum: [`{${pool}}… {herAkisIc}. {herSon} 🫂💦`, `{herSes}! {${pool}}; {herAkisIc}, {herHis} 💦`, `{${pool}}. {herDalga}… {herAkisIc} 🫂`, `{herSes}… {${pool}}; {herAkisIc}. {herInle} 💦`] } });
  D.K.push(
    { id: 'dh_pos_doggy', n: 'Doggy', ic: '🐕', side: 'me', ph: ['pos'], th: 'betim', pk: 'doggy',
      t: ['{ses}… {posDoggy}. {zevkMe} 🔥', '{posDoggy}, {o}; {aletVur}. {onunSes} 🥵', '{posDoggy}… {delik}; {inle} 😩', '{posDoggy}. {posDoggy}; {ses} 🔥'] },
    { id: 'dh_pos_her_doggy', n: 'Doggy', ic: '🐕', side: 'her', ph: ['pos'], th: 'betim', pk: 'doggy',
      t: ['{herSes}… {herPosDoggy}! {herInle} 😩', '{herPosDoggy}, {sen}. {herZevk} 🥵', '{herPosDoggy}; {herAlet} 🔥', '{herPosDoggy}… {herDelik} 😩'] },
    { id: 'dh_pos_mis', n: 'Misyoner', ic: '🛏️', side: 'me', ph: ['pos'], th: 'betim', pk: 'mis',
      t: ['{posMis}… {bakis}. {zevkMe} 💗', '{ses}, {o}… {posMis}; {onunSes} 🥵', '{posMis}. {aletVur}; {inle} 😩', '{posMis}; {delik}. {ses} 🔥'] },
    { id: 'dh_pos_her_mis', n: 'Misyoner', ic: '🛏️', side: 'her', ph: ['pos'], th: 'betim', pk: 'mis',
      t: ['{herPosMis}, {sen}… {herZevk} 💗', '{herSes}! {herPosMis}; {herInle} 🥵', '{herPosMis}. {herDelik} 😩', '{herPosMis}; {herAlet} 🔥'] },
    { id: 'dh_pos_adoggy', n: 'Anal Doggy', ic: '🍑', side: 'me', ph: ['pos'], th: 'betim', pk: 'analdoggy',
      t: ['{ses}… {posAnalDoggy}. {delik} 🔥', '{posAnalDoggy}, {o}! {zevkMe}; {onunSes} 😩', '{posAnalDoggy}… {aletVur}. {inle} 🥵', '{posAnalDoggy}; {aletHis}. {ses} 🔥'] },
    { id: 'dh_pos_her_adoggy', n: 'Anal Doggy', ic: '🍑', side: 'her', ph: ['pos'], th: 'betim', pk: 'analdoggy',
      t: ['{herSes}… {herPosAnalDoggy}! {herInle} 😩', '{herPosAnalDoggy}, {sen}. {herDelik} 🥵', '{herPosAnalDoggy}; {herZevk} 🔥', '{herPosAnalDoggy}… {herAlet} 😩'] },
    sar('dh_sar_mis_yatak', 'Üstünde sımsıkı · yatakta', '🫂', 'me', 'mis', 'yatak', 'sarMisYatak'),
    sar('dh_sar_mis_ayakta', 'Üstünde sımsıkı · duvara', '🧱', 'me', 'mis', 'ayakta', 'sarMisAyakta'),
    sar('dh_sar_anal_yatak', 'Arkasında sımsıkı · yatakta', '🫂', 'me', 'analdoggy', 'yatak', 'sarAnalYatak'),
    sar('dh_sar_anal_ayakta', 'Arkasında sımsıkı · duvara', '🧱', 'me', 'analdoggy', 'ayakta', 'sarAnalAyakta'),
    sar('dh_sar_her_mis_yatak', 'Üstümde sımsıkı · yatakta', '🫂', 'her', 'mis', 'yatak', 'herSarMisYatak'),
    sar('dh_sar_her_mis_ayakta', 'Sımsıkı · duvarda', '🧱', 'her', 'mis', 'ayakta', 'herSarMisAyakta'),
    sar('dh_sar_her_anal_yatak', 'Arkamda sımsıkı · yatakta', '🫂', 'her', 'analdoggy', 'yatak', 'herSarAnalYatak'),
    sar('dh_sar_her_anal_ayakta', 'Arkamda sımsıkı · duvarda', '🧱', 'her', 'analdoggy', 'ayakta', 'herSarAnalAyakta')
  );
})(Stories.DH);

/* ➕ v1184: 🍑 arkadan kalça arası · 🦵 bacak arası (arkadan / önden) · 🍒 meme arası sürtünme havuzları (pk rkalca / rbacakArka / rbacakOn / rmeme),
 * 💪 penetrasyon fiilleri (ittirmek, bastırmak, genişletmek, hızlanmak): itme / herItme, penetrasyonlu kalıplara yeni şablonlar */
(function (D) {
  const S = D.S;
  Object.assign(S, {
    rubKalca: ['aletimi kalçalarının arasına yatırıp yavaşça sürtüyorum', '{kalca} kalçalarını iki elimle sıkıştırıp arasında kayıyorum', 'kalçalarının arasındaki sıcak çizgide aşağı yukarı geziniyorum',
      'kalçasının yanaklarını aletimin etrafında kapatıyorum', 'arkasından yapışıp kalça arasına bastıra bastıra sürtüyorum', 'kayganlaştırıcıyla parlayan kalçalarının arasında hızlanıyorum',
      'her sürtüşte ucum belinin çukuruna kadar çıkıyor', 'kalçasını geriye itiyor, arasında daha sıkı kayıyorum', 'kalçalarının arasına gömülüp içine girmeden sürtüyorum',
      'kalçaları aletimi sarmış, her gidişte titriyor', 'arkasından kalçasına yaslanıp ritmimi hızlandırıyorum', 'ucum kalçasının arasından çıkıp kayboluyor, çıkıp kayboluyor',
      'kalça arasının sıcaklığı aletimi sızlatıyor', 'kalçalarını bastırıp sürtüşümü ağırlaştırıyorum'],
    herRubKalca: ['kalçalarımı sıkıştırıp seni arasında tutuyorum', 'kalçamın arasında kaydığını hissediyorum, sıcacıksın', 'kalçamı geriye itiyorum, daha sıkı sürt', 'kalçalarımın arasında zonkluyorsun',
      'belimin çukuruna kadar çıkıyorsun, ürperiyorum', 'kalça arama yağ dök, kaysın', 'içime girmeden arasında böyle sürtünmen deli ediyor', 'kalçamı sana bastırıp yukarı aşağı oynatıyorum',
      'arkamdan yapışmışsın, kalçalarım seni sarıyor', 'her sürtüşünde kalçam titriyor', 'kalçalarımın arasında hızlanıyorsun', 'tenimin üstünde sertliğini hissediyorum, sıcacık'],
    rubBacakArka: ['arkasından uyluklarının arasına kayıyorum', 'bacaklarını sıkıca kapatıyor, aletim uyluklarının arasında sıkışıyor', 'arkasından yapışıp bacaklarının arasından ileri itiyorum',
      'ucum bacaklarının arasından öne çıkıp amına sürtünüyor', 'iç bacaklarının yumuşak teninde ileri geri kayıyorum', 'kalçası kasıklarıma yaslı, aletim bacaklarının arasında',
      'bacaklarını birbirine bastırıp beni sıkıştırıyor', 'her itişte dudaklarına sürtünüp geçiyorum, girmeden', 'arkasından belini tutup uyluklarının arasında hızlanıyorum',
      'iç bacakları ıslak, kaygan; kayıp gidiyorum', 'arkasından sürtünürken {gogus} göğüslerini avuçluyorum', 'uyluklarının arasında sıkışmış aletim zonkluyor'],
    herRubBacakArka: ['bacaklarımı kapatıp seni arkamdan uyluklarımın arasında sıkıyorum', 'arkamdan bacaklarımın arasına kayıyorsun', 'ucun öne çıkıp bana sürtünüyor, ahhh', 'uyluklarımla seni sağıyorum',
      'girmeden bacaklarımın arasında sürtünmen beni deli ediyor', 'iç bacaklarım ıslandı, kayıyorsun', 'kalçamı sana yaslayıp bacaklarımı sıkıyorum', 'arkamdan itiyorsun, dudaklarımdan kayıp geçiyorsun',
      'bacaklarımın arasında zonkluyorsun', 'daha sıkı kapatayım mı?', 'uyluklarım seni bırakmıyor', 'arkamdan hızlandıkça bacaklarım titriyor'],
    rubBacakOn: ['bacaklarını kapatıp uyluklarının arasına önden giriyorum', 'üstüne eğilip birleşik uyluklarının arasında kayıyorum', 'bacaklarını omzuma kaldırıp kapalı uyluklarının arasında sürtüyorum',
      'dizlerini birbirine bastırıp arasına itiyorum', 'iç bacaklarının sıcaklığında ileri geri gidiyorum', 'ucum uyluklarının arasından çıkıp karnına değiyor',
      'gözlerinin içine bakarak bacaklarının arasında hızlanıyorum', 'uyluklarını avuçlayıp aletimin etrafında sıkıyorum', 'yağlı uyluklarının arasında kayıp gidiyorum',
      'her sürtüşte dudaklarının üstünden geçiyorum', 'bacaklarını sımsıkı kapatıyor, beni sıkıştırıyor', 'kapalı bacaklarının arasında aletim zonkluyor'],
    herRubBacakOn: ['bacaklarımı kapatıyorum, uyluklarımın arasına gel', 'bacaklarım omzunda, arasında kayıyorsun', 'dizlerimi birbirine bastırıp seni sıkıyorum', 'ucun karnıma değiyor, sıcacık',
      'gözlerime bakarak bacaklarımın arasında sürtün', 'uyluklarım seni sağıyor', 'her sürtüşünde dudaklarımın üstünden geçiyorsun, titriyorum', 'uyluklarımı yağla, kaysın',
      'bacaklarımın arasında zonkluyorsun', 'daha sıkı mı kapatayım?', 'uyluklarımın sıcaklığında hızlan', 'girmeden böyle sürtünmen beni yakıyor'],
    rubMeme: ['aletimi {gogus} göğüslerinin arasına yatırıyorum', 'göğüslerini iki yandan bastırıp aletimi arasına gömüyorum', 'göğüslerinin arasındaki sıcak boşlukta ileri geri kayıyorum',
      'ucum her itişte göğüslerinin arasından çıkıp çenesine değiyor', 'kayganlaştırıcıyla parlayan göğüslerinin arasında hızlanıyorum', 'göğüs uçlarını parmaklarımla sıkarken arasında sürtüyorum',
      'göğüslerini aletimin etrafında sımsıkı kapatıyor', 'yumuşacık göğüsleri aletimi sarmış, sızlıyorum', 'her sürtüşte göğüsleri yukarı aşağı sallanıyor',
      'dilini uzatıp her çıkışta ucumu yakalıyor', 'göğüslerinin arasında zonkluyorum, damarlarım kabarık', 'diz çökmüş, göğüslerini kaldırıp bana sunuyor'],
    herRubMeme: ['göğüslerimi iki yandan bastırıp seni arasına alıyorum', 'göğüslerimin arasında zonkluyorsun', 'her çıkışında dilimle ucunu yakalıyorum', 'göğüslerimin arasına yağ döküyorum, kaysın',
      'göğüslerim seni sarmış, sıcacıksın', 'ucun çeneme değiyor, gülümsüyorum', 'göğüslerimi yukarı aşağı oynatıyorum', 'arasında sürtünürken göğüs uçlarımı sık',
      'göğüslerimin arasında hızlan', 'diz çöktüm, göğüslerim senin', 'damarlarını göğüslerimin arasında hissediyorum', 'her sürtüşünde göğüslerim sallanıyor'],
    itme: ['kalçalarımı ittirip en dibine kadar bastırıyorum', 'her itişte biraz daha derine ittiriyorum', 'kalçamı bastırıp orada tutuyorum, kıpırdamadan', 'içini santim santim genişleterek ilerliyorum',
      'daracık içini her vuruşta biraz daha genişletiyorum', 'önce ağır, sonra giderek hızlanıyorum', 'hızlandıkça kalçaları kasıklarıma şaklıyor', 'ittiriyorum, bastırıyorum, geri çekip yeniden ittiriyorum',
      'bütün ağırlığımla bastırıp en derinde dönüyorum', 'kalçasını kendime çekip ileri ittiriyorum', 'içi genişledikçe daha da hızlanıyorum', 'son hızla ittirip en dibe bastırıyorum',
      'kökümü ona bastırıp sağa sola döndürüyorum', 'her itişte içi biraz daha açılıyor, genişliyor', 'durmadan hızlanıyorum, yatak sarsılıyor'],
    herItme: ['her ittirişinde nefesim kesiliyor', 'bastır, en dibe bastır', 'içimi genişletiyorsun, hissediyorum', 'hızlan, daha hızlı', 'en derinde bastırıp tut, kıpırdama', 'ittirdikçe içim açılıyor',
      'hızlandıkça kendimi kaybediyorum', 'bütün ağırlığınla bastır', 'santim santim genişletiyorsun beni', 'ittir, geri çek, yeniden ittir', 'bastırdıkça bacaklarım titriyor', 'hızlandıkça çığlıklarım yükseliyor']
  });
  Object.assign(D.SL, {
    rubKalca: ['me', '🍑', 'Sürtünme · arkadan kalça arası'], rubBacakArka: ['me', '🦵', 'Sürtünme · bacak arası, arkadan'], rubBacakOn: ['me', '🦵', 'Sürtünme · bacak arası, önden'],
    rubMeme: ['me', '🍒', 'Sürtünme · meme arası'], itme: ['me', '💪', 'İttirme · bastırma · genişletme · hızlanma'],
    herRubKalca: ['her', '🍑', 'Sürtünme · kalçamın arası'], herRubBacakArka: ['her', '🦵', 'Sürtünme · bacaklarımın arası, arkadan'], herRubBacakOn: ['her', '🦵', 'Sürtünme · bacaklarımın arası, önden'],
    herRubMeme: ['her', '🍒', 'Sürtünme · göğüslerimin arası'], herItme: ['her', '💪', 'İttir · bastır · genişlet · hızlan']
  });
  Object.assign(D.PK, { rkalca: '🍑 Kalça arası (arkadan)', rbacakArka: '🦵 Bacak arası (arkadan)', rbacakOn: '🦵 Bacak arası (önden)', rmeme: '🍒 Meme arası' });
  const rub = (pk, n, ic, me, her) => [
    { id: 'dh_rub_' + pk, n, ic, side: 'me', ph: ['fp', 'pos', 'cum'], sp: ['out'], th: 'betim', pk, t: {
      pos: [`{ses}… {${me}}. {${me}}; {aletHis} 🔥`, `{${me}}, {o}… {zevkMe}; {onunSes} 🥵`, `{${me}}. {aletHis}, {inle} 😩`, `{${me}}… {${me}}. {ses} 🔥`],
      cum: [`{${me}}… {yaklas}. {akisDis}; {akisDis} 💦`, `{ses}! {${me}}; {akisDis}. {hisMe} 💦`, `{yaklas}… {${me}}, {akisDis}. {onunSes} 💦`] } },
    { id: 'dh_rub_her_' + pk, n, ic, side: 'her', ph: ['fp', 'pos', 'cum'], sp: ['out'], th: 'betim', pk, t: {
      pos: [`{herSes}… {${her}}. {herAletHis} 🔥`, `{${her}}, {sen}… {${her}} 🥵`, `{${her}}; {herZevk} 😩`, `Mmmh {sen}… {${her}}. {herSes} 🔥`],
      cum: [`{${her}}… {herAkisDis}. {herHis} 💦`, `{herSes}! {herAkisDis}; {${her}} 💦`, `{${her}}, {sen}… {herAkisDis} 💦`] } }];
  D.K.push(...rub('rkalca', 'Kalça arası', '🍑', 'rubKalca', 'herRubKalca'), ...rub('rbacakArka', 'Bacak arası · arkadan', '🦵', 'rubBacakArka', 'herRubBacakArka'),
    ...rub('rbacakOn', 'Bacak arası · önden', '🦵', 'rubBacakOn', 'herRubBacakOn'), ...rub('rmeme', 'Meme arası', '🍒', 'rubMeme', 'herRubMeme'),
    { id: 'dh_pos_itme', n: 'İttir, bastır, hızlan', ic: '💪', side: 'me', ph: ['pos'], th: 'his', hole: true,
      t: ['{ses}… {itme}. {itme}; {onunSes} 🔥', '{itme}, {o}! {delik}. {inle} 🥵', '{itme}… {zevkMe}; {itme} 😩', '{ses}! {itme}. {aletVur} 🔥'] },
    { id: 'dh_pos_her_itme', n: 'Bastır, hızlan', ic: '💪', side: 'her', ph: ['pos'], th: 'his', hole: true,
      t: ['{herSes}… {herItme}! {herInle} 😩', '{herItme}, {sen}. {herItme} 🥵', '{herItme}… {herDelik}; {herZevk} 🔥', '{herSes} {sen}, {herItme}! {herAlet} 😩'] });
  // 💪 penetrasyonlu kalıplara itme şablonları
  const add = (id, ...ts) => { const k = D.K.find(x => x.id === id); if (k) (Array.isArray(k.t) ? k.t : k.t.pos).push(...ts); };
  add('dh_pos_ritim', '{ritim}… {itme}. {inle} 🔥', '{itme}, {o}. {iceri}; {ses} 🥵');
  add('dh_pos_delik', '{delik}… {itme}; {onunSes} 😩');
  add('dh_pos_alet', '{itme}. {aletVur}… {ses} 🔥');
  add('dh_pos_doggy', '{posDoggy}… {itme}. {onunSes} 🔥');
  add('dh_pos_mis', '{posMis}; {itme}. {bakis} 💗');
  add('dh_pos_adoggy', '{posAnalDoggy}… {itme}; {delik} 😩');
  add('dh_pos_her', '{herIc}… {herItme}! {herInle} 😩');
  add('dh_pos_her_delik', '{herDelik}. {herItme} 🥵');
  add('dh_pos_her_doggy', '{herPosDoggy}; {herItme} 🔥');
  add('dh_pos_her_mis', '{herPosMis}… {herItme} 💗');
  add('dh_pos_her_adoggy', '{herPosAnalDoggy}! {herItme} 😩');
  D.K.filter(k => /^dh_sar_/.test(k.id)).forEach(k => {
    const pool = (k.t.pos[0].match(/\{(\w+)\}/) || [])[1];
    k.t.pos.push(k.side === 'me' ? `{${pool}}… {itme}. {onunSes} 🫂` : `{${pool}}; {herItme} 🫂`);
  });
})(Stories.DH);

/* ➕ v1185: 💦 akışın aletteki hissi (aletimin içinden fışkırma, her damlayı parmak uçlarına kadar hissetme) + "fışkırmak" fiili akış havuzlarında;
 * aletCum kullanmayan boşalma kalıplarına aletCum şablonları */
(function (D) {
  const S = D.S, more = (k, a) => { S[k] = (S[k] || []).concat(a); };
  more('aletCum', ['aletimin içinden fışkırmayı hissediyorum', 'aletimden akan her damlayı parmak uçlarıma kadar hissediyorum', 'her fışkırma aletimin kökünden ucuna kadar yol alıyor',
    'aletimin içinden sıcak sıcak fışkırıyor, her atımı ayrı ayrı hissediyorum', 'fışkırdıkça aletim zonkluyor, damarlarım kabarıyor', 'aletimin içinden geçen her dalga bacaklarımı titretiyor',
    'kökümden kopan sıcaklık aletimin içinden fışkırıp çıkıyor', 'aletim her fışkırmada kasılıp yeniden fışkırıyor', 'son damlaya kadar aletimin içinden akışını hissediyorum',
    'fışkırma aletimin içinde yanarak ilerliyor', 'aletimden fışkıran her atım belimi kesiyor', 'aletimin ucundan fışkırırken bütün sinirlerim yanıyor']);
  more('akisIc', ['en derinine fışkırıyorum, sıcacık', 'her kasılmada içine bir kez daha fışkırıyorum', 'fışkıran dölüm içini dolduruyor', 'fışkırdıkça içi sıcaklığımla taşıyor',
    'ilk fışkırma en dibine çarpıp yayılıyor']);
  more('akisDis', ['{yer} üstüne fışkırıyorum, sıcak şeritler halinde', 'ilk fışkırma uzağa, sonrakiler {yer} üstüne', 'her fışkırmada teninde yeni bir şerit parlıyor',
    'fışkıran dölüm teninde ağır ağır akıyor', 'fışkırdıkça teni sıcaklığımla kaplanıyor']);
  more('akisAgiz', ['dilinin üstüne fışkırıyorum', 'ağzına fışkırdıkça yutkunuyor', 'her fışkırmayı dudaklarını kapatıp içine alıyor', 'boğazına fışkırınca gözleri yaşarıyor', 'fışkıran her damlayı emerek alıyor']);
  more('herAkisIc', ['her fışkırmanı içimin en dibinde ayrı ayrı sayıyorum','en derinime fışkırıyorsun', 'her fışkırmanda içim kasılıyor', 'fışkırdıkça içim doluyor, taşıyor', 'aletinin içimde fışkırırken zonkladığını hissediyorum']);
  more('herAkisDis', ['tenime fışkırıyorsun, sıcacık', 'her fışkırman {yer} üstüne düşüyor', 'fışkırdıkça tenim ürperiyor', 'fışkıran sıcaklığın tenimden süzülüyor']);
  more('herAkisAgiz', ['dilime fışkırıyorsun', 'ağzıma fışkırdıkça yutuyorum', 'boğazıma fışkırınca gözlerim yaşarıyor', 'her fışkırmanı dudaklarımla karşılıyorum']);
  more('herAletHis', ['fışkırmak üzeresin, avucumda hissediyorum', 'aletin avucumda kasılıyor, fışkıracak']);
  const add = (id, ...ts) => { const k = D.K.find(x => x.id === id); if (k) (Array.isArray(k.t) ? k.t : k.t.cum).push(...ts); };
  add('dh_cum_akis_dis', '{ses}… {aletCum}. {akisDis}; {akisDis} 💦', '{aletCum}, {o}… {akisDis} 💦');
  add('dh_cum_akis_agiz', '{ses}… {aletCum}; {akisAgiz} 💦', '{akisAgiz}. {aletCum}… {hisMe} 💦');
  add('dh_cum_akis_ic', '{aletCum}… {aletCum}. {akisIc}; {onunSes} 💦');
  add('dh_cum_his', '{aletCum}… {hisMe}. {aletCum} 💦');
  add('dh_cum_saril_ic', '{saril}… {aletCum}. {akisIc}; {son} 🫂💦');
  add('dh_cum_dalga_ic', '{aletCum}; {dalga}. {akisIc}; {dalga}… {son} 🫂💦');
  add('dh_cum_saril_dis', '{saril}; {aletCum}. {akisDis} 🫂💦');
  add('dh_cum_her_ic', '{herSes}… {herAkisIc}! {herAkisIc} 💦');
  D.K.filter(k => /^dh_rub_r/.test(k.id) && k.side === 'me').forEach(k => {
    const pool = (k.t.pos[0].match(/\{(rub\w+)\}/) || [])[1];
    k.t.cum.push(`{${pool}}… {aletCum}. {akisDis} 💦`, `{ses}! {aletCum}; {akisDis} 💦`);
  });
})(Stories.DH);

/* ➕ v1186: 🫂 sarılma havuzlarına fışkırma. Sadece boşalmada kullanılan havuzlara (dalga / herDalga / son / herSon) doğrudan;
 * seks sırasında da kullanılanlara (saril / herSaril / sar*) ayrı "…Fis" havuzu: sadece boşalma şablonlarında */
(function (D) {
  const S = D.S, more = (k, a) => { S[k] = (S[k] || []).concat(a); };
  more('dalga', ['her fışkırmada kollarım bir kat daha sıkılaşıyor', 'fışkırdıkça sarılıyorum, sarıldıkça fışkırıyorum', 'ilk fışkırmada sarılıyorum, ikincide kilitleniyorum',
    'her fışkırma kollarımı onun etrafında biraz daha kenetliyor', 'fışkırmalar seyreldikçe sarılışım derinleşiyor', 'son fışkırmayla birlikte en sıkı sarılışım geliyor']);
  more('herDalga', ['her fışkırmanda bacaklarımı daha sıkı kilitliyorum', 'fışkırdıkça seni daha çok sarıyorum', 'her fışkırmanda tırnaklarım sırtına biraz daha batıyor',
    'fışkırmaların hızlandıkça kollarım da sıkılaşıyor', 'ilk fışkırmanda sarıldım, sonuncusunda kilitlendim', 'her fışkırmanda seni kendime çekiyorum']);
  more('son', ['son fışkırma da bitiyor, ben hâlâ sarılıyorum', 'son fışkırmadan sonra bile kollarım gevşemiyor', 'fışkırmalar dinince alnımı alnına dayıyorum', 'son fışkırmada ikimiz birden titriyoruz']);
  more('herSon', ['son fışkırmandan sonra da kal', 'fışkırmaların dindi ama bırakma', 'son fışkırmanı hissettim, şimdi sarıl', 'fışkırman bitti, sen hâlâ içimdesin']);
  Object.assign(S, {
    sarilFis: ['onu sımsıkı sarıp fışkırıyorum', 'kollarım kilitli, her fışkırmada onu kendime biraz daha bastırıyorum', 'yüzümü boynuna gömüp fışkırıyorum, kollarım bırakmıyor',
      'aramızda nefes bile yokken fışkırıyorum', 'kollarımın arasında titrerken ilk fışkırma geliyor', 'onu bütün gücümle sarıp son damlaya kadar fışkırıyorum',
      'her fışkırmada kollarım titriyor ama gevşemiyor', 'göğsü göğsüme ezilmişken fışkırıyorum'],
    herSarilFis: ['sımsıkı sarılmışken fışkırdığını hissediyorum', 'kollarım boynunda, sen fışkırıyorsun', 'her fışkırmanda sana daha sıkı sarılıyorum', 'bacaklarım belinde kilitli, fışkırmanı hissediyorum',
      'sarıldıkça fışkırıyorsun, ben de bırakmıyorum', 'yüzüm boynunda, fışkırmanı sayıyorum', 'kollarının arasında fışkırmanı hissedince titriyorum', 'sımsıkı sar beni, fışkır'],
    sarMisYatakFis: ['üstüne kapanmış, onu şilteye gömüp fışkırıyorum', 'kollarım sırtının altında kilitli, en derinine fışkırıyorum', 'yatakla aramda sıkışmışken içine fışkırıyorum',
      'bütün ağırlığımla üstündeyim, her fışkırmada şilteye batıyor', 'alnım alnında, gözlerinin içine bakarak fışkırıyorum', 'bacakları belimde kilitli, içine fışkırıyorum, çıkmama izin vermiyor',
      'onu altımda sımsıkı sarıp son damlaya kadar fışkırıyorum', 'her fışkırmada kollarımı biraz daha sıkıp onu yatağa bastırıyorum'],
    sarMisAyaktaFis: ['sırtı duvarda, bacakları belimde; onu sarıp içine fışkırıyorum', 'onu duvara bastırıp sımsıkı sarılarak fışkırıyorum', 'kucağımda havada, duvara yaslıyken en derinine fışkırıyorum',
      'her fışkırmada sırtı duvara biraz daha yapışıyor', 'onu duvarla göğsüm arasında sıkıştırıp fışkırıyorum', 'kalçasını avuçlarımda tutup duvara dayayarak fışkırıyorum',
      'yüzüm boynunda, onu duvara mıhlayıp fışkırıyorum', 'son fışkırmaya kadar onu duvarla aramda tutuyorum'],
    sarAnalYatakFis: ['arkasından üstüne kapanıp kalçasının derinine fışkırıyorum', 'kollarım göğsüne dolanmış, arkasına fışkırıyorum', 'yüzüstü, ağırlığım sırtında; içine fışkırıyorum',
      'kaşık gibi arkasına sokulmuş, sımsıkı sarılıp fışkırıyorum', 'ensesine gömülüp kalçasına fışkırıyorum', 'şilteyle göğsüm arasında, her fışkırmada inliyor',
      'arkasından kilitlemişim, son damlaya kadar fışkırıyorum', 'her fışkırmada kollarım göğsünde biraz daha sıkılaşıyor'],
    sarAnalAyaktaFis: ['onu duvara dayayıp arkasından sarılarak fışkırıyorum', 'göğsü duvarda, kollarım belinde; kalçasına fışkırıyorum', 'duvarla aramda sıkışmışken arkasına fışkırıyorum',
      'avuçları duvarda, her fışkırmada parmak uçlarına kalkıyor', 'yanağı duvarda, ensesine soluyarak fışkırıyorum', 'onu duvara mıhlayıp en derine fışkırıyorum',
      'kollarımı karnına dolayıp duvara bastırarak fışkırıyorum', 'son fışkırmaya kadar onu duvara yaslı tutuyorum'],
    herSarMisYatakFis: ['altında sımsıkı sarılmışken içime fışkırıyorsun', 'bacaklarım belinde kilitli, fışkırırken bırakmıyorum', 'şilteye gömülmüşüm, en derinime fışkırıyorsun',
      'kollarım sırtında, her fışkırmanda tırnaklarım batıyor', 'gözlerime bakarak fışkır', 'ağırlığın üstümdeyken fışkırmanı hissediyorum', 'yatakla aranda sıkışmışken içime fışkırıyorsun',
      'son fışkırmana kadar seni bırakmıyorum'],
    herSarMisAyaktaFis: ['sırtım duvarda, bacaklarım belinde; içime fışkırıyorsun', 'beni duvara bastırıp fışkırıyorsun', 'havada, sana sarılmışken fışkırmanı hissediyorum',
      'her fışkırmanda sırtım duvara yapışıyor', 'duvarla göğsün arasında, içime fışkırıyorsun', 'kollarım boynunda, fışkırırken titriyorum', 'beni duvara mıhla ve fışkır',
      'son damlana kadar beni duvara yaslı tut'],
    herSarAnalYatakFis: ['arkamdan sarılmışken kalçama fışkırıyorsun', 'kollarının arasında, arkama fışkırmanı hissediyorum', 'yüzüstüyüm, ağırlığın sırtımda; içime fışkırıyorsun',
      'kaşık gibi sarılmışken fışkırıyorsun', 'ensemde nefesin, kalçamda fışkırman', 'her fışkırmanda yastığa inliyorum', 'arkamdan kilitlemişsin, fışkır', 'son damlana kadar arkamda kal'],
    herSarAnalAyaktaFis: ['göğsüm duvarda, arkama fışkırıyorsun', 'beni duvara dayayıp arkamdan fışkırıyorsun', 'avuçlarım duvarda, her fışkırmanda parmak uçlarıma kalkıyorum',
      'yanağım duvarda, kalçama fışkırmanı hissediyorum', 'kolların belimde, arkama fışkırıyorsun', 'duvarla aranda sıkışmışken fışkır', 'arkamdan sarılıp en derine fışkır',
      'son fışkırmana kadar beni duvara yaslı tut']
  });
  const lab = (k, side, ic, n) => { D.SL[k] = [side, ic, n]; };
  lab('sarilFis', 'me', '💦', 'Sarılıp fışkırma'); lab('herSarilFis', 'her', '💦', 'Sarılıp fışkırma');
  ['sarMisYatak', 'sarMisAyakta', 'sarAnalYatak', 'sarAnalAyakta', 'herSarMisYatak', 'herSarMisAyakta', 'herSarAnalYatak', 'herSarAnalAyakta'].forEach(k => {
    const b = D.SL[k] || ['me', '🫂', k]; lab(k + 'Fis', b[0], '💦', b[2] + ' · fışkırarak');
  });
  const add = (id, ...ts) => { const k = D.K.find(x => x.id === id); if (k) (Array.isArray(k.t) ? k.t : k.t.cum).push(...ts); };
  add('dh_cum_saril_ic', '{saril}… {sarilFis}. {aletCum}; {son} 🫂💦', '{ses}! {sarilFis}… {akisIc}. {fisilti} 🫂');
  add('dh_cum_saril_dis', '{sarilFis}… {akisDis}; {son} 🫂💦');
  add('dh_cum_dalga_ic', '{sarilFis}; {dalga}. {dalga}… {son} 🌊💦');
  add('dh_cum_dalga_dis', '{sarilFis}; {dalga}… {son} 🌊💦');
  add('dh_cum_her_saril', '{herSarilFis}… {herAkisIc}. {herSon} 🫂💦', '{herSes}! {herSarilFis}; {herDalga} 🫂');
  add('dh_cum_her_dalga', '{herSarilFis}; {herDalga}… {herSon} 🌊');
  D.K.filter(k => /^dh_sar_/.test(k.id)).forEach(k => {
    const pool = (k.t.pos[0].match(/\{(\w+)\}/) || [])[1];
    k.t.cum.push(...(k.side === 'me'
      ? [`{${pool}Fis}… {aletCum}. {son} 🫂💦`, `{ses}! {${pool}Fis}; {dalga}. {fisilti} 🫂`, `{${pool}}… {${pool}Fis}. {hisOnun} 💦`]
      : [`{${pool}Fis}… {herHis}. {herSon} 🫂💦`, `{herSes}! {${pool}Fis}; {herDalga} 🫂`, `{${pool}}… {${pool}Fis} 💦`]));
  });
})(Stories.DH);
