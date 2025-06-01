function solve(area, vol, input) {
  const dataInput = JSON.parse(input);
  const result = [];

  for (const data of dataInput) {
    const areaValue = area.call(data);
    const volValue = vol.call(data);
    result.push({
      area: areaValue,
      volume: volValue,
    });
  }

  return result;
}

function area() {
  return Math.abs(this.x * this.y);
}

function vol() {
  return Math.abs(this.x * this.y * this.z);
}

solve(
  area,
  vol,
  `[ {"x":"1","y":"2","z":"10"}, {"x":"7","y":"7","z":"10"}, {"x":"5","y":"2","z":"10"} ]`
);
