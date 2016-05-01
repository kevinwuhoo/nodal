'use strict';

var isDisplayNone = function isDisplayNone(el) {
  return window.getComputedStyle(el)['display'] === 'none';
};
var isZIndexAuto = function isZIndexAuto(el) {
  return getZIndex(el) === 'auto';
};
var isNotWideEnough = function isNotWideEnough(el) {
  return el.offsetHeight < window.innerHeight * 0.1;
};
var isScriptTag = function isScriptTag(el) {
  return el.tagName.toLowerCase() === "script";
};
var getZIndex = function getZIndex(el) {
  return window.getComputedStyle(el)['z-index'];
};

var main = function main() {
  var els = document.body.getElementsByTagName('*');
  //var max = {'z-index': -1, 'el': null};
  var overlays = [];

  for (var i = els.length; i--;) {
    var el = els[i];
    var styles = window.getComputedStyle(el);
    var zIndex = styles['z-index'];

    if (isDisplayNone(el) || isZIndexAuto(el) || isNotWideEnough(el) || isScriptTag(el)) {
      continue;
    }

    if (el.offsetHeight === window.innerHeight && el.offsetWidth === window.innerWidth) {
      overlays.push(el);
    }

    //if(zIndex > max['z-index']) {
    //  max['z-index'] = zIndex;
    //  max['el'] = el;
    //}
  }

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = overlays[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var overlay = _step.value;

      //console.log(overlay)
      overlay.remove();
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  document.body.style.overflow = "scroll";
  //console.log(isDisplayNone(max['el']), isZIndexAuto(max['el']), isNotWideEnough(max['el']));
};

var keys = [];
window.addEventListener("keydown", function (e) {
  keys[e.keyCode] = true;

  if (keys[91] && keys[69]) main();
}, false);

window.addEventListener("keyup", function (e) {
  keys[e.keyCode] = false;
}, false);
