# Store / persistence

**Files:** `js/store.js`, `js/app.js` (`save`, `flushSave` ~L160), backup in Ben page (`renderMe`), `docs/YEDEK-JSON.md`.

## Purpose
All data lives in the browser. Main state = `Stories.Store.state` under localStorage key `amor-stories:v2`.

### ⚡ Split storage (v1090)
- `amor-stories:v2` = state with `chats: {}`, `monia: null` and `__split: [active-account thread ids]`; each active-account chat in `amor-stories:v2:c:<threadId>`, `monia` in `amor-stories:v2:p:monia` (`PARTS` in store.js). Other accounts' chats stay inline in `accounts[]`.
- `save()` stringifies each part but only `setItem`s the keys whose text changed (`written` map); chats first, main last; keys of deleted threads are removed (first save also sweeps stray `:c:` keys). Big save: ~95 ms → ~20 ms, main key 1.3 MB → ~120 KB.
- `readSplit()`: with `__split`, chats / parts come from their keys. Without it (old single-key format, or an old-version tab wrote it) the main JSON is used as-is and any `:c:` keys are merged in by message id (sorted by ts), so nothing is lost; the next save converts to the split format.
- app.js `save()` debounces 400 ms then waits for `requestIdleCallback` (timeout 1.6 s); `flushSave` still runs on pagehide / hidden. Nothing else reads the localStorage keys directly — always go through `Stories.Store`.

## Shape (main keys)
- `user` {name, age, city, photo, params…}, `characters[]` (id, name, traits[], album[], colors, params{}, wardrobe, outfit, memory (+ dogum / aile / hobi v1087), anilar (📔 v1087, see chat.md), life…), `threads[]` {id, charId | group, title, job?, kd?…}, `chats{threadId: msgs[]}` (msg: from me|her|sys, text, ts, type, src, reply, react, effect), `side`, `turns`, `pinned`, `keywords`, `monia` {events, scenarios, places, groups, cats, params, clock, flix…}, `accId`, `accounts[]`.
- Site states created lazily on S(): `shop` {orders}, `amor` {love{key: pts}, gifts{key: {giftId: n}}, sat{key: {v, ts}}, cold{key: until ts}, log[]} (old `done` unused); threads may carry `amor` / `amAsk` (💝 CarmenAmor, key = `cmRid || id`).
- Many one-time migration flags in state: `posSetup`, `cumSetup`, `evFix1`, `zevkFix1`, `descV`, `roleV`… (see systems/monia.md).
- Accounts: `ACC_KEYS = user, threads, chats, side, turns, pinned` are per-account; characters/monia/settings shared.
- 🔐 Login (app.js `authScreen`): `user.login`, `user.email`, `user.pass` (`pwHash`, local non-crypto). `amor-stories:out` ('1' logged out, 'temp' = remember-me off, paired with sessionStorage `amor-stories:out`). sessionStorage `amor-stories:au` = auth tab + typed id/mail kept across the language-switch reload. Validation helpers `AU_ID_RE`, `AU_MAIL_RE`, `accFind(v, skipId)` are shared with Ben → Profil 🔐 Hesap bilgileri (edit login / email, change password). Register → profile is one overlay: `authScreen(tab, pre, host)` / `onboard(add, auth, host)` swap content inside the same element (`auShell`: fixed `.au-bg` photo columns `auBg` + `.au-wrap`), step chips `auSteps(0|1|2)`, slogan `.au-slogan`. After the profile steps `onboard` goes straight to the final "Hazırsın" card (v1142: intro tour removed; start buttons only 🏙️ `#/sehir` / 🏠 `#/home`).
- 🌟 `amor-stories:siteplus` (v1099, app.js `spSt` / `spSet`): per-browser site extras, not in backup — `bask` (Meisove basket ids), `job` { lvl, cv, day }, `gi` { gems, pity, col, q, el, day }, `ga` { chips, won }, `kc` { conf, tes, d }, `fm` { <rid>: { n, d } }, `mz` { st, ap[] }, `se` { name, open, gone, read, clean[] }, `kl` { rx }. Carmen reviews stay in `amor-stories:carmen-reviews` (`cmMyRev`).
- Character `likes` / `dislikes` (event ids) are capped at 7 / 3 in `save()` (`FEEL_MAX`, `capFeels`; newest kept).
- `user.colors` [a, b]: avatar gradient when there is no photo (`U_COLORS`, picked in onboarding photo step or Profil → 👤 Kişisel). `user.likes` can now be filled in onboarding (❤️ step).
- 👩‍❤️‍👩 `user.gender` '♂' (default when empty) / '♀', asked in onboarding (v934); ♀ = every relationship is lesbian; ♀ → `user.exp` 🌸 Tecrübe (`EXP_LEVELS`), `user.dick` emptied and kept in `user.dickM` until switching back to ♂ (v933).
- ⚧️ v1023: `user.gender` also '⚧♀' Trans Kadın / '⚧♂' Trans Erkek (onboarding + Ben → Profil, 4 buttons). app.js helpers: `meG()` (Stories.meG), `meFemale()` = anatomy (♀ / ⚧♂ → no penis, lesbian path, 🌸 exp), `meFemAddr()` = address (♀ / ⚧♀), `meTransF()`, `GENDER_L` labels. ⚧♀ = penis path (dick) + `lesExtra` (Lesbian Foreplay / After allowed in `lesBlock` / `sceneNo`). Characters: `c.gender` '⚧♂' (`isTransM`), see characters-create.md.

## Key functions
`Store.save()` (false when quota full), `replace(data)` (import backup), `reset()`, `uid()`, `accounts/switchAccount/addAccount/removeAccount`. `migrate()` (old per-char chats → threads), `renameMod` (yeni-set → carmen).
In app.js: `save()` debounces 400 ms and also triggers `sysPush` when system save is on; `flushSave` on pagehide/visibility.

## Other localStorage keys (`amor-stories:*`)
lang (en|tr, js/i18n.js), botedit-lang (en|tr, bot editor answer view), theme, edit (✏️ edit mode), real (🌿 realistic mode), lia, helper, quick, botscore, modemusic, sfx/booksfx/sexsfx, lock (PIN), hist, book, bookchar, system (sys save cfg), news-seen, matchf, carmen-ads(2)/reviews, gothic-ads/reviews, meisove-ads/reviews, fans, stay, klinik-docs, gram, flix, party, fpsound, bot-recent, chg, create-fold, monia-fold/catfold, music, gallery.

## Change safety
- Adding a field: give it a default via `defaults()` or read with `|| {}`; old saves lack it.
- Renaming a key requires a migration in `fill()`/`migrate()`.
- Photos as data URLs fill quota fast → `save()` failing shows "Depolama dolu".
