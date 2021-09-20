// For of -> especifico para objetos iteravel como uma string ou array

const nome = ["Gustavo", "Luiz", "Marcos"];

// /* for classico*/ for (let i = 0; i < nome.length; i++) {
//   console.log(nome[i]);
// }

// /*For in*/ for (let i in nome) {
//   console.log(nome[i]);
// }

for (let vr of valor) {
  console.log(valor); // retorna apenas o valor
}

// nome.forEach((valor, indice) => {
//   console.log(valor, indice);
// });

/*

 * For clássico -> usa geralmente com iteraveis (array ou strings)
 * For in -> retorna o indice ou chave (string, array ou objetos)
 * For of - Retorna o valor em si (Iteraveis, Arrays ou string)
 

 */

/**
 * para arrays podemos usar qualquer um dos tres;
 * for in funciona com objetos
 */