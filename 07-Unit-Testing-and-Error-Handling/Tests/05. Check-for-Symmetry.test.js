import { expect } from "chai";
import { isSymmetric } from "../05. Check-for-Symmetry.js";

describe("Main Tests", () => {
  it("returns false for non-array input", () => {
    expect(isSymmetric(1)).to.be.false;
    expect(isSymmetric("1")).to.be.false;
    expect(isSymmetric({})).to.be.false;
  });

  it("returns false for a null input", () => {
    expect(isSymmetric(null)).to.be.false;
  });

  it("returs false for undefined input", () => {
    expect(isSymmetric(undefined)).to.be.false;
  });

  it("returns true for symmetric arrays", () => {
    expect(isSymmetric([1, 2, 3])).to.be.false;
    expect(isSymmetric([1, 2, 1])).to.be.true;
    expect(isSymmetric([1, 2, 2, 1])).to.be.true;
    expect(isSymmetric(["a", "b", "a"])).to.be.true;
  });

  it("returns false for non-symmetric arrays", () => {
    expect(isSymmetric([1, 2, 3])).to.be.false;
    expect(isSymmetric([1, 2])).to.be.false;
    expect(isSymmetric(["a", "q"])).to.be.false;
    expect(isSymmetric([1, "1"])).to.be.false;
  });
});
