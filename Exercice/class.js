// EXERCICE 1

class Pokemon {
    constructor (name, attack, defense, hp, luck) {
        this.name = name
        this.attack = attack
        this.defense = defense
        this.hp = hp
        this.luck = luck
    }

    getSTATSpokemon() {
        console.log('Stats de' + this.name + '-' + 'Attack:' + this.attack + ', Defense:' + this.defense + ', Hp:'+ this.hp + ', Luck:' + this.luck);
    }

    isLucky (){
        Math.random() 
    }

    attackPokemon () {

    }
}

// let Dracaufeu = new Dracaufeu ("Dracaufeu",84, 78, 78, 0.5);
// let Bulbizarre = new Bulbizarre ("Bulbizarre",49, 49,   45, 0.7);

console.log('nombre random :' + isLucky())
