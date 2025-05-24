function printCatalogue(data) {
  let products = data
    .map((element) => {
      let [name, price] = element.split(" : ");
      return { name, price: Number(price) };
    })
    .sort((a, b) => a.name.localeCompare(b.name));

  let currentGroup = "";

  for (let product of products) {
    let firstLetter = product.name[0];

    if (firstLetter !== currentGroup) {
      currentGroup = firstLetter;
      console.log(currentGroup);
    }

    console.log(`  ${product.name}: ${product.price}`);
  }
}

printCatalogue([
  "Appricot : 20.4",
  "Fridge : 1500",
  "TV : 1499",
  "Deodorant : 10",
  "Boiler : 300",
  "Apple : 1.25",
  "Anti-Bug Spray : 15",
  "T-Shirt : 10",
]);
