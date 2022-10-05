function revendaDeVeiculo(){
    var veiculo = document.getElementById("inVeiculo");
    var preco = document.getElementById("inPreco"); //lembrar de quando for usar colocar o "Number()"

    var entrada = preco.value / 2;
    var saldo = (preco.value / 2) / 12;

    outVeiculo.textContent = "Promoção: " + veiculo.value;
    outEntrada.textContent = "Entrada de R$: " + entrada.toFixed(2);
    outSaldo.textContent = "+ 12x de R$: " + saldo.toFixed(2);
}

var btPromocao = document.getElementById("btPromocao");
btPromocao.addEventListener("click", revendaDeVeiculo);