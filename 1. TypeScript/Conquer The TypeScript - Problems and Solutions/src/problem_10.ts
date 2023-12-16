function convertToUpperCase(str: string | string[]): string | string[] {
  if (typeof str === 'string') {
    return str.toUpperCase();
  } else {
    const upperCase = str.map((e) => e.toUpperCase());
    return upperCase;
  }
}

console.log(convertToUpperCase('hello world'));
console.log(convertToUpperCase(['john', 'alex', 'smith']));
