const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let n = 0;

numeros.forEach(function (valor, indice, array) {
  n += valor;
});

console.log(n);
