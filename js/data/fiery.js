/*
 * 🔥 Fiery Passions: köyde geçen, sandbox öğeli görsel roman (Adult Game).
 * Karakterler, mekanlar, haftalık program, hediyeler ve hikaye sahneleri. Mantık js/app.js (renderFP).
 * Zaman: gün = 4 dilim (0 Sabah · 1 Gündüz · 2 Akşam · 3 Gece), haftanın günü 1 Pzt … 7 Paz.
 * Sahneler: { lines: [[kim, metin]], choice: [[seçenek, aff, cevap], [seçenek, aff, cevap]] }; kim = 'c' (karakter) · 'me' (sen) · 'sys' (anlatım).
 * Tutku sahneleri (passions, sırayla açılır): { title, place, loc (arka plan mekanı; yoksa karakterin evi), intro (giriş anlatımı), beats: [[olay kartı, anlatım, onun sözü]] }.
 * Sahnenin ortasında 🔀 MOVES'tan biri seçilir (karakterin tepkisi react[hareket]), sonda hareketin FINS bitişlerinden biri (içe boşalmada son söz react.cin).
 * Tüm karakterler 18+ yetişkinlerdir; akrabalık yoktur.
 */
window.Stories = window.Stories || {};

Stories.FIERY = (() => {
  const SLOTS = ['🌅 Sabah', '☀️ Gündüz', '🌇 Akşam', '🌙 Gece'];
  const DAYS = ['', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi', 'Pazar'];
  const odd = d => d % 2 === 1, wk = d => d <= 5, lesson = d => [1, 3, 5].includes(d);

  // 📍 mekanlar: open(slot, gün) → açık mı, why: kapalıysa neden
  const LOCS = [
    { id: 'oda', name: 'Odan', icon: '🛏️', grad: ['#3a2a4a', '#1c1426'], open: () => true, acts: ['sleep', 'rest', 'laptop'], desc: 'Küçük ama sıcak bir oda. Pencereden köyün çatıları görünüyor.' },
    { id: 'salon', name: 'Oturma odası', icon: '🛋️', grad: ['#6b3a2a', '#2a160e'], open: () => true, desc: 'Yoga minderi, kitaplar ve eski bir şömine.' },
    { id: 'mutfak', name: 'Mutfak', icon: '🍳', grad: ['#7a4a1f', '#2e1a0a'], open: () => true, acts: ['cook'], desc: 'Tarçın ve kahve kokuyor.' },
    { id: 'banyo', name: 'Banyo', icon: '🛁', grad: ['#1f4a5a', '#0a1e26'], open: () => true, desc: 'Buğulu ayna, sıcak su.' },
    { id: 'roxyoda', name: 'Roxy\'nin odası', icon: '🎧', grad: ['#5a1f4a', '#22091c'], open: () => true, desc: 'Posterler, dağınık kitaplar, kapıda "GİRME" yazısı.' },
    { id: 'miaoda', name: 'Mia\'nın odası', icon: '🌸', grad: ['#7a2a4a', '#2a0e1a'], open: s => s >= 2, why: 'Gündüz Mia\'nın odasına girmek olmaz.', desc: 'Lavanta kokulu, düzenli bir oda.' },
    { id: 'market', name: 'Pazar', icon: '🧺', grad: ['#6b5a1f', '#2a220a'], open: s => s < 3, why: 'Pazar gece kapalı.', acts: ['shop', 'work', 'sell'], desc: 'Lily\'nin küçük dükkânı ve tezgâhlar.' },
    { id: 'park', name: 'Park', icon: '🌳', grad: ['#2a5a2a', '#0e220e'], open: () => true, desc: 'Gölgeli banklar, bir salıncak, uzakta bir göl.' },
    { id: 'kolej', name: 'Kolej', icon: '🏫', grad: ['#2a3a6b', '#0e142a'], open: (s, d) => wk(d) && s < 3, why: 'Kolej hafta sonu ve gece kapalı.', desc: 'Eski taş bina; koridorlarda fısıltılar.' },
    { id: 'mudur', name: 'Müdür odası', icon: '🗝️', grad: ['#4a1a1a', '#1a0808'], open: (s, d) => wk(d) && (s === 1 || s === 2), why: 'Müdür odası sadece hafta içi gündüz ve akşam açık.', desc: 'Ağır perdeler, deri koltuk, kırmızı kalem.' },
    { id: 'hastane', name: 'Hastane', icon: '🏥', grad: ['#1f5a5a', '#0a2222'], open: s => s < 3, why: 'Hastane gece kapalı.', desc: 'Bembeyaz, sessiz bir koridor.' },
    { id: 'avaev', name: 'Ava\'nın evi', icon: '🍷', grad: ['#5a1f2a', '#22090e'], open: () => true, desc: 'Modern bir ev, büyük camlar, şarap rafı.' },
    { id: 'ofis', name: 'Ofis', icon: '🗂️', grad: ['#3a3a4a', '#16161e'], open: (s, d) => wk(d) && s < 2, why: 'Ofis sadece hafta içi sabah ve gündüz açık.', desc: 'Klavye sesleri, kahve makinesi, Claire\'in masası.' },
    { id: 'avaofis', name: 'Ava\'nın ofis odası', icon: '💼', grad: ['#2a2a3a', '#0e0e16'], open: (s, d) => wk(d) && s < 2, why: 'Ofis kapalıyken giremezsin.', desc: 'Müdür koltuğu, şehir manzaralı bir tablo.' },
    { id: 'sahil', name: 'Sahil', icon: '🏖️', grad: ['#1f6b8a', '#0a2a3a'], open: s => s < 3, why: 'Gece sahil karanlık ve boş.', acts: ['fish'], desc: 'Kum, dalga sesi, iskele.' },
    { id: 'orman', name: 'Orman', icon: '🌲', grad: ['#1a3a1a', '#050e05'], open: s => s === 3, why: 'Orman sadece gece; gündüz gitmenin anlamı yok.', acts: ['mushroom'], desc: 'Ağaçların arasında ateş böcekleri. Derinlerde bir kulübe.' }
  ];

  // 👩 karakterler: where(slot, gün) → mekan id (ya da ''); gifts: { love: [], like: [], hate: [] }
  const CHARS = [
    { id: 'mia', name: 'Mia', title: 'Pansiyon sahibi · öğretmen', age: 38, color: '#ff8fab', pers: 'Sıcakkanlı, şefkatli, biraz telaşlı',
      bio: 'Yazı geçireceğin pansiyonun sahibi; kolejde öğretmen, evde yoga yapar. Herkesi aile gibi karşılar ama sınır aşılınca kızarıp şakayla azarlar.',
      where: (s, d) => s === 0 ? (lesson(d) ? 'kolej' : [2, 4, 6].includes(d) ? 'salon' : '') : s === 1 ? (d === 6 ? 'sahil' : d === 7 || d === 3 || d === 2 || d === 4 ? 'salon' : [1, 5].includes(d) ? 'market' : '') : s === 2 ? (odd(d) ? 'mutfak' : 'banyo') : 'miaoda',
      gifts: { love: ['yemek', 'cicek'], like: ['kahve', 'kitap'], hate: ['oyunkolu'] },
      intro: 'Geldiğine çok sevindim! Odanı çoktan hazırladım. Yerleş, kendini evinde hisset 🌸',
      talk: ['Kahvaltıda pankek yapayım mı? Sen sever misin?', 'Roxy sana kaba davranıyorsa söyle; aslında iyi bir kızdır.', 'Yoga yapmayı denedin mi hiç? Bel ağrısına birebir.', 'Kolejde bu dönem öğrenciler çok yaramaz… sen onlardan iyisin 😊', 'Bu evde erkek sesi duymak garip ama… güzel.', 'Şöminenin başında çay içelim mi bu akşam?'],
      flirt: [['Ah… sen beni utandırıyorsun 🙈', 'Küçük sapık! 😳 Ama… teşekkür ederim.'], ['Ben senden epey büyüğüm, biliyorsun değil mi?', 'Bunu kimse dememişti bana uzun zamandır…']],
      knock: ['Duştayım! Bekle biraz… ya da… havlumu getirir misin? 🙈', 'Kapı açık değil, merak etme 😳 …ama sesin güzel.'],
      scenes: [
        { title: 'Şömine başında', lines: [['sys', 'Akşam, şöminede çıtırtılar. Mia iki fincan çayla yanına oturuyor.'], ['c', 'Uzun zamandır bu evde kimseyle böyle oturmamıştım.'], ['c', 'Roxy hep odasında… ben de hep yalnız.']],
          choice: [['Artık yalnız değilsin', 12, 'Gözleri doluyor; başını omzuna yaslıyor 🥺'], ['Roxy\'yle konuşayım mı?', 4, 'İyi kalpli birisin… ama mesele o değil.']] },
        { title: 'Yoga dersi', lines: [['sys', 'Sabah; Mia yoga minderinde. Seni görünce el sallıyor.'], ['c', 'Gel, sana bir hareket göstereyim. Ellerini belime koy… doğru duruş için.'], ['sys', 'Teni sıcak; nefesi bir an duruyor.']],
          choice: [['Ellerimi biraz daha tut', 12, 'Fısıldıyor: "Bu yoga değil artık…" ama çekilmiyor 😳'], ['Hareketi tek başıma deneyeyim', 3, 'Gülümsüyor: "Çok terbiyelisin."']] },
        { title: 'Gece yarısı mutfak', lines: [['sys', 'Gece; mutfakta sadece buzdolabının ışığı. Mia ince bir geceliğin içinde.'], ['c', 'Uyuyamadım… sen de mi?'], ['c', 'Bir şey itiraf edeyim mi? Son günlerde hep seni düşünüyorum.']],
          choice: [['Ben de seni', 15, 'Dudakları dudaklarına değiyor; titriyor 💋'], ['Uyumamız lazım', 2, 'Başını sallıyor: "Haklısın… haklısın."']] }],
      react: { soft: 'Evet… böyle, yavaşça. Gözlerime bak 💗', rough: 'Ah! …yani, evet. Biraz daha sert 😳', anal: 'Orası mı? Hiç denemedim… yavaş olursan, evet 🙈', oral: 'Bırak ben yapayım… sen bana çok şey verdin.', tits: 'Bunları hep saklardım… artık senin 😳', cin: 'Uzun zamandır… kendimi bu kadar dolu hissetmemiştim. Sarıl bana, bırakma 💗' },
      passions: [
        { title: 'Lavanta kokulu gece', place: 'Mia\'nın odası', intro: 'Gece yarısı. Lavanta kokan odada sadece başucu lambası yanıyor; Mia kapıyı arkandan usulca kapatıyor, ince saten geceliği teninde parlıyor.', beats: [
          ['Kissing', 'Dudakları önce çekingen, sonra aç bir şekilde dudaklarına bastırıyor; parmakları enseni kavrıyor.', 'Yıllardır kimse beni böyle öpmedi…'],
          ['Show Tits', 'Geceliğin askısını kendi eliyle omzundan indiriyor; dolgun göğüsleri lamba ışığında inip kalkıyor.', 'Bakma öyle… yani… bak. Dokun.'],
          ['Cunnilingus', 'Onu yatağa yatırıp bacaklarını aralıyorsun; dilinin her dokunuşunda kalçaları çarşaftan kalkıyor, parmakları saçlarına gömülüyor.', 'Ahh… orası… sakın durma 💗'],
          ['Missionary', 'Seni üstüne çekiyor; içine yavaşça girdiğinde gözleri kapanıyor, bacaklarını beline doluyor.', 'Yavaş… her anını hatırlamak istiyorum.']] },
        { title: 'Buğulu banyo', place: 'Banyo', loc: 'banyo', intro: 'Duşun buharı aynayı tamamen kaplamış. Mia perdenin ardında, sıcak suyun altında; kapıyı kilitlemediğini fark ediyorsun.', beats: [
          ['Back Hugging', 'Arkasından sokulup ıslak belini sarıyorsun; sırtını göğsüne yaslayıp başını omzuna bırakıyor.', 'Kapıyı bilerek açık bıraktım… anladın, değil mi? 🙈'],
          ['Handjob', 'Sabunlu eliyle aşağı uzanıyor; köpüklerin arasında seni ağır ağır okşarken nefesi boynunu ısıtıyor.', 'Bu kadar sertleşmişsin… benim için mi?'],
          ['Standing', 'Onu fayanslara yaslayıp bir bacağını kaldırıyorsun; su ikinizin arasından akarken içine giriyorsun.', 'Ahh… su soğumadan… daha!'],
          ['Standing doggy', 'Ellerini duvara dayayıp kalçasını sana doğru itiyor; her vuruşta ıslak tenden şaplaklar yankılanıyor.', 'Roxy duyacak… umurumda değil!']] },
        { title: 'Mutfak tezgâhı', place: 'Mutfak, sabaha karşı', loc: 'mutfak', intro: 'Sabahın ilk ışıkları. Mia sadece senin gömleğinle kahve yapıyor; düğmelerin yarısı açık, çıplak bacakları tezgâha dayalı.', beats: [
          ['Lap Kissing', 'Sandalyede kucağına oturuyor; kahve unutuluyor, gömleğin altından sıcak teni avuçlarına doluyor.', 'Kahvaltıyı unut… önce sen 😳'],
          ['Cunnilingus', 'Onu tezgâhın üstüne oturtuyorsun; bacaklarını açarken mermerin soğukluğuna inleyip başını geriye atıyor.', 'Tezgâh buz gibi ama sen… ahh, alev gibisin.'],
          ['Ondesk', 'Tezgâhın kenarında, bacakları omuzlarında; tencereler her vuruşta tıkırdıyor.', 'Daha derin… evet, oraya!'],
          ['Cowgirl', 'Seni sandalyeye itip üstüne çıkıyor; göğüsleri gömlekten taşarken kalçalarını ritimle döndürüyor.', 'Roxy uyanmadan… çabuk, ama derin 💗']] },
        { title: 'Yoga dersi', place: 'Oturma odası, yoga minderi', loc: 'salon', intro: 'Sabah dersi. Mia daracık tayt ve spor sütyeniyle minderde; "esneme hareketine yardım et" diyor ama gözleri başka bir şey söylüyor.', beats: [
          ['Front Hugging', 'Ona destek olurken teni teninde; öne eğildiğinde kalçası tam kucağına yaslanıyor.', 'Bu… yoga değil artık, değil mi? 😳'],
          ['Show Ass', 'Taytını yavaşça kalçalarından aşağı sıyırıyor; minderde dört ayak üstünde omzunun üstünden sana bakıyor.', 'Duruşum nasıl? 😏'],
          ['Doggy', 'Belinden kavrayıp arkasından giriyorsun; nefes egzersizi unutuluyor, inlemeleri salonu dolduruyor.', 'Nefesimi… tutamıyorum… ahh!'],
          ['Spooning', 'Minderde yan yana uzanıyorsunuz; bir bacağını kaldırıp seni kendine çekiyor, yavaş ve derin.', 'Bundan sonra her sabah ders var 💗']] },
        { title: 'Fırtınalı gece', place: 'Oturma odası, şömine önü', loc: 'salon', intro: 'Dışarıda fırtına, elektrikler kesik. Mia şöminenin önüne kalın bir battaniye seriyor; alevler çıplak omuzlarında dans ediyor.', beats: [
          ['Kissing', 'Şarap kokan dudakları dudaklarında; battaniyenin altında elleriniz birbirini keşfediyor.', 'Işıklar hiç gelmesin…'],
          ['Titfuck', 'Dizlerinin arasına kayıp göğüslerini avuçlarında birleştiriyor; ateşin ışığında gözlerini senden ayırmıyor.', 'Bunu hep merak etmiştim… hoşuna gidiyor mu? 😳'],
          ['Lap Sex', 'Kucağına oturup kollarını boynuna doluyor; alnı alnında, ağır ağır inip kalkıyor.', 'Seni hissediyorum… her yerimde.'],
          ['Missionary', 'Battaniyeye uzanıp seni üstüne çekiyor; alevlerin çıtırtısı inlemelerine karışıyor.', 'Bırakma beni… bu gece hiç bırakma 💗']] }] },
    { id: 'roxy', name: 'Roxy', title: 'Ev arkadaşın · Mia\'nın kızı', age: 20, color: '#c084fc', pers: 'Tsundere: gururlu, ağzı bozuk, aslında iyi kalpli',
      bio: 'Mia\'nın kızı ve ev arkadaşın; kolejde okuyor. Yüzeyde saldırgan ve kibirli ama annesinin dediği gibi aslında "iyi bir kız". Kavgalar zamanla flörte dönüşür.',
      where: (s, d) => s === 0 ? (lesson(d) ? 'kolej' : [2, 4, 6].includes(d) ? 'park' : '') : s === 1 ? (d === 2 ? 'sahil' : 'roxyoda') : s === 2 ? (odd(d) ? 'banyo' : 'mutfak') : 'roxyoda',
      gifts: { love: ['cikolata', 'oyunkolu'], like: ['pelus'], hate: ['kitap'] },
      intro: 'Sen de kimsin? Annemin "misafiri" mi? Banyoyu kilitlemeyi unutma, yoksa öldürürüm 😤',
      talk: ['Ne bakıyorsun? Yüzümde bir şey mi var?!', 'Annem seni çok seviyor… sinir bozucu.', 'Bu kitap? Hiç. Romantik değil. Kapa çeneni 😳', 'Kolejde Liza\'dan uzak dur; yılandır o.', 'Bugün iyi görünüyorsun… YANİ hayır, öyle demek istemedim!', 'Bana çikolata almayı unutma, yoksa… hiç.'],
      flirt: [['Hı?! Sen ne diyorsun be?! 😳 …devam et.', 'Aptal… ama komik.'], ['İğrençsin. Bir daha söyle.', 'Kes şunu! …hayır, kesme.']],
      knock: ['DEFOL! Duştayım! …tamam, bekle, havlu at bari 😤', 'Kapıyı bir daha çalarsan… içeri gelmen lazım ki seni döveyim 😏'],
      scenes: [
        { title: 'Özür', lines: [['c', 'Dünkü banyo olayı için hâlâ kızgınım!'], ['c', 'Beni affetmeni istiyorsan… özür dile. Düzgünce.']],
          choice: [['Özür dilerim, gerçekten', 10, '"…Hm. Kabul. Ama bir kere daha olursa!" Yanakları kıpkırmızı.'], ['Sen de kapıyı kilitleseydin', 3, '"Seni gerizekalı!" diye bağırıyor ama gülüyor.']] },
        { title: 'Parkta koşu', lines: [['sys', 'Sabah parkı; Roxy koşudan nefes nefese.'], ['c', 'Benimle yarışır mısın? Kaybeden… kazananın dediğini yapar.']],
          choice: [['Kaybetmeye razıyım 😏', 12, 'Kazanıyor ve yanına yaklaşıp fısıldıyor: "O zaman… beni öp."'], ['Yarışırım, kazanacağım', 6, 'Kıl payı kazanıyorsun; surat asıyor ama elini tutuyor.']] },
        { title: 'Kilitli kapının ardında', lines: [['sys', 'Gece; Roxy\'nin kapısı aralık. İçeriden adını fısıldıyor.'], ['c', 'Gel buraya… kimseye söylersen ölürsün, anladın mı?'], ['c', 'Sana kızgın değilim. Hiç olmadım galiba.']],
          choice: [['Biliyorum 💕', 15, 'Yatağın kenarına çekip sarılıyor; kalbinin atışı duyuluyor.'], ['Emin misin?', 3, '"Aptal! Tabii eminim!"']] }],
      react: { soft: 'Y-yavaş mı? Ben kırılgan değilim! …ama tamam, böyle güzel 💕', rough: 'Hah! Sonunda erkek gibi davranıyorsun 😤🔥', anal: 'Ne?! Orası… tamam, ama acıtırsan seni öldürürüm 😤', oral: 'Sus. Sadece izle ve kıpırdama.', tits: 'Küçük olduklarını söyleme sakın! …hoşuna gidiyor, değil mi? 😳', cin: 'Aptal… hepsini içime bıraktın. Sorumluluğunu alacaksın, duydun mu?! 😤💕' },
      passions: [
        { title: 'Kilitli kapı', place: 'Roxy\'nin odası', intro: 'Kapı kilitli, müzik sonuna kadar açık. Roxy yatağın kenarında, üstünde sadece bol bir tişört; yanakları kıpkırmızı.', beats: [
          ['Kissing', 'Yakandan tutup kendine çekiyor; öpüşü kaba ve aceleci, dişleri dudağına sürtünüyor.', 'Bunu kimseye söylersen…'],
          ['Blowjob', 'Seni yatağa itip önünde diz çöküyor; gözlerini meydan okurcasına gözlerine dikip dudaklarını yavaşça kaydırıyor.', 'Ne bakıyorsun? …iyi mi yapıyorum? 😳'],
          ['Cowgirl', 'Tişörtü başından sıyırıp üstüne çıkıyor; ellerini göğsüne dayayıp kalçalarını hırsla indiriyor.', 'Işığı kapat… hayır, açık kalsın. Seni görmek istiyorum.'],
          ['Doggy', 'Dönüp yatağa kapanıyor, kalçasını havaya kaldırıyor; inlememek için yastığı ısırıyor.', 'Sus ve devam et 😤💕']] },
        { title: 'Oyun gecesi', place: 'Roxy\'nin odası, konsol başında', intro: 'Ekranda "GAME OVER". Roxy kumandayı fırlatıp sana dönüyor: iddiayı kaybetti, kaybeden de kazananın dediğini yapacaktı.', beats: [
          ['Lap Kissing', 'Kucağına oturuyor, kollarını boynuna dolayıp somurtarak öpüyor.', 'Tamam, kaybettim! Mutlu musun?! 😤'],
          ['Titfuck', 'Tişörtünü yukarı sıyırıp göğüslerini aralıyor; utancından gözlerini kaçırsa da durmuyor.', 'Bakma öyle… yani bak. Sadece bana.'],
          ['Lap Sex', 'Oyun koltuğunda kucağında; koltuk her hareketinizde gıcırdıyor.', 'Bir el daha oynasak… yine kaybederim 😏'],
          ['Spooning', 'Halıya uzanıp seni arkasına çekiyor; boynunu öperken yavaşça içine giriyorsun.', 'Aptal… çok iyi geliyor 💕']] },
        { title: 'Issız koy', place: 'Sahil, ıssız koy', loc: 'sahil', intro: 'Kayaların arkasında kimsenin bilmediği küçük bir koy. Roxy havluyu seriyor, etrafa bakıyor ve bikinisinin ipini çözüyor.', beats: [
          ['Kissing', 'Tuzlu dudaklar, güneşte ısınmış ten; kumun üstünde birbirinize sarılıyorsunuz.', 'Kimse yok, değil mi? Emin misin?'],
          ['69', 'Üstüne ters uzanıyor; dili seni bulurken sen de kalçalarını kavrayıp ona dalıyorsun.', 'Mmh… kum her yere giriyor ama umurumda değil!'],
          ['Missionary', 'Havluya yatırıp bacaklarını aralıyorsun; dalgaların sesi inlemelerini yutuyor.', 'Daha… daha hızlı!'],
          ['Doggy', 'Dizlerinin üstüne dönüp kumu avuçluyor; sırtında güneş, kalçasında ellerin.', 'Bunu yine yapacağız. Bu bir emir 😤🔥']] }] },
    { id: 'ava', name: 'Ava', title: 'Şirket müdürü · Mia\'nın arkadaşı', age: 34, color: '#f43f5e', pers: 'Cesur, flörtöz; altında kırılgan',
      bio: 'Yerel bir şirketin müdürü, Mia\'nın en yakın arkadaşı. Şehirde aldatılıp köye kaçmış; yalnızlığını cüretkâr bir flörtün arkasına saklar.',
      where: (s, d) => s === 3 ? 'avaev' : s === 1 && d === 6 ? 'sahil' : s === 1 && d === 7 ? 'salon' : s === 2 && [1, 3].includes(d) ? 'market' : s < 2 && wk(d) ? 'avaofis' : 'avaev',
      gifts: { love: ['sarap'], like: ['cicek', 'ruj'], hate: ['pelus'] },
      intro: 'Demek Mia\'nın yeni misafiri sensin… Kimse bana böyle yakışıklı biri geleceğini söylememişti 🍷',
      talk: ['Şarap mı, viski mi? Ben ikisini de seviyorum.', 'Şehirde her şeyim vardı… bir yalan hepsini aldı.', 'Mia çok iyi kalplidir; ben biraz… daha az iyiyim 😏', 'Ofiste herkes benden korkar. Sen korkmuyorsun, değil mi?', 'Bazen bu ev çok sessiz geliyor.', 'Gel otur, bacaklarım ağrıyor; topuklu ayakkabı işkence.'],
      flirt: [['İşte bu cesaret hoşuma gitti 😏', 'Devam et… bakalım nereye kadar.'], ['Daha iyisini yapabilirsin.', 'Hmm, bu geceye saklayalım.']],
      scenes: [
        { title: 'Şarap daveti', lines: [['c', 'Dinle, yarın akşam bana gel… bazen çok yalnız hissediyorum.'], ['sys', 'Ertesi akşam; kadehler doluyor, Ava kanepede bacak bacak üstüne atıyor.'], ['c', 'Bana neden geldin? Dürüst ol.']],
          choice: [['Seni merak ettim', 12, 'Kadehini bırakıp yaklaşıyor: "Merak iyidir…"'], ['Mia söyledi', 2, 'Gülüyor: "Hâlâ çocuksun."']] },
        { title: 'Ofiste mesai sonrası', lines: [['sys', 'Ofis boşalmış; Ava camın önünde, şehir ışıkları gibi köyün lambaları.'], ['c', 'Kapıyı kilitle. Claire görmesin.']],
          choice: [['Kilitliyorum 🔒', 14, 'Ceketini çıkarıyor: "İşte böyle."'], ['Burası iş yeri', 3, '"Sıkıcısın" diyor ama gülümsüyor.']] },
        { title: 'Kırılgan an', lines: [['c', 'Biliyor musun… beni aldatan adamdan sonra kimseye dokunmadım.'], ['c', 'Sana dokunmak istiyorum ama korkuyorum.']],
          choice: [['Ben buradayım, gitmiyorum', 16, 'Gözyaşı yanağından süzülüyor; seni öpüyor 💋'], ['Acele etmeyelim', 6, '"Teşekkürler…" diyor, eline sıkıca tutunuyor.']] }],
      react: { soft: 'Yavaş mı? Kimse bana yavaş davranmazdı… devam et 🥹', rough: 'İşte bu! Göster bakalım neler yapabiliyorsun 😈', anal: 'Hmm… cesursun. Hoşuma gitti. Yağ çekmecede 😏', oral: 'Otur. Bu benim işim.', tits: 'Bunları herkes kıskanır… ama sadece sen dokunursun.', cin: 'Hmm… sıcacık. Bunu sabaha kadar içimde taşıyacağım 😈' },
      passions: [
        { title: 'Şarap ve camlar', place: 'Ava\'nın evi', intro: 'Büyük camların ardında köyün ışıkları. Ava ikinci şişeyi açıyor ve kırmızı elbisesinin fermuarını indirmeni istiyor.', beats: [
          ['Kissing', 'Şarap tadındaki dudakları; seni duvara yaslayıp kontrolü ele alıyor.', 'Bu gece benimsin 😈'],
          ['Show Tits', 'Elbise yere süzülüyor; dantel sütyenini çıkarıp göğüslerini avuçlarına bırakıyor.', 'Beğendin mi? Herkes bakar ama kimse dokunamaz.'],
          ['Blowjob', 'Halıda diz çöküp kemerini çözüyor; ağır, ustaca, gözleri hep gözlerinde.', 'Sabırsızlanma… gece uzun.'],
          ['Ondesk', 'Yemek masasındaki kadehleri koluyla süpürüyor; devrilen şarap teninden süzülürken onu masaya yatırıyorsun.', 'Bırakma beni…']] },
        { title: 'Müdür koltuğu', place: 'Ava\'nın ofis odası', loc: 'avaofis', intro: 'Öğle arası. Ava telefonu kapatıp perdeleri indiriyor; dar etek, ince gözlük ve tehlikeli bir gülümseme.', beats: [
          ['Show Ass', 'Masasına eğilip eteğini yavaşça yukarı topluyor; altında hiçbir şey yok.', 'Toplantı iptal. Kapıyı kilitle.'],
          ['Deepthroat', 'Seni deri koltuğa oturtup önünde diz çöküyor; ruju iz bırakarak seni sonuna kadar alıyor.', 'Sekreter duyacak… bırak duysun.'],
          ['Ondesk', 'Raporları yere savurup masaya uzanıyor; topukluları omuzlarında.', 'Raporlar dağılsın, umurumda değil 😈'],
          ['Cowgirl', 'Seni kendi koltuğuna oturtup üstüne çıkıyor; şehir manzaralı tablonun önünde kalçalarını savuruyor.', 'Artık patron sensin… sadece bu odada.']] },
        { title: 'Birlikte sabah', place: 'Ava\'nın evi, sabah', intro: 'Gün ışığı çarşaflara vuruyor. Ava ilk kez birinin yanında uyanıyor; makyajsız, saçları dağınık ve hiç olmadığı kadar savunmasız.', beats: [
          ['Back Hugging', 'Arkasından sarılıyorsun; elini tutup göğsüne bastırıyor, kalbinin hızlandığını hissediyorsun.', 'Gitme… bu sefer sabahı birlikte görelim.'],
          ['Cunnilingus', 'Çarşafın altına kayıyorsun; sabah mahmurluğuyla gerinip uzun, kırılgan bir inilti bırakıyor.', 'Ne zamandır kimse yanımda uyanmamıştı.'],
          ['Spooning', 'Yan yatıp seni içine alıyor; acele yok, sadece nefesler ve yavaş hareketler.', 'Böyle… hep böyle kal.'],
          ['Missionary', 'Sırtüstü dönüp yüzünü avuçluyor; gözlerinde ilk kez korku değil, güven var.', 'Yavaş… bu sefer hiç acele yok 💕']] },
        { title: 'Gece havuzu', place: 'Ava\'nın evi, havuz başı', intro: 'Arka bahçede ışıklı bir havuz. Misafirler gitmiş; Ava şampanya kadehini kenara bırakıp suya çırılçıplak giriyor.', beats: [
          ['Front Hugging', 'Suyun içinde sana sarılıyor; ıslak göğüsleri göğsüne bastırılmış, bacakları belinde.', 'Su sıcak… ama sen daha sıcaksın.'],
          ['Standing', 'Havuzun kenarına yaslanıp seni içine alıyor; su her hareketinizde dalgalanıyor.', 'Komşular görebilir… iyi 😈'],
          ['Hotdogging', 'Havuzdan çıkıp şezlonga eğiliyor; ıslak kalçalarının arasında seni ağır ağır kaydırıyor.', 'Acele etme… önce beni deli et.'],
          ['Standing doggy', 'Şezlongu tutup kalçasını kaldırıyor; şampanya kadehleri yere devriliyor.', 'Daha sert! Bütün köy duysun!']] },
        { title: 'Kırmızı oda', place: 'Ava\'nın evi, gizli oda', intro: 'Ava şarap rafının arkasındaki kapıyı açıyor: kırmızı ışıklı, ipek çarşaflı, duvarında kelepçeler asılı bir oda. "Şehirden kalan tek sırrım" diyor.', beats: [
          ['Sex toys', 'Çekmeceden titreşimli bir oyuncak çıkarıp eline tutuşturuyor; yatağa uzanıp bacaklarını açıyor.', 'Önce bununla… sonra seninle.'],
          ['Facesitting', 'Kontrolü geri alıp yüzüne oturuyor; yatağın başlığını kavrayıp kalçalarını yavaşça dilinde döndürüyor.', 'Nefes al… ya da alma 😈'],
          ['Cowgirl Anal', 'Yağlı parmaklarıyla seni hazırlayıp sırtını dönüyor; dişlerini sıkarak seni yavaş yavaş kalçasına alıyor.', 'Ahh… uzun zaman oldu… dur… şimdi devam!'],
          ['Full Nelson', 'Kollarını kilitleyip onu kaldırıyorsun; çığlıkları kırmızı duvarlarda yankılanıyor.', 'Bu odaya kimseyi almadım… sen ilksin.']] }] },
    { id: 'lily', name: 'Lily', title: 'Market sahibi', age: 23, color: '#facc15', pers: 'Utangaç, tatlı, çalışkan',
      bio: 'Köydeki küçük marketin sahibi. Ağır kolileri tek başına taşıyacak kadar çok çalışır; erkek görmeye alışık olmadığı için seninle konuşurken kekeler.',
      where: (s, d) => s === 2 && d === 4 ? 'sahil' : s < 3 ? 'market' : '',
      gifts: { love: ['cicek', 'pelus'], like: ['cikolata'], hate: ['sarap'] },
      intro: 'Vay canına! Gerçek bir erkek! Kusura bakma, ben sadece… burada yeni yüzleri çok nadir görüyoruz 🙈',
      talk: ['Bugün koliler çok ağırdı… yardım eder misin? 🥺', 'Ç-çok güzel bir gün, değil mi?', 'Chloe bazen bana garip siparişler veriyor 😳', 'Sana kurabiye ayırdım! Kimseye söyleme.', 'Akşamları sahilde balık tutmayı severim.', 'Ellerin çok güçlü… y-yani, koliler için!'],
      flirt: [['B-ben… ne diyeceğimi bilmiyorum 🙈', 'Yüzüm yanıyor şu an!'], ['Ş-şaka mı yapıyorsun?', 'Kimse bana böyle demedi…']],
      scenes: [
        { title: 'Teslimat', lines: [['sys', 'Lily ağır bir kolinin altında ezilmek üzere.'], ['c', 'Ah! Y-yardım eder misin? 🥺']],
          choice: [['Ver, ben taşırım', 12, 'Kolileri taşıyorsun; "Kahramanım!" diyor ve yanağına öpücük konduruyor 💋'], ['Bir el atayım', 6, 'Beraber taşıyorsunuz, elleri ellerine değiyor.']] },
        { title: 'Depoda', lines: [['sys', 'Dükkânın arkasındaki küçük depo; ışık loş.'], ['c', 'Ş-şu üst rafa uzanamıyorum… beni kaldırır mısın?']],
          choice: [['Belinden kaldırıyorum', 14, 'Raftaki kutuyu unutup sana sarılıyor 🙈'], ['Merdiveni getireyim', 3, '"Ah… evet, merdiven. Mantıklı." Biraz hayal kırıklığı.']] },
        { title: 'Sahilde gün batımı', lines: [['c', 'Hiç kimseyle gün batımı izlememiştim…'], ['c', 'Sence ben… güzel miyim?']],
          choice: [['Gördüğüm en güzel kız', 16, 'Gözlerini kapatıyor, ilk öpücüğü titrek 💕'], ['Tabii güzelsin', 6, 'Gülümsüyor, başını omzuna koyuyor.']] }],
      react: { soft: 'Evet… böyle… çok güzel 🥺', rough: 'S-sert mi? …t-tamam, deneyelim 😳', anal: 'O-orası mı? …yavaş ol, söz mü? 🥺', oral: 'Ben de… seni mutlu etmek istiyorum.', tits: 'Bunlar… çok mu büyük? Hep utanırdım 🙈', cin: 'İçim… sıcacık oldu. Bu his hiç geçmesin… 🥺💛' },
      passions: [
        { title: 'Depoda', place: 'Market deposu', intro: 'Kolilerin arasında, loş bir ampulün altında. Lily depo kapısını titreyen elleriyle kilitliyor; önlüğünün kurdelesini çözemiyor bile.', beats: [
          ['Kissing', 'Önlüğünü sen çözüyorsun; dudakları titriyor, sonra parmak uçlarında yükselip seni öpüyor.', 'Kapıyı kilitledim… k-kimse gelmez.'],
          ['Front Hugging', 'Göğsüne sokulup kalp atışını dinliyor; elbisesinin düğmelerini tek tek açmana izin veriyor.', 'Bunu hiç yapmadım… nazik ol 🥺'],
          ['Cunnilingus', 'Un çuvallarının üstüne oturtup diz çöküyorsun; elleriyle ağzını kapatıp sessiz kalmaya çalışıyor ama başaramıyor.', 'Ahh… ne yapıyorsun… durma…'],
          ['Missionary', 'Battaniye serili kolilerin üstünde; içine girerken tırnaklarını sırtına geçiriyor.', 'Ahh… devam et lütfen…']] },
        { title: 'Kapanış saati', place: 'Pazar, kapanış saati', intro: 'Son müşteri de gitti. Lily kepengi yarıya indirip perdeyi çekiyor; tezgâhın arkasında, yüzünde yeni bir cesaret.', beats: [
          ['Kissing', 'Tezgâha yaslanıp seni kendine çekiyor; bu sefer öpüşü daha emin.', 'Dükkânı kapattım… perdeyi de çektim 🙈'],
          ['Blowjob', 'Tezgâhın arkasında diz çöküyor; acemice ama istekle, gözlerini kaldırıp onay bekliyor.', 'D-doğru mu yapıyorum?'],
          ['Cowgirl', 'Seni tabureye oturtup üstüne çıkıyor; ilk kez kontrol onda ve bunu sevdiği her halinden belli.', 'Bu sefer… ben üste çıkabilir miyim?'],
          ['Doggy', 'Tezgâha kapanıp önlüğünü sıyırıyor; meyve kasaları her vuruşta sallanıyor.', 'Sesimi duyacaklar… ahh, umurumda değil!']] },
        { title: 'İskele altında piknik', place: 'Sahil, iskele altı', loc: 'sahil', intro: 'İskelenin gölgesinde bir piknik örtüsü, ev yapımı kurabiyeler. Lily yazlık elbisesinin altına hiçbir şey giymediğini kızararak itiraf ediyor.', beats: [
          ['Front Hugging', 'Örtünün üstünde sarılıyorsunuz; elbisesinin eteği rüzgârla uçuşuyor.', 'Sepete sana kurabiye koydum… ve başka bir şey de 😳'],
          ['Cunnilingus', 'Eteğinin altına kayıyorsun; ellerini kuma gömüp dalgaların sesine karışan iniltilerle titriyor.', 'Dalgalar sesimizi bastırır, değil mi?'],
          ['Lap Sex', 'Kucağına oturup yüzünü boynuna gömüyor; yavaş, utangaç bir ritimle hareket ediyor.', 'Seni… çok derinde hissediyorum…'],
          ['Missionary', 'Örtüye uzanıp seni üstüne çekiyor; gözleri dolu dolu.', 'Seni… seviyorum galiba 🥺💛']] }] },
    { id: 'ash', name: 'Ash', title: 'Roxy\'nin arkadaşı · gotik', age: 21, color: '#64748b', pers: 'Alaycı, dünyadan bıkmış, meydan okumayı sever',
      bio: 'Roxy\'nin arkadaşı; parkta tek başına oturan, kara mizahlı gotik kız. Ablası bilgisayarını kırdığından beri oyun oynayamıyor; sıkıntısı ve meydan okuma sevgisi seni ona bağlar.',
      where: (s, d) => s === 2 ? 'park' : s === 1 && d === 2 ? 'sahil' : '',
      gifts: { love: ['oyunkolu'], like: ['kahve', 'cikolata'], hate: ['cicek'] },
      intro: 'Oh, harika. Yeni biri. Konuşmak zorunda mıyız? …tamam, otur bari. Bankı ısıttım.',
      talk: ['Ablam bilgisayarımı kırdı. Hayatım bitti.', 'Taş-kağıt-makas? Kaybeden bir sır söyler.', 'Herkes "neden hep siyah giyiyorsun" diyor. Sen sormadın. Artı puan.', 'Roxy sana âşık. Söylemiş olmayayım 😏', 'Bu köyde yapacak tek şey: sıkılmak.', 'Mezarlıkta piknik yapmayı düşündün mü hiç?'],
      flirt: [['Ucuz bir replik. İşe yaradı ama.', 'Hmm. Devam et, eğleniyorum.'], ['Bu kadar mı?', 'Daha karanlık bir şey söyle 😏']],
      scenes: [
        { title: 'Taş-kağıt-makas', lines: [['c', 'Bahisli oynayalım. Kaybeden… kazananın bir dileğini yerine getirir.'], ['sys', 'Üç el… Ash kaşını kaldırıyor.']],
          choice: [['Kasten kaybet', 12, '"Dileğim: beni öp. Ve kimseye söyleme." 😏'], ['Kazanmaya oyna', 7, 'Kazanıyorsun; "Dile bakalım" diyor, meraklı.']] },
        { title: 'Oyun gecesi', lines: [['sys', 'Odanda eski bir konsol; Ash yanında bağdaş kurmuş.'], ['c', 'Bunu benim için mi buldun? …aptal. Teşekkürler.']],
          choice: [['Senin için her şey', 13, 'Kumandayı bırakıp kucağına oturuyor 🖤'], ['Beraber oynayalım', 6, 'Sabaha kadar oynuyorsunuz; omzunda uyuyakalıyor.']] },
        { title: 'Mezarlıkta yıldızlar', lines: [['c', 'Burası köyün en sessiz yeri. Kimse bizi duymaz.'], ['c', 'Bir şey söyleyeceğim ama gülersen seni gömerim: sen… iyisin.']],
          choice: [['Sen de 🖤', 16, 'Seni yakasından çekip öpüyor; dudaklarında siyah ruj izi.'], ['Gülmüyorum', 5, '"İyi." Elini tutuyor.']] }],
      react: { soft: 'Yavaş? Romantik. İğrenç. …devam et 🖤', rough: 'Sonunda. Kırmaktan korkma 🖤', anal: 'Hm. Cesur seçim. Beni şaşırttın… yap.', oral: 'Kıpırdama. Ne zaman dersem o zaman.', tits: 'Bunları kimse görmez. Sen özelsin. Şimdilik.', cin: 'İçime bıraktın. Cesur. …Bir daha yap 🖤' },
      passions: [
        { title: 'Karanlık köşe', place: 'Parkın karanlık köşesi', intro: 'Parkın en ıssız köşesi, bozuk bir sokak lambası. Ash deri ceketini çimlere atıp seni yaşlı bir ağaca yaslıyor.', beats: [
          ['Kissing', 'Dudağını ısırıyor; tadında metal ve karanfilli sigara var.', 'Bunu yapacak kadar sıkıldım… yalan, seni istiyorum.'],
          ['Deepthroat', 'Önünde çömelip zincirli kemerini çözüyor; gözünü kırpmadan seni boğazına kadar alıyor.', 'Şaşırdın mı? Ben her şeyi sonuna kadar yaparım.'],
          ['Facesitting', 'Seni çimlere itip file çorabını yırtıyor; yüzüne oturup başını geriye atıyor.', 'Isır. Hafif. …daha sert 🖤'],
          ['Doggy', 'Ağaca tutunup kalçasını sana yaslıyor; tırnakları ağacın kabuğunu kazıyor.', 'Kimseye söyleme.']] },
        { title: 'Gece yüzmesi', place: 'Sahil, gece', loc: 'sahil', intro: 'Gece yarısı; ay denizin üstünde gümüş bir yol çizmiş. Ash siyah iç çamaşırlarını kuma bırakıp hiç tereddüt etmeden suya yürüyor.', beats: [
          ['Kissing', 'Soğuk suyun içinde sana sarılıyor; ıslak siyah saçları yüzüne yapışıyor.', 'Ay ışığında yüzmek… klişe. Gel yine de.'],
          ['Handjob', 'Suyun altında eli seni buluyor; soğuk parmakları ile sıcak nefesi arasında titriyorsun.', 'Soğuk su, sıcak sen. Güzel tezat 🖤'],
          ['Standing', 'Belinize kadar suyun içinde bacaklarını beline doluyor; dalgalar sizi birbirinize itiyor.', 'Daha… batır beni.'],
          ['Full Nelson', 'Onu kıyıya taşıyıp kollarının arasında kilitliyorsun; çığlıkları kumsalda yankılanıyor.', 'Bir daha… ve bu sefer bağırmama izin ver.']] },
        { title: 'Salıncak', place: 'Park, sabaha karşı', intro: 'Sabaha karşı, köy uyuyor. Ash eski salıncakta sallanıyor ve sana bakmadan "bu saatte kural yok" diyor.', beats: [
          ['Show Tits', 'Fileli bluzunu yukarı sıyırıp göğüslerini serin havaya açıyor; uçlarındaki halkalar parlıyor.', 'Bunları kimse görmez. Şanslısın.'],
          ['Facesitting', 'Salıncağın altındaki kuma uzanmanı emrediyor; zincirlere tutunup yüzüne iniyor.', 'Herkes uyuyor. Kural yok.'],
          ['Cowgirl', 'Salıncağın tahtasında kucağında; her sallanışta daha derine iniyor.', 'Bileklerimi tut. Sıkı… evet, öyle.'],
          ['Rough', 'Bankın üstüne kapanıp saçlarını eline veriyor; sert, nefes nefese, sınırsız.', 'Kahretsin… sanırım sana bağlanıyorum 🖤']] },
        { title: 'Kolejin çatısı', place: 'Kolejin çatısı, gece', loc: 'kolej', intro: 'Ash seni yangın merdiveninden kolejin çatısına çıkarıyor; uzakta şehrin ışıkları, havada sigara dumanı, parmaklarında kara oje.', beats: [
          ['Kissing', 'Çatının kenarında, rüzgâr saçlarını savururken öpüşü yavaş ve tehlikeli.', 'Aşağı bakma. Bana bak.'],
          ['Blowjob', 'Seni duvara yaslayıp diz çöküyor; dilindeki halka tenine sürtünüyor, hareketleri sabırsız.', 'Yükseklikten korkuyor musun? Ben korkmuyorum.'],
          ['Standing Anal', 'Duvara tutunup kalçasını sana uzatıyor; kendi eliyle seni yönlendirip yavaşça içine alıyor.', 'Yavaş… sonra hiç yavaş olma 🖤'],
          ['Standing doggy', 'Rüzgârın içinde, çatının ortasında; her vuruşta adını göğe haykırıyor.', 'Bütün köy duysun. Umurumda değil.']] },
        { title: 'Yağmur altında', place: 'Park, çardak', loc: 'park', intro: 'Bardaktan boşanırcasına yağmur yağıyor. Ash parktaki çardağın altında seni bekliyor; makyajı akmış, gözleri yanıyor.', beats: [
          ['Front Hugging', 'Islak tişörtü tenine yapışmış; sana sarılıp titriyor, ama soğuktan değil.', 'Bugün kötü bir gündü. Unuttur bana.'],
          ['Titfuck', 'Çardağın bankında önünde diz çöküp ıslak göğüslerinin arasına seni alıyor.', 'Bak bana. Sadece bana.'],
          ['Missionary', 'Bankta sırtüstü, yağmur damlaları teninde; ilk kez gözlerini kapatmadan seni izliyor.', 'Yumuşak olma… ya da ol. Bu sefer… ol.'],
          ['Spooning', 'Çardağın zemininde, ceketinin üstünde kıvrılmış; arkasından sarılıp yavaşça hareket ediyorsun.', 'Bunu kimseye söyleme… ama bir daha yap 🖤']] }] },
    { id: 'chloe', name: 'Chloe', title: 'Hemşire', age: 29, color: '#2dd4bf', pers: 'Sakin, kuru mizahlı, pragmatik',
      bio: 'Köy hastanesinin hemşiresi; şehirdeki bir laboratuvarla gizli bir "yan iş" yürütür. En tuhaf konuları bile gülümsemeden, iş gibi konuşur.',
      where: (s, d) => s === 2 && d === 4 ? 'sahil' : s < 2 ? 'hastane' : s === 2 && d !== 3 ? 'hastane' : '',
      gifts: { love: ['kahve'], like: ['kitap', 'yemek'], hate: ['pelus'] },
      intro: 'Sessizlik. Kimse hasta olmuyor, kimse ölmüyor… Neredeyse gücenecek gibiyim. Sen hasta mısın? Lütfen de.',
      talk: ['Tansiyonun normal. Sıkıcı.', 'Şehirdeki laboratuvar sana çok para öder. Ne için mi? Sonra anlatırım.', 'Kahve getirdin mi? Hayır mı? O zaman neden buradasın.', 'Lily\'nin siparişlerini ben ayarlıyorum. Merak etme.', 'Bugün bir arı sokması vardı. Heyecan dorukta.', 'Gülümsemiyorum çünkü yüz kaslarımı biriktiriyorum.'],
      flirt: [['İlginç bir teklif. Not aldım.', 'Nabzın hızlandı. Benim değil, senin.'], ['Klinik olarak etkilenmedim.', 'Belki. Bir sonraki muayenede.']],
      scenes: [
        { title: 'Yan iş', lines: [['c', 'Sana bir iş teklifim var. Tamamen tıbbi.'], ['c', 'Bir kap, bir oda, on dakika. Ücret: iyi.']],
          choice: [['Kabul, ama sen de odada ol', 12, 'Bir an duraksıyor. "…Prosedüre aykırı değil." Kızarıyor mu?'], ['Kabul', 6, '"Harika. Sağlıklı numune." Kuru bir başparmak.']] },
        { title: 'Muayene', lines: [['c', 'Gömleğini çıkar. Stetoskop soğuk; şikayet etme.'], ['sys', 'Parmakları göğsünde biraz fazla oyalanıyor.']],
          choice: [['Elini tut', 13, '"Bu muayenenin parçası değil." Ama elini çekmiyor.'], ['Nabız nasıl?', 5, '"Yüksek. Sebebini biliyorum."']] },
        { title: 'Gece nöbeti', lines: [['c', 'Hastane boş. Ben de… sıkıldım.'], ['c', 'Hipotezim şu: bana âşıksın. Test edelim mi?']],
          choice: [['Test edelim', 16, 'Önlüğünün düğmelerini çözüyor. "Bilim için." 💉'], ['Hipotez yanlış', 2, '"Veriler aksini söylüyor." Not alıyor.']] }],
      react: { soft: 'Yavaş tempo. Kalp sağlığına iyi gelir. Devam.', rough: 'Fizyolojik sınırlarını test edelim 😏', anal: 'Anatomik olarak mümkün. Kayganlaştırıcı ikinci rafta.', oral: 'Normalde "ağzını aç" diyen benim. Bugün değil.', tits: 'Muayene sırası sende. Dikkatli ol.', cin: 'Klinik gözlem: hacim yüksek, sıcaklık yüksek. Tekrar ölçmemiz lazım 😏' },
      passions: [
        { title: 'Kilitli oda', place: 'Hastanenin boş odası', intro: 'Gece vardiyası, koridorlar bomboş. Chloe seni boş bir hasta odasına çekip kapıyı kilitliyor; eldivenlerini şaklatarak çıkarıyor.', beats: [
          ['Handjob', 'Seni hasta yatağına oturtup ellerini uzatıyor; profesyonel, ritmik ve acımasızca yavaş.', 'Kapı kilitli. Kameralar kapalı. Prosedür başlıyor.'],
          ['Blowjob', 'Saçlarını toplayıp önüne eğiliyor; yüzü ciddi ama dili hiç değil.', 'Bu… beklediğimden daha iyi.'],
          ['Ondesk', 'Önlüğünü sıyırıp sedyeye uzanıyor; metal tekerlekler her vuruşta kayıyor.', 'Freni çek. …çektin mi? Boş ver.'],
          ['Cowgirl', 'Üstüne çıkıp stetoskopu kendi göğsüne dayıyor; kalp atışlarını dinleyerek hızlanıyor.', 'Nabzım… dur, ölçmeyeceğim 😳']] },
        { title: 'Detaylı muayene', place: 'Hastane, muayene odası', intro: 'Randevu saatin geldi. Chloe beyaz önlüğünün altına sadece dantel bir iç çamaşırı giymiş; elinde boş bir dosya, gözünde muzip bir parıltı.', beats: [
          ['Show Tits', 'Önlüğü açıp göğüslerini serbest bırakıyor; stetoskopu senin göğsüne dayıyor.', 'Gömleğini çıkar. Muayene… detaylı olacak.'],
          ['Titfuck', 'Muayene masasının önünde diz çöküp göğüsleriyle seni kavrıyor; soğuk tavrıyla sıcak teni çarpıcı bir tezat.', 'Kalp ritmin hızlandı. Benimki de.'],
          ['Missionary', 'Masaya uzanıp bacaklarını üzengilere koyuyor; kâğıt örtü altında hışırdıyor.', 'Derin nefes al… sonra ver… ahh.'],
          ['Spooning', 'Dar masada yan yana sıkışmışsınız; arkasından sarılıyorsun, önlüğünün kokusu tenine karışıyor.', 'Teşhis: bir doz daha lazım 😏']] },
        { title: 'Nöbet sonrası', place: 'Sahil, şafak', loc: 'sahil', intro: 'On iki saatlik nöbetin ardından şafak sökerken. Chloe üniformasını kuma bırakıp yorgun ama aç gözlerle sana dönüyor.', beats: [
          ['Kissing', 'Tuzlu rüzgâr, uykusuz gözler; öpüşü uzun ve tembel.', 'On iki saatlik nöbet. Hak ettim.'],
          ['69', 'Seni kuma yatırıp ters uzanıyor; ikiniz aynı anda birbirinizi tadıyorsunuz.', 'Ağzın doluyken konuşma. Ben de konuşmayacağım.'],
          ['Cowgirl', 'Üstüne çıkıp doğan güneşe bakarak hareket ediyor; saçları turuncu ışıkta yanıyor.', 'Bu sefer kontrol bende. Sakin yat.'],
          ['Doggy', 'Kuma diz çöküp kalçasını uzatıyor; dalgalar ayak bileklerini yalıyor.', 'Reçete: her nöbetten sonra. Tekrarlanacak.']] }] },
    { id: 'liza', name: 'Liza', title: 'Kolej kraliçesi', age: 21, color: '#f472b6', pers: 'Şımarık, materyalist, sivri dilli',
      bio: 'Kolejin "küçük kraliçesi"; parası olmayanı küçümser, her şeyin peşin ödenmesini ister. Laf dalaşlarıyla yakınlaşır, becerileriyle gurur duyar.',
      where: (s, d) => s === 0 ? (lesson(d) ? 'kolej' : '') : s === 1 ? (d !== 6 ? 'park' : '') : s === 2 ? (d === 6 ? 'sahil' : '') : 'park',
      gifts: { love: ['ruj', 'sarap'], like: ['cikolata'], hate: ['kahve', 'pelus'] },
      intro: 'Sana söylemiştim, beş parasız. Cebin boşken bana yaklaşma ve konuşma 💅',
      talk: ['Bu çanta mı? Şehirden. Senin bir aylık kiran.', 'Roxy mi? Kıskanç bir kız.', 'Cebinde ne var? Göster bakalım.', 'Ben ucuz değilim. Ama pahalı da değilim… sadece değerliyim.', 'Müdür Scarlett benden nefret ediyor. Bir şey çaldım diye. Belki.', 'Bana bir ruj alsan… belki gülümserim.'],
      flirt: [['Hm. Paran yokken bile iddialısın.', 'Bu sefer affediyorum 😏'], ['Ucuz.', 'Bir dahaki sefere hediyeyle gel.']],
      scenes: [
        { title: 'Peşin ödeme', lines: [['c', 'Seninle konuşmak istiyorsam bedelini ödemelisin.'], ['c', 'Ne getirdin bana?']],
          choice: [['Bir sır', 10, '"…Bir sır mı? Pahalı bir şeymiş." Merakla yaklaşıyor.'], ['Hiçbir şey', 2, '"Sıradaki!"']] },
        { title: 'Çalınan kolye', lines: [['c', 'Scarlett\'in çekmecesindeki kolyeyi aldım. Bana geri getirirsen… seni ödüllendiririm.'], ['sys', 'Liza dudağını ısırıyor.']],
          choice: [['Senin için riske girerim', 13, '"Ooh, kahraman." Kulağına bir öpücük.'], ['Kendin getir', 4, '"Korkak." Ama gülüyor.']] },
        { title: 'Gece parkta', lines: [['c', 'Herkes beni yüzeysel sanıyor. Haklılar galiba.'], ['c', 'Ama sen bana bakınca… pahalı hissetmiyorum. Değerli hissediyorum.']],
          choice: [['Sen değerlisin', 16, 'Topuklularını çıkarıp seni çimenlere çekiyor 💋'], ['Ve pahalı', 6, '"Aynen öyle." Gülüşü ilk kez gerçek.']] }],
      react: { soft: 'Romantik takılmak pahalı bir hizmettir. Bu seferlik bedava 💅', rough: 'Kimse bana böyle davranamaz… sen hariç 😏', anal: 'Normalde ekstra ücretli. Sana özel… ahh, yavaş!', oral: 'İzle ve öğren. Bu konuda en iyisi benim.', tits: 'Bunlar doğal, bu arada. Dokunmak bir ayrıcalık.', cin: 'Bu kadar cömert olacağını bilmiyordum… hm. İyiymiş 💅' },
      passions: [
        { title: 'Özel indirim', place: 'Park, gece', intro: 'Gece parkı. Liza tasarım çantasını banka bırakıp pembe dudaklarını büzüyor: "Bu, sana yaptığım en büyük iyilik."', beats: [
          ['Kissing', 'Parfüm kokusu, parlak ruj; öpüşü hesaplı ama ateşli.', 'Bunu bedavaya yapmıyorum… sana özel indirim 😏'],
          ['Deepthroat', 'Pahalı ceketini dizlerinin altına serip çöküyor; gösteriş yaparcasına seni sonuna kadar alıyor.', 'Becerilerimle gurur duyarım, izle.'],
          ['Titfuck', 'Bluzunu açıp göğüslerini kaldırıyor; ojeli tırnakları ışıkta parıldıyor.', 'Bunlar ne kadar tuttu biliyor musun? Şaka, doğal 💅'],
          ['Cowgirl', 'Seni banka oturtup eteğini toplayarak üstüne çıkıyor.', 'Ahh… tamam, sen de iyisin.']] },
        { title: 'Boş amfi', place: 'Kolej, boş amfi', loc: 'kolej', intro: 'Ders bitti, amfi boş. Liza kürsünün arkasında; kısa okul eteği, topuklular ve taç gibi duran saç bandı.', beats: [
          ['Show Ass', 'Kürsüye eğilip eteğini yavaşça kaldırıyor; pembe iç çamaşırını tek parmakla aşağı kaydırıyor.', 'Kürsünün arkası… kimse bakmaz. Bakarsa da kıskanır 💅'],
          ['Blowjob', 'Sıraların arasında diz çöküp saçını savuruyor.', 'Sana özel, bedava. Bir kereliğine.'],
          ['Ondesk', 'Hocanın masasına uzanıp bacaklarını açıyor; kitaplar yere dökülüyor.', 'Not ver bakalım… sadece AA kabul ederim.'],
          ['Standing doggy', 'Kara tahtaya tutunup kalçasını sana uzatıyor; havada tebeşir tozu.', 'Tamam, itiraf: senden başkası olmaz artık.']] },
        { title: 'Yeni bikini', place: 'Sahil', loc: 'sahil', intro: 'Liza en pahalı bikinisiyle şezlongda; güneş gözlüğünü indirip sana bakıyor, elinde bronzlaştırıcı yağ.', beats: [
          ['Kissing', 'Şezlongun yanına çöktüğünde boynuna sarılıyor.', 'Yeni bikinim. Fiyatını sorma, sadece bak.'],
          ['Hotdogging', 'Yağlı kalçalarını sana sürtüyor; parlayan teninde avuçların kayıyor.', 'Yağla beni… her yerimi 😏'],
          ['Cowgirl', 'Şezlongda üstüne çıkıyor; bikininin üstü kumda unutulmuş.', 'Herkes beni kıskanıyor. Şimdi seni de kıskansınlar.'],
          ['Missionary', 'Havluya uzanıp seni çekiyor; sandaletli ayakları sırtına bastırıyor.', 'Bu kadar iyi olmana sinir oluyorum… devam et!']] }] },
    { id: 'claire', name: 'Claire', title: 'Ofis sekreteri', age: 27, color: '#94a3b8', pers: 'Ciddi, disiplinli; içten içe çekingen ve meraklı',
      bio: 'Ava\'nın sekreteri; hep resmi takımla dolaşan "demir leydi". Ufak bir kışkırtmayla kızarır, savunmaya geçer ama merakına yenik düşer.',
      where: (s, d) => s === 0 && d === 7 ? 'sahil' : wk(d) && s < 2 ? 'ofis' : '',
      gifts: { love: ['kitap'], like: ['kahve', 'cicek'], hate: ['sarap'] },
      intro: 'Randevunuz yok. Ava Hanım meşgul. Lütfen bekleme alanına… neden bana öyle bakıyorsunuz?',
      talk: ['Dosyalar alfabetik değil. Bu kabul edilemez.', 'Ava Hanım çok… cesur biri. Ben öyle değilim.', 'Okuduğum kitap mı? Romantik değil. Kesinlikle değil. 📚', 'Takım elbisem kırışık mı? Söylesenize!', 'Mesai saatlerinde kişisel konuşma… beş dakika olur.', 'Bazen merak ediyorum… normal insanlar akşamları ne yapıyor?'],
      flirt: [['B-bu uygunsuz bir ifade! 😳', '…Lütfen bir daha söyleyin. Not alacağım.'], ['Mesai saatindeyiz!', 'Mesai… on dakika sonra bitiyor.']],
      scenes: [
        { title: 'Kırışık yaka', lines: [['c', 'Yakam düzgün mü? Toplantı var!'], ['sys', 'Yakasını düzeltmek için uzanıyorsun.']],
          choice: [['Düzeltiyorum, yavaşça', 12, 'Nefesini tutuyor: "T-teşekkürler… çok… dikkatlisiniz."'], ['Mükemmel görünüyor', 6, 'Kızarıyor: "Sadece yakayı sordum!"']] },
        { title: 'Gizli kitap', lines: [['sys', 'Masasının çekmecesinde aşk romanı.'], ['c', 'Bu… araştırma amaçlı! İnsan davranışı üzerine!']],
          choice: [['En sevdiğin sahneyi oku', 13, 'Titrek sesle okuyor; son cümlede gözleri sana kalkıyor.'], ['Sırrın bende güvende', 6, '"Sağ olun." Rahatlamış.']] },
        { title: 'Mesai sonrası', lines: [['c', 'Hiç… kimseyle… yani… ben tecrübesizim.'], ['c', 'Bana öğretir misiniz? Profesyonel olarak.']],
          choice: [['Profesyonel olarak 😏', 16, 'Gözlüğünü çıkarıyor, saçını açıyor. "Başlayalım."'], ['Acele etme', 6, '"Sabırlısınız. Bu… hoşuma gitti."']] }],
      react: { soft: 'Bu… çok nazik. Not alıyorum 😳', rough: 'Her zaman disiplinli olmak istemiyorum. Lütfen…', anal: 'Bunu… okumuştum. Denemek istiyorum. Yavaş, lütfen.', oral: 'Kurallara göre… ben de karşılık vermeliyim.', tits: 'Bluzumu… siz açar mısınız?', cin: 'İçimde… hâlâ sıcaklığınızı hissediyorum. Bunu bir yere not etmeliyim 😳' },
      passions: [
        { title: 'Mesai sonrası', place: 'Ofis, mesai sonrası', intro: 'Ofisteki son ışık Claire\'in masasında. Saçı sımsıkı topuz, gözlüğünü düzeltiyor; ama ellerinin titrediğini görüyorsun.', beats: [
          ['Kissing', 'Topuzunu çözüyorsun; saçları omuzlarına dökülürken öpüşüne şaşkınlıkla karşılık veriyor.', 'Kapıyı kilitledim. İki kez kontrol ettim.'],
          ['Show Tits', 'Bluzunun düğmelerini bir bir açıyor; altından sade beyaz bir sütyen çıkıyor.', 'Bu… hiçbir kitapta yazmıyordu 😳'],
          ['Handjob', 'Masasının önünde, toplantı notları hâlâ açık; elleri çekingen ama meraklı.', 'Böyle mi? Lütfen söyleyin.'],
          ['Ondesk', 'Klavyeyi ve dosyaları kenara itip onu masaya yatırıyorsun; eteği beline toplanmış.', 'Lütfen… devam edin.']] },
        { title: 'Arşiv odası', place: 'Ofis, arşiv odası', intro: 'Dar bir arşiv odası, tozlu raflar, tek bir floresan. Claire elindeki klasörü düşürüyor ve almak için eğilmiyor.', beats: [
          ['Back Hugging', 'Arkasından sarılıyorsun; nefesini tutup raflara yaslanıyor.', 'Dosyaları alfabetik dizmem lazım… sonra.'],
          ['Blowjob', 'Dizlerinin üstüne çöküp gözlüğünü düzeltiyor; sanki rapor yazıyormuş gibi dikkatli.', 'Gözlüğümü çıkarayım mı? Hayır, kalsın dediniz.'],
          ['Standing', 'Onu rafa yaslayıp bir bacağını kaldırıyorsun; klasörler yere yağıyor.', 'Ahh… sesimi… tutamıyorum…'],
          ['Standing doggy', 'Raflara tutunup kalçasını uzatıyor; eteği beline sıyrılmış.', 'Bunu takvime ekliyorum. Her cuma 😳']] },
        { title: 'Protokol dışı', place: 'Sahil, şemsiye altı', loc: 'sahil', intro: 'Hafta sonu. Claire ilk kez ofis kıyafetleri dışında: siyah tek parça mayo, açık saçlar; şemsiyenin altında kitap okuyormuş gibi yapıyor.', beats: [
          ['Kissing', 'Kitabı kapatıp sana dönüyor; bu sefer öpen o.', 'İlk kez işten başka bir yerde buluşuyoruz.'],
          ['Cunnilingus', 'Mayosunu yana çekiyorsun; kitabı yüzüne kapatıp sesini bastırmaya çalışıyor.', 'Kuralları bugün siz koyun. Ben… uyarım.'],
          ['Cowgirl', 'Cesaretini toplayıp üstüne çıkıyor; ritmi bulmaya çalışırken utangaçça gülüyor.', 'Doğru mu yapıyorum? …evet, hissediyorum.'],
          ['Spooning', 'Havlunun üstünde yan yana, şemsiyenin gölgesinde; yavaş ve uzun.', 'Ahh… protokol dışı… ama çok iyi.']] }] },
    { id: 'scarlett', name: 'Scarlett', title: 'Kolej müdürü', age: 41, color: '#dc2626', pers: 'Otoriter, baskın, kurallara tapan',
      bio: 'Kolejin müdürü; disiplin ve otorite tutkunu. Liza\'nın çaldığı kolyeyi geri alırken seni yakalar ve "cezanı çekmen" için kendi asistanı yapar. Buyurgan ama karşı konulmaz.',
      where: (s, d) => s === 0 && d === 7 ? 'sahil' : wk(d) && (s === 1 || s === 2) ? 'mudur' : '',
      gifts: { love: ['sarap'], like: ['kitap'], hate: ['pelus', 'cikolata'] },
      intro: 'İzinsiz odama mı girdin? Bu okulda kuralları çiğneyenler hak ettikleri cezayı alır. Otur. Ayakta değil, yere.',
      talk: ['Ayakkabılarım tozlu. Bunu fark etmiş olmalıydın.', 'Kurallar özgürlüktür. Anlamıyorsun, normal.', 'Liza\'yı izliyorum. Seni de.', 'Bugün iyi bir asistandın. Bunu sık duymayacaksın.', 'Gözlerime bakarak konuşma izni vermedim.', 'Kırmızı kalemim nerede? Getir.'],
      flirt: [['Cüretkâr. Ceza mı istiyorsun?', '…Hm. Bunu ödüllendireceğim.'], ['Haddini bil.', 'Bunu tekrar et. Diz çökerek.']],
      scenes: [
        { title: 'Ceza', lines: [['c', 'Kolyeyi çalmak için odama girdin. Seçimin var: disiplin kurulu ya da benim asistanım olmak.']],
          choice: [['Asistanınız olurum', 12, '"Akıllıca." Masasına bir anahtar koyuyor: "Akşamları geleceksin."'], ['Liza\'nın suçu', 3, '"Ispiyoncu. Hoşuma gitmedi."']] },
        { title: 'Kurallar', lines: [['c', 'Kural bir: ben konuşurken susarsın. Kural iki: ödül benim keyfime göre.'], ['c', 'Ayakkabılarımı çıkar.']],
          choice: [['Emredersiniz', 13, 'Bir kaşını kaldırıyor: "İyi çocuk."'], ['Ya çıkarmazsam?', 7, 'Gülümsüyor: "O zaman eğlenceli olur."']] },
        { title: 'Sınavın sonu', lines: [['c', 'Kimse bana karşı koymadı. Sen ise… ilginçsin.'], ['c', 'Bu gece kuralları bir kez çiğneyeceğim. Senin için.']],
          choice: [['Ben de sizin için', 16, 'Kırmızı kalemini masaya bırakıyor; ceketi yere düşüyor 🔥'], ['Kurallara sadık kalalım', 4, '"Sıkıcı… ama doğru."']] }],
      react: { soft: 'Yavaş mı? Sabrını ödüllendireceğim.', rough: 'Sert mi? Hah. Sen bana uyarsın, ben sana değil 😈', anal: 'İzin veriyorum. Ama ritmi ben belirlerim.', oral: 'Bu sefer diz çöken ben olacağım. Şaşırdın mı?', tits: 'Bakmana izin verdim. Dokunmana da. Şimdilik.', cin: 'İçime bırakmana izin vermiştim. İyi iş. Bir dahaki sefere de öyle.' },
      passions: [
        { title: 'Emir', place: 'Müdür odası', intro: 'Ağır perdeler kapalı, masada kırmızı kalem. Scarlett deri koltuğundan kalkıp kapıyı kilitliyor ve tek bir kelime söylüyor: "Soyun."', beats: [
          ['Facesitting', 'Seni halıya uzatıp eteğini toplayarak yüzüne oturuyor; masanın kenarına tutunup ritmi o belirliyor.', 'Diz çök. Şimdi kalk. İyi.'],
          ['Blowjob', 'Seni koltuğuna oturtup önüne çömeliyor; kontrol hâlâ onda, gözlerini bir an indirmiyor.', 'Kurallar bu gece benim bedenim 😈'],
          ['Cowgirl', 'Üstüne çıkıp gömleğini yırtarcasına açıyor; seni koltuğa çiviler gibi.', 'Gözlerini kapatma. Bana bak.'],
          ['Ondesk', 'Sonunda onu masaya yatırmana izin veriyor; dosyalar dağılırken ilk kez sesini kontrol edemiyor.', 'Sakın durma. Bu bir emir.']] },
        { title: 'Ceza saati', place: 'Kolej, boş sınıf', loc: 'kolej', intro: 'Okuldan sonra cezaya kaldın. Boş sınıfta Scarlett elinde cetvelle tahtanın önünde; dar kalem etek, sıkı topuz.', beats: [
          ['Show Ass', 'Masaya eğilip eteğini yavaşça kaldırıyor; siyah jartiyerleri ortaya çıkıyor.', 'Tahtaya dön. …hayır, bana dön.'],
          ['Deepthroat', 'Saçlarını kavramanı istiyor; seni boğazına kadar alıp gözünü kırpmadan bakıyor.', 'Kurallara uymayanları… ben cezalandırırım 😈'],
          ['Standing', 'Tahtaya yaslanıp bacağını beline kaldırıyor; tebeşir tozu siyah elbisesine bulaşıyor.', 'Daha sert. Bu bir ders.'],
          ['Rough', 'Sıranın üstüne kapanıp bileklerini arkada tutmanı emrediyor.', 'Ders bitmedi. Daha bitmedi!']] },
        { title: 'Özel kabana', place: 'Sahil, özel kabana', loc: 'sahil', intro: 'Tatil günü. Scarlett beyaz perdeli kabanasında kırmızı mayosuyla güneşleniyor; seni görünce perdeyi çekiyor.', beats: [
          ['Facesitting', 'Seni minderlere yatırıp yüzüne oturuyor; perdeler rüzgârla dalgalanıyor.', 'Burada müdür değilim. Ama emirler yine benden.'],
          ['Titfuck', 'Mayosunun üstünü indirip göğüslerinin arasına seni alıyor; ilk kez gülümseyerek.', 'Bunu kimse bilmeyecek. Söz mü?'],
          ['Cowgirl', 'Üstüne çıkıp ellerini başının üstünde kilitliyor.', 'Yat. Kıpırdama. Ben sürerim.'],
          ['Doggy', 'Minderlere kapanıp kalçasını kaldırıyor; sonunda kontrolü sana bırakıyor.', 'İyi iş çıkardın… ödülünü hak ettin 💋']] }] },
    { id: 'luna', name: 'Luna', title: 'Ormanın cadısı', age: 30, color: '#a855f7', pers: 'Öfkeli, gizemli, sinsi ve baştan çıkarıcı',
      bio: 'Ormanın derinliklerinde tek başına yaşayan cadı. İlk karşılaşmada seni lanetlemekle tehdit eder; işine yaradığını görünce sinsi ve baştan çıkarıcı olur. Mantar ve büyülü pazarlıklar onun dünyası.',
      where: s => s === 3 ? 'orman' : '',
      gifts: { love: ['mantar'], like: ['balik'], hate: ['cicek'] },
      intro: 'Sen de kimsin, solucan?! Davetsiz topraklarıma gelmeye nasıl cüret edersin? Çorbama malzeme mi olmak istiyorsun?',
      talk: ['Bu mantar zehirli. Bu daha zehirli. Bu… senin için 😈', 'Köylüler benden korkar. Haklılar.', 'İksirim için ay ışığı lazım. Ve senin saçından bir tel.', 'Kedim seni sevdi. Bu nadirdir.', 'Bir lanet mi istiyorsun, bir öpücük mü? Ikisi de aynı fiyat.', 'Mantar getir. Bol bol.'],
      flirt: [['Cüretli solucan… hoşuma gitti.', 'Büyüme karşı koyamıyorsun, değil mi? 😏'], ['Seni kurbağaya çeviririm.', 'Bir kez daha dene. Belki öpücüğe çeviririm.']],
      scenes: [
        { title: 'Pazarlık', lines: [['c', 'Seni lanetlemeyeceğim. Bir şartla: bana mantar toplayacaksın. Her gece.']],
          choice: [['Anlaştık, cadım', 12, '"Cadın mı? …Hm. İsim hoşuma gitti."'], ['Neden ben?', 5, '"Çünkü buradasın, solucan."']] },
        { title: 'İksir', lines: [['sys', 'Kazanda mor bir iksir kaynıyor.'], ['c', 'İç bunu. Ne yapacağını söylemeyeceğim.']],
          choice: [['İçerim', 14, 'Dünya dönüyor; Luna kucağında, gözleri parlıyor: "Etkisi bende de."'], ['Önce sen iç', 6, 'Gülüyor: "Zekisin. Az da olsa."']] },
        { title: 'Dolunay', lines: [['c', 'Dolunayda büyüm en güçlüsüdür. Ve… arzum da.'], ['c', 'Kulübemde kal bu gece.']],
          choice: [['Kalırım', 16, 'Pelerinini çözüyor; ay ışığı tenini gümüşe boyuyor 🌕'], ['Sabah dönmeliyim', 4, '"Gidersen lanetlenirsin." Şaka mı?']] }],
      react: { soft: 'Yavaş… büyü yavaş işler, solucanım 🌕', rough: 'Hah! İçindeki canavar uyandı demek 😈', anal: 'Karanlık bir ayin istiyorsun… ver bakalım 🌑', oral: 'Özünü tadacağım. Büyü için. Tabii.', tits: 'Ay ışığı bunlara yakışıyor, değil mi?', cin: 'Özün artık bende, solucanım… büyü mühürlendi 🌕' },
      passions: [
        { title: 'Büyü', place: 'Luna\'nın kulübesi', intro: 'Mumlar kendiliğinden yanıyor, kazandan mor bir duman yükseliyor. Luna pelerinini çözüp çıplak omuzlarına dolunayın ışığını alıyor.', beats: [
          ['Kissing', 'Dudakları bal ve tütsü tadında; öptüğü an tenin karıncalanıyor.', 'Büyü başladı; artık geri dönüş yok 🌕'],
          ['Cat Girl', 'Başında kedi kulakları beliriyor; kalçasından ince bir kuyruk kıvrılıp bacağına dolanıyor.', 'Miyav… şaşırma, solucanım. Tadını çıkar.'],
          ['Cunnilingus', 'Seni kürklerin üstüne çekip bacaklarını açıyor; kuyruğu başını okşuyor.', 'Seni hiç bırakmayacağım…'],
          ['Cowgirl', 'Üstüne çıkıp kalçalarını daireler çizerek döndürüyor; her inişinde mumlar parlıyor.', 'Daha… daha… ahh!']] },
        { title: 'Kazan başında', place: 'Luna\'nın kulübesi, kazan başı', intro: 'Kazanın buharı odayı sarmış. Luna sana bir şişe uzatıyor; iksir dilini yakıyor ve bütün vücuduna bir ateş yayılıyor.', beats: [
          ['Cat Girl', 'Kedi kılığına bürünüp dört ayak üstünde sana sokuluyor; mırlıyor.', 'Bu iksir dayanıklılık verir. Sana. Benim için 😈'],
          ['Blowjob', 'Pürüzlü dili seni baştan sona yalıyor; gözleri sarı sarı parlıyor.', 'Kediye dönüşmemi istemiştin… miyav 🐾'],
          ['Lap Sex', 'Büyü kitaplarının arasındaki koltukta kucağında.', 'Hissediyor musun? İksir çalışıyor.'],
          ['Standing doggy', 'Kazanın kenarına tutunup kalçasını uzatıyor; buhar ikinizi sarıyor.', 'Büyü bozulmadan… bir kez daha!']] },
        { title: 'Taş çember', place: 'Orman, taş çember', intro: 'Ormanın derinliklerinde yosunlu taşlardan bir çember. Luna seni ortasına çağırıyor; dolunay tam tepede, etrafınızda ateş böcekleri.', beats: [
          ['Kissing', 'Çemberin ortasında sarılıyorsunuz; taşlar hafifçe parlamaya başlıyor.', 'Taşların ortasına uzan. Ay bizi izliyor 🌕'],
          ['Facesitting', 'Yüzüne oturup ellerini göğe kaldırıyor; tuhaf bir dilde mırıldanıyor.', 'Gücünü emiyorum… hissediyor musun?'],
          ['Cowgirl', 'Üstünde, saçları rüzgârda; her hareketinde taşlar daha çok parlıyor.', 'Ayin tamamlanmak üzere…'],
          ['Full Nelson', 'Onu kollarına alıp kaldırıyorsun; çığlığı ormanın içinde yankılanıyor.', 'Artık bana aitsin. Sonsuza dek.']] }] },
    { id: 'maeve', name: 'Maeve', title: 'Şehirdeki patronun', age: 39, color: '#38bdf8', pers: 'Soğuk, mesafeli; altında teşhirci',
      bio: 'Şehirde çalıştığın ajansın sahibi; seni yazı Mia\'nın pansiyonunda geçirmen için köye o yolladı. Görüntülü aramaları kısa keser ama ekranın öbür ucunda saklı bir teşhircilik vardır. Sadece dizüstü bilgisayardan (akşam / gece) ulaşılır.',
      where: () => '', call: true,
      gifts: { love: [], like: [], hate: [] },
      intro: 'Bütün yazı dört duvar arasında geçirmek tuhaf olur. O yüzden hadi, orada alış, bol bol eğlen. Kartına biraz para yükledim.',
      talk: ['Toplantıdayım, kısa kes.', 'Mia iyi bir kadındır. Ona yük olma.', 'Kartını harcadın mı? Bekliyordum.', 'Ofis sensiz sessiz… bunu duymadın.', 'Kamerayı neden kapatmadım biliyor musun? Ben de bilmiyorum.', 'Gece yarısı aradın. Uyuyamıyordum zaten.'],
      flirt: [['Ekranın öbür ucundasın, cesaretin buradan.', 'Hm… bunu bir daha söyle. Kamerayı açık tutuyorum.'], ['İş ilişkisi, unutma.', 'İş… evet. Ama mesai bitti.']],
      scenes: [
        { title: 'Gece araması', lines: [['sys', 'Ekranda Maeve; ofis değil, yatak odası.'], ['c', 'Uyuyamadım. Neden seni aradım, bilmiyorum.']],
          choice: [['Ben de seni düşünüyordum', 12, 'Bir an susuyor. Kamerayı biraz daha yakına getiriyor.'], ['İş mi var?', 3, '"Evet. İş." Kapatıyor.']] },
        { title: 'Kamera', lines: [['c', 'Kocam hiç bakmıyor bana. Sen bakıyor musun?']],
          choice: [['Gözümü ayıramıyorum', 14, 'Bornozunu omzundan kaydırıyor. "O zaman bak."'], ['Bu doğru değil', 3, '"Haklısın." Ama kamerayı kapatmıyor.']] },
        { title: 'Gösteri', lines: [['c', 'Bu gece senin için bir şey yapacağım. Kimse bilmeyecek.']],
          choice: [['İzliyorum 👀', 16, 'Işıkları ayarlıyor; kameraya dönüp gülümsüyor 🔥'], ['Bunu yapmak zorunda değilsin', 6, '"Biliyorum. İstiyorum."']] }],
      passions: [
        { title: 'Kamera açık', place: 'Görüntülü arama', intro: 'Ekranda Maeve; ofis değil, loş bir yatak odası. Saten sabahlığı gevşek, elinde şarap kadehi.', beats: [
          ['Show Tits', 'Sabahlığı yavaşça açıyor; kamerayı göğüslerine yaklaştırıyor.', 'Kamera açık… sadece sen izliyorsun.'],
          ['Show Ass', 'Dönüp kalçasını kameraya uzatıyor; omzunun üstünden gülümsüyor.', 'Beni görüyor musun? İyi.'],
          ['Sex toys', 'Komodinden bir oyuncak çıkarıp yatağa uzanıyor; bacaklarını kameraya açıyor, iniltileri hoparlörden taşıyor.', 'Yazın sonunda şehre dön… bunu gerçekten yaşayalım.']] },
        { title: 'Duş yayını', place: 'Görüntülü arama, banyodan', intro: 'Telefon buğulu aynaya dayalı. Maeve duşun altında; su çıplak bedeninden süzülüyor.', beats: [
          ['Show Tits', 'Köpükleri göğüslerine yayıp yavaşça avuçluyor.', 'Telefonu aynaya dayadım… su sıcak.'],
          ['Show Ass', 'Cama yaslanıp kalçasını ağır ağır sabunluyor.', 'Köpükleri izle. Yavaşça…'],
          ['Sex toys', 'Duvara yapıştırdığı oyuncağa yaslanıp yavaşça hareket ediyor; buhar ekranı kaplıyor.', 'Sesimi duydun mu? Senin yüzünden 💦']] },
        { title: 'Ofiste gece', place: 'Görüntülü arama, ofisten', intro: 'Gece yarısı, arkasında şehrin ışıkları. Maeve boş ofisinde masasının üstüne oturmuş; ceketi yerde.', beats: [
          ['Show Tits', 'Gömleğinin düğmelerini birer birer açıyor; altında sütyen yok.', 'Herkes gitti. Masamdayım… eteğim yukarıda.'],
          ['Sex toys', 'Bacaklarını masada açıp oyuncağı kullanıyor; telefonu çalıyor, bakmıyor bile.', 'Kocam aradı. Açmadım. Seni izliyorum.'],
          ['Squirt', 'Masanın kenarını kavrayıp titreyerek boşalıyor; evraklar ıslanıyor.', 'Yaz bitince… beni bu masada al.']] }] }
  ];

  // 🎁 hediyeler ve eşyalar (pazardan alınır; mantar ormandan, balık sahilden, yemek mutfaktan)
  const ITEMS = [
    { id: 'cicek', name: 'Çiçek', icon: '🌹', price: 50 }, { id: 'cikolata', name: 'Çikolata', icon: '🍫', price: 30 }, { id: 'sarap', name: 'Şarap', icon: '🍷', price: 120 },
    { id: 'kitap', name: 'Kitap', icon: '📚', price: 60 }, { id: 'oyunkolu', name: 'Eski oyun konsolu', icon: '🎮', price: 220 }, { id: 'ruj', name: 'Ruj', icon: '💄', price: 90 },
    { id: 'pelus', name: 'Peluş ayı', icon: '🧸', price: 70 }, { id: 'kahve', name: 'Kahve', icon: '☕', price: 20 },
    { id: 'mantar', name: 'Mantar', icon: '🍄', price: 0, sell: 15 }, { id: 'balik', name: 'Balık', icon: '🐟', price: 0, sell: 25 }, { id: 'yemek', name: 'Ev yemeği', icon: '🍲', price: 0 }];

  // 💞 ilişki kademeleri: aff eşiği → kademe adı
  const STAGES = [[0, 'Tanışma'], [20, 'Arkadaş'], [45, 'Flört'], [70, 'Yakın'], [90, 'Tutku']];

  // 🔀 tutku sahnesinde "nasıl devam?": düğme, olay kartları, her kartın anlatımı ({n} = onun adı), sonda seçilebilecek bitişler
  const MOVES = {
    soft: { label: '💕 Yavaş ve derin', evs: ['Missionary', 'Spooning'], fin: ['in', 'out', 'face'],
      sys: ['Onu sırtüstü yatırıp yüzünü avuçluyorsun; her hareket yavaş, uzun ve derin. {n} bacaklarını beline kilitliyor.', 'Yan yatıp arkasından sarılıyorsun; boynunu öperken ağır ağır içinde kayıyorsun, {n} elini tutup göğsüne bastırıyor.'] },
    rough: { label: '🔥 Sert', evs: ['Standing doggy', 'Full Nelson'], fin: ['in', 'ass', 'face'],
      sys: ['Saçlarını kavrayıp onu öne eğiyorsun; vuruşların hızlandıkça {n} çığlıklarını bastıramıyor.', 'Bacaklarını kollarınla kilitleyip onu havaya kaldırıyorsun; {n} tamamen sana teslim, baştan aşağı titriyor.'] },
    anal: { label: '🍑 Anal', evs: ['Spooning Anal', 'Rough Anal'], fin: ['anin', 'ass', 'face'],
      sys: ['Parmaklarınla onu sabırla hazırlıyorsun; {n} derin bir nefes alıp seni yavaş yavaş kalçasına alıyor.', 'Alıştıkça kalçasını sana doğru itiyor; ritim hızlanıyor, {n} inlemeleri çığlığa dönüşüyor.'] },
    oral: { label: '👅 Ağzıyla', evs: ['Blowjob', 'Deepthroat'], fin: ['mouth', 'face'],
      sys: ['{n} önünde diz çöküp dudaklarını sana doluyor; gözleri hiç gözlerinden ayrılmıyor.', 'Saçlarını toplayıp seni boğazına kadar alıyor; {n} nefes nefese ama durmuyor.'] },
    tits: { label: '🍒 Göğüsleri', evs: ['Titfuck', 'Reverse Titfuck'], fin: ['tits', 'mouth', 'face'],
      sys: ['{n} göğüslerini avuçlarıyla birleştirip seni aralarına alıyor; her hareketinde dudaklarıyla karşılıyor.', 'Üstüne ters dönüp göğüslerini seninle birleştiriyor; {n} kalçasını sallayarak ritmi hızlandırıyor.'] }
  };
  // 💦 bitişler: düğme, olay kartı, onun sözü (biri), anlatım dizisi (biri); içe boşalmada son söz karakterin react.cin'i
  const FINS = {
    in: { label: '💦 İçine', ev: 'Vaginal Creampie', say: ['İçime… hepsini istiyorum 🥵', 'Çıkma! İçimde kal… ahh!', 'Bırak… hepsini içime bırak 💗'], sys: [
      ['Son vuruşta kendini en derine gömüyorsun; bacaklarını beline kilitleyip seni bırakmıyor.', 'Zonklayarak boşalırken sıcaklığın içini dolduruyor; her atışta bütün bedeni titriyor, tırnakları sırtına geçiyor.', 'Bir süre öylece kalıyorsunuz, nefesleriniz birbirine karışıyor. Çekildiğinde sıcak bir damla bacaklarının arasından süzülüyor; eliyle tutup utangaçça gülümsüyor.'],
      ['Onu kendine bastırıp en derinde kalıyorsun; içi seni sımsıkı kavrarken daha fazla dayanamıyorsun.', 'Kalın, sıcak dalgalar halinde içine boşalıyorsun; her birinde inliyor, kalçası istemsizce sarsılıyor.', 'Çıktığında içinden taşan beyaz iz kalçalarına doğru akıyor; parmaklarıyla dokunup sana gösteriyor, yanakları kıpkırmızı.'],
      ['İkiniz aynı anda zirveye varıyorsunuz; onun kasılmaları seni de peşinden sürüklüyor.', 'Derinlere boşalırken eliyle karnına bastırıp seni hissetmeye çalışıyor; "sıcak… çok sıcak" diye fısıldıyor.', 'Üstünden kalkmana izin vermiyor; içinde yumuşarken alnını alnına dayayıp gülüyor, aranızdan süzülen sıcaklık çarşafa damlıyor.']] },
    anin: { label: '💦 İçine', ev: 'Anal Creampie', say: ['Orada… bırak… ahh 🥵', 'Çıkarma! Hepsini… oraya…', 'Doldur beni… ahh!'], sys: [
      ['Kalçalarını iki elinle kavrayıp sonuna kadar gömülüyorsun; çığlığını yastığa bastırıyor.', 'Sıcak dalgalar halinde derinliklerine boşalıyorsun; her atışta sıkıca kasılıp seni son damlana kadar sağıyor.', 'Yavaşça çekildiğinde kalçalarının arasından beyaz bir iz süzülüyor; yüzü yastıkta, titreyerek gülüyor.'],
      ['Belini aşağı bastırıp en derinde kalıyorsun; inlemesi uzun, kesik bir hıçkırığa dönüşüyor.', 'İçini dolduran sıcaklıkla bütün bedeni gevşiyor; bacakları titremeden duramıyor.', 'Çıktığında yorgun düşüp yatağa yığılıyor; omzunun üstünden bakıp kalçasını eliyle kapatıyor, dudağını ısırıyor.']] },
    out: { label: '🤚 Dışarı', ev: 'Leg Cumshot', say: ['Dışarı! Dışarı…', 'Çık… şimdi!'], sys: [
      ['Son anda çıkıyorsun; sıcak damlalar bacaklarına ve karnına sıçrıyor.', 'Nefes nefese gülüp parmağıyla bir damlayı alıyor, merakla bakıyor.']] },
    ass: { label: '🍑 Kalçalarına', ev: 'Ass Cumshot', say: ['Kalçalarıma… hadi 😏', 'Üstüme… her yerime!'], sys: [
      ['Son anda çıkıp kalçalarına boşalıyorsun; sıcak çizgiler belinin çukuruna doğru akıyor.', 'Omzunun üstünden bakıp dudağını ısırıyor, kalçasını hafifçe sallıyor.']] },
    face: { label: '😈 Yüzüne', ev: 'Face Cumming', say: ['Yüzüme 😈', 'Ver… yüzüme!'], sys: [
      ['Önünde diz çöküp gözlerini kapatıyor; yanaklarına ve dudaklarına boşalıyorsun.', 'Gözlerini açıp gülümsüyor, dudaklarını yavaşça yalıyor.']] },
    mouth: { label: '👅 Ağzına', ev: 'Mouth Cumming', say: ['Ağzıma… ver 🥵', 'Bırakma… hepsini ağzıma!'], sys: [
      ['Dudaklarını sıkıca sarıp seni sonuna kadar alıyor; ağzına boşalırken boğazından bir inilti yükseliyor.', 'Son damlasına kadar emip ağzını açarak gösteriyor, sonra gözünü kırpmadan yutuyor.']] },
    tits: { label: '🍒 Göğüslerine', ev: 'Tit Cumshot', say: ['Göğüslerime… evet!', 'Üstüme… göğüslerime!'], sys: [
      ['Göğüslerini sıkıca bastırıp seni aralarında tutuyor; sıcak boşalman boynuna kadar sıçrıyor.', 'Parmaklarıyla tenine yayıp sana bakıyor, bir parmağını dudaklarına götürüyor.']] }
  };
  const AFTER = ['Bu… inanılmazdı 💕', 'Bir daha? 😏', 'Bırakma beni…', 'Bacaklarım titriyor… senin yüzünden 🥵'];
  // 🗣️ karaktere göre bitiş: say[bitiş] onun sözü (FINS.say yerine), sys son anlatım satırı, after kapanış sözleri (içe boşalmada react.cin önce gelir)
  const VOICE = {
    mia: { say: { in: 'İçime… lütfen içime, uzun zamandır bunu istiyordum 💗', anin: 'Ah… orada kal, hepsini ver bana…', out: 'Dışarı… dışarı canım, üstüme…', ass: 'Kalçalarıma… evet, böyle 🙈', face: 'Yüzüme mi? …tamam, gözlerimi kapatıyorum 😳', mouth: 'Ağzıma ver… bu sefer ben ilgileneyim 💗', tits: 'Göğüslerime… hep merak etmiştim 😳' },
      sys: 'Mia saçını kulağının arkasına atıp sana sarılıyor; bir öğretmen telaşıyla örtüyü üstünüze çekiyor.', after: ['Kahvaltıyı… yatakta mı yapsak? 💗', 'Roxy duymamıştır, değil mi? 🙈', 'Bana böyle bakma… yine isterim sonra.'] },
    roxy: { say: { in: 'Sakın çıkma! …y-yani, içime bırak işte, aptal! 😤', anin: 'Oraya mı?! …tamam, bırak, ama kimseye söyleme! 😤', out: 'Dışarı! Dışarı dedim, salak! 😤', ass: 'Kalçama mı? Pff… peki, yap hadi 😤', face: 'Yüzüme mi?! …bir kere. Sadece bir kere! 😳', mouth: 'Kapa çeneni ve ver şunu… ağzıma 😤', tits: 'Küçük deme sakın… hadi, üstlerine 😳' },
      sys: 'Roxy yüzünü yastığa gömüp kızarıklığını saklıyor, ama elini bırakmıyor.', after: ['Bunu kimseye anlatırsan ölürsün 😤💕', 'Hâlâ burada mısın? …iyi, kal biraz.', 'Sırf sen istedin diye, tamam mı? 😤'] },
    ava: { say: { in: 'Hepsini içime, yakışıklı… bir damla kaçırma 😈', anin: 'Doldur beni… orayı da senin yaptım 😈', out: 'Üstüme… izlemek istiyorum 😏', ass: 'Kalçalarıma… sanat eseri yap 😏', face: 'Yüzüme ver, gözlerine bakarak 😈', mouth: 'Ağzıma… tadına bakmak istiyorum 💋', tits: 'Göğüslerime… herkesin kıskandığı yere 😈' },
      sys: 'Ava sigara yakar gibi parmaklarını dudağına götürüp gülümsüyor; bakışında bir an kırılgan bir şey beliriyor.', after: ['Bir şarap daha açalım, gece bitmedi 🍷', 'Toplantıya geç kalacağım… değer 😈', 'Kal. Bu sefer gerçekten kal.'] },
    lily: { say: { in: 'İ-içime… olur mu? Çok istiyorum 🥺', anin: 'O-orada… bırak, lütfen… 🥺', out: 'D-dışarı… üstüme…', ass: 'Kalçalarıma mı? …t-tamam 🙈', face: 'Yüzüme… gözlerimi kapatabilir miyim? 🥺', mouth: 'Ağzıma… seni tatmak istiyorum 🥺', tits: 'Bunlara… hep utanırdım ama… evet 🙈' },
      sys: 'Lily dizlerini göğsüne çekip utangaç bir gülümsemeyle sana sokuluyor.', after: ['Yarın dükkânda yüzüne bakamayacağım 🙈', 'Bu… benim için çok özeldi 💛', 'Biraz daha… sarılabilir miyiz? 🥺'] },
    ash: { say: { in: 'İçime. Tartışma. 🖤', anin: 'Orayı doldur. Şaşırt beni. 🖤', out: 'Dışarı mı? Sıkıcı… ama tamam.', ass: 'Kalçama. Sanat yap 🖤', face: 'Yüzüme. Rimelim zaten akmıştı 🖤', mouth: 'Ağzıma. Bekletme. 🖤', tits: 'Göğüslerime. Kimseye söyleme 🖤' },
      sys: 'Ash tavana bakıp alaycı bir kahkaha atıyor; ama sana dönerken yüzü bir an yumuşuyor.', after: ['Fena değildi. Bunu duyduğun için şanslısın 🖤', 'Bir sigara olsa… neyse. Kal.', 'Tekrar ne zaman? Hemen değil. …belki.'] },
    chloe: { say: { in: 'İçime. Tıbbi açıdan sakıncası yok 😏', anin: 'Oraya. Prosedürü tamamla.', out: 'Dışarı. Steril alanı koruyalım.', ass: 'Kalçalarıma. Hedefi tutturmaya çalış 😏', face: 'Yüzüme. Gözlüklerimi çıkarayım önce.', mouth: 'Ağzıma. Numune alıyorum 😏', tits: 'Göğüslerime. Ölçüm için.' },
      sys: 'Chloe nabzını kontrol eder gibi bileğine dokunuyor, kuru bir gülümsemeyle not alıyor gibi başını sallıyor.', after: ['Tansiyonun yüksek. Bir tur daha önerirdim 😏', 'Rapor: hasta memnun. Hemşire de.', 'Su iç. Sonra tekrar.'] },
    liza: { say: { in: 'İçime… normalde buna izin vermem, sana özel 💅', anin: 'Oraya mı? Bu çok VIP bir hizmet… ahh, ver 💅', out: 'Dışarı! Çarşaflar ipek, dikkat 💅', ass: 'Kalçama… fotoğraf çekmek yok 💅', face: 'Yüzüme mi? Makyajım… of, peki, ver 😏', mouth: 'Ağzıma… bunu kimse bilmeyecek 💅', tits: 'Göğüslerime… doğal bunlar, takdir et 💅' },
      sys: 'Liza aynaya bakıp saçını düzeltiyor, sonra memnun bir kedi gibi yanına kıvrılıyor.', after: ['Bunun karşılığında bana bir çanta alırsın 💅', 'Fena değilsin… itiraf ediyorum.', 'Instagram\'a koymayacağım. Bu bizim.'] },
    claire: { say: { in: 'İçime… lütfen. Bunu… çok istiyorum 😳', anin: 'Orada… kalın, lütfen… hepsini…', out: 'Dışarı… lütfen, üstüme…', ass: 'Kalçama… n-nasıl isterseniz 😳', face: 'Yüzüme mi? …gözlüklerimi çıkarıyorum 😳', mouth: 'Ağzıma… kurallara uygun olarak 😳', tits: 'Bluzumun içine… göğüslerime 😳' },
      sys: 'Claire düğmelerini titreyen parmaklarla ilikliyor, kıpkırmızı yüzüyle sana bakmaya çalışıyor.', after: ['Bu… mesai dışıydı, değil mi? 😳', 'Not aldım. Tekrar etmemiz gereken bir prosedür.', 'Kimseye… söylemezsiniz, değil mi?'] },
    scarlett: { say: { in: 'İçime. Bu bir emir 😈', anin: 'Oraya bırak. Ve bana bak.', out: 'Dışarı. Ben söylediğim için.', ass: 'Kalçalarıma. Disiplinli ol.', face: 'Yüzüme. Gözlerini kaçırma 😈', mouth: 'Ağzıma ver. Şimdi.', tits: 'Göğüslerime. İzin verdim.' },
      sys: 'Scarlett bir an gözlerini kapatıp derin bir nefes alıyor; sonra o otoriter bakış yerine geri dönüyor.', after: ['Yeterli. Şimdilik.', 'Yarın sabah ofisime gel. Geç kalma 😈', 'Not: beklentilerimi aştın.'] },
    luna: { say: { in: 'İçime, solucanım… büyüyü mühürle 🌕', anin: 'Karanlığa bırak… ayin tamamlansın 🌑', out: 'Dışarı mı? Toprağa düşen öz boşa gider…', ass: 'Kalçalarıma… ay ışığında parlasın 🌕', face: 'Yüzüme… işaretini koy, solucanım 😈', mouth: 'Ağzıma… özünü tadacağım 🌑', tits: 'Göğüslerime… iksirim olsun 🌕' },
      sys: 'Luna parmağıyla tenine bir sembol çiziyor, mırıldandığı büyü ateş böceklerini dans ettiriyor.', after: ['Ruhunun bir parçası artık bende 🌕', 'Ormana yine gel… yoksa ben gelirim 😈', 'Büyü tuttu, solucanım. Kaçamazsın.'] },
    maeve: { say: { in: 'İçime. Ve kameraya bak.', anin: 'Orada bitir. Sessizce.', out: 'Dışarı. İzleyebileyim.', ass: 'Kalçama. Görünsün.', face: 'Yüzüme. Kayıttayız, unutma.', mouth: 'Ağzıma.', tits: 'Göğüslerime. Ekran net olsun.' },
      sys: 'Maeve soğukkanlılığını toparlar gibi yakasını düzeltiyor, ama dudaklarında bir gülümseme kalıyor.', after: ['Bu aramızda kalacak.', 'Rapor yazmana gerek yok. Ben her şeyi gördüm.', 'Yarın aynı saatte.'] }
  };
  // ➕ ek varyantlar: her bitişe ikinci söz, 4 anlatım, 2 kapanış (VOICE'a eklenir: her karakterde 5 anlatım, 5 kapanış, bitiş başına 2 söz)
  const VOICE_MORE = {
    mia: { say: { in: 'Kal… içimde kal, hissetmek istiyorum seni 💗', anin: 'Oraya da… evet, sana güveniyorum…', out: 'Karnıma… sıcacık olsun 🙈', ass: 'Arkamdan… üstüme bırak canım', face: 'Yüzüme… ama sonra beni öp, tamam mı? 💗', mouth: 'Hepsini… hepsini ben alacağım 😳', tits: 'Göğüslerimin arasına… evet, orada 💗' },
      sys: ['Mia nefesini toparlarken parmaklarını saçlarında gezdiriyor; "sen çok tatlısın" diye fısıldıyor.', 'Mia yorgun ama mutlu gülümsüyor; yanağını göğsüne dayayıp kalp atışını dinliyor.', 'Mia bir an utanıp yüzünü kapatıyor, sonra kahkahayla sana sokuluyor.', 'Mia lavanta kokulu çarşafı üstünüze örtüp alnına küçük bir öpücük konduruyor.'],
      after: ['Bu evde… böyle bir şey hiç olmamıştı 💗', 'Bir çay demleyeyim mi? Yanına gelirim sonra.'] },
    roxy: { say: { in: 'İçime bırak… ve bunu kafana takma, s-sorun değil! 😤', anin: 'Hızlı bitir şunu… ahh, oraya, evet!', out: 'Üstüme! Ama çarşafa değil, aptal!', ass: 'Kalçama işte… bakma öyle sırıtarak 😤', face: 'Yüzüme… ama gözlerime değmesin! 😳', mouth: 'Ağzıma… ve bunu kimseye söylemiyorsun 😤', tits: 'Üstlerine… b-bunlar senin için değil normalde!' },
      sys: ['Roxy sana sırtını dönüp mırıldanıyor, ama ayağını bacağına dolamayı unutmuyor.', 'Roxy yastığı kafana fırlatıyor; sonra gülmemek için dudağını ısırıyor.', 'Roxy kulaklığını takıyormuş gibi yapıp gözucuyla seni izliyor, yanakları hâlâ kırmızı.', 'Roxy "salak" diye fısıldayıp göğsüne bir yumruk atıyor, ardından oraya başını yaslıyor.'],
      after: ['Annem duyarsa ikimizi de öldürür 😤', 'Bir dahaki sefere… ben üstte olacağım. Söz değil, tehdit 😤'] },
    ava: { say: { in: 'İçimde patla… bunu hak ettin 😈', anin: 'Orada bitir, yakışıklı… dizlerim titresin 😈', out: 'Tenime yaz imzanı 😏', ass: 'Kalçalarıma… sonra fotoğrafını çekme sakın 😏', face: 'Yüzüme… rujum zaten mahvoldu 💋', mouth: 'Ağzıma… sonra seni öperim, hazır ol 😈', tits: 'Göğüslerime… parlasınlar 😈' },
      sys: ['Ava saçlarını savurup yatağın başına yaslanıyor; bakışında hem zafer hem şefkat var.', 'Ava parmağıyla göğsünde daireler çiziyor; sesi ilk kez bu kadar yumuşak.', 'Ava bir kadeh şarabı yudumlayıp sana uzatıyor; "işte buna kutlama denir" diyor.', 'Ava yorganı kendine çekip gülüyor; maskesi bir an düşüyor, sadece mutlu bir kadın kalıyor.'],
      after: ['Herkes beni güçlü sanar… sende güçlü olmama gerek yok 🥹', 'Sabah ofiste ciddi davranacağım. Sen de dene 😈'] },
    lily: { say: { in: 'Lütfen… içime… seni hissetmek istiyorum 🥺', anin: 'Ora-orada… ahh, tamam, bırak 🥺', out: 'Ü-üstüme olsun… lütfen 🙈', ass: 'Arkama… utanıyorum ama… evet 🙈', face: 'Yüzüme… g-gözlerimi kapatıyorum 🥺', mouth: 'Ağzıma… nasıl yapılır bilmiyorum ama… 🥺', tits: 'Göğüslerime… sen sevdin diye 🙈' },
      sys: ['Lily sana sarılıp yüzünü boynuna gömüyor; minicik bir "teşekkürler" duyuluyor.', 'Lily saçlarını düzeltmeye çalışıyor, beceremeyince gülüp vazgeçiyor.', 'Lily parmak uçlarıyla elini tutup avucuna küçük bir kalp çiziyor 💛', 'Lily dizlerini titreterek doğruluyor, sonra yine kucağına düşüyor.'],
      after: ['Seni hep böyle hatırlayacağım 💛', 'Dükkân için… yarın da yardıma gelir misin? 🥺'] },
    ash: { say: { in: 'Hepsini içime. Romantik olmadan. 🖤', anin: 'Orada. Durma. 🖤', out: 'Dışarı. Göster bakalım.', ass: 'Kalçama. Dövme gibi kalsın 🖤', face: 'Yüzüme. Gotik makyajın yeni versiyonu 🖤', mouth: 'Ağzıma. Tadı merak ediyorum. 🖤', tits: 'Göğüslerime. Çabuk.' },
      sys: ['Ash tavanı izleyip "fena değil" diye mırıldanıyor; eli eline değiyor, çekmiyor.', 'Ash rimelini başparmağıyla siliyor, alaycı bir gülüşle sana bakıyor.', 'Ash bir sigara arıyor, bulamayınca omzuna başını koyup gözlerini kapatıyor.', 'Ash çarşafın üstünde dağılmış saçlarıyla tavana küçük bir yıldız çiziyor parmağıyla.'],
      after: ['Roxy\'ye söyleme. Ya da söyle. Yüzünü görmek isterim 🖤', 'Bu sefer kazanan sendin. Bir dahakine bakarız.'] },
    chloe: { say: { in: 'İçime. Kayıtlara geçiyorum 😏', anin: 'Oraya. Doz tam olsun.', out: 'Karnıma. Ölçmesi kolay olur.', ass: 'Kalçalarıma. Enjeksiyon bölgesi 😏', face: 'Yüzüme. Gözlerime dikkat, hijyen önemli.', mouth: 'Ağzıma. Tat testi.', tits: 'Göğüslerime. Göğüs muayenesi tamam 😏' },
      sys: ['Chloe kuru bir sesle "tebrikler, testi geçtin" deyip ilk kez kahkaha atıyor.', 'Chloe saatine bakıp nabzını sayıyormuş gibi yapıyor; sonra saati bırakıp sana sarılıyor.', 'Chloe ıslak mendil uzatıp "hastane alışkanlığı" diyor, ama gözleri gülüyor.', 'Chloe saçlarını topuz yapıp yatağa uzanıyor; nöbet bitmiş gibi rahat.'],
      after: ['Reçete: haftada iki kez. Atlama 😏', 'Bunu tıbbi literatüre eklemeliyiz. Şaka. Belki.'] },
    liza: { say: { in: 'İçime… ama bunu herkese anlatmıyorsun 💅', anin: 'Ora-orası… ahh, tamam, sana özel 💅', out: 'Üstüme, çarşafa değil! 💅', ass: 'Kalçama… mükemmel değil mi? 💅', face: 'Yüzüme… sonra cilt bakımı ısmarlarsın 😏', mouth: 'Ağzıma… ilk ve son defa. Belki 💅', tits: 'Göğüslerime… parlasınlar, fotoğrafta güzel durur 💅' },
      sys: ['Liza telefonunu kapatıp kenara koyuyor; bu onun için büyük bir jest.', 'Liza saçını savurup "fena değildin" diyor, ama yanağı hâlâ kızarık.', 'Liza tırnaklarıyla göğsünde desen çiziyor; şımarık sesi ilk kez sessizleşiyor.', 'Liza aynadaki yansımasına bakıp memnun bir şekilde göz kırpıyor, sonra sana.'],
      after: ['Bundan sonra beni kafede beklersin, tamam mı? 💅', 'Hediye istemiyorum… yalan, istiyorum 💅'] },
    claire: { say: { in: 'İçime… lütfen… bunu istediğimi itiraf ediyorum 😳', anin: 'Orada… kurallara aykırı ama… lütfen 😳', out: 'Üstüme… gömleğime değmesin, lütfen 😳', ass: 'Kalçalarıma… nasıl isterseniz efendim 😳', face: 'Yüzüme… sonra gözlüğümü temizlerim 😳', mouth: 'Ağzıma… hepsini, lütfen 😳', tits: 'Göğüslerime… düğmeleri açtım bile 😳' },
      sys: ['Claire gözlüğünü takıp yüzünü düzeltmeye çalışıyor, ama nefesi hâlâ titrek.', 'Claire saçını topuzdan çözüyor; böyle dağınık hâlini ilk kez görüyorsun.', 'Claire ajandasını hayal edermiş gibi "bugün… çok verimliydi" diye fısıldıyor.', 'Claire elini tutup parmaklarını tek tek kendi parmaklarıyla kilitliyor.'],
      after: ['Yarın sabah… size kahve getireyim mi? 😳', 'Bundan kimseye bahsetmem. Ama… unutamam.'] },
    scarlett: { say: { in: 'İçime. Sonuna kadar. İtiraz yok.', anin: 'Oraya bırak. İzin verdiğim yere.', out: 'Dışarı. Göster bakalım kendini.', ass: 'Kalçalarıma. Hizalı olsun.', face: 'Yüzüme. Ve sakın gözlerini kapatma 😈', mouth: 'Ağzıma. Not alıyorum.', tits: 'Göğüslerime. Kurallara uygun.' },
      sys: ['Scarlett yatağın kenarına oturup saçlarını topluyor; sırtı hâlâ titriyor.', 'Scarlett kırmızı kalemini alıp göğsüne küçük bir "A+" çiziyor 😈', 'Scarlett bir an gözlerini kapatıyor; o sert yüzde ilk kez bir gülümseme beliriyor.', 'Scarlett ceketini omuzlarına alıp sana yukarıdan bakıyor; "fena değil öğrenci" der gibi.'],
      after: ['Ders bitti. Ama ödevin var 😈', 'Bundan kimse bahsetmeyecek. Sen hariç… bana.'] },
    luna: { say: { in: 'İçime… ateş böcekleri şahit olsun 🌕', anin: 'Orada… gölgelerin derinine 🌑', out: 'Tenime… büyü işaretim olsun 🌕', ass: 'Kalçalarıma… ay gibi parlasın 🌕', face: 'Yüzüme… ayin boyası 😈', mouth: 'Ağzıma… iksirin son malzemesi 🌑', tits: 'Göğüslerime… ay ışığında yıkanayım 🌕' },
      sys: ['Luna sana sarılıp kulağına anlaşılmaz bir büyü mırıldanıyor; tüylerin diken diken oluyor.', 'Luna kulübenin penceresinden ayı gösterip "o da izledi" diyor, gülümseyerek.', 'Luna parmaklarını göğsünde gezdirip gülüyor; öfkesi tamamen sönmüş gibi.', 'Luna bir şişe iksiri yudumlayıp sana uzatıyor; "güç topla, solucanım".'],
      after: ['Bu gece rüyanda da ben olacağım 🌕', 'Bir dahaki dolunayda… hazır ol 😈'] },
    maeve: { say: { in: 'İçime. Kayıt kapalı. Bu sefer.', anin: 'Orada bitir. Sakin ol.', out: 'Göster. Merak ediyorum.', ass: 'Kalçama. Kameraya dönük.', face: 'Yüzüme. Profesyonelce.', mouth: 'Ağzıma. Toplantı biter bitmez.', tits: 'Göğüslerime. Ekranda güzel görünsün.' },
      sys: ['Maeve ekranın öbür tarafında derin bir nefes alıp gözlerini kapatıyor.', 'Maeve kamerayı biraz yaklaştırıp ilk kez açıkça gülümsüyor.', 'Maeve saçlarını düzeltip ciddi yüzünü takınmaya çalışıyor; başaramıyor.', 'Maeve bir kadeh viski kaldırıyor; "sağlığına" der gibi kameraya.'],
      after: ['Raporunu bekliyorum. Detaylı.', 'Köyde iyi vakit geçiriyorsun anlaşılan 😏'] }
  };
  Object.entries(VOICE_MORE).forEach(([id, m]) => { const v = VOICE[id]; Object.keys(m.say).forEach(f => { v.say[f] = [v.say[f], m.say[f]]; }); v.sys = [v.sys, ...m.sys]; v.after = [...v.after, ...m.after]; });

  return { SLOTS, DAYS, LOCS, CHARS, ITEMS, STAGES, MOVES, FINS, AFTER, VOICE };
})();
