webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var _components_Instagram_Instagram__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Instagram/Instagram */ \"./components/Instagram/Instagram.js\");\n/* harmony import */ var _components_ProductCarousel_ProductCarousel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/ProductCarousel/ProductCarousel */ \"./components/ProductCarousel/ProductCarousel.js\");\n/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../client */ \"./client.js\");\n/* harmony import */ var _imageUrlBuilder__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../imageUrlBuilder */ \"./imageUrlBuilder.js\");\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/tiffanybouchard/Desktop/workspace.nosync/ojos/web/pages/index.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n // Bootstrap\n\n\n\n // Sanity.io\n\n\n\n\nvar Home = function Home(props) {\n  var _props$images = props.images,\n      images = _props$images === void 0 ? [] : _props$images; // Assigns variables to specific images to maintain order (without this images would show up in random orders, and for ex. the index 0 would not necessarily correspond with imageOne - mostly for client so the titles in Sanity studio correspond with the placement of the specific image, maybe find better way to accomplish)\n\n  var imageOne = images.filter(function (image) {\n    return image.title === \"Image One\";\n  });\n  var imageTwo = images.filter(function (image) {\n    return image.title === \"Image Two\";\n  });\n  var imageThree = images.filter(function (image) {\n    return image.title === \"Image Three\";\n  });\n  var imageFour = images.filter(function (image) {\n    return image.title === \"Image Four\";\n  });\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 9\n    }\n  }, \"OJOS\"), __jsx(\"link\", {\n    rel: \"icon\",\n    href: \"/favicon.ico\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 9\n    }\n  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__[\"Container\"], {\n    fluid: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }\n  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__[\"Row\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 9\n    }\n  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__[\"Col\"], {\n    xs: 12,\n    sm: 12,\n    md: 5,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 11\n    }\n  }, __jsx(\"div\", {\n    className: \"landing-image-one\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 13\n    }\n  }, __jsx(\"a\", {\n    href: imageOne[0].url,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 15\n    }\n  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__[\"Image\"], {\n    fluid: true,\n    src: Object(_imageUrlBuilder__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(imageOne[0].image).quality(100).url(),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 17\n    }\n  })), __jsx(\"a\", {\n    href: imageOne[0].url,\n    className: \"image-description\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 15\n    }\n  }, imageOne[0].description))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__[\"Col\"], {\n    xs: 12,\n    sm: 12,\n    md: 7,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 11\n    }\n  }, __jsx(\"div\", {\n    className: \"landing-image-two\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 13\n    }\n  }, __jsx(\"a\", {\n    href: imageTwo[0].url,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 15\n    }\n  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__[\"Image\"], {\n    fluid: true,\n    src: Object(_imageUrlBuilder__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(imageTwo[0].image).quality(100).url(),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 17\n    }\n  })), __jsx(\"a\", {\n    href: imageTwo[0].url,\n    className: \"image-description\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 15\n    }\n  }, imageTwo[0].description)))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__[\"Row\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 9\n    }\n  }, __jsx(\"h2\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 11\n    }\n  }, \"New Arrivals\"), __jsx(_components_ProductCarousel_ProductCarousel__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 11\n    }\n  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__[\"Row\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 9\n    }\n  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__[\"Col\"], {\n    xs: 12,\n    sm: 12,\n    md: 6,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 11\n    }\n  }, __jsx(\"div\", {\n    className: \"landing-image-three\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 13\n    }\n  }, __jsx(\"a\", {\n    href: imageThree[0].url,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 15\n    }\n  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__[\"Image\"], {\n    fluid: true,\n    src: Object(_imageUrlBuilder__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(imageThree[0].image).quality(100).url(),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 17\n    }\n  })), __jsx(\"a\", {\n    href: imageThree[0].url,\n    className: \"image-description\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 15\n    }\n  }, imageThree[0].description))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__[\"Col\"], {\n    xs: 12,\n    sm: 12,\n    md: 6,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 11\n    }\n  }, __jsx(\"div\", {\n    className: \"landing-image-four\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 13\n    }\n  }, __jsx(\"a\", {\n    href: imageFour[0].url,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 15\n    }\n  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__[\"Image\"], {\n    fluid: true,\n    src: Object(_imageUrlBuilder__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(imageFour[0].image).quality(100).url(),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 17\n    }\n  })), __jsx(\"a\", {\n    href: imageFour[0].url,\n    className: \"image-description\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 15\n    }\n  }, imageFour[0].description))))), __jsx(_components_Instagram_Instagram__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 101,\n      columnNumber: 7\n    }\n  }));\n}; // Fetching data from Sanity.io with GROQ query\n\n\n_c = Home;\nHome.getInitialProps = /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n    while (1) {\n      switch (_context.prev = _context.next) {\n        case 0:\n          _context.next = 2;\n          return _client__WEBPACK_IMPORTED_MODULE_7__[\"default\"].fetch(\"\\n  *[_type == \\\"homepage\\\"]{url, description, title, image}\\n  \");\n\n        case 2:\n          _context.t0 = _context.sent;\n          return _context.abrupt(\"return\", {\n            images: _context.t0\n          });\n\n        case 4:\n        case \"end\":\n          return _context.stop();\n      }\n    }\n  }, _callee);\n}));\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lIiwicHJvcHMiLCJpbWFnZXMiLCJpbWFnZU9uZSIsImZpbHRlciIsImltYWdlIiwidGl0bGUiLCJpbWFnZVR3byIsImltYWdlVGhyZWUiLCJpbWFnZUZvdXIiLCJ1cmwiLCJ1cmxGb3IiLCJxdWFsaXR5IiwiZGVzY3JpcHRpb24iLCJnZXRJbml0aWFsUHJvcHMiLCJjbGllbnQiLCJmZXRjaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBRUE7O0FBQ0E7QUFFQTtDQUVBOztBQUNBO0FBQ0E7O0FBR0EsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBQ0MsS0FBRCxFQUFXO0FBQUEsc0JBQ0VBLEtBREYsQ0FDZEMsTUFEYztBQUFBLE1BQ2RBLE1BRGMsOEJBQ0wsRUFESyxrQkFHdEI7O0FBQ0EsTUFBTUMsUUFBUSxHQUFHRCxNQUFNLENBQUNFLE1BQVAsQ0FBYyxVQUFDQyxLQUFELEVBQVc7QUFDeEMsV0FBT0EsS0FBSyxDQUFDQyxLQUFOLEtBQWdCLFdBQXZCO0FBQ0QsR0FGZ0IsQ0FBakI7QUFJQSxNQUFNQyxRQUFRLEdBQUdMLE1BQU0sQ0FBQ0UsTUFBUCxDQUFjLFVBQUNDLEtBQUQsRUFBVztBQUN4QyxXQUFPQSxLQUFLLENBQUNDLEtBQU4sS0FBZ0IsV0FBdkI7QUFDRCxHQUZnQixDQUFqQjtBQUlBLE1BQU1FLFVBQVUsR0FBR04sTUFBTSxDQUFDRSxNQUFQLENBQWMsVUFBQ0MsS0FBRCxFQUFXO0FBQzFDLFdBQU9BLEtBQUssQ0FBQ0MsS0FBTixLQUFnQixhQUF2QjtBQUNELEdBRmtCLENBQW5CO0FBSUEsTUFBTUcsU0FBUyxHQUFHUCxNQUFNLENBQUNFLE1BQVAsQ0FBYyxVQUFDQyxLQUFELEVBQVc7QUFDekMsV0FBT0EsS0FBSyxDQUFDQyxLQUFOLEtBQWdCLFlBQXZCO0FBQ0QsR0FGaUIsQ0FBbEI7QUFJQSxTQUNFLG1FQUNF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Q0FBTixDQUEyQk8sT0FBM0IsQ0FBbUMsR0FBbkMsRUFBd0NGLEdBQXhDLEVBRlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsRUFPRTtBQUFHLFFBQUksRUFBRUQsU0FBUyxDQUFDLENBQUQsQ0FBVCxDQUFhQyxHQUF0QjtBQUEyQixhQUFTLEVBQUMsbUJBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0QsU0FBUyxDQUFDLENBQUQsQ0FBVCxDQUFhSSxXQURoQixDQVBGLENBREYsQ0FkRixDQWpDRixDQUxGLEVBbUVFLE1BQUMsdUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQW5FRixDQURGO0FBdUVELENBM0ZELEMsQ0E2RkE7OztLQTdGTWIsSTtBQThGTkEsSUFBSSxDQUFDYyxlQUFMLGlNQUF1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFDUEMsK0NBQU0sQ0FBQ0MsS0FBUCxvRUFETzs7QUFBQTtBQUFBO0FBQUE7QUFDckJkLGtCQURxQjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLENBQXZCO0FBTWVGLG1FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5cbi8vIEJvb3RzdHJhcFxuaW1wb3J0IHsgUm93LCBDb2wsIENvbnRhaW5lciwgSW1hZ2UgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XG5cbmltcG9ydCBJbnN0YWdyYW0gZnJvbSBcIi4uL2NvbXBvbmVudHMvSW5zdGFncmFtL0luc3RhZ3JhbVwiO1xuaW1wb3J0IFByb2R1Y3RDYXJvdXNlbCBmcm9tIFwiLi4vY29tcG9uZW50cy9Qcm9kdWN0Q2Fyb3VzZWwvUHJvZHVjdENhcm91c2VsXCJcbi8vIFNhbml0eS5pb1xuaW1wb3J0IGNsaWVudCBmcm9tIFwiLi4vY2xpZW50XCI7XG5pbXBvcnQgdXJsRm9yIGZyb20gXCIuLi9pbWFnZVVybEJ1aWxkZXJcIjtcblxuXG5jb25zdCBIb21lID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgaW1hZ2VzID0gW10gfSA9IHByb3BzO1xuXG4gIC8vIEFzc2lnbnMgdmFyaWFibGVzIHRvIHNwZWNpZmljIGltYWdlcyB0byBtYWludGFpbiBvcmRlciAod2l0aG91dCB0aGlzIGltYWdlcyB3b3VsZCBzaG93IHVwIGluIHJhbmRvbSBvcmRlcnMsIGFuZCBmb3IgZXguIHRoZSBpbmRleCAwIHdvdWxkIG5vdCBuZWNlc3NhcmlseSBjb3JyZXNwb25kIHdpdGggaW1hZ2VPbmUgLSBtb3N0bHkgZm9yIGNsaWVudCBzbyB0aGUgdGl0bGVzIGluIFNhbml0eSBzdHVkaW8gY29ycmVzcG9uZCB3aXRoIHRoZSBwbGFjZW1lbnQgb2YgdGhlIHNwZWNpZmljIGltYWdlLCBtYXliZSBmaW5kIGJldHRlciB3YXkgdG8gYWNjb21wbGlzaClcbiAgY29uc3QgaW1hZ2VPbmUgPSBpbWFnZXMuZmlsdGVyKChpbWFnZSkgPT4ge1xuICAgIHJldHVybiBpbWFnZS50aXRsZSA9PT0gXCJJbWFnZSBPbmVcIjtcbiAgfSk7XG5cbiAgY29uc3QgaW1hZ2VUd28gPSBpbWFnZXMuZmlsdGVyKChpbWFnZSkgPT4ge1xuICAgIHJldHVybiBpbWFnZS50aXRsZSA9PT0gXCJJbWFnZSBUd29cIjtcbiAgfSk7XG5cbiAgY29uc3QgaW1hZ2VUaHJlZSA9IGltYWdlcy5maWx0ZXIoKGltYWdlKSA9PiB7XG4gICAgcmV0dXJuIGltYWdlLnRpdGxlID09PSBcIkltYWdlIFRocmVlXCI7XG4gIH0pO1xuXG4gIGNvbnN0IGltYWdlRm91ciA9IGltYWdlcy5maWx0ZXIoKGltYWdlKSA9PiB7XG4gICAgcmV0dXJuIGltYWdlLnRpdGxlID09PSBcIkltYWdlIEZvdXJcIjtcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5PSk9TPC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPENvbnRhaW5lciBmbHVpZD5cbiAgICAgICAgPFJvdz5cbiAgICAgICAgICA8Q29sIHhzPXsxMn0gc209ezEyfSBtZD17NX0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhbmRpbmctaW1hZ2Utb25lXCI+XG4gICAgICAgICAgICAgIDxhIGhyZWY9e2ltYWdlT25lWzBdLnVybH0+XG4gICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICBmbHVpZFxuICAgICAgICAgICAgICAgICAgc3JjPXt1cmxGb3IoaW1hZ2VPbmVbMF0uaW1hZ2UpLnF1YWxpdHkoMTAwKS51cmwoKX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDxhIGhyZWY9e2ltYWdlT25lWzBdLnVybH0gY2xhc3NOYW1lPVwiaW1hZ2UtZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgICAgICB7aW1hZ2VPbmVbMF0uZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgIDxDb2wgeHM9ezEyfSBzbT17MTJ9IG1kPXs3fT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFuZGluZy1pbWFnZS10d29cIj5cbiAgICAgICAgICAgICAgPGEgaHJlZj17aW1hZ2VUd29bMF0udXJsfT5cbiAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgIGZsdWlkXG4gICAgICAgICAgICAgICAgICBzcmM9e3VybEZvcihpbWFnZVR3b1swXS5pbWFnZSkucXVhbGl0eSgxMDApLnVybCgpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPGEgaHJlZj17aW1hZ2VUd29bMF0udXJsfSBjbGFzc05hbWU9XCJpbWFnZS1kZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgICAgIHtpbWFnZVR3b1swXS5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgIDwvUm93PlxuICAgICAgICA8Um93PlxuICAgICAgICAgIDxoMj5OZXcgQXJyaXZhbHM8L2gyPlxuICAgICAgICAgIDxQcm9kdWN0Q2Fyb3VzZWwvPlxuICAgICAgICA8L1Jvdz5cbiAgICAgICAgPFJvdz5cbiAgICAgICAgICA8Q29sIHhzPXsxMn0gc209ezEyfSBtZD17Nn0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhbmRpbmctaW1hZ2UtdGhyZWVcIj5cbiAgICAgICAgICAgICAgPGEgaHJlZj17aW1hZ2VUaHJlZVswXS51cmx9PlxuICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgZmx1aWRcbiAgICAgICAgICAgICAgICAgIHNyYz17dXJsRm9yKGltYWdlVGhyZWVbMF0uaW1hZ2UpLnF1YWxpdHkoMTAwKS51cmwoKX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDxhIGhyZWY9e2ltYWdlVGhyZWVbMF0udXJsfSBjbGFzc05hbWU9XCJpbWFnZS1kZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgICAgIHtpbWFnZVRocmVlWzBdLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICA8Q29sIHhzPXsxMn0gc209ezEyfSBtZD17Nn0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhbmRpbmctaW1hZ2UtZm91clwiPlxuICAgICAgICAgICAgICA8YSBocmVmPXtpbWFnZUZvdXJbMF0udXJsfT5cbiAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgIGZsdWlkXG4gICAgICAgICAgICAgICAgICBzcmM9e3VybEZvcihpbWFnZUZvdXJbMF0uaW1hZ2UpLnF1YWxpdHkoMTAwKS51cmwoKX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDxhIGhyZWY9e2ltYWdlRm91clswXS51cmx9IGNsYXNzTmFtZT1cImltYWdlLWRlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgICAgICAge2ltYWdlRm91clswXS5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgIDwvUm93PlxuICAgICAgPC9Db250YWluZXI+XG4gICAgICA8SW5zdGFncmFtIC8+XG4gICAgPC8+XG4gICk7XG59O1xuXG4vLyBGZXRjaGluZyBkYXRhIGZyb20gU2FuaXR5LmlvIHdpdGggR1JPUSBxdWVyeVxuSG9tZS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoKSA9PiAoe1xuICBpbWFnZXM6IGF3YWl0IGNsaWVudC5mZXRjaChgXG4gICpbX3R5cGUgPT0gXCJob21lcGFnZVwiXXt1cmwsIGRlc2NyaXB0aW9uLCB0aXRsZSwgaW1hZ2V9XG4gIGApLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})