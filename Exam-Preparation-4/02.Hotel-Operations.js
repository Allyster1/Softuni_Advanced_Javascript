class Hotel {
  constructor(initialBudget) {
    this.initialBudget = initialBudget;
    this.roomAvailability = {};
    this.supplyStock = {};
  }

  restockSupplies(supplies) {
    if (!Array.isArray(supplies)) {
      throw new Error("Invalid Input");
    }
    const messages = [];

    supplies.forEach((sup) => {
      const [name, quantityStr, priceStr] = sup.split(" ");
      if (
        typeof name !== "string" ||
        typeof Number(quantityStr) !== "number" ||
        typeof Number(priceStr) !== "number"
      ) {
        throw new TypeError("Invalid Input");
      }
      const quantity = Number(quantityStr);
      const price = Number(priceStr);

      if (price <= this.initialBudget) {
        name in this.supplyStock
          ? (this.supplyStock[name] += quantity)
          : (this.supplyStock[name] = quantity);
        this.initialBudget -= price;
        messages.push(`Successfully stocked ${quantity} ${name}`);
      } else {
        messages.push(
          `There was not enough money to restock ${quantity} ${name}`
        );
      }
    });

    return messages.join("\n");
  }

  //   addRoomType(roomType, neededSupplies, pricePerNight) {
  //     const messages = [];
  //     neededSupplies.forEach((sup) => {
  //         const [name, quantity] = sup.split(" ")

  //         if()

  //         name in roomAvailability ? messages.push(`The ${roomType} is already available in our hotel, try something different.`) :
  //     })
  //   }

  showAvailableRooms() {
    if (Object.keys(this.roomAvailability).length === 0) {
      return "Our rooms are not ready yet, please come back later...";
    } else {
      let message = [];
      for (const [k, v] of Object.entries(this.roomAvailability)) {
        message.push(`${k} - $${v}`);
      }
      return message.join("\n");
    }
  }
}

let hotel = new Hotel(500);

console.log(
  hotel.restockSupplies(["Soap 100 50", "Towels 20 100", "Shampoo 50 75"])
);

console.log(hotel.showAvailableRooms());
