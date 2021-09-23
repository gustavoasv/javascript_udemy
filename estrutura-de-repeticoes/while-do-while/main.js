// quando usamos while e do wile nao sabemos quando ele vai parar de ser execultado

// const nome = "Luiz";
// let controle = 0;

// while (controle < nome.length) {
//   console.log(controle);

//   controle++;
// }

// console.log("Segue a vida...");

function random(min, max) {
  const r = Math.random() * (max - min) + min;
  return Math.floor(r);
}
const min = 1;
const max = 50;

let rand = random(1, 50);

console.log(rand);

while (rand !== 10) {
  rand = random(1, 50);
  console.log(rand);
}

// Do While === execulta e depois chega a condição;

do {
  rand = random(1, 50);
  console.log(rand);
} while (rand !== 10);
