const botaoBuscar = document.querySelector("#buscar-pacientes");

botaoBuscar.addEventListener("click", function(){
    
    let xhr = new XMLHttpRequest();

    xhr.open("GET", "https://raw.githubusercontent.com/loresgarcia/Pacientes-API/master/pacientes.json");

    xhr.addEventListener("load", function(){
        const resposta = xhr.responseText;
        const novosPacientes = JSON.parse(resposta);

        novosPacientes.forEach( function(novoPaciente){
            adicionaPacienteNaTabela(novoPaciente)
        });

    });
    xhr.send();
});