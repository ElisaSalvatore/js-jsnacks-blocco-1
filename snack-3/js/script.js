//Stampa le potenze di 2 fino a 1000.

let base2 = 0;

for (i = 0; i < 1000; i++) {
    if (base2 < 1000) {
        base2 = Math.pow(2, i);
    } else {
        break;
    }
    console.log(base2);
}
