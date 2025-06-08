import { expect } from "chai";
import { isOddOrEven } from "../02. Even-or-Odd.js";

describe("Main Tests", () => {
  it("returns undefined, if the input type is not a string", () => {
    expect(isOddOrEven(10)).to.be.undefined;
    expect(isOddOrEven([])).to.be.undefined;
    expect(isOddOrEven(["test"])).to.be.undefined;
    expect(isOddOrEven({})).to.be.undefined;
    expect(isOddOrEven({ test: "hello" })).to.be.undefined;
    expect(isOddOrEven(null)).to.be.undefined;
    expect(isOddOrEven(undefined)).to.be.undefined;
  });

  it("returns the value, if the input type is a string", () => {
    expect(isOddOrEven("10")).to.be.string;
    expect(isOddOrEven("1")).to.be.string;
    expect(isOddOrEven("test")).to.be.string;
    expect(isOddOrEven("apple")).to.be.string;
  });

  it("returns even, if the length of the input is even", () => {
    expect(isOddOrEven("10")).to.equal("even");
    expect(isOddOrEven("test")).to.equal("even");
    expect(isOddOrEven("mobile")).to.equal("even");
  });

  it("returns odd, if the length of the input is odd", () => {
    expect(isOddOrEven("1")).to.equal("odd");
    expect(isOddOrEven("white monster")).to.equal("odd");
    expect(isOddOrEven("apple")).to.equal("odd");
  });
});
