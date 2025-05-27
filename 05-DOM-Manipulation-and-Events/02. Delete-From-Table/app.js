function deleteByEmail() {
  const trRef = document.querySelectorAll("tbody tr");
  const changeType = document.getElementById("result");
  const inputText = document.querySelector("input");
  let foundEmail = false;

  if (!inputText.value && inputText.trim() !== "") {
    return;
  }

  for (const tr of trRef) {
    const tdEmail = tr.getElementsByTagName("td")[1];
    if (tdEmail && tdEmail.textContent === inputText.value) {
      tr.remove();
      foundEmail = true;
      break;
    }
  }

  changeType.textContent = foundEmail ? "Deleted." : "Not found.";
  inputText.value = "";
}
