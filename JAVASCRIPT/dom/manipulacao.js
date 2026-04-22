document.querySelector("#titulo").textContent = "Novo título"; //altera o texto do elemento com id titulo
document.querySelector("#titulo").innerHTML = "<span>Novo título</span>"; //altera o conteúdo HTML do elemento com id titulo
document.querySelector("#titulo").style.color = "red"; //altera a cor do texto do elemento com id titulo para vermelho
document.querySelector("#titulo").classList.add("nova-classe"); //adiciona a classe nova-classe ao elemento com id titulo
document.querySelector("#titulo").classList.remove("nova-classe"); //remove a classe nova-classe do elemento com id titulo
document.querySelector("#titulo").classList.toggle("nova-classe"); //adiciona a classe nova-classe se ela não existir, ou remove se ela já existir, do elemento com id titulo
document.querySelector("#titulo").setAttribute("data-atributo", "valor"); //adiciona um atributo data-atributo com o valor valor ao elemento com id titulo
document.querySelector("#titulo").removeAttribute("data-atributo"); //remove o atributo data-atributo do elemento com id titulo
document
  .querySelector("#titulo")
  .appendChild(document.createElement("span")).textContent = " - Adicionado"; //adiciona um novo elemento span com o texto " - Adicionado" ao final do elemento com id titulo
document
  .querySelector("#titulo")
  .insertAdjacentHTML("beforeend", "<span> - Adicionado</span>"); //adiciona um novo elemento span com o texto " - Adicionado" ao final do elemento com id titulo usando insertAdjacentHTML
document.querySelector("#titulo").remove(); //remove o elemento com id titulo do DOM

//com isso tambem podemos alterar os style das paginas

document.querySelector("body").style.backgroundColor = "lightblue"; //altera a cor de fundo do corpo da página para azul claro
document.querySelector("h1").style.fontSize = "36px"; //altera o tamanho da fonte do elemento h1 para 36 pixels
document.querySelector("p").style.color = "green"; //altera a cor do texto do elemento p para verde
document.querySelector("p").style.fontFamily = "Arial, sans-serif"; //altera a família da fonte do elemento p para Arial, com fallback para sans-serif
document.querySelector("p").style.margin = "20px"; //altera a margem do elemento p para 20 pixels
document.querySelector("p").style.padding = "10px"; //altera o preenchimento do elemento p para 10 pixels
document.querySelector("p").style.border = "1px solid black"; //altera a borda do elemento p para uma borda sólida de 1 pixel e cor preta

//com variaveis

const titulo = document.querySelector("#titulo");
titulo.setAttribute("data-atributo", "valor"); //adiciona um atributo data-atributo com o valor valor ao elemento com id titulo
titulo.classList.add("nova-classe"); //adiciona a classe nova-classe ao elemento com id titulo
titulo.classList.remove("nova-classe"); //remove a classe nova-classe do elemento com id titulo
titulo.classList.toggle("nova-classe"); //adiciona a classe nova-classe se ela não existir, ou remove se ela já existir, do elemento com id titulo
titulo.style.color = "red"; //altera a cor do texto do elemento com id titulo para vermelho
