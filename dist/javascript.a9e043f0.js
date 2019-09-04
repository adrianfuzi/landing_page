// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"styles/main.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"javascript/navbar.js":[function(require,module,exports) {
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  var stickyHeader = '.header__sticky';

  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    document.querySelector(stickyHeader).style.top = '0';
  } else {
    document.querySelector(stickyHeader).style.top = '-8rem';
  }
}
},{}],"javascript/hamburger.js":[function(require,module,exports) {
function hamburgerChange(change) {
  change.classList.toggle('hamburger__change');
}

document.querySelector('.hamburger').addEventListener('click', function () {
  hamburgerChange(this);
  document.querySelector('.hamburger-menu').classList.toggle('hamburger-menu-visible');
});
},{}],"javascript/smoothScroll.js":[function(require,module,exports) {
//Jump to top when the logo is clicked
$('#home').click(function (event) {
  event.preventDefault();
  $('html, body').animate({
    scrollTop: 0
  }, 0);
}); // Navbar scroll animation behavior

$(".h").click(function () {
  $('html, body').animate({
    scrollTop: $("#nav-home").offset().top - 100
  }, 400);
});
$(".f").click(function () {
  $('html, body').animate({
    scrollTop: $("#nav-features").offset().top - 95
  }, 400);
});
$('.p').click(function () {
  $('html, body').animate({
    scrollTop: $("#nav-pricing").offset().top - 95
  }, 400);
});
$('.c').click(function () {
  $('html, body').animate({
    scrollTop: $("#nav-company").offset().top - 135
  }, 400);
}); // Hamburger navigation scroll behavior

$(".burger-h").click(function () {
  $('html, body').animate({
    scrollTop: $("#nav-home").offset().top - 100
  }, 400);
});
$(".burger-f").click(function () {
  $('html, body').animate({
    scrollTop: $("#nav-features").offset().top - 15
  }, 400);
});
$('.burger-p').click(function () {
  $('html, body').animate({
    scrollTop: $("#nav-pricing").offset().top - 15
  }, 400);
});
$('.burger-c').click(function () {
  $('html, body').animate({
    scrollTop: $("#nav-company").offset().top - 15
  }, 400);
});
},{}],"javascript/animations.js":[function(require,module,exports) {
if ($(window).width() >= 1207) {
  TweenMax.from('.hero__box', 1, {
    x: -200,
    opacity: 0,
    ease: Power1.easeOut
  });
  TweenMax.from('.hero__img', 1, {
    y: 300,
    opacity: 0,
    ease: Power1.easeOut
  }).delay(.5);
  TweenMax.from('.hero__scroll', 1, {
    opacity: 0,
    ease: Power1.easeOut
  }).delay(1);
  var t1 = TweenMax.from(".features__title", 1, {
    opacity: 0,
    paused: true,
    ease: Power2.easeOut
  }),
      t1Scroll = {
    "start": 100,
    "stop": 400
  };
  var t2 = TweenMax.from(".features__description", 1, {
    opacity: 0,
    x: -200,
    paused: true,
    ease: Power2.easeOut
  }),
      t2Scroll = {
    "start": 400,
    "stop": 600
  };
  var t3 = TweenMax.from(".features__box", 1, {
    opacity: 0,
    paused: true,
    ease: Power2.easeOut
  }),
      t3Scroll = {
    "start": 600,
    "stop": 800
  };
  var t4 = TweenMax.from(".pricing__title", 1, {
    opacity: 0,
    x: -200,
    paused: true,
    ease: Power2.easeOut
  }),
      t4Scroll = {
    "start": 800,
    "stop": 1200
  };
  var t5 = TweenMax.from(".pricing__box", 1, {
    opacity: 0,
    y: 200,
    paused: true,
    ease: Power2.easeOut
  }),
      t5Scroll = {
    "start": 1200,
    "stop": 1500
  };
  var t6 = TweenMax.from(".company__img", 1, {
    opacity: 0,
    x: -200,
    paused: true,
    ease: Power2.easeOut
  }),
      t6Scroll = {
    "start": 1500,
    "stop": 2300
  };
  var t7 = TweenMax.from(".company__box", 1, {
    opacity: 0,
    paused: true,
    ease: Power2.easeOut
  }),
      t7Scroll = {
    "start": 1500,
    "stop": 2300
  };
  var t8 = TweenMax.from(".feedback__title", 1, {
    opacity: 0,
    x: -200,
    paused: true,
    ease: Power2.easeOut
  }),
      t8Scroll = {
    "start": 2300,
    "stop": 2500
  };
  var t9 = TweenMax.from(".feedback__box", 1, {
    opacity: 0,
    y: 100,
    paused: true,
    ease: Power2.easeOut
  }),
      t9Scroll = {
    "start": 2500,
    "stop": 2700
  }; // const t10 = TweenMax.from("#feedback-person-2", 1, {opacity:0, y: 200, paused:true, ease:Power2.easeOut}), t10Scroll = {"start": 2600, "stop": 2800};

  $(window).on("scroll", function () {
    var windowTop = $(window).scrollTop();
    var t1Current = windowTop,
        t1Progress = (t1Current - t1Scroll.start) / (t1Scroll.stop - t1Scroll.start);

    if (t1Current > t1Scroll.start && t1Current < t1Scroll.stop) {
      t1.progress(t1Progress);
    } else if (t1Current < t1Scroll.start) {
      t1.progress(0);
    } else if (t1Current < t1Scroll.stop) {
      t1.progress(1);
    }

    var t2Current = windowTop,
        t2Progress = (t2Current - t2Scroll.start) / (t2Scroll.stop - t2Scroll.start);

    if (t2Current > t2Scroll.start && t2Current < t2Scroll.stop) {
      t2.progress(t2Progress);
    } else if (t2Current < t2Scroll.start) {
      t2.progress(0);
    } else if (t2Current < t2Scroll.stop) {
      t2.progress(1);
    }

    var t3Current = windowTop,
        t3Progress = (t3Current - t3Scroll.start) / (t3Scroll.stop - t3Scroll.start);

    if (t3Current > t3Scroll.start && t3Current < t3Scroll.stop) {
      t3.progress(t3Progress);
    } else if (t3Current < t3Scroll.start) {
      t3.progress(0);
    } else if (t2Current < t3Scroll.stop) {
      t3.progress(1);
    }

    var t4Current = windowTop,
        t4Progress = (t4Current - t4Scroll.start) / (t4Scroll.stop - t4Scroll.start);

    if (t4Current > t4Scroll.start && t4Current < t4Scroll.stop) {
      t4.progress(t4Progress);
    } else if (t4Current < t4Scroll.start) {
      t4.progress(0);
    } else if (t4Current < t4Scroll.stop) {
      t4.progress(1);
    }

    var t5Current = windowTop,
        t5Progress = (t5Current - t5Scroll.start) / (t5Scroll.stop - t5Scroll.start);

    if (t5Current > t5Scroll.start && t5Current < t5Scroll.stop) {
      t5.progress(t5Progress);
    } else if (t5Current < t5Scroll.start) {
      t5.progress(0);
    } else if (t5Current < t5Scroll.stop) {
      t5.progress(1);
    }

    var t6Current = windowTop,
        t6Progress = (t6Current - t6Scroll.start) / (t6Scroll.stop - t6Scroll.start);

    if (t6Current > t6Scroll.start && t6Current < t6Scroll.stop) {
      t6.progress(t6Progress);
    } else if (t6Current < t6Scroll.start) {
      t6.progress(0);
    } else if (t6Current < t6Scroll.stop) {
      t6.progress(1);
    }

    var t7Current = windowTop,
        t7Progress = (t7Current - t7Scroll.start) / (t7Scroll.stop - t7Scroll.start);

    if (t7Current > t7Scroll.start && t7Current < t7Scroll.stop) {
      t7.progress(t7Progress);
    } else if (t7Current < t7Scroll.start) {
      t7.progress(0);
    } else if (t7Current < t7Scroll.stop) {
      t7.progress(1);
    }

    var t8Current = windowTop,
        t8Progress = (t8Current - t8Scroll.start) / (t8Scroll.stop - t8Scroll.start);

    if (t8Current > t8Scroll.start && t8Current < t8Scroll.stop) {
      t8.progress(t8Progress);
    } else if (t8Current < t8Scroll.start) {
      t8.progress(0);
    } else if (t8Current < t8Scroll.stop) {
      t8.progress(1);
    }

    var t9Current = windowTop,
        t9Progress = (t9Current - t9Scroll.start) / (t9Scroll.stop - t9Scroll.start);

    if (t9Current > t9Scroll.start && t9Current < t9Scroll.stop) {
      t9.progress(t9Progress);
    } else if (t9Current < t9Scroll.start) {
      t9.progress(0);
    } else if (t9Current < t9Scroll.stop) {
      t9.progress(1);
    } // const t10Current = windowTop, t10Progress = ( t10Current - t10Scroll.start ) / ( t10Scroll.stop - t10Scroll.start );
    // if(t10Current > t10Scroll.start && t10Current < t10Scroll.stop) {
    //     t10.progress(t10Progress);
    // } else if ( t10Current < t10Scroll.start ) {
    //     t10.progress(0);
    // } else if ( t10Current < t10Scroll.stop ) {
    //     t10.progress(1);
    // }

  });
} else {
  TweenMax.from('.hero__box--title', 1, {
    x: -200,
    opacity: 0,
    ease: Power1.easeOut
  });
  TweenMax.from('.hero__box--text', 1, {
    x: 200,
    opacity: 0,
    ease: Power1.easeOut
  });
  TweenMax.from('.hero__box--btn', 1, {
    opacity: 0,
    ease: Power1.easeOut
  });
  TweenMax.from('.hero__img', 1, {
    opacity: 0,
    scale: .5,
    ease: Power1.easeOut
  }).delay(.5);
}
},{}],"javascript/index.js":[function(require,module,exports) {
"use strict";

require("../styles/main.scss");

var _navbar = require("./navbar");

var _hamburger = require("./hamburger");

var _smoothScroll = require("./smoothScroll");

var _animations = require("./animations");
},{"../styles/main.scss":"styles/main.scss","./navbar":"javascript/navbar.js","./hamburger":"javascript/hamburger.js","./smoothScroll":"javascript/smoothScroll.js","./animations":"javascript/animations.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "55757" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","javascript/index.js"], null)
//# sourceMappingURL=/javascript.a9e043f0.js.map