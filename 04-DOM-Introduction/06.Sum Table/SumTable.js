function sumTable() {
  const tdRef = document.getElementsByTagName("td");
  const sumRef = document.getElementById("sum");

  let result = 0;

  for (let i = 1; i < tdRef.length - 1; i += 2) {
    let tdValue = Number(tdRef[i].textContent);
    result += tdValue;
  }

  sumRef.textContent = result;
}
