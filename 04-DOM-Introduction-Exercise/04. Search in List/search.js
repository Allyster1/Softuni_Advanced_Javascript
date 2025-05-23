function search() {
  const ulRef = document.getElementById("towns").children;
  const searchRef = document.getElementById("searchText").value;
  const resultRef = document.getElementById("result");

  let counter = 0;

  for (let list of ulRef) {
    if (list.textContent.startsWith(searchRef)) {
      list.style.fontWeight = "bold";
      list.style.textDecoration = "underline";
      counter += 1;
    }
  }

  if (counter > 0) {
    resultRef.textContent = `${counter} Matches found`;
  }
}
