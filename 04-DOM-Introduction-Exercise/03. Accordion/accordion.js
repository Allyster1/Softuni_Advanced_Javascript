function toggle() {
  const btnRef = document.getElementsByClassName("button")[0];
  const textRef = document.getElementById("extra");

  if (btnRef.textContent === "More") {
    btnRef.textContent = "Less";
    textRef.style.display = "block";
  } else {
    btnRef.textContent = "More";
    textRef.style.display = "none";
  }
}
