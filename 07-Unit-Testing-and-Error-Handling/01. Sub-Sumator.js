function sumArray(arrayInput, startIndex, endIndex) {
  if (!Array.isArray(arrayInput)) {
    return NaN;
  }

  // Normalize indexes
  if (startIndex < 0) {
    startIndex = 0;
  }

  if (endIndex > arrayInput.length - 1) {
    endIndex = arrayInput.length - 1;
  }

  let totalSum = 0;

  for (let i = startIndex; i <= endIndex; i++) {
    let value = Number(arrayInput[i]);

    if (isNaN(value)) {
      return NaN;
    }

    if (!Number.isInteger(value)) {
      value = parseFloat(value.toFixed(2));
    }

    totalSum += value;
  }

  if (!Number.isInteger(totalSum)) {
    totalSum = parseFloat(totalSum.toFixed(2));
  }

  return totalSum;
}

sumArray([10, 20, 30, 40, 50, 60], 3, 300);
sumArray([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1);
sumArray([10, "twenty", 30, 40], 0, 2);
sumArray("text", 0, 2);
