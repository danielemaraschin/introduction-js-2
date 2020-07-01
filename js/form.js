var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    /* ESSA PARTE:Chama valores inseridos pelo usuario nos inputs = vou usar esses dados para depois fazer o objeto paciente lá embaixo e apagar essas variaveis aqui (essa parte de código)
   var nome = form.nome.value;
   var peso = form.peso.value;
   var altura = form.altura.value;
   var gordura = form.gordura.value;*/

   //var paciente é criada após a criação do objeto paciente mais abaixo, após apagar essa parte acima da var nome=form.nome.value ,...

   var paciente = ObtemPacienteDoFormulario(form);

    /*cria a linha TR - function montaTR irá fazer o que essas variaveis estavam fazendo individualmente
   var pacienteTr = document.createElement("tr");

   //cria as colunas
   var nomeTd = document.createElement("td");
   var pesoTd = document.createElement("td");
   var alturaTd = document.createElement("td");
   var gorduraTd = document.createElement("td");
   var imcTd = document.createElement("td");
    
   //adiciona valores nas TDS (Valores inseridos nos inputs pelo usuario)
   nome});Td.textContent = peso;
   alturaTd.textContent = altura;
   gorduraTd.textContent = gordura;
   imcTd.textContent = calculaImc(peso,altura);
-----> --> quando alterar para a funcao montaTr o nometd.textContent será alterado colocando `paciente.' antes de cada característica do paciente
ex.:  nomeTd.textContent = paciente.nome;
   //associa as colunas(td's) na linha(tr)
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild (imcTd);

    */


// var pacienteTr = montaTr(paciente);
//desativei acima pq passei comando p/funcao:adicionaPacienteNaTabela


    var erros = validaPaciente(paciente);
    console.log(erros);

    if (erros.length > 0) {
        exibeMensagensDeErro (erros);
        return;
    }

//adiciona o paciente, a tr, na tabela
//      var tabela = document.querySelector("#tabela-pacientes");
//desativei acima e abaixo pq passei comando p/funcao: adicionaPacienteNaTabela
//      tabela.appendChild(pacienteTr);

    adicionaPacienteNaTabela(paciente);

    form.reset();
    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";

});

function adicionaPacienteNaTabela(paciente){
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);

}



function exibeMensagensDeErro (erros){
    var ul = document.querySelector ("#mensagens-erro");
    ul.innerHTML = "";
   
    erros.forEach(function(erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);   
    });

    /* fazer com o for normal:
    for (var i = 0; i< erros.lenght; i++){
        var erro = erros [i];
    }    */

}


function ObtemPacienteDoFormulario (form){
    
    var paciente = {
        nome : form.nome.value,
        peso : form.peso.value,
        altura : form.altura.value,
        gordura : form.gordura.value,
        imc : calculaImc (form.peso.value, form.altura.value)
    }

    return paciente;

}

function montaTr (paciente) {

    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    /*
    cria as colunas td (antes de fazer a funcao montaTd as variaveis abaixo estavam aqui
    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");
     
    -->adiciona valores nas TDS (Valores que estão declarados no objeto paciente por isso paciente.nome/ paciente.peso...)
    -->como o imc já foi calculado no objeto paciente, pode agora só pegar o valor do imc, nao precisa calcular novamente);
    nomeTd.textContent = paciente.nome;
    pesoTd.textContent = paciente.peso;
    alturaTd.textContent = paciente.altura;
    gorduraTd.textContent = paciente.gordura;
    imcTd.textContent = paciente.imc;
    */

        
    //associa as colunas(td's) na linha(tr)
     pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
     pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
     pacienteTr.appendChild(montaTd(paciente.altura,"info-altura"));
     pacienteTr.appendChild(montaTd (paciente.gordura, "info-gordura"));
     pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    /*
       Primeiro fizemos assim separadamente, mas para diminuir o código, 
     apagamos a declaração da variável peso td,altura td e etc
     o valor atribuido a ela já é declarado direto no appendChild do pacienteTr
        
    var nomeTd = montaTd(paciente.nome, "info-nome");
    var pesoTd = montaTd(paciente.peso, "info-peso");
    var alturaTd = montaTd(paciente.altura,"info-altura");
    var gorduraTd = montaTd (paciente.gordura, "info-gordura");
    var imcTd = montaTd (paciente.imc, "info-imc");
    
    //associa as colunas(td's) na linha(tr):
     pacienteTr.appendChild(nomeTd);
     pacienteTr.appendChild(pesoTd);
     pacienteTr.appendChild(alturaTd);
     pacienteTr.appendChild(gorduraTd);
     pacienteTr.appendChild(imcTd);

     */

     return pacienteTr;

}

function montaTd (dado, classe){

    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;

}

function validaPaciente (paciente) {

    var erros = [];
    
    if (paciente.nome.length == 0) {
        erros.push ("O nome não pode ser em branco.");
    }

    if (!validaPeso(paciente.peso)) 
        erros.push ("O peso é inválido");

    if (!validaAltura(paciente.altura)) 
        erros.push ("Altura é inválida.");

    if (paciente.gordura.length == 0){
        erros.push ("A gordura não pode ser em branco.")
    }
    if (paciente.peso.length == 0) {
        erros.push ("O peso não pode ser em branco.");
    }
    if (paciente.altura.length == 0) {
        erros.push ("A altura não pode ser em branco.");
    }
                                                                                           

    return erros;
}