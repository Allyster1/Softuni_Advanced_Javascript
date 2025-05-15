function printSmallest(array) {
  let sorted = array.sort((a, b) => a - b);

  console.log(`${sorted[0]} ${sorted[1]}`);
}

printSmallest([30, 15, 50, 5]);
printSmallest([3, 0, 10, 4, 7, 3]);
