function attachGradientEvents() {
  const box = document.getElementById("gradient");

  box.addEventListener("mousemove", (event) => {
    let value = Math.floor((event.offsetX / 300) * 100) + "%";
    document.getElementById("result").textContent = value;
  });
}
