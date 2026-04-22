//tipos de objetos são bem simples alias para objetos literais, onde podemos definir as propriedades e seus tipos.

let user: { nome: string; idade: number } = {
  nome: "Wagner",
  idade: 20,
};

type User = {
  nome: string;
  idade: number;
};

const user2: User = {
  nome: "Santos",
  idade: 30,
};
