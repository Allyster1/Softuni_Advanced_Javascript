function printDeckOfCards(cardsArray) {
  const cardsData = [];

  for (const card of cardsArray) {
    const face = card.slice(0, -1);
    const suit = card.slice(-1);

    const result = createCard(face, suit);
    if (result === null) {
      return;
    }

    cardsData.push(result);
  }

  console.log(cardsData.join(" "));

  function createCard(face, suit) {
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
      !cardData.validSuits.hasOwnProperty(suit)
    ) {
      console.log(`Invalid card: ${face}${suit}`);
      return null;
    }

    return cardData.toString(face, suit);
  }
}

// printDeckOfCards(["5S", "3D", "QD", "1C"]);
printDeckOfCards(["AS", "10D", "KH", "2C"]);
