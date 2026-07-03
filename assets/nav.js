/* Mobile navigation — injects a hamburger toggle into the header and
   opens/closes the main nav as a dropdown on small screens.
   Shared across all pages; no-op on desktop (toggle is hidden via CSS). */
(function () {
  function init() {
    var navInner = document.querySelector('header.topbar .nav-inner');
    var nav = document.querySelector('nav.main-nav');
    if (!navInner || !nav) return;

    nav.id = nav.id || 'main-nav';

    var btn = document.createElement('button');
    btn.className = 'nav-toggle';
    btn.type = 'button';
    btn.setAttribute('aria-label', 'Toggle navigation menu');
    btn.setAttribute('aria-expanded', 'false');
    btn.setAttribute('aria-controls', nav.id);
    btn.innerHTML = '<span></span><span></span><span></span>';
    navInner.appendChild(btn);

    function setOpen(open) {
      nav.classList.toggle('open', open);
      btn.classList.toggle('open', open);
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    }

    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      setOpen(!nav.classList.contains('open'));
    });

    // Close after tapping a link
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') setOpen(false);
    });

    // Close on outside tap
    document.addEventListener('click', function (e) {
      if (nav.classList.contains('open') &&
          !nav.contains(e.target) && !btn.contains(e.target)) {
        setOpen(false);
      }
    });

    // Close on Escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') setOpen(false);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
