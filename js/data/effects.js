/*
 * Mesaj efektleri (mesaja dokun → ✨ Efekt, ya da ✨ ile sonraki mesaja)
 *   bubble: baloncuğun kendisine uygulanır (animasyonlar css/stories.css'te .fx-<id>)
 *   screen: mesaj gelince ekrana emoji yağar
 * Anahtar kelimelere de efekt bağlanabilir; kelime geçen mesajlar o efektle görünür.
 */
window.Stories = window.Stories || {};

Stories.Effects = {
  bubble: [
    { id: 'shake', label: 'Titreme', icon: '📳' },
    { id: 'slam', label: 'Çarpma', icon: '💥' },
    { id: 'loud', label: 'Bağırma', icon: '📢' },
    { id: 'gentle', label: 'Fısıltı', icon: '🤫' },
    { id: 'glow', label: 'Parıltı', icon: '🌟' },
    { id: 'rainbow', label: 'Gökkuşağı', icon: '🌈' },
    { id: 'ink', label: 'Görünmez mürekkep', icon: '🫥' },
    { id: 'whisper', label: 'Kulağına', icon: '🤫' },
    { id: 'typewriter', label: 'Daktilo', icon: '⌨️' },
    { id: 'blush', label: 'Kızarma', icon: '😳' },
    { id: 'tremble', label: 'Ürperme', icon: '🫨' },
    { id: 'heartbeat', label: 'Nabız', icon: '💓' },
    { id: 'smudge', label: 'Ruj izi', icon: '💋' },
    { id: 'steam', label: 'Buğu', icon: '♨️' },
    { id: 'drip', label: 'Damla', icon: '💧' }
  ],
  // 🤖 kendiliğinden: mesaj bu kalıba uyarsa (seçilmiş efekti / anahtar kelimesi yoksa) bu efektle görünür
  auto: [
    { re: /^\s*\*?\s*(fısıld|kulağına)|^\s*\(fısıltı\)/i, fx: 'whisper' },
    { re: /\*\s*(fısıldar|fısıldıyor)/i, fx: 'whisper' }
  ],
  screen: [
    { id: 'hearts', label: 'Kalpler', icon: '💖', emojis: ['💖', '💗', '💕', '❤️'] },
    { id: 'confetti', label: 'Konfeti', icon: '🎉', emojis: ['🎉', '🎊', '✨', '🥳'] },
    { id: 'fireworks', label: 'Havai fişek', icon: '🎆', emojis: ['🎆', '🎇', '✨'] },
    { id: 'rain', label: 'Yağmur', icon: '🌧️', emojis: ['💧', '💦', '🌧️'] },
    { id: 'fire', label: 'Ateş', icon: '🔥', emojis: ['🔥', '💥', '🔥'] }
  ]
};
