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
/* harmony import */ var _aboutLivePhoto_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./aboutLivePhoto.module.css */ "./pages/AboutLivePhoto/aboutLivePhoto.module.css");
/* harmony import */ var _aboutLivePhoto_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_aboutLivePhoto_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-syntax-highlighter */ "./node_modules/react-syntax-highlighter/dist/esm/index.js");
/* harmony import */ var react_syntax_highlighter_dist_cjs_styles_prism__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-syntax-highlighter/dist/cjs/styles/prism */ "./node_modules/react-syntax-highlighter/dist/cjs/styles/prism/index.js");
/* harmony import */ var react_syntax_highlighter_dist_cjs_styles_prism__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_syntax_highlighter_dist_cjs_styles_prism__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/mortenovrebo/Prosjekt/suppeland/pages/AboutLivePhoto/aboutLivePhoto.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var AboutLive = function AboutLive() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      showImplementation = _useState[0],
      setShowImplementation = _useState[1];

  return __jsx("section", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "Live Photo"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "En React komponent for \xE5 vise \"live photos\" ", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  })), __jsx("div", {
    className: _aboutLivePhoto_module_css__WEBPACK_IMPORTED_MODULE_2___default.a["super"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "click to play and pause"), __jsx(_LivePhoto_livePhoto__WEBPACK_IMPORTED_MODULE_1__["default"], {
    interaction: "CLICK",
    videoPath: "images/jonas.mp4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  })), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "hover to play"), __jsx(_LivePhoto_livePhoto__WEBPACK_IMPORTED_MODULE_1__["default"], {
    interaction: "HOVER",
    videoPath: "images/linn.mp4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }))), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "Pr\xF8vde f\xF8rst Apple sitt LivePhotosKit JS for \xE5 vise \"live photos\", men fant ut at det var mye lettere \xE5 bare bruke HTML Video."), __jsx(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_3__["Prism"], {
    language: "javascript",
    style: react_syntax_highlighter_dist_cjs_styles_prism__WEBPACK_IMPORTED_MODULE_4__["tomorrow"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, usageString), __jsx("button", {
    onClick: function onClick() {
      return setShowImplementation(!showImplementation);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, showImplementation ? "hide implementation" : "Show implementation"), showImplementation && __jsx(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_3__["Prism"], {
    language: "javascript",
    style: react_syntax_highlighter_dist_cjs_styles_prism__WEBPACK_IMPORTED_MODULE_4__["tomorrow"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, codeString), __jsx("code", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (AboutLive);
var usageString = "<LivePhoto interaction={\"CLICK\"} videoPath={\"<Video url>\"} />\n";
var codeString = "import React, { useRef, useEffect } from \"react\";\nimport style from \"./livePhoto.module.css\";\n\ntype Interaction = \"CLICK\" | \"HOVER\";\n\ninterface IProps {\n  videoPath: string;\n  interaction: Interaction;\n}\n\nconst LivePhoto = ({ videoPath, interaction }: IProps) => {\n  const videoRef = useRef<HTMLVideoElement>(null);\n\n  useEffect(() => {\n    if (videoRef.current) {\n      videoRef.current.preload = \"1\";\n      videoRef.current.volume = 0;\n    }\n  }, [videoRef.current]);\n\n  const toggle = () => {\n    if (videoRef.current) {\n      videoRef.current.paused\n        ? videoRef.current.play()\n        : videoRef.current.pause();\n    }\n  };\n\n  return (\n    <video\n      className={style.video}\n      loop\n      preload=\"none\"\n      ref={videoRef}\n      onMouseEnter={interaction === \"HOVER\" ? toggle : () => console.log(\"X\")}\n      onMouseLeave={interaction === \"HOVER\" ? toggle : () => console.log(\"X\")}\n      onClick={interaction === \"CLICK\" ? toggle : () => console.log(\"X\")}\n    >\n      <source src={videoPath} type=\"video/mp4\"></source>\n    </video>\n  );\n};\n\nexport default LivePhoto;\n";

/***/ })

})
//# sourceMappingURL=index.js.ae4d8ac35eee0dc17ecc.hot-update.js.map