/*
de acordo com o chatgpt e a documentação do type
o any pode ser perigoso de usar, pois desativa a verificação de tipo, o que pode levar a erros em tempo de execução.
*/

let valor: any = "string";
const valor2: any = 123;
var valor3: any = true;
valor = 10;
valor.toUpperCase(); // ❌ pode quebrar em runtime
