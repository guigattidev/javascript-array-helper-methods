// forEach()
// array.forEach() chama uma função para cada elemento em um array.
// A função interator lida com a operação e tem de ser perfomada.
// O array pega o parametro, que é a função interator.

// Syntax:
// array.forEach(function(currentValue, index, arr));

// Example:
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

arr.forEach((item) => console.log(item));

// Ouput:
// 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
