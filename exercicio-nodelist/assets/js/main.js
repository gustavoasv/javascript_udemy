const paragrafos = document.querySelector(".paragrafos");
const ps = paragrafos.querySelectorAll("p");
const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;

ps.forEach((element) => {
  element.style.color = "#FFF";
  element.style.backgroundColor = backgroundColorBody;
});
