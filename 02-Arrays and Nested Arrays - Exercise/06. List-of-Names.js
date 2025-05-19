function sortNames(array) {
  const sorted = array.sort((a, b) => a.localeCompare(b));
  counter = 1;

  sorted.forEach((element) => {
    console.log(`${counter}.${element}`);
    counter++;
  });
}

sortNames(["John", "Bob", "Christina", "Ema"]);
