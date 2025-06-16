class BikeRentalService {
  constructor(name, location) {
    this.name = name;
    this.location = location;
    this.availableBikes = [];
  }

  addBikes(bikes) {
    const addedBrands = [];

    for (let element of bikes) {
      let [brand, quantity, price] = element.split("-");

      price = Number(price);
      quantity = Number(quantity);

      const existingBikeIndex = this.availableBikes.findIndex(
        (bike) => bike.brand === brand
      );

      if (existingBikeIndex !== -1) {
        const existingBike = this.availableBikes[existingBikeIndex];
        existingBike.quantity += quantity;
        if (price > existingBike.price) {
          existingBike.price = price;
        }
      } else {
        this.availableBikes.push({ brand, quantity, price });
        addedBrands.push(brand);
      }
    }

    return `Successfully added ${[...new Set(addedBrands)].join(", ")}`;
  }

  rentBikes(selectedBikes) {
    let totalPrice = 0;
    let brandNotFound = false;

    for (let element of selectedBikes) {
      const [brand, quantity] = element.split("-");
      const bikeIndex = this.availableBikes.findIndex(
        (bike) => bike.brand === brand
      );
      const availableQuantity =
        bikeIndex !== -1 ? this.availableBikes[bikeIndex].quantity : 0;

      if (bikeIndex === -1 || parseInt(quantity) > availableQuantity) {
        brandNotFound = true;
      } else {
        const pricePerBike = this.availableBikes[bikeIndex].price;
        totalPrice += parseInt(quantity) * pricePerBike;
        this.availableBikes[bikeIndex].quantity -= parseInt(quantity);
      }
    }

    if (brandNotFound) {
      return `Some of the bikes are unavailable or low on quantity in the bike rental service.`;
    }
    return `Enjoy your ride! You must pay the following amount $${totalPrice.toFixed(
      2
    )}.`;
  }

  returnBikes(returnedBikes) {
    let brandNotFound = false;

    for (let element of returnedBikes) {
      const [brand, quantity] = element.split("-");
      const bikeIndex = this.availableBikes.findIndex(
        (bike) => bike.brand === brand
      );

      if (bikeIndex === -1) {
        brandNotFound = true;
      } else {
        this.availableBikes[bikeIndex].quantity += parseInt(quantity);
      }
    }

    if (brandNotFound) {
      return "Some of the returned bikes are not from our selection.";
    } else {
      return "Thank you for returning!";
    }
  }

  revision() {
    let result = [];
    result.push(`Available bikes:`);

    const sortedBikes = this.availableBikes.sort((a, b) => a.price - b.price);

    for (let bike of sortedBikes) {
      result.push(
        `${bike.brand} quantity:${bike.quantity} price:$${bike.price}`
      );
    }
    result.push(
      `The name of the bike rental service is ${this.name}, and the location is ${this.location}.`
    );
    return result.join(`\n`);
  }
}
