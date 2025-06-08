export function createCalculator() {
  let value = 0;

  return {
    add: function (num) {
      value += Number(num);
    },

    subtract: function (num) {
      value -= Number(num);
    },

    get: function () {
      return value;
    },
  };
}
// const calc = createCalculator();
// calc.add(10);
// console.log(calc.get());
// calc.subtract(2);
// console.log(calc.get());
// calc.add("abc");
// console.log(calc.get());
