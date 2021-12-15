//Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. 
//Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è minore di 50.

const emptyArray = [];
let sumNumbers = 0;

do {
    userNumbers= prompt('Inserisci un numero:');
    emptyArray.push(userNumbers);
    sumNumbers += parseInt(emptyArray);

    console.log('È ancora minore di 50');
    
} while (sumNumbers < 50);

console.log(sumNumbers);