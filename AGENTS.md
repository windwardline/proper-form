# Proper Form — operating contract

Operating contract for AI work in this repo; the global `~/AGENTS.md` still applies. Proper Form is a judgment-free editorial guide to menswear fit, seasonal fabric, and grooming — first interviews, reentry, weddings. Live at proper-form.windwardline.com. Static, zero runtime dependencies, Tailwind compiled ahead of time.

## Commands

Serve statically (`python3 -m http.server`). Rebuild CSS after adding utility classes: `npx tailwindcss@3.4.19 -c tailwind.config.js -i input.css -o tailwind.css --minify` — `input.css` is the three `@tailwind` directives and is not committed; recreate it if absent. CI-equivalent: `npx --yes html-validate@9 index.html` · `node --check script.js`.

## Gates

CI is html-validate plus `script.js` syntax — nothing validates CSS, other pages, or links. Push to main deploys production. A parallel `security.yml` (PRs, pushes, weekly cron; a daily cron runs only the production headers probe) gates Semgrep and secret scan; a post-deploy job asserts the production security headers. An advisory Claude review runs on every same-repo PR via `claude-review.yml`, which deliberately calls the fleet reusable at `@main` — one merge updates every repo. It activates only when the `CLAUDE_CODE_OAUTH_TOKEN` secret is present — reviews bill the owner's Claude subscription, not Console credits; fork PRs never receive secrets, so they skip it by security design.

## Laws

- `tailwind.css` is generated — never hand-edit it. `tailwind.config.js` scans only `index.html` and `script.js`; a class used anywhere else is invisible to the build.
- `.htmlvalidate.json` disables `no-autoplay` intentionally — the hero video is decorative and muted. Re-enabling it breaks CI for a non-defect.
- Theming has two classes of surface: flipping surfaces use semantic classes (`pf-card`, `pf-ink-muted`) reading `--pf-surface`/`--pf-ink`; the hero, fit guide, and footer hold dark in both themes with literal utilities. Do not unify them — the split is the design.
- `theme.js` runs blocking in `<head>` to set `html.theme-dark` before first paint. Deferring it causes a flash.
- CSP is fully self-hosted (`style`/`font`/`media`/`script` all `'self'`) — stricter than the portfolio's. Any external reference is blocked at runtime and CI will not catch it.
