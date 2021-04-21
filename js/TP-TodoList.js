// Différentes variables
let reset = document.getElementById("clear");
let input = document.getElementById("input");
let btn = document.getElementById("push");
let btn2 = document.getElementById("push");

// focus par defaut
document.getElementById("input").focus();

// On enleve le disabled du boutton
input.addEventListener("input", function() {
    if (document.querySelector('#newtask input').value.length > 0) {
      btn.disabled = (this.value === '');
    }
});

// Chaque fois qu'on clique sur le bouton push, on teste les conditions et on ajoute une task
document.querySelector('#push').onclick = function() {
    if(document.querySelector('#newtask input').value.length == 0){
      alert("Ajouter une tâche a la Todo");
    }
    else{
    
      document.querySelector('#tasks').innerHTML += `
  
         <div class="task">
              <span id="taskname"> ${document.querySelector('#newtask input').value} </span>
              <input type="checkbox" name="${document.querySelector('#newtask input').value}" id="checkbox" value="${document.querySelector('#newtask input').value}">
              <span class="close">×</span>
          </div>
          `;

        }
      let tasks = document.querySelectorAll('.task');
      for (var i = 0; i < tasks.length; i++) {
        tasks[i].onclick = function() {
          this.classList.toggle('completed');
        }
      }
      // Supprimer un todo via le button close
        let close = document.getElementsByClassName("close");
        var i;
            for (i = 0; i < close.length; i++) {
                close[i].onclick = function() {
                var div = this.parentElement;
                div.style.display = "none";
            }
        }

      // Vider l'input
      document.querySelector('#newtask input').value = "";
}