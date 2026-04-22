//em termo do typescript ele tem até generics para arrays

let numbers: number[] = [1, 2, 3, 4, 5]; // array de números
const nomes: string[] = ["Wagner", "Santos", "Silva"]; // array de strings
var booleanos: boolean[] = [true, false, true]; // array de booleanos

//array com quantidade fixa de elementos
let tupla: [string, number] = ["Wagner", 30]; // tupla com um string e um número
// operações com arrays
const primeiroNumero = numbers[0]; // 1
const segundoNome = nomes[1]; // "Santos"
const primeiroBooleano = booleanos[0]; // true

// métodos de array
numbers.push(6); // adiciona um número ao final do array
nomes.pop(); // remove o último nome do array
booleanos.unshift(false); // adiciona um booleano no início do array

// arrays multidimensionais
let matriz: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]; // array de arrays de números
