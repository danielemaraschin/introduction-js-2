var pacientes = document.querySelectorAll(".paciente");

/* this é o dono do evento.
    Pacientes add após a leitura do código nao serao removidos com essa função, 
        por isso iremos deletar essa função e adicionar um escutador de evento para toda a "table";
        
    pacientes.forEach(function(paciente){
    paciente.addEventListener("dblclick", function(){
        console.log("ok!!");
        this.remove();
    });
});*/

var tabela = document.querySelector("table");
    

/*tabela.addEventListener("dblclick", function(event){
    var alvoEvento = event.target;
    var paiDoAlvo = alvoEvento.parentNode; // TR que é paciente inteiro = quem eu quero remover;
        //event.target.parentNode = pai do alvo
    paiDoAlvo.remove();

    // ou faz  event.target.parentNoode.remove();
    //dará o msm resultado que o codigo acima , mas com menos variáveis, diminui a linha de codigo 
    //mas fica mais facil de entender pra minha compreensao/estudo;Paulo	
    
});*/


tabela.addEventListener("dblclick", function(event){
  event.target.parentNode.classList.add("fadeOut");

    setTimeout(function(){
        event.target.parentNode.remove();
    }, 500);
    //valor em milissegundos; 500 milissegundos é 0,5s;
});