const pessoas = {
  nome: "Gustavo",
  sobrenome: "Alves",
};

console.log(pessoas["nome"]);

const pessoaOne = new Object();

pessoaOne.nome = "Gustavo";
pessoaOne.sobrenome = "Qualquer";
pessoaOne.idade = 20
pessoaOne.falarNome = function () {
  console.log(`${this.nome} esta falando seu nome`);
};
pessoaOne.getDataDeNascimento = function() {
  const dataAtual = new Date();
  return dataAtual.getFullYear() - this.idade
}
console.log(pessoaOne);
console.log(pessoaOne.falarNome());
console.log(pessoaOne.getDataDeNascimento())

// Factory funcions / Constructor functions

// Factory functions

function criaPessoa(nome, sobrenome){
  return [
    nome, 
    sobrenome
  ]
}

const c = criaPessoa('Gustavo', 'Alves')

console.log(c)