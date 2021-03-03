// CREAZIONE DELL'ARRAY
var lista = ["Rossi","Bianchi","Marconi","Franceschini","Palomi","Zingarini","Bernardini"];

/* PRENDO IN INPUT IL COGNOME E CAMBIO LA PRIMA 
    LETTERA PER PERMETTERE ALLA FUNZIONE SORT DI ORDINARE BENE L'ARRAY*/
var cognome = prompt("Inserisci il tuo congnome");
cognome = cognome.charAt(0).toUpperCase() + cognome.slice(1).toLowerCase();

lista.push(cognome);

lista.sort();

var i = 0;

while( i != lista.length){

    if( lista[i] == cognome){
        console.log(cognome + " si trova alla posizione numero -> " + (i+1));
    }
    else{
        console.log(lista[i]);
    }
    i++;
}