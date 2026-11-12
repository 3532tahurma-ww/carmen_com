# Yarı-yapay-zeka yedek cevap (fikir — uygulanmadı)

Durum: sadece fikir. Henüz kod yok.

## Mevcut durum
- Yedek cevap = `when: []` kuralı. Sadece 6 tane var (4'ü yaşa göre: `r_c4_yedek_*`, 2'si genel). Mesajın içeriğine bakılmıyor.
- `js/app.js` (~L7965): yedek cevaba düşerse cümle atılıp yerine `wantNow` / `fbAsk` teklifi geliyor. Bu yüzden her anlaşılmayan mesaja "teklif" dönüyor.
- `botMiss` sadece kayıt tutuyor; mesajın neye benzediğini önermiyor.

## Öneri: 3 aşamalı yedek katmanı (ML yok, saf JS)
Kural motoru yedek cevaba düştüğünde (`js/app.js` ~L7779 civarı) şu sırayla çalışır.

### 1) Yönlendirici: "Bu aslında başka bir şey mi?"
Mesaj, tüm sistemlerin tetikleyicilerine karşı bulanık puanlanır.
- **Kaynaklar:** tüm kuralların `when` terimleri, `CMD_EV` komutları, `EVQ_RE` + olay başlıkları/`EVQ_ALIAS`, `WHY_RE`, bekleyen `th.botAsk` (evet/hayır yerine "olur, tabi, yok ya" gibi cevaplar), `repeatEv`, `domOrder`, `MEM_RE` (`learnFacts`).
- **Benzerlik:**
  - kelime kökü örtüşmesi (Dice)
  - 5+ harfli kelimelerde 1 harflik yazım hatası toleransı (Levenshtein ≤ 1)
  - Türkçe ek soyma (`-mısın`, `-lım`, `-sana`…)
  - `@grup` eş anlamlılarının genişletilmesi
- **Eşikler:**
  - **≥ 0.75:** sessizce o kurala/sisteme yönlendirilir. Örnek: "dönsene artık" → Doggy komutu.
  - **0.45–0.75:** karakter kendi ağzıyla teyit sorar ("Arkamı mı döneyim? 😏"). Bu soru `th.botAsk = {t:'teyit', rid}` olarak saklanır; "evet" gelirse hedef kural çalışır, "hayır" gelirse 3. aşamaya geçilir.
  - **< 0.45:** 2. aşamaya geçilir.
- `botMiss` kaydına `near: [rid, skor]` eklenir. 🧪 #/deney'de "➕ bu kuralın `when`'ine ekle" butonu olur. Böylece sistem her eksikte biraz daha "öğrenir".

### 2) Niyet çözücü: mesajın ne olduğunu anla
`norm` edilmiş metinden bağlam kelimeleri çıkarılır:

| Özellik | Örnek token | Nasıl |
|---|---|---|
| Soru mu | `=ysoru` + `=ykim/=yne/=yneden/=ynerede/=yzaman/=ynasil/=yevethayir` | mı/mi/?, soru kelimeleri |
| Kime | `=yona` (sen…mısın) / `=ybana` (ben…) | kişi ekleri, zamirler |
| Duygu | `=ypoz/=yneg/=ykaba/=yuzgun/=ysaka` | küçük sözlük + emoji |
| Konu | `=ykonu_yemek/is/aile/hobi/muzik/hava/vucut/seks/mekan/icki/kiyafet` | konu sözlükleri (`groups` formatında) |
| Anahtar kelime | `{konu}` | stop-word dışı en uzun isim; cevaba yansıtılır |

### 3) Besteci: duruma göre yedek cevap
Yedek cevap, `=nedencvp`'de olduğu gibi normal kural formatıyla seçilir:

`BOT.best(yedekKurallari, "yedek <niyet tokenları> <durum tokenları>", ch)`

- **Durum tokenları:**
  - `=ysex` / `=ysonra` (`sexPhase`)
  - `=ygece` (saat)
  - `=yask_yuksek` / `=yguven_dusuk` (relV kovaları)
  - mekân kategorisi
  - `th.fbN` (üst üste kaçıncı yedek)
- **Özellikler:** `traits` motor tarafından zaten otomatik eşleşiyor (Utangaç, Kıskanç, Dominant, Yaş, Memleket…). Ek kod gerekmez.
- **Karakterin kendisiyle ilgili sorular** (`=yona =ysoru`): önce karakter verisinden cevap üretilir (yaş, şehir, iş, ❤️ sevdiği olaylar, kıyafet, mekân). Örnek: "Nerelisin?" → "{şehir}'liyim, sen? 😊". Uygun kural yoksa kaçamak bir cevap + karşı soru gelir.
- **Kullanıcının kendinden bahsetmesi** (`=ybana`): `learnFacts` / `hatira` belleğine bağlanır ("{konu} mu? Bana daha çok anlat").
- **Cevap kalıbı:** `[tepki] || [{konu} yansıtma] || [kanca]`. En fazla 3 baloncuk olur; mevcut kesme mantığına uyar.
- **Tekrar kademesi:**
  - `fbN = 1`: konuya uygun tepki verir.
  - `fbN = 2`: netleştirme sorusu sorar ("Ne demek istedin? 🙈").
  - `fbN ≥ 3`: mevcut `wantNow` / `fbAsk` teklifine geçer. Bugünkü davranış böylece her seferinde değil, son çare olarak kalır.

## Değişecek dosyalar
- `js/bot.js`: `fuzzy(msg, terms)` ve `intent(text)` eklenir. Bunlar API'ye ektir; mevcut fonksiyonlar bozulmaz, editör de kullanabilir.
- `js/app.js`: yedek dalına yönlendirici + besteci, `th.fbN`, `teyit` cevabı, `botMiss.near`.
- `js/data/bot-rules.js`: `r_yd_*` kuralları (kategori "💬 Yedek"), editörden düzenlenebilir. Konu ve duygu sözlükleri `groups` içinde `@ykonu_*` olarak tutulur.
- Ayrıca güncellenecekler: i18n sözlüğü, `bot-en.js`, ProjectMemory (`bot.md`, `chat.md`) ve `sw.js` VERSION.

## Uygulama sırası
1. **Faz 1:** yönlendirici + teyit sorusu + `botMiss.near`. En büyük kazanç burada: "anlamadı" sanılan mesajların çoğu aslında yazım veya ek farkı.
2. **Faz 2:** niyet çözücü + `r_yd_*` cevap havuzu (her niyet için trait kovaları + traitsiz bir yedek).
3. **Faz 3:** karakterin kendisiyle ilgili soruları karakter verisinden cevaplama + #/deney'de "kurala ekle" butonu.
