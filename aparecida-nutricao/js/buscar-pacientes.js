const botaoBuscar = document.querySelector("#buscar-pacientes");

botaoBuscar.addEventListener("click", function(){
    
    let xhr = new XMLHttpRequest();

    xhr.open("GET", "https://raw.githubusercontent.com/loresgarcia/Pacientes-API/master/pacientes.json");

    xhr.addEventListener("load", function(){
        const erroAjax = document.querySelector("#erro-ajax");
        if( xhr.status === 200){
            erroAjax.classList.add("invisivel");
            const resposta = xhr.responseText;
            const novosPacientes = JSON.parse(resposta);
    
            novosPacientes.forEach( function(novoPaciente){
                adicionaPacienteNaTabela(novoPaciente)
            });
        }else{
            console.log(xhr.status);
            console.log(xhr.responseText);
            erroAjax.classList.remove("invisivel");
        }

    });
    xhr.send();
});