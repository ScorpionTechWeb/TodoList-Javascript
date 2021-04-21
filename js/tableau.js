/*console.log(tab);
console.log(tab[3]);
console.log(tab[4]);

let otherTab = tab[4];
console.log(otherTab[1]);
console.log(tab[3][1]);

console.log(tab.length);

console.log(tab.includes(2));
console.log(tab.includes("Pierre"));


// Variable tab 
let tab = [0, 5, 2, "Quentin", [5, "Pierre"], true];

// Mise en production pour afficher
for (let i = 0; i < tab.length; i++){
    if (Array.isArray(tab[i])){
        for (let g = 0; g < tab[i].length; g++){
            console.log(tab[i][g]);
        }
    }
    else {
        console.log(tab[i]);
    }
}

// For .. of
for (let value of tab) {
    console.log(value);
}

for (let value of tab) {
    if(!Array.isArray(value)) {
        console.log(value);
    } else {
        for (let value2 of value) {
            console.log(value2);
        }
    }
}*/

let prenoms = ["Quentin", "Pierre", "Louise"];

console.log(prenoms);
let newLength = prenoms.push("Margaux");
console.log(prenoms);
console.log(newLength);

let prenomDeleted = prenoms.pop();
console.log(prenomDeleted);
console.log(prenoms);
prenoms.pop();
console.log(prenoms);

prenoms.unshift("Louise");
console.log(prenoms);
prenoms.unshift("Margaux");
console.log(prenoms);

prenoms.shift();
console.log(prenoms);
prenoms.shift();
console.log(prenoms);

// Premier paramètre : position de départ de la modification
// Deuxième paramètre : nombre d'élément à supprimer
// A partir du troisième paramètre (facultatif) : les valeurs à ajouter au tableau
let prenomsDeleted = prenoms.splice(1, 0, "Margaux", "Louise");
console.log(prenoms);
console.log(prenomsDeleted);

prenomsDeleted = prenoms.splice(2, 2);
console.log(prenoms);
console.log(prenomsDeleted);

prenomsDeleted = prenoms.splice(0, 1, "Louise", "Pierre");
console.log(prenoms);
console.log(prenomsDeleted);

console.log(prenoms.join(" ~ "));

console.log(prenoms.slice(0, 2));
console.log(prenoms.slice(1));

console.log(prenoms);
console.log(prenoms.includes("Pierre"));
console.log(prenoms.includes("Truc"));

console.log(prenoms.indexOf("Pierre"));
console.log(prenoms.indexOf("Truc"));