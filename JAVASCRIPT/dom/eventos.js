const elemento = document.querySelector("#meuElemento"); //seleciona o elemento com id meuElemento

document.addEventListener("DOMContentLoaded", function () {
  console.log("O DOM foi carregado!"); //exibe uma mensagem no console quando o DOM for completamente carregado
});

elemento.addEventListener("click", function () {
  console.log("O elemento foi clicado!"); //exibe uma mensagem no console quando o elemento for clicado
});

elemento.addEventListener("mouseover", function () {
  console.log("O mouse está sobre o elemento!"); //exibe uma mensagem no console quando o mouse estiver sobre o elemento
});

elemento.addEventListener("mouseout", function () {
  console.log("O mouse saiu do elemento!"); //exibe uma mensagem no console quando o mouse sair do elemento
});

elemento.addEventListener("keydown", function (event) {
  console.log(`A tecla ${event.key} foi pressionada!`); //exibe uma mensagem no console quando uma tecla for pressionada enquanto o elemento estiver focado
});

elemento.addEventListener("submit", function (event) {
  event.preventDefault(); //impede o envio do formulário
  console.log("O formulário foi enviado!"); //exibe uma mensagem no console quando o formulário for enviado
});
