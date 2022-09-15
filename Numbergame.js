var ps = require('prompt-sync');
var prompt = ps();
console.log("yo")
console.log("You have 3 lives to guess")


function Numbergame (){

const random = Math.floor(Math.random() * 10) + 1;
 
 let tries = 2;

 let number;

 while(number !== random) {
    let number = parseInt(prompt("guess the number 1 to 10: "));
    if(number === random) {
        console.log("You guessed correctly!.")
        break;
    } else if (tries === 0) {
    console.log("Your lives are out ")
    break;
    } else {
    console.log("Wrong ")
    tries--;
    }

 }
} Numbergame()