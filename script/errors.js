/**
 * @name errors.js
 * @authors Marco Guglielmino, Luca Laterza, Valeria Cerutti, Lorenzo Garnero
 * This file stores all the possible errors the user can do when compiling the variables.js file
 */

import { variablesList } from "./variable.js";
import { styleCommands } from "./main.js";
import { time } from "./main.js";

let cont=0;

let createDiv=document.createElement("div");
let createP=document.createElement("p");
let body=document.body;

/**
 * @name errors
 * @param
 * this function considers all the possible errors a user could make while
 * declaring the variables from the variable.js file
 */
function errors(){

    //management of variable casualGenerationOfId errors

    if(variablesList.casualGenerationOfId != false && variablesList.casualGenerationOfId != true){

        console.log(styleCommands.stylePath+"⛔ 'casualGeneration' can be only a boolean value", styleCommands.styleExpired);

        if(variablesList.wantHTMLprint==true){
            createP.textContent="⛔ 'casualGeneration' can be only a boolean value";
            createDiv.appendChild(createP);
            body.appendChild(createDiv);
        }

        cont=1;
    }

    //management of variable padOfId errors

    if(typeof(variablesList.padOfId) != 'string'){

        console.log(styleCommands.stylePath+"⛔ 'paddingOfId' can be only a string", styleCommands.styleExpired);

        if(variablesList.wantHTMLprint==true){
            createP.textContent="⛔ 'paddingOfId' can be only a string";
            createDiv.appendChild(createP);
            body.appendChild(createDiv);
        }

        cont=1;
    }

    if((variablesList.numNewProducts*variablesList.weeksUntilEnd).toString().length>variablesList.padOfId.length){
        
        console.log(styleCommands.stylePath+"⛔ The number of products to insert exceeds the maximum capacity of the ids", styleCommands.styleExpired);
           
        if(variablesList.wantHTMLprint==true){
            createP.textContent="⛔ The number of products to insert exceeds the maximum capacity of the ids";
            createDiv.appendChild(createP);
            body.appendChild(createDiv);
        }

        cont=1;
    }

    // managment of variable weekOnShelf

    if(variablesList.weeksOnShelf < 1 || typeof(variablesList.weeksOnShelf) == 'string'){

        console.log(styleCommands.stylePath+"⛔ The number of weeks can't be lower than 1 or a string", styleCommands.styleExpired);

        if(variablesList.wantHTMLprint==true){
            createP.textContent="⛔ The number of weeks can't be lower than 1 or a string";
            createDiv.appendChild(createP);
            body.appendChild(createDiv);
        }

        cont=1;
    }

    // managment of variable numNewproducts

    if(variablesList.numNewProducts < 1 || typeof(variablesList.numNewProducts) == 'string'){

        console.log(styleCommands.stylePath+"⛔ The number of new products added to the shelf has to be at least 1 or a string", styleCommands.styleExpired);

        if(variablesList.wantHTMLprint==true){
            createP.textContent="⛔ The number of new products added to the shelf has to be at least 1 or a string";
            createDiv.appendChild(createP);
            body.appendChild(createDiv);
        }

        cont=1;
    }

    //managment of variable numSecondsMin and numSeconds Max

    if((variablesList.numSecondsMin < 0 || typeof(variablesList.numSecondsMin) == 'string') || (variablesList.numSecondsMax < 0 || typeof(variablesList.numSecondsMax) == 'string')){

        
        console.log(styleCommands.stylePath+"⛔ Delay value is incorrect!", styleCommands.styleExpired);
            
        if(variablesList.wantHTMLprint==true){
            createP.textContent="⛔ Delay value is incorrect!";
            createDiv.appendChild(createP);
            body.appendChild(createDiv);
        }

        cont=1;
    }
    else if(variablesList.numSecondsMin > variablesList.numSecondsMax){

            console.log(styleCommands.stylePath+"⛔ The minor delay can't be higher than greater delay", styleCommands.styleExpired);

            if(variablesList.wantHTMLprint==true){
                createP.textContent="⛔ The minor delay can't be higher than greater delay";
                createDiv.appendChild(createP);
                body.appendChild(createDiv);
            }

            cont=1;
    }

    // managment of variable weeksUntilEnd

    if(variablesList.weeksUntilEnd < 1 || typeof(variablesList.weeksUntilEnd) == 'string'){

        console.log(styleCommands.stylePath+"⛔ 'weeksUntilEnd' value is incorrect!", styleCommands.styleExpired);

        if(variablesList.wantHTMLprint==true){
            createP.textContent="⛔ 'weeksUntilEnd' value is incorrect!";
            createDiv.appendChild(createP);
            body.appendChild(createDiv);
        }

        cont=1;
    }

    // managment of variable daysSinceToday

    if(typeof(variablesList.daysSinceToday) == 'string'){

        console.log(styleCommands.stylePath+"⛔ 'daysSinceToday' must be a number!", styleCommands.styleExpired);

        if(variablesList.wantHTMLprint==true){
            createP.textContent="⛔ 'daysSinceToday' must be a number!";
            createDiv.appendChild(createP);
            body.appendChild(createDiv);
        }

        cont=1;
    }

    // managment of variable daysUntilNextStamp

    if(variablesList.daysUntilNextStamp < 1 || typeof(variablesList.daysUntilNextStamp) == 'string'){

        console.log(styleCommands.stylePath+"⛔ 'daysUntilNextStamp' value is incorrect!", styleCommands.styleExpired);

        if(variablesList.wantHTMLprint==true){
            createP.textContent="⛔ 'daysUntilNextStamp' value is incorrect!";
            createDiv.appendChild(createP);
            body.appendChild(createDiv);
        }

        cont=1;
    }

    // managment of variable padding


    if( variablesList.padding.length > 1 || typeof(variablesList.padding) != 'string'){

        console.log(styleCommands.stylePath+"⛔ 'padding' value is incorrect!", styleCommands.styleExpired);

        if(variablesList.wantHTMLprint==true){
            createP.textContent="⛔ 'padding' value is incorrect!";
            createDiv.appendChild(createP);
            body.appendChild(createDiv);
        }

        cont=1;
    }

    // managment of date format

    if(variablesList.dateFormat <1 || variablesList.dateFormat >6 || typeof(variablesList.dateFormat) == 'string'){

        console.log(styleCommands.stylePath+"⛔ The number of format date has to be between 1 and 6 or a string!", styleCommands.styleExpired);
        
        if(variablesList.wantHTMLprint==true){
            createP.textContent="⛔ The number of format date has to be between 1 and 6 or a string!";
            createDiv.appendChild(createP);
            body.appendChild(createDiv);
        }

        cont=1;
    }

    if(variablesList.padDate != "-" && variablesList.padDate != "." && variablesList.padDate != "/") {

        console.log(styleCommands.stylePath+"⛔ You must choose a character between the ones suggested", styleCommands.styleExpired);

        if(variablesList.wantHTMLprint==true){
            createP.textContent="⛔ You must choose a character between the ones suggested";
            createDiv.appendChild(createP);
            body.appendChild(createDiv);
        }
        cont=1;
    }

    if(cont==1){
        setTimeout(function(){
            clearTimeout(time);
        },500); 
    }
}

export { errors, cont };