const heroObj: {
  heroName: string;
  readonly age: number; // readonly
  profession: string;
  isMarried?: boolean; // optional
} = {
  heroName: 'Khan',
  age: 32,
  profession: 'Actor',
  isMarried: false,
};

const { heroName } = heroObj; // destructure
console.log(heroName);
