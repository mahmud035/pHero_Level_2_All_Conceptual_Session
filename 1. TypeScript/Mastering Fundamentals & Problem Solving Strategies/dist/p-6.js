"use strict";
/**
 * TODO:
 * Problem-06: Develop a TypeScript function that effortlessly adds together any number of numerical values passed to it. This function should neatly calculate their sum, showcasing its ability to handle different quantities of numbers.
 * Demonstrate the function by calculating the sum of various sets of numbers, highlighting its flexibility in processing variable inputs.
 */
const addFunction = (...rest) => {
    // console.log(rest);
    const total = rest.reduce((finalValue, currentValue) => {
        return finalValue + currentValue;
    }, 0);
    return total;
};
console.log(addFunction(1, 2, 3, 4, 5, 6));
console.log(addFunction(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
