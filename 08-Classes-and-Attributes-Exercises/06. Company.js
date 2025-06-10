class Company {
  departments;

  constructor() {
    this.departments = {};
  }

  addEmployee(name, salary, position, department) {
    if (
      !name ||
      !position ||
      !department ||
      typeof salary !== "number" ||
      salary < 0
    ) {
      throw new Error("Invalid input!");
    }

    if (!this.departments.hasOwnProperty(department)) {
      this.departments[department] = {
        average: 0,
        sumSalary: 0,
        employees: [],
      };
    }

    this.departments[department].employees.push({ name, salary, position });
    this._updateDepartmentInfo(department, salary);

    return `New employee is hired. Name: ${name}. Position: ${position}`;
  }

  bestDepartment() {
    const [name, info] = this._findBestDepartment();
    let buff = `Best Department is ${name}\n`;
    buff += `Average Salary: ${info.average.toFixed(2)}\n`;
    info.employees
      .sort((emp1, emp2) => {
        return emp2.salary - emp1.salary || emp1.name.localeCompare(emp2.name);
      })
      .forEach((emp) => {
        buff += `${emp.name} ${emp.salary} ${emp.position}\n`;
      });

    return buff.trim();
  }

  _findBestDepartment() {
    return Object.entries(this.departments).sort(
      (a, b) => b[1].average - a[1].average
    )[0];
  }

  _updateDepartmentInfo(department, salary) {
    const currentDepartment = this.departments[department];
    currentDepartment.sumSalary += salary;
    currentDepartment.average =
      currentDepartment.sumSalary / currentDepartment.employees.length;
  }
}

let c = new Company();
c.addEmployee("Stanimir", 1000, "digital marketing manager", "Marketing");
c.addEmployee("Stanimir", 1000, "digital marketing manager", "Marketing");
console.log(c.bestDepartment());
