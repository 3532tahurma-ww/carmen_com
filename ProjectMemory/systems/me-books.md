# Ben (Me) page, books & guide

**Files:** app.js `renderMe` (~L16789), accounts/onboard (~L16593), lock/bossKey (~L13239–13360), books (~L14334–16266), guide (~L16562), `js/music.js`.

## Ben
Tabs incl. ⚙️ Ayarlar (theme, ✏️ edit mode, 🌿 realistic mode, Lia, sounds, lock, 💾 system save), 🔊 Ses (`bindMusic`), backup export/import (`Store.replace`), accounts (`onboard`, `switchAccount`), history (`meHist`), PWA install.

## Books (#/kitap/<book>/<n>)
`renderBook`, `openBook`, `bookIdx(title)` (searches all books by chapter TITLE — titles must be unique across books). 8 books on 3 shelves (`BOOK_SHELVES`, rendered in `renderGuide`):
- 🧭 Kullanım: `carmen` (app usage + Sözlük), `bot` (Bot Konuşma; incl. ex-Carmen 2.0 conversation chapters), `seans` (positions, cumming, orgasm, milk, protection, `seansDesigner`/`evalSeans`)
- 📚 Başvuru: `olay` (Lia-staged events; links to #/olaylar tool `renderEvGuide`), `fantezi` (`fantBookBody`, eggs; Halloween chapters appended at END so numeric fantezi links stay valid), `ulke` (`ulkeBookBody`)
- 🌐 Dünya: `internet` (incl. Booble, Gothic.com, Meisove.com, CarmenSchool), `oyun`
- Reorg block "📚 Kitaplık düzeni" (after the İçki/Süt chapters): dismantles `yeni` (Carmen 2.0) and `halloween` books, moves/renames chapters, drops Carmen duplicates, sorts BOOKS. `BOOK_OLD[id]` keeps old chapter objects → `render` case 'kitap' redirects `#/kitap/yeni|halloween/<n>` to the new place (yeni/0 → #/haberler).
- Title-keyed maps: `BOOK_LIA`, `BOOK_ALIAS`, `GLOSS` (3rd col = chapter), `BOOK_ME`, `CTX_BOOK`, `HELP_BOOK`. Renaming a chapter → update these.
Glossary bubbles, "Senin karakterin" box (`bookMeFacts`).

## Guide (#/guide)
`renderGuide` hub → books, `renderEvGuide` (#/olaylar), `renderBotLab` (#/deney), `renderMeLines` (#/mesajlarim, me-lines.js).

## Music
`Stories.Music`: generated tracks (style/scale/seed presets), stored under `amor-stories:music`; `syncMusic()` picks menu music vs. per-thread music.

## Change safety
Books describe features in prose — when a feature changes, update its book chapter too.
