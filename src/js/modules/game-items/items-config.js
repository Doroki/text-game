
const ArmorConfig = [
    {
        name: "Bawełniana Koszula",
        hp: 10,
        mana: 0,
        attack: 0,
        defence: 2
    },
    {
        name: "Skurzana Zbroja",
        hp: 20,
        mana: 10,
        attack: 0,
        defence: 12
    },
    {
        name: "Kolczuga",
        hp: 40,
        mana: 15,
        attack: 0,
        defence: 30
    },
    {
        name: "Zbroja",
        hp: 50,
        mana: 30,
        attack: 0,
        defence: 50
    }
]

const BootsConfig = [
    {
        name: "Sandały",
        hp: 10,
        mana: 0,
        attack: 0,
        defence: 2
    },
    {
        name: "Trzewiki",
        hp: 20,
        mana: 10,
        attack: 0,
        defence: 12
    },
    {
        name: "Skórzane buty",
        hp: 40,
        mana: 15,
        attack: 0,
        defence: 30
    },
    {
        name: "Rycerskie buty",
        hp: 50,
        mana: 30,
        attack: 0,
        defence: 50
    }
]

const WeaponConfig = [
    {
        name: "Drewniana pałka",
        hp: 10,
        mana: 0,
        attack: 0,
        defence: 2
    },
    {
        name: "Tasak kuchenny",
        hp: 20,
        mana: 10,
        attack: 0,
        defence: 12
    },
    {
        name: "Sztylet",
        hp: 40,
        mana: 15,
        attack: 0,
        defence: 30
    },
    {
        name: "Długi miecz",
        hp: 50,
        mana: 30,
        attack: 0,
        defence: 50
    }
]

const ItemCollector = {
    armors: ArmorConfig,
    boots: BootsConfig,
    weapons: WeaponConfig,
    
    getArmor() {
        const chanceRate = Math.round(Math.random()*100)

        if(chanceRate > 94) {
            return this.armors[3];
        } else if(chanceRate > 84) {
            return this.armors[2];
        } else if(chanceRate > 64) {
            return this.armors[1];
        } else {
            return this.armors[0];
        }
    },

    getBoots() {
        const chanceRate = Math.round(Math.random()*100)

        if(chanceRate > 94) {
            return this.boots[3];
        } else if(chanceRate > 84) {
            return this.boots[2];
        } else if(chanceRate > 64) {
            return this.boots[1];
        } else {
            return this.boots[0];
        }
    },

    getWeapon() {
        const chanceRate = Math.round(Math.random()*100)

        if(chanceRate > 94) {
            return this.weapons[3];
        } else if(chanceRate > 84) {
            return this.weapons[2];
        } else if(chanceRate > 64) {
            return this.weapons[1];
        } else {
            return this.weapons[0];
        }
    }
}

export default ItemCollector;