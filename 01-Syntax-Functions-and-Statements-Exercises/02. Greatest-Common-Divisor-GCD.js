function greatestDivisor(a, b) {
  let min = a < b ? a : b;
  for (; min > 0; min--) {
    if (a % min === 0 && b % min === 0) {
      console.log(min);
      break;
    }
  }
}
//greatestDivisor(15, 5);
greatestDivisor(2154, 458);
