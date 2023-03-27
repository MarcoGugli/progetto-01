/**
 * @name variable.js
 * @authors Marco Guglielmino, Luca Laterza, Valeria Cerutti, Lorenzo Garnero
 * This file stores all the variables that can be customised by the user
 */

/** VARIABLES SETUP */

//Variables that can be set by the manager
let variablesList = {
    wantHTMLprint: true,
    /* Choose whethere you want the ID to be casually generated or not. 
     * "false"=the ID will be non-randomically generated; "true"=ID will be randomically generated */
    casualGenerationOfId: true,

    //length ID padding, has to be made of 0s
    padOfId: "000",

    //max number of weeks in which the articles will be available on the shelf
    weeksOnShelf: 2 ,

    //number of new products added to the shelf each week
    numNewProducts: 10,

    //min number of seconds after which the weekly lists are generated
    numSecondsMin: 1,

    //max number of seconds after which the weekly lists are generated
    numSecondsMax: 2,

    //number of weeks in which the program runs
    weeksUntilEnd: 7,

    //days since the current date. this variable marks the day in which the program starts running
    daysSinceToday: 7,

    //days between one print and the following one
    daysUntilNextStamp: 5,

    //padding that surrounds the items; choose any font you like
    padding: '*',

    //choose the format of the date between the following: (1. 18-APR-2023; 2. TUE, 18-APR-2023; 3. 18-04-2023; 4. APR-18-2023; 5. 04-18-2023; 6. 2023-04-18; 7. 2023-18-04)
    dateFormat: 4,

    //padding between each component of the date; choose between the following: "-"  "."  "/"
    padDate: '-' 
}


export {variablesList};