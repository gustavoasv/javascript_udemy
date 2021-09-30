// Funcoes recursivas -> uma função que ela mesmo se chama de volta

function recursiva(max) {
  if (max > 11111111122001) return;
  max++;
  console.log(max);
  recursiva(max);
}

console.log(recursiva(0));
