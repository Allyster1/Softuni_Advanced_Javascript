import { expect } from "chai";
import { sum } from "../04. Sum-of-Numbers.js";

describe("Sum numbers", () => {
  it("returns sum of a single number", () => {
    expect(sum([1])).to.equal(1);
  });

  it("returns sum of multiple numbers", () => {
    expect(sum([1, 1])).to.equal(2);
  });

  it("returns sum of multiple numbers of type string", () => {
    expect(sum(["2", "3", "4"])).to.equal(9);
  });
});
