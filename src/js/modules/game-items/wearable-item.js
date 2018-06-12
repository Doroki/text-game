class Item {
    constructor(type, object) {
        this.name = `< ${object.name} >`,
        this.type = type,
        this.hp = object.hp,
        this.mana = object.mana,
        this.attack = object.attack,
        this.defence = object.defence
    }

    showStats() {
        return `
--------------------------
${this.name}
  (-- ${this.type} --)
  + ${this.hp} HP
  + ${this.mana} MP
  + ${this.attack} Ataku
  + ${this.defence} Obrony
--------------------------\n
`;
    }
}


class Armor extends Item {
    constructor(object) {
        super("Zbroja", object)
    }
}

class Shoes extends Item {
    constructor(object) {
        super("Buty", object)
    }
}

class Weapon extends Item {
    constructor(object) {
        super("Broń", object)
    }
}

export {Armor, Shoes, Weapon};