/**
 * @name main.js
 * @authors Marco Guglielmino, Luca Laterza, Valeria Cerutti, Lorenzo Garnero
 * This file holds the array with the items that will we used in the functions, and invokes all the several functions
 * we have created; these functions are stored in the function.js file
 */

import { variablesList } from "./variable.js";
import { productState, generateProduct, expired, title, titleHtml, formattingOutput, formattingOutputHtml, randomTimestamp, tableCreator} from "./function.js";

/** CREAZIONE VARIABILI */

//array contenente i prodotti
let supermarket = ["milk", "eggs", "bread", "cheese", "yogurt", "cereal", "pasta", "rice", "beans", "peanut butter", 
"jelly", "canned tomatoes", "frozen vegetables", "frozen pizza", "frozen dinners", "ground beef", "chicken breasts", 
"salmon", "tuna", "apples", "oranges", "bananas", "strawberries", "blueberries", "grapes", "carrots", "broccoli", 
"lettuce", "potatoes", "onions"];


let productsList=[]; //lista prodotti inseriti
let initialDate= new Date(); 
initialDate.setDate(initialDate.getDate()+variablesList.daysSinceToday);
let usedId=[];

let t;

/*================================================================*/
/* CONSOLE.LOG */

/**
 * outputs on console each weekly list of items every second
 * @name throwawayFunction
 * @param {void}
 */
let rand=randomTimestamp();


let time=setInterval(function(){

    t=0;
    generateProduct();
    productState();
    tableCreator();
    title();
    titleHtml();
    formattingOutput();
    formattingOutputHtml()

    console.log("\n");
    t=1;
    expired();
    title();
    titleHtml();
    formattingOutput();
    formattingOutputHtml()
    
    console.log("\n");
    initialDate.setDate(initialDate.getDate()+variablesList.daysUntilNextStamp);
}, rand*1000); 


/**
 * 
 * @name throwawayFunction
 * @param {void}
 */
setTimeout(function(){
    clearTimeout(time);
},(rand*variablesList.weeksUntilEnd)*1000); 


export {supermarket, initialDate, t, productsList, usedId};




