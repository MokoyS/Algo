// EXERCICE 3
let = Jason = [100]
let names = ['Maxime', 'Mateo', 'Mathilde', 'Charles', 'Maxence', 'Damien', 'Romain'];


let survivors = [
    { name: 'Nerd', ProbaDeath: 0.4, ProbaDegat: 0.5, ProbaDeathDegat: 0.3 },
    { name: 'Sportif', ProbaDeath: 0.3, ProbaDegat: 0.6, ProbaDeathDegat: 0.1 },
    { name: 'Blonde', ProbaDeath: 0.2, ProbaDegat: 0.7, ProbaDeathDegat: 0.2 },
];

function getRandomSurvivor() {

    
    
    for (let index = 0; index < 5; index++) {

        let randomName = names[Math.floor(Math.random() * names.length)];
        console.log(randomName);
        let randomCharacteristic = survivors[Math.floor(Math.random() * survivors.length)];
        console.log(randomName);

        return {
            name: randomName,
            ProbaDeath: randomCharacteristic.ProbaDeath,
            ProbaDegat: randomCharacteristic.ProbaDegat,
            ProbaDeathDegat: randomCharacteristic.ProbaDeathDegat,
            Vivant: true,
        };
    }

    
  }

