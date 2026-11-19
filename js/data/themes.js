/*
 * Sohbet temaları: arka planlar ve baloncuk stilleri (sohbette 🎨 Tema)
 * Baloncuk alanları CSS değişkenlerine dönüşür: me/her = arka plan, meFg/herFg = yazı rengi,
 * meBorder/herBorder = kenarlık, radius = köşe yuvarlaklığı, tail = baloncuğun sivri köşesi,
 * font = yazı tipi, shadow = gölge.
 * 'char' değeri karakterin kendi rengini kullanır.
 */
window.Stories = window.Stories || {};

Stories.Themes = {
  backgrounds: [
    // ☁️ açık pastel arka planlar (light: sohbet yazıları koyu renge döner). Varsayılan: pastel-lila
    // dark: koyu modda kullanılan karşılık (app.js themeLive); hide: 1 → tema penceresinde listelenmez
    { id: 'carmen-acik', label: 'Carmen açık', light: true, dark: 'carmen-acik-gece', css: 'linear-gradient(165deg, #eef8fd 0%, #ffffff 48%, #fdf0f5 100%)' },
    { id: 'pastel-pembe', label: 'Pembe pastel', light: true, dark: 'pastel-pembe-gece', css: 'linear-gradient(180deg, #fff7fa 0%, #ffeaf2 100%)' },
    { id: 'pastel-mavi', label: 'Mavi pastel', light: true, dark: 'pastel-mavi-gece', css: 'linear-gradient(180deg, #f5fbff 0%, #e3f2fc 100%)' },
    { id: 'pastel-lila', label: 'Lila pastel', light: true, dark: 'pastel-lila-gece', css: 'linear-gradient(180deg, #faf7ff 0%, #efe8ff 100%)' },
    { id: 'pastel-nane', label: 'Nane pastel', light: true, dark: 'pastel-nane-gece', css: 'linear-gradient(180deg, #f5fdf9 0%, #e2f6ec 100%)' },
    { id: 'pastel-seftali', label: 'Şeftali pastel', light: true, dark: 'pastel-seftali-gece', css: 'linear-gradient(180deg, #fffaf5 0%, #ffecdd 100%)' },
    { id: 'pastel-limon', label: 'Limon pastel', light: true, dark: 'pastel-limon-gece', css: 'linear-gradient(180deg, #fffef6 0%, #fbf6d9 100%)' },
    { id: 'pastel-bulut', label: 'Bulut', light: true, dark: 'pastel-bulut-gece', css: 'radial-gradient(circle at 20% 0%, #ffffff 0%, #f3f5fa 55%, #e9edf5 100%)' },
    { id: 'pastel-gokkusagi', label: 'Pastel gökkuşağı', light: true, dark: 'pastel-gokkusagi-gece', css: 'linear-gradient(160deg, #fff1f5 0%, #f4f0ff 30%, #eaf6ff 60%, #effcf4 85%, #fffbea 100%)' },
    // 🌙 açık arka planların koyu karşılıkları
    { id: 'carmen-acik-gece', hide: 1, label: 'Carmen gece', css: 'linear-gradient(165deg, #0f2233 0%, #14111c 48%, #2a1220 100%)' },
    { id: 'pastel-pembe-gece', hide: 1, label: 'Pembe gece', css: 'linear-gradient(180deg, #2a0f1c 0%, #1a0812 100%)' },
    { id: 'pastel-mavi-gece', hide: 1, label: 'Mavi gece', css: 'linear-gradient(180deg, #0f2236 0%, #0a1624 100%)' },
    { id: 'pastel-lila-gece', hide: 1, label: 'Lila gece', css: 'linear-gradient(180deg, #221a3a 0%, #15102a 100%)' },
    { id: 'pastel-nane-gece', hide: 1, label: 'Nane gece', css: 'linear-gradient(180deg, #0f2a20 0%, #08180f 100%)' },
    { id: 'pastel-seftali-gece', hide: 1, label: 'Şeftali gece', css: 'linear-gradient(180deg, #33200f 0%, #1f130a 100%)' },
    { id: 'pastel-limon-gece', hide: 1, label: 'Limon gece', css: 'linear-gradient(180deg, #2c2a0f 0%, #1a180a 100%)' },
    { id: 'pastel-bulut-gece', hide: 1, label: 'Bulut gece', css: 'radial-gradient(circle at 20% 0%, #2a2e38 0%, #1d2029 55%, #161922 100%)' },
    { id: 'pastel-gokkusagi-gece', hide: 1, label: 'Gökkuşağı gece', css: 'linear-gradient(160deg, #2a1220 0%, #1e1736 30%, #0f2236 60%, #0f2a1d 85%, #2a2610 100%)' },
    // 💜 Carmen neon (varsayılan 🌗 Otomatik): lila zeminde lavanta / pembe-mor / gün batımı ışıkları (gece: koyu mor)
    { id: 'carmen-neon', label: 'Carmen neon', light: true, dark: 'carmen-neon-gece', css: 'radial-gradient(circle at 0% 0%, rgba(181, 127, 214, .32), transparent 55%), radial-gradient(circle at 100% 45%, rgba(215, 123, 175, .22), transparent 50%), radial-gradient(circle at 40% 100%, rgba(246, 166, 103, .22), transparent 55%), #f7eefa' },
    { id: 'carmen-neon-gece', label: 'Carmen neon gece', css: 'radial-gradient(circle at 0% 0%, rgba(166, 94, 187, .42), transparent 55%), radial-gradient(circle at 100% 45%, rgba(215, 123, 175, .22), transparent 50%), radial-gradient(circle at 40% 100%, rgba(241, 139, 131, .2), transparent 55%), linear-gradient(180deg, #24103a 0%, #170a26 55%, #0f0619 100%)' },
    // 🇫🇷 Français: krem kâğıt üstünde ince tricolore şerit (gece: lacivert)
    { id: 'francais', label: 'Français', light: true, dark: 'francais-nuit', css: 'linear-gradient(90deg, #14307a 0 33.3%, #ffffff 33.3% 66.6%, #d0202e 66.6%) top / 100% 4px no-repeat, radial-gradient(circle at 50% 0%, #ffffff 0%, #faf6ee 55%, #f0e9dc 100%)' },
    { id: 'francais-nuit', label: 'Français gece', css: 'linear-gradient(90deg, #aec3ff 0 33.3%, #f5f0e6 33.3% 66.6%, #ef4a55 66.6%) top / 100% 3px no-repeat, radial-gradient(circle at 50% 0%, #1f2a5a 0%, #0d1530 60%, #080e22 100%)' },
    { id: 'amor', label: 'Amor', css: 'linear-gradient(180deg, #3b1d63 0%, #241444 45%, #160d2c 100%)' },
    { id: 'rose', label: 'Gül', css: 'linear-gradient(180deg, #6b1f45 0%, #3f1129 50%, #1f0814 100%)' },
    { id: 'ocean', label: 'Okyanus', css: 'linear-gradient(180deg, #14476e 0%, #0c2a46 50%, #06141f 100%)' },
    { id: 'forest', label: 'Orman', css: 'linear-gradient(180deg, #1d4d38 0%, #10301f 50%, #07170f 100%)' },
    { id: 'sunset', label: 'Gün batımı', css: 'linear-gradient(180deg, #7a2e4f 0%, #4a1f45 45%, #1c1030 100%)' },
    { id: 'night', label: 'Gece mavisi', css: 'radial-gradient(circle at 30% 10%, #2a3a7a 0%, #141a3c 45%, #070914 100%)' },
    { id: 'coffee', label: 'Kahve', css: 'linear-gradient(180deg, #4a3226 0%, #2c1d16 55%, #160e0a 100%)' },
    { id: 'dark', label: 'Karanlık', css: '#111116' },
    // Amor'un mağaza / kalp düzeyi arka planları (cls: görünüm css/style.css'teki .bg-<id> sınıfından gelir)
    { id: 'ucan-kalpler', label: 'Uçan kalpler', cls: 'bg-ucan-kalpler' },
    { id: 'kalp-kolye', label: 'Mücevher kalp', cls: 'bg-kalp-kolye' },
    { id: 'pembe-ruya', label: 'Pembe rüya', cls: 'bg-pembe-ruya' },
    { id: 'galaksi', label: 'Galaksi', css: 'radial-gradient(circle at 30% 20%, #4c1d95 0%, #1e1b4b 40%, #0b0820 100%)' },
    // 🎃 Halloween: mor gece, köşelerde mum ışığı
    // 🌐 site temaları (site: 1 → tema penceresinde yalnızca "Site temaları" bölümünde görünür)
    { id: 'site-carmen', site: 1, label: 'Carmen.com', css: 'radial-gradient(circle at 80% 0, rgba(255, 64, 129, .35), transparent 55%), linear-gradient(180deg, #3a0a22 0%, #22061a 55%, #12030c 100%)' },
    { id: 'site-gothic', site: 1, label: 'CarmenGothic', css: 'radial-gradient(circle at 50% -10%, rgba(183, 28, 28, .35), transparent 55%), linear-gradient(180deg, #160a0c 0%, #0a0506 100%)' },
    { id: 'site-meisove', site: 1, label: 'Meisove', light: true, dark: 'site-meisove-gece', css: 'linear-gradient(170deg, #fff4f0 0%, #ffe6ec 50%, #fff3d6 100%)' },
    { id: 'site-meisove-gece', site: 1, label: 'Meisove gece', css: 'linear-gradient(170deg, #2e1218 0%, #261018 50%, #2a1a0c 100%)' },
    { id: 'site-tinder', site: 1, label: 'CarmenTinder', css: 'radial-gradient(circle at 85% 0, rgba(255, 68, 88, .35), transparent 55%), linear-gradient(180deg, #2a0a14 0%, #1a0710 60%, #0f0409 100%)' },
    { id: 'site-bumble', site: 1, label: 'CarmenBumble', light: true, dark: 'site-bumble-gece', css: 'linear-gradient(180deg, #fffbea 0%, #fff1c2 100%)' },
    { id: 'site-bumble-gece', site: 1, label: 'CarmenBumble gece', css: 'radial-gradient(circle at 85% 0, rgba(255, 198, 41, .18), transparent 55%), linear-gradient(180deg, #2a2208 0%, #171305 100%)' },
    { id: 'site-fans', site: 1, label: 'CarmenFans', light: true, dark: 'site-fans-gece', css: 'linear-gradient(180deg, #f4fbff 0%, #e3f4fd 100%)' },
    { id: 'site-fans-gece', site: 1, label: 'CarmenFans gece', css: 'radial-gradient(circle at 85% 0, rgba(0, 175, 240, .2), transparent 55%), linear-gradient(180deg, #0a2230 0%, #06141d 100%)' },
    { id: 'site-gram', site: 1, label: 'CarmenGram', css: 'radial-gradient(circle at 0 0, rgba(131, 58, 180, .3), transparent 45%), radial-gradient(circle at 100% 100%, rgba(253, 29, 29, .22), transparent 45%), #0b0b10' },
    { id: 'site-live', site: 1, label: 'CarmenLive', css: 'radial-gradient(circle at 50% 0, rgba(255, 23, 68, .35), transparent 55%), #0e0a10' },
    { id: 'site-party', site: 1, label: 'CarmenParty', css: 'radial-gradient(circle at 20% 10%, rgba(236, 72, 153, .4), transparent 45%), radial-gradient(circle at 85% 90%, rgba(34, 211, 238, .3), transparent 45%), #0d0820' },
    { id: 'site-jobs', site: 1, label: 'CarmenJobs', css: 'linear-gradient(180deg, #1e3a5f 0%, #13253d 55%, #0a1424 100%)' },
    { id: 'site-school', site: 1, label: 'CarmenSchool', light: true, dark: 'site-school-gece', css: 'repeating-linear-gradient(180deg, transparent 0 27px, rgba(69, 39, 160, .08) 27px 28px), linear-gradient(180deg, #fbfaff 0%, #efeaff 100%)' },
    { id: 'site-school-gece', site: 1, label: 'CarmenSchool gece', css: 'repeating-linear-gradient(180deg, transparent 0 27px, rgba(179, 157, 255, .08) 27px 28px), linear-gradient(180deg, #1a1433 0%, #100c22 100%)' },
    { id: 'site-gasino', site: 1, label: 'CarmenGasino', css: 'radial-gradient(circle at 50% 0, rgba(212, 164, 55, .3), transparent 55%), linear-gradient(180deg, #0f2a1c 0%, #08160f 100%)' },
    { id: 'site-church', site: 1, label: 'CarmenChurch', css: 'radial-gradient(circle at 50% 0, rgba(255, 214, 140, .25), transparent 50%), linear-gradient(180deg, #2e1f19 0%, #1a110d 100%)' },
    { id: 'site-farm', site: 1, label: 'CarmenFarm', light: true, dark: 'site-farm-gece', css: 'linear-gradient(180deg, #fff6e5 0%, #ffe7c2 60%, #f3d9a6 100%)' },
    { id: 'site-farm-gece', site: 1, label: 'CarmenFarm gece', css: 'radial-gradient(circle at 20% 0, rgba(255, 152, 0, .18), transparent 55%), linear-gradient(180deg, #2e1d0a 0%, #1a1006 100%)' },
    { id: 'site-massage', site: 1, label: 'CarmenMassage', css: 'radial-gradient(circle at 20% 0, rgba(255, 183, 120, .25), transparent 50%), linear-gradient(180deg, #4a2f22 0%, #2e1d15 60%, #1a100b 100%)' },
    { id: 'site-secret', site: 1, label: 'CarmenSecret', css: 'radial-gradient(circle at 50% 0, rgba(46, 125, 50, .3), transparent 55%), linear-gradient(180deg, #0c1f0d 0%, #050d06 100%)' },
    { id: 'site-stay', site: 1, label: 'CarmenStay', css: 'radial-gradient(circle at 50% 0, rgba(212, 164, 55, .22), transparent 55%), linear-gradient(180deg, #2b2118 0%, #1a140e 100%)' },
    { id: 'halloween', label: '🎃 Halloween', css: 'radial-gradient(circle at 12% 92%, rgba(255, 170, 60, .45) 0, rgba(255, 120, 20, .12) 12%, transparent 26%), radial-gradient(circle at 90% 86%, rgba(255, 150, 40, .38) 0, rgba(255, 110, 20, .1) 10%, transparent 22%), radial-gradient(circle at 50% -10%, rgba(156, 39, 176, .45) 0, transparent 55%), linear-gradient(180deg, #2a0f3d 0%, #1a0b26 55%, #0d0612 100%)' },
    // 🎞️ hareketli arka planlar (cls → css/stories.css; css = tema penceresindeki önizleme)
    { id: 'yagmurlu-cam', label: '🌧️ Yağmurlu cam', cls: 'bg-yagmurlu-cam', css: 'linear-gradient(180deg, #2b3a4e 0%, #18222f 100%)' },
    { id: 'mum-isigi', label: '🕯️ Mum ışığı', cls: 'bg-mum-isigi', css: 'radial-gradient(circle at 50% 100%, rgba(255, 170, 70, .55), transparent 60%), #1e120a' },
    { id: 'neon-bar', label: '🍸 Neon', cls: 'bg-neon-bar', css: 'radial-gradient(circle at 15% 20%, rgba(255, 0, 170, .5), transparent 45%), radial-gradient(circle at 85% 80%, rgba(0, 229, 255, .4), transparent 45%), #0b0614' },
    { id: 'havuz-suyu', label: '🏊 Havuz suyu', cls: 'bg-havuz-suyu', css: 'linear-gradient(180deg, #4fc3e8 0%, #1279a8 60%, #0a4d70 100%)' },
    // 🤖 kendiliğinden değişen: auto 'place' = mekâna göre (places), 'hour' = saate göre (hours)
    { id: 'yer', label: '🗺️ Mekâna göre', auto: 'place', css: 'linear-gradient(135deg, #1d4d38 0 33%, #3b1d63 33% 66%, #14476e 66%)' },
    { id: 'saat', label: '🕰️ Saate göre', auto: 'hour', css: 'linear-gradient(90deg, #141a3c 0%, #ffecdd 35%, #eef8fd 55%, #7a2e4f 80%, #1e1b4b 100%)' }
  ],
  // 🗺️ Mekâna göre arka plan ("Mekâna göre" seçiliyken; anahtar = js/data/places.js id). Listede olmayan mekânda Otomatik
  places: {
    kilise: 'mum-isigi', somine: 'mum-isigi', 'dag-evi': 'mum-isigi', restoran: 'mum-isigi',
    bar: 'neon-bar', dans: 'neon-bar', konser: 'neon-bar', 'ev-partisi': 'neon-bar', 'kostum-partisi': 'neon-bar',
    sahil: 'havuz-suyu', tatil: 'havuz-suyu', yazlik: 'havuz-suyu', vapur: 'ocean',
    yagmur: 'yagmurlu-cam', banyo: 'yagmurlu-cam',
    'masaj-salonu': 'site-massage', 'muayene-odasi': 'pastel-mavi', tuvalet: 'pastel-bulut',
    ofis: 'site-jobs', is: 'site-jobs', kampus: 'site-school', otel: 'site-stay',
    'perili-ev': 'halloween', 'mezarlik-araba': 'halloween', lunapark: 'site-party',
    gece: 'night', 'gece-yuruyusu': 'night', cati: 'night', sinema: 'dark', 'ev-sinema': 'dark',
    park: 'forest', bahce: 'forest', piknik: 'forest', kamp: 'forest', 'misir-labirenti': 'forest', disari: 'forest',
    kafe: 'coffee'
  },
  // 🕰️ Saate göre arka plan ("Saate göre" seçiliyken): [başlangıç saati, arka plan] sohbet saatine (🕰️) göre
  hours: [[0, 'night'], [5, 'pastel-seftali'], [8, 'carmen-acik'], [17, 'sunset'], [20, 'galaksi']],
  bubbles: [
    // 🍬 pastel baloncuklar (açık arka planlara uygun). Varsayılan: pastel-gul
    { id: 'carmen-pastel', label: 'Carmen pastel', dark: 'carmen-pastel-gece', me: '#d6eefa', meFg: '#0b3d5e', her: '#fde4ee', herFg: '#5a1530', radius: '22px', shadow: '0 2px 8px rgba(30, 60, 100, .08)' },
    { id: 'pastel-seftali', label: 'Şeftali', dark: 'pastel-seftali-gece', me: '#ffe0cc', meFg: '#5a2e12', her: '#fff3e8', herFg: '#5a2e12', radius: '20px', shadow: '0 2px 8px rgba(120, 60, 20, .08)' },
    { id: 'pastel-nane', label: 'Nane', dark: 'pastel-nane-gece', me: '#cdf3e1', meFg: '#0f4a33', her: '#f0fbf6', herFg: '#0f4a33', radius: '20px', shadow: '0 2px 8px rgba(20, 90, 60, .08)' },
    { id: 'pastel-lila', label: 'Lila', dark: 'pastel-lila-gece', me: '#e4dcff', meFg: '#2f1f63', her: '#f6f3ff', herFg: '#2f1f63', radius: '20px', shadow: '0 2px 8px rgba(60, 40, 120, .08)' },
    { id: 'pastel-limon', label: 'Limon', dark: 'pastel-limon-gece', me: '#fdf2b8', meFg: '#4a3d00', her: '#fffbe6', herFg: '#4a3d00', radius: '20px', shadow: '0 2px 8px rgba(120, 100, 0, .08)' },
    { id: 'pastel-gokyuzu', label: 'Gökyüzü', dark: 'pastel-gokyuzu-gece', me: '#cfe8ff', meFg: '#0d3a66', her: '#ffffff', herFg: '#1d2433', herBorder: '1px solid #dfe7f2', radius: '20px', shadow: '0 2px 8px rgba(20, 50, 100, .08)' },
    { id: 'pastel-gul', label: 'Gül kurusu', dark: 'pastel-gul-gece', me: 'linear-gradient(135deg, #ffd9e6, #f7c8dc)', meFg: '#5a1530', her: '#ffffff', herFg: '#4a2a3a', herBorder: '1px solid #f3dbe5', radius: '22px', shadow: '0 2px 10px rgba(194, 24, 91, .1)' },
    { id: 'pastel-sise', label: 'Pastel karışık', dark: 'pastel-sise-gece', me: 'linear-gradient(135deg, #d6eefa, #e6dcff)', meFg: '#1f2a55', her: 'linear-gradient(135deg, #fde4ee, #fff1e3)', herFg: '#5a2030', radius: '22px', shadow: '0 2px 10px rgba(60, 60, 120, .1)' },
    // 🌙 pastel baloncukların koyu karşılıkları
    { id: 'carmen-pastel-gece', hide: 1, label: 'Carmen gece', me: '#1c4a6b', meFg: '#e3f4ff', her: '#4a1f33', herFg: '#ffe4ef', radius: '22px', shadow: '0 2px 10px rgba(0, 0, 0, .3)' },
    { id: 'pastel-seftali-gece', hide: 1, label: 'Şeftali gece', me: '#6b3a1c', meFg: '#ffe8d6', her: '#3a2414', herFg: '#ffe8d6', radius: '20px', shadow: '0 2px 10px rgba(0, 0, 0, .3)' },
    { id: 'pastel-nane-gece', hide: 1, label: 'Nane gece', me: '#1c5a40', meFg: '#dcf7ea', her: '#13332a', herFg: '#dcf7ea', radius: '20px', shadow: '0 2px 10px rgba(0, 0, 0, .3)' },
    { id: 'pastel-lila-gece', hide: 1, label: 'Lila gece', me: '#4a3a8a', meFg: '#ece6ff', her: '#2a2246', herFg: '#ece6ff', radius: '20px', shadow: '0 2px 10px rgba(0, 0, 0, .3)' },
    { id: 'pastel-limon-gece', hide: 1, label: 'Limon gece', me: '#6b5a10', meFg: '#fff6c2', her: '#36300f', herFg: '#fff6c2', radius: '20px', shadow: '0 2px 10px rgba(0, 0, 0, .3)' },
    { id: 'pastel-gokyuzu-gece', hide: 1, label: 'Gökyüzü gece', me: '#1e5a99', meFg: '#e6f1ff', her: '#22283a', herFg: '#e6ecf5', herBorder: '1px solid #2f3850', radius: '20px', shadow: '0 2px 10px rgba(0, 0, 0, .3)' },
    { id: 'pastel-gul-gece', hide: 1, label: 'Gül gece', me: 'linear-gradient(135deg, #8a2c55, #6b1f45)', meFg: '#ffe4ef', her: '#2e1a26', herFg: '#ffe4ef', herBorder: '1px solid #4a2a3a', radius: '22px', shadow: '0 2px 10px rgba(0, 0, 0, .3)' },
    { id: 'pastel-sise-gece', hide: 1, label: 'Karışık gece', me: 'linear-gradient(135deg, #1c4a6b, #4a3a8a)', meFg: '#eef2ff', her: 'linear-gradient(135deg, #4a1f33, #4a2e1f)', herFg: '#ffe8ee', radius: '22px', shadow: '0 2px 10px rgba(0, 0, 0, .3)' },
    // 💜 Carmen neon: lila → pembe-mor → mercan parlayan ben, lavanta kenarlı o
    { id: 'carmen-neon', label: 'Carmen neon', dark: 'carmen-neon-gece', me: 'linear-gradient(135deg, #a65ebb, #d77baf 60%, #f18b83)', meFg: '#ffffff', her: '#ffffff', herFg: '#2a1d36', herBorder: '1px solid rgba(181, 127, 214, .45)', radius: '22px', shadow: '0 4px 14px -4px rgba(166, 94, 187, .4), 0 0 14px rgba(215, 123, 175, .18)' },
    { id: 'carmen-neon-gece', label: 'Carmen neon gece', me: 'linear-gradient(135deg, #a65ebb, #d77baf 60%, #f18b83)', meFg: '#ffffff', her: '#231736', herFg: '#f3ecf8', herBorder: '1px solid rgba(196, 140, 224, .45)', radius: '22px', shadow: '0 0 16px rgba(181, 127, 214, .35), 0 0 4px rgba(241, 139, 131, .25)' },
    // 🇫🇷 Français: lacivert ben, beyaz kâğıt o (kırmızı çizgi), az yuvarlak köşe
    { id: 'francais', label: 'Français', dark: 'francais-nuit', me: '#14307a', meFg: '#ffffff', her: '#ffffff', herFg: '#1a2340', herBorder: '1px solid #e3dccd', radius: '10px', tail: '2px', shadow: '0 2px 8px rgba(20, 48, 122, .1), inset 3px 0 0 #d0202e' },
    { id: 'francais-nuit', label: 'Français gece', me: '#d0202e', meFg: '#ffffff', her: '#161f47', herFg: '#f5f0e6', herBorder: '1px solid #2e3b72', radius: '10px', tail: '2px', shadow: '0 2px 10px rgba(0, 0, 0, .3), inset 3px 0 0 #aec3ff' },
    { id: 'amor', label: 'Amor', me: '#ff3d8b', her: '#2c2442' },
    { id: 'imessage', label: 'iMessage', me: '#0a84ff', her: '#3a3a3c', radius: '20px', tail: '20px' },
    { id: 'whatsapp', label: 'WhatsApp', me: '#005c4b', her: '#202c33', radius: '10px', tail: '2px' },
    { id: 'insta', label: 'Instagram', me: 'linear-gradient(135deg, #7b5cff, #c13584 60%, #ff3d8b)', her: '#262626', radius: '22px', tail: '22px' },
    { id: 'char', label: 'Karakter rengi', me: '#ff3d8b', her: 'char' },
    { id: 'pastel', label: 'Pastel', me: '#ffd6e7', meFg: '#4a1d33', her: '#e6e1ff', herFg: '#2a2140' },
    { id: 'mono', label: 'Siyah beyaz', me: '#ffffff', meFg: '#111111', her: '#2b2b2b', radius: '16px' },
    { id: 'neon', label: 'Neon', me: 'rgba(255, 61, 139, .12)', meBorder: '2px solid #ff3d8b', her: 'rgba(52, 227, 168, .1)', herBorder: '2px solid #34e3a8' },
    { id: 'retro', label: 'Retro', me: '#ffd23f', meFg: '#111111', meBorder: '2px solid #111', her: '#ffffff', herFg: '#111111', herBorder: '2px solid #111', radius: '4px', tail: '4px' },
    { id: 'glass', label: 'Cam', me: 'rgba(255, 255, 255, .22)', her: 'rgba(255, 255, 255, .1)', meBorder: '1px solid rgba(255,255,255,.35)', herBorder: '1px solid rgba(255,255,255,.18)' },
    { id: 'cloud', label: 'Bulut', me: '#ffffff', meFg: '#3b2a5c', her: '#e9e4ff', herFg: '#2a2140', radius: '26px', tail: '26px', shadow: '0 4px 14px rgba(0, 0, 0, .28)' },
    { id: 'comic', label: 'Çizgi roman', me: '#fff6c9', meFg: '#111111', meBorder: '3px solid #111', her: '#ffffff', herFg: '#111111', herBorder: '3px solid #111', radius: '18px', tail: '3px', font: "'Comic Sans MS', 'Comic Neue', cursive", shadow: '4px 4px 0 #111' },
    { id: 'terminal', label: 'Terminal', me: '#0b1a0b', meFg: '#39ff7a', meBorder: '1px solid #39ff7a', her: '#0d0d0d', herFg: '#e6e6e6', herBorder: '1px solid #555', radius: '2px', tail: '2px', font: "Consolas, 'Courier New', monospace" },
    { id: 'paper', label: 'Not kâğıdı', me: '#fff59d', meFg: '#3e2f00', her: '#fdfdf6', herFg: '#333333', radius: '3px', tail: '3px', font: "'Segoe Print', 'Bradley Hand', cursive", shadow: '2px 3px 8px rgba(0, 0, 0, .35)' },
    { id: 'gold', label: 'Altın', me: 'linear-gradient(135deg, #f9e29c, #d4a437 55%, #b8862b)', meFg: '#2b1d00', her: 'linear-gradient(135deg, #2b2b2b, #141414)', herFg: '#f3d27a', herBorder: '1px solid #b8862b', radius: '14px', shadow: '0 3px 12px rgba(212, 164, 55, .3)' },
    // Amor'un baloncukları. cls: ek süs (kalp mücevheri) css/stories.css'te .sbub-<ad>
    { id: 'kalp', label: 'Kalp mücevheri', cls: 'sbub-kalp', me: 'linear-gradient(100deg, #ff7a6b 0%, #ff4fa0 45%, #f83cb0 100%)', her: 'linear-gradient(160deg, #f45fc8 0%, #ff8fb5 60%, #ffb38a 100%)', herFg: '#4a0f2e', meBorder: '1.5px solid rgba(255,255,255,.55)', herBorder: '1.5px solid rgba(255,255,255,.55)', shadow: '0 4px 14px rgba(255,60,150,.35), inset 0 1px 0 rgba(255,255,255,.5)' },
    { id: 'seker', label: 'Pamuk şeker', me: 'linear-gradient(135deg, #ffb3d9, #b8c6ff)', meFg: '#4a2a5a', her: 'linear-gradient(135deg, #d7f3ff, #ffe0f0)', herFg: '#4a2a5a', meBorder: '1.5px solid rgba(255,255,255,.7)', herBorder: '1.5px solid rgba(255,255,255,.7)' },
    { id: 'altin-isilti', label: 'Altın ışıltı', me: 'linear-gradient(135deg, #fde68a, #f59e0b 55%, #fbbf24)', meFg: '#4a2c00', her: '#2c2442', herBorder: '1.5px solid #f8d34a', shadow: '0 4px 14px rgba(245,158,11,.35)' },
    { id: 'gece-neonu', label: 'Gece neonu', me: 'rgba(40,5,30,.7)', meBorder: '2px solid #ec4899', her: 'rgba(15,10,35,.75)', herBorder: '2px solid #22d3ee', shadow: '0 0 12px rgba(236,72,153,.6)' },
    { id: 'galaksi', label: 'Galaksi', me: 'radial-gradient(circle at 15% 25%, rgba(255,255,255,.8) 0 1px, transparent 2px), radial-gradient(circle at 72% 60%, rgba(255,255,255,.7) 0 1px, transparent 2px), radial-gradient(circle at 45% 82%, rgba(255,255,255,.6) 0 1px, transparent 2px), linear-gradient(135deg, #6d28d9, #db2777)', her: 'radial-gradient(circle at 15% 25%, rgba(255,255,255,.8) 0 1px, transparent 2px), radial-gradient(circle at 72% 60%, rgba(255,255,255,.7) 0 1px, transparent 2px), radial-gradient(circle at 45% 82%, rgba(255,255,255,.6) 0 1px, transparent 2px), linear-gradient(135deg, #1e1b4b, #4c1d95)' },
    { id: 'halloween', label: '🎃 Halloween', me: 'linear-gradient(135deg, #ff9a3c, #ff6a00 60%, #e65100)', meFg: '#2a0f00', her: 'linear-gradient(135deg, #3b1457, #24103a)', herFg: '#ffe0b8', herBorder: '1.5px solid rgba(255, 140, 40, .55)', radius: '18px', shadow: '0 0 14px rgba(255, 140, 40, .35)' },
    // 🌐 site baloncukları (site: 1 → yalnızca "Site temaları"nda)
    { id: 'site-carmen', site: 1, label: 'Carmen.com', me: 'linear-gradient(135deg, #e91e63, #ad1457)', her: '#2e1022', herBorder: '1px solid rgba(255, 64, 129, .3)', radius: '20px' },
    { id: 'site-gothic', site: 1, label: 'CarmenGothic', me: '#7f0000', her: '#1b1416', herFg: '#e8d9dc', herBorder: '1px solid #3a1f24', radius: '6px', tail: '2px', font: "Georgia, 'Times New Roman', serif" },
    { id: 'site-meisove', site: 1, label: 'Meisove', dark: 'site-meisove-gece', me: 'linear-gradient(135deg, #ff5f7e, #ff9a5a)', her: '#ffffff', herFg: '#5a1f2a', herBorder: '1px solid #ffd6dd', radius: '22px', shadow: '0 2px 10px rgba(255, 95, 126, .15)' },
    { id: 'site-meisove-gece', site: 1, label: 'Meisove gece', me: 'linear-gradient(135deg, #ff5f7e, #ff9a5a)', her: '#3a1a22', herFg: '#ffe0e6', herBorder: '1px solid #5a2a35', radius: '22px' },
    { id: 'site-tinder', site: 1, label: 'CarmenTinder', me: 'linear-gradient(135deg, #fd267a, #ff6036)', her: '#2b1a20', radius: '20px', tail: '20px' },
    { id: 'site-bumble', site: 1, label: 'CarmenBumble', dark: 'site-bumble-gece', me: '#ffc629', meFg: '#2b1d00', her: '#ffffff', herFg: '#2b1d00', herBorder: '1px solid #f3e3a8', radius: '18px', shadow: '0 2px 8px rgba(120, 90, 0, .1)' },
    { id: 'site-bumble-gece', site: 1, label: 'CarmenBumble gece', me: '#ffc629', meFg: '#2b1d00', her: '#2e2810', herFg: '#fff3c4', herBorder: '1px solid #4a3f14', radius: '18px' },
    { id: 'site-fans', site: 1, label: 'CarmenFans', dark: 'site-fans-gece', me: '#00aff0', her: '#ffffff', herFg: '#13212b', herBorder: '1px solid #d4e9f5', radius: '18px', shadow: '0 2px 8px rgba(0, 120, 170, .1)' },
    { id: 'site-fans-gece', site: 1, label: 'CarmenFans gece', me: '#00aff0', her: '#13242f', herFg: '#e3f4fd', herBorder: '1px solid #1f3a4a', radius: '18px' },
    { id: 'site-live', site: 1, label: 'CarmenLive', me: '#ff1744', her: 'rgba(255, 255, 255, .1)', herBorder: '1px solid rgba(255, 255, 255, .15)', radius: '16px' },
    { id: 'site-jobs', site: 1, label: 'CarmenJobs', me: '#2f6db5', her: '#f4f6fa', herFg: '#1e2a3a', radius: '8px', tail: '2px' },
    { id: 'site-school', site: 1, label: 'CarmenSchool', dark: 'site-school-gece', me: '#4527a0', her: '#ffffff', herFg: '#261a52', herBorder: '1px solid #ddd4f7', radius: '14px', shadow: '0 2px 8px rgba(69, 39, 160, .1)' },
    { id: 'site-school-gece', site: 1, label: 'CarmenSchool gece', me: '#6a4fd0', her: '#241d45', herFg: '#ece6ff', herBorder: '1px solid #3a2f6a', radius: '14px' },
    { id: 'site-church', site: 1, label: 'CarmenChurch', me: '#6d4c41', her: '#f5ecd9', herFg: '#3e2a1e', radius: '10px', tail: '2px', font: "Georgia, 'Times New Roman', serif" },
    { id: 'site-farm', site: 1, label: 'CarmenFarm', dark: 'site-farm-gece', me: '#e65100', her: '#ffffff', herFg: '#4a2400', herBorder: '1px solid #f5d3a8', radius: '16px', shadow: '0 2px 8px rgba(160, 70, 0, .1)' },
    { id: 'site-farm-gece', site: 1, label: 'CarmenFarm gece', me: '#e65100', her: '#33210f', herFg: '#ffe7c2', herBorder: '1px solid #4a3014', radius: '16px' },
    { id: 'site-massage', site: 1, label: 'CarmenMassage', me: 'linear-gradient(135deg, #c68b59, #8e5a3c)', her: '#f6ebe0', herFg: '#4a2f22', radius: '22px' },
    { id: 'site-secret', site: 1, label: 'CarmenSecret', me: '#1b5e20', her: '#111a12', herFg: '#cfe8d0', herBorder: '1px solid #2e5a31', radius: '12px' },
    { id: 'site-clinic', site: 1, label: 'CarmenKlinik', dark: 'site-clinic-gece', me: '#0277bd', her: '#ffffff', herFg: '#0d2c40', herBorder: '1px solid #d3e6f2', radius: '14px', shadow: '0 2px 8px rgba(2, 119, 189, .1)' },
    { id: 'site-clinic-gece', site: 1, label: 'CarmenKlinik gece', me: '#0288d1', her: '#13283a', herFg: '#e3f2fd', herBorder: '1px solid #1f3d55', radius: '14px' }
  ],
  // 🌐 Site temaları: o siteden açılan yeni sohbet bu [arka plan, baloncuk] ile başlar (routes = adres çubuğundaki #/<ad>)
  sites: [
    { id: 'carmen', icon: '🌹', label: 'Carmen.com', routes: ['carmen'], bg: 'site-carmen', bubble: 'site-carmen' },
    { id: 'gothic', icon: '🖤', label: 'CarmenGothic', routes: ['gothic'], bg: 'site-gothic', bubble: 'site-gothic' },
    { id: 'meisove', icon: '🍓', label: 'Meisove', routes: ['meisove'], bg: 'site-meisove', bubble: 'site-meisove' },
    { id: 'tinder', icon: '🔥', label: 'CarmenTinder', routes: ['tinder', 'esles'], bg: 'site-tinder', bubble: 'site-tinder' },
    { id: 'bumble', icon: '🐝', label: 'CarmenBumble', routes: ['bumble'], bg: 'site-bumble', bubble: 'site-bumble' },
    { id: 'fans', icon: '🫦', label: 'CarmenFans', routes: ['fans'], bg: 'site-fans', bubble: 'site-fans' },
    { id: 'gram', icon: '📸', label: 'CarmenGram', routes: ['gram'], bg: 'site-gram', bubble: 'insta' },
    { id: 'live', icon: '🔴', label: 'CarmenLive', routes: ['canli'], bg: 'site-live', bubble: 'site-live' },
    { id: 'party', icon: '🎉', label: 'CarmenParty', routes: ['parti'], bg: 'site-party', bubble: 'gece-neonu' },
    { id: 'jobs', icon: '💼', label: 'CarmenJobs', routes: ['is'], bg: 'site-jobs', bubble: 'site-jobs' },
    { id: 'school', icon: '🎓', label: 'CarmenSchool', routes: ['okul'], bg: 'site-school', bubble: 'site-school' },
    { id: 'gasino', icon: '🎰', label: 'CarmenGasino', routes: ['gasino'], bg: 'site-gasino', bubble: 'gold' },
    { id: 'church', icon: '⛪', label: 'CarmenChurch', routes: ['kilise'], bg: 'site-church', bubble: 'site-church' },
    { id: 'farm', icon: '🚜', label: 'CarmenFarm', routes: ['ciftlik'], bg: 'site-farm', bubble: 'site-farm' },
    { id: 'massage', icon: '💆', label: 'CarmenMassage', routes: ['masaj'], bg: 'site-massage', bubble: 'site-massage' },
    { id: 'secret', icon: '🐍', label: 'CarmenSecret', routes: ['gizli'], bg: 'site-secret', bubble: 'site-secret' },
    { id: 'stay', icon: '🏨', label: 'CarmenStay', routes: ['otel'], bg: 'site-stay', bubble: 'altin-isilti' },
    { id: 'clinic', icon: '🏥', label: 'CarmenKlinik', routes: ['klinik'], bg: 'pastel-mavi', bubble: 'site-clinic' },
    { id: 'amor', icon: '💘', label: 'Amor', routes: ['amor'], bg: 'amor', bubble: 'amor' }
  ],
  // Hazır temalar: arka plan + baloncuk birlikte (Amor'daki kalp düzeyi temaları)
  presets: [
    // 🌗 Otomatik (varsayılan): açık temada Carmen neon, koyu temada Carmen neon gece (app.js themeLive)
    { id: 'auto', label: 'Otomatik', icon: '🌗', bg: 'auto', bubble: 'auto', css: 'linear-gradient(135deg, #e9d6f3 0%, #e9d6f3 50%, #24103a 50%, #24103a 100%)', note: 'Açık temada Carmen neon, koyu temada neon gece' },
    { id: 'carmen-neon', label: 'Carmen neon', icon: '💜', bg: 'carmen-neon', bubble: 'carmen-neon', note: 'Lila, lavanta, pembe-mor, mercan ve gün batımı neon ışıkları' },
    { id: 'carmen-neon-gece', label: 'Carmen neon gece', icon: '🌌', bg: 'carmen-neon-gece', bubble: 'carmen-neon-gece', note: 'Koyu mor gecede parlayan neon baloncuklar' },
    { id: 'francais', label: 'Français', icon: '🇫🇷', bg: 'francais', bubble: 'francais', note: 'Français sohbet: krem kâğıt, lacivert ve kırmızı' },
    { id: 'kalp', label: 'Kalp teması', icon: '💖', bg: 'ucan-kalpler', bubble: 'kalp', note: 'Amor Lv.4: uçan kalpler + kalpli baloncuklar' },
    { id: 'mucevher', label: 'Mücevher kalp', icon: '💎', bg: 'kalp-kolye', bubble: 'kalp', note: 'Amor Lv.5: mücevher kalp + kalpli baloncuklar' },
    { id: 'halloween', label: 'Halloween', icon: '🎃', bg: 'halloween', bubble: 'halloween', note: 'Turuncu-mor, mum ışıklı Cadılar Bayramı' }
  ],
  // 🦄 Fanteziye göre sohbet teması: fantezi olayı olunca sohbet bu [arka plan, baloncuk]'a geçer (anahtar = app.js fantKey; fxdiger = listede olmayanlar)
  fantasy: {
    fxkedi: ['pastel-lila', 'seker'], fxinek: ['pastel-bulut', 'cloud'], fxtavsan: ['pastel-pembe', 'seker'], fxtilki: ['sunset', 'pastel-seftali'],
    fxkurt: ['night', 'mono'], fxseytan: ['dark', 'neon'], fxkoyun: ['pastel-bulut', 'cloud'],
    fxkopek: ['coffee', 'pastel'], fxunikorn: ['pastel-gokkusagi', 'pastel-sise'], fxbag: ['dark', 'mono'], fxgizli: ['night', 'gece-neonu'],
    fxtoy: ['pembe-ruya', 'neon'], fxkarin: ['pembe-ruya', 'kalp'], fxdolum: ['pembe-ruya', 'kalp'], fxayna: ['galaksi', 'glass'],
    fxrpklinik: ['pastel-mavi', 'imessage'], fxrpprof: ['coffee', 'paper'], fxrpofis: ['coffee', 'paper'], fxrpkampus: ['pastel-nane', 'comic'],
    fxrpmuayene: ['pastel-mavi', 'imessage'], fxrpsorgu: ['dark', 'terminal'], fxrpkapi: ['rose', 'whatsapp'], fxrpev: ['carmen-acik', 'carmen-pastel'],
    fxrpmasaj: ['sunset', 'pastel-gul'], fxrpavukat: ['night', 'paper'], fxrppsikolog: ['pastel-lila', 'pastel-lila'], fxrpgardiyan: ['dark', 'mono'],
    fxrppizza: ['sunset', 'retro'], fxrpressam: ['carmen-acik', 'paper'], fxrpdans: ['ucan-kalpler', 'neon'], fxrpfizyo: ['pastel-nane', 'pastel-nane'],
    fxrptaksi: ['night', 'gece-neonu'], fxrpmelek: ['pastel-bulut', 'cloud'], fxrpkaptan: ['ocean', 'glass'], fxrpkral: ['kalp-kolye', 'gold'],
    fxrprobot: ['galaksi', 'terminal'], fxrpelf: ['forest', 'pastel-nane'], fxrphostes: ['pastel-mavi', 'insta'], fxrprahibe: ['dark', 'paper'], fxrpbasrahibe: ['night', 'paper'],
    fxrptrainer: ['pastel-nane', 'neon'], fxrpbarmen: ['night', 'gece-neonu'],
    // ✨ Genshin
    fxrpyelan: ['ocean', 'glass'], fxrpclorinde: ['night', 'gece-neonu'], fxrpmavuika: ['sunset', 'altin-isilti'], fxrpxianyun: ['pastel-bulut', 'pastel-nane'],
    // 🎰 CarmenGasino
    fxrpgazino: ['night', 'altin-isilti'],
    // 🏢 Ofis rolleri
    fxrpplaza: ['coffee', 'paper'],
    // 🎓 Fakülte rolleri
    fxrpfakulte: ['paper', 'coffee'],
    // 🎃 Halloween rolleri
    fxrpvampir: ['halloween', 'halloween'], fxrpcadi: ['halloween', 'halloween'], fxrpfalci: ['halloween', 'halloween'], fxrpperili: ['halloween', 'halloween'],
    fxrpmaske: ['halloween', 'halloween'], fxrpkarakedi: ['halloween', 'halloween'], fxrpmumya: ['halloween', 'halloween'], fxrpsuccubus: ['halloween', 'halloween'],
    fxrphayalet: ['halloween', 'halloween'], fxrpperi: ['forest', 'galaksi'], fxrpdenizkizi: ['ocean', 'glass'], fxrpslime: ['pastel-nane', 'glass'],
    // 🍓 Meisove kızları
    fxrplimon: ['pastel-limon', 'pastel-limon'], fxrpcilek: ['pastel-pembe', 'seker'], fxrpportakal: ['pastel-seftali', 'pastel-seftali'], fxrpsarap: ['rose', 'kalp'],
    fxrpvodka: ['night', 'glass'], fxrpbal: ['sunset', 'altin-isilti'], fxrptekila: ['sunset', 'retro'], fxrpsampanya: ['kalp-kolye', 'altin-isilti'], fxrpsut: ['pastel-bulut', 'cloud'],
    fxdiger: ['pembe-ruya', 'kalp']
  },
  // Grupta üyelere tek tek verilebilen baloncuk renkleri
  memberColors: [
    ['#ff6fa8', '#ff3d8b'], ['#a78bfa', '#7b5cff'], ['#5fb4ff', '#2f6bff'], ['#34e3a8', '#0e9f8e'], ['#ffb72b', '#ff7a3d'],
    ['#c86bff', '#ff5fb0'], ['#ff8a65', '#e0334f'], ['#4dd0e1', '#0097a7'], ['#9ccc65', '#558b2f'], ['#8b9bb4', '#4b5670']
  ]
};
