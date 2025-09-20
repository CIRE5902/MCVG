// Fondo sólido del header al hacer scroll
const header = document.getElementById('siteHeader');
const onScroll = () => {
  if (window.scrollY > 8) header.classList.add('is-scrolled');
  else header.classList.remove('is-scrolled');
};
document.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Menú móvil accesible
const toggle = document.getElementById('navToggle');
const siteNav = document.getElementById('siteNav');

toggle.addEventListener('click', () => {
  const open = document.body.classList.toggle('nav-open');
  toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
});

// Cerrar menú al navegar por enlaces
siteNav.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    document.body.classList.remove('nav-open');
    toggle.setAttribute('aria-expanded', 'false');
  }
});
