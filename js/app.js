'use strict';
console.log('app is connected.');


function initialize() {
    console.log("in initialize()");
    pleaseAskUsername();
    askAboutFood();
    askAboutColor();
    askAboutAnimal();
    askAboutDrink();
    askAboutCats();
}

function pleaseAskUsername() {
    let user = prompt("What is your name?");
    //console.log(`The name is ${user}`);
    alert(`Welcome ${user}!`);
}

function askAboutFood() {
    let answer = prompt("Do I like Cookies? Respond with Y/N to answer.");
    if (answer === "Y") { 
        //console.log("The user was correct about cookies");
        alert(`Correct! I look all kinds of cookies!`);
    } else if (answer === "N") {
        //console.log("The user was wrong about cookies");
        alert(`Incorrect. I even love fortune cookies!`);
    } else {
        //console.log("The user did not enter a valid response");
        alert(`Did not answer a valid response.`);
    }
}

function askAboutColor() {
    let answer = prompt("Is my favorite color purple. Type Y/N to respond.");
    if (answer === "Y") {
        //console.log("The user guessed correctly about the color")
        alert(`Correct!`);
    } else if (answer === "N") {
        //console.log("The user guessed incorrectly about the color")
        alert(`Incorrect`);        
    } else {
        //console.log("The user did not enter a value response")
        alert(`Did not answer a valid response.`)
    }
}

function askAboutAnimal() {
    let answer = prompt("Are Pandas my favorite Animal? Respond with Y/N.");
    if (answer === "Y") {
        //console.log("The user guessed panda which is correct")
        alert(`Correct`);
    } else if (answer === "N") {
        //console.log("The user guessed incorrectly about the animal")
        alert(`Incorrect'. Pandas are great!`);
    } else {
        //console.log("The user did not enter a valid response")
        alert(`Did not answer a valid response.`);
    }
}

function askAboutDrink() {
    let answer = prompt("Do I enjoy drinking coffee? Type Y/N.");
    if (answer === "Y") {
        //console.log("The user guessed correctly about the coffee")
        alert(`Correct. Its my favorite!!`);
    } else if (answer === "N") {
        //console.log("The user guessed incorrectly about the coffee")
        alert(`Incorrect.I am a coffee stob`);
    } else {
        //console.log("The user did not enter a valid response");
        alert (`Did not answer a valid response..`);
    }
}

function askAboutCats() {
    let answer = prompt("Am I a cat person? Type Y/N.");
    if (answer === "Y") {
        //console.log("The user guessed coreeectly about the cats");
        alert(`Correct! Cats are better than dogs!`);
    } else if (answer === "N") {
        //console.log("The user is incorrect by thinking that I am a dog person");
        alert(`You are wrong! I have 4 cats`);
    } else {
        //console.log("The user does not like cats or dogs");
        alert(`Did not answer a valid response.`);
    }
}
//This code works 


function playGame() {
    let finished = false
    let maxAttempts = 4;
    let goalAnswer = 4
    let currentAttempt = 0
    let question = "How many cats do I have?"
    while(currentAttempt < maxAttempts && !finished) {
    currentAttempt++;
    let answer = prompt("How many cats do I have?")
    let realAnswer = parseInt(answer);
    let output = " ";
    if(realAnswer > goalAnswer) {
        output = "Too high";
    } else if (realAnswer < goalAnswer) {
        output = "Too low";
    } else {
        output = "correct!"
        finished = true
    }
    alert(output)
    }  
}
//end code

//global variables

var pleaseAskUsername;
var userPoints = 0;
var foodILike;


function initialize () {
    console.log(`In initialize()`);
foodILike = ["nachos", "cookies", "chicken", "steak"];
}


function playGame () {
    console.log(`in playGame()`);
    let finished = false;
    let maxAttempts = 6;
    let goalAnswer = foodILike;
    let currentAttempt = 0
    let output = " ";
    let question = "Name one of my favorite foods?"
    while (currentAttempt < maxAttempts && !finished) {
        currentAttempt++;
    let answer = prompt ("Name one of my favorite foods?").toLowerCase();
    let result = "Wrong!";
     if(foodILike.includes(answer)){ 
        userPoints++;
        result= `You have ${userPoints} points.`;
        finished= true
    }

    alert(result);
} //end of while
alert("Favorites: " + foodILike.toString())
}



















