
const calcularLocacao = (diaria, dias, fixo) => {
    return (diaria * dias) + fixo;
}

const inputVeiculo = document.querySelector('#veiculo');
const inputDiaria = document.querySelector('#diaria');
const inputFixo = document.querySelector('#input-fixo');
const inputDias = document.querySelector('#input-dias');
const btnCalcular = document.querySelector('#btn-calcular');
const divSaida = document.querySelector('#saida');
const form = document.querySelector('#form');

// trocar para o formulario
form.addEventListener('submit', (e) => {
    e.preventDefault();

    let veiculo = inputVeiculo.value;
    let diaria = Number(inputDiaria.value);
    let fixo = Number(inputFixo.value);
    let dias = Number(inputDias.value);

    //let valorLocacao = calcularLocacao(diaria, dias, fixo);
    divSaida.innerHTML="Clicou";
    //divSaida.innerHTML = 'O total da locação do veículo ' + veiculo + ' é R$ ' + valorLocacao.toFixed(2);
});
