
const ListOfEnemies = [
    {
		name: "Szczur",
		lvl: 1,
		exp: 10,
		hp: 40,
		mana: null,
		attack: 5,
		defence: 1
    },
    {
		name: "Pies",
		lvl: 1,
		exp: 12,
		hp: 50,
		mana: null,
		attack: 7,
		defence: 2
    },
    {
		name: "Niedźwiedź",
		lvl: 1,
		exp: 23,
		hp: 60,
		mana: null,
		attack: 10,
		defence: 4
    },
    {
		name: "Smok",
		lvl: 1,
		exp: 40,
		hp: 80,
		mana: null,
		attack: 15,
		defence: 5
    },
    {
		name: "Teściowa",
		lvl: 1,
		exp: 50,
		hp: 90,
		mana: null,
		attack: 17,
		defence: 8
    },
    {
		name: "Teściowa z wałkiem",
		lvl: 1,
		exp: 56,
		hp: 100,
		mana: null,
		attack: 20,
		defence: 10
	}
];

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