function deleteByEmail() {
  const input = document.querySelector('[name="email"]');

  const rows = Array.from(document.querySelector("tbody").children);
  let foundEmail = false;

  for (const row of rows) {
    if (row.children[1].textContent === input.value) {
      row.remove();
      foundEmail = true;
    }
  }
  let output = document.getElementById("result");

  output.textContent = foundEmail ? "Deleted." : "Not found.";

  input.value = "";
}
