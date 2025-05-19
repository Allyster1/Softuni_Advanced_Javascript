function ticTacToe(moves) {
  let board = Array(3)
    .fill()
    .map(() => Array(3).fill(false));
  let player = "X";
  let winner = null;

  for (const move of moves) {
    if (winner || board.every((row) => row.every((cell) => cell !== false)))
      break;

    const [x, y] = move.split(" ").map(Number);

    if (board[x][y] !== false) {
      console.log("This place is already taken. Please choose another!");
      continue;
    }

    board[x][y] = player;

    // Check win conditions
    const lines = [
      [
        [0, 0],
        [0, 1],
        [0, 2],
      ],
      [
        [1, 0],
        [1, 1],
        [1, 2],
      ],
      [
        [2, 0],
        [2, 1],
        [2, 2],
      ], // rows
      [
        [0, 0],
        [1, 0],
        [2, 0],
      ],
      [
        [0, 1],
        [1, 1],
        [2, 1],
      ],
      [
        [0, 2],
        [1, 2],
        [2, 2],
      ], // cols
      [
        [0, 0],
        [1, 1],
        [2, 2],
      ],
      [
        [0, 2],
        [1, 1],
        [2, 0],
      ], // diagonals
    ];

    if (lines.some((line) => line.every(([i, j]) => board[i][j] === player))) {
      winner = player;
      break;
    }

    player = player === "X" ? "O" : "X";
  }

  console.log(
    winner
      ? `Player ${winner} wins!`
      : board.every((row) => row.every((cell) => cell !== false))
      ? "The game ended! Nobody wins :("
      : ""
  );

  board.forEach((row) =>
    console.log(row.map((cell) => (cell === false ? "false" : cell)).join("\t"))
  );
}

// Test cases
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
console.log("\n");
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
console.log("\n");
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
