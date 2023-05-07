"use strict";
// normal function
function heroNormalFunc(a, b) {
    const sum = a + b;
    return `Sum: ${sum}`;
}
// console.log(heroNormalFunc(2, 3));
// arrow function
const heroArrowFunc = (c, d) => {
    return `Total: ${c + d}`;
};
console.log(heroArrowFunc(4, 5));
