import Console from './modules/console/console.js'; // Klasa konsoli
import { Map } from './modules/map/map.js';
import { scenario } from './modules/scenario/scenario.js'; // Zmienna imitująca plik JSON z danymi, które są używane do przypisania informacji, jak opisy, wydarzenie itp. w każdej z lokalizacji
import {Player} from './modules/game-objects/game-object.js';

class OrderSwitch {
	constructor(parent) {
		this.parent = parent;
		this.actualOrders = this.default,
		this.specialOrders,
		this.specialAnswers;
	}
	
	addOrders(orderPattern) {
		this.specialOrders = orderPattern;
	}
	
	addAnswers(answerPattern) {
		this.specialAnswers = answerPattern;
	}
	
	change(orderSetup) {
		this.actualOrders = this[orderSetup];
	}
	
	fight() {
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
	
	equipment(order) {
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
	
	special(order) {
		switch (order.toLowerCase()) {
           case this.specialOrders[0] || null: 
					this.parent.specialAction(this.specialAnswers[0])
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
	
	default(order) {
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
}



class Game {
    constructor() {
       this.GameConsole = new Console(document.querySelector("#input"), document.querySelector("#output")),
		 this.GameMap = new Map(scenario, document.querySelector("table")),
		 this.OrderSwitch = new OrderSwitch(this),
		 this.Player = new Player("Ziomek", 1, 0, 100, 50, 10, 10)
	 }
	
	asyncFunc(callback){
		return new Promise((resolve) => {
			const timer = callback();
			// timer - do zmiennej przypisywana jest wartosc zwracana, długosc tekstu * timeout, informuje kiedy animacja pisania się zakończy
			setTimeout(() => {resolve(true)}, timer);
		});
	}

    action(order) {
		 	this.OrderSwitch.actualOrders(order);
    }
	
	useItem() {}
	
	talkNPC() {}
	
	checkEquipment() {}
	
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
		
		if(event != null) {
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
			if(locationInfo.monsterList.length) {	
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
		if(this.GameMap.changeLocation(y, x)) {
			this.GameConsole.info(text);
			this.presentLocation()
		} 
		else {
			this.GameConsole.info(`Niestety nie ma tam żadnego przejscia`);
		}
	}

    start() {
		this.presentLocation();
        this.GameConsole.listenPlayer(this.action.bind(this));
		this.GameConsole.info(this.Player.showClothes())
    }
}


const TextGame = new Game();
TextGame.start();

