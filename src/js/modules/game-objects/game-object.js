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
	constructor(name, lvl, exp, hp, mana, attack, defence) {
		super(name, lvl, exp, hp, mana, attack, defence)
		
	}
}


class Player extends GameObject {
	constructor(name, lvl, exp, hp, mana, attack, defence) {
		super(name, lvl, exp, hp, mana, attack, defence)
		
		this.equipment = [new Armor(ItemCollector.armors[0]), new Shoes(ItemCollector.boots[0]), new Weapon(ItemCollector.weapons[0])],
		this.backpack = [new Armor(ItemCollector.armors[2]), new ElixirHP(), new ElixirHP(), new Food()]
	}
	
	lvlUp() {
		
	}
	
	changeEq(itemName) {
		const foundItem = this.backpack.filter(item => item.name === itemName);
		
		if(foundItem.length > 0) {
			const typeToChange = foundItem[0].type;
			const itemToChange = this.equipment.filter(item => item.type === typeToChange)[0];
			const indexOfItem = this.equipment.indexOf(itemToChange);

			this.equipment[indexOfItem] = foundItem[0];
			this.backpack.splice(this.backpack.indexOf(foundItem[0]))
			this.backpack.push(itemToChange);

			return `zamieniłeś ${itemToChange.name} na ${itemName}`;
		} else {
			return `Nie znaleziono takiego przedmiotu w plecaku, upewnij się że poprawnie wpisałeś nazwę`;
		}
	}

	
	collectItem() {
		
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
			temporaryBag += (itemsCount) ? ` ${item.name} x${itemsCount} ` : ` ${item.name} `;
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