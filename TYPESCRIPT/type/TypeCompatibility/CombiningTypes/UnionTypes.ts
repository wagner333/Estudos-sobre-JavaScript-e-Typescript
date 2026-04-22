//os unions types ajuda a adicionar mais tipos a uma variável, ou seja, ela pode ser de mais de um tipo. Isso é útil quando queremos permitir que uma variável possa ter diferentes tipos de valores, mas ainda queremos manter a segurança de tipo.

let variavel10: string | number = "Wagner";
//isso ajuda principalmente nos uuid ou id padrões

function processarValor(valor: string | number) {
  if (typeof valor === "string") {
    console.log("O valor é uma string: " + valor.toUpperCase());
  } else {
    console.log("O valor é um número: " + valor * 2);
  }
}
