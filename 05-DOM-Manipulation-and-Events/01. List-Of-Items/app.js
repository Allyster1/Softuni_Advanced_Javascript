function addItem() {
  const newItemText = document.getElementById("newItemText");

  const li = document.createElement("li");
  li.textContent = newItemText.value;

  const ulItems = document.getElementById("items");
  ulItems.appendChild(li);

  newItemText.value = "";
}
