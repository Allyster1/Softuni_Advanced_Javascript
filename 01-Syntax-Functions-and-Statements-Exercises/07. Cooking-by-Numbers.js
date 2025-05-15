function calculateOperations(...commands) {
  let inputNumber = Number(commands.shift());

  for (let command of commands) {
    if (command === "chop") {
      inputNumber /= 2;
    } else if (command === "dice") {
      inputNumber = Math.sqrt(inputNumber);
    } else if (command === "spice") {
      inputNumber += 1;
    } else if (command === "bake") {
      inputNumber *= 3;
    } else if (command === "fillet") {
      inputNumber -= inputNumber * 0.2;
    }
    console.log(inputNumber);
  }
}

// calculateOperations("32", "chop", "chop", "chop", "chop", "chop");
calculateOperations("9", "dice", "spice", "chop", "bake", "fillet");
