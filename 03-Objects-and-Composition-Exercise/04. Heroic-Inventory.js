function printHeroInventory(dataArray) {
  let heroes = [];

  for (let elements of dataArray) {
    let [name, levelStr, items] = elements.split(" / ");

    let level = Number(levelStr);
    if (!name || !levelStr) {
      continue;
    }

    items = items
      ? items
          .split(",")
          .map((item) => item.trim())
          .filter((item) => item)
      : [];

    heroes.push({ name, level, items });
  }

  console.log(JSON.stringify(heroes));
}

printHeroInventory(["Jake / 1000 / Gauss, HolidayGrenade"]);
