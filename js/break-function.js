//código depois de quebrado em várias funções:

<button class="botao">Calcula</button>
<input class="numero"><input class="tabuada">
<span class="resultado"></span>
<script>

    function buscaElemento(seletor) {
        return document.querySelector(seletor);
    }

    function aplicaTabuada(numero, tabuada) {

        return numero * tabuada;
    }

    var botao = buscaElemento('.botao');
    var numero = buscaElemento('.numero');
    var tabuada = buscaElemento('.tabuada');
    var resultado = buscaElemento('.resultado');

    botao.addEventListener('click', function() {

        resultado.textContent = aplicaTabuada(numero.value, tabuada.value);

    });


</script>



esse era o código inicial 

<button class="botao">Calcula</button>
<input class="numero">
<input class="tabuada">
<span class="resultado"></span>

<script>

    var botao = document.querySelector('.botao');
    var numero = document.querySelector('.numero');
    var tabuada = document.querySelector('.tabuada');
    var resultado = document.querySelector('.resultado');

    botao.addEventListener('click', function() {

        resultado.textContent = numero.value * tabuada.value;

    });


esta faltando codigo, é só um exemplo de como separar em  varias funcoes...