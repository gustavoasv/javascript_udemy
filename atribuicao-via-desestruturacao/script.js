let a = "A";
let b = "B";
let c = "C";

[a, b, c] = [1, 2, 3]; // LADO ESQUERDO -> DESETRUTURAÇÃO / REATRIBUINDO A VARIAVEL

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const primeiroNumero = numeros[0]
// console.log(primeiroNumero)

const [primeiroNumero, segundoNumero, ...resto] = numeros;
console.log(primeiroNumero, segundoNumero);

console.log(resto);

// pegar o resro == ...rest
// espalhar == spread