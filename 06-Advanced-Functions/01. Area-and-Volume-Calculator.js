function calculate(area, vol, dataJson) {
  let data = JSON.parse(dataJson);
  let result = [];

  for (const element of data) {
    result.push({
      area: area.call(areaFunc),
      volume: volume.call(volFunc),
    });
  }

  return result;
}

calculate(
  areaFunc,
  volFunc,
  `[ {"x":"1","y":"2","z":"10"}, {"x":"7","y":"7","z":"10"}, {"x":"5","y":"2","z":"10"} ]`
);

function areaFunc() {
  return Math.abs(this.x * this.y);
}

function volFunc() {
  return Math.abs(this.x * this.y * this.z);
}
