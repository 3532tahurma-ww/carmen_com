# Store / persistence

**Files:** `js/store.js`, `js/app.js` (`save`, `flushSave` ~L160), backup in Ben page (`renderMe`), `docs/YEDEK-JSON.md`.

## Purpose
All data lives in the browser. Main state = `Stories.Store.state` under localStorage key `amor-stories:v2`.

## Shape (main keys)
- `user` {name, age, city, photo, params…}, `characters[]` (id, name, traits[], album[], colors, params{}, wardrobe, outfit, memory, life…), `threads[]` {id, charId | group, title, job?, kd?…}, `chats{threadId: msgs[]}` (msg: from me|her|sys, text, ts, type, src, reply, react, effect), `side`, `turns`, `pinned`, `keywords`, `monia` {events, scenarios, places, groups, cats, params, clock, flix…}, `accId`, `accounts[]`.
- Site states created lazily on S(): `shop` {orders}, `amor` {love{key: pts}, gifts{key: {giftId: n}}, sat{key: {v, ts}}, cold{key: until ts}, log[]} (old `done` unused); threads may carry `amor` / `amAsk` (💝 CarmenAmor, key = `cmRid || id`).
- Many one-time migration flags in state: `posSetup`, `cumSetup`, `evFix1`, `zevkFix1`, `descV`, `roleV`… (see systems/monia.md).
- Accounts: `ACC_KEYS = user, threads, chats, side, turns, pinned` are per-account; characters/monia/settings shared.
- 🔐 Login (app.js `authScreen`): `user.login`, `user.email`, `user.pass` (`pwHash`, local non-crypto). `amor-stories:out` ('1' logged out, 'temp' = remember-me off, paired with sessionStorage `amor-stories:out`).

## Key functions
`Store.save()` (false when quota full), `replace(data)` (import backup), `reset()`, `uid()`, `accounts/switchAccount/addAccount/removeAccount`. `migrate()` (old per-char chats → threads), `renameMod` (yeni-set → carmen).
In app.js: `save()` debounces 400 ms and also triggers `sysPush` when system save is on; `flushSave` on pagehide/visibility.

## Other localStorage keys (`amor-stories:*`)
lang (en|tr, js/i18n.js), botedit-lang (en|tr, bot editor answer view), theme, edit (✏️ edit mode), real (🌿 realistic mode), lia, helper, quick, botscore, modemusic, sfx/booksfx/sexsfx, lock (PIN), hist, book, bookchar, system (sys save cfg), news-seen, matchf, carmen-ads(2)/reviews, gothic-ads/reviews, meisove-ads/reviews, fans, stay, klinik-docs, gram, flix, party, fpsound, bot-recent, chg, create-fold, monia-fold/catfold, music, gallery.

## Change safety
- Adding a field: give it a default via `defaults()` or read with `|| {}`; old saves lack it.
- Renaming a key requires a migration in `fill()`/`migrate()`.
- Photos as data URLs fill quota fast → `save()` failing shows "Depolama dolu".
