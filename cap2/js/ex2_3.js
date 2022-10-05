function mostrarPromocao(){
    //cria refrência aos elementos manipulados pelo programa
    var inVeiculo = document.getElementById("inVeiculo");
    var inPreco = documento.getElementeById("inPreco");
    var outVeiculo = document.getElementById("outVeiculo");
    var outEntrada = document.getElementeById("outEntrada");
    var outParcela = document.getElementById("outParcela");

    //obtém conteúdo dos campos de entrada
    var veiculo = inVeiculo.value;
    var preco = inPreco.value;

    //calcula valor da entrada e das parcelas
    var entrada = preco * 0.50;
    var parcela = (preco * 0.50) / 12;

    //altera o conteúdo dos parágrafos de respota
    outVeiculo.textContent = "Promoção: " + veiculo;
    outEntrada.textContent = "Entrada de R$: " + entrada.toFixed(2);
    outParcela.textContent = "+ 12x de R$: " + parcela.toFixed(2);
}

//cria um referência ao elemento btVerPromocao (botão)
var btVerPromocao = document.getElementById("btVerPromocao");
// registra um envento associado ao botão, para carregar uma função
btVerPromocao.addEventListener("click", mostrarPromocao);