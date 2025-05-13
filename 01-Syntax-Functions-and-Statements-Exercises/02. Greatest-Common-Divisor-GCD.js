function greatestDivisor(a, b) {
  let min = a < b ? a : b;
  for (let i = min; min > 0; min--) {
    if (a % i === 0 && b % i === 0) {
      console.log(i);
      break;
    }
  }
}
greatestDivisor(15, 5);
