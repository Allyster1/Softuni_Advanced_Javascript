function attachEventsListeners() {
  const inputs = {
    days: document.getElementById("days"),
    hours: document.getElementById("hours"),
    minutes: document.getElementById("minutes"),
    seconds: document.getElementById("seconds"),
  };

  const ratios = {
    days: 1,
    hours: 24,
    minutes: 1440,
    seconds: 86400,
  };

  const convert = (value, unit) => {
    const days = value / ratios[unit];
    for (const key in inputs) {
      inputs[key].value = days * ratios[key];
    }
  };

  document.querySelector("main").addEventListener("click", (e) => {
    if (e.target.type === "button") {
      const unit = e.target.previousElementSibling.id;
      const value = Number(inputs[unit].value);
      convert(value, unit);
    }
  });
}
