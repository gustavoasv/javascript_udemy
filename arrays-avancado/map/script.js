// map -> vai alterar valores de um array

const numeros = [5, 10, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosEmDobros = numeros.map((valor) => valor * 2);

console.log(numerosEmDobros);

// Para cada elemento
// Retorne apenas uma string com o nome da pessoa
// Remova apenas a chave nome do objeto
// Adicione uma chave id em cada objetos

const pessoas = [
  { nome: "Gustavo", idade: 62 },
  { nome: "Luiz", idade: 23 },
  { nome: "Eduarda", idade: 55 },
  { nome: "Leticia", idade: 19 },
  { nome: "Rosana", idade: 32 },
  { nome: "Wallace", idade: 47 },
  { nome: "Wallacezicadobagulho", idade: 47 },
];

const nomes = pessoas.map((obj) => obj.nome);
const idade = pessoas.map((obj) => obj.idade);
const comID = pessoas.map((obj, indice) => {
  const newObj = {...obj}
  newObj.id = indice
  return newObj;
});
console.log(nomes);
console.log(idade);
console.log(comID);

console.log(pessoas)