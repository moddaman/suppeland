module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/AboutLivePhoto/aboutLivePhoto.module.css":
/*!********************************************************!*\
  !*** ./pages/AboutLivePhoto/aboutLivePhoto.module.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"gridrow": "aboutLivePhoto_gridrow__10prl",
	"super": "aboutLivePhoto_super__zqCef"
};

/***/ }),

/***/ "./pages/AboutLivePhoto/aboutLivePhoto.tsx":
/*!*************************************************!*\
  !*** ./pages/AboutLivePhoto/aboutLivePhoto.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _LivePhoto_livePhoto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../LivePhoto/livePhoto */ "./pages/LivePhoto/livePhoto.tsx");
/* harmony import */ var _aboutLivePhoto_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./aboutLivePhoto.module.css */ "./pages/AboutLivePhoto/aboutLivePhoto.module.css");
/* harmony import */ var _aboutLivePhoto_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_aboutLivePhoto_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-syntax-highlighter */ "react-syntax-highlighter");
/* harmony import */ var react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_syntax_highlighter_dist_cjs_styles_prism__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-syntax-highlighter/dist/cjs/styles/prism */ "react-syntax-highlighter/dist/cjs/styles/prism");
/* harmony import */ var react_syntax_highlighter_dist_cjs_styles_prism__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_syntax_highlighter_dist_cjs_styles_prism__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/mortenovrebo/Prosjekt/suppeland/pages/AboutLivePhoto/aboutLivePhoto.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const AboutLive = () => {
  const {
    0: showImplementation,
    1: setShowImplementation
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  return __jsx("section", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, "Live Photo"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, "En React komponent for \xE5 vise \"live photos\" ", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  })), __jsx("div", {
    className: _aboutLivePhoto_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.super,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, "Klikk p\xE5 bildet"), __jsx(_LivePhoto_livePhoto__WEBPACK_IMPORTED_MODULE_1__["default"], {
    interaction: "CLICK",
    videoPath: "images/jonas.mp4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  })), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, "Hold musen over"), __jsx(_LivePhoto_livePhoto__WEBPACK_IMPORTED_MODULE_1__["default"], {
    interaction: "HOVER",
    videoPath: "images/linn.mp4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }))), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, "Pr\xF8vde f\xF8rst Apple sitt LivePhotosKit JS for \xE5 vise \"live photos\", men fant ut at det var mye lettere \xE5 bare bruke HTML Video."), __jsx(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_3__["Prism"], {
    language: "javascript",
    style: react_syntax_highlighter_dist_cjs_styles_prism__WEBPACK_IMPORTED_MODULE_4__["tomorrow"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, usageString), __jsx("button", {
    onClick: () => setShowImplementation(!showImplementation),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, showImplementation ? "hide implementation" : "Show implementation"), showImplementation && __jsx(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_3__["Prism"], {
    language: "javascript",
    style: react_syntax_highlighter_dist_cjs_styles_prism__WEBPACK_IMPORTED_MODULE_4__["tomorrow"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, codeString), __jsx("code", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (AboutLive);
const usageString = `<LivePhoto interaction={"CLICK"} videoPath={"<Video url>"} />
`;
const codeString = `import React, { useRef, useEffect } from "react";
import style from "./livePhoto.module.css";

type Interaction = "CLICK" | "HOVER";

interface IProps {
  videoPath: string;
  interaction: Interaction;
}

const LivePhoto = ({ videoPath, interaction }: IProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.preload = "1";
      videoRef.current.volume = 0;
    }
  }, [videoRef.current]);

  const toggle = () => {
    if (videoRef.current) {
      videoRef.current.paused
        ? videoRef.current.play()
        : videoRef.current.pause();
    }
  };

  return (
    <video
      className={style.video}
      loop
      preload="none"
      ref={videoRef}
      onMouseEnter={interaction === "HOVER" ? toggle : () => console.log("X")}
      onMouseLeave={interaction === "HOVER" ? toggle : () => console.log("X")}
      onClick={interaction === "CLICK" ? toggle : () => console.log("X")}
    >
      <source src={videoPath} type="video/mp4"></source>
    </video>
  );
};

export default LivePhoto;
`;

/***/ }),

/***/ "./pages/FunnyText/funnyText.module.css":
/*!**********************************************!*\
  !*** ./pages/FunnyText/funnyText.module.css ***!
  \**********************************************/
/*! no static exports found */
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

/***/ "./pages/FunnyText/funnyText.tsx":
/*!***************************************!*\
  !*** ./pages/FunnyText/funnyText.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _funnyText_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./funnyText.module.css */ "./pages/FunnyText/funnyText.module.css");
/* harmony import */ var _funnyText_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_funnyText_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/mortenovrebo/Prosjekt/suppeland/pages/FunnyText/funnyText.tsx";
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
  const title = "S u p p e l a n d";
  const textArray = title.split(" ").map(toText);
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
    onMouseOut: defaultText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: undefined
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
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(currentStyle),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: undefined
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

/***/ "./pages/LivePhoto/livePhoto.module.css":
/*!**********************************************!*\
  !*** ./pages/LivePhoto/livePhoto.module.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"video": "livePhoto_video__f8e1Y"
};

/***/ }),

/***/ "./pages/LivePhoto/livePhoto.tsx":
/*!***************************************!*\
  !*** ./pages/LivePhoto/livePhoto.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _livePhoto_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./livePhoto.module.css */ "./pages/LivePhoto/livePhoto.module.css");
/* harmony import */ var _livePhoto_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_livePhoto_module_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/mortenovrebo/Prosjekt/suppeland/pages/LivePhoto/livePhoto.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const LivePhoto = ({
  videoPath,
  interaction
}) => {
  const videoRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (videoRef.current) {
      videoRef.current.preload = "1";
      videoRef.current.volume = 0;
    }
  }, [videoRef.current]);

  const toggle = currentInteraction => {
    if (videoRef.current && currentInteraction === interaction) {
      videoRef.current.paused ? videoRef.current.play() : videoRef.current.pause();
    }
  };

  const play = () => {};

  return __jsx("video", {
    className: _livePhoto_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.video,
    loop: true,
    preload: "none",
    ref: videoRef,
    onMouseEnter: () => toggle("HOVER"),
    onMouseLeave: () => toggle("HOVER"),
    onClick: () => toggle("CLICK"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, __jsx("source", {
    src: videoPath,
    type: "video/mp4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (LivePhoto);

/***/ }),

/***/ "./pages/index.module.css":
/*!********************************!*\
  !*** ./pages/index.module.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"app": "index_app__dX5MZ",
	"container": "index_container__3XRMM"
};

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _FunnyText_funnyText__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FunnyText/funnyText */ "./pages/FunnyText/funnyText.tsx");
/* harmony import */ var _AboutLivePhoto_aboutLivePhoto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AboutLivePhoto/aboutLivePhoto */ "./pages/AboutLivePhoto/aboutLivePhoto.tsx");
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.module.css */ "./pages/index.module.css");
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/mortenovrebo/Prosjekt/suppeland/pages/index.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




const Home = () => {
  return __jsx("div", {
    className: "jsx-1011943476" + " " + (_index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.app || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-1011943476" + " " + (_index_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.container || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx(_FunnyText_funnyText__WEBPACK_IMPORTED_MODULE_2__["default"], {
    text: "RANGO",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }), __jsx(_AboutLivePhoto_aboutLivePhoto__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1011943476",
    __self: undefined
  }, "body{background-color:#ecf0f1;paddding:0px;margin:0px;min-height:1000px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tb3J0ZW5vdnJlYm8vUHJvc2pla3Qvc3VwcGVsYW5kL3BhZ2VzL2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFXeUIsQUFHb0MseUJBQ1osYUFDRixXQUNPLGtCQUNwQiIsImZpbGUiOiIvVXNlcnMvbW9ydGVub3ZyZWJvL1Byb3NqZWt0L3N1cHBlbGFuZC9wYWdlcy9pbmRleC50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRnVubnlUZXh0IGZyb20gXCIuL0Z1bm55VGV4dC9mdW5ueVRleHRcIjtcbmltcG9ydCBBYm91dExpdmUgZnJvbSBcIi4vQWJvdXRMaXZlUGhvdG8vYWJvdXRMaXZlUGhvdG9cIjtcbmltcG9ydCBzdHlsZSBmcm9tIFwiLi9pbmRleC5tb2R1bGUuY3NzXCI7XG5cbmNvbnN0IEhvbWUgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmFwcH0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuY29udGFpbmVyfT5cbiAgICAgICAgPEZ1bm55VGV4dCB0ZXh0PXtcIlJBTkdPXCJ9IC8+XG4gICAgICAgIDxBYm91dExpdmUgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgYm9keSB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VjZjBmMTtcbiAgICAgICAgICBwYWRkZGluZzogMHB4O1xuICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMDBweDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdfQ== */\n/*@ sourceURL=/Users/mortenovrebo/Prosjekt/suppeland/pages/index.tsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./pages/index.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/mortenovrebo/Prosjekt/suppeland/pages/index.tsx */"./pages/index.tsx");


/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-syntax-highlighter":
/*!*******************************************!*\
  !*** external "react-syntax-highlighter" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-syntax-highlighter");

/***/ }),

/***/ "react-syntax-highlighter/dist/cjs/styles/prism":
/*!*****************************************************************!*\
  !*** external "react-syntax-highlighter/dist/cjs/styles/prism" ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-syntax-highlighter/dist/cjs/styles/prism");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map