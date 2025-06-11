function calculateFigure() {
  class Figure {
    units;
    constructor(units) {
      if (typeof units !== "string" || !["mm", "m"].includes(units)) {
        units = "cm";
      }

      this.units = units;
    }

    get area() {
      return this;
    }

    set changeUnits(value) {
      if (!["cm", "m", "mm"].includes(value)) {
        return;
      }

      if (this.units === "mm") {
      }
    }

    toString() {
      return `Figures units: ${this.units}`;
    }
  }

  class Circle extends Figure {
    radius;
    constructor(radius, units) {
      super(units);
      this.radius = radius;
    }

    get area() {
      return Math.PI * this.radius * this.radius;
    }

    toString() {
      return `Figures units: ${this.units} Area: ${this.area} - radius: ${this.radius}`;
    }
  }

  class Rectangle extends Figure {
    width;
    height;
    units;
    constructor(width, height, units) {
      super(units);
      this.width = width;
      this.height = height;
      this.units = units;
    }

    get area() {
      return this.width * this.height;
    }
    toString() {
      return `Figures units: ${this.units} Area: ${this.area} - width: ${this.width}, height: ${this.height}`;
    }
  }

  let r = new Rectangle(3, 4, "mm");
  console.log(r);

  console.log(r.area); // 1200
  console.log(r.toString()); //Figures units: mm Area: 1200 - width: 30, height: 40

  return { Figure, Circle, Rectangle };
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
