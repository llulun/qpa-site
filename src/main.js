// FAQ 折叠交互
document.querySelectorAll('[data-faq]').forEach(btn => {
  btn.addEventListener('click', () => {
    const id = btn.getAttribute('data-faq');
    const target = document.getElementById(id);
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!expanded));
    if (target) target.hidden = expanded;
  });
});

// 简单轮播
const slides = document.querySelectorAll('#carousel .slide');
let current = 0;
function showSlide(index) {
  slides.forEach((s, i) => s.setAttribute('aria-hidden', i !== index));
}
document.getElementById('prev')?.addEventListener('click', () => {
  current = (current - 1 + slides.length) % slides.length;
  showSlide(current);
});
document.getElementById('next')?.addEventListener('click', () => {
  current = (current + 1) % slides.length;
  showSlide(current);
});
showSlide(current);