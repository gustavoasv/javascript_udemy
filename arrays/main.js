// ARRAY == lista de dados ordenada

const alunos = ["Gustavo", "Luiz", "Maria"];

alunos.push(2);
alunos.unshift("Leleco");
alunos[2] = "Eduardo";
alunos.pop();
console.log(alunos.slice(0, -3));

const rm = alunos.pop();
console.log(rm);
