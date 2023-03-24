# THE EXPIRY LIST

## Table of Contents
1. [Exercise Requirement](#exercise-requirement)
2. [Technologies](#technologies)
3. [Author](#author)
4. [License](#license)
5. [Standard Use](#standard-use)
6. [Approach To Solution](#approach-to-solution)

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
Afterwards a for loop starts, which adds a set number of new items. All these items 

## Functionalities
***
