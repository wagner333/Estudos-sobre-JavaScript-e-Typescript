//por incrivel que pareça o typescript tem suporte a generics, ou seja, podemos criar funções, classes e interfaces genéricas que podem trabalhar com diferentes tipos de dados sem perder a segurança de tipo.

//função genérica
function identity<T>(arg: T): T {
  return arg;
}
const arrayss = Array<number>(1, 2, 5); // array de números
const num = identity<number>(42); // num é do tipo number

const str = identity<string>("Hello"); // str é do tipo string

const bool = identity<boolean>(true); // bool é do tipo boolean

//classe genérica
class Box<T> {
  private value: T;

  constructor(value: T) {
    this.value = value;
  }

  getValue(): T {
    return this.value;
  }
}

const numberBox = new Box<number>(123);
console.log(numberBox.getValue()); // 123

const stringBox = new Box<string>("TypeScript");
console.log(stringBox.getValue()); // "TypeScript"
