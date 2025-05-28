function focused() {
  const divElements = document.querySelectorAll("div div");

  for (const div of divElements) {
    const inputElement = div.querySelector("input");

    inputElement.addEventListener("focus", onFocus);
    inputElement.addEventListener("blur", onBlur);
  }

  function onFocus() {
    this.parentElement.classList.add("focused");
  }

  function onBlur() {
    this.parentElement.classList.remove("focused");
  }
}
