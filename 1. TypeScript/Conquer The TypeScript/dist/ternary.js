"use strict";
const isHeroAvailable = true;
// if (isHeroAvailable) {
//   console.log(`Book now`);
// } else {
//   console.log(`Can't book at this moment`);
// }
// condition ? 'true value' : 'false value';
const checkAvailability = isHeroAvailable
    ? `Book now`
    : `Can't book at this moment`;
console.log(checkAvailability);
//* nullish operator (??)
//* check only (null and undefined)
const inputSomething = null;
const checkInput = inputSomething !== null && inputSomething !== void 0 ? inputSomething : 'No input found';
/**
 ** null ==> No input found
 ** undefined ==> No input found
 * hello ==> hello
 * empty string ==> empty string
 * false ==> false
 * true ==> true
 * 0 ==> 0
 * */
console.log(checkInput);
