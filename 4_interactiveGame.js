let playGame = confirm("Shall we play rock, paper and scissors?");
if (playGame) {
  // play the game
  let playerChoice = prompt("Please enter rock, paper or scissors.");
  if (playerChoice) {
    // begin play
    let playerOne = playerChoice.trim().toLowerCase();
    if (
      playerOne === "rock" ||
      playerOne === "paper" ||
      playerOne === "scissors"
    ) {
      let computerChoice = Math.floor(Math.random() * 3 + 1);
      let computer =
        computerChoice === 1
          ? "rock"
          : computerChoice === 2
          ? "paper"
          : "scissors";

      let gameResult =
        playerOne === computer
          ? "tie game"
          : playerOne === "rock" && computer === "paper"
          ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
          : playerOne === "paper" && computer === "scissors"
          ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
          : playerOne === "scissors" && computer === "rock"
          ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
          : `playerOne: ${playerOne}\nComputer: ${computer}\nPlayerOne wins!`;
      alert(gameResult);
      let playAgain = confirm("Play Again?");
      playAgain ? location.reload() : alert("Ok, thanks for playing");
    } else {
      alert("You didn't enter rock, paper or scissors.");
    }
  } else {
    alert("I guess you changed your time. Maybe next time.");
  }
} else {
  alert("Ok, maybe next time.");
}
