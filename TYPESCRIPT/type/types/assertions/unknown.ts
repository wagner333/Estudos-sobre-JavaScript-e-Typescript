let variavel: unknown = "string";
const variavel2: unknown = 123;
var variavel3: unknown = true;
variavel = 10;
// variavel.toUpperCase(); // ❌ erro de compilação, não é possível acessar propriedades de unknown
if (typeof variavel === "string") {
  //aqui acontece uma verificação do tipo onde verifica o tipo da variavel antes
  variavel.toUpperCase(); // ✅ seguro, pois verificamos o tipo antes de acessar a propriedade
}
