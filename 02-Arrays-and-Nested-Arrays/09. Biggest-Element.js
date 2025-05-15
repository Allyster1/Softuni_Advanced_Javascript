function findBiggest(matrix) {
  const flatArray = matrix.flat();
  const highest = Math.max(...flatArray);

  console.log(highest);
}

findBiggest([
  [20, 50, 10],
  [8, 33, 145],
]);
