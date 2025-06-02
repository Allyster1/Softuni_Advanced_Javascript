function add(inputNumber) {
  let state = 0;
  state += inputNumber;

  function sum(number) {
    state += number;
    return sum;
  }
  sum.toString = () => state;
  return sum;
}

console.log(add(1)(6)(-3)(10));
