var ps = require('prompt-sync');
var prompt = ps();

let number = prompt("Guess number: ")

const random = Math.floor(Math.random() * 100) + 1;

if(number>random){
    let number = prompt("Try lower: ")
}
if(number<random){
    let number = prompt("Try higher: ")
}

else(number=random)
    console.log("You guessed correctly!")
