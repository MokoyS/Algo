// EXERCICE 3
const names = ['Maxime', 'Mateo', 'Mathilde', 'Charles', 'Maxence', 'Damien', 'Romain'];

const jason = {
    name: 'Jason',
    Vivant: true,
    health: 100,
  };

const survivors = [
    { name: 'Nerd', ProbaDeath: 0.4, ProbaDegat: 0.5, ProbaDeathDegat: 0.3 },
    { name: 'Sportif', ProbaDeath: 0.3, ProbaDegat: 0.6, ProbaDeathDegat: 0.1 },
    { name: 'Blonde', ProbaDeath: 0.2, ProbaDegat: 0.7, ProbaDeathDegat: 0.2 },
];

function getRandomSurvivor() {

    let randomName = names[Math.floor(Math.random() * names.length)];
    let randomCharacteristic = survivors[Math.floor(Math.random() * survivors.length)];

    return {
        name: randomName,
        ProbaDeath: randomCharacteristic.ProbaDeath,
        ProbaDegat: randomCharacteristic.ProbaDegat,
        ProbaDeathDegat: randomCharacteristic.ProbaDeathDegat,
        Vivant: true,
    };


    
}

const survivorsList = [];
for (let i = 0; i < 5; i++) {
  survivorsList.push(getRandomSurvivor());
}

console.log(survivorsList)
    



