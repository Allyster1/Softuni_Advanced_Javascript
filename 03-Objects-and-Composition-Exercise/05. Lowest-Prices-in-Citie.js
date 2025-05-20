function printLowestPrice(townInfo) {
  let productPrices = {};

  for (const entry of townInfo) {
    const [town, product, priceStr] = entry.split(" | ");
    const price = Number(priceStr);

    if (!productPrices[product] || productPrices[product].price > price) {
      productPrices[product] = { town, price };
    }
  }

  for (let product in productPrices) {
    const { town, price } = productPrices[product];
    console.log(`${product} -> ${price} (${town})`);
  }
}

printLowestPrice([
  "Sample Town | Sample Product | 1000",
  "Sample Town | Orange | 2",
  "Sample Town | Peach | 2",
  "Sofia | Orange | 3",
  "Sofia | Peach | 2",
  "New York | Sample Product | 1000",
  "New York | Burger | 10",
]);

// expected result
// Sample Product -> 1000 (Sample Town)
// Orange -> 2 (Sample Town)
// Peach -> 1 (Sample Town)
// Burger -> 10 (New York)
