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
                if (menu.classList.contains('hidden')) {
                    iconPath.setAttribute('d', hamburgerPath);
                } else {
                    iconPath.setAttribute('d', closePath);
                }
            }

            btn.addEventListener('click', toggleMenu);

            mobileLinks.forEach(link => {
                link.addEventListener('click', () => {
                    menu.classList.add('hidden');
                    iconPath.setAttribute('d', hamburgerPath);
                });
            });

            // ==========================================
            // 2. CONTEXTUAL STYLE ENGINE (Data & State)
            // ==========================================
            const scenarioData = {
                interview: {
                    title: "The Corporate Interview",
                    philosophy: "The goal is to be remembered for what you said, not what you wore. You want a blank, highly professional canvas.",
                    rules: [
                        "Wear a Navy or Charcoal suit. Never black (black is for tuxedos and funerals).",
                        "Crisp white dress shirt. Ensure the collar is stiff, not flimsy.",
                        "Conservative tie (solid navy, burgundy, or subtle stripe).",
                        "Black or dark brown leather lace-up shoes (Oxfords or Derbies) with a matching belt."
                    ],
                    mistake: "Wearing a statement piece (flashy socks, bright tie) to 'stand out'. Stand out with your competence, not your clothes."
                },
                reentry: {
                    title: "The First Week Back",
                    philosophy: "Transitioning back into civilian life and the workforce requires projecting maturity, stability, and approachability.",
                    rules: [
                        "You do not need a suit for everyday life. Focus on 'Elevated Casual'.",
                        "Invest in well-fitting, flat-front chinos (navy, olive, or khaki). No cargo pockets.",
                        "Wear a fitted polo shirt or a casual button-down shirt. Tuck it in if the hem goes past mid-fly.",
                        "Clean footwear is mandatory. Fresh, minimalist white canvas sneakers or leather loafers."
                    ],
                    mistake: "Wearing clothing that is too baggy. Institutional clothing is often oversized; civilian clothing should follow the lines of your body."
                },
                wedding: {
                    title: "The Summer Wedding",
                    philosophy: "You must balance respect for the ceremony with the reality of the heat. Breathability is your primary objective.",
                    rules: [
                        "Opt for unstructured jackets made of breathable fabrics: Linen, Cotton, or Tropical Wool.",
                        "Lighter colors are acceptable: Light grey, tan, or even sage green.",
                        "Loafers (worn with no-show socks) allow your feet to breathe.",
                        "If the invitation says 'Cocktail Attire', keep the tie. If it says 'Casual', ditch the tie and unbutton the top two shirt buttons."
                    ],
                    mistake: "Wearing a heavy worsted wool business suit. You will sweat through it before the ceremony is over."
                }
            };

            const scenarioBtns = document.querySelectorAll('.scenario-btn');
            const contentDisplay = document.getElementById('scenario-content');

            function updateScenario(scenarioKey) {
                const data = scenarioData[scenarioKey];
                
                contentDisplay.style.opacity = 0;
                
                setTimeout(() => {
                    contentDisplay.innerHTML = `
                        <h3 class="font-serif-custom text-2xl font-bold text-slate-900 mb-2">${data.title}</h3>
                        <p class="text-slate-600 italic mb-6 border-l-4 border-gold pl-4">${data.philosophy}</p>
                        <h4 class="font-bold text-slate-900 mb-3 uppercase tracking-wider text-sm">The Blueprint</h4>
                        <ul class="space-y-2 mb-6">
                            ${data.rules.map(rule => `
                                <li class="flex items-start">
                                    <svg class="h-5 w-5 text-gold mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span class="text-slate-700">${rule}</span>
                                </li>
                            `).join('')}
                        </ul>
                        <div class="bg-red-50 text-red-800 p-4 rounded-sm border border-red-100">
                            <strong class="block mb-1 text-red-900">Avoid this common mistake:</strong>
                            <span class="text-sm">${data.mistake}</span>
                        </div>
                    `;
                    contentDisplay.style.opacity = 1;
                }, 300);
            }

            scenarioBtns.forEach(btn => {
                btn.addEventListener('click', (e) => {
                    scenarioBtns.forEach(b => {
                        b.classList.remove('border-gold', 'bg-slate-50', 'ring-1', 'ring-gold');
                        b.classList.add('border-slate-200');
                    });
                    
                    const clickedBtn = e.currentTarget;
                    clickedBtn.classList.remove('border-slate-200');
                    clickedBtn.classList.add('border-gold', 'bg-slate-50', 'ring-1', 'ring-gold');

                    const key = clickedBtn.getAttribute('data-scenario');
                    updateScenario(key);
                });
            });

            // Initialize
            updateScenario('interview');
            scenarioBtns[0].classList.remove('border-slate-200');
            scenarioBtns[0].classList.add('border-gold', 'bg-slate-50', 'ring-1', 'ring-gold');

            // ==========================================
            // 3. FIT DIAGNOSTIC QUIZ (State Machine)
            // ==========================================
            const quizData = [
                {
                    question: "Where does the shoulder seam of your jacket sit?",
                    options: [
                        { text: "It hangs past my natural shoulder bone.", result: "too-big" },
                        { text: "Exactly on the edge of my natural shoulder bone.", result: "next" },
                        { text: "Closer to my neck; my bicep pushes the sleeve out.", result: "too-small" }
                    ]
                },
                {
                    question: "Button the top button of your jacket. How does it look?",
                    options: [
                        { text: "There is an 'X' shape pulling tightly across my stomach.", result: "too-small" },
                        { text: "It lays flat, and I can slide a flat hand into the lapel.", result: "next" },
                        { text: "I could easily fit a grapefruit in the space.", result: "too-big" }
                    ]
                },
                {
                    question: "Where do your trousers end when you are standing straight?",
                    options: [
                        { text: "They pool around my ankles with multiple folds.", result: "too-big" },
                        { text: "They just touch the top of my shoe (slight break) or sit just above it (no break).", result: "perfect" },
                        { text: "They expose my entire ankle and calf.", result: "too-small" }
                    ]
                }
            ];

            let currentQuestionIndex = 0;
            const quizContent = document.getElementById('quiz-content');
            const quizProgress = document.getElementById('quiz-progress');

            function renderQuiz(index) {
                const progressPercentage = ((index) / quizData.length) * 100;
                quizProgress.style.width = `${progressPercentage}%`;

                const currentQ = quizData[index];
                
                let html = `
                    <h3 class="font-serif-custom text-2xl text-white mb-6">Question ${index + 1} of 3</h3>
                    <p class="text-xl text-sand mb-8">${currentQ.question}</p>
                    <div class="space-y-4">
                `;

                currentQ.options.forEach((option) => {
                    html += `
                        <button class="quiz-option-btn w-full text-left p-4 rounded-sm border border-slate-600 bg-slate-800 hover:bg-slate-700 hover:border-gold transition-colors text-slate-300" data-result="${option.result}">
                            ${option.text}
                        </button>
                    `;
                });

                html += `</div>`;
                quizContent.innerHTML = html;

                const optionBtns = document.querySelectorAll('.quiz-option-btn');
                optionBtns.forEach(btn => {
                    btn.addEventListener('click', (e) => {
                        const result = e.currentTarget.getAttribute('data-result');
                        handleQuizAnswer(result);
                    });
                });
            }

            function handleQuizAnswer(result) {
                if (result === 'too-big') {
                    renderResult("Your suit is too large.", "A tailor can take in the waist or hem the pants, but if the shoulders are too wide, do not buy the jacket. Shoulder surgery on a suit is too expensive. Size down.");
                } else if (result === 'too-small') {
                    renderResult("Your suit is too small.", "If the fabric is pulling and creating 'X' shapes, you are stretching the seams. A tailor can only let out a garment if there is extra fabric inside. It is safer to size up.");
                } else if (result === 'next') {
                    currentQuestionIndex++;
                    renderQuiz(currentQuestionIndex);
                } else if (result === 'perfect') {
                    renderResult("Your fit is impeccable.", "You nailed the three hardest parts of fit: the shoulders, the waist suppression, and the trouser break. You are ready to present yourself with confidence.", true);
                }
            }

            function renderResult(headline, message, isPerfect = false) {
                quizProgress.style.width = '100%';
                const colorClass = isPerfect ? 'text-green-400' : 'text-gold';
                
                quizContent.innerHTML = `
                    <div class="text-center py-8">
                        <h3 class="font-serif-custom text-3xl ${colorClass} mb-4">${headline}</h3>
                        <p class="text-lg text-slate-300 mb-8 leading-relaxed max-w-lg mx-auto">${message}</p>
                        <button id="reset-quiz-btn" class="bg-slate-700 text-white px-6 py-3 rounded-sm hover:bg-slate-600 transition-colors">
                            Test Another Garment
                        </button>
                    </div>
                `;

                document.getElementById('reset-quiz-btn').addEventListener('click', () => {
                    currentQuestionIndex = 0;
                    renderQuiz(0);
                });
            }

            // Initialize Quiz
            renderQuiz(0);
        });