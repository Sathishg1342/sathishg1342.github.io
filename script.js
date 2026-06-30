/* ── TYPING ANIMATION ── */
const roles = ['Full Stack Developer', 'System Design Engineer', 'Cloud & DevOps Engineer', 'Backend Engineer'];
let roleIdx = 0, charIdx = 0, deleting = false;
const typedEl = document.getElementById('typed-text');

function type() {
  if (!typedEl) return;
  const current = roles[roleIdx];
  if (!deleting) {
    typedEl.textContent = current.slice(0, ++charIdx);
    if (charIdx === current.length) { deleting = true; return setTimeout(type, 2200); }
  } else {
    typedEl.textContent = current.slice(0, --charIdx);
    if (charIdx === 0) { deleting = false; roleIdx = (roleIdx + 1) % roles.length; }
  }
  setTimeout(type, deleting ? 38 : 78);
}
setTimeout(type, 800);

/* ── SCROLL PROGRESS ── */
const progressEl = document.getElementById('progress');
window.addEventListener('scroll', () => {
  if (!progressEl) return;
  const scrolled = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
  progressEl.style.width = Math.min(scrolled, 100) + '%';
}, { passive: true });

/* ── NAV SCROLL STATE ── */
const navEl = document.getElementById('nav');
window.addEventListener('scroll', () => {
  if (!navEl) return;
  navEl.classList.toggle('scrolled', window.scrollY > 30);
}, { passive: true });

/* ── MOBILE NAV TOGGLE ── */
const navToggle = document.getElementById('nav-toggle');
const navLinks  = document.getElementById('nav-links');
if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => navLinks.classList.remove('open'));
  });
}

/* ── HERO CANVAS DOT GRID ── */
const canvas = document.getElementById('hero-canvas');
if (canvas) {
  const ctx = canvas.getContext('2d');
  function drawDots() {
    canvas.width  = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    const W = canvas.width, H = canvas.height, sp = 34;
    for (let x = sp / 2; x < W; x += sp) {
      for (let y = sp / 2; y < H; y += sp) {
        const dist = Math.hypot(x - W / 2, y - H / 2) / Math.hypot(W / 2, H / 2);
        ctx.fillStyle = `rgba(148,163,184,${Math.max(0, 0.08 - dist * 0.06)})`;
        ctx.beginPath(); ctx.arc(x, y, 1, 0, Math.PI * 2); ctx.fill();
      }
    }
  }
  drawDots();
  let resizeTimer;
  window.addEventListener('resize', () => { clearTimeout(resizeTimer); resizeTimer = setTimeout(drawDots, 150); });
}

/* ── FADE IN ON SCROLL ── */
const faders = document.querySelectorAll('.fade-in');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); }
    });
  }, { threshold: 0.1 });
  faders.forEach(f => observer.observe(f));
} else {
  faders.forEach(f => f.classList.add('visible'));
}

/* ── SMOOTH SCROLL (fallback for older browsers) ── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
  });
});
