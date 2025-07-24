const resultado = document.getElementById('#resultado');

function imc() {
    const nome = document.getElementById('nome').value;
    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;
    const resultado = document.getElementById('resultado');

    if (nome !== '' || peso !== '' || altura !== '') {

        const valorIMC = (peso / (altura * altura)).toFixed(1);

        let classificacao = '';

        if (valorIMC < 18.5) {
            classificacao = 'Abaixo do peso';
        } else if (valorIMC < 25) {
            classificacao = 'Peso normal';
        } else if (valorIMC < 30) {
            classificacao = 'Sobrepeso';
        } else if (valorIMC < 35) {
            classificacao = 'Obesidade grau 1';
        } else if (valorIMC < 40) {
            classificacao = 'Obesidade grau 2';
        } else if (valorIMC > 40)  {
            classificacao = 'Obesidade Mórbida';
        } 

        resultado.textContent = `${nome}, seu IMC é ${valorIMC} e você está classificado como: ${classificacao}.`;

    } else {
        resultado.textContent  = 'Por favor, preencha todos os campos.';
    }


}
calcular.addEventListener('click', imc);







