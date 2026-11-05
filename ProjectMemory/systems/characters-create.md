# Characters & Create screen

**Files:** app.js `/* ---------- Karakter oluştur / düzenle` (~L9845–10809), clothes/charMenu/clone (~L13116–13470), `js/data/traits.js`, `pools.js`, `amor-pools.js`, `world.js`, `mods.js`, `photos.js`/`mod-photos.js` (generated), `clothes.js`, `js/gallery.js`.

## How it works
- `renderCreate(id)` (edit-mode only), draft in `ui.create`; `polishCreate` adds section nav + folding.
- Presets: `characters/<set>` photo sets (`applySet`), mods (`applyPreset`, `presets()` from `Stories.MODS`), remote gallery (`galleryPicker` → `Stories.Gallery`).
- Random: `randomize`, `randName/worldName/randAge/randJob/fancyName` (era → age → job; country → city → name).
- 🧩 extra fields `S().charFields` (`cfInput`, `cfValue`, `charFieldSheet`) e.g. Hamile, Bakire, sliders.
- 📏 Create rules `{id, ifs[], not[]}` (`renderRulesPage`, `crBlocked`, `crFix`); ✅/🚫 permissions (`renderPermRulesPage`, `permCfgSheet`, `crFixPerms`).
- Traits include body params (Pussy/Anal Size, Weight, Boob/Butt Size, Experience, Dominance…) that the bot reads.
- Wardrobe: `randWear`, `randOutfit`, `wearLine`, `dressSheet`.
- Share/import: `charPack` (.carmen.json), `shareChar`, `importChar`; clone `cloneSheet`; `removeChar`.

## Change safety
- New trait group → `traits.js` `groups`; bot rules match trait text exactly (lowercased).
- New mod → images in `mods/<mod>/` + entry in `mods.js` + run `fotograflari-guncelle.bat` (ask first).
