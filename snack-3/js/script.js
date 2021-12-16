//Stampa le potenze di 2 fino a 1000.
let i = 2;
let y = 2;

while (Math.pow(2, i) < 1000) {
    y = Math.pow(2, i);
    console.log(y);  
    i++;
}

