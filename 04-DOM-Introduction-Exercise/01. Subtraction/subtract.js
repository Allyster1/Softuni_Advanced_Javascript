function subtract() {
  const firstNumberRef = document.getElementById("firstNumber").value;
  const secondNumberRef = document.getElementById("secondNumber").value;
  const resRef = document.getElementById("result");

  let result = Number(firstNumberRef) - Number(secondNumberRef);

  resRef.textContent = result;
}
