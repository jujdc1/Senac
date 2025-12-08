const nomeProduto = prompt('Digite o nome do produto:');
const precoProduto = Number(prompt('Digite o valor do produto:'));
const tipoCliente = prompt('Você é cliente: Comum, Estudante ou Assinante?');

let desconto = "";

if (tipoCliente.toLowerCase() === "assinante"){ 
    desconto = 0.20;
} else if (tipoCliente.toLowerCase() === "estudante"){
    desconto = 0.10;
} else {
    desconto = 0;
}

const valorDesconto = precoProduto * desconto;
const valorFinal = precoProduto - valorDesconto;

document.body.innerHTML += `<b>Produto:</b> ${nomeProduto}<br>
    <b>Cliente:</b> ${tipoCliente}<br>
    <b>Preço Original:</b> ${precoProduto.toFixed(2)}<br>
    <b>Desconto aplicado:</b> ${valorDesconto.toFixed(2)}<br>
    <b>Preço final:</b> ${valorFinal.toFixed(2)}`;