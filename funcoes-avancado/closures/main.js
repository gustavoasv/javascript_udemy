function retornaFuncao() {
  const nome = "Gustavo";
  return function () {
    return nome;
  };
}

const funcao = retornaFuncao();
console.dir(funcao);


// Closure -> é a habilidade de acessar o seu escopo lexido