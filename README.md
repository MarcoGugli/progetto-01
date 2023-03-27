# THE EXPIRY LIST

## Table of Contents
1. [Exercise Requirement](#exercise-requirement)
2. [Technologies](#technologies)
3. [Author](#author)
4. [License](#license)
5. [Standard Use](#standard-use)
6. [Approach To Solution](#approach-to-solution)
7. [Functionalities](#functionalities)

## Exercise Requirement
***
Write a javascript program that outputs a list of supermarket goods filtered by expiry date.

## Technologies
***
Javascript, HTML, CSS

## Author
***
Authors: Marco Guglielmino, Valeria Cerutti, Luca Laterza, Lorenzo Garnero
Contact Information: marco.guglielmino@edu.itspiemonte.it, valeria.cerutti@edu.itspiemonte.it, luca.laterza@edu.itspiemonte.it, lorenzo.garnero@edu.itspiemonte.it
Roles: Frontend Developers

## License
***
CC By Attribution  
You are free to:  
Share — copy and redistribute the material in any medium or format  
Adapt — remix, transform, and build upon the material for any purpose, even commercially.  
The licensor cannot revoke these freedoms as long as you follow the license terms.

## Standard Used
***
Variables: camelCase
Files and Folder: kebab-case

## Approach to Solution
***

### <u>Data Management</u>
Under the folder /script you will find several .js files. Here I'll explain how each of them works and what kind of data they hold.
- "errors.js" holds all the possible errors the code could generate, depending on which variables the user inserts. Each of these errors will output a message on the console.
- "function.js" holds all the functions we have created and used in this project.
- "variable.js" holds and objects that stores all the variables that can be customised by the user.
- "main.js" holds all the variables, errors and functions, linked or imported from the other files.
## Approach To Solution

### <u>Testing</u>
We have tested the code on Chrome, Opera, Edge, Firefox and Safari, and it's fully functional. The Windows emojis added to the code are seamlessly translated to the MacOS.

### <u>Functions</u>
Here you'll find a detailed explanation to every function we have created.
<br> <br>

```javascript
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
```
This function takes no arguments; two variables are declared: 
- `accepted` is a boolean that indicates wheter an acceptable ID has been generated
- `n` is the ID number <br>
If `variablesList.casualGenerationOfId` is false, the function adds the length of productsList to n.
If variablesList.casualGenerationOfId is true, the function `generate()`will be invoked.
The function enters a while loop that keeps running until an acceptable random number is generated (acceptable = unique); this new ID number will be stored into the array `usedId` through the `push` property.
The function returns he ID number as a string padded with zeros on the left to a length specified by `variablesList.padOfId`.

<br>

```javascript
 function generate(){
            let num=Math.floor(Math.random()*(variablesList.numNewProducts*variablesList.weeksUntilEnd)+0);
    
            return num;
        }
```
This function returns a random integer number. The variable `num` is defined and its value is set using the `Math.random()` function, which generates a random number between 0 and 1, which is then multiplied by the expression `variablesList.numNewProducts*variablesList.weeksUntilEnd`.
The `Math.floor()` function is then called on the result of the multiplication to round the number down to the nearest integer.

<br>

```javascript
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
```
This function assigns statuses to the items contained in the variable `supermarket`.
Two variables are declared:
- `itemStatus = ['New', 'Valid', 'Old', 'Expired']`:  array which contains four strings that represent the statuses that will later be assigned to the items.
- `d=new Date(initialDate)`: creates a new Date object called d and initializes it with the value of initialDate. <br>
The for loop iterates through each item in `productsList`. Whithin this for loop there are some conditions:
- `if(productsList[i].countWeek==1)`checks if the `countWeek` property of the current item is equal to 0. If it is, the status of the item is set to `New`;
- `if(productsList[i].countWeek==1)`checks if the `countWeek` property of the current item is equal to 1. If it is, the status of the item is set to `Valid`;
- `if(productsList[i].countWeek == variablesList.weeksOnShelf` checks if the countWeek property of the current product is equal to the value of `weeksOnShelf`. If it is, the status of the product is set to `Old`.
- `if(productsList[i].expiryDate<d)` checks if the expiryDate property of the current product is less than the `d` date object created earlier in the code. If it is, the status of the product is set to `Expired`. <br>
Once all the statuses are assigned to the products, the function ends.

<br>

```javascript
function generateName(){
    let n=Math.floor(Math.random()*supermarket.length+0);

    let randProd=supermarket[n];

    return randProd;
}
```
This function returns a `String` value.
It generates a random name starting from the array `supermarket` declared in the `main.js` sheet.
Using the Math.floor function generates a random number between 0 and the number of items within the `supermarker`string, and then rounds it down if it's a decimal number.
`let randProd=supermarket[n]` assigns the element of the supermarket array at the random index generated in the previous line to a variable called randProd.

<br>

```javascript
function generateExpiry(){
    let startDate = new Date(initialDate);
    let endDate = new Date(startDate); 
    endDate.setMonth(endDate.getMonth()+1);
    
    let randomDate = new Date(startDate.getTime() + Math.random()*(endDate.getTime() - startDate.getTime())+0);
    
    return randomDate;
} 
```
This function returns a random `Date` object. 
Two variables are declared and initilised at the beginning:
- `let startDate = new Date(initialDate)` sets a starting date
- `let endDate = new Date(startDate)` sets a final date
It also increments the month of a date object by 1 using `endDate.setMonth(endDate.getMonth()+1)`.
Finally, one more variable is declared and initialised:
- `let randomDate = new Date(startDate.getTime() + Math.random()*(endDate.getTime() - startDate.getTime())+0)` calculates a casual date between the starting date and the ending date declared earlier.

<br>

```javascript
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
```
This function declares and initialises two variables:
- `let length=productsList.length` uses the length property of an array to transform it into a number value.
- `let sum=productsList.length+variablesList.numNewProducts` sums the length of the array to the number of new products (which is a component of the object variablesList)
Afterwards a for loop starts, which adds a set number of new items.
All these new items are then pushed to the `productsList` array; to each of them other properties are added, such as `id` (from the `padNum` function), `name` (`from the generateName` function), `expiryDate` (from the `generateExpiry` function), and `countWeek` (counter to how many times the item has been seen on the console).

<br>

```javascript
function expired(){
    let d=new Date(initialDate);
    
    for(let i=0; i<productsList.length; i++){

        if(productsList[i].expiryDate<=d||productsList[i].countWeek>=variablesList.weeksOnShelf){
            productsList.splice(i,1);
            i--;
        }
    }
}
```
This function checks if the expiry date of each product on the shelf has passed the current date, or if the product has exceeded the amount of time it can be on display on the shelf. If it has, the product is taken away from the array through the `splice()` method.

<br>

```javascript
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
```
This function changes the date format depending on which option the user chooses from the `variablesList.dateFormat` property of the object `variablesList` in the `scripts/variable.js` file. 

<br>

```javascript
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
```
With this function we get the item from the `supermarket` variable printed to to the console with the desired padding, which is chosen by the user from the `script/variable.js` file. 
The padding length around each word depends on the word's length itself, as it has to fill the spaces around the word until it gets to a total length of 20 characters. If the length of the word is even, the padding will be equal on both sides, and if the length of the word is off, then the there will be one more character on the right side.

<br>

```javascript
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
```
The logic in this function is the same of the previous one. The chosen padding is added to the status of each item, until the total length of the string is equal to 11.
The  `stylePath` that can be seen in the `formattedString` variable adds the colour to the status, depending on which one it is. This will be explained later.

<br>

```javascript
function tableCreator(){
    let table=document.createElement("table");
    let container=document.querySelector(".container");

    table.className="product-list";
    container.appendChild(table);
}
```
This table modifies the DOM through the `querySelector` in the `.container` class, then adds a class to the table, calling it `product-list`.
The table is then added to the HTML through the `appendChild` method.

<br>

```javascript
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
```
Adds a different output to the console depending on whether the `weeklyOuput` has already been printed to the console or not.
If it's the first occurrency, then the `weeklyOuput` will be equal to 0, and if it's the second occurrency, the `weeklyOutput` will be set to 1.

<br>

```javascript
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
```
As the previous function, this function adds the headers "Week of..." and "Filtered" with their padding to the HTML output through the DOM manipulation methods.

<br>

```javascript
function formattingOutput(){
    
    for(let i=0; i<productsList.length; i++){
        let color;
        if(productsList[i].status=="New")
            color=styleCommands.styleGreen;
        else if(productsList[i].status=="Valid")
            color=styleCommands.styleYellow;
        else if(productsList[i].status=="Old")
            color=styleCommands.styleOrange;
        else if(productsList[i].status=="Expired")
            color=styleCommands.styleRed;    
        
        console.log(productsList[i].id+": "+formatProduct(productsList[i].name)+" "+formattingDate(productsList[i].expiryDate)+" "+formatStatus(productsList[i].status), color," [ "+productsList[i].countWeek+" checks ]");
    }
}
```
This function prints ID number + item name + expiry date + week check + status to the console, through the `console.log()`.
In addition to this, to each of the statuses of the products is added a variable containing a different colour depending on whether they're new, valid, old or expired.

<br>

```javascript
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
```
Using the same logic of the previous function, this one prints ID number + item name + expiry date + week check + status to the HTML using the DOM manipulation properties and methods.

<br>

```javascript
function randomTimestamp(){
    let rand=Math.floor(Math.random()*variablesList.numSecondsMax+variablesList.numSecondsMin);

    return rand;
}
```
This function makes each output to be printed every N seconds, N being a random number between the numbers `numSecondsMax` and `numSecondsMin` determined by the user in the `/script/variable.js` file.

<br>

```javascript
function errors(){

    //management of variable casualGenerationOfId errors

    if(variablesList.casualGenerationOfId != false && variablesList.casualGenerationOfId != true){

        console.log(styleCommands.stylePath+"⛔'casualGeneration' can be only a boolean value.", styleCommands.styleExpired);

        cont=1;
    }

    //management of variable padOfId errors

    if(typeof(variablesList.padOfId) != 'string'){

        console.log(styleCommands.stylePath+"⛔'paddingOfId' can be only a string.", styleCommands.styleExpired);

        cont=1;
    }

    if((variablesList.numNewProducts*variablesList.weeksUntilEnd).toString().length>variablesList.padOfId.length){
        
        console.log(styleCommands.stylePath+"⛔ The number of products to insert exceeds the maximum capacity of the ids", styleCommands.styleExpired);
           
        cont=1;
    }

    // managment of variable weekOnShelf

    if(variablesList.weeksOnShelf <= 1 || typeof(variablesList.weeksOnShelf) == 'string'){

        console.log(styleCommands.stylePath+"⛔The number of weeks can't be lower than 1 or a string.", styleCommands.styleExpired);

        cont=1;
    }

    // managment of variable numNewproducts

    if(variablesList.numNewProducts <= 0 || typeof(variablesList.numNewProducts) == 'string'){

        console.log(styleCommands.stylePath+"⛔The number of new products added to the shelf has to be at least 1 or a string.", styleCommands.styleExpired);

        cont=1;
    }

    //managment of variable numSecondsMin and numSeconds Max

    if((variablesList.numSecondsMin < 0 || typeof(variablesList.numSecondsMin) == 'string') || (variablesList.numSecondsMax < 0 && typeof(variablesList.numSecondsMax) == 'string')){

        if(variablesList.numSecondsMin > variablesList.numSecondsMax){

            console.log(styleCommands.stylePath+"⛔The minor delay can't be higher than greater delay.", styleCommands.styleExpired);

            cont=1;
        }
        else
        {

            console.log(styleCommands.stylePath+"⛔Delay value is incorrect!.", styleCommands.styleExpired);

            cont=1;
        }

    }

    // managment of variable weeksUntilEnd

    if(variablesList.weeksUntilEnd < 1 || typeof(variablesList.weeksUntilEnd) == 'string'){

        console.log(styleCommands.stylePath+"⛔'weeksUntilEnd' value is incorrect!.", styleCommands.styleExpired);

        cont=1;
    }

    // managment of variable daysSinceToday

    if(typeof(variablesList.daysSinceToday) == 'string'){

        console.log(styleCommands.stylePath+"⛔'daysSinceToday' is must to be a number!", styleCommands.styleExpired);

        cont=1;
    }

    // managment of variable daysUntilNextStamp

    if(variablesList.daysUntilNextStamp < 1 && typeof(variablesList.daysUntilNextStamp) == 'string'){

        console.log(styleCommands.stylePath+"⛔'daysUntilNextStamp' value is incorrect!", styleCommands.styleExpired);

        cont=1;
    }

    // managment of variable padding


    if(typeof(variablesList.padding) != 'string' && variablesList.padding.length > 1){

        console.log(styleCommands.stylePath+"⛔'padding' value is incorrect!.", styleCommands.styleExpired);

        cont=1;
    }

    // managment of date format

    if(variablesList.dateFormat <1 && variablesList.dateFormat >6 || typeof(variablesList.numNewProducts) == 'string'){

        console.log(styleCommands.stylePath+"⛔The number of format date has to be between 1 and 6!", styleCommands.styleExpired);

        cont=1;
    }

    if(variablesList.padDate != "-" && variablesList.padDate != "." && variablesList.padDate != "/") {

        console.log(styleCommands.stylePath+"⛔You must choose a character between the ones suggested.", styleCommands.styleExpired);

        cont=1;
    }

    if(cont==1){
        setTimeout(function(){
            clearTimeout(time);
        },500); 
    }
}
```
This function considers all the errors a user could make while declaring the variables in the variable.js file and outputs a different message depending on which error was done.
The possible errors are:
- inserting a not boolean value in the variable `casualGenerationOfId`
- inserting a value whose `typeof` is different than `string` in the `padOfId` variables
- the number of products multiplied by the total number of IDs that can be generated exceeds the total number of IDs that can be generated
- the `weeksOnShelf` variable is less than 1 or its `typeof` is a  string type
- the `numNewProducts` variable is less than 0 or its `typeof` is a string type
- the value to the `numSecondsMin` and `numSecondsMax` variables are less than 0 and its `typeof` is a string type; moreover, the `numSecondsMin` has to be smaller than the `numSecondsMax` value
- the value of `weeksUntilEnd` is less than 1 or its `typeof` is a string
- 
## Functionalities
***

- To change the values of the parameters, please go to the sheet `script/variable.js`. Over there you'll find all the customisable variables. Among these, we find
    - `wantHTMLprint`: you can choose if you want your output printed to the HTML interface by writing "true". By default your output will only be printed to the console.
    - `casualGenerationOfId`: you can choose whether you want the IDs of the items to be casually generated or not. By typig "true", they will be casually generated, if you type "false" then they will be printed in ascending order.
    - `padOfId`: you can choose the length of the ID padding; has to be made of 0s.
    - `weeksOnShelf`: add a numerical value bigger than 0 to determine how many weeks each item will be available on the shelf before being removed.
    - `numNewProducts`: add a numerical value bigger than 0 to determine how many new items will be added to the shelf before each input.
    - `numSecondsMin`: