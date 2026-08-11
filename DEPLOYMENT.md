# Deployment — staging & production

This project uses two environments on Vercel. **Production is never deployed
automatically** — it only updates when someone deliberately promotes a build.

| Environment    | Branch      | Deploys                         | URL                                                    |
| -------------- | ----------- | ------------------------------- | ------------------------------------------------------ |
| **Production** | `main`      | Manual only (never on push)     | your production domain (e.g. `hopelovefoundation.nl`)  |
| **Staging**    | `staging`   | Automatic on every push         | `…-git-staging-<team>.vercel.app` (stable staging URL) |
| Feature work   | any branch  | Automatic preview per push / PR | unique preview URL per deployment                      |

## How "no automatic production deploys" is enforced

`vercel.json` disables Git-triggered deployments for the production branch
(`main`) and, during the transition, the original default branch too:

```json
{
  "git": {
    "deploymentEnabled": {
      "main": false,
      "claude/hope-love-foundation-site-849qv6": false
    }
  }
}
```

Any branch listed as `false` **never deploys on push** — no build, no release.
So production is only ever updated by a deliberate manual promotion (see below),
no matter which branch Vercel currently treats as "production". Only `staging`
(and any other unlisted feature branch) keeps auto-deploying — as previews.

Once you've fully switched to the `main`/`staging` flow and retired the
`claude/…` branch, you can drop that second line and keep just `"main": false`.

## Everyday workflow

1. Do the work on a feature branch (e.g. `claude/…` or `feature/…`).
2. Open a PR into **`staging`**. Merging deploys to the **staging** URL
   automatically — test it there.
3. When staging looks good, open a PR from `staging` into **`main`** and merge.
   Merging to `main` **does not go live by itself.**
4. Promote to **production** deliberately, one of two ways:
   - **Dashboard (no tools needed):** Vercel → Deployments → open the staging
     deployment you approved → **⋯ → Promote to Production**.
   - **CLI:** `vercel --prod` (requires the Vercel CLI, logged in to this project).

## One-time Vercel dashboard setup (recommended cleanup)

The "no automatic production deploys" guarantee already holds from `vercel.json`
alone. These settings just make the setup tidy (Settings → Git, unless noted):

1. **Production Branch** → set to `main` (so production maps to the `main`
   branch conventionally).
2. Confirm the repo is connected and **`staging`** branch deployments are
   enabled (default).
3. **Domains** (Settings → Domains): attach the production domain to `main`.
   Optionally attach a subdomain such as `staging.<domain>` to the `staging`
   branch for a friendly staging URL.
