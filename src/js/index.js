import Console from './modules/console/console.js'; // Klasa konsoli
import OrderSwitch from './modules/order-switch.js';
import {
	Map
} from './modules/map/map.js';
import {
	scenario
} from './modules/scenario/scenario.js'; // Zmienna imitująca plik JSON z danymi, które są używane do przypisania informacji, jak opisy, wydarzenie itp. w każdej z lokalizacji
import {
	Player
} from './modules/game-objects/game-object.js';





class Game {
	constructor() {
		this.GameConsole = new Console(document.querySelector("#input"), document.querySelector("#output")),
			this.GameMap = new Map(scenario, document.querySelector("table")),
			this.OrderSwitch = new OrderSwitch(this),
			this.Player = new Player({name: "Ziomek", lvl: 1, exp: 0, hp: 100, mana: 50, attack: 10, defence: 10})
	}

	// ---- ASYNCHRONICZNA FUNKCJA, WYŚWIETLA POLECNIA W POPRAWNEJ KOLEJNOŚCI
	asyncFunc(callback) {
		return new Promise((resolve) => {
			const timer = callback();
			// timer - do zmiennej przypisywana jest wartosc zwracana, długosc tekstu * timeout, informuje kiedy animacja pisania się zakończy
			setTimeout(() => {
				resolve(true)
			}, timer);
		});
	}

	// ---- FUNKCJA PRZEKAZYWANA DO NASŁUCHIWANIA POLECIEN GRACZA PRZEZ KONCOLE
	action(order) {
		this.OrderSwitch.actualOrders(order);
	}

	showPlayerStats() {
		const statsInfo = `
		Name:${this.Player.name}
		LvL:${this.Player.lvl} 
		Exp:${this.Player.exp}
		HP:${this.Player.hp}
		MP:${this.Player.mana}
		Attack:${this.Player.attack}
		Deffence:${this.Player.defence}
		`;
		
		this.GameConsole.info(statsInfo);
	};

	useItem() {}

	talkNPC() {}

	// ---- WYŚWIETLA EKWIPUNEK ORAZ PLECAK GRACZA
	checkEquipment() {
		this.GameConsole.info(`Znajdujesz się teraz w menu ekwipunek: \n`);
		this.GameConsole.warning("\n--------------------------------------------------");
		this.GameConsole.info(this.Player.showClothes());
		this.GameConsole.warning("==================================================");
		this.GameConsole.info(this.Player.showBag());
		this.GameConsole.warning("\n--------------------------------------------------");
	}

	// ---- ZAKLADA WYBRANY EKWIPUNEK ZNAJDUJĄCY SIĘ W PLECAKU
	wearItem(order) {
		const itemName = `< ${order.slice(6)} >`; // "nazwa przedmiotu zawsze będzie sie zaczynać od indeksu 6, odcinane jest "załóż""
		const info = this.Player.changeEq(itemName);
		this.GameConsole.info(info);
	}

	// ---- POKAZUJE STATYSTYKI WYBRANEGO EKWIPUNKU
	checkItem(order) {
		console.log(order.slice(8))
		const itemName = order.slice(8); // "nazwa przedmiotu zawsze będzie sie zaczynać od indeksu 8, odcinane jest "sprawdź""
		const info = this.Player.clothStats(itemName);
		this.GameConsole.info(info);
	}

	// ---- WYPISYWANIE POLECEŃ MIEJSC SPECJALNYCH
	specialAction(text) {
		this.GameConsole.present(text);
	}

	// ---- SPRAWDZANIE MIEJSC SPECJALNYCH
	checkPlace() {
		let event = this.GameMap.currentLocation.event;
		let specialOrders = this.GameMap.currentLocation.orders;
		let specialAnswers = this.GameMap.currentLocation.orderAnswer;
		let textOrderList = this.GameMap.currentLocation.listOfOrders;

		if (event != null) {
			this.OrderSwitch.addOrders(specialOrders);
			this.OrderSwitch.addAnswers(specialAnswers);
			this.OrderSwitch.change("special");

			this.asyncFunc(() =>
				this.GameConsole.present(event)
			).then(() =>
				this.GameConsole.info("Możliwoci: " + textOrderList));

		} else {
			this.GameConsole.info(`Niestety nic znalazłes w okolicy, niczego ciekawego...`);
		}
	}

	// ---- PRZEDSTAWIANIE LOKALIZACJI
	presentLocation() {
		const locationInfo = this.GameMap.currentLocation;

		this.asyncFunc(() =>
			this.GameConsole.present(locationInfo.description)
		).then(() => {
			if (locationInfo.monsterList.length) {
				this.GameConsole.warning(`
						Bądź ostrożny, niedaleko widać: ${
								locationInfo.monsterList.map(monster => ` ${monster.name}`)
						}`);
				console.log(locationInfo.monsterList.map(monster => monster.itemDrop))
			}
		});
	}

	// ---- PORUSZANIE SIĘ PO MAPIE
	move(y, x, text) {
		if (this.GameMap.changeLocation(y, x)) {
			this.GameConsole.info(text);
			this.presentLocation()
		} else {
			this.GameConsole.info(`Niestety nie ma tam żadnego przejscia`);
		}
	}

	start() {
		this.presentLocation();
		this.GameConsole.listenPlayer(this.action.bind(this));
	}
}


const TextGame = new Game();
TextGame.start();