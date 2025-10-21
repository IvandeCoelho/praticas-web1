// 001
let formCambio = document.querySelector("#formCambio");
let valorReais = document.querySelector("#valorReais");
let valorDolar = document.querySelector("#valorDolar");
let resutlado = document.querySelector("#resultado");

//002
let formQuadrado = document.querySelector("#formQuadrado");
let valorNumQuadrado = document.querySelector("#numQuadrado");


let resultNumQuadrado = document.querySelector("#resultNumQuadrado");

//003
let formPol = document.querySelector("#formPol");
let numPolegadas = document.querySelector("#numPolegadas");
let btnPolegadas = document.querySelector("#btnPolegadas");
let resultCm = document.querySelector("#resultCm");

//004
let formPerimetro = document.querySelector("#formPerimetro");
let numRaio = document.querySelector("#numRaio");
let btnRaio = document.querySelector("#btnRaio");
let resultPerimetro = document.querySelector("#resultPerimetro");

//005
let formSalarioProf = document.querySelector("#formSalarioProf");
let horaAula = document.querySelector("#horaAula");
let qntHoras = document.querySelector("#qntHoras");
let btnSalarioProf = document.querySelector("#btnSalarioProf");
let resultSalarioProf = document.querySelector("#resultSalarioProf");

//006
let formNotaAluno = document.querySelector("#formNotaAluno");
let n1 = document.querySelector("#n1");
let n2 = document.querySelector("#n2");
let btnMediaAluno = document.querySelector("#btnMediaAluno");
let mediaAluno = document.querySelector("#mediaAluno");

//007
let formImc = document.querySelector("#formImc");
let peso = document.querySelector("#peso");
let altura = document.querySelector("#altura");
let btnImc = document.querySelector("#btnImc");
let resultadoImc = document.querySelector("#resultadoImc");

//009
let formIntervalo = document.querySelector("#formIntervalo");
let inicio = document.querySelector("#inicio");
let fim = document.querySelector("#fim");
let btnIntervalo = document.querySelector("#btnIntervalo");
let resultadoIntervalo = document.querySelector("#resultadoIntervalo");



/** =============================================================== */

//001
formCambio.addEventListener("submit", function (e) {
    e.preventDefault();
    var vReal = valorReais.value;
    var vDolar = valorDolar.value;

    if (vReal <= 0 || vDolar <= 0) {
        resutlado.innerHTML = "<strong>Erro:</strong><br>Informe um valor maior que 0.";
        resutlado.style.color = "red";
    } else {
        resutlado.style.color = "green";
        resutlado.innerHTML = "Você tem: US$ " + (vReal / vDolar).toFixed(2);
    }
});

//002
formQuadrado.addEventListener("submit", function (e) {
    e.preventDefault();
    var numQuadrado = valorNumQuadrado.value;

    resultNumQuadrado.innerHTML = numQuadrado + "² = " + Math.pow(numQuadrado, 2);
});

//003
formPol.addEventListener("submit", function (e) {
    e.preventDefault();
    var pol = numPolegadas.value;

    resultCm.innerHTML = pol + "'' = " + (pol * 2.54) + "cm";
});

//004
formPerimetro.addEventListener("submit", function (e) {
    e.preventDefault();
    var raio = numRaio.value;


    if (raio > 0) {
        resultPerimetro.style.color = "green";
        resultPerimetro.innerHTML = "Valor do perimetro: " + (2 * Math.PI * raio).toFixed(2) + "cm";
    } else {
        resultPerimetro.innerHTML = "<strong>Erro:</strong><br>Informe um valor maior que 0.";
        resultPerimetro.style.color = "red";
    }


});

//005
formSalarioProf.addEventListener("submit", function (e) {
    e.preventDefault();
    var valorHoraAula = horaAula.value;
    var valorQntHora = qntHoras.value;

    resultSalarioProf.innerHTML = "Salário: R$ " + (valorHoraAula * valorQntHora).toFixed(2);
})

//006
formNotaAluno.addEventListener("submit", function (e) {
    e.preventDefault();
    var n1Value = n1.value;
    var n2Value = n2.value;

    mediaAluno.innerHTML = "Média: " + (n1Value * 2 + n2Value * 3) / (2 + 3);
})

//007
formImc.addEventListener("submit", function (e) {
    e.preventDefault();
    var valorPeso = parseFloat(peso.value);
    var valorAltura = parseFloat(altura.value);
    var classificacao = "";
    if (valorAltura == 0 || valorPeso == 0) {
        resultadoImc.innerHTML = "<strong>Erro:</strong><br>Informe um valor maior que 0.";
        resultadoImc.style.color = "red";
    } else {

        var imc = valorPeso / Math.pow(valorAltura, 2);


        switch (true) {
            case (imc < 18.5):
                classificacao = "Abaixo do peso";
                break;
            case (imc >= 18.5 && imc <= 24.9):
                classificacao = "Peso normal";
                break;
            case (imc >= 25 && imc <= 29.9):
                classificacao = "Sobrepeso";
                break;
            case (imc >= 30 && imc <= 34.9):
                classificacao = "Obesidade Grau I";
                break;
            case (imc >= 35 && imc <= 39.9):
                classificacao = "Obesidade Grau II";
                break;
            case (imc >= 40):
                classificacao = "Obesidade Grau III (Mórbida)";
                break;
            default:
                classificacao = "Valor de IMC inválido";
                break;
        }
        //imc.innerHTML = "IMC: " + resultado.toFixed(2);
        resultadoImc.innerHTML = "IMC: " + imc.toFixed(2) + "<br>Você está: " + classificacao;
    }

});

//008



let numeros = [2, 6, 7, 24, 31, 45, 47, 86];

let somaPrimos = 0;

for (let n of numeros) {
    let isPrimo = true;
    if (n < 2) continue;
    if (n % 2 == 0) continue
    if (n == 2) { somaPrimos += 0 };

    for (let i = 3; i <= Math.sqrt(n); i++) {
        if (n % i == 0) {
            isPrimo = false;
            break;
        }
    }

    if (isPrimo) { somaPrimos += n };
}

console.log(somaPrimos)

//009
formIntervalo.addEventListener("submit", function (e) {
    e.preventDefault();

    var valInicio = inicio.value;
    var valFim = fim.value;
    var soma = 0;

    if (valInicio < valFim) {
        for (var i = valInicio; i <= valFim; i++) {
            if (i % 2 != 0) {
                soma = Number(soma + i);
            }
        }
    } else {
        for (var i = valFim; i <= valInicio; i++) {
            if (i % 2 != 0) {
                soma = Number(soma + i);
            }
        }
    }
    resultadoIntervalo.innerHTML = "Somou: " + soma;
});

