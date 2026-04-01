/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca 
un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.

function arrayFilterByLetter (myArray, myLetter) {
    // aggiungo lettera per sort di modo da poterla comparare poi con il risultato
    // della ricerca nell'array
    const sortingLetter = myLetter; 
    // dichiaro array vuoto da riempire con nomi che hanno líniziale corretta
    const filteredArray = [];

    // uso ciclo for per scorrere l'array con i nomi
     for (let i = 0; i < myArray.length; i++) {
        // variabile di supporto per identificare nome del giro in array
        const currentName = myArray[i];
        // uso altro ciclo for per trovare la prima lettera della parola
       for ( let j = 0; j < j + 1 ; j++) {
            let currentFirstLetter = currentName[j];
            // condizione if per verificare match con myLetter
            if (currentFirstLetter === sortingLetter) {
                filteredArray.push(currentName); // se la prima lettera matcha, allora push nome in array
            }
        }
    } 
    
    
}

// Invoca la funzione qui e stampa il risultato in console



//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]