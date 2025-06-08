function validate() {
  const input = document.getElementById("email");
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/g;

  input.addEventListener("change", () => {
    const value = input.value;

    if (emailPattern.test(value)) {
      input.classList.remove("error");
    } else {
      input.classList.add("error");
    }
  });
}
