function printProduct(array, ...products) {
  const startIndex = array.indexOf(products.shift());
  const endIndex = array.indexOf(products.pop());

  let slicedArray = array.slice(startIndex, endIndex + 1);

  console.log(slicedArray);
}

printProduct(
  [
    "Apple Crisp",
    "Mississippi Mud Pie",
    "Pot Pie",
    "Steak and Cheese Pie",
    "Butter Chicken Pie",
    "Smoked Fish Pie",
  ],
  "Pot Pie",
  "Smoked Fish Pie"
);
