function printData(array) {
  const foodInfo = {};

  for (let i = 0; i < array.length; i += 2) {
    foodInfo[array[i]] = Number(array[i + 1]);
  }

  console.log(foodInfo);
}

printData(["Yoghurt", "48", "Rise", "138", "Apple", "52"]);
