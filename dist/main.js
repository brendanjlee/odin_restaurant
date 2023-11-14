/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_harrys_logo_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/harrys-logo.svg */ \"./assets/harrys-logo.svg\");\n\r\n\r\nfunction createHeaderElem() {\r\n    const element = document.createElement('div');\r\n    element.classList.add(\"header-container\");\r\n\r\n    // add logo\r\n    const logo = new Image();\r\n    logo.src = _assets_harrys_logo_svg__WEBPACK_IMPORTED_MODULE_0__;\r\n\r\n    element.appendChild(logo);\r\n\r\n    // add content\r\n    const title = document.createElement('h1');\r\n    title.innerHTML = \"Harry's Chocolate Shop\";\r\n\r\n    element.appendChild(title);\r\n\r\n    return element;\r\n}\r\n\r\nfunction createReviewElem() {\r\n    const element = document.createElement('div');\r\n    element.classList.add('review-container');\r\n\r\n    // add review content\r\n    const content = document.createElement('p');\r\n    content.classList.add('review-content');\r\n    content.innerHTML = 'Harry\\'s has the best drinks and food! The drinks will get you\\\r\n                drunker than you\\'ve ever been and the food will make you want\\\r\n                to drink more than ever. This is exactly the kind of place that\\\r\n                I would like to return again and again.'\r\n\r\n    const author = document.createElement('h5');\r\n    author.innerHTML = 'The Exponent';\r\n\r\n    element.appendChild(content);\r\n    element.appendChild(author);\r\n\r\n    return element;\r\n}\r\n\r\nfunction createHoursElem() {\r\n    const element = document.createElement('div');\r\n    element.classList.add('hours-container');\r\n\r\n    // add HOURS title\r\n    const title = document.createElement('h2');\r\n    title.innerHTML = 'Hours';\r\n\r\n    element.appendChild(title);\r\n\r\n    // add hours\r\n    const sunday = document.createElement('p');\r\n    sunday.innerHTML = 'Sunday: 10am - 10pm';\r\n    element.appendChild(sunday);\r\n\r\n    const monday = document.createElement('p');\r\n    monday.innerHTML = 'Monday: Closed';\r\n    element.appendChild(monday);\r\n\r\n    const tuesday = document.createElement('p');\r\n    tuesday.innerHTML = 'Tuesday: Closed';\r\n    element.appendChild(tuesday);\r\n\r\n    const wednesday = document.createElement('p');\r\n    wednesday.innerHTML = 'Wednesday: 10am - 11pm';\r\n    element.appendChild(wednesday);\r\n\r\n    const thursday = document.createElement('p');\r\n    thursday.innerHTML = 'Thursday: 10am - 11pm';\r\n    element.appendChild(thursday);\r\n\r\n    const friday = document.createElement('p');\r\n    friday.innerHTML = 'Friday: 10am - 11pm';\r\n    element.appendChild(friday);\r\n\r\n    const saturday = document.createElement('p');\r\n    saturday.innerHTML = 'Saturday: 10am - 11pm';\r\n    element.appendChild(saturday);\r\n\r\n    return element;\r\n}\r\n\r\nfunction createLocationElem() {\r\n    const element = document.createElement('div');\r\n    element.classList.add('location-container');\r\n\r\n    const title = document.createElement('h2');\r\n    title.innerHTML = 'Location';\r\n\r\n    const content = document.createElement('p');\r\n    content.innerHTML = '12 Mitch Daniel Drive, West Lafayette, Indiana';\r\n\r\n    element.appendChild(title);\r\n    element.appendChild(content);\r\n\r\n    return element;\r\n}\r\n\r\n\r\ndocument.body.appendChild(createHeaderElem());\r\ndocument.body.appendChild(createReviewElem());\r\ndocument.body.appendChild(createHoursElem());\r\ndocument.body.appendChild(createLocationElem());\n\n//# sourceURL=webpack://odin_restaurant/./src/index.js?");

/***/ }),

/***/ "./assets/harrys-logo.svg":
/*!********************************!*\
  !*** ./assets/harrys-logo.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7f8588892a340348abb0.svg\";\n\n//# sourceURL=webpack://odin_restaurant/./assets/harrys-logo.svg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;