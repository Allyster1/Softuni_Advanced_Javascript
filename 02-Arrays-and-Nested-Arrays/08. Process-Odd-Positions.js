function processOdd(array) {
  let processedArray = array
    .filter((number, element) => element % 2 !== 0)
    .map((x) => x * 2)
    .reverse()
    .join(" ");

  console.log(processedArray);
}
processOdd([10, 15, 20, 25]);
processOdd([3, 0, 10, 4, 7, 3]);
