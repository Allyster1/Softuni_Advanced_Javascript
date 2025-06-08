import { expect } from "chai";
import { lookupChar } from "../03. Char-Lookup.js";

describe("Main Tests", () => {
  it("returns undefined when the first argument is not a string", () => {
    expect(lookupChar(10, 1)).to.be.undefined;
    expect(lookupChar([15], 1)).to.be.undefined;
    expect(lookupChar({ name: "Gosho" }, 1)).to.be.undefined;
    expect(lookupChar(null, 1)).to.be.undefined;
    expect(lookupChar(10, "hello")).to.be.undefined;
  });

  it("returns undefined when the second argument is not a number", () => {
    expect(lookupChar("Gosho", "5")).to.be.undefined;
    expect(lookupChar("White Monster", [])).to.be.undefined;
    expect(lookupChar("Anemia", { index: 5 })).to.be.undefined;
    expect(lookupChar("Schizophrenia", null)).to.be.undefined;
    expect(lookupChar(155, "hello")).to.be.undefined;
  });

  it("returns undefined when the second argument is a floating point number", () => {
    expect(lookupChar("Gosho", 1.5)).to.be.undefined;
    expect(lookupChar("Hello", 0.99)).to.be.undefined;
  });

  it("returns 'Incorrect index' when index is negative or out of range", () => {
    expect(lookupChar("Gosho", -1)).to.equal("Incorrect index");
    expect(lookupChar("Gosho", 100)).to.equal("Incorrect index");
    expect(lookupChar("Test", 4)).to.equal("Incorrect index");
  });

  it("returns chartAt of the first argument for valid inputs", () => {
    expect(lookupChar("white monster", 0)).to.equal("w");
    expect(lookupChar("Schizophrenia", 4)).to.equal("z");
  });
});
