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
        let rand = Math.random() 

        if (this.luck >= rand) {
            return true

        }else {
            return false
        }
    }

    attackPokemon (cible) {
        let degat = this.attack - cible.attack
        cible.hp = cible.hp - degat

    }
}

let Dracaufeu = new Pokemon ("Dracaufeu",84, 78, 78, 0.5);
let Bulbizarre = new Pokemon ("Bulbizarre",49, 49, 45, 0.7);


while (Dracaufeu.hp > 0 && Bulbizarre.hp > 0) {
    
    if (Dracaufeu.isLucky()) {
        Dracaufeu.attackPokemon(Bulbizarre)
        console.log('Bulbizarre à subit ' + Dracaufeu.attack + ' et il reste ' + Bulbizarre.hp + ' à Bulbizarre')
    }else {
        console.log("Dracaufeu a raté son coup")
    }
    
    
    if (Bulbizarre.isLucky()) {
        Bulbizarre.attackPokemon(Dracaufeu)
        console.log('Dracaufeu à subit ' + Bulbizarre.attack + ' et il reste ' + Dracaufeu.hp + ' à Dracaufeu')

    }else {
        console.log("Bulbizarre a raté son coup")

    }

}