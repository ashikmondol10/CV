/* ==========================================================================
   Martin Ashik - CV website
   Vanilla JavaScript. The page works without this file; it only adds
   the mobile menu, the active-section highlight and a few small checks.
   ========================================================================== */

(function () {
  'use strict';

  var CV_PATH = 'assets/Martin_Ashik_CV.pdf';

  /* ---------- Mobile menu ---------- */
  function initMenu() {
    var toggle = document.getElementById('nav-toggle');
    var nav = document.getElementById('primary-nav');
    if (!toggle || !nav) return;

    function setOpen(open) {
      toggle.setAttribute('aria-expanded', String(open));
      nav.classList.toggle('is-open', open);
    }

    toggle.addEventListener('click', function () {
      setOpen(toggle.getAttribute('aria-expanded') !== 'true');
    });

    // Close after choosing a link
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) setOpen(false);
    });

    // Close with Escape and return focus to the button
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
        setOpen(false);
        toggle.focus();
      }
    });

    // Close when clicking outside the header
    document.addEventListener('click', function (e) {
      if (!e.target.closest('#site-header')) setOpen(false);
    });

    // Reset when the window grows to the desktop layout
    var desktop = window.matchMedia('(min-width: 56rem)');
    var onChange = function () { if (desktop.matches) setOpen(false); };
    if (desktop.addEventListener) desktop.addEventListener('change', onChange);
    else if (desktop.addListener) desktop.addListener(onChange);
  }

  /* ---------- Header shadow after scrolling ---------- */
  function initStickyHeader() {
    var header = document.getElementById('site-header');
    if (!header) return;
    function update() { header.classList.toggle('is-scrolled', window.scrollY > 8); }
    update();
    window.addEventListener('scroll', update, { passive: true });
  }

  /* ---------- Active section in navigation ---------- */
  function initActiveNav() {
    var links = Array.prototype.slice.call(document.querySelectorAll('[data-nav]'));
    if (!links.length) return;

    var sections = links
      .map(function (a) { return document.getElementById(a.getAttribute('href').slice(1)); })
      .filter(Boolean);

    function setActive(id) {
      links.forEach(function (a) {
        if (a.getAttribute('href') === '#' + id) a.setAttribute('aria-current', 'true');
        else a.removeAttribute('aria-current');
      });
    }

    function update() {
      var offset = (parseInt(getComputedStyle(document.documentElement).scrollPaddingTop, 10) || 80) + 16;
      var current = sections[0].id;
      sections.forEach(function (s) {
        if (s.getBoundingClientRect().top <= offset) current = s.id;
      });
      // Bottom of page: highlight the last item (Contact)
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 4) {
        current = sections[sections.length - 1].id;
      }
      setActive(current);
    }

    var ticking = false;
    window.addEventListener('scroll', function () {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(function () { update(); ticking = false; });
    }, { passive: true });
    window.addEventListener('resize', update);
    update();
  }

  /* ---------- Footer year ---------- */
  function initYear() {
    var el = document.getElementById('year');
    if (el) el.textContent = String(new Date().getFullYear());
  }

  /* ---------- CV download: show a message if the PDF is missing ---------- */
  function initCvCheck() {
    var button = document.getElementById('cv-download');
    var note = document.getElementById('cv-note');
    if (!button || !note || !window.fetch) return;
    // Only check on http(s). Opening index.html directly from a folder (file://) cannot be checked.
    if (location.protocol !== 'http:' && location.protocol !== 'https:') return;

    fetch(CV_PATH, { method: 'HEAD', cache: 'no-store' })
      .then(function (res) {
        if (!res.ok) throw new Error('CV file not found');
      })
      .catch(function () {
        button.hidden = true;
        button.setAttribute('aria-hidden', 'true');
        button.style.display = 'none';
        note.hidden = false;
      });
  }

  /* ---------- Profile photo fallback ---------- */
  function initPhoto() {
    var img = document.getElementById('profile-img');
    if (!img) return;
    function fallback() { img.style.visibility = 'hidden'; }
    img.addEventListener('error', fallback);
    if (img.complete && img.naturalWidth === 0) fallback();
  }

  document.addEventListener('DOMContentLoaded', function () {
    initMenu();
    initStickyHeader();
    initActiveNav();
    initYear();
    initCvCheck();
    initPhoto();
  });
})();
