# Proper Form: The Modern Gentleman's Guide

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

## Project Scope

**Proper Form** is a trustworthy, judgment-free guide for men who were never taught the basics of presentation but need to show up with confidence. Designed with the aesthetic rigor of high-end fashion journalism (e.g., *GQ*, *The Rake*), the application moves beyond generic advice to teach the underlying mathematics and architecture of menswear.

**One-Sentence Description:** An educational, premium web platform that demystifies seasonal sartorialism, geometric fit, and grooming fundamentals to help men elevate their personal presentation with confidence.

---

## MVP Personas & User Stories

* **Eli (The First-Step Professional):** A college student or recent graduate preparing for interviews, internships, networking events, or a first office role.
    * *User story:* As a young professional, I want clear, authoritative explanations of basic menswear and grooming rules, so that I can feel prepared and confident in corporate settings.
* **Raymond (The Reentry Candidate):** A recently released man preparing for job interviews, family events, or community settings after years of wearing institutional clothing.
    * *User story:* As someone reentering society, I want plain-language but mature guidance on fit, grooming, and presence, so that I can show up with dignity and without judgment.
* **Maurice (The Summer Wedding Guest):** A man attending a summer wedding who wants to dress appropriately without overheating.
    * *User story:* As a wedding guest, I want to understand seasonal fabrics and open-weave architectures so I stay comfortable while looking effortlessly collected.

---

## Technical Stack & Architecture

This project was built adhering to strict vanilla web standards, optimizing for performance, accessibility, and robust DOM manipulation. 

### Phase 1 Demo Architecture (Single-File Deployment)
To guarantee 100% reliability during live technical demonstrations, Phase 1 was deliberately structured as a **single-file, zero-dependency deployment**. HTML, custom CSS, and Vanilla JavaScript are consolidated into `index.html`. This eliminates network latency for asset fetching and completely bypasses potential file-path compilation errors in live server environments. (Note: Explicit extraction boundaries are commented in the source code for the Phase 2 multi-file refactor).

* **Frontend Logic:** Vanilla JavaScript (ES6+)
* **Styling:** Tailwind CSS (via CDN) + Custom Global CSS for keyframe animations, typography (drop caps), and scroll padding.
* **Structure:** Semantic HTML5
* **Hosting:** GitHub Pages / Vercel

### Core Technical Features

* **Advanced DOM State Management:** Custom vanilla JS accordion logic that dynamically manages state, closes inactive nodes, and fires SVG transformation events.
* **Intersection Observers:** Smooth, scroll-triggered fade-in animations that do not fire until elements enter the viewport (`threshold: 0.15`), preserving performance.
* **Responsive Magazine UI:** Fully fluid CSS Flexbox and Grid layouts that break from standard SaaS card designs to emulate an asymmetrical, premium editorial spread across mobile, tablet, and desktop.
* **Native Asset Pipeline:** Integrated HTML5 `<video>` tags prioritizing fast loading and cross-browser compatibility over third-party `<iframe>` embeds, protecting the app from external branding and ad-tracking.

---

## Phase 02: Future Roadmap

Based on recent agile sprints, peer review code audits, and market validation, the following features are actively in development for the next software update:

1. **Visual AI Fit Checker:** A machine-learning integration allowing users to upload a mirror photo for automated, algorithmic feedback on jacket drape, collar gap, and trouser break.
2. **Curated Toolsets API:** Integrated fetching for verified, affordable tailoring tools, precision clippers, and entry-level shirting dynamically localized to the user.
3. **Fabric Care DB:** A highly searchable database architecture for textile maintenance, precise stain removal, and seasonal storage protocols.

---

## Installation / Local Setup

To run this project locally and inspect the codebase:

1. Clone the repository:
   ```bash
   git clone [https://github.com/windwardline/proper-form-style-guide.git](https://github.com/windwardline/proper-form-style-guide.git)

## Continuous integration

Every push and pull request validates the markup (`html-validate`) and checks
that `script.js` parses.

One rule is relaxed in `.htmlvalidate.json`: **`no-autoplay`**. The hero video
is decorative and carries `muted` alongside `autoplay`. That rule exists to
prevent unexpected audio, which a muted background loop cannot produce —
disabling it preserves the design rather than working around a real defect.
