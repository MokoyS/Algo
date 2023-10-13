const attaquant = [
    { name: 'Omen', caracteristique : 'smoker'},
    { name: 'Phoenix ', caracteristique: 'flasher'},
    { name: 'Jett', caracteristique: 'killer'},
    { name: 'Fade', caracteristique: 'reveal' },
    { name: 'Chamber', caracteristique: 'reveal' },
];
const defenseur = [
    { name: 'Omen', caracteristique : 'smoker'},
    { name: 'Phoenix ', caracteristique: 'flasher'},
    { name: 'Jett', caracteristique: 'killer'},
    { name: 'Fade', caracteristique: 'reveal' },
    { name: 'Chamber', caracteristique: 'reveal' },
];

let nrbAttaquant = 5
let nrbDefenseur = 5

mancheAttGagne = 0
mancheDefGagne = 0


    function DebutManche() {

        const unVSun = ['Un attaquant à tué un defenseur','Un defenseur à tué un attaquant']
        let resulatCombat = unVSun[Math.floor(Math.random() * unVSun.length)];
        console.log(resulatCombat)

        if (resulatCombat == unVSun [0]) {

            
            let chanceAmorcer = Math.random() <= 0.6;

            if (chanceAmorcer) {
                console.log('Le Spike à été planté')

                let duelDefuse = Math.random() <= 0.7;

                if (duelDefuse) {
                    console.log('Un attaquant à tué un defenseur')
                    nrbDefenseur = nrbDefenseur - 1
                    console.log("Il reste " + nrbDefenseur + " defenseur" )
                }else {
                    console.log('Un defenseur à tué un attaquant')
                    nrbAttaquant = nrbAttaquant - 1
                    console.log("Il reste " + nrbAttaquant + " attaquants" )


                }

            }else {
                console.log("Le spike n'a pas été planté")

                let duelDefuse = Math.random() <= 0.5;

                if (duelDefuse) {
                    console.log('Un attaquant à tué un defenseur')
                    nrbDefenseur = nrbDefenseur - 1
                    console.log("Il reste " + nrbDefenseur + " defenseur" )

                }else {
                    console.log('Un defenseur à tué un attaquant')
                    nrbAttaquant = nrbAttaquant - 1
                    console.log("Il reste " + nrbAttaquant + " attaquants" )


                }

            }

            

        }else {

            let chanceAmorcer = Math.random() <= 0.4;

            if (chanceAmorcer) {
                console.log('Le Spike à été planté')

                let duelDefuse = Math.random() <= 0.7;

                if (duelDefuse) {
                    console.log('Un attaquant à tué un defenseur')
                    nrbDefenseur = nrbDefenseur - 1
                    console.log("Il reste " + nrbDefenseur + " defenseur" )

                }else {
                    console.log('Un defenseur à tué un attaquant')
                    nrbAttaquant = nrbAttaquant - 1
                    console.log("Il reste " + nrbAttaquant + " attaquants" )

                }

            }else {
                console.log("Le spike n'a pas été planté")
                
                let duelDefuse = Math.random() <= 0.5;

                if (duelDefuse) {
                    console.log('Un attaquant à tué un defenseur')
                    nrbDefenseur = nrbDefenseur - 1
                    console.log("Il reste " + nrbDefenseur + " defenseur" )

                }else {
                    console.log('Un defenseur à tué un attaquant')
                    nrbAttaquant = nrbAttaquant - 1
                    console.log("Il reste " + nrbAttaquant + " attaquants" )
                    
                }

            }
        
        }
    }

        
    
        
    
        

for (let index = 0; index < 13; index++) {
    DebutManche()

    while  (nrbAttaquant > 0 && nrbDefenseur > 0) {
        DebutManche();
        console.log("IL Y A " + nrbDefenseur + " defenseur" )
        console.log("IL Y A " + nrbAttaquant + " attaquants" )
    }


    

    if (nrbAttaquant > nrbDefenseur) {
    console.log('Les attaquants ont gagné la manche')
    mancheAttGagne = mancheAttGagne + 1
    }else {
        console.log('Les defenseurs ont gagné la manche')
        mancheDefGagne = mancheDefGagne + 1
    }

    console.log (mancheAttGagne)
    console.log (mancheDefGagne)

    
}




              



        

       

        
        
        









