function valorConsumo(){
    var inQuilo = document.getElementById("inQuilo");
    var inCliente = document.getElementById("inCliente");

    var quilo = Number(inQuilo.value) / 1000;
    var cliente = Number(inCliente.value) * quilo;

    var outResposta = document.getElementById("outResposta");
    outResposta.textContent = "Valor a pagar R$: " + cliente.toFixed(2);
}

var btCalcularPreco = document.getElementById("btCalcularPreco");
btCalcularPreco.addEventListener("click", valorConsumo);   