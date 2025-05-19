function sortArray(array) {
  let copyArray = JSON.parse(JSON.stringify(array));
  let sorted = copyArray
    .sort((a, b) => a.length - b.length || a.localeCompare(b))
    .forEach((element) => {
      console.log(element);
    });
}

// sortArray(["alpha", "beta", "gamma"]);
// sortArray(["Isacc", "Theodor", "Jack", "Harrison", "George"]);
sortArray(["test", "Deny", "omen", "Default"]);
