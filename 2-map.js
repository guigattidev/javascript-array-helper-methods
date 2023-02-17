// map()
// array.map() percorre cada item do array, do mesmo jeito que
// forEach() faz mas map() chama a função para cada elemento do
// array em uma ordem particular

// Syntax:
// array.map(function(currentValue, index, arr));

// Example:
const arr = [
  { name: "James", age: 18 },
  { name: "Alice", age: 20 },
];

const personName = arr.map((person) => person.name);

console.log(personName);

// Output:
// [“James”,”Alice”]
