/*
TypeScript vs JavaScript

TypeScript e JavaScript são linguagens de programação usadas para desenvolvimento web.
 JavaScript é uma linguagem dinâmica que é interpretada em tempo de execução pelo navegador,
  o que significa que erros de tipo só são detectados quando o código é executado.
   TypeScript, por outro lado, é um superconjunto de JavaScript que adiciona tipagem estática opcional. 
   Isso permite que os desenvolvedores detectem erros durante o desenvolvimento e antes da execução,
    resultando em um código mais robusto e de fácil manutenção.
     O código TypeScript precisa ser compilado para JavaScript antes de ser executado em um navegador
      ou outro ambiente JavaScript.

typescript meio q seria um compilador colocando tipagens no codigo em termo de desenvolvimento de aplicação media e grande
talvez seja otimo usar ele


TS and JS Interoperability
A interoperabilidade entre TypeScript e JavaScript refere-se à capacidade do código TypeScript
 funcionar perfeitamente com o código JavaScript existente e vice-versa.
  Isso significa que você pode usar bibliotecas JavaScript em seus projetos TypeScript e migrar gradualmente
   o código JavaScript para TypeScript sem precisar reescrever tudo de uma vez. Permite uma transição suave,
    aproveitando bases de código e bibliotecas existentes, ao mesmo tempo que se adotam os benefícios do TypeScript.

    como no final o typescript se torna javascript tudo feito em js é compartivel pra ele
    
    tsconfig.json
O arquivo tsconfig.json é um arquivo de configuração que especifica como o compilador TypeScript deve transpilar
 seu código TypeScript para JavaScript. Ele controla várias opções de compilação, como a versão ECMAScript de destino,
  o sistema de módulos e os mapas de origem.
   Este arquivo reside na raiz de um projeto TypeScript e permite que você defina as configurações de compilação
    do projeto de forma declarativa e reproduzível.
    
    no caso quando iniciarmos um projeto com o typescript podemos usar o comando tsc --init
    uma coisa q me confundi foi que o Typescript é n compila ele tranpilas para javascript


    em resumo o TypeScript é uma linguagem de programação que adiciona tipagem estática opcional ao JavaScript,
     permitindo que os desenvolvedores detectem erros durante o desenvolvimento e
     fora isso pra projetos mais robustos ele é essencial
     
*/
