const verdadeira = true;
let nome = "Gustavo";
var nome2 = "Alves";

// let tem escopo de { ... bloco }
// var só tem escopo de função

if (verdadeira) {
  let nome = "Silva";
  console.log(nome, nome2);
}

// funcoes protegem as variaveis de seu escopo

function falaOi() {
  const nome = "pedro guei";
}
console.log(nome);
falaOi();
