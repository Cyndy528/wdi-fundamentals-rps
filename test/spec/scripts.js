var userChoice = prompt("Do you choose Rock, Paper, Scissors or Rope?");
var computerChoice = Math.random();

if (computerChoice <= 0.24) {
    computerChoice = "Rock";
} else if (computerChoice > 0.24 && computerChoice <= 0.50) {
    computerChoice = "Paper";
} else if (computerChoice > 0.50 && computerChoice <= 0.75) {
    computerChoice = "Scissors";
} else {
    computerChoice = "Rope";
}

console.log("Computer choose: " + computerChoice);

var compare = function(choice1, choice2) {
    if (choice1 === choice2) {
        return userChoice = prompt("The result is a tie!\nPlease make a new choice...");
    }
    
    if (choice1 === "Rock") {
        if (choice2 === "Paper") {
            return "Paper Wins!";
        } else if (choice2 === "Scissors") {
            return "Rock Wins!";
        } else {
            return "Rope Wins!";
        }
    }

    if (choice1 === "Paper") {
        if (choice2 === "Rock") {
            return "Rock Wins!";
        } else if (choice2 === "Scissors") {
            return "Scissors Wins!";
        } else {
            return "Rope Wins!";
        }
    }

    if (choice1 === "Scissors") {
        if (choice2 === "Rock") {
            return "Rock Wins!";
        } else if (choice2 === "Paper") {
            return "Scissors Wins!";
        } else {
            return "Scissors Wins!";
        }
    }

    if (choice1 === "Rope") {
        if (choice2 === "Rock") {
            return "Rope Wins!";
        } else if (choice2 === "Paper") {
            return "Rope Wins!";
        } else {
            return "Scissors Wins!";
        }
    }
};

compare(userChoice,computerChoice);