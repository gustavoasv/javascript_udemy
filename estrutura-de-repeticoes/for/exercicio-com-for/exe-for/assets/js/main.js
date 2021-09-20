const elementos = [
  { tag: 'h1', texto: 'pecorrendo o array e criando um elemento enquanto o indice for menor que a variavel i'},
  { tag: "p", texto: "Frase 1" }, // 0
  { tag: "div", texto: "Frase 2" }, // 1
  { tag: "section", texto: "Frase 3" }, // 2
  { tag: "footer", texto: "Frase 4" }, // 3
];

const container = document.querySelector(".container");
const div = document.createElement("div");

for (let i = 0; i < elementos.length; i++) {
  let { tag, texto } = elementos[i];
  let newTag = document.createElement(tag);
  newTag.innerHTML = texto;
  div.appendChild(newTag);
  console.log(tag, texto);
}
container.appendChild(div);
