Proper Form: Judgment & Decision Log

This document tracks my conscious AI collaboration, documenting where I exercised human judgment to accept, reject, or modify AI-generated code and content.

Week 3, Day 1: MVP Scaffolding & Setup

Entry 1: Hero Section Copy
AI Output: Generated a generic portfolio introduction ("Welcome to my site, I am a web developer").
My Decision: Rejected/Modified. I rewrote the copy to say: "Whether you are stepping into a first interview, returning to the workforce, or attending a summer wedding, Proper Form is your trustworthy, judgment-free guide..."
Why: The AI failed to grasp the specific context of my target users. Based on my V2 project scope, the copy needed to directly speak to the specific transitional life events of my core personas (Eli, Raymond, and Maurice) in a high-end, judgment-free tone.

Entry 2: Summer Sartorial Layout
AI Output: Generated a standard 3-column CSS grid with placeholder "Project 1, Project 2" cards.
My Decision: Modified. I converted the grid to a 2-column layout using Tailwind CSS (grid-cols-1 md:grid-cols-2) and replaced the content with "The Linen & Cotton Rule" and "Loafer Logic".
Why: A 3-column grid felt too crowded for an educational style guide. A 2-column layout provides better readability, allows for more text formatting space, and mimics the premium feel of a digital fashion magazine.

Entry 3: Mobile Menu Navigation Logic
AI Output: Generated basic vanilla JavaScript that simply toggled a 'hidden' class on the mobile menu when the hamburger icon was clicked.
My Decision: Modified. I added logic to swap the SVG d attribute (changing the hamburger icon to an 'X') and added event listeners to the menu links so the menu auto-closes upon selection.
Why: The default AI UX was poor. Users need a clear visual cue (the 'X') to know they can close the menu. Furthermore, having the menu remain open and blocking the screen after a user clicks a link creates a frustrating, broken-feeling experience.

Entry 4: Typography and Branding
AI Output: Used default Tailwind system sans-serif fonts for the entire document.
My Decision: Rejected. I explicitly imported 'Playfair Display' (serif) and 'Lato' (sans-serif) from Google Fonts, added them to a custom CSS block, and mapped them in the Tailwind config.
Why: Typography is the fastest way to establish a brand's "vibe." Standard system fonts looked too much like a tech dashboard. Using a classic Serif font for headings instantly established the "high-end editorial" aesthetic required for this project.

Week 3, Day 2: Full Build Day (Adding State & Interactivity)

Entry 5: The Contextual Style Engine (Occasion Recommender)
AI Output: Suggested building a multi-page routing system or using generic window.alert() pop-ups to show different styling rules.
My Decision: Rejected. I engineered a single-page state machine using a JavaScript data object (scenarioData) and DOM injection (innerHTML).
Why: Multiple HTML pages cause unnecessary loading and break the seamless, app-like feel. window.alert() is incredibly unprofessional and jarring. By mapping data to click events, the user can instantly swap between advice for "The Interview" and "First Week Back" smoothly. This demonstrates competency in arrays, objects, and DOM manipulation to any FAANG reviewer.

Entry 6: Fit Diagnostic Quiz Architecture
AI Output: Generated a massive, static HTML form with 15 radio buttons and a "Submit" button that would require a complex validation script at the end.
My Decision: Modified/Rejected. I rewrote the logic to be an interactive, step-by-step state machine (currentQuestionIndex). It only shows one question at a time and evaluates the result immediately.
Why: A massive form feels like a school test. A step-by-step quiz with a dynamic progress bar feels like a premium, personalized concierge service. This required writing slightly more complex JavaScript (tracking the current index, parsing the data-result attribute on buttons, and recursively calling renderQuiz()), but the UX return on investment is massive.

Week 3, Day 3: Polish, Accessibility & Deployment

Entry 7: Style Emergency Toolkit & Animations
AI Output: Suggested using a heavy external library (like GSAP or Framer Motion) to animate the page and build an emergency FAQ section across multiple HTML files.
My Decision: Rejected. I built a custom Vanilla JS accordion using CSS max-height transitions and implemented a native IntersectionObserver API for scroll fade-ins.
Why: Using a heavy library for simple scroll animations slows down page load times and demonstrates reliance on dependencies. Building it natively shows deep understanding of the DOM and browser APIs. Similarly, keeping the Emergency Toolkit on a single page prevents user drop-off.

Entry 8: Production Build Asset Consolidation
AI Output: AI generated separate .css and .js files for the final deployment.
My Decision: Rejected. I manually consolidated all custom CSS into the <head> and all JavaScript to the bottom of the <body> in a single index.html file.
Why: Since this is an MVP static site hosting on Vercel, reducing the number of HTTP network requests prevents render-blocking. This guarantees a near 100/100 Lighthouse performance score, which technical recruiters look for immediately.