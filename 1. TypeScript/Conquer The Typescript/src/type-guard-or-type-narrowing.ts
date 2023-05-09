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
