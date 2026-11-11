# Characters & Create screen

**Files:** app.js `/* ---------- Karakter oluştur / düzenle` (~L9845–10809), clothes/charMenu/clone (~L13116–13470), `js/data/traits.js`, `pools.js`, `amor-pools.js`, `world.js`, `mods.js`, `photos.js`/`mod-photos.js` (generated), `clothes.js`, `js/gallery.js`.

## How it works
- `renderCreate(id)` (edit-mode only), draft in `ui.create`; `polishCreate` adds section nav + folding.
- Presets: `characters/<set>` photo sets (`applySet`), mods (`applyPreset`, `presets()` from `Stories.MODS`), remote gallery (`galleryPicker` → `Stories.Gallery`).
- Mods in mods.js: `amor`, `carmen` (scanned folders), `genshin` (4 characters, one image each, paths written by hand: `mods/genshin/<Ad>.png`, no scan needed), `emily`, `dontstop`.
- Random: `randomize`, `randName/worldName/randAge/randJob/fancyName` (era → age → job; country → city → name).
- Age floor 18: `#cAge` onchange, Bot lab `labAge`, and a startup pass over `chars()` (covers imports). Empty age is allowed.
- 💍 `evli` / 🐂 `hotwife` toggles (charFields in system.js) gate Bull events; `Stories.protTraits` turns them into `Evli: Hayır|Evet|Hotwife` for bot rules.
- 🧩 extra fields `S().charFields` (`cfInput`, `cfValue`, `charFieldSheet`) e.g. Hamile, Bakire, sliders.
- 📏 Create rules `{id, ifs[], not[]}` (`renderRulesPage`, `crBlocked`, `crFix`); ✅/🚫 permissions (`renderPermRulesPage`, `permCfgSheet`, `crFixPerms`).
- Traits include body params (Pussy/Anal Size, Weight, Boob/Butt Size, Experience, Dominance…) that the bot reads.
- 🔥 İsteklilik trait (`willing` group: Çok Yüksek…İstemiyor), active only in realistic mode. `willOf(c, thread)` returns 0–4 (no trait = Orta); ad characters (`cmRid`, `goth`, `meisove`, `klDoc`) and `isEsc` threads are at least Yüksek, new ads get the trait from `adWill`. İstemiyor: `willRefuse` blocks sex events (warning `=istekyok`, second try `realStop`). Bot states: `=istekdusuk|istekyuksek|istekcok` on positions (40%), `=istek*soz` in talk (20%). İstemiyor/Düşük in `botReply`: `QPRIVATE` questions get `=isteksoruyok|isteksorudusuk`, `WILL_PUSH` rules get `=istektersyok|istektersdusuk` (Düşük 50%). Personality variants use the same 4 trait sets as `r_st_sert_*`.
- Wardrobe: `randWear`, `randOutfit`, `wearLine`, `dressSheet`. `wearLine` uses shared slot templates 40% (`CL.gen`, `genLines`, `{K}/{k}` = item name; not for costumes or "-sız" items).
- Cum by clothing (v699): `cumZoneOf(title)` → gogus/kalca/bacak/icine/''; `dressedAt(c, zone, th.undress[id])` = outer piece still on; `cumWearOf(x, zone, 'hers'|'me')` from `CL.cumw` (icine: tanga → `aside`, skirt/dress → `up`). Her side in `wearPart` (85%), my side in `eventMessages` (75%, not with condom). Dressed * events always count as dressed.
- Costumes: item style `k` + `FANT` map (clothes.js); cum lines in `CUM` + `CUM_MORE` (merged, v700). v699 added kaptan/kraliçe/android/elf/hostes/rahibe/taksi + 9 Meisove costumes; `melekkost` → `fxrpmelek`.
- 👗 Kıyafet deneyi `#/kiyafet` (`renderClothesLab`, state `ui.clLab`): dress / costume / copy a character's outfit, mark opened zones, try lines; never touches characters.
- Share/import: `charPack` (.carmen.json), `shareChar`, `importChar`; clone `cloneSheet`; `removeChar`.

## Change safety
- New trait group → `traits.js` `groups`; bot rules match trait text exactly (lowercased).
- New mod → images in `mods/<mod>/` + entry in `mods.js` + run `fotograflari-guncelle.bat` (ask first).
