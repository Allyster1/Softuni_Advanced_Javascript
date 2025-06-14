class BikeRentalService {
  constructor(name, location) {
    this.name = name;
    this.location = location;
    this.availableBikes = [];
  }

  addBikes(bikes) {
    class Bike {
      constructor(brand, quantity, price) {
        this.brand = brand;
        this.quantity = quantity;
        this.price = price;
      }
    }

    let addedBrands = new Set();

    for (const data of bikes) {
      let [brand, quantity, price] = data.split("-");
      price = Number(price);
      quantity = Number(quantity);
      let existingBike = this.availableBikes.find(
        (bike) => bike.brand === brand
      );

      if (existingBike) {
        existingBike.quantity += quantity;
        if (existingBike.price < price) {
          existingBike.price = price;
        }
      } else {
        this.availableBikes.push(new Bike(brand, quantity, price));
        addedBrands.add(brand);
      }
    }
    return `Successfully added ${[...addedBrands].join(", ")}`;
  }

  rentBikes(selectedBikes) {
    let totalPrice = 0;
    let brandNotFound = false;

    for (const bike of selectedBikes) {
      let [brand, quantity] = bike.split("-");
      let bikeIndex = this.availableBikes.findIndex(
        (bike) => (bike.brand = brand)
      );

      let availableQuantity =
        bikeIndex !== -1 ? this.availableBikes[bikeIndex].quantity : 0;

      if (bikeIndex === -1 || parseInt(quantity) > availableQuantity) {
        brandNotFound = true;
      } else {
        let priceBike = this.availableBikes[bikeIndex].price;
        totalPrice += priceBike * parseInt(quantity);
        this.availableBikes[bikeIndex].quantity -= parseInt(quantity);
      }
    }

    if (brandNotFound) {
      ("Some of the bikes are unavailable or low on quantity in the bike rental service.");
    }

    return `Enjoy your ride! You must pay the following amount $${totalPrice.toFixed(
      2
    )}.`;
  }

  returnBikes(returnBikes) {
    let hasInvalidBike = false;

    for (const data of returnBikes) {
      let [brand, quantity] = data.split("-");
      quantity = Number(quantity);

      let bike = this.availableBikes.find((b) => b.brand === brand);

      if (bike) {
        bike.quantity += quantity;
      } else {
        hasInvalidBike = true;
      }
    }

    return hasInvalidBike
      ? "Some of the returned bikes are not from our selection."
      : "Thank you for returning!";
  }

  revisiom() {
    let result = [];
    result.push("Available bikes:");

    const sortedBikes = this.availableBikes.sort((a, b) => a.price - b.price);

    for (const bike of sortedBikes) {
      result.push(
        `${bike[brand]} quantity: ${bike[quantity]} price:$${bike[price]}`
      );
    }
    result.push(
      `The name of the bike rental service is ${this.name}, and the location is ${this.location}.`
    );

    return result.join("\n");
  }
}
