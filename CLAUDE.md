# Amor Stories (Carmen)

Saf HTML + CSS + JS mesajlaşma/hikaye uygulaması. Derleme/sunucu yok, GitHub Pages'te çalışır. Proje Türkçe (UI, README, bat dosyaları); kod/identifier İngilizce.

## Token efficiency
- `js/app.js` (~1.1 MB) ve `css/stories.css` (~270 KB) çok büyük: ASLA tamamını okuma. Grep ile bul, sonra `offset`/`limit` ile ilgili satır aralığını oku.
- Okuma: `characters/`, `Music/`, `mods/**` (resim/ses), `*.png|jpg|ogg`, `sw.js` cache listesi, `js/data/photos.js`, `js/data/mod-photos.js` (otomatik üretilir), `bot-kurallari-*.json`, `js/data/amor-pools.js`.
- Subagent açma (ben istemedikçe). Küçük işlerde planlama/keşif yapmadan doğrudan uygula.
- Değişen satırları göster, tam dosya gösterme.

## Bilgi kütüphanesi
- Oturum başında `ProjectMemory/INDEX.md`'yi oku, sadece ilgili dokümanları aç. Bir sistemi etkileyen her değişiklikte o doküman + `changelog.md` + `status.md` + `INDEX.md` aynı görevde güncellenir.

## Yapı
- `index.html` iskelet; `js/app.js` tüm ekranlar; `js/store.js` localStorage.
- `js/data/`: `traits.js`, `pools.js`, `mods.js` (mod tanımları), `themes.js` (sohbet temaları).
- Otomatik üretilenler (elle düzenleme): `js/data/photos.js`, `js/data/mod-photos.js` → `fotograflari-guncelle.bat` / `tools/build-photos.ps1`, `tools/build-mods.ps1`.
- `css/dark.css` otomatik üretilir (`tools/build-dark.js`, `style.css` + `stories.css` okur). Elle düzenleme: `css/dark-base.css`. Çıktıyı düzenleme; `style.css`/`stories.css` değişince yeniden üret (çalıştırma komutu script başlığında; önce sor).
- Yeni mod: görselleri `mods/<mod>/` altına koy + `js/data/mods.js`'e giriş ekle.
- Yeni tema: `js/data/themes.js`.
- Dil (EN varsayılan / TR): `js/i18n.js` ekrandaki Türkçe metni `js/data/i18n-en*.js` sözlüğünden çevirir. Yeni arayüz metni eklersen sözlüğe de ekle.

## Kurallar
- Mevcut stil/isimlendirmeye uy; en küçük değişiklik. İlgisiz refactor yok, yeni bağımlılık yok.
- Build adımı yok: değişikliği doğrulamak için tarayıcıda `index.html` açılır; test/linter yoksa bunu belirt.
- `sw.js` önbellek sürümü: her güncellemede `VERSION`'ı kendin bir artır (sormadan).
- Resim eklendi/silindi ise `fotograflari-guncelle.bat` çalıştırılmalı (kendin çalıştırmadan önce sor).

## Güvenlik
- Dosya silmeden önce sor. Secret/API key/.env commit etme.
