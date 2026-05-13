        document.addEventListener('DOMContentLoaded', () => {
            // Mobile Navigation Toggle Logic
            const btn = document.getElementById('mobile-menu-btn');
            const menu = document.getElementById('mobile-menu');
            const mobileLinks = document.querySelectorAll('.mobile-link');
            const iconPath = document.getElementById('menu-icon');

            // SVG Path for Hamburger Menu
            const hamburgerPath = "M4 6h16M4 12h16M4 18h16";
            // SVG Path for Close 'X' Menu
            const closePath = "M6 18L18 6M6 6l12 12";

            function toggleMenu() {
                menu.classList.toggle('hidden');
                
                // Swap the icon visually
                if (menu.classList.contains('hidden')) {
                    iconPath.setAttribute('d', hamburgerPath);
                } else {
                    iconPath.setAttribute('d', closePath);
                }
            }

            // Listen for click on the hamburger button
            btn.addEventListener('click', toggleMenu);

            // Close the mobile menu automatically when a link is clicked
            mobileLinks.forEach(link => {
                link.addEventListener('click', () => {
                    menu.classList.add('hidden');
                    iconPath.setAttribute('d', hamburgerPath);
                });
            });
        });