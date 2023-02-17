// findIndex()
// array.findIndex() o método retorna o índice do primeiro elemento
// do array que satisfaz a função de teste fornecida. Caso contrário,
// retorna -1.

// Syntax:
// array.findIndex(testFn(element[, index[, array]])[, thisArg]);

// Example:
let numArray = [1, 5, 7, 8, 10, 7];

let index = numArray.findIndex((numArray) => numArray === 7);

console.log(index);

// Output:
// 2
