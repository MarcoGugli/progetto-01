  /**
  * @name function.js
  * @authors Marco Guglielmino, Luca Laterza, Valeria Cerutti, Lorenzo Garnero
  * This file stores all the functions we have created
  */

import { variablesList} from "./variable.js";
import {supermarket, initialDate, weeklyOutput, productsList, usedId, styleCommands} from "./main.js"

/**
 * adds the 0-padding to the ID code of each item. this function also checks that every new item has a 
 * different ID number.
 * @name padNum
 * @param
 * @return {String}
 */
function padNum(){
    //boolean variable that indicates wheter an acceptable ID has been generated. Initialised to "false".
    let accepted=false;
    //integer variable that indicates the ID number. Initialised to 0.
    let n=0;

    if(variablesList.casualGenerationOfId==false){
       n+=productsList.length;
    }
    else if(variablesList.casualGenerationOfId==true){
/**
 * this function generates a random number
 * @name generate
 * @param
 * @returns {Number}
 */
        function generate(){
            let num=Math.floor(Math.random()*(variablesList.numNewProducts*variablesList.weeksUntilEnd)+0);
    
            return num;
        }
        
        while(accepted==false){
            n=generate();
    
            if(usedId.indexOf(n)>=0)
                n=generate();
            else{
                accepted=true;
                usedId.push(n);
            }
        }    
    }
    
    return n.toString().padStart(variablesList.padOfId.length, '0');
}

/**
 * updates the status of the items
 * @name productState
 * @param 
 * @return {String}
 */
function productState(){
    //declaring an array that contains the statuses that will later be assigned to the items
    let itemStatus = ['New', 'Valid', 'Old', 'Expired']
    let d=new Date(initialDate);

    for(let i=0; i<productsList.length; i++){
        if(productsList[i].countWeek==0){
            productsList[i].status=itemStatus[0];
        }
        else if(productsList[i].countWeek==1){
            productsList[i].status=itemStatus[1];
        }
        else if(productsList[i].countWeek == variablesList.weeksOnShelf){

            productsList[i].status=itemStatus[2];
        }
   
        if(productsList[i].expiryDate<d){
            productsList[i].status=itemStatus[3];
        }
    }
}

/** 
 * generates a random item from the string "supermarket"
 * @name generateName
 * @param {void} void
 * @return {String} random product fom the string "supermarket"
 */
function generateName(){
    let n=Math.floor(Math.random()*supermarket.length+0);

    let randProd=supermarket[n];

    return randProd;
}

/**
 * generates an expiry date to each of the products from the string "supermarket"
 * @name generateExpiry
 * @param {void} void
 * @return {Date} random expiry date
 */   
function generateExpiry(){
    let startDate = new Date(initialDate); // imposta la data di inizio
    let endDate = new Date(startDate); // imposta la data di fine
    endDate.setMonth(endDate.getMonth()+1);
    
    let randomDate = new Date(startDate.getTime() + Math.random()*(endDate.getTime() - startDate.getTime())+0); // calcola una data casuale compresa tra la data di inizio e la data di fine
    
    return randomDate;
} 

/**
 * generates the items to add to the shelf the next week. the number of items added to the shelf
 * depends on the variable numNewProducts
 * @name generateProduct
 * @param {void}
 * @return {String}
 */
function generateProduct(){
    let length=productsList.length;
    let sum=productsList.length+variablesList.numNewProducts;

    for(let j=0; j<productsList.length; j++){
        productsList[j].countWeek++;
    }

    for(let i=length; i<sum; i++){
        let product={
            id: padNum(),
            name: generateName(),
            expiryDate: generateExpiry(),
            countWeek: 0
        };

        productsList.push(product);
    }
} 

/**
 * checks if the articles of the shelf are either valid or expired, 
 * depending on the expiry date generated in the function "generateExpiry"
 * @name expired
 * @param {void}
 */
function expired(){
    let d=new Date(initialDate);
    
    for(let i=0; i<productsList.length; i++){

        if(productsList[i].expiryDate<=d||productsList[i].countWeek>=variablesList.weeksOnShelf){
            productsList.splice(i,1);
            i--;
        }
    }
}

/**
 * formats the date to the format DD-MMM-YY
 * @name formattingDate
 * @param {Date} date
 * @return {Date} a date formatted in DD-MMM-YY
 */
function formattingDate(date){
    if(variablesList.dateFormat==1)
        return date.toUTCString().toUpperCase().slice(5,16).replace(/ /g, variablesList.padDate);

    if(variablesList.dateFormat==2)
        return date.toUTCString().toUpperCase().slice(0,16).replace(/ /g, variablesList.padDate).replace(variablesList.padDate, ' ');

    if(variablesList.dateFormat==3)
        return date.getDate().toString().padStart(2, '0')+variablesList.padDate+date.getMonth().toString().padStart(2, '0')+variablesList.padDate+date.getFullYear();
    
    if(variablesList.dateFormat==4)
        return date.toUTCString().toUpperCase().slice(8,11)+variablesList.padDate+date.getDate().toString().padStart(2, '0')+variablesList.padDate+date.getFullYear();
    
    if(variablesList.dateFormat==5)
        return date.getMonth().toString().padStart(2, '0')+variablesList.padDate+date.getDate().toString().padStart(2, '0')+variablesList.padDate+date.getFullYear();

    if(variablesList.dateFormat==6)
        return date.getFullYear()+variablesList.padDate+date.getMonth().toString().padStart(2, '0')+variablesList.padDate+date.getDate().toString().padStart(2, '0');

    if(variablesList.dateFormat==7)
        return date.getFullYear()+variablesList.padDate+date.getDate().toString().padStart(2, '0')+variablesList.padDate+date.getMonth().toString().padStart(2, '0');
}

/**
 * generates the item surrounded with the desired padding -- this padding depends on the
 * variable "padding", which is customisable
 * @name formatProduct
 * @param {String} item from the string "supermarket"
 * @return {String} item surrounded with the desired padding
 */
function formatProduct(word) {
    word=word.charAt(0).toUpperCase()+word.slice(1);
    let pad=variablesList.padding.repeat((20-word.length)/2);
    let formattedString;

    if(word.length%2==0)
        formattedString=pad+word+pad;
    else
        formattedString=pad+word+pad+variablesList.padding;

    formattedString=formattedString.replace(/ /g, variablesList.padding);

    return formattedString;
}

/**
 * formats the status string adding the desired padding - the padding 
 * depends on the variable "padding", which is customisable
 * @name formatStatus
 * @param {String} status of each item
 * @return {String} the whole string formatted with padding
 */
function formatStatus(word) {
    let pad=variablesList.padding.repeat((11-word.length)/2);
    let formattedString;

    if(word.length%2==0)
        formattedString=pad+word+pad;
    else
        formattedString=pad+word+pad;

    formattedString=formattedString.replace(/ /g, variablesList.padding);

    formattedString = styleCommands.stylePath+formattedString;

    return formattedString;
}

/**
 * @name tableCreator
 * @param
 * Creates a table to the index.html
 */
function tableCreator(){
    let table=document.createElement("table");
    let container=document.querySelector(".container");

    table.className="product-list";
    container.appendChild(table);
}


function genereteOutputConsole(){
    /**
     * @name title
     * @param
     * adds the headers "week of ..." and "filtered" with their own separators
     * to the console output
     */
    function title(){
        if(weeklyOutput==0){
            console.log("Week of "+formattingDate(initialDate));
            console.log("-----------------------------------------------------------");
        }
        else if(weeklyOutput==1){
            console.log("Filtered");
            console.log("--------");
        }
    }

    /**
     * @name formattingOutput
     * @param {void}
     * outputs id number + item name + expiry date + week check 
     */
    function formattingOutput(){

        for(let i=0; i<productsList.length; i++){
            let color;
            if(productsList[i].status=="New")
                color=styleCommands.styleNew;
            else if(productsList[i].status=="Valid")
                color=styleCommands.styleValid;
            else if(productsList[i].status=="Old")
                color=styleCommands.styleOld;
            else if(productsList[i].status=="Expired")
                color=styleCommands.styleExpired;    
            
            console.log(productsList[i].id+": "+formatProduct(productsList[i].name)+" "+formattingDate(productsList[i].expiryDate)+" "+formatStatus(productsList[i].status), color," [ "+productsList[i].countWeek+" checks ]");
        }
    }

    return [title(), formattingOutput()];
}


function genereteOutputHTML(){  
    /**
     * @name titleHtml
     * @param
     * adds the headers "week of ..." and "filtered" with their own separators
     * to the html output
     */
    function titleHtml(){
        let table=document.getElementsByClassName("product-list");
        let leng=(table.length)-1;
        let tr=document.createElement("tr");
        let tr1=document.createElement("tr");
        let week=document.createElement("td");
        let pad=document.createElement("td");
        tr.className+="title-bold";
        tr.className+=" align-left";
        tr1.className+="align-left";

        if(weeklyOutput==0){
            week.textContent+="Week of "+formattingDate(initialDate);
            pad.textContent+="--------------------------------------------------------------";
            week.setAttribute("colspan", 5);
            pad.setAttribute("colspan", 5);

            tr.appendChild(week);
            tr1.appendChild(pad);
            table[leng].appendChild(tr);
            table[leng].appendChild(tr1);
            
        }
        else if(weeklyOutput==1){
            week.textContent+="Filtered";
            pad.textContent+="--------";
            week.setAttribute("colspan", 5);
            pad.setAttribute("colspan", 5);

            tr.appendChild(week);
            tr1.appendChild(pad);
            table[leng].appendChild(tr);
            table[leng].appendChild(tr1);
        }
    }

    /**
     * @name formattingOutputHtml
     * @param
     * outputs id number + item name + expiry date + week check to the HTML
     */
    function formattingOutputHtml(){
        let table=document.getElementsByClassName("product-list");
        let leng=table.length-1;
        let br=document.createElement("br");

        let titleTr=document.createElement("tr");
        let titleId=document.createElement("td");
        let titleName=document.createElement("td");
        let titleExpiry=document.createElement("td");
        let titleStatus=document.createElement("td");
        let titleCheck=document.createElement("td");

        titleId.textContent+="Id";
        titleName.textContent+="Name";
        titleExpiry.textContent+="Expiry";
        titleStatus.textContent+="Status";
        titleCheck.textContent+="Checks";

        titleTr.appendChild(titleId);
        titleTr.appendChild(titleName);
        titleTr.appendChild(titleExpiry);
        titleTr.appendChild(titleStatus);
        titleTr.appendChild(titleCheck);
        titleTr.className+="title-bold";
        table[leng].appendChild(titleTr);

        for(let i=0; i<productsList.length; i++){
            
            let row=document.createElement("tr");
            let id=document.createElement("td");
            let name=document.createElement("td");
            let expiry=document.createElement("td");
            let status=document.createElement("td");
            let check=document.createElement("td");

            id.textContent+=productsList[i].id;
            name.textContent+=formatProduct(productsList[i].name);
            expiry.textContent+=formattingDate(productsList[i].expiryDate);
            status.textContent+=formatStatus(productsList[i].status).slice(2);
            check.textContent+=productsList[i].countWeek+" checks";

            if(productsList[i].status=="New")
            status.className="new";
            else if(productsList[i].status=="Valid")
                status.className="valid";
            else if(productsList[i].status=="Old")
                status.className="old";
            else if(productsList[i].status=="Expired")
                status.className="expired";

            row.appendChild(id);
            row.appendChild(name);
            row.appendChild(expiry);
            row.appendChild(status);
            row.appendChild(check);
            
            table[leng].appendChild(row);
            
        }
    }

    return [titleHtml(), formattingOutputHtml()];


}


/**
 * @name randomTimestamp
 * @param
 * @returns {Number}
 * Prints the outputs every n seconds, n being a casual number between two set numbers 
 */
function randomTimestamp(){
    let rand=Math.floor(Math.random()*variablesList.numSecondsMax+variablesList.numSecondsMin);

    return rand;
}

export { productState, generateProduct, expired, genereteOutputConsole, genereteOutputHTML, randomTimestamp, tableCreator};

