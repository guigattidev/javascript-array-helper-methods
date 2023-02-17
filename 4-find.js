// find()
// array.find() encontre o valor no array (somente o primeiro valor),
// se um elemento no array satisfizer a função de teste fornecida,
// senão indefinido se não for encontrado. É realmente útil em uma
// situação em que temos um banco de dados enorme e precisamos encontrar
// os IDs das pessoas.

// Syntax:
// array.find((element, index, array));

// Example:
let findData = [
  { name: "jay", age: 1 },
  { name: "hulu", age: 30 },
];

findData.find((obj) => obj.name === "jay");

// Output:
// {name:”jay”,age:1}
