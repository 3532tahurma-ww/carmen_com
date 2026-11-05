# Bot mode & rules

**Files:** `js/bot.js` (engine), `js/data/bot-rules.js` (`Stories.BOT_RULES`, ~2 MB, never read whole), `tools/bot-editor.html`, `tools/bot-server.ps1`, `bot-editoru.bat`, app.js `🤖 Bot modu` inside renderChat (~L6676), `renderBot` (~L466), `renderBotLab` (#/deney ~L16268), `docs/BOT-KURALLARI.md`.

## Data format
`{ rules: [{id, name, category, when[], reply[], traits[], chars[], note}], groups: [{name, words}], verbs: [{verb, stems}], addons: [...], en: [[trKey, enText]] }`
- `en` (optional): English answers from the editor. Pairs, not an object: PS 5.1 `ConvertFrom-Json` in `SaveRules` fails on keys that differ only by case.
- `when` terms (order matters): `kahve` substring · `yap-` word-start stem · `=sa` whole word · `+gitmek` verb stems · `@selam` group · `a|b` alternatives. Empty `when` = fallback.
- Internal context words injected by the app: `=evt`, `=durum`, `=sor`, `=cevap`, `=memleket`, `=poz`, `=fant`, `=gecispoz`… (rule id prefixes: `r_fn_` fantasy, `r_gp_` position switch, `r_fq_/r_fe_` fantasy Q/egg, `r_cmp_` compliment, `r_hz_`…).
- `reply`: random line; `||` splits bubbles; `{sen}`/`{ben}` + many app placeholders (see chat.md).
- `traits` all required (`|` alternatives); derived traits: `Yaş: Genç/Yirmili/Otuzlu/Olgun` (`ageTrait`), `Memleket: <region>` (`originTrait`, world.js), protection traits (`Stories.protTraits`).

## Engine (`Stories.Bot`)
`norm` (tr lowercase, strip punct, collapse repeats) → `expand` → `inOrder` → `fits` → `score` (words×100 + traits×10 + chars 20) → `best/bestOf` (loose mode for 3+ words) → `reply(rule, vars, recent)`; `addons`, `catches`.

## English typing
`js/data/bot-en.js` (`Stories.BOT_EN`, `[english regex, turkish trigger]`, applied in order: long phrases first, single words last). `Stories.Bot.fromEn(text)`: lowercases, drops apostrophes, replaces phrases; returns the text unchanged if it has Turkish letters or nothing matched. `botReply` runs it only for typed messages; all later logic (rules, `yesNo`, `learnFacts`, `otherMention`) reads the converted copy, the stored message stays as typed, `botMiss` logs the original. New English coverage = new line in `bot-en.js`. The editor's test box uses `fromEn`; Bot lab (`#/deney`) tests raw text, no `fromEn`.

## Editing
- `bot-editoru.bat` → local server → editor saves via `/api/bot-rules` into `js/data/bot-rules.js` and bumps `sw.js` VERSION. In-app: `#/bot` iframes the editor when local server is up; leaving reloads rules (`reloadBotRules`).
- Tabs "Türkçe kurallar" / "İngilizce kurallar" (`data-tab="en"`, `EN()`; last one in localStorage `amor-stories:botedit-lang`). Same rules and same Turkish triggers. EN tab: one input per `||` part, "Sadece eksikler" filter, `x/y çevrili` counts, test box answers in English. Rules can't be added or changed there.
- EN edits live in `enMap` (dictionary key → English), saved as `data.en`, only keys still used by a reply (`enPairs`); included in export/import. Runtime: `Stories.Bot.enDict(pairs)` turns `{sen}`-style names into positions, and `I18n.add` overrides the bundled dictionary (bot.js at load, `reloadBotRules` after editing). Translations are per sentence, so a shared line changes in every rule. Changing a Turkish line drops its translation at save. Lines with `{x:y}` tokens can't be translated (disabled, counted as done). Addons have no translation view.
- Rule outcomes (🎲) linked in Monia → Sebep-sonuç → 🤖 (systems/monia.md).
- `S().botMiss`: messages the bot didn't understand, shown in #/bot and #/deney.

## Change safety
- Text is lowercased with `tr` locale: a title starting with capital `I` becomes `ı` (`Ice Tease` → `ıce tease`), so `when` terms must use `ı`. Otherwise the rule silently never fires.
- Editing bot-rules.js by hand: use Grep for the rule id, edit only that line. Keep valid JSON-ish object literal.
- `js/bot.js` is shared by the app AND the editor; keep API (`return {...}`) stable.
