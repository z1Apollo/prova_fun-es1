const pesoInput = document.querySelector("#peso");
const alturaInput = document.querySelector("#altura");
const btn = document.querySelector("#btn");
const resultadoDiv = document.querySelector("#resultado");

function calcularIMC(peso, altura) {
    return peso / (altura * altura);
}

function exibirResultado(imc) {
    resultadoDiv.innerHTML = `Seu IMC é: ${imc.toFixed(2)}`;
}

btn.addEventListener("click", () => {
    const peso = parseFloat(pesoInput.value);
    const altura = parseFloat(alturaInput.value);

    if (isNaN(peso) || isNaN(altura) || altura <= 0) {
        alert("Por favor, insira valores válidos.");
        return;
    }

    const imc = calcularIMC(peso, altura);
    exibirResultado(imc);
});
