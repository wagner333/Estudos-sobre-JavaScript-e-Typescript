// Documentação prática sobre Promises, then e async/await

// Uma Promise representa um valor futuro
const promessa = new Promise((resolve, reject) => {
  const sucesso = true;

  setTimeout(() => {
    if (sucesso) {
      resolve("✅ Deu certo!");
    } else {
      reject("❌ Deu erro!");
    }
  }, 1000);
});

// =====================================
// 🔗 2. THEN / CATCH
// =====================================

// Consumindo a Promise com then
promessa
  .then((resultado) => {
    console.log("then:", resultado);
  })
  .catch((erro) => {
    console.log("catch:", erro);
  });

// =====================================
// ⚡ 3. ASYNC / AWAIT (MODERNO)
// =====================================

// Função assíncrona sempre retorna uma Promise
async function exemploAsync() {
  return "Retorno automático como Promise";
}

// =====================================
// 🌐 4. USANDO FETCH COM ASYNC/AWAIT
// =====================================

async function buscarDados() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");

    // Converte resposta para JSON
    const data = await res.json();

    console.log("Dados da API:", data);
  } catch (erro) {
    console.log("Erro ao buscar dados:", erro);
  }
}

buscarDados();

// Promise → representa algo que vai acontecer no futuro
// then() → executa quando dá certo
// catch() → executa quando dá erro
// async → define função assíncrona
// await → espera resultado da Promise
