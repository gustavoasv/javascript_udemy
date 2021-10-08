// Funcao desfinida com a palavra chava function tem uma variavel especial chamada arguments que sustenta todos os argumentos enviados

// arguments sustenta todos os argumentos enviado so para funcoes com a palvra function não funciona em Arrow functions

function funcao(a, b) {
  console.log(a, b);
}

funcao(1, 2);

const conta = function(operador, acumulador, ...numeros) {
  for (let numero of numeros) {
    if (operador === "+") acumulador += numero;
    if (operador === "-") acumulador += numero;
    if (operador === "/") acumulador += numero;
    if (operador === "*") acumulador += numero;
  }

  console.log(acumulador);
};

conta("+", 1, 20, 30, 40, 50);

// rest operator sempre tem que ser o ultimo
