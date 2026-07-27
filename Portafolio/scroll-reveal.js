// Scroll reveal — añade esta etiqueta al final del <body>:
// <script src="scroll-reveal.js"></script>

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      entry.target.style.animationDelay = (i * 0.1) + 's';
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.timeline-content, .project-card').forEach(el => {
  observer.observe(el);
});

// Navbar shrink on scroll
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  if (window.scrollY > 60) {
    nav.style.padding = '0.7rem 4rem';
    nav.style.background = 'rgba(11,11,11,0.95)';
  } else {
    nav.style.padding = '1.2rem 4rem';
    nav.style.background = 'rgba(11,11,11,0.8)';
  }
});
