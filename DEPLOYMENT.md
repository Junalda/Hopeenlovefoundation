# Deployment — staging & production

Two environments on Vercel (project `hopeenlovefoundation`,
`prj_gAPqQzJpsNWPDhlfLThIDu7qMQOq`, team `team_uwAbUdDstGuhmAW3ZTtvjwa0`).

**Golden rule: all work goes to `staging` first. Production is only ever
updated by a deliberate, explicit manual promotion of a specific, reviewed
commit — never by a push, merge or successful build on its own.**

| Environment    | Branch                              | Deploys on push?            | URL                                                                 |
| -------------- | ----------------------------------- | --------------------------- | ------------------------------------------------------------------- |
| **Production** | *(promote target)*                  | **No — manual promote only**| https://www.hopelovefoundation.nl (+ `hopelovefoundation.nl`)       |
| **Staging**    | `staging`                           | Yes — auto preview build    | https://hopeenlovefoundation-git-staging-junaldas-projects.vercel.app |
| Locked         | `main`, `claude/hope-love-foundation-site-849qv6` | **No — `deploymentEnabled: false`** | (never builds)                                        |

## Current state (as inspected 2026-10-18)

- **Live production commit:** `dd93ee2` — deployment `dpl_6ftZb8NGRHUVGHnR6BEER3wiNmHk`
  (target `production`), serving `www.hopelovefoundation.nl` + `hopelovefoundation.nl`.
- **Latest staging build:** `dpl_AriZ8jujspiNzKyoEXGvX5QxLDyv` (target `staging`,
  `READY`), also commit `dd93ee2`. Staging and production are currently in sync.
- The stable staging link always points at the newest staging-branch build.
- `autoAssignCustomDomains` is **`false`** on the project (a new production
  deployment does **not** auto-grab the live `.nl` domains).
- No GitHub Actions workflows exist in the repo.
- Deployment Protection (Vercel Authentication / SSO) is enabled on previews —
  leave it on.

## What blocks automatic go-live today — and its limit

Going live automatically is blocked by **two** project-level facts:

1. `vercel.json` sets `deploymentEnabled: false` for the production branch
   (`claude/hope-love-foundation-site-849qv6`, the repo's historical production
   branch) and for `main`. A branch listed `false` never builds on push.
2. `autoAssignCustomDomains: false` means even a manually created production
   deployment will not automatically take over the live `.nl` domains.

> **Honest limitation — read this.** Item 1 is a *soft lock*, not an enforced
> approval gate. It lives in a file on the branch, so anyone who can push can
> flip it to `true` in the same commit and ship straight to production. The git
> history shows this was done repeatedly in the past (commits titled
> *"production release (temporarily re-enable auto-deploy)"*). **Do not do
> that.** A truly *enforced* gate requires GitHub branch protection + a GitHub
> `production` environment with a required reviewer (see
> "Make the gate enforceable" below). Until those are set in GitHub by the repo
> owner, treat the manual-promote procedure below as the control, and never
> re-enable auto-deploy to push to production.

## Everyday workflow (staging first — always)

1. Do the work on a feature branch, or directly on `staging`.
2. Push to **`staging`**. Vercel auto-builds a **staging** deployment. The live
   site is untouched.
3. Review it at the stable staging link:
   https://hopeenlovefoundation-git-staging-junaldas-projects.vercel.app
   (you may be asked to sign in to Vercel — that is the preview protection).
4. Production stays on whatever commit is currently live until someone performs
   the explicit promotion below.

## Go-live runbook (manual, deliberate, per-commit)

Production go-live is a separate manual action, tied to **one specific commit**
that Junalda has reviewed and approved. New changes after approval require a new
review of the new commit.

1. **Get Junalda's explicit approval** of a specific staging commit SHA. No
   approval, no go-live. (For future Claude sessions: this is mandatory — see
   `CLAUDE.md`.)
2. **Build a production deployment from that exact commit — without assigning
   the live domains.** Because `autoAssignCustomDomains` is `false`, a new
   production-target build does **not** grab `www.hopelovefoundation.nl`. Build
   it from the approved SHA (not a branch head), e.g. via the Vercel API /
   `create_deployment` with `target: "production"` and a pinned `gitSource` SHA,
   or `vercel deploy --prod` from a checkout of that commit.
3. **Verify the production build** on its generated `*.vercel.app` URL before it
   is live: it is `READY`, renders correctly, correct commit SHA.
4. **Promote** the verified deployment to production (Vercel dashboard →
   Deployments → the build → ⋯ → *Promote to Production*, or `request_promote`
   between production deployments). Only now does the live domain move.
5. **Re-check the domain block after promotion:** confirm `autoAssignCustomDomains`
   is still `false` and that only the intended deployment holds
   `www.hopelovefoundation.nl` / `hopelovefoundation.nl`. Restore `false` if it
   was flipped.
6. **Rollback if needed:** the previous production deployment stays a rollback
   candidate in the dashboard (Instant Rollback).

Do **not** make a release "workflow" that an arbitrary input (e.g.
`approved=true`) can trigger — approval is a human decision on a named commit,
not a parameter.

## Staging is not indexed

`vercel.json` adds `X-Robots-Tag: noindex, nofollow` for every `*.vercel.app`
host (staging previews **and** the production `.vercel.app` alias). The custom
`.nl` domains are **not** matched, so the live site stays fully indexable.
Preview SSO protection is a second layer on top of this.

## Make the gate enforceable (remaining one-time setup — owner only)

These require repo-owner / dashboard rights that an automated session does not
have. Do them once to turn the soft lock into an enforced approval gate:

1. **GitHub → Settings → Branches → branch protection** on the production
   branch: require a pull request + review before merge, and disallow direct
   pushes. This stops anyone from flipping `vercel.json` and pushing to
   production unreviewed.
2. **Confirm/convention: set the Vercel Production Branch to `main`** (Vercel →
   Project → Settings → Git). Today production history comes from the legacy
   `claude/hope-love-foundation-site-849qv6` branch; moving it to `main` and
   keeping `main` protected is cleaner. Keep both branches in
   `deploymentEnabled: false` regardless.
3. **(Strongest) GitHub `production` environment with Junalda as required
   reviewer.** This only enforces anything if go-live runs through a GitHub
   Actions job that targets that environment. If you want that: create the
   `production` environment (GitHub → Settings → Environments), add Junalda as a
   required reviewer, store a Vercel deploy token as an environment secret
   (never commit it), and add a workflow whose *only* production step is a
   `vercel promote`/`--prod` gated on that environment. The required reviewer
   then blocks every release until Junalda approves. The repo is public, so
   required reviewers are available on the current plan — but this is **not yet
   set up**, so do not claim an enforced gate until it is.

## Restore point

Before this hardening pass a local git tag `restore/pre-release-gate-2026-10-18`
was created at the then-current `dd93ee2`. On Vercel, production deployment
`dpl_6ftZb8NGRHUVGHnR6BEER3wiNmHk` (commit `dd93ee2`) remains the rollback
target.
