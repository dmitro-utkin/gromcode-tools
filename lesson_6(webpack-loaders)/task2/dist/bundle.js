/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _profile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile */ \"./src/profile.js\");\n\nconst userData = {\n  name: 'Tom',\n  age: 17\n};\nconst profile = {\n  ...userData,\n  company: 'Gromcode'\n};\n(0,_profile__WEBPACK_IMPORTED_MODULE_0__.printProfile)(profile);\nconst data = [1, 2, [3, 4, [5, 6]]];\nconst result = data.flat(2);\nconsole.log(result);\nPromise.resolve().finally();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7QUFBeUM7QUFFekMsTUFBTUMsUUFBUSxHQUFHO0VBQ2ZDLElBQUksRUFBRSxLQUFLO0VBQ1hDLEdBQUcsRUFBRTtBQUNQLENBQUM7QUFFRCxNQUFNQyxPQUFPLEdBQUc7RUFDZCxHQUFHSCxRQUFRO0VBQ1hJLE9BQU8sRUFBRTtBQUNYLENBQUM7QUFFREwsc0RBQVksQ0FBQ0ksT0FBTyxDQUFDO0FBRXJCLE1BQU1FLElBQUksR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFFbkMsTUFBTUMsTUFBTSxHQUFHRCxJQUFJLENBQUNFLElBQUksQ0FBQyxDQUFDLENBQUM7QUFDM0JDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxNQUFNLENBQUM7QUFFbkJJLE9BQU8sQ0FBQ0MsT0FBTyxDQUFDLENBQUMsQ0FBQ0MsT0FBTyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90YXNrMi8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHByaW50UHJvZmlsZSB9IGZyb20gJy4vcHJvZmlsZSc7XHJcblxyXG5jb25zdCB1c2VyRGF0YSA9IHtcclxuICBuYW1lOiAnVG9tJyxcclxuICBhZ2U6IDE3LFxyXG59O1xyXG5cclxuY29uc3QgcHJvZmlsZSA9IHtcclxuICAuLi51c2VyRGF0YSxcclxuICBjb21wYW55OiAnR3JvbWNvZGUnLFxyXG59O1xyXG5cclxucHJpbnRQcm9maWxlKHByb2ZpbGUpO1xyXG5cclxuY29uc3QgZGF0YSA9IFsxLCAyLCBbMywgNCwgWzUsIDZdXV07XHJcblxyXG5jb25zdCByZXN1bHQgPSBkYXRhLmZsYXQoMik7XHJcbmNvbnNvbGUubG9nKHJlc3VsdCk7XHJcblxyXG5Qcm9taXNlLnJlc29sdmUoKS5maW5hbGx5KCk7XHJcbiJdLCJuYW1lcyI6WyJwcmludFByb2ZpbGUiLCJ1c2VyRGF0YSIsIm5hbWUiLCJhZ2UiLCJwcm9maWxlIiwiY29tcGFueSIsImRhdGEiLCJyZXN1bHQiLCJmbGF0IiwiY29uc29sZSIsImxvZyIsIlByb21pc2UiLCJyZXNvbHZlIiwiZmluYWxseSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/profile.js":
/*!************************!*\
  !*** ./src/profile.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   printProfile: () => (/* binding */ printProfile)\n/* harmony export */ });\nconst printProfile = profileData => {\n  const {\n    name,\n    company\n  } = profileData;\n  console.log(`${name} from ${company}`);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcHJvZmlsZS5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU8sTUFBTUEsWUFBWSxHQUFHQyxXQUFXLElBQUk7RUFDekMsTUFBTTtJQUFFQyxJQUFJO0lBQUVDO0VBQVEsQ0FBQyxHQUFHRixXQUFXO0VBQ3JDRyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxHQUFHSCxJQUFJLFNBQVNDLE9BQU8sRUFBRSxDQUFDO0FBQ3hDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90YXNrMi8uL3NyYy9wcm9maWxlLmpzPzZlMTUiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHByaW50UHJvZmlsZSA9IHByb2ZpbGVEYXRhID0+IHtcclxuICBjb25zdCB7IG5hbWUsIGNvbXBhbnkgfSA9IHByb2ZpbGVEYXRhO1xyXG4gIGNvbnNvbGUubG9nKGAke25hbWV9IGZyb20gJHtjb21wYW55fWApO1xyXG59O1xyXG4iXSwibmFtZXMiOlsicHJpbnRQcm9maWxlIiwicHJvZmlsZURhdGEiLCJuYW1lIiwiY29tcGFueSIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/profile.js\n");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;