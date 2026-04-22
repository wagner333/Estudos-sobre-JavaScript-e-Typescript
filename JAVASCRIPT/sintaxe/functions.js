/*
functions são blocos de código reutilizáveis que realizam uma tarefa específica.
 Elas podem receber entradas, chamadas de parâmetros, e retornar um valor.
  As funções ajudam a organizar o código, tornando-o mais legível e fácil de manter. 
  Em JavaScript, as funções podem ser declaradas de várias maneiras, incluindo
   declarações de função, expressões de função e arrow functions (funções lambda).
    Elas são fundamentais para a programação em JavaScript e são usadas para criar aplicativos 
    interativos e dinâmicos na web.
*/

function saudacao(nome) {
  return "Olá, " + nome + "!";
}

console.log(saudacao("Wagner")); // Output: Olá, Wagner!

// Exemplo de função anônima (expressão de função)
const multiplicar = function (a, b) {
  return a * b;
};

console.log(multiplicar(5, 3)); // Output: 15

// Exemplo de arrow function (função lambda)
const dividir = (a, b) => a / b;

console.log(dividir(10, 2)); // Output: 5
