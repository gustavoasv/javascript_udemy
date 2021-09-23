// try == tenta execultar, caso ocorra um erro passa pro bloco cath
try {
  console.log(naoExisto);
} catch (err) {
  console.log("naoExisto não existe");
  console.log(err);
}

function soma(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    throw new Error("x e y precisam ser numeros."); //
  }

  return x + y;
}

try {
  console.log(soma(3, 7));
  console.log(soma("3", 7));
} catch (error) {
  console.log(error);
}

console.log("***********************************************");
console.log("                                                      ");
try {
  // È execultada quando não há erros
  console.log(a);
  console.log("Abri um arquivo");
  console.log("Manipulei um arquivo");
  console.log("Fechei o arquivo");
} catch (e) {
  // È execultada quando há erros
  console.log("Tratando os erros");
} finally {
  // sempre execultada
  console.log("finally: Eu sempre sou execultado");
}

console.log("                                      ");

const returnaHora = (data) => {
  if (data && !(data instanceof Date)) {
    throw new TypeError("Esperando instancia de Date");
  }
  if (!data) {
    data = new Date();
  }

  return data.toLocaleTimeString("pt-BR", {
    hour12: false
  });
};

console.log(returnaHora());
