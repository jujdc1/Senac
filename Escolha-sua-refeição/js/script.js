const form = document.querySelector('.formulario');
const prato = document.querySelector('#pratos');
const bebida = document.querySelector('#bebidas');
const erro = document.querySelector('.erro');
const resultado = document.querySelector('.resultado');
const adicionais = form.querySelector('input[type="checkbox"]');
const btnCalcular = form.querySelector('.btnCalcular');

const precos = {
    prato: { tonkotsu: 10.00, lasanha: 20.00, arripa: 12.00 },
    bebida: { creme: 7.00, morango: 12.00, mojito: 15.00 },
    adicionais: { sobremesa: 10.00, molho: 2.00, embalagem: 2.00 }
};

function calcular(e) {
    e.preventDefault();

    const btnNovoPedido = document.querySelector('#novoPedido');
    const pratos = prato.value;
    const bebidas = bebida.value;

    let total = 0;

    if (pratos === "") {
        erro.textContent = "Escolha um prato válido.";
        return;
    }
    if (bebidas === "") {
        erro.textContent = "Escolha uma bebida válida.";
        return;
    }

    erro.textContent = "";

    total += precos.prato[prato];
    total += precos.bebida[bebida];

    let extraEscolhidos = [];

    adicionais.forEach(item => {
        if (item.checked) {
            total += precos.adicionais[item.value];
            extraEscolhidos.push(item.value);
        }
    });

    resultado.innerHTML = `
    <h2>Resumo do pedido</h2>
    <p><b>Prato: </b>${prato}</p>
    <p><b>Bebida: </b>${bebida}</p>
    <p><b>Adicionais: </b>${extraEscolhidos.length > 0 ? extraEscolhidos.join(', ') : "nenhum"}</p>
    <p><b>Total: </b>${total.toFixed(2).replace('. ')(', ')}</p>
    <button id="novoPedido">Novo Pedido</button>
    `;

    form.classList.add('hidden');
    resultado.classList.remove('hidden');
    btnNovoPedido.addEventListener('click', resetar);

}

function resetar() {
    form.classList.remove('hidden');
    resultado.classList.add('hidden');
    form.reset();
    resultado.innerHTML = "";
}

btnCalcular.addEventListener('click', calcular);