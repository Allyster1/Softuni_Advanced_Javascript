function calc() {
  const firstNumRef = document.getElementById("num1");
  const secondNumRef = document.getElementById("num2");
  let sumRef = document.getElementById("sum");

  sumRef.value = Number(firstNumRef.value) + Number(secondNumRef.value);
}
