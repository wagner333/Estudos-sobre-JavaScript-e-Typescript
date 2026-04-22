//try catch é uma estrutura de controle de fluxo que permite lidar com erros de forma elegante.
//Ele é composto por três partes: try, catch e finally.
// O bloco try contém o código que pode gerar um erro, o bloco catch é
// executado se um erro ocorrer no bloco try, e o bloco finally é executado independentemente
// de um erro ter ocorrido ou não.

//exemplo

try {
  const resultado = 10 / 0; // Isso não gera um erro, mas o resultado é Infinity
  console.log(resultado); // Infinity
} catch (error) {
  console.log("Ocorreu um erro: " + error.message);
} finally {
  console.log("Este bloco é sempre executado.");
}

try {
  const resultado = 10 / "a"; // Isso gera um erro, pois não é possível dividir um número por uma string
  console.log(resultado);
} catch (error) {
  console.log("Ocorreu um erro: " + error.message); // Ocorreu um erro: Cannot divide by zero
} finally {
  console.log("Este bloco é sempre executado.");
}

//agora com continue

for (let i = 0; i < 5; i++) {
  try {
    if (i === 2) {
      throw new Error("Erro no número 2");
    }
    console.log(i);
  } catch (error) {
    console.log("Ocorreu um erro: " + error.message);
    continue; // Continua para a próxima iteração do loop
  } finally {
    console.log("Este bloco é sempre executado.");
  }
}
