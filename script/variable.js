/** VARIABLES SETTING */

//Variables that can be set by the manager
let variablesList = {
    //if false the ID will be non-randomically generated, if true the ID will be randomically generated
    casualGenerationOfId: true,

    //ID padding, has to be made of 0s
    padOfId: "000",

    //max number of weeks in which the articles are still available on the shelf
    weeksOnShelf: 2 ,

    //
    numNewProducts: 10, //numero nuovi prodotti che arrivano ogni settimana
    numSecondsMin: 1, //numero secondi dopo cui vengono stampate le liste settimanali
    numSecondsMax: 2, //numero secondi dopo cui vengono stampate le liste settimanali
    weeksUntilEnd: 10, //settimane visualizzate prima della fine del programma
    daysSinceToday: 7, //giorni passati dalla data corrente
    daysUntilNextStamp: 5, //giorni tra la stampa di un elenco e quello successivo
    padding: '*', //carattere usato come padding 
    dateFormat: 7, //formato data visualizzata (1. 18-APR-2023; 2. TUE, 18-APR-2023; 3. 18-04-2023; 4. APR-18-2023; 5. 04-18-2023; 6. 2023-04-18; 7. 2023-18-04)
    padDate: '-' //padding tra i componenti della data - Possibilità: "-"  "."  "/"
}
export {variablesList};