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
		this.backpack = []
	}
	
	lvlUp() {
		
	}
	
	changeEq() {
		
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
		this.backpack.map(item => bag += ` ${item.name} \n`);
		return bag += "\n";
	}

	clothStats(name) {
		if(name = "Armor") {
			return this.equipment[0].showStats();
		} else if(name = "Shoes") {
			return this.equipment[1].showStats();
		} else if(name = "Weapon") {
			return this.equipment[2].showStats();
		}
	}
}

export { Enemy, Npc, Player };