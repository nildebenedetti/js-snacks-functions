/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = 'Mario';


// Dichiara la funzione qui.

function salutaFratm (fratmName) {
    console.log(`Ciao ${fratmName}!`);
}


// Invoca la funzione qui e stampa il risultato in console
 salutaFratm(userName);


//Risultato atteso se si passa 'Mario': // ciao Mario


// riscrivo la function as arrow function

const salutaGigi = nomeGigi => console.log(`Ciaonissimo ${nomeGigi}!`);

// Invoco arrow function

salutaGigi(userName);