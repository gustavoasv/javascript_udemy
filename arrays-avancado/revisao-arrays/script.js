// array -> Valor por referencia

//                 0         1        2
const nomes = ["Eduardo", "Maria", "Joana"];
const sobreNome = new Array('"Silva", "Eduarda", "Mendeiros"');
console.log(sobreNome);

const Novo = [...nomes];

console.log(Novo.length);

nomes.unshift("Joao");
nomes.unshift("Wallace");

console.log(nomes);
