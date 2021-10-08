// return
// retorna um valor
// Termina a função

function soma(a, b) {
    return a + b;
}

soma(2, 5);

function criaPessoa(nome, sobrenome) {
    return { nome, sobrenome };
}

const p1 = criaPessoa("Gustavo", "Alves");

console.log(p1);

function falaFrase(comeco) {
    function falaResto(resto) {
        return comeco + "  " + resto;
    }

    return falaResto;
}

const olaMundo = falaFrase("Ola");

console.log(olaMundo("Mundo!"));


function criaMultiplicador(multiplicador) {
    return function (n) {
        return n * multiplicador;
    }
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(2);
const quadriplica = criaMultiplicador(2);

console.log(duplica(2))
console.log(triplica(2))
console.log(quadriplica(2))