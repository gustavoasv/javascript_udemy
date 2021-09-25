function getTimeFromSeconds(segundos) {
  const data = new Date(segundos * 1000);
  return data.toLocaleTimeString("pt-BR", {
    hour12: false,
    timeZone: "GMT",
  });
}

const relogio = document.querySelector(".relogio");
const iniciar = document.querySelector(".iniciar");
const pausar = document.querySelector(".pausar");
const zerar = document.querySelector(".zerar");
let segundos = 0;
let timer;

function iniciaRelogio() {
  timer = setInterval(function () {
    segundos++;
    relogio.innerHTML = getTimeFromSeconds(segundos);
  }, 01);
}

document.addEventListener("click", function (e) {
  const el = e.target;
  if (el.classList.contains("zerar")) {
    clearInterval(timer);
    relogio.innerHTML = "00:00:00";
    relogio.style.color = "black";
    segundos = 0;
  }
  if(el.classList.contains('iniciar')){
    clearInterval(timer);
    relogio.style.color = "black";
    iniciaRelogio();
  }

  if(el.classList.contains('pausar')){
    clearInterval(timer);
    relogio.style.color = "red";
  }
});
