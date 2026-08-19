# Netsol Aftermarket — Prototype

Interactive prototype of the Network Solutions / SnapNames aftermarket domain
experience, exported from Claude Design and hosted via GitHub Pages.

- **Entry page:** `index.html` (Search results)
- **Second page:** `Aftermarket.dc.html` (Aftermarket landing)

The prototype is fully self-contained: React, Babel, and the webfonts
(Poppins / Inter / IBM Plex Mono) are vendored locally under `vendor/` and
`_ds/.../tokens/fonts/`, so it renders with no external CDN dependencies.
`.nojekyll` is present so GitHub Pages serves the underscore-prefixed `_ds/`
design-system folder.
