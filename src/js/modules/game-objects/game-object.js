import GameGrow from '../../config-files/game-grow.js';

class GameObject {
	constructor(configObj) {
		this.name = configObj.name,
		this.lvl = configObj.lvl + GameGrow.lvl,
		this.exp = configObj.exp * GameGrow.statsGrow,
		this.hp = configObj.hp * GameGrow.statsGrow,
		this.mana = configObj.mana * GameGrow.statsGrow,
		this.attack = configObj.attack * GameGrow.statsGrow,
		this.defence = configObj.defence * GameGrow.statsGrow,

		this.actualHP = this.hp,
		this.actualMP = this.mana;
	}
	
	hit(GameObjectToAttack) {
		const attack = this.attack * 2 + this.lvl;
		const attackPower = Math.round(attack - (attack * (1 / ((Math.round(Math.random()*10) + 1)))));
		const dealtDamage = GameObjectToAttack.getHit(attackPower);

		return `${this.name} zaatakował i zadał ci ${dealtDamage} obrażen`;	
	}

	getHit(hitValue) {
		const dmgAmount = hitValue - this.defence;
		const recivedDamage = (dmgAmount < 0)? 0 : dmgAmount;
		this.actualHP -= recivedDamage;

		return recivedDamage;
	}
}



class Npc extends GameObject {
	constructor(configObj) {
		super(configObj)
		
	}
}


export default GameObject;