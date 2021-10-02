// Filtrar os pares
// Dobrar os valores
// Dobrar os valores pares
const numeros = [5, 10, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const pares = numeros.filter(valor => valor % 2 === 0);

const valorDobrado = numeros.map(valor => valor + valor);

const somaDetudo = numeros.reduce((acc, valor) => acc + valor);

console.log(pares);
console.log(valorDobrado);
console.log(somaDetudo);


const parDobrado = pares.map(valor => valor * 2)

console.log(parDobrado)