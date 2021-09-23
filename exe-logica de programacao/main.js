// escreva uma funcao que recebe 2 numeros e retorne o  maoior dele

function max(x, y) {
  return Math.max(x, y);
}

console.log(max(20, 80));

function n(n1, n2) {
  return n1 > n2 ? n1 : n2;
}

console.log(n(2, 5));

/*

Escreva uma função chamada ePaisagem que recebe dois arqgumentos, largura e altura de uma imagem 
retorne true se a imagem estiver no modo paisagem

*/

let ePaisagem = (w, h) => w > h;

console.log(ePaisagem(400, 100));

/*
Escreva uma função que recebe um numero e retorne o seguinte:

* Numero é divisivel por 3 == Fizz
* Número é divisivel por 5 == Buzz
* Número é divisivel por 3 e 5 == Fizbuzz
* Número é divisivel por por 3 e 5 == retorna o propio numero
* Checar se um numero é realmente um  numero 
* Use a funcao com numeros de 0 a 100

*/

function fizzBuzz(numero) {
  if (typeof numero != 'number') return numero;
  if (numero % 3 === 0 && numero % 5 === 0) return "FizzBuzz";
  if (numero % 3 === 0) return "Fizz";
  if (numero % 5 === 0) return "Buzz";
}
 
for (let i = 0; i <= 100; i++){
  console.log(i, fizzBuzz(i))
}