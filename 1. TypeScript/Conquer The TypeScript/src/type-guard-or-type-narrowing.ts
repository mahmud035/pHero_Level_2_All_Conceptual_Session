/**
 ** Three types:
 ** 1. of guard
 ** 2. in guard
 ** 3. instanceof guard
 * */

//* 1. of guard (using "typeof" operator)
type typeOfData = number | string;
const doSomething = (a: typeOfData): typeOfData => {
  if (typeof a === 'number') {
    return a;
  }
  return a;
};

// console.log(doSomething(23));
// console.log(doSomething('Hello'));

//* 2. in guard (using "in" operator)
type X = {
  name: string;
  phone: number;
};

type Y = {
  name: string;
  address: string;
  salary: number;
};

const getInfo = (info: X | Y) => {
  if ('phone' in info) {
    return `Type X: phone ${info.phone}`;
  } else if ('salary' in info) {
    return `Type Y: salary ${info.salary}`;
  }
};

//* 3. instanceof guard (using "instanceof" keyword)
class P {
  constructor(public position: string, public salary: number) {}

  showDetails() {
    console.log(`Position: ${this.position}`);
  }
}
class Q extends P {
  constructor(public position: string, public salary: number) {
    super(position, salary);
  }

  showSalary() {
    console.log(`Salary: ${this.salary}`);
  }
}

class R extends P {
  constructor(public position: string, public salary: number) {
    super(position, salary);
  }

  showSalaryWithPosition() {
    console.log(`Salary: ${this.salary}, Position: ${this.position}`);
  }
}

function findInstance(person: P) {
  if (person instanceof Q) {
    person.showSalary();
  } else if (person instanceof R) {
    person.showSalaryWithPosition();
  }
}

const p4 = new Q('developer', 100000);
const p5 = new R('engineer', 300000);
