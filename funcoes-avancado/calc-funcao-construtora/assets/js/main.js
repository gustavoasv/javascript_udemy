function Calculadora() {
  const display = document.querySelector(".display");
  const botaoClear = document.querySelector(".btn-clear");

  this.inicia = () => {
    clickBotoes();
    pressionaEnter();
  };
  const pressionaEnter = () => {
    display.addEventListener("keyup", (e) => {
      if (e.keyCode === 13) {
        realizaConta();
      }
    });
  };

  const realizaConta = () => {
    let conta = display.value;

      try {
        conta = eval(conta);

        if (!conta) {
          alert("Conta invalida");
          return;
        }
        display.value = conta
      } catch (e) {
        alert("Conta invalida");
        return;
      }
    };

  const clearDisplay = () => {
    display.value = "";
  };

  const apagaUm = () => {
    display.value = display.value.slice(0, -1);
  };

  const clickBotoes = () => {
    document.addEventListener("click", function (e) {
      const el = e.target;
      if (el.classList.contains("btn-num")) {
        btnParaDisplay(el.innerText);
        console.log("Opa esta clicando");
      }
      if (el.classList.contains("btn-clear")) {
        clearDisplay();
      }
      if (el.classList.contains("btn-del")) {
        apagaUm();
      }
      if (el.classList.contains("btn-eq")) {
        realizaConta();
      }
    });
  };

  const btnParaDisplay = (valor) => {
    display.value += valor;
  };
}

const ver = new Calculadora();

ver.inicia();
