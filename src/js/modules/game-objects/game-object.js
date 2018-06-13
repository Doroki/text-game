import {Food, ElixirHP, ElixirMP} from '../game-items/consumable-items.js';
import {Armor, Shoes, Weapon} from '../game-items/wearable-item.js';
import ItemCollector from '../game-items/items-config.js';

class GameObject {
	constructor(configObj) {
		this.name = configObj.name,
		this.lvl = configObj.lvl,
		this.exp = configObj.exp,
		this.hp = configObj.hp,
		this.mana = configObj.mana,
		this.attack = configObj.attack,
		this.defence = configObj.defence
	}
	
	attack() {
		
	}
}

class Enemy extends GameObject {
	constructor(configObj) {
		super(configObj)
		
		this.itemDrop = this.collectItemDrop();
	}

	collectItemDrop() {
		let itemArary = [];

		for(let i=0; i<3; i++){
			if(Math.round(Math.random()*9) > 8) { //10% szansy aby otrzymać ubieralny przedmiot w kazdej iteracji
				switch(Math.round(Math.random()*2)){
					case 0:
						itemArary.push(new Armor(ItemCollector.getArmor()));
						break;
					case 1:
						itemArary.push(new Armor(ItemCollector.getArmor()));
						break;
					case 2:
						itemArary.push(new Armor(ItemCollector.getArmor()));
						break;
				}
			}

			if(Math.round(Math.random()*9) > 6) { //30% szansy aby otrzymać eliksir w kazdej iteracji
				itemArary.push(
					(Math.round(Math.random())) ? new ElixirHP() : new ElixirMP()
				);
			}

			if(Math.round(Math.random()*9) > 4) { //50% szansy aby otrzymać jedzenie w każdej iteracji
				itemArary.push(new Food());
			}
		}

		return itemArary;
	}
}

class Npc extends GameObject {
	constructor(configObj) {
		super(configObj)
		
	}
}


class Player extends GameObject {
	constructor(configObj) {
		super(configObj)
		
		this.equipment = [],
		this.backpack = [],

		this.putOnEq([new Armor(ItemCollector.armors[0]), new Shoes(ItemCollector.boots[0]), new Weapon(ItemCollector.weapons[0])]);
		this.collectItem([new Armor(ItemCollector.armors[2]), new ElixirHP(), new ElixirHP(), new Food()]);
	}

	gainExp(valueValue) {
		this.exp += expValue;

		const lvlPlan = this.ExpSchema.filter(plan => plan.lvl === this.lvl + 1);
		if(lvlPlan[0].exp >= this.exp) {
			this.lvlUp();
		}
	}
	
	lvlUp() {
		this.lvl += 1;
		this.updateStats("increase", {hp: 20, mana: 10, attack: 2, defence: 2})
	}

	updateStats(way, itemChanged) {
		if (way === "increase") {
			this.hp += itemChanged.hp;
			this.mana += itemChanged.mana;
			this.attack += itemChanged.attack;
			this.defence += itemChanged.defence;
		} else if (way === "decrease") {
			this.hp -= itemChanged.hp;
			this.mana -= itemChanged.mana;
			this.attack -= itemChanged.attack;
			this.defence -= itemChanged.defence;
		}
	}

	putOnEq(itemsArr) {
		if(this.equipment.length >= 3) return;

		itemsArr.forEach( itemToPutOn => {
			this.equipment.push(itemToPutOn);
			let indexInBag = this.backpack.findIndex(bagItem => bagItem.name === itemToPutOn.name);
			if(indexInBag >= 0) {
				this.backpack.splice(indexInBag, 1);
			}
			this.updateStats("increase", itemToPutOn);
		});

	};

	takeOffEq(itemsArr) {
		if(this.equipment.length <= 0) return;

		itemsArr.forEach( itemToTakeOff => {
			this.backpack.push(itemToTakeOff);
			let indexInEq = this.equipment.findIndex(eqItem => eqItem.name === itemToTakeOff.name);
			if(indexInEq >= 0) {
				this.equipment.splice(indexInEq, 1);
			}
			this.updateStats("decrease", itemToTakeOff);
		});
	}
	
	changeEq(itemName) {
		const itemToPutOn = this.backpack.filter(item => item.name === itemName);
		
		if(itemToPutOn.length > 0) {
			const typeToChange = itemToPutOn[0].type;
			const itemToChange = this.equipment.filter(item => item.type === typeToChange);

			this.takeOffEq(itemToChange);
			this.putOnEq(itemToPutOn);

			return `zamieniłeś ${itemToChange.name} na ${itemName}`;
		} else {
			return `Nie znaleziono takiego przedmiotu w plecaku, upewnij się że poprawnie wpisałeś nazwę`;
		}
	}

	collectItem(arrOfItems) {
		if(arrOfItems.length > 0) {
			arrOfItems.forEach(item => {
				this.backpack.push(item);
			})
		}
	}

	showClothes() {
		let eq = "Masz na sobie: \n\n";
		this.equipment.map(item => eq += ` ${item.type}: ${item.name} \n`);
		return eq += "\n";
	}

	showBag() {
		let bag = "W plecaku masz: \n\n";
		let temporaryBag = "";

		this.backpack.map(item => {
			if(temporaryBag.indexOf(item.name) > 0) return;

			let itemsCount = this.backpack.filter(i => i.name === item.name).length;
			temporaryBag += (itemsCount > 1) ? ` ${item.name}x${itemsCount} ` : ` ${item.name} `;
		});
		return bag += temporaryBag;
	}

	clothStats(itemName) {
		const foundInEq = this.equipment.filter(item => item.name === `< ${itemName} >`);
		const foundInBag = this.backpack.filter(item => item.name === `< ${itemName} >`);
		const foundConsumable = this.backpack.filter(item => item.name === `[${itemName}]`);

		if(foundInEq.length > 0) {
			return foundInEq[0].showStats();
		} else if(foundInBag.length > 0){
			return foundInBag[0].showStats();
		} else if(foundConsumable.length > 0){
			return foundConsumable[0].showStats();
		} else {
			return `Nie znaleziono takiego przedmiotu, upewnij się że poprawnie wpisałeś nazwę`;
		}
	}
}

export { Enemy, Npc, Player };