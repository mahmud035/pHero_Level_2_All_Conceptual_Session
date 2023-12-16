{
  /**
   * TODO:
   * Problem-02: Your challenge is to create a TypeScript function that turns an array of key-value pairs into a neatly organized object. We have a function that seamlessly merges the keys and values from the array, transforming them into a structured object.
   * Once your function is crafted, apply it to an array filled with various key-value pairs. Witness the array's shift into a tidy and structured object, showcasing its newfound form.
   */

  //* Input will be like this (array of array / array of Tuple)

  const keyValueArray: [string, any][] = [
    ['id', 23],
    ['name', 'Mezba'],
    ['isMarried', true],
  ];

  //* Expected Output
  const validObject = {
    id: 23,
    name: 'Mezba',
    isMarried: true,
  };

  let myObject: Record<string, unknown> = {};
  myObject['location'] = 'Dhaka';

  // NOTE: Array.reduce((finalValue, currentValue) => {}, initialValue);

  const arrayToObject = <T extends string, U>(
    array: [T, U][]
  ): Record<T, U> => {
    const transformedObject = array.reduce((finalObj, [key, value]) => {
      // IMPORTANT: এখানে একদম শুরুতে finalObj টা হচ্ছে initialValue অর্থাৎ, {} (empty object). ==> {} as Record<T, U>)। এরপরে প্রতিবার iteration এর সাথে সাথে finalObj এর মধ্যে dynamically value insert করতেছি।

      finalObj[key] = value;
      // {
      //   id: 23,
      //   name: 'Mezba',
      //   isMarried: true
      // }
      return finalObj;
    }, {} as Record<T, U>);

    return transformedObject;
  };

  console.log(arrayToObject(keyValueArray)); // {id: 23, name: 'Mezba', isMarried: true}
}
