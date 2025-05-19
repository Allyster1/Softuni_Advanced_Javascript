function cityTaxes(name, population, treasury) {
  let townInfo = {
    name: name,
    population: population,
    treasury: treasury,
    taxRate: 10,
    collectTaxes: function collectTaxes() {
      this.treasury += this.population * this.taxRate;
      return treasury;
    },
    applyGrowth: function applyGrowth(percentage) {
      return (this.population += this.population * (percentage / 100));
    },
    applyRecession: function applyRecession(percentage) {
      return (this.treasury -= this.treasury * (percentage / 100));
    },
  };

  return townInfo;
}

const city = cityTaxes("Tortuga", 7000, 15000);

city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);
