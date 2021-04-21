// Différentes variables
let reset = document.getElementById("delete");
let input = document.getElementById("input");
let btn = document.getElementById("push");
let btn2 = document.getElementById("push");

// focus par defaut
document.getElementById("input").focus();

// On enleve le disabled du boutton
input.addEventListener("input", function () {
	if (document.querySelector('#newtask input').value.length > 0) {
		btn.disabled = (this.value === '');
	}
});

// Chaque fois qu'on clique sur le bouton push, on teste les conditions et on ajoute une task
document.querySelector('#push').onclick = function () {
	if (document.querySelector('#newtask input').value.length == 0) {
		alert("Ajouter une tâche a la TodoList");
	} else {
		document.querySelector('#tasks').innerHTML += `
  
         <div class="task">
              <span id="taskname"> ${document.querySelector('#newtask input').value} </span>
              <input type="checkbox" id="myCheck">
              <span class="close">×</span>
          </div>
          `;
	}

    // On passe les tasks en completed, une fois qu'on clique sur la task
	let tasks = document.querySelectorAll('.task');
	for (var i = 0; i < tasks.length; i++) {
		tasks[i].onclick = function () {
			this.classList.toggle('completed');
		}
	}

	// Supprimer un todo via le button close
	let close = document.getElementsByClassName("close");
	var i;
	for (i = 0; i < close.length; i++) {
		close[i].onclick = function () {
			var div = this.parentElement;
			div.style.display = "none";
		}
	}
	// Vider l'input
	document.querySelector('#newtask input').value = "";

    // Bouton "reset" supprime les champs p1/p2, supprimer l'input et vider le tableau
    reset.onclick = function() {
    let checkBox = document.getElementById("myCheck");
    let task = document.querySelectorAll(".task");
        if (checkBox.checked == true){
            task.classList.add('hidden');
			console.log("Hidden");
        } else {
            task.classList.add('completed');
			console.log("Completed");
        }
    };
}