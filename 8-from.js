// from()
// array.from() é o método que cria uma nova instância do Array a
// partir de um objeto semelhante a um array ou iterável. Este método
// é um método estático chamado usando o nome da classe Array.

// Syntax:
// array.from(arraylike, mapFunc, thisArg);

// Example:
function fromMethod() {
  return Array.from(arguments);
}

console.log(fromMethod(1, "A"));

// Output:
// [ 1, 'A' ]
