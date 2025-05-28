function focused() {
  const inputFields = Array.from(document.querySelectorAll("input"));

  for (const field of inputFields) {
    field.addEventListener("focus", onFocus);
    field.addEventListener("blur", onBlur);
  }

  function onFocus() {
    this.parentElement.classList.add("focused");
  }

  function onBlur() {
    this.parentElement.classList.remove("focused");
  }
}
