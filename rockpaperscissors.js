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
    var move;
       if (move != null){
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
   
    var move;
       if (move != null){
	   move = move;
       }
       else {
	   move = randomPlay();
       }
    return move;
}

function getWinner(playerMove,computerMove) {
    // There are 6 different possible outcomes that are possible
    // with one clear winner. All outcome are listed in an if else
    // statement. If none of the conditions are met, then the game
    // will result in a tie.
   
    var winner;
       if (playerMove == "rock" && computerMove == "paper"){
         winner = "computer"
         console.log("Computer Wins");
     }
        else if(playerMove == "rock" && computerMove == "scissors"){
         winner = "player"
         console.log("Player Wins");
     }
        else if(playerMove == "paper" && computerMove == "scissors"){
         winner = "computer"
         console.log("Computer Wins");
     }
        else if(playerMove == "paper" && computerMove == "rock"){
         winner = "player"
         console.log("Player Wins");
     }
        else if(playerMove == "scissors" && computerMove == "rock"){
         winner = "computer"
         console.log("Computer Wins");
     }
        else if(playerMove == "scissors" && computerMove == "paper"){
         winner = "player"
         console.log("Player Wins");
     }
        else{
         winner = "tie"
         console.log("Tie Game");
     }
    return winner;
}

function playToFive() {
    // If statement will run until condition value  exceeds
    // 4 wins for either player or computer. If the players
    // win count is equal to 5, the player wins. If not,
    // the computer wins.

    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
        if (playerWins < 5 && computerWins < 5){
	var winner = getWinner(getPlayerMove(), getComputerMove(); 
	   if (winner == "player"){
	       playerWins + 1;
               console.log(["Player has won "playerWins, "Computer has won "computerWins];
	   }
	   else {
	       computerWins + 1;
               console.log(["Player has won "playerWins, "Computer has won" computerWIns];
	   }
	  }
	   if (playerWins == 5){
	       console.log("Player has won");
	       }
	   else 
	       console.log("Computer has won");
	   }
	 return [playerWins, computerWins];
}

