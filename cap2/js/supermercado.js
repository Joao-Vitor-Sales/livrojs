function promocao(){
    var inProduto = document.getElementById("inProduto");
    var inPreco = document.getElementById("inPreco");
    var outMensagemDesconto = document.getElementById("outMensagemDesconto");
    var outValorDesconto = document.getElementById("outValorDesconto");

    var produto = inProduto.value;
    var preco = Number(inPreco.value);

    var calculo1 = (preco * 2) + (preco / 2);
    var calculo2 = preco / 2;

    // outMensagemDesconto.textContent = produto + " - Promoção: Leve 3 por R$: " + calculo1.toFixed(2); 
    outMensagemDesconto.textContent = `${produto} - Promoção: Leve 3 por R$: ${calculo1.toFixed(2)}`; 
    outValorDesconto.textContent = "O 3° produto custa apenas R$: " + calculo2.toFixed(2);
}

var btPromocao = document.getElementById("btPromocao");
btPromocao.addEventListener("click", promocao);