function solve() {
  const conversionType = document.getElementById("selectMenuTo");
  const inputNumber = document.getElementById("input");
  const result = document.getElementById("result");
  const btn = document.querySelector("button");

  if (conversionType.options.length <= 1) {
    const binaryOption = document.getElementsByTagName("option")[1];
    binaryOption.textContent = "Binary";
    binaryOption.value = "binary";

    const hexadecimalOption = document.createElement("option");
    hexadecimalOption.textContent = "Hexadecimal";
    hexadecimalOption.value = "hexadecimal";

    conversionType.appendChild(hexadecimalOption);
  }

  btn.addEventListener("click", () => {
    const number = Number(inputNumber.value);

    if (conversionType.value === "binary") {
      result.value = number.toString(2);
    } else if (conversionType.value === "hexadecimal") {
      result.value = number.toString(16).toUpperCase();
    }
    inputNumber.value = "";
  });
}
