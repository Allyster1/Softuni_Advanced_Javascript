let expect = require("chai").expect;
let streamingServiceSelector = require("./streamingServiceSelector");

describe("streamingServiceSelector Tests", () => {
  describe("selectingContent", () => {
    it("should return valid content recommendation for Action Movie on Netflix", () => {
      const result = streamingServiceSelector.selectingContent(
        "Movie",
        "Netflix",
        "Action"
      );
      expect(result).to.equal(
        "You can watch this Action Movie on Netflix. Enjoy your Action-filled experience!"
      );
    });

    it("should throw an error for unsupported genre", () => {
      expect(() =>
        streamingServiceSelector.selectingContent("Movie", "Netflix", "Western")
      ).to.throw(
        "We currently support these genres: Action, Comedy, Drama, Thriller, Horror, Romance, Sci-Fi"
      );
    });

    it("should throw an error for unsupported content type", () => {
      expect(() =>
        streamingServiceSelector.selectingContent(
          "Podcast",
          "Netflix",
          "Action"
        )
      ).to.throw("We currently only support 'Movie' or 'TV Show' types.");
    });
  });

  describe("availablePlatforms", () => {
    it("should return available platforms excluding the selected one", () => {
      const result = streamingServiceSelector.availablePlatforms(
        ["Netflix", "Hulu", "Disney+", "Amazon Prime"],
        1
      );
      expect(result).to.equal(
        "Other available platforms are: Netflix, Disney+, Amazon Prime."
      );
    });

    it("should throw an error for invalid platform index", () => {
      expect(() =>
        streamingServiceSelector.availablePlatforms(
          ["Netflix", "Hulu", "Disney+"],
          -1
        )
      ).to.throw("Invalid platform selection.");
    });

    it("should throw an error for invalid platform index", () => {
      expect(() =>
        streamingServiceSelector.availablePlatforms(
          ["Netflix", "Hulu", "Disney+"],
          11
        )
      ).to.throw("Invalid platform selection.");
    });

    it("should throw an error for invalid platform index", () => {
      expect(() =>
        streamingServiceSelector.availablePlatforms(
          ["Netflix", "Hulu", "Disney+"],
          "8"
        )
      ).to.throw("Invalid platform selection.");
    });

    it("should throw an error for invalid platform index", () => {
      expect(() =>
        streamingServiceSelector.availablePlatforms(
          ["Netflix", "Hulu", "Disney+"],
          -1
        )
      ).to.throw("Invalid platform selection.");
    });
    it("should throw an error when platforms is not an array", () => {
      expect(() =>
        streamingServiceSelector.availablePlatforms("Netflix", 1)
      ).to.throw("Invalid platform selection.");
    });
    it("should throw an error when platforms is not an array", () => {
      expect(() => streamingServiceSelector.availablePlatforms({}, 1)).to.throw(
        "Invalid platform selection."
      );
    });
    it("should throw an error when platforms is not an array", () => {
      expect(() =>
        streamingServiceSelector.availablePlatforms("Netflix", 1)
      ).to.throw("Invalid platform selection.");
    });
  });

  describe("contentRating", () => {
    it("should return valid feedback for high rating and valid runtime", () => {
      const result = streamingServiceSelector.contentRating(120, 8.5);
      expect(result).to.equal(
        "This content is highly rated (8.5/10) and has a runtime of 2.00 hours. Enjoy your watch!"
      );
    });

    it("should return a warning for low rated content", () => {
      const result = streamingServiceSelector.contentRating(180, 6.3);
      expect(result).to.equal(
        "This content has a lower rating (6.3/10) and runs for 3.00 hours. You might want to check reviews first."
      );
    });

    it("should throw an error for invalid runtime", () => {
      expect(() => streamingServiceSelector.contentRating(-150, 7)).to.throw(
        "Invalid runtime or rating."
      );
    });
    it("should throw an error for invalid runtime", () => {
      expect(() => streamingServiceSelector.contentRating("50", 7)).to.throw(
        "Invalid runtime or rating."
      );
    });
    it("should throw an error for invalid viewer rating", () => {
      expect(() => streamingServiceSelector.contentRating(150, 11)).to.throw(
        "Invalid runtime or rating."
      );
    });

    it("should throw an error for invalid viewer rating", () => {
      expect(() => streamingServiceSelector.contentRating(150, "9")).to.throw(
        "Invalid runtime or rating."
      );
    });
  });
});
