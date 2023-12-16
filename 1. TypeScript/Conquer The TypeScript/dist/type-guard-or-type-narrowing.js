"use strict";
/**
 ** Three types:
 ** 1. of guard
 ** 2. in guard
 ** 3. instanceof guard
 * */
const doSomething = (a) => {
    if (typeof a === 'number') {
        return a;
    }
    return a;
};
const getInfo = (info) => {
    if ('phone' in info) {
        return `Type X: phone ${info.phone}`;
    }
    else if ('salary' in info) {
        return `Type Y: salary ${info.salary}`;
    }
};
//* 3. instanceof guard (using "instanceof" keyword)
class P {
    constructor(position, salary) {
        this.position = position;
        this.salary = salary;
    }
    showDetails() {
        console.log(`Position: ${this.position}`);
    }
}
class Q extends P {
    constructor(position, salary) {
        super(position, salary);
        this.position = position;
        this.salary = salary;
    }
    showSalary() {
        console.log(`Salary: ${this.salary}`);
    }
}
class R extends P {
    constructor(position, salary) {
        super(position, salary);
        this.position = position;
        this.salary = salary;
    }
    showSalaryWithPosition() {
        console.log(`Salary: ${this.salary}, Position: ${this.position}`);
    }
}
function findInstance(person) {
    if (person instanceof Q) {
        person.showSalary();
    }
    else if (person instanceof R) {
        person.showSalaryWithPosition();
    }
}
const p4 = new Q('developer', 100000);
const p5 = new R('engineer', 300000);
