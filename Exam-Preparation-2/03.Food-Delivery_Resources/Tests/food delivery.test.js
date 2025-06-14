import { expect } from "chai";
import { foodDelivery } from "../food delivery.js";

describe("foodDelivery Module Tests", () => {
  describe("getCategory(category) Tests", () => {
    it("returns 'Dishes that contain no animal products' with input Vegan", () => {
      const product = foodDelivery.getCategory("Vegan");
      expect(product).to.equal("Dishes that contain no animal products.");
    });
    it("returns 'Dishes that contain no meat or fish.' with input Vegetarian", () => {
      const product = foodDelivery.getCategory("Vegetarian");
      expect(product).to.equal("Dishes that contain no meat or fish.");
    });
    it("returns 'Dishes that contain no gluten.' with input Gluten-Free", () => {
      const product = foodDelivery.getCategory("Gluten-Free");
      expect(product).to.equal("Dishes that contain no gluten.");
    });
    it("returns 'All available dishes.' with input All", () => {
      const product = foodDelivery.getCategory("All");
      expect(product).to.equal("All available dishes.");
    });
    it("returns 'Invalid Category!' with an invalid input", () => {
      expect(() => foodDelivery.getCategory("Only Meat")).to.throw(
        "Invalid Category!"
      );
    });
  });

  // [{ name: "coffee", price: 5 }] , 5
  describe("addMenuItem(menuItem, maxPrice) Tests", () => {
    it("returns 'Invalid Information!' for invalid inputs", () => {
      expect(() => foodDelivery.addMenuItem(null, true)).to.throw(
        "Invalid Information!"
      );
    });

    it("returns 'Invalid Information!' for a maxPrice lower than 5", () => {
      expect(() =>
        foodDelivery.addMenuItem([{ name: "coffee", price: 5 }], 2)
      ).to.throw("Invalid Information!");
    });

    it("returns single item that has price equal or lower than maxPrice", () => {
      const result = foodDelivery.addMenuItem(
        [
          { name: "coffee", price: 5 },
          { name: "energy drink", price: 10 },
        ],
        5
      );
      expect(result).to.equal(
        "There are 1 available menu items matching your criteria!"
      );
    });

    it("returns multiple items that have price equal or lower than maxPrice", () => {
      const result = foodDelivery.addMenuItem(
        [
          { name: "coffee", price: 5 },
          { name: "energy drink", price: 10 },
        ],
        15
      );
      expect(result).to.equal(
        "There are 2 available menu items matching your criteria!"
      );
    });
  });

  describe("calculateOrderCost(shipping, addons, discount) Tests", () => {
    it("returns 'Invalid Information!' for invalid inputs", () => {
      expect(() =>
        foodDelivery.calculateOrderCost("test", 123, "invalid")
      ).to.throw("Invalid Information!");
    });
    //shipping ['standard', 'express'] And addons['sauce', 'beverage']
    it("returns $0.00 if shipping and addons have invalid strings", () => {
      const result = foodDelivery.calculateOrderCost(
        ["baklava"],
        ["tarator"],
        false
      );
      expect(result).to.equal("You spend $0.00 for shipping and addons!");
    });
    it("returns $0.00 with applied 15% discount if last param is set to true", () => {
      const result = foodDelivery.calculateOrderCost(
        ["baklava"],
        ["tarator"],
        true
      );
      expect(result).to.equal(
        "You spend $0.00 for shipping and addons with a 15% discount!"
      );
    });
    it("returns total with 2 fixed decimals for valid inputs and boolean set to false", () => {
      const result = foodDelivery.calculateOrderCost(
        ["standard", "standard", "express"],
        ["sauce", "sauce", "beverage"],
        false
      );
      expect(result).to.equal("You spend $16.50 for shipping and addons!");
    });
    it("returns total with 2 fixed decimals and 15% discount for valid inputs and boolean set to true", () => {
      const result = foodDelivery.calculateOrderCost(
        ["standard", "standard", "express"],
        ["sauce", "sauce", "beverage"],
        true
      );
      expect(result).to.equal(
        "You spend $14.03 for shipping and addons with a 15% discount!"
      );
    });
  });
});
