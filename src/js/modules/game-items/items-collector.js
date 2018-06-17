import {ArmorConfig, BootsConfig, WeaponConfig} from '../../config-files/items-config.js'


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