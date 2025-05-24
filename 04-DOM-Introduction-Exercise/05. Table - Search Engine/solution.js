function solve() {
  const searchBtnRef = document.getElementById("searchBtn");
  const searchFieldRef = document.getElementById("searchField");
  const trRef = document.getElementsByTagName("tbody")[0].children;

  searchBtnRef.addEventListener("click", searchData);

  function searchData() {
    const searchText = searchFieldRef.value.trim().toLowerCase();

    for (let item of trRef) {
      item.classList.remove("select");
    }

    if (!searchText) {
      console.log("returned");
      return;
    }

    for (let item of trRef) {
      const tdElements = item.getElementsByTagName("td");

      for (let td of tdElements) {
        const tdText = td.textContent.toLowerCase();

        if (tdText.includes(searchText)) {
          item.classList.add("select");
          break;
        }
      }
    }

    searchFieldRef.value = "";
  }
}
