// filter()
// array.filter() contém uma condição booleana. filter()
// retorna um array que consiste em todos os elementos
// que são verdadeiros dentro de uma função. Não causa
// nenhuma alteração no array original. filter() é
// frequentemente usado para filtrar e classificar uma lista.

// Syntax:
// array.filter(function(currentValue, index, arr));

// Example:
const fruits = [
  { name: "banana", color: "yellow" },
  { name: "watermelon", color: "red" },
  { name: "orange", color: "orange" },
];

const filteredFruits = fruits.filter((fruit) => fruit.color === "yellow");

console.log(filteredFruits);

// Output:
// [{name:”banana”,color:”yellow”}]
