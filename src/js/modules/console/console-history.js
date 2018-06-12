class ConsoleHistory {
	constructor(){
		this.history = [],
		this.actualIndex = this.history.length;
	}
	
	add(value) {
		this.history.push(value);
	}
	
	resetIndex() {
		this.actualIndex = this.history.length;
	}
	
	getPrevOrder() {
		if(this.actualIndex <= 0) return false;

		this.actualIndex -= 1;
		return this.history[this.actualIndex];
	}
	
	getNextOrder() {
		if(this.actualIndex + 1 > this.history.length) return false;
		
		this.actualIndex += 1;
		return this.history[this.actualIndex];
	}
}


export default ConsoleHistory;