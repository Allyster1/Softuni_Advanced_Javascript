let expect = require("chai").expect;
let artGallery = require("./artGallery");

describe("art Gallery", () => {
  it("addArtwork", () => {
    expect(() => {
      artGallery.addArtwork(50, "30 x 40", "Van Gogh");
    }).to.throw("Invalid Information!");
    expect(() => {
      artGallery.addArtwork("50", "30 x 40", 5);
    }).to.throw("Invalid Information!");
    expect(() => {
      artGallery.addArtwork("Sunflower", "30 d 40", "Van Gogh");
    }).to.throw("Invalid Dimensions!");
    expect(() => {
      artGallery.addArtwork("Sunflower", 5, "Van Gogh");
    }).to.throw("Invalid Dimensions!");
    expect(() => {
      artGallery.addArtwork("Sunflower", "30 x40", "Van Gogh");
    }).to.throw("Invalid Dimensions!");
    expect(() => {
      artGallery.addArtwork("Sunflower", "30x 40", "Van Gogh");
    }).to.throw("Invalid Dimensions!");
    expect(() => {
      artGallery.addArtwork("Sunflower", "-30 x 40", "Van Gogh");
    }).to.throw("Invalid Dimensions!");
    expect(() => {
      artGallery.addArtwork("Sunflower", "30 x -40", "Van Gogh");
    }).to.throw("Invalid Dimensions!");
    expect(() => {
      artGallery.addArtwork("Sunflower", "30 x 40", "Gan Vogh");
    }).to.throw("This artist is not allowed in the gallery!");
    expect(artGallery.addArtwork("Sunflower", "30 x 40", "Van Gogh")).to.equal(
      "Artwork added successfully: 'Sunflower' by Van Gogh with dimensions 30 x 40."
    );
  });

  it("calculateCosts", () => {
    expect(() => {
      artGallery.calculateCosts(5, 5, 5);
    }).to.throw("Invalid Information!");
    expect(() => {
      artGallery.calculateCosts("5", 5, true);
    }).to.throw("Invalid Information!");
    expect(() => {
      artGallery.calculateCosts(5, "5", true);
    }).to.throw("Invalid Information!");
    expect(() => {
      artGallery.calculateCosts(5, -5, true);
    }).to.throw("Invalid Information!");
    expect(() => {
      artGallery.calculateCosts(-5, 5, true);
    }).to.throw("Invalid Information!");
    expect(artGallery.calculateCosts(5, 5, true)).to.equal(
      "Exhibition and insurance costs are 9$, reduced by 10% with the help of a donation from your sponsor."
    );
    expect(artGallery.calculateCosts(5, 5, false)).to.equal(
      "Exhibition and insurance costs are 10$."
    );
  });

  it("organizeExhibits", () => {
    expect(() => {
      artGallery.organizeExhibits("5", "5");
    }).to.throw("Invalid Information!");
    expect(() => {
      artGallery.organizeExhibits(5, "5");
    }).to.throw("Invalid Information!");
    expect(() => {
      artGallery.organizeExhibits("5", 5);
    }).to.throw("Invalid Information!");
    expect(() => {
      artGallery.organizeExhibits(-5, 5);
    }).to.throw("Invalid Information!");
    expect(() => {
      artGallery.organizeExhibits(5, -1);
    }).to.throw("Invalid Information!");
    expect(artGallery.organizeExhibits(50, 5)).to.equal(
      "You have 5 display spaces with 10 artworks in each space."
    );
    expect(artGallery.organizeExhibits(5, 5)).to.equal(
      "There are only 1 artworks in each display space, you can add more artworks."
    );
    expect(artGallery.organizeExhibits(9, 5)).to.equal(
      "There are only 1 artworks in each display space, you can add more artworks."
    );
  });
});
