# Proper Form

Live: **[proper-form.windwardline.com](https://proper-form.windwardline.com)**

![Proper Form's hero: Master the Details. Elevate Your Presence.](assets/readme-hero.png)

A judgment-free guide to menswear fit, seasonal fabric, and grooming for men
who were never taught the basics — written for first-job interviews, reentry
after incarceration, and summer weddings alike. The design follows editorial
convention (asymmetric spreads, drop caps, Playfair Display) rather than SaaS
card layouts.

## Structure

```
index.html          structure and content
style.css           fonts, theme tokens, semantic classes, custom rules
tailwind.css        compiled utilities — generated, do not edit by hand
tailwind.config.js  theme tokens (slate scale, sand, gold) and content paths
theme.js            lamp state (light / dark / system), runs blocking in head
script.js           accordion state, scroll-triggered reveals
assets/             grooming tutorial video, poster frame, hero photo, fonts
```

Every asset is self-hosted — fonts (latin woff2 subsets), the hero photo, and
the video poster (extracted from the tutorial video itself) — so the page has
no runtime dependency on any third-party host.

## Theming

Surfaces that flip between light and dark read custom properties declared in
`style.css` (`--pf-surface`, `--pf-ink`, …) through semantic classes
(`pf-card`, `pf-ink-muted`, …). `theme.js` sets `html.theme-dark` before first
paint; the dark palette swaps in one place. Panels that hold dark in both
themes — the hero, the fit guide, the footer — keep literal utilities and
never flip.

Static deployment on Vercel; no build step at deploy time and no runtime
dependencies. Tailwind is compiled ahead of time rather than loaded from the
Play CDN:

```bash
npx tailwindcss@3.4.19 -c tailwind.config.js -i input.css -o tailwind.css --minify
```

where `input.css` is the three `@tailwind` directives. Re-run after adding
utility classes to `index.html` or `script.js`.

## Continuous integration

Every push and pull request validates the markup (`html-validate`) and checks
that `script.js` parses.

One rule is relaxed in `.htmlvalidate.json`: **`no-autoplay`**. The hero video
is decorative and carries `muted` alongside `autoplay`. That rule exists to
prevent unexpected audio, which a muted background loop cannot produce —
disabling it preserves the design rather than working around a real defect.
