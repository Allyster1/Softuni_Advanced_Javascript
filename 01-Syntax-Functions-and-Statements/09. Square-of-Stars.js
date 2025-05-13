function printStars(range) {
  for (let i = 1; i <= range; i++) {
    let line = "";
    for (let j = 1; j <= range; j++) {
      line += "* ";
    }
    console.log(line);
  }
}

printStars(2);
