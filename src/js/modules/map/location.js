import Enemy from '../game-objects/enemy.js';
import EnemyCollector from '../game-objects/enemy-collector.js';

class Location {
	constructor(scenaryObj) {
		this.description = scenaryObj.description,
		this.event = scenaryObj.event.introduce || null,
		this.orders = this.collectOrders(scenaryObj.event.options),
		this.orderAnswer = this.collectAnswers(scenaryObj.event.options),
		this.listOfOrders = this.textOrderList(scenaryObj.event.options),
		this.monsterList
	}
	
	collectOrders(objArr){
		if(!objArr) return null;
		
		const orders = objArr.map(obj => {
			return obj.action;
		});
		return orders;
	}
	
	collectAnswers(objArr){
		if(!objArr) return null;
		
		const orders = objArr.map(obj => {
			return obj.answer;
		});
		return orders;
	}
	
	textOrderList(objArr){
		if(!objArr) return null;
		
		const orders = objArr.map(obj => {
			return ` [ ${obj.action} ] `;
		});
		return orders;
	}
	
	spawnMonsters() {
		const listOfEnemy = [];
		const numberOfEnemy = Math.round(Math.random() * 3);
		
		for(let i = 1; i < numberOfEnemy; i++){
			listOfEnemy.push(new Enemy(EnemyCollector.getEnemy()));
		}
		
		this.monsterList = listOfEnemy;
	}
}

export default Location;