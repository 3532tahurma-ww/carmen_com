/*
 * Sohbetteki 😊 Emoji paneli: varsayılan kısayollar ve emoji efektleri
 *   bar     : ilk açılışta panelde görünen emojiler (uygulamada "Düzenle" ile ekleyip çıkarabilirsin)
 *   effects : bu emojiler bir mesajda geçince baloncuğa verdiği efekt (uygulamada emojiye göre değiştirilebilir)
 *   list    : efektlerin adları (animasyonlar css/stories.css'te .efx-<id>)
 * Yeni eşleşme eklemek için effects'e '🍓': 'sparkle' gibi bir satır yaz.
 */
window.Stories = window.Stories || {};

Stories.Emojis = {
  bar: ['💧', '🔥', '❄️', '⚡', '❤️', '👻', '✨', '🌊', '😂', '😭', '🥺', '😏', '🙈', '😳', '💀', '👀', '🫠', '😘', '🥰', '😡'],
  effects: {
    '💧': 'wet', '💦': 'wet', '🌧️': 'wet',
    '🔥': 'burn', '❤️‍🔥': 'burn',
    '❄️': 'frozen', '🥶': 'frozen', '🧊': 'frozen',
    '⚡': 'zap', '🌩️': 'zap',
    '❤️': 'beat', '💓': 'beat', '💗': 'beat', '💖': 'beat',
    '👻': 'ghost', '🫥': 'ghost',
    '✨': 'sparkle', '🌟': 'sparkle', '💫': 'sparkle',
    '🌊': 'wave', '🫠': 'wave',
    '😂': 'bounce', '🤣': 'bounce',
    '😭': 'tears', '🥺': 'tears', '😢': 'tears',
    '😡': 'rage', '🤬': 'rage', '😤': 'rage',
    '💀': 'fade', '☠️': 'fade',
    '👀': 'peek', '🫣': 'peek',
    '🥵': 'steam', '♨️': 'steam',
    '💋': 'smudge', '😘': 'smudge',
    '🍑': 'wobble', '🍆': 'wobble',
    '🌹': 'petals', '💐': 'petals', '🌸': 'petals',
    '🎉': 'party', '🥳': 'party', '🎊': 'party',
    '😳': 'blush', '🙈': 'blush', '☺️': 'blush'
  },
  list: [
    { id: 'wet', label: 'Islanır', icon: '💧' },
    { id: 'burn', label: 'Yanar', icon: '🔥' },
    { id: 'frozen', label: 'Donar', icon: '❄️' },
    { id: 'zap', label: 'Elektrik', icon: '⚡' },
    { id: 'beat', label: 'Kalp atışı', icon: '❤️' },
    { id: 'ghost', label: 'Hayalet', icon: '👻' },
    { id: 'sparkle', label: 'Parıldar', icon: '✨' },
    { id: 'wave', label: 'Dalgalanır', icon: '🌊' },
    { id: 'bounce', label: 'Zıplar', icon: '😂' },
    { id: 'tears', label: 'Gözyaşı', icon: '😭' },
    { id: 'rage', label: 'Kızarır', icon: '😡' },
    { id: 'fade', label: 'Solar', icon: '💀' },
    { id: 'peek', label: 'Gözetler', icon: '👀' },
    { id: 'steam', label: 'Buğulanır', icon: '🥵' },
    { id: 'smudge', label: 'Ruj izi', icon: '💋' },
    { id: 'wobble', label: 'Sallanır', icon: '🍑' },
    { id: 'petals', label: 'Yapraklar', icon: '🌹' },
    { id: 'party', label: 'Kutlama', icon: '🎉' },
    { id: 'blush', label: 'Utanır', icon: '😳' }
  ]
};
