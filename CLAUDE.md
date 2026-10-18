# Project rules for Claude

Website for Stichting Hope & Love Foundation. Astro 4, static output, bilingual
(NL at `/`, EN at `/en/`). Hosted on Vercel, project `hopeenlovefoundation`.

## Deployment safety — read before touching anything deploy-related

**Staging first, always. Never production without Junalda's explicit approval.**

1. **All changes go to the `staging` branch first.** Pushing to `staging` builds
   a staging preview automatically; the live site is untouched. Review happens
   on the stable staging link.
2. **Never publish to production on your own.** A push, merge or green build must
   never move the live site. Going live is a separate, deliberate manual
   promotion that **requires Junalda's explicit approval of a specific commit**.
   New changes after approval need a fresh approval.
3. **Never re-enable auto-deploy to force a release.** Do not edit
   `vercel.json`'s `git.deploymentEnabled` to `true` for the production branch
   (or `main`) to push changes live. This was done in the past and is exactly
   the pattern to avoid — it bypasses the gate.
4. **Never run a production promote/deploy without that approval** — no
   `create_deployment` with `target: "production"`, no `vercel --prod`, no
   `request_promote`, no dashboard promote — unless Junalda has approved that
   exact commit in this conversation.
5. After any approved promotion, re-check that `autoAssignCustomDomains` is still
   `false` and restore it if not.
6. **No secrets in the repo**, and do not ask for tokens/passwords in chat.

The full procedure, current live commit, and the remaining owner-only steps to
make the approval gate *enforceable* are in `DEPLOYMENT.md`. Read it before any
deployment work.

## Content editing

- Visitor-facing text: `src/i18n/ui.ts` (mirrored `nl` / `en` blocks).
- Factual, language-neutral data (bank, contact, links, names): `src/config.ts`.
- Board roles are translated in `ui.ts` (`leadership.roles`) and matched to
  board members in `config.ts` by order.
- Keep the site static — do **not** add the `@astrojs/vercel` serverless adapter
  (it breaks the build on this project). Analytics/Speed Insights use the static
  `@vercel/analytics/astro` + `@vercel/speed-insights/astro` components.

## Build

```bash
npm install
npm run build   # outputs to dist/
```
