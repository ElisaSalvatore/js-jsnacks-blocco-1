//Chiedi un numero di 4 cifre all’utente 
//e calcola la somma di tutte le cifre che compongono il numero.

const userNumber = prompt('Inserisci un numero di 4 cifre:');
let sumNumbers = 0;

if (userNumber.length === 4) {
    for (i = 0; i < userNumber.length; i++) {
        sumNumbers += parseInt(userNumber[i]);
    }
    console.log('La somma delle cifre che compongono il numero scelto è:', sumNumbers);
} else {
    console.log('Errore: inserisci un numero di 4 cifre.')
}