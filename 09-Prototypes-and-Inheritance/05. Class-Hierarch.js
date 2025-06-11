function calculateFigure() {
  class Figure {
    units;
    constructor(units) {
      if (typeof units !== "string" || !["mm", "m"].includes(units)) {
        units = "cm";
      }

      this.units = units;
    }

    get _area() {
      return this.area;
    }

    changeUnits(value) {
      this.units = value;
    }

    toString() {
      return `Figures units: ${this.units}`;
    }
  }

  let f = new Figure("mmm");

  console.log(f);

  return { Figure };
}

calculateFigure();

// let c = new Circle(5);
// console.log(c.area); // 78.53981633974483
// console.log(c.toString()); // Figures units: cm Area: 78.53981633974483 - radius: 5

// let r = new Rectangle(3, 4, "mm");
// console.log(r.area); // 1200
// console.log(r.toString()); //Figures units: mm Area: 1200 - width: 30, height: 40
// r.changeUnits("cm");
// console.log(r.area); // 12
