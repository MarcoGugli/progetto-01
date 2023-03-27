/**
 * @name main.js
 * @authors Marco Guglielmino, Luca Laterza, Valeria Cerutti, Lorenzo Garnero
 * This file holds the array with the items that will we used in the functions, and invokes all the several functions
 * we have created; these functions are stored in the function.js file
 */

import { variablesList } from "./variable.js";
import * as func from "./function.js";
import { errors, cont } from "./errors.js";
/* { productState, generateProduct, expired, title, titleHtml, formattingOutput, formattingOutputHtml, randomTimestamp, tableCreator} */
/** CREAZIONE VARIABILI */

//array contenente i prodotti
let supermarket = ["milk", "eggs", "bread", "cheese", "yogurt", "cereal", "pasta", "rice", "beans", "peanut butter", "jelly", "canned tomatoes", "frozen vegetables", "frozen pizza", "frozen dinners", "ground beef", "chicken breasts", "salmon", "tuna", "apples", "oranges", "bananas", "strawberries", "blueberries", "grapes", "carrots", "broccoli", "lettuce", "potatoes", "onions"];

let styleCommands = {

    stylePath: "%c",
    styleExpired: "color: red",
    styleValid: "color: yellow",
    styleOld: "color: orange",
    styleNew: "color: green"

}

let productsList=[]; //lista prodotti inseriti
let initialDate= new Date(); 
initialDate.setDate(initialDate.getDate()+variablesList.daysSinceToday);
let usedId=[];
let weeklyOutput;
let time;

/**
 * outputs on console each weekly list of items every second
 * @name throwawayFunction
 * @param {void}
 */
let rand=func.randomTimestamp();



errors();

if(cont==1){
    console.log(func.styleCommands.stylePath+"⚠️Check variables in 'variable.js' file⚠️", func.styleCommands.styleValid);

}


if(variablesList.wantHTMLprint==false){
    time=setInterval(function(){
        weeklyOutput=0;
        func.generateProduct();
        func.productState();
        func.genereteOutputConsole();

        console.log("\n");
        weeklyOutput=1;
        func.expired();
        func.genereteOutputConsole();
        
        console.log("\n");
        initialDate.setDate(initialDate.getDate()+variablesList.daysUntilNextStamp);
    }, rand*1000); 

    setTimeout(function(){
        clearTimeout(time);
    },(rand*variablesList.weeksUntilEnd)*1000); 
}
else if(variablesList.wantHTMLprint==true){
    let createLink=document.createElement("link");
    let head=document.head;

    createLink.setAttribute("rel", "stylesheet");
    createLink.setAttribute("href", "css/style.css");

    head.appendChild(createLink);

    time=setInterval(function(){
        weeklyOutput=0;
        func.generateProduct();
        func.productState();
        func.tableCreator();
        func.genereteOutputConsole();
        func.genereteOutputHTML();

        console.log("\n");
        weeklyOutput=1;
        func.expired();
        func.genereteOutputConsole();
        func.genereteOutputHTML();
        
        console.log("\n");
        initialDate.setDate(initialDate.getDate()+variablesList.daysUntilNextStamp);    
    }, rand*1000); 

    setTimeout(function(){
        clearTimeout(time);
    },(rand*variablesList.weeksUntilEnd)*1000); 
}

export {supermarket, initialDate, weeklyOutput, productsList, usedId, time, styleCommands};




