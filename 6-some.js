// some()
// array.some() verifica se pelo menos um elemento no array passa
// no teste implementado pela função fornecida. Ele retorna um valor
// booleano. Em some(), basta que um valor corresponda à condição e
// ela retorne true.

// Syntax:
// some((element, index, array));

// Example:
const names = ["Tom", "Joe", "John"];

let matchSome = names.some(function (name) {
  return (name.length = 4);
});

console.log(matchSome);

// Output:
// true
