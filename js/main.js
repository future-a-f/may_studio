/* ── CURSOR ────────────────────────────────────────────── */
const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursor-ring');
let mx = 0, my = 0, rx = 0, ry = 0;
const customCursorEnabled = !!cursor && !!ring && window.matchMedia('(pointer: fine)').matches;
if (customCursorEnabled) {
  document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; cursor.style.transform = `translate(${mx}px,${my}px) translate(-50%,-50%)`; });
  (function animRing() {
    rx += (mx - rx) * .12; ry += (my - ry) * .12;
    ring.style.transform = `translate(${rx}px,${ry}px) translate(-50%,-50%)`;
    requestAnimationFrame(animRing);
  })();
  document.querySelectorAll('a,button,.portfolio-item').forEach(el => {
    el.addEventListener('mouseenter', () => { cursor.style.width='20px';cursor.style.height='20px';ring.style.width='60px';ring.style.height='60px';ring.style.opacity='.2'; });
    el.addEventListener('mouseleave', () => { cursor.style.width='10px';cursor.style.height='10px';ring.style.width='36px';ring.style.height='36px';ring.style.opacity='.5'; });
  });
}

/* ── NAV ───────────────────────────────────────────────── */
const nav = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
const navSectionLinks = Array.from(document.querySelectorAll('.nav-links a[href^="#"]'));

function closeMobileNav() {
  navLinks.classList.remove('open');
  hamburger.classList.remove('open');
  hamburger.setAttribute('aria-expanded', 'false');
}

function setActiveNavLink() {
  const navHeight = nav.offsetHeight;
  const scrollY = window.scrollY + navHeight + 8;
  let activeId = 'hero';

  navSectionLinks.forEach(link => {
    const href = link.getAttribute('href');
    const section = href ? document.querySelector(href) : null;
    if (section && section.offsetTop <= scrollY) {
      activeId = section.id;
    }
  });

  navSectionLinks.forEach(link => {
    const isActive = link.getAttribute('href') === `#${activeId}`;
    link.classList.toggle('active', isActive);
    if (isActive) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  });
}

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
  setActiveNavLink();
});
hamburger.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  hamburger.classList.toggle('open', open);
  hamburger.setAttribute('aria-expanded', open);
});
document.querySelectorAll('.nav-links a').forEach(a => {
  a.addEventListener('click', closeMobileNav);
});
document.addEventListener('click', (e) => {
  if (!navLinks.classList.contains('open')) return;
  if (nav.contains(e.target)) return;
  closeMobileNav();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeMobileNav();
});
setActiveNavLink();
window.addEventListener('hashchange', setActiveNavLink);

/* ── SMOOTH SCROLLING ───────────────────────────────────── */
function scrollToHash(href) {
  if (!href || href === '#') return false;
  const id = href.startsWith('#') ? href.slice(1) : href;
  if (!id) return false;

  const target = document.getElementById(id);
  if (!target) return false;

  const navHeight = nav.offsetHeight;
  const scrollTop = id === 'hero' ? 0 : target.offsetTop - navHeight;

  try {
    window.scrollTo({
      top: scrollTop,
      behavior: 'smooth'
    });
  } catch (_) {
    window.scrollTo(0, scrollTop);
  }

  try {
    if (history.replaceState) history.replaceState(null, '', `#${id}`);
  } catch (_) {
    // Ignore history errors in restricted contexts (e.g., some local file views).
  }

  return true;
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (scrollToHash(href)) e.preventDefault();
  });
});

/* ── PORTFOLIO DATA ─────────────────────────────────────── */
const photos = [
  { id:1, title:'Rift Valley Dawn',       cat:'landscape',   color:'linear-gradient(135deg,#2a1e14,#4a3322)', image:'assets/images/portfolio/Rift_Valley_Dawn.jpg' },
  { id:2, title:'Blue Epoch',             cat:'editorial',   color:'linear-gradient(135deg,#1a1e2a,#2a3344)', image:'assets/images/portfolio/Blue_Epoch.jpg' },
  { id:3, title:'The Green Season',       cat:'landscape',   color:'linear-gradient(135deg,#1e2a1a,#2a4022)', image:'assets/images/portfolio/The_Green_Season.jpg' },
  { id:4, title:'Crimson Study',          cat:'portrait',    color:'linear-gradient(135deg,#2a1a1a,#44222a)', image:'assets/images/portfolio/Crimson_Study.jpg' },
  { id:5, title:'Forest Breath',          cat:'landscape',   color:'linear-gradient(135deg,#1a241e,#223a2a)', image:'assets/images/portfolio/Forest_Breath.jpg' },
  { id:6, title:'Violet Hours',           cat:'editorial',   color:'linear-gradient(135deg,#241a22,#3a2a38)', image:'assets/images/portfolio/Violet_Hours.jpg' },
  { id:7, title:'Nomad',                  cat:'documentary', color:'linear-gradient(135deg,#221a10,#3a2a18)', image:'assets/images/portfolio/Nomad.jpg' },
  { id:8, title:'Harbour Light',          cat:'landscape',   color:'linear-gradient(135deg,#101a22,#182a3a)', image:'assets/images/portfolio/Harbour_Light.jpg' },
  { id:9, title:'Dust & Gold',            cat:'documentary', color:'linear-gradient(135deg,#221e14,#3a3218)', image:'assets/images/portfolio/Dust_Gold.jpg' },
  { id:10,title:'Tidal Quiet',            cat:'landscape',   color:'linear-gradient(135deg,#1a2222,#22383a)', image:'assets/images/portfolio/Tidal_Quiet.jpg' },
];

/* ── BUILD PORTFOLIO ─────────────────────────────────────── */
const grid = document.getElementById('portfolio-grid');
photos.forEach((p, i) => {
  const item = document.createElement('div');
  item.className = 'portfolio-item';
  item.setAttribute('role','listitem');
  item.dataset.cat = p.cat;
  item.style.backgroundColor = p.color;
  item.style.backgroundImage = `url('${p.image}')`;
  item.style.backgroundSize = 'cover';
  item.style.backgroundPosition = 'center';
  item.style.backgroundRepeat = 'no-repeat';
  item.innerHTML = `
    <div class="portfolio-inner">
      <div class="portfolio-category">${p.cat}</div>
      <div class="portfolio-name">${p.title}</div>
    </div>
    <div class="expand-icon" aria-hidden="true">
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M1 1h4M1 1v4M11 1H7M11 1v4M1 11h4M1 11V7M11 11H7M11 11V7" stroke="#c9a96e" stroke-width="1.2" stroke-linecap="round"/></svg>
    </div>
  `;
  item.setAttribute('tabindex','0');
  item.setAttribute('aria-label', `Open ${p.title} — ${p.cat} photo`);
  item.addEventListener('click', () => openLightbox(i));
  item.addEventListener('keydown', e => {
    if(e.key==='Enter'||e.key===' ') {
      e.preventDefault();
      openLightbox(i);
    }
  });
  grid.appendChild(item);
});

/* ── FILTER ──────────────────────────────────────────────── */
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const f = btn.dataset.filter;
    document.querySelectorAll('.portfolio-item').forEach(item => {
      item.classList.toggle('hidden', f !== 'all' && item.dataset.cat !== f);
    });
  });
});

/* ── LIGHTBOX ────────────────────────────────────────────── */
let lbIdx = 0;
const lb = document.getElementById('lightbox');
const lbImg = document.getElementById('lb-img');
const lbTitle = document.getElementById('lb-title');
const lbCat = document.getElementById('lb-cat');
const lbCloseBtn = document.getElementById('lb-close');
const focusableLbSelector = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
let lastFocusedElement = null;

function toggleBackgroundInert(isInert) {
  const pageElements = document.querySelectorAll('body > *:not(#lightbox)');
  pageElements.forEach(el => {
    if ('inert' in el) {
      el.inert = isInert;
    } else if (isInert) {
      el.setAttribute('aria-hidden', 'true');
    } else {
      el.removeAttribute('aria-hidden');
    }
  });
}

function openLightbox(idx) {
  lbIdx = idx;
  lastFocusedElement = document.activeElement;
  renderLb();
  lb.classList.add('open');
  lb.setAttribute('aria-hidden','false');
  toggleBackgroundInert(true);
  document.body.style.overflow = 'hidden';
  lbCloseBtn.focus();
}
function closeLightbox() {
  lb.classList.remove('open');
  lb.setAttribute('aria-hidden','true');
  toggleBackgroundInert(false);
  document.body.style.overflow = '';
  if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
    lastFocusedElement.focus();
  }
}
function renderLb() {
  const p = photos[lbIdx];
  lbImg.style.backgroundColor = p.color;
  lbImg.style.backgroundImage = `url('${p.image}')`;
  lbImg.style.backgroundSize = 'cover';
  lbImg.style.backgroundPosition = 'center';
  lbImg.style.width = '100%'; lbImg.style.height = '100%';
  lbTitle.textContent = p.title;
  lbCat.textContent = p.cat.toUpperCase();
}
lbCloseBtn.addEventListener('click', closeLightbox);
document.getElementById('lb-prev').addEventListener('click', () => { lbIdx = (lbIdx - 1 + photos.length) % photos.length; renderLb(); });
document.getElementById('lb-next').addEventListener('click', () => { lbIdx = (lbIdx + 1) % photos.length; renderLb(); });
lb.addEventListener('click', e => { if(e.target === lb) closeLightbox(); });
document.addEventListener('keydown', e => {
  const lightboxOpen = lb.classList.contains('open');

  if (lightboxOpen && e.key === 'Tab') {
    const focusable = Array.from(lb.querySelectorAll(focusableLbSelector))
      .filter(el => !el.hasAttribute('disabled') && el.offsetParent !== null);
    if (!focusable.length) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }

  if (!lightboxOpen) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowLeft') { lbIdx = (lbIdx - 1 + photos.length) % photos.length; renderLb(); }
  if (e.key === 'ArrowRight') { lbIdx = (lbIdx + 1) % photos.length; renderLb(); }
});

/* ── CONTACT FORM ────────────────────────────────────────── */
const form = document.getElementById('contact-form');
const msg = document.getElementById('form-msg');
form.addEventListener('submit', async e => {
  e.preventDefault();
  msg.className = 'form-msg'; msg.textContent = '';
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();
  if (!name || !email || !message) {
    msg.textContent = 'Please fill in all required fields.';
    msg.className = 'form-msg error'; return;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    msg.textContent = 'Please enter a valid email address.';
    msg.className = 'form-msg error'; return;
  }
  // Simulate async send
  const btn = form.querySelector('.form-submit');
  const originalText = btn.textContent;
  btn.textContent = 'Sending...'; btn.disabled = true;
  btn.innerHTML = '<span class="spinner"></span> Sending...';
  await new Promise(r => setTimeout(r, 1200));
  msg.textContent = '✓ Message received — I\'ll be in touch within 48 hours.';
  msg.className = 'form-msg success';
  form.reset(); btn.textContent = originalText; btn.disabled = false;
  btn.innerHTML = 'Send Message →';
});

/* ── SCROLL REVEAL ───────────────────────────────────────── */
const revealObs = new IntersectionObserver(entries => {
  entries.forEach(e => { if(e.isIntersecting) { e.target.classList.add('visible'); revealObs.unobserve(e.target); } });
}, { threshold: .12 });
document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

/* ── BACK TO TOP ────────────────────────────────────────── */
const backToTop = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
  backToTop.classList.toggle('show', window.scrollY > 300);
});
backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});