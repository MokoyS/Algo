let a = "Jean";

let b = "Paul";

let c = 3;

/* 
if (a == b){
    console.log("c'est egal")
}
if (c < b && a + c != 3){
    console.log("ok")
}else{
    console.log("raté")
}/

/ Autre manière de l'écrire: 
switch(a){

case 3:
    console.log("c'est 3")

break

case 4: 
    console.log("c'est 4")

case "Nico est gentil"
console.log("")

break

deafault:
console.log("y'a R")

}/

/
switch(a){
    case b:
        console.log("egal à b")

        break 

        case c :
            console.log("egal à c")

            break
        default:
            console.log("egal à rien ")



/*Boucle itération exemple
for(let i = 0; i < a ; i++){
console.log(oklm)
}
/

/let i = 0
while(i < 10){
    console.log(i)
    i++
}/

/ Boucle while exemple
while (a < 9) {
  a++;
  if (a == 8) break;
  if (a == 7) continue;
  console.log(a);
}/


/LES FONCTIONS/
/Exemple de fonction
let result = checkNames(a, b)

function checkNames(name1, name2){
    return name1 == name2 
}
console.log(result)
/
/Autre facon de l'ecrire plu simple/
/
let result = (name1, name2)=> {
    return name1 == name2
}
console.log(result(a,b))

/TABLEAUX/
let sports = [
    "foot",
    "basket",
    "tennis"
]
/*
//sports.push("petanque") //>Pour ajouter un element dans un tableau
//sports.splice(2, 1)     //Pour supprimer un elementdu tableau 

console.log(sports.length)/

/Boucle foreach/
/sports.forEach(function(sport){
    console.log(sport)
})/

let names = []
names.push("Vincent", "Paul", "Arthur")
names.forEach((name) =>{
    name += "va à la peche"
console.log(name)
})


/OBJETS*/
let student = {
    name: "Timothée",
    age: "20",
    city: "Boulogne",
}

let count = null


for(let value in student){
    let caracters = student[value].toString().length
    count += caracters
}
 count % 2 == 0 ?console.log(count = "is pair"): console.log(count + "is impair")




class Student {
    constructor (name, html, css, javascript, php) {
        this.html =html 
        this.css =css 
        this.javascript =javascript 
        this.php = php 
        this.name = name 
    }

    getPHPlevel() {
        console.log(this.name + ' a ' + this.php + '/5 en PHP')
    }
} 

let Nicolas = new Student("Nicolas",5, 4, 1, 3)
let Maxime = new Student("Maxime",5, 5, 5, 5)

Maxime.getPHPlevel()