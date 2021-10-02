// Reduce -> reduz o array a um unico elemento

// Caso for alterar todos os elemntos ou um elemnto do array original -> MAP()

// Caso filtrar todos os elementos de um array -> FILTER()

// Caso reduzir o array a um elemnto -> REDUCE()

const numeros = [5, 10, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const total = numeros.reduce(function (acumulador, valor, indece, array) {
  acumulador += valor;
  // preciso retornar um valor para que o acumulador na iteração do laço tenha um valor
  return acumulador;
}, 0);

console.log(total);

// retorne a pessoa mais velha

const pessoas = [
  { nome: "Gustavo", idade: 62 },
  { nome: "Luiz", idade: 23 },
  { nome: "Eduarda", idade: 55 },
  { nome: "Leticia", idade: 19 },
  { nome: "Rosana", idade: 32 },
  { nome: "Wallace", idade: 47 },
  { nome: "Wallacezicadobagulho", idade: 47 },
];

const maisVelha = pessoas.reduce((acumulador, valor) => {
  if (acumulador.idade > valor.idade) return acumulador;
  return valor;
});

console.log(maisVelha);
