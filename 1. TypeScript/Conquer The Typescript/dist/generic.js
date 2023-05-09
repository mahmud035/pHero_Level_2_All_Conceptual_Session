"use strict";
const myNumbers = [1, 2, 3, 4, 5];
const myString = ['a', 'b', 'c', 'd'];
const myBoolean = [true, false];
const ourInfo = [
    { name: 'John', age: 34 },
    { name: 'Alex', age: 44 },
    { name: 'Smith', age: 54 },
];
const A = [20, 'hello', true];
const B = ['hello', true, 55];
const C = ['hello', 111, 'john'];
// console.log(A);
// console.log(B);
// console.log(C);
//* generic in function
const printInfo = (param1, param2) => {
    console.log(`${param1} ${param2}`);
    return param1;
};
printInfo('John', 30);
printInfo(112, true);
printInfo('Alex', true);
const me = {
    name: 'John',
    age: '30 years',
    mark: 110,
};
const myTest = 'name';
const myTest1 = 'name';
const data = {
    name: 'Agni 2',
    duration: 2000,
    category: 'Action',
};
// console.log(data[myTest1]);
