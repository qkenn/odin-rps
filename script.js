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

console.log(getComputerChoice());

function getPlayerChoice() {
  const inputMove = window.prompt('Play your move', 'rock');

  const playerMove = inputMove.toLowerCase();
  if (playerMove != 'rock' && playerMove != 'paper' && playerMove != 'scissors')
    return 'invalid move: ' + inputMove;

  return playerMove;
}

console.log(getPlayerChoice());
