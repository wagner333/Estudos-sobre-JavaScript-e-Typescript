// Type Aliases é meio q se aproveitar das variáveis para criar um tipo personalizado, ou seja, é uma forma de dar um nome a um tipo específico, tornando o código mais legível e fácil de entender.

type Idade = number;

type Nome = string;
let usuario: Nome = "Wagner";
let idadeUser: Idade = 30;

type Pessoas = {
  nome: string;
  idade: number;
};

const pessoa1: Pessoas = {
  nome: "Santos",
  idade: 25,
};

type FuncaoSoma = (a: number, b: number) => number;
