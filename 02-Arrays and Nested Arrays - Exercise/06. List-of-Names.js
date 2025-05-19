function sortNames(array) {
  const sorted = array
    .sort((a, b) => a.localeCompare(b))
    .forEach((element, index) => {
      console.log(`${(index, 1)}.${element}`);
    });
}

sortNames(["John", "Bob", "Christina", "Ema"]);
