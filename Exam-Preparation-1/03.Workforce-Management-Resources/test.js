let expect = require("chai").expect;
let workforceManagement = require("./workforceManagement");

describe("Workforce Management Tests", () => {
  it("recruitStaff", () => {
    expect(() =>
      workforceManagement.recruitStaff("John Doe", "QA", 1)
    ).to.throw("We are not currently hiring for this role.");
    expect(() =>
      workforceManagement.recruitStaff("Alice Smith", "Designer", null)
    ).to.throw("We are not currently hiring for this role.");
    expect(() =>
      workforceManagement.recruitStaff("Bob Johnson", "Tester", 2)
    ).to.throw("We are not currently hiring for this role.");
    expect(
      workforceManagement.recruitStaff("Charlie Brown", "Developer", 0)
    ).to.equal("Charlie Brown is not suitable for this role.");
    expect(
      workforceManagement.recruitStaff("Charlie Brown", "Developer", 5)
    ).to.equal(
      "Charlie Brown has been successfully recruited for the role of Developer."
    );
    expect(() =>
      workforceManagement.recruitStaff("Eve Williams", "Developer", 3)
    ).not.to.throw();
  });

  it("computeWages", () => {
    expect(() => {
      workforceManagement.computeWages("40");
    }).to.throw("Invalid hours");
    expect(() => {
      workforceManagement.computeWages(-1);
    }).to.throw("Invalid hours");
    expect(() => {
      workforceManagement.computeWages(null);
    }).to.throw("Invalid hours");
    expect(() => {
      workforceManagement.computeWages(undefined);
    }).to.throw("Invalid hours");
    expect(() => {
      workforceManagement.computeWages(Boolean);
    }).to.throw("Invalid hours");
    expect(workforceManagement.computeWages(35)).to.equal(630);
    expect(workforceManagement.computeWages(180)).to.equal(4740);
  });

  it("dismissEmployee", () => {
    const employees = ["John", "Alice", "Bob", "Charlie"];
    expect(() => {
      workforceManagement.dismissEmployee("employees", 2);
    }).to.throw("Invalid input");
    expect(() => {
      workforceManagement.dismissEmployee(employees, "a");
    }).to.throw("Invalid input");
    expect(() => {
      workforceManagement.dismissEmployee(employees, 5);
    }).to.throw("Invalid input");
    expect(workforceManagement.dismissEmployee(employees, 1)).to.equal(
      "John, Bob, Charlie"
    );
  });
});
