const nomeCliente = prompt('Digite seu nome:');
const saldoInicial = Number(prompt(`Digite seu saldo inicial:`));
const saque = Number(prompt(`Qual o valor do saque?`));

const resto = saldoInicial - saque;

let novoSaldo = "";

let verificacao = "";

if(saque > saldoInicial){
    verificacao = `<b>Saldo Insuficiente. <br> Valor disponível na conta: ${saldoInicial}.</b><br>`;
} else{
    resto;
    verificacao = `<b>Saque realizado. <br> Valor disponível na conta: ${saldoInicial}.</b><br>`;
}

document.body.innerHTML = `<b> Cliente: </b> ${nomeCliente} <br> <b> Saldo inicial: </b> ${saldoInicial} <br> <b> Saque: </b> ${saque} <br> <b> Novo Saldo: </b> ${resto}`;
