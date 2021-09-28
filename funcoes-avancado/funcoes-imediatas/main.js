// IIFE -> Immediately invoked function expression

// function qualquerCoisa() {
//   console.log('Qualquer Coisa')
// }

// qualquerCoisa()

(function (idade, peso, altura) {
  const sobreNome = "Alves";
  function criaNome(nome) {
    return nome + " " + sobreNome;
  }

  function falaNome() {
    console.log(criaNome("Gustavo"));
  }

  falaNome();
  console.log(idade, peso, altura);
})(20, 90, 1.75);
