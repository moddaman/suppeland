webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/AboutLivePhoto/aboutLivePhoto.tsx":
/*!*************************************************!*\
  !*** ./pages/AboutLivePhoto/aboutLivePhoto.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _LivePhoto_livePhoto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../LivePhoto/livePhoto */ "./pages/LivePhoto/livePhoto.tsx");
/* harmony import */ var react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-syntax-highlighter */ "./node_modules/react-syntax-highlighter/dist/esm/index.js");
/* harmony import */ var react_syntax_highlighter_dist_cjs_styles_prism__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-syntax-highlighter/dist/cjs/styles/prism */ "./node_modules/react-syntax-highlighter/dist/cjs/styles/prism/index.js");
/* harmony import */ var react_syntax_highlighter_dist_cjs_styles_prism__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_syntax_highlighter_dist_cjs_styles_prism__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/mortenovrebo/Prosjekt/suppeland/pages/AboutLivePhoto/aboutLivePhoto.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 // import stillImage from "./images/IMG_0682.jpg";
// import videos from "./images/IMG_0682.mp4";
// import linnBilde from "./images/linn.jpg";
// import linnVideo from "./images/linn.mp4";
// import jonasBilde from "./images/jonas.jpg";
// import jonasVideo from "./images/jonas.mp4";




var AboutLivePhoto = function AboutLivePhoto() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      showImplementation = _useState[0],
      setShowImplementation = _useState[1];

  var copyText = function copyText() {};

  return __jsx("section", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "Live Photo"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "A React component to show live photos ", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), "Hover over the image to \"play\" photo"), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx(_LivePhoto_livePhoto__WEBPACK_IMPORTED_MODULE_1__["default"], {
    imagePath: "images/jonas.jpg",
    videoPath: "images/jonas.mp4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  })), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "Apple has a LivePhotosKit JS, but i found it a little bit chunky to use. So i made a react wrapper over it. Here is how you would use it:"), __jsx(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_2__["Prism"], {
    language: "javascript",
    style: react_syntax_highlighter_dist_cjs_styles_prism__WEBPACK_IMPORTED_MODULE_3__["tomorrow"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, usageString), __jsx("button", {
    onClick: function onClick() {
      return setShowImplementation(!showImplementation);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, showImplementation ? "hide implementation" : "Show implementation"), showImplementation && __jsx(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_2__["Prism"], {
    language: "javascript",
    style: react_syntax_highlighter_dist_cjs_styles_prism__WEBPACK_IMPORTED_MODULE_3__["tomorrow"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, codeString), __jsx("code", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (AboutLivePhoto);
var usageString = "<LivePhoto imagePath={\"./images/horse.jpg\"} videoPath={\"./images/horse.mp4\"} />\n";
var codeString = "import React, { useRef, useEffect, useState } from \"react\";\nimport * as LivePhotosKit from \"livephotoskit\";\nimport style from \"./LivePhoto.module.scss\";\nimport { PlaybackStyleLiteral } from \"livephotoskit\";\n\ninterface IProps {\n  imagePath: string;\n  videoPath: string;\n  playbackStyle?: PlaybackStyleLiteral;\n}\n\nconst LivePhoto = ({\n  imagePath,\n  videoPath,\n  playbackStyle = LivePhotosKit.PlaybackStyle.LOOP\n}: IProps) => {\n  const textInput = useRef<HTMLInputElement>(null);\n  const [player, setPlayer] = useState<LivePhotosKit.Player>();\n\n  useEffect(() => {\n    if (textInput && textInput.current) {\n      const htmlPlayer = LivePhotosKit.Player(textInput.current);\n      setPlayer(htmlPlayer);\n      if (player) {\n        player.showsNativeControls = false;\n        player.playbackStyle = playbackStyle;\n      }\n    }\n  });\n\n  const playLoop = () => {\n    if (player) {\n      player.play();\n    }\n  };\n\n  const playStop = () => {\n    if (player) {\n      player.pause();\n    }\n  };\n\n  return (\n    <div\n      className={style.photo}\n      onMouseEnter={playLoop}\n      onTouchStart={playLoop}\n      onTouchEnd={playStop}\n      onMouseLeave={playStop}\n      ref={textInput}\n      data-live-photo\n      data-photo-src={imagePath}\n      data-video-src={videoPath}\n    />\n  );\n};\n\nexport default LivePhoto;\n";

/***/ })

})
//# sourceMappingURL=index.js.4c5f8f24c93b2d78471d.hot-update.js.map