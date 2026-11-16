# Alt Olay Sistemi: Detaylı Öneri

> Durum: **Faz 1 uygulandı (v856)**, Faz 2-4 açık. İlgili: [systems/monia.md](../systems/monia.md), [systems/chat.md](../systems/chat.md)
>
> Uygulamadaki farklar: olaylara `parent` / `sub` alanı eklenmedi (`sub`/`subs` alt dereceler için dolu). Sahneler ayrı tabloda: `js/data/scenes.js` (`Stories.SCENES`, olay başlıklarıyla). Durum `th.act`, motor `actStep`, şerit `actBar`. Bitiş otomatik zincirlenmiyor: adımlar dolunca 🏁 çip açılıyor, bitiş yazılınca ödül geliyor. Gazino `branch` yerine `seq`.

## 1. Fikir

Şu an her olay tek bir an: seçiliyor, sonucu işleniyor, bitiyor. Alt olay sistemiyle bir olay birkaç adımlı küçük bir sahneye dönüşür. Ana olay sahneyi açar, alt olaylar sahnenin içindeki hamleler olur, sonunda da sahnenin bir kapanışı ve ödülü gelir.

Kazanılacaklar:
- **Derinlik:** "Shower" tek mesaj olmaktan çıkıp 4-5 adımlı bir sahneye dönüşür.
- **Yön:** Kullanıcı sıradaki adımı Kısayollar barında hazır görür, "ne yapsam" diye düşünmez.
- **Ödül hissi:** Sahneyi tamamlamak ekstra parametre, hafıza ve görev ilerlemesi verir.
- **Mevcut içeriğin yeniden kullanımı:** Bugün dağınık duran birçok olay (Shower, BDSM, Office) ana olay altında anlamlı gruplara toplanır.

---

## 2. Veri modeli

### 2.1 Alt olay normal bir olaydır
Alt olaylar ana olayın içine gömülmez. Bunlar `MONIA` / `system.js`'deki sıradan olaylardır, sadece bir ebeveyn alanı alırlar:

```js
{ id:'mvsh21', title:'Soap Her Back', cat:'c:mvshower01x', tags:['duş'],
  parent:'mvsh20', order:1, ... }
```

Neden böyle:
- `outcomes`, `condOk`, `applyOutcome` aynen çalışır.
- Bot kuralları (`r_ev_sh_*`), `ME_EV_LINES`, i18n sözlüğü ve `evSearch` için ek iş çıkmaz.
- THEME tag mantığı (`duş`, `plaj`…) bozulmaz, bitişler yine doğru yere bağlanır.
- Bir alt olay birden fazla ana olayda kullanılacaksa `parent` dizi olabilir: `parent:['mvsh20','mvsa20']`.

### 2.2 Ana olaya `sub` bloğu
```js
{ id:'mvsh20', title:'Shower Together', cat:'c:mvshower01x',
  sub: {
    mode: 'free',          // 'free' | 'seq' | 'branch'
    need: 3,               // how many children complete the scene
    must: ['mvsh23'],      // required children (optional)
    finish: 'mvsh25',      // chained finish event (optional)
    payout: '{+10 Şehvet}{+2 Samimiyet}{+1 Güven}',
    fail: '{-1 Güven}',    // when scene breaks (optional)
    ttl: 6                 // max messages without a child before it breaks
  } }
```

### 2.3 Üç sahne tipi
| Mod | Davranış | Örnek |
|---|---|---|
| `free` | Alt olaylar istenen sırayla yapılır, `need` sayısına ulaşınca tamamlanır | Shower, Sauna, Beach |
| `seq` | Sıra sabittir (`order`), sıradaki adım öne çıkar, atlanan adım uyarı verir | BDSM "Tied To Bed" (bağla → göz bağı → mum → çöz) |
| `branch` | Bir adım sonraki seçenekleri belirler (`next:['a','b']`) | Office "Patron odaya çağırdı" → ya azar ya terfi |

İlk sürümde **sadece `free` ve `seq`** olsun. `branch` daha sonra eklenebilir, çünkü alt olaylardaki `next` alanıyla kolayca genişler.

---

## 3. Motor (sohbet tarafı)

### 3.1 Durum
Thread üzerinde yeni alan:
```js
th.sub = { p:'mvsh20', done:['mvsh21'], at: msgIndex, idle: 0 }
```
Bu yapı `th.edge` ile aynı mantıkta. Thread'de saklandığı için sohbete geri dönüldüğünde sahne devam eder.

### 3.2 Yaşam döngüsü
1. **Açılış:** `sub` bloğu olan bir olay yazılınca `th.sub` oluşturulur. Ana olayın kendi sonucu normal işlenir. Bu "giriş" adımıdır ve küçük tutulmalı.
2. **İlerleme:** Gelen olay `th.sub.p`'nin çocuğuysa `done`'a eklenir ve `idle = 0` olur. `seq` modunda sıra dışı bir adım gelirse ya kabul edilir ama bonus kırpılır, ya da bot "önce …" diye itiraz eder. Önerim kabul edip bonusu kırpmak, akış kesilmez.
3. **Tamamlanma:** `done.length >= need` olunca ve `must` karşılanmışsa:
   - `payout` uygulanır (`applyOutcome` text token'larıyla),
   - `finish` varsa ve koşulları tutuyorsa zincirlenir. Mevcut bitiş seçimiyle (Zevk ≥ 80 + THEME tag) çakışmaması için bitiş, `finish` ile normal seçicinin aynı olaya düştüğü yerde tek sefer çalışır,
   - hafızaya `sub:<id>` anahtarı yazılır,
   - `th.sub` kapanır.
4. **Bozulma:** Aşağıdakilerden biri olursa `fail` uygulanır ve `th.sub` kapanır:
   - alakasız bir kategoriden olay gelirse (aynı THEME tag'li olaylar "uyumlu" sayılır ve bozmaz),
   - yer değişirse (🗺️ place flow),
   - `ttl` mesaj boyunca hiç alt olay gelmezse.

   Bozulma sessiz geçmez, karakter küçük bir tepki mesajı verir.
5. **Manuel kapatma:** Kısayollar barında "✕ sahneyi bitir" butonu olur, ödül vermez ve ceza da yazmaz.

### 3.3 Mevcut sistemlerle ilişki
- **Kombolar (`seq` / `kmb_*`):** Kombo "farklı olaylardan oluşan gizli bir dizi"dir, alt olay sahnesi ise "açıkça duyurulmuş bir sahne". İkisi birlikte yaşar. Tamamlanan bir sahneyi `memRule` içinde tek token olarak görmek için `sub:<id>` token'ı eklenebilir, böylece "Shower sahnesi + Bed sahnesi" gibi bir kombo da yazılabilir.
- **Edging:** Bugünkü `th.edge` aslında elle yazılmış bir alt olay sistemi. İlk sürümde ona dokunulmasın, sistem oturunca isteğe bağlı olarak `sub` modeline taşınır.
- **Öngörülemezlik (`wantNow`) / reddetme:** Alt olay reddedilirse `done`'a eklenmez ama sahneyi de bozmaz. `idle` artar. İkna (`th.ikna`) başarılı olursa adım sayılır.
- **Interrupt'lar (`PLACE_INT`, `RISK_TAG`):** Kesinti sahneyi bozmaz, sadece `idle` sayacını durdurur. Böylece "biri geldi" anı sahneyi rastgele öldürmez.

---

## 4. Arayüz

### 4.1 Sohbet: sahne şeridi
Kısayollar barının üstünde ince bir şerit görünür:

```
🚿 Shower Together  ●●○○  2/4   [✕]
[✓ Soap Her Back] [✓ Wash Hair] [Wall Press] [Shower Cumshot 🔒]
```

- Yapılanlar soluk ve ✓ işaretli, kalanlar normal çip olur.
- `seq` modunda sıradaki adım vurgulanır.
- `finish` adımı `need` dolana kadar 🔒 kalır.
- Yazarken 🔮 Tahmin barıyla birleşme kuralı aynen geçerli: sahne aktifken tahminler önce alt olaylardan seçilir.

### 4.2 Olay seçici (picker)
- Ana olay satırına `▸ 4` rozeti eklenir, basınca alt olaylar accordion içinde açılır.
- 🎯 Şimdi sekmesinde sahne aktifse en üstte "Sahneye devam" grubu çıkar.
- Alt olaylar tek başına da seçilebilir, ama sahne dışında seçilince sahne ödülü yoktur. Çipin üzerinde bunu belirten küçük bir işaret olabilir.

### 4.3 Monia editörü (`renderEventEditor`)
- Olay formuna **"Ebeveyn olay"** alanı (arama ile seçilir) ve **"Sıra"** alanı eklenir.
- Ana olay için katlanır bir **"Alt olaylar"** bölümü olur: mod, need, must, finish, payout, fail, ttl, ayrıca çocuk listesi ve sürükle-bırak ile sıra.
- "+ Alt olay ekle" butonu, kategorisi, tag'leri ve yeri ebeveynden kopyalanmış yeni bir olay açar.
- Kalıplarım (kullanıcı olayları) için de çalışır, çünkü alanlar `MO()` state'ine yazılır.

### 4.4 Lab: `#/sahne`
`#/kombo` labına benzer bir test sayfası (LABS hub'ına eklenir):
- Bir ana olay seçilir, alt olaylar tıklanarak sahne simüle edilir.
- Her adımda parametre değişimi, bozulma koşulları ve bitiş zinciri gösterilir.
- İçerik yazarken "bu sahne gerçekten tamamlanabiliyor mu?" sorusunu cevaplamak için şart.

---

## 5. İçerik entegrasyonu

### 5.1 Bot
- Alt olay bot kuralları normal `r_ev_*` kurallarıdır.
- Sahneye özel yeni durum token'ları: `=durum =sub_<id>` (sahne aktif), `=sub_son` (son adım kaldı). Bot bunlarla "bir tane daha kaldı…" gibi bağlama uygun cevaplar verebilir.
- Bozulma ve tamamlanma için kural grupları: `r_sub_ok_*`, `r_sub_fail_*`.

### 5.2 Me-lines
`ME_EV_LINES` alt olaylar için aynen kullanılır. Sahne açılışı ve kapanışı için küçük bir `ME_SUB_LINES` bloğu eklenir (açılış / ilerleme / tamamlandı / bozuldu).

### 5.3 Kitaplar
Uygun cilde yeni bir **🎬 Sahneler** bölümü eklenir: her ana olay, alt olayları, ödülü ve neyin bozduğu. `KMB_BOOK` gibi tablodan otomatik üretilir (`SUB_BOOK` ile örnek ve ipucu).

### 5.4 Görevler (`QUESTS`)
Sahneler görev için ideal hedeflerdir: "Shower Together sahnesini tamamla", "3 farklı sahneyi bitir", "Bir sahneyi `must` adımıyla bitir". `questSync` hafızadaki `sub:<id>` anahtarlarını okur.

### 5.5 Siteler ve ilanlar
CarmenEvents veya kategori siteleri (Church, Gasino, Jobs) "sahne ilanı" verebilir. Örneğin Gasino: "Bu gece VIP masası: 3 adım", ilanı açınca sahne doğrudan başlar. İlk sürüm için şart değil.

### 5.6 i18n
Yeni UI metinleri ("Sahneye devam", "sahneyi bitir", "Ebeveyn olay", "Alt olaylar" vb.) `i18n-en*.js` sözlüğüne eklenir.

---

## 6. Kategori bazlı örnek sahneler

| Kategori | Ana olay | Alt olaylar | Mod | Bitiş |
|---|---|---|---|---|
| 🧼 Shower | Shower Together | Soap Her Back, Wash Hair, Wall Press, Kiss Under Water | free, need 3 | Shower Cumshot |
| 🧖‍♀️ Sauna | Sauna Session | Pour Water, Towel Off, Sweat Lick | free, need 2 | Cool Down |
| 🔗 BDSM | Tied To Bed | Blindfold, Ice Cube, Hot Wax, Untie | seq | Permission to Come |
| 🏢 Office | After Hours | Lock Door, Desk Clear, Office Chair | seq | Office finish |
| 🏖️ Beach | Sunset Beach | Sunscreen, Towel Hide, Waves | free, need 2 | plaj finish |
| ⛪ Church | Confession | Kneel, Whisper Sins, Penance | seq | – (ödül Güven ağırlıklı) |
| 🎰 Gasino | VIP Table | Lap Dance, Bet Her, Private Room | branch (v2) | – |

Bu olayların bir kısmı zaten var. Onlara sadece `parent` alanı eklemek yeter, olmayanlar yazılır.

---

## 7. Aşamalı yol haritası

**Faz 1: çekirdek (küçük, güvenli)**
- `parent` / `order` / `sub` alanları, `th.sub` durumu, `free` ve `seq` modları, payout / fail / ttl.
- Kısayollar barında sahne şeridi.
- Pilot olarak sadece Shower sahnesi.
- `monia.md`, `chat.md`, `changelog.md`, `status.md`, `INDEX.md` güncellemesi ve `sw.js` VERSION artışı.

**Faz 2: yazarlık**
- Monia editöründe ebeveyn ve alt olay bölümü.
- `#/sahne` lab.
- 3-4 kategoriye sahne eklenmesi (Sauna, BDSM, Office, Beach).

**Faz 3: entegrasyon**
- Bot `=sub_*` durumları, `ME_SUB_LINES`.
- Kitap bölümü (`SUB_BOOK`), görevler.
- Kombo token'ı `sub:<id>`.

**Faz 4: genişleme**
- `branch` modu.
- Site ilanlarından sahne başlatma.
- Edging'in `sub` modeline taşınması (isteğe bağlı).

---

## 8. Riskler ve önlemler

| Risk | Önlem |
|---|---|
| Bitiş iki kez çalışır (`finish` + normal Zevk bitiş seçicisi) | Sahne aktifken normal seçici `finish` ile aynı olaya düşerse tek sefer çalıştır |
| Bot sorgusunda kategori adı fazla eşleşir (bugün "pee", "office" notlarındaki sorun) | Alt olay `when` terimleri özgül tutulur, lab'da test edilir |
| Eski kayıtlarda `th.sub` yok | Alan isteğe bağlı, yoksa sistem hiç devreye girmez, migration gerekmez |
| `app.js` büyüklüğü | Motor küçük ve ayrık tutulur: `subOpen`, `subStep`, `subClose` gibi birkaç fonksiyon, mevcut `eventMessages` akışına tek kanca |
| Sahneler kullanıcıyı kısıtlıyor hissi | Sahne asla zorunlu değil: ✕ ile kapanır, alt olaylar tek başına da seçilir, kesintiler sahneyi öldürmez |

---

## 9. Öneri

**Faz 1'i sadece Shower kategorisiyle yap.** Bu hem motoru hem UI'ı gerçek içerikle dener, yaklaşık 4-5 yeni olay ve birkaç fonksiyon gerektirir. Oturunca kalan kategoriler sadece veri eklemekle sahne kazanır.
