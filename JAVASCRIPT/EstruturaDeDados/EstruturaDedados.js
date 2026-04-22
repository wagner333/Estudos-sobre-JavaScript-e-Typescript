//estrutura de dados com arrays fora q tambem podemos trabalhar funções de arrays como map, filter, reduce, find, etc...
//tambem podemos criar nossas proprias estruturas de dados como pilha, fila, lista encadeada, etc...
/*
map
filter
reduce
find
forEach */
//exemplo de pilha
class Pilha {
  constructor() {
    this.itens = [];
  }

  push(item) {
    this.itens.push(item);
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    }
    return this.itens.pop();
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.itens[this.itens.length - 1];
  }

  isEmpty() {
    return this.itens.length === 0;
  }

  size() {
    return this.itens.length;
  }
}

const pilha = new Pilha();
pilha.push(1);
pilha.push(2);
pilha.push(3);
console.log(pilha.peek());
console.log(pilha.pop());
console.log(pilha.peek());

//função de array map
const numeros = [1, 2, 3, 4, 5];
const dobrados = numeros.map((n) => n * 2);
console.log(dobrados); // [2, 4, 6, 8, 10]

//função de array filter
const pares = numeros.filter((n) => n % 2 === 0);
console.log(pares); // [2, 4]

//função de array reduce
const soma = numeros.reduce((acc, n) => acc + n, 0);
console.log(soma); // 15

//função de array find
const numeroTres = numeros.find((n) => n === 3);
console.log(numeroTres); // 3

//forEach
numeros.forEach((n) => console.log(n)); // 1 2 3 4 5

//filas são estruturas de dados que seguem o princípio FIFO (First In, First Out), ou seja, o primeiro elemento a ser adicionado é o primeiro a ser removido. Elas são usadas em situações onde a ordem de processamento é importante, como em filas de atendimento, filas de impressão, etc.
class Fila {
  constructor() {
    this.itens = [];
  }

  // adiciona no final
  enqueue(item) {
    this.itens.push(item);
  }

  // remove do início
  dequeue() {
    if (this.isEmpty()) {
      return "Fila vazia";
    }
    return this.itens.shift();
  }

  // ver o primeiro elemento sem remover
  front() {
    if (this.isEmpty()) {
      return "Fila vazia";
    }
    return this.itens[0];
  }

  // verificar se está vazia
  isEmpty() {
    return this.itens.length === 0;
  }

  // tamanho da fila
  size() {
    return this.itens.length;
  }

  // mostrar fila
  print() {
    console.log(this.itens);
  }
}

// TESTE
const fila = new Fila();

fila.enqueue(1);
fila.enqueue(2);
fila.enqueue(3);

fila.print(); // [1, 2, 3]
console.log(fila.dequeue()); // 1
fila.print(); // [2, 3]
