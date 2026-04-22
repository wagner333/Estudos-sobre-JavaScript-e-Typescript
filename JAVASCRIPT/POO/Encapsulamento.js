class Conta {
  #saldo = 0; // privado

  depositar(valor) {
    this.#saldo += valor;
  }

  verSaldo() {
    return this.#saldo;
  }
}

const conta = new Conta();
conta.depositar(100);
console.log(conta.verSaldo()); // 100
