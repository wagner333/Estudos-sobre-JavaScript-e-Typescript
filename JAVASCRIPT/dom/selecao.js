//seleçao de elementos no javascript podendo adicionar em funções ou fazer algo parecido

document.querySelector("#titulo"); //por id ou seja, o #titulo
document.querySelector(".titulo"); //por classe ou seja, o .titulo
document.querySelector("h1"); //por tag ou seja, o h1
document.getElementById("titulo"); //por id ou seja, o #titulo, é mais antigo e mais rápido que o querySelector
document.getElementsByClassName("titulo"); //por classe ou seja, o .titulo, é mais antigo e mais rápido que o querySelector
document.getElementsByTagName("h1"); //por tag ou seja, o h1, é mais antigo e mais rápido que o querySelector

//seleção de elementos em massa
document.querySelectorAll(".titulo"); //seleciona todos os elementos com a classe titulo, retorna uma NodeList
document.getElementsByClassName("titulo"); //seleciona todos os elementos com a classe titulo, retorna uma HTMLCollection

//seleção de elementos aninhados
document.querySelector("#container .titulo"); //seleciona o elemento com a classe titulo dentro do elemento com id container
document.querySelectorAll("#container .titulo"); //seleciona todos os elementos com a classe titulo dentro do elemento com id container, retorna uma NodeList
