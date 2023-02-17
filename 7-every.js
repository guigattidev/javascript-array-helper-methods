// every()
// array.every() retorna verdadeiro se tudo corresponder à condição.
// Ele retorna um valor booleano. É o mesmo que o método auxiliar
// some(), mas a única diferença é que ele usa E lógico em vez de OU.

// Syntax:
// array.every((element, index, array);

// Example:
const names = ["Tom", "Joe", "John"];

let matchEvery = names.every(function (name) {
  return name.length > 4;
});

console.log(matchEvery);

// Output:
// false
