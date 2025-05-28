function addItem() {
  const newItemText = document.getElementById("newItemText");

  if (!newItemText.value) {
    return;
  }

  const li = document.createElement("li");
  li.textContent = newItemText.value;

  const deleteBtn = document.createElement("a");
  deleteBtn.textContent = "[Delete]";
  deleteBtn.href = "#";
  li.appendChild(deleteBtn);

  deleteBtn.addEventListener("click", () => {
    li.remove();
    // event.target.parentElement.remove();
  });

  const ulItems = document.getElementById("items");
  ulItems.appendChild(li);

  newItemText.value = "";
}
