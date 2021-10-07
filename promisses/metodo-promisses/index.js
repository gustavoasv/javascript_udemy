function aleatorio(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== "string") reject(false);
    setTimeout(() => {
      resolve(msg.toUpperCase() + " - Passei na promise");
    }, tempo);
  });
}
function baixaPagina() {
  const emCache = false

  if(emCache){
    return Promise.resolve('Pagina em cache')
  } else{
    return esperaAi('Baixei a pagina', 3000)
  }
}

baixaPagina()
 .then(dadosPagina => {
   console.log(dadosPagina)
 })
 .catch(e => console.log(e))
//Promise.all

const promises = [
  esperaAi("Promise 1", 3000),
  esperaAi("Promise 2", 500),
  esperaAi("Promise 3", 1000),
];

Promise.all(promises) // retorna um array com todas as promessas resolvidas se uma der errado tpdas é rejeitada
  .then(function (valor) {
    console.log(valor);
  })
  .catch(function (erro) {
    console.log(erro);
  });

// Promisse.race

Promise.race(promises) // retorna a primeria promessa que for resolvida primeiro
  .then(function (valor) {
    console.log(valor);
  })
  .catch(function (erro) {
    console.log(erro);
  });

// Métodos

// Promise.all
// Promisse.race
// Promise.resolve
// Promisse.reject
