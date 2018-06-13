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
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Player = exports.Npc = exports.Enemy = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _consumableItems = __webpack_require__(7);

var _wearableItem = __webpack_require__(8);

var _itemsConfig = __webpack_require__(9);

var _itemsConfig2 = _interopRequireDefault(_itemsConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GameObject = function () {
	function GameObject(configObj) {
		_classCallCheck(this, GameObject);

		this.name = configObj.name, this.lvl = configObj.lvl, this.exp = configObj.exp, this.hp = configObj.hp, this.mana = configObj.mana, this.attack = configObj.attack, this.defence = configObj.defence;
	}

	_createClass(GameObject, [{
		key: 'attack',
		value: function attack() {}
	}]);

	return GameObject;
}();

var Enemy = function (_GameObject) {
	_inherits(Enemy, _GameObject);

	function Enemy(configObj) {
		_classCallCheck(this, Enemy);

		var _this = _possibleConstructorReturn(this, (Enemy.__proto__ || Object.getPrototypeOf(Enemy)).call(this, configObj));

		_this.itemDrop = _this.collectItemDrop();
		return _this;
	}

	_createClass(Enemy, [{
		key: 'collectItemDrop',
		value: function collectItemDrop() {
			var itemArary = [];

			for (var i = 0; i < 3; i++) {
				if (Math.round(Math.random() * 9) > 8) {
					//10% szansy aby otrzymać ubieralny przedmiot w kazdej iteracji
					switch (Math.round(Math.random() * 2)) {
						case 0:
							itemArary.push(new _wearableItem.Armor(_itemsConfig2.default.getArmor()));
							break;
						case 1:
							itemArary.push(new _wearableItem.Armor(_itemsConfig2.default.getArmor()));
							break;
						case 2:
							itemArary.push(new _wearableItem.Armor(_itemsConfig2.default.getArmor()));
							break;
					}
				}

				if (Math.round(Math.random() * 9) > 6) {
					//30% szansy aby otrzymać eliksir w kazdej iteracji
					itemArary.push(Math.round(Math.random()) ? new _consumableItems.ElixirHP() : new _consumableItems.ElixirMP());
				}

				if (Math.round(Math.random() * 9) > 4) {
					//50% szansy aby otrzymać jedzenie w każdej iteracji
					itemArary.push(new _consumableItems.Food());
				}
			}

			return itemArary;
		}
	}]);

	return Enemy;
}(GameObject);

var Npc = function (_GameObject2) {
	_inherits(Npc, _GameObject2);

	function Npc(configObj) {
		_classCallCheck(this, Npc);

		return _possibleConstructorReturn(this, (Npc.__proto__ || Object.getPrototypeOf(Npc)).call(this, configObj));
	}

	return Npc;
}(GameObject);

var Player = function (_GameObject3) {
	_inherits(Player, _GameObject3);

	function Player(configObj) {
		_classCallCheck(this, Player);

		var _this3 = _possibleConstructorReturn(this, (Player.__proto__ || Object.getPrototypeOf(Player)).call(this, configObj));

		_this3.equipment = [new _wearableItem.Armor(_itemsConfig2.default.armors[0]), new _wearableItem.Shoes(_itemsConfig2.default.boots[0]), new _wearableItem.Weapon(_itemsConfig2.default.weapons[0])], _this3.backpack = [new _wearableItem.Armor(_itemsConfig2.default.armors[2]), new _consumableItems.ElixirHP(), new _consumableItems.ElixirHP(), new _consumableItems.Food()];
		return _this3;
	}

	_createClass(Player, [{
		key: 'lvlUp',
		value: function lvlUp() {}
	}, {
		key: 'updateStats',
		value: function updateStats(way) {
			var _this4 = this;

			if (way = "increase") {
				this.equipment.forEach(function (item) {
					// console.log(item)
					_this4.hp += item.hp;
					_this4.mana += item.mana;
					_this4.attack += item.attack;
					_this4.defence += item.defence;
				});
			} else if (way = "decrease") {
				this.equipment.forEach(function (item) {
					console.log(_this4);
					_this4.hp -= item.hp;
					_this4.mana -= item.mana;
					_this4.attack -= item.attack;
					_this4.defence -= item.defence;
				});
			}
		}
	}, {
		key: 'putOnEq',
		value: function putOnEq(itemsArr) {
			var _this5 = this;

			itemsArr.forEach(function (itemToPutOn) {
				_this5.equipment.push(itemToPutOn);
				var indexInBag = _this5.backpack.findIndex(function (bagItem) {
					return bagItem.name === itemToPutOn.name;
				});
				_this5.backpack.splice(indexInBag, 1);
			});

			this.updateStats("increase");
		}
	}, {
		key: 'takeOffEq',
		value: function takeOffEq(itemsArr) {
			var _this6 = this;

			itemsArr.forEach(function (itemToTakeOff) {
				_this6.backpack.push(itemToTakeOff);
				var indexInEq = _this6.equipment.findIndex(function (eqItem) {
					return eqItem.name === itemToTakeOff.name;
				});
				_this6.equipment.splice(indexInEq, 1);
			});

			this.updateStats("decrease");
		}
	}, {
		key: 'changeEq',
		value: function changeEq(itemName) {
			var itemToPutOn = this.backpack.filter(function (item) {
				return item.name === itemName;
			});

			if (itemToPutOn.length > 0) {
				var typeToChange = itemToPutOn[0].type;
				var itemToChange = this.equipment.filter(function (item) {
					return item.type === typeToChange;
				});

				this.takeOffEq(itemToChange);
				this.putOnEq(itemToPutOn);

				return 'zamieni\u0142e\u015B ' + itemToChange.name + ' na ' + itemName;
			} else {
				return 'Nie znaleziono takiego przedmiotu w plecaku, upewnij si\u0119 \u017Ce poprawnie wpisa\u0142e\u015B nazw\u0119';
			}
		}
	}, {
		key: 'collectItem',
		value: function collectItem() {}
	}, {
		key: 'showClothes',
		value: function showClothes() {
			var eq = "Masz na sobie: \n\n";
			this.equipment.map(function (item) {
				return eq += ' ' + item.type + ': ' + item.name + ' \n';
			});
			return eq += "\n";
		}
	}, {
		key: 'showBag',
		value: function showBag() {
			var _this7 = this;

			var bag = "W plecaku masz: \n\n";
			var temporaryBag = "";

			this.backpack.map(function (item) {
				if (temporaryBag.indexOf(item.name) > 0) return;

				var itemsCount = _this7.backpack.filter(function (i) {
					return i.name === item.name;
				}).length;
				temporaryBag += itemsCount ? ' ' + item.name + ' x' + itemsCount + ' ' : ' ' + item.name + ' ';
			});

			return bag += temporaryBag;
		}
	}, {
		key: 'clothStats',
		value: function clothStats(itemName) {
			var foundInEq = this.equipment.filter(function (item) {
				return item.name === '< ' + itemName + ' >';
			});
			var foundInBag = this.backpack.filter(function (item) {
				return item.name === '< ' + itemName + ' >';
			});
			var foundConsumable = this.backpack.filter(function (item) {
				return item.name === '[' + itemName + ']';
			});

			if (foundInEq.length > 0) {
				return foundInEq[0].showStats();
			} else if (foundInBag.length > 0) {
				return foundInBag[0].showStats();
			} else if (foundConsumable.length > 0) {
				return foundConsumable[0].showStats();
			} else {
				return 'Nie znaleziono takiego przedmiotu, upewnij si\u0119 \u017Ce poprawnie wpisa\u0142e\u015B nazw\u0119';
			}
		}
	}]);

	return Player;
}(GameObject);

exports.Enemy = Enemy;
exports.Npc = Npc;
exports.Player = Player;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Klasa konsoli
// Zmienna imitująca plik JSON z danymi, które są używane do przypisania informacji, jak opisy, wydarzenie itp. w każdej z lokalizacji


var _console = __webpack_require__(2);

var _console2 = _interopRequireDefault(_console);

var _orderSwitch = __webpack_require__(4);

var _orderSwitch2 = _interopRequireDefault(_orderSwitch);

var _map = __webpack_require__(5);

var _scenario = __webpack_require__(11);

var _gameObject = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Game = function () {
	function Game() {
		_classCallCheck(this, Game);

		this.GameConsole = new _console2.default(document.querySelector("#input"), document.querySelector("#output")), this.GameMap = new _map.Map(_scenario.scenario, document.querySelector("table")), this.OrderSwitch = new _orderSwitch2.default(this), this.Player = new _gameObject.Player({ name: "Ziomek", lvl: 1, exp: 0, hp: 100, mana: 50, attack: 10, defence: 10 });
	}

	// ---- ASYNCHRONICZNA FUNKCJA, WYŚWIETLA POLECNIA W POPRAWNEJ KOLEJNOŚCI


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

		// ---- FUNKCJA PRZEKAZYWANA DO NASŁUCHIWANIA POLECIEN GRACZA PRZEZ KONCOLE

	}, {
		key: 'action',
		value: function action(order) {
			this.OrderSwitch.actualOrders(order);
		}
	}, {
		key: 'showPlayerStats',
		value: function showPlayerStats() {
			var statsInfo = '\n\t\tName:' + this.Player.name + '\n\t\tLvL:' + this.Player.lvl + ' \n\t\tExp:' + this.Player.exp + '\n\t\tHP:' + this.Player.hp + '\n\t\tMP:' + this.Player.mana + '\n\t\tAttack:' + this.Player.attack + '\n\t\tDeffence:' + this.Player.defence + '\n\t\t';

			this.GameConsole.info(statsInfo);
		}
	}, {
		key: 'useItem',
		value: function useItem() {}
	}, {
		key: 'talkNPC',
		value: function talkNPC() {}

		// ---- WYŚWIETLA EKWIPUNEK ORAZ PLECAK GRACZA

	}, {
		key: 'checkEquipment',
		value: function checkEquipment() {
			this.GameConsole.info('Znajdujesz si\u0119 teraz w menu ekwipunek: \n');
			this.GameConsole.warning("\n--------------------------------------------------");
			this.GameConsole.info(this.Player.showClothes());
			this.GameConsole.warning("==================================================");
			this.GameConsole.info(this.Player.showBag());
			this.GameConsole.warning("\n--------------------------------------------------");
		}

		// ---- ZAKLADA WYBRANY EKWIPUNEK ZNAJDUJĄCY SIĘ W PLECAKU

	}, {
		key: 'wearItem',
		value: function wearItem(order) {
			var itemName = '< ' + order.slice(6) + ' >'; // "nazwa przedmiotu zawsze będzie sie zaczynać od indeksu 6, odcinane jest "załóż""
			var info = this.Player.changeEq(itemName);
			this.GameConsole.info(info);
		}

		// ---- POKAZUJE STATYSTYKI WYBRANEGO EKWIPUNKU

	}, {
		key: 'checkItem',
		value: function checkItem(order) {
			console.log(order.slice(8));
			var itemName = order.slice(8); // "nazwa przedmiotu zawsze będzie sie zaczynać od indeksu 8, odcinane jest "sprawdź""
			var info = this.Player.clothStats(itemName);
			this.GameConsole.info(info);
		}

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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var OrderSwitch = function () {
    function OrderSwitch(parent) {
        _classCallCheck(this, OrderSwitch);

        this.parent = parent;
        this.actualOrders = this.default, this.specialOrders, this.specialAnswers;
    }

    _createClass(OrderSwitch, [{
        key: "addOrders",
        value: function addOrders(orderPattern) {
            this.specialOrders = orderPattern;
        }
    }, {
        key: "addAnswers",
        value: function addAnswers(answerPattern) {
            this.specialAnswers = answerPattern;
        }
    }, {
        key: "change",
        value: function change(orderSetup) {
            this.actualOrders = this[orderSetup];
        }
    }, {
        key: "fight",
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
        key: "equipment",
        value: function equipment(order) {
            switch (order.toLowerCase()) {
                case "użyj eliksir hp":
                    // funkcja
                    break;
                case "użyj eliksir mana":
                    // funkcja
                    break;
                case "statystyki":
                    this.parent.showPlayerStats();
                    break;
                case (order.toLowerCase().match(/^sprawdź (\s*\b[a-zA-Z]+\b){1,3}/) || "").input:
                    // sprawdź nazwa przedmiotu
                    this.parent.checkItem(order);
                    break;
                case "pokaż eq":
                    this.parent.checkEquipment();
                    break;
                case (order.toLowerCase().match(/^załóż (\s*\b[a-zA-Z]+\b){1,3}/) || "").input:
                    // Załóż nazwa przedmiotu
                    this.parent.wearItem(order);
                    break;
                case "zamknij":
                    this.parent.GameConsole.info("zamknąłeś ekwipunek");
                    this.change("default");
                    break;
                default:
                    this.parent.GameConsole.error("Nie ma takiego polecenia z poziomu ekwipunku");
                    break;
            }
        }
    }, {
        key: "special",
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
        key: "default",
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
                    this.parent.checkPlace();
                    break;
                case "ekwipunek":
                    this.change("equipment");
                    this.parent.checkEquipment();
                    break;
                case "atakuj":
                    this.change("fight");
                    this.parent.startFigth(order);
                    break;
                default:
                    this.parent.GameConsole.error("Nie ma takiego polecenia");
                    break;
            }
        }
    }]);

    return OrderSwitch;
}();

exports.default = OrderSwitch;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Map = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Klasa MapImg umożliwia umożliwia działanie mapki z prawej strony konsoli


var _mapImg = __webpack_require__(6);

var _mapImg2 = _interopRequireDefault(_mapImg);

var _gameObject = __webpack_require__(0);

var _enemyConfig = __webpack_require__(10);

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
/* 6 */
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
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ConsumableItem = function () {
    function ConsumableItem(name) {
        var hp = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        var mana = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

        _classCallCheck(this, ConsumableItem);

        this.name = "[" + name + "]", this.hp = hp, this.mana = mana;
    }

    _createClass(ConsumableItem, [{
        key: "showStats",
        value: function showStats() {
            return "\n--------------------------\n" + this.name + " \n  " + (this.hp != null ? this.hp + " Odnowienia HP" : this.mana + " Odnowienia MANA") + "\n--------------------------\n        ";
        }
    }]);

    return ConsumableItem;
}();

var ElixirHP = function (_ConsumableItem) {
    _inherits(ElixirHP, _ConsumableItem);

    function ElixirHP() {
        _classCallCheck(this, ElixirHP);

        return _possibleConstructorReturn(this, (ElixirHP.__proto__ || Object.getPrototypeOf(ElixirHP)).call(this, "Eliksir HP", 100));
    }

    return ElixirHP;
}(ConsumableItem);

var ElixirMP = function (_ConsumableItem2) {
    _inherits(ElixirMP, _ConsumableItem2);

    function ElixirMP() {
        _classCallCheck(this, ElixirMP);

        return _possibleConstructorReturn(this, (ElixirMP.__proto__ || Object.getPrototypeOf(ElixirMP)).call(this, "Eliksir MANA", null, 100));
    }

    return ElixirMP;
}(ConsumableItem);

var Food = function (_ConsumableItem3) {
    _inherits(Food, _ConsumableItem3);

    function Food() {
        _classCallCheck(this, Food);

        return _possibleConstructorReturn(this, (Food.__proto__ || Object.getPrototypeOf(Food)).call(this, "Jedzenie", 20));
    }

    return Food;
}(ConsumableItem);

exports.ElixirHP = ElixirHP;
exports.ElixirMP = ElixirMP;
exports.Food = Food;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Item = function () {
    function Item(type, object) {
        _classCallCheck(this, Item);

        this.name = "< " + object.name + " >", this.type = type, this.hp = object.hp, this.mana = object.mana, this.attack = object.attack, this.defence = object.defence;
    }

    _createClass(Item, [{
        key: "showStats",
        value: function showStats() {
            return "\n--------------------------\n" + this.name + "\n  (-- " + this.type + " --)\n  + " + this.hp + " HP\n  + " + this.mana + " MP\n  + " + this.attack + " Ataku\n  + " + this.defence + " Obrony\n--------------------------\n\n";
        }
    }]);

    return Item;
}();

var Armor = function (_Item) {
    _inherits(Armor, _Item);

    function Armor(object) {
        _classCallCheck(this, Armor);

        return _possibleConstructorReturn(this, (Armor.__proto__ || Object.getPrototypeOf(Armor)).call(this, "Zbroja", object));
    }

    return Armor;
}(Item);

var Shoes = function (_Item2) {
    _inherits(Shoes, _Item2);

    function Shoes(object) {
        _classCallCheck(this, Shoes);

        return _possibleConstructorReturn(this, (Shoes.__proto__ || Object.getPrototypeOf(Shoes)).call(this, "Buty", object));
    }

    return Shoes;
}(Item);

var Weapon = function (_Item3) {
    _inherits(Weapon, _Item3);

    function Weapon(object) {
        _classCallCheck(this, Weapon);

        return _possibleConstructorReturn(this, (Weapon.__proto__ || Object.getPrototypeOf(Weapon)).call(this, "Broń", object));
    }

    return Weapon;
}(Item);

exports.Armor = Armor;
exports.Shoes = Shoes;
exports.Weapon = Weapon;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var ArmorConfig = [{
    name: "Bawełniana Koszula",
    hp: 10,
    mana: 0,
    attack: 0,
    defence: 2
}, {
    name: "Skurzana Zbroja",
    hp: 20,
    mana: 10,
    attack: 0,
    defence: 12
}, {
    name: "Kolczuga",
    hp: 40,
    mana: 15,
    attack: 0,
    defence: 30
}, {
    name: "Zbroja",
    hp: 50,
    mana: 30,
    attack: 0,
    defence: 50
}];

var BootsConfig = [{
    name: "Sandały",
    hp: 10,
    mana: 0,
    attack: 0,
    defence: 2
}, {
    name: "Trzewiki",
    hp: 20,
    mana: 10,
    attack: 0,
    defence: 12
}, {
    name: "Skórzane buty",
    hp: 40,
    mana: 15,
    attack: 0,
    defence: 30
}, {
    name: "Rycerskie buty",
    hp: 50,
    mana: 30,
    attack: 0,
    defence: 50
}];

var WeaponConfig = [{
    name: "Drewniana pałka",
    hp: 10,
    mana: 0,
    attack: 0,
    defence: 2
}, {
    name: "Tasak kuchenny",
    hp: 20,
    mana: 10,
    attack: 0,
    defence: 12
}, {
    name: "Sztylet",
    hp: 40,
    mana: 15,
    attack: 0,
    defence: 30
}, {
    name: "Długi miecz",
    hp: 50,
    mana: 30,
    attack: 0,
    defence: 50
}];

var ItemCollector = {
    armors: ArmorConfig,
    boots: BootsConfig,
    weapons: WeaponConfig,

    getArmor: function getArmor() {
        var chanceRate = Math.round(Math.random() * 100);

        if (chanceRate > 94) {
            return this.armors[3];
        } else if (chanceRate > 84) {
            return this.armors[2];
        } else if (chanceRate > 64) {
            return this.armors[1];
        } else {
            return this.armors[0];
        }
    },
    getBoots: function getBoots() {
        var chanceRate = Math.round(Math.random() * 100);

        if (chanceRate > 94) {
            return this.boots[3];
        } else if (chanceRate > 84) {
            return this.boots[2];
        } else if (chanceRate > 64) {
            return this.boots[1];
        } else {
            return this.boots[0];
        }
    },
    getWeapon: function getWeapon() {
        var chanceRate = Math.round(Math.random() * 100);

        if (chanceRate > 94) {
            return this.weapons[3];
        } else if (chanceRate > 84) {
            return this.weapons[2];
        } else if (chanceRate > 64) {
            return this.weapons[1];
        } else {
            return this.weapons[0];
        }
    }
};

exports.default = ItemCollector;

/***/ }),
/* 10 */
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
/* 11 */
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