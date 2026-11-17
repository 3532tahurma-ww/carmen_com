/* Uygulamada 'Sistem kaydi' acikken (yerel-duzenleme.bat) eklediklerin buraya yazilir; herkes icin hazir gelir. Elle duzenleme. */
window.Stories = window.Stories || {};
Stories.SYSTEM = {
 "events": [
  { "id": "mvkr01ribbed", "title": "Ribbed Condom", "cat": "c:mvglyw2ax79uj", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "Tırtıklı kondom takarsın; her girişte onu daha çok hisseder (Uyarılma +12, korunma aynı)", "color": "#ff5f5f", "emojis": "🎈🌀", "onEffects": [{"p": "p:umvjzd17hys1oy", "d": 12}] },
  { "id": "mvkr02thin", "title": "Ultra Thin Condom", "cat": "c:mvglyw2ax79uj", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "Ultra ince kondom; neredeyse çıplak gibi hissedersin (Zevk +10, onun Uyarılma +5, korunma aynı)", "color": "#ff5f5f", "emojis": "🎈🫧", "onEffects": [{"p": "p:umvjoe339asss4", "d": 10},{"p": "p:umvjzd17hys1oy", "d": 5}] },
  { "id": "mvkr03delay", "title": "Delay Condom", "cat": "c:mvglyw2ax79uj", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "Geciktiricili kondom; içindeki jel boşalmanı geciktirir (Zevk −15, korunma aynı)", "color": "#ff5f5f", "emojis": "🎈⏳", "onEffects": [{"p": "p:umvjoe339asss4", "d": -15}] },
  { "id": "mvkr04break", "title": "Condom Break", "cat": "c:mvglyw2ax79uj", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "Kondom yırtılır, artık korunmasızsınız. Kondomlu önden pozisyonda bazen kendiliğinden olur (sert Mode'da daha sık)", "color": "#e53935", "emojis": "💥🎈" },
  { "id": "mvkr05off", "title": "Take It Off", "cat": "c:mvglyw2ax79uj", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "Kondomu çıkarmanı kendisi ister ya da kendisi çıkarır; ikiniz de isterseniz kondomsuz devam edersiniz (🚫 izin vermiyorsa kondom kalır)", "color": "#ff8a65", "emojis": "🎈✋" },
  { "id": "mvkr06inside", "title": "Inside Please", "cat": "c:mvglyw2ax79uj", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "İçine boşalmanı kendisi ister; ancak hap, Nothing ya da hamilelik varsa olur (Uyarılma +10)", "color": "#ff8a65", "emojis": "🥺💦" },
  { "id": "mvkr07baby", "title": "Try for Baby", "cat": "c:mvglyw2ax79uj", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "Bebek için denemek ister: kondom çıkar, bu tur içine boşalırsan hamilelik ihtimali artar (Aşk +3, Samimiyet +2)", "color": "#f06292", "emojis": "👶💞" },
  { "id": "mvkr08precum", "title": "Pre-Cum Worry", "cat": "c:mvh0zv4nv7f1i", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "Ön sıvıdan endişelenir; korunmana ve Güven'ine göre rahatlar ya da kondom ister. Korunmasız önden pozisyonda ön sıvı gelince bazen kendiliğinden olur", "color": "#8b8b99", "emojis": "😟💧" },
  { "id": "mvkr09test", "title": "Pregnancy Test", "cat": "c:mvcooldown01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "Birlikte testi beklersiniz: hamileyse pozitif, değilse negatif çıkar", "color": "#8b8b99", "emojis": "🧪" },
  { "id": "mvkr10late", "title": "Late Pull-Out", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["çekme", "boşalma"], "desc": "Son anda çekersin ama biraz içeri kaçar; korunmaya göre küçük hamilelik ihtimali", "color": "#5f8bff", "emojis": "😬💦", "outcomes": [{"id": "mvkr10preg", "text": "{ben} hamile kaldı", "pct": 15, "next": "", "effects": [{"p": "f:hamile", "d": 1}], "conds": [{"k": "not", "ev": "mvh1h70jral7v"}]}], "onEffects": [{"p": "p:umvjy7ucpiosps", "d": 1},{"p": "p:umvjof3wzh5hej", "d": -30}] },
  { "id": "mvkr11belly", "title": "Pull-Out Belly Finish", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["çekme", "boşalma"], "desc": "Son anda çekip karnına boşalırsın; sözünü tuttun (Güven +2)", "color": "#5f8bff", "emojis": "↩️💦", "onEffects": [{"p": "p:umvjy7ucpiosps", "d": 1}] },
  { "id": "mvkr12back", "title": "Pull-Out Back Finish", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["çekme", "boşalma"], "desc": "Son anda çekip sırtına ve kalçasına boşalırsın; sözünü tuttun (Güven +2)", "color": "#5f8bff", "emojis": "↩️🍑", "onEffects": [{"p": "p:umvjy7ucpiosps", "d": 1}] },
  { "id": "mvkr13thigh", "title": "Pull-Out Thigh Finish", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["çekme", "boşalma"], "desc": "Son anda çekip uyluklarının arasına boşalırsın; sözünü tuttun (Güven +2)", "color": "#5f8bff", "emojis": "↩️🦵", "onEffects": [{"p": "p:umvjy7ucpiosps", "d": 1}] },
  { "id": "mvkr14still", "title": "Still Inside", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "İçinde kıpırdamadan durursun: Zevk −10, Cum +5, Samimiyet +1; %15 tutamazsın (💔 Ruined Hold)", "color": "#ff5f5f", "emojis": "⏸️", "outcomes": [{"id": "mvkr14o1", "text": "İçinde kıpırdamadan durdun, ikiniz de nefes nefese 😮‍💨", "pct": 70, "next": "", "effects": [{"p": "p:umvjoe339asss4", "d": -10},{"p": "p:umvjof3wzh5hej", "d": 5},{"p": "p:samimiyet", "d": 1}]},{"id": "mvkr14o2", "text": "Durunca onu daha çok hissettin, döl birikiyor 💦", "pct": 15, "next": "", "effects": [{"p": "p:umvjoe339asss4", "d": -10},{"p": "p:umvjof3wzh5hej", "d": 10}]},{"id": "mvkr14o3", "text": "Tutamadın… yarım geldi 😩", "pct": 15, "next": "mvkr18ruined", "effects": []}] },
  { "id": "mvkr15stop", "title": "Stop-Start", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "Çıkıp beklersin, sonra yeniden girersin: Zevk −15, Cum +10, onun Uyarılma −5; %15 tutamazsın (💔 Ruined Hold)", "color": "#ff5f5f", "emojis": "🔁", "outcomes": [{"id": "mvkr15o1", "text": "Çıkıp bekledin, sonra yeniden girdin 🔁", "pct": 60, "next": "", "effects": [{"p": "p:umvjoe339asss4", "d": -15},{"p": "p:umvjof3wzh5hej", "d": 10},{"p": "p:umvjzd17hys1oy", "d": -5}]},{"id": "mvkr15o2", "text": "Dur-kalk işe yaradı, döl yoğunlaşıyor 💦", "pct": 25, "next": "", "effects": [{"p": "p:umvjoe339asss4", "d": -15},{"p": "p:umvjof3wzh5hej", "d": 10},{"p": "p:umvjy7ucpiosps", "d": -1},{"p": "p:umvjzd17hys1oy", "d": -5}]},{"id": "mvkr15o3", "text": "Tutamadın… yarım geldi 😩", "pct": 15, "next": "mvkr18ruined", "effects": []}] },
  { "id": "mvkr16tease", "title": "Tease & Deny", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "Seni kenara kadar getirip durur: Zevk düşer, Cum birikir, onun Uyarılma +5; %20 tutamazsın (💔 Ruined Hold)", "color": "#ff5f5f", "emojis": "😈🛑", "outcomes": [{"id": "mvkr16o1", "text": "{ben} seni kenara kadar getirip durdu 😈", "pct": 55, "next": "", "effects": [{"p": "p:umvjoe339asss4", "d": -10},{"p": "p:umvjof3wzh5hej", "d": 10},{"p": "p:umvjzd17hys1oy", "d": 5}]},{"id": "mvkr16o2", "text": "Üç kez kenara getirdi, üçünde de durdu 🥵", "pct": 25, "next": "", "effects": [{"p": "p:umvjoe339asss4", "d": -20},{"p": "p:umvjof3wzh5hej", "d": 15},{"p": "p:umvjy7ucpiosps", "d": -1},{"p": "p:umvjzd17hys1oy", "d": 5}]},{"id": "mvkr16o3", "text": "Tutamadın… yarım geldi 😩", "pct": 20, "next": "mvkr18ruined", "effects": []}] },
  { "id": "mvkr17together", "title": "Hold Together", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "İkiniz birlikte tutarsınız; ikiniz de başarırsanız sonraki bitiş birlikte orgazm olur (Aşk +3); %20 tutamazsın (💔 Ruined Hold)", "color": "#ff5f5f", "emojis": "🤝", "outcomes": [{"id": "mvkr17o1", "text": "İkiniz de tuttunuz; sonraki bitiş birlikte 💞", "pct": 60, "next": "", "effects": [{"p": "p:umvjoe339asss4", "d": -15},{"p": "p:umvjof3wzh5hej", "d": 10},{"p": "p:umvjzd17hys1oy", "d": -10}]},{"id": "mvkr17o2", "text": "{ben} tutamadı, sen tuttun 😳", "pct": 20, "next": "", "effects": [{"p": "p:umvjoe339asss4", "d": -15},{"p": "p:umvjof3wzh5hej", "d": 10}]},{"id": "mvkr17o3", "text": "Tutamadın… yarım geldi 😩", "pct": 20, "next": "mvkr18ruined", "effects": []}] },
  { "id": "mvkr18ruined", "title": "Ruined Hold", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["boşalma"], "desc": "Tutamazsın ama tam da gelemezsin: yarım boşalma. Cum −15 (normalde −30), Zevk −30, seans sürer", "color": "#5f8bff", "emojis": "💔💧", "outcomes": [{"id": "mvkr18o1", "text": "Yarım kaldı, seans sürüyor 💔", "pct": 100, "next": "", "effects": []}], "onEffects": [{"p": "p:umvjy7ucpiosps", "d": 1},{"p": "p:umvjof3wzh5hej", "d": -15},{"p": "p:umvjoe339asss4", "d": -30}] },
  { "id": "mvfd01strapon", "title": "Strap-On", "cat": "c:mvfemdom01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["femdom", "strapon"], "desc": "Belindeki kemerle sana arkadan girer; bu kez kontrol tamamen onda", "color": "#7b2cbf", "emojis": "👑🍆" },
  { "id": "mvfd02trampl", "title": "Trampling", "cat": "c:mvfemdom01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["femdom"], "desc": "Çıplak ayaklarıyla göğsüne ve karnına basar, ağırlığını yavaşça verir", "color": "#9d4edd", "emojis": "👣👑" },
  { "id": "mvfd03crush", "title": "Cock Crush", "cat": "c:mvfemdom01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["femdom"], "desc": "Ayağının tabanıyla aletine hafifçe bastırır, ne kadar dayanacağını izler", "color": "#c77dff", "emojis": "👠😈" },
  { "id": "mvfd04smoth", "title": "Face Smothering", "cat": "c:mvfemdom01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["femdom"], "desc": "Yüzüne bütün ağırlığıyla oturur; nefes alman onun iznine bağlı", "color": "#7b2cbf", "emojis": "🍑😈" },
  { "id": "mvfd05foot", "title": "Foot Worship", "cat": "c:mvfemdom01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["femdom"], "desc": "Diz çökersin; ayaklarını öper, yalar, tapar gibi seversin", "color": "#9d4edd", "emojis": "👣💋" },
  { "id": "mvfd07cocksq", "title": "Cock Squeeze", "cat": "c:mvfemdom01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["femdom"], "desc": "Penisini avucuna alıp sıkar; zonklamasını hissedip yüzünü izler", "color": "#9d4edd", "emojis": "✊😈" },
  { "id": "mvfd08ballsq", "title": "Ball Squeeze", "cat": "c:mvfemdom01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["femdom"], "desc": "Taşaklarını avucuna alır, parmaklarıyla yavaş yavaş sıkar", "color": "#c77dff", "emojis": "🤏😏" },
  { "id": "mvfd09ballcr", "title": "Ball Crush", "cat": "c:mvfemdom01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["femdom"], "desc": "Dizini ya da ayağını taşaklarına bastırıp ezer; ne kadar dayanacağını izler", "color": "#7b2cbf", "emojis": "👠💥" },
  { "id": "mvfd10grip", "title": "Death Grip", "cat": "c:mvfemdom01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["femdom", "tutma"], "desc": "Boşalmaman için penisinin dibini bütün gücüyle sıkar; izin vermeden bitiremezsin", "color": "#5a189a", "emojis": "✊🚫" },
  { "id": "mvfd11denial", "title": "Orgasm Denial", "cat": "c:mvfemdom01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["femdom", "tutma"], "desc": "Tam boşalmak üzereyken seni içinden çıkarır; boşalmana izin vermez", "color": "#5a189a", "emojis": "🚫💦" },
  { "id": "mvfd06femdom", "title": "Female Domination", "cat": "c:mvfemdom01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["femdom"], "desc": "Bütün kontrol onda: ne yapacağını, ne zaman yapacağını o söyler", "color": "#5a189a", "emojis": "👑" },
  { "id": "mvbd01vibe", "title": "Vibrator Control", "cat": "c:mvbdsm01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["bdsm"], "desc": "Vibratörün kumandası sende; yoğunluğu 1'den 5'e sen ayarlarsın, o her kademede başka türlü kıvranır", "color": "#8b1e3f", "emojis": "📳😈", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 15 }, { "p": "p:sehvet", "d": 10 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvbd02remote", "title": "Remote Toy", "cat": "c:mvbdsm01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["bdsm"], "desc": "İç çamaşırında uzaktan kumandalı oyuncakla dışarı çıkar; kumanda cebinde, kimse fark etmemeli", "color": "#8b1e3f", "emojis": "📲🤫", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 15 }, { "p": "p:sehvet", "d": 10 }, { "p": "p:samimiyet", "d": 1 }] },
  { "id": "mvbd03sweet", "title": "Honey Chocolate Lick", "cat": "c:mvbdsm01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["bdsm"], "desc": "Tenine eritilmiş çikolata ve bal sürer, damla damla yalayarak temizlersin", "color": "#a0522d", "emojis": "🍫🍯", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 10 }, { "p": "p:samimiyet", "d": 2 }, { "p": "p:ask", "d": 1 }] },
  { "id": "mvbd04ice", "title": "Ice Cube", "cat": "c:mvbdsm01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["bdsm"], "desc": "Buz küpünü boynundan sırtına, oradan göğüslerine yavaşça gezdirirsin; gözleri bağlıysa nereye gideceğini bilemez", "color": "#5fa8d3", "emojis": "🧊😳", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 12 }, { "p": "p:sehvet", "d": 8 }, { "p": "p:samimiyet", "d": 1 }] },
  { "id": "mvbd05wax", "title": "Hot Wax", "cat": "c:mvbdsm01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["bdsm"], "desc": "Düşük ısılı masaj mumunu tenine damlatırsın; yakından damlarsa yakar, uzaktan damlarsa okşar", "color": "#c1121f", "emojis": "🕯️🔥", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 12 }, { "p": "p:sehvet", "d": 10 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvbd06oil", "title": "Warm Oil Massage", "cat": "c:mvbdsm01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["bdsm"], "desc": "Ilık yağla bütün bedenine yavaş bir masaj yaparsın; sahneden önce gevşer, sana teslim olur", "color": "#d4a373", "emojis": "🫗🤲", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 8 }, { "p": "p:guven", "d": 3 }, { "p": "p:samimiyet", "d": 2 }] },
  { "id": "mvbd07edge", "title": "Edging", "cat": "c:mvbdsm01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["bdsm", "tutma"], "desc": "Onu tam sınıra getirir, son anda durursun; yeniden başlar, yeniden durursun, her turda biraz daha yalvarır", "color": "#7b1e3a", "emojis": "⏸️🥵", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 20 }, { "p": "p:sehvet", "d": 15 }] },
  { "id": "mvbd08tied", "title": "Tied To Bed", "cat": "c:mvbdsm01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["bdsm"], "desc": "Bileklerini ve ayak bileklerini yatağın dört köşesine bağlarsın; kıpırdayamaz, her şey senin elinde", "color": "#3d0c11", "emojis": "🪢🛏️", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 12 }, { "p": "p:sehvet", "d": 8 }, { "p": "p:guven", "d": 2 }] },
  { "id": "mvbd09title", "title": "Address Rule", "cat": "c:mvbdsm01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["bdsm"], "desc": "Kural konur: sahne boyunca \"Efendim\" ya da \"Hanımefendi\" diye hitap edilecek; unutan hemen düzeltilir", "color": "#5a0f1e", "emojis": "🎩👑", "onEffects": [{ "p": "p:sehvet", "d": 5 }, { "p": "p:guven", "d": 2 }] },
  { "id": "mvbd10blind", "title": "Blindfold", "cat": "c:mvbdsm01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["bdsm"], "desc": "Gözlerini ipek bir bantla bağlarsın; artık her dokunuş sürpriz, her nefes daha yakın", "color": "#2b2d42", "emojis": "🙈🖤", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 12 }, { "p": "p:sehvet", "d": 8 }, { "p": "p:guven", "d": 2 }] },
  { "id": "mvbd11collar", "title": "Collar & Leash", "cat": "c:mvbdsm01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["bdsm"], "desc": "Boynuna deri bir tasma takarsın, tasmanın ucu elinde; nereye çekersen oraya gelir", "color": "#3d0c11", "emojis": "⛓️🐾", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 10 }, { "p": "p:sehvet", "d": 12 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvbd12spank", "title": "Spanking", "cat": "c:mvbdsm01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["bdsm"], "desc": "Dizlerinin üstüne yatırırsın; şaplakları o sayar, her birinde kalçası biraz daha kızarır", "color": "#c1121f", "emojis": "🍑✋", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 12 }, { "p": "p:sehvet", "d": 10 }] },
  { "id": "mvbd13plug", "title": "Butt Plug", "cat": "c:mvbdsm01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["bdsm"], "desc": "Kayganlaştırıp yavaşça mücevherli bir tıpa yerleştirirsin; gün boyu ya da sahne boyunca içinde kalır", "color": "#7b2cbf", "emojis": "💎🍑", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 15 }, { "p": "p:sehvet", "d": 10 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvbd14clamp", "title": "Nipple Clamps", "cat": "c:mvbdsm01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["bdsm"], "desc": "Göğüs uçlarına zincirli mandallar takarsın; zinciri hafifçe çektikçe nefesi kesilir", "color": "#8b1e3f", "emojis": "⛓️🔥", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 15 }, { "p": "p:sehvet", "d": 12 }] },
  { "id": "mvbd15gag", "title": "Ball Gag", "cat": "c:mvbdsm01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["bdsm"], "desc": "Ağzına top tıkaç takarsın; konuşamaz, sadece inler; durmak için elindeki mendili düşürür", "color": "#5a0f1e", "emojis": "🔴😶", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 10 }, { "p": "p:sehvet", "d": 12 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvbd16safe", "title": "Safe Word", "cat": "c:mvbdsm01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["bdsm"], "desc": "Sahneden önce bir güvenli kelime seçersiniz; söylendiği anda her şey durur. Ona güvende olduğunu hissettirir", "color": "#2a9d8f", "emojis": "🛑🤍", "onEffects": [{ "p": "p:guven", "d": 5 }, { "p": "p:samimiyet", "d": 2 }, { "p": "p:ask", "d": 1 }] },
  { "id": "mvbd17paddle", "title": "Paddle", "cat": "c:mvbdsm01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["bdsm"], "desc": "Deri kürekle kalçasına vurursun; şaplaktan daha sesli, iz daha belirgin, acısı daha keskin", "color": "#9d0208", "emojis": "🏓🍑", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 10 }, { "p": "p:sehvet", "d": 12 }, { "p": "p:umvl2lpjpbiqzo", "d": 8 }] },
  { "id": "mvbd18crop", "title": "Riding Crop", "cat": "c:mvbdsm01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["bdsm"], "desc": "Binici kırbacının deri ucuyla önce okşar, sonra nokta atışı hafif vuruşlar indirirsin: kalça, iç bacak, göğüs", "color": "#6a040f", "emojis": "🏇✨", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 12 }, { "p": "p:sehvet", "d": 10 }, { "p": "p:umvl2lpjpbiqzo", "d": 4 }] },
  { "id": "mvbd19flog", "title": "Flogger", "cat": "c:mvbdsm01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["bdsm"], "desc": "Çok şeritli yumuşak kırbacı sırtına yağmur gibi indirirsin; ritmik, ısıtan, gevşeten darbeler", "color": "#7b2cbf", "emojis": "🪶🔥", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 10 }, { "p": "p:sehvet", "d": 8 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvbd20feather", "title": "Feather Tease", "cat": "c:mvbdsm01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["bdsm"], "desc": "Uzun bir tüyü boynundan göğüs uçlarına, karnından iç bacaklarına gezdirirsin; gözleri bağlıysa her dokunuş sürpriz", "color": "#f4acb7", "emojis": "🪶😳", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 10 }, { "p": "p:samimiyet", "d": 2 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvbd21wheel", "title": "Wartenberg Wheel", "cat": "c:mvbdsm01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["bdsm"], "desc": "Küçük dikenli tekerleği tenin üstünde yavaşça yuvarlarsın; batmaz ama her diken ayrı ayrı hissedilir", "color": "#5a189a", "emojis": "⚙️😮‍💨", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 12 }, { "p": "p:sehvet", "d": 8 }] },
  { "id": "mvbd22hotcold", "title": "Hot & Cold", "cat": "c:mvbdsm01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["bdsm"], "desc": "Ağzına bir yudum sıcak çay, sonra bir buz küpü alırsın; dilin sırayla yakar ve üşütür", "color": "#4895ef", "emojis": "🍵🧊", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 15 }, { "p": "p:sehvet", "d": 10 }, { "p": "p:samimiyet", "d": 1 }] },
  { "id": "mvbd23cuffs", "title": "Handcuffs", "cat": "c:mvbdsm01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["bdsm"], "desc": "Pelüş kelepçeyle bileklerini karyola başlığına takarsın; anahtar komodinde, ikinizin de gözü önünde", "color": "#3d0c11", "emojis": "🔗🛏️", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 10 }, { "p": "p:sehvet", "d": 8 }, { "p": "p:guven", "d": 2 }] },
  { "id": "mvbd24shibari", "title": "Shibari", "cat": "c:mvbdsm01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["bdsm"], "desc": "Kırmızı ipi göğüslerinin etrafında süs düğümleriyle örersin; yavaş, sabırlı, her düğümde nefesi değişir", "color": "#c1121f", "emojis": "🪢🎎", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 10 }, { "p": "p:sehvet", "d": 10 }, { "p": "p:guven", "d": 3 }] },
  { "id": "mvbd25spread", "title": "Spreader Bar", "cat": "c:mvbdsm01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["bdsm"], "desc": "Ayak bileklerine çubuk takarsın; bacakları açık kalır, kapatamaz, her şey sana açık", "color": "#540b0e", "emojis": "📏🔓", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 12 }, { "p": "p:sehvet", "d": 12 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvbd26behind", "title": "Hands Behind Back", "cat": "c:mvbdsm01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["bdsm"], "desc": "Bileklerini arkada ipek bir kurdeleyle bağlarsın; elleri yok, göğüsleri öne çıkar", "color": "#9d4edd", "emojis": "🎀🙌", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 10 }, { "p": "p:sehvet", "d": 8 }, { "p": "p:guven", "d": 2 }] },
  { "id": "mvbd27beg", "title": "Permission to Come", "cat": "c:mvbdsm01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["bdsm"], "desc": "İzin vermeden bitirmesi yasak; sınıra geldikçe senden izin ister, yalvarır, sen \"şimdi\" diyene kadar dayanır", "color": "#6a040f", "emojis": "🙏🥵", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 18 }, { "p": "p:sehvet", "d": 14 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvbd28kneel", "title": "Kneel & Wait", "cat": "c:mvbdsm01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["bdsm"], "desc": "Kapının önünde dizlerinin üstünde, elleri dizlerinde, başı eğik seni bekler; sen gelene kadar kıpırdamaz", "color": "#3c096c", "emojis": "🧎‍♀️⏳", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 6 }, { "p": "p:sehvet", "d": 6 }, { "p": "p:guven", "d": 3 }] },
  { "id": "mvbd29thanks", "title": "Say Thank You", "cat": "c:mvbdsm01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["bdsm"], "desc": "Her şaplaktan sonra sayıyı söyler ve teşekkür eder; unutursa sayı baştan başlar", "color": "#a4133c", "emojis": "🙇‍♀️✋", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 10 }, { "p": "p:sehvet", "d": 10 }, { "p": "p:umvl2lpjpbiqzo", "d": 4 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvbd30follow", "title": "Follow Me", "cat": "c:mvbdsm01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["bdsm"], "desc": "Tasmanın ucunu tutup onu odadan odaya yürütürsün; durduğun yerde durur, çektiğin yere gelir", "color": "#370617", "emojis": "🐾⛓️", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 8 }, { "p": "p:sehvet", "d": 8 }, { "p": "p:guven", "d": 2 }] },
  { "id": "mvbd31ruin", "title": "Ruined Finish", "cat": "c:mvbdsm01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["bdsm"], "desc": "Tam bitecekken her şeyi bırakırsın; zirveye varır ama tadını alamaz, nefes nefese sana bakar", "color": "#9d0208", "emojis": "💔⏸️", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 10 }, { "p": "p:sehvet", "d": 15 }] },
  { "id": "mvbd32lipstick", "title": "Lipstick Marks", "cat": "c:mvbdsm01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["bdsm"], "desc": "Kırmızı rujla tenine yazarsın: \"Senin\", çentikler, bir kalp; sonra aynanın karşısında ona okutursun", "color": "#d00000", "emojis": "💄✍️", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 6 }, { "p": "p:sehvet", "d": 8 }, { "p": "p:samimiyet", "d": 2 }] },
  { "id": "mvbd33deprive", "title": "Sensory Deprivation", "cat": "c:mvbdsm01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["bdsm"], "desc": "Göz bağı ve kulaklık birlikte; ne görür ne duyar, sadece dokunuşlarını hisseder", "color": "#240046", "emojis": "🙈🎧", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 15 }, { "p": "p:sehvet", "d": 10 }, { "p": "p:guven", "d": 3 }] },
  { "id": "mvbu01approved", "title": "Husband Approved", "cat": "c:mvbullstory01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["bull"], "desc": "Kocasının izin mesajını gösterir; artık aldatma değil, anlaşma", "color": "#b8860b", "emojis": "💍✅", "onEffects": [{ "p": "p:guven", "d": 2 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvbu02compare", "title": "Compare Talk", "cat": "c:mvbullstory01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["bull"], "desc": "Fısıldayarak seni kocasıyla karşılaştırır; \"ona söyleme\" oyunu", "color": "#b8860b", "emojis": "🤫😏", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 10 }, { "p": "p:kiskanclik", "d": 3 }] },
  { "id": "mvbu03thanks", "title": "Husband Thanks", "cat": "c:mvbullstory01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["bull", "kocabilir"], "desc": "Kocasından sana teşekkür mesajı gelir", "color": "#b8860b", "emojis": "💌🐂", "onEffects": [{ "p": "p:guven", "d": 2 }, { "p": "p:samimiyet", "d": 1 }] },
  { "id": "mvbu04doggy", "title": "Bull Doggy", "cat": "c:mvbull01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "bull"], "desc": "Dört ayak üstünde, telefon elinde, alyansı parmağında", "color": "#ff5f5f", "emojis": "🐂🍑", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvbu05room", "title": "Husband In Room", "cat": "c:mvbull01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "bull", "kocabilir"], "desc": "Kocası köşedeki sandalyede izler, o gözlerini sana diker", "color": "#ff5f5f", "emojis": "🪑👀", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 10 }, { "p": "p:samimiyet", "d": 1 }] },
  { "id": "mvbu06creampie", "title": "Bull Creampie", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "bull", "boşalma"], "desc": "Evli kadının içine boşalırsın (korunmaya göre hamilelik ihtimali)", "color": "#5f8bff", "emojis": "🐂💦", "outcomes": [{ "id": "mvbu06preg", "text": "{ben} hamile kaldı", "pct": 50, "next": "", "effects": [{ "p": "f:hamile", "d": 1 }], "conds": [{ "k": "not", "ev": "mvh1h70jral7v" }] }], "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:umvjof3wzh5hej", "d": -30 }] },
  { "id": "mvbu07trophy", "title": "Condom Trophy", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["kondom", "bull", "boşalma", "kocabilir"], "desc": "Dolu kondomu kocasına götürmek için saklar, fotoğrafını atar", "color": "#5f8bff", "emojis": "🎈🏆", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }] },
  { "id": "mvbu08ring", "title": "Ring Cumshot", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["el", "bull", "boşalma"], "desc": "Alyanslı eline boşalırsın", "color": "#5f8bff", "emojis": "💍💦", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }] },
  { "id": "mvbu09marked", "title": "Marked Wife", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["göğüs", "kalça", "bull", "boşalma"], "desc": "Tenine boşalırsın; izini eve kadar taşır", "color": "#5f8bff", "emojis": "🐂✨", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }] },
  { "id": "mvas01phone", "title": "Second Phone", "cat": "c:mvaffairstory01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["aldatma"], "desc": "Gizli bir telefonu var; seni \"Kuaför Selin\" diye kaydetmiş, mesajların sessizde gelir", "color": "#1b7f4c", "emojis": "📱🤫", "onEffects": [{ "p": "p:guven", "d": 2 }, { "p": "p:suphe", "d": 2 }] },
  { "id": "mvas02alibi", "title": "Fake Alibi", "cat": "c:mvaffairstory01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["aldatma"], "desc": "Arkadaşına \"bu akşam seninleyim de\" diye mazeret ayarlatır", "color": "#1b7f4c", "emojis": "👯‍♀️🗓️", "onEffects": [{ "p": "p:suphe", "d": -5 }] },
  { "id": "mvas03pilates", "title": "Pilates Tuesday", "cat": "c:mvaffairstory01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["aldatma"], "desc": "Salı akşamları \"pilatese\" gider; o saatler artık sizin", "color": "#1b7f4c", "emojis": "🧘‍♀️🗓️", "onEffects": [{ "p": "p:ask", "d": 1 }, { "p": "p:suphe", "d": 1 }] },
  { "id": "mvas04perfume", "title": "Perfume Swap", "cat": "c:mvaffairstory01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["aldatma"], "desc": "Senin kokun üstünde kalmasın diye eve dönmeden parfümünü değiştirir", "color": "#1b7f4c", "emojis": "🌸🧴", "onEffects": [{ "p": "p:suphe", "d": -3 }] },
  { "id": "mvas05history", "title": "Delete History", "cat": "c:mvaffairstory01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["aldatma"], "desc": "Sohbet geçmişinizi gözünün önünde tek tek siler, sonra sana göz kırpar", "color": "#1b7f4c", "emojis": "🗑️😉", "onEffects": [{ "p": "p:guven", "d": 3 }, { "p": "p:suphe", "d": -2 }] },
  { "id": "mvas06name", "title": "Wrong Name", "cat": "c:mvaffairstory01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["aldatma"], "desc": "Doruk anında ağzından sevgilisinin adı kaçar; donup kalır, sonra telafi etmeye çalışır", "color": "#1b7f4c", "emojis": "😳🙊", "onEffects": [{ "p": "p:kiskanclik", "d": 5 }] },
  { "id": "mvas07receipt", "title": "Receipt In Pocket", "cat": "c:mvaffairstory01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["aldatma"], "desc": "Otel fişini ceketinin cebinde unutur; sevgilisi o ceketi sık giyer", "color": "#1b7f4c", "emojis": "🧾😬", "onEffects": [{ "p": "p:suphe", "d": 15 }] },
  { "id": "mvas08guilt", "title": "Guilt Pause", "cat": "c:mvaffairstory01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["aldatma"], "desc": "Ortada durup tavana bakar: \"Bunu yapmamalıyız\"… sonra ya devam eder ya da giyinir", "color": "#1b7f4c", "emojis": "😔⏸️", "outcomes": [{ "id": "mvas08go", "text": "{ben} devam etti", "pct": 70, "next": "", "effects": [{ "p": "p:sehvet", "d": 15 }] }, { "id": "mvas08stop", "text": "{ben} giyinip gitti", "pct": 30, "next": "", "effects": [{ "p": "p:umvjzd17hys1oy", "d": -30 }, { "p": "p:sehvet", "d": -10 }] }] },
  { "id": "mvas09confess", "title": "Confession", "cat": "c:mvaffairstory01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["aldatma"], "desc": "Sevgilisine her şeyi itiraf eder; ya ayrılırlar ya da affedilir", "color": "#1b7f4c", "emojis": "🗣️💔", "outcomes": [{ "id": "mvas09split", "text": "{ben} sevgilisinden ayrıldı", "pct": 50, "next": "", "effects": [{ "p": "p:ask", "d": 5 }] }, { "id": "mvas09forgive", "text": "{ben} affedildi", "pct": 50, "next": "", "effects": [{ "p": "p:guven", "d": -5 }] }], "onEffects": [{ "p": "p:suphe", "d": -100 }] },
  { "id": "mvas10choose", "title": "Choose Me", "cat": "c:mvaffairstory01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["aldatma"], "desc": "\"Ya o ya ben\" dersin; uzun bir sessizlik olur", "color": "#1b7f4c", "emojis": "⚖️❤️", "outcomes": [{ "id": "mvas10yes", "text": "{ben} seni seçti", "pct": 60, "next": "", "effects": [{ "p": "p:ask", "d": 8 }, { "p": "p:suphe", "d": -100 }] }, { "id": "mvas10no", "text": "{ben} karar veremedi", "pct": 40, "next": "", "effects": [{ "p": "p:ask", "d": -3 }, { "p": "p:kiskanclik", "d": 5 }] }] },
  { "id": "mvas11back", "title": "Back To Him", "cat": "c:mvaffairstory01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["aldatma"], "desc": "Seni bırakıp ona döner; bir ay sonra gece yarısı bir mesaj gelir: \"Uyuyor musun?\"", "color": "#1b7f4c", "emojis": "🚪🌙", "onEffects": [{ "p": "p:ask", "d": -5 }, { "p": "p:suphe", "d": -100 }] },
  { "id": "mvas12open", "title": "Open Secret", "cat": "c:mvaffairstory01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["aldatma"], "desc": "Sevgilisi her şeyi öğrenir… ve izin verir. Artık gizli değil: 🐂 Hotwife olur, Bull olayları açılır", "color": "#1b7f4c", "emojis": "🔓💍", "onEffects": [{ "p": "f:hotwife", "d": 1 }, { "p": "p:guven", "d": 3 }, { "p": "p:suphe", "d": -100 }] },
  { "id": "mvas13caught", "title": "Got Caught", "cat": "c:mvaffairstory01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["aldatma"], "desc": "Kapı açılır, sevgilisi eşikte durur; 🕵️ Şüphe 80'i geçince kendiliğinden olur", "color": "#1b7f4c", "emojis": "🚨💔", "onEffects": [{ "p": "p:guven", "d": -5 }, { "p": "p:kiskanclik", "d": 10 }, { "p": "p:suphe", "d": -100 }] },
  { "id": "mvaf01anniv", "title": "Anniversary Detour", "cat": "c:mvaffair01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "aldatma"], "desc": "Yıldönümü yemeğinden önce sana uğrar; elbisesi hazır, rujunu sonra tazeleyecek", "color": "#34c77b", "emojis": "🥂👗", "onEffects": [{ "p": "p:sehvet", "d": 10 }, { "p": "p:suphe", "d": 3 }] },
  { "id": "mvaf02video", "title": "Video Call Under", "cat": "c:mvaffair01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["oral", "aldatma"], "desc": "Sevgilisiyle görüntülü konuşur; kamera omuzdan yukarıyı gösterir, sen aşağıdasın", "color": "#34c77b", "emojis": "📹🤐", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 15 }, { "p": "p:suphe", "d": 5 }] },
  { "id": "mvaf03song", "title": "Our Song", "cat": "c:mvaffair01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "aldatma"], "desc": "Radyoda sevgilisiyle \"bizim şarkımız\" çalar; kapatmaz, gözlerini sana diker", "color": "#34c77b", "emojis": "🎶💚", "onEffects": [{ "p": "p:ask", "d": 2 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvaf04footsie", "title": "Double Date Footsie", "cat": "c:mvaffair01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "aldatma"], "desc": "Dörtlü akşam yemeğinde masa altından ayağıyla oynar; sonra ikiniz de \"lavaboya\" kalkarsınız", "color": "#34c77b", "emojis": "🍽️🦶", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 10 }, { "p": "p:suphe", "d": 4 }] },
  { "id": "mvaf05wall", "title": "Thin Wall", "cat": "c:mvaffair01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "aldatma"], "desc": "Yan daire sevgilisinin arkadaşının; ses çıkarmamak için yastığı ısırır", "color": "#34c77b", "emojis": "🧱🤫", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 20 }, { "p": "p:suphe", "d": 3 }] },
  { "id": "mvaf06key", "title": "Spare Key", "cat": "c:mvaffair01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "aldatma"], "desc": "Sana kendi evinin yedek anahtarını verir; kapıyı açtığında yatakta seni bekliyor", "color": "#34c77b", "emojis": "🔑🛏️", "onEffects": [{ "p": "p:guven", "d": 3 }] },
  { "id": "mvaf20collar", "title": "Lipstick On Collar", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["oral", "aldatma", "boşalma"], "desc": "Ağzında bitirirsin; kalkarken yakana ruj izini bırakır. Bu sefer iz sende", "color": "#5f8bff", "emojis": "💄👔", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:umvjof3wzh5hej", "d": -30 }] },
  { "id": "mvaf21carry", "title": "Carry It Home", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "aldatma", "boşalma"], "desc": "İçine boşalırsın; aynı akşam sevgilisiyle yemeğe çıkar (korunmaya göre hamilelik ihtimali)", "color": "#5f8bff", "emojis": "🍷💦", "outcomes": [{ "id": "mvaf21preg", "text": "{ben} hamile kaldı", "pct": 50, "next": "", "effects": [{ "p": "f:hamile", "d": 1 }], "conds": [{ "k": "not", "ev": "mvh1h70jral7v" }] }], "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:umvjof3wzh5hej", "d": -30 }, { "p": "p:sehvet", "d": 10 }, { "p": "p:suphe", "d": 5 }] },
  { "id": "mvbs01coffee", "title": "Vetting Coffee", "cat": "c:mvbullstory01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["bull", "kocabilir"], "desc": "Üçünüz kahvede tanışırsınız; kocası sana sorular sorar, o masa altından bacağına dokunur", "color": "#b8860b", "emojis": "☕🤝", "onEffects": [{ "p": "p:guven", "d": 3 }] },
  { "id": "mvbs02rules", "title": "House Rules", "cat": "c:mvbullstory01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["bull", "kocabilir"], "desc": "Kocası kuralları yazar: kondom, dudaktan öpüşme yok, gece yarısı evde. 📜 Kural İhlali sıfırlanır", "color": "#b8860b", "emojis": "📜✍️", "onEffects": [{ "p": "p:guven", "d": 2 }, { "p": "p:ihlal", "d": -100 }] },
  { "id": "mvbs03outfit", "title": "Husband Picks Outfit", "cat": "c:mvbullstory01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["bull", "kocabilir"], "desc": "Bu geceki iç çamaşırını kocası seçmiş; senin için", "color": "#b8860b", "emojis": "👙💍", "onEffects": [{ "p": "p:sehvet", "d": 8 }] },
  { "id": "mvbs04drive", "title": "Husband Drives Her", "cat": "c:mvbullstory01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["bull", "kocabilir"], "desc": "Kocası onu arabayla kapına bırakır, alnından öper: \"İyi eğlenceler\"", "color": "#b8860b", "emojis": "🚗💋", "onEffects": [{ "p": "p:samimiyet", "d": 2 }] },
  { "id": "mvbs05anklet", "title": "Anklet Gift", "cat": "c:mvbullstory01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["bull", "kocabilir"], "desc": "Ona hotwife halhalı hediye edersin; kocası takarken izler", "color": "#b8860b", "emojis": "🦶✨", "onEffects": [{ "p": "p:ask", "d": 3 }] },
  { "id": "mvbs06live", "title": "Live Updates", "cat": "c:mvbullstory01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["bull", "kocabilir"], "desc": "Aralarda kocasına mesaj atar: \"Başladık\", \"Şimdi kucağında\"", "color": "#b8860b", "emojis": "📲🔥", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 15 }] },
  { "id": "mvbs07break", "title": "Breaking A Rule", "cat": "c:mvbullstory01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["bull"], "desc": "Seni dudağından öper: \"Ona söyleme\". 📜 Kural İhlali +1 (3 olunca kocası anlaşmayı bitirir)", "color": "#b8860b", "emojis": "💋🤫", "onEffects": [{ "p": "p:sehvet", "d": 15 }, { "p": "p:ihlal", "d": 1 }] },
  { "id": "mvbs08code", "title": "Code Word Call", "cat": "c:mvbullstory01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["bull", "kocabilir"], "desc": "Kocası arar; o kod kelimeyi söyler, her şey yolunda demek", "color": "#b8860b", "emojis": "☎️🔐", "onEffects": [{ "p": "p:guven", "d": 2 }] },
  { "id": "mvbs09report", "title": "Report Back", "cat": "c:mvbullstory01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["bull", "kocabilir"], "desc": "Eve dönünce yatakta kocasına her şeyi anlatır; ertesi gün sana \"çok sevindi\" yazar", "color": "#b8860b", "emojis": "🛏️🗣️", "onEffects": [{ "p": "p:samimiyet", "d": 2 }] },
  { "id": "mvbs10shirt", "title": "Wears Your Shirt Home", "cat": "c:mvbullstory01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["bull"], "desc": "Senin gömleğinle eve gider; kocası kapıda görür", "color": "#b8860b", "emojis": "👔🏠", "onEffects": [{ "p": "p:ask", "d": 2 }] },
  { "id": "mvbs11reclaim", "title": "Husband Reclaims", "cat": "c:mvbullstory01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["bull", "kocabilir"], "desc": "O gece kocası onu \"geri alır\"; sabah sana sadece bir 😌 atar", "color": "#b8860b", "emojis": "💍🔁", "onEffects": [{ "p": "p:kiskanclik", "d": -3 }] },
  { "id": "mvbs12anniv", "title": "Anniversary Gift", "cat": "c:mvbullstory01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["bull", "kocabilir"], "desc": "Evlilik yıldönümlerinde kocası ona hediye olarak seni ayarlamış", "color": "#b8860b", "emojis": "🎁💍", "onEffects": [{ "p": "p:ask", "d": 5 }, { "p": "p:guven", "d": 3 }] },
  { "id": "mvbs13calloff", "title": "Husband Calls It Off", "cat": "c:mvbullstory01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["bull", "kocabilir"], "desc": "Kocasının kıskançlığı patlar, anlaşma biter; 📜 Kural İhlali 3 olunca kendiliğinden olur", "color": "#b8860b", "emojis": "🛑💔", "onEffects": [{ "p": "p:ask", "d": -5 }, { "p": "p:ihlal", "d": -100 }] },
  { "id": "mvbs14ring", "title": "Third Ring", "cat": "c:mvbullstory01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["bull", "kocabilir"], "desc": "Kocası sana da bir yüzük verir; artık üçünüzün hikâyesi", "color": "#b8860b", "emojis": "💍💍", "onEffects": [{ "p": "p:ask", "d": 10 }, { "p": "p:guven", "d": 5 }] },
  { "id": "mvbs20album", "title": "Wedding Album", "cat": "c:mvbull01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "bull"], "desc": "Düğün albümü sehpada açık; o sayfaları çevirirken sen arkasındasın", "color": "#ff5f5f", "emojis": "📖💒", "onEffects": [{ "p": "p:sehvet", "d": 8 }] },
  { "id": "mvbs21video", "title": "Husband On Video", "cat": "c:mvbull01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "bull", "kocabilir"], "desc": "Telefon komodine dayalı; kocası görüntülü izler, o kameraya bakar", "color": "#ff5f5f", "emojis": "📹👀", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 10 }] },
  { "id": "mvbs22hold", "title": "Husband Holds Her", "cat": "c:mvbull01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "bull", "kocabilir"], "desc": "Kocası yanına uzanıp elini tutar; sen içindesin", "color": "#ff5f5f", "emojis": "🤝💍", "onEffects": [{ "p": "p:samimiyet", "d": 3 }] },
  { "id": "mvtr01kiss", "title": "Girls Kissing", "cat": "c:mvthreesome01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["üçlü"], "desc": "İki kız önünde dudak dudağa öpüşür, elleri birbirinin teninde; sen izlersin", "color": "#e75480", "emojis": "💋👯", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 10 }, { "p": "p:samimiyet", "d": 1 }] },
  { "id": "mvtr02dblbj", "title": "Double Blowjob", "cat": "c:mvthreesome01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["oral", "üçlü"], "desc": "İkisi önünde diz çöker, aletini sırayla ve birlikte yalarlar", "color": "#d63b6f", "emojis": "👅👯", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvtr03ridesit", "title": "Ride and Facesit", "cat": "c:mvthreesome01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "üçlü"], "desc": "Biri aletine oturur, diğeri yüzüne; ikisi karşılıklı öpüşür", "color": "#c2185b", "emojis": "🤠👅", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvtr04sidedog", "title": "Side by Side Doggy", "cat": "c:mvthreesome01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "üçlü"], "desc": "İkisi yan yana dört ayak üstünde; birinden diğerine geçersin", "color": "#c2185b", "emojis": "🍑🍑", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvtr05stack", "title": "Stacked Missionary", "cat": "c:mvthreesome01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "üçlü"], "desc": "Biri sırtüstü, diğeri onun üstünde; iki kalça üst üste, sırayla girersin", "color": "#c2185b", "emojis": "🥞💞", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvtr06spoon", "title": "Spooning Sandwich", "cat": "c:mvthreesome01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "üçlü"], "desc": "Biri arkandan sarılır, sen önündekine yan yatarak girersin", "color": "#c2185b", "emojis": "🥪🤗", "onEffects": [{ "p": "p:samimiyet", "d": 2 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvtr09lick", "title": "Girls Licking", "cat": "c:mvthreesome01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["üçlü"], "desc": "Biri uzanır, diğeri bacaklarının arasına iner; sen izlersin", "color": "#e75480", "emojis": "👅👯", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 15 }, { "p": "p:samimiyet", "d": 1 }] },
  { "id": "mvtr10scissor", "title": "Scissoring Show", "cat": "c:mvthreesome01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["üçlü"], "desc": "Bacaklarını birbirine geçirip sürtünürler, gözleri sende", "color": "#e75480", "emojis": "✂️👯", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 15 }, { "p": "p:samimiyet", "d": 1 }] },
  { "id": "mvtr11dblhand", "title": "Double Handjob", "cat": "c:mvthreesome01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["el", "üçlü"], "desc": "İki el birden aletinde; biri yukarı, biri aşağı", "color": "#d63b6f", "emojis": "🤲👯", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvtr12dbltit", "title": "Double Titfuck", "cat": "c:mvthreesome01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["göğüs", "üçlü"], "desc": "Göğüslerini birbirine bastırırlar; dört göğsün arasında kayarsın", "color": "#d63b6f", "emojis": "🍒🍒", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvtr13cowkiss", "title": "Cowgirl Kiss", "cat": "c:mvthreesome01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "üçlü"], "desc": "Biri aletinin üstünde sürerken diğeri yanına uzanıp seni öper", "color": "#c2185b", "emojis": "🤠💋", "onEffects": [{ "p": "p:samimiyet", "d": 2 }, { "p": "p:ask", "d": 1 }] },
  { "id": "mvtr14turns", "title": "Taking Turns", "cat": "c:mvthreesome01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "üçlü"], "desc": "Yan yana sırtüstü uzanırlar; birkaç vuruşta bir diğerine geçersin", "color": "#c2185b", "emojis": "🔁👯", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvtr15doglick", "title": "Doggy Lick", "cat": "c:mvthreesome01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "üçlü"], "desc": "Arkadan birine girerken o, önüne uzanan diğerini yalar", "color": "#c2185b", "emojis": "🍑👅", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvtr16dbltitcum", "title": "Double Tit Cumshot", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["göğüs", "el", "üçlü", "boşalma"], "desc": "Dört göğsün üstüne boşalırsın; birbirlerine sürerler", "color": "#5f8bff", "emojis": "🍒💦", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }] },
  { "id": "mvtr17crlick", "title": "Creampie Lick", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "üçlü", "boşalma"], "desc": "Birinin içine boşalırsın; diğeri eğilip yalar (korunmaya göre hamilelik ihtimali)", "color": "#5f8bff", "emojis": "💦👅", "outcomes": [{ "id": "mvtr17preg", "text": "{ben} hamile kaldı", "pct": 50, "next": "", "effects": [{ "p": "f:hamile", "d": 1 }], "conds": [{ "k": "not", "ev": "mvh1h70jral7v" }] }], "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:umvjof3wzh5hej", "d": -30 }] },
  { "id": "mvgr01line", "title": "Waiting In Line", "cat": "c:mvthreesome01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "üçlü"], "desc": "Sırayla kucağına çıkarlar; sırası gelmeyen arkandan sarılıp kulağına fısıldar", "color": "#c2185b", "emojis": "🔁👯", "onEffects": [{"p": "p:samimiyet", "d": 1},{"p": "p:guven", "d": 1}] },
  { "id": "mvgr02watch", "title": "Watch And Wait", "cat": "c:mvthreesome01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "üçlü"], "desc": "Biri seninle sevişirken öteki koltukta oturup izler; sabrı tükenince araya girer", "color": "#c2185b", "emojis": "👀🛋️", "onEffects": [{"p": "p:samimiyet", "d": 1},{"p": "p:guven", "d": 1}] },
  { "id": "mvgr03stackdog", "title": "Stacked Doggy", "cat": "c:mvthreesome01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "üçlü"], "desc": "İkisi üst üste dört ayak; iki kalça arasında gidip gelirsin", "color": "#c2185b", "emojis": "🥞🍑", "onEffects": [{"p": "p:samimiyet", "d": 1},{"p": "p:guven", "d": 1}] },
  { "id": "mvgr04handdog", "title": "Hand In Hand Doggy", "cat": "c:mvthreesome01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "üçlü"], "desc": "Yan yana dört ayak üstünde el ele tutuşurlar; sırayla ikisine geçersin", "color": "#c2185b", "emojis": "🤝🍑", "onEffects": [{"p": "p:samimiyet", "d": 1},{"p": "p:guven", "d": 1}] },
  { "id": "mvgr05ridekiss", "title": "Ride And Kiss", "cat": "c:mvthreesome01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "üçlü"], "desc": "Biri kucağında sürerken öteki yanına diz çöküp onunla öpüşür, göğüslerini okşar", "color": "#c2185b", "emojis": "🏇💋", "onEffects": [{"p": "p:samimiyet", "d": 1},{"p": "p:guven", "d": 1}] },
  { "id": "mvgr06rival", "title": "Rivalry Round", "cat": "c:mvthreesome01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "üçlü"], "desc": "\"Kim daha iyi?\" yarışı: biri süre tutar, öteki sürer; sonra yer değiştirirler", "color": "#c2185b", "emojis": "🏆😤", "onEffects": [{"p": "p:umvjzd17hys1oy", "d": 8},{"p": "p:samimiyet", "d": 1}] },
  { "id": "mvgr07mirror", "title": "Mirror Match", "cat": "c:mvthreesome01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "üçlü"], "desc": "Aynanın karşısında ikisi aynı pozisyonda, aynı ritimde; birini izlerken ötekine girersin", "color": "#c2185b", "emojis": "🪞👯", "onEffects": [{"p": "p:samimiyet", "d": 1},{"p": "p:guven", "d": 1}] },
  { "id": "mvgr08tagteam", "title": "Tag Team", "cat": "c:mvthreesome01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "üçlü"], "desc": "Biri yorulunca ötekinin omzuna dokunur, o devralır; ritim hiç düşmez", "color": "#c2185b", "emojis": "🙌🔥", "onEffects": [{"p": "p:samimiyet", "d": 1},{"p": "p:guven", "d": 1}] },
  { "id": "mvgr09holdher", "title": "Hold Her For You", "cat": "c:mvthreesome01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "üçlü"], "desc": "Biri ötekini arkadan sarıp bacaklarını açık tutar, kulağına \"hadi\" diye fısıldar", "color": "#c2185b", "emojis": "🫂😈", "onEffects": [{"p": "p:samimiyet", "d": 1},{"p": "p:guven", "d": 1}] },
  { "id": "mvgr10shower3", "title": "Three In The Shower", "cat": "c:mvthreesome01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "üçlü"], "desc": "Dar duşta üç kişi; köpüklü teninizde kayarak sırayla, yer kapma kavgasıyla", "color": "#c2185b", "emojis": "🚿👯", "onEffects": [{"p": "p:samimiyet", "d": 1},{"p": "p:guven", "d": 1}] },
  { "id": "mvgr21dblthigh", "title": "Double Thigh Squeeze", "cat": "c:mvthreesome01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["üçlü", "bacak"], "desc": "Yan yana uzanır, uyluklarını birleştirirler; dört uyluğun arasında sıkışırsın", "color": "#ff8a65", "emojis": "🦵🦵", "onEffects": [{"p": "p:umvjzd17hys1oy", "d": 10},{"p": "p:sehvet", "d": 5},{"p": "p:samimiyet", "d": 1}] },
  { "id": "mvgr22tights", "title": "Tights Sandwich", "cat": "c:mvthreesome01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["üçlü", "kıyafet", "kalça"], "wear": ["tayt", "esofman", "trainerkost"], "desc": "İkisi de taytlı; biri önden, öteki arkadan aynı anda sana sürtünür", "color": "#ff8a65", "emojis": "🩱🥪", "onEffects": [{"p": "p:umvjzd17hys1oy", "d": 10},{"p": "p:sehvet", "d": 5},{"p": "p:samimiyet", "d": 1}] },
  { "id": "mvgr23fourtit", "title": "Four Tit Squeeze", "cat": "c:mvthreesome01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["üçlü", "göğüs"], "desc": "Yüz yüze diz çöküp göğüslerini birbirine bastırırlar; dördünün arasında kaybolursun", "color": "#ff8a65", "emojis": "🍈🍈", "onEffects": [{"p": "p:umvjzd17hys1oy", "d": 10},{"p": "p:sehvet", "d": 5},{"p": "p:samimiyet", "d": 1}] },
  { "id": "mvgr24skirtduo", "title": "Skirt Duo Grind", "cat": "c:mvthreesome01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["üçlü", "kıyafet", "kalça"], "wear": ["mini", "plise", "kalem", "yirtmac", "midi", "yuksekkalem", "derikalem", "ofisyirtmac", "minielbise"], "desc": "Etekleri sıyrılır, külotlar yerinde; sırayla kucağında sürtünürler", "color": "#ff8a65", "emojis": "👗👗", "onEffects": [{"p": "p:umvjzd17hys1oy", "d": 10},{"p": "p:sehvet", "d": 5},{"p": "p:samimiyet", "d": 1}] },
  { "id": "mvgr25lapbattle", "title": "Lap Battle", "cat": "c:mvthreesome01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["üçlü", "bacak"], "desc": "Kucağına kimin oturacağı kavgası; sonunda ikisi birer dizine yerleşip sürtünür", "color": "#ff8a65", "emojis": "🪑⚔️", "onEffects": [{"p": "p:umvjzd17hys1oy", "d": 10},{"p": "p:sehvet", "d": 5},{"p": "p:samimiyet", "d": 1}] },
  { "id": "mvgr26jeansline", "title": "Jeans Rub Line", "cat": "c:mvthreesome01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["üçlü", "kıyafet", "kalça"], "wear": ["kot", "sort", "deri"], "desc": "Kotlu iki kalça yan yana; sen aralarında gezinip dikiş yerine sürtünürsün", "color": "#ff8a65", "emojis": "👖👖", "onEffects": [{"p": "p:umvjzd17hys1oy", "d": 10},{"p": "p:sehvet", "d": 5},{"p": "p:samimiyet", "d": 1}] },
  { "id": "mvgr27feetthigh", "title": "Feet And Thighs", "cat": "c:mvthreesome01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["üçlü", "bacak"], "desc": "Biri ayaklarıyla, öteki uyluklarıyla aynı anda; kimin önce bitireceği belli değil", "color": "#ff8a65", "emojis": "🦶🦵", "onEffects": [{"p": "p:umvjzd17hys1oy", "d": 10},{"p": "p:sehvet", "d": 5},{"p": "p:samimiyet", "d": 1}] },
  { "id": "mvgr28boobbutt", "title": "Boob And Butt", "cat": "c:mvthreesome01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["üçlü", "göğüs", "kalça"], "desc": "Biri önden göğüslerinin arasına, öteki arkadan kalçasıyla bastırır", "color": "#ff8a65", "emojis": "🍈🍑", "onEffects": [{"p": "p:umvjzd17hys1oy", "d": 10},{"p": "p:sehvet", "d": 5},{"p": "p:samimiyet", "d": 1}] },
  { "id": "mvgr29pantyhose", "title": "Pantyhose Pair", "cat": "c:mvthreesome01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["üçlü", "kıyafet", "bacak"], "wear": ["kulotlu", "file", "tencorap", "dizustu"], "desc": "İki külotlu çorap, iki bacak arası; naylonun sesi ve kayganlığı", "color": "#ff8a65", "emojis": "🧦✨", "onEffects": [{"p": "p:umvjzd17hys1oy", "d": 10},{"p": "p:sehvet", "d": 5},{"p": "p:samimiyet", "d": 1}] },
  { "id": "mvgr30uniform", "title": "Uniform Grind", "cat": "c:mvthreesome01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["üçlü", "kıyafet", "kalça"], "wear": ["ogrencikost", "ofistakim", "plise", "mini", "kalem"], "desc": "Ofis ya da okul kıyafetleri hiç çıkmadan, iki taraftan sürtünme", "color": "#ff8a65", "emojis": "👔🎓", "onEffects": [{"p": "p:umvjzd17hys1oy", "d": 10},{"p": "p:sehvet", "d": 5},{"p": "p:samimiyet", "d": 1}] },
  { "id": "mvgr41shareit", "title": "Share It", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["oral", "üçlü", "boşalma", "gür"], "desc": "Birinin ağzı yetişemez; taşanı öteki devralır, ikisi de payını alır", "color": "#5f8bff", "emojis": "💦👯", "onEffects": [{"p": "p:umvjy7ucpiosps", "d": 1},{"p": "p:sehvet", "d": 4},{"p": "p:ask", "d": 1}] },
  { "id": "mvgr42pairflood", "title": "Kneeling Pair Flood", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["oral", "üçlü", "boşalma", "gür"], "desc": "Yan yana diz çökmüşler; ikisinin yüzüne, saçlarına kadar yetecek kadar", "color": "#5f8bff", "emojis": "😳😳", "onEffects": [{"p": "p:umvjy7ucpiosps", "d": 1},{"p": "p:sehvet", "d": 4},{"p": "p:ask", "d": 1}] },
  { "id": "mvgr43overflow", "title": "Overflow To Her", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "üçlü", "boşalma", "gür"], "desc": "Birinin içine boşalırsın, sığmayan taşar; öteki altta bekleyip damlayanı yakalar (korunmaya göre hamilelik ihtimali)", "color": "#5f8bff", "emojis": "🌊➡️", "outcomes": [{"id": "mvgr43overflowpreg", "text": "{ben} hamile kaldı", "pct": 50, "next": "", "effects": [{"p": "f:hamile", "d": 1}], "conds": [{"k": "not", "ev": "mvh1h70jral7v"}]}], "onEffects": [{"p": "p:umvjy7ucpiosps", "d": 1},{"p": "p:sehvet", "d": 4},{"p": "p:ask", "d": 1},{"p": "p:umvjof3wzh5hej", "d": -30}] },
  { "id": "mvgr44twomouths", "title": "Two Mouths Not Enough", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["oral", "üçlü", "boşalma", "gür"], "desc": "İki ağız sırayla; ikisi de \"bu ne kadar çok\" diye gülerken çenelerinden akar", "color": "#5f8bff", "emojis": "🥛🥛", "onEffects": [{"p": "p:umvjy7ucpiosps", "d": 1},{"p": "p:sehvet", "d": 4},{"p": "p:ask", "d": 1}] },
  { "id": "mvgr45bustbtw", "title": "Bust Between Them", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["göğüs", "üçlü", "boşalma", "gür"], "after": ["Four Tit Squeeze", "Double Titfuck", "Boob And Butt"], "desc": "Dört göğsün arasında patlar; ikisinin de göğsünden boynuna taşar", "color": "#5f8bff", "emojis": "🍈💥", "onEffects": [{"p": "p:umvjy7ucpiosps", "d": 1},{"p": "p:sehvet", "d": 4},{"p": "p:ask", "d": 1}] },
  { "id": "mvgr46spread", "title": "Spread Across", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["kalça", "üçlü", "boşalma", "gür"], "desc": "Yan yana yüzüstü yatarlarken birinin kalçasından ötekine uzanan iz", "color": "#5f8bff", "emojis": "🖌️💦", "onEffects": [{"p": "p:umvjy7ucpiosps", "d": 1},{"p": "p:sehvet", "d": 4},{"p": "p:ask", "d": 1}] },
  { "id": "mvgr47swap", "title": "Pull Out Swap", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "üçlü", "boşalma", "gür"], "desc": "Birinde başlar, son anda çıkarıp ötekinin içinde bitirirsin (korunmaya göre hamilelik ihtimali)", "color": "#5f8bff", "emojis": "🔄💦", "outcomes": [{"id": "mvgr47swappreg", "text": "{ben} hamile kaldı", "pct": 50, "next": "", "effects": [{"p": "f:hamile", "d": 1}], "conds": [{"k": "not", "ev": "mvh1h70jral7v"}]}], "onEffects": [{"p": "p:umvjy7ucpiosps", "d": 1},{"p": "p:sehvet", "d": 4},{"p": "p:ask", "d": 1},{"p": "p:umvjof3wzh5hej", "d": -30}] },
  { "id": "mvgr48snowball", "title": "Snowball Kiss", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["oral", "üçlü", "boşalma", "gür"], "desc": "Biri ağzına aldığı her şeyi tutar, öteki ile öpüşerek paylaşır; yine de taşar", "color": "#5f8bff", "emojis": "❄️💋", "onEffects": [{"p": "p:umvjy7ucpiosps", "d": 1},{"p": "p:sehvet", "d": 4},{"p": "p:ask", "d": 1}] },
  { "id": "mvgr49thighflood", "title": "Four Thigh Flood", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["bacak", "üçlü", "boşalma", "gür"], "after": ["Double Thigh Squeeze", "Lap Battle", "Feet And Thighs", "Pantyhose Pair"], "desc": "Dört uyluğun arasından fışkırır; ikisinin de bacakları ıslanır", "color": "#5f8bff", "emojis": "🦵🌊", "onEffects": [{"p": "p:umvjy7ucpiosps", "d": 1},{"p": "p:sehvet", "d": 4},{"p": "p:ask", "d": 1}] },
  { "id": "mvgr50soaked", "title": "Both Outfits Soaked", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["kalça", "üçlü", "boşalma", "gür"], "after": ["Tights Sandwich", "Skirt Duo Grind", "Jeans Rub Line", "Uniform Grind", "Pantyhose Pair"], "desc": "Kıyafetli iki kalçaya birden; kumaştan sızar, ikisi de lekeye bakıp güler", "color": "#5f8bff", "emojis": "👗🌊", "onEffects": [{"p": "p:umvjy7ucpiosps", "d": 1},{"p": "p:sehvet", "d": 4},{"p": "p:ask", "d": 1}] },
  { "id": "mvgr51whomore", "title": "Who Got More", "cat": "c:mvcooldown01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "Bitince ikisi kendini kıyaslar; \"bana daha çok geldi\" kavgası öpücükle biter", "color": "#80cbc4", "emojis": "📏😏", "onEffects": [{"p": "p:samimiyet", "d": 2},{"p": "p:ask", "d": 1}] },
  { "id": "mvtr07facial", "title": "Double Facial", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["oral", "üçlü", "boşalma"], "desc": "İkisi yan yana diz çöker; ikisinin de yüzüne boşalırsın", "color": "#5f8bff", "emojis": "👯💦", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }] },
  { "id": "mvtr08share", "title": "Cum Sharing Kiss", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["oral", "vajinal", "üçlü", "boşalma"], "desc": "Birinin ağzına boşalırsın; öpüşerek diğeriyle paylaşır", "color": "#5f8bff", "emojis": "💋💦", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }] },
  { "id": "mvsa01towel", "title": "Towel Drop", "cat": "c:mvsauna01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["sauna"], "desc": "Havlusunu yavaşça açar, tahta sekide sana döner", "color": "#d98e4a", "emojis": "🧖‍♀️😏", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 10 }, { "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvsa02hug", "title": "Sweaty Hug", "cat": "c:mvsauna01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["sauna"], "desc": "Terli bedenlerle kısa ama sımsıkı sarılırsınız", "color": "#d98e4a", "emojis": "♨️🤗", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 10 }, { "p": "p:samimiyet", "d": 2 }, { "p": "p:ask", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvsa03titjob", "title": "Sweaty Titjob", "cat": "c:mvsauna01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["göğüs", "sauna"], "desc": "Terli göğüslerinin arasında kayarsın", "color": "#c9742e", "emojis": "♨️🍒", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvsa04hotdog", "title": "Bench Hotdogging", "cat": "c:mvsauna01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["kalça", "sauna"], "desc": "Sekiye eğilir, terli kalça yanaklarının arasında kayarsın, içeri girmeden", "color": "#c9742e", "emojis": "♨️🍑", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvsa05cumshot", "title": "Sauna Cumshot", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["göğüs", "kalça", "sauna", "boşalma"], "desc": "Saunada terli tenine boşalırsın", "color": "#5f8bff", "emojis": "♨️💦", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }] },
  { "id": "mvsa06plunge", "title": "Cold Plunge", "cat": "c:mvcooldown01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["sauna"], "desc": "Soğuk havuza birlikte atlarsınız; teniniz ürperir, nefesiniz kesilir", "color": "#6fb7e9", "emojis": "❄️💦", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 10 }, { "p": "p:samimiyet", "d": 1 }] },
  { "id": "mvsa07ice", "title": "Ice Tease", "cat": "c:mvcooldown01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["sauna"], "desc": "Kızgın teninde buzu yavaşça gezdirirsin", "color": "#6fb7e9", "emojis": "🧊😳", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 15 }, { "p": "p:sehvet", "d": 10 }, { "p": "p:samimiyet", "d": 1 }] },
  { "id": "mvdk01show", "title": "Dick Show", "cat": "c:mvgn2ubfw2eoh", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "Ona aletini yavaşça gösterirsin; tepkisi zevkine ve boyutuna göre değişir", "color": "#c86bff", "emojis": "🍆👀", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 10 }, { "p": "p:sehvet", "d": 5 }, { "p": "p:samimiyet", "d": 1 }] },
  { "id": "mvsa08snow", "title": "Snow Roll", "cat": "c:mvcooldown01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["sauna"], "desc": "Saunadan fırlayıp karda kısa bir yuvarlanır, gülerek içeri koşarsınız", "color": "#6fb7e9", "emojis": "❄️😂", "onEffects": [{ "p": "p:samimiyet", "d": 2 }, { "p": "p:ask", "d": 1 }] },
  { "id": "mvsa09rest", "title": "Rest Room", "cat": "c:mvcooldown01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["sauna"], "desc": "Havluya sarılı dinlenir, su içer, sohbet edersiniz", "color": "#8fbf9f", "emojis": "🧖‍♀️💧", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": -15 }, { "p": "p:ask", "d": 2 }, { "p": "p:guven", "d": 2 }, { "p": "p:samimiyet", "d": 2 }] },
  { "id": "mvsh01hug", "title": "Soapy Hug", "cat": "c:mvshower01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["duş"], "desc": "Köpüklü bedenler birbirine kayarak sarılırsınız", "color": "#4cc9f0", "emojis": "🧼🤗", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 10 }, { "p": "p:samimiyet", "d": 2 }, { "p": "p:ask", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvsh02soapher", "title": "Soap Her", "cat": "c:mvshower01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["duş"], "desc": "Bedenini avuçlarınla yavaşça köpüklersin; göğüslerinde ve kalçasında oyalanırsın", "color": "#4cc9f0", "emojis": "🧼👐", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 15 }, { "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvsh03washme", "title": "Wash Me", "cat": "c:mvshower01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["el", "duş"], "desc": "Seni baştan aşağı köpükler; eli aletinde oyalanır", "color": "#4cc9f0", "emojis": "🧼😏", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvsh04handjob", "title": "Soapy Handjob", "cat": "c:mvshower01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["el", "duş"], "desc": "Köpüklü avucuyla seni suyun altında okşar", "color": "#3fa7d6", "emojis": "🧼✋🏻", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvsh05titjob", "title": "Soapy Titjob", "cat": "c:mvshower01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["göğüs", "duş"], "desc": "Köpüklü göğüslerinin arasında kayarsın", "color": "#3fa7d6", "emojis": "🧼🍒", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvsh06hotdog", "title": "Soapy Hotdogging", "cat": "c:mvshower01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["kalça", "duş"], "desc": "Köpüklü kalça yanaklarının arasında kayarsın, içeri girmeden", "color": "#3fa7d6", "emojis": "🧼🍑", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvsh07thigh", "title": "Soapy Thighjob", "cat": "c:mvshower01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["bacak", "duş"], "desc": "Köpüklü uyluklarının arasında sıkıştırıp sürter", "color": "#3fa7d6", "emojis": "🧼🦵", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvsh08slide", "title": "Body Slide", "cat": "c:mvshower01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["göğüs", "duş"], "desc": "Bütün köpüklü bedenini senin bedeninde kaydırır", "color": "#3fa7d6", "emojis": "🫧🔥", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 10 }, { "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvsh09blow", "title": "Shower Blowjob", "cat": "c:mvshower01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["oral", "duş"], "desc": "Suyun altında önünde diz çöküp ağzına alır", "color": "#3fa7d6", "emojis": "🚿👄", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvsh10lift", "title": "Shower Lift", "cat": "c:mvshower01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "duş"], "desc": "Kucağına alırsın, sırtı duvarda; bacakları belinde", "color": "#ff5f5f", "emojis": "🚿🔥", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvsh11doggy", "title": "Shower Doggy", "cat": "c:mvshower01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "duş"], "desc": "Elleri duvarda, belini büker; arkadan girersin", "color": "#ff5f5f", "emojis": "🚿🍑", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvsh12anal", "title": "Shower Anal", "cat": "c:mvshower01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["anal", "duş"], "desc": "Ayakta, duvara yaslı; köpükle yavaşça arkadan girersin", "color": "#ff5f5f", "emojis": "🚿🍑", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvsh13creampie", "title": "Shower Creampie", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "duş", "boşalma"], "desc": "Duşta içine boşalırsın, su akıp gider (korunmaya göre hamilelik ihtimali)", "color": "#5f8bff", "emojis": "🚿💦", "outcomes": [{ "id": "mvsh13preg", "text": "{ben} hamile kaldı", "pct": 50, "next": "", "effects": [{ "p": "f:hamile", "d": 1 }], "conds": [{ "k": "not", "ev": "mvh1h70jral7v" }] }], "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:umvjof3wzh5hej", "d": -30 }] },
  { "id": "mvsh14cumshot", "title": "Shower Cumshot", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["el", "göğüs", "kalça", "bacak", "duş", "boşalma"], "desc": "Duşta tenine boşalırsın, su hemen yıkar", "color": "#5f8bff", "emojis": "🚿💦", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }] },
  { "id": "mvtb01bubble", "title": "Bubble Bath", "cat": "c:mvtub01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["küvet"], "desc": "Köpük banyosunda karşılıklı uzanırsınız; ayakları göğsünde, köpük omuzlarında", "color": "#80deea", "emojis": "🛁🫧", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 10 }, { "p": "p:samimiyet", "d": 2 }, { "p": "p:ask", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvtb02jets", "title": "Jacuzzi Jets", "cat": "c:mvtub01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["küvet"], "desc": "Jakuzinin jetlerine yaslanır, su bacaklarının arasına vurur; sen arkasından tutarsın", "color": "#4dd0e1", "emojis": "🛁💦", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 15 }, { "p": "p:sehvet", "d": 10 }, { "p": "p:samimiyet", "d": 1 }] },
  { "id": "mvtb03ride", "title": "Tub Ride", "cat": "c:mvtub01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "küvet"], "desc": "Küvette kucağına oturur, su her harekette taşar", "color": "#ff5f5f", "emojis": "🛁🔥", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvtb04spoon", "title": "Tub Spooning", "cat": "c:mvtub01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "küvet"], "desc": "Sıcak suda yan yatar, sırtı göğsüne yaslı; arkadan yavaşça girersin", "color": "#ff5f5f", "emojis": "🛁🥄", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvtb05titjob", "title": "Bubble Titjob", "cat": "c:mvtub01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["göğüs", "küvet"], "desc": "Küvetin kenarına oturursun; köpüklü göğüslerinin arasında kayarsın", "color": "#4dd0e1", "emojis": "🫧🍒", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvtb06cream", "title": "Tub Creampie", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "küvet", "boşalma"], "desc": "Küvette içine boşalırsın (korunmaya göre hamilelik ihtimali)", "color": "#5f8bff", "emojis": "🛁💦", "outcomes": [{ "id": "mvtb06preg", "text": "{ben} hamile kaldı", "pct": 50, "next": "", "effects": [{ "p": "f:hamile", "d": 1 }], "conds": [{ "k": "not", "ev": "mvh1h70jral7v" }] }], "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:umvjof3wzh5hej", "d": -30 }] },
  { "id": "mvtb07cum", "title": "Bath Cumshot", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["göğüs", "kalça", "küvet", "boşalma"], "desc": "Köpüklerin arasında tenine boşalırsın", "color": "#5f8bff", "emojis": "🫧💦", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }] },

  { "id": "mvpo01skinny", "title": "Skinny Dip", "cat": "c:mvpool01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["havuz"], "desc": "Gece havuzuna çırılçıplak atlarsınız; ay ışığında suyun altında tenleriniz değer", "color": "#29b6f6", "emojis": "🏖️🌙", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 15 }, { "p": "p:sehvet", "d": 5 }, { "p": "p:samimiyet", "d": 1 }] },
  { "id": "mvpo02edge", "title": "Pool Edge", "cat": "c:mvpool01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "havuz"], "desc": "Havuzun kenarına oturur, bacakları suda; sen sudan ona girersin", "color": "#ff5f5f", "emojis": "🏖️🔥", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvpo03float", "title": "Floating Sex", "cat": "c:mvpool01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "havuz"], "desc": "Suyun içinde kucağına alırsın, bacakları belinde; su ikinizi de taşır", "color": "#ff5f5f", "emojis": "🌊💏", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvpo04sunbed", "title": "Sunbed Doggy", "cat": "c:mvpool01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "havuz"], "desc": "Şezlonga dizlerinin üstünde eğilir; ıslak teniyle arkadan alırsın", "color": "#ff5f5f", "emojis": "🏖️🍑", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvpo05blow", "title": "Poolside Blowjob", "cat": "c:mvpool01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["oral", "havuz"], "desc": "Sen kenarda oturursun, o sudan sana uzanıp ağzına alır", "color": "#29b6f6", "emojis": "🏖️👄", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvpo06cream", "title": "Pool Creampie", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "havuz", "boşalma"], "desc": "Havuzda içine boşalırsın (korunmaya göre hamilelik ihtimali)", "color": "#5f8bff", "emojis": "🌊💦", "outcomes": [{ "id": "mvpo06preg", "text": "{ben} hamile kaldı", "pct": 50, "next": "", "effects": [{ "p": "f:hamile", "d": 1 }], "conds": [{ "k": "not", "ev": "mvh1h70jral7v" }] }], "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:umvjof3wzh5hej", "d": -30 }] },
  { "id": "mvpo07cum", "title": "Pool Cumshot", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["göğüs", "kalça", "oral", "havuz", "boşalma"], "desc": "Havuz kenarında ıslak tenine boşalırsın", "color": "#5f8bff", "emojis": "🏖️💦", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }] },
  { "id": "mvpo08ladder", "title": "Pool Ladder Doggy", "cat": "c:mvpool01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "havuz"], "desc": "Havuz merdiveninin tutamaklarına tutunur, belinden aşağısı suda; sen arkasından alırsın", "color": "#ff5f5f", "emojis": "🪜🍑", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvpo09wall", "title": "Wall Pin", "cat": "c:mvpool01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "havuz"], "desc": "Onu havuzun duvarına yaslarsın, bacaklarını beline dolar; su göğüslerinize çarpar", "color": "#ff5f5f", "emojis": "🌊🔥", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvpo10jacuzzi", "title": "Jacuzzi Cowgirl", "cat": "c:mvpool01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "havuz"], "desc": "Jakuzide kucağına oturur, yüzü sana dönük; kabarcıklar ikinizi de gıdıklar", "color": "#ff5f5f", "emojis": "🫧🔥", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvpo11underoral", "title": "Underwater Oral", "cat": "c:mvpool01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["oral", "havuz"], "desc": "O havuzun kenarına oturup bacaklarını açar; sen nefesini tutup suyun altına dalarsın", "color": "#4a4e69", "emojis": "👅🌊", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 15 }, { "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvpo12facesit", "title": "Edge Facesitting", "cat": "c:mvpool01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["oral", "havuz"], "desc": "Sen havuzun kenarına sırtüstü uzanırsın; o ıslak bikinisini kenara çekip yüzüne oturur, bacakları suda", "color": "#4a4e69", "emojis": "👅🏖️", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 15 }, { "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvpo13float", "title": "Float Missionary", "cat": "c:mvpool01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "havuz"], "desc": "Şişme yatağın üstünde sırtüstü uzanır, sen üstündesin; yatak her vuruşta sallanır, suya düşmemek için sana sarılır", "color": "#ff5f5f", "emojis": "🛟💏", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvpo14night", "title": "Night Swim Sex", "cat": "c:mvpool01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "havuz"], "desc": "Havuz kapandıktan sonra çitten atlarsınız; karanlık suda sevişirken bekçinin feneri ara sıra yüzeyi tarar", "color": "#ff5f5f", "emojis": "🌙🔦", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 5 }, { "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvpo15cabana", "title": "Cabana Reverse", "cat": "c:mvpool01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "havuz"], "desc": "Kabananın perdesi yarı açık; minderin üstünde sırtı sana dönük kucağına oturur, dışarıda şezlonglar dolu", "color": "#ff5f5f", "emojis": "⛱️🍑", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 5 }, { "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvpo16stairs", "title": "Pool Stairs Spoon", "cat": "c:mvpool01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "havuz"], "desc": "Havuzun sığ basamaklarında yan yatarsınız, sırtı göğsünde; su belinize kadar, arkasından yavaşça girersin", "color": "#ff5f5f", "emojis": "🤍🌊", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvpo17tower", "title": "Lifeguard Chair", "cat": "c:mvpool01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "havuz"], "desc": "Cankurtaran kulesine tırmanırsınız; yüksek sandalyede kucağına oturur, bütün havuz ayaklarınızın altında", "color": "#ff5f5f", "emojis": "🛟🔥", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 5 }, { "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvpo18jcream", "title": "Jacuzzi Creampie", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "havuz", "boşalma"], "desc": "Jakuzide kucağındayken içine boşalırsın; kabarcıklar ikinizi sarar (korunmaya göre hamilelik ihtimali)", "color": "#5f8bff", "emojis": "🫧💦", "outcomes": [{ "id": "mvpo18preg", "text": "{ben} hamile kaldı", "pct": 50, "next": "", "effects": [{ "p": "f:hamile", "d": 1 }], "conds": [{ "k": "not", "ev": "mvh1h70jral7v" }] }], "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:umvjof3wzh5hej", "d": -30 }] },
  { "id": "mvpo19ucream", "title": "Underwater Creampie", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "havuz", "boşalma"], "desc": "Suyun altında, duvara yaslıyken içine boşalırsın; yüzeye çıkıp nefes nefese gülersiniz (korunmaya göre hamilelik ihtimali)", "color": "#5f8bff", "emojis": "🌊💦", "outcomes": [{ "id": "mvpo19preg", "text": "{ben} hamile kaldı", "pct": 50, "next": "", "effects": [{ "p": "f:hamile", "d": 1 }], "conds": [{ "k": "not", "ev": "mvh1h70jral7v" }] }], "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:umvjof3wzh5hej", "d": -30 }] },
  { "id": "mvpo20facial", "title": "Poolside Facial", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["oral", "havuz", "boşalma"], "desc": "Suyun içinden kenara uzanmış, sana bakıyor; yüzüne boşalırsın, sonra suya dalıp yıkanır", "color": "#5f8bff", "emojis": "🏖️💦", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }] },

  { "id": "mvca01steam", "title": "Steamy Windows", "cat": "c:mvcar01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["araba"], "desc": "Issız bir yerde park edersiniz; öpüştükçe camlar buğulanır", "color": "#78909c", "emojis": "🚗🌫️", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 15 }, { "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvca02front", "title": "Front Seat Ride", "cat": "c:mvcar01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "araba"], "desc": "Park halinde, ön koltukta kucağına oturur; sırtı direksiyonda", "color": "#ff5f5f", "emojis": "🚗🔥", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvca03back", "title": "Backseat Missionary", "cat": "c:mvcar01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "araba"], "desc": "Arka koltuğa uzanır, bir ayağı cama dayalı; üstüne gelirsin", "color": "#ff5f5f", "emojis": "🚗💏", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvca04hood", "title": "Hood Doggy", "cat": "c:mvcar01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "araba"], "desc": "Arabadan inip ılık kaputa eğilir; gece ışıkları altında arkadan alırsın", "color": "#ff5f5f", "emojis": "🚗🍑", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvca05blow", "title": "Backseat Blowjob", "cat": "c:mvcar01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["oral", "araba"], "desc": "Park halinde, yanındaki koltuktan kucağına eğilip ağzına alır", "color": "#78909c", "emojis": "🚗👄", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvca06cream", "title": "Backseat Creampie", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "araba", "boşalma"], "desc": "Arabada içine boşalırsın (korunmaya göre hamilelik ihtimali)", "color": "#5f8bff", "emojis": "🚗💦", "outcomes": [{ "id": "mvca06preg", "text": "{ben} hamile kaldı", "pct": 50, "next": "", "effects": [{ "p": "f:hamile", "d": 1 }], "conds": [{ "k": "not", "ev": "mvh1h70jral7v" }] }], "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:umvjof3wzh5hej", "d": -30 }] },
  { "id": "mvca07cum", "title": "Car Cumshot", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["göğüs", "kalça", "oral", "araba", "boşalma"], "desc": "Arabada son anda çekip tenine boşalırsın; koltuklara dikkat", "color": "#5f8bff", "emojis": "🚗💦", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }] },

  { "id": "mvel01stop", "title": "Emergency Stop", "cat": "c:mvlift01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["asansör"], "desc": "Kırmızı düğmeye basar, asansör katlar arasında durur; sana döner", "color": "#ef5350", "emojis": "🛗🛑", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 15 }, { "p": "p:sehvet", "d": 10 }] },
  { "id": "mvel02kiss", "title": "Elevator Kiss", "cat": "c:mvlift01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["asansör"], "desc": "Onu aynalı duvara yaslayıp öpersin; kat numaraları akıp gider", "color": "#ef5350", "emojis": "🛗💋", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 10 }, { "p": "p:samimiyet", "d": 1 }] },
  { "id": "mvel03stand", "title": "Elevator Quickie", "cat": "c:mvlift01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "asansör"], "desc": "Ayakta, bir bacağı belinde, sırtı aynada; her an kapı açılabilir", "color": "#ff5f5f", "emojis": "🛗🔥", "outcomes": [{ "id": "mvel03ok", "text": "🛗 Kapı açılmadan bitirdiniz; {ben} aynaya yaslanmış, nefes nefese gülümsüyor 😮‍💨", "pct": 70, "next": "", "effects": [{ "p": "p:umvjoe339asss4", "d": 8 }] }, { "id": "mvel03ding", "text": "🔔 Ding! Kat geldi, kapı açılıyor; apar topar toparlanıyorsunuz 😳", "pct": 30, "next": "", "effects": [{ "p": "p:umvjoe339asss4", "d": -15 }, { "p": "p:umvjzd17hys1oy", "d": -15 }] }], "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvel04blow", "title": "Elevator Blowjob", "cat": "c:mvlift01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["oral", "asansör"], "desc": "Önünde diz çöker, gözü kat göstergesinde; acele etmesi lazım", "color": "#ef5350", "emojis": "🛗👄", "outcomes": [{ "id": "mvel04ok", "text": "🛗 Kat göstergesi durmadan bitti; {ben} dudaklarını silip ayağa kalkıyor 😏", "pct": 70, "next": "", "effects": [{ "p": "p:umvjoe339asss4", "d": 8 }] }, { "id": "mvel04ding", "text": "🔔 Ding! Kapı açılmak üzere; ayağa fırlıyor, düğmeleri düzeltiyorsunuz 😳", "pct": 30, "next": "", "effects": [{ "p": "p:umvjoe339asss4", "d": -15 }, { "p": "p:umvjzd17hys1oy", "d": -15 }] }], "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvel05cum", "title": "Elevator Cumshot", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["kalça", "oral", "asansör", "boşalma"], "desc": "Kapı açılmadan son saniyede ona boşalırsın; aynada izi kalır", "color": "#5f8bff", "emojis": "🛗💦", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }] },

  { "id": "mvkp01fire", "title": "Campfire Cuddle", "cat": "c:mvcamp01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["kamp"], "desc": "Ateşin başında tek battaniyenin altına girersiniz; o başını omzuna koyar", "color": "#ff8f00", "emojis": "🏕️🔥", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 5 }, { "p": "p:samimiyet", "d": 2 }, { "p": "p:ask", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvkp02bag", "title": "Sleeping Bag Spooning", "cat": "c:mvcamp01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "kamp"], "desc": "Tek uyku tulumunda, dar ve sıcak; arkasından sarılıp yavaşça girersin", "color": "#ff5f5f", "emojis": "🏕️🥄", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvkp03tent", "title": "Tent Cowgirl", "cat": "c:mvcamp01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "kamp"], "desc": "Çadırın içinde üstüne çıkar; başı çadırın tavanına değiyor, gölgeniz dışarıdan görünür", "color": "#ff5f5f", "emojis": "⛺🔥", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvkp04stars", "title": "Under The Stars", "cat": "c:mvcamp01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "kamp"], "desc": "Battaniyeye uzanır, yıldızlara bakar; üstüne gelirsin", "color": "#ff5f5f", "emojis": "🌌💏", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:ask", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvkp05cream", "title": "Camp Creampie", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "kamp", "boşalma"], "desc": "Kampta içine boşalırsın (korunmaya göre hamilelik ihtimali)", "color": "#5f8bff", "emojis": "🏕️💦", "outcomes": [{ "id": "mvkp05preg", "text": "{ben} hamile kaldı", "pct": 50, "next": "", "effects": [{ "p": "f:hamile", "d": 1 }], "conds": [{ "k": "not", "ev": "mvh1h70jral7v" }] }], "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:umvjof3wzh5hej", "d": -30 }] },
  { "id": "mvkp06cum", "title": "Campfire Cumshot", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["göğüs", "kalça", "kamp", "boşalma"], "desc": "Ateşin ışığında tenine boşalırsın", "color": "#5f8bff", "emojis": "🔥💦", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }] },

  { "id": "mvki01apron", "title": "Apron Only", "cat": "c:mvkitchen01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["mutfak"], "desc": "Üstünde sadece mutfak önlüğüyle yemek yapar; arkası tamamen açık", "color": "#ffb74d", "emojis": "🍳😏", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 15 }, { "p": "p:samimiyet", "d": 1 }] },
  { "id": "mvki02cream", "title": "Whipped Cream", "cat": "c:mvkitchen01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["mutfak"], "desc": "Göğüslerine şanti krema sıkar, yalamanı bekler", "color": "#ffe0b2", "emojis": "🍦👅", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 15 }, { "p": "p:sehvet", "d": 10 }, { "p": "p:samimiyet", "d": 1 }] },
  { "id": "mvki03counter", "title": "Counter Sex", "cat": "c:mvkitchen01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "mutfak"], "desc": "Tezgâha oturur, bacaklarını açar; tabaklar şıngırdar", "color": "#ff5f5f", "emojis": "🍳🔥", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvki04doggy", "title": "Counter Doggy", "cat": "c:mvkitchen01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "mutfak"], "desc": "Tezgâha eğilir, önlüğün ipleri belinde; arkadan alırsın", "color": "#ff5f5f", "emojis": "🍳🍑", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvki05cream", "title": "Counter Creampie", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "mutfak", "boşalma"], "desc": "Mutfak tezgâhında içine boşalırsın (korunmaya göre hamilelik ihtimali)", "color": "#5f8bff", "emojis": "🍳💦", "outcomes": [{ "id": "mvki05preg", "text": "{ben} hamile kaldı", "pct": 50, "next": "", "effects": [{ "p": "f:hamile", "d": 1 }], "conds": [{ "k": "not", "ev": "mvh1h70jral7v" }] }], "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:umvjof3wzh5hej", "d": -30 }] },
  { "id": "mvki06cum", "title": "Kitchen Cumshot", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["göğüs", "kalça", "mutfak", "boşalma"], "desc": "Önlüğünün üstüne, tenine boşalırsın; krema gibi", "color": "#5f8bff", "emojis": "🍦💦", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }] },
  { "id": "mvki07snack", "title": "Midnight Snack", "cat": "c:mvkitchen01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["mutfak"], "desc": "Gece yarısı buzdolabının ışığında, üstünde sadece senin tişörtün; kaşığı yalayıp sana bakar", "color": "#ffb74d", "emojis": "🌙🍓", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 15 }, { "p": "p:samimiyet", "d": 1 }] },
  { "id": "mvki08fridge", "title": "Fridge Press", "cat": "c:mvkitchen01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "mutfak"], "desc": "Buzdolabının kapağına yaslar, bir bacağını kaldırırsın; magnetler yere dökülür", "color": "#ff5f5f", "emojis": "🧊🔥", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvki09table", "title": "Kitchen Table Missionary", "cat": "c:mvkitchen01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "mutfak"], "desc": "Tabakları kenara iter, yemek masasına sırtüstü uzanır; masa her itişte gıcırdar", "color": "#ff5f5f", "emojis": "🍽️💏", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvki10lick", "title": "Counter Licking", "cat": "c:mvkitchen01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["oral", "mutfak"], "desc": "Tezgâhın kenarına oturur, bacaklarını omuzlarına atar; sen önünde diz çökersin", "color": "#4a4e69", "emojis": "👅🍳", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 15 }, { "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvki11kneel", "title": "Kitchen Floor Blowjob", "cat": "c:mvkitchen01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["oral", "mutfak"], "desc": "Sen tezgâha yaslanırsın, o önlüğüyle fayansa diz çöker", "color": "#ff8a65", "emojis": "🍳👄", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvki12anal", "title": "Island Anal", "cat": "c:mvkitchen01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["anal", "mutfak"], "desc": "Mutfak adasına göğsünü yaslar, kalçasını sana uzatır; zeytinyağı elinin altında", "color": "#ff8a65", "emojis": "🫒🍑", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvki13facial", "title": "Kitchen Facial", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["oral", "mutfak", "boşalma"], "desc": "Mutfak zemininde diz çökmüşken yüzüne boşalırsın; dudağını yalar, \"tatlı bu\" der", "color": "#5f8bff", "emojis": "🍳💦", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }] },

  { "id": "mvst01tease", "title": "Stair Tease", "cat": "c:mvstairs01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["merdiven"], "desc": "Kısa eteğiyle önünden ağır ağır çıkar; her basamakta kalçası tam göz hizanda", "color": "#ffb74d", "emojis": "🪜😏", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 15 }, { "p": "p:samimiyet", "d": 1 }] },
  { "id": "mvst02doggy", "title": "Stairs Doggy", "cat": "c:mvstairs01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "merdiven"], "desc": "Yatak odasına varamadan basamaklara eğilir; sen bir basamak aşağıdan alırsın", "color": "#ff5f5f", "emojis": "🪜🍑", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvst03ride", "title": "Step Ride", "cat": "c:mvstairs01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "merdiven"], "desc": "Sen basamağa oturursun, o kucağına çıkar; tırabzana tutunarak zıplar", "color": "#ff5f5f", "emojis": "🪜🔥", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvst04banister", "title": "Banister Standing", "cat": "c:mvstairs01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "merdiven"], "desc": "İki eliyle tırabzana tutunur, ayakta arkadan; ahşap her itişte gıcırdar", "color": "#ff5f5f", "emojis": "🪵🔥", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvst05blow", "title": "Step Blowjob", "cat": "c:mvstairs01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["oral", "merdiven"], "desc": "O basamağa oturur, sen bir basamak aşağıda ayaktasın; tam ağız hizasında", "color": "#ff8a65", "emojis": "🪜👄", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvst06anal", "title": "Stairs Anal", "cat": "c:mvstairs01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["anal", "merdiven"], "desc": "Dizleri üst basamakta, kalçası havada; yavaşça arkasına girersin", "color": "#ff8a65", "emojis": "🪜🍑", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvst07cream", "title": "Stairs Creampie", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "merdiven", "boşalma"], "desc": "Merdivende içine boşalırsın, basamaklara akar (korunmaya göre hamilelik ihtimali)", "color": "#5f8bff", "emojis": "🪜💦", "outcomes": [{ "id": "mvst07preg", "text": "{ben} hamile kaldı", "pct": 50, "next": "", "effects": [{ "p": "f:hamile", "d": 1 }], "conds": [{ "k": "not", "ev": "mvh1h70jral7v" }] }], "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:umvjof3wzh5hej", "d": -30 }] },
  { "id": "mvst08cum", "title": "Stairs Cumshot", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["göğüs", "kalça", "merdiven", "boşalma"], "desc": "Basamaklarda kalçasına ve beline boşalırsın; halıya damlamasın diye kıpırdamaz", "color": "#5f8bff", "emojis": "🪜🍑💦", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }] },
  { "id": "mvst09facial", "title": "Step Facial", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["oral", "merdiven", "boşalma"], "desc": "Basamakta oturmuş, yüzü sana kalkık; yüzüne boşalırsın", "color": "#5f8bff", "emojis": "🪜💦", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }] },

  { "id": "mvla01shirt", "title": "Wearing Your Shirt", "cat": "c:mvlaundry01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["çamaşır"], "desc": "Çamaşır sepetinden senin gömleğini çekip giyer; altında hiçbir şey yok", "color": "#ffb74d", "emojis": "👕😏", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 15 }, { "p": "p:samimiyet", "d": 1 }] },
  { "id": "mvla02spin", "title": "Spin Cycle", "cat": "c:mvlaundry01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "çamaşır"], "desc": "Sıkma programındaki makinenin üstüne oturur; titreşim ikinizi de sarsar", "color": "#ff5f5f", "emojis": "🧺🌀", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 5 }, { "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvla03dryer", "title": "Dryer Bent Over", "cat": "c:mvlaundry01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "çamaşır"], "desc": "Sıcak kurutma makinesine eğilir; arkadan alırsın, makine sizinle birlikte sallanır", "color": "#ff5f5f", "emojis": "🧺🍑", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvla04lick", "title": "Washer Licking", "cat": "c:mvlaundry01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["oral", "çamaşır"], "desc": "Çalışan makinenin üstünde bacaklarını açar; titreşim ve dilin aynı anda", "color": "#4a4e69", "emojis": "👅🌀", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 15 }, { "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvla05blow", "title": "Laundry Blowjob", "cat": "c:mvlaundry01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["oral", "çamaşır"], "desc": "Temiz havluların üstüne diz çöker; sen makineye yaslanırsın", "color": "#ff8a65", "emojis": "🧺👄", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvla06cream", "title": "Laundry Creampie", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "çamaşır", "boşalma"], "desc": "Makinenin üstünde içine boşalırsın, sıkma bitene kadar çıkmazsın (korunmaya göre hamilelik ihtimali)", "color": "#5f8bff", "emojis": "🌀💦", "outcomes": [{ "id": "mvla06preg", "text": "{ben} hamile kaldı", "pct": 50, "next": "", "effects": [{ "p": "f:hamile", "d": 1 }], "conds": [{ "k": "not", "ev": "mvh1h70jral7v" }] }], "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:umvjof3wzh5hej", "d": -30 }] },
  { "id": "mvla07cum", "title": "Laundry Cumshot", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["göğüs", "kalça", "çamaşır", "boşalma"], "desc": "Gömleğinin üstüne, tenine boşalırsın; \"zaten yıkanacaktı\" der", "color": "#5f8bff", "emojis": "👕💦", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }] },

  { "id": "mvbl01robe", "title": "Robe At The Railing", "cat": "c:mvbalcony01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["balkon"], "desc": "Bornozuyla korkuluğa yaslanır, kuşağı gevşek; rüzgâr açtıkça kapatmıyor", "color": "#ffb74d", "emojis": "🌇😏", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 15 }, { "p": "p:samimiyet", "d": 1 }] },
  { "id": "mvbl02rail", "title": "Railing Doggy", "cat": "c:mvbalcony01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "balkon"], "desc": "Korkuluğa eğilir, aşağıda sokak; arkadan alırsın, sesini bastırmaya çalışır", "color": "#ff5f5f", "emojis": "🌇🍑", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 5 }, { "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvbl03lounge", "title": "Lounger Cowgirl", "cat": "c:mvbalcony01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "balkon"], "desc": "Sen şezlonga uzanırsın, o üstüne çıkar; komşu balkonların ışıkları yanık", "color": "#ff5f5f", "emojis": "🌇🔥", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvbl04wall", "title": "Balcony Wall Standing", "cat": "c:mvbalcony01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "balkon"], "desc": "Saksıların arasında duvara yaslar, bacağını beline alırsın; perde rüzgârda uçuşur", "color": "#ff5f5f", "emojis": "🪴🔥", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvbl05blow", "title": "Balcony Blowjob", "cat": "c:mvbalcony01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["oral", "balkon"], "desc": "Korkuluğun arkasında diz çöker, dışarıdan sadece senin yüzün görünür", "color": "#ff8a65", "emojis": "🌇👄", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 5 }, { "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvbl06cream", "title": "Balcony Creampie", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "balkon", "boşalma"], "desc": "Açık havada, ağzını kapatarak içine boşalırsın (korunmaya göre hamilelik ihtimali)", "color": "#5f8bff", "emojis": "🌇💦", "outcomes": [{ "id": "mvbl06preg", "text": "{ben} hamile kaldı", "pct": 50, "next": "", "effects": [{ "p": "f:hamile", "d": 1 }], "conds": [{ "k": "not", "ev": "mvh1h70jral7v" }] }], "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:umvjof3wzh5hej", "d": -30 }] },
  { "id": "mvbl07cum", "title": "Balcony Cumshot", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["göğüs", "kalça", "balkon", "boşalma"], "desc": "Şehrin ışıkları önünde tenine boşalırsın; serin rüzgâr tenini ürpertir", "color": "#5f8bff", "emojis": "🌃💦", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }] },

  { "id": "mvcm01rec", "title": "Start Recording", "cat": "c:mvcam01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["kamera"], "desc": "Kendi isteğiyle telefonu komodine dayar, kırmızı ışık yanar; kameraya göz kırpar", "color": "#e53935", "emojis": "🎥🔴", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 15 }, { "p": "p:sehvet", "d": 10 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvcm02povblow", "title": "POV Blowjob", "cat": "c:mvcam01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["oral", "kamera"], "desc": "Telefon senin elinde; o ağzına alırken gözünü kameradan ayırmaz", "color": "#e53935", "emojis": "🎥👄", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvcm03povgirl", "title": "POV Cowgirl", "cat": "c:mvcam01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "kamera"], "desc": "Sen telefonu tutarsın, o üstünde; ekranda her hareketi görünür", "color": "#ff5f5f", "emojis": "🎥🔥", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvcm04selfie", "title": "Selfie Doggy", "cat": "c:mvcam01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "kamera"], "desc": "Dört ayak üstünde, telefonu kendisi tutup omzunun üstünden ikinizi çeker", "color": "#ff5f5f", "emojis": "🤳🍑", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvcm05watch", "title": "Watch It Together", "cat": "c:mvcam01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["kamera"], "desc": "Sonra yatakta videoyu birlikte izlersiniz; o karar verir: saklanır ya da silinir", "color": "#8e24aa", "emojis": "📱🤫", "onEffects": [{ "p": "p:samimiyet", "d": 2 }, { "p": "p:guven", "d": 2 }, { "p": "p:ask", "d": 1 }] },
  { "id": "mvcm06cum", "title": "Camera Cumshot", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["göğüs", "oral", "kamera", "boşalma"], "desc": "Kameraya bakarken göğsüne ya da yüzüne boşalırsın; kayıt sürüyor", "color": "#5f8bff", "emojis": "🎥💦", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }] },

  { "id": "mvps01revcow", "title": "Reverse Cowgirl", "cat": "c:mvglvwdtam0h7", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["penetrasyon", "vajinal"], "desc": "Sırtı sana dönük üstüne oturur; kalçasının iniş çıkışını izlemene izin verir", "color": "#ff5f5f", "emojis": "🍑🔄", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvps02prone", "title": "Prone Bone", "cat": "c:mvglvwdtam0h7", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["penetrasyon", "vajinal"], "desc": "Yüzüstü uzanır, bacakları kapalı; sen üstüne kapanırsın, yastığa inler", "color": "#ff5f5f", "emojis": "🛏️🔥", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvps03lotus", "title": "Lotus", "cat": "c:mvglvwdtam0h7", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["penetrasyon", "vajinal"], "desc": "Bağdaş kurmuş kucağına yüz yüze oturur, bacakları beline dolanır; yavaş ritim, alın alına", "color": "#ff8fab", "emojis": "🪷💏", "onEffects": [{ "p": "p:samimiyet", "d": 2 }, { "p": "p:guven", "d": 1 }, { "p": "p:ask", "d": 1 }] },
  { "id": "mvps04butterfly", "title": "Butterfly", "cat": "c:mvglvwdtam0h7", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["penetrasyon", "vajinal"], "desc": "Masa ya da yatak kenarına uzanır, bacakları omuzlarında; sen ayakta, derin girersin", "color": "#ff5f5f", "emojis": "🦋🔥", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvps05misanal", "title": "Missionary Anal", "cat": "c:mvgm9ihwda8f5", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["anal"], "desc": "Sırtüstü, kalçasının altında yastık; gözlerinin içine bakarak yavaşça arkadan girersin", "color": "#ff8a65", "emojis": "🍑👀", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvps06revanal", "title": "Reverse Cowgirl Anal", "cat": "c:mvgm9ihwda8f5", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["anal"], "desc": "Sırtı sana dönük, kendini yavaşça arkadan üstüne indirir; hızı o belirler", "color": "#ff8a65", "emojis": "🍑🔄", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },

  { "id": "mvbe01sun", "title": "Sunscreen Rub", "cat": "c:mvbeach01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["plaj"], "desc": "Havluya yüzüstü uzanır, bikinisinin ipini çözer; sırtına güneş kremi sürersin, elin aşağı kayar", "color": "#ffca3a", "emojis": "🏝️🧴", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 15 }, { "p": "p:samimiyet", "d": 1 }] },
  { "id": "mvbe02towel", "title": "Beach Towel Sex", "cat": "c:mvbeach01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "plaj"], "desc": "Issız bir koyda havlunun üstüne uzanır; kumlar her yere yapışır, dalgalar sesinizi örter", "color": "#ff5f5f", "emojis": "🏝️🔥", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvbe03wave", "title": "Wave Sex", "cat": "c:mvbeach01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "plaj"], "desc": "Belinize kadar denizde, bacakları belinde; her dalga onu sana biraz daha bastırır", "color": "#ff5f5f", "emojis": "🌊💏", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvbe04cum", "title": "Beach Cumshot", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["göğüs", "kalça", "plaj", "boşalma"], "desc": "Güneşte parlayan tenine boşalırsın; sonra birlikte denize girersiniz", "color": "#5f8bff", "emojis": "🏝️💦", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }] },
  { "id": "mvbe05dune", "title": "Sand Dune Doggy", "cat": "c:mvbeach01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "plaj"], "desc": "Kum tepesinin arkasında dört ayak üstüne çıkar; sen arkasından alırsın, rüzgâr seslerinizi götürür", "color": "#ff5f5f", "emojis": "🏜️🍑", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 5 }, { "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvbe06sunbed", "title": "Sunbed Cowgirl", "cat": "c:mvbeach01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "plaj"], "desc": "Şemsiyenin gölgesinde şezlongda üstüne çıkar; bikinisinin altını kenara çekmiş", "color": "#ff5f5f", "emojis": "⛱️🔥", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvbe07sunset", "title": "Sunset Missionary", "cat": "c:mvbeach01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "plaj"], "desc": "Gün batarken havlunun üstünde sırtüstü uzanır; gökyüzü turuncu, gözleri gözlerinde", "color": "#ff5f5f", "emojis": "🌅💏", "onEffects": [{ "p": "p:samimiyet", "d": 2 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvbe08hut", "title": "Beach Hut Standing", "cat": "c:mvbeach01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "plaj"], "desc": "Daracık soyunma kabininde ellerini tahta duvara dayar; sen arkasından, ayakta", "color": "#ff5f5f", "emojis": "🛖🔥", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 5 }, { "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvbe09cove", "title": "Rock Cove Lift", "cat": "c:mvbeach01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "plaj"], "desc": "Kayalık koyda onu kucağına alırsın, sırtı kayaya yaslı; dalgalar ayaklarınıza çarpar", "color": "#ff5f5f", "emojis": "🪨🌊", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvbe10shallow", "title": "Shallow Water Doggy", "cat": "c:mvbeach01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "plaj"], "desc": "Sığ suda dizlerinin üstüne çöker; sen arkasındasın, her dalga ikinizi biraz daha ileri iter", "color": "#ff5f5f", "emojis": "🌊🍑", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvbe11nude", "title": "Nude Beach Sex", "cat": "c:mvbeach01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "plaj"], "desc": "Çıplak plajda havlunun üstünde, açıkta; uzakta birkaç kişi var, görüyorlar mı bilmiyorsunuz", "color": "#ff5f5f", "emojis": "🏝️👀", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 10 }, { "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvbe12bonfire", "title": "Bonfire Spoon", "cat": "c:mvbeach01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "plaj"], "desc": "Gece ateşin yanında battaniyenin altında yan yatarsınız; arkasından yavaşça girersin, kıvılcımlar yıldızlara karışır", "color": "#ff5f5f", "emojis": "🔥🌙", "onEffects": [{ "p": "p:samimiyet", "d": 2 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvbe13sixtynine", "title": "Sand 69", "cat": "c:mvbeach01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["oral", "plaj"], "desc": "Havlunun üstünde ters uzanırsınız; ikiniz de aynı anda birbirinizi ağzınıza alırsınız", "color": "#4a4e69", "emojis": "👅🏝️", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 15 }, { "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvbe14shower", "title": "Beach Shower Sex", "cat": "c:mvbeach01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "plaj"], "desc": "Plajın açık duşunda kumları yıkarken tek bacağını beline kaldırır; soğuk su sırtından akar", "color": "#ff5f5f", "emojis": "🚿🏝️", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 5 }, { "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvbe15boat", "title": "Boat Deck Sex", "cat": "c:mvbeach01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "plaj"], "desc": "Kiralık teknenin güvertesinde, kıyıdan uzakta; teknenin sallantısı ritmi belirler", "color": "#ff5f5f", "emojis": "⛵🔥", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvbe16cove", "title": "Cove Creampie", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "plaj", "boşalma"], "desc": "Kayalık koyda kucağındayken içine boşalırsın; bir dalga ikinizi birden ıslatır (korunmaya göre hamilelik ihtimali)", "color": "#5f8bff", "emojis": "🪨💦", "outcomes": [{ "id": "mvbe16preg", "text": "{ben} hamile kaldı", "pct": 50, "next": "", "effects": [{ "p": "f:hamile", "d": 1 }], "conds": [{ "k": "not", "ev": "mvh1h70jral7v" }] }], "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:umvjof3wzh5hej", "d": -30 }] },
  { "id": "mvbe17sunset", "title": "Sunset Creampie", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "plaj", "boşalma"], "desc": "Gün batımında havlunun üstünde içine boşalırsın; sarılıp güneşin batışını izlersiniz (korunmaya göre hamilelik ihtimali)", "color": "#5f8bff", "emojis": "🌅💦", "outcomes": [{ "id": "mvbe17preg", "text": "{ben} hamile kaldı", "pct": 50, "next": "", "effects": [{ "p": "f:hamile", "d": 1 }], "conds": [{ "k": "not", "ev": "mvh1h70jral7v" }] }], "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:umvjof3wzh5hej", "d": -30 }] },
  { "id": "mvbe18sand", "title": "Sand Cumshot", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["göğüs", "plaj", "boşalma"], "desc": "Son anda çıkıp göğsüne ve karnına boşalırsın; güneşte parlar, sonra denize koşar", "color": "#5f8bff", "emojis": "🏝️💦", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }] },

  { "id": "mvof01desk", "title": "Under The Desk", "cat": "c:mvoffice01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["oral", "ofis"], "desc": "Sen toplantıdasın, o masanın altında diz çöker; sesini çıkarmaman gerek", "color": "#4a4e69", "emojis": "🏢👄", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvof02chair", "title": "Office Chair Ride", "cat": "c:mvoffice01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "ofis"], "desc": "Döner sandalyende kucağına oturur, eteği belinde; sandalye her harekette gıcırdar", "color": "#ff5f5f", "emojis": "🪑🔥", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvof03copy", "title": "Copy Room Quickie", "cat": "c:mvoffice01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "ofis"], "desc": "Fotokopi odasında kapıyı kilitlemeden; makineye eğilir, makine çalışırken sen arkasından", "color": "#ff5f5f", "emojis": "🖨️🍑", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvof04cum", "title": "Office Cumshot", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["göğüs", "oral", "ofis", "boşalma"], "desc": "Gömleğinin düğmelerini açar; göğsüne boşalırsın, toplantıya beş dakika var", "color": "#5f8bff", "emojis": "👔💦", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }] },
  { "id": "mvof05bent", "title": "Desk Bent Over", "cat": "c:mvoffice01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "ofis"], "desc": "Masaya eğilir, dosyalar yere düşer; ekranda hâlâ açık bir e-posta var", "color": "#ff5f5f", "emojis": "🗂️🍑", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvof06ondesk", "title": "On The Desk", "cat": "c:mvoffice01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "ofis"], "desc": "Masanın üstüne oturtursun, bacakları beline dolanır; klavye kalçasının altında", "color": "#ff5f5f", "emojis": "🖥️🔥", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvof07boss", "title": "Boss Chair Reverse", "cat": "c:mvoffice01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "ofis"], "desc": "Patronun deri koltuğunda sırtı sana dönük oturur, cam duvara bakıyor", "color": "#ff5f5f", "emojis": "💺🔄", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvof08window", "title": "Window Press", "cat": "c:mvoffice01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "ofis"], "desc": "Gece mesaisinde, şehir ışıkları altında cama yaslanır; nefesi camı buğulandırır", "color": "#ff5f5f", "emojis": "🌃🏢", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvof09table", "title": "Conference Table", "cat": "c:mvoffice01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "ofis"], "desc": "Boş toplantı odasında uzun masanın üstüne uzanır; projektör hâlâ açık", "color": "#ff5f5f", "emojis": "📽️🔥", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvof10closet", "title": "Supply Closet", "cat": "c:mvoffice01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "ofis"], "desc": "Malzeme dolabında ayakta, raflar sallanıyor; ışık sensörü kapanıp açılıyor", "color": "#ff5f5f", "emojis": "🚪🔥", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvof11anal", "title": "Desk Anal", "cat": "c:mvoffice01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["anal", "ofis"], "desc": "Masaya eğilmiş, eteği belinde; \"kimse bilmeyecek\" diye fısıldar", "color": "#ff8a65", "emojis": "🗂️🍑", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvof12bossbj", "title": "Boss Chair Blowjob", "cat": "c:mvoffice01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["oral", "ofis"], "desc": "Sen koltuğa yaslanırsın, o dizlerinin arasına iner; kapıda kilit yok", "color": "#4a4e69", "emojis": "💺👄", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvof13lick", "title": "Desk Licking", "cat": "c:mvoffice01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["oral", "ofis"], "desc": "O masanın kenarında bacaklarını açar, sen sandalyende önüne kayarsın", "color": "#4a4e69", "emojis": "👅🖥️", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 15 }, { "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvof14stairs", "title": "Stairwell Quickie", "cat": "c:mvoffice01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "ofis"], "desc": "Yangın merdiveninde; üst kattan adım sesleri yankılanıyor", "color": "#ff5f5f", "emojis": "🪜🔥", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvof15tease", "title": "Desk Tease", "cat": "c:mvoffice01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["ofis"], "desc": "Masana eğilip rapor uzatır, dekoltesi tam önünde", "color": "#4a4e69", "emojis": "📄😏", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 15 }] },
  { "id": "mvof16foot", "title": "Under Desk Footsie", "cat": "c:mvoffice01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["ofis"], "desc": "Toplantıda masanın altından ayağıyla bacağına dokunur; yüzü ciddi", "color": "#4a4e69", "emojis": "🦶😏", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 10 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvof17drawer", "title": "Panties In Drawer", "cat": "c:mvoffice01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["ofis"], "desc": "Çekmeceni açınca külotunu ve bir not bulursun: \"Bugün altımda hiçbir şey yok\"", "color": "#4a4e69", "emojis": "🗄️👙", "onEffects": [{ "p": "p:sehvet", "d": 10 }] },
  { "id": "mvof18lift", "title": "Elevator Glance", "cat": "c:mvoffice01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["ofis"], "desc": "Kalabalık asansörde arkadan sana yaslanır; kimse fark etmez", "color": "#4a4e69", "emojis": "🛗😳", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 10 }] },
  { "id": "mvof19late", "title": "Late Night Overtime", "cat": "c:mvoffice01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["ofis"], "desc": "Herkes çıkmış, sadece ikiniz kaldınız; ofiste ışıklar sönük, kahveler soğuk", "color": "#4a4e69", "emojis": "🌙🏢", "onEffects": [{ "p": "p:samimiyet", "d": 2 }] },
  { "id": "mvof20caught", "title": "Almost Caught", "cat": "c:mvoffice01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["ofis"], "desc": "Kapı çalınır, hızla toparlanırsınız; yanakları kızarık, gömleği ters", "color": "#4a4e69", "emojis": "🚪😳", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 20 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvof21review", "title": "Performance Review", "cat": "c:mvoffice01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["ofis"], "desc": "Kapalı kapı ardında \"terfi\" görüşmesi; her doğru cevaba ödül, her yanlışa ceza", "color": "#4a4e69", "emojis": "📈😈", "onEffects": [{ "p": "p:sehvet", "d": 10 }] },
  { "id": "mvof22cream", "title": "Desk Creampie", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "ofis", "boşalma"], "desc": "Masaya eğilmişken içine boşalırsın (korunmaya göre hamilelik ihtimali)", "color": "#5f8bff", "emojis": "🗂️💦", "outcomes": [{ "id": "mvof22preg", "text": "{ben} hamile kaldı", "pct": 50, "next": "", "effects": [{ "p": "f:hamile", "d": 1 }], "conds": [{ "k": "not", "ev": "mvh1h70jral7v" }] }], "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:umvjof3wzh5hej", "d": -30 }] },
  { "id": "mvof23glasses", "title": "Glasses Facial", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["oral", "ofis", "boşalma"], "desc": "Gözlüğüne ve yüzüne boşalırsın; gözlüğünü silip işine döner", "color": "#5f8bff", "emojis": "👓💦", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }] },
  { "id": "mvof24skirt", "title": "Skirt Cumshot", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["kalça", "ofis", "boşalma"], "desc": "Eteğinin ve kalçasının üstüne boşalırsın; \"kuru temizleme parası senden\"", "color": "#5f8bff", "emojis": "👗💦", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }] },
  { "id": "mvsc01podium", "title": "On The Podium", "cat": "c:mvschool01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "okul"], "desc": "Hoca kâğıtları yere itip kürsünün üstüne oturur, bacakları açık; sen ayaktasın", "color": "#ff5f5f", "emojis": "📚🔥", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvsc02grading", "title": "Grading Desk", "cat": "c:mvschool01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "okul"], "desc": "Okunmamış sınav kâğıtlarının üstüne eğilir; kırmızı kalem hâlâ elinde", "color": "#ff5f5f", "emojis": "📝🍑", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvsc03dean", "title": "Dean Chair Ride", "cat": "c:mvschool01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "okul"], "desc": "Bölüm başkanının koltuğundasın; hoca yüzü sana dönük kucağına oturur", "color": "#ff5f5f", "emojis": "💺🎓", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvsc04backrow", "title": "Back Row Spooning", "cat": "c:mvschool01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "okul"], "desc": "Boş amfinin en arka sırasında yan yana uzanırsınız; kürsüden kimse görmez", "color": "#ff5f5f", "emojis": "🪑🤫", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvsc05chalk", "title": "Chalkboard Press", "cat": "c:mvschool01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "okul"], "desc": "Kara tahtaya yaslanır, formüller sırtında siliniyor; her yer tebeşir tozu", "color": "#ff5f5f", "emojis": "🧑‍🏫🔥", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvsc06stacks", "title": "Library Stacks", "cat": "c:mvschool01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "okul"], "desc": "Arşiv rafları arasında ayakta, bir bacağı rafta; kitaplar sallanıyor", "color": "#ff5f5f", "emojis": "📚😳", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvsc07under", "title": "Under The Lectern", "cat": "c:mvschool01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["oral", "okul"], "desc": "Ofis saati sürüyor; hoca kürsünün altına girer, kapı çalarsa tepki vermemen gerek", "color": "#4a4e69", "emojis": "🎓👄", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvsc08lectern", "title": "Lectern Blowjob", "cat": "c:mvschool01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["oral", "okul"], "desc": "Kürsünün arkasında dizlerinin üstüne çöker, gözlüğünün üstünden sana bakar", "color": "#4a4e69", "emojis": "👩‍🏫👄", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvsc09exam", "title": "Oral Exam", "cat": "c:mvschool01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["oral", "okul"], "desc": "Sen masada oturursun; o sorular sorar, doğru cevap verdikçe ağzıyla devam eder", "color": "#4a4e69", "emojis": "📝👅", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 10 }, { "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvsc10detention", "title": "Detention Anal", "cat": "c:mvschool01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["anal", "okul"], "desc": "Masaya eğilmiş, cetvelle bir şaplak; \"ödevini yapmadın, cezan bu\"", "color": "#ff8a65", "emojis": "📏🍑", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvsc11barre", "title": "Ballet Barre", "cat": "c:mvschool01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "okul"], "desc": "Dans hocası bara yaslanır, bir bacağı barın üstünde; aynada ikinizi izliyor", "color": "#ff5f5f", "emojis": "🩰🔥", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvsc12mirror", "title": "Studio Mirror", "cat": "c:mvschool01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "okul"], "desc": "Stüdyo aynasının önünde ayakta, arkadan; \"kendini izle, bu senin en iyi performansın\"", "color": "#ff5f5f", "emojis": "🪞💃", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvsc13glasses", "title": "Glasses Off", "cat": "c:mvschool01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["okul"], "desc": "Hoca gözlüğünü yavaşça çıkarır, topuzunu açar; saçları omuzlarına dökülür", "color": "#4a4e69", "emojis": "👓💇‍♀️", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 15 }] },
  { "id": "mvsc14redpen", "title": "Red Pen Reward", "cat": "c:mvschool01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["okul"], "desc": "Her doğru cevapta kırmızı kalemle bir tik ve bir parça kıyafet çıkar", "color": "#4a4e69", "emojis": "🖍️👗", "onEffects": [{ "p": "p:sehvet", "d": 10 }] },
  { "id": "mvsc15dean", "title": "Dean Knocks", "cat": "c:mvschool01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["okul"], "desc": "Kapı çalınır: bölüm başkanı. Hızla toparlanırsınız; ceketi ters, yanakları kızarık", "color": "#4a4e69", "emojis": "🚪😳", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 20 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvsc16appeal", "title": "Grade Appeal", "cat": "c:mvschool01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["okul"], "desc": "Not itirazı için ofis saatinde; \"ikna et beni\" der, bacak bacak üstüne atar", "color": "#4a4e69", "emojis": "📄😏", "onEffects": [{ "p": "p:sehvet", "d": 10 }] },
  { "id": "mvsc17stretch", "title": "Stretch Together", "cat": "c:mvschool01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["okul"], "desc": "Dans hocası ısınmada arkandan bastırır, bedenleri yapışık esnersiniz", "color": "#4a4e69", "emojis": "🧘‍♀️🩰", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 10 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvsc18paper", "title": "Exam Paper Cumshot", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["kalça", "okul", "boşalma"], "desc": "Kalçasına ve altındaki sınav kâğıdına boşalırsın; kırmızı kalemle yazar: \"A+\"", "color": "#5f8bff", "emojis": "📝💦", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }] },
  { "id": "mvsc19glasses", "title": "Professor Glasses", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["oral", "okul", "boşalma"], "desc": "Profesör gözlüğüne boşalırsın; gözlüğü silip \"ders bitti\" der", "color": "#5f8bff", "emojis": "👓💦", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }] },
  { "id": "mvsc20cream", "title": "Podium Creampie", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "okul", "boşalma"], "desc": "Kürsünün üstünde içine boşalırsın (korunmaya göre hamilelik ihtimali)", "color": "#5f8bff", "emojis": "📚💦", "outcomes": [{ "id": "mvsc20preg", "text": "{ben} hamile kaldı", "pct": 50, "next": "", "effects": [{ "p": "f:hamile", "d": 1 }], "conds": [{ "k": "not", "ev": "mvh1h70jral7v" }] }], "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:umvjof3wzh5hej", "d": -30 }] },
  { "id": "mvsc21bell", "title": "School Bell Finish", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["göğüs", "okul", "boşalma"], "desc": "Zil çalar, koridor dolmak üzere; aceleyle göğsüne boşalırsın, düğmelerini o iliklemeye çalışır", "color": "#5f8bff", "emojis": "🔔💦", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }] },
  { "id": "mvch01pew", "title": "Pew Ride", "cat": "c:mvchurch01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "kilise"], "desc": "Sen kilise sırasında oturuyorsun; o cübbesini toplayıp yüzü sana dönük kucağına oturuyor, dua kitabı hâlâ elinde", "color": "#ff5f5f", "emojis": "🪑🙏", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvch02kneeler", "title": "Kneeler Doggy", "cat": "c:mvchurch01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "kilise"], "desc": "Dua rahlesine diz çöküp ön sıranın sırtına tutunuyor, sen arkadan; rahle her vuruşta gıcırdıyor", "color": "#ff5f5f", "emojis": "🙏🍑", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvch03altar", "title": "Altar Missionary", "cat": "c:mvchurch01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "kilise"], "desc": "Beyaz örtülü sunağa sırtüstü uzanıyor, bacakları omuzlarında; çevrede yüzlerce mum titriyor", "color": "#ff5f5f", "emojis": "🕯️🔥", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvch04booth", "title": "Confession Lap", "cat": "c:mvchurch01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "kilise"], "desc": "Dar itiraf kabininde sırtı sana dönük kucağında; ses çıkaramıyor, kafesin deliklerine tutunuyor", "color": "#ff5f5f", "emojis": "🪟🤫", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvch05cot", "title": "Cell Cot", "cat": "c:mvchurch01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "kilise"], "desc": "Hücredeki tek kişilik demir yatakta yan yana, sıkış tıkış; yaylar gıcırdıyor, duvarın ardında başka bir rahibe uyuyor", "color": "#ff5f5f", "emojis": "🛏️🤫", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvch06bath", "title": "Bathhouse Lift", "cat": "c:mvchurch01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "kilise"], "desc": "Taş hamamda ıslak cübbesiyle bacaklarını beline doluyor, sen onu kaldırıp duvara yaslıyorsun; su ikinizden süzülüyor", "color": "#ff5f5f", "emojis": "💧🧱", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvch07orchard", "title": "Orchard Tree", "cat": "c:mvchurch01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "kilise"], "desc": "Manastır bahçesinde elma ağacına yaslanıp tek bacağını beline doluyor; dallar sallanıyor, elmalar düşüyor", "color": "#ff5f5f", "emojis": "🍎🌳", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvch08bell", "title": "Bell Rope", "cat": "c:mvchurch01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "kilise"], "desc": "Çan kulesinde çan ipine tutunuyor, sen arkadan; her vuruşta çan hafifçe çalıyor, bütün manastır duyabilir", "color": "#ff5f5f", "emojis": "🔔😳", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 10 }, { "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvch09rosary", "title": "Rosary Cowgirl", "cat": "c:mvchurch01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "kilise"], "desc": "Hücrede üstünde, tespihi boynundan sarkıyor; her inişte bir tane sayıyor, sayı bitmeden durmak yok", "color": "#ff5f5f", "emojis": "📿🔥", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvch10penance", "title": "Penance Anal", "cat": "c:mvchurch01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["anal", "kilise"], "desc": "\"En büyük günah\" diye kendisi istiyor; yatağa yüzüstü uzanmış, sesini bastırmak için tespihi ısırıyor", "color": "#ff8a65", "emojis": "📿🍑", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvch11pewanal", "title": "Pew Bent Anal", "cat": "c:mvchurch01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["anal", "kilise"], "desc": "Kilise sırasının sırtına eğilmiş, cübbesi belinde; kilise yankı yaptığı için çok yavaş", "color": "#ff8a65", "emojis": "🪑🍑", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvch12boothanal", "title": "Confession Anal", "cat": "c:mvchurch01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["anal", "kilise"], "desc": "İtiraf kabininde ayakta, kafese yaslanmış; fısıltıyla itirafına devam ediyor, sesi titriyor", "color": "#ff8a65", "emojis": "🪟🍑", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 10 }, { "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvch13altaranal", "title": "Altar Anal", "cat": "c:mvchurch01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["anal", "kilise"], "desc": "Sunağa eğiliyor, haç kolyesi örtünün üstünde sallanıyor; manastırın en ağır günahı", "color": "#ff8a65", "emojis": "⛪🍑", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvch14habitanal", "title": "Habit Anal", "cat": "c:mvchurch01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["anal", "kilise"], "desc": "Cübbe hiç çıkmıyor, sadece beline kadar kaldırılıyor; Cübbe Altı'ndan sonra en doğal devam", "color": "#ff8a65", "emojis": "👗🍑", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvch15beads", "title": "Rosary Bead Tease", "cat": "c:mvchurch01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["kilise"], "desc": "Isınma: tespih tanelerini tek tek tenin üstünde, yavaşça kalçalarının arasında gezdiriyorsun; anal'den önce", "color": "#4a4e69", "emojis": "📿😳", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 15 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvch16holy", "title": "Holy Water Creampie", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "kilise", "boşalma"], "desc": "İçine boşalırsın; karnını okşayıp \"kutsal olmayan bir su\" diye fısıldar (korunmaya göre hamilelik ihtimali)", "color": "#5f8bff", "emojis": "💧💦", "outcomes": [{ "id": "mvch16preg", "text": "{ben} hamile kaldı", "pct": 50, "next": "", "effects": [{ "p": "f:hamile", "d": 1 }], "conds": [{ "k": "not", "ev": "mvh1h70jral7v" }] }], "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:umvjof3wzh5hej", "d": -30 }] },
  { "id": "mvch17habit", "title": "Habit Cumshot", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["kalça", "kilise", "boşalma"], "desc": "Siyah cübbesinin üstüne boşalırsın; bembeyaz izler apaçık, cübbeyle duaya çıkamaz", "color": "#5f8bff", "emojis": "👗💦", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }] },
  { "id": "mvch18veil", "title": "Veil Facial", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["oral", "kilise", "boşalma"], "desc": "Diz çökmüş; yüzüne ve beyaz başörtüsüne boşalırsın, gözlerini kapatıp istavroz çıkarır", "color": "#5f8bff", "emojis": "🧕💦", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }] },
  { "id": "mvch19cloth", "title": "Altar Cloth Finish", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["kalça", "kilise", "boşalma"], "desc": "Son anda çıkıp sunağın beyaz örtüsüne boşalırsın; örtüyü sabaha kadar yıkaması gerek", "color": "#5f8bff", "emojis": "⛪💦", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }] },
  { "id": "mvch20penance", "title": "Penance Anal Creampie", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["anal", "kilise", "boşalma"], "desc": "Arkadan içine boşalırsın; \"bu günahı hiçbir itiraf odası duymayacak\" diye fısıldar", "color": "#5f8bff", "emojis": "📿💦", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }] },
  { "id": "mvch21bell", "title": "Bell Toll Finish", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["göğüs", "kilise", "boşalma"], "desc": "Gece yarısı çanı çalarken göğsüne boşalırsın; inlemeleriniz çan seslerinde kaybolur", "color": "#5f8bff", "emojis": "🔔💦", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }] },
  { "id": "mvgy01bench", "title": "Bench Press Ride", "cat": "c:mvgym01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "spor"], "desc": "Sen bench'e uzanmışsın; o taytını indirip yüzü sana dönük üstüne oturuyor, bara tutunarak inip kalkıyor", "color": "#ff5f5f", "emojis": "🏋️🔥", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvgy02squat", "title": "Squat Rack Doggy", "cat": "c:mvgym01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "spor"], "desc": "Squat kafesinin barına tutunup eğiliyor, sen arkadan; her vuruşta \"bir tekrar daha\" diye sayıyor", "color": "#ff5f5f", "emojis": "🏋️🍑", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvgy03yoga", "title": "Yoga Mat Spoon", "cat": "c:mvgym01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "spor"], "desc": "Boş yoga stüdyosunda matın üstünde yan yatıyorsunuz; nefesini senin ritmine uyduruyor", "color": "#ff5f5f", "emojis": "🧘‍♀️🤍", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvgy04legpress", "title": "Leg Press Missionary", "cat": "c:mvgym01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "spor"], "desc": "Leg press makinesinin koltuğuna yaslanmış, bacakları plakada değil omuzlarında; esnekliğiyle övünüyor", "color": "#ff5f5f", "emojis": "🦵🔥", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvgy05pullup", "title": "Pull-Up Bar Lift", "cat": "c:mvgym01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "spor"], "desc": "Barfiks barına asılıyor, bacaklarını beline doluyor; sen onu kalçasından tutup taşıyorsun", "color": "#ff5f5f", "emojis": "💪🔥", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 5 }, { "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvgy06mirror", "title": "Mirror Wall Standing", "cat": "c:mvgym01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "spor"], "desc": "Aynalı duvara elleriyle yaslanıyor, sen arkadan; aynada kendi terli yüzünü izliyor", "color": "#ff5f5f", "emojis": "🪞🔥", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvgy07locker", "title": "Locker Room Bench", "cat": "c:mvgym01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "spor"], "desc": "Soyunma odasının tahta bankında kucağında; duşlar damlıyor, dolapların ardında biri olabilir", "color": "#ff5f5f", "emojis": "🚿🔥", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 5 }, { "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvgy08ball", "title": "Gym Ball Bounce", "cat": "c:mvgym01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "spor"], "desc": "Sen pilates topunda oturuyorsun, o üstünde; top her zıplamada ikinizi birden sektiriyor", "color": "#ff5f5f", "emojis": "⚽😂", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvgy09squatanal", "title": "Squat Rack Anal", "cat": "c:mvgym01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["anal", "spor"], "desc": "Kafesin barına eğilmiş, taytı dizlerinde; \"bacak gününden sonra bunu da çalıştıralım\" diyor", "color": "#ff8a65", "emojis": "🏋️🍑", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvgy10lockerbj", "title": "Locker Room Blowjob", "cat": "c:mvgym01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["oral", "spor"], "desc": "Dolapların arasında, havlunun üstünde diz çöküyor; saçı hâlâ at kuyruğu", "color": "#4a4e69", "emojis": "🚪👄", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvgy11stretch", "title": "Stretch Help", "cat": "c:mvgym01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["spor"], "desc": "Isınma: bacağını omzuna koyup esnetmeni istiyor; tayt incecik, aranızda hiçbir şey yok gibi", "color": "#4a4e69", "emojis": "🧘‍♀️😏", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 15 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvgy12spot", "title": "Spotting", "cat": "c:mvgym01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["spor"], "desc": "O bench'te kaldırıyor, sen başının ucunda spot'sun; her tekrarda gözü kasıklarında", "color": "#4a4e69", "emojis": "🏋️👀", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 10 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvgy13peel", "title": "Sweaty Top Peel", "cat": "c:mvgym01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["spor"], "desc": "Terden tenine yapışmış spor sütyenini soymana izin veriyor; kumaş zor sıyrılıyor", "color": "#4a4e69", "emojis": "💦👙", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 15 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvmz01oildrip", "title": "Oil Drip Grind", "cat": "c:mvmsalon01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["kalça", "masaj"], "desc": "Yüzüstü yatan sırtına ılık yağ damlatırsın; yağ kalçalarının arasına süzülür, aletinle yayarsın", "color": "#ab47bc", "emojis": "🫗🍑", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 12 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvmz02shoulder", "title": "Shoulder Rub Grind", "cat": "c:mvmsalon01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["kalça", "masaj"], "desc": "Yüzüstü yatarken kalçasına oturursun; omuzlarını ovarken sertleşmiş aletin kalçalarının arasında gidip gelir", "color": "#ab47bc", "emojis": "🤲🍑", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 12 }, { "p": "p:sehvet", "d": 5 }, { "p": "p:samimiyet", "d": 1 }] },
  { "id": "mvmz03hug", "title": "Hug Grind", "cat": "c:mvmsalon01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["kalça", "masaj"], "desc": "Üstüne uzanıp ona arkadan sarılırsın; göğsün sırtında, aletin yağlı kalçalarının arasında kayar", "color": "#ab47bc", "emojis": "🫂🍑", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 12 }, { "p": "p:samimiyet", "d": 2 }, { "p": "p:ask", "d": 1 }] },
  { "id": "mvmz04neck", "title": "Neck Kiss Grind", "cat": "c:mvmsalon01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["kalça", "masaj"], "desc": "Üstündeyken ensesini öpersin; her öpücükte kalçasını geriye, sana doğru iter", "color": "#ab47bc", "emojis": "💋🍑", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 12 }, { "p": "p:sehvet", "d": 5 }, { "p": "p:samimiyet", "d": 1 }] },
  { "id": "mvmz05thigh", "title": "Thigh Slide", "cat": "c:mvmsalon01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["bacak", "masaj"], "desc": "Aletini yağlı uyluklarının arasına sokarsın; o bacaklarını sıkar, iç bacağında kayarsın", "color": "#ab47bc", "emojis": "🦵🫗", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 12 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvmz06back", "title": "Lower Back Press", "cat": "c:mvmsalon01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["kalça", "masaj"], "desc": "Belini avuçlarınla bastırırsın; kalçası yükselir ve aletine sürtünür", "color": "#ab47bc", "emojis": "🤲🔥", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 10 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvmz07turn", "title": "Turn Over Tease", "cat": "c:mvmsalon01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["masaj"], "desc": "Sırtüstü döner, havlu kayar; aletin karnının üstünde kalır, \"devam et\" diye fısıldar", "color": "#ab47bc", "emojis": "🔄😏", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 10 }, { "p": "p:samimiyet", "d": 1 }] },
  { "id": "mvmz08chest", "title": "Chest Rub Grind", "cat": "c:mvmsalon01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["göğüs", "masaj"], "desc": "Önden yağlı göğüslerini ovarken aletin göğüslerinin arasında ileri geri gider", "color": "#ab47bc", "emojis": "🍈🫗", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 12 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvmz09nuru", "title": "Nuru Slide", "cat": "c:mvmsalon01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["göğüs", "masaj"], "desc": "Bu sefer o yağlanır; masaya uzanırsın, bütün kaygan bedeniyle üstünde kayar", "color": "#ab47bc", "emojis": "🧴🔥", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 15 }, { "p": "p:sehvet", "d": 5 }, { "p": "p:samimiyet", "d": 1 }] },
  { "id": "mvmz10tip", "title": "Tip Tease", "cat": "c:mvmsalon01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["masaj"], "desc": "Ucunu yağlı girişine sürtersin ama girmezsin; o sabırsızlanıp kalçasını geriye iter", "color": "#ab47bc", "emojis": "😮‍💨🌸", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 15 }, { "p": "p:sehvet", "d": 8 }] },
  { "id": "mvmz11handjob", "title": "Oily Handjob", "cat": "c:mvmsalon01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["el", "masaj"], "desc": "Yağlı elleriyle seni yavaşça okşar; \"masaj hâlâ sürüyor\" der", "color": "#7fb3ff", "emojis": "💦✊", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvmz12slipin", "title": "Slip In", "cat": "c:mvmsalon01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "masaj"], "desc": "Yağdan kayıverir, \"kazara\" içine girersin; ikiniz de durmazsınız", "color": "#ff5f5f", "emojis": "🫗🔥", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 5 }, { "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvmz13table", "title": "Massage Table Missionary", "cat": "c:mvmsalon01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "masaj"], "desc": "Masaj masasının kenarında sırtüstü; bacakları omuzlarında, havlu yerde", "color": "#ff5f5f", "emojis": "🛏️🔥", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvmz14cowgirl", "title": "Table Cowgirl", "cat": "c:mvmsalon01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "masaj"], "desc": "Sen masaya uzanırsın, o yağlı bedeniyle üstüne çıkar; masa her harekette gıcırdar", "color": "#ff5f5f", "emojis": "🐎🫗", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvmz15happy", "title": "Happy Ending", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["oral", "el", "masaj", "boşalma"], "desc": "Masajın mutlu sonu: elleri ve ağzıyla bitirir, son damlasına kadar", "color": "#5f8bff", "emojis": "🫦💦", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }] },
  { "id": "mvmz16body", "title": "Oiled Body Cumshot", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["göğüs", "masaj", "boşalma"], "desc": "Parlayan, yağlı göğüslerine ve karnına boşalırsın", "color": "#5f8bff", "emojis": "✨💦", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }] },
  { "id": "mvmz17back", "title": "Oiled Back Cumshot", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["kalça", "masaj", "boşalma"], "desc": "Yağlı sırtına ve kalçalarının arasına boşalırsın; yağla karışıp süzülür", "color": "#5f8bff", "emojis": "🍑💦", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }] },
  { "id": "mvmz18facehole", "title": "Face Hole Oral", "cat": "c:mvmsalon01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["oral", "masaj"], "desc": "Masanın yüz deliğinin altına uzanırsın; o yüzüstü yatarken aletini ağzına alır", "color": "#7fb3ff", "emojis": "🕳️👄", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvmz19titjob", "title": "Oily Titjob", "cat": "c:mvmsalon01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["göğüs", "masaj"], "desc": "Masanın kenarına diz çöker; yağlı göğüslerinin arasında seni sıkar", "color": "#7fb3ff", "emojis": "🍈🫗", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvmz20innerthigh", "title": "Inner Thigh Knead", "cat": "c:mvmsalon01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["bacak", "masaj"], "desc": "İç bacaklarını yoğurursun; başparmakların her turda dudaklarına biraz daha yaklaşır", "color": "#ab47bc", "emojis": "🦵🤲", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 15 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvmz21edgedoggy", "title": "Table Edge Doggy", "cat": "c:mvmsalon01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "kalça", "masaj"], "desc": "Masanın kenarında dizlerinin üstünde; yağdan kaygan kalçası her vuruşta parlar", "color": "#ff5f5f", "emojis": "🐕🫗", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvmz22spoon", "title": "Spoon on Table", "cat": "c:mvmsalon01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "masaj"], "desc": "Yan yatar, arkasından uzanırsın; masa dar, sıkı sarılmak zorundasınız", "color": "#ff5f5f", "emojis": "🥄🛏️", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvmz23standing", "title": "Standing Oil Press", "cat": "c:mvmsalon01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "masaj"], "desc": "Ayakta, duvara yaslanmış; yağlı bedeni ellerinden kayıp duruyor", "color": "#ff5f5f", "emojis": "🧱🫗", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvmz24asscream", "title": "Oiled Ass Creampie", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["anal", "kalça", "masaj", "boşalma"], "desc": "Yağlı kalçalarının arasından içine boşalırsın; dışarı süzülürken parlar", "color": "#5f8bff", "emojis": "🍑💦", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }] },
  { "id": "mvmz25titcum", "title": "Titjob Finish", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["göğüs", "masaj", "boşalma"], "desc": "Yağlı göğüslerinin arasında boşalırsın; boynuna kadar sıçrar", "color": "#5f8bff", "emojis": "🍈💦", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }] },
  { "id": "mvmz26thighcum", "title": "Thigh Cumshot", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["bacak", "masaj", "boşalma"], "desc": "Yağlı uyluklarının arasında boşalırsın; bacaklarını sıkıp son damlayı da alır", "color": "#5f8bff", "emojis": "🦵💦", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }] },
  { "id": "mvmz27oilgold", "title": "Oil and Gold", "cat": "c:mvmsalon01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["iseme", "masaj"], "desc": "Yağlı sırtına işemeni ister; yağla karışıp kalçalarından süzülür", "color": "#e0b100", "emojis": "🫗💛", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 15 }, { "p": "p:sehvet", "d": 10 }, { "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvmz28asspee", "title": "Oily Ass Pee", "cat": "c:mvmsalon01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["iseme", "kalça", "masaj"], "desc": "Masada yüzüstü kalçasını kaldırır; onun isteğiyle yağlı kalçalarına işersin", "color": "#c99700", "emojis": "🍑💛", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 15 }, { "p": "p:sehvet", "d": 10 }, { "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvmz29titpee", "title": "Oily Tit Pee", "cat": "c:mvmsalon01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["iseme", "göğüs", "masaj"], "desc": "Sırtüstü yatar, göğüslerini birleştirir; onun isteğiyle yağlı göğüslerine işersin", "color": "#c99700", "emojis": "🍈💛", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 15 }, { "p": "p:sehvet", "d": 10 }, { "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvcl01exbed", "title": "Exam Bed Missionary", "cat": "c:mvclinic01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "tedavi"], "desc": "Muayene yatağına uzanır, bacaklarını sedyenin askılarına koyar; seni üstüne çeker", "color": "#0097a7", "emojis": "🩺🛏️", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvcl02cowgl", "title": "Clinic Cowgirl", "cat": "c:mvclinic01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "tedavi"], "desc": "\"Sen yorma kendini\" der; önlüğü açık, sedyede üstüne oturup kendisi hareket eder", "color": "#0097a7", "emojis": "🩺🤠", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvcl03rvchk", "title": "Reverse Checkup", "cat": "c:mvclinic01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "tedavi"], "desc": "Sırtını dönüp üstüne oturur; omzunun üstünden bakıp \"nabzın nasıl?\" diye sorar", "color": "#0097a7", "emojis": "🩺🔄", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvcl04desk", "title": "Exam Desk Bend", "cat": "c:mvclinic01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "tedavi"], "desc": "Muayene masasına eğilir, eteğini kendisi kaldırır; dosyalar yere dağılır", "color": "#0097a7", "emojis": "🧑‍⚕️🍑", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvcl05chair", "title": "Doctor Chair Ride", "cat": "c:mvclinic01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "tedavi"], "desc": "Tekerlekli sandalyesinde kucağına oturur; sandalye her harekette hafifçe kayar", "color": "#0097a7", "emojis": "🪑💗", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvcl06spoon", "title": "Recovery Spoon", "cat": "c:mvclinic01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "tedavi"], "desc": "Hasta yatağında arkasından sarılmana izin verir; yavaş ve sessiz, dinlenme pozisyonu", "color": "#0097a7", "emojis": "🩻🥄", "onEffects": [{ "p": "p:samimiyet", "d": 2 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvcl07fever", "title": "Fever Check", "cat": "c:mvclinic01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "tedavi"], "desc": "Ateşini ölçerken alnını alnına dayar; yüz yüze otururken birleşirsiniz", "color": "#0097a7", "emojis": "🌡️🔥", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:ask", "d": 1 }] },
  { "id": "mvcl08anal", "title": "Gloved Anal Exam", "cat": "c:mvclinic01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["anal", "tedavi"], "desc": "Eldivenli parmağıyla önce kendini hazırlar, sonra sedyede dizlerinin üstünde arkasını sunar", "color": "#00838f", "emojis": "🧤🍑", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvcl09oral", "title": "Oral Checkup", "cat": "c:mvclinic01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["oral", "tedavi"], "desc": "\"Ağzını aç\" diye dalga geçer, sonra kendisi diz çöker; ağzıyla muayene eder", "color": "#26a69a", "emojis": "👄🩺", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 10 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvcl10steth", "title": "Stethoscope Titfuck", "cat": "c:mvclinic01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["göğüs", "tedavi"], "desc": "Stetoskobu göğüslerinin arasından çıkarır, aletini oraya alıp sıkar", "color": "#26a69a", "emojis": "🍈🩺", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 10 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvcl11cup", "title": "Sample Cup Finish", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["el", "tedavi", "boşalma"], "desc": "Son anda çeker ve numune kabına boşalırsın; kabı ışığa tutup inceler", "color": "#5f8bff", "emojis": "🧪💦", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }] },
  { "id": "mvcl12coat", "title": "Coat Cumshot", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["göğüs", "tedavi", "boşalma"], "desc": "Beyaz önlüğünün üstüne boşalırsın; lekeye bakıp \"bunu açıklayamam\" der", "color": "#5f8bff", "emojis": "🥼💦", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }] },
  { "id": "mvcl13steth", "title": "Stethoscope Cumshot", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["göğüs", "tedavi", "boşalma"], "desc": "Stetoskobun hemen yanına, göğüslerine boşalırsın; \"kalbim hâlâ hızlı\" der", "color": "#5f8bff", "emojis": "🍈💦", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }] },
  { "id": "mvcl14swallow", "title": "Prescription Swallow", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["oral", "tedavi", "boşalma"], "desc": "Ağzına boşalırsın; \"günde bir doz\" deyip yutar", "color": "#5f8bff", "emojis": "👄💊", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }] },
  { "id": "mvcl15cream", "title": "Treatment Creampie", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "tedavi", "boşalma"], "desc": "Sedyede bacaklarıyla seni sarar, çekmene izin vermez; içinde bitirirsin (korunmaya göre hamilelik ihtimali)", "color": "#5f8bff", "emojis": "🩺🍯", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }] },
  { "id": "mvcl16pull", "title": "Exam Bed Pull Out", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["kalça", "tedavi", "boşalma"], "desc": "Son anda kendisi çekilir; sedyenin kâğıt örtüsüne ve kalçasına bitirtir", "color": "#5f8bff", "emojis": "🍑🩺", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }] },
  { "id": "mvcl17glove", "title": "Double Glove Milking", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["el", "tedavi", "boşalma"], "desc": "Eldivenli elleriyle aynı anda hem prostatına hem aletine dokunarak sağar; bitiş uzun ve yoğun olur", "color": "#5f8bff", "emojis": "🧤🌊", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }] },
  { "id": "mvcl18chart", "title": "Chart Note Finish", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["el", "tedavi", "boşalma"], "desc": "Eliyle bitirir, hasta dosyasının üstüne gelirsin; dosyayı kapatıp \"tedavi başarılı\" yazar", "color": "#5f8bff", "emojis": "📋💦", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }] },
  { "id": "mvgy14pants", "title": "Yoga Pants Cumshot", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["kalça", "spor", "boşalma"], "desc": "Son anda çıkıp taytının üstüne, kalçasına boşalırsın; siyah kumaşta bembeyaz izler", "color": "#5f8bff", "emojis": "🍑💦", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }] },
  { "id": "mvgy15facial", "title": "Locker Room Facial", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["oral", "spor", "boşalma"], "desc": "Havlunun üstünde diz çökmüş; yüzüne boşalırsın, havluyla silip \"duşa\" der", "color": "#5f8bff", "emojis": "🚿💦", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }] },
  { "id": "mvgy16cream", "title": "Bench Creampie", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "spor", "boşalma"], "desc": "Bench'in üstünde içine boşalırsın; nefes nefese \"en iyi setim\" der (korunmaya göre hamilelik ihtimali)", "color": "#5f8bff", "emojis": "🏋️💦", "outcomes": [{ "id": "mvgy16preg", "text": "{ben} hamile kaldı", "pct": 50, "next": "", "effects": [{ "p": "f:hamile", "d": 1 }], "conds": [{ "k": "not", "ev": "mvh1h70jral7v" }] }], "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:umvjof3wzh5hej", "d": -30 }] },
  { "id": "mvbr01stall", "title": "Bathroom Stall", "cat": "c:mvbar01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "bar"], "desc": "Barın tuvaletinde daracık kabin; bir bacağı klozetin kapağında, sen ayaktasın; müzik duvarları titretiyor", "color": "#ff5f5f", "emojis": "🚻🔥", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 5 }, { "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvbr02counter", "title": "Bar Counter", "cat": "c:mvbar01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "bar"], "desc": "Kapanıştan sonra bar tezgâhına oturtuyorsun; bardaklar şıngırdıyor, neon ışık tenine vuruyor", "color": "#ff5f5f", "emojis": "🍸🔥", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvbr03vip", "title": "VIP Booth", "cat": "c:mvbar01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "bar"], "desc": "VIP locasının kadife koltuğunda kucağında; perde yarı açık, aşağıda dans pisti", "color": "#ff5f5f", "emojis": "🛋️🥂", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvbr04pool", "title": "Pool Table", "cat": "c:mvbar01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "bar"], "desc": "Bilardo masasının yeşil çuhasına sırtüstü yatıyor; toplar ceplere yuvarlanıyor, istaka yerde", "color": "#ff5f5f", "emojis": "🎱🔥", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvbr05alley", "title": "Back Alley Wall", "cat": "c:mvbar01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "bar"], "desc": "Arka kapıdan çıkıp tuğla duvara yaslanıyorsunuz; içeriden bas sesi geliyor, sokak lambası yanıp sönüyor", "color": "#ff5f5f", "emojis": "🧱🌙", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 10 }, { "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvbr06stool", "title": "Bar Stool Ride", "cat": "c:mvbar01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "bar"], "desc": "Sen yüksek bar taburesindesin, o sırtı sana dönük üstüne oturuyor; elbisesinin eteği ikinizi örtüyor", "color": "#ff5f5f", "emojis": "🪑🍸", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvbr07anal", "title": "Stall Anal", "cat": "c:mvbar01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["anal", "bar"], "desc": "Kabinin duvarına yaslanmış, elbisesi belinde; kapının altından başka ayakkabılar görünüyor", "color": "#ff8a65", "emojis": "🚻🍑", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 5 }, { "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvbr08bj", "title": "Stall Blowjob", "cat": "c:mvbar01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["oral", "bar"], "desc": "Kabinde önünde çömeliyor, rujunu bozmamaya çalışıyor; dışarıda sıra var", "color": "#4a4e69", "emojis": "🚻👄", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvbr09grind", "title": "Dance Floor Grind", "cat": "c:mvbar01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["bar"], "desc": "Kalabalık pistin ortasında kalçasını sana bastırıyor; ışıklar dönüyor, kimse fark etmiyor", "color": "#4a4e69", "emojis": "💃🔥", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 15 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvbr10lime", "title": "Salt & Lime Lick", "cat": "c:mvbar01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["bar"], "desc": "Boynuna tuz serpiyor, dudaklarına limon dilimi koyuyor; tuzu yalayıp limonu ağzından alıyorsun", "color": "#4a4e69", "emojis": "🧂🍋", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 10 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvbr11table", "title": "Under The Table", "cat": "c:mvbar01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["bar"], "desc": "Arkadaşları masada sohbet ederken eli masanın altında bacağında yukarı çıkıyor; yüzü hiç bozulmuyor", "color": "#4a4e69", "emojis": "🍹🤫", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 20 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvbr12cream", "title": "Stall Creampie", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "bar", "boşalma"], "desc": "Kabinde içine boşalırsın; külotunu çekip \"dans ederken akacak\" diye güler (korunmaya göre hamilelik ihtimali)", "color": "#5f8bff", "emojis": "🚻💦", "outcomes": [{ "id": "mvbr12preg", "text": "{ben} hamile kaldı", "pct": 50, "next": "", "effects": [{ "p": "f:hamile", "d": 1 }], "conds": [{ "k": "not", "ev": "mvh1h70jral7v" }] }], "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:umvjof3wzh5hej", "d": -30 }] },
  { "id": "mvbr13cocktail", "title": "Cocktail Facial", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["oral", "bar", "boşalma"], "desc": "Yüzüne ve dudaklarına boşalırsın; kokteylinden bir yudum alıp \"şimdi oldu\" der", "color": "#5f8bff", "emojis": "🍸💦", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }] },
  { "id": "mvbr14vip", "title": "VIP Couch Cumshot", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["kalça", "bar", "boşalma"], "desc": "Kadife koltukta son anda çıkıp kalçasına boşalırsın; elbisesini indirip pisti selamlar", "color": "#5f8bff", "emojis": "🛋️💦", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }] },
  { "id": "mvcn01lap", "title": "Back Row Lap Ride", "cat": "c:mvcinema01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "sinema"], "desc": "En arka sırada kucağına oturuyor, montu ikinizin üstünde; perdedeki ışık yüzüne vuruyor", "color": "#ff5f5f", "emojis": "🎬🔥", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 5 }, { "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvcn02reverse", "title": "Reverse Seat Ride", "cat": "c:mvcinema01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "sinema"], "desc": "Sırtı sana dönük kucağında, ikisi de filmi izliyormuş gibi; her yüksek sahnede biraz daha hızlanıyor", "color": "#ff5f5f", "emojis": "🍿🔥", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvcn03stairs", "title": "Aisle Stairs", "cat": "c:mvcinema01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "sinema"], "desc": "Salonun yan merdivenlerinde, basamaklara dirseklerini dayamış; yerdeki küçük ışıklar bacaklarını aydınlatıyor", "color": "#ff5f5f", "emojis": "🪜🔥", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 5 }, { "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvcn04booth", "title": "Projection Booth Doggy", "cat": "c:mvcinema01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "sinema"], "desc": "Makine dairesinde projektörün yanına eğiliyor; film makarası dönüyor, küçük camdan salon görünüyor", "color": "#ff5f5f", "emojis": "📽️🍑", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvcn05screen", "title": "Empty Theater Missionary", "cat": "c:mvcinema01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "sinema"], "desc": "Gece seansı bitti, salon bomboş; perdenin önündeki sahnede sırtüstü, jenerik üstünüze akıyor", "color": "#ff5f5f", "emojis": "🎞️🔥", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvcn06anal", "title": "Projection Booth Anal", "cat": "c:mvcinema01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["anal", "sinema"], "desc": "Makine dairesinin dar masasına eğilmiş; projektörün sıcaklığı ve gürültüsü sesini bastırıyor", "color": "#ff8a65", "emojis": "📽️🍑", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvcn07bj", "title": "Back Row Blowjob", "cat": "c:mvcinema01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["oral", "sinema"], "desc": "Koltukların arasına kayıyor, başı kucağında; sen filme bakıyormuş gibi yapıyorsun", "color": "#4a4e69", "emojis": "🎬👄", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 5 }, { "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvcn08coat", "title": "Under The Coat", "cat": "c:mvcinema01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["sinema"], "desc": "Montunu kucaklarınıza seriyor; altında elleriniz birbirini buluyor, yüzü perdeye dönük", "color": "#4a4e69", "emojis": "🧥🤫", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 15 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvcn09popcorn", "title": "Popcorn Bucket Trick", "cat": "c:mvcinema01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["sinema"], "desc": "Mısır kovasına uzanan eli mısır yerine başka bir şey buluyor; kıkırdamamak için dudağını ısırıyor", "color": "#4a4e69", "emojis": "🍿😳", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 15 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvcn10dark", "title": "Dark Scene Touch", "cat": "c:mvcinema01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["sinema"], "desc": "Perde kararınca elin eteğinin altında; sahne aydınlanınca ikiniz de donup kalıyorsunuz", "color": "#4a4e69", "emojis": "🌑🤫", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 20 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvcn11cream", "title": "Back Row Creampie", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "sinema", "boşalma"], "desc": "Kucağında içine boşalırsın; montu toplayıp \"film bitmeden kalkamam\" der (korunmaya göre hamilelik ihtimali)", "color": "#5f8bff", "emojis": "🎬💦", "outcomes": [{ "id": "mvcn11preg", "text": "{ben} hamile kaldı", "pct": 50, "next": "", "effects": [{ "p": "f:hamile", "d": 1 }], "conds": [{ "k": "not", "ev": "mvh1h70jral7v" }] }], "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:umvjof3wzh5hej", "d": -30 }] },
  { "id": "mvcn12seat", "title": "Seat Cumshot", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["kalça", "sinema", "boşalma"], "desc": "Son anda çıkıp kalçasına boşalırsın; peçeteler mısır kovasında, ışıklar yanmak üzere", "color": "#5f8bff", "emojis": "🍿💦", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }] },
  { "id": "mvcn13credits", "title": "Credits Facial", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["oral", "sinema", "boşalma"], "desc": "Jenerik akarken yüzüne boşalırsın; perdenin beyaz ışığında parlıyor, \"en iyi sahne\" der", "color": "#5f8bff", "emojis": "🎞️💦", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }] },
  { "id": "mvdo01blanket", "title": "Blanket Missionary", "cat": "c:mvoutdoors01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "doğa"], "desc": "Piknik örtüsünün üstünde sırtüstü uzanmış; ağaçların yaprakları arasından güneş yüzüne vuruyor", "color": "#ff5f5f", "emojis": "🧺🔥", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvdo02tree", "title": "Behind the Tree Standing", "cat": "c:mvoutdoors01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "doğa"], "desc": "Kalın bir ağacın arkasında gövdeye yaslanıyor, eteği belinde; yolda yürüyenlerin sesi geliyor", "color": "#ff5f5f", "emojis": "🌳🔥", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 5 }, { "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvdo03grass", "title": "Grass Doggy", "cat": "c:mvoutdoors01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "doğa"], "desc": "Çimenin üstünde dört ayak, dizleri yeşile boyanıyor; sen arkadan, rüzgâr saçını savuruyor", "color": "#ff5f5f", "emojis": "🌿🍑", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvdo04hammock", "title": "Hammock Ride", "cat": "c:mvoutdoors01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "doğa"], "desc": "Bahçedeki hamakta sen uzanmışsın, o üstünde; hamak her hareketinizde sallanıp ikinizi birbirine itiyor", "color": "#ff5f5f", "emojis": "🌴😏", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvdo05bench", "title": "Garden Bench Cowgirl", "cat": "c:mvoutdoors01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "doğa"], "desc": "Park bankında oturuyorsun, o yüzü sana dönük kucağında; uzun eteği ikinizi de örtüyor", "color": "#ff5f5f", "emojis": "🪑🔥", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 5 }, { "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvdo06maze", "title": "Maze Wall Anal", "cat": "c:mvoutdoors01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["anal", "doğa"], "desc": "Labirentin çıkmaz bir köşesinde yeşil duvara tutunup eğiliyor; \"burada kimse bulamaz bizi\" diye fısıldıyor", "color": "#ff8a65", "emojis": "🌽🍑", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 5 }, { "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvdo07picnicbj", "title": "Picnic Blowjob", "cat": "c:mvoutdoors01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["oral", "doğa"], "desc": "Sepetin yanında, örtünün üstünde diz çöküyor; dudaklarında hâlâ çilek tadı var", "color": "#4a4e69", "emojis": "🍓👄", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvdo08cream", "title": "Picnic Creampie", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "doğa", "boşalma"], "desc": "Örtünün üstünde içine boşalırsın; çimene uzanıp gökyüzüne bakarak \"en güzel piknik\" der (korunmaya göre hamilelik ihtimali)", "color": "#5f8bff", "emojis": "🧺💦", "outcomes": [{ "id": "mvdo08preg", "text": "{ben} hamile kaldı", "pct": 50, "next": "", "effects": [{ "p": "f:hamile", "d": 1 }], "conds": [{ "k": "not", "ev": "mvh1h70jral7v" }] }], "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:umvjof3wzh5hej", "d": -30 }] },
  { "id": "mvdo09facial", "title": "Grass Facial", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["oral", "doğa", "boşalma"], "desc": "Çimenin üstünde diz çökmüş; yüzüne boşalırsın, güneşte parlıyor, peçeteyi sepetten sen uzatırsın", "color": "#5f8bff", "emojis": "🌿💦", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }] },
  { "id": "mvdo10analcream", "title": "Open Air Anal Creampie", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["anal", "doğa", "boşalma"], "desc": "Açık havada, arkasındayken içine boşalırsın; eteğini indirip \"yürürken hissedeceğim\" der", "color": "#5f8bff", "emojis": "🌳💦", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }] },
  { "id": "mvrs01tablebj", "title": "Under the Table Blowjob", "cat": "c:mvrestaurant01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["oral", "restoran"], "desc": "Uzun masa örtüsünün altına kayıyor; sen garsona yüzün hiç bozulmadan sipariş veriyorsun", "color": "#4a4e69", "emojis": "🍽️👄", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 5 }, { "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvrs02sink", "title": "Restroom Sink Doggy", "cat": "c:mvrestaurant01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "restoran"], "desc": "Restoranın tuvaletinde lavaboya tutunup eğiliyor, sen arkadan; aynada kırmızı rujunu izliyor", "color": "#ff5f5f", "emojis": "🚻🍑", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 5 }, { "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvrs03booth", "title": "Booth Side Ride", "cat": "c:mvrestaurant01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "restoran"], "desc": "Köşedeki loca koltuğunda yan yana; eteğini toplayıp kucağına kayıyor, mumlar titriyor", "color": "#ff5f5f", "emojis": "🕯️🔥", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 5 }, { "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvrs04backdoor", "title": "Kitchen Back Door Standing", "cat": "c:mvrestaurant01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "restoran"], "desc": "Mutfağın arka kapısının önünde, ara sokakta duvara yaslanıyor; içeriden tabak sesleri geliyor", "color": "#ff5f5f", "emojis": "🚪🔥", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 5 }, { "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvrs05anal", "title": "Restroom Anal", "cat": "c:mvrestaurant01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["anal", "restoran"], "desc": "Kabinin kapısına yüzünü dayamış, elbisesi belinde; \"tatlıdan önce\" diye gülüyor", "color": "#ff8a65", "emojis": "🚻🍑", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvrs06dessert", "title": "Dessert Facial", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["oral", "restoran", "boşalma"], "desc": "Masanın altında yüzüne boşalırsın; peçeteyle silip yukarı çıkıyor, \"tatlıyı iptal et\" der", "color": "#5f8bff", "emojis": "🍰💦", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }] },
  { "id": "mvrs07cream", "title": "Restroom Creampie", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "restoran", "boşalma"], "desc": "Lavabonun önünde içine boşalırsın; rujunu tazeleyip masaya dönerken \"hesabı sen ödüyorsun\" der (korunmaya göre hamilelik ihtimali)", "color": "#5f8bff", "emojis": "🚻💦", "outcomes": [{ "id": "mvrs07preg", "text": "{ben} hamile kaldı", "pct": 50, "next": "", "effects": [{ "p": "f:hamile", "d": 1 }], "conds": [{ "k": "not", "ev": "mvh1h70jral7v" }] }], "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:umvjof3wzh5hej", "d": -30 }] },
  { "id": "mvrt01railing", "title": "Railing Bent Over", "cat": "c:mvrooftop01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "çatı"], "desc": "Korkuluğa tutunup eğiliyor, sen arkadan; aşağıda şehrin ışıkları, rüzgâr eteğini kaldırıyor", "color": "#ff5f5f", "emojis": "🌃🍑", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 5 }, { "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvrt02citylights", "title": "City Lights Standing", "cat": "c:mvrooftop01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "çatı"], "desc": "Yüz yüze ayaktasınız, sırtı su deposunun duvarında; omzunun üstünden bütün şehir görünüyor", "color": "#ff5f5f", "emojis": "🏙️🔥", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvrt03stargaze", "title": "Star Gazing Cowgirl", "cat": "c:mvrooftop01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "çatı"], "desc": "Battaniyenin üstünde sırtüstü uzanmışsın, o üstünde; başının arkasında yıldızlar, saçları ayı örtüyor", "color": "#ff5f5f", "emojis": "✨🔥", "onEffects": [{ "p": "p:samimiyet", "d": 2 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvrt04ledge", "title": "Ledge Lift", "cat": "c:mvrooftop01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "çatı"], "desc": "Onu alçak duvarın üstüne oturtuyorsun, bacakları belinde; arkasında boşluk, sana sımsıkı sarılıyor", "color": "#ff5f5f", "emojis": "🧱🔥", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 5 }, { "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvrt05lounge", "title": "Lounge Chair Missionary", "cat": "c:mvrooftop01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "çatı"], "desc": "Terastaki şezlonga uzanmış, saksıların arasında; komşu binanın pencereleri karanlık, biri hariç", "color": "#ff5f5f", "emojis": "🪴🔥", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 5 }, { "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvrt06anal", "title": "Rooftop Anal", "cat": "c:mvrooftop01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["anal", "çatı"], "desc": "Bacasının yanında ellerini duvara dayamış, kalçası gece havasında; \"yavaş, burası çok yüksek\" diye gülüyor", "color": "#ff8a65", "emojis": "🌙🍑", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 5 }, { "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvrt07bj", "title": "Skyline Blowjob", "cat": "c:mvrooftop01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["oral", "çatı"], "desc": "Sen korkuluğa yaslanmış şehre bakıyorsun, o önünde diz çökmüş; neon tabelalar yüzüne renk renk vuruyor", "color": "#4a4e69", "emojis": "🌆👄", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvrt08cream", "title": "Skyline Creampie", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "çatı", "boşalma"], "desc": "Şehrin ışıklarına karşı içine boşalırsın; korkuluğa yaslanıp \"bütün şehir duydu\" der (korunmaya göre hamilelik ihtimali)", "color": "#5f8bff", "emojis": "🌃💦", "outcomes": [{ "id": "mvrt08preg", "text": "{ben} hamile kaldı", "pct": 50, "next": "", "effects": [{ "p": "f:hamile", "d": 1 }], "conds": [{ "k": "not", "ev": "mvh1h70jral7v" }] }], "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:umvjof3wzh5hej", "d": -30 }] },
  { "id": "mvrt09tits", "title": "City Lights Cumshot", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["göğüs", "çatı", "boşalma"], "desc": "Son anda çıkıp göğüslerine boşalırsın; ay ışığında parlıyor, gece rüzgârı tenini ürpertiyor", "color": "#5f8bff", "emojis": "🌙💦", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }] },
  { "id": "mvrt10facial", "title": "Rooftop Facial", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["oral", "çatı", "boşalma"], "desc": "Diz çökmüş, arkasında şehir; yüzüne boşalırsın, neon ışıkta parlıyor, \"manzara güzel\" der", "color": "#5f8bff", "emojis": "🏙️💦", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }] },
  { "id": "mvlb01shelves", "title": "Between the Shelves Standing", "cat": "c:mvlibrary01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "kitap"], "desc": "İki raf arasında kitaplara yaslanıyor, bacağı belinde; kitaplar her vuruşta biraz daha kayıyor", "color": "#ff5f5f", "emojis": "📚🔥", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 5 }, { "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvlb02table", "title": "Reading Table Bent Over", "cat": "c:mvlibrary01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "kitap"], "desc": "Okuma masasının yeşil lambası altında masaya eğiliyor, sen arkadan; açık kitabın sayfaları buruşuyor", "color": "#ff5f5f", "emojis": "📖🍑", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 5 }, { "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvlb03ladder", "title": "Ladder Hold", "cat": "c:mvlibrary01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "kitap"], "desc": "Raf merdiveninin basamağında, en üst rafa uzanırken; sen aşağıdan kalçasını tutup ona yetişiyorsun", "color": "#ff5f5f", "emojis": "🪜🔥", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvlb04gallery", "title": "Gallery Bench Ride", "cat": "c:mvlibrary01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "kitap"], "desc": "Boş sergi salonunda tablonun karşısındaki bankta kucağında; bekçinin ayak sesleri öbür salonda", "color": "#ff5f5f", "emojis": "🖼️🔥", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 5 }, { "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvlb05anal", "title": "Quiet Corner Anal", "cat": "c:mvlibrary01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["anal", "kitap"], "desc": "En arkadaki tozlu köşede rafa tutunmuş, eteği belinde; dudağını ısırıp sesini yutuyor", "color": "#ff8a65", "emojis": "🤫🍑", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 5 }, { "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvlb06bj", "title": "Silent Blowjob", "cat": "c:mvlibrary01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["oral", "kitap"], "desc": "Masanın altında diz çöküyor; sen kitabı okuyormuş gibi yapıyorsun, \"sessiz olun\" tabelası tam karşında", "color": "#4a4e69", "emojis": "🤫👄", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 5 }, { "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvlb07cream", "title": "Quiet Creampie", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "kitap", "boşalma"], "desc": "Rafların arasında sessizce içine boşalırsın; ağzını elinle kapatmışsın, \"şşş\" diye güler (korunmaya göre hamilelik ihtimali)", "color": "#5f8bff", "emojis": "📚💦", "outcomes": [{ "id": "mvlb07preg", "text": "{ben} hamile kaldı", "pct": 50, "next": "", "effects": [{ "p": "f:hamile", "d": 1 }], "conds": [{ "k": "not", "ev": "mvh1h70jral7v" }] }], "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:umvjof3wzh5hej", "d": -30 }] },
  { "id": "mvlb08facial", "title": "Page Facial", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["oral", "kitap", "boşalma"], "desc": "Masanın altında yüzüne boşalırsın; bir damla açık kitabın sayfasına düşer, \"bunu iade edemeyiz\" der", "color": "#5f8bff", "emojis": "📖💦", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }] },
  { "id": "mvfr01ferris", "title": "Ferris Wheel Ride", "cat": "c:mvfair01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "lunapark"], "desc": "Dönme dolabın kabini tepede durdu; kucağına oturuyor, kabin her hareketinizde sallanıyor", "color": "#ff5f5f", "emojis": "🎡🔥", "onEffects": [{ "p": "p:samimiyet", "d": 2 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvfr02tunnel", "title": "Tunnel of Love Lap", "cat": "c:mvfair01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "lunapark"], "desc": "Aşk tünelinin karanlığında kayığın içinde kucağında; çıkışa kadar üç dakikanız var", "color": "#ff5f5f", "emojis": "💘🔥", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 5 }, { "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvfr03ghost", "title": "Ghost Train Doggy", "cat": "c:mvfair01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "lunapark"], "desc": "Korku tünelinin vagonunda öne eğiliyor, sen arkadan; iskeletler fırlayınca çığlığı inlemesine karışıyor", "color": "#ff5f5f", "emojis": "👻🍑", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 5 }, { "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvfr04anal", "title": "Behind the Stalls Anal", "cat": "c:mvfair01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["anal", "lunapark"], "desc": "Atış poligonu tezgâhlarının arkasında jeneratöre tutunmuş; ışıklı müzik her şeyi bastırıyor", "color": "#ff8a65", "emojis": "🎪🍑", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 5 }, { "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvfr05bj", "title": "Prize Booth Blowjob", "cat": "c:mvfair01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["oral", "lunapark"], "desc": "Kapanmış hediye kulübesinin içinde, peluş ayıların arasında diz çöküyor; \"ödülümü istiyorum\" diyor", "color": "#4a4e69", "emojis": "🧸👄", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvfr06cream", "title": "Ferris Creampie", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "lunapark", "boşalma"], "desc": "Dolap tam tepedeyken içine boşalırsın; kabin inmeye başlarken \"bir tur daha\" der (korunmaya göre hamilelik ihtimali)", "color": "#5f8bff", "emojis": "🎡💦", "outcomes": [{ "id": "mvfr06preg", "text": "{ben} hamile kaldı", "pct": 50, "next": "", "effects": [{ "p": "f:hamile", "d": 1 }], "conds": [{ "k": "not", "ev": "mvh1h70jral7v" }] }], "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:umvjof3wzh5hej", "d": -30 }] },
  { "id": "mvfr07facial", "title": "Cotton Candy Facial", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["oral", "lunapark", "boşalma"], "desc": "Yüzüne boşalırsın; dudaklarında hâlâ pamuk şeker var, \"ikisi de yapış yapış\" diye güler", "color": "#5f8bff", "emojis": "🍭💦", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }] },
  { "id": "mvhn01bed", "title": "Dusty Bed Missionary", "cat": "c:mvhaunted01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "perili"], "desc": "Toz çarşaflı eski karyolada sırtüstü; her harekette yaylar gıcırdıyor, tavandan toz dökülüyor", "color": "#ff5f5f", "emojis": "🛏️👻", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvhn02door", "title": "Against the Old Door", "cat": "c:mvhaunted01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "perili"], "desc": "Kapanmayan eski kapıya sırtını dayamış, bacakları belinde; kapı her vuruşta kendiliğinden gıcırdıyor", "color": "#ff5f5f", "emojis": "🚪👻", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvhn03candle", "title": "Candlelit Doggy", "cat": "c:mvhaunted01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "perili"], "desc": "Tek mumun ışığında yerdeki halının üstünde dört ayak; gölgeniz duvarda dev gibi sallanıyor", "color": "#ff5f5f", "emojis": "🕯️🍑", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvhn04cellar", "title": "Cellar Stairs Ride", "cat": "c:mvhaunted01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "perili"], "desc": "Mahzen merdiveninin basamağında oturuyorsun, o kucağında; aşağıdaki karanlıktan su damlası sesi geliyor", "color": "#ff5f5f", "emojis": "🕸️🔥", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 5 }, { "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvhn05anal", "title": "Creaky Stairs Anal", "cat": "c:mvhaunted01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["anal", "perili"], "desc": "Gıcırdayan ahşap merdivende tırabzana tutunup eğiliyor; \"hayaletler bunu görmesin\" diye fısıldıyor", "color": "#ff8a65", "emojis": "🪜🍑", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvhn06bj", "title": "Ghost Story Blowjob", "cat": "c:mvhaunted01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["oral", "perili"], "desc": "Sen fenerle korku hikâyesi anlatırken önünde diz çöküyor; hikâyenin en korkunç yerinde durmuyor", "color": "#4a4e69", "emojis": "🔦👄", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvhn07cream", "title": "Midnight Creampie", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "perili", "boşalma"], "desc": "Saat tam gece yarısını çalarken içine boşalırsın; eski saatin sesiyle irkilip sana sarılır (korunmaya göre hamilelik ihtimali)", "color": "#5f8bff", "emojis": "🕛💦", "outcomes": [{ "id": "mvhn07preg", "text": "{ben} hamile kaldı", "pct": 50, "next": "", "effects": [{ "p": "f:hamile", "d": 1 }], "conds": [{ "k": "not", "ev": "mvh1h70jral7v" }] }], "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:umvjof3wzh5hej", "d": -30 }] },
  { "id": "mvhn08facial", "title": "Candlelight Facial", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["oral", "perili", "boşalma"], "desc": "Mumun titreyen ışığında yüzüne boşalırsın; tam o an mum sönüyor, karanlıkta \"bu sen miydin?\" diye güler", "color": "#5f8bff", "emojis": "🕯️💦", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }] },
  { "id": "mvns01brick", "title": "Brick Wall Standing", "cat": "c:mvstreet01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "sokak"], "desc": "Ara sokakta tuğla duvara yaslanıyor, bacağı belinde; sokak lambası titriyor, uzakta bir araba geçiyor", "color": "#ff5f5f", "emojis": "🧱🔥", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 5 }, { "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvns02rain", "title": "Rain Soaked Doggy", "cat": "c:mvstreet01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "sokak"], "desc": "Sağanakta, bir saçağın altında duvara tutunup eğiliyor; ıslak elbisesi tenine yapışmış, sen arkadan", "color": "#ff5f5f", "emojis": "🌧️🍑", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 5 }, { "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvns03doorway", "title": "Doorway Lift", "cat": "c:mvstreet01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "sokak"], "desc": "Kapalı bir dükkânın kapı girintisinde onu kaldırıyorsun; yağmur damlaları saçından yüzüne süzülüyor", "color": "#ff5f5f", "emojis": "🚪🔥", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 5 }, { "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvns04bus", "title": "Bus Stop Ride", "cat": "c:mvstreet01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "sokak"], "desc": "Boş otobüs durağının bankında kucağında, montun altında; son otobüs çoktan geçti", "color": "#ff5f5f", "emojis": "🚏🔥", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 5 }, { "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvns05anal", "title": "Streetlight Anal", "cat": "c:mvstreet01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["anal", "sokak"], "desc": "Bozuk sokak lambasının direğine tutunmuş, lamba bir yanıp bir sönüyor; her yanışta \"görecekler\" diye titriyor", "color": "#ff8a65", "emojis": "💡🍑", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 5 }, { "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvns06bj", "title": "Kneeling in the Rain", "cat": "c:mvstreet01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["oral", "sokak"], "desc": "Islak kaldırımda diz çökmüş, yağmur saçından süzülüyor; şemsiyeyi sen tutuyorsun ama ikinizi de örtmüyor", "color": "#4a4e69", "emojis": "☔👄", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvns07facial", "title": "Wet Street Facial", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["oral", "sokak", "boşalma"], "desc": "Yağmurun altında yüzüne boşalırsın; damlalar hepsini birlikte yıkayıp götürüyor, \"doğa temizledi\" der", "color": "#5f8bff", "emojis": "🌧️💦", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }] },
  { "id": "mvns08cream", "title": "Alley Creampie", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "sokak", "boşalma"], "desc": "Ara sokakta duvara yaslıyken içine boşalırsın; eteğini düzeltip koluna girer, \"hiçbir şey olmamış gibi yürü\" der (korunmaya göre hamilelik ihtimali)", "color": "#5f8bff", "emojis": "🌃💦", "outcomes": [{ "id": "mvns08preg", "text": "{ben} hamile kaldı", "pct": 50, "next": "", "effects": [{ "p": "f:hamile", "d": 1 }], "conds": [{ "k": "not", "ev": "mvh1h70jral7v" }] }], "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:umvjof3wzh5hej", "d": -30 }] },
  { "id": "mvgy30trainer", "title": "Personal Trainer – Üye", "cat": "c:mvgwj75108lqd", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["roleplay", "trainer"], "desc": "Kapanışa yarım saat var: o taytı ve düdüğüyle sert personal trainer, sen ilk dersine gelen yeni üye", "color": "#26a69a", "emojis": "🏋️📣" },
  { "id": "mvbr30barmen", "title": "Barmen – Son Müşteri", "cat": "c:mvgwj75108lqd", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["roleplay", "barmen"], "desc": "Kapanış saati, sandalyeler masalarda: o shaker'ı elinde barmen kız, sen hesabı ödemeyen son müşteri", "color": "#8e24aa", "emojis": "🍸🌙" },
  { "id": "mvof30asist", "title": "Ofis – Kişisel Asistan", "cat": "c:mvgwj75108lqd", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["roleplay", "plaza"], "desc": "Plazanın en üst katında: o her isteğine yetişen kişisel asistan, sen ajandası onun elinde olan yönetici", "color": "#5c6bc0", "emojis": "☕💼" },
  { "id": "mvof31boss", "title": "Ofis – Patroniçe", "cat": "c:mvgwj75108lqd", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["roleplay", "plaza"], "desc": "Köşe ofiste, kapı kapalı: o topuklularıyla masaya yaslanan patroniçe, sen terfi isteyen yeni çalışan", "color": "#5c6bc0", "emojis": "👠👑" },
  { "id": "mvof32muh", "title": "Ofis – Muhasebeci", "cat": "c:mvgwj75108lqd", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["roleplay", "plaza"], "desc": "Gece mesaisinde hesaplar tutmuyor: o gözlüklü, sıkı topuzlu muhasebeci, sen defterleri inceleyen denetçi", "color": "#5c6bc0", "emojis": "📊👓" },
  { "id": "mvof33ik", "title": "Ofis – İK Uzmanı", "cat": "c:mvgwj75108lqd", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["roleplay", "plaza"], "desc": "Boş mülakat odasında: o soruları sıralayan İK uzmanı, sen işi her ne pahasına olursa olsun isteyen aday", "color": "#5c6bc0", "emojis": "🗂️😏" },
  { "id": "mvsc30tip", "title": "Fakülte – Tıp", "cat": "c:mvgwj75108lqd", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["roleplay", "fakulte"], "desc": "Tıp Fakültesi'nde, boş anatomi laboratuvarında: o beyaz önlüklü anatomi hocası, sen sözlüye kalan tıp öğrencisi", "color": "#00897b", "emojis": "🩺🎓" },
  { "id": "mvsc31hukuk", "title": "Fakülte – Hukuk", "cat": "c:mvgwj75108lqd", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["roleplay", "fakulte"], "desc": "Hukuk Fakültesi'nde, boş duruşma salonunda: o ceza hukuku profesörü, sen savunmasını yapamayan öğrenci", "color": "#6d4c41", "emojis": "⚖️🎓" },
  { "id": "mvsc32sanat", "title": "Fakülte – Güzel Sanatlar", "cat": "c:mvgwj75108lqd", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["roleplay", "fakulte"], "desc": "Güzel Sanatlar Fakültesi'nde, boya kokulu atölyede: o desen hocası, sen bu akşam modelin gelmediği dersin öğrencisi", "color": "#e64a19", "emojis": "🎨🎓" },
  { "id": "mvsc33muh", "title": "Fakülte – Mühendislik", "cat": "c:mvgwj75108lqd", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["roleplay", "fakulte"], "desc": "Mühendislik Fakültesi'nde, gece yarısı robotik laboratuvarında: o projeni denetleyen hoca, sen teslim tarihini kaçıran öğrenci", "color": "#455a64", "emojis": "⚙️🎓" },
  { "id": "mvsc34edeb", "title": "Fakülte – Edebiyat", "cat": "c:mvgwj75108lqd", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["roleplay", "fakulte"], "desc": "Edebiyat Fakültesi'nde, mum ışığında seminer odasında: o aşk şiirleri okutan hoca, sen tezini yazamayan öğrenci", "color": "#8e24aa", "emojis": "📜🎓" },
  { "id": "mvsc35spor", "title": "Fakülte – Spor Bilimleri", "cat": "c:mvgwj75108lqd", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["roleplay", "fakulte"], "desc": "Spor Bilimleri Fakültesi'nde, antrenmandan sonra boş salonda: o tayt giymiş antrenör hoca, sen kondisyon sınavına kalan öğrenci", "color": "#43a047", "emojis": "🏐🎓" },

  { "id": "mvho01room", "title": "Room Service", "cat": "c:mvhotel01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["otel"], "desc": "Kapı çalınır; bornozuyla açar, garson gidince bornoz yere düşer", "color": "#bc6c25", "emojis": "🛎️😏", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 15 }, { "p": "p:sehvet", "d": 5 }, { "p": "p:samimiyet", "d": 1 }] },
  { "id": "mvho02balcony", "title": "Balcony Sex", "cat": "c:mvhotel01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "otel"], "desc": "Otel balkonunda korkuluğa tutunur, şehrin ışıkları önünde; arkadan alırsın", "color": "#ff5f5f", "emojis": "🌃🔥", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvho03mirror", "title": "Hotel Mirror", "cat": "c:mvhotel01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "otel"], "desc": "Odadaki boy aynasının karşısında ayakta; ikiniz de aynadan birbirinizi izlersiniz", "color": "#ff5f5f", "emojis": "🪞🔥", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvho04cream", "title": "Hotel Creampie", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "otel", "boşalma"], "desc": "Otel odasında içine boşalırsın (korunmaya göre hamilelik ihtimali)", "color": "#5f8bff", "emojis": "🏨💦", "outcomes": [{ "id": "mvho04preg", "text": "{ben} hamile kaldı", "pct": 50, "next": "", "effects": [{ "p": "f:hamile", "d": 1 }], "conds": [{ "k": "not", "ev": "mvh1h70jral7v" }] }], "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:umvjof3wzh5hej", "d": -30 }] },
  { "id": "mvud01top", "title": "Take Off Top", "cat": "c:mvundress01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "Üstündekini başından sıyırır; sütyeni ortaya çıkar", "color": "#e07a9a", "emojis": "👚", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 5 }] },
  { "id": "mvud02bottom", "title": "Take Off Bottom", "cat": "c:mvundress01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "Eteğini ya da pantolonunu kalçalarından yavaşça aşağı indirir", "color": "#e07a9a", "emojis": "👖", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 5 }] },
  { "id": "mvud03bra", "title": "Take Off Bra", "cat": "c:mvundress01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "Kopçayı açar, askılar omzundan kayar; göğüsleri serbest kalır", "color": "#d6587e", "emojis": "👙", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 10 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvud04panties", "title": "Take Off Panties", "cat": "c:mvundress01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "İç çamaşırını bacaklarından aşağı sıyırıp ayağıyla kenara atar", "color": "#d6587e", "emojis": "🩲", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 10 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvud05stock", "title": "Take Off Stockings", "cat": "c:mvundress01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "Çoraplarını tek tek, bacaklarını göstere göstere çıkarır", "color": "#e07a9a", "emojis": "🧦", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 5 }] },
  { "id": "mvud06under", "title": "Strip To Underwear", "cat": "c:mvundress01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "Kıyafetlerini çıkarır; üstünde sadece iç çamaşırları kalır", "color": "#e07a9a", "emojis": "🩱", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 10 }] },
  { "id": "mvud07onlystock", "title": "Only Stockings", "cat": "c:mvundress01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "Her şeyi çıkarır; üstünde sadece çorapları kalır", "color": "#d6587e", "emojis": "🦵", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 10 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvud08naked", "title": "Get Naked", "cat": "c:mvundress01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "Üstündeki her şeyi çıkarır, çırılçıplak karşında durur", "color": "#c2185b", "emojis": "🫣", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 10 }, { "p": "p:sehvet", "d": 10 }] },
  { "id": "mvud09undressher", "title": "Undress Her", "cat": "c:mvundress01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "Onu sen soyarsın: düğmeler, fermuar, kopça… parça parça", "color": "#c2185b", "emojis": "🤲", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 10 }, { "p": "p:samimiyet", "d": 1 }] },
  { "id": "mvud10strip", "title": "Striptease", "cat": "c:mvundress01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "Gözünü senden ayırmadan, dans ederek yavaş yavaş soyunur", "color": "#c2185b", "emojis": "💃", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 15 }, { "p": "p:sehvet", "d": 10 }] },
  { "id": "mvud11dressed", "title": "Get Dressed", "cat": "c:mvundress01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "Yerdeki kıyafetlerini toplayıp hepsini yeniden giyer", "color": "#8e7cc3", "emojis": "👗" },
  { "id": "mvud12topon", "title": "Put Top On", "cat": "c:mvundress01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "Sütyenini ve üstünü yeniden giyer", "color": "#8e7cc3", "emojis": "👚" },
  { "id": "mvud13bottomon", "title": "Put Bottom On", "cat": "c:mvundress01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "İç çamaşırını ve altını yeniden giyer", "color": "#8e7cc3", "emojis": "👖" },
  { "id": "mvud14underon", "title": "Put Underwear On", "cat": "c:mvundress01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "Sadece iç çamaşırlarını yeniden giyer", "color": "#8e7cc3", "emojis": "👙" },
  { "id": "mvud15unzip", "title": "Unzip Dress", "cat": "c:mvundress01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "Sırtındaki fermuarı sen açarsın, elbise ayaklarının dibine düşer", "color": "#e07a9a", "emojis": "🤏👗", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 10 }, { "p": "p:samimiyet", "d": 1 }] },
  { "id": "mvud16unbutton", "title": "Unbutton Shirt", "cat": "c:mvundress01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "Gömleğinin düğmeleri tek tek açılır, üstü omuzlarından kayar", "color": "#e07a9a", "emojis": "👔", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 5 }] },
  { "id": "mvud17skirtup", "title": "Skirt Up", "cat": "c:mvundress01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "Eteğini çıkarmaz, beline kadar sıvar", "color": "#d6587e", "emojis": "👗⬆️", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 10 }] },
  { "id": "mvud18topdown", "title": "Top Down", "cat": "c:mvundress01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "Üstünü ve sütyenini çıkarmadan aşağı çeker; göğüsleri açıkta kalır", "color": "#d6587e", "emojis": "👚⬇️", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 10 }] },
  { "id": "mvud19aside", "title": "Panties Aside", "cat": "c:mvundress01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "Külotunu çıkarmaz, parmağıyla kenara çeker", "color": "#c2185b", "emojis": "🩲👉", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 10 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvud20bratoss", "title": "Bra Toss", "cat": "c:mvundress01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "Sütyenini çıkarıp gülerek sana fırlatır", "color": "#d6587e", "emojis": "👙🫴", "onEffects": [{ "p": "p:sehvet", "d": 5 }, { "p": "p:ask", "d": 1 }] },
  { "id": "mvud21mirror", "title": "Mirror Strip", "cat": "c:mvundress01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "Aynanın önünde, aynadan gözlerine bakarak soyunur", "color": "#c2185b", "emojis": "🪞💃", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 15 }] },
  { "id": "mvud22lapstrip", "title": "Lap Strip", "cat": "c:mvundress01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "Kucağına oturur; her parçayı senin ellerin çıkarır", "color": "#c2185b", "emojis": "🪑🤲", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 15 }, { "p": "p:samimiyet", "d": 2 }] },
  { "id": "mvud23eachother", "title": "Undress Each Other", "cat": "c:mvundress01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "Karşılıklı, öpüşe öpüşe birbirinizi soyarsınız", "color": "#c2185b", "emojis": "👫🤲", "onEffects": [{ "p": "p:samimiyet", "d": 2 }, { "p": "p:ask", "d": 1 }] },
  { "id": "mvud24shy", "title": "Shy Undress", "cat": "c:mvundress01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "Işığı kapatır, örtünün altında utana utana soyunur", "color": "#8e7cc3", "emojis": "🌙🙈", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 5 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvud25braunder", "title": "Bra Under Shirt", "cat": "c:mvundress01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "Gömleği üstünde kalır; sütyenini koldan çekip çıkarır", "color": "#e07a9a", "emojis": "👔👙", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 10 }] },
  { "id": "mvud26pantunder", "title": "Panties Under Skirt", "cat": "c:mvundress01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "Eteği üstünde kalır; külotunu altından sıyırıp çıkarır", "color": "#d6587e", "emojis": "👗🩲", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 10 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvud27pocket", "title": "Pocket Panties", "cat": "c:mvundress01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "Külotunu çıkarıp senin cebine koyar: akşama kadar sende kalacak", "color": "#c2185b", "emojis": "🩲👖", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 10 }, { "p": "p:samimiyet", "d": 1 }] },
  { "id": "mvud28teeth", "title": "Teeth Strip", "cat": "c:mvundress01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "Külotunu ellerini kullanmadan, dişlerinle aşağı indirirsin", "color": "#c2185b", "emojis": "😬🩲", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 15 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvud29onehand", "title": "One-Hand Unhook", "cat": "c:mvundress01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "Sütyeninin kopçasını tek elle açmaya çalışırsın: ya açılır ya da o gülmeye başlar", "color": "#e07a9a", "emojis": "🤏👙", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:umvjzd17hys1oy", "d": 5 }] },
  { "id": "mvud30tear", "title": "Tear Off Panties", "cat": "c:mvundress01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "Sabırsızlıkla külotunu yırtarsın; bu sohbette yeniden giyemez", "color": "#b71c1c", "emojis": "💥🩲", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 15 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvap01enter", "title": "Enters The Room", "cat": "c:mvatplace01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "Odaya girer, kapıyı arkasından yavaşça kapatır; gözü sende", "color": "#4f9d8f", "emojis": "🚪", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 5 }] },
  { "id": "mvap02desk", "title": "Lies On The Desk", "cat": "c:mvatplace01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "Masadaki her şeyi kenara iter, sırtüstü masaya uzanır", "color": "#4f9d8f", "emojis": "🖥️", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 10 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvap03bed", "title": "Falls On The Bed", "cat": "c:mvatplace01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "Seni de çekerek kendini yatağa bırakır; çarşaflar dağılır", "color": "#4f9d8f", "emojis": "🛏️", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 5 }, { "p": "p:samimiyet", "d": 1 }] },
  { "id": "mvap04counter", "title": "Sits On The Counter", "cat": "c:mvatplace01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "Tezgaha zıplayıp oturur, bacaklarını açıp seni arasına çeker", "color": "#4f9d8f", "emojis": "🍳", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 10 }] },
  { "id": "mvap05sofa", "title": "Pulls You To The Sofa", "cat": "c:mvatplace01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "Elinden tutup seni kanepeye çeker, kucağına yerleşir", "color": "#4f9d8f", "emojis": "🛋️", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 5 }, { "p": "p:samimiyet", "d": 1 }] },
  { "id": "mvap06wall", "title": "Pinned To The Wall", "cat": "c:mvatplace01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "Onu duvara yaslarsın; bilekleri başının üstünde, nefesi hızlanır", "color": "#3d7f73", "emojis": "🧱", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 10 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvap07mirror", "title": "In Front Of The Mirror", "cat": "c:mvatplace01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "Aynanın önünde durur; arkasına geçersin, aynadan göz göze", "color": "#3d7f73", "emojis": "🪞", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 10 }] },
  { "id": "mvap08window", "title": "At The Window", "cat": "c:mvatplace01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "Ellerini cama dayar, şehrin ışıklarına bakar; dışarıdan görülebilirsiniz", "color": "#3d7f73", "emojis": "🪟", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 10 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvap09fire", "title": "By The Fireplace", "cat": "c:mvatplace01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "Şöminenin önündeki halıya uzanır; teni ateşin ışığında parlar", "color": "#4f9d8f", "emojis": "🔥", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 5 }, { "p": "p:ask", "d": 1 }] },
  { "id": "mvap10backseat", "title": "Climbs Into The Back Seat", "cat": "c:mvatplace01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "Koltukların arasından arkaya geçer, sana el eder; camlar buğulanmaya başlar", "color": "#4f9d8f", "emojis": "🚗", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 10 }] },
  { "id": "mvap11tent", "title": "Crawls Into The Tent", "cat": "c:mvatplace01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "Çadıra emekleyerek girer, uyku tulumunu açıp yanına yer gösterir", "color": "#4f9d8f", "emojis": "⛺", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 5 }, { "p": "p:samimiyet", "d": 1 }] },
  { "id": "mvap12sand", "title": "Lies On The Sand", "cat": "c:mvatplace01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "Havlusunu kumun üstüne serip uzanır; dalgalar ayağına kadar gelir", "color": "#4f9d8f", "emojis": "🏖️", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 5 }] },
  { "id": "mvap13shower", "title": "Turns On The Shower", "cat": "c:mvatplace01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "Suyu açar, buhar yükselir; seni de içeri davet eder", "color": "#4f9d8f", "emojis": "🚿", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 5 }] },
  { "id": "mvap14table", "title": "Clears The Table", "cat": "c:mvatplace01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "Tabakları kenara iter, masanın üstüne oturur", "color": "#3d7f73", "emojis": "🍽️", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 10 }] },
  { "id": "mvap15lock", "title": "Locks The Door", "cat": "c:mvatplace01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "Kapıyı kilitler, anahtarı cebine atar; artık kimse giremez", "color": "#3d7f73", "emojis": "🔒", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 5 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvap16curtain", "title": "Pulls The Curtain", "cat": "c:mvatplace01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "Kabinin perdesini çeker, seni de içeri alır; dışarıda insanlar dolaşıyor", "color": "#3d7f73", "emojis": "🛍️", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 10 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvap17bar", "title": "Leans On The Bar", "cat": "c:mvatplace01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "Bara yaslanır, kadehini dudağına götürüp sana bakar", "color": "#3d7f73", "emojis": "🍸", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 5 }] },
  { "id": "mvap18backrow", "title": "Back Row", "cat": "c:mvatplace01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "En arka sırada, ışıklar sönünce elini dizine koyar", "color": "#3d7f73", "emojis": "🎬", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 10 }] },
  { "id": "mvpe01wetfan", "title": "Islak Fantezi", "cat": "c:mvpee01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["iseme"], "desc": "Çişini yapar; ıslak fantezi", "color": "#e0b100", "emojis": "💦😳", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 15 }, { "p": "p:sehvet", "d": 10 }, { "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvpe02golden", "title": "Golden Shower", "cat": "c:mvpee01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["iseme"], "desc": "Sen istersin, o da üzerine işer; gözünü senden ayırmaz", "color": "#e0b100", "emojis": "🚿💛", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 15 }, { "p": "p:sehvet", "d": 10 }, { "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvpe03peeher", "title": "Pee On Her", "cat": "c:mvpee01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["iseme"], "desc": "Kendi isteğiyle önünde diz çöker, sen de üzerine işersin", "color": "#c99700", "emojis": "🧎‍♀️💦", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 15 }, { "p": "p:sehvet", "d": 10 }, { "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvpe04shower", "title": "Shower Pee", "cat": "c:mvpee01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["iseme"], "desc": "Duşta, suyun altında birbirinizin üzerine işersiniz", "color": "#e0b100", "emojis": "🚿💦", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 15 }, { "p": "p:sehvet", "d": 10 }, { "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvpe05panties", "title": "Wet Panties", "cat": "c:mvpee01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["iseme"], "desc": "Seninle göz göze, külotunu çıkarmadan bilerek altına işer", "color": "#c99700", "emojis": "🩲💦", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 15 }, { "p": "p:sehvet", "d": 10 }, { "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvpe07hotdog", "title": "Hotdogging Pee", "cat": "c:mvpee01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["iseme"], "desc": "Kalçalarını sıkıştırır, onun isteğiyle yanaklarının arasına işersin", "color": "#c99700", "emojis": "🌭💦", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 15 }, { "p": "p:sehvet", "d": 10 }, { "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvpe06watch", "title": "Watching Her Pee", "cat": "c:mvpee01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["iseme"], "desc": "Kapıyı açık bırakır; işerken onu izlemene izin verir", "color": "#c99700", "emojis": "🚪👀", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 15 }, { "p": "p:sehvet", "d": 10 }, { "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  {
   "id": "mvgkvtgs4970g",
   "title": "Kissing",
   "cat": "c:mvgm5g7q1xopl",
   "text": "",
   "steps": [],
   "opener": "",
   "starter": "",
   "tones": [],
   "note": "",
   "part": "",
   "when": "",
   "place": "",
   "mix": [],
   "tags": [
    "ön_sevişme"
   ],
   "color": "#ff6fa8",
   "emojis": "💋💞",
   "onEffects": [
    {
     "p": "p:guven",
     "d": 1
    },
    {
     "p": "p:ask",
     "d": 5
    },
    {
     "p": "p:samimiyet",
     "d": 4
    }
   ]
  },
  {
   "id": "mvgkvy3u008hc",
   "title": "Missionary",
   "cat": "c:mvglvwdtam0h7",
   "text": "",
   "steps": [],
   "opener": "",
   "starter": "",
   "tones": [],
   "note": "",
   "part": "",
   "when": "",
   "place": "",
   "mix": [],
   "tags": [
    "penetrasyon",
    "vajinal"
   ],
   "color": "#ff5f5f",
   "emojis": "🔥💏",
   "base": "b:extra:Missionary",
   "onEffects": [
    {
     "p": "p:samimiyet",
     "d": 1
    },
    {
     "p": "p:guven",
     "d": 1
    }
   ]
  },
  {
   "id": "mvglz4rsqnt81",
   "title": "Nothing",
   "cat": "c:mvglyw2ax79uj",
   "text": "",
   "steps": [],
   "opener": "",
   "starter": "",
   "tones": [],
   "note": "",
   "part": "",
   "when": "",
   "place": "",
   "mix": [],
   "tags": [],
   "desc": "",
   "color": "#8b8b99",
   "emojis": "❌"
  },
  {
   "id": "mvgm2puicwzpe",
   "title": "Pull-Out Method",
   "cat": "c:mvglyw2ax79uj",
   "text": "",
   "steps": [],
   "opener": "",
   "starter": "",
   "tones": [],
   "note": "",
   "part": "",
   "when": "",
   "place": "",
   "mix": [],
   "tags": [],
   "desc": "",
   "color": "#ff8a65",
   "emojis": "😫"
  },
  {
   "id": "mvgm31460f6iq",
   "title": "Morning-After Pill",
   "cat": "c:mvglyw2ax79uj",
   "text": "",
   "steps": [],
   "opener": "",
   "starter": "",
   "tones": [],
   "note": "",
   "part": "",
   "when": "",
   "place": "",
   "mix": [],
   "tags": [],
   "desc": "",
   "color": "#8b8b99",
   "emojis": "💊☀️",
   "level": "",
   "outcomes": [
    {
     "id": "mvjk8ug6s123d",
     "text": "Düştü",
     "pct": 85,
     "next": "",
     "effects": [
      {
       "p": "f:hamile",
       "d": -1
      }
     ]
    }
   ],
   "subs": [],
   "sub": ""
  },
  {
   "id": "mvgm3n600ricr",
   "title": "Cowgirl",
   "cat": "c:mvglvwdtam0h7",
   "text": "",
   "steps": [],
   "opener": "",
   "starter": "",
   "tones": [],
   "note": "",
   "part": "",
   "when": "",
   "place": "",
   "mix": [],
   "tags": [
    "vajinal"
   ],
   "desc": "",
   "base": "b:extra:Cowgirl",
   "color": "#ff5f5f",
   "emojis": "🔥",
   "onEffects": [
    {
     "p": "p:samimiyet",
     "d": 1
    },
    {
     "p": "p:guven",
     "d": 1
    }
   ]
  },
  {
   "id": "mvgm3rau8do5q",
   "title": "Ondesk",
   "cat": "c:mvglvwdtam0h7",
   "text": "",
   "steps": [],
   "opener": "",
   "starter": "",
   "tones": [],
   "note": "",
   "part": "",
   "when": "",
   "place": "",
   "mix": [],
   "tags": [
    "vajinal"
   ],
   "desc": "",
   "base": "b:extra:Ondesk",
   "color": "#ff5f5f",
   "emojis": "🔥",
   "level": "",
   "outcomes": [],
   "subs": [],
   "sub": "",
   "onEffects": [
    {
     "p": "p:samimiyet",
     "d": 1
    },
    {
     "p": "p:guven",
     "d": 1
    }
   ]
  },
  {
   "id": "mvgm4iruwu659",
   "title": "Full Nelson",
   "cat": "c:mvglvwdtam0h7",
   "text": "",
   "steps": [],
   "opener": "",
   "starter": "",
   "tones": [],
   "note": "",
   "part": "",
   "when": "",
   "place": "",
   "mix": [],
   "tags": [
    "vajinal"
   ],
   "desc": "",
   "base": "b:extra:Full Nelson",
   "color": "#ff5f5f",
   "emojis": "🔥",
   "onEffects": [
    {
     "p": "p:samimiyet",
     "d": 1
    },
    {
     "p": "p:guven",
     "d": 1
    }
   ]
  },
  {
   "id": "mvgm7k1qvkwtd",
   "title": "Doggy",
   "cat": "c:mvglvwdtam0h7",
   "text": "",
   "steps": [],
   "opener": "",
   "starter": "",
   "tones": [],
   "note": "",
   "part": "",
   "when": "",
   "place": "",
   "mix": [],
   "tags": [
    "vajinal"
   ],
   "desc": "",
   "base": "b:extra:Doggy",
   "color": "#ff5f5f",
   "emojis": "🔥🍑",
   "onEffects": [
    {
     "p": "p:samimiyet",
     "d": 1
    },
    {
     "p": "p:guven",
     "d": 1
    }
   ]
  },
  {
   "id": "mvgm83nsm79yh",
   "title": "Back Hugging",
   "cat": "c:mvgm5g7q1xopl",
   "text": "",
   "steps": [],
   "opener": "",
   "starter": "",
   "tones": [],
   "note": "",
   "part": "",
   "when": "",
   "place": "",
   "mix": [],
   "tags": [],
   "desc": "",
   "color": "#ff6fa8",
   "emojis": "💞🍑",
   "onEffects": [
    {
     "p": "p:guven",
     "d": 1
    },
    {
     "p": "p:ask",
     "d": 5
    },
    {
     "p": "p:samimiyet",
     "d": 4
    }
   ]
  },
  {
   "id": "mvgm8lhd7fl09",
   "title": "Front Hugging",
   "cat": "c:mvgm5g7q1xopl",
   "text": "",
   "steps": [],
   "opener": "",
   "starter": "",
   "tones": [],
   "note": "",
   "part": "",
   "when": "",
   "place": "",
   "mix": [],
   "tags": [],
   "desc": "",
   "color": "#ff6fa8",
   "emojis": "💞💋",
   "onEffects": [
    {
     "p": "p:guven",
     "d": 1
    },
    {
     "p": "p:ask",
     "d": 5
    },
    {
     "p": "p:samimiyet",
     "d": 4
    }
   ]
  },
  {
   "id": "mvgm9qa6qmzyp",
   "title": "Cowgirl Anal",
   "cat": "c:mvgm9ihwda8f5",
   "text": "",
   "steps": [],
   "opener": "",
   "starter": "",
   "tones": [],
   "note": "",
   "part": "",
   "when": "",
   "place": "",
   "mix": [],
   "tags": [
    "anal"
   ],
   "desc": "",
   "base": "b:extra:Anal",
   "color": "#ff8a65",
   "emojis": "🍑",
   "onEffects": [
    {
     "p": "p:samimiyet",
     "d": 1
    },
    {
     "p": "p:guven",
     "d": 1
    }
   ]
  },
  {
   "id": "mvgmad7eeli38",
   "title": "Standing Anal",
   "cat": "c:mvgm9ihwda8f5",
   "text": "",
   "steps": [],
   "opener": "",
   "starter": "",
   "tones": [],
   "note": "",
   "part": "",
   "when": "",
   "place": "",
   "mix": [],
   "tags": [
    "anal"
   ],
   "desc": "",
   "color": "#ff5f5f",
   "emojis": "🍑",
   "onEffects": [
    {
     "p": "p:samimiyet",
     "d": 1
    },
    {
     "p": "p:guven",
     "d": 1
    }
   ]
  },
  {
   "id": "mvgmeoej9bt44",
   "title": "Rough Anal",
   "cat": "c:mvgm9ihwda8f5",
   "text": "",
   "steps": [],
   "opener": "",
   "starter": "",
   "tones": [],
   "note": "",
   "part": "",
   "when": "",
   "place": "",
   "mix": [],
   "tags": [
    "anal"
   ],
   "desc": "",
   "color": "#ff5f5f",
   "emojis": "🍑🔥",
   "onEffects": [
    {
     "p": "p:samimiyet",
     "d": 1
    },
    {
     "p": "p:guven",
     "d": 1
    }
   ]
  },
  {
   "id": "mvgmfjwle8osk",
   "title": "Show Tits",
   "cat": "c:mvgm5g7q1xopl",
   "text": "",
   "steps": [],
   "opener": "",
   "starter": "",
   "tones": [],
   "note": "",
   "part": "",
   "when": "",
   "place": "",
   "mix": [],
   "tags": [],
   "desc": "",
   "color": "#5f8bff",
   "emojis": "🤩🍒",
   "onEffects": [
    {
     "p": "p:guven",
     "d": 1
    },
    {
     "p": "p:ask",
     "d": 5
    },
    {
     "p": "p:samimiyet",
     "d": 4
    }
   ]
  },
  {
   "id": "mvgmgauadwb9f",
   "title": "Show Ass",
   "cat": "c:mvgm5g7q1xopl",
   "text": "",
   "steps": [],
   "opener": "",
   "starter": "",
   "tones": [],
   "note": "",
   "part": "",
   "when": "",
   "place": "",
   "mix": [],
   "tags": [],
   "desc": "",
   "color": "#5f8bff",
   "emojis": "🤩🍑",
   "onEffects": [
    {
     "p": "p:guven",
     "d": 1
    },
    {
     "p": "p:ask",
     "d": 5
    },
    {
     "p": "p:samimiyet",
     "d": 4
    }
   ]
  },
  {
   "id": "mvgn330iuerl9",
   "title": "Footjob",
   "cat": "c:mvgn2ubfw2eoh",
   "text": "",
   "steps": [],
   "opener": "",
   "starter": "",
   "tones": [],
   "note": "",
   "part": "",
   "when": "",
   "place": "",
   "mix": [],
   "tags": [
    "bacak"
   ],
   "desc": "",
   "color": "#c86bff",
   "emojis": "🔥",
   "base": "b:extra:Footjob",
   "onEffects": [
    {
     "p": "p:samimiyet",
     "d": 1
    },
    {
     "p": "p:guven",
     "d": 1
    }
   ]
  },
  {
   "id": "mvgn38xheahr0",
   "title": "Handjob",
   "cat": "c:mvgn2ubfw2eoh",
   "text": "",
   "steps": [],
   "opener": "",
   "starter": "",
   "tones": [],
   "note": "",
   "part": "",
   "when": "",
   "place": "",
   "mix": [],
   "tags": [
    "el"
   ],
   "desc": "",
   "color": "#c86bff",
   "emojis": "✋🏻",
   "base": "b:extra:Handjob",
   "onEffects": [
    {
     "p": "p:samimiyet",
     "d": 1
    },
    {
     "p": "p:guven",
     "d": 1
    }
   ]
  },
  {
   "id": "mvgn3kogq16sz",
   "title": "Titfuck",
   "cat": "c:mvgn2ubfw2eoh",
   "text": "",
   "steps": [],
   "opener": "",
   "starter": "",
   "tones": [],
   "note": "",
   "part": "",
   "when": "",
   "place": "",
   "mix": [],
   "tags": [
    "göğüs"
   ],
   "desc": "",
   "color": "#c86bff",
   "emojis": "🍒",
   "base": "b:extra:Titfuck",
   "onEffects": [
    {
     "p": "p:samimiyet",
     "d": 1
    },
    {
     "p": "p:guven",
     "d": 1
    }
   ]
  },
  {
   "id": "mvgn3ueunf4m8",
   "title": "Buttjob",
   "cat": "c:mvgn2ubfw2eoh",
   "text": "",
   "steps": [],
   "opener": "",
   "starter": "",
   "tones": [],
   "note": "",
   "part": "",
   "when": "",
   "place": "",
   "mix": [],
   "tags": [
    "kalça"
   ],
   "desc": "",
   "color": "#c86bff",
   "emojis": "🍑",
   "base": "b:extra:Buttjob",
   "onEffects": [
    {
     "p": "p:samimiyet",
     "d": 1
    },
    {
     "p": "p:guven",
     "d": 1
    }
   ]
  },
  {
   "id": "mvgn435quw76j",
   "title": "Blowjob",
   "cat": "c:mvgn2ubfw2eoh",
   "text": "",
   "steps": [],
   "opener": "",
   "starter": "",
   "tones": [],
   "note": "",
   "part": "",
   "when": "",
   "place": "",
   "mix": [],
   "tags": [
    "oral"
   ],
   "desc": "",
   "color": "#c86bff",
   "emojis": "🔥😮",
   "base": "b:extra:Blowjob",
   "onEffects": [
    {
     "p": "p:samimiyet",
     "d": 1
    },
    {
     "p": "p:guven",
     "d": 1
    }
   ]
  },
  {
   "id": "mvgn4n99fqpqs",
   "title": "69",
   "cat": "c:mvgn2ubfw2eoh",
   "text": "",
   "steps": [],
   "opener": "",
   "starter": "",
   "tones": [],
   "note": "",
   "part": "",
   "when": "",
   "place": "",
   "mix": [],
   "tags": [
    "oral"
   ],
   "desc": "",
   "color": "#c86bff",
   "emojis": "👅",
   "base": "b:extra:69",
   "onEffects": [
    {
     "p": "p:samimiyet",
     "d": 1
    },
    {
     "p": "p:guven",
     "d": 1
    }
   ]
  },
  {
   "id": "mvgtcglt4wyr9",
   "title": "Oral Sex",
   "cat": "c:mvgn2ubfw2eoh",
   "text": "",
   "steps": [],
   "opener": "",
   "starter": "",
   "tones": [],
   "note": "",
   "part": "",
   "when": "",
   "place": "",
   "mix": [],
   "tags": [
    "oral"
   ],
   "desc": "",
   "color": "#c86bff",
   "emojis": "😮",
   "base": "b:extra:Oral Sex",
   "onEffects": [
    {
     "p": "p:samimiyet",
     "d": 1
    },
    {
     "p": "p:guven",
     "d": 1
    }
   ]
  },
  {
   "id": "mvgtgk480xv5l",
   "title": "Cunnilingus",
   "cat": "c:mvgtgdbp6e8xv",
   "text": "",
   "steps": [],
   "opener": "",
   "starter": "",
   "tones": [],
   "note": "",
   "part": "",
   "when": "",
   "place": "",
   "mix": [],
   "tags": [],
   "desc": "",
   "color": "#ff5f5f",
   "emojis": "👅",
   "base": "b:extra:Cunnilingus",
   "onEffects": [
    {
     "p": "p:umvjzd17hys1oy",
     "d": 25
    },
    {
     "p": "p:sehvet",
     "d": 10
    },
    {
     "p": "p:samimiyet",
     "d": 1
    },
    {
     "p": "p:guven",
     "d": 1
    }
   ]
  },
  {
   "id": "mvgtgu2y894f9",
   "title": "Deepthroat",
   "cat": "c:mvgn2ubfw2eoh",
   "text": "",
   "steps": [],
   "opener": "",
   "starter": "",
   "tones": [],
   "note": "",
   "part": "",
   "when": "",
   "place": "",
   "mix": [],
   "tags": [
    "oral"
   ],
   "desc": "",
   "color": "#c86bff",
   "emojis": "🔥😮",
   "base": "b:extra:Deepthroat",
   "onEffects": [
    {
     "p": "p:samimiyet",
     "d": 1
    },
    {
     "p": "p:guven",
     "d": 1
    }
   ]
  },
  {
   "id": "mvgth2g0puosh",
   "title": "Squirt",
   "cat": "c:mvgtgdbp6e8xv",
   "text": "",
   "steps": [],
   "opener": "",
   "starter": "",
   "tones": [],
   "note": "",
   "part": "",
   "when": "",
   "place": "",
   "mix": [],
   "tags": [],
   "desc": "",
   "color": "#5f8bff",
   "emojis": "👅💦",
   "base": "b:extra:Squirt",
   "onEffects": [
    {
     "p": "p:umvjzd17hys1oy",
     "d": 40
    },
    {
     "p": "p:sehvet",
     "d": 10
    },
    {
     "p": "p:samimiyet",
     "d": 1
    },
    {
     "p": "p:guven",
     "d": 1
    }
   ]
  },
  {
   "id": "mvgthjlf8outn",
   "title": "On Mouth",
   "cat": "c:mvgtgdbp6e8xv",
   "text": "",
   "steps": [],
   "opener": "",
   "starter": "",
   "tones": [],
   "note": "",
   "part": "",
   "when": "",
   "place": "",
   "mix": [],
   "tags": [],
   "desc": "",
   "color": "#ff5f5f",
   "emojis": "👅",
   "onEffects": [
    {
     "p": "p:umvjzd17hys1oy",
     "d": 15
    },
    {
     "p": "p:sehvet",
     "d": 10
    },
    {
     "p": "p:samimiyet",
     "d": 1
    },
    {
     "p": "p:guven",
     "d": 1
    }
   ]
  },
  {
   "id": "mvgtiho6kigfy",
   "title": "Legjob",
   "cat": "c:mvgn2ubfw2eoh",
   "text": "",
   "steps": [],
   "opener": "",
   "starter": "",
   "tones": [],
   "note": "",
   "part": "",
   "when": "",
   "place": "",
   "mix": [],
   "tags": [
    "bacak"
   ],
   "desc": "",
   "color": "#c86bff",
   "emojis": "🍑",
   "onEffects": [
    {
     "p": "p:samimiyet",
     "d": 1
    },
    {
     "p": "p:guven",
     "d": 1
    }
   ]
  },
  {
   "id": "mvgtkrq4x8uhu",
   "title": "Facesitting",
   "cat": "c:mvgtgdbp6e8xv",
   "text": "",
   "steps": [],
   "opener": "",
   "starter": "",
   "tones": [],
   "note": "",
   "part": "",
   "when": "",
   "place": "",
   "mix": [],
   "tags": [],
   "desc": "",
   "color": "#ffb72b",
   "emojis": "🤤",
   "base": "b:extra:Facesitting",
   "onEffects": [
    {
     "p": "p:umvjzd17hys1oy",
     "d": 20
    },
    {
     "p": "p:sehvet",
     "d": 10
    },
    {
     "p": "p:samimiyet",
     "d": 1
    },
    {
     "p": "p:guven",
     "d": 1
    }
   ]
  },
  {
   "id": "mvgtp4d6qsdhd",
   "title": "Masturbation",
   "cat": "c:mvgn2ubfw2eoh",
   "text": "",
   "steps": [],
   "opener": "",
   "starter": "",
   "tones": [],
   "note": "",
   "part": "",
   "when": "",
   "place": "",
   "mix": [],
   "tags": [
    "el"
   ],
   "desc": "",
   "color": "#c86bff",
   "emojis": "✋🏻",
   "base": "b:extra:Masturbation",
   "onEffects": [
    {
     "p": "p:samimiyet",
     "d": 1
    },
    {
     "p": "p:guven",
     "d": 1
    }
   ]
  },
  {
   "id": "mvgtr1ypdfvys",
   "title": "Spooning",
   "cat": "c:mvglvwdtam0h7",
   "text": "",
   "steps": [],
   "opener": "",
   "starter": "",
   "tones": [],
   "note": "",
   "part": "",
   "when": "",
   "place": "",
   "mix": [],
   "tags": [
    "vajinal"
   ],
   "desc": "",
   "color": "#ff5f5f",
   "emojis": "🔥",
   "onEffects": [
    {
     "p": "p:samimiyet",
     "d": 1
    },
    {
     "p": "p:guven",
     "d": 1
    }
   ]
  },
  {
   "id": "mvgtrdjc30zsd",
   "title": "Spooning Anal",
   "cat": "c:mvgm9ihwda8f5",
   "text": "",
   "steps": [],
   "opener": "",
   "starter": "",
   "tones": [],
   "note": "",
   "part": "",
   "when": "",
   "place": "",
   "mix": [],
   "tags": [
    "anal"
   ],
   "desc": "",
   "color": "#ff8a65",
   "emojis": "🍑",
   "onEffects": [
    {
     "p": "p:samimiyet",
     "d": 1
    },
    {
     "p": "p:guven",
     "d": 1
    }
   ]
  },
  {
   "id": "mvgtrthg45zj1",
   "title": "Standing",
   "cat": "c:mvglvwdtam0h7",
   "text": "",
   "steps": [],
   "opener": "",
   "starter": "",
   "tones": [],
   "note": "",
   "part": "",
   "when": "",
   "place": "",
   "mix": [],
   "tags": [
    "vajinal"
   ],
   "desc": "",
   "color": "#ff5f5f",
   "emojis": "🔥",
   "onEffects": [
    {
     "p": "p:samimiyet",
     "d": 1
    },
    {
     "p": "p:guven",
     "d": 1
    }
   ]
  },
  {
   "id": "mvgttvgx6g7ss",
   "title": "Standing doggy",
   "cat": "c:mvgm9ihwda8f5",
   "text": "",
   "steps": [],
   "opener": "",
   "starter": "",
   "tones": [],
   "note": "",
   "part": "",
   "when": "",
   "place": "",
   "mix": [],
   "tags": [
    "anal"
   ],
   "desc": "",
   "color": "#ff5f5f",
   "emojis": "🍑",
   "onEffects": [
    {
     "p": "p:samimiyet",
     "d": 1
    },
    {
     "p": "p:guven",
     "d": 1
    }
   ]
  },
  {
   "id": "mvgtvhpg1479j",
   "title": "Lap Sex",
   "cat": "c:mvglvwdtam0h7",
   "text": "",
   "steps": [],
   "opener": "",
   "starter": "",
   "tones": [],
   "note": "",
   "part": "",
   "when": "",
   "place": "",
   "mix": [],
   "tags": [
    "vajinal"
   ],
   "desc": "",
   "color": "#ff5f5f",
   "emojis": "🔥",
   "onEffects": [
    {
     "p": "p:samimiyet",
     "d": 1
    },
    {
     "p": "p:guven",
     "d": 1
    }
   ]
  },
  {
   "id": "mvgtw38q47zl0",
   "title": "Lap Kissing",
   "cat": "c:mvgm5g7q1xopl",
   "text": "",
   "steps": [],
   "opener": "",
   "starter": "",
   "tones": [],
   "note": "",
   "part": "",
   "when": "",
   "place": "",
   "mix": [],
   "tags": [],
   "desc": "",
   "color": "#ff5f5f",
   "emojis": "💞🔥",
   "onEffects": [
    {
     "p": "p:guven",
     "d": 1
    },
    {
     "p": "p:ask",
     "d": 5
    },
    {
     "p": "p:samimiyet",
     "d": 4
    }
   ]
  },
  {
   "id": "mvgu0061fziue",
   "title": "Reverse Titfuck",
   "cat": "c:mvgn2ubfw2eoh",
   "text": "",
   "steps": [],
   "opener": "",
   "starter": "",
   "tones": [],
   "note": "",
   "part": "",
   "when": "",
   "place": "",
   "mix": [],
   "tags": [
    "göğüs"
   ],
   "desc": "",
   "color": "#c86bff",
   "emojis": "🍒",
   "onEffects": [
    {
     "p": "p:samimiyet",
     "d": 1
    },
    {
     "p": "p:guven",
     "d": 1
    }
   ]
  },
  {
   "id": "mvgu4y0tl5jpn",
   "title": "Vaginal Creampie",
   "cat": "c:mvgu3rsuko7km",
   "text": "",
   "steps": [],
   "opener": "",
   "starter": "",
   "tones": [],
   "note": "",
   "part": "",
   "when": "",
   "place": "",
   "mix": [],
   "tags": [
    "vajinal",
    "boşalma"
   ],
   "desc": "",
   "color": "#5f8bff",
   "emojis": "💦",
   "base": "b:extra:Creampie",
   "level": "",
   "outcomes": [
    {
     "id": "mvjixvrbsc3zl",
     "text": "{ben} hamile kaldı",
     "pct": 50,
     "next": "",
     "effects": [
      {
       "p": "f:hamile",
       "d": 1
      }
     ],
     "conds": [
      {
       "k": "not",
       "ev": "mvh1h70jral7v"
      }
     ]
    }
   ],
   "subs": [],
   "sub": "",
   "onEffects": [
    {
     "p": "p:umvjy7ucpiosps",
     "d": 1
    },
    {
     "p": "p:umvjof3wzh5hej",
     "d": -30
    }
   ]
  },
  {
   "id": "mvgu5a768360j",
   "title": "Anal Creampie",
   "cat": "c:mvgu3rsuko7km",
   "text": "",
   "steps": [],
   "opener": "",
   "starter": "",
   "tones": [],
   "note": "",
   "part": "",
   "when": "",
   "place": "",
   "mix": [],
   "tags": [
    "anal",
    "boşalma"
   ],
   "desc": "",
   "color": "#5f8bff",
   "emojis": "💦",
   "onEffects": [
    {
     "p": "p:umvjy7ucpiosps",
     "d": 1
    }
   ]
  },
  {
   "id": "mvgu6r4b1y7zl",
   "title": "Ass Cumshot",
   "cat": "c:mvgu3rsuko7km",
   "text": "",
   "steps": [],
   "opener": "",
   "starter": "",
   "tones": [],
   "note": "",
   "part": "",
   "when": "",
   "place": "",
   "mix": [],
   "tags": [
    "kalça",
    "boşalma"
   ],
   "desc": "",
   "color": "#5f8bff",
   "emojis": "💦🍑",
   "onEffects": [
    {
     "p": "p:umvjy7ucpiosps",
     "d": 1
    }
   ]
  },
  {
   "id": "mvgu7pcp4c4ss",
   "title": "Tit Cumshot",
   "cat": "c:mvgu3rsuko7km",
   "text": "",
   "steps": [],
   "opener": "",
   "starter": "",
   "tones": [],
   "note": "",
   "part": "",
   "when": "",
   "place": "",
   "mix": [],
   "tags": [
    "göğüs",
    "boşalma"
   ],
   "desc": "",
   "color": "#5f8bff",
   "emojis": "💦🍒",
   "onEffects": [
    {
     "p": "p:umvjy7ucpiosps",
     "d": 1
    }
   ]
  },
  {
   "id": "mvgu898zzawrr",
   "title": "Oral Creampie",
   "cat": "c:mvgu3rsuko7km",
   "text": "",
   "steps": [],
   "opener": "",
   "starter": "",
   "tones": [],
   "note": "",
   "part": "",
   "when": "",
   "place": "",
   "mix": [],
   "tags": [
    "oral",
    "boşalma"
   ],
   "desc": "",
   "color": "#5f8bff",
   "emojis": "💦",
   "onEffects": [
    {
     "p": "p:umvjy7ucpiosps",
     "d": 1
    }
   ]
  },
  {
   "id": "mvgue22vzkuxu",
   "title": "Face Cumming",
   "cat": "c:mvgu3rsuko7km",
   "text": "",
   "steps": [],
   "opener": "",
   "starter": "",
   "tones": [],
   "note": "",
   "part": "",
   "when": "",
   "place": "",
   "mix": [],
   "tags": [
    "oral",
    "el",
    "boşalma"
   ],
   "desc": "",
   "color": "#5f8bff",
   "emojis": "💦😮",
   "onEffects": [
    {
     "p": "p:umvjy7ucpiosps",
     "d": 1
    }
   ]
  },
  {
   "id": "mvgukoh3qem64",
   "title": "Holding",
   "cat": "c:mvgu3rsuko7km",
   "text": "",
   "steps": [],
   "opener": "",
   "starter": "",
   "tones": [],
   "note": "",
   "part": "",
   "when": "",
   "place": "",
   "mix": [],
   "tags": [],
   "desc": "",
   "color": "#ff5f5f",
   "emojis": "🔥",
   "level": "",
   "outcomes": [
    {
     "id": "mvl37yxxqrikr",
     "text": "{ben} seni durdurdu, biraz daha biriktiriyorsun 😈",
     "pct": 55,
     "next": "",
     "effects": [
      {
       "p": "p:umvjoe339asss4",
       "d": -20
      },
      {
       "p": "p:umvjof3wzh5hej",
       "d": 10
      }
     ]
    },
    {
     "id": "mvl37yxxqlbfk",
     "text": "Son anda tuttun, dölün birikiyor 💦",
     "pct": 25,
     "next": "",
     "effects": [
      {
       "p": "p:umvjoe339asss4",
       "d": -30
      },
      {
       "p": "p:umvjof3wzh5hej",
       "d": 15
      },
      {
       "p": "p:umvjy7ucpiosps",
       "d": -1
      }
     ]
    },
    {
     "id": "mvl37yxxa3pmm",
     "text": "Tutamadın… 😩",
     "pct": 20,
     "next": "",
     "effects": [
      {
       "p": "p:umvjoe339asss4",
       "d": 100
      }
     ]
    }
   ],
   "subs": [],
   "sub": "",
   "onEffects": []
  },
  {
   "id": "mvgv5570hd9os",
   "title": "Watery Cumming",
   "cat": "c:mvguxicvzx0iq",
   "text": "",
   "steps": [],
   "opener": "",
   "starter": "",
   "tones": [],
   "note": "",
   "part": "",
   "when": "",
   "place": "",
   "mix": [],
   "tags": [],
   "desc": "",
   "color": "#2fb6c7",
   "emojis": "💧"
  },
  {
   "id": "mvgv5v1k1wum9",
   "title": "Low-volume Cumming",
   "cat": "c:mvguxicvzx0iq",
   "text": "",
   "steps": [],
   "opener": "",
   "starter": "",
   "tones": [],
   "note": "",
   "part": "",
   "when": "",
   "place": "",
   "mix": [],
   "tags": [],
   "desc": "",
   "color": "#2fb6c7",
   "emojis": "💧"
  },
  {
   "id": "mvgv6hp36aiut",
   "title": "Normal Cumming",
   "cat": "c:mvguxicvzx0iq",
   "text": "",
   "steps": [],
   "opener": "",
   "starter": "",
   "tones": [],
   "note": "",
   "part": "",
   "when": "",
   "place": "",
   "mix": [],
   "tags": [],
   "desc": "",
   "color": "#2fb6c7",
   "emojis": "💧"
  },
  {
   "id": "mvgv781wh6idt",
   "title": "Thick White Cumming",
   "cat": "c:mvguxicvzx0iq",
   "text": "",
   "steps": [],
   "opener": "",
   "starter": "",
   "tones": [],
   "note": "",
   "part": "",
   "when": "",
   "place": "",
   "mix": [],
   "tags": [],
   "desc": "",
   "color": "#2fb6c7",
   "emojis": "💧"
  },
  {
   "id": "mvgv7ship92jq",
   "title": "High Sperm Cumming",
   "cat": "c:mvguxicvzx0iq",
   "text": "",
   "steps": [],
   "opener": "",
   "starter": "",
   "tones": [],
   "note": "",
   "part": "",
   "when": "",
   "place": "",
   "mix": [],
   "tags": [],
   "desc": "",
   "color": "#2fb6c7",
   "emojis": "💧"
  },
  {
   "id": "mvgv9n3cjnh4u",
   "title": "Azoospermia (0/4)",
   "cat": "c:mvguxicvzx0iq",
   "text": "",
   "steps": [],
   "opener": "",
   "starter": "",
   "tones": [],
   "note": "",
   "part": "",
   "when": "",
   "place": "",
   "mix": [],
   "tags": [],
   "desc": "",
   "color": "#c86bff",
   "emojis": "💧"
  },
  {
   "id": "mvgv9zekg688s",
   "title": "Normozoospermia (2/4)",
   "cat": "c:mvguxicvzx0iq",
   "text": "",
   "steps": [],
   "opener": "",
   "starter": "",
   "tones": [],
   "note": "",
   "part": "",
   "when": "",
   "place": "",
   "mix": [],
   "tags": [],
   "desc": "",
   "color": "#c86bff",
   "emojis": "💧"
  },
  {
   "id": "mvgvaoxk61cw9",
   "title": "Oligospermia (1/4)",
   "cat": "c:mvguxicvzx0iq",
   "text": "",
   "steps": [],
   "opener": "",
   "starter": "",
   "tones": [],
   "note": "",
   "part": "",
   "when": "",
   "place": "",
   "mix": [],
   "tags": [],
   "desc": "",
   "color": "#c86bff",
   "emojis": "💧"
  },
  {
   "id": "mvgvbsz440ofl",
   "title": "Polyzoospermia (3/4)",
   "cat": "c:mvguxicvzx0iq",
   "text": "",
   "steps": [],
   "opener": "",
   "starter": "",
   "tones": [],
   "note": "",
   "part": "",
   "when": "",
   "place": "",
   "mix": [],
   "tags": [],
   "desc": "",
   "color": "#c86bff",
   "emojis": "💧"
  },
  {
   "id": "mvgvcln6k69ve",
   "title": "Hyper-concentrated (4/4)",
   "cat": "c:mvguxicvzx0iq",
   "text": "",
   "steps": [],
   "opener": "",
   "starter": "",
   "tones": [],
   "note": "",
   "part": "",
   "when": "",
   "place": "",
   "mix": [],
   "tags": [],
   "desc": "",
   "color": "#c86bff",
   "emojis": "💧"
  },
  {
   "id": "mvgvf9kcxd2wm",
   "title": "Leg Cumshot",
   "cat": "c:mvgu3rsuko7km",
   "text": "",
   "steps": [],
   "opener": "",
   "starter": "",
   "tones": [],
   "note": "",
   "part": "",
   "when": "",
   "place": "",
   "mix": [],
   "tags": [
    "bacak",
    "boşalma"
   ],
   "desc": "",
   "color": "#5f8bff",
   "emojis": "💦",
   "onEffects": [
    {
     "p": "p:umvjy7ucpiosps",
     "d": 1
    }
   ]
  },
  {
   "id": "mvgvj450bf5mr",
   "title": "Cock Ring",
   "cat": "c:mvgu3rsuko7km",
   "text": "",
   "steps": [],
   "opener": "",
   "starter": "",
   "tones": [],
   "note": "",
   "part": "",
   "when": "",
   "place": "",
   "mix": [],
   "tags": [],
   "desc": "",
   "color": "#ff5f5f",
   "emojis": "🔥💦",
   "outcomes": [
    {
     "id": "mvl37yxx0f0df",
     "text": "Halka seni tutuyor, boşalamıyorsun 😈",
     "pct": 60,
     "next": "",
     "effects": [
      {
       "p": "p:umvjoe339asss4",
       "d": -25
      },
      {
       "p": "p:umvjof3wzh5hej",
       "d": 15
      }
     ]
    },
    {
     "id": "mvl37yxxyrq6c",
     "text": "Halka sıkıyor, her şey içinde birikiyor 💦",
     "pct": 30,
     "next": "",
     "effects": [
      {
       "p": "p:umvjoe339asss4",
       "d": -20
      },
      {
       "p": "p:umvjof3wzh5hej",
       "d": 20
      },
      {
       "p": "p:umvjy7ucpiosps",
       "d": -1
      }
     ]
    },
    {
     "id": "mvl37yxxfh286",
     "text": "Halkaya rağmen taştın… 😩",
     "pct": 10,
     "next": "",
     "effects": [
      {
       "p": "p:umvjoe339asss4",
       "d": 100
      }
     ]
    }
   ],
   "onEffects": []
  },
  {
   "id": "mvgvl5soiuah0",
   "title": "Hard Holding",
   "cat": "c:mvgu3rsuko7km",
   "text": "",
   "steps": [],
   "opener": "",
   "starter": "",
   "tones": [],
   "note": "",
   "part": "",
   "when": "",
   "place": "",
   "mix": [],
   "tags": [],
   "desc": "",
   "color": "#ff5f5f",
   "emojis": "🔥🥵",
   "level": "",
   "outcomes": [
    {
     "id": "mvl37yxxu1jms",
     "text": "{ben} seni sıkıca tuttu; geri çekildin, birikiyor 😈",
     "pct": 50,
     "next": "",
     "effects": [
      {
       "p": "p:umvjoe339asss4",
       "d": -35
      },
      {
       "p": "p:umvjof3wzh5hej",
       "d": 20
      },
      {
       "p": "p:umvjy7ucpiosps",
       "d": -1
      }
     ]
    },
    {
     "id": "mvl37yxxy84rv",
     "text": "Zor tuttun ama tuttun, döl yoğunlaşıyor 🥵",
     "pct": 35,
     "next": "",
     "effects": [
      {
       "p": "p:umvjoe339asss4",
       "d": -30
      },
      {
       "p": "p:umvjof3wzh5hej",
       "d": 25
      },
      {
       "p": "p:umvjy7ucpiosps",
       "d": -1
      }
     ]
    },
    {
     "id": "mvl37yxxw3l79",
     "text": "Bu kadar sıkıya dayanamadın… 😩",
     "pct": 15,
     "next": "",
     "effects": [
      {
       "p": "p:umvjoe339asss4",
       "d": 100
      }
     ]
    }
   ],
   "subs": [],
   "sub": "",
   "onEffects": []
  },
  {
   "id": "mvgvt82i4vp08",
   "title": "Gentle",
   "cat": "c:mvgvrcewukjlt",
   "text": "",
   "steps": [],
   "opener": "",
   "starter": "",
   "tones": [],
   "note": "",
   "part": "",
   "when": "",
   "place": "",
   "mix": [],
   "tags": [],
   "desc": "",
   "color": "#5f8bff",
   "emojis": "😇"
  },
  {
   "id": "mvgvtw4qycpem",
   "title": "Passionate",
   "cat": "c:mvgvrcewukjlt",
   "text": "",
   "steps": [],
   "opener": "",
   "starter": "",
   "tones": [],
   "note": "",
   "part": "",
   "when": "",
   "place": "",
   "mix": [],
   "tags": [],
   "desc": "",
   "color": "#ff6fa8",
   "emojis": "🥰"
  },
  {
   "id": "mvgvuqxyyz3ep",
   "title": "Assertive",
   "cat": "c:mvgvrcewukjlt",
   "text": "",
   "steps": [],
   "opener": "",
   "starter": "",
   "tones": [],
   "note": "",
   "part": "",
   "when": "",
   "place": "",
   "mix": [],
   "tags": [],
   "desc": "",
   "color": "#ff8a65",
   "emojis": "🥴"
  },
  {
   "id": "mvgvvb9ng1qyn",
   "title": "Rough",
   "cat": "c:mvgvrcewukjlt",
   "text": "",
   "steps": [],
   "opener": "",
   "starter": "",
   "tones": [],
   "note": "",
   "part": "",
   "when": "",
   "place": "",
   "mix": [],
   "tags": [],
   "desc": "",
   "color": "#ff5f5f",
   "emojis": "🥵"
  },
  {
   "id": "mvgvw7phr46in",
   "title": "Brutal",
   "cat": "c:mvgvrcewukjlt",
   "text": "",
   "steps": [],
   "opener": "",
   "starter": "",
   "tones": [],
   "note": "",
   "part": "",
   "when": "",
   "place": "",
   "mix": [],
   "tags": [],
   "desc": "",
   "color": "#c86bff",
   "emojis": "🤠"
  },
  {
   "id": "mvgw134g2c9c0",
   "title": "inletmeli",
   "cat": "c:mvgvrcewukjlt",
   "text": "",
   "steps": [],
   "opener": "",
   "starter": "",
   "tones": [],
   "note": "",
   "part": "",
   "when": "",
   "place": "",
   "mix": [],
   "tags": [],
   "desc": "",
   "color": "#ff0000",
   "emojis": "❤️‍🔥"
  },
  {
   "id": "mvgw1i8s1vuny",
   "title": "bağırtmalı",
   "cat": "c:mvgvrcewukjlt",
   "text": "",
   "steps": [],
   "opener": "",
   "starter": "",
   "tones": [],
   "note": "",
   "part": "",
   "when": "",
   "place": "",
   "mix": [],
   "tags": [],
   "desc": "",
   "color": "#ff0000",
   "emojis": "❤️‍🔥"
  },
  {
   "id": "mvgw26ypb11a5",
   "title": "ağlatmalı",
   "cat": "c:mvgvrcewukjlt",
   "text": "",
   "steps": [],
   "opener": "",
   "starter": "",
   "tones": [],
   "note": "",
   "part": "",
   "when": "",
   "place": "",
   "mix": [],
   "tags": [],
   "desc": "",
   "color": "#ff0000",
   "emojis": "❤️‍🔥"
  },
  {
   "id": "mvgwjljv1tkus",
   "title": "Belly Bulge",
   "cat": "c:mvgwj75108lqd",
   "text": "",
   "steps": [],
   "opener": "",
   "starter": "",
   "tones": [],
   "note": "",
   "part": "",
   "when": "",
   "place": "",
   "mix": [],
   "tags": [],
   "desc": "",
   "color": "#c86bff",
   "emojis": "🦄",
   "base": "b:extra:Belly Bulge"
  },
  {
   "id": "mvgwkgl41jwx2",
   "title": "Sex toys 🍆",
   "cat": "c:mvgwj75108lqd",
   "text": "",
   "steps": [],
   "opener": "",
   "starter": "",
   "tones": [],
   "note": "",
   "part": "",
   "when": "",
   "place": "",
   "mix": [],
   "tags": [],
   "desc": "",
   "color": "#c86bff",
   "emojis": "🦄",
   "base": "b:extra:Sex toys"
  },
  {
   "id": "mvgwmbsh69uty",
   "title": "Bondage",
   "cat": "c:mvgwj75108lqd",
   "text": "",
   "steps": [],
   "opener": "",
   "starter": "",
   "tones": [],
   "note": "",
   "part": "",
   "when": "",
   "place": "",
   "mix": [],
   "tags": [],
   "desc": "",
   "color": "#ff5f5f",
   "emojis": "🦄"
  },
  {
   "id": "mvgwnrw7trxw2",
   "title": "Cheating",
   "cat": "c:mvgwj75108lqd",
   "text": "",
   "steps": [],
   "opener": "",
   "starter": "",
   "tones": [],
   "note": "",
   "part": "",
   "when": "",
   "place": "",
   "mix": [],
   "tags": [],
   "desc": "",
   "color": "#34c77b",
   "emojis": "🐍"
  },
  {
   "id": "mvgwow93oqoix",
   "title": "Doggy Girl ( Submission )",
   "cat": "c:mvgwj75108lqd",
   "text": "",
   "steps": [],
   "opener": "",
   "starter": "",
   "tones": [],
   "note": "",
   "part": "",
   "when": "",
   "place": "",
   "mix": [],
   "tags": [],
   "desc": "",
   "color": "#ff8a65",
   "emojis": "🐶"
  },
  {
   "id": "mvgwpe2trqkzq",
   "title": "Cat Girl",
   "cat": "c:mvgwj75108lqd",
   "text": "",
   "steps": [],
   "opener": "",
   "starter": "",
   "tones": [],
   "note": "",
   "part": "",
   "when": "",
   "place": "",
   "mix": [],
   "tags": [],
   "desc": "",
   "color": "#ffb72b",
   "emojis": "🐱"
  },
  {
   "id": "mvcowgirl01x",
   "title": "Cow Girl",
   "cat": "c:mvgwj75108lqd",
   "text": "",
   "steps": [],
   "opener": "",
   "starter": "",
   "tones": [],
   "note": "",
   "part": "",
   "when": "",
   "place": "",
   "mix": [],
   "tags": [],
   "desc": "Benekli kostüm, boynuzlar ve çan; göğüsleri sütle dolu, pozisyonlarda bile süt akar, emzirmek ister",
   "color": "#f5f5f5",
   "emojis": "🐮🍼",
   "onEffects": [{ "p": "p:umvjzd17h5twc2", "d": 50 }]
  },
  {
   "id": "mvgwpw434irlk",
   "title": "Bunny Girl",
   "cat": "c:mvgwj75108lqd",
   "text": "",
   "steps": [],
   "opener": "",
   "starter": "",
   "tones": [],
   "note": "",
   "part": "",
   "when": "",
   "place": "",
   "mix": [],
   "tags": [],
   "desc": "",
   "color": "#8b8b99",
   "emojis": "🐰"
  },
  {
   "id": "mvgwqlqvqc5ls",
   "title": "Unicorn Girl",
   "cat": "c:mvgwj75108lqd",
   "text": "",
   "steps": [],
   "opener": "",
   "starter": "",
   "tones": [],
   "note": "",
   "part": "",
   "when": "",
   "place": "",
   "mix": [],
   "tags": [],
   "desc": "",
   "color": "#c86bff",
   "emojis": "🦄"
  },
  {
   "id": "mvgwshghwfb36",
   "title": "Fox Girl ( Cunning )",
   "cat": "c:mvgwj75108lqd",
   "text": "",
   "steps": [],
   "opener": "",
   "starter": "",
   "tones": [],
   "note": "",
   "part": "",
   "when": "",
   "place": "",
   "mix": [],
   "tags": [],
   "desc": "",
   "color": "#ff8a65",
   "emojis": "🦊"
  },
  {
   "id": "mvwolfgirl01",
   "title": "Wolf Girl",
   "cat": "c:mvgwj75108lqd",
   "text": "",
   "steps": [],
   "opener": "",
   "starter": "",
   "tones": [],
   "note": "",
   "part": "",
   "when": "",
   "place": "",
   "mix": [],
   "tags": [],
   "desc": "",
   "color": "#7a8ba6",
   "emojis": "🐺"
  },
  {
   "id": "mvdemongirl01",
   "title": "Demon Girl",
   "cat": "c:mvgwj75108lqd",
   "text": "",
   "steps": [],
   "opener": "",
   "starter": "",
   "tones": [],
   "note": "",
   "part": "",
   "when": "",
   "place": "",
   "mix": [],
   "tags": [],
   "desc": "",
   "color": "#d32f4f",
   "emojis": "😈"
  },
  {
   "id": "mvsheepgirl01",
   "title": "Sheep Girl",
   "cat": "c:mvgwj75108lqd",
   "text": "",
   "steps": [],
   "opener": "",
   "starter": "",
   "tones": [],
   "note": "",
   "part": "",
   "when": "",
   "place": "",
   "mix": [],
   "tags": [],
   "desc": "",
   "color": "#e8dcc8",
   "emojis": "🐑"
  },
  {
   "id": "mvgwzy2jdzfjv",
   "title": "Drops Woter",
   "cat": "c:mvgwupu3we8yl",
   "text": "",
   "steps": [],
   "opener": "",
   "starter": "",
   "tones": [],
   "note": "",
   "part": "",
   "when": "",
   "place": "",
   "mix": [],
   "tags": [],
   "desc": "",
   "color": "#5f8bff",
   "emojis": "🍒💦"
  },
  {
   "id": "mvgx0dmh0v58w",
   "title": "Low-volume Woter",
   "cat": "c:mvgwupu3we8yl",
   "text": "",
   "steps": [],
   "opener": "",
   "starter": "",
   "tones": [],
   "note": "",
   "part": "",
   "when": "",
   "place": "",
   "mix": [],
   "tags": [],
   "desc": "",
   "color": "#5f8bff",
   "emojis": "🍒💦"
  },
  {
   "id": "mvgx1ebr66qy1",
   "title": "Normal Woter",
   "cat": "c:mvgwupu3we8yl",
   "text": "",
   "steps": [],
   "opener": "",
   "starter": "",
   "tones": [],
   "note": "",
   "part": "",
   "when": "",
   "place": "",
   "mix": [],
   "tags": [],
   "desc": "",
   "color": "#5f8bff",
   "emojis": "🍒💦"
  },
  {
   "id": "mvgx27px2ab58",
   "title": "High-volume Woter",
   "cat": "c:mvgwupu3we8yl",
   "text": "",
   "steps": [],
   "opener": "",
   "starter": "",
   "tones": [],
   "note": "",
   "part": "",
   "when": "",
   "place": "",
   "mix": [],
   "tags": [],
   "desc": "",
   "color": "#5f8bff",
   "emojis": "🍒💦"
  },
  {
   "id": "mvgx2f834ey9m",
   "title": "Squirt Woter",
   "cat": "c:mvgwupu3we8yl",
   "text": "",
   "steps": [],
   "opener": "",
   "starter": "",
   "tones": [],
   "note": "",
   "part": "",
   "when": "",
   "place": "",
   "mix": [],
   "tags": [],
   "desc": "",
   "color": "#5f8bff",
   "emojis": "🍒💦"
  },
  {
   "id": "mvgx5o11ogsyz",
   "title": "Drops Milk",
   "cat": "c:mvgwupu3we8yl",
   "text": "",
   "steps": [],
   "opener": "",
   "starter": "",
   "tones": [],
   "note": "",
   "part": "",
   "when": "",
   "place": "",
   "mix": [],
   "tags": [],
   "desc": "",
   "color": "#8b5cf6",
   "emojis": "🍒💦"
  },
  {
   "id": "mvgx67ogz2weo",
   "title": "Low-volume Milk",
   "cat": "c:mvgwupu3we8yl",
   "text": "",
   "steps": [],
   "opener": "",
   "starter": "",
   "tones": [],
   "note": "",
   "part": "",
   "when": "",
   "place": "",
   "mix": [],
   "tags": [],
   "desc": "",
   "color": "#8b5cf6",
   "emojis": "🍒💦"
  },
  {
   "id": "mvgx6llsufjzr",
   "title": "Normal Milk",
   "cat": "c:mvgwupu3we8yl",
   "text": "",
   "steps": [],
   "opener": "",
   "starter": "",
   "tones": [],
   "note": "",
   "part": "",
   "when": "",
   "place": "",
   "mix": [],
   "tags": [],
   "desc": "",
   "color": "#8b5cf6",
   "emojis": "🍒💦"
  },
  {
   "id": "mvgx6ygc4cjpt",
   "title": "High-volume Milk",
   "cat": "c:mvgwupu3we8yl",
   "text": "",
   "steps": [],
   "opener": "",
   "starter": "",
   "tones": [],
   "note": "",
   "part": "",
   "when": "",
   "place": "",
   "mix": [],
   "tags": [],
   "desc": "",
   "color": "#8b5cf6",
   "emojis": "🍒💦"
  },
  {
   "id": "mvgx7acjikwgv",
   "title": "Squirt Milk",
   "cat": "c:mvgwupu3we8yl",
   "text": "",
   "steps": [],
   "opener": "",
   "starter": "",
   "tones": [],
   "note": "",
   "part": "",
   "when": "",
   "place": "",
   "mix": [],
   "tags": [],
   "desc": "",
   "color": "#8b5cf6",
   "emojis": "🍒💦"
  },
  {
   "id": "mvgxexg8bc5xj",
   "title": "Cumflation",
   "cat": "c:mvgwj75108lqd",
   "text": "",
   "steps": [],
   "opener": "",
   "starter": "",
   "tones": [],
   "note": "",
   "part": "",
   "when": "",
   "place": "",
   "mix": [],
   "tags": [],
   "desc": "",
   "color": "#c86bff",
   "emojis": "🦄",
   "base": "b:extra:Cumflation"
  },
  {
   "id": "mvh0ytq7ngwuz",
   "title": "Legs Creampie",
   "cat": "c:mvgu3rsuko7km",
   "text": "",
   "steps": [],
   "opener": "",
   "starter": "",
   "tones": [],
   "note": "",
   "part": "",
   "when": "",
   "place": "",
   "mix": [],
   "tags": [
    "bacak",
    "boşalma"
   ],
   "desc": "",
   "color": "#5f8bff",
   "emojis": "💦",
   "onEffects": [
    {
     "p": "p:umvjy7ucpiosps",
     "d": 1
    }
   ]
  },
  {
   "id": "mvh11d9dirsb3",
   "title": "Low-volume Pre-cumming",
   "cat": "c:mvh0zv4nv7f1i",
   "text": "",
   "steps": [],
   "opener": "",
   "starter": "",
   "tones": [],
   "note": "",
   "part": "",
   "when": "",
   "place": "",
   "mix": [],
   "tags": [],
   "desc": "",
   "color": "#2fb6c7",
   "emojis": "💦"
  },
  {
   "id": "mvh11wc7rfs9a",
   "title": "Normal Pre-cumming",
   "cat": "c:mvh0zv4nv7f1i",
   "text": "",
   "steps": [],
   "opener": "",
   "starter": "",
   "tones": [],
   "note": "",
   "part": "",
   "when": "",
   "place": "",
   "mix": [],
   "tags": [],
   "desc": "",
   "color": "#2fb6c7",
   "emojis": "💦"
  },
  {
   "id": "mvh1296ve6myk",
   "title": "High-volume Pre-cumming",
   "cat": "c:mvh0zv4nv7f1i",
   "text": "",
   "steps": [],
   "opener": "",
   "starter": "",
   "tones": [],
   "note": "",
   "part": "",
   "when": "",
   "place": "",
   "mix": [],
   "tags": [],
   "desc": "",
   "color": "#2fb6c7",
   "emojis": "💦"
  },
  {
   "id": "mvh1h70jral7v",
   "title": "Condom",
   "cat": "c:mvglyw2ax79uj",
   "text": "",
   "steps": [],
   "opener": "",
   "starter": "",
   "tones": [],
   "note": "",
   "part": "",
   "when": "",
   "place": "",
   "mix": [],
   "tags": [],
   "desc": "",
   "color": "#ff5f5f",
   "emojis": "🎈",
   "level": "",
   "outcomes": [],
   "subs": [],
   "sub": "",
   "onEffects": []
  },
  {
   "id": "mvglzdskea205",
   "title": "Tight Condom",
   "cat": "c:mvglyw2ax79uj",
   "text": "",
   "steps": [],
   "opener": "",
   "starter": "",
   "tones": [],
   "note": "",
   "part": "",
   "when": "",
   "place": "",
   "mix": [],
   "tags": [],
   "desc": "",
   "color": "#ff5f5f",
   "emojis": "🎈"
  },
  {
   "id": "mvgm1e6dgi3ef",
   "title": "Control Pill",
   "cat": "c:mvglyw2ax79uj",
   "text": "",
   "steps": [],
   "opener": "",
   "starter": "",
   "tones": [],
   "note": "",
   "part": "",
   "when": "",
   "place": "",
   "mix": [],
   "tags": [],
   "desc": "",
   "color": "#8b8b99",
   "emojis": "💊"
  },
  {
   "id": "mvjxgtrb8rg33",
   "title": "Face Cumming",
   "cat": "c:mvgu3rsuko7km",
   "text": "",
   "steps": [],
   "opener": "",
   "starter": "",
   "tones": [],
   "note": "",
   "part": "",
   "when": "",
   "place": "",
   "mix": [],
   "tags": [
    "oral",
    "el",
    "boşalma"
   ],
   "desc": "",
   "color": "#5f8bff",
   "emojis": "💦",
   "level": "",
   "outcomes": [],
   "subs": [],
   "sub": "",
   "onEffects": [
    {
     "p": "p:umvjy7ucpiosps",
     "d": 1
    }
   ]
  },
  {
   "id": "mvjxhqpfs1h66",
   "title": "Mouth Cumming",
   "cat": "c:mvgu3rsuko7km",
   "text": "",
   "steps": [],
   "opener": "",
   "starter": "",
   "tones": [],
   "note": "",
   "part": "",
   "when": "",
   "place": "",
   "mix": [],
   "tags": [
    "oral",
    "boşalma"
   ],
   "desc": "",
   "color": "#5f8bff",
   "emojis": "💦",
   "level": "",
   "outcomes": [],
   "subs": [],
   "sub": "",
   "onEffects": [
    {
     "p": "p:umvjy7ucpiosps",
     "d": 1
    }
   ]
  },
  {
   "id": "mvjzd17h6h94v",
   "title": "Orgazm",
   "text": "",
   "cat": "c:mvgwupu3we8yl",
   "emojis": "💗",
   "tags": [
    "orgazm"
   ],
   "desc": "Karşı tarafın orgazmı (💗 Uyarılma eşiğinden gelir)",
   "onEffects": [
    {
     "p": "p:umvjzd17h5twc2",
     "d": -30
    },
    {
     "p": "p:ask",
     "d": 5
    },
    {
     "p": "p:guven",
     "d": 2
    }
   ]
  },
  {
   "id": "mvl2lpjnq7amv",
   "title": "Patron – Sekreter",
   "cat": "c:mvgwj75108lqd",
   "text": "",
   "steps": [],
   "opener": "",
   "starter": "",
   "tones": [],
   "note": "",
   "part": "",
   "when": "",
   "place": "",
   "mix": [],
   "tags": [
    "roleplay"
   ],
   "desc": "Ofiste, mesai sonrası: o sekreter, sen patron",
   "color": "#5c6bc0",
   "emojis": "💼"
  },
  {
   "id": "mvl2lpjn6v2mt",
   "title": "Hoca – Öğrenci (Üniversite)",
   "cat": "c:mvgwj75108lqd",
   "text": "",
   "steps": [],
   "opener": "",
   "starter": "",
   "tones": [],
   "note": "",
   "part": "",
   "when": "",
   "place": "",
   "mix": [],
   "tags": [
    "roleplay"
   ],
   "desc": "Kampüste, ofis saatinde: o öğrenci, sen hoca",
   "color": "#8d6e63",
   "emojis": "🎓"
  },
  {
   "id": "mvl2lpjnc3qqq",
   "title": "Doktor – Hasta",
   "cat": "c:mvgwj75108lqd",
   "text": "",
   "steps": [],
   "opener": "",
   "starter": "",
   "tones": [],
   "note": "",
   "part": "",
   "when": "",
   "place": "",
   "mix": [],
   "tags": [
    "roleplay"
   ],
   "desc": "Muayenehanede: o hasta, sen doktor",
   "color": "#26a69a",
   "emojis": "🩺"
  },
  {
   "id": "mvl2lpjo0qq34",
   "title": "Polis – Şüpheli",
   "cat": "c:mvgwj75108lqd",
   "text": "",
   "steps": [],
   "opener": "",
   "starter": "",
   "tones": [],
   "note": "",
   "part": "",
   "when": "",
   "place": "",
   "mix": [],
   "tags": [
    "roleplay"
   ],
   "desc": "Sorgu odasında: o şüpheli, sen polis",
   "color": "#1e88e5",
   "emojis": "🚓"
  },
  {
   "id": "mvl2lpjoqun3d",
   "title": "Yeni Komşu",
   "cat": "c:mvgwj75108lqd",
   "text": "",
   "steps": [],
   "opener": "",
   "starter": "",
   "tones": [],
   "note": "",
   "part": "",
   "when": "",
   "place": "",
   "mix": [],
   "tags": [
    "roleplay"
   ],
   "desc": "Kapıya şeker istemeye gelen yeni komşu",
   "color": "#ef6c00",
   "emojis": "🏠"
  },
  {
   "id": "mvl2lpjoxd74l",
   "title": "Hizmetçi – Ev Sahibi",
   "cat": "c:mvgwj75108lqd",
   "text": "",
   "steps": [],
   "opener": "",
   "starter": "",
   "tones": [],
   "note": "",
   "part": "",
   "when": "",
   "place": "",
   "mix": [],
   "tags": [
    "roleplay"
   ],
   "desc": "O hizmetçi, sen ev sahibi",
   "color": "#6d4c41",
   "emojis": "🧹"
  },
  {
   "id": "mvl2lpjo41a5w",
   "title": "Masöz – Müşteri",
   "cat": "c:mvgwj75108lqd",
   "text": "",
   "steps": [],
   "opener": "",
   "starter": "",
   "tones": [],
   "note": "",
   "part": "",
   "when": "",
   "place": "",
   "mix": [],
   "tags": [
    "roleplay"
   ],
   "desc": "Masaj salonunda: o masöz, sen müşteri",
   "color": "#ab47bc",
   "emojis": "💆"
  },
  {
   "id": "mvl2lpjo2n7z5",
   "title": "Kadın Hoca – Öğrenci (Üniversite)",
   "cat": "c:mvgwj75108lqd",
   "text": "",
   "steps": [],
   "opener": "",
   "starter": "",
   "tones": [],
   "note": "",
   "part": "",
   "when": "",
   "place": "",
   "mix": [],
   "tags": [
    "roleplay"
   ],
   "desc": "Kampüste, ofis saatinde: o hoca, sen öğrenci",
   "color": "#7e57c2",
   "emojis": "👩‍🏫"
  },
  {
   "id": "mvl6mx4zkn5gu",
   "title": "Hotdogging",
   "cat": "c:mvgn2ubfw2eoh",
   "text": "",
   "steps": [],
   "opener": "",
   "starter": "",
   "tones": [],
   "note": "",
   "part": "",
   "when": "",
   "place": "",
   "mix": [],
   "tags": [
    "kalça"
   ],
   "desc": "Kalçanın iki yanağı arasında sürtme (🌭 sosisli gibi): içeri girmeden, kalçaların arasında",
   "color": "#ff8a65",
   "emojis": "🍑🌭"
  },
  { "id": "mvcr01buttjob", "title": "Condom Buttjob", "cat": "c:mvgn2ubfw2eoh", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["kondom"], "desc": "Kondom takılıyken kalçasıyla seni okşar: lastik kalçasının üstünde kayar, içeri girmeden", "color": "#c86bff", "emojis": "🎈🍑", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvcr02hotdog", "title": "Condom Hotdogging", "cat": "c:mvgn2ubfw2eoh", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["kondom"], "desc": "Kondomla kalçanın iki yanağı arasında sürtme: içeri girmeden, lastik yanakların arasında kayar", "color": "#ff8a65", "emojis": "🎈🌭", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvcr03titfuck", "title": "Condom Titfuck", "cat": "c:mvgn2ubfw2eoh", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["kondom"], "desc": "Kondom takılıyken göğüslerinin arasında kayarsın", "color": "#ff7eb3", "emojis": "🎈🍒", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvcr04handjob", "title": "Condom Handjob", "cat": "c:mvgn2ubfw2eoh", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["kondom"], "desc": "Kondomu kendi takar, lastiğin üstünden eliyle sıvazlar", "color": "#7fb3ff", "emojis": "🎈✊", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvcr05legjob", "title": "Condom Legjob", "cat": "c:mvgn2ubfw2eoh", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["kondom"], "desc": "Kondom takılıyken uyluklarının arasında sıkıştırıp sürter", "color": "#8ed081", "emojis": "🎈🦵", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvcr06cumshot", "title": "Condom Cumshot", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["kondom", "boşalma"], "desc": "Sürtünürken kondomun içine boşalırsın; hazne şişer, teninde sıcaklığı hissedilir", "color": "#5f8bff", "emojis": "💦🎈", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }]
  },
  {
   "id": "mvs1stdmis01a",
   "title": "Standing Missionary",
   "cat": "c:mvglvwdtam0h7",
   "text": "",
   "steps": [],
   "opener": "",
   "starter": "",
   "tones": [],
   "note": "",
   "part": "",
   "when": "",
   "place": "",
   "mix": [],
   "tags": [
    "penetrasyon",
    "vajinal"
   ],
   "desc": "Ayakta, sırtı duvara yaslı; onu kaldırıp duvara dayayarak zıplatırsın",
   "color": "#ff5f5f",
   "emojis": "🔥🧱",
   "onEffects": [
    {
     "p": "p:samimiyet",
     "d": 1
    },
    {
     "p": "p:guven",
     "d": 1
    }
   ]
  },
  {
   "id": "mvs1drymis02b",
   "title": "Dry Missionary",
   "cat": "c:mvgn2ubfw2eoh",
   "text": "",
   "steps": [],
   "opener": "",
   "starter": "",
   "tones": [],
   "note": "",
   "part": "",
   "when": "",
   "place": "",
   "mix": [],
   "tags": [
    "kıyafet"
   ],
   "wear": ["@kalca"],
   "desc": "Missionary gibi ama kıyafetler üstünde: içeri girmeden sadece sürtünürsün",
   "color": "#ff8a65",
   "emojis": "👖🔥"
  },
  {
   "id": "mvs1drydog03c",
   "title": "Dry Doggy",
   "cat": "c:mvgn2ubfw2eoh",
   "text": "",
   "steps": [],
   "opener": "",
   "starter": "",
   "tones": [],
   "note": "",
   "part": "",
   "when": "",
   "place": "",
   "mix": [],
   "tags": [
    "kıyafet"
   ],
   "wear": ["@kalca"],
   "desc": "Doggy gibi ama kıyafetler üstünde: arkasından kalçasına sürtünürsün",
   "color": "#ff8a65",
   "emojis": "👖🍑"
  },
  {
   "id": "mvs1drycrp04d",
   "title": "Dry Creampie",
   "cat": "c:mvgu3rsuko7km",
   "text": "",
   "steps": [],
   "opener": "",
   "starter": "",
   "tones": [],
   "note": "",
   "part": "",
   "when": "",
   "place": "",
   "mix": [],
   "tags": [
    "kıyafet",
    "boşalma"
   ],
   "desc": "Sürtünürken dayanamazsın, kendi pantolonunun içine boşalırsın",
   "color": "#5f8bff",
   "emojis": "💦👖",
   "onEffects": [
    {
     "p": "p:umvjy7ucpiosps",
     "d": 1
    }
   ]
  },
  {
   "id": "mvs2drtit01a",
   "title": "Dressed Tit Cumshot",
   "cat": "c:mvgu3rsuko7km",
   "text": "",
   "steps": [],
   "opener": "",
   "starter": "",
   "tones": [],
   "note": "",
   "part": "",
   "when": "",
   "place": "",
   "mix": [],
   "tags": [
    "kıyafet",
    "boşalma"
   ],
   "desc": "O giyinikken göğüslerine, kıyafetinin üstüne boşalırsın",
   "color": "#5f8bff",
   "emojis": "💦👚",
   "onEffects": [
    {
     "p": "p:umvjy7ucpiosps",
     "d": 1
    }
   ]
  },
  {
   "id": "mvs2drass02b",
   "title": "Dressed Ass Cumshot",
   "cat": "c:mvgu3rsuko7km",
   "text": "",
   "steps": [],
   "opener": "",
   "starter": "",
   "tones": [],
   "note": "",
   "part": "",
   "when": "",
   "place": "",
   "mix": [],
   "tags": [
    "kıyafet",
    "boşalma"
   ],
   "desc": "O giyinikken kalçasına, kıyafetinin üstüne boşalırsın",
   "color": "#5f8bff",
   "emojis": "💦👖",
   "onEffects": [
    {
     "p": "p:umvjy7ucpiosps",
     "d": 1
    }
   ]
  },
  {
   "id": "mvs2drleg03c",
   "title": "Dressed Leg Cumshot",
   "cat": "c:mvgu3rsuko7km",
   "text": "",
   "steps": [],
   "opener": "",
   "starter": "",
   "tones": [],
   "note": "",
   "part": "",
   "when": "",
   "place": "",
   "mix": [],
   "tags": [
    "kıyafet",
    "boşalma"
   ],
   "desc": "O giyinikken bacaklarına, kıyafetinin üstüne boşalırsın",
   "color": "#5f8bff",
   "emojis": "💦🦵",
   "onEffects": [
    {
     "p": "p:umvjy7ucpiosps",
     "d": 1
    }
   ]
  },
  { "id": "mvhw1vampbt01", "title": "Vampire Bite", "cat": "c:mvgm9ihwda8f5", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "halloween"], "desc": "Ayakta, arkasından alırken boynuna dişlerini geçirirsin", "color": "#b71c1c", "emojis": "🧛🩸" },
  { "id": "mvhw2moondg02", "title": "Full Moon Doggy", "cat": "c:mvgm9ihwda8f5", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "halloween"], "desc": "Dolunay ışığında vahşi doggy: saçından çekip arkadan sertçe alırsın", "color": "#5d4037", "emojis": "🌕🐺" },
  { "id": "mvhw3cofmis03", "title": "Coffin Missionary", "cat": "c:mvglvwdtam0h7", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "halloween"], "desc": "Dar bir yerde, tabut gibi sıkışık: üst üste, kıpırdayacak yer yokken missionary", "color": "#4e342e", "emojis": "⚰️🔥" },
  { "id": "mvdh01lgrind", "title": "Leggings Grind", "cat": "c:mvgn2ubfw2eoh", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["kıyafet", "kalça"], "wear": ["tayt", "esofman", "trainerkost"], "desc": "Kucağına oturur, taytlı kalçasını dairesel çevirerek aletine sürter; ince kumaştan her şey hissedilir", "color": "#ff8a65", "emojis": "🩱🍑", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 10 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvdh02lhotdog", "title": "Leggings Hotdogging", "cat": "c:mvgn2ubfw2eoh", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["kıyafet", "kalça"], "wear": ["tayt", "trainerkost"], "desc": "Taytı üstünde kalça yanaklarını sıkar, aletin kumaşın üstünden aralarında kayar", "color": "#ff8a65", "emojis": "🩱🌭", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 10 }, { "p": "p:samimiyet", "d": 1 }] },
  { "id": "mvdh03lthigh", "title": "Leggings Thighjob", "cat": "c:mvgn2ubfw2eoh", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["kıyafet", "bacak"], "wear": ["tayt", "trainerkost", "kulotlu", "tencorap"], "desc": "Taytlı uyluklarını sıkıştırır, aletin kayan kumaşın arasında ileri geri gider", "color": "#ff8a65", "emojis": "🩱🦵", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 8 }, { "p": "p:samimiyet", "d": 1 }] },
  { "id": "mvdh04seam", "title": "Seam Rub", "cat": "c:mvgn2ubfw2eoh", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["kıyafet"], "wear": ["tayt", "esofman", "trainerkost"], "desc": "Önden, taytın orta dikişi boyunca yavaş yavaş sürtersin; kumaşta ıslak bir leke belirir", "color": "#ff8a65", "emojis": "🩱🔥", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 12 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvdh05squat", "title": "Squat Grind", "cat": "c:mvgn2ubfw2eoh", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["kıyafet", "kalça"], "wear": ["tayt", "esofman", "trainerkost"], "desc": "Squat yaparken arkasına geçersin; her inişte taytlı kalçası sana bastırır", "color": "#ff8a65", "emojis": "🏋️🍑", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 10 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvdh06ddog", "title": "Downward Dog Grind", "cat": "c:mvgn2ubfw2eoh", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["kıyafet", "kalça"], "wear": ["tayt", "esofman", "trainerkost"], "desc": "Yoga pozunda kalçası havada; arkasından tayt üstüne sürtünürsün", "color": "#ff8a65", "emojis": "🧘‍♀️🍑", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 10 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvdh07hose", "title": "Pantyhose Rub", "cat": "c:mvgn2ubfw2eoh", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["kıyafet", "bacak"], "wear": ["kulotlu", "tencorap"], "desc": "Külotlu çorabın ince kumaşı üstünden bacaklarına ve aralarına sürtersin", "color": "#ff8a65", "emojis": "🦵✨", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 8 }, { "p": "p:sehvet", "d": 4 }] },
  { "id": "mvdh08skirt", "title": "Skirt Lift Panty Rub", "cat": "c:mvgn2ubfw2eoh", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["kıyafet", "kalça"], "wear": ["mini", "plise", "kalem", "yirtmac", "yuksekkalem", "derikalem", "midi", "ofisyirtmac", "minielbise"], "desc": "Eteğini beline kadar kaldırır, sadece külotun üstünden kalçasına sürtersin", "color": "#ff8a65", "emojis": "👗🍑", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 10 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvdh09jeans", "title": "Jeans Lap Grind", "cat": "c:mvgn2ubfw2eoh", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["kıyafet"], "wear": ["kot", "sort", "deri"], "desc": "Kot üstüne kot: kucağında yüz yüze, sert kumaş sürtündükçe ikiniz de yanarsınız", "color": "#ff8a65", "emojis": "👖🔥", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 8 }, { "p": "p:samimiyet", "d": 1 }] },
  { "id": "mvdh10spoon", "title": "Morning Shorts Spoon", "cat": "c:mvgn2ubfw2eoh", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["kıyafet", "kalça"], "wear": ["sort", "saten", "sabahlik", "kombinezon", "pamukkulot", "boxer"], "desc": "Sabah kaşık pozisyonunda uyanırsın; pijamasının üstünden kalçasına yavaşça bastırırsın", "color": "#ff8a65", "emojis": "🌅🥄", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 8 }, { "p": "p:samimiyet", "d": 2 }, { "p": "p:ask", "d": 1 }] },
  { "id": "mvdh11counter", "title": "Counter Press", "cat": "c:mvgn2ubfw2eoh", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["kıyafet", "kalça"], "wear": ["esofman", "tayt", "palazzo", "kumas"], "desc": "Tezgâha yaslanmışken arkasından gelip eşofmanının üstünden kalçasına bastırırsın", "color": "#ff8a65", "emojis": "🍳🍑", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 10 }, { "p": "p:sehvet", "d": 4 }] },
  { "id": "mvdh20lcum", "title": "Leggings Cumshot", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["kıyafet", "boşalma", "kalça"], "after": ["Leggings Grind", "Leggings Hotdogging", "Leggings Thighjob", "Seam Rub", "Squat Grind", "Downward Dog Grind"], "desc": "Taytlı kalçasına boşalırsın; ince kumaş ıslanıp tenine yapışır", "color": "#5f8bff", "emojis": "💦🩱", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }] },
  { "id": "mvdh21waist", "title": "Waistband Cumshot", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["kıyafet", "boşalma", "kalça"], "after": ["Leggings Grind", "Leggings Hotdogging", "Squat Grind", "Downward Dog Grind", "Counter Press", "Jeans Lap Grind"], "desc": "Belini aşağı çekip içine boşalırsın, sonra bırakırsın; bütün gün taytının içinde taşır", "color": "#5f8bff", "emojis": "💦👖", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }] },
  { "id": "mvsq001wallping", "title": "Wall Pin Grind", "cat": "c:mvsqueeze01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["sıkıştır", "kalça"], "desc": "Arkasından duvara yaslarsın, bileklerini başının üstünde tutup kalçasına bastırırsın", "color": "#ff7043", "emojis": "🧱🍑", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 12 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvsq002doorpin", "title": "Door Pin", "cat": "c:mvsqueeze01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["sıkıştır", "kalça"], "desc": "Kapıyı kapatır kapatmaz sırtını kapıya dayarsın; kapı kolu belinde", "color": "#ff7043", "emojis": "🚪🔒", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 12 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvsq003cornertr", "title": "Corner Trap", "cat": "c:mvsqueeze01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["sıkıştır", "kalça"], "desc": "Odanın köşesine sıkıştırırsın, kaçacak iki duvar da kapalı", "color": "#ff7043", "emojis": "📐😳", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 12 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvsq004deskedge", "title": "Desk Edge Pin", "cat": "c:mvsqueeze01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["sıkıştır", "kalça"], "desc": "Masanın kenarı kasıklarına, sen arkasında; masaya kapanır", "color": "#ff7043", "emojis": "🗄️🍑", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 12 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvsq005bookshel", "title": "Bookshelf Pin", "cat": "c:mvsqueeze01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["sıkıştır", "kalça"], "desc": "Raflara yaslanır, kitaplar her bastırışta sallanır", "color": "#ff7043", "emojis": "📚🫣", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 12 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvsq006mirrorpi", "title": "Mirror Pin", "cat": "c:mvsqueeze01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["sıkıştır", "kalça"], "desc": "Aynaya sıkıştırırsın; nefesi camı buğulandırır", "color": "#ff7043", "emojis": "🪞😮‍💨", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 12 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvsq007cardoorp", "title": "Car Door Pin", "cat": "c:mvsqueeze01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["sıkıştır", "kalça"], "desc": "Arabanın kapısına yaslanır, cam soğuk, sen sıcak", "color": "#ff7043", "emojis": "🚗🍑", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 12 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvsq008treetrun", "title": "Tree Trunk Pin", "cat": "c:mvsqueeze01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["sıkıştır", "kalça"], "desc": "Ağaç gövdesine dayarsın, kabuk avuçlarında", "color": "#ff7043", "emojis": "🌳🍑", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 12 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvsq009sinkpin", "title": "Sink Pin", "cat": "c:mvsqueeze01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["sıkıştır", "kalça"], "desc": "Lavaboya eğik, aynadan göz göze; su açık kalmış", "color": "#ff7043", "emojis": "🚰🪞", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 12 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvsq010railingp", "title": "Railing Pin", "cat": "c:mvsqueeze01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["sıkıştır", "kalça"], "desc": "Balkon korkuluğuna sıkıştırırsın; aşağıda şehir", "color": "#ff7043", "emojis": "🌇🍑", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 12 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvsq011lockerpi", "title": "Locker Pin", "cat": "c:mvsqueeze01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["sıkıştır", "kalça"], "desc": "Dolaplara yaslarsın, metal tıngırdar", "color": "#ff7043", "emojis": "🔐🍑", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 12 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvsq012bedframe", "title": "Bed Frame Pin", "cat": "c:mvsqueeze01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["sıkıştır", "kalça"], "desc": "Yatağın başlığına sıkıştırırsın, ellerini başlığa koyar", "color": "#ff7043", "emojis": "🛏️🔒", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 12 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvsq013closetsq", "title": "Closet Squeeze", "cat": "c:mvsqueeze01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["sıkıştır", "kalça"], "desc": "Dolaba saklanırsınız; kıpırdayacak yer yok, kalçası sana yapışık", "color": "#ff7043", "emojis": "🚪👗", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 10 }, { "p": "p:sehvet", "d": 4 }, { "p": "p:samimiyet", "d": 1 }] },
  { "id": "mvsq014narrowha", "title": "Narrow Hallway", "cat": "c:mvsqueeze01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["sıkıştır", "kalça"], "desc": "Dar koridorda yan yana geçemezsiniz; arkasından geçerken durursun", "color": "#ff7043", "emojis": "↔️😏", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 10 }, { "p": "p:sehvet", "d": 4 }, { "p": "p:samimiyet", "d": 1 }] },
  { "id": "mvsq015underthe", "title": "Under The Stairs", "cat": "c:mvsqueeze01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["sıkıştır", "kalça"], "desc": "Merdiven altındaki dar boşlukta, eğilmek zorunda", "color": "#ff7043", "emojis": "🪜🫣", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 10 }, { "p": "p:sehvet", "d": 4 }, { "p": "p:samimiyet", "d": 1 }] },
  { "id": "mvsq016phoneboo", "title": "Phone Booth", "cat": "c:mvsqueeze01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["sıkıştır", "kalça"], "desc": "Eski telefon kulübesinde ikiniz; cam buğulanır", "color": "#ff7043", "emojis": "☎️🍑", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 10 }, { "p": "p:sehvet", "d": 4 }, { "p": "p:samimiyet", "d": 1 }] },
  { "id": "mvsq017showerst", "title": "Shower Stall Squeeze", "cat": "c:mvsqueeze01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["sıkıştır", "kalça"], "desc": "Tek kişilik duşta ikiniz; her hareket bir sürtünme", "color": "#ff7043", "emojis": "🚿🫂", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 10 }, { "p": "p:sehvet", "d": 4 }, { "p": "p:samimiyet", "d": 1 }] },
  { "id": "mvsq018sleeping", "title": "Sleeping Bag Squeeze", "cat": "c:mvsqueeze01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["sıkıştır", "kalça"], "desc": "Tek kişilik uyku tulumunda, fermuar kapalı", "color": "#ff7043", "emojis": "🛌🔒", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 10 }, { "p": "p:sehvet", "d": 4 }, { "p": "p:samimiyet", "d": 1 }] },
  { "id": "mvsq019hammocks", "title": "Hammock Squeeze", "cat": "c:mvsqueeze01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["sıkıştır", "kalça"], "desc": "Dar hamakta kayıp sana yapışır", "color": "#ff7043", "emojis": "🌴🫂", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 10 }, { "p": "p:sehvet", "d": 4 }, { "p": "p:samimiyet", "d": 1 }] },
  { "id": "mvsq020backseat", "title": "Backseat Squeeze", "cat": "c:mvsqueeze01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["sıkıştır", "kalça"], "desc": "Dar arka koltukta kucağında, tavan başına değiyor", "color": "#ff7043", "emojis": "🚗🫂", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 10 }, { "p": "p:sehvet", "d": 4 }, { "p": "p:samimiyet", "d": 1 }] },
  { "id": "mvsq021thighvis", "title": "Thigh Vise", "cat": "c:mvsqueeze01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["sıkıştır", "bacak"], "desc": "Uyluklarını mengene gibi kapatır; ancak izin verince çekebilirsin", "color": "#ff7043", "emojis": "🦵🗜️", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 15 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvsq022cheekcla", "title": "Cheek Clamp", "cat": "c:mvsqueeze01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["sıkıştır", "kalça"], "desc": "Kalçasını sıkar, seni arada hapseder; bırakmak onun elinde", "color": "#ff7043", "emojis": "🍑🗜️", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 15 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvsq023leglockg", "title": "Leg Lock Grind", "cat": "c:mvsqueeze01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["sıkıştır", "bacak"], "desc": "Bacaklarını beline dolar, seni kendine bastırır; kaçış yok", "color": "#ff7043", "emojis": "🦵🔒", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 15 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvsq024kneesque", "title": "Knee Squeeze", "cat": "c:mvsqueeze01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["sıkıştır", "bacak"], "desc": "Dizlerinin arasına sıkıştırır, yavaşça sıkıp gevşetir", "color": "#ff7043", "emojis": "🦵😈", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 15 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvsq025squeezec", "title": "Squeeze Countdown", "cat": "c:mvsqueeze01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["sıkıştır", "bacak"], "desc": "Her sayıda biraz daha sıkar, sıfırda bırakır", "color": "#ff7043", "emojis": "🗜️🔟", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 15 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvsq026pressure", "title": "Pressure Point", "cat": "c:mvsqueeze01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["sıkıştır", "kalça"], "desc": "Kalçası sana bastırırken bir yandan omzunun üstünden bakıp güler", "color": "#ff7043", "emojis": "👆🗜️", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 15 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvsq027bodypres", "title": "Body Press Hug", "cat": "c:mvsqueeze01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["sıkıştır", "kalça"], "desc": "Tüm vücuduyla sana yapışır; aranızda hava kalmaz", "color": "#ff7043", "emojis": "🫂🔥", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 10 }, { "p": "p:sehvet", "d": 4 }, { "p": "p:samimiyet", "d": 1 }] },
  { "id": "mvsq028pinnedfr", "title": "Pinned From Both Sides", "cat": "c:mvsqueeze01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["sıkıştır", "kalça"], "desc": "O duvara, sen ona; arada sıkışmış, kıpırdadıkça sürtünür", "color": "#ff7043", "emojis": "🧱🫂", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 10 }, { "p": "p:sehvet", "d": 4 }, { "p": "p:samimiyet", "d": 1 }] },
  { "id": "mvsq029bearhugg", "title": "Bear Hug Grind", "cat": "c:mvsqueeze01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["sıkıştır", "kalça"], "desc": "Arkasından kollarınla kilitlersin, kalçası tamamen sende", "color": "#ff7043", "emojis": "🐻🫂", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 10 }, { "p": "p:sehvet", "d": 4 }, { "p": "p:samimiyet", "d": 1 }] },
  { "id": "mvsq030chesttob", "title": "Chest To Back", "cat": "c:mvsqueeze01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["sıkıştır", "kalça"], "desc": "Göğsün sırtında, kalçası kasığında; ikiniz de aynı anda nefes alırsınız", "color": "#ff7043", "emojis": "💗🍑", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 10 }, { "p": "p:sehvet", "d": 4 }, { "p": "p:samimiyet", "d": 1 }] },
  { "id": "mvsq031blanketb", "title": "Blanket Burrito", "cat": "c:mvsqueeze01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["sıkıştır", "kalça"], "desc": "Tek battaniyeye sıkıca sarılırsınız, kıpırdamak imkânsız", "color": "#ff7043", "emojis": "🌯🫂", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 10 }, { "p": "p:sehvet", "d": 4 }, { "p": "p:samimiyet", "d": 1 }] },
  { "id": "mvsq032pinnedfi", "title": "Pinned Finish", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["boşalma", "kalça"], "after": ["Wall Pin Grind", "Door Pin", "Corner Trap", "Desk Edge Pin", "Bookshelf Pin", "Mirror Pin", "Car Door Pin", "Tree Trunk Pin", "Sink Pin", "Railing Pin", "Locker Pin", "Bed Frame Pin", "Pinned From Both Sides"], "desc": "Duvara sıkıştırılmışken, kalçasının üstüne", "color": "#5f8bff", "emojis": "🧱💦", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }] },
  { "id": "mvsq033visefini", "title": "Vise Finish", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["boşalma", "bacak"], "after": ["Thigh Vise", "Knee Squeeze", "Squeeze Countdown"], "desc": "Bacaklarını tam o anda kilitler, bırakmaz", "color": "#5f8bff", "emojis": "🗜️💥", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }] },
  { "id": "mvsq034clamphol", "title": "Clamp & Hold", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["boşalma", "kalça"], "after": ["Cheek Clamp", "Pressure Point"], "desc": "Kalçasının arasında; sıkıp son damlaya kadar tutar", "color": "#5f8bff", "emojis": "🍑🍯", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }] },
  { "id": "mvsq035closetfi", "title": "Closet Finish", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["boşalma", "kalça"], "after": ["Closet Squeeze", "Narrow Hallway", "Under The Stairs", "Phone Booth", "Shower Stall Squeeze", "Sleeping Bag Squeeze", "Hammock Squeeze", "Backseat Squeeze", "Body Press Hug", "Bear Hug Grind", "Chest To Back", "Blanket Burrito"], "desc": "Dolabın karanlığında, birbirinize yapışmışken", "color": "#5f8bff", "emojis": "🚪💦", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }] },
  { "id": "mvsq036leglockf", "title": "Leg Lock Finish", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["boşalma", "bacak"], "after": ["Leg Lock Grind"], "desc": "Bacakları belinde kilitliyken, karnının üstüne", "color": "#5f8bff", "emojis": "🦵🔒", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }] },
  { "id": "mvsq037thighpul", "title": "Thigh Pulse", "cat": "c:mvsqueeze01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["sıkıştır", "bacak"], "desc": "Uyluklarının arasına alır, kalp atışı gibi ritmik sıkıp bırakır", "color": "#ff7043", "emojis": "🦵💓", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 12 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvsq038thightwi", "title": "Thigh Twist", "cat": "c:mvsqueeze01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["sıkıştır", "bacak"], "desc": "Sıkıca kapatıp bacaklarını hafifçe birbirine sürterek döndürür", "color": "#ff7043", "emojis": "🦵🌀", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 12 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvsq039thighmil", "title": "Thigh Milking", "cat": "c:mvsqueeze01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["sıkıştır", "bacak"], "desc": "Kökten uca doğru, uyluklarını kademe kademe sıkarak sağar gibi", "color": "#ff7043", "emojis": "🦵🥛", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 12 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvsq040seatedth", "title": "Seated Thigh Lock", "cat": "c:mvsqueeze01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["sıkıştır", "bacak"], "desc": "Kucağında oturur, sen bacaklarının arasında; dizlerini birleştirip kilitler", "color": "#ff7043", "emojis": "🪑🦵", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 12 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvsq041cowgirlt", "title": "Cowgirl Thigh Squeeze", "cat": "c:mvsqueeze01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["sıkıştır", "bacak"], "desc": "Üstüne oturur ama içeri almaz; uyluklarının arasında yukarı aşağı", "color": "#ff7043", "emojis": "🤠🦵", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 12 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvsq042lyingleg", "title": "Lying Leg Press", "cat": "c:mvsqueeze01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["sıkıştır", "bacak"], "desc": "Sırtüstü yatar, bacaklarını havaya kaldırıp birleştirir; ayak bilekleri omzunda", "color": "#ff7043", "emojis": "🛌🦵", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 12 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvsq043sidelyin", "title": "Side-Lying Scissor", "cat": "c:mvsqueeze01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["sıkıştır", "bacak"], "desc": "Yan yatarken üst bacağını indirip seni iki uyluğu arasında makas gibi kapatır", "color": "#ff7043", "emojis": "✂️🦵", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 12 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvsq044kneeling", "title": "Kneeling Thigh Grip", "cat": "c:mvsqueeze01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["sıkıştır", "bacak"], "desc": "Dizlerinin üstünde, uyluklarını kapatıp geriye sana bastırır", "color": "#ff7043", "emojis": "🧎‍♀️🦵", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 12 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvsq045holdstil", "title": "Hold Still", "cat": "c:mvsqueeze01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["sıkıştır", "bacak"], "desc": "Sıkıca kapatır ve 'kıpırdama' der; sadece o hareket eder", "color": "#ff7043", "emojis": "✋🦵", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 12 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvsq046slowrele", "title": "Slow Release", "cat": "c:mvsqueeze01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["sıkıştır", "bacak"], "desc": "Son derece sıkı kapatır, sonra milim milim gevşetir", "color": "#ff7043", "emojis": "🦵🐌", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 12 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvsq047innerthi", "title": "Inner Thigh Flex", "cat": "c:mvsqueeze01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["sıkıştır", "bacak"], "desc": "Bacak kaslarını kasıp gevşetir; her kasılışta nefesin kesilir", "color": "#ff7043", "emojis": "💪🦵", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 12 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvsq048crosssqu", "title": "Cross & Squeeze", "cat": "c:mvsqueeze01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["sıkıştır", "bacak"], "desc": "Ayak bileklerini çaprazlayınca aralık iyice daralır", "color": "#ff7043", "emojis": "❌🦵", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 12 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvsq049cheekpul", "title": "Cheek Pulse", "cat": "c:mvsqueeze01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["sıkıştır", "kalça"], "desc": "Kalçasının arasına alır, ritmik sıkıp bırakır; omzunun üstünden yüzüne bakar", "color": "#ff7043", "emojis": "🍑💓", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 12 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvsq050cheekmil", "title": "Cheek Milking", "cat": "c:mvsqueeze01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["sıkıştır", "kalça"], "desc": "Kalçasını aşağıdan yukarı sıkarak, sağar gibi", "color": "#ff7043", "emojis": "🍑🥛", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 12 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvsq051onecheek", "title": "One Cheek Flex", "cat": "c:mvsqueeze01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["sıkıştır", "kalça"], "desc": "Önce sol, sonra sağ; sırayla kasarak oynar", "color": "#ff7043", "emojis": "🍑😏", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 12 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvsq052reverses", "title": "Reverse Seat Squeeze", "cat": "c:mvsqueeze01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["sıkıştır", "kalça"], "desc": "Sırtı dönük kucağına oturur, kalçasının arasına alıp sıkar; hiç kalkmaz", "color": "#ff7043", "emojis": "🔄🍑", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 12 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvsq053proneche", "title": "Prone Cheek Grip", "cat": "c:mvsqueeze01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["sıkıştır", "kalça"], "desc": "Yüzüstü yatar, sen üstünde; o sadece kalçasını sıkıp gevşetir", "color": "#ff7043", "emojis": "🛌🍑", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 12 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvsq054standing", "title": "Standing Cheek Lock", "cat": "c:mvsqueeze01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["sıkıştır", "kalça"], "desc": "Ayakta geriye bastırır, kalçasını kilitler; sen kıpırdayamazsın", "color": "#ff7043", "emojis": "🧍‍♀️🍑", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 12 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvsq055twerksqu", "title": "Twerk Squeeze", "cat": "c:mvsqueeze01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["sıkıştır", "kalça"], "desc": "Ritimle hem sallar hem sıkar", "color": "#ff7043", "emojis": "🎵🍑", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 12 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvsq056cheekrol", "title": "Cheek Roll", "cat": "c:mvsqueeze01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["sıkıştır", "kalça"], "desc": "Kalçasını sıkıca kapatıp dairesel çevirir", "color": "#ff7043", "emojis": "🍑🌀", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 12 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvsq057bouncecl", "title": "Bounce & Clamp", "cat": "c:mvsqueeze01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["sıkıştır", "kalça"], "desc": "Kucağında zıplar, her inişte kalçasını sıkar", "color": "#ff7043", "emojis": "⬆️🍑", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 12 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvsq058tighthol", "title": "Tight Hold Tease", "cat": "c:mvsqueeze01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["sıkıştır", "kalça"], "desc": "Sıkıştırır, 'gelme' der; geleceğini hissedince daha da sıkar", "color": "#ff7043", "emojis": "😈🍑", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 12 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvsq059stocking", "title": "Stocking Thigh Squeeze", "cat": "c:mvsqueeze01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["sıkıştır", "kıyafet", "bacak"], "wear": ["kulotlu", "tencorap", "dizustu", "file", "jartiyer"], "desc": "Çoraplı uyluklarının arasında; naylon dokusu her sıkışta hissedilir", "color": "#ff7043", "emojis": "🧦🦵", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 12 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvsq060pantyhos", "title": "Pantyhose Squeeze", "cat": "c:mvsqueeze01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["sıkıştır", "kıyafet", "kalça"], "wear": ["kulotlu", "tencorap"], "desc": "Külotlu çorabın içinden kalçasına sıkıştırır", "color": "#ff7043", "emojis": "🩰🍑", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 12 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvsq061leggings", "title": "Leggings Cheek Squeeze", "cat": "c:mvsqueeze01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["sıkıştır", "kıyafet", "kalça"], "wear": ["tayt", "trainerkost"], "desc": "Taytlı kalçası; ince kumaş seni sarar", "color": "#ff7043", "emojis": "🩱🍑", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 12 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvsq062pantysqu", "title": "Panty Squeeze", "cat": "c:mvsqueeze01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["sıkıştır", "kıyafet", "kalça"], "wear": ["tanga", "string", "dantelkulot", "pamukkulot", "boxer", "transkulot"], "desc": "Külotunun içine, kalçasının arasına sokar; kumaş ve ten birlikte sıkar", "color": "#ff7043", "emojis": "🩲🍑", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 12 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvsq063shortssq", "title": "Shorts Squeeze", "cat": "c:mvsqueeze01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["sıkıştır", "kıyafet", "bacak"], "wear": ["sort"], "desc": "Şortun paçasından içeri, uylukların arasına", "color": "#ff7043", "emojis": "🩳🦵", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 12 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvsq064oiledthi", "title": "Oiled Thigh Squeeze", "cat": "c:mvsqueeze01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["sıkıştır", "bacak"], "desc": "Yağlı uyluklar; sıktıkça kayıp kaçarsın, yeniden yakalar", "color": "#ff7043", "emojis": "🫒🦵", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 12 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvsq065soapyche", "title": "Soapy Cheek Squeeze", "cat": "c:mvsqueeze01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["sıkıştır", "kalça"], "desc": "Duşta köpüklü kalçasının arasında", "color": "#ff7043", "emojis": "🧼🍑", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 12 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvsq066lotiongr", "title": "Lotion Grip", "cat": "c:mvsqueeze01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["sıkıştır", "bacak"], "desc": "Elinde losyon, uyluklarına sürer, sonra seni arasına alır", "color": "#ff7043", "emojis": "🧴🦵", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 12 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvsq067wholasts", "title": "Who Lasts Longer", "cat": "c:mvsqueeze01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["sıkıştır", "bacak"], "desc": "O sıkar, sen dayanırsın; kim önce pes ederse kaybeder (Dayanıklılık)", "color": "#ff7043", "emojis": "⏱️🦵", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 12 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvsq068tensquee", "title": "Ten Squeezes", "cat": "c:mvsqueeze01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["sıkıştır", "kalça"], "desc": "On kez sıkacak; on olmadan gelirsen ceza", "color": "#ff7043", "emojis": "🔟🍑", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 12 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvsq069squeezeh", "title": "Squeeze Harder?", "cat": "c:mvsqueeze01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["sıkıştır", "bacak"], "desc": "Her sıkışta 'daha mı sıkı?' diye sorar, sen cevap verene kadar sıkar", "color": "#ff7043", "emojis": "🗣️🗜️", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 12 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvsq070nohandsr", "title": "No Hands Rule", "cat": "c:mvsqueeze01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["sıkıştır", "bacak"], "desc": "Ellerini kullanmak yasak; sadece bacaklarıyla", "color": "#ff7043", "emojis": "🙅‍♀️🦵", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 12 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvsq071icethens", "title": "Ice Then Squeeze", "cat": "c:mvsqueeze01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["sıkıştır", "bacak"], "desc": "Önce uyluklarına buz, sonra seni arasına alır; soğuk-sıcak", "color": "#ff7043", "emojis": "🧊🦵", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 12 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvsq072thighgap", "title": "Thigh Gap Burst", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["boşalma", "bacak"], "after": ["Thigh Pulse", "Thigh Twist", "Thigh Milking", "Seated Thigh Lock", "Cowgirl Thigh Squeeze", "Lying Leg Press", "Side-Lying Scissor", "Kneeling Thigh Grip", "Hold Still", "Slow Release", "Inner Thigh Flex", "Cross & Squeeze", "Stocking Thigh Squeeze", "Shorts Squeeze", "Oiled Thigh Squeeze", "Lotion Grip", "Who Lasts Longer", "Squeeze Harder?", "No Hands Rule", "Ice Then Squeeze"], "desc": "Tam sıktığı anda aradan öne fışkırır", "color": "#5f8bff", "emojis": "🦵💥", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }] },
  { "id": "mvsq073trappedf", "title": "Trapped Finish", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["boşalma", "bacak"], "after": ["Thigh Pulse", "Thigh Twist", "Thigh Milking", "Seated Thigh Lock", "Cowgirl Thigh Squeeze", "Lying Leg Press", "Side-Lying Scissor", "Kneeling Thigh Grip", "Hold Still", "Slow Release", "Inner Thigh Flex", "Cross & Squeeze", "Stocking Thigh Squeeze", "Shorts Squeeze", "Oiled Thigh Squeeze", "Lotion Grip", "Who Lasts Longer", "Squeeze Harder?", "No Hands Rule", "Ice Then Squeeze"], "desc": "Bırakmaz; uyluklarının arasında, içinde kalır gibi", "color": "#5f8bff", "emojis": "🦵🔒", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }] },
  { "id": "mvsq074cheeksqu", "title": "Cheek Squeeze Finish", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["boşalma", "kalça"], "after": ["Cheek Pulse", "Cheek Milking", "One Cheek Flex", "Reverse Seat Squeeze", "Prone Cheek Grip", "Standing Cheek Lock", "Twerk Squeeze", "Cheek Roll", "Bounce & Clamp", "Tight Hold Tease", "Pantyhose Squeeze", "Leggings Cheek Squeeze", "Panty Squeeze", "Soapy Cheek Squeeze", "Ten Squeezes"], "desc": "Kalçasını sıktığı an, aralarına", "color": "#5f8bff", "emojis": "🍑💥", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }] },
  { "id": "mvsq075milkeddr", "title": "Milked Dry", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["boşalma", "kalça", "bacak"], "after": ["Thigh Pulse", "Thigh Twist", "Thigh Milking", "Seated Thigh Lock", "Cowgirl Thigh Squeeze", "Lying Leg Press", "Side-Lying Scissor", "Kneeling Thigh Grip", "Hold Still", "Slow Release", "Inner Thigh Flex", "Cross & Squeeze", "Stocking Thigh Squeeze", "Shorts Squeeze", "Oiled Thigh Squeeze", "Lotion Grip", "Who Lasts Longer", "Squeeze Harder?", "No Hands Rule", "Ice Then Squeeze", "Cheek Pulse", "Cheek Milking", "One Cheek Flex", "Reverse Seat Squeeze", "Prone Cheek Grip", "Standing Cheek Lock", "Twerk Squeeze", "Cheek Roll", "Bounce & Clamp", "Tight Hold Tease", "Pantyhose Squeeze", "Leggings Cheek Squeeze", "Panty Squeeze", "Soapy Cheek Squeeze", "Ten Squeezes"], "desc": "Son damlaya kadar sıkmaya devam eder", "color": "#5f8bff", "emojis": "🥛🍑", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }] },
  { "id": "mvsq076stocking", "title": "Stocking Squeeze Finish", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["boşalma", "bacak", "kıyafet"], "wear": ["kulotlu", "tencorap", "dizustu", "file", "jartiyer"], "after": ["Stocking Thigh Squeeze", "Pantyhose Squeeze"], "desc": "Çoraplı uyluklarının arasına; naylon ıslanır", "color": "#5f8bff", "emojis": "🧦💦", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }] },
  { "id": "mvsq077pantytra", "title": "Panty Trap Finish", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["boşalma", "kalça", "kıyafet"], "wear": ["tanga", "string", "dantelkulot", "pamukkulot", "boxer", "transkulot"], "after": ["Panty Squeeze"], "desc": "Külotunun içinde, kalçasının arasında; külotu geri düzeltir", "color": "#5f8bff", "emojis": "🩲🍯", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }] },
  { "id": "mvsq078losttheg", "title": "Lost The Game", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["boşalma", "bacak", "kalça"], "after": ["Who Lasts Longer", "Ten Squeezes", "Squeeze Harder?", "No Hands Rule"], "desc": "Who Lasts Longer / Ten Squeezes'ta erken gelirsin; o kazandı", "color": "#5f8bff", "emojis": "⏱️💦", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:sehvet", "d": 3 }] },
  { "id": "mvsq079windowsp", "title": "Window Splash", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["boşalma", "bacak", "kalça"], "after": ["Thigh Pulse", "Thigh Twist", "Thigh Milking", "Seated Thigh Lock", "Cowgirl Thigh Squeeze", "Lying Leg Press", "Side-Lying Scissor", "Kneeling Thigh Grip", "Hold Still", "Slow Release", "Inner Thigh Flex", "Cross & Squeeze", "Stocking Thigh Squeeze", "Shorts Squeeze", "Oiled Thigh Squeeze", "Lotion Grip", "Who Lasts Longer", "Squeeze Harder?", "No Hands Rule", "Ice Then Squeeze", "Cheek Pulse", "Cheek Milking", "One Cheek Flex", "Reverse Seat Squeeze", "Prone Cheek Grip", "Standing Cheek Lock", "Twerk Squeeze", "Cheek Roll", "Bounce & Clamp", "Tight Hold Tease", "Pantyhose Squeeze", "Leggings Cheek Squeeze", "Panty Squeeze", "Soapy Cheek Squeeze", "Ten Squeezes"], "desc": "Cama yaslanmışken uyluklarının arasından fışkırır, cama sıçrar; damlalar yavaşça aşağı süzülür", "color": "#5f8bff", "emojis": "🪟💦", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }] },
  { "id": "mvsq080wallspla", "title": "Wall Splash", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["boşalma", "bacak", "kalça"], "after": ["Thigh Pulse", "Thigh Twist", "Thigh Milking", "Seated Thigh Lock", "Cowgirl Thigh Squeeze", "Lying Leg Press", "Side-Lying Scissor", "Kneeling Thigh Grip", "Hold Still", "Slow Release", "Inner Thigh Flex", "Cross & Squeeze", "Stocking Thigh Squeeze", "Shorts Squeeze", "Oiled Thigh Squeeze", "Lotion Grip", "Who Lasts Longer", "Squeeze Harder?", "No Hands Rule", "Ice Then Squeeze", "Cheek Pulse", "Cheek Milking", "One Cheek Flex", "Reverse Seat Squeeze", "Prone Cheek Grip", "Standing Cheek Lock", "Twerk Squeeze", "Cheek Roll", "Bounce & Clamp", "Tight Hold Tease", "Pantyhose Squeeze", "Leggings Cheek Squeeze", "Panty Squeeze", "Soapy Cheek Squeeze", "Ten Squeezes"], "desc": "Duvara dönük sıkıştırırken aradan çıkar, duvara yapışır; 'bunu sen temizliyorsun' der", "color": "#5f8bff", "emojis": "🧱💦", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }] },
  { "id": "mvsq081mirrorsp", "title": "Mirror Splash", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["boşalma", "bacak", "kalça"], "after": ["Thigh Pulse", "Thigh Twist", "Thigh Milking", "Seated Thigh Lock", "Cowgirl Thigh Squeeze", "Lying Leg Press", "Side-Lying Scissor", "Kneeling Thigh Grip", "Hold Still", "Slow Release", "Inner Thigh Flex", "Cross & Squeeze", "Stocking Thigh Squeeze", "Shorts Squeeze", "Oiled Thigh Squeeze", "Lotion Grip", "Who Lasts Longer", "Squeeze Harder?", "No Hands Rule", "Ice Then Squeeze", "Cheek Pulse", "Cheek Milking", "One Cheek Flex", "Reverse Seat Squeeze", "Prone Cheek Grip", "Standing Cheek Lock", "Twerk Squeeze", "Cheek Roll", "Bounce & Clamp", "Tight Hold Tease", "Pantyhose Squeeze", "Leggings Cheek Squeeze", "Panty Squeeze", "Soapy Cheek Squeeze", "Ten Squeezes"], "desc": "Aynanın önünde; fışkırır, kendi yansımasının üstüne sıçrar, ikiniz de izlersiniz", "color": "#5f8bff", "emojis": "🪞💦", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }] },
  { "id": "mvsq082showergl", "title": "Shower Glass Splash", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["boşalma", "bacak", "kalça", "duş"], "desc": "Duş camına sıçrar, akan su yavaşça yıkar", "color": "#5f8bff", "emojis": "🚿💦", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }] },
  { "id": "mvsq083carwindo", "title": "Car Window Splash", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["boşalma", "bacak", "kalça", "araba"], "desc": "Arka koltukta kucağında sıkarken buğulu cama çarpar; dışarıdan iz görünür", "color": "#5f8bff", "emojis": "🚗💦", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }] },
  { "id": "mvsq084elevator", "title": "Elevator Mirror Splash", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["boşalma", "bacak", "kalça", "asansör"], "desc": "Asansör aynasına; kapı açılmadan silmeye çalışır", "color": "#5f8bff", "emojis": "🛗💦", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }] },
  { "id": "mvsq085doorspla", "title": "Door Splash", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["boşalma", "bacak", "kalça"], "after": ["Thigh Pulse", "Thigh Twist", "Thigh Milking", "Seated Thigh Lock", "Cowgirl Thigh Squeeze", "Lying Leg Press", "Side-Lying Scissor", "Kneeling Thigh Grip", "Hold Still", "Slow Release", "Inner Thigh Flex", "Cross & Squeeze", "Stocking Thigh Squeeze", "Shorts Squeeze", "Oiled Thigh Squeeze", "Lotion Grip", "Who Lasts Longer", "Squeeze Harder?", "No Hands Rule", "Ice Then Squeeze", "Cheek Pulse", "Cheek Milking", "One Cheek Flex", "Reverse Seat Squeeze", "Prone Cheek Grip", "Standing Cheek Lock", "Twerk Squeeze", "Cheek Roll", "Bounce & Clamp", "Tight Hold Tease", "Pantyhose Squeeze", "Leggings Cheek Squeeze", "Panty Squeeze", "Soapy Cheek Squeeze", "Ten Squeezes"], "desc": "Kapıya dönükken; kapı kolunun hemen altına", "color": "#5f8bff", "emojis": "🚪💦", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }] },
  { "id": "mvsq086headboar", "title": "Headboard Splash", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["boşalma", "bacak", "kalça"], "after": ["Thigh Pulse", "Thigh Twist", "Thigh Milking", "Seated Thigh Lock", "Cowgirl Thigh Squeeze", "Lying Leg Press", "Side-Lying Scissor", "Kneeling Thigh Grip", "Hold Still", "Slow Release", "Inner Thigh Flex", "Cross & Squeeze", "Stocking Thigh Squeeze", "Shorts Squeeze", "Oiled Thigh Squeeze", "Lotion Grip", "Who Lasts Longer", "Squeeze Harder?", "No Hands Rule", "Ice Then Squeeze", "Cheek Pulse", "Cheek Milking", "One Cheek Flex", "Reverse Seat Squeeze", "Prone Cheek Grip", "Standing Cheek Lock", "Twerk Squeeze", "Cheek Roll", "Bounce & Clamp", "Tight Hold Tease", "Pantyhose Squeeze", "Leggings Cheek Squeeze", "Panty Squeeze", "Soapy Cheek Squeeze", "Ten Squeezes"], "desc": "Yatakta dört ayak üstünde, uyluklarının arasından yatak başlığına kadar uzanır", "color": "#5f8bff", "emojis": "🛏️💦", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }] },
  { "id": "mvsq087tilespla", "title": "Tile Splash", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["boşalma", "bacak", "kalça", "duş"], "desc": "Banyo fayanslarına; derzlerin arasından akar", "color": "#5f8bff", "emojis": "🔲💦", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }] },
  { "id": "mvsq088deskspla", "title": "Desk Splash", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["boşalma", "bacak", "kalça", "ofis"], "desc": "Masaya eğilmişken aradan fışkırır, önündeki kâğıtların üstüne", "color": "#5f8bff", "emojis": "🗄️💦", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }] },
  { "id": "mvsq089kitchenc", "title": "Kitchen Cabinet Splash", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["boşalma", "bacak", "kalça", "mutfak"], "desc": "Tezgâha yaslanmışken üst dolapların kapağına", "color": "#5f8bff", "emojis": "🍳💦", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }] },
  { "id": "mvsq090floortoc", "title": "Floor-To-Ceiling Splash", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["boşalma", "bacak", "kalça", "çatı"], "desc": "Gökdelen camına; arkasında şehrin ışıkları", "color": "#5f8bff", "emojis": "🌃💦", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }] },
  { "id": "mvsq091herownbe", "title": "Her Own Belly", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["boşalma", "bacak"], "after": ["Thigh Pulse", "Thigh Twist", "Thigh Milking", "Seated Thigh Lock", "Cowgirl Thigh Squeeze", "Lying Leg Press", "Side-Lying Scissor", "Kneeling Thigh Grip", "Hold Still", "Slow Release", "Inner Thigh Flex", "Cross & Squeeze", "Stocking Thigh Squeeze", "Shorts Squeeze", "Oiled Thigh Squeeze", "Lotion Grip", "Who Lasts Longer", "Squeeze Harder?", "No Hands Rule", "Ice Then Squeeze"], "desc": "Sırtüstü bacaklarını birleştirmişken aradan çıkıp kendi karnına, göğsüne kadar", "color": "#5f8bff", "emojis": "🫃💦", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }] },
  { "id": "mvsq092herchin", "title": "Her Chin", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["boşalma", "bacak"], "after": ["Lying Leg Press"], "desc": "Lying Leg Press'te o kadar uzağa gider ki çenesine ulaşır; gülerek şaşırır", "color": "#5f8bff", "emojis": "😮💦", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }] },
  { "id": "mvsq093howfar", "title": "How Far?", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["boşalma", "bacak", "kalça"], "after": ["Thigh Pulse", "Thigh Twist", "Thigh Milking", "Seated Thigh Lock", "Cowgirl Thigh Squeeze", "Lying Leg Press", "Side-Lying Scissor", "Kneeling Thigh Grip", "Hold Still", "Slow Release", "Inner Thigh Flex", "Cross & Squeeze", "Stocking Thigh Squeeze", "Shorts Squeeze", "Oiled Thigh Squeeze", "Lotion Grip", "Who Lasts Longer", "Squeeze Harder?", "No Hands Rule", "Ice Then Squeeze", "Cheek Pulse", "Cheek Milking", "One Cheek Flex", "Reverse Seat Squeeze", "Prone Cheek Grip", "Standing Cheek Lock", "Twerk Squeeze", "Cheek Roll", "Bounce & Clamp", "Tight Hold Tease", "Pantyhose Squeeze", "Leggings Cheek Squeeze", "Panty Squeeze", "Soapy Cheek Squeeze", "Ten Squeezes"], "desc": "Nereye kadar gittiğine birlikte bakarsınız; o işaretler, 'rekor' der (Aşk +1)", "color": "#5f8bff", "emojis": "📏💦", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:ask", "d": 1 }] },
  { "id": "mvsq094dripfrom", "title": "Drip From The Glass", "cat": "c:mvcooldown01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "Sıçradıktan sonra camdan süzülüşünü izler, parmağıyla bir çizgi çeker", "color": "#6fb7e9", "emojis": "🪟💧", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 5 }, { "p": "p:samimiyet", "d": 1 }] },
  { "id": "mvsq095titpulse", "title": "Tit Pulse", "cat": "c:mvsqueeze01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["sıkıştır", "göğüs"], "desc": "Göğüslerini ritmik sıkıp bırakır", "color": "#ff7043", "emojis": "🍈💓", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 12 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvsq096titmilki", "title": "Tit Milking", "cat": "c:mvsqueeze01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["sıkıştır", "göğüs"], "desc": "Kökten uca kademe kademe sıkar, sağar gibi", "color": "#ff7043", "emojis": "🍈🥛", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 12 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvsq097alternat", "title": "Alternating Tits", "cat": "c:mvsqueeze01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["sıkıştır", "göğüs"], "desc": "Göğüslerini sırayla yukarı aşağı, ters yönlerde oynatır", "color": "#ff7043", "emojis": "🍈🔁", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 12 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvsq098tittwist", "title": "Tit Twist", "cat": "c:mvsqueeze01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["sıkıştır", "göğüs"], "desc": "Göğüslerini sıkıca birleştirip dairesel çevirir", "color": "#ff7043", "emojis": "🍈🌀", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 12 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvsq099deepclea", "title": "Deep Cleavage Lock", "cat": "c:mvsqueeze01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["sıkıştır", "göğüs"], "desc": "Seni tamamen gömer, ucu bile görünmez; bırakmaz", "color": "#ff7043", "emojis": "🍈🔒", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 12 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvsq100tippeek", "title": "Tip Peek", "cat": "c:mvsqueeze01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["sıkıştır", "göğüs"], "desc": "Her yukarı hareketinde ucu göğüslerinin arasından çıkar; o da öpücük kondurur", "color": "#ff7043", "emojis": "🍈👀", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 12 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvsq101titfuckl", "title": "Titfuck & Lick", "cat": "c:mvsqueeze01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["sıkıştır", "göğüs"], "desc": "Arasından çıktıkça diliyle karşılar", "color": "#ff7043", "emojis": "🍈👅", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 12 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvsq102titfucks", "title": "Titfuck & Suck", "cat": "c:mvsqueeze01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["sıkıştır", "göğüs"], "desc": "Göğüslerini sıkarken başını eğip ucunu ağzına alır", "color": "#ff7043", "emojis": "🍈👄", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 12 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvsq103nipplete", "title": "Nipple Tease", "cat": "c:mvsqueeze01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["sıkıştır", "göğüs"], "desc": "Ucunu meme uçlarında gezdirir, sonra arasına alır", "color": "#ff7043", "emojis": "🍈🔘", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 12 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvsq104slapteas", "title": "Slap Tease", "cat": "c:mvsqueeze01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["sıkıştır", "göğüs"], "desc": "Göğüslerine hafifçe vurursun, o güler ve daha sıkı sarar", "color": "#ff7043", "emojis": "👋🍈", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 12 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvsq105holdstil", "title": "Hold Still Tits", "cat": "c:mvsqueeze01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["sıkıştır", "göğüs"], "desc": "'Kıpırdama' der, sadece göğüsleri hareket eder", "color": "#ff7043", "emojis": "✋🍈", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 12 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvsq106pencilsk", "title": "Pencil Skirt Thigh Lock", "cat": "c:mvoffice01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["ofis", "sıkıştır", "kıyafet", "bacak"], "wear": ["kalem", "yuksekkalem"], "desc": "Kalem eteği diz üstüne kadar sıvar, çoraplı uyluklarını sıkıca kapatır; etek zaten bacaklarını birbirine bastırıyor", "color": "#ff7043", "emojis": "👔🦵", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 12 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvsq107slitsque", "title": "Slit Squeeze", "cat": "c:mvoffice01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["ofis", "sıkıştır", "kıyafet", "bacak"], "wear": ["ofisyirtmac", "yirtmac"], "desc": "Eteğin yırtmacından içeri, uyluklarının arasına; kumaş geri kapanınca sıkışırsın", "color": "#ff7043", "emojis": "✂️🦵", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 12 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvsq108leathers", "title": "Leather Skirt Squeeze", "cat": "c:mvoffice01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["ofis", "sıkıştır", "kıyafet", "bacak"], "wear": ["derikalem"], "desc": "Deri kalem etek gıcırdar; her sıkışta ses çıkarır", "color": "#ff7043", "emojis": "🖤🦵", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 12 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvsq109pantyhos", "title": "Pantyhose Thigh Grip", "cat": "c:mvoffice01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["ofis", "sıkıştır", "kıyafet", "bacak"], "wear": ["kulotlu"], "desc": "Külotlu çorabın naylonu üstünden, uyluklarının arasında", "color": "#ff7043", "emojis": "🩰🦵", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 12 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvsq110deskedge", "title": "Desk Edge Thighjob", "cat": "c:mvoffice01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["ofis", "sıkıştır", "bacak"], "desc": "Masaya yaslanır, eteğini kaldırıp arkasından bacaklarının arasına alır; telefon çalar, açmaz", "color": "#ff7043", "emojis": "🗄️🦵", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 12 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvsq111officech", "title": "Office Chair Thigh Squeeze", "cat": "c:mvoffice01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["ofis", "sıkıştır", "bacak"], "desc": "Döner sandalyede kucağına oturur, sırtı dönük; uyluklarını kapatıp sandalyeyi hafifçe sallar", "color": "#ff7043", "emojis": "🪑🦵", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 12 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvsq112underdes", "title": "Under Desk Leg Lock", "cat": "c:mvoffice01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["ofis", "sıkıştır", "kıyafet", "bacak"], "wear": ["kulotlu", "tencorap"], "desc": "Toplantıdayken masanın altından çoraplı bacaklarıyla seni yakalar, sıkar; yüzünde hiç ifade yok", "color": "#ff7043", "emojis": "🖥️🦵", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 12 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvsq113heelsons", "title": "Heels On Squeeze", "cat": "c:mvoffice01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["ofis", "sıkıştır", "bacak"], "desc": "Topukluları hâlâ ayağında, parmak uçlarında yükselip alçalarak sıkar", "color": "#ff7043", "emojis": "👠🦵", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 12 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvsq114copymach", "title": "Copy Machine Thighjob", "cat": "c:mvoffice01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["ofis", "sıkıştır", "bacak"], "desc": "Fotokopi makinesine eğilir, makine titrerken arkasından bacaklarının arasında", "color": "#ff7043", "emojis": "🖨️🦵", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 12 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvsq115meetingr", "title": "Meeting Room Squeeze", "cat": "c:mvoffice01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["ofis", "sıkıştır", "bacak"], "desc": "Sunum ekranının önünde masaya oturur, bacaklarını omuzlarına alıp kapatır", "color": "#ff7043", "emojis": "📊🦵", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 12 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvsq116skirthik", "title": "Skirt Hike Cheek Squeeze", "cat": "c:mvoffice01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["ofis", "sıkıştır", "kıyafet", "kalça"], "wear": ["kalem", "yuksekkalem"], "desc": "Kalem eteğini beline kadar sıyırır, kalçasının arasına alıp sıkar; etek kaymasın diye elini üstünde tutar", "color": "#ff7043", "emojis": "👔🍑", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 12 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvsq117pantyhos", "title": "Pantyhose Cheek Squeeze", "cat": "c:mvoffice01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["ofis", "sıkıştır", "kıyafet", "kalça"], "wear": ["kulotlu"], "desc": "Çorabın içinden, kalçasının arasına; naylon her şeyi bir arada tutar", "color": "#ff7043", "emojis": "🩰🍑", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 12 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvsq118bosschai", "title": "Boss Chair Reverse Squeeze", "cat": "c:mvoffice01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["ofis", "sıkıştır", "kalça"], "desc": "Patron koltuğunda kucağında ters oturur, kalçasıyla sıkar; 'yönetim kurulu bekliyor'", "color": "#ff7043", "emojis": "💼🍑", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 12 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvsq119windowch", "title": "Window Cheek Lock", "cat": "c:mvoffice01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["ofis", "sıkıştır", "kalça"], "desc": "Ofis camına yaslanır, kalçasını geriye sana kilitler; aşağıda şehir", "color": "#ff7043", "emojis": "🏙️🍑", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 12 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvsq120filingca", "title": "Filing Cabinet Squeeze", "cat": "c:mvoffice01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["ofis", "sıkıştır", "kalça"], "desc": "Dosya dolabına yaslanır; çekmeceler her sıkışta tıngırdar", "color": "#ff7043", "emojis": "🗃️🍑", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 12 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvsq121lanyardp", "title": "Lanyard Pull", "cat": "c:mvoffice01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["ofis", "sıkıştır", "kalça"], "desc": "Yaka kartının ipinden tutup seni çeker, sonra kalçasıyla sıkar", "color": "#ff7043", "emojis": "🪪🍑", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 12 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvsq122threebut", "title": "Three Buttons Open", "cat": "c:mvoffice01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["ofis", "sıkıştır", "kıyafet", "göğüs"], "wear": ["bluz", "ipekbluz", "satengomlek", "ofisgomlek", "gomlek"], "desc": "Bluzunun üç düğmesini açar, sütyeni yerinde; aradan girersin", "color": "#ff7043", "emojis": "👔🍈", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 12 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvsq123blousetu", "title": "Blouse Tucked Titfuck", "cat": "c:mvoffice01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["ofis", "sıkıştır", "kıyafet", "göğüs"], "wear": ["bluz", "ipekbluz", "satengomlek", "ofisgomlek", "gomlek"], "desc": "Bluz hâlâ eteğin içine sokulu; yakadan içeri, göğüslerinin arasına", "color": "#ff7043", "emojis": "👚🍈", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 12 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvsq124blazercl", "title": "Blazer Closed Titfuck", "cat": "c:mvoffice01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["ofis", "sıkıştır", "kıyafet", "göğüs"], "wear": ["blazer"], "desc": "Blazerın düğmesini kapatır, göğüslerini içeride sıkıştırır; blazer ikinci bir el gibi", "color": "#ff7043", "emojis": "🧥🍈", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 12 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvsq125desktitf", "title": "Desk Titfuck", "cat": "c:mvoffice01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["ofis", "sıkıştır", "göğüs"], "desc": "Sen koltukta, o masanın üstüne oturup öne eğilir; göğüsleri kucağında", "color": "#ff7043", "emojis": "🗄️🍈", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 12 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvsq126underdes", "title": "Under Desk Titfuck", "cat": "c:mvoffice01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["ofis", "sıkıştır", "göğüs"], "desc": "Masanın altında diz çöker, bluzunu açıp göğüslerinin arasına alır; sen telefonda konuşuyorsun", "color": "#ff7043", "emojis": "🖥️🍈", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 12 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvsq127glasseso", "title": "Glasses On Titfuck", "cat": "c:mvoffice01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["ofis", "sıkıştır", "göğüs"], "desc": "Gözlüğünün üstünden bakar, göğüslerini kaldırıp seni arasına alır; 'dosyayı inceledim'", "color": "#ff7043", "emojis": "👓🍈", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 12 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvsq128lunchbre", "title": "Lunch Break Titfuck", "cat": "c:mvoffice01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["ofis", "sıkıştır", "göğüs"], "desc": "Öğle arasında kapıyı kilitler; 20 dakikası var", "color": "#ff7043", "emojis": "🥪🍈", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 12 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvsq129conferen", "title": "Conference Table Titfuck", "cat": "c:mvoffice01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["ofis", "sıkıştır", "göğüs"], "desc": "Toplantı masasına sırtüstü uzanır, sen başında; göğüslerini kendisi sıkar", "color": "#ff7043", "emojis": "📊🍈", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 12 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvsq130elevator", "title": "Elevator Titfuck", "cat": "c:mvoffice01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["ofis", "sıkıştır", "göğüs"], "desc": "Asansörü durdurur, bluzunu açar; acil durum ışığı yanıp söner", "color": "#ff7043", "emojis": "🛗🍈", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 12 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvsq131braunder", "title": "Bra Under Blouse Squeeze", "cat": "c:mvoffice01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["ofis", "sıkıştır", "kıyafet", "göğüs"], "wear": ["bluz", "ipekbluz", "satengomlek", "ofisgomlek", "gomlek"], "desc": "Bluzun içinde sütyeni yukarı sıyırır, göğüsleri sütyen ile bluz arasında sıkışık", "color": "#ff7043", "emojis": "👙🍈", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 12 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvsq132performa", "title": "Performance Bonus", "cat": "c:mvoffice01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["ofis", "sıkıştır", "göğüs"], "desc": "'Bu çeyrek iyi iş çıkardın' der; ödül titfuck", "color": "#ff7043", "emojis": "💰🍈", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 12 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvsq133dontmake", "title": "Don't Make A Sound", "cat": "c:mvoffice01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["ofis", "sıkıştır", "bacak"], "desc": "Yan odada patron var; sesini çıkarırsan durur", "color": "#ff7043", "emojis": "🤫🦵", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 12 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvsq134deadline", "title": "Deadline Squeeze", "cat": "c:mvoffice01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["ofis", "sıkıştır", "kalça"], "desc": "Toplantıya 5 dakika var; o sürede bitirmen gerek", "color": "#ff7043", "emojis": "⏰🍑", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 12 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvsq135dresscod", "title": "Dress Code Violation", "cat": "c:mvoffice01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["ofis", "sıkıştır", "göğüs"], "desc": "Bluzu 'fazla açık' diye uyarırsın; o daha da açar", "color": "#ff7043", "emojis": "📋🍈", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 12 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvsq136overtime", "title": "Overtime Squeeze", "cat": "c:mvoffice01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["ofis", "sıkıştır", "bacak"], "desc": "Herkes gitmiş, ofis karanlık; sadece monitör ışığı", "color": "#ff7043", "emojis": "🌙🦵", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 12 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvsq137pantyhos", "title": "Pantyhose Thigh Finish", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["ofis", "boşalma", "bacak", "kıyafet"], "wear": ["kulotlu", "tencorap"], "desc": "Çoraplı uyluklarının arasında; naylon ıslanır, eteğini düzeltip toplantıya gider", "color": "#5f8bff", "emojis": "🩰💦", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }] },
  { "id": "mvsq138skirtlin", "title": "Skirt Lining Finish", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["ofis", "boşalma", "kalça", "kıyafet"], "wear": ["kalem", "yuksekkalem", "derikalem"], "desc": "Kalem eteğin içinde, kalçasının arasında; eteği indirir, kimse anlamaz", "color": "#5f8bff", "emojis": "👔🍯", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }] },
  { "id": "mvsq139blousecu", "title": "Blouse Cumshot", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["ofis", "boşalma", "göğüs", "kıyafet"], "wear": ["bluz", "ipekbluz", "satengomlek", "ofisgomlek", "gomlek"], "desc": "Göğüslerinin arasında, bluzun içinde; düğmeleri kapatır ama leke belli", "color": "#5f8bff", "emojis": "👚💦", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }] },
  { "id": "mvsq140blazerhi", "title": "Blazer Hides It", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["ofis", "boşalma", "göğüs", "kıyafet"], "wear": ["blazer"], "desc": "Bluzu ıslandı, blazerı kapatıp öyle çıkar", "color": "#5f8bff", "emojis": "🧥🤫", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }] },
  { "id": "mvsq141glassess", "title": "Glasses Splash", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["ofis", "boşalma", "göğüs"], "desc": "Göğüslerinin arasından fışkırır, gözlük camına sıçrar", "color": "#5f8bff", "emojis": "👓💦", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }] },
  { "id": "mvsq142monitors", "title": "Monitor Splash", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["ofis", "boşalma", "bacak"], "desc": "Masada uyluklarının arasından fışkırır, monitöre sıçrar", "color": "#5f8bff", "emojis": "🖥️💦", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }] },
  { "id": "mvsq143reportsp", "title": "Report Splash", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["ofis", "boşalma", "bacak", "kalça"], "desc": "Masadaki rapora sıçrar; 'bunu yeniden yazdırmam gerek'", "color": "#5f8bff", "emojis": "📄💦", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }] },
  { "id": "mvsq144officewi", "title": "Office Window Splash", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["ofis", "boşalma", "kalça"], "desc": "Kalçasının arasından fışkırır, ofis camına; şehrin üstünde damlalar", "color": "#5f8bff", "emojis": "🏙️💦", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }] },
  { "id": "mvsq145lanyardd", "title": "Lanyard Drip", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["ofis", "boşalma", "göğüs"], "desc": "Yaka kartının üstüne damlar; adı ıslanır", "color": "#5f8bff", "emojis": "🪪💧", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }] },
  { "id": "mvsq146clockout", "title": "Clock Out", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["ofis", "boşalma", "bacak", "kalça", "göğüs"], "desc": "Mesai bitiş saatinde tam", "color": "#5f8bff", "emojis": "⏱️💦", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }] },
  { "id": "mvsq147thighmil", "title": "Thigh Milked", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["boşalma", "bacak"], "after": ["Thigh Pulse", "Thigh Twist", "Thigh Milking", "Seated Thigh Lock", "Cowgirl Thigh Squeeze", "Lying Leg Press", "Side-Lying Scissor", "Kneeling Thigh Grip", "Hold Still", "Slow Release", "Inner Thigh Flex", "Cross & Squeeze", "Stocking Thigh Squeeze", "Shorts Squeeze", "Oiled Thigh Squeeze", "Lotion Grip", "Who Lasts Longer", "Squeeze Harder?", "No Hands Rule", "Ice Then Squeeze", "Thigh Vise", "Knee Squeeze", "Squeeze Countdown", "Pencil Skirt Thigh Lock", "Slit Squeeze", "Leather Skirt Squeeze", "Pantyhose Thigh Grip", "Desk Edge Thighjob", "Office Chair Thigh Squeeze", "Under Desk Leg Lock", "Heels On Squeeze", "Copy Machine Thighjob", "Meeting Room Squeeze", "Don't Make A Sound", "Overtime Squeeze"], "desc": "Uyluklarını kökten uca kademe kademe sıkar; her sıkışta bir atım daha çıkar", "color": "#5f8bff", "emojis": "🦵🥛", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }] },
  { "id": "mvsq148squeezep", "title": "Squeeze Per Shot", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["boşalma", "bacak"], "after": ["Thigh Pulse", "Thigh Twist", "Thigh Milking", "Seated Thigh Lock", "Cowgirl Thigh Squeeze", "Lying Leg Press", "Side-Lying Scissor", "Kneeling Thigh Grip", "Hold Still", "Slow Release", "Inner Thigh Flex", "Cross & Squeeze", "Stocking Thigh Squeeze", "Shorts Squeeze", "Oiled Thigh Squeeze", "Lotion Grip", "Who Lasts Longer", "Squeeze Harder?", "No Hands Rule", "Ice Then Squeeze", "Thigh Vise", "Knee Squeeze", "Squeeze Countdown", "Pencil Skirt Thigh Lock", "Slit Squeeze", "Leather Skirt Squeeze", "Pantyhose Thigh Grip", "Desk Edge Thighjob", "Office Chair Thigh Squeeze", "Under Desk Leg Lock", "Heels On Squeeze", "Copy Machine Thighjob", "Meeting Room Squeeze", "Don't Make A Sound", "Overtime Squeeze"], "desc": "Her fışkırışta bir kez daha sıkar, ritmi senin boşalmanla eşler", "color": "#5f8bff", "emojis": "🦵💦", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }] },
  { "id": "mvsq149milkever", "title": "Milk Every Drop", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["boşalma", "bacak"], "after": ["Thigh Pulse", "Thigh Twist", "Thigh Milking", "Seated Thigh Lock", "Cowgirl Thigh Squeeze", "Lying Leg Press", "Side-Lying Scissor", "Kneeling Thigh Grip", "Hold Still", "Slow Release", "Inner Thigh Flex", "Cross & Squeeze", "Stocking Thigh Squeeze", "Shorts Squeeze", "Oiled Thigh Squeeze", "Lotion Grip", "Who Lasts Longer", "Squeeze Harder?", "No Hands Rule", "Ice Then Squeeze", "Thigh Vise", "Knee Squeeze", "Squeeze Countdown", "Pencil Skirt Thigh Lock", "Slit Squeeze", "Leather Skirt Squeeze", "Pantyhose Thigh Grip", "Desk Edge Thighjob", "Office Chair Thigh Squeeze", "Under Desk Leg Lock", "Heels On Squeeze", "Copy Machine Thighjob", "Meeting Room Squeeze", "Don't Make A Sound", "Overtime Squeeze"], "desc": "Sen bittiğini sanarken sıkmaya devam eder; son damlalar da aradan süzülür", "color": "#5f8bff", "emojis": "🥛💧", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }] },
  { "id": "mvsq150slowmilk", "title": "Slow Milking", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["boşalma", "bacak"], "after": ["Thigh Pulse", "Thigh Twist", "Thigh Milking", "Seated Thigh Lock", "Cowgirl Thigh Squeeze", "Lying Leg Press", "Side-Lying Scissor", "Kneeling Thigh Grip", "Hold Still", "Slow Release", "Inner Thigh Flex", "Cross & Squeeze", "Stocking Thigh Squeeze", "Shorts Squeeze", "Oiled Thigh Squeeze", "Lotion Grip", "Who Lasts Longer", "Squeeze Harder?", "No Hands Rule", "Ice Then Squeeze", "Thigh Vise", "Knee Squeeze", "Squeeze Countdown", "Pencil Skirt Thigh Lock", "Slit Squeeze", "Leather Skirt Squeeze", "Pantyhose Thigh Grip", "Desk Edge Thighjob", "Office Chair Thigh Squeeze", "Under Desk Leg Lock", "Heels On Squeeze", "Copy Machine Thighjob", "Meeting Room Squeeze", "Don't Make A Sound", "Overtime Squeeze"], "desc": "Çok yavaş, saniyelerce sıkıp bekler; her atım ayrı ayrı uzar", "color": "#5f8bff", "emojis": "🐌🥛", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }] },
  { "id": "mvsq151fastpump", "title": "Fast Pump Milking", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["boşalma", "bacak"], "after": ["Thigh Pulse", "Thigh Twist", "Thigh Milking", "Seated Thigh Lock", "Cowgirl Thigh Squeeze", "Lying Leg Press", "Side-Lying Scissor", "Kneeling Thigh Grip", "Hold Still", "Slow Release", "Inner Thigh Flex", "Cross & Squeeze", "Stocking Thigh Squeeze", "Shorts Squeeze", "Oiled Thigh Squeeze", "Lotion Grip", "Who Lasts Longer", "Squeeze Harder?", "No Hands Rule", "Ice Then Squeeze", "Thigh Vise", "Knee Squeeze", "Squeeze Countdown", "Pencil Skirt Thigh Lock", "Slit Squeeze", "Leather Skirt Squeeze", "Pantyhose Thigh Grip", "Desk Edge Thighjob", "Office Chair Thigh Squeeze", "Under Desk Leg Lock", "Heels On Squeeze", "Copy Machine Thighjob", "Meeting Room Squeeze", "Don't Make A Sound", "Overtime Squeeze"], "desc": "Hızlı, kısa sıkışlarla; boşalma neredeyse bitmeden dalga dalga", "color": "#5f8bff", "emojis": "⚡🥛", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }] },
  { "id": "mvsq152countthe", "title": "Count The Pumps", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["boşalma", "bacak"], "after": ["Thigh Pulse", "Thigh Twist", "Thigh Milking", "Seated Thigh Lock", "Cowgirl Thigh Squeeze", "Lying Leg Press", "Side-Lying Scissor", "Kneeling Thigh Grip", "Hold Still", "Slow Release", "Inner Thigh Flex", "Cross & Squeeze", "Stocking Thigh Squeeze", "Shorts Squeeze", "Oiled Thigh Squeeze", "Lotion Grip", "Who Lasts Longer", "Squeeze Harder?", "No Hands Rule", "Ice Then Squeeze", "Thigh Vise", "Knee Squeeze", "Squeeze Countdown", "Pencil Skirt Thigh Lock", "Slit Squeeze", "Leather Skirt Squeeze", "Pantyhose Thigh Grip", "Desk Edge Thighjob", "Office Chair Thigh Squeeze", "Under Desk Leg Lock", "Heels On Squeeze", "Copy Machine Thighjob", "Meeting Room Squeeze", "Don't Make A Sound", "Overtime Squeeze"], "desc": "Her sıkışı sesli sayar: 'bir… iki… üç…'; kaçıncıda bittiğini söyler", "color": "#5f8bff", "emojis": "🔢🥛", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }] },
  { "id": "mvsq153doublemi", "title": "Double Milking", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["boşalma", "bacak"], "after": ["Thigh Pulse", "Thigh Twist", "Thigh Milking", "Seated Thigh Lock", "Cowgirl Thigh Squeeze", "Lying Leg Press", "Side-Lying Scissor", "Kneeling Thigh Grip", "Hold Still", "Slow Release", "Inner Thigh Flex", "Cross & Squeeze", "Stocking Thigh Squeeze", "Shorts Squeeze", "Oiled Thigh Squeeze", "Lotion Grip", "Who Lasts Longer", "Squeeze Harder?", "No Hands Rule", "Ice Then Squeeze", "Thigh Vise", "Knee Squeeze", "Squeeze Countdown", "Pencil Skirt Thigh Lock", "Slit Squeeze", "Leather Skirt Squeeze", "Pantyhose Thigh Grip", "Desk Edge Thighjob", "Office Chair Thigh Squeeze", "Under Desk Leg Lock", "Heels On Squeeze", "Copy Machine Thighjob", "Meeting Room Squeeze", "Don't Make A Sound", "Overtime Squeeze"], "desc": "Uyluklarıyla sıkarken bir eliyle de aşağıdan sağar", "color": "#5f8bff", "emojis": "🦵🤲", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }] },
  { "id": "mvsq154stocking", "title": "Stocking Milked", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["boşalma", "bacak", "kıyafet"], "wear": ["kulotlu", "tencorap", "dizustu", "file"], "after": ["Thigh Pulse", "Thigh Twist", "Thigh Milking", "Seated Thigh Lock", "Cowgirl Thigh Squeeze", "Lying Leg Press", "Side-Lying Scissor", "Kneeling Thigh Grip", "Hold Still", "Slow Release", "Inner Thigh Flex", "Cross & Squeeze", "Stocking Thigh Squeeze", "Shorts Squeeze", "Oiled Thigh Squeeze", "Lotion Grip", "Who Lasts Longer", "Squeeze Harder?", "No Hands Rule", "Ice Then Squeeze", "Thigh Vise", "Knee Squeeze", "Squeeze Countdown", "Pencil Skirt Thigh Lock", "Slit Squeeze", "Leather Skirt Squeeze", "Pantyhose Thigh Grip", "Desk Edge Thighjob", "Office Chair Thigh Squeeze", "Under Desk Leg Lock", "Heels On Squeeze", "Copy Machine Thighjob", "Meeting Room Squeeze", "Don't Make A Sound", "Overtime Squeeze"], "desc": "Çoraplı uyluklarıyla sağar; naylon her atımı emer", "color": "#5f8bff", "emojis": "🧦🥛", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }] },
  { "id": "mvsq155pencilsk", "title": "Pencil Skirt Milking", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["boşalma", "bacak", "kıyafet"], "wear": ["kalem", "yuksekkalem", "derikalem"], "after": ["Thigh Pulse", "Thigh Twist", "Thigh Milking", "Seated Thigh Lock", "Cowgirl Thigh Squeeze", "Lying Leg Press", "Side-Lying Scissor", "Kneeling Thigh Grip", "Hold Still", "Slow Release", "Inner Thigh Flex", "Cross & Squeeze", "Stocking Thigh Squeeze", "Shorts Squeeze", "Oiled Thigh Squeeze", "Lotion Grip", "Who Lasts Longer", "Squeeze Harder?", "No Hands Rule", "Ice Then Squeeze", "Thigh Vise", "Knee Squeeze", "Squeeze Countdown", "Pencil Skirt Thigh Lock", "Slit Squeeze", "Leather Skirt Squeeze", "Pantyhose Thigh Grip", "Desk Edge Thighjob", "Office Chair Thigh Squeeze", "Under Desk Leg Lock", "Heels On Squeeze", "Copy Machine Thighjob", "Meeting Room Squeeze", "Don't Make A Sound", "Overtime Squeeze"], "desc": "Kalem etek bacaklarını sıkıca birleştirmiş; sağdıkça eteğin astarı ıslanır", "color": "#5f8bff", "emojis": "👔🥛", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }] },
  { "id": "mvsq156oiledmil", "title": "Oiled Milking", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["boşalma", "bacak"], "after": ["Thigh Pulse", "Thigh Twist", "Thigh Milking", "Seated Thigh Lock", "Cowgirl Thigh Squeeze", "Lying Leg Press", "Side-Lying Scissor", "Kneeling Thigh Grip", "Hold Still", "Slow Release", "Inner Thigh Flex", "Cross & Squeeze", "Stocking Thigh Squeeze", "Shorts Squeeze", "Oiled Thigh Squeeze", "Lotion Grip", "Who Lasts Longer", "Squeeze Harder?", "No Hands Rule", "Ice Then Squeeze", "Thigh Vise", "Knee Squeeze", "Squeeze Countdown", "Pencil Skirt Thigh Lock", "Slit Squeeze", "Leather Skirt Squeeze", "Pantyhose Thigh Grip", "Desk Edge Thighjob", "Office Chair Thigh Squeeze", "Under Desk Leg Lock", "Heels On Squeeze", "Copy Machine Thighjob", "Meeting Room Squeeze", "Don't Make A Sound", "Overtime Squeeze"], "desc": "Yağlı uylukları her sıkışta kayar, yeniden yakalar; boşalma uzar", "color": "#5f8bff", "emojis": "🫒🥛", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }] },
  { "id": "mvsq157milkandh", "title": "Milk And Hold", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["boşalma", "bacak"], "after": ["Thigh Pulse", "Thigh Twist", "Thigh Milking", "Seated Thigh Lock", "Cowgirl Thigh Squeeze", "Lying Leg Press", "Side-Lying Scissor", "Kneeling Thigh Grip", "Hold Still", "Slow Release", "Inner Thigh Flex", "Cross & Squeeze", "Stocking Thigh Squeeze", "Shorts Squeeze", "Oiled Thigh Squeeze", "Lotion Grip", "Who Lasts Longer", "Squeeze Harder?", "No Hands Rule", "Ice Then Squeeze", "Thigh Vise", "Knee Squeeze", "Squeeze Countdown", "Pencil Skirt Thigh Lock", "Slit Squeeze", "Leather Skirt Squeeze", "Pantyhose Thigh Grip", "Desk Edge Thighjob", "Office Chair Thigh Squeeze", "Under Desk Leg Lock", "Heels On Squeeze", "Copy Machine Thighjob", "Meeting Room Squeeze", "Don't Make A Sound", "Overtime Squeeze"], "desc": "Son atımda bacaklarını kilitler, bırakmaz; içinde kalmış gibi", "color": "#5f8bff", "emojis": "🥛🔒", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }] },
  { "id": "mvsq158milkings", "title": "Milking Stool", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["boşalma", "bacak"], "after": ["Thigh Pulse", "Thigh Twist", "Thigh Milking", "Seated Thigh Lock", "Cowgirl Thigh Squeeze", "Lying Leg Press", "Side-Lying Scissor", "Kneeling Thigh Grip", "Hold Still", "Slow Release", "Inner Thigh Flex", "Cross & Squeeze", "Stocking Thigh Squeeze", "Shorts Squeeze", "Oiled Thigh Squeeze", "Lotion Grip", "Who Lasts Longer", "Squeeze Harder?", "No Hands Rule", "Ice Then Squeeze", "Thigh Vise", "Knee Squeeze", "Squeeze Countdown", "Pencil Skirt Thigh Lock", "Slit Squeeze", "Leather Skirt Squeeze", "Pantyhose Thigh Grip", "Desk Edge Thighjob", "Office Chair Thigh Squeeze", "Under Desk Leg Lock", "Heels On Squeeze", "Copy Machine Thighjob", "Meeting Room Squeeze", "Don't Make A Sound", "Overtime Squeeze"], "desc": "Kucağında oturur, sırtı dönük; 'sağım taburesi' diye güler, bacaklarıyla sağar", "color": "#5f8bff", "emojis": "🪑🥛", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }] },
  { "id": "mvsq159farmgirl", "title": "Farm Girl Milking", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["boşalma", "bacak"], "after": ["Thigh Pulse", "Thigh Twist", "Thigh Milking", "Seated Thigh Lock", "Cowgirl Thigh Squeeze", "Lying Leg Press", "Side-Lying Scissor", "Kneeling Thigh Grip", "Hold Still", "Slow Release", "Inner Thigh Flex", "Cross & Squeeze", "Stocking Thigh Squeeze", "Shorts Squeeze", "Oiled Thigh Squeeze", "Lotion Grip", "Who Lasts Longer", "Squeeze Harder?", "No Hands Rule", "Ice Then Squeeze", "Thigh Vise", "Knee Squeeze", "Squeeze Countdown", "Pencil Skirt Thigh Lock", "Slit Squeeze", "Leather Skirt Squeeze", "Pantyhose Thigh Grip", "Desk Edge Thighjob", "Office Chair Thigh Squeeze", "Under Desk Leg Lock", "Heels On Squeeze", "Copy Machine Thighjob", "Meeting Room Squeeze", "Don't Make A Sound", "Overtime Squeeze"], "desc": "Çiftlik kızı rolünde: 'bugünkü sütü toplayalım'", "color": "#5f8bff", "emojis": "🐄🥛", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }] },
  { "id": "mvsq160bucketbe", "title": "Bucket Below", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["boşalma", "bacak"], "after": ["Thigh Pulse", "Thigh Twist", "Thigh Milking", "Seated Thigh Lock", "Cowgirl Thigh Squeeze", "Lying Leg Press", "Side-Lying Scissor", "Kneeling Thigh Grip", "Hold Still", "Slow Release", "Inner Thigh Flex", "Cross & Squeeze", "Stocking Thigh Squeeze", "Shorts Squeeze", "Oiled Thigh Squeeze", "Lotion Grip", "Who Lasts Longer", "Squeeze Harder?", "No Hands Rule", "Ice Then Squeeze", "Thigh Vise", "Knee Squeeze", "Squeeze Countdown", "Pencil Skirt Thigh Lock", "Slit Squeeze", "Leather Skirt Squeeze", "Pantyhose Thigh Grip", "Desk Edge Thighjob", "Office Chair Thigh Squeeze", "Under Desk Leg Lock", "Heels On Squeeze", "Copy Machine Thighjob", "Meeting Room Squeeze", "Don't Make A Sound", "Overtime Squeeze"], "desc": "Aşağıya bir bardak koyar, sağdıklarını içine damlatır; sonra bakar", "color": "#5f8bff", "emojis": "🪣🥛", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }] },
  { "id": "mvsq161milkedtw", "title": "Milked Twice", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["boşalma", "bacak"], "after": ["Thigh Pulse", "Thigh Twist", "Thigh Milking", "Seated Thigh Lock", "Cowgirl Thigh Squeeze", "Lying Leg Press", "Side-Lying Scissor", "Kneeling Thigh Grip", "Hold Still", "Slow Release", "Inner Thigh Flex", "Cross & Squeeze", "Stocking Thigh Squeeze", "Shorts Squeeze", "Oiled Thigh Squeeze", "Lotion Grip", "Who Lasts Longer", "Squeeze Harder?", "No Hands Rule", "Ice Then Squeeze", "Thigh Vise", "Knee Squeeze", "Squeeze Countdown", "Pencil Skirt Thigh Lock", "Slit Squeeze", "Leather Skirt Squeeze", "Pantyhose Thigh Grip", "Desk Edge Thighjob", "Office Chair Thigh Squeeze", "Under Desk Leg Lock", "Heels On Squeeze", "Copy Machine Thighjob", "Meeting Room Squeeze", "Don't Make A Sound", "Overtime Squeeze"], "desc": "Bir kez sağar, bırakmaz, yeniden başlar; ikinci boşalma (Dayanıklılık yüksekse)", "color": "#5f8bff", "emojis": "🔁🥛", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 2 }] },
  { "id": "mvsq162overmilk", "title": "Overmilked", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["boşalma", "bacak"], "after": ["Thigh Pulse", "Thigh Twist", "Thigh Milking", "Seated Thigh Lock", "Cowgirl Thigh Squeeze", "Lying Leg Press", "Side-Lying Scissor", "Kneeling Thigh Grip", "Hold Still", "Slow Release", "Inner Thigh Flex", "Cross & Squeeze", "Stocking Thigh Squeeze", "Shorts Squeeze", "Oiled Thigh Squeeze", "Lotion Grip", "Who Lasts Longer", "Squeeze Harder?", "No Hands Rule", "Ice Then Squeeze", "Thigh Vise", "Knee Squeeze", "Squeeze Countdown", "Pencil Skirt Thigh Lock", "Slit Squeeze", "Leather Skirt Squeeze", "Pantyhose Thigh Grip", "Desk Edge Thighjob", "Office Chair Thigh Squeeze", "Under Desk Leg Lock", "Heels On Squeeze", "Copy Machine Thighjob", "Meeting Room Squeeze", "Don't Make A Sound", "Overtime Squeeze"], "desc": "Bittikten sonra da sıkmaya devam eder; hassaslıktan kıvranırsın, o güler", "color": "#5f8bff", "emojis": "😵🥛", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:sehvet", "d": 3 }] },
  { "id": "mvsq163milkings", "title": "Milking Splash", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["boşalma", "bacak"], "after": ["Thigh Pulse", "Thigh Twist", "Thigh Milking", "Seated Thigh Lock", "Cowgirl Thigh Squeeze", "Lying Leg Press", "Side-Lying Scissor", "Kneeling Thigh Grip", "Hold Still", "Slow Release", "Inner Thigh Flex", "Cross & Squeeze", "Stocking Thigh Squeeze", "Shorts Squeeze", "Oiled Thigh Squeeze", "Lotion Grip", "Who Lasts Longer", "Squeeze Harder?", "No Hands Rule", "Ice Then Squeeze", "Thigh Vise", "Knee Squeeze", "Squeeze Countdown", "Pencil Skirt Thigh Lock", "Slit Squeeze", "Leather Skirt Squeeze", "Pantyhose Thigh Grip", "Desk Edge Thighjob", "Office Chair Thigh Squeeze", "Under Desk Leg Lock", "Heels On Squeeze", "Copy Machine Thighjob", "Meeting Room Squeeze", "Don't Make A Sound", "Overtime Squeeze"], "desc": "Her sıkışta aradan bir atım daha fırlar; ilki en uzağa gider", "color": "#5f8bff", "emojis": "🦵💦", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }] },
  { "id": "mvsq164milkedon", "title": "Milked Onto Glass", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["boşalma", "bacak"], "after": ["Thigh Pulse", "Thigh Twist", "Thigh Milking", "Seated Thigh Lock", "Cowgirl Thigh Squeeze", "Lying Leg Press", "Side-Lying Scissor", "Kneeling Thigh Grip", "Hold Still", "Slow Release", "Inner Thigh Flex", "Cross & Squeeze", "Stocking Thigh Squeeze", "Shorts Squeeze", "Oiled Thigh Squeeze", "Lotion Grip", "Who Lasts Longer", "Squeeze Harder?", "No Hands Rule", "Ice Then Squeeze", "Thigh Vise", "Knee Squeeze", "Squeeze Countdown", "Pencil Skirt Thigh Lock", "Slit Squeeze", "Leather Skirt Squeeze", "Pantyhose Thigh Grip", "Desk Edge Thighjob", "Office Chair Thigh Squeeze", "Under Desk Leg Lock", "Heels On Squeeze", "Copy Machine Thighjob", "Meeting Room Squeeze", "Don't Make A Sound", "Overtime Squeeze"], "desc": "Cama yaslanmış sağarken atımlar cama sıra sıra dizilir", "color": "#5f8bff", "emojis": "🪟🥛", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }] },
  { "id": "mvsq165milkedon", "title": "Milked Onto Her Belly", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["boşalma", "bacak"], "after": ["Thigh Pulse", "Thigh Twist", "Thigh Milking", "Seated Thigh Lock", "Cowgirl Thigh Squeeze", "Lying Leg Press", "Side-Lying Scissor", "Kneeling Thigh Grip", "Hold Still", "Slow Release", "Inner Thigh Flex", "Cross & Squeeze", "Stocking Thigh Squeeze", "Shorts Squeeze", "Oiled Thigh Squeeze", "Lotion Grip", "Who Lasts Longer", "Squeeze Harder?", "No Hands Rule", "Ice Then Squeeze", "Thigh Vise", "Knee Squeeze", "Squeeze Countdown", "Pencil Skirt Thigh Lock", "Slit Squeeze", "Leather Skirt Squeeze", "Pantyhose Thigh Grip", "Desk Edge Thighjob", "Office Chair Thigh Squeeze", "Under Desk Leg Lock", "Heels On Squeeze", "Copy Machine Thighjob", "Meeting Room Squeeze", "Don't Make A Sound", "Overtime Squeeze"], "desc": "Sırtüstü bacaklarını kapatmış; her sıkışta karnına bir çizgi daha", "color": "#5f8bff", "emojis": "🫃🥛", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }] },
  { "id": "mvsq166milkedon", "title": "Milked Onto Mirror", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["boşalma", "bacak"], "after": ["Thigh Pulse", "Thigh Twist", "Thigh Milking", "Seated Thigh Lock", "Cowgirl Thigh Squeeze", "Lying Leg Press", "Side-Lying Scissor", "Kneeling Thigh Grip", "Hold Still", "Slow Release", "Inner Thigh Flex", "Cross & Squeeze", "Stocking Thigh Squeeze", "Shorts Squeeze", "Oiled Thigh Squeeze", "Lotion Grip", "Who Lasts Longer", "Squeeze Harder?", "No Hands Rule", "Ice Then Squeeze", "Thigh Vise", "Knee Squeeze", "Squeeze Countdown", "Pencil Skirt Thigh Lock", "Slit Squeeze", "Leather Skirt Squeeze", "Pantyhose Thigh Grip", "Desk Edge Thighjob", "Office Chair Thigh Squeeze", "Under Desk Leg Lock", "Heels On Squeeze", "Copy Machine Thighjob", "Meeting Room Squeeze", "Don't Make A Sound", "Overtime Squeeze"], "desc": "Aynada izleyerek sağar, atımlar aynaya sıçrar", "color": "#5f8bff", "emojis": "🪞🥛", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }] },
  { "id": "mvsq167milkingt", "title": "Milking Trail", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["boşalma", "bacak"], "after": ["Thigh Pulse", "Thigh Twist", "Thigh Milking", "Seated Thigh Lock", "Cowgirl Thigh Squeeze", "Lying Leg Press", "Side-Lying Scissor", "Kneeling Thigh Grip", "Hold Still", "Slow Release", "Inner Thigh Flex", "Cross & Squeeze", "Stocking Thigh Squeeze", "Shorts Squeeze", "Oiled Thigh Squeeze", "Lotion Grip", "Who Lasts Longer", "Squeeze Harder?", "No Hands Rule", "Ice Then Squeeze", "Thigh Vise", "Knee Squeeze", "Squeeze Countdown", "Pencil Skirt Thigh Lock", "Slit Squeeze", "Leather Skirt Squeeze", "Pantyhose Thigh Grip", "Desk Edge Thighjob", "Office Chair Thigh Squeeze", "Under Desk Leg Lock", "Heels On Squeeze", "Copy Machine Thighjob", "Meeting Room Squeeze", "Don't Make A Sound", "Overtime Squeeze"], "desc": "Atımlar giderek kısalır; yerde bir çizgi oluşur, o sayar", "color": "#5f8bff", "emojis": "〰️💦", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }] },
  { "id": "mvsq168showtheh", "title": "Show The Harvest", "cat": "c:mvcooldown01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "Uyluklarını açıp aralarında biriken 'ürünü' gösterir", "color": "#6fb7e9", "emojis": "🥛👀", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 5 }, { "p": "p:samimiyet", "d": 1 }] },
  { "id": "mvsq169thighgap", "title": "Thigh Gap Taste", "cat": "c:mvcooldown01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "Uyluklarının arasından parmağıyla alıp tadına bakar", "color": "#6fb7e9", "emojis": "👅🦵", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 5 }, { "p": "p:sehvet", "d": 3 }] },
  { "id": "mvsq170squeezeo", "title": "Squeeze Out The Rest", "cat": "c:mvcooldown01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "Elleriyle son kez kökten uca sıvazlar, kalan damlaları da alır", "color": "#6fb7e9", "emojis": "🤲💧", "onEffects": [{ "p": "p:samimiyet", "d": 1 }] },
  { "id": "mvsq171sametime", "title": "Same Time Tomorrow", "cat": "c:mvcooldown01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "'Yarın aynı saatte yine sağım' der", "color": "#6fb7e9", "emojis": "📅🥛", "onEffects": [{ "p": "p:ask", "d": 1 }, { "p": "p:samimiyet", "d": 1 }] },
  { "id": "mved01cheekrel", "title": "Cheek Release", "cat": "c:mvsqueeze01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["sıkıştır", "engel", "kalça"], "desc": "Gelmek üzereyken kalçasını aniden gevşetir; sürtünme kaybolur, sen boşlukta kalırsın", "color": "#ff7043", "emojis": "🍑🔓", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 8 }, { "p": "p:sehvet", "d": 6 }] },
  { "id": "mved02stepforw", "title": "Step Forward", "cat": "c:mvsqueeze01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["sıkıştır", "engel", "kalça"], "desc": "Tam o an bir adım öne çıkar; aradaki temas kopar, omzunun üstünden güler", "color": "#ff7043", "emojis": "👣🔙", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 8 }, { "p": "p:sehvet", "d": 6 }] },
  { "id": "mved03hipfreez", "title": "Hip Freeze", "cat": "c:mvsqueeze01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["sıkıştır", "engel", "kalça"], "desc": "Kalçası sana yaslı ama tamamen hareketsiz; sen kıpırdarsan bir adım uzaklaşır", "color": "#ff7043", "emojis": "🍑⏸️", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 8 }, { "p": "p:sehvet", "d": 6 }] },
  { "id": "mved04turnarou", "title": "Turn Around", "cat": "c:mvsqueeze01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["sıkıştır", "engel", "kalça"], "desc": "Gelmek üzereyken dönüp yüzünü sana çevirir: 'o kadar kolay değil'", "color": "#ff7043", "emojis": "🔄🚫", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 8 }, { "p": "p:sehvet", "d": 6 }] },
  { "id": "mved05skirtdow", "title": "Skirt Down", "cat": "c:mvsqueeze01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["sıkıştır", "engel", "kalça", "kıyafet"], "wear": ["mini", "plise", "kalem", "yirtmac", "yuksekkalem", "derikalem", "midi", "ofisyirtmac", "minielbise"], "desc": "Eteğini bir anda indirir, kumaş araya girer; yeniden kaldırması için yalvarman gerek", "color": "#ff7043", "emojis": "👗⬇️", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 8 }, { "p": "p:sehvet", "d": 6 }] },
  { "id": "mved06pantybac", "title": "Panty Back Up", "cat": "c:mvsqueeze01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["sıkıştır", "engel", "kalça", "kıyafet"], "wear": ["tanga", "string", "dantelkulot", "pamukkulot", "boxer", "transkulot"], "desc": "Kenara çektiği külotunu geri yerine bırakır; sürtünme kumaş üstünden ve çok hafif", "color": "#ff7043", "emojis": "🩲⬆️", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 8 }, { "p": "p:sehvet", "d": 6 }] },
  { "id": "mved07spanksto", "title": "Spank Stop", "cat": "c:mvsqueeze01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["sıkıştır", "engel", "kalça"], "desc": "Kendi kalçasına şaplak atar; sarsıntı ritmi bozar, 'dur dedim'", "color": "#ff7043", "emojis": "👋🍑", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 8 }, { "p": "p:sehvet", "d": 6 }] },
  { "id": "mved08slowcirc", "title": "Slow Circles Only", "cat": "c:mvsqueeze01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["sıkıştır", "engel", "kalça"], "desc": "Artık ileri geri değil, sadece çok yavaş daireler; yetmez ama bırakmaz da", "color": "#ff7043", "emojis": "🍑🐌", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 8 }, { "p": "p:sehvet", "d": 6 }] },
  { "id": "mved09twerkpau", "title": "Twerk Pause", "cat": "c:mvsqueeze01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["sıkıştır", "engel", "kalça"], "desc": "Müziği durdurur, kalçası da durur; şarkı başlayınca yeniden", "color": "#ff7043", "emojis": "🎵⏸️", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 8 }, { "p": "p:sehvet", "d": 6 }] },
  { "id": "mved10cheektip", "title": "Cheek Tip Tap", "cat": "c:mvsqueeze01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["sıkıştır", "engel", "kalça"], "desc": "Sadece ucu kalçasına değer, tık tık; gerisini almaz", "color": "#ff7043", "emojis": "🍑👆", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 8 }, { "p": "p:sehvet", "d": 6 }] },
  { "id": "mved11thighsop", "title": "Thighs Open", "cat": "c:mvsqueeze01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["sıkıştır", "engel", "bacak"], "desc": "Tam o an bacaklarını açar; sıkılık bir anda kaybolur", "color": "#ff7043", "emojis": "🦵↔️", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 8 }, { "p": "p:sehvet", "d": 6 }] },
  { "id": "mved12kneesque", "title": "Knee Squeeze Pause", "cat": "c:mvsqueeze01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["sıkıştır", "engel", "bacak"], "desc": "Dizlerini öyle sıkar ki kıpırdayamazsın; ne ileri ne geri", "color": "#ff7043", "emojis": "🦵🛑", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 8 }, { "p": "p:sehvet", "d": 6 }] },
  { "id": "mved13anklecro", "title": "Ankle Cross Lock", "cat": "c:mvsqueeze01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["sıkıştır", "engel", "bacak"], "desc": "Ayak bileklerini çaprazlayıp seni yerinde dondurur, sonra yavaşça gevşetir", "color": "#ff7043", "emojis": "❌🦵", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 8 }, { "p": "p:sehvet", "d": 6 }] },
  { "id": "mved14tipout", "title": "Tip Out", "cat": "c:mvsqueeze01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["sıkıştır", "engel", "bacak"], "desc": "Uyluklarının arasından ucunu kendisi dışarı çıkarır, eliyle tutup bekler", "color": "#ff7043", "emojis": "🦵👋", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 8 }, { "p": "p:sehvet", "d": 6 }] },
  { "id": "mved15stocking", "title": "Stocking Barrier", "cat": "c:mvsqueeze01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["sıkıştır", "engel", "bacak", "kıyafet"], "wear": ["kulotlu", "tencorap", "dizustu", "file", "jartiyer"], "desc": "Çorabını yukarı çeker; artık çıplak ten değil, naylon arası; daha az hissedersin", "color": "#ff7043", "emojis": "🧦🚧", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 8 }, { "p": "p:sehvet", "d": 6 }] },
  { "id": "mved16pussysli", "title": "Pussy Slide Stop", "cat": "c:mvsqueeze01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["sıkıştır", "engel", "bacak"], "desc": "Dudaklarının arasında kayarken birden kalçasını geri çeker; ıslaklık soğur", "color": "#ff7043", "emojis": "💧🛑", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 8 }, { "p": "p:sehvet", "d": 6 }] },
  { "id": "mved17legshake", "title": "Leg Shake", "cat": "c:mvsqueeze01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["sıkıştır", "engel", "bacak"], "desc": "Bacaklarını hafifçe titretir; ritim dağılır, boşalma geri çekilir", "color": "#ff7043", "emojis": "🦵🫨", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 8 }, { "p": "p:sehvet", "d": 6 }] },
  { "id": "mved18pantyhos", "title": "Pantyhose Pinch", "cat": "c:mvsqueeze01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["sıkıştır", "engel", "bacak", "kıyafet"], "wear": ["kulotlu", "tencorap"], "desc": "Külotlu çorabın içindeyken eliyle kökünden sıkar, aradan çıkarmaz", "color": "#ff7043", "emojis": "🩰🤏", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 8 }, { "p": "p:sehvet", "d": 6 }] },
  { "id": "mved19pencilsk", "title": "Pencil Skirt Trap", "cat": "c:mvsqueeze01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["sıkıştır", "engel", "bacak", "kıyafet"], "wear": ["kalem", "yuksekkalem", "derikalem"], "desc": "Kalem eteğin içinde uyluklarının arasında; etek o kadar dar ki sen hareket edemezsin, sadece o", "color": "#ff7043", "emojis": "👔🔒", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 8 }, { "p": "p:sehvet", "d": 6 }] },
  { "id": "mved20thighice", "title": "Thigh Ice", "cat": "c:mvsqueeze01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["sıkıştır", "engel", "bacak"], "desc": "Uyluklarının içine buz sürer, sonra seni arasına alır; soğuk boşalmayı geciktirir", "color": "#ff7043", "emojis": "🧊🦵", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 8 }, { "p": "p:sehvet", "d": 6 }] },
  { "id": "mved21rubbutdo", "title": "Rub But Don't Come", "cat": "c:mvsqueeze01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["sıkıştır", "engel", "kalça"], "desc": "'Sürtünebilirsin ama gelmek yok'; süre bitene kadar", "color": "#ff7043", "emojis": "🍑🚫", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 8 }, { "p": "p:sehvet", "d": 6 }] },
  { "id": "mved22tenstrok", "title": "Ten Strokes Then Stop", "cat": "c:mvsqueeze01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["sıkıştır", "engel", "bacak"], "desc": "On sürtünme, dur; on daha, dur; her seferinde daha da yaklaşırsın", "color": "#ff7043", "emojis": "🔟🦵", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 8 }, { "p": "p:sehvet", "d": 6 }] },
  { "id": "mved23onlywhen", "title": "Only When I Squeeze", "cat": "c:mvsqueeze01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["sıkıştır", "engel", "bacak"], "desc": "Sadece o sıktığında hareket edebilirsin; o da nadiren sıkar", "color": "#ff7043", "emojis": "🦵❗", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 8 }, { "p": "p:sehvet", "d": 6 }] },
  { "id": "mved24dontwetm", "title": "Don't Wet My Skirt", "cat": "c:mvsqueeze01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["sıkıştır", "engel", "kalça", "kıyafet"], "wear": ["mini", "plise", "kalem", "yirtmac", "yuksekkalem", "derikalem", "midi", "ofisyirtmac", "minielbise"], "desc": "Eteğine bir damla düşerse ceza; dikkatli ol", "color": "#ff7043", "emojis": "👗🚫", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 8 }, { "p": "p:sehvet", "d": 6 }] },
  { "id": "mved25askmythi", "title": "Ask My Thighs", "cat": "c:mvsqueeze01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["sıkıştır", "engel", "bacak"], "desc": "Uyluklarına sorarmış gibi yapar: 'bacaklarım hayır diyor'", "color": "#ff7043", "emojis": "🦵🙏", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 8 }, { "p": "p:sehvet", "d": 6 }] },
  { "id": "mved26grindcou", "title": "Grind Countdown", "cat": "c:mvsqueeze01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["sıkıştır", "engel", "kalça"], "desc": "Kucağında sürtünürken geri sayar; sıfırda durur, yeniden on", "color": "#ff7043", "emojis": "🍑🔟", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 8 }, { "p": "p:sehvet", "d": 6 }] },
  { "id": "mved27precumtr", "title": "Precum Trail", "cat": "c:mvsqueeze01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["sıkıştır", "engel", "kalça", "bacak"], "desc": "Engelleme boyunca kalçasında / uyluklarında ıslak bir iz bırakırsın; o parmağıyla gösterir", "color": "#ff7043", "emojis": "💧〰️", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 8 }, { "p": "p:sehvet", "d": 6 }] },
  { "id": "mved28finallyo", "title": "Finally On Her Ass", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["boşalma", "kalça"], "after": ["Cheek Release", "Step Forward", "Hip Freeze", "Turn Around", "Skirt Down", "Panty Back Up", "Spank Stop", "Slow Circles Only", "Twerk Pause", "Cheek Tip Tap", "Rub But Don't Come", "Don't Wet My Skirt", "Grind Countdown", "Precum Trail"], "desc": "Uzun engellemeden sonra izin verir; kalçasının üstüne, hepsi bir anda", "color": "#5f8bff", "emojis": "🍑✅", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:sehvet", "d": 3 }] },
  { "id": "mved29finallyb", "title": "Finally Between Thighs", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["boşalma", "bacak"], "after": ["Thighs Open", "Knee Squeeze Pause", "Ankle Cross Lock", "Tip Out", "Stocking Barrier", "Pussy Slide Stop", "Leg Shake", "Pantyhose Pinch", "Pencil Skirt Trap", "Thigh Ice", "Ten Strokes Then Stop", "Only When I Squeeze", "Ask My Thighs", "Precum Trail"], "desc": "Sonunda sıkıp izin verir; aradan fışkırır, ikiniz de inlersiniz", "color": "#5f8bff", "emojis": "🦵✅", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:sehvet", "d": 3 }] },
  { "id": "mved30slippedo", "title": "Slipped Out On Skirt", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["boşalma", "kalça", "bacak", "kıyafet"], "wear": ["mini", "plise", "kalem", "yirtmac", "yuksekkalem", "derikalem", "midi", "ofisyirtmac", "minielbise"], "after": ["Skirt Down", "Don't Wet My Skirt", "Pencil Skirt Trap"], "desc": "İzinsiz kaçar, eteğine; 'sana demiştim' der ve yeni bir engelleme turu başlatır", "color": "#5f8bff", "emojis": "👗😳", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:sehvet", "d": 3 }] },
  { "id": "mved31ruinedon", "title": "Ruined On Her Thighs", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["boşalma", "bacak"], "after": ["Thighs Open", "Knee Squeeze Pause", "Ankle Cross Lock", "Tip Out", "Stocking Barrier", "Pussy Slide Stop", "Leg Shake", "Pantyhose Pinch", "Pencil Skirt Trap", "Thigh Ice", "Ten Strokes Then Stop", "Only When I Squeeze", "Ask My Thighs", "Precum Trail"], "desc": "Tam o an bacaklarını açar; sızar ama zevk gelmez", "color": "#5f8bff", "emojis": "🦵💧", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:sehvet", "d": 4 }] },
  { "id": "mved32deniedan", "title": "Denied And Dressed", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["boşalma", "kalça", "bacak"], "after": ["Cheek Release", "Step Forward", "Hip Freeze", "Turn Around", "Skirt Down", "Panty Back Up", "Spank Stop", "Slow Circles Only", "Twerk Pause", "Cheek Tip Tap", "Thighs Open", "Knee Squeeze Pause", "Ankle Cross Lock", "Tip Out", "Stocking Barrier", "Pussy Slide Stop", "Leg Shake", "Pantyhose Pinch", "Pencil Skirt Trap", "Thigh Ice", "Rub But Don't Come", "Ten Strokes Then Stop", "Only When I Squeeze", "Don't Wet My Skirt", "Ask My Thighs", "Grind Countdown", "Precum Trail"], "desc": "Hiç izin vermez; eteğini düzeltip 'akşama' der ve çıkar", "color": "#5f8bff", "emojis": "👗🚪", "onEffects": [{ "p": "p:sehvet", "d": 6 }, { "p": "p:ask", "d": 1 }] },
  { "id": "mvgs01thighflo", "title": "Thigh Flood", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["boşalma", "gür", "bacak"], "after": ["Cheek Release", "Step Forward", "Hip Freeze", "Turn Around", "Skirt Down", "Panty Back Up", "Spank Stop", "Slow Circles Only", "Twerk Pause", "Cheek Tip Tap", "Thighs Open", "Knee Squeeze Pause", "Ankle Cross Lock", "Tip Out", "Stocking Barrier", "Pussy Slide Stop", "Leg Shake", "Pantyhose Pinch", "Pencil Skirt Trap", "Thigh Ice", "Rub But Don't Come", "Ten Strokes Then Stop", "Only When I Squeeze", "Don't Wet My Skirt", "Ask My Thighs", "Grind Countdown", "Precum Trail", "Tight Hold Tease", "Hold Still", "Slow Release", "Holding", "Hard Holding", "Cock Ring", "Still Inside", "Stop-Start", "Tease & Deny", "Hold Together"], "desc": "Uyluklarının arasından öyle bir fışkırır ki iki bacağını da kaplar, dizlerine kadar süzülür", "color": "#5f8bff", "emojis": "🦵🌊", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:sehvet", "d": 4 }, { "p": "p:ask", "d": 1 }] },
  { "id": "mvgs02calfspla", "title": "Calf Splash", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["boşalma", "gür", "bacak"], "after": ["Cheek Release", "Step Forward", "Hip Freeze", "Turn Around", "Skirt Down", "Panty Back Up", "Spank Stop", "Slow Circles Only", "Twerk Pause", "Cheek Tip Tap", "Thighs Open", "Knee Squeeze Pause", "Ankle Cross Lock", "Tip Out", "Stocking Barrier", "Pussy Slide Stop", "Leg Shake", "Pantyhose Pinch", "Pencil Skirt Trap", "Thigh Ice", "Rub But Don't Come", "Ten Strokes Then Stop", "Only When I Squeeze", "Don't Wet My Skirt", "Ask My Thighs", "Grind Countdown", "Precum Trail", "Tight Hold Tease", "Hold Still", "Slow Release", "Holding", "Hard Holding", "Cock Ring", "Still Inside", "Stop-Start", "Tease & Deny", "Hold Together"], "desc": "Arkadan bacak arasında; ilk atım baldırlarına kadar iner", "color": "#5f8bff", "emojis": "🦵💦", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:sehvet", "d": 4 }, { "p": "p:ask", "d": 1 }] },
  { "id": "mvgs03downtohe", "title": "Down To Her Ankles", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["boşalma", "gür", "bacak"], "after": ["Cheek Release", "Step Forward", "Hip Freeze", "Turn Around", "Skirt Down", "Panty Back Up", "Spank Stop", "Slow Circles Only", "Twerk Pause", "Cheek Tip Tap", "Thighs Open", "Knee Squeeze Pause", "Ankle Cross Lock", "Tip Out", "Stocking Barrier", "Pussy Slide Stop", "Leg Shake", "Pantyhose Pinch", "Pencil Skirt Trap", "Thigh Ice", "Rub But Don't Come", "Ten Strokes Then Stop", "Only When I Squeeze", "Don't Wet My Skirt", "Ask My Thighs", "Grind Countdown", "Precum Trail", "Tight Hold Tease", "Hold Still", "Slow Release", "Holding", "Hard Holding", "Cock Ring", "Still Inside", "Stop-Start", "Tease & Deny", "Hold Together"], "desc": "O kadar çok ki uyluklarından ayak bileklerine kadar akar; topuklularına damlar", "color": "#5f8bff", "emojis": "🦶💧", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:sehvet", "d": 4 }, { "p": "p:ask", "d": 1 }] },
  { "id": "mvgs04feetpain", "title": "Feet Painted", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["boşalma", "gür", "bacak"], "after": ["Cheek Release", "Step Forward", "Hip Freeze", "Turn Around", "Skirt Down", "Panty Back Up", "Spank Stop", "Slow Circles Only", "Twerk Pause", "Cheek Tip Tap", "Thighs Open", "Knee Squeeze Pause", "Ankle Cross Lock", "Tip Out", "Stocking Barrier", "Pussy Slide Stop", "Leg Shake", "Pantyhose Pinch", "Pencil Skirt Trap", "Thigh Ice", "Rub But Don't Come", "Ten Strokes Then Stop", "Only When I Squeeze", "Don't Wet My Skirt", "Ask My Thighs", "Grind Countdown", "Precum Trail", "Tight Hold Tease", "Hold Still", "Slow Release", "Holding", "Hard Holding", "Cock Ring", "Still Inside", "Stop-Start", "Tease & Deny", "Hold Together"], "desc": "Fışkırır, ayaklarının üstüne; parmaklarını kıpırdatıp bakar", "color": "#5f8bff", "emojis": "🦶🤍", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:sehvet", "d": 4 }, { "p": "p:ask", "d": 1 }] },
  { "id": "mvgs05stocking", "title": "Stocking Soaked", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["boşalma", "gür", "bacak", "kıyafet"], "wear": ["kulotlu", "tencorap", "dizustu", "file", "jartiyer"], "after": ["Cheek Release", "Step Forward", "Hip Freeze", "Turn Around", "Skirt Down", "Panty Back Up", "Spank Stop", "Slow Circles Only", "Twerk Pause", "Cheek Tip Tap", "Thighs Open", "Knee Squeeze Pause", "Ankle Cross Lock", "Tip Out", "Stocking Barrier", "Pussy Slide Stop", "Leg Shake", "Pantyhose Pinch", "Pencil Skirt Trap", "Thigh Ice", "Rub But Don't Come", "Ten Strokes Then Stop", "Only When I Squeeze", "Don't Wet My Skirt", "Ask My Thighs", "Grind Countdown", "Precum Trail", "Tight Hold Tease", "Hold Still", "Slow Release", "Holding", "Hard Holding", "Cock Ring", "Still Inside", "Stop-Start", "Tease & Deny", "Hold Together"], "desc": "Çoraplarının naylonu sırılsıklam; dantel kenarı ağırlaşır", "color": "#5f8bff", "emojis": "🧦🌊", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:sehvet", "d": 4 }, { "p": "p:ask", "d": 1 }] },
  { "id": "mvgs06armsplas", "title": "Arm Splash", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["boşalma", "gür", "bacak"], "after": ["Cheek Release", "Step Forward", "Hip Freeze", "Turn Around", "Skirt Down", "Panty Back Up", "Spank Stop", "Slow Circles Only", "Twerk Pause", "Cheek Tip Tap", "Thighs Open", "Knee Squeeze Pause", "Ankle Cross Lock", "Tip Out", "Stocking Barrier", "Pussy Slide Stop", "Leg Shake", "Pantyhose Pinch", "Pencil Skirt Trap", "Thigh Ice", "Rub But Don't Come", "Ten Strokes Then Stop", "Only When I Squeeze", "Don't Wet My Skirt", "Ask My Thighs", "Grind Countdown", "Precum Trail", "Tight Hold Tease", "Hold Still", "Slow Release", "Holding", "Hard Holding", "Cock Ring", "Still Inside", "Stop-Start", "Tease & Deny", "Hold Together"], "desc": "Bacaklarını tutan kollarına, bileklerine kadar sıçrar", "color": "#5f8bff", "emojis": "💪💦", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:sehvet", "d": 4 }, { "p": "p:ask", "d": 1 }] },
  { "id": "mvgs07handfull", "title": "Hand Full", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["boşalma", "gür", "bacak", "kalça"], "after": ["Cheek Release", "Step Forward", "Hip Freeze", "Turn Around", "Skirt Down", "Panty Back Up", "Spank Stop", "Slow Circles Only", "Twerk Pause", "Cheek Tip Tap", "Thighs Open", "Knee Squeeze Pause", "Ankle Cross Lock", "Tip Out", "Stocking Barrier", "Pussy Slide Stop", "Leg Shake", "Pantyhose Pinch", "Pencil Skirt Trap", "Thigh Ice", "Rub But Don't Come", "Ten Strokes Then Stop", "Only When I Squeeze", "Don't Wet My Skirt", "Ask My Thighs", "Grind Countdown", "Precum Trail", "Tight Hold Tease", "Hold Still", "Slow Release", "Holding", "Hard Holding", "Cock Ring", "Still Inside", "Stop-Start", "Tease & Deny", "Hold Together"], "desc": "Kökten tutan eli taşar; avucundan parmak aralarından akar", "color": "#5f8bff", "emojis": "🤲🌊", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:sehvet", "d": 4 }, { "p": "p:ask", "d": 1 }] },
  { "id": "mvgs08kneepitp", "title": "Knee Pit Pool", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["boşalma", "gür", "bacak"], "after": ["Cheek Release", "Step Forward", "Hip Freeze", "Turn Around", "Skirt Down", "Panty Back Up", "Spank Stop", "Slow Circles Only", "Twerk Pause", "Cheek Tip Tap", "Thighs Open", "Knee Squeeze Pause", "Ankle Cross Lock", "Tip Out", "Stocking Barrier", "Pussy Slide Stop", "Leg Shake", "Pantyhose Pinch", "Pencil Skirt Trap", "Thigh Ice", "Rub But Don't Come", "Ten Strokes Then Stop", "Only When I Squeeze", "Don't Wet My Skirt", "Ask My Thighs", "Grind Countdown", "Precum Trail", "Tight Hold Tease", "Hold Still", "Slow Release", "Holding", "Hard Holding", "Cock Ring", "Still Inside", "Stop-Start", "Tease & Deny", "Hold Together"], "desc": "Dizlerinin arkasında birikir, bacağını kıpırdatınca süzülür", "color": "#5f8bff", "emojis": "🦵🫗", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:sehvet", "d": 4 }, { "p": "p:ask", "d": 1 }] },
  { "id": "mvgs09assflood", "title": "Ass Flood", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["boşalma", "gür", "kalça"], "after": ["Cheek Release", "Step Forward", "Hip Freeze", "Turn Around", "Skirt Down", "Panty Back Up", "Spank Stop", "Slow Circles Only", "Twerk Pause", "Cheek Tip Tap", "Thighs Open", "Knee Squeeze Pause", "Ankle Cross Lock", "Tip Out", "Stocking Barrier", "Pussy Slide Stop", "Leg Shake", "Pantyhose Pinch", "Pencil Skirt Trap", "Thigh Ice", "Rub But Don't Come", "Ten Strokes Then Stop", "Only When I Squeeze", "Don't Wet My Skirt", "Ask My Thighs", "Grind Countdown", "Precum Trail", "Tight Hold Tease", "Hold Still", "Slow Release", "Holding", "Hard Holding", "Cock Ring", "Still Inside", "Stop-Start", "Tease & Deny", "Hold Together"], "desc": "Kalçasının tamamını kaplar; iki yanından aşağı süzülür", "color": "#5f8bff", "emojis": "🍑🌊", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:sehvet", "d": 4 }, { "p": "p:ask", "d": 1 }] },
  { "id": "mvgs10upherspi", "title": "Up Her Spine", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["boşalma", "gür", "kalça"], "after": ["Cheek Release", "Step Forward", "Hip Freeze", "Turn Around", "Skirt Down", "Panty Back Up", "Spank Stop", "Slow Circles Only", "Twerk Pause", "Cheek Tip Tap", "Thighs Open", "Knee Squeeze Pause", "Ankle Cross Lock", "Tip Out", "Stocking Barrier", "Pussy Slide Stop", "Leg Shake", "Pantyhose Pinch", "Pencil Skirt Trap", "Thigh Ice", "Rub But Don't Come", "Ten Strokes Then Stop", "Only When I Squeeze", "Don't Wet My Skirt", "Ask My Thighs", "Grind Countdown", "Precum Trail", "Tight Hold Tease", "Hold Still", "Slow Release", "Holding", "Hard Holding", "Cock Ring", "Still Inside", "Stop-Start", "Tease & Deny", "Hold Together"], "desc": "Kalçasının arasından fışkırır, sırtı boyunca omuz bıçaklarına kadar çizgi çeker", "color": "#5f8bff", "emojis": "🔙💦", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:sehvet", "d": 4 }, { "p": "p:ask", "d": 1 }] },
  { "id": "mvgs11overhers", "title": "Over Her Shoulder", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["boşalma", "gür", "kalça"], "after": ["Cheek Release", "Step Forward", "Hip Freeze", "Turn Around", "Skirt Down", "Panty Back Up", "Spank Stop", "Slow Circles Only", "Twerk Pause", "Cheek Tip Tap", "Thighs Open", "Knee Squeeze Pause", "Ankle Cross Lock", "Tip Out", "Stocking Barrier", "Pussy Slide Stop", "Leg Shake", "Pantyhose Pinch", "Pencil Skirt Trap", "Thigh Ice", "Rub But Don't Come", "Ten Strokes Then Stop", "Only When I Squeeze", "Don't Wet My Skirt", "Ask My Thighs", "Grind Countdown", "Precum Trail", "Tight Hold Tease", "Hold Still", "Slow Release", "Holding", "Hard Holding", "Cock Ring", "Still Inside", "Stop-Start", "Tease & Deny", "Hold Together"], "desc": "İlk atım o kadar uzağa gider ki omzunun üstünden geçip önüne düşer", "color": "#5f8bff", "emojis": "🫨💥", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:sehvet", "d": 4 }, { "p": "p:ask", "d": 1 }] },
  { "id": "mvgs12hairreac", "title": "Hair Reached", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["boşalma", "gür", "kalça"], "after": ["Cheek Release", "Step Forward", "Hip Freeze", "Turn Around", "Skirt Down", "Panty Back Up", "Spank Stop", "Slow Circles Only", "Twerk Pause", "Cheek Tip Tap", "Thighs Open", "Knee Squeeze Pause", "Ankle Cross Lock", "Tip Out", "Stocking Barrier", "Pussy Slide Stop", "Leg Shake", "Pantyhose Pinch", "Pencil Skirt Trap", "Thigh Ice", "Rub But Don't Come", "Ten Strokes Then Stop", "Only When I Squeeze", "Don't Wet My Skirt", "Ask My Thighs", "Grind Countdown", "Precum Trail", "Tight Hold Tease", "Hold Still", "Slow Release", "Holding", "Hard Holding", "Cock Ring", "Still Inside", "Stop-Start", "Tease & Deny", "Hold Together"], "desc": "Arkadan kalçasının arasındayken saçının uçlarına kadar ulaşır; şaşkınlıkla döner", "color": "#5f8bff", "emojis": "💇‍♀️💦", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:sehvet", "d": 4 }, { "p": "p:ask", "d": 1 }] },
  { "id": "mvgs13lowerbac", "title": "Lower Back Lake", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["boşalma", "gür", "kalça"], "after": ["Cheek Release", "Step Forward", "Hip Freeze", "Turn Around", "Skirt Down", "Panty Back Up", "Spank Stop", "Slow Circles Only", "Twerk Pause", "Cheek Tip Tap", "Thighs Open", "Knee Squeeze Pause", "Ankle Cross Lock", "Tip Out", "Stocking Barrier", "Pussy Slide Stop", "Leg Shake", "Pantyhose Pinch", "Pencil Skirt Trap", "Thigh Ice", "Rub But Don't Come", "Ten Strokes Then Stop", "Only When I Squeeze", "Don't Wet My Skirt", "Ask My Thighs", "Grind Countdown", "Precum Trail", "Tight Hold Tease", "Hold Still", "Slow Release", "Holding", "Hard Holding", "Cock Ring", "Still Inside", "Stop-Start", "Tease & Deny", "Hold Together"], "desc": "Belinin çukurunda göl gibi birikir; kıpırdamasa taşmayacak", "color": "#5f8bff", "emojis": "🍑🫗", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:sehvet", "d": 4 }, { "p": "p:ask", "d": 1 }] },
  { "id": "mvgs14backofne", "title": "Back Of Neck", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["boşalma", "gür", "kalça"], "after": ["Cheek Release", "Step Forward", "Hip Freeze", "Turn Around", "Skirt Down", "Panty Back Up", "Spank Stop", "Slow Circles Only", "Twerk Pause", "Cheek Tip Tap", "Thighs Open", "Knee Squeeze Pause", "Ankle Cross Lock", "Tip Out", "Stocking Barrier", "Pussy Slide Stop", "Leg Shake", "Pantyhose Pinch", "Pencil Skirt Trap", "Thigh Ice", "Rub But Don't Come", "Ten Strokes Then Stop", "Only When I Squeeze", "Don't Wet My Skirt", "Ask My Thighs", "Grind Countdown", "Precum Trail", "Tight Hold Tease", "Hold Still", "Slow Release", "Holding", "Hard Holding", "Cock Ring", "Still Inside", "Stop-Start", "Tease & Deny", "Hold Together"], "desc": "Ensesine kadar sıçrar; ürperir", "color": "#5f8bff", "emojis": "🦒💦", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:sehvet", "d": 4 }, { "p": "p:ask", "d": 1 }] },
  { "id": "mvgs15throught", "title": "Through To Her Belly", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["boşalma", "gür", "bacak", "göğüs"], "after": ["Cheek Release", "Step Forward", "Hip Freeze", "Turn Around", "Skirt Down", "Panty Back Up", "Spank Stop", "Slow Circles Only", "Twerk Pause", "Cheek Tip Tap", "Thighs Open", "Knee Squeeze Pause", "Ankle Cross Lock", "Tip Out", "Stocking Barrier", "Pussy Slide Stop", "Leg Shake", "Pantyhose Pinch", "Pencil Skirt Trap", "Thigh Ice", "Rub But Don't Come", "Ten Strokes Then Stop", "Only When I Squeeze", "Don't Wet My Skirt", "Ask My Thighs", "Grind Countdown", "Precum Trail", "Tight Hold Tease", "Hold Still", "Slow Release", "Holding", "Hard Holding", "Cock Ring", "Still Inside", "Stop-Start", "Tease & Deny", "Hold Together"], "desc": "Bacaklarının arasından öne fışkırır, karnına ve göbeğine", "color": "#5f8bff", "emojis": "🦵➡️🫃", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:sehvet", "d": 4 }, { "p": "p:ask", "d": 1 }] },
  { "id": "mvgs16uptohert", "title": "Up To Her Tits", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["boşalma", "gür", "bacak", "göğüs"], "after": ["Cheek Release", "Step Forward", "Hip Freeze", "Turn Around", "Skirt Down", "Panty Back Up", "Spank Stop", "Slow Circles Only", "Twerk Pause", "Cheek Tip Tap", "Thighs Open", "Knee Squeeze Pause", "Ankle Cross Lock", "Tip Out", "Stocking Barrier", "Pussy Slide Stop", "Leg Shake", "Pantyhose Pinch", "Pencil Skirt Trap", "Thigh Ice", "Rub But Don't Come", "Ten Strokes Then Stop", "Only When I Squeeze", "Don't Wet My Skirt", "Ask My Thighs", "Grind Countdown", "Precum Trail", "Tight Hold Tease", "Hold Still", "Slow Release", "Holding", "Hard Holding", "Cock Ring", "Still Inside", "Stop-Start", "Tease & Deny", "Hold Together"], "desc": "Arkadan uyluk arasından o kadar güçlü ki göğüslerine kadar ulaşır", "color": "#5f8bff", "emojis": "🦵➡️🍈", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:sehvet", "d": 4 }, { "p": "p:ask", "d": 1 }] },
  { "id": "mvgs17chinandl", "title": "Chin And Lips", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["boşalma", "gür", "bacak", "göğüs"], "after": ["Cheek Release", "Step Forward", "Hip Freeze", "Turn Around", "Skirt Down", "Panty Back Up", "Spank Stop", "Slow Circles Only", "Twerk Pause", "Cheek Tip Tap", "Thighs Open", "Knee Squeeze Pause", "Ankle Cross Lock", "Tip Out", "Stocking Barrier", "Pussy Slide Stop", "Leg Shake", "Pantyhose Pinch", "Pencil Skirt Trap", "Thigh Ice", "Rub But Don't Come", "Ten Strokes Then Stop", "Only When I Squeeze", "Don't Wet My Skirt", "Ask My Thighs", "Grind Countdown", "Precum Trail", "Tight Hold Tease", "Hold Still", "Slow Release", "Holding", "Hard Holding", "Cock Ring", "Still Inside", "Stop-Start", "Tease & Deny", "Hold Together"], "desc": "Göğüslerinin arasından çenesine, dudaklarına; dilini çıkarıp tadar", "color": "#5f8bff", "emojis": "😮💦", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:sehvet", "d": 4 }, { "p": "p:ask", "d": 1 }] },
  { "id": "mvgs18fullface", "title": "Full Face", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["boşalma", "gür", "bacak", "göğüs"], "after": ["Cheek Release", "Step Forward", "Hip Freeze", "Turn Around", "Skirt Down", "Panty Back Up", "Spank Stop", "Slow Circles Only", "Twerk Pause", "Cheek Tip Tap", "Thighs Open", "Knee Squeeze Pause", "Ankle Cross Lock", "Tip Out", "Stocking Barrier", "Pussy Slide Stop", "Leg Shake", "Pantyhose Pinch", "Pencil Skirt Trap", "Thigh Ice", "Rub But Don't Come", "Ten Strokes Then Stop", "Only When I Squeeze", "Don't Wet My Skirt", "Ask My Thighs", "Grind Countdown", "Precum Trail", "Tight Hold Tease", "Hold Still", "Slow Release", "Holding", "Hard Holding", "Cock Ring", "Still Inside", "Stop-Start", "Tease & Deny", "Hold Together"], "desc": "Biriken her şey yüzüne; gözlerini kapatıp güler", "color": "#5f8bff", "emojis": "💦😵", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:sehvet", "d": 4 }, { "p": "p:ask", "d": 1 }] },
  { "id": "mvgs19glassesc", "title": "Glasses Coated", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["boşalma", "gür", "bacak", "göğüs"], "after": ["Cheek Release", "Step Forward", "Hip Freeze", "Turn Around", "Skirt Down", "Panty Back Up", "Spank Stop", "Slow Circles Only", "Twerk Pause", "Cheek Tip Tap", "Thighs Open", "Knee Squeeze Pause", "Ankle Cross Lock", "Tip Out", "Stocking Barrier", "Pussy Slide Stop", "Leg Shake", "Pantyhose Pinch", "Pencil Skirt Trap", "Thigh Ice", "Rub But Don't Come", "Ten Strokes Then Stop", "Only When I Squeeze", "Don't Wet My Skirt", "Ask My Thighs", "Grind Countdown", "Precum Trail", "Tight Hold Tease", "Hold Still", "Slow Release", "Holding", "Hard Holding", "Cock Ring", "Still Inside", "Stop-Start", "Tease & Deny", "Hold Together"], "desc": "Gözlüğü tamamen kaplanır, göremez olur", "color": "#5f8bff", "emojis": "👓🌊", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:sehvet", "d": 4 }, { "p": "p:ask", "d": 1 }] },
  { "id": "mvgs20overherh", "title": "Over Her Head", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["boşalma", "gür", "kalça", "bacak", "göğüs"], "after": ["Cheek Release", "Step Forward", "Hip Freeze", "Turn Around", "Skirt Down", "Panty Back Up", "Spank Stop", "Slow Circles Only", "Twerk Pause", "Cheek Tip Tap", "Thighs Open", "Knee Squeeze Pause", "Ankle Cross Lock", "Tip Out", "Stocking Barrier", "Pussy Slide Stop", "Leg Shake", "Pantyhose Pinch", "Pencil Skirt Trap", "Thigh Ice", "Rub But Don't Come", "Ten Strokes Then Stop", "Only When I Squeeze", "Don't Wet My Skirt", "Ask My Thighs", "Grind Countdown", "Precum Trail", "Tight Hold Tease", "Hold Still", "Slow Release", "Holding", "Hard Holding", "Cock Ring", "Still Inside", "Stop-Start", "Tease & Deny", "Hold Together"], "cum": 100, "desc": "Başının üstünden geçip yatak başlığına / duvara", "color": "#5f8bff", "emojis": "🙃💥", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:sehvet", "d": 4 }, { "p": "p:ask", "d": 1 }] },
  { "id": "mvgs21everywhe", "title": "Everywhere", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["boşalma", "gür", "kalça", "bacak", "göğüs"], "after": ["Cheek Release", "Step Forward", "Hip Freeze", "Turn Around", "Skirt Down", "Panty Back Up", "Spank Stop", "Slow Circles Only", "Twerk Pause", "Cheek Tip Tap", "Thighs Open", "Knee Squeeze Pause", "Ankle Cross Lock", "Tip Out", "Stocking Barrier", "Pussy Slide Stop", "Leg Shake", "Pantyhose Pinch", "Pencil Skirt Trap", "Thigh Ice", "Rub But Don't Come", "Ten Strokes Then Stop", "Only When I Squeeze", "Don't Wet My Skirt", "Ask My Thighs", "Grind Countdown", "Precum Trail", "Tight Hold Tease", "Hold Still", "Slow Release", "Holding", "Hard Holding", "Cock Ring", "Still Inside", "Stop-Start", "Tease & Deny", "Hold Together"], "desc": "Atımlar her yöne: kalça, sırt, saç, bacaklar; sayamaz bile", "color": "#5f8bff", "emojis": "🌊🎆", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:sehvet", "d": 4 }, { "p": "p:ask", "d": 1 }] },
  { "id": "mvgs22ropeafte", "title": "Rope After Rope", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["boşalma", "gür", "kalça", "bacak", "göğüs"], "after": ["Cheek Release", "Step Forward", "Hip Freeze", "Turn Around", "Skirt Down", "Panty Back Up", "Spank Stop", "Slow Circles Only", "Twerk Pause", "Cheek Tip Tap", "Thighs Open", "Knee Squeeze Pause", "Ankle Cross Lock", "Tip Out", "Stocking Barrier", "Pussy Slide Stop", "Leg Shake", "Pantyhose Pinch", "Pencil Skirt Trap", "Thigh Ice", "Rub But Don't Come", "Ten Strokes Then Stop", "Only When I Squeeze", "Don't Wet My Skirt", "Ask My Thighs", "Grind Countdown", "Precum Trail", "Tight Hold Tease", "Hold Still", "Slow Release", "Holding", "Hard Holding", "Cock Ring", "Still Inside", "Stop-Start", "Tease & Deny", "Hold Together"], "desc": "Bitmiyor; her atım bir önceki kadar güçlü, o da her birini sayar", "color": "#5f8bff", "emojis": "〰️〰️", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:sehvet", "d": 4 }, { "p": "p:ask", "d": 1 }] },
  { "id": "mvgs23headtoto", "title": "Head To Toe", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["boşalma", "gür", "kalça", "bacak", "göğüs"], "after": ["Cheek Release", "Step Forward", "Hip Freeze", "Turn Around", "Skirt Down", "Panty Back Up", "Spank Stop", "Slow Circles Only", "Twerk Pause", "Cheek Tip Tap", "Thighs Open", "Knee Squeeze Pause", "Ankle Cross Lock", "Tip Out", "Stocking Barrier", "Pussy Slide Stop", "Leg Shake", "Pantyhose Pinch", "Pencil Skirt Trap", "Thigh Ice", "Rub But Don't Come", "Ten Strokes Then Stop", "Only When I Squeeze", "Don't Wet My Skirt", "Ask My Thighs", "Grind Countdown", "Precum Trail", "Tight Hold Tease", "Hold Still", "Slow Release", "Holding", "Hard Holding", "Cock Ring", "Still Inside", "Stop-Start", "Tease & Deny", "Hold Together"], "desc": "Saçından topuklarına kadar izi var; aynada kendine bakar", "color": "#5f8bff", "emojis": "🧍‍♀️🌊", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:sehvet", "d": 4 }, { "p": "p:ask", "d": 1 }] },
  { "id": "mvgs24pulsingf", "title": "Pulsing Fountain", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["boşalma", "gür", "kalça", "bacak", "göğüs"], "after": ["Cheek Release", "Step Forward", "Hip Freeze", "Turn Around", "Skirt Down", "Panty Back Up", "Spank Stop", "Slow Circles Only", "Twerk Pause", "Cheek Tip Tap", "Thighs Open", "Knee Squeeze Pause", "Ankle Cross Lock", "Tip Out", "Stocking Barrier", "Pussy Slide Stop", "Leg Shake", "Pantyhose Pinch", "Pencil Skirt Trap", "Thigh Ice", "Rub But Don't Come", "Ten Strokes Then Stop", "Only When I Squeeze", "Don't Wet My Skirt", "Ask My Thighs", "Grind Countdown", "Precum Trail", "Tight Hold Tease", "Hold Still", "Slow Release", "Holding", "Hard Holding", "Cock Ring", "Still Inside", "Stop-Start", "Tease & Deny", "Hold Together"], "desc": "Sıkmayı bırakınca çeşme gibi, dalga dalga", "color": "#5f8bff", "emojis": "⛲💦", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:sehvet", "d": 4 }, { "p": "p:ask", "d": 1 }] },
  { "id": "mvgs25splashra", "title": "Splash Radius", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["boşalma", "gür", "kalça", "bacak", "göğüs"], "after": ["Cheek Release", "Step Forward", "Hip Freeze", "Turn Around", "Skirt Down", "Panty Back Up", "Spank Stop", "Slow Circles Only", "Twerk Pause", "Cheek Tip Tap", "Thighs Open", "Knee Squeeze Pause", "Ankle Cross Lock", "Tip Out", "Stocking Barrier", "Pussy Slide Stop", "Leg Shake", "Pantyhose Pinch", "Pencil Skirt Trap", "Thigh Ice", "Rub But Don't Come", "Ten Strokes Then Stop", "Only When I Squeeze", "Don't Wet My Skirt", "Ask My Thighs", "Grind Countdown", "Precum Trail", "Tight Hold Tease", "Hold Still", "Slow Release", "Holding", "Hard Holding", "Cock Ring", "Still Inside", "Stop-Start", "Tease & Deny", "Hold Together"], "desc": "Etrafta nereye kadar gittiğine bakarsınız: duvar, perde, halı", "color": "#5f8bff", "emojis": "📏💥", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:sehvet", "d": 4 }, { "p": "p:ask", "d": 1 }] },
  { "id": "mvgs26wallbehi", "title": "Wall Behind Her", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["boşalma", "gür", "kalça", "bacak", "göğüs"], "after": ["Cheek Release", "Step Forward", "Hip Freeze", "Turn Around", "Skirt Down", "Panty Back Up", "Spank Stop", "Slow Circles Only", "Twerk Pause", "Cheek Tip Tap", "Thighs Open", "Knee Squeeze Pause", "Ankle Cross Lock", "Tip Out", "Stocking Barrier", "Pussy Slide Stop", "Leg Shake", "Pantyhose Pinch", "Pencil Skirt Trap", "Thigh Ice", "Rub But Don't Come", "Ten Strokes Then Stop", "Only When I Squeeze", "Don't Wet My Skirt", "Ask My Thighs", "Grind Countdown", "Precum Trail", "Tight Hold Tease", "Hold Still", "Slow Release", "Holding", "Hard Holding", "Cock Ring", "Still Inside", "Stop-Start", "Tease & Deny", "Hold Together"], "cum": 100, "desc": "Üstünden aşıp arkasındaki duvara sıçrar", "color": "#5f8bff", "emojis": "🧱💥", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:sehvet", "d": 4 }, { "p": "p:ask", "d": 1 }] },
  { "id": "mvgs27ceilings", "title": "Ceiling Shot", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["boşalma", "gür", "kalça", "bacak", "göğüs"], "after": ["Cheek Release", "Step Forward", "Hip Freeze", "Turn Around", "Skirt Down", "Panty Back Up", "Spank Stop", "Slow Circles Only", "Twerk Pause", "Cheek Tip Tap", "Thighs Open", "Knee Squeeze Pause", "Ankle Cross Lock", "Tip Out", "Stocking Barrier", "Pussy Slide Stop", "Leg Shake", "Pantyhose Pinch", "Pencil Skirt Trap", "Thigh Ice", "Rub But Don't Come", "Ten Strokes Then Stop", "Only When I Squeeze", "Don't Wet My Skirt", "Ask My Thighs", "Grind Countdown", "Precum Trail", "Tight Hold Tease", "Hold Still", "Slow Release", "Holding", "Hard Holding", "Cock Ring", "Still Inside", "Stop-Start", "Tease & Deny", "Hold Together"], "cum": 100, "desc": "Sırtüstüyken öyle güçlü ki yukarı fışkırır; ikiniz de donup kalırsınız (en nadiri)", "color": "#5f8bff", "emojis": "⬆️😳", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:sehvet", "d": 4 }, { "p": "p:ask", "d": 1 }] },
  { "id": "mvgs28wasthata", "title": "Was That All Me?", "cat": "c:mvcooldown01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "Şaşkınlıkla kendine bakar: 'hepsi benim yüzümden mi?'", "color": "#6fb7e9", "emojis": "😳❓", "onEffects": [{ "p": "p:sehvet", "d": 3 }, { "p": "p:samimiyet", "d": 1 }] },
  { "id": "mvgs29proudofh", "title": "Proud Of Her Work", "cat": "c:mvcooldown01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "Gururla izlerini gösterir: 'bekletmeye değdi'", "color": "#6fb7e9", "emojis": "😏🏆", "onEffects": [{ "p": "p:sehvet", "d": 2 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvgs30tracethe", "title": "Trace The Lines", "cat": "c:mvcooldown01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "Parmağıyla tenindeki çizgileri takip eder", "color": "#6fb7e9", "emojis": "👆〰️", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 5 }, { "p": "p:samimiyet", "d": 1 }] },
  { "id": "mvgs31photoevi", "title": "Photo Evidence", "cat": "c:mvcooldown01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "'Bunu belgelemem lazım' der, fotoğrafını çeker", "color": "#6fb7e9", "emojis": "📸💦", "onEffects": [{ "p": "p:sehvet", "d": 2 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvgs32needatow", "title": "Need A Towel… Or Three", "cat": "c:mvcooldown01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "Havlu getirmeye gider, bir daha döner", "color": "#6fb7e9", "emojis": "🧻🧻", "onEffects": [{ "p": "p:samimiyet", "d": 1 }] },
  { "id": "mvgs33showerto", "title": "Shower Together", "cat": "c:mvcooldown01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "'Bunu temizlemenin tek yolu var' der; birlikte duşa", "color": "#6fb7e9", "emojis": "🚿🫂", "onEffects": [{ "p": "p:ask", "d": 1 }, { "p": "p:samimiyet", "d": 2 }] },
  { "id": "mvgs34creamove", "title": "Creampie Overflow", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["boşalma", "gür", "vajinal"], "desc": "İçine o kadar çok gelir ki daha çıkmadan dışarı taşar, uyluklarından süzülür", "color": "#5f8bff", "emojis": "🫗💦", "outcomes": [{ "id": "mvgs34creamovep", "text": "{ben} hamile kaldı", "pct": 50, "next": "", "effects": [{ "p": "f:hamile", "d": 1 }], "conds": [{ "k": "not", "ev": "mvh1h70jral7v" }] }], "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:umvjof3wzh5hej", "d": -30 }, { "p": "p:sehvet", "d": 4 }, { "p": "p:ask", "d": 1 }] },
  { "id": "mvgs35pullgush", "title": "Pulled Out Gushing", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["boşalma", "gür", "vajinal"], "desc": "Çıkardığın an içinden akın akın boşalır; şaşkınlıkla aşağı bakar", "color": "#5f8bff", "emojis": "🌊💦", "outcomes": [{ "id": "mvgs35pullgushp", "text": "{ben} hamile kaldı", "pct": 50, "next": "", "effects": [{ "p": "f:hamile", "d": 1 }], "conds": [{ "k": "not", "ev": "mvh1h70jral7v" }] }], "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:umvjof3wzh5hej", "d": -30 }, { "p": "p:sehvet", "d": 4 }, { "p": "p:ask", "d": 1 }] },
  { "id": "mvgs36mouthove", "title": "Mouth Overflow", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["boşalma", "gür", "oral"], "desc": "Yutmaya yetişemez; dudaklarının kenarından çenesine akar", "color": "#5f8bff", "emojis": "👄🫗", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:sehvet", "d": 4 }, { "p": "p:ask", "d": 1 }] },
  { "id": "mvgs37swallstr", "title": "Swallow Struggle", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["boşalma", "gür", "oral"], "desc": "Yutkunur, bir daha yutkunur; gözleri dolar ama bırakmaz", "color": "#5f8bff", "emojis": "😳👅", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:sehvet", "d": 4 }, { "p": "p:ask", "d": 1 }] },
  { "id": "mvgs38burstheld", "title": "Burst While Held", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["boşalma", "gür"], "after": ["Cheek Release", "Step Forward", "Hip Freeze", "Turn Around", "Skirt Down", "Panty Back Up", "Spank Stop", "Slow Circles Only", "Twerk Pause", "Cheek Tip Tap", "Thighs Open", "Knee Squeeze Pause", "Ankle Cross Lock", "Tip Out", "Stocking Barrier", "Pussy Slide Stop", "Leg Shake", "Pantyhose Pinch", "Pencil Skirt Trap", "Thigh Ice", "Rub But Don't Come", "Ten Strokes Then Stop", "Only When I Squeeze", "Don't Wet My Skirt", "Ask My Thighs", "Grind Countdown", "Precum Trail", "Tight Hold Tease", "Hold Still", "Slow Release", "Holding", "Hard Holding", "Cock Ring", "Still Inside", "Stop-Start", "Tease & Deny", "Hold Together"], "desc": "Engellerken dayanamazsın; izin gelmeden patlar, o da şaşırır", "color": "#5f8bff", "emojis": "🛑💥", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:sehvet", "d": 4 }, { "p": "p:ask", "d": 1 }] },
  { "id": "mvgs39untouchb", "title": "Untouched Burst", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["boşalma", "gür"], "after": ["Cheek Release", "Step Forward", "Hip Freeze", "Turn Around", "Skirt Down", "Panty Back Up", "Spank Stop", "Slow Circles Only", "Twerk Pause", "Cheek Tip Tap", "Thighs Open", "Knee Squeeze Pause", "Ankle Cross Lock", "Tip Out", "Stocking Barrier", "Pussy Slide Stop", "Leg Shake", "Pantyhose Pinch", "Pencil Skirt Trap", "Thigh Ice", "Rub But Don't Come", "Ten Strokes Then Stop", "Only When I Squeeze", "Don't Wet My Skirt", "Ask My Thighs", "Grind Countdown", "Precum Trail", "Tight Hold Tease", "Hold Still", "Slow Release", "Holding", "Hard Holding", "Cock Ring", "Still Inside", "Stop-Start", "Tease & Deny", "Hold Together"], "cum": 100, "desc": "Uzun engellemeden sonra dokunmadan, kendiliğinden fışkırır", "color": "#5f8bff", "emojis": "🙌🌊", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:sehvet", "d": 4 }, { "p": "p:ask", "d": 1 }] },
  { "id": "mvgs40analove", "title": "Anal Overflow", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["boşalma", "gür", "anal"], "desc": "Kalçasının arasından geri taşar, çarşafa damlar", "color": "#5f8bff", "emojis": "🫗🍑", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:sehvet", "d": 4 }, { "p": "p:ask", "d": 1 }] },
  { "id": "mvgs41analflo", "title": "Anal Flood Pull-Out", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["boşalma", "gür", "anal"], "desc": "Çıkardığın an arkasından akın akın gelir; kalçasını sıkıp tutmaya çalışır ama tutamaz", "color": "#5f8bff", "emojis": "🌊🍑", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:sehvet", "d": 4 }, { "p": "p:ask", "d": 1 }] },
  { "id": "mvgs42deepanal", "title": "Deep Anal Pump", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["boşalma", "gür", "anal"], "desc": "En derindeyken atım atım boşalırsın; her atımda karnını tutar, 'çok dolu' der", "color": "#5f8bff", "emojis": "💥🍑", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:sehvet", "d": 4 }, { "p": "p:ask", "d": 1 }] },
  { "id": "mvgs43clenchle", "title": "Clench And Leak", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["boşalma", "gür", "anal", "bacak"], "desc": "Kalçasını sıkar, kımıldamaz; bıraktığı an uyluklarından aşağı süzülür", "color": "#5f8bff", "emojis": "🍑💧", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:sehvet", "d": 4 }, { "p": "p:ask", "d": 1 }] },
  { "id": "mvgs44gapespil", "title": "Gape Spill", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["boşalma", "gür", "anal"], "desc": "Çıktığın an açık kalır, içinden yavaşça taşar; dönüp omzunun üstünden bakar", "color": "#5f8bff", "emojis": "🍑🫗", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:sehvet", "d": 4 }, { "p": "p:ask", "d": 1 }] },
  { "id": "mvgs45analburs", "title": "Anal Burst While Held", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["boşalma", "gür", "anal"], "after": ["Cheek Release", "Step Forward", "Hip Freeze", "Turn Around", "Skirt Down", "Panty Back Up", "Spank Stop", "Slow Circles Only", "Twerk Pause", "Cheek Tip Tap", "Thighs Open", "Knee Squeeze Pause", "Ankle Cross Lock", "Tip Out", "Stocking Barrier", "Pussy Slide Stop", "Leg Shake", "Pantyhose Pinch", "Pencil Skirt Trap", "Thigh Ice", "Rub But Don't Come", "Ten Strokes Then Stop", "Only When I Squeeze", "Don't Wet My Skirt", "Ask My Thighs", "Grind Countdown", "Precum Trail", "Tight Hold Tease", "Hold Still", "Slow Release", "Holding", "Hard Holding", "Cock Ring", "Still Inside", "Stop-Start", "Tease & Deny", "Hold Together"], "desc": "Arkadan engellerken dayanamazsın; içinde izinsiz patlar, o da sıçrar", "color": "#5f8bff", "emojis": "🛑🍑", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:sehvet", "d": 4 }, { "p": "p:ask", "d": 1 }] },
  { "id": "mvgs46doggydri", "title": "Doggy Drip Trail", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["boşalma", "gür", "anal"], "desc": "Doggy'den kalkıp yürürken arkasında damla damla iz kalır", "color": "#5f8bff", "emojis": "🐕💧", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:sehvet", "d": 4 }, { "p": "p:ask", "d": 1 }] },
  { "id": "mvgs47analswal", "title": "Anal Fill Then Swallow", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["boşalma", "gür", "anal", "oral"], "desc": "Önce arkasını doldurur, sonra hemen dönüp kalanını ağzına alır", "color": "#5f8bff", "emojis": "🍑👄", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:sehvet", "d": 4 }, { "p": "p:ask", "d": 1 }] },
  { "id": "mvgx01cleavgey", "title": "Cleavage Geyser", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["boşalma", "gür", "göğüs"], "after": ["Titfuck", "Reverse Titfuck", "Double Titfuck", "Sweaty Titjob", "Soapy Titjob", "Bubble Titjob", "Oily Titjob", "Stethoscope Titfuck", "Titfuck & Lick", "Titfuck & Suck", "Blouse Tucked Titfuck", "Blazer Closed Titfuck", "Desk Titfuck", "Under Desk Titfuck", "Glasses On Titfuck", "Lunch Break Titfuck", "Conference Table Titfuck", "Elevator Titfuck"], "desc": "Göğüslerinin arasından fışkırır, çenesinin altına çarpar", "color": "#5f8bff", "emojis": "🍈⛲", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:sehvet", "d": 4 }, { "p": "p:ask", "d": 1 }] },
  { "id": "mvgx02titpool", "title": "Tit Pool", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["boşalma", "gür", "göğüs"], "after": ["Titfuck", "Reverse Titfuck", "Double Titfuck", "Sweaty Titjob", "Soapy Titjob", "Bubble Titjob", "Oily Titjob", "Stethoscope Titfuck", "Titfuck & Lick", "Titfuck & Suck", "Blouse Tucked Titfuck", "Blazer Closed Titfuck", "Desk Titfuck", "Under Desk Titfuck", "Glasses On Titfuck", "Lunch Break Titfuck", "Conference Table Titfuck", "Elevator Titfuck"], "desc": "Göğüslerini sıkıca birleştirir; arada küçük bir göl birikir, bırakınca karnına akar", "color": "#5f8bff", "emojis": "🍈🫗", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:sehvet", "d": 4 }, { "p": "p:ask", "d": 1 }] },
  { "id": "mvgx03pearlflo", "title": "Pearl Necklace Flood", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["boşalma", "gür", "göğüs"], "after": ["Titfuck", "Reverse Titfuck", "Double Titfuck", "Sweaty Titjob", "Soapy Titjob", "Bubble Titjob", "Oily Titjob", "Stethoscope Titfuck", "Titfuck & Lick", "Titfuck & Suck", "Blouse Tucked Titfuck", "Blazer Closed Titfuck", "Desk Titfuck", "Under Desk Titfuck", "Glasses On Titfuck", "Lunch Break Titfuck", "Conference Table Titfuck", "Elevator Titfuck"], "desc": "Boynuna ip ip dolanır, kolye gibi; köprücük kemiklerinde birikir", "color": "#5f8bff", "emojis": "📿🌊", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:sehvet", "d": 4 }, { "p": "p:ask", "d": 1 }] },
  { "id": "mvgx04nippledr", "title": "Nipple Drip", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["boşalma", "gür", "göğüs"], "after": ["Titfuck", "Reverse Titfuck", "Double Titfuck", "Sweaty Titjob", "Soapy Titjob", "Bubble Titjob", "Oily Titjob", "Stethoscope Titfuck", "Titfuck & Lick", "Titfuck & Suck", "Blouse Tucked Titfuck", "Blazer Closed Titfuck", "Desk Titfuck", "Under Desk Titfuck", "Glasses On Titfuck", "Lunch Break Titfuck", "Conference Table Titfuck", "Elevator Titfuck"], "desc": "Göğüslerinden süzülüp meme uçlarından damla damla düşer", "color": "#5f8bff", "emojis": "🍒💧", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:sehvet", "d": 4 }, { "p": "p:ask", "d": 1 }] },
  { "id": "mvgx05intomout", "title": "Into Her Open Mouth", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["boşalma", "gür", "göğüs", "oral"], "after": ["Titfuck", "Reverse Titfuck", "Double Titfuck", "Sweaty Titjob", "Soapy Titjob", "Bubble Titjob", "Oily Titjob", "Stethoscope Titfuck", "Titfuck & Lick", "Titfuck & Suck", "Blouse Tucked Titfuck", "Blazer Closed Titfuck", "Desk Titfuck", "Under Desk Titfuck", "Glasses On Titfuck", "Lunch Break Titfuck", "Conference Table Titfuck", "Elevator Titfuck"], "desc": "Ağzını açıp bekler; atımlar göğüslerinin arasından doğrudan ağzına gider", "color": "#5f8bff", "emojis": "👅🍈", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:sehvet", "d": 4 }, { "p": "p:ask", "d": 1 }] },
  { "id": "mvgx06cleavove", "title": "Cleavage Overflow", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["boşalma", "gür", "göğüs"], "after": ["Titfuck", "Reverse Titfuck", "Double Titfuck", "Sweaty Titjob", "Soapy Titjob", "Bubble Titjob", "Oily Titjob", "Stethoscope Titfuck", "Titfuck & Lick", "Titfuck & Suck", "Blouse Tucked Titfuck", "Blazer Closed Titfuck", "Desk Titfuck", "Under Desk Titfuck", "Glasses On Titfuck", "Lunch Break Titfuck", "Conference Table Titfuck", "Elevator Titfuck"], "desc": "Aradan taşar, karnından göbeğine kadar iner", "color": "#5f8bff", "emojis": "🍈🌊", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:sehvet", "d": 4 }, { "p": "p:ask", "d": 1 }] },
  { "id": "mvgx07titglaze", "title": "Tit Glaze", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["boşalma", "gür", "göğüs"], "after": ["Titfuck", "Reverse Titfuck", "Double Titfuck", "Sweaty Titjob", "Soapy Titjob", "Bubble Titjob", "Oily Titjob", "Stethoscope Titfuck", "Titfuck & Lick", "Titfuck & Suck", "Blouse Tucked Titfuck", "Blazer Closed Titfuck", "Desk Titfuck", "Under Desk Titfuck", "Glasses On Titfuck", "Lunch Break Titfuck", "Conference Table Titfuck", "Elevator Titfuck"], "desc": "İki göğsü de baştan sona kaplanır, parlar; avuçlarıyla yayar", "color": "#5f8bff", "emojis": "🍩🍈", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:sehvet", "d": 4 }, { "p": "p:ask", "d": 1 }] },
  { "id": "mvgx08brafille", "title": "Bra Filled", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["boşalma", "gür", "göğüs", "kıyafet"], "after": ["Titfuck", "Reverse Titfuck", "Double Titfuck", "Sweaty Titjob", "Soapy Titjob", "Bubble Titjob", "Oily Titjob", "Stethoscope Titfuck", "Titfuck & Lick", "Titfuck & Suck", "Blouse Tucked Titfuck", "Blazer Closed Titfuck", "Desk Titfuck", "Under Desk Titfuck", "Glasses On Titfuck", "Lunch Break Titfuck", "Conference Table Titfuck", "Elevator Titfuck"], "wear": ["dantelsutyen", "pushup", "spor", "bralet", "transsutyen", "balkonet", "pamuksutyen", "emzirmesutyen"], "desc": "Sütyeninin içine dolar; çıkarınca hepsi dökülür", "color": "#5f8bff", "emojis": "👙🫗", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:sehvet", "d": 4 }, { "p": "p:ask", "d": 1 }] },
  { "id": "mvgx09kneefoun", "title": "Knee Fountain", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["boşalma", "gür", "bacak"], "after": ["Legjob", "Soapy Thighjob", "Leggings Thighjob", "Desk Edge Thighjob", "Copy Machine Thighjob"], "desc": "Dizlerinin arasından yukarı fışkırır, karnına kadar ulaşır", "color": "#5f8bff", "emojis": "🦵⛲", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:sehvet", "d": 4 }, { "p": "p:ask", "d": 1 }] },
  { "id": "mvgx10thighsea", "title": "Thigh Seal Leak", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["boşalma", "gür", "bacak"], "after": ["Legjob", "Soapy Thighjob", "Leggings Thighjob", "Desk Edge Thighjob", "Copy Machine Thighjob"], "desc": "Uyluklarını kilitleyip tutar; açınca aradan akın akın akar", "color": "#5f8bff", "emojis": "🦵💧", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:sehvet", "d": 4 }, { "p": "p:ask", "d": 1 }] },
  { "id": "mvgx11soleflo", "title": "Sole Flood", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["boşalma", "gür", "bacak"], "after": ["Legjob", "Soapy Thighjob", "Leggings Thighjob", "Desk Edge Thighjob", "Copy Machine Thighjob"], "desc": "Tabanlarına, parmak aralarına dolar; ayaklarını oynatınca süzülür", "color": "#5f8bff", "emojis": "🦶🌊", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:sehvet", "d": 4 }, { "p": "p:ask", "d": 1 }] },
  { "id": "mvgx12shinrope", "title": "Shin Rope", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["boşalma", "gür", "bacak"], "after": ["Legjob", "Soapy Thighjob", "Leggings Thighjob", "Desk Edge Thighjob", "Copy Machine Thighjob"], "desc": "Kaval kemiği boyunca uzun, tek bir ip çizer", "color": "#5f8bff", "emojis": "🦵🪢", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:sehvet", "d": 4 }, { "p": "p:ask", "d": 1 }] },
  { "id": "mvgx13garterfl", "title": "Garter Flood", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["boşalma", "gür", "bacak", "kıyafet"], "after": ["Legjob", "Soapy Thighjob", "Leggings Thighjob", "Desk Edge Thighjob", "Copy Machine Thighjob"], "wear": ["jartiyer", "jartiyerkemer"], "desc": "Jartiyer kayışlarına kadar sıçrar, dantelden damlar", "color": "#5f8bff", "emojis": "🎀🌊", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:sehvet", "d": 4 }, { "p": "p:ask", "d": 1 }] },
  { "id": "mvgx14laplake", "title": "Lap Lake", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["boşalma", "gür", "bacak"], "after": ["Legjob", "Soapy Thighjob", "Leggings Thighjob", "Desk Edge Thighjob", "Copy Machine Thighjob"], "desc": "Oturur pozisyonda kucağında, bacaklarının arasında göl olur", "color": "#5f8bff", "emojis": "🫗🦵", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:sehvet", "d": 4 }, { "p": "p:ask", "d": 1 }] },
  { "id": "mvgx15overknee", "title": "Over Her Knees", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["boşalma", "gür", "bacak"], "after": ["Legjob", "Soapy Thighjob", "Leggings Thighjob", "Desk Edge Thighjob", "Copy Machine Thighjob"], "desc": "Bacakları havadayken dizlerinin üstünden geçip yüzüne ulaşır", "color": "#5f8bff", "emojis": "⬆️🦵", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:sehvet", "d": 4 }, { "p": "p:ask", "d": 1 }] },
  { "id": "mvgx16crackfou", "title": "Crack Fountain", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["boşalma", "gür", "kalça"], "after": ["Hotdogging", "Bench Hotdogging", "Soapy Hotdogging", "Leggings Hotdogging"], "desc": "Kalçalarının arasından yukarı çeşme gibi fışkırır", "color": "#5f8bff", "emojis": "🍑⛲", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:sehvet", "d": 4 }, { "p": "p:ask", "d": 1 }] },
  { "id": "mvgx17dimplepo", "title": "Dimple Pools", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["boşalma", "gür", "kalça"], "after": ["Hotdogging", "Bench Hotdogging", "Soapy Hotdogging", "Leggings Hotdogging"], "desc": "Belindeki iki gamzede iki küçük göl birikir", "color": "#5f8bff", "emojis": "🍑🫗", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:sehvet", "d": 4 }, { "p": "p:ask", "d": 1 }] },
  { "id": "mvgx18cheekgla", "title": "Cheek Glaze", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["boşalma", "gür", "kalça"], "after": ["Hotdogging", "Bench Hotdogging", "Soapy Hotdogging", "Leggings Hotdogging"], "desc": "İki yanağı da baştan sona kaplanır; avucuyla yayar", "color": "#5f8bff", "emojis": "🍑🍩", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:sehvet", "d": 4 }, { "p": "p:ask", "d": 1 }] },
  { "id": "mvgx19thongsoa", "title": "Thong Soaked", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["boşalma", "gür", "kalça", "kıyafet"], "after": ["Hotdogging", "Bench Hotdogging", "Soapy Hotdogging", "Leggings Hotdogging"], "wear": ["tanga", "string"], "desc": "Tangasının ipi sırılsıklam olur, kalçalarının arasına yapışır", "color": "#5f8bff", "emojis": "👙💦", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:sehvet", "d": 4 }, { "p": "p:ask", "d": 1 }] },
  { "id": "mvgx20hotdogov", "title": "Hotdog Overflow", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["boşalma", "gür", "kalça"], "after": ["Hotdogging", "Bench Hotdogging", "Soapy Hotdogging", "Leggings Hotdogging"], "desc": "Sıkınca aradan taşar, uyluklarının arkasından süzülür", "color": "#5f8bff", "emojis": "🌭🌊", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:sehvet", "d": 4 }, { "p": "p:ask", "d": 1 }] },
  { "id": "mvgx21twerkspl", "title": "Twerk Splash", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["boşalma", "gür", "kalça"], "after": ["Hotdogging", "Bench Hotdogging", "Soapy Hotdogging", "Leggings Hotdogging"], "desc": "Twerk yaparken bırakırsın; her sallanışta atımlar dağılır", "color": "#5f8bff", "emojis": "🍑💃", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:sehvet", "d": 4 }, { "p": "p:ask", "d": 1 }] },
  { "id": "mvgx22archcatc", "title": "Arch And Catch", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["boşalma", "gür", "kalça"], "after": ["Hotdogging", "Bench Hotdogging", "Soapy Hotdogging", "Leggings Hotdogging"], "desc": "Belini büküp kalçasını kaldırır, hepsini sırtının çukurunda toplar", "color": "#5f8bff", "emojis": "🍑🫴", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:sehvet", "d": 4 }, { "p": "p:ask", "d": 1 }] },
  { "id": "mvgx23legthfl", "title": "Leggings Thigh Flood", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["boşalma", "gür", "bacak", "kıyafet"], "after": ["Legjob", "Soapy Thighjob", "Leggings Thighjob", "Desk Edge Thighjob", "Copy Machine Thighjob"], "wear": ["tayt", "trainerkost"], "desc": "Taytlı uyluklarının arasından fışkırır; iki bacağında da ıslak çizgiler", "color": "#5f8bff", "emojis": "🦵🧘‍♀️", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:sehvet", "d": 4 }, { "p": "p:ask", "d": 1 }] },
  { "id": "mvgx24soakthro", "title": "Soaked Through", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["boşalma", "gür", "bacak", "kıyafet"], "after": ["Legjob", "Soapy Thighjob", "Leggings Thighjob", "Desk Edge Thighjob", "Copy Machine Thighjob"], "wear": ["tayt", "trainerkost"], "desc": "O kadar çok ki ince taytın içine geçer, tenine yapışır", "color": "#5f8bff", "emojis": "💦🧘‍♀️", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:sehvet", "d": 4 }, { "p": "p:ask", "d": 1 }] },
  { "id": "mvgx25kneeankl", "title": "Knee To Ankle Stripes", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["boşalma", "gür", "bacak", "kıyafet"], "after": ["Legjob", "Soapy Thighjob", "Leggings Thighjob", "Desk Edge Thighjob", "Copy Machine Thighjob"], "wear": ["tayt", "trainerkost"], "desc": "Taytının üstünde dizinden bileğine kadar beyaz şeritler", "color": "#5f8bff", "emojis": "🦵🪢", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:sehvet", "d": 4 }, { "p": "p:ask", "d": 1 }] },
  { "id": "mvgx26gymruine", "title": "Gym Ruined", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["boşalma", "gür", "bacak", "kıyafet"], "after": ["Legjob", "Soapy Thighjob", "Leggings Thighjob", "Desk Edge Thighjob", "Copy Machine Thighjob"], "wear": ["tayt", "trainerkost"], "desc": "Taytına bakıp güler: 'bununla bir daha spora gidemem'", "color": "#5f8bff", "emojis": "🏋️😳", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:sehvet", "d": 4 }, { "p": "p:ask", "d": 1 }] },
  { "id": "mvgx27legassgl", "title": "Leggings Ass Glaze", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["boşalma", "gür", "kalça", "kıyafet"], "after": ["Hotdogging", "Bench Hotdogging", "Soapy Hotdogging", "Leggings Hotdogging"], "wear": ["tayt", "trainerkost"], "desc": "Taytlı kalçasının üstünü baştan sona kaplar, siyah kumaşta parlar", "color": "#5f8bff", "emojis": "🍑🧘‍♀️", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:sehvet", "d": 4 }, { "p": "p:ask", "d": 1 }] },
  { "id": "mvgx28seamover", "title": "Seam Overflow", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["boşalma", "gür", "kalça", "kıyafet"], "after": ["Hotdogging", "Bench Hotdogging", "Soapy Hotdogging", "Leggings Hotdogging"], "wear": ["tayt", "trainerkost"], "desc": "Taytın arka dikişi boyunca birikir, uyluklarının arkasından akar", "color": "#5f8bff", "emojis": "🍑🌊", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:sehvet", "d": 4 }, { "p": "p:ask", "d": 1 }] },
  { "id": "mvgx29pulldpoo", "title": "Pulled Down Pool", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["boşalma", "gür", "kalça", "kıyafet"], "after": ["Hotdogging", "Bench Hotdogging", "Soapy Hotdogging", "Leggings Hotdogging"], "wear": ["tayt", "trainerkost"], "desc": "Taytını yarıya indirmiş; kalçasıyla tayt arasındaki çukurda göl olur", "color": "#5f8bff", "emojis": "🍑🫗", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:sehvet", "d": 4 }, { "p": "p:ask", "d": 1 }] },
  { "id": "mvgx30waistcat", "title": "Waistband Catch", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["boşalma", "gür", "kalça", "kıyafet"], "after": ["Hotdogging", "Bench Hotdogging", "Soapy Hotdogging", "Leggings Hotdogging"], "wear": ["tayt", "trainerkost"], "desc": "Atımlar sırtından aşağı süzülüp taytının arka lastiğine dolar", "color": "#5f8bff", "emojis": "👖💦", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:sehvet", "d": 4 }, { "p": "p:ask", "d": 1 }] },
  { "id": "mvgx31seethrou", "title": "See-Through Stain", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["boşalma", "gür", "kalça", "kıyafet"], "after": ["Hotdogging", "Bench Hotdogging", "Soapy Hotdogging", "Leggings Hotdogging"], "wear": ["tayt", "trainerkost"], "desc": "Islanan yerde tayt şeffaflaşır, altındaki stringi gösterir", "color": "#5f8bff", "emojis": "👀🧘‍♀️", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:sehvet", "d": 4 }, { "p": "p:ask", "d": 1 }] },
  { "id": "mvgx32throbutt", "title": "Through The Buttons", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["boşalma", "gür", "göğüs", "kıyafet"], "after": ["Titfuck", "Reverse Titfuck", "Double Titfuck", "Sweaty Titjob", "Soapy Titjob", "Bubble Titjob", "Oily Titjob", "Stethoscope Titfuck", "Titfuck & Lick", "Titfuck & Suck", "Blouse Tucked Titfuck", "Blazer Closed Titfuck", "Desk Titfuck", "Under Desk Titfuck", "Glasses On Titfuck", "Lunch Break Titfuck", "Conference Table Titfuck", "Elevator Titfuck"], "wear": ["gomlek", "satengomlek"], "desc": "Düğmelerin arasından yaptığın titfuck'ta içeri fışkırır; gömleğin içinden karnına akar", "color": "#5f8bff", "emojis": "👔💦", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:sehvet", "d": 4 }, { "p": "p:ask", "d": 1 }] },
  { "id": "mvgx33collarso", "title": "Collar Soaked", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["boşalma", "gür", "göğüs", "kıyafet"], "after": ["Titfuck", "Reverse Titfuck", "Double Titfuck", "Sweaty Titjob", "Soapy Titjob", "Bubble Titjob", "Oily Titjob", "Stethoscope Titfuck", "Titfuck & Lick", "Titfuck & Suck", "Blouse Tucked Titfuck", "Blazer Closed Titfuck", "Desk Titfuck", "Under Desk Titfuck", "Glasses On Titfuck", "Lunch Break Titfuck", "Conference Table Titfuck", "Elevator Titfuck"], "wear": ["gomlek", "satengomlek"], "desc": "Atımlar yakasına ulaşır, yaka sırılsıklam boynuna yapışır", "color": "#5f8bff", "emojis": "👔🌊", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:sehvet", "d": 4 }, { "p": "p:ask", "d": 1 }] },
  { "id": "mvgx34transwhi", "title": "Transparent White", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["boşalma", "gür", "göğüs", "kıyafet"], "after": ["Titfuck", "Reverse Titfuck", "Double Titfuck", "Sweaty Titjob", "Soapy Titjob", "Bubble Titjob", "Oily Titjob", "Stethoscope Titfuck", "Titfuck & Lick", "Titfuck & Suck", "Blouse Tucked Titfuck", "Blazer Closed Titfuck", "Desk Titfuck", "Under Desk Titfuck", "Glasses On Titfuck", "Lunch Break Titfuck", "Conference Table Titfuck", "Elevator Titfuck"], "wear": ["gomlek"], "desc": "Beyaz gömleği ıslanınca şeffaflaşır, göğüsleri altından belli olur", "color": "#5f8bff", "emojis": "👀👔", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:sehvet", "d": 4 }, { "p": "p:ask", "d": 1 }] },
  { "id": "mvgx35satinsli", "title": "Satin Slide", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["boşalma", "gür", "göğüs", "kıyafet"], "after": ["Titfuck", "Reverse Titfuck", "Double Titfuck", "Sweaty Titjob", "Soapy Titjob", "Bubble Titjob", "Oily Titjob", "Stethoscope Titfuck", "Titfuck & Lick", "Titfuck & Suck", "Blouse Tucked Titfuck", "Blazer Closed Titfuck", "Desk Titfuck", "Under Desk Titfuck", "Glasses On Titfuck", "Lunch Break Titfuck", "Conference Table Titfuck", "Elevator Titfuck"], "wear": ["satengomlek"], "desc": "Saten kumaşın üstünde tutunamaz, göğüslerinden aşağı kayarak akar", "color": "#5f8bff", "emojis": "🤍💧", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:sehvet", "d": 4 }, { "p": "p:ask", "d": 1 }] },
  { "id": "mvgx36tieruine", "title": "Tie Ruined", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["boşalma", "gür", "göğüs", "kıyafet"], "after": ["Titfuck", "Reverse Titfuck", "Double Titfuck", "Sweaty Titjob", "Soapy Titjob", "Bubble Titjob", "Oily Titjob", "Stethoscope Titfuck", "Titfuck & Lick", "Titfuck & Suck", "Blouse Tucked Titfuck", "Blazer Closed Titfuck", "Desk Titfuck", "Under Desk Titfuck", "Glasses On Titfuck", "Lunch Break Titfuck", "Conference Table Titfuck", "Elevator Titfuck"], "wear": ["gomlek", "satengomlek"], "desc": "Gömleğin üstündeki kravatına kadar sıçrar; kravatı ucundan damlar", "color": "#5f8bff", "emojis": "👔😳", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:sehvet", "d": 4 }, { "p": "p:ask", "d": 1 }] },
  { "id": "mvgx37pocketfi", "title": "Pocket Filled", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["boşalma", "gür", "göğüs", "kıyafet"], "after": ["Titfuck", "Reverse Titfuck", "Double Titfuck", "Sweaty Titjob", "Soapy Titjob", "Bubble Titjob", "Oily Titjob", "Stethoscope Titfuck", "Titfuck & Lick", "Titfuck & Suck", "Blouse Tucked Titfuck", "Blazer Closed Titfuck", "Desk Titfuck", "Under Desk Titfuck", "Glasses On Titfuck", "Lunch Break Titfuck", "Conference Table Titfuck", "Elevator Titfuck"], "wear": ["gomlek"], "desc": "Göğüs cebine bile dolar; parmağını içine sokup gösterir", "color": "#5f8bff", "emojis": "👔🫗", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:sehvet", "d": 4 }, { "p": "p:ask", "d": 1 }] },
  { "id": "mvdm01loosegri", "title": "Loose Grip Dribble", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["boşalma", "damla", "el"], "desc": "Tam o an elini gevşetir; ucundan damla damla, zar zor gelir", "color": "#9ecbe0", "emojis": "🤏💧", "outcomes": [{ "id": "mvdm01loosegrio", "text": "💧 {ben} elini gevşetti; damla damla geldi, içinde hâlâ çok şey kaldı", "pct": 100, "next": "", "effects": [] }], "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:umvjof3wzh5hej", "d": -10 }, { "p": "p:umvjoe339asss4", "d": 40 }, { "p": "p:sehvet", "d": 2 }] },
  { "id": "mvdm02slowooze", "title": "Slowed Down Ooze", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["boşalma", "damla", "vajinal"], "desc": "Üstünde son anda yavaşlar; fışkırmaz, içine sadece sızar", "color": "#9ecbe0", "emojis": "🐢💧", "outcomes": [{ "id": "mvdm02slowoozep", "text": "{ben} hamile kaldı", "pct": 25, "next": "", "effects": [{ "p": "f:hamile", "d": 1 }], "conds": [{ "k": "not", "ev": "mvh1h70jral7v" }] }], "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:umvjof3wzh5hej", "d": -10 }, { "p": "p:umvjoe339asss4", "d": 40 }, { "p": "p:sehvet", "d": 2 }] },
  { "id": "mvdm03distrtri", "title": "Distracted Trickle", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["boşalma", "damla", "el", "oral"], "desc": "Telefonuna bakarken ritmi bırakır; ince bir sızıntı olur", "color": "#9ecbe0", "emojis": "📱💧", "outcomes": [{ "id": "mvdm03distrtrio", "text": "📱 {ben} telefona daldı; ince bir sızıntıyla bitti, yarım kaldı", "pct": 100, "next": "", "effects": [] }], "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:umvjof3wzh5hej", "d": -10 }, { "p": "p:umvjoe339asss4", "d": 40 }, { "p": "p:sehvet", "d": 2 }] },
  { "id": "mvdm04toogentl", "title": "Too Gentle", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["boşalma", "damla", "el", "oral"], "desc": "Çok nazik dokunur; boşalırsın ama zevk yarım kalır", "color": "#9ecbe0", "emojis": "🪶💧", "outcomes": [{ "id": "mvdm04toogentlo", "text": "🪶 {ben} çok nazikti; boşaldın ama zevk yarım kaldı", "pct": 100, "next": "", "effects": [] }], "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:umvjof3wzh5hej", "d": -10 }, { "p": "p:umvjoe339asss4", "d": 40 }, { "p": "p:sehvet", "d": 2 }] },
  { "id": "mvdm05stopsoon", "title": "Stopped Too Soon", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["boşalma", "damla", "kalça", "bacak", "göğüs"], "desc": "Bitti sanıp bırakır; kalanı yavaş yavaş akar", "color": "#9ecbe0", "emojis": "✋💧", "outcomes": [{ "id": "mvdm05stopsoono", "text": "✋ {ben} bitti sanıp bıraktı; kalanı yavaş yavaş aktı", "pct": 100, "next": "", "effects": [] }], "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:umvjof3wzh5hej", "d": -10 }, { "p": "p:umvjoe339asss4", "d": 40 }, { "p": "p:sehvet", "d": 2 }] },
  { "id": "mvdm06pulsenop", "title": "Pulse Without Push", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["boşalma", "damla", "vajinal"], "desc": "Kasılırsın ama o kıpırdamaz; her kasılmada içine tek damla", "color": "#9ecbe0", "emojis": "💓💧", "outcomes": [{ "id": "mvdm06pulsenopp", "text": "{ben} hamile kaldı", "pct": 25, "next": "", "effects": [{ "p": "f:hamile", "d": 1 }], "conds": [{ "k": "not", "ev": "mvh1h70jral7v" }] }], "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:umvjof3wzh5hej", "d": -10 }, { "p": "p:umvjoe339asss4", "d": 40 }, { "p": "p:sehvet", "d": 2 }] },
  { "id": "mvdm07softclea", "title": "Soft Cleavage Seep", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["boşalma", "damla", "göğüs"], "desc": "Göğüslerini gevşetir; aralarında sadece sızar", "color": "#9ecbe0", "emojis": "🍈💧", "outcomes": [{ "id": "mvdm07softcleao", "text": "🍈 {ben} göğüslerini gevşetti; aralarında sadece sızdı", "pct": 100, "next": "", "effects": [] }], "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:umvjof3wzh5hej", "d": -10 }, { "p": "p:umvjoe339asss4", "d": 40 }, { "p": "p:sehvet", "d": 2 }] },
  { "id": "mvdm08breastsl", "title": "Breasts Let Go", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["boşalma", "damla", "göğüs"], "desc": "Tam o an göğüslerini bırakır; göğüs kemiğine birkaç damla düşer", "color": "#9ecbe0", "emojis": "🍈🫳", "outcomes": [{ "id": "mvdm08breastslo", "text": "🍈 {ben} göğüslerini bıraktı; göğüs kemiğine birkaç damla düştü", "pct": 100, "next": "", "effects": [] }], "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:umvjof3wzh5hej", "d": -10 }, { "p": "p:umvjoe339asss4", "d": 40 }, { "p": "p:sehvet", "d": 2 }] },
  { "id": "mvdm09thighsre", "title": "Thighs Relaxed", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["boşalma", "damla", "bacak"], "desc": "Uyluklarını açar; sıkışma gidince damla damla gelir", "color": "#9ecbe0", "emojis": "🦵💧", "outcomes": [{ "id": "mvdm09thighsreo", "text": "🦵 {ben} uyluklarını açtı; sıkışma gidince damla damla süzüldü", "pct": 100, "next": "", "effects": [] }], "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:umvjof3wzh5hej", "d": -10 }, { "p": "p:umvjoe339asss4", "d": 40 }, { "p": "p:sehvet", "d": 2 }] },
  { "id": "mvdm10lazylegs", "title": "Lazy Legs", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["boşalma", "damla", "bacak"], "desc": "Bacaklarını oynatmayı bırakır; zar zor süzülür", "color": "#9ecbe0", "emojis": "🦵😴", "outcomes": [{ "id": "mvdm10lazylegso", "text": "🦵 {ben} bacaklarını oynatmayı bıraktı; zar zor süzüldü", "pct": 100, "next": "", "effects": [] }], "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:umvjof3wzh5hej", "d": -10 }, { "p": "p:umvjoe339asss4", "d": 40 }, { "p": "p:sehvet", "d": 2 }] },
  { "id": "mvdm11cheeksun", "title": "Cheeks Unclenched", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["boşalma", "damla", "kalça"], "desc": "Kalçasını gevşetir; aradan ince bir damla yolu iner", "color": "#9ecbe0", "emojis": "🍑💧", "outcomes": [{ "id": "mvdm11cheeksuno", "text": "🍑 {ben} kalçasını gevşetti; aradan ince bir damla yolu indi", "pct": 100, "next": "", "effects": [] }], "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:umvjof3wzh5hej", "d": -10 }, { "p": "p:umvjoe339asss4", "d": 40 }, { "p": "p:sehvet", "d": 2 }] },
  { "id": "mvdm12hipsstop", "title": "Hips Stopped", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["boşalma", "damla", "kalça"], "desc": "Kalçasını oynatmayı bırakır; yarım kalan boşalma sızar", "color": "#9ecbe0", "emojis": "🍑⏸️", "outcomes": [{ "id": "mvdm12hipsstopo", "text": "🍑 {ben} kalçasını durdurdu; yarım kalan boşalma sızdı", "pct": 100, "next": "", "effects": [] }], "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:umvjof3wzh5hej", "d": -10 }, { "p": "p:umvjoe339asss4", "d": 40 }, { "p": "p:sehvet", "d": 2 }] },
  { "id": "mvdm13lipsoffe", "title": "Lips Off Too Early", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["boşalma", "damla", "oral"], "desc": "Dudaklarını tam o an çeker; dudağına birkaç damla düşer", "color": "#9ecbe0", "emojis": "👄💧", "outcomes": [{ "id": "mvdm13lipsoffeo", "text": "👄 {ben} dudaklarını erken çekti; dudağına birkaç damla düştü", "pct": 100, "next": "", "effects": [] }], "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:umvjof3wzh5hej", "d": -10 }, { "p": "p:umvjoe339asss4", "d": 40 }, { "p": "p:sehvet", "d": 2 }] },
  { "id": "mvdm14lazystro", "title": "Lazy Stroke Finish", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["boşalma", "damla", "el"], "desc": "Yavaş, gevşek okşar; uçta birikip süzülür", "color": "#9ecbe0", "emojis": "✊💧", "outcomes": [{ "id": "mvdm14lazystroo", "text": "✋ {ben} gevşek okşadı; uçta birikip süzüldü", "pct": 100, "next": "", "effects": [] }], "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:umvjof3wzh5hej", "d": -10 }, { "p": "p:umvjoe339asss4", "d": 40 }, { "p": "p:sehvet", "d": 2 }] },
  { "id": "mvdm15wasthati", "title": "Was That It?", "cat": "c:mvcooldown01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "Az gelince şaşırır: 'Bu kadar mı?'", "color": "#6fb7e9", "emojis": "🤨💧", "onEffects": [{ "p": "p:sehvet", "d": 1 }] },
  { "id": "mvdm16apologys", "title": "Apology Squeeze", "cat": "c:mvcooldown01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "'Pardon, bıraktım' der; sıkıp kalanını çıkarmaya çalışır", "color": "#6fb7e9", "emojis": "😅🤏", "onEffects": [{ "p": "p:sehvet", "d": 3 }, { "p": "p:samimiyet", "d": 1 }, { "p": "p:umvjoe339asss4", "d": 15 }] },
  { "id": "mvdm17stillful", "title": "Still Full", "cat": "c:mvcooldown01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "Boşaldın ama hâlâ dolusun; o da fark eder, gülümser", "color": "#6fb7e9", "emojis": "😩🫙", "onEffects": [{ "p": "p:sehvet", "d": 2 }, { "p": "p:ask", "d": 1 }] },
  { "id": "mvhw4pmpgrd04", "title": "Pumpkin Grind", "cat": "c:mvgn2ubfw2eoh", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["kıyafet", "halloween"], "desc": "Kostümler üstünde: kucağında kalçasını dairesel çevirerek sana sürtünür", "color": "#ef6c00", "emojis": "🎃👖" },
  { "id": "mvhw5spdweb05", "title": "Spider Web", "cat": "c:mvglvwdtam0h7", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "halloween"], "desc": "Bilekleri başının üstünde tutulu, bacakları ağ gibi dört yana açık", "color": "#37474f", "emojis": "🕸️🕷️" },
  { "id": "mvhw6crysbl06", "title": "Crystal Ball", "cat": "c:mvgn2ubfw2eoh", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["göğüs", "halloween"], "desc": "Göğüslerini avuçlarıyla birleştirip kristal küre yapar, arasında sürtünürsün", "color": "#7b1fa2", "emojis": "🔮🍒" },
  { "id": "mvhw7masqrd07", "title": "Masquerade", "cat": "c:mvgn2ubfw2eoh", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["kıyafet", "halloween"], "desc": "Maskeli ve kostümlü: kimliğini saklayarak, kıyafetlerin üstünden sürtünme", "color": "#6a1b9a", "emojis": "🎭👖" },
  { "id": "mvhw8candlk08", "title": "Candy Lick", "cat": "c:mvgtgdbp6e8xv", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["yalama", "halloween"], "desc": "Vücuduna şeker ve karamel sürülür, yalayarak temizlersin", "color": "#ff7043", "emojis": "🍬👅" },
  { "id": "mvhw9tombst09", "title": "Tombstone", "cat": "c:mvglvwdtam0h7", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "halloween"], "desc": "Ayakta, sırtı soğuk bir taşa yaslı; bir bacağını kaldırıp önden alırsın", "color": "#546e7a", "emojis": "🪦🔥" },
  { "id": "mvhw10coflid", "title": "Coffin Lid", "cat": "c:mvglvwdtam0h7", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "halloween"], "desc": "Sırtüstü, bacakları birleşik ve dimdik yukarıda, tabut kapağı gibi", "color": "#3e2723", "emojis": "⚰️🦵" },
  { "id": "mvhw11ghstrd", "title": "Ghost Ride", "cat": "c:mvgm9ihwda8f5", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "halloween"], "desc": "Reverse cowgirl, üstünde beyaz tül bir çarşaf: hayalet gibi süzülür", "color": "#90a4ae", "emojis": "👻🍑" },
  { "id": "mvhw12nckfst", "title": "Neck Feast", "cat": "c:mvglvwdtam0h7", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "halloween", "kan"], "desc": "Kaşık pozisyonu: arkadan sarılıp alırken boynuna kapanır, ısırıp içersin", "color": "#8b0000", "emojis": "🧛🩸" },
  { "id": "mvhw13jugrd", "title": "Jugular Ride", "cat": "c:mvglvwdtam0h7", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "halloween", "kan"], "desc": "Üstünde oturur, öne eğilip boynuna kapanır; seni sürerken boynundan içer", "color": "#a31515", "emojis": "🩸🏇" },
  { "id": "mvhw14wrsofr", "title": "Wrist Offering", "cat": "c:mvglvwdtam0h7", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "halloween", "kan"], "desc": "Missionary: bileğini ağzına uzatırsın, o emerken içine girersin", "color": "#7f0000", "emojis": "🔪🩸" },
  { "id": "mvhw15thgbt", "title": "Thigh Bite", "cat": "c:mvgtgdbp6e8xv", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["yalama", "halloween", "kan"], "desc": "Bacaklarının arasındayken iç bacağını ısırırsın, sonra yalamaya dönersin", "color": "#9a1b1b", "emojis": "🦷🩸" },
  { "id": "mvhw16shdmrk", "title": "Shoulder Mark", "cat": "c:mvglvwdtam0h7", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "halloween", "kan"], "desc": "Ayakta, duvara yaslı; alırken omzuna dişlerini geçirip iz bırakırsın", "color": "#6d0f0f", "emojis": "🦷🧱" },
  { "id": "mvhw17chalce", "title": "Chalice", "cat": "c:mvgtgdbp6e8xv", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["yalama", "göğüs", "halloween", "kan"], "desc": "Göğüslerini kadeh gibi birleştirir, arasına kırmızı şarap döker; sen içersin", "color": "#722f37", "emojis": "🍷🍒" },
  { "id": "mvhw18redfnt", "title": "Red Fountain", "cat": "c:mvgtgdbp6e8xv", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["yalama", "halloween", "kan"], "desc": "Sırtüstü uzanır, karnına kırmızı sıvı dökülür; aşağı akarken yalarsın", "color": "#8e1b2c", "emojis": "🍷👅" },
  { "id": "mvhw19commun", "title": "Communion", "cat": "c:mvgm5g7q1xopl", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["ön_sevişme", "halloween", "kan"], "desc": "Aynı kadehten içer, şarabı ağzından ağzına aktarırsınız", "color": "#5e1a2b", "emojis": "🍷💋" },
  { "id": "mvhw20bldbth", "title": "Blood Bath", "cat": "c:mvglvwdtam0h7", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "halloween", "kan"], "desc": "Kırmızı suyla dolu küvette, kucağında yüz yüze", "color": "#b00020", "emojis": "🛁🩸" },
  { "id": "mvhw21btmsup", "title": "Bottoms Up", "cat": "c:mvgtgdbp6e8xv", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["yalama", "kalça", "halloween", "kan"], "desc": "Dört ayak üstünde, kalçasından aşağı şarap dökülür; götünden içersin", "color": "#6b1d2a", "emojis": "🍷🍑" },
  { "id": "mvhw22sacrfc", "title": "Sacrifice", "cat": "c:mvglvwdtam0h7", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "halloween", "kan"], "desc": "Bağlı yatar, avucuna küçük bir kesik atılır; damlalar göğsüne düşerken önden alırsın", "color": "#5c0000", "emojis": "🔪🕯️" },
  { "id": "mvhw23bldpct", "title": "Blood Pact", "cat": "c:mvglvwdtam0h7", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "halloween", "kan"], "desc": "İki avuç kesilip birleştirilir; sonra kucağında yüz yüze oturarak", "color": "#4a0000", "emojis": "🤝🩸" },
  { "id": "mvhwc1chalcs", "title": "Chalice Cumshot", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["göğüs", "boşalma", "halloween", "kan"], "desc": "Kadeh gibi birleştirdiği göğüslerinin arasına boşalırsın, şarapla karışır", "color": "#722f37", "emojis": "💦🍷", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }] },
  { "id": "mvhwc2wingls", "title": "Wine Glass", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["el", "boşalma", "halloween", "kan"], "desc": "Kadehe boşalırsın; o şarapla karıştırıp içer", "color": "#5e1a2b", "emojis": "💦🥂", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }] },
  { "id": "mvhwc3btmfin", "title": "Bottoms Up Finish", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["kalça", "boşalma", "halloween", "kan"], "desc": "Şarap döktüğün kalçasının üstüne boşalırsın; sonra yalayıp temizler", "color": "#6b1d2a", "emojis": "💦🍑", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }] },
  { "id": "mvhwc4rdbthc", "title": "Red Bath Creampie", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "boşalma", "halloween", "kan"], "desc": "Kırmızı küvette, suyun içinde içine boşalırsın", "color": "#b00020", "emojis": "💦🛁", "base": "b:extra:Creampie", "level": "",
    "outcomes": [{ "id": "mvhwc4preg01", "text": "{ben} hamile kaldı", "pct": 50, "next": "", "effects": [{ "p": "f:hamile", "d": 1 }], "conds": [{ "k": "not", "ev": "mvh1h70jral7v" }] }], "subs": [], "sub": "",
    "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:umvjof3wzh5hej", "d": -30 }] },
  { "id": "mvhwc5shroud", "title": "Shroud Cumshot", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["kıyafet", "boşalma", "halloween"], "desc": "Hayalet tülünün ya da mumya sargısının üstüne boşalırsın; kumaşta iz kalır", "color": "#90a4ae", "emojis": "💦👻", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }] },
  { "id": "mvhwc6potion", "title": "Potion Ingredient", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["el", "boşalma", "halloween"], "desc": "Cadının kazanına ya da şişesine boşalırsın: iksirin son malzemesi", "color": "#4a148c", "emojis": "💦🧪", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }] },
  { "id": "mvhwc7sirens", "title": "Siren's Swallow", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["oral", "boşalma", "halloween"], "desc": "Ağzına boşalırsın, yutar; sonra şarkı mırıldanır", "color": "#00838f", "emojis": "💦🧜‍♀️", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }] },
  { "id": "mvhwc8crmsmx", "title": "Crimson Mix", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["göğüs", "boşalma", "halloween", "kan"], "desc": "Kesikli avucunun ya da göğsündeki kırmızı damlaların üstüne boşalırsın; iki renk karışır", "color": "#5c0000", "emojis": "💦🩸", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }] },
  { "id": "mvhwc9vmpkss", "title": "Vampire Kiss Finish", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["oral", "boşalma", "halloween", "kan"], "desc": "Ağzına boşalırsın; o kanlı dudaklarıyla seni öper", "color": "#8b0000", "emojis": "💦💋", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }] },
  { "id": "mvhwsl1fbwrp", "title": "Full Body Wrap", "cat": "c:mvgm9ihwda8f5", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "halloween", "slime"], "desc": "Arkadan alırken bütün bedeniyle sana sarılır; jöle gibi her yerini kaplar", "color": "#43a047", "emojis": "🫠🍑" },
  { "id": "mvhwsl2jlyrd", "title": "Jelly Ride", "cat": "c:mvglvwdtam0h7", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "halloween", "slime"], "desc": "Yüz yüze üstüne oturur; her inişte bedeni dalga dalga titrer", "color": "#66bb6a", "emojis": "💚🏇" },
  { "id": "mvhwsl3wbldg", "title": "Wobble Doggy", "cat": "c:mvgm9ihwda8f5", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "halloween", "slime"], "desc": "Dört ayak üstünde; jöle kalçası her vuruşta sallanır", "color": "#2e7d32", "emojis": "🍑💚" },
  { "id": "mvhwsl4slhug", "title": "Slime Hug", "cat": "c:mvgn2ubfw2eoh", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["göğüs", "halloween", "slime"], "desc": "Erimiş gibi göğüslerini etrafına sarar; kaygan, yapışkan bir göğüs arası", "color": "#81c784", "emojis": "🫧🍒" },
  { "id": "mvhwsl5shpsf", "title": "Shapeshift", "cat": "c:mvglvwdtam0h7", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "halloween", "slime"], "desc": "Önden alırken şekil değiştirir: göğüslerini, kalçasını büyütür, içini sana göre daraltır", "color": "#00897b", "emojis": "🌀🫠" },
  { "id": "mvhwsc1viscr", "title": "Visible Creampie", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "boşalma", "halloween", "slime"], "desc": "İçine boşalırsın; yarı saydam bedeninde beyaz bir bulut olarak görünür", "color": "#43a047", "emojis": "💦👀", "base": "b:extra:Creampie", "level": "",
    "outcomes": [{ "id": "mvhwsc1preg1", "text": "{ben} hamile kaldı", "pct": 50, "next": "", "effects": [{ "p": "f:hamile", "d": 1 }], "conds": [{ "k": "not", "ev": "mvh1h70jral7v" }] }], "subs": [], "sub": "",
    "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:umvjof3wzh5hej", "d": -30 }] },
  { "id": "mvhwsc2absrb", "title": "Absorption", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["kalça", "boşalma", "halloween", "slime"], "desc": "Tenine boşalırsın; her damlayı emer, hiç iz kalmaz", "color": "#2e7d32", "emojis": "💦🫠", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }] },
  { "id": "mvhwsc3slcot", "title": "Slime Coat", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["göğüs", "boşalma", "halloween", "slime"], "desc": "Göğüslerinin üstüne boşalırsın; yeşilin üstünde parlar, yavaşça içine kaybolur", "color": "#81c784", "emojis": "💦💚", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }] },
  { "id": "mvhwsc4visw", "title": "Visible Swallow", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["oral", "boşalma", "halloween", "slime"], "desc": "Ağzına boşalırsın, yutar; boğazından aşağı süzülüşü dışarıdan görünür", "color": "#66bb6a", "emojis": "💦🥤", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }] },
  { "id": "mvhwsz1slgrw", "title": "Slime Growth", "cat": "c:mvguxicvzx0iq", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["halloween", "slime"], "desc": "Slime Girl seni fazla emdi ve büyüdü: göğüsleri, kalçası dolgunlaşır (Slime Girl'le 3. boşalmadan sonra kendiliğinden)", "color": "#1b5e20", "emojis": "🫠📈" },
  { "id": "mvtr01prstex", "title": "Prostate Exam", "cat": "c:mvtreat01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["el", "boşalma", "tedavi"], "desc": "Eldivenli parmağıyla prostatına masaj yapar; sana dokunmadan boşaltır", "color": "#0288d1", "emojis": "🧤💦", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }] },
  { "id": "mvtr02milkth", "title": "Milking Therapy", "cat": "c:mvtreat01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["el", "boşalma", "tedavi"], "desc": "Yağlı eldivenle yavaş yavaş sağar, son damlaya kadar boşaltır; gerginliğin gider", "color": "#0277bd", "emojis": "🧴✋", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }] },
  { "id": "mvtr03smnsmp", "title": "Semen Sample", "cat": "c:mvtreat01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["el", "boşalma", "tedavi"], "desc": "Tahlil için numune: eliyle boşaltıp kabı ağzına kadar doldurur", "color": "#01579b", "emojis": "🧪💦", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }] },
  { "id": "mvtr04mslrls", "title": "Muscle Release", "cat": "c:mvtreat01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["tedavi"], "desc": "Tutulan kaslarına derin doku tedavisi: düğümleri parmaklarıyla tek tek çözer", "color": "#00838f", "emojis": "💪💆" },
  { "id": "mvtr05wrmcmp", "title": "Warm Compress", "cat": "c:mvtreat01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["tedavi"], "desc": "Ağrıyan yere sıcak kompres koyar, üstünden yavaşça ovar", "color": "#ef6c00", "emojis": "♨️🧣" },
  { "id": "mvtr06strtch", "title": "Stretch Therapy", "cat": "c:mvtreat01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["tedavi"], "desc": "Bacağını omzuna alıp kaslarını yavaşça esnetir, üstüne eğilerek bastırır", "color": "#00695c", "emojis": "🧘🦵" },
  { "id": "mvtr07cmfhug", "title": "Comfort Hug", "cat": "c:mvtreat01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["tedavi"], "desc": "Sıkıca sarılır, sırtını okşar; sen bırakana kadar bırakmaz", "color": "#ec407a", "emojis": "🤗💗" },
  { "id": "mvtr08lappil", "title": "Lap Pillow", "cat": "c:mvtreat01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["tedavi"], "desc": "Başını dizine yatırır, saçlarını okşar, yavaşça mırıldanır", "color": "#f48fb1", "emojis": "🦵😌" },
  { "id": "mvtr09hedpat", "title": "Head Pat", "cat": "c:mvtreat01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["tedavi"], "desc": "Başını okşar, \"aferin sana\" der; kendini değerli hissettirir", "color": "#ce93d8", "emojis": "🫳💕" },
  { "id": "mvtr10cudthr", "title": "Cuddle Therapy", "cat": "c:mvtreat01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["tedavi"], "desc": "Muayene yatağında arkandan kaşık gibi sarılıp yanına uzanır", "color": "#ba68c8", "emojis": "🛏️🥰" },
  { "id": "mvtr11intthr", "title": "Intimate Therapy", "cat": "c:mvglvwdtam0h7", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "tedavi"], "desc": "Elle olmayınca doktor kendi rızasıyla bedeniyle tedavi eder: kondomla, sedyede üstüne yavaşça oturarak", "color": "#0097a7", "emojis": "🩺💗" },
  { "id": "mvtr12bbkthr", "title": "Bareback Therapy", "cat": "c:mvglvwdtam0h7", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "tedavi"], "desc": "Kondomla da rahat olamayan hasta için: kondomsuz, yavaş ve şefkatli; içinde boşalmana izin verir (içe izin veren doktor)", "color": "#00796b", "emojis": "🩺🔥" },
  { "id": "mvtr13bbpull", "title": "Bareback Pull Out", "cat": "c:mvglvwdtam0h7", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "tedavi"], "desc": "Kondomla da rahat olamayan hasta için kondomsuz; ama içe izin vermez, gelmeden çeker ve dışarıda bitirtir", "color": "#00897b", "emojis": "🩺↩️" },
  { "id": "mvtr14intdgy", "title": "Intimate Doggy", "cat": "c:mvgm9ihwda8f5", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "tedavi"], "desc": "Yüz yüze utanan doktor için: kondomla, sedyeye eğilip arkasını döner; yüzünü görmeden tedavi eder", "color": "#0097a7", "emojis": "🩺🍑" },
  { "id": "mvtrrpklnk01", "title": "Klinik Doktoru – Hasta", "cat": "c:mvgwj75108lqd", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["roleplay", "tedavi"], "desc": "CarmenKlinik'te muayene: o şefkatli doktor, sen tedaviye gelen hasta", "color": "#26a69a", "emojis": "🥼🩺" },
  { "id": "mvdr01redwin", "title": "Red Wine", "cat": "c:mvdrinks01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "Ona bir kadeh kırmızı şarap içirirsin", "color": "#722f37", "emojis": "🍷", "onEffects": [{ "p": "p:sarhos", "d": 15 }] },
  { "id": "mvdr02tqshot", "title": "Tequila Shot", "cat": "c:mvdrinks01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "Tuz, shot, limon: tek seferde", "color": "#c9a227", "emojis": "🥃🍋", "onEffects": [{ "p": "p:sarhos", "d": 25 }] },
  { "id": "mvdr03chmpgn", "title": "Champagne", "cat": "c:mvdrinks01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "Köpüklü şampanya; kadeh kadeh", "color": "#e8d27a", "emojis": "🥂", "onEffects": [{ "p": "p:sarhos", "d": 15 }] },
  { "id": "mvdr04bldmry", "title": "Bloody Mary", "cat": "c:mvdrinks01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["halloween", "kan"], "desc": "Kan kırmızısı kokteyl; vampirlerin favorisi", "color": "#a31515", "emojis": "🍅🩸", "onEffects": [{ "p": "p:sarhos", "d": 20 }] },
  { "id": "mvdr05wchpnc", "title": "Witch's Punch", "cat": "c:mvdrinks01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["halloween"], "desc": "Kazandan dumanı tüten mor ponç", "color": "#6a1b9a", "emojis": "🧪🟣", "onEffects": [{ "p": "p:sarhos", "d": 20 }] },
  { "id": "mvdr06absnth", "title": "Absinthe", "cat": "c:mvdrinks01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["halloween"], "desc": "Yeşil peri: şekerli kaşığın üstünden, çok sert", "color": "#4caf50", "emojis": "🧚‍♀️🟢", "onEffects": [{ "p": "p:sarhos", "d": 35 }] },
  { "id": "mvdr07mthsht", "title": "Mouth Shot", "cat": "c:mvdrinks01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "Shotu kendi ağzından onun ağzına aktarırsın", "color": "#d81b60", "emojis": "💋🥃", "onEffects": [{ "p": "p:sarhos", "d": 20 }] },
  { "id": "mvdr08bdysht", "title": "Body Shot", "cat": "c:mvdrinks01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "Göbeğinden içersin, limonu dudaklarından alırsın; sonra o senden", "color": "#ff8f00", "emojis": "🍋👅", "onEffects": [{ "p": "p:sarhos", "d": 25 }] },
  { "id": "mvdr09water1", "title": "Water", "cat": "c:mvdrinks01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "Ayılsın diye bir bardak su", "color": "#4fc3f7", "emojis": "💧", "onEffects": [{ "p": "p:sarhos", "d": -25 }] },
  { "id": "mvdr10coffee", "title": "Black Coffee", "cat": "c:mvdrinks01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "Sade, sert bir kahve; kendine gelsin", "color": "#4e342e", "emojis": "☕", "onEffects": [{ "p": "p:sarhos", "d": -20 }] },
  { "id": "mvdr12mlkwin", "title": "Milk & Wine", "cat": "c:mvdrinks01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "Sütünü kırmızı şarapla karıştırıp sana içirir", "color": "#c48b9f", "emojis": "🍼🍷", "onEffects": [{ "p": "p:sarhos", "d": 15 }, { "p": "p:umvjzd17h5twc2", "d": -10 }] },
  { "id": "mvdr13whisky", "title": "Whiskey On Ice", "cat": "c:mvdrinks01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "Buzlu viski; yavaş yavaş, yudum yudum", "color": "#b5651d", "emojis": "🥃🧊", "onEffects": [{ "p": "p:sarhos", "d": 20 }] },
  { "id": "mvdr14mojito", "title": "Mojito", "cat": "c:mvdrinks01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "Naneli, limonlu, buz gibi ferah bir kokteyl", "color": "#66bb6a", "emojis": "🍹🌿", "onEffects": [{ "p": "p:sarhos", "d": 10 }, { "p": "p:umvjzd17hys1oy", "d": 5 }] },
  { "id": "mvdr15margrt", "title": "Margarita", "cat": "c:mvdrinks01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "Kenarı tuzlu kadehte margarita", "color": "#c0ca33", "emojis": "🍸🧂", "onEffects": [{ "p": "p:sarhos", "d": 15 }] },
  { "id": "mvdr16sake", "title": "Sake", "cat": "c:mvdrinks01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "Ilık sake, minik kadehlerle karşılıklı", "color": "#eceff1", "emojis": "🍶", "onEffects": [{ "p": "p:sarhos", "d": 15 }] },
  { "id": "mvdr17beer", "title": "Beer", "cat": "c:mvdrinks01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "Buz gibi bir şişe bira", "color": "#f9a825", "emojis": "🍺", "onEffects": [{ "p": "p:sarhos", "d": 10 }] },
  { "id": "mvdr18shared", "title": "Shared Glass", "cat": "c:mvdrinks01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "Aynı kadehten sırayla içersiniz; dudak izinin üstünden", "color": "#ad1457", "emojis": "🍷👄", "onEffects": [{ "p": "p:sarhos", "d": 10 }, { "p": "p:samimiyet", "d": 2 }] },
  { "id": "mvdr19toast", "title": "Toast", "cat": "c:mvdrinks01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "Kadeh tokuşturup göz göze içersiniz", "color": "#ffb300", "emojis": "🥂👀", "onEffects": [{ "p": "p:sarhos", "d": 5 }, { "p": "p:ask", "d": 1 }] },
  { "id": "mvdr20drinkher", "title": "Drink From Her", "cat": "c:mvdrinks01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "Şarabı köprücük kemiğinin çukuruna döküp oradan içersin", "color": "#880e4f", "emojis": "🍷💋", "onEffects": [{ "p": "p:sarhos", "d": 10 }, { "p": "p:umvjzd17hys1oy", "d": 10 }] },
  { "id": "mvdr21chpour", "title": "Champagne Pour", "cat": "c:mvdrinks01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "Şampanyayı göğüslerinden aşağı süzüp yalarsın", "color": "#f0d77a", "emojis": "🍾💦", "onEffects": [{ "p": "p:sarhos", "d": 5 }, { "p": "p:umvjzd17hys1oy", "d": 15 }] },
  { "id": "mvdr22hotchoc", "title": "Hot Chocolate", "cat": "c:mvdrinks01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "Ayıltan, içini ısıtan sıcak çikolata", "color": "#6d4c41", "emojis": "☕🍫", "onEffects": [{ "p": "p:sarhos", "d": -15 }, { "p": "p:ask", "d": 1 }] },
  { "id": "mvdr23minttea", "title": "Mint Tea", "cat": "c:mvdrinks01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "Midesi rahatlasın diye nane çayı", "color": "#81c784", "emojis": "🍵🌿", "onEffects": [{ "p": "p:sarhos", "d": -10 }] },
  { "id": "mvdr24spill", "title": "Spilled Wine", "cat": "c:mvdrinks01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "Şarap üstüne dökülür; ıslak üstünü çıkarmak zorunda kalır", "color": "#7b1fa2", "emojis": "🍷👚", "onEffects": [{ "p": "p:sarhos", "d": 5 }, { "p": "p:umvjzd17hys1oy", "d": 5 }] },
  { "id": "mvdr25stripgame", "title": "Strip Drinking Game", "cat": "c:mvdrinks01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "İçme oyunu: kaybeden içer ve bir parça çıkarır", "color": "#e64a19", "emojis": "🎲🥃", "onEffects": [{ "p": "p:sarhos", "d": 15 }, { "p": "p:umvjzd17hys1oy", "d": 10 }] },
  { "id": "mvdr26truth", "title": "Truth Or Drink", "cat": "c:mvdrinks01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "Ya soruyu dürüstçe cevaplar ya da kadehi diker", "color": "#5c6bc0", "emojis": "❔🥃", "onEffects": [{ "p": "p:sarhos", "d": 10 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvdr27icebra", "title": "Ice In Bra", "cat": "c:mvdrinks01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "Kokteyldeki buz sütyeninin içine kayar; çığlık atıp sütyeni çıkarır", "color": "#4dd0e1", "emojis": "🧊👙", "onEffects": [{ "p": "p:sarhos", "d": 5 }, { "p": "p:umvjzd17hys1oy", "d": 10 }] },
  { "id": "mvlc01crmmlk", "title": "Crimson Milk", "cat": "c:mvgwupu3we8yl", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["halloween", "kan"], "desc": "Lanetliyken süt pembe-kırmızı gelir (Succubus Curse ya da Vampir / Succubus'la kan olayından sonra kendiliğinden)", "color": "#d81b60", "emojis": "🍼🩸" },
  { "id": "mvlc02wrmmlk", "title": "Warm Milk", "cat": "c:mvgwupu3we8yl", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "Sıcacık süt", "color": "#ffcc80", "emojis": "🍼🔥" },
  { "id": "mvlc03cldmlk", "title": "Cold Milk", "cat": "c:mvgwupu3we8yl", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "Serin, ürperten süt", "color": "#b3e5fc", "emojis": "🍼🥶" },
  { "id": "mvlc04swtmlk", "title": "Sweet Milk", "cat": "c:mvgwupu3we8yl", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "Tadı tatlı; tadını sorar", "color": "#f8bbd0", "emojis": "🍼🍬" },
  { "id": "mvlc05hnymlk", "title": "Honey Milk", "cat": "c:mvgwupu3we8yl", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "Bal gibi koyu ve tatlı; tadını sorar", "color": "#ffb300", "emojis": "🍼🍯" },
  { "id": "mvlc06spray1", "title": "Milk Spray", "cat": "c:mvgwupu3we8yl", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "Göğüslerine dokununca fışkırır", "color": "#e1f5fe", "emojis": "🍒💦" },
  { "id": "mvlc07drip01", "title": "Milk Drip", "cat": "c:mvgwupu3we8yl", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "Kendiliğinden damlar; üstü giyinikse kıyafetini ıslatır", "color": "#fff3e0", "emojis": "🍼💧" },
  { "id": "mvlc08letdwn", "title": "Let-down", "cat": "c:mvgwupu3we8yl", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "Emmeye başlayınca süt birden boşalır, irkilir", "color": "#fce4ec", "emojis": "🍼⚡" },
  { "id": "mvlc09farm", "title": "Farm Fresh Milk", "cat": "c:mvgwupu3we8yl", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "🐮 Cow Girl'ün sütü: koyu, kremamsı, taze çimen kokulu", "color": "#fff8e1", "emojis": "🐮🍼" },
  { "id": "mvlc10vanil", "title": "Vanilla Cream Milk", "cat": "c:mvgwupu3we8yl", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "🥛 Süt Kız'ın sütü: vanilyalı, krema gibi akar", "color": "#fff3e0", "emojis": "🍦🍼" },
  { "id": "mvlc11straw", "title": "Strawberry Milk", "cat": "c:mvgwupu3we8yl", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "🍓 Çilek Kız'ın sütü: pembe, çilek kokulu, tatlı", "color": "#f8bbd0", "emojis": "🍓🍼" },
  { "id": "mvlc12slime", "title": "Slime Milk", "cat": "c:mvgwupu3we8yl", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "🫠 Slime Girl'ün sütü: jöle kıvamında, yarı saydam, parmaklarına yapışır", "color": "#b2ebf2", "emojis": "🫠🍼" },
  { "id": "mvlc13moon", "title": "Moonlight Milk", "cat": "c:mvgwupu3we8yl", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "🧝‍♀️ Elf prensesinin sütü: karanlıkta gümüş gibi ışıldar", "color": "#e8eaf6", "emojis": "🌙🍼" },
  { "id": "mvlc14holy", "title": "Holy Milk", "cat": "c:mvgwupu3we8yl", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "😇 Meleğin sütü: ılık, ışıltılı; içince yorgunluğun geçer", "color": "#fffde7", "emojis": "😇🍼" },
  { "id": "mvlc15synth", "title": "Synthetic Milk", "cat": "c:mvgwupu3we8yl", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "🤖 Android'in sütü: sıcaklığı ve tadı ayarlanabilir, ekranında mililitre sayar", "color": "#cfd8dc", "emojis": "🤖🍼" },
  { "id": "mvlc16potion", "title": "Potion Milk", "cat": "c:mvgwupu3we8yl", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "🧙‍♀️ Cadının sütü: mor, köpüklü, hafif büyülü; içen ona bağlanır", "color": "#ce93d8", "emojis": "🧪🍼" },
  { "id": "mvlc17sea", "title": "Seafoam Milk", "cat": "c:mvgwupu3we8yl", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "🧜‍♀️ Deniz kızının sütü: köpük gibi hafif, belli belirsiz tuzlu", "color": "#b3e5fc", "emojis": "🌊🍼" },
  { "id": "mvlc18rainbow", "title": "Rainbow Milk", "cat": "c:mvgwupu3we8yl", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "🦄 Unicorn Girl'ün sütü: ışıkta gökkuşağı gibi renk değiştirir, şekerli", "color": "#f3e5f5", "emojis": "🌈🍼" },
  { "id": "mvlc19kitten", "title": "Kitten Cream Milk", "cat": "c:mvgwupu3we8yl", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "🐱 Cat Girl'ün sütü: kaymak gibi; yalaman için tabağa damlatır", "color": "#ffe0b2", "emojis": "🐱🍼" },
  { "id": "mvlc20fairy", "title": "Fairy Dust Milk", "cat": "c:mvgwupu3we8yl", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "🧚 Perinin sütü: içinde minik ışıltılar uçuşur, çiçek balı tadında", "color": "#e1bee7", "emojis": "🧚🍼" },
  { "id": "mvlc21fullmoon", "title": "Full Moon Milk", "cat": "c:mvgwupu3we8yl", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "🐺 Wolf Girl'ün sütü: dolunayda gümüş gibi parlar, koyu ve vahşi tadında", "color": "#cfd8dc", "emojis": "🐺🍼" },
  { "id": "mvlc22hellfire", "title": "Hellfire Milk", "cat": "c:mvgwupu3we8yl", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "😈 Demon Girl'ün sütü: sıcacık ve tarçınlı, içen biraz daha azar", "color": "#ffab91", "emojis": "😈🍼" },
  { "id": "mvlc23fleece", "title": "Fleece Milk", "cat": "c:mvgwupu3we8yl", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "🐑 Sheep Girl'ün sütü: kremsi ve yumuşacık, ılık vanilya tadında", "color": "#fff8e1", "emojis": "🐑🍼" },
  { "id": "mvnu01cradle", "title": "Cradle Hold", "cat": "c:mvnursing01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "Başını koluna yaslar, beşik gibi kucağında tutup emzirir", "color": "#fce4ec", "emojis": "🤱🍼", "onEffects": [{ "p": "p:umvjzd17h5twc2", "d": -15 }, { "p": "p:umvjzd17hys1oy", "d": 10 }, { "p": "p:samimiyet", "d": 2 }, { "p": "p:sutkalite", "d": 2 }] },
  { "id": "mvnu02side", "title": "Side-Lying Nursing", "cat": "c:mvnursing01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "Yatakta yan yana uzanır, alttaki göğsünü ağzına verir; saçını okşar", "color": "#f8bbd0", "emojis": "🛏️🍼", "onEffects": [{ "p": "p:umvjzd17h5twc2", "d": -15 }, { "p": "p:umvjzd17hys1oy", "d": 10 }, { "p": "p:samimiyet", "d": 2 }] },
  { "id": "mvnu03football", "title": "Football Hold", "cat": "c:mvnursing01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "Seni koltuk altına alır, yandan göğsüne yaslar; başını eliyle tutar", "color": "#e1bee7", "emojis": "🏈🍼", "onEffects": [{ "p": "p:umvjzd17h5twc2", "d": -15 }, { "p": "p:umvjzd17hys1oy", "d": 10 }] },
  { "id": "mvnu04laidback", "title": "Laid-Back Nursing", "cat": "c:mvnursing01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "Yastıklara yaslanır, sen üstüne uzanırsın; göğsü yüzüne iner, kendin emersin", "color": "#ffe0b2", "emojis": "🛋️🍼", "onEffects": [{ "p": "p:umvjzd17h5twc2", "d": -20 }, { "p": "p:umvjzd17hys1oy", "d": 15 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvnu05stand", "title": "Standing Nursing", "cat": "c:mvnursing01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "Duvara yaslanıp bluzunu açar; ayakta, eğilip emersin", "color": "#b3e5fc", "emojis": "🧍‍♀️🍼", "onEffects": [{ "p": "p:umvjzd17h5twc2", "d": -15 }, { "p": "p:umvjzd17hys1oy", "d": 15 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvnu06kneel", "title": "Kneeling Nursing", "cat": "c:mvnursing01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "Sen önünde diz çökersin, o tepeden bakıp göğsünü uzatır", "color": "#d1c4e9", "emojis": "🧎🍼", "onEffects": [{ "p": "p:umvjzd17h5twc2", "d": -15 }, { "p": "p:umvjzd17hys1oy", "d": 15 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvnu07lap", "title": "Lap Nursing", "cat": "c:mvnursing01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "Kucağına ata biner, göğsünü ağzına bastırır; emdikçe kalçasını oynatır", "color": "#f48fb1", "emojis": "🪑🍼", "onEffects": [{ "p": "p:umvjzd17h5twc2", "d": -20 }, { "p": "p:umvjzd17hys1oy", "d": 30 }, { "p": "p:sehvet", "d": 10 }] },
  { "id": "mvnu08switch", "title": "Switch Nursing", "cat": "c:mvnursing01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "Birkaç yudumda bir göğüs değiştirir: \"Şimdi bu taraf\"", "color": "#ffccbc", "emojis": "🔄🍼", "onEffects": [{ "p": "p:umvjzd17h5twc2", "d": -20 }, { "p": "p:umvjzd17hys1oy", "d": 15 }] },
  { "id": "mvnu09pump", "title": "Nurse & Pump", "cat": "c:mvnursing01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "Bir göğsünden sen emersin, diğerinden şişeye sağar; hiç damla boşa gitmez", "color": "#e0f7fa", "emojis": "🍼⚙️", "onEffects": [{ "p": "p:umvjzd17h5twc2", "d": -30 }, { "p": "p:umvjzd17hys1oy", "d": 15 }] },
  { "id": "mvnu10night", "title": "Night Nursing", "cat": "c:mvnursing01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "Gece yarısı, yarı uykuda; karanlıkta sessizce göğsünü verir", "color": "#3949ab", "emojis": "🌙🍼", "onEffects": [{ "p": "p:umvjzd17h5twc2", "d": -15 }, { "p": "p:samimiyet", "d": 2 }, { "p": "p:ask", "d": 1 }] },
  { "id": "mvnu11bath", "title": "Bath Nursing", "cat": "c:mvnursing01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "Sıcak küvette sırtını ona yaslarsın; göğsünü omzunun üstünden ağzına uzatır", "color": "#80deea", "emojis": "🛁🍼", "onEffects": [{ "p": "p:umvjzd17h5twc2", "d": -15 }, { "p": "p:umvjzd17hys1oy", "d": 10 }, { "p": "p:samimiyet", "d": 1 }] },
  { "id": "mvnu12tease", "title": "Teasing Nursing", "cat": "c:mvnursing01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "Ucunu dudaklarına değdirip geri çeker; yalvarmadan emzirmez", "color": "#ec407a", "emojis": "😏🍼", "onEffects": [{ "p": "p:umvjzd17h5twc2", "d": -10 }, { "p": "p:umvjzd17hys1oy", "d": 30 }, { "p": "p:sehvet", "d": 10 }] },
  { "id": "mvnu13dom", "title": "Dominant Nursing", "cat": "c:mvnursing01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "Başını göğsüne bastırır: \"Bitirmeden bırakmam\"; son damlaya kadar emzirir", "color": "#880e4f", "emojis": "👑🍼", "onEffects": [{ "p": "p:umvjzd17h5twc2", "d": -25 }, { "p": "p:umvjzd17hys1oy", "d": 20 }] },
  { "id": "mvnu14cover", "title": "Covered Nursing", "cat": "c:mvnursing01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "Dışarıda, bir örtünün altında gizlice emzirir; kimse fark etmesin diye fısıldar", "color": "#a1887f", "emojis": "🧣🍼", "onEffects": [{ "p": "p:umvjzd17h5twc2", "d": -15 }, { "p": "p:umvjzd17hys1oy", "d": 15 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvnu15lullaby", "title": "Lullaby Nursing", "cat": "c:mvnursing01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "Emzirirken saçını okşar ve alçak sesle ninni mırıldanır", "color": "#c5cae9", "emojis": "🎶🍼", "onEffects": [{ "p": "p:umvjzd17h5twc2", "d": -15 }, { "p": "p:ask", "d": 2 }, { "p": "p:sutkalite", "d": 3 }] },
  { "id": "mvnu16comfort", "title": "Comfort Nursing", "cat": "c:mvnursing01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "Yorgun ya da üzgünken seni göğsüne alır; teselli için emzirir", "color": "#ffcdd2", "emojis": "🫂🍼", "onEffects": [{ "p": "p:umvjzd17h5twc2", "d": -10 }, { "p": "p:guven", "d": 2 }, { "p": "p:ask", "d": 2 }, { "p": "p:sutkalite", "d": 3 }] },
  { "id": "mvnu17tandem", "title": "Double Breast Nursing", "cat": "c:mvnursing01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "Önce birini emersin, o sırada diğeri kendiliğinden akar; ikisini sırayla boşaltır", "color": "#f8a5c2", "emojis": "🍒🍼", "onEffects": [{ "p": "p:umvjzd17h5twc2", "d": -25 }, { "p": "p:umvjzd17hys1oy", "d": 15 }] },
  { "id": "mvnu18morning", "title": "Morning Nursing", "cat": "c:mvnursing01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "Sabah gece boyu dolan göğüsleriyle seni uyandırır; ilk süt en bol olanı", "color": "#fff59d", "emojis": "🌅🍼", "onEffects": [{ "p": "p:umvjzd17h5twc2", "d": -30 }, { "p": "p:umvjzd17hys1oy", "d": 10 }, { "p": "p:samimiyet", "d": 1 }] },
  { "id": "mvlf01maid", "title": "Lactation – Milk Maid", "cat": "c:mvlacfant01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "Sütçü kız önlüğüyle tabureye oturur, kovayı dizlerinin arasına koyar; seni sağmaya çağırır", "color": "#fff8e1", "emojis": "🥛🪣", "onEffects": [{ "p": "p:umvjzd17h5twc2", "d": -20 }, { "p": "p:umvjzd17hys1oy", "d": 10 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvlf02pump", "title": "Lactation – Breast Pump", "cat": "c:mvlacfant01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "Göğüs pompasını takar, şişeler mililitre mililitre dolarken sana gösterir", "color": "#e1f5fe", "emojis": "🍼⚙️", "onEffects": [{ "p": "p:umvjzd17h5twc2", "d": -25 }, { "p": "p:umvjzd17hys1oy", "d": 10 }] },
  { "id": "mvlf03stall", "title": "Lactation – Milking Station", "cat": "c:mvlacfant01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "Dört ayak üstünde, göğüsleri sarkık; iki elle sırayla sağarsın, kova dolana kadar", "color": "#ffecb3", "emojis": "🐄🪣", "onEffects": [{ "p": "p:umvjzd17h5twc2", "d": -30 }, { "p": "p:umvjzd17hys1oy", "d": 15 }, { "p": "p:sehvet", "d": 10 }] },
  { "id": "mvlf04nurse", "title": "Lactation – Nursing Lap", "cat": "c:mvlacfant01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "Başını kucağına yatırır, saçını okşayarak seni emzirir", "color": "#fce4ec", "emojis": "🍼🤱", "onEffects": [{ "p": "p:umvjzd17h5twc2", "d": -20 }, { "p": "p:umvjzd17hys1oy", "d": 20 }, { "p": "p:samimiyet", "d": 2 }, { "p": "p:sutkalite", "d": 5 }] },
  { "id": "mvlf05double", "title": "Lactation – Double Suckle", "cat": "c:mvlacfant01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "İki göğsünü birbirine bastırır, iki ucundan birden emdirir", "color": "#f8bbd0", "emojis": "🍼🍼", "onEffects": [{ "p": "p:umvjzd17h5twc2", "d": -25 }, { "p": "p:umvjzd17hys1oy", "d": 25 }, { "p": "p:sutkalite", "d": 3 }] },
  { "id": "mvlf06shower", "title": "Lactation – Milk Shower", "cat": "c:mvlacfant01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "Üstüne eğilip göğüslerini sıkar, sütünü göğsüne ve yüzüne yağdırır", "color": "#f5f5f5", "emojis": "🍼🌧️", "onEffects": [{ "p": "p:umvjzd17h5twc2", "d": -20 }, { "p": "p:umvjzd17hys1oy", "d": 10 }, { "p": "p:sehvet", "d": 10 }] },
  { "id": "mvlf07titfk", "title": "Lactation – Milky Titfuck", "cat": "c:mvlacfant01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "Sütüyle kayganlaşmış göğüslerinin arasında kayarsın; her sıkışta biraz daha akar", "color": "#ffe0b2", "emojis": "🍼🍈", "onEffects": [{ "p": "p:umvjzd17h5twc2", "d": -15 }, { "p": "p:umvjoe339asss4", "d": 10 }] },
  { "id": "mvlf08taste", "title": "Lactation – Milk Tasting", "cat": "c:mvlacfant01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "Bir bardağa sağar, sana içirir; tadını ve sıcaklığını sorar", "color": "#fffde7", "emojis": "🥛😋", "onEffects": [{ "p": "p:umvjzd17h5twc2", "d": -10 }, { "p": "p:samimiyet", "d": 1 }, { "p": "p:sutkalite", "d": 2 }] },
  { "id": "mvlf09pills", "title": "Lactation – Lactation Pills", "cat": "c:mvlacfant01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "Süt artırıcı hap içer; göğüsleri şişer, dakikalar içinde dolup gerilir", "color": "#b39ddb", "emojis": "💊🍼", "onEffects": [{ "p": "p:umvjzd17h5twc2", "d": 40 }, { "p": "p:umvjzd17hys1oy", "d": 10 }, { "p": "p:sutkalite", "d": -15 }] },
  { "id": "mvlf10engorg", "title": "Lactation – Engorged", "cat": "c:mvlacfant01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "Göğüsleri taşacak kadar dolu ve ağrıyor; boşaltman için yalvarır", "color": "#ef9a9a", "emojis": "🍼😣", "onEffects": [{ "p": "p:umvjzd17h5twc2", "d": 20 }, { "p": "p:umvl2lpjpbiqzo", "d": 10 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvlf11cntst", "title": "Lactation – Milk Contest", "cat": "c:mvlacfant01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "Ölçekli şişeyi önüne koyar: kaç mililitre dolduracağını tahmin et, bilirsen ödülün var", "color": "#c5e1a5", "emojis": "🍼📏", "onEffects": [{ "p": "p:umvjzd17h5twc2", "d": -30 }, { "p": "p:umvjzd17hys1oy", "d": 10 }] },
  { "id": "mvlf12kiss", "title": "Lactation – Milk Kiss", "cat": "c:mvlacfant01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "Kendi sütünden bir yudum alır, öperek ağzına verir", "color": "#f48fb1", "emojis": "🍼💋", "onEffects": [{ "p": "p:umvjzd17h5twc2", "d": -5 }, { "p": "p:ask", "d": 2 }, { "p": "p:sutkalite", "d": 3 }] },
  { "id": "mvlf13leak", "title": "Lactation – Leaking Dress", "cat": "c:mvlacfant01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "Elbisesinde iki ıslak leke büyür; utanır ama seni kenara çekip göstermek ister", "color": "#90caf9", "emojis": "👗💧", "onEffects": [{ "p": "p:umvjzd17h5twc2", "d": -5 }, { "p": "p:umvjzd17hys1oy", "d": 10 }] },
  { "id": "mvlf15over", "title": "Lactation – Overflow", "cat": "c:mvlacfant01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "Göğüsleri taştı: kimse dokunmadan fışkırır, üstünü ve çarşafı ıslatır (🍼 Süt 95'i geçince önce emzirme ister; 3 turda emzirilmezse kendiliğinden)", "color": "#e3f2fd", "emojis": "🍼🌊", "onEffects": [{ "p": "p:umvjzd17h5twc2", "d": -25 }, { "p": "p:umvjzd17hys1oy", "d": 10 }] },
  { "id": "mvlf16dry", "title": "Lactation – Dry Nipples", "cat": "c:mvlacfant01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "Son damlasına kadar boşaldı; uçları hassas, biraz dinlenmek ister (🍼 Süt 5'in altına inince kendiliğinden)", "color": "#d7ccc8", "emojis": "🫙😣", "onEffects": [{ "p": "p:umvl2lpjpbiqzo", "d": 5 }] },
  { "id": "mvlf17gold", "title": "Lactation – Golden Milk", "cat": "c:mvlacfant01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "Sütü altın sarısı ve kaymak gibi koyu; en kalitelisini sana ayırır (🥛 Süt Kalitesi 85'i geçince kendiliğinden)", "color": "#ffd54f", "emojis": "✨🍼", "onEffects": [{ "p": "p:ask", "d": 2 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvlf18water", "title": "Lactation – Watery Milk", "cat": "c:mvlacfant01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "Sütü sulandı, rengi soldu; dinlenip beslenmesi gerek (🥛 Süt Kalitesi 20'nin altına inince kendiliğinden)", "color": "#cfd8dc", "emojis": "💧🍼", "onEffects": [{ "p": "p:umvjzd17h5twc2", "d": -10 }] },
  { "id": "mvlf19feed", "title": "Lactation – Nourish Her", "cat": "c:mvlacfant01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "Ona sıcak çorba, yulaf ve bol su getirirsin; sütü yeniden koyulaşır", "color": "#a5d6a7", "emojis": "🥣💧", "onEffects": [{ "p": "p:sutkalite", "d": 20 }, { "p": "p:umvjzd17h5twc2", "d": 10 }, { "p": "p:guven", "d": 2 }] },
  { "id": "mvlf14bottle", "title": "Lactation – Milk Bottle Gift", "cat": "c:mvlacfant01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "Sütünü kurdeleli bir şişeye doldurup sana hediye eder: \"Kahvene koy\"", "color": "#ffffff", "emojis": "🍼🎀", "onEffects": [{ "p": "p:umvjzd17h5twc2", "d": -15 }, { "p": "p:ask", "d": 1 }] },
  { "id": "mvhw24mlkbth", "title": "Milk Bath", "cat": "c:mvglvwdtam0h7", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "halloween"], "desc": "Süt dolu küvette, kucağında yüz yüze: Blood Bath'in beyaz eşi", "color": "#fafafa", "emojis": "🛁🍼" },
  { "id": "mvdr11passot", "title": "Passed Out", "cat": "c:mvdrinks01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "Çok içti, sızdı (Sarhoşluk 95'e varınca kendiliğinden)", "color": "#607d8b", "emojis": "😵‍💫💤" },
  { "id": "mvhws01ectop", "title": "Ectoplasm", "cat": "c:mvguxicvzx0iq", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["halloween"], "desc": "Parlak ve yapış yapış; tende uzun süre kalır", "color": "#b2ff59", "emojis": "👻✨" },
  { "id": "mvhws02bmoon", "title": "Blood Moon Load", "cat": "c:mvguxicvzx0iq", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["halloween"], "desc": "Dolunay gecesine özel: normalin iki katı", "color": "#c62828", "emojis": "🌕💦" },
  { "id": "mvhws03vfeas", "title": "Vampire Feast", "cat": "c:mvguxicvzx0iq", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["halloween"], "desc": "Çok bol; vampir \"sonunda doydum\" der", "color": "#8b0000", "emojis": "🧛‍♀️💦" },
  { "id": "mvhws04cauld", "title": "Cauldron Overflow", "cat": "c:mvguxicvzx0iq", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["halloween"], "desc": "O kadar çok ki taşar: kadehten, göğüslerden, küvetten", "color": "#4a148c", "emojis": "🫕💦" },
  { "id": "mvhws05wbrew", "title": "Witch's Brew", "cat": "c:mvguxicvzx0iq", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["halloween"], "desc": "Koyu ve yoğun; iksir için mükemmel kıvam", "color": "#311b92", "emojis": "🧙‍♀️🧪" },
  { "id": "mvhws06sshot", "title": "Single Shot", "cat": "c:mvguxicvzx0iq", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "Tek bir atış", "color": "#90caf9", "emojis": "1️⃣💦" },
  { "id": "mvhws07mrope", "title": "Multiple Ropes", "cat": "c:mvguxicvzx0iq", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "Üç beş atış, art arda", "color": "#64b5f6", "emojis": "🔢💦" },
  { "id": "mvhws08erope", "title": "Endless Ropes", "cat": "c:mvguxicvzx0iq", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "Bitmek bilmeyen atışlar", "color": "#1e88e5", "emojis": "♾️💦" },
  { "id": "mvhws09hotld", "title": "Hot Load", "cat": "c:mvguxicvzx0iq", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "Yakıcı sıcaklıkta", "color": "#ff5722", "emojis": "🔥💦" },
  { "id": "mvhws10cldsh", "title": "Cold Shiver", "cat": "c:mvguxicvzx0iq", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "Ürperten bir serinlikte", "color": "#80deea", "emojis": "🥶💦" },
  { "id": "mvhws11sweet", "title": "Sweet", "cat": "c:mvguxicvzx0iq", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "Tadı tatlı", "color": "#f48fb1", "emojis": "🍯💦" },
  { "id": "mvhws12salty", "title": "Salty", "cat": "c:mvguxicvzx0iq", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "Tadı tuzlu", "color": "#b0bec5", "emojis": "🧂💦" },
  { "id": "mvhws13sccrs", "title": "Succubus Curse", "cat": "c:mvguxicvzx0iq", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["halloween", "kan"], "desc": "Succubus enerjini fazla emdi: son boşalman kırmızı gelir (Succubus'la 3. boşalmadan sonra kendiliğinden)", "color": "#b71c1c", "emojis": "😈🩸" },
  { "id": "mvhwr1vampir", "title": "Vampir Kontes – Misafir", "cat": "c:mvgwj75108lqd", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["roleplay", "halloween"], "desc": "Şatosunda gece yarısı: o vampir kontes, sen kapısını çalan misafir", "color": "#b71c1c", "emojis": "🧛‍♀️" },
  { "id": "mvhwr2cadi01", "title": "Cadı – Çırak", "cat": "c:mvgwj75108lqd", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["roleplay", "halloween"], "desc": "Kazanın başında: o cadı, sen iksirinin bedelini ödeyecek çırak", "color": "#4a148c", "emojis": "🧙‍♀️" },
  { "id": "mvhwr3falci1", "title": "Falcı – Müşteri", "cat": "c:mvgwj75108lqd", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["roleplay", "halloween"], "desc": "Mum ışıklı çadırda: o falcı, kristal kürede geleceğini okuduğu müşteri sensin", "color": "#7b1fa2", "emojis": "🔮" },
  { "id": "mvhwr4perili", "title": "Perili Ev Rehberi – Ziyaretçi", "cat": "c:mvgwj75108lqd", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["roleplay", "halloween"], "desc": "Tur bitti, kapılar kilitlendi: o perili evin rehberi, sen son ziyaretçi", "color": "#37474f", "emojis": "🏚️" },
  { "id": "mvhwr5maske1", "title": "Maskeli Yabancı – Kostüm Partisi", "cat": "c:mvgwj75108lqd", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["roleplay", "halloween"], "desc": "Kostüm partisinde adını söylemeyen maskeli kadın; sen onu kalabalıktan çekip götüren", "color": "#6a1b9a", "emojis": "🎭" },
  { "id": "mvhwr6kkedi1", "title": "Kara Kedi – Sahibi", "cat": "c:mvgwj75108lqd", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["roleplay", "halloween"], "desc": "Cadılar gecesi: o cadının kara kedisi, sen yeni sahibi", "color": "#212121", "emojis": "🐈‍⬛" },
  { "id": "mvhwr7mumya1", "title": "Mumya Kraliçe – Kâşif", "cat": "c:mvgwj75108lqd", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["roleplay", "halloween"], "desc": "Lahdin kapağını açtın: o bin yıl sonra uyanan kraliçe, sen onu uyandıran kâşif", "color": "#c8a24a", "emojis": "🏺" },
  { "id": "mvhwr8sucbs1", "title": "Succubus – Rüya", "cat": "c:mvgwj75108lqd", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["roleplay", "halloween"], "desc": "Uykunda gelir: o rüyalarına giren succubus, sen uyanamayan rüya sahibi", "color": "#c62828", "emojis": "😈" },
  { "id": "mvhwr9hylt01", "title": "Hayalet – Evin Yeni Sahibi", "cat": "c:mvgwj75108lqd", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["roleplay", "halloween"], "desc": "Eski bir eve taşındın: o evde yaşayan yalnız hayalet, sen yeni sahibi", "color": "#90a4ae", "emojis": "👻" },
  { "id": "mvhwr10peri1", "title": "Peri – Ormandaki Gezgin", "cat": "c:mvgwj75108lqd", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["roleplay", "halloween"], "desc": "Mantar halkasının ortasında: o orman perisi, sen yolunu kaybeden gezgin", "color": "#43a047", "emojis": "🧚‍♀️" },
  { "id": "mvhwr11dnzk1", "title": "Deniz Kızı – Denizci", "cat": "c:mvgwj75108lqd", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["roleplay", "halloween"], "desc": "Ay ışığında kayalıklarda: o deniz kızı, sen ağına onu takan denizci", "color": "#00838f", "emojis": "🧜‍♀️" },
  { "id": "mvhwr12slime1", "title": "Slime Girl – Laborant", "cat": "c:mvgwj75108lqd", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["roleplay", "halloween"], "desc": "Gece yarısı laboratuvarda kavanoz çatladı: o yarı saydam, jöle gibi slime girl; sen onu serbest bırakan laborant", "color": "#43a047", "emojis": "🫠💚" },
  { "id": "mvrp5melek1", "title": "Melek – Ölümlü", "cat": "c:mvgwj75108lqd", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["roleplay"], "desc": "Gece yarısı bahçene düşen bir ışık: o kanatları yaralı melek, sen onu bulup eve getiren ölümlü", "color": "#fff59d", "emojis": "😇🪽" },
  { "id": "mvrp5kaptn1", "title": "Kaptan Kadın – Tayfa", "cat": "c:mvgwj75108lqd", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["roleplay"], "desc": "Açık denizde, kaptan kamarasında: o geminin sert kaptanı, sen emirlerine uyması gereken yeni tayfa", "color": "#1565c0", "emojis": "⚓" },
  { "id": "mvrp5kralc1", "title": "Kraliçe – Hizmetkâr", "cat": "c:mvgwj75108lqd", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["roleplay"], "desc": "Sarayın taht odasında: o kibirli kraliçe, sen onun her isteğini yerine getiren hizmetkâr", "color": "#8e24aa", "emojis": "👑" },
  { "id": "mvrp5andrd1", "title": "Android – Komutan", "cat": "c:mvgwj75108lqd", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["roleplay"], "desc": "Harabe bir şehirde, görev sonrası: o siyah elbiseli, gözü bantlı savaş androidi; sen onun komutanı. Duyguları yasak ama sistemi ısınıyor", "color": "#424242", "emojis": "🤖🖤" },
  { "id": "mvrp5elf001", "title": "Elf Prensesi – Şövalye", "cat": "c:mvgwj75108lqd", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["roleplay"], "desc": "Ay ışığında bir orman tapınağında: o sivri kulaklı, ölümsüz elf prensesi; sen onu korumaya yemin etmiş insan şövalye", "color": "#2e7d32", "emojis": "🧝‍♀️🏹" },
  { "id": "mvrp5hostes", "title": "Hostes – Yolcu", "cat": "c:mvgwj75108lqd", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["roleplay"], "desc": "Gece uçuşunda, birinci sınıfta ışıklar söndü: o hostes, sen uyuyamayan tek yolcu", "color": "#c62828", "emojis": "✈️💄" },
  { "id": "mvrp5rahib1", "title": "Rahibe – Günahkâr", "cat": "c:mvgwj75108lqd", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["roleplay"], "desc": "Eski bir manastırda, mum ışığında: o masum görünen rahibe, sen kapısını gece çalan günahkâr", "color": "#263238", "emojis": "🕯️📿" },
  { "id": "mvrp5rahib2", "title": "Rahibe – Dua Sırası", "cat": "c:mvgwj75108lqd", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["roleplay", "rahibe"], "desc": "Boş kilisede, ahşap sıraların arasında: o diz çökmüş dua eden rahibe, sen yanına diz çöken günahkâr. Dua önce dudaklarında, sonra sıraya eğilince başka bir şeye döner", "color": "#4e342e", "emojis": "🙏🪑" },
  { "id": "mvrp5rahib3", "title": "Rahibe – Tespih Bağı", "cat": "c:mvgwj75108lqd", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["roleplay", "rahibe"], "desc": "Manastır hücresinde: o tespihini bileklerine dolayıp seni bağlayan rahibe, sen her tanede bir günahını sayan günahkâr. Sayı bitmeden boşalmak yasak", "color": "#3e2723", "emojis": "📿🪢" },
  { "id": "mvrp5rahib4", "title": "Rahibe – Kutsal Su Banyosu", "cat": "c:mvgwj75108lqd", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["roleplay", "rahibe"], "desc": "Gece yarısı manastırın taş hamamında: o ıslak cübbesiyle yıkanırken yakalanan rahibe, sen kapıyı aralayan günahkâr. Buhar, mum ve tenine yapışmış kumaş", "color": "#37474f", "emojis": "💧🛁" },
  { "id": "mvrp5rahib5", "title": "Rahibe – Bahçede Yasak Meyve", "cat": "c:mvgwj75108lqd", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["roleplay", "rahibe"], "desc": "Manastır bahçesinde, gül çitlerinin arkasında: o elma toplayan rahibe, sen duvardan atlayan günahkâr. Açık havada, yakalanma korkusuyla, hızlı ve yasak", "color": "#33691e", "emojis": "🍎🌹" },
  { "id": "mvrp5rahib6", "title": "Rahibe – İtiraf Kabini", "cat": "c:mvgwj75108lqd", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["roleplay", "rahibe"], "desc": "Kilisenin ahşap itiraf kabininde: kafesin iki yanında fısıltıyla başlayan bir itiraf, sonra o perdeyi açıp senin tarafına giriyor. Dar, karanlık ve dışarıda ayin var", "color": "#5d4037", "emojis": "🪟🤫" },
  { "id": "mvrp5rahib7", "title": "Rahibe – Sunak Önünde", "cat": "c:mvgwj75108lqd", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["roleplay", "rahibe"], "desc": "Gece boş şapelde, yüzlerce mumun ışığında: o sunak basamaklarına uzanan rahibe, sen yeminlerini sunağın önünde bozduran günahkâr. Manastırın en büyük günahı", "color": "#b71c1c", "emojis": "🕯️⛪" },
  { "id": "mvrp5rahib8", "title": "Rahibe – Cübbe Altı", "cat": "c:mvgwj75108lqd", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["roleplay", "rahibe"], "desc": "Kıyafet olayı: cübbe üstünde kalır, sadece altındakiler gider. O cübbesinin eteğini kaldırıp külotunu indiriyor, başörtüsünü senin çözmeni bekliyor", "color": "#212121", "emojis": "👗📿" },
  { "id": "mvrp5bsrhb1", "title": "Başrahibe – Bahçıvan", "cat": "c:mvgwj75108lqd", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["roleplay", "basrahibe"], "desc": "Manastırın en sert kadını: o kuralları koyan, cetveli elinden düşmeyen olgun başrahibe; sen manastırın yeni bahçıvanı. Odasına çağrıldın, kapı kilitlendi", "color": "#1a237e", "emojis": "⛪🗝️" },
  { "id": "mvgs1yelan01", "title": "Yelan – Çayevi Sorgusu", "cat": "c:mvgwj75108lqd", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["roleplay", "genshin"], "desc": "Çayevinin kilitli arka odasında: o gülümseyerek sorguya çeken istihbaratçı Yelan, sen ağına düşen şüpheli", "color": "#1565c0", "emojis": "🎲💧" },
  { "id": "mvgs1yelan02", "title": "Yelan – Zar Bahsi", "cat": "c:mvgwj75108lqd", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["roleplay", "genshin"], "desc": "Gece yarısı zar masasında: o hiç kaybetmeyen Yelan, sen her kaybedişte bir parça çıkaran rakip", "color": "#1565c0", "emojis": "🎲" },
  { "id": "mvgs2clor01", "title": "Clorinde – Düello", "cat": "c:mvgwj75108lqd", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["roleplay", "genshin"], "desc": "Boş bir düello salonunda: o yenilgi yüzü görmemiş Şampiyon Düellocu Clorinde, sen ona meydan okuyan rakip", "color": "#5e35b1", "emojis": "⚔️⚡" },
  { "id": "mvgs2clor02", "title": "Clorinde – Masa Oyunu Gecesi", "cat": "c:mvgwj75108lqd", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["roleplay", "genshin"], "desc": "Mum ışığında masa oyunu: o hikâyeyi anlatan oyun yöneticisi Clorinde, sen zar atan oyuncu; kuralları o koyar", "color": "#5e35b1", "emojis": "🎩🎲" },
  { "id": "mvgs3mavu01", "title": "Mavuika – Zafer Gecesi", "cat": "c:mvgwj75108lqd", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["roleplay", "genshin"], "desc": "Savaş kazanıldı, kamp ateşleri yanıyor: o halkının ateşli lideri Mavuika, sen yanında dövüşen savaşçı", "color": "#e53935", "emojis": "🔥☀️" },
  { "id": "mvgs3mavu02", "title": "Mavuika – Motor Gezintisi", "cat": "c:mvgwj75108lqd", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["roleplay", "genshin"], "desc": "Gün batımında volkan yolunda: o alev motorunu süren Mavuika, sen arkasında beline sarılan yolcu", "color": "#e53935", "emojis": "🏍️🔥" },
  { "id": "mvgs4xian01", "title": "Xianyun – Dağ Zirvesi", "cat": "c:mvgwj75108lqd", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["roleplay", "genshin"], "desc": "Bulutların üstünde bir dağ inzivasında: o binlerce yıllık turna adeptus Xianyun, sen zirveye tırmanan ölümlü", "color": "#26a69a", "emojis": "🕊️☁️" },
  { "id": "mvgs4xian02", "title": "Xianyun – Yeni İcat", "cat": "c:mvgwj75108lqd", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["roleplay", "genshin"], "desc": "Atölyesinde yeni mekanizması hazır: o konuşmaya doyamayan mucit Xianyun, sen icadını deneyen gönüllü", "color": "#26a69a", "emojis": "⚙️👓" },
  { "id": "mvga1bunny01", "title": "Gazino Bunny – Rulet Masası", "cat": "c:mvgwj75108lqd", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["roleplay", "gazino"], "desc": "Gazinonun rulet masasında: o kulakları ve file çoraplarıyla çarkı çeviren Bunny Girl krupiye, sen her turda ona oynayan oyuncu", "color": "#c2185b", "emojis": "🎡🐰" },
  { "id": "mvga1bunny02", "title": "Gazino Bunny – Blackjack", "cat": "c:mvgwj75108lqd", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["roleplay", "gazino"], "desc": "Gece yarısı blackjack masasında: o kartları eğilerek dağıtan Bunny Girl, sen 21'i tutturursan ödülü kendisi olan oyuncu", "color": "#c2185b", "emojis": "🃏🐰" },
  { "id": "mvga1bunny03", "title": "Gazino Bunny – Kokteyl Servisi", "cat": "c:mvgwj75108lqd", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["roleplay", "gazino"], "desc": "VIP salonda: o tepsisiyle masana eğilen kokteyl garsonu Bunny Girl, sen bahşişi cömert, eli hızlı müşteri", "color": "#c2185b", "emojis": "🍸🐰" },
  { "id": "mvga1bunny04", "title": "Gazino Bunny – Jackpot Ödülü", "cat": "c:mvgwj75108lqd", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["roleplay", "gazino"], "desc": "Slot makinesi jackpot verdi: büyük ödül o; papyonlu Bunny Girl seni VIP süite götürüp kendini paket gibi açtırıyor", "color": "#c2185b", "emojis": "🎰💰" },
  { "id": "mvga1bunny05", "title": "Gazino Bunny – Sahne Arkası", "cat": "c:mvgwj75108lqd", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["roleplay", "gazino"], "desc": "Gece şovundan sonra kulis: o hâlâ terli Bunny Girl dansçı, sen kapıdan sızan ön sıra hayranı", "color": "#c2185b", "emojis": "💃🐰" },
  { "id": "mvga1bunny06", "title": "Gazino Bunny – Strip Poker", "cat": "c:mvgwj75108lqd", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["roleplay", "gazino"], "desc": "Kapalı poker odasında, kaybeden bir parça çıkarır: o blöf yapmayı seven Bunny Girl, sen ona karşı elini açan rakip", "color": "#c2185b", "emojis": "♠️🐰" },
  { "id": "mvfx5ayna01", "title": "Ayna Karşısında", "cat": "c:mvgwj75108lqd", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "Boy aynasının karşısında: ikiniz de kendinizi izlersiniz, o yansımasından gözünü alamaz", "color": "#90a4ae", "emojis": "🪞" },
  { "id": "mvmsv1limon1", "title": "Limon Kız", "cat": "c:mvmeisove01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["roleplay", "meisove"], "desc": "Meisove kızı: slime gibi yumuşacık, sapsarı ve yarı saydam; teni ekşi limon kokar, sıkınca suyu fışkırır", "color": "#fbc02d", "emojis": "🍋" },
  { "id": "mvmsv2cilek1", "title": "Çilek Kız", "cat": "c:mvmeisove01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["roleplay", "meisove"], "desc": "Meisove kızı: kıpkırmızı, utangaç ve jöle gibi yumuşak; çilek reçeli kokar, kremaya bayılır", "color": "#e53935", "emojis": "🍓" },
  { "id": "mvmsv3prtkl1", "title": "Portakal Kız", "cat": "c:mvmeisove01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["roleplay", "meisove"], "desc": "Meisove kızı: güneş gibi enerjik, turuncu ve sulu sulu; kabuğunu soyunca portakal çiçeği kokar", "color": "#fb8c00", "emojis": "🍊" },
  { "id": "mvmsv4sarap1", "title": "Şarap Kız", "cat": "c:mvmeisove01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["roleplay", "meisove"], "desc": "Meisove kızı: bordo, yıllanmış ve ağırbaşlı; jöle teni şarap kokar, acele etmez ama başını döndürür", "color": "#880e4f", "emojis": "🍷" },
  { "id": "mvmsv5vodka1", "title": "Vodka Kız", "cat": "c:mvmeisove01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["roleplay", "meisove"], "desc": "Meisove kızı: Rusya'dan gelen buz gibi, şeffaf vodka kız; \"Da, moy dorogoy\" der, boğazını yakar, içinde erir", "color": "#90caf9", "emojis": "🍸🇷🇺" },
  { "id": "mvmsv6bal001", "title": "Bal Kız", "cat": "c:mvmeisove01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["roleplay", "meisove"], "desc": "Meisove kızı: altın sarısı, yarı saydam ve yapış yapış; teni süzme bal kokar, dokunan bir daha ayrılamaz", "color": "#ffb300", "emojis": "🍯🐝" },
  { "id": "mvmsv7tkla01", "title": "Tekila Kız", "cat": "c:mvmeisove01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["roleplay", "meisove"], "desc": "Meisove kızı: Meksika'dan gelen ateşli tekila kız; tuzu boynunda, limonu dudağında, \"¡Salud, mi amor!\" der ve yakar", "color": "#7cb342", "emojis": "🌵🥃" },
  { "id": "mvmsv8smpn01", "title": "Şampanya Kız", "cat": "c:mvmeisove01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["roleplay", "meisove"], "desc": "Meisove kızı: altın renkli, ışıltılı ve kıkır kıkır; jöle teninde kabarcıklar dolaşır, mantarı patlayınca köpürür", "color": "#d4af37", "emojis": "🍾🥂" },
  { "id": "mvmsv9sut001", "title": "Süt Kız", "cat": "c:mvmeisove01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["roleplay", "meisove"], "desc": "Meisove kızı: bembeyaz, kremamsı ve sıcacık; jöle teni ılık süt ve vanilya kokar, sıkınca göğüslerinden süt damlar", "color": "#b0bec5", "emojis": "🥛🐄" },
  {
   "id": "mvs1msbgrb05e",
   "title": "Boob Grab",
   "cat": "c:mvs1massage0z",
   "text": "",
   "steps": [],
   "opener": "",
   "starter": "",
   "tones": [],
   "note": "",
   "part": "",
   "when": "",
   "place": "",
   "mix": [],
   "tags": [
    "göğüs"
   ],
   "desc": "Masaj sırasında arkadan sarılıp göğüslerini avuçlarsın",
   "color": "#26a69a",
   "emojis": "💆🍒",
   "onEffects": [
    {
     "p": "p:umvjzd17hys1oy",
     "d": 10
    },
    {
     "p": "p:sehvet",
     "d": 5
    },
    {
     "p": "p:samimiyet",
     "d": 1
    }
   ]
  },
  {
   "id": "mvs1msagrb06f",
   "title": "Ass Grab",
   "cat": "c:mvs1massage0z",
   "text": "",
   "steps": [],
   "opener": "",
   "starter": "",
   "tones": [],
   "note": "",
   "part": "",
   "when": "",
   "place": "",
   "mix": [],
   "tags": [
    "kalça"
   ],
   "desc": "Masaj sırasında kalçasını avuçlayıp yoğurursun",
   "color": "#26a69a",
   "emojis": "💆🍑",
   "onEffects": [
    {
     "p": "p:umvjzd17hys1oy",
     "d": 10
    },
    {
     "p": "p:sehvet",
     "d": 5
    },
    {
     "p": "p:samimiyet",
     "d": 1
    }
   ]
  },
  {
   "id": "mvs1msvfng07g",
   "title": "Vagina Fingering",
   "cat": "c:mvs1massage0z",
   "text": "",
   "steps": [],
   "opener": "",
   "starter": "",
   "tones": [],
   "note": "",
   "part": "",
   "when": "",
   "place": "",
   "mix": [],
   "tags": [],
   "desc": "Masajın sonunda parmaklarını vajinasına kaydırırsın: Uyarılma +20",
   "color": "#26a69a",
   "emojis": "💆👆",
   "onEffects": [
    {
     "p": "p:umvjzd17hys1oy",
     "d": 20
    },
    {
     "p": "p:sehvet",
     "d": 10
    },
    {
     "p": "p:samimiyet",
     "d": 1
    },
    {
     "p": "p:guven",
     "d": 1
    }
   ]
  },
  {
   "id": "mvs1msafng08h",
   "title": "Asshole Fingering",
   "cat": "c:mvs1massage0z",
   "text": "",
   "steps": [],
   "opener": "",
   "starter": "",
   "tones": [],
   "note": "",
   "part": "",
   "when": "",
   "place": "",
   "mix": [],
   "tags": [],
   "desc": "Kalçasını yağlayıp parmağını yavaşça arka deliğine sokarsın: Uyarılma +15, biraz Acı",
   "color": "#26a69a",
   "emojis": "💆🍑👆",
   "onEffects": [
    {
     "p": "p:umvjzd17hys1oy",
     "d": 15
    },
    {
     "p": "p:sehvet",
     "d": 10
    },
    {
     "p": "p:umvl2lpjpbiqzo",
     "d": 5
    },
    {
     "p": "p:guven",
     "d": 1
    }
   ]
  },
  {
   "id": "mvs1lktits09i",
   "title": "Lick Tits",
   "cat": "c:mvgtgdbp6e8xv",
   "text": "",
   "steps": [],
   "opener": "",
   "starter": "",
   "tones": [],
   "note": "",
   "part": "",
   "when": "",
   "place": "",
   "mix": [],
   "tags": [
    "yalama"
   ],
   "desc": "Göğüslerini, uçlarını yalarsın: Uyarılma +15",
   "color": "#ff5f5f",
   "emojis": "👅🍒",
   "onEffects": [
    {
     "p": "p:umvjzd17hys1oy",
     "d": 15
    },
    {
     "p": "p:sehvet",
     "d": 5
    },
    {
     "p": "p:samimiyet",
     "d": 1
    }
   ]
  },
  {
   "id": "mvs1lkass010j",
   "title": "Lick Ass",
   "cat": "c:mvgtgdbp6e8xv",
   "text": "",
   "steps": [],
   "opener": "",
   "starter": "",
   "tones": [],
   "note": "",
   "part": "",
   "when": "",
   "place": "",
   "mix": [],
   "tags": [
    "yalama"
   ],
   "desc": "Kalçasını, yanaklarını yalayıp öpersin: Uyarılma +15",
   "color": "#ff5f5f",
   "emojis": "👅🍑",
   "onEffects": [
    {
     "p": "p:umvjzd17hys1oy",
     "d": 15
    },
    {
     "p": "p:sehvet",
     "d": 5
    },
    {
     "p": "p:samimiyet",
     "d": 1
    }
   ]
  },
  {
   "id": "mvs1lkback11k",
   "title": "Lick Back",
   "cat": "c:mvgtgdbp6e8xv",
   "text": "",
   "steps": [],
   "opener": "",
   "starter": "",
   "tones": [],
   "note": "",
   "part": "",
   "when": "",
   "place": "",
   "mix": [],
   "tags": [
    "yalama"
   ],
   "desc": "Sırtını belinden ensesine kadar yalarsın: Uyarılma +10",
   "color": "#ff5f5f",
   "emojis": "👅✨",
   "onEffects": [
    {
     "p": "p:umvjzd17hys1oy",
     "d": 10
    },
    {
     "p": "p:samimiyet",
     "d": 2
    }
   ]
  },
  {
   "id": "mvs1lklegs12l",
   "title": "Lick Legs",
   "cat": "c:mvgtgdbp6e8xv",
   "text": "",
   "steps": [],
   "opener": "",
   "starter": "",
   "tones": [],
   "note": "",
   "part": "",
   "when": "",
   "place": "",
   "mix": [],
   "tags": [
    "yalama"
   ],
   "desc": "Bileğinden iç bacağına kadar yalayarak çıkarsın: Uyarılma +10",
   "color": "#ff5f5f",
   "emojis": "👅🦵",
   "onEffects": [
    {
     "p": "p:umvjzd17hys1oy",
     "d": 10
    },
    {
     "p": "p:sehvet",
     "d": 5
    }
   ]
  },
  {
   "id": "mvs1lkneck13m",
   "title": "Lick Neck",
   "cat": "c:mvgtgdbp6e8xv",
   "text": "",
   "steps": [],
   "opener": "",
   "starter": "",
   "tones": [],
   "note": "",
   "part": "",
   "when": "",
   "place": "",
   "mix": [],
   "tags": [
    "yalama"
   ],
   "desc": "Boynunu, kulak arkasını yalayıp öpersin: Uyarılma +10",
   "color": "#ff5f5f",
   "emojis": "👅💋",
   "onEffects": [
    {
     "p": "p:umvjzd17hys1oy",
     "d": 10
    },
    {
     "p": "p:ask",
     "d": 2
    },
    {
     "p": "p:samimiyet",
     "d": 2
    }
   ]
  },
  {
   "id": "mvs1lkfeet14n",
   "title": "Lick Feet",
   "cat": "c:mvgtgdbp6e8xv",
   "text": "",
   "steps": [],
   "opener": "",
   "starter": "",
   "tones": [],
   "note": "",
   "part": "",
   "when": "",
   "place": "",
   "mix": [],
   "tags": [
    "yalama"
   ],
   "desc": "Ayaklarını, parmaklarını tek tek yalarsın: Uyarılma +10",
   "color": "#ff5f5f",
   "emojis": "👅🦶",
   "onEffects": [
    {
     "p": "p:umvjzd17hys1oy",
     "d": 10
    },
    {
     "p": "p:sehvet",
     "d": 5
    }
   ]
  },
  {
   "id": "mvs2slpass15o",
   "title": "Slap Ass",
   "cat": "c:mvgm5g7q1xopl",
   "text": "",
   "steps": [],
   "opener": "",
   "starter": "",
   "tones": [],
   "note": "",
   "part": "",
   "when": "",
   "place": "",
   "mix": [],
   "tags": [
    "kalça"
   ],
   "desc": "Kalçasına şaplak atarsın; teni pembeleşir: Uyarılma +8, biraz Acı",
   "color": "#ff6fa8",
   "emojis": "👋🍑",
   "onEffects": [
    {
     "p": "p:umvjzd17hys1oy",
     "d": 8
    },
    {
     "p": "p:sehvet",
     "d": 5
    },
    {
     "p": "p:umvl2lpjpbiqzo",
     "d": 3
    }
   ]
  },
  {
   "id": "mvs2slpboo16p",
   "title": "Slap Boob",
   "cat": "c:mvgm5g7q1xopl",
   "text": "",
   "steps": [],
   "opener": "",
   "starter": "",
   "tones": [],
   "note": "",
   "part": "",
   "when": "",
   "place": "",
   "mix": [],
   "tags": [
    "göğüs"
   ],
   "desc": "Göğüslerine hafif şaplaklar atarsın; titreyip sallanırlar: Uyarılma +8, biraz Acı",
   "color": "#ff6fa8",
   "emojis": "👋🍒",
   "onEffects": [
    {
     "p": "p:umvjzd17hys1oy",
     "d": 8
    },
    {
     "p": "p:sehvet",
     "d": 5
    },
    {
     "p": "p:umvl2lpjpbiqzo",
     "d": 3
    }
   ]
  },
  { "id": "mvpf01caress", "title": "Bump Caress", "cat": "c:mvpregfp01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["hamile"], "weeks": [1, 40], "desc": "Elini karnında yavaşça gezdirirsin; bebek tekme atınca ikiniz de gülersiniz", "color": "#f48fb1", "emojis": "🤲🤰", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 5 }, { "p": "p:samimiyet", "d": 3 }] },
  { "id": "mvpf02mirror", "title": "Mirror Bump Hug", "cat": "c:mvpregfp01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["hamile"], "weeks": [1, 40], "desc": "Boy aynasının önünde arkadan sarılırsın; ellerin karnında ve büyüyen göğüslerinde", "color": "#f48fb1", "emojis": "🪞🤰", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 10 }, { "p": "p:samimiyet", "d": 1 }] },
  { "id": "mvpf03ice", "title": "Ice Nipples", "cat": "c:mvpregfp01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["göğüs", "hamile"], "weeks": [1, 40], "desc": "Hassaslaşmış meme uçlarına buz değdirirsin; her dokunuşta irkilir", "color": "#f48fb1", "emojis": "🧊🍒", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 15 }] },
  { "id": "mvpf04dress", "title": "Maternity Dress Lift", "cat": "c:mvpregfp01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["hamile"], "weeks": [1, 40], "desc": "Hamile elbisesini yavaş yavaş karnının üstüne kadar kaldırır; altında hiçbir şey yok", "color": "#f48fb1", "emojis": "👗🤰", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 10 }, { "p": "p:sehvet", "d": 10 }] },
  { "id": "mvpf05crave", "title": "Craving You", "cat": "c:mvpregfp01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["hamile"], "weeks": [1, 40], "desc": "Hormonlar konuşur: \"Turşu değil, seni istiyorum\" diye mesaj atar", "color": "#f48fb1", "emojis": "📱🔥", "onEffects": [{ "p": "p:sehvet", "d": 15 }] },
  { "id": "mvpf06bath", "title": "Warm Bath Tease", "cat": "c:mvpregfp01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["hamile"], "weeks": [1, 40], "desc": "Ilık küvette karnını köpükler, elini suyun altında aşağı kaydırır", "color": "#f48fb1", "emojis": "🛁🤰", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 10 }, { "p": "p:samimiyet", "d": 1 }] },
  { "id": "mvpf07finger", "title": "Spoon Fingering", "cat": "c:mvpregfp01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["el", "hamile"], "weeks": [1, 40], "desc": "Yan yatarken arkasına sokulursun; parmakların karnının altından aşağı iner", "color": "#f48fb1", "emojis": "🖐️💦", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 15 }] },
  { "id": "mvpf08lick", "title": "Wedge Pillow Licking", "cat": "c:mvpregfp01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["oral", "hamile"], "weeks": [1, 40], "desc": "Kama yastığa yaslanır, karnı yukarıda; sen bacaklarının arasındasın", "color": "#f48fb1", "emojis": "👅🌸", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 20 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvpf09chair", "title": "Chair Edge Oral", "cat": "c:mvpregfp01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["oral", "hamile"], "weeks": [1, 40], "desc": "Sandalyenin ucuna oturup bacaklarını açar; sen önünde diz çökersin", "color": "#f48fb1", "emojis": "🪑👅", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 20 }] },
  { "id": "mvpf10hand", "title": "Side-Lying Handjob", "cat": "c:mvpregfp01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["el", "hamile"], "weeks": [1, 40], "desc": "Yan yatar, karnını yastığa yaslar; elini yavaşça sana uzatır", "color": "#f48fb1", "emojis": "🍆✋", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 10 }] },
  { "id": "mvpf11blow", "title": "Side-Lying Blowjob", "cat": "c:mvpregfp01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["oral", "hamile"], "weeks": [1, 40], "desc": "Yatakta yan döner, başını kalçana yaslar; ağzıyla yavaşça alır", "color": "#f48fb1", "emojis": "👄🍆", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 15 }] },
  { "id": "mvpf12tit", "title": "Swollen Titjob", "cat": "c:mvpregfp01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["göğüs", "hamile"], "weeks": [1, 40], "desc": "Hamilelikle büyüyen göğüslerinin arasına alıp sıkar", "color": "#f48fb1", "emojis": "🍈🍆", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 15 }] },
  { "id": "mvpf13vibe", "title": "Gentle Vibe", "cat": "c:mvpregfp01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["hamile"], "weeks": [1, 40], "desc": "En düşük titreşim; hızı o seçer, sen sadece tutarsın", "color": "#f48fb1", "emojis": "📳🌸", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 15 }] },
  { "id": "mvpf14colo", "title": "Colostrum Tease", "cat": "c:mvpregfp01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["göğüs", "hamile"], "weeks": [1, 40], "desc": "Göğsünü sıkar, ilk sarı damlaları parmağıyla dudağına sürer", "color": "#f48fb1", "emojis": "🥛💧", "onEffects": [{ "p": "p:umvjzd17h5twc2", "d": -5 }, { "p": "p:sehvet", "d": 10 }] },
  { "id": "mvpg01lotus", "title": "Slow Lotus", "cat": "c:mvpreg01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "hamile"], "weeks": [1, 30], "desc": "Kucağında yüz yüze oturur, karnı aranızda; çok yavaş sallanır", "color": "#ec407a", "emojis": "🌙🤰", "onEffects": [{ "p": "p:samimiyet", "d": 2 }, { "p": "p:ask", "d": 1 }] },
  { "id": "mvpg02rev", "title": "Reverse Careful Ride", "cat": "c:mvpreg01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "hamile"], "weeks": [1, 34], "desc": "Sırtını dönüp üstüne oturur; karnı serbest, hızı o belirler", "color": "#ec407a", "emojis": "🔄🤰", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvpg03sofa", "title": "Sofa Edge Missionary", "cat": "c:mvpreg01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "hamile"], "weeks": [1, 40], "desc": "Koltuğun ucuna yaslanır, sen önünde diz çökmüşsün; karnına hiç ağırlık binmez", "color": "#ec407a", "emojis": "🛋️🤰", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvpg04chair", "title": "Chair Ride", "cat": "c:mvpreg01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "hamile"], "weeks": [1, 32], "desc": "Kolsuz sandalyede kucağına oturur, ayakları yerde; tempoyu o tutar", "color": "#ec407a", "emojis": "🪑🤰", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvpg05sciss", "title": "Side Scissor", "cat": "c:mvpreg01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "hamile"], "weeks": [1, 40], "desc": "Yan yatarsınız, bacakları bacaklarının arasından çaprazlanır; karnı yastıkta", "color": "#ec407a", "emojis": "✂️🤰", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvpg06ball", "title": "Birth Ball Bounce", "cat": "c:mvpreg01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "hamile"], "weeks": [1, 38], "desc": "Pilates topunda kucağında; top her zıplamada yumuşakça geri iter", "color": "#ec407a", "emojis": "🎈🤰", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 5 }, { "p": "p:samimiyet", "d": 1 }] },
  { "id": "mvpg07counter", "title": "Counter Lean", "cat": "c:mvpreg01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "hamile"], "weeks": [1, 36], "desc": "Mutfak tezgâhına dirseklerini dayar, karnı boşta; sen arkasındasın", "color": "#ec407a", "emojis": "🍳🤰", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvpg08shower", "title": "Shower Lean Doggy", "cat": "c:mvpreg01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "hamile"], "weeks": [1, 34], "desc": "Duşta ellerini fayansa dayar; sıcak su karnından süzülür", "color": "#ec407a", "emojis": "🚿🤰", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvpg09mirror", "title": "Mirror Standing", "cat": "c:mvpreg01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "hamile"], "weeks": [1, 30], "desc": "Boy aynasının önünde arkadan; o kendi karnını ve seni izler", "color": "#ec407a", "emojis": "🪞🤰", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 5 }, { "p": "p:samimiyet", "d": 1 }] },
  { "id": "mvpg10nest", "title": "Nesting Quickie", "cat": "c:mvpreg01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "hamile"], "weeks": [1, 38], "desc": "Bebek odasını boyarken fırçayı bırakır; duvara boya bulaşır, umursamaz", "color": "#ec407a", "emojis": "🎨🤰", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 5 }, { "p": "p:ask", "d": 1 }] },
  { "id": "mvpg11slow", "title": "Third Trimester Slow", "cat": "c:mvpreg01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "hamile"], "weeks": [1, 40], "desc": "Artık sadece yan yatarak; çok yavaş, her hareketi o yönetir", "color": "#ec407a", "emojis": "🐢🤰", "onEffects": [{ "p": "p:samimiyet", "d": 2 }, { "p": "p:ask", "d": 1 }] },
  { "id": "mvpg12anal", "title": "Pregnant Spoon Anal", "cat": "c:mvpreg01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["anal", "hamile"], "weeks": [1, 36], "desc": "Yan yatar, üst bacağını kaldırır; yavaşça arkasına girersin", "color": "#d81b60", "emojis": "🍑🤰", "onEffects": [{ "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvpg13wet", "title": "Extra Wet", "cat": "c:mvpreg01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "hamile"], "weeks": [1, 40], "desc": "Hormonlar yüzünden her zamankinden ıslak; daha dokunmadan hazır", "color": "#ec407a", "emojis": "💦🤰", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 10 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvpg20tits", "title": "Swollen Tits Cumshot", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["göğüs", "hamile", "boşalma"], "weeks": [1, 40], "desc": "Hamilelikle büyüyen göğüslerine boşalırsın; iki eliyle sıkıp gösterir", "color": "#5f8bff", "emojis": "🍈💦", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }] },
  { "id": "mvpg21belly", "title": "Creampie Belly Rub", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "hamile", "boşalma"], "weeks": [1, 40], "desc": "İçine boşalırsın, sonra sarılıp karnını okşarsın (zaten hamile, yeni hamilelik olmaz)", "color": "#5f8bff", "emojis": "🤰🥛", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:umvjof3wzh5hej", "d": -30 }, { "p": "p:ask", "d": 5 }] },
  { "id": "mvpg22milk", "title": "Milk & Cum", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "hamile", "boşalma"], "weeks": [1, 40], "desc": "İçine boşalırken göğüslerinden de süt akar; ikisi birlikte", "color": "#5f8bff", "emojis": "🥛💦", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:umvjof3wzh5hej", "d": -30 }, { "p": "p:umvjzd17h5twc2", "d": -10 }] },
  { "id": "mvpg23lotus", "title": "Lotus Creampie", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "hamile", "boşalma"], "weeks": [1, 30], "after": ["Slow Lotus"], "desc": "Yüz yüze otururken içine boşalırsın; sarılı kalırsınız, karnı aranızda", "color": "#5f8bff", "emojis": "🌙💦", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:umvjof3wzh5hej", "d": -30 }, { "p": "p:samimiyet", "d": 3 }] },
  { "id": "mvpg24spoon", "title": "Spoon Creampie", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "hamile", "boşalma"], "weeks": [1, 40], "after": ["Side Scissor", "Third Trimester Slow"], "desc": "Yan yatarken arkadan içine boşalırsın; elin karnında kalır", "color": "#5f8bff", "emojis": "🥄💦", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:umvjof3wzh5hej", "d": -30 }, { "p": "p:samimiyet", "d": 1 }] },
  { "id": "mvpg25ball", "title": "Birth Ball Creampie", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "hamile", "boşalma"], "weeks": [1, 38], "after": ["Birth Ball Bounce"], "desc": "Pilates topunun üstünde, kucağında içine boşalırsın", "color": "#5f8bff", "emojis": "🎈💦", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:umvjof3wzh5hej", "d": -30 }] },
  { "id": "mvpg26sofa", "title": "Sofa Bump Cumshot", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["göğüs", "hamile", "boşalma"], "weeks": [1, 40], "after": ["Sofa Edge Missionary"], "desc": "Koltukta uzanmışken karnına ve göğüslerine boşalırsın", "color": "#5f8bff", "emojis": "🛋️💦", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }] },
  { "id": "mvpg27shower", "title": "Shower Bump Cumshot", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["göğüs", "hamile", "boşalma"], "weeks": [1, 40], "after": ["Shower Lean Doggy"], "desc": "Duşta karnına boşalırsın; sıcak su hemen yıkar", "color": "#5f8bff", "emojis": "🚿💦", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }] },
  { "id": "mvpg28mirror", "title": "Mirror Creampie", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "hamile", "boşalma"], "weeks": [1, 40], "after": ["Mirror Standing"], "desc": "Aynanın önünde içine boşalırsın; akışını aynada izler", "color": "#5f8bff", "emojis": "🪞💦", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:umvjof3wzh5hej", "d": -30 }, { "p": "p:umvjzd17hys1oy", "d": 5 }] },
  { "id": "mvpg29swallow", "title": "Pregnant Swallow", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["oral", "hamile", "boşalma"], "weeks": [1, 40], "desc": "Yan yatarken ağzına boşalırsın, yutar; \"bebek de beslendi\" diye güler", "color": "#5f8bff", "emojis": "👅💦", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }] },
  { "id": "mvpg30anal", "title": "Spoon Anal Creampie", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["anal", "hamile", "boşalma"], "weeks": [1, 36], "after": ["Pregnant Spoon Anal"], "desc": "Yan yatarken arkasına boşalırsın; bacağını indirmeden bekler", "color": "#5f8bff", "emojis": "🍑💦", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:umvjof3wzh5hej", "d": -30 }] },
  { "id": "mvpg31oil", "title": "Oil & Cum Rub", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["göğüs", "hamile", "boşalma"], "weeks": [1, 40], "desc": "Karnına boşalırsın; çatlak yağıyla karıştırıp birlikte sürersiniz", "color": "#5f8bff", "emojis": "🧴💦", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:samimiyet", "d": 2 }] },
  { "id": "mvpg32multi", "title": "Hormone Multi", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "hamile", "boşalma"], "weeks": [1, 40], "desc": "Hormonlar sayesinde o da üst üste birkaç kez gelir; sen içinde bitirirsin", "color": "#5f8bff", "emojis": "🍼💦", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:umvjof3wzh5hej", "d": -30 }, { "p": "p:ask", "d": 3 }] },
  { "id": "mvmc01trail", "title": "Milk Lick Trail", "cat": "c:mvmilkcumfp01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["süt"], "milk": 20, "desc": "Sütünü göğsünden karnına akıtır; sen dilinle izini aşağı doğru sürersin", "color": "#f5e6c8", "emojis": "🥛👅", "onEffects": [{ "p": "p:umvjzd17h5twc2", "d": -5 }, { "p": "p:umvjzd17hys1oy", "d": 15 }] },
  { "id": "mvmc02suck", "title": "Suck & Stroke", "cat": "c:mvmilkcumfp01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["el", "süt"], "milk": 30, "desc": "Sen göğsünden emerken o eliyle seni yavaşça okşar", "color": "#f5e6c8", "emojis": "🍼✋", "onEffects": [{ "p": "p:umvjzd17h5twc2", "d": -10 }, { "p": "p:umvjzd17hys1oy", "d": 10 }, { "p": "p:samimiyet", "d": 1 }] },
  { "id": "mvmc03lube", "title": "Milk Lube Handjob", "cat": "c:mvmilkcumfp01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["el", "süt"], "milk": 30, "desc": "Sütünü avucuna sağar; kaygan eliyle seni okşar", "color": "#f5e6c8", "emojis": "🥛🍆", "onEffects": [{ "p": "p:umvjzd17h5twc2", "d": -10 }, { "p": "p:umvjzd17hys1oy", "d": 15 }] },
  { "id": "mvmc04mouth", "title": "Milk Mouth Blowjob", "cat": "c:mvmilkcumfp01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["oral", "süt"], "milk": 20, "desc": "Kendi sütünü ağzına sağar, ağzı sütle doluyken seni alır", "color": "#f5e6c8", "emojis": "💋🥛", "onEffects": [{ "p": "p:umvjzd17h5twc2", "d": -5 }, { "p": "p:sehvet", "d": 10 }] },
  { "id": "mvmc05nipple", "title": "Nipple Squeeze Tease", "cat": "c:mvmilkcumfp01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["göğüs", "süt"], "milk": 20, "desc": "Meme ucunu aletine sürer, sıkıp üstüne damlatır", "color": "#f5e6c8", "emojis": "🍒🥛", "onEffects": [{ "p": "p:umvjzd17h5twc2", "d": -5 }, { "p": "p:umvjzd17hys1oy", "d": 10 }] },
  { "id": "mvmc10cowgirl", "title": "Milky Cowgirl", "cat": "c:mvmilkcum01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "süt"], "milk": 30, "desc": "Üstünde zıplarken göğüslerinden yüzüne süt damlar", "color": "#e0c9a6", "emojis": "🤠🥛", "onEffects": [{ "p": "p:umvjzd17h5twc2", "d": -10 }, { "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvmc11nurse", "title": "Nursing Ride", "cat": "c:mvmilkcum01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "süt"], "milk": 30, "desc": "Kucağında seni emzirirken içinde yavaşça sallanır", "color": "#e0c9a6", "emojis": "🍼🔥", "onEffects": [{ "p": "p:umvjzd17h5twc2", "d": -10 }, { "p": "p:samimiyet", "d": 2 }, { "p": "p:ask", "d": 1 }] },
  { "id": "mvmc12doggy", "title": "Milking Doggy", "cat": "c:mvmilkcum01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "süt"], "milk": 40, "desc": "Arkadan; göğüsleri aşağı sarkar, sen her itişte sağarsın", "color": "#e0c9a6", "emojis": "🐄🍑", "onEffects": [{ "p": "p:umvjzd17h5twc2", "d": -15 }, { "p": "p:umvjzd17hys1oy", "d": 5 }, { "p": "p:samimiyet", "d": 1 }] },
  { "id": "mvmc13spoon", "title": "Spoon & Squeeze", "cat": "c:mvmilkcum01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "süt"], "milk": 30, "desc": "Yan yatarak arkadan; elin göğsünü sıkar, süt çarşafa damlar", "color": "#e0c9a6", "emojis": "🥄🥛", "onEffects": [{ "p": "p:umvjzd17h5twc2", "d": -10 }, { "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvmc14mirror", "title": "Mirror Milking", "cat": "c:mvmilkcum01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "süt"], "milk": 40, "desc": "Aynanın önünde ayakta arkadan; sen sağarken o aynada fışkıran sütü izler", "color": "#e0c9a6", "emojis": "🪞🥛", "onEffects": [{ "p": "p:umvjzd17h5twc2", "d": -15 }, { "p": "p:umvjzd17hys1oy", "d": 5 }] },
  { "id": "mvmc15anal", "title": "Milky Anal", "cat": "c:mvmilkcum01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["anal", "süt"], "milk": 40, "desc": "Arkasına girerken göğüsleri her itişte süt fışkırtır", "color": "#c9a97a", "emojis": "🍑🥛", "onEffects": [{ "p": "p:umvjzd17h5twc2", "d": -15 }, { "p": "p:samimiyet", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvmc20letdown", "title": "Creampie Let-down", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["vajinal", "süt", "boşalma"], "milk": 30, "desc": "İçine boşalınca orgazmla göğüslerinden süt fışkırır (korunmaya göre hamilelik ihtimali)", "color": "#5f8bff", "emojis": "💦🍼", "outcomes": [{ "id": "mvmc20preg", "text": "{ben} hamile kaldı", "pct": 50, "next": "", "effects": [{ "p": "f:hamile", "d": 1 }], "conds": [{ "k": "not", "ev": "mvh1h70jral7v" }] }], "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:umvjof3wzh5hej", "d": -30 }, { "p": "p:umvjzd17h5twc2", "d": -20 }] },
  { "id": "mvmc21tits", "title": "Double Cream Tits", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["göğüs", "süt", "boşalma"], "milk": 20, "desc": "Göğüslerine boşalırsın; meni sütüyle karışıp karnına süzülür", "color": "#5f8bff", "emojis": "🍈💦", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:umvjzd17h5twc2", "d": -5 }] },
  { "id": "mvmc22kiss", "title": "Milk & Cum Kiss", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["oral", "süt", "boşalma"], "milk": 20, "desc": "Ağzına boşalırsın; sütünü de ağzına sağar ve seni öper", "color": "#5f8bff", "emojis": "💋🥛", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:umvjzd17h5twc2", "d": -5 }, { "p": "p:samimiyet", "d": 2 }] },
  { "id": "mvmc23cocktail", "title": "Milk & Cum Cocktail", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["oral", "süt", "boşalma"], "milk": 30, "desc": "Kadehe boşalırsın, o da sütünü sağar; karıştırıp gözünün içine bakarak içer", "color": "#5f8bff", "emojis": "🥛🍸", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:umvjzd17h5twc2", "d": -10 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvmc24analcr", "title": "Milky Anal Creampie", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["anal", "süt", "boşalma"], "milk": 20, "after": ["Milky Anal"], "desc": "Arkasına boşalırsın; göğüslerinden süt çarşafa akar", "color": "#5f8bff", "emojis": "🍑💦", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:umvjof3wzh5hej", "d": -30 }, { "p": "p:umvjzd17h5twc2", "d": -5 }] },
  { "id": "mvmc25belly", "title": "Creamy Belly", "cat": "c:mvgu3rsuko7km", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["göğüs", "süt", "boşalma"], "milk": 20, "desc": "Karnına boşalırsın; göğüslerinden akan sütle göbeğinde buluşur", "color": "#5f8bff", "emojis": "🤰💦", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:umvjzd17h5twc2", "d": -5 }] },
  { "id": "mvmc30cuddle", "title": "Sticky Cuddle", "cat": "c:mvmilkcumaf01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "Süt ve meniyle yapış yapış, umursamadan sarılırsınız", "color": "#d7ccc8", "emojis": "🧻🥛", "onEffects": [{ "p": "p:samimiyet", "d": 3 }, { "p": "p:ask", "d": 1 }] },
  { "id": "mvmc31wash", "title": "Wash It Off", "cat": "c:mvmilkcumaf01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "Birlikte duşa girersiniz; sıcak su süt ve meniyi yıkar, eller yine kayar", "color": "#d7ccc8", "emojis": "🚿🥛", "onEffects": [{ "p": "p:samimiyet", "d": 2 }, { "p": "p:umvjzd17hys1oy", "d": 5 }] },
  { "id": "mvmc32nap", "title": "Refill Nap", "cat": "c:mvmilkcumaf01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": [], "desc": "Göğsünde uyuyakalırsınız; uyandığınızda göğüsleri yine dolmuş", "color": "#d7ccc8", "emojis": "🍼😴", "onEffects": [{ "p": "p:umvjzd17h5twc2", "d": 20 }, { "p": "p:ask", "d": 2 }] },
  { "id": "mvls01ear", "title": "Hair Behind Ear", "cat": "c:mvlesfp01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["lezbiyen"], "desc": "Saçını kulağının arkasına alır, parmakları boynundan aşağı kayar", "color": "#f06292", "emojis": "💇‍♀️🤍", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 5 }, { "p": "p:samimiyet", "d": 2 }] },
  { "id": "mvls02gloss", "title": "Lip Gloss Share", "cat": "c:mvlesfp01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["lezbiyen"], "desc": "Dudak parlatıcısını önce kendine, sonra öpüşerek sana sürer", "color": "#f06292", "emojis": "💄💋", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 10 }, { "p": "p:samimiyet", "d": 1 }] },
  { "id": "mvls03mirror", "title": "Mirror Kiss", "cat": "c:mvlesfp01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["lezbiyen"], "desc": "Aynanın önünde arkandan sarılır, ikinizi birlikte izleyerek boynunu öper", "color": "#f06292", "emojis": "🪞👩‍❤️‍👩", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 10 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvls04bra", "title": "Bra Unhook", "cat": "c:mvlesfp01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["lezbiyen"], "desc": "Tek elle sütyenini açar, \"bunu nasıl yaptığımı sorma\" diye güler", "color": "#f06292", "emojis": "👙🫳", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 10 }, { "p": "p:samimiyet", "d": 1 }] },
  { "id": "mvls05b2b", "title": "Breast To Breast", "cat": "c:mvlesfp01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["lezbiyen"], "desc": "Çıplak göğüslerini göğüslerine bastırır, uçlar birbirine sürtünür", "color": "#f06292", "emojis": "🍒🍒", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 15 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvls06nipple", "title": "Nipple Circle", "cat": "c:mvlesfp01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["lezbiyen"], "desc": "Dilini göğüs ucunun etrafında yavaşça çevirir, diğerini parmaklarıyla sıkar", "color": "#f06292", "emojis": "🌀👅", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 15 }] },
  { "id": "mvls07thigh", "title": "Thigh Kisses", "cat": "c:mvlesfp01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["lezbiyen"], "desc": "Dizinden başlayıp iç uyluğuna doğru öpücüklerle tırmanır, tam ortada durur", "color": "#f06292", "emojis": "🦵💋", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 15 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvls08panty", "title": "Panty Tease", "cat": "c:mvlesfp01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["lezbiyen"], "desc": "Külotunun üstünden parmağını gezdirir, ıslaklığı hissedince gülümser", "color": "#f06292", "emojis": "🩲👆", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 15 }] },
  { "id": "mvls09shirt", "title": "Same Shirt", "cat": "c:mvlesfp01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["lezbiyen"], "desc": "Tek bir büyük tişörtün içine ikiniz girersiniz, tenler yapışık", "color": "#f06292", "emojis": "👕👭", "onEffects": [{ "p": "p:samimiyet", "d": 3 }, { "p": "p:ask", "d": 1 }] },
  { "id": "mvls10bath", "title": "Bath Bubbles", "cat": "c:mvlesfp01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["lezbiyen"], "desc": "Küvette arkana oturur, köpükle göğüslerini ve karnını yıkar", "color": "#f06292", "emojis": "🛁🫧", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 10 }, { "p": "p:samimiyet", "d": 2 }] },
  { "id": "mvls11lotion", "title": "Lotion Massage", "cat": "c:mvlesfp01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["lezbiyen"], "desc": "Losyonla sırtını ovar, elleri yanlardan göğüslerine kayar", "color": "#f06292", "emojis": "🧴💆‍♀️", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 10 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvls12pillow", "title": "Pillow Grind", "cat": "c:mvlesfp01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["lezbiyen"], "desc": "Yastığın üstünde seni izlerken kendini sürter, sonra \"sıra sende\" der", "color": "#f06292", "emojis": "🛏️🔥", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 20 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvls13taste", "title": "Finger Taste", "cat": "c:mvlesfp01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["lezbiyen"], "desc": "Parmağını içinde gezdirir, çıkarıp gözlerinin içine bakarak yalar", "color": "#f06292", "emojis": "☝️👅", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 15 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvls14whisper", "title": "Whisper Wishes", "cat": "c:mvlesfp01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["lezbiyen"], "desc": "Kulağına bu gece sana ne yapacağını tek tek fısıldar", "color": "#f06292", "emojis": "👂🤫", "onEffects": [{ "p": "p:sehvet", "d": 10 }] },
  { "id": "mvls15hair", "title": "Hair Pull Kiss", "cat": "c:mvlesfp01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["lezbiyen"], "desc": "Saçını hafifçe çekip başını geriye yatırır, boğazını öper", "color": "#f06292", "emojis": "💇‍♀️🔥", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 10 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvls16swap", "title": "Clothes Swap", "cat": "c:mvlesfp01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["lezbiyen"], "desc": "Kıyafetlerinizi değiştirirsiniz; yarı yolda soyunmaktan vazgeçemezsiniz", "color": "#f06292", "emojis": "👗🔄", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 5 }, { "p": "p:samimiyet", "d": 2 }] },
  { "id": "mvls17toy", "title": "Toy Reveal", "cat": "c:mvlesfp01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["lezbiyen"], "desc": "Çekmeceden bir oyuncak çıkarır: \"bunu birlikte denemek istiyordum\"", "color": "#f06292", "emojis": "🎁💜", "onEffects": [{ "p": "p:sehvet", "d": 10 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvls18ice", "title": "Ice Trail", "cat": "c:mvlesfp01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["lezbiyen"], "desc": "Buz küpünü göğüslerinden göbeğine kadar gezdirir, arkasından dili gelir", "color": "#f06292", "emojis": "🧊💧", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 15 }] },
  { "id": "mvls19strap", "title": "Strap Fitting", "cat": "c:mvlesfp01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["lezbiyen"], "desc": "Strap-on'u takarken kemerleri sıkmasına yardım edersin", "color": "#f06292", "emojis": "🔗💜", "onEffects": [{ "p": "p:sehvet", "d": 10 }] },
  { "id": "mvls20sitask", "title": "Face Sitting Ask", "cat": "c:mvlesfp01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["lezbiyen"], "desc": "\"Yüzüme otur\" der, utanmana fırsat vermeden kalçanı çeker", "color": "#f06292", "emojis": "👑😳", "onEffects": [{ "p": "p:sehvet", "d": 10 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvls31sciss", "title": "Scissor Finish", "cat": "c:mvlesfin01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["lezbiyen"], "desc": "Bacaklarınız birbirine geçmiş, aynı ritimde sürtünürken birlikte gelirsiniz", "color": "#ab47bc", "emojis": "✂️🌊", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:samimiyet", "d": 2 }] },
  { "id": "mvls32tongue", "title": "Tongue Finish", "cat": "c:mvlesfin01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["lezbiyen"], "desc": "Dili durmadan seni sona getirir; titrerken bile bırakmaz", "color": "#ab47bc", "emojis": "👅💥", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:samimiyet", "d": 1 }] },
  { "id": "mvls33curl", "title": "Fingers Curl", "cat": "c:mvlesfin01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["lezbiyen"], "desc": "İki parmağı içinde \"gel\" hareketiyle kıvrılır, seni sırılsıklam bitirir", "color": "#ab47bc", "emojis": "☝️🌀", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:samimiyet", "d": 1 }] },
  { "id": "mvls34squirt", "title": "Squirt Surprise", "cat": "c:mvlesfin01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["lezbiyen"], "desc": "Beklemediğin anda fışkırırsın; o ise yüzünü silip gülerek devam etmek ister", "color": "#ab47bc", "emojis": "💦😲", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvls35squirther", "title": "Squirt On Her", "cat": "c:mvlesfin01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["lezbiyen"], "desc": "Yüzüne oturmuşken gelirsin, ıslaklık çenesinden boynuna akar", "color": "#ab47bc", "emojis": "💦👩", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvls3669", "title": "Mutual 69", "cat": "c:mvlesfin01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["lezbiyen"], "desc": "69'da ikiniz de birbirinizi aynı anda sona taşırsınız", "color": "#ab47bc", "emojis": "♋💞", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:umvjzd17hys1oy", "d": -30 }] },
  { "id": "mvls37facesit", "title": "Face Sit Ride", "cat": "c:mvlesfin01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["lezbiyen"], "desc": "Yüzünde gidip gelirken baldırlarını sıkıca tutar, sen titreyerek gelirsin", "color": "#ab47bc", "emojis": "👑🌊", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvls38grind", "title": "Grind Thigh", "cat": "c:mvlesfin01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["lezbiyen"], "desc": "Uyluğuna sürtünerek gelir, ıslak izi tenin üstünde kalır", "color": "#ab47bc", "emojis": "🦵🔥", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": -40 }, { "p": "p:samimiyet", "d": 1 }] },
  { "id": "mvls39breast", "title": "Breast Grind Finish", "cat": "c:mvlesfin01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["lezbiyen"], "desc": "Göğüslerini göğüslerine sürterken elleri aşağıda; ikiniz aynı anda", "color": "#ab47bc", "emojis": "🍒💫", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:umvjzd17hys1oy", "d": -30 }] },
  { "id": "mvls40strap", "title": "Strap-On Finish", "cat": "c:mvlesfin01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["lezbiyen"], "desc": "Strap-on'la arkandan alırken klitorisini ovar, seni duvara yapışık bitirir", "color": "#ab47bc", "emojis": "🔗💜", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvls41double", "title": "Toy Double", "cat": "c:mvlesfin01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["lezbiyen"], "desc": "Çift taraflı oyuncak ikinizin içinde; kim önce gelirse kaybeder", "color": "#ab47bc", "emojis": "💜💜", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:umvjzd17hys1oy", "d": -30 }] },
  { "id": "mvls42vibe", "title": "Vibrator Hold", "cat": "c:mvlesfin01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["lezbiyen"], "desc": "Vibratörü sana bastırıp kaçmana izin vermez; bacakların titreyerek gelirsin", "color": "#ab47bc", "emojis": "📳🫦", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvls43chain", "title": "Chain Orgasm", "cat": "c:mvlesfin01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["lezbiyen"], "desc": "Bir orgazmdan sonra durmaz; ikinci, üçüncü… sen \"yeter\" diyene kadar", "color": "#ab47bc", "emojis": "🔁💥", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 3 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvls44edge", "title": "Edge Release", "cat": "c:mvlesfin01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["lezbiyen"], "desc": "Uzun süre son anda durdurur, sonunda izin verdiğinde dalga dalga gelirsin", "color": "#ab47bc", "emojis": "🛑🌊", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvls45kiss", "title": "Kiss Through It", "cat": "c:mvlesfin01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["lezbiyen"], "desc": "Gelirken seni öper, iniltini ağzının içinde yutar", "color": "#ab47bc", "emojis": "💋🌊", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:ask", "d": 1 }] },
  { "id": "mvls46shower", "title": "Shower Wall Finish", "cat": "c:mvlesfin01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["lezbiyen"], "desc": "Duşta duvara yaslarsın, su ile ıslaklık birbirine karışır", "color": "#ab47bc", "emojis": "🚿🧱", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:umvjzd17hys1oy", "d": -30 }] },
  { "id": "mvls47lick", "title": "Lick Clean", "cat": "c:mvlesfin01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["lezbiyen"], "desc": "Bitince seni yalayarak temizler, her dokunuşta yeniden irkilirsin", "color": "#ab47bc", "emojis": "👅✨", "onEffects": [{ "p": "p:samimiyet", "d": 2 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvls48share", "title": "Taste Share", "cat": "c:mvlesfin01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["lezbiyen"], "desc": "Senin tadını dudaklarında taşıyıp seni öpmeye gelir", "color": "#ab47bc", "emojis": "💋💦", "onEffects": [{ "p": "p:samimiyet", "d": 2 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvls49hand", "title": "Hand Hold Finish", "cat": "c:mvlesfin01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["lezbiyen"], "desc": "Parmaklarınız kenetli, alınlar değerken sessizce birlikte gelirsiniz", "color": "#ab47bc", "emojis": "🤝💞", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:ask", "d": 2 }] },
  { "id": "mvls50laugh", "title": "Wet Sheet Laugh", "cat": "c:mvlesfin01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["lezbiyen"], "desc": "Çarşaf sırılsıklam; ikiniz de nefes nefese gülmeye başlarsınız", "color": "#ab47bc", "emojis": "🛏️😂", "onEffects": [{ "p": "p:samimiyet", "d": 3 }, { "p": "p:ask", "d": 1 }] },
  { "id": "mvlg01tribmis", "title": "Tribbing Missionary", "cat": "c:mvlessex01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["lezbiyen", "sürtünme"], "desc": "Üstüne uzanır, kasıklarınız yapışık; kalçasıyla yavaş daireler çizer", "color": "#e91e63", "emojis": "👭🔥", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 15 }, { "p": "p:samimiyet", "d": 1 }] },
  { "id": "mvlg02scissor", "title": "Classic Scissor", "cat": "c:mvlessex01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["lezbiyen", "sürtünme"], "desc": "Bacaklarınız çapraz geçer, bileğini tutup onu kendine çekersin", "color": "#e91e63", "emojis": "✂️🦵", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 20 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvlg03cowgrind", "title": "Cowgirl Grind", "cat": "c:mvlessex01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["lezbiyen", "sürtünme"], "desc": "Üstüne oturur, kasığını kasığına bastırıp ileri geri kayar", "color": "#e91e63", "emojis": "🤠🌊", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 20 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvlg04spoonsc", "title": "Spoon Scissor", "cat": "c:mvlessex01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["lezbiyen", "sürtünme"], "desc": "Yan yatarken arkadan bacağını kaldırır, yan yana sürtünürsünüz", "color": "#e91e63", "emojis": "🥄✂️", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 15 }, { "p": "p:ask", "d": 1 }] },
  { "id": "mvlg05leglock", "title": "Leg Lock Grind", "cat": "c:mvlessex01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["lezbiyen", "sürtünme"], "desc": "Bacaklarını beline dolar, kaçamayacağın kadar yakından sürtünür", "color": "#e91e63", "emojis": "🦵🔒", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 15 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvlg06knee", "title": "Knee Ride", "cat": "c:mvlessex01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["lezbiyen", "sürtünme"], "desc": "Dizini bacaklarının arasına koyar; sen dizinin üstünde gidip gelirsin", "color": "#e91e63", "emojis": "🦵🐎", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 10 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvlg07butt", "title": "Butt Grind", "cat": "c:mvlessex01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["lezbiyen", "sürtünme"], "desc": "Yüzüstü yatarken kalçana oturur, ıslaklığını tenine sürer", "color": "#e91e63", "emojis": "🍑🔥", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 20 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvlg08wall", "title": "Wall Thigh Ride", "cat": "c:mvlessex01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["lezbiyen", "sürtünme"], "desc": "Ayakta duvara yaslar, uyluğunu bacaklarının arasına bastırıp kaldırır", "color": "#e91e63", "emojis": "🧱🦵", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 10 }, { "p": "p:sehvet", "d": 10 }] },
  { "id": "mvlg09oil", "title": "Oiled Tribbing", "cat": "c:mvlessex01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["lezbiyen", "sürtünme"], "desc": "Yağlı tenler kayar; her harekette biraz daha hızlanır", "color": "#e91e63", "emojis": "🧴✨", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 20 }, { "p": "p:samimiyet", "d": 1 }] },
  { "id": "mvlg10hand", "title": "Hand Between", "cat": "c:mvlessex01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["lezbiyen", "sürtünme"], "desc": "Elini ikinizin arasına sıkıştırır; sürtündükçe parmakları ikinize de değer", "color": "#e91e63", "emojis": "✋🔥", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 20 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvlg11mirror", "title": "Mirror Grind", "cat": "c:mvlessex01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["lezbiyen", "sürtünme"], "desc": "Aynanın karşısında sürtünürken \"bak bize\" diye çeneni tutar", "color": "#e91e63", "emojis": "🪞🔥", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 15 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvlg12clit", "title": "Slow Clit Kiss", "cat": "c:mvlessex01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["lezbiyen", "sürtünme"], "desc": "Hiç acele etmeden, sadece en hassas yerleriniz birbirine değecek kadar yaklaşır", "color": "#e91e63", "emojis": "💋🌀", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 10 }, { "p": "p:ask", "d": 1 }] },
  { "id": "mvlc01panty", "title": "Panty To Panty", "cat": "c:mvlesfp01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["lezbiyen", "kıyafet", "sürtünme"], "wear": ["tanga", "string", "dantelkulot", "pamukkulot", "transkulot", "boxer"], "desc": "İki külot arası sürtünme; ıslaklık kumaştan geçer", "color": "#f06292", "emojis": "🩲🩲", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 15 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvlc02leggings", "title": "Leggings Scissor", "cat": "c:mvlesfp01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["lezbiyen", "kıyafet", "sürtünme"], "wear": ["tayt", "esofman", "trainerkost"], "desc": "İkiniz de taytlı, dikişler tam ortada buluşur", "color": "#f06292", "emojis": "🩱✂️", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 15 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvlc03jeans", "title": "Jeans Grind", "cat": "c:mvlesfp01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["lezbiyen", "kıyafet", "sürtünme"], "wear": ["kot"], "desc": "Kot dikişini bilerek bastırır, \"çıkarmak yok\" der", "color": "#f06292", "emojis": "👖🔥", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 10 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvlc04skirt", "title": "Skirt Ride", "cat": "c:mvlesfp01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["lezbiyen", "kıyafet", "sürtünme"], "wear": ["mini", "plise", "kalem", "yirtmac", "midi", "yuksekkalem", "derikalem", "ofisyirtmac"], "desc": "Eteğini toplayıp külotlu dizine oturur", "color": "#f06292", "emojis": "👗🦵", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 15 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvlc05pajama", "title": "Pajama Spoon", "cat": "c:mvlesfp01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["lezbiyen", "kıyafet", "sürtünme"], "wear": ["sort", "esofman", "sabahlik"], "desc": "Sabah pijama şortlarıyla kaşık; uyur gibi yapıp kalçasını iter", "color": "#f06292", "emojis": "🌙🩳", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 10 }, { "p": "p:ask", "d": 1 }] },
  { "id": "mvlc06yoga", "title": "Yoga Pants Sit", "cat": "c:mvlesfp01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["lezbiyen", "kıyafet", "sürtünme"], "wear": ["tayt", "trainerkost"], "desc": "Yoga sonrası taytıyla kucağına oturur, terli ve sıcak", "color": "#f06292", "emojis": "🧘🍑", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 15 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvlc07hose", "title": "Pantyhose Tangle", "cat": "c:mvlesfp01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["lezbiyen", "kıyafet", "sürtünme", "bacak"], "wear": ["kulotlu", "file", "tencorap", "dizustu"], "desc": "Külotlu çoraplı bacaklar dolanır, naylon hışırtısı", "color": "#f06292", "emojis": "🧦🕸️", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 10 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvlc08lace", "title": "Lace On Lace", "cat": "c:mvlesfp01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["lezbiyen", "kıyafet", "sürtünme"], "wear": ["dantelkulot", "dantelsutyen", "balkonet", "bralet", "transkulot", "transsutyen"], "desc": "İkiniz de dantel iç çamaşırıyla; dokular birbirine takılır", "color": "#f06292", "emojis": "🖤🖤", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 15 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvlc09satin", "title": "Satin Slip Slide", "cat": "c:mvlesfp01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["lezbiyen", "kıyafet", "sürtünme"], "wear": ["saten", "kombinezon", "sabahlik"], "desc": "Saten geceliği tenin üstünde kayar, altında hiçbir şey yok", "color": "#f06292", "emojis": "🌙✨", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 10 }, { "p": "p:ask", "d": 1 }] },
  { "id": "mvlc10wetshirt", "title": "Wet T-Shirt Grind", "cat": "c:mvlesfp01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["lezbiyen", "kıyafet", "sürtünme"], "wear": ["tisort", "crop", "askili"], "desc": "Islak tişörtler yapışmış, göğüsler kumaşın arkasından sürtünür", "color": "#f06292", "emojis": "👕💦", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 15 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvlc11bikini", "title": "Bikini Grind", "cat": "c:mvlesfp01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["lezbiyen", "kıyafet", "sürtünme"], "wear": ["bikinialt", "bikiniust", "ucgenbikini", "bandeau", "halterbikini", "ipbikini", "pushupbikini", "mikrobikini", "brezilya", "yuksekbel", "iplialt", "mikroalt", "tangabikini", "mayo", "monokini"], "desc": "Havuz kenarında bikinili kucağına oturur, su damlaları arada", "color": "#f06292", "emojis": "👙🏖️", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 15 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvlc12desk", "title": "Uniform Desk Grind", "cat": "c:mvlesfp01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["lezbiyen", "kıyafet", "sürtünme"], "wear": ["ogrencikost", "ofistakim", "plise", "mini", "kalem"], "desc": "Etekli üniformayla masanın kenarına seni oturtup arana girer", "color": "#f06292", "emojis": "🎓🪑", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 15 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvlc13dance", "title": "Dance Floor Grind", "cat": "c:mvlesfp01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["lezbiyen", "kıyafet", "sürtünme"], "wear": ["minielbise", "gece", "sirt", "yirtmacli", "kilif", "yazlik"], "desc": "Kalabalık dans pistinde uyluğunu bacaklarının arasına sokar", "color": "#f06292", "emojis": "💃🔥", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 10 }, { "p": "p:sehvet", "d": 10 }] },
  { "id": "mvlc14couch", "title": "Couch Blanket Grind", "cat": "c:mvlesfp01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["lezbiyen", "kıyafet", "sürtünme"], "wear": ["esofman", "sort", "tayt"], "desc": "Film izlerken battaniyenin altında yavaşça kucağına kayar", "color": "#f06292", "emojis": "🛋️🫣", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 10 }, { "p": "p:samimiyet", "d": 2 }] },
  { "id": "mvlc15dress", "title": "Dress Still On", "cat": "c:mvlesfp01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["lezbiyen", "kıyafet", "sürtünme"], "wear": ["minielbise", "gece", "sirt", "yirtmacli", "kilif", "saten", "yazlik", "triko"], "desc": "Gece dönüşü elbiseler üstünüzde, sabırsızlıktan soyunmaya vakit yok", "color": "#f06292", "emojis": "👗🔥", "onEffects": [{ "p": "p:umvjzd17hys1oy", "d": 15 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvlg31fabric", "title": "Through The Fabric", "cat": "c:mvlesfin01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["lezbiyen", "kıyafet", "sürtünme"], "wear": ["tanga", "string", "dantelkulot", "pamukkulot", "transkulot", "boxer"], "after": ["Panty To Panty", "Lace On Lace", "Skirt Ride", "Satin Slip Slide", "Dress Still On"], "desc": "Giyinik gelirsiniz; iki külotta da ıslak leke kalır", "color": "#ab47bc", "emojis": "🩲🌊", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvlg32wetspot", "title": "Leggings Wet Spot", "cat": "c:mvlesfin01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["lezbiyen", "kıyafet", "sürtünme"], "wear": ["tayt", "esofman", "trainerkost"], "after": ["Leggings Scissor", "Yoga Pants Sit", "Couch Blanket Grind"], "desc": "Taytında koyu bir leke belirir: \"şimdi herkes görecek\"", "color": "#ab47bc", "emojis": "🩱💧", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:samimiyet", "d": 1 }] },
  { "id": "mvlg33cowfin", "title": "Cowgirl Grind Finish", "cat": "c:mvlesfin01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["lezbiyen", "sürtünme"], "after": ["Cowgirl Grind", "Butt Grind", "Yoga Pants Sit"], "desc": "Üstünde hızlanır, sen altında titrerken o da kendini bırakır", "color": "#ab47bc", "emojis": "🤠💥", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:umvjzd17hys1oy", "d": -30 }] },
  { "id": "mvlg34kneefin", "title": "Knee Ride Finish", "cat": "c:mvlesfin01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["lezbiyen", "sürtünme"], "after": ["Knee Ride", "Wall Thigh Ride", "Skirt Ride", "Dance Floor Grind"], "desc": "Dizinde gidip gelirken gelirsin, dizi ıslak kalır", "color": "#ab47bc", "emojis": "🦵💥", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvlg35together", "title": "Tribbing Together", "cat": "c:mvlesfin01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["lezbiyen", "sürtünme"], "after": ["Tribbing Missionary", "Classic Scissor", "Spoon Scissor", "Leg Lock Grind", "Slow Clit Kiss", "Hand Between", "Mirror Grind"], "desc": "Kasıklar yapışık, aynı ritimde aynı anda gelirsiniz", "color": "#ab47bc", "emojis": "👭💞", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:umvjzd17hys1oy", "d": -30 }, { "p": "p:ask", "d": 1 }] },
  { "id": "mvlg36dancefin", "title": "Dance Floor Secret", "cat": "c:mvlesfin01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["lezbiyen", "kıyafet", "sürtünme"], "wear": ["minielbise", "gece", "sirt", "yirtmacli", "kilif", "yazlik"], "after": ["Dance Floor Grind"], "desc": "Pistin ortasında sessizce gelirsin; kimse fark etmez, o fark eder", "color": "#ab47bc", "emojis": "💃🤫", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvlg37blanket", "title": "Blanket Finish", "cat": "c:mvlesfin01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["lezbiyen", "sürtünme"], "after": ["Couch Blanket Grind", "Pajama Spoon", "Spoon Scissor"], "desc": "Battaniyenin altında titrersin, film hâlâ oynuyor", "color": "#ab47bc", "emojis": "🛋️🌊", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:samimiyet", "d": 2 }] },
  { "id": "mvlg38desk", "title": "Desk Edge Finish", "cat": "c:mvlesfin01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["lezbiyen", "sürtünme"], "after": ["Uniform Desk Grind", "Wall Thigh Ride"], "desc": "Masanın kenarında, eteğin beline toplanmış hâlde gelirsin", "color": "#ab47bc", "emojis": "🪑💥", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvlg39oilfin", "title": "Oiled Slip Finish", "cat": "c:mvlesfin01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["lezbiyen", "sürtünme"], "after": ["Oiled Tribbing", "Butt Grind", "Wet T-Shirt Grind", "Bikini Grind"], "desc": "Yağlı tenler kayarken birlikte bitersiniz", "color": "#ab47bc", "emojis": "🧴🌊", "onEffects": [{ "p": "p:umvjy7ucpiosps", "d": 1 }, { "p": "p:umvjzd17hys1oy", "d": -30 }] },
  { "id": "mvlc41stain", "title": "Stain Check", "cat": "c:mvlesaf01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["lezbiyen", "kıyafet"], "desc": "Lekeleri kontrol eder, ikiniz de kahkaha atarsınız", "color": "#7e57c2", "emojis": "🔍😂", "onEffects": [{ "p": "p:samimiyet", "d": 2 }, { "p": "p:ask", "d": 1 }] },
  { "id": "mvlc42swap", "title": "Panty Swap", "cat": "c:mvlesaf01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["lezbiyen", "kıyafet"], "desc": "Islak külotları değiştirirsiniz: \"bugün benimkini giy\"", "color": "#7e57c2", "emojis": "🩲🔄", "onEffects": [{ "p": "p:samimiyet", "d": 2 }, { "p": "p:sehvet", "d": 5 }] },
  { "id": "mvlc43skirt", "title": "Fix Your Skirt", "cat": "c:mvlesaf01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["lezbiyen", "kıyafet"], "desc": "Eteğini düzeltir, saçını toplar, dudağına son bir öpücük kondurur", "color": "#7e57c2", "emojis": "👗🤍", "onEffects": [{ "p": "p:ask", "d": 2 }, { "p": "p:guven", "d": 1 }] },
  { "id": "mvlc44laundry", "title": "Laundry Together", "cat": "c:mvlesaf01x", "text": "", "steps": [], "opener": "", "starter": "", "tones": [], "note": "", "part": "", "when": "", "place": "", "mix": [], "tags": ["lezbiyen", "kıyafet"], "desc": "Lekeli kıyafetleri birlikte makineye atarsınız", "color": "#7e57c2", "emojis": "🧺👭", "onEffects": [{ "p": "p:samimiyet", "d": 3 }] }
 ],
 "places": [],
 "scenarios": [
  {
   "id": "mvjuq2gkl4g0t",
   "title": "Yeni senaryo",
   "chars": [],
   "part": "",
   "day": "",
   "season": "",
   "timeNote": "",
   "place": "",
   "placeName": "",
   "placeIcon": "",
   "events": [],
   "created": 1792692324596
  },
  {
   "id": "mvjthr2ebcq1b",
   "title": "Yeni senaryo",
   "chars": [],
   "part": "",
   "day": "",
   "season": "",
   "timeNote": "",
   "place": "",
   "placeName": "",
   "placeIcon": "",
   "events": [
    {
     "id": "mvjti2fahpywy",
     "src": "mvgth2g0puosh",
     "title": "Squirt",
     "cat": "c:mvgtgdbp6e8xv",
     "steps": [],
     "tones": [],
     "mix": [],
     "tags": [],
     "color": "#5f8bff",
     "emojis": "👅💦",
     "text": ""
    },
    {
     "id": "mvjtig9fn1yfs",
     "src": "mvgu4y0tl5jpn",
     "title": "Vaginal Creampie",
     "cat": "c:mvgu3rsuko7km",
     "steps": [],
     "tones": [],
     "mix": [],
     "tags": [],
     "color": "#5f8bff",
     "emojis": "💦",
     "outcomes": [
      {
       "id": "mvjixvrbsc3zl",
       "text": "{ben} hamile kaldı",
       "pct": 50,
       "next": "",
       "effects": [
        {
         "p": "f:hamile",
         "d": 1
        }
       ],
       "conds": [
        {
         "k": "not",
         "ev": "mvh1h70jral7v"
        }
       ]
      }
     ],
     "subs": [],
     "text": ""
    }
   ],
   "created": 1792690256966,
   "cover": "characters/Defne/01be3a5ed966923255222dd491d1f006.jpg"
  },
  {
   "id": "mvjoa2yikryj2",
   "title": "🏕️ Kampta",
   "chars": [
    "mvjjbzrrfw8s6"
   ],
   "part": "gece",
   "day": "Tatil günü",
   "season": "",
   "timeNote": "",
   "place": "kamp",
   "placeName": "",
   "placeIcon": "",
   "events": [
    {
     "id": "mvjoa2yiwmkd3",
     "src": "mvgmfjwle8osk",
     "title": "Show Tits",
     "cat": "c:mvgm5g7q1xopl",
     "steps": [],
     "tones": [],
     "mix": [],
     "tags": [],
     "color": "#5f8bff",
     "emojis": "🤩🍒",
     "text": ""
    },
    {
     "id": "mvjoa2yit1e6d",
     "src": "mvgvtw4qycpem",
     "title": "Passionate",
     "cat": "c:mvgvrcewukjlt",
     "steps": [],
     "tones": [],
     "mix": [],
     "tags": [],
     "color": "#ff6fa8",
     "emojis": "🥰",
     "text": ""
    },
    {
     "id": "mvjoa2yi5licx",
     "src": "b:genel:Doğruluk mu cesaret mi",
     "title": "Doğruluk mu cesaret mi",
     "text": "{ben} doğruluk mu cesaret mi oynamak istiyor.",
     "cat": "genel"
    }
   ],
   "created": 1792681501050
  },
  {
   "id": "mvjl647gw8z72",
   "title": "🏖️ Tatilde",
   "chars": [
    "mvjjbzrrfw8s6"
   ],
   "part": "gece",
   "day": "Yılbaşı",
   "season": "",
   "timeNote": "",
   "place": "tatil",
   "placeName": "",
   "placeIcon": "",
   "events": [
    {
     "id": "mvjlgcxmixhwr",
     "src": "mvgx7acjikwgv",
     "title": "Squirt Milk",
     "cat": "c:mvgwupu3we8yl",
     "steps": [],
     "tones": [],
     "mix": [],
     "tags": [],
     "color": "#8b5cf6",
     "emojis": "🍒💦",
     "text": ""
    },
    {
     "id": "mvjlgdt5qf1cs",
     "src": "mvgu0061fziue",
     "title": "Reverse Titfuck",
     "cat": "c:mvgn2ubfw2eoh",
     "steps": [],
     "tones": [],
     "mix": [],
     "tags": [],
     "color": "#c86bff",
     "emojis": "🍒",
     "text": ""
    },
    {
     "id": "mvjlge6elja0t",
     "src": "b:extra:Exhibitionism",
     "title": "Exhibitionism",
     "cat": "extra",
     "text": ""
    },
    {
     "id": "mvjlgejp7sw2b",
     "src": "mvgx27px2ab58",
     "title": "High-volume Woter",
     "cat": "c:mvgwupu3we8yl",
     "steps": [],
     "tones": [],
     "mix": [],
     "tags": [],
     "color": "#5f8bff",
     "emojis": "🍒💦",
     "text": ""
    }
   ],
   "created": 1792676277196
  }
 ],
 "groups": [],
 "tags": {
  "scenario": [],
  "event": [
   "penetrasyon",
   "anal",
   "oral",
   "sürtme",
   "kondom",
   "ön_sevişme",
   "vajinal",
   "bacak",
   "göğüs",
   "kalça",
   "el",
   "boşalma",
   "orgazm",
   "roleplay",
   "kıyafet",
   "yalama"
  ]
 },
 "cats": [
  {
   "id": "c:mvglvwdtam0h7",
   "icon": "🔥",
   "label": "Forward",
   "tags": [
    "event"
   ]
  },
  {
   "id": "c:mvglyw2ax79uj",
   "icon": "🎾",
   "label": "Protection",
   "tags": [
    "if"
   ]
  },
  {
   "id": "c:mvgm5g7q1xopl",
   "icon": "💋",
   "label": "Foreplay",
   "tags": [
    "event"
   ]
  },
  {
   "id": "c:mvgm9ihwda8f5",
   "icon": "🍑",
   "label": "Backward",
   "tags": [
    "event"
   ]
  },
  {
   "id": "c:mvgn2ubfw2eoh",
   "icon": "🍌",
   "label": "Outercourse",
   "tags": [
    "event"
   ]
  },
  {
   "id": "c:mvgtgdbp6e8xv",
   "icon": "👅",
   "label": "Eat",
   "tags": [
    "event"
   ]
  },
  {
   "id": "c:mvgu3rsuko7km",
   "icon": "💦",
   "label": "Cumming",
   "tags": [
    "result"
   ]
  },
  {
   "id": "c:mvguxicvzx0iq",
   "icon": "💧",
   "label": "Cumming Size",
   "tags": []
  },
  {
   "id": "c:mvgvrcewukjlt",
   "icon": "💥",
   "label": "Mode",
   "tags": []
  },
  {
   "id": "c:mvdrinks01x",
   "icon": "🍷",
   "label": "Drinks",
   "tags": []
  },
  {
   "id": "c:mvtreat01x",
   "icon": "🩺",
   "label": "Treatment",
   "tags": []
  },
  {
   "id": "c:mvfemdom01x",
   "icon": "👑",
   "label": "Femdom",
   "tags": [
    "event"
   ]
  },
  {
   "id": "c:mvgwj75108lqd",
   "icon": "🦄",
   "label": "Fantesy",
   "tags": [
    "fantesy"
   ]
  },
  {
   "id": "c:mvmeisove01x",
   "icon": "🍓",
   "label": "Meisove",
   "tags": [
    "fantesy"
   ]
  },
  {
   "id": "c:mvgwupu3we8yl",
   "icon": "🍒",
   "label": "Lactation",
   "tags": []
  },
  { "id": "c:mvlacfant01x", "icon": "🍼", "label": "Lactation Fantasy", "tags": ["fantesy"] },
  { "id": "c:mvnursing01x", "icon": "🤱", "label": "Nursing", "tags": [] },
  {
   "id": "c:mvh0zv4nv7f1i",
   "icon": "💦",
   "label": "Pre-cumming",
   "tags": []
  },
  {
   "id": "c:mvs1massage0z",
   "icon": "💆",
   "label": "Massage",
   "tags": [
    "event"
   ]
  },
  {
   "id": "c:mvpee01x",
   "icon": "🚿",
   "label": "Pee",
   "tags": [
    "event"
   ]
  },
  {
   "id": "c:mvshower01x",
   "icon": "🧼",
   "label": "Shower",
   "tags": [
    "event"
   ]
  },
  {
   "id": "c:mvsauna01x",
   "icon": "🧖‍♀️",
   "label": "Sauna",
   "tags": [
    "event"
   ]
  },
  {
   "id": "c:mvcooldown01x",
   "icon": "❄️",
   "label": "Cool Down",
   "tags": []
  },
  { "id": "c:mvbdsm01x", "icon": "🔗", "label": "BDSM", "tags": ["event"] },
  { "id": "c:mvthreesome01x", "icon": "👯", "label": "Threesome", "tags": ["event"] },
  { "id": "c:mvtub01x", "icon": "🛁", "label": "Bathtub", "tags": ["event"] },
  { "id": "c:mvpool01x", "icon": "🏖️", "label": "Pool", "tags": ["event"] },
  { "id": "c:mvcar01x", "icon": "🚗", "label": "Car", "tags": ["event"] },
  { "id": "c:mvlift01x", "icon": "🛗", "label": "Elevator", "tags": ["event"] },
  { "id": "c:mvcamp01x", "icon": "🏕️", "label": "Camping", "tags": ["event"] },
  { "id": "c:mvkitchen01x", "icon": "🍳", "label": "Kitchen", "tags": ["event"] },
  { "id": "c:mvstairs01x", "icon": "🪜", "label": "Stairs", "tags": ["event"] },
  { "id": "c:mvlaundry01x", "icon": "🧺", "label": "Laundry", "tags": ["event"] },
  { "id": "c:mvbalcony01x", "icon": "🌇", "label": "Balcony", "tags": ["event"] },
  { "id": "c:mvcam01x", "icon": "🎥", "label": "Camera", "tags": ["event"] },
  { "id": "c:mvbeach01x", "icon": "🏝️", "label": "Beach", "tags": ["event"] },
  { "id": "c:mvoffice01x", "icon": "🏢", "label": "Office", "tags": ["event"] },
  { "id": "c:mvhotel01x", "icon": "🏨", "label": "Hotel", "tags": ["event"] },
  { "id": "c:mvschool01x", "icon": "🎓", "label": "School", "tags": ["event"] },
  { "id": "c:mvchurch01x", "icon": "⛪", "label": "Church", "tags": ["event"] },
  { "id": "c:mvgym01x", "icon": "🏋️", "label": "Gym", "tags": ["event"] },
  { "id": "c:mvmsalon01x", "icon": "💆", "label": "Massage Salon", "tags": ["event"] },
  { "id": "c:mvclinic01x", "icon": "🏥", "label": "Clinic", "tags": ["event"] },
  { "id": "c:mvbar01x", "icon": "🍸", "label": "Bar", "tags": ["event"] },
  { "id": "c:mvcinema01x", "icon": "🎬", "label": "Cinema", "tags": ["event"] },
  { "id": "c:mvoutdoors01x", "icon": "🌳", "label": "Outdoors", "tags": ["event"] },
  { "id": "c:mvrestaurant01x", "icon": "🍽️", "label": "Restaurant", "tags": ["event"] },
  { "id": "c:mvrooftop01x", "icon": "🌃", "label": "Rooftop", "tags": ["event"] },
  { "id": "c:mvlibrary01x", "icon": "📚", "label": "Library", "tags": ["event"] },
  { "id": "c:mvfair01x", "icon": "🎡", "label": "Fair", "tags": ["event"] },
  { "id": "c:mvhaunted01x", "icon": "👻", "label": "Haunted", "tags": ["event"] },
  { "id": "c:mvstreet01x", "icon": "🌧️", "label": "Street", "tags": ["event"] },
  { "id": "c:mvundress01x", "icon": "👗", "label": "Undress", "tags": [] },
  { "id": "c:mvatplace01x", "icon": "📍", "label": "Mekanda", "tags": [] },
  {
   "id": "c:mvbull01x",
   "icon": "🐂",
   "label": "Bull",
   "tags": [
    "event"
   ]
  },
  {
   "id": "c:mvbullstory01x",
   "icon": "💍",
   "label": "Bull Story",
   "tags": []
  },
  { "id": "c:mvaffair01x", "icon": "🐍", "label": "Affair", "tags": ["event"] },
  { "id": "c:mvaffairstory01x", "icon": "🕵️", "label": "Affair Story", "tags": [] },
  { "id": "c:mvpregfp01x", "icon": "💞", "label": "Pregnancy Foreplay", "tags": [] },
  { "id": "c:mvpreg01x", "icon": "🤰", "label": "Pregnancy", "tags": ["event"] },
  { "id": "c:mvmilkcumfp01x", "icon": "🥛", "label": "Milky Foreplay", "tags": [] },
  { "id": "c:mvmilkcum01x", "icon": "🍼", "label": "Milky Sex", "tags": ["event"] },
  { "id": "c:mvsqueeze01x", "icon": "🗜️", "label": "Squeeze", "tags": ["event"] },
  { "id": "c:mvmilkcumaf01x", "icon": "🧻", "label": "Milky After", "tags": [] },
  { "id": "c:mvlesfp01x", "icon": "👩‍❤️‍👩", "label": "Lesbian Foreplay", "tags": ["event"] },
  { "id": "c:mvlessex01x", "icon": "✂️", "label": "Lesbian Sex", "tags": ["event"] },
  { "id": "c:mvlesfin01x", "icon": "🌊", "label": "Lesbian Finish", "tags": [] },
  { "id": "c:mvlesaf01x", "icon": "🌙", "label": "Lesbian After", "tags": [] }
 ],
 "catEdits": {},
 "charFields": [
  {
   "id": "hamile",
   "icon": "🤰",
   "label": "Hamile",
   "type": "toggle"
  },
  {
   "id": "bakire",
   "icon": "🌸",
   "label": "Bakire",
   "type": "toggle"
  },
  {
   "id": "korunma",
   "icon": "🛡️",
   "label": "Korunma",
   "type": "toggle"
  },
  {
   "id": "evli",
   "icon": "💍",
   "label": "Evli",
   "type": "toggle"
  },
  {
   "id": "hotwife",
   "icon": "🐂",
   "label": "Hotwife",
   "type": "toggle"
  },
  {
   "id": "dogurganlik",
   "icon": "🌱",
   "label": "Doğurganlık",
   "type": "range",
   "min": 0,
   "max": 100,
   "start": 50,
   "unit": "%"
  }
 ],
 "evGroups": [],
 "params": [
  {
   "id": "guven",
   "icon": "🤝",
   "label": "Güven",
   "min": 0,
   "max": 100,
   "start": 20
  },
  {
   "id": "samimiyet",
   "icon": "🫂",
   "label": "Samimiyet",
   "min": 0,
   "max": 100,
   "start": 10
  },
  {
   "id": "ask",
   "icon": "❤️",
   "label": "Aşk",
   "min": 0,
   "max": 100,
   "start": 0
  },
  {
   "id": "sehvet",
   "icon": "🔥",
   "label": "Şehvet",
   "min": 0,
   "max": 100,
   "start": 0
  },
  {
   "id": "kiskanclik",
   "icon": "😤",
   "label": "Kıskançlık",
   "min": 0,
   "max": 100,
   "start": 0
  },
  {
   "id": "umvjoe339asss4",
   "icon": "🥴",
   "label": "Zevk",
   "min": 0,
   "max": 100,
   "start": 0,
   "who": "me"
  },
  {
   "id": "umvjof3wzh5hej",
   "icon": "💦",
   "label": "Cum",
   "min": 0,
   "max": 100,
   "start": 100,
   "who": "me"
  },
  {
   "id": "umvjy7ucpiosps",
   "icon": "🔁",
   "label": "Cumming sayısı",
   "min": 0,
   "max": 20,
   "start": 0,
   "who": "me"
  },
  {
   "id": "umvjzd17hys1oy",
   "icon": "💗",
   "label": "Uyarılma",
   "min": 0,
   "max": 100,
   "start": 0
  },
  {
   "id": "umvjzd17h5twc2",
   "icon": "🍼",
   "label": "Süt",
   "min": 0,
   "max": 100,
   "start": 30
  },
  { "id": "sutkalite", "icon": "🥛", "label": "Süt Kalitesi", "min": 0, "max": 100, "start": 50 },
  {
   "id": "umvl2lpjpbiqzo",
   "icon": "😣",
   "label": "Acı",
   "min": 0,
   "max": 100,
   "start": 0
  },
  {
   "id": "sarhos",
   "icon": "🍷",
   "label": "Sarhoşluk",
   "min": 0,
   "max": 100,
   "start": 0
  },
  { "id": "suphe", "icon": "🕵️", "label": "Şüphe", "min": 0, "max": 100, "start": 0 },
  { "id": "ihlal", "icon": "📜", "label": "Kural İhlali", "min": 0, "max": 10, "start": 0 }
 ],
 "triggers": [
  {
   "id": "mvjw5mggh7giz",
   "p": "p:umvjoe339asss4",
   "op": ">=",
   "v": 80,
   "ev": "match:c:mvgu3rsuko7km",
   "effects": [
    {
     "p": "p:umvjoe339asss4",
     "d": -100
    }
   ]
  },
  {
   "id": "mvjzd17h65yt1",
   "p": "p:umvjzd17hys1oy",
   "op": ">=",
   "v": 80,
   "ev": "mvjzd17h6h94v",
   "effects": [
    {
     "p": "p:umvjzd17hys1oy",
     "d": -100
    }
   ]
  },
  {
   "id": "mvdrtrgpass1",
   "p": "p:sarhos",
   "op": ">=",
   "v": 95,
   "ev": "mvdr11passot",
   "effects": [
    {
     "p": "p:sarhos",
     "d": -45
    }
   ]
  }
 ],
 "catOrder": [
  "c:mvglyw2ax79uj",
  "c:mvgm5g7q1xopl",
  "c:mvs1massage0z",
  "c:mvdrinks01x",
  "c:mvundress01x",
  "c:mvatplace01x",
  "c:mvglvwdtam0h7",
  "c:mvgm9ihwda8f5",
  "c:mvgn2ubfw2eoh",
  "c:mvgtgdbp6e8xv",
  "c:mvgu3rsuko7km",
  "c:mvfemdom01x",
  "c:mvbdsm01x",
  "c:mvshower01x",
  "c:mvsauna01x",
  "c:mvcooldown01x",
  "c:mvthreesome01x",
  "c:mvbull01x",
  "c:mvbullstory01x",
  "c:mvpee01x",
  "c:mvtub01x",
  "c:mvpool01x",
  "c:mvcar01x",
  "c:mvlift01x",
  "c:mvcamp01x",
  "c:mvkitchen01x",
  "c:mvstairs01x",
  "c:mvlaundry01x",
  "c:mvbalcony01x",
  "c:mvcam01x",
  "c:mvbeach01x",
  "c:mvoffice01x",
  "c:mvhotel01x",
  "c:mvschool01x",
  "c:mvguxicvzx0iq",
  "c:mvgvrcewukjlt",
  "c:mvgwj75108lqd",
  "c:mvmeisove01x",
  "c:mvpregfp01x",
  "c:mvpreg01x",
  "c:mvmilkcumfp01x",
  "c:mvmilkcum01x",
  "c:mvmilkcumaf01x",
  "c:mvlesfp01x",
  "c:mvlessex01x",
  "c:mvlesfin01x",
  "c:mvlesaf01x",
  "c:mvgwupu3we8yl",
  "c:mvh0zv4nv7f1i",
  "mine"
 ],
 "crRules": [
  {
   "id": "mvjotftphm9b3",
   "ifs": [
    "Experience: Virgo"
   ],
   "not": [
    "Pussy Size: Very Loose",
    "Pussy Size: Loose",
    "Pussy Size: Relaxed",
    "Pussy Size: Average",
    "Pussy Size: Tight",
    "Pussy Size: Very Tight",
    "Anal Size: Very Loose",
    "Anal Size: Loose",
    "Anal Size: Relaxed",
    "Anal Size: Average",
    "Anal Size: Tight",
    "Anal Size: Very Tight"
   ]
  },
  {
   "id": "mvjovv9h0m0p6",
   "ifs": [
    "Experience: Great"
   ],
   "not": [
    "Pussy Size: Extremely Tight",
    "Pussy Size: Tight"
   ]
  }
 ],
 "sharedOuts": [
  {
   "id": "mvl2lpjl6tdav",
   "title": "Foreplay ısınma",
   "evs": [
    "mvgkvtgs4970g",
    "mvgm83nsm79yh",
    "mvgm8lhd7fl09",
    "mvgmfjwle8osk",
    "mvgmgauadwb9f",
    "mvgtw38q47zl0"
   ],
   "ctags": [],
   "outs": [
    {
     "id": "mvl2lpjlrd1t8",
     "text": "",
     "pct": 60,
     "effects": [
      {
       "p": "p:umvjoe339asss4",
       "d": 1
      }
     ]
    },
    {
     "id": "mvl2lpjlko2se",
     "text": "",
     "pct": 30,
     "effects": [
      {
       "p": "p:umvjoe339asss4",
       "d": 2
      }
     ]
    },
    {
     "id": "mvl2lpjlnlu7x",
     "text": "",
     "pct": 10,
     "effects": [
      {
       "p": "p:umvjoe339asss4",
       "d": 3
      }
     ]
    }
   ]
  },
  {
   "id": "mvjv3iiyvtlef",
   "title": "Cumming",
   "evs": [],
   "ctags": [
    "result"
   ],
   "outs": [
    {
     "id": "mvjv3iiyhywva",
     "text": "",
     "pct": 20,
     "next": "",
     "effects": [
      {
       "p": "p:umvjof3wzh5hej",
       "d": -10
      }
     ]
    },
    {
     "id": "mvjv4ws57tmy6",
     "text": "",
     "pct": 20,
     "next": "",
     "effects": [
      {
       "p": "p:umvjof3wzh5hej",
       "d": -20
      }
     ]
    },
    {
     "id": "mvjv58xjtcm4v",
     "text": "",
     "pct": 20,
     "next": "",
     "effects": [
      {
       "p": "p:umvjof3wzh5hej",
       "d": -30
      }
     ]
    },
    {
     "id": "mvjv5gxe4sbz4",
     "text": "",
     "pct": 20,
     "next": "",
     "effects": [
      {
       "p": "p:umvjof3wzh5hej",
       "d": -40
      }
     ]
    },
    {
     "id": "mvjv5ofkamw9r",
     "text": "",
     "pct": 20,
     "next": "",
     "effects": [
      {
       "p": "p:umvjof3wzh5hej",
       "d": -50
      }
     ]
    }
   ]
  },
  {
   "id": "mvjwwxmzg30by",
   "title": "Etiket sonuçları",
   "evs": [],
   "ctags": [
    "event"
   ],
   "outs": [
    {
     "id": "mvjwwxmzere4w",
     "text": "",
     "pct": 100,
     "next": "",
     "effects": [
      {
       "p": "p:umvjoe339asss4",
       "d": 8
      }
     ]
    }
   ]
  }
 ],
 "permCfg": {
  "allow": [
   1,
   3
  ],
  "deny": [
   1,
   3
  ],
  "rules": [
   {
    "id": "mvjucd11jzrrm",
    "ifs": [
     "a:mvglz4rsqnt81"
    ],
    "not": [
     "*d",
     "*a"
    ]
   },
   {
    "id": "mvjucizyc4ht9",
    "ifs": [
     "d:mvglz4rsqnt81"
    ],
    "not": [
     "*a",
     "*d"
    ]
   },
   {
    "id": "mvjudh6lffgrh",
    "ifs": [
     "a:mvgm2puicwzpe"
    ],
    "not": [
     "d:mvglz4rsqnt81"
    ]
   },
   {
    "id": "mvjue0nrd6fo9",
    "ifs": [
     "a:mvgm31460f6iq"
    ],
    "not": [
     "d:mvglz4rsqnt81"
    ]
   },
   {
    "id": "mvjue9b3nanag",
    "ifs": [
     "a:mvh1h70jral7v"
    ],
    "not": [
     "d:mvglz4rsqnt81"
    ]
   }
  ]
 },
 "clock": {
  "on": true,
  "start": "20:00",
  "step": 5,
  "rules": [
   {
    "id": "mvjy7ucrnxuzi",
    "every": "hour",
    "from": "00:00",
    "to": "00:00",
    "p": "p:umvjof3wzh5hej",
    "d": 10
   },
   {
    "id": "mvjy7ucr1na8h",
    "every": "hour",
    "from": "00:00",
    "to": "00:00",
    "p": "p:umvjy7ucpiosps",
    "d": -1
   },
   {
    "id": "mvjzd17ilcm1f",
    "every": "hour",
    "from": "00:00",
    "to": "00:00",
    "p": "p:umvjzd17h5twc2",
    "d": 5
   },
   {
    "id": "mvjzd17i76wxy",
    "every": "hour",
    "from": "00:00",
    "to": "00:00",
    "p": "p:sehvet",
    "d": -5
   },
   {
    "id": "mvl2lpjhaye4g",
    "every": "hour",
    "from": "00:00",
    "to": "00:00",
    "p": "p:kiskanclik",
    "d": -2
   },
   {
    "id": "mvl2lpjp2d1v5",
    "every": "hour",
    "from": "00:00",
    "to": "00:00",
    "p": "p:umvl2lpjpbiqzo",
    "d": -10
   }
  ]
 },
 "bandRules": [
  {
   "id": "mvjy7ucr8l8cj",
   "when": "tag:boşalma",
   "p": "p:umvjof3wzh5hej",
   "bands": [
    {
     "ev": "mvgv5570hd9os",
     "min": 0,
     "max": 14
    },
    {
     "ev": "mvgv5v1k1wum9",
     "min": 15,
     "max": 39
    },
    {
     "ev": "mvgv6hp36aiut",
     "min": 40,
     "max": 69
    },
    {
     "ev": "mvgv781wh6idt",
     "min": 70,
     "max": 89
    },
    {
     "ev": "mvgv7ship92jq",
     "min": 90,
     "max": 100
    }
   ]
  },
  {
   "id": "mvjy7ucrhqb0l",
   "when": "tag:boşalma",
   "p": "p:umvjy7ucpiosps",
   "bands": [
    {
     "ev": "mvgvcln6k69ve",
     "min": 0,
     "max": 0
    },
    {
     "ev": "mvgvbsz440ofl",
     "min": 1,
     "max": 1
    },
    {
     "ev": "mvgv9zekg688s",
     "min": 2,
     "max": 2
    },
    {
     "ev": "mvgvaoxk61cw9",
     "min": 3,
     "max": 4
    },
    {
     "ev": "mvgv9n3cjnh4u",
     "min": 5,
     "max": 20
    }
   ]
  },
  {
   "id": "mvjzd17ibqlqg",
   "when": "tag:orgazm",
   "p": "p:sehvet",
   "bands": [
    {
     "ev": "mvgwzy2jdzfjv",
     "min": 0,
     "max": 19
    },
    {
     "ev": "mvgx0dmh0v58w",
     "min": 20,
     "max": 44
    },
    {
     "ev": "mvgx1ebr66qy1",
     "min": 45,
     "max": 69
    },
    {
     "ev": "mvgx27px2ab58",
     "min": 70,
     "max": 89
    },
    {
     "ev": "mvgx2f834ey9m",
     "min": 90,
     "max": 100
    }
   ]
  },
  {
   "id": "mvjzd17ikjd9y",
   "when": "tag:orgazm",
   "p": "p:umvjzd17h5twc2",
   "if": "f:hamile",
   "bands": [
    {
     "ev": "mvgx5o11ogsyz",
     "min": 10,
     "max": 29
    },
    {
     "ev": "mvgx67ogz2weo",
     "min": 30,
     "max": 49
    },
    {
     "ev": "mvgx6llsufjzr",
     "min": 50,
     "max": 69
    },
    {
     "ev": "mvgx6ygc4cjpt",
     "min": 70,
     "max": 89
    },
    {
     "ev": "mvgx7acjikwgv",
     "min": 90,
     "max": 100
    }
   ]
  }
 ],
 "botOuts": {
  "r_seni_seviyorum": [
   {
    "id": "mvl2lpjt84up0",
    "text": "",
    "pct": 100,
    "effects": [
     {
      "p": "p:ask",
      "d": 3
     }
    ]
   }
  ],
  "r_seviyorum_seni": [
   {
    "id": "mvl2lpjt6w7n8",
    "text": "",
    "pct": 100,
    "effects": [
     {
      "p": "p:ask",
      "d": 3
     }
    ]
   }
  ],
  "r_seni_seviyorum_soguk": [
   {
    "id": "mvl2lpjtonkjz",
    "text": "",
    "pct": 100,
    "effects": [
     {
      "p": "p:ask",
      "d": 3
     }
    ]
   }
  ],
  "r_ozledim": [
   {
    "id": "mvl2lpjtknodf",
    "text": "",
    "pct": 100,
    "effects": [
     {
      "p": "p:ask",
      "d": 2
     },
     {
      "p": "p:samimiyet",
      "d": 1
     }
    ]
   }
  ],
  "r_cmp": [
   {
    "id": "mvl2lpjt2rqna",
    "text": "",
    "pct": 100,
    "effects": [
     {
      "p": "p:ask",
      "d": 2
     },
     {
      "p": "p:samimiyet",
      "d": 1
     }
    ]
   }
  ],
  "r_cmp_utangaç": [
   {
    "id": "mvl2lpjtnytpr",
    "text": "",
    "pct": 100,
    "effects": [
     {
      "p": "p:ask",
      "d": 2
     },
     {
      "p": "p:samimiyet",
      "d": 1
     }
    ]
   }
  ],
  "r_cmp_soğuk": [
   {
    "id": "mvl2lpjts6xg0",
    "text": "",
    "pct": 100,
    "effects": [
     {
      "p": "p:ask",
      "d": 2
     },
     {
      "p": "p:samimiyet",
      "d": 1
     }
    ]
   }
  ],
  "r_cmp_kibirli": [
   {
    "id": "mvl2lpjtvquik",
    "text": "",
    "pct": 100,
    "effects": [
     {
      "p": "p:ask",
      "d": 2
     },
     {
      "p": "p:samimiyet",
      "d": 1
     }
    ]
   }
  ],
  "r_cmp_romantik": [
   {
    "id": "mvl2lpjtsrs5n",
    "text": "",
    "pct": 100,
    "effects": [
     {
      "p": "p:ask",
      "d": 2
     },
     {
      "p": "p:samimiyet",
      "d": 1
     }
    ]
   }
  ],
  "r_cmp_alaycı": [
   {
    "id": "mvl2lpjtl13bw",
    "text": "",
    "pct": 100,
    "effects": [
     {
      "p": "p:ask",
      "d": 2
     },
     {
      "p": "p:samimiyet",
      "d": 1
     }
    ]
   }
  ],
  "r_cmp_duygusal": [
   {
    "id": "mvl2lpjtt6cdw",
    "text": "",
    "pct": 100,
    "effects": [
     {
      "p": "p:ask",
      "d": 2
     },
     {
      "p": "p:samimiyet",
      "d": 1
     }
    ]
   }
  ],
  "r_cmp_flörtöz": [
   {
    "id": "mvl2lpjtuvrjx",
    "text": "",
    "pct": 100,
    "effects": [
     {
      "p": "p:ask",
      "d": 2
     },
     {
      "p": "p:samimiyet",
      "d": 1
     }
    ]
   }
  ],
  "r_cmp_şımarık": [
   {
    "id": "mvl2lpjtvp8uz",
    "text": "",
    "pct": 100,
    "effects": [
     {
      "p": "p:ask",
      "d": 2
     },
     {
      "p": "p:samimiyet",
      "d": 1
     }
    ]
   }
  ],
  "r_cmp_çocuksu": [
   {
    "id": "mvl2lpjtn9uz5",
    "text": "",
    "pct": 100,
    "effects": [
     {
      "p": "p:ask",
      "d": 2
     },
     {
      "p": "p:samimiyet",
      "d": 1
     }
    ]
   }
  ],
  "r_cmp_güvensiz": [
   {
    "id": "mvl2lpjtt59c4",
    "text": "",
    "pct": 100,
    "effects": [
     {
      "p": "p:ask",
      "d": 2
     },
     {
      "p": "p:samimiyet",
      "d": 1
     }
    ]
   }
  ],
  "r_love_romantik": [
   {
    "id": "mvl2lpjtylm7o",
    "text": "",
    "pct": 100,
    "effects": [
     {
      "p": "p:ask",
      "d": 3
     }
    ]
   }
  ],
  "r_love_utangaç": [
   {
    "id": "mvl2lpjt70hlw",
    "text": "",
    "pct": 100,
    "effects": [
     {
      "p": "p:ask",
      "d": 3
     }
    ]
   }
  ],
  "r_love_duygusal": [
   {
    "id": "mvl2lpjtqntp9",
    "text": "",
    "pct": 100,
    "effects": [
     {
      "p": "p:ask",
      "d": 3
     }
    ]
   }
  ],
  "r_love_kibirli": [
   {
    "id": "mvl2lpjtebyuz",
    "text": "",
    "pct": 100,
    "effects": [
     {
      "p": "p:ask",
      "d": 3
     }
    ]
   }
  ],
  "r_love_flörtöz": [
   {
    "id": "mvl2lpjtgwmht",
    "text": "",
    "pct": 100,
    "effects": [
     {
      "p": "p:ask",
      "d": 3
     }
    ]
   }
  ],
  "r_love_çocuksu": [
   {
    "id": "mvl2lpjt19lrz",
    "text": "",
    "pct": 100,
    "effects": [
     {
      "p": "p:ask",
      "d": 3
     }
    ]
   }
  ],
  "r_rude": [
   {
    "id": "mvl2lpjtfougb",
    "text": "",
    "pct": 100,
    "effects": [
     {
      "p": "p:guven",
      "d": -3
     },
     {
      "p": "p:ask",
      "d": -1
     }
    ]
   }
  ],
  "r_rude_duygusal": [
   {
    "id": "mvl2lpjtra670",
    "text": "",
    "pct": 100,
    "effects": [
     {
      "p": "p:guven",
      "d": -3
     },
     {
      "p": "p:ask",
      "d": -1
     }
    ]
   }
  ],
  "r_rude_asi": [
   {
    "id": "mvl2lpjthgjmv",
    "text": "",
    "pct": 100,
    "effects": [
     {
      "p": "p:guven",
      "d": -3
     },
     {
      "p": "p:ask",
      "d": -1
     }
    ]
   }
  ],
  "r_rude_kibirli": [
   {
    "id": "mvl2lpjtydxek",
    "text": "",
    "pct": 100,
    "effects": [
     {
      "p": "p:guven",
      "d": -3
     },
     {
      "p": "p:ask",
      "d": -1
     }
    ]
   }
  ],
  "r_rude_soğuk": [
   {
    "id": "mvl2lpjtvqqvx",
    "text": "",
    "pct": 100,
    "effects": [
     {
      "p": "p:guven",
      "d": -3
     },
     {
      "p": "p:ask",
      "d": -1
     }
    ]
   }
  ],
  "r_rude_utangaç": [
   {
    "id": "mvl2lpjt7eu70",
    "text": "",
    "pct": 100,
    "effects": [
     {
      "p": "p:guven",
      "d": -3
     },
     {
      "p": "p:ask",
      "d": -1
     }
    ]
   }
  ],
  "r_rude_alaycı": [
   {
    "id": "mvl2lpjth5egl",
    "text": "",
    "pct": 100,
    "effects": [
     {
      "p": "p:guven",
      "d": -3
     },
     {
      "p": "p:ask",
      "d": -1
     }
    ]
   }
  ],
  "r_ans_k_sevgi_evet": [
   {
    "id": "mvl2lpjtczkub",
    "text": "",
    "pct": 100,
    "effects": [
     {
      "p": "p:ask",
      "d": 3
     }
    ]
   }
  ],
  "r_ans_k_sevgi_hayir": [
   {
    "id": "mvl2lpjtex0mc",
    "text": "",
    "pct": 100,
    "effects": [
     {
      "p": "p:ask",
      "d": -3
     },
     {
      "p": "p:guven",
      "d": -1
     }
    ]
   }
  ],
  "r_cmp_yer_meme": [
   {
    "id": "mvl2lpjttz5l4",
    "text": "",
    "pct": 100,
    "effects": [
     {
      "p": "p:ask",
      "d": 2
     },
     {
      "p": "p:samimiyet",
      "d": 1
     }
    ]
   }
  ],
  "r_cmp_yer_meme_0": [
   {
    "id": "mvl2lpjtm4gq6",
    "text": "",
    "pct": 100,
    "effects": [
     {
      "p": "p:ask",
      "d": 2
     },
     {
      "p": "p:samimiyet",
      "d": 1
     }
    ]
   }
  ],
  "r_cmp_yer_meme_1": [
   {
    "id": "mvl2lpjt9x6ym",
    "text": "",
    "pct": 100,
    "effects": [
     {
      "p": "p:ask",
      "d": 2
     },
     {
      "p": "p:samimiyet",
      "d": 1
     }
    ]
   }
  ],
  "r_cmp_yer_agiz": [
   {
    "id": "mvl2lpjtas8a1",
    "text": "",
    "pct": 100,
    "effects": [
     {
      "p": "p:ask",
      "d": 2
     },
     {
      "p": "p:samimiyet",
      "d": 1
     }
    ]
   }
  ],
  "r_cmp_yer_agiz_0": [
   {
    "id": "mvl2lpjtbxwok",
    "text": "",
    "pct": 100,
    "effects": [
     {
      "p": "p:ask",
      "d": 2
     },
     {
      "p": "p:samimiyet",
      "d": 1
     }
    ]
   }
  ],
  "r_cmp_yer_got": [
   {
    "id": "mvl2lpjtgnhon",
    "text": "",
    "pct": 100,
    "effects": [
     {
      "p": "p:ask",
      "d": 2
     },
     {
      "p": "p:samimiyet",
      "d": 1
     }
    ]
   }
  ],
  "r_cmp_yer_got_0": [
   {
    "id": "mvl2lpjt7m2re",
    "text": "",
    "pct": 100,
    "effects": [
     {
      "p": "p:ask",
      "d": 2
     },
     {
      "p": "p:samimiyet",
      "d": 1
     }
    ]
   }
  ],
  "r_cmp_yer_got_1": [
   {
    "id": "mvl2lpjthpicu",
    "text": "",
    "pct": 100,
    "effects": [
     {
      "p": "p:ask",
      "d": 2
     },
     {
      "p": "p:samimiyet",
      "d": 1
     }
    ]
   }
  ],
  "r_cmp_yer_boyun": [
   {
    "id": "mvl2lpjtfvxpb",
    "text": "",
    "pct": 100,
    "effects": [
     {
      "p": "p:ask",
      "d": 2
     },
     {
      "p": "p:samimiyet",
      "d": 1
     }
    ]
   }
  ],
  "r_cmp_yer_yanak": [
   {
    "id": "mvl2lpjttk7mg",
    "text": "",
    "pct": 100,
    "effects": [
     {
      "p": "p:ask",
      "d": 2
     },
     {
      "p": "p:samimiyet",
      "d": 1
     }
    ]
   }
  ],
  "r_cmp_yer_bacak": [
   {
    "id": "mvl2lpjtyzeqd",
    "text": "",
    "pct": 100,
    "effects": [
     {
      "p": "p:ask",
      "d": 2
     },
     {
      "p": "p:samimiyet",
      "d": 1
     }
    ]
   }
  ],
  "r_cmp_yer_ayak": [
   {
    "id": "mvl2lpjtyl74o",
    "text": "",
    "pct": 100,
    "effects": [
     {
      "p": "p:ask",
      "d": 2
     },
     {
      "p": "p:samimiyet",
      "d": 1
     }
    ]
   }
  ],
  "r_cmp_yer_am": [
   {
    "id": "mvl2lpjtty97u",
    "text": "",
    "pct": 100,
    "effects": [
     {
      "p": "p:ask",
      "d": 2
     },
     {
      "p": "p:samimiyet",
      "d": 1
     }
    ]
   }
  ],
  "r_cmp_yer_am_0": [
   {
    "id": "mvl2lpjt9xhhp",
    "text": "",
    "pct": 100,
    "effects": [
     {
      "p": "p:ask",
      "d": 2
     },
     {
      "p": "p:samimiyet",
      "d": 1
     }
    ]
   }
  ],
  "r_cmp_yer_karin": [
   {
    "id": "mvl2lpjtu7g3f",
    "text": "",
    "pct": 100,
    "effects": [
     {
      "p": "p:ask",
      "d": 2
     },
     {
      "p": "p:samimiyet",
      "d": 1
     }
    ]
   }
  ],
  "r_cmp_yer_seni": [
   {
    "id": "mvl2lpjtx2wkx",
    "text": "",
    "pct": 100,
    "effects": [
     {
      "p": "p:ask",
      "d": 2
     },
     {
      "p": "p:samimiyet",
      "d": 1
     }
    ]
   }
  ],
  "r_cmp_yer_her": [
   {
    "id": "mvl2lpjtgeoba",
    "text": "",
    "pct": 100,
    "effects": [
     {
      "p": "p:ask",
      "d": 2
     },
     {
      "p": "p:samimiyet",
      "d": 1
     }
    ]
   }
  ],
  "r_cmp_yer_pk_utangaç": [
   {
    "id": "mvl2lpjtdkyon",
    "text": "",
    "pct": 100,
    "effects": [
     {
      "p": "p:ask",
      "d": 2
     },
     {
      "p": "p:samimiyet",
      "d": 1
     }
    ]
   }
  ],
  "r_cmp_yer_pk_kibirli": [
   {
    "id": "mvl2lpjtin6i5",
    "text": "",
    "pct": 100,
    "effects": [
     {
      "p": "p:ask",
      "d": 2
     },
     {
      "p": "p:samimiyet",
      "d": 1
     }
    ]
   }
  ],
  "r_cmp_yer_pk_soğuk": [
   {
    "id": "mvl2lpjtkaqmy",
    "text": "",
    "pct": 100,
    "effects": [
     {
      "p": "p:ask",
      "d": 2
     },
     {
      "p": "p:samimiyet",
      "d": 1
     }
    ]
   }
  ],
  "r_cmp_yer_pk_romantik": [
   {
    "id": "mvl2lpjto489f",
    "text": "",
    "pct": 100,
    "effects": [
     {
      "p": "p:ask",
      "d": 2
     },
     {
      "p": "p:samimiyet",
      "d": 1
     }
    ]
   }
  ],
  "r_cmp_yer_pk_çocuksu": [
   {
    "id": "mvl2lpjt730in",
    "text": "",
    "pct": 100,
    "effects": [
     {
      "p": "p:ask",
      "d": 2
     },
     {
      "p": "p:samimiyet",
      "d": 1
     }
    ]
   }
  ],
  "r_cmp_yer_pk_asi": [
   {
    "id": "mvl2lpjt2ga2b",
    "text": "",
    "pct": 100,
    "effects": [
     {
      "p": "p:ask",
      "d": 2
     },
     {
      "p": "p:samimiyet",
      "d": 1
     }
    ]
   }
  ],
  "r_cmp_yer_pk_flörtöz": [
   {
    "id": "mvl2lpjtdpfsj",
    "text": "",
    "pct": 100,
    "effects": [
     {
      "p": "p:ask",
      "d": 2
     },
     {
      "p": "p:samimiyet",
      "d": 1
     }
    ]
   }
  ],
  "r_q3_meme_sev_big": [
   {
    "id": "mvl6mx51tmf8w",
    "text": "",
    "pct": 100,
    "effects": [
     {
      "p": "p:ask",
      "d": 2
     },
     {
      "p": "p:samimiyet",
      "d": 1
     }
    ]
   }
  ],
  "r_q3_meme_sev_mid": [
   {
    "id": "mvl6mx512cs55",
    "text": "",
    "pct": 100,
    "effects": [
     {
      "p": "p:ask",
      "d": 2
     },
     {
      "p": "p:samimiyet",
      "d": 1
     }
    ]
   }
  ],
  "r_q3_meme_sev_small": [
   {
    "id": "mvl6mx51yiifr",
    "text": "",
    "pct": 100,
    "effects": [
     {
      "p": "p:ask",
      "d": 2
     },
     {
      "p": "p:samimiyet",
      "d": 1
     }
    ]
   }
  ],
  "r_q3_meme_sev": [
   {
    "id": "mvl6mx5125yvx",
    "text": "",
    "pct": 100,
    "effects": [
     {
      "p": "p:ask",
      "d": 2
     },
     {
      "p": "p:samimiyet",
      "d": 1
     }
    ]
   }
  ],
  "r_cmp_bd_am": [
   {
    "id": "mvl6mx51cut2j",
    "text": "",
    "pct": 100,
    "effects": [
     {
      "p": "p:ask",
      "d": 2
     },
     {
      "p": "p:samimiyet",
      "d": 1
     }
    ]
   }
  ],
  "r_cmp_bd_am_0": [
   {
    "id": "mvl6mx51qcvjs",
    "text": "",
    "pct": 100,
    "effects": [
     {
      "p": "p:ask",
      "d": 2
     },
     {
      "p": "p:samimiyet",
      "d": 1
     }
    ]
   }
  ],
  "r_cmp_bd_am_1": [
   {
    "id": "mvl6mx51limva",
    "text": "",
    "pct": 100,
    "effects": [
     {
      "p": "p:ask",
      "d": 2
     },
     {
      "p": "p:samimiyet",
      "d": 1
     }
    ]
   }
  ],
  "r_cmp_bd_am_2": [
   {
    "id": "mvl6mx51wg2kc",
    "text": "",
    "pct": 100,
    "effects": [
     {
      "p": "p:ask",
      "d": 2
     },
     {
      "p": "p:samimiyet",
      "d": 1
     }
    ]
   }
  ],
  "r_cmp_bd_am_3": [
   {
    "id": "mvl6mx514sbhm",
    "text": "",
    "pct": 100,
    "effects": [
     {
      "p": "p:ask",
      "d": 2
     },
     {
      "p": "p:samimiyet",
      "d": 1
     }
    ]
   }
  ],
  "r_cmp_bd_dar": [
   {
    "id": "mvl6mx51slicp",
    "text": "",
    "pct": 100,
    "effects": [
     {
      "p": "p:ask",
      "d": 2
     },
     {
      "p": "p:samimiyet",
      "d": 1
     }
    ]
   }
  ],
  "r_cmp_bd_dar_0": [
   {
    "id": "mvl6mx51d9tu0",
    "text": "",
    "pct": 100,
    "effects": [
     {
      "p": "p:ask",
      "d": 2
     },
     {
      "p": "p:samimiyet",
      "d": 1
     }
    ]
   }
  ],
  "r_cmp_bd_dar_1": [
   {
    "id": "mvl6mx51mgtbp",
    "text": "",
    "pct": 100,
    "effects": [
     {
      "p": "p:ask",
      "d": 2
     },
     {
      "p": "p:samimiyet",
      "d": 1
     }
    ]
   }
  ],
  "r_cmp_bd_islak": [
   {
    "id": "mvl6mx51npjxy",
    "text": "",
    "pct": 100,
    "effects": [
     {
      "p": "p:ask",
      "d": 2
     },
     {
      "p": "p:samimiyet",
      "d": 1
     }
    ]
   }
  ],
  "r_cmp_bd_arka": [
   {
    "id": "mvl6mx51ti6pd",
    "text": "",
    "pct": 100,
    "effects": [
     {
      "p": "p:ask",
      "d": 2
     },
     {
      "p": "p:samimiyet",
      "d": 1
     }
    ]
   }
  ],
  "r_cmp_bd_arka_0": [
   {
    "id": "mvl6mx5102rub",
    "text": "",
    "pct": 100,
    "effects": [
     {
      "p": "p:ask",
      "d": 2
     },
     {
      "p": "p:samimiyet",
      "d": 1
     }
    ]
   }
  ],
  "r_cmp_bd_arka_1": [
   {
    "id": "mvl6mx51ijudg",
    "text": "",
    "pct": 100,
    "effects": [
     {
      "p": "p:ask",
      "d": 2
     },
     {
      "p": "p:samimiyet",
      "d": 1
     }
    ]
   }
  ],
  "r_cmp_bd_arka_2": [
   {
    "id": "mvl6mx516wo5e",
    "text": "",
    "pct": 100,
    "effects": [
     {
      "p": "p:ask",
      "d": 2
     },
     {
      "p": "p:samimiyet",
      "d": 1
     }
    ]
   }
  ],
  "r_cmp_bd_kalca": [
   {
    "id": "mvl6mx513nsjd",
    "text": "",
    "pct": 100,
    "effects": [
     {
      "p": "p:ask",
      "d": 2
     },
     {
      "p": "p:samimiyet",
      "d": 1
     }
    ]
   }
  ],
  "r_cmp_bd_kalca_0": [
   {
    "id": "mvl6mx51fx65i",
    "text": "",
    "pct": 100,
    "effects": [
     {
      "p": "p:ask",
      "d": 2
     },
     {
      "p": "p:samimiyet",
      "d": 1
     }
    ]
   }
  ],
  "r_cmp_bd_kalca_1": [
   {
    "id": "mvl6mx5111ze4",
    "text": "",
    "pct": 100,
    "effects": [
     {
      "p": "p:ask",
      "d": 2
     },
     {
      "p": "p:samimiyet",
      "d": 1
     }
    ]
   }
  ],
  "r_cmp_bd_kalca_2": [
   {
    "id": "mvl6mx51b01lo",
    "text": "",
    "pct": 100,
    "effects": [
     {
      "p": "p:ask",
      "d": 2
     },
     {
      "p": "p:samimiyet",
      "d": 1
     }
    ]
   }
  ],
  "r_cmp_bd_uc": [
   {
    "id": "mvl6mx51g3i0z",
    "text": "",
    "pct": 100,
    "effects": [
     {
      "p": "p:ask",
      "d": 2
     },
     {
      "p": "p:samimiyet",
      "d": 1
     }
    ]
   }
  ],
  "r_cmp_bd_dudak": [
   {
    "id": "mvl6mx51yxpr4",
    "text": "",
    "pct": 100,
    "effects": [
     {
      "p": "p:ask",
      "d": 2
     },
     {
      "p": "p:samimiyet",
      "d": 1
     }
    ]
   }
  ],
  "r_cmp_bd_bacak": [
   {
    "id": "mvl6mx512gycr",
    "text": "",
    "pct": 100,
    "effects": [
     {
      "p": "p:ask",
      "d": 2
     },
     {
      "p": "p:samimiyet",
      "d": 1
     }
    ]
   }
  ],
  "r_cmp_bd_vucut": [
   {
    "id": "mvl6mx51ljwvz",
    "text": "",
    "pct": 100,
    "effects": [
     {
      "p": "p:ask",
      "d": 2
     },
     {
      "p": "p:samimiyet",
      "d": 1
     }
    ]
   }
  ],
  "r_cmp_bd_ten": [
   {
    "id": "mvl6mx51as2lw",
    "text": "",
    "pct": 100,
    "effects": [
     {
      "p": "p:ask",
      "d": 2
     },
     {
      "p": "p:samimiyet",
      "d": 1
     }
    ]
   }
  ],
  "r_cmp_bd_pk_utangaç": [
   {
    "id": "mvl6mx51ojo18",
    "text": "",
    "pct": 100,
    "effects": [
     {
      "p": "p:ask",
      "d": 2
     },
     {
      "p": "p:samimiyet",
      "d": 1
     }
    ]
   }
  ],
  "r_cmp_bd_pk_kibirli": [
   {
    "id": "mvl6mx51kl92t",
    "text": "",
    "pct": 100,
    "effects": [
     {
      "p": "p:ask",
      "d": 2
     },
     {
      "p": "p:samimiyet",
      "d": 1
     }
    ]
   }
  ],
  "r_cmp_bd_pk_flörtöz": [
   {
    "id": "mvl6mx5149kip",
    "text": "",
    "pct": 100,
    "effects": [
     {
      "p": "p:ask",
      "d": 2
     },
     {
      "p": "p:samimiyet",
      "d": 1
     }
    ]
   }
  ],
  "r_cmp_bd_pk_soğuk": [
   {
    "id": "mvl6mx510fo9w",
    "text": "",
    "pct": 100,
    "effects": [
     {
      "p": "p:ask",
      "d": 2
     },
     {
      "p": "p:samimiyet",
      "d": 1
     }
    ]
   }
  ],
  "r_cmp_bd_pk_romantik": [
   {
    "id": "mvl6mx51prkur",
    "text": "",
    "pct": 100,
    "effects": [
     {
      "p": "p:ask",
      "d": 2
     },
     {
      "p": "p:samimiyet",
      "d": 1
     }
    ]
   }
  ],
  "r_cmp_bd_pk_asi": [
   {
    "id": "mvl6mx51webqi",
    "text": "",
    "pct": 100,
    "effects": [
     {
      "p": "p:ask",
      "d": 2
     },
     {
      "p": "p:samimiyet",
      "d": 1
     }
    ]
   }
  ],
  "r_cmp_bd_pk_özgüvenli": [
   {
    "id": "mvl6mx51q5umv",
    "text": "",
    "pct": 100,
    "effects": [
     {
      "p": "p:ask",
      "d": 2
     },
     {
      "p": "p:samimiyet",
      "d": 1
     }
    ]
   }
  ],
  "r_cmp_bd_pk_çocuksu": [
   {
    "id": "mvl6mx51pcrem",
    "text": "",
    "pct": 100,
    "effects": [
     {
      "p": "p:ask",
      "d": 2
     },
     {
      "p": "p:samimiyet",
      "d": 1
     }
    ]
   }
  ],
  "r_cmp_bd_pk_güvensiz": [
   {
    "id": "mvl6mx51ps4zy",
    "text": "",
    "pct": 100,
    "effects": [
     {
      "p": "p:ask",
      "d": 2
     },
     {
      "p": "p:samimiyet",
      "d": 1
     }
    ]
   }
  ],
  "r_cmp_bd_pk_şımarık": [
   {
    "id": "mvl6mx5141he8",
    "text": "",
    "pct": 100,
    "effects": [
     {
      "p": "p:ask",
      "d": 2
     },
     {
      "p": "p:samimiyet",
      "d": 1
     }
    ]
   }
  ],
  "r_cmp_bd_uc2": [
   {
    "id": "mvl6mx5125uxr",
    "text": "",
    "pct": 100,
    "effects": [
     {
      "p": "p:ask",
      "d": 2
     },
     {
      "p": "p:samimiyet",
      "d": 1
     }
    ]
   }
  ]
 }
};
