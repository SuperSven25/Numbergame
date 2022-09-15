var ps = require('prompt-sync');
var prompt = ps();


function Numbergame ()

const random = Math.floor(Math.random() * 10) + 1;
 
 let tries = 3

 let number;
 while(number !== random){
    let number=parseInt(prompt("guess the number 1 to 10: "))
    if(number==random){
        console.log("You guessed correctly!")
        break
 } else if (number<random){
    let number=parseInt(prompt("Try higher: "))
 }else {
    let number=parseInt(prompt("Try lower: "))
    break
 }

 
}


