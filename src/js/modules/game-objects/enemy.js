import GameObject from './game-object.js'
import {Food, ElixirHP, ElixirMP} from '../game-items/consumable-items.js';
import {Armor, Shoes, Weapon} from '../game-items/wearable-item.js';
import ItemCollector from '../game-items/items-collector.js';

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
						itemArary.push(new Shoes(ItemCollector.getArmor()));
						break;
					case 2:
						itemArary.push(new Weapon(ItemCollector.getArmor()));
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

export default Enemy;