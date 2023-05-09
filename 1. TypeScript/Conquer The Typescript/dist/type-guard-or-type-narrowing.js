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
