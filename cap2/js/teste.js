function exibirFilme() {
    var titulo = document.getElementById("inTitulo").value;
    var inDuracao = document.getElementById("inDuracao").value;
    var transformationHoras = inDuracao / 60;
    var transformationMinutos = inDuracao % 60;
    var duracao = Math.round(transformationHoras) + " hora(s) " + transformationMinutos + " minuto(s)";
    document.getElementById("outResposta").textContent = titulo + " " + duracao;
}

var mostrar = document.getElementById("mostrar");
mostrar.addEventListener("click", exibirFilme);