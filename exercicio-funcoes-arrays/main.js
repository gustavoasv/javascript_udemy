function meuEscopo() {
  const form = document.querySelector(".form");
  const resultado = document.querySelector(".resultado");
  const pessoas = [];

  function recebeEventoForm(evento) {
    evento.preventDefault();

    const nome = form.querySelector(".nome").value;
    const sobreNome = form.querySelector(".sobrenome").value;
    const peso = form.querySelector(".peso").value;
    const altura = form.querySelector(".altura").value;

    resultado.innerHTML = `<p>${nome} ${sobreNome} ${peso} ${altura}</p>`

    pessoas.push({
        nome: nome,
        sobreNome: sobreNome,
        peso: peso,
        altura: altura,
    })

    console.log(pessoas)
  }

  form.addEventListener("submit", recebeEventoForm);
}

meuEscopo();
