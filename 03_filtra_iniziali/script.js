/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca 
un array contenente solo le parole che iniziano con quella lettera */
'use strict';

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.

/*

function arrayFilterByLetter (myArray, myLetter) {
    // dichiaro array vuoto da riempire con nomi che hanno líniziale corretta
    const filteredArray = [];

    // uso ciclo for per scorrere l'array con i nomi
     for (let i = 0; i < myArray.length; i++) {
        // variabile di supporto per identificare nome del giro in array
        const currentName = myArray[i];
        // rimuovo ciclo for e inidico la posizione con index 0 nel current name
        let currentFirstLetter = currentName[0];
        // condizione if per verificare match con myLetter
        if (currentFirstLetter === myLetter) {
                filteredArray.push(currentName); // se la prima lettera matcha, allora push nome in array
        }
        }
    } 
    return filteredArray;
    


// Invoca la funzione qui e stampa il risultato in console

const myNewArray = arrayFilterByLetter(names, 'a');
console.log(myNewArray); */


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]

// dichiaro array vuoto da riempire con nomi che hanno líniziale corretta
    const filteredArray = [];

    // uso ciclo for per scorrere l'array con i nomi
     for (let i = 0; i < names.length; i++) {
        // variabile di supporto per identificare nome del giro in array
        const currentName = names[i];
        // rimuovo ciclo for e inidico la posizione con index 0 nel current name
        let currentFirstLetter = currentName[0];
        // condizione if per verificare match con myLetter
        if (currentFirstLetter === 'A') {
                filteredArray.push(currentName); // se la prima lettera matcha, allora push nome in array
        }
        }

        console.log(filteredArray);