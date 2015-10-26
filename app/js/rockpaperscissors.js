////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
function getInput() {
   console.log("Please choose either 'rock', 'paper', or 'scissors'.");
   var answer = prompt();
   return answer;
}

function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return 'rock';
    } else if (randomNumber < 0.66) {
        return 'paper';
    } else {
        return 'scissors';
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.

        if (move !== null) {
            move = move;  
        }  
        else {
            move = getInput();
        }               
                        
        return move;
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
        if (move !== null){
            move = move;    
        }
        else { 
            move = randomPlay();
        }

    console.log("Computer Chose" + move);
    return move;

} 

function getWinner(playerMove,computerMove) {
        
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    if (playerMove == "rock" && computerMove == "paper"){ 
        winner = "computer";
        console.log("Computer Wins!"); 
    }                      

	else if(playerMove == "paper" && computerMove == "rock"){
        winner = "player";
        console.log("Player Wins!"); 
    }
    else if(playerMove == "paper" && computerMove == "scissors"){
        winner = "computer";
        console.log("Computer Wins!");  
    }
    else if(playerMove == "scissors" && computerMove == "paper"){
        winner = "player";
        console.log("Player Wins!"); 
    }
    else if(playerMove == "scissors" && computerMove == "rock"){
        winner = "computer";
        console.log("Computer Wins!"); 
    }
    else if(playerMove == "rock" && computerMove == "scissors"){
        winner = "player";
        console.log("Player Wins!"); 
    }
    else{
        winner = "tie";
        console.log("It's a tie!");
    }
    return winner; 
    }
 

function playToFive(){
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
   // This function should continue to play Rock Paper Scissors until either the
  // player or the computer has won five times.
  // After each 'round', display some text in the console indicating who played
  // what, who won, and what the current scoreboard looks like.
  // For example,
  //  console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
  //  console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
  /* YOUR CODE HERE */
    while (playerWins < 5 && computerWins < 5){
        var winner = getWinner(getPlayerMove(), getComputerMove());

        if (winner == "player"){
            playerWins++;
            console.log([playerWins, computerWins]); 
        }
        else if (winner == "computer"){
            computerWins++; 
            console.log([playerWins, computerWins]); 
        }
        else{
            console.log("Score is the same"); 
        }
    }
        if(playerWins == 5){
            console.log("Player Wins Game!");    
        }
        else {
            console.log("Computer Wins Game!"); 
        }
        return [playerWins, computerWins]; 
  }

 



