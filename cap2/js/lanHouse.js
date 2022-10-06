function tempoDeUso(){
    var inValor = document.getElementById("inValor");
    var inUso = document.getElementById("inUso");
    var outValor = document.getElementById("outValor");

    var valor = Number(inValor.value);
    var uso = Number(inUso.value);

    var calculo1 = Math.ceil(uso / 15); // calcular o tempo do cliente arrendondando o número quebrado para cima
    var calculo2 = calculo1 * valor; //calcular o valor a ser pago

    outValor.textContent = "Valor a pagar R$: " + calculo2;
}

var btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", tempoDeUso);