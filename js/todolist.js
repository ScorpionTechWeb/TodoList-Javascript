// Créer un bouton "fermer" et l'ajouter à chaque élément de la liste
let list = document.getElementsByTagName("LI");
let i;
for (i = 0; i < list.length; i++) {
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    list[i].appendChild(span);
}

// Cliquez sur un bouton de fermeture pour masquer l'élément de liste actuel
let close = document.getElementsByClassName("close");
let t;
for (t = 0; t < close.length; t++) {
  close[t].onclick = function() {
    let div = this.parentElement;
    div.style.display = "none";
    document.getElementById("warning").hidden = false;
    setTimeout(function(){ document.getElementById("warning").hidden = true; }, 1500);
  }
}


// Ajout d'un symbole "checkbox" en cliquant sur un élément de la liste
let ul = document.querySelector('ul');
ul.addEventListener('click', function(el) {
    if (el.target.tagName === 'LI') {
        el.target.classList.toggle('checked');
    }
}, false);

// Créer un nouvel élément de "li" en cliquant sur le bouton "Ajouter"
let btn = document.getElementById("add");
btn.addEventListener("click", function() {
    let li = document.createElement("li");
    let input = document.getElementById("input").value;
    let t = document.createTextNode(input);
    li.appendChild(t);
    if (input === '') {
        // alert("Oups, vous n'avez marqué aucun tâche!");
        document.getElementById("success").hidden = true;
        document.getElementById("alert").hidden = false;
        setTimeout(function(){ document.getElementById("alert").hidden = true; }, 1500);
    } else {
        document.getElementById("todolist").appendChild(li);
        document.getElementById("alert").hidden = true;
        document.getElementById("success").hidden = false;
        setTimeout(function(){ document.getElementById("success").hidden = true; }, 1500);
    }
    document.getElementById("input").value = "";

    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            let div = this.parentElement;
            div.style.display = "none";
        }
    }
});

// Taper entrée pour stockage
let btn2 = document.getElementById("add");
let input = document.getElementById("input");
input.addEventListener("keyup", e =>{
    if (e.key === "Enter"){
        btn2.click();
    }
});

// Supprimer checkbox selectionné
let resetbtn = document.getElementById("delete");
resetbtn.addEventListener("click", e => {
    const checkboxes = document.querySelectorAll('.checked');
    checkboxes.forEach(function(checkbox) {
        checkbox.closest('li').remove();
        document.getElementById("warning").hidden = false;
        setTimeout(function(){ document.getElementById("warning").hidden = true; }, 1500);
    })
});

// vérifications supplementaires
// Obtenez tous les éléments avec class = "closebtn"
let closealert = document.getElementsByClassName("closebtn");
let o;

// Boucle à travers tous les boutons de fermeture
for (o = 0; o < closealert.length; o++) {
  // Quand quelqu'un clique sur un bouton de fermeture
  closealert[o].onclick = function(){

    // Récupère le parent de <span class = "closebtn"> (<div class = "alert">)
    let div = this.parentElement;

    // Définit l'opacité de div sur 0 (transparent)
    div.style.opacity = "0";

    // Cachez le div après 600 ms (le même nombre de millisecondes qu'il faut pour disparaître)
    setTimeout(function(){ div.style.display = "none"; }, 600);
  }
}

// Button supprimer toutes les tâches d'un coup
let deleteall = document.getElementById("deleteall");
deleteall.addEventListener("click", e => {
    let myList = document.getElementById('todolist');
    myList.innerHTML = '';
});