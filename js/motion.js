// IntersectionObserver fade-and-rise for .reveal elements with staggered delays.
(function () {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const targets = document.querySelectorAll('.reveal');
  if (!targets.length) return;
  if (reduce) {
    targets.forEach((el) => el.classList.add('is-visible'));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const delay = parseInt(entry.target.dataset.revealDelay || '0', 10);
          if (delay > 0) {
            entry.target.style.transitionDelay = delay + 'ms';
          }
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    },
    { rootMargin: '0px 0px -10% 0px', threshold: 0.05 }
  );
  targets.forEach((el) => io.observe(el));
})();

// Hero parallax — airfoil moves at 0.5x scroll rate.
(function () {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce) return;
  const hero = document.querySelector('.hero');
  const airfoil = document.getElementById('hero-airfoil');
  if (!hero || !airfoil) return;
  const heroBottom = hero.offsetTop + hero.offsetHeight;
  let ticking = false;
  window.addEventListener('scroll', function () {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () {
      if (window.scrollY < heroBottom) {
        airfoil.style.transform = 'translateY(' + (window.scrollY * 0.5) + 'px)';
      }
      ticking = false;
    });
  }, { passive: true });
})();

// Background pattern parallax — moves at 0.4x scroll rate.
(function () {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce) return;
  let ticking = false;
  window.addEventListener('scroll', function () {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () {
      document.body.style.backgroundPositionY = (window.scrollY * 0.4) + 'px';
      ticking = false;
    });
  }, { passive: true });
})();
