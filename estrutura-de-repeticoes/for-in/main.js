// For in -> le os indices ou chaves do objeto

const frutas = ["Pera", "Macã", "Uva"];

for (let index in frutas) {
  console.log(frutas[index]);
}
console.log("+++++++++++++++++++++++");
const pessoa = {
  nome: "Gustavo",
  sobrenome: "Alves",
  idade: 20,
};

for (let chave in pessoa) {
  console.log(chave, pessoa[chave]);
}
