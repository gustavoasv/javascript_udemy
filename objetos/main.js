//  console.log(pessoal.sobrenome)

// function criaPessoa(nome, sobrenome, idade){
//    return {
//        nome: nome,
//        sobrenome: sobrenome,
//        idade: idade
//    }
// }
// const pessoa = criaPessoa('Gustavo', 'Alves', 20)

// console.log(pessoa)

const pessoal = {
  nome: "Gustavo",
  sobrenome: "Alves",
  idade: 20,

  fala() {
    console.log(`${this.nome} ${this.sobrenome} esta falando oi`);
  },

  idadeMais() {
    console.log(this.idade++);
  },
};

pessoal.fala();
pessoal.idadeMais();

setTimeout(pessoal.idadeMais(), 1000);
