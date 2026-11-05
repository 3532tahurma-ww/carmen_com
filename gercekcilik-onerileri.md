# Daha gerçekçi olması için neler olabilir?

> Uygulamada zaten çok şey var: 🕰️ sohbet saati, 🩸 döngü ve hamilelik, 🧠 hafıza ("not ettim"), 😣 acı, 💔 sevmediği olayda güven kaybı, kişiliğe göre cevap çerçeveleri. Aşağıdakiler bunların **üzerine** eklenebilecek fikirler. Her birinde hangi mevcut sisteme bağlanabileceği yazılı.

---

## 1. Görünmeyen duygular

### 1.1 Gizli parametreler
Gerçek hayatta karşındakinin "Aşk: 64" değerini göremezsin. İsteğe bağlı bir **🙈 Gizli mod**: Değerler gösterilmez, yalnızca davranıştan sezilir (cevap uzunluğu, emoji sıklığı, ilk mesajı kimin attığı).
- *Bağlanır:* Monia 📊 parametreleri, sohbet arayüzü.

### 1.2 Karışık duygular
Şu an parametreler birbirinden bağımsız ilerliyor gibi. Gerçekte duygular birbirine karışır:
- Yüksek **Aşk** + yüksek **Kıskançlık** → sahiplenici, alıngan cevaplar.
- Yüksek **Şehvet** + düşük **Güven** → istekli ama mesafeli, "sonra pişman olurum" tonu.
- Yüksek **Samimiyet** + düşük **Aşk** → "seni çok seviyorum ama arkadaş olarak" tonu.
- *Bağlanır:* bot kurallarında iki parametrenin birlikte şart olduğu yeni kurallar.

### 1.3 Alışma (azalan getiri)
Aynı olay art arda tekrarlanınca etkisi azalmalı: üçüncü "Kissing" ilk öpücük kadar Aşk vermez. Uzun süre yapılmayan şey ise tekrar güçlü etkiler.
- *Bağlanır:* olayların `onEffects` değerleri; son N mesajda kaç kez olduğuna göre çarpan.

### 1.4 Kötü gün
Bazı günler karakter sebepsiz yere yorgun, gergin ya da dalgın olur. Günün başında rastgele bir **ruh hali** (iyi / yorgun / stresli / neşeli) seçilir; bütün gün cevapları hafifçe renklendirir ve kullanıcı sorarsa sebebini anlatır ("iş berbattı bugün").
- *Bağlanır:* 🕰️ sohbet saati (gün değişimi), Monia günleri.

---

## 2. Karakterin kendi hayatı

### 2.1 İlk mesajı o atsın
Karakter bazen kendiliğinden yazmalı: "Günaydın", "Bugün seni düşündüm", "Ne yapıyorsun?". Sıklık Samimiyet ve Aşk'a bağlı; düşük ilişkide hiç yazmaz.
- *Bağlanır:* sohbet açılınca, son mesajdan bu yana geçen süreye göre.

### 2.2 Gerçek zamanın geçmesi
Uygulama son konuşmanın tarihini biliyor. Kullanıcı 3 gün yazmadıysa karakter bunu fark etmeli:
- Kıskanç: "Üç gündür yoksun. Kiminleydin?"
- Duygusal: "Beni unuttun sandım 🥺"
- Soğuk: hiç değinmez, ama cevapları kısalır.
- Uzun yokluk Samimiyet'i yavaşça düşürür.
- *Bağlanır:* localStorage'daki son mesaj zamanı, kişilik kuralları.

### 2.3 Meşguliyet
Mesleğine ve günün saatine göre bazen hemen cevap veremez: "toplantıdayım, sonra yazarım". Gece vardiyasındaki hemşire sabah uykuludur, öğretmen ders saatinde yazmaz.
- *Bağlanır:* karakterin mesleği, 🕰️ sohbet saati, ⏳ "yazıyor…" sistemi.

### 2.4 Kendi hikayeleri
Karakterin hayatında kullanıcıdan bağımsız şeyler olur: terfi, ailesiyle kavga, hastalanan kedisi, sınav. Bunları kendisi anlatır, günler sonra tekrar bahseder ("kedim iyileşti bu arada").
- *Bağlanır:* Monia olay havuzu; karakter başına küçük bir "hayat olayı" listesi.

---

## 3. Sınırlar ve rıza

### 3.1 Parametreden bağımsız "hayır"
Şu an istekliliği çoğunlukla değerler belirliyor gibi. Gerçekte yüksek Aşk'ta bile "bu akşam değil" denebilir: yorgunluk, regl, stres, ev arkadaşı evde. Sebebini söyler; ısrar edilirse Güven düşer.
- *Bağlanır:* 💔 "izinsiz / istenmeyen olanlar güveni sarsar" mantığı, ruh hali (1.4), döngü günü.

### 3.2 Kişiye özel sınırlar
Her karakterin **asla** istemediği birkaç şey olsun. Bunlar ancak uzun güvenle konuşulur, bazıları hiç değişmez. Kullanıcı ilk kez sorduğunda karakter bunu açıkça söyler.
- *Bağlanır:* "sevmediği olaylar" listesi, ama Güven'e göre değişmeyen kilitli bir alt küme.

### 3.3 Konuşarak başlamak
Yeni bir fantezi ya da olay ilk kez olacaksa, önce konuşma: "Bunu hiç denemedim… nasıl bir şey?" Konuşulmadan atlanırsa daha soğuk karşılanır.
- *Bağlanır:* olay zinciri, ilk kez olma kontrolü (`ctx.done`).

---

## 4. Sonrası

### 4.1 Ertesi gün
Yakın bir geceden sonraki ilk mesaj ilişkinin durumuna göre değişmeli:
- Yüksek Aşk: "Hâlâ gülümsüyorum 🙈"
- Düşük Güven: tuhaf bir sessizlik, "dün… biraz hızlı oldu galiba".
- Utangaç: o konuyu hiç açmaz, ama emojileri artar.
- *Bağlanır:* son seansın tarihi ve son değerler.

### 4.2 Sonrası bakım (aftercare)
Boşalmadan hemen sonra cevap biterse sahne yarım kalır. Sarılma, su getirme, gülme, konuşma gibi bir **sakinleşme** evresi olsun; ilişkiyi en çok bu evre güçlendirsin (Samimiyet / Güven).
- *Bağlanır:* 🤗 Sarılma modu ve "boşalırken sarılma ve rahatlama mesajları"; bunun karakter tarafındaki karşılığı.

### 4.3 Kalıcı anılar
Hafıza şu an ad, şehir, sevdiklerin gibi **bilgileri** tutuyor. Buna **anılar** da eklenebilir: ilk öpücüğün yeri, ilk kavganın sebebi, birlikte gidilen mekan. Haftalar sonra kendiliğinden anılır: "Hatırlıyor musun, o yağmurlu gece parkta…"
- *Bağlanır:* 🧠 hafıza, 📍 mekanlar, olay geçmişi.

---

## 5. Kusur ve beceriksizlik

### 5.1 Kullanıcı tarafında küçük aksilikler
"Benim mesajlarım" hep kusursuz, ideal bir sevgilinin sesi. Gerçekte telefon çalar, bacağa kramp girer, biri yataktan düşer, kahkahaya boğulunur. Arada sırada (%3–5) gelen **komik aksilikler**, hem gerçekçilik hem samimiyet katar; birlikte gülmek Samimiyet'i artırabilir.
- *Bağlanır:* ME_EV_LINES'a küçük bir "aksilik" havuzu.

### 5.2 Mesajlaşma kusurları
- Yazım hatası ve hemen ardından düzeltme: "sni* seni".
- Art arda üç kısa mesaj (double texting).
- "Bu mesaj silindi": yazıp vazgeçmek; Utangaç ve Gergin karakterlerde daha sık.
- Uzun mesaja uzun "yazıyor…", sonra kısacık bir cevap ("yazdım sildim, boş ver").
- *Bağlanır:* yazım tarzı özellikleri ("Kısa yazar", "Geç cevap verir"), ⏳ yazıyor sistemi.

### 5.3 Tekrar soğumasın
Aynı cümle kısa sürede iki kez gelirse büyü bozulur. Son kullanılan 20–30 cevap bir süre havuzdan çıkarılır (eğer zaten yoksa).
- *Bağlanır:* `js/bot.js` cevap seçimi.

---

## 6. İlişkinin zamanı

### 6.1 Evreler
İlişki bir yay çizsin: **tanışma → flört → ilk yakınlık → ilişki → rutin → kriz → (barışma ya da ayrılık)**. Her evrenin kendine göre tonu, olayları ve tehlikeleri olsun. Rutinde heyecan azalır, yenilik ister; krizde küçük şeyler büyür.
- *Bağlanır:* 📊 parametre eşikleri, Monia olay etiketleri (Başlangıç, Doruk, Final, Kavga, Barışma).

### 6.2 Değişen kişilik
Karakterler zamanla değişsin: Utangaç biri yüksek Samimiyet'te açılır, Güvensiz biri sevildikçe özgüven kazanır, Kıskanç biri güven arttıkça yumuşar (ya da güven kırılınca sertleşir). Değişim yavaş ve görünür olsun: "Eskiden bunu söyleyemezdim, biliyor musun?"
- *Bağlanır:* kişilik özellikleri + parametre eşikleri.

### 6.3 Seks dışı zaman
Gerçek ilişkilerin büyük kısmı sıradan anlardan oluşur: film önerisi, yemek tarifi, dertleşme, sıkıcı bir pazartesi. Bu anlar Samimiyet ve Güven'i asıl besleyen yer olsun; cinsel olaylardan daha **kalıcı** etki bıraksın.
- *Bağlanır:* bot kurallarına "gündelik" kategorisi, Monia'da 📅 gündelik olaylar.

---

## 7. Geri alınamazlık

Raporda (2.2 ve 2.4) belirtilen paradoksun doğrudan karşılığı.

### 7.1 🔒 Gerçek mod
Bir sohbete özel isteğe bağlı mod:
- ↶ Geri al kapalı.
- Gönderilen mesaj düzenlenemez, silinemez (karakter "silindi" yazısını görür ve sorar).
- Sohbet kopyalanarak "farklı son" denenemez.

Söylenen söz geri alınamadığında her mesaj ağırlık kazanır. Gerçekçiliğin belki de en güçlü kaynağı bu.

### 7.2 Gerçek sonlar
Karakter, Güven ve Aşk belli bir sınırın altına uzun süre düşerse **ilişkiyi bitirebilmeli**. Gerçek modda bu kalıcı olur. Kapı tamamen kapanmaz ama dönüş zor ve yavaştır.
- *Bağlanır:* ⚡ eşik olayları, Monia Final etiketi.

### 7.3 Öngörülemezlik
Karakter bazen kullanıcının beklemediği, kendi kişiliğine uygun ama sistemin "en uygun kural"ı olmayan bir cevap versin (%5–10 rastgele kişilik dışı ama makul cevap). Gerçek insanlar her zaman en tutarlı cevabı vermez.

---

## Öncelik önerisi

Etki / emek dengesine göre başlamak için:

| Öncelik | Fikir | Neden |
|---|---|---|
| 1 | 2.2 Gerçek zamanın geçmesi | Az emek, büyük his: dünya sen yokken de dönüyor |
| 2 | 3.1 Parametreden bağımsız "hayır" | Karakteri araçtan öteki'ye çeviren en hızlı adım |
| 3 | 4.2 Sonrası bakım | Mevcut sarılma sistemini karakter tarafına taşır |
| 4 | 1.4 Kötü gün | Tek bir günlük değişkenle bütün cevaplar canlanır |
| 5 | 7.1 Gerçek mod | Teknik olarak basit (kapatmak), etkisi derin |
