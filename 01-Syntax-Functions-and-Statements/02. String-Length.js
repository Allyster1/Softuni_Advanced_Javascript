function calculateLength(first, second, third) {
  const sum = first.length + second.length + third.length;
  console.log(sum);
  console.log(Math.round(sum / 3));
}

calculateLength("chocolate", "ice cream", "cake");
calculateLength("pasta", "5", "22.3");
