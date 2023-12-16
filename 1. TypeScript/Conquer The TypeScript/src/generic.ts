type myArray<T> = T[];

const myNumbers: myArray<number> = [1, 2, 3, 4, 5];
const myString: myArray<string> = ['a', 'b', 'c', 'd'];
const myBoolean: myArray<boolean> = [true, false];

interface IDataType {
  name: string;
  age: number;
}

const ourInfo: myArray<IDataType> = [
  { name: 'John', age: 34 },
  { name: 'Alex', age: 44 },
  { name: 'Smith', age: 54 },
];

//* generic in tuple
type myGenericTuple<X, Y, Z> = [X, Y, Z];

const A: myGenericTuple<number, string, boolean> = [20, 'hello', true];
const B: myGenericTuple<string, boolean, number> = ['hello', true, 55];
const C: myGenericTuple<string, number, string> = ['hello', 111, 'john'];

// console.log(A);
// console.log(B);
// console.log(C);

//* generic in function

const printInfo = <T, U>(param1: T, param2: U): T => {
  console.log(`${param1} ${param2}`);
  return param1;
};

printInfo<string, number>('John', 30);
printInfo<number, boolean>(112, true);
printInfo<string, boolean>('Alex', true);

//* generic in interface
interface IMe<T, U> {
  name: string;
  age: T;
  mark?: U;
}

const me: IMe<string, number> = {
  name: 'John',
  age: '30 years',
  mark: 110,
};

//* keyof type operator
type MovieType = {
  name: string;
  duration: number;
  category: string;
};

type test = 'name' | 'duration' | 'category';
const myTest: test = 'name';

type myMovies = keyof MovieType; // 'name' | 'duration' | 'category'
const myTest1: myMovies = 'name';

const data: MovieType = {
  name: 'Agni 2',
  duration: 2000,
  category: 'Action',
};
// console.log(data[myTest1]);
