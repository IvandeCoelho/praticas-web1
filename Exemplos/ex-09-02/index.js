
let formulario = document.getElementById("formulario");
let inputIdade = document.getElementById("input-idade");
let paragrafoIdade = document.getElementById("p-idade");

formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();
    let valor = inputIdade.value;
    paragrafoIdade.innerHTML = "Idade informada: " + valor;
});
