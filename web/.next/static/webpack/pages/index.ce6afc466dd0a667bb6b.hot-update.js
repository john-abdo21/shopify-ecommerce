webpackHotUpdate_N_E("pages/index",{

/***/ "./components/ProductCarousel/ProductCarousel.js":
/*!*******************************************************!*\
  !*** ./components/ProductCarousel/ProductCarousel.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _trendyol_js_react_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @trendyol-js/react-carousel */ \"./node_modules/@trendyol-js/react-carousel/dist/es/index.js\");\n/* harmony import */ var _context_shopContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context/shopContext */ \"./context/shopContext.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/tiffanybouchard/Desktop/workspace.nosync/ojos/web/components/ProductCarousel/ProductCarousel.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nvar ProductCarousel = function ProductCarousel() {\n  _s();\n\n  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(_context_shopContext__WEBPACK_IMPORTED_MODULE_2__[\"ShopContext\"]),\n      collection = _React$useContext.collection,\n      fetchCollection = _React$useContext.fetchCollection;\n\n  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {\n    var query = \"New\";\n    fetchCollection(query);\n    return function () {};\n  }, [fetchCollection]);\n  return __jsx(_trendyol_js_react_carousel__WEBPACK_IMPORTED_MODULE_1__[\"Carousel\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 5\n    }\n  }, collection && collection.products && collection.products.map(function (product) {\n    return __jsx(\"div\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 9\n      }\n    }, __jsx(\"img\", {\n      src: product.images[0].src,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 11\n      }\n    }));\n  }));\n};\n\n_s(ProductCarousel, \"4GzqwLF89WFxRhpH1E7qVBLK9XA=\");\n\n_c = ProductCarousel;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductCarousel);\n\nvar _c;\n\n$RefreshReg$(_c, \"ProductCarousel\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0Q2Fyb3VzZWwvUHJvZHVjdENhcm91c2VsLmpzPzEwYjAiXSwibmFtZXMiOlsiUHJvZHVjdENhcm91c2VsIiwiUmVhY3QiLCJ1c2VDb250ZXh0IiwiU2hvcENvbnRleHQiLCJjb2xsZWN0aW9uIiwiZmV0Y2hDb2xsZWN0aW9uIiwidXNlRWZmZWN0IiwicXVlcnkiLCJwcm9kdWN0cyIsIm1hcCIsInByb2R1Y3QiLCJpbWFnZXMiLCJzcmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFHQSxJQUFNQSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQU07QUFBQTs7QUFBQSwwQkFDWUMsNENBQUssQ0FBQ0MsVUFBTixDQUFpQkMsZ0VBQWpCLENBRFo7QUFBQSxNQUNwQkMsVUFEb0IscUJBQ3BCQSxVQURvQjtBQUFBLE1BQ1JDLGVBRFEscUJBQ1JBLGVBRFE7O0FBSTVCSiw4Q0FBSyxDQUFDSyxTQUFOLENBQWdCLFlBQU07QUFDcEIsUUFBSUMsS0FBSyxHQUFHLEtBQVo7QUFDQUYsbUJBQWUsQ0FBQ0UsS0FBRCxDQUFmO0FBQ0EsV0FBTyxZQUFNLENBQUUsQ0FBZjtBQUNELEdBSkQsRUFJRyxDQUFDRixlQUFELENBSkg7QUFRQSxTQUNFLE1BQUMsb0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHRCxVQUFVLElBQUlBLFVBQVUsQ0FBQ0ksUUFBekIsSUFBcUNKLFVBQVUsQ0FBQ0ksUUFBWCxDQUFvQkMsR0FBcEIsQ0FBd0IsVUFBQ0MsT0FBRDtBQUFBLFdBQzVEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFLLFNBQUcsRUFBRUEsT0FBTyxDQUFDQyxNQUFSLENBQWUsQ0FBZixFQUFrQkMsR0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLENBRDREO0FBQUEsR0FBeEIsQ0FEeEMsQ0FERjtBQVNELENBckJEOztHQUFNWixlOztLQUFBQSxlO0FBdUJTQSw4RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvUHJvZHVjdENhcm91c2VsL1Byb2R1Y3RDYXJvdXNlbC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhcm91c2VsIH0gZnJvbSAnQHRyZW5keW9sLWpzL3JlYWN0LWNhcm91c2VsJztcbmltcG9ydCB7IFNob3BDb250ZXh0IH0gZnJvbSBcIi4uLy4uL2NvbnRleHQvc2hvcENvbnRleHRcIjtcblxuXG5jb25zdCBQcm9kdWN0Q2Fyb3VzZWwgPSAoKSA9PiB7XG4gIGNvbnN0IHsgY29sbGVjdGlvbiwgZmV0Y2hDb2xsZWN0aW9uIH0gPSBSZWFjdC51c2VDb250ZXh0KFNob3BDb250ZXh0KTtcblxuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGV0IHF1ZXJ5ID0gXCJOZXdcIjtcbiAgICBmZXRjaENvbGxlY3Rpb24ocXVlcnkpO1xuICAgIHJldHVybiAoKSA9PiB7fTtcbiAgfSwgW2ZldGNoQ29sbGVjdGlvbl0pO1xuXG5cblxuICByZXR1cm4gKFxuICAgIDxDYXJvdXNlbD5cbiAgICAgIHtjb2xsZWN0aW9uICYmIGNvbGxlY3Rpb24ucHJvZHVjdHMgJiYgY29sbGVjdGlvbi5wcm9kdWN0cy5tYXAoKHByb2R1Y3QpID0+IChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aW1nIHNyYz17cHJvZHVjdC5pbWFnZXNbMF0uc3JjfS8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSl9XG4gICAgPC9DYXJvdXNlbD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RDYXJvdXNlbDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ProductCarousel/ProductCarousel.js\n");

/***/ })

})