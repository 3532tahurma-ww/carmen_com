# Build tools, local server, deploy

**Files:** `sw.js`, `manifest.json`, `tools/*`, `*.bat`, app.js `💾 Sistem kaydı` (~L170–330).

## Service worker
`sw.js` `VERSION = 'amor-stories-vNNN'` — bump on EVERY change (project rule). `CORE` list must include every script in `index.html`; images cached on first view (`amor-stories-img`).

## Generated files (never hand-edit)
- `js/data/photos.js` ← `tools/build-photos.ps1` (characters/<set>/)
- `js/data/mod-photos.js` ← `tools/build-mods.ps1` (mods/<mod>/<char>/; profil.*, sahne.*/bg.*)
- Both via `fotograflari-guncelle.bat` (ask before running).
- `css/dark.css` ← `tools/build-dark.js` (style.css + stories.css + dark-base.css). Run: `$env:ELECTRON_RUN_AS_NODE=1; & "$env:LOCALAPPDATA\Programs\Microsoft VS Code\Code.exe" tools/build-dark.js` (ask first). Re-run whenever style.css/stories.css change colors.

## Local server (`tools/bot-server.ps1`)
- `bot-editoru.bat` → editor; `yerel-duzenleme.bat` → app with `/api/system`.
- 💾 System save (`sysCfg`, `sysPush`, `sysPull`, `adoptSystem`, `mergeMonia`): when on, user additions (events, places, scenarios, tags, cats/params, charFields, optional characters) are written to `js/data/system.js` → shipped to every device once (`S().sysSeen`).

## Deploy
GitHub Pages, branch main/root, `.nojekyll`. No tests/linter: verify by opening `index.html`.
