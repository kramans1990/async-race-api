/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/main.css":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/main.css ***!
  \************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_car1_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/car1.svg */ "./src/assets/car1.svg");
// Imports




var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_assets_car1_svg__WEBPACK_IMPORTED_MODULE_3__);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".logo {\r\n    background-color: red;\r\n    -webkit-mask: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat center;\r\n      mask: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat center;\r\n  }\r\n  .navigation-button\r\n  {\r\n    width: 150px;\r\n    height: 40px;\r\n   \r\n  }\r\n  button{\r\n    border-radius: 10px;\r\n    margin: 5px;\r\n    color: white;\r\n    font-size: large;\r\n    border-color: #66CCFF;\r\n    background-color: #66CCFF;\r\n  }\r\n  #race-button[disabled],\r\n  button[disabled],\r\n  button[disabled]:hover,\r\n  .navigation-button:disabled,\r\n  .navigation-button[disabled]{\r\n opacity: 0.5;\r\n color: white;\r\n \r\n \r\n}\r\n.animate{\r\n  display: block;\r\n  align-self: center;\r\n  justify-self:center;\r\n  margin-left: 30%;\r\n  font-size: xx-large;\r\n  color: red;\r\n  opacity: 0;\r\n  animation: blink 1s infinite;   \r\n}\r\n.hidden{\r\n  display: none;\r\n}\r\n\r\n@keyframes blink {\r\n  0%   {opacity: 0;}\r\n  25%  {opacity: 0.5;}\r\n  60%  {opacity: 0.75;}\r\n  90%  {opacity: 1;}\r\n  99%  {opacity: 0;}\r\n}\r\n  button:hover{\r\n    opacity: 0.8;\r\n    color: #333;\r\n  }\r\n  label{\r\n    font-size: large;\r\n    font-weight: 600;\r\n    color: #333;\r\n  }\r\n.start-button,\r\n.stop-button{\r\n  width: 40px;\r\n  height: 40px;\r\n  border-radius: 20px;\r\n}\r\n.start-button{\r\n  color: greenyellow;\r\n}\r\n.stop-button{\r\n  color: red;\r\n}\r\ninput{\r\n height: 25px;\r\n font-size: medium;\r\n}\r\n.div-car-set-flex{\r\n  display:flex;\r\n  align-content: center;\r\n  margin-bottom: 10px;\r\n}\r\n.application-button{\r\n  height: 26px;\r\n  font-size: medium;\r\n  width: 80px;\r\n  margin : 0px 5px 0px 5px;\r\n  \r\n}\r\n.application-text-input,\r\n .update-car-text{\r\n  bottom: 13px;\r\n  height: 20px;\r\n  border-radius: 5px;\r\n  margin-left: 5px;\r\n  margin-right: 5px;\r\n  \r\n}\r\n  svg{\r\n    width: 100px;\r\n    height: 60px;   \r\n  }\r\n  .svg-winner{\r\n    width: 50px;\r\n    height: 30px; \r\n  }\r\n  td,th{\r\n    width: 150px;   \r\n      border-bottom: 1px solid #ddd;  \r\n     \r\n  }\r\n  th{\r\n    cursor: pointer;  \r\n  }\r\n  td{\r\n    text-align: center\r\n  }\r\n  hr{\r\n    margin-top: -15px;    \r\n    height: 5px;\r\n    background-color: #333;\r\n  }\r\n.track-flex{\r\n  display: flex;\r\n  \r\n}\r\n.finish-line{\r\n  border-left: thick solid #ff0000;\r\n  border-left-style: dotted;\r\n  position: absolute;\r\n  right: 300px;\r\n  /* //width: 40px; */\r\n  height:45px ;\r\n  \r\n}", "",{"version":3,"sources":["webpack://./src/main.css"],"names":[],"mappings":"AAAA;IACI,qBAAqB;IACrB,sEAAuD;MACrD,8DAA+C;EACnD;EACA;;IAEE,YAAY;IACZ,YAAY;;EAEd;EACA;IACE,mBAAmB;IACnB,WAAW;IACX,YAAY;IACZ,gBAAgB;IAChB,qBAAqB;IACrB,yBAAyB;EAC3B;EACA;;;;;CAKD,YAAY;CACZ,YAAY;;;AAGb;AACA;EACE,cAAc;EACd,kBAAkB;EAClB,mBAAmB;EACnB,gBAAgB;EAChB,mBAAmB;EACnB,UAAU;EACV,UAAU;EACV,4BAA4B;AAC9B;AACA;EACE,aAAa;AACf;;AAEA;EACE,MAAM,UAAU,CAAC;EACjB,MAAM,YAAY,CAAC;EACnB,MAAM,aAAa,CAAC;EACpB,MAAM,UAAU,CAAC;EACjB,MAAM,UAAU,CAAC;AACnB;EACE;IACE,YAAY;IACZ,WAAW;EACb;EACA;IACE,gBAAgB;IAChB,gBAAgB;IAChB,WAAW;EACb;AACF;;EAEE,WAAW;EACX,YAAY;EACZ,mBAAmB;AACrB;AACA;EACE,kBAAkB;AACpB;AACA;EACE,UAAU;AACZ;AACA;CACC,YAAY;CACZ,iBAAiB;AAClB;AACA;EACE,YAAY;EACZ,qBAAqB;EACrB,mBAAmB;AACrB;AACA;EACE,YAAY;EACZ,iBAAiB;EACjB,WAAW;EACX,wBAAwB;;AAE1B;AACA;;EAEE,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB,gBAAgB;EAChB,iBAAiB;;AAEnB;EACE;IACE,YAAY;IACZ,YAAY;EACd;EACA;IACE,WAAW;IACX,YAAY;EACd;EACA;IACE,YAAY;MACV,6BAA6B;;EAEjC;EACA;IACE,eAAe;EACjB;EACA;IACE;EACF;EACA;IACE,iBAAiB;IACjB,WAAW;IACX,sBAAsB;EACxB;AACF;EACE,aAAa;;AAEf;AACA;EACE,gCAAgC;EAChC,yBAAyB;EACzB,kBAAkB;EAClB,YAAY;EACZ,mBAAmB;EACnB,YAAY;;AAEd","sourcesContent":[".logo {\r\n    background-color: red;\r\n    -webkit-mask: url('./assets/car1.svg') no-repeat center;\r\n      mask: url('./assets/car1.svg') no-repeat center;\r\n  }\r\n  .navigation-button\r\n  {\r\n    width: 150px;\r\n    height: 40px;\r\n   \r\n  }\r\n  button{\r\n    border-radius: 10px;\r\n    margin: 5px;\r\n    color: white;\r\n    font-size: large;\r\n    border-color: #66CCFF;\r\n    background-color: #66CCFF;\r\n  }\r\n  #race-button[disabled],\r\n  button[disabled],\r\n  button[disabled]:hover,\r\n  .navigation-button:disabled,\r\n  .navigation-button[disabled]{\r\n opacity: 0.5;\r\n color: white;\r\n \r\n \r\n}\r\n.animate{\r\n  display: block;\r\n  align-self: center;\r\n  justify-self:center;\r\n  margin-left: 30%;\r\n  font-size: xx-large;\r\n  color: red;\r\n  opacity: 0;\r\n  animation: blink 1s infinite;   \r\n}\r\n.hidden{\r\n  display: none;\r\n}\r\n\r\n@keyframes blink {\r\n  0%   {opacity: 0;}\r\n  25%  {opacity: 0.5;}\r\n  60%  {opacity: 0.75;}\r\n  90%  {opacity: 1;}\r\n  99%  {opacity: 0;}\r\n}\r\n  button:hover{\r\n    opacity: 0.8;\r\n    color: #333;\r\n  }\r\n  label{\r\n    font-size: large;\r\n    font-weight: 600;\r\n    color: #333;\r\n  }\r\n.start-button,\r\n.stop-button{\r\n  width: 40px;\r\n  height: 40px;\r\n  border-radius: 20px;\r\n}\r\n.start-button{\r\n  color: greenyellow;\r\n}\r\n.stop-button{\r\n  color: red;\r\n}\r\ninput{\r\n height: 25px;\r\n font-size: medium;\r\n}\r\n.div-car-set-flex{\r\n  display:flex;\r\n  align-content: center;\r\n  margin-bottom: 10px;\r\n}\r\n.application-button{\r\n  height: 26px;\r\n  font-size: medium;\r\n  width: 80px;\r\n  margin : 0px 5px 0px 5px;\r\n  \r\n}\r\n.application-text-input,\r\n .update-car-text{\r\n  bottom: 13px;\r\n  height: 20px;\r\n  border-radius: 5px;\r\n  margin-left: 5px;\r\n  margin-right: 5px;\r\n  \r\n}\r\n  svg{\r\n    width: 100px;\r\n    height: 60px;   \r\n  }\r\n  .svg-winner{\r\n    width: 50px;\r\n    height: 30px; \r\n  }\r\n  td,th{\r\n    width: 150px;   \r\n      border-bottom: 1px solid #ddd;  \r\n     \r\n  }\r\n  th{\r\n    cursor: pointer;  \r\n  }\r\n  td{\r\n    text-align: center\r\n  }\r\n  hr{\r\n    margin-top: -15px;    \r\n    height: 5px;\r\n    background-color: #333;\r\n  }\r\n.track-flex{\r\n  display: flex;\r\n  \r\n}\r\n.finish-line{\r\n  border-left: thick solid #ff0000;\r\n  border-left-style: dotted;\r\n  position: absolute;\r\n  right: 300px;\r\n  /* //width: 40px; */\r\n  height:45px ;\r\n  \r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== "string") {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./src/main.css":
/*!**********************!*\
  !*** ./src/main.css ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/main.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/Api.ts":
/*!********************!*\
  !*** ./src/Api.ts ***!
  \********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


// export  class Api{
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.deleteWinner = exports.updateWinner = exports.createWinner = exports.getAllWinners = exports.getWinners = exports.engineDrive = exports.engineStop = exports.engineStart = exports.updateCar = exports.selectCar = exports.deleteCar = exports.createCar = exports.getAllCars = exports.getCars = exports.winnersPageLimit = exports.garagePageLimit = exports.winnersUrl = void 0;
const Car_1 = __webpack_require__(/*! ./Car */ "./src/Car.ts");
const baseUrl = "http://127.0.0.1:3000";
const garageUrl = `${baseUrl}/garage`;
const enginUrl = `${baseUrl}/engine`;
exports.winnersUrl = `${baseUrl}/winners`;
exports.garagePageLimit = 7;
exports.winnersPageLimit = 10;
const getCars = (page) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const response = yield fetch(`${garageUrl}?_page=${page}&_limit=${exports.garagePageLimit}`);
    return {
        cars: yield response.json(),
        count: (_a = response.headers) === null || _a === void 0 ? void 0 : _a.get('X-Total-Count')
    };
});
exports.getCars = getCars;
const getAllCars = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch(`${garageUrl}`);
    return {
        cars: yield response.json(),
    };
});
exports.getAllCars = getAllCars;
const createCar = (body) => __awaiter(void 0, void 0, void 0, function* () {
    return (yield fetch(`${garageUrl}`, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json'
        },
    }));
});
exports.createCar = createCar;
///
const deleteCar = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return (yield fetch(`${garageUrl}/${id}`, {
        method: 'DELETE',
    }));
});
exports.deleteCar = deleteCar;
//
const selectCar = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch(`${garageUrl}/${id}`, {
        method: 'GET',
    });
    let res = yield response.json();
    let car = new Car_1.default();
    Object.assign(car, res);
    return car;
});
exports.selectCar = selectCar;
const updateCar = (car) => __awaiter(void 0, void 0, void 0, function* () {
    return (yield fetch(`${garageUrl}/${car.id}`, {
        method: 'PUT',
        body: JSON.stringify({ color: car.color, name: car.name }),
        headers: {
            'Content-Type': 'application/json'
        },
    }));
});
exports.updateCar = updateCar;
const engineStart = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch(`${enginUrl}?id=${id}&status=started`, {
        method: 'PATCH'
    });
    let result = response.json();
    return result;
});
exports.engineStart = engineStart;
const engineStop = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch(`${enginUrl}?id=${id}&status=stopped`, {
        method: 'PATCH'
    });
    let result = response.json();
    return result;
});
exports.engineStop = engineStop;
const engineDrive = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch(`${enginUrl}?id=${id}&status=drive`, {
        method: 'PATCH'
    });
    if (response.status === 200) {
        let result = response.json();
        return result;
    }
    else {
        return { success: false };
    }
});
exports.engineDrive = engineDrive;
const getWinners = (page, sort, order) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    const response = yield fetch(`${exports.winnersUrl}?_page=${page}&_limit=${exports.winnersPageLimit}&_sort=${sort}&_order=${order}`);
    return {
        winners: yield response.json(),
        count: (_b = response.headers) === null || _b === void 0 ? void 0 : _b.get('X-Total-Count')
    };
});
exports.getWinners = getWinners;
const getAllWinners = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch(`${exports.winnersUrl}`);
    return {
        winners: yield response.json(),
    };
});
exports.getAllWinners = getAllWinners;
const createWinner = (body) => __awaiter(void 0, void 0, void 0, function* () {
    return (yield fetch(`${exports.winnersUrl}`, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json'
        },
    }));
});
exports.createWinner = createWinner;
const updateWinner = (winner) => __awaiter(void 0, void 0, void 0, function* () {
    return (yield fetch(`${exports.winnersUrl}/${winner.id}`, {
        method: 'PUT',
        body: JSON.stringify({ wins: winner.wins, time: winner.time }),
        headers: {
            'Content-Type': 'application/json'
        },
    }));
});
exports.updateWinner = updateWinner;
//
const deleteWinner = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return (yield fetch(`${exports.winnersUrl}/${id}`, {
        method: 'DELETE',
    }));
});
exports.deleteWinner = deleteWinner;


/***/ }),

/***/ "./src/Car.ts":
/*!********************!*\
  !*** ./src/Car.ts ***!
  \********************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Car = void 0;
class Car {
    constructor(_name, _color, _id) {
        this.carDistanse = 0;
        this.color = _color === undefined ? this.setHexRandomColor() : _color;
        this.name = _name === undefined ? this.setRandomName() : _name;
        this.id = _id === undefined ? 0 : _id;
    }
    set status(status) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        this._status = status;
        if (this._status === 'drive') {
            ((_a = this.carView.parentNode) === null || _a === void 0 ? void 0 : _a.previousSibling).querySelector('.stop-button').disabled = false;
            ((_b = this.carView.parentNode) === null || _b === void 0 ? void 0 : _b.previousSibling).querySelector('.start-button').disabled = true;
            ((_c = this.carView.parentNode) === null || _c === void 0 ? void 0 : _c.previousSibling).querySelector('.select').disabled = true;
            ((_d = this.carView.parentNode) === null || _d === void 0 ? void 0 : _d.previousSibling).querySelector('.delete').disabled = true;
        }
        else {
            ((_e = this.carView.parentNode) === null || _e === void 0 ? void 0 : _e.previousSibling).querySelector('.start-button').disabled = false;
            ((_f = this.carView.parentNode) === null || _f === void 0 ? void 0 : _f.previousSibling).querySelector('.stop-button').disabled = true;
            ((_g = this.carView.parentNode) === null || _g === void 0 ? void 0 : _g.previousSibling).querySelector('.select').disabled = false;
            ((_h = this.carView.parentNode) === null || _h === void 0 ? void 0 : _h.previousSibling).querySelector('.delete').disabled = false;
        }
    }
    setHexRandomColor() {
        let R = Math.floor(Math.random() * 255);
        let G = Math.floor(Math.random() * 255);
        let B = Math.floor(Math.random() * 255);
        let Rhex = R.toString(16);
        let Ghex = G.toString(16);
        let Bhex = B.toString(16);
        Rhex = Rhex.length === 1 ? "0" : Rhex;
        Ghex = Ghex.length === 1 ? "0" : Ghex;
        Bhex = Bhex.length === 1 ? "0" : Bhex;
        return "#" + Rhex + Ghex + Bhex;
    }
    setRandomName() {
        let names = [
            "Tesla",
            "BMW",
            "Ford",
            "Kia",
            "Reno",
            "Opel",
            "Aude",
            "Lada",
            "skoda",
            "Volvo",
        ];
        let models = [
            "Model A",
            "Model B",
            "Model C",
            "Model D",
            "Model E",
            "Model F",
            "Model G",
            "Model H",
            "Model I",
            "Model G",
        ];
        let randomName = names[Math.floor(Math.random() * names.length)];
        let randomModel = models[Math.floor(Math.random() * models.length)];
        return randomName + " " + randomModel;
    }
    getCarView(color) {
        let div = document.createElement("div");
        div.id = this.id.toString();
        let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        let carUse = document.createElementNS("http://www.w3.org/2000/svg", "use");
        carUse.setAttribute("href", "./assets/carSprite.svg#car");
        carUse.setAttribute("fill", color);
        svg.appendChild(carUse);
        div.appendChild(svg);
        this.carView = div;
        return div;
    }
}
exports.Car = Car;
exports["default"] = Car;


/***/ }),

/***/ "./src/GarageController.ts":
/*!*********************************!*\
  !*** ./src/GarageController.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GarageController = void 0;
//import { Garage } from './Garage';
const api = __webpack_require__(/*! ./Api */ "./src/Api.ts");
const GarageView_1 = __webpack_require__(/*! ./GarageView */ "./src/GarageView.ts");
const Car_1 = __webpack_require__(/*! ./Car */ "./src/Car.ts");
const WinnersController_1 = __webpack_require__(/*! ./WinnersController */ "./src/WinnersController.ts");
const Winner_1 = __webpack_require__(/*! ./Winner */ "./src/Winner.ts");
class GarageController {
    constructor() {
        this.winnersController = new WinnersController_1.WinnersController();
        this.cars = new Array();
        this.raceCars = new Array;
        this.createdCar = new Car_1.default('untitled', '#0000000');
        // this.garage = new Garage();
        this.page = 1;
        this.garageView = new GarageView_1.default();
    }
    set isRace(isRace) {
        this._isRace = isRace;
        if (this._isRace) {
            this.garageView.setRaceMode();
        }
        else {
            this.garageView.setCommonMode();
        }
    }
    set page(page) {
        this._page = page;
        this.getgarage();
    }
    getgarage() {
        api.getCars(this._page).then(result => {
            this.cars.length = 0;
            let cars = result.cars;
            let car = new Car_1.default();
            cars.forEach((item) => {
                let car = new Car_1.default(item.name, item.color, item.id);
                item.carView = car.getCarView(item.color);
                this.cars.push(car);
            });
            let total = result.count === null ? 0 : Number(result.count);
            this.garageView.renderCars(this.cars, this._page, total, api.garagePageLimit);
        }, error => { console.log(error); });
    }
    addCar() {
        api.createCar(this.createdCar).then(() => {
            this.getgarage();
        }, error => { console.log(error); });
    }
    deleteCar(id) {
        var _a;
        let findWinner = this.winnersController.winners.find(p => p.id === id);
        if (findWinner !== undefined) {
            api.deleteWinner(findWinner.id).then(() => {
                this.winnersController.getWinners();
            }, error => { console.log(error); });
        }
        api.deleteCar(id).then(() => {
            if (this.cars.length === 1) {
                this._page = this._page === 1 ? 1 : this._page - 1;
            }
            this.getgarage();
        }, error => { console.log(error); });
        if (((_a = this.selectedCar) === null || _a === void 0 ? void 0 : _a.id) === id) {
            this.selectedCar = undefined;
        }
    }
    selectCar(id) {
        api.selectCar(id).then((result) => {
            this.selectedCar = result;
            this.garageView.renderSelectedCar(this.selectedCar);
        }, error => { console.log(error); });
    }
    updateCar() {
        if (this.selectedCar !== undefined) {
            api.updateCar(this.selectedCar).then(() => {
                this.getgarage();
            }, error => { console.log(error); });
        }
    }
    generateCars() {
        this.isRace = false;
        for (let i = 0; i < 100; i++) {
            let car = new Car_1.default();
            api.createCar({ name: car.name, color: car.color });
        }
        this.getgarage();
    }
    engineStop(id) {
        api.engineStop(id).then(() => {
            let animatedCar = this.cars.find(p => p.id == id);
            if (animatedCar != null) {
                animatedCar.status = 'stop';
                this.stopCar(animatedCar);
            }
        });
    }
    reset() {
        if (this._isRace) {
            let cars = this.cars;
            cars.forEach((item) => {
                item.status = 'stop';
                api.engineStop(item.id).then(() => {
                    this.stopCar(item);
                });
            });
            this.isRace = false;
        }
        this.garageView.setCommonMode();
    }
    engineStart(id, isRace) {
        // this.garageView.setCarRaceMode(id);
        api.engineStart(id).then(result => {
            let animatedCar = this.cars.find(p => p.id == id);
            if (animatedCar != null) {
                animatedCar.status = 'drive';
                this.animateCar(animatedCar, result.velocity, result.distance, isRace);
                this.engineDrive(animatedCar);
            }
        });
    }
    race() {
        this.isWinnerDetected = false;
        this.raceCars.length = 0;
        let cars = this.cars;
        cars.forEach((item) => {
            api.engineStart(item.id).then(result => {
                this.animateCar(item, result.velocity, result.distance, true);
                this.engineDrive(item);
            });
        });
        this.isRace = true;
    }
    animateCar(animatedCar, velocity, distance, isRace) {
        let currentwidth = document.body.scrollWidth;
        let pixelScale = distance / (currentwidth - 300);
        let start;
        let step = (timestamp) => {
            if (start === undefined) {
                start = timestamp;
            }
            const diff = timestamp - start;
            animatedCar.carDistanse = velocity * diff;
            animatedCar.carView.style.transform =
                "translateX(" + animatedCar.carDistanse / pixelScale + "px)";
            if (animatedCar.carDistanse <= distance) {
                animatedCar.animationId = window.requestAnimationFrame(step);
            }
            if (animatedCar.carDistanse >= distance) {
                if (!this.isWinnerDetected) {
                    animatedCar.time = (animatedCar.carDistanse) / (velocity * 1000);
                    animatedCar.time = Number(animatedCar.time.toFixed(3));
                    this.isWinnerDetected = true;
                    this.garageView.animateWinner('Winner is ' + animatedCar.name + ' with ' + animatedCar.time);
                    this.updateWinner(animatedCar);
                }
                this.raceCars.push(animatedCar);
                if (this.raceCars.length === this.cars.length) {
                    isRace = false;
                }
            }
        };
        window.requestAnimationFrame(step);
    }
    stopAnimateCar(id) {
        window.cancelAnimationFrame(Number(id));
    }
    engineDrive(animateCar) {
        return __awaiter(this, void 0, void 0, function* () {
            yield api.engineDrive(animateCar.id).then((result) => {
                if (!result.success) {
                    api.engineStop(animateCar.id).then;
                    this.stopAnimateCar(animateCar.animationId.toString());
                    this.raceCars.push(animateCar);
                    if (this.raceCars.length === this.cars.length) {
                        this.isRace = false;
                    }
                }
            });
        });
    }
    stopCar(animatedCar) {
        this.stopAnimateCar(animatedCar.animationId.toString());
        animatedCar.carView.style.transform = 'TranslateX(0px)';
        //  this.garageView.setCarGarageMode(animatedCar.id);
    }
    updateWinner(raceWinner) {
        let winners = this.winnersController.winners;
        let findWinner = winners.find(p => p.id === raceWinner.id);
        if (findWinner !== undefined) {
            findWinner.wins += 1;
            findWinner.time = Number(Math.min(findWinner.time, raceWinner.time).toFixed(3));
            api.updateWinner(findWinner).then(() => {
                this.winnersController.getWinners();
            });
        }
        else {
            let winner = new Winner_1.default();
            winner.id = raceWinner.id;
            winner.wins = 1;
            winner.time = raceWinner.time;
            api.createWinner({ id: raceWinner.id, wins: 1, time: raceWinner.time }).then(() => {
                this.winnersController.getWinners();
            });
        }
    }
}
exports.GarageController = GarageController;
////
//function addWinnersListeners():void{


/***/ }),

/***/ "./src/GarageView.ts":
/*!***************************!*\
  !*** ./src/GarageView.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GarageView = void 0;
class GarageView {
    //  garage:Garage;
    constructor() {
        // this.garage = new Garage();
        this.renderGarage();
    }
    renderGarage() {
        this.renderLayout();
        this.renderGarageControl();
    }
    renderLayout() {
        let divGarage = document.getElementById('div-garage');
        let divCreate = document.createElement('div');
        divCreate.className = 'div-car-set-flex';
        divCreate.id = 'div-create';
        let divUpdate = document.createElement('div');
        divUpdate.className = 'div-car-set-flex';
        divUpdate.id = 'div-update';
        let divButtonBar = document.createElement('div');
        divButtonBar.className = 'div-car-set-flex';
        divButtonBar.id = 'div-buttons-bar';
        let divCarsContainer = document.createElement('div');
        divCarsContainer.className = 'div-car-container';
        divCarsContainer.id = 'div-car-container';
        let divPages = document.createElement('div');
        divPages.className = 'div-car-pages';
        let buttonNext = document.createElement('button');
        buttonNext.textContent = 'NextPage';
        buttonNext.id = 'next-page';
        buttonNext.className = 'navigation-button';
        let buttonPrev = document.createElement('button');
        buttonPrev.id = 'prev-page';
        buttonPrev.textContent = 'PrevPage';
        buttonPrev.className = 'navigation-button';
        divPages.appendChild(buttonPrev);
        divPages.appendChild(buttonNext);
        divGarage === null || divGarage === void 0 ? void 0 : divGarage.appendChild(divCreate);
        divGarage === null || divGarage === void 0 ? void 0 : divGarage.appendChild(divUpdate);
        divGarage === null || divGarage === void 0 ? void 0 : divGarage.appendChild(divButtonBar);
        divGarage === null || divGarage === void 0 ? void 0 : divGarage.appendChild(divCarsContainer);
        divGarage === null || divGarage === void 0 ? void 0 : divGarage.appendChild(divPages);
    }
    renderGarageControl() {
        let divCreate = document.getElementById('div-create');
        let divUpdate = document.getElementById('div-update');
        let divButtons = document.getElementById('div-buttons-bar');
        ////
        let createButton = document.createElement('button');
        createButton.id = 'create-car-button';
        createButton.textContent = 'Create';
        createButton.className = 'application-button';
        let createTextInput = document.createElement('input');
        createTextInput.id = 'create-car-text';
        createTextInput.className = 'application-text-input';
        let createcolorPicker = document.createElement('input');
        createcolorPicker.type = 'color';
        createcolorPicker.id = 'create-color-picker';
        divCreate === null || divCreate === void 0 ? void 0 : divCreate.appendChild(createTextInput);
        divCreate === null || divCreate === void 0 ? void 0 : divCreate.appendChild(createcolorPicker);
        divCreate === null || divCreate === void 0 ? void 0 : divCreate.appendChild(createButton);
        ////
        let updateButton = document.createElement('button');
        updateButton.id = 'update-car-button';
        updateButton.textContent = 'Update';
        updateButton.className = 'application-button';
        let updateTextInput = document.createElement('input');
        updateTextInput.id = 'update-car-text';
        updateTextInput.className = 'application-text-input';
        let updatecolorPicker = document.createElement('input');
        updatecolorPicker.type = 'color';
        updatecolorPicker.id = 'update-color-picker';
        divUpdate === null || divUpdate === void 0 ? void 0 : divUpdate.appendChild(updateTextInput);
        divUpdate === null || divUpdate === void 0 ? void 0 : divUpdate.appendChild(updatecolorPicker);
        divUpdate === null || divUpdate === void 0 ? void 0 : divUpdate.appendChild(updateButton);
        ////
        let raceButton = document.createElement('button');
        raceButton.id = 'race-button';
        raceButton.textContent = 'Race';
        createButton.className = 'application-button';
        let resetButton = document.createElement('button');
        resetButton.id = 'reset-button';
        resetButton.textContent = 'Reset';
        createButton.className = 'application-button';
        let generateButton = document.createElement('button');
        generateButton.id = 'generate-button';
        generateButton.textContent = 'Generate cars';
        createButton.className = 'application-button';
        divButtons === null || divButtons === void 0 ? void 0 : divButtons.appendChild(raceButton);
        divButtons === null || divButtons === void 0 ? void 0 : divButtons.appendChild(resetButton);
        divButtons === null || divButtons === void 0 ? void 0 : divButtons.appendChild(generateButton);
        let bunnerSpan = document.createElement('span');
        bunnerSpan.id = 'winner-banner';
        bunnerSpan.className = 'animate hidden';
        divButtons === null || divButtons === void 0 ? void 0 : divButtons.appendChild(bunnerSpan);
    }
    renderCars(cars, page, total, carsPerPge) {
        let totalPages = total / carsPerPge;
        let buttonPrev = document.getElementById('prev-page');
        buttonPrev.value = (page - 1).toString();
        buttonPrev.disabled = (page > 1 && totalPages > 1) ? false : true;
        let buttonNext = document.getElementById('next-page');
        buttonNext.value = (page + 1).toString();
        buttonNext.disabled = (totalPages > page) ? false : true;
        let divCars = document.querySelector('.div-car-container');
        divCars.innerHTML = '';
        let header = document.createElement('label');
        header.innerText = `TotalCars:    ${total} Page# ${page}`;
        divCars.appendChild(header);
        cars.forEach((item) => {
            let carControlDiv = this.getCarButtonsBar(item.id.toString(), item.name);
            let divTrack = document.createElement('div');
            divTrack.className = 'track-flex';
            let finisLine = document.createElement('div');
            finisLine.className = 'finish-line';
            divTrack.appendChild(finisLine);
            let carView = item.getCarView(item.color);
            divTrack.appendChild(carView);
            let Hr = document.createElement('hr');
            divCars === null || divCars === void 0 ? void 0 : divCars.appendChild(carControlDiv);
            divCars === null || divCars === void 0 ? void 0 : divCars.appendChild(divTrack);
            divCars === null || divCars === void 0 ? void 0 : divCars.appendChild(Hr);
        });
    }
    getCarButtonsBar(carId, carName) {
        let divbar = document.createElement('div');
        let selectButton = document.createElement('button');
        selectButton.className = 'select';
        selectButton.textContent = 'Select';
        selectButton.value = carId.toString();
        let deleteButton = document.createElement('button');
        deleteButton.className = 'delete';
        deleteButton.textContent = 'Delete';
        deleteButton.value = carId.toString();
        let AButton = document.createElement('button');
        AButton.className = 'start-button';
        AButton.textContent = 'A';
        AButton.value = carId.toString();
        let BButton = document.createElement('button');
        BButton.disabled = true;
        BButton.className = 'stop-button';
        BButton.textContent = 'B';
        BButton.value = carId.toString();
        let carLabel = document.createElement('label');
        carLabel.innerText = carName;
        divbar.appendChild(AButton);
        divbar.appendChild(BButton);
        divbar.appendChild(selectButton);
        divbar.appendChild(deleteButton);
        divbar.appendChild(carLabel);
        return divbar;
    }
    renderSelectedCar(car) {
        let updateColorPicker = document.getElementById('update-color-picker');
        updateColorPicker.value = car.color;
        let updateCarName = document.getElementById('update-car-text');
        updateCarName.value = car.name;
    }
    setRaceMode() {
        let raceButton = document.getElementById('race-button');
        let reset = document.getElementById('reset-button');
        raceButton.disabled = true;
        let selects = document.querySelectorAll('.select').forEach((item) => {
            item.disabled = true;
        });
        let deletes = document.querySelectorAll('.delete').forEach((item) => {
            item.disabled = true;
        });
        reset.disabled = true;
        window.setTimeout(function () {
            reset.disabled = false;
        }, 2500);
    }
    setCommonMode() {
        let raceButton = document.getElementById('race-button');
        raceButton.disabled = false;
    }
    // setCarRaceMode(id:number){
    //  let carControlDiv = document.getElementById(id.toString())?.previousSibling;
    //  carControlDiv?.childNodes.forEach((item)=>{
    //     let carControlElement = item as HTMLButtonElement;
    //        carControlElement.disabled = true;
    //  })
    //}
    //setCarGarageMode(id:number){
    // let carControlDiv = document.getElementById(id.toString())?.previousSibling;
    // carControlDiv?.childNodes.forEach((item)=>{
    //    let carControlElement = item as HTMLButtonElement;      
    //       carControlElement.disabled = false;
    // })
    //}
    animateWinner(result) {
        let bunner = document.getElementById('winner-banner');
        bunner.innerText = result;
        bunner.classList.remove('hidden');
        (setTimeout(() => {
            bunner.classList.add('hidden');
        }, 5000));
    }
}
exports.GarageView = GarageView;
exports["default"] = GarageView;


/***/ }),

/***/ "./src/Winner.ts":
/*!***********************!*\
  !*** ./src/Winner.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Winner = void 0;
class Winner {
}
exports.Winner = Winner;
exports["default"] = Winner;


/***/ }),

/***/ "./src/WinnersController.ts":
/*!**********************************!*\
  !*** ./src/WinnersController.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WinnersController = void 0;
const api = __webpack_require__(/*! ./Api */ "./src/Api.ts");
const WinnersView_1 = __webpack_require__(/*! ./WinnersView */ "./src/WinnersView.ts");
class WinnersController {
    constructor() {
        this._page = 1;
        this._sort = 'id';
        this.order = 'ASC';
        this.winnersView = new WinnersView_1.WinnersView();
        this.getWinners();
    }
    set page(page) {
        this._page = page;
        this.getWinners();
    }
    set sort(sort) {
        this._sort = sort;
        this.getWinners();
    }
    getWinners() {
        api.getAllCars().then(result => {
            this.allCars = result.cars;
        }, error => { console.log(error); }).then;
        api.getWinners(this._page, this._sort, this.order).then(result => {
            this.winners = result.winners;
            let total = result.count === null ? 0 : Number(result.count);
            this.winners.forEach((item) => {
                let car = this.allCars.find(p => p.id === item.id);
                if (car !== undefined) {
                    item.car = car;
                }
            });
            this.winnersView.renderWinners(this.winners, this._page, total, api.winnersPageLimit);
        }, error => { console.log(error); });
    }
}
exports.WinnersController = WinnersController;
exports["default"] = WinnersController;


/***/ }),

/***/ "./src/WinnersView.ts":
/*!****************************!*\
  !*** ./src/WinnersView.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WinnersView = void 0;
const Car_1 = __webpack_require__(/*! ./Car */ "./src/Car.ts");
class WinnersView {
    constructor() {
        this.renderWinnersLayout();
    }
    renderWinners(winners, page, total, pageLimit) {
        let car = new Car_1.default();
        let table = document.getElementById('winners-table');
        let trs = table === null || table === void 0 ? void 0 : table.querySelectorAll('.winner-row');
        trs === null || trs === void 0 ? void 0 : trs.forEach((item) => {
            table === null || table === void 0 ? void 0 : table.removeChild(item);
        });
        let totalPages = total / pageLimit;
        let buttonPrev = document.getElementById('prev-winners-page');
        buttonPrev.value = (page - 1).toString();
        buttonPrev.disabled = (page > 1 && totalPages > 1) ? false : true;
        let buttonNext = document.getElementById('next-winners-page');
        buttonNext.value = (page + 1).toString();
        buttonNext.disabled = (totalPages > page) ? false : true;
        let winnersHeader = document.getElementById('winners-header').innerText = 'Total winners : ' + winners.length + ' Page#' + page;
        winners.forEach((item) => {
            var _a;
            if (item.car !== undefined) {
                let tr = document.createElement('tr');
                tr.className = 'winner-row';
                let tdId = document.createElement('td');
                tdId.innerText = item.id.toString();
                let tdCar = document.createElement('td');
                let tdName = document.createElement('td');
                tdName.innerText = item.car.name;
                let tdWins = document.createElement('td');
                tdWins.innerText = item.wins.toString();
                let tdTime = document.createElement('td');
                tdTime.innerText = item.time.toString();
                let divCar = car.getCarView(item.car.color);
                (_a = divCar.querySelector('svg')) === null || _a === void 0 ? void 0 : _a.classList.add('svg-winner');
                divCar.style.width = '150px';
                divCar.style.height = '30px';
                tdCar.appendChild(divCar);
                tr.appendChild(tdId);
                tr.appendChild(tdCar);
                tr.appendChild(tdName);
                tr.appendChild(tdWins);
                tr.appendChild(tdTime);
                table === null || table === void 0 ? void 0 : table.appendChild(tr);
            }
        });
    }
    renderWinnersLayout() {
        let divWinners = document.getElementById('div-winners');
        let mainWinnersDiv = document.createElement('div');
        mainWinnersDiv.id = 'winners-main';
        let labelHeader = document.createElement('label');
        labelHeader.id = 'winners-header';
        let table = this.generateTableLayout();
        mainWinnersDiv.appendChild(labelHeader);
        mainWinnersDiv.appendChild(table);
        let divPages = document.createElement('div');
        divPages.className = 'divpages';
        let buttonNext = document.createElement('button');
        buttonNext.textContent = 'NextPage';
        buttonNext.id = 'next-winners-page';
        buttonNext.className = 'navigation-button';
        let buttonPrev = document.createElement('button');
        buttonPrev.id = 'prev-winners-page';
        buttonPrev.textContent = 'PrevPage';
        buttonPrev.className = 'navigation-button';
        divPages.appendChild(buttonPrev);
        divPages.appendChild(buttonNext);
        divWinners === null || divWinners === void 0 ? void 0 : divWinners.appendChild(mainWinnersDiv);
        divWinners === null || divWinners === void 0 ? void 0 : divWinners.appendChild(divPages);
    }
    generateTableLayout() {
        let table = document.createElement('table');
        table.id = 'winners-table';
        let tr = document.createElement('tr');
        let thId = document.createElement('th');
        thId.textContent = 'Id';
        thId.id = 'sort-id';
        let thCar = document.createElement('th');
        thCar.textContent = "Car";
        let thName = document.createElement('th');
        thName.textContent = 'Name';
        let thWins = document.createElement('th');
        thWins.textContent = 'Wins';
        thWins.id = 'sort-wins';
        let thTime = document.createElement('th');
        thTime.textContent = 'Time';
        thTime.id = 'sort-time';
        tr.appendChild(thId);
        tr.appendChild(thCar);
        tr.appendChild(thName);
        tr.appendChild(thWins);
        tr.appendChild(thTime);
        table.appendChild(tr);
        return table;
    }
}
exports.WinnersView = WinnersView;
exports["default"] = WinnersView;


/***/ }),

/***/ "./src/assets/car1.svg":
/*!*****************************!*\
  !*** ./src/assets/car1.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "338c91d59a044b349f39.svg";

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
/******/ 			id: moduleId,
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
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
function renderMainLayout() {
    let garage = document.createElement('button');
    garage.id = 'garage';
    let winners = document.createElement('button');
    winners.id = 'winners';
    garage.textContent = 'Garage';
    winners.textContent = 'Winners';
    winners.addEventListener('click', g);
    garage.addEventListener('click', f);
    document.body.appendChild(garage);
    document.body.appendChild(winners);
    let divWinners = document.createElement('div');
    let divGarage = document.createElement('div');
    divWinners.id = 'div-winners';
    divGarage.id = 'div-garage';
    document.body.appendChild(divWinners);
    document.body.appendChild(divGarage);
}
renderMainLayout();
__webpack_require__(/*! ./main.css */ "./src/main.css");
const GarageController_1 = __webpack_require__(/*! ./GarageController */ "./src/GarageController.ts");
//import {WinnersController} from './WinnersController'
let garageController = new GarageController_1.GarageController();
//let winnersController :WinnersController = new WinnersController();
window.addEventListener('load', () => {
    addListeners();
    addCarListener();
    // addWinnersListeners();
});
function addListeners() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
    (_a = document.getElementById('create-car-button')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
        garageController.addCar();
    });
    (_b = document.getElementById('update-car-button')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', () => {
        garageController.updateCar();
        let t = document.getElementById('winner-bannner');
        console.log(t);
        t.className = '';
        t.className = 'animate';
    });
    (_c = document.getElementById('generate-button')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', () => {
        garageController.generateCars();
    });
    (_d = document.getElementById('race-button')) === null || _d === void 0 ? void 0 : _d.addEventListener('click', () => {
        garageController.race();
    });
    (_e = document.getElementById('reset-button')) === null || _e === void 0 ? void 0 : _e.addEventListener('click', () => {
        garageController.reset();
    });
    (_f = document.getElementById('create-color-picker')) === null || _f === void 0 ? void 0 : _f.addEventListener('input', (e) => {
        garageController.createdCar.color = e.currentTarget.value;
    });
    (_g = document.getElementById('update-color-picker')) === null || _g === void 0 ? void 0 : _g.addEventListener('input', (e) => {
        if (garageController.selectedCar != undefined) {
            garageController.selectedCar.color = e.currentTarget.value;
        }
    });
    (_h = document.getElementById('create-car-text')) === null || _h === void 0 ? void 0 : _h.addEventListener('input', (e) => {
        garageController.createdCar.name = e.currentTarget.value;
    });
    (_j = document.getElementById('update-car-text')) === null || _j === void 0 ? void 0 : _j.addEventListener('input', (e) => {
        if (garageController.selectedCar !== undefined) {
            garageController.selectedCar.name = e.currentTarget.value;
        }
    });
    (_k = document.getElementById('next-page')) === null || _k === void 0 ? void 0 : _k.addEventListener('click', (e) => {
        garageController.page = (Number(e.currentTarget.value));
    });
    (_l = document.getElementById('prev-page')) === null || _l === void 0 ? void 0 : _l.addEventListener('click', (e) => {
        garageController.page = (Number(e.currentTarget.value));
    });
}
function addCarListener() {
    var _a;
    (_a = document.getElementById('div-car-container')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', (e) => {
        let target = e.target;
        switch (target.className) {
            case 'select': {
                garageController.selectCar(Number(target.value));
                break;
            }
            case 'delete': {
                garageController.deleteCar(Number(target.value));
                break;
            }
            case 'start-button':
                {
                    garageController.engineStart(Number(target.value), false);
                    break;
                }
            case 'stop-button':
                {
                    garageController.engineStop(Number(target.value));
                    break;
                }
        }
    });
}
////////////
(_a = document.getElementById('sort-wins')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
    garageController.winnersController.order = garageController.winnersController.order === 'ASC' ? 'DESC' : 'ASC';
    garageController.winnersController.sort = 'wins';
});
(_b = document.getElementById('sort-id')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', () => {
    garageController.winnersController.order = garageController.winnersController.order === 'ASC' ? 'DESC' : 'ASC';
    garageController.winnersController.sort = 'id';
});
(_c = document.getElementById('sort-time')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', () => {
    garageController.winnersController.order = garageController.winnersController.order === 'ASC' ? 'DESC' : 'ASC';
    garageController.winnersController.sort = 'time';
});
(_d = document.getElementById('next-winners-page')) === null || _d === void 0 ? void 0 : _d.addEventListener('click', (e) => {
    garageController.winnersController.page = (Number(e.currentTarget.value));
});
(_e = document.getElementById('prev-winners-page')) === null || _e === void 0 ? void 0 : _e.addEventListener('click', (e) => {
    garageController.winnersController.page = (Number(e.currentTarget.value));
});
////
function f() {
    let x = document.getElementById('div-garage');
    x.style.display = "block";
    let y = document.getElementById('div-winners');
    y.style.display = 'none';
}
function g() {
    let x = document.getElementById('div-garage');
    x.style.display = "none";
    let y = document.getElementById('div-winners');
    y.style.display = 'block';
}
let y = document.getElementById('div-winners');
y.style.display = 'none';

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixtREFBbUQ7QUFDbEY7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7Ozs7Ozs7Ozs7O0FDNU5hO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV3c2pzLy4vc3JjL21haW4uY3NzIiwid2VicGFjazovL25ld3Nqcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vbmV3c2pzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vbmV3c2pzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9uZXdzanMvLi9zcmMvbWFpbi5jc3M/ZGRkMyIsIndlYnBhY2s6Ly9uZXdzanMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vbmV3c2pzLy4vc3JjL0FwaS50cyIsIndlYnBhY2s6Ly9uZXdzanMvLi9zcmMvQ2FyLnRzIiwid2VicGFjazovL25ld3Nqcy8uL3NyYy9HYXJhZ2VDb250cm9sbGVyLnRzIiwid2VicGFjazovL25ld3Nqcy8uL3NyYy9HYXJhZ2VWaWV3LnRzIiwid2VicGFjazovL25ld3Nqcy8uL3NyYy9XaW5uZXIudHMiLCJ3ZWJwYWNrOi8vbmV3c2pzLy4vc3JjL1dpbm5lcnNDb250cm9sbGVyLnRzIiwid2VicGFjazovL25ld3Nqcy8uL3NyYy9XaW5uZXJzVmlldy50cyIsIndlYnBhY2s6Ly9uZXdzanMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbmV3c2pzL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL25ld3Nqcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbmV3c2pzL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vbmV3c2pzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbmV3c2pzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbmV3c2pzL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL25ld3Nqcy93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vbmV3c2pzLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyBmcm9tIFwiLi9hc3NldHMvY2FyMS5zdmdcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIubG9nbyB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXHJcXG4gICAgLXdlYmtpdC1tYXNrOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIG5vLXJlcGVhdCBjZW50ZXI7XFxyXFxuICAgICAgbWFzazogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBuby1yZXBlYXQgY2VudGVyO1xcclxcbiAgfVxcclxcbiAgLm5hdmlnYXRpb24tYnV0dG9uXFxyXFxuICB7XFxyXFxuICAgIHdpZHRoOiAxNTBweDtcXHJcXG4gICAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgIFxcclxcbiAgfVxcclxcbiAgYnV0dG9ue1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBtYXJnaW46IDVweDtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBmb250LXNpemU6IGxhcmdlO1xcclxcbiAgICBib3JkZXItY29sb3I6ICM2NkNDRkY7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2NkNDRkY7XFxyXFxuICB9XFxyXFxuICAjcmFjZS1idXR0b25bZGlzYWJsZWRdLFxcclxcbiAgYnV0dG9uW2Rpc2FibGVkXSxcXHJcXG4gIGJ1dHRvbltkaXNhYmxlZF06aG92ZXIsXFxyXFxuICAubmF2aWdhdGlvbi1idXR0b246ZGlzYWJsZWQsXFxyXFxuICAubmF2aWdhdGlvbi1idXR0b25bZGlzYWJsZWRde1xcclxcbiBvcGFjaXR5OiAwLjU7XFxyXFxuIGNvbG9yOiB3aGl0ZTtcXHJcXG4gXFxyXFxuIFxcclxcbn1cXHJcXG4uYW5pbWF0ZXtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAganVzdGlmeS1zZWxmOmNlbnRlcjtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAzMCU7XFxyXFxuICBmb250LXNpemU6IHh4LWxhcmdlO1xcclxcbiAgY29sb3I6IHJlZDtcXHJcXG4gIG9wYWNpdHk6IDA7XFxyXFxuICBhbmltYXRpb246IGJsaW5rIDFzIGluZmluaXRlOyAgIFxcclxcbn1cXHJcXG4uaGlkZGVue1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBibGluayB7XFxyXFxuICAwJSAgIHtvcGFjaXR5OiAwO31cXHJcXG4gIDI1JSAge29wYWNpdHk6IDAuNTt9XFxyXFxuICA2MCUgIHtvcGFjaXR5OiAwLjc1O31cXHJcXG4gIDkwJSAge29wYWNpdHk6IDE7fVxcclxcbiAgOTklICB7b3BhY2l0eTogMDt9XFxyXFxufVxcclxcbiAgYnV0dG9uOmhvdmVye1xcclxcbiAgICBvcGFjaXR5OiAwLjg7XFxyXFxuICAgIGNvbG9yOiAjMzMzO1xcclxcbiAgfVxcclxcbiAgbGFiZWx7XFxyXFxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIGNvbG9yOiAjMzMzO1xcclxcbiAgfVxcclxcbi5zdGFydC1idXR0b24sXFxyXFxuLnN0b3AtYnV0dG9ue1xcclxcbiAgd2lkdGg6IDQwcHg7XFxyXFxuICBoZWlnaHQ6IDQwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbn1cXHJcXG4uc3RhcnQtYnV0dG9ue1xcclxcbiAgY29sb3I6IGdyZWVueWVsbG93O1xcclxcbn1cXHJcXG4uc3RvcC1idXR0b257XFxyXFxuICBjb2xvcjogcmVkO1xcclxcbn1cXHJcXG5pbnB1dHtcXHJcXG4gaGVpZ2h0OiAyNXB4O1xcclxcbiBmb250LXNpemU6IG1lZGl1bTtcXHJcXG59XFxyXFxuLmRpdi1jYXItc2V0LWZsZXh7XFxyXFxuICBkaXNwbGF5OmZsZXg7XFxyXFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbn1cXHJcXG4uYXBwbGljYXRpb24tYnV0dG9ue1xcclxcbiAgaGVpZ2h0OiAyNnB4O1xcclxcbiAgZm9udC1zaXplOiBtZWRpdW07XFxyXFxuICB3aWR0aDogODBweDtcXHJcXG4gIG1hcmdpbiA6IDBweCA1cHggMHB4IDVweDtcXHJcXG4gIFxcclxcbn1cXHJcXG4uYXBwbGljYXRpb24tdGV4dC1pbnB1dCxcXHJcXG4gLnVwZGF0ZS1jYXItdGV4dHtcXHJcXG4gIGJvdHRvbTogMTNweDtcXHJcXG4gIGhlaWdodDogMjBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDVweDtcXHJcXG4gIFxcclxcbn1cXHJcXG4gIHN2Z3tcXHJcXG4gICAgd2lkdGg6IDEwMHB4O1xcclxcbiAgICBoZWlnaHQ6IDYwcHg7ICAgXFxyXFxuICB9XFxyXFxuICAuc3ZnLXdpbm5lcntcXHJcXG4gICAgd2lkdGg6IDUwcHg7XFxyXFxuICAgIGhlaWdodDogMzBweDsgXFxyXFxuICB9XFxyXFxuICB0ZCx0aHtcXHJcXG4gICAgd2lkdGg6IDE1MHB4OyAgIFxcclxcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkOyAgXFxyXFxuICAgICBcXHJcXG4gIH1cXHJcXG4gIHRoe1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7ICBcXHJcXG4gIH1cXHJcXG4gIHRke1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXJcXHJcXG4gIH1cXHJcXG4gIGhye1xcclxcbiAgICBtYXJnaW4tdG9wOiAtMTVweDsgICAgXFxyXFxuICAgIGhlaWdodDogNXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcclxcbiAgfVxcclxcbi50cmFjay1mbGV4e1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIFxcclxcbn1cXHJcXG4uZmluaXNoLWxpbmV7XFxyXFxuICBib3JkZXItbGVmdDogdGhpY2sgc29saWQgI2ZmMDAwMDtcXHJcXG4gIGJvcmRlci1sZWZ0LXN0eWxlOiBkb3R0ZWQ7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICByaWdodDogMzAwcHg7XFxyXFxuICAvKiAvL3dpZHRoOiA0MHB4OyAqL1xcclxcbiAgaGVpZ2h0OjQ1cHggO1xcclxcbiAgXFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9tYWluLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHFCQUFxQjtJQUNyQixzRUFBdUQ7TUFDckQsOERBQStDO0VBQ25EO0VBQ0E7O0lBRUUsWUFBWTtJQUNaLFlBQVk7O0VBRWQ7RUFDQTtJQUNFLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIseUJBQXlCO0VBQzNCO0VBQ0E7Ozs7O0NBS0QsWUFBWTtDQUNaLFlBQVk7OztBQUdiO0FBQ0E7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixVQUFVO0VBQ1YsNEJBQTRCO0FBQzlCO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxNQUFNLFVBQVUsQ0FBQztFQUNqQixNQUFNLFlBQVksQ0FBQztFQUNuQixNQUFNLGFBQWEsQ0FBQztFQUNwQixNQUFNLFVBQVUsQ0FBQztFQUNqQixNQUFNLFVBQVUsQ0FBQztBQUNuQjtFQUNFO0lBQ0UsWUFBWTtJQUNaLFdBQVc7RUFDYjtFQUNBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixXQUFXO0VBQ2I7QUFDRjs7RUFFRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxVQUFVO0FBQ1o7QUFDQTtDQUNDLFlBQVk7Q0FDWixpQkFBaUI7QUFDbEI7QUFDQTtFQUNFLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCx3QkFBd0I7O0FBRTFCO0FBQ0E7O0VBRUUsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjs7QUFFbkI7RUFDRTtJQUNFLFlBQVk7SUFDWixZQUFZO0VBQ2Q7RUFDQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7RUFDQTtJQUNFLFlBQVk7TUFDViw2QkFBNkI7O0VBRWpDO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCO0VBQ0E7SUFDRTtFQUNGO0VBQ0E7SUFDRSxpQkFBaUI7SUFDakIsV0FBVztJQUNYLHNCQUFzQjtFQUN4QjtBQUNGO0VBQ0UsYUFBYTs7QUFFZjtBQUNBO0VBQ0UsZ0NBQWdDO0VBQ2hDLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixZQUFZOztBQUVkXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5sb2dvIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcclxcbiAgICAtd2Via2l0LW1hc2s6IHVybCgnLi9hc3NldHMvY2FyMS5zdmcnKSBuby1yZXBlYXQgY2VudGVyO1xcclxcbiAgICAgIG1hc2s6IHVybCgnLi9hc3NldHMvY2FyMS5zdmcnKSBuby1yZXBlYXQgY2VudGVyO1xcclxcbiAgfVxcclxcbiAgLm5hdmlnYXRpb24tYnV0dG9uXFxyXFxuICB7XFxyXFxuICAgIHdpZHRoOiAxNTBweDtcXHJcXG4gICAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgIFxcclxcbiAgfVxcclxcbiAgYnV0dG9ue1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBtYXJnaW46IDVweDtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBmb250LXNpemU6IGxhcmdlO1xcclxcbiAgICBib3JkZXItY29sb3I6ICM2NkNDRkY7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2NkNDRkY7XFxyXFxuICB9XFxyXFxuICAjcmFjZS1idXR0b25bZGlzYWJsZWRdLFxcclxcbiAgYnV0dG9uW2Rpc2FibGVkXSxcXHJcXG4gIGJ1dHRvbltkaXNhYmxlZF06aG92ZXIsXFxyXFxuICAubmF2aWdhdGlvbi1idXR0b246ZGlzYWJsZWQsXFxyXFxuICAubmF2aWdhdGlvbi1idXR0b25bZGlzYWJsZWRde1xcclxcbiBvcGFjaXR5OiAwLjU7XFxyXFxuIGNvbG9yOiB3aGl0ZTtcXHJcXG4gXFxyXFxuIFxcclxcbn1cXHJcXG4uYW5pbWF0ZXtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAganVzdGlmeS1zZWxmOmNlbnRlcjtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAzMCU7XFxyXFxuICBmb250LXNpemU6IHh4LWxhcmdlO1xcclxcbiAgY29sb3I6IHJlZDtcXHJcXG4gIG9wYWNpdHk6IDA7XFxyXFxuICBhbmltYXRpb246IGJsaW5rIDFzIGluZmluaXRlOyAgIFxcclxcbn1cXHJcXG4uaGlkZGVue1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBibGluayB7XFxyXFxuICAwJSAgIHtvcGFjaXR5OiAwO31cXHJcXG4gIDI1JSAge29wYWNpdHk6IDAuNTt9XFxyXFxuICA2MCUgIHtvcGFjaXR5OiAwLjc1O31cXHJcXG4gIDkwJSAge29wYWNpdHk6IDE7fVxcclxcbiAgOTklICB7b3BhY2l0eTogMDt9XFxyXFxufVxcclxcbiAgYnV0dG9uOmhvdmVye1xcclxcbiAgICBvcGFjaXR5OiAwLjg7XFxyXFxuICAgIGNvbG9yOiAjMzMzO1xcclxcbiAgfVxcclxcbiAgbGFiZWx7XFxyXFxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIGNvbG9yOiAjMzMzO1xcclxcbiAgfVxcclxcbi5zdGFydC1idXR0b24sXFxyXFxuLnN0b3AtYnV0dG9ue1xcclxcbiAgd2lkdGg6IDQwcHg7XFxyXFxuICBoZWlnaHQ6IDQwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbn1cXHJcXG4uc3RhcnQtYnV0dG9ue1xcclxcbiAgY29sb3I6IGdyZWVueWVsbG93O1xcclxcbn1cXHJcXG4uc3RvcC1idXR0b257XFxyXFxuICBjb2xvcjogcmVkO1xcclxcbn1cXHJcXG5pbnB1dHtcXHJcXG4gaGVpZ2h0OiAyNXB4O1xcclxcbiBmb250LXNpemU6IG1lZGl1bTtcXHJcXG59XFxyXFxuLmRpdi1jYXItc2V0LWZsZXh7XFxyXFxuICBkaXNwbGF5OmZsZXg7XFxyXFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbn1cXHJcXG4uYXBwbGljYXRpb24tYnV0dG9ue1xcclxcbiAgaGVpZ2h0OiAyNnB4O1xcclxcbiAgZm9udC1zaXplOiBtZWRpdW07XFxyXFxuICB3aWR0aDogODBweDtcXHJcXG4gIG1hcmdpbiA6IDBweCA1cHggMHB4IDVweDtcXHJcXG4gIFxcclxcbn1cXHJcXG4uYXBwbGljYXRpb24tdGV4dC1pbnB1dCxcXHJcXG4gLnVwZGF0ZS1jYXItdGV4dHtcXHJcXG4gIGJvdHRvbTogMTNweDtcXHJcXG4gIGhlaWdodDogMjBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDVweDtcXHJcXG4gIFxcclxcbn1cXHJcXG4gIHN2Z3tcXHJcXG4gICAgd2lkdGg6IDEwMHB4O1xcclxcbiAgICBoZWlnaHQ6IDYwcHg7ICAgXFxyXFxuICB9XFxyXFxuICAuc3ZnLXdpbm5lcntcXHJcXG4gICAgd2lkdGg6IDUwcHg7XFxyXFxuICAgIGhlaWdodDogMzBweDsgXFxyXFxuICB9XFxyXFxuICB0ZCx0aHtcXHJcXG4gICAgd2lkdGg6IDE1MHB4OyAgIFxcclxcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkOyAgXFxyXFxuICAgICBcXHJcXG4gIH1cXHJcXG4gIHRoe1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7ICBcXHJcXG4gIH1cXHJcXG4gIHRke1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXJcXHJcXG4gIH1cXHJcXG4gIGhye1xcclxcbiAgICBtYXJnaW4tdG9wOiAtMTVweDsgICAgXFxyXFxuICAgIGhlaWdodDogNXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcclxcbiAgfVxcclxcbi50cmFjay1mbGV4e1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIFxcclxcbn1cXHJcXG4uZmluaXNoLWxpbmV7XFxyXFxuICBib3JkZXItbGVmdDogdGhpY2sgc29saWQgI2ZmMDAwMDtcXHJcXG4gIGJvcmRlci1sZWZ0LXN0eWxlOiBkb3R0ZWQ7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICByaWdodDogMzAwcHg7XFxyXFxuICAvKiAvL3dpZHRoOiA0MHB4OyAqL1xcclxcbiAgaGVpZ2h0OjQ1cHggO1xcclxcbiAgXFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgJiYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXSk7IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBvcHRpb25zID0ge307XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlLCBuby1wYXJhbS1yZWFzc2lnblxuXG5cbiAgdXJsID0gdXJsICYmIHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmw7XG5cbiAgaWYgKHR5cGVvZiB1cmwgIT09IFwic3RyaW5nXCIpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl0vLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xyXG4vLyBleHBvcnQgIGNsYXNzIEFwaXtcclxudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuZGVsZXRlV2lubmVyID0gZXhwb3J0cy51cGRhdGVXaW5uZXIgPSBleHBvcnRzLmNyZWF0ZVdpbm5lciA9IGV4cG9ydHMuZ2V0QWxsV2lubmVycyA9IGV4cG9ydHMuZ2V0V2lubmVycyA9IGV4cG9ydHMuZW5naW5lRHJpdmUgPSBleHBvcnRzLmVuZ2luZVN0b3AgPSBleHBvcnRzLmVuZ2luZVN0YXJ0ID0gZXhwb3J0cy51cGRhdGVDYXIgPSBleHBvcnRzLnNlbGVjdENhciA9IGV4cG9ydHMuZGVsZXRlQ2FyID0gZXhwb3J0cy5jcmVhdGVDYXIgPSBleHBvcnRzLmdldEFsbENhcnMgPSBleHBvcnRzLmdldENhcnMgPSBleHBvcnRzLndpbm5lcnNQYWdlTGltaXQgPSBleHBvcnRzLmdhcmFnZVBhZ2VMaW1pdCA9IGV4cG9ydHMud2lubmVyc1VybCA9IHZvaWQgMDtcclxuY29uc3QgQ2FyXzEgPSByZXF1aXJlKFwiLi9DYXJcIik7XHJcbmNvbnN0IGJhc2VVcmwgPSBcImh0dHA6Ly8xMjcuMC4wLjE6MzAwMFwiO1xyXG5jb25zdCBnYXJhZ2VVcmwgPSBgJHtiYXNlVXJsfS9nYXJhZ2VgO1xyXG5jb25zdCBlbmdpblVybCA9IGAke2Jhc2VVcmx9L2VuZ2luZWA7XHJcbmV4cG9ydHMud2lubmVyc1VybCA9IGAke2Jhc2VVcmx9L3dpbm5lcnNgO1xyXG5leHBvcnRzLmdhcmFnZVBhZ2VMaW1pdCA9IDc7XHJcbmV4cG9ydHMud2lubmVyc1BhZ2VMaW1pdCA9IDEwO1xyXG5jb25zdCBnZXRDYXJzID0gKHBhZ2UpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgdmFyIF9hO1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBmZXRjaChgJHtnYXJhZ2VVcmx9P19wYWdlPSR7cGFnZX0mX2xpbWl0PSR7ZXhwb3J0cy5nYXJhZ2VQYWdlTGltaXR9YCk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGNhcnM6IHlpZWxkIHJlc3BvbnNlLmpzb24oKSxcclxuICAgICAgICBjb3VudDogKF9hID0gcmVzcG9uc2UuaGVhZGVycykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmdldCgnWC1Ub3RhbC1Db3VudCcpXHJcbiAgICB9O1xyXG59KTtcclxuZXhwb3J0cy5nZXRDYXJzID0gZ2V0Q2FycztcclxuY29uc3QgZ2V0QWxsQ2FycyA9ICgpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBmZXRjaChgJHtnYXJhZ2VVcmx9YCk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGNhcnM6IHlpZWxkIHJlc3BvbnNlLmpzb24oKSxcclxuICAgIH07XHJcbn0pO1xyXG5leHBvcnRzLmdldEFsbENhcnMgPSBnZXRBbGxDYXJzO1xyXG5jb25zdCBjcmVhdGVDYXIgPSAoYm9keSkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICByZXR1cm4gKHlpZWxkIGZldGNoKGAke2dhcmFnZVVybH1gLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoYm9keSksXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgfSxcclxuICAgIH0pKTtcclxufSk7XHJcbmV4cG9ydHMuY3JlYXRlQ2FyID0gY3JlYXRlQ2FyO1xyXG4vLy9cclxuY29uc3QgZGVsZXRlQ2FyID0gKGlkKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgIHJldHVybiAoeWllbGQgZmV0Y2goYCR7Z2FyYWdlVXJsfS8ke2lkfWAsIHtcclxuICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxyXG4gICAgfSkpO1xyXG59KTtcclxuZXhwb3J0cy5kZWxldGVDYXIgPSBkZWxldGVDYXI7XHJcbi8vXHJcbmNvbnN0IHNlbGVjdENhciA9IChpZCkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGZldGNoKGAke2dhcmFnZVVybH0vJHtpZH1gLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgIH0pO1xyXG4gICAgbGV0IHJlcyA9IHlpZWxkIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIGxldCBjYXIgPSBuZXcgQ2FyXzEuZGVmYXVsdCgpO1xyXG4gICAgT2JqZWN0LmFzc2lnbihjYXIsIHJlcyk7XHJcbiAgICByZXR1cm4gY2FyO1xyXG59KTtcclxuZXhwb3J0cy5zZWxlY3RDYXIgPSBzZWxlY3RDYXI7XHJcbmNvbnN0IHVwZGF0ZUNhciA9IChjYXIpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgcmV0dXJuICh5aWVsZCBmZXRjaChgJHtnYXJhZ2VVcmx9LyR7Y2FyLmlkfWAsIHtcclxuICAgICAgICBtZXRob2Q6ICdQVVQnLFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgY29sb3I6IGNhci5jb2xvciwgbmFtZTogY2FyLm5hbWUgfSksXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgfSxcclxuICAgIH0pKTtcclxufSk7XHJcbmV4cG9ydHMudXBkYXRlQ2FyID0gdXBkYXRlQ2FyO1xyXG5jb25zdCBlbmdpbmVTdGFydCA9IChpZCkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGZldGNoKGAke2VuZ2luVXJsfT9pZD0ke2lkfSZzdGF0dXM9c3RhcnRlZGAsIHtcclxuICAgICAgICBtZXRob2Q6ICdQQVRDSCdcclxuICAgIH0pO1xyXG4gICAgbGV0IHJlc3VsdCA9IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn0pO1xyXG5leHBvcnRzLmVuZ2luZVN0YXJ0ID0gZW5naW5lU3RhcnQ7XHJcbmNvbnN0IGVuZ2luZVN0b3AgPSAoaWQpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBmZXRjaChgJHtlbmdpblVybH0/aWQ9JHtpZH0mc3RhdHVzPXN0b3BwZWRgLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnUEFUQ0gnXHJcbiAgICB9KTtcclxuICAgIGxldCByZXN1bHQgPSByZXNwb25zZS5qc29uKCk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59KTtcclxuZXhwb3J0cy5lbmdpbmVTdG9wID0gZW5naW5lU3RvcDtcclxuY29uc3QgZW5naW5lRHJpdmUgPSAoaWQpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBmZXRjaChgJHtlbmdpblVybH0/aWQ9JHtpZH0mc3RhdHVzPWRyaXZlYCwge1xyXG4gICAgICAgIG1ldGhvZDogJ1BBVENIJ1xyXG4gICAgfSk7XHJcbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSB9O1xyXG4gICAgfVxyXG59KTtcclxuZXhwb3J0cy5lbmdpbmVEcml2ZSA9IGVuZ2luZURyaXZlO1xyXG5jb25zdCBnZXRXaW5uZXJzID0gKHBhZ2UsIHNvcnQsIG9yZGVyKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgIHZhciBfYjtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgZmV0Y2goYCR7ZXhwb3J0cy53aW5uZXJzVXJsfT9fcGFnZT0ke3BhZ2V9Jl9saW1pdD0ke2V4cG9ydHMud2lubmVyc1BhZ2VMaW1pdH0mX3NvcnQ9JHtzb3J0fSZfb3JkZXI9JHtvcmRlcn1gKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgd2lubmVyczogeWllbGQgcmVzcG9uc2UuanNvbigpLFxyXG4gICAgICAgIGNvdW50OiAoX2IgPSByZXNwb25zZS5oZWFkZXJzKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuZ2V0KCdYLVRvdGFsLUNvdW50JylcclxuICAgIH07XHJcbn0pO1xyXG5leHBvcnRzLmdldFdpbm5lcnMgPSBnZXRXaW5uZXJzO1xyXG5jb25zdCBnZXRBbGxXaW5uZXJzID0gKCkgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGZldGNoKGAke2V4cG9ydHMud2lubmVyc1VybH1gKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgd2lubmVyczogeWllbGQgcmVzcG9uc2UuanNvbigpLFxyXG4gICAgfTtcclxufSk7XHJcbmV4cG9ydHMuZ2V0QWxsV2lubmVycyA9IGdldEFsbFdpbm5lcnM7XHJcbmNvbnN0IGNyZWF0ZVdpbm5lciA9IChib2R5KSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgIHJldHVybiAoeWllbGQgZmV0Y2goYCR7ZXhwb3J0cy53aW5uZXJzVXJsfWAsIHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShib2R5KSxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICB9LFxyXG4gICAgfSkpO1xyXG59KTtcclxuZXhwb3J0cy5jcmVhdGVXaW5uZXIgPSBjcmVhdGVXaW5uZXI7XHJcbmNvbnN0IHVwZGF0ZVdpbm5lciA9ICh3aW5uZXIpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgcmV0dXJuICh5aWVsZCBmZXRjaChgJHtleHBvcnRzLndpbm5lcnNVcmx9LyR7d2lubmVyLmlkfWAsIHtcclxuICAgICAgICBtZXRob2Q6ICdQVVQnLFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgd2luczogd2lubmVyLndpbnMsIHRpbWU6IHdpbm5lci50aW1lIH0pLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgIH0sXHJcbiAgICB9KSk7XHJcbn0pO1xyXG5leHBvcnRzLnVwZGF0ZVdpbm5lciA9IHVwZGF0ZVdpbm5lcjtcclxuLy9cclxuY29uc3QgZGVsZXRlV2lubmVyID0gKGlkKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgIHJldHVybiAoeWllbGQgZmV0Y2goYCR7ZXhwb3J0cy53aW5uZXJzVXJsfS8ke2lkfWAsIHtcclxuICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxyXG4gICAgfSkpO1xyXG59KTtcclxuZXhwb3J0cy5kZWxldGVXaW5uZXIgPSBkZWxldGVXaW5uZXI7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuQ2FyID0gdm9pZCAwO1xyXG5jbGFzcyBDYXIge1xyXG4gICAgY29uc3RydWN0b3IoX25hbWUsIF9jb2xvciwgX2lkKSB7XHJcbiAgICAgICAgdGhpcy5jYXJEaXN0YW5zZSA9IDA7XHJcbiAgICAgICAgdGhpcy5jb2xvciA9IF9jb2xvciA9PT0gdW5kZWZpbmVkID8gdGhpcy5zZXRIZXhSYW5kb21Db2xvcigpIDogX2NvbG9yO1xyXG4gICAgICAgIHRoaXMubmFtZSA9IF9uYW1lID09PSB1bmRlZmluZWQgPyB0aGlzLnNldFJhbmRvbU5hbWUoKSA6IF9uYW1lO1xyXG4gICAgICAgIHRoaXMuaWQgPSBfaWQgPT09IHVuZGVmaW5lZCA/IDAgOiBfaWQ7XHJcbiAgICB9XHJcbiAgICBzZXQgc3RhdHVzKHN0YXR1cykge1xyXG4gICAgICAgIHZhciBfYSwgX2IsIF9jLCBfZCwgX2UsIF9mLCBfZywgX2g7XHJcbiAgICAgICAgdGhpcy5fc3RhdHVzID0gc3RhdHVzO1xyXG4gICAgICAgIGlmICh0aGlzLl9zdGF0dXMgPT09ICdkcml2ZScpIHtcclxuICAgICAgICAgICAgKChfYSA9IHRoaXMuY2FyVmlldy5wYXJlbnROb2RlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EucHJldmlvdXNTaWJsaW5nKS5xdWVyeVNlbGVjdG9yKCcuc3RvcC1idXR0b24nKS5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAoKF9iID0gdGhpcy5jYXJWaWV3LnBhcmVudE5vZGUpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5wcmV2aW91c1NpYmxpbmcpLnF1ZXJ5U2VsZWN0b3IoJy5zdGFydC1idXR0b24nKS5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICgoX2MgPSB0aGlzLmNhclZpZXcucGFyZW50Tm9kZSkgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLnByZXZpb3VzU2libGluZykucXVlcnlTZWxlY3RvcignLnNlbGVjdCcpLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgKChfZCA9IHRoaXMuY2FyVmlldy5wYXJlbnROb2RlKSA9PT0gbnVsbCB8fCBfZCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2QucHJldmlvdXNTaWJsaW5nKS5xdWVyeVNlbGVjdG9yKCcuZGVsZXRlJykuZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgKChfZSA9IHRoaXMuY2FyVmlldy5wYXJlbnROb2RlKSA9PT0gbnVsbCB8fCBfZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2UucHJldmlvdXNTaWJsaW5nKS5xdWVyeVNlbGVjdG9yKCcuc3RhcnQtYnV0dG9uJykuZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgKChfZiA9IHRoaXMuY2FyVmlldy5wYXJlbnROb2RlKSA9PT0gbnVsbCB8fCBfZiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2YucHJldmlvdXNTaWJsaW5nKS5xdWVyeVNlbGVjdG9yKCcuc3RvcC1idXR0b24nKS5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICgoX2cgPSB0aGlzLmNhclZpZXcucGFyZW50Tm9kZSkgPT09IG51bGwgfHwgX2cgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9nLnByZXZpb3VzU2libGluZykucXVlcnlTZWxlY3RvcignLnNlbGVjdCcpLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICgoX2ggPSB0aGlzLmNhclZpZXcucGFyZW50Tm9kZSkgPT09IG51bGwgfHwgX2ggPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9oLnByZXZpb3VzU2libGluZykucXVlcnlTZWxlY3RvcignLmRlbGV0ZScpLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc2V0SGV4UmFuZG9tQ29sb3IoKSB7XHJcbiAgICAgICAgbGV0IFIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyNTUpO1xyXG4gICAgICAgIGxldCBHID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjU1KTtcclxuICAgICAgICBsZXQgQiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDI1NSk7XHJcbiAgICAgICAgbGV0IFJoZXggPSBSLnRvU3RyaW5nKDE2KTtcclxuICAgICAgICBsZXQgR2hleCA9IEcudG9TdHJpbmcoMTYpO1xyXG4gICAgICAgIGxldCBCaGV4ID0gQi50b1N0cmluZygxNik7XHJcbiAgICAgICAgUmhleCA9IFJoZXgubGVuZ3RoID09PSAxID8gXCIwXCIgOiBSaGV4O1xyXG4gICAgICAgIEdoZXggPSBHaGV4Lmxlbmd0aCA9PT0gMSA/IFwiMFwiIDogR2hleDtcclxuICAgICAgICBCaGV4ID0gQmhleC5sZW5ndGggPT09IDEgPyBcIjBcIiA6IEJoZXg7XHJcbiAgICAgICAgcmV0dXJuIFwiI1wiICsgUmhleCArIEdoZXggKyBCaGV4O1xyXG4gICAgfVxyXG4gICAgc2V0UmFuZG9tTmFtZSgpIHtcclxuICAgICAgICBsZXQgbmFtZXMgPSBbXHJcbiAgICAgICAgICAgIFwiVGVzbGFcIixcclxuICAgICAgICAgICAgXCJCTVdcIixcclxuICAgICAgICAgICAgXCJGb3JkXCIsXHJcbiAgICAgICAgICAgIFwiS2lhXCIsXHJcbiAgICAgICAgICAgIFwiUmVub1wiLFxyXG4gICAgICAgICAgICBcIk9wZWxcIixcclxuICAgICAgICAgICAgXCJBdWRlXCIsXHJcbiAgICAgICAgICAgIFwiTGFkYVwiLFxyXG4gICAgICAgICAgICBcInNrb2RhXCIsXHJcbiAgICAgICAgICAgIFwiVm9sdm9cIixcclxuICAgICAgICBdO1xyXG4gICAgICAgIGxldCBtb2RlbHMgPSBbXHJcbiAgICAgICAgICAgIFwiTW9kZWwgQVwiLFxyXG4gICAgICAgICAgICBcIk1vZGVsIEJcIixcclxuICAgICAgICAgICAgXCJNb2RlbCBDXCIsXHJcbiAgICAgICAgICAgIFwiTW9kZWwgRFwiLFxyXG4gICAgICAgICAgICBcIk1vZGVsIEVcIixcclxuICAgICAgICAgICAgXCJNb2RlbCBGXCIsXHJcbiAgICAgICAgICAgIFwiTW9kZWwgR1wiLFxyXG4gICAgICAgICAgICBcIk1vZGVsIEhcIixcclxuICAgICAgICAgICAgXCJNb2RlbCBJXCIsXHJcbiAgICAgICAgICAgIFwiTW9kZWwgR1wiLFxyXG4gICAgICAgIF07XHJcbiAgICAgICAgbGV0IHJhbmRvbU5hbWUgPSBuYW1lc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBuYW1lcy5sZW5ndGgpXTtcclxuICAgICAgICBsZXQgcmFuZG9tTW9kZWwgPSBtb2RlbHNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbW9kZWxzLmxlbmd0aCldO1xyXG4gICAgICAgIHJldHVybiByYW5kb21OYW1lICsgXCIgXCIgKyByYW5kb21Nb2RlbDtcclxuICAgIH1cclxuICAgIGdldENhclZpZXcoY29sb3IpIHtcclxuICAgICAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBkaXYuaWQgPSB0aGlzLmlkLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgbGV0IHN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIFwic3ZnXCIpO1xyXG4gICAgICAgIGxldCBjYXJVc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLCBcInVzZVwiKTtcclxuICAgICAgICBjYXJVc2Uuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBcIi4vYXNzZXRzL2NhclNwcml0ZS5zdmcjY2FyXCIpO1xyXG4gICAgICAgIGNhclVzZS5zZXRBdHRyaWJ1dGUoXCJmaWxsXCIsIGNvbG9yKTtcclxuICAgICAgICBzdmcuYXBwZW5kQ2hpbGQoY2FyVXNlKTtcclxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoc3ZnKTtcclxuICAgICAgICB0aGlzLmNhclZpZXcgPSBkaXY7XHJcbiAgICAgICAgcmV0dXJuIGRpdjtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLkNhciA9IENhcjtcclxuZXhwb3J0cy5kZWZhdWx0ID0gQ2FyO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuR2FyYWdlQ29udHJvbGxlciA9IHZvaWQgMDtcclxuLy9pbXBvcnQgeyBHYXJhZ2UgfSBmcm9tICcuL0dhcmFnZSc7XHJcbmNvbnN0IGFwaSA9IHJlcXVpcmUoXCIuL0FwaVwiKTtcclxuY29uc3QgR2FyYWdlVmlld18xID0gcmVxdWlyZShcIi4vR2FyYWdlVmlld1wiKTtcclxuY29uc3QgQ2FyXzEgPSByZXF1aXJlKFwiLi9DYXJcIik7XHJcbmNvbnN0IFdpbm5lcnNDb250cm9sbGVyXzEgPSByZXF1aXJlKFwiLi9XaW5uZXJzQ29udHJvbGxlclwiKTtcclxuY29uc3QgV2lubmVyXzEgPSByZXF1aXJlKFwiLi9XaW5uZXJcIik7XHJcbmNsYXNzIEdhcmFnZUNvbnRyb2xsZXIge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy53aW5uZXJzQ29udHJvbGxlciA9IG5ldyBXaW5uZXJzQ29udHJvbGxlcl8xLldpbm5lcnNDb250cm9sbGVyKCk7XHJcbiAgICAgICAgdGhpcy5jYXJzID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgdGhpcy5yYWNlQ2FycyA9IG5ldyBBcnJheTtcclxuICAgICAgICB0aGlzLmNyZWF0ZWRDYXIgPSBuZXcgQ2FyXzEuZGVmYXVsdCgndW50aXRsZWQnLCAnIzAwMDAwMDAnKTtcclxuICAgICAgICAvLyB0aGlzLmdhcmFnZSA9IG5ldyBHYXJhZ2UoKTtcclxuICAgICAgICB0aGlzLnBhZ2UgPSAxO1xyXG4gICAgICAgIHRoaXMuZ2FyYWdlVmlldyA9IG5ldyBHYXJhZ2VWaWV3XzEuZGVmYXVsdCgpO1xyXG4gICAgfVxyXG4gICAgc2V0IGlzUmFjZShpc1JhY2UpIHtcclxuICAgICAgICB0aGlzLl9pc1JhY2UgPSBpc1JhY2U7XHJcbiAgICAgICAgaWYgKHRoaXMuX2lzUmFjZSkge1xyXG4gICAgICAgICAgICB0aGlzLmdhcmFnZVZpZXcuc2V0UmFjZU1vZGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FyYWdlVmlldy5zZXRDb21tb25Nb2RlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc2V0IHBhZ2UocGFnZSkge1xyXG4gICAgICAgIHRoaXMuX3BhZ2UgPSBwYWdlO1xyXG4gICAgICAgIHRoaXMuZ2V0Z2FyYWdlKCk7XHJcbiAgICB9XHJcbiAgICBnZXRnYXJhZ2UoKSB7XHJcbiAgICAgICAgYXBpLmdldENhcnModGhpcy5fcGFnZSkudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNhcnMubGVuZ3RoID0gMDtcclxuICAgICAgICAgICAgbGV0IGNhcnMgPSByZXN1bHQuY2FycztcclxuICAgICAgICAgICAgbGV0IGNhciA9IG5ldyBDYXJfMS5kZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGNhcnMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGNhciA9IG5ldyBDYXJfMS5kZWZhdWx0KGl0ZW0ubmFtZSwgaXRlbS5jb2xvciwgaXRlbS5pZCk7XHJcbiAgICAgICAgICAgICAgICBpdGVtLmNhclZpZXcgPSBjYXIuZ2V0Q2FyVmlldyhpdGVtLmNvbG9yKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2Fycy5wdXNoKGNhcik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBsZXQgdG90YWwgPSByZXN1bHQuY291bnQgPT09IG51bGwgPyAwIDogTnVtYmVyKHJlc3VsdC5jb3VudCk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FyYWdlVmlldy5yZW5kZXJDYXJzKHRoaXMuY2FycywgdGhpcy5fcGFnZSwgdG90YWwsIGFwaS5nYXJhZ2VQYWdlTGltaXQpO1xyXG4gICAgICAgIH0sIGVycm9yID0+IHsgY29uc29sZS5sb2coZXJyb3IpOyB9KTtcclxuICAgIH1cclxuICAgIGFkZENhcigpIHtcclxuICAgICAgICBhcGkuY3JlYXRlQ2FyKHRoaXMuY3JlYXRlZENhcikudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0Z2FyYWdlKCk7XHJcbiAgICAgICAgfSwgZXJyb3IgPT4geyBjb25zb2xlLmxvZyhlcnJvcik7IH0pO1xyXG4gICAgfVxyXG4gICAgZGVsZXRlQ2FyKGlkKSB7XHJcbiAgICAgICAgdmFyIF9hO1xyXG4gICAgICAgIGxldCBmaW5kV2lubmVyID0gdGhpcy53aW5uZXJzQ29udHJvbGxlci53aW5uZXJzLmZpbmQocCA9PiBwLmlkID09PSBpZCk7XHJcbiAgICAgICAgaWYgKGZpbmRXaW5uZXIgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBhcGkuZGVsZXRlV2lubmVyKGZpbmRXaW5uZXIuaWQpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy53aW5uZXJzQ29udHJvbGxlci5nZXRXaW5uZXJzKCk7XHJcbiAgICAgICAgICAgIH0sIGVycm9yID0+IHsgY29uc29sZS5sb2coZXJyb3IpOyB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYXBpLmRlbGV0ZUNhcihpZCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNhcnMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9wYWdlID0gdGhpcy5fcGFnZSA9PT0gMSA/IDEgOiB0aGlzLl9wYWdlIC0gMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmdldGdhcmFnZSgpO1xyXG4gICAgICAgIH0sIGVycm9yID0+IHsgY29uc29sZS5sb2coZXJyb3IpOyB9KTtcclxuICAgICAgICBpZiAoKChfYSA9IHRoaXMuc2VsZWN0ZWRDYXIpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5pZCkgPT09IGlkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRDYXIgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc2VsZWN0Q2FyKGlkKSB7XHJcbiAgICAgICAgYXBpLnNlbGVjdENhcihpZCkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRDYXIgPSByZXN1bHQ7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FyYWdlVmlldy5yZW5kZXJTZWxlY3RlZENhcih0aGlzLnNlbGVjdGVkQ2FyKTtcclxuICAgICAgICB9LCBlcnJvciA9PiB7IGNvbnNvbGUubG9nKGVycm9yKTsgfSk7XHJcbiAgICB9XHJcbiAgICB1cGRhdGVDYXIoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRDYXIgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBhcGkudXBkYXRlQ2FyKHRoaXMuc2VsZWN0ZWRDYXIpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRnYXJhZ2UoKTtcclxuICAgICAgICAgICAgfSwgZXJyb3IgPT4geyBjb25zb2xlLmxvZyhlcnJvcik7IH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdlbmVyYXRlQ2FycygpIHtcclxuICAgICAgICB0aGlzLmlzUmFjZSA9IGZhbHNlO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTAwOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGNhciA9IG5ldyBDYXJfMS5kZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGFwaS5jcmVhdGVDYXIoeyBuYW1lOiBjYXIubmFtZSwgY29sb3I6IGNhci5jb2xvciB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5nZXRnYXJhZ2UoKTtcclxuICAgIH1cclxuICAgIGVuZ2luZVN0b3AoaWQpIHtcclxuICAgICAgICBhcGkuZW5naW5lU3RvcChpZCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBhbmltYXRlZENhciA9IHRoaXMuY2Fycy5maW5kKHAgPT4gcC5pZCA9PSBpZCk7XHJcbiAgICAgICAgICAgIGlmIChhbmltYXRlZENhciAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBhbmltYXRlZENhci5zdGF0dXMgPSAnc3RvcCc7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3BDYXIoYW5pbWF0ZWRDYXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXNldCgpIHtcclxuICAgICAgICBpZiAodGhpcy5faXNSYWNlKSB7XHJcbiAgICAgICAgICAgIGxldCBjYXJzID0gdGhpcy5jYXJzO1xyXG4gICAgICAgICAgICBjYXJzLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgIGl0ZW0uc3RhdHVzID0gJ3N0b3AnO1xyXG4gICAgICAgICAgICAgICAgYXBpLmVuZ2luZVN0b3AoaXRlbS5pZCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdG9wQ2FyKGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLmlzUmFjZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmdhcmFnZVZpZXcuc2V0Q29tbW9uTW9kZSgpO1xyXG4gICAgfVxyXG4gICAgZW5naW5lU3RhcnQoaWQsIGlzUmFjZSkge1xyXG4gICAgICAgIC8vIHRoaXMuZ2FyYWdlVmlldy5zZXRDYXJSYWNlTW9kZShpZCk7XHJcbiAgICAgICAgYXBpLmVuZ2luZVN0YXJ0KGlkKS50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgIGxldCBhbmltYXRlZENhciA9IHRoaXMuY2Fycy5maW5kKHAgPT4gcC5pZCA9PSBpZCk7XHJcbiAgICAgICAgICAgIGlmIChhbmltYXRlZENhciAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBhbmltYXRlZENhci5zdGF0dXMgPSAnZHJpdmUnO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbmltYXRlQ2FyKGFuaW1hdGVkQ2FyLCByZXN1bHQudmVsb2NpdHksIHJlc3VsdC5kaXN0YW5jZSwgaXNSYWNlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZW5naW5lRHJpdmUoYW5pbWF0ZWRDYXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByYWNlKCkge1xyXG4gICAgICAgIHRoaXMuaXNXaW5uZXJEZXRlY3RlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMucmFjZUNhcnMubGVuZ3RoID0gMDtcclxuICAgICAgICBsZXQgY2FycyA9IHRoaXMuY2FycztcclxuICAgICAgICBjYXJzLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgYXBpLmVuZ2luZVN0YXJ0KGl0ZW0uaWQpLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYW5pbWF0ZUNhcihpdGVtLCByZXN1bHQudmVsb2NpdHksIHJlc3VsdC5kaXN0YW5jZSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVuZ2luZURyaXZlKGl0ZW0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmlzUmFjZSA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBhbmltYXRlQ2FyKGFuaW1hdGVkQ2FyLCB2ZWxvY2l0eSwgZGlzdGFuY2UsIGlzUmFjZSkge1xyXG4gICAgICAgIGxldCBjdXJyZW50d2lkdGggPSBkb2N1bWVudC5ib2R5LnNjcm9sbFdpZHRoO1xyXG4gICAgICAgIGxldCBwaXhlbFNjYWxlID0gZGlzdGFuY2UgLyAoY3VycmVudHdpZHRoIC0gMzAwKTtcclxuICAgICAgICBsZXQgc3RhcnQ7XHJcbiAgICAgICAgbGV0IHN0ZXAgPSAodGltZXN0YW1wKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChzdGFydCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBzdGFydCA9IHRpbWVzdGFtcDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBkaWZmID0gdGltZXN0YW1wIC0gc3RhcnQ7XHJcbiAgICAgICAgICAgIGFuaW1hdGVkQ2FyLmNhckRpc3RhbnNlID0gdmVsb2NpdHkgKiBkaWZmO1xyXG4gICAgICAgICAgICBhbmltYXRlZENhci5jYXJWaWV3LnN0eWxlLnRyYW5zZm9ybSA9XHJcbiAgICAgICAgICAgICAgICBcInRyYW5zbGF0ZVgoXCIgKyBhbmltYXRlZENhci5jYXJEaXN0YW5zZSAvIHBpeGVsU2NhbGUgKyBcInB4KVwiO1xyXG4gICAgICAgICAgICBpZiAoYW5pbWF0ZWRDYXIuY2FyRGlzdGFuc2UgPD0gZGlzdGFuY2UpIHtcclxuICAgICAgICAgICAgICAgIGFuaW1hdGVkQ2FyLmFuaW1hdGlvbklkID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShzdGVwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoYW5pbWF0ZWRDYXIuY2FyRGlzdGFuc2UgPj0gZGlzdGFuY2UpIHtcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5pc1dpbm5lckRldGVjdGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZWRDYXIudGltZSA9IChhbmltYXRlZENhci5jYXJEaXN0YW5zZSkgLyAodmVsb2NpdHkgKiAxMDAwKTtcclxuICAgICAgICAgICAgICAgICAgICBhbmltYXRlZENhci50aW1lID0gTnVtYmVyKGFuaW1hdGVkQ2FyLnRpbWUudG9GaXhlZCgzKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1dpbm5lckRldGVjdGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdhcmFnZVZpZXcuYW5pbWF0ZVdpbm5lcignV2lubmVyIGlzICcgKyBhbmltYXRlZENhci5uYW1lICsgJyB3aXRoICcgKyBhbmltYXRlZENhci50aW1lKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVdpbm5lcihhbmltYXRlZENhcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJhY2VDYXJzLnB1c2goYW5pbWF0ZWRDYXIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucmFjZUNhcnMubGVuZ3RoID09PSB0aGlzLmNhcnMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNSYWNlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc3RlcCk7XHJcbiAgICB9XHJcbiAgICBzdG9wQW5pbWF0ZUNhcihpZCkge1xyXG4gICAgICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZShOdW1iZXIoaWQpKTtcclxuICAgIH1cclxuICAgIGVuZ2luZURyaXZlKGFuaW1hdGVDYXIpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgICAgICB5aWVsZCBhcGkuZW5naW5lRHJpdmUoYW5pbWF0ZUNhci5pZCkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXJlc3VsdC5zdWNjZXNzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXBpLmVuZ2luZVN0b3AoYW5pbWF0ZUNhci5pZCkudGhlbjtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3BBbmltYXRlQ2FyKGFuaW1hdGVDYXIuYW5pbWF0aW9uSWQudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yYWNlQ2Fycy5wdXNoKGFuaW1hdGVDYXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnJhY2VDYXJzLmxlbmd0aCA9PT0gdGhpcy5jYXJzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzUmFjZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBzdG9wQ2FyKGFuaW1hdGVkQ2FyKSB7XHJcbiAgICAgICAgdGhpcy5zdG9wQW5pbWF0ZUNhcihhbmltYXRlZENhci5hbmltYXRpb25JZC50b1N0cmluZygpKTtcclxuICAgICAgICBhbmltYXRlZENhci5jYXJWaWV3LnN0eWxlLnRyYW5zZm9ybSA9ICdUcmFuc2xhdGVYKDBweCknO1xyXG4gICAgICAgIC8vICB0aGlzLmdhcmFnZVZpZXcuc2V0Q2FyR2FyYWdlTW9kZShhbmltYXRlZENhci5pZCk7XHJcbiAgICB9XHJcbiAgICB1cGRhdGVXaW5uZXIocmFjZVdpbm5lcikge1xyXG4gICAgICAgIGxldCB3aW5uZXJzID0gdGhpcy53aW5uZXJzQ29udHJvbGxlci53aW5uZXJzO1xyXG4gICAgICAgIGxldCBmaW5kV2lubmVyID0gd2lubmVycy5maW5kKHAgPT4gcC5pZCA9PT0gcmFjZVdpbm5lci5pZCk7XHJcbiAgICAgICAgaWYgKGZpbmRXaW5uZXIgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBmaW5kV2lubmVyLndpbnMgKz0gMTtcclxuICAgICAgICAgICAgZmluZFdpbm5lci50aW1lID0gTnVtYmVyKE1hdGgubWluKGZpbmRXaW5uZXIudGltZSwgcmFjZVdpbm5lci50aW1lKS50b0ZpeGVkKDMpKTtcclxuICAgICAgICAgICAgYXBpLnVwZGF0ZVdpbm5lcihmaW5kV2lubmVyKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMud2lubmVyc0NvbnRyb2xsZXIuZ2V0V2lubmVycygpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCB3aW5uZXIgPSBuZXcgV2lubmVyXzEuZGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB3aW5uZXIuaWQgPSByYWNlV2lubmVyLmlkO1xyXG4gICAgICAgICAgICB3aW5uZXIud2lucyA9IDE7XHJcbiAgICAgICAgICAgIHdpbm5lci50aW1lID0gcmFjZVdpbm5lci50aW1lO1xyXG4gICAgICAgICAgICBhcGkuY3JlYXRlV2lubmVyKHsgaWQ6IHJhY2VXaW5uZXIuaWQsIHdpbnM6IDEsIHRpbWU6IHJhY2VXaW5uZXIudGltZSB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMud2lubmVyc0NvbnRyb2xsZXIuZ2V0V2lubmVycygpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5HYXJhZ2VDb250cm9sbGVyID0gR2FyYWdlQ29udHJvbGxlcjtcclxuLy8vL1xyXG4vL2Z1bmN0aW9uIGFkZFdpbm5lcnNMaXN0ZW5lcnMoKTp2b2lke1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLkdhcmFnZVZpZXcgPSB2b2lkIDA7XHJcbmNsYXNzIEdhcmFnZVZpZXcge1xyXG4gICAgLy8gIGdhcmFnZTpHYXJhZ2U7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAvLyB0aGlzLmdhcmFnZSA9IG5ldyBHYXJhZ2UoKTtcclxuICAgICAgICB0aGlzLnJlbmRlckdhcmFnZSgpO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyR2FyYWdlKCkge1xyXG4gICAgICAgIHRoaXMucmVuZGVyTGF5b3V0KCk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJHYXJhZ2VDb250cm9sKCk7XHJcbiAgICB9XHJcbiAgICByZW5kZXJMYXlvdXQoKSB7XHJcbiAgICAgICAgbGV0IGRpdkdhcmFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaXYtZ2FyYWdlJyk7XHJcbiAgICAgICAgbGV0IGRpdkNyZWF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGRpdkNyZWF0ZS5jbGFzc05hbWUgPSAnZGl2LWNhci1zZXQtZmxleCc7XHJcbiAgICAgICAgZGl2Q3JlYXRlLmlkID0gJ2Rpdi1jcmVhdGUnO1xyXG4gICAgICAgIGxldCBkaXZVcGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBkaXZVcGRhdGUuY2xhc3NOYW1lID0gJ2Rpdi1jYXItc2V0LWZsZXgnO1xyXG4gICAgICAgIGRpdlVwZGF0ZS5pZCA9ICdkaXYtdXBkYXRlJztcclxuICAgICAgICBsZXQgZGl2QnV0dG9uQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgZGl2QnV0dG9uQmFyLmNsYXNzTmFtZSA9ICdkaXYtY2FyLXNldC1mbGV4JztcclxuICAgICAgICBkaXZCdXR0b25CYXIuaWQgPSAnZGl2LWJ1dHRvbnMtYmFyJztcclxuICAgICAgICBsZXQgZGl2Q2Fyc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGRpdkNhcnNDb250YWluZXIuY2xhc3NOYW1lID0gJ2Rpdi1jYXItY29udGFpbmVyJztcclxuICAgICAgICBkaXZDYXJzQ29udGFpbmVyLmlkID0gJ2Rpdi1jYXItY29udGFpbmVyJztcclxuICAgICAgICBsZXQgZGl2UGFnZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBkaXZQYWdlcy5jbGFzc05hbWUgPSAnZGl2LWNhci1wYWdlcyc7XHJcbiAgICAgICAgbGV0IGJ1dHRvbk5leHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICBidXR0b25OZXh0LnRleHRDb250ZW50ID0gJ05leHRQYWdlJztcclxuICAgICAgICBidXR0b25OZXh0LmlkID0gJ25leHQtcGFnZSc7XHJcbiAgICAgICAgYnV0dG9uTmV4dC5jbGFzc05hbWUgPSAnbmF2aWdhdGlvbi1idXR0b24nO1xyXG4gICAgICAgIGxldCBidXR0b25QcmV2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgYnV0dG9uUHJldi5pZCA9ICdwcmV2LXBhZ2UnO1xyXG4gICAgICAgIGJ1dHRvblByZXYudGV4dENvbnRlbnQgPSAnUHJldlBhZ2UnO1xyXG4gICAgICAgIGJ1dHRvblByZXYuY2xhc3NOYW1lID0gJ25hdmlnYXRpb24tYnV0dG9uJztcclxuICAgICAgICBkaXZQYWdlcy5hcHBlbmRDaGlsZChidXR0b25QcmV2KTtcclxuICAgICAgICBkaXZQYWdlcy5hcHBlbmRDaGlsZChidXR0b25OZXh0KTtcclxuICAgICAgICBkaXZHYXJhZ2UgPT09IG51bGwgfHwgZGl2R2FyYWdlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBkaXZHYXJhZ2UuYXBwZW5kQ2hpbGQoZGl2Q3JlYXRlKTtcclxuICAgICAgICBkaXZHYXJhZ2UgPT09IG51bGwgfHwgZGl2R2FyYWdlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBkaXZHYXJhZ2UuYXBwZW5kQ2hpbGQoZGl2VXBkYXRlKTtcclxuICAgICAgICBkaXZHYXJhZ2UgPT09IG51bGwgfHwgZGl2R2FyYWdlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBkaXZHYXJhZ2UuYXBwZW5kQ2hpbGQoZGl2QnV0dG9uQmFyKTtcclxuICAgICAgICBkaXZHYXJhZ2UgPT09IG51bGwgfHwgZGl2R2FyYWdlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBkaXZHYXJhZ2UuYXBwZW5kQ2hpbGQoZGl2Q2Fyc0NvbnRhaW5lcik7XHJcbiAgICAgICAgZGl2R2FyYWdlID09PSBudWxsIHx8IGRpdkdhcmFnZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogZGl2R2FyYWdlLmFwcGVuZENoaWxkKGRpdlBhZ2VzKTtcclxuICAgIH1cclxuICAgIHJlbmRlckdhcmFnZUNvbnRyb2woKSB7XHJcbiAgICAgICAgbGV0IGRpdkNyZWF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaXYtY3JlYXRlJyk7XHJcbiAgICAgICAgbGV0IGRpdlVwZGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaXYtdXBkYXRlJyk7XHJcbiAgICAgICAgbGV0IGRpdkJ1dHRvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGl2LWJ1dHRvbnMtYmFyJyk7XHJcbiAgICAgICAgLy8vL1xyXG4gICAgICAgIGxldCBjcmVhdGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICBjcmVhdGVCdXR0b24uaWQgPSAnY3JlYXRlLWNhci1idXR0b24nO1xyXG4gICAgICAgIGNyZWF0ZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdDcmVhdGUnO1xyXG4gICAgICAgIGNyZWF0ZUJ1dHRvbi5jbGFzc05hbWUgPSAnYXBwbGljYXRpb24tYnV0dG9uJztcclxuICAgICAgICBsZXQgY3JlYXRlVGV4dElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICBjcmVhdGVUZXh0SW5wdXQuaWQgPSAnY3JlYXRlLWNhci10ZXh0JztcclxuICAgICAgICBjcmVhdGVUZXh0SW5wdXQuY2xhc3NOYW1lID0gJ2FwcGxpY2F0aW9uLXRleHQtaW5wdXQnO1xyXG4gICAgICAgIGxldCBjcmVhdGVjb2xvclBpY2tlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgY3JlYXRlY29sb3JQaWNrZXIudHlwZSA9ICdjb2xvcic7XHJcbiAgICAgICAgY3JlYXRlY29sb3JQaWNrZXIuaWQgPSAnY3JlYXRlLWNvbG9yLXBpY2tlcic7XHJcbiAgICAgICAgZGl2Q3JlYXRlID09PSBudWxsIHx8IGRpdkNyZWF0ZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogZGl2Q3JlYXRlLmFwcGVuZENoaWxkKGNyZWF0ZVRleHRJbnB1dCk7XHJcbiAgICAgICAgZGl2Q3JlYXRlID09PSBudWxsIHx8IGRpdkNyZWF0ZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogZGl2Q3JlYXRlLmFwcGVuZENoaWxkKGNyZWF0ZWNvbG9yUGlja2VyKTtcclxuICAgICAgICBkaXZDcmVhdGUgPT09IG51bGwgfHwgZGl2Q3JlYXRlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBkaXZDcmVhdGUuYXBwZW5kQ2hpbGQoY3JlYXRlQnV0dG9uKTtcclxuICAgICAgICAvLy8vXHJcbiAgICAgICAgbGV0IHVwZGF0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIHVwZGF0ZUJ1dHRvbi5pZCA9ICd1cGRhdGUtY2FyLWJ1dHRvbic7XHJcbiAgICAgICAgdXBkYXRlQnV0dG9uLnRleHRDb250ZW50ID0gJ1VwZGF0ZSc7XHJcbiAgICAgICAgdXBkYXRlQnV0dG9uLmNsYXNzTmFtZSA9ICdhcHBsaWNhdGlvbi1idXR0b24nO1xyXG4gICAgICAgIGxldCB1cGRhdGVUZXh0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIHVwZGF0ZVRleHRJbnB1dC5pZCA9ICd1cGRhdGUtY2FyLXRleHQnO1xyXG4gICAgICAgIHVwZGF0ZVRleHRJbnB1dC5jbGFzc05hbWUgPSAnYXBwbGljYXRpb24tdGV4dC1pbnB1dCc7XHJcbiAgICAgICAgbGV0IHVwZGF0ZWNvbG9yUGlja2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICB1cGRhdGVjb2xvclBpY2tlci50eXBlID0gJ2NvbG9yJztcclxuICAgICAgICB1cGRhdGVjb2xvclBpY2tlci5pZCA9ICd1cGRhdGUtY29sb3ItcGlja2VyJztcclxuICAgICAgICBkaXZVcGRhdGUgPT09IG51bGwgfHwgZGl2VXBkYXRlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBkaXZVcGRhdGUuYXBwZW5kQ2hpbGQodXBkYXRlVGV4dElucHV0KTtcclxuICAgICAgICBkaXZVcGRhdGUgPT09IG51bGwgfHwgZGl2VXBkYXRlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBkaXZVcGRhdGUuYXBwZW5kQ2hpbGQodXBkYXRlY29sb3JQaWNrZXIpO1xyXG4gICAgICAgIGRpdlVwZGF0ZSA9PT0gbnVsbCB8fCBkaXZVcGRhdGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGRpdlVwZGF0ZS5hcHBlbmRDaGlsZCh1cGRhdGVCdXR0b24pO1xyXG4gICAgICAgIC8vLy9cclxuICAgICAgICBsZXQgcmFjZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIHJhY2VCdXR0b24uaWQgPSAncmFjZS1idXR0b24nO1xyXG4gICAgICAgIHJhY2VCdXR0b24udGV4dENvbnRlbnQgPSAnUmFjZSc7XHJcbiAgICAgICAgY3JlYXRlQnV0dG9uLmNsYXNzTmFtZSA9ICdhcHBsaWNhdGlvbi1idXR0b24nO1xyXG4gICAgICAgIGxldCByZXNldEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIHJlc2V0QnV0dG9uLmlkID0gJ3Jlc2V0LWJ1dHRvbic7XHJcbiAgICAgICAgcmVzZXRCdXR0b24udGV4dENvbnRlbnQgPSAnUmVzZXQnO1xyXG4gICAgICAgIGNyZWF0ZUJ1dHRvbi5jbGFzc05hbWUgPSAnYXBwbGljYXRpb24tYnV0dG9uJztcclxuICAgICAgICBsZXQgZ2VuZXJhdGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICBnZW5lcmF0ZUJ1dHRvbi5pZCA9ICdnZW5lcmF0ZS1idXR0b24nO1xyXG4gICAgICAgIGdlbmVyYXRlQnV0dG9uLnRleHRDb250ZW50ID0gJ0dlbmVyYXRlIGNhcnMnO1xyXG4gICAgICAgIGNyZWF0ZUJ1dHRvbi5jbGFzc05hbWUgPSAnYXBwbGljYXRpb24tYnV0dG9uJztcclxuICAgICAgICBkaXZCdXR0b25zID09PSBudWxsIHx8IGRpdkJ1dHRvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGRpdkJ1dHRvbnMuYXBwZW5kQ2hpbGQocmFjZUJ1dHRvbik7XHJcbiAgICAgICAgZGl2QnV0dG9ucyA9PT0gbnVsbCB8fCBkaXZCdXR0b25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBkaXZCdXR0b25zLmFwcGVuZENoaWxkKHJlc2V0QnV0dG9uKTtcclxuICAgICAgICBkaXZCdXR0b25zID09PSBudWxsIHx8IGRpdkJ1dHRvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGRpdkJ1dHRvbnMuYXBwZW5kQ2hpbGQoZ2VuZXJhdGVCdXR0b24pO1xyXG4gICAgICAgIGxldCBidW5uZXJTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICAgIGJ1bm5lclNwYW4uaWQgPSAnd2lubmVyLWJhbm5lcic7XHJcbiAgICAgICAgYnVubmVyU3Bhbi5jbGFzc05hbWUgPSAnYW5pbWF0ZSBoaWRkZW4nO1xyXG4gICAgICAgIGRpdkJ1dHRvbnMgPT09IG51bGwgfHwgZGl2QnV0dG9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogZGl2QnV0dG9ucy5hcHBlbmRDaGlsZChidW5uZXJTcGFuKTtcclxuICAgIH1cclxuICAgIHJlbmRlckNhcnMoY2FycywgcGFnZSwgdG90YWwsIGNhcnNQZXJQZ2UpIHtcclxuICAgICAgICBsZXQgdG90YWxQYWdlcyA9IHRvdGFsIC8gY2Fyc1BlclBnZTtcclxuICAgICAgICBsZXQgYnV0dG9uUHJldiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmV2LXBhZ2UnKTtcclxuICAgICAgICBidXR0b25QcmV2LnZhbHVlID0gKHBhZ2UgLSAxKS50b1N0cmluZygpO1xyXG4gICAgICAgIGJ1dHRvblByZXYuZGlzYWJsZWQgPSAocGFnZSA+IDEgJiYgdG90YWxQYWdlcyA+IDEpID8gZmFsc2UgOiB0cnVlO1xyXG4gICAgICAgIGxldCBidXR0b25OZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25leHQtcGFnZScpO1xyXG4gICAgICAgIGJ1dHRvbk5leHQudmFsdWUgPSAocGFnZSArIDEpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgYnV0dG9uTmV4dC5kaXNhYmxlZCA9ICh0b3RhbFBhZ2VzID4gcGFnZSkgPyBmYWxzZSA6IHRydWU7XHJcbiAgICAgICAgbGV0IGRpdkNhcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGl2LWNhci1jb250YWluZXInKTtcclxuICAgICAgICBkaXZDYXJzLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgIGxldCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgICAgIGhlYWRlci5pbm5lclRleHQgPSBgVG90YWxDYXJzOiAgICAke3RvdGFsfSBQYWdlIyAke3BhZ2V9YDtcclxuICAgICAgICBkaXZDYXJzLmFwcGVuZENoaWxkKGhlYWRlcik7XHJcbiAgICAgICAgY2Fycy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBjYXJDb250cm9sRGl2ID0gdGhpcy5nZXRDYXJCdXR0b25zQmFyKGl0ZW0uaWQudG9TdHJpbmcoKSwgaXRlbS5uYW1lKTtcclxuICAgICAgICAgICAgbGV0IGRpdlRyYWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIGRpdlRyYWNrLmNsYXNzTmFtZSA9ICd0cmFjay1mbGV4JztcclxuICAgICAgICAgICAgbGV0IGZpbmlzTGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBmaW5pc0xpbmUuY2xhc3NOYW1lID0gJ2ZpbmlzaC1saW5lJztcclxuICAgICAgICAgICAgZGl2VHJhY2suYXBwZW5kQ2hpbGQoZmluaXNMaW5lKTtcclxuICAgICAgICAgICAgbGV0IGNhclZpZXcgPSBpdGVtLmdldENhclZpZXcoaXRlbS5jb2xvcik7XHJcbiAgICAgICAgICAgIGRpdlRyYWNrLmFwcGVuZENoaWxkKGNhclZpZXcpO1xyXG4gICAgICAgICAgICBsZXQgSHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdocicpO1xyXG4gICAgICAgICAgICBkaXZDYXJzID09PSBudWxsIHx8IGRpdkNhcnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGRpdkNhcnMuYXBwZW5kQ2hpbGQoY2FyQ29udHJvbERpdik7XHJcbiAgICAgICAgICAgIGRpdkNhcnMgPT09IG51bGwgfHwgZGl2Q2FycyA9PT0gdm9pZCAwID8gdm9pZCAwIDogZGl2Q2Fycy5hcHBlbmRDaGlsZChkaXZUcmFjayk7XHJcbiAgICAgICAgICAgIGRpdkNhcnMgPT09IG51bGwgfHwgZGl2Q2FycyA9PT0gdm9pZCAwID8gdm9pZCAwIDogZGl2Q2Fycy5hcHBlbmRDaGlsZChIcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBnZXRDYXJCdXR0b25zQmFyKGNhcklkLCBjYXJOYW1lKSB7XHJcbiAgICAgICAgbGV0IGRpdmJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGxldCBzZWxlY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICBzZWxlY3RCdXR0b24uY2xhc3NOYW1lID0gJ3NlbGVjdCc7XHJcbiAgICAgICAgc2VsZWN0QnV0dG9uLnRleHRDb250ZW50ID0gJ1NlbGVjdCc7XHJcbiAgICAgICAgc2VsZWN0QnV0dG9uLnZhbHVlID0gY2FySWQudG9TdHJpbmcoKTtcclxuICAgICAgICBsZXQgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgZGVsZXRlQnV0dG9uLmNsYXNzTmFtZSA9ICdkZWxldGUnO1xyXG4gICAgICAgIGRlbGV0ZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdEZWxldGUnO1xyXG4gICAgICAgIGRlbGV0ZUJ1dHRvbi52YWx1ZSA9IGNhcklkLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgbGV0IEFCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICBBQnV0dG9uLmNsYXNzTmFtZSA9ICdzdGFydC1idXR0b24nO1xyXG4gICAgICAgIEFCdXR0b24udGV4dENvbnRlbnQgPSAnQSc7XHJcbiAgICAgICAgQUJ1dHRvbi52YWx1ZSA9IGNhcklkLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgbGV0IEJCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICBCQnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICBCQnV0dG9uLmNsYXNzTmFtZSA9ICdzdG9wLWJ1dHRvbic7XHJcbiAgICAgICAgQkJ1dHRvbi50ZXh0Q29udGVudCA9ICdCJztcclxuICAgICAgICBCQnV0dG9uLnZhbHVlID0gY2FySWQudG9TdHJpbmcoKTtcclxuICAgICAgICBsZXQgY2FyTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgICAgIGNhckxhYmVsLmlubmVyVGV4dCA9IGNhck5hbWU7XHJcbiAgICAgICAgZGl2YmFyLmFwcGVuZENoaWxkKEFCdXR0b24pO1xyXG4gICAgICAgIGRpdmJhci5hcHBlbmRDaGlsZChCQnV0dG9uKTtcclxuICAgICAgICBkaXZiYXIuYXBwZW5kQ2hpbGQoc2VsZWN0QnV0dG9uKTtcclxuICAgICAgICBkaXZiYXIuYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKTtcclxuICAgICAgICBkaXZiYXIuYXBwZW5kQ2hpbGQoY2FyTGFiZWwpO1xyXG4gICAgICAgIHJldHVybiBkaXZiYXI7XHJcbiAgICB9XHJcbiAgICByZW5kZXJTZWxlY3RlZENhcihjYXIpIHtcclxuICAgICAgICBsZXQgdXBkYXRlQ29sb3JQaWNrZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXBkYXRlLWNvbG9yLXBpY2tlcicpO1xyXG4gICAgICAgIHVwZGF0ZUNvbG9yUGlja2VyLnZhbHVlID0gY2FyLmNvbG9yO1xyXG4gICAgICAgIGxldCB1cGRhdGVDYXJOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VwZGF0ZS1jYXItdGV4dCcpO1xyXG4gICAgICAgIHVwZGF0ZUNhck5hbWUudmFsdWUgPSBjYXIubmFtZTtcclxuICAgIH1cclxuICAgIHNldFJhY2VNb2RlKCkge1xyXG4gICAgICAgIGxldCByYWNlQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JhY2UtYnV0dG9uJyk7XHJcbiAgICAgICAgbGV0IHJlc2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc2V0LWJ1dHRvbicpO1xyXG4gICAgICAgIHJhY2VCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIGxldCBzZWxlY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNlbGVjdCcpLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgaXRlbS5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbGV0IGRlbGV0ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGVsZXRlJykuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICBpdGVtLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXNldC5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXNldC5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIH0sIDI1MDApO1xyXG4gICAgfVxyXG4gICAgc2V0Q29tbW9uTW9kZSgpIHtcclxuICAgICAgICBsZXQgcmFjZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyYWNlLWJ1dHRvbicpO1xyXG4gICAgICAgIHJhY2VCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIC8vIHNldENhclJhY2VNb2RlKGlkOm51bWJlcil7XHJcbiAgICAvLyAgbGV0IGNhckNvbnRyb2xEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZC50b1N0cmluZygpKT8ucHJldmlvdXNTaWJsaW5nO1xyXG4gICAgLy8gIGNhckNvbnRyb2xEaXY/LmNoaWxkTm9kZXMuZm9yRWFjaCgoaXRlbSk9PntcclxuICAgIC8vICAgICBsZXQgY2FyQ29udHJvbEVsZW1lbnQgPSBpdGVtIGFzIEhUTUxCdXR0b25FbGVtZW50O1xyXG4gICAgLy8gICAgICAgIGNhckNvbnRyb2xFbGVtZW50LmRpc2FibGVkID0gdHJ1ZTtcclxuICAgIC8vICB9KVxyXG4gICAgLy99XHJcbiAgICAvL3NldENhckdhcmFnZU1vZGUoaWQ6bnVtYmVyKXtcclxuICAgIC8vIGxldCBjYXJDb250cm9sRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQudG9TdHJpbmcoKSk/LnByZXZpb3VzU2libGluZztcclxuICAgIC8vIGNhckNvbnRyb2xEaXY/LmNoaWxkTm9kZXMuZm9yRWFjaCgoaXRlbSk9PntcclxuICAgIC8vICAgIGxldCBjYXJDb250cm9sRWxlbWVudCA9IGl0ZW0gYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7ICAgICAgXHJcbiAgICAvLyAgICAgICBjYXJDb250cm9sRWxlbWVudC5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgLy8gfSlcclxuICAgIC8vfVxyXG4gICAgYW5pbWF0ZVdpbm5lcihyZXN1bHQpIHtcclxuICAgICAgICBsZXQgYnVubmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dpbm5lci1iYW5uZXInKTtcclxuICAgICAgICBidW5uZXIuaW5uZXJUZXh0ID0gcmVzdWx0O1xyXG4gICAgICAgIGJ1bm5lci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICAgICAgICAoc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGJ1bm5lci5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuICAgICAgICB9LCA1MDAwKSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5HYXJhZ2VWaWV3ID0gR2FyYWdlVmlldztcclxuZXhwb3J0cy5kZWZhdWx0ID0gR2FyYWdlVmlldztcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5XaW5uZXIgPSB2b2lkIDA7XHJcbmNsYXNzIFdpbm5lciB7XHJcbn1cclxuZXhwb3J0cy5XaW5uZXIgPSBXaW5uZXI7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IFdpbm5lcjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5XaW5uZXJzQ29udHJvbGxlciA9IHZvaWQgMDtcclxuY29uc3QgYXBpID0gcmVxdWlyZShcIi4vQXBpXCIpO1xyXG5jb25zdCBXaW5uZXJzVmlld18xID0gcmVxdWlyZShcIi4vV2lubmVyc1ZpZXdcIik7XHJcbmNsYXNzIFdpbm5lcnNDb250cm9sbGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuX3BhZ2UgPSAxO1xyXG4gICAgICAgIHRoaXMuX3NvcnQgPSAnaWQnO1xyXG4gICAgICAgIHRoaXMub3JkZXIgPSAnQVNDJztcclxuICAgICAgICB0aGlzLndpbm5lcnNWaWV3ID0gbmV3IFdpbm5lcnNWaWV3XzEuV2lubmVyc1ZpZXcoKTtcclxuICAgICAgICB0aGlzLmdldFdpbm5lcnMoKTtcclxuICAgIH1cclxuICAgIHNldCBwYWdlKHBhZ2UpIHtcclxuICAgICAgICB0aGlzLl9wYWdlID0gcGFnZTtcclxuICAgICAgICB0aGlzLmdldFdpbm5lcnMoKTtcclxuICAgIH1cclxuICAgIHNldCBzb3J0KHNvcnQpIHtcclxuICAgICAgICB0aGlzLl9zb3J0ID0gc29ydDtcclxuICAgICAgICB0aGlzLmdldFdpbm5lcnMoKTtcclxuICAgIH1cclxuICAgIGdldFdpbm5lcnMoKSB7XHJcbiAgICAgICAgYXBpLmdldEFsbENhcnMoKS50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYWxsQ2FycyA9IHJlc3VsdC5jYXJzO1xyXG4gICAgICAgIH0sIGVycm9yID0+IHsgY29uc29sZS5sb2coZXJyb3IpOyB9KS50aGVuO1xyXG4gICAgICAgIGFwaS5nZXRXaW5uZXJzKHRoaXMuX3BhZ2UsIHRoaXMuX3NvcnQsIHRoaXMub3JkZXIpLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgdGhpcy53aW5uZXJzID0gcmVzdWx0Lndpbm5lcnM7XHJcbiAgICAgICAgICAgIGxldCB0b3RhbCA9IHJlc3VsdC5jb3VudCA9PT0gbnVsbCA/IDAgOiBOdW1iZXIocmVzdWx0LmNvdW50KTtcclxuICAgICAgICAgICAgdGhpcy53aW5uZXJzLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBjYXIgPSB0aGlzLmFsbENhcnMuZmluZChwID0+IHAuaWQgPT09IGl0ZW0uaWQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNhciAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5jYXIgPSBjYXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLndpbm5lcnNWaWV3LnJlbmRlcldpbm5lcnModGhpcy53aW5uZXJzLCB0aGlzLl9wYWdlLCB0b3RhbCwgYXBpLndpbm5lcnNQYWdlTGltaXQpO1xyXG4gICAgICAgIH0sIGVycm9yID0+IHsgY29uc29sZS5sb2coZXJyb3IpOyB9KTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLldpbm5lcnNDb250cm9sbGVyID0gV2lubmVyc0NvbnRyb2xsZXI7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IFdpbm5lcnNDb250cm9sbGVyO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLldpbm5lcnNWaWV3ID0gdm9pZCAwO1xyXG5jb25zdCBDYXJfMSA9IHJlcXVpcmUoXCIuL0NhclwiKTtcclxuY2xhc3MgV2lubmVyc1ZpZXcge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJXaW5uZXJzTGF5b3V0KCk7XHJcbiAgICB9XHJcbiAgICByZW5kZXJXaW5uZXJzKHdpbm5lcnMsIHBhZ2UsIHRvdGFsLCBwYWdlTGltaXQpIHtcclxuICAgICAgICBsZXQgY2FyID0gbmV3IENhcl8xLmRlZmF1bHQoKTtcclxuICAgICAgICBsZXQgdGFibGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2lubmVycy10YWJsZScpO1xyXG4gICAgICAgIGxldCB0cnMgPSB0YWJsZSA9PT0gbnVsbCB8fCB0YWJsZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogdGFibGUucXVlcnlTZWxlY3RvckFsbCgnLndpbm5lci1yb3cnKTtcclxuICAgICAgICB0cnMgPT09IG51bGwgfHwgdHJzID09PSB2b2lkIDAgPyB2b2lkIDAgOiB0cnMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICB0YWJsZSA9PT0gbnVsbCB8fCB0YWJsZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogdGFibGUucmVtb3ZlQ2hpbGQoaXRlbSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbGV0IHRvdGFsUGFnZXMgPSB0b3RhbCAvIHBhZ2VMaW1pdDtcclxuICAgICAgICBsZXQgYnV0dG9uUHJldiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmV2LXdpbm5lcnMtcGFnZScpO1xyXG4gICAgICAgIGJ1dHRvblByZXYudmFsdWUgPSAocGFnZSAtIDEpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgYnV0dG9uUHJldi5kaXNhYmxlZCA9IChwYWdlID4gMSAmJiB0b3RhbFBhZ2VzID4gMSkgPyBmYWxzZSA6IHRydWU7XHJcbiAgICAgICAgbGV0IGJ1dHRvbk5leHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV4dC13aW5uZXJzLXBhZ2UnKTtcclxuICAgICAgICBidXR0b25OZXh0LnZhbHVlID0gKHBhZ2UgKyAxKS50b1N0cmluZygpO1xyXG4gICAgICAgIGJ1dHRvbk5leHQuZGlzYWJsZWQgPSAodG90YWxQYWdlcyA+IHBhZ2UpID8gZmFsc2UgOiB0cnVlO1xyXG4gICAgICAgIGxldCB3aW5uZXJzSGVhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dpbm5lcnMtaGVhZGVyJykuaW5uZXJUZXh0ID0gJ1RvdGFsIHdpbm5lcnMgOiAnICsgd2lubmVycy5sZW5ndGggKyAnIFBhZ2UjJyArIHBhZ2U7XHJcbiAgICAgICAgd2lubmVycy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIHZhciBfYTtcclxuICAgICAgICAgICAgaWYgKGl0ZW0uY2FyICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGxldCB0ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XHJcbiAgICAgICAgICAgICAgICB0ci5jbGFzc05hbWUgPSAnd2lubmVyLXJvdyc7XHJcbiAgICAgICAgICAgICAgICBsZXQgdGRJZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XHJcbiAgICAgICAgICAgICAgICB0ZElkLmlubmVyVGV4dCA9IGl0ZW0uaWQudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgIGxldCB0ZENhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XHJcbiAgICAgICAgICAgICAgICBsZXQgdGROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcclxuICAgICAgICAgICAgICAgIHRkTmFtZS5pbm5lclRleHQgPSBpdGVtLmNhci5uYW1lO1xyXG4gICAgICAgICAgICAgICAgbGV0IHRkV2lucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XHJcbiAgICAgICAgICAgICAgICB0ZFdpbnMuaW5uZXJUZXh0ID0gaXRlbS53aW5zLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgdGRUaW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcclxuICAgICAgICAgICAgICAgIHRkVGltZS5pbm5lclRleHQgPSBpdGVtLnRpbWUudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgIGxldCBkaXZDYXIgPSBjYXIuZ2V0Q2FyVmlldyhpdGVtLmNhci5jb2xvcik7XHJcbiAgICAgICAgICAgICAgICAoX2EgPSBkaXZDYXIucXVlcnlTZWxlY3Rvcignc3ZnJykpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jbGFzc0xpc3QuYWRkKCdzdmctd2lubmVyJyk7XHJcbiAgICAgICAgICAgICAgICBkaXZDYXIuc3R5bGUud2lkdGggPSAnMTUwcHgnO1xyXG4gICAgICAgICAgICAgICAgZGl2Q2FyLnN0eWxlLmhlaWdodCA9ICczMHB4JztcclxuICAgICAgICAgICAgICAgIHRkQ2FyLmFwcGVuZENoaWxkKGRpdkNhcik7XHJcbiAgICAgICAgICAgICAgICB0ci5hcHBlbmRDaGlsZCh0ZElkKTtcclxuICAgICAgICAgICAgICAgIHRyLmFwcGVuZENoaWxkKHRkQ2FyKTtcclxuICAgICAgICAgICAgICAgIHRyLmFwcGVuZENoaWxkKHRkTmFtZSk7XHJcbiAgICAgICAgICAgICAgICB0ci5hcHBlbmRDaGlsZCh0ZFdpbnMpO1xyXG4gICAgICAgICAgICAgICAgdHIuYXBwZW5kQ2hpbGQodGRUaW1lKTtcclxuICAgICAgICAgICAgICAgIHRhYmxlID09PSBudWxsIHx8IHRhYmxlID09PSB2b2lkIDAgPyB2b2lkIDAgOiB0YWJsZS5hcHBlbmRDaGlsZCh0cik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHJlbmRlcldpbm5lcnNMYXlvdXQoKSB7XHJcbiAgICAgICAgbGV0IGRpdldpbm5lcnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGl2LXdpbm5lcnMnKTtcclxuICAgICAgICBsZXQgbWFpbldpbm5lcnNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBtYWluV2lubmVyc0Rpdi5pZCA9ICd3aW5uZXJzLW1haW4nO1xyXG4gICAgICAgIGxldCBsYWJlbEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICAgICAgbGFiZWxIZWFkZXIuaWQgPSAnd2lubmVycy1oZWFkZXInO1xyXG4gICAgICAgIGxldCB0YWJsZSA9IHRoaXMuZ2VuZXJhdGVUYWJsZUxheW91dCgpO1xyXG4gICAgICAgIG1haW5XaW5uZXJzRGl2LmFwcGVuZENoaWxkKGxhYmVsSGVhZGVyKTtcclxuICAgICAgICBtYWluV2lubmVyc0Rpdi5hcHBlbmRDaGlsZCh0YWJsZSk7XHJcbiAgICAgICAgbGV0IGRpdlBhZ2VzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgZGl2UGFnZXMuY2xhc3NOYW1lID0gJ2RpdnBhZ2VzJztcclxuICAgICAgICBsZXQgYnV0dG9uTmV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIGJ1dHRvbk5leHQudGV4dENvbnRlbnQgPSAnTmV4dFBhZ2UnO1xyXG4gICAgICAgIGJ1dHRvbk5leHQuaWQgPSAnbmV4dC13aW5uZXJzLXBhZ2UnO1xyXG4gICAgICAgIGJ1dHRvbk5leHQuY2xhc3NOYW1lID0gJ25hdmlnYXRpb24tYnV0dG9uJztcclxuICAgICAgICBsZXQgYnV0dG9uUHJldiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIGJ1dHRvblByZXYuaWQgPSAncHJldi13aW5uZXJzLXBhZ2UnO1xyXG4gICAgICAgIGJ1dHRvblByZXYudGV4dENvbnRlbnQgPSAnUHJldlBhZ2UnO1xyXG4gICAgICAgIGJ1dHRvblByZXYuY2xhc3NOYW1lID0gJ25hdmlnYXRpb24tYnV0dG9uJztcclxuICAgICAgICBkaXZQYWdlcy5hcHBlbmRDaGlsZChidXR0b25QcmV2KTtcclxuICAgICAgICBkaXZQYWdlcy5hcHBlbmRDaGlsZChidXR0b25OZXh0KTtcclxuICAgICAgICBkaXZXaW5uZXJzID09PSBudWxsIHx8IGRpdldpbm5lcnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGRpdldpbm5lcnMuYXBwZW5kQ2hpbGQobWFpbldpbm5lcnNEaXYpO1xyXG4gICAgICAgIGRpdldpbm5lcnMgPT09IG51bGwgfHwgZGl2V2lubmVycyA9PT0gdm9pZCAwID8gdm9pZCAwIDogZGl2V2lubmVycy5hcHBlbmRDaGlsZChkaXZQYWdlcyk7XHJcbiAgICB9XHJcbiAgICBnZW5lcmF0ZVRhYmxlTGF5b3V0KCkge1xyXG4gICAgICAgIGxldCB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RhYmxlJyk7XHJcbiAgICAgICAgdGFibGUuaWQgPSAnd2lubmVycy10YWJsZSc7XHJcbiAgICAgICAgbGV0IHRyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcclxuICAgICAgICBsZXQgdGhJZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoJyk7XHJcbiAgICAgICAgdGhJZC50ZXh0Q29udGVudCA9ICdJZCc7XHJcbiAgICAgICAgdGhJZC5pZCA9ICdzb3J0LWlkJztcclxuICAgICAgICBsZXQgdGhDYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0aCcpO1xyXG4gICAgICAgIHRoQ2FyLnRleHRDb250ZW50ID0gXCJDYXJcIjtcclxuICAgICAgICBsZXQgdGhOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGgnKTtcclxuICAgICAgICB0aE5hbWUudGV4dENvbnRlbnQgPSAnTmFtZSc7XHJcbiAgICAgICAgbGV0IHRoV2lucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoJyk7XHJcbiAgICAgICAgdGhXaW5zLnRleHRDb250ZW50ID0gJ1dpbnMnO1xyXG4gICAgICAgIHRoV2lucy5pZCA9ICdzb3J0LXdpbnMnO1xyXG4gICAgICAgIGxldCB0aFRpbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0aCcpO1xyXG4gICAgICAgIHRoVGltZS50ZXh0Q29udGVudCA9ICdUaW1lJztcclxuICAgICAgICB0aFRpbWUuaWQgPSAnc29ydC10aW1lJztcclxuICAgICAgICB0ci5hcHBlbmRDaGlsZCh0aElkKTtcclxuICAgICAgICB0ci5hcHBlbmRDaGlsZCh0aENhcik7XHJcbiAgICAgICAgdHIuYXBwZW5kQ2hpbGQodGhOYW1lKTtcclxuICAgICAgICB0ci5hcHBlbmRDaGlsZCh0aFdpbnMpO1xyXG4gICAgICAgIHRyLmFwcGVuZENoaWxkKHRoVGltZSk7XHJcbiAgICAgICAgdGFibGUuYXBwZW5kQ2hpbGQodHIpO1xyXG4gICAgICAgIHJldHVybiB0YWJsZTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLldpbm5lcnNWaWV3ID0gV2lubmVyc1ZpZXc7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IFdpbm5lcnNWaWV3O1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfYSwgX2IsIF9jLCBfZCwgX2U7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZnVuY3Rpb24gcmVuZGVyTWFpbkxheW91dCgpIHtcclxuICAgIGxldCBnYXJhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGdhcmFnZS5pZCA9ICdnYXJhZ2UnO1xyXG4gICAgbGV0IHdpbm5lcnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIHdpbm5lcnMuaWQgPSAnd2lubmVycyc7XHJcbiAgICBnYXJhZ2UudGV4dENvbnRlbnQgPSAnR2FyYWdlJztcclxuICAgIHdpbm5lcnMudGV4dENvbnRlbnQgPSAnV2lubmVycyc7XHJcbiAgICB3aW5uZXJzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZyk7XHJcbiAgICBnYXJhZ2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmKTtcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZ2FyYWdlKTtcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQod2lubmVycyk7XHJcbiAgICBsZXQgZGl2V2lubmVycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbGV0IGRpdkdhcmFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZGl2V2lubmVycy5pZCA9ICdkaXYtd2lubmVycyc7XHJcbiAgICBkaXZHYXJhZ2UuaWQgPSAnZGl2LWdhcmFnZSc7XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRpdldpbm5lcnMpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkaXZHYXJhZ2UpO1xyXG59XHJcbnJlbmRlck1haW5MYXlvdXQoKTtcclxucmVxdWlyZShcIi4vbWFpbi5jc3NcIik7XHJcbmNvbnN0IEdhcmFnZUNvbnRyb2xsZXJfMSA9IHJlcXVpcmUoXCIuL0dhcmFnZUNvbnRyb2xsZXJcIik7XHJcbi8vaW1wb3J0IHtXaW5uZXJzQ29udHJvbGxlcn0gZnJvbSAnLi9XaW5uZXJzQ29udHJvbGxlcidcclxubGV0IGdhcmFnZUNvbnRyb2xsZXIgPSBuZXcgR2FyYWdlQ29udHJvbGxlcl8xLkdhcmFnZUNvbnRyb2xsZXIoKTtcclxuLy9sZXQgd2lubmVyc0NvbnRyb2xsZXIgOldpbm5lcnNDb250cm9sbGVyID0gbmV3IFdpbm5lcnNDb250cm9sbGVyKCk7XHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xyXG4gICAgYWRkTGlzdGVuZXJzKCk7XHJcbiAgICBhZGRDYXJMaXN0ZW5lcigpO1xyXG4gICAgLy8gYWRkV2lubmVyc0xpc3RlbmVycygpO1xyXG59KTtcclxuZnVuY3Rpb24gYWRkTGlzdGVuZXJzKCkge1xyXG4gICAgdmFyIF9hLCBfYiwgX2MsIF9kLCBfZSwgX2YsIF9nLCBfaCwgX2osIF9rLCBfbDtcclxuICAgIChfYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjcmVhdGUtY2FyLWJ1dHRvbicpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgZ2FyYWdlQ29udHJvbGxlci5hZGRDYXIoKTtcclxuICAgIH0pO1xyXG4gICAgKF9iID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VwZGF0ZS1jYXItYnV0dG9uJykpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBnYXJhZ2VDb250cm9sbGVyLnVwZGF0ZUNhcigpO1xyXG4gICAgICAgIGxldCB0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dpbm5lci1iYW5ubmVyJyk7XHJcbiAgICAgICAgY29uc29sZS5sb2codCk7XHJcbiAgICAgICAgdC5jbGFzc05hbWUgPSAnJztcclxuICAgICAgICB0LmNsYXNzTmFtZSA9ICdhbmltYXRlJztcclxuICAgIH0pO1xyXG4gICAgKF9jID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dlbmVyYXRlLWJ1dHRvbicpKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2MuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgZ2FyYWdlQ29udHJvbGxlci5nZW5lcmF0ZUNhcnMoKTtcclxuICAgIH0pO1xyXG4gICAgKF9kID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JhY2UtYnV0dG9uJykpID09PSBudWxsIHx8IF9kID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBnYXJhZ2VDb250cm9sbGVyLnJhY2UoKTtcclxuICAgIH0pO1xyXG4gICAgKF9lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc2V0LWJ1dHRvbicpKSA9PT0gbnVsbCB8fCBfZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgZ2FyYWdlQ29udHJvbGxlci5yZXNldCgpO1xyXG4gICAgfSk7XHJcbiAgICAoX2YgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3JlYXRlLWNvbG9yLXBpY2tlcicpKSA9PT0gbnVsbCB8fCBfZiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2YuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoZSkgPT4ge1xyXG4gICAgICAgIGdhcmFnZUNvbnRyb2xsZXIuY3JlYXRlZENhci5jb2xvciA9IGUuY3VycmVudFRhcmdldC52YWx1ZTtcclxuICAgIH0pO1xyXG4gICAgKF9nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VwZGF0ZS1jb2xvci1waWNrZXInKSkgPT09IG51bGwgfHwgX2cgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9nLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKGUpID0+IHtcclxuICAgICAgICBpZiAoZ2FyYWdlQ29udHJvbGxlci5zZWxlY3RlZENhciAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgZ2FyYWdlQ29udHJvbGxlci5zZWxlY3RlZENhci5jb2xvciA9IGUuY3VycmVudFRhcmdldC52YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIChfaCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjcmVhdGUtY2FyLXRleHQnKSkgPT09IG51bGwgfHwgX2ggPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9oLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKGUpID0+IHtcclxuICAgICAgICBnYXJhZ2VDb250cm9sbGVyLmNyZWF0ZWRDYXIubmFtZSA9IGUuY3VycmVudFRhcmdldC52YWx1ZTtcclxuICAgIH0pO1xyXG4gICAgKF9qID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VwZGF0ZS1jYXItdGV4dCcpKSA9PT0gbnVsbCB8fCBfaiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2ouYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoZSkgPT4ge1xyXG4gICAgICAgIGlmIChnYXJhZ2VDb250cm9sbGVyLnNlbGVjdGVkQ2FyICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgZ2FyYWdlQ29udHJvbGxlci5zZWxlY3RlZENhci5uYW1lID0gZS5jdXJyZW50VGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgKF9rID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25leHQtcGFnZScpKSA9PT0gbnVsbCB8fCBfayA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgIGdhcmFnZUNvbnRyb2xsZXIucGFnZSA9IChOdW1iZXIoZS5jdXJyZW50VGFyZ2V0LnZhbHVlKSk7XHJcbiAgICB9KTtcclxuICAgIChfbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmV2LXBhZ2UnKSkgPT09IG51bGwgfHwgX2wgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9sLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICBnYXJhZ2VDb250cm9sbGVyLnBhZ2UgPSAoTnVtYmVyKGUuY3VycmVudFRhcmdldC52YWx1ZSkpO1xyXG4gICAgfSk7XHJcbn1cclxuZnVuY3Rpb24gYWRkQ2FyTGlzdGVuZXIoKSB7XHJcbiAgICB2YXIgX2E7XHJcbiAgICAoX2EgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGl2LWNhci1jb250YWluZXInKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICBsZXQgdGFyZ2V0ID0gZS50YXJnZXQ7XHJcbiAgICAgICAgc3dpdGNoICh0YXJnZXQuY2xhc3NOYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ3NlbGVjdCc6IHtcclxuICAgICAgICAgICAgICAgIGdhcmFnZUNvbnRyb2xsZXIuc2VsZWN0Q2FyKE51bWJlcih0YXJnZXQudmFsdWUpKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgJ2RlbGV0ZSc6IHtcclxuICAgICAgICAgICAgICAgIGdhcmFnZUNvbnRyb2xsZXIuZGVsZXRlQ2FyKE51bWJlcih0YXJnZXQudmFsdWUpKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgJ3N0YXJ0LWJ1dHRvbic6XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2FyYWdlQ29udHJvbGxlci5lbmdpbmVTdGFydChOdW1iZXIodGFyZ2V0LnZhbHVlKSwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlICdzdG9wLWJ1dHRvbic6XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2FyYWdlQ29udHJvbGxlci5lbmdpbmVTdG9wKE51bWJlcih0YXJnZXQudmFsdWUpKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG4vLy8vLy8vLy8vLy9cclxuKF9hID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NvcnQtd2lucycpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBnYXJhZ2VDb250cm9sbGVyLndpbm5lcnNDb250cm9sbGVyLm9yZGVyID0gZ2FyYWdlQ29udHJvbGxlci53aW5uZXJzQ29udHJvbGxlci5vcmRlciA9PT0gJ0FTQycgPyAnREVTQycgOiAnQVNDJztcclxuICAgIGdhcmFnZUNvbnRyb2xsZXIud2lubmVyc0NvbnRyb2xsZXIuc29ydCA9ICd3aW5zJztcclxufSk7XHJcbihfYiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzb3J0LWlkJykpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGdhcmFnZUNvbnRyb2xsZXIud2lubmVyc0NvbnRyb2xsZXIub3JkZXIgPSBnYXJhZ2VDb250cm9sbGVyLndpbm5lcnNDb250cm9sbGVyLm9yZGVyID09PSAnQVNDJyA/ICdERVNDJyA6ICdBU0MnO1xyXG4gICAgZ2FyYWdlQ29udHJvbGxlci53aW5uZXJzQ29udHJvbGxlci5zb3J0ID0gJ2lkJztcclxufSk7XHJcbihfYyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzb3J0LXRpbWUnKSkgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgZ2FyYWdlQ29udHJvbGxlci53aW5uZXJzQ29udHJvbGxlci5vcmRlciA9IGdhcmFnZUNvbnRyb2xsZXIud2lubmVyc0NvbnRyb2xsZXIub3JkZXIgPT09ICdBU0MnID8gJ0RFU0MnIDogJ0FTQyc7XHJcbiAgICBnYXJhZ2VDb250cm9sbGVyLndpbm5lcnNDb250cm9sbGVyLnNvcnQgPSAndGltZSc7XHJcbn0pO1xyXG4oX2QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV4dC13aW5uZXJzLXBhZ2UnKSkgPT09IG51bGwgfHwgX2QgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgIGdhcmFnZUNvbnRyb2xsZXIud2lubmVyc0NvbnRyb2xsZXIucGFnZSA9IChOdW1iZXIoZS5jdXJyZW50VGFyZ2V0LnZhbHVlKSk7XHJcbn0pO1xyXG4oX2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJldi13aW5uZXJzLXBhZ2UnKSkgPT09IG51bGwgfHwgX2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgIGdhcmFnZUNvbnRyb2xsZXIud2lubmVyc0NvbnRyb2xsZXIucGFnZSA9IChOdW1iZXIoZS5jdXJyZW50VGFyZ2V0LnZhbHVlKSk7XHJcbn0pO1xyXG4vLy8vXHJcbmZ1bmN0aW9uIGYoKSB7XHJcbiAgICBsZXQgeCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaXYtZ2FyYWdlJyk7XHJcbiAgICB4LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICBsZXQgeSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaXYtd2lubmVycycpO1xyXG4gICAgeS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG59XHJcbmZ1bmN0aW9uIGcoKSB7XHJcbiAgICBsZXQgeCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaXYtZ2FyYWdlJyk7XHJcbiAgICB4LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIGxldCB5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rpdi13aW5uZXJzJyk7XHJcbiAgICB5LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG59XHJcbmxldCB5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rpdi13aW5uZXJzJyk7XHJcbnkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9