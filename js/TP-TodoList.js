// Déclaration des variables
var tasks = document.getElementById("tasks")
var new_task = document.getElementById("add")
var clear = document.getElementById("clear")

// Ajout d'une nouvelle tâche au todolist
new_task.addEventListener("click", function () {
	var todo = document.getElementById("todo")

	var input = document.createElement('input')
	input.type = "checkbox"

	var label = document.createElement('label')
	label.appendChild(document.createTextNode(todo.value))

	tasks.appendChild(input)
	tasks.appendChild(label)
})

// Supression des tâches séléctionnées
clear.addEventListener("click", function () {
	for (i = 0; i < tasks.children.length; i++) {
		if (tasks.children[i].checked === true) {
			tasks.children[i].nextSibling.remove();
			tasks.children[i].remove();
		}
	}
})