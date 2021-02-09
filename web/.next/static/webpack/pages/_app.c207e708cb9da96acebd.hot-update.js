webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/Footer/Footer.js":
/*!*************************************!*\
  !*** ./components/Footer/Footer.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n/* harmony import */ var _ModalSubscribe_ModalSubscribe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ModalSubscribe/ModalSubscribe */ \"./components/ModalSubscribe/ModalSubscribe.js\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/tiffanybouchard/Desktop/workspace.nosync/ojos/web/components/Footer/Footer.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\nvar Footer = function Footer() {\n  _s();\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false),\n      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState, 2),\n      modalShow = _React$useState2[0],\n      setModalShow = _React$useState2[1];\n\n  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {\n    if (sessionStorage.getItem(\"closeButtonClicked\") === true) {\n      setModalShow(false);\n    }\n\n    if (localStorage.getItem(\"subscribed\") === true) {\n      setModalShow(false);\n    } else {\n      setModalShow(true);\n    }\n  }, []);\n  return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Navbar\"], {\n    className: \"footer\",\n    bg: \"white\",\n    fixed: \"sticky\",\n    expand: \"md\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 5\n    }\n  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Nav\"], {\n    className: \"mr-auto\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }\n  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Nav\"].Link, {\n    href: \"/contact\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 9\n    }\n  }, \"Contact\"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Nav\"].Link, {\n    href: \"/policy\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 9\n    }\n  }, \"Store Policy\"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Nav\"].Link, {\n    onClick: function onClick() {\n      return setModalShow(true);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 9\n    }\n  }, \"Subscribe\"), __jsx(_ModalSubscribe_ModalSubscribe__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    show: modalShow,\n    onHide: function onHide() {\n      return setModalShow(false);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 9\n    }\n  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Nav\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }\n  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Nav\"].Link, {\n    target: \"blank\",\n    href: \"http://tiffbouchard.com\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 9\n    }\n  }, \"\\xA92020 OJOS - Built & Designed by Tiffany Bouchard \\uD83C\\uDF31\")));\n};\n\n_s(Footer, \"oG8czk+kkbltfDEh1aAE+8uN2jU=\");\n\n_c = Footer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Footer);\n\nvar _c;\n\n$RefreshReg$(_c, \"Footer\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyLmpzPzFkNzciXSwibmFtZXMiOlsiRm9vdGVyIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIm1vZGFsU2hvdyIsInNldE1vZGFsU2hvdyIsInVzZUVmZmVjdCIsInNlc3Npb25TdG9yYWdlIiwiZ2V0SXRlbSIsImxvY2FsU3RvcmFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBOztBQUVBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFBQTs7QUFBQSx3QkFDZUMsNENBQUssQ0FBQ0MsUUFBTixDQUFlLEtBQWYsQ0FEZjtBQUFBO0FBQUEsTUFDWkMsU0FEWTtBQUFBLE1BQ0RDLFlBREM7O0FBR25CSCw4Q0FBSyxDQUFDSSxTQUFOLENBQWdCLFlBQU07QUFDcEIsUUFBSUMsY0FBYyxDQUFDQyxPQUFmLENBQXVCLG9CQUF2QixNQUFpRCxJQUFyRCxFQUEyRDtBQUN6REgsa0JBQVksQ0FBQyxLQUFELENBQVo7QUFDRDs7QUFDRCxRQUFJSSxZQUFZLENBQUNELE9BQWIsQ0FBcUIsWUFBckIsTUFBdUMsSUFBM0MsRUFBaUQ7QUFDL0NILGtCQUFZLENBQUMsS0FBRCxDQUFaO0FBQ0QsS0FGRCxNQUVPO0FBQ0xBLGtCQUFZLENBQUMsSUFBRCxDQUFaO0FBQ0Q7QUFDRixHQVRELEVBU0csRUFUSDtBQVdBLFNBQ0UsTUFBQyxzREFBRDtBQUFRLGFBQVMsRUFBQyxRQUFsQjtBQUEyQixNQUFFLEVBQUMsT0FBOUI7QUFBc0MsU0FBSyxFQUFDLFFBQTVDO0FBQXFELFVBQU0sRUFBQyxJQUE1RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxtREFBRDtBQUFLLGFBQVMsRUFBQyxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG1EQUFELENBQUssSUFBTDtBQUFVLFFBQUksRUFBQyxVQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixFQUVFLE1BQUMsbURBQUQsQ0FBSyxJQUFMO0FBQVUsUUFBSSxFQUFDLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGRixFQUdFLE1BQUMsbURBQUQsQ0FBSyxJQUFMO0FBQVUsV0FBTyxFQUFFO0FBQUEsYUFBTUEsWUFBWSxDQUFDLElBQUQsQ0FBbEI7QUFBQSxLQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhGLEVBSUUsTUFBQyxzRUFBRDtBQUFnQixRQUFJLEVBQUVELFNBQXRCO0FBQWlDLFVBQU0sRUFBRTtBQUFBLGFBQU1DLFlBQVksQ0FBQyxLQUFELENBQWxCO0FBQUEsS0FBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpGLENBREYsRUFPRSxNQUFDLG1EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG1EQUFELENBQUssSUFBTDtBQUFVLFVBQU0sRUFBQyxPQUFqQjtBQUF5QixRQUFJLEVBQUMseUJBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUVBREYsQ0FQRixDQURGO0FBZUQsQ0E3QkQ7O0dBQU1KLE07O0tBQUFBLE07QUErQlNBLHFFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmF2YmFyLCBOYXYgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XG5cbmltcG9ydCBNb2RhbFN1YnNjcmliZSBmcm9tIFwiLi4vTW9kYWxTdWJzY3JpYmUvTW9kYWxTdWJzY3JpYmVcIjtcblxuY29uc3QgRm9vdGVyID0gKCkgPT4ge1xuICBjb25zdCBbbW9kYWxTaG93LCBzZXRNb2RhbFNob3ddID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJjbG9zZUJ1dHRvbkNsaWNrZWRcIikgPT09IHRydWUpIHtcbiAgICAgIHNldE1vZGFsU2hvdyhmYWxzZSk7XG4gICAgfVxuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInN1YnNjcmliZWRcIikgPT09IHRydWUpIHtcbiAgICAgIHNldE1vZGFsU2hvdyhmYWxzZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldE1vZGFsU2hvdyh0cnVlKTtcbiAgICB9XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxOYXZiYXIgY2xhc3NOYW1lPVwiZm9vdGVyXCIgYmc9XCJ3aGl0ZVwiIGZpeGVkPVwic3RpY2t5XCIgZXhwYW5kPVwibWRcIj5cbiAgICAgIDxOYXYgY2xhc3NOYW1lPVwibXItYXV0b1wiPlxuICAgICAgICA8TmF2LkxpbmsgaHJlZj1cIi9jb250YWN0XCI+Q29udGFjdDwvTmF2Lkxpbms+XG4gICAgICAgIDxOYXYuTGluayBocmVmPVwiL3BvbGljeVwiPlN0b3JlIFBvbGljeTwvTmF2Lkxpbms+XG4gICAgICAgIDxOYXYuTGluayBvbkNsaWNrPXsoKSA9PiBzZXRNb2RhbFNob3codHJ1ZSl9PlN1YnNjcmliZTwvTmF2Lkxpbms+XG4gICAgICAgIDxNb2RhbFN1YnNjcmliZSBzaG93PXttb2RhbFNob3d9IG9uSGlkZT17KCkgPT4gc2V0TW9kYWxTaG93KGZhbHNlKX0gLz5cbiAgICAgIDwvTmF2PlxuICAgICAgPE5hdj5cbiAgICAgICAgPE5hdi5MaW5rIHRhcmdldD1cImJsYW5rXCIgaHJlZj1cImh0dHA6Ly90aWZmYm91Y2hhcmQuY29tXCI+XG4gICAgICAgICAgwqkyMDIwIE9KT1MgLSBCdWlsdCAmIERlc2lnbmVkIGJ5IFRpZmZhbnkgQm91Y2hhcmQg8J+MsVxuICAgICAgICA8L05hdi5MaW5rPlxuICAgICAgPC9OYXY+XG4gICAgPC9OYXZiYXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Footer/Footer.js\n");

/***/ })

})