// Funcoes contrutoras -> retorna Objetos

//Funcao construtora -> sempre inicia com letras maiusculas.

function Pessoa(nome, sobrenome) {
  // Tudo aqui dentro são atributos e métodos privado, não acressiveis fora do escopo.

  const ID = 123456;

  const metodoInterno = function () {};

  this.nome = nome;
  this.sobrenome = sobrenome;

  this.metodo = function () {
    console.log(this.nome + ": sou um metodo");
  };
}

const p1 = new Pessoa("Gustavo", "Alves");
const p2 = new Pessoa("Maria", "Alves");

console.log(p1.nome);
console.log(p1);
p2.metodo();
