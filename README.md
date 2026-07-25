# Proper Form

Live: **[proper-form.windwardline.com](https://proper-form.windwardline.com)**

A judgment-free guide to menswear fit, seasonal fabric, and grooming for men
who were never taught the basics — written for first-job interviews, reentry
after incarceration, and summer weddings alike. The design follows editorial
convention (asymmetric spreads, drop caps, Playfair Display) rather than SaaS
card layouts.

## Structure

```
index.html          structure and content
style.css           custom rules: hero, skip link, drop caps, animations
tailwind.css        compiled utilities — generated, do not edit by hand
tailwind.config.js  theme tokens (slate scale, sand, gold) and content paths
script.js           accordion state, scroll-triggered reveals
assets/             grooming tutorial video
```

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
