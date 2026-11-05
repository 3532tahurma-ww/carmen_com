# Monia panel, events & cause-effect engine

**Files:** `js/data/monia.js` (`Stories.MONIA`: parts/days/seasons, cats, prebuilt events, tags, params), `js/data/places.js`, `js/data/system.js` (shipped user additions), app.js `🎬 Monia Paneli` (~L10810–13240) and engine helpers (~L13490–14335).

## Purpose
"Monia" = story director. Scenarios (time + place + events), an event library grouped by categories (positions, foreplay, cumming, fantasies…), and a cause→effect engine: an event in chat rolls an outcome that changes character/user parameters and states.

## Pieces
- Categories: `moCats()` = MONIA.cats + `MO().cats` + "Kalıplarım"; edits `catEdits`, order `catOrder` (state overrides SYSTEM).
- Events: `{id, title, cat, text, steps, opener, starter, tones, note, part, when, place, tags, base?}`. Editor `renderEventEditor`, search `evSearch`, `#` suggest.
- Scenarios: `renderScenario`, `startScenario`, `randomScenario`, export/import JSON.
- 🎲 Sebep-sonuç page `renderCausePage` (#/monia/sonuc): params, thresholds (⚡ `trFire/trTarget/trSource`), bot outcomes, band rules (`bandPicks`), 🕰️ clock (`clockCfg`, `paramStep`), create rules.
- Outcomes: `resolveOutcome`, `condOk` (had/not conditions), `rollOutcome`, `applyOutcome` (effects `{p:'f:<field>'|'t:<group>', d}` or text tokens `{+Experience}`, `{+5 Güven}`).
- Params: `allParams()` = `MO().params || SYSTEM.params || MONIA.params`; `paramVal(c,p)`; `who:'me'` params live on `S().user` (Zevk, Cum).
- Body: `bodyTick` cycle/pregnancy over `c.life`, `fertAdjust`, `painDelta`, `virginFx`, protection `protGet/protSet` (condom → inside allowed → pill).
- One-time data migrations run on startup, guarded by state flags: `setupPositions`, `setupCumming`, `setupPreCum`, `setupEat`, `setupBond`, `setupBotOuts`, `fixEvents1`, `fixZevk1`, `fixRole1`, `fixHold1`, `fixHotdog1`, `fixBreast1`, `fixDesc1`, `fixWear1`, `fixPain1`, `fixFant1`, `dedupeAuto`.

## Interactions
Chat (`#` events, bot rule outcomes), Create (perms ✅/🚫 from event cats, `crFixPerms`), books/guide (`renderEvGuide`, Olay Kitabı), sites (shop/klinik/jobs start events), system save.

## Change safety
- Changing shipped event defaults for existing users needs a NEW one-time fix function + flag (users' state overrides data files).
- Event identity is `id`/title; me-lines.js keys are event titles — renaming breaks those.
