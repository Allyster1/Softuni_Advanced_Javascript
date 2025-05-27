function generateReport() {
  const output = document.getElementById("output");
  const headers = document.querySelectorAll("table thead tr th");
  const selectedColumns = [];

  headers.forEach((th, index) => {
    const checkbox = th.querySelector('input[type="checkbox"]');
    if (checkbox && checkbox.checked) {
      selectedColumns.push({
        name: checkbox.name,
        index: index,
      });
    }
  });

  const rows = document.querySelectorAll("table tbody tr");
  const result = [];

  rows.forEach((row) => {
    const obj = {};
    selectedColumns.forEach((col) => {
      const cell = row.cells[col.index];
      obj[col.name] = cell.textContent.trim();
    });
    result.push(obj);
  });

  output.value = JSON.stringify(result, null, 2);
}
