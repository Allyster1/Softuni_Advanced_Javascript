function printDate(month, year) {
  let date = new Date(year, month, 0).getDate();
  console.log(date);
}

printDate(1, 2012);
