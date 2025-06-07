function validateCards(face, suits) {
  const cardData = {
    validFaces: [
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K",
      "A",
    ],
    validSuits: {
      S: "\u2660",
      H: "\u2665",
      D: "\u2666",
      C: "\u2663",
    },

    toString(face, suit) {
      return `${face}${this.validSuits[suit]}`;
    },
  };

  if (
    !cardData.validFaces.includes(face) ||
    !cardData.validSuits.hasOwnProperty(suits)
  ) {
    throw new Error("Error");
  }

  return cardData.toString(face, suits);
}

console.log(validateCards("Q", "S"));
