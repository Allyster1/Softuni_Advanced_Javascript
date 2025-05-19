function addOrRemove(array) {
  let result = [];

  array.reduce((acc, command) => {
    acc += 1;
    if (command === "add") {
      result.push(acc);
    } else if (command === "remove") {
      result.pop();
    }

    return acc;
  }, 0);

  result.length <= 0 ? console.log("Empty") : console.log(result.join("\n"));
}

//addOrRemove(["add", "add", "add", "add"]);
addOrRemove(["add", "add", "remove", "add", "add"]);
