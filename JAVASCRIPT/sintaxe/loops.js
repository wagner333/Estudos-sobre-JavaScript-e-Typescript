/*

loops servem para manter um bloco de código em execução enquanto uma condição for verdadeira, ou seja, eles permitem que você execute um bloco de código repetidamente com base em uma condição. Existem vários tipos de loops em JavaScript, incluindo:

1. for: O loop for é usado para executar um bloco de código um número específico de vezes. Ele é composto por três partes: a inicialização, a condição e a atualização.

2. while: O loop while é usado para executar um bloco de código enquanto uma condição for verdadeira. Ele verifica a condição antes de cada iteração.

3. do...while: O loop do...while é semelhante ao loop while, mas ele garante que o bloco de código seja executado pelo menos uma vez, pois a condição é verificada após a execução do bloco.

4. for...in: O loop for...in é usado para iterar sobre as propriedades enumeráveis de um objeto.

5. for...of: O loop for...of é usado para iterar sobre os elementos de um objeto iterável, como arrays ou strings.

Cada tipo de loop tem suas próprias características e usos específicos, e a escolha do tipo de loop depende do contexto e da necessidade do código que você está escrevendo.

*/

// em linguagens mais antigas como o C e o Java, o loop for é frequentemente usado para iterar sobre arrays ou coleções de dados, enquanto o loop while é usado para executar um bloco de código enquanto uma condição for verdadeira. O loop do...while é menos comum, mas pode ser útil quando você precisa garantir que um bloco de código seja executado pelo menos uma vez, independentemente da condição inicial. O loop for...in é usado para iterar sobre as propriedades de um objeto, enquanto o loop for...of é usado para iterar sobre os elementos de um objeto iterável, como arrays ou strings.

// Exemplo de loop for:

for (let i = 0; i < 5; i++) {
  console.log(i);
}

// Exemplo de loop while:

let j = 0;
while (j < 5) {
  console.log(j);
  j++;
}

// Exemplo de loop do...while:

let k = 0;
do {
  console.log(k);
  k++;
} while (k < 5);

// Exemplo de loop for...in:

const objeto = { a: 1, b: 2, c: 3 };
for (const chave in objeto) {
  console.log(chave + ": " + objeto[chave]);
}

// Exemplo de loop for...of:
// O loop for...of é usado para iterar sobre os elementos de um objeto iterável, como arrays ou strings.
const array = [10, 20, 30];
for (const valor of array) {
  console.log(valor);
}
