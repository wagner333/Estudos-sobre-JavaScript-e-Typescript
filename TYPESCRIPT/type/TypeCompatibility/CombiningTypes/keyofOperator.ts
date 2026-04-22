/**

* 📘 KEYOF OPERATOR - DOCUMENTAÇÃO COMPLETA
*
* O `keyof` é um operador do TypeScript que transforma
* as chaves de um tipo em uma união de strings literais.
*
* 👉 Muito usado para:
* * Acessar propriedades dinamicamente
* * Criar funções seguras
* * Trabalhar com objetos tipados
    */

// -----------------------------
// 🧠 DEFININDO UM TIPO
// -----------------------------

type Pessoaa = {
  nome: string;
  idade: number;
  cidade: string;
};

// -----------------------------
// 🔑 KEYOF NA PRÁTICA
// -----------------------------

/**

* Aqui o `keyof Pessoa` vira:
* "nome" | "idade" | "cidade"
  */
type ChavesPessoa = keyof Pessoa;

// -----------------------------
// ⚡ FUNÇÃO COM KEYOF
// -----------------------------

/**

* Essa função recebe:
* * um objeto do tipo Pessoa
* * uma chave válida desse objeto
*
* E retorna o valor correspondente
  */
function obterValor(pessoa: Pessoa, chave: ChavesPessoa) {
  return pessoa[chave];
}

// -----------------------------
// 🚀 USO PRÁTICO
// -----------------------------

const pessoaa1: Pessoa = {
  nome: "Wagner",
  idade: 30,
};

// ✅ acessos válidos
const valorNome = obterValor(pessoaa1, "nome");
const valorIdade = obterValor(pessoaa1, "idade");

// ❌ erro em tempo de compilação
// const valorInvalido = obterValor(pessoa1, "altura");

// -----------------------------
// 🔥 VERSÃO MAIS AVANÇADA (GENERIC)
// -----------------------------

/**

* Aqui usamos generics para deixar a função mais flexível
* e ainda mais segura.
*
* K extends keyof T → garante que a chave existe no objeto
* T[K] → retorna o tipo correto baseado na chave
  */
function obterValorSeguro<T, K extends keyof T>(obj: T, chave: K): T[K] {
  return obj[chave];
}

// uso com inferência automática
const nomeSeguro = obterValorSeguro(pessoa1, "nome"); // string
const idadeSegura = obterValorSeguro(pessoa1, "idade"); // number

// -----------------------------
// 🧩 EXEMPLO COM OUTRO TIPO
// -----------------------------

type Produto = {
  id: number;
  nome: string;
  preco: number;
};

const produto1: Produto = {
  id: 1,
  nome: "Relógio",
  preco: 199.9,
};

const preco = obterValorSeguro(produto1, "preco"); // number

// -----------------------------
// ⚠️ DICAS IMPORTANTES
// -----------------------------

/**

* ✔ keyof transforma chaves em tipos
* ✔ funciona com qualquer objeto
* ✔ muito usado com generics
*
* ❌ evita usar com "any"
* ❌ não funciona bem com valores dinâmicos sem tipagem
  */

// -----------------------------
// 🧠 RESUMO
// -----------------------------

/**

* keyof Pessoa = "nome" | "idade" | "cidade"
*
* Permite:
* * segurança ao acessar propriedades
* * evitar erros de chave inválida
* * criar funções reutilizáveis
    */
