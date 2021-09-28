// IIFE -> Immediately invoked function expression

// function qualquerCoisa() {
//   console.log('Qualquer Coisa')
// }

// qualquerCoisa()



// Usamos quando queremos criar funcoes anonimas e execulta-las sem que haja conflito com o escopo global

/*

sintaxe -> (function(*PARAMETOS DA FUNÇÂO AQUi*){

   
     BLOCO DE COMANDO AQUI



}(*ARGUMENTOS DA FUNÇÂO AQUI*)  <- chamando a função imediatamente )




*/


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
