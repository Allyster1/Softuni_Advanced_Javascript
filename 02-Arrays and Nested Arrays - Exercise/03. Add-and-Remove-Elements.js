function addOrRemove(array) {
  let result = [];

  array.reduce((acc, current) => {
    acc += 1;
    if (current === "add") {
      result.push(acc);
    }

    if (current === "remove") {
      result.pop();
    }

    return acc;
  }, 0);

  result.length <= 0 ? console.log("Empty") : console.log(result.join("\n"));
}

//addOrRemove(["add", "add", "add", "add"]);
addOrRemove(["add", "add", "remove", "add", "add"]);
