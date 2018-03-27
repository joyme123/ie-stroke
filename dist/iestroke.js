(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("iestroke", [], factory);
	else if(typeof exports === 'object')
		exports["iestroke"] = factory();
	else
		root["iestroke"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/IEPath2D.js":
/*!*************************!*\
  !*** ./src/IEPath2D.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var IEPath2D = exports.IEPath2D = function IEPath2D(path) {
    _classCallCheck(this, IEPath2D);

    this.text = path;
};

/***/ }),

/***/ "./src/IEStroke.js":
/*!*************************!*\
  !*** ./src/IEStroke.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.IEStroke = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _IEPath2D = __webpack_require__(/*! ./IEPath2D */ "./src/IEPath2D.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var IEStroke = exports.IEStroke = function () {
    function IEStroke(ctx, path) {
        _classCallCheck(this, IEStroke);

        this.actions = new Array();
        this.ctx = ctx;
        this.path = path;
    }

    _createClass(IEStroke, [{
        key: "paint",
        value: function paint() {
            this.ctx.beginPath();
            var arr = this.path.text.split(" ");
            var result = new Array();

            //循环arr，去除空元素
            arr.forEach(function (ele) {
                if (ele !== "") {
                    result.push(ele);
                }
            });

            for (var i = 0; i < result.length; i += 3) {

                var action = result[i].toUpperCase();
                var x = result[i + 1];
                var y = result[i + 2];

                if (action === 'M') {
                    this.ctx.moveTo(x, y);
                } else if (action === 'L') {
                    this.ctx.lineTo(x, y);
                } else {
                    console.error('unsupport action');
                }
            }

            this.ctx.stroke();
        }
    }]);

    return IEStroke;
}();

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.IEStroke = exports.IEPath2D = undefined;

var _IEPath2D = __webpack_require__(/*! ./IEPath2D */ "./src/IEPath2D.js");

Object.defineProperty(exports, 'IEPath2D', {
    enumerable: true,
    get: function get() {
        return _IEPath2D.IEPath2D;
    }
});

var _IEStroke = __webpack_require__(/*! ./IEStroke */ "./src/IEStroke.js");

Object.defineProperty(exports, 'IEStroke', {
    enumerable: true,
    get: function get() {
        return _IEStroke.IEStroke;
    }
});


window.onload = function () {
    CanvasRenderingContext2D.prototype.ieStroke = function (path) {
        if (path === undefined) {
            this.stroke();
        } else {
            var ieStroke = new _IEStroke.IEStroke(this, path);
            ieStroke.paint();
        }
    };
};

/***/ })

/******/ });
});
//# sourceMappingURL=iestroke.js.map