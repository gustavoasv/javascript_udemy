// Declaração de função (function hoisting)
falaOi();
function falaOi() {
  console.log("Oie");
}

//Funções são first-class object (Objeto de primeira classe)

// Function Expressio -> cria uma variavel e atribua uma function. EX:

const souUmDado = function () {
  console.log("Sou um dado");
};

souUmDado();

function execultaFuncao(funcao) {
  console.log("Vou execultar sua Funcao abaixo");
  funcao();
}

execultaFuncao(souUmDado);

// Arrow Function

const funcaoArrow = () => {
  console.log("Sou uma arrow function");
};

funcaoArrow();
