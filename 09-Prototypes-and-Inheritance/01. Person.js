function createPerson(firstName, lastName) {
  const person = {
    firstName,
    lastName,
  };

  Object.defineProperty(person, "fullName", {
    configurable: true,
    enumerable: true,
    get() {
      return `${this.firstName} ${this.lastName}`;
    },
    set(value) {
      let [firstName, lastName] = value.split(" ");

      if (!firstName || !lastName) {
        return;
      }

      this.firstName = firstName;
      this.lastName = lastName;
    },
  });

  return person;
}

let person = createPerson("Peter", "Ivanov");
console.log(person.fullName); //Peter Ivanov
person.firstName = "George";
console.log(person.fullName); //George Ivanov
person.lastName = "Peterson";
console.log(person.fullName); //George Peterson
person.fullName = "Nikola Tesla";
console.log(person.firstName); //Nikola
console.log(person.lastName);
