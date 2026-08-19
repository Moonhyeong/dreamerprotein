/* ============================================
   Member photo loader — DPR-aware size selection.

   Usage in HTML:
     <div class="member-photo" data-photo="yun-lim">YL</div>
     <div class="pi-photo" data-photo="seo">MS</div>

   How it works:
   - Size variants live next to the base file:
       name-200.jpg, name-240.jpg, name-360.jpg, name-480.jpg, name-720.jpg
     The loader measures the element's on-screen width x devicePixelRatio
     and requests the smallest variant that covers it — so the browser
     barely downscales and photos stay crisp at 100% zoom.
   - If no variant exists, it falls back to trying name.{jpg,png,...}
     like before, so plain single-file photos still work.
   - When the user zooms in (devicePixelRatio grows), a larger variant
     is swapped in automatically (upgrade only, never downgrade).
   - When a photo is found, the element gets class "has-photo" — CSS
     uses this to hide the placeholder initials.
   ============================================ */

(function () {
  'use strict';

  var SIZES = [200, 240, 360, 480, 720];
  var EXTENSIONS = ['jpg', 'png', 'jpeg', 'webp', 'JPG', 'PNG'];
  var tracked = []; // {el, basePath, baseName, size} — variant-loaded elements

  function neededSize(el) {
    var cssW = el.getBoundingClientRect().width || 240;
    var phys = cssW * (window.devicePixelRatio || 1);
    for (var i = 0; i < SIZES.length; i++) {
      if (SIZES[i] >= phys - 1) return SIZES[i];
    }
    return SIZES[SIZES.length - 1];
  }

  function setPhoto(el, url) {
    el.style.backgroundImage = "url('" + url + "')";
    el.classList.add('has-photo');
  }

  function loadLegacy(el, basePath, baseName) {
    var i = 0;
    (function tryNext() {
      if (i >= EXTENSIONS.length) return; // give up; placeholder remains
      var url = basePath + '/' + baseName + '.' + EXTENSIONS[i];
      var img = new Image();
      img.onload = function () { setPhoto(el, url); };
      img.onerror = function () { i++; tryNext(); };
      img.src = url;
    })();
  }

  function loadPhoto(el) {
    var baseName = el.dataset.photo;
    if (!baseName) return;
    var basePath = el.dataset.photoPath || 'assets/images/members';

    var size = neededSize(el);
    var url = basePath + '/' + baseName + '-' + size + '.jpg';
    var img = new Image();
    img.onload = function () {
      setPhoto(el, url);
      tracked.push({ el: el, basePath: basePath, baseName: baseName, size: size });
    };
    img.onerror = function () { loadLegacy(el, basePath, baseName); };
    img.src = url;
  }

  // On zoom / layout growth, upgrade to a larger variant if needed.
  var resizeTimer = null;
  window.addEventListener('resize', function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
      for (var t = 0; t < tracked.length; t++) {
        var rec = tracked[t];
        var ns = neededSize(rec.el);
        if (ns > rec.size) {
          (function (rec, ns) {
            var url = rec.basePath + '/' + rec.baseName + '-' + ns + '.jpg';
            var img = new Image();
            img.onload = function () { setPhoto(rec.el, url); rec.size = ns; };
            img.src = url;
          })(rec, ns);
        }
      }
    }, 200);
  });

  function init() {
    var nodes = document.querySelectorAll('[data-photo]');
    for (var n = 0; n < nodes.length; n++) {
      loadPhoto(nodes[n]);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
