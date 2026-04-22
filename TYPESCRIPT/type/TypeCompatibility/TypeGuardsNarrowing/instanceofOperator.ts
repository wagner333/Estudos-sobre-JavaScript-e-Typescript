/**
 * instanceof Operator
 * o instanceof é um operador de comparação que verifica se um objeto é uma instância de uma classe específica. Ele é usado para realizar verificações de tipo em tempo de execução, permitindo que o TypeScript faça o narrowing do tipo com base no resultado da verificação.
 *
 *
 */

//exemplo

class Animal {
  nome: string;
  constructor(nome: string) {
    this.nome = nome;
  }
}

const cachorro = new Animal("Rex");
//ela verifica se a variavel é criada pela classe Animal, ou seja, se ela é uma instância dessa classe. Se for, o código dentro do bloco if será executado, e o TypeScript irá inferir que cachorro é do tipo Animal dentro desse bloco, permitindo acessar suas propriedades e métodos de forma segura. Caso contrário, o código dentro do bloco else será executado, indicando que cachorro não é um animal.

if (cachorro instanceof Animal) {
  console.log(`${cachorro.nome} é um animal!`);
} else {
  console.log("Não é um animal!");
}
