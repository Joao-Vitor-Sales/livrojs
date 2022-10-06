function promocao(){
    var inMedicamento = document.getElementById("inMedicamento");
    var inPreco = document.getElementById("inPreco");
    var outMedicamento = document.getElementById("outMedicamento");
    var outPreco = document.getElementById("outPreco");
    
    var medicamento = inMedicamento.value;
    var preco = Number(inPreco.value);

    var promocao = Math.floor(preco * 2);

    outMedicamento.textContent = "Promoção de " + medicamento;
    outPreco.textContent = "Leve 2 por apenas R$: " + promocao.toFixed(2);
}

var btPromocao = document.getElementById("btPromocao");
btPromocao.addEventListener("click", promocao);