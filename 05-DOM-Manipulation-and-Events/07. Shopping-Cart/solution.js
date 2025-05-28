function solve() {
  const addButtons = document.querySelectorAll(".add-product");
  const checkoutButton = document.querySelector(".checkout");
  const textarea = document.querySelector("textarea");

  let products = [];
  let total = 0;

  addButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const productElement = button.parentElement.parentElement;
      const name = productElement.querySelector(".product-title").textContent;
      const price = parseFloat(
        productElement.querySelector(".product-line-price").textContent
      );

      products.push(name);
      total += price;

      textarea.value += `Added ${name} for ${price.toFixed(2)} to the cart.\n`;
    });
  });

  checkoutButton.addEventListener("click", () => {
    const uniqueProducts = [...new Set(products)];
    textarea.value += `You bought ${uniqueProducts.join(
      ", "
    )} for ${total.toFixed(2)}.`;

    addButtons.forEach((button) => (button.disabled = true));
    checkoutButton.disabled = true;
  });
}
