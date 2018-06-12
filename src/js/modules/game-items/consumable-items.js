class ConsumableItem {
    constructor(name, hp = null, mana = null) {
        this.name = `[${name}]`, 
        this.hp = hp,
        this.mana = mana
    }

    showStats() {
        return `
            --------------------------
            ${this.name} 
              ${(this.hp != null) ? this.hp +" Odnowienia HP": this.mana +" Odnowienia MANA"}
            --------------------------
        `;
    }
}


class ElixirHP extends ConsumableItem {
    constructor() {
        super("Eliksir HP", 100)
    }
}

class ElixirMP extends ConsumableItem {
    constructor() {
        super("Eliksir MANA", null, 100)
    }
}

class Food extends ConsumableItem {
    constructor() {
        super("Jedzenie", 20)
    }
}

export {ElixirHP, ElixirMP, Food}