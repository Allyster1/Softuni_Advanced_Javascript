function addItem() {
  const ulItems = document.getElementById("items");
  const newItemText = document.getElementById("newItemText");

  const li = document.createElement("li");

  li.textContent = newItemText.value;

  ulItems.appendChild(li);
  newItemText.value = "";
}
