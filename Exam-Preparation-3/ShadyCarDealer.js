class ShadyCarDealership {
    constructor(dealerName) {
        this.dealerName = dealerName;
        this.availableCars = [];
        this.soldCars = [];
        this.revenue = 0;
    }

    addCar(model, year, mileage, price) {
        if (model === '' || year <= 1950 || mileage < 0 || price < 0) {
            throw new Error('Invalid car!');
        } else {
            this.availableCars.push({ model, year, mileage, price });
            return `New car added: ${model} (${year}) / ${mileage} km. - ${price.toFixed(2)}$`;
        }
    }

    sellCar(model, desiredYear) {
        let foundCar = this.availableCars.find(car => car.model === model);

        if (!foundCar) {
            return(`${model} was not found!`);
        } else {
            let soldPrice = foundCar.price;
            if (foundCar.year >= desiredYear) {
                // Price stays the same
            } else if (foundCar.year < desiredYear && desiredYear - foundCar.year <= 5) {
                soldPrice *= 0.9; // 10% discount
            } else if (foundCar.year < desiredYear && desiredYear - foundCar.year > 5) {
                soldPrice *= 0.8; // 20% discount
            }
            
            this.soldCars.push({ model: foundCar.model, year: foundCar.year, mileage: foundCar.mileage, soldPrice });
            this.availableCars = this.availableCars.filter(car => car.model !== model);
            this.revenue += soldPrice;
            return `${model} (${foundCar.year}) was sold for ${soldPrice.toFixed(2)}$`;
        }
    }

    prepareCarForSale(model) {
        let foundCar = this.availableCars.find(car => car.model === model);

        if (!foundCar) {
            return(`${model} was not found for preparation!`);
        } else {
            foundCar.mileage *= 0.5; // Reduce mileage by 50%
            foundCar.price *= 1.3;   // Increase price by 30%
            return `${model} (${foundCar.year}) is prepared for sale with ${foundCar.mileage.toFixed(0)} km. - ${foundCar.price.toFixed(2)}$`;
        }
    }

    salesJournal(criteria) {
        if (criteria !== 'year' && criteria !== 'model') {
            throw new Error('Invalid criteria!');
        }

        if (criteria === 'year') {
            this.soldCars.sort((a, b) => b.year - a.year);
        } else if (criteria === 'model') {
            this.soldCars.sort((a, b) => a.model.localeCompare(b.model));
        }

        let result = [];
        result.push(`${this.dealerName} has a total income of ${this.revenue.toFixed(2)}$`);
        result.push(`${this.soldCars.length} cars sold:`);
        this.soldCars.forEach(car => result.push(`${car.model} (${car.year}) / ${car.mileage} km. / ${car.soldPrice.toFixed(2)}$`));
        
        return result.join('\n');
    }
}

// Example usage:
const dealership = new ShadyCarDealership('Shady Motors');
console.log(dealership.addCar('Honda CR-V', 2010, 120000, 15000));
console.log(dealership.addCar('VW Golf', 2011, 130000, 12000));
console.log(dealership.addCar('BMW X3', 2005, 220000, 9000));
console.log(dealership.prepareCarForSale('Honda CR-V'));
// console.log(dealership.prepareCarForSale('BMW X3'));
console.log(dealership.sellCar('Honda CR-V', 2012));
console.log(dealership.sellCar('VW Golf', 2011));
console.log(dealership.salesJournal('model'));



