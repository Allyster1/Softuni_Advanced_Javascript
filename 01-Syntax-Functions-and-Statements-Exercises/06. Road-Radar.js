function calculateLimit(speed, area) {
  const areaLimit = {
    residential: 20,
    city: 50,
    interstate: 90,
    motorway: 130,
  };
  let status;
  const currentLimit = areaLimit[area];
  const overLimit = speed - currentLimit;

  if (overLimit <= 20) {
    status = "speeding";
  } else if (overLimit <= 40) {
    status = "excessive speeding";
  } else {
    status = "reckless driving";
  }

  if (overLimit <= 0) {
    console.log(`Driving ${speed} km/h in a ${currentLimit} zone`);
  } else {
    console.log(
      `The speed is ${overLimit} km/h faster than the allowed speed of ${currentLimit} - ${status}`
    );
  }
}

calculateLimit(40, "city");
// calculateLimit(21, "residential");
// calculateLimit(120, "interstate");
// calculateLimit(200, "motorway");
