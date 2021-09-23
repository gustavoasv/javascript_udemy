function mostraHora() {
  let data = new Date();

  return data.toLocaleTimeString("pt-BR", {
    hour12: false,
  });
}

function functcaoDoIterval() {
  console.log(mostraHora());
}

const timer = setInterval(functcaoDoIterval, 1000);

const stop = setTimeout(function () {
  clearInterval(timer);
}, 10000);
