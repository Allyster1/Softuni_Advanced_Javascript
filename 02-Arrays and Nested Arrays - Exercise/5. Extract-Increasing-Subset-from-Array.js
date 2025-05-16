function printNumbers(array) {
  return array.reduce((result, current) => {
    if (result.length === 0 || current >= result[result.length - 1]) {
      result.push(current);
    }
    return result;
  }, []);
}

printNumbers([1, 3, 8, 4, 10, 12, 3, 2, 24]);
