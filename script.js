document.addEventListener('DOMContentLoaded', () => {
            
    // ==========================================
    // 1. MOBILE NAVIGATION LOGIC
    // ==========================================
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');
    const iconPath = document.getElementById('menu-icon');

    const hamburgerPath = "M4 6h16M4 12h16M4 18h16";
    const closePath = "M6 18L18 6M6 6l12 12";

    function toggleMenu() {
        menu.classList.toggle('hidden');
        const isExpanded = !menu.classList.contains('hidden');
        btn.setAttribute('aria-expanded', isExpanded);
        
        if (!isExpanded) {
            iconPath.setAttribute('d', hamburgerPath);
        } else {
            iconPath.setAttribute('d', closePath);
        }
    }

    if (btn) btn.addEventListener('click', toggleMenu);

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.add('hidden');
            btn.setAttribute('aria-expanded', 'false');
            if (iconPath) iconPath.setAttribute('d', hamburgerPath);
        });
    });

    // ==========================================
    // 2. CONTEXTUAL STYLE ENGINE
    // ==========================================
    const scenarioData = {
        interview: {
            title: "The Corporate Interview",
            philosophy: "The goal is to be remembered for what you said, not what you wore. You want a blank, highly professional canvas.",
            rules: [
                "Navy or Charcoal suit only. Never black.",
                "Crisp white shirt. Ironed collar.",
                "Conservative tie (solid or subtle stripe).",
                "Black or dark brown Oxford shoes."
            ],
            icon: '<svg class="w-12 h-12 text-slate-900 mb-4 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>'
        },
        reentry: {
            title: "First Week Back",
            philosophy: "Presentation signals stability and respect. You want to look intentional without looking like you are trying too hard.",
            rules: [
                "Dark, fitted denim (no distressing or holes).",
                "A solid-colored polo or button-down shirt.",
                "Clean, understated sneakers or chukka boots.",
                "Ensure your belt matches your shoes."
            ],
            icon: '<svg class="w-12 h-12 text-slate-900 mb-4 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>'
        },
        wedding: {
            title: "The Summer Wedding",
            philosophy: "You must balance formal respect for the couple with the realities of heat and humidity. Never upstage the groom.",
            rules: [
                "Light gray, tan, or olive suit.",
                "Linen or cotton-blend fabrics to breathe.",
                "Loafers (no-show socks are acceptable).",
                "A pocket square adds effort without heat."
            ],
            icon: '<svg class="w-12 h-12 text-slate-900 mb-4 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z"></path></svg>'
        }
    };

    const scenarioBtns = document.querySelectorAll('.scenario-btn');
    const displayArea = document.getElementById('scenario-display');

    scenarioBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Reset styling on all buttons and ARIA states
            scenarioBtns.forEach(b => {
                b.classList.remove('border-gold', 'bg-white');
                b.setAttribute('aria-selected', 'false');
            });
            
            // Highlight clicked button
            e.target.classList.add('border-gold', 'bg-white');
            e.target.setAttribute('aria-selected', 'true');

            // Fetch data and inject
            const scenarioKey = e.target.getAttribute('data-scenario');
            const data = scenarioData[scenarioKey];

            displayArea.innerHTML = `
                <div class="animate-fade-in text-center lg:text-left">
                    ${data.icon}
                    <h3 class="font-serif-custom text-3xl font-bold text-slate-900 mb-2">${data.title}</h3>
                    <p class="text-slate-600 italic mb-6">"${data.philosophy}"</p>
                    <h4 class="font-bold text-slate-900 mb-3 uppercase text-xs tracking-wider">The Rules:</h4>
                    <ul class="space-y-2 text-slate-700 text-left list-disc pl-5">
                        ${data.rules.map(rule => `<li>${rule}</li>`).join('')}
                    </ul>
                </div>
            `;
        });
    });

    // ==========================================
    // 3. FIT DIAGNOSTIC QUIZ (State Machine)
    // ==========================================
    const quizData = [
        {
            question: "When standing naturally, where does the shoulder seam of your jacket end?",
            options: [
                { text: "It hangs past my natural shoulder.", result: "too-big" },
                { text: "It ends exactly at my natural shoulder bone.", result: "next" },
                { text: "It pulls tightly before the end of my shoulder.", result: "too-small" }
            ]
        },
        {
            question: "Button the top button of your jacket (never the bottom). How does it feel?",
            options: [
                { text: "It forms an 'X' crease pulling across my stomach.", result: "too-small" },
                { text: "It rests flat with enough room to slide a flat hand inside.", result: "next" },
                { text: "I can pull the fabric several inches away from my chest.", result: "too-big" }
            ]
        },
        {
            question: "Look at where your trousers meet your shoes. What do you see?",
            options: [
                { text: "The fabric pools heavily around my ankles.", result: "too-big" },
                { text: "There is one slight crease (a 'half break') or it just touches the shoe.", result: "perfect" },
                { text: "My ankles are completely exposed while standing straight.", result: "too-small" }
            ]
        }
    ];

    let currentQuestionIndex = 0;
    const quizContent = document.getElementById('quiz-content');
    const quizProgress = document.getElementById('quiz-progress');

    function renderQuiz(index) {
        if (!quizContent) return;
        
        // Update Progress Bar
        const progressPercentage = (index / quizData.length) * 100;
        quizProgress.style.width = `${progressPercentage}%`;

        const data = quizData[index];
        
        let optionsHtml = '';
        data.options.forEach(opt => {
            optionsHtml += `
                <button class="quiz-answer-btn w-full text-left px-6 py-4 bg-slate-900 border border-slate-700 hover:border-gold hover:bg-slate-800 transition-colors rounded-sm text-slate-300 font-medium focus:outline-none focus:ring-2 focus:ring-gold" data-result="${opt.result}">
                    ${opt.text}
                </button>
            `;
        });

        quizContent.innerHTML = `
            <div class="animate-fade-in">
                <span class="text-gold font-bold tracking-widest text-xs uppercase mb-2 block">Step ${index + 1} of ${quizData.length}</span>
                <h3 class="font-serif-custom text-2xl mb-6">${data.question}</h3>
                <div class="space-y-3">
                    ${optionsHtml}
                </div>
            </div>
        `;

        const answerBtns = document.querySelectorAll('.quiz-answer-btn');
        answerBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const result = e.target.getAttribute('data-result');
                handleAnswer(result);
            });
        });
    }

    function handleAnswer(result) {
        if (result === 'too-big') {
            renderResult("Size Down.", "Your garment is too large. A tailor can fix minor issues, but fixing shoulders that are too wide is prohibitively expensive. Try one size smaller.");
        } else if (result === 'too-small') {
            renderResult("Size Up.", "Your garment is too tight. A tailor cannot add fabric that isn't there. It is much safer to buy the next size up and have the waist taken in.");
        } else if (result === 'next') {
            currentQuestionIndex++;
            renderQuiz(currentQuestionIndex);
        } else if (result === 'perfect') {
            renderResult("Impeccable Fit.", "You nailed the hardest parts of tailoring: the shoulders, the waist suppression, and the trouser break. You are ready to present yourself with confidence.", true);
        }
    }

    function renderResult(headline, message, isPerfect = false) {
        quizProgress.style.width = '100%';
        const colorClass = isPerfect ? 'text-green-400' : 'text-gold';
        
        quizContent.innerHTML = `
            <div class="text-center py-8 animate-fade-in">
                <h3 class="font-serif-custom text-3xl ${colorClass} mb-4">${headline}</h3>
                <p class="text-lg text-slate-300 mb-8 leading-relaxed max-w-lg mx-auto">${message}</p>
                <button id="reset-quiz-btn" class="bg-slate-700 text-white px-8 py-3 rounded-sm font-semibold hover:bg-slate-600 transition-colors focus:outline-none focus:ring-2 focus:ring-white">
                    Test Another Garment
                </button>
            </div>
        `;

        const resetBtn = document.getElementById('reset-quiz-btn');
        if (resetBtn) {
            resetBtn.addEventListener('click', () => {
                currentQuestionIndex = 0;
                renderQuiz(0);
            });
        }
    }

    // Initialize Quiz
    if (document.getElementById('quiz-container')) {
        renderQuiz(0);
    }

    // ==========================================
    // 4. STYLE EMERGENCY ACCORDION (New Feature)
    // ==========================================
    const accordionBtns = document.querySelectorAll('.accordion-btn');
    
    accordionBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const content = this.nextElementSibling;
            const icon = this.querySelector('svg');
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            
            // Close all others first (optional, but good UX)
            document.querySelectorAll('.accordion-content').forEach(c => c.classList.remove('expanded'));
            document.querySelectorAll('.accordion-btn').forEach(b => {
                b.setAttribute('aria-expanded', 'false');
                b.querySelector('svg').style.transform = 'rotate(0deg)';
            });

            // If it wasn't already open, open it
            if (!isExpanded) {
                this.setAttribute('aria-expanded', 'true');
                content.classList.add('expanded');
                icon.style.transform = 'rotate(180deg)';
            }
        });
    });

    // ==========================================
    // 5. INTERSECTION OBSERVER (Scroll Animations)
    // ==========================================
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Stop observing once visible
            }
        });
    }, observerOptions);

    const sections = document.querySelectorAll('.fade-in-section');
    sections.forEach(section => {
        observer.observe(section);
    });
});