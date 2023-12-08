let min = window.prompt ("Donnez-moi un nombre minimum");
let max = window.prompt ("Donnez-moi un nombre maximum");
let current = window.prompt ("Donnez-moi un nombre");

if ((current > min) && (current < max)) {
    console.log(current + " est entre" + min + " et" + " " + max);
}

else if (min > max) {
    console.log("Tu ne comprends rien à l'exercice !!");
}