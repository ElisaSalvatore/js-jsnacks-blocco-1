// Stampa il cubo di ciascuno dei primi N numeri, dove N è un numero indicato dall’utente. 
// (se inserisce 10,  si stampa il cubo di 1, di 2, di 3,…)

const userNumber = parseInt(prompt('Inserisci un numero:'));
let cubeNumber = 0;

for (i = 0; i <= userNumber; i++) {
    cubeNumber = Math.pow(i, 3);
}
console.log('Numero utente al cubo =', cubeNumber);