const titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

const pacientes = document.querySelectorAll(".paciente");

for(let i = 0; i < pacientes.length; i++){
    let paciente = pacientes[i];

    const tdPeso = paciente.querySelector(".info-peso");
    const peso = tdPeso.textContent;
    
    const tdAltura = paciente.querySelector(".info-altura");
    const altura = tdAltura.textContent;
    
    const tdImc = paciente.querySelector(".info-imc");
    
    let pesoValido = true;
    let alturaValida = true;
    
    if(peso <= 0 || peso >= 1000){
        console.log("Peso inválido")
        pesoValido = false;
        tdImc.textContent = "Peso inválido!";
        paciente.classList.add("paciente-invalido");
    }
    if(altura <= 0 || altura >= 3.00){
        console.log("Altura inválida");
        alturaValida = false;
        tdImc.textContent = "Altura inválida!";
        paciente.classList.add("paciente-invalido");
    }
    
    if(alturaValida && pesoValido){
        const imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(2);
    }
}

const botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click",function(event){
    event.preventDefault();
    
    const form = document.querySelector("#form-adiciona");

    const nome = form.nome.value;
    const peso = form.peso.value;
    const altura = form.altura.value;
    const gordura = form.gordura.value;

    const pacienteTr = document.createElement("tr");

    const nomeTd = document.createElement("td");
    const pesoTd = document.createElement("td");
    const alturaTd = document.createElement("td");
    const gorduraTd = document.createElement("td");
    const imcTd = document.createElement("td");

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;
    imcTd.textContent = peso / (altura * altura);

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd.toFixed(2));

    const tabela = document.querySelector("#tabela-pacientes");
    
    tabela.appendChild(pacienteTr);

    console.log(form);
})