function displayInfo(...arguments) {
  result = {};
  for (const element of arguments) {
    const type = typeof element;
    console.log(`${type}: ${element}`);

    if (!result.hasOwnProperty(type)) {
      result[type] = 0;
    }

    result[type] += 1;
  }

  Object.entries(result)
    .sort(([keyA, valueA], [keyB, valueB]) => valueB - valueA)
    .forEach(([key, value]) => {
      console.log(`${key} = ${value}`);
    });
}

displayInfo("cat", 42, function () {
  console.log("Hello world!");
});
