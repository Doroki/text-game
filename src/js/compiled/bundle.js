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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _gameGrow = __webpack_require__(1);

var _gameGrow2 = _interopRequireDefault(_gameGrow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GameObject = function () {
	function GameObject(configObj) {
		_classCallCheck(this, GameObject);

		this.name = configObj.name, this.lvl = configObj.lvl + _gameGrow2.default.lvl, this.exp = configObj.exp * _gameGrow2.default.statsGrow, this.hp = configObj.hp * _gameGrow2.default.statsGrow, this.mana = configObj.mana * _gameGrow2.default.statsGrow, this.attack = configObj.attack * _gameGrow2.default.statsGrow, this.defence = configObj.defence * _gameGrow2.default.statsGrow, this.actualHP = this.hp, this.actualMP = this.mana;
	}

	_createClass(GameObject, [{
		key: 'hit',
		value: function hit(GameObjectToAttack) {
			var attackPower = this.attack * 2 + this.lvl;
			var dealtDamage = GameObjectToAttack.getHit(attackPower);

			if (!Number.isInteger(dealtDamage)) {
				return this.name + ' zaatakowa\u0142 i zada\u0142 ci ' + dealtDamage + ' obra\u017Cen. ' + dealtDamage;
			}

			return this.name + ' zaatakowa\u0142 i zada\u0142 ci ' + dealtDamage + ' obra\u017Cen';
		}
	}, {
		key: 'getHit',
		value: function getHit(hitValue) {
			var dmgAmount = hitValue - this.defence;
			var recivedDamage = dmgAmount < 0 ? 0 : dmgAmount;
			this.actualHP -= recivedDamage;

			return recivedDamage;
		}
	}]);

	return GameObject;
}();

var Npc = function (_GameObject) {
	_inherits(Npc, _GameObject);

	function Npc(configObj) {
		_classCallCheck(this, Npc);

		return _possibleConstructorReturn(this, (Npc.__proto__ || Object.getPrototypeOf(Npc)).call(this, configObj));
	}

	return Npc;
}(GameObject);

exports.default = GameObject;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var GameGrow = {
	lvl: 1,
	statsGrow: 1 * 10,

	updateStatus: function updateStatus(lvl) {
		this.lvl = lvl;
		this.statsGrow = lvl * 10;
	}
};

exports.default = GameGrow;

/***/ }),
/* 2 */
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
            return "\n            --------------------------\n            " + this.name + " \n            " + (this.hp != null ? this.hp + " Odnowienia HP" : this.mana + " Odnowienia MP") + "\n            --------------------------\n        ";
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

        return _possibleConstructorReturn(this, (ElixirMP.__proto__ || Object.getPrototypeOf(ElixirMP)).call(this, "Eliksir MP", null, 100));
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
/* 3 */
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
            return "\n            --------------------------\n            " + this.name + "\n            (-- " + this.type + " --)\n            + " + this.hp + " HP\n            + " + this.mana + " MP\n            + " + this.attack + " Ataku\n            + " + this.defence + " Obrony\n            --------------------------\n\n        ";
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
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _itemsConfig = __webpack_require__(13);

var ItemCollector = {
    armors: _itemsConfig.ArmorConfig,
    boots: _itemsConfig.BootsConfig,
    weapons: _itemsConfig.WeaponConfig,

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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Klasa konsoli
// Zmienna imitująca plik JSON z danymi, które są używane do przypisania informacji, jak opisy, wydarzenie itp. w każdej z lokalizacji


var _console = __webpack_require__(6);

var _console2 = _interopRequireDefault(_console);

var _orderSwitch = __webpack_require__(8);

var _orderSwitch2 = _interopRequireDefault(_orderSwitch);

var _map = __webpack_require__(9);

var _map2 = _interopRequireDefault(_map);

var _scenario = __webpack_require__(16);

var _scenario2 = _interopRequireDefault(_scenario);

var _gameGrow = __webpack_require__(1);

var _gameGrow2 = _interopRequireDefault(_gameGrow);

var _player = __webpack_require__(17);

var _player2 = _interopRequireDefault(_player);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Game = function () {
	function Game() {
		_classCallCheck(this, Game);

		this.GameConsole = new _console2.default(document.querySelector("#input"), document.querySelector("#output")), this.GameMap = new _map2.default(_scenario2.default, document.querySelector("table")), this.OrderSwitch = new _orderSwitch2.default(this), this.Player = new _player2.default({ name: "Ziomek", lvl: 1, exp: 0, hp: 100, mana: 50, attack: 10, defence: 10 });
	}

	// ---- ASYNCHRONICZNA FUNKCJA, WYŚWIETLA POLECNIA W POPRAWNEJ KOLEJNOŚCI


	_createClass(Game, [{
		key: 'asyncFunc',
		value: function asyncFunc(callback, timer1) {
			return new Promise(function (resolve) {
				var timer2 = callback();
				// timer2 - do zmiennej przypisywana jest wartosc zwracana, długosc tekstu * timeout, informuje kiedy animacja pisania się zakończy
				setTimeout(function () {
					resolve(true);
				}, timer1 || timer2);
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
			var statsInfo = '\n\t\tName: ' + this.Player.name + '\n\t\tLvL: ' + this.Player.lvl + ' \n\t\tExp: ' + this.Player.exp + '\n\t\tHP: ' + this.Player.actualHP + ' / ' + this.Player.hp + '\n\t\tMP: ' + this.Player.actualMP + ' / ' + this.Player.mana + '\n\t\tAttack: ' + this.Player.attack + '\n\t\tDeffence: ' + this.Player.defence + '\n\t\t';

			this.GameConsole.info(statsInfo);
		}
	}, {
		key: 'useItem',


		// ---- UŻYCIE KONSUMOWALNEGO PRZEDMIOTU
		value: function useItem(order) {
			var itemName = '[' + order.slice(5) + ']'; // "nazwa przedmiotu zawsze będzie sie zaczynać od indeksu 5, odcinane jest "użyj""
			var info = this.Player.useItem(itemName.toLowerCase());
			this.GameConsole.info(info);
			this.GameConsole.updateStats(this.Player);
		}

		// ---- SPRAWDZANIE CZY W OKOLICY ZNAJDUJE SIĘ SZUKANY WRÓG

	}, {
		key: 'fight',
		value: function fight(order) {
			var enemyName = order.slice(7);
			var Enemy = this.GameMap.findEnemy(enemyName.toLowerCase()); // sprawdza wrogów

			if (Enemy) {
				this.startFight(Enemy); // uruchamia walkę
			} else {
				this.GameConsole.error('Niestety nie ma w okolicy, takiego przeciwnika...');
			}
		}

		// ---- ROZPOCZĘCIE WALKI

	}, {
		key: 'startFight',
		value: function startFight(Enemy) {
			var _this = this;

			this.OrderSwitch.change("fight");

			this.asyncFunc(function () {
				// asynchronicznie prezentuje przebieg walki
				_this.GameConsole.present(_this.Player.hit(Enemy));
			}, 1500).then(function () {
				_this.GameConsole.present(Enemy.hit(_this.Player));
				_this.GameConsole.updateStats(_this.Player);
			}).then(function () {
				setTimeout(function () {
					return _this.checkFightResult(Enemy);
				}, 1500);
			});
		}
	}, {
		key: 'checkFightResult',


		// ---- SPRAWDZA PRZEBIEG WALKI, URUCHAMIA KOLEJNĄ JEJ ITERACJE LUB KONCZY W PRZYPADKU BRAKU HP KTÓREJŚ ZE STRON
		value: function checkFightResult(Enemy) {
			if (this.Player.actualHP <= 0) {
				// Przegrana Gracza
				this.Player.lostFight();
				this.GameConsole.updateStats(this.Player);
				this.GameConsole.error('Niestety przegra\u0142e\u015B walk\u0119, tracisz 20% expa');
				this.OrderSwitch.change("default");
			} else if (Enemy.actualHP > 0) {
				// Dalszy ciąg walki
				this.startFight(Enemy);
			} else {
				// Wygrana Gracza
				var lvlMsg = this.Player.gainExp(Enemy.exp);
				if (lvlMsg) {
					// Awans na następny LvL
					this.GameConsole.info(lvlMsg);
					this.GameConsole.updateStats(this.Player);
					_gameGrow2.default.updateStats(this.Player.lvl);
				}

				this.GameConsole.info(Enemy.name + ' zosta\u0142 pokonany!');
				var dropItemList = this.Player.collectItem(Enemy.itemDrop); // zbiera przedmioty po pokonanym przeciwniku
				this.GameConsole.info("Zdobyłeś: " + dropItemList);
				this.GameMap.deleteEnemy(Enemy); // usuwa pokonanego przeciwnika
				this.OrderSwitch.change("default");
			}
		}
	}, {
		key: 'talkNPC',
		value: function talkNPC() {}

		// ---- WYŚWIETLA EKWIPUNEK ORAZ PLECAK GRACZA

	}, {
		key: 'checkEquipment',
		value: function checkEquipment() {
			this.GameConsole.info('\nMENU EKWIPUNEK: \n');
			this.GameConsole.warning("\n--------------------------------------------------");
			this.GameConsole.info(this.Player.showClothes());
			this.GameConsole.warning("==================================================");
			this.GameConsole.info(this.Player.showBag());
			this.GameConsole.warning("--------------------------------------------------");
			this.GameConsole.info("\n");
		}

		// ---- ZAKLADA WYBRANY EKWIPUNEK ZNAJDUJĄCY SIĘ W PLECAKU

	}, {
		key: 'wearItem',
		value: function wearItem(order) {
			var itemName = '< ' + order.slice(6) + ' >'; // "nazwa przedmiotu zawsze będzie sie zaczynać od indeksu 6, odcinane jest "załóż""
			var info = this.Player.changeEq(itemName.toLowerCase());
			this.GameConsole.info(info);
			this.GameConsole.updateStats(this.Player);
		}

		// ---- POKAZUJE STATYSTYKI WYBRANEGO EKWIPUNKU

	}, {
		key: 'checkItem',
		value: function checkItem(order) {
			var itemName = order.slice(8); // "nazwa przedmiotu zawsze będzie sie zaczynać od indeksu 8, odcinane jest "sprawdź""
			var info = this.Player.clothStats(itemName.toLowerCase());
			this.GameConsole.info(info);
		}

		// ---- SPRAWDZANIE MIEJSC SPECJALNYCH

	}, {
		key: 'checkPlace',
		value: function checkPlace() {
			var _this2 = this;

			var event = this.GameMap.currentLocation.event;
			var specialOrders = this.GameMap.currentLocation.orders;
			var specialAnswers = this.GameMap.currentLocation.orderAnswer;
			var textOrderList = this.GameMap.currentLocation.listOfOrders;

			if (event != null) {
				this.OrderSwitch.addOrders(specialOrders);
				this.OrderSwitch.addAnswers(specialAnswers);
				this.OrderSwitch.change("special");

				this.asyncFunc(function () {
					return _this2.GameConsole.present(event);
				}).then(function () {
					return _this2.GameConsole.info("Możliwoci: " + textOrderList);
				});
			} else {
				this.GameConsole.info('Niestety w okolicy, nie ma nic ciekawego...');
			}
		}

		// ---- PRZEDSTAWIANIE LOKALIZACJI

	}, {
		key: 'presentLocation',
		value: function presentLocation() {
			var _this3 = this;

			var locationInfo = this.GameMap.currentLocation;

			this.asyncFunc(function () {
				return _this3.GameConsole.present(locationInfo.description);
			}).then(function () {
				if (locationInfo.monsterList.length) {
					_this3.GameConsole.warning('\n\t\t\t\t\t\tB\u0105d\u017A ostro\u017Cny!, w okolicy widziano: ' + locationInfo.monsterList.map(function (monster) {
						return ' ' + monster.name;
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
			this.GameConsole.listenPlayer(this.action.bind(this)); // Przekazuje konsoli funkcje, która ma być wywoływana przy każdym wcisnięciu "Enter"
			this.GameConsole.updateStats(this.Player);
		}
	}]);

	return Game;
}();

var TextGame = new Game();
TextGame.start();

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _consoleHistory = __webpack_require__(7);

var _consoleHistory2 = _interopRequireDefault(_consoleHistory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Console = function () {
    function Console() {
        _classCallCheck(this, Console);

        this.ConsoleHistory = new _consoleHistory2.default();
        this.user = "Player";

        this.input = document.querySelector("#input"), this.output = document.querySelector("#output"), this.consoleHP = document.querySelector("#hp"), this.consoleMP = document.querySelector("#mp"), this.infoColor = "#00da12", this.errorColor = "#da0000", this.warningColor = "#24a2ff";
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
                this.scrollOutput();
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
            this.scrollOutput();
        }
    }, {
        key: "info",
        value: function info(value) {
            var newParagraph = document.createElement("pre");
            newParagraph.style.color = this.infoColor;
            newParagraph.textContent = value;
            this.output.appendChild(newParagraph);
            this.scrollOutput();
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
            this.scrollOutput();
        }
    }, {
        key: "error",
        value: function error(value) {
            var newParagraph = document.createElement("p");
            newParagraph.style.color = this.errorColor;
            newParagraph.textContent = value;
            this.output.appendChild(newParagraph);
            this.scrollOutput();
        }
    }, {
        key: "listenPlayer",
        value: function listenPlayer(callback) {
            var _this2 = this;

            this.input.addEventListener("keydown", function (e) {

                if (e.keyCode === 13) {
                    //enter
                    e.preventDefault();
                    if (e.target.value === "" || e.target.value.indexOf(" ") === 0) return; // sprawdza czy w input jest pusty czy czy ma spacje jako pierwszy znak i zapobiega dalszej akcji

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
        key: "scrollOutput",
        value: function scrollOutput() {
            this.output.scrollTo(0, this.output.scrollHeight);
        }
    }, {
        key: "updateStats",
        value: function updateStats(statsObj) {
            var HPToShow = Math.round(statsObj.actualHP / statsObj.hp * 100);
            var MPToShow = Math.round(statsObj.actualMP / statsObj.mana * 100);

            this.consoleHP.textContent = "HP: " + (HPToShow < 0 ? 0 : HPToShow) + "%";
            this.consoleMP.textContent = "MP: " + (MPToShow < 0 ? 0 : MPToShow) + "%";
        }
    }]);

    return Console;
}();

exports.default = Console;

/***/ }),
/* 7 */
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
/* 8 */
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
        value: function fight(order) {
            switch (order.toLowerCase()) {
                case (order.toLowerCase().match(/^użyj (\s*\b[a-zA-Z]+\b){1,3}/) || "").input:
                    // sprawdź nazwa przedmiotu
                    this.parent.useItem(order);
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
                case (order.toLowerCase().match(/^użyj (\s*\b[a-zA-Z]+\b){1,3}/) || "").input:
                    // sprawdź nazwa przedmiotu
                    this.parent.useItem(order);
                    break;
                case "zjedz":
                    this.parent.useItem("jedz Jedzenie");
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
                case (order.toLowerCase().match(/^użyj (\s*\b[a-zA-Z]+\b){1,3}/) || "").input:
                    // sprawdź nazwa przedmiotu
                    this.parent.useItem(order);
                    break;
                case "zjedz":
                    this.parent.useItem("użyj Jedzenie");
                    break;
                case this.specialOrders[0] || null:
                    this.parent.GameConsole.present(this.specialAnswers[0]);
                    break;
                case this.specialOrders[1] || null:
                    this.parent.GameConsole.present(this.specialAnswers[1]);
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
                case (order.toLowerCase().match(/^użyj (\s*\b[a-zA-Z]+\b){1,3}/) || "").input:
                    // sprawdź nazwa przedmiotu
                    this.parent.useItem(order);
                    break;
                case "zjedz":
                    this.parent.useItem("użyj Jedzenie");
                    break;
                case (order.toLowerCase().match(/^atakuj (\s*\b[a-zA-Z]+\b){1,3}/) || "").input:
                    this.parent.fight(order);
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
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Klasa MapImg umożliwia umożliwia działanie mapki z prawej strony konsoli


var _mapImg = __webpack_require__(10);

var _mapImg2 = _interopRequireDefault(_mapImg);

var _location = __webpack_require__(11);

var _location2 = _interopRequireDefault(_location);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
				_this.topography[iterator].push(new _location2.default(episode));
			});
		}
	}, {
		key: 'findEnemy',
		value: function findEnemy(name) {
			var foudEnemy = this.currentLocation.monsterList.filter(function (enemy) {
				return enemy.name.toLowerCase() === name;
			});

			if (foudEnemy.length >= 0) {
				return foudEnemy[0];
			} else {
				return false;
			}
		}
	}, {
		key: 'deleteEnemy',
		value: function deleteEnemy(killedEnemy) {
			var foudEnemy = this.currentLocation.monsterList.findIndex(function (enemy) {
				return enemy.name === killedEnemy.name;
			});

			if (foudEnemy >= 0) {
				this.currentLocation.monsterList.splice(foudEnemy, 1);
			}
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

exports.default = Map;

/***/ }),
/* 10 */
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
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _enemy = __webpack_require__(12);

var _enemy2 = _interopRequireDefault(_enemy);

var _enemyCollector = __webpack_require__(14);

var _enemyCollector2 = _interopRequireDefault(_enemyCollector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
				listOfEnemy.push(new _enemy2.default(_enemyCollector2.default.getEnemy()));
			}

			this.monsterList = listOfEnemy;
		}
	}]);

	return Location;
}();

exports.default = Location;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _gameObject = __webpack_require__(0);

var _gameObject2 = _interopRequireDefault(_gameObject);

var _consumableItems = __webpack_require__(2);

var _wearableItem = __webpack_require__(3);

var _itemsCollector = __webpack_require__(4);

var _itemsCollector2 = _interopRequireDefault(_itemsCollector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
							itemArary.push(new _wearableItem.Armor(_itemsCollector2.default.getArmor()));
							break;
						case 1:
							itemArary.push(new _wearableItem.Shoes(_itemsCollector2.default.getArmor()));
							break;
						case 2:
							itemArary.push(new _wearableItem.Weapon(_itemsCollector2.default.getArmor()));
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
}(_gameObject2.default);

exports.default = Enemy;

/***/ }),
/* 13 */
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

exports.ArmorConfig = ArmorConfig;
exports.BootsConfig = BootsConfig;
exports.WeaponConfig = WeaponConfig;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
     value: true
});

var _enemyConfig = __webpack_require__(15);

var _enemyConfig2 = _interopRequireDefault(_enemyConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EnemyCollector = {
     enemies: _enemyConfig2.default,

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
/* 15 */
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

exports.default = ListOfEnemies;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var scenario = [{
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

exports.default = scenario;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _gameObject = __webpack_require__(0);

var _gameObject2 = _interopRequireDefault(_gameObject);

var _consumableItems = __webpack_require__(2);

var _wearableItem = __webpack_require__(3);

var _expSchema = __webpack_require__(18);

var _expSchema2 = _interopRequireDefault(_expSchema);

var _itemsCollector = __webpack_require__(4);

var _itemsCollector2 = _interopRequireDefault(_itemsCollector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Player = function (_GameObject) {
	_inherits(Player, _GameObject);

	function Player(configObj) {
		_classCallCheck(this, Player);

		var _this = _possibleConstructorReturn(this, (Player.__proto__ || Object.getPrototypeOf(Player)).call(this, configObj));

		_this.actualHP = _this.hp, _this.actualMP = _this.mana, _this.equipment = [], _this.backpack = [], _this.putOnEq([new _wearableItem.Armor(_itemsCollector2.default.armors[0]), new _wearableItem.Shoes(_itemsCollector2.default.boots[0]), new _wearableItem.Weapon(_itemsCollector2.default.weapons[0])]);
		_this.collectItem([new _wearableItem.Armor(_itemsCollector2.default.armors[2]), new _consumableItems.ElixirHP(), new _consumableItems.ElixirHP(), new _consumableItems.Food(), new _consumableItems.ElixirMP()]);
		return _this;
	}

	_createClass(Player, [{
		key: 'hit',
		value: function hit(GameObjectToAttack) {
			var defaultReturn = _get(Player.prototype.__proto__ || Object.getPrototypeOf(Player.prototype), 'hit', this).call(this, GameObjectToAttack);
			var dealtDamage = defaultReturn.match(/\d+/g);

			return 'Atakuj\u0105c, zada\u0142e\u015B ' + dealtDamage + ' obra\u017Cen';
		}
	}, {
		key: 'lostFight',
		value: function lostFight() {
			this.actualHP = this.hp;
			this.actualMP = this.mana;
			var expToLoose = Math.round(this.exp / 10);
			this.exp = this.exp > expToLoose ? expToLoose : 0;
		}
	}, {
		key: 'gainExp',
		value: function gainExp(expValue) {
			var _this2 = this;

			console.log(this.exp);
			this.exp += expValue;
			console.log(this.exp);
			var lvlPlan = _expSchema2.default.filter(function (plan) {
				return plan.lvl === _this2.lvl + 1;
			});
			if (this.exp >= lvlPlan[0].exp) {
				this.lvlUp();
				return 'GRATULACJE!!! Awansowa\u0142e\u015B na ' + this.lvl + ' lvl';
			} else {
				return false;
			}
		}
	}, {
		key: 'lvlUp',
		value: function lvlUp() {
			this.lvl += 1;
			this.updateStats("increase", { hp: 20, mana: 10, attack: 2, defence: 2 });
		}
	}, {
		key: 'updateStats',
		value: function updateStats(way, itemChanged) {
			if (way === "increase") {
				this.hp += itemChanged.hp;
				this.mana += itemChanged.mana;
				this.actualHP += itemChanged.hp;
				this.actualMP += itemChanged.mana;
				this.attack += itemChanged.attack;
				this.defence += itemChanged.defence;
			} else if (way === "decrease") {
				this.hp -= itemChanged.hp;
				this.mana -= itemChanged.mana;
				this.actualHP -= itemChanged.hp;
				this.actualMP -= itemChanged.mana;
				this.attack -= itemChanged.attack;
				this.defence -= itemChanged.defence;
			}
		}
	}, {
		key: 'useItem',
		value: function useItem(itemName) {
			var itemToUse = this.backpack.filter(function (item) {
				return item.name.toLowerCase() === itemName;
			});

			if (itemToUse.length > 0) {
				if (itemToUse[0].hp) {
					var hpHealed = this.actualHP + itemToUse[0].hp;
					this.actualHP = hpHealed < this.hp ? hpHealed : this.hp;
				}

				if (itemToUse[0].mana) {
					var mpHealed = this.actualMP + itemToUse[0].mana;
					this.actualMP = mpHealed < this.hp ? mpHealed : this.mana;
				}

				this.deleteFromBag(itemToUse[0]);

				return 'U\u017Cy\u0142e\u015B ' + itemToUse[0].name;
			} else {
				return 'Nie znaleziono takiego przedmiotu w plecaku, upewnij si\u0119 \u017Ce poprawnie wpisa\u0142e\u015B nazw\u0119';
			}
		}
	}, {
		key: 'deleteFromBag',
		value: function deleteFromBag(item) {
			var indexInBag = this.backpack.findIndex(function (bagItem) {
				return bagItem.name === item.name;
			});

			if (indexInBag >= 0) {
				this.backpack.splice(indexInBag, 1);
			}
		}
	}, {
		key: 'putOnEq',
		value: function putOnEq(itemsArr) {
			var _this3 = this;

			if (this.equipment.length >= 3) return;

			itemsArr.forEach(function (itemToPutOn) {
				_this3.equipment.push(itemToPutOn);
				_this3.deleteFromBag(itemToPutOn);
				_this3.updateStats("increase", itemToPutOn);
			});
		}
	}, {
		key: 'takeOffEq',
		value: function takeOffEq(itemsArr) {
			var _this4 = this;

			if (this.equipment.length <= 0) return;

			itemsArr.forEach(function (itemToTakeOff) {
				_this4.backpack.push(itemToTakeOff);
				var indexInEq = _this4.equipment.findIndex(function (eqItem) {
					return eqItem.name === itemToTakeOff.name;
				});
				if (indexInEq >= 0) {
					_this4.equipment.splice(indexInEq, 1);
				}
				_this4.updateStats("decrease", itemToTakeOff);
			});
		}
	}, {
		key: 'changeEq',
		value: function changeEq(itemName) {
			var itemToPutOn = this.backpack.filter(function (item) {
				return item.name.toLowerCase() === itemName;
			});

			if (itemToPutOn.length > 0) {
				var typeToChange = itemToPutOn[0].type;
				var itemToChange = this.equipment.filter(function (item) {
					return item.type === typeToChange;
				});

				this.takeOffEq(itemToChange);
				this.putOnEq(itemToPutOn);

				return 'zamieni\u0142e\u015B ' + itemToChange[0].name + ' na ' + itemToPutOn[0].name;
			} else {
				return 'Nie znaleziono takiego przedmiotu w plecaku, upewnij si\u0119 \u017Ce poprawnie wpisa\u0142e\u015B nazw\u0119';
			}
		}
	}, {
		key: 'collectItem',
		value: function collectItem(arrOfItems) {
			var _this5 = this;

			if (arrOfItems.length > 0) {
				var dropItemList = "";

				arrOfItems.forEach(function (item) {
					_this5.backpack.push(item);
					dropItemList += item.name + ' ';
				});

				return dropItemList;
			} else {
				return "Niestety przeciwnik nie miał nic przy sobie...";
			}
		}
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
			var _this6 = this;

			var bag = "W plecaku masz: \n\n";
			var temporaryBag = "";

			this.backpack.map(function (item) {
				if (temporaryBag.indexOf(item.name) > 0) return;

				var itemsCount = _this6.backpack.filter(function (i) {
					return i.name === item.name;
				}).length;
				temporaryBag += itemsCount > 1 ? ' ' + item.name + 'x' + itemsCount + ' ' : ' ' + item.name + ' ';
			});
			return bag += temporaryBag;
		}
	}, {
		key: 'clothStats',
		value: function clothStats(itemName) {
			var foundInEq = this.equipment.filter(function (item) {
				return item.name.toLowerCase() === '< ' + itemName + ' >';
			});
			var foundInBag = this.backpack.filter(function (item) {
				return item.name.toLowerCase() === '< ' + itemName + ' >';
			});
			var foundConsumable = this.backpack.filter(function (item) {
				return item.name.toLowerCase() === '[' + itemName + ']';
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
}(_gameObject2.default);

exports.default = Player;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var ExpSchema = [{ lvl: 2, exp: 100 }, { lvl: 3, exp: 200 }, { lvl: 4, exp: 400 }, { lvl: 5, exp: 800 }, { lvl: 6, exp: 1600 }, { lvl: 7, exp: 3200 }, { lvl: 8, exp: 6400 }, { lvl: 9, exp: 25600 }, { lvl: 10, exp: 51200 }, { lvl: 11, exp: 100000 }, { lvl: 12, exp: 150000 }, { lvl: 13, exp: 200000 }, { lvl: 14, exp: 250000 }, { lvl: 15, exp: 300000 }, { lvl: 16, exp: 350000 }, { lvl: 17, exp: 400000 }, { lvl: 18, exp: 450000 }, { lvl: 19, exp: 500000 }, { lvl: 20, exp: 550000 }, { lvl: 21, exp: 600000 }, { lvl: 22, exp: 650000 }, { lvl: 23, exp: 700000 }, { lvl: 24, exp: 750000 }, { lvl: 25, exp: 800000 }, { lvl: 26, exp: 850000 }, { lvl: 27, exp: 900000 }, { lvl: 28, exp: 950000 }, { lvl: 29, exp: 1000000 }, { lvl: 30, exp: 1050000 }, { lvl: 31, exp: 1100000 }, { lvl: 32, exp: 1200000 }, { lvl: 33, exp: 1300000 }, { lvl: 34, exp: 1400000 }, { lvl: 35, exp: 1500000 }, { lvl: 36, exp: 1600000 }, { lvl: 37, exp: 1700000 }, { lvl: 38, exp: 1800000 }, { lvl: 39, exp: 2000000 }, { lvl: 40, exp: 2100000 }, { lvl: 41, exp: 2200000 }, { lvl: 42, exp: 2300000 }, { lvl: 43, exp: 2400000 }, { lvl: 44, exp: 2500000 }, { lvl: 45, exp: 2600000 }, { lvl: 46, exp: 2700000 }, { lvl: 47, exp: 2800000 }, { lvl: 48, exp: 2900000 }, { lvl: 49, exp: 3000000 }, { lvl: 50, exp: 3100000 }, { lvl: 60, exp: 3200000 }, { lvl: 61, exp: 3300000 }, { lvl: 62, exp: 3400000 }, { lvl: 63, exp: 3500000 }, { lvl: 64, exp: 3600000 }, { lvl: 65, exp: 3700000 }, { lvl: 66, exp: 3800000 }, { lvl: 67, exp: 3900000 }, { lvl: 68, exp: 4000000 }, { lvl: 69, exp: 4100000 }, { lvl: 70, exp: 4200000 }, { lvl: 71, exp: 4300000 }, { lvl: 72, exp: 4400000 }, { lvl: 73, exp: 4500000 }, { lvl: 74, exp: 4600000 }, { lvl: 75, exp: 4700000 }, { lvl: 76, exp: 4800000 }, { lvl: 77, exp: 4900000 }, { lvl: 78, exp: 5000000 }, { lvl: 79, exp: 5100000 }, { lvl: 80, exp: 5200000 }, { lvl: 81, exp: 5300000 }, { lvl: 82, exp: 5400000 }, { lvl: 83, exp: 5500000 }, { lvl: 84, exp: 5600000 }, { lvl: 85, exp: 5700000 }, { lvl: 86, exp: 5800000 }, { lvl: 87, exp: 6000000 }, { lvl: 88, exp: 6200000 }, { lvl: 89, exp: 6400000 }, { lvl: 90, exp: 6600000 }, { lvl: 91, exp: 6800000 }, { lvl: 92, exp: 7000000 }, { lvl: 93, exp: 7200000 }, { lvl: 94, exp: 7400000 }, { lvl: 95, exp: 7600000 }, { lvl: 96, exp: 7800000 }, { lvl: 97, exp: 8000000 }, { lvl: 98, exp: 9000000 }, { lvl: 99, exp: 9500000 }, { lvl: 100, exp: 9990000 }];

exports.default = ExpSchema;

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map