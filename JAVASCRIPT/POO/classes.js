//javascript por si so n tem orientação a objetos mas com a evolução da linguagem foi adicionado o conceito de classes e objetos, isso permite que os desenvolvedores criem estruturas de dados mais complexas e organizadas, facilitando a reutilização de código e a manutenção do software.

//uma classe é um modelo ou uma estrutura que define as propriedades e os métodos de um objeto. Ela serve como um molde para criar objetos específicos com características e comportamentos semelhantes. Em JavaScript, as classes foram introduzidas no ECMAScript 2015 (ES6) e são uma forma mais clara e concisa de criar objetos e lidar com a herança.

class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  apresentar() {
    console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
  }
}

const pessoa1 = new Pessoa("Alice", 30);
pessoa1.apresentar(); // Olá, meu nome é Alice e tenho 30 anos.

const pessoa2 = new Pessoa("Bob", 25);
pessoa2.apresentar(); // Olá, meu nome é Bob e tenho 25 anos.
