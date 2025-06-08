import { expect } from "chai";
import { mathEnforcer } from "../04. Math-Enforcer.js";

describe("mathEnforcer", () => {
  describe("addFive", () => {
    it("should return undefined for non-number input", () => {
      expect(mathEnforcer.addFive("5")).to.be.undefined;
      expect(mathEnforcer.addFive(null)).to.be.undefined;
      expect(mathEnforcer.addFive([5])).to.be.undefined;
      expect(mathEnforcer.addFive({})).to.be.undefined;
    });

    it("should return correct result for positive numbers", () => {
      expect(mathEnforcer.addFive(10)).to.equal(15);
    });

    it("should return correct result for negative numbers", () => {
      expect(mathEnforcer.addFive(-3)).to.equal(2);
    });

    it("should return correct result for floating-point numbers", () => {
      expect(mathEnforcer.addFive(3.14)).to.be.closeTo(8.14, 0.01);
      expect(mathEnforcer.addFive(-2.5)).to.be.closeTo(2.5, 0.01);
    });
  });

  describe("subtractTen", () => {
    it("should return undefined for non-number input", () => {
      expect(mathEnforcer.subtractTen("10")).to.be.undefined;
      expect(mathEnforcer.subtractTen(null)).to.be.undefined;
      expect(mathEnforcer.subtractTen(undefined)).to.be.undefined;
      expect(mathEnforcer.subtractTen([10])).to.be.undefined;
    });

    it("should return correct result for positive numbers", () => {
      expect(mathEnforcer.subtractTen(20)).to.equal(10);
    });

    it("should return correct result for negative numbers", () => {
      expect(mathEnforcer.subtractTen(-10)).to.equal(-20);
    });

    it("should return correct result for floating-point numbers", () => {
      expect(mathEnforcer.subtractTen(10.5)).to.be.closeTo(0.5, 0.01);
      expect(mathEnforcer.subtractTen(-2.2)).to.be.closeTo(-12.2, 0.01);
    });
  });

  describe("sum", () => {
    it("should return undefined if first parameter is not a number", () => {
      expect(mathEnforcer.sum("5", 5)).to.be.undefined;
      expect(mathEnforcer.sum(null, 5)).to.be.undefined;
    });

    it("should return undefined if second parameter is not a number", () => {
      expect(mathEnforcer.sum(5, "5")).to.be.undefined;
      expect(mathEnforcer.sum(5, undefined)).to.be.undefined;
    });

    it("should return correct sum for positive numbers", () => {
      expect(mathEnforcer.sum(10, 5)).to.equal(15);
    });

    it("should return correct sum for negative numbers", () => {
      expect(mathEnforcer.sum(-3, -7)).to.equal(-10);
    });

    it("should return correct sum for mixed numbers", () => {
      expect(mathEnforcer.sum(-3, 7)).to.equal(4);
    });

    it("should return correct sum for floating-point numbers", () => {
      expect(mathEnforcer.sum(1.1, 2.2)).to.be.closeTo(3.3, 0.01);
      expect(mathEnforcer.sum(-1.5, -2.5)).to.be.closeTo(-4.0, 0.01);
      expect(mathEnforcer.sum(3.3, -1.1)).to.be.closeTo(2.2, 0.01);
    });
  });
});
