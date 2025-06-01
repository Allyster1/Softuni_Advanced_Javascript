function filterData(inputData, criteria) {
  const parsedData = JSON.parse(inputData);
  const [criteriaKey, criteriaValue] = criteria.split("-");

  const uniquePersonsMap = new Map();

  parsedData.forEach((person) => {
    if (criteriaValue === "all" || person[criteriaKey] === criteriaValue) {
      const fullName = `${person.first_name} ${person.last_name}`;
      if (!uniquePersonsMap.has(fullName)) {
        uniquePersonsMap.set(fullName, person);
      }
    }
  });

  let index = 0;
  uniquePersonsMap.forEach((person) => {
    console.log(
      `${index}. ${person.first_name} ${person.last_name} - ${person.email}`
    );
    index += 1;
  });
}

filterData(
  `[{
"id": "1",
"first_name": "Ardine",
"last_name": "Bassam",
"email": "abassam0@cnn.com",
"gender": "Female"
}, {
"id": "2",
"first_name": "Kizzee",
"last_name": "Jost",
"email": "kjost1@forbes.com",
"gender": "Female"
},
{
"id": "3",
"first_name": "Evanne",
"last_name": "Maldin",
"email": "emaldin2@hostgator.com",
"gender": "Male"
}]`,
  "gender-Female"
);
