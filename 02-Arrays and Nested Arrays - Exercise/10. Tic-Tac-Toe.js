function ticTacToe(moves) {
  function checkWin(board, player) {
    // Check rows
    for (let row = 0; row < 3; row++) {
      if (
        board[row][0] === player &&
        board[row][1] === player &&
        board[row][2] === player
      ) {
        return true;
      }
    }

    // Check columns
    for (let col = 0; col < 3; col++) {
      if (
        board[0][col] === player &&
        board[1][col] === player &&
        board[2][col] === player
      ) {
        return true;
      }
    }

    // Check diagonals
    if (
      board[0][0] === player &&
      board[1][1] === player &&
      board[2][2] === player
    ) {
      return true;
    }

    if (
      board[0][2] === player &&
      board[1][1] === player &&
      board[2][0] === player
    ) {
      return true;
    }

    return false;
  }

  function isBoardFull(board) {
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
        if (board[row][col] === false) {
          return false;
        }
      }
    }
    return true;
  }

  function printBoard(board) {
    for (let row = 0; row < 3; row++) {
      console.log(
        board[row].map((cell) => (cell === false ? "false" : cell)).join("\t")
      );
    }
  }

  let board = [
    [false, false, false],
    [false, false, false],
    [false, false, false],
  ];

  let currentPlayer = "X";
  let gameEnded = false;
  let winner = null;

  for (let i = 0; i < moves.length; i++) {
    if (gameEnded) break;

    const [row, col] = moves[i].split(" ").map(Number);

    if (board[row][col] !== false) {
      console.log("This place is already taken. Please choose another!");
      continue;
    }

    board[row][col] = currentPlayer;

    if (checkWin(board, currentPlayer)) {
      gameEnded = true;
      winner = currentPlayer;
      break;
    }

    if (isBoardFull(board)) {
      gameEnded = true;
      break;
    }

    // Switch player
    currentPlayer = currentPlayer === "X" ? "O" : "X";
  }

  if (winner) {
    console.log(`Player ${winner} wins!`);
  } else if (gameEnded) {
    console.log("The game ended! Nobody wins :(");
  }

  printBoard(board);
}

// Test cases
console.log("Test Case 1:");
ticTacToe([
  "0 1",
  "0 0",
  "0 2",
  "2 0",
  "1 0",
  "1 1",
  "1 2",
  "2 2",
  "2 1",
  "0 0",
]);

console.log("\nTest Case 2:");
ticTacToe([
  "0 0",
  "0 0",
  "1 1",
  "0 1",
  "1 2",
  "0 2",
  "2 2",
  "1 2",
  "2 2",
  "2 1",
]);

console.log("\nTest Case 3:");
ticTacToe([
  "0 1",
  "0 0",
  "0 2",
  "2 0",
  "1 0",
  "1 2",
  "1 1",
  "2 1",
  "2 2",
  "0 0",
]);
