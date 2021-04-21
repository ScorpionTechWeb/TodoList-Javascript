// Déclaration des letiables
let tasks = document.getElementById("task");
let new_task = document.getElementById("add");
let clear = document.getElementById("clear");
let html = document.createElement("div");
let todo = document.getElementById("todo");

// Taper entrée pour stockage
todo.addEventListener("keyup", e =>{
    if (e.key === "Enter"){
        new_task.click();
    }
});

// On teste si l'input est vide ou pas
new_task.disabled = true;

todo.addEventListener("input", function(e) {
	if(todo.value.length == 0) {
  	new_task.disabled = true
  } else {
	new_task.disabled = false
  }
});


// Ajout d'une nouvelle tâche au todolist
new_task.addEventListener("click", function () {
	let todo = document.getElementById("todo");
	let input = document.createElement('input');

	input.type = "checkbox";
	input.id += todo.value;
	input.name += todo.value;

	let label = document.createElement('label');
	label.appendChild(document.createTextNode(todo.value));
	label.setAttribute("for",todo.value);
	label.classList.add("label");

	let bouton = document.createElement('button');
	bouton.classList.add("delete");
	bouton.textContent = 'x';

	tasks.appendChild(input);
	tasks.appendChild(label);
	tasks.appendChild(bouton);

	document.getElementById('todo').value = '';
  	document.getElementById("todo").focus();
	
	let current_tasks = document.querySelectorAll('.delete');
	  for (var i = 0; i < current_tasks.length; i++) {
		current_tasks[i].onclick = function() {
		  this.parentElement.remove();
		}
	  }
	
});

// Supression des tâches séléctionnées
clear.addEventListener("click", function () {
	for (i = 0; i < tasks.children.length; i++) {
		if (tasks.children[i].checked === true) {
			tasks.children[i].nextSibling.remove();
			tasks.children[i].remove();
		}
	}
});