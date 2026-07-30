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
  // 2. ACCORDION LOGIC (Emergency Toolkit)
  // ==========================================
  const accordionBtns = document.querySelectorAll('.accordion-btn');

  accordionBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const content = this.nextElementSibling;
      const isExpanded = content.classList.contains('expanded');
      const icon = this.querySelector('svg');

      // Close all active accordions first for clean UX
      document.querySelectorAll('.accordion-content').forEach(c => c.classList.remove('expanded'));
      document.querySelectorAll('.accordion-btn').forEach(b => {
        b.setAttribute('aria-expanded', 'false');
        b.querySelector('svg').style.transform = 'rotate(0deg)';
      });

      // If it wasn't already open, open the clicked one
      if (!isExpanded) {
        this.setAttribute('aria-expanded', 'true');
        content.classList.add('expanded');
        icon.style.transform = 'rotate(180deg)';
      }
    });
  });

  // ==========================================
  // 3. INTERSECTION OBSERVER (Scroll Animations)
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
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const sections = document.querySelectorAll('.fade-in-section');
  sections.forEach(section => {
    observer.observe(section);
  });
});
