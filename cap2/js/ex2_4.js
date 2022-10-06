function calcularPreco(){
    //cria referência aos elementos da página
    var inQuilo = document.getElementById("inQuilo");
    var inConsumo = document.getElementById("inConsumo");
    var outValor = document.getElementById("outValor");

    //obtém conteúdo dos campos de entrada
    var quilo = Number(inQuilo.value);
    var consumo = Number(inConsumo.value);

    //calcula o valor a ser pago
    var valor = (quilo / 1000) * consumo;
    //altera o conteúdo da linha de resposta
    outValor.textContent = "Valor a pagar R$: " + valor.toFixed(2);
}

//cria referência ao elemente btCalcular
var btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", calcularPreco);