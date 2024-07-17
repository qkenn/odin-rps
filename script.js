const btns = document.querySelector('.btn-container');
const statsContainer = document.getElementById('stats');

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

// function getPlayerChoice() {
//   const inputMove = window.prompt('Play your move', 'rock');

//   if (!inputMove) return '';

//   const playerMove = inputMove.toLowerCase();

//   if (playerMove != 'rock' && playerMove != 'paper' && playerMove != 'scissors')
//     return 'invalid move: ' + inputMove;

//   return playerMove;
// }

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

function playGame(computerChoice, playerChoice) {
  renderMove(playerChoice, 'player');
  renderMove(computerChoice, 'computer');
  console.log(playRound(computerChoice, playerChoice));

  console.log(
    `Scoreboard: you - ${playerScore}, computer - ${computerScore}, ties - ${ties}`
  );
}

// playGame();

btns.addEventListener('click', (e) => {
  if (!e.target.dataset?.id) return;

  const playerChoice = e.target.dataset.id;

  playGame(getComputerChoice(), playerChoice);
});

function renderMove(move, gamePlayer) {
  const statsMessageEl = document.createElement('div');

  if (gamePlayer == 'player') {
    statsMessageEl.textContent = `Your move: ${move}`;
  } else {
    statsMessageEl.textContent = `Computer move: ${move}`;
  }

  statsContainer.appendChild(statsMessageEl);
}
