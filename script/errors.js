/**
 * @name errors.js
 * @authors Marco Guglielmino, Luca Laterza, Valeria Cerutti, Lorenzo Garnero
 * This file stores all the possible errors the user can do when compiling the variables.js file
 */

import {variablesList} from "./variable.js";


//management of variable casualGenerationOfId errors

if(variablesList.casualGenerationOfId != false && variablesList.casualGenerationOfId != true){

    console.log("casualGeneration value is incorrect! Set a different value as casualGeneration. casualGeneration is now false as default");

    variablesList.casualGenerationOfId = false;

}

//management of variable padOfId errors

if(typeof(variablesList.padOfId) != 'string'){

    console.log("padding can be only a string. padding is nowset as 00 as default");

    variablesList.padOfId = "000";

}

if((variablesList.numNewProducts*variablesList.weeksUntilEnd).toString().length>variablesList.padOfId.length){
    console.log("%c⛔ The number of products to insert exceeds the maximum capacity of the ids", "color: red");
        setTimeout(function(){
            clearTimeout(time);
        }, 500);
}


// managment of variable weekOnShelf

if(variablesList.weeksOnShelf <= 1 || variablesList.weeksOnShelf != /[0-9]/g){

    console.log("The number of weeks can'weeklyOutput be lower than 1. number of weeks is now set as 1 as default");

    variablesList.weeksOnShelf = 1;

}

// managment of variable numNewproducts

if(variablesList.numNewProducts <= 0 || variablesList.numNewProducts != /[0-9]/g){

    console.log("The number of new products added to the shelf has to be at least 1.");
}

//managment of variable numSecondsMin and numSeconds Max

if((variablesList.numSecondsMin < 0 || variablesList.numSecondsMin != /[0-9]/g) || (variablesList.numSecondsMax < 0 && variablesList.numSecondsMax != /[0-9]/g)){

    if(variablesList.numSecondsMin > variablesList.numSecondsMax){

        console.log("the minor delay can'weeklyOutput be higher than greater delay. Minor delay is now set as 1 and greater is set as 2 as default");

        variablesList.numSecondsMin = 1;
        variablesList.numSecondsMax = 2;

    }
    else
    {

        console.log("delay value is incorrect!. Minor delay is now set as 1 and greater is set as 2 as default");

        variablesList.numSecondsMin = 1;
        variablesList.numSecondsMax = 2;

    }

}

// managment of variable weeksUntilEnd

if(variablesList.weeksUntilEnd < 1 || variablesList.weeksUntilEnd != /[0-9]/g){

    console.log("weeksUntilEnd value is incorrect!. the value is now set as 1 as default");

    variablesList.weeksUntilEnd = 1;

}

// managment of variable daysSinceToday

if(variablesList.daysSinceToday != /[0-9]/g){

    console.log("daysSinceToday is must to be a number!. the value is now set as 1 as default");

    variablesList.daysSinceToday = 1;

}

// managment of variable daysUntilNextStamp

if(variablesList.daysUntilNextStamp < 1 || variablesList.daysUntilNextStamp != /[0-9]/g){

    console.log("daysUntilNextStamp value is incorrect!. The value is now set as 1 as default");

    variablesList.daysUntilNextStamp = 1;

}


// managment of variable padding


if(typeOf(variablesList.padding) != string || variablesList.padding.length > 1){

    console.log("padding value is incorrect!. the value is now set as '*' as default");

    variablesList.padding = '*';

}


// managment of date format

if(variablesList.dateFormat <1 || variablesList.dateFormat >6 || variablesList.dateFormat != /[0-9]/g){
    console.log("The number has to be between 1 and 6!")
}

if(variablesList.padDate != "-" && variablesList.padDate != "." && variablesList.padDate != "/") {
    console.log("You must choose a character between the ones suggested.")
}