// Grid spotlight — mouse-follow highlight via CSS custom properties
(function () {
  const g = document.getElementById('grid-spotlight');
  if (!g) return;
  document.addEventListener('mousemove', function (e) {
    g.style.setProperty('--mx', e.clientX + 'px');
    g.style.setProperty('--my', e.clientY + 'px');
  });
  document.addEventListener('mouseleave', function () {
    g.style.setProperty('--mx', '-999px');
    g.style.setProperty('--my', '-999px');
  });
})();

// Mobile nav toggle
(function () {
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  if (!navToggle || !navLinks) return;
  navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });
})();

// Scroll reveal — call initReveal() after any dynamic content is injected
function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}
