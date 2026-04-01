/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';

// Dichiara la funzione qui.

function greatGreeter(userName) {
    // evoco un nuovo oggetto Date con metodo getHours
    // per beccare l'ora esatta del log
    const currentTime = new Date().getHours()
    //dichiaro variabile del saluto per inserirlo nel return
    let saluto = 0;
    // aggiungo if chain per possibili casistiche di saluto
    if (currentTime > 00 && currentTime <=  07) {
        saluto = `Carissimo ${userName}, cosa ci fai al pc? Fatti una camomilla.`
    } else if (currentTime > 07 && currentTime <= 13) {
        saluto = `Buongiorno ${userName}!`
    } else if (currentTime > 13 && currentTime <= 17) {
        saluto = `Buon pomeriggio ${userName}!`
    } else if (currentTime > 17 && currentTime <= 00) {
        saluto = `Buonasera ${userName}!`
    }
return saluto;
}

// Invoca la funzione qui e stampa il risultato in console

const salutaFratm = greetGreater(name);
console.log(salutaFratm);

//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.