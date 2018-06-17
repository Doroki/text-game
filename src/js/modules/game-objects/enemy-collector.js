import ListOfEnemies from '../../config-files/enemy-config.js'


const EnemyCollector = {
    enemies: ListOfEnemies,

    getEnemy() {
        const chanceRate = Math.round(Math.random()*100)

        if(chanceRate > 90) {
            return this.enemies[5];
        } else if(chanceRate > 75) {
			return this.
			enemies[4];
        } else if(chanceRate > 60) {
			return this.
			enemies[3];
        } else if(chanceRate > 45){
			return this.
			enemies[2];
        } else if(chanceRate > 30){
			return this.
			enemies[1];
        } else {
			return this.
			enemies[0];
        }
    }
}

export default EnemyCollector;