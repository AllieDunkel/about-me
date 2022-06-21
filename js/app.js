'use strict';
console.log('app is connected.');

function user (){
    let user = prompt("What is your name?");
    //console.log(`The name is ${user}`);
    alert(`Welcome ${user}!`);
}
user();

function food() {
    let answer = prompt("Do you like Cookies? Respond with Y/N to answer.");
    if (answer === "Y") { 
        //console.log("The user likes cookies");
        alert(`Me too!!!`);
    } else if (answer === "N") {
        //console.log("The user does not like cookies");
        alert(`That's to bad!`);
    } else {
        //console.log("The user did not enter a valid response");
        alert(`Incorrect. Try Again.`);
    }
}
food();

function color (){
    let answer = prompt("Is your favorite color purple. Type Y/N to respond.");
    if (answer === "Y") {
        //console.log("The user like the color purple")
        alert(`Me too!`);
    } else if (answer === "N") {
        //console.log("The user does not like the color purple")
        alert(`That's Okay!`);        
    } else {
        //console.log("The user did not enter a value response")
        alert(`Incorrect. Try Again.`)
    }
}
color();

function animal (){
    let answer = prompt("Are Pandas your favorite Animal? Respond with Y/N.");
    if (answer === "Y") {
        //console.log("The user favorite animal is a panda")
        alert(`So it mine!!!`);
    } else if (answer === "N") {
        //console.log("The users has a different favorite animal")
        alert(`That alright. All animals are great!`);
    } else {
        //console.log("The user did not enter a valid response")
        alert(`Incorrect. Try Again.`);
    }
}
animal();

function drink () {
    let answer = prompt("Do you enjoy drinking coffee? Type Y/N to answer");
    if (answer === "Y") {
        //console.log("The user enjoys drinking coffee")
        alert(`Its my favorite!!`);
    } else if (answer === "N") {
        //console.log("The user does not like drinking coffee")
        alert(`There are plenty of other great drinks out there`);
    } else {
        //console.log("The user did not enter a valid response");
        alert (`Incorrect. Try Again.`);
    }
}
drink();

function cats () {
    let answer = prompt("Are you a cat person? Type Y/N to respond");
    if (answer === "Y") {
        //console.log("The user is a cat person");
        alert(`Correct! Cats are better than dogs!`);
    } else if (answer === "N") {
        //console.log("The user is a dog person");
        alert(`You are wrong! Cats are better than dogs`);
    } else {
        //console.log("The user does not like cats or dogs");
        alert(`Try Again!`);
    }
}

cats();
