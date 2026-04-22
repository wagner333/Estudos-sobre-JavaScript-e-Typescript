/*
arrays são estruturas de dados que armazenam uma coleção de elementos, onde cada elemento é identificado por um índice. Em JavaScript, os arrays são objetos que podem conter qualquer tipo de dado, incluindo números, strings, objetos e até mesmo outros arrays. Eles são usados para organizar e manipular conjuntos de dados de forma eficiente.
*/
let numbers = [1, 2, 3, 4, 5];
let strings = ["Hello", "World", "JavaScript"];
let mixed = [1, "Hello", true, null, undefined, { name: "John" }, [1, 2, 3]];
let objectArray = [{ name: "Alice" }, { name: "Bob" }, { name: "Charlie" }];
let nestedArray = [
  [1, 2],
  [3, 4],
  [5, 6],
];
let emptyArray = [];
let numerosGrandes = [1, ...Array(10000).keys()].map((x) => x + 1);
let matrizes = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
