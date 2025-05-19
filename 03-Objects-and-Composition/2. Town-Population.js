function printTown(data) {
  const townInfo = {};

  for (const info of data) {
    let [town, population] = info.split(" <-> ");

    town in townInfo
      ? (townInfo[town] += Number(population))
      : (townInfo[town] = Number(population));
  }

  for (const [town, population] of Object.entries(townInfo)) {
    console.log(`${town} : ${population}`);
  }
}

printTown([
  "Istanbul <-> 100000",
  "Honk Kong <-> 2100004",
  "Jerusalem <-> 2352344",
  "Mexico City <-> 23401925",
  "Istanbul <-> 1000",
]);
