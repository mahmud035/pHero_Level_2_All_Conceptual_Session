"use strict";
// create a class
// Parent class
class Person {
    // parameter properties
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const person0 = new Person('John', 30);
console.log(person0);
//* inheritance
class Person1 extends Person {
    constructor(name, age) {
        super(name, age);
        this.name = name;
        this.age = age;
    }
    show() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}
const person1 = new Person1('John', 40);
// person1.show();
class Person2 extends Person1 {
    constructor(name, age, salary, position) {
        super(name, age);
        this.name = name;
        this.age = age;
        this.salary = salary;
        this.position = position;
    }
}
const person2 = new Person2('Mahmud', 30, 100000, 'Developer');
person2.show();
