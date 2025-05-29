function solve() {
  const [generateBtn, buyBtn] = document.querySelectorAll("button");
  const [input, output] = document.querySelectorAll("textarea");
  const tableBody = document.querySelector("table tbody");

  generateBtn.addEventListener("click", generateFurniture);
  buyBtn.addEventListener("click", buyFurniture);

  function generateFurniture() {
    const furnitureArray = JSON.parse(input.value);

    for (const item of furnitureArray) {
      const row = document.createElement("tr");

      // Image
      const imgTd = document.createElement("td");
      const img = document.createElement("img");
      img.src = item.img;
      imgTd.appendChild(img);
      row.appendChild(imgTd);

      // Name
      const nameTd = document.createElement("td");
      const nameP = document.createElement("p");
      nameP.textContent = item.name;
      nameTd.appendChild(nameP);
      row.appendChild(nameTd);

      // Price
      const priceTd = document.createElement("td");
      const priceP = document.createElement("p");
      priceP.textContent = item.price;
      priceTd.appendChild(priceP);
      row.appendChild(priceTd);

      // Decoration Factor
      const factorTd = document.createElement("td");
      const factorP = document.createElement("p");
      factorP.textContent = item.decFactor;
      factorTd.appendChild(factorP);
      row.appendChild(factorTd);

      // Checkbox
      const markTd = document.createElement("td");
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      markTd.appendChild(checkbox);
      row.appendChild(markTd);

      tableBody.appendChild(row);
    }
  }

  function buyFurniture() {
    const checkboxes = tableBody.querySelectorAll(
      "input[type='checkbox']:checked"
    );

    const boughtFurniture = [];
    let totalPrice = 0;
    let totalDecFactor = 0;

    for (const checkbox of checkboxes) {
      const row = checkbox.closest("tr");
      const name = row.children[1].textContent;
      const price = Number(row.children[2].textContent);
      const decFactor = Number(row.children[3].textContent);

      boughtFurniture.push(name);
      totalPrice += price;
      totalDecFactor += decFactor;
    }

    const averageDecFactor = totalDecFactor / boughtFurniture.length || 0;

    output.value =
      `Bought furniture: ${boughtFurniture.join(", ")}\n` +
      `Total price: ${totalPrice.toFixed(2)}\n` +
      `Average decoration factor: ${averageDecFactor}`;
  }
}
