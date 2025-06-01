function solution(inputNumber) {
  return increment;
  function increment(currentNumber) {
    const number = inputNumber + currentNumber;
    return number;
  }
}

let add7 = solution(7);
console.log(add7(2));
console.log(add7(3));
