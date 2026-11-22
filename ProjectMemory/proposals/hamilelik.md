# 🤰 Hamilelik ve doğum sonrası olayları (öneri, uygulanmadı)

> Durum: fikir. 2026-11-16'da konuşmada önerildi, kullanıcı "md olarak tut" dedi.
> ✅ v977: ⏩ zaman atlama (durum çipi → +1 hafta / sonraki dönem / doğum) ve 👨 bebeğin babası (`babyBy` 'me' / 'hb', `kidsBy`), kitapta 3 yeni bölüm.
> ✅ v886'da uygulandı: v3 💞 foreplay (14), 🔥 seks (13), 💦 bitişler (v3'teki 3 + 10), `weeks` kapısı (`pregBlock`), `hamile` THEME etiketi, 4 sahne, 🤰 Hamilelik Kitabı, haber. Gerisi (haber olayları, lohusa, bebek kesintisi, After Birth) hâlâ fikir.

## Bugünkü mekanik (app.js `bodyTick`, `pregWeek`)
- Creampie bitişleri `f:hamile` açar (`outcomes` → `{ p: 'f:hamile', d: 1 }`, hap olayı `mvh1h70jral7v` yoksa).
- Durum çubuğunda hafta; 13 / 27 / 36. haftada sohbete not; 40. haftada doğum (`c.births++`, `sfx('baby')`).
- 12. haftadan sonra 🍼 Süt artar. Hamilelik / doğum sonrası olayı yok; sonrası Nursing / Lactation'a kalıyor.

## Gereken mekanikler (olaylar bunlara bağlı)
- **Hafta kapısı:** olaya `weeks: [min, max]` alanı; `writeEvents` aralık dışını engeller (`bullGate` gibi), "henüz erken" / "artık geç" uyarısı.
- **🤰 `hamile` etiketi:** `EV_THEME`'e eklenir; hamilelik bitişleri sadece hamilelik pozisyonlarından sonra.
- **🩹 Lohusa dönemi:** doğumdan sonra 6 oyun haftası penetrasyonlu pozisyonlar kapalı; ön sevişme, Nursing, yakınlık açık. `Doctor Cleared` kapatır.
- **👶 Bebek kesintisi:** yeni 📱 kesinti türü (bebek uyanır), %15, sadece `c.births > 0`.

## 🤰 Pregnancy

### Haber (1.–8. hafta)
| Olay | Açıklama | Etki |
|---|---|---|
| Two Lines | Banyodan test elinde çıkar, sesi titriyor | Aşk +5; sonuç: sevinç / korku / şok |
| Morning Sickness | Sabah bulantısı; saçını tutarsın | Samimiyet +3, Uyarılma −10 |
| Telling You | Ultrason fotoğrafını kahvaltı tabağının altına saklar | Aşk +8 |
| Whose Is It? | 🐍 Affair / 🐂 Bull hikâyesi varsa hesap yapar | Kıskançlık ±, Güven −3 |
| Secret Keeping | 12. haftaya kadar kimseye söylemezsiniz | Samimiyet +2 |

### İkinci üç ay (13.–26. hafta)
| Olay | Açıklama | Etki |
|---|---|---|
| First Kick | Elini karnına koyar: "Hissettin mi?" | Aşk +10 |
| Ultrasound Date | Ekranda bebek; kız mı erkek mi bahsi | Aşk +5, Güven +3 |
| Midnight Craving | Gece 3'te turşu ve dondurma; sen markete | Güven +2 |
| Hormone Rush | "Şimdi, hemen" | Şehvet +20 |
| Belly Oil | Çatlak yağını sen sürersin | Uyarılma +10, Samimiyet +2 |
| Maternity Lingerie | Hamile iç çamaşırıyla aynada | Şehvet +10; Undress'e bağlı |
| Baby Names | Yatakta isim listesi | Aşk +3 |

### Hamilelik pozisyonları (`hamile` + bölge; 13. haftadan sonra)
| Olay | Etiket | Not |
|---|---|---|
| Bump Spooning | vajinal | Yan yatarak, karın yastıkla destekli |
| Careful Cowgirl | vajinal | Hızı o belirler |
| Bed Edge Hold | vajinal | O yatak kenarında, sen ayakta |
| Pillow Fort Doggy | vajinal | Karnın altında yastıklar; 27. haftadan sonra kapanır |
| Sensitive Breasts | göğüs | Süt ≥ 30 ise süt damlar |
| Bump Worship | öpücük | Karnından aşağı öperek inersin |

### Son üç ay (27.–40. hafta)
| Olay | Açıklama | Etki |
|---|---|---|
| Nesting | Bebek odasını boyarsınız | Samimiyet +3 |
| Feet Rub | Şişmiş ayaklarına masaj | Güven +3 |
| Can't See My Feet | Ayakkabısını sen bağlarsın | Aşk +2 |
| Hospital Bag | Hastane çantası hazır | "Doğum yaklaştı" notu |
| Labor Start Sex | "Doğumu başlatır" denen yöntem | vajinal; 38. haftadan sonra |
| False Alarm | Gece hastaneye koşarsınız, boşuna | Uyarılma −20, Aşk +3 |

### Bitişler (Cumming, `hamile` + `boşalma`)
- **Bump Cumshot**: karnına.
- **Gentle Creampie**: hamilelik sonucu yok (zaten hamile); Aşk +3.
- **Milky Finish**: Süt ≥ 50 ise sütü de akar (Nursing'e bağlı).

## 👶 After Birth

### İlk günler (🩹 dönem)
| Olay | Açıklama | Etki |
|---|---|---|
| First Hold | Bebeği ilk kez kucağına verir | Aşk +15; doğumda otomatik zincir |
| Hospital Visit | Çiçeklerle gelirsin | Güven +5 |
| 3AM Shift | Gece nöbetini sen alırsın | Güven +5 |
| Sleep Deprived | İkiniz de zombi | Uyarılma −15 |
| Body Insecurity | Aynada karnına bakıp ağlar, sarılırsın | Güven/Samimiyet + ya da Aşk − |
| Milk Comes In | Göğüsleri doldu (Lactation'a geçiş) | Süt +40 |

### Geri dönüş (6. haftadan sonra)
| Olay | Açıklama | Etki |
|---|---|---|
| Doctor Cleared | "Doktor izin verdi" 😏 | 🩹 kapanır, Şehvet +15 |
| First Time Again | Yavaş ve dikkatli | vajinal, Aşk +5 |
| Nap Time Quickie | Bebek uyurken 20 dakika | vajinal; 👶 kesinti 2 kat |
| Baby Monitor | Telsiz cızırdayınca donarsınız | Uyarılma +15 |
| Babysitter Night | Bebek anneannede | Kesinti yok, Şehvet +10 |
| Leaking During | Sevişirken sütü akar | Süt −10; kişiliğe göre utanır / güler |

### Uzun vadeli sonlar
| Olay | Açıklama |
|---|---|
| Family Photo | İlk aile fotoğrafı; romantik kapanış |
| Baby Number Two? | Hap / kondom kapanır, döngü yeniden |
| Back To Work | İşe döner; Office / Clinic açılır |
| Wedding After | Evlilik teklifi; `f.evli` açılır |
| Father Reveal | Affair / Bull hattında gerçek ortaya çıkar → Got Caught / Husband Calls It Off dalları |

## Bağlantılar
- Affair / Bull: `Whose Is It?`, `Father Reveal` (v884 Affair: `Carry It Home` zaten hamilelik sonucu taşıyor).
- Nursing / Lactation: `Milk Comes In` geçiş noktası.
- Kesintiler: son üç ayda kasılma, doğumdan sonra 👶.
- Sahneler: `ilkhafta` (Two Lines → Telling You → Baby Names), `donus` (Doctor Cleared → First Time Again → Gentle Creampie).

## Ek öneriler (v2, 2026-11-16)
Mevcut 731 olay tarandı: Breeding / ovulasyon / hamilelik öncesi olay yok; tek ilgili olay `Morning-After Pill`.

### 🍼 Trying To Conceive (hamilelik öncesi, yeni kategori)
| Olay | Açıklama | Etki |
|---|---|---|
| Baby Fever | Bebek kıyafetlerine bakıp iç çeker | Aşk +3; kondom/hap reddi açılır |
| Ovulation Test | "Bugün tam zamanı" | Sonraki creampie'de hamilelik şansı ×2 (`th.fertile`) |
| Fertile Window | 3 oyun günü süren pencere; durum çubuğunda 🌸 | Şehvet +15 |
| Mating Press | vajinal; "hiç kaçırma" | Creampie bitişine yönlendirir |
| Legs Up After | Creampie sonrası bacaklar duvarda | Hamilelik şansı +; Samimiyet +2 |
| Skipped Pill | Hapı gizlice atlar (kişiliğe göre itiraf eder ya da etmez) | Güven −5 / gizli `f:hapyok` |
| Late Period | "Gecikti…" — test öncesi gerilim | Two Lines'a zincir |
| Pregnancy Scare | Negatif çıkar; rahatlama ya da hayal kırıklığı | Kişiliğe göre Aşk ± |

### 🤰 Pregnancy ek olaylar
| Olay | Açıklama | Bağlantı |
|---|---|---|
| Pregnancy Glow | Herkes ona bakıyor, kıskanırsın | 😤 kıskançlık |
| Maternity Photoshoot | Çıplak karın fotoğrafı | 📷 `mvcam01x` (Camera) |
| Prenatal Massage | Yan yatarak yağ masajı | 💆 `mvmsalon01x` |
| Prenatal Yoga | Top üstünde esneme, yardım edersin | 🏋️ `mvgym01x` |
| Prenatal Checkup | Doktor kalp sesini dinletir | 🏥 `mvclinic01x`, `kontrol` sahnesi |
| Pregnant Float | Havuzda ağırlıksız hisseder | 🏖️ `mvpool01x`, `hamile` + `havuz` pozisyonu |
| Shower Seat | Duşta oturarak; sen yıkarsın | 🧼 `mvshower01x` |
| Colostrum Drop | Göğsünden ilk damla gelir | Süt +10, Nursing ön adım |
| Braxton Hicks | Sevişirken sahte kasılma → durur | 📱 kesinti, 30. haftadan sonra |
| Baby Shower | Arkadaşları gelir, hediyeler | Aşk +3; misafir kesintisi |
| Twins! | Ultrason'da iki kalp (%5) | `c.twins`; doğumda `births += 2` |
| Bump Grind | Karnını sana sürterek dans | Uyarılma +10 |

### 👶 After Birth ek olaylar
| Olay | Açıklama | Etki |
|---|---|---|
| Kegel Coach | Pelvik taban egzersizi, sen sayarsın | 🩹 süresi −1 hafta |
| Postpartum Lingerie | Yeni bedenini sana gösterir | Body Insecurity'yi iptal eder |
| Dad Duty | Bebeği uyutursun, o seni izler | Şehvet +10 |
| Date Night Again | Doğumdan sonra ilk dışarı çıkış | Restaurant / Bar açılır |

## Ek öneriler (v3): hamilelik foreplay + seks (`emojis` alanıyla)

### 💞 Foreplay (`hamile` + ön sevişme; 8. haftadan sonra)
| Emoji | Olay | Açıklama | Etki |
|---|---|---|---|
| 🤲🤰 | Bump Caress | Elini karnında yavaşça gezdirirsin | Samimiyet +3, Uyarılma +5 |
| 🪞🤰 | Mirror Bump Hug | Aynada arkadan sarılırsın; eller karın ve göğüste | Uyarılma +10 |
| 🧊🍒 | Ice Nipples | Hassas göğüslere buz | Uyarılma +15; Süt ≥ 30 ise damlar |
| 👗🤰 | Maternity Dress Lift | Hamile elbisesini yavaşça kaldırır | Şehvet +10; Undress'e bağlı |
| 📱🔥 | Craving You | Hormonlu mesaj: "Turşu değil, seni istiyorum" | Şehvet +15 |
| 🛁🤰 | Warm Bath Tease | Ilık küvette karnını köpükler | Uyarılma +10; 🛁 `mvtub01x` |
| 🖐️💦 | Spoon Fingering | Yan yatarken parmaklarınla | Uyarılma +15 |
| 👅🌸 | Wedge Pillow Licking | Yastıklara yaslanır, sen aşağıda | Uyarılma +20; oral |
| 🪑👅 | Chair Edge Oral | Sandalyenin ucuna oturur, sen diz çökersin | Uyarılma +20; oral |
| 🍆✋ | Side-Lying Handjob | Yan yatarak seni okşar | Uyarılma +10 |
| 👄🍆 | Side-Lying Blowjob | Yatakta yan dönerek | Uyarılma +15; oral |
| 🍈🍆 | Swollen Titjob | Büyümüş göğüsleriyle | Uyarılma +15; göğüs |
| 📳🌸 | Gentle Vibe | Düşük titreşim, hızı o seçer | Uyarılma +15; 📳 `th.vib` |
| 🥛💧 | Colostrum Tease | İlk damlaları sana tattırır | Süt −5, Şehvet +10; 18. haftadan sonra |

### 🔥 Seks pozisyonları (`hamile` + bölge)
| Emoji | Olay | Etiket | Hafta | Not |
|---|---|---|---|---|
| 🌙🤰 | Slow Lotus | vajinal | 13–30 | Yüz yüze oturur, karın aranızda |
| 🔄🤰 | Reverse Careful Ride | vajinal | 13–34 | Ters oturur, karın serbest |
| 🛋️🤰 | Sofa Edge Missionary | vajinal | 13–40 | Koltuk ucunda, sen diz çökmüş; 🛋️ Living Room |
| 🪑🤰 | Chair Ride | vajinal | 13–32 | Sandalyede kucağında |
| ✂️🤰 | Side Scissor | vajinal | 20–40 | Yan yatarak bacaklar çapraz |
| 🎈🤰 | Birth Ball Bounce | vajinal | 20–38 | Pilates topunda yavaş zıplar |
| 🍳🤰 | Counter Lean | vajinal | 13–36 | Tezgâha yaslanır, sen arkada; 🍳 `mvkitchen01x` |
| 🚿🤰 | Shower Lean Doggy | vajinal | 13–34 | Duvara yaslanır; 🧼 `mvshower01x` |
| 🪞🤰 | Mirror Standing | vajinal | 13–30 | Aynada karnını izler |
| 🎨🤰 | Nesting Quickie | vajinal | 27–38 | Bebek odasını boyarken; Nesting'den sonra |
| 🐢🤰 | Third Trimester Slow | vajinal | 34–40 | Sadece yan yatarak, çok yavaş |
| 🍑🤰 | Pregnant Spoon Anal | anal | 13–36 | Yan yatarak; Güven ≥ 50 |
| 💦🤰 | Extra Wet | vajinal | 13–40 | Hormonlar: Uyarılma +10 başlangıç |

### 💦 Ek bitişler (`hamile` + `boşalma`)
| Emoji | Olay | Not |
|---|---|---|
| 🍈💦 | Swollen Tits Cumshot | Büyümüş göğüslerine |
| 🤰🥛 | Creampie Belly Rub | İçine boşalırsın, sonra karnını okşarsın; Aşk +5 |
| 🥛💦 | Milk & Cum | Süt ≥ 50: ikisi birlikte akar; Nursing'e bağlı |
| 🌙💦 | Lotus Creampie | Slow Lotus'tan sonra; sarılı kalırsınız, Samimiyet +3 |
| 🥄💦 | Spoon Creampie | Yan yatarken; Bump Spooning / Third Trimester Slow sonrası |
| 🎈💦 | Birth Ball Creampie | Topun üstünde; Birth Ball Bounce sonrası |
| 🛋️💦 | Sofa Bump Cumshot | Koltukta karnına ve göğsüne; Sofa Edge Missionary sonrası |
| 🚿💦 | Shower Bump Cumshot | Karnına boşalırsın, su yıkar; `duş` |
| 🪞💦 | Mirror Creampie | Aynada akışını izler; Mirror Standing sonrası |
| 👅💦 | Pregnant Swallow | Side-Lying Blowjob sonrası; "bebek de beslendi" şakası |
| 🍑💦 | Spoon Anal Creampie | Pregnant Spoon Anal sonrası; `anal` |
| 🧴💦 | Oil & Cum Rub | Karnına boşalırsın, çatlak yağıyla karıştırırsın; Belly Oil'e bağlı |
| 🍼💦 | Hormone Multi | Hormonlar: o da birkaç kez gelir; Zevk ×2, Aşk +3 |

## Ek öneriler (v4, 2026-11-17): mekanizmalar + seks / bitiş / gür
Mevcut `hamile` / `gür` etiketli olaylar tarandı; aşağıdakilerin hiçbiri system.js'te yok.

### ⚙️ Mekanizmalar
| Mekanizma | Ne yapar | Bağlantı |
|---|---|---|
| 🌡️ Hormon dalgası (`th.horm`) | Haftaya göre ruh hali: 1–12 bulantı (Uyarılma −), 13–26 libido +, 27+ yorgunluk / şefkat isteği | `PERSONA` bağlamına `preg`, `nextEvs` ağırlıkları |
| 🤰 Karın boyutu | 13 / 20 / 27 / 36. haftada büyür; görünüş balonu + profil kartı | `looksLine`, `cmBody`, `wearBlock` (dar kıyafet ⚠️) |
| 👗 Hamile gardırobu | 20. haftadan sonra dar parçalar kapanır, hamile parçaları açılır | `#/kiyafet`, CarmenAmor |
| 🔮 Belirti çipleri | Durum çubuğunda 🤢 / 🦶 / 💤 / 🍫; her belirti olay önerisi açar | `quickSuggest` puanlama |
| 📅 Hamilelik günlüğü | Profilde 🤰 sekmesi: hafta çizelgesi, ultrason, ilk tekme, isimler | `profileTab`, `diaryOf` |
| 🍼 İsim oylaması | Sen önerirsin, o beğenir / reddeder; doğumda `c.kids[]` | bot `r_q_isim_*` |
| 🏥 Doğum sahnesi | Water Breaks → Hospital Run → Labor → First Hold; 38–42. hafta rastgele | `Stories.SCENES`, `sfx('baby')` |
| ⚠️ Dikkat kapısı | 30. haftadan sonra Rough mod / sert pozisyon "dikkat" reddi; ikna Güven − | `modeMulOf`, `th.ikna` |
| 🫙 Lohusa birikimi | 🩹 dönemde Cum dolum hızı ×1.5; Doctor Cleared sonrası ilk bitiş gür havuzundan | `setupCumBurst`, `cumMin` |
| 🔁 Boşalt-geri gir | Gür bitiş `after` ile normal bitişe zincir (önce dışarı, kalanı içine) | `after`, `trTarget` |
| 🌐 Site / diğer | 🏥 Klinik kontrol randevuları, 🫦 Fans karın serisi, 📰 dedikodu, 🗺️ görevler, 👭 ikili sohbette haber verme, 🐍 tarih eşleşirse `p:suphe` + | sites.md, chat.md |

### 🔥 Seks olayları (`hamile` + bölge)
| Emoji | Olay | Açıklama | Hafta / etiket |
|---|---|---|---|
| 🛁 | Bathtub Float Ride | Küvette o üstte, su karnı taşır | 20+, vajinal |
| 🪑 | Rocking Chair Ride | Sallanan sandalyede kucağında, ritmi sandalye verir | 13–34, vajinal |
| 🛋️ | Bean Bag Sink | Puf mindere yarı yan gömülür, sen arkadan | 20–34, vajinal |
| 🌙 | Half-Asleep Spoon | Gece yarı uykulu, çok yavaş; Uyarılma düşükken de açık | 13+, vajinal |
| 🪞 | Bump In The Mirror | Ayakta aynaya dönük, sen arkadan karnını tutarak | 13–30, vajinal |
| 🤲 | Belly Cradle Doggy | Dizlerinin üstünde, avuçların karnının altında | 13–26, vajinal |
| 🦵 | Side Leg Lift | Yan yatarken üst bacağını sen kaldırırsın | 13+, vajinal |
| 🧸 | Pillow Nest Missionary | Yastık yuvasında yarı oturur, karın serbest | 27+, vajinal |
| 🍑 | Tub Edge Anal | Küvet kenarına tutunur, yavaş | 13–30, anal |
| 👄 | Headboard Face Sit | Başlığa tutunarak yüzüne oturur | 13–26, oral |
| 🍓 | Craving You Now | "Aşerdim, seni" hormonla hızlı, kıyafet yarım | 13–26, vajinal, `wear` |
| 💆 | Massage Turned Sex | Çatlak yağı masajı yan yatarak seks'e döner | 13+, vajinal |
| ⏸️ | Contraction Pause | Braxton Hicks: durursunuz, geçince devam | 30+, vajinal; 📱 kesinti |

### 💦 Bitişler (`hamile` + `boşalma`)
| Emoji | Olay | Açıklama | Etki |
|---|---|---|---|
| 🫄 | Navel Pool | Göbek çukuruna dolar; 27+ göbek dışa çıkmışsa yanlara akar | Uyarılma +5 |
| 🌙 | Sleepy Creampie | Yarı uykuda içine, sarılı uyursunuz | Aşk +3, hamilelik sonucu yok |
| 🤲 | Hands On Bump Creampie | Boşalırken ikiniz de karnını tutarsınız | Aşk +5 |
| 👅 | Bump Lick Clean | Karnına; parmağıyla toplayıp yalar | Şehvet +5 |
| 👙 | Maternity Bra Fill | Hamile sütyeninin içine; Süt ≥ 30 ise karışır | Süt −5 |
| 🧴 | Stretch Mark Oil | Çatlak yağıyla karıştırıp karnına sürer | Samimiyet +2 |
| 🦶 | Swollen Feet Finish | Şişmiş ayaklarına, sonra ayak masajı | Güven +2 |
| 🛁 | Bath Bump Float | Küvette karnına, su yüzeyinde süzülür | — |

### 🌊 Gür bitişler (`hamile` + `gür` + `boşalma`, Cum ≥ 90 / `cumMin`)
| Emoji | Olay | Açıklama | Not |
|---|---|---|---|
| 🌋 | Bump Flood | Karnın her yeri, yanlardan çarşafa akar | 20+ |
| 🫄 | Over The Bump | Karnın üstünden aşıp göğüslerine ve çenesine | 20+ |
| 🍼 | Maternity Bra Overflow | Sütyenden taşar, sütle karışıp karnına iner | Süt ≥ 50 |
| 🌊 | Spoon Overflow | Yan yatarken içine, taşar, karın yastığını ıslatır | vajinal sonrası |
| 🪑 | Rocking Chair Puddle | Kucağında içine; sandalyenin altında göl | Rocking Chair Ride sonrası |
| 🛁 | Tub Cloud | Küvet suyunda beyaz bulut, ikisi de güler | Bathtub Float Ride sonrası |
| 🦵 | Swollen Thighs Flood | Dolgunlaşan uyluk arasında, dizlerine kadar | `bacak` |
| 🔁 | Paint Then Back In | Önce karnını boyar, kalanı içine | 🔁 zincir |
| 🧺 | Pregnancy Pillow Ruined | U-yastık mahvolur; kişiliğe göre güler / kızar | Samimiyet ± |
| 🌧️ | Rain On The Bump | O oturur, sen ayakta; yukarıdan karnına yağar | 13+ |
| 🫙 | Cleared And Bursting | Lohusa birikimi: Doctor Cleared sonrası ilk bitiş | After Birth, 🫙 mekanizması |

### Uygulama sırası (v4)
1. Açıklar: zincirli bitişlerde `weeks` kapısı, `#` aramasında hamile olayları, After Birth hafta kapısı.
2. 🌡️ hormon dalgası, 🤰 karın boyutu, 🩹 lohusa + 🫙 birikim.
3. Seks + bitiş + gür olayları (system.js, bot `r_ev_pg_*`, EN, Hamilelik Kitabı bölümü).
4. 🏥 doğum sahnesi, Klinik randevuları, site / görev bağlantıları.

## Uygulama sırası
1. `weeks` kapısı + `hamile` THEME etiketi + 🩹 dönem (`bodyTick` doğumda `c.postAt`).
2. Olaylar system.js (Pregnancy / After Birth kategorileri) + EN.
3. 👶 kesinti, sahneler, bot kuralları, kitap.
