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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("baq/");


/***/ }),

/***/ "88KH":
/***/ (function(module, exports) {

module.exports = require("react-syntax-highlighter/dist/cjs/styles/prism");

/***/ }),

/***/ "I7GX":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"video": "livePhoto_video__f8e1Y"
};

/***/ }),

/***/ "RyM3":
/***/ (function(module, exports) {

module.exports = require("react-syntax-highlighter");

/***/ }),

/***/ "baq/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _LivePhoto_livePhoto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("mgFI");
/* harmony import */ var react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("RyM3");
/* harmony import */ var react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_syntax_highlighter_dist_cjs_styles_prism__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("88KH");
/* harmony import */ var react_syntax_highlighter_dist_cjs_styles_prism__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_syntax_highlighter_dist_cjs_styles_prism__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 // import stillImage from "./images/IMG_0682.jpg";
// import videos from "./images/IMG_0682.mp4";
// import linnBilde from "./images/linn.jpg";
// import linnVideo from "./images/linn.mp4";
// import jonasBilde from "./images/jonas.jpg";
// import jonasVideo from "./images/jonas.mp4";




const AboutLive = () => {
  const {
    0: showImplementation,
    1: setShowImplementation
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const copyText = () => {};

  return __jsx("section", null, __jsx("h3", null, "Live Photo"), "\u2211", __jsx("p", null, "A React component to show live photos ", __jsx("br", null), "Hover over the image to \"play\" photo"), __jsx("div", null, __jsx(_LivePhoto_livePhoto__WEBPACK_IMPORTED_MODULE_1__["default"], {
    interaction: "CLICK",
    imagePath: "images/jonas.jpg",
    videoPath: "images/jonas.mp4"
  })), __jsx("p", null, "Apple has a LivePhotosKit JS, but i found it a little bit chunky to use. So i made a react wrapper over it. Here is how you would use it:"), __jsx(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_2__["Prism"], {
    language: "javascript",
    style: react_syntax_highlighter_dist_cjs_styles_prism__WEBPACK_IMPORTED_MODULE_3__["tomorrow"]
  }, usageString), __jsx("button", {
    onClick: () => setShowImplementation(!showImplementation)
  }, showImplementation ? "hide implementation" : "Show implementation"), showImplementation && __jsx(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_2__["Prism"], {
    language: "javascript",
    style: react_syntax_highlighter_dist_cjs_styles_prism__WEBPACK_IMPORTED_MODULE_3__["tomorrow"]
  }, codeString), __jsx("code", null));
};

/* harmony default export */ __webpack_exports__["default"] = (AboutLive);
const usageString = `<LivePhoto imagePath={"./images/horse.jpg"} videoPath={"./images/horse.mp4"} />
`;
const codeString = `import React, { useRef, useEffect, useState } from "react";
import * as LivePhotosKit from "livephotoskit";
import style from "./LivePhoto.module.scss";
import { PlaybackStyleLiteral } from "livephotoskit";

interface IProps {
  imagePath: string;
  videoPath: string;
  playbackStyle?: PlaybackStyleLiteral;
}

const LivePhoto = ({
  imagePath,
  videoPath,
  playbackStyle = LivePhotosKit.PlaybackStyle.LOOP
}: IProps) => {
  const textInput = useRef<HTMLInputElement>(null);
  const [player, setPlayer] = useState<LivePhotosKit.Player>();

  useEffect(() => {
    if (textInput && textInput.current) {
      const htmlPlayer = LivePhotosKit.Player(textInput.current);
      setPlayer(htmlPlayer);
      if (player) {
        player.showsNativeControls = false;
        player.playbackStyle = playbackStyle;
      }
    }
  });

  const playLoop = () => {
    if (player) {
      player.play();
    }
  };

  const playStop = () => {
    if (player) {
      player.pause();
    }
  };

  return (
    <div
      className={style.photo}
      onMouseEnter={playLoop}
      onTouchStart={playLoop}
      onTouchEnd={playStop}
      onMouseLeave={playStop}
      ref={textInput}
      data-live-photo
      data-photo-src={imagePath}
      data-video-src={videoPath}
    />
  );
};

export default LivePhoto;
`;

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "mgFI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _livePhoto_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("I7GX");
/* harmony import */ var _livePhoto_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_livePhoto_module_css__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const LivePhoto = ({
  videoPath,
  interaction
}) => {
  const videoRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (videoRef.current) {
      videoRef.current.preload = "1";
    }
  }, [videoRef.current]);

  const toggle = () => {
    if (videoRef.current) {
      videoRef.current.paused ? videoRef.current.play() : videoRef.current.pause();
    }
  };

  return __jsx("video", {
    className: _livePhoto_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.video,
    loop: true,
    preload: "none",
    ref: videoRef,
    onMouseEnter: interaction === "HOVER" ? toggle : () => console.log("hei"),
    onMouseLeave: interaction === "HOVER" ? toggle : () => console.log("hei"),
    onClick: interaction === "CLICK" ? toggle : () => console.log("hei")
  }, __jsx("source", {
    src: videoPath,
    type: "video/mp4"
  }), __jsx("source", {
    src: "https://giant.gfycat.com/VerifiableTerrificHind.webm",
    type: "video/webm"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (LivePhoto);

/***/ })

/******/ });