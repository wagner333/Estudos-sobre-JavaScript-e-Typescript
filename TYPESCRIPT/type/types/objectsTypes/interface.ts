interface Pessoa {
  nome: string;
  idade: number;
  email?: string; // propriedade opcional
}

const person: Pessoa = {
  nome: "Wagner",
  idade: 30,
  email: "email@gmail.com",
};
