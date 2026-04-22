//equality server para comparar se dois valores são iguais, e é muito útil para fazer verificações de tipo e garantir a segurança do código.

let valo1: string | number = "Wagner";
let valo2: string | number = 30;
//no caso temos
// = para receber em uma variável
// == para comparar os valores, mas sem comparar os tipos, ou seja, ele pode considerar "30" e 30 como iguais
// === para comparar os valores e os tipos, ou seja, ele considera "30" e 30 como diferentes
// ==< para comparar os valores, mas sem comparar os tipos, ou seja, ele pode considerar "30" e 30 como iguais
// !== para comparar os valores e os tipos, ou seja, ele considera "30" e 30 como diferentes
// += para adicionar um valor a uma variável, ou seja, ele soma o valor atual com o novo valor e atribui o resultado à variável
// -= para subtrair um valor de uma variável, ou seja, ele subtrai o novo valor do valor atual e atribui o resultado à variável
if (valor1 === valor2) {
  console.log("Os valores são iguais");
} else {
  console.log("Os valores são diferentes");
}
