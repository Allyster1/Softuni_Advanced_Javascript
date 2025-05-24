function fulfillOrder(carData) {
  let carInfo = {
    ...carData,
    color: "white",
  };

  console.log(carInfo);
}

fulfillOrder({
  model: "VW Golf II",
  power: 90,
  color: "blue",
  carriage: "hatchback",
  wheelsize: 14,
});
