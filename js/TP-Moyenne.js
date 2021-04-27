// Differentes variables qu'on va utiliser dans le script
let tab = [];
let x = document.getElementById("add").value;
let btn = document.getElementById("calc");
let btn2 = document.getElementById("add");
let input = document.getElementById("input");
let reset = document.getElementById("reset");

// Taper entrée pour stockage
input.addEventListener("keyup", e =>{
    if (e.key === "Enter"){
        btn2.click();
    }
});

// focus par defaut
document.getElementById("input").focus();

// On enleve le disabled du boutton
input.addEventListener("input", function() {
  if (tab > 2) {
    btn.disabled = (this.value === '');
    reset.disabled = (this.value === '');
  }
  btn2.disabled = (this.value === '');
});

// addEventListener d'ajouter un nombre au tableau calcul
btn2.addEventListener("click", () => {
  let x = document.getElementById("input").value;
  tab.push(x);
  document.getElementById("p1").innerHTML = tab.join(" + ");
  document.getElementById('input').value = '';
  document.getElementById("input").focus();
  btn2.disabled = true;
});

// addEventListener afin de calculer le tableau
btn.addEventListener("click", () => {
  let somme = 0;
  let diviseur = tab.length;
  for (value of tab) {
    if (isNaN(value)) {
      diviseur--;
    }
    somme += Number.parseInt(value);
  }
  resultat = somme / tab.length;
  document.getElementById("p2").innerHTML = "La moyenne est égale à " + resultat;
  document.getElementById("input").focus();
});

// Bouton "reset" supprime les champs p1/p2, supprimer l'input et vider le tableau
let reset = document.getElementById("reset");
reset.onclick = function() {
  document.getElementById("p1").innerHTML = "";
  document.getElementById("p2").innerHTML = "";
  document.getElementById('input').value = '';
  tab = [];
  document.getElementById("input").focus();
  btn.disabled = true;
  btn2.disabled = true;
  reset.disabled = true;
};