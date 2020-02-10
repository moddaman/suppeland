module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("1lJe");


/***/ }),

/***/ "1lJe":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _funnyText_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("4O7x");
/* harmony import */ var _funnyText_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_funnyText_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("K2gz");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const toText = symbol => {
  return {
    symbol,
    fontsize: "5vh"
  };
};

const FunnyText = ({
  text
}) => {
  const textArray = text.split("").map(toText);
  const {
    0: symbols,
    1: setSymbols
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(textArray);
  const {
    0: currentIndex,
    1: setCurrentIndex
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  useInterval(function () {
    if (currentIndex <= textArray.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  }, 200, textArray.length + 1);

  const defaultText = () => {
    const newSymbols = symbols.map((s, i) => {
      return _objectSpread({}, s, {
        fontsize: "5vh"
      });
    });
    setSymbols(newSymbols);
  };

  const enlargeFont = (symbol, index) => {
    console.log(index);
    const newSymbols = symbols.map((s, i) => {
      if (i === index) {
        return _objectSpread({}, s, {
          fontsize: "10vh"
        });
      }

      if (i === index - 1 || i === index + 1) {
        return _objectSpread({}, s, {
          fontsize: "7vh"
        });
      }

      return _objectSpread({}, s, {
        fontsize: "5vh"
      });
    });
    setSymbols(newSymbols);
  };

  return __jsx("div", {
    className: _funnyText_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.basic,
    onMouseOut: defaultText
  }, symbols.map((symbol, index) => {
    const currentStyle = classnames__WEBPACK_IMPORTED_MODULE_2___default()({
      [_funnyText_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.show]: index < currentIndex,
      [_funnyText_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.hide]: index >= currentIndex
    });
    const divStyle = {
      fontSize: symbol.fontsize
    };
    return __jsx("div", {
      onMouseOver: () => enlargeFont(symbol, index),
      key: index,
      style: divStyle,
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(currentStyle)
    }, index < currentIndex ? symbol.symbol : "");
  }));
};

function useInterval(callback, delay, numberOfTicks = 100) {
  const savedCallback = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  const {
    0: ticks,
    1: setTicks
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    savedCallback.current = callback;
  }, [callback]); // Set up the interval.

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    function tick() {
      setTicks(ticks + 1);
      savedCallback.current();
    }

    if (delay !== null) {
      let id = setInterval(tick, delay);

      if (ticks === numberOfTicks) {
        clearInterval(id);
      }

      return () => clearInterval(id);
    }
  }, [delay, ticks]);
}

/* harmony default export */ __webpack_exports__["default"] = (FunnyText);

/***/ }),

/***/ "4O7x":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"basic": "funnyText_basic__19K50",
	"largeFont": "funnyText_largeFont__1NrHh",
	"mediumFont": "funnyText_mediumFont__3LGtl",
	"smallFont": "funnyText_smallFont__Z8wDA",
	"show": "funnyText_show__2m6bU",
	"hide": "funnyText_hide__2Ivhc",
	"hardChange": "funnyText_hardChange__2KpiL",
	"smoothChange": "funnyText_smoothChange__KALer",
	"changeFontSize": "funnyText_changeFontSize__hry4P",
	"waveChange": "funnyText_waveChange__2QZgp",
	"changeHeightSize": "funnyText_changeHeightSize__VJjLD"
};

/***/ }),

/***/ "K2gz":
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });