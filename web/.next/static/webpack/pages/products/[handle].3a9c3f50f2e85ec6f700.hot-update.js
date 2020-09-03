webpackHotUpdate_N_E("pages/products/[handle]",{

/***/ "./pages/products/[handle].js":
/*!************************************!*\
  !*** ./pages/products/[handle].js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _context_shopContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../context/shopContext */ \"./context/shopContext.js\");\n/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../client */ \"./client.js\");\n/* harmony import */ var _imageUrlBuilder__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../imageUrlBuilder */ \"./imageUrlBuilder.js\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/tiffanybouchard/Desktop/workspace/ojos/web/pages/products/[handle].js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\n // Sanity.io\n\n\n // Bootstrap\n\n\n\n\nvar ProductDetails = function ProductDetails(props) {\n  _s();\n\n  // const [size, setSize] = React.useState();\n  // const [product, setProduct] = React.useState();\n  // const handleChange = (event) => {\n  //   setSize(event.target.value);\n  // };\n  // const handleClick = () => {\n  //   setProduct(currentProduct);\n  //   localStorage.setItem(\"product\", JSON.stringify(currentProduct));\n  // };\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(true),\n      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_React$useState, 2),\n      show = _React$useState2[0],\n      setShow = _React$useState2[1];\n\n  var handle = props.params.handle;\n\n  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_3___default.a.useContext(_context_shopContext__WEBPACK_IMPORTED_MODULE_5__[\"ShopContext\"]),\n      checkout = _React$useContext.checkout,\n      fetchProductByHandle = _React$useContext.fetchProductByHandle,\n      addItemToCheckout = _React$useContext.addItemToCheckout,\n      product = _React$useContext.product; // const checkIfItemInCart = async () => {\n  //   console.log(checkout);\n  // };\n  // console.log(checkout.lineItems);\n  // const currentCheckoutItems = await checkout.lineItems;\n  // currentCheckoutItems.forEach((item) => {\n  //   if (item.id === id) {\n  //     console.log(\"in cart!\");\n  //     // this.setState({ itemInCart: true });\n  //   }\n  // });\n\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    fetchProductByHandle(handle);\n    return function () {};\n  }, [fetchProductByHandle, handle]); // useEffect(() => {\n  //   fetchCheckout(checkout.id);\n  //   // checkIfItemInCart();\n  //   return () => {};\n  // }, [fetchCheckout]);\n\n  if (!product.title) return __jsx(\"div\", {\n    className: \"page-spinner\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 7\n    }\n  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__[\"Spinner\"], {\n    animation: \"border\",\n    role: \"status\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 9\n    }\n  }, __jsx(\"span\", {\n    className: \"sr-only\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 11\n    }\n  }, \"Loading...\")));\n  return __jsx(\"div\", {\n    id: \"product-details-page\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 5\n    }\n  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__[\"Toast\"], {\n    show: show,\n    delay: 3000,\n    autohide: true,\n    onClose: function onClose() {\n      return setShow(false);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 7\n    }\n  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__[\"Toast\"].Header, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 9\n    }\n  }, __jsx(\"img\", {\n    src: \"holder.js/20x20?text=%20\",\n    className: \"rounded mr-2\",\n    alt: \"\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 11\n    }\n  }), __jsx(\"strong\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 11\n    }\n  }, \"You added \", product.title, \" to your cart!\"), __jsx(\"small\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 11\n    }\n  }, \"11 mins ago\")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__[\"Toast\"].Body, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 9\n    }\n  })), __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 9\n    }\n  }, \"OJOS | \", product.title), __jsx(\"link\", {\n    rel: \"icon\",\n    href: \"/favicon.ico\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 9\n    }\n  })), __jsx(\"div\", {\n    id: \"product-details-container\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    id: \"product-image\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 9\n    }\n  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__[\"Image\"], {\n    className: \"products\",\n    fluid: true,\n    src: product.images[0].src,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 11\n    }\n  })), __jsx(\"div\", {\n    id: \"product-details\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 9\n    }\n  }, __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 11\n    }\n  }, product.title), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 11\n    }\n  }, \"$\", product.variants[0].price), __jsx(\"button\", {\n    className: \"add-to-cart-btn\",\n    onClick: function onClick() {\n      addItemToCheckout(product.variants[0].id, 1);\n      setShow(true);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 98,\n      columnNumber: 11\n    }\n  }, \"Add to Cart\"), __jsx(\"h4\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 108,\n      columnNumber: 11\n    }\n  }, \"Description\"), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 109,\n      columnNumber: 11\n    }\n  }, product.description), __jsx(\"h4\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 110,\n      columnNumber: 11\n    }\n  }, \"Sizing\"), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 111,\n      columnNumber: 11\n    }\n  }, \"Complimentary ground shipping on all domestic orders. Returns accepted within 7 days of delivery on full price items. All sale items and masks are final sale. International shipping available to select countries.\"), __jsx(\"h4\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 117,\n      columnNumber: 11\n    }\n  }, \"Shipping\"), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 118,\n      columnNumber: 11\n    }\n  }, \"Complimentary ground shipping on all domestic orders. Returns accepted within 7 days of delivery on full price items. All sale items and masks are final sale. International shipping available to select countries.\"))));\n};\n\n_s(ProductDetails, \"HyDMpHSehSsgwR3FksopPdUBLQc=\");\n\n_c = ProductDetails;\n\nProductDetails.getInitialProps = /*#__PURE__*/function () {\n  var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {\n    var params;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return context.query;\n\n          case 2:\n            params = _context.sent;\n            return _context.abrupt(\"return\", {\n              params: params\n            });\n\n          case 4:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function (_x) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductDetails);\n\nvar _c;\n\n$RefreshReg$(_c, \"ProductDetails\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHVjdHMvW2hhbmRsZV0uanM/MTI2MiJdLCJuYW1lcyI6WyJQcm9kdWN0RGV0YWlscyIsInByb3BzIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInNob3ciLCJzZXRTaG93IiwiaGFuZGxlIiwicGFyYW1zIiwidXNlQ29udGV4dCIsIlNob3BDb250ZXh0IiwiY2hlY2tvdXQiLCJmZXRjaFByb2R1Y3RCeUhhbmRsZSIsImFkZEl0ZW1Ub0NoZWNrb3V0IiwicHJvZHVjdCIsInVzZUVmZmVjdCIsInRpdGxlIiwiaW1hZ2VzIiwic3JjIiwidmFyaWFudHMiLCJwcmljZSIsImlkIiwiZGVzY3JpcHRpb24iLCJnZXRJbml0aWFsUHJvcHMiLCJjb250ZXh0IiwicXVlcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FHQTs7QUFDQTtDQUdBOztBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFDaEM7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBWGdDLHdCQVlSQyw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsSUFBZixDQVpRO0FBQUE7QUFBQSxNQVl6QkMsSUFaeUI7QUFBQSxNQVluQkMsT0FabUI7O0FBY2hDLE1BQUlDLE1BQU0sR0FBR0wsS0FBSyxDQUFDTSxNQUFOLENBQWFELE1BQTFCOztBQWRnQywwQkFvQjVCSiw0Q0FBSyxDQUFDTSxVQUFOLENBQWlCQyxnRUFBakIsQ0FwQjRCO0FBQUEsTUFnQjlCQyxRQWhCOEIscUJBZ0I5QkEsUUFoQjhCO0FBQUEsTUFpQjlCQyxvQkFqQjhCLHFCQWlCOUJBLG9CQWpCOEI7QUFBQSxNQWtCOUJDLGlCQWxCOEIscUJBa0I5QkEsaUJBbEI4QjtBQUFBLE1BbUI5QkMsT0FuQjhCLHFCQW1COUJBLE9BbkI4QixFQXNCaEM7QUFDQTtBQUNBO0FBQ0E7QUFD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RSxXQUFPLEVBQUUsbUJBQU07QUFDYlAsdUJBQWlCLENBQUNDLE9BQU8sQ0FBQ0ssUUFBUixDQUFpQixDQUFqQixFQUFvQkUsRUFBckIsRUFBeUIsQ0FBekIsQ0FBakI7QUFDQWYsYUFBTyxDQUFDLElBQUQsQ0FBUDtBQUNELEtBTEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFmRixFQXlCRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQXpCRixFQTBCRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUlRLE9BQU8sQ0FBQ1EsV0FBWixDQTFCRixFQTJCRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBM0JGLEVBNEJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNE5BNUJGLEVBa0NFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBbENGLEVBbUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNE5BbkNGLENBSkYsQ0FiRixDQURGO0FBK0RELENBcEhEOztHQUFNckIsYzs7S0FBQUEsYzs7QUFzSE5BLGNBQWMsQ0FBQ3NCLGVBQWY7QUFBQSw4TEFBaUMsaUJBQWdCQyxPQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNWQSxPQUFPLENBQUNDLEtBREU7O0FBQUE7QUFDekJqQixrQkFEeUI7QUFBQSw2Q0FFeEI7QUFBRUEsb0JBQU0sRUFBRUE7QUFBVixhQUZ3Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFqQzs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFLZVAsNkVBQWYiLCJmaWxlIjoiLi9wYWdlcy9wcm9kdWN0cy9baGFuZGxlXS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB7IFNob3BDb250ZXh0IH0gZnJvbSBcIi4uLy4uL2NvbnRleHQvc2hvcENvbnRleHRcIjtcblxuLy8gU2FuaXR5LmlvXG5pbXBvcnQgY2xpZW50IGZyb20gXCIuLi8uLi9jbGllbnRcIjtcbmltcG9ydCB1cmxGb3IgZnJvbSBcIi4uLy4uL2ltYWdlVXJsQnVpbGRlclwiO1xuXG4vLyBCb290c3RyYXBcbmltcG9ydCB7IEltYWdlLCBTcGlubmVyLCBUb2FzdCB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBQcm9kdWN0RGV0YWlscyA9IChwcm9wcykgPT4ge1xuICAvLyBjb25zdCBbc2l6ZSwgc2V0U2l6ZV0gPSBSZWFjdC51c2VTdGF0ZSgpO1xuICAvLyBjb25zdCBbcHJvZHVjdCwgc2V0UHJvZHVjdF0gPSBSZWFjdC51c2VTdGF0ZSgpO1xuXG4gIC8vIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudCkgPT4ge1xuICAvLyAgIHNldFNpemUoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgLy8gfTtcblxuICAvLyBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcbiAgLy8gICBzZXRQcm9kdWN0KGN1cnJlbnRQcm9kdWN0KTtcbiAgLy8gICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2R1Y3RcIiwgSlNPTi5zdHJpbmdpZnkoY3VycmVudFByb2R1Y3QpKTtcbiAgLy8gfTtcbiAgY29uc3QgW3Nob3csIHNldFNob3ddID0gUmVhY3QudXNlU3RhdGUodHJ1ZSk7XG5cbiAgbGV0IGhhbmRsZSA9IHByb3BzLnBhcmFtcy5oYW5kbGU7XG4gIGNvbnN0IHtcbiAgICBjaGVja291dCxcbiAgICBmZXRjaFByb2R1Y3RCeUhhbmRsZSxcbiAgICBhZGRJdGVtVG9DaGVja291dCxcbiAgICBwcm9kdWN0LFxuICB9ID0gUmVhY3QudXNlQ29udGV4dChTaG9wQ29udGV4dCk7XG5cbiAgLy8gY29uc3QgY2hlY2tJZkl0ZW1JbkNhcnQgPSBhc3luYyAoKSA9PiB7XG4gIC8vICAgY29uc29sZS5sb2coY2hlY2tvdXQpO1xuICAvLyB9O1xuICAvLyBjb25zb2xlLmxvZyhjaGVja291dC5saW5lSXRlbXMpO1xuICAvLyBjb25zdCBjdXJyZW50Q2hlY2tvdXRJdGVtcyA9IGF3YWl0IGNoZWNrb3V0LmxpbmVJdGVtcztcbiAgLy8gY3VycmVudENoZWNrb3V0SXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAvLyAgIGlmIChpdGVtLmlkID09PSBpZCkge1xuICAvLyAgICAgY29uc29sZS5sb2coXCJpbiBjYXJ0IVwiKTtcbiAgLy8gICAgIC8vIHRoaXMuc2V0U3RhdGUoeyBpdGVtSW5DYXJ0OiB0cnVlIH0pO1xuICAvLyAgIH1cbiAgLy8gfSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmZXRjaFByb2R1Y3RCeUhhbmRsZShoYW5kbGUpO1xuICAgIHJldHVybiAoKSA9PiB7fTtcbiAgfSwgW2ZldGNoUHJvZHVjdEJ5SGFuZGxlLCBoYW5kbGVdKTtcblxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgIGZldGNoQ2hlY2tvdXQoY2hlY2tvdXQuaWQpO1xuICAvLyAgIC8vIGNoZWNrSWZJdGVtSW5DYXJ0KCk7XG4gIC8vICAgcmV0dXJuICgpID0+IHt9O1xuICAvLyB9LCBbZmV0Y2hDaGVja291dF0pO1xuXG4gIGlmICghcHJvZHVjdC50aXRsZSlcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLXNwaW5uZXJcIj5cbiAgICAgICAgPFNwaW5uZXIgYW5pbWF0aW9uPVwiYm9yZGVyXCIgcm9sZT1cInN0YXR1c1wiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5Mb2FkaW5nLi4uPC9zcGFuPlxuICAgICAgICA8L1NwaW5uZXI+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICByZXR1cm4gKFxuICAgIDxkaXYgaWQ9XCJwcm9kdWN0LWRldGFpbHMtcGFnZVwiPlxuICAgICAgPFRvYXN0IHNob3c9e3Nob3d9IGRlbGF5PXszMDAwfSBhdXRvaGlkZSBvbkNsb3NlPXsoKSA9PiBzZXRTaG93KGZhbHNlKX0+XG4gICAgICAgIDxUb2FzdC5IZWFkZXI+XG4gICAgICAgICAgPGltZyBzcmM9XCJob2xkZXIuanMvMjB4MjA/dGV4dD0lMjBcIiBjbGFzc05hbWU9XCJyb3VuZGVkIG1yLTJcIiBhbHQ9XCJcIiAvPlxuICAgICAgICAgIDxzdHJvbmc+WW91IGFkZGVkIHtwcm9kdWN0LnRpdGxlfSB0byB5b3VyIGNhcnQhPC9zdHJvbmc+XG4gICAgICAgICAgPHNtYWxsPjExIG1pbnMgYWdvPC9zbWFsbD5cbiAgICAgICAgPC9Ub2FzdC5IZWFkZXI+XG4gICAgICAgIDxUb2FzdC5Cb2R5PjwvVG9hc3QuQm9keT5cbiAgICAgIDwvVG9hc3Q+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPk9KT1MgfCB7cHJvZHVjdC50aXRsZX08L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8ZGl2IGlkPVwicHJvZHVjdC1kZXRhaWxzLWNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGlkPVwicHJvZHVjdC1pbWFnZVwiPlxuICAgICAgICAgIDxJbWFnZSBjbGFzc05hbWU9XCJwcm9kdWN0c1wiIGZsdWlkIHNyYz17cHJvZHVjdC5pbWFnZXNbMF0uc3JjfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBpZD1cInByb2R1Y3QtZGV0YWlsc1wiPlxuICAgICAgICAgIDxoMT57cHJvZHVjdC50aXRsZX08L2gxPlxuICAgICAgICAgIDxwPiR7cHJvZHVjdC52YXJpYW50c1swXS5wcmljZX08L3A+XG4gICAgICAgICAgey8qIExlYXZlIGluIGluIGNhc2Ugc2l6ZXMgbmVlZCB0byBiZSBpbXBsZW1lbnRlZCAqL31cbiAgICAgICAgICB7LyogPHNlbGVjdCBpZD1cInNpemUtc2VsZWN0XCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0+XG4gICAgICAgICAgICA8b3B0aW9uIGtleT1cIm51bGxcIj5TZWxlY3QgU2l6ZTwvb3B0aW9uPlxuICAgICAgICAgICAge3NpemVzICYmXG4gICAgICAgICAgICAgIHNpemVzLm1hcCgoc2l6ZSkgPT4gPG9wdGlvbiB2YWx1ZT17c2l6ZX0ga2V5PXtzaXplfT48L29wdGlvbj4pfVxuICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgIHtzaXplID09PSB1bmRlZmluZWQgfHwgc2l6ZSA9PT0gXCJTZWxlY3QgU2l6ZVwiID8gKFxuICAgICAgICAgICAgPGJ1dHRvbiBkaXNhYmxlZCBjbGFzc05hbWU9XCJhZGQtdG8tY2FydC1idG5cIj5cbiAgICAgICAgICAgICAgQWRkIHRvIENhcnRcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgKX0gKi99XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWRkLXRvLWNhcnQtYnRuXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgYWRkSXRlbVRvQ2hlY2tvdXQocHJvZHVjdC52YXJpYW50c1swXS5pZCwgMSk7XG4gICAgICAgICAgICAgIHNldFNob3codHJ1ZSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIEFkZCB0byBDYXJ0XG4gICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICA8aDQ+RGVzY3JpcHRpb248L2g0PlxuICAgICAgICAgIDxwPntwcm9kdWN0LmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICA8aDQ+U2l6aW5nPC9oND5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIENvbXBsaW1lbnRhcnkgZ3JvdW5kIHNoaXBwaW5nIG9uIGFsbCBkb21lc3RpYyBvcmRlcnMuIFJldHVybnNcbiAgICAgICAgICAgIGFjY2VwdGVkIHdpdGhpbiA3IGRheXMgb2YgZGVsaXZlcnkgb24gZnVsbCBwcmljZSBpdGVtcy4gQWxsIHNhbGVcbiAgICAgICAgICAgIGl0ZW1zIGFuZCBtYXNrcyBhcmUgZmluYWwgc2FsZS4gSW50ZXJuYXRpb25hbCBzaGlwcGluZyBhdmFpbGFibGUgdG9cbiAgICAgICAgICAgIHNlbGVjdCBjb3VudHJpZXMuXG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxoND5TaGlwcGluZzwvaDQ+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBDb21wbGltZW50YXJ5IGdyb3VuZCBzaGlwcGluZyBvbiBhbGwgZG9tZXN0aWMgb3JkZXJzLiBSZXR1cm5zXG4gICAgICAgICAgICBhY2NlcHRlZCB3aXRoaW4gNyBkYXlzIG9mIGRlbGl2ZXJ5IG9uIGZ1bGwgcHJpY2UgaXRlbXMuIEFsbCBzYWxlXG4gICAgICAgICAgICBpdGVtcyBhbmQgbWFza3MgYXJlIGZpbmFsIHNhbGUuIEludGVybmF0aW9uYWwgc2hpcHBpbmcgYXZhaWxhYmxlIHRvXG4gICAgICAgICAgICBzZWxlY3QgY291bnRyaWVzLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cblByb2R1Y3REZXRhaWxzLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gIGNvbnN0IHBhcmFtcyA9IGF3YWl0IGNvbnRleHQucXVlcnk7XG4gIHJldHVybiB7IHBhcmFtczogcGFyYW1zIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0RGV0YWlscztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/products/[handle].js\n");

/***/ })

})