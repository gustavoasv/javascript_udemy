// Filter -> vai filtrar o array, sempre vai retornar um array  com a mesma quantidade de elementos ou menos
// Map -> vai modificar o array
// Reduce -> reduz um array em um unico valor

// Retorne os números maiores que 10
const numeros = [5, 10, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const filter = numeros.filter((valor) => valor > 10);

// O filter recebe uma função de callback que irá iterar em cada um dos elemntos do array;

console.log(filter);
//  =========================

// Filtrando frutas
var fruits = ["apple", "banana", "grapes", "mango", "orange"];

function filterItems(query) {
  return fruits.filter(function (el) {
    return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
  });
}

console.log(filterItems("n")); // ['apple', 'grapes']
console.log(filterItems("an")); // ['banana', 'mango', 'orange']

// Exemplo complexo

const pessoas = [
  { nome: "Gustavo", idade: 62 },
  { nome: "Luiz", idade: 23 },
  { nome: "Eduarda", idade: 55 },
  { nome: "Leticia", idade: 19 },
  { nome: "Rosana", idade: 32 },
  { nome: "Wallace", idade: 47 },
  { nome: "Wallacezicadobagulho", idade: 47 },
];
// Retorne as pessoas que tem o nome com 5 letras ou mais
// retorne as pessoas com mais de 50 anos
// retorne as pessoas cujo nome termina com a

const pessoasComNomeGrande = pessoas.filter((valor) => valor.nome.length > 5);

console.log(pessoasComNomeGrande);

const filterPessoasIdade = pessoas.filter((valor) => valor.idade > 50);

console.log(filterPessoasIdade);

const nomeTerminacomA = pessoas.filter((valor) => {
  return valor.nome.toLowerCase().endsWith("a");
});

console.log(nomeTerminacomA);
