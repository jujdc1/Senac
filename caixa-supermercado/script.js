const produtos = [];

for (let contador = 1; contador <= 3; contador++){
    const nome = prompt(`Digite o nome do produto: ${contador}`);
    const categoria = prompt(`Digiter a categoria do produto: ${contador}`);
    const preco = Number((`Digite o preço do produto: ${contador}`));
    const qnt = Number(prompt(`Digite a quantidade do produto: ${contador}`));
    produtos.push({nome, categoria, preco, qnt});
}

let total = 0;
let temAlimento = false;
let listaProduto = ``;

for (let contador = 0; contador < produtos.length; contador++){
    const p = produtos[contador];                       
    const subTotal = p.preco * p.qnt;
    total += subTotal;

    if(p.categoria.toLowerCase() === `alimento`){
        temAlimento = true;
    }

    listaProduto += `-${p.nome}(${p.categoria}) - ${p.qnt} x R${p.preco.toFixed(2)} = R${subTotal.toFixed(2)} <br>`;
}

let desconto = 0;
if(temAlimento){
    desconto += total * 0.05;
}
if(total > 500){
    desconto += total * 0.10;
}

const valorFinal = total - desconto;

document.body.innerHTML += `<h2> Resumo da Compra </h2>
 ${listaProdutos}<br>
 Valor total: R$${total.toFixed(2)}<br>
 Desconto aplicado: R$${desconto}<br>
 Valor final: <b> R$${valorFinal.toFixed(2)} </b>`;
