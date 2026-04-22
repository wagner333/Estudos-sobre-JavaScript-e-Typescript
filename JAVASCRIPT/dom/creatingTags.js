document.createElement("div"); //cria um novo elemento div, mas ele ainda não está adicionado ao DOM
const novaDiv = document.createElement("div"); //cria um novo elemento div e armazena em uma variável
novaDiv.textContent = "Esta é uma nova div"; //adiciona texto ao novo elemento div
document.body.appendChild(novaDiv); //adiciona o novo elemento div ao final do corpo da página
