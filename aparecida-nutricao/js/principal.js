const titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

const paciente = document.querySelector("#primeiro-paciente");

const tdPeso = paciente.querySelector(".info-peso");
const peso = tdPeso.textContent;

const tdAltura = paciente.querySelector(".info-altura");
const altura = tdAltura.textContent;

const tdImc = paciente.querySelector(".info-imc");

const pesoValido = true;
const alturaValida = true;

if(peso <= 0 || peso >= 1000){
    console.log("Peso inválido")
    pesoValido = false;
    tdImc.textContent = "Peso inválido!";
}
if(altura <= 0 || altura >= 3.00){
    console.log("Altura inválida");
    alturaValida = false;
    tdImc.textContent = "Altura inválida!";
}

if(alturaValida && pesoValido){
    const imc = peso / (altura * altura);
    tdImc.textContent = imc
}