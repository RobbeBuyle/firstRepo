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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/classes/GameObject.js":
/*!**************************************!*\
  !*** ./src/js/classes/GameObject.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return GameObject; });\n/* harmony import */ var _Vector_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Vector.js */ \"./src/js/classes/Vector.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar GameObject =\n/*#__PURE__*/\nfunction () {\n  function GameObject(x, y, image) {\n    _classCallCheck(this, GameObject);\n\n    this.location = new _Vector_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](x, y);\n    this.image = image;\n    this.size = this.image.height;\n    this.frameRate = 60;\n    this.frameNr = 0;\n    this.localFrameNr = 0;\n    this.numFrames = 1;\n  }\n\n  _createClass(GameObject, [{\n    key: \"update\",\n    value: function update() {\n      this.frameNr++;\n      this.localFrameNr = Math.floor(this.frameNr / (60 / this.frameRate));\n      this.localFrameNr = this.localFrameNr % this.numFrames;\n    }\n  }, {\n    key: \"draw\",\n    value: function draw(ctx) {\n      ctx.save();\n      ctx.translate(this.location.x, this.location.y);\n      ctx.drawImage(this.image, this.localFrameNr * this.size, 0, this.size, this.size, -this.size / 2, -this.size / 2, this.size, this.size);\n      ctx.restore();\n    }\n  }]);\n\n  return GameObject;\n}();\n\n\n;\n\n//# sourceURL=webpack:///./src/js/classes/GameObject.js?");

/***/ }),

/***/ "./src/js/classes/Vector.js":
/*!**********************************!*\
  !*** ./src/js/classes/Vector.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Vector; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Vector =\n/*#__PURE__*/\nfunction () {\n  function Vector(x, y) {\n    _classCallCheck(this, Vector);\n\n    this.x = x;\n    this.y = y;\n  }\n\n  _createClass(Vector, [{\n    key: \"set\",\n    value: function set(x, y) {\n      this.x = x;\n      this.y = y;\n      return this;\n    }\n  }, {\n    key: \"add\",\n    value: function add(v) {\n      this.x += v.x;\n      this.y += v.y;\n      return this;\n    }\n  }, {\n    key: \"sub\",\n    value: function sub(v) {\n      this.x -= v.x;\n      this.y -= v.y;\n      return this;\n    }\n  }, {\n    key: \"mult\",\n    value: function mult(n) {\n      this.x *= n;\n      this.y *= n;\n      return this;\n    }\n  }, {\n    key: \"div\",\n    value: function div(n) {\n      this.x /= n;\n      this.y /= n;\n      return this;\n    }\n  }, {\n    key: \"mag\",\n    value: function mag() {\n      return Math.sqrt(this.x * this.x + this.y * this.y);\n    }\n  }, {\n    key: \"normalize\",\n    value: function normalize() {\n      var m = this.mag();\n\n      if (m !== 0) {\n        this.div(m);\n      }\n\n      return this;\n    }\n  }, {\n    key: \"limit\",\n    value: function limit(max) {\n      if (this.mag() > max) {\n        this.normalize();\n        this.mult(max);\n      }\n\n      return this;\n    }\n  }, {\n    key: \"clone\",\n    value: function clone() {\n      return new Vector(this.x, this.y);\n    }\n  }], [{\n    key: \"add\",\n    value: function add(v1, v2) {\n      return v1.clone().add(v2);\n    }\n  }, {\n    key: \"sub\",\n    value: function sub(v1, v2) {\n      return v1.clone().sub(v2);\n    }\n  }, {\n    key: \"mult\",\n    value: function mult(v, n) {\n      return v.clone().mult(n);\n    }\n  }, {\n    key: \"div\",\n    value: function div(v, n) {\n      return v.clone().div(n);\n    }\n  }]);\n\n  return Vector;\n}();\n\n\n\n//# sourceURL=webpack:///./src/js/classes/Vector.js?");

/***/ }),

/***/ "./src/js/functions/lib.js":
/*!*********************************!*\
  !*** ./src/js/functions/lib.js ***!
  \*********************************/
/*! exports provided: random, map, loadImage, loadImageInCatalog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"random\", function() { return random; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"map\", function() { return map; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadImage\", function() { return loadImage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadImageInCatalog\", function() { return loadImageInCatalog; });\nvar random = function random() {\n  var min = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;\n  var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;\n  return Math.random() * (max - min) + min;\n};\nvar map = function map(value, istart, istop, ostart, ostop) {\n  return ostart + (ostop - ostart) * ((value - istart) / (istop - istart));\n};\nvar loadImage = function loadImage(url) {\n  return new Promise(function (resolve, reject) {\n    var img = new Image();\n    img.addEventListener('load', function (event) {\n      resolve(img);\n    });\n    img.addEventListener('error', function (event) {\n      reject(event);\n    });\n    img.setAttribute('src', url);\n\n    if (img.complete) {\n      resolve(img);\n    }\n  });\n};\nvar loadImageInCatalog = function loadImageInCatalog(url, id, catalog) {\n  return new Promise(function (response, reject) {\n    catalog[id] = new Image();\n    catalog[id].addEventListener(\"load\", function (event) {\n      return response(catalog[id]);\n    });\n    catalog[id].addEventListener(\"error\", function (event) {\n      return reject(event);\n    });\n    catalog[id].setAttribute('src', url);\n\n    if (catalog[id].complete) {\n      response(catalog[id]);\n    }\n\n    ;\n  });\n};\n\n//# sourceURL=webpack:///./src/js/functions/lib.js?");

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _functions_lib_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions/lib.js */ \"./src/js/functions/lib.js\");\n/* harmony import */ var _classes_GameObject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/GameObject.js */ \"./src/js/classes/GameObject.js\");\n\n\n{\n  var canvas = document.getElementById(\"canvas\");\n  var ctx = canvas.getContext(\"2d\");\n  var catalog = {};\n  var myGameObject;\n\n  var init = function init() {\n    Promise.all([Object(_functions_lib_js__WEBPACK_IMPORTED_MODULE_0__[\"loadImageInCatalog\"])(\"img/bullet.png\", \"bullet\", catalog), Object(_functions_lib_js__WEBPACK_IMPORTED_MODULE_0__[\"loadImageInCatalog\"])(\"img/player.png\", \"player\", catalog), Object(_functions_lib_js__WEBPACK_IMPORTED_MODULE_0__[\"loadImageInCatalog\"])(\"img/enemy.png\", \"enemy\", catalog), Object(_functions_lib_js__WEBPACK_IMPORTED_MODULE_0__[\"loadImageInCatalog\"])(\"img/explosion.png\", \"explosion\", catalog)]).then(loaded); //verwijst naar de functie loaded\n  };\n\n  var loaded = function loaded() {\n    myGameObject = new _classes_GameObject_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](canvas.width / 2, canvas.height / 2, catalog.player); // myGameObject = new GameObject(canvas.width/2, canvas.height/2, catalog.player);\n\n    myGameObject.numFrames = 3;\n    draw();\n  };\n\n  var draw = function draw() {\n    ctx.fillStyle = \"black\";\n    ctx.fillRect(0, 0, canvas.width, canvas.height);\n    myGameObject.update();\n    myGameObject.draw(ctx);\n    window.requestAnimationFrame(draw);\n  };\n\n  init();\n}\n\n//# sourceURL=webpack:///./src/js/script.js?");

/***/ })

/******/ });