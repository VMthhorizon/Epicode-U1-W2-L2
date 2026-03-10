/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

let x = 6;
let y = 5;
if (x > y) {
  console.log("Il numero maggiore è: ", x);
} else if (x < y) {
  console.log("Il numero maggiore è: ", y);
} else {
  console.log("I numeri sono uguali");
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

let number = 7;
if (number !== 5) {
  console.log("not equal");
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

let numero = 30;
if (numero % 5 === 0) {
  console.log("divisibile per 5");
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

let xx = 2;
let yy = 6;

if (xx === 8 || yy === 8 || xx + yy === 8 || xx - yy === 8) {
  console.log(true);
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

let totalShoppingCart = 60;
let spedizione = 10;
let newTotal =
  totalShoppingCart > 50 ? totalShoppingCart : totalShoppingCart + spedizione;
console.log(newTotal);

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

let sconto = totalShoppingCart * 0.2;
let totalScontato = totalShoppingCart - sconto;
if (totalScontato > 50) {
  newTotal === totalScontato;
} else {
  newTotal === totalScontato + 10;
}
console.log(newTotal);

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

let qq = 6;
let aa = 5;
let ee = 4;
if (qq > aa && qq > ee && aa > ee) {
  console.log("Ordine Decrescente:", qq, aa, ee);
} else if (aa > qq && aa > ee && qq > ee) {
  console.log("Ordine Decrescente:", aa, qq, ee);
} else if (aa > qq && aa > ee && qq < ee) {
  console.log("Ordine Decrescente:", aa, ee, qq);
} else if (ee > qq && ee > aa && qq < aa) {
  console.log("Ordine Decrescente:", ee, aa, qq);
} else if (ee > qq && ee > aa && qq > aa) {
  console.log("Ordine Decrescente:", ee, qq, aa);
} else if (qq > aa && qq > ee && ee > aa) {
  console.log("Ordine Decrescente:", qq, ee, aa);
}
/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

let b = 10;
if (typeof b === "number") {
  console.log(true);
} else {
  console.log(false);
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

let num = 50;
if (num % 2 === 0) {
  console.log("E' pari");
} else {
  console.log("E' dispari");
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

let val = 7;
if (val < 10 && val > 5) {
  console.log("Meno di 10");
} else if (val < 5) {
  console.log("Meno di 5");
} else {
  console.log("Uguale a 10 o maggiore");
}
/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};

me.city = "Toronto";
console.log(me);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

delete me.lastName;
console.log(me);
/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

me.skills.pop();
console.log(me);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

const array = [];

for (let i = 1; i <= 10; i++) {
  array.push(i);
}
console.log(array);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

array.splice(9, 1, "100");
console.log(array);
