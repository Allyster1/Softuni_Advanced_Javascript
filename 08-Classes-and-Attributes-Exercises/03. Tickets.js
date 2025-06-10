function ticketStatistic(data, criteria) {
  let store = [];

  class Ticket {
    destination;
    price;
    status;

    constructor(destination, price, status) {
      this.destination = destination;
      this.price = price;
      this.status = status;
    }

    static sort(arr, criteria) {
      return arr.sort((a, b) => {
        return criteria == "price"
          ? a[criteria] - b[criteria]
          : a[criteria].localeCompare(b[criteria]);
      });
    }
  }

  for (const line of data) {
    let [destination, price, status] = line.split("|");
    const ticket = new Ticket(destination, Number(price), status);
    store.push(ticket);
  }

  return Ticket.sort(store, criteria);
}

console.table(
  ticketStatistic(
    [
      "Philadelphia|94.20|available",
      "New York City|95.99|available",
      "New York City|95.99|sold",
      "Boston|126.20|departed",
    ],
    "destination"
  )
);
