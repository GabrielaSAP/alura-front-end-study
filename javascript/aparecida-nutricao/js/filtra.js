const campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){
    console.log(this.value);
    if(this.value.length > 0){
        for(var i= 0; i < pacientes.length; i++){
            paciente = pacientes[i];
            let tdNome = paciente.querySelector(".info-nome");
            let nome = tdNome.textContent;
            let expressao = new RegExp(this.value,"i");
            if(!expressao.test(nome)){
                paciente.classList.add("invisivel");
            }else{
                paciente.classList.remove("invisivel");
            }
        }
    }else{
        for (let i = 0; i < pacientes.length; i++) {
            paciente = pacientes[i];
            paciente.classList.remove("invisivel");
        }
    }
})