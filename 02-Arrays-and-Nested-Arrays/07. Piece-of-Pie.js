function printProduct(array, firstProduct, lastProduct) {
  let startIndex = array.indexOf(firstProduct);
  let endIndex = array.indexOf(lastProduct) + 1;

  let slicedArray = array.slice(startIndex, endIndex);
  return slicedArray;
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
