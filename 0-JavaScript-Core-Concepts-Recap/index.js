/**
 * IMPORTANT:
 * তিন ভাবে আমরা JavaScript এ export করতে পারিঃ
 * 1. Default Export
 * 2. Named Export
 * 3. Export Multiple Items Together
 */

//* Default Export
const greetNextLevelDevelopers = (name) => {
  const greetMsg = `Hello ${name}, welcome to the next level journey`;
  console.log(greetMsg);
};

export default greetNextLevelDevelopers;

//* Named Export
export const greetNewDeveloper = (name) => {
  const greetMsg = `Hello ${name}, welcome to the next level journey`;
  console.log(greetMsg);
};

//* Export Multiple Items Together
const greetProDeveloper = (name) => {
  const greetMsg = `Hello ${name}, welcome to the next level journey`;
  console.log(greetMsg);
};

const greetUltraDeveloper = (name) => {
  const greetMsg = `Hello ${name}, welcome to the next level journey`;
  console.log(greetMsg);
};

export { greetProDeveloper, greetUltraDeveloper };
