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

- Finish tags (`POS_TAGS`): the position's tag picks the Cumming event at Zevk ≥ 80. `kondom` tag: `Condom Buttjob/Hotdogging/Titfuck/Handjob/Legjob` → `Condom Cumshot`. These are separate from the protection event `Condom`: `protOf` checks exact titles, so they don't mark a condom as worn for later intercourse.

- 🚿 Pee category (`c:mvpee01x`, tag `event`): 7 `iseme`-tagged events in system.js, each Uyarılma +15, Şehvet +10, Samimiyet +1, Güven +1. The ✅/🚫 perm list only covers `PERM_TAG` categories, so these appear in ❤️/💔 lists instead. Lines: `ME_EV_LINES`, `ME_HUG_LINES.pee*`, bot `r_ev_pe_*`. The bot query includes the category, so `pee` is in every Pee event's message: keep `when` terms specific (e.g. `pee`, `on`, `her`, or Watching Her Pee ties).

- 🧼 Shower category (`c:mvshower01x`, tag `event`), plus 2 finishes in Cumming. `duş` is a `THEME` tag in `trTarget`: Shower finishes need a `duş` position, and vanilla positions never get them. Positions keep their spot tag (`vajinal`, `anal`, `oral`…), so protection and normal finishes still apply. Never add `vajinal`/`anal` to Shower Cumshot. Lines: `ME_EV_LINES`, `ME_HUG_LINES.shower*`, bot `r_ev_sh_*`; standing titles are in `ME_BED_SKIP`.

- 🧖‍♀️ Sauna category (`c:mvsauna01x`, tag `event`), Sauna Cumshot in Cumming, ❄️ Cool Down (`c:mvcooldown01x`, no tags, so not positions and no Zevk from the shared position outcome). `sauna` is a `THEME` tag like `duş`. Lines: `ME_EV_LINES`, `ME_HUG_LINES.sauna*`, bot `r_ev_sa_*`.

- 🐂 Bull: `bull` tag events pass `bullGate` (`writeEvents` only, so chained finishes skip it). `kocabilir` tag = husband must know. Hotwife counts as approved; Husband Approved is per chat (`lastDone`). `bull` is a `THEME` tag like `duş`. Bull Creampie copies the Vaginal Creampie pregnancy outcome.

## Interactions
Chat (`#` events, bot rule outcomes), Create (perms ✅/🚫 from event cats, `crFixPerms`), books/guide (`renderEvGuide`, Olay Kitabı), sites (shop/klinik/jobs start events), system save.

## Change safety
- Changing shipped event defaults for existing users needs a NEW one-time fix function + flag (users' state overrides data files).
- Event identity is `id`/title; me-lines.js keys are event titles — renaming breaks those.
