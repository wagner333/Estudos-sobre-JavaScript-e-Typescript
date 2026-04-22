//o never é um tipo serve para representar um valor que nunca ocorre, ou seja, é um tipo que não tem nenhum valor possível. Ele é útil para indicar que uma função nunca retorna ou que um código é inalcançável.

function erro(message: string): never {
  throw new Error(message); // essa função lança um erro e nunca retorna um valor
}

function loopInfinito(): never {
  while (true) {
    // esse código é um loop infinito e nunca termina
  }
}

// o never é um subtipo de todos os outros tipos, ou seja, ele pode ser atribuído a qualquer tipo, mas nenhum tipo pode ser atribuído a never, exceto never ele mesmo. Isso significa que o never é um tipo de baixo nível que representa a ausência de valor e é usado principalmente para indicar situações de erro ou código inalcançável.
