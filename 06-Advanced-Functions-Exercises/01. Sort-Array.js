function sortData(arrayInput, command) {
  const commandType = {
    asc: (a, b) => a - b,
    desc: (a, b) => b - a,
  };

  const sortOrder = commandType[command];

  if (sortOrder) {
    arrayInput.sort(sortOrder);
  }

  return arrayInput;
}

console.log(sortData([14, 7, 17, 6, 8], "desc"));
