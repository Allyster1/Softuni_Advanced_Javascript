function printSum(inputNumber) {
  let numbersArray = inputNumber
    .toString()
    .split("")
    .map((x) => Number(x));

  let firstElement = numbersArray.shift();
  let isSame = true;
  let sum = firstElement;

  for (let element of numbersArray) {
    sum += element;
    if (element !== firstElement) {
      isSame = false;
    }
  }

  console.log(isSame);
  console.log(sum);
}

//printSum(2222222);
printSum(1234);
