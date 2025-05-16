function printData(array, step) {
  let result = [];

  for (let i = 0; i < array.length; i += step) {
    result.push(array[i]);
  }
  console.log(result);
}

//printData(["5", "20", "31", "4", "20"], 2);
//printData(["dsa", "asd", "test", "tset"], 2);
printData(["1", "2", "3", "4", "5"], 6);
