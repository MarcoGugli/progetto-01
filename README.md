# The Expiry List - Group 4

## Table of contents
1. [Introduction / Project description](#introduction--project-description)
2. [Usage](#usage)
3. [Configuration and technical characteristics](#configuration-and-technical-characteristics)
4. [Files and project structure](#files-and-project-structure)
5. [Features delievered](#features-delivered)
6. [Bonuses delievered](#bonuses-delivered)
7. [Browser compatibility](#browser-compatibility)
8. [License and contact information](#license-and-contact-information)
9. [Authors](#authors)


## Introduction / Project description
***
The objective of this project is to write a program that outputs a list of supermarket goods filtered by status and expiry date.

## Usage 
***
- To change the values of the parameters, please go to the sheet `script/variable.js`. Over there you'll find all the customisable variables. Among these, we find
    - `wantHTMLprint`: you can choose if you want your output printed to the HTML interface by writing "true". By default your output will only be printed to the console.
    - `casualGenerationOfId`: you can choose whether you want the IDs of the items to be casually generated or not. By typig "true", they will be casually generated, if you type "false" then they will be printed in ascending order.
    - `padOfId`: you can choose the length of the ID padding; has to be made of 0s.
    - `weeksOnShelf`: add a numerical value bigger than 0 to determine how many weeks each item will be available on the shelf before being removed.
    - `numNewProducts`: add a numerical value bigger than 0 to determine how many new items will be added to the shelf before each input.
    - `numSecondsMin` and `numSecondsMax`: the minimum and maximum number of seconds that determine the range of seconds in which each output is printed on the console or the HTML screen.
    - `daysUntilNextStamp`: it's the number of days between one output and the other.
    - `padding`: the character that surrounds each item of the output. It can be any character.
    - `dateFormat`: pick a number between 1 and 6 to choose a date format between the suggested ones.
    - `padDate`: pick the padding between each component of the date between "-", "." or "/".

## Configuration and technical characteristics
***
Here you'll find a detailed explanation to every function we have created.
<br>

```javascript
function padNum()
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
 function generate()
```
This function returns a random integer number. The variable `num` is defined and its value is set using the `Math.random()` function, which generates a random number between 0 and 1, which is then multiplied by the expression `variablesList.numNewProducts*variablesList.weeksUntilEnd`.
The `Math.floor()` function is then called on the result of the multiplication to round the number down to the nearest integer.

<br>

```javascript
function productState()
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
function generateName()
```
This function returns a `String` value.
It generates a random name starting from the array `supermarket` declared in the `main.js` sheet.
Using the Math.floor function generates a random number between 0 and the number of items within the `supermarker`string, and then rounds it down if it's a decimal number.
`let randProd=supermarket[n]` assigns the element of the supermarket array at the random index generated in the previous line to a variable called randProd.

<br>

```javascript
function generateExpiry()
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
function generateProduct()
```
This function declares and initialises two variables:
- `let length=productsList.length` uses the length property of an array to transform it into a number value.
- `let sum=productsList.length+variablesList.numNewProducts` sums the length of the array to the number of new products (which is a component of the object variablesList)
Afterwards a for loop starts, which adds a set number of new items.
All these new items are then pushed to the `productsList` array; to each of them other properties are added, such as `id` (from the `padNum` function), `name` (`from the generateName` function), `expiryDate` (from the `generateExpiry` function), and `countWeek` (counter to how many times the item has been seen on the console).

<br>

```javascript
function expired()
```
This function checks if the expiry date of each product on the shelf has passed the current date, or if the product has exceeded the amount of time it can be on display on the shelf. If it has, the product is taken away from the array through the `splice()` method.

<br>

```javascript
function formattingDate(date)
```
This function changes the date format depending on which option the user chooses from the `variablesList.dateFormat` property of the object `variablesList` in the `scripts/variable.js` file. 

<br>

```javascript
function formatProduct(word) 
```
With this function we get the item from the `supermarket` variable printed to to the console with the desired padding, which is chosen by the user from the `script/variable.js` file. 
The padding length around each word depends on the word's length itself, as it has to fill the spaces around the word until it gets to a total length of 20 characters. If the length of the word is even, the padding will be equal on both sides, and if the length of the word is off, then the there will be one more character on the right side.

<br>

```javascript
function formatStatus(word) 
```
The logic in this function is the same of the previous one. The chosen padding is added to the status of each item, until the total length of the string is equal to 11.
The  `stylePath` that can be seen in the `formattedString` variable adds the colour to the status, depending on which one it is. This will be explained later.

<br>

```javascript
function tableCreator()
```
This table modifies the DOM through the `querySelector` in the `.container` class, then adds a class to the table, calling it `product-list`.
The table is then added to the HTML through the `appendChild` method.

<br>

```javascript
function generateOutputConsole()
```
This function prints ID number + item name + expiry date + week check + status to the console, through the `console.log()`.
In addition to this, to each of the statuses of the products is added a variable containing a different colour depending on whether they're new, valid, old or expired.

<br>

```javascript
function generateOutputHTML()
```
Using the same logic of the previous function, this one prints ID number + item name + expiry date + week check + status to the HTML using the DOM manipulation properties and methods.

<br>

```javascript
function randomTimestamp()
```
This function makes each output to be printed every N seconds, N being a random number between the numbers `numSecondsMax` and `numSecondsMin` determined by the user in the `/script/variable.js` file.

<br>

```javascript
function errors()
```
This function considers all the errors a user could make while declaring the variables in the variable.js file and outputs a different message depending on which error was done.
Through this function we also print the error messages to the HTML screen.

## Files and project structure
***
The project is composed by:
- index.html file, which contains the physical structure of the project.
- /css folder that contains
    - errors.css, which stores the stylesheet that appears when the errors are displayed on the screen
    - style.css, the general stylesheet for the project
- /script folder, that contains
    - "errors.js" holds all the possible errors the code could generate, depending on which variables the user inserts. Each of these errors will output a message on the console.
    - "function.js" holds all the functions we have created and used in this project.
    - "variable.js" holds and objects that stores all the variables that can be customised by the user. In a separate object we can find all the non-customisable variables.
    - "main.js" holds all the variables, errors and functions, linked or imported from the other files.

## Features delivered
***
This project has all the basic requirements requested, such as:
- giving a random ID to each of the items
- all the items after being printed once all together, will be printed filtered by status if they're New or Valid
- all the variables are customisable

## Bonuses delivered
***
The bonuses delievered are the following:
- we created a function and two variables that could store an amount of time between one output and the following one
- the statuses both in the console and on the screen are coloured
- the set a variable and a function that could have the user choose the format of the date from a range of options. The user can also choose the padding between each component of the date.

## Browser compatibility
***
We have tested the program on the following browsers, and the program has proven to be fully compatible with them:
- Google Chrome
- Safari
- Opera
- Microsoft Edge
- Firefox

## License and contact information
***
CC By Attribution  
You are free to:  
Share — copy and redistribute the material in any medium or format  
Adapt — remix, transform, and build upon the material for any purpose, even commercially.  
The licensor cannot revoke these freedoms as long as you follow the license terms.

## Authors
***
Marco Guglielmino <br>
marco.guglielmino@edu.itspiemonte.it <br>
Frontend Developer

Valeria Cerutti <br>
valeria.cerutti@edu.itspiemonte.it<br>
Frontend Developer

Luca Laterza <br>
luca.laterza@edu.itspiemonte.it<br>
Frontend Developer

Lorenzo Garnero <br>
lorenzo.garnero@edu.itspiemonte.it<br>
Frontend Developer
