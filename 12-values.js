// values()
// array.values() o método retorna um novo objeto Array que contém
// os valores para cada índice no array.

// Syntax:
// array.values();

// Example:
const array = ["a", "b", "c"];

const iterator = array.values();

for (const value of iterator) {
  console.log(value);
}

// Output:
// a
// b
// c
