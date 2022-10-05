function converterDuracao(){
    //cria referência aos elementos da página
    var inTitulo = document.getElementById("inTitulo");
    var inDuracao = document.getElementById("inDuracao");
    var outTitulo = document.getElementById("outTitulo");
    var outResposta = document.getElementById("outResposta");

    //obtém conteúdos dos campos de entrada
    var titulo = inTitulo.value;
    var duracao = Number(inDuracao.value);

    //arrendonda para baixo o resultado da divisão
    var horas = Math.floor(duracao / 60);
    //obtém o resto da divisão entre os número
    var minutos = duracao % 60;

    //altera o conteúdo dos parágrafos de respota
    outTitulo.textContent = titulo;
    outResposta.textContent = horas + " hora(s) e " + minutos + " minuto(s)";
}

// cria uma referência ao elemento btConverter (botão
var btConverter = document.getElementById("btConverter");
btConverter.addEventListener("click", converterDuracao);