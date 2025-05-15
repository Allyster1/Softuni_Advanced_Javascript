function printBiggerHalf(array) {
  const sorted = array.sort((a, b) => a - b);
  const half = Math.floor(sorted.length / 2);
  const left = sorted.slice(0, half);
  const right = sorted.slice(half);

  const sum = (arrayInput) =>
    arrayInput.reduce((acc, current) => acc + current, 0);

  const result = sum(left) >= sum(right) ? left : right;

  console.log(result);
}
//printBiggerHalf([4, 7, 2, 5]);
printBiggerHalf([3, 19, 14, 7, 2, 19, 6]);
