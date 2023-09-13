function loopThroughArrayDeclarative(arr, callback) {
  return arr.map(callback);
}

function loopThroughArrayWithCallbackImperatively(arr, func) {
  const result = new Array(arr.length);
  let index = 0;

  for (const item of arr) {
    result[index++] = func(item);
  }

  return result;
}

const numbers = [1, 2, 3, 4, 5];

function square(x) {
  return x * x;
}

const resultOptimized = applyFunctionImperativeOptimized(numbers, square);
console.log(resultOptimized);
