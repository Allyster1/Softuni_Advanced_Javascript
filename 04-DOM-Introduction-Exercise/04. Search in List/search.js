function search() {
  const townsRef = document.getElementById("towns");
  const searchRef = document.getElementById("searchText").value;
  const resultRef = document.getElementById("result");
  const listRef = townsRef.getElementsByTagName("li");

  let matches = 0;

  for (let item of listRef) {
    item.style.fontWeight = "";
    item.style.textDecoration = "";

    if (
      searchRef !== "" &&
      item.textContent.toLowerCase().includes(searchRef.toLowerCase())
    ) {
      item.style.fontWeight = "bold";
      item.style.textDecoration = "underline";
      matches++;
    }
  }

  resultRef.textContent =
    matches > 0 ? `${matches} matches found` : "No matches found";
}
