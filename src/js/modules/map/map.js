import MapImg from './map-img.js'; // Klasa MapImg umożliwia umożliwia działanie mapki z prawej strony konsoli
import {Enemy} from '../game-objects/game-object.js';
import EnemyCollector from '../game-objects/enemy-config.js';

// -------  LOCATION CLASS ---------- //
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



// -------  MAP CLASS ---------- //
class Map {
	constructor(scenario, graficMapContainer) {
		this.MapImage = graficMapContainer,
		this.scenario = scenario, 
		this.topography = new Array(), //Collection of all created Locations Objects;
		this.currentCoords = {y: 0, x: 0},
		this.currentLocation;
			
		this.initMap();
	}
	
	changeLocation(y = 0, x = 0) {
		let newY = this.currentCoords.y + y;
		let newX = this.currentCoords.x + x;
		
		if (newY < 0 || newX < 0) return false;
		else if (newY > this.topography.length-1 || newX > this.topography[newY].length-1) return false; 

		this.currentLocation = this.topography[newY][newX];
		this.currentLocation.spawnMonsters();	
		this.currentCoords.y = newY;
		this.currentCoords.x = newX;
		this.MapImage.selectArea(y, x);
		return true;
	}

	createMapGrid() {
		let grid = document.createDocumentFragment(); // kolejcja elementów tabeli tworzących siatkę
		let arrayOfElements = []; // tablica 2D elementów siatki dla klasy MapImg, po której będzie iterować i nadawać style
		
		this.topography.map((row, index) => {
			let tr = document.createElement("tr");
			arrayOfElements.push([]); 
			
			row.forEach(cell => {
				let td = document.createElement("td");
				tr.appendChild(td);
				arrayOfElements[index].push(td);
			});
			
			grid.appendChild(tr);
		});
        
		this.MapImage.appendChild(grid);
		this.MapImage = new MapImg(arrayOfElements); // Nadpisuje własciwoć MapImage o obiekt klasy MapImg
   }
	
	createMap() {
		let iterator = -1; // iterator mający wspomóc stworzenie tabeli 2D, będzie zwiększany co 6 iteracji,
		// ma na celu wskazanie kiedy stworzyć nową tablicę.
		
		this.scenario.forEach((episode, index)=> {
			if((index % 6) === 0) {
				iterator += 1
				this.topography.push(new Array());
			};
			this.topography[iterator].push(new Location(episode))
		});
	}
	
	initMap() {
		this.createMap();
		this.createMapGrid();
		this.changeLocation();
	}
}

export { Map };
