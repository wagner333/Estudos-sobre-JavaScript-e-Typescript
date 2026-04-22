//o typeof serve pra verificar o tipo de uma variável em tempo de execução, e é muito útil para fazer verificações de tipo e garantir a segurança do código.

let valor1: string | number = "Wagner";

if (typeof valor1 === "string") {
  console.log(`O valor é uma string: ${valor1.toUpperCase()}`);
} else if (typeof valor1 === "number") {
  console.log(`O valor é um número: ${valor1 * 2}`);
} else {
  console.log("O valor é de um tipo desconhecido");
}
