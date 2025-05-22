function printData(arrayData) {
  let copyData = JSON.parse(JSON.stringify(arrayData));

  let cleanedData = copyData.map((element) =>
    element
      .split("|")
      .map((item) => item.trim())
      .filter((item) => item)
  );

  let townInfo = {};
  let townKeys = cleanedData[0];

  townInfo.data = cleanedData.slice(1).map((row) => {
    let obj = {};
    townKeys.forEach((key, i) => {
      let value = row[i];
      if (key === "Latitude" || key === "Longitude") {
        value = Number(parseFloat(value).toFixed(2));
      }
      obj[key] = value;
    });
    return obj;
  });

  console.table(JSON.stringify(townInfo.data));
}

printData([
  "| Town | Latitude | Longitude |",
  "| Sofia | 42.696552 | 23.32601 |",
  "| Beijing | 39.913818 | 116.363625 |",
]);
