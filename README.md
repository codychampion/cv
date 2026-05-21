# Cody Champion CV

![Status](https://img.shields.io/badge/status-live-16a34a)
![Cloudflare](https://img.shields.io/badge/deploy-Cloudflare-f38020)
![Mirror](https://img.shields.io/badge/source-monorepo%20mirror-111827)
![Portfolio](https://img.shields.io/badge/site-codychampion.bitsandbeakers.com-2563eb)

Public mirror for the CV and portfolio surface at [codychampion.bitsandbeakers.com](https://codychampion.bitsandbeakers.com).

This repo exists so the CV can be served and reviewed independently while the source of truth remains inside the private `satellites` monorepo. It is a deployment mirror, not the primary editing location.

## What this is

| Area | Purpose |
|---|---|
| `cv-data.js` | Structured CV content and professional history |
| `index.html` | Public CV / portfolio markup |
| `wrangler.jsonc` | Cloudflare Workers deployment configuration |
| GitHub mirror | Clean public copy generated from `satellites/cv/**` |

## Edit workflow

Edits should be made in the source monorepo, not directly in this mirror.

```bash
cd ~/nox-code/satellites/cv
# Edit cv-data.js, index.html, or wrangler.jsonc
git add -p
git commit -m "satellites/cv: refresh <description>"
git push origin main
```

Pushing to the monorepo triggers `.github/workflows/cv-mirror.yml`, which:

1. Subtree-splits `satellites/cv/**` into a clean CV-only branch.
2. Force-pushes that branch to `codychampion/cv` `main` using `SATELLITES_MIRROR_PAT`.
3. Lets the Cloudflare Workers webhook deploy the public site.

## Guardrails

Do not use this repo as the canonical editing location.

- Do not add `codychampion/cv` as a local git remote.
- Do not push to `codychampion/cv` manually.
- Do not edit files outside `satellites/cv/` and expect them to appear in this mirror.
- Do not store secrets, tokens, private notes, or unreleased personal material here.

## Recovery

If Cloudflare deploys broken content, roll forward from the source monorepo or re-run the mirror workflow against a known-good monorepo commit. As a last resort, the public mirror can be restored to a previous commit manually, then corrected at the source.

## Relationship to the GitHub profile

The GitHub profile README points visitors here for the full professional record. The profile should remain a concise landing page; this repo carries the deeper CV surface and deployment path.
