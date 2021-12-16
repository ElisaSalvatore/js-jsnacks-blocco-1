//Chiedi un numero di 4 cifre all’utente 
//e calcola la somma di tutte le cifre che compongono il numero.

//chiedo il numero di 4 cifre all'utente
const userNumber = prompt('Inserisci un numero di 4 cifre:');
//creo una variabile della somma a cui attribuisco un valore di default
let sumNumbers = 0;

if (userNumber.length === 4) {
    //creo un ciclo for in cui dico di sommare tutti gli elementi della stringa 
    // dell'utente che trasformo innumero con il parseInt.
    for (let i = 0; i < userNumber.length; i++) {
        sumNumbers += parseInt(userNumber[i]);

        console.log(userNumber[i]);
    }
    console.log('La somma delle cifre che compongono il numero scelto è:', sumNumbers);
} else {
    console.log('Errore: inserisci un numero di 4 cifre.')
}