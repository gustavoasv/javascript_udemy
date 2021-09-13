const numero = Number(prompt('Digite um numero'));
const numeroTitulo = document.getElementById('num');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;
texto.innerHTML = `<p>Raiz quadrada ${numero ** 0.5}</p>`
texto.innerHTML += `<p>seu numero -2 é ${numero - 2}</p>`
texto.innerHTML += `<p>${numero} é um numero inteiro? ${Number.isInteger(numero)}</p>`
texto.innerHTML += `<p>È NaN? ${isNaN(numero)}</p>`
texto.innerHTML += `<p>Arredondando para baixo ${Math.floor(numero)}</p>`
texto.innerHTML += `<p>Arredodano para cima ${Math.ceil(numero)}</p>`
texto.innerHTML += `<p>Com dua casas decimais ${numero.toFixed(2)}</p>`