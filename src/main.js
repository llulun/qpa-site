document.addEventListener('DOMContentLoaded', () => {
  console.log('QPA site loaded');
});

// Carousel
(function(){
  const root = document.getElementById('carousel');
  if (!root) return;
  const slides = Array.from(root.querySelectorAll('.slide'));
  let i = 0;
  const update = () => slides.forEach((s, idx) => {
    const active = idx === i;
    s.style.display = active ? 'block' : 'none';
    s.setAttribute('aria-hidden', (!active).toString());
  });
  update();
  const prev = document.getElementById('prev'), next = document.getElementById('next');
  prev && prev.addEventListener('click', () => { i = (i - 1 + slides.length) % slides.length; update(); });
  next && next.addEventListener('click', () => { i = (i + 1) % slides.length; update(); });
})();

// FAQ Accordion
(function(){
  const container = document.getElementById('faq-accordion');
  if (!container) return;
  container.querySelectorAll('button[data-faq]').forEach(btn => {
    const id = btn.getAttribute('data-faq');
    const panel = document.getElementById(id);
    btn.addEventListener('click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', (!expanded).toString());
      panel.hidden = expanded;
    });
  });
})();