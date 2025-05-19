function printNumbers(array) {
  const result = array.reduce((acc, current) => {
    if (acc.length === 0 || current >= acc[acc.length - 1]) {
      acc.push(current);
    }
    return acc;
  }, []);

  //return result;
  console.log(result);
}

printNumbers([1, 3, 8, 4, 10, 12, 3, 2, 24]);
