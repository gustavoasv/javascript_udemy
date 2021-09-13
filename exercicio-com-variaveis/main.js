
// function ver(){
//     const nome = document.querySelector('input').value
//     let el = document.querySelector(".ex")

//      el.innerHTML = `<p>Seu nome é ${nome}</p>`
//      el.innerHTML += `<p>Seu nome tem ${nome.length} letras</p>`
//      el.innerHTML += `<p>A segunda letra do seu nome é ${nome[1]}</p>`

//      el.innerHTML += `<p>As ultimas 3 letras do seu nome são ${nome.slice(-3)}</p>`
//      el.innerHTML += `<p>As palavras do seu nome são ${nome.split(', ')}</p>`;
//      el.innerHTML += `<p>Seu nome com letras maiuscula ${nome.toUpperCase()}</p>`;
//      el.innerHTML += `<p>Seu nome com letras mainusculas ${nome.toLocaleLowerCase()}</p>`;
   
// }



 function ver(){
     const nome = document.querySelector('input').value
    let el = document.querySelector(".ex")

    el.innerHTML = `<h2>${nome} é gente boa</h2>`;

    if(nome == 'Juliano'){
        el.innerHTML = `<h2>${nome} é viado</h2>`;
    }
 }