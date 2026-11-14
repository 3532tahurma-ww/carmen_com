# Routing & shared UI

**Files:** `js/app.js` (`/* ---------- Yönlendirme` ~L370, helpers L37–370, Lia/theme ~L5328–5455, Başlat ~L17081), `index.html`.

## How it works
- Hash routes `#/<name>/<id>/<extra>` → `parseRoute()` → `render()` switch. `render()` resets `view.onclick/onchange`, removes sheets, stops play/bot timers, page-in animation, `syncMusic()`, `histPush()`, `drawHelper()`.
- Full-screen (no nav): `p`, `chat`, `create/<id>`.
- Edit-mode gate: `create` and `monia` require `editOn()` (Ben → ⚙️ Ayarlar → ✏️); otherwise redirect to `#/me`.

## Route table
home, messages, me, p/<charId> (profile), chat/<threadId>, create[/<id>], monia[/<id>/<extra>], hikayeler, bot, kurallar[/izin], deney (bot lab), esles|tinder|bumble, booble|internet, haberler, carmen, gothic, meisove, choise, fans, otel, shop, klinik, is, okul, itiraf, creative, gram, flix, canli, parti, oyun[/ps|fp[/play]], kitap/<book>/<n>, guide, olaylar, mesajlarim, kesinti, kiyafet, halloween. Unknown → home.

## Shared helpers
`avatar`, `userAvatar`, `fmtTime`, thread helpers (`threads`, `threadsOf`, `groupsOf`, `membersOf`, `msgsOf`, `newThread`, `openChat`), `notify(text, icon)`, `sheet(html)` bottom sheet, `readPhoto`, `pageHero(...)` page header card, `lightbox`, `copyText`.
- Global toggles: `themePref/applyTheme` (light/dark/auto), `editOn`, `realOn` (🌿 Gerçekçi Mod, forced on when edit mode off), `liaOn`, `quickOn`, `scoreOn`.
- 💁 Lia helper (`HELPER`, `HELP{route: steps[]}`, `drawHelper`): per-page tips; add a key to `HELP` for new pages.
- Startup: `blink` click sound, `syncMusic`, `initLock` (PIN/WebAuthn), `bossKey` (fake calculator), PWA `installCard`, `onboard` when user has no name.

## Change safety
- New page = add `case` in `render()` + `renderX()` + (optionally) `HELP` entry, nav/booble link, book chapter.
- Pages must set `view.onclick` themselves (render clears it).
