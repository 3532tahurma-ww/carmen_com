# ProjectMemory index

- [overview.md](overview.md) — purpose, architecture, file map, conventions
- [status.md](status.md) — done / open items
- [changelog.md](changelog.md) — dated important changes
- [systems/store.md](systems/store.md) — localStorage state shape, accounts, all `amor-stories:*` keys
- [systems/routing-ui.md](systems/routing-ui.md) — hash router, route table, shared helpers, Lia, global toggles
- [systems/chat.md](systems/chat.md) — renderChat internals, 👗 undress state (`th.undress`, `slotOff`), 💥 `th.mode` + Zevk multipliers, ❔ her questions (`BOT_ASK`, `harderMode`), event picker (accordion + 🎯 Şimdi / stage tabs `pickerCtx`), themes, effects, messages list, profile, 📱 interruptions toggle + fantasy interrupts (`fant-interrupts.js`, `#/kesinti` lab)
- [systems/bot.md](systems/bot.md) — bot rule format, matching engine, trait and event questions, English typing (`bot-en.js`), editor (+ 🍆⏱️ tab, `user-lines.js`), context words, `Dick Size:` / `Dayanıklılık:` / `Süt:` traits, 🥛 süt-sağma addons (`a_sut_*`), sexnow vs r_hz path notes, 😤 jealousy (`otherSexMention`, `kiskansor` questions by Zevk/Cum), 👯 group sex extras (`grupKomut`, `=grupsx`), group addressing + `r_gc_*` commands, ❔ "neden?" (`th.whyCtx`, r_why_*), 🙏 persuasion after realistic refusals (`th.ikna`, `iknaTry`, r_st_ikna_*, r_why_ret_*)
- [systems/monia.md](systems/monia.md) — events, scenarios, cause-effect, params, clock, body, one-time fixes, adding a fantasy checklist, place cats (THEME tags), ✨ Genshin fantasies
- [systems/characters-create.md](systems/characters-create.md) — Create screen, presets/mods, random, rules/perms, wardrobe, cum-by-clothing, #/kiyafet lab
- [systems/sites.md](systems/sites.md) — home + all internet sites (prefix → route table), incl. 🏙️ CarmenCity, ✨ CarmenImpact (Genshin), 🍓 Meisove types checklist (9 girls), 🎭 roles across sites (RP_ROLES)
- [systems/games.md](systems/games.md) — Problematic Subjects, Fiery Passions
- [systems/me-books.md](systems/me-books.md) — Ben page, books (3 shelves, ❓ Sorular Kitabı from r_q* rules, 💐 Övgü Kitapçığı from user-message rule categories, 🗣️ Komutlar Kitapçığı (`KM_CH`), ❔ Neden? Kitapçığı (`NB_CH`), 🎭 Kişilik Kitabı (personalities, jealousy, writing style), ✨ Genshin Kitabı (`GS_BOOK`), reorg block, BOOK_OLD redirects), guide (+ #/kesinti, #/ilankural labs), news, music
- [systems/i18n.md](systems/i18n.md) — EN/TR app language, DOM dictionary translator, ad language by nationality, coverage, deliberately untranslated content
- [systems/build-deploy.md](systems/build-deploy.md) — sw.js, generated files, local server, system save, deploy
