function addItem() {
  const menu = document.getElementById("menu");
  const input = document.getElementById("newItemText");
  const inputValue = document.getElementById("newItemValue");

  if (!input.value || !inputValue.value) {
    return;
  }

  option = document.createElement("option");
  option.textContent = input.value;
  option.value = inputValue.value;

  menu.appendChild(option);
  inputValue.value = "";
  input.value = "";
}
