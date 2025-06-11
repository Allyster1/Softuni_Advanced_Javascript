function toStringExtension() {
  class Person {
    name;
    email;
    constructor(name, email) {
      this.name = name;
      this.email = email;
    }

    toString() {
      return `${this.constructor.name} (name: ${this.name}, email: ${this.email}`;
    }
  }

  class Student extends Person {
    course;
    constructor(name, email, course) {
      super(name, email);
      this.course = course;
    }

    toString() {
      return `${super.toString()}, course: ${this.course})`;
    }
  }

  class Teacher extends Person {
    subject;
    constructor(name, email, subject) {
      super(name, email);
      this.subject = subject;
    }

    toString() {
      return `${super.toString()}, subject: ${this.subject})`;
    }
  }

  return { Person, Teacher, Student };
}
