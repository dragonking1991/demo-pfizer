/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-polyfill */ "./node_modules/babel-polyfill/lib/index.js");
/* harmony import */ var babel_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! normalize-css */ "./node_modules/normalize-css/index.js");
/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(normalize_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _libs_Factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./libs/Factory */ "./src/assets/js/libs/Factory.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }



// import './libs/Logger'
// import './libs/BrowserSyncAction'
var moduleElements = _toConsumableArray(document.querySelectorAll('[data-module]'));
window.factory = _libs_Factory__WEBPACK_IMPORTED_MODULE_2__["default"];
document.addEventListener('DOMContentLoaded', function () {
  _libs_Factory__WEBPACK_IMPORTED_MODULE_2__["default"].registerModules(moduleElements);
  var observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (m) {
      var rawElements = [m.target].concat(_toConsumableArray(m.addedNodes));
      var modifyElements = [];
      rawElements.forEach(function (e) {
        if (e.querySelectorAll) {
          modifyElements = [].concat(_toConsumableArray(modifyElements), _toConsumableArray(e.querySelectorAll('[data-module]')));
        }
      });
      var elements = [].concat(_toConsumableArray(rawElements), _toConsumableArray(modifyElements)).filter(function (e) {
        return e.getAttribute && e.getAttribute('data-module') && !e.modules;
      });
      _libs_Factory__WEBPACK_IMPORTED_MODULE_2__["default"].registerModules(elements);
    });
  });
  observer.observe(document, {
    subtree: true,
    childList: true
  });
});

/***/ }),

/***/ "./src/assets/js/libs/EasingFunctions.js":
/*!***********************************************!*\
  !*** ./src/assets/js/libs/EasingFunctions.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EasingFunctions": function() { return /* binding */ EasingFunctions; },
/* harmony export */   "getEaseValue": function() { return /* binding */ getEaseValue; }
/* harmony export */ });
/*
 * Easing Functions - inspired from http://gizma.com/easing/
 * only considering the t value for the range [0, 1] => [0, 1]
 */
var EasingFunctions = {
  // no easing, no acceleration
  linear: function linear(t) {
    return t;
  },
  // accelerating from zero velocity
  easeInQuad: function easeInQuad(t) {
    return t * t;
  },
  // decelerating to zero velocity
  easeOutQuad: function easeOutQuad(t) {
    return t * (2 - t);
  },
  // acceleration until halfway, then deceleration
  easeInOutQuad: function easeInOutQuad(t) {
    return t < .5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  },
  // accelerating from zero velocity 
  easeInCubic: function easeInCubic(t) {
    return t * t * t;
  },
  // decelerating to zero velocity 
  easeOutCubic: function easeOutCubic(t) {
    return --t * t * t + 1;
  },
  // acceleration until halfway, then deceleration 
  easeInOutCubic: function easeInOutCubic(t) {
    return t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
  },
  // accelerating from zero velocity 
  easeInQuart: function easeInQuart(t) {
    return t * t * t * t;
  },
  // decelerating to zero velocity 
  easeOutQuart: function easeOutQuart(t) {
    return 1 - --t * t * t * t;
  },
  // acceleration until halfway, then deceleration
  easeInOutQuart: function easeInOutQuart(t) {
    return t < .5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;
  },
  // accelerating from zero velocity
  easeInQuint: function easeInQuint(t) {
    return t * t * t * t * t;
  },
  // decelerating to zero velocity
  easeOutQuint: function easeOutQuint(t) {
    return 1 + --t * t * t * t * t;
  },
  // acceleration until halfway, then deceleration 
  easeInOutQuint: function easeInOutQuint(t) {
    return t < .5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t;
  }
};
var getEaseValue = function getEaseValue(time, from, to, duration) {
  var fn = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'easeInOutQuad';
  console.log(fn);
  var easeFn = EasingFunctions[fn] || EasingFunctions['easeInOutQuad'];
  return easeFn(time / duration) * (to - from) + from;
};

/***/ }),

/***/ "./src/assets/js/libs/Factory.js":
/*!***************************************!*\
  !*** ./src/assets/js/libs/Factory.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Factory = /*#__PURE__*/function () {
  function Factory() {
    _classCallCheck(this, Factory);
    this.modules = {};
    this.names = {};
    this.elements = new WeakMap();
  }
  _createClass(Factory, [{
    key: "registerModules",
    value: function registerModules(elements) {
      var _this = this;
      elements.forEach(function (el) {
        if (el.modules) return;
        var modules = el.getAttribute('data-module') ? el.getAttribute('data-module').split(/(\s|,)/g).filter(function (s) {
          return s.trim().length && !s.includes(',');
        }) : [];
        modules.forEach(function (m) {
          _this.addModule(new (__webpack_require__("./src/assets/js/modules sync recursive ^\\.\\/.*$")("./".concat(m))["default"])(el, m));
        });
      });
    }
  }, {
    key: "addModule",
    value: function addModule(m) {
      this.modules[m.id] = m;
      if (!this.names[m.name]) {
        this.names[m.name] = [];
      }
      this.names[m.name].push(m);
      if (!this.elements.has(m.el)) {
        var newModule = _defineProperty({}, m.name, m);
        this.elements.set(m.el, newModule);
        return m;
      }
      var eleModules = this.elements.get(m.el);
      return eleModules[m.name] = m;
    }
  }, {
    key: "getModuleById",
    value: function getModuleById(id) {
      return this.modules[id];
    }
  }, {
    key: "getModulesByEl",
    value: function getModulesByEl(el) {
      return this.elements.get(el);
    }
  }, {
    key: "getModulesByName",
    value: function getModulesByName(name) {
      return this.names[name];
    }
  }]);
  return Factory;
}();
/* harmony default export */ __webpack_exports__["default"] = (new Factory());

/***/ }),

/***/ "./src/assets/js/libs/Helper.js":
/*!**************************************!*\
  !*** ./src/assets/js/libs/Helper.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$helper": function() { return /* binding */ $helper; },
/* harmony export */   "constifyProp": function() { return /* binding */ constifyProp; },
/* harmony export */   "deThrottler": function() { return /* binding */ deThrottler; },
/* harmony export */   "default": function() { return /* binding */ Helper; },
/* harmony export */   "getQueryValue": function() { return /* binding */ getQueryValue; },
/* harmony export */   "visibilityChangeDetect": function() { return /* binding */ visibilityChangeDetect; }
/* harmony export */ });
/* harmony import */ var _EasingFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EasingFunctions */ "./src/assets/js/libs/EasingFunctions.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var Helper = /*#__PURE__*/function () {
  function Helper(el) {
    _classCallCheck(this, Helper);
    this.el = el;
    this.subscribers = {};
    this.state = {};
  }
  _createClass(Helper, [{
    key: "subscribe",
    value: function subscribe(event, callback) {
      if (!this.subscribers[event]) {
        this.subscribers[event] = [];
      }
      this.subscribers[event].push(callback);
    }
  }, {
    key: "publish",
    value: function publish(event, data) {
      if (!this.subscribers[event]) return;
      this.subscribers[event].forEach(function (subscriberCallback) {
        return subscriberCallback(data);
      });
    }

    // detect available wheel event
  }, {
    key: "getWheelEvent",
    value: function getWheelEvent(el) {
      if ('onwheel' in el) {
        // spec event type
        return 'wheel';
      } else if (el.onmousewheel !== undefined) {
        // legacy event type
        return 'mousewheel';
      } else {
        // older Firefox
        return 'DOMMouseScroll';
      }
    }
  }, {
    key: "easeInOutQuart",
    value: function easeInOutQuart(t, b, c, d) {
      if (t > d) return b + c;
      if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
      return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
    }
  }, {
    key: "getOffset",
    value: function getOffset(el) {
      var rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return {
        top: rect.top + scrollTop,
        left: rect.left + scrollLeft
      };
    }
  }, {
    key: "getScreenHeight",
    value: function getScreenHeight() {
      var div = document.createElement("div");
      div.style.opacity = 0;
      div.style.pointerEvents = "none";
      div.style.position = "fixed";
      div.style.top = 0;
      div.style.height = "100%";
      div.style.width = "100%";
      document.body.appendChild(div);
      var height = window.getComputedStyle(div).height;
      div.remove();
      return height;
    }
  }, {
    key: "getSiblings",
    value: function getSiblings(el) {
      // for collecting siblings
      var siblings = [];
      // if no parent, return no sibling
      if (!el.parentNode) {
        return siblings;
      }
      // first child of the parent node
      var sibling = el.parentNode.firstChild;

      // collecting siblings
      while (sibling) {
        if (sibling.nodeType === 1 && sibling !== el) {
          siblings.push(sibling);
        }
        sibling = sibling.nextSibling;
      }
      return siblings;
    }
  }, {
    key: "isMobile",
    value: function isMobile() {
      return /Mobi|Android/i.test(navigator.userAgent);
    }
  }, {
    key: "detectBrowser",
    value: function detectBrowser() {
      // Opera 8.0+
      // const isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0

      // Firefox 1.0+
      var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;

      // Safari 3.0+ "[object HTMLElementConstructor]"
      // const isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification))

      // Internet Explorer 6-11
      // const isIE = /*@cc_on!@*/false || !!document.documentMode

      // Edge 20+
      // const isEdge = !isIE && !!window.StyleMedia

      // Chrome 1 - 79
      // const isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime)

      // Edge (based on chromium) detection
      // const isEdgeChromium = isChrome && (navigator.userAgent.indexOf("Edg") != -1)

      // Blink engine detection
      // const isBlink = (isChrome || isOpera) && !!window.CSS

      return {
        // isOpera,
        isFirefox: isFirefox
        // isSafari,
        // isIE,
        // isEdge,
        // isChrome,
        // isEdgeChromium,
        // isBlink
      };
    }
  }, {
    key: "scrollTo",
    value: function scrollTo(top) {
      var _this = this;
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var defaultOptions = {
        duration: 400,
        offset: 0
      };
      options = _objectSpread(_objectSpread({}, defaultOptions), options);
      var to = top + options.offset;
      var from = window.pageYOffset || document.documentElement.scrollTop;
      var startTime = new Date().getTime();
      clearInterval(this.scrollTimer);
      this.scrollTimer = setInterval(function () {
        var time = new Date().getTime() - startTime;
        var step = (0,_EasingFunctions__WEBPACK_IMPORTED_MODULE_0__.getEaseValue)(time, from, to, options.duration);
        window.scrollTo(0, step);
        if (time >= options.duration) {
          window.scrollTo(0, to);
          clearInterval(_this.scrollTimer);
          options.onComplete && typeof options.onComplete == "function" && options.onComplete();
        }
      }, 1000 / 60);
    }
  }, {
    key: "scrollToEl",
    value: function scrollToEl(el) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      if (!el) return;
      var to = this.getOffset(el).top;
      this.scrollTo(to, options);
    }
  }]);
  return Helper;
}();

var constifyProp = function constifyProp(obj, prop, value) {
  return Object.defineProperty(obj, prop, {
    value: value,
    writable: false
  });
};
var visibilityChangeDetect = function visibilityChangeDetect(callback) {
  var hidden = "hidden";

  // Standards:
  if (hidden in document) document.addEventListener("visibilitychange", callback);else if ((hidden = "mozHidden") in document) document.addEventListener("mozvisibilitychange", callback);else if ((hidden = "webkitHidden") in document) document.addEventListener("webkitvisibilitychange", callback);else if ((hidden = "msHidden") in document) document.addEventListener("msvisibilitychange", callback);
  // All others:
  else window.onpageshow = window.onpagehide = window.onfocus = window.onblur = callback;
};
var deThrottler = function deThrottler(options) {
  var delay = options.delay || 200;
  var nextValid = Date.now() + delay;
  var callback = 0;
  var func = function func(e) {
    clearTimeout(callback);
    var timeStamp = Date.now();
    if (timeStamp > nextValid) {
      options.callback(e);
      nextValid = timeStamp + delay;
      return;
    }
    callback = setTimeout(function () {
      if (!options.skipLastCall) {
        options.callback(e);
      }
    }, delay);
  };
  (options.target || window).addEventListener(options.event, func);
  return func;
};
var getQueryValue = function () {
  var QUERY_STRING = {};
  var params = window.location.search.split('?')[1];
  if (params) {
    params.split(/&(?!amp;)/g).forEach(function (param) {
      var query = param.split('=');
      QUERY_STRING[query[0]] = query[1];
    });
  }
  return function (name) {
    return QUERY_STRING[name];
  };
}();
var $helper = new Helper();


/***/ }),

/***/ "./src/assets/js/libs/ModuleState.js":
/*!*******************************************!*\
  !*** ./src/assets/js/libs/ModuleState.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var storage = {};
var refState = function refState(name, initValue) {
  if (!storage[name]) {
    var subs = [];
    var currentValue = initValue;
    storage[name] = {
      get: function get() {
        return currentValue;
      },
      set: function set(value) {
        if (value !== currentValue) {
          currentValue = value;
          subs.forEach(function (s) {
            return s(currentValue);
          });
          return [].concat(subs);
        }
        return false;
      },
      onChange: function onChange(sub) {
        return subs.push(sub);
      }
    };
  }
  return storage[name];
};
/* harmony default export */ __webpack_exports__["default"] = (refState);

/***/ }),

/***/ "./src/assets/js/libs/Observer.js":
/*!****************************************!*\
  !*** ./src/assets/js/libs/Observer.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "invoker": function() { return /* binding */ invoker; }
/* harmony export */ });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Subscriber */ "./src/assets/js/libs/Subscriber.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var pool = {};
var Observer = function Observer() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'eventName.ModuleName.ModuleId';
  var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (value) {
    return value;
  };
  var _name$split = name.split(/\./g),
    _name$split2 = _slicedToArray(_name$split, 3),
    eventName = _name$split2[0],
    moduleName = _name$split2[1],
    moduleId = _name$split2[2];
  var sub = new _Subscriber__WEBPACK_IMPORTED_MODULE_0__["default"](eventName, callback, name);
  var returnObject = {
    disconnect: function disconnect() {
      var _pool$eventName, _pool$eventName$defau, _pool$eventName2, _pool$eventName2$modu, _pool$eventName2$modu2, _pool$eventName3, _pool$eventName3$modu, _pool$eventName3$modu2;
      var index = (_pool$eventName = pool[eventName]) === null || _pool$eventName === void 0 ? void 0 : (_pool$eventName$defau = _pool$eventName["default"]) === null || _pool$eventName$defau === void 0 ? void 0 : _pool$eventName$defau.findIndex(function (s) {
        return s === sub;
      });
      if (index > -1) {
        pool[eventName]["default"].splice(index, 1);
        return;
      }
      index = (_pool$eventName2 = pool[eventName]) === null || _pool$eventName2 === void 0 ? void 0 : (_pool$eventName2$modu = _pool$eventName2[moduleName]) === null || _pool$eventName2$modu === void 0 ? void 0 : (_pool$eventName2$modu2 = _pool$eventName2$modu["default"]) === null || _pool$eventName2$modu2 === void 0 ? void 0 : _pool$eventName2$modu2.findIndex(function (s) {
        return s === sub;
      });
      if (index > -1) {
        pool[eventName][moduleName]["default"].splice(index, 1);
        return;
      }
      index = (_pool$eventName3 = pool[eventName]) === null || _pool$eventName3 === void 0 ? void 0 : (_pool$eventName3$modu = _pool$eventName3[moduleName]) === null || _pool$eventName3$modu === void 0 ? void 0 : (_pool$eventName3$modu2 = _pool$eventName3$modu[moduleId]) === null || _pool$eventName3$modu2 === void 0 ? void 0 : _pool$eventName3$modu2.findIndex(function (s) {
        return s === sub;
      });
      if (index > -1) {
        pool[eventName][moduleName][moduleId].splice(index, 1);
        return;
      }
    }
  };
  if (!pool[eventName]) {
    pool[eventName] = {
      "default": []
    };
  }
  var subject = pool[eventName];
  if (!moduleName) {
    subject["default"].push(sub);
    return returnObject;
  }
  if (!subject[moduleName]) {
    subject[moduleName] = {
      "default": []
    };
  }
  subject = subject[moduleName];
  subject["default"].push(sub);
  if (!moduleId) return returnObject;
  if (!subject[moduleId]) {
    subject[moduleId] = [];
  }
  subject[moduleId].push(sub);
  return returnObject;
};
var invoker = function invoker(name, data, publisher) {
  var _name$split3 = name.split(/\./g),
    _name$split4 = _slicedToArray(_name$split3, 3),
    eventName = _name$split4[0],
    moduleName = _name$split4[1],
    moduleId = _name$split4[2];
  var subject = pool[eventName] || {
    "default": []
  };
  var subs = _toConsumableArray(subject["default"]);
  if (!subject[moduleName]) {
    subs.forEach(function (sub) {
      return sub.invoke(data, publisher);
    });
    return;
  }
  subject = subject[moduleName];
  subs = [].concat(_toConsumableArray(subs), _toConsumableArray(subject["default"]));
  if (!subject[moduleId]) {
    subs.forEach(function (sub) {
      return sub.invoke(data, publisher);
    });
    return;
  }
  subject = subject[moduleId];
  subs = [].concat(_toConsumableArray(subs), _toConsumableArray(subject));
  subs.forEach(function (sub) {
    return sub.invoke(data, publisher);
  });
};
/* harmony default export */ __webpack_exports__["default"] = (Observer);


/***/ }),

/***/ "./src/assets/js/libs/Publisher.js":
/*!*****************************************!*\
  !*** ./src/assets/js/libs/Publisher.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Publisher; }
/* harmony export */ });
/* harmony import */ var _Observer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Observer */ "./src/assets/js/libs/Observer.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var Publisher = /*#__PURE__*/function () {
  function Publisher() {
    _classCallCheck(this, Publisher);
  }
  _createClass(Publisher, [{
    key: "publish",
    value: function publish(name, data) {
      (0,_Observer__WEBPACK_IMPORTED_MODULE_0__.invoker)("".concat(name, ".").concat(this.name, ".").concat(this.id), data, this);
    }
  }]);
  return Publisher;
}();


/***/ }),

/***/ "./src/assets/js/libs/RandomString.js":
/*!********************************************!*\
  !*** ./src/assets/js/libs/RandomString.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ random; }
/* harmony export */ });
var alphabet = 'QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm';
function random() {
  var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 16;
  var str = '';
  while (length) {
    length--;
    str += alphabet[~~(Math.random() * alphabet.length)];
  }
  return str;
}

/***/ }),

/***/ "./src/assets/js/libs/Subscriber.js":
/*!******************************************!*\
  !*** ./src/assets/js/libs/Subscriber.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Subscriber; }
/* harmony export */ });
/* harmony import */ var _RandomString__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RandomString */ "./src/assets/js/libs/RandomString.js");
/* harmony import */ var _ModuleState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ModuleState */ "./src/assets/js/libs/ModuleState.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


var Subscriber = /*#__PURE__*/function () {
  function Subscriber(name, action, refName) {
    var _this = this;
    _classCallCheck(this, Subscriber);
    this.name = name;
    this.action = action;
    this.id = (0,_RandomString__WEBPACK_IMPORTED_MODULE_0__["default"])();
    this.refState = (0,_ModuleState__WEBPACK_IMPORTED_MODULE_1__["default"])(refName);
    this.refState.onChange(function (value) {
      return _this.action && _this.action(value, _this.publisher);
    });
  }
  _createClass(Subscriber, [{
    key: "invoke",
    value: function invoke(data, publisher) {
      if (!this.publisher) {
        this.publisher = publisher;
      }
      if (publisher !== this.publisher) {
        console.warn('it seems this event is published from multiple publisher. ', this.publisher, publisher);
      }
      this.refState.set(data);
    }
  }]);
  return Subscriber;
}();


/***/ }),

/***/ "./src/assets/js/modules/BaseModule.js":
/*!*********************************************!*\
  !*** ./src/assets/js/modules/BaseModule.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ BaseModule; }
/* harmony export */ });
/* harmony import */ var _libs_RandomString__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../libs/RandomString */ "./src/assets/js/libs/RandomString.js");
/* harmony import */ var _libs_Publisher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../libs/Publisher */ "./src/assets/js/libs/Publisher.js");
/* harmony import */ var _libs_ModuleState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../libs/ModuleState */ "./src/assets/js/libs/ModuleState.js");
/* harmony import */ var _libs_Helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../libs/Helper */ "./src/assets/js/libs/Helper.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }




var setupInitAttr = function setupInitAttr(el, currentModule) {
  var name = currentModule.name.toLowerCase();
  var attrs = _toConsumableArray(el.attributes);
  attrs.map(function (a) {
    return [a.name, a.value];
  }).filter(function (a) {
    return a[0].includes(name);
  }).forEach(function (a) {
    var aName = a[0].split("".concat(name, "-")).pop();
    (0,_libs_ModuleState__WEBPACK_IMPORTED_MODULE_2__["default"])("".concat(currentModule.id, "#").concat(aName), a[1]);
  });
  currentModule.data = function (name, value, subscribe) {
    var state = (0,_libs_ModuleState__WEBPACK_IMPORTED_MODULE_2__["default"])("".concat(currentModule.id, "#").concat(name));
    if (subscribe) state.onChange(subscribe);
    if (value) state.set(value);
    return state.get();
  };
  (0,_libs_Helper__WEBPACK_IMPORTED_MODULE_3__.constifyProp)(currentModule, 'data', currentModule.data);
};
var BaseModule = /*#__PURE__*/function (_Publisher) {
  _inherits(BaseModule, _Publisher);
  var _super = _createSuper(BaseModule);
  function BaseModule() {
    var _this;
    _classCallCheck(this, BaseModule);
    _this = _super.call(this);
    var _arguments = Array.prototype.slice.call(arguments),
      el = _arguments[0],
      name = _arguments[1];
    _this.id = (0,_libs_RandomString__WEBPACK_IMPORTED_MODULE_0__["default"])();
    _this.name = name;
    _this.el = el;
    _this.el.modules = _this.el.modules || {};
    _this.el.modules[_this.name] = _this.id;
    (0,_libs_Helper__WEBPACK_IMPORTED_MODULE_3__.constifyProp)(_assertThisInitialized(_this), 'id', _this.id);
    (0,_libs_Helper__WEBPACK_IMPORTED_MODULE_3__.constifyProp)(_assertThisInitialized(_this), 'name', _this.name);
    (0,_libs_Helper__WEBPACK_IMPORTED_MODULE_3__.constifyProp)(_assertThisInitialized(_this), 'el', _this.el);
    setupInitAttr(_this.el, _assertThisInitialized(_this));
    if (_this.register) {
      _this.register();
      (0,_libs_Helper__WEBPACK_IMPORTED_MODULE_3__.constifyProp)(_assertThisInitialized(_this), 'register');
    }
    return _this;
  }
  return _createClass(BaseModule);
}(_libs_Publisher__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ }),

/***/ "./src/assets/js/modules/DisplayLeaderBoard.js":
/*!*****************************************************!*\
  !*** ./src/assets/js/modules/DisplayLeaderBoard.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ DisplayLeaderBoard; }
/* harmony export */ });
/* harmony import */ var _BaseModule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseModule */ "./src/assets/js/modules/BaseModule.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


var DisplayLeaderBoard = /*#__PURE__*/function (_BaseModule) {
  _inherits(DisplayLeaderBoard, _BaseModule);
  var _super = _createSuper(DisplayLeaderBoard);
  function DisplayLeaderBoard() {
    _classCallCheck(this, DisplayLeaderBoard);
    return _super.apply(this, arguments);
  }
  _createClass(DisplayLeaderBoard, [{
    key: "register",
    value: function register() {
      var _this = this;
      var refreshTime = ~~this.el.getAttribute('data-refresh-api') || 10000;
      // console.log('refresh API', refreshTime);
      this.callAPI();
      setInterval(function () {
        _this.callAPI();
      }, refreshTime);
    }
  }, {
    key: "callAPI",
    value: function () {
      var _callAPI = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_1___default()({
                url: 'https://us-central1-test-c1a7a.cloudfunctions.net/api/v1/leaderboard/0EejNWFdxllT92ZWmByW?top=10',
                method: 'GET',
                headers: {
                  "x-api-key": "2GB3VQI-KLQUVKI-QKXS67Q-KIKL55Q"
                }
              }).then(function (result) {
                var users = result.data.users;
                var sortedUsers = users.sort(function (a, b) {
                  return b.score - a.score;
                });
                var listHtml = '';
                sortedUsers.forEach(function (user, idx) {
                  if (idx < 10) {
                    listHtml += " <li>\n                <div><span class=\"number\">".concat(idx + 1, "</span></div>\n                <div class=\"inner\">\n                  <div><span>").concat(user.username, "</span></div>\n                  <div class=\"country\"><span>").concat(user.country || '-', "</span></div>\n                  <div class=\"speciality\"><span>").concat(user.speciality || '-', "</span></div>\n                  <div><span>").concat(user.score, "</span></div>\n                </div>\n              </li>");
                  }
                });
                document.querySelectorAll('.leaderboard__list').forEach(function (list) {
                  list.innerHTML = listHtml;
                });
              })["catch"](function (error) {
                console.log(error);
              });
            case 3:
              _context.next = 8;
              break;
            case 5:
              _context.prev = 5;
              _context.t0 = _context["catch"](0);
              console.log(_context.t0);
            case 8:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[0, 5]]);
      }));
      function callAPI() {
        return _callAPI.apply(this, arguments);
      }
      return callAPI;
    }()
  }]);
  return DisplayLeaderBoard;
}(_BaseModule__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/assets/js/modules/HandleCache.js":
/*!**********************************************!*\
  !*** ./src/assets/js/modules/HandleCache.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ HandleCache; }
/* harmony export */ });
/* harmony import */ var _BaseModule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseModule */ "./src/assets/js/modules/BaseModule.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var HandleCache = /*#__PURE__*/function (_BaseModule) {
  _inherits(HandleCache, _BaseModule);
  var _super = _createSuper(HandleCache);
  function HandleCache() {
    _classCallCheck(this, HandleCache);
    return _super.apply(this, arguments);
  }
  _createClass(HandleCache, [{
    key: "register",
    value: function register() {
      var _this = this;
      var videos = document.querySelectorAll('video source');
      videos.forEach(function (video) {
        fetch(video.src).then( /*#__PURE__*/function () {
          var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(response) {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  console.log('fetch response', response);
                  if (!response.ok) {
                    _context.next = 5;
                    break;
                  }
                  _context.next = 4;
                  return _this.addCache(response.url);
                case 4:
                  _this.checkVideoCache(response.url).then(function (isCached) {
                    if (isCached) {
                      console.log('Video is cached', response.url);
                      _this.setUnlimitCache(response.url);
                    } else {
                      console.log('Video is not cached', response.url);
                    }
                  })["catch"](function (error) {
                    console.error('Error checking video cache:', error, response.url);
                  });
                case 5:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          }));
          return function (_x) {
            return _ref.apply(this, arguments);
          };
        }());
      });
    }
  }, {
    key: "addCache",
    value: function addCache(url) {
      return caches.open('my-cache').then(function (cache) {
        return cache.add(url);
      });
    }
  }, {
    key: "checkVideoCache",
    value: function checkVideoCache(url) {
      return caches.match(url).then(function (response) {
        if (response) {
          return true;
        } else {
          return false;
        }
      });
    }
  }, {
    key: "setUnlimitCache",
    value: function () {
      var _setUnlimitCache = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(url) {
        var cacheStorage, cacheStorageOptions;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return window.caches.open('my-cache');
            case 2:
              cacheStorage = _context2.sent;
              _context2.next = 5;
              return cacheStorage.match(url);
            case 5:
              cacheStorageOptions = _context2.sent;
              cacheStorageOptions.maxSize = 0;
              console.log('cacheStorageOptions', cacheStorageOptions);
              _context2.t0 = console;
              _context2.next = 11;
              return cacheStorage.match(url);
            case 11:
              _context2.t1 = _context2.sent;
              _context2.t0.log.call(_context2.t0, 'Cache storage size limit set to unlimited:', _context2.t1);
            case 13:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }));
      function setUnlimitCache(_x2) {
        return _setUnlimitCache.apply(this, arguments);
      }
      return setUnlimitCache;
    }()
  }]);
  return HandleCache;
}(_BaseModule__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/assets/js/modules/HandleShowTime.js":
/*!*************************************************!*\
  !*** ./src/assets/js/modules/HandleShowTime.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ HandleShowTime; }
/* harmony export */ });
/* harmony import */ var _BaseModule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseModule */ "./src/assets/js/modules/BaseModule.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var HandleShowTime = /*#__PURE__*/function (_BaseModule) {
  _inherits(HandleShowTime, _BaseModule);
  var _super = _createSuper(HandleShowTime);
  function HandleShowTime() {
    _classCallCheck(this, HandleShowTime);
    return _super.apply(this, arguments);
  }
  _createClass(HandleShowTime, [{
    key: "register",
    value: function register() {
      var _this$intro,
        _this$introVideo,
        _this$rwe,
        _this$rweVideo,
        _this = this;
      this.isInteracted = false;
      this.trackTimeout = 0;
      this.videoBg = document.querySelector('#video-bg');
      this.leader = this.el.querySelector('.slide');
      this.leaderTime = ~~this.leader.getAttribute('data-auto') || 120000;
      this.leaderLimit = ~~this.leader.getAttribute('data-limit') || 120000;
      this.intro = this.el.querySelector('.video-intro');
      this.introVideo = (_this$intro = this.intro) === null || _this$intro === void 0 ? void 0 : _this$intro.querySelector('video');
      this.introTime = ~~((_this$introVideo = this.introVideo) === null || _this$introVideo === void 0 ? void 0 : _this$introVideo.getAttribute('data-limit'));
      this.rwe = this.el.querySelector('.video-rwe');
      this.rweVideo = (_this$rwe = this.rwe) === null || _this$rwe === void 0 ? void 0 : _this$rwe.querySelector('video');
      this.rweTime = ~~((_this$rweVideo = this.rweVideo) === null || _this$rweVideo === void 0 ? void 0 : _this$rweVideo.getAttribute('data-limit'));
      var leaderboard = [{
        item: this.leader,
        time: this.leaderLimit
      }];
      var introSet = this.intro && [].concat(leaderboard, [{
        item: this.intro,
        time: this.introTime * 1000,
        video: this.introVideo
      }]) || leaderboard;
      var rweSet = this.rwe && [].concat(leaderboard, [{
        item: this.rwe,
        time: this.rweTime * 1000,
        video: this.rweVideo
      }]) || [];
      this.slides = [].concat(_toConsumableArray(introSet), _toConsumableArray(rweSet));
      this.idxCurrent = 0;

      // interact to start slide
      this.leader.addEventListener('click', function (e) {
        if (!_this.isInteracted) {
          _this.isInteracted = true;
          _this.leader.classList.add('leaderboard--update');
          _this.leader.removeAttribute('style');
          _this.playNextSlide();
          _this.videoBg.play();
        }
      });
    }
  }, {
    key: "playNextSlide",
    value: function playNextSlide() {
      this.handleSlideChanged();
      if (this.current.video) {
        this.handleCurrentVideo(this.current);
      } else {
        this.handleLeaderboard();
      }
    }
  }, {
    key: "handleSlideChanged",
    value: function handleSlideChanged() {
      var _prev$item, _this$current$item;
      // clear previous activity
      var prev = this.idxCurrent - 1 >= 0 ? this.slides[this.idxCurrent - 1] : this.slides[this.slides.length - 1];
      (_prev$item = prev.item) === null || _prev$item === void 0 ? void 0 : _prev$item.classList.remove('slide-active');

      // set current active
      this.current = this.slides[this.idxCurrent];
      (_this$current$item = this.current.item) === null || _this$current$item === void 0 ? void 0 : _this$current$item.classList.add('slide-active');
    }
  }, {
    key: "handleLeaderboard",
    value: function handleLeaderboard() {
      var _this2 = this;
      var leaderInterval = setInterval(function () {
        if (_this2.leader.classList.contains('leaderboard--update')) {
          _this2.leader.classList.remove('leaderboard--update');
        } else {
          _this2.leader.classList.add('leaderboard--update');
        }
      }, this.leaderTime);
      var leaderTimeout = setTimeout(function () {
        clearInterval(leaderInterval);
        clearTimeout(leaderTimeout);
        _this2.idxCurrent = (_this2.idxCurrent + 1) % _this2.slides.length;
        _this2.playNextSlide();
      }, this.leaderLimit);
    }
  }, {
    key: "handleCurrentVideo",
    value: function handleCurrentVideo(current) {
      var _this3 = this;
      var currentVideo = current.video;
      if (currentVideo) {
        this.addVideoEvent(current);
        currentVideo.muted = false;
        currentVideo.currentTime = 0;
        var promise = currentVideo.play();
        if (promise !== undefined) {
          promise.then(function () {
            _this3.isInteracted = true;
          })["catch"](function (error) {
            currentVideo.addEventListener('click', function (e) {
              _this3.isInteracted = true;
              currentVideo.play();
            });
          });
        }
      }
    }
  }, {
    key: "addVideoEvent",
    value: function addVideoEvent(current) {
      var _this4 = this;
      current.video.ontimeupdate = function () {
        _this4.handleTimeupdate(current);
      };
      current.video.onended = function () {
        _this4.handleVideoEnd(current);
      };
    }
  }, {
    key: "handleTimeupdate",
    value: function handleTimeupdate(current) {
      var currentVideo = current.video;
      var videoTimeLimit = current.time || current.video.duration * 1000;
      if (videoTimeLimit && ~~currentVideo.currentTime === ~~videoTimeLimit / 1000) {
        this.handleVideoEnd(current);
      }
      if (videoTimeLimit && ~~currentVideo.currentTime === ~~videoTimeLimit / 1000 - 2) {
        this.soundDown(current.video);
      }
    }
  }, {
    key: "handleVideoEnd",
    value: function handleVideoEnd(current) {
      var currentVideo = current.video;
      if (currentVideo) {
        currentVideo.pause();
        currentVideo.currentTime = 0;
        this.idxCurrent = (this.idxCurrent + 1) % this.slides.length;
        this.playNextSlide();
      }
    }
  }, {
    key: "soundDown",
    value: function soundDown(video) {
      var intervalSoundDown = setInterval(function () {
        if ((video === null || video === void 0 ? void 0 : video.volume) > 0.1) {
          video.volume -= 0.1;
        } else {
          clearInterval(intervalSoundDown);
        }
      }, 200);
      video.onpause = function () {
        clearInterval(intervalSoundDown);
        video.volume = 1;
      };
    }
  }]);
  return HandleShowTime;
}(_BaseModule__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/assets/js/modules/HelloModule.js":
/*!**********************************************!*\
  !*** ./src/assets/js/modules/HelloModule.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ HelloModule; }
/* harmony export */ });
/* harmony import */ var _BaseModule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseModule */ "./src/assets/js/modules/BaseModule.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var HelloModule = /*#__PURE__*/function (_BaseModule) {
  _inherits(HelloModule, _BaseModule);
  var _super = _createSuper(HelloModule);
  function HelloModule() {
    _classCallCheck(this, HelloModule);
    return _super.apply(this, arguments);
  }
  _createClass(HelloModule, [{
    key: "register",
    value: function register() {
      console.log(this);
    }
  }]);
  return HelloModule;
}(_BaseModule__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/assets/js/modules/Slider.js":
/*!*****************************************!*\
  !*** ./src/assets/js/modules/Slider.js ***!
  \*****************************************/
/***/ (function() {

// import BaseModule from './BaseModule'
// import Swiper, { Autoplay, EffectCoverflow } from 'swiper';
// import 'swiper/swiper.min.css'
// export default class Slider extends BaseModule {

//   register() {
//     Swiper.use([Autoplay, EffectCoverflow])
//     const autoSlide = ~~(this.el.getAttribute('data-autoslide')) || ''
//     const timeUpdateMain = ~~((autoSlide * 4) / 10)
//     console.log('autoSlide', autoSlide, timeUpdateMain);

//     this.slidechange = 0

//     this.swiper = new Swiper(this.el, {
//       slidesPerView: 1,
//       loop: true,
//       speed: 800,
//       effect: 'coverflow',
//       preloadVideos: true,
//       cache: true,
//       autoplay: {
//         delay: autoSlide || 10000,
//         disableOnInteraction: false,
//       },
//       on: {
//         init: (event) => {
//           const currentSlide = event.slides[event.activeIndex];
//           this.timeout && clearTimeout(this.timeout)
//           if (currentSlide.classList.contains('slide--main')) {
//             this.timeout = setTimeout(() => {
//               currentSlide.classList.add('leaderboard--update')
//             }, timeUpdateMain)
//           }
//         },
//       },
//     })

//     // this.swiper?.on('slideChangeTransitionEnd', (event) => {
//     //   const currentSlide = event.slides[event.activeIndex];
//     //   const currentVideo = currentSlide.querySelector('video');
//     //   const btnPlayVideo = currentSlide.querySelector('button');
//     //   btnPlayVideo?.classList.add('hidden')
//     //   currentVideo && this.handleCurrentVideo(currentVideo)
//     // })

//     this.swiper?.on('slideChange', (event) => {
//       const previousSlide = event.slides[event.previousIndex];
//       if (previousSlide?.classList.contains('slide--main')) {
//         previousSlide.classList.remove('leaderboard--update')
//       }

//       const previousVideo = previousSlide.querySelector('video');
//       if (previousVideo) {
//         previousVideo.pause();
//         previousVideo.currentTime = 0;
//       }

//       const currentSlide = event.slides[event.activeIndex];
//       // const currentVideo = currentSlide.querySelector('video');
//       // currentVideo && (currentVideo.currentTime = 0);

//       this.timeout && clearTimeout(this.timeout)
//       if (currentSlide.classList.contains('slide--main')) {
//         this.timeout = setTimeout(() => {
//           currentSlide.classList.add('leaderboard--update')
//         }, timeUpdateMain)
//       }
//     });
//   }

//   handleCurrentVideo(currentVideo) {
//     const videoTimeLimit = ~~(currentVideo?.getAttribute('data-time-limit')) || ''
//     const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

//     this.swiper.autoplay.stop();
//     this.isStopAutoplay = true
//     if (window.innerWidth > 1024 && !isMobile) {
//       currentVideo.muted = false;
//     }

//     const promise = currentVideo.play();
//     if (promise !== undefined) {
//       promise.then(() => {

//       }).catch(error => {
//         btnPlayVideo.classList.remove('hidden')
//         btnPlayVideo.addEventListener('click', (e) => {
//           currentVideo.play()
//           btnPlayVideo.classList.add('hidden')
//         });
//       });
//     }

//     currentVideo.addEventListener('pause', (e) => {
//       this.isStopAutoplay && this.swiper.autoplay.start()
//     });

//     currentVideo.addEventListener('ended', (e) => {
//       this.handleVideoEnd()
//     });

//     currentVideo.addEventListener('timeupdate', (e) => {
//       if (videoTimeLimit && currentVideo.currentTime >= videoTimeLimit) {
//         this.handleVideoEnd(currentVideo)
//       }
//     });
//   }

//   handleVideoEnd(video) {
//     if (document.fullscreenElement) {
//       document.exitFullscreen().then(() => {
//         this.swiper.slideNext();
//         this.swiper.autoplay.start();
//         if (video) {
//           video.pause();
//           video.currentTime = 0;
//         }
//       });
//     } else {
//       this.swiper.slideNext();
//       this.swiper.autoplay.start();
//       if (video) {
//         video.pause();
//         video.currentTime = 0;
//       }
//     }
//     this.isStopAutoplay = false
//   }
// }

/***/ }),

/***/ "./src/assets/js/modules/examples/RefState.js":
/*!****************************************************!*\
  !*** ./src/assets/js/modules/examples/RefState.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ RefState; }
/* harmony export */ });
/* harmony import */ var _BaseModule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../BaseModule */ "./src/assets/js/modules/BaseModule.js");
/* harmony import */ var _libs_ModuleState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../libs/ModuleState */ "./src/assets/js/libs/ModuleState.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


var RefState = /*#__PURE__*/function (_BaseModule) {
  _inherits(RefState, _BaseModule);
  var _super = _createSuper(RefState);
  function RefState() {
    _classCallCheck(this, RefState);
    return _super.apply(this, arguments);
  }
  _createClass(RefState, [{
    key: "register",
    value: function register() {
      console.log('RefState! ', this);
      //
      var myData = (0,_libs_ModuleState__WEBPACK_IMPORTED_MODULE_1__["default"])('myData', 'inited value');
      console.log(myData.get);
      myData.onChange(console.log);
      myData.set('changed value');
    }
  }]);
  return RefState;
}(_BaseModule__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/assets/js/modules sync recursive ^\\.\\/.*$":
/*!**********************************************!*\
  !*** ./src/assets/js/modules/ sync ^\.\/.*$ ***!
  \**********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./BaseModule": "./src/assets/js/modules/BaseModule.js",
	"./BaseModule.js": "./src/assets/js/modules/BaseModule.js",
	"./DisplayLeaderBoard": "./src/assets/js/modules/DisplayLeaderBoard.js",
	"./DisplayLeaderBoard.js": "./src/assets/js/modules/DisplayLeaderBoard.js",
	"./HandleCache": "./src/assets/js/modules/HandleCache.js",
	"./HandleCache.js": "./src/assets/js/modules/HandleCache.js",
	"./HandleShowTime": "./src/assets/js/modules/HandleShowTime.js",
	"./HandleShowTime.js": "./src/assets/js/modules/HandleShowTime.js",
	"./HelloModule": "./src/assets/js/modules/HelloModule.js",
	"./HelloModule.js": "./src/assets/js/modules/HelloModule.js",
	"./Slider": "./src/assets/js/modules/Slider.js",
	"./Slider.js": "./src/assets/js/modules/Slider.js",
	"./examples/RefState": "./src/assets/js/modules/examples/RefState.js",
	"./examples/RefState.js": "./src/assets/js/modules/examples/RefState.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/assets/js/modules sync recursive ^\\.\\/.*$";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkfe_starter_kit"] = self["webpackChunkfe_starter_kit"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor"], function() { return __webpack_require__("./src/assets/js/app.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=app.js.map