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

## Approach To Solution
***
### 10/03
We decided to store all the variables the supermarket manager could customise in an object with different properties. In a separate section, we also created an array containaing some of the items a supermarked should have in stock. Each kind of these variables will be subsequently stored into separate files, so that the user will know which variables will be editable and which ones will not.
The third section you will encounter holds all the functions we're creating. This section will be then moved to a third .js sheet which will hold all the functions. 

The functions we've implemented so far:
```javascript
function padNum(){
    let num=Math.floor(Math.random()*99+0)

    if(num<=9)
        return "00"+num;
    
    return "0"+num;
}
```

This function generates the ID number of every product

***

```javascript
function productState(){
    //array contenente gli stati degli articoli
    let itemStatus = ['new', 'valid', 'old', 'expired']
    
    for(let i=0; i<productsList.length; i++){
        
    }
}
```

This functions adds a status to an item

***

```javascript
function generateName(){
    let n=Math.floor(Math.random()*29+0);

    let randProd=supermarket[n];

    return randProd;
}
```

This function generates a product name randomly from the array called "supermarket"

***

```javascript
function generateExpiry(){
    let startDate = new Date("2023-03-15"); 
    let endDate = new Date("2023-05-15");
    let randomDate = new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime())+0);
    return randomDate;
}
```

This function generates a random expiry date

***

```javascript
function generateProduct(){
    let length=productsList.length;
    let sum=productsList.length+variablesList.numNewProducts;

    for(let i=length; i<sum; i++){
        let product={
            id: padNum(),
            name: generateName(),
            date: generateExpiry()
        };

        productsList.push(product);
    }
} 
```

This function generates which items will be added on the shelf on the current week

***

```javascript
function expired(){
    let d=new Date("29-MAR-2023");
    
    for(let i=0; i<productsList.length; i++){

        if(productsList[i].date<d){
            productsList.splice(i,1);
            i--;
        }
    }
}
```

This function checks which items are expired

***

```javascript
function formattingDate(date){
    return date.toUTCString().toUpperCase().slice(5,16).replace(/ /g,'-')
}
```

This function formats the date

***

```javascript
function formatString(word) {
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

This function formats the string adding the desired padding

***
### 11/03 UPDATES 
<br>
We updated the following function:

```javascript
function padNum(){
    let accepted=false;
    let n;
    
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
   
    if(n<=9)
        return "00"+n;
    
    return "0"+n; 
}
```

This function now takes the number of products added each weeks and multiplies it for the number of weeks the program runs