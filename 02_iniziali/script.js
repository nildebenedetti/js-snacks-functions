/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.

// devo creare un ciclo for per scorrere i nomi
// per ogni nome, deve pescare la lettera con index 0

function pescaIniziali (arrayNomi) {
    const arrayLettere = [];
    for (let i = 0; i < arrayNomi.length; i++) {
        const currentNome = arrayNomi[i];
       for ( let j = 0; j < currentNome.length; j++) {
            arrayLettere.push(currentNome[j]);
            break;
        }
    } 
    return arrayLettere;
}


// Invoca la funzione qui e stampa il risultato in console

const firtstLetters = pescaIniziali(names);
console.log(firtstLetters);

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]