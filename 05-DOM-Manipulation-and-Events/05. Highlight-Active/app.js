function focused() {
  const parent = document.querySelector("body>div");

  parent.addEventListener("focusin", onFocus);
  parent.addEventListener("focusout", onBlur);

  function onFocus(event) {
    event.target.parentElement.classList.add("focused");
  }

  function onBlur(event) {
    event.target.parentElement.classList.remove("focused");
  }
}
