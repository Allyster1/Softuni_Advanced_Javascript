function sumFirstAndLast(array) {
  const firstElement = Number(array.shift());
  const lastElement = Number(array.pop());

  console.log(firstElement + lastElement);
}

sumFirstAndLast(["20", "30", "40"]);
