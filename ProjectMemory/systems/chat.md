# Chat (sohbet)

**Files:** `js/app.js` `renderChat` (~L6266–9845, the biggest block), messages list `/* ---------- Mesajlar` (~L5455), profile (~L5733), `js/data/themes.js`, `effects.js`, `emojis.js`, `places.js`, `me-lines.js`, `css/stories.css`.

## Purpose
Messaging screen for a thread (single character or group). User picks who writes (me / her / sys note), or bot mode answers.

## Inside renderChat (sub-sections, grep the header)
- `Geri alma (↶)` undo stack (40 steps/thread, session only).
- `🪄 Otomatik ekler` addons from bot data (`Bot.addons`).
- `🤖 Bot modu` — see systems/bot.md. Player state from 🙋 params (Zevk, Cum) picks rule context (`zevkyuksek`, `cumdolu`…). `cmdEvent`, `askTopic`.
- `📍 Mekan ve ipuçları` place card at start + hint every `HINT_EVERY` messages.
- `🔍 Arama`, `🖼️ Büyük fotoğraf` (photo stage over chat), `😊 Emoji paneli`.
- `#` in input → event search/insert (`hashSuggest`, `evSearch`) — events come from Monia (systems/monia.md); outcome comes from the character.
- ▶️ play mode (`playTimer`), sides (`S().side`, `S().turns`).
- After renderChat: bot text building — `hitapOf`, questions `=sor/=cevap` (`yesNo`), persona/writing style, `learnFacts`/`hatira` (c.memory), placeholders in replies (~L9123), `weightPool`, `dickPool`, Dominance, `fillTraits`, `feelBlock`, `itemHtml` (one message), `drawMessages`.

## Themes / effects
- Theme priority: thread theme > character default > Amor (`bubbleVars`, `themeCss`, `themeClasses`). New theme → `js/data/themes.js`.
- Effects: bubble `.fx-<id>` / screen bursts (`playFx`, `burst`); keywords per character (`keywordSheet`, `kwStats`, `effectOf`); emoji effects `.efx-<id>` (`emojiFxOf`).

## Messages list / profile
`renderMessages` (rows, groups, pin max 4, rename/duplicate/delete thread), `renderProfile` tabs (profile, album, chats, keywords, wear, diary `diaryOf`).

## Change safety
- Message objects are persisted; new fields must be optional.
- Any change touching `itemHtml`/`drawMessages` affects play mode, search and groups too.
