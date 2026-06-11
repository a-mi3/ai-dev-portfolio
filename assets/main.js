// Scroll-reveal
if ('IntersectionObserver' in window) {
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
} else {
  document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
}

// Stagger cards
document.querySelectorAll('.cards-grid .card').forEach((card, i) => {
  card.style.transitionDelay = `${i * 60}ms`;
});
