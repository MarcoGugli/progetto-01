/** CONFIGURAZIONE VARIABILI */

//Configurazione variabili manager 
let variablesList = {
    casualGenerationOfId: true, //false per la generazione non casuale dell'id, true per la generazione casuale
    padOfId: "00", //composto da 0, è il padding
    weeksOnShelf: 2 , //settimane dopo cui gli articoli vengono rimossi
    numNewProducts: 10, //numero nuovi prodotti che arrivano ogni settimana
    numSecondsMin: 1, //numero secondi dopo cui vengono stampate le liste settimanali
    numSecondsMax: 2, //numero secondi dopo cui vengono stampate le liste settimanali
    weeksUntilEnd: 10, //settimane visualizzate prima della fine del programma
    daysSinceToday: 7, //giorni passati dalla data corrente
    daysUntilNextStamp: 5, //giorni tra la stampa di un elenco e quello successivo
    padding: '*' //carattere usato come padding 
}
export {variablesList};