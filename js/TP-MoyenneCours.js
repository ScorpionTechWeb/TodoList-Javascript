// Ecrire une fonction "moyenne" qui prend un paramètre de type tableau et qui retourne la moyenne de tous les nombres du tableau.
function moyenne (tab) {
    let somme = 0;
    let diviseur = tab.length;
    for (i = 0; i < tab.length; i++){
        if (isNaN(tab[i])) {
            diviseur --;
        } else {
            somme += Number.parseInt(tab[i]);
        }
    }
    return somme / diviseur;
}

// On initialise la function moyenne via le console.log

console.log(moyenne([5,"2",5, "pierre"]));
console.log(moyenne([5,2,5]));

// moyenne([5,2,5]);
// la moyenne sera 4