function printHeroInventory(arrayData) {
  let heroInventory = [];

  for (const element of arrayData) {
    let [name, level, items] = element.split(" / ");
    level = Number(level);

    items = items ? (items = items.split(", ")) : [];
    heroInventory.push({ name, level, items });
  }

  console.log(JSON.stringify(heroInventory));
}

// printHeroInventory([
//   "Isacc / 25 / Apple, GravityGun",
//   "Derek / 12 / BarrelVest, DestructionSword",
//   "Hes / 1 / Desolator, Sentinel, Antara",
// ]);

printHeroInventory(["Jake / 1000 / Gauss, HolidayGrenade"]);
