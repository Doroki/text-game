import Console from './modules/console/console.js'; // Klasa konsoli
import OrderSwitch from './modules/order-switch.js';
import Map from './modules/map/map.js';
import scenario from './config-files/scenario.js'; // Zmienna imitująca plik JSON z danymi, które są używane do przypisania informacji, jak opisy, wydarzenie itp. w każdej z lokalizacji
import Greetings from './config-files/greetings.js';
import GameGrow from './config-files/game-grow.js';
import Player from './modules/game-objects/player.js';
import GameObject from './modules/game-objects/game-object.js';


class Game {
	constructor() {
		this.GameConsole = new Console(document.querySelector("#input"), document.querySelector("#output")),
			this.GameMap = new Map(scenario, document.querySelector("table")),
			this.OrderSwitch = new OrderSwitch(this),
			this.Player = new Player({name: "", lvl: 1, exp: 0, hp: 100, mana: 50, attack: 10, defence: 10})
	}

	// ---- ASYNCHRONICZNA FUNKCJA, WYŚWIETLA POLECNIA W POPRAWNEJ KOLEJNOŚCI
	asyncFunc(callback, timer1) {
		return new Promise((resolve) => {
			const timer2 = callback();
			// timer2 - do zmiennej przypisywana jest wartosc zwracana, długosc tekstu * timeout, informuje kiedy animacja pisania się zakończy
			setTimeout(() => {
				resolve(true)
			}, timer1 || timer2);
		});
	}

	// ---- FUNKCJA PRZEKAZYWANA DO NASŁUCHIWANIA POLECIEN GRACZA PRZEZ KONCOLE
	action(order) {
		this.OrderSwitch.actualOrders(order);
	}

	showPlayerStats() {
		const statsInfo = `
		Name: ${this.Player.name}
		LvL: ${this.Player.lvl} 
		Exp: ${this.Player.exp}
		HP: ${this.Player.actualHP} / ${this.Player.hp}
		MP: ${this.Player.actualMP} / ${this.Player.mana}
		Attack: ${this.Player.attack}
		Deffence: ${this.Player.defence}
		`;
		
		this.GameConsole.info(statsInfo);
	};

	// ---- UŻYCIE KONSUMOWALNEGO PRZEDMIOTU
	useItem(order) {
		const itemName = `[${order.slice(5)}]`; // "nazwa przedmiotu zawsze będzie sie zaczynać od indeksu 5, odcinane jest "użyj""
		const info = this.Player.useItem(itemName.toLowerCase());
		this.GameConsole.info(info);
		this.GameConsole.updateStats(this.Player);
	}

	// ---- SPRAWDZANIE CZY W OKOLICY ZNAJDUJE SIĘ SZUKANY WRÓG
	fight(order) {
		const enemyName = order.slice(7); 
		const Enemy = this.GameMap.findEnemy(enemyName.toLowerCase()); // sprawdza wrogów

		if(Enemy){
			this.startFight(Enemy); // uruchamia walkę
		} else {
			this.GameConsole.error(`Niestety nie ma w okolicy, takiego przeciwnika...`);
		}
	}

	// ---- ROZPOCZĘCIE WALKI
	startFight(Enemy, prevOrders) {
		let actualOrders = prevOrders || this.OrderSwitch.actualOrders;
		this.OrderSwitch.change("fight");

		this.asyncFunc(() => { // asynchronicznie prezentuje przebieg walki
			this.GameConsole.present(this.Player.hit(Enemy))
		}, 1500).then(() => {
			this.GameConsole.present(Enemy.hit(this.Player));
			this.GameConsole.updateStats(this.Player);
		}).then(() => {
			setTimeout(() => this.checkFightResult(Enemy, actualOrders), 1500); 
		});
	};

	// ---- SPRAWDZA PRZEBIEG WALKI, URUCHAMIA KOLEJNĄ JEJ ITERACJE LUB KONCZY W PRZYPADKU BRAKU HP KTÓREJŚ ZE STRON
	checkFightResult(Enemy) {
		if (this.Player.actualHP <= 0) { // Przegrana Gracza
			this.Player.lostFight();
			this.GameConsole.updateStats(this.Player);
			this.GameConsole.error(`Niestety przegrałeś walkę, tracisz 20% expa`);
			this.OrderSwitch.change("default");
		} else if (Enemy.actualHP > 0) { // Dalszy ciąg walki
			this.startFight(Enemy);
		} else { // Wygrana Gracza
			const lvlMsg = this.Player.gainExp(Enemy.exp);
			if (lvlMsg) { // Awans na następny LvL
				this.GameConsole.info(lvlMsg);
				this.GameConsole.updateStats(this.Player);
				GameGrow.updateStats(this.Player.lvl);
			}

			this.GameConsole.info(`${Enemy.name} został pokonany!`);
			const dropItemList = this.Player.collectItem(Enemy.itemDrop); // zbiera przedmioty po pokonanym przeciwniku
			this.GameConsole.info("Zdobyłeś: " + dropItemList);
			this.GameMap.deleteEnemy(Enemy); // usuwa pokonanego przeciwnika
			this.OrderSwitch.change("default");
		}
	}

	talkNPC() {}

	// ---- ROZPOCZĘCIE SPECJALNEGO WYDARZENIA PO POLECENIU "sprawdź > wejdź"
	participEvent() {
		const resolve = this.GameMap.currentLocation.eventResolve;
		if(resolve instanceof GameObject){
			this.startFight(resolve);
			this.GameMap.currentLocation.eventResolve = `Już odwiedziłeś tą lokalizacje, jest tu tylko martwy ${resolve}`;
		} else {
			this.GameConsole.present(resolve);
		}
	}

	// ---- WYŚWIETLA EKWIPUNEK ORAZ PLECAK GRACZA
	checkEquipment() {
		this.GameConsole.info(`\nMENU EKWIPUNEK: \n`);
		this.GameConsole.warning("\n--------------------------------------------------");
		this.GameConsole.info(this.Player.showClothes());
		this.GameConsole.warning("==================================================");
		this.GameConsole.info(this.Player.showBag());
		this.GameConsole.warning("--------------------------------------------------");
		this.GameConsole.info("\n");
	}

	// ---- ZAKLADA WYBRANY EKWIPUNEK ZNAJDUJĄCY SIĘ W PLECAKU
	wearItem(order) {
		const itemName = `< ${order.slice(6)} >`; // "nazwa przedmiotu zawsze będzie sie zaczynać od indeksu 6, odcinane jest "załóż""
		const info = this.Player.changeEq(itemName.toLowerCase());
		this.GameConsole.info(info);
		this.GameConsole.updateStats(this.Player);
	}

	// ---- POKAZUJE STATYSTYKI WYBRANEGO EKWIPUNKU
	checkItem(order) {
		const itemName = order.slice(8); // "nazwa przedmiotu zawsze będzie sie zaczynać od indeksu 8, odcinane jest "sprawdź""
		const info = this.Player.clothStats(itemName.toLowerCase());
		this.GameConsole.info(info);
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
			this.GameConsole.info(`Niestety w okolicy, nie ma nic ciekawego...`);
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
						Bądź ostrożny!, w okolicy widziano: ${
								locationInfo.monsterList.map(monster => ` ${monster.name}`)
						}`);
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

	init(order) {
		this.Player.name = order;
		this.presentLocation();
		this.OrderSwitch.change("default");
		this.GameConsole.updateStats(this.Player); 
	}

	start() {
		this.GameConsole.info(Greetings.heading, false);

		this.asyncFunc(() =>
			this.GameConsole.present(Greetings.description)
			).then(() =>
				this.GameConsole.info(`\n\n ABY ROZPOCZĄĆ GRĘ PODAJ SWÓJ NICK`)
			);

		this.OrderSwitch.change("gameStart");
		this.GameConsole.listenPlayer(this.action.bind(this)); 	// Przekazuje konsoli funkcje, która ma być wywoływana przy każdym wcisnięciu "Enter"
	}
}


const TextGame = new Game();
TextGame.start();