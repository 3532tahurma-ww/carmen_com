/*
 * 🗂️ Alt-kategoriler: çok olaylı kategoriler (≈30+ olay) sohbetteki olay seçicide, CarmenEvents'te, Bot deneyinde,
 * Olay rehberinde ve Olay Kitabı'nda alt başlıklara bölünür.
 * Anahtar = kategori id. Kurallar sırayla denenir, ilk tutan kazanır:
 *   tags: bu etiketlerden biri olayda varsa · re: olay adına uyan RegExp · ids: olay id'sine uyan RegExp
 *   şartı olmayan kural = geri kalanların hepsi. Hiçbiri tutmazsa 📦 Diğer.
 */
window.Stories = window.Stories || {};

Stories.SUBCATS = {
  // 💦 Cumming
  'c:mvgu3rsuko7km': [
    { id: 'halloween', icon: '🎃', label: 'Halloween', tags: ['halloween', 'kan', 'slime'] },
    { id: 'is', icon: '🏢', label: 'İş, okul ve salon', tags: ['ofis', 'okul', 'tedavi', 'kilise', 'masaj'] },
    { id: 'disari', icon: '🌃', label: 'Dışarıda', tags: ['çatı', 'araba', 'doğa', 'bar', 'sinema', 'spor', 'kamp', 'restoran', 'sokak', 'lunapark', 'perili', 'kitap', 'otel', 'asansör'] },
    { id: 'ev', icon: '🏠', label: 'Evde ve suda', tags: ['mutfak', 'merdiven', 'çamaşır', 'balkon', 'havuz', 'plaj', 'duş', 'küvet', 'sauna'] },
    { id: 'tut', icon: '⏳', label: 'Tutma ve geciktirme', re: /Still Inside|Stop-Start|Tease & Deny|Hold Together|Ruined Hold|Holding|Cock Ring/i },
    { id: 'gurx', icon: '🍈', label: 'Arasında fışkırma', ids: /^mvgx/ },
    { id: 'gur', icon: '🌊', label: 'Gür fışkırma', tags: ['gür'] },
    { id: 'damla', icon: '💧', label: 'Damla damla', tags: ['damla'] },
    { id: 'kiyafet', icon: '👗', label: 'Giyinikken', tags: ['kıyafet'] },
    { id: 'hamile', icon: '🤰', label: 'Hamile ve süt', tags: ['hamile', 'süt'] },
    { id: 'ic', icon: '🍑', label: 'İçine ve çekme', tags: ['vajinal', 'anal', 'çekme', 'kondom'] },
    { id: 'oral', icon: '👄', label: 'Ağza ve yüze', tags: ['oral'] },
    { id: 'gogus', icon: '🍈', label: 'Göğüslere', tags: ['göğüs'] },
    { id: 'bacak', icon: '🦵', label: 'Bacaklara', tags: ['bacak'] },
    { id: 'kalca', icon: '🍑', label: 'Kalçaya', tags: ['kalça'] },
    { id: 'el', icon: '✋', label: 'Elle', tags: ['el'] }
  ],
  // 🗜️ Squeeze
  'c:mvsqueeze01x': [
    { id: 'engel', icon: '🛑', label: 'Engelleme', tags: ['engel'] },
    { id: 'pin', icon: '🧱', label: 'Duvara ve dar yere', ids: /^mvsq0(0\d|1\d|20)/ },
    { id: 'kiyafet', icon: '👖', label: 'Kıyafetli', tags: ['kıyafet'] },
    { id: 'gogus', icon: '🍈', label: 'Göğüs arası', tags: ['göğüs'] },
    { id: 'bacak', icon: '🦵', label: 'Uyluk arası', tags: ['bacak'] },
    { id: 'kalca', icon: '🍑', label: 'Kalça arası', tags: ['kalça'] }
  ],
  // 🦄 Fantesy
  'c:mvgwj75108lqd': [
    { id: 'genshin', icon: '✨', label: 'Genshin', tags: ['genshin'] },
    { id: 'gazino', icon: '🎰', label: 'Gazino', tags: ['gazino'] },
    { id: 'rahibe', icon: '⛪', label: 'Rahibe', tags: ['rahibe', 'basrahibe'] },
    { id: 'fakulte', icon: '🎓', label: 'Fakülte', tags: ['fakulte'] },
    { id: 'ofis', icon: '🏢', label: 'Ofis', tags: ['plaza'] },
    { id: 'halloween', icon: '🎃', label: 'Halloween', tags: ['halloween'] },
    { id: 'rol', icon: '🎭', label: 'Roller', tags: ['roleplay'] },
    { id: 'hayvan', icon: '🐾', label: 'Hayvan kızlar', re: /\bGirl\b/i },
    { id: 'fetis', icon: '🔥', label: 'Fetişler' }
  ],
  // 🏢 Office
  'c:mvoffice01x': [
    { id: 'seks', icon: '🔥', label: 'Seks', tags: ['vajinal', 'anal', 'oral'] },
    { id: 'gogus', icon: '🍈', label: 'Göğüs arası', tags: ['göğüs'] },
    { id: 'bacak', icon: '🦵', label: 'Uyluk arası', tags: ['bacak'] },
    { id: 'kalca', icon: '🍑', label: 'Kalça arası', tags: ['kalça'] },
    { id: 'flort', icon: '😏', label: 'Flört ve risk' }
  ],
  // 🥛 Lactation
  'c:mvgwupu3we8yl': [
    { id: 'miktar', icon: '📏', label: 'Miktar', re: /^(Drops|Low-volume|Normal|High-volume|Squirt) (Woter|Milk)$/i },
    { id: 'fantastik', icon: '🧚', label: 'Fantastik sütler', re: /Crimson|Slime|Moonlight|Holy|Synthetic|Potion|Seafoam|Rainbow|Kitten|Fairy|Full Moon|Hellfire|Fleece/i },
    { id: 'cesit', icon: '🥛', label: 'Çeşitler' }
  ],
  // 🤲 Outercourse
  'c:mvgn2ubfw2eoh': [
    { id: 'halloween', icon: '🎃', label: 'Halloween', tags: ['halloween'] },
    { id: 'kondom', icon: '🎈', label: 'Kondomlu', tags: ['kondom'] },
    { id: 'kiyafet', icon: '👖', label: 'Kıyafetli sürtme', tags: ['kıyafet'] },
    { id: 'oral', icon: '👄', label: 'Oral', tags: ['oral'] },
    { id: 'ciplak', icon: '✋', label: 'El, göğüs, bacak, kalça' }
  ],
  // 🔗 BDSM
  'c:mvbdsm01x': [
    { id: 'baglama', icon: '⛓️', label: 'Kısıtlama', re: /Tied|Handcuffs|Shibari|Spreader|Hands Behind|Collar/i },
    { id: 'vurma', icon: '🔥', label: 'Acı ve haz', re: /Spanking|Paddle|Riding Crop|Flogger/i },
    { id: 'oyuncak', icon: '🧸', label: 'Oyuncaklar', re: /Vibrator|Remote Toy|Butt Plug|Nipple Clamps|Ball Gag/i },
    { id: 'kural', icon: '👑', label: 'Kurallar ve itaat', re: /Address Rule|Safe Word|Permission|Kneel|Thank You|Follow Me|Edging|Ruined/i },
    { id: 'duyu', icon: '🕯️', label: 'Duyusal' }
  ],
  // 👗 Undress
  'c:mvundress01x': [
    { id: 'giyin', icon: '👚', label: 'Giyinme', re: /^(Get Dressed|Put )/i },
    { id: 'gosteri', icon: '💃', label: 'Gösteri', re: /Striptease|Mirror Strip|Lap Strip|Shy Undress|Undress Her|Undress Each Other|Teeth Strip/i },
    { id: 'yarim', icon: '👀', label: 'Yarım soyunma', re: /Skirt Up|Top Down|Panties Aside|Bra Under Shirt|Panties Under Skirt|Pocket Panties/i },
    { id: 'soyun', icon: '👗', label: 'Soyunma' }
  ],
  // ➡️ Forward
  'c:mvglvwdtam0h7': [
    { id: 'halloween', icon: '🎃', label: 'Halloween', tags: ['halloween', 'kan', 'slime'] },
    { id: 'tedavi', icon: '🏥', label: 'Tedavi', tags: ['tedavi'] },
    { id: 'klasik', icon: '🛏️', label: 'Klasik' }
  ]
};
