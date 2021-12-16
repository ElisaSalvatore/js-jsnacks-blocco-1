// Stampa il cubo di ciascuno dei primi N numeri, dove N è un numero indicato dall’utente. 
// (se inserisce 10,  si stampa il cubo di 1, di 2, di 3,…)

const userNumber = parseInt(prompt('Inserisci un numero:'));

for (let i = 1; i <= userNumber; i++) {
    console.log(Math.pow(i, 3));
}
