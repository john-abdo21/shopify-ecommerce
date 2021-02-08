webpackHotUpdate_N_E("pages/index",{

/***/ "./components/ProductCarousel/ProductCarousel.js":
/*!*******************************************************!*\
  !*** ./components/ProductCarousel/ProductCarousel.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var _trendyol_js_react_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @trendyol-js/react-carousel */ \"./node_modules/@trendyol-js/react-carousel/dist/es/index.js\");\n/* harmony import */ var _context_shopContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/shopContext */ \"./context/shopContext.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/tiffanybouchard/Desktop/workspace.nosync/ojos/web/components/ProductCarousel/ProductCarousel.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nvar ProductCarousel = function ProductCarousel() {\n  _s();\n\n  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(_context_shopContext__WEBPACK_IMPORTED_MODULE_3__[\"ShopContext\"]),\n      collection = _React$useContext.collection,\n      fetchCollection = _React$useContext.fetchCollection;\n\n  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {\n    var query = \"New\";\n    fetchCollection(query);\n    return function () {};\n  }, [fetchCollection]);\n  if (!collection.products) return __jsx(\"div\", {\n    className: \"page-spinner\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }\n  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Spinner\"], {\n    animation: \"border\",\n    role: \"status\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 9\n    }\n  }, __jsx(\"span\", {\n    className: \"sr-only\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 11\n    }\n  }, \"Loading...\")));else return __jsx(_trendyol_js_react_carousel__WEBPACK_IMPORTED_MODULE_2__[\"Carousel\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 5\n    }\n  }, collection.products.map(function (product) {\n    return __jsx(\"div\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 9\n      }\n    }, __jsx(\"div\", {\n      className: \"product-section\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 11\n      }\n    }, __jsx(\"a\", {\n      href: \"/products/\".concat(product.handle),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 11\n      }\n    }, __jsx(\"img\", {\n      className: \"products\",\n      fluid: true,\n      src: product.images[0].src,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 13\n      }\n    }))), __jsx(\"div\", {\n      className: \"product-description\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 9\n      }\n    }, __jsx(\"a\", {\n      href: \"/products/\".concat(product.handle),\n      className: \"product-name\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 11\n      }\n    }, product.title), __jsx(\"a\", {\n      href: \"/products/\".concat(product.handle),\n      className: \"product-price\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 11\n      }\n    }, product.availableForSale ? \"$\" + product.variants[0].price : \"Sold out\")));\n  }));\n};\n\n_s(ProductCarousel, \"4GzqwLF89WFxRhpH1E7qVBLK9XA=\");\n\n_c = ProductCarousel;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductCarousel);\n\nvar _c;\n\n$RefreshReg$(_c, \"ProductCarousel\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0Q2Fyb3VzZWwvUHJvZHVjdENhcm91c2VsLmpzPzEwYjAiXSwibmFtZXMiOlsiUHJvZHVjdENhcm91c2VsIiwiUmVhY3QiLCJ1c2VDb250ZXh0IiwiU2hvcENvbnRleHQiLCJjb2xsZWN0aW9uIiwiZmV0Y2hDb2xsZWN0aW9uIiwidXNlRWZmZWN0IiwicXVlcnkiLCJwcm9kdWN0cyIsIm1hcCIsInByb2R1Y3QiLCJoYW5kbGUiLCJpbWFnZXMiLCJzcmMiLCJ0aXRsZSIsImF2YWlsYWJsZUZvclNhbGUiLCJ2YXJpYW50cyIsInByaWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUdBO0FBQ0E7O0FBR0EsSUFBTUEsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixHQUFNO0FBQUE7O0FBQUEsMEJBQ1lDLDRDQUFLLENBQUNDLFVBQU4sQ0FBaUJDLGdFQUFqQixDQURaO0FBQUEsTUFDcEJDLFVBRG9CLHFCQUNwQkEsVUFEb0I7QUFBQSxNQUNSQyxlQURRLHFCQUNSQSxlQURROztBQUc1QkosOENBQUssQ0FBQ0ssU0FBTixDQUFnQixZQUFNO0FBQ3BCLFFBQUlDLEtBQUssR0FBRyxLQUFaO0FBQ0FGLG1CQUFlLENBQUNFLEtBQUQsQ0FBZjtBQUNBLFdBQU8sWUFBTSxDQUFFLENBQWY7QUFDRCxHQUpELEVBSUcsQ0FBQ0YsZUFBRCxDQUpIO0FBTUEsTUFBSSxDQUFDRCxVQUFVLENBQUNJLFFBQWhCLEVBQ0UsT0FDRTtBQUFLLGFBQVMsRUFBQyxjQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHVEQUFEO0FBQVMsYUFBUyxFQUFDLFFBQW5CO0FBQTRCLFFBQUksRUFBQyxRQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTSxhQUFTLEVBQUMsU0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixDQURGLENBREYsQ0FERixLQVFLLE9BQ0gsTUFBQyxvRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dKLFVBQVUsQ0FBQ0ksUUFBWCxDQUFvQkMsR0FBcEIsQ0FBd0IsVUFBQ0MsT0FBRDtBQUFBLFdBQ3ZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFLLGVBQVMsRUFBQyxpQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0E7QUFBRyxVQUFJLHNCQUFlQSxPQUFPLENBQUNDLE1BQXZCLENBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQ0UsZUFBUyxFQUFDLFVBRFo7QUFFRSxXQUFLLE1BRlA7QUFHRSxTQUFHLEVBQUVELE9BQU8sQ0FBQ0UsTUFBUixDQUFlLENBQWYsRUFBa0JDLEdBSHpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixDQURBLENBREYsRUFVQTtBQUFLLGVBQVMsRUFBQyxxQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFDRSxVQUFJLHNCQUFlSCxPQUFPLENBQUNDLE1BQXZCLENBRE47QUFFRSxlQUFTLEVBQUMsY0FGWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BSUdELE9BQU8sQ0FBQ0ksS0FKWCxDQURGLEVBT0U7QUFBRyxVQUFJLHNCQUFlSixPQUFPLENBQUNDLE1BQXZCLENBQVA7QUFBd0MsZUFBUyxFQUFDLGVBQWxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDR0QsT0FBTyxDQUFDSyxnQkFBUixHQUNHLE1BQU1MLE9BQU8sQ0FBQ00sUUFBUixDQUFpQixDQUFqQixFQUFvQkMsS0FEN0IsR0FFRyxVQUhOLENBUEYsQ0FWQSxDQUR1QjtBQUFBLEdBQXhCLENBREgsQ0FERztBQThCTixDQS9DRDs7R0FBTWpCLGU7O0tBQUFBLGU7QUFpRFNBLDhFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Qcm9kdWN0Q2Fyb3VzZWwvUHJvZHVjdENhcm91c2VsLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3Bpbm5lciB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcblxuXG5pbXBvcnQgeyBDYXJvdXNlbCB9IGZyb20gJ0B0cmVuZHlvbC1qcy9yZWFjdC1jYXJvdXNlbCc7XG5pbXBvcnQgeyBTaG9wQ29udGV4dCB9IGZyb20gXCIuLi8uLi9jb250ZXh0L3Nob3BDb250ZXh0XCI7XG5cblxuY29uc3QgUHJvZHVjdENhcm91c2VsID0gKCkgPT4ge1xuICBjb25zdCB7IGNvbGxlY3Rpb24sIGZldGNoQ29sbGVjdGlvbiB9ID0gUmVhY3QudXNlQ29udGV4dChTaG9wQ29udGV4dCk7XG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBsZXQgcXVlcnkgPSBcIk5ld1wiO1xuICAgIGZldGNoQ29sbGVjdGlvbihxdWVyeSk7XG4gICAgcmV0dXJuICgpID0+IHt9O1xuICB9LCBbZmV0Y2hDb2xsZWN0aW9uXSk7XG5cbiAgaWYgKCFjb2xsZWN0aW9uLnByb2R1Y3RzKVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2Utc3Bpbm5lclwiPlxuICAgICAgICA8U3Bpbm5lciBhbmltYXRpb249XCJib3JkZXJcIiByb2xlPVwic3RhdHVzXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPkxvYWRpbmcuLi48L3NwYW4+XG4gICAgICAgIDwvU3Bpbm5lcj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIGVsc2UgcmV0dXJuIChcbiAgICA8Q2Fyb3VzZWw+XG4gICAgICB7Y29sbGVjdGlvbi5wcm9kdWN0cy5tYXAoKHByb2R1Y3QpID0+IChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3Qtc2VjdGlvblwiPlxuICAgICAgICAgIDxhIGhyZWY9e2AvcHJvZHVjdHMvJHtwcm9kdWN0LmhhbmRsZX1gfT5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHJvZHVjdHNcIlxuICAgICAgICAgICAgICBmbHVpZFxuICAgICAgICAgICAgICBzcmM9e3Byb2R1Y3QuaW1hZ2VzWzBdLnNyY31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWRlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGhyZWY9e2AvcHJvZHVjdHMvJHtwcm9kdWN0LmhhbmRsZX1gfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicHJvZHVjdC1uYW1lXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7cHJvZHVjdC50aXRsZX1cbiAgICAgICAgICA8L2E+XG4gICAgICAgICAgPGEgaHJlZj17YC9wcm9kdWN0cy8ke3Byb2R1Y3QuaGFuZGxlfWB9IGNsYXNzTmFtZT1cInByb2R1Y3QtcHJpY2VcIj5cbiAgICAgICAgICAgIHtwcm9kdWN0LmF2YWlsYWJsZUZvclNhbGVcbiAgICAgICAgICAgICAgPyBcIiRcIiArIHByb2R1Y3QudmFyaWFudHNbMF0ucHJpY2VcbiAgICAgICAgICAgICAgOiBcIlNvbGQgb3V0XCJ9XG4gICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkpfVxuICAgIDwvQ2Fyb3VzZWw+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0Q2Fyb3VzZWw7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ProductCarousel/ProductCarousel.js\n");

/***/ })

})