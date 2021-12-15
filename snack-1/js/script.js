// Il software deve chiedere per 10 volte all’utente di inserire un numero. 
// Il programma stampa la somma di tutti i numeri inseriti.

// Il software deve chiedere per 10 volte all’utente di inserire un numero. 
// Il programma stampa la somma di tutti i numeri inseriti.

let number1 = parseInt(prompt('Inserisci un numero:'));
let number2 = parseInt(prompt('Inserisci un numero:'));
let number3 = parseInt(prompt('Inserisci un numero:'));
let number4 = parseInt(prompt('Inserisci un numero:'));
let number5 = parseInt(prompt('Inserisci un numero:'));
let number6 = parseInt(prompt('Inserisci un numero:'));
let number7 = parseInt(prompt('Inserisci un numero:'));
let number8 = parseInt(prompt('Inserisci un numero:'));
let number9 = parseInt(prompt('Inserisci un numero:'));
let number10 = parseInt(prompt('Inserisci un numero:'));

const userNumbers = [
    number1,
    number2,
    number3,
    number4,
    number5,
    number6,
    number7,
    number8,
    number9,
    number10,
];

let sumNumber = 0;

for (i = 0; i < userNumbers.length; i++) {
    sumNumber += userNumbers[i];
}
console.log('La somma dei numeri inseriti dall\'utente è:', sumNumber);