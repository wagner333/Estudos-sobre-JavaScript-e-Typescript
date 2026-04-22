//a ideia principal é uma função que ensina o TypeScript a reconhecer um tipo

let value: unknown = "Wagner";

// valor.toUpperCase(); ❌ erro

//sloução baisca usando typeof
if (typeof valor === "string") {
  valor.toUpperCase(); // ✅
}

//agora usando type predicates
function isString(valor: unknown): valor is string {
  return typeof valor === "string";
}
if (isString(valor)) {
  valor.toUpperCase(); // ✅ agora o TS entende
}
