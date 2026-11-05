# Home & "internet" sites

**Files:** app.js L479–5328 (each site has a header comment with its route). Shared parts `🌐 diğer siteler: ortak parçalar` (~L2511).

## Home
`renderHome` (Lia news card → 💘 Eşleş → 🌐 sites → feed of Carmen.com ads), `renderNews` (#/haberler), `renderMatch` (#/esles swipe deck → saves char + opens chat).

## New event themes in ads
`CM_NEW_EV` lists the themes; `cmNewEv(x)` gives each ad liked events once (flag `x.newEv1`, called from `cmFix`, `gtFix`, `msFix`). `CM_GOOD_EV` keys are `tr` lowercased, so `Ice Tease` is `ıce tease` and `Islak Fantezi` is `ıslak fantezi`. Adding a theme for existing ads needs a new flag. Choise reads the same themes in `chPool` and `chSay`.

`cmHwFix(x)` runs inside `cmNewEv` before its flag check, so saved ads get it too; a Hotwife ad shows a "Kocamın izniyle" chip, an about line, `CH_HW` offers and `CH_PITCH_HW` pitches. Carmen.com's `hw` filter tab lists characters with `fields.hotwife`. `cmRules` hands these to `cmHwRules` (pools `CM_HW_*`, picks via `cmHwPick`); decisions still come from `cmProt` / `insT`. Gothic and Meisove rules have no Hotwife variant.

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
| `cf` | 💬 Confessly confessions | #/itiraf |
| `cr` | ✨ CarmenCreative event idea generator | #/creative |
| `gr` | 📸 Carmentagram | #/gram |
| `fx` | 🎬 CarmenFlix (scripted chats; studio in Monia `renderFlixStudio`) | #/flix |
| — | 🎥 CarmenLive | #/canli |
| `pt` | 🎉 CarmenParty (+ 🎃 Halloween roles `HW_ROLES`) | #/parti |
| — | 🎃 Halloween showcase | #/halloween |

## Pattern
Generated ad girls are stored in their own localStorage key (`*-ads`), `xxAdopt(c)` turns one into a real character, `xxChat` opens a thread. Reviews in `*-reviews`.

## Change safety
New site = route case + `renderX` + `netSites()` entry + (optional) Lia `HELP`, İnternet Kitabı chapter (~L15091).
