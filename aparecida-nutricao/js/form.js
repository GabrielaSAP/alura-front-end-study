const botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click",function(event){
    event.preventDefault();
    
    const form = document.querySelector("#form-adiciona");
    // Extraindo informações do paciente do form
    let paciente = obtemPacienteDoFormulario(form);

    // Cria a tr e a td do paciente
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
    imcTd.textContent = calculaImc(peso,altura);

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    // Adicionando o paciente na tabela
    const tabela = document.querySelector("#tabela-pacientes");
    
    tabela.appendChild(pacienteTr);
})

function obtemPacienteDoFormulario(form){

    let paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    
    return paciente;
}