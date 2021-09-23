// try == tenta execultar, caso ocora um erro passa pro bloco cath
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
