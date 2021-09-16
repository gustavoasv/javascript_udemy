let button = document.querySelector('button');
let result = document.querySelector('.result')
result.style.display = 'none'
function ver(){
    const inputAltura = document.querySelector('#input-teste-2').value;
    const inputPeso = document.querySelector('#input-teste-1').value;
    let valores = inputPeso / (inputAltura * inputAltura)

    valores = valores.toFixed(2)
    if(inputPeso =='' || inputAltura =='')
    {   
        result.innerHTML = "<p>Existem valores que não foram preenchidos</p>";
        result.style.backgroundColor="#FE7288";
    }
    if(valores <= 18){
       result.innerHTML = `<p>Seu IMC é ${valores} (abaixo do peso)</p>`
    }else if(valores >= 18.5 && valores <=24.5){
        result.innerHTML = `<p>Seu IMC é ${valores} (peso normal)`
    }else if(valores >= 25.5 && valores<= 29.5){
        result.innerHTML = `<p>Seu IMC é ${valores} (Sobrepeso)`
    }else if(valores >= 30 && valores <= 34.9){
        result.innerHTML = `<p>Seu IMC é ${valores} (Obesidade grau I)</p>`
    }else if(valores >= 35 && valores <= 39.9){
        result.innerHTML = `<p>Seu IMC é ${valores} (Obesidade grau II)</p>`
    }else if(valores >= 40){
        result.innerHTML = `<p>Seu IMC é ${valores} (Obesidade grau III)</p>`
    }else if(inputAltura === ' '){
        result.innerHTML = `<p>peso invalido</p>`
        result.style.backgroundColor = 'red'
    }
    result.style.display = 'block'
}
