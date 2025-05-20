function printMagicMatrix(matrix) {
  const referenceSum = matrix[0].reduce((acc, num) => acc + num, 0);

  for (const row of matrix) {
    const rowSum = row.reduce((acc, num) => acc + num, 0);
    if (rowSum !== referenceSum) {
      return false;
    }
  }

  for (let col = 0; col < matrix[0].length; col++) {
    let colSum = 0;
    for (let row = 0; row < matrix.length; row++) {
      colSum += matrix[row][col];
    }
    if (colSum !== referenceSum) {
      return false;
    }
  }

  return true;
}

console.log(
  printMagicMatrix([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5],
  ])
);
