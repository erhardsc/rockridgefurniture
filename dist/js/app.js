/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/js/app.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__woocommerce_ProductFilter_es6_js__ = __webpack_require__(\"./assets/js/woocommerce/ProductFilter.es6.js\");\n\n\n$ = jQuery;\n\n// $( document ).ready(function(){\n//   $('.yith-wcan-list.color li a').filter(function () {\n//     return $(this).text() === 'Aqua';\n//   }).css('color', 'red');\n// });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYXBwLmpzPzExM2YiXSwibmFtZXMiOlsiJCIsImpRdWVyeSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBOztBQUdBQSxJQUFFQyxNQUFGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9hc3NldHMvanMvYXBwLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb2R1Y3RGaWx0ZXIgZnJvbSAnLi93b29jb21tZXJjZS9Qcm9kdWN0RmlsdGVyLmVzNi5qcyc7XG5cblxuJD1qUXVlcnk7XG5cbi8vICQoIGRvY3VtZW50ICkucmVhZHkoZnVuY3Rpb24oKXtcbi8vICAgJCgnLnlpdGgtd2Nhbi1saXN0LmNvbG9yIGxpIGEnKS5maWx0ZXIoZnVuY3Rpb24gKCkge1xuLy8gICAgIHJldHVybiAkKHRoaXMpLnRleHQoKSA9PT0gJ0FxdWEnO1xuLy8gICB9KS5jc3MoJ2NvbG9yJywgJ3JlZCcpO1xuLy8gfSk7XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy9hcHAuanMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./assets/js/app.js\n");

/***/ }),

/***/ "./assets/js/woocommerce/ProductFilter.es6.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar ProductFilter = function () {\n  function ProductFilter() {\n    _classCallCheck(this, ProductFilter);\n  }\n\n  _createClass(ProductFilter, [{\n    key: \"colors\",\n    value: function colors() {}\n  }]);\n\n  return ProductFilter;\n}();\n\n/* unused harmony default export */ var _unused_webpack_default_export = (ProductFilter);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvd29vY29tbWVyY2UvUHJvZHVjdEZpbHRlci5lczYuanM/NDk3MCJdLCJuYW1lcyI6WyJQcm9kdWN0RmlsdGVyIl0sIm1hcHBpbmdzIjoiOzs7O0lBQU1BLGE7QUFDSiwyQkFBYztBQUFBO0FBRWI7Ozs7NkJBRVEsQ0FFUjs7Ozs7O0FBTVlBLHVGQUFmIiwiZmlsZSI6Ii4vYXNzZXRzL2pzL3dvb2NvbW1lcmNlL1Byb2R1Y3RGaWx0ZXIuZXM2LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgUHJvZHVjdEZpbHRlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gIH1cblxuICBjb2xvcnMoKSB7XG5cbiAgfVxuXG5cblxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0RmlsdGVyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy93b29jb21tZXJjZS9Qcm9kdWN0RmlsdGVyLmVzNi5qcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./assets/js/woocommerce/ProductFilter.es6.js\n");

/***/ }),

/***/ "./assets/sass/style.scss":
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvc2Fzcy9zdHlsZS5zY3NzPzllZjUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiLi9hc3NldHMvc2Fzcy9zdHlsZS5zY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9zYXNzL3N0eWxlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IC4vYXNzZXRzL3Nhc3Mvc3R5bGUuc2Nzc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./assets/sass/style.scss\n");

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./assets/js/app.js");
module.exports = __webpack_require__("./assets/sass/style.scss");


/***/ })

/******/ });