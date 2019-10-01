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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class Game {\n  constructor($el){\n    this.mark = \"X\";\n    var grid = new Array(3);\n    for (let i = 0; i <= grid.length - 1; i++){\n      grid[i] = new Array(3);\n    }\n    this.grid = grid;\n    this.$el = $el;\n  }\n\n  reset(){\n    var grid = new Array(3);\n    for (let i = 0; i <= grid.length - 1; i++){\n      grid[i] = new Array(3);\n    }\n    this.grid = grid;\n  }\n\n  switch(){\n    this.mark = (this.mark === \"X\") ? \"O\" : \"X\";\n  }\n\n  isValidPos(pos){\n    if(((pos[0] < 0 || pos[0] > 2) || (pos[1] < 0 || pos[1] > 2)) || !(this.empty(pos))){\n      return false;\n    }\n    return true;\n  }\n\n  empty(pos) {\n    if(this.grid[pos[0]][pos[1]] == undefined){\n      return true;\n    }\n    return false;\n  }\n\n  noWin() {\n    let count = 0;\n    let game = this;\n    for(let i = 0; i <= game.grid.length - 1; i++){\n      for(let k = 0; k <= game.grid[i].length - 1; k++){\n        if(game.grid[i][k] === \"X\" || game.grid[i][k] === \"O\"){\n          count += 1;\n        }\n      }\n    }\n    if(count === 9 && !(this.won())){\n      return true;\n    }\n    return false;\n  }\n\n  won() {\n    const game = this;\n    let count = 0\n    for (let i = 0; i <= game.grid.length - 1; i++){\n      for (let j = 0; j <= game.grid.length - 1; j++){\n        if (game.grid[i][j] === game.mark){\n          for (let h = 0; h <= game.grid.length - 1; h++){\n            if (game.grid[i][h] === game.mark){\n              count += 1\n            } else {\n              count = 0\n              break\n            }\n            if (count === 3){\n            return game.grid[i][j]\n            }\n          }\n          for (let k = 0; k <= game.grid.length - 1; k++){\n            if (game.grid[k][j] === game.mark){\n              count += 1\n            } else {\n              count = 0\n              break\n            }\n            if (count === 3){\n              return game.grid[i][j]\n            }\n          }  \n          if((game.grid[0][0] === game.mark && game.grid[1][1] === game.mark) && (game.grid[2][2] === game.mark)){\n            return game.grid[i][j]\n          }\n          else if((game.grid[0][2] === game.mark && game.grid[1][1] === game.mark) && (game.grid[2][0] === game.mark)){\n            return game.grid[i][j]\n          }\n        }\n      }\n    }    \n    return false;\n  }\n}\n\nmodule.exports = Game;\n\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const View = __webpack_require__(/*! ./ttt-view.js */ \"./src/ttt-view.js\");\nconst Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\n  $(() => {\n    // Your code here\n    let $grid = $('.ttt');\n    let game = new Game($grid);\n    let view = new View(game, $grid);\n    view.setupBoard();\n    view.bindEvents();\n    // game.playMove();\n  });\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/ttt-view.js":
/*!*************************!*\
  !*** ./src/ttt-view.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class View {\n  constructor(game, $el) {\n  \tthis.$el = $el;\n  \tthis.game = game;\n  }\n\n  bindEvents() {\n    const board = this;\n    this.$el.on('click', 'li', (event => {\n      const $li = $(event.currentTarget);\n      if($li.hasClass('clicked')){\n        return\n      } else {\n        $li.removeClass(\"els\");\n        $li.addClass('clicked elsc');\n        $li.attr('data-after', `${board.game.mark}`)\n        let row = $li.data('pos')[0];\n        let col = $li.data('pos')[1];\n        board.game.grid[row][col] = board.game.mark;\n        console.log(board.game.grid);\n        if (board.game.won() !== false){\n          let winner = board.game.won();\n          alert(`winner is ${winner}`)\n          board.reset();\n        } else if(board.game.noWin()){\n          alert(\"No one Won!\")\n          board.reset();\n        }\n        board.game.switch();\n      }\n    }))\n  }\n\n  setupBoard() {\n    const $ul = document.createElement(\"ul\");\n    const $body = $(\".ttt\");\n    $body.append($ul);\n    for(let i = 0; i <= 2; i++){\n      for(let j = 0; j <= 2; j++){\n        let li = document.createElement(\"li\");\n        let $li = $(li);\n        $li.data('pos', [i, j])\n        $li.addClass('els');\n        $ul.append($li[0]);\n      }\n    }\n    const ul = $body.find(\"ul\");\n\n    ul.addClass(\"grid\");\n    }\n\n    reset(){\n      $('.grid').remove();\n      this.game.reset();\n      this.setupBoard();\n      this.bindEvents();\n    }\n}\n\nmodule.exports = View;\n\n\n//# sourceURL=webpack:///./src/ttt-view.js?");

/***/ })

/******/ });