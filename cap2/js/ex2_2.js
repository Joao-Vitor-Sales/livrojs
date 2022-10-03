function exibirFilme() {
    var titulo = document.getElementById("inTitulo").value;
    var duracao = document.getElementById("inDuracao").value;
    document.getElementById("outResposta").textContent = titulo + " " + duracao;

}

var mostrar = document.getElementById("mostrar");
mostrar.addEventListener("click", exibirFilme);




// var inDuracao = document.getElementById("inDuracao");
// var transformationHoras = inDuracao / 60;
// var transformationMinutos = inDuracao % 60;
// var duracao = transformationHoras + "hora(s)" + tranformationMinutos + "minuto(s)";