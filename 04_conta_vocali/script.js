/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.

// dichiaro un array con le vocali, quindi voglio che 
    // utilizzo metodo includes() per vedere se currentLetter e' contenuta nell'array

function vowelCounter (myString) {
    // dichiaro array per conteggio vocale
    const vowelCountStorage = [];
    // dichiaro array delle vocale per creare match
    const arrayVowels = ['a', 'e', 'i', 'o', 'u', 'y']; 
    // con un ciclo for, faccio il giro della stringa
    // creo somma di numeri in array Counter 
    let sumVowelCount = 0;
    for ( let i = 0; i < myString.length; i++) {
        // init variabile di appoggio
        const currentLetter = myString[i];
        // SE currentValore === a || e || i || o || u || y
        if (arrayVowels.includes(currentLetter) === true ) {
            // allora push 1 al myCounter
            vowelCountStorage.push(1);
        }
    }
    for (let i = 0; i < vowelCountStorage.length; i++) {
        sumVowelCount += vowelCountStorage[i];
    }
       // return sumCounter
       return sumVowelCount;
} 




// Invoca la funzione qui e stampa il risultato in console

const quanteVocali = vowelCounter(word);
console.log(quanteVocali);


//Risultato atteso se si passa 'javascript': 3 (a, a, i)

// scrivo ora la sintassi in 