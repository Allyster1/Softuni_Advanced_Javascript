function calculateFigure() {
  class Figure {
    constructor(units = "cm") {
      if (!["mm", "cm", "m"].includes(units)) {
        units = "cm";
      }
      this.units = units;
    }

    convertValue(value) {
      switch (this.units) {
        case "mm":
          return value * 10;
        case "cm":
          return value;
        case "m":
          return value / 100;
      }
    }

    changeUnits(newUnit) {
      if (["mm", "cm", "m"].includes(newUnit)) {
        this.units = newUnit;
      }
    }

    toString() {
      return `Figures units: ${this.units}`;
    }
  }

  class Circle extends Figure {
    constructor(radius, units) {
      super(units);
      this._radius = radius;
    }

    get radius() {
      return this.convertValue(this._radius);
    }

    get area() {
      const r = this.radius;
      return Math.PI * r * r;
    }

    toString() {
      return `Figures units: ${this.units} Area: ${this.area} - radius: ${this.radius}`;
    }
  }

  class Rectangle extends Figure {
    constructor(width, height, units) {
      super(units);
      this._width = width;
      this._height = height;
    }

    get width() {
      return this.convertValue(this._width);
    }

    get height() {
      return this.convertValue(this._height);
    }

    get area() {
      return this.width * this.height;
    }

    toString() {
      return `Figures units: ${this.units} Area: ${this.area} - width: ${this.width}, height: ${this.height}`;
    }
  }

  return { Figure, Circle, Rectangle };
}

const { Circle, Rectangle } = calculateFigure();

let c = new Circle(5);
console.log(c.area); // 78.53981633974483
console.log(c.toString()); // Figures units: cm Area: 78.53981633974483 - radius: 5
c.changeUnits("mm");
console.log(c.area); // 7853.981633974483
console.log(c.toString()); // Figures units: mm Area: 7853.981633974483 - radius: 50

let r = new Rectangle(3, 4, "mm");
console.log(r.area); // 1200
console.log(r.toString()); // Figures units: mm Area: 1200 - width: 30, height: 40
r.changeUnits("cm");
console.log(r.area); // 12
console.log(r.toString()); // Figures units: cm Area: 12 - width: 3, height: 4
