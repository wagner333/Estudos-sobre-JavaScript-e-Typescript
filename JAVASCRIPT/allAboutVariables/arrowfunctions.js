/*
as arrow functions são funções anonimas, ou seja, não possuem um nome e são definidas usando a sintaxe de flecha (=>). Elas são uma forma mais concisa de escrever funções em JavaScript e são frequentemente usadas para funções de callback ou funções que não precisam de um nome específico.

A sintaxe básica de uma arrow function é a seguinte:

const minhaFuncao = (param1, param2) => {
  // corpo da função
};

Se a função tiver apenas um parâmetro, os parênteses podem ser omitidos:

const minhaFuncao = param => {
  // corpo da função
};

Se a função tiver apenas uma expressão no corpo, as chaves e a palavra-chave 'return' podem ser omitidas:

const minhaFuncao = (param1, param2) => param1 + param2;

As arrow functions também têm um comportamento diferente em relação ao 'this' em comparação com as funções tradicionais. Elas não possuem seu próprio 'this', mas herdam o 'this' do contexto em que foram definidas. Isso pode ser útil para evitar problemas de escopo ao usar funções de callback.   

exemplo:
*/

const numeros = [1, 2, 3];
const dobrados = numeros.map((n) => n * 2); // 'n => n * 2' é a lambda
console.log(dobrados); // [2, 4, 6]

//ou

const adicionar = (x, y) => x + y;
console.log(adicionar(5, 3)); // 8
