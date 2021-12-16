//Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. 
//Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è minore di 50.

//creo un array vuoto 
const emptyArray = [];
//creo una variabile per la somma con valore zero di default
let sumNumbers = 0;

//creo un ciclo Do While: chiedo all'utente un numero, aggiungo il numero all'array vuoto,
// sommo i numeri aggiunti dall'utente nell'array e continuo il ciclo fino a che la somma dei numeri dati adall'utente è minore di 50 (condizione while).
do {
    let userNumbers= parseInt(prompt('Inserisci un numero:'));
    emptyArray.push(userNumbers);
    sumNumbers += emptyArray;

    console.log(userNumbers);
    console.log(emptyArray);
    console.log('È ancora minore di 50');
    
} while (sumNumbers < 50);

console.log(sumNumbers);