function getFirstElement<T extends string | number>(arr: T[]) {
  if (arr.length > 0) {
    return arr[0];
  }
  return undefined;
}

const myArr = ['a', 'b', 'c', 'd'];
const myArr2 = [1, 2, 3, 4];

console.log(getFirstElement(myArr));
console.log(getFirstElement(myArr2));
