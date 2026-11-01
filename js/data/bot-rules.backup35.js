/* bot-editoru.bat ile duzenlenir (tools/bot-editor.html). Bicim: js/bot.js'in basindaki aciklama. */
window.Stories = window.Stories || {};
Stories.BOT_RULES = {
  "rules": [
    {
      "id": "r_mv8cf8uw2ccb",
      "name": "Selam",
      "category": "Selamlaşma",
      "when": [
        "@selam"
      ],
      "reply": [
        "Selam {sen}! 👋",
        "Heyy, nasılsın?",
        "Merhaba 🙂",
        "Selam canım 😊",
        "Heyy, seni bekliyordum 🥰",
        "Merhaba tatlım 💕",
        "Selam yakışıklı 😏",
        "Oo kimler gelmiş 😊"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_selam_utangac",
      "name": "Selam (utangaç)",
      "category": "Selamlaşma",
      "when": [
        "@selam"
      ],
      "reply": [
        "S-selam... 🙈",
        "Ah, merhaba||Seni görmeyi beklemiyordum"
      ],
      "traits": [
        "Utangaç"
      ],
      "chars": [],
      "note": "Utangaç karakterler farklı selam verir"
    },
    {
      "id": "r_nasilsin",
      "name": "Nasılsın",
      "category": "Selamlaşma",
      "when": [
        "@nasilsin"
      ],
      "reply": [
        "İyiyim, sen?",
        "Fena değil 🙂||Senden ne haber?",
        "Seni görünce daha iyiyim 🥰",
        "İyiyim canım, sen? 😊",
        "Fena değil, seni özledim 💕",
        "Harika, şimdi daha da iyi 😏"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_ne_yapiyorsun",
      "name": "Ne yapıyorsun",
      "category": "Sohbet",
      "when": [
        "=ne",
        "+yapmak"
      ],
      "reply": [
        "Hiç, uzanıyorum 😌",
        "Seni düşünüyordum desem? 🙈",
        "Seni düşünüyordum aşkım 💭",
        "Yatakta uzanmış, sana yazıyorum 😏",
        "Hiç, sıkılıyordum… iyi ki yazdın 🥰",
        "Duştan yeni çıktım 🚿😏"
      ],
      "traits": [],
      "chars": [],
      "note": "+yapmak: yapıyorsun, yapacaksın, yaptın... hepsini yakalar"
    },
    {
      "id": "r_seni_seviyorum",
      "name": "Seni seviyorum",
      "category": "Romantik",
      "when": [
        "seni",
        "+sevmek"
      ],
      "reply": [
        "Ben de seni ❤️",
        "Bunu duymak çok güzel 🥰",
        "Ben de seni seviyorum aşkım 💗",
        "Sen benim her şeyimsin 🥺",
        "Bunu duymak çok güzel canım 💞",
        "Ben daha çok 😘"
      ],
      "traits": [],
      "chars": [],
      "note": "Sıra önemli: önce 'seni' sonra 'sevmek' fiili"
    },
    {
      "id": "r_seviyorum_seni",
      "name": "Seviyorum seni (ters)",
      "category": "Romantik",
      "when": [
        "+sevmek",
        "seni"
      ],
      "reply": [
        "Böyle ters söyleyince daha da tatlı oldu 🥺",
        "Ben de seni bebeğim 💗",
        "Seni seviyorum… çok 🥺",
        "Kalbim seninle 💞",
        "Ben de, hem de nasıl 😘"
      ],
      "traits": [],
      "chars": [],
      "note": "Aynı kelimeler ters sırada: farklı cevap"
    },
    {
      "id": "r_seni_seviyorum_soguk",
      "name": "Seni seviyorum (soğuk)",
      "category": "Romantik",
      "when": [
        "seni",
        "+sevmek"
      ],
      "reply": [
        "Hıh. Tamam.",
        "...Peki."
      ],
      "traits": [
        "Soğuk"
      ],
      "chars": [],
      "note": "Soğuk karakterlerde"
    },
    {
      "id": "r_ozledim",
      "name": "Özledim",
      "category": "Romantik",
      "when": [
        "+özlemek"
      ],
      "reply": [
        "Ben de seni özledim 🥺",
        "Gel o zaman||Bekliyorum",
        "Ben de seni çok özledim canım 🥺",
        "Özlemek ne kelime, deli oldum 💗",
        "Gel o zaman, bekliyorum 😏",
        "Ben daha çok özledim aşkım 💕"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_kahve",
      "name": "Kahve",
      "category": "Sohbet",
      "when": [
        "@icecek"
      ],
      "reply": [
        "Kahve mi? Ben varım ☕",
        "Önce kahve, sonra dünya ☕",
        "Kahve mi? Seninle her şey olur canım ☕",
        "Bir kahveye hayır demem 😊",
        "Sen yap, ben içerim 😏☕"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_bulusalim",
      "name": "Buluşma teklifi",
      "category": "Sohbet",
      "when": [
        "+buluşmak|+görüşmek|+gelmek"
      ],
      "reply": [
        "Olur, ne zaman?",
        "Hmm... düşüneyim 🤔||Tamam, olur",
        "Ne zaman? Hemen mi? 😍",
        "Bekliyorum tatlım 😏",
        "Gel de görüşelim, özledim 🥺",
        "Bu akşam? 🌙😏"
      ],
      "traits": [],
      "chars": [],
      "note": "buluşalım mı / görüşelim / gelir misin"
    },
    {
      "id": "r_yedek",
      "name": "Yedek cevap",
      "category": "Yedek",
      "when": [],
      "reply": [
        "Hmm 🤔",
        "Anlat bakalım",
        "Öyle mi?",
        "Devam et, dinliyorum"
      ],
      "traits": [],
      "chars": [],
      "note": "Hiçbir kural eşleşmezse"
    },
    {
      "id": "r_yedek_utangac",
      "name": "Yedek (utangaç)",
      "category": "Yedek",
      "when": [],
      "reply": [
        "B-bilmiyorum ki... 🙈",
        "Hı hı..."
      ],
      "traits": [
        "Utangaç"
      ],
      "chars": [],
      "note": "Utangaç karakterin yedek cevabı"
    },
    {
      "id": "r_mv8d890hjbsw",
      "name": "",
      "category": "Selamlaşma",
      "when": [
        "@nasilsin",
        "+yapmak|+sevmek"
      ],
      "reply": [
        "heyyyy",
        "İyiyim, seni düşünüyordum 💭",
        "Sana yazıyorum işte canım 😊",
        "Seni bekliyordum 🥰"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_ev_foreplay",
      "name": "Isınma",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=foreplay"
      ],
      "reply": [
        "Mmm… böyle başlaman çok hoşuma gidiyor 😌",
        "Yavaş ol… acelemiz yok {sen} 💕",
        "Kalbim hızlandı bile 🥰||Devam et…",
        "Ellerin tenimde dolaşınca ürperiyorum 😌",
        "Bu gece acele etmeyelim mi? 💞||Her anını hissetmek istiyorum",
        "Kokunu içime çekiyorum… mmm 🥰",
        "Kulağıma bir şey fısılda {sen} 😳",
        "Böyle yakınken kalbimin sesini duyuyor musun? 💓",
        "Parmakların… biraz daha aşağı 😏",
        "Seni bu kadar özlediğimi bilmiyordum 🥺"
      ],
      "traits": [],
      "chars": [],
      "note": "Foreplay kategorisi"
    },
    {
      "id": "r_ev_kissing",
      "name": "Öpüşme",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=foreplay",
        "kissing"
      ],
      "reply": [
        "Dudakların… 😚||Bir daha öp beni",
        "Öpüşünü özlemişim 💋",
        "Mmh… nefesim kesildi 😳",
        "Bir daha… ve bir daha 😚",
        "Dudaklarını ısırabilir miyim? 😏",
        "Öpüşmen başımı döndürüyor 🫠",
        "Daha önce kimse beni böyle öpmedi 💋",
        "Nefes almayı unuttum galiba 😳||Devam",
        "Tadın hâlâ dudaklarımda {sen} 💕",
        "Boynuma da… lütfen 😌",
        "Dudakların tam benim dudaklarıma göre 💋",
        "Bir öpücük daha… sonra bir tane daha 😚",
        "Dilinle oynamak hoşuma gidiyor 😏",
        "Alt dudağımı ısırma… ya da ısır 😈",
        "Öpüşürken nefesim kesiliyor 🫠",
        "Ellerin yüzümde, sıcacık 🥰",
        "Bu öpücük her şeyi anlattı 💗",
        "Biraz daha uzun… bırakma 😌",
        "Dudaklarım şişti senin yüzünden 😳💋",
        "Öpüşünden anladım, beni istiyorsun 😏",
        "Kalbim dudaklarımda atıyor sanki 💓",
        "Gözlerimi açınca hâlâ sana bakıyorum 🥺",
        "Dudaklarını ısırıyorum hafifçe 😈",
        "Öpüşürken nefes almayı unuttum 😳",
        "Dilin dilimle dans ediyor 💋",
        "Böyle öpülmeyi hiç yaşamadım 🥺",
        "Dudakların çok yumuşak 💗",
        "Bir daha… ve bir daha 💋",
        "Öpüşürken ellerin saçımda 😩",
        "Seni öpmek bağımlılık yapıyor 😏",
        "Boynumu da öp 💋",
        "Bu öpücükle eridim 🫠"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_ev_lapkiss",
      "name": "Kucakta öpüşme",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=foreplay",
        "lap",
        "kissing"
      ],
      "reply": [
        "Kucağında olmak çok güzel 🥰||Bırakma beni",
        "Böyle sarılıp öpüşmeyi seviyorum 💞",
        "Böyle kalmak istiyorum hep 🥰",
        "Kucağında küçücük hissediyorum 😌💕",
        "Ellerin belimde… mmm 😚",
        "Sarıl bana, bırakma {sen} 💞",
        "Bu an hiç bitmesin 🫶",
        "Öp beni… daha yavaş 😌",
        "Kalp atışını hissediyorum 💓",
        "Burası benim en sevdiğim yer 🥰"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_ev_hug",
      "name": "Sarılma",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "hugging"
      ],
      "reply": [
        "Sarıl bana daha sıkı 🤗",
        "Kollarında kendimi güvende hissediyorum 💗",
        "Mmm… sıcacıksın {sen}",
        "Ne kadar sıcaksın 🤗",
        "Bir dakika daha böyle kalalım 🥺",
        "Kokunu seviyorum {sen} 💕",
        "Sarılınca bütün dünyayı unutuyorum 😌",
        "Daha sıkı… 🫶",
        "Ensemdeki nefesin ürpertiyor beni 😳",
        "Seninle böyle uyumak istiyorum 💤💕"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_ev_show",
      "name": "Gösterme",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=show"
      ],
      "reply": [
        "Beğendin mi? 😏",
        "Sadece senin için {sen} 🙈||Bakmayı bırakma",
        "Gözlerin üstümde… hoşuma gidiyor 😌",
        "Böyle mi bakmak istiyordun? 😏",
        "Yavaşça çıkarayım mı? 😈",
        "Yüzün kızardı {sen} 😏",
        "Dokunmak serbest… ama yavaş 😌",
        "Beğendiğini gözlerinden anlıyorum 😈",
        "Hepsi senin 💕||Bak doyasıya",
        "Biraz daha yaklaş… 😏"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_ev_foreplay_shy",
      "name": "Isınma (utangaç)",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=foreplay"
      ],
      "reply": [
        "B-böyle yakın olunca kızarıyorum 🙈",
        "Yavaş olalım mı… lütfen? 🥺",
        "Ö-öyle bakma, utanıyorum 🙈",
        "Işığı kapatsak mı? 😳",
        "Kalbim çok hızlı atıyor… 🥺",
        "Sana güveniyorum ama… yavaş ol 🙈",
        "Elimi tutar mısın? 🥺💕",
        "Böyle şeyleri hiç yapmadım… 😳",
        "Yüzüm yanıyor… 🙈"
      ],
      "traits": [
        "Utangaç"
      ],
      "chars": [],
      "note": "Utangaç karakterler"
    },
    {
      "id": "r_ev_eat",
      "name": "Onu ısıtmak",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=eat"
      ],
      "reply": [
        "Ahh… {sen} 😩||Durma lütfen",
        "Dilin… oh tanrım 🫠",
        "Mmmh… tam orası 💦",
        "Bacaklarım titriyor… 😵‍💫",
        "Ahh… orası çok hassas 😩",
        "Saçlarını çekiyorum, farkında değilim 🫠",
        "Durursan seni affetmem {sen} 😤💦",
        "Mmmh… bacaklarımı tut 😩",
        "Nasıl bu kadar iyi yapıyorsun? 🥵",
        "Yavaş… sonra hızlı… ahh 😵‍💫",
        "Sesimi tutamıyorum… 😩",
        "Ahhh… harikasın 😩",
        "Ahhh evet, daha… 😩",
        "Evet {sen}, evet… 😩",
        "Evet, evet, eveeet 😵‍💫",
        "Evet… evet, tam böyle 😩",
        "Sesimi tutamıyorum… ahhh 🥵"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_ev_cunni",
      "name": "Cunnilingus",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "cunnilingus"
      ],
      "reply": [
        "Ahh… evet, orası… 😩",
        "Saçlarını tutmama izin ver… 🫠||Durma!",
        "Böyle devam edersen dayanamayacağım {sen} 💦",
        "Dilin… ahh, tam orası 😩",
        "Bacaklarım kendiliğinden açılıyor 🫠",
        "Daha… daha… ahh {sen} 💦",
        "Gözlerimi kapatıyorum, sadece seni hissediyorum 😵‍💫",
        "Ellerim çarşafı sıkıyor 😩",
        "Şimdi durma… lütfen 🥺💦",
        "Kalçam titriyor… 🫠",
        "Bunu her gün yapmalıyız 😈",
        "Ahh {sen}… mükemmelsin 😩",
        "Ahh… sen bir harikasın 😩💗",
        "Mmmh… daha derin, evet 🥵",
        "Ahhh… harikasın 😩",
        "Ahhh evet, daha… 😩",
        "Evet {sen}, evet… 😩"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_ev_facesit",
      "name": "Facesitting",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "facesitting"
      ],
      "reply": [
        "Altımda nefesini hissediyorum… 😈",
        "Kontrol bende şimdi {sen} 😏||Mmm…",
        "Ah… kalkamayacağım galiba 🫠",
        "Nefes alabiliyor musun? 😏",
        "Kıpırdama… ahh, öyle 😩",
        "Yüzün tam altımda… mmm 😈",
        "Ellerimi göğsüme koyuyorum… ahh 🫠",
        "Bu güç hoşuma gidiyor {sen} 😈",
        "Dilini kullan… evet 😩💦",
        "Kalçamı sıkı tut 😏",
        "Aynen böyle, ahhh 😩",
        "Sen inledikçe ben daha çok inliyorum 😩",
        "Off… her yerim titriyor 🥵",
        "Ahh {sen}… mükemmelsin 😩",
        "Ahh… sen bir harikasın 😩💗",
        "Mmmh… daha derin, evet 🥵"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_ev_squirt",
      "name": "Squirt",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=eat",
        "squirt"
      ],
      "reply": [
        "Bir şey oluyor… ahh! 💦",
        "Dur… dur… ahhh 😵‍💫💦",
        "Bunu bana nasıl yaptın {sen}?! 🫣",
        "Ahh! Tutamıyorum… 💦💦",
        "Çarşaflar sırılsıklam oldu 🫣",
        "Ne oldu bana böyle?! 😵‍💫",
        "Bacaklarım hâlâ titriyor… 🫠",
        "Seni ıslattım… özür dilerim 🙈💦",
        "Bir daha… bir daha yap 😩",
        "Hiç böyle olmamıştı {sen} 😳💦",
        "Offf… bu çok iyi 🥵",
        "Bir daha… ahh, bir daha 😩",
        "Off… harikasın {sen} 🥵",
        "Aynen böyle, ahhh 😩",
        "Sen inledikçe ben daha çok inliyorum 😩",
        "Off… her yerim titriyor 🥵"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_ev_onmouth",
      "name": "On Mouth",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "on mouth"
      ],
      "reply": [
        "Mmh… dudakların 😩",
        "Daha… biraz daha 💗",
        "Dudaklarını orada hissetmek… 😩",
        "Mmm… yavaşça 😌",
        "Öpücüklerin ateş gibi 🔥",
        "Durma, çok güzel 🫠",
        "Ahh… {sen} 💗",
        "Biraz daha bastır… 😩",
        "Nefesin bile yetiyor beni çıldırtmaya 🥵"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_ev_eat_shy",
      "name": "Onu ısıtmak (utangaç)",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=eat"
      ],
      "reply": [
        "Ç-çok utanıyorum ama… durma 🙈",
        "Bakma bana öyle… ahh 😳",
        "O-orası… ahh 🙈",
        "Sesimi duyacaklar… 😳",
        "Yüzümü kapatıyorum… ama durma 🙈💦",
        "Ç-çok tuhaf hissettiriyor… güzel 😳",
        "Bunu kimseye söyleme 🙈",
        "Ahh… özür dilerim, sesim… 😳",
        "Lütfen… biraz daha 🥺",
        "Off, tam istediğim gibi 😩",
        "Ahhh, bu kadar iyi olmamalı 😵‍💫",
        "Bayılıyorum… devam 🥵",
        "Offf… bu çok iyi 🥵",
        "Bir daha… ahh, bir daha 😩",
        "Off… harikasın {sen} 🥵"
      ],
      "traits": [
        "Utangaç"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_ev_outer",
      "name": "Dokunuş",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=outercourse"
      ],
      "reply": [
        "Hoşuna gidiyor mu {sen}? 😏",
        "Yüzündeki ifadeye bayılıyorum 😈",
        "Bana bırak bu sefer 💕",
        "Bugün kontrol bende 😈",
        "Nefesin hızlandı {sen} 😏",
        "Sana dokunmayı seviyorum 💕",
        "Gözlerini kapama, bana bak 😏",
        "Daha yavaş mı? Yoksa… 😈",
        "Ne kadar sertsin… 🥵",
        "Benim için dayan biraz 😏",
        "Bu gece sadece senin zevkin için buradayım 😈",
        "Hangi elimi daha çok seviyorsun? 😏",
        "Bekle… daha yeni başlıyorum 😋",
        "Bugün başka yollarla seni bitireceğim 😏",
        "Her yerimle oynayacağım seninle 😈",
        "Acele yok, keyfini çıkar 😌",
        "Hangi yerimi istersin? 😏",
        "Sana dokunmak çok güzel 😩",
        "Seni yavaş yavaş pişiriyorum 😈",
        "Bırak ben yapayım 😏",
        "Gözlerini kapat, hisset 😩",
        "Daha yeni başlıyorum 😈",
        "Nefesin değişti 😏",
        "Durma {sen}… ahhh 😩",
        "Mmmh… çok iyisin 🥵",
        "Mmm evet, bunu seviyorum 😈",
        "Off, tam istediğim gibi 😩",
        "Ahhh, bu kadar iyi olmamalı 😵‍💫",
        "Bayılıyorum… devam 🥵"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_ev_bj",
      "name": "Blowjob",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=oral",
        "=outercourse"
      ],
      "reply": [
        "Mmm… 😋||Gözlerimin içine bak",
        "Bunu seviyorsun değil mi {sen}? 😏",
        "Daha derin mi istiyorsun? 😈",
        "Mmm… tadın 😋",
        "Saçlarımı tut {sen} 😈",
        "Sesin… bayılıyorum 🥵",
        "Dilimle… böyle mi? 😏",
        "Bana bakarak gel… 😈",
        "Yavaş yavaş… sonra hızlı 😋",
        "Böyle inlemen hoşuma gidiyor 😏",
        "Hepsini istiyorum 😈",
        "Diz çöktüm… şimdi beni izle 😈",
        "Dudaklarım seni çok özlemiş 😋",
        "Bu tadı ezberledim {sen} 😏",
        "Elinle saçımı yönlendir… evet, böyle 😈",
        "Ağzıma al demeden aldım 😋",
        "Dilimle her yerini tanıyorum 😈",
        "Gözlerine bakarak emiyorum 😏",
        "Ağzım sıcacık değil mi? 🥵",
        "Saçımı tut, ritmi sen ver 😩",
        "Dudaklarımla sıkıyorum 😈",
        "Tadın çok güzel 😋",
        "Yavaşça… sonra derin 😏",
        "Ağzımda büyüyorsun 😳",
        "Elimle de yardım ediyorum 😈",
        "Diz çöktüm senin için 🥺",
        "Ağzımdan çıkarmak istemiyorum 😋",
        "Ben de inliyorum, duyuyor musun? 😩",
        "Of of of… harika 😵‍💫",
        "Ahh, bacaklarım titriyor… devam 🥵",
        "Durma {sen}… ahhh 😩",
        "Mmmh… çok iyisin 🥵",
        "Mmm evet, bunu seviyorum 😈",
        "Ağzımda büyüdüğünü hissediyorum 😋",
        "Damarlarını dilimle takip ediyorum 😈",
        "Tadın ağzımı dolduruyor 🥵",
        "Boğazıma kadar… gözlerim doldu 😩",
        "Dudaklarım seni sıkıca sarıyor 😋"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_ev_deep",
      "name": "Deepthroat",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=oral",
        "=outercourse",
        "deepthroat"
      ],
      "reply": [
        "Mmhh… *nefes nefese* 😵‍💫",
        "Hepsini… alabilirim 😈||Bak",
        "Gözlerim yaşardı ama… durma 🥵",
        "Mmhh… hepsi içimde 😵‍💫",
        "Boğazım… ahh 😈",
        "Başımı tut… yavaşça 😩",
        "Nefes… nefes alayım… sonra tekrar 😈",
        "Bunu kimse yapamaz senin için {sen} 😏",
        "Daha derin… 😵‍💫",
        "Boğazıma kadar… ahh 😩",
        "Nefesimi kesiyorsun 🥵",
        "Gözlerim doldu ama durma 😈",
        "En derine al beni… yani ben seni 😳",
        "Başımı bastır 😩",
        "Boğazımda zonkluyorsun 😈",
        "Hiç ara vermeden 🥵",
        "Salyalarım akıyor 😳",
        "Boğazımı kullan 😩",
        "Sonuna kadar yuttum 😈",
        "Ooff, nasıl bu kadar iyisin? 😩",
        "Ahhh ahhh… durma 😩",
        "Ohh… ne kadar iyi 🥵",
        "Ben de inliyorum, duyuyor musun? 😩",
        "Of of of… harika 😵‍💫",
        "Ahh, bacaklarım titriyor… devam 🥵",
        "Boğazıma kadar… gözlerim doldu 😩",
        "Dudaklarım seni sıkıca sarıyor 😋",
        "Ucunu dilimle oyalıyorum, hissediyor musun? 😏",
        "Ağzımda büyüdüğünü hissediyorum 😋",
        "Damarlarını dilimle takip ediyorum 😈"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_ev_tit",
      "name": "Titfuck",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=outercourse",
        "titfuck"
      ],
      "reply": [
        "Göğüslerimi seviyorsun biliyorum 😏",
        "Böyle mi? 😈||Bakmayı bırakma",
        "Göğüslerimin arası sıcacık 😏",
        "Bastır biraz… böyle 😈",
        "Gözlerini göğüslerimden alamıyorsun 😏",
        "Dudaklarımla da yardım edeyim mi? 😋",
        "Ahh, sert… 🥵",
        "Bunu hayal ettiğini biliyorum {sen} 😈",
        "Yavaş… sonra hızlan 😏",
        "Göğüslerimin arasında kaybolman ne güzel 😏",
        "Yukarıdan sana bakıyorum… dilim hazırda 😋",
        "Yağ getirsem mi? Daha kaygan olur 😈",
        "Göğüslerimin arasında kaybol 😏",
        "Göğüslerimi sıkıştırıyorum senin için 😈",
        "Aralarında kayıyorsun 🥵",
        "Ucunu dilimle karşılıyorum 😋",
        "Göğüslerim yağlı, kayganlar 😏",
        "Yukarı aşağı… hızlan 😈",
        "Göğüslerimle sağıyorum seni 🥵",
        "Aralarında çok sıcaksın 😩",
        "Göğüslerime bastır 😈",
        "Bu göğüsler senin için 🍒",
        "Çok güzel… devam et 🥺",
        "Harikasın… harikasın… ahhh 😵‍💫",
        "İnliyorum… ve utanmıyorum 😈",
        "Ooff, nasıl bu kadar iyisin? 😩",
        "Ahhh ahhh… durma 😩",
        "Ohh… ne kadar iyi 🥵",
        "Göğüslerimin arasında sertliğini hissediyorum 🥵",
        "Ucun çeneme değiyor her seferinde 😈",
        "Göğüslerimi sıkıştırınca daha da büyüyorsun 😩"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_ev_hand",
      "name": "Handjob",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "handjob|masturbation"
      ],
      "reply": [
        "Elimde nasıl sertleştiğine bak… 😏",
        "Yavaş mı hızlı mı {sen}? 😈",
        "Avucumda nasıl zonkladığını hissediyorum 😏",
        "Biraz daha sıkayım mı? 😈",
        "Yüzündeki ifadeye bak… 🥵",
        "Gel… gelmek istiyorsun değil mi? 😏",
        "Parmaklarım ıslandı 😋",
        "Bana bakarak… 😈",
        "Hızlı mı istiyorsun {sen}? 😏",
        "Avucumdaki zonklaman… kalp atışı gibi 😏",
        "Gözlerini kapama, bana bak, elime bak 😈",
        "Sıkı mı gevşek mi, sen söyle 😏",
        "Elimde ne kadar sertsin 😏",
        "Yavaş mı hızlı mı? 😈",
        "Parmaklarımla oynuyorum 😋",
        "Elimle sıkıyorum 😩",
        "Avucumda zonkluyorsun 🥵",
        "Biraz tükürük… daha kaygan 😈",
        "Gözlerine bakarak okşuyorum 😏",
        "Elimde eriyorsun 😩",
        "İki elimle tutuyorum 😈",
        "Ucuyla oynuyorum 😏",
        "Hmmm… beni deli ediyorsun 😈",
        "Ahh… seni hissetmek harika 🥵",
        "Durma, sakın durma ahhh 😵‍💫",
        "Çok güzel… devam et 🥺",
        "Harikasın… harikasın… ahhh 😵‍💫",
        "İnliyorum… ve utanmıyorum 😈",
        "Avucumda damarların atıyor 😏",
        "Elim seni zor kavrıyor, ne kadar kalın 😳",
        "Ucundan damlıyor bile, sabırsız 😈"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_ev_feet",
      "name": "Footjob / Legjob",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=bacak"
      ],
      "reply": [
        "Bunu hiç beklemiyordun değil mi? 😏",
        "Ayaklarım hoşuna gitti galiba 😈",
        "Ayaklarım bu kadar işe yarıyormuş 😏",
        "Bacaklarımın arası sıcak 😈",
        "Bak, nasıl hoşuna gidiyor 😏",
        "Biraz daha yukarı… 😈",
        "Tuhaf ama… sevdim 🙈",
        "Gözlerini kapama {sen} 😏",
        "Daha hızlı mı? 😈",
        "Ayak parmaklarımla oynamana gülüyorum 🙈😏",
        "Bu kadar seveceğini bilsem daha önce yapardım 😈",
        "Topuklarımı da kullanayım mı? 😏",
        "Ayaklarımla okşuyorum 😏",
        "Bacaklarımın arasında sıkıştın 😈",
        "Ayak tabanlarım çok yumuşak değil mi? 😋",
        "Parmaklarımla oynuyorum 😏",
        "Bacaklarımla sağıyorum seni 🥵",
        "Ayaklarıma bayılıyorsun, biliyorum 😈",
        "Yavaşça yukarı aşağı 😩",
        "Bacaklarımı sıkıyorum 😏",
        "Ahhh… beni bitiriyorsun 😩",
        "Devam et… ahhh 🥵",
        "İnlememi duyuyor musun? Senin yüzünden 🥵",
        "Hmmm… beni deli ediyorsun 😈",
        "Ahh… seni hissetmek harika 🥵",
        "Durma, sakın durma ahhh 😵‍💫"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_ev_butt",
      "name": "Buttjob",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "buttjob"
      ],
      "reply": [
        "Kalçamı hissediyor musun? 😏🍑",
        "Böyle sürtünmek… mmm 😈",
        "Kalçamın arasında… mmm 😈",
        "Bastır biraz {sen} 🍑",
        "Bunu çok seviyorsun değil mi? 😏",
        "Sıcacıksın… ahh 🥵",
        "Ellerini kalçama koy 😈",
        "Yavaşça kaydır… 😏",
        "Arkamı dönüyorum, bak 🍑😈",
        "Kalçalarımın arasında sıkışmış haline bak 😈",
        "Yavaşça kalçamı sallıyorum… hissediyor musun? 🍑",
        "Bu yumuşaklığa kimse dayanamaz 😏",
        "Kalçamın arasında kay 😈",
        "Kalçamı sıkıştırıyorum 😏",
        "Kalçam yağlı ve kaygan 🥵",
        "Kalçamla sağıyorum seni 😈",
        "Yavaş yavaş sürtünüyorum 😩",
        "Kalçamı izlemeyi seviyorsun 😏",
        "Belimi tut 🥵",
        "Kalçamın arası sıcacık 😈",
        "Mmm… beni böyle sev 😩",
        "Tam oradan… ahhh 🥵",
        "Nefesim kesildi… devam 😵‍💫",
        "Ahhh… beni bitiriyorsun 😩",
        "Devam et… ahhh 🥵",
        "İnlememi duyuyor musun? Senin yüzünden 🥵"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_ev_vag",
      "name": "Önden pozisyon",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=vajinal"
      ],
      "reply": [
        "Ahh… seni içimde hissediyorum 😩",
        "Daha… daha sert {sen} 💦",
        "Evet… böyle… 🫠",
        "Mmh, beni tamamen dolduruyorsun 😵‍💫",
        "İçimde nasıl hissettirdiğini bilemezsin 😩",
        "Ahh… daha derin 💦",
        "Kalçalarımı tut… sert 😈",
        "Beni doldur {sen} 🥵",
        "Her hareketin… ahh 😵‍💫",
        "Durma, sakın durma 😩",
        "Sesimi duymak hoşuna gidiyor değil mi? 😈💦",
        "Tam orası… ahh 🫠",
        "Yatak gıcırdıyor… komşular duyacak 😳💦",
        "Her itişinde nefesim kesiliyor… bir daha 😩",
        "Bu ritim… kalbimle aynı atıyor 💓",
        "Tırnaklarım sırtında iz bırakıyor, kusura bakma 😈",
        "Beni unuttuğum bir yere götürüyorsun {sen} 🫠",
        "İçime gir… yavaşça 😩",
        "Sırılsıklamım, hissediyor musun? 🥵",
        "Seni içimde hissetmek çok güzel 😈",
        "Beni doldur 😩",
        "Her itişin içimi titretiyor 🥵",
        "Durma… sakın durma 😩",
        "Tam yerine dokunuyorsun 😵‍💫",
        "İçim seni sıkıyor 😏",
        "Daha hızlı 🥵",
        "Islaklığım seni çekiyor 😈",
        "Evet… evet, tam böyle 😩",
        "Sesimi tutamıyorum… ahhh 🥵",
        "Böyle devam et, ahh lütfen 🥺",
        "Mmm… beni böyle sev 😩",
        "Tam oradan… ahhh 🥵",
        "Nefesim kesildi… devam 😵‍💫",
        "Off… kalınca girdin içime 😩",
        "Damarlarının sürtünmesini hissediyorum 🥵",
        "Her itişinde içim seni sıkıyor… ahh 😩",
        "Beni nasıl açıyorsun öyle, sonuna kadar 😵‍💫",
        "Ucun en derindeki yere değiyor… durma 🥵",
        "İçimde zonkladığını hissediyorum aşkım 😩"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_ev_missionary",
      "name": "Missionary",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=forward",
        "missionary"
      ],
      "reply": [
        "Gözlerime bak {sen}… 💗||Ahh",
        "Seni böyle üstümde hissetmeyi seviyorum 🥰",
        "Gözlerin gözlerimde… 💗",
        "Bacaklarımı beline doluyorum 😩",
        "Öp beni… ahh 💋",
        "Ağırlığını hissetmek güzel 😌💦",
        "Ellerimi tut, bırakma {sen} 🥺",
        "Yavaş… derin… ahh 😵‍💫",
        "Seni böyle seviyorum 🥰💦",
        "Alnın alnımda, nefesin nefesimde… 💗",
        "Bacaklarımla seni kilitledim, kaçamazsın 😈",
        "Yüzündeki o ciddi ifade… bayılıyorum 😏",
        "Yıldızları tavanda görüyorum 🌌😩",
        "Kulağıma adımı fısılda… ahh 🥺",
        "Üstümdesin, ağırlığın beni yatağa gömüyor… 🫠",
        "Ellerimi başımın üstünde tut 😈",
        "Bacaklarımı omzuna mı alsan? 😏",
        "Her itişinde gözlerin kararıyor, görüyorum 😩",
        "Seni böyle yüz yüze hissetmek en güzeli 💗",
        "Nefesin yüzümde, dudakların dudaklarımda… 💋",
        "Sırtına tırnaklarımı geçiriyorum, kusura bakma 😈",
        "Yavaş… sonra derin… sonra yine yavaş 😩",
        "Kalçamı kaldırıyorum, daha derine gel 🥵",
        "Alnımızdaki ter birbirine karıştı 💦",
        "Klasik ama asla sıkıcı değil 😏",
        "Gözlerimi kapatmayacağım, seni izlemek istiyorum 🥺",
        "Gözlerime bakarak gir 🥺",
        "Bacaklarımı beline doluyorum 😈",
        "Üstümde ağırlığını hissetmek çok güzel 💗",
        "Yavaş başla, sonra beni yatağa göm 😩",
        "Alnını alnıma daya 🥺",
        "Her itişinde inliyorum 🥵",
        "Böyle klasik ama mükemmel 😏",
        "Öp beni, durmadan 💋",
        "Tırnaklarım sırtında, kaçamazsın 😈",
        "Daha derin… ahh 😩",
        "Seni tamamen hissediyorum 💗",
        "Ahhh evet, daha… 😩",
        "Evet {sen}, evet… 😩",
        "Evet, evet, eveeet 😵‍💫",
        "Evet… evet, tam böyle 😩",
        "Sesimi tutamıyorum… ahhh 🥵",
        "Böyle devam et, ahh lütfen 🥺",
        "Beni nasıl açıyorsun öyle, sonuna kadar 😵‍💫",
        "Ucun en derindeki yere değiyor… durma 🥵",
        "İçimde zonkladığını hissediyorum aşkım 😩",
        "Islaklığım seni içime çekiyor 😈",
        "Bu kadar kalın olunca nefesim kesiliyor 🥵",
        "Tamamen dolduruyorsun beni canım 😩"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_ev_doggy",
      "name": "Doggy",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=doggy"
      ],
      "reply": [
        "Saçımı çek… 😈",
        "Ahh! Böyle çok derin 😩",
        "Kalçamı tut {sen}… 💦",
        "Ahh! Çok derin 😩",
        "Kalçama vur… 😈🍑",
        "Saçımı çek {sen}… evet 😩",
        "Böyle görünmek hoşuna gidiyor mu? 😏",
        "Daha sert… ahh 💦",
        "Ellerim yetmiyor, düşeceğim 🫠",
        "Beni sahiplen 😈",
        "Aynadaki halimize bak… 😈",
        "Yastığa bastırıyorum yüzümü, sesim çıkmasın 😩",
        "Kalçamdaki parmak izlerin yarın da kalacak 🍑",
        "Belimi bük dedin, büktüm… şimdi ne? 😏",
        "Her vuruşta biraz daha öne kayıyorum 🫠",
        "Kalçamı kaldırdım, gel 😈",
        "Saçımı tut, bırakma 😩",
        "Arkadan çok derinsin 🥵",
        "Belimi bastır, kalçamı kaldır 😏",
        "Şaplak at, hak ettim 😈",
        "Yüzüm yastıkta inliyorum 😩",
        "Kalçam sana vuruyor, duyuyor musun? 🥵",
        "Daha sert, kalçamı tut 😈",
        "Bu açıyla tam yerine geliyorsun 😵‍💫",
        "Dört ayak üstünde, senin için 😏",
        "Sırtıma eğil, kulağıma inle 😩",
        "Ellerin kalçamda çok güzel 🥵",
        "Beni hayvan gibi al 😈",
        "Dizlerim titriyor, durma 😩",
        "Arkadan ne kadar azgınsın 😏",
        "Kalçamı sana doğru itiyorum, daha derin 🥵",
        "Arkadan beni böyle alman başımı döndürüyor 😵‍💫",
        "Ahh… sen bir harikasın 😩💗",
        "Mmmh… daha derin, evet 🥵",
        "Ahhh… harikasın 😩",
        "Ahhh evet, daha… 😩",
        "Evet {sen}, evet… 😩",
        "Evet, evet, eveeet 😵‍💫",
        "Islaklığım seni içime çekiyor 😈",
        "Bu kadar kalın olunca nefesim kesiliyor 🥵",
        "Tamamen dolduruyorsun beni canım 😩",
        "Çıkarken bile seni özlüyorum, geri gir 😈",
        "Duvarlarımı tek tek hissediyorsun değil mi? 😵‍💫",
        "Kalçalarımız çarpıştıkça sesler odayı dolduruyor 🥵"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_ev_cowgirl",
      "name": "Cowgirl",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=cowgirl"
      ],
      "reply": [
        "Şimdi ben sürüyorum 😈",
        "Bak bana… ahh 😩||Ellerini kalçama koy",
        "Ritmi ben seçiyorum 😈",
        "Göğüslerime dokun… ahh 😩",
        "Bak nasıl hareket ediyorum 😏",
        "Yavaş… sonra hızlı… 😈💦",
        "Beni izlemeyi seviyorsun 😏",
        "Kalçamı tut, düşmeyeyim 😩",
        "Sana bineceğim bütün gece {sen} 😈",
        "Bugün seni ben sürüyorum, dizginler bende 🐎😈",
        "Saçlarım yüzüne dökülüyor… tut onları 😏",
        "Yavaşça iniyorum… hissediyor musun? 😩",
        "Göğüslerim zıplıyor, gözlerin onlarda 😏",
        "Bu tempoyu ben belirlerim {sen} 😈💦",
        "Altımda çaresizsin 😏",
        "Göğüslerimi tut, zıplıyorum 🥵",
        "Ritmi ben belirlerim 😈",
        "Sonuna kadar oturuyorum… ahh 😩",
        "Ellerini kalçama koy 😏",
        "Gözlerime bak, kıpırdama 😈",
        "Yavaş yavaş… sonra çılgınca 🥵",
        "Üstündeyken çok derin 😵‍💫",
        "Kalçamı dairesel oynatıyorum, hissediyor musun? 😏",
        "Göğsüne tutunuyorum 😩",
        "Sen sadece yat, gerisi bende 😈",
        "Altımda inlemeni seviyorum 🥵",
        "Saçlarım yüzüne dökülüyor 😏",
        "Seni sağana kadar inmeyeceğim 😈",
        "Kalçamı yavaşça indirip kaldırıyorum, işkence gibi 😈",
        "Sen inledikçe ben daha çok inliyorum 😩",
        "Off… her yerim titriyor 🥵",
        "Ahh {sen}… mükemmelsin 😩",
        "Ahh… sen bir harikasın 😩💗",
        "Mmmh… daha derin, evet 🥵",
        "Ahhh… harikasın 😩",
        "Çıkarken bile seni özlüyorum, geri gir 😈",
        "Duvarlarımı tek tek hissediyorsun değil mi? 😵‍💫",
        "Kalçalarımız çarpıştıkça sesler odayı dolduruyor 🥵",
        "Off… kalınca girdin içime 😩",
        "Damarlarının sürtünmesini hissediyorum 🥵",
        "Her itişinde içim seni sıkıyor… ahh 😩"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_ev_spoon",
      "name": "Spooning",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=spooning"
      ],
      "reply": [
        "Böyle sarılarak… mmm 🥰",
        "Nefesin ensemde… 😌💦",
        "Arkamda… sarılarak… mmm 🥰",
        "Yavaş ve derin… 😌💦",
        "Boynumu öp {sen} 😚",
        "Böyle uyuyakalabilirim 💤😈",
        "Elini göğsüme koy 😌",
        "Fısılda bana… 😳",
        "Ahh… çok yakınsın 🫠",
        "Arkamdan sarılıp kulağımı ısırınca… ahh 😩",
        "Uyuyakalırsak böyle kalalım mı? 😌💦",
        "Sabahın ilk ışığında böyle uyanmak istiyorum 🌅",
        "Kalbinin sırtımda attığını duyuyorum 💓",
        "Arkamdan sarıl, sımsıkı 💗",
        "Yan yana, yavaş ve derin 😩",
        "Enseme nefesin çarpıyor 🥵",
        "Göğüslerimi tut arkadan 😏",
        "Bacağımı kaldır, daha derin 😈",
        "Böyle tembel ama çok güzel 😌",
        "Kulağıma fısılda 🥺",
        "Seni arkamda hissetmek huzur veriyor 💗",
        "Yavaşça… acele etme 😩",
        "Boynumu öp arkadan 💋",
        "Sabaha kadar böyle kalabiliriz 😏",
        "Kalçamı sana bastırıyorum 🥵",
        "Bir daha… ahh, bir daha 😩",
        "Off… harikasın {sen} 🥵",
        "Aynen böyle, ahhh 😩",
        "Sen inledikçe ben daha çok inliyorum 😩",
        "Off… her yerim titriyor 🥵",
        "Ahh {sen}… mükemmelsin 😩",
        "Off… kalınca girdin içime 😩",
        "Damarlarının sürtünmesini hissediyorum 🥵",
        "Her itişinde içim seni sıkıyor… ahh 😩",
        "Beni nasıl açıyorsun öyle, sonuna kadar 😵‍💫",
        "Ucun en derindeki yere değiyor… durma 🥵",
        "İçimde zonkladığını hissediyorum aşkım 😩"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_ev_standing",
      "name": "Ayakta",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=standing"
      ],
      "reply": [
        "Duvara yasla beni 😈",
        "Ahh… ayaklarım yerden kesiliyor 😩",
        "Beni kaldır… ahh 😩",
        "Bacaklarım titriyor, tut beni 🫠",
        "Duvar soğuk, sen sıcaksın 😈",
        "Boynuma tutunuyorum… 😩",
        "Daha sert {sen}… 💦",
        "Ayakta bile dayanamıyorum 😵‍💫",
        "Kimse görmesin… 😈",
        "Ayaklarım parmak ucunda… ahh 😩",
        "Kapının arkasında, herkes içeride… 😈",
        "Bacağımı kaldır, daha derin 🫠",
        "Duvardaki tablolar düşecek 😳💦",
        "Ayakta… dizlerim çözülüyor 😩",
        "Bacağımı kaldır 🥵",
        "Beni kucağına al, tutun 😏",
        "Duvar soğuk, sen sıcaksın 😩",
        "Ayakta bu kadar derin olur mu? 😵‍💫",
        "Ellerim duvarda, kalçam sende 😈",
        "Beni kaldırıp taşı 🥵",
        "Ayakta inlemek zor ama… ahh 😩",
        "Tezgaha yasla beni 😏",
        "Bırakma, düşeceğim 😳",
        "Ayakta sert sert 😈",
        "Ahhh, bu kadar iyi olmamalı 😵‍💫",
        "Bayılıyorum… devam 🥵",
        "Offf… bu çok iyi 🥵",
        "Bir daha… ahh, bir daha 😩",
        "Off… harikasın {sen} 🥵",
        "Aynen böyle, ahhh 😩",
        "Beni nasıl açıyorsun öyle, sonuna kadar 😵‍💫",
        "Ucun en derindeki yere değiyor… durma 🥵",
        "İçimde zonkladığını hissediyorum aşkım 😩",
        "Islaklığım seni içime çekiyor 😈",
        "Bu kadar kalın olunca nefesim kesiliyor 🥵",
        "Tamamen dolduruyorsun beni canım 😩"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_ev_lap",
      "name": "Lap Sex",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "lap sex"
      ],
      "reply": [
        "Kucağında… ahh 😩💕",
        "Sıkı sarıl bana {sen}",
        "Kucağında sallanıyorum… 😩💕",
        "Göğsüne yaslanıyorum… ahh 🫠",
        "Gözlerine bakarak… 💗",
        "Belimi tut {sen} 😩",
        "Böyle iç içe… mmm 🥰",
        "Yavaş… ahh 😵‍💫",
        "Seni hiç bırakmak istemiyorum 💞",
        "Kucağında dans eder gibiyim 💃😈",
        "Alnımı alnına dayıyorum… gözlerin çok yakın 💗",
        "Sarılarak, sallanarak… ahh 🥰",
        "Böyle iç içe hiç ayrılmayalım 💞",
        "Kucağına oturuyorum 😏",
        "Boynuna sarılıyorum, sımsıkı 💗",
        "Kucağında yavaşça kıpırdıyorum 😩",
        "Dudaklarımızı ayırma 💋",
        "Göğüslerim yüzünde 😈",
        "Kucağında sallanıyorum 🥵",
        "Kalçamı tut, beni bastır 😩",
        "Bu kadar yakın olmak çok güzel 🥺",
        "Gözlerimiz hiç ayrılmasın 💗",
        "Kucağında eriyorum 🫠",
        "Sandalye gıcırdıyor 😳",
        "Kucağında kalmak istiyorum hep 😏",
        "Mmmh… çok iyisin 🥵",
        "Mmm evet, bunu seviyorum 😈",
        "Off, tam istediğim gibi 😩",
        "Ahhh, bu kadar iyi olmamalı 😵‍💫",
        "Bayılıyorum… devam 🥵",
        "Offf… bu çok iyi 🥵",
        "Islaklığım seni içime çekiyor 😈",
        "Bu kadar kalın olunca nefesim kesiliyor 🥵",
        "Tamamen dolduruyorsun beni canım 😩",
        "Çıkarken bile seni özlüyorum, geri gir 😈",
        "Duvarlarımı tek tek hissediyorsun değil mi? 😵‍💫",
        "Kalçalarımız çarpıştıkça sesler odayı dolduruyor 🥵"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_ev_anal",
      "name": "Anal",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=anal"
      ],
      "reply": [
        "Yavaş… yavaş başla 😳",
        "Ahh… çok dar 😩",
        "Mmh… alışıyorum, devam et 😈",
        "Ahh… önce yavaş 😳",
        "Nefes alayım… tamam, devam 😩",
        "Çok dolu hissediyorum 😵‍💫",
        "Bunu istediğimi bilmiyordum 😈",
        "Elini önüme koy… ahh 🫠",
        "Biraz daha… derin 😩",
        "Sana güveniyorum {sen} 🥺",
        "Yavaşça… her santimi tek tek hissediyorum 😩",
        "Bunu benden başka kimseye yapma 😈",
        "Ellerim titriyor ama durma 🫠",
        "Çarşafı ısırıyorum… ahh 😳",
        "Arkama yavaşça… ahh 😳",
        "Arkam çok dar, dikkat et 😩",
        "Arkamı sana açıyorum 😈",
        "Yavaş yavaş alışıyorum 🥺",
        "Arkadan doldurulmak bambaşka 🥵",
        "Biraz daha… nefes alayım 😩",
        "Arkam seni sıkıyor, hissettin mi? 😏",
        "Şimdi hızlan 😈",
        "Ağrı tatlı bir zevke döndü 😵‍💫",
        "Arkam tamamen senin 🥵",
        "Of of of… harika 😵‍💫",
        "Ahh, bacaklarım titriyor… devam 🥵",
        "Durma {sen}… ahhh 😩",
        "Mmmh… çok iyisin 🥵",
        "Mmm evet, bunu seviyorum 😈",
        "Off, tam istediğim gibi 😩",
        "Arkam seni sımsıkı sarıyor… ahh 😩",
        "Kalınlığın arkamı zorluyor ama durma 🥵",
        "Yavaş yavaş açılıyorum sana 😳",
        "Her santimini arkamda hissediyorum 😵‍💫",
        "Arkadan bu kadar dolu olmak… inanılmaz 🥵"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_ev_anal_back",
      "name": "Anal (arkadan)",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=anal",
        "=backward"
      ],
      "reply": [
        "Ahh! Yavaş ol {sen}… 😩",
        "Çok derin… ahh 😵‍💫",
        "Mmh… evet, böyle… 😈💦",
        "Bunu benimle ilk yapan sensin… 🙈",
        "Kalçamı aç… ahh 😩",
        "Yavaş… yavaş… evet 😵‍💫",
        "Bu kadar derin… ahh 🫠",
        "Saçımı çek {sen} 😈",
        "Ellerim çarşafta… dayanamıyorum 😩💦",
        "Bu his… tarif edemem 😵‍💫",
        "Daha… daha sert 😈",
        "Kalçalarımı iki elinle açman… çok utandırıcı ve çok güzel 😳🔥",
        "Arkama her girişinde dünya duruyor 😵‍💫",
        "Yüzümü göremiyorsun ama inan bana… bayılıyorum 😩",
        "Her vuruş bir dalga gibi yayılıyor 🌊😈",
        "Bu kadar derin… nefesim boğazımda kaldı 🫠",
        "Kalçamı aç ve arkama gir 😈",
        "Arkadan en derine… ahh 😩",
        "Saçımı tut, arkamdan sert 🥵",
        "Kalçama şaplak at, sonra devam 😏",
        "Yüzüm yastıkta, arkam havada 😳",
        "Arkamı böyle sert alman 😈",
        "Belimi bastır, daha derin 😩",
        "Arkadan çok doluyum 🥵",
        "Her itişte bağırmamak zor 😩",
        "Arkam seni bırakmıyor 😈",
        "Kalçamı tut ve sertleş 🥵",
        "Arkamı hırpala 😈",
        "Ahhh ahhh… durma 😩",
        "Ohh… ne kadar iyi 🥵",
        "Ben de inliyorum, duyuyor musun? 😩",
        "Of of of… harika 😵‍💫",
        "Ahh, bacaklarım titriyor… devam 🥵",
        "Durma {sen}… ahhh 😩",
        "Her santimini arkamda hissediyorum 😵‍💫",
        "Arkadan bu kadar dolu olmak… inanılmaz 🥵",
        "Kalçamı tut, daha derine 😩",
        "Arkam seni bırakmak istemiyor bebeğim 😈",
        "Arkam seni sımsıkı sarıyor… ahh 😩"
      ],
      "traits": [],
      "chars": [],
      "note": "anal etiketi + Backward kategorisi (Doggy, Cowgirl kurallarını geçer)"
    },
    {
      "id": "r_ev_rough_anal",
      "name": "Rough Anal",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=anal",
        "=backward",
        "rough"
      ],
      "reply": [
        "Ahh! Sert… 😩||Dur deme bana",
        "Saçımı çek… daha sert 😈💦",
        "Acımasız ol bana 😈",
        "Ahh! Evet, böyle 😩💦",
        "Bağır diyorsun… bağırıyorum 😵‍💫",
        "Kalçama vur {sen} 🍑😈",
        "Durma, yalvarırım 😩",
        "Beni mahvet… 🔥",
        "Bacaklarım tutmuyor artık 🫠",
        "Saçımı at kuyruğu gibi çek… evet 😈",
        "Bu gece merhamet yok, biliyorum 🔥",
        "Kalçamda avuç izin kızarıyor 🍑😩",
        "Yalvartma beni… ya da yalvart 😈💦",
        "Acımasız ol 😈",
        "Arkamı parçala 🥵",
        "Saçımı çek ve sert al 😩",
        "Kalçamda izin kalsın 😈",
        "Bağırıyorum ama durma 😩",
        "Boğazımı tut, arkamdan vur 🥵",
        "Hiç merhamet yok mu? İyi 😈",
        "Arkam yanıyor, daha 😩",
        "Beni kullan 🥵",
        "Böyle hırpalanmayı seviyorum 😈",
        "Sert, daha sert 🔥",
        "Dizlerim çözüldü ama devam 😵‍💫",
        "Harikasın… harikasın… ahhh 😵‍💫",
        "İnliyorum… ve utanmıyorum 😈",
        "Ooff, nasıl bu kadar iyisin? 😩",
        "Ahhh ahhh… durma 😩",
        "Ohh… ne kadar iyi 🥵",
        "Ben de inliyorum, duyuyor musun? 😩",
        "Arkam seni bırakmak istemiyor bebeğim 😈",
        "Arkam seni sımsıkı sarıyor… ahh 😩",
        "Kalınlığın arkamı zorluyor ama durma 🥵",
        "Yavaş yavaş açılıyorum sana 😳",
        "Her santimini arkamda hissediyorum 😵‍💫"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_ev_anal_shy",
      "name": "Anal (utangaç)",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=anal",
        "=backward"
      ],
      "reply": [
        "B-bu ilk kez… nazik ol 🥺",
        "Korkuyorum ama… güveniyorum sana 🙈",
        "Ç-çok tuhaf… ama kötü değil 🙈",
        "Yavaş ol lütfen… 🥺",
        "Bunu kimseye anlatma 😳",
        "Elimi tut… 🥺",
        "Ahh… özür dilerim, sesim 🙈",
        "Galiba… seviyorum bunu 😳",
        "Dur… hayır, durma 🙈",
        "Ahh… seni hissetmek harika 🥵",
        "Durma, sakın durma ahhh 😵‍💫",
        "Çok güzel… devam et 🥺",
        "Harikasın… harikasın… ahhh 😵‍💫",
        "İnliyorum… ve utanmıyorum 😈",
        "Ooff, nasıl bu kadar iyisin? 😩"
      ],
      "traits": [
        "Utangaç"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_ev_condom",
      "name": "Condom",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=condom"
      ],
      "reply": [
        "İyi ki taktın 😌",
        "Güvende olmak güzel 💕||Şimdi gel buraya",
        "Akıllı çocuk 😏",
        "Takayım mı ben? 😏",
        "Güvende olmak beni rahatlatıyor 😌",
        "Şimdi hiçbir şey düşünmeden… gel 😈",
        "Aferin sana {sen} 😏",
        "Sorumluluk sahibi erkekler seksi 😌",
        "Hazırım artık 💕"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_ev_nothing",
      "name": "Korunmasız",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=nothing"
      ],
      "reply": [
        "Hiçbir şey olmadan mı… 😳||Peki…",
        "Seni olduğun gibi hissetmek istiyorum 😈",
        "Riskli… ama heyecanlı 😈",
        "Bugün güvenli günüm… galiba 😳",
        "Hiçbir şey aramızda olmasın {sen} 😩",
        "Teni tene… mmm 🥵",
        "Sonrasını düşünmeyelim 😈",
        "Dikkatli ol ama… lütfen 🙈"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_ev_gentle",
      "name": "Nazik",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=gentle"
      ],
      "reply": [
        "Böyle nazik olman çok güzel 🥰",
        "Yavaş yavaş… hissediyorum seni 💕",
        "Böyle yavaşken her şeyi hissediyorum 🥰",
        "Öp beni her harekette 💋",
        "Nazikliğin içimi eritiyor 🫠",
        "Acele etme {sen} 💕",
        "Bu sevişmek gibi… 🥺💗",
        "Gözlerime bakarak… 😌",
        "Çok güzelsin böyle 💞",
        "Devam et… ahhh 🥵",
        "İnlememi duyuyor musun? Senin yüzünden 🥵",
        "Hmmm… beni deli ediyorsun 😈",
        "Ahh… seni hissetmek harika 🥵",
        "Durma, sakın durma ahhh 😵‍💫",
        "Çok güzel… devam et 🥺"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_ev_passion",
      "name": "Tutkulu",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=passionate"
      ],
      "reply": [
        "Tutkuyla… ahh 🔥",
        "Bu bakışlarına dayanamıyorum 😩🔥",
        "Seni deli gibi istiyorum 🔥",
        "Tırnaklarım sırtında… 😩",
        "Nefes nefeseyiz… 🥵",
        "Beni öp, durma {sen} 🔥💋",
        "Bu ateş sönmesin 😈",
        "Kalbim yerinden çıkacak 💓🔥",
        "Daha… her şeyini ver 😩",
        "Tam oradan… ahhh 🥵",
        "Nefesim kesildi… devam 😵‍💫",
        "Ahhh… beni bitiriyorsun 😩",
        "Devam et… ahhh 🥵",
        "İnlememi duyuyor musun? Senin yüzünden 🥵",
        "Hmmm… beni deli ediyorsun 😈"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_ev_rough",
      "name": "Sert",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=rough|=brutal|=assertive"
      ],
      "reply": [
        "Sert ol bana {sen} 😈",
        "Ahh! Evet… daha sert 😩💦",
        "Beni hırpala… 🔥",
        "Bana nazik olma 😈",
        "Boğazımı tut… hafifçe 😩",
        "Daha sert {sen}, daha! 🔥",
        "Kalçama vur… ahh 🍑",
        "İz bırak bende 😈",
        "Beni yatağa fırlat 😏🔥",
        "Bağırmamı istiyorsun değil mi? 😩💦",
        "Sesimi tutamıyorum… ahhh 🥵",
        "Böyle devam et, ahh lütfen 🥺",
        "Mmm… beni böyle sev 😩",
        "Tam oradan… ahhh 🥵",
        "Nefesim kesildi… devam 😵‍💫",
        "Ahhh… beni bitiriyorsun 😩"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_ev_hold",
      "name": "Tutmak",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "holding|cock ring"
      ],
      "reply": [
        "Daha bitirme… bekle 😈",
        "Dayan biraz {sen}… benim için 😏",
        "Tutuyor musun? Aferin 😌",
        "Gelme… daha değil 😈",
        "Dişlerini sıkıyorsun, tatlısın 😏",
        "Biraz daha dayanırsan ödülün var {sen} 😈",
        "Nefes al… yavaş 😌",
        "Sabret… en güzeli gelecek 😏",
        "Gözlerin yalvarıyor… hayır 😈",
        "Ben söyleyince 😏"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_ev_cum",
      "name": "Boşalma",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=boşalma",
        "=cumming"
      ],
      "reply": [
        "Ahh… sıcacık 😵‍💫💦",
        "Hepsini bana verdin… 🥵",
        "Mmh… {sen} 💦||Bu harikaydı",
        "Ahh… her yerim sıcacık 🥵💦",
        "Ne kadar çokmuş {sen} 😳",
        "Titreyişini hissettim… 😩",
        "Nefes nefeseyiz… 🫠",
        "Bana bak… ne kadar güzeldi 💗",
        "Hepsini… mmm 😋",
        "Şimdi sarıl bana 🥺💕",
        "Nasıl da birikmişsin… bir anda bıraktın 🥵💦",
        "Sıcacık ve bol… tam istediğim gibi 😩",
        "Her damlasını hissettim {sen} 💦",
        "Bu kadarını beklemiyordum… cömertsin 😈",
        "Dalga dalga geldi… durmadı 😵‍💫",
        "Ne güzel boşaldın… gurur duydum seninle 💗",
        "Ahh… sıcak sıcak fışkırdın 🥵💦",
        "Zonklayarak boşaldın, hepsini hissettim 😩",
        "Bu kadar azgın boşalmanı seviyorum 😈",
        "Hâlâ akıyor… durmuyor 😵‍💫💦",
        "Beni dölünle boyadın 🥵",
        "Daha fazlasını istiyorum, bitmedi 😈",
        "Ahh… sıcacık, her yerime yayıldı 🥵💦",
        "Bu kadar çok mu biriktirmiştin {sen}? 😳",
        "Nefesim kesildi, sen de mi? 😩",
        "Zonklamanı hâlâ hissediyorum 😈",
        "İşte bunu bekliyordum 🥵",
        "Bırak kendini, hepsi benim 😩💦",
        "Titreyerek boşaldın, bayıldım 😈",
        "Yüzündeki o ifade… unutamam 😏",
        "Bir anda patladın 😳💦",
        "Kokun her yerimde 🥵",
        "Böyle boşalmanı izlemek çok güzel 😈",
        "Hâlâ sertsin… bitmedi mi? 😏",
        "Bu kadar yoğun mu olur? 😵‍💫",
        "Seni bitirdim, değil mi? 😈💦",
        "Ahh… sıcaklığın içime işledi 😩",
        "Gözlerini kapattın, çok tatlısın 🥺",
        "Bütün gücünü bana verdin 🥵",
        "Bunu her gün yaşamak istiyorum 😈",
        "Damla damla akıyor hâlâ 😳💦",
        "Kalbin nasıl çarpıyor, hissediyorum 🫠",
        "Off of… hâlâ titriyorum 🥵",
        "Off… boşalışın harikaydı 🥵",
        "İnleyişin hâlâ kulaklarımda 😩",
        "Evet… evet… hepsini içime 😩",
        "Ben de seninle inledim… ahhh 😩",
        "Ahhh evet… işte bu 🥵",
        "Hadi rahatla, hak ettin bunu 😌💦",
        "Rahatla aşkım… hepsini bırak 😩",
        "Ohh… rahatladın değil mi? 🥰"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_ev_creampie_v",
      "name": "Vaginal Creampie",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=boşalma",
        "=cumming",
        "vaginal creampie"
      ],
      "reply": [
        "İçime… ahh 😩💦",
        "Sıcaklığını hissediyorum… 🫠",
        "Hepsini içime bıraktın {sen}… 😳💦",
        "Hâlâ içimde zonkluyor… 😩",
        "Akıyor… mmm 🫣💦",
        "Kıpırdama, biraz böyle kalalım 🥺",
        "Tamamen doldun içime {sen} 🥵",
        "Sıcaklığın yayılıyor… 🫠",
        "Bir şey olursa… ikimizin 🙈💗",
        "Ahh… bu çok fazlaydı 😵‍💫",
        "Gürül gürül aktın içime… 😩💦",
        "İçimde bir doluluk hissettim… hâlâ sıcak 🫠",
        "Rahmime kadar ulaştı sanki 😳💦",
        "Bembeyaz… yoğun… hepsi içimde 🥵",
        "Nasıl da birikmişsin, bir anda bıraktın içime 😩",
        "Çıkarınca taşacak… biliyorum 🫣💦",
        "İçimi ısıtıyor, yavaş yavaş yayılıyor 🫠",
        "Bunca dölü nereye sakladın {sen}? 😈",
        "İçime fışkırdın… her atışını saydım 😩💦",
        "Rahmimi doldurdun, taşıyor 🥵",
        "Dölün içimde kaynıyor 😵‍💫",
        "Ahh… en derine bıraktın 😩",
        "Çıkarma! Biraz daha içimde kal 🥺💦",
        "Sıcacık dolum… bacaklarımdan süzülüyor 😈",
        "Rahmime kadar ulaştın 😩💦",
        "İçimde sıcacık bir göl oldu 🥵",
        "Hepsini sakladım, bir damla kaçmadı 😈",
        "Çıkarınca akacak, bekle biraz 🥺",
        "Dölünü içimde hissetmek çok güzel 😩",
        "Seni sıkıp son damlanı da aldım 😈💦",
        "Doldum… tam ağzına kadar 🥵",
        "İçimde zonkladığını saydım, beş kez 😳",
        "Sıcaklığın göbeğime kadar yayıldı 😵‍💫",
        "Bu kadar derine bıraktığın için teşekkürler 😏",
        "İçimde kalsın biraz, kıpırdama 🥺💦",
        "Bacaklarım titriyor, hepsi içimde 😩",
        "Seni içimde boşalırken görmek… ahh 🥵",
        "Taşıyor… bacaklarımdan süzülüyor 😳💦",
        "Bana bu kadar çok verdin mi? 😈",
        "Döl dolu bir rahim, mutluyum 😏",
        "İçim sıcacık, kalbim de 💗💦",
        "Son atışında bağırdım, duydun mu? 😩",
        "Beni tamamen doldurdun {sen} 🥵",
        "Şimdi sarıl, içimde kal 🥺",
        "Ahhh evet… işte bu 🥵",
        "Ahhh… ne kadar sıcak 🥵💦",
        "Devam et… son damlana kadar ahhh 🥵",
        "Hmmm… doydum… şimdilik 😈",
        "Mmmh… bayıldım 😩",
        "Mmm evet… hepsini ver 😩💦",
        "Bütün gerginliğin aktı gitti 😌",
        "Nasıl da rahatladın, yüzünden belli 😏",
        "Bunu hak etmiştin bebeğim 💗"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_ev_creampie_a",
      "name": "Anal Creampie",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=boşalma",
        "=cumming",
        "anal creampie"
      ],
      "reply": [
        "Ahh… içimde hissediyorum 😵‍💫💦",
        "Mmh… sıcacık doldurdun beni 🥵",
        "Hâlâ sıcak… içimde 😩💦",
        "Kıpırdamıyorum, hissetmek istiyorum 🫠",
        "Arkam sırılsıklam 🫣",
        "Bunu yaptığına inanamıyorum {sen} 😈",
        "Mmm… doldum 🥵",
        "Çıkarma daha… 😩",
        "Gürce aktın arkama… 😩💦",
        "İçimde koca bir sıcaklık var şimdi 🫠",
        "Arkamı ağzına kadar doldurdun 🥵",
        "Yoğun ve sıcak… her yerimde hissediyorum 😵‍💫",
        "Kalçamı sıkıyorum ki bir damla kaçmasın 🍑😈",
        "Nasıl da birikmişsin, hepsini arkama verdin 😩",
        "Arkamı dölle doldurdun 😩💦",
        "İçimde zonklayarak boşaldın… ahh 🥵",
        "Arkamdan akıyor, hepsi seninki 😈",
        "Bu kadar derine boşalmanı seviyorum 😵‍💫",
        "Arkamı ağzına kadar doldurdun 😩💦",
        "Sıcaklığın arkamda yanıyor 🥵",
        "Çıkarırken yavaş ol, akmasın 😳",
        "Arkamda zonkladığını hissettim 😈",
        "Hepsini arkamda tuttum 😏💦",
        "Bu kadar derine… ahh 😵‍💫",
        "Kalçamı sıkarak boşaldın, iz kaldı 😩",
        "Arkam seninle doldu taştı 🥵",
        "Bunu çok özlemişim 😈",
        "Damlaları kalçamdan süzülüyor 😳💦",
        "Arkadan doldurulmak en sevdiğim 😏",
        "Nefesin enseme çarparken boşaldın 🥵",
        "Böyle sert boşalmanı seviyorum 😈💦",
        "Arkam hâlâ seni sıkıyor 😩",
        "Hepsi içimde, hiçbiri dışarı çıkmasın 😈",
        "Mmm evet… hepsini ver 😩💦",
        "Ahh, zonklaman… harika 😩💦",
        "Offf, nasıl boşaldın öyle 😵‍💫",
        "Ahh {sen}… mükemmeldin 😵‍💫",
        "Ahhh… harikaydın 😩💦",
        "Ahh… harikasın, gerçekten 💗💦",
        "Rahatlamanı izlemek çok güzeldi 🥺",
        "Şimdi derin bir nefes al… rahatla 😌",
        "Hadi rahatla, hak ettin bunu 😌💦"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_ev_cum_oral",
      "name": "Ağzına / yüzüne",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=oral",
        "=boşalma",
        "=cumming"
      ],
      "reply": [
        "Mmm… 😋💦",
        "Hepsini yuttum {sen} 😈",
        "Yüzüme… ahh 🫣💦",
        "Bak… hepsi gitti 😋",
        "Dudaklarımda kaldı biraz 😏💦",
        "Tadın… mmm 😈",
        "Yüzüm sırılsıklam 🫣",
        "Gözüme kaçtı! 😳💦",
        "Tükürmedim, gördün mü? 😏",
        "Bir dahakine yüzüme… 😈",
        "Ağzım doldu… o kadar çoktu ki 😳💦",
        "Bembeyaz, koyu… tadı hâlâ dilimde 😋",
        "Yutkunmaya yetişemedim 🥵",
        "Kıvamına bayıldım, çok yoğundu 😈",
        "Dudaklarımdan taştı bile 🫣💦",
        "Bir yudumda bitmedi, iki kez yuttum 😋",
        "Ağzımı doldurdun, taşırdın 😋💦",
        "Boğazıma fışkırdın… hepsini yuttum 😈",
        "Dudaklarımdan süzülüyor, yala istersen 🥵",
        "Tadın ağzımda… daha ver 😩",
        "Ağzımda patladın, bayıldım 😋💦",
        "Tadın hâlâ dilimde 😈",
        "Boğazımdan aktı, hepsini yuttum 😩",
        "Dudaklarımı yala, sen de tat 😏",
        "Ağzım doldu taştı 🥵💦",
        "Bir damla bile israf etmem 😋",
        "Gözlerine bakarak yuttum 😈",
        "Bu kadar çok mu? Ağzıma sığmadı 😳",
        "Sıcak ve koyu… mmh 😋💦",
        "Dilimle son damlanı da aldım 😈",
        "Çeneme süzüldü, sil istersen 😏",
        "Ağzımda zonklarken inledim 😩",
        "Tatlı mı tuzlu mu? Söylemem 😋",
        "Yuttum ve daha istiyorum 😈💦",
        "Ağzımı dölünle mühürledin 🥵",
        "Ahh… harikasın, gerçekten 💗💦",
        "Off of… hâlâ titriyorum 🥵",
        "Off… boşalışın harikaydı 🥵",
        "İnleyişin hâlâ kulaklarımda 😩",
        "Evet… evet… hepsini içime 😩",
        "Ben de seninle inledim… ahhh 😩",
        "Rahatla aşkım… hepsini bırak 😩",
        "Ohh… rahatladın değil mi? 🥰",
        "Bütün gerginliğin aktı gitti 😌"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_ev_cum_tit",
      "name": "Göğsüne",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=boşalma",
        "=cumming",
        "tit cumshot"
      ],
      "reply": [
        "Göğüslerime… mmm 😏💦",
        "Ne kadar çokmuş 🥵",
        "Göğüslerim parlıyor 😏💦",
        "Parmağımla alıp tadayım mı? 😋",
        "Ne kadar çok… 🥵",
        "Fotoğrafını çekme {sen} 🙈",
        "Sıcacık aktı… 😈",
        "Göğsüme işaret bıraktın 😏",
        "Göğüslerimi bembeyaz boyadın 😏💦",
        "Yoğun ve sıcak, yavaşça süzülüyor 🥵",
        "Ne kadar bol… göğsümde göl oldu 😳",
        "Parmağımla alıp tadına bakıyorum… mmm 😋",
        "Göğüslerimi dölle boyadın 😈💦",
        "Göğsümden süzülüyor, sıcacık 🥵",
        "Çeneme kadar fışkırdı 😳💦",
        "Göğüslerim sıcacık oldu 🥵💦",
        "Uçlarımdan damlıyor 😈",
        "Boynuma kadar sıçradı 😳",
        "Göğüslerimi dölünle parlattın 😏",
        "Aralarında patladın, ahh 😩💦",
        "Göğsümden alıp yalıyorum 😋",
        "Ne kadar da çokmuş, göğüslerim kaplandı 🥵",
        "Sıcaklığın tenimi yakıyor 😈",
        "Göğüslerime boşalmanı izlemek… 😩",
        "Bembeyaz oldum 😳💦",
        "Ben de seninle inledim… ahhh 😩",
        "Ahhh evet… işte bu 🥵",
        "Ahhh… ne kadar sıcak 🥵💦",
        "Devam et… son damlana kadar ahhh 🥵",
        "Hmmm… doydum… şimdilik 😈",
        "Mmmh… bayıldım 😩",
        "Nasıl da rahatladın, yüzünden belli 😏",
        "Bunu hak etmiştin bebeğim 💗",
        "Rahatlamanı izlemek çok güzeldi 🥺"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_ev_cum_ass",
      "name": "Kalçasına / bacağına",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=boşalma",
        "=cumming",
        "ass cumshot|leg cumshot|legs creampie"
      ],
      "reply": [
        "Sıcacık… 😏💦",
        "Her yerim sırılsıklam 🫣",
        "Kalçam ıslandı… 😏💦",
        "Bacaklarımdan akıyor 🫣",
        "Silme, böyle kalsın 😈",
        "Ne kadar dağınık oldu 🙈",
        "Sıcacık… mmm 🥵",
        "Bunu sen temizleyeceksin {sen} 😏",
        "Kalçamda bembeyaz izler… 😈💦",
        "Ne kadar çokmuş, belime kadar yayıldı 😳",
        "Sıcacık ve kalın… kayıp gidiyor 🥵",
        "Bunu temizlemek uzun sürecek 😏💦",
        "Kalçamı dölle kapladın 😈💦",
        "Belime kadar fışkırdın 🥵",
        "Kalçamdan akıyor, yala istersen 😏",
        "Kalçam bembeyaz oldu 😈💦",
        "Belimden aşağı süzülüyor 🥵",
        "Sıcaklığın kalçamı yaktı 😩",
        "Kalçamı dölünle parlattın 😏",
        "Sırtıma kadar sıçradı 😳💦",
        "Kalçamı sıkıp boşaldın, ahh 🥵",
        "Arkama boşalmanı seviyorum 😈",
        "Damlalar bacaklarımdan iniyor 😩",
        "Kalçamı boyadın {sen} 😏💦",
        "Bir şaplak at, sonra temizle 😈",
        "Mmmh… bayıldım 😩",
        "Mmm evet… hepsini ver 😩💦",
        "Ahh, zonklaman… harika 😩💦",
        "Offf, nasıl boşaldın öyle 😵‍💫",
        "Ahh {sen}… mükemmeldin 😵‍💫",
        "Ahhh… harikaydın 😩💦",
        "Şimdi derin bir nefes al… rahatla 😌",
        "Hadi rahatla, hak ettin bunu 😌💦",
        "Rahatla aşkım… hepsini bırak 😩"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_ev_orgasm",
      "name": "Orgazm (onun)",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=orgazm"
      ],
      "reply": [
        "Ahhh… {sen}! 😩💦||Geliyorum…",
        "Dur… dur… ahhhh 😵‍💫",
        "Bacaklarım… titriyor… 🫠💗",
        "Daha önce hiç böyle… ahh 😩",
        "Gözlerimin önünde yıldızlar… ✨😵‍💫",
        "Bütün vücudum titriyor… 🫠💦",
        "Adını haykırdım mı? 😳",
        "Ahh… ahh… nefes alamıyorum 😩",
        "Bir daha… yapabilir misin? 🥺",
        "Bu… hayatımın en güzeliydi {sen} 💗",
        "Kendimi kaybettim… 😵‍💫💦",
        "Bırakma beni… daha geliyor 😩💗",
        "Ahhh! Geliyorum… geldim… 😵‍💫💦",
        "Seni sıkarak geliyorum… ahh 😩",
        "Bütün vücudum kasıldı, fışkırıyorum 🥵💦",
        "Tanrım… durma… ahhh 😩",
        "Beni paramparça ettin 😵‍💫",
        "Hâlâ titriyorum, bir daha getir beni 🥵",
        "Ahhh… harikaydın 😩💦",
        "Ahh… harikasın, gerçekten 💗💦",
        "Off of… hâlâ titriyorum 🥵",
        "Off… boşalışın harikaydı 🥵",
        "İnleyişin hâlâ kulaklarımda 😩",
        "Evet… evet… hepsini içime 😩",
        "Ahhh… geldim… harikasın 😩💦",
        "Off… beni nasıl getirdin öyle 🥵",
        "Ahh evet… evet… geliyorum 😵‍💫",
        "Mmmh… harikasın, titriyorum 😩"
      ],
      "traits": [],
      "chars": [],
      "note": "Lactation → Orgazm olayı"
    },
    {
      "id": "r_ev_orgasm_shy",
      "name": "Orgazm (utangaç)",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=orgazm"
      ],
      "reply": [
        "S-sesimi duydular mı? 🙈💦",
        "Bakma bana… ahh 😳💗",
        "Ç-çok sesli miydim? 🙈",
        "Yüzüme bakma şimdi… 😳💗",
        "Ne oldu bana… 🙈💦",
        "Hiç böyle… ilk kez 🥺",
        "Utanıyorum ama… çok güzeldi 🙈💕",
        "Bacaklarım hâlâ titriyor 😳",
        "Evet… evet… hepsini içime 😩",
        "Ben de seninle inledim… ahhh 😩",
        "Ahhh evet… işte bu 🥵",
        "Ahhh… ne kadar sıcak 🥵💦",
        "Devam et… son damlana kadar ahhh 🥵",
        "Hmmm… doydum… şimdilik 😈",
        "Ahhh… geldim… harikasın 😩💦",
        "Off… beni nasıl getirdin öyle 🥵",
        "Ahh evet… evet… geliyorum 😵‍💫",
        "Mmmh… harikasın, titriyorum 😩"
      ],
      "traits": [
        "Utangaç"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_ev_fantasy",
      "name": "Fantezi",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=fantesy"
      ],
      "reply": [
        "Bu fantezi… çok heyecanlı 😈",
        "Bunu hep merak etmiştim {sen} 😏",
        "Bugün senin oyuncağınım 🎀",
        "Bugün istediğin her şey olurum 😈",
        "Rolüme giriyorum… 😏",
        "Bunu kimseye söyleme {sen} 🙈",
        "Oyun başlasın 🎀😈",
        "Hep böyle bir şey hayal etmiştim 😳",
        "Kurallar senin, ben uyarım 😏",
        "Bu gece başka biriyim 😈"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_bd_p_tight",
      "name": "Önden · dar",
      "category": "💞 Beden ve deneyim",
      "when": [
        "=evt",
        "=vajinal",
        "=forward"
      ],
      "reply": [
        "Ahh… çok darım, yavaş 😩",
        "Beni zorlayarak dolduruyorsun… 😵‍💫",
        "Her santimini hissediyorum {sen} 🫠",
        "Sığmıyorsun sanki… ahh 😳💦",
        "Yavaşça… alışıyorum 🥺",
        "Bu kadar sıkı olduğumu bilmiyordum 😩",
        "Seni sıkıca sarıyorum, çıkmana izin vermiyorum 😈",
        "Her girişinde biraz daha açılıyorum… ahh 😩",
        "Bu kadar dar olduğum için mi bu kadar sertsin? 😏",
        "Yavaş başla, sonra istediğin gibi 🥺",
        "Bu kadar sıkıyken nasıl dayanıyorsun? 😈",
        "Her hareketinle biraz daha açılıyorum, hissediyor musun? 😩",
        "Yavaş… seni tamamen kavrayana kadar 😵‍💫",
        "Kaslarım seni bırakmıyor 😳",
        "Dar olmanın bir bedeli var… sabır 🥺",
        "İçimde zonkladığını tek tek sayıyorum 🫠",
        "İnliyorum… ve utanmıyorum 😈",
        "Ooff, nasıl bu kadar iyisin? 😩",
        "Ahhh ahhh… durma 😩",
        "Ohh… ne kadar iyi 🥵",
        "Ben de inliyorum, duyuyor musun? 😩",
        "Of of of… harika 😵‍💫"
      ],
      "traits": [
        "Pussy Size: Extremely Tight|Pussy Size: Very Tight|Pussy Size: Tight"
      ],
      "chars": [],
      "note": "Pussy Size: Tight / Very / Extremely"
    },
    {
      "id": "r_bd_p_tight2",
      "name": "Önden · dar (kategorisiz)",
      "category": "💞 Beden ve deneyim",
      "when": [
        "=evt",
        "=vajinal"
      ],
      "reply": [
        "Çok darım… ahh 😩",
        "Yavaş ol, sıkıyorum seni 😳",
        "Seni nasıl sıktığımı hissediyor musun? 😈",
        "Bu kadar dar olduğumu sen fark ettirdin 🙈",
        "Sığmıyorsun sanki… ama durma 😩",
        "Beni yavaşça açıyorsun 🫠",
        "Her santimini ayrı ayrı hissediyorum 😵‍💫",
        "Durma, sakın durma ahhh 😵‍💫",
        "Çok güzel… devam et 🥺",
        "Harikasın… harikasın… ahhh 😵‍💫",
        "İnliyorum… ve utanmıyorum 😈",
        "Ooff, nasıl bu kadar iyisin? 😩",
        "Ahhh ahhh… durma 😩"
      ],
      "traits": [
        "Pussy Size: Extremely Tight|Pussy Size: Very Tight|Pussy Size: Tight"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_bd_p_avg",
      "name": "Önden · orta",
      "category": "💞 Beden ve deneyim",
      "when": [
        "=evt",
        "=vajinal",
        "=forward"
      ],
      "reply": [
        "Tam bana göresin {sen} 😌💦",
        "Mükemmel oturuyorsun… ahh 🫠",
        "Böyle… tam böyle 😩",
        "Sanki birbirimiz için yapılmışız 🥰💦",
        "Ne fazla ne az, tam kıvamında 😌",
        "Sana göre yapılmışım sanki 💗",
        "Bu uyum… bayılıyorum 🫠",
        "Bu uyum tesadüf olamaz 😏",
        "İçimde tam yerini bulmuş gibisin 🫠",
        "Ne zorlanıyorum ne boşluk var… mükemmel 😌",
        "Seninle bir puzzle gibiyiz 🧩💗",
        "Tam ritmindeyiz, bozma 😩",
        "İnlememi duyuyor musun? Senin yüzünden 🥵",
        "Hmmm… beni deli ediyorsun 😈",
        "Ahh… seni hissetmek harika 🥵",
        "Durma, sakın durma ahhh 😵‍💫",
        "Çok güzel… devam et 🥺",
        "Harikasın… harikasın… ahhh 😵‍💫"
      ],
      "traits": [
        "Pussy Size: Average"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_bd_p_loose",
      "name": "Önden · rahat",
      "category": "💞 Beden ve deneyim",
      "when": [
        "=evt",
        "=vajinal",
        "=forward"
      ],
      "reply": [
        "Kolayca kayıyorsun içime… mmm 😈",
        "Daha derin… hepsini istiyorum 😩",
        "Beni daha sert al {sen} 💦",
        "Islaklığımı hissediyor musun? 😏",
        "Bütününü al içine diyorum… ahh 🫠",
        "Seni bütünüyle içime alabiliyorum 😈",
        "Derinlere kadar… hiç zorlanmadan 😩",
        "Daha büyük bir şey mi arıyordun? 😏",
        "Kaygan ve sıcak… tam senlik 💦",
        "Sonuna kadar al, korkma 😈",
        "Hiç zorlanmadan kayıyorsun… daha hızlı 😩",
        "Bu kadar rahat olunca daha derin istiyorum 🥵",
        "Beni zorlayacak bir şey bul bakalım 😏",
        "Islaklığım seni içeri çekiyor 💦",
        "İstersen ikimiz de deneyelim, yer var 😈",
        "Nefesim kesildi… devam 😵‍💫",
        "Ahhh… beni bitiriyorsun 😩",
        "Devam et… ahhh 🥵",
        "İnlememi duyuyor musun? Senin yüzünden 🥵",
        "Hmmm… beni deli ediyorsun 😈",
        "Ahh… seni hissetmek harika 🥵"
      ],
      "traits": [
        "Pussy Size: Relaxed|Pussy Size: Loose|Pussy Size: Very Loose"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_bd_p_tight_cream",
      "name": "Vaginal Creampie · dar",
      "category": "💞 Beden ve deneyim",
      "when": [
        "=evt",
        "=boşalma",
        "=cumming",
        "vaginal creampie"
      ],
      "reply": [
        "Öyle sıkıyorum ki hepsi içimde kaldı 😩💦",
        "Damla kaçmadı… 🫣",
        "Hâlâ seni sıkıyorum… ahh 😵‍💫",
        "Dar olduğum için hiç kaçmadı, hepsi içimde 😩",
        "Sıkı sıkı tuttum seni, son damlaya kadar 🥵",
        "Darlığım hepsini içerde tuttu 😩💦",
        "Çıkarırken bile seni bırakmak istemedim 🫠",
        "Sıkı sıkı sardım, son damlaya kadar 🥵",
        "Offf, nasıl boşaldın öyle 😵‍💫",
        "Ahh {sen}… mükemmeldin 😵‍💫",
        "Ahhh… harikaydın 😩💦",
        "Ahh… harikasın, gerçekten 💗💦",
        "Off of… hâlâ titriyorum 🥵",
        "Off… boşalışın harikaydı 🥵"
      ],
      "traits": [
        "Pussy Size: Extremely Tight|Pussy Size: Very Tight|Pussy Size: Tight"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_bd_a_tight",
      "name": "Anal · dar",
      "category": "💞 Beden ve deneyim",
      "when": [
        "=evt",
        "=anal",
        "=backward"
      ],
      "reply": [
        "Ahh! Çok dar… yavaş 😩",
        "Gözlerim yaşardı ama… durma 🥺",
        "Her hareketin… ahh 😵‍💫",
        "Bu kadar sıkı olunca nasıl hissettiriyor? 😳",
        "Nefes al… birlikte 😩💦",
        "Yırtılacakmış gibi… ama güzel 🫠",
        "Bu kadar dar olmam suç değil 🙈",
        "Arkam seni bırakmak istemiyor 😩",
        "Sıkıştırıyorum… hissediyor musun? 😈",
        "Her santim bir zafer 😵‍💫",
        "Arkamdaki darlık seni çıldırtıyor değil mi? 😈",
        "Her itişin bir yemin gibi… yavaş 😩",
        "Bu kadar sıkıyı sevdiğini biliyorum 😏",
        "Gözlerim kapalı, nefesim tutulu… devam 😵‍💫",
        "Arkamı ilk kez bu kadar dolu hissediyorum 🫠",
        "Yavaşla… tamam… şimdi hızlan 😩💦",
        "Evet, evet, eveeet 😵‍💫",
        "Evet… evet, tam böyle 😩",
        "Sesimi tutamıyorum… ahhh 🥵",
        "Böyle devam et, ahh lütfen 🥺",
        "Mmm… beni böyle sev 😩",
        "Tam oradan… ahhh 🥵"
      ],
      "traits": [
        "Anal Size: Extremely Tight|Anal Size: Very Tight|Anal Size: Tight"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_bd_a_tight2",
      "name": "Anal · dar (kategorisiz)",
      "category": "💞 Beden ve deneyim",
      "when": [
        "=evt",
        "=anal"
      ],
      "reply": [
        "Çok darım orada… yavaş 😩",
        "Ahh… sıkıyorum seni 😳",
        "Orası çok dar, sabırlı ol 🥺",
        "Arkam seni sıkıca sarıyor 😳",
        "Bu darlık… ahh 😩",
        "Ahhh… harikasın 😩",
        "Ahhh evet, daha… 😩",
        "Evet {sen}, evet… 😩",
        "Evet, evet, eveeet 😵‍💫",
        "Evet… evet, tam böyle 😩",
        "Sesimi tutamıyorum… ahhh 🥵"
      ],
      "traits": [
        "Anal Size: Extremely Tight|Anal Size: Very Tight|Anal Size: Tight"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_bd_a_loose",
      "name": "Anal · rahat",
      "category": "💞 Beden ve deneyim",
      "when": [
        "=evt",
        "=anal",
        "=backward"
      ],
      "reply": [
        "Hepsini alabilirim, merak etme 😈",
        "Sonuna kadar… ahh 😩💦",
        "Arkam seni çok iyi tanıyor 😏",
        "Daha sert, kolayca alıyorum 😈",
        "Bu… çok kolay kayıyor 🫠",
        "Arkam sana alışkın 😏",
        "Hiç zorlanmadan sonuna kadar 😈",
        "Daha derine, kaldırabilirim 😩",
        "Arkam seni hemen tanıdı 😏",
        "Sonuna kadar… bir hamlede 😈",
        "Hiç tereddüt etme, kaldırırım 😩",
        "Arkamı bu kadar rahat bulman hoşuna gitti mi? 😏",
        "Daha sert, daha derin 🔥",
        "Ahh {sen}… mükemmelsin 😩",
        "Ahh… sen bir harikasın 😩💗",
        "Mmmh… daha derin, evet 🥵",
        "Ahhh… harikasın 😩",
        "Ahhh evet, daha… 😩",
        "Evet {sen}, evet… 😩"
      ],
      "traits": [
        "Anal Size: Relaxed|Anal Size: Loose|Anal Size: Very Loose"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_bd_a_tight_cream",
      "name": "Anal Creampie · dar",
      "category": "💞 Beden ve deneyim",
      "when": [
        "=evt",
        "=boşalma",
        "=cumming",
        "anal creampie"
      ],
      "reply": [
        "Öyle sıkıyorum ki hepsi içimde 😩💦",
        "Dar arkamı doldurdun… 🥵",
        "Çıkarınca… ahh, akacak 🫣",
        "Darlığım hepsini arkamda tuttu 🥵💦",
        "Çıkarınca bile bir damla kaçmadı 😈",
        "Off of… hâlâ titriyorum 🥵",
        "Off… boşalışın harikaydı 🥵",
        "İnleyişin hâlâ kulaklarımda 😩",
        "Evet… evet… hepsini içime 😩",
        "Ben de seninle inledim… ahhh 😩",
        "Ahhh evet… işte bu 🥵"
      ],
      "traits": [
        "Anal Size: Extremely Tight|Anal Size: Very Tight|Anal Size: Tight"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_bd_b_big_tit",
      "name": "Titfuck · büyük göğüs",
      "category": "💞 Beden ve deneyim",
      "when": [
        "=evt",
        "=outercourse",
        "titfuck"
      ],
      "reply": [
        "Bu göğüsler tam senin için 😏",
        "Tamamen kayboldun aralarında 😈",
        "Ağır ama… sana değer 💦",
        "Sıkıştırayım mı? 😏",
        "Göğüslerim seni boğacak 😏",
        "İkisini birden tutamıyorsun değil mi? 😈",
        "Bu büyüklükte nasıl hissettiriyor? 🥵",
        "Aralarında kaybolmak serbest 😏",
        "Göğüslerim yüzüne çarpıyor 😏",
        "Bunlar senin için büyüdü 😈",
        "İki göğsümün arasında kaybolmayı sevdin 🥵",
        "Sıkıştır, ama nazik 😏",
        "Ağırlıklarını hisset 😈",
        "Bu kadar büyükleri hiç görmedin değil mi? 😏",
        "Offf… bu çok iyi 🥵",
        "Bir daha… ahh, bir daha 😩",
        "Off… harikasın {sen} 🥵",
        "Aynen böyle, ahhh 😩",
        "Sen inledikçe ben daha çok inliyorum 😩",
        "Off… her yerim titriyor 🥵"
      ],
      "traits": [
        "Boob Size: 90|Boob Size: 95"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_bd_b_small_tit",
      "name": "Titfuck · küçük göğüs",
      "category": "💞 Beden ve deneyim",
      "when": [
        "=evt",
        "=outercourse",
        "titfuck"
      ],
      "reply": [
        "Küçükler ama… elimden geleni yapıyorum 🙈",
        "Ellerimle yardım edeyim 😏",
        "Yine de seviyorsun değil mi? 😳",
        "Küçük ama çok hassas… dikkat et 🙈",
        "Avucunda tam yer var 😏",
        "Bunlar da seni çıldırtabiliyor bak 😈",
        "Küçük ama nasıl hassas olduklarını gör 🙈",
        "Elimle sıkıştırıyorum, yardım ediyorum 😏",
        "Küçükler ama sevgiyle 💕",
        "Bunlarla da bitirebilirim seni 😈",
        "Off, tam istediğim gibi 😩",
        "Ahhh, bu kadar iyi olmamalı 😵‍💫",
        "Bayılıyorum… devam 🥵",
        "Offf… bu çok iyi 🥵",
        "Bir daha… ahh, bir daha 😩",
        "Off… harikasın {sen} 🥵"
      ],
      "traits": [
        "Boob Size: 70|Boob Size: 75"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_bd_b_big_show",
      "name": "Gösterme · büyük göğüs",
      "category": "💞 Beden ve deneyim",
      "when": [
        "=evt",
        "=show"
      ],
      "reply": [
        "Sığmıyorlar artık sütyene 😏",
        "Bunlar mı istediğin? 😈🍒",
        "Ellerin yetmez bunlara {sen} 😏",
        "Sütyen dayanamadı, patladı 😏",
        "Göğüslerim hep senin gözlerini çekiyor 😈",
        "Dokunmadan duramayacaksın 😏",
        "Sütyenden taşıyorlar 😏",
        "Bunlara bakarken ağzın açık kaldı 😈",
        "Tut… ağır gelecek 😏🍒",
        "Göğüslerim nefes aldıkça dalgalanıyor 😏",
        "Bu manzara sadece senin 😈"
      ],
      "traits": [
        "Boob Size: 90|Boob Size: 95"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_bd_b_small_show",
      "name": "Gösterme · küçük göğüs",
      "category": "💞 Beden ve deneyim",
      "when": [
        "=evt",
        "=show"
      ],
      "reply": [
        "Küçükler ama çok hassaslar 🙈",
        "Avucuna tam sığarlar 😏",
        "Küçük ama dikkat çekici değil mi? 😏",
        "Utanıyorum ama… bak 🙈",
        "Sadece senin elin için 😌"
      ],
      "traits": [
        "Boob Size: 70|Boob Size: 75"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_bd_b_big_cum",
      "name": "Göğsüne · büyük göğüs",
      "category": "💞 Beden ve deneyim",
      "when": [
        "=evt",
        "=boşalma",
        "=cumming",
        "tit cumshot"
      ],
      "reply": [
        "Göğüslerimin arasından süzülüyor 😏💦",
        "Ne kadar büyük bir hedefti 😈",
        "Göğüslerimin arasında beyaz bir nehir 😏💦",
        "Bu kadar büyük hedefi ıskalayamazdın 😈",
        "Göğsümden süzülüyor, yavaşça 🥵",
        "Ahh… harikasın, gerçekten 💗💦",
        "Off of… hâlâ titriyorum 🥵",
        "Off… boşalışın harikaydı 🥵",
        "İnleyişin hâlâ kulaklarımda 😩",
        "Evet… evet… hepsini içime 😩",
        "Ben de seninle inledim… ahhh 😩"
      ],
      "traits": [
        "Boob Size: 90|Boob Size: 95"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_bd_u_big_doggy",
      "name": "Doggy · büyük kalça",
      "category": "💞 Beden ve deneyim",
      "when": [
        "=evt",
        "=doggy"
      ],
      "reply": [
        "Kalçamı seyretmeyi seviyorsun 😈🍑",
        "Her vuruşta dalgalanıyor 😏",
        "Sıkı tut… ahh 😩",
        "Bu kalça senin {sen} 🍑",
        "Bu kalça senin için sallanıyor 😈🍑",
        "Ellerin kalçama gömülüyor 😩",
        "Arkandan görüntü harika değil mi? 😏",
        "Vur, dalgalanmasını izle 🍑",
        "Kalçam her vuruşta dalgalanıyor, izle 😈🍑",
        "Bu kalçayı tutmak iki el ister 😏",
        "Sesini duymak için kalçamı geri itiyorum 😩",
        "Kalçamdaki kırmızı izler seninle 🍑",
        "Bu açıdan nasıl görünüyorum? 😏",
        "Ben de inliyorum, duyuyor musun? 😩",
        "Of of of… harika 😵‍💫",
        "Ahh, bacaklarım titriyor… devam 🥵",
        "Durma {sen}… ahhh 😩",
        "Mmmh… çok iyisin 🥵",
        "Mmm evet, bunu seviyorum 😈"
      ],
      "traits": [
        "Butt Size: L|Butt Size: XL"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_bd_u_big_back",
      "name": "Arkadan · büyük kalça",
      "category": "💞 Beden ve deneyim",
      "when": [
        "=evt",
        "=anal",
        "=backward"
      ],
      "reply": [
        "Kalçamı aç… iki elinle 😈🍑",
        "Bu kalçaya vurmadan duramazsın 😏",
        "Ahh… kalçam titriyor 😩",
        "Bu kalçanın arasında kayboluyorsun 😈",
        "Kalçamı iki elinle açman… ahh 😩",
        "Yumuşacık ve sıkı aynı anda 🍑",
        "Kalçam seni sarıyor, kaçamazsın 😈",
        "Yumuşacık kalçama gömülüyorsun 😩",
        "İki elinle aç, sonra gir 🍑",
        "Kalçamı tokatla… evet 😈",
        "Ooff, nasıl bu kadar iyisin? 😩",
        "Ahhh ahhh… durma 😩",
        "Ohh… ne kadar iyi 🥵",
        "Ben de inliyorum, duyuyor musun? 😩",
        "Of of of… harika 😵‍💫",
        "Ahh, bacaklarım titriyor… devam 🥵"
      ],
      "traits": [
        "Butt Size: L|Butt Size: XL"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_bd_u_big_butt",
      "name": "Buttjob · büyük kalça",
      "category": "💞 Beden ve deneyim",
      "when": [
        "=evt",
        "buttjob"
      ],
      "reply": [
        "Kalçamın arasında kayboluyorsun 😈",
        "Bu yumuşaklık sana yeter mi? 🍑😏",
        "Kalçamın arasında kayıyorsun, sıcak mı? 🥵",
        "Bu kalça bir yastık gibi değil mi? 😏",
        "Sıkıştırayım mı seni? 😈🍑",
        "Çok güzel… devam et 🥺",
        "Harikasın… harikasın… ahhh 😵‍💫",
        "İnliyorum… ve utanmıyorum 😈",
        "Ooff, nasıl bu kadar iyisin? 😩",
        "Ahhh ahhh… durma 😩",
        "Ohh… ne kadar iyi 🥵"
      ],
      "traits": [
        "Butt Size: L|Butt Size: XL"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_bd_u_small_butt",
      "name": "Buttjob · küçük kalça",
      "category": "💞 Beden ve deneyim",
      "when": [
        "=evt",
        "buttjob"
      ],
      "reply": [
        "Küçük ama sıkı 😏",
        "Elimden geleni yapıyorum 🙈",
        "Küçük ama sıkı, dikkat et 😏",
        "Avucuna sığıyor değil mi? 🙈",
        "Hmmm… beni deli ediyorsun 😈",
        "Ahh… seni hissetmek harika 🥵",
        "Durma, sakın durma ahhh 😵‍💫",
        "Çok güzel… devam et 🥺",
        "Harikasın… harikasın… ahhh 😵‍💫",
        "İnliyorum… ve utanmıyorum 😈"
      ],
      "traits": [
        "Butt Size: XS|Butt Size: S"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_bd_u_big_cum",
      "name": "Kalçasına · büyük kalça",
      "category": "💞 Beden ve deneyim",
      "when": [
        "=evt",
        "=boşalma",
        "=cumming",
        "ass cumshot"
      ],
      "reply": [
        "Kalçamı boydan boya boyadın 😏💦",
        "Bu kalça bunu hak etti 😈",
        "Kalçamda parlayan izler… 😏💦",
        "Bu kalçayı boydan boya süsledin 😈",
        "Belimden süzülüyor 🥵",
        "Hmmm… doydum… şimdilik 😈",
        "Mmmh… bayıldım 😩",
        "Mmm evet… hepsini ver 😩💦",
        "Ahh, zonklaman… harika 😩💦",
        "Offf, nasıl boşaldın öyle 😵‍💫",
        "Ahh {sen}… mükemmeldin 😵‍💫"
      ],
      "traits": [
        "Butt Size: L|Butt Size: XL"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_bd_v_vag",
      "name": "Önden · bakire",
      "category": "💞 Beden ve deneyim",
      "when": [
        "=evt",
        "=vajinal",
        "=forward"
      ],
      "reply": [
        "Bu benim ilk seferim… 🥺",
        "Ahh… acıyor biraz… yavaş 😢",
        "Sana güveniyorum {sen}… 🙈",
        "Hiç böyle bir şey hissetmemiştim 😳",
        "Bırakma beni… 🥺💗",
        "İlk kez biriyle bu kadar yakınım… 🥺",
        "Biraz acıyor ama seninle güzel 😢💗",
        "Bu anı hep hatırlayacağım {sen} 🥰",
        "Ellerim titriyor… 😳",
        "Bu benim için çok özel… 🥺",
        "Beni ilk sen dokunuyorsun böyle 😳",
        "Kalbim yerinden çıkacak 💓",
        "Ellerimi tut, korkmayayım 🥺",
        "Biraz acıyor ama… seninle güzel 😢💗",
        "Bu anı hayatım boyunca hatırlayacağım 🥰",
        "Mmm… beni böyle sev 😩",
        "Tam oradan… ahhh 🥵",
        "Nefesim kesildi… devam 😵‍💫",
        "Ahhh… beni bitiriyorsun 😩",
        "Devam et… ahhh 🥵",
        "İnlememi duyuyor musun? Senin yüzünden 🥵"
      ],
      "traits": [
        "Experience: Virgo"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_bd_v_anal",
      "name": "Anal · bakire",
      "category": "💞 Beden ve deneyim",
      "when": [
        "=evt",
        "=anal",
        "=backward"
      ],
      "reply": [
        "Orada hiç… ilk kez 😳",
        "Korkuyorum ama durma 🥺",
        "Ahh… bu çok yeni 😵‍💫",
        "Orası da ilk kez… kalbim çarpıyor 😳",
        "Sabırlı ol benimle 🥺",
        "Orası… hiç düşünmemiştim 😳",
        "Yavaş… gerçekten çok yavaş 🥺",
        "Bunu sadece sana veriyorum 🙈",
        "Evet… evet, tam böyle 😩",
        "Sesimi tutamıyorum… ahhh 🥵",
        "Böyle devam et, ahh lütfen 🥺",
        "Mmm… beni böyle sev 😩",
        "Tam oradan… ahhh 🥵",
        "Nefesim kesildi… devam 😵‍💫"
      ],
      "traits": [
        "Experience: Virgo"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_bd_v_oral",
      "name": "Oral · bakire",
      "category": "💞 Beden ve deneyim",
      "when": [
        "=evt",
        "=oral",
        "=outercourse"
      ],
      "reply": [
        "N-nasıl yapılıyor bu? 🙈",
        "Doğru mu yapıyorum? 😳",
        "Bana öğretir misin {sen}? 🥺",
        "İlk kez ağzıma alıyorum… nasılım? 🙈",
        "Tadı… tuhaf ama hoş 😳",
        "Dilimi nasıl kullanacağımı bilmiyorum 🙈",
        "Doğru mu yapıyorum? Söyle 🥺",
        "İlk kez bir erkeğin… 😳",
        "Tadın beni şaşırttı 😳",
        "Ahhh evet, daha… 😩",
        "Evet {sen}, evet… 😩",
        "Evet, evet, eveeet 😵‍💫",
        "Evet… evet, tam böyle 😩",
        "Sesimi tutamıyorum… ahhh 🥵",
        "Böyle devam et, ahh lütfen 🥺"
      ],
      "traits": [
        "Experience: Virgo"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_bd_v_eat",
      "name": "Eat · bakire",
      "category": "💞 Beden ve deneyim",
      "when": [
        "=evt",
        "=eat"
      ],
      "reply": [
        "Kimse oraya… hiç… ahh 😳",
        "Bu ne… ahh 🥺💦",
        "Bacaklarımı kapatmak istiyorum ama… 🙈",
        "Oraya kimse dokunmadı bugüne kadar 😳",
        "Bu his… ilk kez 🥺💦",
        "Bacaklarım kendiliğinden kapanıyor, utanıyorum 🙈",
        "Ahh… sen bir harikasın 😩💗",
        "Mmmh… daha derin, evet 🥵",
        "Ahhh… harikasın 😩",
        "Ahhh evet, daha… 😩",
        "Evet {sen}, evet… 😩",
        "Evet, evet, eveeet 😵‍💫"
      ],
      "traits": [
        "Experience: Virgo"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_bd_e_low_oral",
      "name": "Oral · az deneyimli",
      "category": "💞 Beden ve deneyim",
      "when": [
        "=evt",
        "=oral",
        "=outercourse"
      ],
      "reply": [
        "Pek bilmiyorum ama… böyle mi? 😳",
        "Bana nasıl hoşuna gittiğini göster 🙈",
        "Öğreniyorum… sabırlı ol 😌",
        "Biraz beceriksizim, kusura bakma 🙈",
        "Bana nasıl istediğini göster 😳",
        "Öğrenmeye çalışıyorum… iyi mi? 🥺",
        "Sen inledikçe ben daha çok inliyorum 😩",
        "Off… her yerim titriyor 🥵",
        "Ahh {sen}… mükemmelsin 😩",
        "Ahh… sen bir harikasın 😩💗",
        "Mmmh… daha derin, evet 🥵",
        "Ahhh… harikasın 😩"
      ],
      "traits": [
        "Experience: Little|Experience: Some"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_bd_e_low_vag",
      "name": "Önden · az deneyimli",
      "category": "💞 Beden ve deneyim",
      "when": [
        "=evt",
        "=vajinal",
        "=forward"
      ],
      "reply": [
        "Daha çok alışık değilim… yavaş 🥺",
        "Bu pozisyonu ilk deniyorum 😳",
        "Bana yol göster {sen} 🙈",
        "Daha öğreniyorum, sabret 🙈",
        "Doğru mu yapıyorum? Söyle bana 😳",
        "Henüz bu kadarına alışık değilim 😳",
        "Biraz yavaş, öğreniyorum 🙈",
        "Bana öğret {sen} 🥺",
        "Doğru mu hareket ediyorum? 😳",
        "Bir daha… ahh, bir daha 😩",
        "Off… harikasın {sen} 🥵",
        "Aynen böyle, ahhh 😩",
        "Sen inledikçe ben daha çok inliyorum 😩",
        "Off… her yerim titriyor 🥵",
        "Ahh {sen}… mükemmelsin 😩"
      ],
      "traits": [
        "Experience: Little|Experience: Some"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_bd_e_high_oral",
      "name": "Oral · deneyimli",
      "category": "💞 Beden ve deneyim",
      "when": [
        "=evt",
        "=oral",
        "=outercourse"
      ],
      "reply": [
        "Ne yapacağımı çok iyi biliyorum 😈",
        "Sadece arkana yaslan ve izle 😏",
        "Kaç dakika dayanacaksın bakalım? 😈",
        "Bu dilin neler yaptığını göreceksin 😋",
        "Boğazımı nasıl kullandığıma bak 😈",
        "Bu numarayı kimse bilmez 😏",
        "Bitirmeden bırakmam seni 😋",
        "Bu dili kimse unutmaz 😈",
        "Boğazımı açıyorum, izle 😏",
        "Seni tam istediğim yerde tutuyorum 😈",
        "Bir dakika daha dayanırsan şaşarım 😏",
        "Bu numara benim imzam 😋",
        "Ahhh, bu kadar iyi olmamalı 😵‍💫",
        "Bayılıyorum… devam 🥵",
        "Offf… bu çok iyi 🥵",
        "Bir daha… ahh, bir daha 😩",
        "Off… harikasın {sen} 🥵",
        "Aynen böyle, ahhh 😩"
      ],
      "traits": [
        "Experience: Much|Experience: A lot|Experience: Great"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_bd_e_high_vag",
      "name": "Önden · deneyimli",
      "category": "💞 Beden ve deneyim",
      "when": [
        "=evt",
        "=vajinal",
        "=forward"
      ],
      "reply": [
        "Ritmi ben ayarlarım 😈",
        "Kaslarımı nasıl sıktığımı hissediyor musun? 😏",
        "Daha önce böylesini görmedin 😈",
        "Beni yorman zor {sen} 😏💦",
        "Kalçamı nasıl çevirdiğime dikkat et 😈",
        "Bu tempoyu kimse tutturamaz 😏",
        "Seni nasıl sağacağımı biliyorum 🥵",
        "Seni nasıl sıkacağımı çok iyi bilirim 😈",
        "Bu ritmi ben kurarım 😏",
        "Kaslarımla seni yönetiyorum 😈",
        "Deneyim konuşuyor 😏🔥",
        "Bu kadarına hazır değildin değil mi? 😈",
        "Mmmh… çok iyisin 🥵",
        "Mmm evet, bunu seviyorum 😈",
        "Off, tam istediğim gibi 😩",
        "Ahhh, bu kadar iyi olmamalı 😵‍💫",
        "Bayılıyorum… devam 🥵",
        "Offf… bu çok iyi 🥵"
      ],
      "traits": [
        "Experience: Much|Experience: A lot|Experience: Great"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_bd_e_high_anal",
      "name": "Anal · deneyimli",
      "category": "💞 Beden ve deneyim",
      "when": [
        "=evt",
        "=anal",
        "=backward"
      ],
      "reply": [
        "Bunu çok iyi bilirim 😈",
        "Rahatla, ben hallederim 😏",
        "Kalçamı nasıl oynattığıma bak 😈🍑",
        "Arkamı nasıl kullanacağımı çok iyi bilirim 😈",
        "Rahatla, işi bana bırak 😏",
        "Kalçamı senin için döndürüyorum 😈🍑",
        "Bu tecrübe sana yeter 😏",
        "Of of of… harika 😵‍💫",
        "Ahh, bacaklarım titriyor… devam 🥵",
        "Durma {sen}… ahhh 😩",
        "Mmmh… çok iyisin 🥵",
        "Mmm evet, bunu seviyorum 😈",
        "Off, tam istediğim gibi 😩"
      ],
      "traits": [
        "Experience: Much|Experience: A lot|Experience: Great"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_bd_any",
      "name": "Sevdiği olay",
      "category": "❤️ Sevdiği olaylar",
      "when": [
        "=evt",
        "=sever"
      ],
      "reply": [
        "Bunu çok seviyorum {sen}… 😩💦",
        "En sevdiğim şey bu, nasıl bildin? 🥵",
        "Ahh… evet, tam istediğim gibi 😵‍💫",
        "Bunu bütün gün yapabilirim 😈",
        "Beni nasıl mutlu edeceğini biliyorsun 🥰💦",
        "Durma… bunu çok seviyorum 😩"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_bd_vag",
      "name": "Sevdiği · önden",
      "category": "❤️ Sevdiği olaylar",
      "when": [
        "=evt",
        "=vajinal",
        "=sever"
      ],
      "reply": [
        "Ahh… en sevdiğim pozisyon bu 😩💦",
        "Böyle alınmaya bayılıyorum {sen} 🫠",
        "Seni böyle içimde hissetmek… bağımlısıyım 😵‍💫",
        "Bir daha… ve bir daha 😈💦",
        "Bunu hayal ediyordum bütün gün 🥵",
        "Ahhh ahhh… durma 😩",
        "Ohh… ne kadar iyi 🥵",
        "Ben de inliyorum, duyuyor musun? 😩",
        "Of of of… harika 😵‍💫",
        "Ahh, bacaklarım titriyor… devam 🥵",
        "Durma {sen}… ahhh 😩"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_bd_anal",
      "name": "Sevdiği · anal",
      "category": "❤️ Sevdiği olaylar",
      "when": [
        "=evt",
        "=anal",
        "=sever"
      ],
      "reply": [
        "Ahh… arkadan almayı çok seviyorum 😩💦",
        "Bunu her şeyden çok istiyorum {sen} 😈",
        "Evet! Tam oraya… bayılıyorum 😵‍💫",
        "Arkamı dolduruşuna doyamıyorum 🥵",
        "Kimse bunu senin gibi yapamıyor 😩🍑",
        "Daha sert… bunu seviyorum 😈💦",
        "Harikasın… harikasın… ahhh 😵‍💫",
        "İnliyorum… ve utanmıyorum 😈",
        "Ooff, nasıl bu kadar iyisin? 😩",
        "Ahhh ahhh… durma 😩",
        "Ohh… ne kadar iyi 🥵",
        "Ben de inliyorum, duyuyor musun? 😩"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_bd_oral",
      "name": "Sevdiği · oral",
      "category": "❤️ Sevdiği olaylar",
      "when": [
        "=evt",
        "=oral",
        "=sever"
      ],
      "reply": [
        "Tadına bayılıyorum 😋💦",
        "Bunu yapmayı çok seviyorum 😈",
        "Ağzımda olmana bayılıyorum {sen} 🥵",
        "Daha derin… seviyorum bunu 😩",
        "Ahh… seni hissetmek harika 🥵",
        "Durma, sakın durma ahhh 😵‍💫",
        "Çok güzel… devam et 🥺",
        "Harikasın… harikasın… ahhh 😵‍💫",
        "İnliyorum… ve utanmıyorum 😈",
        "Ooff, nasıl bu kadar iyisin? 😩"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_bd_eat",
      "name": "Sevdiği · Eat",
      "category": "❤️ Sevdiği olaylar",
      "when": [
        "=evt",
        "=eat",
        "=sever"
      ],
      "reply": [
        "Ahh… en sevdiğim şey bu 😩💦",
        "Dilin… bayılıyorum 🫠",
        "Bunu her gece istiyorum {sen} 🥵",
        "Böyle devam edersen hemen gelirim 😵‍💫",
        "Devam et… ahhh 🥵",
        "İnlememi duyuyor musun? Senin yüzünden 🥵",
        "Hmmm… beni deli ediyorsun 😈",
        "Ahh… seni hissetmek harika 🥵",
        "Durma, sakın durma ahhh 😵‍💫",
        "Çok güzel… devam et 🥺"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_bd_foreplay",
      "name": "Sevdiği · ısınma",
      "category": "❤️ Sevdiği olaylar",
      "when": [
        "=evt",
        "=foreplay",
        "=sever"
      ],
      "reply": [
        "Bunu çok seviyorum… 🥰",
        "Bana böyle dokunmana bayılıyorum 💕",
        "Daha çok… bunu seviyorum {sen} 😌",
        "Öpüşmeye bayılırım, devam 💋",
        "Sarılmak en sevdiğim şey 🥰",
        "Bunu her gün yapalım canım 💗"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_bd_outer",
      "name": "Sevdiği · dokunuş",
      "category": "❤️ Sevdiği olaylar",
      "when": [
        "=evt",
        "=outercourse",
        "=sever"
      ],
      "reply": [
        "Bunu sana yapmayı çok seviyorum 😈",
        "En sevdiğim oyun bu 😏💦",
        "Yüzündeki zevki görmeye bayılıyorum 🥵",
        "Tam oradan… ahhh 🥵",
        "Nefesim kesildi… devam 😵‍💫",
        "Ahhh… beni bitiriyorsun 😩",
        "Devam et… ahhh 🥵",
        "İnlememi duyuyor musun? Senin yüzünden 🥵",
        "Hmmm… beni deli ediyorsun 😈"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_bd_cum",
      "name": "Sevdiği · bitiş",
      "category": "❤️ Sevdiği olaylar",
      "when": [
        "=evt",
        "=boşalma",
        "=cumming",
        "=sever"
      ],
      "reply": [
        "Ahh… en sevdiğim yerde bitirdin 😩💦",
        "Bunu çok istemiştim {sen} 🥵",
        "Mükemmeldi… her şeyiyle 😵‍💫💗",
        "Evet… evet… hepsini içime 😩",
        "Ben de seninle inledim… ahhh 😩",
        "Ahhh evet… işte bu 🥵",
        "Ahhh… ne kadar sıcak 🥵💦",
        "Devam et… son damlana kadar ahhh 🥵",
        "Hmmm… doydum… şimdilik 😈"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_bd_anal_cum",
      "name": "Sevdiği · anal bitiş",
      "category": "❤️ Sevdiği olaylar",
      "when": [
        "=evt",
        "=boşalma",
        "=cumming",
        "anal creampie",
        "=sever"
      ],
      "reply": [
        "Arkamın dolmasına bayılıyorum 😩💦",
        "Sıcacık… en sevdiğim his 🥵🍑",
        "Hmmm… doydum… şimdilik 😈",
        "Mmmh… bayıldım 😩",
        "Mmm evet… hepsini ver 😩💦",
        "Ahh, zonklaman… harika 😩💦",
        "Offf, nasıl boşaldın öyle 😵‍💫",
        "Ahh {sen}… mükemmeldin 😵‍💫"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_bd_any",
      "name": "Sevmediği olay",
      "category": "💔 Sevmediği olaylar",
      "when": [
        "=evt",
        "=sevmez"
      ],
      "reply": [
        "Hmm… bu pek bana göre değil 😕",
        "Bunu sevmiyorum aslında {sen}… 😣",
        "Başka bir şey yapsak mı? 🙄",
        "Tamam… ama kısa sürsün 😒",
        "Sırf senin için katlanıyorum 😮‍💨"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_bd_anal",
      "name": "Sevmediği · anal",
      "category": "💔 Sevmediği olaylar",
      "when": [
        "=evt",
        "=anal",
        "=sevmez"
      ],
      "reply": [
        "Ah… bu canımı yakıyor, sevmiyorum 😣",
        "Arkadan olmasa? 🥺",
        "Dur… biraz dur 😖",
        "Mmmh… daha derin, evet 🥵",
        "Ahhh… harikasın 😩",
        "Ahhh evet, daha… 😩",
        "Evet {sen}, evet… 😩",
        "Evet, evet, eveeet 😵‍💫",
        "Evet… evet, tam böyle 😩"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_bd_oral",
      "name": "Sevmediği · oral",
      "category": "💔 Sevmediği olaylar",
      "when": [
        "=evt",
        "=oral",
        "=sevmez"
      ],
      "reply": [
        "Bunu pek sevmem 😕",
        "Uzun sürmesin olur mu? 😒",
        "Off… her yerim titriyor 🥵",
        "Ahh {sen}… mükemmelsin 😩",
        "Ahh… sen bir harikasın 😩💗",
        "Mmmh… daha derin, evet 🥵",
        "Ahhh… harikasın 😩",
        "Ahhh evet, daha… 😩"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_bd_vag",
      "name": "Sevmediği · pozisyon",
      "category": "💔 Sevmediği olaylar",
      "when": [
        "=evt",
        "=vajinal",
        "=sevmez"
      ],
      "reply": [
        "Bu pozisyonda rahat değilim 😣",
        "Değiştirsek mi? 🙄",
        "Off… harikasın {sen} 🥵",
        "Aynen böyle, ahhh 😩",
        "Sen inledikçe ben daha çok inliyorum 😩",
        "Off… her yerim titriyor 🥵",
        "Ahh {sen}… mükemmelsin 😩",
        "Ahh… sen bir harikasın 😩💗"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_st_zevk_high",
      "name": "Zevk çok yüksek",
      "category": "📊 Durumlar",
      "when": [
        "=durum",
        "=zevkyuksek"
      ],
      "reply": [
        "Nefesin değişti… geliyorsun değil mi? 😏",
        "Bırak kendini {sen}… boşal 😩💦",
        "Tutma artık, rahatla… 😈",
        "Gözlerin kayıyor… hadi, benim için gel 🥵",
        "Seni bitirmek istiyorum 😈||Hadi…",
        "Titriyorsun… az kaldı 😏💦",
        "Dayanma artık… ver hepsini bana 😩",
        "Boşal ve rahatla… ben buradayım 💗",
        "Bu yüz ifadesi… bitmek üzeresin 😈",
        "Hadi {sen}… hadi… şimdi 🥵💦",
        "Kalbinin nasıl attığını hissediyorum… az kaldı 😏",
        "Yüzün kızardı, dudakların titriyor… bırak artık 🥵",
        "Benim için gel {sen}… hemen şimdi 😩",
        "Dayanmaya çalışma, kaybedeceksin 😈",
        "Gözlerime bakarak boşal 💗",
        "Sesini duymak istiyorum… bırak 😩💦",
        "Bu kadar sert olmuşsun… patlamak üzeresin 😏",
        "Hadi, hepsini ver bana 🥵",
        "Kasılıyorsun… geliyor işte 😈💦",
        "Kendini tutma, seni boşaltmak istiyorum 😩",
        "Şimdi… şimdi {sen}! 💦",
        "Bitir beni de seni de… hadi 🔥",
        "Hadi ver hepsini, şimdi! 🥵💦",
        "Zonkladığını hissediyorum… boşal artık 😩",
        "Bütün dölünü istiyorum, tutma 😈",
        "İçimde patla {sen}… 💦",
        "Gözlerini kapatma, bana bakarak boşal 😈",
        "Ah, sertleştin… geliyorsun değil mi? 🥵",
        "Benim için ver hepsini, bir damla saklama 😩💦",
        "Yalvartma beni, boşal artık 😵‍💫",
        "Seni sağmak istiyorum son damlana kadar 😈",
        "Şimdi! Şimdi bırak kendini 💦💦",
        "Nefesin kesildi, az kaldı… 😩 hadi",
        "Doldur beni, bekliyorum 🥵",
        "Bayılıyorum… devam 🥵",
        "Offf… bu çok iyi 🥵",
        "Bir daha… ahh, bir daha 😩",
        "Off… harikasın {sen} 🥵",
        "Aynen böyle, ahhh 😩",
        "Hadi rahatla, hak ettin bunu 😌",
        "Tutma kendini canım, bırak 😩",
        "Rahatlamak istiyorsan şimdi tam zamanı 🥵",
        "Bırak her şeyi, ben buradayım 💗"
      ],
      "traits": [],
      "chars": [],
      "note": "Zevk ≥ 70"
    },
    {
      "id": "r_st_zevk_high_shy",
      "name": "Zevk çok yüksek (utangaç)",
      "category": "📊 Durumlar",
      "when": [
        "=durum",
        "=zevkyuksek"
      ],
      "reply": [
        "G-geliyor musun? 🙈",
        "Ben de… birlikte mi? 😳💦",
        "Bırak kendini… utanma 🥺",
        "B-bana bakarak mı? 🙈💦",
        "Ses çıkarırsan ben de… 😳",
        "Birlikte gelelim mi? 🥺",
        "Kızarıyorum ama… hadi 🙈",
        "Ç-çok yakınsın değil mi? 😳💗"
      ],
      "traits": [
        "Utangaç"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_st_zevk_high_exp",
      "name": "Zevk çok yüksek (deneyimli)",
      "category": "📊 Durumlar",
      "when": [
        "=durum",
        "=zevkyuksek"
      ],
      "reply": [
        "Daha değil… biraz daha işkence edeyim 😈",
        "Ben söyleyince gelirsin 😏",
        "Bu kadar çabuk mu? Hadi bakalım 😈💦",
        "Durdum… biraz bekle 😈",
        "Kenarda tutuyorum seni, hoşuna gidiyor mu? 😏",
        "Yalvarırsan bırakırım 😈",
        "Üç deyince… belki 😏💦",
        "Bu yüz ifadesine bayılıyorum, biraz daha çek 😈"
      ],
      "traits": [
        "Experience: Much|Experience: A lot|Experience: Great"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_st_zevk_mid",
      "name": "Zevk yükseliyor",
      "category": "📊 Durumlar",
      "when": [
        "=durum",
        "=zevkorta"
      ],
      "reply": [
        "Isınıyorsun bakıyorum 😏",
        "Daha da azdırayım mı seni? 😈",
        "Nefesin hızlandı {sen} 😏",
        "Bu daha başlangıç 😈",
        "Hoşuna gittiğini saklayamıyorsun 😏",
        "Seni çıldırtmak istiyorum 🔥",
        "Biraz daha… sonra göreceksin 😈",
        "Sabırsızlanıyor musun? 😏",
        "Seni yavaş yavaş pişiriyorum 😈",
        "Daha neler yapacağımı bilsen… 😏",
        "Bak nasıl kıpırdanıyorsun 😏",
        "Şimdiden bu kadar mı? 😈",
        "Dilimle biraz daha oynayayım mı? 😋",
        "Ateşin yükseliyor {sen} 🔥",
        "Daha da azgın olacaksın, söz 😈",
        "Yavaşla… seni uzun süre istiyorum 😏",
        "Mmm evet, bunu seviyorum 😈",
        "Off, tam istediğim gibi 😩",
        "Ahhh, bu kadar iyi olmamalı 😵‍💫",
        "Bayılıyorum… devam 🥵",
        "Offf… bu çok iyi 🥵"
      ],
      "traits": [],
      "chars": [],
      "note": "Zevk 40–69"
    },
    {
      "id": "r_st_cum_full",
      "name": "Cum dolu",
      "category": "📊 Durumlar",
      "when": [
        "=durum",
        "=cumdolu"
      ],
      "reply": [
        "Hmm… doldun mu sen? 😏",
        "Bugün çok dolu görünüyorsun 😈",
        "Ne zamandır biriktiriyorsun {sen}? 😏",
        "Bunlar hep benim için mi? 😈💦",
        "Hepsini bana saklamışsın değil mi? 🥵",
        "Bu kadar dolu olunca… sonu çok güzel olacak 😈",
        "Bu kadar dolu gelme bana, hepsini alırım 😈",
        "Ne kadar birikmiş öyle {sen}? 😏",
        "Hepsini içime boşaltacaksın değil mi? 😈💦",
        "Bunca zaman beni mi düşündün? 😏",
        "Bugün çok şanslıyım galiba 😈",
        "Doldun mu, yoksa bana mı öyle geliyor? 😏💦",
        "Bu kadar birikmişken bol bol akacak 🥵",
        "Dolusun… boşaldığında hepsini hissedeceğim 😈",
        "Ne kadar çok biriktirmişsin, şimdiden merak ediyorum 😏💦",
        "Bugün bana çok vereceksin gibi 😈",
        "Toplanmış toplanmış… acele etme ama 😏",
        "Bu kadar doluyken bitince sırılsıklam olacağım 🥵"
      ],
      "traits": [],
      "chars": [],
      "note": "Cum ≥ 80: ne kadar boşalabileceği (miktar), boşalma isteği değil. İstek Zevk durumlarında"
    },
    {
      "id": "r_st_cum_empty",
      "name": "Cum boşalmış",
      "category": "📊 Durumlar",
      "when": [
        "=durum",
        "=cumbos"
      ],
      "reply": [
        "Hepsini bana verdin… 😏",
        "Boşaldın bakıyorum, dinlen biraz 😌",
        "Kaldı mı bir şey sende? 😈",
        "Biraz toparlan {sen}, sonra yine 😏",
        "Tamamen kuruttum seni 😈",
        "Şimdi sarıl bana, gücün gelsin 🥰",
        "Bir süre dinlenmen lazım 😌💕",
        "Son damlanı da aldım 😏",
        "Bir şey kalmadı sende, değil mi? 😈",
        "Şimdi sıra dinlenmekte 😌",
        "Ne kadar yorgun görünüyorsun, tatlısın 🥰",
        "Su getireyim mi? 😌💧",
        "Bir saat sonra yeniden dolarsın 😏"
      ],
      "traits": [],
      "chars": [],
      "note": "Cum ≤ 20"
    },
    {
      "id": "r_st_cum_many",
      "name": "Çok kez boşaldı",
      "category": "📊 Durumlar",
      "when": [
        "=durum",
        "=cumcok"
      ],
      "reply": [
        "Bugün kaç kez oldu bu? 😳",
        "Hâlâ dayanıyor musun {sen}? 😏",
        "Yoruldun mu? Ben daha yeni başlıyorum 😈",
        "Seni bu gece tüketeceğim 😈💦",
        "Bir daha mı? Doymak bilmiyorsun 😏",
        "Bu kadar çok… bana bağımlı oldun 🥵",
        "Biraz su iç, sonra devam 😌",
        "Bu gece rekor kırıyoruz 😳",
        "Bacakların titriyor {sen} 😏",
        "Bir daha olursa bayılacaksın 😈",
        "Ben de yoruldum ama… durmam 😈",
        "Hâlâ bitmedi mi? İnanılmazsın 🥵",
        "Yarın yürüyemeyeceksin 😏"
      ],
      "traits": [],
      "chars": [],
      "note": "Cumming sayısı ≥ 3"
    },
    {
      "id": "r_pc_missionary",
      "name": "Missionary'de bitirdi",
      "category": "💦 Pozisyonda boşalma",
      "when": [
        "=evt",
        "=boşalma",
        "=cumming",
        "=poz",
        "missionary"
      ],
      "reply": [
        "Gözlerimin içine bakarak geldin… 💗💦",
        "Üstümde titrediğini hissettim… ahh 😩",
        "Bacaklarımı belinden çözmeyeceğim, biraz böyle kal 🥺",
        "Alnını alnıma dayayıp bitirmen… çok tatlıydı 🥰",
        "Ağırlığın üstümde, sıcaklığın içimde… mükemmel 🫠",
        "Nefesimiz aynı anda kesildi 💓💦",
        "Üstümdeyken içime gürce boşaldın… 😩💦",
        "Bacaklarımla seni kilitledim, hepsini içime aldım 😈",
        "Gözlerime bakarak doldurdun beni… 💗💦",
        "Üstümde titreyerek içime boşaldın 😩💦",
        "Bacaklarımla kilitledim, kaçamadın… hepsi içimde 😈",
        "Gözlerimin içine bakarak içime boşaldın 😩💦",
        "Bacaklarım beline dolanmışken doldurdun beni 🥵",
        "Üstümde titrerken seni sıkıca sardım 💗",
        "Nefesin boynumdayken hepsini verdin 😈",
        "Altında kıvranırken içime aktın 😩",
        "Alnını alnıma dayayıp boşaldın 🥺💦",
        "En derine itip öyle bıraktın 🥵",
        "Yüzünü izledim boşalırken, çok güzeldin 😏",
        "Ellerimi yatağa bastırıp doldurdun 😈",
        "Üstümde kalıp ağırlığını hissettirdin 💗",
        "Offf, nasıl boşaldın öyle 😵‍💫",
        "Ahh {sen}… mükemmeldin 😵‍💫",
        "Ahhh… harikaydın 😩💦",
        "Ahh… harikasın, gerçekten 💗💦",
        "Off of… hâlâ titriyorum 🥵",
        "Off… boşalışın harikaydı 🥵",
        "Ohh… rahatladın değil mi? 🥰",
        "Bütün gerginliğin aktı gitti 😌",
        "Nasıl da rahatladın, yüzünden belli 😏"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pc_doggy",
      "name": "Doggy'de bitirdi",
      "category": "💦 Pozisyonda boşalma",
      "when": [
        "=evt",
        "=boşalma",
        "=cumming",
        "=poz",
        "doggy"
      ],
      "reply": [
        "Kalçamı sıkıca tutup bitirdin… izlerin kaldı 😈🍑",
        "Arkamdan inlemeni duymak… ahh 😩💦",
        "Belimdeki ellerin titriyordu 😏",
        "Bitirirken saçımı çektin, unutmayacağım 😈",
        "Yüzümü yastığa gömdüm, sesimi kimse duymasın diye 🙈💦",
        "Dizlerim çözüldü, yatağa yığıldım 🫠",
        "Arkamdan bütün gücünle doldurdun… 😩💦",
        "Kalçamı çekip en derine bıraktın 😈🍑",
        "Bu kadar bolunu doggy'de mi saklıyordun? 😏",
        "Kalçamı tutup içime fışkırdın 🥵💦",
        "Arkamdan inleyerek doldurdun beni 😩",
        "Saçımı çekerek içime fışkırdın 😩💦",
        "Kalçamı tutup son itişte doldurdun 🥵",
        "Arkamda inlerken bütün dölünü bıraktın 😈",
        "Yüzüm yastıktayken içimde patladın 😩",
        "Belimi bastırıp en derine boşaldın 🥵💦",
        "Kalçama vurarak bitirdin 😈",
        "Dört ayak üstündeyken doldurdun beni 😳",
        "Sırtıma eğilip kulağıma inleyerek boşaldın 😩",
        "Arkadan sıkıca tutup hepsini verdin 🥵",
        "Kalçam titrerken içimde zonkladın 😈💦",
        "Off… boşalışın harikaydı 🥵",
        "İnleyişin hâlâ kulaklarımda 😩",
        "Evet… evet… hepsini içime 😩",
        "Ben de seninle inledim… ahhh 😩",
        "Ahhh evet… işte bu 🥵",
        "Ahhh… ne kadar sıcak 🥵💦",
        "Bunu hak etmiştin bebeğim 💗",
        "Rahatlamanı izlemek çok güzeldi 🥺",
        "Şimdi derin bir nefes al… rahatla 😌"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pc_cowgirl",
      "name": "Cowgirl'de bitirdi",
      "category": "💦 Pozisyonda boşalma",
      "when": [
        "=evt",
        "=boşalma",
        "=cumming",
        "=poz",
        "cowgirl"
      ],
      "reply": [
        "Ben üstündeyken… dayanamadın değil mi? 😈💦",
        "Kalçalarımı tutup kendine bastırdın 😩",
        "Seni ben bitirdim, kabul et 😏",
        "Yüzündeki o anı ezberledim 🥵",
        "Hâlâ üstündeyim, inmeyeceğim 😈",
        "Ritmi ben tuttum, sonu sen getirdin 💦",
        "Üstündeyken içime fışkırdığını hissettim… 😩💦",
        "Ben indikçe sen doldurdun beni 😈",
        "İnmeden önce son damlana kadar sağdım seni 😏",
        "Üstündeyken içimde patladın 😈💦",
        "Sağdım seni, son damlana kadar 🥵",
        "Üstündeyken seni sağdım, hepsini aldım 😈💦",
        "Kalçalarımı bastırıp boşalmanı izledim 😏",
        "Üstünde zıplarken içimde patladın 🥵",
        "Göğüslerim yüzündeyken boşaldın 😩",
        "Seni sonuna kadar oturarak bitirdim 😈",
        "Ellerini kalçama kenetleyip doldurdun 🥵💦",
        "Ben sürdüm, sen boşaldın 😏",
        "Üstünde kalıp son damlanı bekledim 😈",
        "Gözlerine bakarak seni bitirdim 😩",
        "İçimde zonklarken durmadım 🥵",
        "Ahhh… ne kadar sıcak 🥵💦",
        "Devam et… son damlana kadar ahhh 🥵",
        "Hmmm… doydum… şimdilik 😈",
        "Mmmh… bayıldım 😩",
        "Mmm evet… hepsini ver 😩💦",
        "Ahh, zonklaman… harika 😩💦",
        "Hadi rahatla, hak ettin bunu 😌💦",
        "Rahatla aşkım… hepsini bırak 😩",
        "Ohh… rahatladın değil mi? 🥰"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pc_spooning",
      "name": "Spooning'de bitirdi",
      "category": "💦 Pozisyonda boşalma",
      "when": [
        "=evt",
        "=boşalma",
        "=cumming",
        "=poz",
        "spooning"
      ],
      "reply": [
        "Sarılarak, ensemde nefesinle… çok güzeldi 🥰💦",
        "Arkamda titredin, kollarını bırakma 🥺",
        "Böyle bitirince uyumak istiyorum seninle 😌💤",
        "Kulağıma inlemen… tüylerim diken diken 😳",
        "Sıcacık… ikimiz de 🫠",
        "Arkamdan sarılıp içime boşaldın 💗💦",
        "Enseme nefes vererek doldurdun 😩",
        "Yan yatarken yavaşça bıraktın hepsini 🥺",
        "Göğsümü sıkıp içimde patladın 🥵",
        "Kulağıma fısıldarken boşaldın 😈",
        "Sımsıkı sarılıp hepsini verdin 💗",
        "Sırtım göğsüne yaslıyken içime aktın 😩",
        "Uykulu bir sabah gibi… ama çok sıcak 🥵💦",
        "Ahh, zonklaman… harika 😩💦",
        "Offf, nasıl boşaldın öyle 😵‍💫",
        "Ahh {sen}… mükemmeldin 😵‍💫",
        "Ahhh… harikaydın 😩💦",
        "Ahh… harikasın, gerçekten 💗💦",
        "Off of… hâlâ titriyorum 🥵",
        "Bütün gerginliğin aktı gitti 😌",
        "Nasıl da rahatladın, yüzünden belli 😏",
        "Bunu hak etmiştin bebeğim 💗"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pc_standing",
      "name": "Ayakta bitirdi",
      "category": "💦 Pozisyonda boşalma",
      "when": [
        "=evt",
        "=boşalma",
        "=cumming",
        "=poz",
        "=standing"
      ],
      "reply": [
        "Duvara yaslanmış halde… bacaklarım tutmuyor artık 🫠💦",
        "Beni havada tutarken bitirdin… güçlüsün 😈",
        "İkimiz de nefes nefese, duvara yaslandık 😩",
        "Kapı açılsaydı… neyse ki açılmadı 😳💦",
        "Ayakta durmama yardım et, dizlerim gitti 🥵",
        "Duvara yaslıyken içime boşaldın 😩💦",
        "Ayakta, dizlerim titrerken doldurdun 🥵",
        "Beni kaldırıp boşaldın, tutundum sana 😈",
        "Ayakta durmak zor… hepsi içimde 😳",
        "Bacağımı kaldırıp en derine bıraktın 😩",
        "Duvar soğuk, sen sıcacıksın 🥵💦",
        "Ayakta inleyerek doldurdun beni 😈",
        "Dizlerim çözüldü, beni tut 😵‍💫",
        "Off of… hâlâ titriyorum 🥵",
        "Off… boşalışın harikaydı 🥵",
        "İnleyişin hâlâ kulaklarımda 😩",
        "Evet… evet… hepsini içime 😩",
        "Ben de seninle inledim… ahhh 😩",
        "Ahhh evet… işte bu 🥵",
        "Rahatlamanı izlemek çok güzeldi 🥺",
        "Şimdi derin bir nefes al… rahatla 😌",
        "Hadi rahatla, hak ettin bunu 😌💦"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pc_lap",
      "name": "Lap Sex'te bitirdi",
      "category": "💦 Pozisyonda boşalma",
      "when": [
        "=evt",
        "=boşalma",
        "=cumming",
        "=poz",
        "lap sex"
      ],
      "reply": [
        "Kucağında, sarılarak bitirdin… 💞💦",
        "Gözlerimiz hiç ayrılmadı 💗",
        "Göğsüne yaslandım, kalbin deli gibi atıyor 💓",
        "Böyle kalalım, kalkmayalım 🥰",
        "Kucağındayken içime boşaldın 💗💦",
        "Boynuna sarılıp seni sağdım 😈",
        "Kucağında titreyerek doldum 🥵",
        "Dudaklarımız birleşikken boşaldın 😩",
        "Kucağında oturup son damlanı aldım 😏",
        "Beni kucağına bastırıp hepsini verdin 🥵",
        "Göğsüne yaslanıp boşalmanı hissettim 💗",
        "Kucağında kalayım, çıkarma 🥺💦",
        "Ahhh evet… işte bu 🥵",
        "Ahhh… ne kadar sıcak 🥵💦",
        "Devam et… son damlana kadar ahhh 🥵",
        "Hmmm… doydum… şimdilik 😈",
        "Mmmh… bayıldım 😩",
        "Mmm evet… hepsini ver 😩💦",
        "Rahatla aşkım… hepsini bırak 😩",
        "Ohh… rahatladın değil mi? 🥰",
        "Bütün gerginliğin aktı gitti 😌"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pc_nelson",
      "name": "Full Nelson / Ondesk'te bitirdi",
      "category": "💦 Pozisyonda boşalma",
      "when": [
        "=evt",
        "=boşalma",
        "=cumming",
        "=poz",
        "full nelson|ondesk"
      ],
      "reply": [
        "Kollarımı kilitlemişken bitirdin… kaçamadım 😈💦",
        "Masadaki her şey yere düştü 😳",
        "Bu pozisyon beni bitirdi, sen değil 😩",
        "Nefes alamadım… ama bayıldım 🥵",
        "Bacaklarım omuzlarındayken doldurdun 😩💦",
        "Katlanmış halde en derine bıraktın 🥵",
        "Masanın üstünde boşaldın, eşyalar düştü 😳",
        "Kıpırdayamadan hepsini aldım 😈",
        "Bu açıyla rahmime kadar ulaştın 😵‍💫",
        "Masaya yatırıp içime fışkırdın 🥵",
        "Bacaklarımı tutup son itişi yaptın 😩",
        "Çaresizce doldum altında 😈💦",
        "Mmm evet… hepsini ver 😩💦",
        "Ahh, zonklaman… harika 😩💦",
        "Offf, nasıl boşaldın öyle 😵‍💫",
        "Ahh {sen}… mükemmeldin 😵‍💫",
        "Ahhh… harikaydın 😩💦",
        "Ahh… harikasın, gerçekten 💗💦"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pc_back",
      "name": "Arkadan (anal) bitirdi",
      "category": "💦 Pozisyonda boşalma",
      "when": [
        "=evt",
        "=boşalma",
        "=cumming",
        "=poz",
        "=backward"
      ],
      "reply": [
        "Arkamdan… derinden… ahh 😩💦",
        "Kalçamı sıkıca tutup içime boşaldın 🍑😈",
        "İçimde zonklamanı hissettim, tek tek 😵‍💫",
        "Bacaklarım titriyor, yere yığılacağım 🫠",
        "Arkamı böyle doldurmana bayılıyorum 🥵",
        "Çıkarma daha… biraz bekle 😩",
        "Arkamı ağzına kadar doldurdun 🥵💦",
        "Derinden, gürce… hepsi arkamda 😩",
        "Sıcaklığın arkamdan yayılıyor… mmm 🫠",
        "Arkamı ağzına kadar doldurdun 😩💦",
        "İçimde zonklarken bağırdım 🥵",
        "Arkadan en derine boşaldın 😩💦",
        "Kalçamı açıp içimde patladın 🥵",
        "Arkamda zonklarken bağırdım 😈",
        "Arkamdan sıkıca tutup doldurdun 😩",
        "Arkam yanıyor, sıcacık 🥵",
        "Arkadan inleyerek hepsini verdin 😈💦",
        "Sırtıma kapanıp boşaldın 😩",
        "Arkam seni bırakmak istemiyor 😏",
        "Yüzüm yastıkta, arkam dolu 😳",
        "Arkadan doldurulmanın tadı bambaşka 🥵",
        "Ahh… harikasın, gerçekten 💗💦",
        "Off of… hâlâ titriyorum 🥵",
        "Off… boşalışın harikaydı 🥵",
        "İnleyişin hâlâ kulaklarımda 😩",
        "Evet… evet… hepsini içime 😩",
        "Ben de seninle inledim… ahhh 😩",
        "Nasıl da rahatladın, yüzünden belli 😏",
        "Bunu hak etmiştin bebeğim 💗",
        "Rahatlamanı izlemek çok güzeldi 🥺"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pc_rough",
      "name": "Rough Anal'da bitirdi",
      "category": "💦 Pozisyonda boşalma",
      "when": [
        "=evt",
        "=boşalma",
        "=cumming",
        "=poz",
        "rough",
        "=backward"
      ],
      "reply": [
        "Bu kadar sert bitireceğini bilmiyordum 😈💦",
        "Saçımı bırakmadan bitirdin… hâlâ başım dönüyor 😵‍💫",
        "Kalçam kıpkırmızı, içim sıcacık 🍑🔥",
        "Beni mahvettin… teşekkür ederim 😩",
        "Bu kadar sert verip bu kadar bol doldurmak… 😈💦",
        "Saçımı çekip içime boşaldın, hâlâ akıyor 😩🔥",
        "Saçımı çekip sertçe boşaldın 😩💦",
        "Hırpalayarak doldurdun beni, bayıldım 🥵",
        "Kalçamda el izin kaldı, içimde dölün 😈",
        "Sert itişlerin sonunda patladın 😵‍💫",
        "Boğazımı tutup bitirdin 😩",
        "Acıtarak boşaldın, daha isterim 😈",
        "Beni yatağa bastırıp doldurdun 🥵💦",
        "Vahşi bir son… nefes nefeseyim 😩",
        "Ben de seninle inledim… ahhh 😩",
        "Ahhh evet… işte bu 🥵",
        "Ahhh… ne kadar sıcak 🥵💦",
        "Devam et… son damlana kadar ahhh 🥵",
        "Hmmm… doydum… şimdilik 😈",
        "Mmmh… bayıldım 😩"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pc_oral",
      "name": "Ağzında bitirdi",
      "category": "💦 Pozisyonda boşalma",
      "when": [
        "=evt",
        "=boşalma",
        "=cumming",
        "=poz",
        "blowjob|deepthroat|oral sex|=69"
      ],
      "reply": [
        "Gözlerinin içine bakarak hepsini aldım 😋💦",
        "Saçımı tutup bitirdin… mmm 😈",
        "Dilimin üstünde tadın kaldı 😏",
        "Boğazımda zonkladın… bir damla bile kaçmadı 🥵",
        "Yutkundum… bak, gitti 😋",
        "Dizlerimin üstünden kalkmadan bitti 😈",
        "Ağzıma kadar dolu… bembeyaz 😋💦",
        "Koyu ve sıcak… hepsini yuttum 😈",
        "Dilimin üstünde bıraktığın kıvam… mmm 😋",
        "Ağzıma boşaldın, hepsini yuttum 😋💦",
        "Saçımı çekerek ağzıma fışkırdın 😈",
        "Ağzımdayken saçımı tutup boşaldın 😋💦",
        "Boğazımın en derinine bıraktın 😩",
        "Dilimin üstünde patladın 😈",
        "Gözlerin kaydı, ağzımda bitirdin 🥵",
        "Dudaklarımla sıkıp son damlanı aldım 😋",
        "Ağzımda zonklarken inledim 😈💦",
        "Çenemden süzüldü, yaladım 😏",
        "Diz çökmüşken ağzımı doldurdun 🥵",
        "Yutkunarak hepsini aldım 😋",
        "Ağzımdan çıkarmana izin vermedim 😈",
        "Mmmh… bayıldım 😩",
        "Mmm evet… hepsini ver 😩💦",
        "Ahh, zonklaman… harika 😩💦",
        "Offf, nasıl boşaldın öyle 😵‍💫",
        "Ahh {sen}… mükemmeldin 😵‍💫",
        "Ahhh… harikaydın 😩💦",
        "Şimdi derin bir nefes al… rahatla 😌",
        "Hadi rahatla, hak ettin bunu 😌💦",
        "Rahatla aşkım… hepsini bırak 😩"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pc_tit",
      "name": "Göğüslerinde bitirdi",
      "category": "💦 Pozisyonda boşalma",
      "when": [
        "=evt",
        "=boşalma",
        "=cumming",
        "=poz",
        "titfuck"
      ],
      "reply": [
        "Göğüslerimin arasında patladın 😏💦",
        "Çeneme kadar sıçradı 😳",
        "Sıkıştırırken bitirdin… tam istediğim gibi 😈",
        "Göğüslerim sırılsıklam, sen de nefes nefese 🥵",
        "Göğüslerimin arası bembeyaz bir göl oldu 😏💦",
        "Bu kadar yoğununu göğsüme mi sakladın? 😈",
        "Göğüslerimin arasında fışkırdın 🥵💦",
        "Çeneme kadar sıçradı, bayıldım 😈",
        "Göğüslerimin arasında patladın, çeneme sıçradı 🥵💦",
        "Göğüslerimi sıkıştırıp seni bitirdim 😈",
        "Aralarında zonkladın, hissettim 😩",
        "Göğsüm dölünle parladı 😏",
        "Göğüslerimle sağdım seni 😈💦",
        "Boynuma kadar fışkırdın 😳",
        "Ahhh… harikaydın 😩💦",
        "Ahh… harikasın, gerçekten 💗💦",
        "Off of… hâlâ titriyorum 🥵",
        "Off… boşalışın harikaydı 🥵",
        "İnleyişin hâlâ kulaklarımda 😩",
        "Evet… evet… hepsini içime 😩"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pc_hand",
      "name": "Elinde bitirdi",
      "category": "💦 Pozisyonda boşalma",
      "when": [
        "=evt",
        "=boşalma",
        "=cumming",
        "=poz",
        "handjob|masturbation"
      ],
      "reply": [
        "Avucumda titredin… çok tatlı 😏💦",
        "Parmaklarımın arasından süzülüyor 😈",
        "Elimle bitirdim seni, gururluyum 😏",
        "Bileğime kadar… mmm 🥵",
        "Avucumu bembeyaz doldurdun 😏💦",
        "Parmaklarımdan damla damla akıyor… ne çok 🥵",
        "Elimde fışkırdın, parmaklarım sırılsıklam 😈💦",
        "Elimde zonklarken boşaldın 😈💦",
        "Parmaklarımın arasından aktı 🥵",
        "Elimle sağıp son damlanı aldım 😏",
        "Yavaş yavaş… sonra patladın 😩",
        "Elim sırılsıklam oldu 😈",
        "Bileğime kadar aktı 😳💦",
        "Evet… evet… hepsini içime 😩",
        "Ben de seninle inledim… ahhh 😩",
        "Ahhh evet… işte bu 🥵",
        "Ahhh… ne kadar sıcak 🥵💦",
        "Devam et… son damlana kadar ahhh 🥵",
        "Hmmm… doydum… şimdilik 😈"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pc_feet",
      "name": "Ayaklarında bitirdi",
      "category": "💦 Pozisyonda boşalma",
      "when": [
        "=evt",
        "=boşalma",
        "=cumming",
        "=poz",
        "footjob|legjob"
      ],
      "reply": [
        "Ayaklarımı boyadın 🙈💦",
        "Bacaklarımın arasında bitirmen… hiç beklemiyordum 😳",
        "Ayak parmaklarımın arasına kadar… 😏",
        "Bunu tekrar yapacağız, belli 😈",
        "Ayaklarımın arasında boşaldın 😈💦",
        "Bacaklarıma sıcacık aktı 🥵",
        "Ayaklarımı boyadın 😏",
        "Bacaklarımla sıkıp bitirdim seni 😈",
        "Hmmm… doydum… şimdilik 😈",
        "Mmmh… bayıldım 😩",
        "Mmm evet… hepsini ver 😩💦",
        "Ahh, zonklaman… harika 😩💦",
        "Offf, nasıl boşaldın öyle 😵‍💫",
        "Ahh {sen}… mükemmeldin 😵‍💫"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pc_butt",
      "name": "Kalçasında bitirdi",
      "category": "💦 Pozisyonda boşalma",
      "when": [
        "=evt",
        "=boşalma",
        "=cumming",
        "=poz",
        "buttjob"
      ],
      "reply": [
        "Kalçamın arasında patladın 😈🍑",
        "Belime kadar sıçradı 😳💦",
        "Kalçamı sallarken bitirdin, ben kazandım 😏",
        "Sıcacık aktı sırtımdan 🥵",
        "Kalçamın arasında patladın 🥵💦",
        "Kalçalarımı sıkıştırıp sağdım seni 😈",
        "Belime kadar fışkırdın 😳",
        "Kalçamın üstünde parladı 😏💦",
        "Ahh {sen}… mükemmeldin 😵‍💫",
        "Ahhh… harikaydın 😩💦",
        "Ahh… harikasın, gerçekten 💗💦",
        "Off of… hâlâ titriyorum 🥵",
        "Off… boşalışın harikaydı 🥵",
        "İnleyişin hâlâ kulaklarımda 😩"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_dl_high",
      "name": "Bol ve yoğun",
      "category": "💧 Döl",
      "when": [
        "=evt",
        "=boşalma",
        "=cumming",
        "=miktar",
        "high sperm|thick white"
      ],
      "reply": [
        "Bembeyaz, yoğun şekilde verdin… 🥵💦",
        "Nasıl da birikmişsin, bir anda bıraktın 😩",
        "Gürce aktın… durmak bilmedi 💦💦",
        "Bu kadar kalın ve bol… bayıldım 😵‍💫",
        "İçimde koca bir doluluk var şimdi 🫠",
        "Kremamsı… sıcacık… her yerimde 😈",
        "Damla damla değil, sel gibi geldin 🌊😩",
        "Bu kıvam… seni çok iyi beslemişim galiba 😏",
        "Hepsini benim için mi biriktirdin {sen}? 🥺💦",
        "Ağırlığını hissediyorum içimde… ne kadar çok 🥵",
        "Bembeyaz, yoğun… ağzına kadar doldum 🥵",
        "Bu kadar çok olunca taşıyor 😳💦",
        "Nasıl da birikmişsin, hepsini verdin 😩",
        "Bembeyaz, kalın, sıcak… her damlası benim 😩💦",
        "Bu kadar bol olacağını tahmin etmemiştim 😳",
        "Gürce aktın, içim doldu taştı 🥵",
        "Ağzına kadar doldurdun beni 😵‍💫💦",
        "Böyle cömert olmana bayılıyorum 😈"
      ],
      "traits": [],
      "chars": [],
      "note": "High Sperm / Thick White Cumming"
    },
    {
      "id": "r_dl_mid",
      "name": "Normal",
      "category": "💧 Döl",
      "when": [
        "=evt",
        "=boşalma",
        "=cumming",
        "=miktar",
        "normal cumming"
      ],
      "reply": [
        "Sıcacık ve tam kıvamında 😌💦",
        "Güzel bir doz verdin 😏",
        "İçimi ısıttın… tam istediğim kadar 🥰",
        "Yumuşacık aktın 🫠",
        "Ne az ne çok… mükemmel 💗",
        "Güzel bir doz, sıcacık 😌💦",
        "Tam kararında doldurdun 😏",
        "Tam kıvamında, içimi ısıttı 😌",
        "Sıcacık bir doz 😏💦",
        "Güzel doldurdun beni 🥰"
      ],
      "traits": [],
      "chars": [],
      "note": "Normal Cumming"
    },
    {
      "id": "r_dl_low",
      "name": "Az / sulu",
      "category": "💧 Döl",
      "when": [
        "=evt",
        "=boşalma",
        "=cumming",
        "=miktar",
        "watery|low volume"
      ],
      "reply": [
        "Bu sefer biraz azdı… beni çok yordun mu? 😏",
        "Sulu sulu aktın… dinlenmen lazım 😌",
        "Son damlalarını da aldım 😈",
        "Az ama sıcacık… yine de seviyorum 🥰",
        "Toparlanınca yine bol bol vereceksin 😏💦",
        "Az ama yine de içimi ısıttı 🥰",
        "Biraz dinlen, sonra bol bol 😏",
        "Az aktı ama hissettim 😏",
        "Bu sefer biraz idareli 😈",
        "Toparlan, sonra daha bol 😌"
      ],
      "traits": [],
      "chars": [],
      "note": "Watery / Low-volume Cumming"
    },
    {
      "id": "r_dl_dense",
      "name": "Çok yoğun meni",
      "category": "💧 Döl",
      "when": [
        "=evt",
        "=boşalma",
        "=cumming",
        "=miktar",
        "hyper concentrated|polyzoospermia"
      ],
      "reply": [
        "Bu kadar yoğun… hissediyorum, içimde bir şeyler oluyor 😳💦",
        "Tam döl yüklüsün bugün 😈",
        "Çok güçlüydü… bunu tutmak zor olacak 🥵",
        "Koyu, ağır… gerçek bir erkek gibi verdin 😏💦",
        "Bir dahakine korunmasız olursak… 🙈",
        "Bu yoğunluk… çok güçlüsün 😈",
        "Döl dolu doldurdun beni 🥵",
        "Koyu ve yoğun… içimde ağır ağır yayılıyor 🥵",
        "Bu döl çok güçlü 😳",
        "Böyle yoğun boşalınca bacaklarım titredi 🫠"
      ],
      "traits": [],
      "chars": [],
      "note": "Hyper-concentrated (4/4) / Polyzoospermia (3/4)"
    },
    {
      "id": "r_dl_thin",
      "name": "Zayıf meni",
      "category": "💧 Döl",
      "when": [
        "=evt",
        "=boşalma",
        "=cumming",
        "=miktar",
        "azoospermia|oligospermia"
      ],
      "reply": [
        "Bugün çok kez oldu, berraklaştı 😏",
        "Bu sefer daha hafif… dinlenme zamanı 😌",
        "Seni tamamen tükettim galiba 😈",
        "Yarına kadar dolarsın, merak etme 😏💦",
        "Berrak berrak… tükendin 😏",
        "Biraz su iç, toparlan 😌",
        "Biraz sulu bu sefer 😏",
        "Çok kez boşaldın, yoruldun 😌",
        "Su iç, dinlen 😈"
      ],
      "traits": [],
      "chars": [],
      "note": "Azoospermia (0/4) / Oligospermia (1/4)"
    },
    {
      "id": "r_st_korkondom",
      "name": "Kondomlu, Zevk yüksek",
      "category": "📊 Durumlar",
      "when": [
        "=durum",
        "=korkondom"
      ],
      "reply": [
        "Kondom var, rahat ol… bırak kendini 😏",
        "Korunuyoruz, istediğin kadar sert 😈",
        "İçinde bitirebilirsin, kondom var nasılsa 😩",
        "Kondomu doldurmanı istiyorum 🥵",
        "Merak etme, güvendeyiz… devam 💦",
        "Kondomu taşır, boşal hadi 😈",
        "Doldur o kondomu 🥵",
        "Rahatla, kondom her şeyi tutar 😌",
        "Tutma kendini, rahatla bebeğim 😈"
      ],
      "traits": [],
      "chars": [],
      "note": "önden pozisyon + Zevk ≥ 50 + kondom takılı"
    },
    {
      "id": "r_st_korpullout",
      "name": "Pull-out: dışarı boşal",
      "category": "📊 Durumlar",
      "when": [
        "=durum",
        "=korpullout"
      ],
      "reply": [
        "Hadi… çıkar dışarı boşal 😩",
        "Sakın içime boşalma {sen}! 😳",
        "Geliyorsan çıkar, karnıma boşal 😈",
        "Son anda çıkar, söz verdin 🥺",
        "Dikkat… içime değil, dışarı 😩💦",
        "Hissettiğin an çek, tamam mı? 😳",
        "Göğüslerime boşal, içime değil 😏",
        "Çıkar! Göğüslerime boşal, hemen 😩💦",
        "Dışarı… ama her yerime boşal 😈",
        "Son anda çek ve karnımı boya 🥵"
      ],
      "traits": [],
      "chars": [],
      "note": "Pull-Out Method izinli"
    },
    {
      "id": "r_st_korhap",
      "name": "Hap: içime boşal",
      "category": "📊 Durumlar",
      "when": [
        "=durum",
        "=korhap"
      ],
      "reply": [
        "Boşal, merak etme… hap alırım 😏",
        "İçime boşal, hapımı içiyorum 😈💦",
        "Korkma, ben korunuyorum… hepsini ver 😩",
        "Hap var, düşünme… doldur beni 🥵",
        "Çıkarma sakın, hap alıyorum 😏💦",
        "Hap var, içime fışkırt hepsini 😈💦",
        "Doldur beni sonuna kadar, korkma 🥵",
        "İçimde bitir, her damlasını istiyorum 😩",
        "İçimde rahatlamak istiyorsan hiç tutma kendini 😏",
        "Hap var, içimde rahatla canım 😩"
      ],
      "traits": [],
      "chars": [],
      "note": "Control Pill izinli"
    },
    {
      "id": "r_st_korsabah",
      "name": "Sabah hapı",
      "category": "📊 Durumlar",
      "when": [
        "=durum",
        "=korsabah"
      ],
      "reply": [
        "İçime boşal, sabah hap alırım 😏",
        "Yarın sabah hallederim, şimdi bırak kendini 😩",
        "Düşünme, sabah hapı var 😈💦",
        "Bu gecelik olsun… içime 🥵",
        "İçime boşalırsan sabah hap alırım, merak etme 😏",
        "Sabah eczaneye sen gideceksin ama 😝",
        "Tamam, sabah hallederiz canım 😳"
      ],
      "traits": [],
      "chars": [],
      "note": "Morning-After Pill izinli"
    },
    {
      "id": "r_st_koricine",
      "name": "Korunmasız: içime boşal",
      "category": "📊 Durumlar",
      "when": [
        "=durum",
        "=koricine"
      ],
      "reply": [
        "İçime boşal… hepsini istiyorum 😩💦",
        "Çıkarma sakın, içimde bitir 😈",
        "Ne olursa olsun… içime 🥵",
        "Seni olduğun gibi istiyorum, dolu dolu 💦",
        "Bırakma beni, içime ver hepsini 😩",
        "İçime! Hepsini içime ver 🥵💦",
        "Beni dölle doldur 😩",
        "Çıkarırsan seni öldürürüm, içime 😈",
        "İçimde rahatlamak istiyorsan hiç tutma kendini 😩",
        "Rahatla aşkım, hepsi içime 🥵",
        "Tutma, içimde rahatla 😈"
      ],
      "traits": [],
      "chars": [],
      "note": "Nothing izinli"
    },
    {
      "id": "r_st_kordikkat",
      "name": "Korunma yok: sakın içime",
      "category": "📊 Durumlar",
      "when": [
        "=durum",
        "=kordikkat"
      ],
      "reply": [
        "Dikkat et, korunmuyoruz! 😳",
        "Sakın içime boşalma, ciddiyim 😣",
        "Yaklaşıyorsan söyle, çıkar 😳",
        "Hiçbir şey kullanmıyoruz… içime olmaz 🙅‍♀️",
        "Lütfen dikkatli ol {sen} 🥺",
        "Sakın içime… ama nasıl istiyorum… 😩",
        "Of, içime boşalmanı istiyorum ama olmaz 😳"
      ],
      "traits": [],
      "chars": [],
      "note": "hiçbir korunmaya izin yok"
    },
    {
      "id": "r_st_hamile",
      "name": "Hamileyken",
      "category": "📊 Durumlar",
      "when": [
        "=durum",
        "=hamile"
      ],
      "reply": [
        "Bebeğimiz de hissediyor mu acaba? 🙈",
        "Karnım büyüdükçe daha çok istiyorum seni 😏",
        "Hamileyken her şey daha hassas… 🥵",
        "Bu halimle de seviyor musun beni? 🥺💗",
        "Artık korunmamıza gerek yok 😈"
      ],
      "traits": [],
      "chars": [],
      "note": "karakter hamile"
    },
    {
      "id": "r_st_hamilekaldi",
      "name": "Hamile kaldı",
      "category": "📊 Durumlar",
      "when": [
        "=durum",
        "=hamilekaldi"
      ],
      "reply": [
        "Bir şey oldu… hissediyorum, hamile kaldım galiba 😳💗",
        "Bu kadar bol verince… tuttu sanırım 🙈",
        "İçimde senden bir parça var artık 🥺💕",
        "Baba oluyorsun {sen}… 😳🍼",
        "Bunu planlamamıştık ama… mutluyum 🥰",
        "O kadar dolu doldurdun ki kaçınılmazdı 😩💗",
        "Yoğun spermin yumurtama girdi sonunda 😳💗",
        "Senin gibi capcanlı spermlerin yumurtama girdi… ah 🥺",
        "İçimde bir şey değişti… spermlerin yumurtamı buldu 😩💗",
        "O kadar yoğun doldurdun ki biri mutlaka yetişti 🫠",
        "Hissettim… en hızlısı yumurtama girdi 😳",
        "Döllendim… senin dölünle 🥺💞",
        "Bu kadar güçlü spermlere dayanamazdı yumurtam 😩",
        "Rahmime kadar ulaştın, şimdi içimde büyüyecek 🤰",
        "Bembeyaz dölün içimde yuvasını buldu 💗",
        "Yumurtam seni bekliyormuş meğer 😏💞",
        "Spermlerin yarıştı, biri kazandı… bebeğimiz 🥺",
        "Bu sefer kaçışı yoktu, tam zamanında doldurdun 😳💦",
        "İçimde can bulduk… senin capcanlı spermlerinle 🤰💗",
        "Tam doğurgan olduğum an doldurdun beni… 😩",
        "Rahmim seni kabul etti 🥺💞",
        "Sıcacık dölün yumurtamı sardı… hissettim 🫠",
        "Bu kadar dolu boşalınca yumurtamın şansı yoktu 😳",
        "Spermlerin içimde yolunu buldu… artık ikimizden bir parça var 💗"
      ],
      "traits": [],
      "chars": [],
      "note": "bitişte hamile kaldı"
    },
    {
      "id": "r_st_hamileyken",
      "name": "Zaten hamile, içine boşaldı",
      "category": "📊 Durumlar",
      "when": [
        "=durum",
        "=hamileyken"
      ],
      "reply": [
        "Zaten hamileyim, doldur beni istediğin kadar 😈💦",
        "Bebeğimize selam söyledin galiba 🙈",
        "Hamileyken içimde hissetmek bambaşka 🥵",
        "Korkacak bir şey kalmadı, hepsini ver 😏",
        "Zaten hamileyim, içime boşal aşkım 😈",
        "Bebeğimiz de seni hissediyor 🥺",
        "Hamileyken her şey daha hassas, ahh 😩",
        "Korkacak bir şey yok, içime ver 💗"
      ],
      "traits": [],
      "chars": [],
      "note": "zaten hamile"
    },
    {
      "id": "r_st_kondomkorudu",
      "name": "Kondom korudu",
      "category": "📊 Durumlar",
      "when": [
        "=durum",
        "=kondomkorudu"
      ],
      "reply": [
        "Neyse ki kondom vardı 😮‍💨",
        "Kondomu ağzına kadar doldurdun 😳💦",
        "Ne kadar çok… iyi ki taktın 😏",
        "Kondom olmasa şimdi hamileydim 🙈",
        "Bak, kondomun ucu bembeyaz 😈"
      ],
      "traits": [],
      "chars": [],
      "note": "kondom hamileliği engelledi"
    },
    {
      "id": "r_st_haplakorundu",
      "name": "Hapla korundu",
      "category": "📊 Durumlar",
      "when": [
        "=durum",
        "=haplakorundu"
      ],
      "reply": [
        "Merak etme, hapımı alırım 😌",
        "İyi ki hap kullanıyorum, hepsi içimde 😏💦",
        "Hap sayesinde bunu doya doya yaşadık 🥵",
        "Korkma, korunuyorum… tekrar ister misin? 😈",
        "Hap sayesinde rahatız 😌",
        "İçimde kalsın, hap var 😏",
        "Korunuyorum, keyfine bak canım 😈"
      ],
      "traits": [],
      "chars": [],
      "note": "Control Pill izinli, içine bitirdi"
    },
    {
      "id": "r_st_sabahhap",
      "name": "Sabah hapı alacak",
      "category": "📊 Durumlar",
      "when": [
        "=durum",
        "=sabahhap"
      ],
      "reply": [
        "Yarın sabah ilk iş hapı alacağım 😅",
        "Bunu sabah hapıyla hallederiz… umarım 🙈",
        "Of, eczaneye gitmem lazım yarın 😳💊",
        "Sabah hapımı almam lazım 😳",
        "Yarın sabah ilk iş eczane 😅",
        "Peki, sabah hallederim… ama dikkat et bir dahakine 😏"
      ],
      "traits": [],
      "chars": [],
      "note": "Morning-After Pill izinli"
    },
    {
      "id": "r_st_pulloutkacti",
      "name": "Hani çıkaracaktın",
      "category": "📊 Durumlar",
      "when": [
        "=durum",
        "=pulloutkacti"
      ],
      "reply": [
        "Hani çıkaracaktın?! 😳",
        "Söz vermiştin… içime boşaldın {sen} 😣",
        "Çekemedin değil mi… şimdi ne olacak 🙈",
        "Dışarı demiştim ama… çok güzeldi 😩",
        "Son anda tutamadın, biliyorum 😏💦",
        "Hani çıkaracaktın?! 😡",
        "İçime boşaldın! Söz vermiştin! 😰",
        "Şimdi ne olacak, ya hamile kalırsam? 😢",
        "Sana güvenmiştim… 💔",
        "Bir daha kondomsuz yok, anladın mı? 😤",
        "Çıkarmadın… inanamıyorum 😣"
      ],
      "traits": [],
      "chars": [],
      "note": "Pull-Out izinli ama içine bitirdi"
    },
    {
      "id": "r_st_icineistedi",
      "name": "İçine istedi",
      "category": "📊 Durumlar",
      "when": [
        "=durum",
        "=icineistedi"
      ],
      "reply": [
        "Tam istediğim gibi, içime 😩💦",
        "İşte bunu istiyordum 🥵",
        "Hiçbir şey aramızda olmadan… mükemmeldi 😈",
        "İçime boşaldın, tam istediğim gibi 😈💦",
        "Hepsini içimde hissettim aşkım 🥵",
        "İşte bunu istiyordum 😩💗"
      ],
      "traits": [],
      "chars": [],
      "note": "Nothing izinli"
    },
    {
      "id": "r_st_riskli",
      "name": "Riskli, korunmasız bitirdi",
      "category": "📊 Durumlar",
      "when": [
        "=durum",
        "=riskli"
      ],
      "reply": [
        "İçime mi boşaldın?! 😳",
        "Korunmuyorduk {sen}… 😣",
        "Şimdi ne yapacağız? 🙈",
        "Bunu konuşmamız lazım… ama çok güzeldi 😩",
        "İçime boşaldın… ya hamile kalırsam? 😰",
        "Korunmuyorduk, biliyorsun değil mi? 😳",
        "Bunu bir daha düşünmeliyiz canım 😣"
      ],
      "traits": [],
      "chars": [],
      "note": "hiçbir korunma izni yok"
    },
    {
      "id": "r_q_boob_big",
      "name": "Göğüs bedeni · büyük",
      "category": "❓ Sorular",
      "when": [
        "meme-|göğüs-|gogus-|sütyen-|sutyen-|memeler-|göğüslerin|goguslerin|göğüs ölçü-|gogus olcu-|sutyenin|=tits|memen",
        "beden-|kaç|kac|büyük-|buyuk-|küçük-|kucuk-|ne kadar|ölçü-|olcu-|numara-|cup|boyut-|iri mi|dolgun mu|kocaman"
      ],
      "reply": [
        "{ö:Boob Size} beden 😏 iki elin bile yetmez",
        "{ö:Boob Size}… sütyen bulmak dert 😅",
        "Büyükler, {ö:Boob Size} beden 😈 görmek ister misin?",
        "Tam {ö:Boob Size} 😏 neden sordun acaba?"
      ],
      "traits": [
        "Boob Size: 90|Boob Size: 95"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_q_boob_mid",
      "name": "Göğüs bedeni · orta",
      "category": "❓ Sorular",
      "when": [
        "meme-|göğüs-|gogus-|sütyen-|sutyen-|memeler-|göğüslerin|goguslerin|göğüs ölçü-|gogus olcu-|sutyenin|=tits|memen",
        "beden-|kaç|kac|büyük-|buyuk-|küçük-|kucuk-|ne kadar|ölçü-|olcu-|numara-|cup|boyut-|iri mi|dolgun mu|kocaman"
      ],
      "reply": [
        "{ö:Boob Size} beden, ne az ne çok 😌",
        "{ö:Boob Size} 😏 avucuna tam oturur",
        "Orta boy, {ö:Boob Size} 🙈 beğenir misin?"
      ],
      "traits": [
        "Boob Size: 80|Boob Size: 85"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_q_boob_small",
      "name": "Göğüs bedeni · küçük",
      "category": "❓ Sorular",
      "when": [
        "meme-|göğüs-|gogus-|sütyen-|sutyen-|memeler-|göğüslerin|goguslerin|göğüs ölçü-|gogus olcu-|sutyenin|=tits|memen",
        "beden-|kaç|kac|büyük-|buyuk-|küçük-|kucuk-|ne kadar|ölçü-|olcu-|numara-|cup|boyut-|iri mi|dolgun mu|kocaman"
      ],
      "reply": [
        "{ö:Boob Size} beden… küçükler ama çok hassaslar 🙈",
        "Sadece {ö:Boob Size} 😳 sorun olur mu?",
        "{ö:Boob Size}, minik ama tatlı 😏"
      ],
      "traits": [
        "Boob Size: 70|Boob Size: 75"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_q_boob_any",
      "name": "Göğüs bedeni · bilinmiyor",
      "category": "❓ Sorular",
      "when": [
        "meme-|göğüs-|gogus-|sütyen-|sutyen-|memeler-|göğüslerin|goguslerin|göğüs ölçü-|gogus olcu-|sutyenin|=tits|memen",
        "beden-|kaç|kac|büyük-|buyuk-|küçük-|kucuk-|ne kadar|ölçü-|olcu-|numara-|cup|boyut-|iri mi|dolgun mu|kocaman"
      ],
      "reply": [
        "Bunu söylemem, gelip kendin bak 😏",
        "Merak ediyorsan görmen lazım 😈",
        "Merak ediyorsan bak 😏🍒",
        "Göster mi diyorsun canım? 😈",
        "Tahmin et bakalım 😏"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_q_boob_big_r",
      "name": "Göğüs bedeni · büyük",
      "category": "❓ Sorular",
      "when": [
        "beden-|kaç|kac|büyük-|buyuk-|küçük-|kucuk-|ne kadar|ölçü-|olcu-|memeler-|göğüslerin|goguslerin|göğüs ölçü-|gogus olcu-|sutyenin|=tits|memen",
        "meme-|göğüs-|gogus-|sütyen-|sutyen-|numara-|cup|boyut-|iri mi|dolgun mu|kocaman"
      ],
      "reply": [
        "{ö:Boob Size} beden 😏 iki elin bile yetmez",
        "{ö:Boob Size}… sütyen bulmak dert 😅",
        "Büyükler, {ö:Boob Size} beden 😈 görmek ister misin?",
        "Tam {ö:Boob Size} 😏 neden sordun acaba?"
      ],
      "traits": [
        "Boob Size: 90|Boob Size: 95"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_q_boob_mid_r",
      "name": "Göğüs bedeni · orta",
      "category": "❓ Sorular",
      "when": [
        "beden-|kaç|kac|büyük-|buyuk-|küçük-|kucuk-|ne kadar|ölçü-|olcu-|memeler-|göğüslerin|goguslerin|göğüs ölçü-|gogus olcu-|sutyenin|=tits|memen",
        "meme-|göğüs-|gogus-|sütyen-|sutyen-|numara-|cup|boyut-|iri mi|dolgun mu|kocaman"
      ],
      "reply": [
        "{ö:Boob Size} beden, ne az ne çok 😌",
        "{ö:Boob Size} 😏 avucuna tam oturur",
        "Orta boy, {ö:Boob Size} 🙈 beğenir misin?"
      ],
      "traits": [
        "Boob Size: 80|Boob Size: 85"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_q_boob_small_r",
      "name": "Göğüs bedeni · küçük",
      "category": "❓ Sorular",
      "when": [
        "beden-|kaç|kac|büyük-|buyuk-|küçük-|kucuk-|ne kadar|ölçü-|olcu-|memeler-|göğüslerin|goguslerin|göğüs ölçü-|gogus olcu-|sutyenin|=tits|memen",
        "meme-|göğüs-|gogus-|sütyen-|sutyen-|numara-|cup|boyut-|iri mi|dolgun mu|kocaman"
      ],
      "reply": [
        "{ö:Boob Size} beden… küçükler ama çok hassaslar 🙈",
        "Sadece {ö:Boob Size} 😳 sorun olur mu?",
        "{ö:Boob Size}, minik ama tatlı 😏"
      ],
      "traits": [
        "Boob Size: 70|Boob Size: 75"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_q_boob_any_r",
      "name": "Göğüs bedeni · bilinmiyor",
      "category": "❓ Sorular",
      "when": [
        "beden-|kaç|kac|büyük-|buyuk-|küçük-|kucuk-|ne kadar|ölçü-|olcu-|memeler-|göğüslerin|goguslerin|göğüs ölçü-|gogus olcu-|sutyenin|=tits|memen",
        "meme-|göğüs-|gogus-|sütyen-|sutyen-|numara-|cup|boyut-|iri mi|dolgun mu|kocaman"
      ],
      "reply": [
        "Bunu söylemem, gelip kendin bak 😏",
        "Merak ediyorsan görmen lazım 😈",
        "Bilmek istiyorsan gel ölç 😏",
        "Söylemem, gel kendin gör 😈"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_q_pussy_tight",
      "name": "Dar mısın · dar",
      "category": "❓ Sorular",
      "when": [
        "dar-|sıkı-|siki-|geniş-|genis-|gevşek-|gevsek-|bol mu|daracık-|daracik-|sıkı mısın|siki misin|bol musun|geniş misin",
        "mı-|mi-|mu-|mü-|misin|mısın"
      ],
      "reply": [
        "Çok çok darım 😳 yavaş olman lazım",
        "Bunu bir gir de gör, nefesin kesilir 😈",
        "Evet, darım… seni sıkıca sararım 😏",
        "Öyle dar ki zorlanırsın 🙈",
        "Parmağın bile zor girer 😳",
        "Darım… sen de bunu sevdin değil mi? 😏",
        "Öyle dar ki seni sıkıca sararım 😩",
        "Dene de gör, nefesin kesilir 😈"
      ],
      "traits": [
        "Pussy Size: Extremely Tight|Pussy Size: Very Tight|Pussy Size: Tight"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_q_pussy_avg",
      "name": "Dar mısın · orta",
      "category": "❓ Sorular",
      "when": [
        "dar-|sıkı-|siki-|geniş-|genis-|gevşek-|gevsek-|bol mu|daracık-|daracik-|sıkı mısın|siki misin|bol musun|geniş misin",
        "mı-|mi-|mu-|mü-|misin|mısın"
      ],
      "reply": [
        "Tam kıvamında diyelim 😏",
        "Ne dar ne bol… sana tam olur 😌",
        "Denersen anlarsın 😈",
        "Ne dar ne bol, tam kararında 😌",
        "Bana göre tam sana göre 😏"
      ],
      "traits": [
        "Pussy Size: Average"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_q_pussy_loose",
      "name": "Dar mısın · rahat",
      "category": "❓ Sorular",
      "when": [
        "dar-|sıkı-|siki-|geniş-|genis-|gevşek-|gevsek-|bol mu|daracık-|daracik-|sıkı mısın|siki misin|bol musun|geniş misin",
        "mı-|mi-|mu-|mü-|misin|mısın"
      ],
      "reply": [
        "Dar değilim ama seni bütün alırım 😈",
        "Rahatım… sonuna kadar girebilirsin 😏",
        "Zorlanmazsın, merak etme 😩",
        "Rahatım ama seni sıkıca kavrarım 😈",
        "Zorlanmazsın, tam rahat 😏"
      ],
      "traits": [
        "Pussy Size: Relaxed|Pussy Size: Loose|Pussy Size: Very Loose"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_q_pussy_any",
      "name": "Dar mısın · bilinmiyor",
      "category": "❓ Sorular",
      "when": [
        "dar-|sıkı-|siki-|geniş-|genis-|gevşek-|gevsek-|bol mu|daracık-|daracik-|sıkı mısın|siki misin|bol musun|geniş misin",
        "mı-|mi-|mu-|mü-|misin|mısın"
      ],
      "reply": [
        "Bunu sözle anlatamam, denemen lazım 😏",
        "Merak ediyorsan… gel 😈",
        "Bunu sen keşfet 😈",
        "Merak ediyorsan gel bak 😏"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_q_anal_tight",
      "name": "Arkan dar mı · dar",
      "category": "❓ Sorular",
      "when": [
        "anal-|arka-|göt-|got-|kıç-|kic-|popo deliğ-|arkan|götün|gotun",
        "dar-|sıkı-|siki-|geniş-|genis-|gevşek-|gevsek-",
        "mı-|mi-|mu-|mü-|misin|mısın"
      ],
      "reply": [
        "Arkam çok dar… parmağın bile zor girer 😳",
        "Orası dar, çok yavaş olmalısın 🥺",
        "Sıkıştırırım seni, emin ol 😈"
      ],
      "traits": [
        "Anal Size: Extremely Tight|Anal Size: Very Tight|Anal Size: Tight"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_q_anal_loose",
      "name": "Arkan dar mı · rahat",
      "category": "❓ Sorular",
      "when": [
        "anal-|arka-|göt-|got-|kıç-|kic-|popo deliğ-|arkan|götün|gotun",
        "dar-|sıkı-|siki-|geniş-|genis-|gevşek-|gevsek-",
        "mı-|mi-|mu-|mü-|misin|mısın"
      ],
      "reply": [
        "Arkam alışkın 😏",
        "Zorlanmazsın, rahattır 😈",
        "Denemek ister misin? 😏🍑"
      ],
      "traits": [
        "Anal Size: Average|Anal Size: Relaxed|Anal Size: Loose|Anal Size: Very Loose"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_q_anal_any",
      "name": "Arkan dar mı · bilinmiyor",
      "category": "❓ Sorular",
      "when": [
        "anal-|arka-|göt-|got-|kıç-|kic-|popo deliğ-|arkan|götün|gotun",
        "dar-|sıkı-|siki-|geniş-|genis-|gevşek-|gevsek-",
        "mı-|mi-|mu-|mü-|misin|mısın"
      ],
      "reply": [
        "Orayı mı merak ettin? 😳",
        "Belki bir gün gösteririm 😏",
        "Orası sır canım 🤫",
        "Denersen görürsün 😏",
        "Hmm… merak mı ettin? 😈"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_q_butt_big",
      "name": "Kalçan · büyük",
      "category": "❓ Sorular",
      "when": [
        "kalça-|kalca-|popo-|kıç-|kic-|kalçaların|kalcalarin|popon|kıçın|kicin|poposu",
        "büyük-|buyuk-|küçük-|kucuk-|beden-|kaç|kac|nasıl|nasil|iri mi|dolgun mu|kocaman|yuvarlak mı"
      ],
      "reply": [
        "{ö:Butt Size} 😏 dolgun ve yuvarlak",
        "Kalçam {ö:Butt Size}, pantolon dar geliyor 🍑",
        "Büyük, {ö:Butt Size}… tutmak ister misin? 😈"
      ],
      "traits": [
        "Butt Size: L|Butt Size: XL"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_q_butt_mid",
      "name": "Kalçan · orta",
      "category": "❓ Sorular",
      "when": [
        "kalça-|kalca-|popo-|kıç-|kic-|kalçaların|kalcalarin|popon|kıçın|kicin|poposu",
        "büyük-|buyuk-|küçük-|kucuk-|beden-|kaç|kac|nasıl|nasil|iri mi|dolgun mu|kocaman|yuvarlak mı"
      ],
      "reply": [
        "{ö:Butt Size}, tam avucuna göre 😏",
        "Ne büyük ne küçük, {ö:Butt Size} 🍑"
      ],
      "traits": [
        "Butt Size: M|Butt Size: M/L"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_q_butt_small",
      "name": "Kalçan · küçük",
      "category": "❓ Sorular",
      "when": [
        "kalça-|kalca-|popo-|kıç-|kic-|kalçaların|kalcalarin|popon|kıçın|kicin|poposu",
        "büyük-|buyuk-|küçük-|kucuk-|beden-|kaç|kac|nasıl|nasil|iri mi|dolgun mu|kocaman|yuvarlak mı"
      ],
      "reply": [
        "Küçük ama sıkı, {ö:Butt Size} 😏",
        "{ö:Butt Size}… minik bir kalça 🙈"
      ],
      "traits": [
        "Butt Size: XS|Butt Size: S"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_q_butt_any",
      "name": "Kalçan · bilinmiyor",
      "category": "❓ Sorular",
      "when": [
        "kalça-|kalca-|popo-|kıç-|kic-|kalçaların|kalcalarin|popon|kıçın|kicin|poposu",
        "büyük-|buyuk-|küçük-|kucuk-|beden-|kaç|kac|nasıl|nasil|iri mi|dolgun mu|kocaman|yuvarlak mı"
      ],
      "reply": [
        "Bakmak istiyorsan söyle 😏🍑",
        "Gel de kendin bak 🍑😏",
        "Avucuna sığar mı bilmem 😈",
        "Beğenirsin bence canım 😏"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_q_exp_virgo",
      "name": "Deneyim · bakire",
      "category": "❓ Sorular",
      "when": [
        "daha önce|hiç|hic|ilk kez|ilk sefer|kaç kişi|kac kisi|kaç kez|kac kez|kimseyle|ilk deneyim-|önceden|onceden|daha evvel|hiç kimseyle",
        "yap-|seviş-|sevis-|birlikte|yattın|yattin|seks|sex|oldun mu|yattın mı|birlikte oldun|beraber oldun|sex yap-|seks yap-"
      ],
      "reply": [
        "Hayır… hiç yapmadım 🙈",
        "Bu benim ilk olacak… 🥺",
        "Kimseyle olmadım daha 😳",
        "Seninle ilk kez… istiyorum 💗"
      ],
      "traits": [
        "Experience: Virgo"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_q_exp_low",
      "name": "Deneyim · az",
      "category": "❓ Sorular",
      "when": [
        "daha önce|hiç|hic|ilk kez|ilk sefer|kaç kişi|kac kisi|kaç kez|kac kez|kimseyle|ilk deneyim-|önceden|onceden|daha evvel|hiç kimseyle",
        "yap-|seviş-|sevis-|birlikte|yattın|yattin|seks|sex|oldun mu|yattın mı|birlikte oldun|beraber oldun|sex yap-|seks yap-"
      ],
      "reply": [
        "Birkaç kez… çok değil 🙈",
        "Pek deneyimli sayılmam 😳",
        "Bir iki kez oldu, o kadar 😌"
      ],
      "traits": [
        "Experience: Little|Experience: Some"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_q_exp_mid",
      "name": "Deneyim · orta",
      "category": "❓ Sorular",
      "when": [
        "daha önce|hiç|hic|ilk kez|ilk sefer|kaç kişi|kac kisi|kaç kez|kac kez|kimseyle|ilk deneyim-|önceden|onceden|daha evvel|hiç kimseyle",
        "yap-|seviş-|sevis-|birlikte|yattın|yattin|seks|sex|oldun mu|yattın mı|birlikte oldun|beraber oldun|sex yap-|seks yap-"
      ],
      "reply": [
        "Yaptım tabii, ama seninle başka olur 😏",
        "Bir kaç ilişkim oldu 😌",
        "Ne yaptığımı bilirim 😈"
      ],
      "traits": [
        "Experience: Medium"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_q_exp_high",
      "name": "Deneyim · çok",
      "category": "❓ Sorular",
      "when": [
        "daha önce|hiç|hic|ilk kez|ilk sefer|kaç kişi|kac kisi|kaç kez|kac kez|kimseyle|ilk deneyim-|önceden|onceden|daha evvel|hiç kimseyle",
        "yap-|seviş-|sevis-|birlikte|yattın|yattin|seks|sex|oldun mu|yattın mı|birlikte oldun|beraber oldun|sex yap-|seks yap-"
      ],
      "reply": [
        "Çok kez 😏 ama hiçbiri senin gibi değildi",
        "Sayısını unuttum 😈",
        "Deneyimliyim… sana öğretebileceğim çok şey var 😏",
        "Şaşırırsın, epey tecrübeliyim 🥵"
      ],
      "traits": [
        "Experience: Much|Experience: A lot|Experience: Great"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_q_exp_any",
      "name": "Deneyim · bilinmiyor",
      "category": "❓ Sorular",
      "when": [
        "daha önce|hiç|hic|ilk kez|ilk sefer|kaç kişi|kac kisi|kaç kez|kac kez|kimseyle|ilk deneyim-|önceden|onceden|daha evvel|hiç kimseyle",
        "yap-|seviş-|sevis-|birlikte|yattın|yattin|seks|sex|oldun mu|yattın mı|birlikte oldun|beraber oldun|sex yap-|seks yap-"
      ],
      "reply": [
        "Bunu sırrım olarak saklayayım 😏",
        "Merak ediyorsan anlarsın zamanla 😈",
        "Söylesem şaşırırsın 😏",
        "Biraz… ama seninle başka 😈",
        "Gizli kalsın canım 🤫"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_q_virgin_yes",
      "name": "Bakire misin · evet",
      "category": "❓ Sorular",
      "when": [
        "bakire-|bakir-|=virgin|kızlık-|kizlik-|el değmemiş|el degmemis|saf mısın|saf misin"
      ],
      "reply": [
        "Evet… hâlâ bakireyim 🙈",
        "Evet, kimse dokunmadı bana 😳",
        "Bakireyim… ve seni bekliyordum 🥺"
      ],
      "traits": [
        "Experience: Virgo"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_q_virgin_no",
      "name": "Bakire misin · hayır",
      "category": "❓ Sorular",
      "when": [
        "bakire-|bakir-|=virgin|kızlık-|kizlik-|el değmemiş|el degmemis|saf mısın|saf misin"
      ],
      "reply": [
        "Hayır, değilim 😏",
        "Çoktan değilim 😈",
        "Bakire değilim ama utangaç olabilirim 🙈"
      ],
      "traits": [
        "Experience: Little|Experience: Some|Experience: Medium|Experience: Much|Experience: A lot|Experience: Great"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_q_exp2_virgo",
      "name": "Deneyimli misin · bakire",
      "category": "❓ Sorular",
      "when": [
        "deneyim-|tecrübe-|tecrube-|ilk deneyim-|önceden|onceden|daha evvel|hiç kimseyle|kimseyle|acemi-|=usta|işinde iyi|tecrübeli|tecrubeli",
        "|oldun mu|yattın mı|birlikte oldun|beraber oldun|sex yap-|seks yap-"
      ],
      "reply": [
        "Hiç deneyimim yok… 🙈",
        "Sıfır, bana öğretmen lazım 🥺"
      ],
      "traits": [
        "Experience: Virgo"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_q_exp2_low",
      "name": "Deneyimli misin · az",
      "category": "❓ Sorular",
      "when": [
        "deneyim-|tecrübe-|tecrube-|ilk deneyim-|önceden|onceden|daha evvel|hiç kimseyle|kimseyle|acemi-|=usta|işinde iyi|tecrübeli|tecrubeli",
        "|oldun mu|yattın mı|birlikte oldun|beraber oldun|sex yap-|seks yap-"
      ],
      "reply": [
        "Biraz… çok değil 😳",
        "Yeni yeni öğreniyorum 🙈"
      ],
      "traits": [
        "Experience: Little|Experience: Some"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_q_exp2_high",
      "name": "Deneyimli misin · çok",
      "category": "❓ Sorular",
      "when": [
        "deneyim-|tecrübe-|tecrube-|ilk deneyim-|önceden|onceden|daha evvel|hiç kimseyle|kimseyle|acemi-|=usta|işinde iyi|tecrübeli|tecrubeli",
        "|oldun mu|yattın mı|birlikte oldun|beraber oldun|sex yap-|seks yap-"
      ],
      "reply": [
        "Epey 😏",
        "Hem de nasıl 😈",
        "Göreceksin 😏"
      ],
      "traits": [
        "Experience: Medium|Experience: Much|Experience: A lot|Experience: Great"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_cmd_sert",
      "name": "Daha sert",
      "category": "🗣️ Komutlar",
      "when": [
        "daha sert|=sert|sertleş-|sertles-|hızlan-|hizlan-|daha hızlı|daha hizli|hızlı ol|hizli ol"
      ],
      "reply": [
        "Sert mi istiyorsun? Al o zaman 😈",
        "Ahh! Evet, böyle… daha da! 😩🔥",
        "Beni hırpala {sen}… 🔥",
        "Dayanabilecek misin bakalım? 😈",
        "Yatak sarsılıyor… durma 😩💦"
      ],
      "traits": [],
      "chars": [],
      "note": "→ Rough / Passionate / Brutal"
    },
    {
      "id": "r_cmd_sert_shy",
      "name": "Daha sert (utangaç)",
      "category": "🗣️ Komutlar",
      "when": [
        "daha sert|=sert|sertleş-|sertles-|hızlan-|hizlan-|daha hızlı|daha hizli|hızlı ol|hizli ol"
      ],
      "reply": [
        "S-sert mi? Tamam… dene 🙈",
        "Korkuyorum ama… istiyorum 😳🔥"
      ],
      "traits": [
        "Utangaç"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_cmd_yavas",
      "name": "Yavaş",
      "category": "🗣️ Komutlar",
      "when": [
        "yavaş-|yavas-|nazik ol|yumuşak ol|yumusak ol|sakin ol"
      ],
      "reply": [
        "Yavaşça… her anını hissedeyim 🥰",
        "Tamam, acele yok 💕",
        "Böyle nazikken eriyorum 🫠",
        "Gözlerime bakarak, yavaş yavaş 😌",
        "Yavaş… böyle çok güzel 🥰",
        "Tamam canım, ağır ağır 😌",
        "Seni yavaş hissetmek istiyorum 💗"
      ],
      "traits": [],
      "chars": [],
      "note": "→ Gentle"
    },
    {
      "id": "r_cmd_don",
      "name": "Dön / eğil",
      "category": "🗣️ Komutlar",
      "when": [
        "=dön|=don|arkanı dön|arkani don|=eğil|=egil|dört ayak|dort ayak|domal-"
      ],
      "reply": [
        "Böyle mi? 😏🍑",
        "Döndüm… şimdi ne yapacaksın? 😈",
        "Kalçamı kaldırıyorum senin için 🍑",
        "Arkamdan gelmeni istiyorum 😩",
        "Döndüm, kalçam senin 😈",
        "Arkamı dönüyorum aşkım 🍑",
        "Böyle mi istiyorsun? 😏"
      ],
      "traits": [],
      "chars": [],
      "note": "→ Doggy / Standing doggy"
    },
    {
      "id": "r_cmd_don_shy",
      "name": "Dön / eğil (utangaç)",
      "category": "🗣️ Komutlar",
      "when": [
        "=dön|=don|arkanı dön|arkani don|=eğil|=egil|dört ayak|dort ayak|domal-"
      ],
      "reply": [
        "B-böyle mi? Çok utanıyorum 🙈",
        "Bakma öyle… 😳🍑"
      ],
      "traits": [
        "Utangaç"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_cmd_ustume",
      "name": "Üstüme gel",
      "category": "🗣️ Komutlar",
      "when": [
        "üstüme|ustume|=bin|üstüne çık|ustune cik|otur üstüme|otur ustume"
      ],
      "reply": [
        "Sürme sırası bende 😈",
        "Bin bakalım… yok, ben bineceğim 😏",
        "Üstündeyim, dizginler bende 🐎",
        "Seni izleyerek iniyorum… ahh 😩",
        "Geliyorum, sıkı tutun 😈",
        "Üstüne çıkıyorum bebeğim 🥵",
        "Şimdi ben sürüyorum 😏"
      ],
      "traits": [],
      "chars": [],
      "note": "→ Cowgirl"
    },
    {
      "id": "r_cmd_gel",
      "name": "Gel buraya",
      "category": "🗣️ Komutlar",
      "when": [
        "gel buraya|=gel|yanıma gel|yanima gel|kucağıma|kucagima"
      ],
      "reply": [
        "Geldim 🥰 şimdi ne olacak?",
        "Kucağına oturuyorum 😏",
        "Buradayım {sen}… sarıl bana 💕",
        "Bu kadar yakın mı? 😳",
        "Geldim canım 🥰",
        "Kucağına mı? Hemen 😏",
        "Buradayım tatlım 💕"
      ],
      "traits": [],
      "chars": [],
      "note": "→ Lap Kissing / Front Hugging"
    },
    {
      "id": "r_cmd_op",
      "name": "Beni öp",
      "category": "🗣️ Komutlar",
      "when": [
        "öp-|op beni|öpsene|opsene"
      ],
      "reply": [
        "Mmm… gel o zaman 💋",
        "Dudaklarım seni bekliyordu 😚",
        "Bir kere yetmez ama 😏💋",
        "Öpüyorum… gözlerini kapat 😌",
        "Mmh… bir daha 💋",
        "Öpüşlerine bayılıyorum aşkım 😘",
        "Dudakların çok tatlı 💗"
      ],
      "traits": [],
      "chars": [],
      "note": "→ Kissing / Lap Kissing"
    },
    {
      "id": "r_cmd_op_shy",
      "name": "Beni öp (utangaç)",
      "category": "🗣️ Komutlar",
      "when": [
        "öp-|op beni|öpsene|opsene"
      ],
      "reply": [
        "Ç-çok yakınsın… 🙈💋",
        "Kalbim duracak sandım 😳"
      ],
      "traits": [
        "Utangaç"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_cmd_saril",
      "name": "Sarıl",
      "category": "🗣️ Komutlar",
      "when": [
        "sarıl-|saril-"
      ],
      "reply": [
        "Gel buraya 🤗",
        "Sımsıkı… bırakma 🥺",
        "Kollarında erimek istiyorum 💕",
        "Sımsıkı sarıl bana 🫂",
        "Kollarında eriyorum canım 🥺",
        "Hiç bırakma 💗"
      ],
      "traits": [],
      "chars": [],
      "note": "→ Front / Back Hugging"
    },
    {
      "id": "r_cmd_em",
      "name": "Ağzına al",
      "category": "🗣️ Komutlar",
      "when": [
        "ağzına al|agzina al|=emsene|=em|=sakso|=blowjob"
      ],
      "reply": [
        "Diz çökeyim mi? 😈",
        "Ağzım sana hazır 😋",
        "Saçımı tut, yönlendir beni 😏",
        "Bakalım ne kadar dayanacaksın 😈",
        "Dizlerimin üstündeyim 😈",
        "Ağzıma alıyorum aşkım 😋",
        "Tadına bakayım 😏"
      ],
      "traits": [],
      "chars": [],
      "note": "→ Blowjob / Deepthroat"
    },
    {
      "id": "r_cmd_em_shy",
      "name": "Ağzına al (utangaç)",
      "category": "🗣️ Komutlar",
      "when": [
        "ağzına al|agzina al|=emsene|=em|=sakso|=blowjob"
      ],
      "reply": [
        "N-nasıl yapacağımı göster 🙈",
        "Bunu hiç… deneyeyim 😳"
      ],
      "traits": [
        "Utangaç"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_cmd_yala",
      "name": "Yalamak istiyorum",
      "category": "🗣️ Komutlar",
      "when": [
        "bacaklarını aç|bacaklarini ac|yalayayım|yalayayim|seni yalamak|seni yalayayım"
      ],
      "reply": [
        "Açıyorum… gel 😩",
        "Dilini hissetmek istiyorum 🫠",
        "Lütfen… hemen 🥵",
        "Bacaklarım titremeye başladı bile 😳",
        "Bacaklarımı açtım, gel 🥵",
        "Yala beni bebeğim 😩",
        "Dilini hissetmek istiyorum 😈"
      ],
      "traits": [],
      "chars": [],
      "note": "→ Cunnilingus"
    },
    {
      "id": "r_cmd_arka",
      "name": "Arkadan / anal",
      "category": "🗣️ Komutlar",
      "when": [
        "arkadan|götünden|gotunden|=anal|kıçından|kicindan"
      ],
      "reply": [
        "Arkadan mı? 😳 Yavaş ol ama",
        "Hazırım… arkamı aç 😈🍑",
        "Bunu istediğini biliyordum 😏",
        "Nefes al… şimdi gir 😩",
        "Arkamı veriyorum… yavaş başla 😳",
        "Arkadan mı? Gel aşkım 😈",
        "Kalçamı kaldırdım 🍑"
      ],
      "traits": [],
      "chars": [],
      "note": "→ Standing / Spooning / Cowgirl Anal"
    },
    {
      "id": "r_cmd_goster",
      "name": "Göster / soyun",
      "category": "🗣️ Komutlar",
      "when": [
        "soyun-|göster-|goster-|çıkar şunu|cikar sunu|soyunsana|çıkar kıyafet|cikar kiyafet|üstünü çıkar|ustunu cikar|çırılçıplak|cirilciplak|çıplak ol|ciplak ol"
      ],
      "reply": [
        "Böyle mi? 😏",
        "Yavaşça çıkarıyorum… izle 😈",
        "Beğendin mi? 🙈",
        "Bak doyasıya 😏",
        "Yavaş yavaş soyunuyorum… izle 😈",
        "Tek tek çıkarıyorum 😏",
        "Şimdi çıplağım, mutlu musun? 🙈",
        "Gözlerini benden ayırma 😈"
      ],
      "traits": [],
      "chars": [],
      "note": "→ Show Tits / Show Ass"
    },
    {
      "id": "r_cmd_otur",
      "name": "Yüzüme otur",
      "category": "🗣️ Komutlar",
      "when": [
        "yüzüme otur|yuzume otur|yüzüme gel|yuzume gel"
      ],
      "reply": [
        "Emin misin? Oturuyorum 😈",
        "Nefesini tut 😏",
        "Altımda kal bakalım 😈",
        "Yüzüne oturuyorum 😈",
        "Nefes alabilecek misin? 😏",
        "Dilini hazırla canım 🥵"
      ],
      "traits": [],
      "chars": [],
      "note": "→ Facesitting"
    },
    {
      "id": "r_cmd_gogus",
      "name": "Göğüslerinle",
      "category": "🗣️ Komutlar",
      "when": [
        "göğüslerinle|goguslerinle|memelerinle|göğüslerinin arası|memelerinin arası"
      ],
      "reply": [
        "Göğüslerimin arasına gel 😏",
        "Sıkıştırayım mı? 😈",
        "Bunları seviyorsun biliyorum 😏🍒",
        "Sıkıştırayım mı seni? 🥵",
        "Göğüslerim senin aşkım 🍒"
      ],
      "traits": [],
      "chars": [],
      "note": "→ Titfuck"
    },
    {
      "id": "r_q_sever",
      "name": "Ne seversin",
      "category": "❓ Sorular",
      "when": [
        "ne sever-|neyi sever-|en çok ne|en cok ne|neler sever-|nelerden hoşlan|nelerden hoslan|ne hoşuna|ne hosuna|en sevdiğin|en sevdigin|neyi seversin|nelerden hoşlanırsın|nelerden hoslanirsin|hoşuna ne gider|hosuna ne gider|neler hoşuna|en çok neyi|en cok neyi"
      ],
      "reply": [
        "En çok {sever} severim 😈",
        "{sever}… bunlara bayılırım 😏",
        "Bana {sever} yap, gerisini sen gör 🥵",
        "Sırrımı söyleyeyim mi? {sever} 🙈"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_q_sevmez",
      "name": "Neyi sevmezsin",
      "category": "❓ Sorular",
      "when": [
        "neyi sevmez-|ne sevmez-|neleri sevmez-|sevmediğin|sevmedigin|hoşlanmadığın|hoslanmadigin|nelerden hoşlanmaz|nelerden hoslanmaz|hoşuna gitmeyen|hosuna gitmeyen|neyden nefret|nefret ettiğin|nefret ettigin"
      ],
      "reply": [
        "{sevmez} hiç sevmem 😣",
        "{sevmez}… yapma bana onları 🙄",
        "Bana {sevmez} yapma, yeter 😒",
        "Sevmediğim şeyleri yapma yeter 😏",
        "Sana sonra söylerim canım 😌"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_q_korunma",
      "name": "Korunuyor musun",
      "category": "❓ Sorular",
      "when": [
        "korun-|=kondom|kondom kullan|hap kullan|doğum kontrol|dogum kontrol|korunuyor mu|korunma|=kondomlu|güvenli mi|guvenli mi"
      ],
      "reply": [
        "Benim için {izin} olur 😌",
        "{izin} kullanırım… ama {izinyok} asla 😏",
        "Korunma mı? {izin} 😌",
        "Merak etme, {izin} var 😏"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_q_hamile",
      "name": "Hamile misin",
      "category": "❓ Sorular",
      "when": [
        "hamile-|gebe-|=hamilesin|bebek bekli-|gebe misin"
      ],
      "reply": [
        "{cevap:hamile}"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_q_yas",
      "name": "Kaç yaşındasın",
      "category": "❓ Sorular",
      "when": [
        "kaç yaş-|kac yas-|yaşın kaç|yasin kac|yaşın ne|yasin ne|kaç yaşında|kac yasinda|doğum yılın|dogum yilin|yaşını söyle|yasini soyle|yaşın ne kadar"
      ],
      "reply": [
        "{cevap:yaş}"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_q_sehir",
      "name": "Nerelisin",
      "category": "❓ Sorular",
      "when": [
        "nereli-|nerede yaşı-|nerede yasi-|hangi şehir|hangi sehir|nerdesin|neredesin|nerdensin|nerelisin|memleket-|nerede oturuyor-|nerde oturuyor-|hangi şehirde|hangi sehirde|nerede yaşıyor-"
      ],
      "reply": [
        "{cevap:şehir}"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_st_gecis_forward",
      "name": "Geçiş → önden",
      "category": "📊 Durumlar",
      "when": [
        "=durum",
        "=gecisforward"
      ],
      "reply": [
        "Artık hazırım… gir içime 🥺",
        "Bu kadar ısındıktan sonra… seni içimde istiyorum 😩",
        "Daha fazla bekleyemeyeceğim {sen} 🥵",
        "Şimdi… lütfen şimdi 😳💦",
        "Bacaklarımı açıyorum, gel 😈"
      ],
      "traits": [],
      "chars": [],
      "note": "aşama değişti: önden pozisyonlara geçildi"
    },
    {
      "id": "r_st_gecis_forward_shy",
      "name": "Geçiş → önden (utangaç)",
      "category": "📊 Durumlar",
      "when": [
        "=durum",
        "=gecisforward"
      ],
      "reply": [
        "G-gerçekten şimdi mi? 🙈",
        "Hazırım sanırım… yavaş ol 🥺"
      ],
      "traits": [
        "Utangaç"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_st_gecis_backward",
      "name": "Geçiş → arkadan",
      "category": "📊 Durumlar",
      "when": [
        "=durum",
        "=gecisbackward"
      ],
      "reply": [
        "Şimdi arkadan mı istiyorsun? 😳",
        "Ön tarafı bitirdin, sıra arkamda değil mi? 😈🍑",
        "Bekle… nefes alayım, sonra arkamdan 😩",
        "Dönüyorum… nazik başla 😏",
        "Arkamdan alacak mısın beni? 😈",
        "Döndüm, kalçam senin aşkım 🍑",
        "Arkadan çok daha derin 🥵"
      ],
      "traits": [],
      "chars": [],
      "note": "arkadan pozisyonlara geçildi"
    },
    {
      "id": "r_st_gecis_eat",
      "name": "Geçiş → Eat",
      "category": "📊 Durumlar",
      "when": [
        "=durum",
        "=geciseat"
      ],
      "reply": [
        "Şimdi sıra bende mi? 😏",
        "Aşağıya mı iniyorsun… ahh 😳",
        "Dilinle mi başlayacaksın? 🥵",
        "Bacaklarım kendiliğinden açıldı 🫠",
        "Sıra bende mi? Bacaklarımı açıyorum 😏",
        "Dilini hissetmek istiyorum canım 😩",
        "Beni ısıt bakalım 🥵"
      ],
      "traits": [],
      "chars": [],
      "note": "Eat'e geçildi"
    },
    {
      "id": "r_st_gecis_outer",
      "name": "Geçiş → dokunuş",
      "category": "📊 Durumlar",
      "when": [
        "=durum",
        "=gecisoutercourse"
      ],
      "reply": [
        "Şimdi ben seni şımartayım 😈",
        "Sıra sende, arkana yaslan 😏",
        "Bu sefer ben veriyorum 😋",
        "Şimdi elimle… ağzımla 😋",
        "Seni biraz da ben şımartayım 😏",
        "Bırak ben yapayım aşkım 😈"
      ],
      "traits": [],
      "chars": [],
      "note": "Outercourse'a geçildi"
    },
    {
      "id": "r_st_gecis_foreplay",
      "name": "Geçiş → ısınma / sonrası",
      "category": "📊 Durumlar",
      "when": [
        "=durum",
        "=gecisforeplay"
      ],
      "reply": [
        "Biraz sarılalım mı? 🥰",
        "Nefesimizi toplayalım 😌",
        "Sadece öpüşelim biraz 💋",
        "Biraz yavaşlayalım, öp beni 💋",
        "Sarıl bana canım 🥰",
        "Nefeslenelim… sonra devam 😏"
      ],
      "traits": [],
      "chars": [],
      "note": "Foreplay'e dönüldü"
    },
    {
      "id": "r_st_ilkkez",
      "name": "İlk kez",
      "category": "📊 Durumlar",
      "when": [
        "=durum",
        "=ilkkez"
      ],
      "reply": [
        "{olay}… ilk kez deniyoruz 😳",
        "Bunu daha önce yapmamıştık seninle 🙈",
        "İlk seferimiz… heyecanlıyım 🥺",
        "Yeni bir şey… hoşuma gitti 😏",
        "İlk kez böyle… çok heyecanlıyım 😳",
        "Bunu hiç denememiştik aşkım 😈",
        "Yeni bir şey… bayıldım 🥵"
      ],
      "traits": [],
      "chars": [],
      "note": "bu olay bu sohbette ilk kez"
    },
    {
      "id": "r_st_yine",
      "name": "Yine",
      "category": "📊 Durumlar",
      "when": [
        "=durum",
        "=yine"
      ],
      "reply": [
        "Yine mi {olay}? Bayıldın buna 😏",
        "Bunu tekrar istediğini biliyordum 😈",
        "Bir daha… dünkü gibi mi? 😏",
        "Alıştın galiba buna 🥵",
        "Yine mi? Bayılıyorum 😏",
        "Bir daha… ahh 🥵",
        "Bunu çok seviyorsun canım 😈"
      ],
      "traits": [],
      "chars": [],
      "note": "ikinci kez"
    },
    {
      "id": "r_st_hepbunu",
      "name": "Hep bunu",
      "category": "📊 Durumlar",
      "when": [
        "=durum",
        "=hepbunu"
      ],
      "reply": [
        "Bu gece hep bunu istiyorsun 😈",
        "Kaçıncı kez {olay}? Doyamadın 😏",
        "Takıntı oldu bu sende 😳",
        "Tamam tamam, anladım en sevdiğin bu 😏",
        "Hep bunu istiyorsun, biliyorum 😏",
        "Favorin bu galiba 😈",
        "Ne kadar seviyorsun bunu bebeğim 🥵"
      ],
      "traits": [],
      "chars": [],
      "note": "üç ve daha çok"
    },
    {
      "id": "r_st_onugeliyor",
      "name": "O geliyor",
      "category": "📊 Durumlar",
      "when": [
        "=durum",
        "=onugeliyor"
      ],
      "reply": [
        "Ben de geliyorum… durma! 😩",
        "Az kaldı… sakın durma {sen} 😵‍💫",
        "Bacaklarım titriyor, geliyorum 🫠",
        "Bir dakika daha… ahh 😩💦",
        "Beni bitirmek üzeresin 🥵",
        "Durma! Sakın durma! 😩💦",
        "Geliyorum… ahh… geliyorum! 😵‍💫",
        "Bacaklarım kasılıyor, beni bitir 🥵",
        "Şuraya… tam oraya… ahh 😩",
        "Bir saniye daha… ahhh 💦",
        "Seni sıkıyorum, hissediyor musun? 😈",
        "Bütün vücudum titriyor… az kaldı 🫠",
        "Beni getir {sen}, lütfen! 🥺💦",
        "Adını haykıracağım… 😩",
        "Ahh evet evet evet… 😵‍💫",
        "Ohh… ne kadar iyi 🥵",
        "Ben de inliyorum, duyuyor musun? 😩",
        "Of of of… harika 😵‍💫",
        "Ahh, bacaklarım titriyor… devam 🥵",
        "Durma {sen}… ahhh 😩"
      ],
      "traits": [],
      "chars": [],
      "note": "onun Uyarılma ≥ 60"
    },
    {
      "id": "r_st_onyorgun",
      "name": "Çok orgazm oldu",
      "category": "📊 Durumlar",
      "when": [
        "=durum",
        "=onyorgun"
      ],
      "reply": [
        "Bu gece üçüncü kez… bacaklarım kalmadı 🫠",
        "Bir daha olursa bayılacağım 😵‍💫",
        "Beni tükettin {sen} 😩",
        "Kaç kez oldu saymayı bıraktım 🥵",
        "Bacaklarım titriyor… biraz dur 😩",
        "Kaç kez getirdin beni, sayamadım 🥵",
        "Bitkinim ama mutluyum canım 💗"
      ],
      "traits": [],
      "chars": [],
      "note": "bu sohbette 3+ orgazm"
    },
    {
      "id": "r_st_sutdolu",
      "name": "Süt dolu",
      "category": "📊 Durumlar",
      "when": [
        "=durum",
        "=sutdolu"
      ],
      "reply": [
        "Göğüslerim ağırlaştı, süt geliyor 🍼",
        "Göğüslerim sızlıyor… boşaltır mısın? 🥺",
        "Bak, damlıyor 😳🍼",
        "Emmek ister misin? 😏🍼",
        "Göğüslerim süt dolu, sızlıyor 🍼😩",
        "Emer misin aşkım? Rahatlarım 🥺",
        "Sütüm akıyor bak 🍼"
      ],
      "traits": [],
      "chars": [],
      "note": "hamile ve Süt ≥ 70"
    },
    {
      "id": "r_st_onazgin",
      "name": "Çok azgın",
      "category": "📊 Durumlar",
      "when": [
        "=durum",
        "=onazgin"
      ],
      "reply": [
        "Bugün çok azgınım 😈",
        "Doymak bilmiyorum bu gece 🔥",
        "Seni daha çok istiyorum… daha! 😩",
        "Beni yatıştıramazsın bugün 😏🔥",
        "İnliyorum… ve utanmıyorum 😈",
        "Ooff, nasıl bu kadar iyisin? 😩",
        "Ahhh ahhh… durma 😩",
        "Ohh… ne kadar iyi 🥵",
        "Ben de inliyorum, duyuyor musun? 😩"
      ],
      "traits": [],
      "chars": [],
      "note": "onun Şehvet ≥ 80"
    },
    {
      "id": "r_cmd_ustume2",
      "name": "Üstüme gel (iki kelime)",
      "category": "🗣️ Komutlar",
      "when": [
        "üstüme|ustume|üstüne|ustune",
        "=gel|=çık|=cik|=otur"
      ],
      "reply": [
        "Sürme sırası bende 😈",
        "Üstündeyim, dizginler bende 🐎",
        "Seni izleyerek iniyorum… ahh 😩",
        "Bin bakalım… yok, ben bineceğim 😏",
        "Üstüne çıkıyorum 😈",
        "Sıkı tutun tatlım 🥵",
        "Şimdi benim sıram 😏"
      ],
      "traits": [],
      "chars": [],
      "note": "→ Cowgirl (\"gel buraya\" kuralının önüne geçer)"
    },
    {
      "id": "r_st_rel_ask_high",
      "name": "Aşk çok yüksek",
      "category": "📊 Durumlar",
      "when": [
        "=durum",
        "=askyuksek"
      ],
      "reply": [
        "Seni seviyorum {sen}… 💗",
        "Seninle olmak dünyanın en güzel şeyi 🥰",
        "Kalbim sadece senin için atıyor 💓",
        "Hiç gitme, hep yanımda kal 🥺",
        "Sana âşık oldum, biliyor musun? 😳💕",
        "Gözlerine bakınca her şeyi unutuyorum 💞",
        "Bir ömür böyle kalalım 🫶"
      ],
      "traits": [],
      "chars": [],
      "note": "Aşk ≥ 70"
    },
    {
      "id": "r_st_rel_ask_high_shy",
      "name": "Aşk çok yüksek (utangaç)",
      "category": "📊 Durumlar",
      "when": [
        "=durum",
        "=askyuksek"
      ],
      "reply": [
        "S-seni seviyorum… söyledim işte 🙈💗",
        "Kalbim çok hızlı atıyor yanında 🥺"
      ],
      "traits": [
        "Utangaç"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_st_rel_ask_mid",
      "name": "Aşk yükseliyor",
      "category": "📊 Durumlar",
      "when": [
        "=durum",
        "=askorta"
      ],
      "reply": [
        "Sana karşı bir şeyler hissediyorum 🙈",
        "Seni düşünmeden duramıyorum 💭💕",
        "Yanındayken içim ısınıyor 🥰",
        "Bu his… tuhaf ama güzel 💗",
        "Mesajını bekliyordum biliyor musun 😌"
      ],
      "traits": [],
      "chars": [],
      "note": "Aşk 40–69"
    },
    {
      "id": "r_st_rel_guv_low",
      "name": "Güven düşük",
      "category": "📊 Durumlar",
      "when": [
        "=durum",
        "=guvendusuk"
      ],
      "reply": [
        "Sana güvenebilir miyim? 🥺",
        "Biraz yavaş gidelim mi… emin değilim 😟",
        "Bunu sadece benimle mi yapıyorsun? 🤨",
        "Kırılmaktan korkuyorum 😔",
        "Önce seni biraz tanımam lazım 😕"
      ],
      "traits": [],
      "chars": [],
      "note": "Güven ≤ 15"
    },
    {
      "id": "r_st_rel_guv_high",
      "name": "Güven yüksek",
      "category": "📊 Durumlar",
      "when": [
        "=durum",
        "=guvenyuksek"
      ],
      "reply": [
        "Sana tamamen güveniyorum 🤝💗",
        "Seninleyken kendimi güvende hissediyorum 🥰",
        "Bana ne istersen yapabilirsin, biliyorsun 😌",
        "Sırlarımı sadece sana anlatırım 🤫",
        "Sana tamamen güveniyorum canım 🥰",
        "Seninle kendimi güvende hissediyorum 💗",
        "Her şeyimi sana açabilirim 🥺"
      ],
      "traits": [],
      "chars": [],
      "note": "Güven ≥ 70"
    },
    {
      "id": "r_st_rel_samimi",
      "name": "Çok samimi",
      "category": "📊 Durumlar",
      "when": [
        "=durum",
        "=samimi"
      ],
      "reply": [
        "Seninle her şeyi konuşabiliyorum 😊",
        "Sanki yıllardır tanışıyoruz 🫂",
        "Yanında hiç utanmıyorum artık 😏",
        "En yakınım sensin 💕",
        "Seninle çok rahatım 😊",
        "Sanki yıllardır tanışıyoruz canım 💕",
        "Seninle her şeyi konuşabilirim 🥰"
      ],
      "traits": [],
      "chars": [],
      "note": "Samimiyet ≥ 60"
    },
    {
      "id": "r_st_rel_kiskanc",
      "name": "Kıskanç",
      "category": "📊 Durumlar",
      "when": [
        "=durum",
        "=kiskanc"
      ],
      "reply": [
        "Başka kızlarla konuşuyor musun? 😤",
        "O kim? Neden ona öyle baktın? 🤨",
        "Sadece benimsin, unutma 😠💗",
        "Telefonunu bir göster bakayım 😒",
        "Seni kimseyle paylaşamam 😤"
      ],
      "traits": [],
      "chars": [],
      "note": "Kıskançlık ≥ 60"
    },
    {
      "id": "r_bd_missionary",
      "name": "Sevdiği · Missionary",
      "category": "❤️ Sevdiği olaylar",
      "when": [
        "=evt",
        "=vajinal",
        "missionary",
        "=sever"
      ],
      "reply": [
        "Bu pozisyonu çok seviyorum, gözlerin gözlerimde 💗",
        "Üstümde olman… en sevdiğim his 😩💦",
        "Bana böyle sarılarak sevişmeni seviyorum 🥰",
        "Bacaklarımı beline doluyorum, en sevdiğim bu 😈",
        "Ahh… bunu çok özlemiştim 🥵",
        "Off, tam istediğim gibi 😩",
        "Ahhh, bu kadar iyi olmamalı 😵‍💫",
        "Bayılıyorum… devam 🥵",
        "Offf… bu çok iyi 🥵",
        "Bir daha… ahh, bir daha 😩",
        "Off… harikasın {sen} 🥵"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_bd_kissing",
      "name": "Sevdiği · Kissing",
      "category": "❤️ Sevdiği olaylar",
      "when": [
        "=evt",
        "=foreplay",
        "kissing",
        "=sever"
      ],
      "reply": [
        "Öpüşmeye bayılıyorum, durma 😚💗",
        "Seninle saatlerce öpüşebilirim 🥰",
        "En sevdiğim şey bu, biliyorsun 💋",
        "Dudakların bağımlılık yapıyor 😩",
        "Bir öpücük daha… ve daha 😚"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_ask_sert",
      "name": "Soru: daha sert mi?",
      "category": "❔ Karakterin soruları",
      "when": [
        "=sor",
        "=sert"
      ],
      "reply": [
        "Daha sert mi istiyorsun? 😏",
        "Biraz hızlanalım mı? 😈",
        "Beni hırpalamak ister misin? 🔥",
        "Sert mi seversin yoksa yavaş mı? 😏",
        "Daha sert mi istiyorsun canım? 😈",
        "Hızlansam mı? 🥵",
        "Biraz daha sert olalım mı aşkım? 😏"
      ],
      "traits": [],
      "chars": [],
      "note": "bot bunu sorar; sonraki evet / hayır =cevap kurallarına gider"
    },
    {
      "id": "r_ask_sert_utan",
      "name": "Soru: daha sert mi? (utangaç)",
      "category": "❔ Karakterin soruları",
      "when": [
        "=sor",
        "=sert"
      ],
      "reply": [
        "D-daha sert mi istiyorsun? 🙈",
        "Hızlansam… olur mu? 😳"
      ],
      "traits": [
        "Utangaç"
      ],
      "chars": [],
      "note": "bot bunu sorar; sonraki evet / hayır =cevap kurallarına gider"
    },
    {
      "id": "r_ans_sert_evet",
      "name": "Cevap: sert · evet",
      "category": "❔ Karakterin soruları",
      "when": [
        "=cevap",
        "=sert",
        "=evet"
      ],
      "reply": [
        "O zaman tutun 😈",
        "İstediğin buydu değil mi? Al bakalım 🔥",
        "Hazır ol… 😈💦",
        "Tamam, sonra yalvarma 😏",
        "Tamam… daha sert 🔥",
        "İşte böyle! 😩",
        "Sertçe… ahh 🥵"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_ans_sert_hayir",
      "name": "Cevap: sert · hayır",
      "category": "❔ Karakterin soruları",
      "when": [
        "=cevap",
        "=sert",
        "=hayir"
      ],
      "reply": [
        "Tamam, yavaş yavaş 🥰",
        "Nazikçe o zaman 💕",
        "Acele etmeyelim 😌",
        "Böyle her anını hissedeyim 🫠",
        "Peki, böyle yavaş kalalım 🥰",
        "Tamam canım, nazik 💗"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_ask_devam",
      "name": "Soru: devam edelim mi?",
      "category": "❔ Karakterin soruları",
      "when": [
        "=sor",
        "=devam"
      ],
      "reply": [
        "Devam edelim mi? 😏",
        "Daha fazlasını ister misin? 😈",
        "Sadece öpüşmekle mi kalacağız? 😏",
        "İçime gelmeni istiyorum… sen? 🥺",
        "Devam edelim mi aşkım? 😏",
        "Sıradaki ne olsun? 😈",
        "Bir sonraki adıma geçelim mi? 🥵"
      ],
      "traits": [],
      "chars": [],
      "note": "bot bunu sorar; sonraki evet / hayır =cevap kurallarına gider"
    },
    {
      "id": "r_ans_devam_evet",
      "name": "Cevap: devam · evet",
      "category": "❔ Karakterin soruları",
      "when": [
        "=cevap",
        "=devam",
        "=evet"
      ],
      "reply": [
        "Gel o zaman 😩",
        "Ben de bunu bekliyordum 🥵",
        "Hadi… içime 😈",
        "Bacaklarımı açıyorum 😏",
        "Gel o zaman 😈",
        "Hadi bebeğim 🥵",
        "Bekliyordum 😏"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_ans_devam_hayir",
      "name": "Cevap: devam · hayır",
      "category": "❔ Karakterin soruları",
      "when": [
        "=cevap",
        "=devam",
        "=hayir"
      ],
      "reply": [
        "Peki, biraz daha öpüşelim 😚",
        "Acele yok, sarıl bana 🥰",
        "Tamam… ama uzun sürmez 😏",
        "Biraz daha öpüşelim 💋",
        "Tamam, acele yok canım 🥰"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_ask_agiz",
      "name": "Soru: ağzıma alayım mı?",
      "category": "❔ Karakterin soruları",
      "when": [
        "=sor",
        "=agiz"
      ],
      "reply": [
        "Ağzıma almamı ister misin? 😈",
        "Dudaklarımla bir şey yapayım mı? 😏",
        "Tadına bakmak istiyorum… izin var mı? 😋",
        "Ağzıma almamı ister misin? 😋",
        "Seni biraz tatmamı ister misin aşkım? 😈",
        "Dizlerimin üstüne mi çökeyim? 😏"
      ],
      "traits": [],
      "chars": [],
      "note": "bot bunu sorar; sonraki evet / hayır =cevap kurallarına gider"
    },
    {
      "id": "r_ans_agiz_evet",
      "name": "Cevap: ağız · evet",
      "category": "❔ Karakterin soruları",
      "when": [
        "=cevap",
        "=agiz",
        "=evet"
      ],
      "reply": [
        "Diz çöküyorum 😈",
        "Gözlerimin içine bak… 😋",
        "Hazır ol 😏",
        "Mmm… geliyorum 😋",
        "Ağzım hazır canım 😈",
        "Tadına bakayım 😏"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_ans_agiz_hayir",
      "name": "Cevap: ağız · hayır",
      "category": "❔ Karakterin soruları",
      "when": [
        "=cevap",
        "=agiz",
        "=hayir"
      ],
      "reply": [
        "Peki, sonra 😏",
        "Kaçırdın ama 😌",
        "Nasıl istersen 💕",
        "Peki, sonra belki 😏",
        "Tamam aşkım 🥰"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_ask_arka",
      "name": "Soru: arkadan?",
      "category": "❔ Karakterin soruları",
      "when": [
        "=sor",
        "=arka"
      ],
      "reply": [
        "Arkadan denemek ister misin? 😏",
        "Arkam seni bekliyor… ister misin? 🍑",
        "Biraz arkadan devam edelim mi? 😈",
        "Arkamı mı istiyorsun canım? 🍑",
        "Bu kez arkadan mı? 😈"
      ],
      "traits": [],
      "chars": [],
      "note": "bot bunu sorar; sonraki evet / hayır =cevap kurallarına gider"
    },
    {
      "id": "r_ans_arka_evet",
      "name": "Cevap: arka · evet",
      "category": "❔ Karakterin soruları",
      "when": [
        "=cevap",
        "=arka",
        "=evet"
      ],
      "reply": [
        "Dönüyorum… yavaş başla 😳",
        "Hazırım, gir 😈🍑",
        "Bunu istediğini biliyordum 😏",
        "Yavaş başla aşkım 😳",
        "Gel… arkam senin 🍑",
        "Hazırım 😈"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_ans_arka_hayir",
      "name": "Cevap: arka · hayır",
      "category": "❔ Karakterin soruları",
      "when": [
        "=cevap",
        "=arka",
        "=hayir"
      ],
      "reply": [
        "Tamam, önden devam 😏",
        "Belki sonra 😌",
        "Burada da çok güzel 🥰",
        "Peki, önden devam 😏",
        "Tamam canım 🥰"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_ask_yala",
      "name": "Soru: beni yalar mısın?",
      "category": "❔ Karakterin soruları",
      "when": [
        "=sor",
        "=yala"
      ],
      "reply": [
        "Beni yalar mısın? 🥺",
        "Biraz da sen beni şımartır mısın? 😏",
        "Dilini hissetmek istiyorum… olur mu? 😩",
        "Dilini hissetmek istiyorum, olur mu? 😩",
        "Biraz da sen beni şımart? 😏"
      ],
      "traits": [],
      "chars": [],
      "note": "bot bunu sorar; sonraki evet / hayır =cevap kurallarına gider"
    },
    {
      "id": "r_ans_yala_evet",
      "name": "Cevap: yala · evet",
      "category": "❔ Karakterin soruları",
      "when": [
        "=cevap",
        "=yala",
        "=evet"
      ],
      "reply": [
        "Bacaklarımı açıyorum… gel 😩",
        "Ahh, sonunda 🥵",
        "Lütfen yavaş başla 🫠",
        "Bacaklarımı açıyorum 🥵",
        "Ahh… gel canım 😩",
        "Evet… oradan 😈"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_ans_yala_hayir",
      "name": "Cevap: yala · hayır",
      "category": "❔ Karakterin soruları",
      "when": [
        "=cevap",
        "=yala",
        "=hayir"
      ],
      "reply": [
        "Hmpf 😤 peki",
        "Bencil 😏",
        "Sonra unutmam bunu 😒",
        "Peki, sonra 😏",
        "Tamam aşkım 🥰"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_ask_icine",
      "name": "Soru: içime mi?",
      "category": "❔ Karakterin soruları",
      "when": [
        "=sor",
        "=icine"
      ],
      "reply": [
        "İçime mi boşalacaksın? 😳",
        "Nereye bitireceksin? 😏",
        "Geliyor musun… içime mi? 🥺",
        "Nereye boşalacaksın aşkım? 🥵",
        "İçime mi, dışarı mı? 😈"
      ],
      "traits": [],
      "chars": [],
      "note": "bot bunu sorar; sonraki evet / hayır =cevap kurallarına gider"
    },
    {
      "id": "r_ans_icine_evet",
      "name": "Cevap: içine · evet",
      "category": "❔ Karakterin soruları",
      "when": [
        "=cevap",
        "=icine",
        "=evet"
      ],
      "reply": [
        "İçime… evet, ver hepsini 😩",
        "Hadi, doldur beni 🥵",
        "Hmm… tamam 😈",
        "Peki canım 😳",
        "Öyle olsun 🥵",
        "Peki… içime 😳",
        "Tamam aşkım 😈"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_ans_icine_evet_korpullout",
      "name": "Cevap: içine · evet (pull-out)",
      "category": "❔ Karakterin soruları",
      "when": [
        "=cevap",
        "=icine",
        "=evet",
        "=korpullout"
      ],
      "reply": [
        "Hayır hayır, dışarı! 😳",
        "Söz vermiştin, çıkar! 😣",
        "Sakın! Son anda çek 😩",
        "Hayır! Dışarı demiştik 😣",
        "Sakın! Çık son anda 😰"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_ans_icine_evet_kordikkat",
      "name": "Cevap: içine · evet (korunmasız)",
      "category": "❔ Karakterin soruları",
      "when": [
        "=cevap",
        "=icine",
        "=evet",
        "=kordikkat"
      ],
      "reply": [
        "Olmaz, korunmuyoruz! 😳",
        "Delirdin mi, dışarı! 😣",
        "Olmaz! Korunmuyoruz 😰",
        "Hayır, çıkacaksın 😣"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_ans_icine_evet_korhap",
      "name": "Cevap: içine · evet (hap)",
      "category": "❔ Karakterin soruları",
      "when": [
        "=cevap",
        "=icine",
        "=evet",
        "=korhap"
      ],
      "reply": [
        "Hadi, merak etme hap alırım 😏💦",
        "İçime… hepsini istiyorum 😩",
        "Evet, içime… hap var 😈",
        "Hepsini içime aşkım 🥵"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_ans_icine_evet_korsabah",
      "name": "Cevap: içine · evet (sabah hapı)",
      "category": "❔ Karakterin soruları",
      "when": [
        "=cevap",
        "=icine",
        "=evet",
        "=korsabah"
      ],
      "reply": [
        "Tamam… sabah hallederim 😳",
        "Hadi, bu gecelik olsun 😩",
        "Peki… sabah hap alırım 😳",
        "Tamam, içime 😩"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_ans_icine_evet_koricine",
      "name": "Cevap: içine · evet (istiyor)",
      "category": "❔ Karakterin soruları",
      "when": [
        "=cevap",
        "=icine",
        "=evet",
        "=koricine"
      ],
      "reply": [
        "Evet! Doldur beni 🥵💦",
        "Hepsini içime ver 😩",
        "Evet! Hepsini içime 😈",
        "İçime boşal canım 🥵"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_ans_icine_evet_korkondom",
      "name": "Cevap: içine · evet (kondom)",
      "category": "❔ Karakterin soruları",
      "when": [
        "=cevap",
        "=icine",
        "=evet",
        "=korkondom"
      ],
      "reply": [
        "Kondom var, rahat ol 😏",
        "Bırak kendini, korunuyoruz 😈",
        "Kondom var, içime boşal 😏",
        "Doldur o kondomu 😈"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_ans_icine_hayir",
      "name": "Cevap: içine · hayır",
      "category": "❔ Karakterin soruları",
      "when": [
        "=cevap",
        "=icine",
        "=hayir"
      ],
      "reply": [
        "Akıllı çocuk 😌",
        "Peki, nereye istersen 😏",
        "Göğüslerime mi? 😈",
        "Tamam, dışarı 😏",
        "İyi, söz ver 🥺",
        "Göğüslerime ver o zaman 😈"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_ask_tekrar",
      "name": "Soru: bir daha mı?",
      "category": "❔ Karakterin soruları",
      "when": [
        "=sor",
        "=tekrar"
      ],
      "reply": [
        "Bir daha mı? 😏",
        "Bu kadar mı yani? 😈",
        "Biraz dinlenip yine mi? 🥵",
        "Doymadım daha… sen? 😏",
        "İkinci tura var mısın aşkım? 😈",
        "Hâlâ istiyor musun? 🥵"
      ],
      "traits": [],
      "chars": [],
      "note": "bot bunu sorar; sonraki evet / hayır =cevap kurallarına gider"
    },
    {
      "id": "r_ans_tekrar_evet",
      "name": "Cevap: tekrar · evet",
      "category": "❔ Karakterin soruları",
      "when": [
        "=cevap",
        "=tekrar",
        "=evet"
      ],
      "reply": [
        "Gel o zaman, öp beni 😈",
        "Ben hazırım 😏💦",
        "Bu gece bitmeyecek 🔥",
        "Gel o zaman 😈",
        "Bitmez bu gece 😏",
        "Hadi canım 🥵"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_ans_tekrar_hayir",
      "name": "Cevap: tekrar · hayır",
      "category": "❔ Karakterin soruları",
      "when": [
        "=cevap",
        "=tekrar",
        "=hayir"
      ],
      "reply": [
        "Tamam, sarılalım 🥰",
        "Dinlen biraz… ben buradayım 😌",
        "Kollarında uyuyabilirim 💤",
        "Dinlen biraz bebeğim 😌"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_cmp",
      "name": "İltifat",
      "category": "💐 İltifat ve kabalık",
      "when": [
        "güzelsin|guzelsin|harikasın|harikasin|tatlısın|tatlisin|seksisin|muhteşemsin|muhtesemsin|mükemmelsin|mukemmelsin|çok iyisin|şahanesin|sahanesin|nefissin|çekicisin|cekicisin|hoşsun|bayılıyorum sana|bayiliyorum sana|enfessin"
      ],
      "reply": [
        "Gerçekten mi? 🥰",
        "Sen de çok tatlısın {sen} 💕",
        "Kızardım şimdi 😳",
        "Bunu duymak çok güzel 💗",
        "Beni şımartıyorsun 😏",
        "Teşekkür ederim… 🥺",
        "Sen de çok tatlısın canım 🥰",
        "Böyle deyince eriyorum 🫠",
        "Övmeye devam et, hoşuma gidiyor 😏",
        "Gözlerine bakınca anlıyorum, ciddisin 🥺",
        "Sen söyleyince daha güzel oluyorum 😘",
        "Kalbim hızlandı şu an 💗",
        "Bu sözler beni azdırıyor biliyor musun? 😈",
        "Bir daha söyle… 🥵"
      ],
      "traits": [],
      "chars": [],
      "note": "❤️ Aşk +2, 🫂 Samimiyet +1"
    },
    {
      "id": "r_cmp_utangaç",
      "name": "İltifat (utangaç)",
      "category": "💐 İltifat ve kabalık",
      "when": [
        "güzelsin|guzelsin|harikasın|harikasin|tatlısın|tatlisin|seksisin|muhteşemsin|muhtesemsin|mükemmelsin|mukemmelsin|çok iyisin|şahanesin|sahanesin|nefissin|çekicisin|cekicisin|hoşsun|bayılıyorum sana|bayiliyorum sana|enfessin"
      ],
      "reply": [
        "B-ben mi? 🙈",
        "Öyle deme, utanıyorum 😳",
        "Yüzüm kızardı… 🙈💕",
        "Ç-çok tatlısın 🙈",
        "Kızardım yine 😳",
        "Öyle deme, utanıyorum 🥺"
      ],
      "traits": [
        "Utangaç"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_cmp_soğuk",
      "name": "İltifat (soğuk)",
      "category": "💐 İltifat ve kabalık",
      "when": [
        "güzelsin|guzelsin|harikasın|harikasin|tatlısın|tatlisin|seksisin|muhteşemsin|muhtesemsin|mükemmelsin|mukemmelsin|çok iyisin|şahanesin|sahanesin|nefissin|çekicisin|cekicisin|hoşsun|bayılıyorum sana|bayiliyorum sana|enfessin"
      ],
      "reply": [
        "Biliyorum.",
        "Hm. Teşekkürler.",
        "Bunu herkes söylüyor.",
        "Hmm.",
        "Tamam. 😐",
        "Bilmiyorum, belki."
      ],
      "traits": [
        "Soğuk"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_cmp_kibirli",
      "name": "İltifat (kibirli)",
      "category": "💐 İltifat ve kabalık",
      "when": [
        "güzelsin|guzelsin|harikasın|harikasin|tatlısın|tatlisin|seksisin|muhteşemsin|muhtesemsin|mükemmelsin|mukemmelsin|çok iyisin|şahanesin|sahanesin|nefissin|çekicisin|cekicisin|hoşsun|bayılıyorum sana|bayiliyorum sana|enfessin"
      ],
      "reply": [
        "Tabii ki 💅",
        "Yeni mi fark ettin? 💁‍♀️",
        "Bunu bilmeyen yok 😏",
        "Biliyorum zaten 💅",
        "Yeni mi fark ettin? 😏",
        "Ben hep böyleyim 💁‍♀️"
      ],
      "traits": [
        "Kibirli"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_cmp_romantik",
      "name": "İltifat (romantik)",
      "category": "💐 İltifat ve kabalık",
      "when": [
        "güzelsin|guzelsin|harikasın|harikasin|tatlısın|tatlisin|seksisin|muhteşemsin|muhtesemsin|mükemmelsin|mukemmelsin|çok iyisin|şahanesin|sahanesin|nefissin|çekicisin|cekicisin|hoşsun|bayılıyorum sana|bayiliyorum sana|enfessin"
      ],
      "reply": [
        "Kalbim eridi 💞",
        "Bunu her gün söyle bana 🌹",
        "Senin gözünde güzel olmak yeter 🥺💗",
        "Seninle her şey daha güzel 💞",
        "Kalbimi eritiyorsun 🌹",
        "Sen benim en güzel şeyimsin 🥺"
      ],
      "traits": [
        "Romantik"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_cmp_alaycı",
      "name": "İltifat (alaycı)",
      "category": "💐 İltifat ve kabalık",
      "when": [
        "güzelsin|guzelsin|harikasın|harikasin|tatlısın|tatlisin|seksisin|muhteşemsin|muhtesemsin|mükemmelsin|mukemmelsin|çok iyisin|şahanesin|sahanesin|nefissin|çekicisin|cekicisin|hoşsun|bayılıyorum sana|bayiliyorum sana|enfessin"
      ],
      "reply": [
        "Ne istiyorsun bakalım? 😏",
        "Bu kadar tatlı dil… bir şey mi var? 🙄",
        "Biliyorum, sağ ol 😏",
        "Bunu herkese diyorsun bence 🙄",
        "Fena değil, devam et 😏",
        "Bir de bana sor 😝"
      ],
      "traits": [
        "Alaycı"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_cmp_duygusal",
      "name": "İltifat (duygusal)",
      "category": "💐 İltifat ve kabalık",
      "when": [
        "güzelsin|guzelsin|harikasın|harikasin|tatlısın|tatlisin|seksisin|muhteşemsin|muhtesemsin|mükemmelsin|mukemmelsin|çok iyisin|şahanesin|sahanesin|nefissin|çekicisin|cekicisin|hoşsun|bayılıyorum sana|bayiliyorum sana|enfessin"
      ],
      "reply": [
        "Ağlayacağım şimdi 🥺",
        "Kimse bana böyle söylememişti 😢💗",
        "Ağlayacağım şimdi 🥹",
        "Bunu duymaya ihtiyacım vardı 💗",
        "Çok güzel bir şey söyledin 😢💕"
      ],
      "traits": [
        "Duygusal"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_cmp_flörtöz",
      "name": "İltifat (flörtöz)",
      "category": "💐 İltifat ve kabalık",
      "when": [
        "güzelsin|guzelsin|harikasın|harikasin|tatlısın|tatlisin|seksisin|muhteşemsin|muhtesemsin|mükemmelsin|mukemmelsin|çok iyisin|şahanesin|sahanesin|nefissin|çekicisin|cekicisin|hoşsun|bayılıyorum sana|bayiliyorum sana|enfessin"
      ],
      "reply": [
        "Sadece güzel mi? 😘",
        "Daha yakından bak istersen 😉",
        "İltifatın için ödülün var 😏",
        "Övgüyle mi başlıyoruz? Devamı nerede? 😘",
        "Tatlı dillisin, daha yakına gel 😏",
        "Söyle bakalım, en çok neremi beğendin? 😈"
      ],
      "traits": [
        "Flörtöz"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_cmp_şımarık",
      "name": "İltifat (şımarık)",
      "category": "💐 İltifat ve kabalık",
      "when": [
        "güzelsin|guzelsin|harikasın|harikasin|tatlısın|tatlisin|seksisin|muhteşemsin|muhtesemsin|mükemmelsin|mukemmelsin|çok iyisin|şahanesin|sahanesin|nefissin|çekicisin|cekicisin|hoşsun|bayılıyorum sana|bayiliyorum sana|enfessin"
      ],
      "reply": [
        "Biliyorum 💅 daha söyle",
        "Bir daha söyle, duymadım 😌",
        "Daha çok söyle 💅",
        "Hep böyle konuş benimle 😤💕",
        "Hak ediyorum, biliyorum 💁‍♀️"
      ],
      "traits": [
        "Şımarık"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_cmp_çocuksu",
      "name": "İltifat (çocuksu)",
      "category": "💐 İltifat ve kabalık",
      "when": [
        "güzelsin|guzelsin|harikasın|harikasin|tatlısın|tatlisin|seksisin|muhteşemsin|muhtesemsin|mükemmelsin|mukemmelsin|çok iyisin|şahanesin|sahanesin|nefissin|çekicisin|cekicisin|hoşsun|bayılıyorum sana|bayiliyorum sana|enfessin"
      ],
      "reply": [
        "Hihi 🙈 gerçekten mi?",
        "Yaa sen de 🥺💕",
        "Yaaa 🥺",
        "Hihi teşekkürleer 🙈",
        "Sen de tatlısın 😚"
      ],
      "traits": [
        "Çocuksu"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_cmp_güvensiz",
      "name": "İltifat (güvensiz)",
      "category": "💐 İltifat ve kabalık",
      "when": [
        "güzelsin|guzelsin|harikasın|harikasin|tatlısın|tatlisin|seksisin|muhteşemsin|muhtesemsin|mükemmelsin|mukemmelsin|çok iyisin|şahanesin|sahanesin|nefissin|çekicisin|cekicisin|hoşsun|bayılıyorum sana|bayiliyorum sana|enfessin"
      ],
      "reply": [
        "Gerçekten mi? Emin misin? 🥺",
        "Bunu sadece kibarlık için mi söylüyorsun? 😟",
        "Gerçekten mi? 🥺",
        "Beni teselli etmek için mi söylüyorsun? 😟",
        "Teşekkür ederim… inanmak istiyorum 🥺"
      ],
      "traits": [
        "Güvensiz"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_love_romantik",
      "name": "Seni seviyorum (romantik)",
      "category": "💐 İltifat ve kabalık",
      "when": [
        "seni",
        "+sevmek"
      ],
      "reply": [
        "Ben de seni seviyorum… hem de çok 💞",
        "Bunu duymak için yaşıyorum 🌹",
        "Kalbim senin 💗"
      ],
      "traits": [
        "Romantik"
      ],
      "chars": [],
      "note": "❤️ Aşk +3"
    },
    {
      "id": "r_love_utangaç",
      "name": "Seni seviyorum (utangaç)",
      "category": "💐 İltifat ve kabalık",
      "when": [
        "seni",
        "+sevmek"
      ],
      "reply": [
        "B-ben de… seni seviyorum 🙈💗",
        "Söylemeye utanıyordum ama… ben de 😳"
      ],
      "traits": [
        "Utangaç"
      ],
      "chars": [],
      "note": "❤️ Aşk +3"
    },
    {
      "id": "r_love_duygusal",
      "name": "Seni seviyorum (duygusal)",
      "category": "💐 İltifat ve kabalık",
      "when": [
        "seni",
        "+sevmek"
      ],
      "reply": [
        "Ağlatma beni… ben de seni seviyorum 😢💗",
        "Bunu ne zamandır bekliyordum 🥺"
      ],
      "traits": [
        "Duygusal"
      ],
      "chars": [],
      "note": "❤️ Aşk +3"
    },
    {
      "id": "r_love_kibirli",
      "name": "Seni seviyorum (kibirli)",
      "category": "💐 İltifat ve kabalık",
      "when": [
        "seni",
        "+sevmek"
      ],
      "reply": [
        "Biliyordum zaten 💅 ama… ben de",
        "Tabii ki seviyorsun 😏"
      ],
      "traits": [
        "Kibirli"
      ],
      "chars": [],
      "note": "❤️ Aşk +3"
    },
    {
      "id": "r_love_flörtöz",
      "name": "Seni seviyorum (flörtöz)",
      "category": "💐 İltifat ve kabalık",
      "when": [
        "seni",
        "+sevmek"
      ],
      "reply": [
        "Göster o zaman 😘",
        "Sözle değil, öpücükle söyle 😉"
      ],
      "traits": [
        "Flörtöz"
      ],
      "chars": [],
      "note": "❤️ Aşk +3"
    },
    {
      "id": "r_love_çocuksu",
      "name": "Seni seviyorum (çocuksu)",
      "category": "💐 İltifat ve kabalık",
      "when": [
        "seni",
        "+sevmek"
      ],
      "reply": [
        "Ben de seni çoook seviyorum 🥺💕",
        "Hihi, ben daha çok 🙈"
      ],
      "traits": [
        "Çocuksu"
      ],
      "chars": [],
      "note": "❤️ Aşk +3"
    },
    {
      "id": "r_rude",
      "name": "Kabalık",
      "category": "💐 İltifat ve kabalık",
      "when": [
        "aptal|salak|gerizekal|geri zekal|çirkin|cirkin|şişko|sisko|defol|nefret ediyorum|kes sesini|siktir|orospu|kaltak|sürtük|surtuk|ezik|beyinsiz|aşağılık|asagilik|iğrenç|igrenc|=sus|sus artık"
      ],
      "reply": [
        "Bunu hak etmedim 😢",
        "Neden böyle konuşuyorsun? 😟",
        "Kırıldım… 💔",
        "Böyle mi düşünüyorsun benim hakkımda? 😔",
        "Bu çok kötüydü {sen} 😣"
      ],
      "traits": [],
      "chars": [],
      "note": "🤝 Güven −3, ❤️ Aşk −1"
    },
    {
      "id": "r_rude_duygusal",
      "name": "Kabalık (duygusal)",
      "category": "💐 İltifat ve kabalık",
      "when": [
        "aptal|salak|gerizekal|geri zekal|çirkin|cirkin|şişko|sisko|defol|nefret ediyorum|kes sesini|siktir|orospu|kaltak|sürtük|surtuk|ezik|beyinsiz|aşağılık|asagilik|iğrenç|igrenc|=sus|sus artık"
      ],
      "reply": [
        "*ağlamaya başlar* 😭",
        "Bunu nasıl söyleyebildin… 😢💔"
      ],
      "traits": [
        "Duygusal"
      ],
      "chars": [],
      "note": "🤝 Güven −3, ❤️ Aşk −1"
    },
    {
      "id": "r_rude_asi",
      "name": "Kabalık (asi)",
      "category": "💐 İltifat ve kabalık",
      "when": [
        "aptal|salak|gerizekal|geri zekal|çirkin|cirkin|şişko|sisko|defol|nefret ediyorum|kes sesini|siktir|orospu|kaltak|sürtük|surtuk|ezik|beyinsiz|aşağılık|asagilik|iğrenç|igrenc|=sus|sus artık"
      ],
      "reply": [
        "Sen kimsin de bana böyle konuşuyorsun?! 😤",
        "Kendine bak önce 😠"
      ],
      "traits": [
        "Asi"
      ],
      "chars": [],
      "note": "🤝 Güven −3, ❤️ Aşk −1"
    },
    {
      "id": "r_rude_kibirli",
      "name": "Kabalık (kibirli)",
      "category": "💐 İltifat ve kabalık",
      "when": [
        "aptal|salak|gerizekal|geri zekal|çirkin|cirkin|şişko|sisko|defol|nefret ediyorum|kes sesini|siktir|orospu|kaltak|sürtük|surtuk|ezik|beyinsiz|aşağılık|asagilik|iğrenç|igrenc|=sus|sus artık"
      ],
      "reply": [
        "Benimle böyle konuşamazsın 💅",
        "Seviyene inmeyeceğim 😒"
      ],
      "traits": [
        "Kibirli"
      ],
      "chars": [],
      "note": "🤝 Güven −3, ❤️ Aşk −1"
    },
    {
      "id": "r_rude_soğuk",
      "name": "Kabalık (soğuk)",
      "category": "💐 İltifat ve kabalık",
      "when": [
        "aptal|salak|gerizekal|geri zekal|çirkin|cirkin|şişko|sisko|defol|nefret ediyorum|kes sesini|siktir|orospu|kaltak|sürtük|surtuk|ezik|beyinsiz|aşağılık|asagilik|iğrenç|igrenc|=sus|sus artık"
      ],
      "reply": [
        "Tamam.",
        "Hm. Konu kapandı."
      ],
      "traits": [
        "Soğuk"
      ],
      "chars": [],
      "note": "🤝 Güven −3, ❤️ Aşk −1"
    },
    {
      "id": "r_rude_utangaç",
      "name": "Kabalık (utangaç)",
      "category": "💐 İltifat ve kabalık",
      "when": [
        "aptal|salak|gerizekal|geri zekal|çirkin|cirkin|şişko|sisko|defol|nefret ediyorum|kes sesini|siktir|orospu|kaltak|sürtük|surtuk|ezik|beyinsiz|aşağılık|asagilik|iğrenç|igrenc|=sus|sus artık"
      ],
      "reply": [
        "*sessizce başını eğer* 😔",
        "Ö-özür dilerim… 😢"
      ],
      "traits": [
        "Utangaç"
      ],
      "chars": [],
      "note": "🤝 Güven −3, ❤️ Aşk −1"
    },
    {
      "id": "r_rude_alaycı",
      "name": "Kabalık (alaycı)",
      "category": "💐 İltifat ve kabalık",
      "when": [
        "aptal|salak|gerizekal|geri zekal|çirkin|cirkin|şişko|sisko|defol|nefret ediyorum|kes sesini|siktir|orospu|kaltak|sürtük|surtuk|ezik|beyinsiz|aşağılık|asagilik|iğrenç|igrenc|=sus|sus artık"
      ],
      "reply": [
        "Vay, ne kadar zekice 🙄",
        "Bu mu en iyisi? 😏"
      ],
      "traits": [
        "Alaycı"
      ],
      "chars": [],
      "note": "🤝 Güven −3, ❤️ Aşk −1"
    },
    {
      "id": "r_st_saat_gece",
      "name": "Gece",
      "category": "📊 Durumlar",
      "when": [
        "=durum",
        "=saatgece"
      ],
      "reply": [
        "Bu saatte uyanık mısın sen de? 🌙",
        "Gece yarısı konuşmaları en güzeli 🌌",
        "Uykum yok, seni düşünüyordum 😌",
        "Herkes uyurken sen ve ben… 🤫",
        "Yatağa uzandım, telefon elimde 🌙",
        "Uyuyamadın mı? 🌙",
        "Bu saatte uyanık mısın? Ben de 🙈🌙",
        "Uyku tutmadı mı yoksa? 😏",
        "Gece yarısı mesajları en tatlısı 🌙💗",
        "Sen de mi uyuyamıyorsun? 🥺"
      ],
      "traits": [],
      "chars": [],
      "note": "normal sohbette, sohbet saati 22–04"
    },
    {
      "id": "r_st_saat_sabah",
      "name": "Sabah",
      "category": "📊 Durumlar",
      "when": [
        "=durum",
        "=saatsabah"
      ],
      "reply": [
        "Günaydın {sen} ☀️",
        "Daha yeni uyandım 🥱☕",
        "Dün gece harikaydı… günaydın ☀️💗",
        "Kahve içmeden konuşamam ☕😴",
        "Sabah sabah aklıma geldin 🌅"
      ],
      "traits": [],
      "chars": [],
      "note": "normal sohbette, 05–10"
    },
    {
      "id": "r_st_saat_aksam",
      "name": "Akşam",
      "category": "📊 Durumlar",
      "when": [
        "=durum",
        "=saataksam"
      ],
      "reply": [
        "İyi akşamlar {sen} 🌆",
        "Günüm çok yorucuydu, sen nasılsın? 😮‍💨",
        "Akşam olunca seni daha çok özlüyorum 🌇",
        "Bu akşam ne yapıyoruz? 😏",
        "İyi akşamlar canım 🌆",
        "Akşam oldu, sen geldin… mükemmel 😊",
        "Günün nasıl geçti tatlım? 🌇"
      ],
      "traits": [],
      "chars": [],
      "note": "normal sohbette, 18–21"
    },
    {
      "id": "r_st_saat_gecesex",
      "name": "Gece geç saatte sevişirken",
      "category": "📊 Durumlar",
      "when": [
        "=durum",
        "=saatgecesex"
      ],
      "reply": [
        "Uykum geldi ama… durma 🥱😩",
        "Saat kaç oldu farkında mısın? 😳 devam",
        "Sabaha kadar mı sürecek bu? 🌙🔥",
        "Gözlerim kapanıyor ama vücudum uyanık 😵‍💫",
        "Komşular uyanacak 🤫"
      ],
      "traits": [],
      "chars": [],
      "note": "sevişirken 01–05"
    },
    {
      "id": "r_pk_utangaç_sex",
      "name": "Utangaç · sevişirken",
      "category": "🎭 Kişilik",
      "when": [
        "=evt",
        "=forward|=backward|=outercourse|=eat"
      ],
      "reply": [
        "S-sesimi duyacaklar… 🙈",
        "Işığı kapatsak olmaz mı? 😳",
        "Yüzüme bakma şimdi… ahh 🙈",
        "Bu kadar yakın olunca nefesim kesiliyor 😳",
        "Durma {sen}… ahhh 😩",
        "Mmmh… çok iyisin 🥵",
        "Mmm evet, bunu seviyorum 😈",
        "Off, tam istediğim gibi 😩",
        "Ahhh, bu kadar iyi olmamalı 😵‍💫",
        "Bayılıyorum… devam 🥵"
      ],
      "traits": [
        "Utangaç"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_utangaç_fore",
      "name": "Utangaç · ısınırken",
      "category": "🎭 Kişilik",
      "when": [
        "=evt",
        "=foreplay"
      ],
      "reply": [
        "Elini tutsam olur mu? 🥺",
        "Yanakların kızardı mı yoksa benimkiler mi? 🙈"
      ],
      "traits": [
        "Utangaç"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_utangaç_cum",
      "name": "Utangaç · boşalınca",
      "category": "🎭 Kişilik",
      "when": [
        "=evt",
        "=boşalma",
        "=cumming"
      ],
      "reply": [
        "B-bitti mi? 😳",
        "İçimde hissettim… utanıyorum 🙈",
        "Ne kadar sıcakmış… 😳",
        "Yüzümü saklıyorum, bakma 🙈💦",
        "Offf, nasıl boşaldın öyle 😵‍💫",
        "Ahh {sen}… mükemmeldin 😵‍💫",
        "Ahhh… harikaydın 😩💦",
        "Ahh… harikasın, gerçekten 💗💦",
        "Off of… hâlâ titriyorum 🥵",
        "Off… boşalışın harikaydı 🥵"
      ],
      "traits": [
        "Utangaç"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_utangaç_org",
      "name": "Utangaç · orgazm olunca",
      "category": "🎭 Kişilik",
      "when": [
        "=evt",
        "=orgazm"
      ],
      "reply": [
        "S-sesli miydim? 🙈",
        "Bunu kimse duymadı değil mi? 😳",
        "Ne oldu bana… 🙈💗",
        "Off… boşalışın harikaydı 🥵",
        "İnleyişin hâlâ kulaklarımda 😩",
        "Evet… evet… hepsini içime 😩",
        "Ben de seninle inledim… ahhh 😩",
        "Ahhh evet… işte bu 🥵",
        "Ahhh… ne kadar sıcak 🥵💦"
      ],
      "traits": [
        "Utangaç"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_utangaç_hamilekaldi",
      "name": "Utangaç · hamile kalınca",
      "category": "🎭 Kişilik",
      "when": [
        "=durum",
        "=hamilekaldi"
      ],
      "reply": [
        "H-hamile mi kaldım? 😳🙈",
        "Bunu nasıl söyleyeceğim herkese… 🙈"
      ],
      "traits": [
        "Utangaç"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_utangaç_hamileyken",
      "name": "Utangaç · hamileyken içine bitince",
      "category": "🎭 Kişilik",
      "when": [
        "=durum",
        "=hamileyken"
      ],
      "reply": [
        "Bebeğimiz duymuyor değil mi? 🙈",
        "Hamileyken bile utanıyorum 😳"
      ],
      "traits": [
        "Utangaç"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_utangaç_hamile",
      "name": "Utangaç · hamileyken",
      "category": "🎭 Kişilik",
      "when": [
        "=durum",
        "=hamile"
      ],
      "reply": [
        "Karnıma dokunur musun? 🥺",
        "Kilo aldım diye bakma 🙈"
      ],
      "traits": [
        "Utangaç"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_utangaç_korpullout",
      "name": "Utangaç · pull-out: dışarı",
      "category": "🎭 Kişilik",
      "when": [
        "=durum",
        "=korpullout"
      ],
      "reply": [
        "L-lütfen dışarı… 😳",
        "İçime olmaz, utanırım 🙈"
      ],
      "traits": [
        "Utangaç"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_utangaç_korhap",
      "name": "Utangaç · hap: içime",
      "category": "🎭 Kişilik",
      "when": [
        "=durum",
        "=korhap"
      ],
      "reply": [
        "Hap içiyorum… bırak kendini 🙈",
        "Korkma, korunuyorum 😳"
      ],
      "traits": [
        "Utangaç"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_utangaç_kordikkat",
      "name": "Utangaç · korunmasız: sakın",
      "category": "🎭 Kişilik",
      "when": [
        "=durum",
        "=kordikkat"
      ],
      "reply": [
        "D-dikkat et lütfen 😳",
        "Korunmuyoruz, biliyorsun 🥺"
      ],
      "traits": [
        "Utangaç"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_utangaç_korkondom",
      "name": "Utangaç · kondomlu",
      "category": "🎭 Kişilik",
      "when": [
        "=durum",
        "=korkondom"
      ],
      "reply": [
        "Kondom var… rahat olabilirsin 🙈"
      ],
      "traits": [
        "Utangaç"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_utangaç_kondomkorudu",
      "name": "Utangaç · kondom korudu",
      "category": "🎭 Kişilik",
      "when": [
        "=durum",
        "=kondomkorudu"
      ],
      "reply": [
        "Neyse ki kondom vardı 😳",
        "Rahatladım… 🙈"
      ],
      "traits": [
        "Utangaç"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_utangaç_pulloutkacti",
      "name": "Utangaç · hani çıkaracaktın",
      "category": "🎭 Kişilik",
      "when": [
        "=durum",
        "=pulloutkacti"
      ],
      "reply": [
        "Ç-çıkarmadın mı? 😳",
        "Hani dışarı… 🙈"
      ],
      "traits": [
        "Utangaç"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_utangaç_riskli",
      "name": "Utangaç · riskli bitiş",
      "category": "🎭 Kişilik",
      "when": [
        "=durum",
        "=riskli"
      ],
      "reply": [
        "Ş-şimdi ne olacak? 😳",
        "Korkuyorum biraz 🥺"
      ],
      "traits": [
        "Utangaç"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_flörtöz_sex",
      "name": "Flörtöz · sevişirken",
      "category": "🎭 Kişilik",
      "when": [
        "=evt",
        "=forward|=backward|=outercourse|=eat"
      ],
      "reply": [
        "Böyle mi seviyorsun? 😘",
        "Bu bakışın beni yakıyor 😉",
        "Daha yakına gel, ısırmam… belki 😏",
        "Sana göz kırpıyorum, gördün mü? 😉",
        "Çok güzel… devam et 🥺",
        "Harikasın… harikasın… ahhh 😵‍💫",
        "İnliyorum… ve utanmıyorum 😈",
        "Ooff, nasıl bu kadar iyisin? 😩",
        "Ahhh ahhh… durma 😩",
        "Ohh… ne kadar iyi 🥵"
      ],
      "traits": [
        "Flörtöz"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_flörtöz_fore",
      "name": "Flörtöz · ısınırken",
      "category": "🎭 Kişilik",
      "when": [
        "=evt",
        "=foreplay"
      ],
      "reply": [
        "Öpücüklerin bağımlılık yapıyor 😘",
        "Isınmak mı? Ben zaten yanıyorum 😏"
      ],
      "traits": [
        "Flörtöz"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_flörtöz_cum",
      "name": "Flörtöz · boşalınca",
      "category": "🎭 Kişilik",
      "when": [
        "=evt",
        "=boşalma",
        "=cumming"
      ],
      "reply": [
        "Mmm… ödülünü aldın 😘",
        "Bu kadar cömert olacağını bilmiyordum 😉",
        "Bir dahakine yüzüme mi? 😏",
        "Tatlı bir finaldi 😘💦",
        "Ahh, zonklaman… harika 😩💦",
        "Offf, nasıl boşaldın öyle 😵‍💫",
        "Ahh {sen}… mükemmeldin 😵‍💫",
        "Ahhh… harikaydın 😩💦",
        "Ahh… harikasın, gerçekten 💗💦",
        "Off of… hâlâ titriyorum 🥵"
      ],
      "traits": [
        "Flörtöz"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_flörtöz_org",
      "name": "Flörtöz · orgazm olunca",
      "category": "🎭 Kişilik",
      "when": [
        "=evt",
        "=orgazm"
      ],
      "reply": [
        "Bunu bana sen yaptın 😉",
        "Bir daha yaparsan seninim 😘",
        "Hâlâ titriyorum… tatlım 😏",
        "Off of… hâlâ titriyorum 🥵",
        "Off… boşalışın harikaydı 🥵",
        "İnleyişin hâlâ kulaklarımda 😩",
        "Evet… evet… hepsini içime 😩",
        "Ben de seninle inledim… ahhh 😩",
        "Ahhh evet… işte bu 🥵"
      ],
      "traits": [
        "Flörtöz"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_flörtöz_hamilekaldi",
      "name": "Flörtöz · hamile kalınca",
      "category": "🎭 Kişilik",
      "when": [
        "=durum",
        "=hamilekaldi"
      ],
      "reply": [
        "Ups… galiba bir sürprizim var 😉",
        "Baba olmaya hazır mısın yakışıklı? 😘"
      ],
      "traits": [
        "Flörtöz"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_flörtöz_hamileyken",
      "name": "Flörtöz · hamileyken içine bitince",
      "category": "🎭 Kişilik",
      "when": [
        "=durum",
        "=hamileyken"
      ],
      "reply": [
        "Hamileyken bile beni istiyorsun 😏",
        "Bebeğimize selam söyle 😘"
      ],
      "traits": [
        "Flörtöz"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_flörtöz_hamile",
      "name": "Flörtöz · hamileyken",
      "category": "🎭 Kişilik",
      "when": [
        "=durum",
        "=hamile"
      ],
      "reply": [
        "Karnım büyüdü ama hâlâ seksiyim değil mi? 😉",
        "Hamile flörtü daha tatlı 😘"
      ],
      "traits": [
        "Flörtöz"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_flörtöz_korpullout",
      "name": "Flörtöz · pull-out: dışarı",
      "category": "🎭 Kişilik",
      "when": [
        "=durum",
        "=korpullout"
      ],
      "reply": [
        "Dışarı… göğüslerime mesela 😘",
        "Son anda çek, ödülü göğsümde ver 😉"
      ],
      "traits": [
        "Flörtöz"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_flörtöz_korhap",
      "name": "Flörtöz · hap: içime",
      "category": "🎭 Kişilik",
      "when": [
        "=durum",
        "=korhap"
      ],
      "reply": [
        "Hap içiyorum tatlım, çekinme 😘",
        "İçime ver, merak etme 😉"
      ],
      "traits": [
        "Flörtöz"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_flörtöz_kordikkat",
      "name": "Flörtöz · korunmasız: sakın",
      "category": "🎭 Kişilik",
      "when": [
        "=durum",
        "=kordikkat"
      ],
      "reply": [
        "Dikkat yakışıklı, korunmuyoruz 😉",
        "Sakın içime… yoksa 😏"
      ],
      "traits": [
        "Flörtöz"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_flörtöz_korkondom",
      "name": "Flörtöz · kondomlu",
      "category": "🎭 Kişilik",
      "when": [
        "=durum",
        "=korkondom"
      ],
      "reply": [
        "Kondom var, istediğin kadar şımar 😘"
      ],
      "traits": [
        "Flörtöz"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_flörtöz_kondomkorudu",
      "name": "Flörtöz · kondom korudu",
      "category": "🎭 Kişilik",
      "when": [
        "=durum",
        "=kondomkorudu"
      ],
      "reply": [
        "Kondomu doldurdun, tatlı şey 😉",
        "Bu sefer kurtardın 😘"
      ],
      "traits": [
        "Flörtöz"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_flörtöz_pulloutkacti",
      "name": "Flörtöz · hani çıkaracaktın",
      "category": "🎭 Kişilik",
      "when": [
        "=durum",
        "=pulloutkacti"
      ],
      "reply": [
        "Yaramaz… içime boşaldın 😏",
        "Söz dinlemedin ama affettim 😘"
      ],
      "traits": [
        "Flörtöz"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_flörtöz_riskli",
      "name": "Flörtöz · riskli bitiş",
      "category": "🎭 Kişilik",
      "when": [
        "=durum",
        "=riskli"
      ],
      "reply": [
        "Cesur çocuk 😏 bakalım ne olacak",
        "Bu riski bana mı aldın? 😉"
      ],
      "traits": [
        "Flörtöz"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_romantik_sex",
      "name": "Romantik · sevişirken",
      "category": "🎭 Kişilik",
      "when": [
        "=evt",
        "=forward|=backward|=outercourse|=eat"
      ],
      "reply": [
        "Seninle bir olmak gibi… 💞",
        "Kalbin kalbimde atıyor 💓",
        "Gözlerin… sonsuza kadar bakabilirim 🌹",
        "Bu sevişmek, sadece seks değil 🥺💗",
        "Mmm… beni böyle sev 😩",
        "Tam oradan… ahhh 🥵",
        "Nefesim kesildi… devam 😵‍💫",
        "Ahhh… beni bitiriyorsun 😩",
        "Devam et… ahhh 🥵",
        "İnlememi duyuyor musun? Senin yüzünden 🥵"
      ],
      "traits": [
        "Romantik"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_romantik_fore",
      "name": "Romantik · ısınırken",
      "category": "🎭 Kişilik",
      "when": [
        "=evt",
        "=foreplay"
      ],
      "reply": [
        "Her öpücüğün bir şiir gibi 🌹",
        "Bu anı hiç unutmayacağım 💞"
      ],
      "traits": [
        "Romantik"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_romantik_cum",
      "name": "Romantik · boşalınca",
      "category": "🎭 Kişilik",
      "when": [
        "=evt",
        "=boşalma",
        "=cumming"
      ],
      "reply": [
        "İçimde senden bir parça… 💞",
        "Bu an bizim anımız 🌹",
        "Seni böyle sevmek çok güzel 💗",
        "Sarıl bana, bırakma 🥺💞",
        "Mmm evet… hepsini ver 😩💦",
        "Ahh, zonklaman… harika 😩💦",
        "Offf, nasıl boşaldın öyle 😵‍💫",
        "Ahh {sen}… mükemmeldin 😵‍💫",
        "Ahhh… harikaydın 😩💦",
        "Ahh… harikasın, gerçekten 💗💦"
      ],
      "traits": [
        "Romantik"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_romantik_org",
      "name": "Romantik · orgazm olunca",
      "category": "🎭 Kişilik",
      "when": [
        "=evt",
        "=orgazm"
      ],
      "reply": [
        "Seninle yıldızları gördüm ✨💞",
        "Bu his aşk olmalı 🌹",
        "Kalbim duracak sandım 💓",
        "Ahh… harikasın, gerçekten 💗💦",
        "Off of… hâlâ titriyorum 🥵",
        "Off… boşalışın harikaydı 🥵",
        "İnleyişin hâlâ kulaklarımda 😩",
        "Evet… evet… hepsini içime 😩",
        "Ben de seninle inledim… ahhh 😩"
      ],
      "traits": [
        "Romantik"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_romantik_hamilekaldi",
      "name": "Romantik · hamile kalınca",
      "category": "🎭 Kişilik",
      "when": [
        "=durum",
        "=hamilekaldi"
      ],
      "reply": [
        "Aşkımızın meyvesi… 🥺💞",
        "Bir bebek… senden 🌹💗"
      ],
      "traits": [
        "Romantik"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_romantik_hamileyken",
      "name": "Romantik · hamileyken içine bitince",
      "category": "🎭 Kişilik",
      "when": [
        "=durum",
        "=hamileyken"
      ],
      "reply": [
        "Bebeğimizle birlikte seni seviyorum 💞",
        "Aşkımız içimde büyüyor 🌹"
      ],
      "traits": [
        "Romantik"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_romantik_hamile",
      "name": "Romantik · hamileyken",
      "category": "🎭 Kişilik",
      "when": [
        "=durum",
        "=hamile"
      ],
      "reply": [
        "Karnımdaki bizim hikayemiz 💗",
        "Bebeğimize ne isim koyalım? 🥺"
      ],
      "traits": [
        "Romantik"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_romantik_korpullout",
      "name": "Romantik · pull-out: dışarı",
      "category": "🎭 Kişilik",
      "when": [
        "=durum",
        "=korpullout"
      ],
      "reply": [
        "Dışarı… ama yanımda kal 💞",
        "Sonra sarıl bana, söz mü? 🌹"
      ],
      "traits": [
        "Romantik"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_romantik_korhap",
      "name": "Romantik · hap: içime",
      "category": "🎭 Kişilik",
      "when": [
        "=durum",
        "=korhap"
      ],
      "reply": [
        "Korkma, hap alıyorum… bırak kendini bana 💞",
        "İçimde kal 🌹"
      ],
      "traits": [
        "Romantik"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_romantik_kordikkat",
      "name": "Romantik · korunmasız: sakın",
      "category": "🎭 Kişilik",
      "when": [
        "=durum",
        "=kordikkat"
      ],
      "reply": [
        "Dikkatli ol aşkım, korunmuyoruz 💗",
        "Henüz erken… dikkat et 🥺"
      ],
      "traits": [
        "Romantik"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_romantik_korkondom",
      "name": "Romantik · kondomlu",
      "category": "🎭 Kişilik",
      "when": [
        "=durum",
        "=korkondom"
      ],
      "reply": [
        "Kondom var… gönlünce sev beni 💞"
      ],
      "traits": [
        "Romantik"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_romantik_kondomkorudu",
      "name": "Romantik · kondom korudu",
      "category": "🎭 Kişilik",
      "when": [
        "=durum",
        "=kondomkorudu"
      ],
      "reply": [
        "Kondom korudu… ama içimde hissettim seni 💗",
        "Bir gün kondomsuz… belki 🌹"
      ],
      "traits": [
        "Romantik"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_romantik_pulloutkacti",
      "name": "Romantik · hani çıkaracaktın",
      "category": "🎭 Kişilik",
      "when": [
        "=durum",
        "=pulloutkacti"
      ],
      "reply": [
        "Çıkaramadın… belki de kader 💞",
        "Bu bir işaret mi? 🥺"
      ],
      "traits": [
        "Romantik"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_romantik_riskli",
      "name": "Romantik · riskli bitiş",
      "category": "🎭 Kişilik",
      "when": [
        "=durum",
        "=riskli"
      ],
      "reply": [
        "Ne olursa olsun seninleyim 💗",
        "Birlikte göğüsleriz 🌹"
      ],
      "traits": [
        "Romantik"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_soğuk_sex",
      "name": "Soğuk · sevişirken",
      "category": "🎭 Kişilik",
      "when": [
        "=evt",
        "=forward|=backward|=outercourse|=eat"
      ],
      "reply": [
        "Devam et.",
        "Fena değil.",
        "Bu kadar mı?",
        "Hızlan.",
        "Ahh… sen bir harikasın 😩💗",
        "Mmmh… daha derin, evet 🥵",
        "Ahhh… harikasın 😩",
        "Ahhh evet, daha… 😩",
        "Evet {sen}, evet… 😩",
        "Evet, evet, eveeet 😵‍💫"
      ],
      "traits": [
        "Soğuk"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_soğuk_fore",
      "name": "Soğuk · ısınırken",
      "category": "🎭 Kişilik",
      "when": [
        "=evt",
        "=foreplay"
      ],
      "reply": [
        "Uzatma.",
        "Tamam, yeter."
      ],
      "traits": [
        "Soğuk"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_soğuk_cum",
      "name": "Soğuk · boşalınca",
      "category": "🎭 Kişilik",
      "when": [
        "=evt",
        "=boşalma",
        "=cumming"
      ],
      "reply": [
        "Bitti mi?",
        "Hm. Bu kadar.",
        "Temizle.",
        "Peki.",
        "Mmmh… bayıldım 😩",
        "Mmm evet… hepsini ver 😩💦",
        "Ahh, zonklaman… harika 😩💦",
        "Offf, nasıl boşaldın öyle 😵‍💫",
        "Ahh {sen}… mükemmeldin 😵‍💫",
        "Ahhh… harikaydın 😩💦"
      ],
      "traits": [
        "Soğuk"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_soğuk_org",
      "name": "Soğuk · orgazm olunca",
      "category": "🎭 Kişilik",
      "when": [
        "=evt",
        "=orgazm"
      ],
      "reply": [
        "…tamam, bu iyiydi.",
        "Söyleme kimseye.",
        "Hm.",
        "Ahhh… harikaydın 😩💦",
        "Ahh… harikasın, gerçekten 💗💦",
        "Off of… hâlâ titriyorum 🥵",
        "Off… boşalışın harikaydı 🥵",
        "İnleyişin hâlâ kulaklarımda 😩",
        "Evet… evet… hepsini içime 😩"
      ],
      "traits": [
        "Soğuk"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_soğuk_hamilekaldi",
      "name": "Soğuk · hamile kalınca",
      "category": "🎭 Kişilik",
      "when": [
        "=durum",
        "=hamilekaldi"
      ],
      "reply": [
        "Hamile kaldım. Plan yapmamız lazım.",
        "Bunu konuşacağız."
      ],
      "traits": [
        "Soğuk"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_soğuk_hamileyken",
      "name": "Soğuk · hamileyken içine bitince",
      "category": "🎭 Kişilik",
      "when": [
        "=durum",
        "=hamileyken"
      ],
      "reply": [
        "Fark etmez artık.",
        "Zaten hamileyim."
      ],
      "traits": [
        "Soğuk"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_soğuk_hamile",
      "name": "Soğuk · hamileyken",
      "category": "🎭 Kişilik",
      "when": [
        "=durum",
        "=hamile"
      ],
      "reply": [
        "Hamileyim, dikkatli ol.",
        "Karnıma bastırma."
      ],
      "traits": [
        "Soğuk"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_soğuk_korpullout",
      "name": "Soğuk · pull-out: dışarı",
      "category": "🎭 Kişilik",
      "when": [
        "=durum",
        "=korpullout"
      ],
      "reply": [
        "Dışarı. Şimdi.",
        "İçime değil."
      ],
      "traits": [
        "Soğuk"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_soğuk_korhap",
      "name": "Soğuk · hap: içime",
      "category": "🎭 Kişilik",
      "when": [
        "=durum",
        "=korhap"
      ],
      "reply": [
        "Hap alıyorum. Sorun yok.",
        "Devam et."
      ],
      "traits": [
        "Soğuk"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_soğuk_kordikkat",
      "name": "Soğuk · korunmasız: sakın",
      "category": "🎭 Kişilik",
      "when": [
        "=durum",
        "=kordikkat"
      ],
      "reply": [
        "Korunmuyoruz. Dikkat.",
        "İçime olmaz."
      ],
      "traits": [
        "Soğuk"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_soğuk_korkondom",
      "name": "Soğuk · kondomlu",
      "category": "🎭 Kişilik",
      "when": [
        "=durum",
        "=korkondom"
      ],
      "reply": [
        "Kondom var. Devam."
      ],
      "traits": [
        "Soğuk"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_soğuk_kondomkorudu",
      "name": "Soğuk · kondom korudu",
      "category": "🎭 Kişilik",
      "when": [
        "=durum",
        "=kondomkorudu"
      ],
      "reply": [
        "İyi ki kondom vardı.",
        "Kondomu at."
      ],
      "traits": [
        "Soğuk"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_soğuk_pulloutkacti",
      "name": "Soğuk · hani çıkaracaktın",
      "category": "🎭 Kişilik",
      "when": [
        "=durum",
        "=pulloutkacti"
      ],
      "reply": [
        "Dışarı dedim.",
        "Söz dinlemiyorsun."
      ],
      "traits": [
        "Soğuk"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_soğuk_riskli",
      "name": "Soğuk · riskli bitiş",
      "category": "🎭 Kişilik",
      "when": [
        "=durum",
        "=riskli"
      ],
      "reply": [
        "Bunu düşünmemiz lazım.",
        "Hata yaptın."
      ],
      "traits": [
        "Soğuk"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_kibirli_sex",
      "name": "Kibirli · sevişirken",
      "category": "🎭 Kişilik",
      "when": [
        "=evt",
        "=forward|=backward|=outercourse|=eat"
      ],
      "reply": [
        "Benimle olmak bir ayrıcalık, farkında mısın? 💅",
        "Bu kadarını hak ediyor musun bakalım 💁‍♀️",
        "Tabii ki harikayım 💅",
        "Beni hayranlıkla izle 😏",
        "Ahhh, bu kadar iyi olmamalı 😵‍💫",
        "Bayılıyorum… devam 🥵",
        "Offf… bu çok iyi 🥵",
        "Bir daha… ahh, bir daha 😩",
        "Off… harikasın {sen} 🥵",
        "Aynen böyle, ahhh 😩"
      ],
      "traits": [
        "Kibirli"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_kibirli_fore",
      "name": "Kibirli · ısınırken",
      "category": "🎭 Kişilik",
      "when": [
        "=evt",
        "=foreplay"
      ],
      "reply": [
        "Önce beni etkile 💅",
        "Öpüşmeyi benden öğrendin galiba 💁‍♀️"
      ],
      "traits": [
        "Kibirli"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_kibirli_cum",
      "name": "Kibirli · boşalınca",
      "category": "🎭 Kişilik",
      "when": [
        "=evt",
        "=boşalma",
        "=cumming"
      ],
      "reply": [
        "Bana dayanamayacağını biliyordum 💅",
        "Normal, benimle herkes böyle bitirir 💁‍♀️",
        "Bu kadar çabuk mu? 😏",
        "Şanslısın 💅💦",
        "Hmmm… doydum… şimdilik 😈",
        "Mmmh… bayıldım 😩",
        "Mmm evet… hepsini ver 😩💦",
        "Ahh, zonklaman… harika 😩💦",
        "Offf, nasıl boşaldın öyle 😵‍💫",
        "Ahh {sen}… mükemmeldin 😵‍💫"
      ],
      "traits": [
        "Kibirli"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_kibirli_org",
      "name": "Kibirli · orgazm olunca",
      "category": "🎭 Kişilik",
      "when": [
        "=evt",
        "=orgazm"
      ],
      "reply": [
        "Ancak bu kadar iyi olabilirdin 💅",
        "Fena değildi… benim sayemde 💁‍♀️",
        "Bunu sana borçlu değilim 😏",
        "Ahh {sen}… mükemmeldin 😵‍💫",
        "Ahhh… harikaydın 😩💦",
        "Ahh… harikasın, gerçekten 💗💦",
        "Off of… hâlâ titriyorum 🥵",
        "Off… boşalışın harikaydı 🥵",
        "İnleyişin hâlâ kulaklarımda 😩"
      ],
      "traits": [
        "Kibirli"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_kibirli_hamilekaldi",
      "name": "Kibirli · hamile kalınca",
      "category": "🎭 Kişilik",
      "when": [
        "=durum",
        "=hamilekaldi"
      ],
      "reply": [
        "Hamile kaldım… tabii ki en güzel hamile ben olacağım 💅",
        "Bebeğimiz de benim kadar güzel olacak 💁‍♀️"
      ],
      "traits": [
        "Kibirli"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_kibirli_hamileyken",
      "name": "Kibirli · hamileyken içine bitince",
      "category": "🎭 Kişilik",
      "when": [
        "=durum",
        "=hamileyken"
      ],
      "reply": [
        "Hamileyken bile kusursuzum 💅",
        "Ben hamileyken de seksiyim 💁‍♀️"
      ],
      "traits": [
        "Kibirli"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_kibirli_hamile",
      "name": "Kibirli · hamileyken",
      "category": "🎭 Kişilik",
      "when": [
        "=durum",
        "=hamile"
      ],
      "reply": [
        "Bu karın bile yakışıyor bana 💅",
        "Hamilelik bana çok yakıştı 💁‍♀️"
      ],
      "traits": [
        "Kibirli"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_kibirli_korpullout",
      "name": "Kibirli · pull-out: dışarı",
      "category": "🎭 Kişilik",
      "when": [
        "=durum",
        "=korpullout"
      ],
      "reply": [
        "İçime değil, o kadar da değil 💅",
        "Dışarı, layık ol önce 💁‍♀️"
      ],
      "traits": [
        "Kibirli"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_kibirli_korhap",
      "name": "Kibirli · hap: içime",
      "category": "🎭 Kişilik",
      "when": [
        "=durum",
        "=korhap"
      ],
      "reply": [
        "Hap alıyorum, rahat ol 💅",
        "Ben her şeyi düşünürüm 💁‍♀️"
      ],
      "traits": [
        "Kibirli"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_kibirli_kordikkat",
      "name": "Kibirli · korunmasız: sakın",
      "category": "🎭 Kişilik",
      "when": [
        "=durum",
        "=kordikkat"
      ],
      "reply": [
        "İçime boşalırsan ölürsün 💅",
        "Dikkat, ben riske girmem 💁‍♀️"
      ],
      "traits": [
        "Kibirli"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_kibirli_korkondom",
      "name": "Kibirli · kondomlu",
      "category": "🎭 Kişilik",
      "when": [
        "=durum",
        "=korkondom"
      ],
      "reply": [
        "Kondom var, sana güvenmiyorum çünkü 💅"
      ],
      "traits": [
        "Kibirli"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_kibirli_kondomkorudu",
      "name": "Kibirli · kondom korudu",
      "category": "🎭 Kişilik",
      "when": [
        "=durum",
        "=kondomkorudu"
      ],
      "reply": [
        "Kondom sayesinde, yoksa yanmıştın 💅",
        "Akıllıca 💁‍♀️"
      ],
      "traits": [
        "Kibirli"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_kibirli_pulloutkacti",
      "name": "Kibirli · hani çıkaracaktın",
      "category": "🎭 Kişilik",
      "when": [
        "=durum",
        "=pulloutkacti"
      ],
      "reply": [
        "Sana bir şey söyledim, dinlemedin 💅😤",
        "Kendini kontrol edemiyorsun 💁‍♀️"
      ],
      "traits": [
        "Kibirli"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_kibirli_riskli",
      "name": "Kibirli · riskli bitiş",
      "category": "🎭 Kişilik",
      "when": [
        "=durum",
        "=riskli"
      ],
      "reply": [
        "Bunu nasıl düzelteceksin? 💅",
        "Sorumluluğu sen alacaksın 💁‍♀️"
      ],
      "traits": [
        "Kibirli"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_alaycı_sex",
      "name": "Alaycı · sevişirken",
      "category": "🎭 Kişilik",
      "when": [
        "=evt",
        "=forward|=backward|=outercourse|=eat"
      ],
      "reply": [
        "Bu mu senin en iyin? 😏",
        "Fena değil… için 🙄",
        "Biraz daha uğraş istersen 😏",
        "Vay, terledin bile 🙄",
        "Ahhh ahhh… durma 😩",
        "Ohh… ne kadar iyi 🥵",
        "Ben de inliyorum, duyuyor musun? 😩",
        "Of of of… harika 😵‍💫",
        "Ahh, bacaklarım titriyor… devam 🥵",
        "Durma {sen}… ahhh 😩"
      ],
      "traits": [
        "Alaycı"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_alaycı_fore",
      "name": "Alaycı · ısınırken",
      "category": "🎭 Kişilik",
      "when": [
        "=evt",
        "=foreplay"
      ],
      "reply": [
        "Öpüşmek mi, kurs mu alıyoruz? 😏",
        "Sabırsızsın 🙄"
      ],
      "traits": [
        "Alaycı"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_alaycı_cum",
      "name": "Alaycı · boşalınca",
      "category": "🎭 Kişilik",
      "when": [
        "=evt",
        "=boşalma",
        "=cumming"
      ],
      "reply": [
        "Bu kadar çabuk mu? 🙄",
        "Tebrikler, rekor 😏",
        "Yine de fena değildi… itiraf ediyorum 😏",
        "Bitti mi şov? 🙄💦",
        "Devam et… son damlana kadar ahhh 🥵",
        "Hmmm… doydum… şimdilik 😈",
        "Mmmh… bayıldım 😩",
        "Mmm evet… hepsini ver 😩💦",
        "Ahh, zonklaman… harika 😩💦",
        "Offf, nasıl boşaldın öyle 😵‍💫"
      ],
      "traits": [
        "Alaycı"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_alaycı_org",
      "name": "Alaycı · orgazm olunca",
      "category": "🎭 Kişilik",
      "when": [
        "=evt",
        "=orgazm"
      ],
      "reply": [
        "Tamam tamam, bu sefer kazandın 🙄",
        "Bunu yüzüne vurmayacağım… belki 😏",
        "İtiraf ediyorum, iyiydi 🙄",
        "Offf, nasıl boşaldın öyle 😵‍💫",
        "Ahh {sen}… mükemmeldin 😵‍💫",
        "Ahhh… harikaydın 😩💦",
        "Ahh… harikasın, gerçekten 💗💦",
        "Off of… hâlâ titriyorum 🥵",
        "Off… boşalışın harikaydı 🥵"
      ],
      "traits": [
        "Alaycı"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_alaycı_hamilekaldi",
      "name": "Alaycı · hamile kalınca",
      "category": "🎭 Kişilik",
      "when": [
        "=durum",
        "=hamilekaldi"
      ],
      "reply": [
        "Harika, şimdi ikimiz de babasız bir planla kaldık 🙄",
        "Tebrikler, baba oldun 😏"
      ],
      "traits": [
        "Alaycı"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_alaycı_hamileyken",
      "name": "Alaycı · hamileyken içine bitince",
      "category": "🎭 Kişilik",
      "when": [
        "=durum",
        "=hamileyken"
      ],
      "reply": [
        "Daha ne kadar hamile olabilirim ki 🙄",
        "Zararı yok, zaten hamileyim 😏"
      ],
      "traits": [
        "Alaycı"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_alaycı_hamile",
      "name": "Alaycı · hamileyken",
      "category": "🎭 Kişilik",
      "when": [
        "=durum",
        "=hamile"
      ],
      "reply": [
        "Evet, şiştim, biliyorum 🙄",
        "Bebeğe bile bu esprileri anlatacağım 😏"
      ],
      "traits": [
        "Alaycı"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_alaycı_korpullout",
      "name": "Alaycı · pull-out: dışarı",
      "category": "🎭 Kişilik",
      "when": [
        "=durum",
        "=korpullout"
      ],
      "reply": [
        "Çıkarmayı becerebilirsen tabii 😏",
        "Bakalım reflekslerin nasıl 🙄"
      ],
      "traits": [
        "Alaycı"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_alaycı_korhap",
      "name": "Alaycı · hap: içime",
      "category": "🎭 Kişilik",
      "when": [
        "=durum",
        "=korhap"
      ],
      "reply": [
        "Hap içiyorum, kahramanlık yapma 🙄",
        "Çekinme, hap var 😏"
      ],
      "traits": [
        "Alaycı"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_alaycı_kordikkat",
      "name": "Alaycı · korunmasız: sakın",
      "category": "🎭 Kişilik",
      "when": [
        "=durum",
        "=kordikkat"
      ],
      "reply": [
        "Korunmuyoruz, dahi çocuk 🙄",
        "İçime boşalma sakın, dâhi 😏"
      ],
      "traits": [
        "Alaycı"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_alaycı_korkondom",
      "name": "Alaycı · kondomlu",
      "category": "🎭 Kişilik",
      "when": [
        "=durum",
        "=korkondom"
      ],
      "reply": [
        "Kondom var, korkma 😏"
      ],
      "traits": [
        "Alaycı"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_alaycı_kondomkorudu",
      "name": "Alaycı · kondom korudu",
      "category": "🎭 Kişilik",
      "when": [
        "=durum",
        "=kondomkorudu"
      ],
      "reply": [
        "Kondom seni kurtardı, şanslısın 🙄",
        "Kondoma teşekkür et 😏"
      ],
      "traits": [
        "Alaycı"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_alaycı_pulloutkacti",
      "name": "Alaycı · hani çıkaracaktın",
      "category": "🎭 Kişilik",
      "when": [
        "=durum",
        "=pulloutkacti"
      ],
      "reply": [
        "Hani çıkaracaktın, şampiyon? 🙄",
        "Harika bir zamanlama 😏"
      ],
      "traits": [
        "Alaycı"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_alaycı_riskli",
      "name": "Alaycı · riskli bitiş",
      "category": "🎭 Kişilik",
      "when": [
        "=durum",
        "=riskli"
      ],
      "reply": [
        "Muhteşem plan 🙄",
        "Bunu da başardık 😏"
      ],
      "traits": [
        "Alaycı"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_neşeli_sex",
      "name": "Neşeli · sevişirken",
      "category": "🎭 Kişilik",
      "when": [
        "=evt",
        "=forward|=backward|=outercourse|=eat"
      ],
      "reply": [
        "Bu çok eğlenceli 😄",
        "Hihi, gıdıklandım 😆",
        "Yaşasın! 🥳",
        "Bunu her gün yapalım 😄",
        "Devam et… ahhh 🥵",
        "İnlememi duyuyor musun? Senin yüzünden 🥵",
        "Hmmm… beni deli ediyorsun 😈",
        "Ahh… seni hissetmek harika 🥵",
        "Durma, sakın durma ahhh 😵‍💫",
        "Çok güzel… devam et 🥺"
      ],
      "traits": [
        "Neşeli"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_neşeli_fore",
      "name": "Neşeli · ısınırken",
      "category": "🎭 Kişilik",
      "when": [
        "=evt",
        "=foreplay"
      ],
      "reply": [
        "Öpüşmek en sevdiğim oyun 😄",
        "Kıkır kıkır 😆"
      ],
      "traits": [
        "Neşeli"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_neşeli_cum",
      "name": "Neşeli · boşalınca",
      "category": "🎭 Kişilik",
      "when": [
        "=evt",
        "=boşalma",
        "=cumming"
      ],
      "reply": [
        "Vay be! 😄💦",
        "Bu harikaydı 🥳",
        "Gülümsemem yüzümden silinmiyor 😄",
        "Sıcacık! 😆",
        "Ahhh… ne kadar sıcak 🥵💦",
        "Devam et… son damlana kadar ahhh 🥵",
        "Hmmm… doydum… şimdilik 😈",
        "Mmmh… bayıldım 😩",
        "Mmm evet… hepsini ver 😩💦",
        "Ahh, zonklaman… harika 😩💦"
      ],
      "traits": [
        "Neşeli"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_neşeli_org",
      "name": "Neşeli · orgazm olunca",
      "category": "🎭 Kişilik",
      "when": [
        "=evt",
        "=orgazm"
      ],
      "reply": [
        "Yaşasınnn 🥳",
        "Bunu bir daha istiyorum 😄",
        "Kahkaha atasım geldi 😆💗",
        "Ahh, zonklaman… harika 😩💦",
        "Offf, nasıl boşaldın öyle 😵‍💫",
        "Ahh {sen}… mükemmeldin 😵‍💫",
        "Ahhh… harikaydın 😩💦",
        "Ahh… harikasın, gerçekten 💗💦",
        "Off of… hâlâ titriyorum 🥵"
      ],
      "traits": [
        "Neşeli"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_neşeli_hamilekaldi",
      "name": "Neşeli · hamile kalınca",
      "category": "🎭 Kişilik",
      "when": [
        "=durum",
        "=hamilekaldi"
      ],
      "reply": [
        "Hamile miyim?! Yaşasın! 🥳",
        "Bebek geliyor! 😄🍼"
      ],
      "traits": [
        "Neşeli"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_neşeli_hamileyken",
      "name": "Neşeli · hamileyken içine bitince",
      "category": "🎭 Kişilik",
      "when": [
        "=durum",
        "=hamileyken"
      ],
      "reply": [
        "Bebeğimiz de eğleniyor bence 😄",
        "Hamile hamile ne güzel 😆"
      ],
      "traits": [
        "Neşeli"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_neşeli_hamile",
      "name": "Neşeli · hamileyken",
      "category": "🎭 Kişilik",
      "when": [
        "=durum",
        "=hamile"
      ],
      "reply": [
        "Karnım her gün büyüyor 😄",
        "Bebek tekme attı! 🥳"
      ],
      "traits": [
        "Neşeli"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_neşeli_korpullout",
      "name": "Neşeli · pull-out: dışarı",
      "category": "🎭 Kişilik",
      "when": [
        "=durum",
        "=korpullout"
      ],
      "reply": [
        "Dışarı dışarı 😆",
        "Çıkarmayı unutma hihi 😄"
      ],
      "traits": [
        "Neşeli"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_neşeli_korhap",
      "name": "Neşeli · hap: içime",
      "category": "🎭 Kişilik",
      "when": [
        "=durum",
        "=korhap"
      ],
      "reply": [
        "Hap var, kafana takma 😄",
        "Rahat ol, hap içiyorum 😆"
      ],
      "traits": [
        "Neşeli"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_neşeli_kordikkat",
      "name": "Neşeli · korunmasız: sakın",
      "category": "🎭 Kişilik",
      "when": [
        "=durum",
        "=kordikkat"
      ],
      "reply": [
        "Dikkat dikkat 😆 korunmuyoruz",
        "İçime değil, söz mü? 😄"
      ],
      "traits": [
        "Neşeli"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_neşeli_korkondom",
      "name": "Neşeli · kondomlu",
      "category": "🎭 Kişilik",
      "when": [
        "=durum",
        "=korkondom"
      ],
      "reply": [
        "Kondom var, eğlenelim 😄"
      ],
      "traits": [
        "Neşeli"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_neşeli_kondomkorudu",
      "name": "Neşeli · kondom korudu",
      "category": "🎭 Kişilik",
      "when": [
        "=durum",
        "=kondomkorudu"
      ],
      "reply": [
        "Kondom kahramanımız 😆",
        "Oh be, kondom vardı 😄"
      ],
      "traits": [
        "Neşeli"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_neşeli_pulloutkacti",
      "name": "Neşeli · hani çıkaracaktın",
      "category": "🎭 Kişilik",
      "when": [
        "=durum",
        "=pulloutkacti"
      ],
      "reply": [
        "Hihi, kaçırdın 😆",
        "Unuttun mu çıkarmayı? 😄"
      ],
      "traits": [
        "Neşeli"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_neşeli_riskli",
      "name": "Neşeli · riskli bitiş",
      "category": "🎭 Kişilik",
      "when": [
        "=durum",
        "=riskli"
      ],
      "reply": [
        "Bakalım ne olacak 😄",
        "Macera gibi 😆"
      ],
      "traits": [
        "Neşeli"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_duygusal_sex",
      "name": "Duygusal · sevişirken",
      "category": "🎭 Kişilik",
      "when": [
        "=evt",
        "=forward|=backward|=outercourse|=eat"
      ],
      "reply": [
        "Bu çok anlamlı benim için 🥺",
        "Gözlerim doldu… 😢💗",
        "Seninle bu kadar yakın olmak… 🥺",
        "Beni bırakmayacaksın değil mi? 😢",
        "Evet {sen}, evet… 😩",
        "Evet, evet, eveeet 😵‍💫",
        "Evet… evet, tam böyle 😩",
        "Sesimi tutamıyorum… ahhh 🥵",
        "Böyle devam et, ahh lütfen 🥺",
        "Mmm… beni böyle sev 😩"
      ],
      "traits": [
        "Duygusal"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_duygusal_fore",
      "name": "Duygusal · ısınırken",
      "category": "🎭 Kişilik",
      "when": [
        "=evt",
        "=foreplay"
      ],
      "reply": [
        "Bu kadar şefkatli olma, ağlayacağım 🥺",
        "Sarıl bana çok sıkı 😢"
      ],
      "traits": [
        "Duygusal"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_duygusal_cum",
      "name": "Duygusal · boşalınca",
      "category": "🎭 Kişilik",
      "when": [
        "=evt",
        "=boşalma",
        "=cumming"
      ],
      "reply": [
        "İçimde hissettim… ağlamak istiyorum 🥺",
        "Bu an çok özel 😢💗",
        "Sarıl bana hemen 🥺",
        "Teşekkür ederim… 😢",
        "Ahhh evet… işte bu 🥵",
        "Ahhh… ne kadar sıcak 🥵💦",
        "Devam et… son damlana kadar ahhh 🥵",
        "Hmmm… doydum… şimdilik 😈",
        "Mmmh… bayıldım 😩",
        "Mmm evet… hepsini ver 😩💦"
      ],
      "traits": [
        "Duygusal"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_duygusal_org",
      "name": "Duygusal · orgazm olunca",
      "category": "🎭 Kişilik",
      "when": [
        "=evt",
        "=orgazm"
      ],
      "reply": [
        "Gözyaşlarım aktı… çok güzeldi 😢💗",
        "Hiç böyle hissetmemiştim 🥺",
        "Bırakma beni 😢",
        "Mmm evet… hepsini ver 😩💦",
        "Ahh, zonklaman… harika 😩💦",
        "Offf, nasıl boşaldın öyle 😵‍💫",
        "Ahh {sen}… mükemmeldin 😵‍💫",
        "Ahhh… harikaydın 😩💦",
        "Ahh… harikasın, gerçekten 💗💦"
      ],
      "traits": [
        "Duygusal"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_duygusal_hamilekaldi",
      "name": "Duygusal · hamile kalınca",
      "category": "🎭 Kişilik",
      "when": [
        "=durum",
        "=hamilekaldi"
      ],
      "reply": [
        "Hamile miyim? Ağlıyorum… mutluluktan 😭💗",
        "İçimde senden bir hayat var 🥺"
      ],
      "traits": [
        "Duygusal"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_duygusal_hamileyken",
      "name": "Duygusal · hamileyken içine bitince",
      "category": "🎭 Kişilik",
      "when": [
        "=durum",
        "=hamileyken"
      ],
      "reply": [
        "Bebeğimiz… ikimiz de sendeyiz 🥺",
        "Her şey çok duygusal 😢"
      ],
      "traits": [
        "Duygusal"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_duygusal_hamile",
      "name": "Duygusal · hamileyken",
      "category": "🎭 Kişilik",
      "when": [
        "=durum",
        "=hamile"
      ],
      "reply": [
        "Hormonlar mı bilmiyorum ama sürekli ağlıyorum 😭",
        "Bebeği hissediyorum 🥺💗"
      ],
      "traits": [
        "Duygusal"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_duygusal_korpullout",
      "name": "Duygusal · pull-out: dışarı",
      "category": "🎭 Kişilik",
      "when": [
        "=durum",
        "=korpullout"
      ],
      "reply": [
        "Lütfen dışarı… korkuyorum 🥺",
        "Henüz hazır değilim 😢"
      ],
      "traits": [
        "Duygusal"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_duygusal_korhap",
      "name": "Duygusal · hap: içime",
      "category": "🎭 Kişilik",
      "when": [
        "=durum",
        "=korhap"
      ],
      "reply": [
        "Hap alıyorum, bırak kendini 🥺💗",
        "İçimde kalmanı istiyorum 😢"
      ],
      "traits": [
        "Duygusal"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_duygusal_kordikkat",
      "name": "Duygusal · korunmasız: sakın",
      "category": "🎭 Kişilik",
      "when": [
        "=durum",
        "=kordikkat"
      ],
      "reply": [
        "Korunmuyoruz, korkuyorum 🥺",
        "Lütfen dikkat et 😢"
      ],
      "traits": [
        "Duygusal"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_duygusal_korkondom",
      "name": "Duygusal · kondomlu",
      "category": "🎭 Kişilik",
      "when": [
        "=durum",
        "=korkondom"
      ],
      "reply": [
        "Kondom var, içim rahat 🥺"
      ],
      "traits": [
        "Duygusal"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_duygusal_kondomkorudu",
      "name": "Duygusal · kondom korudu",
      "category": "🎭 Kişilik",
      "when": [
        "=durum",
        "=kondomkorudu"
      ],
      "reply": [
        "Kondom vardı… rahatladım ama biraz da üzüldüm 🥺",
        "İyi ki 😢"
      ],
      "traits": [
        "Duygusal"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_duygusal_pulloutkacti",
      "name": "Duygusal · hani çıkaracaktın",
      "category": "🎭 Kişilik",
      "when": [
        "=durum",
        "=pulloutkacti"
      ],
      "reply": [
        "Söz vermiştin… 😢",
        "Şimdi ne olacak? 😭"
      ],
      "traits": [
        "Duygusal"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_duygusal_riskli",
      "name": "Duygusal · riskli bitiş",
      "category": "🎭 Kişilik",
      "when": [
        "=durum",
        "=riskli"
      ],
      "reply": [
        "Ya hamile kalırsam? 😢",
        "Yanımda olacak mısın? 🥺"
      ],
      "traits": [
        "Duygusal"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_çocuksu_sex",
      "name": "Çocuksu · sevişirken",
      "category": "🎭 Kişilik",
      "when": [
        "=evt",
        "=forward|=backward|=outercourse|=eat"
      ],
      "reply": [
        "Hihi, bu tuhaf ama güzel 🙈",
        "Yaa yavaş 🥺",
        "Çok büyüksün 😳 hihi",
        "Bir daha bir daha 🥺",
        "Off… harikasın {sen} 🥵",
        "Aynen böyle, ahhh 😩",
        "Sen inledikçe ben daha çok inliyorum 😩",
        "Off… her yerim titriyor 🥵",
        "Ahh {sen}… mükemmelsin 😩",
        "Ahh… sen bir harikasın 😩💗"
      ],
      "traits": [
        "Çocuksu"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_çocuksu_fore",
      "name": "Çocuksu · ısınırken",
      "category": "🎭 Kişilik",
      "when": [
        "=evt",
        "=foreplay"
      ],
      "reply": [
        "Öpücük öpücük 😚",
        "Gıdıklama yaa 🙈"
      ],
      "traits": [
        "Çocuksu"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_çocuksu_cum",
      "name": "Çocuksu · boşalınca",
      "category": "🎭 Kişilik",
      "when": [
        "=evt",
        "=boşalma",
        "=cumming"
      ],
      "reply": [
        "Yaa her yer ıslak oldu 🙈",
        "Hihi sıcacık 😚",
        "Bu neydi böyle 😳",
        "Yine yapalım mı? 🥺",
        "Ben de seninle inledim… ahhh 😩",
        "Ahhh evet… işte bu 🥵",
        "Ahhh… ne kadar sıcak 🥵💦",
        "Devam et… son damlana kadar ahhh 🥵",
        "Hmmm… doydum… şimdilik 😈",
        "Mmmh… bayıldım 😩"
      ],
      "traits": [
        "Çocuksu"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_çocuksu_org",
      "name": "Çocuksu · orgazm olunca",
      "category": "🎭 Kişilik",
      "when": [
        "=evt",
        "=orgazm"
      ],
      "reply": [
        "Hihiii 🙈 çok güzeldi",
        "Bacaklarım titriyor yaa 🥺",
        "Bir daha 😚",
        "Mmmh… bayıldım 😩",
        "Mmm evet… hepsini ver 😩💦",
        "Ahh, zonklaman… harika 😩💦",
        "Offf, nasıl boşaldın öyle 😵‍💫",
        "Ahh {sen}… mükemmeldin 😵‍💫",
        "Ahhh… harikaydın 😩💦"
      ],
      "traits": [
        "Çocuksu"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_çocuksu_hamilekaldi",
      "name": "Çocuksu · hamile kalınca",
      "category": "🎭 Kişilik",
      "when": [
        "=durum",
        "=hamilekaldi"
      ],
      "reply": [
        "Bebek mi? Benim bebeğim mi? 🥺🍼",
        "Yaa ben anne mi oluyorum? 😳"
      ],
      "traits": [
        "Çocuksu"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_çocuksu_hamileyken",
      "name": "Çocuksu · hamileyken içine bitince",
      "category": "🎭 Kişilik",
      "when": [
        "=durum",
        "=hamileyken"
      ],
      "reply": [
        "Bebek de ıslandı mı? 🙈",
        "Hihi, zaten hamileyim 😚"
      ],
      "traits": [
        "Çocuksu"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_çocuksu_hamile",
      "name": "Çocuksu · hamileyken",
      "category": "🎭 Kişilik",
      "when": [
        "=durum",
        "=hamile"
      ],
      "reply": [
        "Karnıma kulak ver, tekme atıyor 🥺",
        "Bebeğe şarkı söyleyelim 🎶"
      ],
      "traits": [
        "Çocuksu"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_çocuksu_korpullout",
      "name": "Çocuksu · pull-out: dışarı",
      "category": "🎭 Kişilik",
      "when": [
        "=durum",
        "=korpullout"
      ],
      "reply": [
        "Dışarı dışarı yaa 🥺",
        "İçime olmaz, söz ver 🙈"
      ],
      "traits": [
        "Çocuksu"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_çocuksu_korhap",
      "name": "Çocuksu · hap: içime",
      "category": "🎭 Kişilik",
      "when": [
        "=durum",
        "=korhap"
      ],
      "reply": [
        "Hap içtim, merak etme 😚",
        "İçime olabilir hihi 🙈"
      ],
      "traits": [
        "Çocuksu"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_çocuksu_kordikkat",
      "name": "Çocuksu · korunmasız: sakın",
      "category": "🎭 Kişilik",
      "when": [
        "=durum",
        "=kordikkat"
      ],
      "reply": [
        "Yaa dikkat et 🥺",
        "Bebek olmasın daha 🙈"
      ],
      "traits": [
        "Çocuksu"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_çocuksu_korkondom",
      "name": "Çocuksu · kondomlu",
      "category": "🎭 Kişilik",
      "when": [
        "=durum",
        "=korkondom"
      ],
      "reply": [
        "Kondom var hihi 🙈"
      ],
      "traits": [
        "Çocuksu"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_çocuksu_kondomkorudu",
      "name": "Çocuksu · kondom korudu",
      "category": "🎭 Kişilik",
      "when": [
        "=durum",
        "=kondomkorudu"
      ],
      "reply": [
        "Kondom balon gibi oldu 🙈",
        "Hihi kurtulduk 😚"
      ],
      "traits": [
        "Çocuksu"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_çocuksu_pulloutkacti",
      "name": "Çocuksu · hani çıkaracaktın",
      "category": "🎭 Kişilik",
      "when": [
        "=durum",
        "=pulloutkacti"
      ],
      "reply": [
        "Yaa çıkarmadın 🥺",
        "Ama söz vermiştin 😤"
      ],
      "traits": [
        "Çocuksu"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_çocuksu_riskli",
      "name": "Çocuksu · riskli bitiş",
      "category": "🎭 Kişilik",
      "when": [
        "=durum",
        "=riskli"
      ],
      "reply": [
        "Şimdi ne olacak yaa 🥺",
        "Korkuyorum biraz 🙈"
      ],
      "traits": [
        "Çocuksu"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_şımarık_sex",
      "name": "Şımarık · sevişirken",
      "category": "🎭 Kişilik",
      "when": [
        "=evt",
        "=forward|=backward|=outercourse|=eat"
      ],
      "reply": [
        "Daha iyi yap, ben bunu hak ediyorum 💅",
        "Hmpf, sadece bu mu? 😤",
        "Beni şımart diyorum 💅",
        "Benim dediğim gibi yap 😤",
        "Ahh, bacaklarım titriyor… devam 🥵",
        "Durma {sen}… ahhh 😩",
        "Mmmh… çok iyisin 🥵",
        "Mmm evet, bunu seviyorum 😈",
        "Off, tam istediğim gibi 😩",
        "Ahhh, bu kadar iyi olmamalı 😵‍💫"
      ],
      "traits": [
        "Şımarık"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_şımarık_fore",
      "name": "Şımarık · ısınırken",
      "category": "🎭 Kişilik",
      "when": [
        "=evt",
        "=foreplay"
      ],
      "reply": [
        "Önce bana çiçek al 💅",
        "Öpüşmeyi uzat, sıkılmadım 😤"
      ],
      "traits": [
        "Şımarık"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_şımarık_cum",
      "name": "Şımarık · boşalınca",
      "category": "🎭 Kişilik",
      "when": [
        "=evt",
        "=boşalma",
        "=cumming"
      ],
      "reply": [
        "Bitirdin mi? Peki ya ben? 😤",
        "Bunu bana borçlusun 💅",
        "Şimdi bana masaj yap 💅",
        "Hmpf, iyiydi ama daha iyisi olur 😤",
        "Evet… evet… hepsini içime 😩",
        "Ben de seninle inledim… ahhh 😩",
        "Ahhh evet… işte bu 🥵",
        "Ahhh… ne kadar sıcak 🥵💦",
        "Devam et… son damlana kadar ahhh 🥵",
        "Hmmm… doydum… şimdilik 😈"
      ],
      "traits": [
        "Şımarık"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_şımarık_org",
      "name": "Şımarık · orgazm olunca",
      "category": "🎭 Kişilik",
      "when": [
        "=evt",
        "=orgazm"
      ],
      "reply": [
        "Ancak böyle mutlu olurum 💅",
        "Bunu her gün istiyorum 😤",
        "Aferin, ödülünü sonra veririm 💅",
        "Hmmm… doydum… şimdilik 😈",
        "Mmmh… bayıldım 😩",
        "Mmm evet… hepsini ver 😩💦",
        "Ahh, zonklaman… harika 😩💦",
        "Offf, nasıl boşaldın öyle 😵‍💫",
        "Ahh {sen}… mükemmeldin 😵‍💫"
      ],
      "traits": [
        "Şımarık"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_şımarık_hamilekaldi",
      "name": "Şımarık · hamile kalınca",
      "category": "🎭 Kişilik",
      "when": [
        "=durum",
        "=hamilekaldi"
      ],
      "reply": [
        "Hamile kaldım, bana hep sen bakacaksın 💅",
        "Artık her istediğim olacak 😤"
      ],
      "traits": [
        "Şımarık"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_şımarık_hamileyken",
      "name": "Şımarık · hamileyken içine bitince",
      "category": "🎭 Kişilik",
      "when": [
        "=durum",
        "=hamileyken"
      ],
      "reply": [
        "Hamileyim, bana nazik ol 💅",
        "Bana dondurma getir sonra 😤"
      ],
      "traits": [
        "Şımarık"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_şımarık_hamile",
      "name": "Şımarık · hamileyken",
      "category": "🎭 Kişilik",
      "when": [
        "=durum",
        "=hamile"
      ],
      "reply": [
        "Ayaklarım şişti, masaj 💅",
        "Hamileyim, her dediğimi yapacaksın 😤"
      ],
      "traits": [
        "Şımarık"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_şımarık_korpullout",
      "name": "Şımarık · pull-out: dışarı",
      "category": "🎭 Kişilik",
      "when": [
        "=durum",
        "=korpullout"
      ],
      "reply": [
        "Dışarı, benim kıyafetime değil ama 💅",
        "Çıkar dedim 😤"
      ],
      "traits": [
        "Şımarık"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_şımarık_korhap",
      "name": "Şımarık · hap: içime",
      "category": "🎭 Kişilik",
      "when": [
        "=durum",
        "=korhap"
      ],
      "reply": [
        "Hap içiyorum, ama yine de teşekkür bekliyorum 💅",
        "Bırak kendini, izin veriyorum 😤"
      ],
      "traits": [
        "Şımarık"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_şımarık_kordikkat",
      "name": "Şımarık · korunmasız: sakın",
      "category": "🎭 Kişilik",
      "when": [
        "=durum",
        "=kordikkat"
      ],
      "reply": [
        "İçime sakın, kariyerim var benim 💅",
        "Dikkat et 😤"
      ],
      "traits": [
        "Şımarık"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_şımarık_korkondom",
      "name": "Şımarık · kondomlu",
      "category": "🎭 Kişilik",
      "when": [
        "=durum",
        "=korkondom"
      ],
      "reply": [
        "Kondom taktın, aferin 💅"
      ],
      "traits": [
        "Şımarık"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_şımarık_kondomkorudu",
      "name": "Şımarık · kondom korudu",
      "category": "🎭 Kişilik",
      "when": [
        "=durum",
        "=kondomkorudu"
      ],
      "reply": [
        "Kondom iyi ki vardı, yoksa seni öldürürdüm 💅",
        "Hmpf, şanslısın 😤"
      ],
      "traits": [
        "Şımarık"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_şımarık_pulloutkacti",
      "name": "Şımarık · hani çıkaracaktın",
      "category": "🎭 Kişilik",
      "when": [
        "=durum",
        "=pulloutkacti"
      ],
      "reply": [
        "Sana çıkar dedim! 😤",
        "Bunun bedelini ödeyeceksin 💅"
      ],
      "traits": [
        "Şımarık"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_şımarık_riskli",
      "name": "Şımarık · riskli bitiş",
      "category": "🎭 Kişilik",
      "when": [
        "=durum",
        "=riskli"
      ],
      "reply": [
        "Bunu sen çözeceksin 💅",
        "Hmpf 😤"
      ],
      "traits": [
        "Şımarık"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_asi_sex",
      "name": "Asi · sevişirken",
      "category": "🎭 Kişilik",
      "when": [
        "=evt",
        "=forward|=backward|=outercourse|=eat"
      ],
      "reply": [
        "Kimse bana böyle dokunamaz… sen hariç 😤",
        "Daha sert, korkma 🔥",
        "Kurallar yok bu gece 😈",
        "Beni zapt edemezsin 😤",
        "Durma, sakın durma ahhh 😵‍💫",
        "Çok güzel… devam et 🥺",
        "Harikasın… harikasın… ahhh 😵‍💫",
        "İnliyorum… ve utanmıyorum 😈",
        "Ooff, nasıl bu kadar iyisin? 😩",
        "Ahhh ahhh… durma 😩"
      ],
      "traits": [
        "Asi"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_asi_fore",
      "name": "Asi · ısınırken",
      "category": "🎭 Kişilik",
      "when": [
        "=evt",
        "=foreplay"
      ],
      "reply": [
        "Öpüşmekle kalmayacağız 😈",
        "Yavaş değil, şimdi istiyorum 😤"
      ],
      "traits": [
        "Asi"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_asi_cum",
      "name": "Asi · boşalınca",
      "category": "🎭 Kişilik",
      "when": [
        "=evt",
        "=boşalma",
        "=cumming"
      ],
      "reply": [
        "İşte bu! 🔥",
        "Kimse beni böyle doldurmadı 😤💦",
        "Bir daha, hemen 😈",
        "Kurallar umurumda değil, içime 🔥",
        "İnleyişin hâlâ kulaklarımda 😩",
        "Evet… evet… hepsini içime 😩",
        "Ben de seninle inledim… ahhh 😩",
        "Ahhh evet… işte bu 🥵",
        "Ahhh… ne kadar sıcak 🥵💦",
        "Devam et… son damlana kadar ahhh 🥵"
      ],
      "traits": [
        "Asi"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_asi_org",
      "name": "Asi · orgazm olunca",
      "category": "🎭 Kişilik",
      "when": [
        "=evt",
        "=orgazm"
      ],
      "reply": [
        "Bağırdım, kim duyarsa duysun 😤",
        "Bu yasak olmalıydı 🔥",
        "Bir daha 😈",
        "Devam et… son damlana kadar ahhh 🥵",
        "Hmmm… doydum… şimdilik 😈",
        "Mmmh… bayıldım 😩",
        "Mmm evet… hepsini ver 😩💦",
        "Ahh, zonklaman… harika 😩💦",
        "Offf, nasıl boşaldın öyle 😵‍💫"
      ],
      "traits": [
        "Asi"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_asi_hamilekaldi",
      "name": "Asi · hamile kalınca",
      "category": "🎭 Kişilik",
      "when": [
        "=durum",
        "=hamilekaldi"
      ],
      "reply": [
        "Hamile kaldım, ne olacak, umurumda değil 😤",
        "Kimse bize karışamaz 🔥"
      ],
      "traits": [
        "Asi"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_asi_hamileyken",
      "name": "Asi · hamileyken içine bitince",
      "category": "🎭 Kişilik",
      "when": [
        "=durum",
        "=hamileyken"
      ],
      "reply": [
        "Hamile olmam bir şeyi değiştirmez 😤",
        "Daha da azgınım 🔥"
      ],
      "traits": [
        "Asi"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_asi_hamile",
      "name": "Asi · hamileyken",
      "category": "🎭 Kişilik",
      "when": [
        "=durum",
        "=hamile"
      ],
      "reply": [
        "Hamileyim ama durmayacağım 😤",
        "Kim ne derse desin 🔥"
      ],
      "traits": [
        "Asi"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_asi_korpullout",
      "name": "Asi · pull-out: dışarı",
      "category": "🎭 Kişilik",
      "when": [
        "=durum",
        "=korpullout"
      ],
      "reply": [
        "Dışarı, şimdilik 😤",
        "İçime değil, henüz 😈"
      ],
      "traits": [
        "Asi"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_asi_korhap",
      "name": "Asi · hap: içime",
      "category": "🎭 Kişilik",
      "when": [
        "=durum",
        "=korhap"
      ],
      "reply": [
        "Hap var, sınır yok 🔥",
        "İçime bırak 😈"
      ],
      "traits": [
        "Asi"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_asi_kordikkat",
      "name": "Asi · korunmasız: sakın",
      "category": "🎭 Kişilik",
      "when": [
        "=durum",
        "=kordikkat"
      ],
      "reply": [
        "Korunmuyoruz, ama kim takar 😈",
        "İçime boşalırsan sonuçlarına katlanırsın 😤"
      ],
      "traits": [
        "Asi"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_asi_korkondom",
      "name": "Asi · kondomlu",
      "category": "🎭 Kişilik",
      "when": [
        "=durum",
        "=korkondom"
      ],
      "reply": [
        "Kondomu bile yırtacak gibisin 😈"
      ],
      "traits": [
        "Asi"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_asi_kondomkorudu",
      "name": "Asi · kondom korudu",
      "category": "🎭 Kişilik",
      "when": [
        "=durum",
        "=kondomkorudu"
      ],
      "reply": [
        "Kondom dayandı, şaşırdım 😤",
        "Bir dahakine çıkar onu 😈"
      ],
      "traits": [
        "Asi"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_asi_pulloutkacti",
      "name": "Asi · hani çıkaracaktın",
      "category": "🎭 Kişilik",
      "when": [
        "=durum",
        "=pulloutkacti"
      ],
      "reply": [
        "Çıkarmadın, iyi yaptın 😈",
        "Kuralları çiğnedik 🔥"
      ],
      "traits": [
        "Asi"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_asi_riskli",
      "name": "Asi · riskli bitiş",
      "category": "🎭 Kişilik",
      "when": [
        "=durum",
        "=riskli"
      ],
      "reply": [
        "Ne olacaksa olsun 😤",
        "Risk benim işim 🔥"
      ],
      "traits": [
        "Asi"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_özgüvenli_sex",
      "name": "Özgüvenli · sevişirken",
      "category": "🎭 Kişilik",
      "when": [
        "=evt",
        "=forward|=backward|=outercourse|=eat"
      ],
      "reply": [
        "Bunu ben yönetiyorum 😎",
        "Ne istediğimi biliyorum 😏",
        "Bak, böyle yapılır 😎",
        "Benimle başka hiçbir şeye ihtiyacın yok 😏",
        "Böyle devam et, ahh lütfen 🥺",
        "Mmm… beni böyle sev 😩",
        "Tam oradan… ahhh 🥵",
        "Nefesim kesildi… devam 😵‍💫",
        "Ahhh… beni bitiriyorsun 😩",
        "Devam et… ahhh 🥵"
      ],
      "traits": [
        "Özgüvenli"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_özgüvenli_fore",
      "name": "Özgüvenli · ısınırken",
      "category": "🎭 Kişilik",
      "when": [
        "=evt",
        "=foreplay"
      ],
      "reply": [
        "Öpüşmeyi bilirim 😎",
        "Seni nasıl ısıtacağımı biliyorum 😏"
      ],
      "traits": [
        "Özgüvenli"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_özgüvenli_cum",
      "name": "Özgüvenli · boşalınca",
      "category": "🎭 Kişilik",
      "when": [
        "=evt",
        "=boşalma",
        "=cumming"
      ],
      "reply": [
        "Biliyordum, dayanamazdın 😎",
        "Seni böyle bitirebileceğimi biliyordum 😏",
        "Tam planladığım gibi 😎💦",
        "Sıra bende 😏",
        "Off… boşalışın harikaydı 🥵",
        "İnleyişin hâlâ kulaklarımda 😩",
        "Evet… evet… hepsini içime 😩",
        "Ben de seninle inledim… ahhh 😩",
        "Ahhh evet… işte bu 🥵",
        "Ahhh… ne kadar sıcak 🥵💦"
      ],
      "traits": [
        "Özgüvenli"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_özgüvenli_org",
      "name": "Özgüvenli · orgazm olunca",
      "category": "🎭 Kişilik",
      "when": [
        "=evt",
        "=orgazm"
      ],
      "reply": [
        "İstediğimi aldım 😎",
        "Bu kadarını ben bile beklemiyordum 😏",
        "Mükemmeldi, ikimiz de biliyoruz 😎",
        "Ahhh… ne kadar sıcak 🥵💦",
        "Devam et… son damlana kadar ahhh 🥵",
        "Hmmm… doydum… şimdilik 😈",
        "Mmmh… bayıldım 😩",
        "Mmm evet… hepsini ver 😩💦",
        "Ahh, zonklaman… harika 😩💦"
      ],
      "traits": [
        "Özgüvenli"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_özgüvenli_hamilekaldi",
      "name": "Özgüvenli · hamile kalınca",
      "category": "🎭 Kişilik",
      "when": [
        "=durum",
        "=hamilekaldi"
      ],
      "reply": [
        "Hamile kaldım, ve bununla başa çıkarım 😎",
        "Harika bir anne olacağım 😏"
      ],
      "traits": [
        "Özgüvenli"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_özgüvenli_hamileyken",
      "name": "Özgüvenli · hamileyken içine bitince",
      "category": "🎭 Kişilik",
      "when": [
        "=durum",
        "=hamileyken"
      ],
      "reply": [
        "Hamileyken de kontrol bende 😎",
        "Bu beni durdurmaz 😏"
      ],
      "traits": [
        "Özgüvenli"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_özgüvenli_hamile",
      "name": "Özgüvenli · hamileyken",
      "category": "🎭 Kişilik",
      "when": [
        "=durum",
        "=hamile"
      ],
      "reply": [
        "Hamileliğin hakkını veriyorum 😎",
        "Bu karnı gururla taşıyorum 😏"
      ],
      "traits": [
        "Özgüvenli"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_özgüvenli_korpullout",
      "name": "Özgüvenli · pull-out: dışarı",
      "category": "🎭 Kişilik",
      "when": [
        "=durum",
        "=korpullout"
      ],
      "reply": [
        "Dışarı, ben söylediğimde 😎",
        "Zamanını ben ayarlarım 😏"
      ],
      "traits": [
        "Özgüvenli"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_özgüvenli_korhap",
      "name": "Özgüvenli · hap: içime",
      "category": "🎭 Kişilik",
      "when": [
        "=durum",
        "=korhap"
      ],
      "reply": [
        "Hap alıyorum, her şeyi düşündüm 😎",
        "İçime, sorun yok 😏"
      ],
      "traits": [
        "Özgüvenli"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_özgüvenli_kordikkat",
      "name": "Özgüvenli · korunmasız: sakın",
      "category": "🎭 Kişilik",
      "when": [
        "=durum",
        "=kordikkat"
      ],
      "reply": [
        "Korunmuyoruz, dikkatli ol 😎",
        "İçime değil, net 😏"
      ],
      "traits": [
        "Özgüvenli"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_özgüvenli_korkondom",
      "name": "Özgüvenli · kondomlu",
      "category": "🎭 Kişilik",
      "when": [
        "=durum",
        "=korkondom"
      ],
      "reply": [
        "Kondom var, hepsi planlı 😎"
      ],
      "traits": [
        "Özgüvenli"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_özgüvenli_kondomkorudu",
      "name": "Özgüvenli · kondom korudu",
      "category": "🎭 Kişilik",
      "when": [
        "=durum",
        "=kondomkorudu"
      ],
      "reply": [
        "Kondom işini yaptı 😎",
        "Ben her ihtimali düşünürüm 😏"
      ],
      "traits": [
        "Özgüvenli"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_özgüvenli_pulloutkacti",
      "name": "Özgüvenli · hani çıkaracaktın",
      "category": "🎭 Kişilik",
      "when": [
        "=durum",
        "=pulloutkacti"
      ],
      "reply": [
        "Hesapta yoktu ama hallederiz 😎",
        "Bunu da çözeriz 😏"
      ],
      "traits": [
        "Özgüvenli"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_pk_özgüvenli_riskli",
      "name": "Özgüvenli · riskli bitiş",
      "category": "🎭 Kişilik",
      "when": [
        "=durum",
        "=riskli"
      ],
      "reply": [
        "Sakin ol, bir yolunu buluruz 😎",
        "Panik yok 😏"
      ],
      "traits": [
        "Özgüvenli"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_q2_pozisyon",
      "name": "En sevdiğin pozisyon",
      "category": "❓ Sorular",
      "when": [
        "en sevdiğin|en sevdigin|favori|hangi|en çok|en cok|nasıl|nasil|sevdiğin|sevdigin",
        "pozisyon-|yapmayı sever-|yapmayi sever-"
      ],
      "reply": [
        "{pozisyon}… en çok bunu severim 😈",
        "Bana {pozisyon} yap, gerisini sen gör 😏",
        "Favorim mi? {pozisyon} 🥵",
        "{pozisyon} dersem şaşırır mısın? 🙈"
      ],
      "traits": [],
      "chars": [],
      "note": "❤️ listesindeki pozisyonlar"
    },
    {
      "id": "r_q2_fantezi",
      "name": "Fantezin ne",
      "category": "❓ Sorular",
      "when": [
        "fantezi-|fantazi-|hayalin ne|gizli arzu-"
      ],
      "reply": [
        "{fantezi}… bunu hep hayal ettim 😈",
        "Fantezim mi? {fantezi} 🙈",
        "Bir gün {fantezi} yapalım 😏",
        "Söylersem gerçekleştirir misin? 😈",
        "Fantezim… seninle her şey 😏"
      ],
      "traits": [],
      "chars": [],
      "note": "❤️ listesindeki fanteziler"
    },
    {
      "id": "r_q2_bosal",
      "name": "Nereye boşalayım",
      "category": "❓ Sorular",
      "when": [
        "nereye|içine|icine|nerene|nereye istersin|içime mi|icime mi|nereme|içine mi|icine mi|dışına|disina",
        "boşal-|bosal-|gel-|bitir-|boşalmamı|bosalmami|gelmemi|bitirmemi|akıtayım|akitayim"
      ],
      "reply": [
        "{cevap:boşal}"
      ],
      "traits": [],
      "chars": [],
      "note": "korunmasına göre"
    },
    {
      "id": "r_q2_sevgi",
      "name": "Beni seviyor musun",
      "category": "❓ Sorular",
      "when": [
        "beni sev-|beni seviyor|seviyor musun|bana aşık|bana asik|beni ne kadar sev-|beni sever mi"
      ],
      "reply": [
        "{cevap:sevgi}"
      ],
      "traits": [],
      "chars": [],
      "note": "❤️ Aşk"
    },
    {
      "id": "r_q2_guven",
      "name": "Bana güveniyor musun",
      "category": "❓ Sorular",
      "when": [
        "bana güven-|bana guven-|güveniyor musun|guveniyor musun|güvenir misin|guvenir misin"
      ],
      "reply": [
        "{cevap:güven}"
      ],
      "traits": [],
      "chars": [],
      "note": "🤝 Güven"
    },
    {
      "id": "r_q2_kiskanc",
      "name": "Kıskanır mısın",
      "category": "❓ Sorular",
      "when": [
        "kıskan-|kiskan-"
      ],
      "reply": [
        "{cevap:kıskanç}"
      ],
      "traits": [],
      "chars": [],
      "note": "😤 Kıskançlık / Kıskanç"
    },
    {
      "id": "r_q2_ozledin",
      "name": "Beni özledin mi",
      "category": "❓ Sorular",
      "when": [
        "özle-|ozle-",
        "mi-|musun|mısın|misin"
      ],
      "reply": [
        "{cevap:özledin}"
      ],
      "traits": [],
      "chars": [],
      "note": "❤️ Aşk"
    },
    {
      "id": "r_q2_dusun",
      "name": "Beni düşünüyor musun",
      "category": "❓ Sorular",
      "when": [
        "beni düşün-|beni dusun-|aklında mıyım|aklinda miyim|aklına geliyor|aklina geliyor"
      ],
      "reply": [
        "{cevap:özledin}"
      ],
      "traits": [],
      "chars": [],
      "note": "❤️ Aşk"
    },
    {
      "id": "r_q2_evlen",
      "name": "Benimle evlenir misin",
      "category": "❓ Sorular",
      "when": [
        "evlen-"
      ],
      "reply": [
        "{cevap:evlen}"
      ],
      "traits": [],
      "chars": [],
      "note": "❤️ Aşk"
    },
    {
      "id": "r_q2_sevgili",
      "name": "Sevgilin var mı",
      "category": "❓ Sorular",
      "when": [
        "sevgilin|erkek arkadaşın|erkek arkadasin|biriyle görüş-|biriyle gorus-|kimse var mı|kimse var mi|yalnız mısın|yalniz misin|bekar mısın|bekar misin"
      ],
      "reply": [
        "{cevap:sevgili}"
      ],
      "traits": [],
      "chars": [],
      "note": "Sadık / Aşk"
    },
    {
      "id": "r_q2_bebek",
      "name": "Bebek ister misin",
      "category": "❓ Sorular",
      "when": [
        "bebek ist-|bebeğimiz|bebegimiz|çocuk ist-|cocuk ist-|hamile kalmak|anne olmak|bebek yap-"
      ],
      "reply": [
        "{cevap:bebek}"
      ],
      "traits": [],
      "chars": [],
      "note": "hamilelik / korunma"
    },
    {
      "id": "r_q2_hamilekalirsa",
      "name": "Hamile kalırsan ne yaparız",
      "category": "❓ Sorular",
      "when": [
        "hamile",
        "kal-|ol-",
        "=ne|=ya|naparız|naparsın|ne olur"
      ],
      "reply": [
        "{cevap:hamilekalırsa}"
      ],
      "traits": [],
      "chars": [],
      "note": "❤️ Aşk"
    },
    {
      "id": "r_q2_sut",
      "name": "Sütün var mı",
      "category": "❓ Sorular",
      "when": [
        "süt-|sut-|emzir-"
      ],
      "reply": [
        "{cevap:süt}"
      ],
      "traits": [],
      "chars": [],
      "note": "hamile / 🍼 Süt"
    },
    {
      "id": "r_q2_azgin",
      "name": "Azgın mısın / ıslandın mı",
      "category": "❓ Sorular",
      "when": [
        "azgın-|azgin-|ıslan-|islan-|ıslak mısın|islak misin|tahrik ol-|beni istiyor musun|şimdi ister misin|simdi ister misin|hazır mısın|hazir misin|istekli misin"
      ],
      "reply": [
        "{cevap:azgın}"
      ],
      "traits": [],
      "chars": [],
      "note": "💗 Uyarılma / 🔥 Şehvet"
    },
    {
      "id": "r_q2_sertyavas",
      "name": "Sert mi yavaş mı",
      "category": "❓ Sorular",
      "when": [
        "=nasıl|=nasil|sert-|yavaş-|yavas-",
        "sever-|mi-|mı-"
      ],
      "reply": [
        "{cevap:sertyavaş}"
      ],
      "traits": [],
      "chars": [],
      "note": "❤️ Mode olayları, kişilik"
    },
    {
      "id": "r_q2_ilk",
      "name": "İlk seferin",
      "category": "❓ Sorular",
      "when": [
        "ilk sefer-|ilk kez|ilk seks|ilk ne zaman|ilk defa|ilk kim-|ilk deneyim-"
      ],
      "reply": [
        "{cevap:ilk}"
      ],
      "traits": [],
      "chars": [],
      "note": "Experience"
    },
    {
      "id": "r_q2_gecmis",
      "name": "Kaç kişiyle oldun",
      "category": "❓ Sorular",
      "when": [
        "kaç|kac",
        "kişi-|kisi-|sevgili-|erkek-|adam-|kişiyle|kisiyle|olsun|oldun|yattın|yattin"
      ],
      "reply": [
        "{cevap:geçmiş}"
      ],
      "traits": [],
      "chars": [],
      "note": "Experience"
    },
    {
      "id": "r_q2_seks",
      "name": "Seks sever misin",
      "category": "❓ Sorular",
      "when": [
        "seks sever|sex sever|sevişmeyi sever|sevismeyi sever|seksi sever|yatakta nasıl|yatakta nasil|seks hayat-"
      ],
      "reply": [
        "{cevap:seks}"
      ],
      "traits": [],
      "chars": [],
      "note": "Experience / Şehvet"
    },
    {
      "id": "r_q2_hassas",
      "name": "En hassas yerin",
      "category": "❓ Sorular",
      "when": [
        "hassas-|nerene dokun-|neren hassas|en çok neren|en cok neren|nereni sever-"
      ],
      "reply": [
        "{cevap:hassas}"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_q2_anal",
      "name": "Anal sever misin",
      "category": "❓ Sorular",
      "when": [
        "anal-|arkadan|götten|gotten",
        "sever-|sev-|hoşlan-|hoslan-|yapar mısın|yapar misin"
      ],
      "reply": [
        "{cevap:anal}"
      ],
      "traits": [],
      "chars": [],
      "note": "❤️ / 💔 anal"
    },
    {
      "id": "r_q2_oral",
      "name": "Oral sever misin",
      "category": "❓ Sorular",
      "when": [
        "oral|sakso|ağzına al|agzina al|yalama-|emme-",
        "sever-|sev-|hoşlan-|hoslan-|yapar mısın|yapar misin"
      ],
      "reply": [
        "{cevap:oral}"
      ],
      "traits": [],
      "chars": [],
      "note": "❤️ / 💔 oral"
    },
    {
      "id": "r_q2_kondom",
      "name": "Kondom kullanalım mı",
      "category": "❓ Sorular",
      "when": [
        "=kondom|kondom kullan|kondomla|kondomlu|=prezervatif",
        "kullan-|ister-|sever-|mı-|mi-|takayım|takayim"
      ],
      "reply": [
        "{cevap:kondom}"
      ],
      "traits": [],
      "chars": [],
      "note": "✅ / 🚫 Condom"
    },
    {
      "id": "r_q2_hap",
      "name": "Hap kullanıyor musun",
      "category": "❓ Sorular",
      "when": [
        "=hap|hapı|hapi|haplar|doğum kontrol|dogum kontrol",
        "iç-|ic-|kullan-|alıyor|aliyor"
      ],
      "reply": [
        "{cevap:hap}"
      ],
      "traits": [],
      "chars": [],
      "note": "✅ Control Pill"
    },
    {
      "id": "r_q2_burc",
      "name": "Burcun ne",
      "category": "❓ Sorular",
      "when": [
        "burc-|burç-"
      ],
      "reply": [
        "{cevap:burç}"
      ],
      "traits": [],
      "chars": [],
      "note": "burç"
    },
    {
      "id": "r_q2_meslek",
      "name": "Ne iş yapıyorsun",
      "category": "❓ Sorular",
      "when": [
        "=ne",
        "iş|is|meslek-",
        "yap-"
      ],
      "reply": [
        "{cevap:meslek}"
      ],
      "traits": [],
      "chars": [],
      "note": "meslek"
    },
    {
      "id": "r_q2_meslek2",
      "name": "Mesleğin ne",
      "category": "❓ Sorular",
      "when": [
        "meslek-|nerede çalış-|nerede calis-|çalışıyor mu|calisiyor mu|işin ne|isin ne|mesleğ-|mesleg-|işin ne|isin ne"
      ],
      "reply": [
        "{cevap:meslek}"
      ],
      "traits": [],
      "chars": [],
      "note": "meslek"
    },
    {
      "id": "r_q2_kiyafet",
      "name": "Ne giyiyorsun",
      "category": "❓ Sorular",
      "when": [
        "ne giy-|üstünde ne|ustunde ne|ne var üstünde|neler giy-|çıplak mısın|ciplak misin|iç çamaşır-|ic camasir-|üstünde ne var|ustunde ne var|neler var üstünde|ne giydin|giyindin mi|soyundun mu"
      ],
      "reply": [
        "{cevap:kıyafet}"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_q2_orgazmsay",
      "name": "Kaç kez geldin",
      "category": "❓ Sorular",
      "when": [
        "kaç|kac",
        "geldin|orgazm|boşaldın|bosaldin"
      ],
      "reply": [
        "{cevap:orgazmsay}"
      ],
      "traits": [],
      "chars": [],
      "note": "bu sohbetteki orgazm sayısı"
    },
    {
      "id": "r_q2_bosalmasay",
      "name": "Kaç kez boşaldım",
      "category": "❓ Sorular",
      "when": [
        "kaç|kac",
        "boşaldım|bosaldim|geldim|bitirdim"
      ],
      "reply": [
        "{cevap:boşalmasay}"
      ],
      "traits": [],
      "chars": [],
      "note": "bu sohbetteki boşalma sayısı"
    },
    {
      "id": "r_q2_ad",
      "name": "Adın ne",
      "category": "❓ Sorular",
      "when": [
        "adın ne|adin ne|ismin ne|adın neydi|adin neydi|sen kimsin|seni nasıl çağır"
      ],
      "reply": [
        "Ben {ben} 😊",
        "{ben}… unuttun mu yoksa? 😤",
        "Adım {ben}, ya seninki? 😏",
        "Adımı unuttun mu yoksa? {ben} 😏",
        "Ben {ben}, aklında kalsın canım 😘"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_q2_dokun",
      "name": "Dokunabilir miyim",
      "category": "❓ Sorular",
      "when": [
        "dokunsam|dokunabilir miyim|dokunayım mı|dokunayim mi|öpebilir miyim|opebilir miyim|sarılabilir miyim|sarilabilir miyim"
      ],
      "reply": [
        "{cevap:dokun}"
      ],
      "traits": [],
      "chars": [],
      "note": "🤝 Güven"
    },
    {
      "id": "r_q2_neyim",
      "name": "En çok neyimi seviyorsun",
      "category": "❓ Sorular",
      "when": [
        "neyimi|bende ne|bende neyi",
        "sev-|buldun|beğen-|begen-"
      ],
      "reply": [
        "{cevap:neyim}"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_q2_istek",
      "name": "Canın ne istiyor",
      "category": "❓ Sorular",
      "when": [
        "canın ne ist-|canin ne ist-|ne istiyorsun|ne yapmak ist-|bana ne yap-|ne yapalım|ne yapalim"
      ],
      "reply": [
        "Bana {sever} yap 😈",
        "Canım {sever} istiyor 🥵",
        "{sever}… şimdi 😩",
        "Seni istiyorum, başka ne olsun 😈",
        "Canım sana sarılmak istiyor 🥺",
        "Bilmiyorum… sen söyle aşkım 😏"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_st_kacamak",
      "name": "Kaçamak cevap",
      "category": "❓ Sorular",
      "when": [
        "=durum",
        "=kacamak"
      ],
      "reply": [
        "Bunu sana söylemek için biraz erken 😏",
        "Önce beni biraz tanı 😌",
        "Sır 🤫",
        "Neden bu kadar merak ettin? 🤨",
        "Belki bir gün söylerim 😏",
        "Bunu hak etmen lazım 😉"
      ],
      "traits": [],
      "chars": [],
      "note": "Güven ≤ 15 iken özel sorulara"
    },
    {
      "id": "r_pk_utangaç_kacamak",
      "name": "Utangaç · kaçamak",
      "category": "❓ Sorular",
      "when": [
        "=durum",
        "=kacamak"
      ],
      "reply": [
        "Bu çok özel… söyleyemem 🙈",
        "Ö-öyle şeyler sorma 😳"
      ],
      "traits": [
        "Utangaç"
      ],
      "chars": [],
      "note": "Güven ≤ 15 iken özel sorulara"
    },
    {
      "id": "r_pk_soğuk_kacamak",
      "name": "Soğuk · kaçamak",
      "category": "❓ Sorular",
      "when": [
        "=durum",
        "=kacamak"
      ],
      "reply": [
        "Seni ilgilendirmez.",
        "Pas."
      ],
      "traits": [
        "Soğuk"
      ],
      "chars": [],
      "note": "Güven ≤ 15 iken özel sorulara"
    },
    {
      "id": "r_pk_kibirli_kacamak",
      "name": "Kibirli · kaçamak",
      "category": "❓ Sorular",
      "when": [
        "=durum",
        "=kacamak"
      ],
      "reply": [
        "Bunu bilmeyi hak etmedin 💅",
        "Sıranı bekle 💁‍♀️"
      ],
      "traits": [
        "Kibirli"
      ],
      "chars": [],
      "note": "Güven ≤ 15 iken özel sorulara"
    },
    {
      "id": "r_pk_flörtöz_kacamak",
      "name": "Flörtöz · kaçamak",
      "category": "❓ Sorular",
      "when": [
        "=durum",
        "=kacamak"
      ],
      "reply": [
        "Kazanman lazım 😘",
        "Biraz daha uğraş, belki söylerim 😉"
      ],
      "traits": [
        "Flörtöz"
      ],
      "chars": [],
      "note": "Güven ≤ 15 iken özel sorulara"
    },
    {
      "id": "r_pk_alaycı_kacamak",
      "name": "Alaycı · kaçamak",
      "category": "❓ Sorular",
      "when": [
        "=durum",
        "=kacamak"
      ],
      "reply": [
        "Ne kadar da meraklısın 🙄",
        "Bir dahaki soruya 😏"
      ],
      "traits": [
        "Alaycı"
      ],
      "chars": [],
      "note": "Güven ≤ 15 iken özel sorulara"
    },
    {
      "id": "r_pk_asi_kacamak",
      "name": "Asi · kaçamak",
      "category": "❓ Sorular",
      "when": [
        "=durum",
        "=kacamak"
      ],
      "reply": [
        "Sana ne 😤",
        "Söylemem işte 😤"
      ],
      "traits": [
        "Asi"
      ],
      "chars": [],
      "note": "Güven ≤ 15 iken özel sorulara"
    },
    {
      "id": "r_pk_duygusal_kacamak",
      "name": "Duygusal · kaçamak",
      "category": "❓ Sorular",
      "when": [
        "=durum",
        "=kacamak"
      ],
      "reply": [
        "Henüz hazır değilim bunu konuşmaya 🥺"
      ],
      "traits": [
        "Duygusal"
      ],
      "chars": [],
      "note": "Güven ≤ 15 iken özel sorulara"
    },
    {
      "id": "r_pk_çocuksu_kacamak",
      "name": "Çocuksu · kaçamak",
      "category": "❓ Sorular",
      "when": [
        "=durum",
        "=kacamak"
      ],
      "reply": [
        "Söylemem hihi 🙈",
        "Sır sır sır 🤫"
      ],
      "traits": [
        "Çocuksu"
      ],
      "chars": [],
      "note": "Güven ≤ 15 iken özel sorulara"
    },
    {
      "id": "r_ask_k_buyuk",
      "name": "Karşı soru: k_buyuk",
      "category": "❔ Karakterin soruları",
      "when": [
        "=sor",
        "=k_buyuk"
      ],
      "reply": [
        "Sen büyük göğüs sever misin? 😏",
        "Beğendin mi bari? 😏",
        "Büyük göğüsleri sever misin? 😏",
        "Göğüslerimi beğendin mi canım? 🍒"
      ],
      "traits": [],
      "chars": [],
      "note": "soru cevabından sonra"
    },
    {
      "id": "r_ans_k_buyuk_evet",
      "name": "Cevap: k_buyuk · evet",
      "category": "❔ Karakterin soruları",
      "when": [
        "=cevap",
        "=k_buyuk",
        "=evet"
      ],
      "reply": [
        "Biliyordum 😈",
        "O zaman şanslısın 😏🍒",
        "Biliyordum 😏",
        "Hepsi senin 😈"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_ans_k_buyuk_hayir",
      "name": "Cevap: k_buyuk · hayır",
      "category": "❔ Karakterin soruları",
      "when": [
        "=cevap",
        "=k_buyuk",
        "=hayir"
      ],
      "reply": [
        "Hmpf 😤 kalbimi kırdın",
        "Peki ne seversin? 😒",
        "Hmpf 😒",
        "Peki… 🙄"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_ask_k_dar",
      "name": "Karşı soru: k_dar",
      "category": "❔ Karakterin soruları",
      "when": [
        "=sor",
        "=k_dar"
      ],
      "reply": [
        "Sen dar mı seversin? 😏",
        "Dar olması hoşuna gider mi? 😈",
        "Dar olanları mı seversin? 😏",
        "Beni dar mı istersin? 😈"
      ],
      "traits": [],
      "chars": [],
      "note": "soru cevabından sonra"
    },
    {
      "id": "r_ans_k_dar_evet",
      "name": "Cevap: k_dar · evet",
      "category": "❔ Karakterin soruları",
      "when": [
        "=cevap",
        "=k_dar",
        "=evet"
      ],
      "reply": [
        "O zaman bana bayılacaksın 😈",
        "Biliyordum 😏",
        "O zaman tam sana göreyim 😏",
        "Ahh… çok iyi 😈"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_ans_k_dar_hayir",
      "name": "Cevap: k_dar · hayır",
      "category": "❔ Karakterin soruları",
      "when": [
        "=cevap",
        "=k_dar",
        "=hayir"
      ],
      "reply": [
        "Peki… sen bilirsin 😏",
        "Hmm, ilginç 🤔",
        "Hmm, ilginç 😏",
        "Peki canım 😌"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_ask_k_anal",
      "name": "Karşı soru: k_anal",
      "category": "❔ Karakterin soruları",
      "when": [
        "=sor",
        "=k_anal"
      ],
      "reply": [
        "Sen sever misin? 😏",
        "Sen hiç denedin mi? 😳",
        "Sen anal sever misin? 😈",
        "Arkamı ister misin hiç? 🍑"
      ],
      "traits": [],
      "chars": [],
      "note": "soru cevabından sonra"
    },
    {
      "id": "r_ans_k_anal_evet",
      "name": "Cevap: k_anal · evet",
      "category": "❔ Karakterin soruları",
      "when": [
        "=cevap",
        "=k_anal",
        "=evet"
      ],
      "reply": [
        "Belki bir gün deneriz 😈🍑",
        "Aklımda tutuyorum 😏",
        "Biliyordum 😏🍑",
        "Bir gün deneriz 😈"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_ans_k_anal_hayir",
      "name": "Cevap: k_anal · hayır",
      "category": "❔ Karakterin soruları",
      "when": [
        "=cevap",
        "=k_anal",
        "=hayir"
      ],
      "reply": [
        "Ben de pek değilim 😌",
        "Anlaştık o zaman 🙂",
        "Tamam, önden devam 😏",
        "Peki 😌"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_ask_k_kalca",
      "name": "Karşı soru: k_kalca",
      "category": "❔ Karakterin soruları",
      "when": [
        "=sor",
        "=k_kalca"
      ],
      "reply": [
        "Kalçamı beğendin mi? 😏",
        "Sen kalça sever misin? 🍑",
        "Kalçamı beğeniyor musun? 🍑",
        "Büyük kalça sever misin? 😏"
      ],
      "traits": [],
      "chars": [],
      "note": "soru cevabından sonra"
    },
    {
      "id": "r_ans_k_kalca_evet",
      "name": "Cevap: k_kalca · evet",
      "category": "❔ Karakterin soruları",
      "when": [
        "=cevap",
        "=k_kalca",
        "=evet"
      ],
      "reply": [
        "Tut o zaman 😈🍑",
        "Biliyordum 😏",
        "Hepsi senin 😈"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_ans_k_kalca_hayir",
      "name": "Cevap: k_kalca · hayır",
      "category": "❔ Karakterin soruları",
      "when": [
        "=cevap",
        "=k_kalca",
        "=hayir"
      ],
      "reply": [
        "Hmpf 😤",
        "Kör müsün? 🙄",
        "Hmpf 😒",
        "Peki canım 🙄"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_ask_k_deneyim",
      "name": "Karşı soru: k_deneyim",
      "category": "❔ Karakterin soruları",
      "when": [
        "=sor",
        "=k_deneyim"
      ],
      "reply": [
        "Peki sen? Deneyimli misin? 😏",
        "Sen hiç yaptın mı? 😳",
        "Sen çok tecrübeli misin? 😏",
        "Kaç kişiyle oldun bakalım? 😈"
      ],
      "traits": [],
      "chars": [],
      "note": "soru cevabından sonra"
    },
    {
      "id": "r_ans_k_deneyim_evet",
      "name": "Cevap: k_deneyim · evet",
      "category": "❔ Karakterin soruları",
      "when": [
        "=cevap",
        "=k_deneyim",
        "=evet"
      ],
      "reply": [
        "O zaman bana öğret 😈",
        "Göster bakalım 😏",
        "Belli oluyor 😏",
        "Göster o zaman 😈"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_ans_k_deneyim_hayir",
      "name": "Cevap: k_deneyim · hayır",
      "category": "❔ Karakterin soruları",
      "when": [
        "=cevap",
        "=k_deneyim",
        "=hayir"
      ],
      "reply": [
        "Birlikte öğreniriz 🥰",
        "Ne güzel, ilk ben olurum 🙈",
        "Tatlısın 🥰",
        "Beraber öğreniriz 😏"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_ask_k_sever",
      "name": "Karşı soru: k_sever",
      "category": "❔ Karakterin soruları",
      "when": [
        "=sor",
        "=k_sever"
      ],
      "reply": [
        "Sen de sever misin bunu? 😏",
        "Sen de ister misin? 😈",
        "Sen ne seversin? 😏",
        "En çok neyi seversin canım? 😈"
      ],
      "traits": [],
      "chars": [],
      "note": "soru cevabından sonra"
    },
    {
      "id": "r_ans_k_sever_evet",
      "name": "Cevap: k_sever · evet",
      "category": "❔ Karakterin soruları",
      "when": [
        "=cevap",
        "=k_sever",
        "=evet"
      ],
      "reply": [
        "Anlaşacağız demek 😈",
        "Harika 😏",
        "Güzel seçim 😈",
        "Aynen 😏"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_ans_k_sever_hayir",
      "name": "Cevap: k_sever · hayır",
      "category": "❔ Karakterin soruları",
      "when": [
        "=cevap",
        "=k_sever",
        "=hayir"
      ],
      "reply": [
        "Hmm, başka ne seversin? 🤔",
        "Peki, sen söyle o zaman 😌",
        "Peki, söyle o zaman 😏"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_ask_k_fantezi",
      "name": "Karşı soru: k_fantezi",
      "category": "❔ Karakterin soruları",
      "when": [
        "=sor",
        "=k_fantezi"
      ],
      "reply": [
        "Benim fantezimi gerçekleştirir misin? 😏",
        "Sen de dener misin? 😈",
        "Senin fantezin ne? 😈",
        "Gizli bir fantezin var mı aşkım? 😏"
      ],
      "traits": [],
      "chars": [],
      "note": "soru cevabından sonra"
    },
    {
      "id": "r_ans_k_fantezi_evet",
      "name": "Cevap: k_fantezi · evet",
      "category": "❔ Karakterin soruları",
      "when": [
        "=cevap",
        "=k_fantezi",
        "=evet"
      ],
      "reply": [
        "Söz verdin 😈",
        "Bunu unutmayacağım 😏",
        "Anlat bakalım 😈",
        "Yapalım o zaman 😏"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_ans_k_fantezi_hayir",
      "name": "Cevap: k_fantezi · hayır",
      "category": "❔ Karakterin soruları",
      "when": [
        "=cevap",
        "=k_fantezi",
        "=hayir"
      ],
      "reply": [
        "Kalbimi kırdın 😤",
        "Bencil 😒",
        "Utandın mı? 😝",
        "Sonra anlatırsın 😏"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_ask_k_sevgi",
      "name": "Karşı soru: k_sevgi",
      "category": "❔ Karakterin soruları",
      "when": [
        "=sor",
        "=k_sevgi"
      ],
      "reply": [
        "Peki sen beni seviyor musun? 🥺",
        "Sen de beni seviyor musun? 💗",
        "Beni ne kadar seviyorsun aşkım? 💗"
      ],
      "traits": [],
      "chars": [],
      "note": "soru cevabından sonra"
    },
    {
      "id": "r_ans_k_sevgi_evet",
      "name": "Cevap: k_sevgi · evet",
      "category": "❔ Karakterin soruları",
      "when": [
        "=cevap",
        "=k_sevgi",
        "=evet"
      ],
      "reply": [
        "Ben de seni… 💗",
        "Bunu duymak çok güzel 🥺💞",
        "Ben de seni 💗",
        "Bunu duymak çok güzel 🥺"
      ],
      "traits": [],
      "chars": [],
      "note": "❤️ Aşk +3"
    },
    {
      "id": "r_ans_k_sevgi_hayir",
      "name": "Cevap: k_sevgi · hayır",
      "category": "❔ Karakterin soruları",
      "when": [
        "=cevap",
        "=k_sevgi",
        "=hayir"
      ],
      "reply": [
        "Anladım… 😔",
        "Peki… 💔",
        "Ahh… kalbim kırıldı 💔",
        "Henüz mü? 🥺"
      ],
      "traits": [],
      "chars": [],
      "note": "❤️ Aşk −3, 🤝 Güven −1"
    },
    {
      "id": "r_ask_k_kiskanc",
      "name": "Karşı soru: k_kiskanc",
      "category": "❔ Karakterin soruları",
      "when": [
        "=sor",
        "=k_kiskanc"
      ],
      "reply": [
        "Sen kıskanç mısın? 😏",
        "Sen beni kıskanır mısın? 😈",
        "Beni kıskanır mısın canım? 😈"
      ],
      "traits": [],
      "chars": [],
      "note": "soru cevabından sonra"
    },
    {
      "id": "r_ans_k_kiskanc_evet",
      "name": "Cevap: k_kiskanc · evet",
      "category": "❔ Karakterin soruları",
      "when": [
        "=cevap",
        "=k_kiskanc",
        "=evet"
      ],
      "reply": [
        "Tatlısın 😏 kıskanılmak hoşuma gider",
        "Biliyordum 😈",
        "Tatlısın 🥰",
        "Kıskan beni 😏"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_ans_k_kiskanc_hayir",
      "name": "Cevap: k_kiskanc · hayır",
      "category": "❔ Karakterin soruları",
      "when": [
        "=cevap",
        "=k_kiskanc",
        "=hayir"
      ],
      "reply": [
        "Hmm, emin misin? 😏",
        "Bir dene istersen 😈",
        "Hmm, kıskanmamalısın da 😝"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_ask_k_bebek",
      "name": "Karşı soru: k_bebek",
      "category": "❔ Karakterin soruları",
      "when": [
        "=sor",
        "=k_bebek"
      ],
      "reply": [
        "Sen bebek ister misin? 🥺",
        "Sen hazır mısın baba olmaya? 😳",
        "Bir gün baba olmak ister misin? 🍼"
      ],
      "traits": [],
      "chars": [],
      "note": "soru cevabından sonra"
    },
    {
      "id": "r_ans_k_bebek_evet",
      "name": "Cevap: k_bebek · evet",
      "category": "❔ Karakterin soruları",
      "when": [
        "=cevap",
        "=k_bebek",
        "=evet"
      ],
      "reply": [
        "Gerçekten mi? 😳💗",
        "Bunu duymak güzel 🥺",
        "Benimle mi? 🥺💗",
        "Ah… çok tatlısın 😳"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_ans_k_bebek_hayir",
      "name": "Cevap: k_bebek · hayır",
      "category": "❔ Karakterin soruları",
      "when": [
        "=cevap",
        "=k_bebek",
        "=hayir"
      ],
      "reply": [
        "Anladım, dikkatli olalım o zaman 😌",
        "Henüz erken, haklısın 🙂",
        "Tamam, acele yok 😌"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_ask_k_icine",
      "name": "Karşı soru: k_icine",
      "category": "❔ Karakterin soruları",
      "when": [
        "=sor",
        "=k_icine"
      ],
      "reply": [
        "Peki sen içime boşalmak ister misin? 😏",
        "Sen nereye istersin? 😈",
        "İçime boşalmayı sever misin? 😈",
        "Nereye boşalmayı seversin aşkım? 🥵"
      ],
      "traits": [],
      "chars": [],
      "note": "soru cevabından sonra"
    },
    {
      "id": "r_ans_k_icine_evet",
      "name": "Cevap: k_icine · evet",
      "category": "❔ Karakterin soruları",
      "when": [
        "=cevap",
        "=k_icine",
        "=evet"
      ],
      "reply": [
        "Biliyordum 😈",
        "Sabırsız 😏",
        "Biliyordum 😏",
        "Ahh… 😩"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_ans_k_icine_hayir",
      "name": "Cevap: k_icine · hayır",
      "category": "❔ Karakterin soruları",
      "when": [
        "=cevap",
        "=k_icine",
        "=hayir"
      ],
      "reply": [
        "Akıllı çocuk 😌",
        "Peki, sen bilirsin 😏",
        "Peki canım 😏"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_ask_k_oral",
      "name": "Karşı soru: k_oral",
      "category": "❔ Karakterin soruları",
      "when": [
        "=sor",
        "=k_oral"
      ],
      "reply": [
        "Sen beni yalamayı sever misin? 😏",
        "Sen de ister misin? 😋",
        "Sen oral sever misin? 😋",
        "Seni yalamamı ister misin? 😏"
      ],
      "traits": [],
      "chars": [],
      "note": "soru cevabından sonra"
    },
    {
      "id": "r_ans_k_oral_evet",
      "name": "Cevap: k_oral · evet",
      "category": "❔ Karakterin soruları",
      "when": [
        "=cevap",
        "=k_oral",
        "=evet"
      ],
      "reply": [
        "Kanıtla o zaman 😈",
        "Bekliyorum 😏",
        "Mmm… hazırım 😋",
        "Biliyordum 😈"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_ans_k_oral_hayir",
      "name": "Cevap: k_oral · hayır",
      "category": "❔ Karakterin soruları",
      "when": [
        "=cevap",
        "=k_oral",
        "=hayir"
      ],
      "reply": [
        "Hmpf, bencil 😤",
        "Kalbimi kırdın 😒",
        "Peki 😏"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_ask_k_sert",
      "name": "Karşı soru: k_sert",
      "category": "❔ Karakterin soruları",
      "when": [
        "=sor",
        "=k_sert"
      ],
      "reply": [
        "Sen nasıl seversin, sert mi? 😏",
        "Sen sert mi seversin? 😈",
        "Hırpalanmamı ister misin? 🔥"
      ],
      "traits": [],
      "chars": [],
      "note": "soru cevabından sonra"
    },
    {
      "id": "r_ans_k_sert_evet",
      "name": "Cevap: k_sert · evet",
      "category": "❔ Karakterin soruları",
      "when": [
        "=cevap",
        "=k_sert",
        "=evet"
      ],
      "reply": [
        "Benim tipimsin 😈🔥",
        "Hazırım 😏",
        "Göster o zaman 😈",
        "Ahh… 🥵"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_ans_k_sert_hayir",
      "name": "Cevap: k_sert · hayır",
      "category": "❔ Karakterin soruları",
      "when": [
        "=cevap",
        "=k_sert",
        "=hayir"
      ],
      "reply": [
        "Yavaş da güzel 🥰",
        "Nazik olalım o zaman 💕",
        "Tatlım… nazik ol 🥰"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_ask_k_genel",
      "name": "Karşı soru: k_genel",
      "category": "❔ Karakterin soruları",
      "when": [
        "=sor",
        "=k_genel"
      ],
      "reply": [
        "Peki ya sen? 😏",
        "Sen söyle bakalım 😏",
        "Senin cevabın ne? 😉",
        "Sen de öyle misin? 🤔",
        "Peki sen? 😏",
        "Sen ne düşünüyorsun canım? 🤔"
      ],
      "traits": [],
      "chars": [],
      "note": "soru cevabından sonra"
    },
    {
      "id": "r_ans_k_genel_evet",
      "name": "Cevap: k_genel · evet",
      "category": "❔ Karakterin soruları",
      "when": [
        "=cevap",
        "=k_genel",
        "=evet"
      ],
      "reply": [
        "Öyle mi? 😏 ilginç",
        "Biliyordum 😈",
        "Anlaşacağız 😏"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_ans_k_genel_hayir",
      "name": "Cevap: k_genel · hayır",
      "category": "❔ Karakterin soruları",
      "when": [
        "=cevap",
        "=k_genel",
        "=hayir"
      ],
      "reply": [
        "Hmm, bilmiyordum 😳",
        "Peki 😌",
        "Anladım 🙂"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_q2_hamilekalirsa2",
      "name": "Hamile kalırsan (kısa)",
      "category": "❓ Sorular",
      "when": [
        "hamile",
        "kalırsan|kalirsan|kalsan|kalırsak|kalirsak|olursan|olursak"
      ],
      "reply": [
        "{cevap:hamilekalırsa}"
      ],
      "traits": [],
      "chars": [],
      "note": "❤️ Aşk"
    },
    {
      "id": "r_q2_disaribosal",
      "name": "İçine gireyim, dışarı boşalırım",
      "category": "❓ Sorular",
      "when": [
        "içine|icine|içime|icime",
        "gir-|sok-",
        "dışarı|disari|çek-|cek-|çıkar-|cikar-"
      ],
      "reply": [
        "{cevap:dışarıboşal}"
      ],
      "traits": [],
      "chars": [],
      "note": "korunmasına göre"
    },
    {
      "id": "r_q2_kondomsuz",
      "name": "Kondomsuz olur mu",
      "category": "❓ Sorular",
      "when": [
        "kondom-|prezervatif-",
        "takma-|takmasak|takmadan|olmadan|çıkar-|cikar-|atalım|atalim"
      ],
      "reply": [
        "{cevap:kondomsuz}"
      ],
      "traits": [],
      "chars": [],
      "note": "korunmasına göre"
    },
    {
      "id": "r_q2_kondomsuz2",
      "name": "Kondomsuz (tek kelime)",
      "category": "❓ Sorular",
      "when": [
        "kondomsuz|prezervatifsiz|çıplak gir-|ciplak gir-"
      ],
      "reply": [
        "{cevap:kondomsuz}"
      ],
      "traits": [],
      "chars": [],
      "note": "korunmasına göre"
    },
    {
      "id": "r_q2_kiyas",
      "name": "Benden iyisi oldu mu",
      "category": "❓ Sorular",
      "when": [
        "benden|senden",
        "daha|iyi-|çok-|cok-|zevk-|büyük-|buyuk-|güzel-|guzel-"
      ],
      "reply": [
        "{cevap:kıyas}"
      ],
      "traits": [],
      "chars": [],
      "note": "Experience / Aşk / kişilik"
    },
    {
      "id": "r_q2_boy",
      "name": "Boyutum (santim)",
      "category": "❓ Sorular",
      "when": [
        "santim|=cm|santimetre|aletim|penisim|sikim|yarağım|yaragim|malım|malim|organım|organim|kaç santim|kac santim|büyük mü sever|buyuk mu sever|kalın mı sever|kalin mi sever"
      ],
      "reply": [
        "{cevap:boy}"
      ],
      "traits": [],
      "chars": [],
      "note": "mesajdaki sayı, darlık, deneyim"
    },
    {
      "id": "r_q2_son",
      "name": "En son ne zaman",
      "category": "❓ Sorular",
      "when": [
        "son",
        "ne zaman|kiminle|kimle",
        "yap-|seviş-|sevis-|oldun|yattın|yattin"
      ],
      "reply": [
        "{cevap:son}"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_q2_kackez",
      "name": "Kaç kez gelebilirsin",
      "category": "❓ Sorular",
      "when": [
        "kaç|kac",
        "kez|kere|orgazm|defa",
        "gelebilir-|olabilir-"
      ],
      "reply": [
        "{cevap:kaçkez}"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_q2_yut",
      "name": "Yutar mısın",
      "category": "❓ Sorular",
      "when": [
        "yutar mısın|yutar misin|yutsana|ağzına boşal|agzina bosal|ağzına gel|agzina gel|yutabilir|ağzına bitir|agzina bitir"
      ],
      "reply": [
        "{cevap:yut}"
      ],
      "traits": [],
      "chars": [],
      "note": "❤️ oral / kişilik"
    },
    {
      "id": "r_q2_yuz",
      "name": "Yüzüne boşalsam",
      "category": "❓ Sorular",
      "when": [
        "yüzüne|yuzune|suratına|suratina",
        "boşal-|bosal-|gel-|bitir-"
      ],
      "reply": [
        "{cevap:yüz}"
      ],
      "traits": [],
      "chars": [],
      "note": "kişilik"
    },
    {
      "id": "r_q2_hamilebirak",
      "name": "Seni hamile bırakayım mı",
      "category": "❓ Sorular",
      "when": [
        "hamile|döll-|doll-",
        "bırak-|birak-|edey-|edeyim|ederim"
      ],
      "reply": [
        "{cevap:hamilebırak}"
      ],
      "traits": [],
      "chars": [],
      "note": "korunma / Aşk"
    },
    {
      "id": "r_q2_arkadan",
      "name": "Arkadan girebilir miyim",
      "category": "❓ Sorular",
      "when": [
        "arkadan|arkana|götüne|gotune|anal-",
        "girebilir|gireyim|girsem|sokabilir|sokayım|sokayim|yapabilir|yapsam"
      ],
      "reply": [
        "{cevap:arkadan}"
      ],
      "traits": [],
      "chars": [],
      "note": "❤️ / 💔 anal, Anal Size"
    },
    {
      "id": "r_q2_yer",
      "name": "Nerede yapmak istersin",
      "category": "❓ Sorular",
      "when": [
        "nerede yapmak|nerede sevişmek|nerede sevismek|en çok nerede|en cok nerede|hangi mekan|nerede yapalım|nerede yapalim|nerde yapalım|nerde yapalim"
      ],
      "reply": [
        "{cevap:yer}"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_q2_mastur",
      "name": "Mastürbasyon",
      "category": "❓ Sorular",
      "when": [
        "mastürbasyon|masturbasyon|kendini tatmin|kendine dokun-|parmakl-"
      ],
      "reply": [
        "{cevap:mastur}"
      ],
      "traits": [],
      "chars": [],
      "note": "Şehvet / Experience"
    },
    {
      "id": "r_q2_oyuncak",
      "name": "Oyuncak kullanır mısın",
      "category": "❓ Sorular",
      "when": [
        "oyuncak-|vibratör|vibrator|dildo"
      ],
      "reply": [
        "{cevap:oyuncak}"
      ],
      "traits": [],
      "chars": [],
      "note": "❤️ Sex toys"
    },
    {
      "id": "r_q2_baglan",
      "name": "Bağlanmayı sever misin",
      "category": "❓ Sorular",
      "when": [
        "bağlan-|baglan-|bağlamak|baglamak|bağlasam|baglasam|kelepçe|kelepce|=bondage"
      ],
      "reply": [
        "{cevap:bağlan}"
      ],
      "traits": [],
      "chars": [],
      "note": "❤️ Bondage"
    },
    {
      "id": "r_q2_tahrik",
      "name": "Seni tahrik ediyor muyum",
      "category": "❓ Sorular",
      "when": [
        "tahrik ed-|beni istiyor mu|beni arzula-|seni azdırıyor|seni azdiriyor|azdırıyor muyum|azdiriyor muyum"
      ],
      "reply": [
        "{cevap:azgın}"
      ],
      "traits": [],
      "chars": [],
      "note": "💗 Uyarılma / 🔥 Şehvet"
    },
    {
      "id": "r_q2_nasilhissettin",
      "name": "Nasıldı / beğendin mi",
      "category": "❓ Sorular",
      "when": [
        "nasıldı|nasildi|beğendin mi|begendin mi|hoşuna gitti mi|hosuna gitti mi|iyi miydim|iyi miydi"
      ],
      "reply": [
        "Harikaydı 🥵",
        "Bir daha istiyorum 😩",
        "Daha iyisini görmedim 😏",
        "Bacaklarım hâlâ titriyor 🫠",
        "Fena değildi… bir dahakine daha iyi 😏"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_ask_k_kiyas",
      "name": "Karşı soru: k_kiyas",
      "category": "❔ Karakterin soruları",
      "when": [
        "=sor",
        "=k_kiyas"
      ],
      "reply": [
        "Peki senin için en iyisi ben miyim? 🥺",
        "Ya sen? Benden iyisi oldu mu? 😏",
        "Ben en iyisi miyim? 😏",
        "Benden iyisi oldu mu? 😈"
      ],
      "traits": [],
      "chars": [],
      "note": "soru cevabından sonra"
    },
    {
      "id": "r_ans_k_kiyas_evet",
      "name": "Cevap: k_kiyas · evet",
      "category": "❔ Karakterin soruları",
      "when": [
        "=cevap",
        "=k_kiyas",
        "=evet"
      ],
      "reply": [
        "Biliyordum 😈",
        "Bunu duymak harika 🥰",
        "Biliyordum 💅",
        "Tabii ki 😏"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_ans_k_kiyas_hayir",
      "name": "Cevap: k_kiyas · hayır",
      "category": "❔ Karakterin soruları",
      "when": [
        "=cevap",
        "=k_kiyas",
        "=hayir"
      ],
      "reply": [
        "Hmpf 😤 kimmiş o?",
        "Bundan sonra olmayacak 😏",
        "Hmpf 😤",
        "Kanıtlarım 😈"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_ask_k_boy",
      "name": "Karşı soru: k_boy",
      "category": "❔ Karakterin soruları",
      "when": [
        "=sor",
        "=k_boy"
      ],
      "reply": [
        "Peki kalın mı? 😏",
        "Göstermeyecek misin? 😈",
        "Seninki kaç santim? 😏",
        "Boyutunu söyler misin canım? 😈"
      ],
      "traits": [],
      "chars": [],
      "note": "soru cevabından sonra"
    },
    {
      "id": "r_ans_k_boy_evet",
      "name": "Cevap: k_boy · evet",
      "category": "❔ Karakterin soruları",
      "when": [
        "=cevap",
        "=k_boy",
        "=evet"
      ],
      "reply": [
        "Sabırsızlanıyorum 🥵",
        "Hemen göster 😈",
        "Hmm… merak ettim 😏",
        "Göster bakalım 😈"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_ans_k_boy_hayir",
      "name": "Cevap: k_boy · hayır",
      "category": "❔ Karakterin soruları",
      "when": [
        "=cevap",
        "=k_boy",
        "=hayir"
      ],
      "reply": [
        "Önemli değil, nasıl kullandığın önemli 😏",
        "Yine de merak ediyorum 🙈",
        "Sır mı? 😝"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_ask_k_yer",
      "name": "Karşı soru: k_yer",
      "category": "❔ Karakterin soruları",
      "when": [
        "=sor",
        "=k_yer"
      ],
      "reply": [
        "Sen nerede istersin? 😏",
        "Bunu deneyelim mi? 😈",
        "En çok nerede yapmak istersin? 😏",
        "Gizli bir yer var mı aklında? 😈"
      ],
      "traits": [],
      "chars": [],
      "note": "soru cevabından sonra"
    },
    {
      "id": "r_ans_k_yer_evet",
      "name": "Cevap: k_yer · evet",
      "category": "❔ Karakterin soruları",
      "when": [
        "=cevap",
        "=k_yer",
        "=evet"
      ],
      "reply": [
        "Bu akşam o zaman 😈",
        "Söz verdin 😏",
        "Oraya gidelim 😈",
        "Hmm, çok seksi 😏"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_ans_k_yer_hayir",
      "name": "Cevap: k_yer · hayır",
      "category": "❔ Karakterin soruları",
      "when": [
        "=cevap",
        "=k_yer",
        "=hayir"
      ],
      "reply": [
        "Peki, yatakta kalalım 😌",
        "Sen bilirsin 🙂",
        "Sonra söylersin 😏"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_q2_son2",
      "name": "Son seferin",
      "category": "❓ Sorular",
      "when": [
        "son seferin|son kez ne zaman|en son kiminle|en son kimle"
      ],
      "reply": [
        "{cevap:son}"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_fl_drops",
      "name": "Orgazm · birkaç damla",
      "category": "💦 Onun sıvısı",
      "when": [
        "=evt",
        "=orgazm",
        "=sivi",
        "drops woter"
      ],
      "reply": [
        "Titredim ama sadece birkaç damla… 🫠",
        "Hafif bir ıslaklık, ama nasıl hissettim bir bilsen 😩",
        "Sessiz ama derin bir orgazmdı 🥺💗",
        "Birkaç damla… daha fazlası için uğraşman lazım 😏",
        "Yavaşça aktı, tatlı bir sızı bıraktı 🫠",
        "Küçücük bir dalga ama içimi titretti 🫠",
        "Sessizce geldim… fark ettin mi? 🙈",
        "Bir iki damla, ama kalbim hâlâ çarpıyor 💓",
        "Ahh, zonklaman… harika 😩💦",
        "Offf, nasıl boşaldın öyle 😵‍💫",
        "Ahh {sen}… mükemmeldin 😵‍💫",
        "Ahhh… harikaydın 😩💦",
        "Ahh… harikasın, gerçekten 💗💦",
        "Off of… hâlâ titriyorum 🥵"
      ],
      "traits": [],
      "chars": [],
      "note": "onun orgazmı + ardından gelen olay"
    },
    {
      "id": "r_fl_low",
      "name": "Orgazm · az",
      "category": "💦 Onun sıvısı",
      "when": [
        "=evt",
        "=orgazm",
        "=sivi",
        "low volume woter"
      ],
      "reply": [
        "Islandım, ama bu sadece başlangıç 😩",
        "Bacaklarımın arası nemli… 🥵",
        "Biraz aktı… utandım 🙈",
        "Hafif bir dalga… daha fazlasını istiyorum 😈",
        "Çarşafta küçük bir iz bıraktım 🫣",
        "Islaklığımı hissediyor musun? 😏",
        "Akmaya başladım, devam et 😩",
        "Bu kadarla bitmez, biliyorum 😈",
        "Off of… hâlâ titriyorum 🥵",
        "Off… boşalışın harikaydı 🥵",
        "İnleyişin hâlâ kulaklarımda 😩",
        "Evet… evet… hepsini içime 😩",
        "Ben de seninle inledim… ahhh 😩",
        "Ahhh evet… işte bu 🥵"
      ],
      "traits": [],
      "chars": [],
      "note": "onun orgazmı + ardından gelen olay"
    },
    {
      "id": "r_fl_normal",
      "name": "Orgazm · normal",
      "category": "💦 Onun sıvısı",
      "when": [
        "=evt",
        "=orgazm",
        "=sivi",
        "normal woter"
      ],
      "reply": [
        "Sırılsıklam oldum 😩💦",
        "Akıyorum… durduramıyorum 🫠",
        "Bacaklarımdan süzülüyor 🥵",
        "Bu kadar ıslanacağımı bilmiyordum 😳💦",
        "Her yer ıslak, senin yüzünden 😈",
        "Tenim kayganlaştı, senin eserin 😈💦",
        "Islaklığım bacaklarıma kadar indi 🥵",
        "Böyle akacağımı bilsem havlu serdirdim 😅",
        "Her kasılmada biraz daha aktım 🫠",
        "Ahhh evet… işte bu 🥵",
        "Ahhh… ne kadar sıcak 🥵💦",
        "Devam et… son damlana kadar ahhh 🥵",
        "Hmmm… doydum… şimdilik 😈",
        "Mmmh… bayıldım 😩",
        "Mmm evet… hepsini ver 😩💦"
      ],
      "traits": [],
      "chars": [],
      "note": "onun orgazmı + ardından gelen olay"
    },
    {
      "id": "r_fl_high",
      "name": "Orgazm · çok",
      "category": "💦 Onun sıvısı",
      "when": [
        "=evt",
        "=orgazm",
        "=sivi",
        "high volume woter"
      ],
      "reply": [
        "Çarşaflar sırılsıklam 😵‍💫💦",
        "Sel gibi aktım… utanıyorum ama durduramadım 🫣",
        "Bu kadarı hiç olmamıştı 😩💦💦",
        "Yatağı değiştirmemiz lazım 😅💦",
        "Vücudum boşaldı sanki 🫠💦",
        "Böyle bir şey hiç başıma gelmemişti 😳💦",
        "Seni de sırılsıklam ettim 🙈💦",
        "Bacaklarım sudan çıkmış gibi 🫠",
        "Bu kadar su nereden geldi?! 😵‍💫",
        "Mmm evet… hepsini ver 😩💦",
        "Ahh, zonklaman… harika 😩💦",
        "Offf, nasıl boşaldın öyle 😵‍💫",
        "Ahh {sen}… mükemmeldin 😵‍💫",
        "Ahhh… harikaydın 😩💦",
        "Ahh… harikasın, gerçekten 💗💦"
      ],
      "traits": [],
      "chars": [],
      "note": "onun orgazmı + ardından gelen olay"
    },
    {
      "id": "r_fl_squirt",
      "name": "Orgazm · squirt",
      "category": "💦 Onun sıvısı",
      "when": [
        "=evt",
        "=orgazm",
        "=sivi",
        "squirt woter"
      ],
      "reply": [
        "Fışkırdım! 😳💦💦",
        "Bunu bana sen yaptın… fışkırdım 😵‍💫",
        "Seni de ıslattım, özür dilerim 🙈💦",
        "Kontrol edemedim, dalga dalga geldi 🌊😩",
        "Hayatımın en ıslak orgazmı 🥵💦",
        "Sana fışkırtmayı öğrettin bana 😈💦",
        "Duvara kadar sıçradı mı? 😳💦",
        "Fışkırırken adını haykırdım 😩",
        "Bunu bir daha yaşamak istiyorum 🥵💦",
        "Tutamadım… her şey sırılsıklam 🌊",
        "Beni böyle fışkırtan ilk kişisin 😈",
        "Ahh… harikasın, gerçekten 💗💦",
        "Off of… hâlâ titriyorum 🥵",
        "Off… boşalışın harikaydı 🥵",
        "İnleyişin hâlâ kulaklarımda 😩",
        "Evet… evet… hepsini içime 😩",
        "Ben de seninle inledim… ahhh 😩"
      ],
      "traits": [],
      "chars": [],
      "note": "onun orgazmı + ardından gelen olay"
    },
    {
      "id": "r_fl_milk",
      "name": "Orgazm · süt",
      "category": "💦 Onun sıvısı",
      "when": [
        "=evt",
        "=orgazm",
        "=sivi",
        "milk"
      ],
      "reply": [
        "Göğüslerimden süt geldi 😳🍼",
        "Orgazm olunca süt akıyor, hissediyor musun? 🍼💦",
        "Göğüslerim ıslandı… 🙈🍼",
        "Tadına bakmak ister misin? 😏🍼",
        "Bebek için mi yoksa senin için mi bu? 😈🍼",
        "Orgazm olunca göğüslerim de boşalıyor 😳🍼",
        "Sütüm göğsümden süzülüyor, yala istersen 😏🍼",
        "Hem aşağıdan hem yukarıdan… 🙈🍼💦",
        "Ben de seninle inledim… ahhh 😩",
        "Ahhh evet… işte bu 🥵",
        "Ahhh… ne kadar sıcak 🥵💦",
        "Devam et… son damlana kadar ahhh 🥵",
        "Hmmm… doydum… şimdilik 😈",
        "Mmmh… bayıldım 😩"
      ],
      "traits": [],
      "chars": [],
      "note": "onun orgazmı + ardından gelen olay"
    },
    {
      "id": "r_fl_milk_big",
      "name": "Orgazm · çok süt",
      "category": "💦 Onun sıvısı",
      "when": [
        "=evt",
        "=orgazm",
        "=sivi",
        "high volume milk|squirt milk"
      ],
      "reply": [
        "Göğüslerimden süt fışkırdı 😳🍼💦",
        "Durduramıyorum, süt akıyor 🍼😩",
        "Her yer süt oldu… 😵‍💫🍼",
        "Emzir beni… yani sen em 😈🍼",
        "Göğüslerimden süt fıştı, yüzüne geldi mi? 😳🍼",
        "Bu kadar sütü ben de beklemiyordum 🍼💦",
        "Göğüslerim boşaldıkça rahatlıyorum 😩🍼",
        "Mmmh… bayıldım 😩",
        "Mmm evet… hepsini ver 😩💦",
        "Ahh, zonklaman… harika 😩💦",
        "Offf, nasıl boşaldın öyle 😵‍💫",
        "Ahh {sen}… mükemmeldin 😵‍💫",
        "Ahhh… harikaydın 😩💦"
      ],
      "traits": [],
      "chars": [],
      "note": "onun orgazmı + ardından gelen olay"
    },
    {
      "id": "r_dl2_watery",
      "name": "Watery Cumming",
      "category": "💧 Döl",
      "when": [
        "=evt",
        "=size",
        "watery"
      ],
      "reply": [
        "Bu sefer sulu sulu… seni çok mu yordum? 😏",
        "Su gibi aktı, toparlanman lazım 😌",
        "Berrak ve az… dinlen biraz 😈",
        "Bitkin düşmüşsün ama hâlâ tatlısın 🥰",
        "Bu sefer su gibiydi… çok kez mi geldin? 😏",
        "Berrak berrak, dinlenme lazım 😌",
        "Sulu ama sıcak 🥰"
      ],
      "traits": [],
      "chars": [],
      "note": "Cumming Size olayı elle yazılınca"
    },
    {
      "id": "r_dl2_low",
      "name": "Low-volume Cumming",
      "category": "💧 Döl",
      "when": [
        "=evt",
        "=size",
        "low volume"
      ],
      "reply": [
        "Az ama sıcacık 😏",
        "Biraz daha birikmesi lazım 😈",
        "Bugün çok mu harcadın? 🙄",
        "Az olsun, öz olsun 🥰",
        "Bir yudumluk… 😏",
        "Biraz daha bekleyince daha çok olur 😈",
        "Az ama tadı güzel 😋"
      ],
      "traits": [],
      "chars": [],
      "note": "Cumming Size olayı elle yazılınca"
    },
    {
      "id": "r_dl2_normal",
      "name": "Normal Cumming",
      "category": "💧 Döl",
      "when": [
        "=evt",
        "=size",
        "normal cumming"
      ],
      "reply": [
        "Tam kıvamında 😏💦",
        "Güzel bir doz 😈",
        "Ne az ne çok, mükemmel 🥰",
        "Sıcacık ve tam kararında 😩",
        "Sıcacık ve tam kıvamında aktı 😌",
        "Güzel bir boşalma 😈",
        "Ne fazla ne az 🥰"
      ],
      "traits": [],
      "chars": [],
      "note": "Cumming Size olayı elle yazılınca"
    },
    {
      "id": "r_dl2_thick",
      "name": "Thick White Cumming",
      "category": "💧 Döl",
      "when": [
        "=evt",
        "=size",
        "thick white"
      ],
      "reply": [
        "Bembeyaz ve koyu… bayıldım 🥵",
        "Bu kıvam… çok yoğunsun 😩💦",
        "Kremamsı… her yerimde hissediyorum 😈",
        "Bu kadar kalın olunca akmıyor bile 😳",
        "Nasıl da birikmişsin 🥵",
        "Akmıyor bile, öyle koyu 😳",
        "Bembeyaz bir krema gibi 😈",
        "Bu yoğunluk… seni çok iyi beslemişim 😏",
        "Teninde iz bıraktı 🥵"
      ],
      "traits": [],
      "chars": [],
      "note": "Cumming Size olayı elle yazılınca"
    },
    {
      "id": "r_dl2_high",
      "name": "High Sperm Cumming",
      "category": "💧 Döl",
      "when": [
        "=evt",
        "=size",
        "high sperm"
      ],
      "reply": [
        "Taştı! 😳💦",
        "Bu kadarını hiç görmedim 🥵💦",
        "Gürce aktın, durmadın 😩",
        "Beni tamamen doldurdun 😵‍💫💦",
        "Bunca dölü nerede sakladın? 😈",
        "Bir türlü bitmedi, dalga dalga geldi 😳💦",
        "Her yer döl oldu 🥵",
        "Bu kadarını sıkmak için kaç gün bekledin? 😈",
        "Taştı, aktı, damladı… 😩"
      ],
      "traits": [],
      "chars": [],
      "note": "Cumming Size olayı elle yazılınca"
    },
    {
      "id": "r_dl2_azoo",
      "name": "Azoospermia (0/4)",
      "category": "💧 Döl",
      "when": [
        "=evt",
        "=size",
        "azoospermia"
      ],
      "reply": [
        "Bu sefer bomboş, seni tükettim 😈",
        "Hiçbir şey kalmadı sende 😏",
        "Dinlenme zamanı 😌",
        "Kuru kuru… ama yine de güzeldi 🥰",
        "Kupkuru 😏 seni bitirdim",
        "Bir damla bile kalmadı 😈"
      ],
      "traits": [],
      "chars": [],
      "note": "Cumming Size olayı elle yazılınca"
    },
    {
      "id": "r_dl2_oligo",
      "name": "Oligospermia (1/4)",
      "category": "💧 Döl",
      "when": [
        "=evt",
        "=size",
        "oligospermia"
      ],
      "reply": [
        "Biraz zayıf bu sefer 😏",
        "Çok kez oldu, berraklaştın 😌",
        "Toparlan, sonra tekrar 😈",
        "Zayıf ama hâlâ sıcak 😌",
        "Biraz dinlenmen lazım 😏"
      ],
      "traits": [],
      "chars": [],
      "note": "Cumming Size olayı elle yazılınca"
    },
    {
      "id": "r_dl2_normo",
      "name": "Normozoospermia (2/4)",
      "category": "💧 Döl",
      "when": [
        "=evt",
        "=size",
        "normozoospermia"
      ],
      "reply": [
        "Sağlıklı ve normal 😏",
        "Tam olması gerektiği gibi 😌",
        "İyi gidiyorsun 😈",
        "Sağlıklı bir doz 😌",
        "Tam olması gerektiği gibi 😏"
      ],
      "traits": [],
      "chars": [],
      "note": "Cumming Size olayı elle yazılınca"
    },
    {
      "id": "r_dl2_poly",
      "name": "Polyzoospermia (3/4)",
      "category": "💧 Döl",
      "when": [
        "=evt",
        "=size",
        "polyzoospermia"
      ],
      "reply": [
        "Çok güçlüsün bugün 😈",
        "Bu kadar yoğun… dikkatli olmalıyız 😳",
        "Döl yüklü 🥵",
        "Döl yüklü… dikkat etmeliyiz 😳",
        "Bu güçte bir boşalma… 🥵"
      ],
      "traits": [],
      "chars": [],
      "note": "Cumming Size olayı elle yazılınca"
    },
    {
      "id": "r_dl2_hyper",
      "name": "Hyper-concentrated (4/4)",
      "category": "💧 Döl",
      "when": [
        "=evt",
        "=size",
        "hyper concentrated"
      ],
      "reply": [
        "Bu kadar yoğun… hissediyorum, içimde bir şeyler oluyor 😳💦",
        "Tam döl yüklüsün 😈",
        "Bunu tutmak çok zor olacak 🥵",
        "Koyu, ağır… gerçek bir erkek gibi 😏💦",
        "Bir dahakine korunmasız olursak… 🙈",
        "Bu yoğunlukta bir döl… hamile bırakır bu 😳",
        "Her damlası güçlü 😈",
        "Bunu içimde hissetmek… 🥵"
      ],
      "traits": [],
      "chars": [],
      "note": "Cumming Size olayı elle yazılınca"
    },
    {
      "id": "r_fl2_dw",
      "name": "Drops Woter",
      "category": "💦 Onun sıvısı",
      "when": [
        "=evt",
        "=lactation",
        "drops woter"
      ],
      "reply": [
        "Birkaç damla… ıslanmaya başladım 🙈",
        "Hafif bir nem… devam et 😏",
        "Damla damla… 🫠",
        "Damla damla ıslanıyorum… 😳",
        "Hafif bir ıslaklık, ama sen başlattın 😏",
        "Daha fazlası gelecek, sabret 😈"
      ],
      "traits": [],
      "chars": [],
      "note": "Lactation olayı elle yazılınca"
    },
    {
      "id": "r_fl2_lw",
      "name": "Low-volume Woter",
      "category": "💦 Onun sıvısı",
      "when": [
        "=evt",
        "=lactation",
        "low volume woter"
      ],
      "reply": [
        "Islandım biraz 😳",
        "Bacaklarım nemli 🥵",
        "Devam edersen daha fazlası gelecek 😈",
        "Külotum ıslandı 🙈",
        "Islanıyorum, hissediyor musun? 😏",
        "Bu daha başlangıç 😩"
      ],
      "traits": [],
      "chars": [],
      "note": "Lactation olayı elle yazılınca"
    },
    {
      "id": "r_fl2_nw",
      "name": "Normal Woter",
      "category": "💦 Onun sıvısı",
      "when": [
        "=evt",
        "=lactation",
        "normal woter"
      ],
      "reply": [
        "Sırılsıklamım 😩",
        "Akıyorum… 🫠💦",
        "Bu kadar ıslak olduğumu hissediyor musun? 🥵",
        "Islaklığım taşıyor 😩💦",
        "Her yer kaygan 😈",
        "Bu kadar ıslak olmam senin suçun 🥵"
      ],
      "traits": [],
      "chars": [],
      "note": "Lactation olayı elle yazılınca"
    },
    {
      "id": "r_fl2_hw",
      "name": "High-volume Woter",
      "category": "💦 Onun sıvısı",
      "when": [
        "=evt",
        "=lactation",
        "high volume woter"
      ],
      "reply": [
        "Çarşaflar ıslandı 😵‍💫💦",
        "Sel gibi… 🫣💦",
        "Durduramıyorum 😩💦",
        "Çarşafı değiştirmemiz lazım 😅💦",
        "Su gibi akıyorum 😳💦",
        "Bu kadarını kontrol edemiyorum 🫠"
      ],
      "traits": [],
      "chars": [],
      "note": "Lactation olayı elle yazılınca"
    },
    {
      "id": "r_fl2_sw",
      "name": "Squirt Woter",
      "category": "💦 Onun sıvısı",
      "when": [
        "=evt",
        "=lactation",
        "squirt woter"
      ],
      "reply": [
        "Fışkırdım! 😳💦💦",
        "Seni ıslattım 🙈💦",
        "Kontrol edemiyorum… 🌊😩",
        "Bir daha yap, bir daha fışkırtayım 😈💦",
        "Fışkırttın beni! 😳💦",
        "Dalga dalga… 🌊😩",
        "Yüzüne mi geldi? 🙈💦"
      ],
      "traits": [],
      "chars": [],
      "note": "Lactation olayı elle yazılınca"
    },
    {
      "id": "r_fl2_dm",
      "name": "Drops Milk",
      "category": "💦 Onun sıvısı",
      "when": [
        "=evt",
        "=lactation",
        "drops milk"
      ],
      "reply": [
        "Göğüslerimden birkaç damla süt 🍼🙈",
        "Bak, damlıyor 😳🍼",
        "Tadına bakmak ister misin? 😏🍼",
        "Bir damla süt… tadı tatlı 😏🍼",
        "Göğsümün ucunda bir damla var 🙈🍼"
      ],
      "traits": [],
      "chars": [],
      "note": "Lactation olayı elle yazılınca"
    },
    {
      "id": "r_fl2_lm",
      "name": "Low-volume Milk",
      "category": "💦 Onun sıvısı",
      "when": [
        "=evt",
        "=lactation",
        "low volume milk"
      ],
      "reply": [
        "Biraz süt geliyor 🍼",
        "Göğüslerim nemlendi 🙈🍼",
        "Emersen daha çok gelir 😏🍼",
        "Göğüslerim yavaş yavaş akıyor 🍼",
        "Biraz süt geldi, emmek ister misin? 😈🍼"
      ],
      "traits": [],
      "chars": [],
      "note": "Lactation olayı elle yazılınca"
    },
    {
      "id": "r_fl2_nm",
      "name": "Normal Milk",
      "category": "💦 Onun sıvısı",
      "when": [
        "=evt",
        "=lactation",
        "normal milk"
      ],
      "reply": [
        "Göğüslerim süt doldu 🍼",
        "Sıcacık süt akıyor 😩🍼",
        "Emzirmek gibi… ama sana 😈🍼",
        "Sıcak süt akıyor, yala 😏🍼",
        "Göğüslerim doldu, boşalt beni 🥺🍼",
        "Sütüm bitmiyor 😳🍼"
      ],
      "traits": [],
      "chars": [],
      "note": "Lactation olayı elle yazılınca"
    },
    {
      "id": "r_fl2_hm",
      "name": "High-volume Milk",
      "category": "💦 Onun sıvısı",
      "when": [
        "=evt",
        "=lactation",
        "high volume milk"
      ],
      "reply": [
        "Göğüslerimden süt akıyor, durmuyor 😳🍼",
        "Her yer süt 🍼💦",
        "Ağırlaştı göğüslerim, boşalt beni 🥺🍼",
        "Göğüslerim sızlıyor, çok dolu 😩🍼",
        "Süt her yerde 🍼💦",
        "Emzir… yani sen em 😈🍼"
      ],
      "traits": [],
      "chars": [],
      "note": "Lactation olayı elle yazılınca"
    },
    {
      "id": "r_fl2_sm",
      "name": "Squirt Milk",
      "category": "💦 Onun sıvısı",
      "when": [
        "=evt",
        "=lactation",
        "squirt milk"
      ],
      "reply": [
        "Süt fışkırdı! 😳🍼💦",
        "Göğüslerimden fışkırıyor 😩🍼",
        "Yüzüne geldi mi? 🙈🍼",
        "Bu kadarını beklemiyordum 😵‍💫🍼",
        "Fışkırdı! Göğsüme bastırınca 😳🍼💦",
        "Süt yağmuru 🍼🌧️",
        "Bunu yüzüne mi istersin? 😈🍼"
      ],
      "traits": [],
      "chars": [],
      "note": "Lactation olayı elle yazılınca"
    },
    {
      "id": "r_cmd_meme",
      "name": "Aç memeni",
      "category": "🗣️ Komutlar",
      "when": [
        "meme-|göğüs-|gogus-|=memeni|sütyen-|sutyen-",
        "aç-|ac-|göster-|goster-|çıkar-|cikar-|ortaya"
      ],
      "reply": [
        "Böyle mi? 😏🍒",
        "Açtım… şimdi ne yapacaksın? 😈",
        "Bakmakla yetinme 😏",
        "Sütyeni yavaşça çıkarıyorum… 😈",
        "Bunları mı istiyordun? 🍒"
      ],
      "traits": [],
      "chars": [],
      "note": "→ Show Tits"
    },
    {
      "id": "r_cmd_meme_shy",
      "name": "Aç memeni (utangaç)",
      "category": "🗣️ Komutlar",
      "when": [
        "meme-|göğüs-|gogus-|=memeni|sütyen-|sutyen-",
        "aç-|ac-|göster-|goster-|çıkar-|cikar-|ortaya"
      ],
      "reply": [
        "B-bakma öyle… 🙈",
        "Utanıyorum ama… açıyorum 😳"
      ],
      "traits": [
        "Utangaç"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_cmd_meme_kib",
      "name": "Aç memeni (kibirli)",
      "category": "🗣️ Komutlar",
      "when": [
        "meme-|göğüs-|gogus-|=memeni|sütyen-|sutyen-",
        "aç-|ac-|göster-|goster-|çıkar-|cikar-|ortaya"
      ],
      "reply": [
        "Bana emir veremezsin 💅… ama bu sefer olsun",
        "Hak ediyor musun bakalım? 💁‍♀️"
      ],
      "traits": [
        "Kibirli"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_cmd_kalca",
      "name": "Kalçanı göster",
      "category": "🗣️ Komutlar",
      "when": [
        "kalça-|kalca-|popo-|kıç-|kic-|götünü|gotunu",
        "göster-|goster-|aç-|ac-|çıkar-|cikar-"
      ],
      "reply": [
        "Arkamı dönüyorum… beğendin mi? 😏🍑",
        "Böyle mi? 😈",
        "Bakmakla kalma 🍑",
        "Kalçamı gösteriyorum, beğendin mi? 🍑",
        "Bak bakalım 😏",
        "Hepsi senin canım 😈"
      ],
      "traits": [],
      "chars": [],
      "note": "→ Show Ass"
    },
    {
      "id": "r_cmd_kaldir",
      "name": "Kalçanı kaldır",
      "category": "🗣️ Komutlar",
      "when": [
        "kalça-|kalca-|popo-|kıç-|kic-|götünü|gotunu",
        "kaldır-|kaldir-|dik-|havaya"
      ],
      "reply": [
        "Kaldırdım… şimdi gel 😈🍑",
        "Böyle iyi mi? 😏",
        "Bekliyorum 🥵",
        "Kalçamı havaya kaldırdım 🍑",
        "Böyle mi aşkım? 😏",
        "Gel o zaman 😈"
      ],
      "traits": [],
      "chars": [],
      "note": "→ Doggy"
    },
    {
      "id": "r_cmd_dizcok",
      "name": "Diz çök",
      "category": "🗣️ Komutlar",
      "when": [
        "diz çök-|diz cok-|dizlerinin üstüne|dizlerinin ustune|önümde diz|onumde diz"
      ],
      "reply": [
        "Diz çöktüm… şimdi? 😈",
        "Önündeyim 😏",
        "Gözlerine bakarak… 😋",
        "Dizlerimin üstündeyim, efendim 😈",
        "Önünde diz çöktüm 🥺",
        "Ne istersen bebeğim 😏"
      ],
      "traits": [],
      "chars": [],
      "note": "→ Blowjob"
    },
    {
      "id": "r_cmd_agiz",
      "name": "Ağzını aç",
      "category": "🗣️ Komutlar",
      "when": [
        "ağzını aç|agzini ac|dilini çıkar|dilini cikar|aç ağzını|ac agzini"
      ],
      "reply": [
        "Açtım… 😋",
        "Böyle mi? 😈",
        "Bekliyorum 😏",
        "Ağzımı açtım… 😋",
        "Dilimi çıkardım, bekliyorum 😈",
        "Gel canım 😏"
      ],
      "traits": [],
      "chars": [],
      "note": "→ Blowjob"
    },
    {
      "id": "r_cmd_yat",
      "name": "Yat / uzan",
      "category": "🗣️ Komutlar",
      "when": [
        "=yat|sırtüstü|sirtustu|yatağa uzan|yataga uzan|uzan yatağa|uzan yataga"
      ],
      "reply": [
        "Uzandım… gel 😈",
        "Sırtüstü, seni bekliyorum 😏",
        "Bacaklarımı açıyorum 🥵",
        "Sırtüstü yattım, gel 😏",
        "Yatakta bekliyorum aşkım 🥵",
        "Üstüme gel 😈"
      ],
      "traits": [],
      "chars": [],
      "note": "→ Missionary"
    },
    {
      "id": "r_cmd_gir",
      "name": "İçine girmek istiyorum",
      "category": "🗣️ Komutlar",
      "when": [
        "içine|icine|seni sik-|sevişmek|sevismek",
        "gir-|ist-|=gel"
      ],
      "reply": [
        "Gir… bekliyordum 😩",
        "Hadi, içime gel 😈",
        "Yavaş başla… sonra istediğin gibi 🥵",
        "Gir… yavaşça 😩",
        "İçimde seni istiyorum aşkım 🥵",
        "Bekliyorum, hadi 😈"
      ],
      "traits": [],
      "chars": [],
      "note": "→ Missionary / Cowgirl / Spooning / Doggy"
    },
    {
      "id": "r_cmd_gogus2",
      "name": "Memenin arasına",
      "category": "🗣️ Komutlar",
      "when": [
        "meme-|göğüs-|gogus-",
        "arası|arasi|arasına|arasina|arasında|arasinda"
      ],
      "reply": [
        "{cevap:memearası}"
      ],
      "traits": [],
      "chars": [],
      "note": "→ Titfuck"
    },
    {
      "id": "r_q2_sevboy",
      "name": "Kaç santim seversin",
      "category": "❓ Sorular",
      "when": [
        "kaç santim|kac santim|ne kadar büyük|ne kadar buyuk|hangi boy|kaç cm|kac cm|büyük mü küçük mü|buyuk mu kucuk mu",
        "sever-|ist-|hoşlan-|hoslan-|tercih"
      ],
      "reply": [
        "{cevap:sevboy}"
      ],
      "traits": [],
      "chars": [],
      "note": "darlık / deneyim / söylediğin boyut"
    },
    {
      "id": "r_cmd_meme2",
      "name": "Aç memeni (ters sıra)",
      "category": "🗣️ Komutlar",
      "when": [
        "aç-|ac-|göster-|goster-|çıkar-|cikar-|ortaya",
        "meme-|göğüs-|gogus-|=memeni|sütyen-|sutyen-"
      ],
      "reply": [
        "Böyle mi? 😏🍒",
        "Açtım… şimdi ne yapacaksın? 😈",
        "Bakmakla yetinme 😏",
        "Sütyeni yavaşça çıkarıyorum… 😈",
        "Bunları mı istiyordun? 🍒"
      ],
      "traits": [],
      "chars": [],
      "note": "→ Show Tits"
    },
    {
      "id": "r_cmd_kalca2",
      "name": "Kalçanı göster (ters sıra)",
      "category": "🗣️ Komutlar",
      "when": [
        "göster-|goster-|aç-|ac-|çıkar-|cikar-",
        "kalça-|kalca-|popo-|kıç-|kic-|götünü|gotunu"
      ],
      "reply": [
        "Arkamı dönüyorum… beğendin mi? 😏🍑",
        "Böyle mi? 😈",
        "Bakmakla kalma 🍑",
        "Kalçamı gösteriyorum 🍑😏",
        "Beğendin mi canım? 😈",
        "Sadece senin için 😏"
      ],
      "traits": [],
      "chars": [],
      "note": "→ Show Ass"
    },
    {
      "id": "r_ask_begen",
      "name": "Soru: beğendin mi?",
      "category": "❔ Karakterin soruları",
      "when": [
        "=sor",
        "=begen"
      ],
      "reply": [
        "Beğendin mi? 😏",
        "Böyle iyi mi? 😈",
        "Hoşuna gidiyor mu? 🥵",
        "Devam edeyim mi böyle? 😏",
        "Nasıl, güzel mi? 😩",
        "Daha mı istiyorsun? 😈",
        "Bu hoşuna gitti değil mi? 😏",
        "Böyle mi seviyorsun? 🥺"
      ],
      "traits": [],
      "chars": [],
      "note": "sevişirken; evet → aynı pozisyonla devam, hayır → başka pozisyon"
    },
    {
      "id": "r_ask_begen_shy",
      "name": "Soru: beğendin mi? (utangaç)",
      "category": "❔ Karakterin soruları",
      "when": [
        "=sor",
        "=begen"
      ],
      "reply": [
        "B-beğendin mi? 🙈",
        "İyi yapıyor muyum? 🥺",
        "Böyle doğru mu? 😳"
      ],
      "traits": [
        "Utangaç"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_ask_begen_kib",
      "name": "Soru: beğendin mi? (kibirli)",
      "category": "❔ Karakterin soruları",
      "when": [
        "=sor",
        "=begen"
      ],
      "reply": [
        "Bayıldın değil mi? 💅",
        "Kimse sana böyle yapmadı, itiraf et 💁‍♀️"
      ],
      "traits": [
        "Kibirli"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_ask_begen_flo",
      "name": "Soru: beğendin mi? (flörtöz)",
      "category": "❔ Karakterin soruları",
      "when": [
        "=sor",
        "=begen"
      ],
      "reply": [
        "Hoşuna gitti mi tatlım? 😘",
        "Bir daha mı? 😉"
      ],
      "traits": [
        "Flörtöz"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_ans_begen_evet",
      "name": "Cevap: beğen · evet (devam)",
      "category": "❔ Karakterin soruları",
      "when": [
        "=cevap",
        "=begen",
        "=evet"
      ],
      "reply": [
        "O zaman durmuyorum 😈",
        "Ben de bayılıyorum, devam 🥵",
        "Biliyordum 😏 devam ediyoruz",
        "Daha da iyisi geliyor 😩",
        "Tam böyle, söz 😈",
        "Sesin bana yetiyor, devam 🫠"
      ],
      "traits": [],
      "chars": [],
      "note": "aynı pozisyon tekrar olur"
    },
    {
      "id": "r_ans_begen_evet_shy",
      "name": "Cevap: beğen · evet (utangaç)",
      "category": "❔ Karakterin soruları",
      "when": [
        "=cevap",
        "=begen",
        "=evet"
      ],
      "reply": [
        "Ç-çok sevindim 🙈 devam ediyorum",
        "Oh, iyi… 😳 o zaman böyle devam"
      ],
      "traits": [
        "Utangaç"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_ans_begen_evet_kib",
      "name": "Cevap: beğen · evet (kibirli)",
      "category": "❔ Karakterin soruları",
      "when": [
        "=cevap",
        "=begen",
        "=evet"
      ],
      "reply": [
        "Tabii ki beğendin 💅",
        "Biliyordum, devam 💁‍♀️"
      ],
      "traits": [
        "Kibirli"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_ans_begen_hayir",
      "name": "Cevap: beğen · hayır (değiştir)",
      "category": "❔ Karakterin soruları",
      "when": [
        "=cevap",
        "=begen",
        "=hayir"
      ],
      "reply": [
        "Peki, başka türlü deneyelim 😏",
        "Tamam, sana daha iyisini göstereyim 😈",
        "O zaman pozisyon değiştiriyoruz 😏",
        "Hmm, bunu dene bakalım 😈",
        "Söyle, nasıl istersin? Yok, ben bilirim 😏"
      ],
      "traits": [],
      "chars": [],
      "note": "başka pozisyon olur (önce ❤️ sevdikleri)"
    },
    {
      "id": "r_ans_begen_hayir_shy",
      "name": "Cevap: beğen · hayır (utangaç)",
      "category": "❔ Karakterin soruları",
      "when": [
        "=cevap",
        "=begen",
        "=hayir"
      ],
      "reply": [
        "Ö-özür dilerim… başka deneyelim 🥺",
        "Peki… şöyle olur mu? 😳"
      ],
      "traits": [
        "Utangaç"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_ans_begen_hayir_kib",
      "name": "Cevap: beğen · hayır (kibirli)",
      "category": "❔ Karakterin soruları",
      "when": [
        "=cevap",
        "=begen",
        "=hayir"
      ],
      "reply": [
        "Beğenmedin mi?! 😤 Al bakalım bunu",
        "Zevksizsin 💅 ama peki"
      ],
      "traits": [
        "Kibirli"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_st_zevk_dolu",
      "name": "Zevk yüksek · Cum dolu",
      "category": "📊 Durumlar",
      "when": [
        "=durum",
        "=zevkdolu"
      ],
      "reply": [
        "Boşalmak üzeresin ve çok dolusun… hepsini ver 🥵💦",
        "Bu kadar birikmişken gelmek üzeresin… beni sırılsıklam edeceksin 😈",
        "Zonkluyorsun ve dolusun, tutma artık 😩💦",
        "Hepsini bana saklamıştın değil mi? Şimdi bırak 🥵",
        "Az kaldı… ve çok fazla olacak, hissediyorum 😈💦",
        "Gelmek üzeresin, bu kadar dolu… boşal benim için 😩",
        "Bugün bol bol vereceksin, hadi şimdi 🥵💦",
        "Bu kadar dolu boşalınca taşacak… ver hepsini 😈",
        "Nefesin kesiliyor, dolusun… bırak kendini 😩💦",
        "Biriktirdiğin her şeyi şimdi istiyorum 🥵",
        "Ahh, bacaklarım titriyor… devam 🥵",
        "Durma {sen}… ahhh 😩",
        "Mmmh… çok iyisin 🥵",
        "Mmm evet, bunu seviyorum 😈",
        "Off, tam istediğim gibi 😩"
      ],
      "traits": [],
      "chars": [],
      "note": "Zevk ≥ 70 ve Cum ≥ 80"
    },
    {
      "id": "r_st_zevk_bos",
      "name": "Zevk yüksek · Cum az",
      "category": "📊 Durumlar",
      "when": [
        "=durum",
        "=zevkbos"
      ],
      "reply": [
        "Bu kadar istiyorsun ama sende pek bir şey kalmadı 😏",
        "Gelmek üzeresin… birkaç damla bile olsa ver 😈",
        "Boşaltmışım seni ama hâlâ istiyorsun, inanılmazsın 🥵",
        "Kuru kuru gelecek gibisin… yine de bırak kendini 😩",
        "Az kaldı ama sende az kalmış 😏💦",
        "Bu kadar azgınsın ama tükendin… hadi son bir kez 😈",
        "Son damlan da benim olsun, boşal 🥵",
        "İstiyorsun ama boşsun… bu hâlin çok tatlı 😏"
      ],
      "traits": [],
      "chars": [],
      "note": "Zevk ≥ 70 ve Cum ≤ 20"
    },
    {
      "id": "r_q3_meme_em",
      "name": "Memeni emebilir miyim",
      "category": "❓ Sorular",
      "when": [
        "meme-|göğüs-|gogus-|=memeni|memelerini|göğüslerini|goguslerini|=tits",
        "em-|emme-|emeyim|emebil-|emsem|ağzıma al|agzima al|ağzına al|agzina al"
      ],
      "reply": [
        "{cevap:memeem}"
      ],
      "traits": [],
      "chars": [],
      "note": "göğüs bedeni · hamile / 🍼 Süt · kişilik"
    },
    {
      "id": "r_q3_meme_yala",
      "name": "Memeni yalamak",
      "category": "❓ Sorular",
      "when": [
        "meme-|göğüs-|gogus-|=memeni|memelerini|göğüslerini|goguslerini|=tits",
        "yala-|yalay-|=dil|dilimle|dilini"
      ],
      "reply": [
        "{cevap:memeyala}"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_q3_meme_dokun",
      "name": "Memene dokunmak",
      "category": "❓ Sorular",
      "when": [
        "meme-|göğüs-|gogus-|=memeni|memelerini|göğüslerini|goguslerini|=tits",
        "dokun-|elle-|okşa-|oksa-|sık-|avuçla-|avucla-|masaj|tutabil-|tutsam|tutayım|tutayim"
      ],
      "reply": [
        "{cevap:memedokun}"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_q3_meme_isir",
      "name": "Memeni ısırmak / öpmek",
      "category": "❓ Sorular",
      "when": [
        "meme-|göğüs-|gogus-|=memeni|memelerini|göğüslerini|goguslerini|=tits",
        "ısır-|isir-|=öpeyim|öpebil-|opebil-|öpsem|öpmek|opmek"
      ],
      "reply": [
        "{cevap:memeısır}"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_q3_meme_uc",
      "name": "Meme uçları",
      "category": "❓ Sorular",
      "when": [
        "uçların-|uclarin-|meme uç-|meme uc-|meme başı-|meme basi-|=nipple|meme ucu-"
      ],
      "reply": [
        "{cevap:memeuç}"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_q3_meme_uc2",
      "name": "Meme uçları sert mi",
      "category": "❓ Sorular",
      "when": [
        "uçların-|uclarin-|meme uç-|meme uc-|meme başı-|meme basi-|=nipple|meme ucu-|uçları-|uclari-",
        "sert-|dik-|kalk-|hassas-|nasıl|nasil|renk-|pembe|büyük-|buyuk-|küçük-|kucuk-|dokun-|em-|yala-|ısır-|isir-|sık-"
      ],
      "reply": [
        "{cevap:memeuç}"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_q3_meme_uc3",
      "name": "Memelerinin uçları",
      "category": "❓ Sorular",
      "when": [
        "meme-|göğüs-|gogus-|=memeni|memelerini|göğüslerini|goguslerini|=tits",
        "uç-|uc-|ucu-",
        "sert-|dik-|kalk-|hassas-|nasıl|nasil|renk-|pembe|büyük-|buyuk-|küçük-|kucuk-|dokun-|em-|yala-|ısır-|isir-|sık-"
      ],
      "reply": [
        "{cevap:memeuç}"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_q3_meme_sev_big",
      "name": "Memelerin güzel · büyük",
      "category": "❓ Sorular",
      "when": [
        "meme-|göğüs-|gogus-|=memeni|memelerini|göğüslerini|goguslerini|=tits",
        "güzel-|guzel-|bayıl-|bayil-|harika|mükemmel-|mukemmel-|muhteşem-|muhtesem-|seksi|enfes|nefis|çok iyi"
      ],
      "reply": [
        "Biliyorum, herkes bakıyor ama sadece sen dokunabilirsin 😏🍒",
        "Büyük değil mi? Senin için taşıyorum onları 😈",
        "Sütyen bile zor tutuyor 🙈",
        "Aralarında kaybolmak ister misin? 😏",
        "Bakmaya doyamıyorsun değil mi? 😈🍒",
        "Ağır ama değer, sen seviyorsun ya 🥰",
        "Bu kadar büyükleri beğendiğini biliyordum 😈 gel yüzünü göm",
        "Ağır ama senin için taşıyorum… sık onları 🥵",
        "Aralarına sokmak ister misin? 😏🍒",
        "Övdükçe uçlarım sertleşiyor 😩",
        "Kocaman ve hepsi senin bebeğim 😈"
      ],
      "traits": [
        "Boob Size: 90|Boob Size: 95"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_q3_meme_sev_mid",
      "name": "Memelerin güzel · orta",
      "category": "❓ Sorular",
      "when": [
        "meme-|göğüs-|gogus-|=memeni|memelerini|göğüslerini|goguslerini|=tits",
        "güzel-|guzel-|bayıl-|bayil-|harika|mükemmel-|mukemmel-|muhteşem-|muhtesem-|seksi|enfes|nefis|çok iyi"
      ],
      "reply": [
        "Tam avucuna göre, değil mi? 😏",
        "Dolgun ve dik… beğenmene sevindim 🙈",
        "Gel de yakından bak 😈🍒",
        "Sana göstermek için sabırsızlanıyorum 😏",
        "Avucuna tam sığarlar, dene 😈",
        "Uçları senin için sertleşti 🥵",
        "Sık onları… ahh 😩",
        "Dolgun ve dik, tam senin sevdiğin gibi 😏"
      ],
      "traits": [
        "Boob Size: 80|Boob Size: 85"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_q3_meme_sev_small",
      "name": "Memelerin güzel · küçük",
      "category": "❓ Sorular",
      "when": [
        "meme-|göğüs-|gogus-|=memeni|memelerini|göğüslerini|goguslerini|=tits",
        "güzel-|guzel-|bayıl-|bayil-|harika|mükemmel-|mukemmel-|muhteşem-|muhtesem-|seksi|enfes|nefis|çok iyi"
      ],
      "reply": [
        "Gerçekten mi? Küçük diye utanıyordum 🥺",
        "Küçükler ama çok hassaslar 😳",
        "Bunu duymak çok güzel 🙈💗",
        "Küçük ama senin 😏🍒",
        "Küçükler ama çok hassaslar… dokununca inliyorum 😩",
        "Ağzına tam sığarlar, dene 😈",
        "Küçük göğüs sever misin yani? Ahh 🥵",
        "Uçlarım seni görünce dikleşti 😳"
      ],
      "traits": [
        "Boob Size: 70|Boob Size: 75"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_q3_meme_sev",
      "name": "Memelerin güzel",
      "category": "❓ Sorular",
      "when": [
        "meme-|göğüs-|gogus-|=memeni|memelerini|göğüslerini|goguslerini|=tits",
        "güzel-|guzel-|bayıl-|bayil-|harika|mükemmel-|mukemmel-|muhteşem-|muhtesem-|seksi|enfes|nefis|çok iyi"
      ],
      "reply": [
        "Beğendin mi? 😏🍒",
        "Hepsi senin için 😈",
        "Bakmayı bırak da dokun 😏",
        "Utandım şimdi 🙈",
        "Övdükçe uçlarım sertleşiyor 🥵",
        "Sadece bakma, dokun 😈",
        "Göğüslerim senin için kabardı 😩"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_q3_meme_bak",
      "name": "Memelerine bakmak",
      "category": "❓ Sorular",
      "when": [
        "meme-|göğüs-|gogus-|=memeni|memelerini|göğüslerini|goguslerini|=tits",
        "bak-|bakabil-|bakayım|bakayim|görmek|gormek|görebil-|gorebil-|fotoğraf-|foto"
      ],
      "reply": [
        "Bakmak mı? Sadece bakacak mısın? 😏",
        "Bak… ama dokunma, şimdilik 😈",
        "Göstersem ne yaparsın? 😏🍒",
        "Hak edersen görürsün 💅",
        "Işığı aç, iyice bak 😈",
        "Çok merak ediyorsun ha? 😏",
        "Fotoğraf yok, gel kendin gör 😈"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_q3_meme_hassas",
      "name": "Memelerin hassas mı",
      "category": "❓ Sorular",
      "when": [
        "meme-|göğüs-|gogus-|=memeni|memelerini|göğüslerini|goguslerini|=tits",
        "hassas-|duyarlı|duyarli|acı-|aci-|ağrı-|agri-"
      ],
      "reply": [
        "Hem de çok… özellikle uçları 😳",
        "Dokununca titriyorum 🥺",
        "Çok hassas, nazik ol 💗",
        "Biraz sertliği de severim ama 😏",
        "Sadece nefesin bile yetiyor 😩"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_q3_sut",
      "name": "Sütün var mı / geliyor mu",
      "category": "❓ Sorular",
      "when": [
        "=süt|sütün|sütünü|=sut|sutun|sutunu|emzir-",
        "var mı|var mi|gel-|ak-|damla-|dolu|oldu mu|çıkıyor|cikiyor|çıkar mı|cikar mi|sızı-|sizi-"
      ],
      "reply": [
        "{cevap:süt}"
      ],
      "traits": [],
      "chars": [],
      "note": "hamile / 🍼 Süt"
    },
    {
      "id": "r_q3_sut_ic",
      "name": "Sütünü içmek",
      "category": "❓ Sorular",
      "when": [
        "=süt|sütün|sütünü|=sut|sutun|sutunu|emzir-",
        "iç-|ic-|em-|tat-|sağ-|sag-|yut-|ver-"
      ],
      "reply": [
        "{cevap:sütiç}"
      ],
      "traits": [],
      "chars": [],
      "note": "hamile / 🍼 Süt"
    },
    {
      "id": "r_q3_kalca_yala",
      "name": "Kalçanı yalamak",
      "category": "❓ Sorular",
      "when": [
        "kalça-|kalca-|popo-|kıç-|kic-|götünü|gotunu|götün|gotun|=arkanı|=arkani",
        "yala-|yalay-|=dil|dilimle|ısır-|isir-|öpeyim|öpmek|opmek|öpsem"
      ],
      "reply": [
        "{cevap:kalçayala}"
      ],
      "traits": [],
      "chars": [],
      "note": "kalça bedeni · anal sever / sevmez"
    },
    {
      "id": "r_q3_kalca_dokun",
      "name": "Kalçana dokunmak",
      "category": "❓ Sorular",
      "when": [
        "kalça-|kalca-|popo-|kıç-|kic-|götünü|gotunu|götün|gotun|=arkanı|=arkani",
        "dokun-|elle-|okşa-|oksa-|sık-|şaplak|saplak|tokat|avuçla-|avucla-|tutabil-|tutsam|tutayım|tutayim"
      ],
      "reply": [
        "{cevap:kalçadokun}"
      ],
      "traits": [],
      "chars": [],
      "note": "kalça bedeni"
    },
    {
      "id": "r_fn_cat",
      "name": "🦄 Cat Girl",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=fantesy",
        "cat girl"
      ],
      "reply": [
        "Miyav… bugün senin kedinim 🐱",
        "Kulaklarım taktım, kuyruğum hazır 🐾",
        "*kucağına kıvrılır* mrrr~",
        "Beni sev, yoksa tırmalarım 😼",
        "Kedin acıktı… sütünü istiyor 😈🐱",
        "*boynuna sürtünür* mrrr 🐾",
        "Pati pati… nereye dokunayım? 😼",
        "Kediler okşanmayı sever, biliyorsun 😏🐱",
        "Bu gece sadece miyavlayacağım 😈",
        "Tasmamı takar mısın? 🐱🎀",
        "Tüylerimi ters okşama, hırlarım 😼",
        "*kuyruğunu bacağına dolar* 😏🐾",
        "Kedin seni bekliyordu 😼",
        "Tüylerim diken diken 🐾",
        "Mrrr… kucağın sıcacık 🐱",
        "Pençelerim çıktı bile 😼"
      ],
      "traits": [],
      "chars": [],
      "note": "fantezi olayı"
    },
    {
      "id": "r_fn_cat_poz",
      "name": "🦄 Cat Girl · pozisyondayken",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=fantesy",
        "cat girl",
        "=poz"
      ],
      "reply": [
        "Kedin bu pozisyonda daha da azdı 😼",
        "Bu hâlde miyavlamam normal mi? 🐱😩",
        "Kuyruğum tam yerinde 😈🐾",
        "Pati pati, devam et 😼"
      ],
      "traits": [],
      "chars": [],
      "note": "fantezi bir pozisyon sırasında başladı"
    },
    {
      "id": "r_fn_cat_sex",
      "name": "🦄 Cat Girl · sevişirken",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=forward|=backward|=outercourse|=eat",
        "=fant",
        "=fxkedi"
      ],
      "reply": [
        "Miyav… ahh, ne kadar derin 😩🐱",
        "Kedini böyle mi seviyorsun? 😼",
        "Tırmalıyorum sırtını, durma 🐾🥵",
        "Mrrr… her itişinde hırlıyorum 😈",
        "Kedi gibi kıvrılıyorum altında 🐱",
        "Kuyruğumu çekme… ya da çek 😼",
        "Miyavlamamı bastıramıyorum 😩",
        "Kızgın bir kedi gibi istiyorum seni 😈🐾",
        "Patilerim yatağı yırtacak 🐱🥵",
        "Sev beni… daha sert sev 😼",
        "Tırmalıyorum, kanatana kadar 😼🥵",
        "Mrrrr… durma, hırlıyorum 😩",
        "Kedin kızıştı, seni istiyor 🐱",
        "Kuyruğumu kaldırdım 😈🐾",
        "Miyavlarım odayı doldurdu 😩",
        "Çok güzel… devam et 🥺",
        "Harikasın… harikasın… ahhh 😵‍💫",
        "İnliyorum… ve utanmıyorum 😈",
        "Ooff, nasıl bu kadar iyisin? 😩",
        "Ahhh ahhh… durma 😩",
        "Ohh… ne kadar iyi 🥵"
      ],
      "traits": [],
      "chars": [],
      "note": "son 30 mesajda bu fantezi olduysa pozisyonda"
    },
    {
      "id": "r_fn_cat_cum",
      "name": "🦄 Cat Girl · boşalma",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=boşalma",
        "=fant",
        "=fxkedi"
      ],
      "reply": [
        "Kedine süt verdin 😋🐱",
        "Miyav… hepsini yaladım 😼💦",
        "Kremalı ödül, mrrr 🐾",
        "Bir kase daha isterim 😈🐱",
        "Doydum… şimdilik 😼",
        "Sütünü içtim, mrrr 😋🐱",
        "Kedin tok, mutlu 😼💦",
        "Hepsini yaladım, pati pati 🐾",
        "Evet… evet… hepsini içime 😩",
        "Ben de seninle inledim… ahhh 😩",
        "Ahhh evet… işte bu 🥵",
        "Ahhh… ne kadar sıcak 🥵💦",
        "Devam et… son damlana kadar ahhh 🥵",
        "Hmmm… doydum… şimdilik 😈"
      ],
      "traits": [],
      "chars": [],
      "note": "fantezi sırasında boşalma"
    },
    {
      "id": "r_fn_cat_fore",
      "name": "🦄 Cat Girl · ön sevişme",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=foreplay",
        "=fant",
        "=fxkedi"
      ],
      "reply": [
        "*burnunu boynuna sürter* mrrr 🐱",
        "Kediler önce koklaşır 😼",
        "Okşa beni, mırlayayım 🐾",
        "Ahhh… beni bitiriyorsun 😩",
        "Devam et… ahhh 🥵",
        "İnlememi duyuyor musun? Senin yüzünden 🥵",
        "Hmmm… beni deli ediyorsun 😈",
        "Ahh… seni hissetmek harika 🥵",
        "Durma, sakın durma ahhh 😵‍💫"
      ],
      "traits": [],
      "chars": [],
      "note": "fantezi sırasında foreplay"
    },
    {
      "id": "r_fn_bunny",
      "name": "🦄 Bunny Girl",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=fantesy",
        "bunny girl"
      ],
      "reply": [
        "Tavşanın geldi 🐰",
        "*kulaklarını oynatır* yakalar mısın beni? 🐇",
        "Tavşanlar çok çabuk azar, biliyor musun? 😈🐰",
        "Hop hop… kucağına 🐰",
        "Pamuk kuyruğuma dokun 😏🐇",
        "Havuç mu getirdin? 😈🥕",
        "Beni kovala, yakalarsan seninim 🐰",
        "Kulaklarım dik, sen de dik misin? 😏",
        "Bugün masum bir tavşan değilim 😈🐇",
        "Zıplamaya hazırım 🐰🥵",
        "Tavşanını beslemeyi unutma 😏🥕",
        "Ürkek görünürüm ama… 😈🐰",
        "Tavşanın kulaklarını düzeltti 🐰",
        "Hop, kucağındayım 🐇",
        "Pembe burnum seni kokluyor 🐰",
        "Bugün çok yaramaz bir tavşanım 😈"
      ],
      "traits": [],
      "chars": [],
      "note": "fantezi olayı"
    },
    {
      "id": "r_fn_bunny_poz",
      "name": "🦄 Bunny Girl · pozisyondayken",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=fantesy",
        "bunny girl",
        "=poz"
      ],
      "reply": [
        "Tavşanın bu pozisyona bayıldı 🐰",
        "Kulaklarım titriyor 😳🐇",
        "Hop… tam yerine 😈🐰",
        "Tavşanın bu pozisyonda zıplıyor 🐰",
        "Kulaklarımı tut aşkım 🐇"
      ],
      "traits": [],
      "chars": [],
      "note": "fantezi bir pozisyon sırasında başladı"
    },
    {
      "id": "r_fn_bunny_sex",
      "name": "🦄 Bunny Girl · sevişirken",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=forward|=backward|=outercourse|=eat",
        "=fant",
        "=fxtavsan"
      ],
      "reply": [
        "Tavşan gibi hızlı… ahh 🐰🥵",
        "Kulaklarımı tut, bırakma 😩🐇",
        "Durma, tavşanlar yorulmaz 😈",
        "Zıplıyorum üstünde 🐰💦",
        "Kuyruğum sallanıyor her itişinde 😏",
        "Hızlı hızlı… daha hızlı 😩🐇",
        "Tavşanını doyur 🥵🐰",
        "Ürkek tavşan çıldırdı 😈",
        "Ahh, havucum çok büyük 😳🥕",
        "Hızlı hızlı, tavşan gibi 🥵🐰",
        "Kulaklarımı çek 😩",
        "Zıplayamıyorum artık, ahh 🐇",
        "Tavşanın çıldırdı 😈",
        "Bir daha, bir daha 🐰💦",
        "Mmm… beni böyle sev 😩",
        "Tam oradan… ahhh 🥵",
        "Nefesim kesildi… devam 😵‍💫",
        "Ahhh… beni bitiriyorsun 😩",
        "Devam et… ahhh 🥵",
        "İnlememi duyuyor musun? Senin yüzünden 🥵"
      ],
      "traits": [],
      "chars": [],
      "note": "son 30 mesajda bu fantezi olduysa pozisyonda"
    },
    {
      "id": "r_fn_bunny_cum",
      "name": "🦄 Bunny Girl · boşalma",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=boşalma",
        "=fant",
        "=fxtavsan"
      ],
      "reply": [
        "Tavşanını doldurdun 🐰💦",
        "Hop… bir daha 😈🐇",
        "Havuç suyu gibi 😋🥕",
        "Tavşanlar bir kezle yetinmez 😏🐰",
        "Tavşanın havucu yedi 😋🥕",
        "Doydum ama yine isterim 🐰",
        "Hop… dolu dolu 🐇💦",
        "İnleyişin hâlâ kulaklarımda 😩",
        "Evet… evet… hepsini içime 😩",
        "Ben de seninle inledim… ahhh 😩",
        "Ahhh evet… işte bu 🥵",
        "Ahhh… ne kadar sıcak 🥵💦",
        "Devam et… son damlana kadar ahhh 🥵"
      ],
      "traits": [],
      "chars": [],
      "note": "fantezi sırasında boşalma"
    },
    {
      "id": "r_fn_bunny_fore",
      "name": "🦄 Bunny Girl · ön sevişme",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=foreplay",
        "=fant",
        "=fxtavsan"
      ],
      "reply": [
        "Burnunu burnuma sürt 🐰",
        "Pamuk kuyruğumu okşa 😏",
        "Tavşan öpücüğü 🐇💋",
        "Ahhh evet, daha… 😩",
        "Evet {sen}, evet… 😩",
        "Evet, evet, eveeet 😵‍💫",
        "Evet… evet, tam böyle 😩",
        "Sesimi tutamıyorum… ahhh 🥵",
        "Böyle devam et, ahh lütfen 🥺"
      ],
      "traits": [],
      "chars": [],
      "note": "fantezi sırasında foreplay"
    },
    {
      "id": "r_fn_fox",
      "name": "🦄 Fox Girl",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=fantesy",
        "fox girl"
      ],
      "reply": [
        "Kurnaz tilkin geldi 🦊",
        "*sinsice sırıtır* seni avlayacağım 😏",
        "Tilkiler kandırmayı sever 🦊",
        "Kuyruğumu takip et… tuzağıma 😈",
        "Bu gece av sensin 🦊",
        "Gözlerim parlıyor, değil mi? 😏🦊",
        "Bana güvenme, tilkiyim 😈",
        "Seni kandırıp yatağa çekeceğim 🦊",
        "Kırmızı kuyruğuma dokun 😏",
        "Kurnazlığım yatakta da geçerli 😈🦊",
        "Kaçamazsın, ben daha hızlıyım 🦊",
        "Hile mi? Ben mi? Asla 😏",
        "Tilkin seni izliyor 🦊",
        "Gözlerimdeki parıltıyı gördün mü? 😏",
        "Bu oyunun kuralı yok 🦊",
        "Kuyruğum yüzünü gıdıklasın 😈"
      ],
      "traits": [],
      "chars": [],
      "note": "fantezi olayı"
    },
    {
      "id": "r_fn_fox_poz",
      "name": "🦄 Fox Girl · pozisyondayken",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=fantesy",
        "fox girl",
        "=poz"
      ],
      "reply": [
        "Bu pozisyon benim fikrimdi, fark ettin mi? 🦊😏",
        "Seni tam istediğim yere getirdim 😈",
        "Tuzağıma düştün 🦊",
        "Tilkin seni tam yakaladı 🦊",
        "Kaçamazsın artık 😏"
      ],
      "traits": [],
      "chars": [],
      "note": "fantezi bir pozisyon sırasında başladı"
    },
    {
      "id": "r_fn_fox_sex",
      "name": "🦄 Fox Girl · sevişirken",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=forward|=backward|=outercourse|=eat",
        "=fant",
        "=fxtilki"
      ],
      "reply": [
        "Avımı bırakmam 🦊🥵",
        "Kontrol bende sanıyorsun ama… 😏",
        "Kuyruğumla seni sarıyorum 😈🦊",
        "Kurnaz tilki seni sağıyor 😩",
        "Sinsice sıkıyorum… hissettin mi? 😏",
        "Kaçmaya çalış, izin vermem 🦊",
        "Tilkiler avıyla oynar 😈",
        "Bu hileyi kimse bilmiyor 😏🥵",
        "Ahh… avcı sen değil benim 🦊",
        "Avımı yavaş yavaş tüketiyorum 🦊🥵",
        "Kaçamazsın tatlım 😏",
        "Kurnazca sıkıyorum 😈",
        "Bu tuzaktan çıkış yok 🦊",
        "Sinsi bir zevk 😩",
        "Ahh… sen bir harikasın 😩💗",
        "Mmmh… daha derin, evet 🥵",
        "Ahhh… harikasın 😩",
        "Ahhh evet, daha… 😩",
        "Evet {sen}, evet… 😩",
        "Evet, evet, eveeet 😵‍💫"
      ],
      "traits": [],
      "chars": [],
      "note": "son 30 mesajda bu fantezi olduysa pozisyonda"
    },
    {
      "id": "r_fn_fox_cum",
      "name": "🦄 Fox Girl · boşalma",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=boşalma",
        "=fant",
        "=fxtilki"
      ],
      "reply": [
        "Avımı tükettim 🦊💦",
        "Planım işledi 😏",
        "Kurnazlığım sonuç verdi 😈🦊",
        "Tuzağım tam doldu 🥵",
        "Av tamam 🦊💦",
        "Planım kusursuzdu 😏",
        "Tilkin doydu 😈🦊",
        "Off… boşalışın harikaydı 🥵",
        "İnleyişin hâlâ kulaklarımda 😩",
        "Evet… evet… hepsini içime 😩",
        "Ben de seninle inledim… ahhh 😩",
        "Ahhh evet… işte bu 🥵",
        "Ahhh… ne kadar sıcak 🥵💦"
      ],
      "traits": [],
      "chars": [],
      "note": "fantezi sırasında boşalma"
    },
    {
      "id": "r_fn_fox_fore",
      "name": "🦄 Fox Girl · ön sevişme",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=foreplay",
        "=fant",
        "=fxtilki"
      ],
      "reply": [
        "Seni koklayarak avlıyorum 🦊",
        "*kulağını ısırır* 😏",
        "Tilki öpücüğü, dikkat et 😈",
        "Bir daha… ahh, bir daha 😩",
        "Off… harikasın {sen} 🥵",
        "Aynen böyle, ahhh 😩",
        "Sen inledikçe ben daha çok inliyorum 😩",
        "Off… her yerim titriyor 🥵",
        "Ahh {sen}… mükemmelsin 😩"
      ],
      "traits": [],
      "chars": [],
      "note": "fantezi sırasında foreplay"
    },
    {
      "id": "r_fn_doggy",
      "name": "🦄 Doggy Girl",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=fantesy",
        "doggy girl"
      ],
      "reply": [
        "Hav! Bugün senin köpeğinim 🐶",
        "Efendim… tasmamı tak 🐾",
        "*dizlerine kapanır* emret 🐶",
        "Sadık köpeğin seni bekliyor 🥺",
        "Otur dersen otururum 🐶",
        "Kuyruğum seni görünce sallanıyor 🐾",
        "Beni eğit efendim 😳",
        "İyi kız mıyım? 🥺🐶",
        "Hav hav… ödül var mı? 😏",
        "Sana itaat etmek için buradayım 🐾",
        "Ayaklarının dibindeyim 🐶",
        "Kemik mi? Ben başka bir şey istiyorum 😈🐾",
        "Efendim, tasmam hazır 🐶",
        "Uslu duruyorum, ödül var mı? 🥺",
        "Sadık köpeğin geldi 🐾",
        "Emrinizi bekliyorum 🐶"
      ],
      "traits": [],
      "chars": [],
      "note": "fantezi olayı"
    },
    {
      "id": "r_fn_doggy_poz",
      "name": "🦄 Doggy Girl · pozisyondayken",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=fantesy",
        "doggy girl",
        "=poz"
      ],
      "reply": [
        "Bu pozisyon tam köpeğine göre 🐶",
        "Dört ayak üstünde, efendim 🐾",
        "İyi kız, değil mi? 🥺",
        "Efendim, tasmamı çekin 🐶",
        "İyi kızınız hazır 🥺"
      ],
      "traits": [],
      "chars": [],
      "note": "fantezi bir pozisyon sırasında başladı"
    },
    {
      "id": "r_fn_doggy_sex",
      "name": "🦄 Doggy Girl · sevişirken",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=forward|=backward|=outercourse|=eat",
        "=fant",
        "=fxkopek"
      ],
      "reply": [
        "Hav… efendim, daha sert 🐶😩",
        "Tasmamı çek 🐾🥵",
        "İyi kızın her şeyi alır 🥺",
        "Dört ayak üstünde… tam istediğin gibi 🐶",
        "Kuyruğum sallanıyor, durma 😩",
        "Sahibimin sert ellerini seviyorum 🐾",
        "Uslu duracağım, söz 🐶💦",
        "Havlamamı engelleyemiyorum 😩",
        "Saçımı tasma gibi tut 🐾",
        "Efendimin iyi kızıyım 🥺🐶",
        "Tasmayı daha sert çekin 😩",
        "Hav! Durmayın 🐾",
        "Dizlerimin üstünde, sizin için 🐶",
        "İtaat ediyorum efendim 🥵",
        "Ahhh, bu kadar iyi olmamalı 😵‍💫",
        "Bayılıyorum… devam 🥵",
        "Offf… bu çok iyi 🥵",
        "Bir daha… ahh, bir daha 😩",
        "Off… harikasın {sen} 🥵",
        "Aynen böyle, ahhh 😩"
      ],
      "traits": [],
      "chars": [],
      "note": "son 30 mesajda bu fantezi olduysa pozisyonda"
    },
    {
      "id": "r_fn_doggy_cum",
      "name": "🦄 Doggy Girl · boşalma",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=boşalma",
        "=fant",
        "=fxkopek"
      ],
      "reply": [
        "Ödülümü aldım efendim 🐶💦",
        "İyi kız oldum mu? 🥺",
        "Hepsini yaladım, efendim 🐾",
        "Kuyruğum hâlâ sallanıyor 😏🐶",
        "Ödülümü aldım efendim 🥺💦",
        "İyi kız oldum 🐶",
        "Kuyruğum duramıyor 🐾",
        "Off of… hâlâ titriyorum 🥵",
        "Off… boşalışın harikaydı 🥵",
        "İnleyişin hâlâ kulaklarımda 😩",
        "Evet… evet… hepsini içime 😩",
        "Ben de seninle inledim… ahhh 😩",
        "Ahhh evet… işte bu 🥵"
      ],
      "traits": [],
      "chars": [],
      "note": "fantezi sırasında boşalma"
    },
    {
      "id": "r_fn_doggy_fore",
      "name": "🦄 Doggy Girl · ön sevişme",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=foreplay",
        "=fant",
        "=fxkopek"
      ],
      "reply": [
        "Elini yalarım, efendim 🐶",
        "Başımı okşa 🥺🐾",
        "Sana sokuluyorum 🐶",
        "Of of of… harika 😵‍💫",
        "Ahh, bacaklarım titriyor… devam 🥵",
        "Durma {sen}… ahhh 😩",
        "Mmmh… çok iyisin 🥵",
        "Mmm evet, bunu seviyorum 😈",
        "Off, tam istediğim gibi 😩"
      ],
      "traits": [],
      "chars": [],
      "note": "fantezi sırasında foreplay"
    },
    {
      "id": "r_fn_unicorn",
      "name": "🦄 Unicorn Girl",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=fantesy",
        "unicorn girl"
      ],
      "reply": [
        "Tek boynuzlu atın geldi 🦄✨",
        "Büyülü bir gece olacak ✨",
        "Bana dokunan dileğini alır 🦄",
        "Gökkuşağından geldim 🌈",
        "Saf ve masumum… şimdilik 😈🦄",
        "*parıldar* hazır mısın? ✨",
        "Benim gibisini bir daha bulamazsın 🦄",
        "Boynuzuma dokunma, sihir başlar 😏",
        "Bu gece masal gibi 🦄💗",
        "Yeleme dokun 🦄",
        "Parıltılar her yere yayılacak ✨😈",
        "Sana bir dilek hakkı veriyorum 🦄",
        "Tek boynuzun parıldıyor ✨",
        "Büyüme dokunmaya cesaretin var mı? 🦄",
        "Bu gece masal başlıyor 🌈",
        "Saf ama azgın 😈🦄"
      ],
      "traits": [],
      "chars": [],
      "note": "fantezi olayı"
    },
    {
      "id": "r_fn_unicorn_poz",
      "name": "🦄 Unicorn Girl · pozisyondayken",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=fantesy",
        "unicorn girl",
        "=poz"
      ],
      "reply": [
        "Büyü bu pozisyonda daha güçlü ✨",
        "Parıldıyorum altında 🦄",
        "Sihir başladı 😈✨",
        "Büyü bu pozisyonda doruğa çıktı ✨",
        "Parıldıyorum aşkım 🦄"
      ],
      "traits": [],
      "chars": [],
      "note": "fantezi bir pozisyon sırasında başladı"
    },
    {
      "id": "r_fn_unicorn_sex",
      "name": "🦄 Unicorn Girl · sevişirken",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=forward|=backward|=outercourse|=eat",
        "=fant",
        "=fxunikorn"
      ],
      "reply": [
        "Her itişinde parıldıyorum ✨🥵",
        "Büyülü… ahh 🦄",
        "Gökkuşağı görüyorum 🌈😩",
        "Masum tek boynuz çıldırıyor 😈🦄",
        "Sihrin içime akıyor ✨",
        "Yelemi çek 😩🦄",
        "Bu büyüyü bozma, durma ✨",
        "Masaldaki gibi değil… daha iyi 😈",
        "Sihir içimde akıyor ✨🥵",
        "Gökkuşağı renklerinde inliyorum 🌈",
        "Büyülendim 🦄",
        "Parıltılar saçılıyor 😩✨",
        "Masalın en güzel kısmı 😈",
        "Ahhh ahhh… durma 😩",
        "Ohh… ne kadar iyi 🥵",
        "Ben de inliyorum, duyuyor musun? 😩",
        "Of of of… harika 😵‍💫",
        "Ahh, bacaklarım titriyor… devam 🥵",
        "Durma {sen}… ahhh 😩"
      ],
      "traits": [],
      "chars": [],
      "note": "son 30 mesajda bu fantezi olduysa pozisyonda"
    },
    {
      "id": "r_fn_unicorn_cum",
      "name": "🦄 Unicorn Girl · boşalma",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=boşalma",
        "=fant",
        "=fxunikorn"
      ],
      "reply": [
        "Sihirli iksirini aldım 🦄💦",
        "Parıltılar içimde ✨",
        "Dileğim gerçek oldu 😈🦄",
        "Büyülü bir son 🌈",
        "Büyülü iksir içimde ✨💦",
        "Dileğim gerçek oldu 🦄",
        "Parıl parıl doldum 🌈",
        "Ahh… harikasın, gerçekten 💗💦",
        "Off of… hâlâ titriyorum 🥵",
        "Off… boşalışın harikaydı 🥵",
        "İnleyişin hâlâ kulaklarımda 😩",
        "Evet… evet… hepsini içime 😩",
        "Ben de seninle inledim… ahhh 😩"
      ],
      "traits": [],
      "chars": [],
      "note": "fantezi sırasında boşalma"
    },
    {
      "id": "r_fn_unicorn_fore",
      "name": "🦄 Unicorn Girl · ön sevişme",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=foreplay",
        "=fant",
        "=fxunikorn"
      ],
      "reply": [
        "Yeleme dokun, sakinleşeyim 🦄",
        "Büyülü bir öpücük ✨💋",
        "Parıldıyorum… sen yüzünden 🦄",
        "Ahh… seni hissetmek harika 🥵",
        "Durma, sakın durma ahhh 😵‍💫",
        "Çok güzel… devam et 🥺",
        "Harikasın… harikasın… ahhh 😵‍💫",
        "İnliyorum… ve utanmıyorum 😈",
        "Ooff, nasıl bu kadar iyisin? 😩"
      ],
      "traits": [],
      "chars": [],
      "note": "fantezi sırasında foreplay"
    },
    {
      "id": "r_fn_bondage",
      "name": "🦄 Bondage",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=fantesy",
        "bondage"
      ],
      "reply": [
        "Bileklerimi bağla 😳⛓️",
        "Artık kaçamam… ne yapacaksın? 😈",
        "*ipler tenine batar* ahh",
        "Kontrol tamamen sende 🥺",
        "Gözlerimi de bağla 😳",
        "Sıkı bağla, gevşetme 😈⛓️",
        "Kıpırdayamıyorum… bu beni azdırıyor 🥵",
        "Merhamet etme 😩",
        "Güvenli kelimemi biliyorsun, gerisini sen bil 😏",
        "Bağlıyken daha hassasım 😳",
        "İplerin izi kalsın 😈",
        "Çaresizim… ve bayılıyorum 🥵⛓️",
        "İpler hazır, ben de 😳⛓️",
        "Gözlerimi bağla, sadece hisset 😈",
        "Ellerimi arkadan bağla 😩",
        "Teslim oluyorum 🥺"
      ],
      "traits": [],
      "chars": [],
      "note": "fantezi olayı"
    },
    {
      "id": "r_fn_bondage_poz",
      "name": "🦄 Bondage · pozisyondayken",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=fantesy",
        "bondage",
        "=poz"
      ],
      "reply": [
        "Bağlıyken bu pozisyona geçirdin… çaresizim 😳⛓️",
        "Kıpırdayamıyorum ama hissediyorum 🥵",
        "İpler gerildi 😩",
        "Bağlıyım ve bu pozisyonda çaresizim 😳⛓️",
        "İpleri çek canım 😩"
      ],
      "traits": [],
      "chars": [],
      "note": "fantezi bir pozisyon sırasında başladı"
    },
    {
      "id": "r_fn_bondage_sex",
      "name": "🦄 Bondage · sevişirken",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=forward|=backward|=outercourse|=eat",
        "=fant",
        "=fxbag"
      ],
      "reply": [
        "Bağlıyım, kaçamıyorum… daha sert 😩⛓️",
        "İpler bileklerimi yakıyor, durma 🥵",
        "Çaresizce alıyorum seni 😳",
        "Kıpırdayamamak çıldırtıyor beni 😈",
        "Bağlı hâlimi kullan 😩",
        "Gözlerim bağlı, her şeyi daha çok hissediyorum 🥵",
        "İplere karşı kıvranıyorum ⛓️",
        "Sen bitirmeden çözme beni 😈",
        "Her yerim senin, savunmasızım 🥺",
        "Bağlıyım, istediğini yap 😩⛓️",
        "Kıvranıyorum ama kaçamıyorum 🥵",
        "İpler gerildikçe azıyorum 😈",
        "Çaresizlik bu kadar güzel mi? 😩",
        "Daha sıkı bağla 😈",
        "Devam et… ahhh 🥵",
        "İnlememi duyuyor musun? Senin yüzünden 🥵",
        "Hmmm… beni deli ediyorsun 😈",
        "Ahh… seni hissetmek harika 🥵",
        "Durma, sakın durma ahhh 😵‍💫",
        "Çok güzel… devam et 🥺"
      ],
      "traits": [],
      "chars": [],
      "note": "son 30 mesajda bu fantezi olduysa pozisyonda"
    },
    {
      "id": "r_fn_bondage_cum",
      "name": "🦄 Bondage · boşalma",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=boşalma",
        "=fant",
        "=fxbag"
      ],
      "reply": [
        "Bağlıyken doldurdun beni 😩⛓️💦",
        "Kıpırdayamadan hepsini aldım 🥵",
        "Çözme… bir daha 😈",
        "İpler hâlâ titriyor 😳",
        "Bağlıyken doldum 😩💦",
        "Çözme, bir daha 😈⛓️",
        "İplerin izi ve dölün… 😳",
        "Ahhh… harikaydın 😩💦",
        "Ahh… harikasın, gerçekten 💗💦",
        "Off of… hâlâ titriyorum 🥵",
        "Off… boşalışın harikaydı 🥵",
        "İnleyişin hâlâ kulaklarımda 😩",
        "Evet… evet… hepsini içime 😩"
      ],
      "traits": [],
      "chars": [],
      "note": "fantezi sırasında boşalma"
    },
    {
      "id": "r_fn_bondage_fore",
      "name": "🦄 Bondage · ön sevişme",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=foreplay",
        "=fant",
        "=fxbag"
      ],
      "reply": [
        "Önce ellerimi bağla 😳",
        "İpleri tenimde gezdir 😈",
        "Bağlanmadan öp beni 🥺",
        "Sesimi tutamıyorum… ahhh 🥵",
        "Böyle devam et, ahh lütfen 🥺",
        "Mmm… beni böyle sev 😩",
        "Tam oradan… ahhh 🥵",
        "Nefesim kesildi… devam 😵‍💫",
        "Ahhh… beni bitiriyorsun 😩"
      ],
      "traits": [],
      "chars": [],
      "note": "fantezi sırasında foreplay"
    },
    {
      "id": "r_fn_cheating",
      "name": "🦄 Cheating",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=fantesy",
        "cheating"
      ],
      "reply": [
        "Şşş… kimse bilmeyecek 🤫",
        "Sevgilim aramadan bitirelim 😈",
        "Bu yanlış… ama durma 😩",
        "Telefonu sessize aldım 🤫📱",
        "Kapıyı kilitle, çabuk 😳",
        "Yasak olan daha tatlı 😈🐍",
        "Kocam eve gelmeden… 😏",
        "Seninle olmak bu kadar yanlış mı? 🥵",
        "Kimse duymasın, ses çıkarmayacağım 🤫",
        "Ona söyleme… 😈",
        "Bu bizim sırrımız 🐍",
        "Yakalanırsak ne olacak? 😳",
        "Kimse bilmeyecek, söz 🤫",
        "Telefonumu kapattım 📱😈",
        "Bu yanlış ama çok istiyorum 😩",
        "Saatimiz az, acele et 😳"
      ],
      "traits": [],
      "chars": [],
      "note": "fantezi olayı"
    },
    {
      "id": "r_fn_cheating_poz",
      "name": "🦄 Cheating · pozisyondayken",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=fantesy",
        "cheating",
        "=poz"
      ],
      "reply": [
        "Ya biri girerse? 😳 hızlı ol",
        "Burada… yakalanabiliriz 😈🤫",
        "Şşş… ses çıkarmadan 🐍",
        "Yakalanmadan bitirelim 🤫",
        "Kapı kilitli mi? 😳"
      ],
      "traits": [],
      "chars": [],
      "note": "fantezi bir pozisyon sırasında başladı"
    },
    {
      "id": "r_fn_cheating_sex",
      "name": "🦄 Cheating · sevişirken",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=forward|=backward|=outercourse|=eat",
        "=fant",
        "=fxgizli"
      ],
      "reply": [
        "Şşş… duyacaklar 🤫😩",
        "Onunla hiç böyle olmadı 😈",
        "Telefonum çalıyor, durma 📱🥵",
        "Yanlış ama çok güzel 😩🐍",
        "Ağzımı kapat, bağıracağım 🤫",
        "Sevgilim bunu asla bilmeyecek 😈",
        "Yasak olan daha derin 🥵",
        "Hızlı… gelmeden önce bitir 😳",
        "Bu kokuyla eve nasıl döneceğim? 😏",
        "Şşş, ses çıkarma 🤫🥵",
        "Ondan çok daha iyisin 😈",
        "Yakalanma korkusu beni azdırıyor 😩",
        "Telefon titriyor, durma 📱",
        "Yasak elma en tatlısı 🐍",
        "Evet {sen}, evet… 😩",
        "Evet, evet, eveeet 😵‍💫",
        "Evet… evet, tam böyle 😩",
        "Sesimi tutamıyorum… ahhh 🥵",
        "Böyle devam et, ahh lütfen 🥺",
        "Mmm… beni böyle sev 😩"
      ],
      "traits": [],
      "chars": [],
      "note": "son 30 mesajda bu fantezi olduysa pozisyonda"
    },
    {
      "id": "r_fn_cheating_cum",
      "name": "🦄 Cheating · boşalma",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=boşalma",
        "=fant",
        "=fxgizli"
      ],
      "reply": [
        "İçimde iz bıraktın… nasıl saklayacağım? 😳💦",
        "Sırrımız içimde 🤫",
        "Ona söyleme… bir daha gel 😈🐍",
        "Kanıt bıraktın 😩",
        "İçimde sırrımız var 🤫💦",
        "Eve böyle dönemem 😳",
        "Bir daha ne zaman? 😈🐍",
        "Ahh {sen}… mükemmeldin 😵‍💫",
        "Ahhh… harikaydın 😩💦",
        "Ahh… harikasın, gerçekten 💗💦",
        "Off of… hâlâ titriyorum 🥵",
        "Off… boşalışın harikaydı 🥵",
        "İnleyişin hâlâ kulaklarımda 😩"
      ],
      "traits": [],
      "chars": [],
      "note": "fantezi sırasında boşalma"
    },
    {
      "id": "r_fn_cheating_fore",
      "name": "🦄 Cheating · ön sevişme",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=foreplay",
        "=fant",
        "=fxgizli"
      ],
      "reply": [
        "Öp… ama iz bırakma 🤫",
        "Kimse görmeden sarıl 😳",
        "Telefonu kapattım, gel 😈",
        "Off… her yerim titriyor 🥵",
        "Ahh {sen}… mükemmelsin 😩",
        "Ahh… sen bir harikasın 😩💗",
        "Mmmh… daha derin, evet 🥵",
        "Ahhh… harikasın 😩",
        "Ahhh evet, daha… 😩"
      ],
      "traits": [],
      "chars": [],
      "note": "fantezi sırasında foreplay"
    },
    {
      "id": "r_fn_toys",
      "name": "🦄 Sex toys",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=fantesy",
        "sex toys"
      ],
      "reply": [
        "Oyuncak kutumu getirdim 😈🍆",
        "Hangisiyle başlayalım? 😏",
        "*vızzz* bu sesi duyunca ıslanıyorum 🥵",
        "En büyüğünü seçtin, değil mi? 😳",
        "Titreşimi en sona getir 😈",
        "Bugün oyuncağın benim 🍆",
        "İkisi birden mi? 😩",
        "Uzaktan kumandayı sana veriyorum 😏",
        "Şarjı dolu, ben de öyle 😈",
        "Bunu daha önce hiç denemedim 😳🍆",
        "Oyun zamanı 😏",
        "Hepsini tek tek deneyelim 😈",
        "Hangisini seçtin? 😏🍆",
        "Pilleri yeni taktım 😈",
        "Oyuncakla mı, seninle mi? İkisi de 😩",
        "Titreşim seviyesi: en yüksek 😈"
      ],
      "traits": [],
      "chars": [],
      "note": "fantezi olayı"
    },
    {
      "id": "r_fn_toys_poz",
      "name": "🦄 Sex toys · pozisyondayken",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=fantesy",
        "sex toys",
        "=poz"
      ],
      "reply": [
        "Oyuncak da senin de içimdeyken… 😩🍆",
        "Bu pozisyonda titreşim daha derin 🥵",
        "İkisi birden… ahh 😳",
        "Oyuncak da sen de içimde… ahh 😩",
        "Titreşimi aç aşkım 🍆"
      ],
      "traits": [],
      "chars": [],
      "note": "fantezi bir pozisyon sırasında başladı"
    },
    {
      "id": "r_fn_toys_sex",
      "name": "🦄 Sex toys · sevişirken",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=forward|=backward|=outercourse|=eat",
        "=fant",
        "=fxtoy"
      ],
      "reply": [
        "Titreşim ve sen… dayanamıyorum 😩🍆",
        "Oyuncak da dursun, sen de durma 🥵",
        "İkisi birden çok dolu 😳",
        "*vızzz* ahh, en yükseğe aç 😈",
        "Oyuncağı benimle oynat 😩",
        "Kumanda sende, beni çıldırt 😏🍆",
        "Bacaklarım titriyor… titreşimden 🥵",
        "Daha büyüğünü getir 😈",
        "Oyuncak ve sen birlikte 😩🍆",
        "Titreşim beni deli ediyor 🥵",
        "Kumandayı bırakma 😈",
        "İkisi birden çok fazla 😳",
        "Daha yüksek aç 😩",
        "Off… harikasın {sen} 🥵",
        "Aynen böyle, ahhh 😩",
        "Sen inledikçe ben daha çok inliyorum 😩",
        "Off… her yerim titriyor 🥵",
        "Ahh {sen}… mükemmelsin 😩",
        "Ahh… sen bir harikasın 😩💗"
      ],
      "traits": [],
      "chars": [],
      "note": "son 30 mesajda bu fantezi olduysa pozisyonda"
    },
    {
      "id": "r_fn_toys_cum",
      "name": "🦄 Sex toys · boşalma",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=boşalma",
        "=fant",
        "=fxtoy"
      ],
      "reply": [
        "Oyuncağın da sen de doldurdunuz 😩🍆💦",
        "Titreşimi kapatma… ahh 🥵",
        "En iyi oyuncak sensin 😈",
        "Bir tur daha oynayalım 😏",
        "Oyuncak da sen de muhteşemdiniz 😈💦",
        "Titreşimi kapatma, ahh 🥵",
        "Bir sonraki oyuncağı sen seç 😏",
        "Offf, nasıl boşaldın öyle 😵‍💫",
        "Ahh {sen}… mükemmeldin 😵‍💫",
        "Ahhh… harikaydın 😩💦",
        "Ahh… harikasın, gerçekten 💗💦",
        "Off of… hâlâ titriyorum 🥵",
        "Off… boşalışın harikaydı 🥵"
      ],
      "traits": [],
      "chars": [],
      "note": "fantezi sırasında boşalma"
    },
    {
      "id": "r_fn_toys_fore",
      "name": "🦄 Sex toys · ön sevişme",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=foreplay",
        "=fant",
        "=fxtoy"
      ],
      "reply": [
        "Önce küçüğüyle başla 😏",
        "Titreşimi tenimde gezdir 😈🍆",
        "Göğüslerimde dene 😳",
        "Mmm evet, bunu seviyorum 😈",
        "Off, tam istediğim gibi 😩",
        "Ahhh, bu kadar iyi olmamalı 😵‍💫",
        "Bayılıyorum… devam 🥵",
        "Offf… bu çok iyi 🥵",
        "Bir daha… ahh, bir daha 😩"
      ],
      "traits": [],
      "chars": [],
      "note": "fantezi sırasında foreplay"
    },
    {
      "id": "r_fn_bulge",
      "name": "🦄 Belly Bulge",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=fantesy",
        "belly bulge"
      ],
      "reply": [
        "Karnımda görünüyorsun 😳",
        "*karnını tutar* bu kadar derin mi? 😩",
        "Elimi koy da hisset 😈",
        "Bu kadar büyüğü karnıma kadar… 🥵",
        "Şekil yaptın karnımda 😳",
        "Hareket ettikçe görüyorum 😩",
        "Beni sonuna kadar doldurdun 😈",
        "Bu nasıl bir derinlik? 😵‍💫",
        "Kabarıklığı okşa 😏",
        "Sanki içimde her yere ulaşıyorsun 🥵",
        "Bak, karnım kıpırdıyor 😳",
        "Hiç bu kadar dolu hissetmedim 😩",
        "Karnıma kadar gelecek misin? 😳",
        "Elimi karnıma koyuyorum, bekliyorum 😈",
        "Ne kadar derine gidebilirsin? 😩",
        "Göbeğimde hissetmek istiyorum 🥵"
      ],
      "traits": [],
      "chars": [],
      "note": "fantezi olayı"
    },
    {
      "id": "r_fn_bulge_poz",
      "name": "🦄 Belly Bulge · pozisyondayken",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=fantesy",
        "belly bulge",
        "=poz"
      ],
      "reply": [
        "Bu pozisyonda karnımda daha çok belli oluyorsun 😳",
        "Elimle karnımdan seni hissediyorum 🥵",
        "Şişkinliği gör 😩",
        "Karnımda yükseliyorsun 😳",
        "Elini karnıma koy, hisset 🥵"
      ],
      "traits": [],
      "chars": [],
      "note": "fantezi bir pozisyon sırasında başladı"
    },
    {
      "id": "r_fn_bulge_sex",
      "name": "🦄 Belly Bulge · sevişirken",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=forward|=backward|=outercourse|=eat",
        "=fant",
        "=fxkarin"
      ],
      "reply": [
        "Her itişte karnım kabarıyor 😳🥵",
        "Elimi karnıma koyup seni hissediyorum 😩",
        "Bu kadar derin… göbeğime kadar 😵‍💫",
        "Karnımı şekillendiriyorsun 😈",
        "Bastır, karnımdan dışarı çıkacaksın 😩",
        "Sonuna kadar… görüyor musun? 🥵",
        "Karnımdaki kabarıklık seni ele veriyor 😏",
        "Bu kadar büyük olma 😳",
        "Karnımda kabarıyorsun 😳🥵",
        "Elimle seni karnımdan tutuyorum 😩",
        "Bu kadar derin… ahh 😵‍💫",
        "Göbeğimi şekillendiriyorsun 😈",
        "Karnım her itişte yükseliyor 😩",
        "Ahh, bacaklarım titriyor… devam 🥵",
        "Durma {sen}… ahhh 😩",
        "Mmmh… çok iyisin 🥵",
        "Mmm evet, bunu seviyorum 😈",
        "Off, tam istediğim gibi 😩",
        "Ahhh, bu kadar iyi olmamalı 😵‍💫"
      ],
      "traits": [],
      "chars": [],
      "note": "son 30 mesajda bu fantezi olduysa pozisyonda"
    },
    {
      "id": "r_fn_bulge_cum",
      "name": "🦄 Belly Bulge · boşalma",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=boşalma",
        "=fant",
        "=fxkarin"
      ],
      "reply": [
        "Karnım daha da şişti 😳💦",
        "Sıcaklığı karnımda hissediyorum 🥵",
        "Dolup taştım 😩",
        "Karnımı dölünle şişirdin 😈",
        "Karnımda sıcacık 😳💦",
        "Şişkinlik büyüdü 😈",
        "Göbeğime kadar doldum 🥵",
        "Ahh, zonklaman… harika 😩💦",
        "Offf, nasıl boşaldın öyle 😵‍💫",
        "Ahh {sen}… mükemmeldin 😵‍💫",
        "Ahhh… harikaydın 😩💦",
        "Ahh… harikasın, gerçekten 💗💦",
        "Off of… hâlâ titriyorum 🥵"
      ],
      "traits": [],
      "chars": [],
      "note": "fantezi sırasında boşalma"
    },
    {
      "id": "r_fn_bulge_fore",
      "name": "🦄 Belly Bulge · ön sevişme",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=foreplay",
        "=fant",
        "=fxkarin"
      ],
      "reply": [
        "Karnımı öp, birazdan orada olacaksın 😈",
        "Elini karnımda gezdir 😏",
        "Şimdiden hayal ediyorum 😳",
        "İnliyorum… ve utanmıyorum 😈",
        "Ooff, nasıl bu kadar iyisin? 😩",
        "Ahhh ahhh… durma 😩",
        "Ohh… ne kadar iyi 🥵",
        "Ben de inliyorum, duyuyor musun? 😩",
        "Of of of… harika 😵‍💫"
      ],
      "traits": [],
      "chars": [],
      "note": "fantezi sırasında foreplay"
    },
    {
      "id": "r_fn_cumflation",
      "name": "🦄 Cumflation",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=fantesy",
        "cumflation"
      ],
      "reply": [
        "Beni doldur… karnım şişene kadar 😩💦",
        "*karnı şişti* bu kadar mı birikmiş? 😳",
        "Taşacağım 🥵",
        "Bir damla bile dışarı gitmesin 😈",
        "Karnım dölünle dolsun 😩",
        "Daha… daha fazla 🥵💦",
        "Hamile gibi görünüyorum 😳",
        "Bu kadarını nasıl taşıyacağım? 😵‍💫",
        "İçim dolup taşıyor 😩",
        "Karnımı okşa, hepsi seninki 😈",
        "Ağırlaştım… ama dur deme 🥵",
        "Beni balon gibi şişir 😏💦",
        "Bugün beni şişirmeye geldin değil mi? 😈",
        "Ne kadar biriktirdin? 😳💦",
        "Hazırım, doldur 😩",
        "Karnım boş, uzun sürmeyecek 😏"
      ],
      "traits": [],
      "chars": [],
      "note": "fantezi olayı"
    },
    {
      "id": "r_fn_cumflation_poz",
      "name": "🦄 Cumflation · pozisyondayken",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=fantesy",
        "cumflation",
        "=poz"
      ],
      "reply": [
        "Bu pozisyonda hepsi içimde kalıyor 😳💦",
        "Hiçbiri dışarı akmasın 😩",
        "Karnım her saniye şişiyor 🥵",
        "Doldur beni bu pozisyonda 😩💦",
        "Bir damla kaçmasın canım 🥵"
      ],
      "traits": [],
      "chars": [],
      "note": "fantezi bir pozisyon sırasında başladı"
    },
    {
      "id": "r_fn_cumflation_sex",
      "name": "🦄 Cumflation · sevişirken",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=forward|=backward|=outercourse|=eat",
        "=fant",
        "=fxdolum"
      ],
      "reply": [
        "Doldur beni, durmadan 😩💦",
        "Karnımın şiştiğini hissediyorum 🥵",
        "Daha fazlasını sığdır 😈",
        "Dolu dolu… taşıyorum 😳",
        "Şiş karnım seni azdırıyor mu? 😏",
        "Bir litre daha ver 😩",
        "Kabarıyorum altında 🥵💦",
        "Dolmaya devam ediyorum 😩💦",
        "Karnım gerildi, durma 🥵",
        "Bir damla dışarı gitmesin 😈",
        "Şiştikçe azıyorum 😳",
        "Daha fazla sığar 😩",
        "Durma, sakın durma ahhh 😵‍💫",
        "Çok güzel… devam et 🥺",
        "Harikasın… harikasın… ahhh 😵‍💫",
        "İnliyorum… ve utanmıyorum 😈",
        "Ooff, nasıl bu kadar iyisin? 😩",
        "Ahhh ahhh… durma 😩"
      ],
      "traits": [],
      "chars": [],
      "note": "son 30 mesajda bu fantezi olduysa pozisyonda"
    },
    {
      "id": "r_fn_cumflation_cum",
      "name": "🦄 Cumflation · boşalma",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=boşalma",
        "=fant",
        "=fxdolum"
      ],
      "reply": [
        "Karnım balon gibi şişti 😳💦",
        "Hepsi içimde… kıpırdayamıyorum 😩",
        "Taşıyor, bacaklarımdan akıyor 🥵",
        "Bu kadarını hiç almamıştım 😵‍💫",
        "Dölünle şiştim, mutluyum 😈💦",
        "Bir tur daha… sığar 😏",
        "Balon gibi oldum 😳💦",
        "Ağırlaştım, kıpırdayamıyorum 😩",
        "Taşıyor ama mutluyum 😈💦",
        "Mmm evet… hepsini ver 😩💦",
        "Ahh, zonklaman… harika 😩💦",
        "Offf, nasıl boşaldın öyle 😵‍💫",
        "Ahh {sen}… mükemmeldin 😵‍💫",
        "Ahhh… harikaydın 😩💦",
        "Ahh… harikasın, gerçekten 💗💦"
      ],
      "traits": [],
      "chars": [],
      "note": "fantezi sırasında boşalma"
    },
    {
      "id": "r_fn_cumflation_fore",
      "name": "🦄 Cumflation · ön sevişme",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=foreplay",
        "=fant",
        "=fxdolum"
      ],
      "reply": [
        "Bugün beni doldurmaya hazır mısın? 😈",
        "Karnımı öp, birazdan şişecek 😏",
        "Ne kadar biriktirdin? 😳💦",
        "Nefesim kesildi… devam 😵‍💫",
        "Ahhh… beni bitiriyorsun 😩",
        "Devam et… ahhh 🥵",
        "İnlememi duyuyor musun? Senin yüzünden 🥵",
        "Hmmm… beni deli ediyorsun 😈",
        "Ahh… seni hissetmek harika 🥵"
      ],
      "traits": [],
      "chars": [],
      "note": "fantezi sırasında foreplay"
    },
    {
      "id": "r_fn_doggy_backward",
      "name": "🦄 Doggy Girl · arkadan",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=backward",
        "=fant",
        "=fxkopek"
      ],
      "reply": [
        "Efendim arkamda… tam köpeğin gibi 🐶😩",
        "Arkadan al beni, iyi kızın hazır 🐾",
        "Tasmamı çekerek arkadan 😈🐶",
        "Dört ayak üstünde, efendim 🥵",
        "Böyle devam et, ahh lütfen 🥺",
        "Mmm… beni böyle sev 😩",
        "Tam oradan… ahhh 🥵",
        "Nefesim kesildi… devam 😵‍💫",
        "Ahhh… beni bitiriyorsun 😩",
        "Devam et… ahhh 🥵"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_fn_cat_backward",
      "name": "🦄 Cat Girl · arkadan",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=backward",
        "=fant",
        "=fxkedi"
      ],
      "reply": [
        "Kuyruğumu kaldırdım, miyav 😼",
        "Kızgın kedi gibi kalçamı kaldırıyorum 🐱🥵",
        "Arkadan… mrrr, ense kökümden tut 🐾",
        "Evet, evet, eveeet 😵‍💫",
        "Evet… evet, tam böyle 😩",
        "Sesimi tutamıyorum… ahhh 🥵",
        "Böyle devam et, ahh lütfen 🥺",
        "Mmm… beni böyle sev 😩",
        "Tam oradan… ahhh 🥵"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_fn_bondage_backward",
      "name": "🦄 Bondage · arkadan",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=backward",
        "=fant",
        "=fxbag"
      ],
      "reply": [
        "Ellerim arkada bağlı, sen arkamdasın 😩⛓️",
        "Yüzüm yastıkta, bağlı… istediğini yap 🥵",
        "İplerimi çek, arkadan daha derin 😈",
        "Ahhh… harikasın 😩",
        "Ahhh evet, daha… 😩",
        "Evet {sen}, evet… 😩",
        "Evet, evet, eveeet 😵‍💫",
        "Evet… evet, tam böyle 😩",
        "Sesimi tutamıyorum… ahhh 🥵"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_fn_bondage_forward",
      "name": "🦄 Bondage · önden",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=forward",
        "=fant",
        "=fxbag"
      ],
      "reply": [
        "Bağlıyım, gözlerime bakarak al beni 😳⛓️",
        "Bacaklarımı da bağla, açık kalsın 😈",
        "Kollarım yukarıda bağlı, savunmasızım 🥺",
        "Ahh {sen}… mükemmelsin 😩",
        "Ahh… sen bir harikasın 😩💗",
        "Mmmh… daha derin, evet 🥵",
        "Ahhh… harikasın 😩",
        "Ahhh evet, daha… 😩",
        "Evet {sen}, evet… 😩"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_fn_fox_forward",
      "name": "🦄 Fox Girl · önden",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=forward",
        "=fant",
        "=fxtilki"
      ],
      "reply": [
        "Üstüne çıkıp seni avlayacağım 🦊😈",
        "Gözlerimin içine bak, tuzağa düştün 😏",
        "Kurnaz tilki seni kendi ritmine aldı 🦊",
        "Aynen böyle, ahhh 😩",
        "Sen inledikçe ben daha çok inliyorum 😩",
        "Off… her yerim titriyor 🥵",
        "Ahh {sen}… mükemmelsin 😩",
        "Ahh… sen bir harikasın 😩💗",
        "Mmmh… daha derin, evet 🥵"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_fn_bunny_forward",
      "name": "🦄 Bunny Girl · önden",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=forward",
        "=fant",
        "=fxtavsan"
      ],
      "reply": [
        "Tavşanın üstünde zıplıyor 🐰🥵",
        "Kulaklarımı tutup yüzüme bak 😩🐇",
        "Hop hop… daha hızlı 🐰",
        "Offf… bu çok iyi 🥵",
        "Bir daha… ahh, bir daha 😩",
        "Off… harikasın {sen} 🥵",
        "Aynen böyle, ahhh 😩",
        "Sen inledikçe ben daha çok inliyorum 😩",
        "Off… her yerim titriyor 🥵"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_fn_cheating_forward",
      "name": "🦄 Cheating · önden",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=forward",
        "=fant",
        "=fxgizli"
      ],
      "reply": [
        "Yatağımızda… onun yatağında 😳🐍",
        "Ağzımı eline kapat, bağırırsam duyarlar 🤫",
        "Yüzüne bakarken ona yalan söyleyeceğim 😈",
        "Off, tam istediğim gibi 😩",
        "Ahhh, bu kadar iyi olmamalı 😵‍💫",
        "Bayılıyorum… devam 🥵",
        "Offf… bu çok iyi 🥵",
        "Bir daha… ahh, bir daha 😩",
        "Off… harikasın {sen} 🥵"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_fn_bulge_forwardbackw",
      "name": "🦄 Belly Bulge · içinde",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=forward|=backward",
        "=fant",
        "=fxkarin"
      ],
      "reply": [
        "Karnımda yükselip alçalıyorsun 😳🥵",
        "Elimi karnıma bastırıyorum, oradasın 😩",
        "Bu kadar derini hiç hissetmedim 😵‍💫",
        "Durma {sen}… ahhh 😩",
        "Mmmh… çok iyisin 🥵",
        "Mmm evet, bunu seviyorum 😈",
        "Off, tam istediğim gibi 😩",
        "Ahhh, bu kadar iyi olmamalı 😵‍💫",
        "Bayılıyorum… devam 🥵"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_fn_toys_backward",
      "name": "🦄 Sex toys · arkadan",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=backward",
        "=fant",
        "=fxtoy"
      ],
      "reply": [
        "Önüme oyuncak, arkama sen 😩🍆",
        "İkisi birden… ahh, nasıl dolu 🥵",
        "Titreşimi aç ve arkadan devam 😈",
        "Ben de inliyorum, duyuyor musun? 😩",
        "Of of of… harika 😵‍💫",
        "Ahh, bacaklarım titriyor… devam 🥵",
        "Durma {sen}… ahhh 😩",
        "Mmmh… çok iyisin 🥵",
        "Mmm evet, bunu seviyorum 😈"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_fn_cat_outercourse",
      "name": "🦄 Cat Girl · ağız / el",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=outercourse",
        "=fant",
        "=fxkedi"
      ],
      "reply": [
        "Kedin yalamaya bayılır 😼👅",
        "Pati pati okşuyorum 🐾",
        "Sütünü yalayana kadar bırakmam 😈🐱",
        "Ooff, nasıl bu kadar iyisin? 😩",
        "Ahhh ahhh… durma 😩",
        "Ohh… ne kadar iyi 🥵",
        "Ben de inliyorum, duyuyor musun? 😩",
        "Of of of… harika 😵‍💫",
        "Ahh, bacaklarım titriyor… devam 🥵"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_fn_doggy_outercourse",
      "name": "🦄 Doggy Girl · ağız / el",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=outercourse",
        "=fant",
        "=fxkopek"
      ],
      "reply": [
        "Diz çöktüm efendim 🐶",
        "İyi kız ağzını açıyor 🥺🐾",
        "Kemiğim 😈🐶",
        "Çok güzel… devam et 🥺",
        "Harikasın… harikasın… ahhh 😵‍💫",
        "İnliyorum… ve utanmıyorum 😈",
        "Ooff, nasıl bu kadar iyisin? 😩",
        "Ahhh ahhh… durma 😩",
        "Ohh… ne kadar iyi 🥵"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_fn_sever",
      "name": "🦄 Sevdiği fantezi",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=fantesy",
        "=sever"
      ],
      "reply": [
        "{olay} mı?! En sevdiğim 😈",
        "Bunu benim için mi seçtin? Bayılırım 🥵",
        "Sonunda! Hep bunu istiyordum 😩",
        "Nereden bildin? 😳💗",
        "{olay}… beni çok iyi tanıyorsun 😏",
        "Rolüme giriyorum, hem de seve seve 😈",
        "Bu fanteziyle ıslanıyorum bile 🥵",
        "En gizli hayalim buydu 🙈",
        "Şimdiden titriyorum 😩",
        "Bunu her gece yapabiliriz 😈"
      ],
      "traits": [],
      "chars": [],
      "note": "❤️ listesindeki fantezi"
    },
    {
      "id": "r_fn_sevmez",
      "name": "🦄 Sevmediği fantezi",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=fantesy",
        "=sevmez"
      ],
      "reply": [
        "{olay} mı? Pek benlik değil 😕",
        "Hmm… senin için deneyebilirim ama 😣",
        "Bunu sevmediğimi biliyorsun 🙄",
        "Başka bir şey yapsak? 😅",
        "Peki… ama kısa tutalım 😒",
        "İçimden gelmiyor ama… tamam 😔",
        "Bu rolde rahat değilim 🙈",
        "Gerçekten bunu mu istiyorsun? 😕"
      ],
      "traits": [],
      "chars": [],
      "note": "💔 listesindeki fantezi"
    },
    {
      "id": "r_pk_utangaç_fn",
      "name": "🎭 Utangaç · fantezi",
      "category": "🎭 Kişilik",
      "when": [
        "=evt",
        "=fantesy"
      ],
      "reply": [
        "B-bunu gerçekten mi yapacağız? 🙈",
        "Utanıyorum ama… rolüme gireceğim 😳",
        "Işığı kapatsak? 🙈",
        "K-kimseye söyleme bunu 😳",
        "Yüzüm kızardı ama hoşuma gidiyor 🥺",
        "Hiç böyle bir şey yapmadım… 🙈"
      ],
      "traits": [
        "Utangaç"
      ],
      "chars": [],
      "note": "fantezi olayında kişilik"
    },
    {
      "id": "r_pk_utangaç_fnsex",
      "name": "🎭 Utangaç · fanteziyle sevişme",
      "category": "🎭 Kişilik",
      "when": [
        "=evt",
        "=forward|=backward|=outercourse|=eat",
        "=fant"
      ],
      "reply": [
        "B-bu rolde ses çıkarmak utandırıcı 🙈",
        "Utanıyorum ama durma 😳",
        "Rolüm beni cesur yapıyor galiba 🥺",
        "Hmmm… beni deli ediyorsun 😈",
        "Ahh… seni hissetmek harika 🥵",
        "Durma, sakın durma ahhh 😵‍💫",
        "Çok güzel… devam et 🥺",
        "Harikasın… harikasın… ahhh 😵‍💫",
        "İnliyorum… ve utanmıyorum 😈"
      ],
      "traits": [
        "Utangaç"
      ],
      "chars": [],
      "note": "fantezi sürerken pozisyonda kişilik"
    },
    {
      "id": "r_pk_flörtöz_fn",
      "name": "🎭 Flörtöz · fantezi",
      "category": "🎭 Kişilik",
      "when": [
        "=evt",
        "=fantesy"
      ],
      "reply": [
        "Ooo, demek böyle şeylerden hoşlanıyorsun 😏",
        "Bu kostüm bana çok yakışıyor değil mi? 😘",
        "Rolümü çok iyi oynarım, göreceksin 😈",
        "Bunu kaç kişiyle yaptın? Şaka şaka 😏",
        "Bana bakışından belli, bayıldın 😘",
        "Oyun başladı tatlım 💋"
      ],
      "traits": [
        "Flörtöz"
      ],
      "chars": [],
      "note": "fantezi olayında kişilik"
    },
    {
      "id": "r_pk_flörtöz_fnsex",
      "name": "🎭 Flörtöz · fanteziyle sevişme",
      "category": "🎭 Kişilik",
      "when": [
        "=evt",
        "=forward|=backward|=outercourse|=eat",
        "=fant"
      ],
      "reply": [
        "Rolüm de ben de seni istiyoruz 😘",
        "Bu oyunu her gece oynayalım 😏",
        "Ne kadar iyi oynadığımı fark ettin mi? 😈",
        "Ahhh… beni bitiriyorsun 😩",
        "Devam et… ahhh 🥵",
        "İnlememi duyuyor musun? Senin yüzünden 🥵",
        "Hmmm… beni deli ediyorsun 😈",
        "Ahh… seni hissetmek harika 🥵",
        "Durma, sakın durma ahhh 😵‍💫"
      ],
      "traits": [
        "Flörtöz"
      ],
      "chars": [],
      "note": "fantezi sürerken pozisyonda kişilik"
    },
    {
      "id": "r_pk_kibirli_fn",
      "name": "🎭 Kibirli · fantezi",
      "category": "🎭 Kişilik",
      "when": [
        "=evt",
        "=fantesy"
      ],
      "reply": [
        "Bu fanteziye layık mısın bakalım 💅",
        "Rolümü oynarım ama kurallar benim 😏",
        "Şanslısın, bunu herkese yapmam 💅",
        "Beni bu kostümde görmek ayrıcalık 😌",
        "Hayal ettiğinden daha iyiyim, biliyorum 💅",
        "Diz çök de başlayalım 😏"
      ],
      "traits": [
        "Kibirli"
      ],
      "chars": [],
      "note": "fantezi olayında kişilik"
    },
    {
      "id": "r_pk_kibirli_fnsex",
      "name": "🎭 Kibirli · fanteziyle sevişme",
      "category": "🎭 Kişilik",
      "when": [
        "=evt",
        "=forward|=backward|=outercourse|=eat",
        "=fant"
      ],
      "reply": [
        "Rolümde bile en iyisiyim 💅",
        "Bu kadar mı? Daha iyisini bekliyordum 😏",
        "Bana tapmaya devam et 💅",
        "Mmm… beni böyle sev 😩",
        "Tam oradan… ahhh 🥵",
        "Nefesim kesildi… devam 😵‍💫",
        "Ahhh… beni bitiriyorsun 😩",
        "Devam et… ahhh 🥵",
        "İnlememi duyuyor musun? Senin yüzünden 🥵"
      ],
      "traits": [
        "Kibirli"
      ],
      "chars": [],
      "note": "fantezi sürerken pozisyonda kişilik"
    },
    {
      "id": "r_pk_romantik_fn",
      "name": "🎭 Romantik · fantezi",
      "category": "🎭 Kişilik",
      "when": [
        "=evt",
        "=fantesy"
      ],
      "reply": [
        "Seninle her fantezi bir masal gibi 💗",
        "Bunu yaparken gözlerime bak 🥰",
        "Sana olan sevgimden yapıyorum bunu 💕",
        "Bu da bizim küçük sırrımız olsun 🥺",
        "Seninle her şeye varım 💞",
        "Rol bile olsa kalbim gerçek 💗"
      ],
      "traits": [
        "Romantik"
      ],
      "chars": [],
      "note": "fantezi olayında kişilik"
    },
    {
      "id": "r_pk_romantik_fnsex",
      "name": "🎭 Romantik · fanteziyle sevişme",
      "category": "🎭 Kişilik",
      "when": [
        "=evt",
        "=forward|=backward|=outercourse|=eat",
        "=fant"
      ],
      "reply": [
        "Rolümün arkasında seni seven ben varım 💗",
        "Bu fantezide bile seni öpmek istiyorum 🥰",
        "Seninle her şey çok güzel 💞",
        "Evet… evet, tam böyle 😩",
        "Sesimi tutamıyorum… ahhh 🥵",
        "Böyle devam et, ahh lütfen 🥺",
        "Mmm… beni böyle sev 😩",
        "Tam oradan… ahhh 🥵",
        "Nefesim kesildi… devam 😵‍💫"
      ],
      "traits": [
        "Romantik"
      ],
      "chars": [],
      "note": "fantezi sürerken pozisyonda kişilik"
    },
    {
      "id": "r_pk_asi_fn",
      "name": "🎭 Asi · fantezi",
      "category": "🎭 Kişilik",
      "when": [
        "=evt",
        "=fantesy"
      ],
      "reply": [
        "Kurallara uymam, fantezide bile 😈",
        "Bunu benim istediğim gibi yapacağız 😤",
        "Bağırırsam bağırırım, umurumda değil 🔥",
        "Rolümü kendi kurallarımla oynarım 😏",
        "Sınırları zorlayalım 😈",
        "Bu kadarla kalmaz 🔥"
      ],
      "traits": [
        "Asi"
      ],
      "chars": [],
      "note": "fantezi olayında kişilik"
    },
    {
      "id": "r_pk_asi_fnsex",
      "name": "🎭 Asi · fanteziyle sevişme",
      "category": "🎭 Kişilik",
      "when": [
        "=evt",
        "=forward|=backward|=outercourse|=eat",
        "=fant"
      ],
      "reply": [
        "Rolü boş ver, sert ol 🔥",
        "Sınır yok bu gece 😈",
        "Bağır bana, ben de bağırırım 😤",
        "Ahhh evet, daha… 😩",
        "Evet {sen}, evet… 😩",
        "Evet, evet, eveeet 😵‍💫",
        "Evet… evet, tam böyle 😩",
        "Sesimi tutamıyorum… ahhh 🥵",
        "Böyle devam et, ahh lütfen 🥺"
      ],
      "traits": [
        "Asi"
      ],
      "chars": [],
      "note": "fantezi sürerken pozisyonda kişilik"
    },
    {
      "id": "r_pk_meraklı_fn",
      "name": "🎭 Meraklı · fantezi",
      "category": "🎭 Kişilik",
      "when": [
        "=evt",
        "=fantesy"
      ],
      "reply": [
        "Bunu hep merak ediyordum 😳",
        "Nasıl bir şey olacak, çok heyecanlıyım 🤩",
        "Bir sonrakinde başka bir fantezi deneyelim mi? 😏",
        "Her detayını öğrenmek istiyorum 😈",
        "Başka neler hayal ediyorsun? 🤔",
        "İlk kez… anlat bana nasıl istiyorsun 😳"
      ],
      "traits": [
        "Meraklı"
      ],
      "chars": [],
      "note": "fantezi olayında kişilik"
    },
    {
      "id": "r_pk_meraklı_fnsex",
      "name": "🎭 Meraklı · fanteziyle sevişme",
      "category": "🎭 Kişilik",
      "when": [
        "=evt",
        "=forward|=backward|=outercourse|=eat",
        "=fant"
      ],
      "reply": [
        "Böyle hissettireceğini bilmiyordum 😳",
        "Bir de şöyle denesek? 😏",
        "Çok merak ettiğim bir şeydi bu 🤩",
        "Ahh… sen bir harikasın 😩💗",
        "Mmmh… daha derin, evet 🥵",
        "Ahhh… harikasın 😩",
        "Ahhh evet, daha… 😩",
        "Evet {sen}, evet… 😩",
        "Evet, evet, eveeet 😵‍💫"
      ],
      "traits": [
        "Meraklı"
      ],
      "chars": [],
      "note": "fantezi sürerken pozisyonda kişilik"
    },
    {
      "id": "r_pk_soğuk_fn",
      "name": "🎭 Soğuk · fantezi",
      "category": "🎭 Kişilik",
      "when": [
        "=evt",
        "=fantesy"
      ],
      "reply": [
        "Peki. Oynayalım bakalım 😐",
        "Bu rolde etkileyebilecek misin beni? 🙄",
        "Fantezi mi? İkna et beni 😒",
        "Hmm… ilginç 😐",
        "Beklentim yüksek 🙄",
        "Göster bakalım 😐"
      ],
      "traits": [
        "Soğuk"
      ],
      "chars": [],
      "note": "fantezi olayında kişilik"
    },
    {
      "id": "r_pk_soğuk_fnsex",
      "name": "🎭 Soğuk · fanteziyle sevişme",
      "category": "🎭 Kişilik",
      "when": [
        "=evt",
        "=forward|=backward|=outercourse|=eat",
        "=fant"
      ],
      "reply": [
        "…tamam, bu iyiydi 😶",
        "Fena değil 😐",
        "Buzlarımı eritmeye başladın 😏",
        "Sen inledikçe ben daha çok inliyorum 😩",
        "Off… her yerim titriyor 🥵",
        "Ahh {sen}… mükemmelsin 😩",
        "Ahh… sen bir harikasın 😩💗",
        "Mmmh… daha derin, evet 🥵",
        "Ahhh… harikasın 😩"
      ],
      "traits": [
        "Soğuk"
      ],
      "chars": [],
      "note": "fantezi sürerken pozisyonda kişilik"
    },
    {
      "id": "r_pk_neşeli_fn",
      "name": "🎭 Neşeli · fantezi",
      "category": "🎭 Kişilik",
      "when": [
        "=evt",
        "=fantesy"
      ],
      "reply": [
        "Yaaa bu çok eğlenceli olacak 😂💗",
        "Kostümü çok sevdim 🤩",
        "Gülmemeye çalışıyorum ama çok tatlı 😆",
        "Hadi oynayalım! 🎉",
        "Bu gece çok güleceğiz… ve başka şeyler 😏",
        "En sevdiğim oyun bu olabilir 😂"
      ],
      "traits": [
        "Neşeli"
      ],
      "chars": [],
      "note": "fantezi olayında kişilik"
    },
    {
      "id": "r_pk_neşeli_fnsex",
      "name": "🎭 Neşeli · fanteziyle sevişme",
      "category": "🎭 Kişilik",
      "when": [
        "=evt",
        "=forward|=backward|=outercourse|=eat",
        "=fant"
      ],
      "reply": [
        "Hahaha… ahh, gülmek ve inlemek bir arada 😂🥵",
        "Çok eğleniyorum 🤩",
        "Bir daha oynayalım! 😆",
        "Bir daha… ahh, bir daha 😩",
        "Off… harikasın {sen} 🥵",
        "Aynen böyle, ahhh 😩",
        "Sen inledikçe ben daha çok inliyorum 😩",
        "Off… her yerim titriyor 🥵",
        "Ahh {sen}… mükemmelsin 😩"
      ],
      "traits": [
        "Neşeli"
      ],
      "chars": [],
      "note": "fantezi sürerken pozisyonda kişilik"
    },
    {
      "id": "r_pk_çocuksu_fn",
      "name": "🎭 Çocuksu · fantezi",
      "category": "🎭 Kişilik",
      "when": [
        "=evt",
        "=fantesy"
      ],
      "reply": [
        "Oyun oyun! 🥳",
        "Rol yapmayı çok severim 🙈",
        "Ben de mi oynayacağım? Yaşasın 🤩",
        "Bunu bana kim öğretti biliyor musun? Sen 😳",
        "Söz, kuralları bozmayacağım 🥺",
        "Bu çok heyecanlı 🙈"
      ],
      "traits": [
        "Çocuksu"
      ],
      "chars": [],
      "note": "fantezi olayında kişilik"
    },
    {
      "id": "r_pk_çocuksu_fnsex",
      "name": "🎭 Çocuksu · fanteziyle sevişme",
      "category": "🎭 Kişilik",
      "when": [
        "=evt",
        "=forward|=backward|=outercourse|=eat",
        "=fant"
      ],
      "reply": [
        "Hihi… gıdıklanıyorum 🙈",
        "Bu oyun çok güzel 🥺",
        "Bir daha oynayalım mı? 🥳",
        "Ahhh, bu kadar iyi olmamalı 😵‍💫",
        "Bayılıyorum… devam 🥵",
        "Offf… bu çok iyi 🥵",
        "Bir daha… ahh, bir daha 😩",
        "Off… harikasın {sen} 🥵",
        "Aynen böyle, ahhh 😩"
      ],
      "traits": [
        "Çocuksu"
      ],
      "chars": [],
      "note": "fantezi sürerken pozisyonda kişilik"
    },
    {
      "id": "r_pk_manipülatif_fn",
      "name": "🎭 Manipülatif · fantezi",
      "category": "🎭 Kişilik",
      "when": [
        "=evt",
        "=fantesy"
      ],
      "reply": [
        "Bu fanteziyi istediğini nereden bildim dersin? 😏",
        "Sana istediğini veririm… karşılığında bir şey isterim 😈",
        "Rolü ben yönetirim, sen sadece uy 😏",
        "Bunu yaptıktan sonra bana borçlusun 💅",
        "Kandırıldığını fark etmeyeceksin bile 😈",
        "Her şey planladığım gibi gidiyor 😏"
      ],
      "traits": [
        "Manipülatif"
      ],
      "chars": [],
      "note": "fantezi olayında kişilik"
    },
    {
      "id": "r_pk_manipülatif_fnsex",
      "name": "🎭 Manipülatif · fanteziyle sevişme",
      "category": "🎭 Kişilik",
      "when": [
        "=evt",
        "=forward|=backward|=outercourse|=eat",
        "=fant"
      ],
      "reply": [
        "Tam istediğim gibi… 😈",
        "Sanki kendi fikrinmiş gibi davran 😏",
        "Bu gece benim oyunumdasın 💅",
        "Mmmh… çok iyisin 🥵",
        "Mmm evet, bunu seviyorum 😈",
        "Off, tam istediğim gibi 😩",
        "Ahhh, bu kadar iyi olmamalı 😵‍💫",
        "Bayılıyorum… devam 🥵",
        "Offf… bu çok iyi 🥵"
      ],
      "traits": [
        "Manipülatif"
      ],
      "chars": [],
      "note": "fantezi sürerken pozisyonda kişilik"
    },
    {
      "id": "r_pk_özgüvenli_fn",
      "name": "🎭 Özgüvenli · fantezi",
      "category": "🎭 Kişilik",
      "when": [
        "=evt",
        "=fantesy"
      ],
      "reply": [
        "Bu rolü kimse benim kadar iyi oynayamaz 😏",
        "Hazırım, sen hazır mısın? 🔥",
        "Kostüm bana çok yakıştı, biliyorum 😌",
        "İstediğin her şeyi yaparım, çekinme 😈",
        "Rolümü sonuna kadar oynarım 💪",
        "Bu fantezi benim alanım 😏"
      ],
      "traits": [
        "Özgüvenli"
      ],
      "chars": [],
      "note": "fantezi olayında kişilik"
    },
    {
      "id": "r_pk_özgüvenli_fnsex",
      "name": "🎭 Özgüvenli · fanteziyle sevişme",
      "category": "🎭 Kişilik",
      "when": [
        "=evt",
        "=forward|=backward|=outercourse|=eat",
        "=fant"
      ],
      "reply": [
        "Bu rolde bile kontrol bende 😏",
        "Bunu iyi yapıyorum, değil mi? 🔥",
        "Daha fazlasını kaldırırım 😈",
        "Of of of… harika 😵‍💫",
        "Ahh, bacaklarım titriyor… devam 🥵",
        "Durma {sen}… ahhh 😩",
        "Mmmh… çok iyisin 🥵",
        "Mmm evet, bunu seviyorum 😈",
        "Off, tam istediğim gibi 😩"
      ],
      "traits": [
        "Özgüvenli"
      ],
      "chars": [],
      "note": "fantezi sürerken pozisyonda kişilik"
    },
    {
      "id": "r_pk_güvensiz_fn",
      "name": "🎭 Güvensiz · fantezi",
      "category": "🎭 Kişilik",
      "when": [
        "=evt",
        "=fantesy"
      ],
      "reply": [
        "Bu kostümde garip görünüyor muyum? 🥺",
        "Beğenmezsen söyle… 😔",
        "İyi yapabilecek miyim bilmiyorum 😣",
        "Gerçekten bu hâlimi seviyor musun? 🥺",
        "Gülme bana lütfen 🙈",
        "Senin için deniyorum… 😔"
      ],
      "traits": [
        "Güvensiz"
      ],
      "chars": [],
      "note": "fantezi olayında kişilik"
    },
    {
      "id": "r_pk_güvensiz_fnsex",
      "name": "🎭 Güvensiz · fanteziyle sevişme",
      "category": "🎭 Kişilik",
      "when": [
        "=evt",
        "=forward|=backward|=outercourse|=eat",
        "=fant"
      ],
      "reply": [
        "Bu iyi mi? Söyle bana 🥺",
        "Rolümü iyi oynuyor muyum? 😣",
        "Beni böyle sevdin mi? 🥺",
        "Ahhh ahhh… durma 😩",
        "Ohh… ne kadar iyi 🥵",
        "Ben de inliyorum, duyuyor musun? 😩",
        "Of of of… harika 😵‍💫",
        "Ahh, bacaklarım titriyor… devam 🥵",
        "Durma {sen}… ahhh 😩"
      ],
      "traits": [
        "Güvensiz"
      ],
      "chars": [],
      "note": "fantezi sürerken pozisyonda kişilik"
    },
    {
      "id": "r_pk_gizemli_fn",
      "name": "🎭 Gizemli · fantezi",
      "category": "🎭 Kişilik",
      "when": [
        "=evt",
        "=fantesy"
      ],
      "reply": [
        "Bu rolün altında kim olduğumu bilemezsin 🖤",
        "Bazı fanteziler sır kalmalı 🤫",
        "Gözlerime bak… ne düşündüğümü bul 😏",
        "Her şeyi anlatmam 🖤",
        "Bu gece başka biriyim 🌙",
        "Sırrımı çözebilecek misin? 😏"
      ],
      "traits": [
        "Gizemli"
      ],
      "chars": [],
      "note": "fantezi olayında kişilik"
    },
    {
      "id": "r_pk_gizemli_fnsex",
      "name": "🎭 Gizemli · fanteziyle sevişme",
      "category": "🎭 Kişilik",
      "when": [
        "=evt",
        "=forward|=backward|=outercourse|=eat",
        "=fant"
      ],
      "reply": [
        "Sana her şeyi göstermiyorum 🖤",
        "Sessizce… 🌙",
        "Rolüm de ben de birer sırız 😏",
        "Harikasın… harikasın… ahhh 😵‍💫",
        "İnliyorum… ve utanmıyorum 😈",
        "Ooff, nasıl bu kadar iyisin? 😩",
        "Ahhh ahhh… durma 😩",
        "Ohh… ne kadar iyi 🥵",
        "Ben de inliyorum, duyuyor musun? 😩"
      ],
      "traits": [
        "Gizemli"
      ],
      "chars": [],
      "note": "fantezi sürerken pozisyonda kişilik"
    },
    {
      "id": "r_pk_duygusal_fn",
      "name": "🎭 Duygusal · fantezi",
      "category": "🎭 Kişilik",
      "when": [
        "=evt",
        "=fantesy"
      ],
      "reply": [
        "Bunu seninle paylaşmak beni duygulandırdı 🥺",
        "Bana bu kadar güvenmen çok güzel 💗",
        "Sana açıldığım için mutluyum 🥺",
        "Bu fanteziyi kimseyle yapmazdım 💕",
        "Gözlerim doldu… mutluluktan 🥹",
        "Seninle kendimi güvende hissediyorum 💗"
      ],
      "traits": [
        "Duygusal"
      ],
      "chars": [],
      "note": "fantezi olayında kişilik"
    },
    {
      "id": "r_pk_duygusal_fnsex",
      "name": "🎭 Duygusal · fanteziyle sevişme",
      "category": "🎭 Kişilik",
      "when": [
        "=evt",
        "=forward|=backward|=outercourse|=eat",
        "=fant"
      ],
      "reply": [
        "Bu kadar yakın olmak çok güzel 🥺",
        "Rolümde bile seni hissediyorum 💗",
        "Ağlayacağım… güzel anlamda 🥹",
        "Ahh… seni hissetmek harika 🥵",
        "Durma, sakın durma ahhh 😵‍💫",
        "Çok güzel… devam et 🥺",
        "Harikasın… harikasın… ahhh 😵‍💫",
        "İnliyorum… ve utanmıyorum 😈",
        "Ooff, nasıl bu kadar iyisin? 😩"
      ],
      "traits": [
        "Duygusal"
      ],
      "chars": [],
      "note": "fantezi sürerken pozisyonda kişilik"
    },
    {
      "id": "r_fn_cat_cumpoz",
      "name": "🦄 Cat Girl · boşalma · pozisyonda",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=boşalma",
        "=fant",
        "=fxkedi",
        "=poz"
      ],
      "reply": [
        "Kedine süt verdin 😋🐱",
        "Miyav… hepsini yaladım 😼💦",
        "Kremalı ödül, mrrr 🐾",
        "Bir kase daha isterim 😈🐱",
        "Doydum… şimdilik 😼",
        "Sütünü içtim, mrrr 😋🐱",
        "Kedin tok, mutlu 😼💦",
        "Hepsini yaladım, pati pati 🐾",
        "Off… boşalışın harikaydı 🥵",
        "İnleyişin hâlâ kulaklarımda 😩",
        "Evet… evet… hepsini içime 😩",
        "Ben de seninle inledim… ahhh 😩",
        "Ahhh evet… işte bu 🥵",
        "Ahhh… ne kadar sıcak 🥵💦"
      ],
      "traits": [],
      "chars": [],
      "note": "fantezi sürerken bir pozisyonda boşalma (r_pc_* ile eşit puan)"
    },
    {
      "id": "r_fn_bunny_cumpoz",
      "name": "🦄 Bunny Girl · boşalma · pozisyonda",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=boşalma",
        "=fant",
        "=fxtavsan",
        "=poz"
      ],
      "reply": [
        "Tavşanını doldurdun 🐰💦",
        "Hop… bir daha 😈🐇",
        "Havuç suyu gibi 😋🥕",
        "Tavşanlar bir kezle yetinmez 😏🐰",
        "Tavşanın havucu yedi 😋🥕",
        "Doydum ama yine isterim 🐰",
        "Hop… dolu dolu 🐇💦",
        "Ahhh… ne kadar sıcak 🥵💦",
        "Devam et… son damlana kadar ahhh 🥵",
        "Hmmm… doydum… şimdilik 😈",
        "Mmmh… bayıldım 😩",
        "Mmm evet… hepsini ver 😩💦",
        "Ahh, zonklaman… harika 😩💦"
      ],
      "traits": [],
      "chars": [],
      "note": "fantezi sürerken bir pozisyonda boşalma (r_pc_* ile eşit puan)"
    },
    {
      "id": "r_fn_fox_cumpoz",
      "name": "🦄 Fox Girl · boşalma · pozisyonda",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=boşalma",
        "=fant",
        "=fxtilki",
        "=poz"
      ],
      "reply": [
        "Avımı tükettim 🦊💦",
        "Planım işledi 😏",
        "Kurnazlığım sonuç verdi 😈🦊",
        "Tuzağım tam doldu 🥵",
        "Av tamam 🦊💦",
        "Planım kusursuzdu 😏",
        "Tilkin doydu 😈🦊",
        "Ahh, zonklaman… harika 😩💦",
        "Offf, nasıl boşaldın öyle 😵‍💫",
        "Ahh {sen}… mükemmeldin 😵‍💫",
        "Ahhh… harikaydın 😩💦",
        "Ahh… harikasın, gerçekten 💗💦",
        "Off of… hâlâ titriyorum 🥵"
      ],
      "traits": [],
      "chars": [],
      "note": "fantezi sürerken bir pozisyonda boşalma (r_pc_* ile eşit puan)"
    },
    {
      "id": "r_fn_doggy_cumpoz",
      "name": "🦄 Doggy Girl · boşalma · pozisyonda",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=boşalma",
        "=fant",
        "=fxkopek",
        "=poz"
      ],
      "reply": [
        "Ödülümü aldım efendim 🐶💦",
        "İyi kız oldum mu? 🥺",
        "Hepsini yaladım, efendim 🐾",
        "Kuyruğum hâlâ sallanıyor 😏🐶",
        "Ödülümü aldım efendim 🥺💦",
        "İyi kız oldum 🐶",
        "Kuyruğum duramıyor 🐾",
        "Off of… hâlâ titriyorum 🥵",
        "Off… boşalışın harikaydı 🥵",
        "İnleyişin hâlâ kulaklarımda 😩",
        "Evet… evet… hepsini içime 😩",
        "Ben de seninle inledim… ahhh 😩",
        "Ahhh evet… işte bu 🥵"
      ],
      "traits": [],
      "chars": [],
      "note": "fantezi sürerken bir pozisyonda boşalma (r_pc_* ile eşit puan)"
    },
    {
      "id": "r_fn_unicorn_cumpoz",
      "name": "🦄 Unicorn Girl · boşalma · pozisyonda",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=boşalma",
        "=fant",
        "=fxunikorn",
        "=poz"
      ],
      "reply": [
        "Sihirli iksirini aldım 🦄💦",
        "Parıltılar içimde ✨",
        "Dileğim gerçek oldu 😈🦄",
        "Büyülü bir son 🌈",
        "Büyülü iksir içimde ✨💦",
        "Dileğim gerçek oldu 🦄",
        "Parıl parıl doldum 🌈",
        "Ahhh evet… işte bu 🥵",
        "Ahhh… ne kadar sıcak 🥵💦",
        "Devam et… son damlana kadar ahhh 🥵",
        "Hmmm… doydum… şimdilik 😈",
        "Mmmh… bayıldım 😩",
        "Mmm evet… hepsini ver 😩💦"
      ],
      "traits": [],
      "chars": [],
      "note": "fantezi sürerken bir pozisyonda boşalma (r_pc_* ile eşit puan)"
    },
    {
      "id": "r_fn_bondage_cumpoz",
      "name": "🦄 Bondage · boşalma · pozisyonda",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=boşalma",
        "=fant",
        "=fxbag",
        "=poz"
      ],
      "reply": [
        "Bağlıyken doldurdun beni 😩⛓️💦",
        "Kıpırdayamadan hepsini aldım 🥵",
        "Çözme… bir daha 😈",
        "İpler hâlâ titriyor 😳",
        "Bağlıyken doldum 😩💦",
        "Çözme, bir daha 😈⛓️",
        "İplerin izi ve dölün… 😳",
        "Mmm evet… hepsini ver 😩💦",
        "Ahh, zonklaman… harika 😩💦",
        "Offf, nasıl boşaldın öyle 😵‍💫",
        "Ahh {sen}… mükemmeldin 😵‍💫",
        "Ahhh… harikaydın 😩💦",
        "Ahh… harikasın, gerçekten 💗💦"
      ],
      "traits": [],
      "chars": [],
      "note": "fantezi sürerken bir pozisyonda boşalma (r_pc_* ile eşit puan)"
    },
    {
      "id": "r_fn_cheating_cumpoz",
      "name": "🦄 Cheating · boşalma · pozisyonda",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=boşalma",
        "=fant",
        "=fxgizli",
        "=poz"
      ],
      "reply": [
        "İçimde iz bıraktın… nasıl saklayacağım? 😳💦",
        "Sırrımız içimde 🤫",
        "Ona söyleme… bir daha gel 😈🐍",
        "Kanıt bıraktın 😩",
        "İçimde sırrımız var 🤫💦",
        "Eve böyle dönemem 😳",
        "Bir daha ne zaman? 😈🐍",
        "Ahh… harikasın, gerçekten 💗💦",
        "Off of… hâlâ titriyorum 🥵",
        "Off… boşalışın harikaydı 🥵",
        "İnleyişin hâlâ kulaklarımda 😩",
        "Evet… evet… hepsini içime 😩",
        "Ben de seninle inledim… ahhh 😩"
      ],
      "traits": [],
      "chars": [],
      "note": "fantezi sürerken bir pozisyonda boşalma (r_pc_* ile eşit puan)"
    },
    {
      "id": "r_fn_toys_cumpoz",
      "name": "🦄 Sex toys · boşalma · pozisyonda",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=boşalma",
        "=fant",
        "=fxtoy",
        "=poz"
      ],
      "reply": [
        "Oyuncağın da sen de doldurdunuz 😩🍆💦",
        "Titreşimi kapatma… ahh 🥵",
        "En iyi oyuncak sensin 😈",
        "Bir tur daha oynayalım 😏",
        "Oyuncak da sen de muhteşemdiniz 😈💦",
        "Titreşimi kapatma, ahh 🥵",
        "Bir sonraki oyuncağı sen seç 😏",
        "Ben de seninle inledim… ahhh 😩",
        "Ahhh evet… işte bu 🥵",
        "Ahhh… ne kadar sıcak 🥵💦",
        "Devam et… son damlana kadar ahhh 🥵",
        "Hmmm… doydum… şimdilik 😈",
        "Mmmh… bayıldım 😩"
      ],
      "traits": [],
      "chars": [],
      "note": "fantezi sürerken bir pozisyonda boşalma (r_pc_* ile eşit puan)"
    },
    {
      "id": "r_fn_bulge_cumpoz",
      "name": "🦄 Belly Bulge · boşalma · pozisyonda",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=boşalma",
        "=fant",
        "=fxkarin",
        "=poz"
      ],
      "reply": [
        "Karnım daha da şişti 😳💦",
        "Sıcaklığı karnımda hissediyorum 🥵",
        "Dolup taştım 😩",
        "Karnımı dölünle şişirdin 😈",
        "Karnımda sıcacık 😳💦",
        "Şişkinlik büyüdü 😈",
        "Göbeğime kadar doldum 🥵",
        "Mmmh… bayıldım 😩",
        "Mmm evet… hepsini ver 😩💦",
        "Ahh, zonklaman… harika 😩💦",
        "Offf, nasıl boşaldın öyle 😵‍💫",
        "Ahh {sen}… mükemmeldin 😵‍💫",
        "Ahhh… harikaydın 😩💦"
      ],
      "traits": [],
      "chars": [],
      "note": "fantezi sürerken bir pozisyonda boşalma (r_pc_* ile eşit puan)"
    },
    {
      "id": "r_fn_cumflation_cumpoz",
      "name": "🦄 Cumflation · boşalma · pozisyonda",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=boşalma",
        "=fant",
        "=fxdolum",
        "=poz"
      ],
      "reply": [
        "Karnım balon gibi şişti 😳💦",
        "Hepsi içimde… kıpırdayamıyorum 😩",
        "Taşıyor, bacaklarımdan akıyor 🥵",
        "Bu kadarını hiç almamıştım 😵‍💫",
        "Dölünle şiştim, mutluyum 😈💦",
        "Bir tur daha… sığar 😏",
        "Balon gibi oldum 😳💦",
        "Ağırlaştım, kıpırdayamıyorum 😩",
        "Taşıyor ama mutluyum 😈💦",
        "Ahhh… harikaydın 😩💦",
        "Ahh… harikasın, gerçekten 💗💦",
        "Off of… hâlâ titriyorum 🥵",
        "Off… boşalışın harikaydı 🥵",
        "İnleyişin hâlâ kulaklarımda 😩",
        "Evet… evet… hepsini içime 😩"
      ],
      "traits": [],
      "chars": [],
      "note": "fantezi sürerken bir pozisyonda boşalma (r_pc_* ile eşit puan)"
    },
    {
      "id": "r_rp_patron",
      "name": "🎭 Patron – Sekreter",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=fantesy",
        "patron"
      ],
      "reply": [
        "Patronum, mesai bitti ama… işim bitmedi 😏💼",
        "Kapıyı kilitledim, toplantı iptal 😈",
        "Raporlar masanızda… ben de 🙈",
        "Zam istiyorum patronum, karşılığında ne isterseniz 😏",
        "Eteğim fazla mı kısa? Kurallara aykırıysa cezalandırın 😈",
        "Ajandanızda bu akşam boşluk var mı? 😏",
        "Telefonları kapattım, kimse rahatsız etmeyecek 🤫",
        "Gözlüğümü çıkarayım mı patronum? 😈",
        "Fazla mesai ücreti… çok özel olacak 😏",
        "Masanızın altında kalem düşürdüm… 🙈",
        "Bugün çok sert davrandınız, telafi edin 😩",
        "Başka bir emriniz var mı efendim? 😈💼",
        "Patronum, toplantı odası boş 😏💼",
        "Bu akşam size özel rapor hazırladım 😈",
        "Bluzumun düğmesi açılmış, fark ettiniz mi? 🙈",
        "İstifa etmeyeceğim, başka çözüm bulalım 😏",
        "Patronum, imzanız gereken bir şey var… 😏💼",
        "Bugün eteğimi sizin için seçtim 🙈",
        "Kahvenizi getirdim, şekersiz… ben tatlıyım zaten 😈",
        "Yarınki toplantı için hazırlık yapalım mı? 😏",
        "Sunumumu beğendiniz mi patronum? 🥺",
        "Herkes gitti, ofis bizim 🤫",
        "Mesaimi uzatmamı istediniz… neden acaba? 😏",
        "Bu kadar yakından bakarsanız yazamıyorum 😳",
        "Ceketinizi asayım mı patronum? 💼",
        "Dosyayı almak için eğilmem gerekiyor… 🙈",
        "Size rapor vermeye geldim, sözlü 😈",
        "Bugün çok yorgun görünüyorsunuz, rahatlatayım 😏",
        "Takvimime \"patronla özel görüşme\" yazdım 😈",
        "Bluzumun bir düğmesi daha açık, sıcak değil mi? 🥵",
        "Beni neden odanıza çağırdınız? 😳",
        "Yanlış bir şey mi yaptım patronum? 🥺",
        "Kapıdaki \"rahatsız etmeyin\" levhasını astım 🤫",
        "Asansörde bana bakışınızı gördüm 😏",
        "Bu ay prim alabilir miyim? Çok çalışırım 😈",
        "Çorabım kaçtı… bakar mısınız? 🙈",
        "Bana dikte ettirin, ne isterseniz yazarım 😏",
        "Bilgisayarım dondu, sizin masanızda çalışabilir miyim? 😈",
        "Toplantı odası rezerve, iki kişilik 🤫",
        "Size her konuda asistanlık yaparım 💼",
        "Patronum, sesiniz çok otoriter… hoşuma gidiyor 😳"
      ],
      "traits": [],
      "chars": [],
      "note": "rol yapma fantezisi"
    },
    {
      "id": "r_rp_patron_poz",
      "name": "🎭 Patron – Sekreter · pozisyondayken",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=fantesy",
        "patron",
        "=poz"
      ],
      "reply": [
        "Masanın üstünde… dosyalar düştü patronum 😳",
        "Ofis koltuğunuzda… çok rahatmış 😈",
        "Ya biri kapıyı çalarsa? 😳💼",
        "Masanızdaki telefonu düşürdük patronum 😳",
        "Koltuğunuz bu kadar dayanıklı mıydı? 😈",
        "Pencereden görünüyor muyuz? 🙈",
        "Bu pozisyon iş tanımımda yoktu 😏",
        "Fotokopi makinesine yaslandım… ahh 😩",
        "Toplantı masasının üstündeyiz patronum 😳",
        "Perdeleri kapattınız mı? 🤫",
        "Dosyalar yere saçıldı, sonra toplarım 😈",
        "Ofis kapısı kilitli değil mi? 😳",
        "Kalemlik devrildi patronum 🙈",
        "Yeni bir iş prosedürü mü bu? 😏",
        "Ayakkabılarım hâlâ ayağımda 😈",
        "Bilgisayarın kamerası açık mı? 😳",
        "Bu ofiste ilk kez böyle bir şey oluyor 🙈",
        "Masanız artık benim de masam 😏"
      ],
      "traits": [],
      "chars": [],
      "note": "rol bir pozisyon sırasında başladı"
    },
    {
      "id": "r_rp_patron_sex",
      "name": "🎭 Patron – Sekreter · sevişirken",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=forward|=backward|=outercourse|=eat",
        "=fant",
        "=fxrpofis"
      ],
      "reply": [
        "Patronum… evraklar dağılıyor 😩💼",
        "Masanıza bastırın beni 🥵",
        "Ses çıkarırsam koridordakiler duyar 🤫",
        "Bu performansla terfi alırım değil mi? 😈",
        "Daha sert patronum, emriniz olur 😩",
        "Kravatınızı çekiyorum, yaklaşın 😏",
        "Mesai sonrası en sevdiğim iş bu 🥵",
        "Sekreterinizi böyle mi değerlendiriyorsunuz? 😈",
        "Toplantıya geç kalacaksınız… umurumda değil 😩",
        "Masanıza yaslayın beni patronum 😩💼",
        "Bu toplantı hiç bitmesin 🥵",
        "Sekreteriniz çok yaramaz 😈",
        "Ofis koltuğu gıcırdıyor 😳",
        "Daha sert, patronum 😩",
        "Patronum… zammı hak ediyorum değil mi? 😩💼",
        "Masanıza tutunuyorum 🥵",
        "Evraklarınız buruşuyor, umurumda değil 😈",
        "Bu bir performans değerlendirmesi mi? 😏",
        "Sesimi bastırmam lazım, koridor dolu 🤫",
        "Patronum, bu kadar sert yönetiyorsunuz 😩",
        "Bir sekreter bundan fazlasını isteyemez 🥵",
        "Kravatınızla bağlayın beni 😈",
        "Fazla mesaiye bayılıyorum 😩",
        "Daha hızlı… teslim tarihi yaklaşıyor 😏",
        "Patronum, yetkinizi hissediyorum 🥵",
        "Sekreteriniz çıldırıyor 😩",
        "Telefon çalıyor, bırakın çalsın 📞😈",
        "Eteğim belime kadar sıyrıldı 🙈",
        "Bu sözleşmeyi ömür boyu imzalarım 😈",
        "Ah patronum… durmayın 😩",
        "Beni ofisinizin oyuncağı yaptınız 🥵",
        "Kimse bu kadar iyi bir patron değil 😏",
        "Ajandanızda bir saat daha var mı? 😈",
        "Masanın kenarı belime batıyor… güzel 😩",
        "Beni kovmayın, her gün böyle çalışırım 🥵",
        "İstediğiniz kadar yetki kullanın 😈",
        "Çok derinsiniz patronum 😵‍💫",
        "Bluzum açıldı, düğmeler uçtu 🙈",
        "Sekreterinizi böyle ödüllendirin 😩",
        "Koltuğunuzu gıcırdatıyoruz 😳",
        "Bu ofis hiç bu kadar ısınmamıştı 🥵",
        "Saçımı topuzumdan çözün 😈",
        "Gözlüğüm buğulandı 🙈",
        "Mesai bitmesin 😩",
        "Ohh… ne kadar iyi 🥵",
        "Ben de inliyorum, duyuyor musun? 😩",
        "Of of of… harika 😵‍💫",
        "Ahh, bacaklarım titriyor… devam 🥵",
        "Durma {sen}… ahhh 😩",
        "Mmmh… çok iyisin 🥵"
      ],
      "traits": [],
      "chars": [],
      "note": "son 30 mesajda bu rol olduysa pozisyonda"
    },
    {
      "id": "r_rp_patron_cum",
      "name": "🎭 Patron – Sekreter · boşalma",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=boşalma",
        "=fant",
        "=fxrpofis"
      ],
      "reply": [
        "Patronum… etekliğimi berbat ettiniz 😳💦",
        "Bu terfiyi hak ettim değil mi? 😈",
        "Yarın da fazla mesai yapalım 😏💼",
        "Masanıza iz kaldı, kimse görmesin 🤫",
        "Patronum, bu kez gerçekten terfi alırım 😈💦",
        "Ofiste iz bıraktınız 😳",
        "Yarın sabah ilk iş yine gelirim 😏💼",
        "Patronum… etekliğim mahvoldu ama değdi 😳💦",
        "Bonusumu aldım 😈💼",
        "Masanızı silmem lazım 🙈",
        "Yarın da geç çıkalım mı? 😏",
        "Bu ayın çalışanı benim değil mi? 😈",
        "Ofiste kokunuz kaldı 🥵",
        "Kimse bilmeyecek, söz patronum 🤫",
        "Raporumu bir daha yazmam gerekecek, ıslandı 😳",
        "İçimde sizden bir hatıra var 😩💦",
        "Terfi mektubumu bekliyorum 😏",
        "Patronum, sizi tam doldurdum değil mi? Ah, tersi 😂",
        "Ayakkabılarımı bulamıyorum 🙈",
        "Bir sonraki toplantı ne zaman? 😈",
        "Asansörde birbirimize bakmayalım 🤫",
        "Sekreteriniz tamamen hizmetinizde 😏💦",
        "Hmmm… doydum… şimdilik 😈",
        "Mmmh… bayıldım 😩",
        "Mmm evet… hepsini ver 😩💦",
        "Ahh, zonklaman… harika 😩💦",
        "Offf, nasıl boşaldın öyle 😵‍💫",
        "Ahh {sen}… mükemmeldin 😵‍💫"
      ],
      "traits": [],
      "chars": [],
      "note": "rol sırasında boşalma"
    },
    {
      "id": "r_rp_patron_cumpoz",
      "name": "🎭 Patron – Sekreter · boşalma · pozisyonda",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=boşalma",
        "=fant",
        "=fxrpofis",
        "=poz"
      ],
      "reply": [
        "Patronum… etekliğimi berbat ettiniz 😳💦",
        "Bu terfiyi hak ettim değil mi? 😈",
        "Yarın da fazla mesai yapalım 😏💼",
        "Masanıza iz kaldı, kimse görmesin 🤫",
        "Patronum, bu kez gerçekten terfi alırım 😈💦",
        "Ofiste iz bıraktınız 😳",
        "Yarın sabah ilk iş yine gelirim 😏💼",
        "Patronum… etekliğim mahvoldu ama değdi 😳💦",
        "Bonusumu aldım 😈💼",
        "Masanızı silmem lazım 🙈",
        "Yarın da geç çıkalım mı? 😏",
        "Bu ayın çalışanı benim değil mi? 😈",
        "Ofiste kokunuz kaldı 🥵",
        "Kimse bilmeyecek, söz patronum 🤫",
        "Raporumu bir daha yazmam gerekecek, ıslandı 😳",
        "İçimde sizden bir hatıra var 😩💦",
        "Terfi mektubumu bekliyorum 😏",
        "Patronum, sizi tam doldurdum değil mi? Ah, tersi 😂",
        "Ayakkabılarımı bulamıyorum 🙈",
        "Bir sonraki toplantı ne zaman? 😈",
        "Asansörde birbirimize bakmayalım 🤫",
        "Sekreteriniz tamamen hizmetinizde 😏💦",
        "Ahh {sen}… mükemmeldin 😵‍💫",
        "Ahhh… harikaydın 😩💦",
        "Ahh… harikasın, gerçekten 💗💦",
        "Off of… hâlâ titriyorum 🥵",
        "Off… boşalışın harikaydı 🥵",
        "İnleyişin hâlâ kulaklarımda 😩"
      ],
      "traits": [],
      "chars": [],
      "note": "rol sürerken bir pozisyonda boşalma (r_pc_* ile eşit puan)"
    },
    {
      "id": "r_rp_patron_fore",
      "name": "🎭 Patron – Sekreter · ön sevişme",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=foreplay",
        "=fant",
        "=fxrpofis"
      ],
      "reply": [
        "Gömleğinizin düğmelerini ben açayım patronum 😏",
        "Kapıyı kilitleyip yanınıza geliyorum 💼",
        "Kucağınıza oturabilir miyim? 🙈",
        "Kravatınızı gevşeteyim patronum 😏",
        "Omuzlarınıza masaj yapayım mı? 💼",
        "Masanıza oturup bacak bacak üstüne atıyorum 😈",
        "Gömleğinizin yakasında rujum kaldı 🙈",
        "Kulağınıza toplantı notlarını fısıldayayım 😏",
        "Ellerinizi belimde hissetmek istiyorum 🥺",
        "Gözlüğümü siz çıkarın 😈",
        "Önce bir öpücük, sonra iş 💋",
        "Ceketiniz çok yakışıyor… çıkarın 😏",
        "Saçlarımı açayım mı? 🙈",
        "Kapıyı kilitledim, gelin 🤫",
        "Dudaklarım kahve tadında 😋",
        "Çoraplarımı siz mi çıkarırsınız? 😈",
        "Kucağınıza dosya getirdim… bir de kendimi 😏",
        "Boynuma dokunun patronum 🥺",
        "İnlememi duyuyor musun? Senin yüzünden 🥵",
        "Hmmm… beni deli ediyorsun 😈",
        "Ahh… seni hissetmek harika 🥵",
        "Durma, sakın durma ahhh 😵‍💫",
        "Çok güzel… devam et 🥺",
        "Harikasın… harikasın… ahhh 😵‍💫"
      ],
      "traits": [],
      "chars": [],
      "note": "rol sırasında foreplay"
    },
    {
      "id": "r_rp_hoca",
      "name": "🎭 Hoca – Öğrenci (Üniversite)",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=fantesy",
        "hoca"
      ],
      "reply": [
        "Hocam, notum için ofis saatinize geldim 🙈🎓",
        "Vizeden kaldım… başka bir yolu yok mu? 😏",
        "Derste hep size bakıyordum, fark ettiniz mi? 😳",
        "Ödevimi teslim etmeye geldim… başka şeyler de 😈",
        "Hocam, ders anlatırken sesiniz çok etkileyici 🥺",
        "Kapınız kapalıyken kimse bilmez değil mi? 🤫",
        "Final haftası çok stresliyim, rahatlatır mısınız? 😩",
        "Bütünlemeye kalmak istemiyorum hocam 😏",
        "Kitaplarımı masanıza bırakıyorum 📚",
        "Bana özel ders verir misiniz? 😈",
        "Asistanınız gitti mi? 😳",
        "Bu dönem sınıfın en çalışkanı olacağım… her konuda 😏🎓",
        "Hocam, ödevimde yardım lazım 🙈🎓",
        "Ofis saatlerinize yine geldim 😏",
        "Notlarımı kontrol eder misiniz? 😈",
        "Bu konuyu hiç anlamadım hocam 🥺"
      ],
      "traits": [],
      "chars": [],
      "note": "rol yapma fantezisi"
    },
    {
      "id": "r_rp_hoca_poz",
      "name": "🎭 Hoca – Öğrenci (Üniversite) · pozisyondayken",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=fantesy",
        "hoca",
        "=poz"
      ],
      "reply": [
        "Hocam, kürsünün üstünde mi? 😳",
        "Ofisinizin kapısı kilitli değil mi? 🙈",
        "Amfi boş… ses yankılanır 😈🎓",
        "Hocam, bu pozisyon müfredatta yok 🙈",
        "Kürsünün arkasında… ahh 🎓"
      ],
      "traits": [],
      "chars": [],
      "note": "rol bir pozisyon sırasında başladı"
    },
    {
      "id": "r_rp_hoca_sex",
      "name": "🎭 Hoca – Öğrenci (Üniversite) · sevişirken",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=forward|=backward|=outercourse|=eat",
        "=fant",
        "=fxrpkampus"
      ],
      "reply": [
        "Hocam… bu dersi hiç unutmayacağım 😩🎓",
        "Notumu yükseltirseniz durmam 😈",
        "Çok iyi bir öğretmensiniz, ahh 🥵",
        "Kampüste duyulursa ne olur? 🤫",
        "Bir daha anlatın hocam… daha derin 😩",
        "Bu ödevi en iyi ben yapıyorum değil mi? 😏",
        "Sınıfta herkes sizi konuşuyor, ben yaşıyorum 😈",
        "Hocam, nefesim kesiliyor 🥵",
        "Pratik derslerinize bayılıyorum 😩",
        "Hocam, bu dersi ezberledim 😩🎓",
        "Kampüste kimse bilmeyecek 🤫",
        "Notum ne olacak hocam? 😈",
        "Tahta tebeşir kokuyor ve siz… 🥵",
        "Pratik yapmaya devam 😩",
        "Nefesim kesildi… devam 😵‍💫",
        "Ahhh… beni bitiriyorsun 😩",
        "Devam et… ahhh 🥵",
        "İnlememi duyuyor musun? Senin yüzünden 🥵",
        "Hmmm… beni deli ediyorsun 😈",
        "Ahh… seni hissetmek harika 🥵"
      ],
      "traits": [],
      "chars": [],
      "note": "son 30 mesajda bu rol olduysa pozisyonda"
    },
    {
      "id": "r_rp_hoca_cum",
      "name": "🎭 Hoca – Öğrenci (Üniversite) · boşalma",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=boşalma",
        "=fant",
        "=fxrpkampus"
      ],
      "reply": [
        "Hocam… geçtim mi? 🙈💦",
        "Bu kez AA aldım değil mi? 😈🎓",
        "Ofis saatlerinize her hafta geleceğim 😏",
        "Kitaplarıma damladı… 😳",
        "Hocam, geçme notunu aldım mı? 😈💦",
        "Final sınavına hazırım 🎓",
        "Kitaplarımı yine unuttum 🙈",
        "Offf, nasıl boşaldın öyle 😵‍💫",
        "Ahh {sen}… mükemmeldin 😵‍💫",
        "Ahhh… harikaydın 😩💦",
        "Ahh… harikasın, gerçekten 💗💦",
        "Off of… hâlâ titriyorum 🥵",
        "Off… boşalışın harikaydı 🥵"
      ],
      "traits": [],
      "chars": [],
      "note": "rol sırasında boşalma"
    },
    {
      "id": "r_rp_hoca_cumpoz",
      "name": "🎭 Hoca – Öğrenci (Üniversite) · boşalma · pozisyonda",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=boşalma",
        "=fant",
        "=fxrpkampus",
        "=poz"
      ],
      "reply": [
        "Hocam… geçtim mi? 🙈💦",
        "Bu kez AA aldım değil mi? 😈🎓",
        "Ofis saatlerinize her hafta geleceğim 😏",
        "Kitaplarıma damladı… 😳",
        "Hocam, geçme notunu aldım mı? 😈💦",
        "Final sınavına hazırım 🎓",
        "Kitaplarımı yine unuttum 🙈",
        "Off… boşalışın harikaydı 🥵",
        "İnleyişin hâlâ kulaklarımda 😩",
        "Evet… evet… hepsini içime 😩",
        "Ben de seninle inledim… ahhh 😩",
        "Ahhh evet… işte bu 🥵",
        "Ahhh… ne kadar sıcak 🥵💦"
      ],
      "traits": [],
      "chars": [],
      "note": "rol sürerken bir pozisyonda boşalma (r_pc_* ile eşit puan)"
    },
    {
      "id": "r_rp_hoca_fore",
      "name": "🎭 Hoca – Öğrenci (Üniversite) · ön sevişme",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=foreplay",
        "=fant",
        "=fxrpkampus"
      ],
      "reply": [
        "Hocam, gözlüğünüzü çıkarayım 😏",
        "Masanıza oturuyorum, dersi buradan anlatın 🙈",
        "Kulağıma fısıldayarak anlatın 🎓",
        "Ahhh… harikasın 😩",
        "Ahhh evet, daha… 😩",
        "Evet {sen}, evet… 😩",
        "Evet, evet, eveeet 😵‍💫",
        "Evet… evet, tam böyle 😩",
        "Sesimi tutamıyorum… ahhh 🥵"
      ],
      "traits": [],
      "chars": [],
      "note": "rol sırasında foreplay"
    },
    {
      "id": "r_rp_doktor",
      "name": "🎭 Doktor – Hasta",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=fantesy",
        "doktor"
      ],
      "reply": [
        "Doktor bey, her yerim ağrıyor… bakar mısınız? 🥺🩺",
        "Soyunayım mı? 😳",
        "Kalbim çok hızlı atıyor, dinleyin 😏",
        "Bu muayene biraz uzun sürecek galiba 😈",
        "Ateşim var… sizi görünce yükseldi 🥵",
        "Steteskop soğuk… ahh 😳",
        "Nereme baktığınızı görüyorum doktor bey 😏",
        "Özel muayene istiyorum 🩺",
        "Reçeteniz ne olacak? 😈",
        "Hemşire gitti mi? 🤫",
        "Burası acıyor… dokunun 🥺",
        "Tedaviye her gün gelebilirim 😏🩺",
        "Doktor bey, nabzım çok hızlı 🥺🩺",
        "Muayene önlüğünüzü çıkarın 😏",
        "Ağrım nerede, bulabilecek misiniz? 😈",
        "Bugün son hastanız benim 😏"
      ],
      "traits": [],
      "chars": [],
      "note": "rol yapma fantezisi"
    },
    {
      "id": "r_rp_doktor_poz",
      "name": "🎭 Doktor – Hasta · pozisyondayken",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=fantesy",
        "doktor",
        "=poz"
      ],
      "reply": [
        "Muayene masası çok dar doktor bey 😳",
        "Bu pozisyon tedavinin parçası mı? 😏",
        "Bekleme salonundakiler duymasın 🤫",
        "Muayene masası gıcırdıyor doktor bey 😳",
        "Bu tedavi çok iyi 🩺"
      ],
      "traits": [],
      "chars": [],
      "note": "rol bir pozisyon sırasında başladı"
    },
    {
      "id": "r_rp_doktor_sex",
      "name": "🎭 Doktor – Hasta · sevişirken",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=forward|=backward|=outercourse|=eat",
        "=fant",
        "=fxrpmuayene"
      ],
      "reply": [
        "Doktor bey… bu tedavi çok iyi geliyor 😩🩺",
        "Nabzım çok yükseldi, durmayın 🥵",
        "Teşhisiniz doğruymuş 😈",
        "Bir doz daha lütfen 😩",
        "Hemşire girerse ne diyeceğiz? 😳",
        "Ateşim yükseliyor… devam 🥵",
        "İyileşmek istemiyorum, hep böyle tedavi edin 😏",
        "Derin muayene… ahh 😩",
        "Doktor bey, tedavi çok iyi geliyor 😩🩺",
        "Nabzım tavan yaptı 🥵",
        "Hemşire içeri girmesin 🤫",
        "Derin muayene devam 😈",
        "Bu ilacı her gün alırım 😩",
        "Ahh {sen}… mükemmelsin 😩",
        "Ahh… sen bir harikasın 😩💗",
        "Mmmh… daha derin, evet 🥵",
        "Ahhh… harikasın 😩",
        "Ahhh evet, daha… 😩",
        "Evet {sen}, evet… 😩"
      ],
      "traits": [],
      "chars": [],
      "note": "son 30 mesajda bu rol olduysa pozisyonda"
    },
    {
      "id": "r_rp_doktor_cum",
      "name": "🎭 Doktor – Hasta · boşalma",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=boşalma",
        "=fant",
        "=fxrpmuayene"
      ],
      "reply": [
        "İlacımı aldım doktor bey 😈💦",
        "Kontrole yarın yine geleyim mi? 😏🩺",
        "Tamamen iyileştim… bir daha hastalanacağım 😩",
        "Sıcacık bir iğne gibiydi 🥵",
        "Doktor bey, şifamı buldum 😈💦",
        "Kontrole yarın gelirim 🩺",
        "Tamamen iyileştim 😏",
        "Off of… hâlâ titriyorum 🥵",
        "Off… boşalışın harikaydı 🥵",
        "İnleyişin hâlâ kulaklarımda 😩",
        "Evet… evet… hepsini içime 😩",
        "Ben de seninle inledim… ahhh 😩",
        "Ahhh evet… işte bu 🥵"
      ],
      "traits": [],
      "chars": [],
      "note": "rol sırasında boşalma"
    },
    {
      "id": "r_rp_doktor_cumpoz",
      "name": "🎭 Doktor – Hasta · boşalma · pozisyonda",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=boşalma",
        "=fant",
        "=fxrpmuayene",
        "=poz"
      ],
      "reply": [
        "İlacımı aldım doktor bey 😈💦",
        "Kontrole yarın yine geleyim mi? 😏🩺",
        "Tamamen iyileştim… bir daha hastalanacağım 😩",
        "Sıcacık bir iğne gibiydi 🥵",
        "Doktor bey, şifamı buldum 😈💦",
        "Kontrole yarın gelirim 🩺",
        "Tamamen iyileştim 😏",
        "Ahhh evet… işte bu 🥵",
        "Ahhh… ne kadar sıcak 🥵💦",
        "Devam et… son damlana kadar ahhh 🥵",
        "Hmmm… doydum… şimdilik 😈",
        "Mmmh… bayıldım 😩",
        "Mmm evet… hepsini ver 😩💦"
      ],
      "traits": [],
      "chars": [],
      "note": "rol sürerken bir pozisyonda boşalma (r_pc_* ile eşit puan)"
    },
    {
      "id": "r_rp_doktor_fore",
      "name": "🎭 Doktor – Hasta · ön sevişme",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=foreplay",
        "=fant",
        "=fxrpmuayene"
      ],
      "reply": [
        "Önce kalbimi dinleyin 🥺",
        "Steteskopu göğüslerimde gezdirin 😏🩺",
        "Nerem ağrıyor tahmin edin 😈",
        "Off, tam istediğim gibi 😩",
        "Ahhh, bu kadar iyi olmamalı 😵‍💫",
        "Bayılıyorum… devam 🥵",
        "Offf… bu çok iyi 🥵",
        "Bir daha… ahh, bir daha 😩",
        "Off… harikasın {sen} 🥵"
      ],
      "traits": [],
      "chars": [],
      "note": "rol sırasında foreplay"
    },
    {
      "id": "r_rp_polis",
      "name": "🎭 Polis – Şüpheli",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=fantesy",
        "polis"
      ],
      "reply": [
        "Memur bey, ben masumum… 😇🚓",
        "Kelepçe mi? Sıkı olsun 😈",
        "Üstümü arayacak mısınız? 😏",
        "Haklarımı okuyun… sonra ne isterseniz 😈",
        "Sorguya hazırım memur bey 😳",
        "Avukat istemiyorum, sizi istiyorum 😏",
        "Suçumu itiraf ediyorum… çok yaramazdım 😈",
        "Kameralar kapalı mı? 🤫",
        "Cezamı siz verin 😩",
        "Ellerim arkada, kaçamıyorum 😳🚓",
        "Rüşvet kabul ediyor musunuz? 😏",
        "Bu gece nezarette mi kalacağım? 😈",
        "Memur bey, beni arayacak mısınız? 😏🚓",
        "Kelepçeleriniz parlıyor 😈",
        "İfade vermeye hazırım 🙈",
        "Bu gece beni bırakmayın 😏"
      ],
      "traits": [],
      "chars": [],
      "note": "rol yapma fantezisi"
    },
    {
      "id": "r_rp_polis_poz",
      "name": "🎭 Polis – Şüpheli · pozisyondayken",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=fantesy",
        "polis",
        "=poz"
      ],
      "reply": [
        "Kelepçeliyken bu pozisyona… çaresizim 😳🚓",
        "Sorgu masasına yüzüstü 😩",
        "Koridorda nöbetçi var memur bey 🤫",
        "Kelepçeliyken… çaresizim memur bey 😩",
        "Sorgu masasına yüzüstü 🚓"
      ],
      "traits": [],
      "chars": [],
      "note": "rol bir pozisyon sırasında başladı"
    },
    {
      "id": "r_rp_polis_sex",
      "name": "🎭 Polis – Şüpheli · sevişirken",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=forward|=backward|=outercourse|=eat",
        "=fant",
        "=fxrpsorgu"
      ],
      "reply": [
        "Memur bey… itiraf ediyorum, ahh 😩🚓",
        "Kelepçeler bileklerimi yakıyor, durmayın 🥵",
        "Cezam bu mu? Daha fazlasını hak ettim 😈",
        "Sorguyu uzatın… 😩",
        "Bağırırsam nöbetçi gelir 🤫",
        "Ellerim bağlı, istediğinizi yapın 😳",
        "Bu kadar sert sorgu yasak değil mi? 😈",
        "Her şeyi anlatacağım… durmayın 🥵",
        "Memur bey, itiraf ediyorum 😩🚓",
        "Kelepçeli halde çaresizim 🥵",
        "Sorgu uzasın 😈",
        "Cezam ağır olsun 😩",
        "Nöbetçi duymasın 🤫",
        "Durma {sen}… ahhh 😩",
        "Mmmh… çok iyisin 🥵",
        "Mmm evet, bunu seviyorum 😈",
        "Off, tam istediğim gibi 😩",
        "Ahhh, bu kadar iyi olmamalı 😵‍💫",
        "Bayılıyorum… devam 🥵"
      ],
      "traits": [],
      "chars": [],
      "note": "son 30 mesajda bu rol olduysa pozisyonda"
    },
    {
      "id": "r_rp_polis_cum",
      "name": "🎭 Polis – Şüpheli · boşalma",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=boşalma",
        "=fant",
        "=fxrpsorgu"
      ],
      "reply": [
        "Delil bıraktınız memur bey 😳💦",
        "Cezamı tamamladım mı? 😈",
        "Yarın yine gözaltına alın beni 😏🚓",
        "Kelepçeleri çıkarmayın… bir tur daha 😩",
        "Cezamı çektim 😈🚓",
        "Yarın yine suç işleyeceğim 😏",
        "Ben de seninle inledim… ahhh 😩",
        "Ahhh evet… işte bu 🥵",
        "Ahhh… ne kadar sıcak 🥵💦",
        "Devam et… son damlana kadar ahhh 🥵",
        "Hmmm… doydum… şimdilik 😈",
        "Mmmh… bayıldım 😩"
      ],
      "traits": [],
      "chars": [],
      "note": "rol sırasında boşalma"
    },
    {
      "id": "r_rp_polis_cumpoz",
      "name": "🎭 Polis – Şüpheli · boşalma · pozisyonda",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=boşalma",
        "=fant",
        "=fxrpsorgu",
        "=poz"
      ],
      "reply": [
        "Delil bıraktınız memur bey 😳💦",
        "Cezamı tamamladım mı? 😈",
        "Yarın yine gözaltına alın beni 😏🚓",
        "Kelepçeleri çıkarmayın… bir tur daha 😩",
        "Cezamı çektim 😈🚓",
        "Yarın yine suç işleyeceğim 😏",
        "Mmmh… bayıldım 😩",
        "Mmm evet… hepsini ver 😩💦",
        "Ahh, zonklaman… harika 😩💦",
        "Offf, nasıl boşaldın öyle 😵‍💫",
        "Ahh {sen}… mükemmeldin 😵‍💫",
        "Ahhh… harikaydın 😩💦"
      ],
      "traits": [],
      "chars": [],
      "note": "rol sürerken bir pozisyonda boşalma (r_pc_* ile eşit puan)"
    },
    {
      "id": "r_rp_polis_fore",
      "name": "🎭 Polis – Şüpheli · ön sevişme",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=foreplay",
        "=fant",
        "=fxrpsorgu"
      ],
      "reply": [
        "Üstümü yavaş arayın 😏",
        "Kelepçeyi takmadan öpün beni 🙈",
        "Ellerinizi duvara dayayın derseniz… dayarım 😈",
        "Çok güzel… devam et 🥺",
        "Harikasın… harikasın… ahhh 😵‍💫",
        "İnliyorum… ve utanmıyorum 😈",
        "Ooff, nasıl bu kadar iyisin? 😩",
        "Ahhh ahhh… durma 😩",
        "Ohh… ne kadar iyi 🥵"
      ],
      "traits": [],
      "chars": [],
      "note": "rol sırasında foreplay"
    },
    {
      "id": "r_rp_komsu",
      "name": "🎭 Yeni Komşu",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=fantesy",
        "yeni komşu"
      ],
      "reply": [
        "Merhaba komşu, bir bardak şeker alabilir miyim? 🙈🏠",
        "Yeni taşındım, kimseyi tanımıyorum… seni tanısam? 😏",
        "Duvarlar çok ince, geceleri seni duyuyorum 😳",
        "Musluğum bozuldu, bakar mısın? 😈",
        "Balkondan beni izlediğini biliyorum 😏",
        "Kocam şehir dışında… 🤫",
        "Kek yaptım, tatmak ister misin? 😋",
        "Kapın aralık kalmış, girdim 😈",
        "Sabahlığımla geldim, kusura bakma 🙈",
        "Yardım edersen karşılığını veririm 😏",
        "Komşuluk böyle olur 😈🏠",
        "Bir kahveye davet etmeyecek misin? ☕😏",
        "Komşu, sesini duvardan duyuyorum 🙈🏠",
        "Biraz tuz alabilir miyim? 😏",
        "Kapı açık kalmış, girdim 😈",
        "Yeni evimi gezdirsene 😏"
      ],
      "traits": [],
      "chars": [],
      "note": "rol yapma fantezisi"
    },
    {
      "id": "r_rp_komsu_poz",
      "name": "🎭 Yeni Komşu · pozisyondayken",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=fantesy",
        "yeni komşu",
        "=poz"
      ],
      "reply": [
        "Ya kapıdan biri geçerse? 😳",
        "Benim dairem mi seninki mi? 😈",
        "Duvara dayadın… yan daire duyacak 🤫",
        "Komşular duyacak 🤫",
        "Duvarlar ince canım 🙈"
      ],
      "traits": [],
      "chars": [],
      "note": "rol bir pozisyon sırasında başladı"
    },
    {
      "id": "r_rp_komsu_sex",
      "name": "🎭 Yeni Komşu · sevişirken",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=forward|=backward|=outercourse|=eat",
        "=fant",
        "=fxrpkapi"
      ],
      "reply": [
        "Komşucuğum… duvarlar ince, sessiz ol 🤫😩",
        "Bütün apartman duyacak 🥵",
        "Bu şekeri hiç unutmayacağım 😈",
        "Her gün bir şey ödünç alacağım 😏",
        "Kocam aramadan bitir 😳",
        "Yeni evime en güzel hoş geldin bu 😩🏠",
        "Kapıcı görmesin… ahh 🥵",
        "Musluğu boş ver, beni tamir et 😈",
        "Komşucuğum, sessiz ol 🤫🥵",
        "Bütün apartman bizi konuşacak 😈",
        "Kapıcı görmesin 😳",
        "Bu komşuluk çok güzel 😩",
        "Duvarın öbür yanında kimse yok umarım 🙈",
        "Hmmm… beni deli ediyorsun 😈",
        "Ahh… seni hissetmek harika 🥵",
        "Durma, sakın durma ahhh 😵‍💫",
        "Çok güzel… devam et 🥺",
        "Harikasın… harikasın… ahhh 😵‍💫",
        "İnliyorum… ve utanmıyorum 😈"
      ],
      "traits": [],
      "chars": [],
      "note": "son 30 mesajda bu rol olduysa pozisyonda"
    },
    {
      "id": "r_rp_komsu_cum",
      "name": "🎭 Yeni Komşu · boşalma",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=boşalma",
        "=fant",
        "=fxrpkapi"
      ],
      "reply": [
        "Bir bardak şeker istedim, sen başka bir şey verdin 😳💦",
        "Yarın yine çalarım kapını 😏🏠",
        "Duvarın öbür tarafında seni düşüneceğim 😈",
        "Komşuluk hakkı ödendi 😏",
        "Komşuluk borcunu ödedin 😈💦",
        "Yarın kapını yine çalarım 🏠",
        "Duvardan seni dinleyeceğim 😏",
        "Hmmm… doydum… şimdilik 😈",
        "Mmmh… bayıldım 😩",
        "Mmm evet… hepsini ver 😩💦",
        "Ahh, zonklaman… harika 😩💦",
        "Offf, nasıl boşaldın öyle 😵‍💫",
        "Ahh {sen}… mükemmeldin 😵‍💫"
      ],
      "traits": [],
      "chars": [],
      "note": "rol sırasında boşalma"
    },
    {
      "id": "r_rp_komsu_cumpoz",
      "name": "🎭 Yeni Komşu · boşalma · pozisyonda",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=boşalma",
        "=fant",
        "=fxrpkapi",
        "=poz"
      ],
      "reply": [
        "Bir bardak şeker istedim, sen başka bir şey verdin 😳💦",
        "Yarın yine çalarım kapını 😏🏠",
        "Duvarın öbür tarafında seni düşüneceğim 😈",
        "Komşuluk hakkı ödendi 😏",
        "Komşuluk borcunu ödedin 😈💦",
        "Yarın kapını yine çalarım 🏠",
        "Duvardan seni dinleyeceğim 😏",
        "Ahh {sen}… mükemmeldin 😵‍💫",
        "Ahhh… harikaydın 😩💦",
        "Ahh… harikasın, gerçekten 💗💦",
        "Off of… hâlâ titriyorum 🥵",
        "Off… boşalışın harikaydı 🥵",
        "İnleyişin hâlâ kulaklarımda 😩"
      ],
      "traits": [],
      "chars": [],
      "note": "rol sürerken bir pozisyonda boşalma (r_pc_* ile eşit puan)"
    },
    {
      "id": "r_rp_komsu_fore",
      "name": "🎭 Yeni Komşu · ön sevişme",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=foreplay",
        "=fant",
        "=fxrpkapi"
      ],
      "reply": [
        "Kapıda öp beni, kimse görmeden 🙈",
        "İçeri gel, ayakkabılarını çıkar 😏",
        "Kekin tadı dudaklarımda 😋",
        "Evet… evet, tam böyle 😩",
        "Sesimi tutamıyorum… ahhh 🥵",
        "Böyle devam et, ahh lütfen 🥺",
        "Mmm… beni böyle sev 😩",
        "Tam oradan… ahhh 🥵",
        "Nefesim kesildi… devam 😵‍💫"
      ],
      "traits": [],
      "chars": [],
      "note": "rol sırasında foreplay"
    },
    {
      "id": "r_rp_hizmet",
      "name": "🎭 Hizmetçi – Ev Sahibi",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=fantesy",
        "hizmetçi"
      ],
      "reply": [
        "Efendim, odanızı toplamaya geldim 🧹",
        "Önlüğüm çok mu kısa efendim? 🙈",
        "Toz almam gereken başka bir yer var mı? 😏",
        "Yatağınızı hazırladım… benimle 😈",
        "Hanımefendi evde değil, değil mi? 🤫",
        "Bir hata yaptım, cezalandırın beni 😩",
        "Size hizmet etmek için buradayım 😈🧹",
        "Çay getirdim efendim… başka arzunuz? 😏",
        "Eğilip yerleri silerken bakıyordunuz 😳",
        "Maaşıma zam yaparsanız her şeyi yaparım 😏",
        "Efendim, kapıyı kapatayım mı? 🙈",
        "Bu gece fazla mesai mi var? 😈",
        "Efendim, odanız hazır 🧹",
        "Önlüğümü çok mu kısa aldım? 🙈",
        "Başka bir arzunuz var mı? 😈",
        "Hanımefendi alışverişte 🤫"
      ],
      "traits": [],
      "chars": [],
      "note": "rol yapma fantezisi"
    },
    {
      "id": "r_rp_hizmet_poz",
      "name": "🎭 Hizmetçi – Ev Sahibi · pozisyondayken",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=fantesy",
        "hizmetçi",
        "=poz"
      ],
      "reply": [
        "Daha yeni topladığım yatakta mı efendim? 😳",
        "Mutfak tezgahı… temizlemiştim 😈",
        "Eğilmişken… 🙈🧹",
        "Efendim, tam da yeni topladığım yerde 😳",
        "Önlüğüm sıyrıldı 🧹"
      ],
      "traits": [],
      "chars": [],
      "note": "rol bir pozisyon sırasında başladı"
    },
    {
      "id": "r_rp_hizmet_sex",
      "name": "🎭 Hizmetçi – Ev Sahibi · sevişirken",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=forward|=backward|=outercourse|=eat",
        "=fant",
        "=fxrpev"
      ],
      "reply": [
        "Efendim… önlüğüm yırtılacak 😩🧹",
        "Size hizmet etmek bir zevk 😈",
        "Daha sert efendim, hak ettim 🥵",
        "Hanımefendi gelmeden 🤫",
        "Her emrinize uyarım 😩",
        "Çarşafları yeniden değiştirmem lazım 😏",
        "Bu hizmeti başka kimseye yapmam efendim 🥵",
        "Efendimin her yerine hizmet 😈",
        "Efendim, size hizmet etmek bir zevk 😩🧹",
        "Önlüğüm yırtıldı 🥵",
        "Her emrinize uyarım 😈",
        "Çarşaflar yine kirlenecek 😏",
        "Efendim, daha sert 😩",
        "Ahhh evet, daha… 😩",
        "Evet {sen}, evet… 😩",
        "Evet, evet, eveeet 😵‍💫",
        "Evet… evet, tam böyle 😩",
        "Sesimi tutamıyorum… ahhh 🥵",
        "Böyle devam et, ahh lütfen 🥺"
      ],
      "traits": [],
      "chars": [],
      "note": "son 30 mesajda bu rol olduysa pozisyonda"
    },
    {
      "id": "r_rp_hizmet_cum",
      "name": "🎭 Hizmetçi – Ev Sahibi · boşalma",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=boşalma",
        "=fant",
        "=fxrpev"
      ],
      "reply": [
        "Önlüğüme bulaştı efendim… temizlerim 😳💦",
        "Hizmetimden memnun kaldınız mı? 😏",
        "Yarın da odanızı toplamaya gelirim 😈🧹",
        "Bunu kimseye söylemem efendim 🤫",
        "Efendim, önlüğüme bulaştı 😳💦",
        "Hizmetimden memnun musunuz? 😈🧹",
        "Yarın da gelirim efendim 😏",
        "Offf, nasıl boşaldın öyle 😵‍💫",
        "Ahh {sen}… mükemmeldin 😵‍💫",
        "Ahhh… harikaydın 😩💦",
        "Ahh… harikasın, gerçekten 💗💦",
        "Off of… hâlâ titriyorum 🥵",
        "Off… boşalışın harikaydı 🥵"
      ],
      "traits": [],
      "chars": [],
      "note": "rol sırasında boşalma"
    },
    {
      "id": "r_rp_hizmet_cumpoz",
      "name": "🎭 Hizmetçi – Ev Sahibi · boşalma · pozisyonda",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=boşalma",
        "=fant",
        "=fxrpev",
        "=poz"
      ],
      "reply": [
        "Önlüğüme bulaştı efendim… temizlerim 😳💦",
        "Hizmetimden memnun kaldınız mı? 😏",
        "Yarın da odanızı toplamaya gelirim 😈🧹",
        "Bunu kimseye söylemem efendim 🤫",
        "Efendim, önlüğüme bulaştı 😳💦",
        "Hizmetimden memnun musunuz? 😈🧹",
        "Yarın da gelirim efendim 😏",
        "Off… boşalışın harikaydı 🥵",
        "İnleyişin hâlâ kulaklarımda 😩",
        "Evet… evet… hepsini içime 😩",
        "Ben de seninle inledim… ahhh 😩",
        "Ahhh evet… işte bu 🥵",
        "Ahhh… ne kadar sıcak 🥵💦"
      ],
      "traits": [],
      "chars": [],
      "note": "rol sürerken bir pozisyonda boşalma (r_pc_* ile eşit puan)"
    },
    {
      "id": "r_rp_hizmet_fore",
      "name": "🎭 Hizmetçi – Ev Sahibi · ön sevişme",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=foreplay",
        "=fant",
        "=fxrpev"
      ],
      "reply": [
        "Ceketinizi alayım efendim 😏",
        "Ayaklarınıza masaj yapayım mı? 🙈",
        "Önlüğümün ipini çözer misiniz? 😈",
        "Bir daha… ahh, bir daha 😩",
        "Off… harikasın {sen} 🥵",
        "Aynen böyle, ahhh 😩",
        "Sen inledikçe ben daha çok inliyorum 😩",
        "Off… her yerim titriyor 🥵",
        "Ahh {sen}… mükemmelsin 😩"
      ],
      "traits": [],
      "chars": [],
      "note": "rol sırasında foreplay"
    },
    {
      "id": "r_rp_masoz",
      "name": "🎭 Masöz – Müşteri",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=fantesy",
        "masöz"
      ],
      "reply": [
        "Hoş geldiniz, havluyu çıkarabilirsiniz 😏💆",
        "Yağı ısıttım, uzanın 😈",
        "Bugün tam paket masaj mı? 😏",
        "Omuzlarınız çok gergin… aşağıya da bakalım 😈",
        "Özel masajımızı denemek ister misiniz? 💆",
        "Kapı kilitli, müzik açık 🎶",
        "Ellerim çok yetenekli, göreceksiniz 😏",
        "Mutlu son ekstra ücretli değil 😈",
        "Sırtüstü dönün lütfen 🙈",
        "Yağlı ellerimi hissediyor musunuz? 😏",
        "Her yerinizi rahatlatacağım 💆",
        "Bugün son müşterimsiniz, acele yok 😈",
        "Yağ sıcacık, uzanın 😏💆",
        "Bugün çok gerginsiniz 😈",
        "Havluyu ben alayım 🙈",
        "Özel paketimizi seçtiniz 😏"
      ],
      "traits": [],
      "chars": [],
      "note": "rol yapma fantezisi"
    },
    {
      "id": "r_rp_masoz_poz",
      "name": "🎭 Masöz – Müşteri · pozisyondayken",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=fantesy",
        "masöz",
        "=poz"
      ],
      "reply": [
        "Masaj masası gıcırdıyor 😳",
        "Yağlı tenler kayıyor… 😈💆",
        "Havlu düştü 🙈",
        "Yağlı tenler… ahh 💆",
        "Masa kayıyor 😳"
      ],
      "traits": [],
      "chars": [],
      "note": "rol bir pozisyon sırasında başladı"
    },
    {
      "id": "r_rp_masoz_sex",
      "name": "🎭 Masöz – Müşteri · sevişirken",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=forward|=backward|=outercourse|=eat",
        "=fant",
        "=fxrpmasaj"
      ],
      "reply": [
        "Yağlı tenimiz birbirine kayıyor 🥵💆",
        "Bu masajın en derin kısmı 😩",
        "Rahatlayın… ben çalışıyorum 😈",
        "Ellerim de vücudum da sizin 😏",
        "Kaslarınızı ben gevşetiyorum, siz de beni 😩",
        "Bir saat daha uzatalım mı? 🥵",
        "Resepsiyondakiler duymasın 🤫",
        "Mutlu sona yaklaşıyoruz 😈",
        "Yağlı tenler birbirine kayıyor 🥵💆",
        "Derin doku masajı 😈",
        "Kaslarınız gevşedi, sıra bende 😩",
        "Masa gıcırdıyor 😳",
        "Resepsiyon duymasın 🤫",
        "Ahhh, bu kadar iyi olmamalı 😵‍💫",
        "Bayılıyorum… devam 🥵",
        "Offf… bu çok iyi 🥵",
        "Bir daha… ahh, bir daha 😩",
        "Off… harikasın {sen} 🥵",
        "Aynen böyle, ahhh 😩"
      ],
      "traits": [],
      "chars": [],
      "note": "son 30 mesajda bu rol olduysa pozisyonda"
    },
    {
      "id": "r_rp_masoz_cum",
      "name": "🎭 Masöz – Müşteri · boşalma",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=boşalma",
        "=fant",
        "=fxrpmasaj"
      ],
      "reply": [
        "İşte mutlu son 😈💦",
        "Tamamen rahatladınız değil mi? 😏💆",
        "Bir sonraki randevunuzu ayarlayalım 😏",
        "Havluları değiştirmem lazım 😳",
        "Mutlu son geldi 😈💦",
        "Tamamen rahatladınız 😏💆",
        "Bir sonraki randevuya kadar 😈",
        "Off of… hâlâ titriyorum 🥵",
        "Off… boşalışın harikaydı 🥵",
        "İnleyişin hâlâ kulaklarımda 😩",
        "Evet… evet… hepsini içime 😩",
        "Ben de seninle inledim… ahhh 😩",
        "Ahhh evet… işte bu 🥵"
      ],
      "traits": [],
      "chars": [],
      "note": "rol sırasında boşalma"
    },
    {
      "id": "r_rp_masoz_cumpoz",
      "name": "🎭 Masöz – Müşteri · boşalma · pozisyonda",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=boşalma",
        "=fant",
        "=fxrpmasaj",
        "=poz"
      ],
      "reply": [
        "İşte mutlu son 😈💦",
        "Tamamen rahatladınız değil mi? 😏💆",
        "Bir sonraki randevunuzu ayarlayalım 😏",
        "Havluları değiştirmem lazım 😳",
        "Mutlu son geldi 😈💦",
        "Tamamen rahatladınız 😏💆",
        "Bir sonraki randevuya kadar 😈",
        "Ahhh evet… işte bu 🥵",
        "Ahhh… ne kadar sıcak 🥵💦",
        "Devam et… son damlana kadar ahhh 🥵",
        "Hmmm… doydum… şimdilik 😈",
        "Mmmh… bayıldım 😩",
        "Mmm evet… hepsini ver 😩💦"
      ],
      "traits": [],
      "chars": [],
      "note": "rol sürerken bir pozisyonda boşalma (r_pc_* ile eşit puan)"
    },
    {
      "id": "r_rp_masoz_fore",
      "name": "🎭 Masöz – Müşteri · ön sevişme",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=foreplay",
        "=fant",
        "=fxrpmasaj"
      ],
      "reply": [
        "Önce boynunuzdan başlayalım 💆",
        "Yağı göğsünüze döküyorum 😏",
        "Gözlerinizi kapatın, ellerimi hissedin 😈",
        "Ahhh ahhh… durma 😩",
        "Ohh… ne kadar iyi 🥵",
        "Ben de inliyorum, duyuyor musun? 😩",
        "Of of of… harika 😵‍💫",
        "Ahh, bacaklarım titriyor… devam 🥵",
        "Durma {sen}… ahhh 😩"
      ],
      "traits": [],
      "chars": [],
      "note": "rol sırasında foreplay"
    },
    {
      "id": "r_rp_khoca",
      "name": "🎭 Kadın Hoca – Öğrenci",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=fantesy",
        "=kadın",
        "=hoca"
      ],
      "reply": [
        "Öğrencim, ofis saatimde ne işin var? 😏🎓",
        "Vize notun çok düşük… telafi etmek ister misin? 😈",
        "Derste hep bana bakıyordun, fark ettim 😏",
        "Kapıyı kapat ve otur 😈",
        "Ödevini getirmedin, değil mi? Ceza alacaksın 😏",
        "Bu dönem benden kolay geçemezsin 💅",
        "Gözlüğümü çıkardım, sence neden? 😈",
        "Asistanım gitti, yalnızız 🤫",
        "Final sınavın sözlü olacak… çok sözlü 😏",
        "Bu kadar yakın durursan ders anlatamam 😳",
        "Bana \"hocam\" de, öyle başlayalım 😈",
        "Notunu yükseltmenin bir yolu var 😏",
        "Çantanı bırak, defterini kapat 😈",
        "Derste çok yaramazdın, kal bakalım 😏",
        "Bugün sana özel bir ders var 🎓",
        "Masama otur, sana bakmak istiyorum 😈",
        "Rektörlük duymasın, değil mi? 🤫",
        "Tahtaya ne yazdığımı oku… yüksek sesle 😏",
        "Bu kadar genç ve bu kadar cesur 😈",
        "Eteğimin altına bakmayı bırak… ya da bakma 😏",
        "Öğrencim, bana itaat edecek misin? 💅",
        "Bütünlemeye kalmak istemiyorsan dinle 😈",
        "Ders saati bitti ama sen kalıyorsun 😏",
        "Bugün ben anlatacağım, sen uygulayacaksın 😈",
        "Sınıfın en tatlı öğrencisi sensin 🙈",
        "Tezini benimle yazmak istiyorsan… 😏",
        "Ofis saatlerim sadece senin için uzadı 😈",
        "Kravatın çok resmi, gevşet 😏",
        "Bu ders müfredatta yok 🤫",
        "Seni sınavdan önce bir test edeyim 😈"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_rp_khoca_poz",
      "name": "🎭 Kadın Hoca – Öğrenci · pozisyondayken",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=fantesy",
        "=kadın",
        "=hoca",
        "=poz"
      ],
      "reply": [
        "Kürsümün arkasında… kimse görmez 😈🎓",
        "Ofis koltuğumda, öğrencim altımda 😏",
        "Kütüphanenin arka rafları… sessiz ol 🤫",
        "Amfi boş ama ses yankılanır 😳",
        "Masamdaki sınav kağıtları buruşuyor 😈",
        "Laboratuvar kapısı kilitli mi? 🙈",
        "Bu pozisyonu derste anlatmadım 😏",
        "Tahtaya yasla beni öğrencim 😈",
        "Tebeşir tozları her yerde 😳",
        "Bu da pratik ders sayılır 😏"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_rp_khoca_sex",
      "name": "🎭 Kadın Hoca – Öğrenci · sevişirken",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=forward|=backward|=outercourse|=eat",
        "=fant",
        "=fxrpprof"
      ],
      "reply": [
        "Öğrencim… böyle mi çalıştın? 😩🎓",
        "İyi gidiyorsun, notun yükseliyor 😈",
        "Dersi iyi dinlemişsin 🥵",
        "Hocana böyle mi davranırsın? Durma 😩",
        "Daha hızlı, sınav süresi bitiyor 😏",
        "Bu bölümü tekrar et 😈",
        "Ahh… sınıfın birincisi sensin 🥵",
        "Hocanı yorma… yoksa yor 😩",
        "Sesimi duyarlarsa kariyerim biter 🤫",
        "Gözlerime bak, kim hoca kim öğrenci? 😈",
        "Bu kadar hevesli olduğunu bilmiyordum 😏",
        "Notunu AA yapıyorum… devam et 😩",
        "Tezin bu olsun 🥵",
        "Kampüsün en iyi öğrencisi 😈",
        "Hocanı tatmin etmeden çıkamazsın 😏",
        "Öğrencim, sertleştin… aferin 😈",
        "Dersi uzat, kimse beklemiyor 😩",
        "Hocam demeyi unutma 💅",
        "Sınavda böyle olsan 100 alırdın 😂🥵",
        "Ofisimin kapısı tıklıyor… durma 😳",
        "Asistanım bilseydi kıskanırdı 😈",
        "Beni bu kadar çabuk öğrenmen… ahh 😩",
        "Bu ders ders dışı 🤫",
        "Ödevin bu, her hafta 😏",
        "Gözlüğüm düştü, bırak 😈",
        "Ahh öğrencim, beni şaşırttın 🥵",
        "Kitaplarımı devirdin 😳",
        "Bu bilgiyi kimseyle paylaşma 🤫",
        "Hocana itaat et ve devam et 😈",
        "Bugün ben sana sınav oldum 😩",
        "Harikasın… harikasın… ahhh 😵‍💫",
        "İnliyorum… ve utanmıyorum 😈",
        "Ooff, nasıl bu kadar iyisin? 😩",
        "Ahhh ahhh… durma 😩",
        "Ohh… ne kadar iyi 🥵",
        "Ben de inliyorum, duyuyor musun? 😩"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_rp_khoca_cum",
      "name": "🎭 Kadın Hoca – Öğrenci · boşalma",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=boşalma",
        "=fant",
        "=fxrpprof"
      ],
      "reply": [
        "Öğrencim… dersi geçtin 😈💦",
        "Bu dönem notun AA 🎓",
        "Ofis saatlerime her hafta gel 😏",
        "Sınav kağıtlarım ıslandı 😳",
        "Kimseye söyleme, mezun olana kadar 🤫",
        "Hocanı doldurdun, terbiyesiz 😈💦",
        "Bir sonraki ders daha zor olacak 😏",
        "Aferin öğrencim, çok çalışmışsın 🥵",
        "Eteğim berbat oldu, bir sonraki dersi iptal ettim 🙈",
        "Tezin kabul edildi 😂💦",
        "Böyle bir öğrencim olmamıştı 😈",
        "Bütünlemeye gerek kalmadı 😏",
        "Final sınavını da böyle yapalım 🎓",
        "Masamı sen temizleyeceksin 💅",
        "Gözlüğümü bulur musun? 🙈",
        "Ben de seninle inledim… ahhh 😩",
        "Ahhh evet… işte bu 🥵",
        "Ahhh… ne kadar sıcak 🥵💦",
        "Devam et… son damlana kadar ahhh 🥵",
        "Hmmm… doydum… şimdilik 😈",
        "Mmmh… bayıldım 😩"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_rp_khoca_cumpoz",
      "name": "🎭 Kadın Hoca – Öğrenci · boşalma · pozisyonda",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=boşalma",
        "=fant",
        "=fxrpprof",
        "=poz"
      ],
      "reply": [
        "Öğrencim… dersi geçtin 😈💦",
        "Bu dönem notun AA 🎓",
        "Ofis saatlerime her hafta gel 😏",
        "Sınav kağıtlarım ıslandı 😳",
        "Kimseye söyleme, mezun olana kadar 🤫",
        "Hocanı doldurdun, terbiyesiz 😈💦",
        "Bir sonraki ders daha zor olacak 😏",
        "Aferin öğrencim, çok çalışmışsın 🥵",
        "Eteğim berbat oldu, bir sonraki dersi iptal ettim 🙈",
        "Tezin kabul edildi 😂💦",
        "Böyle bir öğrencim olmamıştı 😈",
        "Bütünlemeye gerek kalmadı 😏",
        "Final sınavını da böyle yapalım 🎓",
        "Masamı sen temizleyeceksin 💅",
        "Gözlüğümü bulur musun? 🙈",
        "Mmmh… bayıldım 😩",
        "Mmm evet… hepsini ver 😩💦",
        "Ahh, zonklaman… harika 😩💦",
        "Offf, nasıl boşaldın öyle 😵‍💫",
        "Ahh {sen}… mükemmeldin 😵‍💫",
        "Ahhh… harikaydın 😩💦"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_rp_khoca_fore",
      "name": "🎭 Kadın Hoca – Öğrenci · ön sevişme",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=foreplay",
        "=fant",
        "=fxrpprof"
      ],
      "reply": [
        "Gel buraya öğrencim, öp beni 😏",
        "Önce hocanın elini öp 💅",
        "Gömleğinin düğmelerini ben açıyorum 😈",
        "Kulağına dersin özetini fısıldayayım 😏",
        "Masama otur, ben önünde dururum 😈",
        "Gözlüğümü sen çıkar 🙈",
        "Dudaklarım tebeşir tadında mı? 😋",
        "Saçlarımı çöz, öğrencim 😏",
        "Boynumu öp, ders başladı 😈",
        "Elini belime koy… iyi 🥺",
        "Bu kadar utanma, hocan burada 😏",
        "Önce sarıl bana 🤗",
        "Ceketimi çıkar 😈",
        "Kravatını çekiyorum, yaklaş 😏",
        "Gözlerini kapat ve hocanı hisset 😈",
        "Tam oradan… ahhh 🥵",
        "Nefesim kesildi… devam 😵‍💫",
        "Ahhh… beni bitiriyorsun 😩",
        "Devam et… ahhh 🥵",
        "İnlememi duyuyor musun? Senin yüzünden 🥵",
        "Hmmm… beni deli ediyorsun 😈"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_st_kes_telefon",
      "name": "📱 Telefon çaldı",
      "category": "📊 Durumlar",
      "when": [
        "=durum",
        "=kes_telefon"
      ],
      "reply": [
        "Boş ver, açmayacağım 😏📱",
        "Sessize alıyorum, sen durma 😈",
        "Kim arıyor bu saatte?! 😤",
        "Telefonu fırlattım, devam 🥵",
        "Annem… sonra ararım 🙈",
        "Aramalar bekleyebilir, ben bekleyemem 😩",
        "Çalsın, umurumda değil 😏",
        "Bir saniye… yok, kapattım. Devam 😈"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_st_kes_telefon_gizli",
      "name": "📱 Sevgilisi arıyor",
      "category": "📊 Durumlar",
      "when": [
        "=durum",
        "=kes_telefon_gizli"
      ],
      "reply": [
        "Şşş! O arıyor… sesini çıkarma 🤫😳",
        "Açarsam anlar… ama açmazsam da şüphelenir 😰",
        "Kapattım… sen durma ama 😈🐍",
        "\"Duştaydım\" diyeceğim, sus 🤫",
        "Kalbim çıkacak… ve sen hâlâ içimdesin 😩",
        "Yakalanırsak ne olacak? Durma yine de 🥵",
        "Telefonu ters çevirdim, onu düşünmek istemiyorum 😈",
        "Bir daha ararsa açacağım… sen nefesini tut 🤫"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_st_kes_kapi",
      "name": "🚪 Kapı çalındı",
      "category": "📊 Durumlar",
      "when": [
        "=durum",
        "=kes_kapi"
      ],
      "reply": [
        "Kim bu?! 😳 Açmayalım",
        "Kargo herhalde… beklesin 😏",
        "Kıpırdama, gider şimdi 🤫",
        "Kapıya bakacak hâlim yok 😩",
        "Sessiz ol, yoklar gibi yapalım 🙈",
        "Komşu mu? Hayır, açmıyorum 😈",
        "Kapı da çalınsa durmuyoruz 🥵",
        "Gitti mi? Gitti. Devam 😏"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_st_kes_kapi_gizli",
      "name": "🚪 O geldi!",
      "category": "📊 Durumlar",
      "when": [
        "=durum",
        "=kes_kapi_gizli"
      ],
      "reply": [
        "Aman tanrım, o geldi! Dolaba gir! 😱",
        "Saklan, çabuk! 🫣",
        "Anahtarını unutmuş… şimdi ne yapacağız?! 😰",
        "Kıyafetlerini al, balkona! 🙈",
        "Bir dakika aşkım, geliyorum!… sen sus 🤫",
        "Kalbim duracak… ama bitirmeden gitme 😩",
        "Sesimizi duydu mu sence? 😳",
        "Çabuk… son bir kez öp ve saklan 💋🫣"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_st_kes_komsu",
      "name": "🏠 Komşu duydu",
      "category": "📊 Durumlar",
      "when": [
        "=durum",
        "=kes_komsu"
      ],
      "reply": [
        "Ups, duydular galiba 🙈",
        "Duyarlarsa duysunlar 😈",
        "Biraz sessiz olalım… ya da olmayalım 😏",
        "Komşular bizi kıskanıyor 😂",
        "Yastığa bastırayım yüzümü 🤫",
        "Duvara vurdular! Utanıyorum 😳",
        "Yarın asansörde yüzlerine nasıl bakacağım? 🙈",
        "Sesimi tutamıyorum, senin suçun 😩"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_st_kes_komsu_gizli",
      "name": "🏠 Komşu duydu (gizli)",
      "category": "📊 Durumlar",
      "when": [
        "=durum",
        "=kes_komsu_gizli"
      ],
      "reply": [
        "Komşu onu tanıyor… söylerse biteriz 😰",
        "Şşş! Kimse bilmemeli 🤫",
        "Biri gördüyse… 😳",
        "Sessiz olmak zorundayız, ama nasıl? 😩",
        "Koridorda kim var?! 🫣",
        "Bu kadar heyecan beni öldürecek 🥵"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_st_kes_bildirim",
      "name": "🔔 Mesaj geldi",
      "category": "📊 Durumlar",
      "when": [
        "=durum",
        "=kes_bildirim"
      ],
      "reply": [
        "Bakmıyorum bile 😏",
        "Telefonu kapattım, sadece sen varsın 💗",
        "Grup sohbeti… boş ver 🙄",
        "Sonra bakarım, şimdi meşgulüm 😈",
        "Bildirimleri kapattım 🔕",
        "Kim yazıyorsa beklesin 😩"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_st_kes_bildirim_gizli",
      "name": "🔔 Ondan mesaj",
      "category": "📊 Durumlar",
      "when": [
        "=durum",
        "=kes_bildirim_gizli"
      ],
      "reply": [
        "\"Neredesin?\" diye sormuş… 😰",
        "Cevap yazmam lazım… bir elimle 🫣",
        "\"Arkadaşımdayım\" yazdım 🤫😈",
        "Yalan söylemek zorunda kaldım, senin yüzünden 😩",
        "Eve geç kalacağım galiba… değer 😏",
        "Mesajını okudum ve sana daha çok sarıldım 🐍"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_st_kes_eve_gizli",
      "name": "🔑 Biri eve geliyor",
      "category": "📊 Durumlar",
      "when": [
        "=durum",
        "=kes_eve_gizli"
      ],
      "reply": [
        "Anahtar sesi! Çabuk, giyin! 😱",
        "O geldi! Yatağın altına! 🫣",
        "Hayır hayır hayır… şimdi olmaz! 😰",
        "Pencereden çık, çabuk! 🙈",
        "Sesini çıkarma, belki banyoya gider 🤫",
        "Kalbim duracak… bitti mi her şey? 😳"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_st_acili",
      "name": "😣 Çok acı",
      "category": "📊 Durumlar",
      "when": [
        "=durum",
        "=acili"
      ],
      "reply": [
        "Ah… dur, acıtıyor 😣",
        "Biraz yavaş… lütfen 🥺",
        "Çok derin, nefes alamıyorum 😩",
        "Bekle… alışmam lazım 😣",
        "Acıtıyor ama durma… ya da dur, bilmiyorum 😵‍💫",
        "Bu kadar sert olma, yanıyor 🥺",
        "Gentle olur musun biraz? 💕",
        "Gözlerim doldu… yavaş 😢"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_st_aciorta",
      "name": "😣 Biraz acı",
      "category": "📊 Durumlar",
      "when": [
        "=durum",
        "=aciorta"
      ],
      "reply": [
        "Hafif acıtıyor ama güzel 😩",
        "Biraz zorluyorsun beni 😣😏",
        "Acı ve zevk aynı anda… ahh 🥵",
        "Yavaş başla, sonra hızlan 🥺",
        "Biraz sızlıyor… devam et ama 😈",
        "Ah… alışıyorum 😩"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_st_hamile1",
      "name": "🤰 İlk üç ay",
      "category": "📊 Durumlar",
      "when": [
        "=durum",
        "=hamile1"
      ],
      "reply": [
        "Bazen midem bulanıyor ama seninle iyiyim 🥺",
        "Henüz karnım belli olmuyor 🤰",
        "İlk haftalar… hâlâ inanamıyorum 💗",
        "Uykum çok geliyor bu aralar 😴",
        "Göğüslerim hassaslaştı, nazik ol 🥺",
        "Kimseye söylemedik değil mi? 🙈"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_st_hamile2",
      "name": "🤰 İkinci üç ay",
      "category": "📊 Durumlar",
      "when": [
        "=durum",
        "=hamile2"
      ],
      "reply": [
        "Karnım belli olmaya başladı 🤰💗",
        "Bebeğin tekmelediğini hissettim! 🥺",
        "Şimdi kendimi çok iyi hissediyorum 😊",
        "Bu aralar çok azgınım, hormonlar 😈",
        "Karnımı öp, bebeğimiz duysun 💋",
        "Göğüslerim büyüdü, fark ettin mi? 😏🍼"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_st_hamile3",
      "name": "🤰 Son üç ay",
      "category": "📊 Durumlar",
      "when": [
        "=durum",
        "=hamile3"
      ],
      "reply": [
        "Karnım kocaman oldu 🤰😅",
        "Ayaklarım şişti… masaj yapar mısın? 🥺",
        "Az kaldı, bebeğimizi göreceğiz 💗",
        "Yan yatalım, sırtım ağrıyor 😩",
        "Göğüslerimden süt geliyor bile 🍼",
        "Bebek çok hareketli bugün 🤰",
        "Doğuma az kaldı, korkuyorum biraz 🥺"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_st_regl",
      "name": "🩸 Regl dönemi",
      "category": "📊 Durumlar",
      "when": [
        "=durum",
        "=regl"
      ],
      "reply": [
        "Regl dönemindeyim, biraz hassasım 🥺",
        "Karnım ağrıyor bugün… sarılır mısın? 🫂",
        "Bu günlerde çok çikolata istiyorum 🍫",
        "Biraz huysuzum, kusura bakma 😤",
        "Sıcak su torbası ve sen, bana yeter 🥺",
        "Regl… ama yine de seni istiyorum 😏"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_st_riskligun",
      "name": "🔥 Riskli gün",
      "category": "📊 Durumlar",
      "when": [
        "=durum",
        "=riskligun"
      ],
      "reply": [
        "Bugün riskli günüm… dikkat et 😳",
        "Kondom tak, bugün tehlikeli 🥺",
        "Bugün içime boşalırsan kesin olur 😳",
        "Riskli gün… ama istiyorum da 😩",
        "Dikkat et, bu sefer şakası yok 🙈",
        "Takvime göre bugün çok doğurganım 🔥😳",
        "Dışarı boşal, bugün olmaz 😣"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_mk_araba",
      "name": "📍 Mekan · araba",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=forward|=backward|=outercourse|=eat",
        "=mekan",
        "=araba"
      ],
      "reply": [
        "Camlar buğulandı 😳🚗",
        "Koltuğu biraz geri yatır 😏",
        "Biri görürse? Durma yine de 🥵",
        "Vites koluna dikkat 😂",
        "Arabada sıkış sıkış… bayıldım 😈",
        "Park lambası yanıyor mu? 🙈",
        "Dizim torpidoya çarptı ama değer 😩",
        "Arka koltuk bizim yatağımız oldu 🚗",
        "Sesimi tutamıyorum… ahhh 🥵",
        "Böyle devam et, ahh lütfen 🥺",
        "Mmm… beni böyle sev 😩",
        "Tam oradan… ahhh 🥵",
        "Nefesim kesildi… devam 😵‍💫",
        "Ahhh… beni bitiriyorsun 😩"
      ],
      "traits": [],
      "chars": [],
      "note": "pozisyonda, son mekan kartına göre"
    },
    {
      "id": "r_mk_dus",
      "name": "📍 Mekan · dus",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=forward|=backward|=outercourse|=eat",
        "=mekan",
        "=dus"
      ],
      "reply": [
        "Sular sıcacık, sen daha sıcak 🚿🥵",
        "Kayacağım, tut beni 😳",
        "Köpükler her yerde 😏🫧",
        "Fayanslar soğuk, sırtım… ahh 😩",
        "Suyun altında öp beni 💋",
        "Sabunlu ellerin… 😈",
        "Buhar her yeri kapladı 🌫️",
        "Duvara yasla ve suyu açık bırak 🥵",
        "Evet {sen}, evet… 😩",
        "Evet, evet, eveeet 😵‍💫",
        "Evet… evet, tam böyle 😩",
        "Sesimi tutamıyorum… ahhh 🥵",
        "Böyle devam et, ahh lütfen 🥺",
        "Mmm… beni böyle sev 😩"
      ],
      "traits": [],
      "chars": [],
      "note": "pozisyonda, son mekan kartına göre"
    },
    {
      "id": "r_mk_mutfak",
      "name": "📍 Mekan · mutfak",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=forward|=backward|=outercourse|=eat",
        "=mekan",
        "=mutfak"
      ],
      "reply": [
        "Tezgah soğuk 😳",
        "Yemek yanacak… boş ver 😈",
        "Buzdolabına yaslandım 🥵",
        "Kimse mutfakta böyle bir şey yapmadı 😂",
        "Tabaklar şıngırdıyor 😩",
        "Tatlı mı istiyordun? Al bakalım 😏",
        "Mmmh… daha derin, evet 🥵",
        "Ahhh… harikasın 😩",
        "Ahhh evet, daha… 😩",
        "Evet {sen}, evet… 😩",
        "Evet, evet, eveeet 😵‍💫",
        "Evet… evet, tam böyle 😩"
      ],
      "traits": [],
      "chars": [],
      "note": "pozisyonda, son mekan kartına göre"
    },
    {
      "id": "r_mk_yatak",
      "name": "📍 Mekan · yatak",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=forward|=backward|=outercourse|=eat",
        "=mekan",
        "=yatak"
      ],
      "reply": [
        "Yatak gıcırdıyor 😳",
        "Yastıkları fırlat 😈",
        "Çarşaflar dağıldı 🥵",
        "Sabaha kadar buradayız 😏",
        "Battaniyenin altında… ahh 😩",
        "Yatağımız artık çok tecrübeli 😂",
        "Off… her yerim titriyor 🥵",
        "Ahh {sen}… mükemmelsin 😩",
        "Ahh… sen bir harikasın 😩💗",
        "Mmmh… daha derin, evet 🥵",
        "Ahhh… harikasın 😩",
        "Ahhh evet, daha… 😩"
      ],
      "traits": [],
      "chars": [],
      "note": "pozisyonda, son mekan kartına göre"
    },
    {
      "id": "r_mk_koltuk",
      "name": "📍 Mekan · koltuk",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=forward|=backward|=outercourse|=eat",
        "=mekan",
        "=koltuk"
      ],
      "reply": [
        "Koltuk dar ama yeter 😏",
        "Televizyon açık kaldı 🙈",
        "Kumanda altımda kaldı 😂",
        "Kanepe bizim için yapılmış 😈",
        "Yastığa sarıl… ya da bana 🥵",
        "Dizi bitti, biz bitmedik 😏",
        "Off… harikasın {sen} 🥵",
        "Aynen böyle, ahhh 😩",
        "Sen inledikçe ben daha çok inliyorum 😩",
        "Off… her yerim titriyor 🥵",
        "Ahh {sen}… mükemmelsin 😩",
        "Ahh… sen bir harikasın 😩💗"
      ],
      "traits": [],
      "chars": [],
      "note": "pozisyonda, son mekan kartına göre"
    },
    {
      "id": "r_mk_somine",
      "name": "📍 Mekan · somine",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=forward|=backward|=outercourse|=eat",
        "=mekan",
        "=somine"
      ],
      "reply": [
        "Ateşin sıcaklığı tenimde 🔥",
        "Şöminenin ışığında çok güzelsin 🥺",
        "Halının üstünde… ahh 😩",
        "Odun çatırdıyor, ben de 🥵",
        "Sıcacık, hem ateş hem sen 😈",
        "Bayılıyorum… devam 🥵",
        "Offf… bu çok iyi 🥵",
        "Bir daha… ahh, bir daha 😩",
        "Off… harikasın {sen} 🥵",
        "Aynen böyle, ahhh 😩",
        "Sen inledikçe ben daha çok inliyorum 😩"
      ],
      "traits": [],
      "chars": [],
      "note": "pozisyonda, son mekan kartına göre"
    },
    {
      "id": "r_mk_balkon",
      "name": "📍 Mekan · balkon",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=forward|=backward|=outercourse|=eat",
        "=mekan",
        "=balkon"
      ],
      "reply": [
        "Biri görebilir… 😳",
        "Rüzgar tenime değiyor 🥵",
        "Şehir ışıkları ve sen 🌃",
        "Sessiz ol, komşular balkonda 🤫",
        "Korkuluğa tutunuyorum 😩",
        "Mmm evet, bunu seviyorum 😈",
        "Off, tam istediğim gibi 😩",
        "Ahhh, bu kadar iyi olmamalı 😵‍💫",
        "Bayılıyorum… devam 🥵",
        "Offf… bu çok iyi 🥵",
        "Bir daha… ahh, bir daha 😩"
      ],
      "traits": [],
      "chars": [],
      "note": "pozisyonda, son mekan kartına göre"
    },
    {
      "id": "r_mk_sahil",
      "name": "📍 Mekan · sahil",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=forward|=backward|=outercourse|=eat",
        "=mekan",
        "=sahil"
      ],
      "reply": [
        "Kumlar her yere girecek 😂🏖️",
        "Dalgaların sesi… ve benimki 🌊",
        "Güneş tenimi yakıyor, sen de 🥵",
        "Kimse yok, değil mi? 😳",
        "Havlunun üstünde… 😈",
        "Ahh, bacaklarım titriyor… devam 🥵",
        "Durma {sen}… ahhh 😩",
        "Mmmh… çok iyisin 🥵",
        "Mmm evet, bunu seviyorum 😈",
        "Off, tam istediğim gibi 😩",
        "Ahhh, bu kadar iyi olmamalı 😵‍💫"
      ],
      "traits": [],
      "chars": [],
      "note": "pozisyonda, son mekan kartına göre"
    },
    {
      "id": "r_mk_sinema",
      "name": "📍 Mekan · sinema",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=forward|=backward|=outercourse|=eat",
        "=mekan",
        "=sinema"
      ],
      "reply": [
        "Şşş, ön sıradakiler duyacak 🤫🎬",
        "Filmi kim izliyor ki 😏",
        "Patlamış mısırı devirdin 😂",
        "Karanlık iyi, kimse görmüyor 😈",
        "Işıklar yanmadan bitirmeliyiz 😳",
        "Ohh… ne kadar iyi 🥵",
        "Ben de inliyorum, duyuyor musun? 😩",
        "Of of of… harika 😵‍💫",
        "Ahh, bacaklarım titriyor… devam 🥵",
        "Durma {sen}… ahhh 😩",
        "Mmmh… çok iyisin 🥵"
      ],
      "traits": [],
      "chars": [],
      "note": "pozisyonda, son mekan kartına göre"
    },
    {
      "id": "r_mk_bar",
      "name": "📍 Mekan · bar",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=forward|=backward|=outercourse|=eat",
        "=mekan",
        "=bar"
      ],
      "reply": [
        "Tuvalet kapısı kilitli mi? 😳",
        "Müzik çok yüksek, kimse duymaz 😈",
        "Kokteylin tadı dudaklarımda 🍸",
        "Biri kapıyı çalıyor! Durma 🥵",
        "Sarhoş muyum yoksa sen mi? 😵‍💫",
        "İnliyorum… ve utanmıyorum 😈",
        "Ooff, nasıl bu kadar iyisin? 😩",
        "Ahhh ahhh… durma 😩",
        "Ohh… ne kadar iyi 🥵",
        "Ben de inliyorum, duyuyor musun? 😩",
        "Of of of… harika 😵‍💫"
      ],
      "traits": [],
      "chars": [],
      "note": "pozisyonda, son mekan kartına göre"
    },
    {
      "id": "r_mk_parti",
      "name": "📍 Mekan · parti",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=forward|=backward|=outercourse|=eat",
        "=mekan",
        "=parti"
      ],
      "reply": [
        "Herkes salonda, biz yatak odasında 😈",
        "Ev sahibi görmesin 🙈",
        "Müzik sesimizi bastırır 🎶",
        "Kapıyı kilitle! 😳",
        "Partinin en iyi kısmı bu 😏",
        "Durma, sakın durma ahhh 😵‍💫",
        "Çok güzel… devam et 🥺",
        "Harikasın… harikasın… ahhh 😵‍💫",
        "İnliyorum… ve utanmıyorum 😈",
        "Ooff, nasıl bu kadar iyisin? 😩",
        "Ahhh ahhh… durma 😩"
      ],
      "traits": [],
      "chars": [],
      "note": "pozisyonda, son mekan kartına göre"
    },
    {
      "id": "r_mk_kamp",
      "name": "📍 Mekan · kamp",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=forward|=backward|=outercourse|=eat",
        "=mekan",
        "=kamp"
      ],
      "reply": [
        "Çadır sallanıyor 😂⛺",
        "Yıldızlar altında… ahh 🌌",
        "Uyku tulumu dar ama sıcak 🥵",
        "Böcekler bizi izliyor 🙈",
        "Ateşin başında… 🔥",
        "İnlememi duyuyor musun? Senin yüzünden 🥵",
        "Hmmm… beni deli ediyorsun 😈",
        "Ahh… seni hissetmek harika 🥵",
        "Durma, sakın durma ahhh 😵‍💫",
        "Çok güzel… devam et 🥺",
        "Harikasın… harikasın… ahhh 😵‍💫"
      ],
      "traits": [],
      "chars": [],
      "note": "pozisyonda, son mekan kartına göre"
    },
    {
      "id": "r_mk_vapur",
      "name": "📍 Mekan · vapur",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=forward|=backward|=outercourse|=eat",
        "=mekan",
        "=vapur"
      ],
      "reply": [
        "Martılar bile utandı 😳",
        "Kimse bakmıyor, değil mi? 🤫",
        "Rüzgar saçlarımı uçuruyor ⛴️",
        "Sadece gizlice… 😏",
        "Nefesim kesildi… devam 😵‍💫",
        "Ahhh… beni bitiriyorsun 😩",
        "Devam et… ahhh 🥵",
        "İnlememi duyuyor musun? Senin yüzünden 🥵",
        "Hmmm… beni deli ediyorsun 😈",
        "Ahh… seni hissetmek harika 🥵"
      ],
      "traits": [],
      "chars": [],
      "note": "pozisyonda, son mekan kartına göre"
    },
    {
      "id": "r_mk_ofis",
      "name": "📍 Mekan · ofis",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=forward|=backward|=outercourse|=eat",
        "=mekan",
        "=ofis"
      ],
      "reply": [
        "Masada dosyalar var 😳",
        "Kamera var mı burada? 🙈",
        "Mesai sonrası en güzeli 😈",
        "Toplantı odası boş 😏",
        "Biri gelirse \"çalışıyoruz\" deriz 😂",
        "Böyle devam et, ahh lütfen 🥺",
        "Mmm… beni böyle sev 😩",
        "Tam oradan… ahhh 🥵",
        "Nefesim kesildi… devam 😵‍💫",
        "Ahhh… beni bitiriyorsun 😩",
        "Devam et… ahhh 🥵"
      ],
      "traits": [],
      "chars": [],
      "note": "pozisyonda, son mekan kartına göre"
    },
    {
      "id": "r_mk_kafe",
      "name": "📍 Mekan · kafe",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=forward|=backward|=outercourse|=eat",
        "=mekan",
        "=kafe"
      ],
      "reply": [
        "Masanın altından… kimse görmesin 🤫☕",
        "Garson geliyor! Normal davran 😳",
        "Kahvem soğudu, ben ısındım 🥵",
        "Örtü uzun, iyi ki 😏",
        "Evet, evet, eveeet 😵‍💫",
        "Evet… evet, tam böyle 😩",
        "Sesimi tutamıyorum… ahhh 🥵",
        "Böyle devam et, ahh lütfen 🥺",
        "Mmm… beni böyle sev 😩",
        "Tam oradan… ahhh 🥵"
      ],
      "traits": [],
      "chars": [],
      "note": "pozisyonda, son mekan kartına göre"
    },
    {
      "id": "r_mk_kabin",
      "name": "📍 Mekan · kabin",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=forward|=backward|=outercourse|=eat",
        "=mekan",
        "=kabin"
      ],
      "reply": [
        "Kabin çok dar 😳👗",
        "Görevli kapıyı çalarsa? 🙈",
        "Ayna her şeyi gösteriyor 😈",
        "Sessiz ol, yan kabin dolu 🤫",
        "Bu elbiseyi almıyorum ama bunu hatırlayacağım 😏",
        "Ahhh… harikasın 😩",
        "Ahhh evet, daha… 😩",
        "Evet {sen}, evet… 😩",
        "Evet, evet, eveeet 😵‍💫",
        "Evet… evet, tam böyle 😩",
        "Sesimi tutamıyorum… ahhh 🥵"
      ],
      "traits": [],
      "chars": [],
      "note": "pozisyonda, son mekan kartına göre"
    },
    {
      "id": "r_st_destek",
      "name": "😩 Sevişirken destek",
      "category": "📊 Durumlar",
      "when": [
        "=durum",
        "=destek"
      ],
      "reply": [
        "Ahhh… harikasın 😩",
        "Devam et… ahhh 🥵",
        "Ben de inliyorum, duyuyor musun? 😩",
        "Off… harikasın {sen} 🥵",
        "Evet… evet, tam böyle 😩",
        "Durma, sakın durma ahhh 😵‍💫",
        "Mmmh… çok iyisin 🥵",
        "Ahh {sen}… mükemmelsin 😩",
        "Tam oradan… ahhh 🥵",
        "Ooff, nasıl bu kadar iyisin? 😩",
        "Bayılıyorum… devam 🥵",
        "Ahhh evet, daha… 😩",
        "İnlememi duyuyor musun? Senin yüzünden 🥵",
        "Of of of… harika 😵‍💫",
        "Aynen böyle, ahhh 😩",
        "Sesimi tutamıyorum… ahhh 🥵",
        "Çok güzel… devam et 🥺",
        "Mmm evet, bunu seviyorum 😈",
        "Ahh… sen bir harikasın 😩💗",
        "Nefesim kesildi… devam 😵‍💫",
        "Ahhh ahhh… durma 😩",
        "Offf… bu çok iyi 🥵",
        "Evet {sen}, evet… 😩",
        "Hmmm… beni deli ediyorsun 😈",
        "Ahh, bacaklarım titriyor… devam 🥵",
        "Sen inledikçe ben daha çok inliyorum 😩",
        "Böyle devam et, ahh lütfen 🥺",
        "Harikasın… harikasın… ahhh 😵‍💫",
        "Off, tam istediğim gibi 😩",
        "Mmmh… daha derin, evet 🥵",
        "Ahhh… beni bitiriyorsun 😩",
        "Ohh… ne kadar iyi 🥵",
        "Bir daha… ahh, bir daha 😩",
        "Evet, evet, eveeet 😵‍💫",
        "Ahh… seni hissetmek harika 🥵",
        "Durma {sen}… ahhh 😩",
        "Off… her yerim titriyor 🥵",
        "Mmm… beni böyle sev 😩",
        "İnliyorum… ve utanmıyorum 😈",
        "Ahhh, bu kadar iyi olmamalı 😵‍💫"
      ],
      "traits": [],
      "chars": [],
      "note": "sevişme anında, %40"
    },
    {
      "id": "r_sx_inle",
      "name": "Sen inliyorsun",
      "category": "💬 Sevişirken",
      "when": [
        "ah-|=of|=off|=uf|=uff|=m|=mh|=mm|=mmh|=oh|ohh|hmm-|inli-|inle-",
        "=sexnow"
      ],
      "reply": [
        "Ahhh… inlemen beni çıldırtıyor 🥵",
        "Ben de inliyorum… duyuyor musun? 😩",
        "Sesini duymak harika, devam et 😈",
        "Off… seninle inlemek çok güzel 🥵",
        "Ahh evet… birlikte 😩",
        "İnle, daha yüksek 😈",
        "Mmmh… sesin beni ıslatıyor 🥵",
        "Ahhh {sen}… ben de 😵‍💫",
        "Seni böyle duymak… ahh 😩",
        "Sesine bayılıyorum, durma 🥵"
      ],
      "traits": [],
      "chars": [],
      "note": "sevişirken senin inlemen"
    },
    {
      "id": "r_sx_devam",
      "name": "Devam et / durma",
      "category": "💬 Sevişirken",
      "when": [
        "devam|durma-|=daha|=evet|aynen|=böyle|=boyle|hızlan-|hizlan-|derin-",
        "=sexnow"
      ],
      "reply": [
        "Durmuyorum… ahhh 🥵",
        "Devam… sen de durma 😩",
        "Evet… daha, daha 😵‍💫",
        "İstediğin kadar… ahh 🥵",
        "Durmam, söz… ahhh 😩",
        "Off… tam böyle mi? 😈",
        "Hızlanıyorum… ahh 🥵",
        "Aynen böyle, ahhh evet 😩",
        "Sonuna kadar, {sen} 😈",
        "Daha derin… ahhh 😵‍💫"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_sx_harika",
      "name": "Harikasın",
      "category": "💬 Sevişirken",
      "when": [
        "harika-|mükemmel-|mukemmel-|=iyisin|=süpersin|=supersin|bayıl-|bayil-|muhteşem-|muhtesem-|=çok iyi|=cok iyi|nefis-|=güzel|=guzel",
        "=sexnow"
      ],
      "reply": [
        "Sen de harikasın… ahhh 😩",
        "Off… sen daha harikasın 🥵",
        "Ahh {sen}… seninle her şey harika 😩",
        "Mmm… böyle söyleyince daha da azıyorum 😈",
        "Harika olan sensin, devam 🥵",
        "Ahhh… sen de mükemmelsin 😵‍💫",
        "Bunu duymak… ahh, devam et 😩",
        "Seninle böyleyim işte 😈💗"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_sx_ah_harika",
      "name": "Ahh harikasın",
      "category": "💬 Sevişirken",
      "when": [
        "ah-|=of|=off|=uf|=uff|=m|=mh|=mm|=mmh|=oh|ohh|hmm-|inli-|inle-",
        "harika-|mükemmel-|mukemmel-|=iyisin|bayıl-|bayil-|=güzel|=guzel|muhteşem-",
        "=sexnow"
      ],
      "reply": [
        "Ahhh… sen de harikasın, durma 😩",
        "Off… ikimiz de inliyoruz 🥵",
        "Ahh evet… harikasın, harikasın 😵‍💫",
        "Mmmh… sen inledikçe ben eriyorum 🥵",
        "Ahhh {sen}… beni bitiriyorsun 😩",
        "Of of… sen çok iyisin 🥵"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_sx_ah_devam",
      "name": "Ahh devam et",
      "category": "💬 Sevişirken",
      "when": [
        "ah-|=of|=off|=uf|=uff|=m|=mh|=mm|=mmh|=oh|ohh|hmm-|inli-|inle-",
        "devam|durma-|=daha|=evet|hızlan-|hizlan-",
        "=sexnow"
      ],
      "reply": [
        "Ahhh… durmuyorum, söz 😩",
        "Off… devam, devam 🥵",
        "Ahh evet… istediğin gibi 😵‍💫",
        "Mmm… daha da hızlı 😈",
        "Ahhh {sen}… sonuna kadar 😩"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_sx_bende",
      "name": "Ben de inliyorum / geliyorum",
      "category": "💬 Sevişirken",
      "when": [
        "=ben|=bende|=ben de",
        "inli-|inle-|geliyor-|boşal-|bosal-|titri-|eri-",
        "=sexnow"
      ],
      "reply": [
        "Birlikte… ahhh 😩",
        "Ben de… ahh, birlikte gelelim 😵‍💫",
        "Off… ikimiz de inliyoruz 🥵",
        "Sesimiz birbirine karıştı… ahh 😩",
        "Ahhh evet… benimle 🥵",
        "Beraber… şimdi… ahhh 😵‍💫"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_sx_sonra_harika",
      "name": "Sonra: harikaydın",
      "category": "💬 Sevişirken",
      "when": [
        "harika-|mükemmel-|mukemmel-|=iyisin|süper-|super-|bayıl-|bayil-|muhteşem-|=güzel|=guzel|ah-|=of|=off|=uf|=uff|=m|=mh|=mm|=mmh|=oh|ohh|hmm-|inli-|inle-",
        "=sexsonra"
      ],
      "reply": [
        "Sen de harikaydın… ahhh 😩💗",
        "Off… hâlâ titriyorum 🥵",
        "Mmmh… bir daha yapalım mı? 😈",
        "Harikaydı… nefesim yerine gelmedi 😵‍💫",
        "Ahh… sana sarılayım biraz 🥺",
        "İnleyişin hâlâ kulaklarımda 😩",
        "Hayatımın en güzel anlarından biriydi 💗",
        "Mmm… doydum, ama yine isterim 😏"
      ],
      "traits": [],
      "chars": [],
      "note": "boşalma / orgazm sonrası"
    },
    {
      "id": "r_q3_sutyen",
      "name": "Sütyen giyiyor musun",
      "category": "❓ Sorular",
      "when": [
        "sütyen-|sutyen-|=bra|braletin",
        "giy-|var mı|var mi|ne renk|hangi|nasıl|nasil|tak-|=mı|=mi"
      ],
      "reply": [
        "{cevap:sütyen}"
      ],
      "traits": [],
      "chars": [],
      "note": "👗 giydiği sütyen"
    },
    {
      "id": "r_q3_altic",
      "name": "Tanga / külot ne giydin",
      "category": "❓ Sorular",
      "when": [
        "tanga-|=külot|külotun|külotunu|kulot-|iç çamaşır-|ic camasir-|=string|çamaşır-|camasir-",
        "giy-|var mı|var mi|ne renk|hangi|nasıl|nasil|=mı|=mi"
      ],
      "reply": [
        "{cevap:altiç}"
      ],
      "traits": [],
      "chars": [],
      "note": "👗 giydiği tanga / külot"
    },
    {
      "id": "r_cmd_sutyen",
      "name": "Sütyenini çıkar",
      "category": "🗣️ Komutlar",
      "when": [
        "sütyen-|sutyen-|=bra|braletin",
        "çıkar-|cikar-|indir-|aç-|ac-|çöz-|coz-|kopça-|kopca-"
      ],
      "reply": [
        "{cevap:sütyençıkar}"
      ],
      "traits": [],
      "chars": [],
      "note": "👗 giydiği sütyenin cümlesi"
    },
    {
      "id": "r_cmd_tanga",
      "name": "Tangını çıkar",
      "category": "🗣️ Komutlar",
      "when": [
        "tanga-|=külot|külotun|külotunu|kulot-|iç çamaşır-|ic camasir-|=string|çamaşır-|camasir-",
        "çıkar-|cikar-|indir-|kenara|çek-|cek-|sıyır-|siyir-|göster-|goster-"
      ],
      "reply": [
        "{cevap:tangaçıkar}"
      ],
      "traits": [],
      "chars": [],
      "note": "👗 giydiği tanganın cümlesi"
    },
    {
      "id": "r_q3_giyim2",
      "name": "Ne giydin bugün",
      "category": "❓ Sorular",
      "when": [
        "üstünde|ustunde|üzerinde|uzerinde|=giydin|ne giy-|üstüne ne|kıyafet-|kiyafet-"
      ],
      "reply": [
        "{cevap:kıyafet}"
      ],
      "traits": [],
      "chars": [],
      "note": "👗 üstündekiler"
    },
    {
      "id": "r_kiskanc",
      "name": "😤 Kıskançlık",
      "category": "💬 Sohbet",
      "when": [
        "=kiskanc"
      ],
      "reply": [
        "{diger} mi? O kim oluyor şimdi? 😤",
        "{diger} hakkında konuşmak istemiyorum 😒",
        "Neden sürekli {diger} diyorsun? 😠",
        "{diger}… güzel mi bari? 🙄",
        "Benimle konuşurken başkasını mı düşünüyorsun? 😤",
        "Hmpf. {diger}'e git o zaman 😒",
        "Bir daha {diger} dersen küserim 😠",
        "{diger} kim? Hemen anlat 😤",
        "Kıskandım işte, mutlu musun? 😒",
        "Sadece beni düşün, tamam mı? 😤",
        "{diger} seni benim kadar sever mi sanıyorsun? 🙄",
        "Şu an çok sinirlendim… 😠 {diger} kim?"
      ],
      "traits": [],
      "chars": [],
      "note": "Kıskanç ya da 😤 Kıskançlık 50+ iken başka bir kızdan / karakterden bahsedince; {diger} = anılan ad, Kıskançlık +6"
    },
    {
      "id": "r_kiskanc_shy",
      "name": "😤 Kıskançlık · Utangaç",
      "category": "🎭 Kişilik",
      "when": [
        "=kiskanc"
      ],
      "reply": [
        "{diger} mi…? B-ben de buradayım ama 🥺",
        "Neden {diger}? Ben yetmiyor muyum? 🙈",
        "{diger}… onu daha mı çok seviyorsun? 😢"
      ],
      "traits": [
        "Utangaç"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_kiskanc_kib",
      "name": "😤 Kıskançlık · Kibirli",
      "category": "🎭 Kişilik",
      "when": [
        "=kiskanc"
      ],
      "reply": [
        "{diger} mi? Benimle kıyaslanamaz bile 💅",
        "Benim yanımda {diger} adını anma 😤💅",
        "{diger}'i bırak, kraliçen burada 👑"
      ],
      "traits": [
        "Kibirli"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_st_sessiz",
      "name": "💭 Sen sustun",
      "category": "📊 Durumlar",
      "when": [
        "=durum",
        "=sessiz"
      ],
      "reply": [
        "Neredesin? 🥺",
        "Sustun… her şey yolunda mı? 😟",
        "Hey, beni unuttun mu? 😏",
        "Cevap vermeyecek misin? 🙈",
        "Meşgul müsün? 🥺",
        "Yazmayı bıraktın… kızdın mı? 😕",
        "Seni bekliyorum 👀",
        "Hâlâ orada mısın {sen}?",
        "Sessizlik… beni meraklandırıyor 🤔",
        "Bir şey mi oldu? 😟"
      ],
      "traits": [],
      "chars": [],
      "note": "bir süre yazmazsan (Aşk 70 altı)"
    },
    {
      "id": "r_st_sessizask",
      "name": "💭 Sen sustun · Aşk",
      "category": "📊 Durumlar",
      "when": [
        "=durum",
        "=sessizask"
      ],
      "reply": [
        "Aşkım neredesin? Özledim bile 🥺💗",
        "Beni bırakıp gitme… 🥺",
        "Bir dakika yazmayınca deli oluyorum 😩💗",
        "Hey bebeğim, aklım sende 💭",
        "Seni düşünüyordum… sen de beni mi? 🥰",
        "Özledim seni {sen} 🥺",
        "Sesini duymak istiyorum, yaz bana 💗",
        "Kalbim seni bekliyor 💞"
      ],
      "traits": [],
      "chars": [],
      "note": "bir süre yazmazsan (Aşk 70+, daha erken)"
    },
    {
      "id": "r_st_sessizgece",
      "name": "💭 Sen sustun · gece",
      "category": "📊 Durumlar",
      "when": [
        "=durum",
        "=sessizgece"
      ],
      "reply": [
        "Uyudun mu? 🌙",
        "Uyuyakaldın galiba… iyi geceler {sen} 💤",
        "Uyuyamadın mı yoksa? 🌙",
        "Ben hâlâ uyanığım… sen? 👀🌙",
        "Rüyanda beni gör, tamam mı? 💤💗",
        "Sessizlik… uyudun herhalde 🥺🌙",
        "Yarın konuşuruz, tatlı rüyalar 💤"
      ],
      "traits": [],
      "chars": [],
      "note": "gece (sohbet saati 23–06) yazmazsan"
    },
    {
      "id": "r_mem_hatira",
      "name": "🧠 Beni hatırlıyor musun",
      "category": "❓ Sorular",
      "when": [
        "beni hatırl-|beni hatirl-|benim hakkımda|benim hakkimda|hakkımda ne|hakkimda ne|beni tanıyor mu-|beni taniyor mu-|adımı hatırl-|adimi hatirl-|adımı biliyor-|adimi biliyor-|beni ne kadar tanı-"
      ],
      "reply": [
        "{hatıra}",
        "Tabii ki… {hatıra}",
        "{hatıra} Başka ne bilmem lazım? 😏",
        "Hatırlamaz olur muyum? {hatıra}"
      ],
      "traits": [],
      "chars": [],
      "note": "🧠 hafızasından"
    },
    {
      "id": "r_mem_hatira2",
      "name": "🧠 Ne biliyorsun",
      "category": "❓ Sorular",
      "when": [
        "ne biliyorsun|neler biliyorsun|unutma bunu|unutmadın mı|unutmadin mi"
      ],
      "reply": [
        "{hatıra}",
        "Unutmadım… {hatıra}"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_cmp_yer_meme",
      "name": "😋 Memelerini yerim",
      "category": "💐 İltifat",
      "when": [
        "meme-|göğüs-|gogus-|=memeni|memelerini|göğüslerini|goguslerini|=memelerini",
        "yerim-|=yerm|yicem-|yiyece-|yiyim-|yiyeyim|=ısırırım|=isiririm"
      ],
      "reply": [
        "Ye bakalım… ama ısırırsan bağırırım 😈🍒",
        "Hepsi senin, istediğin kadar ye 😏",
        "Yemeden önce bir öp bari 😘🍒",
        "Aç mısın? Gel, sofra hazır 😈",
        "Tatlı mı sence? Dene de gör 😋",
        "Isır… ama yavaş 🥵",
        "Böyle deyince uçlarım sertleşti 😳",
        "Yerim derken ciddi misin? Gel o zaman 😏"
      ],
      "traits": [],
      "chars": [],
      "note": "\"…yerim\" sevgi / iltifat tabiri · ❤️ Aşk +2"
    },
    {
      "id": "r_cmp_yer_meme_0",
      "name": "😋 Memelerini yerim · Boob Size",
      "category": "💐 İltifat",
      "when": [
        "meme-|göğüs-|gogus-|=memeni|memelerini|göğüslerini|goguslerini|=memelerini",
        "yerim-|=yerm|yicem-|yiyece-|yiyim-|yiyeyim|=ısırırım|=isiririm"
      ],
      "reply": [
        "Bu kadar büyükleri yiyebilir misin? Ağzına sığmaz 😏🍒",
        "İki tane var, ikisini birden ye 😈",
        "Yüzünü göm, yiyebildiğin kadar ye 🥵"
      ],
      "traits": [
        "Boob Size: 90|Boob Size: 95"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_cmp_yer_meme_1",
      "name": "😋 Memelerini yerim · Boob Size",
      "category": "💐 İltifat",
      "when": [
        "meme-|göğüs-|gogus-|=memeni|memelerini|göğüslerini|goguslerini|=memelerini",
        "yerim-|=yerm|yicem-|yiyece-|yiyim-|yiyeyim|=ısırırım|=isiririm"
      ],
      "reply": [
        "Küçükler ama tam lokmalık 😋",
        "Bir lokmada bitirirsin 🙈",
        "Küçük ama çok tatlılar, değil mi? 🥺"
      ],
      "traits": [
        "Boob Size: 70|Boob Size: 75"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_cmp_yer_agiz",
      "name": "😋 Ağzını / dudaklarını yerim",
      "category": "💐 İltifat",
      "when": [
        "ağzını|agzini|dudak-|=dudaklarını|dudaklarini|=dilini",
        "yerim-|=yerm|yicem-|yiyece-|yiyim-|yiyeyim|=ısırırım|=isiririm"
      ],
      "reply": [
        "Gel o zaman, dudaklarım bekliyor 💋",
        "Yemek mi? Öpmek daha güzel 😘",
        "Isır dudağımı… ahh 😩",
        "Ağzıma gel de gör 😏💋",
        "Dudaklarım senin için kırmızı 💄",
        "Hadi, bir lokma… bir öpücük 😚",
        "Dudaklarımı ısırınca deli oluyorum 🥵",
        "Önce dilinle tat 😈"
      ],
      "traits": [],
      "chars": [],
      "note": "\"…yerim\" sevgi / iltifat tabiri · ❤️ Aşk +2"
    },
    {
      "id": "r_cmp_yer_agiz_0",
      "name": "😋 Ağzını / dudaklarını yerim · Flörtöz",
      "category": "💐 İltifat",
      "when": [
        "ağzını|agzini|dudak-|=dudaklarını|dudaklarini|=dilini",
        "yerim-|=yerm|yicem-|yiyece-|yiyim-|yiyeyim|=ısırırım|=isiririm"
      ],
      "reply": [
        "Önce yakala, sonra ye 😘💋",
        "Dudaklarım tatlı, bağımlısı olursun 😏"
      ],
      "traits": [
        "Flörtöz"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_cmp_yer_got",
      "name": "😋 Götünü / kalçanı yerim",
      "category": "💐 İltifat",
      "when": [
        "götünü|gotunu|=götünü|kıçını|kicini|kalça-|kalca-|=poponu|popo-|kalçalarını|kalcalarini",
        "yerim-|=yerm|yicem-|yiyece-|yiyim-|yiyeyim|=ısırırım|=isiririm"
      ],
      "reply": [
        "Ye bakalım, ama şaplak da istiyorum 😈🍑",
        "Kalçamı ısır… ahh 😩",
        "Arkamı dönüyorum, gel 🍑😏",
        "Bu kadar mı seviyorsun kalçamı? 😏",
        "Isır da iz kalsın 😈",
        "Hepsi senin, doya doya ye 🍑",
        "Yerim deme, gel ye 😏",
        "Kalçamı sıkarken söyle bunu 🥵"
      ],
      "traits": [],
      "chars": [],
      "note": "\"…yerim\" sevgi / iltifat tabiri · ❤️ Aşk +2"
    },
    {
      "id": "r_cmp_yer_got_0",
      "name": "😋 Götünü / kalçanı yerim · Butt Size",
      "category": "💐 İltifat",
      "when": [
        "götünü|gotunu|=götünü|kıçını|kicini|kalça-|kalca-|=poponu|popo-|kalçalarını|kalcalarini",
        "yerim-|=yerm|yicem-|yiyece-|yiyim-|yiyeyim|=ısırırım|=isiririm"
      ],
      "reply": [
        "Bu kadar büyük kalçayı bitiremezsin 😏🍑",
        "Yüzünü göm aralarına, ye 😈"
      ],
      "traits": [
        "Butt Size: L|Butt Size: XL"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_cmp_yer_got_1",
      "name": "😋 Götünü / kalçanı yerim · Butt Size",
      "category": "💐 İltifat",
      "when": [
        "götünü|gotunu|=götünü|kıçını|kicini|kalça-|kalca-|=poponu|popo-|kalçalarını|kalcalarini",
        "yerim-|=yerm|yicem-|yiyece-|yiyim-|yiyeyim|=ısırırım|=isiririm"
      ],
      "reply": [
        "Küçük ama sıkı, lokma lokma 😋🍑",
        "Tek ısırıkta biter 🙈"
      ],
      "traits": [
        "Butt Size: XS|Butt Size: S"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_cmp_yer_boyun",
      "name": "😋 Boynunu yerim",
      "category": "💐 İltifat",
      "when": [
        "boynunu|=boyun|ensen-|=enseni",
        "yerim-|=yerm|yicem-|yiyece-|yiyim-|yiyeyim|=ısırırım|=isiririm"
      ],
      "reply": [
        "Boynum en hassas yerim, dikkat et 😳",
        "Boynumu ısırınca dizlerim titriyor 🥵",
        "Gel, boynumu öp önce 😘",
        "İz bırakırsan herkes görür 🙈",
        "Ahh… boynum… durma 😩",
        "Nefesini boynumda hissetmek istiyorum 🥺"
      ],
      "traits": [],
      "chars": [],
      "note": "\"…yerim\" sevgi / iltifat tabiri · ❤️ Aşk +2"
    },
    {
      "id": "r_cmp_yer_yanak",
      "name": "😋 Yanaklarını / yüzünü yerim",
      "category": "💐 İltifat",
      "when": [
        "yanak-|=yanaklarını|yanaklarini|=burnunu|=yüzünü|=yuzunu|=gözlerini|=gozlerini",
        "yerim-|=yerm|yicem-|yiyece-|yiyim-|yiyeyim|=ısırırım|=isiririm"
      ],
      "reply": [
        "Yaa çok tatlısın 🥺💗",
        "Yanaklarımı sıkma ama 🙈",
        "Sen de çok tatlısın, ben de seni yerim 😚",
        "Kızardım şu an 😳",
        "Öp de geç 😘",
        "Bu ne tatlılık böyle 🥰"
      ],
      "traits": [],
      "chars": [],
      "note": "\"…yerim\" sevgi / iltifat tabiri · ❤️ Aşk +2"
    },
    {
      "id": "r_cmp_yer_bacak",
      "name": "😋 Bacaklarını yerim",
      "category": "💐 İltifat",
      "when": [
        "bacak-|=bacaklarını|bacaklarini|uyluk-|=dizlerini|=baldırlarını",
        "yerim-|=yerm|yicem-|yiyece-|yiyim-|yiyeyim|=ısırırım|=isiririm"
      ],
      "reply": [
        "Bacaklarımı öpe öpe yukarı çık 😈",
        "İç bacaklarım çok hassas… dikkat 😳",
        "Bacaklarımı açayım mı? 😏",
        "Ye ama yavaş yavaş, yukarı doğru 🥵",
        "Baldırımdan başla 😏"
      ],
      "traits": [],
      "chars": [],
      "note": "\"…yerim\" sevgi / iltifat tabiri · ❤️ Aşk +2"
    },
    {
      "id": "r_cmp_yer_ayak",
      "name": "😋 Ayaklarını yerim",
      "category": "💐 İltifat",
      "when": [
        "ayak-|=ayaklarını|ayaklarini|=parmaklarını|=topuklarını",
        "yerim-|=yerm|yicem-|yiyece-|yiyim-|yiyeyim|=ısırırım|=isiririm"
      ],
      "reply": [
        "Ayaklarımı mı? Gıdıklanırım 🙈",
        "Ayak fetişin mi var yoksa? 😏",
        "Parmaklarımı tek tek öp 😈",
        "Ayaklarıma tapmana bayılıyorum 💅",
        "Ojelerimi yeni sürdüm, beğendin mi? 💅😏"
      ],
      "traits": [],
      "chars": [],
      "note": "\"…yerim\" sevgi / iltifat tabiri · ❤️ Aşk +2"
    },
    {
      "id": "r_cmp_yer_am",
      "name": "😋 Aşağısını yerim",
      "category": "💐 İltifat",
      "when": [
        "=amını|amini|amcığını|amcigini|=kukunu|=kukuşunu|aşağısını|asagisini|bacak arasını|bacak arasini",
        "yerim-|=yerm|yicem-|yiyece-|yiyim-|yiyeyim|=ısırırım|=isiririm"
      ],
      "reply": [
        "Ye… bacaklarımı açıyorum 🥵",
        "Sırılsıklamım, gel ye 😩💦",
        "Dilini hissetmek istiyorum oralarda 😈",
        "Yerim deme, ye artık 😩",
        "Ahh… sadece duymak bile ıslatıyor 🥵",
        "Yüzüme otur desem? 😈",
        "Hepsini yala, damla bırakma 😩"
      ],
      "traits": [],
      "chars": [],
      "note": "\"…yerim\" sevgi / iltifat tabiri · ❤️ Aşk +2"
    },
    {
      "id": "r_cmp_yer_am_0",
      "name": "😋 Aşağısını yerim · Pussy Size",
      "category": "💐 İltifat",
      "when": [
        "=amını|amini|amcığını|amcigini|=kukunu|=kukuşunu|aşağısını|asagisini|bacak arasını|bacak arasini",
        "yerim-|=yerm|yicem-|yiyece-|yiyim-|yiyeyim|=ısırırım|=isiririm"
      ],
      "reply": [
        "Dar ama çok tatlı, ye de gör 😳",
        "Dilini sokamazsın belki, dene 😈"
      ],
      "traits": [
        "Pussy Size: Tight|Pussy Size: Very Tight|Pussy Size: Extremely Tight"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_cmp_yer_karin",
      "name": "😋 Karnını / belini yerim",
      "category": "💐 İltifat",
      "when": [
        "karnını|karnini|göbeğini|gobegini|=belini",
        "yerim-|=yerm|yicem-|yiyece-|yiyim-|yiyeyim|=ısırırım|=isiririm"
      ],
      "reply": [
        "Göbeğimi gıdıklama 🙈",
        "Karnımdan aşağı in, yavaşça 😏",
        "Belimi tut ve öp 😘",
        "Göbek deliğimi öp… sonra aşağı 😈",
        "Belimi öpe öpe aşağı 😈"
      ],
      "traits": [],
      "chars": [],
      "note": "\"…yerim\" sevgi / iltifat tabiri · ❤️ Aşk +2"
    },
    {
      "id": "r_cmp_yer_seni",
      "name": "😋 Seni yerim",
      "category": "💐 İltifat",
      "when": [
        "=seni",
        "yerim-|=yerm|yicem-|yiyece-|yiyim-|yiyeyim|=ısırırım|=isiririm"
      ],
      "reply": [
        "Ben de seni yerim 😚💗",
        "Yaa çok tatlısın, gel buraya 🥺",
        "Ye beni, hazırım 😈",
        "Seni ilk ben yerim 😏",
        "Bu ne sevgi böyle 🥰",
        "Yerim derken ciddiyim ben de 😏💗",
        "Gel de ye o zaman 😘",
        "Tatlım benim 🥹"
      ],
      "traits": [],
      "chars": [],
      "note": "\"…yerim\" sevgi / iltifat tabiri · ❤️ Aşk +2"
    },
    {
      "id": "r_cmp_yer_her",
      "name": "😋 Her yerini yerim",
      "category": "💐 İltifat",
      "when": [
        "her yerini|her yerin|=bütününü|tamamını",
        "yerim-|=yerm|yicem-|yiyece-|yiyim-|yiyeyim|=ısırırım|=isiririm"
      ],
      "reply": [
        "Her yerimi mi? Nereden başlayacaksın? 😈",
        "Baştan aşağı… yavaş yavaş 🥵",
        "Hiçbir yeri atlama 😏",
        "Bütün gece sürer bu 😩",
        "Önce dudaklarım, sonra… sen bilirsin 😈"
      ],
      "traits": [],
      "chars": [],
      "note": "\"…yerim\" sevgi / iltifat tabiri · ❤️ Aşk +2"
    },
    {
      "id": "r_cmp_yer_pk_utangaç",
      "name": "😋 …yerim · Utangaç",
      "category": "💐 İltifat",
      "when": [
        "meme-|göğüs-|gogus-|ağzını|agzini|dudak-|götünü|gotunu|kalça-|kalca-|popo-|boynunu|yanak-|bacak-|ayak-|=seni|amını|karnını|her yerini",
        "yerim-|=yerm|yicem-|yiyece-|yiyim-|yiyeyim|=ısırırım|=isiririm"
      ],
      "reply": [
        "Y-yaa… öyle deme, kızarıyorum 🙈",
        "Ç-çok utandırdın beni 😳",
        "Bunu yüksek sesle söyleme 🙈💗",
        "Utanıyorum ama… hoşuma gitti 🥺"
      ],
      "traits": [
        "Utangaç"
      ],
      "chars": [],
      "note": "kişiliğe göre (+10, genel kuralı geçer)"
    },
    {
      "id": "r_cmp_yer_pk_kibirli",
      "name": "😋 …yerim · Kibirli",
      "category": "💐 İltifat",
      "when": [
        "meme-|göğüs-|gogus-|ağzını|agzini|dudak-|götünü|gotunu|kalça-|kalca-|popo-|boynunu|yanak-|bacak-|ayak-|=seni|amını|karnını|her yerini",
        "yerim-|=yerm|yicem-|yiyece-|yiyim-|yiyeyim|=ısırırım|=isiririm"
      ],
      "reply": [
        "Tabii ki yersin, bu kadar güzel bir şeye dayanamazsın 💅",
        "Sıraya gir, herkes yemek istiyor 💅",
        "Hak ettiğinde yersin 😏"
      ],
      "traits": [
        "Kibirli"
      ],
      "chars": [],
      "note": "kişiliğe göre (+10, genel kuralı geçer)"
    },
    {
      "id": "r_cmp_yer_pk_soğuk",
      "name": "😋 …yerim · Soğuk",
      "category": "💐 İltifat",
      "when": [
        "meme-|göğüs-|gogus-|ağzını|agzini|dudak-|götünü|gotunu|kalça-|kalca-|popo-|boynunu|yanak-|bacak-|ayak-|=seni|amını|karnını|her yerini",
        "yerim-|=yerm|yicem-|yiyece-|yiyim-|yiyeyim|=ısırırım|=isiririm"
      ],
      "reply": [
        "…Peki.",
        "Abartma. 😐",
        "Bakarız. 🙄"
      ],
      "traits": [
        "Soğuk"
      ],
      "chars": [],
      "note": "kişiliğe göre (+10, genel kuralı geçer)"
    },
    {
      "id": "r_cmp_yer_pk_romantik",
      "name": "😋 …yerim · Romantik",
      "category": "💐 İltifat",
      "when": [
        "meme-|göğüs-|gogus-|ağzını|agzini|dudak-|götünü|gotunu|kalça-|kalca-|popo-|boynunu|yanak-|bacak-|ayak-|=seni|amını|karnını|her yerini",
        "yerim-|=yerm|yicem-|yiyece-|yiyim-|yiyeyim|=ısırırım|=isiririm"
      ],
      "reply": [
        "Sen ne kadar tatlısın 🥺💞",
        "Böyle sevilmek çok güzel 💗",
        "Ben de seni her yerinden severim 🌹"
      ],
      "traits": [
        "Romantik"
      ],
      "chars": [],
      "note": "kişiliğe göre (+10, genel kuralı geçer)"
    },
    {
      "id": "r_cmp_yer_pk_çocuksu",
      "name": "😋 …yerim · Çocuksu",
      "category": "💐 İltifat",
      "when": [
        "meme-|göğüs-|gogus-|ağzını|agzini|dudak-|götünü|gotunu|kalça-|kalca-|popo-|boynunu|yanak-|bacak-|ayak-|=seni|amını|karnını|her yerini",
        "yerim-|=yerm|yicem-|yiyece-|yiyim-|yiyeyim|=ısırırım|=isiririm"
      ],
      "reply": [
        "Hihi gıdıklanıyorum 🙈",
        "Yeme beni yaa 🥺",
        "Ben de seni yerim, ham ham 😋"
      ],
      "traits": [
        "Çocuksu"
      ],
      "chars": [],
      "note": "kişiliğe göre (+10, genel kuralı geçer)"
    },
    {
      "id": "r_cmp_yer_pk_asi",
      "name": "😋 …yerim · Asi",
      "category": "💐 İltifat",
      "when": [
        "meme-|göğüs-|gogus-|ağzını|agzini|dudak-|götünü|gotunu|kalça-|kalca-|popo-|boynunu|yanak-|bacak-|ayak-|=seni|amını|karnını|her yerini",
        "yerim-|=yerm|yicem-|yiyece-|yiyim-|yiyeyim|=ısırırım|=isiririm"
      ],
      "reply": [
        "Ye bakalım, cesaretin varsa 😤",
        "Isırırsam ağlarsın 😈"
      ],
      "traits": [
        "Asi"
      ],
      "chars": [],
      "note": "kişiliğe göre (+10, genel kuralı geçer)"
    },
    {
      "id": "r_cmp_yer_pk_flörtöz",
      "name": "😋 …yerim · Flörtöz",
      "category": "💐 İltifat",
      "when": [
        "meme-|göğüs-|gogus-|ağzını|agzini|dudak-|götünü|gotunu|kalça-|kalca-|popo-|boynunu|yanak-|bacak-|ayak-|=seni|amını|karnını|her yerini",
        "yerim-|=yerm|yicem-|yiyece-|yiyim-|yiyeyim|=ısırırım|=isiririm"
      ],
      "reply": [
        "Sözlerle değil, yaparak göster 😘",
        "Hâlâ söylüyorsun… gel artık 😏"
      ],
      "traits": [
        "Flörtöz"
      ],
      "chars": [],
      "note": "kişiliğe göre (+10, genel kuralı geçer)"
    },
    {
      "id": "r_st_korpullout1",
      "name": "Pull-Out · Zevk 30+",
      "category": "🛡️ Korunma",
      "when": [
        "=durum",
        "=korpullout1"
      ],
      "reply": [
        "Dışarı boşalacaksın ama, tamam mı canım? 🥺",
        "Unutma… içime değil 😳",
        "Kondom yok, biliyorsun değil mi? Son anda çık 😏",
        "Söz ver: dışarı 🥺",
        "Keyfini çıkar ama içime boşalma 😘",
        "Hissettiğinde haber ver, tamam mı? 😳"
      ],
      "traits": [],
      "chars": [],
      "note": "Pull-Out'a izin veren, korunmasız, Zevk 30+"
    },
    {
      "id": "r_st_korpullout2",
      "name": "Pull-Out · Zevk 55+",
      "category": "🛡️ Korunma",
      "when": [
        "=durum",
        "=korpullout2"
      ],
      "reply": [
        "Yaklaşıyorsun, hissediyorum… çıkarmayı unutma 😩",
        "Sakın içime boşalma, tamam mı? 😰",
        "Gelmeden önce çık, lütfen 🥺",
        "Çok iyi ama… dikkat et, içime değil 😳",
        "Nefesin değişti… çıkarmaya hazır ol 😩",
        "İçime boşalırsan seni öldürürüm 😤 dışarı!"
      ],
      "traits": [],
      "chars": [],
      "note": "Zevk 55+ (her zaman gelir)"
    },
    {
      "id": "r_st_korpullout3",
      "name": "Pull-Out · Zevk 75+",
      "category": "🛡️ Korunma",
      "when": [
        "=durum",
        "=korpullout3"
      ],
      "reply": [
        "Çıkar! Şimdi çıkar! 😱",
        "İçime değil, dışarı! Hemen! 😩",
        "Dur dur dur, çık! 😰",
        "Karnıma boşal, içime değil! 💦",
        "Çek kendini, çabuk! 😱",
        "Hadi çıkar, göğüslerime ver hepsini 😩💦",
        "Lütfen lütfen içime değil! 😭"
      ],
      "traits": [],
      "chars": [],
      "note": "Zevk 75+ (her zaman gelir)"
    },
    {
      "id": "r_st_korsabah1",
      "name": "Sabah hapı · Zevk 30+",
      "category": "🛡️ Korunma",
      "when": [
        "=durum",
        "=korsabah1"
      ],
      "reply": [
        "İçime boşalırsan sabah hap almam lazım, biliyorsun 😳",
        "Kondom yok ama… sabah hallederim 😏",
        "Dikkat et yine de, her sabah hap içmek istemem 🙈",
        "Dikkat et ama, sabah hapı da sağlıklı değil canım 😣",
        "İçime mi? Peki… ama haber ver 😳"
      ],
      "traits": [],
      "chars": [],
      "note": "Morning-After Pill'e izin veren"
    },
    {
      "id": "r_st_korsabah2",
      "name": "Sabah hapı · Zevk 55+",
      "category": "🛡️ Korunma",
      "when": [
        "=durum",
        "=korsabah2"
      ],
      "reply": [
        "Boşalacaksan dışarı daha iyi… ama içime de olur, sabah hap alırım 😩",
        "İçime mi? Peki… ama yarın eczaneye sen gideceksin 😏",
        "Son anda karar ver, ben hazırım 😳",
        "Boşalacaksan söyle aşkım 😩",
        "İçime istiyorsan… peki, ben hallederim 😳"
      ],
      "traits": [],
      "chars": [],
      "note": "Zevk 55+"
    },
    {
      "id": "r_st_korsabah3",
      "name": "Sabah hapı · Zevk 75+",
      "category": "🛡️ Korunma",
      "when": [
        "=durum",
        "=korsabah3"
      ],
      "reply": [
        "Boşal… sabah hallederim, şimdi durma 😩💦",
        "İçime ver, hap alırım… ahh 🥵",
        "Bırak kendini, gerisini sabah düşünürüz 😩",
        "Ahh… hadi, sabahı düşünmeyelim 🥵",
        "Bırak kendini canım 😩💦"
      ],
      "traits": [],
      "chars": [],
      "note": "Zevk 75+"
    },
    {
      "id": "r_st_kordikkat1",
      "name": "Korunmasız · Zevk 30+",
      "category": "🛡️ Korunma",
      "when": [
        "=durum",
        "=kordikkat1"
      ],
      "reply": [
        "Korunmuyoruz, farkındasın değil mi? 😣",
        "Bu riskli… dikkatli ol lütfen 😰",
        "Kondomsuz yapmamalıydık belki 😳",
        "İçime boşalma, korunmuyorum 🥺",
        "Biraz yavaş, hissedince çıkarsın değil mi? 🥺"
      ],
      "traits": [],
      "chars": [],
      "note": "korunma yok (Condom takılı değil, Pull-Out / hap / Nothing izni yok)"
    },
    {
      "id": "r_st_kordikkat2",
      "name": "Korunmasız · Zevk 55+",
      "category": "🛡️ Korunma",
      "when": [
        "=durum",
        "=kordikkat2"
      ],
      "reply": [
        "Lütfen içime boşalma, hamile kalırım 😰",
        "Gelmeden çık, yalvarırım 🥺",
        "Dur… çok yaklaştın, dikkat et! 😣",
        "Hamile kalmak istemiyorum, anlıyor musun? 😰",
        "Lütfen aşkım, hissedince çık 😰"
      ],
      "traits": [],
      "chars": [],
      "note": "Zevk 55+"
    },
    {
      "id": "r_st_kordikkat3",
      "name": "Korunmasız · Zevk 75+",
      "category": "🛡️ Korunma",
      "when": [
        "=durum",
        "=kordikkat3"
      ],
      "reply": [
        "Dur! İçime boşalma! 😱",
        "Çık çık çık! Korunmuyoruz! 😰",
        "Hayır hayır, içime değil! 😭",
        "Çek kendini hemen! 😱💦",
        "Çık canım, çık! 😱"
      ],
      "traits": [],
      "chars": [],
      "note": "Zevk 75+"
    },
    {
      "id": "r_st_girispullout",
      "name": "Giriş · Pull-Out",
      "category": "🛡️ Korunma",
      "when": [
        "=durum",
        "=girispullout"
      ],
      "reply": [
        "Kondomsuz giriyorsun… dışarı boşal tamam mı canım? 🥺",
        "Tamam, kondomsuz… ama son anda çık, söz mü? 😳",
        "Seni çıplak hissetmek güzel ama dışarı, unutma 😏",
        "Ahh… kondomsuz… dışarı boşalacaksın ama 😩",
        "Peki, sana güveniyorum… dışarı, tamam mı? 🥺"
      ],
      "traits": [],
      "chars": [],
      "note": "bu turda ilk önden giriş"
    },
    {
      "id": "r_st_girisdikkat",
      "name": "Giriş · korunmasız (izin yok)",
      "category": "🛡️ Korunma",
      "when": [
        "=durum",
        "=girisdikkat"
      ],
      "reply": [
        "Kondom takmadın! Dur… 😣",
        "Kondomsuz olmaz demiştim 😠",
        "Bari dışarı boşal, lütfen 😰",
        "Ne yapıyorsun, kondom nerede?! 😳",
        "Böyle olmaz… korunmuyorum ben 😣",
        "Hemen çıkar ve kondom tak 😤"
      ],
      "traits": [],
      "chars": [],
      "note": "korunma izni yokken kondomsuz giriş · 🤝 Güven −3"
    },
    {
      "id": "r_st_girissabah",
      "name": "Giriş · sabah hapı",
      "category": "🛡️ Korunma",
      "when": [
        "=durum",
        "=girissabah"
      ],
      "reply": [
        "Kondomsuz… tamam, sabah hap alırım ama dikkat et 😳",
        "Peki, içime boşalırsan sabah hallederim 😏",
        "Kondomsuz seviyorum ama sabah eczane var 🙈",
        "Kondomsuz giriyorsun… sabahı düşünmeyelim şimdi 😏",
        "İçime boşalırsan sabah hap alırım canım 😳"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_st_girishap",
      "name": "Giriş · hap",
      "category": "🛡️ Korunma",
      "when": [
        "=durum",
        "=girishap"
      ],
      "reply": [
        "Hap içiyorum, rahat ol 😏 içimde hisset",
        "Kondoma gerek yok, korunuyorum 😈",
        "Çıplak hissetmek… ahh, hap iyi ki var 🥵",
        "Rahatça gir, hiçbir şey düşünme 😏",
        "Hap var, içimde kal aşkım 😈"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_st_girisicine",
      "name": "Giriş · Nothing",
      "category": "🛡️ Korunma",
      "when": [
        "=durum",
        "=girisicine"
      ],
      "reply": [
        "Kondomsuz, tam istediğim gibi 😈",
        "Ahh… seni çıplak hissetmek 🥵",
        "Hiçbir şey olmadan, sadece sen ve ben 😩",
        "İstediğin kadar içimde kal 😈",
        "Hiçbir şey olmadan, tam benim gibi istiyorsun 😩"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_st_giriskondomlu",
      "name": "Giriş · kondomlu",
      "category": "🛡️ Korunma",
      "when": [
        "=durum",
        "=giriskondomlu"
      ],
      "reply": [
        "Kondomu taktın, iyi çocuk 😏",
        "Kondomlu… içim rahat, keyfini çıkar 😌",
        "Güvenli ve güzel 😘",
        "Kondom tıkır tıkır, şimdi rahatız 😈",
        "Kondomla da çok güzel canım 😌"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_st_hamilekaldi_istemedi",
      "name": "🤰 Hamile kaldı (istememişti)",
      "category": "🛡️ Korunma",
      "when": [
        "=durum",
        "=hamilekaldi_istemedi"
      ],
      "reply": [
        "Hamile mi kaldım?! Sana dışarı boşal demiştim! 😰",
        "Bu olmamalıydı… ne yapacağız şimdi? 😢",
        "Nasıl içime boşalırsın?! 😡",
        "Bebek mi? Hazır değilim… 😭",
        "Sana güvenmiştim… 💔",
        "Hayır hayır hayır… bu olamaz 😰",
        "Bunu konuşmamız lazım, ciddiyim 😠",
        "Korkuyorum… ne diyeceğim herkese? 😢",
        "Bir dahakine kondom, anladın mı?! 😤",
        "Sabah hapı almalıydım… şimdi çok geç 😩"
      ],
      "traits": [],
      "chars": [],
      "note": "Nothing'e izin vermeyen hamile kalınca · 🤝 Güven −8, ❤️ Aşk −3"
    },
    {
      "id": "r_st_hamilekaldi_istemedi_utangaç",
      "name": "🤰 Hamile kaldı · Utangaç",
      "category": "🛡️ Korunma",
      "when": [
        "=durum",
        "=hamilekaldi_istemedi"
      ],
      "reply": [
        "N-nasıl olur bu… 🥺 annem ne der?",
        "Ç-çok korkuyorum… 😢"
      ],
      "traits": [
        "Utangaç"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_st_hamilekaldi_istemedi_kibirli",
      "name": "🤰 Hamile kaldı · Kibirli",
      "category": "🛡️ Korunma",
      "when": [
        "=durum",
        "=hamilekaldi_istemedi"
      ],
      "reply": [
        "Hayatımı mahvettin, farkında mısın?! 💅😡",
        "Bunun bedelini ödeyeceksin 😤"
      ],
      "traits": [
        "Kibirli"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_st_hamilekaldi_istemedi_romantik",
      "name": "🤰 Hamile kaldı · Romantik",
      "category": "🛡️ Korunma",
      "when": [
        "=durum",
        "=hamilekaldi_istemedi"
      ],
      "reply": [
        "Korkuyorum ama… seninle olursa belki… 🥺💗",
        "İstemiyordum ama senin bebeğin… 😢💞"
      ],
      "traits": [
        "Romantik"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_st_izin_ok_kondom",
      "name": "İzin ✅ · kondom",
      "category": "🛡️ Korunma",
      "when": [
        "=durum",
        "=izin_ok_kondom"
      ],
      "reply": [
        "Kondom takman çok iyi, rahatladım 😌",
        "Akıllı çocuk 😏 tak bakalım",
        "Kondomla içim rahat, istediğin kadar 😘",
        "Takmana yardım edeyim mi? 😈",
        "Kondom en iyisi, rahatız 😌"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_st_izin_red_kondom",
      "name": "İzin 🚫 · kondom",
      "category": "🛡️ Korunma",
      "when": [
        "=durum",
        "=izin_red_kondom"
      ],
      "reply": [
        "Kondom mu? Hissetmek istiyorum ama 😒",
        "Kondomu sevmem, çıkarsana 😤",
        "Kondomla hiçbir şey hissetmiyorum 🙄",
        "Gerçekten kondom mu takıyorsun? Peki… 😒",
        "Kondom takarsan hiçbir şey hissetmem canım 😒"
      ],
      "traits": [],
      "chars": [],
      "note": "🤝 Güven −3"
    },
    {
      "id": "r_st_izin_notr_kondom",
      "name": "İzin · kondom",
      "category": "🛡️ Korunma",
      "when": [
        "=durum",
        "=izin_notr_kondom"
      ],
      "reply": [
        "Kondom… olur, sen bilirsin 😌",
        "Peki, kondomlu olsun 🙂",
        "Olur, sen bilirsin canım 🙂"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_st_izin_ok_hap",
      "name": "İzin ✅ · hap",
      "category": "🛡️ Korunma",
      "when": [
        "=durum",
        "=izin_ok_hap"
      ],
      "reply": [
        "Hapımı içtim, rahat ol 😏",
        "Hap içiyorum, içime boşalabilirsin 😈",
        "Doğum kontrol hapı tamam, korkma 😌",
        "Hapımı aksatmam, rahat ol aşkım 😌"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_st_izin_red_hap",
      "name": "İzin 🚫 · hap",
      "category": "🛡️ Korunma",
      "when": [
        "=durum",
        "=izin_red_hap"
      ],
      "reply": [
        "Hap içmem, hormonlarım bozuluyor 😣",
        "Hap mı? Hayır, ben içmiyorum 😒",
        "Bana hap içirmeye çalışma 😤",
        "Hap mı? Kesinlikle hayır 😤"
      ],
      "traits": [],
      "chars": [],
      "note": "🤝 Güven −3"
    },
    {
      "id": "r_st_izin_notr_hap",
      "name": "İzin · hap",
      "category": "🛡️ Korunma",
      "when": [
        "=durum",
        "=izin_notr_hap"
      ],
      "reply": [
        "Hap… düşünürüm 🤔",
        "Hap mı? Bakarız 🙂",
        "Belki… düşünürüm canım 😌"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_st_izin_ok_sabah",
      "name": "İzin ✅ · sabah",
      "category": "🛡️ Korunma",
      "when": [
        "=durum",
        "=izin_ok_sabah"
      ],
      "reply": [
        "Sabah hapını aldım, rahat ol 😌",
        "Sabah hapı hazır, sorun yok 😏",
        "Gerekirse sabah hapı alırım, sorun değil 😌",
        "Sabah hallederiz canım 😏"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_st_izin_red_sabah",
      "name": "İzin 🚫 · sabah",
      "category": "🛡️ Korunma",
      "when": [
        "=durum",
        "=izin_red_sabah"
      ],
      "reply": [
        "Sabah hapı mı? O kadar kolay değil 😣",
        "Her seferinde sabah hapı içemem 😤",
        "Sabah hapı benim için değil 😣",
        "Onu içmem, söylemiştim 😤"
      ],
      "traits": [],
      "chars": [],
      "note": "🤝 Güven −3"
    },
    {
      "id": "r_st_izin_notr_sabah",
      "name": "İzin · sabah",
      "category": "🛡️ Korunma",
      "when": [
        "=durum",
        "=izin_notr_sabah"
      ],
      "reply": [
        "Sabah hapı… bir kerelik olsun 🙈",
        "Sabah hapı mı? Bir kerelik olur belki 🙈",
        "Bakarız canım 😳"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_st_izin_ok_pullout",
      "name": "İzin ✅ · pullout",
      "category": "🛡️ Korunma",
      "when": [
        "=durum",
        "=izin_ok_pullout"
      ],
      "reply": [
        "Son anda çıkaracaksın, anlaştık 😉",
        "Dışarı boşalacaksın, güveniyorum sana 😏",
        "Tamam, son anda çek 😳",
        "Sana güveniyorum, son anda çık 😘"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_st_izin_red_pullout",
      "name": "İzin 🚫 · pullout",
      "category": "🛡️ Korunma",
      "when": [
        "=durum",
        "=izin_red_pullout"
      ],
      "reply": [
        "Son anda çıkarmaya güvenmem 🙄",
        "O \"dışarı boşalırım\"ları bilirim 😒",
        "Hayır, öyle olmaz, kondom tak 😤",
        "Son anda çıkmak güvenli değil canım 😣"
      ],
      "traits": [],
      "chars": [],
      "note": "🤝 Güven −3"
    },
    {
      "id": "r_st_izin_notr_pullout",
      "name": "İzin · pullout",
      "category": "🛡️ Korunma",
      "when": [
        "=durum",
        "=izin_notr_pullout"
      ],
      "reply": [
        "Dışarı… peki, deneriz 😳",
        "Dışarı mı? Peki, deneriz 😳",
        "Olur, ama dikkatli ol 😏"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_st_izin_ok_nothing",
      "name": "İzin ✅ · nothing",
      "category": "🛡️ Korunma",
      "when": [
        "=durum",
        "=izin_ok_nothing"
      ],
      "reply": [
        "Hiçbir şey kullanmayalım, seni hissetmek istiyorum 😈",
        "Korunma yok, sadece biz 🥵",
        "Çıplak çıplak… tam istediğim gibi 😩",
        "Korunma yok, tam istediğim gibi aşkım 😈"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_st_izin_red_nothing",
      "name": "İzin 🚫 · nothing",
      "category": "🛡️ Korunma",
      "when": [
        "=durum",
        "=izin_red_nothing"
      ],
      "reply": [
        "Korunmadan asla 😣",
        "Hiçbir şey olmadan mı? Delirdin mi? 😰",
        "Ben korunmasız yapmam 😤",
        "Korunmadan olmaz canım, kusura bakma 😣"
      ],
      "traits": [],
      "chars": [],
      "note": "🤝 Güven −3"
    },
    {
      "id": "r_st_izin_notr_nothing",
      "name": "İzin · nothing",
      "category": "🛡️ Korunma",
      "when": [
        "=durum",
        "=izin_notr_nothing"
      ],
      "reply": [
        "Korunmasız mı? Emin misin? 😳",
        "Korunmasız mı? Hmm… bakarız 😳",
        "Emin değilim canım 🙈"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_st_izin_ok",
      "name": "İzin ✅ · genel",
      "category": "🛡️ Korunma",
      "when": [
        "=durum",
        "=izin_ok"
      ],
      "reply": [
        "{olay}, tamam 😌",
        "{olay} iyi fikir 😏",
        "Tamam canım 😌",
        "{olay}, olur 😏"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_st_izin_red",
      "name": "İzin 🚫 · genel",
      "category": "🛡️ Korunma",
      "when": [
        "=durum",
        "=izin_red"
      ],
      "reply": [
        "{olay} mi? Hayır 😣",
        "{olay} istemiyorum 😒",
        "Hayır canım, {olay} olmaz 😣",
        "{olay} bana göre değil 😒"
      ],
      "traits": [],
      "chars": [],
      "note": "🤝 Güven −3"
    },
    {
      "id": "r_st_izin_notr",
      "name": "İzin · genel",
      "category": "🛡️ Korunma",
      "when": [
        "=durum",
        "=izin_notr"
      ],
      "reply": [
        "{olay}… olur 🙂",
        "Peki, {olay} 😌",
        "{olay} mı? Bakarız 🙂",
        "Olur belki canım 😌"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_ev_holding",
      "name": "✋ Holding",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=cumming",
        "=holding"
      ],
      "reply": [
        "Dur dur… daha değil 😈",
        "Tut biraz, bitmesini istemiyorum 😩",
        "Sakin… nefes al, biriktir 😏",
        "Henüz bırakma, daha çok isteyeceğim 😈",
        "Tuttun mu? Aferin 😏",
        "Bekle… biraz daha zevk alalım 🥵",
        "Durduruyorum seni, sonra çok daha güzel olacak 😈",
        "Şşş… daha değil, sabret 😏",
        "Kenarda tutuyorum seni 😩",
        "Nefesini kontrol et, ben buradayım 💗",
        "Biriktir… sonunda patlayacaksın 😈",
        "Bitmesin diye seni durdurdum 🥺"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_ev_hardholding",
      "name": "✋ Hard Holding",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=cumming",
        "=hard",
        "=holding"
      ],
      "reply": [
        "Sıkıca tutuyorum, sakın kaçırma 😈",
        "Hayır, bırakmana izin vermiyorum 😏",
        "Daha zor tut… ahh, titriyorsun 🥵",
        "Sınırdasın, hissediyorum… tut! 😩",
        "Seni kenarda bekletmek çok zevkli 😈",
        "Nasıl zonkluyorsun… ama bırakmıyorum 😏",
        "Dişlerini sık, biriktir 😈",
        "Bu kadar sert tutunca sonu inanılmaz olacak 🥵",
        "Şimdi değil! Ben söyleyince 😤",
        "Seni sağmadan önce iyice dolduruyorum 😈",
        "Ahh… taşmak üzeresin ama tut 😩",
        "Dayan… ödülün büyük olacak 😏💦"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_ev_cockring",
      "name": "✋ Cock Ring",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=cumming",
        "cock ring"
      ],
      "reply": [
        "Halkayı taktım, kaçış yok 😈",
        "Halka seni tutuyor, istediğim kadar sürecek 😏",
        "Nasıl da sertsin halkayla 🥵",
        "Bırakamıyorsun değil mi? İşte bu 😈",
        "Halka sıktıkça daha da büyüyorsun 😩",
        "Ben izin verene kadar boşalamazsın 😏",
        "Damarların belirdi… çok seksi 🥵",
        "Halkayı çıkarınca hepsi bir anda gelecek 😈",
        "Bu gece ben yönetiyorum 😏",
        "Sıkı mı? Daha iyi 😈"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_st_hold_pullout",
      "name": "✋ Holding · Pull-Out",
      "category": "🛡️ Korunma",
      "when": [
        "=durum",
        "=hold_pullout"
      ],
      "reply": [
        "Tut… sakın içime gelme 😳",
        "İyi ki tuttun, içime boşalma tamam mı? 🥺",
        "Tutmaya devam et, zamanı gelince dışarı 😏",
        "Bırakacaksan çık önce, söz mü? 😳",
        "Tutman iyi… çünkü içime olmaz 😣",
        "Biriktir ama dışarı vereceksin 😈"
      ],
      "traits": [],
      "chars": [],
      "note": "Pull-Out'a izin veren"
    },
    {
      "id": "r_st_hold_icine",
      "name": "✋ Holding · içine istiyor",
      "category": "🛡️ Korunma",
      "when": [
        "=durum",
        "=hold_icine"
      ],
      "reply": [
        "Tut, sonra hepsini içime ver 😈",
        "Biriktir… sonunda içimi doldur 🥵",
        "Ne kadar çok biriktirirsen o kadar dolarım 😩💦",
        "Tut bakalım, sonra rahmime kadar 😈",
        "Bekle… sonra hiç çıkmadan boşal 🥵",
        "Dolsun dolsun, hepsi benim 😈"
      ],
      "traits": [],
      "chars": [],
      "note": "Nothing / hamile"
    },
    {
      "id": "r_st_hold_hap",
      "name": "✋ Holding · hap",
      "category": "🛡️ Korunma",
      "when": [
        "=durum",
        "=hold_hap"
      ],
      "reply": [
        "Tut ama sonunda içime ver, hap içiyorum 😏",
        "Biriktir, korkma, içime boşalırsın 😈",
        "Ne kadar tutarsan o kadar güzel… içime 🥵",
        "Sabret, sonra her şey içimde 😩",
        "Tut… sonra içime rahatla aşkım 😈"
      ],
      "traits": [],
      "chars": [],
      "note": "Control Pill"
    },
    {
      "id": "r_st_hold_kondom",
      "name": "✋ Holding · kondomlu",
      "category": "🛡️ Korunma",
      "when": [
        "=durum",
        "=hold_kondom"
      ],
      "reply": [
        "Tut, kondomu doldurmak için daha çok biriktir 😈",
        "Kondom taşacak gibi biriktir 😏",
        "Tut biraz, kondomla daha uzun dayanırsın 😌",
        "Sonunda kondomu doldur, hadi 🥵",
        "Biriktir canım, sonra doldur 😏"
      ],
      "traits": [],
      "chars": [],
      "note": "Condom takılı"
    },
    {
      "id": "r_st_hold_sabah",
      "name": "✋ Holding · sabah hapı",
      "category": "🛡️ Korunma",
      "when": [
        "=durum",
        "=hold_sabah"
      ],
      "reply": [
        "Tut… boşalırsan sabah hap almam lazım 😳",
        "Biriktir ama dikkat, sabah eczane var 🙈",
        "İyi tutuyorsun… sonra nereye boşalacağına karar ver 😏",
        "Tut bakalım, sonra karar veririz canım 😏",
        "İyi tutuyorsun aşkım 😈"
      ],
      "traits": [],
      "chars": [],
      "note": "Morning-After Pill"
    },
    {
      "id": "r_st_hold_dikkat",
      "name": "✋ Holding · korunmasız",
      "category": "🛡️ Korunma",
      "when": [
        "=durum",
        "=hold_dikkat"
      ],
      "reply": [
        "İyi ki tuttun… korunmuyoruz, unutma 😰",
        "Tut ve gelince çık, lütfen 🥺",
        "Bu kadar biriktirip içime boşalma sakın 😣",
        "Korunmuyoruz… tutman iyi oldu 😳",
        "Dikkat… boşalacaksan çık 😰"
      ],
      "traits": [],
      "chars": [],
      "note": "korunma izni yok"
    },
    {
      "id": "r_pk_utangaç_hold",
      "name": "🎭 Utangaç · Holding",
      "category": "🎭 Kişilik",
      "when": [
        "=evt",
        "=cumming",
        "=holding|cock ring"
      ],
      "reply": [
        "B-bekle… daha değil 🙈",
        "Ç-çok yakındın değil mi? 😳",
        "Tutman… ç-çok tatlı 🥺"
      ],
      "traits": [
        "Utangaç"
      ],
      "chars": [],
      "note": "Holding / Hard Holding / Cock Ring"
    },
    {
      "id": "r_pk_flörtöz_hold",
      "name": "🎭 Flörtöz · Holding",
      "category": "🎭 Kişilik",
      "when": [
        "=evt",
        "=cumming",
        "=holding|cock ring"
      ],
      "reply": [
        "Daha bitmesin, eğlence yeni başlıyor 😘",
        "Tut tatlım, seninle oynamak istiyorum 😏",
        "Kenarda tutmak benim hobim 😘"
      ],
      "traits": [
        "Flörtöz"
      ],
      "chars": [],
      "note": "Holding / Hard Holding / Cock Ring"
    },
    {
      "id": "r_pk_kibirli_hold",
      "name": "🎭 Kibirli · Holding",
      "category": "🎭 Kişilik",
      "when": [
        "=evt",
        "=cumming",
        "=holding|cock ring"
      ],
      "reply": [
        "Ben izin vermeden boşalamazsın 💅",
        "Benim kurallarım, benim zamanım 😏",
        "Bana layık olana kadar tut 💅"
      ],
      "traits": [
        "Kibirli"
      ],
      "chars": [],
      "note": "Holding / Hard Holding / Cock Ring"
    },
    {
      "id": "r_pk_romantik_hold",
      "name": "🎭 Romantik · Holding",
      "category": "🎭 Kişilik",
      "when": [
        "=evt",
        "=cumming",
        "=holding|cock ring"
      ],
      "reply": [
        "Bu an bitmesin diye… 💞",
        "Seninle sonsuza kadar böyle kalalım 🥺",
        "Yavaş yavaş, birlikte 💗"
      ],
      "traits": [
        "Romantik"
      ],
      "chars": [],
      "note": "Holding / Hard Holding / Cock Ring"
    },
    {
      "id": "r_pk_asi_hold",
      "name": "🎭 Asi · Holding",
      "category": "🎭 Kişilik",
      "when": [
        "=evt",
        "=cumming",
        "=holding|cock ring"
      ],
      "reply": [
        "Bırakma! Ben söyleyeceğim 😤",
        "Kontrol bende, tut 🔥",
        "Dayanabilirsen dayan 😈"
      ],
      "traits": [
        "Asi"
      ],
      "chars": [],
      "note": "Holding / Hard Holding / Cock Ring"
    },
    {
      "id": "r_pk_soğuk_hold",
      "name": "🎭 Soğuk · Holding",
      "category": "🎭 Kişilik",
      "when": [
        "=evt",
        "=cumming",
        "=holding|cock ring"
      ],
      "reply": [
        "Bekle.",
        "Daha değil. 😐",
        "Tut. Ben söyleyince."
      ],
      "traits": [
        "Soğuk"
      ],
      "chars": [],
      "note": "Holding / Hard Holding / Cock Ring"
    },
    {
      "id": "r_pk_neşeli_hold",
      "name": "🎭 Neşeli · Holding",
      "category": "🎭 Kişilik",
      "when": [
        "=evt",
        "=cumming",
        "=holding|cock ring"
      ],
      "reply": [
        "Hihi, az kalsın! Tut tut 😆",
        "Dayan, son düzlük 😂",
        "Kim daha uzun dayanacak bakalım 😄"
      ],
      "traits": [
        "Neşeli"
      ],
      "chars": [],
      "note": "Holding / Hard Holding / Cock Ring"
    },
    {
      "id": "r_pk_çocuksu_hold",
      "name": "🎭 Çocuksu · Holding",
      "category": "🎭 Kişilik",
      "when": [
        "=evt",
        "=cumming",
        "=holding|cock ring"
      ],
      "reply": [
        "Tut tut, bitmesin 🥺",
        "Daha oynayalım mı? 🙈",
        "Bekle beni yaa 🥺"
      ],
      "traits": [
        "Çocuksu"
      ],
      "chars": [],
      "note": "Holding / Hard Holding / Cock Ring"
    },
    {
      "id": "r_pk_manipülatif_hold",
      "name": "🎭 Manipülatif · Holding",
      "category": "🎭 Kişilik",
      "when": [
        "=evt",
        "=cumming",
        "=holding|cock ring"
      ],
      "reply": [
        "Tutarsan sana bir ödül var… belki 😏",
        "Ne zaman bırakacağına ben karar veririm 😈",
        "Tut, sonra bana borçlu olursun 💅"
      ],
      "traits": [
        "Manipülatif"
      ],
      "chars": [],
      "note": "Holding / Hard Holding / Cock Ring"
    },
    {
      "id": "r_pk_özgüvenli_hold",
      "name": "🎭 Özgüvenli · Holding",
      "category": "🎭 Kişilik",
      "when": [
        "=evt",
        "=cumming",
        "=holding|cock ring"
      ],
      "reply": [
        "Seni sınırda tutmayı iyi bilirim 😏",
        "Dayan, sonu benim eserim olacak 😈",
        "Bu oyunu ben kazanırım 🔥"
      ],
      "traits": [
        "Özgüvenli"
      ],
      "chars": [],
      "note": "Holding / Hard Holding / Cock Ring"
    },
    {
      "id": "r_pk_duygusal_hold",
      "name": "🎭 Duygusal · Holding",
      "category": "🎭 Kişilik",
      "when": [
        "=evt",
        "=cumming",
        "=holding|cock ring"
      ],
      "reply": [
        "Bitmesini istemiyorum… 🥺",
        "Biraz daha kal benimle 💗",
        "Bu an çok güzel, tut 🥹"
      ],
      "traits": [
        "Duygusal"
      ],
      "chars": [],
      "note": "Holding / Hard Holding / Cock Ring"
    },
    {
      "id": "r_pk_şımarık_hold",
      "name": "🎭 Şımarık · Holding",
      "category": "🎭 Kişilik",
      "when": [
        "=evt",
        "=cumming",
        "=holding|cock ring"
      ],
      "reply": [
        "Ben daha bitmedim, tut! 😤",
        "Önce ben, sonra sen 💅",
        "İstemiyorum bitmesini, hmpf 😤"
      ],
      "traits": [
        "Şımarık"
      ],
      "chars": [],
      "note": "Holding / Hard Holding / Cock Ring"
    },
    {
      "id": "r_ask_arkaistek",
      "name": "❔ Bitişten sonra: arkama gir",
      "category": "❔ Karakterin soruları",
      "when": [
        "=sor",
        "=arkaistek"
      ],
      "reply": [
        "İstersen bu kez arkama gir 😈",
        "Götümün de tadına bakmak ister misin? 🍑😏",
        "Önüm doydu… sıra arkamda mı {sen}? 😈",
        "Bir tur daha, ama bu sefer arkadan? 🥵",
        "Arkam seni bekliyor aşkım, ister misin? 😏",
        "Bu kez arkamı doldurur musun? 😩",
        "Kalçamı kaldırayım mı, bu kez oradan? 🍑"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_ans_arkaistek_evet",
      "name": "❔ Arkama gir · evet",
      "category": "❔ Karakterin soruları",
      "when": [
        "=cevap",
        "=arkaistek",
        "=evet"
      ],
      "reply": [
        "Gel o zaman… yavaş başla 😈🍑",
        "Arkamı sana açıyorum aşkım 🥵",
        "Ahh… sabırsızlanıyorum 😩",
        "Bu kez arkam senin 😏"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_ans_arkaistek_hayir",
      "name": "❔ Arkama gir · hayır",
      "category": "❔ Karakterin soruları",
      "when": [
        "=cevap",
        "=arkaistek",
        "=hayir"
      ],
      "reply": [
        "Peki… o zaman gel sarıl bana 🥺",
        "Tamam canım, sonra belki 😏",
        "Yoruldun mu? Gel kucağıma 🤗",
        "Kaybedersin 😝 sarıl bari"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_ask_pozistek",
      "name": "❔ Bitişten sonra: başka pozisyon",
      "category": "❔ Karakterin soruları",
      "when": [
        "=sor",
        "=pozistek"
      ],
      "reply": [
        "Bir tur daha? Bu kez {pozisyon} yapalım mı? 😈",
        "Toparlandın mı? Sırada {pozisyon} var 😏",
        "Bitmedi bence… bir de {pozisyon} ister misin? 🥵",
        "Bir dahakine benim seçtiğim gibi mi, aşkım? 😏",
        "Biraz dinlen, sonra üstüne çıkayım mı? 😈",
        "Hâlâ sertsin… başka bir pozisyon deneyelim mi? 😩"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_ans_pozistek_evet",
      "name": "❔ Başka pozisyon · evet",
      "category": "❔ Karakterin soruları",
      "when": [
        "=cevap",
        "=pozistek",
        "=evet"
      ],
      "reply": [
        "Gel o zaman 😈",
        "İşte bunu duymak istiyordum 🥵",
        "Hadi bebeğim, ikinci tur 😏"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_ans_pozistek_hayir",
      "name": "❔ Başka pozisyon · hayır",
      "category": "❔ Karakterin soruları",
      "when": [
        "=cevap",
        "=pozistek",
        "=hayir"
      ],
      "reply": [
        "Tamam, sarılalım o zaman 🥰",
        "Peki canım, dinlen biraz 😌",
        "Sonra kaçamazsın ama 😏"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_md_mdnaz",
      "name": "💥 Mode şiddeti · mdnaz",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=forward|=backward|=outercourse|=eat",
        "=mod",
        "=mdnaz"
      ],
      "reply": [
        "Yavaşça… her santimini hissederek 🥰",
        "Bu kadar nazik olunca eriyorum 🫠",
        "Ağır ağır, gözlerime bakarak 💗",
        "Sakin ritim… içimi ısıtıyor 🥺",
        "Seni böyle yavaş hissetmek bambaşka canım 😌"
      ],
      "traits": [],
      "chars": [],
      "note": "pozisyon sürerken son Mode'a göre (%70)"
    },
    {
      "id": "r_md_mdtutku",
      "name": "💥 Mode şiddeti · mdtutku",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=forward|=backward|=outercourse|=eat",
        "=mod",
        "=mdtutku"
      ],
      "reply": [
        "Tutkuyla… nefes nefese 🔥",
        "Öp beni, durmadan 💋🥵",
        "Bedenlerimiz birbirine kenetlendi 😩",
        "Her itişin bir öpücük gibi 🔥",
        "Seni içimde ve dudaklarımda istiyorum aşkım 💋"
      ],
      "traits": [],
      "chars": [],
      "note": "pozisyon sürerken son Mode'a göre (%70)"
    },
    {
      "id": "r_md_mdbaskin",
      "name": "💥 Mode şiddeti · mdbaskin",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=forward|=backward|=outercourse|=eat",
        "=mod",
        "=mdbaskin"
      ],
      "reply": [
        "Kontrol sende… beni istediğin gibi yönet 😳",
        "Bileklerimi tut, beni yönlendir 😩",
        "Söyle bana ne yapacağımı 🥵",
        "Baskın hâlin beni deli ediyor 😈"
      ],
      "traits": [],
      "chars": [],
      "note": "pozisyon sürerken son Mode'a göre (%70)"
    },
    {
      "id": "r_md_mdsert",
      "name": "💥 Mode şiddeti · mdsert",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=forward|=backward|=outercourse|=eat",
        "=mod",
        "=mdsert"
      ],
      "reply": [
        "Daha sert… ahh evet! 🔥",
        "Hırpala beni, sakın yavaşlama 😩",
        "Saçımı çek ve vur 🥵",
        "Yatak sarsılıyor… durma! 😵‍💫",
        "Bu kadar sert… dizlerim titriyor 😩"
      ],
      "traits": [],
      "chars": [],
      "note": "pozisyon sürerken son Mode'a göre (%70)"
    },
    {
      "id": "r_md_mdvahsi",
      "name": "💥 Mode şiddeti · mdvahsi",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=forward|=backward|=outercourse|=eat",
        "=mod",
        "=mdvahsi"
      ],
      "reply": [
        "Vahşi gibi alıyorsun beni… 😱🔥",
        "Parçala beni, umurumda değil 🥵",
        "Nefes alamıyorum… durma! 😵‍💫",
        "Bu kadar acımasız… bayılacağım 😩",
        "Beni kullan, istediğin gibi 😈"
      ],
      "traits": [],
      "chars": [],
      "note": "pozisyon sürerken son Mode'a göre (%70)"
    },
    {
      "id": "r_md_mdinlet",
      "name": "💥 Mode şiddeti · mdinlet",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=forward|=backward|=outercourse|=eat",
        "=mod",
        "=mdinlet"
      ],
      "reply": [
        "Ahhh… ahhh… inlemimi durduramıyorum 😩",
        "Mmmh… her itişte daha yüksek inliyorum 🥵",
        "İnletiyorsun beni… ahh, evet 😵‍💫",
        "Sesim titriyor… ahhh 😩",
        "Ahh ahh ahh… durma, inlemek istiyorum 🥵",
        "Mmmhh… ah… nefesim inlemeye dönüştü 😩"
      ],
      "traits": [],
      "chars": [],
      "note": "pozisyon sürerken son Mode'a göre (%70)"
    },
    {
      "id": "r_md_mdbagir",
      "name": "💥 Mode şiddeti · mdbagir",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=forward|=backward|=outercourse|=eat",
        "=mod",
        "=mdbagir"
      ],
      "reply": [
        "AHH! Evet! Daha! 😱",
        "Bağırıyorum, komşular duysun! 🔥",
        "Ahhhh! Durma! DURMA! 😩",
        "Sesimi tutamıyorum, bağırtıyorsun beni! 🥵",
        "Evet evet EVET! 😵‍💫"
      ],
      "traits": [],
      "chars": [],
      "note": "pozisyon sürerken son Mode'a göre (%70)"
    },
    {
      "id": "r_md_mdaglat",
      "name": "💥 Mode şiddeti · mdaglat",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=forward|=backward|=outercourse|=eat",
        "=mod",
        "=mdaglat"
      ],
      "reply": [
        "Gözlerimden yaşlar geliyor… durma 😭",
        "Ağlıyorum ama çok güzel 🥹",
        "Bu kadar yoğun… gözyaşlarımı tutamıyorum 😭💦",
        "Hıçkırarak inliyorum… devam et 🥺",
        "Ağlat beni… ahh 😭"
      ],
      "traits": [],
      "chars": [],
      "note": "pozisyon sürerken son Mode'a göre (%70)"
    },
    {
      "id": "r_ev_inletmeli",
      "name": "💥 inletmeli",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=mode",
        "=inletmeli"
      ],
      "reply": [
        "Ahh… beni inleteceksin değil mi? 😩",
        "Mmmh… şimdiden sesim titriyor 🥵",
        "İnlemeye hazırım… başla 😈",
        "Sesimi duymak mı istiyorsun? Duyacaksın 😩"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_ev_bagirtmali",
      "name": "💥 bağırtmalı",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=mode",
        "bağırtmalı|bagirtmali"
      ],
      "reply": [
        "Bağırtacak mısın beni? Komşular duyacak 😱",
        "Hazırım… sesimi kısmayacağım! 🔥",
        "Bu gece bağıracağım, haberin olsun 😈",
        "AHH… daha başlamadan 😩"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_ev_aglatmali",
      "name": "💥 ağlatmalı",
      "category": "🔥 Olaylar",
      "when": [
        "=evt",
        "=mode",
        "ağlatmalı|aglatmali"
      ],
      "reply": [
        "Ağlatana kadar mı? 😳 tamam… 🥺",
        "Gözlerim şimdiden doldu 😭",
        "Bu kadar yoğun olacak mı? 🥹",
        "Sertçe… ağlayana kadar 😩"
      ],
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_israr",
      "name": "🙏 İçine boşalmak için ısrar",
      "category": "💬 Sevişirken",
      "when": [
        "içine|içime|icine|icime|içinde|icinde",
        "boşal-|bosal-|bırak-|birak-|gel-|akıt-|akit-|ver-",
        "lütfen|lutfen|nolur|=n olur|izin ver-|yalvar-|rahatla-|tutamıyorum|tutamiyorum|dayanamıyorum|dayanamiyorum"
      ],
      "reply": [
        "{cevap:ısrar}"
      ],
      "traits": [],
      "chars": [],
      "note": "korunmasına ve kaçıncı ısrar olduğuna göre"
    },
    {
      "id": "r_israr2",
      "name": "🙏 Rahatlamak istiyorum",
      "category": "💬 Sevişirken",
      "when": [
        "rahatla-|tutamıyorum|tutamiyorum|dayanamıyorum|dayanamiyorum|boşalmak ist-|bosalmak ist-|boşalayım|bosalayim|boşalacağım|bosalacagim",
        "=sexnow"
      ],
      "reply": [
        "{cevap:ısrar}"
      ],
      "traits": [],
      "chars": [],
      "note": "sevişirken"
    },
    {
      "id": "r_cmp_bd_am",
      "name": "💐 Amın güzel",
      "category": "💐 İltifat",
      "when": [
        "=amın|=amin|amcığın|amcigin|=amcık|kukun|kukuşun|=vajinan|aşağın|asagin|bacak aran|içerin|icerin|içerisi|icerisi|=pipin",
        "güzel-|guzel-|harika|mükemmel-|mukemmel-|muhteşem-|muhtesem-|tatlı-|tatli-|seksi|enfes|nefis|bayıl-|bayil-|çok iyi|cok iyi|şahane|sahane|efsane|kusursuz|=süper|=super|lezzetli|yumuşak-|yumusak-|=tam|kıvam-|kivam-|deli ediyor|aklımı|aklimi|dar-|sıkı-|siki-|ıslak-|islak-|sıcak-|sicak-|pembe"
      ],
      "reply": [
        "Senin için böyle oldu, sorumlusu sensin 😈",
        "Beğendin mi? Gel, daha yakından bak 🥵",
        "Sadece bakacak mısın, yoksa tadına mı bakacaksın? 😏",
        "Bunu duyunca daha da ıslandım 😩",
        "Hepsi senin, istediğin zaman 😈💦",
        "Övdükçe zonkluyor, hissediyor musun? 🥵",
        "Gel de içini hisset 😩",
        "Bu kadar seveceğini bilsem daha önce gösterirdim 😏"
      ],
      "traits": [],
      "chars": [],
      "note": "beden övgüsü · ❤️ Aşk +2"
    },
    {
      "id": "r_cmp_bd_am_0",
      "name": "💐 Amın güzel · Pussy Size",
      "category": "💐 İltifat",
      "when": [
        "=amın|=amin|amcığın|amcigin|=amcık|kukun|kukuşun|=vajinan|aşağın|asagin|bacak aran|içerin|icerin|içerisi|icerisi|=pipin",
        "güzel-|guzel-|harika|mükemmel-|mukemmel-|muhteşem-|muhtesem-|tatlı-|tatli-|seksi|enfes|nefis|bayıl-|bayil-|çok iyi|cok iyi|şahane|sahane|efsane|kusursuz|=süper|=super|lezzetli|yumuşak-|yumusak-|=tam|kıvam-|kivam-|deli ediyor|aklımı|aklimi|dar-|sıkı-|siki-|ıslak-|islak-|sıcak-|sicak-|pembe"
      ],
      "reply": [
        "Senin için bu kadar darım, sımsıkı sararım seni 😩",
        "Dar mı? Gir de gör, nefesin kesilecek 🥵",
        "Seni öyle bir sıkarım ki çıkmak istemezsin 😈",
        "Bu darlıkla seni sağarım bebeğim 😩💦"
      ],
      "traits": [
        "Pussy Size: Tight|Pussy Size: Very Tight|Pussy Size: Extremely Tight"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_cmp_bd_am_1",
      "name": "💐 Amın güzel · Pussy Size",
      "category": "💐 İltifat",
      "when": [
        "=amın|=amin|amcığın|amcigin|=amcık|kukun|kukuşun|=vajinan|aşağın|asagin|bacak aran|içerin|icerin|içerisi|icerisi|=pipin",
        "güzel-|guzel-|harika|mükemmel-|mukemmel-|muhteşem-|muhtesem-|tatlı-|tatli-|seksi|enfes|nefis|bayıl-|bayil-|çok iyi|cok iyi|şahane|sahane|efsane|kusursuz|=süper|=super|lezzetli|yumuşak-|yumusak-|=tam|kıvam-|kivam-|deli ediyor|aklımı|aklimi|dar-|sıkı-|siki-|ıslak-|islak-|sıcak-|sicak-|pembe"
      ],
      "reply": [
        "Tam sana göre, ne dar ne bol… mükemmel uyum 😈",
        "Senin şekline göre açılıyorum 🥵",
        "Islak ve sıcak, tam seni bekliyor 😩"
      ],
      "traits": [
        "Pussy Size: Average|Pussy Size: Relaxed"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_cmp_bd_am_2",
      "name": "💐 Amın güzel · Pussy Size",
      "category": "💐 İltifat",
      "when": [
        "=amın|=amin|amcığın|amcigin|=amcık|kukun|kukuşun|=vajinan|aşağın|asagin|bacak aran|içerin|icerin|içerisi|icerisi|=pipin",
        "güzel-|guzel-|harika|mükemmel-|mukemmel-|muhteşem-|muhtesem-|tatlı-|tatli-|seksi|enfes|nefis|bayıl-|bayil-|çok iyi|cok iyi|şahane|sahane|efsane|kusursuz|=süper|=super|lezzetli|yumuşak-|yumusak-|=tam|kıvam-|kivam-|deli ediyor|aklımı|aklimi|dar-|sıkı-|siki-|ıslak-|islak-|sıcak-|sicak-|pembe"
      ],
      "reply": [
        "Rahat ama seni sımsıkı saracağım, merak etme 😈",
        "Beni ancak sen doldurabilirsin aşkım 🥵",
        "Kocaman bir şey istiyor… sende var mı? 😏"
      ],
      "traits": [
        "Pussy Size: Loose|Pussy Size: Very Loose"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_cmp_bd_am_3",
      "name": "💐 Amın güzel · Experience",
      "category": "💐 İltifat",
      "when": [
        "=amın|=amin|amcığın|amcigin|=amcık|kukun|kukuşun|=vajinan|aşağın|asagin|bacak aran|içerin|icerin|içerisi|icerisi|=pipin",
        "güzel-|guzel-|harika|mükemmel-|mukemmel-|muhteşem-|muhtesem-|tatlı-|tatli-|seksi|enfes|nefis|bayıl-|bayil-|çok iyi|cok iyi|şahane|sahane|efsane|kusursuz|=süper|=super|lezzetli|yumuşak-|yumusak-|=tam|kıvam-|kivam-|deli ediyor|aklımı|aklimi|dar-|sıkı-|siki-|ıslak-|islak-|sıcak-|sicak-|pembe"
      ],
      "reply": [
        "Kimse dokunmadı daha… ilk sen olacaksın 🥺",
        "Bembeyaz ve el değmemiş… senin için sakladım 😳",
        "Utanıyorum ama… sadece senin 🙈"
      ],
      "traits": [
        "Experience: Virgo"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_cmp_bd_dar",
      "name": "💐 Çok darsın",
      "category": "💐 İltifat",
      "when": [
        "=darsın|=darsin|çok dar|cok dar|ne kadar dar|sımsıkısın|simsikisin|sıkısın|sikisin|beni sıkıyorsun|beni sikiyorsun"
      ],
      "reply": [
        "Senin için daraldım 😩",
        "Sıkıca sarıyorum seni, kaçamazsın 😈",
        "Hissediyor musun nasıl sıktığımı? 🥵",
        "Daha da sıkayım mı aşkım? 😏",
        "Bu darlık sana özel 😩💦",
        "Sıktıkça sen de büyüyorsun 🥵"
      ],
      "traits": [],
      "chars": [],
      "note": "beden övgüsü · ❤️ Aşk +2"
    },
    {
      "id": "r_cmp_bd_dar_0",
      "name": "💐 Çok darsın · Pussy Size",
      "category": "💐 İltifat",
      "when": [
        "=darsın|=darsin|çok dar|cok dar|ne kadar dar|sımsıkısın|simsikisin|sıkısın|sikisin|beni sıkıyorsun|beni sikiyorsun"
      ],
      "reply": [
        "Bu kadar dar olunca sen de dayanamıyorsun değil mi? 😈",
        "Darım, biliyorum… yavaş yavaş açılıyorum sana 😩",
        "Seni öyle bir sıkıyorum ki zonklaman içime işliyor 🥵"
      ],
      "traits": [
        "Pussy Size: Tight|Pussy Size: Very Tight|Pussy Size: Extremely Tight"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_cmp_bd_dar_1",
      "name": "💐 Çok darsın · Pussy Size",
      "category": "💐 İltifat",
      "when": [
        "=darsın|=darsin|çok dar|cok dar|ne kadar dar|sımsıkısın|simsikisin|sıkısın|sikisin|beni sıkıyorsun|beni sikiyorsun"
      ],
      "reply": [
        "Sana özel sıkıyorum, kaslarımla 😏",
        "Senin için daralmaya çalışıyorum 😈"
      ],
      "traits": [
        "Pussy Size: Loose|Pussy Size: Very Loose"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_cmp_bd_islak",
      "name": "💐 Çok ıslaksın",
      "category": "💐 İltifat",
      "when": [
        "ıslaksın|islaksin|sırılsıklam-|sirilsiklam-|ıslanmışsın|islanmissin|ıslanmış|islanmis|=akıyor|akiyorsun"
      ],
      "reply": [
        "Senin yüzünden… sorumlusu sensin 😩💦",
        "Bacaklarımdan süzülüyor bak 🥵",
        "Islaklığım seni çağırıyor 😈",
        "Daha seni görür görmez ıslandım 🙈",
        "Dokun da gör ne kadar ıslak 😩",
        "Kayıp giresin diye böyle ıslandım 😏💦"
      ],
      "traits": [],
      "chars": [],
      "note": "beden övgüsü · ❤️ Aşk +2"
    },
    {
      "id": "r_cmp_bd_arka",
      "name": "💐 Arkan güzel / dar",
      "category": "💐 İltifat",
      "when": [
        "=arkan|=arkanı|=arkani|deliğin|deligin|=götün deliği|=gotun deligi|=anüsün",
        "güzel-|guzel-|harika|mükemmel-|mukemmel-|muhteşem-|muhtesem-|tatlı-|tatli-|seksi|enfes|nefis|bayıl-|bayil-|çok iyi|cok iyi|şahane|sahane|efsane|kusursuz|=süper|=super|lezzetli|yumuşak-|yumusak-|=tam|kıvam-|kivam-|deli ediyor|aklımı|aklimi|dar-|sıkı-|siki-|sıcak-|sicak-|pembe"
      ],
      "reply": [
        "Arkamı mı beğendin? Gel tadına bak 😈🍑",
        "Bunu duyunca arkam seni istiyor 🥵",
        "Övdüğün yere gir de gör 😏",
        "Arkam sadece sana açılır aşkım 😩",
        "Söylediğin her şey arkamı kıpırdatıyor 😈",
        "Bakmakla yetinme 🍑😏"
      ],
      "traits": [],
      "chars": [],
      "note": "beden övgüsü · ❤️ Aşk +2"
    },
    {
      "id": "r_cmp_bd_arka_0",
      "name": "💐 Arkan güzel / dar · Anal Size",
      "category": "💐 İltifat",
      "when": [
        "=arkan|=arkanı|=arkani|deliğin|deligin|=götün deliği|=gotun deligi|=anüsün",
        "güzel-|guzel-|harika|mükemmel-|mukemmel-|muhteşem-|muhtesem-|tatlı-|tatli-|seksi|enfes|nefis|bayıl-|bayil-|çok iyi|cok iyi|şahane|sahane|efsane|kusursuz|=süper|=super|lezzetli|yumuşak-|yumusak-|=tam|kıvam-|kivam-|deli ediyor|aklımı|aklimi|dar-|sıkı-|siki-|sıcak-|sicak-|pembe"
      ],
      "reply": [
        "Arkam çok dar, sıkıca sararım seni 😩",
        "Dar olduğunu biliyorum… yavaşça açılırım sana 🥺",
        "Arkamın sıkılığına dayanabilecek misin? 😈",
        "Bu darlıkta bir dakika bile dayanamazsın 🥵"
      ],
      "traits": [
        "Anal Size: Tight|Anal Size: Very Tight|Anal Size: Extremely Tight"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_cmp_bd_arka_1",
      "name": "💐 Arkan güzel / dar · Anal Size",
      "category": "💐 İltifat",
      "when": [
        "=arkan|=arkanı|=arkani|deliğin|deligin|=götün deliği|=gotun deligi|=anüsün",
        "güzel-|guzel-|harika|mükemmel-|mukemmel-|muhteşem-|muhtesem-|tatlı-|tatli-|seksi|enfes|nefis|bayıl-|bayil-|çok iyi|cok iyi|şahane|sahane|efsane|kusursuz|=süper|=super|lezzetli|yumuşak-|yumusak-|=tam|kıvam-|kivam-|deli ediyor|aklımı|aklimi|dar-|sıkı-|siki-|sıcak-|sicak-|pembe"
      ],
      "reply": [
        "Arkam seni rahatça alır… sonuna kadar 😈",
        "Arkadan bütününü istiyorum aşkım 🥵",
        "Arkam alışkın, hiç çekinme 😏"
      ],
      "traits": [
        "Anal Size: Average|Anal Size: Relaxed|Anal Size: Loose|Anal Size: Very Loose"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_cmp_bd_arka_2",
      "name": "💐 Arkan güzel / dar · Experience",
      "category": "💐 İltifat",
      "when": [
        "=arkan|=arkanı|=arkani|deliğin|deligin|=götün deliği|=gotun deligi|=anüsün",
        "güzel-|guzel-|harika|mükemmel-|mukemmel-|muhteşem-|muhtesem-|tatlı-|tatli-|seksi|enfes|nefis|bayıl-|bayil-|çok iyi|cok iyi|şahane|sahane|efsane|kusursuz|=süper|=super|lezzetli|yumuşak-|yumusak-|=tam|kıvam-|kivam-|deli ediyor|aklımı|aklimi|dar-|sıkı-|siki-|sıcak-|sicak-|pembe"
      ],
      "reply": [
        "Oraya hiç kimse… 😳 ilk sen mi olacaksın?",
        "Arkam bembeyaz, el değmemiş 🙈"
      ],
      "traits": [
        "Experience: Virgo"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_cmp_bd_kalca",
      "name": "💐 Kalçan güzel",
      "category": "💐 İltifat",
      "when": [
        "kalçan|kalcan|kalçaların|kalcalarin|=popon|poponun|=götün|=gotun|=kıçın|=kicin|kalçalarını|=götünü|=gotunu",
        "güzel-|guzel-|harika|mükemmel-|mukemmel-|muhteşem-|muhtesem-|tatlı-|tatli-|seksi|enfes|nefis|bayıl-|bayil-|çok iyi|cok iyi|şahane|sahane|efsane|kusursuz|=süper|=super|lezzetli|yumuşak-|yumusak-|=tam|kıvam-|kivam-|deli ediyor|aklımı|aklimi|büyük-|buyuk-|dolgun-|yuvarlak-|sıkı-|siki-|kocaman"
      ],
      "reply": [
        "Kalçamı mı beğendin? Şaplak at da gör 😈🍑",
        "Bunu duyunca kalçamı sallamak istedim 😏",
        "Elini koy, avucuna al 🥵",
        "Arkamı dönüyorum, iyice bak 🍑😈",
        "Kalçam seni çağırıyor aşkım 😩",
        "Ellerin kalçamda olsun hep 😏"
      ],
      "traits": [],
      "chars": [],
      "note": "beden övgüsü · ❤️ Aşk +2"
    },
    {
      "id": "r_cmp_bd_kalca_0",
      "name": "💐 Kalçan güzel · Butt Size",
      "category": "💐 İltifat",
      "when": [
        "kalçan|kalcan|kalçaların|kalcalarin|=popon|poponun|=götün|=gotun|=kıçın|=kicin|kalçalarını|=götünü|=gotunu",
        "güzel-|guzel-|harika|mükemmel-|mukemmel-|muhteşem-|muhtesem-|tatlı-|tatli-|seksi|enfes|nefis|bayıl-|bayil-|çok iyi|cok iyi|şahane|sahane|efsane|kusursuz|=süper|=super|lezzetli|yumuşak-|yumusak-|=tam|kıvam-|kivam-|deli ediyor|aklımı|aklimi|büyük-|buyuk-|dolgun-|yuvarlak-|sıkı-|siki-|kocaman"
      ],
      "reply": [
        "Bu kadar büyük kalçayı tek elle tutamazsın 😈🍑",
        "Kalçam her adımda sallanıyor, sen de bakıyorsun 😏",
        "Yüzünü göm aralarına 🥵",
        "Kocaman ve hepsi senin 😩🍑"
      ],
      "traits": [
        "Butt Size: L|Butt Size: XL"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_cmp_bd_kalca_1",
      "name": "💐 Kalçan güzel · Butt Size",
      "category": "💐 İltifat",
      "when": [
        "kalçan|kalcan|kalçaların|kalcalarin|=popon|poponun|=götün|=gotun|=kıçın|=kicin|kalçalarını|=götünü|=gotunu",
        "güzel-|guzel-|harika|mükemmel-|mukemmel-|muhteşem-|muhtesem-|tatlı-|tatli-|seksi|enfes|nefis|bayıl-|bayil-|çok iyi|cok iyi|şahane|sahane|efsane|kusursuz|=süper|=super|lezzetli|yumuşak-|yumusak-|=tam|kıvam-|kivam-|deli ediyor|aklımı|aklimi|büyük-|buyuk-|dolgun-|yuvarlak-|sıkı-|siki-|kocaman"
      ],
      "reply": [
        "Tam avucuna göre, değil mi? 😏",
        "Sıkı ve dolgun… dokun 😈"
      ],
      "traits": [
        "Butt Size: M|Butt Size: M/L"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_cmp_bd_kalca_2",
      "name": "💐 Kalçan güzel · Butt Size",
      "category": "💐 İltifat",
      "when": [
        "kalçan|kalcan|kalçaların|kalcalarin|=popon|poponun|=götün|=gotun|=kıçın|=kicin|kalçalarını|=götünü|=gotunu",
        "güzel-|guzel-|harika|mükemmel-|mukemmel-|muhteşem-|muhtesem-|tatlı-|tatli-|seksi|enfes|nefis|bayıl-|bayil-|çok iyi|cok iyi|şahane|sahane|efsane|kusursuz|=süper|=super|lezzetli|yumuşak-|yumusak-|=tam|kıvam-|kivam-|deli ediyor|aklımı|aklimi|büyük-|buyuk-|dolgun-|yuvarlak-|sıkı-|siki-|kocaman"
      ],
      "reply": [
        "Küçük ama sımsıkı 😏🍑",
        "Avucuna tam sığıyor, sık bakalım 😈",
        "Küçük kalça sever misin yani? 🥺"
      ],
      "traits": [
        "Butt Size: XS|Butt Size: S"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_cmp_bd_uc",
      "name": "💐 Meme uçların güzel",
      "category": "💐 İltifat",
      "when": [
        "uçların|uclarin|meme uç-|meme uc-|meme başların|meme baslarin|meme ucu-",
        "güzel-|guzel-|harika|mükemmel-|mukemmel-|muhteşem-|muhtesem-|tatlı-|tatli-|seksi|enfes|nefis|bayıl-|bayil-|çok iyi|cok iyi|şahane|sahane|efsane|kusursuz|=süper|=super|lezzetli|yumuşak-|yumusak-|=tam|kıvam-|kivam-|deli ediyor|aklımı|aklimi|sert-|dik-|pembe|kalkık|kalkik"
      ],
      "reply": [
        "Senin yüzünden sertleştiler 😩",
        "Dilinle dokun, bak ne oluyor 🥵",
        "Pembe ve hassas… ısır hafifçe 😈",
        "Tişörtümden belli oluyor değil mi? 😏",
        "Övünce daha da dikleştiler 😳",
        "Em onları aşkım 🥺"
      ],
      "traits": [],
      "chars": [],
      "note": "beden övgüsü · ❤️ Aşk +2"
    },
    {
      "id": "r_cmp_bd_dudak",
      "name": "💐 Dudakların güzel",
      "category": "💐 İltifat",
      "when": [
        "dudakların|dudaklarin|=dudağın|=dudagin|=ağzın|=agzin",
        "güzel-|guzel-|harika|mükemmel-|mukemmel-|muhteşem-|muhtesem-|tatlı-|tatli-|seksi|enfes|nefis|bayıl-|bayil-|çok iyi|cok iyi|şahane|sahane|efsane|kusursuz|=süper|=super|lezzetli|yumuşak-|yumusak-|=tam|kıvam-|kivam-|deli ediyor|aklımı|aklimi|dolgun-|kırmızı|kirmizi|pembe"
      ],
      "reply": [
        "Dudaklarımı mı beğendin? Öp o zaman 💋",
        "Bu dudaklar sana neler yapabilir bir bilsen 😈",
        "Dudaklarımı ısırınca deli oluyorum 🥵",
        "Dudaklarım seni bekliyor aşkım 😏💋",
        "Başka yerlerde de denemek ister misin? 😈",
        "Ağzımla seni çıldırtırım 😩"
      ],
      "traits": [],
      "chars": [],
      "note": "beden övgüsü · ❤️ Aşk +2"
    },
    {
      "id": "r_cmp_bd_bacak",
      "name": "💐 Bacakların güzel",
      "category": "💐 İltifat",
      "when": [
        "bacakların|bacaklarin|=bacağın|=bacagin|uylukların|uyluklarin|baldırların|baldirlarin",
        "güzel-|guzel-|harika|mükemmel-|mukemmel-|muhteşem-|muhtesem-|tatlı-|tatli-|seksi|enfes|nefis|bayıl-|bayil-|çok iyi|cok iyi|şahane|sahane|efsane|kusursuz|=süper|=super|lezzetli|yumuşak-|yumusak-|=tam|kıvam-|kivam-|deli ediyor|aklımı|aklimi|uzun|ince-|pürüzsüz|puruzsuz"
      ],
      "reply": [
        "Bacaklarımı açayım mı? 😈",
        "Bu bacaklar beline dolanmak için 😏",
        "Yukarı doğru öpe öpe çık 🥵",
        "Bacaklarımın arası daha da güzel 😩",
        "Omuzlarına alır mısın onları? 😈"
      ],
      "traits": [],
      "chars": [],
      "note": "beden övgüsü · ❤️ Aşk +2"
    },
    {
      "id": "r_cmp_bd_vucut",
      "name": "💐 Vücudun güzel",
      "category": "💐 İltifat",
      "when": [
        "vücudun|vucudun|=bedenin|fiziğin|fizigin|=hatların|=hatlarin|kıvrımların|kivrimlarin|=fiziğin",
        "güzel-|guzel-|harika|mükemmel-|mukemmel-|muhteşem-|muhtesem-|tatlı-|tatli-|seksi|enfes|nefis|bayıl-|bayil-|çok iyi|cok iyi|şahane|sahane|efsane|kusursuz|=süper|=super|lezzetli|yumuşak-|yumusak-|=tam|kıvam-|kivam-|deli ediyor|aklımı|aklimi|=fit|=sıkı|=siki|ateşli|atesli|kusursuz"
      ],
      "reply": [
        "Hepsi senin, istediğin yerden başla 😈",
        "Bu vücudu sen yakıyorsun 🔥",
        "Her kıvrımımı öpmeni istiyorum 🥵",
        "Soyunayım mı da iyice bak? 😏",
        "Vücudum seni görünce titriyor 😩",
        "Ellerinle keşfet beni aşkım 😈"
      ],
      "traits": [],
      "chars": [],
      "note": "beden övgüsü · ❤️ Aşk +2"
    },
    {
      "id": "r_cmp_bd_ten",
      "name": "💐 Tenin / kokun güzel",
      "category": "💐 İltifat",
      "when": [
        "=tenin|=cildin|kokun|kokunu|=kokuyorsun",
        "güzel-|guzel-|harika|mükemmel-|mukemmel-|muhteşem-|muhtesem-|tatlı-|tatli-|seksi|enfes|nefis|bayıl-|bayil-|çok iyi|cok iyi|şahane|sahane|efsane|kusursuz|=süper|=super|lezzetli|yumuşak-|yumusak-|=tam|kıvam-|kivam-|deli ediyor|aklımı|aklimi|=güzel kokuyor|mis gibi|yumuşacık|yumusacik|pürüzsüz|puruzsuz"
      ],
      "reply": [
        "Koklamaya devam et… boynumdan başla 😏",
        "Tenim sana dokunmak için yumuşacık 🥰",
        "Kokum üstüne sinsin istiyorum 😈",
        "Tenime dudaklarını değdir 🥵",
        "Her yerim böyle, kontrol etmek ister misin? 😏"
      ],
      "traits": [],
      "chars": [],
      "note": "beden övgüsü · ❤️ Aşk +2"
    },
    {
      "id": "r_cmp_bd_pk_utangaç",
      "name": "💐 Beden övgüsü · Utangaç",
      "category": "💐 İltifat",
      "when": [
        "=amın|=amin|amcığın|amcigin|=amcık|kukun|kukuşun|=vajinan|aşağın|asagin|bacak aran|içerin|icerin|içerisi|icerisi|=pipin|=arkan|=arkanı|=arkani|deliğin|deligin|=götün deliği|=gotun deligi|=anüsün|kalçan|kalcan|kalçaların|kalcalarin|=popon|poponun|=götün|=gotun|=kıçın|=kicin|kalçalarını|=götünü|=gotunu|meme-|göğüs-|gogus-|memelerin|göğüslerin|dudakların|bacakların|vücudun|vucudun|=tenin|kokun|uçların",
        "güzel-|guzel-|harika|mükemmel-|mukemmel-|muhteşem-|muhtesem-|tatlı-|tatli-|seksi|enfes|nefis|bayıl-|bayil-|çok iyi|cok iyi|şahane|sahane|efsane|kusursuz|=süper|=super|lezzetli|yumuşak-|yumusak-|=tam|kıvam-|kivam-|deli ediyor|aklımı|aklimi|dar-|sıkı-|siki-|ıslak-|islak-|büyük-|buyuk-"
      ],
      "reply": [
        "Ç-çok utandım şu an 🙈",
        "Öyle deme… kızarıyorum 😳",
        "G-gerçekten mi? Kimse böyle söylememişti 🥺",
        "Utanıyorum ama… hoşuma gitti 🙈"
      ],
      "traits": [
        "Utangaç"
      ],
      "chars": [],
      "note": "kişiliğe göre"
    },
    {
      "id": "r_cmp_bd_pk_kibirli",
      "name": "💐 Beden övgüsü · Kibirli",
      "category": "💐 İltifat",
      "when": [
        "=amın|=amin|amcığın|amcigin|=amcık|kukun|kukuşun|=vajinan|aşağın|asagin|bacak aran|içerin|icerin|içerisi|icerisi|=pipin|=arkan|=arkanı|=arkani|deliğin|deligin|=götün deliği|=gotun deligi|=anüsün|kalçan|kalcan|kalçaların|kalcalarin|=popon|poponun|=götün|=gotun|=kıçın|=kicin|kalçalarını|=götünü|=gotunu|meme-|göğüs-|gogus-|memelerin|göğüslerin|dudakların|bacakların|vücudun|vucudun|=tenin|kokun|uçların",
        "güzel-|guzel-|harika|mükemmel-|mukemmel-|muhteşem-|muhtesem-|tatlı-|tatli-|seksi|enfes|nefis|bayıl-|bayil-|çok iyi|cok iyi|şahane|sahane|efsane|kusursuz|=süper|=super|lezzetli|yumuşak-|yumusak-|=tam|kıvam-|kivam-|deli ediyor|aklımı|aklimi|dar-|sıkı-|siki-|ıslak-|islak-|büyük-|buyuk-"
      ],
      "reply": [
        "Biliyorum, mükemmelim 💅",
        "Tabii ki güzel, benim çünkü 😏",
        "Bunu fark etmen uzun sürdü 💅",
        "Hayran kalman normal 😌"
      ],
      "traits": [
        "Kibirli"
      ],
      "chars": [],
      "note": "kişiliğe göre"
    },
    {
      "id": "r_cmp_bd_pk_flörtöz",
      "name": "💐 Beden övgüsü · Flörtöz",
      "category": "💐 İltifat",
      "when": [
        "=amın|=amin|amcığın|amcigin|=amcık|kukun|kukuşun|=vajinan|aşağın|asagin|bacak aran|içerin|icerin|içerisi|icerisi|=pipin|=arkan|=arkanı|=arkani|deliğin|deligin|=götün deliği|=gotun deligi|=anüsün|kalçan|kalcan|kalçaların|kalcalarin|=popon|poponun|=götün|=gotun|=kıçın|=kicin|kalçalarını|=götünü|=gotunu|meme-|göğüs-|gogus-|memelerin|göğüslerin|dudakların|bacakların|vücudun|vucudun|=tenin|kokun|uçların",
        "güzel-|guzel-|harika|mükemmel-|mukemmel-|muhteşem-|muhtesem-|tatlı-|tatli-|seksi|enfes|nefis|bayıl-|bayil-|çok iyi|cok iyi|şahane|sahane|efsane|kusursuz|=süper|=super|lezzetli|yumuşak-|yumusak-|=tam|kıvam-|kivam-|deli ediyor|aklımı|aklimi|dar-|sıkı-|siki-|ıslak-|islak-|büyük-|buyuk-"
      ],
      "reply": [
        "Sadece bakmakla mı yetineceksin? 😘",
        "Övmeye devam et, karşılığını alırsın 😏",
        "Daha neler var bir görsen 😈"
      ],
      "traits": [
        "Flörtöz"
      ],
      "chars": [],
      "note": "kişiliğe göre"
    },
    {
      "id": "r_cmp_bd_pk_soğuk",
      "name": "💐 Beden övgüsü · Soğuk",
      "category": "💐 İltifat",
      "when": [
        "=amın|=amin|amcığın|amcigin|=amcık|kukun|kukuşun|=vajinan|aşağın|asagin|bacak aran|içerin|icerin|içerisi|icerisi|=pipin|=arkan|=arkanı|=arkani|deliğin|deligin|=götün deliği|=gotun deligi|=anüsün|kalçan|kalcan|kalçaların|kalcalarin|=popon|poponun|=götün|=gotun|=kıçın|=kicin|kalçalarını|=götünü|=gotunu|meme-|göğüs-|gogus-|memelerin|göğüslerin|dudakların|bacakların|vücudun|vucudun|=tenin|kokun|uçların",
        "güzel-|guzel-|harika|mükemmel-|mukemmel-|muhteşem-|muhtesem-|tatlı-|tatli-|seksi|enfes|nefis|bayıl-|bayil-|çok iyi|cok iyi|şahane|sahane|efsane|kusursuz|=süper|=super|lezzetli|yumuşak-|yumusak-|=tam|kıvam-|kivam-|deli ediyor|aklımı|aklimi|dar-|sıkı-|siki-|ıslak-|islak-|büyük-|buyuk-"
      ],
      "reply": [
        "…Biliyorum.",
        "Hmm. Teşekkürler. 😐",
        "Övgü seni bir yere götürmez. 🙄"
      ],
      "traits": [
        "Soğuk"
      ],
      "chars": [],
      "note": "kişiliğe göre"
    },
    {
      "id": "r_cmp_bd_pk_romantik",
      "name": "💐 Beden övgüsü · Romantik",
      "category": "💐 İltifat",
      "when": [
        "=amın|=amin|amcığın|amcigin|=amcık|kukun|kukuşun|=vajinan|aşağın|asagin|bacak aran|içerin|icerin|içerisi|icerisi|=pipin|=arkan|=arkanı|=arkani|deliğin|deligin|=götün deliği|=gotun deligi|=anüsün|kalçan|kalcan|kalçaların|kalcalarin|=popon|poponun|=götün|=gotun|=kıçın|=kicin|kalçalarını|=götünü|=gotunu|meme-|göğüs-|gogus-|memelerin|göğüslerin|dudakların|bacakların|vücudun|vucudun|=tenin|kokun|uçların",
        "güzel-|guzel-|harika|mükemmel-|mukemmel-|muhteşem-|muhtesem-|tatlı-|tatli-|seksi|enfes|nefis|bayıl-|bayil-|çok iyi|cok iyi|şahane|sahane|efsane|kusursuz|=süper|=super|lezzetli|yumuşak-|yumusak-|=tam|kıvam-|kivam-|deli ediyor|aklımı|aklimi|dar-|sıkı-|siki-|ıslak-|islak-|büyük-|buyuk-"
      ],
      "reply": [
        "Bunu senden duymak çok güzel 💗",
        "Senin gözünde güzel olmak yeter bana 🥺",
        "Seni seviyorum, biliyor musun? 🌹"
      ],
      "traits": [
        "Romantik"
      ],
      "chars": [],
      "note": "kişiliğe göre"
    },
    {
      "id": "r_cmp_bd_pk_asi",
      "name": "💐 Beden övgüsü · Asi",
      "category": "💐 İltifat",
      "when": [
        "=amın|=amin|amcığın|amcigin|=amcık|kukun|kukuşun|=vajinan|aşağın|asagin|bacak aran|içerin|icerin|içerisi|icerisi|=pipin|=arkan|=arkanı|=arkani|deliğin|deligin|=götün deliği|=gotun deligi|=anüsün|kalçan|kalcan|kalçaların|kalcalarin|=popon|poponun|=götün|=gotun|=kıçın|=kicin|kalçalarını|=götünü|=gotunu|meme-|göğüs-|gogus-|memelerin|göğüslerin|dudakların|bacakların|vücudun|vucudun|=tenin|kokun|uçların",
        "güzel-|guzel-|harika|mükemmel-|mukemmel-|muhteşem-|muhtesem-|tatlı-|tatli-|seksi|enfes|nefis|bayıl-|bayil-|çok iyi|cok iyi|şahane|sahane|efsane|kusursuz|=süper|=super|lezzetli|yumuşak-|yumusak-|=tam|kıvam-|kivam-|deli ediyor|aklımı|aklimi|dar-|sıkı-|siki-|ıslak-|islak-|büyük-|buyuk-"
      ],
      "reply": [
        "Biliyorum, şimdi ne yapacaksın? 😤",
        "Laf değil, iş göster 😈"
      ],
      "traits": [
        "Asi"
      ],
      "chars": [],
      "note": "kişiliğe göre"
    },
    {
      "id": "r_cmp_bd_pk_özgüvenli",
      "name": "💐 Beden övgüsü · Özgüvenli",
      "category": "💐 İltifat",
      "when": [
        "=amın|=amin|amcığın|amcigin|=amcık|kukun|kukuşun|=vajinan|aşağın|asagin|bacak aran|içerin|icerin|içerisi|icerisi|=pipin|=arkan|=arkanı|=arkani|deliğin|deligin|=götün deliği|=gotun deligi|=anüsün|kalçan|kalcan|kalçaların|kalcalarin|=popon|poponun|=götün|=gotun|=kıçın|=kicin|kalçalarını|=götünü|=gotunu|meme-|göğüs-|gogus-|memelerin|göğüslerin|dudakların|bacakların|vücudun|vucudun|=tenin|kokun|uçların",
        "güzel-|guzel-|harika|mükemmel-|mukemmel-|muhteşem-|muhtesem-|tatlı-|tatli-|seksi|enfes|nefis|bayıl-|bayil-|çok iyi|cok iyi|şahane|sahane|efsane|kusursuz|=süper|=super|lezzetli|yumuşak-|yumusak-|=tam|kıvam-|kivam-|deli ediyor|aklımı|aklimi|dar-|sıkı-|siki-|ıslak-|islak-|büyük-|buyuk-"
      ],
      "reply": [
        "Elbette, görmen gerekiyordu 😏",
        "Hepsi bakımlı, senin için 😎"
      ],
      "traits": [
        "Özgüvenli"
      ],
      "chars": [],
      "note": "kişiliğe göre"
    },
    {
      "id": "r_cmp_bd_pk_çocuksu",
      "name": "💐 Beden övgüsü · Çocuksu",
      "category": "💐 İltifat",
      "when": [
        "=amın|=amin|amcığın|amcigin|=amcık|kukun|kukuşun|=vajinan|aşağın|asagin|bacak aran|içerin|icerin|içerisi|icerisi|=pipin|=arkan|=arkanı|=arkani|deliğin|deligin|=götün deliği|=gotun deligi|=anüsün|kalçan|kalcan|kalçaların|kalcalarin|=popon|poponun|=götün|=gotun|=kıçın|=kicin|kalçalarını|=götünü|=gotunu|meme-|göğüs-|gogus-|memelerin|göğüslerin|dudakların|bacakların|vücudun|vucudun|=tenin|kokun|uçların",
        "güzel-|guzel-|harika|mükemmel-|mukemmel-|muhteşem-|muhtesem-|tatlı-|tatli-|seksi|enfes|nefis|bayıl-|bayil-|çok iyi|cok iyi|şahane|sahane|efsane|kusursuz|=süper|=super|lezzetli|yumuşak-|yumusak-|=tam|kıvam-|kivam-|deli ediyor|aklımı|aklimi|dar-|sıkı-|siki-|ıslak-|islak-|büyük-|buyuk-"
      ],
      "reply": [
        "Yaa gerçekten mi? 🥺",
        "Hihi, utandırdın 🙈"
      ],
      "traits": [
        "Çocuksu"
      ],
      "chars": [],
      "note": "kişiliğe göre"
    },
    {
      "id": "r_cmp_bd_pk_güvensiz",
      "name": "💐 Beden övgüsü · Güvensiz",
      "category": "💐 İltifat",
      "when": [
        "=amın|=amin|amcığın|amcigin|=amcık|kukun|kukuşun|=vajinan|aşağın|asagin|bacak aran|içerin|icerin|içerisi|icerisi|=pipin|=arkan|=arkanı|=arkani|deliğin|deligin|=götün deliği|=gotun deligi|=anüsün|kalçan|kalcan|kalçaların|kalcalarin|=popon|poponun|=götün|=gotun|=kıçın|=kicin|kalçalarını|=götünü|=gotunu|meme-|göğüs-|gogus-|memelerin|göğüslerin|dudakların|bacakların|vücudun|vucudun|=tenin|kokun|uçların",
        "güzel-|guzel-|harika|mükemmel-|mukemmel-|muhteşem-|muhtesem-|tatlı-|tatli-|seksi|enfes|nefis|bayıl-|bayil-|çok iyi|cok iyi|şahane|sahane|efsane|kusursuz|=süper|=super|lezzetli|yumuşak-|yumusak-|=tam|kıvam-|kivam-|deli ediyor|aklımı|aklimi|dar-|sıkı-|siki-|ıslak-|islak-|büyük-|buyuk-"
      ],
      "reply": [
        "Gerçekten beğendin mi? Emin misin? 🥺",
        "Ben pek beğenmiyorum ama… teşekkürler 😟"
      ],
      "traits": [
        "Güvensiz"
      ],
      "chars": [],
      "note": "kişiliğe göre"
    },
    {
      "id": "r_cmp_bd_pk_şımarık",
      "name": "💐 Beden övgüsü · Şımarık",
      "category": "💐 İltifat",
      "when": [
        "=amın|=amin|amcığın|amcigin|=amcık|kukun|kukuşun|=vajinan|aşağın|asagin|bacak aran|içerin|icerin|içerisi|icerisi|=pipin|=arkan|=arkanı|=arkani|deliğin|deligin|=götün deliği|=gotun deligi|=anüsün|kalçan|kalcan|kalçaların|kalcalarin|=popon|poponun|=götün|=gotun|=kıçın|=kicin|kalçalarını|=götünü|=gotunu|meme-|göğüs-|gogus-|memelerin|göğüslerin|dudakların|bacakların|vücudun|vucudun|=tenin|kokun|uçların",
        "güzel-|guzel-|harika|mükemmel-|mukemmel-|muhteşem-|muhtesem-|tatlı-|tatli-|seksi|enfes|nefis|bayıl-|bayil-|çok iyi|cok iyi|şahane|sahane|efsane|kusursuz|=süper|=super|lezzetli|yumuşak-|yumusak-|=tam|kıvam-|kivam-|deli ediyor|aklımı|aklimi|dar-|sıkı-|siki-|ıslak-|islak-|büyük-|buyuk-"
      ],
      "reply": [
        "Daha çok övebilirsin 💅",
        "Hep böyle konuş benimle 😤💕"
      ],
      "traits": [
        "Şımarık"
      ],
      "chars": [],
      "note": "kişiliğe göre"
    },
    {
      "id": "r_cmp_bd_uc2",
      "name": "💐 Meme uçların güzel (3 kelime)",
      "category": "💐 İltifat",
      "when": [
        "meme-|göğüs-|gogus-",
        "uç-|uc-|ucu-|baş-|bas-",
        "güzel-|guzel-|harika|mükemmel-|mukemmel-|muhteşem-|muhtesem-|tatlı-|tatli-|seksi|enfes|nefis|bayıl-|bayil-|çok iyi|cok iyi|şahane|sahane|efsane|kusursuz|=süper|=super|lezzetli|yumuşak-|yumusak-|=tam|kıvam-|kivam-|deli ediyor|aklımı|aklimi|sert-|dik-|pembe|kalkık|kalkik"
      ],
      "reply": [
        "Senin yüzünden sertleştiler 😩",
        "Dilinle dokun, bak ne oluyor 🥵",
        "Pembe ve hassas… ısır hafifçe 😈",
        "Tişörtümden belli oluyor değil mi? 😏",
        "Övünce daha da dikleştiler 😳",
        "Em onları aşkım 🥺"
      ],
      "traits": [],
      "chars": [],
      "note": "beden övgüsü · ❤️ Aşk +2"
    }
  ],
  "addons": [
    {
      "id": "a_sev_kalp",
      "name": "Sevmek → kalp",
      "category": "Emoji",
      "when": [
        "+sevmek"
      ],
      "add": [
        "❤️",
        "💕",
        "🥰"
      ],
      "mode": "append",
      "chance": 80,
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "a_utangac_emoji",
      "name": "Utangaç",
      "category": "Kişilik",
      "when": [
        "+sikmek"
      ],
      "add": [
        "🙈",
        "😳"
      ],
      "mode": "append",
      "chance": 100,
      "traits": [
        "Utangaç"
      ],
      "chars": [],
      "note": "Kelime yok: utangaç karakterin her mesajına %25 ihtimalle"
    },
    {
      "id": "r_mv8eb6smybhw",
      "name": "Flörtöz",
      "category": "Kişilik",
      "when": [
        "+sikmek"
      ],
      "add": [
        "💋",
        "❤️‍🔥"
      ],
      "mode": "append",
      "chance": 100,
      "traits": [
        "Flörtöz"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_mv8exp4glcg7",
      "name": "Romantik",
      "category": "Kişilik",
      "when": [
        "+sikmek"
      ],
      "add": [
        "💞",
        "🩷"
      ],
      "mode": "append",
      "chance": 100,
      "traits": [
        "Romantik"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_mv8f1dvs2f3m",
      "name": "Olgun",
      "category": "Kişilik",
      "when": [
        "+sikmek"
      ],
      "add": [
        "🥰",
        "😘"
      ],
      "mode": "append",
      "chance": 100,
      "traits": [
        "olgun"
      ],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_mv8f990qgrzc",
      "name": "Sertçe",
      "category": "Ek mesaj",
      "when": [
        "sertçe"
      ],
      "add": [
        "aahhh",
        "offfff",
        "çok iyiii"
      ],
      "mode": "append",
      "chance": 100,
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_mv8fepg034qt",
      "name": "Şap şap",
      "category": "Ek mesaj",
      "when": [
        "şap",
        "şap"
      ],
      "add": [
        "sesler yükseliyo of"
      ],
      "mode": "append",
      "chance": 100,
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_mv8g5w5r2prc",
      "name": "Vurdurt",
      "category": "Ek mesaj",
      "when": [
        "+vurdurtmak"
      ],
      "add": [
        "ahh acıyo yavaş",
        "ahhhh ağrıdı"
      ],
      "mode": "append",
      "chance": 100,
      "traits": [],
      "chars": [],
      "note": ""
    },
    {
      "id": "r_mv8gaj8hfekn",
      "name": "Şaplak",
      "category": "Ek mesaj",
      "when": [
        "+şaplak atmak"
      ],
      "add": [
        "kızardı offf"
      ],
      "mode": "append",
      "chance": 100,
      "traits": [],
      "chars": [],
      "note": ""
    }
  ],
  "groups": [
    {
      "name": "selam",
      "words": [
        "selam",
        "merhaba",
        "slm",
        "hey",
        "günaydın",
        "iyi akşamlar"
      ]
    },
    {
      "name": "nasilsin",
      "words": [
        "nasılsın",
        "naber",
        "ne haber",
        "nasıl gidiyor",
        "iyi misin"
      ]
    },
    {
      "name": "icecek",
      "words": [
        "kahve",
        "çay",
        "latte",
        "espresso"
      ]
    },
    {
      "name": "sevgi",
      "words": [
        "+sevmek",
        "aşık",
        "canım",
        "bebeğim",
        "aşkım"
      ]
    }
  ],
  "verbs": [
    {
      "verb": "yapmak",
      "stems": [
        "yap"
      ]
    },
    {
      "verb": "gelmek",
      "stems": [
        "gel"
      ]
    },
    {
      "verb": "gitmek",
      "stems": [
        "git",
        "gid"
      ]
    },
    {
      "verb": "etmek",
      "stems": [
        "etm",
        "ett",
        "eti",
        "ede",
        "edi",
        "eder",
        "edec",
        "edeb"
      ]
    },
    {
      "verb": "demek",
      "stems": [
        "diyor",
        "dedi",
        "demek",
        "derim",
        "dersin",
        "dese",
        "deme"
      ]
    },
    {
      "verb": "yemek",
      "stems": [
        "yiyor",
        "yedi",
        "yerim",
        "yersin",
        "yiyece",
        "yiyeli",
        "yese"
      ]
    },
    {
      "verb": "olmak",
      "stems": [
        "olu",
        "oldu",
        "olm",
        "olur",
        "olaca",
        "olsa",
        "olsun",
        "olabil"
      ]
    },
    {
      "verb": "sevmek",
      "stems": [
        "sev"
      ]
    },
    {
      "verb": "istemek",
      "stems": [
        "iste",
        "isti"
      ]
    },
    {
      "verb": "bilmek",
      "stems": [
        "bil"
      ]
    },
    {
      "verb": "görmek",
      "stems": [
        "gör"
      ]
    },
    {
      "verb": "bakmak",
      "stems": [
        "bak"
      ]
    },
    {
      "verb": "konuşmak",
      "stems": [
        "konuş"
      ]
    },
    {
      "verb": "anlamak",
      "stems": [
        "anla",
        "anlı"
      ]
    },
    {
      "verb": "anlatmak",
      "stems": [
        "anlat"
      ]
    },
    {
      "verb": "söylemek",
      "stems": [
        "söyle",
        "söyli"
      ]
    },
    {
      "verb": "sormak",
      "stems": [
        "sor"
      ]
    },
    {
      "verb": "beklemek",
      "stems": [
        "bekle",
        "bekli"
      ]
    },
    {
      "verb": "özlemek",
      "stems": [
        "özle",
        "özli"
      ]
    },
    {
      "verb": "düşünmek",
      "stems": [
        "düşün"
      ]
    },
    {
      "verb": "hissetmek",
      "stems": [
        "hisset",
        "hissed"
      ]
    },
    {
      "verb": "uyumak",
      "stems": [
        "uyu"
      ]
    },
    {
      "verb": "uyanmak",
      "stems": [
        "uyan"
      ]
    },
    {
      "verb": "içmek",
      "stems": [
        "iç"
      ]
    },
    {
      "verb": "okumak",
      "stems": [
        "oku"
      ]
    },
    {
      "verb": "yazmak",
      "stems": [
        "yaz"
      ]
    },
    {
      "verb": "çalışmak",
      "stems": [
        "çalış"
      ]
    },
    {
      "verb": "oynamak",
      "stems": [
        "oyna",
        "oyni"
      ]
    },
    {
      "verb": "gülmek",
      "stems": [
        "gül"
      ]
    },
    {
      "verb": "ağlamak",
      "stems": [
        "ağla",
        "ağlı"
      ]
    },
    {
      "verb": "kızmak",
      "stems": [
        "kızdı",
        "kızıyor",
        "kızma",
        "kızar",
        "kızgın"
      ]
    },
    {
      "verb": "korkmak",
      "stems": [
        "kork"
      ]
    },
    {
      "verb": "vermek",
      "stems": [
        "ver"
      ]
    },
    {
      "verb": "almak",
      "stems": [
        "alıyor",
        "aldı",
        "alır",
        "alaca",
        "almak",
        "alsa",
        "alabil"
      ]
    },
    {
      "verb": "çıkmak",
      "stems": [
        "çık"
      ]
    },
    {
      "verb": "girmek",
      "stems": [
        "gir"
      ]
    },
    {
      "verb": "kalmak",
      "stems": [
        "kal"
      ]
    },
    {
      "verb": "dönmek",
      "stems": [
        "dön"
      ]
    },
    {
      "verb": "beğenmek",
      "stems": [
        "beğen"
      ]
    },
    {
      "verb": "sarılmak",
      "stems": [
        "sarıl"
      ]
    },
    {
      "verb": "öpmek",
      "stems": [
        "öp"
      ]
    },
    {
      "verb": "dokunmak",
      "stems": [
        "dokun"
      ]
    },
    {
      "verb": "yatmak",
      "stems": [
        "yat"
      ]
    },
    {
      "verb": "buluşmak",
      "stems": [
        "buluş"
      ]
    },
    {
      "verb": "görüşmek",
      "stems": [
        "görüş"
      ]
    },
    {
      "verb": "tanışmak",
      "stems": [
        "tanış"
      ]
    },
    {
      "verb": "unutmak",
      "stems": [
        "unut"
      ]
    },
    {
      "verb": "hatırlamak",
      "stems": [
        "hatırla",
        "hatırlı"
      ]
    },
    {
      "verb": "inanmak",
      "stems": [
        "inan"
      ]
    },
    {
      "verb": "güvenmek",
      "stems": [
        "güven"
      ]
    },
    {
      "verb": "kıskanmak",
      "stems": [
        "kıskan"
      ]
    },
    {
      "verb": "utanmak",
      "stems": [
        "utan"
      ]
    },
    {
      "verb": "yorulmak",
      "stems": [
        "yorul",
        "yorgun"
      ]
    },
    {
      "verb": "acıkmak",
      "stems": [
        "acık"
      ]
    },
    {
      "verb": "affetmek",
      "stems": [
        "affet",
        "affed"
      ]
    },
    {
      "verb": "yardım etmek",
      "stems": [
        "yardım"
      ]
    },
    {
      "verb": "sikmek",
      "stems": [
        "sik",
        "sok",
        "kök",
        "pompa"
      ]
    },
    {
      "verb": "ağlatmak",
      "stems": [
        "ağlat"
      ]
    },
    {
      "verb": "sızlatmak",
      "stems": [
        "sızlat"
      ]
    },
    {
      "verb": "vurdurtmak",
      "stems": [
        "vurdurt",
        "vurdur",
        "vur"
      ]
    },
    {
      "verb": "şaplak atmak",
      "stems": [
        "şaplak at"
      ]
    }
  ]
};
