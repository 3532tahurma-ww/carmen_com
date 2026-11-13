/*
 * 📱🦄 Fantezilere özel kesintiler: bir fantezi sürerken (sohbet ⋯ Diğer → 📱 Kesintiler açıksa) kesinti olursa
 * %70 genel kesinti (telefon, kapı…) yerine bunlardan biri gelir. Anahtar = app.js FANT_KEYS (fxkedi, fxrpofis…).
 * g = ortada görünen durum satırı, r = karakterin cevapları (bot modunda biri seçilir; {sen} = hitap).
 * 🧭 CarmenGuide → 📱 Kesinti deneyi'nde hepsi görünür ve denenir.
 */
window.Stories = window.Stories || {};
Stories.FANT_INTERRUPTS = {
  // 🤱 Nursing olayları (fantezi değil; app.js NURSE_INT: Covered → nuortu, Night → nugece, Morning → nusabah, diğerleri → nugenel)
  nuortu: [
    { g: '👀 Yanınızdan biri geçiyor… örtünün altına bakıyor gibi', r: ['Şşş, kıpırdama… görmedi 🤫🍼', '*örtüyü düzeltir* Devam et, sessizce 😳', 'Kalbim çıkacak… ama bırakma 🙈', 'Sadece bebek gibi görünüyorsun, merak etme 😏', 'Gitti mi? Emmeye devam 🍼'] },
    { g: '🧣 Rüzgâr örtünün ucunu kaldırdı!', r: ['Ay! Tut şunu 😱', '*örtüyü hızla kapatır* Kimse görmedi değil mi? 🙈', 'Göğsüm açıkta kaldı bir an… 😳🍼', 'Gülme! Devam et 😤🍼', 'Bu heyecan sütümü daha çok akıttı 🥵'] },
    { g: '☕ Garson masaya yaklaşıyor: "Bir şey alır mısınız?"', r: ['*gülümser* Hayır, teşekkürler… 😇 (sakın durma)', 'Yüzüm kızardı mı? 😳', 'Garson gidene kadar nefes alma 🤫', 'Fark etmedi, eminim 🙈🍼', 'Bir süt alalım dese güleceğim 😂🍼'] }
  ],
  nugece: [
    { g: '📱 Gece yarısı telefon titredi… ekran karanlığı aydınlattı', r: ['Kapat şunu, uyandırma beni 😴🍼', 'Kimse bu saatte aramaz… boş ver 🌙', '*telefonu ters çevirir* Sen devam et 🍼', 'Işık gözümü aldı… gel, karanlıkta kalalım 🌙', 'Mmm… uyurken bile emiyorsun 🥺'] },
    { g: '🌙 Koridorda bir ses… biri tuvalete kalktı', r: ['Şşş… nefesini tut 🤫', 'Kapı kapalı mı? 😳', 'Sessiz em… kimse duymasın 🍼', 'Geçti, devam 🌙', '*seni göğsüne bastırır* Kıpırdama 🤫🍼'] }
  ],
  nusabah: [
    { g: '⏰ Alarm çaldı! Sabah 07:00', r: ['Erteleyelim… beş dakika daha 😴🍼', 'Alarm mı? Sen bitirmeden kalkmıyorum 🍼', 'Kapat şunu, göğsüm hâlâ dolu 😣', 'İşe geç kalacağız ama değer 😏🍼', '*alarmı kapatır* Nerede kalmıştık? 🌅'] },
    { g: '☀️ Perdenin arasından güneş vurdu yüzüne', r: ['Günaydın… ilk süt senin 🌅🍼', 'Gözlerim kamaştı ama sen bırakma 😌', 'Sabahın en güzel hali bu 🥰🍼', 'Kahvaltı bekleyebilir 😏', 'Güneş bile kıskandı bizi ☀️🍼'] }
  ],
  nugenel: [
    { g: '🍼 Diğer göğsünden süt kendiliğinden akmaya başladı', r: ['Ay, öbürü de sızıyor 🙈', 'Elinle tut, boşa gitmesin 🍼', 'Bak ne yaptın bana 😳🍼', 'Sırası gelecek, sabırsız 😏', 'Pedim ıslandı bile 🥵🍼'] },
    { g: '📱 Telefonuna mesaj geldi: "Müsait misin?"', r: ['Değilim. Hiç değilim 🍼', 'Sonra bakarım, sen devam 😌', 'Şu an meşgulüm… emziriyorum 😏', 'Telefonu at bir kenara 🤫', 'Kim yazdıysa beklesin 🍼'] }
  ],
  // 🐾 hayvan kızları ve fanteziler
  fxkedi: [
    { g: '🥛 Mutfakta süt kabı devrildi… şıngır şıngır!', r: ['Miyav! Benim sütüm! 😿', 'Boş ver sütü, sen bana yetersin 😼', 'Kuyruğum kabardı, korktum 🙀', 'Sonra yalarım, şimdi sen 😽', 'Pati pati… nerede kalmıştık? 🐾'] },
    { g: '🐦 Pencerenin önüne bir kuş kondu', r: ['Kuş! Kuş! …hayır, sende kalıyorum 😼', 'Kulaklarım dikildi ama gözüm sende 🐱', 'Av beklesin, ben şimdi senin kedinim 😽', 'Mrrr… dikkatim dağıldı, geri çek beni 🙈', 'Kuşu sonra kovalarım, sen durma 😈'] },
    { g: '🔔 Tasmasındaki çıngırak durmadan çalıyor', r: ['Duyuyor musun? Her hareketinde çalıyor 😳', 'Çıngırağımı sustur… ya da sustırma 😼', 'Komşular duyacak, umurumda değil 🐾', 'Her çınlama senin yüzünden 😽', 'Miyav… daha hızlı çalsın 😈'] }
  ],
  fxinek: [
    { g: '🔔 Boynundaki inek çanı yüksek sesle çaldı', r: ['Mööö… herkes duydu 🙈', 'Çanım senin için çalıyor 🐮', 'Sustursam mı? Hayır, kalsın 😏', 'Her vuruşta bir çan… say bakalım 😈', 'Ahh, çanım bile heyecanlı 🥵'] },
    { g: '🥛 Göğüslerinden süt damladı, çarşaf ıslandı', r: ['Ay! Taştı yine 😳', 'Sütüm hiç bitmez, biliyorsun 🐮', 'Boşa gitmesin, iç 😏', 'Çarşafı sonra değiştiririz, devam 🥵', 'Mööö… bu senin suçun 😈'] },
    { g: '🚜 Uzaktan bir traktör sesi geliyor', r: ['Çiftçi geliyor! Saklan 😱', 'Ahırda kimse bizi bulamaz 🐮', 'Sesini duyarsa görür bizi 🙈', 'Boş ver, saman yığınının arkasındayız 😏', 'Daha hızlı, gelmeden bitir 🥵'] }
  ],
  fxtavsan: [
    { g: '🥕 Masadaki havuçlar yere döküldü', r: ['Havuçlarım! 🐰', 'Sonra toplarım, şimdi sen 😳', 'Zıp zıp… dikkatim dağıldı 🙈', 'Bir havuç mu yoksa sen mi? Sen 😏', 'Kulaklarım titredi 🥺'] },
    { g: '🦊 Kapının önünde bir tilki gölgesi', r: ['Tilki! Sakla beni 😱', 'Sana sarılıyorum, koru beni 🥺', 'Kalbim tavşan gibi atıyor… zaten tavşanım 🐰', 'Gitti mi? Gitsin, devam et 😳', 'Sen benim avcımsın, o değil 😏'] },
    { g: '🐰 Kuyruğu yerinden çıktı, yatağın altına yuvarlandı', r: ['Ponponum! 🙈', 'Ay, utandım şimdi 😳', 'Sen tak bana, sen çıkardın 😏', 'Kuyruksuz da tavşanım ama 🐰', 'Bulana kadar devam 😈'] }
  ],
  fxtilki: [
    { g: '🐕 Dışarıda av köpekleri havlıyor', r: ['Köpekler! Kokumu aldılar 🦊', 'Kurnaz tilki yakalanmaz 😏', 'Saklanacak yer sensin 😈', 'Sus… yaklaşıyorlar, yavaşla 🤫', 'Havlasınlar, ben inlerim 🥵'] },
    { g: '🍇 Masadaki üzümler hâlâ yeşil', r: ['Ekşi üzüm istemem, seni isterim 😏', 'Üzüm sonra, sen şimdi 🦊', 'Kurnazlığım sana yetmiyor bak 😈', 'Ben tatlı olanı seçerim 😋', 'Hmm… ikisini birden? 😏'] },
    { g: '🌕 Ay buluttan çıktı, odaya ışık doldu', r: ['Ay ışığında kuyruğum parlıyor 🦊', 'Şimdi her şeyimi görüyorsun 😳', 'Aya bakarken beni al 😈', 'Gece tilkisiyim ben 🌙', 'Işık güzel, sen daha güzel 😏'] }
  ],
  fxkopek: [
    { g: '🔔 Kapı zili çaldı', r: ['Hav hav! 🐶', 'Havlamamak için dilimi ısırıyorum 🙈', 'Sahibim burada, kimseye açmam 🐾', 'Kuyruğum durmadan sallanıyor 😳', 'Bekçi köpeği gibi kapıya mı koşayım? Hayır, sende kalıyorum 🥺'] },
    { g: '🎾 Top masanın altına yuvarlandı', r: ['Topum! …sonra getiririm 🐶', 'Topu mu kovalayayım seni mi? Seni 😏', 'Getir dersen getiririm, ama önce bitir 🥵', 'Sadık köpeğin yerinden kıpırdamaz 🐾', 'Atma onu şimdi, beni at 😈'] },
    { g: '🦮 Tasmanın kayışı kapı koluna takıldı', r: ['Ahh, çekiliyorum 😳', 'Tasmamı sen tut, kapı değil 🐶', 'Takıldım, kurtar beni sahibim 🥺', 'Çek beni kendine 😈', 'Hav… sıkıştım ama hoşuma gitti 😏'] }
  ],
  fxunikorn: [
    { g: '🌈 Odaya bir gökkuşağı yansıdı', r: ['Bak, büyüm taşıyor 🦄', 'Gökkuşağı bizim için çıktı ✨', 'Renkler senin yüzünden 🌈', 'Masal kızı mutlu oldu 💗', 'Işık bitmeden devam et ✨'] },
    { g: '✨ Boynuzu parlamaya başladı', r: ['Boynuzum parlıyor, çok yaklaştın 😳', 'Dokunma, büyü kaçar… dokun 😏', 'Parlıyorsa mutluyum demektir 🦄', 'Herkes görecek ışığımı 🙈', 'Daha da parlat beni ✨'] },
    { g: '🧚 Pencereye minik bir peri vurdu', r: ['Peri arkadaşım kıskandı 🙈', 'Pencereyi kapat, bu masal bizim 🦄', 'Bakıyor bize, utandım 😳', 'Gitsin, büyü yarım kalmasın ✨', 'Hıhı… sen devam et 😏'] }
  ],
  fxbag: [
    { g: '🪢 İplerden biri gevşedi', r: ['Gevşedi… sıkılaştır 😳', 'Kaçabilirim artık… ama kaçmam 😏', 'Düğümünü tekrar at, sıkı 😈', 'Bileğim kurtuldu, hemen bağla 🥺', 'Sakın beni serbest bırakma 🔗'] },
    { g: '🔑 Kelepçenin anahtarı yere düştü, yatağın altına kaydı', r: ['Anahtar! 😱', 'Bulamazsan sonsuza kadar seninim 😈', 'Ben çıkamam, sen al 🥺', 'Panik yapmıyorum… biraz yapıyorum 😳', 'Önce bitir, sonra ararız 😏'] },
    { g: '📱 Telefonu çaldı ama elleri bağlı', r: ['Açamıyorum, ellerim bağlı 😏', 'Sen aç… hayır, açma! 🙈', 'Çalsın, ben esirim 😈', 'Kimse beni kurtaramaz şu an 🔗', 'Hoparlöre alırsan ölürüm 😳'] }
  ],
  fxgizli: [
    { g: '📱 Ekranda "Kocam" yazıyor… arıyor', r: ['Şşş! O arıyor 🤫', 'Açmazsam şüphelenir… açmıyorum 😈', 'Sessize aldım, kalbim duracak 😳', 'Bir saniye sus, açıp kapatacağım 🙈', 'Arasın, şu an senin karınım 😏'] },
    { g: '🚗 Bahçeye bir araba girdi, farlar perdeye vurdu', r: ['Geldi mi?! 😱', 'Hızlı… dolaba gir! 🙈', 'Komşu arabası… ödüm koptu 😳', 'Işıkları kapat, sessiz ol 🤫', 'Yakalanırsak yakalanalım, durma 😈'] },
    { g: '💍 Yüzüğü parmağından kaydı, halıya düştü', r: ['Yüzüğüm! Kaybolursa biter 😱', 'Sonra bulurum… şimdi değil 😈', 'Takmayayım bu gece 🤫', 'Bak, düştü bile… bir işaret 😏', 'Sen bul, sen tak bana 🙈'] }
  ],
  fxtoy: [
    { g: '🔋 Vibratörün pili bitti, birden sustu', r: ['Hayır, şimdi olmaz! 😩', 'Pil yok… sen devam ettir 😈', 'Çekmecede yedek var, hızlı 🥵', 'Oyuncak bitti, oyun bitmedi 😏', 'Ahh, tam en güzel yerinde 😤'] },
    { g: '📳 Kumandalı oyuncak yanlışlıkla en yükseğe çıktı', r: ['Ahhh! Çok yüksek 😵‍💫', 'Kısma… kısma! 🥵', 'Bacaklarım titriyor 😩', 'Kumandayı kim tutuyor? Sen mi?! 😳', 'Böyle kalsın… ahh 😈'] },
    { g: '🚪 Annesi kapıyı çaldı: "Bu vızıltı ne?"', r: ['Ehm… saç kurutma makinesi anne! 🙈', 'Kapat şunu, çabuk! 😱', 'Telefon titriyor anne 😳', 'Yastığın altına sakla 🤫', 'Gitti mi? …tekrar aç 😈'] }
  ],
  fxkarin: [
    { g: '😳 Karnı aynada belirgin biçimde kabardı', r: ['Bak… görünüyorsun 😳', 'Karnımda belli oluyorsun 😵‍💫', 'Elini koy, hisset 🥵', 'Bu kadar derin… ahh 😩', 'Aynaya bakmaya utanıyorum 🙈'] },
    { g: '👗 Elbisesinin düğmesi patladı, yere fırladı', r: ['Düğmem! Çok sıkı oldu 😳', 'Elbise dayanamadı, ben de 😩', 'Sonra dikerim, devam 🥵', 'Karnım yüzünden 🙈', 'Bir düğme daha gider 😈'] },
    { g: '🤚 Karnına bastırınca nefesi kesildi', r: ['Ahh! Bastırma… bastır 😵‍💫', 'Hissediyorum seni, her yerde 🥵', 'Nefes alamıyorum ama durma 😩', 'Elini çekme 😳', 'Çok doluyum… 😈'] }
  ],
  fxdolum: [
    { g: '💦 Çarşafa taşıp yere damladı', r: ['Taşıyorum… 😳', 'Ağzıma kadar doluyum 😵‍💫', 'Çarşafı sonra değiştiririz 🥵', 'Bu kadarı nasıl sığdı 😩', 'Daha sığar mı? Bakalım 😈'] },
    { g: '🛁 Banyoya koşması gerekiyor ama bacakları titriyor', r: ['Kalkamıyorum 😩', 'Taşıyın beni banyoya 🥺', 'Bir adım atsam dökülecek 😳', 'Bekle… daha bitmedi mi? 😵‍💫', 'Kalsın, böyle güzel 😈'] },
    { g: '🫃 Karnı şişti, eteği kapanmıyor', r: ['Eteğim kapanmıyor 🙈', 'Beni ne hale getirdin 😳', 'Dolu doluyum 😵‍💫', 'Kimse görmesin böyle 🤫', 'Bir tur daha dolarım 😈'] }
  ],
  // 🎭 rol fantezileri
  fxrpofis: [
    { g: '☎️ Masadaki dahili hat çaldı: "Toplantı başlıyor!"', r: ['Toplantıyı erteleyin efendim 🙈', 'Beş dakika daha, patronum 😏', 'Notlarımı sonra alırım 😈', 'Hattı kapatıyorum, siz devam edin 🥵', 'Ehm… patron meşgul! 😳'] },
    { g: '🚪 Biri ofis kapısının kolunu çevirdi', r: ['Kilitli mi?! 😱', 'Masanın altına saklanıyorum 🙈', 'Patronum, kapıyı kilitlemeyi unuttunuz 😳', 'Kim o?! …gitti şükür 🤫', 'Mesai saatinde ha 😈'] }
  ],
  fxrpkampus: [
    { g: '🔔 Ders zili çaldı, koridor kalabalıklaştı', r: ['Ders bitti hocam… bizimki bitmedi 😏', 'Herkes çıkıyor, ses yapmayalım 🤫', 'Kapıyı kilitleyin hocam 🙈', 'Teneffüste de çalışırım 😈', 'Notumu yükseltiyor musunuz? 😳'] },
    { g: '📚 Masadaki kitaplar yere döküldü', r: ['Ödevlerim! 😳', 'Sonra toplarım hocam 🙈', 'Ders kitabı bekleyebilir 😏', 'Masada yer açıldı 😈', 'Dikkatimi dağıtmayın hocam 🥵'] }
  ],
  fxrpprof: [
    { g: '🚪 Kapıya vuruldu: "Hocam, ödevimi teslim edecektim!"', r: ['Ofis saatim bitti! 😤', 'Yarın gel canım… meşgulüm 😏', 'Sessiz ol öğrencim 🤫', 'Ödevi kapının altından at 🙈', 'Sen devam et, ben cevap veririm 😈'] },
    { g: '👓 Gözlüğü yere düştü', r: ['Gözlüğüm… göremiyorum 🙈', 'Bulana kadar elini tut 😏', 'Gözlüksüz de seni görürüm 😈', 'Bırak, ders çıplak gözle 🥵', 'Takma, böyle daha iyi 😳'] }
  ],
  fxrpmuayene: [
    { g: '📞 Sekreter seslendi: "Doktor bey, sıradaki hasta bekliyor"', r: ['Bekletin, muayene uzun sürecek 🙈', 'Doktor bey, beni yarım bırakmayın 🥺', 'Sırada mı?! Utanıyorum 😳', 'Muayene devam ediyor 😏', 'Hemşire içeri girmesin 🤫'] },
    { g: '🩺 Steteskop kalbinin hızını ele verdi', r: ['Kalbim mi? Normal… değil 😳', 'Hızlı atıyor, sizin yüzünüzden 🥵', 'Teşhis koydunuz mu doktor? 😏', 'Biraz daha dinleyin 🙈', 'Tedavi şart, değil mi? 😈'] }
  ],
  fxrpsorgu: [
    { g: '📻 Telsiz cızırdadı: "Merkez, durum nedir?"', r: ['Cevap verin memur bey 😏', 'Sorgu devam ediyor diyin 😈', 'Söylemeyin bizi 🙈', 'İtiraf ediyorum… her şeyi 🥵', 'Telsizi kapatın, konuşacağım 😳'] },
    { g: '🔗 Kelepçe sandalyeye takılıp tıngırdadı', r: ['Kelepçeler çok sıkı memur bey 😳', 'Kaçmıyorum, söz 😏', 'Gevşetin… ya da gevşetmeyin 😈', 'Suçluyum, cezalandırın 🥵', 'Avukatım yok ama sizi istiyorum 🙈'] }
  ],
  fxrpkapi: [
    { g: '🥣 Ocakta unuttuğu tencere taşıyor', r: ['Yemeğim! Kapatıp geliyorum 😱', 'Şeker almaya gelmiştim, yemeği yaktım 🙈', 'Bırak yansın, sen daha sıcaksın 😏', 'Komşum, ocağı kapat 🥵', 'Koku gelirse herkes anlar 😳'] },
    { g: '🗣️ Koridordan yöneticinin sesi geliyor', r: ['Yönetici! Sesimizi duymasın 🤫', 'Aidatı sonra öderim 😏', 'Kapıyı kilitledin mi komşu? 🙈', 'Duyarsa dedikodu olur 😳', 'Duysun, umurumda değil 😈'] }
  ],
  fxrpev: [
    { g: '🧹 Süpürge yere düştü, tak diye ses çıktı', r: ['Ay, efendim, affedin 🙈', 'Temizliği sonra bitiririm 😏', 'Bugün mesai uzun 😈', 'Önlüğüm düştü, kaldırır mısınız? 😳', 'Eviniz çok tozlu efendim 🥵'] },
    { g: '🚗 Hanımefendinin arabası bahçeye girdi', r: ['Karınız geldi! 😱', 'Ben bulaşıklara koşuyorum 🙈', 'Önlüğümü düzelt, hızlı 😳', 'Bir şey olmamış gibi yapın efendim 🤫', 'Biraz daha… kapıyı açmadan 😈'] }
  ],
  fxrpmasaj: [
    { g: '🕯️ Mum söndü, oda karardı', r: ['Mum söndü… elimi bırakma 😏', 'Karanlıkta masaj daha iyi 😈', 'Yağı nereye koydum? 🙈', 'Gözlerini kapat, his yeter 🥵', 'Ekstra hizmet karanlıkta 😳'] },
    { g: '🛎️ Resepsiyondan seslendiler: "Seansınız bitti!"', r: ['Uzatıyorum, ücretsiz 😏', 'Bitti dediler… bitmedi 😈', 'Bir sonraki müşteri beklesin 🙈', 'Son beş dakika en güzeli 🥵', 'Sessiz ol, duymasınlar 🤫'] }
  ],
  fxrpavukat: [
    { g: '📞 Mahkemeden aradılar: "Duruşma öne alındı!"', r: ['Duruşma beklesin, müvekkilim önemli 😏', 'Cübbemi giymem lazım… sonra 😈', 'Savunmayı burada hazırlıyoruz 🙈', 'Hakimi idare ederim 😳', 'Delil topluyoruz, devam 🥵'] },
    { g: '📂 Dosyalar masadan yere saçıldı', r: ['Delillerim! 😱', 'Dava dosyası bekleyebilir 😏', 'Masada yer açıldı müvekkilim 😈', 'Bunu tutanağa geçirmeyin 🙈', 'Tazminat istiyorum… senden 😳'] }
  ],
  fxrppsikolog: [
    { g: '⏰ Seans saati alarmı çaldı', r: ['Seans bitti… ama terapi bitmedi 😏', 'Bir seans daha yazıyorum 😈', 'Alarmı kapat, devam 🙈', 'Bu duygularını konuşmamız lazım 🥵', 'Notlarıma yazmayacağım bunu 😳'] },
    { g: '🛋️ Bekleme odasından bir öksürük duyuldu', r: ['Sıradaki danışan erken geldi 😱', 'Sesini alçalt, duyuyor 🤫', 'Kapı ses geçirmez… umarım 🙈', 'Etik dışı ama durmuyorum 😈', 'Bastırılmış arzular dedik ya 😏'] }
  ],
  fxrpgardiyan: [
    { g: '🚨 Koğuşta sayım düdüğü çaldı', r: ['Sayım! Yerine geç mahkum 😤', 'Sen burada sayılırsın, benimle 😏', 'Kimse seni aramaz 😈', 'Düdük susana kadar sessiz 🤫', 'Cezan uzadı 🥵'] },
    { g: '🔑 Anahtar destesi parmaklıklara çarptı', r: ['Anahtarlar bende, unutma 😈', 'Kaçmayı aklından geçirme 😏', 'Kapı açık kalırsa başım yanar 🙈', 'Hücre seninle dar 😳', 'Bu gece nöbet uzun 🥵'] }
  ],
  fxrppizza: [
    { g: '📱 Kuryenin telefonu çaldı: "Siparişim nerede?!"', r: ['Yoldayım diyorum 😏', 'Bir teslimat daha var… önce sen 😈', 'Müşteri bekleyebilir 🙈', 'Bahşişim sensin 🥵', 'Şefim beni öldürecek 😳'] },
    { g: '🍕 Pizza kutusu yere düştü', r: ['Pizzan! 😱', 'Ücretsiz olsun, benden 😏', 'Sonra yeriz… soğuk da güzel 😈', 'Ekstra malzeme ben 🥵', 'Kutuyu ezdik 🙈'] }
  ],
  fxrpressam: [
    { g: '🎨 Boya kutusu devrildi, yere renk saçıldı', r: ['Boyalarım! 🎨', 'Tuval yerine sen ol 😏', 'Kırmızıya bulandın, çok güzelsin 😈', 'Sanat dağınıklıktır 🥵', 'Kıpırdama, poz bozuldu 😳'] },
    { g: '🖼️ Galeri sahibi atölyenin kapısını çaldı', r: ['Tablo hazır değil! 😱', 'Modelim çıplak, giremezsiniz 🙈', 'İlham geldi, rahatsız etmeyin 😏', 'Örtüyü üstüne çek 😳', 'Gitsin, eserimiz yarım kalmasın 😈'] }
  ],
  fxrpdans: [
    { g: '🎵 Müzik birden durdu', r: ['Müzik bitti… ritim bitmedi 😏', 'Saymaya devam: bir, iki… 😈', 'Sessizlikte daha iyi dans ederiz 🥵', 'Adımın kaydı 🙈', 'Bedenin müzik zaten 😳'] },
    { g: '🪞 Ayna salonunun kapısı aralandı', r: ['Biri mi baktı?! 😱', 'Prova devam ediyor! 😤', 'Aynalarda her yerden görünüyoruz 🙈', 'Kapıyı kapat, ders özel 😏', 'Bak, duruşun bozuldu 😈'] }
  ],
  fxrpfizyo: [
    { g: '⏱️ Seans zamanlayıcısı öttü', r: ['Süre bitti ama kasın hâlâ gergin 😏', 'Biraz daha esneteceğim 😈', 'Zamanlayıcıyı duymadım 🙈', 'Tedavi uzun sürer 🥵', 'Bir set daha 😳'] },
    { g: '🤕 Bacağına kramp girdi', r: ['Kramp! Ovuyorum, dur 😳', 'Rahatla… nefes al 😏', 'Bu kasın değil, sensin 😈', 'Masaj ekstra iyi gelecek 🥵', 'Gevşe, ben hallederim 🙈'] }
  ],
  fxrptaksi: [
    { g: '🚓 Arkadan bir polis aracı ışık yaktı', r: ['Polis! Kemerini tak 😱', 'Sakin ol, durmuyoruz 😏', 'Camlar buğulu, görmezler 🙈', 'Ehliyetim nerede?! 😳', 'Geçti… devam yolcum 😈'] },
    { g: '📻 Telsizden merkez seslendi: "Neredesin?"', r: ['Trafikteyim diyorum 😏', 'Taksimetre hâlâ çalışıyor 😈', 'Yolcum uzak bir yere gidiyor 🥵', 'Telsizi kapat 🙈', 'Bu gece yolun sonu sensin 😳'] }
  ],
  fxrpklinik: [
    { g: '📢 Anons: "Doktor acil servise!"', r: ['Acil mi? Sen de acilsin 😏', 'Beş dakika daha hasta 😈', 'Önlüğümü düzelt, gidiyorum… gitmiyorum 🙈', 'Bu tedaviyi yarıda bırakmam 🥵', 'Kapıyı kilitle hemşire 😳'] },
    { g: '🧤 Eldiven yırtıldı', r: ['Eldivenim! 😳', 'Çıplak ellerle devam 😈', 'Sterilliği unuttuk 🙈', 'Tedavi yöntemi değişti 😏', 'Daha iyi hissedeceksin 🥵'] }
  ],
  // 🎃 Halloween rolleri
  fxrpvampir: [
    { g: '🌅 Ufuk ağarmaya başladı', r: ['Güneş! Perdeyi çek 😱', 'Şafak sökmeden bitir beni 🦇', 'Tabutuma dönmem lazım… sonra 😏', 'Bir yudum daha, sonra kaçarım 😈', 'Işık yakıyor, kanın soğutuyor 🥵'] },
    { g: '🧄 Mutfaktan sarımsak kokusu geliyor', r: ['Sarımsak! Kim pişirdi?! 😤', 'Nefesim kesildi… kokudan değil 😳', 'Pencereyi aç, sana yakın kalayım 🦇', 'Senin kokun daha güçlü 😏', 'Boynunu ver, unutturur 😈'] }
  ],
  fxrpcadi: [
    { g: '🧪 Kazandaki iksir taştı, yeşil duman yükseldi', r: ['İksirim! 🧪', 'Aşk iksiri döküldü… etkisi başladı 😏', 'Dumanı soluma… soluma 😈', 'Büyü kontrolden çıktı 🥵', 'Kara kedim kaçtı 🙈'] },
    { g: '🧹 Süpürgesi kendi kendine kalktı, odada döndü', r: ['Süpürgem kıskandı 😳', 'Yat yerine! 😤', 'Üstüne binelim mi? 😈', 'Büyü hâlâ akıyor 🧙‍♀️', 'Ona aldırma, beni tut 😏'] }
  ],
  fxrpfalci: [
    { g: '🔮 Kristal küre birden aydınlandı', r: ['Kürede seni görüyorum… çıplak 😏', 'Kader yazıyor: devam 🔮', 'Işığı söndür, utanıyorum 🙈', 'Geleceğinde ben varım 😈', 'Küre doğruyu söyler 🥵'] },
    { g: '🃏 Tarot kartları masadan uçtu, "Aşıklar" açık geldi', r: ['Aşıklar kartı! 😳', 'Kartlar bile biliyor 😏', 'Kader mi bu, yoksa sen mi? 😈', 'Toplama, böyle kalsın 🔮', 'Fal tutuyor demek 🥵'] }
  ],
  fxrpperili: [
    { g: '🚪 Kapı kendi kendine gıcırdayarak açıldı', r: ['Kim o?! 😱', 'Hayalet bakıyor bize 🙈', 'Bırak baksın 😈', 'Bana sarıl, korkuyorum 🥺', 'Bu ev bizi seviyor galiba 😏'] },
    { g: '🕯️ Bütün mumlar aynı anda söndü', r: ['Karanlık! Elini bırakma 😳', 'Ruhlar kıskandı 👻', 'Karanlıkta daha cesurum 😈', 'Soğuk bir nefes hissettim 🙈', 'Sıcaklığını ver bana 🥺'] }
  ],
  fxrpmaske: [
    { g: '🎭 Maskesinin ipi çözüldü', r: ['Maskem! Bakma 🙈', 'Tut, düşmesin 😳', 'Gizem bitmesin 😏', 'Yüzümü görme… henüz 😈', 'Sen bağla, sıkı 🖤'] },
    { g: '🎻 Balo salonunda orkestra son valsi çalıyor', r: ['Son vals… kaçmamız lazım 🖤', 'Gece yarısı olmadan 😈', 'Kimse yokluğumuzu fark etmesin 🤫', 'Dans yerine bunu seçtim 😏', 'Müzik bitince ben de biterim 🥵'] }
  ],
  fxrpkarakedi: [
    { g: '🪜 Merdiven altından geçen biri bağırdı', r: ['Uğursuzluk mu? Ben uğurum 😼', 'Benimle şans döner 🐈‍⬛', 'Kulaklarım dikildi 😳', 'Boş ver insanları 😏', 'Miyav… sen bana dön 😈'] },
    { g: '🌑 Bulutlar ayı kapattı, gece zifiri oldu', r: ['Karanlıkta gözlerim parlıyor 🐈‍⬛', 'Beni göremiyorsun ama hissediyorsun 😏', 'Gece benimdir 😈', 'Pençelerim seni buldu 😼', 'Mırr… daha yakın 🥵'] }
  ],
  fxrpmumya: [
    { g: '🧻 Sargıları bir çiviye takılıp çözülmeye başladı', r: ['Sargılarım! 😳', 'Çöz hepsini, bin yıldır bekliyorum 😈', 'Altında ne var merak mı ettin? 😏', 'Yavaş çek, kırılgandır 🙈', 'Firavunum sensin 🥵'] },
    { g: '🏺 Lahitten bir tıkırtı geldi', r: ['Lanetim uyandı 😱', 'Firavun kıskanıyor 😏', 'Bin yıllık uykudan sen kaldırdın beni 😈', 'Kapağı kapat, bu gece senin 🙈', 'Korkma, ben korurum 🥺'] }
  ],
  fxrpsuccubus: [
    { g: '🔥 Şömine alevleri birden yükseldi', r: ['Cehennem çağırıyor… beklesin 😈', 'Alevler beni sevdi 🔥', 'Ruhunu alsam mı acaba 😏', 'Sıcak değil mi? Daha sıcak olacak 🥵', 'Kanatlarım açıldı 😳'] },
    { g: '📜 Bir rahip kapıda dua okumaya başladı', r: ['Dua mı?! Yakıyor 😤', 'Kulaklarını kapat, beni dinle 😈', 'Ruhun çoktan benim 😏', 'Rahip bekleyedursun 🙈', 'Günaha devam 🥵'] }
  ],
  fxrphayalet: [
    { g: '🌡️ Oda bir anda buz gibi soğudu', r: ['Üşüdün mü? Benim yüzümden 👻', 'Sarıl, ısıt beni 🥺', 'Soğuğum seni titretiyor 😏', 'İçinden geçebilirim, biliyorsun 😈', 'Bu sefer kalmak istiyorum 🙈'] },
    { g: '🪞 Aynada yansıması görünmedi', r: ['Aynada yokum ama buradayım 👻', 'Bakma oraya, bana bak 😳', 'Sadece sen görebiliyorsun beni 😏', 'Elini uzat, hisset 🥺', 'Görünmez sevgilin 😈'] }
  ],
  fxrpperi: [
    { g: '✨ Kanatlarından odaya peri tozu saçıldı', r: ['Tozum! Hapşırma 🙈', 'Toz değince uçarsın 😏', 'Her yer parıldıyor ✨', 'Büyüm seni sarıyor 😈', 'Hafifliyorum… tut beni 🥺'] },
    { g: '🍄 Pencereden mantar halkası parlıyor', r: ['Peri kraliçesi bizi izliyor 😳', 'Halkaya girersek dönemeyiz 😈', 'Burada kal, benimle ✨', 'Işıklar dansımıza eşlik ediyor 😏', 'Sus… kraliçe duymasın 🤫'] }
  ],
  fxrpdenizkizi: [
    { g: '🌊 Dev bir dalga kayalara vurdu, ikisini de ıslattı', r: ['Ahh! Tuzlu öpücük 🌊', 'Islandın, şimdi benim gibisin 🧜‍♀️', 'Dalgalar bizi kıskanıyor 😏', 'Tut beni, sürüklenmeyeyim 🥺', 'Daha derine gel 😈'] },
    { g: '⛵ Uzaktan bir balıkçı teknesi yaklaşıyor', r: ['Görmesinler kuyruğumu! 😱', 'Suya dal benimle 🧜‍♀️', 'Kayanın arkasına geç 🤫', 'Balıkçı ağına düşmem, senin kollarına düşerim 😏', 'Gitti mi? Devam 😈'] }
  ],
  fxrpslime: [
    { g: '💧 Bir parçası yere damladı, kendi kendine kıpırdıyor', r: ['Parçam kaçıyor! 😳', 'Bırak, geri gelir 💧', 'Her yerine yapışırım 😈', 'Yapış yapış oldun 😏', 'Daha çok sarayım seni 🥵'] },
    { g: '☀️ Güneş camdan vurdu, ısınıp eriyor', r: ['Eriyorum… 😵‍💫', 'Gölgeye çek beni 🥺', 'Erirken daha yumuşağım 😏', 'Sana akıyorum 😈', 'Sıcak… sen de sıcaksın 🥵'] }
  ],
  // 🍓 Meisove (meyve) kızları
  fxrplimon: [
    { g: '🍋 Limon suyu gözüne kaçtı', r: ['Ay, gözüm yanıyor! 😣', 'Ekşiliğim kendime bile dokundu 🍋', 'Öp de geçsin 😏', 'Sulu olunca böyle olur 🙈', 'Tadına bak, ekşi mi? 😈'] },
    { g: '🧂 Masaya tuz ve tekila geldi', r: ['Tuz, limon, sen… 😈', 'Shot mı? Ben shot\'ım 🍋', 'Beni sıkıp iç 😏', 'Dudağıma tuz koy 🥵', 'Sarhoş olacağız 🙈'] }
  ],
  fxrpcilek: [
    { g: '🍫 Erimiş çikolata çarşafa damladı', r: ['Çikolata! Bulandım 🍓', 'Yala, temizle 😏', 'Çilekle çikolata, klasik 😈', 'Çarşaf da tatlı oldu 🙈', 'Daha çok dök 🥵'] },
    { g: '🥂 Şampanya şişesinin mantarı patladı', r: ['Patladı! Köpürüyor 🥂', 'Kutlama mı yapıyoruz? 😏', 'Şampanya ve çilek 🍓', 'Üstüme döküldü, iç 😈', 'Kıpkırmızı oldum 😳'] }
  ],
  fxrpportakal: [
    { g: '🍊 Kabuğu soyulurken suyu fışkırdı', r: ['Fışkırdım! 🍊', 'Ne kadar sulu olduğumu gör 😏', 'Elin yapış yapış 🙈', 'Bir dilim daha soy 😈', 'Güneş gibi parlıyorum 🥵'] },
    { g: '☀️ Bulutlar dağıldı, oda güneşle doldu', r: ['Güneşim geldi ☀️', 'Işıkta turuncu parlıyorum 🍊', 'Isındım… çok 🥵', 'Perdeleri açık bırak 😏', 'Güneşte olgunlaşırım 😈'] }
  ],
  fxrpsarap: [
    { g: '🍷 Kadeh devrildi, bordo şarap beyaz çarşafa yayıldı', r: ['Lekesi çıkmaz… 🍷', 'İz kalsın, bu gecenin hatırası 😏', 'Bordoya bulandık 😈', 'Bir kadeh daha doldur 🥵', 'Yıllanmış bir hata 🙈'] },
    { g: '🍾 Mahzenden şişelerin şıngırtısı geliyor', r: ['Mahzende biri mi var?! 😳', 'Şişeler kıskanıyor 😏', 'Ben en eskisiyim, en iyisi 🍷', 'Aşağı inme, burada kal 😈', 'Sarhoş et beni 🥵'] }
  ],
  fxrpvodka: [
    { g: '🧊 Buz kovası devrildi, buzlar sırtına döküldü', r: ['Ahh! Buz gibi 🥶', 'Rus kızı soğuktan korkmaz 🍸', 'Sırtımdaki buzu sen erit 😏', 'Sıcaklığın lazım 😈', 'Titriyorum… soğuktan değil 🥵'] },
    { g: '🎶 Komşudan yüksek sesle bir Rus halk şarkısı geliyor', r: ['Kalinka! 🍸', 'Bu şarkıda dans ederim 😏', 'Na zdorovye! 😈', 'Ritme uy, hızlan 🥵', 'Evimi hatırladım 🥺'] }
  ]
};
/* ➕ ek durumlar: her fanteziyi en az 5 duruma tamamlar (yukarıdaki listelerin sonuna eklenir) */
(function () {
  const MORE = {
    fxkedi: [
      { g: '🧶 Yün yumağı yataktan yuvarlandı, ip her yere dolandı', r: ['Yumağım! Pati pati… 🧶', 'İpe dolandık ikimiz de 😼', 'Oyun sonra, şimdi sen 😽', 'Çözme, böyle bağlı kalalım 😈', 'Mrrr… dikkatim dağıldı, topla beni 🙈'] },
      { g: '🐕 Komşunun köpeği kapının önünde havlıyor', r: ['Tıss! Köpek! 🙀', 'Tüylerim diken diken oldu 😾', 'Sarıl bana, korkuyorum 🥺', 'Havlasın, ben mırlarım 😼', 'Sen benim tek sahibimsin 😽'] }
    ],
    fxinek: [
      { g: '🐄 Ahırdaki diğer inekler hep bir ağızdan böğürdü', r: ['Kıskandılar 🐮', 'Mööö… onlar da duydu 🙈', 'Sürünün en şanslısı benim 😏', 'Böğürsünler, ben inliyorum 🥵', 'Sessiz olun kızlar! 😤'] },
      { g: '🌾 Saman yığını üstlerine devrildi', r: ['Samanlara gömüldük 😳', 'Her yerim saman oldu 🙈', 'Burada kimse bulamaz bizi 😏', 'Kaşınıyor ama durma 😈', 'Mööö… en sevdiğim yatak 🐮'] }
    ],
    fxtavsan: [
      { g: '🌧️ Dışarıda gök gürledi', r: ['Gök gürledi! Sakla beni 🐰', 'Kulaklarımı kapattım 🙈', 'Sana sokuluyorum 🥺', 'Sen yanımdayken korkmam… biraz korkarım 😳', 'Daha sıkı sarıl 😏'] },
      { g: '🕳️ Yatağın altındaki yuvasına bir şey düştü', r: ['Yuvam! Bakmam lazım 🐰', 'Sonra bakarım, şimdi sen 😳', 'Yuvama sen gir 😈', 'Zıp zıp… nerede kalmıştık? 🙈', 'Kalbim pıt pıt atıyor 🥺'] },
      { g: '🐰 Burnunu durmadan kıpırdatıyor, hapşırdı', r: ['Hapşu! Pardon 🙈', 'Senin kokun gıdıkladı 😳', 'Tavşan burnu hep kıpır kıpır 🐰', 'Bir daha hapşırırsam gülme 😤', 'Öp burnumu, geçsin 😏'] }
    ],
    fxtilki: [
      { g: '🐔 Kümesten tavuk gıdaklaması geliyor', r: ['Tavuklar! …sonra 🦊', 'Av mı sen mi? Sen 😏', 'Kurnaz tilki sırasını bilir 😈', 'Gıdaklasınlar, ben inlerim 🥵', 'Ağzım sulandı… sana 😋'] },
      { g: '🍂 Kuyruğuna kuru yapraklar takıldı', r: ['Kuyruğum çalı gibi oldu 🙈', 'Temizle beni 😏', 'Yavaş, kuyruğuma hassasım 😳', 'Ormandan geldim, belli 🦊', 'Tara beni… her yerimi 😈'] },
      { g: '🪤 Kapının önüne bir tuzak kurulmuş', r: ['Tuzak! Kim kurdu?! 😱', 'Beni yakalayan tek kişi sensin 😏', 'Sen mi kurdun yoksa? 😈', 'Dikkat et, adımına bak 🙈', 'Bu gece dışarı çıkmıyoruz 🦊'] }
    ],
    fxkopek: [
      { g: '🐈 Pencerenin önünden bir kedi geçti', r: ['Kedi! Hav hav! 🐶', 'Kovalayayım mı? Hayır, sahibimdeyim 🥺', 'Kulaklarım dikildi 😳', 'Kedi beklesin 😏', 'Otur dedin, oturuyorum 🐾'] },
      { g: '🍖 Mutfaktan et kokusu geliyor', r: ['Kokusu geldi… 🤤', 'Önce sen, sonra mama 😏', 'Ödülümü sen ver 😈', 'Ağzım sulandı ama yerimden kalkmam 🐶', 'İyi köpek miyim? 🥺'] },
      { g: '🦴 Kemiğini yatağın içinde buldu', r: ['Kemiğim! Burada mıymış 🦴', 'Sakladım sanıyordum 🙈', 'Kemik mi sen mi? Sen 😏', 'Kuyruğum çıldırdı 🐶', 'Bunu sonra kemiririm 😈'] }
    ],
    fxunikorn: [
      { g: '🌙 Ay ışığı yelesinde parladı', r: ['Yelem gümüş oldu 🦄', 'Okşa, büyü artsın ✨', 'Ay bizi izliyor 🙈', 'Masal gecesi başladı 😏', 'Işıldıyorum senin için 💗'] },
      { g: '🏹 Ormandan bir avcı borusu duyuldu', r: ['Avcılar! Beni arıyorlar 😱', 'Sakla beni, sadece sana görünürüm 🥺', 'Büyümle saklarım ikimizi ✨', 'Sus… geçip gitsinler 🤫', 'Sana güveniyorum 🦄'] },
      { g: '🍭 Masadaki şekerler kendiliğinden renk değiştirdi', r: ['Büyüm taşıyor 🍭', 'Tat bakalım, ne tadında? 😏', 'Her şey tatlı oldu, sen de 😈', 'Kontrol edemiyorum 🙈', 'Masal kızının şekeri ✨'] }
    ],
    fxbag: [
      { g: '⏰ Bağlıyken alarm çaldı, susturamıyor', r: ['Kapat şunu! Ellerim bağlı 😤', 'Alarm bile beni yönetiyor 🙈', 'Bırak çalsın, sen durma 😈', 'Kulağıma çok yakın 😳', 'Susturursan ödüllendiririm 😏'] },
      { g: '👁️ Göz bağı kaydı, bir anlığına her şeyi gördü', r: ['Gördüm seni! 😳', 'Hemen bağla, bakmamalıydım 🙈', 'Bir daha bakmam… belki 😏', 'Görmemek daha güzeldi 😈', 'Sıkı bağla bu sefer 🔗'] },
      { g: '🔔 Kapı çaldı, o hâlâ yatağa bağlı', r: ['Açma! Böyle görürler 😱', 'Kimse yok de 🤫', 'Ben kımıldayamam zaten 😏', 'Gitsin… gitsin 🙈', 'Bağlı kalayım, sen kapıya bak 😈'] }
    ],
    fxgizli: [
      { g: '🔔 Telefonuna mesaj geldi: "Akşama ne yiyelim aşkım?"', r: ['Şu an seni yiyorum… 😈', 'Cevap yazmam lazım, sus 🤫', 'Ne yazayım? "Makarna" 🙈', 'Kalbim çarpıyor 😳', 'Sonra cevap veririm 😏'] },
      { g: '👟 Kapının önünde tanıdık ayakkabılar gördü', r: ['Onun ayakkabıları! 😱', 'Erken mi geldi?! 🙈', 'Sessiz… arka kapıdan çık 🤫', 'Yanlış gördüm galiba 😳', 'Riskli ama durma 😈'] }
    ],
    fxtoy: [
      { g: '🧴 Kayganlaştırıcı şişesi devrildi, her yere aktı', r: ['Her yer kaygan 😳', 'Bu kadarı fazla oldu 🙈', 'Kayarız ama güzel 😈', 'Çarşafa yazık oldu 🥵', 'Daha iyi işte 😏'] },
      { g: '📦 Kargo geldi: "Yeni oyuncağınız!"', r: ['Yeni oyuncak! 😍', 'Şimdi mi açalım? 😈', 'Kapıda bıraksın 🙈', 'Bu akşam deneriz 😏', 'İkisi birden mi? 🥵'] }
    ],
    fxkarin: [
      { g: '🍽️ Yemeğe çağırdılar: "Sofra hazır!"', r: ['Hiç yer kalmadı ki 😳', 'Doydum… seninle 😈', 'Bu karınla nasıl yerim 🙈', 'Sonra yeriz 😏', 'Bir lokma bile sığmaz 😵‍💫'] },
      { g: '📸 Aynadaki halini fotoğrafladı, bakakaldı', r: ['Kendime inanamıyorum 😳', 'Sil şunu! …silme 🙈', 'Bak ne yaptın bana 😈', 'Hatıra olsun 😏', 'Bu kadar belli mi? 😵‍💫'] }
    ],
    fxdolum: [
      { g: '🧻 Havlular bitti, hepsi ıslak', r: ['Havlu kalmadı 🙈', 'Ne kadar çoktu 😳', 'Böyle kalsın 😈', 'Yeni havlu getir… sonra 😏', 'Her yer ıslak 🥵'] },
      { g: '🚿 Duş sırası bekleyen ev arkadaşı kapıya vuruyor', r: ['Beş dakika! 😱', 'Böyle çıkamam 🙈', 'Biraz daha bekle! 😤', 'Duymasın, sessiz 🤫', 'Dolu doluyum, kalkamam 😵‍💫'] }
    ],
    fxrpofis: [
      { g: '🖨️ Yazıcı kâğıt sıkıştırıp ötmeye başladı', r: ['Yazıcı yine bozuldu 🙄', 'Teknik servisi çağırmayın efendim 🙈', 'Ötsün, siz devam edin 😏', 'Raporlar bekleyebilir 😈', 'Ben hallederim… sonra 🥵'] },
      { g: '💻 Kamera açık kalmış, toplantı başlamak üzere', r: ['Kamera açık! 😱', 'Kapatın, hemen! 🙈', 'Kimse görmedi değil mi? 😳', 'Toplantıya bağlanmayın efendim 🤫', 'İzlesinler 😈'] },
      { g: '☕ Kahve klavyenin üstüne döküldü', r: ['Klavyeniz! 😳', 'Yeni bir tane alırsınız patronum 😏', 'Islandım ben de 🙈', 'Masayı temizlerim… sonra 😈', 'Mesai uzadı 🥵'] }
    ],
    fxrpkampus: [
      { g: '📝 Sınav kâğıtları rüzgârla uçtu', r: ['Kâğıtlar uçuyor hocam! 😱', 'Benimki uçmasın 🙈', 'Sonra toplarız 😏', 'Bu sınavdan geçtim mi? 😈', 'Bırakın uçsun 🥵'] },
      { g: '🧑‍🎓 Sınıf arkadaşı kapıdan seslendi: "Notlarını alabilir miyim?"', r: ['Sonra! 😤', 'Meşgulüm, ders çalışıyorum 🙈', 'Kapıyı açmayın hocam 🤫', 'Notlarım hocamda 😏', 'Gitti mi? Devam 😈'] },
      { g: '🔦 Güvenlik görevlisi koridorda fenerle dolaşıyor', r: ['Işık söndürün hocam 🤫', 'Burada kimse yok sanacak 😏', 'Masanın altına! 🙈', 'Yakalanırsak atılırım 😳', 'Geçti… şükür 😈'] }
    ],
    fxrpprof: [
      { g: '📞 Dekanlıktan aradılar', r: ['Dekan mı?! Sus 🤫', 'Toplantıdayım derim 😏', 'Aç, hoparlöre alma 🙈', 'Bu not sana pahalıya patladı 😈', 'Sonra ararım, öğrencim meşgul 🥵'] },
      { g: '🖊️ Tahtadaki kalem yere düştü, kayboldu', r: ['Kalemim! Eğil, bul 😏', 'Eğildiğinde güzel görünüyorsun 😈', 'Ders yarım kaldı 🙈', 'Kalemsiz de öğretirim 🥵', 'Bulursan bonus puan 😳'] },
      { g: '📋 Yoklama listesi masadan düştü', r: ['Yoklama! Adını yazdım mı? 😏', 'Bugün devamsızlık yok 😈', 'Listeyi sonra toplarız 🙈', 'Sen özel derstesin 🥵', 'Kimse bilmeyecek 🤫'] }
    ],
    fxrpmuayene: [
      { g: '💉 Hemşire şırıngayla kapıyı araladı', r: ['İğne mi?! 😱', 'Sonra gelin hemşire hanım 🙈', 'Doktor bey, beni koruyun 🥺', 'Kapıyı kapatın 🤫', 'Ben başka tedavi istiyorum 😈'] },
      { g: '🌡️ Termometre yüksek ateş gösterdi', r: ['Ateşim çıktı doktor 🥵', 'Sizin yüzünüzden 😳', 'Nasıl düşürürüz? 😏', 'Soğuk kompres… ya da siz 😈', 'Hastalığım ağır galiba 🙈'] },
      { g: '📋 Muayene formu boş kalmış', r: ['Formu sonra doldururuz 😏', 'Şikayetim siz misiniz 😈', 'Yazın: acil tedavi şart 🥵', 'Kimse sormayacak 🤫', 'İmzamı orada atarım 🙈'] }
    ],
    fxrpsorgu: [
      { g: '💡 Sorgu odasının lambası titredi, söndü', r: ['Karanlık memur bey 😳', 'Şimdi kimse görmüyor 😏', 'Kaçmam, söz 😈', 'Elinizi bırakmayın 🥺', 'İtiraf karanlıkta daha kolay 🥵'] },
      { g: '🪞 Tek yönlü aynanın arkasında biri öksürdü', r: ['Biri izliyor! 😱', 'Amiriniz mi?! 🙈', 'İzlesinler, suçluyum 😈', 'Perdeyi çekin memur bey 🤫', 'Delil oldu bu 😳'] },
      { g: '📝 Avukatı gelmiş, kapıda bekliyor', r: ['Avukatım geldi… beklesin 😏', 'İfademi henüz vermedim 😈', 'Kapıyı açmayın 🙈', 'Haklarımı sonra öğrenirim 🥵', 'Avukat istemiyorum, sizi istiyorum 😳'] }
    ],
    fxrpkapi: [
      { g: '🐕 Komşunun köpeği içeri daldı', r: ['Pamuk! Çık dışarı 😤', 'Köpeğim beni arıyormuş 🙈', 'Kapıyı kapat komşu 😏', 'Bakmasın bize 😳', 'Mama veririm, gider 😈'] },
      { g: '📦 Kargocu yanlış kapıyı çaldı', r: ['Benim kargom! 😱', 'Böyle mi alacağım? 🙈', 'Sen al komşu 😏', 'Kapıya bırakın! 🤫', 'Kargo bekleyebilir 😈'] },
      { g: '🧂 Şekerlik yere düşüp kırıldı', r: ['Şekerim! Asıl sebebim 🙈', 'Şeker bahaneydi zaten 😏', 'Tatlılık bende 😈', 'Sonra süpürürüm 🥵', 'Başka bahane bulurum 😳'] }
    ],
    fxrpev: [
      { g: '🍳 Fırındaki yemek yanmak üzere', r: ['Yemek yanıyor efendim! 😱', 'Akşam yemeği ben olayım 😏', 'Kapatıp geliyorum… gelmiyorum 😈', 'Hanımefendi kızacak 🙈', 'Biraz daha… sonra yanar 🥵'] },
      { g: '👶 Çocuklar okuldan erken döndü', r: ['Çocuklar! 😱', 'Önlüğümü bağlayın 🙈', 'Odalarına gönderin efendim 🤫', 'Ben ders yaptırıyordum derim 😳', 'Sessizce devam 😈'] },
      { g: '🧺 Çamaşır makinesi sallanarak yerinden oynadı', r: ['Makine kaçıyor 😳', 'Biz de sallanıyoruz zaten 😈', 'Sonra hallederim efendim 🙈', 'Titreşimi güzel 😏', 'Sıkma programı… ahh 🥵'] }
    ],
    fxrpmasaj: [
      { g: '🫒 Masaj yağı şişesi devrildi', r: ['Yağ her yerde 😳', 'Kaygan oldun 😏', 'İsraf etmeyelim 😈', 'Bütün vücuduna yayayım 🥵', 'Sonra silerim 🙈'] },
      { g: '🎵 Rahatlatıcı müzik takıldı, aynı nota tekrar ediyor', r: ['Müzik bozuldu 🙈', 'Ritmi ben veririm 😏', 'Kapat şunu, senin nefesin yeter 😈', 'Gerildin, yine baştan 🥵', 'Sessizlik daha güzel 😳'] },
      { g: '🚪 Yan odadaki müşteri yüksek sesle inledi', r: ['Yan oda da mutlu galiba 😏', 'Biz daha sessiz olalım 🤫', 'Kıskandım 😈', 'Duvarlar ince 🙈', 'Bizimki daha iyi 🥵'] }
    ],
    fxrpavukat: [
      { g: '📸 Bürodaki stajyer kapıyı açıp fotokopi istedi', r: ['Sonra! 😤', 'Kapıyı kapat stajyer 🙈', 'Gizli görüşme bu 🤫', 'Görmedin bir şey 😳', 'Fotokopi beklesin 😈'] },
      { g: '⚖️ Masadaki adalet terazisi devrildi', r: ['Terazi şaştı 😏', 'Adalet bu gece kör 😈', 'Denge sende müvekkilim 🥵', 'Kaldırırım sonra 🙈', 'Kanun bizi görmüyor 😳'] },
      { g: '📞 Karşı taraf avukatı uzlaşma teklif etti', r: ['Uzlaşma yok! 😤', 'Sadece seninle uzlaşırım 😏', 'Teklifi sonra konuşuruz 😈', 'Pazarlıkta iyiyim 🥵', 'Kapat, meşgulüz 🙈'] }
    ],
    fxrppsikolog: [
      { g: '📓 Seans defteri yere düştü, notlar açıldı', r: ['Notlarımı okuma! 😳', 'Senin hakkında yazdıklarım… 🙈', 'Gizli kalmalı 🤫', 'Teşhisim: arzu 😈', 'Toplama, sonra 😏'] },
      { g: '📞 Başka bir danışan kriz için aradı', r: ['Sonra ararım derim 🙈', 'Şu an kriz sende 😏', 'Kapatıyorum… etik değil biliyorum 😈', 'Nefes al dedim ona, sana da 🥵', 'Acil değilse beklesin 😳'] },
      { g: '🕰️ Duvar saati gong vurdu', r: ['Saat geçti 😳', 'Zamanı unuttuk 😏', 'Seansı uzatıyorum 😈', 'Zaman burada durur 🥵', 'Bir gong daha duyarız 🙈'] }
    ],
    fxrpgardiyan: [
      { g: '💡 Projektörün ışığı hücrenin içinden geçti', r: ['Işık! Eğil 😳', 'Görmedi, devam 😈', 'Kule kimde bu gece? 🙈', 'Gölgede kal mahkum 😏', 'Bir dahakine yakalanırız 🥵'] },
      { g: '🍽️ Yemekhane tepsisi kapı aralığından itildi', r: ['Yemek sonra 😤', 'Açlık beklesin 😏', 'Tepsiyi geri al 🙈', 'Bu gece ziyafet sensin 😈', 'Soğusun, umurumda değil 🥵'] },
      { g: '📢 Müdürün sesi hoparlörden: "Nöbetçi gardiyan ofise!"', r: ['Çağırıyorlar! 😱', 'Beş dakikaya giderim 😏', 'Kımıldama mahkum 😈', 'Yokluğumu fark etmesinler 🙈', 'Hücren kilitli kalsın 🤫'] }
    ],
    fxrppizza: [
      { g: '🛵 Motosikletin alarmı öttü', r: ['Motorum! 😱', 'Biri mi çalıyor?! 🙈', 'Alarm susar, sen susma 😈', 'Bırak ötsün 😏', 'Teslimat gecikti zaten 🥵'] },
      { g: '🧾 Fiş sistemde iki kez çıktı', r: ['İki pizza mı? 😏', 'İkinci teslimat benden 😈', 'Fiş beklesin 🙈', 'Ödemeyi böyle alırım 🥵', 'Patron fark etmez 😳'] },
      { g: '🔥 Pizza çantası hâlâ sıcak, buharı yüzüne vurdu', r: ['Sıcak! 🥵', 'Pizzadan sıcak şey var 😏', 'Çantayı kapat 🙈', 'Buhar mı ben mi? 😈', 'Terledim 😳'] }
    ],
    fxrpressam: [
      { g: '🕯️ Işık değişti, gölgeler yüzüne düştü', r: ['Işık mükemmel, kıpırdama 🎨', 'Gölgen çok güzel 😏', 'Bu anı boyamalıyım 😈', 'Daha yakına gel 🥵', 'Ressam ışığı sever 🙈'] },
      { g: '🖌️ Fırça elinden kayıp göğsüne boya bıraktı', r: ['Kırmızı iz 😳', 'Sanat eseri oldun 😏', 'Silme, böyle kalsın 😈', 'Her yerine boya süreyim 🥵', 'Kaza değildi 🙈'] },
      { g: '🐈 Atölyenin kedisi tuvalin üstünden geçti', r: ['Patileri tuvalde! 😤', 'Yeni bir teknik 😏', 'Kedi de sanatçı 🙈', 'Bırak, sen modelimsin 😈', 'Tablo bozuldu, baştan 🥵'] }
    ],
    fxrpdans: [
      { g: '🩰 Bale ayakkabısının bağcığı koptu', r: ['Bağcığım! 😳', 'Yalınayak devam 😏', 'Sen bağla 😈', 'Düşmeyeyim, tut beni 🥺', 'Ritmi kaybetmeyelim 🥵'] },
      { g: '👯 Diğer öğrenciler provaya erken geldi', r: ['Erken geldiler! 😱', 'Soyunma odasına 🙈', 'Ders özel dedim 😤', 'Bir şey olmamış gibi esne 😏', 'Gitsinler, ikinci tura 😈'] },
      { g: '💦 Parkede ter kaydı, ikisi de yere düştü', r: ['Düştük! 😳', 'Yerde dans da olur 😏', 'Kalkma, böyle kal 😈', 'Canın yandı mı? 🥺', 'En güzel figür bu 🥵'] }
    ],
    fxrpfizyo: [
      { g: '🧊 Buz torbası patladı, su yayıldı', r: ['Soğuk! 🥶', 'Isıtırım seni 😏', 'Islandın, çıkar şunları 😈', 'Tedavi değişti 🥵', 'Kaygan oldu 🙈'] },
      { g: '🏋️ Antrenörü kapıdan seslendi: "Maç yarın, hazır mı?"', r: ['Hazırlanıyor hocam! 😏', 'Kasları çok gergin 😈', 'Biraz daha çalışmamız lazım 🥵', 'Kapıyı açmayın 🙈', 'Yarına hazır olur 😳'] },
      { g: '📏 Esneme bandı koptu, şaklayarak fırladı', r: ['Ah! Bant koptu 😳', 'Ellerimle esnetirim 😏', 'Daha esnek oldun 😈', 'Yeni bant yok, elim var 🥵', 'Acıdı mı? 🥺'] }
    ],
    fxrptaksi: [
      { g: '⛽ Benzin uyarı ışığı yandı', r: ['Benzin bitiyor! 😱', 'Burada kalırız 😏', 'Issız yolda… güzel 😈', 'Yürüyerek gideriz… sonra 🙈', 'Motor sustu, biz değil 🥵'] },
      { g: '🌧️ Yağmur bastırdı, camlar buğulandı', r: ['Camlar buğu 😏', 'Kimse göremez 😈', 'Silecekleri çalıştırma 🙈', 'Yağmur sesi güzel 🥵', 'Yolculuk uzasın 😳'] },
      { g: '📍 Navigasyon "Hedefinize ulaştınız" dedi', r: ['Geldik mi? Bir tur daha 😏', 'Taksimetreyi açık bırak 😈', 'İnmek istemiyorum 🥺', 'Kapıyı açma 🙈', 'Hedefim sensin 🥵'] }
    ],
    fxrpklinik: [
      { g: '🩻 Röntgen cihazı kendiliğinden çalıştı', r: ['İçimi gördün 😳', 'Teşhis koydun mu? 😏', 'Kapat şunu 🙈', 'Görüntüler gizli 🤫', 'Sonuç: tedavi şart 😈'] },
      { g: '🚑 Ambulans sireni hastane bahçesine girdi', r: ['Acil geldi! 😱', 'Bir dakika daha 😏', 'Gitmem lazım… gitmiyorum 😈', 'Hemşireler bakar 🙈', 'Asıl acil sensin 🥵'] },
      { g: '🛏️ Muayene sedyesinin tekerleği kilitlenmedi, kayıyor', r: ['Sedye kayıyor! 😳', 'Tut beni doktor 🥺', 'Duvara dayadık 😏', 'Kaysın, umurumda değil 😈', 'Kilitle… sonra 🥵'] }
    ],
    fxrpvampir: [
      { g: '🦇 Şatonun penceresinden yarasalar doldu', r: ['Çocuklarım geldi 🦇', 'Korkma, onlar benim 😏', 'Kanatları seni okşasın 😈', 'Dışarı çıkın, misafirim var 😤', 'Karanlık daha da koyulaştı 🥵'] },
      { g: '🔔 Köy kilisesinin çanı gece yarısını vurdu', r: ['Gece yarısı… saatim 😈', 'Çan beni uyandırır 🦇', 'Şimdi daha açım 😏', 'On iki vuruş, on iki öpücük 🥵', 'Kaçma, kapılar kilitli 🙈'] },
      { g: '🪞 Aynada sadece misafir görünüyor', r: ['Aynada yokum, şaşırma 😏', 'Sadece seni görüyorum 🦇', 'Bakma oraya, bana bak 😈', 'Yansımam sende kalsın 🥵', 'Korktun mu? 🙈'] }
    ],
    fxrpcadi: [
      { g: '🐸 Kurbağa kavanozdan kaçtı', r: ['Prensim kaçtı 🐸', 'Öpmeyeceğim onu, seni öperim 😏', 'Yakala, malzememdi 😤', 'Bırak, sen yetersin 😈', 'İksir yarım kaldı 🙈'] },
      { g: '📖 Büyü kitabı kendiliğinden bir sayfaya açıldı: "Aşk"', r: ['Kitap biliyor 😏', 'Büyüyü okuyayım mı? 😈', 'Zaten tutuldun 🥵', 'Sayfa kendiliğinden açıldı, yemin ederim 🙈', 'Kader bu 🧙‍♀️'] },
      { g: '🌕 Dolunay çıktı, cadı gücü taştı', r: ['Gücüm taşıyor ✨', 'Dolunayda daha tehlikeliyim 😈', 'Sana büyü yapmadan duramıyorum 😏', 'Tut beni, uçacağım 🥵', 'Ay bizim için doğdu 🌕'] }
    ],
    fxrpfalci: [
      { g: '☕ Kahve fincanı kendiliğinden ters döndü', r: ['Fincan döndü 😳', 'Telve senin adını yazıyor 😏', 'Bakalım ne çıkacak 🔮', 'Kalp şekli! 😈', 'Kader acele ediyor 🥵'] },
      { g: '🕯️ Mum alevi maviye döndü', r: ['Ruhlar geldi 😱', 'Mavi alev iyiye işaret 😏', 'Bizi izliyorlar 🙈', 'Fal tutacak 🔮', 'Durma, ruhlar onaylıyor 😈'] },
      { g: '🔔 Çadırın girişindeki çıngırak çaldı, sıradaki müşteri', r: ['Kapalıyız! 😤', 'Bu gece tek müşterim sensin 😏', 'Beklesin, kader beklesin 😈', 'Perdeyi çek 🙈', 'Falın uzun sürecek 🥵'] }
    ],
    fxrpperili: [
      { g: '🎹 Alt kattaki piyano kendiliğinden çalmaya başladı', r: ['Kim çalıyor?! 😱', 'Hayalet piyanist 👻', 'Melodisi güzel 😏', 'Ritmine uy 😈', 'Bana sarıl 🥺'] },
      { g: '🖼️ Duvardaki portrenin gözleri onları takip ediyor', r: ['Bize bakıyor! 🙈', 'Perdeyle örtelim 😳', 'İzlesin, kıskansın 😈', 'Ev sahibi o 👻', 'Gözlerini kapat, bana bak 😏'] },
      { g: '🌬️ Rüzgâr pencereyi şaklattı', r: ['Ah! Ödüm koptu 😱', 'Rüzgâr mı hayalet mi? 👻', 'Kapat, üşüdüm 🥺', 'Isıt beni 😏', 'Tur bitmedi daha 😈'] }
    ],
    fxrpmaske: [
      { g: '🍷 Bir garson tepsiyle yanlarına yaklaştı', r: ['Şampanya almayalım 😏', 'Bizi görmedin 🤫', 'Maskem yerinde mi? 🙈', 'Bir kadeh… sonra 😈', 'Gitsin, gece bizim 🖤'] },
      { g: '🗣️ Biri adını seslendi, onu tanımış', r: ['Tanıdılar! 😱', 'Ben değilim de 🤫', 'Maskeyi sıkı bağla 🙈', 'Kaçalım balkona 😈', 'Gizemimiz bozulmasın 🖤'] },
      { g: '🎆 Bahçede havai fişekler patladı', r: ['Herkes dışarı bakıyor 😏', 'Fırsat bu 😈', 'Işıklar yüzümü gösterdi 🙈', 'Göğe değil bana bak 🖤', 'Patlama bizde 🥵'] }
    ],
    fxrpkarakedi: [
      { g: '🧹 Bir cadının süpürgesi pencereden geçti', r: ['Sahibem geldi 😼', 'Saklan, beni almaya geldi 🙈', 'Bu gece senin kedinim 🐈‍⬛', 'Mırr… gitsin 😏', 'Uçmayı sonra öğrenirim 😈'] },
      { g: '🐟 Mutfaktan balık kokusu geliyor', r: ['Balık! 😋', 'Sonra yerim 😼', 'Senin kokun daha güzel 😏', 'Pençelerim kaşınıyor 😈', 'Miyav… dikkatim dağıldı 🙈'] },
      { g: '🔮 Kristal kürede gözleri yansıdı', r: ['Gözlerim parlıyor 🐈‍⬛', 'Kader beni sana getirdi 😏', 'Dokuz canımdan biri senin 😈', 'Bakma öyle 🙈', 'Mırr… 🥵'] }
    ],
    fxrpmumya: [
      { g: '🔦 Arkeologların feneri mezar odasına girdi', r: ['Arkeologlar! 😱', 'Lahdime geri dönmeliyim 🙈', 'Beni müzeye koymasınlar 😤', 'Sus… geçsinler 🤫', 'Seni de sararım, saklarım 😈'] },
      { g: '🐍 Kutsal yılan heykelinin gözleri parladı', r: ['Tanrılar izliyor 😳', 'Onlar da kıskanıyor 😏', 'Laneti bozan sensin 😈', 'Gözlerini kapat 🙈', 'Bin yıl bekledim bunun için 🥵'] },
      { g: '⏳ Kum saati devrildi, kum her yere yayıldı', r: ['Zaman aktı 😳', 'Bin yıl geçmiş gibi 😏', 'Kum her yerimde 🙈', 'Zaman bizim için durdu 😈', 'Toplama, kalsın 🥵'] }
    ],
    fxrpsuccubus: [
      { g: '😈 Kuyruğu kendi kendine beline dolandı', r: ['Kuyruğum seni seçti 😈', 'Kaçamazsın artık 😏', 'Sıkı mı? 🥵', 'Benim değil, onun suçu 🙈', 'Sarıl bana, o da sarılsın 🔥'] },
      { g: '🌫️ Odaya kükürt kokulu bir duman doldu', r: ['Evden haber var 🔥', 'Pencereyi aç… açma 😈', 'Duman bizi gizler 😏', 'Nefes al, beni içine çek 🥵', 'Çağırıyorlar, gitmiyorum 🙈'] },
      { g: '💤 Uyuyan birinin rüyasından çağrı geldi', r: ['Başka rüyaya mı? Hayır 😏', 'Bu gece sadece seninim 😈', 'Beklesin o 🙈', 'Rüyan ben olayım 🥵', 'Uyanma sakın 🔥'] }
    ],
    fxrphayalet: [
      { g: '📻 Eski radyo kendiliğinden açıldı, cızırtılı bir şarkı', r: ['Bizim şarkımız 👻', 'Yüz yıl önce de çalardı 🥺', 'Dans eder misin benimle? 😏', 'Kapatma, kalsın 😈', 'Ses titriyor, ben de 🥵'] },
      { g: '🕯️ Rahip evi temizlemek için kapıda', r: ['Beni kovacaklar! 😱', 'Açma kapıyı 🙈', 'Gitmek istemiyorum 🥺', 'Seninle kalmak istiyorum 👻', 'Sakla beni 😳'] },
      { g: '🚪 Kendi eski odasının kapısı açıldı', r: ['Odam… 👻', 'Burada ölmüştüm 😢', 'Şimdi burada yaşıyorum, seninle 😏', 'Gir içeri 😈', 'Anılar geri geldi 🥺'] }
    ],
    fxrpperi: [
      { g: '🌸 Çiçekler odada aniden açtı', r: ['Çiçekler mutlu ✨', 'Bizim yüzümüzden 😏', 'Kokla beni 🌸', 'Bahar geldi 🥵', 'Büyüm taşıyor 🙈'] },
      { g: '🍯 Bal kavanozu devrildi, bal yere aktı', r: ['Balım! 🍯', 'Parmağını batır, tat 😏', 'Her yerim yapış yapış 🙈', 'Peri balı… etkisi var 😈', 'Yala beni 🥵'] },
      { g: '🦋 Kelebekler etraflarında döndü', r: ['Kelebek arkadaşlarım 🦋', 'Gıdıklıyorlar 🙈', 'Bizi kutluyorlar ✨', 'Kaçmasınlar 😏', 'Kanatlarım da titriyor 🥵'] }
    ],
    fxrpdenizkizi: [
      { g: '🐚 Deniz kabuğundan bir şarkı yükseldi', r: ['Kız kardeşlerim çağırıyor 🐚', 'Dönmeyeceğim 🧜‍♀️', 'Şarkı bizim için 😏', 'Dinle, büyülenme… büyülen 😈', 'Burada kalayım 🥺'] },
      { g: '🌅 Güneş battı, kuyruğu bacağa dönüşmeye başladı', r: ['Bacaklarım! 😳', 'İlk kez yürüyeceğim 🥺', 'Tut beni, düşerim 🧜‍♀️', 'Artık her şeyim senin 😈', 'Dokun, nasıl hissettiriyor? 🥵'] },
      { g: '🦀 Bir yengeç parmağını kıstırdı', r: ['Ay! Yengeç 😣', 'Öp, geçsin 😏', 'Kıskanç yengeç 😤', 'Denizin her şeyi kıskanç 🧜‍♀️', 'Gitsin, sen kal 😈'] }
    ],
    fxrpslime: [
      { g: '🧪 Laboratuvar şişesine yarısı çekildi', r: ['Yarım kaldım! 😳', 'Çıkar beni şişeden 🥺', 'Yarım da sarabilirim 😏', 'Kalanım sende 😈', 'Bütün olmak istiyorum 💧'] },
      { g: '🍬 Şeker yedi, rengi pembeye döndü', r: ['Pembe oldum 💗', 'Tatlı da oldum 😏', 'Tadıma bak 😈', 'Şeker beni değiştiriyor 🙈', 'Daha pembe olayım mı? 🥵'] },
      { g: '🫧 Kabarcıklar çıkararak titredi', r: ['Gıdıklanıyorum 🫧', 'Heyecandan kabarıyorum 😳', 'Dokun, patlasın 😏', 'Titreşim hoşuna gitti mi? 😈', 'Köpük köpük oldum 🥵'] }
    ],
    fxrplimon: [
      { g: '🍹 Limonata sürahisi devrildi', r: ['Limonatam! 🍋', 'Her yer ekşi tatlı 😏', 'Yala, israf olmasın 😈', 'Buz gibi döküldü 🥶', 'Ben daha ekşiyim 🙈'] },
      { g: '🐝 Bir arı limon kokusuna geldi', r: ['Arı! Kaçalım 😱', 'Beni de çiçek sandı 🙈', 'Koru beni 🥺', 'Kovala onu, sonra dön 😏', 'Sokarsa öp 😈'] },
      { g: '🔪 Bıçak elinden kayıp limonu ikiye böldü', r: ['Yarım limon 🍋', 'Sıkayım mı üstüne? 😏', 'Kesik limon kokusu 😈', 'Kendimi bölünmüş hissettim 🙈', 'Diğer yarım sensin 🥵'] }
    ],
    fxrpcilek: [
      { g: '🍰 Pasta kremasına parmağı daldı', r: ['Kremaya battı 🙈', 'Tat bakalım 😏', 'Çilekli pasta oldum 🍓', 'Hepsini sen ye 😈', 'Yapış yapış 🥵'] },
      { g: '🌱 Saksıdaki çilekler bir gecede kızardı', r: ['Kardeşlerim olgunlaştı 🍓', 'Benim kadar kırmızı değiller 😏', 'Kıskandılar 😈', 'Toplama, ben yeterim 🙈', 'Olgunluk zamanı 🥵'] },
      { g: '🎂 Doğum günü şarkısı yandaki daireden geliyor', r: ['Doğum günü! 🎂', 'Pastanın çileği benim 😏', 'Bize de dilek tutalım 😈', 'Mumları üflemeden önce 🥵', 'Şarkı bitene kadar 🙈'] }
    ],
    fxrpportakal: [
      { g: '🧃 Meyve sıkacağı kendi kendine çalıştı', r: ['Sıkacak! Bana bakıyor 😱', 'Beni sıkma… sen sık 😏', 'Suyum her yere 😈', 'Kapat şunu 🙈', 'Taze sıkılmış ben 🥵'] },
      { g: '🌴 Bahçeden portakal çiçeği kokusu geldi', r: ['Ev gibi kokuyor 🍊', 'Kokla beni 😏', 'Çiçekliyim 😈', 'Bahar burada 🥵', 'Tatlı tatlı 🙈'] },
      { g: '🏖️ Plaj şemsiyesi rüzgârla uçtu', r: ['Şemsiye! ☀️', 'Güneşte kalalım 😏', 'Turuncu yanarım 🍊', 'Gölge sen ol 😈', 'Isındım 🥵'] }
    ],
    fxrpsarap: [
      { g: '🧀 Peynir tabağı yere düştü', r: ['Peynirler! 🧀', 'Şarap peynirsiz olmaz… olur 😏', 'Sen yeter 😈', 'Sonra toplarız 🙈', 'Eşleşme bozuldu 🥵'] },
      { g: '🕯️ Mahzende mum söndü', r: ['Karanlık 🍷', 'Yıllanmış şaraplar karanlığı sever 😏', 'Elini tut 🥺', 'Tadımı karanlıkta al 😈', 'Ruhlar dinleniyor 🙈'] },
      { g: '🍇 Bağdan hasat zamanı haberi geldi', r: ['Hasat! 🍇', 'Yeni kardeşlerim geliyor 😏', 'Ben en olgunum 😈', 'Bu yıl iyi yıl 🥵', 'Önce beni tat 🍷'] }
    ],
    fxrpvodka: [
      { g: '❄️ Pencere dışında kar fırtınası başladı', r: ['Kar! Evim gibi ❄️', 'Isıt beni 😏', 'Fırtınada daha güzeliz 😈', 'Dışarı çıkmayız artık 🥵', 'Battaniye mi sen mi? Sen 🙈'] },
      { g: '🥒 Turşu kavanozu açıldı, kokusu yayıldı', r: ['Turşu ve vodka 🍸', 'Rus usulü 😏', 'Bir shot, bir ısırık 😈', 'Kokusu geldi 🙈', 'Sen daha keskinsin 🥵'] },
      { g: '🐻 Belgeselde bir ayı kükredi', r: ['Ayı! 😱', 'Rus ayısı bensin 😏', 'Sarıl bana ayı gibi 😈', 'Kapat televizyonu 🙈', 'Kükre benim için 🥵'] }
    ],
    // 🍯🌵🍾 yeni Meisove kızları
    fxrpbal: [
      { g: '🐝 Pencereden içeri bir arı girdi, vızıldıyor', r: ['Arı! Akrabam galiba 🐝', 'Bal kokumu aldı 😳', 'Kovala onu, ben beklerim 😏', 'Sokmasın seni, sokacak benim 😈', 'Vız vız… dikkatim dağıldı 🙈'] },
      { g: '🫙 Raftan bir bal kavanozu düştü, yere yayıldı', r: ['Kardeşim! 😱', 'Yapış yapış oldu her yer 🍯', 'Sonra yalarız 😏', 'Ayağına yapışmasın 😆', 'Ben buradayım, o yeter 😈'] },
      { g: '🐻 Belgeselde bir ayı bal kovanını parçalıyor', r: ['Kapat şunu! 😱', 'Ayılar bal sever, sen de 😏', 'Sen de ayı gibi sarıl 😈', 'Korktum, sarıl bana 🥺', 'Beni ondan koru 🙈'] },
      { g: '🍞 Mutfakta tost makinesi öttü, kahvaltı hazır', r: ['Ballı tost mu? 😏', 'Kahvaltı yatakta, ben de 🍯', 'Ekmeğe sürülmem, sana sürülürüm 😈', 'Sonra yeriz 🙈', 'Önce beni ye 🥵'] },
      { g: '🚿 Banyoda su kesildi', r: ['Su yok mu?! Yapış yapış kalacağız 😱', 'Yalayarak temizlenir 😏', 'Sorun değil, yapışık kalalım 😈', 'Kaynaklarımız tükendi 😆', 'Duş sonra, devam 🥵'] }
    ],
    fxrptekila: [
      { g: '🎺 Sokaktan mariachi müziği geliyor', r: ['¡Ay, ay, ay! Benim şarkım 🎺', 'Ritme uy, mi amor 💃', 'Serenat bize geldi 😏', 'Daha hızlı çalsınlar 😈', 'Evimi hatırladım 🥺'] },
      { g: '🧂 Tuzluk devrildi, tuz yatağa saçıldı', r: ['Tuz her yerde! 🧂', 'Tenime yapıştı, yala 😏', 'Body shot zamanı 😈', 'Sorun değil, limon da var 🍋', 'Ay caramba 😆'] },
      { g: '🌶️ Mutfaktaki acı biber sosu yere döküldü', r: ['Acı kokusu! 🌶️', 'Ben daha acıyım 😏', 'Gözlerim yandı 😆', 'Sonra temizleriz 🙈', 'Ateş üstüne ateş 🔥'] },
      { g: '🪅 Komşunun çocuk partisinde piñata patladı, çığlıklar geliyor', r: ['¡Piñata! 🪅', 'Şekerler yağıyor 😆', 'Bizim partimiz daha iyi 😈', 'Sessiz ol, duyarlar 🙈', 'Ben de patlamak üzereyim 🥵'] },
      { g: '🌵 Pencere kenarındaki kaktüs düştü', r: ['Kaktüsüm! 🌵', 'Dikenli ama benim gibi 😏', 'Batmasın sana 🥺', 'Sonra dikeriz 🙈', 'Ben dikenli değilim, dokun 😈'] }
    ],
    fxrpsampanya: [
      { g: '🍾 Buz kovasındaki şişenin mantarı kendiliğinden patladı', r: ['POP! 😱', 'Köpük her yerde 😆', 'Kıskandı beni 😏', 'Kadeh getir, ziyan olmasın 🥂', 'Ben de patlayacağım 🥵'] },
      { g: '🎆 Gökyüzünde havai fişekler patlıyor', r: ['Ooh, ışıklar! ✨', 'Bizi kutluyorlar 😏', 'Pencereden izleyelim… sonra 😈', 'Ben daha ışıltılıyım 🍾', 'Patlamalar bana ilham veriyor 🥵'] },
      { g: '🥂 Kadeh kulesi sallandı, bir kadeh kırıldı', r: ['Kırıldı! 😱', 'Şans getirir 😏', 'Ayağını kesme 🥺', 'Bir kadeh eksik, sorun değil 🥂', 'Sonra toplarız 🙈'] },
      { g: '🎉 Alt kattan doğum günü şarkısı geliyor', r: ['İyi ki doğdun! 🎂', 'Herkes kutluyor bu gece 😆', 'Bizim kutlamamız daha özel 😈', 'Sessiz ol, duyarlar 🙈', 'Ben de mum üflerim 😏'] },
      { g: '✨ Konfeti makinesi bozuldu, konfeti yağdırıyor', r: ['Konfeti yağmuru! 🎉', 'Saçıma yapıştı 😆', 'Sen de konfetili oldun 😏', 'Kapat şunu 🙈', 'Romantik bence 💛'] }
    ],
    fxrpsut: [
      { g: '🐄 Ahırdan bir inek uzun uzun böğürdü', r: ['Mööö! Akrabam galiba 🐄', 'Kıskandı beni 😏', 'Sessiz ol, duyar 🙈', 'O da sağılmak istiyor 😆', 'Ben daha yüksek inlerim 🥵'] },
      { g: '🥛 Ocaktaki süt kaynayıp taştı', r: ['Süt taştı! 😱', 'Ben de taşmak üzereyim 😈', 'Kapat ocağı, sonra gel 🙈', 'Kardeşim yandı 🥺', 'Mutfak süt kokuyor 😆'] },
      { g: '🐓 Horoz öttü, sabah oldu', r: ['Sabah oldu mu?! 😳', 'Kahvaltı zamanı… ben 😏', 'Horoza aldırma 🙈', 'Bütün gece sürdü 😆', 'Bir tur daha 😈'] },
      { g: '🐱 Kedi içeri girip yere damlayan sütü yalıyor', r: ['Kedi! 😆', 'Sütümün kokusunu aldı 😳', 'O da benden istiyor 🙈', 'Kov onu, süt senin 😈', 'Çok tatlı ama şimdi değil 🥺'] },
      { g: '🚜 Çiftçi traktörle evin önünden geçti', r: ['Görmesin bizi! 🙈', 'Perdeyi kapat 😳', 'Gürültüsü ritmimize uydu 😏', 'Geçti, devam 😈', 'Köy yeri, herkes bilir 😆'] }
    ],
    // 🎭 2. set roller + 🪞 ayna
    fxrpmelek: [
      { g: '⚡ Gökyüzünde bir şimşek çaktı, bütün ev aydınlandı', r: ['Yukarıdakiler kızdı 😳', 'Beni geri çağırıyorlar… gitmiyorum 😈', 'Sarıl bana 🥺', 'Halem titredi ⚡', 'Görmediler, devam 😏'] },
      { g: '🔔 Uzaktan kilise çanları çalıyor', r: ['Çanlar… beni hatırlattılar 😇', 'Duymazdan gel 🙈', 'Bu gece günahkârım 😈', 'Çanlar ritmimize uydu 😏', 'Kalbim daha hızlı çalıyor 🥵'] },
      { g: '🪶 Kanadından bir tüy koptu, havada süzülüyor', r: ['Tüyüm! 🪶', 'Her günahta bir tüy 😈', 'Saklayalım onu 🥺', 'Kanatlarım iyileşmeyecek gibi 😏', 'Umurumda değil 💋'] },
      { g: '🌈 Pencereden içeri garip bir ışık huzmesi düştü', r: ['Beni arıyorlar! 😱', 'Perdeyi kapat 🙈', 'Bulamazlar, senin kollarındayım 😏', 'Işık bizi izliyor 😳', 'Bırak izlesin 😈'] },
      { g: '🐦 Bir güvercin pencereye konup bakıyor', r: ['Haberci mi? 😳', 'Git, söyle onlara: kalıyorum 😈', 'Kuşlar bile kıskanıyor 😏', 'Kovalım onu 🙈', 'Bizi ispiyonlamasın 🥺'] }
    ],
    fxrpkaptan: [
      { g: '🌊 Dev bir dalga gemiye çarptı, her şey yana kaydı', r: ['Tutun! 🌊', 'Gemi sağlam, sen de sağlam dur 😈', 'Yere düştük, kalkmayalım 😏', 'Fırtına başlıyor ⛈️', 'Dümeni bırakmadım… seni de 😩'] },
      { g: '📯 Güverteden tayfa bağırıyor: "Kaptan! Ufukta gemi!"', r: ['Beklesinler! 😤', 'Şimdi değil! ⚓', 'Korsan mı? Önce sen 😈', 'Dürbünü sonra alırım 😏', 'Kapıyı kilitle 🙈'] },
      { g: '🐬 Yunuslar geminin yanında zıplıyor', r: ['Yunuslar! 🐬', 'İyi şans getirir 😏', 'Onlar da bizim gibi oynaşıyor 😈', 'Sonra bakarız 🙈', 'Ben de zıplayacağım 🥵'] },
      { g: '🔔 Gemi çanı nöbet değişimi için çaldı', r: ['Nöbetin bitti, tayfa… ya da başladı 😏', 'Çanı duymadım 🙈', 'Benim nöbetim sende 😈', 'Değişim sonra ⚓', 'Bir tur daha 🥵'] },
      { g: '🦜 Geminin papağanı "Kaptan! Kaptan!" diye bağırıyor', r: ['Sus kuş! 😤', 'Her şeyi tekrarlar, dikkat 😳', 'Bunu da öğrenmesin 🙈', 'Ona bir kraker ver 😆', 'Kafesini ört 😈'] }
    ],
    fxrpkral: [
      { g: '🎺 Saray borazanları bir elçinin geldiğini duyuruyor', r: ['Elçi beklesin 😤', 'Kraliçe meşgul 👑', 'Bütün krallık beklesin 😈', 'Kapıları kapatın 🙈', 'Sen devam et, hizmetkâr 😏'] },
      { g: '🚪 Kapıda bir muhafız: "Majesteleri, her şey yolunda mı?"', r: ['Defol! 😤', 'Her şey… çok yolunda 😏', 'Kimseyi içeri alma 👑', 'Sesimizi duydu mu? 😳', 'Sesini kes ve devam et 😈'] },
      { g: '🍇 Hizmetçi kız bir tabak üzüm getirip kapıyı çalıyor', r: ['Bırak ve git 😤', 'Üzümü sonra yerim 🍇', 'Sen bana yedir 😏', 'Kim çağırdı onu? 🙈', 'Tatlı sonraya 😈'] },
      { g: '🏰 Şatonun bahçesinde havai fişekler patlıyor', r: ['Benim şerefime 👑', 'Onlar kutlasın, biz de 😈', 'Pencereden izleyelim… sonra 😏', 'Gürültü yapmasınlar 😤', 'Patlamalar gibi hissediyorum 🥵'] },
      { g: '👑 Tacı yatağın kenarından yere düştü', r: ['Tacım! 😱', 'Al onu, takma 😤', 'Bu gece taçsızım 😏', 'Sonra al 🙈', 'Kafana tak, kral ol bu gece 😈'] }
    ],
    fxrprobot: [
      { g: '⚠️ Androidin ekranında kırmızı uyarı: [ISI KRİTİK]', r: ['Soğutma… yetersiz 🥵', 'Önemsiz, devam 🤖', 'Sebebi sensin, Komutan 😏', 'Sistemim eriyor 😩', 'Uyarıyı kapattım 🖤'] },
      { g: '📡 Telsizden ses: "Komutan, durum raporu bekleniyor"', r: ['Rapor: meşgulüz 😈', 'Bağlantıyı kesiyorum 📡', 'Şu an hiçbir şey raporlanamaz 😳', 'Görev sürüyor… özel görev 😏', 'Sus telsiz 🤖'] },
      { g: '🔋 Androidin batarya göstergesi %20 oldu', r: ['Şarja ihtiyacım var… senden 😏', 'Enerji tasarrufu modu… hayır, iptal 😈', 'Bitmeden bitir beni 🥵', '%20 yeter 🤖', 'Fişimi sen tak 😳'] },
      { g: '🤖 Destek ünitesi yanınızda belirip "Soru: ne yapıyorsunuz?" diyor', r: ['Kapat şunu! 😤', 'Sorgu reddedildi 🤖', 'Bunu veritabanına kaydetme 🙈', 'Git, nöbet tut 😈', 'Utanç protokolü devrede 😳'] },
      { g: '💥 Uzaktan bir patlama sesi geliyor, harabeler sarsılıyor', r: ['Düşman mı? Bekle 🖤', 'Önce görevimiz 😈', 'Seni koruyorum, Komutan 🤖', 'Gürültü bizi saklar 😏', 'Kılıcım yanımda, devam 🥵'] }
    ],
    fxrpelf: [
      { g: '🦉 Bir baykuş tapınağın sütununa konup ötüyor', r: ['Ormanın gözcüsü 🦉', 'Bizi izliyor 😳', 'Sırrımızı saklar 😏', 'Kovma onu 🥺', 'Elfçe sus dedim, gitti 😈'] },
      { g: '🌙 Bulutlar dağıldı, dolunay tapınağı aydınlattı', r: ['Ay ışığı… büyülü bir gece 🌙', 'Tenin parlıyor 😏', 'Ay bizi kutsadı 🧝‍♀️', 'Gölgelere geçelim 🙈', 'Böyle görmek istiyorum seni 😈'] },
      { g: '🐺 Ormanın derinliklerinden kurt ulumaları geliyor', r: ['Korkma, burada güvendeyiz 🏹', 'Şövalyem, kılıcın yakında mı? 😏', 'Sarıl bana 🥺', 'Onlar da aşık 🐺', 'Kurtlar kendi işine 😈'] },
      { g: '🍃 Rüzgâr esti, yapraklar üstünüze yağdı', r: ['Orman bizi örtüyor 🍃', 'Saçına yaprak takıldı 😆', 'Doğa onayladı 😏', 'Yaprak yatağı 🌿', 'Hiç durma 🥵'] },
      { g: '🎶 Uzaktan elf şarkıları duyuluyor, kardeşleri yaklaşıyor', r: ['Kardeşlerim! Saklan 😱', 'Görmesinler bizi 🙈', 'Bir insanla… beni sürgün ederler 😳', 'Geçip gittiler, devam 😈', 'Şarkıları bizim için 😏'] }
    ],
    // ✨ Genshin
    fxrpyelan: [
      { g: '🎲 Masadaki zar kendi kendine yuvarlanıp yere düştü', r: ['Tek geldi. Şanslısın 🎲', 'Bırak, sonra toplarım 😏', 'Kader bile bizi izliyor 😈', 'Hile yok, sadece yer çekimi 💧', 'Kaç geldi? Boşver 🙈'] },
      { g: '🚪 Çayevinin kapısı tıklatılıyor: "Hanımefendi, bir misafiriniz var"', r: ['Beklesin 😏', 'Meşgulüm. Çok 😈', 'Şşş, ses çıkarma 🤫', 'Kim olduğunu biliyorum, önemsiz 💧', 'Kapı kilitli, devam 🎲'] },
      { g: '💠 Bileziği bir an parlayıp sönüyor', r: ['Bir uyarı… önemsiz 😏', 'Atalarım izliyorsa utansınlar 😈', 'Yakında bir tehlike var. En sevdiğim 💧', 'Görmezden gel 🙈', 'Sen de hissettin mi? 💠'] },
      { g: '📜 Kapının altından mühürlü bir not kayıyor', r: ['Görev… sabaha kalsın 😏', 'Okumayacağım 🤫', 'Şu an tek görevim sensin 😈', '"Acil" yazıyor. Değil 💧', 'Notu ayağınla it 🎲'] },
      { g: '🍵 Çay fincanı devrildi, masa ıslandı', r: ['Bırak, aksın 💧', 'Zaten her şey ıslaktı 😈', 'Sonra silerim 😏', 'Dikkatimi dağıtamazsın 🎲', 'Sıcakmış… senin kadar değil 🥵'] }
    ],
    fxrpclorinde: [
      { g: '🔔 Saat kulesi gece yarısını vuruyor', r: ['Nöbetim bitti. Resmen ⚔️', 'Geç oldu… kalıyorum 😏', 'On iki vuruş. Say, durma 😈', 'Bu saatte düello yasak. Bu değil ⚡', 'Sabaha kadar vaktimiz var 😳'] },
      { g: '🎩 Şapkası askıdan kayıp yere düştü', r: ['Bırak, kalsın 🎩', 'Bugün ikinci düşüşü 😳', 'Uğursuzluk değil, işaret 😏', 'Sonra alırım ⚔️', 'Şapkam bile teslim oldu 😈'] },
      { g: '👣 Koridorda muhafız devriyesinin adımları duyuluyor', r: ['Sessiz. Nefesini tut 🤫', 'Beni böyle görmemeliler 😳', 'Geçtiler. Devam ⚔️', 'Kapı kilitli, endişelenme 😏', 'Yakalanırsak düelloyla çözerim 😈'] },
      { g: '⚡ Dışarıda şimşek çaktı, salon bir an aydınlandı', r: ['Ben değildim… galiba ⚡', 'Fırtına bize eşlik ediyor 😏', 'Yüzümü gördün. Unut 😳', 'Güzel bir ışık ⚔️', 'Gök gürlesin, sesimi örter 😈'] },
      { g: '🎲 Masadaki zar yuvarlanıp yirmi geldi', r: ['Kritik başarı. Senin lehine 😏', 'Zar bile senden yana 🎲', 'Oyun yöneticisi onaylıyor 🎩', 'Bir hamle daha hakkın var 😈', 'Tesadüf değil 😳'] }
    ],
    fxrpmavuika: [
      { g: '🥁 Dışarıda zafer davulları çalmaya başladı', r: ['Ritme uy, savaşçım 🥁', 'Halkım kutluyor, biz de 🔥', 'Davullar sesimi örter 😈', 'Ne güzel bir eşlik ☀️', 'Daha yüksek çalsınlar 😏'] },
      { g: '🔥 Ateş bir anda harlandı', r: ['Ben yaptım. İstemeden 😳', 'Heyecanlanınca böyle oluyor 🔥', 'Korkma, seni yakmam 😏', 'Ateş de azdı 😈', 'Daha da harlansın ☀️'] },
      { g: '📣 Dışarıdan bir savaşçı sesleniyor: "Liderim, sizi bekliyorlar!"', r: ['Beklesinler! 🔥', 'Liderin meşgul 😏', 'Geliyorum… hayır, gelmiyorum 😈', 'Bir zafer konuşması daha mı? Sonra ☀️', 'Şşş, yokmuşuz gibi 🤫'] },
      { g: '🏍️ Motor kendi kendine kükredi, farı yanıp söndü', r: ['Kıskandı 😆', 'Sus bakalım, sıra sende değil 🏍️', 'Motoru boşver, bana bak 🔥', 'Sonra onunla da gezeriz 😈', 'O da sabırsız, sahibi gibi 😏'] },
      { g: '🌋 Uzakta volkan gürledi, yer hafifçe sarsıldı', r: ['Natlan bizi kutluyor 🌋', 'Bu ben değildim… belki 😏', 'Sarsıntı işimize yarar 😈', 'Tutun bana ☀️', 'Toprak bile ısındı 🔥'] }
    ],
    fxrpxianyun: [
      { g: '🕊️ Pencereye bir turna kondu, içeri bakıyor', r: ['Git, bu adeptus meşgul 🕊️', 'Akrabam sayılır, utandım 😳', 'Bakma öyle, yuvana dön 😤', 'Kimseye anlatmaz, merak etme 😏', 'Perdeyi çek 🙈'] },
      { g: '⚙️ Köşedeki mekanizma kendi kendine çalışmaya başladı', r: ['Arıza değil, özellik ⚙️', 'Kapat şunu… hayır, kalsın 😈', 'Bu adeptusun icatları da heyecanlandı 😳', 'Vızıltısı ritim tutuyor 😏', 'Sonra onarırım ☁️'] },
      { g: '☁️ Odaya bulut doldu, her yer sisli', r: ['Zirvede böyle olur ☁️', 'Artık kimse görmez 😏', 'Elimi bul, ölümlü 🥺', 'Sis tenimi serinletiyor 😈', 'Bu adeptus bulutu çağırmadı. Sanırım 😳'] },
      { g: '🍵 Çaydanlık fokurdayıp taştı', r: ['Çay! …boşver 😩', 'Bin yıllık çaydanlık, dayanır 🍵', 'Bu adeptus ilk kez çayı unuttu 😳', 'Taşsın, biz de taşıyoruz 😈', 'Sonra taze demlerim ☁️'] },
      { g: '📣 Dağın eteğinden bir ses yankılanıyor: "Ustam, orada mısınız?"', r: ['Öğrencim! Sus 😱', 'Bu adeptus burada değil! 😳', 'Cevap verme, gider 🤫', 'Yarın gelsin, bugün ders yok 😤', 'Gitti… devam, ölümlü 😈'] }
    ],
    fxrphostes: [
      { g: '🔔 Kabin içinden "ding": bir yolcu hostesi çağırıyor', r: ['Beklesin 😏', 'Tek yolcum sensin ✈️', 'Bir dakika beyefendi! …hayır, gitmiyorum 😈', 'Ding ding… sus 🙈', 'Başka hostes baksın 💄'] },
      { g: '✈️ Pilot anons ediyor: "Türbülans bölgesine giriyoruz, kemerlerinizi bağlayın"', r: ['Kemer mi? Sen beni tut 😈', 'Türbülans tam zamanında 🥵', 'Sallanalım 😏', 'Kemerimi sen bağla 😳', 'Yerimizde kalalım ✈️'] },
      { g: '🚪 Tuvaletin kapısı tıklatılıyor', r: ['Dolu! 😳', 'Şşş 🤫', 'Biraz bekleyin efendim! 😩', 'Kilit sağlam mı? 🙈', 'Gitsin, devam 😈'] },
      { g: '☕ Servis arabası koridorda devrildi', r: ['Kahveler! 😱', 'Başka hostes toplar 😏', 'Kimse bizi fark etmedi 🤫', 'Gürültü işimize yarar 😈', 'Sonra toplarım 💄'] },
      { g: '🌅 Pencerede güneş doğuyor, kabin ışıkları açılmak üzere', r: ['Işıklar açılmadan bitirelim 😩', 'Ne güzel bir manzara 🌅', 'Acele et beyefendi 😈', 'Yolcular uyanıyor 😳', 'Bir daha ki uçuşa 😏'] }
    ],
    fxrprahibe: [
      { g: '🔔 Manastır çanı gece duası için çalıyor', r: ['Duaya gitmem lazım… gitmiyorum 😈', 'Bu da bir dua sayılır 😏', 'Kimse yokluğumu fark etmez 🤫', 'Çan susana kadar devam 🥵', 'Affet beni 🕯️'] },
      { g: '👣 Koridorda başrahibenin ayak sesleri yaklaşıyor', r: ['Başrahibe! 😱', 'Sus, nefesini tut 🤫', 'Mumu söndür 🕯️', 'Geçti… devam 😈', 'Yakalanırsam sürgün edilirim 😳'] },
      { g: '🕯️ Rüzgâr esti, mumların hepsi söndü', r: ['Karanlık… daha iyi 😈', 'Elimi bul 🥺', 'Tanrı görmesin diye 😏', 'Mumu yakma 🙈', 'Karanlıkta daha cesurum 🥵'] },
      { g: '📿 Tespihi elinden kayıp yere saçıldı', r: ['Tespihim! 😳', 'Taneleri sonra toplarım 📿', 'Bir işaret mi bu? 😈', 'Hiç umurumda değil 😏', 'Saymayı bıraktım zaten 🥵'] },
      { g: '🎶 Kilisede koro ilahi söylemeye başladı', r: ['İlahiler… ve biz 😳', 'Sesimizi bastırırlar 😏', 'Kendi ilahimizi söyleyelim 😈', 'Duymazlar, devam 🤫', 'Ne tuhaf bir eşlik 🕯️'] },
      { g: '🚪 Kapı tıklatılıyor: "Rahibe, iyi misiniz? Bir ses duydum"', r: ['İyiyim! Dua ediyorum! 😱', 'Sesini kes… 🤫', 'Gitti mi? 😳', 'Yalan söyledim, bir günah daha 😈', 'Devam… ama sessiz 🥵'] },
      { g: '🐈‍⬛ Manastırın kedisi pencere pervazından içeri atladı', r: ['Kedi! Ödüm koptu 😳', 'O da günah çıkarmaya gelmiş 😆', 'Kovma onu, sır tutar 😏', 'Bize bakıyor 🙈', 'Gözlerini kapat, kedicik 😈'] },
      { g: '📿 Duvardaki haç hafifçe sallanıp yamuldu', r: ['Bir işaret mi?! 😱', 'Rüzgârdır… umarım 😳', 'Düzeltme, bakmasın 🙈', 'Affet bizi 🙏', 'Durma, artık çok geç 😈'] }
    ],
    fxayna: [
      { g: '🪞 Ayna duvardaki çivisinden biraz kaydı, çatırdadı', r: ['Düşmesin! 😱', 'Tut onu… beni de 😈', 'Kırılırsa yedi yıl uğursuzluk 😳', 'Sağlam, devam 😏', 'Düzeltmek sonra 🙈'] },
      { g: '💡 Elektrik gitti, oda karanlık; ayna hiçbir şey göstermiyor', r: ['Göremiyorum! 😩', 'Hissederek devam 😈', 'Telefonun ışığını aç 📱', 'Karanlıkta da güzeliz 😏', 'Elektrik gelsin, izleyelim 🥵'] },
      { g: '🌫️ Duştan gelen buhar aynayı tamamen buğuladı', r: ['Sil aynayı! 😆', 'Buğulu daha romantik 😏', 'Parmağımla bir kalp çiziyorum 💗', 'Göremiyorum ama hissediyorum 😈', 'Isıyı biz yaptık 🥵'] },
      { g: '🏠 Karşı binadan biri perdeyi açtı, pencereye bakıyor', r: ['Görüyor mu bizi?! 😱', 'Perdeyi kapat! 🙈', 'Bıraksana, izlesin 😈', 'Aynada bizi görmüştür 😳', 'Işığı kapat 😏'] },
      { g: '📱 Telefon ekranında kamera kendiliğinden açıldı', r: ['Kayıt mı alıyor?! 😳', 'Kapat şunu 🙈', 'Ayna yeter, kamera değil 😏', 'Bir saniye… tamam kapattım 😈', 'Silinsin bu 🤫'] }
    ],
    // 🏖️ mekân kesintileri (app.js PLACE_INT: havuz / araba / asansör / kamp etiketli olaylar)
    yerhavuz: [
      { g: '💡 Havuzun su altı ışıkları birden yandı', r: ['Işıklar! Görünüyoruz 😱', 'Suya dal, çabuk 🙈', 'Bırak yansın, güzel görünüyoruz 😈', 'Kim açtı bunu?! 😳', 'Kapatana kadar devam 😏'] },
      { g: '🏨 Balkondan biri havuza doğru bakıyor', r: ['Biri bakıyor! 😳', 'Suyun altına gir 🙈', 'Görsün, kıskansın 😈', 'Dur, kıpırdama 🤫', 'Gitti… devam 😏'] },
      { g: '👮 Uzaktan bekçinin el feneri yaklaşıyor', r: ['Bekçi! 😱', 'Havluyu at bana 🙈', 'Şezlongun arkasına 🤫', 'Geçti, çok yakındı 😳', 'Bu heyecan iyi geldi 😈'] },
      { g: '🌧️ Yağmur başladı, damlalar havuza düşüyor', r: ['Yağmur! Romantik 🥰', 'Zaten ıslağız 😂', 'İçeri mi girsek? Hayır 😈', 'Damlalar tenimde 💦', 'Devam, ıslanmak sorun değil 😏'] },
      { g: '🎶 Otelin barından müzik sesi yükseldi', r: ['Müzik bizi saklar 😏', 'Ritme uy 💃', 'Herkes barda, havuz bizim 😈', 'Bu şarkıyı severim 🥰', 'Sesimizi kimse duymaz 🤫'] }
    ],
    yeraraba: [
      { g: '🔦 Bir el feneri arabanın camına doğru yaklaşıyor', r: ['Polis mi?! 😱', 'Eğil! 🙈', 'Battaniyeyi üstümüze 🤫', 'Geçti… kalbim 😳', 'Başka yere park edelim 😈'] },
      { g: '🚗 Yanınıza başka bir araba park etti, farları üstünüzde', r: ['Farlar! 😳', 'Görüyor mu bizi? 🙈', 'Camlar buğulu, göremez 😏', 'Motoru çalıştır! 😂', 'Gitsinler, sonra devam 😈'] },
      { g: '📯 Kalçası kornaya değdi, korna öttü', r: ['Korna! 😂', 'Bütün mahalle duydu 🙈', 'Pardon 😳', 'Bir daha basma 😈', 'Romantik değil ama komik 😆'] },
      { g: '🔔 Araba alarmı kendiliğinden çalmaya başladı', r: ['Kapat şunu! 😱', 'Anahtar nerede?! 🙈', 'Herkes bakacak 😳', 'Sustu… oh 😮‍💨', 'Araba bile kıskandı 😂'] },
      { g: '🌧️ Yağmur bastırdı, cama vuruyor', r: ['Yağmur bizi saklar 😏', 'Ses de duyulmaz 😈', 'Ne romantik 🥰', 'Camlar zaten buğulu 🌫️', 'Hiç durmasın 🥵'] }
    ],
    yerasansor: [
      { g: '🔔 Asansör bir kat yukarıda durdu, kapı açılmak üzere', r: ['Toparlan! 😱', 'Düğmeye bas, kapat! 🙈', 'Gülümse, normal davran 😳', 'Kapandı… oh 😮‍💨', 'Kalbim duracak 😂'] },
      { g: '📞 Asansörün acil telefonu çalmaya başladı', r: ['Açma! 😳', 'Teknisyen mi? 🙈', '"Her şey yolunda" de 😏', 'Sustu, devam 😈', 'Bizi duydular mı?! 😱'] },
      { g: '💡 Asansörün ışıkları titreyip kısıldı', r: ['Karanlık 😳', 'Daha iyi 😈', 'Elini tut 🥺', 'Kamera görmez artık 😏', 'Işık geri geldi, hızlı 🥵'] },
      { g: '🎵 Asansör müziği değişti, romantik bir şarkı çalıyor', r: ['Ne tesadüf 😂', 'Bu şarkıda devam 😏', 'Asansör bile destekliyor 😈', 'Dans eder gibi 💃', 'Sesi kıs, utanıyorum 🙈'] },
      { g: '👀 Tavandaki güvenlik kamerasının kırmızı ışığı yanıp sönüyor', r: ['Kayıt mı alıyor?! 😱', 'Sırtını dön ona 🙈', 'Görevli uyuyordur 😏', 'Olsun, görsünler 😈', 'Yüzümü sakla 😳'] }
    ],
    yerkamp: [
      { g: '🦉 Ağaçtan bir baykuş ötüyor', r: ['Korktum! 😳', 'Bizi izliyor 🦉', 'Ormanın gözcüsü 😏', 'Sarıl bana 🥺', 'Devam, o da anlar 😈'] },
      { g: '🔦 Yan çadırdan biri fenerle tuvalete çıkıyor', r: ['Biri uyanık! 😱', 'Fener kapalı mı bizde? 🙈', 'Sessiz ol 🤫', 'Geçti, devam 😏', 'Gölgemizi görmesin 😳'] },
      { g: '🐗 Çalıların arasında bir hışırtı var', r: ['O neydi?! 😱', 'Yaban domuzu mu? 😳', 'Çadıra girelim 🙈', 'Rüzgârdır, devam 😏', 'Sen beni korursun 🥺'] },
      { g: '🔥 Kamp ateşi çıtırdayıp bir kıvılcım uçurdu', r: ['Battaniye! 😱', 'Söndü, sorun yok 😮‍💨', 'Ateş bizim kadar sıcak değil 😈', 'Biraz uzaklaşalım 😏', 'Ne heyecanlı 😂'] },
      { g: '🌧️ Çadırın üstüne yağmur damlaları vurmaya başladı', r: ['Yağmur sesi… ne güzel 🥰', 'Sesimizi bastırır 😏', 'Tulumun içine gir 😈', 'Islanmayalım 🙈', 'Bu sesle devam 🥵'] }
    ]
  };
  Object.keys(MORE).forEach(k => (Stories.FANT_INTERRUPTS[k] = Stories.FANT_INTERRUPTS[k] || []).push(...MORE[k]));
})();
