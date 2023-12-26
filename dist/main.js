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

/***/ "./dist/modules/loadContacts.js":
/*!**************************************!*\
  !*** ./dist/modules/loadContacts.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _loadHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadHeader */ \"./dist/modules/loadHeader.js\");\n\r\n\r\nfunction createContactCard(name, position, number, email) {\r\n    const element = document.createElement('div');\r\n    element.classList.add('contact-card');\r\n\r\n    const nameElem = document.createElement('h2');\r\n    nameElem.innerHTML = name;\r\n    element.appendChild(nameElem);\r\n\r\n    const positionElem = document.createElement('p');\r\n    positionElem.innerHTML = position;\r\n    element.appendChild(positionElem);\r\n\r\n    const numberElem = document.createElement('p');\r\n    numberElem.innerHTML = number;\r\n    element.appendChild(numberElem);\r\n\r\n    const emailElem = document.createElement('p');\r\n    emailElem.innerHTML = email;\r\n    element.appendChild(emailElem);\r\n\r\n    return element;\r\n}\r\n\r\nfunction createContactPage(contacts) {\r\n    const element = document.createElement('div');\r\n    element.classList.add('contact-container');\r\n\r\n    contacts.forEach(contact => {\r\n        element.appendChild(contact);\r\n    });\r\n\r\n    return element;\r\n}\r\n\r\nfunction loadContacts() {\r\n    (0,_loadHeader__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n    const contentDiv = document.querySelector('.content');\r\n\r\n    const contacts = []\r\n    contacts.push(createContactCard('Joe', 'Chef', '130-123-3211', 'joe@jomail.com'));\r\n    contacts.push(createContactCard('Kim', 'Bartender', '123-345-5332', 'kim@gmail.com'));\r\n    contacts.push(createContactCard('John', 'Manager', '321-455-4982', 'john@gmail.com'));\r\n\r\n    contentDiv.appendChild(createContactPage(contacts));\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContacts);\n\n//# sourceURL=webpack://odin_restaurant/./dist/modules/loadContacts.js?");

/***/ }),

/***/ "./dist/modules/loadHeader.js":
/*!************************************!*\
  !*** ./dist/modules/loadHeader.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _assets_harrys_logo_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/harrys-logo.svg */ \"./assets/harrys-logo.svg\");\n\r\n\r\nfunction createHeaderElem() {\r\n    const element = document.createElement('div');\r\n    element.classList.add(\"header-container\");\r\n\r\n    // add logo\r\n    const logo = new Image();\r\n    logo.src = _assets_harrys_logo_svg__WEBPACK_IMPORTED_MODULE_0__;\r\n\r\n    element.appendChild(logo);\r\n\r\n    // add content\r\n    const title = document.createElement('h1');\r\n    title.innerHTML = \"Harry's Chocolate Shop\";\r\n\r\n    element.appendChild(title);\r\n\r\n    return element;\r\n}\r\n\r\nfunction loadHeader() {\r\n    const contentDiv = document.querySelector('.content');\r\n    contentDiv.appendChild(createHeaderElem());\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHeader);\n\n//# sourceURL=webpack://odin_restaurant/./dist/modules/loadHeader.js?");

/***/ }),

/***/ "./dist/modules/loadHome.js":
/*!**********************************!*\
  !*** ./dist/modules/loadHome.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _loadHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadHeader */ \"./dist/modules/loadHeader.js\");\n\r\n\r\nfunction createReviewElem() {\r\n    const element = document.createElement('div');\r\n    element.classList.add('review-container');\r\n\r\n    // add review content\r\n    const content = document.createElement('p');\r\n    content.classList.add('review-content');\r\n    content.innerHTML = 'Harry\\'s has the best drinks and food! The drinks will get you\\\r\n                drunker than you\\'ve ever been and the food will make you want\\\r\n                to drink more than ever. This is exactly the kind of place that\\\r\n                I would like to return again and again.'\r\n\r\n    const author = document.createElement('h5');\r\n    author.innerHTML = '-The Exponent';\r\n\r\n    element.appendChild(content);\r\n    element.appendChild(author);\r\n\r\n    return element;\r\n}\r\n\r\nfunction createHoursElem() {\r\n    const element = document.createElement('div');\r\n    element.classList.add('hours-container');\r\n\r\n    // add HOURS title\r\n    const title = document.createElement('h2');\r\n    title.innerHTML = 'Hours';\r\n\r\n    element.appendChild(title);\r\n\r\n    // add hours\r\n    const sunday = document.createElement('p');\r\n    sunday.innerHTML = 'Sunday: 10am - 10pm';\r\n    element.appendChild(sunday);\r\n\r\n    const monday = document.createElement('p');\r\n    monday.innerHTML = 'Monday: Closed';\r\n    element.appendChild(monday);\r\n\r\n    const tuesday = document.createElement('p');\r\n    tuesday.innerHTML = 'Tuesday: Closed';\r\n    element.appendChild(tuesday);\r\n\r\n    const wednesday = document.createElement('p');\r\n    wednesday.innerHTML = 'Wednesday: 10am - 11pm';\r\n    element.appendChild(wednesday);\r\n\r\n    const thursday = document.createElement('p');\r\n    thursday.innerHTML = 'Thursday: 10am - 11pm';\r\n    element.appendChild(thursday);\r\n\r\n    const friday = document.createElement('p');\r\n    friday.innerHTML = 'Friday: 10am - 11pm';\r\n    element.appendChild(friday);\r\n\r\n    const saturday = document.createElement('p');\r\n    saturday.innerHTML = 'Saturday: 10am - 11pm';\r\n    element.appendChild(saturday);\r\n\r\n    return element;\r\n}\r\n\r\nfunction createLocationElem() {\r\n    const element = document.createElement('div');\r\n    element.classList.add('location-container');\r\n\r\n    const title = document.createElement('h2');\r\n    title.innerHTML = 'Location';\r\n\r\n    const content = document.createElement('p');\r\n    content.innerHTML = '112 Mitch Daniel Drive, West Lafayette, Indiana';\r\n\r\n    element.appendChild(title);\r\n    element.appendChild(content);\r\n\r\n    return element;\r\n}\r\n\r\nfunction loadHome() {\r\n    (0,_loadHeader__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n    const contentDiv = document.querySelector('.content');\r\n    contentDiv.appendChild(createReviewElem());\r\n    contentDiv.appendChild(createHoursElem());\r\n    contentDiv.appendChild(createLocationElem());\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome); \n\n//# sourceURL=webpack://odin_restaurant/./dist/modules/loadHome.js?");

/***/ }),

/***/ "./dist/modules/loadMenu.js":
/*!**********************************!*\
  !*** ./dist/modules/loadMenu.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _loadHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadHeader */ \"./dist/modules/loadHeader.js\");\n/* harmony import */ var _assets_placeholderfood_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/placeholderfood.svg */ \"./assets/placeholderfood.svg\");\n\r\n\r\n\r\n// create multiple sections\r\nfunction createSection(sectionName, items) {\r\n    const element = document.createElement('div');\r\n    element.classList.add('section-container');\r\n\r\n    // Set section name\r\n    const sectionTitle = document.createElement('h1');\r\n    sectionTitle.innerHTML = sectionName;\r\n    element.appendChild(sectionTitle);\r\n\r\n    // add items onto the section\r\n    items.forEach(item => {\r\n        element.appendChild(item);\r\n    });\r\n\r\n    return element;\r\n}\r\n\r\n// create single menu item\r\nfunction createMenuItem(name, price, desc, picSrc) {\r\n    const element = document.createElement('div');\r\n    element.classList.add('food-item');\r\n\r\n    // title\r\n    const title = document.createElement('h3');\r\n    title.innerHTML = name;\r\n    element.appendChild(title);\r\n\r\n    // picture\r\n    const pic = new Image();\r\n    pic.src = picSrc;\r\n    element.appendChild(pic);\r\n\r\n    // desc\r\n    const description = document.createElement('p');\r\n    description.innerHTML = desc;\r\n    element.appendChild(description);\r\n\r\n    // price\r\n    const priceElem = document.createElement('p');\r\n    priceElem.innerHTML = price;\r\n    element.appendChild(priceElem)\r\n\r\n    return element;\r\n}\r\n\r\nfunction loadMenu() {\r\n    (0,_loadHeader__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n    const contentDiv = document.querySelector('.content');\r\n    const menuContainer = document.createElement('div');\r\n    menuContainer.classList.add('menu-container');\r\n    contentDiv.appendChild(menuContainer);\r\n\r\n    // test create an elemnt\r\n    const beverages = [];\r\n    let carbinated = createMenuItem('Carbinated Drinks', 1.39, 'Fresh carbinated drinks. Choose from: Coke, Sprite, Root Beer, and Fanta', _assets_placeholderfood_svg__WEBPACK_IMPORTED_MODULE_1__);\r\n    let beer = createMenuItem('Draught Beer', 5.99, 'Beer that\\'s thinner than water', _assets_placeholderfood_svg__WEBPACK_IMPORTED_MODULE_1__);\r\n    let shots = createMenuItem('Shooters', 4.99, 'A shot of your favorite alcohol', _assets_placeholderfood_svg__WEBPACK_IMPORTED_MODULE_1__);\r\n    let mixedDrinks = createMenuItem('Mixed Cocktails', 8.99, 'We will make any drink you want', _assets_placeholderfood_svg__WEBPACK_IMPORTED_MODULE_1__);\r\n    beverages.push(carbinated);\r\n    beverages.push(beer);\r\n    beverages.push(shots); \r\n    beverages.push(mixedDrinks);\r\n    menuContainer.appendChild(createSection('Beverages', beverages));\r\n\r\n    // Create Food items\r\n    const foods = [];\r\n    let fries = createMenuItem('Fries', 8.99, 'Delicious and crunchy fries', _assets_placeholderfood_svg__WEBPACK_IMPORTED_MODULE_1__);\r\n    foods.push(fries);\r\n    let burgers = createMenuItem('Harry`s Burgers', 9.99, 'Harry\\'s artisanal burgers', _assets_placeholderfood_svg__WEBPACK_IMPORTED_MODULE_1__);\r\n    foods.push(burgers);\r\n    let wings = createMenuItem('Wings', 9.99, 'Dozen smoking hot wings', _assets_placeholderfood_svg__WEBPACK_IMPORTED_MODULE_1__);\r\n    foods.push(wings);\r\n    let chips = createMenuItem('Nacho Cheese', 6.99, 'Basket of hot nachos with craft cheese', _assets_placeholderfood_svg__WEBPACK_IMPORTED_MODULE_1__);\r\n    foods.push(chips);\r\n    menuContainer.appendChild(createSection('Foods', foods));\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);\n\n//# sourceURL=webpack://odin_restaurant/./dist/modules/loadMenu.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dist_modules_loadContacts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dist/modules/loadContacts */ \"./dist/modules/loadContacts.js\");\n/* harmony import */ var _dist_modules_loadHome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dist/modules/loadHome */ \"./dist/modules/loadHome.js\");\n/* harmony import */ var _dist_modules_loadMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dist/modules/loadMenu */ \"./dist/modules/loadMenu.js\");\n\r\n\r\n\r\n\r\nconst content = document.querySelector('.content');\r\n\r\nfunction navController() {\r\n    const homebtn = document.querySelector('.homebtn');\r\n    const menubtn = document.querySelector('.menubtn');\r\n    const contactbtn = document.querySelector('.contactbtn');\r\n\r\n    homebtn.addEventListener('click', () => {\r\n        clearPage();\r\n        (0,_dist_modules_loadHome__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n    });\r\n\r\n    menubtn.addEventListener('click', () => {\r\n        clearPage();\r\n        (0,_dist_modules_loadMenu__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n    });\r\n\r\n    contactbtn.addEventListener('click', () => {\r\n        clearPage();\r\n        (0,_dist_modules_loadContacts__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n    });\r\n}\r\n\r\nfunction clearPage() {\r\n    while (content.lastChild) {\r\n        content.removeChild(content.lastChild);\r\n    }\r\n}\r\n\r\nnavController();\r\n(0,_dist_modules_loadHome__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n//# sourceURL=webpack://odin_restaurant/./src/index.js?");

/***/ }),

/***/ "./assets/harrys-logo.svg":
/*!********************************!*\
  !*** ./assets/harrys-logo.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7f8588892a340348abb0.svg\";\n\n//# sourceURL=webpack://odin_restaurant/./assets/harrys-logo.svg?");

/***/ }),

/***/ "./assets/placeholderfood.svg":
/*!************************************!*\
  !*** ./assets/placeholderfood.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7a3079046731700d00a8.svg\";\n\n//# sourceURL=webpack://odin_restaurant/./assets/placeholderfood.svg?");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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