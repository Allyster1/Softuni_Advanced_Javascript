function solve() {
  const button = document.querySelector("#btnSend");
  button.addEventListener("click", calculateBestRestaurant);

  function calculateBestRestaurant() {
    const inputText = document.querySelector("textarea");
    const restaurantEntries = JSON.parse(inputText.value);

    const restaurants = {};

    for (const element of restaurantEntries) {
      const [restaurantName, workersInfo] = element.split(" - ");
      const workerList = workersInfo.split(", ");

      if (!restaurants[restaurantName]) {
        restaurants[restaurantName] = {
          totalSalary: 0,
          bestSalary: 0,
          workers: [],
        };
      }

      const currentRestaurant = restaurants[restaurantName];
      for (const worker of workerList) {
        const [name, salaryStr] = worker.split(" ");
        const salary = Number(salaryStr);

        currentRestaurant.workers.push({ name, salary });
        currentRestaurant.totalSalary += salary;

        if (salary > currentRestaurant.bestSalary) {
          currentRestaurant.bestSalary = salary;
        }
      }
    }

    let bestRestaurant = null;
    let highestAverage = 0;

    for (const [name, data] of Object.entries(restaurants)) {
      const averageSalary = data.totalSalary / data.workers.length;

      if (
        averageSalary > highestAverage ||
        (averageSalary === highestAverage && !bestRestaurant)
      ) {
        highestAverage = averageSalary;
        bestRestaurant = {
          name,
          averageSalary,
          bestSalary: data.bestSalary,
          workers: data.workers,
        };
      }
    }

    bestRestaurant.workers.sort((a, b) => b.salary - a.salary);

    const workersOutput = bestRestaurant.workers
      .map((worker) => `Name: ${worker.name} With Salary: ${worker.salary}`)
      .join(" ");

    const restaurantInfo =
      `Name: ${bestRestaurant.name} ` +
      `Average Salary: ${bestRestaurant.averageSalary.toFixed(2)} ` +
      `Best Salary: ${bestRestaurant.bestSalary.toFixed(2)}`;

    document.querySelector("#bestRestaurant p").textContent = restaurantInfo;
    document.querySelector("#workers p").textContent = workersOutput;
    inputText.value = "";
  }
}
