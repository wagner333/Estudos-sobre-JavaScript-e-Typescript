/*
as condicionais servem para alem de verificições e comparações
temos o if else
else if
switch case
e cada um se aplica de uma forma com forme o nessesario
*/

const banana = 10;

if (banana >= 5) {
  console.log("A banana é maior que 5");
} else {
  console.log("A banana é menor ou igual a 5");
}

// com else if

if (banana > 10) {
  console.log("A banana é maior que 10");
} else if (banana === 10) {
  console.log("A banana é igual a 10");
} else {
  console.log("A banana é menor que 10");
}

// com switch case

switch (banana) {
  case 5:
    console.log("A banana é igual a 5");
    break;
  case 10:
    console.log("A banana é igual a 10");
    break;
  default:
    console.log("A banana é diferente de 5 e 10");
    break;
}

//e tambem temos com operador ternário

const resultado =
  banana > 10 ? "A banana é maior que 10" : "A banana é menor ou igual a 10";
console.log(resultado);
