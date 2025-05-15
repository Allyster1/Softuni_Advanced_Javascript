function printNumbers(array) {
  let result = [];
  for (let num of array) {
    if (num < 0) {
      result.unshift(num);
    } else {
      result.push(num);
    }
  }

  for (let element of result) {
    console.log(element);
  }
}

//printNumbers([7, -2, 8, 9]);
printNumbers([3, -2, 0, -1]);
