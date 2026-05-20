# satellites/cv/

Single source of truth for the CV at codychampion.bitsandbeakers.com.

## Edit here

```bash
cd ~/nox-code/satellites/cv
# Edit cv-data.js (data), index.html (markup), wrangler.toml (Cloudflare config)
git add -p
git commit -m "satellites/cv: refresh <whatever>"
git push origin main
```

The push to monorepo `main` triggers `.github/workflows/cv-mirror.yml`, which:
1. Subtree-splits `satellites/cv/**` into a clean cv-only branch
2. Force-pushes that branch to `codychampion/cv` `main` using `SATELLITES_MIRROR_PAT`
3. Cloudflare Workers webhook auto-deploys

## DO NOT

- Add `codychampion/cv` as a local git remote. The PAT lives only in GitHub Actions.
- Push to `codychampion/cv` manually. The Action is the only authorized publisher.
- Edit files outside `satellites/cv/` while expecting them to reach the public mirror. The safety filter blocks this.

## Recovery if Cloudflare deploys broken content

The public mirror's `main` branch can be force-pushed back to the previous commit by re-running the Action against an earlier monorepo SHA, or by manually rolling back at codychampion/cv.
# monorepo-cutover-test-20260520



