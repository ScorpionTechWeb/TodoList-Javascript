console.log("Hello world");

//  Commentaire sur une ligne


/* Commentaire
sur plusieurs
lignes */

let maVariable; // Déclaration de variable

let variableInstanciee = "Quentin"; // Déclaration et initialisation une variable
/* Equivalent :
    let variableInstanciee;
    variableInstanciee = "Quentin";
*/

const constanteInstanciee = 3; // Déclaration et initialisation d'une constante

variableInstanciee = "Pierre"; // Modification de variable (impossible pour les constantes)

let maChaine ="Je m'appelle Quentin";
let maChaine2 = 'Mon nom est "Quention"';
let maChaine3 = "30";
let maChaine4 ="Je m'appelle \"Quention\"";

let monNombre = 30;
let monDecimal = 3.14;
let monNegatif = -2;
let monNegatifDecimal = -3.14;

let monBooleen = true;
let monBooleen2 = false;

let maVarUndefined;
console.log(maVarUndefined);

// Les opérateurs arithmétiques

let x = 1 + 1;
console.log(x);

let y = x + 3;
console.log(y);

let z = x + y;
console.log(z);

// Soustraction
x = y - 2;
console.log(x);

// Multiplication
x = y * 2;
console.log(x);

// Division
x = x / 5;
console.log(x);

// Modulo
console.log(7 % 2);

console.log(y % 4);

// Exponentielle (puissance) 
console.log(10**3); // 10 * 10 * 10

// Priorité des calculs
console.log(1 + 3 * 5);
console.log((1 + 3) * 5);

// Les opérateurs d'affectation combinée
let g = 1;
g += 4; // Equivalent : x = x + 4;
console.log(g);

g -= 3;
console.log(g);

g *= 2;
console.log(g);

g /= 10;
console.log(g);

// La concaténation
let prenom = "Quentin";
let age = "30";
console.log("Je m'appelle " + prenom + " et j'ai " + age + " ans");
