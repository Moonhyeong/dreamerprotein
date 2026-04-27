/* ============================================
   Member photo loader — automatic file extension detection.

   Usage in HTML:
     <div class="member-photo" data-photo="yun-lim">YL</div>
     <div class="pi-photo" data-photo="seo">MS</div>

   How it works:
   - For each element with [data-photo="basename"], the script tries
     several common image extensions in order and uses the first one
     that loads as the CSS background-image.
   - Optional override: data-photo-path="some/other/folder" (defaults
     to "assets/images/members").
   - When a photo is found, the element gets class "has-photo" — CSS
     uses this to hide the placeholder initials.
   - If no file is found, the original gradient + initials placeholder
     stays visible. No broken image is ever shown.
   ============================================ */

(function () {
  'use strict';

  // Extensions tried in order. Lowercase first since most modern setups
  // use lowercase, but uppercase is included for robustness.
  var EXTENSIONS = ['jpg', 'png', 'jpeg', 'webp', 'JPG', 'PNG'];

  function loadPhoto(el) {
    var baseName = el.dataset.photo;
    if (!baseName) return;

    var basePath = el.dataset.photoPath || 'assets/images/members';
    var i = 0;

    function tryNext() {
      if (i >= EXTENSIONS.length) return; // give up; placeholder remains
      var url = basePath + '/' + baseName + '.' + EXTENSIONS[i];
      var img = new Image();
      img.onload = function () {
        el.style.backgroundImage = "url('" + url + "')";
        el.classList.add('has-photo');
      };
      img.onerror = function () {
        i++;
        tryNext();
      };
      img.src = url;
    }

    tryNext();
  }

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
