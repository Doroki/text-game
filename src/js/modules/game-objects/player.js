import GameObject from './game-object.js';
import {Food, ElixirHP, ElixirMP} from '../game-items/consumable-items.js';
import {Armor, Shoes, Weapon} from '../game-items/wearable-item.js';
import ExpSchema from '../../config-files/exp-schema.js';
import ItemCollector from '../game-items/items-collector.js';

class Player extends GameObject {
	constructor(configObj) {
		super(configObj)
		
		this.actualHP = this.hp,
		this.actualMP = this.mana,
		this.equipment = [],
		this.backpack = [],

		this.putOnEq([new Armor(ItemCollector.armors[0]), new Shoes(ItemCollector.boots[0]), new Weapon(ItemCollector.weapons[0])]);
		this.collectItem([new Armor(ItemCollector.armors[2]), new ElixirHP(), new ElixirHP(), new Food(), new ElixirMP()]);
	}


	hit(GameObjectToAttack) {
		const defaultReturn = super.hit(GameObjectToAttack)
		const dealtDamage = defaultReturn.match(/\d+/g);

		return `Atakując, zadałeś ${dealtDamage} obrażen`;	
	}

	lostFight() {
		this.actualHP = this.hp;
		this.actualMP = this.mana;
		const expToLoose = Math.round(this.exp / 10);
		this.exp = (this.exp > expToLoose) ? expToLoose : 0;
	}
	
	gainExp(expValue) {
		console.log(this.exp)
		this.exp += expValue;
		console.log(this.exp)
		const lvlPlan = ExpSchema.filter(plan => plan.lvl === this.lvl + 1);
		if(this.exp >= lvlPlan[0].exp) {
			this.lvlUp();
			return `GRATULACJE!!! Awansowałeś na ${this.lvl} lvl`;
		} else {
			return false;
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

	useItem(itemName) {
		const itemToUse = this.backpack.filter(item => item.name.toLowerCase() === itemName);
		
		if(itemToUse.length > 0) {
			if(itemToUse[0].hp) {
				const hpHealed = this.actualHP + itemToUse[0].hp; 
				this.actualHP = (hpHealed < this.hp) ? hpHealed : this.hp;
			}

			if(itemToUse[0].mana) {
				const mpHealed = this.actualMP + itemToUse[0].mana; 
				this.actualMP = (mpHealed < this.hp) ? mpHealed : this.mana;
			}

			this.deleteFromBag(itemToUse[0]);

			return `Użyłeś ${itemToUse[0].name}`;
		} else {
			return `Nie znaleziono takiego przedmiotu w plecaku...`;
		}
	}


	deleteFromBag(item) {
		let indexInBag = this.backpack.findIndex(bagItem => bagItem.name === item.name);

		if(indexInBag >= 0) {
			this.backpack.splice(indexInBag, 1);
		}
	}


	putOnEq(itemsArr) {
		if(this.equipment.length >= 3) return;

		itemsArr.forEach( itemToPutOn => {
			this.equipment.push(itemToPutOn);
			this.deleteFromBag(itemToPutOn);
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
		const itemToPutOn = this.backpack.filter(item => item.name.toLowerCase() === itemName);
		
		if(itemToPutOn.length > 0) {
			const typeToChange = itemToPutOn[0].type;
			const itemToChange = this.equipment.filter(item => item.type === typeToChange);

			this.takeOffEq(itemToChange);
			this.putOnEq(itemToPutOn);

			return `zamieniłeś ${itemToChange[0].name} na ${itemToPutOn[0].name}`;
		} else {
			return `Nie znaleziono takiego przedmiotu w plecaku...`;
		}
	}

	collectItem(arrOfItems) {
		if(arrOfItems.length > 0) {
			let dropItemList = "";

			arrOfItems.forEach(item => {
				this.backpack.push(item);

				if(dropItemList.indexOf(item.name) > 0) return; // sprawdza czy nazwa przedmiotu już się pojawiła na liście
				let itemsCount = arrOfItems.filter(i => i.name === item.name).length;
				dropItemList += (itemsCount > 1) ? ` ${item.name}x${itemsCount} ` : ` ${item.name} `;
			})
			
			return dropItemList;
		} else {
			return "Niestety przeciwnik nie miał nic przy sobie...";
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
		const foundInEq = this.equipment.filter(item => item.name.toLowerCase() === `< ${itemName} >`);
		const foundInBag = this.backpack.filter(item => item.name.toLowerCase() === `< ${itemName} >`);
		const foundConsumable = this.backpack.filter(item => item.name.toLowerCase() === `[${itemName}]`);

		if(foundInEq.length > 0) {
			return foundInEq[0].showStats();
		} else if(foundInBag.length > 0){
			return foundInBag[0].showStats();
		} else if(foundConsumable.length > 0){
			return foundConsumable[0].showStats();
		} else {
			return `Nie znaleziono takiego przedmiotu...`;
		}
	}
}

export default Player;