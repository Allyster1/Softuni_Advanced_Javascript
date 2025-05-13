function previousDay(year, month, day) {
  const d = new Date(year, month - 1, day);

  d.setDate(d.getDate() - 1);

  const y = d.getFullYear();
  const m = d.getMonth() + 1;
  const dd = d.getDate();

  console.log(`${y}-${m}-${dd}`);
}

previousDay(2016, 9, 30);
previousDay(2015, 5, 10);
