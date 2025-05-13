function aggregate(array) {
  const sum = array.reduce((acc, curr) => acc + curr, 0);
  const sumInverse = array.reduce((acc, curr) => acc + 1 / curr, 0);
  const concat = array.reduce((acc, curr) => acc + curr.toString(), "");

  console.log(sum);
  console.log(sumInverse);
  console.log(concat);
}

aggregate([1, 2, 3]);
//aggregate([2, 4, 8, 16]);
