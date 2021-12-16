// Il software deve chiedere per 10 volte all’utente di inserire un numero. 
// Il programma stampa la somma di tutti i numeri inseriti.

//Definisco la variabile con cui calcolerò la somma e la imposto a 0.
let sumNumber = 0;

//Creo ciclo FOR per chiedere 10 volte all'utente un numero,
//le stringhe inserite vengono parsate a numeri e sommati. 
for (let i = 0; i < 10; i++) {
    let userNumbers = parseInt(prompt('Inserisci un numero:'))
    sumNumber += userNumbers;
}
console.log('La somma dei numeri inseriti dall\'utente è:', sumNumber);