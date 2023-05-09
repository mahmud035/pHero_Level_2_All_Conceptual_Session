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
// console.log(doSomething(23));
// console.log(doSomething('Hello'));
