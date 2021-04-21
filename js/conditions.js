// Les opérateurs de comparaison
// Equivalence
console.log(2 == 2);
console.log(2 === 2);
console.log("2" == 2);
console.log("a2" == 2);
console.log("2" === 2);

// Différence
console.log("Différence");
console.log(2 != 3);
console.log(2 !== 3);
console.log("2" != 2);
console.log("a2" != 2);
console.log("2" !== 3);

let x = 0;
console.log(typeof(x));
let chn = "Quentin";
console.log(typeof(chn));

// Supériteur et inférieur
console.log("Supériteur et inférieur");
let y = 0;
console.log(y < 0);
console.log(y > 0);
console.log(y <= 0);
console.log(y >= 0);

// Condition if 
console.log("Condition if ");
let g = 5;
if (g === 4) {
    console.log("g vaut 4");
}
if (g === 5) {
    console.log("g vaut 5");
}

x = 99.999;
if (x < 100) {
    console.log("x est strictement inférieur à 100");
} else {
    console.log("x est supérieur ou égal à 100");
}

let y = 49;
if (y < 50) {
    console.log("y est strictement inférieur à 50");
} else if (y > 100) {
    console.log("y est strictement supérieur à 100");
} else {
    console.log("y est compris entre 50 et 100 compris");
}