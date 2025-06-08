import { expect } from "chai";
import { createCalculator } from "../07. Add-Subtract.js";

describe("Main Tests", () => {
  it("returns a module (object), and it's methods as props", () => {
    const calculate = createCalculator();
    expect(calculate).to.have.all.keys("add", "subtract", "get");
  });

  it("The methods add and subtract parse a string as a number", () => {
    const calculate = createCalculator();
    calculate.add("10");
    expect(calculate.get()).to.equal(10);

    calculate.subtract("5");
    expect(calculate.get()).to.equal(5);
  });

  it("The methods add and subtract takse a number that is added/subtractd from the internal sum", () => {
    const calculate = createCalculator();
    calculate.add(15);
    expect(calculate.get()).to.equal(15);

    calculate.subtract(10);
    expect(calculate.get()).to.equal(5);
  });
});
