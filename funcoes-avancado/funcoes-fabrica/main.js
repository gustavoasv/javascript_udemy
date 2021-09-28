// Functions Factory || Funções fábricas
// São funções que retornan obetos

// Factory function (Função fábrica)
function criaPessoa(nome, sobrenome, a, p) {
  return {
    nome,
    sobrenome,
    // getter
    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    },
    // setter
    set nomeCompleto(valor) {
      valor = valor.split(" ");
      this.nome = valor.shift();
      this.sobrenome = valor.join(" ");
      console.log(valor);
    },

    fala(assunto) {
      return `${nome} esta falando sobre ${assunto}`;
    },

    altura: a,
    peso: p,
    // getter
    get imc() {
      const indice = this.peso / this.altura ** 2;
      return Number(indice.toFixed(2));
    },
  };
}

const p1 = criaPessoa("Gustavo", "Alves", 1.9, 90);

// console.log(p1.imc());

console.log(p1.fala("JavaScript"));
console.log(p1.imc);

p1.nomeCompleto = "Maria Alves Silva";

console.log(p1.nomeCompleto);
console.log(p1.sobrenome);
