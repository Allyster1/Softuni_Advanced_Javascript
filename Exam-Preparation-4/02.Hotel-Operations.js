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

  addRoomType(roomType, neededSupplies, pricePerNight) {
    let roomExists = false;
    if (!(roomType in this.roomAvailability)) {
      this.roomAvailability[roomType] = [neededSupplies, pricePerNight];
      roomExists = true;
    }

    if (!roomExists) {
      return `The ${roomType} is already available in our hotel, try something different.`;
    } else {
      return `Great idea! Now with the ${roomType}, we have ${
        Object.keys(this.roomAvailability).length
      } types of rooms available, any other ideas?`;
    }
  }

  showAvailableRooms() {
    if (Object.keys(this.roomAvailability).length === 0) {
      return "Our rooms are not ready yet, please come back later...";
    } else {
      let message = [];
      for (const [k, v] of Object.entries(this.roomAvailability)) {
        message.push(`${k} - $ ${v[1]}`);
      }
      return message.join("\n");
    }
  }

  bookRoom(roomType) {
    if (roomType in this.roomAvailability) {
      const [neededSupplies, price] = this.roomAvailability[roomType];
      for (const supply of neededSupplies) {
        let [product, quantity] = supply.split(" ");
        quantity = Number(quantity);

        if (
          !(product in this.supplyStock) ||
          this.supplyStock[product] - quantity < 0
        ) {
          return `We are currently unable to accommodate your request for ${roomType}, sorry for the inconvenience.`;
        }
        return `Your booking for ${roomType} has been confirmed! The price is $${price} per night.`;
      }
    } else {
      return `There is no ${roomType} available, would you like to book another room?`;
    }
  }
}

let hotel = new Hotel(500);

console.log(
  hotel.restockSupplies(["Soap 100 50", "Towels 20 100", "Shampoo 50 75"])
);

console.log(hotel.addRoomType("Deluxe Suite", ["Soap 5", "Towels 2"], 200));
console.log(hotel.addRoomType("Standard Room", ["Soap 2", "Towels 1"], 100));
console.log(hotel.showAvailableRooms());
console.log(hotel.bookRoom("Apartment"));
console.log(hotel.bookRoom("Deluxe Suite"));
