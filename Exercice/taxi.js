// EXERCICE 2
let radio = ['Anissa - Wejdene','Guérison - So La Lune','WISH I WAS SPECIAL - Rouanhaa','Feu de bois - Damso', 'Calavie - Wallace Cleaver'  ]

class personnage {
    constructor(name, sm) {
        this.name = name
        this.sm = sm
    }
}

let Maxime = new personnage('Maxime', 10)
console.log(Maxime.sm)

for (let index = 0; index < 30; index++ ) {

    let rand = Math.floor(Math.random()*radio.length);
    let valeur = radio[rand];

    if (valeur == 'Anissa - Wejdene'){
        console.log(valeur)
        Maxime.sm = Maxime.sm - 1
        console.log(Maxime.sm)
    }else {
        console.log(valeur)
    }

    if (Maxime.sm <= 0) {
        console.log('explosion !!')
        break
    }
}

if (Maxime.sm > 0) {
    console.log(Maxime.name = 'est arrivé à destination :)')
}







