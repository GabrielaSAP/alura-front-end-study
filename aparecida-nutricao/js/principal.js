const titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

const paciente = document.querySelector("#primeiro-paciente");

const tdPeso = paciente.querySelector(".info-peso");
const peso = tdPeso.textContent;

const tdAltura = paciente.querySelector(".info-altura");
const altura = tdAltura.textContent;

const imc = peso / (altura * altura);

console.log(imc)