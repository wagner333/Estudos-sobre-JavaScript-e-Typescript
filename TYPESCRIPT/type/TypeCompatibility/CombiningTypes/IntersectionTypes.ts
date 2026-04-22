//são formas diferentes de combinar tipos, onde o tipo resultante tem as propriedades de ambos os tipos combinados. O tipo resultante deve satisfazer as condições de ambos os tipos originais para ser considerado compatível.

type TipoA = {
  nome: string;
  idade: number;
};

type TipoB = {
  sobrenome: string;
  profissao: string;
};

//criando um tipo que é a interseção dos tipos A e B
type TipoC = TipoA & TipoB;

const pessoa: TipoC = {
  nome: "Wagner",
  idade: 30,
  sobrenome: "Santos",
  profissao: "Desenvolvedor",
};

type teste1 = string & number; // tipo nunca, pois não é possível ser ambos ao mesmo tempo
type teste2 = string | number; // tipo string ou number, pois pode ser um ou outro
