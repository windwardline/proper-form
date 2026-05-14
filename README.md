Proper Form: The Modern Gentleman's Guide

Project Scope

Project Framing: Proper Form is a trustworthy, judgment-free guide for men who were never taught the basics of presentation but need to show up with confidence.

One-Sentence Description: An educational, high-end web platform that demystifies seasonal style, proper fit, and grooming fundamentals to help men elevate their personal presentation with confidence.

Deployment Status: LIVE (Deployed via GitHub Pages)

MVP Personas & User Stories

Eli (The First-Step Professional): A college student or recent graduate preparing for interviews, internships, networking events, or a first office role. Eli needs a reliable resource that explains style, fit, and grooming basics without assuming prior knowledge.
User story: As a young professional, I want clear explanations of basic menswear and grooming rules, so that I can feel prepared and confident in professional settings.

Raymond (The Reentry Candidate): A recently released man preparing for job interviews, family events, or community settings after years of wearing institutional clothing. Raymond needs practical, respectful guidance on how to present himself as mature, stable, and rehabilitated.
User story: As someone reentering society, I want plain-language guidance on fit, grooming, and mature presentation, so that I can show up with dignity and confidence.

Maurice (The Summer Wedding Guest): A man attending a summer wedding who wants to dress appropriately without overheating or looking too casual. Maurice needs seasonal-specific advice.
User story: As a wedding guest, I want to know exactly what fabrics and colors are appropriate for summer, so that I can look good without sweating through my clothes.

Core Features & Technical Implementation

Contextual Style Engine (The Occasion Recommender): A JavaScript state machine that dynamically injects scenario-specific style advice (Interview, Reentry, Weddings) directly into the DOM without a page reload.

The Fit Diagnostic: An interactive, step-by-step quiz logic tree that calculates whether a garment fits properly based on shoulder, waist, and break inputs, complete with a dynamic progress bar.

Style Emergency Toolkit (Accordion): A vanilla JavaScript and CSS-driven accordion providing instant troubleshooting for common sartorial disasters (wrinkles, stains, scuffs).

Strict Separation of Concerns: Architecture maintains strict modularity between HTML (index.html), CSS (style.css), and JavaScript (script.js) to ensure scalable, maintainable code in accordance with enterprise best practices.

Scroll Animations: Implements the native IntersectionObserver API for performant, hardware-accelerated fade-in animations as the user scrolls.

Accessibility (a11y) First: Fully navigable via keyboard, strict semantic HTML, ARIA labels for dynamic content (aria-expanded, aria-live), and high-contrast color palettes (WCAG compliant).

Build Stack

HTML5 (Semantic structure)

Vanilla JavaScript (ES6+ for state management and DOM manipulation)

Tailwind CSS (Utility-first styling via CDN)

Google Fonts (Playfair Display & Lato)

GitHub Pages (CI/CD Deployment)

Phase 1 MVP Wireframe

+-----------------------------------------------------------+
|                                                           |
|             HERO: Master the Details.                     |
|             Elevate Your Presence.                        |
|             [Intro paragraph welcoming Eli, Raymond, etc.]|
|                                                           |
+-----------------------------------------------------------+
|  The Occasion Recommender (Style)                         |
|  +----------------+  +--------------------------------+   |
|  | The Interview  |  | [Dynamic Content Injection]    |   |
|  | First Week Back|  | "The Goal is to be remembered  |   |
|  | Summer Wedding |  |  for what you said..."         |   |
|  +----------------+  +--------------------------------+   |
+-----------------------------------------------------------+
|  The Fit Diagnostic Quiz                                  |
|  +----------------------------------------------------+   |
|  | [Progress Bar ======>                      ]       |   |
|  | Where does the shoulder seam end?                  |   |
|  | ( ) Past my natural shoulder                       |   |
|  | (x) Exactly at the bone                            |   |
|  | ( ) Pulls tightly early                            |   |
|  +----------------------------------------------------+   |
+-----------------------------------------------------------+
|  Style Emergency Toolkit                                  |
|  +----------------------------------------------------+   |
|  | Wrinkled shirt, but no iron available?         [+] |   |
|  +----------------------------------------------------+   |
|  | Scuffed leather shoes before an interview?     [-] |   |
|  |   > Use a tiny amount of hand lotion or lip balm...|   |
|  +----------------------------------------------------+   |
|  | Coffee spill on your tie or shirt?             [+] |   |
|  +----------------------------------------------------+   |
+-----------------------------------------------------------+
|  Grooming: The Seamless Beard Fade                        |
|  [Step 1: The Base]        | [Video Placeholder:      |   |
|  [Step 2: The Transition]  |  Grooming Tutorial]      |   |
|  [Step 3: The Hard Line]   |                          |   |
+-----------------------------------------------------------+
|  Footer: (c) 2026 Proper Form | GitHub | LinkedIn         |
+-----------------------------------------------------------+
