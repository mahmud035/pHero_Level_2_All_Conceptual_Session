"use strict";
//* type assertion
const thinkSomething = 34.2423432;
console.log(thinkSomething.toFixed(2));
const myLuckyNum = (num) => {
    if (typeof num === 'string') {
        return `This is string`;
    }
    return num;
};
