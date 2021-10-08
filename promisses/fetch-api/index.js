fetch("pagina2.html")
  .then((resposta) => {
    if (resposta.status !== 200) throw new Error("ERRO 404 NOSSO");
    return resposta.text();
  })
  .then(html => console.log(html))
  .catch((e) => console.error(e));
