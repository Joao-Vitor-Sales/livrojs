function revendaDeVeiculo(){
    var veiculo = document.getElementById("inVeiculo");
    var preco = document.getElementById("inPreco"); //lembrar de quando for usar colocar o "Number()"

    var entrada = preco / 2;
    var saldo = (preco / 2) / 12;

    outVeiculo.textContent = "Promoção: " + veiculo;
    outEntrada.textContent = "Entrada de R$: " + entrada; // ver se vai ser preciso colocar o "toFixed"
    outSaldo.textContent = "+ 12x de R$: " + saldo;
}

var btPromocao = document.getElementById("btPromocao");
btPromocao.addEventListener("click", revendaDeVeiculo);