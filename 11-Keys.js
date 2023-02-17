// keys()
// array.keys() o método retorna um novo objeto Array Iterator que
// contém as chaves para cada índice na matriz. Este método nunca
// ignora a string vazia.

// Syntax:
// array.keys();

// Example:
const languages = ["JavaScript", "Java", "#C", "C"];

let iterator = languages.keys();

for (let key of iterator) {
  console.log(key);
}

// Output:
// 0
// 1
// 2
// 3
