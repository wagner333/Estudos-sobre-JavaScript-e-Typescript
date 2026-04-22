// 📘 Guia prático de AJAX em JavaScript
// Tudo em um único arquivo para estudo

// =====================================
// 🔹 O que é AJAX?
// =====================================
// AJAX é uma técnica para enviar e receber dados do servidor
// sem recarregar a página.

// Hoje usamos FETCH (moderno) no lugar de XMLHttpRequest

// =====================================
// 🔹 1. Requisição GET (buscar dados)
// =====================================

function getDados() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => {
      console.log("GET:", data);
    })
    .catch((error) => {
      console.error("Erro GET:", error);
    });
}

// =====================================
// 🔹 2. Requisição POST (enviar dados)
// =====================================

function postDados() {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      titulo: "Meu post",
      conteudo: "Aprendendo AJAX",
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("POST:", data);
    })
    .catch((error) => {
      console.error("Erro POST:", error);
    });
}

// =====================================
// 🔹 3. PUT (atualizar dados)
// =====================================

function atualizarDados() {
  fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: 1,
      titulo: "Atualizado",
      conteudo: "Novo conteúdo",
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("PUT:", data);
    })
    .catch((error) => {
      console.error("Erro PUT:", error);
    });
}

// =====================================
// 🔹 4. DELETE (remover dados)
// =====================================

function deletarDados() {
  fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "DELETE",
  })
    .then((response) => {
      console.log("DELETE status:", response.status);
    })
    .catch((error) => {
      console.error("Erro DELETE:", error);
    });
}

// =====================================
// 🔹 5. Enviando dados tipo formulário
// =====================================

function enviarFormulario() {
  const dados = new URLSearchParams();
  dados.append("email", "teste@gmail.com");
  dados.append("senha", "123456");

  fetch("api.php", {
    method: "POST",
    body: dados,
  })
    .then((response) => response.text())
    .then((data) => {
      console.log("Form:", data);
    });
}

// =====================================
// 🔹 6. Usando async/await (forma moderna)
// =====================================

async function getAsync() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();

    console.log("ASYNC:", data);
  } catch (error) {
    console.error("Erro async:", error);
  }
}

// =====================================
// 🔹 7. Exemplo com DOM (mostrar na tela)
// =====================================

function carregarNaTela() {
  fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((res) => res.json())
    .then((data) => {
      document.body.innerHTML += `<h2>${data.title}</h2>`;
    });
}

// =====================================
// 🔹 Dicas importantes
// =====================================
// - Sempre use .catch() ou try/catch
// - Prefira JSON
// - Verifique CORS se der erro
// - Use async/await para código mais limpo

// =====================================
// 🔹 Teste rápido
// =====================================
// Descomente para testar:

// getDados();
// postDados();
// atualizarDados();
// deletarDados();
// enviarFormulario();
// getAsync();
// carregarNaTela();
