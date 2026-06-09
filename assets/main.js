// Scroll-reveal
const revealObserver = new IntersectionObserver(
  (entries) => entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      revealObserver.unobserve(e.target);
    }
  }),
  { threshold: 0.12 }
);

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// Stagger cards
document.querySelectorAll('.cards-grid .card').forEach((card, i) => {
  card.style.transitionDelay = `${i * 60}ms`;
});
