function printSum(firstNumber, secondNumber) {
  let first = Number(firstNumber);
  let second = Number(secondNumber);
  let result = 0;

  for (let i = first; i <= second; i++) {
    result += i;
  }

  console.log(result);
}

printSum("1", "5");
