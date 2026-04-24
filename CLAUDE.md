# CLAUDE.md — codychampion/cv

Public personal CV site at https://codychampion.bitsandbeakers.com.

## Content

**Single source of truth: `cv-data.js`.** Edit this to update experience, publications, projects, awards, outcomes, focus, narrative. Never hardcode CV content inside the HTML or JSX variants.

## Structure

- `index.html` — public site, renders `variant-quiet-weight.jsx` (the live variant)
- `print.html` — self-contained 2-page printable CV (browser Print / Save as PDF)
- `canvas.html` — designer review showing all four variants side-by-side
- `variant-*.jsx` — design variants (quiet-weight live; classical for printable; terminus + signal archived)
- `variant-infographics.jsx` — `ExpertiseInfographics` component used by Quiet Weight
- `assets/` — headshot images

## Stack

React 18 UMD + `@babel/standalone` (runtime-compiled JSX). **No build step.** No `package.json`, no npm/pnpm/yarn, no bundler.

Do **not** add a build system unless the user explicitly asks — it would break the zero-ops deploy model.

Fonts: Instrument Serif (display) + Manrope (body) + JetBrains Mono (eyebrows/labels).

## Deploy

Cloudflare Workers (static-asset worker, formerly Cloudflare Pages). Auto-deploys on every push to `main` — live in ~30 seconds.

Workflow:
```
# edit cv-data.js (or any file)
git add -A
git commit -m "update: <what changed>"
git push
```

No further steps. No Docker, no container rebuild, no tunnel changes.

## Accounts

- GitHub: `codychampion/cv` (public)
- Cloudflare: project `codychampion-cv` under account `tossthis122`
- Custom domain: `codychampion.bitsandbeakers.com` attached in the Workers dashboard

## Do / Don't

- **Do:** edit `cv-data.js` for content changes.
- **Do:** open `index.html` locally in a browser to preview — no dev server required.
- **Don't:** add a build step, bundler, TypeScript, or framework. It defeats the deploy model.
- **Don't:** bake secrets or credentials into this repo — it is **public**.
- **Don't:** delete variant files (`variant-terminus.jsx`, `variant-signal.jsx`) even if unused at runtime — they're preserved designer history.
- **Don't:** rename `index.html` or `print.html` — public URLs depend on them.
