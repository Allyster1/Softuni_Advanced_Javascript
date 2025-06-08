import { expect } from "chai";
import { rgbToHexColor } from "../06. RGB-to-Hex.js";

describe("Main Tests", () => {
  it("returns undefined for a non-integer input", () => {
    expect(rgbToHexColor("1", "2", "3")).to.be.undefined;
    expect(rgbToHexColor([], [], [])).to.be.undefined;
    expect(rgbToHexColor({}, {}, {})).to.be.undefined;
    expect(rgbToHexColor("1", [], {})).to.be.undefined;
    expect(rgbToHexColor(1, "2", "3")).to.be.undefined;
    expect(rgbToHexColor(1, 2, "3")).to.be.undefined;
    expect(rgbToHexColor(1.8, 2.3, 3.15)).to.be.undefined;
  });

  it("returns undefined when not all parameters are provided", () => {
    expect(rgbToHexColor(100)).to.be.undefined;
    expect(rgbToHexColor(69, 69)).to.be.undefined;
    expect(rgbToHexColor()).to.be.undefined;
  });

  it("returns undefined for an integer lower than 0", () => {
    expect(rgbToHexColor(-1, 0, 0)).to.be.undefined;
    expect(rgbToHexColor(0, -5, 0)).to.be.undefined;
    expect(rgbToHexColor(0, 0, -6)).to.be.undefined;
    expect(rgbToHexColor(-11, -5, -6)).to.be.undefined;
  });

  it("returns undefined for an integer higher than 255", () => {
    expect(rgbToHexColor(300, 0, 0)).to.be.undefined;
    expect(rgbToHexColor(0, 350, 0)).to.be.undefined;
    expect(rgbToHexColor(0, 0, 800)).to.be.undefined;
    expect(rgbToHexColor(323, 600, 800)).to.be.undefined;
  });

  it("returns a hexadecimal format as a string", () => {
    expect(rgbToHexColor(5, 10, 15)).to.be.a("string");
    expect(rgbToHexColor(0, 0, 0)).to.be.a("string");
    expect(rgbToHexColor(255, 255, 255)).to.be.a("string");
  });

  it("returns the correct hexadecimal value with a valid integer input", () => {
    expect(rgbToHexColor(255, 255, 255)).to.be.equal("#FFFFFF");
    expect(rgbToHexColor(0, 0, 0)).to.be.equal("#000000");
  });
});
