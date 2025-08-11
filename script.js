// Simple mobile nav toggle & current year
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');
  btn?.addEventListener('click', () => {
    const open = nav.getAttribute('data-open') === 'true';
    nav.setAttribute('data-open', !open);
    btn.setAttribute('aria-expanded', String(!open));
  });
  const y = document.getElementById('year');
  if (y) y.textContent = String(new Date().getFullYear());
});
