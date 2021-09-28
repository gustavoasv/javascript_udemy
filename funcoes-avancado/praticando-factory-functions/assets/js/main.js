function criaCalculadora() {
  return {
    display: document.querySelector(".display"),
    btnClear: document.querySelector(".btn-clear"),

    incia: function () {
      this.clickBotoes();
      this.pressionaEnter()
    },
    
    pressionaEnter(){
      this.display.addEventListener('keyup', e =>{
        if(e.keyCode === 13){
          this.realizaConta()
        }
      })
    },

    realizaConta() {
      let conta = this.display.value;

      try {
        conta = eval(conta);

        if (!conta) {
          alert("Conta invalida");
          return;
        }
        this.display.value = conta;
      } catch (e) {
        alert("Conta invalida");
        return;
      }
    },

    clearDisplay() {
      this.display.value = "";
    },

    apagaUm() {
      this.display.value = this.display.value.slice(0, -1);
    },

    clickBotoes() {
      document.addEventListener(
        "click",
        function (e) {
          const el = e.target;

          if (el.classList.contains("btn-num")) {
            this.btnParaDisplay(el.innerText);
          }
          if (el.classList.contains("btn-clear")) {
            this.clearDisplay();
          }
          if (el.classList.contains("btn-del")) {
            this.apagaUm();
          }

          if (el.classList.contains("btn-eq")) {
            this.realizaConta();
          }
        }.bind(this)
      );
    },
    btnParaDisplay(valor) {
      this.display.value += valor;
    },
  };
}

const calculadora = criaCalculadora();
calculadora.incia();

// sempre que quiser se referenciar uma chave dentro de um objeto usamos a palavra THIS
