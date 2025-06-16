import { expect } from "chai";
import { artGallery } from "../artGallery.js";

describe("Tests for artGallery Module", () => {
  describe("addArtwork method Tests", () => {
    it("error 'Invalid Information!' for invalid title", () => {
      expect(() => artGallery.addArtwork(123, "30 x 30", "Picasso"));
    });
    it("error 'Invalid Information!' for invalid artist", () => {
      expect(() => artGallery.addArtwork("James", "30 x 30", "Dinko"));
    });
    it("error 'Invalid Information!' for invalid artist and title", () => {
      expect(() => artGallery.addArtwork(1234567, "30 x 30", "Dinko"));
    });
    it("error 'Invalid Dimensions!' for invalid dimension", () => {
      expect(() => artGallery.addArtwork("Charlie", "330", "Picasso"));
    });
    it("error 'This artist is not allowed in the gallery!' for invalid artist", () => {
      expect(() => artGallery.addArtwork("Charlie", "33 x 33", "Charlie"));
    });
    it("display artist added with valid input", () => {
      expect(() => artGallery.addArtwork("Charlie", "33 x 33", "Picasso"));
    });
  });
  describe("calculateCosts method Tests", () => {
    it("error on a single invalid input", () => {
      expect(() => artGallery.calculateCosts(10, "3", false));
    });
    it("error on multiple invalid inputs", () => {
      expect(() => artGallery.calculateCosts([10], "3", "test"));
    });
    it("returns exhibition and insurance cost", () => {
      expect(() => artGallery.calculateCosts(1500, 200, false));
    });
    it("returns exhibition and insurance cost with discount", () => {
      expect(() => artGallery.calculateCosts(1500, 200, true));
    });
  });
  describe("organizeExhibits method Tests", () => {
    it("error 'Invalid Information!' for invalid input", () => {
      expect(() => artGallery.organizeExhibits("Charlie", "33 x 33"));
    });
    it("error 'Invalid Information!' for invalid number inputs", () => {
      expect(() => artGallery.organizeExhibits(-5, 0));
    });
    it("returns limit if artworksPerSpace is lower than 5", () => {
      expect(() => artGallery.organizeExhibits(10, 2));
    });
    it("returns artwork in each space if artworksPerSpace is equal higher than 5", () => {
      expect(() => artGallery.organizeExhibits(10, 5));
    });
  });
});
