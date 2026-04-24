# codychampion.bitsandbeakers.com

Source for [codychampion.bitsandbeakers.com](https://codychampion.bitsandbeakers.com/) — personal CV / portfolio.

## Structure

- `index.html` — public site (Quiet Weight variant; renders `variant-quiet-weight.jsx`)
- `print.html` — 2-page printable CV; hit the "Print / Save as PDF" button
- `canvas.html` — design canvas showing all variants side-by-side (internal review)
- `cv-data.js` — all content (experience, publications, projects, etc.) — **edit this to update the site**
- `variant-*.jsx` — Quiet Weight (live), Classical (printable), Terminus + Signal (archived alternatives)
- `assets/` — headshot

## Editing

Edit `cv-data.js`, commit, push. Cloudflare Pages rebuilds in ~30 seconds.

## Stack

React 18 + Babel Standalone (runtime-compiled JSX, no build step). Instrument Serif + Manrope + JetBrains Mono.

## Deploy

Deployed via Cloudflare Pages with custom domain. Framework: None. Build command: (none). Output directory: `/`.
