//Faire une fonction qui prend 3 paramètres et qui affiche dans la console 
// la moyenne des 3 nombres. 
// N'oubliez pas de faire au moins 2 appels à cette fonction.
// Les fonctions avec valeur de retour
function moyenne (x, y, z) {
    return (x + y + z) / 3;
}

let result1 = moyenne(5, 10, 15);
let result2 = moyenne(6, 8, 9);
let result3 = moyenne(17, 20, 20);

console.log(result1, result2, result3);

console.log(moyenne(result1, result2, result3));


/*// Les fonctions sans valeur de retour
function addition (x, y, z) {
    console.log("x + y + z = " + x + " + " + y + " + " + z + " = " + (x + y + z));
}

addition(5, 10, 8);

addition(0, 0, 0);

// Boucles

let x = 0;

console.log("WHILE");
while (x < 5) {
    x++;
    console.log("x vaut " + x);
}

console.log("DO WHILE");
do {
    x++;
    console.log("x vaut " + x);
} while (x < 5);

console.log("FOR");
for (let x = 0; x < 5; x++) {
    console.log("x vaut " + x);
}

for (let x = 0; x < 10; x++) {
    if (x === 5) {
        continue;
    }
    console.log("x vaut " + x);
}

// Les opérateurs d'incrémentation et de  décrémentation
let x = 0;
console.log(x);
x++; // x = x + 1; OU x+= 1;
console.log(x);
x++;
console.log(x);
x++;
console.log(x);

x--; // Equivalent à : x = x - 1; OU x -= 1;
console.log(x);
x--;
console.log(x);
x--;
console.log(x);


// Les switchs
let x = -3;

switch (x) {
    case -2:
        console.log("x vaut -2");
        break;
    case -1:
        console.log("x vaut -1");
        break;
    case 0:
        console.log("x vaut 0");
        break;
    case 1:
        console.log("x vaut 1");
        break;
    case 2:
        console.log("x vaut 2");
        break;
    default:
        console.log("x est strictement inférieur à -2 OU strictement supérieur à 2");
}

 Equivalent à :
if (x === -2) {
    console.log("x vaut -2");
} else if (x === -1) {
    console.log("x vaut -1");
} else if (x === 0) {
    console.log("x vaut 0");
} else if (x === 1) {
    console.log("x vaut 1");
} else if (x === 2) {
    console.log("x vaut 2");
} else {
    console.log("x est strictement inférieur à -2 OU strictement supérieur à 2");
}

/* 
//  Les ternaires

let x = 0;
let y = 10;

let z = (x + y) > 0 ? "x + y est positif" : "x + y est négatif";

/* Equivaut à :
// let z;
// if (x + y >= 0){
//     z = "x + y est positif";
// } else {
//     z = "x + y est négatif";
// }
console.log(z);

//////////////////////////////////
let x = 1;
let y = 1;

if ((x > 0 && y > 0) || (x < 0 && y <0)){
    console.log("x ET y sont différentes de 0");
} else {
    console.log("x ET y sont égales à 0");
}



if (x > 0 && y > 0) {
    console.log("CONDITION 1 : x ET y sont positives");
} else {
    console.log("CONDITION 1 : x OU y OU les 2 sont négatives OU égales à 0");
}

if (x < 0 || y < 0){
    console.log("CONDITION 2 : x OU y OU les 2 sont négatives");
} else {
    console.log("CONDITION 2 : x ET y sont positives OU égales à 0");
}

if (!(x > 0)) { // Equivaut : x <= 0;
    console.log("x est négative ou égale à 0");
}
//////////////////////////////////
*////////////////////////////////