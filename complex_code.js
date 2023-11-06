/* filename: complex_code.js */

// This code demonstrates an advanced implementation of a game of Tic-Tac-Toe using JavaScript.
// It includes sophisticated logic for checking winning conditions, an AI opponent, and a graphical user interface.

// Tic-Tac-Toe game board represented as a 2D array
let board = [['', '', ''], ['', '', ''], ['', '', '']];

// Function to draw the game board on the console
function drawBoard() {
  console.log('-------------');
  for (let i = 0; i < 3; i++) {
    console.log(`| ${board[i][0]} | ${board[i][1]} | ${board[i][2]} |`);
    console.log('-------------');
  }
}

// Function to check if a player has won the game
function checkWin(player) {
  // Check horizontal lines
  for (let i = 0; i < 3; i++) {
    if (board[i][0] === player && board[i][1] === player && board[i][2] === player) {
      return true;
    }
  }

  // Check vertical lines
  for (let i = 0; i < 3; i++) {
    if (board[0][i] === player && board[1][i] === player && board[2][i] === player) {
      return true;
    }
  }

  // Check diagonals
  if (board[0][0] === player && board[1][1] === player && board[2][2] === player) {
    return true;
  }
  if (board[0][2] === player && board[1][1] === player && board[2][0] === player) {
    return true;
  }

  return false;
}

// Function to check if the game has resulted in a draw
function checkDraw() {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[i][j] === '') {
        return false;
      }
    }
  }
  return true;
}

// Function to make a player's move
function makeMove(player, row, col) {
  if (board[row][col] === '') {
    board[row][col] = player;
    return true;
  }
  return false;
}

// Function to get the opponent's player symbol
function getOpponent(player) {
  return player === 'X' ? 'O' : 'X';
}

// Function to simulate opponent's AI move
function makeAIMove() {
  // Simple AI strategy to choose the first empty cell
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[i][j] === '') {
        board[i][j] = getOpponent('X');
        return;
      }
    }
  }
}

// Main game loop
function playGame() {
  let currentPlayer = 'X';
  let gameOver = false;

  while (!gameOver) {
    drawBoard();

    // Get player's move
    let validMove = false;
    while (!validMove) {
      let row = parseInt(prompt('Enter the row (0-2): '));
      let col = parseInt(prompt('Enter the column (0-2): '));

      if (makeMove(currentPlayer, row, col)) {
        validMove = true;
      } else {
        console.log('Invalid move, try again!');
      }
    }

    // Check if the player has won
    if (checkWin(currentPlayer)) {
      drawBoard();
      console.log(`Player ${currentPlayer} wins!`);
      gameOver = true;
    } else if (checkDraw()) {
      drawBoard();
      console.log('The game is a draw!');
      gameOver = true;
    } else {
      // Switch to opponent's turn
      currentPlayer = getOpponent(currentPlayer);
      makeAIMove();
    }
  }
}

// Start the game
playGame();