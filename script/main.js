/**
 * @name main.js
 * @authors Marco Guglielmino, Luca Laterza, Valeria Cerutti, Lorenzo Garnero
 * This file holds the array with the items that will we used in the functions, and invokes all the several functions
 * we have created; these functions are stored in the function.js file
 */

import { variablesList, allVariable } from "./variable.js";
import * as func from "./function.js";
import { errors, cont } from "./errors.js";
/* { productState, generateProduct, expired, title, titleHtml, formattingOutput, formattingOutputHtml, randomTimestamp, tableCreator} */
/** CREAZIONE VARIABILI */

//array contenente i prodotti











/**
 * outputs on console each weekly list of items every second
 * @name throwawayFunction
 * @param {void}
 */
let rand=func.randomTimestamp();



errors();

if(cont==1){
    console.log(allVariable.styleCommands.stylePath+"⚠️Check variables in 'variable.js' file⚠️", allVariable.styleCommands.styleValid);

}


if(variablesList.wantHTMLprint==false){
    allVariable.time=setInterval(function(){
        allVariable.weeklyOutput=0;
        func.generateProduct();
        func.productState();
        func.generateOutputConsole();

        console.log("\n");
        allVariable.weeklyOutput=1;
        func.expired();
        func.generateOutputConsole();
        
        console.log("\n");
        allVariable.initialDate.setDate(allVariable.initialDate.getDate()+variablesList.daysUntilNextStamp);
    }, rand*1000); 

    setTimeout(function(){
        clearTimeout(allVariable.time);
    },(rand*variablesList.weeksUntilEnd)*1000); 
}
else if(variablesList.wantHTMLprint==true){
    let createLink=document.createElement("link");
    let head=document.head;

    createLink.setAttribute("rel", "stylesheet");
    createLink.setAttribute("href", "css/style.css");

    head.appendChild(createLink);

    allVariable.time=setInterval(function(){
        allVariable.weeklyOutput=0;
        func.generateProduct();
        func.productState();
        func.tableCreator();
        func.generateOutputConsole();
        func.generateOutputHTML();

        console.log("\n");
        allVariable.weeklyOutput=1;
        func.expired();
        func.generateOutputConsole();
        func.generateOutputHTML();
        
        console.log("\n");
        allVariable.initialDate.setDate(allVariable.initialDate.getDate()+variablesList.daysUntilNextStamp);    
    }, rand*1000); 

    setTimeout(function(){
        clearTimeout(allVariable.time);
    },(rand*variablesList.weeksUntilEnd)*1000); 
}






