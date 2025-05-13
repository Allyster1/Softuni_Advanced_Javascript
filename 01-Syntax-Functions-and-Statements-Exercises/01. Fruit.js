function calculateCost(fruit, weight, money) {
  let cost = (weight / 1000) * money;

  console.log(
    `I need $${cost.toFixed(2)} to buy ${(weight / 1000).toFixed(
      2
    )} kilograms ${fruit}.`
  );
}

calculateCost("orange", 2500, 1.8);
