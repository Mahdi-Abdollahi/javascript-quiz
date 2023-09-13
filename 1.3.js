function makeArrayFlat(arr) {
  const result = [];

  function flattenHelper(arr) {
    for (const item of arr) {
      if (Array.isArray(item)) {
        flattenHelper(item);
      } else {
        result.push(item);
      }
    }
  }

  flattenHelper(arr);
  return result;
}

const nestedArray = [4, [[5], [6, [7], 8], 9, 10]];
const flattenedArray = makeArrayFlat(nestedArray);

console.log('nestedArray: ', nestedArray);
console.log('flattenedArray: ', flattenedArray);
