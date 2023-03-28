/**
 * @name errors.js
 * @authors Marco Guglielmino, Luca Laterza, Valeria Cerutti, Lorenzo Garnero
 * This file stores all the possible errors the user can do when compiling the variables.js file
 */

import { variablesList, allVariable } from "./variable.js";

let mistakeMade=false;



/**
 * @name errors
 * @param
 * this function considers all the possible errors a user could make while
 * declaring the variables from the variable.js file
 */
function errors(){

    //management of variable casualGenerationOfId errors

    if(variablesList.casualGenerationOfId != false && variablesList.casualGenerationOfId != true){

        console.log(allVariable.styleCommands.stylePath+"⛔ 'casualGeneration' can be only a boolean value", allVariable.styleCommands.styleError);

        if(variablesList.wantHTMLprint==true){
            let createDiv=document.createElement("div");
            let createP=document.createElement("p");
            let body=document.body;
            createP.textContent="⛔ 'casualGeneration' can be only a boolean value";
            createP.className="error";
            createDiv.appendChild(createP);
            body.appendChild(createDiv);
        }

        mistakeMade=true;
    }

    //management of variable padOfId errors

    if(typeof(variablesList.padOfId) != 'string'){

        console.log(allVariable.styleCommands.stylePath+"⛔ 'paddingOfId' can be only a string", allVariable.styleCommands.styleError);

        if(variablesList.wantHTMLprint==true){
            let createDiv=document.createElement("div");
            let createP=document.createElement("p");
            let body=document.body;
            createP.textContent="⛔ 'paddingOfId' can be only a string";
            createP.className="error";
            createDiv.appendChild(createP);
            body.appendChild(createDiv);
        }

        mistakeMade=true;
    }

    if((variablesList.numNewProducts*variablesList.weeksUntilEnd).toString().length>variablesList.padOfId.length){
        
        console.log(allVariable.styleCommands.stylePath+"⛔ The number of products to insert exceeds the maximum capacity of the ids", allVariable.styleCommands.styleError);
           
        if(variablesList.wantHTMLprint==true){
            let createDiv=document.createElement("div");
            let createP=document.createElement("p");
            let body=document.body;
            createP.textContent="⛔ The number of products to insert exceeds the maximum capacity of the ids";
            createP.className="error";
            createDiv.appendChild(createP);
            body.appendChild(createDiv);
        }

        mistakeMade=true;
    }

    // managment of variable weekOnShelf

    if(variablesList.weeksOnShelf < 1 || typeof(variablesList.weeksOnShelf) == 'string'){

        console.log(allVariable.styleCommands.stylePath+"⛔ The number of weeks can't be lower than 1 or a string", allVariable.styleCommands.styleError);

        if(variablesList.wantHTMLprint==true){
            let createDiv=document.createElement("div");
            let createP=document.createElement("p");
            let body=document.body;
            createP.textContent="⛔ The number of weeks can't be lower than 1 or a string";
            createP.className="error";
            createDiv.appendChild(createP);
            body.appendChild(createDiv);
        }

        mistakeMade=true;
    }

    // managment of variable numNewproducts

    if(variablesList.numNewProducts < 1 || typeof(variablesList.numNewProducts) == 'string'){

        console.log(allVariable.styleCommands.stylePath+"⛔ The number of new products added to the shelf has to be at least 1 or a string", allVariable.styleCommands.styleError);

        if(variablesList.wantHTMLprint==true){
            let createDiv=document.createElement("div");
            let createP=document.createElement("p");
            let body=document.body;
            createP.textContent="⛔ The number of new products added to the shelf has to be at least 1 or a string";
            createP.className="error";
            createDiv.appendChild(createP);
            body.appendChild(createDiv);
        }

        mistakeMade=true;
    }

    //managment of variable numSecondsMin and numSeconds Max

    if((variablesList.numSecondsMin < 0 || typeof(variablesList.numSecondsMin) == 'string') || (variablesList.numSecondsMax < 0 || typeof(variablesList.numSecondsMax) == 'string')){

        
        console.log(allVariable.styleCommands.stylePath+"⛔ Delay value is incorrect!", allVariable.styleCommands.styleError);
            
        if(variablesList.wantHTMLprint==true){
            let createDiv=document.createElement("div");
            let createP=document.createElement("p");
            let body=document.body;
            createP.textContent="⛔ Delay value is incorrect!";
            createP.className="error";
            createDiv.appendChild(createP);
            body.appendChild(createDiv);
        }

        mistakeMade=true;
    }
    else if(variablesList.numSecondsMin > variablesList.numSecondsMax){

            console.log(allVariable.styleCommands.stylePath+"⛔ The minor delay can't be higher than greater delay", allVariable.styleCommands.styleError);

            if(variablesList.wantHTMLprint==true){
                let createDiv=document.createElement("div");
                let createP=document.createElement("p");
                let body=document.body;
                createP.textContent="⛔ The minor delay can't be higher than greater delay";
                createP.className="error";
                createDiv.appendChild(createP);
                body.appendChild(createDiv);
            }

            mistakeMade=true;
    }

    // managment of variable weeksUntilEnd

    if(variablesList.weeksUntilEnd < 1 || typeof(variablesList.weeksUntilEnd) == 'string'){

        console.log(allVariable.styleCommands.stylePath+"⛔ 'weeksUntilEnd' value is incorrect!", allVariable.styleCommands.styleError);

        if(variablesList.wantHTMLprint==true){
            let createDiv=document.createElement("div");
            let createP=document.createElement("p");
            let body=document.body;
            createP.textContent="⛔ 'weeksUntilEnd' value is incorrect!";
            createP.className="error";
            createDiv.appendChild(createP);
            body.appendChild(createDiv);
        }

        mistakeMade=true;
    }

    // managment of variable daysSinceToday

    if(typeof(variablesList.daysSinceToday) == 'string'){

        console.log(allVariable.styleCommands.stylePath+"⛔ 'daysSinceToday' must be a number!", allVariable.styleCommands.styleError);

        if(variablesList.wantHTMLprint==true){
            let createDiv=document.createElement("div");
            let createP=document.createElement("p");
            let body=document.body;
            createP.textContent="⛔ 'daysSinceToday' must be a number!";
            createP.className="error";
            createDiv.appendChild(createP);
            body.appendChild(createDiv);
        }

        mistakeMade=true;
    }

    // managment of variable daysUntilNextStamp

    if(variablesList.daysUntilNextStamp < 1 || typeof(variablesList.daysUntilNextStamp) == 'string'){

        console.log(allVariable.styleCommands.stylePath+"⛔ 'daysUntilNextStamp' value is incorrect!", allVariable.styleCommands.styleError);

        if(variablesList.wantHTMLprint==true){
            let createDiv=document.createElement("div");
            let createP=document.createElement("p");
            let body=document.body;
            createP.textContent="⛔ 'daysUntilNextStamp' value is incorrect!";
            createP.className="error";
            createDiv.appendChild(createP);
            body.appendChild(createDiv);
        }

        mistakeMade=true;
    }

    // managment of variable padding


    if( variablesList.padding.length > 1 || typeof(variablesList.padding) != 'string'){

        console.log(allVariable.styleCommands.stylePath+"⛔ 'padding' value is incorrect!", allVariable.styleCommands.styleError);

        if(variablesList.wantHTMLprint==true){
            let createDiv=document.createElement("div");
            let createP=document.createElement("p");
            let body=document.body;
            createP.textContent="⛔ 'padding' value is incorrect!";
            createP.className="error";
            createDiv.appendChild(createP);
            body.appendChild(createDiv);
        }

        mistakeMade=true;
    }

    // managment of date format

    if(variablesList.dateFormat <1 || variablesList.dateFormat >6 || typeof(variablesList.dateFormat) == 'string'){

        console.log(allVariable.styleCommands.stylePath+"⛔ The number of format date has to be between 1 and 6 or a string!", allVariable.styleCommands.styleError);
        
        if(variablesList.wantHTMLprint==true){
            let createDiv=document.createElement("div");
            let createP=document.createElement("p");
            let body=document.body;
            createP.textContent="⛔ The number of format date has to be between 1 and 6 or a string!";
            createP.className="error";
            createDiv.appendChild(createP);
            body.appendChild(createDiv);
        }

        mistakeMade=true;
    }

    if(variablesList.padDate != "-" && variablesList.padDate != "." && variablesList.padDate != "/") {

        console.log(allVariable.styleCommands.stylePath+"⛔ You must choose a character between the ones suggested", allVariable.styleCommands.styleError);

        if(variablesList.wantHTMLprint==true){
            let createDiv=document.createElement("div");
            let createP=document.createElement("p");
            let body=document.body;
            createP.textContent="⛔ You must choose a character between the ones suggested";
            createP.className="error";
            createDiv.appendChild(createP);
            body.appendChild(createDiv);
        }
        mistakeMade=true;
    }

    if(mistakeMade==true){
        console.log(allVariable.styleCommands.stylePath+"⚠️ Check variables in 'variable.js' file ⚠️", allVariable.styleCommands.styleValid);
        
        if(variablesList.wantHTMLprint == true){
            let createDiv=document.createElement("div");
            let createP=document.createElement("p");
            let body=document.body;

            createP.textContent="⚠️ Check variables in 'variable.js' file ⚠️";
            createP.className="warning";
            createDiv.appendChild(createP);
            body.appendChild(createDiv);
        }

        setTimeout(function(){
            clearTimeout(allVariable.time);
        },500); 
    }
}

export { errors };