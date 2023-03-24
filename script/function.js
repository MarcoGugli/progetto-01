import { variablesList } from "./variable.js";
import {supermarket, initialDate, t, productsList, usedId} from "./main.js"

/**
 * adds the 0-padding to the ID code of each item. this function also checks that every new item has a 
 * different ID number.
 * @name padNum
 * @param {void} void
 * @return {String}
 */
function padNum(){
    let accepted=false;
    let n=0;

    if(variablesList.casualGenerationOfId==false){
       n+=productsList.length;
    }
    else if(variablesList.casualGenerationOfId==true){
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
 * @param {void} void
 * @return {String}
 */
function productState(){
    //array contenente gli stati degli articoli
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
    return date.toUTCString().toUpperCase().slice(5,16).replace(/ /g,'-')
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


//funzione che formatta la stringa dello status aggiungendo il padding desiderato
/**
 * formats the status string adding the desired padding - the padding 
 * depends on the variable "padding", which is customisable
 * @name formatStatus
 * @param {String} the status of each item
 * @return {String} the whole string formatted with padding
 */
function formatStatus(word) {
    let pad=variablesList.padding.repeat((10-word.length)/2);
    let formattedString;

    if(word.length%2==0)
        formattedString=pad+word+pad;
    else
        formattedString=pad+word+pad+variablesList.padding;

    formattedString=formattedString.replace(/ /g, variablesList.padding);

    return formattedString;
}

function title(){
    if(t==0){
        console.log("Week of "+formattingDate(initialDate));
        console.log("-----------------------------------------------------------");
    }
    else if(t==1){
        console.log("Filtered");
        console.log("--------");
    }
}

function titleHtml(){
    let table=document.getElementById("product-list");
    let tr=document.createElement("tr");
    let tr1=document.createElement("tr");
    let week=document.createElement("td");
    let pad=document.createElement("td");
    tr.className+="title-bold";
    tr.className+=" align-left";
    tr1.className+="align-left";

    if(t==0){
        week.textContent+="Week of "+formattingDate(initialDate);
        pad.textContent+="--------------------------------------------------------------";
        week.setAttribute("colspan", 5);
        pad.setAttribute("colspan", 5);

        tr.appendChild(week);
        tr1.appendChild(pad);
        table.appendChild(tr);
        table.appendChild(tr1);
        
    }
    else if(t==1){
        week.textContent+="Filtered";
        pad.textContent+="--------";
        week.setAttribute("colspan", 5);
        pad.setAttribute("colspan", 5);

        tr.appendChild(week);
        tr1.appendChild(pad);
        table.appendChild(tr);
        table.appendChild(tr1);
    }
}




/**
 * outputs id number + item name + expiry date + week check 
 * @name formattingOutput
 * @param {void}
 */
function formattingOutput(){
    
    //questo console log ha il colore modificabile (vedere fondo linea)
    for(let i=0; i<productsList.length; i++){
        console.log(productsList[i].id+": "+formatProduct(productsList[i].name)+" "+formattingDate(productsList[i].expiryDate)+" "+formatStatus(productsList[i].status)+" [ "+productsList[i].countWeek+" checks ]");
    }
}


function formattingOutputHtml(){
    let table=document.getElementById("product-list");
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
    table.appendChild(titleTr);

    for(let i=0; i<productsList.length; i++){
        let tr=document.createElement("tr");
        let id=document.createElement("td");
        let name=document.createElement("td");
        let expiry=document.createElement("td");
        let status=document.createElement("td");
        let check=document.createElement("td");

        id.textContent+=productsList[i].id;
        name.textContent+=formatProduct(productsList[i].name);
        expiry.textContent+=formattingDate(productsList[i].expiryDate);
        status.textContent+=formatStatus(productsList[i].status);
        check.textContent+=productsList[i].countWeek+" checks";
        
        tr.appendChild(id);
        tr.appendChild(name);
        tr.appendChild(expiry);
        tr.appendChild(status);
        tr.appendChild(check);
        
        table.appendChild(tr);
        

    }
    table.appendChild(br);
    table.appendChild(br);
}


function randomTimestamp(){
    let rand=Math.floor(Math.random()*variablesList.numSecondsMax+variablesList.numSecondsMin);

    return rand;
}

function deleteAll(){
    document.getElementById("product-list").textContent = "";
}


export {padNum, productState, generateName, generateExpiry, generateProduct, expired, formattingDate, formatProduct,
    formatStatus, title, titleHtml, formattingOutput, formattingOutputHtml, randomTimestamp, deleteAll};