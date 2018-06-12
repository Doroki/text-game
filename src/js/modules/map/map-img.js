class MapImg {
    constructor(mapGrid) {
        this.mapGrid = mapGrid,
        this.actualPosition = {y: 0, x: 0}
    }
    
    unselectArea() {
        this.mapGrid[this.actualPosition.y][this.actualPosition.x].setAttribute(`style`, ``);
    }
    
    selectArea(y = 0, x = 0) {
        if(this.actualPosition.hasOwnProperty('x'))this.unselectArea();
        let newX = this.actualPosition.x += x;
        let newY = this.actualPosition.y += y;
        
        this.mapGrid[newY][newX].setAttribute(`style`, `
            background-color: rgba(0, 34, 255, 0.47);
            border: 1px solid #00f7e8;
            box-shadow: 0px 0px 5px 2px rgba(0, 247, 232, 0.75);
        `);
    }
    
}


export default MapImg;