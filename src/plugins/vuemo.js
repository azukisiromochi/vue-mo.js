import mojs from "@mojs/core";

////////////// Methods

const Html = function(binding) {
  const extension = binding || {};

  /* eslint-disable no-unused-vars */
  const defaults = {
    // HTMLElement to animate. {String, Object} [selector, HTMLElement]
    el: null,
    // ∆ :: translateX property. {String, Number, Object} [value, delta]
    x: 0,
    // ∆ :: translateY property. {String, Number, Object} [value, delta]
    y: 0,
    // ∆ :: translateZ property. {String, Number, Object} [value, delta]
    z: 0,
    // ∆ :: skewX property. {String, Number, Object} [value, delta]
    skewX: 0,
    // ∆ :: skewY property. {String, Number, Object} [value, delta]
    skewY: 0,
    // ∆ :: rotateX property. {String, Number, Object} [value, delta]
    angleX: 0,
    // ∆ :: rotateY property. {String, Number, Object} [value, delta]
    angleY: 0,
    // ∆ :: rotateZ property. {String, Number, Object} [value, delta]
    angleZ: 0,
    // ∆ :: scale property. {String, Number, Object} [value, delta]
    scale: 1,
    // ∆ :: scaleX property. {String, Number, Object} [value, delta]
    scaleX: 1,
    // ∆ :: scaleY property. {String, Number, Object} [value, delta]
    scaleY: 1,
    // ∆ :: opacity property. {String, Number, Object} [value, delta]
    opacity: 1,

    /*
      For other CSS properties please see `Other CSS properties` section.
    */

    // Custom properties to alter mojs behaviour (see `Teach mojs with customProperties` section). {Object}
    customProperties: null,
    // If should be shown before animation starts. {Boolean}
    isShowStart: true,
    // If should stay shown after animation ends. {Boolean}
    isShowEnd: true,
    // If should trigger composite layer for the module. {Boolean}
    isForce3d: false,
    // If should hide module with `transforms` instead of `display`. {Boolean}
    isSoftHide: true,
    // If refresh state on subsequent plays. {Boolean}
    isRefreshState: true,
    // Context callbacks will be called with. {Object}
    // callbacksContext: this,

    /* TWEEN PROPERTIES */
    // Duration {Number}
    duration: 350,
    // Delay {Number}
    delay: 0,
    // If should repeat after animation finished {Number} *(1)
    repeat: 0,
    // Speed of the tween {Number}[0..∞]
    speed: 1,
    // If the progress should be flipped on repeat animation end {Boolean}
    isYoyo: false,
    // Easing function {String, Function}[ easing name, path coordinates, bezier string, easing function ]
    easing: "sin.out",
    // Easing function for backward direction of the tween animation (fallbacks to `easing`) {String, Function}[ easing name, path coordinates, bezier string, easing function ]
    backwardEasing: null,
    // properties fro entire timeline
    timeline: {
      /* (+) TIMELINE PROPERTIES AND CALLBACKS - see Tween API */
    },

    /* TWEEN CALLBACKS */
    /*
      Fires on every update of the tween in any period (including delay periods). You probably want to use `onUpdate` method instead.
      @param p {Number} Normal (not eased) progress.
      @param isForward {Boolean} Direction of the progress.
      @param isYoyo {Boolean} If in `yoyo` period.
    */
    onProgress(p, isForward, isYoyo) {},
    /*
      Fires when tween's the entire progress reaches `0` point(doesn't fire in repeat periods).
      @param isForward {Boolean} If progress moves in forward direction.
      @param isYoyo {Boolean} If progress inside `yoyo` flip period.
    */
    onStart(isForward, isYoyo) {},
    /*
      Fires when tween's the progress reaches `0` point in normal or repeat period.
      @param isForward {Boolean} If progress moves in forward direction.
      @param isYoyo {Boolean} If progress inside `yoyo` flip period.
    */
    onFirstUpdate(isForward, isYoyo) {},
    /*
      Fires on first update of the tween in sufficiently active period (excluding delay periods).
      @param ep {Number} Eased progress.
      @param p {Number} Normal (not eased) progress.
      @param isForward {Boolean} Direction of the progress.
      @param isYoyo {Boolean} If in `yoyo` period.
    */
    onUpdate(ep, p, isForward, isYoyo) {},
    /*
      Fires when tween's the progress reaches `1` point in normal or repeat period.
      @param isForward {Boolean} If progress moves in forward direction.
      @param isYoyo {Boolean} If progress inside `yoyo` flip period.
    */
    onRepeatComplete(isForward, isYoyo) {},
    /*
      Fires when tween's the entire progress reaches `1` point(doesn't fire in repeat periods).
      @param isForward {Boolean} If progress moves in forward direction.
      @param isYoyo {Boolean} If progress inside `yoyo` flip period.
    */
    onComplete(isForward, isYoyo) {},
    /* Fires when the `.play` method called and tween isn't in play state yet. */
    onPlaybackStart() {},
    /* Fires when the `.pause` method called and tween isn't in pause state yet. */
    onPlaybackPause() {},
    /* Fires when the `.stop` method called and tween isn't in stop state yet. */
    onPlaybackStop() {},
    /* Fires when the tween end's animation (regardless progress) */
    onPlaybackComplete() {}
  };
  /* eslint-enable no-unused-vars */

  return new mojs.Html({ ...defaults, ...extension });
};

// Doc: https://mojs.github.io/api/shape/
const Shape = function(binding) {
  const extension = binding || {};

  /* eslint-disable no-unused-vars */
  const defaults = {
    /* SHAPE PROPERTIES */

    // Parent of the module. {String, Object} [selector, HTMLElement]
    parent: document.body,

    // Class name. {String}
    className: "",

    // Shape name. {String} [ 'circle' | 'rect' | 'polygon' | 'line' | 'cross' | 'equal' | 'curve' | 'zigzag' | '*custom defined name*' ]
    shape: "circle",

    // ∆ :: Stroke color. {String} [color name, rgb, rgba, hex]
    stroke: "transparent",

    // ∆ :: Stroke Opacity. {Number} [ 0..1 ]
    strokeOpacity: 1,

    // Stroke Line Cap. {String} ['butt' | 'round' | 'square']
    strokeLinecap: "",

    // ∆ :: Stroke Width. {Number} [ number ]
    strokeWidth: 2,

    // ∆ , Units :: Stroke Dash Array. {String, Number}
    strokeDasharray: 0,

    // ∆ , Units :: Stroke Dash Offset. {String, Number}
    strokeDashoffset: 0,

    // ∆ :: Fill Color. {String} [color name, rgb, rgba, hex]
    fill: "deeppink",

    // ∆ :: Fill Opacity. {Number} [ 0..1 ]
    fillOpacity: 1,

    // ∆ , Units :: Left position of the module. {Number, String}
    left: "50%",

    // ∆ , Units :: Top position of the module. {Number, String}
    top: "50%",

    // ∆ , Units :: X shift. {Number, String}
    x: 0,

    // ∆ , Units :: Y shift. {Number, String}
    y: 0,

    // ∆ :: Angle. {Number, String}
    angle: 0,

    // ∆ :: Scale of the module. {Number}
    scale: 1,

    // ∆ :: Explicit scaleX value (fallbacks to `scale`). {Number}
    scaleX: null,

    // ∆ :: Explicit scaleX value (fallbacks to `scale`). {Number}
    scaleY: null,

    // ∆ , Unit :: Origin for `x`, `y`, `scale`, `rotate` properties. {String}
    origin: "50% 50%",

    // ∆ :: Opacity. {Number} [ 0..1 ]
    opacity: 1,

    // ∆ :: X border radius. {Number, String}
    rx: 0,

    // ∆ :: Y border radius. {Number, String}
    ry: 0,

    // ∆ :: Points count ( for polygon, zigzag, equal ). {Number, String}
    points: 3,

    // ∆ :: Radius of the shape. {Number, String}
    radius: 50,

    // ∆ :: Radius X of the shape (fallbacks to `radius`). {Number, String}
    radiusX: null,

    // ∆ :: Radius Y of the shape (fallbacks to `radius`). {Number, String}
    radiusY: null,

    // If should hide module with `transforms` instead of `display`. {Boolean}
    isSoftHide: true,

    // If should trigger composite layer for the module. {Boolean}
    isForce3d: false,

    // If should be shown before animation starts. {Boolean}
    isShowStart: false,

    // If should stay shown after animation ends. {Boolean}
    isShowEnd: true,

    // If refresh state on subsequent plays. {Boolean}
    isRefreshState: true,

    // Context callbacks will be called with. {Object}
    callbacksContext: this,

    /* TWEEN PROPERTIES */
    // Duration {Number}
    duration: 350,
    // Delay {Number}
    delay: 0,
    // If should repeat after animation finished {Number} *(1)
    repeat: 0,
    // Speed of the tween {Number}[0..∞]
    speed: 1,
    // If the progress should be flipped on repeat animation end {Boolean}
    isYoyo: false,
    // Easing function {String, Function}[ easing name, path coordinates, bezier string, easing function ]
    easing: "sin.out",
    // Easing function for backward direction of the tween animation (fallbacks to `easing`) {String, Function}[ easing name, path coordinates, bezier string, easing function ]
    backwardEasing: null,

    /* TWEEN CALLBACKS */
    /*
      Fires on every update of the tween in any period (including delay periods). You probably want to use `onUpdate` method instead.
      @param p {Number} Normal (not eased) progress.
      @param isForward {Boolean} Direction of the progress.
      @param isYoyo {Boolean} If in `yoyo` period.
    */
    onProgress(p, isForward, isYoyo) {},
    /*
      Fires when tween's the entire progress reaches `0` point(doesn't fire in repeat periods).
      @param isForward {Boolean} If progress moves in forward direction.
      @param isYoyo {Boolean} If progress inside `yoyo` flip period.
    */
    onStart(isForward, isYoyo) {},
    /*
      Fires when tween's the progress reaches `0` point in normal or repeat period.
      @param isForward {Boolean} If progress moves in forward direction.
      @param isYoyo {Boolean} If progress inside `yoyo` flip period.
    */
    onFirstUpdate(isForward, isYoyo) {},
    /*
      Fires on first update of the tween in sufficiently active period (excluding delay periods).
      @param ep {Number} Eased progress.
      @param p {Number} Normal (not eased) progress.
      @param isForward {Boolean} Direction of the progress.
      @param isYoyo {Boolean} If in `yoyo` period.
    */
    onUpdate(ep, p, isForward, isYoyo) {},
    /*
      Fires when tween's the progress reaches `1` point in normal or repeat period.
      @param isForward {Boolean} If progress moves in forward direction.
      @param isYoyo {Boolean} If progress inside `yoyo` flip period.
    */
    onRepeatComplete(isForward, isYoyo) {},
    /*
      Fires when tween's the entire progress reaches `1` point(doesn't fire in repeat periods).
      @param isForward {Boolean} If progress moves in forward direction.
      @param isYoyo {Boolean} If progress inside `yoyo` flip period.
    */
    onComplete(isForward, isYoyo) {},
    /* Fires when the `.play` method called and tween isn't in play state yet. */
    onPlaybackStart() {},
    /* Fires when the `.pause` method called and tween isn't in pause state yet. */
    onPlaybackPause() {},
    /* Fires when the `.stop` method called and tween isn't in stop state yet. */
    onPlaybackStop() {},
    /* Fires when the tween end's animation (regardless progress) */
    onPlaybackComplete() {}
  };
  /* eslint-enable no-unused-vars */

  return new mojs.Shape({ ...defaults, ...extension });
};

// Doc: https://mojs.github.io/api/shape-swirl/
const ShapeSwirl = function(binding) {
  const extension = binding || {};

  /* eslint-disable no-unused-vars */
  const defaults = {
    // ∆ :: Diviation size of sine. {Number}
    swirlSize: 10,

    // ∆ :: Frequency of sine. {Number}
    swirlFrequency: 3,

    // ∆ :: Sine length scale. {Number} [ 0..1 ]
    pathScale: 1,

    // ∆ :: Degree shift for sine path. {Number}
    degreeShift: 0,

    // [number: -1, 1] :: Directon of sine. {Number} [ -1, 1 ]
    direction: 1,

    // If shape should follow sinusoidal path. {Boolean}
    isSwirl: true

    /* (+) SHAPE PROPERTIES AND CALLBACKS - see Shape API */
  };
  /* eslint-enable no-unused-vars */

  return new mojs.ShapeSwirl({ ...defaults, ...extension });
};

// Doc: https://mojs.github.io/api/burst/
const Burst = function(binding) {
  const extension = binding || {};

  /* eslint-disable no-unused-vars */
  const defaults = {
    /* BURST PROPERTIES */

    // Parent of the module. {String, Object} [selector, HTMLElement]
    parent: document.body,

    // Class name. {String}
    className: "",

    // ∆ , Units :: Left position of the module. {Number, String}
    left: "50%",

    // ∆ , Units :: Top position of the module. {Number, String}
    top: "50%",

    // ∆ , Units :: X shift. {Number, String}
    x: 0,

    // ∆ , Units :: Y shift. {Number, String}
    y: 0,

    // ∆ :: Angle. {Number, String}
    angle: 0,

    // ∆ :: Scale of the module. {Number}
    scale: 1,

    // ∆ :: Explicit scaleX value (fallbacks to `scale`). {Number}
    scaleX: null,

    // ∆ :: Explicit scaleX value (fallbacks to `scale`). {Number}
    scaleY: null,

    // ∆ , Unit :: Origin for `x`, `y`, `scale`, `rotate` properties. {String}
    origin: "50% 50%",

    // ∆ :: Opacity. {Number} [ 0..1 ]
    opacity: 1,

    /*
      Radius of the radial shape that child particles form. Note that it has different meaning compared to shape-swirl. Burst `radius` defines radius of the children module
    */
    // radius: null,

    // Quantity of Burst particles. {Number} [ > 0 ]
    count: 5,

    // Degree of circlular shape that the particles form. {Number} [ > 0 ]
    degree: 360,

    // ∆ :: Radius of the Burst. {Number}
    radius: { 0: 50 },

    // ∆ :: Radius X of the Burst (fallbacks to `radius`). {Number}
    radiusX: null,

    // ∆ :: Radius Y of the Burst (fallbacks to `radius`). {Number}
    radiusY: null,

    // If should hide module with `transforms` instead of `display`. {Boolean}
    isSoftHide: true,

    // If should trigger composite layer for the module. {Boolean}
    isForce3d: false,

    // If should be shown before animation starts. {Boolean}
    isShowStart: false,

    // If should stay shown after animation ends. {Boolean}
    isShowEnd: true,

    // If refresh state on subsequent plays. {Boolean}
    isRefreshState: true,

    /*
      Options for each children ShapeSwirl element. {Object}
      Supports `Stagger` strings for numeric values and `Property Maps` overall.
      see `Stagger Strings` and `Property Maps` section for more info.
    */
    children: {
      /* (+) SHAPE SWIRL PROPERTIES AND CALLBACKS (excluding `x` and `y`) - see ShapeSwirl API */
    },

    // Options for timeline that controls all child and main Shape Swirls. {Object}
    timeline: {
      /* (+) TIMELINE PROPERTIES AND CALLBACKS - see Tween API */
    }
  };
  /* eslint-enable no-unused-vars */

  return new mojs.Burst({ ...defaults, ...extension });
};

// Doc: https://mojs.github.io/api/tweens/tween.html
const Tween = function(binding) {
  const extension = binding || {};

  /* eslint-disable no-unused-vars */
  const defaults = {
    /* PROPERTIES */

    // Duration {Number}
    duration: 350,
    // Delay {Number}
    delay: 0,
    // If should repeat after animation finished {Number} *(1)
    repeat: 0,
    // Speed of the tween {Number}[0..∞]
    speed: 1,
    // If the progress should be flipped on repeat animation end {Boolean}
    isYoyo: false,
    // Easing function {String, Function}[ easing name, path coordinates, bezier string, easing function ]
    easing: "sin.out",
    // Easing function for backward direction of the tween animation (fallbacks to `easing`) {String, Function}[ easing name, path coordinates, bezier string, easing function ]
    backwardEasing: null,

    /* CALLBACKS (in order of firing) */

    /*
      Fires on every when progress needs an update. For instance when tween was finished an remains in `1` progress state, and you will play it again - it will stay in the `1` state until first sufficient update after delay. So the `onRefresh` callback serves you to `refresh` the `1` state with `0` update.

      @param isBefore {Boolean} If `true` - the refresh is before start time.
    */
    onRefresh(p, isForward, isYoyo) {},

    /*
      Fires on every update of the tween in any period (including delay periods). You probably want to use `onUpdate` method instead.
      @param p {Number} Normal (not eased) progress.
      @param isForward {Boolean} Direction of the progress.
      @param isYoyo {Boolean} If in `yoyo` period.
    */
    onProgress(p, isForward, isYoyo) {},
    /*
      Fires when tween's the entire progress reaches `0` point(doesn't fire in repeat periods).
      @param isForward {Boolean} If progress moves in forward direction.
      @param isYoyo {Boolean} If progress inside `yoyo` flip period.
    */
    onStart(isForward, isYoyo) {},
    /*
      Fires when tween's the progress reaches `0` point in normal or repeat period.
      @param isForward {Boolean} If progress moves in forward direction.
      @param isYoyo {Boolean} If progress inside `yoyo` flip period.
    */
    onFirstUpdate(isForward, isYoyo) {},
    /*
      Fires on first update of the tween in sufficiently active period (excluding delay periods).
      @param ep {Number} Eased progress.
      @param p {Number} Normal (not eased) progress.
      @param isForward {Boolean} Direction of the progress.
      @param isYoyo {Boolean} If in `yoyo` period.
    */
    onUpdate(ep, p, isForward, isYoyo) {},
    /*
      Fires when tween's the progress reaches `1` point in normal or repeat period.
      @param isForward {Boolean} If progress moves in forward direction.
      @param isYoyo {Boolean} If progress inside `yoyo` flip period.
    */
    onRepeatComplete(isForward, isYoyo) {},
    /*
      Fires when tween's the entire progress reaches `1` point(doesn't fire in repeat periods).
      @param isForward {Boolean} If progress moves in forward direction.
      @param isYoyo {Boolean} If progress inside `yoyo` flip period.
    */
    onComplete(isForward, isYoyo) {},
    /* Fires when the `.play` method called and tween isn't in play state yet. */
    onPlaybackStart() {},
    /* Fires when the `.pause` method called and tween isn't in pause state yet. */
    onPlaybackPause() {},
    /* Fires when the `.stop` method called and tween isn't in stop state yet. */
    onPlaybackStop() {},
    /* Fires when the tween end's animation (regardless progress) */
    onPlaybackComplete() {}
  };
  /* eslint-enable no-unused-vars */

  return new mojs.Tween({ ...defaults, ...extension });
};

// Doc: https://mojs.github.io/api/tweens/timeline.html
const Timeline = function(binding) {
  const extension = binding || {};

  /* eslint-disable no-unused-vars */
  const defaults = {
    /* PROPERTIES */

    /* (+) TWEEN PROPERTIES AND CALLBACKS - see Tween API */

    /*
      Note: The timeline inherits all tween properties, callbacks and public methods excluding `duration` property. The `duration` property is computed automatically regarding children tweens and timelines.
    */
    duration: null
  };
  /* eslint-enable no-unused-vars */

  return new mojs.Timeline({ ...defaults, ...extension });
};

////////////// ⭐ Star ⭐

const RADIUS = 28;

class StarShape extends mojs.CustomShape {
  getShape() {
    return '<path d="M5.51132201,34.7776271 L33.703781,32.8220808 L44.4592855,6.74813038 C45.4370587,4.30369752 47.7185293,3 50,3 C52.2814707,3 54.5629413,4.30369752 55.5407145,6.74813038 L66.296219,32.8220808 L94.488678,34.7776271 C99.7034681,35.1035515 101.984939,41.7850013 97.910884,45.2072073 L75.9109883,63.1330483 L82.5924381,90.3477341 C83.407249,94.4217888 80.4739296,97.6810326 77.0517236,97.6810326 C76.0739505,97.6810326 74.9332151,97.3551083 73.955442,96.7032595 L49.8370378,81.8737002 L26.044558,96.7032595 C25.0667849,97.3551083 23.9260495,97.6810326 22.9482764,97.6810326 C19.3631082,97.6810326 16.2668266,94.4217888 17.4075619,90.3477341 L23.9260495,63.2960105 L2.08911601,45.2072073 C-1.98493875,41.7850013 0.296531918,35.1035515 5.51132201,34.7776271 Z" />';
  }
}
mojs.addShape("star", StarShape);

const Star = function(binding) {
  const extension = binding || {};

  /* eslint-disable no-unused-vars */
  const defaults = {
    /* PROPERTIES */

    /* (+) SHAPE PROPERTIES AND CALLBACKS - see Shape API */

    shape: "star",

    fill: "#FF9C00",

    scale: { 0: 1 },

    easing: "elastic.out",

    duration: 1600,

    delay: 300,

    radius: RADIUS / 2.25
  };
  /* eslint-enable no-unused-vars */

  return new mojs.Shape({ ...defaults, ...extension });
};

////////////// Directives

const MojsHtmlDirective = {
  bind: function(el, binding) {
    binding.value.el = el;

    const html = new mojs.Html(binding.value);
    html.play();

    el.addEventListener("click", function() {
      if (binding.arg === "is-replay-when-clicked") {
        html.replay();
      }
    });
  }
};

const MojsShapeDirective = {
  bind: function(el, binding) {
    binding.value.parent = el;

    const shape = new mojs.Shape(binding.value);
    shape.play();

    el.addEventListener("click", function() {
      if (binding.arg === "is-replay-when-clicked") {
        shape.replay();
      }
    });
  }
};

const MojsShapeSwirlDirective = {
  bind: function(el, binding) {
    binding.value.parent = el;

    const shapeSwirl = new mojs.ShapeSwirl(binding.value);
    shapeSwirl.play();

    el.addEventListener("click", function() {
      if (binding.arg === "is-replay-when-clicked") {
        shapeSwirl.replay();
      }
    });
  }
};

const MojsBurstDirective = {
  bind: function(el, binding) {
    binding.value.parent = el;

    const burst = new mojs.Burst(binding.value);

    // burst.el.style.zIndex = 10;
    el.style.position = "relative";

    el.addEventListener("click", function(e) {
      const left = e.pageX - el.offsetLeft;
      const top = e.pageY - el.offsetTop;
      burst.tune({ left, top }).replay();
    });
  }
};

const MojsStarDirective = {
  bind: function(el, binding) {
    binding.value.parent = el;

    const star = Star(binding.value);
    star.play();

    el.addEventListener("click", function() {
      if (binding.arg === "is-replay-when-clicked") {
        star.replay();
      }
    });
  }
};

/* eslint-disable no-unused-vars */
const Vuemo = {
  install: function(Vue, options) {
    Vue.prototype.$vuemo = {
      Html,
      Shape,
      ShapeSwirl,
      Burst,
      Star,
      Tween,
      Timeline,
      stagger: mojs.stagger
    };

    Vue.directive("mojs-html", MojsHtmlDirective);
    Vue.directive("mojs-shape", MojsShapeDirective);
    Vue.directive("mojs-shape-swirl", MojsShapeSwirlDirective);
    Vue.directive("mojs-burst", MojsBurstDirective);
    Vue.directive("mojs-star", MojsStarDirective);
  }
};
export default Vuemo;
