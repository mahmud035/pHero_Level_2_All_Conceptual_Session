//* type assertion
const thinkSomething: unknown = 34.2423432;

console.log((thinkSomething as number).toFixed(2));

const myLuckyNum = (num: number | string): number | string => {
  if (typeof num === 'string') {
    return `This is string`;
  }
  return num;
};
