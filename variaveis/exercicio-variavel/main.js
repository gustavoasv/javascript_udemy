const nome = 'Gustavo';
const sobreNome = 'Alves';
const idade = 19;
const peso = 90;
const altura = 1.75;

let imc;

imc = peso / (altura * altura)

console.log(`${nome} ${ sobreNome} tem ${idade} anos, pesa ${peso}kg tem ${altura} de altura e seu IMC é de ${imc.toFixed(2)}`)