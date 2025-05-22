function fulfillOrder(data) {
  const engineTypes = [
    { power: 90, volume: 1800 },
    { power: 120, volume: 2400 },
    { power: 200, volume: 3500 },
  ];

  const selectedEngine = engineTypes.find(
    (engine) => engine.power >= data.power
  );

  let wheelSize =
    data.wheelsize % 2 === 0 ? data.wheelsize - 1 : data.wheelsize;
  let wheels = new Array(4).fill(wheelSize);

  let carInfo = {
    model: data.model,
    engine: selectedEngine,
    carriage: {
      type: data.carriage,
      color: data.color,
    },
    wheels: wheels,
  };

  return carInfo;
}

fulfillOrder({
  model: "VW Golf II",
  power: 90,
  color: "blue",
  carriage: "hatchback",
  wheelsize: 14,
});
