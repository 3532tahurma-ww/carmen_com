# Home & "internet" sites

**Files:** app.js L479–5328 (each site has a header comment with its route). Shared parts `🌐 diğer siteler: ortak parçalar` (~L2511).

## Home
`renderHome` (Lia news card → 💘 Eşleş → 🌐 sites → feed of Carmen.com ads), `renderNews` (#/haberler), `renderMatch` (#/esles|#/tinder swipe deck → saves char + opens chat; top strip 💘 Seni beğenenler = `tnLikes()` session list (`ui.tnLikes`, 3–6 random girls, 20% ⭐), first messages `tnFirst` (by personality `TN_FIRST`, + same city / bio / star lines), tap → sheet, Eşleş → `matchStart(c, star, first)` seeds the thread with her messages, `matchOv` overlay).

## New event themes in ads
`CM_NEW_EV` lists the themes; `cmNewEv(x)` gives each ad liked events once (flag `x.newEv1`, called from `cmFix`, `gtFix`, `msFix`). `CM_GOOD_EV` keys are `tr` lowercased, so `Ice Tease` is `ıce tease` and `Islak Fantezi` is `ıslak fantezi`. Adding a theme for existing ads needs a new flag: place themes (`CM_NEW_V2`) use `x.newEv2`. Choise reads the same themes in `chPool` and `chSay`.

`cmHwFix(x)` runs inside `cmNewEv` before its flag check, so saved ads get it too; a Hotwife ad shows a "Kocamın izniyle" chip, an about line, `CH_HW` offers and `CH_PITCH_HW` pitches. Carmen.com's `hw` filter tab lists characters with `fields.hotwife`. `cmRules` hands these to `cmHwRules` (pools `CM_HW_*`, picks via `cmHwPick`); decisions still come from `cmProt` / `insT`. Gothic and Meisove rules have no Hotwife variant.

Meisove `MS_TYPES` (9: limon, cilek, portakal, sarap, vodka, bal, tekila, sampanya, sut): each type's `name` must equal its system.js event title and a `FANT_KEYS` prefix (`fxrp<id>`). A new type needs: event, `FANT_KEYS`, `FANT_BOOK`, Olay Kitabı line, bot rules (`r_rp_<id>*`, `r_*_fxrp<id>`), me-lines (3 blocks), `fant-interrupts.js`, EN. Saved ads keep their `msType`, so new types only appear in newly generated ads.

## 🎭 Roles across sites (v701)
`RP_ROLES` (app.js, after `wearCos`): `[fantKey, ic, event title, short, first line, place, spot, hint, 'cm gt', ad pitch]` for melek, kaptan, kral, robot, elf, hostes, rahibe, taksi. Helpers: `rpRole(k)`, `fantEvByKey(k)` (RP_ROLES / HW_ROLES title, else fantKey match), `rpOpen(c0, k, o)` (adopt, scene, `wearCos`, `rpBegin`, greet + costume line; returns thread), `rpAdFix(x, site)`, `rpAdStart(c0, site)`, `rpAdHtml`.
- Carmen.com: `cmFix` → `rpAdFix(x,'cm')` once (`x.rp1`), 1/5 ads get `x.adRole` (skips Meisove ads, which also pass cmFix). Card chip, profile "🎭 Rol ilanı" section, `[data-rpgo]` → `rpAdStart` (pays session 2, no meet).
- Gothic: `gtFix` → `rpAdFix(x,'gt')` 1/4; profile button "🎭 <role> olarak başla" uses adRole or first Halloween role; halloween theme.
- Party: venue `Kostüm Partisi` (`PT_COS`, `ptIsCos`, `ptCosRole`, `ptCosStart`), button `#ptCos`; adding the venue shifted nightly venue order.
- Flix: 8 `dizi` titles with `rp` + tropes `rp_*` (`Object.assign(FX_TROPE…)`), genre `rol`; `fxRolePlay` → `rpOpen` for `x.rp`.
- Jobs: 8 `JOB_ROLES` entries at the top (hostes/kabin, kaptan/pilot/denizci, şoför/kurye, yazılım/mühendis, çiçekçi/bahçıvan, ceo/direktör/kuyumcu, kütüphane/arşiv, sosyal hizmet/gönüllü).
- Shop: costume products carry `fant`; `shopTick` on a role costume: wears it, `quickPin(fant event)`, she offers the role.

## Sites (prefix → route)
| Prefix | Site | Route |
|---|---|---|
| `cm` | 🌹 Carmen.com escort-style ads, meet negotiation (`renderCarmenMeet`), sessions/timer (`sessSet`) | #/carmen |
| `gt` | 🦇 Gothic.com | #/gothic |
| `ms` | 🍓 Meisove.com | #/meisove |
| `bb` | 🔍 Booble search engine; `netSites()` lists all sites | #/booble |
| `ch` | 👑 CarmenChoise tournament (`chDeal` rewards) | #/choise |
| `fn` | 🫦 CarmenFans subscriptions | #/fans |
| `sy` | 🏨 CarmenStay hotel → new thread with place card | #/otel |
| `shop` | 🛍️ CarmenShop orders, `shopTick` delivery | #/shop |
| `kl` | 🩺 CarmenKlinik cycle/fertility/pregnancy, doctors | #/klinik |
| `job/gig` | 💼 CarmenJobs + gigs paying into CarmenBank (`bankAdd`, `th.job`) | #/is |
| `sc` | 🎓 CarmenSchool | #/okul |
| `cc` | 🏙️ CarmenCity bird's-eye map: `CC_B` buildings (% positions), `CC_WORK` job group → workplace, `ccWhere(c, h)` routine (work hours, night shift for 1/3 of Sağlık, DJ/barmen/dansçı night jobs, free time seeded by id+hour+day). Homes: `CC_HOMES` (5 houses + `apt`, top of map, `.cc-home`), `ccHomes(cs)` builds households (married `fields.evli`/`hotwife` → alone with husband, others 1–3 by id hash; first 5 households → houses, rest → Apartman flats); `ccWhere` returns `evler`, `renderCity` maps it to the household's house and adds husband / housemate doings (`CC_KOCA_D`, `CC_ROOM_D`). Saved chars only, hour slider `ui.ccH`, building card `ui.ccB`, tap → `openChat`. CSS `.cc-*` at end of stories.css | #/sehir |
| `gi` | ✨ CarmenImpact (Genshin): cards from `modOf('genshin').characters` + `GS_BOOK`; `GI_EV[title]` = scene (hour, place, spot, hint, greet); `giChar(p)` = saved char with `set 'genshin:<key>'` else `blankChar()` + `applyPreset`; `giStart` (cmAdopt → thread, scene, fantasy theme from `TH.fantasy`, `rpBegin`, greet), `giGo` overlay, 🌠 wish = random char + event, 💬 = `cmChat` or last thread. Inline `<style>` (`.gi-*`), so no dark.css regen needed. New Genshin event → add a `GI_EV` entry too | #/impact |
| `cf` | 💬 Confessly confessions | #/itiraf |
| `cr` | ✨ CarmenCreative event idea generator | #/creative |
| `gr` | 📸 Carmentagram | #/gram |
| `fx` | 🎬 CarmenFlix (scripted chats; studio in Monia `renderFlixStudio`) | #/flix |
| — | 🎥 CarmenLive | #/canli |
| `pt` | 🎉 CarmenParty (+ 🎃 Halloween roles `HW_ROLES`) | #/parti |
| — | 🎃 Halloween showcase | #/halloween |

## Pattern
Generated ad girls are stored in their own localStorage key (`*-ads`), `xxAdopt(c)` turns one into a real character, `xxChat` opens a thread. Reviews in `*-reviews`.
Counts (v702): 100 each (`CM_N`, `MS_N`, `GT_N`). Photo sets are limited (113 Amor sets shared by Carmen + Meisove, 17 Emily for Gothic), so after unique sets faces repeat; dedupe is by ad id. Gothic repeats take a random name/bio. Hash note: `cmNum(x,'a',n)` and `cmNum(x,'b',n)` with the same n are correlated; use `cmPicks` for a second independent pick.

## Change safety
New site = route case + `renderX` + `netSites()` entry + (optional) Lia `HELP`, İnternet Kitabı chapter (~L15091).
Ad rule lines (`cmRules`/`gtRules`/`msRules` pools: CM_KON*, CM_NOKON, CM_NOIN, CM_INS*, CM_FREE3, CM_HW_*, GT_*, MS_*): each new [title, desc] needs EN keys (trailing emoji stripped) in `i18n-en-ads*.js` (adT). Growing a pool reshuffles existing ads' lines (id-hashed picks). Keep lines consistent with the pool's permission (NOIN/pull = never inside; KON = never mention inside except CM_KONC).
