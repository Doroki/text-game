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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: C:/Users/Draku/Desktop/TextGame/src/js/modules/game-objects/game-object.js: \"eq\" is read-only\n\n\u001b[0m \u001b[90m 89 | \u001b[39m\tshowClothes() {\n \u001b[90m 90 | \u001b[39m\t\t\u001b[36mconst\u001b[39m eq \u001b[33m=\u001b[39m \u001b[32m\"\"\u001b[39m\u001b[33m;\u001b[39m\n\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 91 | \u001b[39m\t\t\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mequipment\u001b[33m.\u001b[39mmap(item \u001b[33m=>\u001b[39m eq \u001b[33m+=\u001b[39m item\u001b[33m.\u001b[39mname)\u001b[33m;\u001b[39m\n \u001b[90m    | \u001b[39m\t\t                           \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\n \u001b[90m 92 | \u001b[39m\t\t\u001b[36mreturn\u001b[39m eq\u001b[33m;\u001b[39m\n \u001b[90m 93 | \u001b[39m\t}\n \u001b[90m 94 | \u001b[39m\u001b[0m\n");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Klasa konsoli
// Zmienna imitująca plik JSON z danymi, które są używane do przypisania informacji, jak opisy, wydarzenie itp. w każdej z lokalizacji


var _console = __webpack_require__(2);

var _console2 = _interopRequireDefault(_console);

var _map = __webpack_require__(4);

var _scenario = __webpack_require__(7);

var _gameObject = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var OrderSwitch = function () {
	function OrderSwitch(parent) {
		_classCallCheck(this, OrderSwitch);

		this.parent = parent;
		this.actualOrders = this.default, this.specialOrders, this.specialAnswers;
	}

	_createClass(OrderSwitch, [{
		key: 'addOrders',
		value: function addOrders(orderPattern) {
			this.specialOrders = orderPattern;
		}
	}, {
		key: 'addAnswers',
		value: function addAnswers(answerPattern) {
			this.specialAnswers = answerPattern;
		}
	}, {
		key: 'change',
		value: function change(orderSetup) {
			this.actualOrders = this[orderSetup];
		}
	}, {
		key: 'fight',
		value: function fight() {
			switch (order.toLowerCase()) {
				case "użyj eliksir hp":
					// funkcja
					break;
				case "użyj eliksir mana":
					// funkcja
					break;
				case "statystyki":
					// funkcja
					break;
				case "załóż":
					// funkcja
					break;
				case "zamknij ekwipunek":
					// funkcja
					this.change("default");
					break;
				default:
					this.parent.GameConsole.error("Nie ma takiego polecenia");
					break;
			}
		}
	}, {
		key: 'equipment',
		value: function equipment(order) {
			switch (order.toLowerCase()) {
				case "użyj eliksir hp":
					// funkcja
					break;
				case "użyj eliksir mana":
					// funkcja
					break;
				case "statystyki":
					// funkcja
					break;
				case "załóż":
					// funkcja
					break;
				case "zamknij ekwipunek":
					// funkcja
					this.change("default");
					break;
				default:
					this.parent.GameConsole.error("Nie ma takiego polecenia z poziomu ekwipunku");
					break;
			}
		}
	}, {
		key: 'special',
		value: function special(order) {
			switch (order.toLowerCase()) {
				case this.specialOrders[0] || null:
					this.parent.specialAction(this.specialAnswers[0]);
					break;
				case this.specialOrders[1] || null:
					this.parent.specialAction(this.specialAnswers[1]);
					this.change("default");
					break;
				default:
					this.parent.GameConsole.error("Nie ma takiego polecenia");
					break;
			}
		}
	}, {
		key: 'default',
		value: function _default(order) {
			switch (order.toLowerCase()) {
				case "idź na wschód":
					this.parent.move(0, 1, "wyruszasz na wschód");
					break;
				case "idź na zachód":
					this.parent.move(0, -1, "wyruszasz na zachód");
					break;
				case "idź na północ":
					this.parent.move(-1, 0, "wyruszasz na północ");
					break;
				case "idź na południe":
					this.parent.move(1, 0, "wyruszasz na południe");
					break;
				case "sprawdź":
					//console.log(String(order.match(/sprawdź/))) regex for switch cases
					this.parent.checkPlace();
					break;
				case "pokaż ekwipunek":
					this.parent.checkEquipment();
					break;
				case "atakuj":
					// funkcja
					break;
				case "pogadaj z":
					// funkcja
					break;
				default:
					this.parent.GameConsole.error("Nie ma takiego polecenia");
					break;
			}
		}
	}]);

	return OrderSwitch;
}();

var Game = function () {
	function Game() {
		_classCallCheck(this, Game);

		this.GameConsole = new _console2.default(document.querySelector("#input"), document.querySelector("#output")), this.GameMap = new _map.Map(_scenario.scenario, document.querySelector("table")), this.OrderSwitch = new OrderSwitch(this), this.Player = new _gameObject.Player("Ziomek", 1, 0, 100, 50, 10, 10);
	}

	_createClass(Game, [{
		key: 'asyncFunc',
		value: function asyncFunc(callback) {
			return new Promise(function (resolve) {
				var timer = callback();
				// timer - do zmiennej przypisywana jest wartosc zwracana, długosc tekstu * timeout, informuje kiedy animacja pisania się zakończy
				setTimeout(function () {
					resolve(true);
				}, timer);
			});
		}
	}, {
		key: 'action',
		value: function action(order) {
			this.OrderSwitch.actualOrders(order);
		}
	}, {
		key: 'useItem',
		value: function useItem() {}
	}, {
		key: 'talkNPC',
		value: function talkNPC() {}
	}, {
		key: 'checkEquipment',
		value: function checkEquipment() {}

		// ---- WYPISYWANIE POLECEŃ MIEJSC SPECJALNYCH

	}, {
		key: 'specialAction',
		value: function specialAction(text) {
			this.GameConsole.present(text);
		}

		// ---- SPRAWDZANIE MIEJSC SPECJALNYCH

	}, {
		key: 'checkPlace',
		value: function checkPlace() {
			var _this = this;

			var event = this.GameMap.currentLocation.event;
			var specialOrders = this.GameMap.currentLocation.orders;
			var specialAnswers = this.GameMap.currentLocation.orderAnswer;
			var textOrderList = this.GameMap.currentLocation.listOfOrders;

			if (event != null) {
				this.OrderSwitch.addOrders(specialOrders);
				this.OrderSwitch.addAnswers(specialAnswers);
				this.OrderSwitch.change("special");

				this.asyncFunc(function () {
					return _this.GameConsole.present(event);
				}).then(function () {
					return _this.GameConsole.info("Możliwoci: " + textOrderList);
				});
			} else {
				this.GameConsole.info('Niestety nic znalaz\u0142es w okolicy, niczego ciekawego...');
			}
		}

		// ---- PRZEDSTAWIANIE LOKALIZACJI

	}, {
		key: 'presentLocation',
		value: function presentLocation() {
			var _this2 = this;

			var locationInfo = this.GameMap.currentLocation;

			this.asyncFunc(function () {
				return _this2.GameConsole.present(locationInfo.description);
			}).then(function () {
				if (locationInfo.monsterList.length) {
					_this2.GameConsole.warning('\n\t\t\t\t\t\tB\u0105d\u017A ostro\u017Cny, niedaleko wida\u0107: ' + locationInfo.monsterList.map(function (monster) {
						return ' ' + monster.name;
					}));
					console.log(locationInfo.monsterList.map(function (monster) {
						return monster.itemDrop;
					}));
				}
			});
		}

		// ---- PORUSZANIE SIĘ PO MAPIE

	}, {
		key: 'move',
		value: function move(y, x, text) {
			if (this.GameMap.changeLocation(y, x)) {
				this.GameConsole.info(text);
				this.presentLocation();
			} else {
				this.GameConsole.info('Niestety nie ma tam \u017Cadnego przejscia');
			}
		}
	}, {
		key: 'start',
		value: function start() {
			this.presentLocation();
			this.GameConsole.listenPlayer(this.action.bind(this));
			this.GameConsole.info(this.Player.showClothes());
		}
	}]);

	return Game;
}();

var TextGame = new Game();
TextGame.start();

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _consoleHistory = __webpack_require__(3);

var _consoleHistory2 = _interopRequireDefault(_consoleHistory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Console = function () {
    function Console() {
        _classCallCheck(this, Console);

        this.ConsoleHistory = new _consoleHistory2.default();
        this.user = "Player";
        this.input = document.querySelector("#input"), this.output = document.querySelector("#output"), this.infoColor = "#00da12", this.errorColor = "#da0000", this.warningColor = "#24a2ff";
        this.presentColor = "#a5a5a5", this.history = [], this.historyIterator;
    }

    _createClass(Console, [{
        key: "typingAnimation",
        value: function typingAnimation(element, text) {
            var _this = this;

            var iterator = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
            var speed = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 25;

            if (iterator < text.length) {
                element.textContent += text.charAt(iterator);
                iterator++;
                setTimeout(function () {
                    return _this.typingAnimation(element, text, iterator, speed);
                }, speed);
            }
        }
    }, {
        key: "write",
        value: function write(value) {
            var newParagraph = document.createElement("p");
            newParagraph.textContent = value;
            this.output.appendChild(newParagraph);
        }
    }, {
        key: "info",
        value: function info(value) {
            var newParagraph = document.createElement("pre");
            newParagraph.style.color = this.infoColor;
            newParagraph.textContent = value;
            this.output.appendChild(newParagraph);
        }
    }, {
        key: "present",
        value: function present(value) {
            var newParagraph = document.createElement("p");
            newParagraph.style.color = this.presentColor;
            this.output.appendChild(newParagraph);
            this.typingAnimation(newParagraph, value, 0, 10);

            return value.length * 11; // zwraca czas wykonywania dla funkcji asynchronicznej
        }
    }, {
        key: "warning",
        value: function warning(value) {
            var newParagraph = document.createElement("p");
            newParagraph.style.color = this.warningColor;
            newParagraph.textContent = value;
            this.output.appendChild(newParagraph);
        }
    }, {
        key: "error",
        value: function error(value) {
            var newParagraph = document.createElement("p");
            newParagraph.style.color = this.errorColor;
            newParagraph.textContent = value;
            this.output.appendChild(newParagraph);
        }
    }, {
        key: "listenPlayer",
        value: function listenPlayer(callback) {
            var _this2 = this;

            this.input.addEventListener("keydown", function (e) {

                if (e.keyCode === 13) {
                    //enter
                    e.preventDefault();

                    var inputText = _this2.input.value;
                    _this2.write(_this2.user + ": " + inputText);
                    _this2.input.value = "";

                    _this2.ConsoleHistory.add(inputText);
                    _this2.ConsoleHistory.resetIndex();
                    callback(inputText);
                } else if (e.keyCode === 38) {
                    // strzałka w góre - wczytuje wartosci z historii konsoli
                    e.preventDefault();
                    var prevValue = _this2.ConsoleHistory.getPrevOrder();
                    if (!prevValue) return;
                    _this2.input.value = prevValue;
                } else if (e.keyCode === 40) {
                    // strzałka w dół - wczytuje wartosci z historii konsoli
                    e.preventDefault();
                    var _prevValue = _this2.ConsoleHistory.getNextOrder();
                    if (!_prevValue) return;
                    _this2.input.value = _prevValue;
                }
            });
        }
    }, {
        key: "disable",
        value: function disable() {
            this.input.disabled = "disabled";
        }
    }, {
        key: "enable",
        value: function enable() {
            this.input.disabled = "";
            this.input.focus();
        }
    }]);

    return Console;
}();

exports.default = Console;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ConsoleHistory = function () {
	function ConsoleHistory() {
		_classCallCheck(this, ConsoleHistory);

		this.history = [], this.actualIndex = this.history.length;
	}

	_createClass(ConsoleHistory, [{
		key: "add",
		value: function add(value) {
			this.history.push(value);
		}
	}, {
		key: "resetIndex",
		value: function resetIndex() {
			this.actualIndex = this.history.length;
		}
	}, {
		key: "getPrevOrder",
		value: function getPrevOrder() {
			if (this.actualIndex <= 0) return false;

			this.actualIndex -= 1;
			return this.history[this.actualIndex];
		}
	}, {
		key: "getNextOrder",
		value: function getNextOrder() {
			if (this.actualIndex + 1 > this.history.length) return false;

			this.actualIndex += 1;
			return this.history[this.actualIndex];
		}
	}]);

	return ConsoleHistory;
}();

exports.default = ConsoleHistory;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Map = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Klasa MapImg umożliwia umożliwia działanie mapki z prawej strony konsoli


var _mapImg = __webpack_require__(5);

var _mapImg2 = _interopRequireDefault(_mapImg);

var _gameObject = __webpack_require__(0);

var _enemyConfig = __webpack_require__(6);

var _enemyConfig2 = _interopRequireDefault(_enemyConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// -------  LOCATION CLASS ---------- //
var Location = function () {
	function Location(scenaryObj) {
		_classCallCheck(this, Location);

		this.description = scenaryObj.description, this.event = scenaryObj.event.introduce || null, this.orders = this.collectOrders(scenaryObj.event.options), this.orderAnswer = this.collectAnswers(scenaryObj.event.options), this.listOfOrders = this.textOrderList(scenaryObj.event.options), this.monsterList;
	}

	_createClass(Location, [{
		key: 'collectOrders',
		value: function collectOrders(objArr) {
			if (!objArr) return null;

			var orders = objArr.map(function (obj) {
				return obj.action;
			});
			return orders;
		}
	}, {
		key: 'collectAnswers',
		value: function collectAnswers(objArr) {
			if (!objArr) return null;

			var orders = objArr.map(function (obj) {
				return obj.answer;
			});
			return orders;
		}
	}, {
		key: 'textOrderList',
		value: function textOrderList(objArr) {
			if (!objArr) return null;

			var orders = objArr.map(function (obj) {
				return ' [ ' + obj.action + ' ] ';
			});
			return orders;
		}
	}, {
		key: 'spawnMonsters',
		value: function spawnMonsters() {
			var listOfEnemy = [];
			var numberOfEnemy = Math.round(Math.random() * 3);

			for (var i = 1; i < numberOfEnemy; i++) {
				listOfEnemy.push(new _gameObject.Enemy(_enemyConfig2.default.getEnemy()));
			}

			this.monsterList = listOfEnemy;
		}
	}]);

	return Location;
}();

// -------  MAP CLASS ---------- //


var Map = function () {
	function Map(scenario, graficMapContainer) {
		_classCallCheck(this, Map);

		this.MapImage = graficMapContainer, this.scenario = scenario, this.topography = new Array(), //Collection of all created Locations Objects;
		this.currentCoords = { y: 0, x: 0 }, this.currentLocation;

		this.initMap();
	}

	_createClass(Map, [{
		key: 'changeLocation',
		value: function changeLocation() {
			var y = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
			var x = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

			var newY = this.currentCoords.y + y;
			var newX = this.currentCoords.x + x;

			if (newY < 0 || newX < 0) return false;else if (newY > this.topography.length - 1 || newX > this.topography[newY].length - 1) return false;

			this.currentLocation = this.topography[newY][newX];
			this.currentLocation.spawnMonsters();
			this.currentCoords.y = newY;
			this.currentCoords.x = newX;
			this.MapImage.selectArea(y, x);
			return true;
		}
	}, {
		key: 'createMapGrid',
		value: function createMapGrid() {
			var grid = document.createDocumentFragment(); // kolejcja elementów tabeli tworzących siatkę
			var arrayOfElements = []; // tablica 2D elementów siatki dla klasy MapImg, po której będzie iterować i nadawać style

			this.topography.map(function (row, index) {
				var tr = document.createElement("tr");
				arrayOfElements.push([]);

				row.forEach(function (cell) {
					var td = document.createElement("td");
					tr.appendChild(td);
					arrayOfElements[index].push(td);
				});

				grid.appendChild(tr);
			});

			this.MapImage.appendChild(grid);
			this.MapImage = new _mapImg2.default(arrayOfElements); // Nadpisuje własciwoć MapImage o obiekt klasy MapImg
		}
	}, {
		key: 'createMap',
		value: function createMap() {
			var _this = this;

			var iterator = -1; // iterator mający wspomóc stworzenie tabeli 2D, będzie zwiększany co 6 iteracji,
			// ma na celu wskazanie kiedy stworzyć nową tablicę.

			this.scenario.forEach(function (episode, index) {
				if (index % 6 === 0) {
					iterator += 1;
					_this.topography.push(new Array());
				};
				_this.topography[iterator].push(new Location(episode));
			});
		}
	}, {
		key: 'initMap',
		value: function initMap() {
			this.createMap();
			this.createMapGrid();
			this.changeLocation();
		}
	}]);

	return Map;
}();

exports.Map = Map;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MapImg = function () {
    function MapImg(mapGrid) {
        _classCallCheck(this, MapImg);

        this.mapGrid = mapGrid, this.actualPosition = { y: 0, x: 0 };
    }

    _createClass(MapImg, [{
        key: 'unselectArea',
        value: function unselectArea() {
            this.mapGrid[this.actualPosition.y][this.actualPosition.x].setAttribute('style', '');
        }
    }, {
        key: 'selectArea',
        value: function selectArea() {
            var y = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
            var x = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

            if (this.actualPosition.hasOwnProperty('x')) this.unselectArea();
            var newX = this.actualPosition.x += x;
            var newY = this.actualPosition.y += y;

            this.mapGrid[newY][newX].setAttribute('style', '\n            background-color: rgba(0, 34, 255, 0.47);\n            border: 1px solid #00f7e8;\n            box-shadow: 0px 0px 5px 2px rgba(0, 247, 232, 0.75);\n        ');
        }
    }]);

    return MapImg;
}();

exports.default = MapImg;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
				value: true
});

var ListOfEnemies = [{
				name: "Szczur",
				lvl: 1,
				exp: 10,
				hp: 40,
				mana: null,
				attack: 5,
				defence: 1
}, {
				name: "Pies",
				lvl: 1,
				exp: 12,
				hp: 50,
				mana: null,
				attack: 7,
				defence: 2
}, {
				name: "Niedźwiedź",
				lvl: 1,
				exp: 23,
				hp: 60,
				mana: null,
				attack: 10,
				defence: 4
}, {
				name: "Smok",
				lvl: 1,
				exp: 40,
				hp: 80,
				mana: null,
				attack: 15,
				defence: 5
}, {
				name: "Teściowa",
				lvl: 1,
				exp: 50,
				hp: 90,
				mana: null,
				attack: 17,
				defence: 8
}, {
				name: "Teściowa z wałkiem",
				lvl: 1,
				exp: 56,
				hp: 100,
				mana: null,
				attack: 20,
				defence: 10
}];

var EnemyCollector = {
				enemies: ListOfEnemies,

				getEnemy: function getEnemy() {
								var chanceRate = Math.round(Math.random() * 100);

								if (chanceRate > 90) {
												return this.enemies[5];
								} else if (chanceRate > 75) {
												return this.enemies[4];
								} else if (chanceRate > 60) {
												return this.enemies[3];
								} else if (chanceRate > 45) {
												return this.enemies[2];
								} else if (chanceRate > 30) {
												return this.enemies[1];
								} else {
												return this.enemies[0];
								}
				}
};

exports.default = EnemyCollector;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var scenario = exports.scenario = [{
	description: "Idąc dosyć długo, natrafiasz wkocu do rozdroża oraz starej chaty połozonej nieopodal",
	event: {
		introduce: "Chata wydaje się być opuszczona, wygląda na zaniedbaną a porośnięte otoczenie sugeruje że już dawno tu nikogo nie było. Ze środka jednak ciągle dobiga dziwny hałas...",
		options: [{
			action: "wejdź",
			answer: "Wchodząc zwracasz na siebie uwagę, szukającego tam jedzenia "
		}, {
			action: "odejdź",
			answer: "Może rzeczywiście lepiej się nie narażać, kto wie co tam się kryje..."
		}]
	}
}, {
	description: "Idąc dosyć długo, natrafiasz wkocu do rozdroża oraz starej chaty połozonej nieopodal",
	event: {}
}, {
	description: "Idąc dosyć długo, natrafiasz wkocu do rozdroża oraz starej chaty połozonej nieopodal",
	event: {
		introduce: "Chata wydaje się być opuszczona, wygląda na zaniedbaną a porośnięte otoczenie sugeruje że już dawno tu nikogo nie było. Ze środka jednak ciągle dobiga dziwny hałas...",
		options: [{
			action: "wejdź",
			answer: "Wchodząc zwracasz na siebie uwagę, szukającego tam jedzenia "
		}, {
			action: "odejdź",
			answer: "Może rzeczywiście lepiej się nie narażać, kto wie co tam się kryje..."
		}]
	}
}, {
	description: "Idąc dosyć długo, natrafiasz wkocu do rozdroża oraz starej chaty połozonej nieopodal",
	event: {
		introduce: "Chata wydaje się być opuszczona, wygląda na zaniedbaną a porośnięte otoczenie sugeruje że już dawno tu nikogo nie było. Ze środka jednak ciągle dobiga dziwny hałas...",
		options: [{
			action: "wejdź",
			answer: "Wchodząc zwracasz na siebie uwagę, szukającego tam jedzenia "
		}, {
			action: "odejdź",
			answer: "Może rzeczywiście lepiej się nie narażać, kto wie co tam się kryje..."
		}]
	}
}, {
	description: "Idąc dosyć długo, natrafiasz wkocu do rozdroża oraz starej chaty połozonej nieopodal",
	event: {
		introduce: "Chata wydaje się być opuszczona, wygląda na zaniedbaną a porośnięte otoczenie sugeruje że już dawno tu nikogo nie było. Ze środka jednak ciągle dobiga dziwny hałas...",
		options: [{
			action: "wejdź",
			answer: "Wchodząc zwracasz na siebie uwagę, szukającego tam jedzenia "
		}, {
			action: "odejdź",
			answer: "Może rzeczywiście lepiej się nie narażać, kto wie co tam się kryje..."
		}]
	}
}];

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map