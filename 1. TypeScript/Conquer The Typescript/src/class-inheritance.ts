// create a class

// Parent class
class Person {
  // parameter properties
  constructor(public name: string, public age: number) {}
}

const person0 = new Person('John', 30);
console.log(person0);

//* inheritance
class Person1 extends Person {
  constructor(public name: string, public age: number) {
    super(name, age);
  }

  show() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }
}

const person1 = new Person1('John', 40);
// person1.show();

class Person2 extends Person1 {
  constructor(
    public name: string,
    public age: number,
    public salary: number,
    public position: string
  ) {
    super(name, age);
  }
}

const person2 = new Person2('Mahmud', 30, 100000, 'Developer');
person2.show();
