/*// TP - Afficher dans la console le résultat d'un jet de dé (compris entre 1 et 6)

console.log(1+Math.floor(Math.random() * 6));

// Méthodes Objet Math

let i = 1.1;
let j = 1.9;
let k = -1.1;
let l = -1.9;
let m = 1.5;
let n = -1.5;

console.log("FLOOR");
console.log(Math.floor(i));
console.log(Math.floor(j));
console.log(Math.floor(k));
console.log(Math.floor(l));
console.log(Math.floor(m));
console.log(Math.floor(n));

console.log("CEIL");
console.log(Math.ceil(i));
console.log(Math.ceil(j));
console.log(Math.ceil(k));
console.log(Math.ceil(l));
console.log(Math.ceil(m));
console.log(Math.ceil(n));

console.log("ROUND");
console.log(Math.round(i));
console.log(Math.round(j));
console.log(Math.round(k));
console.log(Math.round(l));
console.log(Math.round(m));
console.log(Math.round(n));

console.log("TRUNC");
console.log(Math.trunc(i));
console.log(Math.trunc(j));
console.log(Math.trunc(k));
console.log(Math.trunc(l));
console.log(Math.trunc(m));
console.log(Math.trunc(n));

let rdm = Math.random();
// compris entre 0 (compris) et 1 (non compris)
console.log(rdm);
// compris entre 0 (compris) et 100 (non compris)
console.log(rdm * 100);
// compris entre 0 (compris) et 100 (compris)
console.log(Math.ceil(rdm * 100));


// L'objet Number

let x = 0;
let y = 3.14;
let z;

console.log(Number.isInteger(x));
console.log(Number.isInteger(y));

console.log(Number.isNaN(x + z));
console.log("Est-ce que y est un nombre ? " + Number.isNaN(x+z));

let chn1 = "3.14";
console.log(chn1);
console.log(Number.parseFloat(chn1));
let chn2 = "Quentin";
console.log(Number.parseFloat(chn2));

z = 1234.56789;
console.log(z.toFixed(0));
console.log(z.toFixed(1));
console.log(z.toFixed(2));
console.log(z.toFixed(3));

let n = 255;
console.log(n.toString(16));
console.log(n.toString(2));
console.log(n.toString());



// L'objet String
let prenom = "Victor";

if (prenom.includes("Vic")){
    console.log("La variable prenom contient la lettre 'Vic'.");
}
if (prenom.includes("vic")){
    console.log("La variable prenom contient la lettre 'vic'.");
}

console.log(prenom.startsWith("Vic"));
console.log(prenom.startsWith("vic"));

console.log(prenom.endsWith("r"));
console.log(prenom.endsWith("R"));

let bonjour = "Bonjour Victor !";
console.log(bonjour.substring(8,15));

console.log(bonjour.indexOf("V"));
console.log(bonjour.indexOf("c"));
console.log(bonjour.indexOf("Z"));
console.log(bonjour.lastIndexOf("V"));
console.log(bonjour.lastIndexOf("c"));
console.log(bonjour.lastIndexOf("Z"));

console.log(bonjour.slice(8,15));
console.log(bonjour.slice(8));
console.log(bonjour.slice(-9,-12));

console.log(bonjour.toLowerCase());
console.log(bonjour.toUpperCase());

bonjour = " Bonjour Quentin !  ";
console.log(bonjour);
console.log(bonjour.trim());




// Valeurs primitives ou constructeurs d'objet 
let prenom1 = "Victor";
let prenom2 = new String("Victor");

console.log(prenom1);
console.log(prenom2);

console.log(prenom1.length);
console.log(prenom2.length);


// Objets littéraux
function person (f, l, a, m){
    this.firstname = f;
    this.lastname = l;
    this.age = a;
    this.major = a < 18 ? false : true;
    this.bonjour = function() {
        console.log("Bonjour " + this.firstname + ", tu as " + this.age + " ans");
    }
}

let victor = new person("Victor", "Dias", 30);
let jessica = new person("Jessica", "Dias", 17);

console.log(victor);
console.log(jessica);

victor.bonjour();
jessica.bonjour();

let person = {
    firstname: "Victor",
    lastname: "Dias",
    age: 30,
    major: true,
    bonjour: function () {
        console.log("Bonjour " + this.firstname + ", tu as " + this.age + " ans");
    }
};




console.log(person);
console.log(person.firstname);
person.bonjour();

console.log(person.age);
person.age++; // Equivalence : person.age = person.age + 1;
console.log(person.age);

person.eyes = "Blue";
console.log(person);

console.log(person["lastname"]);

let chn = "lastname";
console.log(person[chn]);
*/