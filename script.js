const btns = document.querySelector('.btn-container');

function getComputerChoice() {
  const move = Math.floor(Math.random() * 3) + 1;

  let computerChoice = '';

  switch (true) {
    case move == 1:
      computerChoice = 'rock';
      break;
    case move == 2:
      computerChoice = 'paper';
      break;
    case move == 3:
      computerChoice = 'scissors';
      break;
  }

  return computerChoice;
}

function getPlayerChoice() {
  const inputMove = window.prompt('Play your move', 'rock');

  if (!inputMove) return '';

  const playerMove = inputMove.toLowerCase();

  if (playerMove != 'rock' && playerMove != 'paper' && playerMove != 'scissors')
    return 'invalid move: ' + inputMove;

  return playerMove;
}

let computerScore = 0;
let playerScore = 0;
let ties = 0;

function playRound(computerChoice, playerChoice) {
  let result = '';

  switch (true) {
    case computerChoice == playerChoice:
      result = "It's a tie";
      ties++;
      break;
    case computerChoice == 'rock' && playerChoice == 'paper':
      result = `You won: ${playerChoice} beats ${computerChoice}`;
      playerScore++;
      break;
    case computerChoice == 'rock' && playerChoice == 'scissors':
      result = `Computer won: ${computerChoice} beats ${playerChoice}`;
      computerScore++;
      break;
    case computerChoice == 'paper' && playerChoice == 'rock':
      result = `Computer won: ${computerChoice} beats ${playerChoice}`;
      computerScore++;
      break;
    case computerChoice == 'paper' && playerChoice == 'scissors':
      result = `You won: ${playerChoice} beats ${computerChoice}`;
      playerScore++;
      break;
    case computerChoice == 'scissors' && playerChoice == 'rock':
      result = `You won: ${playerChoice} beats ${computerChoice}`;
      playerScore++;
      break;
    case computerChoice == 'scissors' && playerChoice == 'paper':
      result = `Computer won: ${computerChoice} beats ${playerChoice}`;
      computerScore++;
      break;
  }

  return result;
}

function playGame() {
  for (let i = 1; i <= 5; i++) {
    const computerChoice = getComputerChoice();
    const playerChoice = getPlayerChoice();
    console.log(`Round ${i}`);
    console.log(`Your move: ${playerChoice}`);
    console.log(`Computer move: ${computerChoice}`);
    console.log(playRound(computerChoice, playerChoice));
  }

  console.log('You played five times');
  console.log(
    `Scoreboard: you - ${playerScore}, computer - ${computerScore}, ties - ${ties}`
  );
}

// playGame();

btns.addEventListener('click', (e) => {
  if (!e.target.dataset?.id) return;

  const move = e.target.dataset.id;

  console.log(move);
});
