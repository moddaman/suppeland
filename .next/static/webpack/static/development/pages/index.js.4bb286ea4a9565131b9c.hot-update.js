webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/LivePhoto/livePhoto.tsx":
/*!***************************************!*\
  !*** ./pages/LivePhoto/livePhoto.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _livePhoto_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./livePhoto.module.css */ "./pages/LivePhoto/livePhoto.module.css");
/* harmony import */ var _livePhoto_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_livePhoto_module_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/mortenovrebo/Prosjekt/suppeland/pages/LivePhoto/livePhoto.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var LivePhoto = function LivePhoto(_ref) {
  var videoPath = _ref.videoPath;
  var videoRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  var play = function play() {
    if (videoRef.current) {
      var _videoRef$current;

      (_videoRef$current = videoRef.current) === null || _videoRef$current === void 0 ? void 0 : _videoRef$current.play();
    }
  };

  var pause = function pause() {
    if (videoRef.current) {
      var _videoRef$current2;

      (_videoRef$current2 = videoRef.current) === null || _videoRef$current2 === void 0 ? void 0 : _videoRef$current2.pause();
    }
  };

  return __jsx("video", {
    className: _livePhoto_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.video,
    loop: true,
    preload: "none",
    ref: videoRef,
    onMouseEnter: play,
    onMouseLeave: pause,
    controls: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx("source", {
    src: videoPath,
    type: "video/mp4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), __jsx("source", {
    src: "https://giant.gfycat.com/VerifiableTerrificHind.webm",
    type: "video/webm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (LivePhoto);

/***/ })

})
//# sourceMappingURL=index.js.4bb286ea4a9565131b9c.hot-update.js.map