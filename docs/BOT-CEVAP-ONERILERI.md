# Bot cevapları: inceleme ve öneriler

`js/data/bot-rules.js` üzerine notlar ve yeni kural/cevap fikirleri. Kural biçimi için bkz. [BOT-KURALLARI.md](BOT-KURALLARI.md).

---

## 1. Şu anki durum

| Kategori | Kural | Tetikleyici |
|---|---|---|
| Fantezi kitabı | 182 | Olay kodları (`=evt`, `=fant`, `=fx…`) |
| Azgın konuşma | 156 | **Kullanıcı mesajı**: `@hz_azdim`, `@hz_seksi`, `@hz_sik`, `@hz_bosal` |
| Rol yapma | 48 | Olay + rol adı |
| Pozisyon geçişi | 44 | Olay kodları |
| Fantezi | 4 | Olay kodları |

Kullanıcının **elle yazdığı** mesajlara cevap veren yalnızca 4 niyet var. Her birinin genel, kişilik (`traits`) ve rol (`fxrp…`) sürümleri var.

### İyi olanlar
- Kişilik sürümleri karakterli. Soğuk karakterin "Konuşma, yap." cevabıyla Alaycı karakterin "Vay, ne romantik bir cümle 🙄" cevabı gerçekten farklı biri gibi duruyor.
- Rol sürümleri mesleğin diline uyuyor ("Talebiniz değerlendirmeye alındı ⚖️", "Sipariş notuna bunu yazsaydınız ya").
- `||{cevap:boşal}` ile cevap ikinci bir aşamaya bağlanıyor, bu güzel bir zincir.

### Zayıf noktalar
1. **Niyet çok dar.** Hepsi en uç noktada başlıyor. "Güzelsin", "gel yanıma", "öpebilir miyim", "hoşuna gitti mi", "ne giyiyorsun" gibi araya giren adımlar yok. Sohbet ısınmadan doğrudan yatağa gidiyor.
2. **Emoji tekrarı.** Cevapların büyük kısmı 😏 😈 🥵 ile bitiyor. Art arda üç mesajda aynı yüz ifadesi olunca bot gibi duruyor.
3. **Tek kalıp:** "Kısa cevap + emoji". Çok az cevapta eylem (`*…*`), soru, duyu ayrıntısı, `{sen}` ya da çok baloncuk (`||`) var.
4. **Hiç kullanılmayan kişilikler:** `Kıskanç`, `Sakin`, `Gergin` (traits.js'te var, kural yok).
5. **Yazım stili özellikleri kullanılmıyor:** `Kısa yazar`, `Hep küçük harf`, `Harf uzatır (canımmm)`, `Emoji kullanmaz`. Mesela "Hep küçük harf" bir karakter büyük harfle "Biliyorum 😏" yazınca karakterden çıkıyor.
6. **Cevap hep kabul.** Reddetme, bekletme, pazarlık ya da "önce şunu yap" türü cevaplar Şımarık ve Kibirli dışında yok denecek kadar az. Biraz direnç gerilimi artırır.

---

## 2. Yeni niyetler (gruplar)

Merdiven gibi düşün: **iltifat → flört → teklif → yakınlaşma → zevk → sonrası**. Her basamak ayrı bir grup.

| Grup | Örnek kelimeler | Niyet |
|---|---|---|
| `@il_guzel` | güzelsin, çok güzel, harikasın, tatlısın, nefis görünüyorsun, büyüleyicisin | Genel iltifat |
| `@il_beden` | gözlerin, dudakların, gülüşün, saçların, bacakların, kalçan, göğüslerin, tenin, kokun | Belirli bir yere iltifat |
| `@il_ozledim` | +özlemek, aklımdasın, seni düşündüm, rüyamda gördüm | Özlem |
| `@tk_bulus` | +buluşmak, +görüşmek, bize gel, sana geleyim, bu gece, yanıma gel | Buluşma teklifi |
| `@tk_ops` | öpebilir miyim, +öpmek, dudağına, bir öpücük | Öpücük teklifi |
| `@tk_masaj` | masaj, sırtını ovayım, omuzların | Masaj teklifi |
| `@tk_banyo` | banyo, duş, küvet, köpük | Banyo teklifi |
| `@tk_yatak` | yatağa gel, uzan yanıma, sarılarak uyuyalım | Yatak teklifi |
| `@fl_giyim` | ne giyiyorsun, üstünde ne var, iç çamaşırı, pijama | Ne giydiğini sorma |
| `@fl_foto` | fotoğraf at, foto, göster bana, bir poz | Fotoğraf isteme |
| `@fl_hayal` | seni hayal ediyorum, düşününce, aklıma geliyorsun | Hayal kurma |
| `@zv_iyi` | çok güzel, harika hissettiriyor, inanılmaz, mükemmel | Zevk geri bildirimi |
| `@zv_devam` | devam et, durma, daha, daha hızlı, daha yavaş, daha sert | Yönlendirme |
| `@zv_soru` | hoşuna gidiyor mu, beğendin mi, iyi mi, nasıl istersin | Partnere soru |
| `@zv_ses` | inle, sesini duymak, adımı söyle, fısılda | Ses isteği |
| `@sn_sonra` | nasıldı, sarıl, yorgun musun, su ister misin | Sonrası / şefkat |
| `@dm_emir` | diz çök, eğil, bana bak, yalvar, sus | Dominant emir |
| `@dm_sahip` | benimsin, kimin, sahibin | Sahiplenme |

---

## 3. Cevap üretme teknikleri

Aynı niyet için 4-6 cevabı farklı **kalıplardan** seç; böylece rastgele seçim hep aynı hissettirmez.

| Kalıp | Örnek (iltifat: "çok güzelsin") |
|---|---|
| **Eylem** `*…*` | `*saçını kulağının arkasına atar, dudağını ısırır*` |
| **Soruyla geri çevirme** | `Nerem en güzel? Tek tek say bakalım` |
| **Duyu ayrıntısı** | `Yeni parfümümü sürdüm, yanıma gelirsen kokusunu alırsın` |
| **İsim kullanma** | `{sen}… bunu senden duyunca başka oluyor` |
| **İki baloncuk** | `Dur||Bir daha söyle, kaydetmem lazım` |
| **Pazarlık** | `İltifat güzel ama öpücük daha güzel olurdu 😚` |
| **Ters köşe** | `Biliyorum. Aynaya her baktığımda aynısını düşünüyorum` |
| **Gelecek sözü** | `Bu gece bunu tekrar söyleyeceksin, emin ol` |
| **Bekletme** | `Hmm…||…||Tamam, kızardım. Mutlu musun?` |
| **Emoji yok** | Karakterin ağırlığı emojisiz cümlelerde daha iyi çıkar |

**Emoji çeşitlendirme:** 😏 😈 🥵 yerine duruma göre 🫦 💋 🔥 🌙 🍷 🛁 🕯️ 🫣 🙈 🥺 💞 🖤 ✨ 😮‍💨 🤭 ve bazen hiç emoji yok.

---

## 4. Örnek cevaplar

### 4.1 İltifat: `@il_guzel`

**Genel**
- `*yanağına küçük bir öpücük kondurur* Bu da teşekkürüm 💋`
- `Nerem en güzel? Tek tek say bakalım`
- `Sen bunu her söylediğinde biraz daha güzelleşiyorum, haberin olsun ✨`
- `Dur||Bir daha söyle||Bu sefer gözlerime bakarak`
- `İltifat güzel ama öpücük daha güzel olurdu 😚`

**Utangaç**
- `*ellerini yüzüne kapatır* Bunu birden söyleme ama 🙈`
- `B-ben mi?||…teşekkür ederim. Sen de. Çok.`
- `Şu an kıpkırmızı oldum, iyi ki görmüyorsun 🫣`

**Kibirli**
- `Haberler geç ulaşıyor sana 💅`
- `Doğru. Devam et, dinliyorum.`
- `Bunu bilmeyen kaldı mı ki?||Ama senin ağzından iyi duruyor, kabul.`

**Kıskanç** *(yeni)*
- `Bunu başkalarına da söylüyor musun? Söyleme.`
- `Sadece bana söyle. Başka kimse duymasın 🖤`
- `Güzelim çünkü seninim. Unutma bunu.`

**Sakin** *(yeni)*
- `Teşekkür ederim. Sesinde bir şey var bu akşam, hoşuma gitti.`
- `*gülümser, hiç acele etmeden yanına oturur*`
- `Yavaş söyle. Tadını çıkarmak istiyorum.`

**Gergin** *(yeni)*
- `Ah- şey- saçım dağınık ama, emin misin? 😅`
- `Bunu söyleyince kalbim hızlandı, dur bir nefes alayım`
- `Gerçekten mi? Şaka yapmıyorsun değil mi? Ciddi misin?`

**Hep küçük harf + Kısa yazar**
- `biliyorum`
- `sen de`
- `hmm. tekrar et`

### 4.2 Bedenine iltifat: `@il_beden`

Kelimeye göre ayrı kurallar yaz (`gözlerin` → gözle ilgili cevap). Genel bir cevap yetmez.

| Mesaj | Cevaplar |
|---|---|
| gözlerin | `*bakışını kaçırmadan sana kilitlenir* Şimdi de kaçabilir misin bakalım` · `Gözlerim seni görünce böyle parlıyor, suçlu sensin` |
| dudakların | `Bakmak yetmez, tatmak lazım 🫦` · `*dudağını yavaşça ısırır* Bunlar mı?` |
| gülüşün | `Gülüşümün sebebi şu an mesaj yazıyor` · `Sen yazınca kendiliğinden geliyor, elimde değil 🤭` |
| saçların | `Parmaklarını geçirmek ister misin? Serbestsin` · `Bugün açık bıraktım, senin için` |
| kokun | `Boynuma sürdüm. Yaklaşırsan bulursun` · `Kokumu üstünde taşımak ister misin? 🌙` |
| tenin | `Yumuşak mı merak ediyorsun? Dokunmadan bilemezsin` · `*kolunu uzatır* Kontrol et` |

### 4.3 Özlem: `@il_ozledim`
- `Ben de. Yastığına sarıldım, aynı değil.`
- `Kaç saat oldu biliyor musun?||Ben biliyorum. Saydım.`
- `Özlediysen gel. Kapı açık 🕯️`
- **Kıskanç:** `Özledin ama kiminleydin bütün gün? Anlat.`
- **Alaycı:** `Ooo, nihayet aklına geldim demek 🙄||…Ben de özledim. Söylemedim say.`

### 4.4 Buluşma teklifi: `@tk_bulus`
- `Şarap bende, sen gelmeyi getir 🍷`
- `Ne giyeyim? Yoksa bir şey giymesem mi?`
- `Saat kaçta? Erken gel, bekleyemem`
- `Gelirsen kapıyı kilitleme, ben açarım||Bir daha da kapanmaz`
- **Şımarık:** `Tatlı getirirsen evet, getirmezsen yine evet ama küserim 🎀`
- **Soğuk:** `Dokuz. Gecikme.`
- **Gergin:** `Bu gece mi? Evi toplamam lazım, yüzüm, saçım, hepsi— tamam. Evet. Gel.`
- **Reddetme / bekletme:** `Bu gece olmaz||Ama yarın gelirsen telafi ederim, söz 😚`

### 4.5 Öpücük: `@tk_ops`
- `Sormana gerek yoktu ki *yaklaşır*`
- `Önce gözlerini kapat||…şimdi 💋`
- `Bir tane mi? Kendini tutabileceğini mi sanıyorsun?`
- **Utangaç:** `*gözlerini sıkıca kapatır, dudaklarını hafif uzatır* 🙈`
- **Kibirli:** `Öpücüğümü hak ettin mi? …Peki, yanağına.`
- **Asi:** `Herkesin önünde mi? Tamam 🔥`

### 4.6 Masaj / banyo / yatak

**Masaj `@tk_masaj`**
- `*yüzüstü uzanır, sırtını açar* Yağ çekmecede`
- `Sadece omuzlar mı? Daha aşağısı çok yoruldu…`
- `Ellerin ısıtıp öyle başla, soğuk istemem`

**Banyo `@tk_banyo`**
- `Köpüğü ben hazırlarım, mumları sen yak 🛁🕯️`
- `Sırtımı ovarsan senin de her yerini ovarım`
- `Su sıcak, ben daha sıcak. Gel.`

**Yatak `@tk_yatak`**
- `*yorganı açar* Senin tarafın soğuk, ısıt bakalım`
- `Sarılarak uyumak mı? Uyuyabileceğimizi sanıyorsun 🌙`
- **Sakin:** `Gel. Başını göğsüme koy. Sadece nefes al.`

### 4.7 Ne giyiyorsun: `@fl_giyim`
- `Senin tişörtün. Başka bir şey değil.`
- `Tahmin et. Üç hakkın var`
- `Siyah dantel||Yalan söyledim. Hiçbir şey 🫣`
- **Neşeli:** `Ayıcıklı pijama 😆||Ama altında başka bir şey var, sürpriz`
- **Alaycı:** `Klasik soru 🙄||…Kırmızı. Mutlu musun?`
- **Kıskanç:** `Neden soruyorsun? Başka birine de soruyor musun?`

### 4.8 Fotoğraf isteme: `@fl_foto`
- `Fotoğraf yetmez, gel canlısını gör`
- `*ayna karşısına geçer* Hangi açıdan istersin?`
- `Önce sen at, sonra düşünürüm 😏`
- **Utangaç:** `Ş-şimdi mi? Işık kötü, saçım… peki, bekle 🙈`
- **Şımarık:** `Fotoğrafımın bedeli var: üç iltifat 🎀`

### 4.9 Zevk geri bildirimi: `@zv_iyi` / `@zv_devam` / `@zv_soru`

**"Çok güzel"**
- `Daha başlamadım bile`
- `*nefesi kesilir* Senin için de mi? Söyle bana`
- `Böyle söyleyince ben de kendimi kaybediyorum 😮‍💨`

**"Devam et / durma"**
- `Durmayacağım. Ta ki adımı söyleyene kadar`
- `Böyle mi? Yoksa… böyle mi?`
- `Yalvarınca daha güzel oluyor, bir daha söyle`
- **Kibirli:** `Bunu istemeni bekliyordum 💅`
- **Soğuk:** `Sus. Hissedersin.`

**"Hoşuna gidiyor mu?"**
- `Sesimden anlamadın mı?`
- `Hoşuma gitmek ne kelime||Aklım gitti`
- **Utangaç:** `*cevap vermez, sadece yüzünü omzuna gömer* 🙈`
- **Duygusal:** `Hiç bu kadar yakın hissetmemiştim kimseye 🥺`

### 4.10 Ses isteği: `@zv_ses`
- `*kulağına eğilir, adını fısıldar* {sen}…`
- `Komşular duyacak ama umurumda değil`
- **Utangaç:** `S-sesim çıkmıyor… ama çıkacak gibi 🫣`

### 4.11 Sonrası / şefkat: `@sn_sonra`
Şu an boşalma zinciri bittiğinde sohbet de bitiyor. Sonrası sahnesi bağı derinleştirir.

- `*göğsüne başını yaslar* Kalbin hâlâ hızlı. Benimki de.`
- `Nasıldı mı? Bacaklarım hâlâ bana ait değil`
- `Su getir… sonra geri gel, gitme`
- `Bu gece burada kal. Sabah kahve benden ☕`
- **Kibirli:** `Biliyorum. Bir daha ne zaman?`
- **Alaycı:** `Fena değildi 🙄||Tamam, muhteşemdi. Yüzüne vurma.`
- **Romantik:** `Böyle sarılarak sonsuza kadar kalabilirim 💞`
- **Kıskanç:** `Bunu sadece benimle yapıyorsun. Söz ver.`

### 4.12 Dominant / itaat: `@dm_emir`, `@dm_sahip`
Karakterin kişiliğine göre **iki yön** yaz: itaat eden ve kafa tutan.

- **İtaat:** `*söylediğini yapar, gözlerini senden ayırmadan*` · `Nasıl istersen`
- **Kafa tutan (Asi, Kibirli):** `Ben mi? Diz çökmek mi? Önce sen 😈` · `Emir vermek mi? Bu gece roller değişiyor`
- **Sahiplenme:** `Seninim||Ama sen de benimsin, unutma 🖤`

---

## 5. Kişilik + rol ortak tablosu

Yeni her rol (`fxrp…`) için 4 niyet yerine 6'lık bir set yazılabilir:

| Niyet | Avukat örneği |
|---|---|
| İltifat | `Bu iltifat kayda geçti. Lehinize delil sayılır.` |
| Buluşma | `Saat 8, ofiste. Mesai dışı danışmanlık 😏` |
| Öpücük | `İtiraz ediyorum…||…İtirazımı geri çekiyorum.` |
| Ne giyiyorsun | `Takım elbise. Ceketi çoktan çıkardım.` |
| Zevk | `Hükmü veriyorum: kusursuz ⚖️` |
| Sonrası | `Dosyayı kapatıyorum. Ama yeniden açılabilir.` |

---

## 6. Otomatik ek önerileri (`addons`)

| when | add | mode | chance |
|---|---|---|---|
| (boş) + `Gergin` | `şey…`, `yani…`, `ah-` | prepend | 25 |
| (boş) + `Kıskanç` | `Sadece benimsin, değil mi?` | message | 10 |
| (boş) + `Hep küçük harf` | (motor küçültmüyorsa, bu karakter için ayrı küçük harf cevaplar yaz) | — | — |
| `@il_guzel` | `*kızarır*`, `*gülümser*` | before | 40 |
| `@tk_bulus` | `Ne zaman geliyorsun?` | message | 50 |
| `@sn_sonra` | `🌙`, `💞`, `🫶` | append | 50 |

---

## 7. Örnek JSON (içe aktarmaya hazır)

```json
{
  "format": "amor-stories-bot",
  "version": 1,
  "rules": [
    { "id": "r_il_guzel", "name": "Güzelsin", "category": "İltifat", "when": ["@il_guzel"], "reply": ["*yanağına küçük bir öpücük kondurur* Bu da teşekkürüm 💋", "Nerem en güzel? Tek tek say bakalım", "Dur||Bir daha söyle||Bu sefer gözlerime bakarak", "İltifat güzel ama öpücük daha güzel olurdu 😚"], "traits": [], "chars": [], "note": "" },
    { "id": "r_il_guzel_kiskanc", "name": "Güzelsin (Kıskanç)", "category": "İltifat", "when": ["@il_guzel"], "reply": ["Bunu başkalarına da söylüyor musun? Söyleme.", "Sadece bana söyle. Başka kimse duymasın 🖤", "Güzelim çünkü seninim. Unutma bunu."], "traits": ["Kıskanç"], "chars": [], "note": "" },
    { "id": "r_tk_bulus", "name": "Buluşma teklifi", "category": "Teklif", "when": ["@tk_bulus"], "reply": ["Şarap bende, sen gelmeyi getir 🍷", "Ne giyeyim? Yoksa bir şey giymesem mi?", "Gelirsen kapıyı kilitleme, ben açarım||Bir daha da kapanmaz", "Bu gece olmaz||Ama yarın gelirsen telafi ederim, söz 😚"], "traits": [], "chars": [], "note": "" },
    { "id": "r_sn_sonra", "name": "Sonrası", "category": "Sonrası", "when": ["@sn_sonra"], "reply": ["*göğsüne başını yaslar* Kalbin hâlâ hızlı. Benimki de.", "Nasıldı mı? Bacaklarım hâlâ bana ait değil", "Bu gece burada kal. Sabah kahve benden ☕"], "traits": [], "chars": [], "note": "" }
  ],
  "groups": [
    { "name": "il_guzel", "words": ["güzelsin", "guzelsin", "çok güzel", "harikasın", "tatlısın", "büyüleyici", "nefis görünüyorsun"] },
    { "name": "tk_bulus", "words": ["+buluşmak", "+görüşmek", "bize gel", "sana gel-", "yanıma gel", "bu gece"] },
    { "name": "sn_sonra", "words": ["nasıldı", "nasildi", "=sarıl", "yorgun musun", "su ister"] }
  ],
  "verbs": [
    { "verb": "buluşmak", "stems": ["buluş"] },
    { "verb": "görüşmek", "stems": ["görüş"] }
  ]
}
```

> Not: `çok güzel` hem `@il_guzel` hem `@zv_iyi` içinde olursa çakışır. Zevk tarafında `=evt` ya da pozisyon koduyla birlikte yazarsan (puanı daha yüksek olur), sahne sırasında zevk cevabı, normal sohbette iltifat cevabı kazanır.

---

## 8. Öncelik sırası

1. `Kıskanç`, `Sakin`, `Gergin` için mevcut 4 niyete trait sürümleri (en az emek, hemen fark edilir).
2. `@il_guzel`, `@tk_bulus`, `@sn_sonra`: sohbetin başını ve sonunu doldurur.
3. Mevcut cevaplarda emoji çeşitlendirme ve her kurala en az bir `*eylem*` ve bir `||` cevap.
4. `@zv_*` grupları: sahne içi etkileşim.
5. Rol başına 6'lık set.
