function focused() {
  const divElements = document.querySelectorAll("div div");

  for (const div of divElements) {
    const inputElement = div.querySelector("input");

    if (!inputElement.value) {
      return;
    }

    inputElement.addEventListener("focus", () => {
      div.classList.add("focused");
    });
    inputElement.addEventListener("blur", () => {
      div.classList.remove("focused");
    });
  }
}
