////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
	return move = move || getInput(); 
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    	return move = move || randomPlay(); 
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    	
        var userChoice;
        userChoice = prompt ("Do you choose rock, paper or scissors?");
        var computerChoice;

        computerChoice = Math.random();
        console.log(computerChoice);
        document.write(computerChoice);

        if (computerChoice < 0.34) {
                computerChoice = "rock";
}       else if (computerChoice <= 0.67) {
                computerChoice = "paper";
}       else {computerChoice = "scissors";
}

choice1 = userChoice;
choice2 = computerChoice;

function compare(choice1, choice2) {
    if(choice1 === choice2) {
    return ("The result is a tie!");
    }

    if(choice1 === "rock") {

        if(choice2 === "scissors") {
        return ("rock wins!");
    }
    else {
        return ("paper wins!");
        }

    if (choice1 === "paper") {
        if (choice2 === "rock") {
        return ("paper wins!");
    }

    else {
        return ("scissors wins!");
        }
    } 
    if (choice1 === "scissors") {
        if (choice2 === "rock") {
        return ("rock wins!");
    }

    else {
        return ("scissors wins!");
        }
    } 
}

console.log(compare(choice1,choice2));

	
function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    return [playerWins, computerWins];}
