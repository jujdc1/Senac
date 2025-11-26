const form = document.querySelector('.formulario');
const pratos = document.querySelector('#pratos');
const bebidas = document.querySelector('#bebidas');
const erro = document.querySelector('.erro');
const resultado = document.querySelector('.resultado');
const adicionais = form.querySelector('.adicionais');

const precos = {
    prato: { tonkotsu: 10.00, lasanha: 20.00, arripa: 12.00 },
    bebida: { creme: 7.00, morango: 12.00, mojito: 15.00 },
    adicionais: { sobremesa: 10.00, molho: 2.00, embalagem: 2.00 }
};
