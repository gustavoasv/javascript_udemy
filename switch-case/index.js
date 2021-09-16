const data = new Date();
const diaSemana = data.getDay();

let diaSemanaTexto;

// if (diaSemana === 4) {
//   diaSemanaTexto = "Quinta";
// }
// console.log(diaSemana, diaSemanaTexto);

switch (diaSemana) {
  case 0:
    diaSemanaTexto = "domingo";
    break;
  case 1:
    diaSemanaTexto = "segunda";
    break;
  case 2:
    diaSemanaTexto = "terça";
    break;
  case 3:
    diaSemanaTexto = "quarta";
    break;
  case 4:
    diaSemanaTexto = "quinta";
    break;
  case 5:
    diaSemanaTexto = "sexta";
    break;
  case 6:
    diaSemanaTexto = "sabado";
    break;

  default:
    diaSemanaTexto = " ";
    break;
}

console.log(diaSemanaTexto);
