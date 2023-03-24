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
### Data management 
Under the folder /script you will find several .js files. Here I'll explain how each of them works and what kind of data they hold.
<li> "errors.js" holds all the possible errors the code could generate, depending on which variables the user inserts. Each of these errors will output a message on the console.
<li> "function.js" holds all the functions we have created and used in this project.
<li> "variable.js" holds and objects that stores all the variables that can be customised by the user.
<li> "main.js" holds all the variables, errors and functions, linked or imported from the other files. 

### Testing
We have tested the code on Chrome, Opera, Edge, Firefox and Safari, and it's fully functional. The Windows emojis added to the code are seamlessly translated to the MacOS.

### Functions
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
This function takes no arguments; inside of it there are declared two variables, 