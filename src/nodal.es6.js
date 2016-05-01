var isDisplayNone = el => { return window.getComputedStyle(el)['display'] === 'none'; }
var isZIndexAuto = el => { return getZIndex(el) === 'auto'; }
var isNotWideEnough =  el => { return el.offsetHeight < window.innerHeight * 0.1; }
var isScriptTag = el => { return el.tagName.toLowerCase() === "script"; }
var getZIndex = el => { return window.getComputedStyle(el)['z-index']; }

var main = () => {
  var els = document.body.getElementsByTagName('*');
  //var max = {'z-index': -1, 'el': null};
  var overlays = [];

  for (var i = els.length; i--;) {
    var el = els[i];
    var styles = window.getComputedStyle(el);
    var zIndex = styles['z-index'];

    if(isDisplayNone(el) || isZIndexAuto(el) || isNotWideEnough(el) || isScriptTag(el)) {
      continue;
    }

    if(el.offsetHeight === window.innerHeight &&
       el.offsetWidth === window.innerWidth) {
      overlays.push(el);
    }

    //if(zIndex > max['z-index']) {
    //  max['z-index'] = zIndex;
    //  max['el'] = el;
    //}
  }

  for(var overlay of overlays) {
    //console.log(overlay)
    overlay.remove();
  }

  document.body.style.overflow = "scroll";
  //console.log(isDisplayNone(max['el']), isZIndexAuto(max['el']), isNotWideEnough(max['el']));
};


var keys = [];
window.addEventListener("keydown", function(e) {
  keys[e.keyCode] = true;

  if (keys[91] && keys[69])
    main();

}, false);

window.addEventListener("keyup", function(e) { keys[e.keyCode] = false; }, false);
