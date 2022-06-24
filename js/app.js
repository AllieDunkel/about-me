'use strict';
console.log('app is connected.');


function initialize () {
    console.log(`In initialize()`);
}
// /**
//  * Global Variables
//  */
let increaseScore= 0;
var pleaseAskUsername;
var foodILike;

function playGame01() {
    let user = prompt("What is your name?");
    //console.log(`The name is ${user}`);
    alert(`Welcome ${user}!`);}


function playGame02(){
    let questions=[
        ["Do I like Cookies? Respond with Y/N to answer.", "Y"],
        ["Is my favorite color red. Type Y/N to respond.", "N"],
        ["Are Pandas my favorite Animal? Respond with Y/N.", "Y"],
        ["Do I enjoy drinking soda? Type Y/N.", "N"],
        ["Am I a cat person? Type Y/N.", "Y"]
    ];

    for(let i=0; i < questions.length; i++) {

        let userQuestion = prompt(questions[i][0]).toUpperCase();
        console.log('is this in lower case?',userQuestion);

        if(userQuestion === questions[i][1]){
        increaseScore++;
        alert('Correct! You have ' + increaseScore + ' points!');

        console.log('correct')
        }else {
        alert('Incorrect!');
        console.log('incorrect');
       }
    }

}

function playGame03() {
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
        increaseScore++;
        output = `Correct! You have ${increaseScore} points.`
        finished = true

    }
    alert(output)
    }  
    }

// end code

function initialize () {
    console.log(`In initialize()`);
foodILike = ["nachos", "cookies", "chicken", "steak"];
}

function playGame04 () {
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
        increaseScore++;
        result= `You have ${increaseScore} points.`;
        finished= true
    }

    alert(result);
} //end of while
let foodstring = "";
let comma= "";
for (let index = 0; index < foodILike.length; index++) {
    foodstring+= comma + foodILike[index];
    comma= ", "
    
}
alert("Favorites: " + foodstring)
}

function playGame() {
    playGame01();
    playGame02();
    playGame03();
    playGame04();
}

















