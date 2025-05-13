function calculateCircleArea(data) {
  let dataType = typeof data;

  if (dataType === "number") {
    let result = data ** 2 * Math.PI;
    console.log(result.toFixed(2));
  } else {
    console.log(
      `We can not calculate the circle area, because we receive a ${dataType}.`
    );
  }
}
calculateCircleArea(5);
