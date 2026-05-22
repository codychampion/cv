# Cody Champion CV

![Status](https://img.shields.io/badge/status-live-16a34a)
![Cloudflare](https://img.shields.io/badge/deploy-Cloudflare-f38020)
![Portfolio](https://img.shields.io/badge/site-codychampion.bitsandbeakers.com-2563eb)

Public CV and portfolio surface for [codychampion.bitsandbeakers.com](https://codychampion.bitsandbeakers.com).

This repo keeps the deployable version of the CV small, inspectable, and easy to review. It is intentionally focused on the public professional record rather than on broader site infrastructure.

## What this is

| Area | Purpose |
|---|---|
| `cv-data.js` | Structured CV content and professional history |
| `index.html` | Public CV / portfolio markup |
| `wrangler.jsonc` | Cloudflare Workers deployment configuration |

## Relationship to the GitHub profile

The GitHub profile README points visitors here for the full professional record. The profile should remain a concise landing page; this repo carries the deeper CV surface and deployment path.
