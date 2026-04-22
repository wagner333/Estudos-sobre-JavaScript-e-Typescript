//as classes no tipescript já aceitam encapsulamento e herança, além de métodos e propriedades, como em outras linguagens orientadas a objetos.

class Users {
  public name: string;
  public age: number;
  public email: string;

  constructor(name: string, age: number, email: string) {
    this.name = name;
    this.age = age;
    this.email = email;
  }
  private getInfo(): string {
    return `Name: ${this.name}, Age: ${this.age}, Email: ${this.email}`;
  }
}
