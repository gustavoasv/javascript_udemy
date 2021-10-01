// Jucao dos metod POP, PUSH, UNSHIFT E SHIFT faz.

const nomes = ["Maria", "João", "Eduardo", "Gabriel", "Júlia"];

// nomes.splice(comerçar, qtd.remover) <- recebe dois argumentos onde vamo começar a mexer e quantos vamos remover;

nomes.splice(0, 2);

console.log(nomes); // retorna um Array

// A partir do indice 3, ele vai adicionar um elemento e se tiver algum  elemento ele vai passar o elemnto que já estava e adicionar o argumeto no indice passado.

// Adicionadno mais um indice
nomes.splice(3, 2, 'Gustavo');

/*

(3) ['Eduardo', 'Gabriel', 'Júlia']
0: "Eduardo"
1: "Gabriel"
2: "Júlia"
3: "Gustavo"

A partir do indice 3 adicionou Gustavo 

*/


//  SUBSTITUINDO 

nomes.splice(0, 2, 'Gustavo', 'Alves');

// Substituiu o Eduardo e Gabriel (indice 0 e 2);



// SIMULANDO O METODO POP

