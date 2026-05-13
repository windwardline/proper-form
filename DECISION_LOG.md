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