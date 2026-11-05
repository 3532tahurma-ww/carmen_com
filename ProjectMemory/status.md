# Status

## Done (as of 2026-11-05, sw VERSION v680)
- Core: characters, multi-thread chats, groups, themes, effects, keywords, undo, search, play mode, PWA, accounts, lock, backup.
- Bot mode with large rule set + editor; Monia events/scenarios/cause-effect engine; body/cycle/pregnancy; wardrobe.
- Sites: Carmen.com, Gothic, Meisove, Booble, Choise, Fans, Stay, Shop, Klinik, Jobs/Bank, School, Confessly, Creative, Gram, Flix, Live, Party, Halloween.
- Games: Problematic Subjects, Fiery Passions. Books + Guide + Bot lab. Dark theme.

- Library reorganized into 3 shelves / 8 books (2026-11-04).

- i18n phase 1: EN/TR switch, core screens and ad sites translated (2026-11-04).

## Open / unverified
- Trait questions (v680): rule routing and app boot checked in headless Edge; `evqOf` not tried in a real chat. Trait-specific replies have no EN translation (only traitless ones), so EN-mode characters with those traits see Turkish. Bot lab (`#/deney`) does not run `evqOf`. Proposed, not built: stable answers per character, open questions the character asks you.
- Cities in `moreCities` with no foreign country in `world.js` still count as Turkish: Viyana, Budapeşte, Zürih, Dublin, Bakü, Tiflis, Saraybosna, Üsküp (Lefkoşa and Girne too).
- Mixed language on TR ad pages (seen in headless Edge, app language EN, 2026-11-05): `.cm-rules` lines partly English inside `data-lang="tr"`, also on non-Hotwife ads with old lines. Not on every run; cause unknown, may come from fast hash navigation in the test.
- Hotwife rules (v675): 💦 inside lines (`CM_HW_INS`) not seen in a browser; the 10 sampled ads had only condom and pull-out cases.
- 🐂 Bull (v672): `bullGate`, Create toggles and site additions not tried in a browser; bot routing checked in headless Edge. Me-lines and bot replies have no EN translations.
- New events in ads and Choise (v671) not checked in a browser. "X benden hediye" offers have no EN translation (same as before), so they stay Turkish on English ads.
- Olay Kitabı: 100 of 279 events have no scene, 55 of them worth writing; full list in `docs/OLAY-KITABI-EKSIKLER.md`. News links `#/kitap/olay/14–17` are hard-coded chapter indexes: adding a chapter before them shifts these links.
- 🧖‍♀️ Sauna and ❄️ Cool Down events (v669) not tried in a real chat; me-lines and bot replies have no EN translations. No `sauna` place or Sıcaklık param yet (proposed, not built).
- 🧼 Shower events (v668) not tried in a real chat; me-lines and bot replies have no EN translations. Not limited to the `dus` place.
- 🚿 Pee events, me-lines, hug lines and bot rules (v664–v666) not tried in a real chat (rule routing checked in headless Edge only); lines have no EN translations. Mesane param, accidents and place logic proposed, not built.
- Condom rubbing events (v662) not tried in a real chat. Their me-lines and bot replies have no EN translations (same as Hotdogging).
- 🔥 İsteklilik, rebuff replies (v661) and the Choise condom fix (v660) not tried in a real chat. Existing characters have no trait and act as Orta until edited; `=istek*` replies have no EN translations yet.
- i18n phase 2 (2026-11-05, sw v651): news, Lia, Monia, sites, game UI, books done; `fiery.js` only days/places/items/stages, `places.js` only place names. Bot editor UI, event descriptions, Bot lab done (v652). Bot editor Türkçe / İngilizce kurallar tabs with editable English answers done (v656; editor UI, save file and dictionary override tested in headless Edge on a scratch copy, save through `bot-server.ps1` and a real app bubble not tested). Bot bubbles part 1 done (v653, basic events, both her answers and my event messages). Part 2 done (v654): English typing (`bot-en.js`), traitless chat/questions/compliments/during-sex replies + all age variants (Yaşa göre). Next parts: personality variants of the same categories (about 1,800 lines, `r_c2_*` etc., they beat traitless and tie or beat age rules for characters with those traits), `{hatıra}` memory lines, remaining `r_ev_*`/`r_pc_*`, fantasies and roles, personality, states, Azgın konuşma, Komutlar, hometown; rest of me-lines (body, hug, role, dick lines). Remaining also: Fiery story, place scene texts. v654 bot matching and bubble translation tested in headless Edge, the full app not checked in a browser; missing strings show Turkish.
- Fiery story decision pending: student-coded characters (Roxy, Ash, Liza) and school-set scenes (Scarlett's classroom/detention, Liza's lecture hall) are NOT to be translated; the other adult characters (Mia, Ava, Lily, Chloe, Claire, Luna, Maeve) could be done on request.
- Library: Carmen Kitabı "Yeni dinamikler" chapter is still changelog-style; Olay Kitabı (Lia scenes) and #/olaylar tool are linked, not merged. Reorg not yet checked in a browser.
- `gercekcilik-onerileri.md`, `docs/BOT-CEVAP-ONERILERI.md`, `psikolojik-rapor.md`: proposal/idea lists; which items are implemented is not tracked here yet.
- `css/app.css` is empty (0 bytes) and not loaded by index.html.
- `js/data/bot-rules.backup35–41.js`, `Carmen 243-03.zip`: old backups (not loaded).
