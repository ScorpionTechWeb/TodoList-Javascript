let title = document.querySelector("h1");

console.log(title.attributes);

for (let attr of title.attributes) {
	console.log("name : " + attr.name);
	console.log("value : " + attr.value);
}

console.log(title.getAttribute("class"));

title.setAttribute("class", "red");
console.log(title.getAttribute("class"));

title.setAttribute("title", "Je suis un titre survolé");

title.removeAttribute("id");

let b = document.querySelector("body");

let p = document.createElement("p");
p.textContent = "Un premier paragraphe";
b.prepend(p);

let p2 = document.createElement("p");
p2.textContent = "Un dernier paragraphe";
b.append(p2);


let p3 = document.createElement("p");
p3.textContent = "Un autre paragraphe";
let title = document.querySelector("h1");
b.insertBefore(p3, title);

let maListe = document.querySelector("ul");
console.log(maListe.children);

console.log(maListe.parentElement);

console.log(maListe.firstElementChild);
console.log(maListe.lastElementChild);

console.log(maListe.previousElementSibling);
let monP = maListe.nextElementSibling;
console.log(monP);
console.log(monP.nodeName);
console.log(monP.nextElementSibling);

monP.textContent = "Le nouveau texte du paragraphe";

let elt = document.querySelector("#last");
console.log(elt); // Objet de type Node
console.log(elt.textContent);
console.log(elt.innerHTML);

elt = document.querySelector(".pGreen");
console.log(elt);

let elts = document.querySelectorAll(".pGreen");
console.log(elts);
for (let p of elts) {
	p.style.color = "green";
}

elts = document.querySelectorAll("p");
console.log(elts);
for (let p of elts) {
	p.style.backgroundColor = "red";
}