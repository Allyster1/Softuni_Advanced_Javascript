function sortNames(array) {
  const sorted = array.sort((a, b) => a.localeCompare(b));

  for (let i = 0; i < array.length; i++) {
    let element = array[i];

    console.log(`${i + 1}.${element}`);
  }
}

sortNames(["John", "Bob", "Christina", "Ema"]);
